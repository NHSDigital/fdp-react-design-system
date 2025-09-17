import * as G from "react";
import yt, { useState as Fe, useEffect as Ve, useCallback as be, useRef as Ae, createElement as ui, useMemo as $e, useContext as Uc, createContext as Oc, forwardRef as Pn, useImperativeHandle as di, useReducer as fi, memo as Wc, useId as hr } from "react";
import { createPortal as zc } from "react-dom";
function Vc(e) {
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
function Gc() {
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
function Yc() {
  return to || (to = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === T ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case g:
          return "Fragment";
        case b:
          return "Profiler";
        case p:
          return "StrictMode";
        case N:
          return "Suspense";
        case L:
          return "SuspenseList";
        case v:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case y:
            return "Portal";
          case M:
            return (R.displayName || "Context") + ".Provider";
          case $:
            return (R._context.displayName || "Context") + ".Consumer";
          case S:
            var H = R.render;
            return R = R.displayName, R || (R = H.displayName || H.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case I:
            return H = R.displayName || null, H !== null ? H : e(R.type) || "Memo";
          case C:
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
    function n(R) {
      try {
        t(R);
        var H = !1;
      } catch {
        H = !0;
      }
      if (H) {
        H = console;
        var z = H.error, se = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return z.call(
          H,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          se
        ), t(R);
      }
    }
    function a(R) {
      if (R === g) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === C)
        return "<...>";
      try {
        var H = e(R);
        return H ? "<" + H + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var R = w.A;
      return R === null ? null : R.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(R) {
      if (x.call(R, "key")) {
        var H = Object.getOwnPropertyDescriptor(R, "key").get;
        if (H && H.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function l(R, H) {
      function z() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          H
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: z,
        configurable: !0
      });
    }
    function u() {
      var R = e(this.type);
      return D[R] || (D[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function c(R, H, z, se, U, pe, ke, ce) {
      return z = pe.ref, R = {
        $$typeof: m,
        type: R,
        key: H,
        props: pe,
        _owner: U
      }, (z !== void 0 ? z : null) !== null ? Object.defineProperty(R, "ref", {
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
        value: ke
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function d(R, H, z, se, U, pe, ke, ce) {
      var ue = H.children;
      if (ue !== void 0)
        if (se)
          if (P(ue)) {
            for (se = 0; se < ue.length; se++)
              f(ue[se]);
            Object.freeze && Object.freeze(ue);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ue);
      if (x.call(H, "key")) {
        ue = e(R);
        var K = Object.keys(H).filter(function(fe) {
          return fe !== "key";
        });
        se = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", V[ue + se] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          se,
          ue,
          K,
          ue
        ), V[ue + se] = !0);
      }
      if (ue = null, z !== void 0 && (n(z), ue = "" + z), i(H) && (n(H.key), ue = "" + H.key), "key" in H) {
        z = {};
        for (var re in H)
          re !== "key" && (z[re] = H[re]);
      } else z = H;
      return ue && l(
        z,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), c(
        R,
        ue,
        pe,
        U,
        s(),
        z,
        ke,
        ce
      );
    }
    function f(R) {
      typeof R == "object" && R !== null && R.$$typeof === m && R._store && (R._store.validated = 1);
    }
    var h = yt, m = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), M = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), v = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), w = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = Object.prototype.hasOwnProperty, P = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var _, D = {}, A = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), ne = j(a(o)), V = {};
    Rn.Fragment = g, Rn.jsx = function(R, H, z, se, U) {
      var pe = 1e4 > w.recentlyCreatedOwnerStacks++;
      return d(
        R,
        H,
        z,
        !1,
        se,
        U,
        pe ? Error("react-stack-top-frame") : A,
        pe ? j(a(R)) : ne
      );
    }, Rn.jsxs = function(R, H, z, se, U) {
      var pe = 1e4 > w.recentlyCreatedOwnerStacks++;
      return d(
        R,
        H,
        z,
        !0,
        se,
        U,
        pe ? Error("react-stack-top-frame") : A,
        pe ? j(a(R)) : ne
      );
    };
  })()), Rn;
}
var no;
function qc() {
  return no || (no = 1, process.env.NODE_ENV === "production" ? ir.exports = Gc() : ir.exports = Yc()), ir.exports;
}
var r = qc(), Da = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ro;
function Xc() {
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
var Kc = Xc();
const ve = /* @__PURE__ */ Vc(Kc), Gb = ({
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
function Jc(e) {
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
const { forwardRef: Zc, useCallback: Zt, useState: Ta } = G;
function Qc(e, t) {
  const {
    children: n,
    variant: a = hi.Primary,
    size: s = mi.Default,
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...u
  } = e, [c, d] = Ta(!1), [f, h] = Ta(!1), [m, y] = Ta(!1), g = Jc({
    variant: a,
    size: s,
    fullWidth: o,
    className: i,
    preventDoubleClick: l,
    href: "href" in u ? u.href : void 0
  }), p = "disabled" in u ? u.disabled : u["aria-disabled"] === "true", b = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...m && { "data-focused": "true" },
    ...p && { "data-disabled": "true" }
  }, $ = Zt(
    () => !p && d(!0),
    [p]
  ), M = Zt(() => d(!1), []), S = Zt(
    () => !p && h(!0),
    [p]
  ), N = Zt(() => {
    h(!1), d(!1);
  }, []), L = Zt(() => y(!0), []), I = Zt(() => y(!1), []), C = Zt(
    (ue) => {
      ue.key === " " && ("href" in u || ue.currentTarget.getAttribute("role") === "button") && (ue.preventDefault(), ue.currentTarget.click());
    },
    [u]
  ), v = Zt(
    (ue) => {
      if (l) {
        const K = ue.currentTarget;
        if (K.getAttribute("data-processing") === "true") {
          ue.preventDefault();
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
      id: ue,
      style: K,
      title: re,
      ["aria-label"]: fe,
      ["aria-describedby"]: k,
      ["aria-labelledby"]: B,
      tabIndex: W,
      ...te
    } = u, Z = u;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: Z.href,
        target: Z.target,
        rel: Z.rel,
        className: g.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...b,
        ...l && { "data-prevent-double-click": "true" },
        ...te,
        onKeyDown: (de) => {
          Z.onKeyDown?.(de), C(de);
        },
        onClick: (de) => {
          Z.onClick?.(de), v(de);
        },
        onMouseDown: (de) => {
          Z.onMouseDown?.(de), $();
        },
        onMouseUp: (de) => {
          Z.onMouseUp?.(de), M();
        },
        onMouseEnter: (de) => {
          Z.onMouseEnter?.(de), S();
        },
        onMouseLeave: (de) => {
          Z.onMouseLeave?.(de), N();
        },
        onFocus: (de) => {
          Z.onFocus?.(de), L();
        },
        onBlur: (de) => {
          Z.onBlur?.(de), I();
        },
        "aria-disabled": Z["aria-disabled"],
        ...Z["aria-disabled"] === "true" && { tabIndex: -1 },
        id: ue,
        style: K,
        title: re,
        "aria-label": fe,
        "aria-describedby": k,
        "aria-labelledby": B,
        tabIndex: W,
        children: n
      }
    );
  }
  const {
    id: T,
    style: w,
    title: x,
    ["aria-label"]: P,
    ["aria-describedby"]: j,
    ["aria-labelledby"]: _,
    tabIndex: D,
    name: A,
    value: ne,
    form: V,
    formAction: R,
    formEncType: H,
    formMethod: z,
    formNoValidate: se,
    formTarget: U,
    autoFocus: pe,
    ...ke
  } = u, ce = u;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: ce.type || "button",
      disabled: ce.disabled,
      className: g.classes,
      "data-module": "nhs-button",
      ...b,
      ...l && { "data-prevent-double-click": "true" },
      ...ce.disabled && { "aria-disabled": "true" },
      ...ke,
      onKeyDown: (ue) => {
        ce.onKeyDown?.(ue), C(ue);
      },
      onClick: (ue) => {
        ce.onClick?.(ue), v(ue);
      },
      onMouseDown: (ue) => {
        ce.onMouseDown?.(ue), $();
      },
      onMouseUp: (ue) => {
        ce.onMouseUp?.(ue), M();
      },
      onMouseEnter: (ue) => {
        ce.onMouseEnter?.(ue), S();
      },
      onMouseLeave: (ue) => {
        ce.onMouseLeave?.(ue), N();
      },
      onFocus: (ue) => {
        ce.onFocus?.(ue), L();
      },
      onBlur: (ue) => {
        ce.onBlur?.(ue), I();
      },
      id: T,
      style: w,
      title: x,
      "aria-label": P,
      "aria-describedby": j,
      "aria-labelledby": _,
      tabIndex: D,
      name: A,
      value: ne,
      form: V,
      formAction: R,
      formEncType: H,
      formMethod: z,
      formNoValidate: se,
      formTarget: U,
      autoFocus: pe,
      children: n
    }
  );
}
const ht = Zc(Qc);
ht.displayName = "Button";
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
function eu(e) {
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
const ze = ({
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
  const d = eu({ color: a, noBorder: s, closable: o, disabled: l, className: u }), f = (h) => {
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
}, tu = ({
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
  attributes: m,
  ...y
}) => {
  const [g, p] = Fe(a), b = n !== void 0, $ = b ? n : g;
  Ve(() => {
    b || p(a);
  }, [a, b]);
  const M = (C) => {
    const v = C.target.checked;
    b || p(v), d?.(v, C);
  }, S = i ? `${e}-hint` : void 0, N = l ? `${e}-error` : void 0, L = [S, N].filter(Boolean).join(" ") || void 0, I = ve(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    u
  );
  return /* @__PURE__ */ r.jsx("div", { className: I, ...y, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: $,
        disabled: s,
        onChange: M,
        onBlur: f,
        onFocus: h,
        "aria-describedby": L,
        ...m
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ r.jsx("div", { id: S, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: N, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
tu.displayName = "Checkbox";
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
  inputMode: m,
  autoComplete: y,
  maxLength: g,
  minLength: p,
  pattern: b,
  step: $,
  min: M,
  max: S,
  showValueLabels: N = !1,
  showCurrentValue: L = !1,
  valueLabels: I,
  onChange: C,
  onBlur: v,
  onFocus: T,
  onKeyDown: w,
  ...x
}) => {
  const [P, j] = Fe(a || s || (n === "range" ? M || "0" : ""));
  Ve(() => {
    a !== void 0 && j(a);
  }, [a]);
  const _ = (U) => {
    const pe = U.target;
    j(pe.value), ("type" in U && U.nativeEvent || U.type === "keydown") && C?.(U);
  }, { classes: D, isRange: A } = gi({ type: n, hasError: c, width: h, className: f }), ne = a !== void 0, V = {
    id: e,
    name: t,
    type: n,
    placeholder: o,
    disabled: i,
    readOnly: l,
    required: u,
    "aria-describedby": d,
    inputMode: m,
    autoComplete: y,
    maxLength: g,
    minLength: p,
    pattern: b,
    step: $,
    min: M,
    max: S,
    onChange: _,
    onBlur: v,
    onFocus: T,
    onKeyDown: (U) => {
      if (A && /[0-9]/.test(U.key)) {
        const pe = (P?.toString() || "") + U.key;
        U.target.value = pe, _(U);
      }
      w?.(U);
    },
    ...x
  }, R = !ne && s !== void 0 ? { defaultValue: s } : {}, H = ne ? { value: a } : {}, z = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: D,
      ...H,
      ...R,
      "data-current-value": P,
      ...V
    }
  ), se = A ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    N && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: I?.min || M || "0" }),
      z(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: I?.max || S || "100" })
    ] }),
    !N && z(),
    L && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
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
      inputMode: m,
      autoComplete: y,
      maxLength: g,
      minLength: p,
      pattern: b,
      step: $,
      min: M,
      max: S,
      onChange: C,
      onBlur: v,
      onFocus: T,
      onKeyDown: w,
      ...x
    }
  );
};
function nu(e) {
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
  const i = nu({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...o, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s });
};
function ru(e) {
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
  const o = ru({
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
function au(e) {
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
const su = ({
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
  ...m
}) => {
  const [y, g] = Fe(
    e.filter((C) => C.checked).map((C) => C.value)
  ), p = n || t, b = i ? `${p}-hint` : void 0, $ = l ? `${p}-error` : void 0, M = [b, $].filter(Boolean).join(" ") || void 0, S = (C, v) => {
    let T;
    v ? T = [...y, C] : T = y.filter((w) => w !== C), g(T), d?.(T);
  }, N = () => e.map((C, v) => {
    const T = `${p}-${v + 1}`, w = `${T}-conditional`, x = y.includes(C.value), P = C.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: T,
          name: t,
          type: "checkbox",
          value: C.value,
          checked: x,
          disabled: P,
          onChange: (j) => S(C.value, j.target.checked),
          "aria-describedby": C.hint ? `${T}-hint` : M,
          ...C.conditional && {
            "aria-controls": w,
            "aria-expanded": x ? "true" : "false"
          },
          ...C.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: T, children: C.text }),
      C.hint && /* @__PURE__ */ r.jsx("div", { id: `${T}-hint`, className: "nhsuk-checkboxes__hint", children: C.hint }),
      C.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: ve("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !x
          }),
          id: w,
          children: typeof C.conditional == "object" && C.conditional !== null && "label" in C.conditional && "id" in C.conditional && "name" in C.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            C.conditional.label && /* @__PURE__ */ r.jsx(Ls, { htmlFor: C.conditional.id, children: C.conditional.label }),
            /* @__PURE__ */ r.jsx(Ms, { ...C.conditional })
          ] }) : C.conditional
        }
      )
    ] }, C.value);
  }), { classes: L, formGroupClasses: I } = au({ small: c, className: u, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: I, ...h, ...m, children: /* @__PURE__ */ r.jsxs(
    Ps,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: M,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: b, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: $, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: L, children: N() })
      ]
    }
  ) });
};
su.displayName = "Checkboxes";
function ou(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const iu = ({
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
  maxLength: m,
  minLength: y,
  wrap: g = "soft",
  resize: p = "vertical",
  autoComplete: b,
  spellCheck: $,
  onChange: M,
  onBlur: S,
  onFocus: N,
  onKeyDown: L,
  ...I
}) => {
  const { classes: C, describedBy: v } = ou({ hasError: u, resize: p, className: d, describedBy: c });
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
      "aria-describedby": v,
      rows: f,
      cols: h,
      maxLength: m,
      minLength: y,
      wrap: g,
      autoComplete: b,
      spellCheck: $,
      onChange: M,
      onBlur: S,
      onFocus: N,
      onKeyDown: L,
      ...I
    }
  );
};
function lu(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const xi = ({ id: e, className: t, children: n, ...a }) => {
  const s = lu({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: s.classes, id: s.id, ...a, children: n });
}, Yb = ({
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
  const m = o ?? i ?? "", [y, g] = Fe(m), [p, b] = Fe(0), [$, M] = Fe(!1), [S, N] = Fe(!1), L = be((x) => n ? x.trim() === "" ? 0 : x.trim().split(/\s+/).length : x.length, [n]);
  Ve(() => {
    const x = L(y), P = t || n || 0, j = P - x, _ = Math.floor(P * (a / 100));
    b(j), M(x > P), N(x >= _ || x > P), d && d(x, j);
  }, [y, t, n, a, L, d]);
  const I = (x) => {
    const P = x.target.value;
    g(P), f && f(x);
  }, C = () => {
    const x = t || n || 0, P = n ? "word" : "character", j = n ? "words" : "characters";
    if (!S)
      return `You can enter up to ${x} ${x === 1 ? P : j}`;
    if ($) {
      const _ = Math.abs(p);
      return `You have ${_} ${_ === 1 ? P : j} too many`;
    } else
      return `You have ${p} ${p === 1 ? P : j} remaining`;
  }, v = ve(
    "nhsuk-character-count",
    u
  ), T = ve(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !S,
      "nhsuk-error-message": $
    },
    c?.classes
  ), w = ve(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": $
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: v,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": n,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ r.jsx(
          iu,
          {
            id: e,
            name: s,
            value: o !== void 0 ? y : void 0,
            defaultValue: o === void 0 ? i ?? y : void 0,
            rows: l,
            className: w,
            onChange: I,
            "aria-describedby": `${e}-info`,
            "aria-invalid": $ || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          xi,
          {
            id: `${e}-info`,
            className: T,
            role: "status",
            "aria-live": "polite",
            children: C()
          }
        )
      ]
    }
  );
};
function cu(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const uu = ({
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
}, du = ({
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
  options: m,
  children: y,
  onChange: g,
  onBlur: p,
  onFocus: b,
  ...$
}) => {
  const { classes: M } = cu({ hasError: l, className: c }), S = () => m ? m.map((L, I) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: L.value,
      disabled: L.disabled,
      "data-initial-selected": L.selected || void 0,
      children: L.text
    },
    `${L.value}-${I}`
  )) : null, N = s === void 0 && a === void 0 && m ? m.find((L) => L.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: M,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: s !== void 0 ? s : N,
      disabled: o,
      required: i,
      "aria-describedby": u,
      multiple: d,
      size: f,
      autoComplete: h,
      onChange: g,
      onBlur: p,
      onFocus: b,
      ...$,
      children: y || S()
    }
  );
}, mr = du;
mr.Option = uu;
function fu(e) {
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
    ...m
  } = e, {
    name: y,
    hasError: g = !1,
    describedBy: p,
    className: b,
    size: $ = "normal",
    inline: M = !1,
    options: S,
    ...N
  } = m, { classes: L, describedBy: I } = fu({ hasError: g, size: $, inline: M, className: b, describedBy: p });
  return /* @__PURE__ */ r.jsx(Ps, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: L,
      ...N,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: S.map((C, v) => {
        const T = `${y}-${v}`, w = C.conditional ? `${T}-conditional` : void 0, x = n === C.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: T,
              name: y,
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
                  P && u && (u.current[v] = P);
                }
              } : {
                defaultChecked: x,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": I
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: T, children: C.text }),
          C.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: C.hint }),
          C.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: ve("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !x
              }),
              id: w,
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
const qb = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o }) => {
  const [i, l] = Fe(e || t || ""), u = Ae([]), c = Ae(i), d = (m) => {
    const y = m.target.value;
    y !== c.current && (c.current = y, l(y), n?.(m));
  }, f = (m) => {
    s?.(m);
  }, h = be((m) => {
    const { key: y } = m;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(y)) return;
    m.preventDefault();
    const g = u.current.filter((M) => M && !M.disabled), p = g.indexOf(m.currentTarget);
    if (p === -1) return;
    let b = p;
    ["ArrowDown", "ArrowRight"].includes(y) ? b = (p + 1) % g.length : ["ArrowUp", "ArrowLeft"].includes(y) && (b = (p - 1 + g.length) % g.length);
    const $ = g[b];
    $ && ($.focus(), $.checked || $.click());
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
function pu(e) {
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
    width: m = "full",
    inputMode: y,
    autoComplete: g,
    maxLength: p,
    minLength: b,
    pattern: $,
    step: M,
    min: S,
    max: N,
    showValueLabels: L = !1,
    showCurrentValue: I = !1,
    valueLabels: C,
    // Strip interactive handlers in server variant
    onChange: v,
    onBlur: T,
    onFocus: w,
    onKeyDown: x,
    ...P
  } = e, { classes: j, isRange: _ } = gi({
    type: a,
    hasError: d,
    width: m,
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
    inputMode: y,
    autoComplete: g,
    maxLength: p,
    minLength: b,
    pattern: $,
    step: M,
    min: S,
    max: N,
    ...P
  };
  if (_) {
    const A = s ?? o ?? (typeof S < "u" ? String(S) : "0"), ne = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: j,
        ...s !== void 0 ? { value: s } : {},
        ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
        "data-current-value": A,
        ...D
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      L ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: C?.min || S || "0" }),
        ne,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: C?.max || N || "100" })
      ] }) : ne,
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
      className: j,
      ...s !== void 0 ? { value: s } : {},
      ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
      ...D
    }
  );
}
const Xb = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return bi(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: pu
    }
  );
};
var fn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(fn || {}), hu = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(hu || {}), mu = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(mu || {}), gu = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(gu || {});
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
  const o = yt.Children.toArray(e)[0], i = yt.isValidElement(o) && (o.type === pn || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ r.jsx(yi, { className: t, style: n, ...a, children: i ? e : /* @__PURE__ */ r.jsx(pn, { children: e }) });
}, xu = ({
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
}, bu = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = ve("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, yu = xu;
yu.Item = bu;
const Kb = ({
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
}, Jb = {
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
}, Zb = ({
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
}, Qb = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, ey = [
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
function vu(e) {
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
function wu(e) {
  const t = e.level ?? vu(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const Gt = ({ level: e, className: t, text: n, html: a, children: s, size: o, marginBottom: i, ...l }) => {
  const u = wu({ level: e, size: o, className: t, marginBottom: i }), c = s || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return ui(u.tag, { className: u.classes, style: u.style, ...l }, c);
};
function _u(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const ao = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...s }) => {
  const o = _u({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: o.classes, id: o.id, ...s, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      o.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, ty = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: s,
  className: o,
  children: i,
  ...l
}) => {
  const u = Ae(null);
  Ve(() => {
    u.current && u.current.focus();
  }, []);
  const c = ve(
    "nhsuk-error-summary",
    o
  ), d = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, h = (m) => {
    const y = m.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: m.html } }) : m.text;
    return m.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: m.href,
        ...m.attributes,
        children: y
      }
    ) : y;
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
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((m, y) => /* @__PURE__ */ r.jsx("li", { children: h(m) }, y)) })
        ] })
      ]
    }
  );
}, ny = ({
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
  })), [h, m] = Fe({}), y = (_) => _ % 4 === 0 && _ % 100 !== 0 || _ % 400 === 0, g = (_, D) => {
    const A = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return _ === 2 && y(D) ? 29 : A[_ - 1];
  }, p = (_, D, A) => {
    if (!_) return;
    if (!/^\d+$/.test(_)) return "Day must be a number";
    const ne = parseInt(_, 10);
    if (ne < 1 || ne > 31) return "Day must be between 1 and 31";
    if (D && A) {
      const V = parseInt(D, 10), R = parseInt(A, 10);
      if (!isNaN(V) && !isNaN(R) && V >= 1 && V <= 12) {
        const H = g(V, R);
        if (ne > H)
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
  }, b = (_) => {
    if (!_) return;
    if (!/^\d+$/.test(_)) return "Month must be a number";
    const D = parseInt(_, 10);
    if (D < 1 || D > 12) return "Month must be between 1 and 12";
  }, $ = (_) => {
    if (!_) return;
    if (!/^\d+$/.test(_)) return "Year must be a number";
    const D = parseInt(_, 10), A = (/* @__PURE__ */ new Date()).getFullYear();
    if (D < 1900 || D > A + 10)
      return `Year must be between 1900 and ${A + 10}`;
  }, M = (_, D, A) => {
    if (!_ || !D || !A) return;
    const ne = parseInt(_, 10), V = parseInt(D, 10), R = parseInt(A, 10);
    if (isNaN(ne) || isNaN(V) || isNaN(R) || V < 1 || V > 12 || R < 1900) return;
    const H = g(V, R);
    ne < 1 || ne > H;
  }, S = be((_, D) => {
    const A = {
      ...d,
      [_]: D
    };
    f(A), u && u(A);
  }, [d, u]), N = be((_) => {
    const D = d[_];
    let A;
    if (_ === "day")
      A = p(D, d.month, d.year);
    else if (_ === "month") {
      if (A = b(D), !A && d.day) {
        const ne = p(d.day, D, d.year);
        m((V) => ({
          ...V,
          day: ne
        }));
      }
    } else if (_ === "year" && (A = $(D), !A && d.day && d.month)) {
      const ne = p(d.day, d.month, D);
      m((V) => ({
        ...V,
        day: ne
      }));
    }
    if (m((ne) => ({
      ...ne,
      [_]: A
    })), d.day && d.month && d.year) {
      const ne = M(
        _ === "day" ? D : d.day,
        _ === "month" ? D : d.month,
        _ === "year" ? D : d.year
      );
      ne && m((V) => ({
        ...V,
        day: ne
      }));
    }
  }, [d, p, b, $, M]), L = $e(() => [
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
  ], []), I = n || L;
  let C = o?.describedBy || "";
  const v = i ? `${e}-hint` : "", T = l ? `${e}-error` : "";
  v && (C = C ? `${C} ${v}` : v), T && (C = C ? `${C} ${T}` : T);
  const w = Object.values(h).some((_) => _), x = ve(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || w
    }
  ), P = ve(
    "nhsuk-date-input",
    t
  ), j = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      xi,
      {
        id: v,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      ao,
      {
        id: T,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(h).map(
      ([_, D]) => D ? /* @__PURE__ */ r.jsxs(
        ao,
        {
          id: `${e}-${_}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            D
          ]
        },
        `${_}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: P, id: e, "data-testid": "date-input", ...c, children: I.map((_) => {
      const D = _.id || `${e}-${_.name}`, A = a ? `${a}[${_.name}]` : _.name, ne = _.label || _.name.charAt(0).toUpperCase() + _.name.slice(1), V = h[_.name], R = d[_.name] || "";
      let H = C;
      if (V) {
        const z = `${e}-${_.name}-error`;
        H = H ? `${H} ${z}` : z;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          Ls,
          {
            htmlFor: D,
            className: "nhsuk-date-input__label",
            children: ne
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ms,
          {
            id: D,
            name: A,
            value: R,
            className: ve("nhsuk-date-input__input", _.classes, {
              "nhsuk-input--error": V
            }),
            inputMode: _.inputmode,
            autoComplete: _.autocomplete,
            pattern: _.pattern,
            "aria-describedby": H || void 0,
            hasError: !!V,
            onChange: (z) => S(_.name, z.target.value),
            onBlur: () => N(_.name)
          }
        )
      ] }, _.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: x, children: o ? /* @__PURE__ */ r.jsx(
    Ps,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: C || void 0,
      children: j()
    }
  ) : j() });
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
}, _i = Oc(wi), Su = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...wi, ...t };
  return /* @__PURE__ */ r.jsx(_i.Provider, { value: n, children: e });
}, ry = () => {
  const e = Uc(_i);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function ku() {
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
function Cu() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = ku(), document.head.appendChild(e);
}
const ay = ({ children: e, theme: t }) => (Ve(() => {
  Cu();
}, []), /* @__PURE__ */ r.jsx(Su, { theme: t, children: e }));
function Nu(e, {
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
    service: m = {},
    serviceName: y,
    organisation: g,
    search: p,
    account: b,
    navigation: $,
    containerClasses: M,
    variant: S = "default",
    attributes: N = {},
    maxVisibleItems: L,
    // deprecated (ignored)
    responsiveNavigation: I = !0,
    ...C
  } = e, v = {
    ...m,
    text: m?.text ?? y
  };
  "maxVisibleItems" in C && delete C.maxVisibleItems;
  const T = v.href && !h.href || v.href && v.href === h.href, w = T ? v.href : h.href, x = ve(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": S === "organisation" || g,
      "nhsuk-header--white": S === "white"
    },
    f
  ), P = ve(
    "nhsuk-header__container",
    M
  ), j = ve(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": $?.white,
      "nhsuk-header__navigation--justified": $?.justified
    },
    $?.className
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
  ) : _(), A = () => g ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      g.name,
      g.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        g.split
      ] })
    ] }),
    g.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: g.descriptor })
  ] }) : null, ne = (H, z) => H ? z ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: z, children: H }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: H }) : null, V = (H) => H.active || H.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: H.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: H.html } }) : H.text }) : H.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: H.html } }) : H.text, R = () => /* @__PURE__ */ r.jsx(
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
      className: x,
      role: "banner",
      "data-module": "nhsuk-header",
      ...N,
      ...C,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: P, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            w ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: w, children: [
              D(),
              A(),
              T && ne(v.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              D(),
              A(),
              T && ne(v.text)
            ] }),
            v.text && !T && ne(v.text, v.href)
          ] }),
          d ?? null,
          /* @__PURE__ */ r.jsx(
            pi,
            {
              ...b,
              variant: S === "white" ? "white" : "default"
            }
          )
        ] }),
        $ && $.items && $.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: j,
            "aria-label": $.ariaLabel || "Menu",
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
                  M
                ),
                ref: u,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: c,
                    children: [
                      ($?.items || []).map((H, z) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: ve(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": H.active || H.current,
                              "nhsuk-header__navigation-item--hidden": s && o !== void 0 && z >= (o ?? 0)
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
                        z
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
        n && $ && $.items && $.items.length > 0 && a && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: $.items.slice(o ?? 0).map((H, z) => /* @__PURE__ */ r.jsx(
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
                    children: V(H)
                  }
                )
              },
              `overflow-${(o ?? 0) + z}`
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
  results: m = [],
  formAttributes: y = {},
  inputAttributes: g = {},
  buttonAttributes: p = {},
  preventDefaultSubmit: b = !1,
  debounceMs: $ = 300,
  minQueryLength: M = 1
}) => {
  const [S, N] = Fe(""), [L, I] = Fe(!1), C = Ae(void 0), v = Ae(null), T = Ae(null), w = e === "controlled" && s !== void 0, x = w ? s : S, P = be((se) => {
    C.current && clearTimeout(C.current), C.current = setTimeout(() => {
      d.onChange && se.length >= M && d.onChange(se);
    }, $);
  }, [d.onChange, $, M]), j = be((se) => {
    const U = se.target.value;
    w || N(U), e !== "form" && P(U);
  }, [w, e, P]), _ = be((se) => {
    const U = x.trim(), pe = {
      query: U,
      timestamp: Date.now(),
      formData: new FormData(se.currentTarget)
    };
    e === "controlled" || e === "hybrid" && b ? (se.preventDefault(), d.onSearch && U.length >= M && d.onSearch(pe)) : e === "hybrid" && d.onSearch && U.length >= M && d.onSearch(pe);
  }, [e, x, d.onSearch, b, M]), D = be(() => {
    I(!0), d.onFocus?.();
  }, [d.onFocus]), A = be(() => {
    I(!1), d.onBlur?.();
  }, [d.onBlur]), ne = be(() => {
    w || N(""), d.onClear?.(), T.current?.focus();
  }, [w, d.onClear]);
  Ve(() => () => {
    C.current && clearTimeout(C.current);
  }, []);
  const V = () => /* @__PURE__ */ r.jsx(
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
  ), H = () => !x || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ne,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ r.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ r.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), z = () => !h || !m.length || !L ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: m.map((se) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: se.href ? /* @__PURE__ */ r.jsxs("a", { href: se.href, className: "nhsuk-header__search-result-link", children: [
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
    "nhsuk-header__search--focused": L,
    "nhsuk-header__search--has-results": h && m.length > 0
  }), children: [
    /* @__PURE__ */ r.jsxs(
      "form",
      {
        ref: v,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? n : void 0,
        role: "search",
        onSubmit: _,
        ...y,
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
                ref: T,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: o,
                autoComplete: "off",
                value: x,
                onChange: j,
                onFocus: D,
                onBlur: A,
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
              disabled: c || f || e !== "form" && x.length < M,
              ...p,
              children: [
                f ? R() : V(),
                /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    z()
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
  const [f, h] = Fe(!1), [m, y] = Fe(!1), [g, p] = Fe(i?.items?.length || 0), [b, $] = Fe(!1), [M, S] = Fe(!1), N = Ae(null), L = Ae(null), I = Ae(!1);
  Ve(() => {
    typeof window > "u" || S(!0);
  }, []), Ve(() => {
    if (typeof document > "u") return;
    const w = (x) => {
      x.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
  }, [f]);
  const C = Ae(null), v = be(() => {
    if (!M || !i?.items || i.items.length === 0 || I.current) return;
    const w = N.current, x = L.current;
    if (!w || !x) return;
    I.current = !0, w.classList.add("nhsuk-header__navigation-container--measuring");
    const P = w.clientWidth, j = Array.from(x.children);
    if (!j.length) {
      w.classList.remove("nhsuk-header__navigation-container--measuring"), I.current = !1;
      return;
    }
    if (C.current == null) {
      const U = document.createElement("button");
      U.type = "button", U.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", U.style.position = "absolute", U.style.visibility = "hidden", U.style.pointerEvents = "none", U.innerHTML = "<span>More</span>", w.appendChild(U), C.current = U.getBoundingClientRect().width || 104, w.removeChild(U);
    }
    const _ = C.current + 16;
    let D = 0, A = 0;
    const ne = window.getComputedStyle(w), V = parseFloat(ne.paddingLeft) || 0, R = parseFloat(ne.paddingRight) || 0;
    let H = V + R;
    for (const U of j) {
      const pe = U.getBoundingClientRect().width;
      if (D + pe + _ + H > P) break;
      D += pe, A += 1;
    }
    const z = A < i.items.length, se = z ? A : i.items.length;
    y((U) => U === z ? U : z), p((U) => U === se ? U : se), w.classList.remove("nhsuk-header__navigation-container--measuring"), I.current = !1;
  }, [M, i?.items]);
  Ve(() => {
    if (!M) return;
    const w = N.current;
    if (!w) return;
    let x = null;
    const P = () => {
      x == null && (x = window.requestAnimationFrame(() => {
        x = null, v();
      }));
    };
    v();
    const j = new ResizeObserver(() => P());
    return j.observe(w), L.current && j.observe(L.current), () => {
      x != null && window.cancelAnimationFrame(x), j.disconnect();
    };
  }, [M, v]), Ve(() => {
    M && v();
  }, [i?.items?.length, M, v]);
  const T = (w) => {
    w && (w.preventDefault(), w.stopPropagation());
    const x = !f;
    h(x), $(x);
  };
  return Nu(
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
      isClient: M,
      menuOpen: f,
      showMoreButton: m,
      visibleItems: g,
      dropdownVisible: b,
      toggleMenu: T,
      navContainerRef: N,
      navListRef: L,
      // Provide interactive search node for client build only
      searchNode: s ? /* @__PURE__ */ r.jsx(ju, { ...s }) : null
    }
  );
};
function Du(e, { variant: t, isClient: n }) {
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
    maxVisibleItems: m,
    // deprecated (ignored)
    responsiveNavigation: y = !0,
    ...g
  } = e;
  "maxVisibleItems" in g && delete g.maxVisibleItems;
  const p = {
    ...o,
    text: o?.text ?? i
  }, b = p.href && !s.href || p.href && p.href === s.href, $ = b ? p.href : s.href, M = ve(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), S = ve("nhsuk-header__container", d), N = ve(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": c?.white,
      "nhsuk-header__navigation--justified": c?.justified
    },
    c?.className
  ), L = () => /* @__PURE__ */ r.jsxs(
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
  ) : L(), C = () => l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, v = (j, _) => j ? _ ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: _, children: j }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: j }) : null, T = (j) => j.active || j.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: j.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: j.html } }) : j.text }) : j.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: j.html } }) : j.text, w = c?.items && !y, x = w ? [] : c?.items, P = w ? c.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: M, role: "banner", "data-module": "nhsuk-header", ...h, ...g, children: [
    /* @__PURE__ */ r.jsxs("div", { className: S, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        $ ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: $, children: [
          I(),
          C(),
          b && v(p.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          I(),
          C(),
          b && v(p.text)
        ] }),
        p.text && !b && v(p.text, p.href)
      ] }),
      /* @__PURE__ */ r.jsx(pi, { ...u, variant: f === "white" ? "white" : "default" })
    ] }),
    c && c.items && c.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: N, "aria-label": c.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
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
        children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: (x || []).map((j, _) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: ve("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": j.active || j.current
            }, j.className),
            ...j.attributes || {},
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: j.href,
                ...j.active || j.current ? { "aria-current": j.current ? "page" : "true" } : {},
                children: T(j)
              }
            )
          },
          _
        )) })
      }
    ) }),
    w && P.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: P.map((j, _) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: ve("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": j.active || j.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: j.href,
            ...j.active || j.current ? { "aria-current": j.current ? "page" : "true" } : {},
            children: T(j)
          }
        )
      },
      `overflow-server-${_}`
    )) }) })
  ] });
}
const sy = (e) => Du(e, {
  variant: "server",
  isClient: !1
}), Tu = ({
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
  ].filter(Boolean).join(" "), m = u || e || a || s, y = () => {
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
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        o && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: m && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          y(),
          u || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && m && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          y(),
          u || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Tu.displayName = "Hero";
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
  const f = (m, y = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: ve("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": y
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
        className: ve("nhsuk-width-container", i),
        style: d,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: ve("nhsuk-footer", e), style: c, children: h ? (
            // Multi-column layout
            /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((m) => f(m)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((m) => f(m)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((m) => f(m)) }),
              s && s.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((m) => f(m)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((m) => f(m, !0)),
              (n || []).map((m) => f(m, !0)),
              (a || []).map((m) => f(m, !0)),
              (s || []).map((m) => f(m, !0))
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
function $u(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Fs(e) {
  let t, n, a;
  e.length !== 2 ? (t = fr, n = (l, u) => fr(e(l), u), a = (l, u) => e(l) - u) : (t = e === fr || e === $u ? e : Iu, n = e, a = e);
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
function Iu() {
  return 0;
}
function Mu(e) {
  return e === null ? NaN : +e;
}
const Lu = Fs(fr), Pu = Lu.right;
Fs(Mu).center;
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
  constructor(t, n = Eu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, s] of t) this.set(a, s);
  }
  get(t) {
    return super.get(oo(this, t));
  }
  has(t) {
    return super.has(oo(this, t));
  }
  set(t, n) {
    return super.set(Fu(this, t), n);
  }
  delete(t) {
    return super.delete(Au(this, t));
  }
}
function oo({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function Fu({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Au({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function Eu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Ru = Math.sqrt(50), Bu = Math.sqrt(10), Hu = Math.sqrt(2);
function gr(e, t, n) {
  const a = (t - e) / Math.max(0, n), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= Ru ? 10 : o >= Bu ? 5 : o >= Hu ? 2 : 1;
  let l, u, c;
  return s < 0 ? (c = Math.pow(10, -s) / i, l = Math.round(e * c), u = Math.round(t * c), l / c < e && ++l, u / c > t && --u, c = -c) : (c = Math.pow(10, s) * i, l = Math.round(e / c), u = Math.round(t / c), l * c < e && ++l, u * c > t && --u), u < l && 0.5 <= n && n < 2 ? gr(e, t, n * 2) : [l, u, c];
}
function Uu(e, t, n) {
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
function Ou(e, t, n) {
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
function Ni() {
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
    return Ni(t, n).unknown(a);
  }, ia.apply(s, arguments), s;
}
function ji() {
  var e = Ni().unknown(void 0), t = e.domain, n = e.range, a = 0, s = 1, o, i, l = !1, u = 0, c = 0, d = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, m = s < a, y = m ? s : a, g = m ? a : s;
    o = (g - y) / Math.max(1, h - u + c * 2), l && (o = Math.floor(o)), y += (g - y - o * (h - u)) * d, i = o * (1 - u), l && (y = Math.round(y), i = Math.round(i));
    var p = Ou(h).map(function(b) {
      return y + o * b;
    });
    return n(m ? p.reverse() : p);
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
    return ji(t(), [a, s]).round(l).paddingInner(u).paddingOuter(c).align(d);
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
var Yn = 0.7, xr = 1 / Yn, jn = "\\s*([+-]?\\d+)\\s*", qn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Tt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Wu = /^#([0-9a-f]{3,8})$/, zu = new RegExp(`^rgb\\(${jn},${jn},${jn}\\)$`), Vu = new RegExp(`^rgb\\(${Tt},${Tt},${Tt}\\)$`), Gu = new RegExp(`^rgba\\(${jn},${jn},${jn},${qn}\\)$`), Yu = new RegExp(`^rgba\\(${Tt},${Tt},${Tt},${qn}\\)$`), qu = new RegExp(`^hsl\\(${qn},${Tt},${Tt}\\)$`), Xu = new RegExp(`^hsla\\(${qn},${Tt},${Tt},${qn}\\)$`), lo = {
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
  formatHex8: Ku,
  formatHsl: Ju,
  formatRgb: uo,
  toString: uo
});
function co() {
  return this.rgb().formatHex();
}
function Ku() {
  return this.rgb().formatHex8();
}
function Ju() {
  return Ti(this).formatHsl();
}
function uo() {
  return this.rgb().formatRgb();
}
function Xn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Wu.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? fo(t) : n === 3 ? new vt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? lr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? lr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = zu.exec(e)) ? new vt(t[1], t[2], t[3], 1) : (t = Vu.exec(e)) ? new vt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Gu.exec(e)) ? lr(t[1], t[2], t[3], t[4]) : (t = Yu.exec(e)) ? lr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = qu.exec(e)) ? mo(t[1], t[2] / 100, t[3] / 100, 1) : (t = Xu.exec(e)) ? mo(t[1], t[2] / 100, t[3] / 100, t[4]) : lo.hasOwnProperty(e) ? fo(lo[e]) : e === "transparent" ? new vt(NaN, NaN, NaN, 0) : null;
}
function fo(e) {
  return new vt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function lr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new vt(e, t, n, a);
}
function Zu(e) {
  return e instanceof tr || (e = Xn(e)), e ? (e = e.rgb(), new vt(e.r, e.g, e.b, e.opacity)) : new vt();
}
function Za(e, t, n, a) {
  return arguments.length === 1 ? Zu(e) : new vt(e, t, n, a ?? 1);
}
function vt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
As(vt, Za, Di(tr, {
  brighter(e) {
    return e = e == null ? xr : Math.pow(xr, e), new vt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Yn : Math.pow(Yn, e), new vt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new vt(cn(this.r), cn(this.g), cn(this.b), br(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: po,
  // Deprecated! Use color.formatHex.
  formatHex: po,
  formatHex8: Qu,
  formatRgb: ho,
  toString: ho
}));
function po() {
  return `#${ln(this.r)}${ln(this.g)}${ln(this.b)}`;
}
function Qu() {
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
function ed(e, t, n, a) {
  return arguments.length === 1 ? Ti(e) : new St(e, t, n, a ?? 1);
}
function St(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
As(St, ed, Di(tr, {
  brighter(e) {
    return e = e == null ? xr : Math.pow(xr, e), new St(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Yn : Math.pow(Yn, e), new St(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, s = 2 * n - a;
    return new vt(
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
function td(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function nd(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function rd(e) {
  return (e = +e) == 1 ? $i : function(t, n) {
    return n - t ? nd(t, n, e) : Es(isNaN(t) ? n : t);
  };
}
function $i(e, t) {
  var n = t - e;
  return n ? td(e, n) : Es(isNaN(e) ? t : e);
}
const xo = (function e(t) {
  var n = rd(t);
  function a(s, o) {
    var i = n((s = Za(s)).r, (o = Za(o)).r), l = n(s.g, o.g), u = n(s.b, o.b), c = $i(s.opacity, o.opacity);
    return function(d) {
      return s.r = i(d), s.g = l(d), s.b = u(d), s.opacity = c(d), s + "";
    };
  }
  return a.gamma = e, a;
})(1);
function ad(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < n; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function sd(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function od(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, s = new Array(a), o = new Array(n), i;
  for (i = 0; i < a; ++i) s[i] = Rs(e[i], t[i]);
  for (; i < n; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function id(e, t) {
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
function ld(e, t) {
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
function cd(e) {
  return function() {
    return e;
  };
}
function ud(e) {
  return function(t) {
    return e(t) + "";
  };
}
function dd(e, t) {
  var n = Qa.lastIndex = Ia.lastIndex = 0, a, s, o, i = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (a = Qa.exec(e)) && (s = Ia.exec(t)); )
    (o = s.index) > n && (o = t.slice(n, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, u.push({ i, x: yr(a, s) })), n = Ia.lastIndex;
  return n < t.length && (o = t.slice(n), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? u[0] ? ud(u[0].x) : cd(t) : (t = u.length, function(c) {
    for (var d = 0, f; d < t; ++d) l[(f = u[d]).i] = f.x(c);
    return l.join("");
  });
}
function Rs(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Es(t) : (n === "number" ? yr : n === "string" ? (a = Xn(t)) ? (t = a, xo) : dd : t instanceof Xn ? xo : t instanceof Date ? id : sd(t) ? ad : Array.isArray(t) ? od : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ld : yr)(e, t);
}
function fd(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function pd(e) {
  return function() {
    return e;
  };
}
function hd(e) {
  return +e;
}
var bo = [0, 1];
function kn(e) {
  return e;
}
function es(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : pd(isNaN(t) ? NaN : 0.5);
}
function md(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function gd(e, t, n) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = es(s, a), o = n(i, o)) : (a = es(a, s), o = n(o, i)), function(l) {
    return o(a(l));
  };
}
function xd(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = es(e[i], e[i + 1]), o[i] = n(t[i], t[i + 1]);
  return function(l) {
    var u = Pu(e, l, 1, a) - 1;
    return o[u](s[u](l));
  };
}
function Ii(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function bd() {
  var e = bo, t = bo, n = Rs, a, s, o, i = kn, l, u, c;
  function d() {
    var h = Math.min(e.length, t.length);
    return i !== kn && (i = md(e[0], e[h - 1])), l = h > 2 ? xd : gd, u = c = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = l(e.map(a), t, n)))(a(i(h)));
  }
  return f.invert = function(h) {
    return i(s((c || (c = l(t, e.map(a), yr)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, hd), d()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), d()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = fd, d();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : kn, d()) : i !== kn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, d()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, m) {
    return a = h, s = m, d();
  };
}
function Mi() {
  return bd()(kn, kn);
}
function yd(e) {
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
function vd(e, t) {
  return function(n, a) {
    for (var s = n.length, o = [], i = 0, l = e[0], u = 0; s > 0 && l > 0 && (u + l + 1 > a && (l = Math.max(1, a - u)), o.push(n.substring(s -= l, s + l)), !((u += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return o.reverse().join(t);
  };
}
function wd(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var _d = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function wr(e) {
  if (!(t = _d.exec(e))) throw new Error("invalid format: " + e);
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
function Sd(e) {
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
function kd(e, t) {
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
  d: yd,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => yo(e * 100, t),
  r: yo,
  s: kd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function wo(e) {
  return e;
}
var _o = Array.prototype.map, So = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Cd(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? wo : vd(_o.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? wo : wd(_o.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = wr(f);
    var h = f.fill, m = f.align, y = f.sign, g = f.symbol, p = f.zero, b = f.width, $ = f.comma, M = f.precision, S = f.trim, N = f.type;
    N === "n" ? ($ = !0, N = "g") : vo[N] || (M === void 0 && (M = 12), S = !0, N = "g"), (p || h === "0" && m === "=") && (p = !0, h = "0", m = "=");
    var L = g === "$" ? n : g === "#" && /[boxX]/.test(N) ? "0" + N.toLowerCase() : "", I = g === "$" ? a : /[%p]/.test(N) ? i : "", C = vo[N], v = /[defgprs%]/.test(N);
    M = M === void 0 ? 6 : /[gprs]/.test(N) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function T(w) {
      var x = L, P = I, j, _, D;
      if (N === "c")
        P = C(w) + P, w = "";
      else {
        w = +w;
        var A = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? u : C(Math.abs(w), M), S && (w = Sd(w)), A && +w == 0 && y !== "+" && (A = !1), x = (A ? y === "(" ? y : l : y === "-" || y === "(" ? "" : y) + x, P = (N === "s" ? So[8 + Li / 3] : "") + P + (A && y === "(" ? ")" : ""), v) {
          for (j = -1, _ = w.length; ++j < _; )
            if (D = w.charCodeAt(j), 48 > D || D > 57) {
              P = (D === 46 ? s + w.slice(j + 1) : w.slice(j)) + P, w = w.slice(0, j);
              break;
            }
        }
      }
      $ && !p && (w = t(w, 1 / 0));
      var ne = x.length + w.length + P.length, V = ne < b ? new Array(b - ne + 1).join(h) : "";
      switch ($ && p && (w = t(V + w, V.length ? b - P.length : 1 / 0), V = ""), m) {
        case "<":
          w = x + w + P + V;
          break;
        case "=":
          w = x + V + w + P;
          break;
        case "^":
          w = V.slice(0, ne = V.length >> 1) + x + w + P + V.slice(ne);
          break;
        default:
          w = V + x + w + P;
          break;
      }
      return o(w);
    }
    return T.toString = function() {
      return f + "";
    }, T;
  }
  function d(f, h) {
    var m = c((f = wr(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(In(h) / 3))) * 3, g = Math.pow(10, -y), p = So[8 + y / 3];
    return function(b) {
      return m(g * b) + p;
    };
  }
  return {
    format: c,
    formatPrefix: d
  };
}
var ur, Pi, Fi;
Nd({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Nd(e) {
  return ur = Cd(e), Pi = ur.format, Fi = ur.formatPrefix, ur;
}
function jd(e) {
  return Math.max(0, -In(Math.abs(e)));
}
function Dd(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(In(t) / 3))) * 3 - In(Math.abs(e)));
}
function Td(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, In(t) - In(e)) + 1;
}
function $d(e, t, n, a) {
  var s = Ja(e, t, n), o;
  switch (a = wr(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(o = Dd(s, i)) && (a.precision = o), Fi(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = Td(s, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
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
function Id(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return Uu(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var s = t();
    return $d(s[0], s[s.length - 1], n ?? 10, a);
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
  }, ia.apply(e, arguments), Id(e);
}
function Md(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, s = e[n], o = e[a], i;
  return o < s && (i = n, n = a, a = i, i = s, s = o, o = i), e[n] = t.floor(s), e[a] = t.ceil(o), e;
}
const Ma = /* @__PURE__ */ new Date(), La = /* @__PURE__ */ new Date();
function rt(e, t, n, a) {
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
  }, s.filter = (o) => rt((i) => {
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
const Sr = rt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Sr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? rt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Sr);
Sr.range;
const zt = 1e3, _t = zt * 60, Vt = _t * 60, Yt = Vt * 24, Hs = Yt * 7, ko = Yt * 30, Pa = Yt * 365, Cn = rt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * zt);
}, (e, t) => (t - e) / zt, (e) => e.getUTCSeconds());
Cn.range;
const Us = rt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * zt);
}, (e, t) => {
  e.setTime(+e + t * _t);
}, (e, t) => (t - e) / _t, (e) => e.getMinutes());
Us.range;
const Ld = rt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * _t);
}, (e, t) => (t - e) / _t, (e) => e.getUTCMinutes());
Ld.range;
const Os = rt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * zt - e.getMinutes() * _t);
}, (e, t) => {
  e.setTime(+e + t * Vt);
}, (e, t) => (t - e) / Vt, (e) => e.getHours());
Os.range;
const Pd = rt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Vt);
}, (e, t) => (t - e) / Vt, (e) => e.getUTCHours());
Pd.range;
const nr = rt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * _t) / Yt,
  (e) => e.getDate() - 1
);
nr.range;
const Ws = rt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Yt, (e) => e.getUTCDate() - 1);
Ws.range;
const Fd = rt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Yt, (e) => Math.floor(e / Yt));
Fd.range;
function gn(e) {
  return rt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * _t) / Hs);
}
const la = gn(0), kr = gn(1), Ad = gn(2), Ed = gn(3), Mn = gn(4), Rd = gn(5), Bd = gn(6);
la.range;
kr.range;
Ad.range;
Ed.range;
Mn.range;
Rd.range;
Bd.range;
function xn(e) {
  return rt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Hs);
}
const Ai = xn(0), Cr = xn(1), Hd = xn(2), Ud = xn(3), Ln = xn(4), Od = xn(5), Wd = xn(6);
Ai.range;
Cr.range;
Hd.range;
Ud.range;
Ln.range;
Od.range;
Wd.range;
const Kn = rt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Kn.range;
const zd = rt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
zd.range;
const qt = rt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
qt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : rt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
qt.range;
const hn = rt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
hn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : rt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
hn.range;
function Vd(e, t, n, a, s, o) {
  const i = [
    [Cn, 1, zt],
    [Cn, 5, 5 * zt],
    [Cn, 15, 15 * zt],
    [Cn, 30, 30 * zt],
    [o, 1, _t],
    [o, 5, 5 * _t],
    [o, 15, 15 * _t],
    [o, 30, 30 * _t],
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
    const m = f && typeof f.range == "function" ? f : u(c, d, f), y = m ? m.range(c, +d + 1) : [];
    return h ? y.reverse() : y;
  }
  function u(c, d, f) {
    const h = Math.abs(d - c) / f, m = Fs(([, , p]) => p).right(i, h);
    if (m === i.length) return e.every(Ja(c / Pa, d / Pa, f));
    if (m === 0) return Sr.every(Math.max(Ja(c, d, f), 1));
    const [y, g] = i[h / i[m - 1][2] < i[m][2] / h ? m - 1 : m];
    return y.every(g);
  }
  return [l, u];
}
const [Gd, Yd] = Vd(qt, Kn, la, nr, Os, Us);
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
function qd(e) {
  var t = e.dateTime, n = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, u = e.shortMonths, c = Hn(s), d = Un(s), f = Hn(o), h = Un(o), m = Hn(i), y = Un(i), g = Hn(l), p = Un(l), b = Hn(u), $ = Un(u), M = {
    a: A,
    A: ne,
    b: V,
    B: R,
    c: null,
    d: $o,
    e: $o,
    f: bf,
    g: Df,
    G: $f,
    H: mf,
    I: gf,
    j: xf,
    L: Ei,
    m: yf,
    M: vf,
    p: H,
    q: z,
    Q: Lo,
    s: Po,
    S: wf,
    u: _f,
    U: Sf,
    V: kf,
    w: Cf,
    W: Nf,
    x: null,
    X: null,
    y: jf,
    Y: Tf,
    Z: If,
    "%": Mo
  }, S = {
    a: se,
    A: U,
    b: pe,
    B: ke,
    c: null,
    d: Io,
    e: Io,
    f: Ff,
    g: Vf,
    G: Yf,
    H: Mf,
    I: Lf,
    j: Pf,
    L: Bi,
    m: Af,
    M: Ef,
    p: ce,
    q: ue,
    Q: Lo,
    s: Po,
    S: Rf,
    u: Bf,
    U: Hf,
    V: Uf,
    w: Of,
    W: Wf,
    x: null,
    X: null,
    y: zf,
    Y: Gf,
    Z: qf,
    "%": Mo
  }, N = {
    a: T,
    A: w,
    b: x,
    B: P,
    c: j,
    d: Do,
    e: Do,
    f: df,
    g: jo,
    G: No,
    H: To,
    I: To,
    j: of,
    L: uf,
    m: sf,
    M: lf,
    p: v,
    q: af,
    Q: pf,
    s: hf,
    S: cf,
    u: Qd,
    U: ef,
    V: tf,
    w: Zd,
    W: nf,
    x: _,
    X: D,
    y: jo,
    Y: No,
    Z: rf,
    "%": ff
  };
  M.x = L(n, M), M.X = L(a, M), M.c = L(t, M), S.x = L(n, S), S.X = L(a, S), S.c = L(t, S);
  function L(K, re) {
    return function(fe) {
      var k = [], B = -1, W = 0, te = K.length, Z, de, xe;
      for (fe instanceof Date || (fe = /* @__PURE__ */ new Date(+fe)); ++B < te; )
        K.charCodeAt(B) === 37 && (k.push(K.slice(W, B)), (de = Co[Z = K.charAt(++B)]) != null ? Z = K.charAt(++B) : de = Z === "e" ? " " : "0", (xe = re[Z]) && (Z = xe(fe, de)), k.push(Z), W = B + 1);
      return k.push(K.slice(W, B)), k.join("");
    };
  }
  function I(K, re) {
    return function(fe) {
      var k = Bn(1900, void 0, 1), B = C(k, K, fe += "", 0), W, te;
      if (B != fe.length) return null;
      if ("Q" in k) return new Date(k.Q);
      if ("s" in k) return new Date(k.s * 1e3 + ("L" in k ? k.L : 0));
      if (re && !("Z" in k) && (k.Z = 0), "p" in k && (k.H = k.H % 12 + k.p * 12), k.m === void 0 && (k.m = "q" in k ? k.q : 0), "V" in k) {
        if (k.V < 1 || k.V > 53) return null;
        "w" in k || (k.w = 1), "Z" in k ? (W = Aa(Bn(k.y, 0, 1)), te = W.getUTCDay(), W = te > 4 || te === 0 ? Cr.ceil(W) : Cr(W), W = Ws.offset(W, (k.V - 1) * 7), k.y = W.getUTCFullYear(), k.m = W.getUTCMonth(), k.d = W.getUTCDate() + (k.w + 6) % 7) : (W = Fa(Bn(k.y, 0, 1)), te = W.getDay(), W = te > 4 || te === 0 ? kr.ceil(W) : kr(W), W = nr.offset(W, (k.V - 1) * 7), k.y = W.getFullYear(), k.m = W.getMonth(), k.d = W.getDate() + (k.w + 6) % 7);
      } else ("W" in k || "U" in k) && ("w" in k || (k.w = "u" in k ? k.u % 7 : "W" in k ? 1 : 0), te = "Z" in k ? Aa(Bn(k.y, 0, 1)).getUTCDay() : Fa(Bn(k.y, 0, 1)).getDay(), k.m = 0, k.d = "W" in k ? (k.w + 6) % 7 + k.W * 7 - (te + 5) % 7 : k.w + k.U * 7 - (te + 6) % 7);
      return "Z" in k ? (k.H += k.Z / 100 | 0, k.M += k.Z % 100, Aa(k)) : Fa(k);
    };
  }
  function C(K, re, fe, k) {
    for (var B = 0, W = re.length, te = fe.length, Z, de; B < W; ) {
      if (k >= te) return -1;
      if (Z = re.charCodeAt(B++), Z === 37) {
        if (Z = re.charAt(B++), de = N[Z in Co ? re.charAt(B++) : Z], !de || (k = de(K, fe, k)) < 0) return -1;
      } else if (Z != fe.charCodeAt(k++))
        return -1;
    }
    return k;
  }
  function v(K, re, fe) {
    var k = c.exec(re.slice(fe));
    return k ? (K.p = d.get(k[0].toLowerCase()), fe + k[0].length) : -1;
  }
  function T(K, re, fe) {
    var k = m.exec(re.slice(fe));
    return k ? (K.w = y.get(k[0].toLowerCase()), fe + k[0].length) : -1;
  }
  function w(K, re, fe) {
    var k = f.exec(re.slice(fe));
    return k ? (K.w = h.get(k[0].toLowerCase()), fe + k[0].length) : -1;
  }
  function x(K, re, fe) {
    var k = b.exec(re.slice(fe));
    return k ? (K.m = $.get(k[0].toLowerCase()), fe + k[0].length) : -1;
  }
  function P(K, re, fe) {
    var k = g.exec(re.slice(fe));
    return k ? (K.m = p.get(k[0].toLowerCase()), fe + k[0].length) : -1;
  }
  function j(K, re, fe) {
    return C(K, t, re, fe);
  }
  function _(K, re, fe) {
    return C(K, n, re, fe);
  }
  function D(K, re, fe) {
    return C(K, a, re, fe);
  }
  function A(K) {
    return i[K.getDay()];
  }
  function ne(K) {
    return o[K.getDay()];
  }
  function V(K) {
    return u[K.getMonth()];
  }
  function R(K) {
    return l[K.getMonth()];
  }
  function H(K) {
    return s[+(K.getHours() >= 12)];
  }
  function z(K) {
    return 1 + ~~(K.getMonth() / 3);
  }
  function se(K) {
    return i[K.getUTCDay()];
  }
  function U(K) {
    return o[K.getUTCDay()];
  }
  function pe(K) {
    return u[K.getUTCMonth()];
  }
  function ke(K) {
    return l[K.getUTCMonth()];
  }
  function ce(K) {
    return s[+(K.getUTCHours() >= 12)];
  }
  function ue(K) {
    return 1 + ~~(K.getUTCMonth() / 3);
  }
  return {
    format: function(K) {
      var re = L(K += "", M);
      return re.toString = function() {
        return K;
      }, re;
    },
    parse: function(K) {
      var re = I(K += "", !1);
      return re.toString = function() {
        return K;
      }, re;
    },
    utcFormat: function(K) {
      var re = L(K += "", S);
      return re.toString = function() {
        return K;
      }, re;
    },
    utcParse: function(K) {
      var re = I(K += "", !0);
      return re.toString = function() {
        return K;
      }, re;
    }
  };
}
var Co = { "-": "", _: " ", 0: "0" }, ot = /^\s*\d+/, Xd = /^%/, Kd = /[\\^$*+?|[\]().{}]/g;
function Re(e, t, n) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < n ? new Array(n - o + 1).join(t) + s : s);
}
function Jd(e) {
  return e.replace(Kd, "\\$&");
}
function Hn(e) {
  return new RegExp("^(?:" + e.map(Jd).join("|") + ")", "i");
}
function Un(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Zd(e, t, n) {
  var a = ot.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function Qd(e, t, n) {
  var a = ot.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function ef(e, t, n) {
  var a = ot.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function tf(e, t, n) {
  var a = ot.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function nf(e, t, n) {
  var a = ot.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function No(e, t, n) {
  var a = ot.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function jo(e, t, n) {
  var a = ot.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function rf(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function af(e, t, n) {
  var a = ot.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function sf(e, t, n) {
  var a = ot.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Do(e, t, n) {
  var a = ot.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function of(e, t, n) {
  var a = ot.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function To(e, t, n) {
  var a = ot.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function lf(e, t, n) {
  var a = ot.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function cf(e, t, n) {
  var a = ot.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function uf(e, t, n) {
  var a = ot.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function df(e, t, n) {
  var a = ot.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function ff(e, t, n) {
  var a = Xd.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function pf(e, t, n) {
  var a = ot.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function hf(e, t, n) {
  var a = ot.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function $o(e, t) {
  return Re(e.getDate(), t, 2);
}
function mf(e, t) {
  return Re(e.getHours(), t, 2);
}
function gf(e, t) {
  return Re(e.getHours() % 12 || 12, t, 2);
}
function xf(e, t) {
  return Re(1 + nr.count(qt(e), e), t, 3);
}
function Ei(e, t) {
  return Re(e.getMilliseconds(), t, 3);
}
function bf(e, t) {
  return Ei(e, t) + "000";
}
function yf(e, t) {
  return Re(e.getMonth() + 1, t, 2);
}
function vf(e, t) {
  return Re(e.getMinutes(), t, 2);
}
function wf(e, t) {
  return Re(e.getSeconds(), t, 2);
}
function _f(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Sf(e, t) {
  return Re(la.count(qt(e) - 1, e), t, 2);
}
function Ri(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Mn(e) : Mn.ceil(e);
}
function kf(e, t) {
  return e = Ri(e), Re(Mn.count(qt(e), e) + (qt(e).getDay() === 4), t, 2);
}
function Cf(e) {
  return e.getDay();
}
function Nf(e, t) {
  return Re(kr.count(qt(e) - 1, e), t, 2);
}
function jf(e, t) {
  return Re(e.getFullYear() % 100, t, 2);
}
function Df(e, t) {
  return e = Ri(e), Re(e.getFullYear() % 100, t, 2);
}
function Tf(e, t) {
  return Re(e.getFullYear() % 1e4, t, 4);
}
function $f(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Mn(e) : Mn.ceil(e), Re(e.getFullYear() % 1e4, t, 4);
}
function If(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Re(t / 60 | 0, "0", 2) + Re(t % 60, "0", 2);
}
function Io(e, t) {
  return Re(e.getUTCDate(), t, 2);
}
function Mf(e, t) {
  return Re(e.getUTCHours(), t, 2);
}
function Lf(e, t) {
  return Re(e.getUTCHours() % 12 || 12, t, 2);
}
function Pf(e, t) {
  return Re(1 + Ws.count(hn(e), e), t, 3);
}
function Bi(e, t) {
  return Re(e.getUTCMilliseconds(), t, 3);
}
function Ff(e, t) {
  return Bi(e, t) + "000";
}
function Af(e, t) {
  return Re(e.getUTCMonth() + 1, t, 2);
}
function Ef(e, t) {
  return Re(e.getUTCMinutes(), t, 2);
}
function Rf(e, t) {
  return Re(e.getUTCSeconds(), t, 2);
}
function Bf(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Hf(e, t) {
  return Re(Ai.count(hn(e) - 1, e), t, 2);
}
function Hi(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ln(e) : Ln.ceil(e);
}
function Uf(e, t) {
  return e = Hi(e), Re(Ln.count(hn(e), e) + (hn(e).getUTCDay() === 4), t, 2);
}
function Of(e) {
  return e.getUTCDay();
}
function Wf(e, t) {
  return Re(Cr.count(hn(e) - 1, e), t, 2);
}
function zf(e, t) {
  return Re(e.getUTCFullYear() % 100, t, 2);
}
function Vf(e, t) {
  return e = Hi(e), Re(e.getUTCFullYear() % 100, t, 2);
}
function Gf(e, t) {
  return Re(e.getUTCFullYear() % 1e4, t, 4);
}
function Yf(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Ln(e) : Ln.ceil(e), Re(e.getUTCFullYear() % 1e4, t, 4);
}
function qf() {
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
Xf({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Xf(e) {
  return wn = qd(e), Ui = wn.format, wn.parse, wn.utcFormat, wn.utcParse, wn;
}
function Kf(e) {
  return new Date(e);
}
function Jf(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Oi(e, t, n, a, s, o, i, l, u, c) {
  var d = Mi(), f = d.invert, h = d.domain, m = c(".%L"), y = c(":%S"), g = c("%I:%M"), p = c("%I %p"), b = c("%a %d"), $ = c("%b %d"), M = c("%B"), S = c("%Y");
  function N(L) {
    return (u(L) < L ? m : l(L) < L ? y : i(L) < L ? g : o(L) < L ? p : a(L) < L ? s(L) < L ? b : $ : n(L) < L ? M : S)(L);
  }
  return d.invert = function(L) {
    return new Date(f(L));
  }, d.domain = function(L) {
    return arguments.length ? h(Array.from(L, Jf)) : h().map(Kf);
  }, d.ticks = function(L) {
    var I = h();
    return e(I[0], I[I.length - 1], L ?? 10);
  }, d.tickFormat = function(L, I) {
    return I == null ? N : c(I);
  }, d.nice = function(L) {
    var I = h();
    return (!L || typeof L.range != "function") && (L = t(I[0], I[I.length - 1], L ?? 10)), L ? h(Md(I, L)) : d;
  }, d.copy = function() {
    return Ii(d, Oi(e, t, n, a, s, o, i, l, u, c));
  }, d;
}
function zs() {
  return ia.apply(Oi(Gd, Yd, qt, Kn, la, nr, Os, Us, Cn, Ui).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Zf({
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
  const c = Ae(null), [d, f] = Fe(!1), [h, m] = Fe(!1), y = t(e.start), g = t(e.end), p = Math.max(g - y, 20), b = () => {
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
  }, $ = e.progress ? p * e.progress / 100 : 0, M = () => {
    n?.(e);
  }, S = () => {
    a?.(e);
  }, N = (x) => {
    x.key === "Enter" ? (x.preventDefault(), M()) : x.key === " " && (x.preventDefault(), S());
  }, L = () => {
    f(!0);
  }, I = () => {
    f(!1);
  }, C = () => {
    m(!0), l?.();
  }, v = () => {
    m(!1);
  }, T = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (h || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), w = {
    "--task-left": `${y}px`,
    "--task-width": `${p}px`,
    "--task-color": b(),
    left: `${y}px`,
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
      className: T,
      style: w,
      onClick: M,
      onDoubleClick: S,
      onKeyDown: N,
      onMouseDown: L,
      onMouseUp: I,
      onFocus: C,
      onBlur: v,
      "aria-label": u || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${$}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function Qf({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let m = e.getTime(); m <= t.getTime(); m += 864e5)
    a.push(new Date(m));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = Fe(-1), u = Ae(null), c = (m) => {
    if (m.key === "ArrowLeft") {
      m.preventDefault();
      const y = Math.max(0, i === -1 ? 0 : i - 1);
      l(y), h(y);
    } else if (m.key === "ArrowRight") {
      m.preventDefault();
      const y = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(y), h(y);
    } else if (m.key === "ArrowDown")
      m.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (m.key === "Home")
      m.preventDefault(), l(0), h(0);
    else if (m.key === "End") {
      m.preventDefault();
      const y = a.length - 1;
      l(y), h(y);
    }
  }, d = (m) => {
    if (m.key === "ArrowDown")
      m.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (m.key === "ArrowRight") {
      m.preventDefault();
      const y = u.current;
      y && y.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => h(0), 0));
  }, h = (m) => {
    const y = u.current?.querySelector(`[data-date-index="${m}"]`);
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
            children: a.map((m, y) => {
              const g = m.getTime() === o.getTime(), p = i === y;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": y,
                  className: `date-column ${g ? "today" : ""} ${p ? "focused" : ""}`,
                  tabIndex: p ? 0 : -1,
                  role: "button",
                  "aria-label": `${m.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
                  onFocus: () => l(y),
                  onKeyDown: c,
                  children: m.toLocaleDateString("en-GB", {
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
function ep({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, u] = Fe(!1), [c, d] = Fe(-1), f = Ae(null);
  Ve(() => {
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
          g.preventDefault(), o === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-timeline") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowDown":
          g.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`) : null)?.focus();
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
        const $ = Math.min(t.length - 1, c + 1);
        d($), f.current?.querySelector(`[data-task-index="${$}"]`)?.focus();
        break;
      case "Enter":
        g.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        g.preventDefault(), c >= 0 && s?.(t[c]);
        break;
      case "Escape":
        g.preventDefault(), u(!1), d(-1), f.current?.focus();
        break;
    }
  }, m = (g) => {
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
    l && d(g);
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
              Zf,
              {
                task: g,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && c === p,
                taskIndex: p,
                tabIndex: l && c === p ? 0 : -1,
                onFocus: () => y(p)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function oy({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = Ae(null), [l, u] = Fe(800), c = $e(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const g = new Date(n);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [n]), d = $e(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const g = new Date(a);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [a]), f = $e(() => Math.ceil((d.getTime() - c.getTime()) / 864e5) + 1, [c, d]);
  Ve(() => {
    if (!i.current || typeof window > "u") return;
    const g = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!g) return;
    const p = new g((b) => {
      const $ = b[0];
      $ && u(Math.max($.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const h = $e(
    () => zs().domain([c, d]).range([0, l]),
    [c, d, l]
  ), m = $e(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((p) => {
      const b = g.get(p.resourceId) || [];
      b.push(p), g.set(p.resourceId, b);
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
        /* @__PURE__ */ r.jsx(Qf, { viewStart: c, viewEnd: d, dateCount: f }),
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
              ep,
              {
                resource: g,
                tasks: m.get(g.id) || [],
                scale: h,
                onTaskClick: s,
                onTaskDoubleClick: o,
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
const Nr = ({
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
) }), tp = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const u = () => t ? yt.Children.toArray(t).filter(
    (p) => yt.isValidElement(p) && (p.type === Nr || p.type?.displayName === "BreadcrumbItem")
  ).map((p) => ({
    text: typeof p.props.children == "string" ? p.props.children : String(p.props.children),
    href: p.props.href,
    active: p.props.active,
    attributes: p.props.attributes
  })) : [], c = () => t ? u() : s && o ? [{ href: s, text: o }] : e, d = () => {
    const g = c();
    if (g && g.length > 0) {
      const p = g.slice().reverse().find((b) => b.href && !b.active);
      if (p)
        return { href: p.href, text: p.text };
    }
    return { text: "Home" };
  }, f = c(), h = d(), m = ve(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), y = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: m,
      "aria-label": y,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          yt.Children.map(t, (g, p) => yt.isValidElement(g) && (g.type === Nr || g.type?.displayName === "BreadcrumbItem") ? yt.cloneElement(g, { key: p }) : null)
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
}, np = tp;
np.Item = Nr;
Nr.displayName = "BreadcrumbItem";
const Wi = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [s, o] = Fe(!1);
  Ve(() => {
    o(!0);
  }, []), Ve(() => {
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
}, iy = ({
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
}, ly = ({
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
}, zi = yt.forwardRef(({
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
  ].filter(Boolean).join(" "), m = [
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
    const $ = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Gt,
      {
        level: a,
        className: y,
        children: $()
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
        /* @__PURE__ */ r.jsxs("div", { className: m, children: [
          g(),
          p(),
          b()
        ] })
      ]
    }
  );
});
zi.displayName = "Card";
const cy = ({
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
}, uy = ({
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
}, dy = ({
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
  "aria-describedby": m
}) => {
  const y = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), g = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), p = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const $ = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], M = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        $,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Gt,
      {
        level: a,
        className: g,
        children: M
      }
    );
  }, b = () => u || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: y,
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
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: b() })
      ]
    }
  );
}, rp = ({
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
}, fy = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...s
}) => {
  const o = ve("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: o, ...s, children: i() });
}, py = ({
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
}, On = { current: null }, ap = () => {
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
}, sp = (e) => {
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
}, jr = (e, t, n) => {
  if (n || !t) return e;
  const a = ap();
  if (a && a.languages) {
    const s = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (s)
      try {
        return a.highlight(e, a.languages[s], s);
      } catch {
      }
  }
  return sp(e);
}, op = ({
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
  "data-testid": m,
  columns: y,
  data: g,
  visuallyHiddenCaption: p = !1
}) => {
  const b = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), $ = ve(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    d
  ), M = ve(f), S = (v, T) => {
    const w = ve(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${v.format}`]: v.format
      },
      v.classes
    ), x = {
      scope: "col",
      ...v.colspan && { colSpan: v.colspan },
      ...v.rowspan && { rowSpan: v.rowspan },
      ...o && { role: "columnheader" },
      ...v.attributes
    };
    let P;
    if (v.node != null)
      P = /* @__PURE__ */ r.jsx(r.Fragment, { children: v.node });
    else if (v.html)
      P = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } });
    else if (v.code != null) {
      const j = Array.isArray(v.code), _ = j ? v.code.join(`
`) : v.code, D = j || _.includes(`
`), A = {
        className: ve("nhsuk-table__code", v.codeClassName, {
          "nhsuk-table__code--block": D,
          "nhsuk-table__code--inline": !D
        }),
        ...v.codeLanguage ? { "data-language": v.codeLanguage } : {}
      }, ne = jr(_, v.codeLanguage);
      P = D ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...A,
          dangerouslySetInnerHTML: { __html: ne }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...A,
          dangerouslySetInnerHTML: { __html: ne }
        }
      );
    } else
      P = v.text;
    return /* @__PURE__ */ r.jsx("th", { className: w, ...x, children: P }, T);
  }, N = (v, T, w) => {
    const x = s && w || v.rowHeader, P = ve(
      x ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${x ? "header" : "cell"}--${v.format}`]: v.format
      },
      v.classes
    ), j = {
      ...x && { scope: "row" },
      ...v.colspan && { colSpan: v.colspan },
      ...v.rowspan && { rowSpan: v.rowspan },
      ...o && {
        role: x ? "rowheader" : "cell",
        ...v.header && { "data-label": v.header }
      },
      ...v.attributes
    };
    let _;
    if (v.node != null)
      _ = /* @__PURE__ */ r.jsx(r.Fragment, { children: v.node });
    else if (v.html)
      _ = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } });
    else if (v.code != null) {
      const ne = Array.isArray(v.code), V = ne ? v.code.join(`
`) : v.code, R = ne || V.includes(`
`), H = {
        className: ve("nhsuk-table__code", v.codeClassName, {
          "nhsuk-table__code--block": R,
          "nhsuk-table__code--inline": !R
        }),
        ...v.codeLanguage ? { "data-language": v.codeLanguage } : {}
      }, z = jr(
        V,
        v.codeLanguage,
        v.disableHighlight
      );
      _ = R ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: z }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: z }
        }
      );
    } else
      _ = v.text;
    const D = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      o && v.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        v.header,
        " "
      ] }),
      _
    ] }), A = x ? "th" : "td";
    return /* @__PURE__ */ r.jsx(A, { className: P, ...j, children: D }, T);
  };
  let L = t, I = e;
  !L && y && y.length && (L = y.map((v) => ({
    text: v.title,
    format: v.format,
    classes: v.headerClasses,
    attributes: v.headerAttributes
  }))), !I && y && g && g.length && (I = g.map((v, T) => y.map((w) => {
    const x = w.accessor ? w.accessor(v, T) : v[w.key];
    let P = { format: w.format, classes: w.cellClasses, attributes: w.cellAttributes };
    if (w.rowHeader && (P.rowHeader = !0), w.render) {
      const j = w.render(x, v, T, w);
      return j == null || typeof j == "boolean" ? { ...P, text: "" } : typeof j == "string" || typeof j == "number" ? { ...P, text: String(j) } : { ...P, ...j };
    }
    return { ...P, text: x != null ? String(x) : "" };
  })));
  const C = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: $,
      ...o && { role: "table" },
      ...h,
      ...m && { "data-testid": m },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: ve(b, p && "nhsuk-u-visually-hidden"), children: n }),
        L && L.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...o && { role: "row" }, children: L.map(
              (v, T) => S(v, T)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: I && I.map((v, T) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: v.map(
              (w, x) => N(w, x, x === 0)
            )
          },
          T
        )) })
      ]
    }
  );
  return u ? /* @__PURE__ */ r.jsxs(rp, { className: c, children: [
    i && /* @__PURE__ */ r.jsx(Gt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    C()
  ] }) : M ? /* @__PURE__ */ r.jsx("div", { className: M, children: C() }) : C();
}, ip = ({
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
  as: m = "th"
}) => {
  const y = ve(
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
    const $ = Array.isArray(a), M = $ ? a.join(`
`) : a, S = $ || M.includes(`
`), N = {
      className: ve("nhsuk-table__code", o, {
        "nhsuk-table__code--block": S,
        "nhsuk-table__code--inline": !S
      }),
      ...s ? { "data-language": s } : {}
    }, L = jr(
      M,
      s,
      i
    );
    p = S ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...N,
        dangerouslySetInnerHTML: { __html: L }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...N, dangerouslySetInnerHTML: { __html: L } });
  } else p = e;
  const b = m;
  return /* @__PURE__ */ r.jsx(b, { className: y, ...g, children: p });
}, lp = ({
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
  rowHeader: m
}) => {
  const y = !!m, g = y ? "th" : "td", p = ve(
    y ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${y ? "header" : "cell"}--${l}`,
    u
  ), b = {
    ...c && { colSpan: c },
    ...d && { rowSpan: d },
    ...y && { scope: "row" },
    ...h && { role: y ? "rowheader" : "cell" },
    ...f
  };
  let $;
  if (n != null) $ = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) $ = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const M = Array.isArray(a), S = M ? a.join(`
`) : a, N = M || S.includes(`
`), L = {
      className: ve("nhsuk-table__code", o, {
        "nhsuk-table__code--block": N,
        "nhsuk-table__code--inline": !N
      }),
      ...s ? { "data-language": s } : {}
    }, I = jr(S, s, i);
    $ = N ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...L, dangerouslySetInnerHTML: { __html: I } }) }) : /* @__PURE__ */ r.jsx("code", { ...L, dangerouslySetInnerHTML: { __html: I } });
  } else $ = e;
  return /* @__PURE__ */ r.jsx(g, { className: p, ...b, children: $ });
}, Xt = op;
Xt.Caption = ip;
Xt.BodyRow = Vi;
Xt.HeaderCell = Gi;
Xt.Cell = lp;
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
const hy = Pn(({
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
  const m = n !== void 0, [y, g] = Fe(() => t || e[0]?.id || ""), p = m ? n : y, b = Ae(null), $ = Ae(/* @__PURE__ */ new Map()), M = be((T) => {
    m || g(T), a?.(T);
  }, [m, a]), S = be((T) => {
    s?.(T), l && M(T);
  }, [s, l, M]), N = be((T, w) => {
    const x = e.filter((_) => !_.disabled).map((_) => _.id), P = x.indexOf(w);
    let j = null;
    switch (T.key) {
      case "ArrowLeft":
        j = P > 0 ? P - 1 : x.length - 1;
        break;
      case "ArrowRight":
        j = P < x.length - 1 ? P + 1 : 0;
        break;
      case "Home":
        j = 0;
        break;
      case "End":
        j = x.length - 1;
        break;
      case "Escape":
        T.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (j !== null) {
      T.preventDefault();
      const _ = x[j], D = $.current.get(_);
      D && (D.focus(), S(_));
    }
  }, [e, S, i]), L = be((T, w) => {
    w ? $.current.set(T, w) : $.current.delete(T);
  }, []), I = be((T) => {
    const w = $.current.get(T);
    w && w.focus();
  }, []);
  di(h, () => ({
    focusTab: I,
    getActiveTab: () => p,
    getTabListElement: () => b.current
  }), [I, p]);
  const C = be((T) => {
    const w = T.relatedTarget;
    b.current?.contains(w) || o?.();
  }, [o]), v = ve("nhsuk-tabs", u);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: v,
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
                children: e.map((T) => {
                  const w = T.id === p, x = T.disabled, P = ve("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": w,
                    "nhsuk-tabs__list-item--disabled": x
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: P, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (j) => L(T.id, j),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": w,
                      "aria-controls": `${T.id}-panel`,
                      id: `${T.id}-tab`,
                      tabIndex: w ? 0 : -1,
                      disabled: x,
                      onClick: () => !x && M(T.id),
                      onKeyDown: (j) => !x && N(j, T.id),
                      onFocus: () => !x && S(T.id),
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
          const w = T.id === p;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${T.id}-tab`,
              id: `${T.id}-panel`,
              hidden: !w,
              children: T.content
            },
            T.id
          );
        })
      ]
    }
  );
}), cp = Pn(
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
cp.displayName = "Details";
const up = Pn(
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
    ), f = (m) => t === "cross" && !a ? `do not ${m}` : m, h = () => /* @__PURE__ */ r.jsx(
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
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: c.join(" "), role: "list", children: n.map((m, y) => /* @__PURE__ */ r.jsxs("li", { children: [
            d(),
            f(m.item)
          ] }, y)) }) })
        ]
      }
    );
  }
);
up.displayName = "DoDontList";
const dp = Pn(
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
dp.displayName = "Expander";
const fp = Pn(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, u) => {
      const c = u + 1, d = `${t}-${c}-hint`, f = `${t}-${c}-status`, h = !!l.href, m = [
        "nhsuk-task-list__item",
        h && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), y = [
        l.hint && d,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        pp,
        {
          item: l,
          itemClasses: m,
          hasLink: h,
          hintId: d,
          statusId: f,
          ariaDescribedBy: y
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
), pp = ({
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
    return e.status.tag ? d = /* @__PURE__ */ r.jsx(ze, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ r.jsx("div", { className: c, id: s, children: d });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    u()
  ] });
};
fp.displayName = "TaskList";
const my = ({
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
}, gy = ({
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
}, hp = ({
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
    /* @__PURE__ */ r.jsx(ht, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ r.jsx(ht, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ r.jsx(ht, { variant: "secondary", size: "small", onClick: n, "aria-label": "Next date range", children: "Next" }),
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
] }), mp = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(ze, { color: gp(n.status), text: n.label }) }, n.status)) });
function gp(e) {
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
const xy = ({
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
  enableDefaultLegend: m = !0,
  legendPlacement: y = "bottom",
  onA11yModeChange: g
}) => {
  const [p, b] = Fe("grid"), $ = i || p, [M, S] = Fe(a || []), N = n ?? M, L = $e(() => {
    const j = /* @__PURE__ */ new Set();
    return e.forEach((_) => j.add(new Date(_.start).getTime())), Array.from(j).sort((_, D) => _ - D);
  }, [e]), I = $e(() => {
    const j = {};
    return e.forEach((_) => {
      const D = new Date(_.start).getTime();
      j[D] || (j[D] = {});
      const A = _.capacity - _.booked - (_.held || 0);
      j[D][_.sessionId] = { slot: _, remaining: A };
    }), j;
  }, [e]), C = be((j) => {
    if (o === "single") {
      const _ = [j.id];
      n || S(_), s?.(_, { lastAction: "select" });
    } else {
      const _ = N.includes(j.id), D = _ ? N.filter((A) => A !== j.id) : [...N, j.id];
      n || S(D), s?.(D, { lastAction: _ ? "deselect" : "select" });
    }
  }, [o, N, n, s]), v = $e(() => h || (m ? Array.from(new Set(e.map((_) => _.status))).map((_) => ({
    status: _,
    label: _.charAt(0).toUpperCase() + _.slice(1)
  })) : void 0), [h, m, e]), T = v ? /* @__PURE__ */ r.jsx(
    mp,
    {
      items: v,
      orientation: y === "left" || y === "right" ? "vertical" : "horizontal"
    }
  ) : null, w = (j) => {
    i || b(j), g?.(j);
  }, x = d || (f ? /* @__PURE__ */ r.jsx(
    hp,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: $,
      onA11yModeChange: w
    }
  ) : null), P = /* @__PURE__ */ r.jsx("div", { style: u, className: ve(l), children: /* @__PURE__ */ r.jsx(Xa, { className: ve("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(pn, { children: /* @__PURE__ */ r.jsx(Gn, { width: fn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    x,
    y === "top" && T,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((j) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => C(j), "aria-pressed": N.includes(j.id), children: [
      Wn(new Date(j.start)),
      " – ",
      Wn(new Date(j.end)),
      " (",
      j.status,
      ")"
    ] }) }, j.id)) }),
    y === "bottom" && T
  ] }) }) }) }) });
  return $ === "list" ? P : /* @__PURE__ */ r.jsx("div", { style: u, className: ve(l), children: /* @__PURE__ */ r.jsx(Xa, { className: ve("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(pn, { children: /* @__PURE__ */ r.jsx(Gn, { width: fn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    x,
    y === "top" && T,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": L.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((j) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${j.specialty}`, className: "nhs-slot-matrix__session-header", children: j.specialty }, j.id))
      ] }),
      L.map((j) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Wn(new Date(j)), children: Wn(new Date(j)) }),
        t.map((_) => {
          const D = I[j]?.[_.id];
          if (!D)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, _.id);
          const { slot: A, remaining: ne } = D, V = N.includes(A.id), R = c ? c(A) : `Slot ${Wn(new Date(A.start))} ${A.status}${ne === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": A.status,
              className: ve("nhs-slot-matrix__cell", V && "nhs-slot-matrix__cell--selected"),
              "aria-label": R,
              "aria-selected": V || void 0,
              onClick: () => C(A),
              children: ne > 0 ? `${ne} left` : "Full"
            },
            A.id
          );
        })
      ] }, j))
    ] }),
    y === "bottom" && T
  ] }) }) }) }) });
};
function Eo(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Wn(e) {
  return `${Eo(e.getHours())}:${Eo(e.getMinutes())}`;
}
const xp = ({
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
}, by = ({
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
      children: /* @__PURE__ */ r.jsx(xp, { ...s })
    },
    o
  )) }) }) });
}, bp = yt.forwardRef(
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
    bordered: m = !1,
    striped: y = !1,
    responsive: g = !1,
    tableType: p = "default"
  }, b) => {
    const $ = Ae(null), M = Ae(null), S = Ae(null);
    yt.useImperativeHandle(b, () => $.current, []);
    const [N, L] = Fe(0), [I, C] = Fe(0), [v, T] = Fe("headers"), [w, x] = Fe("browse"), P = t.length, j = e.length, _ = $e(() => !n || n.length === 0 ? e : [...e].sort((z, se) => {
      for (const { key: U, direction: pe } of n) {
        const ke = z[U], ce = se[U];
        if (ke == null && ce == null) continue;
        if (ke == null) return 1;
        if (ce == null) return -1;
        let ue = 0;
        if (typeof ke == "number" && typeof ce == "number" ? ue = ke - ce : ue = String(ke).localeCompare(String(ce)), ue !== 0)
          return pe === "asc" ? ue : -ue;
      }
      return 0;
    }), [e, n]), D = be((z, se) => {
      setTimeout(() => {
        const U = $.current?.querySelector(
          `tbody tr:nth-child(${z + 1}) td:nth-child(${se + 1})`
        );
        U && (U.focus(), typeof U.scrollIntoView == "function" && U.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), A = be((z) => {
      setTimeout(() => {
        const se = $.current?.querySelector(`th:nth-child(${z + 1})`);
        se && (se.focus(), typeof se.scrollIntoView == "function" && se.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ne = be((z) => {
      a?.(z);
    }, [a]), V = be((z) => {
      o?.(z);
    }, [o]), R = be((z) => {
      const { key: se } = z;
      switch (se) {
        case "Enter":
          if (z.preventDefault(), v === "headers" && w === "browse")
            x("navigate"), A(I);
          else if (v === "headers" && w === "navigate") {
            const U = t[I];
            U && ne(U.key);
          } else v === "cells" && w === "browse" ? (x("navigate"), D(N, I)) : v === "cells" && w === "navigate" && V(N);
          break;
        case "Escape":
          z.preventDefault(), (v === "headers" && w === "navigate" || v === "cells" && w === "navigate") && x("browse");
          break;
        case "ArrowLeft":
          if (z.preventDefault(), w === "navigate" || w === "browse" && v === "headers") {
            if (v === "headers") {
              const U = Math.max(0, I - 1);
              C(U), A(U);
            } else if (v === "cells") {
              const U = Math.max(0, I - 1);
              C(U), D(N, U);
            }
          }
          break;
        case "ArrowRight":
          if (z.preventDefault(), w === "navigate" || w === "browse" && v === "headers") {
            if (v === "headers") {
              const U = Math.min(P - 1, I + 1);
              C(U), A(U);
            } else if (v === "cells") {
              const U = Math.min(P - 1, I + 1);
              C(U), D(N, U);
            }
          }
          break;
        case "ArrowUp":
          if (z.preventDefault(), v === "cells") {
            if (w === "browse") {
              const U = Math.max(0, N - 1);
              L(U), D(U, 0), C(0);
            } else if (w === "navigate")
              if (N > 0) {
                const U = N - 1;
                L(U), D(U, I);
              } else
                T("headers"), x("browse"), A(I);
          }
          break;
        case "ArrowDown":
          if (z.preventDefault(), v === "headers" && w === "browse")
            T("cells"), L(0), C(0), D(0, 0);
          else if (v === "cells") {
            const U = j - 1;
            if (w === "browse") {
              const pe = Math.min(U, N + 1);
              L(pe), D(pe, 0), C(0);
            } else if (w === "navigate" && N < U) {
              const pe = N + 1;
              L(pe), D(pe, I);
            }
          }
          break;
        case "Home":
          z.preventDefault(), v === "headers" ? (C(0), A(0)) : v === "cells" && (z.ctrlKey ? (L(0), C(0), D(0, 0)) : (C(0), D(N, 0)));
          break;
        case "End":
          if (z.preventDefault(), v === "headers") {
            const U = P - 1;
            C(U), A(U);
          } else if (v === "cells")
            if (z.ctrlKey) {
              const U = j - 1, pe = P - 1;
              L(U), C(pe), D(U, pe);
            } else {
              const U = P - 1;
              C(U), D(N, U);
            }
          break;
        case " ":
          if (z.preventDefault(), v === "headers" && w === "navigate") {
            const U = t[I];
            U && ne(U.key);
          } else v === "cells" && w === "navigate" && V(N);
          break;
      }
    }, [
      v,
      w,
      I,
      N,
      P,
      j,
      t,
      D,
      A,
      ne,
      V
    ]);
    Ve(() => {
      const z = $.current;
      if (z)
        return z.addEventListener("keydown", R), () => z.removeEventListener("keydown", R);
    }, [R]);
    const H = ve(
      "nhsuk-table",
      h,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": m,
        "nhsuk-table--striped": y,
        "nhsuk-table--compact": p === "compact"
      },
      f
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: $,
        className: H,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": u,
        "aria-labelledby": c,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: M, role: "row", children: t.map((z, se) => {
            const U = n?.find((ce) => ce.key === z.key), pe = !!U, ke = v === "headers" && I === se;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: ve("sortable-header", {
                  "sortable-header--focused": ke
                }),
                role: "columnheader",
                tabIndex: ke ? 0 : -1,
                onClick: () => ne(z.key),
                onKeyDown: (ce) => {
                  (ce.key === "Enter" || ce.key === " ") && (ce.preventDefault(), ne(z.key));
                },
                "aria-sort": pe ? U?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: z.label }),
                  pe && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((ce) => ce.key === z.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: U?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              z.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: S, className: "nhsuk-table__body", role: "rowgroup", children: _.map((z, se) => {
            const U = s === se, pe = v === "cells" && N === se;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: ve("data-row", {
                  "data-row--selected": U,
                  "data-row--focused": pe
                }),
                "aria-selected": U,
                children: t.map((ke, ce) => {
                  const ue = ke.tableRenderer ? ke.tableRenderer(z) : ke.render ? ke.render(z) : z[ke.key], K = v === "cells" && N === se && I === ce, re = () => typeof ue == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: ue ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: ue ? "Yes" : "No" })
                  ] }) : String(ue ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ve("data-cell", {
                        "data-cell--focused": K
                      }),
                      tabIndex: K ? 0 : -1,
                      onClick: () => V(se),
                      children: re()
                    },
                    ke.key
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
bp.displayName = "AriaDataGrid";
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
  const f = Ae(null), h = Ae(null), m = Ae(null), y = be((v, T) => {
    u || (h.current = T, v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", T));
  }, [u]), g = be((v, T) => {
    u || h.current === T || (v.preventDefault(), v.dataTransfer.dropEffect = "move", m.current = T);
  }, [u]), p = be((v, T) => {
    if (u) return;
    v.preventDefault();
    const w = h.current;
    if (!w || w === T) return;
    const x = e.findIndex((j) => j.key === w), P = e.findIndex((j) => j.key === T);
    if (x !== -1 && P !== -1) {
      const j = [...e], [_] = j.splice(x, 1);
      j.splice(P, 0, _), n(j);
    }
    h.current = null, m.current = null;
  }, [u, e, n]), b = be(() => {
    h.current = null, m.current = null;
  }, []), $ = be((v) => {
    const T = t.find((w) => w.key === v);
    return T ? T.label : v;
  }, [t]), M = be((v) => ["red", "orange", "blue", "aqua-green", "grey"][v] || "grey", []), S = be((v) => {
    if (u) return;
    const T = e.map(
      (w) => w.key === v ? { ...w, direction: w.direction === "asc" ? "desc" : "asc" } : w
    );
    n(T);
  }, [e, n, u]), N = be((v) => {
    if (u) return;
    const T = e.filter((w) => w.key !== v);
    n(T);
  }, [e, n, u]), L = be(() => {
    u || n([]);
  }, [n, u]), I = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const v = e.map((T, w) => {
      const x = T.direction === "asc" ? "ascending" : "descending";
      return `${w + 1}. ${$(T.key)} (${x})`;
    });
    if (v.length === 1)
      return `Sorted by: ${v[0]}`;
    if (v.length === 2)
      return `Sorted by: ${v.join(" and ")}`;
    {
      const T = v.pop();
      return `Sorted by: ${v.join(", ")}, and ${T}`;
    }
  }, C = $e(() => {
    const v = ["sort-description"];
    return l && v.push("sort-help"), d && v.push(d), v.join(" ");
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
          children: e.map((v, T) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !u,
              onDragStart: (w) => y(w, v.key),
              onDragOver: (w) => g(w, v.key),
              onDrop: (w) => p(w, v.key),
              onDragEnd: b,
              onClick: () => S(v.key),
              style: { cursor: u ? "default" : "pointer" },
              title: u ? "" : `Click to toggle sort direction. Currently ${v.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": v.key,
              children: /* @__PURE__ */ r.jsx(
                ze,
                {
                  color: M(T),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => N(v.key),
                  disabled: u,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${T + 1}`, children: T + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: $(v.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (w) => {
                          w.stopPropagation(), S(v.key);
                        },
                        disabled: u,
                        "aria-label": `Toggle sort direction for ${$(v.key)}. Currently ${v.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ r.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${v.direction}`, children: /* @__PURE__ */ r.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${v.direction}`,
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
            v.key
          ))
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
        ht,
        {
          variant: "secondary",
          onClick: L,
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
function yp(e, t) {
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
    id: m,
    isLoading: y = !1,
    loadingComponent: g,
    error: p = null,
    errorComponent: b,
    "data-testid": $,
    actions: M,
    actionsMinGap: S = 16,
    forceActionsAbove: N = !1
  } = t, I = Ae(
    m || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, C = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), v = `${I}-description`, T = `${I}-navigation-help`, {
    dataComparator: w = (F, X) => JSON.stringify(F) === JSON.stringify(X),
    filterFunction: x = (F) => F,
    booleanRenderer: P = (F) => F ? "✓" : "✗"
  } = a || {}, j = o !== void 0, _ = o ?? 0, [D, A] = Fe({
    focusArea: "tabs",
    focusedTabIndex: _,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), ne = $e(() => ({
    selectedIndex: _,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [_]), [V, R] = fi(yp, ne);
  Ve(() => {
    const F = V.tabLoadingStates.length, X = s.length;
    F !== X && R({ type: "ADJUST_ARRAYS", payload: { newLength: X } });
  }, [s.length]), Ve(() => {
    j && R({ type: "SET_SELECTED_INDEX", payload: _ });
  }, [_, j]), Ve(() => {
    A((F) => ({
      ...F,
      focusArea: "tabs",
      focusedTabIndex: V.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [V.selectedIndex]), Ve(() => {
    l && l(V.globalSelectedRowData);
  }, [V.globalSelectedRowData, l]);
  const H = be(
    (F, X) => w(F, X),
    [w]
  ), z = be(
    (F) => {
      F >= 0 && F < s.length && !s[F].disabled && (R({ type: "SET_SELECTED_INDEX", payload: F }), A((X) => ({
        ...X,
        focusedTabIndex: F,
        focusArea: "tabs"
      })), i?.(F));
    },
    [s, i]
  ), se = Ae(!1), U = be(
    (F, X) => {
      if (!X?.force && !se.current && F === 0) {
        se.current = !0;
        return;
      }
      se.current = !0, setTimeout(() => {
        const Q = pe.current[F], ee = Q?.parentElement;
        if (Q && ee) {
          const q = Q.offsetLeft, oe = Q.offsetWidth, ae = ee.clientWidth, ie = q - ae / 2 + oe / 2;
          try {
            ee.scrollTo({
              left: Math.max(0, ie),
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
  ), pe = Ae([]), ke = Ae([]), ce = be(
    (F, X) => {
      const Q = V.sortConfig || [], ee = Q.find(
        (ae) => ae.key === X
      );
      let q;
      ee ? ee.direction === "asc" ? q = Q.map(
        (ae) => ae.key === X ? { ...ae, direction: "desc" } : ae
      ) : q = Q.filter(
        (ae) => ae.key !== X
      ) : q = [...Q, { key: X, direction: "asc" }], R({
        type: "SET_SORT",
        payload: q
      }), s[F].onSort?.(X);
    },
    [V.sortConfig, s]
  ), ue = be(
    (F) => {
      setTimeout(() => {
        const X = document.querySelector(
          `[data-tab-panel="${V.selectedIndex}"] th:nth-child(${F + 1})`
        );
        X && X.focus();
      }, 0);
    },
    [V.selectedIndex]
  ), K = be(
    (F) => P(F),
    [P]
  ), re = be(
    (F, X) => {
      setTimeout(() => {
        const Q = document.querySelector(
          `[data-tab-panel="${V.selectedIndex}"] tbody tr:nth-child(${F + 1}) td:nth-child(${X + 1})`
        );
        Q && Q.focus();
      }, 0);
    },
    [V.selectedIndex]
  );
  Ve(() => {
    D.isGridActive && (D.focusArea === "headers" ? setTimeout(() => {
      ue(D.focusedHeaderIndex);
    }, 0) : D.focusArea === "cells" && setTimeout(() => {
      re(
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
    ue,
    re
  ]), Ve(() => {
    U(V.selectedIndex);
  }, [V.selectedIndex, U]);
  const fe = be(
    (F, X) => {
      const { key: Q } = F, ee = s[V.selectedIndex], q = ee?.columns.length || 0;
      switch (Q) {
        case "ArrowLeft":
          F.preventDefault();
          const oe = Math.max(0, X - 1);
          A((we) => ({
            ...we,
            focusedHeaderIndex: oe
          })), ue(oe);
          break;
        case "ArrowRight":
          F.preventDefault();
          const ae = Math.min(q - 1, X + 1);
          A((we) => ({
            ...we,
            focusedHeaderIndex: ae
          })), ue(ae);
          break;
        case "ArrowUp":
          F.preventDefault(), A((we) => ({
            ...we,
            focusArea: "tabs",
            focusedTabIndex: V.selectedIndex
          })), U(V.selectedIndex), pe.current[V.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          F.preventDefault(), A((we) => ({
            ...we,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: X,
            isGridActive: !0
          }));
          break;
        case "Home":
          F.preventDefault(), A((we) => ({ ...we, focusedHeaderIndex: 0 })), ue(0);
          break;
        case "End":
          F.preventDefault();
          const ie = q - 1;
          A((we) => ({
            ...we,
            focusedHeaderIndex: ie
          })), ue(ie);
          break;
        case "Enter":
        case " ":
          F.preventDefault();
          const ge = ee?.columns[X]?.key;
          ge && ce(V.selectedIndex, ge);
          break;
      }
    },
    [
      s,
      V.selectedIndex,
      ce,
      A,
      ue,
      re,
      pe
    ]
  ), k = be(
    (F, X, Q) => {
      const { key: ee } = F, q = s[V.selectedIndex], oe = q?.data.length || 0, ae = q?.columns.length || 0;
      switch (ee) {
        case "ArrowUp":
          if (F.preventDefault(), X === 0)
            A((le) => ({
              ...le,
              focusArea: "headers",
              focusedHeaderIndex: Q,
              isGridActive: !1
            })), ue(Q);
          else {
            const le = X - 1;
            A((Ie) => ({
              ...Ie,
              focusedRowIndex: le
            })), re(le, Q);
          }
          break;
        case "ArrowDown":
          F.preventDefault();
          const ie = Math.min(oe - 1, X + 1);
          A((le) => ({
            ...le,
            focusedRowIndex: ie
          })), re(ie, Q);
          break;
        case "ArrowLeft":
          F.preventDefault();
          const ge = Math.max(0, Q - 1);
          A((le) => ({
            ...le,
            focusedColumnIndex: ge
          })), re(X, ge);
          break;
        case "ArrowRight":
          F.preventDefault();
          const we = Math.min(ae - 1, Q + 1);
          A((le) => ({
            ...le,
            focusedColumnIndex: we
          })), re(X, we);
          break;
        case "Home":
          F.preventDefault(), F.ctrlKey ? (A((le) => ({
            ...le,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), re(0, 0)) : (A((le) => ({ ...le, focusedColumnIndex: 0 })), re(X, 0));
          break;
        case "End":
          if (F.preventDefault(), F.ctrlKey) {
            const le = oe - 1, Ie = ae - 1;
            A((Le) => ({
              ...Le,
              focusedRowIndex: le,
              focusedColumnIndex: Ie
            })), re(le, Ie);
          } else {
            const le = ae - 1;
            A((Ie) => ({
              ...Ie,
              focusedColumnIndex: le
            })), re(X, le);
          }
          break;
        case "Enter":
        case " ":
          if (F.preventDefault(), q && q.data[X]) {
            const le = q.data.some(
              (Ge) => "ews_data" in Ge
            ) ? x(q.data, V.filters) : q.data, Ie = V.sortConfig;
            let Le = le;
            if (Ie && Ie.length > 0 && (Le = [...le].sort((Ge, Ue) => {
              for (const { key: it, direction: Ze } of Ie) {
                let gt = Ge[it], lt = Ue[it];
                const Ee = q.columns.find(
                  (Fn) => Fn.key === it
                );
                if (Ee?.tableRenderer ? (gt = Ee.tableRenderer(Ge), lt = Ee.tableRenderer(Ue)) : Ee?.render && (gt = Ee.render(Ge), lt = Ee.render(Ue)), gt == null && lt == null) continue;
                if (gt == null) return Ze === "asc" ? -1 : 1;
                if (lt == null) return Ze === "asc" ? 1 : -1;
                let Oe = 0;
                if (typeof gt == "number" && typeof lt == "number" ? Oe = gt - lt : Oe = String(gt).localeCompare(
                  String(lt),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Oe !== 0)
                  return Ze === "asc" ? Oe : -Oe;
              }
              return 0;
            })), Le[X]) {
              const Ge = Le[X], it = V.globalSelectedRowData && H(V.globalSelectedRowData, Ge) ? null : Ge;
              R({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: it
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
      x,
      H,
      R,
      A,
      ue,
      re
    ]
  ), B = be(
    (F, X) => x(F, X),
    [x]
  );
  if (di(
    n,
    () => ({
      selectTab: (F) => {
        F >= 0 && F < s.length && (R({ type: "SET_SELECTED_INDEX", payload: F }), i?.(F));
      },
      refreshData: (F) => {
        console.log("Refreshing data for tab:", F ?? "all");
      },
      exportData: (F) => {
        const X = F ?? V.selectedIndex, Q = s[X];
        return Q ? Q.data : [];
      },
      getSelectedRows: (F) => V.globalSelectedRowData ? [] : [],
      clearSelection: (F) => {
        R({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (F) => {
        R({ type: "SET_FILTERS", payload: F });
      }
    }),
    [V.selectedIndex, V.selectedRows, s, i]
  ), y)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`,
        "data-testid": $,
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
        "data-testid": $,
        children: b || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: p })
        ] })
      }
    );
  const W = Ae(null), te = Ae(null), Z = Ae(null), [de, xe] = Fe(!0);
  Ve(() => {
    if (!M) {
      xe(!1);
      return;
    }
    if (N) {
      xe(!1);
      return;
    }
    function F() {
      if (!W.current || !te.current || !Z.current) return;
      const ee = W.current.clientWidth, q = Array.from(
        te.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), oe = q.reduce((we, le) => we + le.offsetWidth, 0), ae = Z.current.offsetWidth, ie = Math.max(8 * (q.length - 1), 0), ge = oe + ie + ae + S <= ee;
      xe(ge);
    }
    const X = requestAnimationFrame(() => F()), Q = new ResizeObserver(() => F());
    return W.current && Q.observe(W.current), te.current && Q.observe(te.current), () => {
      cancelAnimationFrame(X), Q.disconnect();
    };
  }, [M, S, N, s.length]);
  const _e = Z, he = be(() => _e.current ? Array.from(
    _e.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((F) => !F.hasAttribute("disabled")) : [], []), E = be(
    (F) => {
      const X = he();
      if (!X.length) return;
      const Q = Math.max(0, Math.min(F, X.length - 1));
      X[Q].focus(), A((ee) => ({ ...ee, focusArea: "actions", focusedActionIndex: Q }));
    },
    [he]
  ), O = be(() => E(0), [E]), Y = be(
    (F, X) => {
      const { key: Q } = F, ee = s.length - 1;
      switch (Q) {
        case "ArrowUp": {
          M && !de && (F.preventDefault(), O());
          break;
        }
        case "ArrowLeft": {
          F.preventDefault();
          const q = X > 0 ? X - 1 : ee;
          z(q), U(q), pe.current[q]?.focus();
          break;
        }
        case "ArrowRight": {
          if (F.preventDefault(), X === ee && M && de) {
            O();
            return;
          }
          const q = X < ee ? X + 1 : 0;
          z(q), U(q), pe.current[q]?.focus();
          break;
        }
        case "ArrowDown": {
          F.preventDefault(), A((q) => ({
            ...q,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          F.preventDefault(), z(0), U(0), pe.current[0]?.focus();
          break;
        }
        case "End": {
          F.preventDefault(), z(ee), U(ee), pe.current[ee]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          F.preventDefault(), z(X);
          break;
        }
        case "Tab": {
          !F.shiftKey && X === ee && M && de && O();
          break;
        }
      }
    },
    [s.length, z, U, M, de, O]
  ), J = be((F) => {
    const { key: X } = F, Q = he();
    if (!Q.length) return;
    const ee = Q.findIndex((q) => q === document.activeElement);
    switch (X) {
      case "ArrowLeft": {
        if (de)
          if (ee > 0)
            F.preventDefault(), E(ee - 1);
          else {
            F.preventDefault();
            const q = s.length - 1;
            z(q), U(q), pe.current[q]?.focus(), A((oe) => ({ ...oe, focusArea: "tabs", focusedTabIndex: q }));
          }
        break;
      }
      case "ArrowRight": {
        de && (ee < Q.length - 1 ? (F.preventDefault(), E(ee + 1)) : (F.preventDefault(), z(0), U(0), pe.current[0]?.focus(), A((q) => ({ ...q, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (de)
          F.preventDefault(), A((q) => ({ ...q, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          F.preventDefault();
          const q = V.selectedIndex;
          pe.current[q]?.focus(), A((oe) => ({ ...oe, focusArea: "tabs", focusedTabIndex: q }));
        }
        break;
      }
    }
  }, [he, de, E, s.length, z, U, V.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${d}`,
      id: m,
      "data-testid": $,
      ref: W,
      children: [
        c && !C && /* @__PURE__ */ r.jsx("div", { id: v, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: T,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          Yi,
          {
            sortConfig: V.sortConfig || [],
            columns: s.flatMap(
              (F) => F.columns.map((X) => ({ key: X.key, label: X.label }))
            ).filter(
              (F, X, Q) => Q.findIndex((ee) => ee.key === F.key) === X
              // Remove duplicates
            ),
            onSortChange: (F) => {
              R({ type: "SET_SORT", payload: F });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        M && !de && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: Z,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: J,
            children: M
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${de ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": u,
              "aria-describedby": c ? C ? c : v : T,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: te,
              children: s.map((F, X) => {
                const Q = X === V.selectedIndex, ee = F.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${F.id}`,
                    "aria-controls": `panel-${F.id}`,
                    "aria-selected": Q,
                    "aria-disabled": ee,
                    tabIndex: Q ? 0 : -1,
                    ref: (q) => {
                      pe.current[X] = q;
                    },
                    onClick: () => z(X),
                    onKeyDown: (q) => Y(q, X),
                    disabled: ee,
                    className: [
                      "aria-tabs-datagrid__tab",
                      Q ? "aria-tabs-datagrid__tab--selected" : "",
                      ee ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: F.label }),
                      V.tabLoadingStates[X] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      V.tabErrors[X] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  F.id
                );
              })
            }
          ),
          M && de && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: Z,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: J,
              children: M
            }
          )
        ] }),
        s.map((F, X) => {
          const Q = X === V.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${F.id}`,
              "aria-labelledby": `tab-${F.id}`,
              tabIndex: 0,
              hidden: !Q,
              ref: (ee) => {
                ke.current[X] = ee;
              },
              className: `aria-tabs-datagrid__panel ${F.className || ""}`,
              "data-tab-panel": X,
              children: Q && (() => {
                const ee = F.data.some(
                  (oe) => "ews_data" in oe
                ) ? B(F.data, V.filters) : F.data, q = $e(() => {
                  const oe = V.sortConfig;
                  return !oe || oe.length === 0 ? ee : [...ee].sort((ae, ie) => {
                    for (const { key: ge, direction: we } of oe) {
                      let le = ae[ge], Ie = ie[ge];
                      const Le = F.columns.find(
                        (Ue) => Ue.key === ge
                      );
                      if (Le?.tableRenderer ? (le = Le.tableRenderer(ae), Ie = Le.tableRenderer(ie)) : Le?.render && (le = Le.render(ae), Ie = Le.render(ie)), le == null && Ie == null) continue;
                      if (le == null) return 1;
                      if (Ie == null) return -1;
                      let Ge = 0;
                      if (typeof le == "number" && typeof Ie == "number" ? Ge = le - Ie : typeof le == "boolean" && typeof Ie == "boolean" ? Ge = le === Ie ? 0 : le ? 1 : -1 : Ge = String(le).localeCompare(
                        String(Ie),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Ge !== 0)
                        return we === "asc" ? Ge : -Ge;
                    }
                    return 0;
                  });
                }, [ee, V.sortConfig, F.columns]);
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
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: F.columns.map((oe, ae) => {
                        const ie = V.sortConfig?.find(
                          (le) => le.key === oe.key
                        ), ge = !!ie, we = D.focusArea === "headers" && D.focusedHeaderIndex === ae;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${we ? "sortable-header--focused" : ""} ${ge ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: we ? 0 : -1,
                            onClick: () => ce(X, oe.key),
                            onKeyDown: (le) => fe(le, ae),
                            "aria-sort": ge ? ie?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: oe.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ge ? `sort-indicator--${ie?.direction}` : ""}`,
                                  children: [
                                    V.sortConfig && V.sortConfig.length > 0 && V.sortConfig.findIndex(
                                      (le) => le.key === oe.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${V.sortConfig.findIndex((le) => le.key === oe.key) + 1}`,
                                        "data-priority": V.sortConfig.findIndex(
                                          (le) => le.key === oe.key
                                        ) + 1,
                                        title: `Sort priority: ${V.sortConfig.findIndex((le) => le.key === oe.key) + 1}`,
                                        children: V.sortConfig.findIndex(
                                          (le) => le.key === oe.key
                                        ) + 1
                                      }
                                    ),
                                    ge && /* @__PURE__ */ r.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${ie?.direction}`,
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
                          oe.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: q.map((oe, ae) => {
                        const ie = V.globalSelectedRowData && H(V.globalSelectedRowData, oe), ge = D.focusArea === "cells" && D.focusedRowIndex === ae;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ie ? "data-row--selected" : ""} ${ge ? "data-row--focused" : ""}`,
                            "aria-selected": ie,
                            children: F.columns.map((we, le) => {
                              const Ie = oe[we.key];
                              let Le;
                              we.tableRenderer ? Le = we.tableRenderer(oe) : we.render ? Le = we.render(oe) : Le = Ie;
                              const Ge = D.focusArea === "cells" && D.focusedRowIndex === ae && D.focusedColumnIndex === le, Ue = () => {
                                if (we.customRenderer) {
                                  const it = we.customRenderer(
                                    Ie,
                                    oe
                                  );
                                  return /* @__PURE__ */ r.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: it
                                    }
                                  );
                                }
                                return typeof Ie == "boolean" && Le === Ie ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  K(Ie),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Ie ? "Yes" : "No" })
                                ] }) : yt.isValidElement(Le) || typeof Le != "object" ? Le ?? "" : Le;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Ge ? "data-cell--focused" : ""}`,
                                  tabIndex: Ge ? 0 : -1,
                                  onClick: () => {
                                    const Ze = V.globalSelectedRowData && H(
                                      V.globalSelectedRowData,
                                      oe
                                    ) ? null : oe;
                                    R({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Ze
                                    });
                                  },
                                  onKeyDown: (it) => k(it, ae, le),
                                  children: Ue()
                                },
                                we.key
                              );
                            })
                          },
                          ae
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
}, vp = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Ea(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function wp(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function _p(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function Sp(e, t) {
  const n = t.find((s) => s.id === e), a = wp(t);
  return n ? n.priority < a : !1;
}
const yy = ({
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
  const d = $e(() => vp(e), [e]), f = be(($) => {
    if (l) return;
    const M = e.map(
      (S) => S.id === $ ? { ...S, direction: S.direction === "asc" ? "desc" : "asc" } : S
    );
    t(M);
  }, [e, t, l]), h = be(($) => {
    if (l) return;
    const M = e.findIndex((N) => N.id === $);
    if (M <= 0) return;
    const S = [...e];
    [S[M], S[M - 1]] = [S[M - 1], S[M]], t(Ea(S));
  }, [e, t, l]), m = be(($) => {
    if (l) return;
    const M = e.findIndex((N) => N.id === $);
    if (M >= e.length - 1 || M === -1) return;
    const S = [...e];
    [S[M], S[M + 1]] = [S[M + 1], S[M]], t(Ea(S));
  }, [e, t, l]), y = be(($) => {
    if (l) return;
    const M = e.filter((S) => S.id !== $);
    t(Ea(M));
  }, [e, t, l]), g = be(() => {
    l || t([]);
  }, [t, l]), p = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const $ = d.map((M, S) => {
      const N = M.direction === "asc" ? "ascending" : "descending";
      return `${S + 1}. ${M.label} (${N})`;
    });
    if ($.length === 1)
      return `Sorted by: ${$[0]}`;
    if ($.length === 2)
      return `Sorted by: ${$.join(" and ")}`;
    {
      const M = $.pop();
      return `Sorted by: ${$.join(", ")}, and ${M}`;
    }
  }, b = $e(() => {
    const $ = ["sort-description"];
    return i && $.push("sort-help"), c && $.push(c), $.join(" ");
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
          d.map(($) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                ze,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => y($.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: $.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: $.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f($.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${$.label}. Currently ${$.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: $.direction === "asc" ? dr.asc : dr.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h($.id),
                          disabled: l || !_p($.id, e),
                          "aria-label": `Move ${$.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m($.id),
                          disabled: l || !Sp($.id, e),
                          "aria-label": `Move ${$.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            $.id
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
      ht,
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
], kp = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Cp = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, Np = (e) => {
  if (typeof e == "boolean") {
    const n = ns.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = ns.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, jp = (e) => `${e.name}-${e.bed_name}`, Dp = () => ({
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
}), vy = (e) => {
  const t = Dp();
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
}, Tp = {
  dataComparator: kp,
  filterFunction: Cp,
  booleanRenderer: Np,
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
  } = n, f = t.find((M) => M.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", m = () => s.filter((S) => !i.includes(S) && e[S]).slice(0, 3).map((S) => {
    const N = t.find((v) => v.key === S), L = e[S], I = c[S] ? c[S](L, e) : N?.cardRenderer ? N.cardRenderer(e) : N?.render ? N.render(e) : L;
    return `${N?.label || S}: ${I}`;
  }).join(" • "), y = () => o.length === 0 ? null : o.filter((M) => e[M.fieldKey] !== void 0).map((M) => {
    const S = e[M.fieldKey], N = M.render ? M.render(S, e) : S;
    return `<span class="nhsuk-tag ${$p(M, S)}">${N}</span>`;
  }).join(""), g = () => u ? u(e) : l?.(e) === "high" ? "primary" : "default", p = y(), b = m(), $ = p ? `${b}${p ? `<div class="adaptive-card__badges">${p}</div>` : ""}` : b;
  return {
    variant: g(),
    heading: String(h),
    descriptionHtml: $,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${h}`
  };
}
function $p(e, t) {
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
const Ip = {
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
            ze,
            {
              color: Lp(Zi(d)),
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
            ht,
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
            ht,
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
            ht,
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
}, Xi = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        ze,
        {
          color: Pp(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
        ze,
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
      ht,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      ht,
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
        ze,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
        ze,
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
      ht,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      ht,
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
            o !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Mp(o)}`, children: [
              "EWS: ",
              o
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ r.jsxs(
            ze,
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
            ht,
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
            ht,
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
function Mp(e) {
  return Zi(e);
}
function Lp(e) {
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
function Pp(e) {
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
const Fp = [
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
], Qi = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Ap = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Ep = (e) => Qi(e) === "high" || e.status === "urgent" ? "primary" : "default", Rp = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Bp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Fp,
  hiddenFields: [],
  getPriority: Qi,
  getStatus: Ap,
  getVariant: Ep,
  fieldRenderers: Rp,
  classPrefix: "adaptive-card--healthcare"
}, Hp = {
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
}, Up = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Bo = {
  name: "healthcare",
  defaultCardConfig: Bp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Hp,
  fieldTypes: Up
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
function Op(e, t) {
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
function Wp(e, t) {
  const [n, a] = Fe("cards");
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
function zp(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Vp(e, t, n, a) {
  const s = a ? { ...a.defaultCardConfig, ...n } : { ...Ip, ...n };
  if (a && a.cardTemplates) {
    const o = zp(e);
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
const wy = ({
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
  ariaLabel: m = "Data grid",
  ariaDescription: y,
  orientation: g = "horizontal",
  id: p,
  disabled: b = !1,
  className: $,
  ...M
}) => {
  const S = Wp(e, t), N = f !== void 0, L = f ?? 0, I = $e(() => {
    if (c.some(
      (O) => O.data && O.data.length > 0 && Uo(O.data)
    )) {
      const O = Ho(n);
      return {
        ...Bo.defaultCardConfig,
        ...O
      };
    } else
      return Ho(n);
  }, [n, c]), C = $e(() => c.some(
    (O) => O.data && O.data.length > 0 && Uo(O.data)
  ) ? Bo : void 0, [c]), v = $e(() => ({
    selectedIndex: L,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [L, c.length]), [T, w] = fi(Op, v), x = Ae([]), P = Ae([]), j = Ae([]), _ = Ae(null), [D, A] = Fe({
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
  }), ne = be((E) => {
    if (!E.current)
      return { columns: 1, rows: 0 };
    const O = E.current, Y = O.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (Y.length === 0)
      return { columns: 1, rows: 0 };
    const J = O.offsetWidth, X = Y[0].offsetWidth, Q = Math.floor(J / X) || 1, ee = Math.ceil(Y.length / Q);
    return { columns: Q, rows: ee };
  }, []), V = be((E, O) => ({
    row: Math.floor(E / O),
    col: E % O
  }), []), R = be((E, O, Y) => E * Y + O, []), H = be((E, O, Y, J) => {
    const { row: F, col: X } = V(E, J);
    let Q = F, ee = X;
    switch (O) {
      case "up":
        Q = Math.max(0, F - 1);
        break;
      case "down":
        Q = Math.min(Math.floor((Y - 1) / J), F + 1);
        break;
      case "left":
        ee = Math.max(0, X - 1);
        break;
      case "right":
        ee = Math.min(J - 1, X + 1);
        break;
    }
    const q = R(Q, ee, J);
    return Math.min(q, Y - 1);
  }, [V, R]);
  Ve(() => {
    D.isCardNavigationActive && D.focusedCardElementIndex >= 0 && D.cardElements.length > 0 && setTimeout(() => {
      const E = D.cardElements[D.focusedCardElementIndex];
      E && (E.element.focus(), E.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [D.isCardNavigationActive, D.focusedCardElementIndex, D.cardElements.length]), Ve(() => {
    const E = () => {
      if (S === "cards" && _.current) {
        const { columns: J, rows: F } = ne(_);
        A((X) => ({
          ...X,
          gridColumns: J,
          gridRows: F
        }));
      }
    }, O = setTimeout(E, 200), Y = () => {
      setTimeout(E, 100);
    };
    return window.addEventListener("resize", Y), () => {
      clearTimeout(O), window.removeEventListener("resize", Y);
    };
  }, [S, c, ne]), Ve(() => {
    const E = T.tabLoadingStates.length, O = c.length;
    E !== O && w({ type: "ADJUST_ARRAYS", payload: { newLength: O } });
  }, [c.length, T.tabLoadingStates.length]), Ve(() => {
    N && f !== T.selectedIndex && w({ type: "SET_SELECTED_INDEX", payload: f });
  }, [N, f, T.selectedIndex]);
  const z = be((E) => {
    E >= 0 && E < c.length && !c[E].disabled && (w({ type: "SET_SELECTED_INDEX", payload: E }), h?.(E));
  }, [c, h]), se = be((E) => {
    console.log("Card selected:", E), w({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: E
    });
  }, []), U = be((E) => {
    const O = P.current[E];
    O && (O.focus(), O.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), pe = be((E) => {
    const O = P.current[E];
    if (!O) return [];
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
    ].join(", "), J = O.querySelectorAll(Y);
    return Array.from(J).map((F, X) => ({
      id: F.id || `card-${E}-element-${X}`,
      element: F,
      label: F.getAttribute("aria-label") || F.textContent?.trim() || F.getAttribute("title") || `Element ${X + 1}`,
      type: F.tagName.toLowerCase() === "button" ? "button" : F.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(F.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), ke = Ae(null), ce = be((E) => {
    const O = ke.current;
    if (!O) return;
    const Y = document.createElement("div");
    Y.setAttribute("aria-live", "polite"), Y.setAttribute("aria-atomic", "true"), Y.className = "sr-only", Y.textContent = E, O.appendChild(Y), setTimeout(() => {
      O.contains(Y) && O.removeChild(Y);
    }, 1e3);
  }, []), ue = be((E) => {
    const O = E.filter((J) => J.sortable !== !1), Y = [
      { value: "", label: "Sort by..." }
    ];
    return O.forEach((J) => {
      const F = J.label || J.key;
      J.key === "name" ? Y.push(
        { value: `${J.key}-asc`, label: `${F} (A-Z)` },
        { value: `${J.key}-desc`, label: `${F} (Z-A)` }
      ) : J.key === "ews_score" || J.key.includes("score") ? Y.push(
        { value: `${J.key}-desc`, label: `${F} (High-Low)` },
        { value: `${J.key}-asc`, label: `${F} (Low-High)` }
      ) : J.key === "age" || J.key.includes("date") || J.key.includes("time") ? Y.push(
        { value: `${J.key}-desc`, label: `${F} (Oldest-Youngest)` },
        { value: `${J.key}-asc`, label: `${F} (Youngest-Oldest)` }
      ) : Y.push(
        { value: `${J.key}-asc`, label: `${F} (A-Z)` },
        { value: `${J.key}-desc`, label: `${F} (Z-A)` }
      );
    }), Y;
  }, []), K = be((E, O) => O ? [...E].sort((Y, J) => {
    const F = Y[O.key], X = J[O.key];
    if (F == null && X == null) return 0;
    if (F == null) return 1;
    if (X == null) return -1;
    const Q = Number(F), ee = Number(X);
    if (!isNaN(Q) && !isNaN(ee))
      return O.direction === "asc" ? Q - ee : ee - Q;
    const q = String(F).toLowerCase(), oe = String(X).toLowerCase(), ae = q.localeCompare(oe);
    return O.direction === "asc" ? ae : -ae;
  }) : E, []), re = be((E) => {
    if (!E) {
      A((q) => ({ ...q, cardSortConfig: null })), ce("Card sorting cleared");
      return;
    }
    const [O, Y] = E.split("-"), J = { key: O, direction: Y };
    A((q) => ({ ...q, cardSortConfig: J }));
    const Q = c[T.selectedIndex]?.columns.find((q) => q.key === O)?.label || O;
    ce(`Cards sorted by ${Q} in ${Y === "asc" ? "ascending" : "descending"} order`);
  }, [c, T.selectedIndex, ce]), fe = be((E) => {
    const J = c[T.selectedIndex]?.columns.find((X) => X.key === E.key)?.label || E.key, F = E.direction === "asc" ? "ascending" : "descending";
    return `${J} (${F})`;
  }, [c, T.selectedIndex]), k = be((E) => {
    const O = c[T.selectedIndex];
    if (s) {
      const Y = T.sortConfig;
      return !Y || Y.length === 0 ? E : [...E].sort((J, F) => {
        for (const { key: X, direction: Q } of Y) {
          let ee = J[X], q = F[X];
          const oe = O?.columns.find((Ie) => Ie.key === X);
          if (oe?.cardRenderer ? (ee = oe.cardRenderer(J), q = oe.cardRenderer(F)) : oe?.render && (ee = oe.render(J), q = oe.render(F)), ee == null && q == null) continue;
          if (ee == null) return Q === "asc" ? -1 : 1;
          if (q == null) return Q === "asc" ? 1 : -1;
          const ae = Number(ee), ie = Number(q);
          if (!isNaN(ae) && !isNaN(ie)) {
            const Ie = ae - ie;
            if (Ie !== 0) return Q === "asc" ? Ie : -Ie;
            continue;
          }
          const ge = String(ee).toLowerCase(), we = String(q).toLowerCase(), le = ge.localeCompare(we);
          if (le !== 0) return Q === "asc" ? le : -le;
        }
        return 0;
      });
    } else
      return K(E, D.cardSortConfig);
  }, [s, T.sortConfig, D.cardSortConfig, K, c, T.selectedIndex]), B = be((E, O) => {
    const Y = pe(E), J = Y[O];
    if (J) {
      J.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const F = `Focused on ${J.label}, ${J.type} ${O + 1} of ${Y.length} within card`;
      ce(F);
    }
  }, [pe, ce]), W = be((E) => {
    x.current[E]?.focus();
  }, []), te = be(() => {
    const E = j.current[0];
    if (!E) return [];
    const O = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), Y = E.querySelectorAll(O);
    return Array.from(Y);
  }, []), Z = be((E) => {
    if (E === 0) {
      const O = j.current[0], Y = O?.querySelector(".sort-controls-row");
      if (Y) {
        Y.setAttribute("tabindex", "-1"), Y.focus();
        const F = `Sort controls group with ${te().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        ce(F);
      } else O && O.focus();
    } else {
      const O = te(), Y = E - 1, J = O[Y];
      if (J) {
        J.focus();
        const F = J.tagName.toLowerCase() === "select", X = J.tagName.toLowerCase() === "button", Q = F ? "dropdown" : X ? "button" : "control", ee = F ? ". Use Space key to open dropdown" : "", q = `${Q} ${Y + 1} of ${O.length}${ee}`;
        ce(q);
      }
    }
  }, [te, ce]), de = be((E, O) => {
    const { key: Y } = E, J = c[T.selectedIndex], F = J?.data.length || 0;
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
          if (E.preventDefault(), O === 0)
            A((q) => ({ ...q, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), Z(0);
          else {
            const q = H(O, "up", F, D.gridColumns);
            q !== O && (A((oe) => ({ ...oe, focusedCardIndex: q })), U(q), ce(`Moved to card ${q + 1} of ${F}`));
          }
          break;
        case "ArrowDown":
          E.preventDefault();
          const X = H(O, "down", F, D.gridColumns);
          X !== O && (A((q) => ({ ...q, focusedCardIndex: X })), U(X), ce(`Moved to card ${X + 1} of ${F}`));
          break;
        case "ArrowLeft":
          E.preventDefault();
          const Q = H(O, "left", F, D.gridColumns);
          Q !== O ? (A((q) => ({ ...q, focusedCardIndex: Q })), U(Q), ce(`Moved to card ${Q + 1} of ${F}`)) : T.selectedIndex > 0 && (w({ type: "SET_SELECTED_INDEX", payload: T.selectedIndex - 1 }), A((q) => ({ ...q, focusArea: "tabs" })), setTimeout(() => W(T.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          E.preventDefault();
          const ee = H(O, "right", F, D.gridColumns);
          ee !== O ? (A((q) => ({ ...q, focusedCardIndex: ee })), U(ee), ce(`Moved to card ${ee + 1} of ${F}`)) : T.selectedIndex < c.length - 1 && (w({ type: "SET_SELECTED_INDEX", payload: T.selectedIndex + 1 }), A((q) => ({ ...q, focusArea: "tabs" })), setTimeout(() => W(T.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (J?.data[O]) {
            E.preventDefault(), A((oe) => ({
              ...oe,
              selectedCardIndex: O
            }));
            const q = pe(O);
            q.length > 0 ? (A((oe) => ({
              ...oe,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: q,
              selectedCardIndex: O
              // Ensure selection is maintained
            })), ce(`Card ${O + 1} selected and navigation activated. ${q.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : ce(`Card ${O + 1} selected.`);
          }
          break;
        case " ":
          if (J?.data[O]) {
            E.preventDefault(), A((oe) => ({
              ...oe,
              selectedCardIndex: oe.selectedCardIndex === O ? -1 : O
            }));
            const q = D.selectedCardIndex === O;
            ce(`Card ${O + 1} ${q ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (Y) {
      case "ArrowUp":
      case "ArrowLeft":
        E.preventDefault();
        const X = Math.max(0, D.focusedCardElementIndex - 1);
        A((oe) => ({ ...oe, focusedCardElementIndex: X })), B(O, X);
        break;
      case "ArrowDown":
      case "ArrowRight":
        E.preventDefault();
        const Q = Math.min(D.cardElements.length - 1, D.focusedCardElementIndex + 1);
        A((oe) => ({ ...oe, focusedCardElementIndex: Q })), B(O, Q);
        break;
      case "Enter":
        E.preventDefault();
        const ee = D.cardElements[D.focusedCardElementIndex];
        ee && (ee.element.click(), ce(`Activated ${ee.label}`));
        break;
      case " ":
        E.preventDefault();
        const q = D.cardElements[D.focusedCardElementIndex];
        if (q) {
          const oe = new MouseEvent("dblclick", { bubbles: !0 });
          q.element.dispatchEvent(oe), ce(`Double-clicked ${q.label}`);
        }
        break;
      case "Escape":
        E.preventDefault(), A((oe) => ({
          ...oe,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => U(O), 0), ce("Exited card navigation, returned to card level");
        break;
      case "Home":
        E.preventDefault(), D.cardElements.length > 0 && (A((oe) => ({ ...oe, focusedCardElementIndex: 0 })), B(O, 0));
        break;
      case "End":
        if (E.preventDefault(), D.cardElements.length > 0) {
          const oe = D.cardElements.length - 1;
          A((ae) => ({ ...ae, focusedCardElementIndex: oe })), B(O, oe);
        }
        break;
    }
  }, [D, T.selectedIndex, c, se, U, W, A, pe, B, ce]), xe = be((E) => {
    const O = x.current[E], Y = O?.parentElement;
    if (!O || !Y) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const J = O.getBoundingClientRect(), F = Y.getBoundingClientRect();
    J.left >= F.left && J.right <= F.right || (console.log("Tab not visible, scrolling into view (mobile)"), O.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), _e = be((E, O) => {
    if (S !== "cards")
      return;
    const { key: Y } = E;
    switch (Y) {
      case "ArrowLeft":
        E.preventDefault();
        const J = O > 0 ? O - 1 : c.length - 1;
        z(J), A((ee) => ({ ...ee, focusedTabIndex: J })), x.current[J]?.focus(), xe(J);
        break;
      case "ArrowRight":
        E.preventDefault();
        const F = O < c.length - 1 ? O + 1 : 0;
        z(F), A((ee) => ({ ...ee, focusedTabIndex: F })), x.current[F]?.focus(), xe(F);
        break;
      case "ArrowDown":
        E.preventDefault();
        const X = c[T.selectedIndex];
        X && X.columns && X.columns.length > 0 ? (A((ee) => ({
          ...ee,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), Z(0)) : (A((ee) => ({
          ...ee,
          focusArea: "cards",
          focusedCardIndex: 0
        })), U(0));
        break;
      case "Home":
        E.preventDefault(), z(0), A((ee) => ({ ...ee, focusedTabIndex: 0 })), x.current[0]?.focus(), xe(0);
        break;
      case "End":
        E.preventDefault();
        const Q = c.length - 1;
        z(Q), A((ee) => ({ ...ee, focusedTabIndex: Q })), x.current[Q]?.focus(), xe(Q);
        break;
      case "Enter":
      case " ":
        E.preventDefault(), z(O);
        break;
    }
  }, [c.length, z, S, U, A, xe]), he = be((E, O) => {
    if (S !== "cards")
      return;
    const { key: Y } = E, J = c[T.selectedIndex];
    if (O === 0 && !D.isSortControlsActive) {
      switch (Y) {
        case "ArrowUp":
          E.preventDefault(), A((X) => ({
            ...X,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), W(T.selectedIndex);
          break;
        case "ArrowDown":
          E.preventDefault(), J?.data && J.data.length > 0 && (A((X) => ({
            ...X,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), U(0));
          break;
        case "Enter":
        case " ":
          E.preventDefault();
          const F = te();
          if (F.length > 0) {
            A((Q) => ({
              ...Q,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), Z(1);
            const X = `Entered sort controls navigation mode. ${F.length} controls available. Use arrow keys to navigate between controls.`;
            ce(X);
          }
          break;
        case "Escape":
          E.preventDefault(), A((X) => ({
            ...X,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), W(T.selectedIndex);
          break;
      }
      return;
    }
    if (D.isSortControlsActive) {
      const X = te().length;
      switch (Y) {
        case "ArrowLeft":
          E.preventDefault();
          const Q = D.focusedSortControlIndex > 1 ? D.focusedSortControlIndex - 1 : X;
          A((q) => ({ ...q, focusedSortControlIndex: Q })), Z(Q);
          break;
        case "ArrowRight":
          E.preventDefault();
          const ee = D.focusedSortControlIndex < X ? D.focusedSortControlIndex + 1 : 1;
          A((q) => ({ ...q, focusedSortControlIndex: ee })), Z(ee);
          break;
        case "ArrowDown":
          if (E.preventDefault(), D.isSortControlsActive) {
            const q = D.focusedSortControlIndex < X ? D.focusedSortControlIndex + 1 : 1;
            A((oe) => ({ ...oe, focusedSortControlIndex: q })), Z(q);
          } else
            J?.data && J.data.length > 0 && (A((q) => ({
              ...q,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), U(0));
          break;
        case "ArrowUp":
          E.preventDefault(), A((q) => ({
            ...q,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), Z(0);
          break;
        case "Escape":
          E.preventDefault(), A((q) => ({
            ...q,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), Z(0);
          break;
      }
    }
  }, [S, c, T.selectedIndex, D.isSortControlsActive, D.focusedSortControlIndex, Z, W, U, A, ce]);
  if (S === "cards") {
    const E = c[T.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${$ || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": m,
            "aria-describedby": `${y || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
            "aria-orientation": g,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((O, Y) => {
              const J = Y === T.selectedIndex, F = O.disabled || b;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${O.id}`,
                  "aria-controls": `panel-${O.id}`,
                  "aria-selected": J,
                  "aria-disabled": F,
                  tabIndex: J ? 0 : -1,
                  ref: (X) => {
                    x.current[Y] = X;
                  },
                  onClick: () => z(Y),
                  onKeyDown: (X) => _e(X, Y),
                  disabled: F,
                  className: [
                    "aria-tabs-datagrid__tab",
                    J ? "aria-tabs-datagrid__tab--selected" : "",
                    F ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: O.label }),
                    T.tabLoadingStates[Y] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    T.tabErrors[Y] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                O.id
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
            sortConfig: T.sortConfig || [],
            columns: E.columns.map((O) => ({ key: O.key, label: O.label })),
            onSortChange: (O) => {
              w({ type: "SET_SORT", payload: O });
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
            ref: (O) => {
              j.current[0] = O;
            },
            onKeyDown: (O) => he(O, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${E.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  mr,
                  {
                    id: `card-sort-${E.id}`,
                    name: `card-sort-${E.id}`,
                    value: D.cardSortConfig ? `${D.cardSortConfig.key}-${D.cardSortConfig.direction}` : "",
                    onChange: (O) => re(O.target.value),
                    className: "sort-select",
                    children: ue(E.columns).map((O) => /* @__PURE__ */ r.jsx("option", { value: O.value, children: O.label }, O.value))
                  }
                )
              ] }),
              D.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  fe(D.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  ht,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => re(""),
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
          ref: _,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${E?.label || "Data"} cards in ${D.gridRows} rows and ${D.gridColumns} columns`,
          "aria-rowcount": D.gridRows,
          "aria-colcount": D.gridColumns,
          id: `panel-${E?.id}`,
          "aria-labelledby": `tab-${E?.id}`,
          children: k(E?.data || []).map((O, Y) => {
            const J = D.selectedCardIndex === Y, F = D.focusedCardIndex === Y && D.focusArea === "cards", X = D.focusedCardIndex === Y && D.focusArea === "card" && D.isCardNavigationActive, Q = Y === 0 && D.focusArea !== "cards", ee = F || Q, q = V(Y, D.gridColumns);
            if (n.cardTemplate) {
              const ie = n.cardTemplate(O, E.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": q.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (ge) => {
                        P.current[Y] = ge;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        J ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        F ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        X ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": q.col + 1,
                      "aria-selected": J,
                      "aria-expanded": X,
                      "aria-description": X ? `Card navigation active. ${D.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: ee ? 0 : -1,
                      onClick: () => {
                        A((ge) => ({
                          ...ge,
                          selectedCardIndex: ge.selectedCardIndex === Y ? -1 : Y
                        })), se(O);
                      },
                      onKeyDown: (ge) => de(ge, Y),
                      onFocus: () => {
                        A((ge) => ge.isCardNavigationActive ? ge : ge.focusedCardIndex !== Y || ge.focusArea !== "cards" ? {
                          ...ge,
                          focusedCardIndex: Y,
                          focusArea: "cards"
                        } : ge);
                      },
                      children: ie
                    }
                  )
                },
                `card-${Y}`
              );
            }
            const oe = Vp(O, E.columns, I, C), ae = [
              oe.className || "",
              J ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              F ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              X ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": q.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      J ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      F ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      X ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": q.col + 1,
                    "aria-selected": J,
                    "aria-expanded": X,
                    onKeyDown: (ie) => {
                      ie.key === "Enter" && (ie.preventDefault(), A((ge) => ({
                        ...ge,
                        selectedCardIndex: Y
                      }))), de(ie, Y);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      zi,
                      {
                        ...oe,
                        ref: (ie) => {
                          P.current[Y] = ie;
                        },
                        className: ae,
                        "aria-label": `${oe["aria-label"] || oe.heading}. ${X ? `Card navigation active with ${D.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: ee ? 0 : -1,
                        onClick: () => {
                          A((ie) => ({
                            ...ie,
                            selectedCardIndex: ie.selectedCardIndex === Y ? -1 : Y
                          })), se(O);
                        },
                        onKeyDown: (ie) => de(ie, Y),
                        onFocus: () => {
                          D.isCardNavigationActive || A((ie) => ie.focusedCardIndex !== Y || ie.focusArea !== "cards" ? {
                            ...ie,
                            focusedCardIndex: Y,
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
              `card-${Y}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: ke,
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
  return S === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${$ || ""}`, children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      ts,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: m,
        ariaDescription: y,
        orientation: g,
        id: p,
        disabled: b,
        selectedIndex: f,
        onTabChange: h,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: u,
        ...M
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${$ || ""}`, children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      ts,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: m,
        ariaDescription: y,
        orientation: g,
        id: p,
        disabled: b,
        selectedIndex: f,
        onTabChange: h,
        actions: l,
        forceActionsAbove: u,
        ...M
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, el = (e) => {
  const t = ns.find((n) => n.value === e);
  return t ? t.icon : null;
}, Gp = {
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
}, Yp = (e) => Vs(e, [
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
]), qp = {
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
}, Xp = (e) => Vs(e, [
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
]), Kp = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Gp,
    createTabs: Yp
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: qp,
    createTabs: Xp
  }
}, Oo = (e, t) => {
  const n = Kp[e];
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
], Jp = [
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
], Zp = [
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
], Qp = [
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
], eh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, th = () => [
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
    data: Jp,
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
    data: Zp,
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
    data: Qp,
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
], nh = () => {
  const [e, t] = Fe("healthcare"), n = $e(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Tp,
      tabPanels: th(),
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
      dataConfig: eh,
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
        ht,
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
}, _y = nh, nl = (e) => /* @__PURE__ */ r.jsx(yi, { ...e }), Sy = ({
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
  logo: m,
  className: y,
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
    /* @__PURE__ */ r.jsx(Wi, { ...o }),
    /* @__PURE__ */ r.jsx(Si, { ...p }),
    /* @__PURE__ */ r.jsx(nl, { className: y, ...g, children: /* @__PURE__ */ r.jsx(vi, { size: s, children: /* @__PURE__ */ r.jsx(pn, { children: /* @__PURE__ */ r.jsxs(Gn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Gt, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(ki, { ...l })
  ] });
}, ky = ({
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
  ...m
}) => {
  const y = {
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
    /* @__PURE__ */ r.jsx(Si, { ...y }),
    /* @__PURE__ */ r.jsxs(nl, { className: h, ...m, children: [
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
  const [e, t] = G.useState(Go());
  G.useEffect(() => {
    if (typeof window > "u") return;
    const o = () => t(Go());
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []);
  const n = G.useCallback((o) => e >= Sn[o], [e]), a = G.useCallback((o) => e < Sn[o], [e]), s = G.useCallback((o, i) => e >= Sn[o] && e < Sn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: s,
    /** Raw numeric values */
    values: Sn
  };
}
function Cy(e) {
  const { width: t, values: n } = al();
  let a = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const o of s) {
    const i = n[o];
    t >= i && e[o] !== void 0 && (a = e[o]);
  }
  return a;
}
function rh(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [s, o] = G.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = G.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return G.useEffect(() => {
    if (!t || typeof window > "u") return;
    const u = new URLSearchParams(window.location.search);
    s ? u.set(n, String(s)) : u.delete(n), u.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${u.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [s, i, t, n, a]), { selectedId: s, setSelectedId: o, drilledIn: i, setDrilledIn: l };
}
const ah = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
), sh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
function oh(e) {
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
    emptyState: m,
    a11y: y,
    className: g,
    getId: p = (me) => me.id,
    orientation: b = "vertical",
    autoEnableThirdColumn: $ = !0,
    onDrillChange: M,
    navigationInstructions: S = "Use arrow keys to navigate, Enter to open.",
    initialFocus: N = "first",
    skipFocusOnSelect: L = !1,
    skipAnnouncements: I = !1,
    onFocusChange: C,
    syncUrl: v = !1,
    urlParamSelected: T = "nsv",
    urlParamDrill: w = "nsvDrill",
    urlSyncDebounceMs: x = 0,
    lazySecondary: P = !1,
    navFooter: j,
    collapsibleNav: _ = !1,
    navInitiallyCollapsed: D = !1,
    onNavCollapseChange: A,
    collapseToggleLabelShow: ne = "Show navigation",
    collapseToggleLabelHide: V = "Hide navigation",
    collapseToggleIconShow: R,
    collapseToggleIconHide: H,
    persistNavCollapsed: z,
    navCollapsedStorageKey: se = "nsvCollapsed",
    navCollapsedUrlParam: U = "nsvCollapsed",
    autoContentHeader: pe,
    contentHeaderLevel: ke = 2,
    renderContentHeader: ce,
    contentSubheader: ue,
    secondarySubheader: K
  } = e, { up: re } = al(), [fe, k] = G.useState(!1);
  G.useEffect(() => {
    k(!0);
  }, []);
  const B = fe && re("medium"), W = fe && re("xlarge");
  let te;
  u ? te = u : B ? te = "two-column" : te = "list", !u && $ && l && W && (te = "three-column");
  const Z = rh({
    enabled: v,
    paramSelected: T,
    paramDrill: w
  }), [de, xe] = G.useState(
    () => Z.selectedId !== void 0 ? Z.selectedId : a
  ), _e = n !== void 0 ? n : de, he = t.find((me) => p(me) === _e), [E, O] = G.useState(
    void 0
  );
  G.useEffect(() => {
    if (_e === void 0) return;
    O(_e);
    const me = setTimeout(() => O(void 0), 220);
    return () => clearTimeout(me);
  }, [_e]);
  const Y = G.useRef(null), J = G.useRef(null), F = G.useRef(null), X = G.useRef(null), [Q, ee] = G.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [q, oe] = G.useState(() => "nav"), [ae, ie] = G.useState(0), ge = () => [
    X.current,
    J.current,
    F.current
  ].filter(Boolean), we = (me) => {
    const Ne = ge(), ye = Math.max(0, Math.min(me, Ne.length - 1));
    Ne[ye]?.focus(), ie(ye);
  }, le = G.useCallback(
    (me) => me ? Array.from(me.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (ye) => !ye.hasAttribute("disabled") && ye.tabIndex !== -1
    ) : [],
    []
  ), Ie = G.useCallback(
    (me) => {
      const Ne = le(J.current);
      if (!Ne.length) {
        J.current?.focus();
        return;
      }
      const ye = Math.max(0, Math.min(me, Ne.length - 1)), Me = Ne[ye];
      Me.focus(), setTimeout(() => {
        document.activeElement !== Me && (Me.focus(), setTimeout(() => {
          document.activeElement !== Me && Me.click();
        }, 10));
      }, 10), ee((Ye) => ({ ...Ye, contentIndex: ye }));
      const Qe = (Ye) => {
        Ye.key === "Escape" && (Ye.preventDefault(), Ye.stopPropagation(), J.current?.focus(), Me.removeEventListener("keydown", Qe));
      };
      Ne.forEach((Ye) => {
        const Xe = Ye._escapeHandler;
        Xe && Ye.removeEventListener("keydown", Xe);
      }), Me._escapeHandler = Qe, Me.addEventListener("keydown", Qe);
    },
    [le]
  ), Le = G.useCallback(
    (me) => {
      const Ne = le(F.current);
      if (!Ne.length) {
        F.current?.focus();
        return;
      }
      const ye = Math.max(0, Math.min(me, Ne.length - 1)), Me = Ne[ye];
      Me.focus(), setTimeout(() => {
        document.activeElement !== Me && (Me.focus(), setTimeout(() => {
          document.activeElement !== Me && Me.click();
        }, 10));
      }, 10), ee((Ye) => ({ ...Ye, secondaryIndex: ye }));
      const Qe = (Ye) => {
        Ye.key === "Escape" && (Ye.preventDefault(), Ye.stopPropagation(), F.current?.focus(), Me.removeEventListener("keydown", Qe));
      };
      Ne.forEach((Ye) => {
        const Xe = Ye._escapeHandler;
        Xe && Ye.removeEventListener("keydown", Xe);
      }), Me._escapeHandler = Qe, Me.addEventListener("keydown", Qe);
    },
    [le]
  ), Ge = (me) => {
    if (me.defaultPrevented) return;
    const Ne = me.key, ye = me.target, Me = !!ct.current && ct.current.contains(ye), Qe = !!J.current && J.current.contains(ye), Ye = !!F.current && F.current.contains(ye), Xe = !!F.current, vn = ye === X.current || ye === J.current || ye === F.current, rn = Ue && (te === "list" || te === "cards"), or = Qe && !!ye.closest(".nhs-navigation-split-view__header");
    if (q === "containers" && vn) {
      if (Ne === "ArrowRight") {
        me.preventDefault();
        const Pe = ge(), Ke = Math.min(Pe.length - 1, ae + 1);
        we(Ke);
        return;
      }
      if (Ne === "ArrowLeft") {
        me.preventDefault();
        const Pe = Math.max(0, ae - 1);
        we(Pe);
        return;
      }
      if (Ne === "Home") {
        me.preventDefault(), we(0);
        return;
      }
      if (Ne === "End") {
        me.preventDefault(), we(ge().length - 1);
        return;
      }
      if (Ne === "Enter" || Ne === " ") {
        if (me.preventDefault(), ye === X.current) {
          if (oe("nav"), ct.current) {
            const Pe = Array.from(
              ct.current.querySelectorAll("[data-nav-item]")
            );
            (Pe[tt >= 0 ? tt : 0] || Pe[0])?.focus();
          }
        } else ye === J.current ? (oe("content"), Ie(Q.contentIndex)) : ye === F.current && (oe("secondary"), Le(Q.secondaryIndex));
        return;
      }
      return;
    }
    if (Ne === "Escape") {
      if (q === "content" || q === "secondary") {
        if (Qe || Ye) {
          if (me.preventDefault(), oe("nav"), ct.current) {
            const Ke = Array.from(
              ct.current.querySelectorAll("[data-nav-item]")
            )[tt >= 0 ? tt : 0];
            setTimeout(() => Ke?.focus(), 10);
          }
        } else if ((ye === J.current || ye === F.current) && (me.preventDefault(), oe("nav"), ct.current)) {
          const Ke = Array.from(
            ct.current.querySelectorAll("[data-nav-item]")
          )[tt >= 0 ? tt : 0];
          setTimeout(() => Ke?.focus(), 10);
        }
      }
      return;
    }
    if (Ne === "Enter" || Ne === " ") {
      if (ye.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (ye === J.current && q === "content") {
        me.preventDefault(), me.stopPropagation(), le(J.current).length > 0 && setTimeout(() => {
          Ie(Q.contentIndex);
        }, 50);
        return;
      }
      if (ye === F.current && q === "secondary") {
        me.preventDefault(), me.stopPropagation(), le(
          F.current
        ).length > 0 && setTimeout(() => {
          Le(Q.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (rn && or && !vn && (Ne === "ArrowRight" || Ne === "ArrowLeft")) {
      const Pe = le(J.current).filter(
        (Ke) => Ke.closest(".nhs-navigation-split-view__header")
      );
      if (Pe.length > 1) {
        const Ke = Pe.indexOf(ye);
        if (Ke >= 0) {
          const Zs = (Ke + (Ne === "ArrowRight" ? 1 : -1) + Pe.length) % Pe.length;
          me.preventDefault(), Pe[Zs].focus();
          return;
        }
      }
    }
    if (Ne === "ArrowRight") {
      if (Me || q === "nav") {
        me.preventDefault(), oe("content"), setTimeout(() => J.current?.focus(), 10);
        return;
      }
      if (Qe || q === "content") {
        Xe && (me.preventDefault(), oe("secondary"), setTimeout(() => F.current?.focus(), 10));
        return;
      }
    }
    if (Ne === "ArrowLeft") {
      if (Ye || q === "secondary") {
        me.preventDefault(), oe("content"), setTimeout(() => J.current?.focus(), 10);
        return;
      }
      if (Qe || q === "content") {
        if (me.preventDefault(), oe("nav"), ct.current) {
          const Ke = Array.from(
            ct.current.querySelectorAll("[data-nav-item]")
          )[tt >= 0 ? tt : 0];
          setTimeout(() => Ke?.focus(), 10);
        }
        return;
      }
    }
    if (Ne === "Home" && !Me && (me.preventDefault(), oe("nav"), ct.current)) {
      const Pe = Array.from(
        ct.current.querySelectorAll("[data-nav-item]")
      ), Ke = Pe[tt >= 0 ? tt : 0] || Pe[0];
      setTimeout(() => Ke?.focus(), 10);
    }
    if (Ne === "End") {
      const Pe = Xe ? F.current : J.current;
      Pe && !Pe.contains(ye) && (me.preventDefault(), Xe ? (oe("secondary"), setTimeout(() => F.current?.focus(), 10)) : (oe("content"), setTimeout(() => J.current?.focus(), 10)));
    }
    if (Ne === "ArrowDown" || Ne === "ArrowUp") {
      if (ye === J.current && Ne === "ArrowDown") {
        me.preventDefault(), le(J.current).length > 0 && Ie(0);
        return;
      }
      if (ye === F.current && Ne === "ArrowDown") {
        me.preventDefault(), le(
          F.current
        ).length > 0 && Le(0);
        return;
      }
      if (Qe) {
        const Pe = le(J.current);
        if (Pe.length) {
          me.preventDefault();
          const Ke = Ne === "ArrowDown" ? 1 : -1, jt = (Q.contentIndex + Ke + Pe.length) % Pe.length;
          Ie(jt);
        }
      } else if (Ye) {
        const Pe = le(F.current);
        if (Pe.length) {
          me.preventDefault();
          const Ke = Ne === "ArrowDown" ? 1 : -1, jt = (Q.secondaryIndex + Ke + Pe.length) % Pe.length;
          Le(jt);
        }
      }
    }
  }, Ue = !!he && (te === "list" || te === "cards"), it = G.useMemo(() => pe === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : pe === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : pe === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: pe.mobile !== void 0 ? pe.mobile : !0,
    tablet: pe.tablet || !1,
    desktop: pe.desktop || !1
  }, [pe]), Ze = fe && re("medium") && !re("xlarge"), gt = fe && re("xlarge"), lt = !!l, Ee = te === "three-column", [Oe, Fn] = G.useState(!1);
  G.useEffect(() => {
    Ee && Oe && Fn(!1);
  }, [Ee, Oe]), G.useEffect(() => {
    Oe && !Ee && (oe("secondary"), ie(2), setTimeout(() => {
      F.current?.focus();
    }, 50));
  }, [Oe, Ee]), G.useEffect(() => {
    !Oe && !Ee && q === "secondary" && (oe("content"), ie(1), setTimeout(() => {
      J.current?.focus();
    }, 50));
  }, [Oe, Ee, q]);
  const ya = !!he && (Ue && it.mobile || !Ue && Ze && it.tablet || !Ue && gt && it.desktop) || lt && !Ee, Ic = `h${ke}`, va = he ? G.createElement(
    Ic,
    {
      style: {
        marginLeft: Ue ? 32 : 0,
        marginRight: Ue ? 32 : 0
      }
    },
    he.label
  ) : null, Ks = Ue ? "mobile" : Ze ? "tablet" : "desktop", Mc = lt && !Ee && !Oe, wa = Ue && it.mobile ? /* @__PURE__ */ r.jsx(
    qa,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => yn(void 0, void 0)
    }
  ) : void 0, _a = Mc ? /* @__PURE__ */ r.jsx(
    rl,
    {
      element: "button",
      text: f,
      onClick: () => {
        Fn(!0);
      }
    }
  ) : void 0, Sa = !Ee && Oe ? /* @__PURE__ */ r.jsx(
    qa,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => Fn(!1)
    }
  ) : void 0, Lc = G.useMemo(() => {
    if (!ya || !he) return null;
    if (ce)
      return ce({
        item: he,
        detailActive: Ue,
        context: Ks,
        backLink: wa,
        defaultHeading: va
      });
    const me = he && ue ? typeof ue == "function" ? ue(he) : ue : null;
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
                  me && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: me })
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
    he,
    ce,
    Ue,
    Ks,
    wa,
    Sa,
    va,
    _a,
    ue
  ]);
  G.useEffect(() => {
    if (!v) return;
    const me = te === "three-column";
    let Ne = !1;
    const ye = () => {
      Ne || (Z.selectedId !== _e && Z.setSelectedId(_e), Z.drilledIn !== me && Z.setDrilledIn(me));
    };
    if (x && x > 0) {
      const Me = setTimeout(ye, x);
      return () => {
        Ne = !0, clearTimeout(Me);
      };
    } else
      ye();
  }, [v, Z, _e, te, x]), G.useEffect(() => {
    if (!v) return;
    const me = () => {
      const Ne = new URLSearchParams(window.location.search), ye = Ne.get(T);
      Ne.get(w), xe(ye === null ? void 0 : ye);
    };
    return window.addEventListener("popstate", me), () => window.removeEventListener("popstate", me);
  }, [
    v,
    T,
    w,
    u,
    l
  ]);
  const sr = G.useRef(0), Mt = G.useRef(
    null
  ), yn = G.useCallback(
    (me, Ne) => {
      me !== _e && (n === void 0 && xe(me), s?.(me, Ne));
    },
    [n, s, _e]
  );
  G.useEffect(() => {
    if (!L && Ue && J.current) {
      const me = setTimeout(() => J.current?.focus(), 30);
      return () => clearTimeout(me);
    }
  }, [Ue, _e, L]);
  const ct = G.useRef(null), [tt, An] = G.useState(
    () => N === "first" ? 0 : -1
  );
  G.useEffect(() => {
    if (tt < 0 || !ct.current) return;
    const Ne = Array.from(
      ct.current.querySelectorAll("[data-nav-item]")
    )[tt];
    if (Ne) {
      document.activeElement !== Ne && Ne.focus(), sr.current = tt;
      const ye = t[tt];
      C?.(
        ye ? p(ye) : void 0,
        ye,
        tt
      );
    }
  }, [tt, t, C, p]);
  const Pc = (me) => {
    const Ne = b === "vertical" ? "ArrowDown" : "ArrowRight", ye = b === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (me.key === "ArrowRight" && b === "vertical") {
      me.preventDefault(), Oe ? (oe("secondary"), setTimeout(() => {
        F.current?.focus();
      }, 10)) : (oe("content"), setTimeout(() => {
        J.current?.focus();
      }, 10));
      return;
    }
    if (me.key === Ne)
      me.preventDefault(), An((Me) => Math.min(t.length - 1, Me + 1));
    else if (me.key === ye)
      me.preventDefault(), An((Me) => Math.max(0, Me - 1));
    else if (me.key === "Home")
      me.preventDefault(), An(0);
    else if (me.key === "End")
      me.preventDefault(), An(t.length - 1);
    else if (me.key === "Enter" || me.key === " ") {
      me.preventDefault();
      const Me = t[tt];
      Me && !Me.disabled && yn(p(Me), Me);
    } else if (me.key.length === 1 && /[a-z0-9]/i.test(me.key)) {
      Mt.current || (Mt.current = { buffer: "", last: 0 });
      const Me = Date.now(), Qe = 700, Ye = me.key.toLowerCase();
      Me - Mt.current.last > Qe ? Mt.current.buffer = Ye : Mt.current.buffer += Ye, Mt.current.last = Me;
      let Xe = Mt.current.buffer;
      const vn = Xe.split("").every((jt) => jt === Xe[0]), rn = t.map(
        (jt) => String(jt.label || "").toLowerCase()
      );
      let or = 0;
      tt >= 0 && (or = (tt + 1) % t.length);
      let Pe;
      const Ke = (jt, Zs) => {
        const Qs = t.length;
        for (let Na = 0; Na < Qs; Na++) {
          const ja = (or + Na) % Qs;
          if (!t[ja].disabled && rn[ja].startsWith(jt))
            return ja;
        }
      };
      vn && Xe.length > 1 ? Pe = Ke(Xe[0]) : (Pe = Ke(Xe), Pe === void 0 && Xe.length > 1 && (Pe = Ke(Xe[Xe.length - 1]), Pe !== void 0 && Mt.current && (Mt.current.buffer = Xe[Xe.length - 1]))), Pe !== void 0 && An(Pe);
    }
  }, Fc = G.useMemo(() => {
    if (z && (z === "url" || z === "both") && typeof window < "u") {
      const Ne = new URLSearchParams(window.location.search).get(U);
      if (Ne === "1") return !0;
      if (Ne === "0") return !1;
    }
    if (z && (z === "localStorage" || z === "both") && typeof window < "u")
      try {
        const me = window.localStorage.getItem(se);
        if (me === "1") return !0;
        if (me === "0") return !1;
      } catch {
      }
    return D;
  }, [
    z,
    D,
    se,
    U
  ]), [Nt, Ac] = G.useState(Fc);
  G.useEffect(() => {
    A?.(Nt);
  }, [Nt, A]);
  const Ec = G.useCallback(() => {
    B && _ && Ac((me) => !me);
  }, [B, _]);
  G.useEffect(() => {
    if (z && !(typeof window > "u")) {
      if (z === "localStorage" || z === "both")
        try {
          window.localStorage.setItem(
            se,
            Nt ? "1" : "0"
          );
        } catch {
        }
      if (z === "url" || z === "both") {
        const me = new URLSearchParams(window.location.search);
        me.set(U, Nt ? "1" : "0");
        const Ne = `${window.location.pathname}?${me.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", Ne);
      }
    }
  }, [
    Nt,
    z,
    se,
    U
  ]);
  const Rc = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Ue ? "nhs-navigation-split-view--detail-active" : "",
    te === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    _ && B && Nt ? "nhs-navigation-split-view--nav-collapsed" : "",
    g
  ].filter(Boolean).join(" "), ka = G.useRef(null);
  G.useEffect(() => {
    if (!I && ka.current) {
      const me = he ? `Selected ${he.label}` : "Selection cleared";
      ka.current.textContent = me;
    }
  }, [he, I]), G.useEffect(() => {
    !Ue && _e == null && ct.current && ct.current.querySelectorAll("[data-nav-item]")[sr.current]?.focus();
  }, [Ue, _e]);
  const Jt = te === "three-column", [Ca, Bc] = G.useState(!1);
  G.useEffect(() => {
    Jt && !Ca && Bc(!0);
  }, [Jt, Ca]);
  const Js = G.useRef(Jt);
  G.useEffect(() => {
    Js.current !== Jt && (M?.(Jt), Js.current = Jt);
  }, [Jt, M]);
  const Hc = () => {
    if (te === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": _e ? String(_e) : void 0,
          children: [
            t.map((ye) => {
              const Me = p(ye), Qe = Me === _e;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": Qe,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(Me),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": Qe || void 0,
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
                children: m || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const me = "nsv-nav-instructions", Ne = G.useMemo(() => G.memo(
      ({
        item: ye,
        idx: Me,
        selected: Qe,
        focused: Ye
      }) => {
        const Xe = p(ye), vn = ye.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Ye ? 0 : -1,
          onClick: () => {
            sr.current = Me, yn(Xe, ye);
          },
          onKeyDown: (rn) => {
            (rn.key === "Enter" || rn.key === " ") && (rn.preventDefault(), sr.current = Me, yn(Xe, ye));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(Xe),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": Qe,
            "aria-current": Qe ? "true" : void 0,
            "data-selected": Qe || void 0,
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
          onKeyDown: Pc,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": me,
          "aria-activedescendant": _e ? String(_e) : void 0,
          children: [
            t.map((ye, Me) => /* @__PURE__ */ r.jsx(
              Ne,
              {
                item: ye,
                idx: Me,
                selected: p(ye) === _e,
                focused: Me === tt || tt === -1 && Me === 0 && N === "first",
                "data-just-selected": p(ye) === E ? "true" : void 0
              },
              p(ye)
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
          id: me,
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
      ref: Y,
      className: Rc,
      "aria-label": y?.rootLabel,
      "data-layout": te,
      onKeyDown: Ge,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Ue || void 0,
            style: { transform: Ue ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: X,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": y?.navigationLabel || "Items",
                  "data-collapsed": Nt || void 0,
                  tabIndex: 0,
                  children: [
                    _ && B && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Ec,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": Nt ? ne : V,
                        title: Nt ? ne : V,
                        children: Nt ? R || /* @__PURE__ */ r.jsx(sh, {}) : H || /* @__PURE__ */ r.jsx(ah, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Hc() }),
                    j && /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: j
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: J,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": y?.contentLabel || "Content",
                  "data-has-selection": !!he || void 0,
                  tabIndex: 0,
                  style: {
                    display: Oe && !Ee ? "none" : void 0
                  },
                  children: [
                    ya && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: Lc }),
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
              te === "three-column" && (!P || Ca) || Oe && !Ee ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: F,
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
                        Oe && !Ee && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
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
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: he && typeof he == "object" && "label" in he ? he.label : String(he) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        he && K && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof K == "function" ? K(he) : K
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
oh.displayName = "NavigationSplitView";
const ih = typeof window < "u" && window.document ? G.useLayoutEffect : G.useEffect, Yo = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), lh = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: s, topLaneIndex: o }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, u = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${o})`, d = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, m = (g) => {
    h && (g.preventDefault(), a?.(e));
  }, y = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": s || !1,
    onClick: m,
    onKeyDown: (g) => {
      (g.key === "Enter" || g.key === " ") && m(g), g.key === "Escape" && s && m(g);
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
      ...y,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          h && /* @__PURE__ */ r.jsx("span", { className: ve("nhsuk-product-roadmap__item-expander", s && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, ch = Wc(({
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
  const [d, f] = Fe(() => /* @__PURE__ */ new Set()), [h, m] = Fe(() => /* @__PURE__ */ new Set()), y = Ae(/* @__PURE__ */ new Set()), g = be((x) => d.has(x), [d]), p = be((x) => {
    f((P) => {
      const j = new Set(P);
      return j.has(x.id) ? (j.delete(x.id), m((_) => {
        const D = new Set(_);
        return D.add(x.id), D;
      }), setTimeout(() => m((_) => {
        const D = new Set(_);
        return D.delete(x.id), D;
      }), 240), l?.(x.id, !1)) : (j.add(x.id), l?.(x.id, !0)), j;
    });
  }, [l]);
  ih(() => {
    if (u !== "inline" || !i || typeof document > "u") return;
    const x = [];
    if (d.forEach((D) => {
      y.current.has(D) || x.push(D);
    }), y.current = new Set(d), !x.length) return;
    const P = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, j = x.map((D) => `.nhsuk-product-roadmap__inline-children[data-parent="${D}"] .nhsuk-product-roadmap__inline-child`).join(","), _ = Array.from(document.querySelectorAll(j));
    if (_.length) {
      if (P) {
        _.forEach((D) => {
          D.style.opacity = "1", D.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((D) => {
        (D.gsap || D.default || D).to(_, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        _.forEach((D) => {
          D.style.opacity = "1", D.style.transform = "translateY(0)";
        });
      });
    }
  }, [d, u, i]);
  const b = be(() => {
    d.size && f(/* @__PURE__ */ new Set());
  }, [d]), $ = ve("nhsuk-product-roadmap", s), M = Yo(n, 120, 1200, 400), S = Yo(a, 1, 6, 2), N = $e(() => e.map((x) => /* @__PURE__ */ new Date(x + " 01")), [e]), L = $e(() => {
    if (N.length === 0) {
      const j = /* @__PURE__ */ new Date();
      return [j, j];
    }
    const x = new Date(N[0]), P = Kn.offset(new Date(N[N.length - 1]), 1);
    return [x, P];
  }, [N]), I = $e(() => zs().domain(L).range([0, N.length * M]), [L, N.length, M]), C = be((x) => {
    if (x.startDate) {
      const V = new Date(x.startDate), R = new Date(x.endDate ?? x.startDate);
      R < V && R.setTime(V.getTime());
      const H = I(V), z = Kn.offset(new Date(R), 1);
      let se = I(z);
      Number.isFinite(se) || (se = H + M);
      const U = Math.max(M * 0.25, se - H), pe = H / M, ke = U / M;
      return { ...x, _pxLeft: H, _pxWidth: U, _startFraction: pe, _spanColumns: ke };
    }
    const P = x.date ?? 1, j = x.dateOffset ?? 0, _ = x.length ?? 1, D = x.partialLength ?? 1, A = P - 1 + j, ne = _ - 1 + D;
    return { ...x, _pxLeft: A * M, _pxWidth: ne * M, _startFraction: A, _spanColumns: ne };
  }, [I, M]), v = $e(() => t.map((x) => {
    const j = x.roadmapItems.map((D) => {
      const A = !D.childItems && D.children ? { ...D, childItems: D.children } : { ...D };
      return C(A);
    }).sort((D, A) => D._pxLeft !== A._pxLeft ? D._pxLeft - A._pxLeft : A._pxWidth - D._pxWidth), _ = [];
    return j.forEach((D) => {
      const A = D._pxLeft, ne = D._pxLeft + D._pxWidth;
      let V = _.findIndex((R) => R <= A);
      V === -1 && (V = _.length, _.push(0)), _[V] = ne, D.verticalPosition = V + 1;
    }), { ...x, roadmapItems: j, _laneCount: _.length };
  }), [t, C]), T = $e(() => v.map((x) => x._laneCount || 1), [v]), w = $e(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: $,
      style: { "--column-width": `${M}px`, gridTemplateColumns: w },
      role: "grid",
      "aria-label": o,
      "aria-colcount": e.length + 1,
      "aria-rowcount": v.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((x, P) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": P + 2, children: x }, `${x}-${P}`))
        ] }),
        v.map((x, P) => {
          const j = P + 2, _ = T[P];
          let D, A = 0, ne = [];
          i && u === "inline" && (ne = x.roadmapItems.filter((z) => g(z.id) && z.childItems && z.childItems.length).map((z) => ({ id: z.id, lane: z.verticalPosition || 1, count: z.childItems.length })).sort((z, se) => z.lane - se.lane), A = ne.reduce((z, se) => z + se.count, 0));
          const V = _ + A;
          D = `calc((${V} * var(--roadmap-item-block-height)) + (max(0, ${V} - 1) * var(--roadmap-row-gap)))`;
          const R = {};
          let H = 0;
          return ne.forEach((z) => {
            H += z.count, R[z.lane + 1] = H;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": j, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: x.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: D }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: x.roadmapItems.map((z, se) => {
              const U = (z.verticalPosition || 1) - 1, pe = ne.filter((K) => K.lane - 1 < U).reduce((K, re) => K + re.count, 0), ke = U + pe, ce = g(z.id), ue = h.has(z.id);
              return /* @__PURE__ */ r.jsxs(yt.Fragment, { children: [
                /* @__PURE__ */ r.jsx(lh, { item: z, maxLines: S, enableDrilldown: i, onExpand: p, isActive: ce, topLaneIndex: ke, laneOffset: pe }),
                i && u === "inline" && (ce || ue) && z.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": z.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${z.title} child tasks`, children: z.childItems.map((K, re) => {
                  const fe = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let k = z._pxLeft, B = z._pxWidth;
                  if (K.startDate) {
                    const Z = new Date(K.startDate);
                    let de = K.endDate ? new Date(K.endDate) : new Date(Z);
                    de < Z && (de = new Date(Z));
                    const xe = new Date(de);
                    xe.setDate(xe.getDate() + 1);
                    const _e = I(Z);
                    let he = I(xe);
                    (!Number.isFinite(he) || he <= _e) && (he = _e + 6), k = _e, B = Math.max(6, he - _e);
                  }
                  const te = ke + 1 + re;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: ve("nhsuk-product-roadmap__inline-child", K.status && `nhsuk-product-roadmap__inline-child--status-${K.status}`, !ce && ue && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${k}px`, width: `${B}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${te})`, height: fe, opacity: ce ? 0 : void 0, transform: ce ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: K.title })
                      ]
                    },
                    K.id ?? re
                  );
                }) })
              ] }, z.id ?? se);
            }) }) })
          ] }, `${x.heading}-${P}`);
        }),
        i && u === "overlay" && d.size === 1 && (() => {
          const x = Array.from(d)[0], P = t.flatMap((j) => j.roadmapItems).find((j) => j.id === x);
          return !P || !P.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${P.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: P.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: b, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: P.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: P.childItems.map((j, _) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: j.title }),
                j.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: j.content })
              ] }, j.id ?? _)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: b, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
ch.displayName = "ProductRoadmap";
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
function at(e) {
  return function() {
    return e;
  };
}
const rs = Math.PI, as = 2 * rs, sn = 1e-6, uh = as - sn;
function ol(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function dh(e) {
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
class fh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? ol : dh(t);
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
      let m = a - i, y = s - l, g = u * u + c * c, p = m * m + y * y, b = Math.sqrt(g), $ = Math.sqrt(h), M = o * Math.tan((rs - Math.acos((g + h - p) / (2 * b * $))) / 2), S = M / $, N = M / b;
      Math.abs(S - 1) > sn && this._append`L${t + S * d},${n + S * f}`, this._append`A${o},${o},0,0,${+(f * m > d * y)},${this._x1 = t + N * u},${this._y1 = n + N * c}`;
    }
  }
  arc(t, n, a, s, o, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(s), u = a * Math.sin(s), c = t + l, d = n + u, f = 1 ^ i, h = i ? s - o : o - s;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > sn || Math.abs(this._y1 - d) > sn) && this._append`L${c},${d}`, a && (h < 0 && (h = h % as + as), h > uh ? this._append`A${a},${a},0,1,${f},${t - l},${n - u}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = d}` : h > sn && this._append`A${a},${a},0,${+(h >= rs)},${f},${this._x1 = t + a * Math.cos(o)},${this._y1 = n + a * Math.sin(o)}`);
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
  }, () => new fh(t);
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
  var n = at(!0), a = null, s = ul, o = null, i = il(l);
  e = typeof e == "function" ? e : e === void 0 ? dl : at(e), t = typeof t == "function" ? t : t === void 0 ? fl : at(t);
  function l(u) {
    var c, d = (u = ll(u)).length, f, h = !1, m;
    for (a == null && (o = s(m = i())), c = 0; c <= d; ++c)
      !(c < d && n(f = u[c], c, u)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+e(f, c, u), +t(f, c, u));
    if (m) return o = null, m + "" || null;
  }
  return l.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : at(+u), l) : e;
  }, l.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : at(+u), l) : t;
  }, l.defined = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : at(!!u), l) : n;
  }, l.curve = function(u) {
    return arguments.length ? (s = u, a != null && (o = s(a)), l) : s;
  }, l.context = function(u) {
    return arguments.length ? (u == null ? a = o = null : o = s(a = u), l) : a;
  }, l;
}
function ss(e, t, n) {
  var a = null, s = at(!0), o = null, i = ul, l = null, u = il(c);
  e = typeof e == "function" ? e : e === void 0 ? dl : at(+e), t = typeof t == "function" ? t : at(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? fl : at(+n);
  function c(f) {
    var h, m, y, g = (f = ll(f)).length, p, b = !1, $, M = new Array(g), S = new Array(g);
    for (o == null && (l = i($ = u())), h = 0; h <= g; ++h) {
      if (!(h < g && s(p = f[h], h, f)) === b)
        if (b = !b)
          m = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), y = h - 1; y >= m; --y)
            l.point(M[y], S[y]);
          l.lineEnd(), l.areaEnd();
        }
      b && (M[h] = +e(p, h, f), S[h] = +t(p, h, f), l.point(a ? +a(p, h, f) : M[h], n ? +n(p, h, f) : S[h]));
    }
    if ($) return l = null, $ + "" || null;
  }
  function d() {
    return pl().defined(s).curve(i).context(o);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : at(+f), a = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : at(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : at(+f), c) : a;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : at(+f), n = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : at(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : at(+f), c) : n;
  }, c.lineX0 = c.lineY0 = function() {
    return d().x(e).y(t);
  }, c.lineY1 = function() {
    return d().x(e).y(n);
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
function ph(e, t, n) {
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
function hh(e = {}) {
  const t = G.useRef(null), n = G.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, s] = G.useState({ width: 0, height: 0 });
  G.useLayoutEffect(() => {
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
const hl = G.createContext(null);
function nn() {
  return G.useContext(hl);
}
const mh = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: s,
  role: o = "group",
  ariaLabel: i
}) => {
  const l = hh(t), u = { height: e, position: "relative" };
  return n !== void 0 && (u.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: u, role: o, "aria-label": i, children: /* @__PURE__ */ r.jsx(hl.Provider, { value: l, children: s }) });
}, Gs = G.createContext(null), bn = () => G.useContext(Gs), gh = ({
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
  const d = nn(), f = t ?? d?.innerWidth ?? 0, h = n ?? d?.innerHeight ?? 0, m = G.useMemo(() => e.flatMap((S) => S.data), [e]), y = G.useCallback((S) => {
    if (a) return a(S);
    const N = S.x;
    return N instanceof Date ? N : new Date(N);
  }, [a]), g = u ?? 6, p = c ?? 6, b = G.useMemo(() => ph(m, y, [g, Math.max(0, f - g)]), [m, y, f, g]), $ = G.useMemo(() => {
    if (l) {
      const S = Jo([], (N) => N.y, [Math.max(0, h - p), p]);
      return S.domain(l), S;
    }
    return Jo(m, (S) => S.y, [Math.max(0, h - p), p]);
  }, [m, h, l]), M = G.useMemo(() => ({
    xScale: b,
    yScale: $,
    getXTicks: (S = o) => b.ticks(S),
    getYTicks: (S = i) => $.ticks(S)
  }), [b, $, o, i]);
  return /* @__PURE__ */ r.jsx(Gs.Provider, { value: M, children: s });
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
  tickFormatPreset: m
}) => {
  const y = bn(), g = nn(), p = t || (e === "x" ? y?.xScale : y?.yScale), b = n ?? (e === "x" ? 6 : 5), $ = typeof s == "function", M = G.useMemo(() => {
    if ($ || !m) return;
    const L = (I) => new Intl.DateTimeFormat(void 0, I);
    switch (m) {
      case "dayShortMonth":
        return (I) => {
          const C = I instanceof Date ? I : new Date(I);
          return `${C.getDate()}
${L({ month: "short" }).format(C)}`;
        };
      case "dayShortMonthYear":
        return (I) => {
          const C = I instanceof Date ? I : new Date(I);
          return `${C.getDate()}
${L({ month: "short" }).format(C)} ${C.getFullYear()}`;
        };
      case "shortMonth":
        return (I) => {
          const C = I instanceof Date ? I : new Date(I);
          return L({ month: "short" }).format(C);
        };
      case "shortMonthYear":
        return (I) => {
          const C = I instanceof Date ? I : new Date(I);
          return `${L({ month: "short" }).format(C)} ${C.getFullYear()}`;
        };
      case "hourMinute":
        return (I) => {
          const C = I instanceof Date ? I : new Date(I);
          return L({ hour: "2-digit", minute: "2-digit" }).format(C);
        };
      default:
        return;
    }
  }, [$, m]);
  let S = $ ? s : M || ((L) => String(L));
  const N = G.useMemo(() => a && Array.isArray(a) ? a : p ? typeof p.ticks == "function" ? p.ticks(b) : p.domain ? p.domain() : [] : [], [p, b, a]);
  if (e === "x" && !$ && !m && N.length && N.every((L) => L instanceof Date)) {
    const L = N[0], I = N[N.length - 1], C = I.getTime() - L.getTime(), v = 24 * 3600 * 1e3, T = 365 * v, w = L.getFullYear() === I.getFullYear(), x = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (C < 2 * v) {
      const P = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      S = (j) => P.format(j);
    } else if (C < 32 * v)
      S = (P) => {
        const j = P;
        return `${j.getDate()} ${x.format(j)}`;
      };
    else if (C < T && w)
      S = (P) => x.format(P);
    else if (C < 2 * T) {
      const P = /* @__PURE__ */ new Set();
      S = (j) => {
        const _ = j, D = _.getMonth();
        return P.has(D) || P.add(D), `${x.format(_)} ${_.getFullYear()}`;
      };
    } else
      S = (P) => String(P.getFullYear());
  }
  if (!p || !g) return null;
  if (e === "x") {
    const L = i ?? g.innerHeight, I = typeof p.bandwidth == "function", C = I ? p.bandwidth() : 0, v = (x) => {
      const P = p(x);
      return I ? P + C / 2 : P;
    };
    let T = u ?? 0;
    if (d && u == null) {
      const x = N.map((j) => S(j).replace(/\n.*/g, "")), P = x.length ? x.reduce((j, _) => j + _.length, 0) / x.length : 0;
      T = Math.max(12, Math.round(P * 6 + 4));
    }
    const w = G.useMemo(() => {
      if (a && Array.isArray(a) || T <= 0) return N;
      const x = [];
      let P = -1 / 0;
      for (const j of N) {
        const _ = v(j);
        _ - P >= T && (x.push(j), P = _);
      }
      return x;
    }, [N, p, T, a, I, C]);
    return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${L})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ r.jsx("line", { x1: 0, x2: g.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      w.map((x, P) => {
        const j = S(x), _ = c && j.length > c ? j.slice(0, Math.max(1, c - 1)) + "…" : j, D = h ? _.split(/\n/) : [_.replace(/\n/g, " ")], A = f < 0 ? "end" : f > 0 ? "start" : "middle";
        return /* @__PURE__ */ r.jsxs("g", { transform: `translate(${v(x)},0)`, children: [
          /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ r.jsxs("text", { y: 9, textAnchor: A, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: f ? `rotate(${f})` : void 0, fontFamily: "inherit", children: [
            D.map((ne, V) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: V === 0 ? 0 : "1.1em", children: ne }, V)),
            _ !== j && /* @__PURE__ */ r.jsx("title", { children: j })
          ] })
        ] }, x?.toString?.() || P);
      })
    ] });
  }
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    N.map((L, I) => {
      const C = S(L), v = c && C.length > c ? C.slice(0, Math.max(1, c - 1)) + "…" : C, T = h ? v.split(/\n/) : [v.replace(/\n/g, " ")];
      return /* @__PURE__ */ r.jsxs("g", { transform: `translate(0,${p(L)})`, children: [
        /* @__PURE__ */ r.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ r.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          T.map((w, x) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: x === 0 ? 0 : "1.1em", children: w }, x)),
          v !== C && /* @__PURE__ */ r.jsx("title", { children: C })
        ] })
      ] }, L?.toString?.() || I);
    }),
    o && /* @__PURE__ */ r.jsx("text", { transform: "rotate(-90)", x: -g.innerHeight / 2, y: -g.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: o })
  ] });
}, xh = ({
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
}, bh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, rr = {
  color: bh
}, yh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, ca = {
  color: yh
}, vh = [
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
function wh() {
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
    return vh;
  }
}
function _h() {
  return Ba || (Ba = wh()), Ba;
}
function Sh(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Oa(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function kh(e, t, n) {
  const a = Oa(e), s = Oa(t), o = Oa(n), i = a * 0.4124 + s * 0.3576 + o * 0.1805, l = a * 0.2126 + s * 0.7152 + o * 0.0722, u = a * 0.0193 + s * 0.1192 + o * 0.9505;
  return { x: i * 100, y: l * 100, z: u * 100 };
}
function Ch(e, t, n) {
  let i = e / 95.047, l = t / 100, u = n / 108.883;
  const c = (d) => d > 8856e-6 ? Math.cbrt(d) : 7.787 * d + 16 / 116;
  return i = c(i), l = c(l), u = c(u), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - u) };
}
function gl(e) {
  const t = Sh(e);
  if (!t) return null;
  const n = kh(t.r, t.g, t.b);
  return Ch(n.x, n.y, n.z);
}
function Qo(e, t) {
  const n = e.L - t.L, a = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(n * n + a * a + s * s);
}
function Nh() {
  const e = _h();
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
          const m = Qo(c, h);
          m < d && (d = m);
        }
      }
      d > l && (l = d, i = u);
    }
    o.push(i), s.delete(i);
  }
  return o.map((i) => e[i]);
}
function jh() {
  return Ha || (Ha = Nh()), Ha;
}
function Dh(e, t, n) {
  const a = (e + 16) / 116, s = t / 500 + a, o = a - n / 200, i = (d) => {
    const f = d * d * d;
    return f > 8856e-6 ? f : (d - 16 / 116) / 7.787;
  }, l = i(s) * 95.047, u = i(a) * 100, c = i(o) * 108.883;
  return { X: l, Y: u, Z: c };
}
function Th(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, s = e * -0.9689 + t * 1.8758 + n * 0.0415, o = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), o = Math.min(1, Math.max(0, i(o))), { r: Math.round(a * 255), g: Math.round(s * 255), b: Math.round(o * 255) };
}
function $h(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function Ih(e, t) {
  const n = gl(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: s, Y: o, Z: i } = Dh(a, n.a, n.b), l = Th(s, o, i);
  return $h(l.r, l.g, l.b);
}
function Mh() {
  const e = jh(), n = [12, -12, 24, -24].map((s) => e.map((o) => Ih(o, s))), a = [...e];
  return n.forEach((s) => a.push(...s)), a;
}
function Lh() {
  return (!Ua || Ph()) && (Ua = Mh(), xl = ml), Ua;
}
let xl = null;
function Ph() {
  return xl !== ml;
}
function $t(e) {
  const t = Lh();
  return t[e % t.length];
}
let Dn = null, Jn = null, Zn = null, Qn = null;
function Fh() {
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
  (!Dn || !Jn || !Zn || !Qn) && Fh();
}
function mn(e) {
  return ua(), Dn ? Dn[e % Dn.length] : "#212b32";
}
function Ah(e) {
  return ua(), Jn ? Jn[e] : void 0;
}
function Ir(e, t) {
  return Ah(e) || mn(t);
}
const is = ["low", "moderate", "high", "critical"];
let Wa = null;
function Eh() {
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
  return Wa || (Wa = Eh()), Wa;
}
function Rh(e) {
  return bl()[e.toLowerCase()];
}
function Bh(e, t) {
  return Rh(e) || bl()[is[t % is.length]] || $t(t);
}
function Hh(e) {
  return ua(), Zn ? Zn[e] : void 0;
}
function Uh(e, t) {
  return Hh(e) || mn(t);
}
const ls = ["trust", "ambulance", "icb", "region"];
let za = null;
function Oh() {
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
  return za || (za = Oh()), za;
}
function Wh(e) {
  return yl()[e.toLowerCase()];
}
function zh(e, t) {
  return Wh(e) || yl()[ls[t % ls.length]] || $t(t);
}
function Vh(e) {
  return ua(), Qn ? Qn[e] : void 0;
}
function Gh(e, t) {
  return Vh(e) || mn(t);
}
let Va = null;
const Yh = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function qh(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Xh() {
  const e = { color: { ...ca.color, ...rr.color } }, t = (s, o = /* @__PURE__ */ new Set()) => {
    if (o.has(s)) return;
    o.add(s);
    const i = s.split(".").reduce((u, c) => u ? u[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), o) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return Yh.forEach((s) => {
    const o = t(`color.data-viz.region.${s}`);
    o ? n[s] = o : a.push(s);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function Kh() {
  return Va || (Va = Xh()), Va;
}
function Jh(e) {
  return Kh()[qh(e)];
}
function Tn(e, t) {
  return Jh(e) || $t(t);
}
const vl = G.createContext(null), ar = () => G.useContext(vl), Ny = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [s, o] = G.useState(() => new Set(e)), i = n !== void 0, l = G.useMemo(() => i ? new Set(n) : s, [i, n, s]), u = G.useCallback((d) => {
    i || o(new Set(d)), a?.(Array.from(d));
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
  return /* @__PURE__ */ r.jsx(vl.Provider, { value: c, children: t });
}, wl = G.createContext(null), Kt = () => G.useContext(wl), Zh = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = bn(), s = ar(), [o, i] = G.useState(null), l = G.useRef(/* @__PURE__ */ new Map()), [u, c] = G.useState([]), d = G.useCallback(
    (I, C) => {
      l.current.set(I, C);
    },
    []
  ), f = G.useCallback((I) => {
    l.current.delete(I);
  }, []), h = G.useCallback(
    (I, C) => {
      if (!a) return;
      const { xScale: v, yScale: T } = a;
      let w = null, x = 1 / 0;
      l.current.forEach((P, j) => {
        P.forEach((_, D) => {
          const A = v(_.x), ne = T(_.y), V = A - I, R = ne - C, H = Math.sqrt(V * V + R * R);
          H < x && (x = H, w = {
            seriesId: j,
            index: D,
            x: _.x,
            y: _.y,
            clientX: A,
            clientY: ne
          });
        });
      }), w && x <= t ? i(w) : i(null);
    },
    [a, t]
  ), m = G.useCallback(() => i(null), []);
  G.useEffect(() => {
    if (!o) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: I, yScale: C } = a, v = [];
    l.current.forEach((T, w) => {
      T.forEach((x, P) => {
        (o.x instanceof Date && x.x instanceof Date ? x.x.getTime() === o.x.getTime() : x.x === o.x) && v.push({
          seriesId: w,
          index: P,
          x: x.x,
          y: x.y,
          clientX: I(x.x),
          clientY: C(x.y)
        });
      });
    }), v.sort((T, w) => T.seriesId.localeCompare(w.seriesId)), c(v);
  }, [o, a]);
  const y = G.useCallback(
    (I) => {
      if (!o) return;
      const C = l.current.get(o.seriesId);
      if (!C) return;
      let v = o.index + I;
      if (v < 0 || v >= C.length) {
        if (!n) return;
        v = (v + C.length) % C.length;
      }
      const T = C[v];
      if (!a) return;
      const { xScale: w, yScale: x } = a;
      i({
        seriesId: o.seriesId,
        index: v,
        x: T.x,
        y: T.y,
        clientX: w(T.x),
        clientY: x(T.y)
      });
    },
    [o, a, n]
  ), g = G.useCallback(
    (I) => {
      let C = Array.from(l.current.keys());
      if (s && (C = C.filter((A) => !s.isHidden(A))), C.length === 0) return;
      if (!o) {
        const A = C[0], ne = l.current.get(A);
        if (!ne || !a) return;
        const { xScale: V, yScale: R } = a, H = ne[0];
        i({
          seriesId: A,
          index: 0,
          x: H.x,
          y: H.y,
          clientX: V(H.x),
          clientY: R(H.y)
        });
        return;
      }
      const v = C.indexOf(o.seriesId);
      if (v === -1) return;
      let T = v + I;
      if (T < 0 || T >= C.length) {
        if (!n) return;
        T = (T + C.length) % C.length;
      }
      const w = C[T], x = l.current.get(w);
      if (!x || !a) return;
      const P = Math.min(o.index, x.length - 1), j = x[P], { xScale: _, yScale: D } = a;
      i({
        seriesId: w,
        index: P,
        x: j.x,
        y: j.y,
        clientX: _(j.x),
        clientY: D(j.y)
      });
    },
    [o, a, n, s]
  ), p = G.useCallback(() => {
    let I = Array.from(l.current.keys());
    if (s && (I = I.filter((P) => !s.isHidden(P))), I.length === 0) return;
    const C = o ? o.seriesId : I[0], v = l.current.get(C);
    if (!v || v.length === 0 || !a) return;
    const T = v[0], { xScale: w, yScale: x } = a;
    i({
      seriesId: C,
      index: 0,
      x: T.x,
      y: T.y,
      clientX: w(T.x),
      clientY: x(T.y)
    });
  }, [o, a, s]), b = G.useCallback(() => {
    let I = Array.from(l.current.keys());
    if (s && (I = I.filter((j) => !s.isHidden(j))), I.length === 0) return;
    const C = o ? o.seriesId : I[0], v = l.current.get(C);
    if (!v || v.length === 0 || !a) return;
    const T = v.length - 1, w = v[T], { xScale: x, yScale: P } = a;
    i({
      seriesId: C,
      index: T,
      x: w.x,
      y: w.y,
      clientX: x(w.x),
      clientY: P(w.y)
    });
  }, [o, a, s]), $ = G.useCallback(
    () => y(1),
    [y]
  ), M = G.useCallback(
    () => y(-1),
    [y]
  ), S = G.useCallback(
    () => g(1),
    [g]
  ), N = G.useCallback(
    () => g(-1),
    [g]
  ), L = G.useMemo(
    () => ({
      focused: o,
      setFocused: i,
      aggregated: u,
      focusNearest: h,
      clear: m,
      registerSeries: d,
      unregisterSeries: f,
      focusNextPoint: $,
      focusPrevPoint: M,
      focusNextSeries: S,
      focusPrevSeries: N,
      focusFirstPoint: p,
      focusLastPoint: b
    }),
    [
      o,
      u,
      h,
      m,
      d,
      f,
      $,
      M,
      S,
      N,
      p,
      b
    ]
  );
  return /* @__PURE__ */ r.jsx(wl.Provider, { value: L, children: e });
}, Qh = ({
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
  const { xScale: m, yScale: y } = h, p = ar()?.isHidden(e.id) ?? !1, b = p && l === "fade";
  if (p && l === "remove")
    return null;
  const $ = Kt();
  G.useEffect(() => {
    if (!$) return;
    const C = e.data.map((v) => ({ x: i(v), y: v.y }));
    return $.registerSeries(e.id, C), () => $.unregisterSeries(e.id);
  }, [$, e.id, e.data, i]);
  const M = G.useMemo(
    () => os(
      e.data,
      (C) => m(i(C)),
      (C) => y(C.y),
      { smooth: c }
    ),
    [e.data, m, y, i, c]
  ), S = G.useMemo(() => {
    if (!e.data.length) return "";
    const [C] = y.domain(), v = ss().x((T) => m(i(T))).y0(() => y(C)).y1((T) => y(T.y));
    return c && v.curve($r), v(e.data) || "";
  }, [e.data, m, y, i, c]), N = f && f[t], L = e.color || N || (n === "region" ? Tn(e.id, t) : $t(t)), I = n === "region" ? Ir(e.id, t) : mn(t);
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
            d: M,
            fill: "none",
            stroke: L,
            strokeWidth: u,
            role: "presentation"
          }
        ),
        a && e.data.map((C, v) => {
          const T = m(i(C)), w = y(C.y), x = s ? 0 : -1, P = !b && (s && v === o || $?.focused?.seriesId === e.id && $.focused.index === v), j = () => {
            $ && !b && $.setFocused({
              seriesId: e.id,
              index: v,
              x: i(C),
              y: C.y,
              clientX: T,
              clientY: w
            });
          }, _ = () => {
            $ && $.focused?.seriesId === e.id && $.focused.index === v && $.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: T,
              cy: w,
              r: P ? 5 : 3.5,
              stroke: P ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : I,
              strokeWidth: P ? 2 : 1,
              fill: P ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : L,
              className: "fdp-line-point",
              tabIndex: b ? -1 : x,
              "aria-label": `${e.label || e.id} ${i(C).toDateString()} value ${C.y}`,
              "data-series": e.id,
              "data-index": v,
              onMouseEnter: j,
              onFocus: j,
              onMouseLeave: _,
              onBlur: _
            },
            v
          );
        })
      ]
    }
  );
}, em = ({ polite: e = !0, format: t }) => {
  const n = Kt(), [a, s] = G.useState(""), o = G.useRef("");
  return G.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let u;
    if (l && l.length > 1) {
      const c = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      u = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      u = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : tm(i.seriesId, i.x, i.y, i.index);
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
function tm(e, t, n, a) {
  const s = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${s}, value ${n}`;
}
const jy = () => {
  const e = Kt(), t = nn();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: s, innerHeight: o } = t, i = Math.min(Math.max(n.clientX, 0), s), l = Math.min(Math.max(n.clientY, 0), o), u = i + 8, c = l - 8, d = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = d ? f : `${f} • ${n.y}`, m = /\d+$/.exec(n.seriesId || ""), y = m ? parseInt(m[0], 10) - 1 : 0, g = $t(y >= 0 ? y : 0) || "#005eb8", p = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: p, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: p, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: g, stroke: "#fff", strokeWidth: 0.5 }),
    d ? (() => {
      const $ = a.map((I) => `${I.seriesId}: ${I.y}`), M = [h, ...$], S = M.reduce((I, C) => Math.max(I, C.length), 0), N = Math.max(90, S * 6.2 + 16), L = 16 * M.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: u, y: c - L, rx: 4, ry: 4, width: N, height: L, fill: "#212b32", opacity: 0.92 }),
        M.map((I, C) => /* @__PURE__ */ r.jsx("text", { x: u + 8, y: c - L + 6 + 16 * (C + 0.7), fill: "#fff", fontSize: 12, children: I }, C))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: u, y: c - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: u + 8, y: c - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, Dy = ({
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
  const c = ar(), d = !!(c && !a && !l && o === void 0), f = a || d, h = e || [], m = o !== void 0, [y, g] = G.useState(new Set(i)), p = m ? new Set(o) : y, [b, $] = G.useState(""), M = (S) => {
    if (d && c) {
      const x = c.isHidden(S);
      c.toggle(S);
      const j = h.find((D) => D.id === S)?.label || S, _ = u ? u(S, x, j) : `${j} ${x ? "shown" : "hidden"}`;
      $(_);
      return;
    }
    if (!f) return;
    const N = new Set(p), L = N.has(S);
    L ? N.delete(S) : N.add(S), m || g(N);
    const I = h.filter((x) => !N.has(x.id)).map((x) => x.id), C = Array.from(N);
    l?.(I, C);
    const T = h.find((x) => x.id === S)?.label || S, w = u ? u(S, L, T) : `${T} ${L ? "shown" : "hidden"}`;
    $(w);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((S, N) => {
      const L = S.palette || t, I = S.color || (L === "region" ? Tn(S.id, N) : L === "severity" ? Bh(S.id, N) : L === "org-level" ? zh(S.id, N) : $t(N));
      let C = S.stroke || (L === "region" ? Ir(S.id, N) : L === "severity" ? Uh(S.id, N) : L === "org-level" ? Gh(S.id, N) : mn(N));
      if (s && C) {
        const w = C.trim().toLowerCase();
        (w === "#fff" || w === "#ffffff" || w === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(w)) && (C = "#212b32");
      }
      const v = d && c ? c.isHidden(S.id) : p.has(S.id), T = f ? {
        "aria-pressed": !v,
        "aria-label": `${S.label} (${v ? "show" : "hide"})`,
        onClick: () => M(S.id)
      } : { "aria-label": S.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${v ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: I,
              backgroundImage: S.patternDataUrl ? `url(${S.patternDataUrl})` : void 0,
              backgroundSize: S.patternDataUrl ? "auto" : void 0,
              borderColor: C
            },
            ...T
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: S.label })
      ] }, S.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: b })
  ] });
}, Ty = ({
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
  const { xScale: h, yScale: m } = f, g = ar()?.isHidden(e.id) ?? !1, p = g && o === "fade";
  if (g && o === "remove") return null;
  const b = Kt();
  G.useEffect(() => {
    if (!b) return;
    const I = e.data.map((C) => ({ x: a(C), y: C.y }));
    return b.registerSeries(e.id, I), () => b.unregisterSeries(e.id);
  }, [b, e.id, e.data, a]);
  const $ = d && d[t], M = e.color || $ || (n === "region" ? Tn(e.id, t) : $t(t)), S = G.useMemo(() => u && u.length === e.data.length ? os(
    e.data,
    (I) => h(a(I)),
    (I) => {
      const C = e.data.indexOf(I);
      return m(u[C].y1);
    },
    { smooth: l }
  ) : os(
    e.data,
    (I) => h(a(I)),
    (I) => m(I.y),
    { smooth: l }
  ), [e.data, u, h, m, a, l]), N = G.useMemo(() => {
    if (u && u.length === e.data.length) {
      const w = ss().x((x) => h(a(x))).y0((x, P) => m(u[P].y0)).y1((x, P) => m(u[P].y1));
      return l && w.curve($r), w(e.data) || "";
    }
    const [I, C] = m.domain();
    let v = i;
    v < I ? v = I : v > C && (v = C);
    const T = ss().x((w) => h(a(w))).y0(() => m(v)).y1((w) => m(w.y));
    return l && T.curve($r), T(e.data) || "";
  }, [e.data, u, h, m, a, i, l]), L = G.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: p ? 0.25 : 1,
      "aria-hidden": p ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: L, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: M, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: M, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: N,
            fill: c ? `url(#${L})` : M,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !s && /* @__PURE__ */ r.jsx("path", { d: S, fill: "none", stroke: M, strokeWidth: 1 })
      ]
    }
  );
}, $y = ({
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
  allSeries: m,
  stacked: y,
  gapRatio: g = 0.15,
  minBarWidth: p,
  gradientFill: b = !0,
  gradientStrokeMatch: $ = !0,
  opacity: M = 1,
  fadedOpacity: S = 0.25,
  flatFillOpacity: N = 1,
  colors: L
}) => {
  const I = Math.max(0, g), C = bn(), v = nn();
  if (!C || !v) return null;
  const { xScale: T, yScale: w } = C, P = ar()?.isHidden(e.id) ?? !1, j = P && f === "fade";
  if (P && f === "remove") return null;
  const _ = Kt();
  G.useEffect(() => {
    if (!_) return;
    const K = e.data.map((re) => ({ x: s(re), y: re.y }));
    return _.registerSeries(e.id, K), () => _.unregisterSeries(e.id);
  }, [_, e.id, e.data, s]);
  const D = typeof T.bandwidth == "function", A = D ? T.bandwidth() : void 0, ne = G.useMemo(() => {
    if (A != null) return A;
    const K = m && m.length ? m : [e], re = [];
    K.forEach((W) => {
      W.data.forEach((te) => {
        const Z = T(s(te));
        Number.isFinite(Z) && re.push(Z);
      });
    });
    const fe = re.sort((W, te) => W - te);
    if (fe.length <= 1) return 40;
    const k = [];
    for (let W = 1; W < fe.length; W++)
      k.push(fe[W] - fe[W - 1]);
    return k.sort((W, te) => W - te), (k[Math.floor(k.length / 2)] || 40) * i;
  }, [e.data, m, T, s, i, A]), { basePerBar: V } = G.useMemo(() => {
    if (D) {
      const fe = ne, k = Math.max(
        1,
        (fe - l * (n - 1)) / n
      ), B = e.barWidth ?? u;
      let W = B ? Math.min(B, fe) : k;
      if (c) {
        const te = fe * Math.min(1, Math.max(0.05, d)), Z = Math.max(
          1,
          (te - l * (n - 1)) / n
        );
        W = B ? Math.min(W, Z) : Z;
      }
      return { basePerBar: W };
    }
    const K = e.barWidth ?? u, re = Math.max(
      1,
      (ne - l * (n - 1)) / n
    );
    if (c) {
      const fe = m && m.length ? m : [e], k = [];
      fe.forEach(
        (xe) => xe.data.forEach((_e) => {
          const he = T(s(_e));
          Number.isFinite(he) && k.push(he);
        })
      ), k.sort((xe, _e) => xe - _e);
      const B = [];
      for (let xe = 1; xe < k.length; xe++)
        B.push(k[xe] - k[xe - 1]);
      B.sort((xe, _e) => xe - _e);
      const te = (B[Math.floor(B.length / 2)] || ne) * Math.min(1, Math.max(0.05, d)), Z = Math.max(
        1,
        (te - l * (n - 1)) / n
      );
      return { basePerBar: K ? Math.min(K, Z) : Z };
    }
    return K ? { basePerBar: Math.min(K, re) } : { basePerBar: re };
  }, [
    D,
    ne,
    l,
    n,
    u,
    e.barWidth,
    c,
    d,
    m,
    T,
    s
  ]), R = G.useMemo(() => {
    if (D) return [];
    const K = [];
    return (m && m.length ? m : [e]).forEach(
      (fe) => fe.data.forEach((k) => {
        const B = T(s(k));
        Number.isFinite(B) && K.push(B);
      })
    ), K.sort((fe, k) => fe - k), Array.from(new Set(K));
  }, [D, m, e, T, s]), H = G.useMemo(() => {
    if (D)
      return [];
    if (!R.length) return [];
    if (R.length === 1)
      return [
        { center: R[0], left: 0, right: v.innerWidth }
      ];
    const K = [];
    for (let re = 0; re < R.length; re++) {
      const fe = R[re], k = re === 0 ? 0 : (R[re - 1] + fe) / 2, B = re === R.length - 1 ? v.innerWidth : (fe + R[re + 1]) / 2;
      K.push({
        center: fe,
        left: Math.max(0, k),
        right: Math.min(v.innerWidth, B)
      });
    }
    return K;
  }, [D, R, v.innerWidth]), z = G.useMemo(() => {
    if (D || !H.length)
      return;
    const K = Math.min(1, Math.max(0.05, i)), re = H.map((te) => Math.max(2, te.right - te.left)), fe = re.map(
      (te) => Math.max(2, Math.min(te - 1, te * K))
    );
    let k = Math.min(...fe);
    if (p)
      if (n <= 1) {
        const te = Math.min(...re.map((Z) => Z - 1));
        te >= p && k < p && (k = Math.min(te, p));
      } else {
        const te = Math.min(...re.map((de) => de - 1)), Z = p * n + (n - 1) * (p * I);
        Z <= te && k < Z && (k = Z);
      }
    if (n <= 1)
      return p && k < p && re.every((Z) => Z >= p) ? { groupWidth: p, barWidth: p } : { groupWidth: k, barWidth: k };
    let B = k / (n + (n - 1) * I);
    return B < 1 && (B = 1), p && B < p && p * n + (n - 1) * (p * I) <= k && (B = p), { groupWidth: B * n + (n - 1) * (B * I), barWidth: B };
  }, [
    D,
    H,
    i,
    n,
    I,
    p
  ]), se = L && L[t] ? L[t] : void 0, U = e.color || se || (a === "region" ? Tn(e.id, t) : $t(t)), pe = a === "region" ? Ir(e.id, t) : mn(t), ke = $ && (e.color || se) ? U : pe, ce = Number.isFinite(w(0)) ? w(0) : w.range()[0], ue = G.useId();
  return y && y.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: j ? S : M,
      "aria-hidden": j ? !0 : void 0,
      children: [
        b && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: ue,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: U, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: U,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: U,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((K, re) => {
          const fe = s(K), k = T(D ? K.x : fe);
          let B, W;
          if (D)
            B = ne, W = k;
          else {
            const Y = H.find(
              (J) => Math.abs(J.center - k) < 0.5
            );
            if (!Y || !z)
              B = V, W = k - V / 2;
            else {
              const { groupWidth: J } = z;
              B = J;
              let F = k - J / 2;
              F < Y.left && (F = Y.left), F + J > Y.right && (F = Math.max(Y.left, Y.right - J)), W = F;
            }
          }
          const te = y[re], Z = w(te.y0), de = w(te.y1), xe = Math.min(Z, de), _e = Math.abs(de - Z) || 1;
          if (!D && p && B < p) {
            const Y = H.find(
              (J) => Math.abs(J.center - k) < 0.5
            );
            if (Y) {
              const J = Math.max(2, Y.right - Y.left - 1), F = Math.min(J, p);
              F > B && (B = F, W = Math.max(
                Y.left,
                Math.min(Y.right - B, k - B / 2)
              ));
            }
          }
          const he = !j && _?.focused?.seriesId === e.id && _.focused.index === re, E = () => {
            !_ || j || _.setFocused({
              seriesId: e.id,
              index: re,
              x: fe,
              y: te.y1 - te.y0,
              clientX: W + B / 2,
              clientY: xe
            });
          }, O = () => {
            _?.focused?.seriesId === e.id && _.focused.index === re && _.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: W,
              y: xe,
              width: B,
              height: _e,
              fill: b ? `url(#${ue})` : U,
              ...b ? {} : { fillOpacity: N },
              stroke: he ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : b && $ ? U : void 0,
              strokeWidth: he ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: j || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${fe instanceof Date ? fe.toDateString() : fe} value ${te.y1 - te.y0}`,
              onMouseEnter: E,
              onFocus: E,
              onMouseLeave: O,
              onBlur: O
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
      opacity: j ? S : M,
      "aria-hidden": j ? !0 : void 0,
      children: [
        b && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: ue,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: U, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: U,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: U,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          h === "category" && e.data.map((K, re) => {
            const k = L && L[re] || (a === "region" ? Tn(String(K.x), re) : $t(re)), B = `${ue}-${re}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: B,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: k, stopOpacity: 0.3 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: k, stopOpacity: 0.14 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: k, stopOpacity: 0.06 })
                ]
              },
              B
            );
          })
        ] }),
        e.data.map((K, re) => {
          const fe = s(K), k = T(D ? K.x : fe);
          let B, W;
          if (D) {
            const Q = ne;
            if (n <= 1)
              W = Q, B = k;
            else {
              W = Math.max(
                1,
                Q / (n + (n - 1) * I)
              );
              const ee = W * I, q = W * n + ee * (n - 1);
              B = k + (Q - q) / 2 + t * (W + ee);
            }
          } else {
            const Q = H.find((ee) => ee.center === k);
            if (!Q || !z)
              W = V, B = k - V / 2, p && W < p && (W = p, B = k - W / 2);
            else {
              const { barWidth: ee } = z;
              W = ee;
              const q = n > 1 ? ee * I : 0, oe = W * n + q * (n - 1);
              let ae = k - oe / 2;
              ae < Q.left && (ae = Q.left), ae + oe > Q.right && (ae = Math.max(Q.left, Q.right - oe)), B = ae + t * (W + q);
            }
            if (p && W < p) {
              const ee = H.find(
                (q) => Math.abs(q.center - k) < 0.5
              );
              if (ee) {
                const q = Math.max(2, ee.right - ee.left - 1), oe = Math.min(q, p);
                if (oe > W)
                  if (n <= 1)
                    W = oe, B = Math.max(
                      ee.left,
                      Math.min(ee.right - W, k - W / 2)
                    );
                  else {
                    const ae = oe * I, ie = oe * n + ae * (n - 1);
                    if (ie <= ee.right - ee.left - 1) {
                      W = oe;
                      const ge = ie;
                      let we = k - ge / 2;
                      we < ee.left && (we = ee.left), we + ge > ee.right && (we = Math.max(
                        ee.left,
                        ee.right - ge
                      )), B = we + t * (W + ae);
                    }
                  }
              }
            }
          }
          const te = B + W / 2, Z = w(K.y), de = Math.min(ce, Z), xe = Math.abs(ce - Z), _e = !j && _?.focused?.seriesId === e.id && _.focused.index === re, he = () => {
            !_ || j || _.setFocused({
              seriesId: e.id,
              index: re,
              x: fe,
              y: K.y,
              clientX: te,
              clientY: Z
            });
          }, E = () => {
            _?.focused?.seriesId === e.id && _.focused.index === re && _.clear();
          }, O = h === "category" && L ? L[re] : void 0, Y = h === "category" ? O || (a === "region" ? Tn(String(K.x), re) : $t(re)) : U, J = h === "category" ? `${ue}-${re}` : ue, F = b && $ ? Y : h === "category" ? a === "region" ? Ir(String(K.x), re) : mn(re) : ke, X = _e ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : F || Y;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: B,
              y: de,
              width: W,
              height: xe || 1,
              fill: b ? `url(#${J})` : Y,
              ...b ? {} : { fillOpacity: N },
              stroke: X,
              strokeWidth: _e ? 2 : 1,
              className: "fdp-bar",
              tabIndex: j || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${fe instanceof Date ? fe.toDateString() : fe} value ${K.y}`,
              onMouseEnter: he,
              onFocus: he,
              onMouseLeave: E,
              onBlur: E
            },
            re
          );
        })
      ]
    }
  );
}, Iy = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: s = 0.05,
  children: o,
  yTickCount: i = 5
}) => {
  const l = nn(), u = t ?? l?.innerWidth ?? 0, c = n ?? l?.innerHeight ?? 0, d = G.useMemo(() => e.flatMap((p) => p.data), [e]), f = G.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    return d.forEach((b) => p.add(b.x)), Array.from(p);
  }, [d]), h = G.useMemo(
    () => Math.max(0, ...d.map((p) => p.y)),
    [d]
  ), m = G.useMemo(
    () => ji().domain(f).range([0, u]).paddingInner(a).paddingOuter(s),
    [f, u, a, s]
  ), y = G.useMemo(
    () => _r().domain([0, h]).nice().range([c, 0]),
    [h, c]
  ), g = G.useMemo(
    () => ({
      xScale: m,
      yScale: y,
      getXTicks: () => f,
      getYTicks: (p = i) => y.ticks(p)
    }),
    [m, y, f, i]
  );
  return /* @__PURE__ */ r.jsx(Gs.Provider, { value: g, children: o });
}, My = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: s,
  id: o,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const u = G.useId(), c = o || u, d = t ? `${c}-desc` : void 0, f = n ? `${c}-src` : void 0, h = typeof window < "u" && !l;
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
}, Ly = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const s = G.useRef(null);
  return G.useEffect(() => {
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
}, nm = ({
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
  style: m,
  id: y,
  announceDelta: g = !0,
  visual: p
}) => {
  const b = G.useId(), $ = y || b, M = `${$}-label`, S = `${$}-value`, N = `${$}-delta`, L = typeof t == "number" && !Number.isNaN(t), I = c ? "—" : d ? "" : L ? f ? f(t) : t.toLocaleString() : t;
  let C, v = "", T = "";
  if (a && !c && !d) {
    C = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const w = Math.abs(a.value), x = C === "up" ? `+${w}` : C === "down" ? `-${w}` : "0", P = a.isPercent ? "%" : "";
    if (v = `${x}${P}`, a.ariaLabel)
      T = a.ariaLabel;
    else {
      const j = a.invert ? C === "down" : C === "up";
      T = `${C === "neutral" ? "no change" : C === "up" ? "up" : "down"} ${w}${P}${C === "neutral" ? "" : j ? " (improvement)" : " (worse)"}`;
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
      style: m,
      role: "group",
      "aria-labelledby": M,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: M, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: S, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : d ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: d }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: I }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: N,
              "aria-label": T,
              className: Dr(
                "fdp-metric-card__delta",
                C && `fdp-metric-card__delta--${C}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: v }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          u && u.length > 0 && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        p && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: p }),
        g && a && !a.ariaLabel && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: T })
      ] })
    }
  );
};
let cs = null;
try {
  cs = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const We = (e, t) => {
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
  start: We("gradient.stop.start-opacity", "0.12"),
  mid: We("gradient.stop.mid-opacity", "0.03"),
  end: We("gradient.stop.end-opacity", "0"),
  triStart: We(
    "gradient.stop.triangle-start-opacity",
    We("gradient.stop.start-opacity", "0.12")
  ),
  triMid: We(
    "gradient.stop.triangle-mid-opacity",
    We("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: We(
    "gradient.stop.triangle-end-opacity",
    We("gradient.stop.end-opacity", "0")
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
), rm = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, am = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, Mr = Ys.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: rm[t],
    category: am[t],
    participatesInRanking: !0
  }, e),
  {}
);
Ys.map(
  (e) => Mr[e]
);
var nt = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(nt || {}), mt = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(mt || {}), et = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(et || {}), wt = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(wt || {}), pr = /* @__PURE__ */ ((e) => (e.Legacy = "legacy", e.DirectionalFirst = "directional_first", e))(pr || {}), _l = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(_l || {}), kt = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(kt || {}), qs = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(qs || {}), zn = /* @__PURE__ */ ((e) => (e.ImprovementValueBeforePruning = "improvementValueBeforePruning", e.ConcernValueBeforePruning = "concernValueBeforePruning", e))(zn || {});
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
    case et.Pass:
      return "Target met";
    case et.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function sm(e, t, n) {
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
function om(e) {
  return e ? Ct[e]?.hex ?? Ct.neither.hex : Ct.neither.hex;
}
var tn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(tn || {});
const im = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, lm = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Je = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Je || {}), je = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(je || {}), xt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(xt || {}), Ce = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Ce || {});
const cm = (e) => {
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
  e.text || (e.text = cm(e.hex));
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
function um(e, t) {
  let n;
  return e === "common_cause" ? n = ti.common : n = ti.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
var dt = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(dt || {}), un = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(un || {}), er = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(er || {});
const Cl = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === De.Up ? Je.HigherIsBetter : i.improvementDirection === De.Down ? Je.LowerIsBetter : Je.ContextDependent : i.polarity && (l = i.polarity);
    let u;
    switch (i.variationIcon) {
      case Te.Improvement:
        u = Ce.SpecialCauseImproving;
        break;
      case Te.Concern:
        u = Ce.SpecialCauseDeteriorating;
        break;
      case Te.Neither:
        u = i.specialCauseNeutral ? Ce.SpecialCauseNoJudgement : Ce.CommonCause;
        break;
      case Te.Suppressed:
      default:
        u = Ce.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (u === Ce.SpecialCauseImproving ? c = l === Je.LowerIsBetter ? je.Lower : je.Higher : u === Ce.SpecialCauseDeteriorating ? c = l === Je.LowerIsBetter ? je.Higher : je.Lower : u === Ce.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = je.Higher : i.lowSideSignal && !i.highSideSignal ? c = je.Lower : c = je.Higher : c = je.Higher), { state: u, direction: c, polarity: l ?? Je.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Ce.SpecialCauseImproving || i.state === Ce.SpecialCauseDeteriorating) && i.polarity && (i.state === Ce.SpecialCauseImproving ? l = i.polarity === Je.LowerIsBetter ? je.Lower : je.Higher : l = i.polarity === Je.LowerIsBetter ? je.Higher : je.Lower), l || (i.state === Ce.SpecialCauseImproving ? l = je.Higher : i.state === Ce.SpecialCauseDeteriorating ? l = je.Lower : l = je.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? Je.ContextDependent
    };
  }
  const n = e;
  t();
  const s = {
    [xt.Improving]: Ce.SpecialCauseImproving,
    [xt.Deteriorating]: Ce.SpecialCauseDeteriorating,
    [xt.No_Judgement]: Ce.SpecialCauseNoJudgement,
    [xt.None]: Ce.CommonCause
  }[n.judgement];
  let o;
  return n.judgement === xt.Improving ? o = n.polarity === Je.LowerIsBetter ? je.Lower : je.Higher : n.judgement === xt.Deteriorating ? o = n.polarity === Je.LowerIsBetter ? je.Higher : je.Lower : o = n.trend ?? je.Higher, { state: s, direction: o, polarity: n.polarity };
};
function Nl(e, t) {
  const { state: n, direction: a, polarity: s } = Cl(e), o = ma(n), i = a === je.Higher ? "above" : "below", l = a === je.Higher ? "upwards" : "downwards", u = (() => {
    switch (s) {
      case Je.HigherIsBetter:
        return "For this measure, higher values are better.";
      case Je.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (o) {
        case xt.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case xt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case xt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case xt.None:
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
    start: m,
    mid: y,
    end: g,
    triStart: p,
    triMid: b,
    triEnd: $
  } = da(), { state: M, direction: S, polarity: N } = $e(
    () => Cl(e),
    [e]
  ), L = $e(() => Xs(M), [M]), I = $e(() => ma(M), [M]), C = I === xt.Improving || I === xt.Deteriorating;
  let v = "";
  a && C && (u === er.Polarity ? N === Je.HigherIsBetter ? v = "H" : N === Je.LowerIsBetter ? v = "L" : v = "" : v = S === je.Higher ? "H" : "L"), c !== void 0 && (v = c);
  const T = M !== Ce.CommonCause, w = M === Ce.SpecialCauseNoJudgement, x = We("common-cause", "#A6A6A6"), P = T ? L.hex : x, j = $e(
    () => um(M, S),
    [M, S]
  ), _ = n || `${L.label}${v ? S === je.Higher ? " – Higher" : " – Lower" : ""}`, D = Nl(
    e
  );
  if (i === un.TriangleWithRun) {
    const H = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], z = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let se = null;
    M === Ce.SpecialCauseImproving || M === Ce.SpecialCauseDeteriorating ? se = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (S === je.Higher ? H : z).map((B) => B.join(",")).join(" "),
        fill: L.hex,
        stroke: L.hex,
        strokeWidth: 6,
        transform: S === je.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : M === Ce.SpecialCauseNoJudgement && (se = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: S === je.Higher ? H.map((B) => B.join(",")).join(" ") : z.map((B) => B.join(",")).join(" "),
        fill: L.hex,
        stroke: L.hex,
        strokeWidth: 6,
        transform: S === je.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const U = Math.max(0, Math.min(5, Math.floor(l || 0))), pe = M === Ce.CommonCause ? 160 : S === je.Higher ? 220 : 70, ke = 10, ce = 26, ue = 150 - 2 * ce, K = M === Ce.SpecialCauseImproving ? We("improvement", "#00B0F0") : M === Ce.SpecialCauseDeteriorating ? We("concern", "#E46C0A") : x, re = Array.from({ length: 5 }).map((B, W) => {
      const Z = (M === Ce.SpecialCauseImproving || M === Ce.SpecialCauseDeteriorating) && W >= 5 - U ? K : x;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: ue + W * ce,
          cy: pe,
          r: ke,
          fill: Z,
          stroke: Z,
          strokeWidth: 1
        },
        W
      );
    }), fe = Ga(
      L.hex,
      f,
      h,
      s,
      o,
      [
        { offset: "0%", opacity: p },
        { offset: "75%", opacity: b },
        { offset: "100%", opacity: $ }
      ]
    ), k = M === Ce.CommonCause || S === je.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": _,
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
              stroke: L.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsxs("g", { transform: k, children: [
            se,
            v && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: S === je.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: v
              }
            ),
            re
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
    ], z = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], se = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let U = null;
    M === Ce.SpecialCauseImproving || M === Ce.SpecialCauseDeteriorating ? U = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (S === je.Higher ? H : z).map((ke) => ke.join(",")).join(" "),
        fill: L.hex,
        stroke: L.hex,
        strokeWidth: 8,
        transform: S === je.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : M === Ce.SpecialCauseNoJudgement ? U = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: S === je.Higher ? H.map((ke) => ke.join(",")).join(" ") : z.map((ke) => ke.join(",")).join(" "),
        fill: L.hex,
        stroke: L.hex,
        strokeWidth: 8,
        transform: S === je.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : M === Ce.CommonCause && (U = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: se[0][0],
        y1: se[0][1],
        x2: se[1][0],
        y2: se[1][1],
        stroke: L.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const pe = Ga(
      L.hex,
      f,
      h,
      s,
      o,
      [
        { offset: "0%", opacity: p },
        { offset: "65%", opacity: b },
        { offset: "100%", opacity: $ }
      ]
    );
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": _,
        "aria-description": D,
        ...d,
        children: [
          pe,
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
              stroke: L.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          U,
          v && (M === Ce.SpecialCauseImproving || M === Ce.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: S === je.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: v
            }
          )
        ]
      }
    );
  }
  const A = Ga(
    L.hex,
    f,
    h,
    s,
    o,
    [
      { offset: "0%", opacity: m },
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
      "aria-label": _,
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
            stroke: L.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        v && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: L.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: S === je.Lower ? "340" : "155", children: v })
          }
        ),
        w ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: L.hex,
            ...S === je.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          j.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: x,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${j.map((ne) => `${ne.cx} ${ne.cy}`).join(" L ")}`
            }
          ),
          j.map((ne, V) => {
            const H = V >= j.length - 2 && T ? P : x, z = H;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: z,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: H,
                cx: ne.cx,
                cy: ne.cy,
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
ga.displayName = "SPCVariationIcon";
const dm = {
  xs: { height: 24, pointR: 2, stroke: 1 },
  sm: { height: 32, pointR: 3, stroke: 1 },
  md: { height: 44, pointR: 4, stroke: 1 }
};
function fm(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function pm(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), s = a >= 0 ? e.length - 1 - a : null, o = s != null ? e[s].value : null;
  return { mean: n, latestValue: o, latestIndex: s };
}
function hm(e) {
  switch (e) {
    case Ce.SpecialCauseImproving:
      return We("improvement", "#00B0F0");
    case Ce.SpecialCauseDeteriorating:
      return We("concern", "#E46C0A");
    case Ce.SpecialCauseNoJudgement:
      return We("no-judgement", "#490092");
    case Ce.CommonCause:
      return We("common-cause", "#A6A6A6");
    default:
      return We("common-cause", "#A6A6A6");
  }
}
const jl = ({
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
  size: m = "sm",
  ariaLabel: y,
  className: g,
  onPointClick: p,
  onClassification: b,
  maxPoints: $,
  thinningStrategy: M = "stride",
  colorPointsBySignal: S = !0,
  centerLine: N,
  controlLimits: L,
  sigmaBands: I,
  pointSignals: C,
  pointNeutralSpecialCause: v
}) => {
  const T = f, w = $e(
    () => fm(e, t),
    [e, t]
  ), x = $e(() => pm(w), [w]), P = dm[m], j = Math.max(w.length * 6, 60), _ = P.height, D = 4, A = 2, ne = $e(() => (e?.length ?? 0) - (w?.length ?? 0), [e?.length, w?.length]), R = w.filter((E) => E.value != null).map((E) => E.value), H = N ?? x.mean, z = $e(() => {
    if (H == null) return null;
    const E = [];
    if (I?.upperOne != null && E.push(Math.abs(I.upperOne - H)), I?.lowerOne != null && E.push(Math.abs(H - I.lowerOne)), E.length) return E.reduce((Y, J) => Y + J, 0) / E.length;
    const O = [];
    return L?.upper != null && O.push(Math.abs(L.upper - H) / 3), L?.lower != null && O.push(Math.abs(H - L.lower) / 3), O.length ? O.reduce((Y, J) => Y + J, 0) / O.length : null;
  }, [I?.upperOne, I?.lowerOne, L?.upper, L?.lower, H]), se = $e(() => {
    if (z != null || !R.length || H == null || R.length < 2) return null;
    const E = [];
    for (let Y = 1; Y < R.length; Y++) {
      const J = R[Y - 1], F = R[Y];
      J != null && F != null && E.push(Math.abs(F - J));
    }
    return E.length ? E.reduce((Y, J) => Y + J, 0) / E.length / 1.128 : null;
  }, [z, R.join(","), H]), U = z ?? se, pe = $e(() => {
    if (!s) return null;
    if (L) return L;
    if (H == null || U == null) return null;
    const E = 3 * U;
    return { lower: H - E, upper: H + E };
  }, [s, H, U, L?.lower, L?.upper]), ke = $e(() => {
    if (c)
      return {
        state: c,
        firedRules: [],
        mean: x.mean,
        stdDev: U
      };
    if (!d || !U || U === 0 || H == null || x.latestValue == null)
      return {
        state: Ce.CommonCause,
        firedRules: [],
        mean: x.mean,
        stdDev: U
      };
    const E = [], O = x.latestValue, Y = L?.upper ?? (U != null && H != null ? H + 3 * U : null), J = L?.lower ?? (U != null && H != null ? H - 3 * U : null);
    Y != null && J != null && (O > Y || O < J) && E.push("point-beyond-3sigma");
    const F = R.slice(-8);
    if (F.length === 8) {
      const q = F.every((ae) => ae > H), oe = F.every((ae) => ae < H);
      (q || oe) && E.push("eight-point-run");
    }
    const X = R.slice(-5);
    if (X.length === 5) {
      const q = X.every((ge, we, le) => we === 0 || ge >= le[we - 1]), oe = X.every((ge, we, le) => we === 0 || ge <= le[we - 1]), ae = I?.upperOne ?? (U != null && H != null ? H + U : null), ie = I?.lowerOne ?? (U != null && H != null ? H - U : null);
      q && ae != null && X[X.length - 1] > ae && E.push("five-point-trend"), oe && ie != null && X[X.length - 1] < ie && E.push("five-point-trend");
    }
    const Q = R.slice(-3);
    if (Q.length === 3 && (U != null || I)) {
      const q = I?.upperTwo ?? (H != null && U != null ? H + 2 * U : null), oe = I?.lowerTwo ?? (H != null && U != null ? H - 2 * U : null);
      if (q != null && oe != null) {
        const ae = Q.filter((ge) => ge > q).length, ie = Q.filter((ge) => ge < oe).length;
        ae >= 2 && E.push("two-of-three-near-limit"), ie >= 2 && E.push("two-of-three-near-limit");
      }
    }
    let ee = Ce.CommonCause;
    if (E.includes("point-beyond-3sigma") ? ee = O > H ? Ce.SpecialCauseImproving : Ce.SpecialCauseDeteriorating : (E.includes("eight-point-run") || E.includes("five-point-trend") || E.includes("two-of-three-near-limit")) && (ee = R[R.length - 1] > H ? Ce.SpecialCauseImproving : Ce.SpecialCauseDeteriorating), d && !c && E.length === 1 && E[0] === "point-beyond-3sigma") {
      const q = R.slice(-9, -1);
      if (q.length >= 5) {
        const oe = q.filter((ie) => ie > H).length, ae = q.filter((ie) => ie < H).length;
        oe > 0 && ae > 0 && (ee = Ce.SpecialCauseNoJudgement);
      }
    }
    return {
      state: ee,
      firedRules: E,
      mean: H,
      stdDev: U,
      side: x.latestValue != null && H != null ? x.latestValue > H ? "above" : "below" : void 0
    };
  }, [
    c,
    d,
    U,
    H,
    x.latestValue,
    R.join(",")
  ]);
  yt.useEffect(() => {
    d && !c && b && b(ke);
  }, [ke, d, c, b]);
  const ce = ke.state, ue = hm(ce), K = (E) => {
    const O = w.filter((X) => X.value != null);
    if (!O.length) return _ / 2;
    const Y = O.map((X) => X.value);
    pe && (pe.lower != null && Y.push(pe.lower), pe.upper != null && Y.push(pe.upper));
    const J = Math.min(...Y), F = Math.max(...Y);
    return J === F ? _ / 2 : _ - (E - J) / (F - J) * (_ - A * 2) - A;
  }, re = $e(() => {
    if (!$ || w.length <= $)
      return w.map((Q, ee) => ee);
    if (M === "stride") {
      const Q = Math.max(2, $), ee = (w.length - 1) / (Q - 1), q = /* @__PURE__ */ new Set();
      for (let oe = 0; oe < Q; oe++) q.add(Math.round(oe * ee));
      return q.add(w.length - 1), Array.from(q).sort((oe, ae) => oe - ae);
    }
    const E = w.map((Q, ee) => ({ i: ee, v: Q.value }));
    function O(Q, ee, q) {
      const oe = Q.i, ae = Q.v ?? 0, ie = ee.i, ge = ee.v ?? 0, we = q.i, le = q.v ?? 0, Ie = Math.abs((le - ge) * oe - (we - ie) * ae + we * ge - le * ie), Le = Math.hypot(le - ge, we - ie);
      return Le === 0 ? 0 : Ie / Le;
    }
    function Y(Q, ee) {
      if (Q.length <= 2) return Q;
      let q = -1, oe = -1;
      for (let ae = 1; ae < Q.length - 1; ae++) {
        const ie = O(Q[ae], Q[0], Q[Q.length - 1]);
        ie > q && (q = ie, oe = ae);
      }
      if (q > ee) {
        const ae = Y(Q.slice(0, oe + 1), ee), ie = Y(Q.slice(oe), ee);
        return [...ae.slice(0, -1), ...ie];
      }
      return [Q[0], Q[Q.length - 1]];
    }
    let J = 0.1, F = E;
    for (let Q = 0; Q < 8 && (F = Y(E, J), !(F.length <= $)); Q++)
      J *= 1.6;
    const X = new Set(F.map((Q) => Q.i));
    return X.add(0), X.add(w.length - 1), Array.from(X).sort((Q, ee) => Q - ee);
  }, [w, $, M]), fe = $e(
    () => re.map((E) => w[E]),
    [re, w]
  ), k = $e(() => {
    let E = "";
    return fe.forEach((O, Y) => {
      if (O.value == null) return;
      const J = K(O.value), F = Y / (fe.length - 1 || 1) * (j - D * 2) + D;
      E += E ? ` L ${F} ${J}` : `M ${F} ${J}`;
    }), E;
  }, [fe, j]), B = x.latestIndex ?? -1, W = pe, te = da(), Z = $e(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [w.length, h]
  ), de = w.length >= (n || 0), xe = y || "SPC sparkline", _e = (() => {
    if (!ce) return;
    const E = T === De.Up ? Je.HigherIsBetter : T === De.Down ? Je.LowerIsBetter : Je.ContextDependent, O = {
      variationIcon: ce === Ce.SpecialCauseImproving ? "improvement" : ce === Ce.SpecialCauseDeteriorating ? "concern" : ce === Ce.SpecialCauseNoJudgement ? "none" : "neither",
      trend: T === De.Up ? je.Higher : je.Lower,
      polarity: E
    };
    try {
      return Nl(O);
    } catch {
      return;
    }
  })(), he = $e(() => {
    if (!de) return 10;
    const E = [...w].reverse().filter((Y) => Y.value != null).slice(0, 6).map((Y) => K(Y.value));
    return E.length && E.reduce((Y, J) => Y + J, 0) / E.length < _ / 2 ? _ : 10;
  }, [w, de, _]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": xe,
      "aria-description": _e,
      width: j,
      height: _,
      className: g,
      viewBox: `0 0 ${j} ${_}`,
      children: [
        h && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: Z, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: ue,
                stopOpacity: Number(te.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: ue,
                stopOpacity: Number(te.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: ue,
                stopOpacity: Number(te.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: j,
              height: _,
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
              width: j,
              height: Math.abs(
                K(W.upper) - K(W.lower)
              ),
              fill: ue,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: j,
              y1: K(W.lower),
              y2: K(W.lower),
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
              x2: j,
              y1: K(W.upper),
              y2: K(W.upper),
              stroke: ue,
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
                x2: j,
                y1: K(I.lowerTwo),
                y2: K(I.lowerTwo),
                stroke: ue,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            I.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: j,
                y1: K(I.lowerOne),
                y2: K(I.lowerOne),
                stroke: ue,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            I.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: j,
                y1: K(I.upperOne),
                y2: K(I.upperOne),
                stroke: ue,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            I.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: j,
                y1: K(I.upperTwo),
                y2: K(I.upperTwo),
                stroke: ue,
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
            x2: j,
            y1: K(x.mean),
            y2: K(x.mean),
            stroke: We("common-cause", "#A6A6A6"),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: k,
            fill: "none",
            stroke: We("common-cause", "#A6A6A6"),
            strokeWidth: P.stroke,
            strokeLinecap: "round"
          }
        ),
        re.map((E, O) => {
          const Y = w[E];
          if (!Y || Y.value == null) return null;
          const J = K(Y.value), F = O / (fe.length - 1 || 1) * (j - D * 2) + D, Q = (E === B && l ? P.pointR + 1 : P.pointR) - 0.5;
          let ee = We("common-cause", "#A6A6A6");
          if (S) {
            const q = C?.[ne + E];
            if (q === "improvement")
              ee = We("improvement", "#00B0F0");
            else if (q === "concern")
              ee = We("concern", "#E46C0A");
            else if (v?.[ne + E])
              ee = We("no-judgement", "#490092");
            else if (H != null) {
              const ae = Y.value, ie = L?.upper ?? (U != null ? H + 3 * U : null), ge = L?.lower ?? (U != null ? H - 3 * U : null);
              ie != null && ae > ie ? ee = We("improvement", "#00B0F0") : ge != null && ae < ge ? ee = We("concern", "#E46C0A") : ee = We("common-cause", "#A6A6A6");
            } else
              ee = We("common-cause", "#A6A6A6");
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: F,
              cy: J,
              r: Q,
              fill: ee,
              stroke: "none",
              strokeWidth: 0,
              onClick: p ? () => p(E, Y) : void 0,
              style: p ? { cursor: "pointer" } : void 0,
              "data-index": E,
              "data-signal-colour": S ? ee : void 0
            },
            E
          );
        }),
        u && de && ce && ce !== Ce.CommonCause && T && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: j - 4,
            y: he,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: ue,
            "data-glyph-pos": he < _ / 2 ? "top" : "bottom",
            children: T === De.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
jl.displayName = "SPCSpark";
const Se = (e) => typeof e == "number" && Number.isFinite(e), mm = (e) => e.reduce((t, n) => t + n, 0), It = (e) => e.length ? mm(e) / e.length : NaN;
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
function gm(e, t) {
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
const xm = 0.2777, bm = 3.6, ym = (e) => Se(e) && e >= 0 ? Math.pow(e, xm) : null, an = (e) => Se(e) && e >= 0 ? Math.pow(e, bm) : null;
function vm(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const _n = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function wm(e) {
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
  const t = 1 / (e + 1), n = (d) => vm(d, t) - 1, a = n(0.5), s = Math.max(0, n(_n.three.low)), o = n(_n.three.high), i = Math.max(0, n(_n.one.low)), l = n(_n.one.high), u = Math.max(0, n(_n.two.low)), c = n(_n.two.high);
  return { cl: a, lcl: s, ucl: o, oneLow: i, oneHigh: l, twoLow: u, twoHigh: c };
}
function _m(e, t, n) {
  const a = e.map((C) => Se(C) ? ym(C) : null), s = Dl(a, t), { mrMean: o } = Tl(s, !!n), i = a.filter((C, v) => !t[v] && Se(C)), l = i.length ? It(i) : NaN;
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
  const u = 2.66, c = 2 / 3 * u, d = 1 / 3 * u, f = l + u * o, h = l - u * o, m = l + c * o, y = l - c * o, g = l + d * o, p = l - d * o, b = an(l), $ = an(f), M = h <= 0 ? null : an(h), S = an(g), N = p <= 0 ? null : an(p), L = an(m), I = y <= 0 ? null : an(y);
  return {
    center: b ?? null,
    upperProcessLimit: $ ?? null,
    lowerProcessLimit: M ?? null,
    upperTwoSigma: L ?? null,
    lowerTwoSigma: I ?? null,
    upperOneSigma: S ?? null,
    lowerOneSigma: N ?? null,
    mr: s,
    mrMean: o,
    mrUcl: Se(o) ? 3.267 * o : null
  };
}
function Sm(e) {
  const {
    metricImprovement: t,
    capabilityMode: n,
    value: a,
    mean: s,
    upperProcessLimit: o,
    lowerProcessLimit: i,
    target: l
  } = e, u = (c) => typeof c == "number" && Number.isFinite(c);
  return !u(a) || s === null || !u(l) ? et.None : n && u(o) && u(i) ? t === De.Up ? u(i) && i > l ? et.Pass : u(o) && o < l ? et.Fail : et.None : t === De.Down ? u(o) && o < l ? et.Pass : u(i) && i > l ? et.Fail : et.None : et.None : t === De.Down ? a <= l ? et.Pass : et.Fail : t === De.Up ? a >= l ? et.Pass : et.Fail : et.None;
}
function km(e, t) {
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
  let m = 0;
  for (let y = 0; y < e.length; y++) {
    const g = e[y];
    y > 0 && e[y - 1].partitionId !== g.partitionId && (m = y);
    const p = y > 0 && i(y - 1), b = y > 0 && l(y - 1), $ = y > 0 && u(y - 1), M = y > 0 && c(y - 1), S = y > 0 && d(y - 1), N = y > 0 && f(y - 1), L = i(y), I = l(y), C = u(y), v = c(y), T = d(y), w = f(y), x = [];
    L && !p && x.push({ reason: wt.Shift, index: y }), I && !b && x.push({ reason: wt.Shift, index: y }), C && !$ && x.push({ reason: wt.Trend, index: y }), v && !M && x.push({ reason: wt.Trend, index: y }), T && !S && x.push({ reason: wt.Point, index: y }), w && !N && x.push({ reason: wt.Point, index: y });
    for (const P of x) {
      if (P.index - m < a) continue;
      const j = Math.max(0, P.index - n), _ = P.index - 1;
      if (_ - j + 1 < n) continue;
      const D = P.index, A = P.index + n - 1;
      if (A >= e.length) continue;
      const ne = e.slice(j, _ + 1).map((k) => k.value).filter(
        (k) => typeof k == "number" && Number.isFinite(k)
      ), V = e.slice(D, A + 1).map((k) => k.value).filter(
        (k) => typeof k == "number" && Number.isFinite(k)
      );
      if (ne.length < n || V.length < n) continue;
      const R = e[P.index];
      let H = null;
      if (typeof R.upperProcessLimit == "number" && typeof R.mean == "number") {
        const k = R.upperProcessLimit - R.mean;
        k > 0 && (H = k / 3);
      }
      if (!H || H <= 0) continue;
      const z = It(ne), se = It(V), U = se - z;
      if (Math.abs(U) < s * H) continue;
      const ke = e.slice(D, A + 1).filter(
        (k) => k.variationIcon === Te.Concern
      ).length;
      if (ke > 1) continue;
      const ce = (k) => {
        const B = It(k);
        return k.length ? k.reduce((W, te) => W + (te - B) * (te - B), 0) / k.length : 0;
      }, ue = ce(ne), K = ce(V);
      let re = P.reason === wt.Shift ? 90 : P.reason === wt.Trend ? 70 : 60;
      if (K < ue && (re += 10), re -= ke * 15, re < o) continue;
      const fe = h.find((k) => k.index === P.index);
      if (fe) {
        const k = (B) => B === wt.Shift ? 3 : B === wt.Trend ? 2 : 1;
        (k(P.reason) > k(fe.reason) || re > fe.score) && (fe.reason = P.reason, fe.score = re, fe.deltaMean = U, fe.oldMean = z, fe.newMean = se, fe.window = [D, A]);
      } else
        h.push({
          index: P.index,
          reason: P.reason,
          score: re,
          deltaMean: U,
          oldMean: z,
          newMean: se,
          window: [D, A]
        });
    }
  }
  return h.sort((y, g) => y.index - g.index), h;
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
function Cm(e) {
  const t = [], n = [];
  e.specialCauseSinglePointUp && t.push(ft.SinglePoint), e.specialCauseSinglePointDown && n.push(ft.SinglePoint), e.specialCauseTwoOfThreeUp && t.push(ft.TwoSigma), e.specialCauseTwoOfThreeDown && n.push(ft.TwoSigma), e.specialCauseShiftUp && t.push(ft.Shift), e.specialCauseShiftDown && n.push(ft.Shift), e.specialCauseTrendUp && t.push(ft.Trend), e.specialCauseTrendDown && n.push(ft.Trend);
  const a = t.reduce((o, i) => Math.max(o, Mr[i].rank), 0), s = n.reduce((o, i) => Math.max(o, Mr[i].rank), 0);
  return { upRules: t, downRules: n, upMax: a, downMax: s, hasUp: t.length > 0, hasDown: n.length > 0 };
}
function Nm(e) {
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
    const h = s.slice(d, f).map((m) => m.value);
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
    const f = d - a, h = l(f, d), m = l(d, d + a);
    if (!Se(h) || !Se(m)) continue;
    const g = (m - h) / u;
    if (!(o ? g >= c : i ? -g >= c : Math.abs(g) >= c)) continue;
    const b = s.slice(d, d + a).map((S) => S.value);
    if (!(o ? b.every((S) => S > h) : i ? b.every((S) => S < h) : b.every((S) => o ? S > h : S < h))) continue;
    const M = s[d].idx;
    e[M].baseline || (e[M].baseline = !0);
    return;
  }
}
function Ml(e) {
  if (!e) return {};
  const t = e, n = e, a = n.rules ?? {}, s = n.precedence ?? {}, o = n.thresholds ?? {}, i = n.warnings ?? {}, l = n.rareEvent ?? {}, u = n.capability ?? {}, c = n.grace ?? {}, d = n.baselineSuggest ?? {}, f = n.autoRecalc ?? {}, h = c.emergingEnabled ?? n.emergingGraceEnabled ?? t.emergingGraceEnabled ?? t.emergingDirectionGrace, m = a.collapseWeakerClusterRules ?? n.collapseWeakerClusterRules ?? t.collapseWeakerClusterRules ?? t.collapseClusterRules;
  if (Ya()) {
    if (t.emergingDirectionGrace !== void 0)
      throw new Error("[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.");
    if (t.collapseClusterRules !== void 0)
      throw new Error("[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.");
  }
  const y = globalThis;
  !Ya() && t.emergingDirectionGrace !== void 0 && n.emergingGraceEnabled === void 0 && c.emergingEnabled === void 0 && !y.__spc_warn_emergingDirectionGrace && (y.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), !Ya() && t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && n.collapseWeakerClusterRules === void 0 && !y.__spc_warn_collapseClusterRules && (y.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
  const g = ($) => {
    const M = {};
    for (const S of Object.keys($)) {
      const N = $[S];
      N !== void 0 && (M[S] = N);
    }
    return M;
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
  }), b = { ...p, ...g(t) };
  if (h !== void 0 && (b.emergingGraceEnabled = h, b.grace = { ...b.grace, emergingEnabled: h }), p.collapseWeakerClusterRules !== void 0) {
    const $ = p.collapseWeakerClusterRules;
    b.collapseWeakerClusterRules = $, b.rules = { ...b.rules, collapseWeakerClusterRules: $ };
  }
  return g(b);
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
  const u = Nm(l), c = [], d = [], h = l.filter(
    (p) => !p.ghost && Se(p.value)
  ).length >= (i.minimumPoints ?? 13);
  let m = 0;
  const y = {};
  for (const p of u) {
    m++;
    const b = p.map((x) => x.value), $ = p.map((x) => x.ghost);
    let M = new Array(b.length).fill(null), S = NaN, N = NaN, L = NaN, I = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      M = Dl(b, $);
      const x = b.filter(
        (j, _) => !$[_] && Se(j)
      );
      S = x.length ? It(x) : NaN;
      const P = Tl(
        M,
        !!i.excludeMovingRangeOutliers
      );
      N = P.mrMean, L = P.mrUcl, I = gm(S, N);
    } else if (t === "T") {
      const x = _m(
        b,
        $,
        !!i.excludeMovingRangeOutliers
      );
      M = x.mr, N = x.mrMean ?? NaN, L = x.mrUcl ?? NaN, S = x.center ?? NaN, I = {
        upperProcessLimit: x.upperProcessLimit,
        lowerProcessLimit: x.lowerProcessLimit,
        upperTwoSigma: x.upperTwoSigma,
        lowerTwoSigma: x.lowerTwoSigma,
        upperOneSigma: x.upperOneSigma,
        lowerOneSigma: x.lowerOneSigma
      };
    } else if (t === "G") {
      const x = b.filter(
        (_, D) => !$[D] && Se(_)
      ), P = x.length ? It(x) : NaN, j = wm(P);
      S = j.cl ?? NaN, I = {
        upperProcessLimit: j.ucl,
        lowerProcessLimit: j.lcl,
        upperTwoSigma: j.twoHigh,
        lowerTwoSigma: j.twoLow,
        upperOneSigma: j.oneHigh,
        lowerOneSigma: j.oneLow
      }, M = new Array(b.length).fill(null), N = NaN, L = NaN;
    } else
      d.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const C = p.map((x, P) => {
      const j = !x.ghost && Se(x.value) ? b.slice(0, P + 1).filter((ne, V) => !$[V] && Se(ne)).length : 0, _ = h, D = _ ? I : {
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
        partitionId: m,
        pointRank: j,
        mean: _ && Se(S) ? S : null,
        mr: Se(M[P]) ? M[P] : null,
        mrMean: _ && Se(N) ? N : null,
        mrUcl: _ && Se(L) ? L : null,
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
        assuranceIcon: et.None,
        upperBaseline: _ && Se(S) ? S : null,
        lowerBaseline: _ && Se(S) ? S : null,
        movingRangeHighPointValue: _ && Se(L) ? L : null,
        ghostValue: x.ghost && Se(x.value) ? x.value : null,
        ghostFlag: !!x.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    y[m] = C.filter(
      (x) => !x.ghost && Se(x.value)
    ).length;
    const v = i.specialCauseShiftPoints ?? 6, T = i.specialCauseTrendPoints ?? 6, w = [];
    for (let x = 0; x < C.length; x++) {
      const P = C[x], j = P.value;
      if (!P.ghost && Se(j) && w.push(x), !(Se(P.mean) && Se(P.upperProcessLimit) && Se(P.lowerProcessLimit)) || P.ghost || !Se(j)) {
        c.push(P);
        continue;
      }
      P.specialCauseSinglePointUp = Se(P.upperProcessLimit) ? j > P.upperProcessLimit : !1, P.specialCauseSinglePointDown = Se(P.lowerProcessLimit) ? j < P.lowerProcessLimit : !1, c.push(P);
    }
    if (w.length) {
      const x = (_) => C[_];
      let P = [], j = [];
      for (const _ of w) {
        const D = x(_);
        if (!Se(D.mean) || !Se(D.value)) {
          P = [], j = [];
          continue;
        }
        if (D.value > D.mean ? (P.push(_), j = []) : D.value < D.mean ? (j.push(_), P = []) : (P = [], j = []), P.length >= v)
          for (const A of P) {
            const ne = x(A);
            ne.specialCauseShiftUp = !0;
          }
        if (j.length >= v)
          for (const A of j) {
            const ne = x(A);
            ne.specialCauseShiftDown = !0;
          }
      }
      for (let _ = 0; _ <= w.length - 3; _++) {
        const A = w.slice(_, _ + 3).map(x);
        if (!A.every((ce) => Se(ce.mean) && Se(ce.value))) continue;
        const ne = A[0].mean, V = A.every((ce) => ce.value > ne), R = A.every((ce) => ce.value < ne);
        if (!V && !R) continue;
        const H = A[0].upperTwoSigma ?? 1 / 0, z = A[0].lowerTwoSigma ?? -1 / 0, se = A[0].upperProcessLimit ?? 1 / 0, U = A[0].lowerProcessLimit ?? -1 / 0, pe = A.filter((ce) => ce.value > H && ce.value <= se), ke = A.filter((ce) => ce.value < z && ce.value >= U);
        if (V && pe.length >= 2)
          for (const ce of pe)
            ce.specialCauseTwoOfThreeUp = !0;
        if (R && ke.length >= 2)
          for (const ce of ke)
            ce.specialCauseTwoOfThreeDown = !0;
      }
      if (i.enableFourOfFiveRule)
        for (let _ = 0; _ <= w.length - 5; _++) {
          const A = w.slice(_, _ + 5).map(x);
          if (!A.every((se) => Se(se.mean) && Se(se.value))) continue;
          const ne = A[0].mean;
          if (!A.every((se) => se.value > ne) && !A.every((se) => se.value < ne)) continue;
          const V = A[0].upperOneSigma ?? 1 / 0, R = A[0].lowerOneSigma ?? -1 / 0, H = A.filter((se) => se.value > V), z = A.filter((se) => se.value < R);
          if (A.every((se) => se.value > ne) && H.length >= 4)
            for (const se of H)
              se.specialCauseFourOfFiveUp = !0;
          if (A.every((se) => se.value < ne) && z.length >= 4)
            for (const se of z)
              se.specialCauseFourOfFiveDown = !0;
        }
      for (let _ = 0; _ <= w.length - T; _++) {
        const D = w.slice(_, _ + T), A = D.map(x);
        if (!A.every((R) => Se(R.value))) continue;
        let ne = !0, V = !0;
        for (let R = 1; R < A.length && (A[R].value > A[R - 1].value || (ne = !1), A[R].value < A[R - 1].value || (V = !1), !(!ne && !V)); R++)
          ;
        if (ne) for (const R of D) {
          const H = x(R);
          H.specialCauseTrendUp = !0;
        }
        if (V) for (const R of D) {
          const H = x(R);
          H.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let _ = [];
        for (const D of w) {
          const A = x(D);
          if (!Se(A.value) || !Se(A.mean) || !Se(A.upperOneSigma) || !Se(A.lowerOneSigma)) {
            _ = [];
            continue;
          }
          if (!(A.value < A.upperOneSigma && A.value > A.lowerOneSigma)) {
            _ = [];
            continue;
          }
          if (_.push(D), _.length >= 15) {
            const V = _.map(x), R = V.some((z) => z.value > z.mean), H = V.some((z) => z.value < z.mean);
            if (R && H)
              for (const z of _) x(z).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const x = i.maximumPointsPartition;
      let P = 0;
      for (const j of c.filter((_) => _.partitionId === m))
        !j.ghost && Se(j.value) && P++, P > x && (j.mean = j.upperProcessLimit = j.lowerProcessLimit = null, j.upperTwoSigma = j.lowerTwoSigma = j.upperOneSigma = j.lowerOneSigma = null);
    }
  }
  for (const p of c) {
    if (p.ruleTags && p.ruleTags.length) continue;
    const b = [];
    p.specialCauseShiftUp && b.push(mt.ShiftHigh), p.specialCauseShiftDown && b.push(mt.ShiftLow), p.specialCauseTrendUp && b.push(mt.TrendIncreasing), p.specialCauseTrendDown && b.push(mt.TrendDecreasing), p.specialCauseSinglePointUp && b.push(mt.SinglePointAbove), p.specialCauseSinglePointDown && b.push(mt.SinglePointBelow), p.specialCauseTwoOfThreeUp && b.push(mt.TwoOfThreeAbove), p.specialCauseTwoOfThreeDown && b.push(mt.TwoOfThreeBelow), p.specialCauseFourOfFiveUp && b.push(mt.FourOfFiveAbove), p.specialCauseFourOfFiveDown && b.push(mt.FourOfFiveBelow), p.specialCauseFifteenInnerThird && b.push(mt.FifteenInnerThird), b.length && (p.ruleTags = b);
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
    const $ = b.value > b.mean, M = b.value < b.mean;
    i.rules?.collapseWeakerClusterRules && (b.specialCauseTwoOfThreeUp && b.specialCauseFourOfFiveUp && (b.specialCauseTwoOfThreeUp = !1), b.specialCauseTwoOfThreeDown && b.specialCauseFourOfFiveDown && (b.specialCauseTwoOfThreeDown = !1));
    const S = b.specialCauseTrendUp && $, N = b.specialCauseTrendDown && M, L = b.specialCauseSinglePointUp || b.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && b.specialCauseFourOfFiveUp || b.specialCauseShiftUp || S, I = b.specialCauseSinglePointDown || b.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && b.specialCauseFourOfFiveDown || b.specialCauseShiftDown || N;
    let C = !1;
    if (i.precedenceStrategy === pr.DirectionalFirst && (i.grace?.emergingEnabled || i.emergingGraceEnabled || i.emergingDirectionGrace)) {
      const T = i.specialCauseTrendPoints || 6;
      if (T > 1 && !(b.specialCauseTrendUp || b.specialCauseTrendDown)) {
        const w = T - 1, x = [];
        for (let P = p; P >= 0 && x.length < w; P--) {
          const j = c[P];
          !j.ghost && Se(j.value) && j.mean !== null && x.unshift(j);
        }
        if (x.length === w) {
          let P = !0;
          for (let j = 1; j < x.length && P; j++)
            n === De.Up ? x[j].value > x[j - 1].value || (P = !1) : n === De.Down && x[j].value < x[j - 1].value || (P = !1);
          C = P;
        }
      }
    }
    if (i.precedenceStrategy === pr.DirectionalFirst) {
      const w = n === De.Up ? L : n === De.Down ? I : !1, x = n === De.Up ? I : n === De.Down ? L : !1;
      w && !x ? b.variationIcon = Te.Improvement : x && !w ? b.variationIcon = C ? Te.Neither : Te.Concern : w && x ? b.variationIcon = C || b.specialCauseTrendUp || b.specialCauseTrendDown ? Te.Improvement : Te.Neither : b.variationIcon = Te.Neither;
    } else
      n === De.Up ? b.variationIcon = L ? Te.Improvement : I ? Te.Concern : Te.Neither : n === De.Down ? b.variationIcon = I ? Te.Improvement : L ? Te.Concern : Te.Neither : b.variationIcon = Te.Neither;
    const v = L || I;
    if (b.specialCauseImprovementValue = v && b.variationIcon === Te.Improvement ? b.value : null, b.specialCauseConcernValue = v && b.variationIcon === Te.Concern ? b.value : null, b.specialCauseNeitherValue = v && b.variationIcon === Te.Neither ? b.value : null, i.conflictPrecedenceMode === _l.SqlRankingV26a && b.specialCauseImprovementValue !== null && b.specialCauseConcernValue !== null) {
      const T = [];
      b.specialCauseSinglePointUp && T.push({ id: ft.SinglePoint, rank: 1, side: nt.Up }), b.specialCauseSinglePointDown && T.push({ id: ft.SinglePoint, rank: 1, side: nt.Down }), b.specialCauseTwoOfThreeUp && T.push({ id: ft.TwoSigma, rank: 2, side: nt.Up }), b.specialCauseTwoOfThreeDown && T.push({ id: ft.TwoSigma, rank: 2, side: nt.Down }), b.specialCauseShiftUp && T.push({ id: ft.Shift, rank: 3, side: nt.Up }), b.specialCauseShiftDown && T.push({ id: ft.Shift, rank: 3, side: nt.Down }), b.specialCauseTrendUp && T.push({ id: ft.Trend, rank: 4, side: nt.Up }), b.specialCauseTrendDown && T.push({ id: ft.Trend, rank: 4, side: nt.Down });
      const w = T.filter((V) => V.side === nt.Up).reduce((V, R) => Math.max(V, R.rank), 0), x = T.filter((V) => V.side === nt.Down).reduce((V, R) => Math.max(V, R.rank), 0);
      let P;
      w > x ? P = kt.Upwards : x > w ? P = kt.Downwards : P = kt.Same;
      const j = b.specialCauseImprovementValue, _ = b.specialCauseConcernValue;
      P === kt.Upwards ? n === De.Up ? b.specialCauseConcernValue = null : n === De.Down && (b.specialCauseImprovementValue = null) : P === kt.Downwards ? n === De.Up ? b.specialCauseImprovementValue = null : n === De.Down && (b.specialCauseConcernValue = null) : b.variationIcon === Te.Improvement ? b.specialCauseConcernValue = null : b.variationIcon === Te.Concern ? b.specialCauseImprovementValue = null : b.specialCauseConcernValue = null, b.specialCauseImprovementValue !== null && b.specialCauseConcernValue === null ? b.variationIcon = Te.Improvement : b.specialCauseConcernValue !== null && b.specialCauseImprovementValue === null ? b.variationIcon = Te.Concern : b.specialCauseImprovementValue === null && b.specialCauseConcernValue === null && (b.variationIcon = Te.Neither);
      const D = b.specialCauseImprovementValue !== null ? nt.Up : b.specialCauseConcernValue !== null ? nt.Down : void 0, A = D === nt.Up ? w : D === nt.Down ? x : Math.max(w, x), ne = T.find((V) => V.rank === A && (!D || V.side === D));
      b.conflictPrimeDirection = P, b.conflictResolved = !0, b.conflictResolvedRank = A || void 0, ne && (b.conflictResolvedByRuleId = ne.id), b.pruningMode = qs.Conflict, b.originalSpecialCauseImprovementValue = j, b.originalSpecialCauseConcernValue = _;
    }
    {
      const T = l[b.rowId - 1], w = Sm({
        metricImprovement: n,
        capabilityMode: i.assuranceCapabilityMode,
        value: b.value,
        mean: b.mean,
        upperProcessLimit: b.upperProcessLimit,
        lowerProcessLimit: b.lowerProcessLimit,
        target: Se(T?.target) ? T.target : null
      });
      b.assuranceIcon = w;
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
    for (const $ of c)
      !$.ghost && Se($.value) && b++, b > p && ($.mean = $.upperProcessLimit = $.lowerProcessLimit = null, $.upperTwoSigma = $.lowerTwoSigma = $.upperOneSigma = $.lowerOneSigma = null);
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
  if (i.partitionSizeWarnings && Object.entries(y).forEach(([p, b]) => {
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
  let g;
  if (i.baselineSuggest) {
    const p = i.baselineSuggestStabilityPoints, b = i.baselineSuggestMinGap, $ = i.baselineSuggestMinDeltaSigma, M = i.baselineSuggestScoreThreshold;
    g = km(
      c.map((N) => ({
        value: N.value,
        partitionId: N.partitionId,
        variationIcon: N.variationIcon,
        mean: N.mean,
        upperProcessLimit: N.upperProcessLimit
      })),
      {
        W: p,
        minGap: b,
        minDeltaSigma: $,
        scoreThreshold: M,
        isShiftUpAt: (N) => !!c[N].specialCauseShiftUp,
        isShiftDownAt: (N) => !!c[N].specialCauseShiftDown,
        isTrendUpAt: (N) => !!c[N].specialCauseTrendUp,
        isTrendDownAt: (N) => !!c[N].specialCauseTrendDown,
        isSingleUpAt: (N) => !!c[N].specialCauseSinglePointUp,
        isSingleDownAt: (N) => !!c[N].specialCauseSinglePointDown
      }
    ).map((N) => ({
      index: N.index,
      reason: N.reason,
      score: N.score,
      deltaMean: N.deltaMean,
      oldMean: N.oldMean,
      newMean: N.newMean,
      window: N.window
    }));
  }
  return { rows: c, warnings: d, ...g ? { suggestedBaselines: g } : {} };
}
function Dm(e, t) {
  const n = Cm(e), a = n.upMax, s = n.downMax, o = n.upRules.map((g) => ({ id: g, rank: ei[g] })), i = n.downRules.map((g) => ({
    id: g,
    rank: ei[g]
  }));
  let l;
  a > s ? l = kt.Upwards : s > a ? l = kt.Downwards : l = kt.Same;
  const u = a > 0, c = s > 0, d = t === De.Up && u || t === De.Down && c ? e.value : null, f = t === De.Up && c || t === De.Down && u ? e.value : null;
  e.sqlOriginalImprovementValue = d, e.sqlOriginalConcernValue = f, d !== null && f !== null && (e.sqlPruned = !0, l === kt.Upwards ? t === De.Up || t === De.Down && (e.sqlOriginalImprovementValue = null) : l === kt.Downwards ? t === De.Up ? e.sqlOriginalImprovementValue = null : De.Down : d !== null ? e.sqlOriginalConcernValue = null : f !== null && (e.sqlOriginalImprovementValue = null)), e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Te.Improvement : !e.sqlOriginalImprovementValue && e.sqlOriginalConcernValue ? e.variationIcon = Te.Concern : !e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Te.Neither : e.variationIcon = Te.Improvement, e.primeDirection = l, e.primeRank = Math.max(a, s) || void 0, e.pruningMode = qs.Sql;
  const y = ((e.variationIcon === Te.Concern ? t === De.Up ? nt.Down : nt.Up : t === De.Up ? nt.Up : nt.Down) === nt.Up ? o : i).reduce(
    (g, p) => !g || p.rank > g.rank ? p : g,
    void 0
  );
  y && (e.primeRuleId = y.id);
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
    Dm(l, n);
  return { rows: i, warnings: o.warnings };
}
function ni(e, t) {
  return e === "improvement" ? Ce.SpecialCauseImproving : e === "concern" ? Ce.SpecialCauseDeteriorating : e === "suppressed" || e === "neither" && t ? Ce.SpecialCauseNoJudgement : e === "neither" ? Ce.CommonCause : null;
}
function Tm(e, t) {
  return e === "improvement" || e === "concern" || e === "suppressed" || e === "neither" && !!t;
}
function $m(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function Im(e) {
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
  } = e, f = G.useMemo(() => {
    const L = [];
    for (let I = 0; I < t.length; I++)
      L.push({ x: n?.[I], value: t[I] });
    return L;
  }, [t, n]), h = G.useMemo(() => {
    try {
      const L = f.map((I, C) => ({ x: I.x ?? C, value: I.value }));
      return o ? Ll({ chartType: a, metricImprovement: s, data: L, settings: {} }) : xa({ chartType: a, metricImprovement: s, data: L, settings: {} });
    } catch {
      return null;
    }
  }, [f, a, s, o]), m = G.useMemo(() => {
    const L = h?.rows;
    if (!L || L.length === 0) return null;
    for (let I = L.length - 1; I >= 0; I--) {
      const C = L[I];
      if (C && C.value != null && !C.ghost) return C;
    }
    return L[L.length - 1] ?? null;
  }, [h]), y = G.useMemo(() => {
    const L = h?.rowsRepresentative ?? h?.rows;
    if (!L || !Array.isArray(L) || L.length === 0) return null;
    const I = L[L.length - 1];
    return ni(
      I?.variationIcon,
      (I?.specialCauseNeitherValue ?? null) != null
    );
  }, [h]), g = G.useMemo(() => m?.mean ?? null, [m]), p = G.useMemo(() => {
    if (!m) return null;
    const L = m?.lowerProcessLimit ?? null, I = m?.upperProcessLimit ?? null;
    return L == null && I == null ? null : { lower: L, upper: I };
  }, [m]), b = G.useMemo(() => m ? {
    upperOne: m?.upperOneSigma ?? null,
    upperTwo: m?.upperTwoSigma ?? null,
    lowerOne: m?.lowerOneSigma ?? null,
    lowerTwo: m?.lowerTwoSigma ?? null
  } : null, [m]), $ = G.useMemo(() => {
    const L = h?.rows;
    if (!(!L || L.length === 0))
      return o ? L.map((I) => {
        const C = I?.variationIcon;
        return C === "improvement" ? "improvement" : C === "concern" ? "concern" : "neither";
      }) : L.map((I) => {
        const C = !!I?.specialCauseSinglePointUp || !!I?.specialCauseTwoOfThreeUp || !!I?.specialCauseFourOfFiveUp || !!I?.specialCauseShiftUp || !!I?.specialCauseTrendUp, v = !!I?.specialCauseSinglePointDown || !!I?.specialCauseTwoOfThreeDown || !!I?.specialCauseFourOfFiveDown || !!I?.specialCauseShiftDown || !!I?.specialCauseTrendDown;
        switch (s) {
          case De.Up:
            return C ? "improvement" : v ? "concern" : "neither";
          case De.Down:
            return v ? "improvement" : C ? "concern" : "neither";
          case De.Neither:
          default:
            return "neither";
        }
      });
  }, [h, s, o]), M = G.useMemo(() => {
    const L = h?.rows;
    if (!(!L || L.length === 0))
      return L.map((I) => !!I?.specialCauseNeitherValue);
  }, [h]), S = G.useMemo(() => {
    let L = null;
    if (m && m.value != null && !m.ghost) {
      const j = m.variationIcon, _ = (m?.specialCauseNeitherValue ?? null) != null;
      y === Ce.SpecialCauseNoJudgement ? L = Tm(j, _) ? Ce.SpecialCauseNoJudgement : Ce.CommonCause : L = ni(j, _) ?? Ce.CommonCause;
    }
    const I = L ?? Ce.CommonCause, C = ha[I].hex, [v, T, w] = $m(C), x = da();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${v}, ${T}, ${w}, ${x.start}) 0%, rgba(${v}, ${T}, ${w}, ${x.mid}) 50%, rgba(${v}, ${T}, ${w}, ${x.end}) 100%)`,
      "--fdp-metric-card-accent": C
    };
  }, [m, y]);
  return { sparkProps: G.useMemo(() => ({
    data: f,
    showMean: c,
    showLimits: i,
    showLimitBand: l,
    showInnerBands: u,
    metricImprovement: s,
    centerLine: g,
    controlLimits: p,
    sigmaBands: b,
    pointSignals: $,
    pointNeutralSpecialCause: M,
    variationState: y ?? void 0,
    autoClassify: !!(d && !y),
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
    y,
    g,
    p?.lower,
    p?.upper,
    b?.upperOne,
    b?.upperTwo,
    b?.lowerOne,
    b?.lowerTwo,
    $?.length,
    M?.length
  ]), metricCardStyle: S, latestState: y };
}
function ri(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function Mm(e, t, n) {
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
function Lm(e, t) {
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
function Pm(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const s = e.filter((l) => l != null);
  if (!s.length) return;
  const o = Math.min(...s), i = Math.max(...s);
  if (a === "0-1") {
    if (o >= 0 && i <= 1 && i > 0) return "%";
  } else if (o >= 0 && i <= 100 && i > 0) return "%";
}
function Fm(e, t, n = 1) {
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
  } = e, f = t.map((v) => typeof v == "number" ? v : v == null ? null : Number(v));
  let h = -1;
  for (let v = f.length - 1; v >= 0; v--)
    if (f[v] != null) {
      h = v;
      break;
    }
  let m = (n || []).map(ri);
  if (!m.some(Boolean)) {
    const v = ri(s);
    v && a ? m = Mm(f.length, v, a) : m = new Array(f.length).fill(void 0);
  }
  const g = Lm(m, a), p = Pm(f, o, i, e.percentHeuristic), b = l && h >= 0 && f[h] != null ? f[h] : void 0, $ = { strategy: "previous", n: 1, absolute: !0, skipNulls: !0, ...d || {} };
  function M() {
    if (h < 0) return -1;
    if ($.strategy === "previous" || $.strategy === "n-points") {
      let P = h - ($.strategy === "previous" ? 1 : Math.max(1, $.n || 1));
      if (!$.skipNulls) return P;
      for (let j = P; j >= 0; j--) if (f[j] != null) return j;
      return -1;
    }
    const v = m[h];
    if (!v) return -1;
    const T = new Date(v);
    T.setFullYear(T.getFullYear() - 1);
    let w = -1, x = 1 / 0;
    for (let P = 0; P < m.length; P++) {
      const j = m[P];
      if (!j || f[P] == null) continue;
      const _ = Math.abs(j.getTime() - T.getTime());
      _ < x && (x = _, w = P);
    }
    return w;
  }
  const S = M(), N = S >= 0 ? f[S] : null;
  let L;
  if (u && b != null && N != null) {
    const v = b - N, T = $.absolute !== !1, w = T ? v : N === 0 ? 0 : v / Math.abs(N) * 100;
    L = {
      value: Number.isFinite(w) ? Number(w.toFixed(2)) : 0,
      isPercent: T ? p === "%" : !0,
      period: `vs ${Fm(g, a, $.strategy === "n-points" ? Math.max(1, $.n || 1) : 1)}`
    };
  }
  const I = h >= 0 ? m[h] : void 0, C = c && ai(I, g) ? `Latest: ${ai(I, g)}` : void 0;
  return { value: b, unit: p, delta: L, metadata: C, latestDate: I, frequency: g };
}
const Py = ({
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
  intervalHint: m,
  startDate: y,
  deltaConfig: g,
  ...p
}) => {
  const b = Im({
    values: e.map((C) => C.value ?? null),
    metricImprovement: t,
    useSqlCompatEngine: n,
    showLimits: s,
    showLimitBand: o,
    showInnerBands: i,
    showMean: a,
    autoClassify: l
  }), $ = /* @__PURE__ */ r.jsx(jl, { ...b.sparkProps, maxPoints: u }), M = G.useMemo(() => Pl({
    values: e.map((C) => typeof C.value == "number" ? C.value : null),
    dates: e.map((C) => C.date),
    intervalHint: m,
    startDate: y,
    providedUnit: p.unit,
    defaultUnit: h,
    autoValue: c,
    autoDelta: d,
    autoMetadata: f,
    deltaConfig: g
  }), [e, m, y, p.unit, h, c, d, f, g]), S = c && M.value != null ? M.value : p.value, N = d && M.delta ? M.delta : p.delta, L = M.unit || p.unit, I = f && M.metadata ? M.metadata : p.metadata;
  return /* @__PURE__ */ r.jsx(
    nm,
    {
      ...p,
      value: S,
      unit: L,
      delta: N,
      metadata: I,
      visual: $,
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
  const u = Kt(), c = nn(), [d, f] = G.useState(null), [h, m] = G.useState(!1), y = G.useRef(null);
  G.useEffect(() => {
    if (u) {
      if (u.focused && (f(u.focused), y.current && (cancelAnimationFrame(y.current), y.current = null)), !u.focused && !h) {
        const E = requestAnimationFrame(() => {
          f(null), y.current = null;
        });
        y.current = E;
      }
      return () => {
        y.current && (cancelAnimationFrame(y.current), y.current = null);
      };
    }
  }, [u, u?.focused, h]);
  const g = u && (u.focused || (h ? d : null) || d), [p, b] = G.useState(!1);
  G.useEffect(() => {
    const E = requestAnimationFrame(() => b(!0));
    return () => cancelAnimationFrame(E);
  }, [g?.index]);
  const $ = c?.innerWidth ?? 0, M = c?.innerHeight ?? 0, S = g ? Math.min(Math.max(g.clientX, 0), $) : 0, N = g ? Math.min(Math.max(g.clientY, 0), M) : 0, I = c.ref?.current;
  if (!g)
    return null;
  const C = e?.[g.index], T = fa(C).map((E) => ({ id: E, label: $n[E].tooltip })), w = g.x instanceof Date ? g.x : new Date(g.x), x = o ? o(w) : w.toDateString(), P = s ? `${s}` : "", j = a || P ? `${g.y}${P ? "" + P : " "}${a ? " " + a : ""}` : `${g.y}`, _ = pa(C?.variationIcon), D = Sl(C?.assuranceIcon), A = sm(
    t.mean ?? null,
    t.sigma,
    g.y
  ), ne = n ? n(g.index, { x: g.x, y: g.y }) : void 0, V = _ || D || A, R = C?.specialCauseTrendUp || C?.specialCauseTrendDown, H = C?.variationIcon === Te.Neither && R, z = l && H ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, se = T.length > 0, U = C?.primeDirection, pe = C?.primeRuleId, ke = i && C?.variationIcon === Te.Neither && se, ce = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", ue = kl(C?.variationIcon), K = 6.2, fe = [
    ne || "",
    `${x} • ${j}`
  ].filter(Boolean).reduce(
    (E, O) => Math.max(E, O.length * K + 32),
    0
  ), k = 200, B = 440, W = Math.min(B, Math.max(k, fe));
  let te = S + 12, de = (c.margin?.top ?? 0) + N + 16;
  te + W > $ && (te = S - -60 - W), te < 0 && (te = Math.max(0, $ - W));
  const xe = g ? `spc-tooltip-${g.index}` : "spc-tooltip", _e = typeof g.index == "number" ? g.index : NaN, he = I ? zc(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: xe,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (p ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: te,
          top: de,
          width: W,
          maxWidth: B,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": p ? "false" : "true",
        "data-floating": !0,
        "data-placement": te + W + 12 > $ ? "left" : "right",
        onPointerEnter: () => {
          m(!0), y.current && (cancelAnimationFrame(y.current), y.current = null);
        },
        onPointerLeave: () => {
          if (m(!1), !u?.focused) {
            const E = requestAnimationFrame(() => {
              f(null), y.current = null;
            });
            y.current = E;
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
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: j })
          ] }),
          V && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: _?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              ze,
              {
                text: _,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : _?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              ze,
              {
                text: _,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : ke ? /* @__PURE__ */ r.jsx(
              ze,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : _ ? /* @__PURE__ */ r.jsx(
              ze,
              {
                text: _,
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
                ze,
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
              ze,
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
          z && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: z })
          ] }),
          se && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: T.map(({ id: E, label: O }) => {
                  const Y = String(E), F = Y === mt.TrendIncreasing || Y === mt.TrendDecreasing ? "fdp-spc-tag--trend" : ke ? "fdp-spc-tag--no-judgement" : _ ? _.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : _.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    ze,
                    {
                      text: O,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${F}`,
                      "data-rule-id": Y
                    },
                    Y
                  );
                })
              }
            ),
            U && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const E = ke ? "fdp-spc-tag--no-judgement" : _ ? _.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : _.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", O = `${U}${pe ? ` (${pe})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  ze,
                  {
                    text: O,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${E}`,
                    "aria-label": `Prime direction ${U}${pe ? ` via ${pe}` : ""}`
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
            cx: S,
            cy: N,
            r: 7,
            fill: "none",
            stroke: ce,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: S,
            cy: N,
            r: 5,
            fill: "#000",
            stroke: ce,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: S,
            cy: N,
            r: 2.5,
            fill: ue,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        he
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
  const c = hr(), d = hr(), { start: f, mid: h, end: m } = da(), y = s || im[e], g = (i || lm[e]).slice(0, 2), p = n || `Assurance ${e}`;
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
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: y, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: y, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(m) })
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
          e === tn.Fail ? /* @__PURE__ */ r.jsx(
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
ba.displayName = "SPCAssuranceIcon";
function Am(e, t = !0) {
  if (!e?.length) return [];
  const n = [...e];
  if (t) {
    let s = 0;
    for (; s < n.length; ) {
      const o = n[s];
      let i = s + 1;
      for (; i < n.length && n[i] === o; ) i++;
      i - s === 1 && o !== dt.Common && (n[s] = dt.Common), s = i;
    }
  }
  const a = [];
  if (n.length) {
    let s = 0;
    for (let o = 1; o <= n.length; o++)
      if (o === n.length || n[o] !== n[s]) {
        const i = n[s], l = o - 1, u = l - s + 1;
        (i === dt.Common || u >= 2) && a.push({ start: s, end: l, category: i }), s = o;
      }
  }
  return a;
}
const Em = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const s = Kt(), o = s?.focused ?? null, i = o?.index ?? null, l = typeof i == "number" && e ? e[i] : null, u = G.useMemo(() => l ? fa(l) : [], [l]), c = G.useMemo(
    () => Array.from(
      new Set(u.map((g) => $n[g]?.narration).filter(Boolean))
    ),
    [u]
  ), d = l ? pa(l.variationIcon) : null, f = l ? Sl(l.assuranceIcon) : null, h = u.length > 0, m = l ? l.variationIcon === Te.Neither && h : !1, y = G.useRef(null);
  return G.useEffect(() => {
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
                      ze,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : d?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      ze,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : m ? /* @__PURE__ */ r.jsx(
                      ze,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : d ? /* @__PURE__ */ r.jsx(
                      ze,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const g = f.toLowerCase(), b = !(g.includes("not met") || g.includes("not achieved")) && /^|\b(met|achieved)\b|$/.test(g);
                      return /* @__PURE__ */ r.jsx(
                        ze,
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
                children: u.length === 0 ? /* @__PURE__ */ r.jsx("span", { children: " None" }) : u.map((g) => {
                  const p = String(g), $ = p === mt.TrendIncreasing || p === mt.TrendDecreasing ? "fdp-spc-tag--trend" : m ? "fdp-spc-tag--no-judgement" : d ? d.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : d.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", M = $n[g]?.tooltip || p;
                  return /* @__PURE__ */ r.jsx(
                    ze,
                    {
                      text: M,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${$}`,
                      "data-rule-id": p,
                      title: $n[g]?.tooltip
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
var Al = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Al || {}), Be = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Be || {}), st = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(st || {}), qe = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(qe || {}), dn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(dn || {}), on = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(on || {}), Vn = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(Vn || {}), Nn = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(Nn || {}), ut = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(ut || {}), Lt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Lt || {});
const Qt = {
  [qe.SinglePoint]: 1,
  [qe.TwoSigma]: 2,
  [qe.Shift]: 3,
  [qe.Trend]: 4
}, si = 3.267, Rm = 2.66;
function He(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Lr(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function Bm(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (!(t[s] || !He(o))) {
      if (a !== null) {
        const i = e[a];
        He(i) && (n[s] = Math.abs(o - i));
      }
      a = s;
    }
  }
  return n;
}
function Hm(e, t) {
  const n = e.filter(He);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const o = Lr(a), i = si * o;
    a = a.filter((l) => l <= i);
  }
  const s = Lr(a);
  return { mrMean: s, mrUcl: si * s };
}
function Um(e, t) {
  if (!He(e) || !He(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = Rm * t, a = 2 / 3 * n, s = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + s,
    lowerOneSigma: e - s
  };
}
function Om(e, t, n, a) {
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
  const s = Bm(t, n), o = s.filter(He), i = o.length ? Lr(o) : NaN, l = He(i) ? 3.267 * i : NaN;
  let u = NaN;
  {
    const f = [];
    for (let h = 0; h < t.length; h++) {
      const m = t[h];
      if (n[h] || !He(m)) continue;
      if (!a) {
        f.push(m);
        continue;
      }
      const y = s[h];
      (y === null || !He(l) || He(y) && y <= l) && f.push(m);
    }
    u = f.length ? Lr(f) : NaN;
  }
  const c = Hm(s, a), d = Um(u, c.mrMean);
  return {
    mean: u,
    mr: s,
    mrMean: c.mrMean,
    mrUcl: c.mrUcl,
    ...d
  };
}
function Wm(e, t) {
  const n = e.map((u, c) => c).filter((u) => !e[u].ghost && He(e[u].value)), a = (u) => e[u], s = t.shiftPoints, o = t.trendPoints;
  let i = [], l = [];
  for (const u of n) {
    const c = a(u);
    if (!He(c.mean) || !He(c.value)) {
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
    if (!d.every((S) => He(S.value) && He(S.mean))) continue;
    const f = d[0].mean, h = d.every((S) => S.value > f), m = d.every((S) => S.value < f);
    if (!h && !m) continue;
    const y = d[0].upperTwoSigma ?? 1 / 0, g = d[0].lowerTwoSigma ?? -1 / 0, p = d[0].upperProcessLimit ?? 1 / 0, b = d[0].lowerProcessLimit ?? -1 / 0, $ = d.filter((S) => t.twoSigmaIncludeAboveThree ? S.value > y : S.value > y && S.value <= p), M = d.filter((S) => t.twoSigmaIncludeAboveThree ? S.value < g : S.value < g && S.value >= b);
    h && $.length >= 2 && $.forEach((S) => S.twoSigmaUp = !0), m && M.length >= 2 && M.forEach((S) => S.twoSigmaDown = !0);
  }
  for (let u = 0; u <= n.length - o; u++) {
    const c = n.slice(u, u + o), d = c.map(a);
    if (!d.every((m) => He(m.value))) continue;
    let f = !0, h = !0;
    for (let m = 1; m < d.length && (d[m].value > d[m - 1].value || (f = !1), d[m].value < d[m - 1].value || (h = !1), !(!f && !h)); m++)
      ;
    f && c.forEach((m) => a(m).trendUp = !0), h && c.forEach((m) => a(m).trendDown = !0);
  }
}
function El(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: qe.SinglePoint,
    rank: Qt[qe.SinglePoint]
  }), e.singlePointDown && n.push({
    id: qe.SinglePoint,
    rank: Qt[qe.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: qe.TwoSigma,
    rank: Qt[qe.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: qe.TwoSigma,
    rank: Qt[qe.TwoSigma]
  }), e.shiftUp && t.push({ id: qe.Shift, rank: Qt[qe.Shift] }), e.shiftDown && n.push({ id: qe.Shift, rank: Qt[qe.Shift] }), e.trendUp && t.push({ id: qe.Trend, rank: Qt[qe.Trend] }), e.trendDown && n.push({ id: qe.Trend, rank: Qt[qe.Trend] });
  const a = t.reduce((i, l) => Math.max(i, l.rank), 0), s = n.reduce((i, l) => Math.max(i, l.rank), 0), o = a > s ? dn.Upwards : s > a ? dn.Downwards : dn.Same;
  return { up: t, dn: n, upMax: a, dnMax: s, primeDirection: o };
}
function oi(e, t) {
  const n = t === Be.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Be.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === Be.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Be.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function ii(e, t, n, a = !1, s, o, i = !1) {
  const { up: l, dn: u, upMax: c, dnMax: d, primeDirection: f } = El(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, m = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && zm({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: s, ruleHierarchy: o }), t === Be.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? st.ImprovementHigh : e.specialCauseConcernValue !== null ? st.ConcernLow : st.CommonCause : t === Be.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? st.ImprovementLow : e.specialCauseConcernValue !== null ? st.ConcernHigh : st.CommonCause : e.variationIcon = st.CommonCause;
  const y = e.specialCauseImprovementValue !== null ? on.Up : e.specialCauseConcernValue !== null ? on.Down : void 0, g = y === on.Up ? c : y === on.Down ? d : Math.max(c, d);
  e.primeRank = g || void 0;
  const p = y === on.Up ? l.find((b) => b.rank === g) : y === on.Down ? u.find((b) => b.rank === g) : void 0;
  return e.primeRuleId = p?.id, { originalImprovement: h, originalConcern: m };
}
function zm(e) {
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
    if (n === Be.Up) {
      if (d && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!d && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (n === Be.Down) {
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
  const c = s ? Nn.PreferImprovement : l ?? Nn.SqlPrimeThenRule;
  if (c === Nn.PreferImprovement) {
    n === Be.Up ? t.specialCauseConcernValue = null : n === Be.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (c === Nn.RuleHierarchy) {
    const d = u ?? [qe.Trend, qe.Shift, qe.TwoSigma, qe.SinglePoint], { up: f, dn: h } = El(t);
    for (const m of d) {
      const y = f.some((p) => p.id === m), g = h.some((p) => p.id === m);
      if (y && !g) {
        n === Be.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (g && !y) {
        n === Be.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (y && g) {
        (n === Be.Up || n === Be.Down) && (a === Vn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === dn.Upwards ? n === Be.Up ? t.specialCauseConcernValue = null : n === Be.Down && (t.specialCauseImprovementValue = null) : i === dn.Downwards ? n === Be.Up ? t.specialCauseImprovementValue = null : n === Be.Down && (t.specialCauseConcernValue = null) : a === Vn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
function Vm(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Gm(e) {
  const t = Vm(e);
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
      const y = e[i];
      if (!y || y.value == null || y.ghost || !(s === "Up" ? y.trendUp : y.trendDown)) break;
    }
    const l = i - 1, u = [];
    let c, d, f = 1 / 0, h = -1 / 0, m = 0;
    for (let y = o; y <= l; y++) {
      const g = e[y];
      if (g.value == null) continue;
      const p = g.value - (g.mean ?? 0), b = Gm(p);
      if (!b) {
        c !== void 0 && (u.push({
          trendDirection: s,
          start: c,
          end: y - 1,
          side: d,
          minValue: f,
          maxValue: h,
          maxAbsDeltaFromMean: m
        }), c = void 0, d = void 0, f = 1 / 0, h = -1 / 0, m = 0);
        continue;
      }
      if (c === void 0)
        c = y, d = b, f = g.value, h = g.value, m = Math.abs(p);
      else if (b !== d)
        u.push({
          trendDirection: s,
          start: c,
          end: y - 1,
          side: d,
          minValue: f,
          maxValue: h,
          maxAbsDeltaFromMean: m
        }), c = y, d = b, f = g.value, h = g.value, m = Math.abs(p);
      else {
        g.value < f && (f = g.value), g.value > h && (h = g.value);
        const $ = Math.abs(p);
        $ > m && (m = $);
      }
    }
    c !== void 0 && u.push({
      trendDirection: s,
      start: c,
      end: l,
      side: d,
      minValue: f,
      maxValue: h,
      maxAbsDeltaFromMean: m
    }), t.push({ trendDirection: s, start: o, end: l, segments: u }), n = l + 1;
  }
  return t;
}
function Ym(e) {
  if (e === Be.Up) return "Above";
  if (e === Be.Down) return "Below";
}
function qm(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function ci(e, t) {
  const n = t.strategy ?? ut.CrossingAfterFavourable, a = Ym(t.metricImprovement), s = qm(a), o = [];
  for (const i of e) {
    if (!a) {
      if (n === ut.ExtremeFavourable || n === ut.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let u = l[0];
        for (const c of l)
          c.maxAbsDeltaFromMean > u.maxAbsDeltaFromMean && (u = c);
        o.push(u);
      }
      continue;
    }
    if (n === ut.FavourableSide) {
      o.push(...i.segments.filter((l) => l.side === a));
      continue;
    }
    if (n === ut.UnfavourableSide) {
      o.push(...i.segments.filter((l) => l.side === s));
      continue;
    }
    if (n === ut.CrossingAfterFavourable) {
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
    if (n === ut.CrossingAfterUnfavourable) {
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
    if (n === ut.ExtremeFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      const u = l.reduce(
        (c, d) => d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean ? d : c
      );
      o.push(u);
      continue;
    }
    if (n === ut.ExtremeUnfavourable) {
      const l = i.segments.filter((c) => c.side === s);
      if (l.length === 0) continue;
      const u = l.reduce((c, d) => d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean ? d : c);
      o.push(u);
      continue;
    }
    if (n === ut.FirstFavourable) {
      const l = i.segments.find((u) => u.side === a);
      l && o.push(l);
      continue;
    }
    if (n === ut.FirstUnfavourable) {
      const l = i.segments.find((u) => u.side === s);
      l && o.push(l);
      continue;
    }
    if (n === ut.LongestFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      const u = l.reduce(
        (c, d) => d.end - d.start > c.end - c.start ? d : c
      );
      o.push(u);
      continue;
    }
    if (n === ut.LongestUnfavourable) {
      const l = i.segments.filter((c) => c.side === s);
      if (l.length === 0) continue;
      const u = l.reduce((c, d) => d.end - d.start > c.end - c.start ? d : c);
      o.push(u);
      continue;
    }
    if (n === ut.LastFavourable) {
      const l = i.segments.filter((u) => u.side === a);
      if (l.length === 0) continue;
      o.push(l[l.length - 1]);
      continue;
    }
    if (n === ut.LastUnfavourable) {
      const l = i.segments.filter((u) => u.side === s);
      if (l.length === 0) continue;
      o.push(l[l.length - 1]);
      continue;
    }
  }
  return o;
}
var pt = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(pt || {});
function Xm(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function Rl(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", s = t.enableNeutralNoJudgement ?? !0;
  return e.map((o) => {
    if (!o || o.value == null || o.ghost) return "Common";
    const { upAny: i, downAny: l } = Xm(o);
    if (i && l) return "Improvement";
    switch (o.variationIcon) {
      case st.ImprovementHigh:
      case st.ImprovementLow:
        return "Improvement";
      case st.ConcernHigh:
      case st.ConcernLow:
        return "Concern";
      case st.NeitherHigh:
      case st.NeitherLow: {
        if (a === "Ungated" && n !== Be.Neither) {
          if (i && !l)
            return n === Be.Up ? "Improvement" : "Concern";
          if (l && !i)
            return n === Be.Down ? "Improvement" : "Concern";
        }
        return s ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function Km(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let s = Rl(e, {
    metricImprovement: t,
    trendVisualMode: "Ungated",
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === Be.Neither) return s;
  const o = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", u = (f, h) => {
    if (f < 0 || f >= s.length) return;
    const m = s[f];
    (m === pt.Common || m === pt.NoJudgement) && (s[f] = h);
  }, c = (f) => {
    if (f == null) return null;
    const h = [];
    for (const y of e)
      y.partitionId === f && typeof y.value == "number" && !y.ghost && h.push(y.value);
    return h.length ? h.reduce((y, g) => y + g, 0) / h.length : null;
  }, d = Array.isArray(n?.boundaryIndices) && n.boundaryIndices.length ? n.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : (() => {
    const f = [];
    for (let h = 1; h < e.length; h++) {
      const m = e[h - 1], y = e[h];
      !m || !y || y.partitionId !== m.partitionId && f.push(h);
    }
    return f;
  })();
  for (const f of d) {
    const h = e[f - 1], m = e[f];
    if (!h || !m) continue;
    let y = null;
    for (let S = f - 1; S >= 0; S--) {
      const N = e[S];
      if (N.partitionId !== h.partitionId) break;
      if (typeof N.mean == "number") {
        y = N.mean;
        break;
      }
    }
    let g = null;
    for (let S = f; S < e.length; S++) {
      const N = e[S];
      if (N.partitionId !== m.partitionId) break;
      if (typeof N.mean == "number") {
        g = N.mean;
        break;
      }
    }
    if (y == null && (y = c(h.partitionId ?? null)), g == null && (g = c(m.partitionId ?? null)), y == null || g == null) continue;
    const p = g - y, b = t === Be.Up ? p > 0 : p < 0, $ = b ? pt.Improvement : pt.Concern, M = l === "Same" ? $ : b ? pt.Concern : pt.Improvement;
    for (let S = 1; S <= o; S++) u(f - S, M);
    for (let S = 0; S < i; S++) u(f + S, $);
  }
  return s;
}
function Jm(e) {
  const { chartType: t, metricImprovement: n, data: a, settings: s } = e, o = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: Vn.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: Nn.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: Lt.Off,
    trendSegmentationStrategy: ut.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...s
  }, i = e.settings?.trendSegmentationMode ?? (e.settings?.trendFavourableSegmentation === !0 ? Lt.Always : e.settings?.trendFavourableSegmentation === !1 ? Lt.Off : o.trendSegmentationMode), l = a.map((g, p) => ({
    rowId: p + 1,
    x: g.x,
    value: He(g.value) ? g.value : null,
    ghost: !!g.ghost,
    baseline: !!g.baseline,
    target: He(g.target) ? g.target : null
  })), u = [];
  let c = [];
  for (const g of l)
    g.baseline && c.length && (u.push(c), c = []), c.push(g);
  c.length && u.push(c);
  const d = [], f = (o.trendFavourableSegmentation || i !== Lt.Off) && !o.preferImprovementWhenConflict, h = l.filter((g) => !g.ghost && He(g.value)).length, m = !!o.chartLevelEligibility && h >= o.minimumPoints;
  let y = 0;
  for (const g of u) {
    y++;
    const p = g.map((N) => N.value), b = g.map((N) => N.ghost), $ = Om(
      t,
      p,
      b,
      !!o.excludeMovingRangeOutliers
    ), M = g.map((N, L) => {
      const I = !N.ghost && He(N.value) ? p.slice(0, L + 1).filter((v, T) => !b[T] && He(v)).length : 0, C = m ? !0 : I >= o.minimumPoints;
      return {
        rowId: N.rowId,
        x: N.x,
        value: He(N.value) ? N.value : null,
        ghost: N.ghost,
        partitionId: y,
        pointRank: I,
        mean: (C || m) && He($.mean) ? $.mean : null,
        upperProcessLimit: C || m ? $.upperProcessLimit : null,
        lowerProcessLimit: C || m ? $.lowerProcessLimit : null,
        upperTwoSigma: C || m ? $.upperTwoSigma : null,
        lowerTwoSigma: C || m ? $.lowerTwoSigma : null,
        upperOneSigma: C || m ? $.upperOneSigma : null,
        lowerOneSigma: C || m ? $.lowerOneSigma : null,
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
        variationIcon: st.CommonCause
      };
    });
    for (const N of M)
      N.ghost || !He(N.value) || N.mean === null || (He(N.upperProcessLimit) && N.value > N.upperProcessLimit && (N.singlePointUp = !0), He(N.lowerProcessLimit) && N.value < N.lowerProcessLimit && (N.singlePointDown = !0));
    Wm(M, {
      shiftPoints: o.shiftPoints,
      trendPoints: o.trendPoints,
      twoSigmaIncludeAboveThree: !!o.twoSigmaIncludeAboveThree
    }), f && ((N) => {
      const L = N.some(
        (w) => (w.singlePointUp || w.twoSigmaUp || w.shiftUp || w.trendUp) && (w.singlePointDown || w.twoSigmaDown || w.shiftDown || w.trendDown)
      );
      if (i === Lt.Off || i === Lt.AutoWhenConflict && !L)
        return;
      const I = li(N), C = ci(I, {
        metricImprovement: n,
        strategy: o.trendSegmentationStrategy
      }), v = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
      for (const w of C)
        for (let x = w.start; x <= w.end; x++)
          w.trendDirection === "Up" ? v.add(x) : T.add(x);
      N.forEach((w, x) => {
        w.trendUp = v.has(x) ? w.trendUp : !1, w.trendDown = T.has(x) ? w.trendDown : !1, o.trendDominatesHighlightedWindow && (v.has(x) ? (w.singlePointDown = !1, w.twoSigmaDown = !1, w.shiftDown = !1) : T.has(x) && (w.singlePointUp = !1, w.twoSigmaUp = !1, w.shiftUp = !1));
      });
    })(M);
    for (const N of M) {
      if (N.ghost || !He(N.value) || N.mean === null) {
        d.push(N);
        continue;
      }
      const { aligned: L, opposite: I } = oi(
        N,
        n
      );
      if (N.specialCauseImprovementValue = L ? N.value : null, N.specialCauseConcernValue = I ? N.value : null, n === Be.Neither) {
        const C = N.singlePointUp || N.twoSigmaUp || N.shiftUp || N.trendUp, v = N.singlePointDown || N.twoSigmaDown || N.shiftDown || N.trendDown;
        N.variationIcon = C ? st.NeitherHigh : v ? st.NeitherLow : st.CommonCause;
      } else
        ii(N, n, o.metricConflictRule, o.preferImprovementWhenConflict === !0, o.conflictStrategy, o.ruleHierarchy, o.preferTrendWhenConflict === !0);
      d.push(N);
    }
  }
  if (o.trendAcrossPartitions) {
    const g = d.map((p, b) => ({ idx: b, r: p })).filter(({ r: p }) => !p.ghost && He(p.value));
    if (g.length >= o.trendPoints)
      for (let p = 0; p <= g.length - o.trendPoints; p++) {
        const b = g.slice(p, p + o.trendPoints).map((N) => N.idx), $ = b.map((N) => d[N]);
        if (!$.every((N) => He(N.value))) continue;
        let M = !0, S = !0;
        for (let N = 1; N < $.length && ($[N].value > $[N - 1].value || (M = !1), $[N].value < $[N - 1].value || (S = !1), !(!M && !S)); N++)
          ;
        M && b.forEach((N) => d[N].trendUp = !0), S && b.forEach((N) => d[N].trendDown = !0);
      }
  }
  if (o.trendAcrossPartitions) {
    if (f) {
      const g = d.some(
        (p) => (p.singlePointUp || p.twoSigmaUp || p.shiftUp || p.trendUp) && (p.singlePointDown || p.twoSigmaDown || p.shiftDown || p.trendDown)
      );
      if (i === Lt.Always || i === Lt.AutoWhenConflict && g) {
        const p = li(d), b = ci(p, { metricImprovement: n, strategy: o.trendSegmentationStrategy }), $ = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
        for (const S of b)
          for (let N = S.start; N <= S.end; N++)
            S.trendDirection === "Up" ? $.add(N) : M.add(N);
        d.forEach((S, N) => {
          S.trendUp = $.has(N) ? S.trendUp : !1, S.trendDown = M.has(N) ? S.trendDown : !1, o.trendDominatesHighlightedWindow && ($.has(N) ? (S.singlePointDown = !1, S.twoSigmaDown = !1, S.shiftDown = !1) : M.has(N) && (S.singlePointUp = !1, S.twoSigmaUp = !1, S.shiftUp = !1));
        });
      }
    }
    for (const g of d) {
      if (g.ghost || !He(g.value) || g.mean === null || n === Be.Neither) continue;
      const { aligned: p, opposite: b } = oi(g, n);
      g.specialCauseImprovementValue = p ? g.value : null, g.specialCauseConcernValue = b ? g.value : null, ii(g, n, o.metricConflictRule, o.preferImprovementWhenConflict === !0, o.conflictStrategy, o.ruleHierarchy, o.preferTrendWhenConflict === !0);
    }
  }
  return { rows: d };
}
function Zm(e, t) {
  const n = Jm(e), a = Rl(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), s = t?.boundaryWindows;
  if (!s || s.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const o = s.directionOverride ?? e.metricImprovement, i = Km(n.rows, o, s), l = a.map((u, c) => {
    const d = i[c];
    if (u === pt.Common || u === pt.NoJudgement) {
      if (d === pt.Improvement) return pt.Improvement;
      if (d === pt.Concern) return pt.Concern;
    }
    return u;
  });
  return { rows: n.rows, visuals: l };
}
var Bl = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(Bl || {});
function Qm(e, t, n) {
  const a = n?.trendVisualMode, s = n?.enableNeutralNoJudgement ?? !0, o = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
  let i;
  switch (t) {
    case "recalc-crossing-shift": {
      i = {
        mode: "RecalcCrossing",
        preWindow: 2,
        postWindow: 4,
        prePolarity: "Same",
        directionOverride: Be.Down,
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
        directionOverride: Be.Up,
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
        directionOverride: Be.Down,
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
  const { rows: l, visuals: u } = Zm(e, {
    trendVisualMode: a,
    enableNeutralNoJudgement: s,
    boundaryWindows: i
  });
  let c = u.slice(), d = o.length ? o[0] : -1;
  if (d < 0) {
    for (let f = 1; f < l.length; f++)
      if (l[f].partitionId !== l[f - 1].partitionId) {
        d = f;
        break;
      }
  }
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && d > 0 && (c[d - 1] = pt.Common), { rows: l, visuals: c };
}
let eg = 0;
const tg = ({
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
  showEmbeddedIcon: m = !0,
  embeddedIconVariant: y = un.Classic,
  embeddedIconRunLength: g,
  targets: p,
  baselines: b,
  ghosts: $,
  settings: M,
  narrationContext: S,
  gradientSequences: N = !1,
  sequenceTransition: L = "slope",
  processLineWidth: I = 2,
  showWarningsPanel: C = !1,
  warningsFilter: v,
  enableNeutralNoJudgement: T = !0,
  showTrendGatingExplanation: w = !0,
  trendVisualMode: x = "ungated",
  disableTrendSideGating: P,
  source: j,
  alwaysShowZeroY: _ = !0,
  alwaysShowHundredY: D = !1,
  percentScale: A = !1,
  useSqlCompatEngine: ne = !0,
  showTrendStartMarkers: V = !1,
  showFirstFavourableCrossMarkers: R = !1,
  showTrendBridgeOverlay: H = !1,
  showSignalsInspector: z = !1,
  onSignalFocus: se,
  visualsScenario: U = Bl.None
}) => {
  const pe = G.useCallback(
    (ae) => String(ae).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((ge) => ge.length ? ge[0].toUpperCase() + ge.slice(1) : ge).join(" "),
    []
  ), ke = G.useCallback(
    (ae) => String(ae).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((ie) => ie.length ? ie[0].toUpperCase() + ie.slice(1) : ie).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && P !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const ce = G.useMemo(() => e.map((ae, ie) => ({
    x: ae.x,
    value: ae.y,
    target: p?.[ie] ?? void 0,
    baseline: b?.[ie] ?? void 0,
    ghost: $?.[ie] ?? void 0
  })), [e, p, b, $]), ue = G.useMemo(() => {
    try {
      const ae = M ? { ...M } : void 0;
      return ne ? Ll({
        chartType: c,
        metricImprovement: d,
        data: ce,
        settings: ae
      }) : xa({ chartType: c, metricImprovement: d, data: ce, settings: ae });
    } catch {
      return null;
    }
  }, [ce, c, d, M, ne]), K = G.useMemo(() => {
    try {
      const ae = M?.minimumPointsPartition ?? M?.minimumPoints, ie = {};
      typeof ae == "number" && !isNaN(ae) && (ie.minimumPoints = ae, ce.filter((Le) => !Le.ghost && typeof Le.value == "number").length >= ae && (ie.chartLevelEligibility = !0)), M?.twoSigmaIncludeAboveThree != null && (ie.twoSigmaIncludeAboveThree = !!M.twoSigmaIncludeAboveThree);
      const ge = {
        chartType: c ?? "XmR",
        metricImprovement: d ?? "Neither",
        data: ce,
        settings: Object.keys(ie).length ? ie : void 0
      }, we = U, { visuals: le } = Qm(ge, we, {
        trendVisualMode: x === "ungated" ? "Ungated" : "Gated",
        enableNeutralNoJudgement: T
      });
      return le || [];
    } catch {
      return [];
    }
  }, [ce, c, d, x, T, M, U]), re = ue?.rows.slice().reverse().find((ae) => ae.mean != null), fe = re?.mean ?? null, k = ue?.warnings || [], B = G.useMemo(() => k.length ? v ? k.filter((ae) => !(v.severities && ae.severity && !v.severities.includes(ae.severity) || v.categories && ae.category && !v.categories.includes(ae.category) || v.codes && !v.codes.includes(ae.code))) : k : [], [k, v]), [W, te] = G.useState(""), Z = G.useRef("");
  G.useEffect(() => {
    if (!C) {
      Z.current !== "" && (Z.current = "", te(""));
      return;
    }
    const ae = B.length;
    if (!ae) {
      const le = "Diagnostics: no warnings.";
      le !== Z.current && (Z.current = le, te(le));
      return;
    }
    const ie = {
      error: B.filter(
        (le) => le.severity === en.Error
      ).length,
      warning: B.filter(
        (le) => le.severity === en.Warning
      ).length,
      info: B.filter(
        (le) => le.severity === en.Info
      ).length
    }, ge = [];
    ie.error && ge.push(
      `${ie.error} error${ie.error === 1 ? "" : "s"}`
    ), ie.warning && ge.push(
      `${ie.warning} warning${ie.warning === 1 ? "" : "s"}`
    ), ie.info && ge.push(`${ie.info} info`);
    const we = `Diagnostics updated: ${ae} warning${ae === 1 ? "" : "s"} (${ge.join(", ")}).`;
    we !== Z.current && (Z.current = we, te(we));
  }, [C, B]);
  const de = re?.upperProcessLimit ?? null, xe = re?.lowerProcessLimit ?? null, _e = re?.upperOneSigma ?? null, he = re?.lowerOneSigma ?? null, E = re?.upperTwoSigma ?? null, O = re?.lowerTwoSigma ?? null, Y = fe != null && _e != null ? Math.abs(_e - fe) : 0, J = G.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), F = G.useMemo(() => {
    if (A) {
      const le = e.map((Ge) => Ge.y), Ie = Math.max(100, ...le), Le = Math.min(0, ...le);
      return [Le < 0 ? Le : 0, Ie > 100 ? Ie : 100];
    }
    const ie = [...e.map((le) => le.y)];
    if ([fe, de, xe, _e, he, E, O].forEach((le) => {
      le != null && ie.push(le);
    }), p && p.forEach((le) => {
      typeof le == "number" && !isNaN(le) && ie.push(le);
    }), !ie.length) return;
    let ge = Math.min(...ie), we = Math.max(...ie);
    return _ && (ge = Math.min(0, ge)), D && (we = Math.max(100, we)), [ge, we];
  }, [e, fe, de, xe, _e, he, E, O, p, _, D, A]), X = G.useMemo(() => {
    const ae = e.map((ie) => ie.x instanceof Date || typeof ie.x == "string" || typeof ie.x == "number" ? ie.x : void 0);
    return Pl({
      values: e.map((ie) => ie.y),
      dates: ae,
      providedUnit: l || S?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [e, l, S?.measureUnit]), Q = l ?? S?.measureUnit ?? X.unit, ee = G.useMemo(() => Q ? { ...S || {}, measureUnit: Q } : S, [S, Q]), q = G.useMemo(() => {
    if (!ue?.rows) return [];
    const ae = [];
    for (let ie = 1; ie < ue.rows.length; ie++)
      ue.rows[ie].partitionId !== ue.rows[ie - 1].partitionId && ae.push(ie);
    return ae;
  }, [ue?.rows]), oe = G.useMemo(() => {
    if (!m || !ue?.rows?.length) return null;
    const ae = ue.rows, ie = M?.minimumPoints ?? 13;
    if (ae.filter(
      (Ee) => !Ee.ghost && Ee.value != null
    ).length < ie) return null;
    let we = -1;
    for (let Ee = ae.length - 1; Ee >= 0; Ee--) {
      const Oe = ae[Ee];
      if (Oe && Oe.value != null && !Oe.ghost) {
        we = Ee;
        break;
      }
    }
    if (we === -1) return null;
    const le = ae[we], Ie = le.variationIcon, Le = Ie, Ge = le.assuranceIcon, Ue = Le === Te.Neither && !!le.specialCauseNeitherValue, it = Ge === et.Pass ? tn.Pass : Ge === et.Fail ? tn.Fail : tn.Uncertain;
    let Ze;
    if (Le === Te.Suppressed) {
      const Ee = le.specialCauseSinglePointUp, Oe = le.specialCauseSinglePointDown;
      d === De.Up ? Ee ? Ze = je.Higher : Oe && (Ze = je.Lower) : d === De.Down ? Oe ? Ze = je.Lower : Ee && (Ze = je.Higher) : Ze = je.Higher;
    } else if (Le === Te.Neither && Ue) {
      const Ee = le.specialCauseSinglePointUp || le.specialCauseTwoOfThreeUp || le.specialCauseFourOfFiveUp || le.specialCauseShiftUp || le.specialCauseTrendUp, Oe = le.specialCauseSinglePointDown || le.specialCauseTwoOfThreeDown || le.specialCauseFourOfFiveDown || le.specialCauseShiftDown || le.specialCauseTrendDown;
      Ee && !Oe ? Ze = je.Higher : Oe && !Ee ? Ze = je.Lower : Ze = je.Higher;
    }
    let gt;
    d === De.Up ? gt = Je.HigherIsBetter : d === De.Down ? gt = Je.LowerIsBetter : gt = Je.ContextDependent;
    const lt = 80;
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(Le),
              "data-trend-raw": Ze ? String(Ze) : "none",
              "data-trend": Ze ? String(Ze) : "none",
              "data-polarity": String(gt ?? "unknown"),
              style: { width: lt, height: lt },
              children: /* @__PURE__ */ r.jsx(
                ga,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: Ie,
                    improvementDirection: d,
                    polarity: gt,
                    specialCauseNeutral: Ue,
                    highSideSignal: le.specialCauseSinglePointUp || le.specialCauseTwoOfThreeUp || le.specialCauseFourOfFiveUp || le.specialCauseShiftUp || le.specialCauseTrendUp,
                    lowSideSignal: le.specialCauseSinglePointDown || le.specialCauseTwoOfThreeDown || le.specialCauseFourOfFiveDown || le.specialCauseShiftDown || le.specialCauseTrendDown,
                    ...Ze ? { trend: Ze } : {}
                  },
                  letterMode: d === De.Neither ? er.Direction : er.Polarity,
                  size: lt,
                  variant: y,
                  runLength: y === un.TriangleWithRun ? g : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(Ge),
              style: { width: lt, height: lt },
              children: /* @__PURE__ */ r.jsx(
                ba,
                {
                  status: it,
                  size: lt,
                  dropShadow: !1
                }
              )
            }
          )
        ]
      },
      `embedded-icon-${we}`
    );
  }, [
    m,
    ue?.rows,
    d,
    M?.minimumPoints,
    p,
    y,
    g
  ]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper",
      children: [
        m && /* @__PURE__ */ r.jsx(
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
        /* @__PURE__ */ r.jsx(
          mh,
          {
            height: n,
            ariaLabel: t,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ r.jsx(gh, { series: J, yDomain: F, children: /* @__PURE__ */ r.jsx(
              ng,
              {
                series: J,
                showPoints: s,
                announceFocus: o,
                limits: { mean: fe, ucl: de, lcl: xe, sigma: Y, onePos: _e, oneNeg: he, twoPos: E, twoNeg: O },
                showZones: a,
                highlightOutOfControl: u,
                engineRows: ue?.rows || null,
                visualCategories: K,
                enableRules: f,
                showIcons: h,
                narrationContext: ee,
                gradientSequences: N,
                sequenceTransition: L,
                processLineWidth: I,
                effectiveUnit: Q,
                partitionMarkers: q,
                ariaLabel: t,
                enableNeutralNoJudgement: T,
                showTrendGatingExplanation: w,
                metricImprovement: d,
                showTrendStartMarkers: V,
                showFirstFavourableCrossMarkers: R,
                showTrendBridgeOverlay: H,
                showSignalsInspector: z,
                onSignalFocus: se
              }
            ) })
          }
        ),
        j && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof j == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          j
        ] }) : j }),
        C && W && /* @__PURE__ */ r.jsx(
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
            children: W
          }
        ),
        C && B.length > 0 && /* @__PURE__ */ r.jsxs(
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
                  rows: B.map((ae) => {
                    let ie = "grey";
                    return ae.severity === en.Error ? ie = "red" : ae.severity === en.Warning ? ie = "orange" : ae.severity === en.Info && (ie = "blue"), [
                      {
                        node: /* @__PURE__ */ r.jsx(
                          ze,
                          {
                            color: ie,
                            text: (ae.severity ? String(ae.severity) : "Info").replace(
                              /^[a-z]/,
                              (ge) => ge.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: ae.category ? /* @__PURE__ */ r.jsx(
                          ze,
                          {
                            color: "purple",
                            text: ke(ae.category)
                          }
                        ) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ r.jsx(ze, { color: "grey", text: pe(ae.code) }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
                      },
                      {
                        node: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                          /* @__PURE__ */ r.jsx("span", { children: ae.message }),
                          ae.context && Object.keys(ae.context).length > 0 && /* @__PURE__ */ r.jsxs(
                            "details",
                            {
                              className: "fdp-spc-chart__warning-context",
                              style: { marginTop: 4 },
                              children: [
                                /* @__PURE__ */ r.jsx("summary", { children: "context" }),
                                /* @__PURE__ */ r.jsx("pre", { children: JSON.stringify(ae.context, null, 2) })
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
}, ng = ({
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
  effectiveUnit: m,
  partitionMarkers: y,
  ariaLabel: g,
  metricImprovement: p,
  enableNeutralNoJudgement: b = !0,
  showTrendGatingExplanation: $ = !0,
  showTrendStartMarkers: M = !1,
  showFirstFavourableCrossMarkers: S = !1,
  showTrendBridgeOverlay: N = !1,
  showSignalsInspector: L = !1,
  onSignalFocus: I,
  visualCategories: C
}) => {
  const v = bn(), T = nn();
  if (!v) return null;
  const { xScale: w, yScale: x } = v, P = G.useRef(
    "spc-seq-" + ++eg
  ), j = Kt(), _ = e[0]?.data || [], D = G.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const k = /* @__PURE__ */ new Set();
    return _.forEach((B, W) => {
      typeof a.ucl == "number" && B.y > a.ucl && k.add(W), typeof a.lcl == "number" && B.y < a.lcl && k.add(W);
    }), k;
  }, [a.ucl, a.lcl, _]), A = G.useMemo(() => {
    if (!i || !i.length) return null;
    const k = [];
    return i.forEach((B, W) => {
      const te = !!(B.variationIcon === Te.Concern || B.variationIcon === Te.Improvement || B.specialCauseNeitherValue), Z = !!(B.specialCauseSinglePointUp || B.specialCauseTwoOfThreeUp || B.specialCauseFourOfFiveUp || B.specialCauseShiftUp || B.specialCauseTrendUp), de = !!(B.specialCauseSinglePointDown || B.specialCauseTwoOfThreeDown || B.specialCauseFourOfFiveDown || B.specialCauseShiftDown || B.specialCauseTrendDown);
      k[W] = {
        variation: B.variationIcon,
        assurance: B.assuranceIcon,
        special: te,
        concern: B.variationIcon === Te.Concern,
        improvement: B.variationIcon === Te.Improvement,
        trendUp: !!B.specialCauseTrendUp,
        trendDown: !!B.specialCauseTrendDown,
        upAny: Z,
        downAny: de,
        neutralSpecial: !!B.specialCauseNeitherValue,
        shiftUp: !!B.specialCauseShiftUp,
        shiftDown: !!B.specialCauseShiftDown,
        twoOfThreeUp: !!B.specialCauseTwoOfThreeUp,
        twoOfThreeDown: !!B.specialCauseTwoOfThreeDown,
        fourOfFiveUp: !!B.specialCauseFourOfFiveUp,
        fourOfFiveDown: !!B.specialCauseFourOfFiveDown,
        partitionId: B.partitionId ?? null
      };
    }), k;
  }, [i]), ne = G.useMemo(() => {
    if (!i || !i.length) return null;
    const k = [];
    for (const W of i)
      typeof W.target == "number" && !isNaN(W.target) && k.push(W.target);
    if (!k.length) return null;
    const B = k[0];
    return k.every((W) => W === B) ? B : null;
  }, [i]), V = G.useMemo(() => (C || []).map((k) => k === pt.Improvement ? dt.Improvement : k === pt.Concern ? dt.Concern : k === pt.NoJudgement ? dt.NoJudgement : dt.Common), [C]), R = G.useMemo(() => !d || !V.length ? [] : Am(V, !0), [d, V, g]), H = G.useMemo(
    () => _.map((k) => w(k.x instanceof Date ? k.x : new Date(k.x))),
    [_, w]
  ), z = w.range()[1], se = G.useMemo(() => {
    if (!i || !i.length) return null;
    let k = Number.POSITIVE_INFINITY, B = Number.POSITIVE_INFINITY;
    if (i.forEach((he, E) => {
      he.specialCauseTrendUp && (k = Math.min(k, E)), he.specialCauseTrendDown && (B = Math.min(B, E));
    }), !Number.isFinite(k) && !Number.isFinite(B)) return null;
    const W = k <= B, te = W ? "up" : "down", Z = W ? k : B, de = (he) => p == null || p === De.Neither || he == null || typeof he.value != "number" || typeof he.mean != "number" ? !1 : te === "up" ? p === De.Up ? he.value > he.mean : he.value < he.mean : p === De.Down ? he.value < he.mean : he.value > he.mean;
    let xe = null;
    for (let he = Z; he < i.length; he++) {
      const E = i[he];
      if (!(W ? !!E.specialCauseTrendUp : !!E.specialCauseTrendDown)) break;
      if (de(E)) {
        xe = he;
        break;
      }
    }
    let _e = !1;
    if (xe != null) {
      let he = 0;
      for (let E = xe; E < i.length; E++) {
        const O = i[E];
        if (!(W ? !!O.specialCauseTrendUp : !!O.specialCauseTrendDown)) break;
        de(O) && he++;
      }
      _e = he >= 2;
    }
    return { direction: te, detectedAt: Z, firstFavourableCrossAt: xe, persistedAcrossMean: _e };
  }, [i, p]), U = G.useMemo(() => {
    if (!i || !i.length) return null;
    const k = (B) => {
      const W = [];
      let te = null, Z = null;
      for (let de = 0; de < i.length; de++) {
        const xe = i[de], _e = typeof xe[B] == "number" ? xe[B] : null;
        if (_e == null || isNaN(_e)) {
          te !== null && Z != null && (W.push({
            x1: H[te],
            x2: H[de - 1],
            y: x(Z)
          }), te = null, Z = null);
          continue;
        }
        if (te === null) {
          te = de, Z = _e;
          continue;
        }
        Z != null && Math.abs(_e - Z) <= 1e-9 || (Z != null && W.push({
          x1: H[te],
          x2: H[de - 1],
          y: x(Z)
        }), te = de, Z = _e);
      }
      return te !== null && Z != null && W.push({
        x1: H[te],
        x2: H[i.length - 1],
        y: x(Z)
      }), W;
    };
    return {
      mean: k("mean"),
      ucl: k("upperProcessLimit"),
      lcl: k("lowerProcessLimit"),
      onePos: k("upperOneSigma"),
      oneNeg: k("lowerOneSigma"),
      twoPos: k("upperTwoSigma"),
      twoNeg: k("lowerTwoSigma")
    };
  }, [i, H, x]), pe = G.useMemo(() => R.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs("linearGradient", { id: `${P.current}-grad-common`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.28 }),
      /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.12 }),
      /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.045 })
    ] }),
    R.map((k, B) => {
      const W = `${P.current}-grad-${B}`;
      let te, Z = 0.28, de = 0.12, xe = 0.045;
      switch (k.category) {
        case dt.Concern:
          te = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", Z = 0.28, de = 0.12, xe = 0.045;
          break;
        case dt.Improvement:
          te = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", Z = 0.26, de = 0.11, xe = 0.045;
          break;
        case dt.NoJudgement:
          te = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", Z = 0.26, de = 0.11, xe = 0.045;
          break;
        default:
          te = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: W, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: te, stopOpacity: Z }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: te, stopOpacity: de }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: te, stopOpacity: xe })
      ] }, W);
    })
  ] }) : null, [R]), ke = G.useMemo(() => {
    if (!R.length) return null;
    const [k] = x.domain(), B = x(k), W = R.map((te, Z) => {
      const { start: de, end: xe, category: _e } = te;
      if (de < 0 || xe >= H.length || de > xe)
        return null;
      const he = H[de], E = H[xe];
      let O = "";
      if (_e === dt.Common) {
        const Y = Z > 0 ? R[Z - 1] : null, J = Z < R.length - 1 ? R[Z + 1] : null, F = Y ? H[Y.end] : 0, X = Y ? x(_[Y.end].y) : B, Q = J ? H[J.start] : z, ee = J ? x(_[J.start].y) : B;
        O = `M ${F} ${B}`, O += ` L ${F} ${X}`;
        for (let q = de; q <= xe; q++)
          O += ` L ${H[q]} ${x(_[q].y)}`;
        O += ` L ${Q} ${ee}`, O += ` L ${Q} ${B} Z`;
      } else {
        const Y = Z > 0 ? R[Z - 1] : null, J = Z < R.length - 1 ? R[Z + 1] : null, F = Y && Y.category !== dt.Common, X = J && J.category !== dt.Common, Q = x(_[de].y), ee = x(_[xe].y);
        let q = he, oe = E;
        if (F) {
          const ae = H[Y.end], ie = x(_[Y.end].y), ge = _[de].y - _[Y.end].y;
          f === "slope" && ge > 0 ? (O = `M ${ae} ${ie} L ${he} ${Q}`, q = ae) : (O = `M ${he} ${B} L ${he} ${Q}`, q = he);
        } else
          O = `M ${he} ${B} L ${he} ${Q}`;
        for (let ae = de + 1; ae <= xe; ae++)
          O += ` L ${H[ae]} ${x(_[ae].y)}`;
        if (O += ` L ${E} ${ee}`, X) {
          const ae = H[J.start], ie = x(_[J.start].y), ge = _[J.start].y - _[xe].y;
          (f === "slope" && ge <= 0 || f === "extend") && (O += ` L ${ae} ${ie}`, oe = ae);
        }
        if (O += ` L ${oe} ${B}`, O += ` L ${q} ${B} Z`, f === "neutral" && F) {
          const ae = H[Y.end], ie = x(_[Y.end].y), ge = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${ae} ${B} L ${ae} ${ie} L ${he} ${Q} L ${he} ${B} Z`,
              fill: `url(#${P.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${Z}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            ge,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: O,
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
          d: O,
          fill: `url(#${P.current}-grad-${Z})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${Z}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: W });
  }, [R, H, z, x, _, f]), ce = G.useMemo(() => {
    if (!c?.timeframe && _.length >= 2) {
      const k = _.map((xe) => xe.x instanceof Date ? xe.x : new Date(xe.x)), B = new Date(Math.min(...k.map((xe) => xe.getTime()))), W = new Date(Math.max(...k.map((xe) => xe.getTime()))), te = Math.round((W.getTime() - B.getTime()) / 864e5) || 0;
      if (te < 14)
        return `The chart shows a timeframe of ${te + 1} days`;
      const Z = Math.round(te / 7);
      return Z < 20 ? `The chart shows a timeframe of ${Z} weeks` : `The chart shows a timeframe of ${(W.getFullYear() - B.getFullYear()) * 12 + (W.getMonth() - B.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, _]), ue = (k) => {
    const B = k % 10, W = k % 100;
    return B === 1 && W !== 11 ? `${k}st` : B === 2 && W !== 12 ? `${k}nd` : B === 3 && W !== 13 ? `${k}rd` : `${k}th`;
  }, K = (k) => `${ue(k.getDate())} ${k.toLocaleString("en-GB", { month: "long" })}, ${k.getFullYear()}`, re = G.useCallback(
    ({
      index: k,
      x: B,
      y: W
    }) => {
      const te = i?.[k], Z = B instanceof Date ? B : new Date(B), de = K(Z), xe = c?.measureUnit ? ` ${c.measureUnit}` : "", _e = c?.measureName ? ` ${c.measureName}` : "";
      if (!te)
        return `General summary is: ${ce ? ce + ". " : ""}Point ${k + 1}, ${de}, ${W}${xe}${_e}`;
      const he = pa(te.variationIcon) || "Variation", E = fa(te), O = E.length ? ` Rules: ${[...new Set(E.map((J) => $n[J].narration))].join("; ")}.` : " No special cause rules.", Y = [];
      return c?.measureName && Y.push(`Measure: ${c.measureName}.`), c?.datasetContext && Y.push(`${c.datasetContext}.`), c?.organisation && Y.push(`Organisation: ${c.organisation}.`), c?.additionalNote && Y.push(c.additionalNote), [
        "General summary is:",
        ...Y,
        `Point ${k + 1} recorded on `,
        de + ",",
        `with a value of ${W} ${xe}${_e}`,
        he + ".",
        O
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, ce]
  ), fe = G.useCallback(
    (k, B) => i?.[k] ? re({
      index: k,
      seriesId: "process",
      x: B.x instanceof Date ? B.x : new Date(B.x),
      y: B.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, re]
  );
  return /* @__PURE__ */ r.jsx(Zh, { children: /* @__PURE__ */ r.jsxs(
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
            width: v.xScale.range()[1] + 56 + 16,
            height: v.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(Zo, { type: "x" }),
              /* @__PURE__ */ r.jsx(Zo, { type: "y" }),
              /* @__PURE__ */ r.jsx(xh, { axis: "y" }),
              pe,
              ke,
              y.map((k, B) => {
                const W = _[k];
                if (!W) return null;
                const te = w(W.x instanceof Date ? W.x : new Date(W.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: te,
                    x2: te,
                    y1: 0,
                    y2: x.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${B}`
                );
              }),
              U?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                U.mean.map((k, B) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__cl", x1: k.x1, x2: k.x2, y1: k.y, y2: k.y }, `mean-${B}`)),
                U.mean.map((k, B) => {
                  if (B === U.mean.length - 1) return null;
                  const W = U.mean[B + 1];
                  if (!W || k.y === W.y) return null;
                  const Z = Math.max(4, W.x1 - k.x2 || 0) * 0.5, de = `M ${k.x2},${k.y} C ${k.x2 + Z},${k.y} ${W.x1 - Z},${W.y} ${W.x1},${W.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__cl fdp-spc__cl-join", d: de, fill: "none" }, `mean-join-${B}`);
                })
              ] }) : null,
              ne != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ r.jsx(r.Fragment, {}),
              U?.ucl.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--ucl", children: [
                U.ucl.map((k, B) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--ucl", x1: k.x1, x2: k.x2, y1: k.y, y2: k.y, strokeWidth: 2 }, `ucl-${B}`)),
                U.ucl.map((k, B) => {
                  if (B === U.ucl.length - 1) return null;
                  const W = U.ucl[B + 1];
                  if (!W || k.y === W.y) return null;
                  const Z = Math.max(4, W.x1 - k.x2 || 0) * 0.5, de = `M ${k.x2},${k.y} C ${k.x2 + Z},${k.y} ${W.x1 - Z},${W.y} ${W.x1},${W.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join", d: de, fill: "none", strokeWidth: 2 }, `ucl-join-${B}`);
                })
              ] }) : null,
              U?.lcl.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--lcl", children: [
                U.lcl.map((k, B) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--lcl", x1: k.x1, x2: k.x2, y1: k.y, y2: k.y, strokeWidth: 2 }, `lcl-${B}`)),
                U.lcl.map((k, B) => {
                  if (B === U.lcl.length - 1) return null;
                  const W = U.lcl[B + 1];
                  if (!W || k.y === W.y) return null;
                  const Z = Math.max(4, W.x1 - k.x2 || 0) * 0.5, de = `M ${k.x2},${k.y} C ${k.x2 + Z},${k.y} ${W.x1 - Z},${W.y} ${W.x1},${W.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join", d: de, fill: "none", strokeWidth: 2 }, `lcl-join-${B}`);
                })
              ] }) : null,
              ne != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: w.range()[1],
                    y1: x(ne),
                    y2: x(ne),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: w.range()[0] - 7,
                    y: x(ne) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      ne,
                      " ",
                      m || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              s && U && U.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                U.onePos.map((k, B) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: k.x1,
                    x2: k.x2,
                    y1: k.y,
                    y2: k.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${B}`
                )),
                U.oneNeg.map((k, B) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: k.x1,
                    x2: k.x2,
                    y1: k.y,
                    y2: k.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${B}`
                )),
                U.twoPos.map((k, B) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: k.x1,
                    x2: k.x2,
                    y1: k.y,
                    y2: k.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${B}`
                )),
                U.twoNeg.map((k, B) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: k.x1,
                    x2: k.x2,
                    y1: k.y,
                    y2: k.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${B}`
                ))
              ] }),
              se && (M || S || N) && (() => {
                const k = se.detectedAt, B = se.firstFavourableCrossAt, W = _[k] ? w(_[k].x instanceof Date ? _[k].x : new Date(_[k].x)) : null, te = _[k] ? x(_[k].y) : null, Z = B != null && _[B] ? w(_[B].x instanceof Date ? _[B].x : new Date(_[B].x)) : null, de = B != null && _[B] ? x(_[B].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  N && W != null && te != null && Z != null && de != null && /* @__PURE__ */ r.jsx("line", { x1: W, y1: te, x2: Z, y2: de, stroke: "#888", strokeDasharray: "4 4", strokeWidth: 2, children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" }) }),
                  M && W != null && te != null && /* @__PURE__ */ r.jsx("circle", { cx: W, cy: te, r: 6, fill: "white", stroke: "#555", strokeWidth: 2, children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" }) }),
                  S && Z != null && de != null && /* @__PURE__ */ r.jsx("circle", { cx: Z, cy: de, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                Qh,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (k) => k.x instanceof Date ? k.x : new Date(k.x),
                  smooth: !1,
                  strokeWidth: h
                }
              ),
              t && _.map((k, B) => {
                const W = w(k.x instanceof Date ? k.x : new Date(k.x)), te = x(k.y), Z = D.has(B), de = A?.[B], xe = V[B], _e = xe === dt.Improvement, he = xe === dt.Concern, E = xe === dt.NoJudgement, O = [
                  "fdp-spc__point",
                  Z && o ? "fdp-spc__point--ooc" : null,
                  l && he ? "fdp-spc__point--sc-concern" : null,
                  l && _e ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral special-cause (no-judgement) from category, when enabled
                  l && b && E ? "fdp-spc__point--sc-no-judgement" : null,
                  de?.assurance === et.Pass ? "fdp-spc__point--assurance-pass" : null,
                  de?.assurance === et.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), Y = j?.focused?.index === B;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: W,
                    cy: te,
                    r: 5,
                    className: O,
                    "data-variation": de?.variation,
                    "data-assurance": de?.assurance,
                    "aria-label": g,
                    ...Y ? { "aria-describedby": `spc-tooltip-${B}` } : {}
                  },
                  B
                );
              }),
              u && l && A && _.map((k, B) => {
                const W = A[B];
                if (!W || !(W.concern || W.improvement)) return null;
                const te = w(k.x instanceof Date ? k.x : new Date(k.x)), Z = x(k.y);
                let de = Z - 10;
                const xe = 12, _e = x.range()[0] - 4;
                de < xe && (de = Math.min(Z + 16, _e));
                const he = w.range()[1], E = Math.min(Math.max(te, 0), he - 0);
                return /* @__PURE__ */ r.jsx(
                  "text",
                  {
                    x: E,
                    y: de,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${W.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: W.concern ? "!" : "★"
                  },
                  `icon-${B}`
                );
              }),
              T && /* @__PURE__ */ r.jsx(
                rg,
                {
                  width: w.range()[1],
                  height: x.range()[0]
                }
              ),
              !L && /* @__PURE__ */ r.jsx(
                Fl,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: fe,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (k) => K(k),
                  enableNeutralNoJudgement: b,
                  showTrendGatingExplanation: $
                }
              )
            ] })
          }
        ),
        L && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          Em,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: m || c?.measureUnit,
            onSignalFocus: I
          }
        ) }),
        n && /* @__PURE__ */ r.jsx(
          em,
          {
            format: (k) => re({ ...k, x: k.x instanceof Date ? k.x : new Date(k.x) })
          }
        )
      ]
    }
  ) });
}, rg = ({
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
}, ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: tn,
  Direction: je,
  MetricPolarity: Je,
  SPCAssuranceIcon: ba,
  SPCVariationIcon: ga,
  VariationJudgement: xt,
  VariationState: Ce,
  getVariationColour: Xs,
  getVariationTrend: ma
}, Symbol.toStringTag, { value: "Module" })), Fy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: et,
  AssuranceResult: tn,
  BaselineSuggestionReason: wt,
  ChartType: Dt,
  Direction: je,
  Icons: ag,
  ImprovementDirection: De,
  MetricPolarity: Je,
  RULE_METADATA: Mr,
  SPCAssuranceIcon: ba,
  SPCChart: tg,
  SPCTooltipOverlay: Fl,
  SPCVariationIcon: ga,
  SpcEmbeddedIconVariant: un,
  SpcWarningCategory: $l,
  SpcWarningCode: Il,
  SpcWarningSeverity: en,
  VARIATION_COLOR_TOKENS: Ct,
  VariationIcon: Te,
  VariationJudgement: xt,
  VariationState: Ce,
  buildSpc: xa,
  extractRuleIds: fa,
  getVariationColorHex: om,
  getVariationColorToken: kl,
  getVariationColour: Xs,
  getVariationTrend: ma,
  normaliseSpcSettings: Ml,
  ruleGlossary: $n,
  variationLabel: pa
}, Symbol.toStringTag, { value: "Module" })), sg = "150ms", og = "300ms", ig = "500ms", lg = "cubic-bezier(0.4, 0, 1, 1)", cg = "cubic-bezier(0, 0, 0.2, 1)", ug = "cubic-bezier(0.4, 0, 0.2, 1)", dg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", fg = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", pg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", hg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", mg = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", gg = "1px", xg = "2px", bg = "4px", yg = "4px", vg = "4px", wg = "2px", _g = "1px", Sg = "0px", kg = "4px", Cg = "8px", Ng = "12px", Hl = "#d8dde0", Ul = "#4c6272", Ol = "#d8dde0", Wl = "#aeb7bd", zl = "#d5281b", Vl = "#005eb8", Gl = "#ffffff", Yl = "#212b32", ql = "#007f3b", Xl = "#330072", Kl = "#7c2855", Jl = "#d5281b", Zl = "#ffeb3b", Ql = "#fff9c4", ec = "#ffb81c", tc = "#ed8b00", nc = "#00a499", rc = "#ae2573", ac = "#4c6272", sc = "#768692", oc = "#aeb7bd", ic = "#d8dde0", lc = "#f0f4f5", jg = "#212b32", Dg = "#4c6272", Tg = "#ffffff", $g = "#212b32", Ig = "#005eb8", Mg = "#7c2855", Lg = "#003087", Pg = "#330072", Fg = "#ffeb3b", Ag = "#212b32", Eg = "#d8dde0", Rg = "#ffffff33", Bg = "#d5281b", Hg = "#4c6272", Ug = "#ffffff", Og = "#007f3b", Wg = "#ffffff", zg = "#006530", Vg = "#004021", Gg = "#004021", Yg = "#00000000", qg = "#ffffff", Xg = "#005eb8", Kg = "#005eb8", Jg = "#d9e5f2", Zg = "#c7daf0", Qg = "#005eb8", e0 = "#ffffff", t0 = "#212b32", n0 = "#d9dde0", r0 = "#b3bcc2", a0 = "#b3bcc2", s0 = "#d5281b", o0 = "#aa2016", i0 = "#6a140e", l0 = "#6a140e", c0 = "#005eb8", u0 = "#004b93", d0 = "#002f5c", f0 = "#002f5c", p0 = "8px", h0 = "16px", m0 = "12px", g0 = "16px", x0 = "4px", b0 = "40px", y0 = "4px", v0 = "40px", w0 = "12px", _0 = "16px", S0 = "32px", k0 = "16px", C0 = "20px", N0 = "28px", j0 = "9px", D0 = "2px", T0 = "16px", $0 = "24px", I0 = "8px", M0 = "24px", L0 = "16px", P0 = "4px", F0 = "4px", A0 = "4px", E0 = "8px", R0 = "4px", B0 = "16px", H0 = "#007f3b", U0 = "#006530", O0 = "#004021", W0 = "#d8dde0", z0 = "#ffffff", V0 = "#768692", G0 = "#00000000", Y0 = "#ffeb3b", q0 = "#00000000", X0 = "#ffffff", K0 = "#d9e5f2", J0 = "#c7daf0", Z0 = "#005eb8", Q0 = "#005eb8", cc = "8px", uc = "16px", dc = "12px", fc = "16px", ex = "2px", tx = "4px", nx = "4px", rx = "600", ax = "#ffffff", sx = "#d8dde0", ox = "#aeb7bd", ix = "#f0f4f5", lx = "#212b32", cx = "#212b32", ux = "#005eb8", pc = "16px", hc = "32px", mc = "16px", dx = "1px", fx = "4px", px = "none", hx = "0 2px 4px rgba(0, 0, 0, 0.1)", mx = "#ffffff", gx = "#ffffff", xx = "#d8dde0", bx = "#ffffff", yx = "#4c6272", vx = "#ffeb3b", wx = "#d5281b", _x = "#aeb7bd", Sx = "#212b32", kx = "#4c6272", Cx = "#768692", Nx = "#212b32", jx = "#ffffff", Dx = "600", Tx = "#d5281b", $x = "600", Ix = "#4c6272", gc = "4px", xc = "40px", bc = "40px", yc = "12px", Mx = "2px", Lx = "4px", Px = "0px", Fx = "16px", Ax = "18px", Ex = "24px", Rx = "32px", Bx = "34px", Hx = "32px", Ux = "40px", Ox = "48px", Wx = "5.4ex", zx = "7.2ex", Vx = "9ex", Gx = "10.8ex", Yx = "20ex", qx = "38ex", Xx = "56ex", Kx = "44px", Jx = "40px", Zx = "1020px", Qx = "100%", eb = "50%", tb = "33.333%", nb = "25%", rb = "20%", ab = "320px", sb = "641px", ob = "1025px", ib = "1280px", lb = "960px", cb = "32px", ub = "16px", db = "#d5281b", fb = "#d5281b", pb = "#ffffff", hb = "#007f3b", mb = "#007f3b", gb = "#ffffff", xb = "#ffeb3b", bb = "#ffeb3b", yb = "#212b32", vb = "#005eb8", wb = "#005eb8", _b = "#ffffff", Sb = "#d8dde0", kb = "#aeb7bd", Cb = "#768692", Nb = "0 4px 0 #004021", jb = "0 4px 0 #005eb8", Db = "0 4px 0 #6a140e", Tb = "0 4px 0 #ffeb3b", $b = "none", Ib = "0 2px 4px rgba(0, 0, 0, 0.1)", Mb = "4px", Lb = "0px", Pb = "solid", Fb = "0 0 0 3px #ffeb3b", Ab = "0 0 0 3px #ffeb3b", Eb = "none", Rb = "0 1px 3px rgba(0, 0, 0, 0.12)", Bb = "0 2px 6px rgba(0, 0, 0, 0.16)", Hb = "0 4px 12px rgba(0, 0, 0, 0.20)", vc = "0", wc = "4px", _c = "8px", Sc = "16px", kc = "24px", Cc = "32px", Nc = "40px", jc = "48px", Dc = "56px", Tc = "64px", us = "0", ds = "0", fs = "4px", ps = "4px", hs = "8px", ms = "8px", gs = "8px", xs = "16px", bs = "16px", ys = "24px", vs = "24px", ws = "32px", _s = "32px", Ss = "40px", ks = "40px", Cs = "48px", Ns = "48px", js = "56px", Ds = "56px", Ts = "64px", Pr = "Frutiger W01", Fr = "Arial, Helvetica, sans-serif", Ar = "sans-serif", Er = "400", Rr = "600", Br = "400", Hr = "12px", Ur = "14px", Or = "12pt", Wr = "14px", zr = "16px", Vr = "12pt", Gr = "16px", Yr = "19px", qr = "13pt", Xr = "19px", Kr = "22px", Jr = "15pt", Zr = "22px", Qr = "26px", ea = "17pt", ta = "27px", na = "36px", ra = "20pt", aa = "33px", sa = "48px", oa = "24pt", $s = "16px", Is = "24px", Pt = {
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
}, Ub = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: sg,
  AnimationDurationNormal: og,
  AnimationDurationSlow: ig,
  AnimationEasingBounce: dg,
  AnimationEasingEaseIn: lg,
  AnimationEasingEaseInOut: ug,
  AnimationEasingEaseOut: cg,
  BorderColorCard: Ol,
  BorderColorCardHover: Wl,
  BorderColorDefault: Hl,
  BorderColorError: zl,
  BorderColorForm: Ul,
  BorderRadiusLarge: Ng,
  BorderRadiusMedium: Cg,
  BorderRadiusNone: Sg,
  BorderRadiusSmall: kg,
  BorderWidthCardBottom: yg,
  BorderWidthDefault: gg,
  BorderWidthFormElement: xg,
  BorderWidthFormElementError: bg,
  BorderWidthPanel: vg,
  BorderWidthTableCell: _g,
  BorderWidthTableHeader: wg,
  BreakpointDesktop: ob,
  BreakpointLargeDesktop: ib,
  BreakpointMobile: ab,
  BreakpointTablet: sb,
  ButtonBorderRadius: tx,
  ButtonBorderWidth: ex,
  ButtonPrimaryBackgroundActive: O0,
  ButtonPrimaryBackgroundDefault: H0,
  ButtonPrimaryBackgroundDisabled: W0,
  ButtonPrimaryBackgroundHover: U0,
  ButtonPrimaryBorderDefault: G0,
  ButtonPrimaryBorderFocus: Y0,
  ButtonPrimaryTextDefault: z0,
  ButtonPrimaryTextDisabled: V0,
  ButtonSecondaryBackgroundActive: J0,
  ButtonSecondaryBackgroundDefault: q0,
  ButtonSecondaryBackgroundHover: K0,
  ButtonSecondaryBackgroundSolid: X0,
  ButtonSecondaryBorderDefault: Q0,
  ButtonSecondaryTextDefault: Z0,
  ButtonShadowSize: nx,
  ButtonSpacingPaddingHorizontalDesktop: fc,
  ButtonSpacingPaddingHorizontalMobile: uc,
  ButtonSpacingPaddingVerticalDesktop: dc,
  ButtonSpacingPaddingVerticalMobile: cc,
  ButtonTypographyWeight: rx,
  CardBackgroundDefault: ax,
  CardBorderBottom: ix,
  CardBorderDefault: sx,
  CardBorderHover: ox,
  CardBorderWidthBottom: fx,
  CardBorderWidthDefault: dx,
  CardShadowDefault: px,
  CardShadowHover: hx,
  CardSpacingHeadingMargin: mc,
  CardSpacingPaddingDesktop: hc,
  CardSpacingPaddingMobile: pc,
  CardTextDescription: cx,
  CardTextHeading: lx,
  CardTextLink: ux,
  ColorBorderDefault: Eg,
  ColorBorderSecondary: Rg,
  ColorButtonLoginActive: d0,
  ColorButtonLoginBackground: c0,
  ColorButtonLoginHover: u0,
  ColorButtonLoginShadow: f0,
  ColorButtonPrimaryActive: Vg,
  ColorButtonPrimaryBackground: Og,
  ColorButtonPrimaryHover: zg,
  ColorButtonPrimaryShadow: Gg,
  ColorButtonPrimaryText: Wg,
  ColorButtonReverseActive: r0,
  ColorButtonReverseBackground: e0,
  ColorButtonReverseHover: n0,
  ColorButtonReverseShadow: a0,
  ColorButtonReverseText: t0,
  ColorButtonSecondaryActive: Zg,
  ColorButtonSecondaryBackground: Yg,
  ColorButtonSecondaryBackgroundSolid: qg,
  ColorButtonSecondaryBorder: Xg,
  ColorButtonSecondaryHover: Jg,
  ColorButtonSecondaryShadow: Qg,
  ColorButtonSecondaryText: Kg,
  ColorButtonWarningActive: i0,
  ColorButtonWarningBackground: s0,
  ColorButtonWarningHover: o0,
  ColorButtonWarningShadow: l0,
  ColorError: Bg,
  ColorFocusBackground: Fg,
  ColorFocusText: Ag,
  ColorFormBackground: Ug,
  ColorFormBorder: Hg,
  ColorGrey1: ac,
  ColorGrey2: sc,
  ColorGrey3: oc,
  ColorGrey4: ic,
  ColorGrey5: lc,
  ColorLinkActive: Lg,
  ColorLinkDefault: Ig,
  ColorLinkHover: Mg,
  ColorLinkVisited: Pg,
  ColorPrimaryBlack: Yl,
  ColorPrimaryBlue: Vl,
  ColorPrimaryDarkPink: Kl,
  ColorPrimaryGreen: ql,
  ColorPrimaryPurple: Xl,
  ColorPrimaryRed: Jl,
  ColorPrimaryWhite: Gl,
  ColorPrimaryYellow: Zl,
  ColorSecondaryAquaGreen: nc,
  ColorSecondaryOrange: tc,
  ColorSecondaryPaleYellow: Ql,
  ColorSecondaryPink: rc,
  ColorSecondaryWarmYellow: ec,
  ColorTextPrimary: jg,
  ColorTextPrint: $g,
  ColorTextReverse: Tg,
  ColorTextSecondary: Dg,
  ComponentBlur: F0,
  ComponentBreadcrumbChevronMarginLeft: j0,
  ComponentBreadcrumbChevronMarginRight: D0,
  ComponentBreadcrumbPaddingTopDesktop: $0,
  ComponentBreadcrumbPaddingTopMobile: T0,
  ComponentButtonPaddingDesktopHorizontal: g0,
  ComponentButtonPaddingDesktopVertical: m0,
  ComponentButtonPaddingMobileHorizontal: h0,
  ComponentButtonPaddingMobileVertical: p0,
  ComponentButtonShadowSize: x0,
  ComponentCardHeadingMargin: k0,
  ComponentCardPaddingDesktop: S0,
  ComponentCardPaddingMobile: _0,
  ComponentDetails: E0,
  ComponentExpander: R0,
  ComponentFormCheckboxLabelPadding: w0,
  ComponentFormCheckboxSize: v0,
  ComponentFormInputMinHeight: b0,
  ComponentFormInputPadding: y0,
  ComponentLink: A0,
  ComponentPagination: B0,
  ComponentPanelPaddingDesktop: N0,
  ComponentPanelPaddingMobile: C0,
  ComponentSpread: P0,
  ComponentSummaryListCellPaddingHorizontal: M0,
  ComponentSummaryListCellPaddingVertical: I0,
  ComponentSummaryListRowMargin: L0,
  ElevationHigh: Hb,
  ElevationLow: Rb,
  ElevationMedium: Bb,
  ElevationNone: Eb,
  FocusOutlineOffset: Lb,
  FocusOutlineStyle: Pb,
  FocusOutlineWidth: Mb,
  FocusShadowButton: Ab,
  FocusShadowInput: Fb,
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
  FormBorderRadius: Px,
  FormBorderWidthDefault: Mx,
  FormBorderWidthError: Lx,
  FormErrorTextDefault: Tx,
  FormErrorTypographyWeight: $x,
  FormHintTextDefault: Ix,
  FormInputBackgroundDefault: mx,
  FormInputBackgroundDisabled: xx,
  FormInputBackgroundError: bx,
  FormInputBackgroundFocus: gx,
  FormInputBorderDefault: yx,
  FormInputBorderDisabled: _x,
  FormInputBorderError: wx,
  FormInputBorderFocus: vx,
  FormInputTextDefault: Sx,
  FormInputTextDisabled: Cx,
  FormInputTextPlaceholder: kx,
  FormLabelTextDefault: Nx,
  FormLabelTextRequired: jx,
  FormLabelTypographyWeight: Dx,
  FormSpacingCheckboxLabelPadding: yc,
  FormSpacingCheckboxSize: bc,
  FormSpacingInputMinHeight: xc,
  FormSpacingInputPadding: gc,
  GridGutter: cb,
  GridGutterHalf: ub,
  GridPageWidth: lb,
  HeadingsNhsukHeadingL: Ft,
  HeadingsNhsukHeadingM: At,
  HeadingsNhsukHeadingS: Et,
  HeadingsNhsukHeadingXl: Pt,
  HeadingsNhsukHeadingXs: Rt,
  LayoutColumnActions: rb,
  LayoutColumnFull: Qx,
  LayoutColumnHalf: eb,
  LayoutColumnQuarter: nb,
  LayoutColumnThird: tb,
  LayoutContainerMaxWidth: Zx,
  ParagraphsBody: Bt,
  ParagraphsBodyLarge: Ht,
  ParagraphsBodySmall: Ut,
  ParagraphsLedeText: Ot,
  ParagraphsLedeTextSmall: Wt,
  ShadowButtonDefault: Nb,
  ShadowButtonFocus: Tb,
  ShadowButtonSecondary: jb,
  ShadowButtonWarning: Db,
  ShadowCardDefault: $b,
  ShadowCardHover: Ib,
  SizeButtonMinHeightDesktop: Jx,
  SizeButtonMinHeightMobile: Kx,
  SizeFormControlLarge: Ox,
  SizeFormControlMedium: Ux,
  SizeFormControlSmall: Hx,
  SizeFormInputWidth2xl: qx,
  SizeFormInputWidth3xl: Xx,
  SizeFormInputWidthLg: Gx,
  SizeFormInputWidthMd: Vx,
  SizeFormInputWidthSm: zx,
  SizeFormInputWidthXl: Yx,
  SizeFormInputWidthXs: Wx,
  SizeIconExtraLarge: Rx,
  SizeIconLarge: Ex,
  SizeIconMedium: Ax,
  SizeIconNhsDefault: Bx,
  SizeIconSmall: Fx,
  Spacing0: vc,
  Spacing1: wc,
  Spacing2: _c,
  Spacing3: Sc,
  Spacing4: kc,
  Spacing5: Cc,
  Spacing6: Nc,
  Spacing7: jc,
  Spacing8: Dc,
  Spacing9: Tc,
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
  SpacingResponsive8Mobile: Ns,
  SpacingResponsive8Tablet: js,
  SpacingResponsive9Mobile: Ds,
  SpacingResponsive9Tablet: Ts,
  StateDisabledBackground: Sb,
  StateDisabledBorder: kb,
  StateDisabledText: Cb,
  StateErrorBackground: db,
  StateErrorBorder: fb,
  StateErrorText: pb,
  StateInfoBackground: vb,
  StateInfoBorder: wb,
  StateInfoText: _b,
  StateSuccessBackground: hb,
  StateSuccessBorder: mb,
  StateSuccessText: gb,
  StateWarningBackground: xb,
  StateWarningBorder: bb,
  StateWarningText: yb,
  TransitionButtonDefault: fg,
  TransitionButtonShadow: pg,
  TransitionCardHover: mg,
  TransitionInputFocus: hg
}, Symbol.toStringTag, { value: "Module" })), Ay = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Ey = ({
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
), Ry = ({
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
), By = ({
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
), Hy = ({
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
), Uy = ({
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
), Oy = ({
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
), Wy = ({
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
), zy = ({
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
), Vy = ({
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
), Gy = ({
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
), Yy = () => $e(() => Ub, []), qy = () => $e(() => ({
  // Border colors
  BorderColorDefault: Hl,
  BorderColorForm: Ul,
  BorderColorCard: Ol,
  BorderColorCardHover: Wl,
  BorderColorError: zl,
  // Primary colors
  ColorPrimaryBlue: Vl,
  ColorPrimaryWhite: Gl,
  ColorPrimaryBlack: Yl,
  ColorPrimaryGreen: ql,
  ColorPrimaryPurple: Xl,
  ColorPrimaryDarkPink: Kl,
  ColorPrimaryRed: Jl,
  ColorPrimaryYellow: Zl,
  // Secondary colors
  ColorSecondaryPaleYellow: Ql,
  ColorSecondaryWarmYellow: ec,
  ColorSecondaryOrange: tc,
  ColorSecondaryAquaGreen: nc,
  ColorSecondaryPink: rc,
  // Grey scale
  ColorGrey1: ac,
  ColorGrey2: sc,
  ColorGrey3: oc,
  ColorGrey4: ic,
  ColorGrey5: lc
}), []), Xy = () => $e(() => ({
  Spacing0: vc,
  Spacing1: wc,
  Spacing2: _c,
  Spacing3: Sc,
  Spacing4: kc,
  Spacing5: Cc,
  Spacing6: Nc,
  Spacing7: jc,
  Spacing8: Dc,
  Spacing9: Tc
}), []), Ky = () => $e(() => ({
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
}), []), Jy = () => $e(() => ({
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
    Size8: Ns,
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
    Size8: js,
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
  SpacingResponsive8Mobile: Ns,
  SpacingResponsive8Tablet: js,
  SpacingResponsive9Mobile: Ds,
  SpacingResponsive9Tablet: Ts
}), []), Zy = () => $e(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: cc,
  ButtonSpacingPaddingHorizontalMobile: uc,
  ButtonSpacingPaddingVerticalDesktop: dc,
  ButtonSpacingPaddingHorizontalDesktop: fc,
  // Card spacing	
  CardSpacingPaddingMobile: pc,
  CardSpacingPaddingDesktop: hc,
  CardSpacingHeadingMargin: mc,
  // Form spacing
  FormSpacingInputPadding: gc,
  FormSpacingInputMinHeight: xc,
  FormSpacingCheckboxSize: bc,
  FormSpacingCheckboxLabelPadding: yc
}), []), Qy = () => $e(() => ({
  xl: Pt,
  l: Ft,
  m: At,
  s: Et,
  xs: Rt
}), []), ev = () => $e(() => ({
  body: Bt,
  bodyLarge: Ht,
  bodySmall: Ut,
  ledeText: Ot,
  ledeTextSmall: Wt
}), []), tv = () => $e(() => ({
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
function nv(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, s] = G.useState(t), o = G.useCallback(() => s("three-column"), []), i = G.useCallback(() => s((u) => u === "three-column" ? n : u), [n]), l = G.useCallback(() => s((u) => u === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: s,
    drillIn: o,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const $c = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, bt = {
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
function rv(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...$c, ...e }, a = [];
  return n?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${bt.normal.eot}?#iefix") format("eot"),
       url("${t}${bt.normal.woff2}") format("woff2"),
       url("${t}${bt.normal.woff}") format("woff"),
       url("${t}${bt.normal.ttf}") format("truetype");
  src: url("${t}${bt.normal.eot}");
}`), n?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${bt.bold.eot}?#iefix") format("eot"),
       url("${t}${bt.bold.woff2}") format("woff2"),
       url("${t}${bt.bold.woff}") format("woff"),
       url("${t}${bt.bold.ttf}") format("truetype");
  src: url("${t}${bt.bold.eot}");
}`), a.join(`
`);
}
function av(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...$c, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${bt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${bt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${bt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${bt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const sv = '"Frutiger W01", Arial, Helvetica, sans-serif', ov = "Arial, Helvetica, sans-serif";
async function iv() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  pi as Account,
  Gb as ActionLink,
  wy as AdaptiveDataGrid,
  sg as AnimationDurationFast,
  og as AnimationDurationNormal,
  ig as AnimationDurationSlow,
  dg as AnimationEasingBounce,
  lg as AnimationEasingEaseIn,
  ug as AnimationEasingEaseInOut,
  cg as AnimationEasingEaseOut,
  Xi as AppointmentCard,
  Ty as AreaSeriesPrimitive,
  bp as AriaDataGrid,
  ts as AriaTabsDataGrid,
  wy as AriaTabsDataGridAdaptive,
  Zo as Axis,
  qa as BackLink,
  Iy as BandScalesProvider,
  $y as BarSeriesPrimitive,
  Ol as BorderColorCard,
  Wl as BorderColorCardHover,
  Hl as BorderColorDefault,
  zl as BorderColorError,
  Ul as BorderColorForm,
  Ng as BorderRadiusLarge,
  Cg as BorderRadiusMedium,
  Sg as BorderRadiusNone,
  kg as BorderRadiusSmall,
  yg as BorderWidthCardBottom,
  gg as BorderWidthDefault,
  xg as BorderWidthFormElement,
  bg as BorderWidthFormElementError,
  vg as BorderWidthPanel,
  _g as BorderWidthTableCell,
  wg as BorderWidthTableHeader,
  np as Breadcrumb,
  hu as Breakpoint,
  ob as BreakpointDesktop,
  ib as BreakpointLargeDesktop,
  ab as BreakpointMobile,
  sb as BreakpointTablet,
  ht as Button,
  tx as ButtonBorderRadius,
  ex as ButtonBorderWidth,
  O0 as ButtonPrimaryBackgroundActive,
  H0 as ButtonPrimaryBackgroundDefault,
  W0 as ButtonPrimaryBackgroundDisabled,
  U0 as ButtonPrimaryBackgroundHover,
  G0 as ButtonPrimaryBorderDefault,
  Y0 as ButtonPrimaryBorderFocus,
  z0 as ButtonPrimaryTextDefault,
  V0 as ButtonPrimaryTextDisabled,
  J0 as ButtonSecondaryBackgroundActive,
  q0 as ButtonSecondaryBackgroundDefault,
  K0 as ButtonSecondaryBackgroundHover,
  X0 as ButtonSecondaryBackgroundSolid,
  Q0 as ButtonSecondaryBorderDefault,
  Z0 as ButtonSecondaryTextDefault,
  nx as ButtonShadowSize,
  mi as ButtonSize,
  fc as ButtonSpacingPaddingHorizontalDesktop,
  uc as ButtonSpacingPaddingHorizontalMobile,
  dc as ButtonSpacingPaddingVerticalDesktop,
  cc as ButtonSpacingPaddingVerticalMobile,
  rx as ButtonTypographyWeight,
  hi as ButtonVariant,
  zi as Card,
  ax as CardBackgroundDefault,
  ix as CardBorderBottom,
  sx as CardBorderDefault,
  ox as CardBorderHover,
  fx as CardBorderWidthBottom,
  dx as CardBorderWidthDefault,
  cy as CardGroup,
  uy as CardGroupItem,
  px as CardShadowDefault,
  hx as CardShadowHover,
  mc as CardSpacingHeadingMargin,
  hc as CardSpacingPaddingDesktop,
  pc as CardSpacingPaddingMobile,
  cx as CardTextDescription,
  lx as CardTextHeading,
  ux as CardTextLink,
  dy as CareCard,
  Yb as CharacterCount,
  Ly as ChartEnhancer,
  My as ChartNoScript,
  mh as ChartRoot,
  tu as Checkbox,
  su as Checkboxes,
  Eg as ColorBorderDefault,
  Rg as ColorBorderSecondary,
  d0 as ColorButtonLoginActive,
  c0 as ColorButtonLoginBackground,
  u0 as ColorButtonLoginHover,
  f0 as ColorButtonLoginShadow,
  Vg as ColorButtonPrimaryActive,
  Og as ColorButtonPrimaryBackground,
  zg as ColorButtonPrimaryHover,
  Gg as ColorButtonPrimaryShadow,
  Wg as ColorButtonPrimaryText,
  r0 as ColorButtonReverseActive,
  e0 as ColorButtonReverseBackground,
  n0 as ColorButtonReverseHover,
  a0 as ColorButtonReverseShadow,
  t0 as ColorButtonReverseText,
  Zg as ColorButtonSecondaryActive,
  Yg as ColorButtonSecondaryBackground,
  qg as ColorButtonSecondaryBackgroundSolid,
  Xg as ColorButtonSecondaryBorder,
  Jg as ColorButtonSecondaryHover,
  Qg as ColorButtonSecondaryShadow,
  Kg as ColorButtonSecondaryText,
  i0 as ColorButtonWarningActive,
  s0 as ColorButtonWarningBackground,
  o0 as ColorButtonWarningHover,
  l0 as ColorButtonWarningShadow,
  Bg as ColorError,
  Fg as ColorFocusBackground,
  Ag as ColorFocusText,
  Ug as ColorFormBackground,
  Hg as ColorFormBorder,
  ac as ColorGrey1,
  sc as ColorGrey2,
  oc as ColorGrey3,
  ic as ColorGrey4,
  lc as ColorGrey5,
  Lg as ColorLinkActive,
  Ig as ColorLinkDefault,
  Mg as ColorLinkHover,
  Pg as ColorLinkVisited,
  Yl as ColorPrimaryBlack,
  Vl as ColorPrimaryBlue,
  Kl as ColorPrimaryDarkPink,
  ql as ColorPrimaryGreen,
  Xl as ColorPrimaryPurple,
  Jl as ColorPrimaryRed,
  Gl as ColorPrimaryWhite,
  Zl as ColorPrimaryYellow,
  nc as ColorSecondaryAquaGreen,
  tc as ColorSecondaryOrange,
  Ql as ColorSecondaryPaleYellow,
  rc as ColorSecondaryPink,
  ec as ColorSecondaryWarmYellow,
  jg as ColorTextPrimary,
  $g as ColorTextPrint,
  Tg as ColorTextReverse,
  Dg as ColorTextSecondary,
  Gn as Column,
  gu as ColumnAlign,
  F0 as ComponentBlur,
  j0 as ComponentBreadcrumbChevronMarginLeft,
  D0 as ComponentBreadcrumbChevronMarginRight,
  $0 as ComponentBreadcrumbPaddingTopDesktop,
  T0 as ComponentBreadcrumbPaddingTopMobile,
  g0 as ComponentButtonPaddingDesktopHorizontal,
  m0 as ComponentButtonPaddingDesktopVertical,
  h0 as ComponentButtonPaddingMobileHorizontal,
  p0 as ComponentButtonPaddingMobileVertical,
  x0 as ComponentButtonShadowSize,
  k0 as ComponentCardHeadingMargin,
  S0 as ComponentCardPaddingDesktop,
  _0 as ComponentCardPaddingMobile,
  E0 as ComponentDetails,
  R0 as ComponentExpander,
  w0 as ComponentFormCheckboxLabelPadding,
  v0 as ComponentFormCheckboxSize,
  b0 as ComponentFormInputMinHeight,
  y0 as ComponentFormInputPadding,
  A0 as ComponentLink,
  B0 as ComponentPagination,
  N0 as ComponentPanelPaddingDesktop,
  C0 as ComponentPanelPaddingMobile,
  P0 as ComponentSpread,
  M0 as ComponentSummaryListCellPaddingHorizontal,
  I0 as ComponentSummaryListCellPaddingVertical,
  L0 as ComponentSummaryListRowMargin,
  yi as Container,
  ly as ContentsList,
  $c as DEFAULT_FONT_CONFIG,
  by as DashboardSummaryGrid,
  ny as DateInput,
  cp as Details,
  up as DoDontList,
  Hb as ElevationHigh,
  Rb as ElevationLow,
  Bb as ElevationMedium,
  Eb as ElevationNone,
  ao as ErrorMessage,
  ty as ErrorSummary,
  dp as Expander,
  bt as FRUTIGER_FONT_FILES,
  Ps as Fieldset,
  mu as Float,
  Lb as FocusOutlineOffset,
  Pb as FocusOutlineStyle,
  Mb as FocusOutlineWidth,
  Ab as FocusShadowButton,
  Fb as FocusShadowInput,
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
  Px as FormBorderRadius,
  Mx as FormBorderWidthDefault,
  Lx as FormBorderWidthError,
  Tx as FormErrorTextDefault,
  $x as FormErrorTypographyWeight,
  Ix as FormHintTextDefault,
  mx as FormInputBackgroundDefault,
  xx as FormInputBackgroundDisabled,
  bx as FormInputBackgroundError,
  gx as FormInputBackgroundFocus,
  yx as FormInputBorderDefault,
  _x as FormInputBorderDisabled,
  wx as FormInputBorderError,
  vx as FormInputBorderFocus,
  Sx as FormInputTextDefault,
  Cx as FormInputTextDisabled,
  kx as FormInputTextPlaceholder,
  Nx as FormLabelTextDefault,
  jx as FormLabelTextRequired,
  Dx as FormLabelTypographyWeight,
  yc as FormSpacingCheckboxLabelPadding,
  bc as FormSpacingCheckboxSize,
  xc as FormSpacingInputMinHeight,
  gc as FormSpacingInputPadding,
  oy as GanttChart,
  Xa as Grid,
  cb as GridGutter,
  ub as GridGutterHalf,
  xh as GridLines,
  lb as GridPageWidth,
  fn as GridWidth,
  Si as Header,
  sy as HeaderSSR,
  ju as HeaderSearch,
  Si as HeaderStatic,
  Gt as Heading,
  Ft as HeadingsNhsukHeadingL,
  At as HeadingsNhsukHeadingM,
  Et as HeadingsNhsukHeadingS,
  Pt as HeadingsNhsukHeadingXl,
  Rt as HeadingsNhsukHeadingXs,
  Tu as Hero,
  xi as Hint,
  gy as Images,
  Ms as Input,
  fy as InsetText,
  Ls as Label,
  rb as LayoutColumnActions,
  Qx as LayoutColumnFull,
  eb as LayoutColumnHalf,
  nb as LayoutColumnQuarter,
  tb as LayoutColumnThird,
  Zx as LayoutContainerMaxWidth,
  Dy as Legend,
  gh as LineScalesProvider,
  Qh as LineSeriesPrimitive,
  yu as List,
  vi as MainWrapper,
  Ki as MedicationCard,
  nm as MetricCard,
  Oy as NHSBodyText,
  Wy as NHSBodyTextLarge,
  zy as NHSBodyTextSmall,
  Ey as NHSHeading1,
  Ry as NHSHeading2,
  By as NHSHeading3,
  Hy as NHSHeading4,
  Uy as NHSHeading5,
  Vy as NHSLedeText,
  Gy as NHSLedeTextSmall,
  ay as NHSThemeProvider,
  ov as NHS_FALLBACK_FONT_STACK,
  sv as NHS_FONT_STACK,
  oh as NavigationSplitView,
  Sy as PageTemplate,
  iy as Pagination,
  rp as Panel,
  Bt as ParagraphsBody,
  Ht as ParagraphsBodyLarge,
  Ut as ParagraphsBodySmall,
  Ot as ParagraphsLedeText,
  Wt as ParagraphsLedeTextSmall,
  qi as PatientCard,
  ch as ProductRoadmap,
  qb as Radios,
  Xb as RadiosServer,
  wy as ResponsiveDataGrid,
  _y as ResponsiveDataGridDemo,
  pn as Row,
  Fy as SPC,
  tg as SPCChart,
  Py as SPCMetricCard,
  mr as Select,
  uu as SelectOption,
  Nb as ShadowButtonDefault,
  Tb as ShadowButtonFocus,
  jb as ShadowButtonSecondary,
  Db as ShadowButtonWarning,
  $b as ShadowCardDefault,
  Ib as ShadowCardHover,
  Jx as SizeButtonMinHeightDesktop,
  Kx as SizeButtonMinHeightMobile,
  Ox as SizeFormControlLarge,
  Ux as SizeFormControlMedium,
  Hx as SizeFormControlSmall,
  qx as SizeFormInputWidth2xl,
  Xx as SizeFormInputWidth3xl,
  Gx as SizeFormInputWidthLg,
  Vx as SizeFormInputWidthMd,
  zx as SizeFormInputWidthSm,
  Yx as SizeFormInputWidthXl,
  Wx as SizeFormInputWidthXs,
  Rx as SizeIconExtraLarge,
  Ex as SizeIconLarge,
  Ax as SizeIconMedium,
  Bx as SizeIconNhsDefault,
  Fx as SizeIconSmall,
  Wi as SkipLink,
  xy as SlotMatrix,
  yy as SortStatusControl,
  vc as Spacing0,
  wc as Spacing1,
  _c as Spacing2,
  Sc as Spacing3,
  kc as Spacing4,
  Cc as Spacing5,
  Nc as Spacing6,
  jc as Spacing7,
  Dc as Spacing8,
  Tc as Spacing9,
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
  Ns as SpacingResponsive8Mobile,
  js as SpacingResponsive8Tablet,
  Ds as SpacingResponsive9Mobile,
  Ts as SpacingResponsive9Tablet,
  Kb as SpacingUtilities,
  Sb as StateDisabledBackground,
  kb as StateDisabledBorder,
  Cb as StateDisabledText,
  db as StateErrorBackground,
  fb as StateErrorBorder,
  pb as StateErrorText,
  vb as StateInfoBackground,
  wb as StateInfoBorder,
  _b as StateInfoText,
  hb as StateSuccessBackground,
  mb as StateSuccessBorder,
  gb as StateSuccessText,
  xb as StateWarningBackground,
  bb as StateWarningBorder,
  yb as StateWarningText,
  xp as SummaryCard,
  py as SummaryList,
  Xt as Table,
  hy as Tabs,
  ze as Tag,
  fp as TaskList,
  iu as Textarea,
  jy as TooltipOverlay,
  Zh as TooltipProvider,
  ky as TransactionalPageTemplate,
  fg as TransitionButtonDefault,
  pg as TransitionButtonShadow,
  mg as TransitionCardHover,
  hg as TransitionInputFocus,
  Ny as VisibilityProvider,
  Ji as VitalsCard,
  ey as WIDTH_FRACTIONS,
  my as WarningCallout,
  nl as WidthContainer,
  Zb as WidthUtilities,
  iv as checkFrutigerLoaded,
  Vs as createGenericTabsConfig,
  vy as createTCHTabsConfig,
  rv as generateFrutigerFontFace,
  Ay as getResponsiveStyles,
  Jb as getSpacingClass,
  Qb as getWidthClass,
  av as preloadFrutigerFonts,
  Tp as tchDataConfig,
  qy as useColors,
  Zy as useComponentSpacing,
  Qy as useNHSHeadings,
  ev as useNHSParagraphs,
  ry as useNHSTheme,
  tv as useNHSTypographySystem,
  nv as useNavigationSplitDrill,
  rh as useNavigationSplitUrlSync,
  al as useNhsFdpBreakpoints,
  Jy as useResponsiveSpacing,
  Cy as useResponsiveValue,
  Xy as useSpacing,
  Im as useSpc,
  Yy as useTokens,
  Ky as useTypography
};
//# sourceMappingURL=index.esm.js.map
