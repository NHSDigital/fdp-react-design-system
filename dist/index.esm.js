import * as W from "react";
import gt, { useState as Fe, useEffect as Oe, useCallback as xe, useRef as Be, createElement as gi, useMemo as Te, useContext as xi, createContext as bi, forwardRef as Hn, useImperativeHandle as yi, useReducer as vi, memo as Gc, useId as wr } from "react";
import { createPortal as Yc } from "react-dom";
function Vc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pr = { exports: {} }, On = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function Zc() {
  if (ro) return On;
  ro = 1;
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
var ao;
function Jc() {
  return ao || (ao = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(z) {
      if (z == null) return null;
      if (typeof z == "function")
        return z.$$typeof === I ? null : z.displayName || z.name || null;
      if (typeof z == "string") return z;
      switch (z) {
        case m:
          return "Fragment";
        case L:
          return "Profiler";
        case g:
          return "StrictMode";
        case b:
          return "Suspense";
        case j:
          return "SuspenseList";
        case x:
          return "Activity";
      }
      if (typeof z == "object")
        switch (typeof z.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), z.$$typeof) {
          case y:
            return "Portal";
          case C:
            return (z.displayName || "Context") + ".Provider";
          case N:
            return (z._context.displayName || "Context") + ".Consumer";
          case v:
            var X = z.render;
            return z = z.displayName, z || (z = X.displayName || X.name || "", z = z !== "" ? "ForwardRef(" + z + ")" : "ForwardRef"), z;
          case M:
            return X = z.displayName || null, X !== null ? X : e(z.type) || "Memo";
          case w:
            X = z._payload, z = z._init;
            try {
              return e(z(X));
            } catch {
            }
        }
      return null;
    }
    function t(z) {
      return "" + z;
    }
    function n(z) {
      try {
        t(z);
        var X = !1;
      } catch {
        X = !0;
      }
      if (X) {
        X = console;
        var O = X.error, ae = typeof Symbol == "function" && Symbol.toStringTag && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return O.call(
          X,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ae
        ), t(z);
      }
    }
    function a(z) {
      if (z === m) return "<>";
      if (typeof z == "object" && z !== null && z.$$typeof === w)
        return "<...>";
      try {
        var X = e(z);
        return X ? "<" + X + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var z = _.A;
      return z === null ? null : z.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(z) {
      if (D.call(z, "key")) {
        var X = Object.getOwnPropertyDescriptor(z, "key").get;
        if (X && X.isReactWarning) return !1;
      }
      return z.key !== void 0;
    }
    function l(z, X) {
      function O() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          X
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(z, "key", {
        get: O,
        configurable: !0
      });
    }
    function c() {
      var z = e(this.type);
      return k[z] || (k[z] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), z = this.props.ref, z !== void 0 ? z : null;
    }
    function d(z, X, O, ae, Y, V, fe, pe) {
      return O = V.ref, z = {
        $$typeof: p,
        type: z,
        key: X,
        props: V,
        _owner: Y
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(z, "ref", {
        enumerable: !1,
        get: c
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
        value: fe
      }), Object.defineProperty(z, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: pe
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    }
    function u(z, X, O, ae, Y, V, fe, pe) {
      var de = X.children;
      if (de !== void 0)
        if (ae)
          if (F(de)) {
            for (ae = 0; ae < de.length; ae++)
              f(de[ae]);
            Object.freeze && Object.freeze(de);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(de);
      if (D.call(X, "key")) {
        de = e(z);
        var K = Object.keys(X).filter(function(ue) {
          return ue !== "key";
        });
        ae = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", J[de + ae] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ae,
          de,
          K,
          de
        ), J[de + ae] = !0);
      }
      if (de = null, O !== void 0 && (n(O), de = "" + O), i(X) && (n(X.key), de = "" + X.key), "key" in X) {
        O = {};
        for (var te in X)
          te !== "key" && (O[te] = X[te]);
      } else O = X;
      return de && l(
        O,
        typeof z == "function" ? z.displayName || z.name || "Unknown" : z
      ), d(
        z,
        de,
        V,
        Y,
        s(),
        O,
        fe,
        pe
      );
    }
    function f(z) {
      typeof z == "object" && z !== null && z.$$typeof === p && z._store && (z._store.validated = 1);
    }
    var h = gt, p = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), C = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), x = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), _ = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, F = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(z) {
        return z();
      }
    };
    var $, k = {}, E = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), ie = S(a(o)), J = {};
    Un.Fragment = m, Un.jsx = function(z, X, O, ae, Y) {
      var V = 1e4 > _.recentlyCreatedOwnerStacks++;
      return u(
        z,
        X,
        O,
        !1,
        ae,
        Y,
        V ? Error("react-stack-top-frame") : E,
        V ? S(a(z)) : ie
      );
    }, Un.jsxs = function(z, X, O, ae, Y) {
      var V = 1e4 > _.recentlyCreatedOwnerStacks++;
      return u(
        z,
        X,
        O,
        !0,
        ae,
        Y,
        V ? Error("react-stack-top-frame") : E,
        V ? S(a(z)) : ie
      );
    };
  })()), Un;
}
var so;
function qc() {
  return so || (so = 1, process.env.NODE_ENV === "production" ? pr.exports = Zc() : pr.exports = Jc()), pr.exports;
}
var r = qc(), ja = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var oo;
function Xc() {
  return oo || (oo = 1, (function(e) {
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
  })(ja)), ja.exports;
}
var Qc = Xc();
const ye = /* @__PURE__ */ Vc(Qc), Kb = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...s
}) => {
  const o = ye(
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
}, wi = ({
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
    ) : null, l = o.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text, c = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      i,
      l
    ] });
    return o.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: o.href,
        children: c
      }
    ) : o.action ? /* @__PURE__ */ r.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: o.action,
        method: o.method || "post",
        children: /* @__PURE__ */ r.jsx("button", { className: "nhsuk-account__button", type: "submit", role: "button", children: c })
      }
    ) : /* @__PURE__ */ r.jsx("span", { children: c });
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
        (o, i) => o && /* @__PURE__ */ r.jsx(
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
var Si = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Si || {}), _i = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(_i || {});
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
const { forwardRef: ed, useCallback: rn, useState: Ma } = W;
function td(e, t) {
  const {
    children: n,
    variant: a = Si.Primary,
    size: s = _i.Default,
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [d, u] = Ma(!1), [f, h] = Ma(!1), [p, y] = Ma(!1), m = Kc({
    variant: a,
    size: s,
    fullWidth: o,
    className: i,
    preventDoubleClick: l,
    href: "href" in c ? c.href : void 0
  }), g = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", L = {
    ...d && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...p && { "data-focused": "true" },
    ...g && { "data-disabled": "true" }
  }, N = rn(
    () => !g && u(!0),
    [g]
  ), C = rn(() => u(!1), []), v = rn(
    () => !g && h(!0),
    [g]
  ), b = rn(() => {
    h(!1), u(!1);
  }, []), j = rn(() => y(!0), []), M = rn(() => y(!1), []), w = rn(
    (de) => {
      de.key === " " && ("href" in c || de.currentTarget.getAttribute("role") === "button") && (de.preventDefault(), de.currentTarget.click());
    },
    [c]
  ), x = rn(
    (de) => {
      if (l) {
        const K = de.currentTarget;
        if (K.getAttribute("data-processing") === "true") {
          de.preventDefault();
          return;
        }
        K.setAttribute("data-processing", "true"), setTimeout(() => {
          K.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in c && c.href) {
    const {
      id: de,
      style: K,
      title: te,
      ["aria-label"]: ue,
      ["aria-describedby"]: G,
      ["aria-labelledby"]: ce,
      tabIndex: le,
      ...he
    } = c, A = c;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: A.href,
        target: A.target,
        rel: A.rel,
        className: m.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...L,
        ...l && { "data-prevent-double-click": "true" },
        ...he,
        onKeyDown: (P) => {
          A.onKeyDown?.(P), w(P);
        },
        onClick: (P) => {
          A.onClick?.(P), x(P);
        },
        onMouseDown: (P) => {
          A.onMouseDown?.(P), N();
        },
        onMouseUp: (P) => {
          A.onMouseUp?.(P), C();
        },
        onMouseEnter: (P) => {
          A.onMouseEnter?.(P), v();
        },
        onMouseLeave: (P) => {
          A.onMouseLeave?.(P), b();
        },
        onFocus: (P) => {
          A.onFocus?.(P), j();
        },
        onBlur: (P) => {
          A.onBlur?.(P), M();
        },
        "aria-disabled": A["aria-disabled"],
        ...A["aria-disabled"] === "true" && { tabIndex: -1 },
        id: de,
        style: K,
        title: te,
        "aria-label": ue,
        "aria-describedby": G,
        "aria-labelledby": ce,
        tabIndex: le,
        children: n
      }
    );
  }
  const {
    id: I,
    style: _,
    title: D,
    ["aria-label"]: F,
    ["aria-describedby"]: S,
    ["aria-labelledby"]: $,
    tabIndex: k,
    name: E,
    value: ie,
    form: J,
    formAction: z,
    formEncType: X,
    formMethod: O,
    formNoValidate: ae,
    formTarget: Y,
    autoFocus: V,
    ...fe
  } = c, pe = c;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: pe.type || "button",
      disabled: pe.disabled,
      className: m.classes,
      "data-module": "nhs-button",
      ...L,
      ...l && { "data-prevent-double-click": "true" },
      ...pe.disabled && { "aria-disabled": "true" },
      ...fe,
      onKeyDown: (de) => {
        pe.onKeyDown?.(de), w(de);
      },
      onClick: (de) => {
        pe.onClick?.(de), x(de);
      },
      onMouseDown: (de) => {
        pe.onMouseDown?.(de), N();
      },
      onMouseUp: (de) => {
        pe.onMouseUp?.(de), C();
      },
      onMouseEnter: (de) => {
        pe.onMouseEnter?.(de), v();
      },
      onMouseLeave: (de) => {
        pe.onMouseLeave?.(de), b();
      },
      onFocus: (de) => {
        pe.onFocus?.(de), j();
      },
      onBlur: (de) => {
        pe.onBlur?.(de), M();
      },
      id: I,
      style: _,
      title: D,
      "aria-label": F,
      "aria-describedby": S,
      "aria-labelledby": $,
      tabIndex: k,
      name: E,
      value: ie,
      form: J,
      formAction: z,
      formEncType: X,
      formMethod: O,
      formNoValidate: ae,
      formTarget: Y,
      autoFocus: V,
      children: n
    }
  );
}
const pt = ed(td);
pt.displayName = "Button";
const Ya = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = ye(
    "nhsuk-back-link",
    a
  ), c = ye(
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: s === "button" ? /* @__PURE__ */ r.jsx(
    "button",
    {
      className: c,
      onClick: o,
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
function nd(e) {
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
const We = ({
  text: e,
  html: t,
  children: n,
  color: a = "default",
  noBorder: s = !1,
  closable: o = !1,
  onClose: i,
  disabled: l = !1,
  className: c,
  ...d
}) => {
  const u = nd({ color: a, noBorder: s, closable: o, disabled: l, className: c }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ r.jsxs("strong", { className: u.classes, ...d, children: [
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
}, rd = ({
  id: e,
  name: t,
  checked: n,
  defaultChecked: a = !1,
  disabled: s = !1,
  value: o = "true",
  hint: i,
  errorMessage: l,
  className: c,
  children: d,
  onChange: u,
  onBlur: f,
  onFocus: h,
  attributes: p,
  ...y
}) => {
  const [m, g] = Fe(a), L = n !== void 0, N = L ? n : m;
  Oe(() => {
    L || g(a);
  }, [a, L]);
  const C = (w) => {
    const x = w.target.checked;
    L || g(x), u?.(x, w);
  }, v = i ? `${e}-hint` : void 0, b = l ? `${e}-error` : void 0, j = [v, b].filter(Boolean).join(" ") || void 0, M = ye(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ r.jsx("div", { className: M, ...y, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: N,
        disabled: s,
        onChange: C,
        onBlur: f,
        onFocus: h,
        "aria-describedby": j,
        ...p
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: d }),
    i && /* @__PURE__ */ r.jsx("div", { id: v, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: b, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
rd.displayName = "Checkbox";
function ki(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const $s = ({
  id: e,
  name: t,
  type: n = "text",
  value: a,
  defaultValue: s,
  placeholder: o,
  disabled: i = !1,
  readOnly: l = !1,
  required: c = !1,
  hasError: d = !1,
  describedBy: u,
  className: f,
  width: h = "full",
  inputMode: p,
  autoComplete: y,
  maxLength: m,
  minLength: g,
  pattern: L,
  step: N,
  min: C,
  max: v,
  showValueLabels: b = !1,
  showCurrentValue: j = !1,
  valueLabels: M,
  onChange: w,
  onBlur: x,
  onFocus: I,
  onKeyDown: _,
  ...D
}) => {
  const [F, S] = Fe(a || s || (n === "range" ? C || "0" : ""));
  Oe(() => {
    a !== void 0 && S(a);
  }, [a]);
  const $ = (Y) => {
    const V = Y.target;
    S(V.value), ("type" in Y && Y.nativeEvent || Y.type === "keydown") && w?.(Y);
  }, { classes: k, isRange: E } = ki({ type: n, hasError: d, width: h, className: f }), ie = a !== void 0, J = {
    id: e,
    name: t,
    type: n,
    placeholder: o,
    disabled: i,
    readOnly: l,
    required: c,
    "aria-describedby": u,
    inputMode: p,
    autoComplete: y,
    maxLength: m,
    minLength: g,
    pattern: L,
    step: N,
    min: C,
    max: v,
    onChange: $,
    onBlur: x,
    onFocus: I,
    onKeyDown: (Y) => {
      if (E && /[0-9]/.test(Y.key)) {
        const V = (F?.toString() || "") + Y.key;
        Y.target.value = V, $(Y);
      }
      _?.(Y);
    },
    ...D
  }, z = !ie && s !== void 0 ? { defaultValue: s } : {}, X = ie ? { value: a } : {}, O = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: k,
      ...X,
      ...z,
      "data-current-value": F,
      ...J
    }
  ), ae = E ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    b && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: M?.min || C || "0" }),
      O(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: M?.max || v || "100" })
    ] }),
    !b && O(),
    j && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      M?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: F })
    ] }) })
  ] }) : null;
  return E ? ae : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: k,
      id: e,
      name: t,
      type: n,
      value: a,
      ...a === void 0 && s !== void 0 ? { defaultValue: s } : {},
      placeholder: o,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": u,
      inputMode: p,
      autoComplete: y,
      maxLength: m,
      minLength: g,
      pattern: L,
      step: N,
      min: C,
      max: v,
      onChange: w,
      onBlur: x,
      onFocus: I,
      onKeyDown: _,
      ...D
    }
  );
};
function ad(e) {
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
const As = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = ad({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...o, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s });
};
function sd(e) {
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
const Es = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...s
}) => {
  const o = sd({
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
function od(e) {
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
const id = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: a,
  isPageHeading: s = !1,
  legendSize: o = "l",
  hint: i,
  errorMessage: l,
  className: c = "",
  small: d = !1,
  onChange: u,
  fieldsetAttributes: f,
  attributes: h,
  ...p
}) => {
  const [y, m] = Fe(
    e.filter((w) => w.checked).map((w) => w.value)
  ), g = n || t, L = i ? `${g}-hint` : void 0, N = l ? `${g}-error` : void 0, C = [L, N].filter(Boolean).join(" ") || void 0, v = (w, x) => {
    let I;
    x ? I = [...y, w] : I = y.filter((_) => _ !== w), m(I), u?.(I);
  }, b = () => e.map((w, x) => {
    const I = `${g}-${x + 1}`, _ = `${I}-conditional`, D = y.includes(w.value), F = w.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: I,
          name: t,
          type: "checkbox",
          value: w.value,
          checked: D,
          disabled: F,
          onChange: (S) => v(w.value, S.target.checked),
          "aria-describedby": w.hint ? `${I}-hint` : C,
          ...w.conditional && {
            "aria-controls": _,
            "aria-expanded": D ? "true" : "false"
          },
          ...w.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: I, children: w.text }),
      w.hint && /* @__PURE__ */ r.jsx("div", { id: `${I}-hint`, className: "nhsuk-checkboxes__hint", children: w.hint }),
      w.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: ye("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !D
          }),
          id: _,
          children: typeof w.conditional == "object" && w.conditional !== null && "label" in w.conditional && "id" in w.conditional && "name" in w.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            w.conditional.label && /* @__PURE__ */ r.jsx(As, { htmlFor: w.conditional.id, children: w.conditional.label }),
            /* @__PURE__ */ r.jsx($s, { ...w.conditional })
          ] }) : w.conditional
        }
      )
    ] }, w.value);
  }), { classes: j, formGroupClasses: M } = od({ small: d, className: c, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: M, ...h, ...p, children: /* @__PURE__ */ r.jsxs(
    Es,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: C,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: L, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: N, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: j, children: b() })
      ]
    }
  ) });
};
id.displayName = "Checkboxes";
function ld(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const cd = ({
  id: e,
  name: t,
  value: n,
  defaultValue: a,
  placeholder: s,
  disabled: o = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: c = !1,
  describedBy: d,
  className: u,
  rows: f = 5,
  cols: h,
  maxLength: p,
  minLength: y,
  wrap: m = "soft",
  resize: g = "vertical",
  autoComplete: L,
  spellCheck: N,
  onChange: C,
  onBlur: v,
  onFocus: b,
  onKeyDown: j,
  ...M
}) => {
  const { classes: w, describedBy: x } = ld({ hasError: c, resize: g, className: u, describedBy: d });
  return /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: w,
      id: e,
      name: t,
      value: n,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": x,
      rows: f,
      cols: h,
      maxLength: p,
      minLength: y,
      wrap: m,
      autoComplete: L,
      spellCheck: N,
      onChange: C,
      onBlur: v,
      onFocus: b,
      onKeyDown: j,
      ...M
    }
  );
};
function dd(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Ci = ({
  id: e,
  className: t,
  children: n,
  ...a
}) => {
  const s = dd({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: s.classes, id: s.id, ...a, children: n });
}, ey = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: a = 75,
  name: s,
  value: o,
  defaultValue: i,
  rows: l,
  className: c,
  countMessage: d,
  onCountChange: u,
  onChange: f,
  ...h
}) => {
  const p = o ?? i ?? "", [y, m] = Fe(p), [g, L] = Fe(0), [N, C] = Fe(!1), [v, b] = Fe(!1), j = xe((D) => n ? D.trim() === "" ? 0 : D.trim().split(/\s+/).length : D.length, [n]);
  Oe(() => {
    const D = j(y), F = t || n || 0, S = F - D, $ = Math.floor(F * (a / 100));
    L(S), C(D > F), b(D >= $ || D > F), u && u(D, S);
  }, [y, t, n, a, j, u]);
  const M = (D) => {
    const F = D.target.value;
    m(F), f && f(D);
  }, w = () => {
    const D = t || n || 0, F = n ? "word" : "character", S = n ? "words" : "characters";
    if (!v)
      return `You can enter up to ${D} ${D === 1 ? F : S}`;
    if (N) {
      const $ = Math.abs(g);
      return `You have ${$} ${$ === 1 ? F : S} too many`;
    } else
      return `You have ${g} ${g === 1 ? F : S} remaining`;
  }, x = ye(
    "nhsuk-character-count",
    c
  ), I = ye(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !v,
      "nhsuk-error-message": N
    },
    d?.classes
  ), _ = ye(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": N
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: x,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": n,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ r.jsx(
          cd,
          {
            id: e,
            name: s,
            value: o !== void 0 ? y : void 0,
            defaultValue: o === void 0 ? i ?? y : void 0,
            rows: l,
            className: _,
            onChange: M,
            "aria-describedby": `${e}-info`,
            "aria-invalid": N || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ci,
          {
            id: `${e}-info`,
            className: I,
            role: "status",
            "aria-live": "polite",
            children: w()
          }
        )
      ]
    }
  );
};
function ud(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const fd = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: s,
  ...o
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
      ...o,
      children: s
    }
  );
}, pd = ({
  id: e,
  name: t,
  ariaLabel: n,
  value: a,
  defaultValue: s,
  disabled: o = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: c,
  className: d,
  multiple: u = !1,
  size: f,
  autoComplete: h,
  options: p,
  children: y,
  onChange: m,
  onBlur: g,
  onFocus: L,
  ...N
}) => {
  const { classes: C } = ud({ hasError: l, className: d }), v = () => p ? p.map((j, M) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: j.value,
      disabled: j.disabled,
      "data-initial-selected": j.selected || void 0,
      children: j.text
    },
    `${j.value}-${M}`
  )) : null, b = s === void 0 && a === void 0 && p ? p.find((j) => j.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: C,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: s !== void 0 ? s : b,
      disabled: o,
      required: i,
      "aria-describedby": c,
      multiple: u,
      size: f,
      autoComplete: h,
      onChange: m,
      onBlur: g,
      onFocus: L,
      ...N,
      children: y || v()
    }
  );
}, Sr = pd;
Sr.Option = fd;
function hd(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function Ni(e, {
  variant: t,
  selectedValue: n,
  enableBehaviourAttr: a,
  handleChange: s,
  handleBlur: o,
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
    name: y,
    hasError: m = !1,
    describedBy: g,
    className: L,
    size: N = "normal",
    inline: C = !1,
    options: v,
    ...b
  } = p, { classes: j, describedBy: M } = hd({ hasError: m, size: N, inline: C, className: L, describedBy: g });
  return /* @__PURE__ */ r.jsx(Es, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: j,
      ...b,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: v.map((w, x) => {
        const I = `${y}-${x}`, _ = w.conditional ? `${I}-conditional` : void 0, D = n === w.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: I,
              name: y,
              type: "radio",
              value: w.value,
              disabled: w.disabled,
              ...t === "client" ? {
                checked: D,
                onChange: s,
                onBlur: o,
                onFocus: i,
                onKeyDown: l,
                ref: (F) => {
                  F && c && (c.current[x] = F);
                }
              } : {
                defaultChecked: D,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": M
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: I, children: w.text }),
          w.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: w.hint }),
          w.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: ye("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !D
              }),
              id: _,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof w.conditional == "object" && w.conditional !== null && "label" in w.conditional && "id" in w.conditional && "name" in w.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                w.conditional.label && /* @__PURE__ */ r.jsx(
                  As,
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
const ty = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o }) => {
  const [i, l] = Fe(e || t || ""), c = Be([]), d = Be(i), u = (p) => {
    const y = p.target.value;
    y !== d.current && (d.current = y, l(y), n?.(p));
  }, f = (p) => {
    s?.(p);
  }, h = xe((p) => {
    const { key: y } = p;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(y)) return;
    p.preventDefault();
    const m = c.current.filter((C) => C && !C.disabled), g = m.indexOf(p.currentTarget);
    if (g === -1) return;
    let L = g;
    ["ArrowDown", "ArrowRight"].includes(y) ? L = (g + 1) % m.length : ["ArrowUp", "ArrowLeft"].includes(y) && (L = (g - 1 + m.length) % m.length);
    const N = m[L];
    N && (N.focus(), N.checked || N.click());
  }, []);
  return Ni(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o },
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
      InputComponent: $s
    }
  );
};
function md(e) {
  const {
    id: t,
    name: n,
    type: a = "text",
    value: s,
    defaultValue: o,
    placeholder: i,
    disabled: l = !1,
    readOnly: c = !1,
    required: d = !1,
    hasError: u = !1,
    describedBy: f,
    className: h,
    width: p = "full",
    inputMode: y,
    autoComplete: m,
    maxLength: g,
    minLength: L,
    pattern: N,
    step: C,
    min: v,
    max: b,
    showValueLabels: j = !1,
    showCurrentValue: M = !1,
    valueLabels: w,
    // Strip interactive handlers in server variant
    onChange: x,
    onBlur: I,
    onFocus: _,
    onKeyDown: D,
    ...F
  } = e, { classes: S, isRange: $ } = ki({
    type: a,
    hasError: u,
    width: p,
    className: h
  }), k = {
    id: t,
    name: n,
    type: a,
    placeholder: i,
    disabled: l,
    readOnly: c,
    required: d,
    "aria-describedby": f,
    inputMode: y,
    autoComplete: m,
    maxLength: g,
    minLength: L,
    pattern: N,
    step: C,
    min: v,
    max: b,
    ...F
  };
  if ($) {
    const E = s ?? o ?? (typeof v < "u" ? String(v) : "0"), ie = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: S,
        ...s !== void 0 ? { value: s } : {},
        ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
        "data-current-value": E,
        ...k
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      j ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: w?.min || v || "0" }),
        ie,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: w?.max || b || "100" })
      ] }) : ie,
      M && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        w?.current || "Current value:",
        " ",
        /* @__PURE__ */ r.jsx("strong", { children: E })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      className: S,
      ...s !== void 0 ? { value: s } : {},
      ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
      ...k
    }
  );
}
const ny = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return Ni(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: md
    }
  );
};
var xn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(xn || {}), gd = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(gd || {}), xd = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(xd || {}), bd = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(bd || {});
const ji = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: s,
  ...o
}) => {
  const i = ye(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), l = a ? { maxWidth: a, ...s || {} } : s;
  return /* @__PURE__ */ r.jsx("div", { className: i, style: l, ...o, children: e });
}, on = ({
  children: e,
  className: t,
  style: n,
  align: a,
  rowGap: s,
  ...o
}) => {
  const i = ye(
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
  style: c,
  align: d,
  ...u
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
      [`nhsuk-u-${s}-desktop`]: !!s,
      // Grid positioning
      [`nhsuk-grid-column-start-${o}`]: o && o >= 1 && o <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...d ? { [`nhsuk-grid-align-${d}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: c, ...u, children: e });
}, Va = ({
  children: e,
  className: t,
  style: n,
  rowGap: a = 8,
  ...s
}) => {
  const o = gt.Children.toArray(e), i = o[0], l = gt.isValidElement(i) && (i.type === on || typeof i.props == "object" && i.props && "className" in i.props && typeof i.props.className == "string" && i.props.className.includes("nhsuk-grid-row")), c = typeof a == "number" ? `${a}px` : a;
  let d = e;
  if (l)
    d = o.map((u, f) => {
      if (!gt.isValidElement(u)) return u;
      const h = u, p = h.props || {}, y = typeof p.className == "string" ? p.className : "";
      if (!(h.type === on || y.includes("nhsuk-grid-row"))) return u;
      const g = p.rowGap, L = g !== void 0 ? typeof g == "number" ? `${g}px` : g : c, N = f === 0 ? void 0 : L;
      if (!N) return u;
      const C = { ...p.style || {}, marginTop: N };
      return gt.cloneElement(h, { style: C });
    });
  else {
    const u = { marginTop: void 0 };
    d = /* @__PURE__ */ r.jsx(on, { style: u, children: e });
  }
  return /* @__PURE__ */ r.jsx(ji, { className: t, style: n, ...s, children: d });
}, yd = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: s,
  role: o,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), d = ye(
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
  return /* @__PURE__ */ r.jsx(c, { className: d, role: o, ...l, children: e });
}, vd = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = ye("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, wd = yd;
wd.Item = vd;
const ry = ({
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
}, ay = {
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
}, sy = ({
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
}, oy = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, iy = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Mi = ({
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
function Sd(e) {
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
function _d(e) {
  const t = e.level ?? Sd(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const Xt = ({ level: e, className: t, text: n, html: a, children: s, size: o, marginBottom: i, ...l }) => {
  const c = _d({ level: e, size: o, className: t, marginBottom: i }), d = s || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return gi(c.tag, { className: c.classes, style: c.style, ...l }, d);
};
function kd(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const io = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...s }) => {
  const o = kd({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: o.classes, id: o.id, ...s, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      o.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, ly = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: s,
  className: o,
  children: i,
  ...l
}) => {
  const c = Be(null);
  Oe(() => {
    c.current && c.current.focus();
  }, []);
  const d = ye(
    "nhsuk-error-summary",
    o
  ), u = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, h = (p) => {
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
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((p, y) => /* @__PURE__ */ r.jsx("li", { children: h(p) }, y)) })
        ] })
      ]
    }
  );
}, cy = ({
  id: e,
  className: t,
  items: n,
  namePrefix: a,
  values: s = {},
  fieldset: o,
  hint: i,
  errorMessage: l,
  onChange: c,
  ...d
}) => {
  const [u, f] = Fe(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [h, p] = Fe({}), y = ($) => $ % 4 === 0 && $ % 100 !== 0 || $ % 400 === 0, m = ($, k) => {
    const E = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return $ === 2 && y(k) ? 29 : E[$ - 1];
  }, g = ($, k, E) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Day must be a number";
    const ie = parseInt($, 10);
    if (ie < 1 || ie > 31) return "Day must be between 1 and 31";
    if (k && E) {
      const J = parseInt(k, 10), z = parseInt(E, 10);
      if (!isNaN(J) && !isNaN(z) && J >= 1 && J <= 12) {
        const X = m(J, z);
        if (ie > X)
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
          ][J - 1]} ${z} only has ${X} days`;
      }
    }
  }, L = ($) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Month must be a number";
    const k = parseInt($, 10);
    if (k < 1 || k > 12) return "Month must be between 1 and 12";
  }, N = ($) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Year must be a number";
    const k = parseInt($, 10), E = (/* @__PURE__ */ new Date()).getFullYear();
    if (k < 1900 || k > E + 10)
      return `Year must be between 1900 and ${E + 10}`;
  }, C = ($, k, E) => {
    if (!$ || !k || !E) return;
    const ie = parseInt($, 10), J = parseInt(k, 10), z = parseInt(E, 10);
    if (isNaN(ie) || isNaN(J) || isNaN(z) || J < 1 || J > 12 || z < 1900) return;
    const X = m(J, z);
    ie < 1 || ie > X;
  }, v = xe(($, k) => {
    const E = {
      ...u,
      [$]: k
    };
    f(E), c && c(E);
  }, [u, c]), b = xe(($) => {
    const k = u[$];
    let E;
    if ($ === "day")
      E = g(k, u.month, u.year);
    else if ($ === "month") {
      if (E = L(k), !E && u.day) {
        const ie = g(u.day, k, u.year);
        p((J) => ({
          ...J,
          day: ie
        }));
      }
    } else if ($ === "year" && (E = N(k), !E && u.day && u.month)) {
      const ie = g(u.day, u.month, k);
      p((J) => ({
        ...J,
        day: ie
      }));
    }
    if (p((ie) => ({
      ...ie,
      [$]: E
    })), u.day && u.month && u.year) {
      const ie = C(
        $ === "day" ? k : u.day,
        $ === "month" ? k : u.month,
        $ === "year" ? k : u.year
      );
      ie && p((J) => ({
        ...J,
        day: ie
      }));
    }
  }, [u, g, L, N, C]), j = Te(() => [
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
  ], []), M = n || j;
  let w = o?.describedBy || "";
  const x = i ? `${e}-hint` : "", I = l ? `${e}-error` : "";
  x && (w = w ? `${w} ${x}` : x), I && (w = w ? `${w} ${I}` : I);
  const _ = Object.values(h).some(($) => $), D = ye(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || _
    }
  ), F = ye(
    "nhsuk-date-input",
    t
  ), S = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      Ci,
      {
        id: x,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      io,
      {
        id: I,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(h).map(
      ([$, k]) => k ? /* @__PURE__ */ r.jsxs(
        io,
        {
          id: `${e}-${$}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            k
          ]
        },
        `${$}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: F, id: e, "data-testid": "date-input", ...d, children: M.map(($) => {
      const k = $.id || `${e}-${$.name}`, E = a ? `${a}[${$.name}]` : $.name, ie = $.label || $.name.charAt(0).toUpperCase() + $.name.slice(1), J = h[$.name], z = u[$.name] || "";
      let X = w;
      if (J) {
        const O = `${e}-${$.name}-error`;
        X = X ? `${X} ${O}` : O;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          As,
          {
            htmlFor: k,
            className: "nhsuk-date-input__label",
            children: ie
          }
        ),
        /* @__PURE__ */ r.jsx(
          $s,
          {
            id: k,
            name: E,
            value: z,
            className: ye("nhsuk-date-input__input", $.classes, {
              "nhsuk-input--error": J
            }),
            inputMode: $.inputmode,
            autoComplete: $.autocomplete,
            pattern: $.pattern,
            "aria-describedby": X || void 0,
            hasError: !!J,
            onChange: (O) => v($.name, O.target.value),
            onBlur: () => b($.name)
          }
        )
      ] }, $.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: D, children: o ? /* @__PURE__ */ r.jsx(
    Es,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: w || void 0,
      children: S()
    }
  ) : S() });
}, Ii = {
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
}, Di = bi(Ii), Cd = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Ii, ...t };
  return /* @__PURE__ */ r.jsx(Di.Provider, { value: n, children: e });
}, dy = () => {
  const e = xi(Di);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Nd() {
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
function jd() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Nd(), document.head.appendChild(e);
}
const uy = ({ children: e, theme: t }) => (Oe(() => {
  jd();
}, []), /* @__PURE__ */ r.jsx(Cd, { theme: t, children: e })), Md = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", Id = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", Dd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", Td = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", Ld = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", $d = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", Ad = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var Ti = /* @__PURE__ */ ((e) => (e.NHS = "nhs", e.FDP = "fdp", e))(Ti || {}), Li = /* @__PURE__ */ ((e) => (e.Full = "full", e.Graphic = "graphic", e.Inverse = "inverse", e.TwoLine = "twoLine", e.TwoLineInverse = "twoLineInverse", e.Compact = "compact", e.CompactInverted = "compactInverted", e))(Li || {});
const Ed = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: Md,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: Ld,
      ariaLabel: "FDP"
    },
    inverse: {
      brand: "fdp",
      variant: "inverse",
      src: Td,
      ariaLabel: "FDP"
    },
    twoLine: {
      brand: "fdp",
      variant: "twoLine",
      src: Id,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: Dd,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: $d,
      ariaLabel: "FDP"
    },
    compactInverted: {
      brand: "fdp",
      variant: "compactInverted",
      src: Ad,
      ariaLabel: "FDP"
    }
  }
};
function Pd(e, t = "full") {
  return Ed[e]?.[t];
}
function Fd(e, {
  variant: t,
  isClient: n,
  menuOpen: a = !1,
  showMoreButton: s = !1,
  visibleItems: o,
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
    service: y = {},
    serviceName: m,
    organisation: g,
    search: L,
    account: N,
    navigation: C,
    containerClasses: v,
    variant: b = "default",
    attributes: j = {},
    maxVisibleItems: M,
    // deprecated (ignored)
    responsiveNavigation: w = !0,
    logoVariant: x = Li.Full,
    ...I
  } = e, _ = {
    ...y,
    text: y?.text ?? m
  };
  "maxVisibleItems" in I && delete I.maxVisibleItems;
  const D = _.href && !p.href || _.href && _.href === p.href, F = D ? _.href : p.href, S = ye(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": b === "organisation" || g,
      "nhsuk-header--white": b === "white"
    },
    h
  ), $ = ye(
    "nhsuk-header__container",
    v
  ), k = ye(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": C?.white,
      "nhsuk-header__navigation--justified": C?.justified
    },
    C?.className
  ), ie = f ?? (typeof document > "u" ? "nhs" : document.documentElement.getAttribute("data-brand") === "fdp" ? "fdp" : "nhs"), J = () => /* @__PURE__ */ r.jsxs(
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
  ), z = () => {
    if (p.src)
      return /* @__PURE__ */ r.jsx(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: p.src,
          width: "280",
          alt: p.ariaLabel || (ie === "fdp" ? "FDP" : "NHS")
        }
      );
    if (ie === "fdp") {
      const V = Pd(Ti.FDP, x);
      if (V?.src)
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: V.src,
            "data-logo-variant": x,
            width: "280",
            alt: V.ariaLabel || "FDP"
          }
        );
    }
    return J();
  }, X = () => g ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      g.name,
      g.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        g.split
      ] })
    ] }),
    g.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: g.descriptor })
  ] }) : null, O = (V, fe) => V ? fe ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: fe, children: V }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: V }) : null, ae = (V) => V.active || V.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: V.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: V.html } }) : V.text }) : V.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: V.html } }) : V.text, Y = () => /* @__PURE__ */ r.jsx(
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
      className: S,
      role: "banner",
      "data-module": "nhsuk-header",
      ...j,
      ...I,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: $, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            F ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: F, children: [
              z(),
              X(),
              D && O(_.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              z(),
              X(),
              D && O(_.text)
            ] }),
            _.text && !D && O(_.text, _.href)
          ] }),
          u ?? null,
          /* @__PURE__ */ r.jsx(
            wi,
            {
              ...N,
              variant: b === "white" ? "white" : "default"
            }
          )
        ] }),
        C && C.items && C.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: k,
            "aria-label": C.ariaLabel || "Menu",
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
                  v
                ),
                ref: c,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: d,
                    children: [
                      (C?.items || []).map((V, fe) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: ye(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": V.active || V.current,
                              "nhsuk-header__navigation-item--hidden": s && o !== void 0 && fe >= (o ?? 0)
                            },
                            V.className
                          ),
                          ...V.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: V.href,
                              ...V.active || V.current ? { "aria-current": V.current ? "page" : "true" } : {},
                              children: ae(V)
                            }
                          )
                        },
                        fe
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
        n && C && C.items && C.items.length > 0 && a && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: C.items.slice(o ?? 0).map((V, fe) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: ye("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": V.active || V.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: V.href,
                    ...V.active || V.current ? { "aria-current": V.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: ae(V)
                  }
                )
              },
              `overflow-${(o ?? 0) + fe}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const Za = bi(void 0);
function fy({ brand: e = "nhs", scope: t = "document", children: n }) {
  const [a, s] = Fe(e);
  Oe(() => {
    s(e);
  }, [e]), Oe(() => {
    if (t === "document")
      return document.documentElement.setAttribute("data-brand", a), () => {
      };
  }, [a, t]);
  const o = Te(() => ({ brand: a, setBrand: s }), [a]);
  return t === "local" ? /* @__PURE__ */ r.jsx(Za.Provider, { value: o, children: /* @__PURE__ */ r.jsx("div", { "data-brand": a, children: n }) }) : /* @__PURE__ */ r.jsx(Za.Provider, { value: o, children: n });
}
function Rd() {
  const e = xi(Za);
  if (!e) throw new Error("useBrand must be used within BrandThemeProvider");
  return e;
}
const Bd = ({
  mode: e = "form",
  action: t = "/search",
  method: n = "get",
  name: a = "q",
  value: s,
  placeholder: o = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: c,
  disabled: d = !1,
  callbacks: u = {},
  isLoading: f = !1,
  showResults: h = !1,
  results: p = [],
  formAttributes: y = {},
  inputAttributes: m = {},
  buttonAttributes: g = {},
  preventDefaultSubmit: L = !1,
  debounceMs: N = 300,
  minQueryLength: C = 1
}) => {
  const [v, b] = Fe(""), [j, M] = Fe(!1), w = Be(void 0), x = Be(null), I = Be(null), _ = e === "controlled" && s !== void 0, D = _ ? s : v, F = xe(
    (ae) => {
      w.current && clearTimeout(w.current), w.current = setTimeout(() => {
        u.onChange && ae.length >= C && u.onChange(ae);
      }, N);
    },
    [u.onChange, N, C]
  ), S = xe(
    (ae) => {
      const Y = ae.target.value;
      _ || b(Y), e !== "form" && F(Y);
    },
    [_, e, F]
  ), $ = xe(
    (ae) => {
      const Y = D.trim(), V = {
        query: Y,
        timestamp: Date.now(),
        formData: new FormData(ae.currentTarget)
      };
      e === "controlled" || e === "hybrid" && L ? (ae.preventDefault(), u.onSearch && Y.length >= C && u.onSearch(V)) : e === "hybrid" && u.onSearch && Y.length >= C && u.onSearch(V);
    },
    [
      e,
      D,
      u.onSearch,
      L,
      C
    ]
  ), k = xe(() => {
    M(!0), u.onFocus?.();
  }, [u.onFocus]), E = xe(() => {
    M(!1), u.onBlur?.();
  }, [u.onBlur]), ie = xe(() => {
    _ || b(""), u.onClear?.(), I.current?.focus();
  }, [_, u.onClear]);
  Oe(() => () => {
    w.current && clearTimeout(w.current);
  }, []);
  const J = () => /* @__PURE__ */ r.jsx(
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
  ), z = () => /* @__PURE__ */ r.jsx(
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
  ), X = () => !D || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ie,
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
  ), O = () => !h || !p.length || !j ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: p.map((ae) => /* @__PURE__ */ r.jsx(
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
          onClick: () => u.onSearch?.({
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
      className: ye("nhsuk-header__search", c, {
        "nhsuk-header__search--controlled": e === "controlled",
        "nhsuk-header__search--hybrid": e === "hybrid",
        "nhsuk-header__search--loading": f,
        "nhsuk-header__search--focused": j,
        "nhsuk-header__search--has-results": h && p.length > 0
      }),
      children: [
        /* @__PURE__ */ r.jsxs(
          "form",
          {
            ref: x,
            className: "nhsuk-header__search-form",
            id: "search",
            action: e !== "controlled" ? t : void 0,
            method: e !== "controlled" ? n : void 0,
            role: "search",
            onSubmit: $,
            ...y,
            children: [
              /* @__PURE__ */ r.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: i }),
              /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    ref: I,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: e !== "controlled" ? a : void 0,
                    type: "search",
                    placeholder: o,
                    autoComplete: "off",
                    value: D,
                    onChange: S,
                    onFocus: k,
                    onBlur: E,
                    disabled: d || f,
                    ...h && p.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                    ...m
                  }
                ),
                X()
              ] }),
              /* @__PURE__ */ r.jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: d || f || e !== "form" && D.length < C,
                  ...g,
                  children: [
                    f ? z() : J(),
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
}, $i = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: d = {},
  ...u
}) => {
  const [f, h] = Fe(!1), [p, y] = Fe(!1), [m, g] = Fe(i?.items?.length || 0), [L, N] = Fe(!1), [C, v] = Fe(!1), b = Be(null), j = Be(null), M = Be(!1);
  Oe(() => {
    typeof window > "u" || v(!0);
  }, []), Oe(() => {
    if (typeof document > "u") return;
    const D = (F) => {
      F.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", D), () => document.removeEventListener("keydown", D);
  }, [f]);
  const w = Be(null), x = xe(() => {
    if (!C || !i?.items || i.items.length === 0 || M.current) return;
    const D = b.current, F = j.current;
    if (!D || !F) return;
    M.current = !0, D.classList.add("nhsuk-header__navigation-container--measuring");
    const S = D.clientWidth, $ = Array.from(F.children);
    if (!$.length) {
      D.classList.remove("nhsuk-header__navigation-container--measuring"), M.current = !1;
      return;
    }
    if (w.current == null) {
      const V = document.createElement("button");
      V.type = "button", V.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", V.style.position = "absolute", V.style.visibility = "hidden", V.style.pointerEvents = "none", V.innerHTML = "<span>More</span>", D.appendChild(V), w.current = V.getBoundingClientRect().width || 104, D.removeChild(V);
    }
    const k = w.current + 16;
    let E = 0, ie = 0;
    const J = window.getComputedStyle(D), z = parseFloat(J.paddingLeft) || 0, X = parseFloat(J.paddingRight) || 0;
    let O = z + X;
    for (const V of $) {
      const fe = V.getBoundingClientRect().width;
      if (E + fe + k + O > S) break;
      E += fe, ie += 1;
    }
    const ae = ie < i.items.length, Y = ae ? ie : i.items.length;
    y((V) => V === ae ? V : ae), g((V) => V === Y ? V : Y), D.classList.remove("nhsuk-header__navigation-container--measuring"), M.current = !1;
  }, [C, i?.items]);
  Oe(() => {
    if (!C) return;
    const D = b.current;
    if (!D) return;
    let F = null;
    const S = () => {
      F == null && (F = window.requestAnimationFrame(() => {
        F = null, x();
      }));
    };
    x();
    const $ = new ResizeObserver(() => S());
    return $.observe(D), j.current && $.observe(j.current), () => {
      F != null && window.cancelAnimationFrame(F), $.disconnect();
    };
  }, [C, x]), Oe(() => {
    C && x();
  }, [i?.items?.length, C, x]);
  const I = (D) => {
    D && (D.preventDefault(), D.stopPropagation());
    const F = !f;
    h(F), N(F);
  }, _ = (() => {
    try {
      return Rd();
    } catch {
      return;
    }
  })();
  return Fd(
    {
      className: e,
      logo: t,
      service: n,
      organisation: a,
      search: s,
      account: o,
      navigation: i,
      containerClasses: l,
      variant: c,
      attributes: d,
      ...u
    },
    {
      variant: "client",
      isClient: C,
      menuOpen: f,
      showMoreButton: p,
      visibleItems: m,
      dropdownVisible: L,
      toggleMenu: I,
      navContainerRef: b,
      navListRef: j,
      // Provide interactive search node for client build only
      searchNode: s ? /* @__PURE__ */ r.jsx(Bd, { ...s }) : null,
      brand: _?.brand
    }
  );
};
function Hd(e, { variant: t, isClient: n }) {
  const {
    className: a,
    logo: s = {},
    service: o = {},
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
    responsiveNavigation: y = !0,
    ...m
  } = e;
  "maxVisibleItems" in m && delete m.maxVisibleItems;
  const g = {
    ...o,
    text: o?.text ?? i
  }, L = g.href && !s.href || g.href && g.href === s.href, N = L ? g.href : s.href, C = ye(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), v = ye("nhsuk-header__container", u), b = ye(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": d?.white,
      "nhsuk-header__navigation--justified": d?.justified
    },
    d?.className
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
  ), M = () => s.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: s.src,
      width: "280",
      alt: s.ariaLabel || "NHS"
    }
  ) : j(), w = () => l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, x = (S, $) => S ? $ ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: $, children: S }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: S }) : null, I = (S) => S.active || S.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: S.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text }) : S.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text, _ = d?.items && !y, D = _ ? [] : d?.items, F = _ ? d.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: C, role: "banner", "data-module": "nhsuk-header", ...h, ...m, children: [
    /* @__PURE__ */ r.jsxs("div", { className: v, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        N ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: N, children: [
          M(),
          w(),
          L && x(g.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          M(),
          w(),
          L && x(g.text)
        ] }),
        g.text && !L && x(g.text, g.href)
      ] }),
      /* @__PURE__ */ r.jsx(wi, { ...c, variant: f === "white" ? "white" : "default" })
    ] }),
    d && d.items && d.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: b, "aria-label": d.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
      "div",
      {
        className: ye(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !n
          },
          u
        ),
        children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: (D || []).map((S, $) => /* @__PURE__ */ r.jsx(
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
                children: I(S)
              }
            )
          },
          $
        )) })
      }
    ) }),
    _ && F.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: F.map((S, $) => /* @__PURE__ */ r.jsx(
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
            children: I(S)
          }
        )
      },
      `overflow-server-${$}`
    )) }) })
  ] });
}
const py = (e) => Hd(e, {
  variant: "server",
  isClient: !1
}), zd = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
  text: a,
  html: s,
  imageURL: o,
  containerClasses: i = "",
  classes: l = "",
  children: c,
  ...d
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
  ].filter(Boolean).join(" "), h = [
    "nhsuk-hero__heading",
    n,
    !c && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), p = c || e || a || s, y = () => {
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
      className: u,
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...d,
      children: [
        o && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          y(),
          c || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          y(),
          c || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
zd.displayName = "Hero";
const Ai = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: a,
  metaLinks: s,
  copyright: o = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: c,
  footerStyle: d,
  containerStyle: u
}) => {
  const f = (p, y = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: ye("nhsuk-footer__list-item", {
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
  ), h = !!(n || a);
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...c }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: ye("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: ye("nhsuk-footer", e), style: d, children: h ? (
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
          !h && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
        ]
      }
    ),
    h && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
  ] }) });
};
function br(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Od(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ps(e) {
  let t, n, a;
  e.length !== 2 ? (t = br, n = (l, c) => br(e(l), c), a = (l, c) => e(l) - c) : (t = e === br || e === Od ? e : Ud, n = e, a = e);
  function s(l, c, d = 0, u = l.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        n(l[f], c) < 0 ? d = f + 1 : u = f;
      } while (d < u);
    }
    return d;
  }
  function o(l, c, d = 0, u = l.length) {
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
    const f = s(l, c, d, u - 1);
    return f > d && a(l[f - 1], c) > -a(l[f], c) ? f - 1 : f;
  }
  return { left: s, center: i, right: o };
}
function Ud() {
  return 0;
}
function Wd(e) {
  return e === null ? NaN : +e;
}
const Gd = Ps(br), Yd = Gd.right;
Ps(Wd).center;
function Ei(e, t) {
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
class lo extends Map {
  constructor(t, n = Jd) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, s] of t) this.set(a, s);
  }
  get(t) {
    return super.get(co(this, t));
  }
  has(t) {
    return super.has(co(this, t));
  }
  set(t, n) {
    return super.set(Vd(this, t), n);
  }
  delete(t) {
    return super.delete(Zd(this, t));
  }
}
function co({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function Vd({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Zd({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function Jd(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const qd = Math.sqrt(50), Xd = Math.sqrt(10), Qd = Math.sqrt(2);
function _r(e, t, n) {
  const a = (t - e) / Math.max(0, n), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= qd ? 10 : o >= Xd ? 5 : o >= Qd ? 2 : 1;
  let l, c, d;
  return s < 0 ? (d = Math.pow(10, -s) / i, l = Math.round(e * d), c = Math.round(t * d), l / d < e && ++l, c / d > t && --c, d = -d) : (d = Math.pow(10, s) * i, l = Math.round(e / d), c = Math.round(t / d), l * d < e && ++l, c * d > t && --c), c < l && 0.5 <= n && n < 2 ? _r(e, t, n * 2) : [l, c, d];
}
function Kd(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [s, o, i] = a ? _r(t, e, n) : _r(e, t, n);
  if (!(o >= s)) return [];
  const l = o - s + 1, c = new Array(l);
  if (a)
    if (i < 0) for (let d = 0; d < l; ++d) c[d] = (o - d) / -i;
    else for (let d = 0; d < l; ++d) c[d] = (o - d) * i;
  else if (i < 0) for (let d = 0; d < l; ++d) c[d] = (s + d) / -i;
  else for (let d = 0; d < l; ++d) c[d] = (s + d) * i;
  return c;
}
function Ja(e, t, n) {
  return t = +t, e = +e, n = +n, _r(e, t, n)[2];
}
function qa(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, s = a ? Ja(t, e, n) : Ja(e, t, n);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function eu(e, t, n) {
  e = +e, t = +t, n = (s = arguments.length) < 2 ? (t = e, e = 0, 1) : s < 3 ? 1 : +n;
  for (var a = -1, s = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(s); ++a < s; )
    o[a] = e + a * n;
  return o;
}
function ha(e, t) {
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
const uo = Symbol("implicit");
function Pi() {
  var e = new lo(), t = [], n = [], a = uo;
  function s(o) {
    let i = e.get(o);
    if (i === void 0) {
      if (a !== uo) return a;
      e.set(o, i = t.push(o) - 1);
    }
    return n[i % n.length];
  }
  return s.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new lo();
    for (const i of o)
      e.has(i) || e.set(i, t.push(i) - 1);
    return s;
  }, s.range = function(o) {
    return arguments.length ? (n = Array.from(o), s) : n.slice();
  }, s.unknown = function(o) {
    return arguments.length ? (a = o, s) : a;
  }, s.copy = function() {
    return Pi(t, n).unknown(a);
  }, ha.apply(s, arguments), s;
}
function Fi() {
  var e = Pi().unknown(void 0), t = e.domain, n = e.range, a = 0, s = 1, o, i, l = !1, c = 0, d = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, p = s < a, y = p ? s : a, m = p ? a : s;
    o = (m - y) / Math.max(1, h - c + d * 2), l && (o = Math.floor(o)), y += (m - y - o * (h - c)) * u, i = o * (1 - c), l && (y = Math.round(y), i = Math.round(i));
    var g = eu(h).map(function(L) {
      return y + o * L;
    });
    return n(p ? g.reverse() : g);
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
    return arguments.length ? (c = Math.min(1, d = +h), f()) : c;
  }, e.paddingInner = function(h) {
    return arguments.length ? (c = Math.min(1, h), f()) : c;
  }, e.paddingOuter = function(h) {
    return arguments.length ? (d = +h, f()) : d;
  }, e.align = function(h) {
    return arguments.length ? (u = Math.max(0, Math.min(1, h)), f()) : u;
  }, e.copy = function() {
    return Fi(t(), [a, s]).round(l).paddingInner(c).paddingOuter(d).align(u);
  }, ha.apply(f(), arguments);
}
function Fs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ri(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function or() {
}
var Xn = 0.7, kr = 1 / Xn, Tn = "\\s*([+-]?\\d+)\\s*", Qn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", At = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", tu = /^#([0-9a-f]{3,8})$/, nu = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`), ru = new RegExp(`^rgb\\(${At},${At},${At}\\)$`), au = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${Qn}\\)$`), su = new RegExp(`^rgba\\(${At},${At},${At},${Qn}\\)$`), ou = new RegExp(`^hsl\\(${Qn},${At},${At}\\)$`), iu = new RegExp(`^hsla\\(${Qn},${At},${At},${Qn}\\)$`), fo = {
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
Fs(or, Kn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: po,
  // Deprecated! Use color.formatHex.
  formatHex: po,
  formatHex8: lu,
  formatHsl: cu,
  formatRgb: ho,
  toString: ho
});
function po() {
  return this.rgb().formatHex();
}
function lu() {
  return this.rgb().formatHex8();
}
function cu() {
  return Bi(this).formatHsl();
}
function ho() {
  return this.rgb().formatRgb();
}
function Kn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = tu.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? mo(t) : n === 3 ? new wt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? hr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? hr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = nu.exec(e)) ? new wt(t[1], t[2], t[3], 1) : (t = ru.exec(e)) ? new wt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = au.exec(e)) ? hr(t[1], t[2], t[3], t[4]) : (t = su.exec(e)) ? hr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ou.exec(e)) ? bo(t[1], t[2] / 100, t[3] / 100, 1) : (t = iu.exec(e)) ? bo(t[1], t[2] / 100, t[3] / 100, t[4]) : fo.hasOwnProperty(e) ? mo(fo[e]) : e === "transparent" ? new wt(NaN, NaN, NaN, 0) : null;
}
function mo(e) {
  return new wt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function hr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new wt(e, t, n, a);
}
function du(e) {
  return e instanceof or || (e = Kn(e)), e ? (e = e.rgb(), new wt(e.r, e.g, e.b, e.opacity)) : new wt();
}
function Xa(e, t, n, a) {
  return arguments.length === 1 ? du(e) : new wt(e, t, n, a ?? 1);
}
function wt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Fs(wt, Xa, Ri(or, {
  brighter(e) {
    return e = e == null ? kr : Math.pow(kr, e), new wt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new wt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new wt(pn(this.r), pn(this.g), pn(this.b), Cr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: go,
  // Deprecated! Use color.formatHex.
  formatHex: go,
  formatHex8: uu,
  formatRgb: xo,
  toString: xo
}));
function go() {
  return `#${fn(this.r)}${fn(this.g)}${fn(this.b)}`;
}
function uu() {
  return `#${fn(this.r)}${fn(this.g)}${fn(this.b)}${fn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function xo() {
  const e = Cr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${pn(this.r)}, ${pn(this.g)}, ${pn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Cr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function pn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function fn(e) {
  return e = pn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function bo(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new jt(e, t, n, a);
}
function Bi(e) {
  if (e instanceof jt) return new jt(e.h, e.s, e.l, e.opacity);
  if (e instanceof or || (e = Kn(e)), !e) return new jt();
  if (e instanceof jt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, s = Math.min(t, n, a), o = Math.max(t, n, a), i = NaN, l = o - s, c = (o + s) / 2;
  return l ? (t === o ? i = (n - a) / l + (n < a) * 6 : n === o ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= c < 0.5 ? o + s : 2 - o - s, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new jt(i, l, c, e.opacity);
}
function fu(e, t, n, a) {
  return arguments.length === 1 ? Bi(e) : new jt(e, t, n, a ?? 1);
}
function jt(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Fs(jt, fu, Ri(or, {
  brighter(e) {
    return e = e == null ? kr : Math.pow(kr, e), new jt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new jt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, s = 2 * n - a;
    return new wt(
      Ia(e >= 240 ? e - 240 : e + 120, s, a),
      Ia(e, s, a),
      Ia(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new jt(yo(this.h), mr(this.s), mr(this.l), Cr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Cr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${yo(this.h)}, ${mr(this.s) * 100}%, ${mr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function yo(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function mr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ia(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Rs = (e) => () => e;
function pu(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function hu(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function mu(e) {
  return (e = +e) == 1 ? Hi : function(t, n) {
    return n - t ? hu(t, n, e) : Rs(isNaN(t) ? n : t);
  };
}
function Hi(e, t) {
  var n = t - e;
  return n ? pu(e, n) : Rs(isNaN(e) ? t : e);
}
const vo = (function e(t) {
  var n = mu(t);
  function a(s, o) {
    var i = n((s = Xa(s)).r, (o = Xa(o)).r), l = n(s.g, o.g), c = n(s.b, o.b), d = Hi(s.opacity, o.opacity);
    return function(u) {
      return s.r = i(u), s.g = l(u), s.b = c(u), s.opacity = d(u), s + "";
    };
  }
  return a.gamma = e, a;
})(1);
function gu(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < n; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function xu(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function bu(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, s = new Array(a), o = new Array(n), i;
  for (i = 0; i < a; ++i) s[i] = Bs(e[i], t[i]);
  for (; i < n; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function yu(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Nr(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function vu(e, t) {
  var n = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? n[s] = Bs(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in n) a[s] = n[s](o);
    return a;
  };
}
var Qa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Da = new RegExp(Qa.source, "g");
function wu(e) {
  return function() {
    return e;
  };
}
function Su(e) {
  return function(t) {
    return e(t) + "";
  };
}
function _u(e, t) {
  var n = Qa.lastIndex = Da.lastIndex = 0, a, s, o, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = Qa.exec(e)) && (s = Da.exec(t)); )
    (o = s.index) > n && (o = t.slice(n, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, c.push({ i, x: Nr(a, s) })), n = Da.lastIndex;
  return n < t.length && (o = t.slice(n), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? c[0] ? Su(c[0].x) : wu(t) : (t = c.length, function(d) {
    for (var u = 0, f; u < t; ++u) l[(f = c[u]).i] = f.x(d);
    return l.join("");
  });
}
function Bs(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Rs(t) : (n === "number" ? Nr : n === "string" ? (a = Kn(t)) ? (t = a, vo) : _u : t instanceof Kn ? vo : t instanceof Date ? yu : xu(t) ? gu : Array.isArray(t) ? bu : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? vu : Nr)(e, t);
}
function ku(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Cu(e) {
  return function() {
    return e;
  };
}
function Nu(e) {
  return +e;
}
var wo = [0, 1];
function jn(e) {
  return e;
}
function Ka(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Cu(isNaN(t) ? NaN : 0.5);
}
function ju(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Mu(e, t, n) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = Ka(s, a), o = n(i, o)) : (a = Ka(a, s), o = n(o, i)), function(l) {
    return o(a(l));
  };
}
function Iu(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = Ka(e[i], e[i + 1]), o[i] = n(t[i], t[i + 1]);
  return function(l) {
    var c = Yd(e, l, 1, a) - 1;
    return o[c](s[c](l));
  };
}
function zi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Du() {
  var e = wo, t = wo, n = Bs, a, s, o, i = jn, l, c, d;
  function u() {
    var h = Math.min(e.length, t.length);
    return i !== jn && (i = ju(e[0], e[h - 1])), l = h > 2 ? Iu : Mu, c = d = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (c || (c = l(e.map(a), t, n)))(a(i(h)));
  }
  return f.invert = function(h) {
    return i(s((d || (d = l(t, e.map(a), Nr)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, Nu), u()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), u()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = ku, u();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : jn, u()) : i !== jn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, u()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, p) {
    return a = h, s = p, u();
  };
}
function Oi() {
  return Du()(jn, jn);
}
function Tu(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function jr(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function Pn(e) {
  return e = jr(Math.abs(e)), e ? e[1] : NaN;
}
function Lu(e, t) {
  return function(n, a) {
    for (var s = n.length, o = [], i = 0, l = e[0], c = 0; s > 0 && l > 0 && (c + l + 1 > a && (l = Math.max(1, a - c)), o.push(n.substring(s -= l, s + l)), !((c += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return o.reverse().join(t);
  };
}
function $u(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Au = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Mr(e) {
  if (!(t = Au.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Hs({
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
Mr.prototype = Hs.prototype;
function Hs(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Hs.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Eu(e) {
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
var Ui;
function Pu(e, t) {
  var n = jr(e, t);
  if (!n) return e + "";
  var a = n[0], s = n[1], o = s - (Ui = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, i = a.length;
  return o === i ? a : o > i ? a + new Array(o - i + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + jr(e, Math.max(0, t + o - 1))[0];
}
function So(e, t) {
  var n = jr(e, t);
  if (!n) return e + "";
  var a = n[0], s = n[1];
  return s < 0 ? "0." + new Array(-s).join("0") + a : a.length > s + 1 ? a.slice(0, s + 1) + "." + a.slice(s + 1) : a + new Array(s - a.length + 2).join("0");
}
const _o = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Tu,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => So(e * 100, t),
  r: So,
  s: Pu,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ko(e) {
  return e;
}
var Co = Array.prototype.map, No = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Fu(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ko : Lu(Co.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? ko : $u(Co.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(f) {
    f = Mr(f);
    var h = f.fill, p = f.align, y = f.sign, m = f.symbol, g = f.zero, L = f.width, N = f.comma, C = f.precision, v = f.trim, b = f.type;
    b === "n" ? (N = !0, b = "g") : _o[b] || (C === void 0 && (C = 12), v = !0, b = "g"), (g || h === "0" && p === "=") && (g = !0, h = "0", p = "=");
    var j = m === "$" ? n : m === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "", M = m === "$" ? a : /[%p]/.test(b) ? i : "", w = _o[b], x = /[defgprs%]/.test(b);
    C = C === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function I(_) {
      var D = j, F = M, S, $, k;
      if (b === "c")
        F = w(_) + F, _ = "";
      else {
        _ = +_;
        var E = _ < 0 || 1 / _ < 0;
        if (_ = isNaN(_) ? c : w(Math.abs(_), C), v && (_ = Eu(_)), E && +_ == 0 && y !== "+" && (E = !1), D = (E ? y === "(" ? y : l : y === "-" || y === "(" ? "" : y) + D, F = (b === "s" ? No[8 + Ui / 3] : "") + F + (E && y === "(" ? ")" : ""), x) {
          for (S = -1, $ = _.length; ++S < $; )
            if (k = _.charCodeAt(S), 48 > k || k > 57) {
              F = (k === 46 ? s + _.slice(S + 1) : _.slice(S)) + F, _ = _.slice(0, S);
              break;
            }
        }
      }
      N && !g && (_ = t(_, 1 / 0));
      var ie = D.length + _.length + F.length, J = ie < L ? new Array(L - ie + 1).join(h) : "";
      switch (N && g && (_ = t(J + _, J.length ? L - F.length : 1 / 0), J = ""), p) {
        case "<":
          _ = D + _ + F + J;
          break;
        case "=":
          _ = D + J + _ + F;
          break;
        case "^":
          _ = J.slice(0, ie = J.length >> 1) + D + _ + F + J.slice(ie);
          break;
        default:
          _ = J + D + _ + F;
          break;
      }
      return o(_);
    }
    return I.toString = function() {
      return f + "";
    }, I;
  }
  function u(f, h) {
    var p = d((f = Mr(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(Pn(h) / 3))) * 3, m = Math.pow(10, -y), g = No[8 + y / 3];
    return function(L) {
      return p(m * L) + g;
    };
  }
  return {
    format: d,
    formatPrefix: u
  };
}
var gr, Wi, Gi;
Ru({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ru(e) {
  return gr = Fu(e), Wi = gr.format, Gi = gr.formatPrefix, gr;
}
function Bu(e) {
  return Math.max(0, -Pn(Math.abs(e)));
}
function Hu(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Pn(t) / 3))) * 3 - Pn(Math.abs(e)));
}
function zu(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Pn(t) - Pn(e)) + 1;
}
function Ou(e, t, n, a) {
  var s = qa(e, t, n), o;
  switch (a = Mr(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(o = Hu(s, i)) && (a.precision = o), Gi(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = zu(s, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = Bu(s)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return Wi(a);
}
function Uu(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return Kd(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var s = t();
    return Ou(s[0], s[s.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), s = 0, o = a.length - 1, i = a[s], l = a[o], c, d, u = 10;
    for (l < i && (d = i, i = l, l = d, d = s, s = o, o = d); u-- > 0; ) {
      if (d = Ja(i, l, n), d === c)
        return a[s] = i, a[o] = l, t(a);
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
function Ir() {
  var e = Oi();
  return e.copy = function() {
    return zi(e, Ir());
  }, ha.apply(e, arguments), Uu(e);
}
function Wu(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, s = e[n], o = e[a], i;
  return o < s && (i = n, n = a, a = i, i = s, s = o, o = i), e[n] = t.floor(s), e[a] = t.ceil(o), e;
}
const Ta = /* @__PURE__ */ new Date(), La = /* @__PURE__ */ new Date();
function ot(e, t, n, a) {
  function s(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return s.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), s.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), s.round = (o) => {
    const i = s(o), l = s.ceil(o);
    return o - i < l - o ? i : l;
  }, s.offset = (o, i) => (t(o = /* @__PURE__ */ new Date(+o), i == null ? 1 : Math.floor(i)), o), s.range = (o, i, l) => {
    const c = [];
    if (o = s.ceil(o), l = l == null ? 1 : Math.floor(l), !(o < i) || !(l > 0)) return c;
    let d;
    do
      c.push(d = /* @__PURE__ */ new Date(+o)), t(o, l), e(o);
    while (d < o && o < i);
    return c;
  }, s.filter = (o) => ot((i) => {
    if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !o(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !o(i); )
          ;
  }), n && (s.count = (o, i) => (Ta.setTime(+o), La.setTime(+i), e(Ta), e(La), Math.floor(n(Ta, La))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const Dr = ot(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Dr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ot((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Dr);
Dr.range;
const Jt = 1e3, Ct = Jt * 60, qt = Ct * 60, Qt = qt * 24, zs = Qt * 7, jo = Qt * 30, $a = Qt * 365, Mn = ot((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Jt);
}, (e, t) => (t - e) / Jt, (e) => e.getUTCSeconds());
Mn.range;
const Os = ot((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Jt);
}, (e, t) => {
  e.setTime(+e + t * Ct);
}, (e, t) => (t - e) / Ct, (e) => e.getMinutes());
Os.range;
const Gu = ot((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ct);
}, (e, t) => (t - e) / Ct, (e) => e.getUTCMinutes());
Gu.range;
const Us = ot((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Jt - e.getMinutes() * Ct);
}, (e, t) => {
  e.setTime(+e + t * qt);
}, (e, t) => (t - e) / qt, (e) => e.getHours());
Us.range;
const Yu = ot((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * qt);
}, (e, t) => (t - e) / qt, (e) => e.getUTCHours());
Yu.range;
const ir = ot(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ct) / Qt,
  (e) => e.getDate() - 1
);
ir.range;
const Ws = ot((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Qt, (e) => e.getUTCDate() - 1);
Ws.range;
const Vu = ot((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Qt, (e) => Math.floor(e / Qt));
Vu.range;
function vn(e) {
  return ot((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ct) / zs);
}
const ma = vn(0), Tr = vn(1), Zu = vn(2), Ju = vn(3), Fn = vn(4), qu = vn(5), Xu = vn(6);
ma.range;
Tr.range;
Zu.range;
Ju.range;
Fn.range;
qu.range;
Xu.range;
function wn(e) {
  return ot((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / zs);
}
const Yi = wn(0), Lr = wn(1), Qu = wn(2), Ku = wn(3), Rn = wn(4), ef = wn(5), tf = wn(6);
Yi.range;
Lr.range;
Qu.range;
Ku.range;
Rn.range;
ef.range;
tf.range;
const er = ot((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
er.range;
const nf = ot((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
nf.range;
const Kt = ot((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Kt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ot((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Kt.range;
const bn = ot((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
bn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ot((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
bn.range;
function rf(e, t, n, a, s, o) {
  const i = [
    [Mn, 1, Jt],
    [Mn, 5, 5 * Jt],
    [Mn, 15, 15 * Jt],
    [Mn, 30, 30 * Jt],
    [o, 1, Ct],
    [o, 5, 5 * Ct],
    [o, 15, 15 * Ct],
    [o, 30, 30 * Ct],
    [s, 1, qt],
    [s, 3, 3 * qt],
    [s, 6, 6 * qt],
    [s, 12, 12 * qt],
    [a, 1, Qt],
    [a, 2, 2 * Qt],
    [n, 1, zs],
    [t, 1, jo],
    [t, 3, 3 * jo],
    [e, 1, $a]
  ];
  function l(d, u, f) {
    const h = u < d;
    h && ([d, u] = [u, d]);
    const p = f && typeof f.range == "function" ? f : c(d, u, f), y = p ? p.range(d, +u + 1) : [];
    return h ? y.reverse() : y;
  }
  function c(d, u, f) {
    const h = Math.abs(u - d) / f, p = Ps(([, , g]) => g).right(i, h);
    if (p === i.length) return e.every(qa(d / $a, u / $a, f));
    if (p === 0) return Dr.every(Math.max(qa(d, u, f), 1));
    const [y, m] = i[h / i[p - 1][2] < i[p][2] / h ? p - 1 : p];
    return y.every(m);
  }
  return [l, c];
}
const [af, sf] = rf(Kt, er, ma, ir, Us, Os);
function Aa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ea(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Wn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function of(e) {
  var t = e.dateTime, n = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, d = Gn(s), u = Yn(s), f = Gn(o), h = Yn(o), p = Gn(i), y = Yn(i), m = Gn(l), g = Yn(l), L = Gn(c), N = Yn(c), C = {
    a: E,
    A: ie,
    b: J,
    B: z,
    c: null,
    d: $o,
    e: $o,
    f: Df,
    g: Hf,
    G: Of,
    H: jf,
    I: Mf,
    j: If,
    L: Vi,
    m: Tf,
    M: Lf,
    p: X,
    q: O,
    Q: Po,
    s: Fo,
    S: $f,
    u: Af,
    U: Ef,
    V: Pf,
    w: Ff,
    W: Rf,
    x: null,
    X: null,
    y: Bf,
    Y: zf,
    Z: Uf,
    "%": Eo
  }, v = {
    a: ae,
    A: Y,
    b: V,
    B: fe,
    c: null,
    d: Ao,
    e: Ao,
    f: Vf,
    g: rp,
    G: sp,
    H: Wf,
    I: Gf,
    j: Yf,
    L: Ji,
    m: Zf,
    M: Jf,
    p: pe,
    q: de,
    Q: Po,
    s: Fo,
    S: qf,
    u: Xf,
    U: Qf,
    V: Kf,
    w: ep,
    W: tp,
    x: null,
    X: null,
    y: np,
    Y: ap,
    Z: op,
    "%": Eo
  }, b = {
    a: I,
    A: _,
    b: D,
    B: F,
    c: S,
    d: To,
    e: To,
    f: _f,
    g: Do,
    G: Io,
    H: Lo,
    I: Lo,
    j: yf,
    L: Sf,
    m: bf,
    M: vf,
    p: x,
    q: xf,
    Q: Cf,
    s: Nf,
    S: wf,
    u: ff,
    U: pf,
    V: hf,
    w: uf,
    W: mf,
    x: $,
    X: k,
    y: Do,
    Y: Io,
    Z: gf,
    "%": kf
  };
  C.x = j(n, C), C.X = j(a, C), C.c = j(t, C), v.x = j(n, v), v.X = j(a, v), v.c = j(t, v);
  function j(K, te) {
    return function(ue) {
      var G = [], ce = -1, le = 0, he = K.length, A, P, re;
      for (ue instanceof Date || (ue = /* @__PURE__ */ new Date(+ue)); ++ce < he; )
        K.charCodeAt(ce) === 37 && (G.push(K.slice(le, ce)), (P = Mo[A = K.charAt(++ce)]) != null ? A = K.charAt(++ce) : P = A === "e" ? " " : "0", (re = te[A]) && (A = re(ue, P)), G.push(A), le = ce + 1);
      return G.push(K.slice(le, ce)), G.join("");
    };
  }
  function M(K, te) {
    return function(ue) {
      var G = Wn(1900, void 0, 1), ce = w(G, K, ue += "", 0), le, he;
      if (ce != ue.length) return null;
      if ("Q" in G) return new Date(G.Q);
      if ("s" in G) return new Date(G.s * 1e3 + ("L" in G ? G.L : 0));
      if (te && !("Z" in G) && (G.Z = 0), "p" in G && (G.H = G.H % 12 + G.p * 12), G.m === void 0 && (G.m = "q" in G ? G.q : 0), "V" in G) {
        if (G.V < 1 || G.V > 53) return null;
        "w" in G || (G.w = 1), "Z" in G ? (le = Ea(Wn(G.y, 0, 1)), he = le.getUTCDay(), le = he > 4 || he === 0 ? Lr.ceil(le) : Lr(le), le = Ws.offset(le, (G.V - 1) * 7), G.y = le.getUTCFullYear(), G.m = le.getUTCMonth(), G.d = le.getUTCDate() + (G.w + 6) % 7) : (le = Aa(Wn(G.y, 0, 1)), he = le.getDay(), le = he > 4 || he === 0 ? Tr.ceil(le) : Tr(le), le = ir.offset(le, (G.V - 1) * 7), G.y = le.getFullYear(), G.m = le.getMonth(), G.d = le.getDate() + (G.w + 6) % 7);
      } else ("W" in G || "U" in G) && ("w" in G || (G.w = "u" in G ? G.u % 7 : "W" in G ? 1 : 0), he = "Z" in G ? Ea(Wn(G.y, 0, 1)).getUTCDay() : Aa(Wn(G.y, 0, 1)).getDay(), G.m = 0, G.d = "W" in G ? (G.w + 6) % 7 + G.W * 7 - (he + 5) % 7 : G.w + G.U * 7 - (he + 6) % 7);
      return "Z" in G ? (G.H += G.Z / 100 | 0, G.M += G.Z % 100, Ea(G)) : Aa(G);
    };
  }
  function w(K, te, ue, G) {
    for (var ce = 0, le = te.length, he = ue.length, A, P; ce < le; ) {
      if (G >= he) return -1;
      if (A = te.charCodeAt(ce++), A === 37) {
        if (A = te.charAt(ce++), P = b[A in Mo ? te.charAt(ce++) : A], !P || (G = P(K, ue, G)) < 0) return -1;
      } else if (A != ue.charCodeAt(G++))
        return -1;
    }
    return G;
  }
  function x(K, te, ue) {
    var G = d.exec(te.slice(ue));
    return G ? (K.p = u.get(G[0].toLowerCase()), ue + G[0].length) : -1;
  }
  function I(K, te, ue) {
    var G = p.exec(te.slice(ue));
    return G ? (K.w = y.get(G[0].toLowerCase()), ue + G[0].length) : -1;
  }
  function _(K, te, ue) {
    var G = f.exec(te.slice(ue));
    return G ? (K.w = h.get(G[0].toLowerCase()), ue + G[0].length) : -1;
  }
  function D(K, te, ue) {
    var G = L.exec(te.slice(ue));
    return G ? (K.m = N.get(G[0].toLowerCase()), ue + G[0].length) : -1;
  }
  function F(K, te, ue) {
    var G = m.exec(te.slice(ue));
    return G ? (K.m = g.get(G[0].toLowerCase()), ue + G[0].length) : -1;
  }
  function S(K, te, ue) {
    return w(K, t, te, ue);
  }
  function $(K, te, ue) {
    return w(K, n, te, ue);
  }
  function k(K, te, ue) {
    return w(K, a, te, ue);
  }
  function E(K) {
    return i[K.getDay()];
  }
  function ie(K) {
    return o[K.getDay()];
  }
  function J(K) {
    return c[K.getMonth()];
  }
  function z(K) {
    return l[K.getMonth()];
  }
  function X(K) {
    return s[+(K.getHours() >= 12)];
  }
  function O(K) {
    return 1 + ~~(K.getMonth() / 3);
  }
  function ae(K) {
    return i[K.getUTCDay()];
  }
  function Y(K) {
    return o[K.getUTCDay()];
  }
  function V(K) {
    return c[K.getUTCMonth()];
  }
  function fe(K) {
    return l[K.getUTCMonth()];
  }
  function pe(K) {
    return s[+(K.getUTCHours() >= 12)];
  }
  function de(K) {
    return 1 + ~~(K.getUTCMonth() / 3);
  }
  return {
    format: function(K) {
      var te = j(K += "", C);
      return te.toString = function() {
        return K;
      }, te;
    },
    parse: function(K) {
      var te = M(K += "", !1);
      return te.toString = function() {
        return K;
      }, te;
    },
    utcFormat: function(K) {
      var te = j(K += "", v);
      return te.toString = function() {
        return K;
      }, te;
    },
    utcParse: function(K) {
      var te = M(K += "", !0);
      return te.toString = function() {
        return K;
      }, te;
    }
  };
}
var Mo = { "-": "", _: " ", 0: "0" }, ct = /^\s*\d+/, lf = /^%/, cf = /[\\^$*+?|[\]().{}]/g;
function He(e, t, n) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < n ? new Array(n - o + 1).join(t) + s : s);
}
function df(e) {
  return e.replace(cf, "\\$&");
}
function Gn(e) {
  return new RegExp("^(?:" + e.map(df).join("|") + ")", "i");
}
function Yn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function uf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function ff(e, t, n) {
  var a = ct.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function pf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function hf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function mf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Io(e, t, n) {
  var a = ct.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Do(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function gf(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function xf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function bf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function To(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function yf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Lo(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function vf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function wf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Sf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function _f(e, t, n) {
  var a = ct.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function kf(e, t, n) {
  var a = lf.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Cf(e, t, n) {
  var a = ct.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Nf(e, t, n) {
  var a = ct.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function $o(e, t) {
  return He(e.getDate(), t, 2);
}
function jf(e, t) {
  return He(e.getHours(), t, 2);
}
function Mf(e, t) {
  return He(e.getHours() % 12 || 12, t, 2);
}
function If(e, t) {
  return He(1 + ir.count(Kt(e), e), t, 3);
}
function Vi(e, t) {
  return He(e.getMilliseconds(), t, 3);
}
function Df(e, t) {
  return Vi(e, t) + "000";
}
function Tf(e, t) {
  return He(e.getMonth() + 1, t, 2);
}
function Lf(e, t) {
  return He(e.getMinutes(), t, 2);
}
function $f(e, t) {
  return He(e.getSeconds(), t, 2);
}
function Af(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Ef(e, t) {
  return He(ma.count(Kt(e) - 1, e), t, 2);
}
function Zi(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Fn(e) : Fn.ceil(e);
}
function Pf(e, t) {
  return e = Zi(e), He(Fn.count(Kt(e), e) + (Kt(e).getDay() === 4), t, 2);
}
function Ff(e) {
  return e.getDay();
}
function Rf(e, t) {
  return He(Tr.count(Kt(e) - 1, e), t, 2);
}
function Bf(e, t) {
  return He(e.getFullYear() % 100, t, 2);
}
function Hf(e, t) {
  return e = Zi(e), He(e.getFullYear() % 100, t, 2);
}
function zf(e, t) {
  return He(e.getFullYear() % 1e4, t, 4);
}
function Of(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Fn(e) : Fn.ceil(e), He(e.getFullYear() % 1e4, t, 4);
}
function Uf(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + He(t / 60 | 0, "0", 2) + He(t % 60, "0", 2);
}
function Ao(e, t) {
  return He(e.getUTCDate(), t, 2);
}
function Wf(e, t) {
  return He(e.getUTCHours(), t, 2);
}
function Gf(e, t) {
  return He(e.getUTCHours() % 12 || 12, t, 2);
}
function Yf(e, t) {
  return He(1 + Ws.count(bn(e), e), t, 3);
}
function Ji(e, t) {
  return He(e.getUTCMilliseconds(), t, 3);
}
function Vf(e, t) {
  return Ji(e, t) + "000";
}
function Zf(e, t) {
  return He(e.getUTCMonth() + 1, t, 2);
}
function Jf(e, t) {
  return He(e.getUTCMinutes(), t, 2);
}
function qf(e, t) {
  return He(e.getUTCSeconds(), t, 2);
}
function Xf(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Qf(e, t) {
  return He(Yi.count(bn(e) - 1, e), t, 2);
}
function qi(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Rn(e) : Rn.ceil(e);
}
function Kf(e, t) {
  return e = qi(e), He(Rn.count(bn(e), e) + (bn(e).getUTCDay() === 4), t, 2);
}
function ep(e) {
  return e.getUTCDay();
}
function tp(e, t) {
  return He(Lr.count(bn(e) - 1, e), t, 2);
}
function np(e, t) {
  return He(e.getUTCFullYear() % 100, t, 2);
}
function rp(e, t) {
  return e = qi(e), He(e.getUTCFullYear() % 100, t, 2);
}
function ap(e, t) {
  return He(e.getUTCFullYear() % 1e4, t, 4);
}
function sp(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Rn(e) : Rn.ceil(e), He(e.getUTCFullYear() % 1e4, t, 4);
}
function op() {
  return "+0000";
}
function Eo() {
  return "%";
}
function Po(e) {
  return +e;
}
function Fo(e) {
  return Math.floor(+e / 1e3);
}
var Cn, Xi;
ip({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ip(e) {
  return Cn = of(e), Xi = Cn.format, Cn.parse, Cn.utcFormat, Cn.utcParse, Cn;
}
function lp(e) {
  return new Date(e);
}
function cp(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Qi(e, t, n, a, s, o, i, l, c, d) {
  var u = Oi(), f = u.invert, h = u.domain, p = d(".%L"), y = d(":%S"), m = d("%I:%M"), g = d("%I %p"), L = d("%a %d"), N = d("%b %d"), C = d("%B"), v = d("%Y");
  function b(j) {
    return (c(j) < j ? p : l(j) < j ? y : i(j) < j ? m : o(j) < j ? g : a(j) < j ? s(j) < j ? L : N : n(j) < j ? C : v)(j);
  }
  return u.invert = function(j) {
    return new Date(f(j));
  }, u.domain = function(j) {
    return arguments.length ? h(Array.from(j, cp)) : h().map(lp);
  }, u.ticks = function(j) {
    var M = h();
    return e(M[0], M[M.length - 1], j ?? 10);
  }, u.tickFormat = function(j, M) {
    return M == null ? b : d(M);
  }, u.nice = function(j) {
    var M = h();
    return (!j || typeof j.range != "function") && (j = t(M[0], M[M.length - 1], j ?? 10)), j ? h(Wu(M, j)) : u;
  }, u.copy = function() {
    return zi(u, Qi(e, t, n, a, s, o, i, l, c, d));
  }, u;
}
function Gs() {
  return ha.apply(Qi(af, sf, Kt, er, ma, ir, Us, Os, Mn, Xi).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function dp({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: a,
  isSelected: s = !1,
  taskIndex: o,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": c
}) {
  const d = Be(null), [u, f] = Fe(!1), [h, p] = Fe(!1), y = t(e.start), m = t(e.end), g = Math.max(m - y, 20), L = () => {
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
  }, N = e.progress ? g * e.progress / 100 : 0, C = () => {
    n?.(e);
  }, v = () => {
    a?.(e);
  }, b = (D) => {
    D.key === "Enter" ? (D.preventDefault(), C()) : D.key === " " && (D.preventDefault(), v());
  }, j = () => {
    f(!0);
  }, M = () => {
    f(!1);
  }, w = () => {
    p(!0), l?.();
  }, x = () => {
    p(!1);
  }, I = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (h || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), _ = {
    "--task-left": `${y}px`,
    "--task-width": `${g}px`,
    "--task-color": L(),
    left: `${y}px`,
    width: `${g}px`,
    backgroundColor: L()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: d,
      "data-task-index": o,
      className: I,
      style: _,
      onClick: C,
      onDoubleClick: v,
      onKeyDown: b,
      onMouseDown: j,
      onMouseUp: M,
      onFocus: w,
      onBlur: x,
      "aria-label": c || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${N}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function up({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let p = e.getTime(); p <= t.getTime(); p += 864e5)
    a.push(new Date(p));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = Fe(-1), c = Be(null), d = (p) => {
    if (p.key === "ArrowLeft") {
      p.preventDefault();
      const y = Math.max(0, i === -1 ? 0 : i - 1);
      l(y), h(y);
    } else if (p.key === "ArrowRight") {
      p.preventDefault();
      const y = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(y), h(y);
    } else if (p.key === "ArrowDown")
      p.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (p.key === "Home")
      p.preventDefault(), l(0), h(0);
    else if (p.key === "End") {
      p.preventDefault();
      const y = a.length - 1;
      l(y), h(y);
    }
  }, u = (p) => {
    if (p.key === "ArrowDown")
      p.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (p.key === "ArrowRight") {
      p.preventDefault();
      const y = c.current;
      y && y.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => h(0), 0));
  }, h = (p) => {
    const y = c.current?.querySelector(`[data-date-index="${p}"]`);
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
            ref: c,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": n,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: d,
            onFocus: f,
            children: a.map((p, y) => {
              const m = p.getTime() === o.getTime(), g = i === y;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": y,
                  className: `date-column ${m ? "today" : ""} ${g ? "focused" : ""}`,
                  tabIndex: g ? 0 : -1,
                  role: "button",
                  "aria-label": `${p.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${m ? " (Today)" : ""}`,
                  onFocus: () => l(y),
                  onKeyDown: d,
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
function fp({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, c] = Fe(!1), [d, u] = Fe(-1), f = Be(null);
  Oe(() => {
    l && d >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${d}"]`)?.focus();
    }, 0);
  }, [l, d, t.length]);
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
          t.length > 0 && (m.preventDefault(), c(!0), u(0));
          break;
      }
      return;
    }
    switch (m.key) {
      case "ArrowLeft":
        m.preventDefault();
        const g = Math.max(0, d - 1);
        u(g), f.current?.querySelector(`[data-task-index="${g}"]`)?.focus();
        break;
      case "ArrowRight":
        m.preventDefault();
        const N = Math.min(t.length - 1, d + 1);
        u(N), f.current?.querySelector(`[data-task-index="${N}"]`)?.focus();
        break;
      case "Enter":
        m.preventDefault(), d >= 0 && a?.(t[d]);
        break;
      case " ":
        m.preventDefault(), d >= 0 && s?.(t[d]);
        break;
      case "Escape":
        m.preventDefault(), c(!1), u(-1), f.current?.focus();
        break;
    }
  }, p = (m) => {
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
  }, y = (m) => {
    l && u(m);
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
            onKeyDown: h,
            onFocus: () => {
              l || u(-1);
            },
            children: t.map((m, g) => /* @__PURE__ */ r.jsx(
              dp,
              {
                task: m,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && d === g,
                taskIndex: g,
                tabIndex: l && d === g ? 0 : -1,
                onFocus: () => y(g)
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
function hy({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = Be(null), [l, c] = Fe(800), d = Te(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const m = new Date(n);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : m;
  }, [n]), u = Te(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const m = new Date(a);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : m;
  }, [a]), f = Te(() => Math.ceil((u.getTime() - d.getTime()) / 864e5) + 1, [d, u]);
  Oe(() => {
    if (!i.current || typeof window > "u") return;
    const m = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!m) return;
    const g = new m((L) => {
      const N = L[0];
      N && c(Math.max(N.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const h = Te(
    () => Gs().domain([d, u]).range([0, l]),
    [d, u, l]
  ), p = Te(() => {
    const m = /* @__PURE__ */ new Map();
    return t.forEach((g) => {
      const L = m.get(g.resourceId) || [];
      L.push(g), m.set(g.resourceId, L);
    }), m;
  }, [t]), y = (m) => {
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
      onKeyDown: y,
      children: [
        /* @__PURE__ */ r.jsx(up, { viewStart: d, viewEnd: u, dateCount: f }),
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
            children: e.map((m, g) => /* @__PURE__ */ r.jsx(
              fp,
              {
                resource: m,
                tasks: p.get(m.id) || [],
                scale: h,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: g,
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
const $r = ({
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
) }), pp = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? gt.Children.toArray(t).filter(
    (g) => gt.isValidElement(g) && (g.type === $r || g.type?.displayName === "BreadcrumbItem")
  ).map((g) => ({
    text: typeof g.props.children == "string" ? g.props.children : String(g.props.children),
    href: g.props.href,
    active: g.props.active,
    attributes: g.props.attributes
  })) : [], d = () => t ? c() : s && o ? [{ href: s, text: o }] : e, u = () => {
    const m = d();
    if (m && m.length > 0) {
      const g = m.slice().reverse().find((L) => L.href && !L.active);
      if (g)
        return { href: g.href, text: g.text };
    }
    return { text: "Home" };
  }, f = d(), h = u(), p = ye(
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
          gt.Children.map(t, (m, g) => gt.isValidElement(m) && (m.type === $r || m.type?.displayName === "BreadcrumbItem") ? gt.cloneElement(m, { key: g }) : null)
        ) : (
          // Render from items array
          f?.filter((m) => m.active || !!m.href).map((m, g) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: m.active ? /* @__PURE__ */ r.jsx(
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
          ) }, g))
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
}, hp = pp;
hp.Item = $r;
$r.displayName = "BreadcrumbItem";
const Ki = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [s, o] = Fe(!1);
  Oe(() => {
    o(!0);
  }, []), Oe(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (c) => {
      const d = c.target, u = d.getAttribute("href");
      if (u && u.startsWith("#")) {
        const f = typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(u) : null;
        if (f) {
          f.hasAttribute("tabindex") || f.setAttribute("tabindex", "-1"), f.focus(), f.classList.add("nhsuk-skip-link-focused-element");
          const h = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
          }, 3e3);
          d.__nhsSkipLinkTimeout = h;
        }
      }
    };
    try {
      const c = document.querySelectorAll(".nhsuk-skip-link");
      return c.forEach((d) => {
        d.addEventListener("click", l);
      }), () => {
        try {
          c.forEach((d) => {
            d.removeEventListener("click", l);
            const u = d.__nhsSkipLinkTimeout;
            u && window.clearTimeout && window.clearTimeout(u);
          });
        } catch (d) {
          console.warn("SkipLink cleanup error:", d);
        }
      };
    } catch (c) {
      return console.warn("SkipLink initialization error:", c), () => {
      };
    }
  }, [s]);
  const i = ye("nhsuk-skip-link", n);
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
}, my = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: s,
  attributes: o = {}
}) => {
  const i = ye("nhsuk-pagination", s);
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
}, gy = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const s = ye("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
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
}, el = gt.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: a = 2,
  headingClasses: s,
  description: o,
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
  ].filter(Boolean).join(" "), y = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), m = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const N = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Xt,
      {
        level: a,
        className: y,
        children: N()
      }
    );
  }, g = () => u.children ? u.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: o }) : null, L = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
          m(),
          g(),
          L()
        ] })
      ]
    }
  );
});
el.displayName = "Card";
const xy = ({
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
}, by = ({
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
}, yy = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: a = 3,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  className: l,
  children: c,
  "data-testid": d,
  id: u,
  "aria-label": f,
  "aria-labelledby": h,
  "aria-describedby": p
}) => {
  const y = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), g = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const N = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], C = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        N,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Xt,
      {
        level: a,
        className: m,
        children: C
      }
    );
  }, L = () => c || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: y,
      "data-testid": d,
      id: u,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": p,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          g(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: L() })
      ]
    }
  );
}, mp = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: a,
  headingLevel: s = 2,
  bodyText: o,
  bodyHtml: i,
  children: l,
  ...c
}) => {
  const d = ye(
    "nhsuk-panel",
    t
  ), u = () => !n && !a && !l ? null : a ? /* @__PURE__ */ r.jsx(
    Xt,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    Xt,
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
  return /* @__PURE__ */ r.jsxs("div", { className: d, id: e, ...c, children: [
    u(),
    f()
  ] });
}, vy = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...s
}) => {
  const o = ye("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: o, ...s, children: i() });
}, wy = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const s = ye(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    n
  ), o = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((c, d) => /* @__PURE__ */ r.jsx(
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
            o(c),
            c.visuallyHiddenText && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: c.visuallyHiddenText })
          ]
        }
      )
    },
    d
  )) }) });
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ r.jsx("dl", { className: s, ...a, children: e.map((l, c) => /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ r.jsx("dt", { className: "nhsuk-summary-list__key", children: o(l.key) }),
    /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__value", children: o(l.value) }),
    i(l.actions)
  ] }, c)) }) });
}, Vn = { current: null }, gp = () => {
  if (Vn.current) return Vn.current;
  try {
    Vn.current = require("prismjs");
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
    Vn.current = null;
  }
  return Vn.current;
}, xp = (e) => {
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
}, Ar = (e, t, n) => {
  if (n || !t) return e;
  const a = gp();
  if (a && a.languages) {
    const s = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (s)
      try {
        return a.highlight(e, a.languages[s], s);
      } catch {
      }
  }
  return xp(e);
}, bp = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: a,
  firstCellIsHeader: s = !1,
  responsive: o = !1,
  heading: i,
  headingLevel: l = 3,
  panel: c = !1,
  panelClasses: d,
  tableClasses: u,
  classes: f,
  attributes: h,
  "data-testid": p,
  columns: y,
  data: m,
  visuallyHiddenCaption: g = !1
}) => {
  const L = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), N = ye(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    u
  ), C = ye(f), v = (x, I) => {
    const _ = ye(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${x.format}`]: x.format
      },
      x.classes
    ), D = {
      scope: "col",
      ...x.colspan && { colSpan: x.colspan },
      ...x.rowspan && { rowSpan: x.rowspan },
      ...o && { role: "columnheader" },
      ...x.attributes
    };
    let F;
    if (x.node != null)
      F = /* @__PURE__ */ r.jsx(r.Fragment, { children: x.node });
    else if (x.html)
      F = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } });
    else if (x.code != null) {
      const S = Array.isArray(x.code), $ = S ? x.code.join(`
`) : x.code, k = S || $.includes(`
`), E = {
        className: ye("nhsuk-table__code", x.codeClassName, {
          "nhsuk-table__code--block": k,
          "nhsuk-table__code--inline": !k
        }),
        ...x.codeLanguage ? { "data-language": x.codeLanguage } : {}
      }, ie = Ar($, x.codeLanguage);
      F = k ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...E,
          dangerouslySetInnerHTML: { __html: ie }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...E,
          dangerouslySetInnerHTML: { __html: ie }
        }
      );
    } else
      F = x.text;
    return /* @__PURE__ */ r.jsx("th", { className: _, ...D, children: F }, I);
  }, b = (x, I, _) => {
    const D = s && _ || x.rowHeader, F = ye(
      D ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${D ? "header" : "cell"}--${x.format}`]: x.format
      },
      x.classes
    ), S = {
      ...D && { scope: "row" },
      ...x.colspan && { colSpan: x.colspan },
      ...x.rowspan && { rowSpan: x.rowspan },
      ...o && {
        role: D ? "rowheader" : "cell",
        ...x.header && { "data-label": x.header }
      },
      ...x.attributes
    };
    let $;
    if (x.node != null)
      $ = /* @__PURE__ */ r.jsx(r.Fragment, { children: x.node });
    else if (x.html)
      $ = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } });
    else if (x.code != null) {
      const ie = Array.isArray(x.code), J = ie ? x.code.join(`
`) : x.code, z = ie || J.includes(`
`), X = {
        className: ye("nhsuk-table__code", x.codeClassName, {
          "nhsuk-table__code--block": z,
          "nhsuk-table__code--inline": !z
        }),
        ...x.codeLanguage ? { "data-language": x.codeLanguage } : {}
      }, O = Ar(
        J,
        x.codeLanguage,
        x.disableHighlight
      );
      $ = z ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...X,
          dangerouslySetInnerHTML: { __html: O }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...X,
          dangerouslySetInnerHTML: { __html: O }
        }
      );
    } else
      $ = x.text;
    const k = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      o && x.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        x.header,
        " "
      ] }),
      $
    ] }), E = D ? "th" : "td";
    return /* @__PURE__ */ r.jsx(E, { className: F, ...S, children: k }, I);
  };
  let j = t, M = e;
  !j && y && y.length && (j = y.map((x) => ({
    text: x.title,
    format: x.format,
    classes: x.headerClasses,
    attributes: x.headerAttributes
  }))), !M && y && m && m.length && (M = m.map((x, I) => y.map((_) => {
    const D = _.accessor ? _.accessor(x, I) : x[_.key];
    let F = { format: _.format, classes: _.cellClasses, attributes: _.cellAttributes };
    if (_.rowHeader && (F.rowHeader = !0), _.render) {
      const S = _.render(D, x, I, _);
      return S == null || typeof S == "boolean" ? { ...F, text: "" } : typeof S == "string" || typeof S == "number" ? { ...F, text: String(S) } : { ...F, ...S };
    }
    return { ...F, text: D != null ? String(D) : "" };
  })));
  const w = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: N,
      ...o && { role: "table" },
      ...h,
      ...p && { "data-testid": p },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: ye(L, g && "nhsuk-u-visually-hidden"), children: n }),
        j && j.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...o && { role: "row" }, children: j.map(
              (x, I) => v(x, I)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: M && M.map((x, I) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: x.map(
              (_, D) => b(_, D, D === 0)
            )
          },
          I
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ r.jsxs(mp, { className: d, children: [
    i && /* @__PURE__ */ r.jsx(Xt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    w()
  ] }) : C ? /* @__PURE__ */ r.jsx("div", { className: C, children: w() }) : w();
}, yp = ({
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
}, tl = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const s = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...s, ...a, children: n });
}, nl = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: i,
  format: l,
  classes: c,
  colspan: d,
  rowspan: u,
  attributes: f,
  responsive: h,
  as: p = "th"
}) => {
  const y = ye(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    c
  ), m = {
    scope: "col",
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...h && { role: "columnheader" },
    ...f
  };
  let g;
  if (n != null) g = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) g = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const N = Array.isArray(a), C = N ? a.join(`
`) : a, v = N || C.includes(`
`), b = {
      className: ye("nhsuk-table__code", o, {
        "nhsuk-table__code--block": v,
        "nhsuk-table__code--inline": !v
      }),
      ...s ? { "data-language": s } : {}
    }, j = Ar(
      C,
      s,
      i
    );
    g = v ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...b,
        dangerouslySetInnerHTML: { __html: j }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...b, dangerouslySetInnerHTML: { __html: j } });
  } else g = e;
  const L = p;
  return /* @__PURE__ */ r.jsx(L, { className: y, ...m, children: g });
}, vp = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: i,
  format: l,
  classes: c,
  colspan: d,
  rowspan: u,
  attributes: f,
  responsive: h,
  rowHeader: p
}) => {
  const y = !!p, m = y ? "th" : "td", g = ye(
    y ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${y ? "header" : "cell"}--${l}`,
    c
  ), L = {
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...y && { scope: "row" },
    ...h && { role: y ? "rowheader" : "cell" },
    ...f
  };
  let N;
  if (n != null) N = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) N = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const C = Array.isArray(a), v = C ? a.join(`
`) : a, b = C || v.includes(`
`), j = {
      className: ye("nhsuk-table__code", o, {
        "nhsuk-table__code--block": b,
        "nhsuk-table__code--inline": !b
      }),
      ...s ? { "data-language": s } : {}
    }, M = Ar(v, s, i);
    N = b ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...j, dangerouslySetInnerHTML: { __html: M } }) }) : /* @__PURE__ */ r.jsx("code", { ...j, dangerouslySetInnerHTML: { __html: M } });
  } else N = e;
  return /* @__PURE__ */ r.jsx(m, { className: g, ...L, children: N });
}, en = bp;
en.Caption = yp;
en.BodyRow = tl;
en.HeaderCell = nl;
en.Cell = vp;
let Ro = !1, Bo = !1;
Object.defineProperty(en, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Ro && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), Ro = !0), tl;
  }
});
Object.defineProperty(en, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Bo && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), Bo = !0), nl;
  }
});
const Sy = Hn(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: a,
  onTabFocus: s,
  onTabListBlur: o,
  onEscape: i,
  autoActivate: l = !0,
  className: c,
  id: d,
  "data-testid": u,
  ...f
}, h) => {
  const p = n !== void 0, [y, m] = Fe(() => t || e[0]?.id || ""), g = p ? n : y, L = Be(null), N = Be(/* @__PURE__ */ new Map()), C = xe((I) => {
    p || m(I), a?.(I);
  }, [p, a]), v = xe((I) => {
    s?.(I), l && C(I);
  }, [s, l, C]), b = xe((I, _) => {
    const D = e.filter(($) => !$.disabled).map(($) => $.id), F = D.indexOf(_);
    let S = null;
    switch (I.key) {
      case "ArrowLeft":
        S = F > 0 ? F - 1 : D.length - 1;
        break;
      case "ArrowRight":
        S = F < D.length - 1 ? F + 1 : 0;
        break;
      case "Home":
        S = 0;
        break;
      case "End":
        S = D.length - 1;
        break;
      case "Escape":
        I.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (S !== null) {
      I.preventDefault();
      const $ = D[S], k = N.current.get($);
      k && (k.focus(), v($));
    }
  }, [e, v, i]), j = xe((I, _) => {
    _ ? N.current.set(I, _) : N.current.delete(I);
  }, []), M = xe((I) => {
    const _ = N.current.get(I);
    _ && _.focus();
  }, []);
  yi(h, () => ({
    focusTab: M,
    getActiveTab: () => g,
    getTabListElement: () => L.current
  }), [M, g]);
  const w = xe((I) => {
    const _ = I.relatedTarget;
    L.current?.contains(_) || o?.();
  }, [o]), x = ye("nhsuk-tabs", c);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: x,
      id: d,
      "data-testid": u,
      ...f,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: L,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: w,
                children: e.map((I) => {
                  const _ = I.id === g, D = I.disabled, F = ye("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": _,
                    "nhsuk-tabs__list-item--disabled": D
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: F, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (S) => j(I.id, S),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": _,
                      "aria-controls": `${I.id}-panel`,
                      id: `${I.id}-tab`,
                      tabIndex: _ ? 0 : -1,
                      disabled: D,
                      onClick: () => !D && C(I.id),
                      onKeyDown: (S) => !D && b(S, I.id),
                      onFocus: () => !D && v(I.id),
                      ...I.attributes,
                      children: I.label
                    }
                  ) }, I.id);
                })
              }
            )
          }
        ),
        e.map((I) => {
          const _ = I.id === g;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${I.id}-tab`,
              id: `${I.id}-panel`,
              hidden: !_,
              children: I.content
            },
            I.id
          );
        })
      ]
    }
  );
}), wp = Hn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...c
  }, d) => {
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
    let h;
    return l ? h = l : a ? h = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (h = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: d,
        id: i,
        className: u,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
wp.displayName = "Details";
const Sp = Hn(
  ({
    title: e,
    type: t,
    items: n,
    hidePrefix: a = !1,
    headingLevel: s = 3,
    className: o,
    ...i
  }, l) => {
    const c = ["nhsuk-do-dont-list"];
    o && c.push(o);
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
        level: s,
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
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: d.join(" "), role: "list", children: n.map((p, y) => /* @__PURE__ */ r.jsxs("li", { children: [
            u(),
            f(p.item)
          ] }, y)) }) })
        ]
      }
    );
  }
);
Sp.displayName = "DoDontList";
const _p = Hn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...c
  }, d) => {
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
    let h;
    return l ? h = l : a ? h = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (h = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: d,
        id: i,
        className: u,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
_p.displayName = "Expander";
const kp = Hn(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, c) => {
      const d = c + 1, u = `${t}-${d}-hint`, f = `${t}-${d}-status`, h = !!l.href, p = [
        "nhsuk-task-list__item",
        h && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), y = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        Cp,
        {
          item: l,
          itemClasses: p,
          hasLink: h,
          hintId: u,
          statusId: f,
          ariaDescribedBy: y
        },
        c
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
), Cp = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: a,
  statusId: s,
  ariaDescribedBy: o
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
        "aria-describedby": o,
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
    return e.status.tag ? u = /* @__PURE__ */ r.jsx(We, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ r.jsx("div", { className: d, id: s, children: u });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
kp.displayName = "TaskList";
const _y = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: a,
  children: s,
  className: o,
  ...i
}) => {
  const l = /important/i.test(e), c = () => s || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n ? /* @__PURE__ */ r.jsx("p", { children: n }) : null), d = [
    "nhsuk-warning-callout",
    o
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: d,
      ...i,
      children: [
        gi(
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
}, ky = ({
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
}, Np = ({
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
      Sr,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: s,
        onChange: (c) => o?.(c.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ r.jsx(
      Sr,
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
] }), jp = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(We, { color: Mp(n.status), text: n.label }) }, n.status)) });
function Mp(e) {
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
const Cy = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: n,
  defaultValue: a,
  onChange: s,
  selectionMode: o = "single",
  a11yMode: i,
  className: l,
  style: c,
  getSlotAriaLabel: d,
  toolbar: u,
  enableDefaultToolbar: f = !0,
  legendItems: h,
  enableDefaultLegend: p = !0,
  legendPlacement: y = "bottom",
  onA11yModeChange: m
}) => {
  const [g, L] = Fe("grid"), N = i || g, [C, v] = Fe(a || []), b = n ?? C, j = Te(() => {
    const S = /* @__PURE__ */ new Set();
    return e.forEach(($) => S.add(new Date($.start).getTime())), Array.from(S).sort(($, k) => $ - k);
  }, [e]), M = Te(() => {
    const S = {};
    return e.forEach(($) => {
      const k = new Date($.start).getTime();
      S[k] || (S[k] = {});
      const E = $.capacity - $.booked - ($.held || 0);
      S[k][$.sessionId] = { slot: $, remaining: E };
    }), S;
  }, [e]), w = xe((S) => {
    if (o === "single") {
      const $ = [S.id];
      n || v($), s?.($, { lastAction: "select" });
    } else {
      const $ = b.includes(S.id), k = $ ? b.filter((E) => E !== S.id) : [...b, S.id];
      n || v(k), s?.(k, { lastAction: $ ? "deselect" : "select" });
    }
  }, [o, b, n, s]), x = Te(() => h || (p ? Array.from(new Set(e.map(($) => $.status))).map(($) => ({
    status: $,
    label: $.charAt(0).toUpperCase() + $.slice(1)
  })) : void 0), [h, p, e]), I = x ? /* @__PURE__ */ r.jsx(
    jp,
    {
      items: x,
      orientation: y === "left" || y === "right" ? "vertical" : "horizontal"
    }
  ) : null, _ = (S) => {
    i || L(S), m?.(S);
  }, D = u || (f ? /* @__PURE__ */ r.jsx(
    Np,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: N,
      onA11yModeChange: _
    }
  ) : null), F = /* @__PURE__ */ r.jsx("div", { style: c, className: ye(l), children: /* @__PURE__ */ r.jsx(Va, { className: ye("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsx(qn, { width: xn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    D,
    y === "top" && I,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((S) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => w(S), "aria-pressed": b.includes(S.id), children: [
      Zn(new Date(S.start)),
      " – ",
      Zn(new Date(S.end)),
      " (",
      S.status,
      ")"
    ] }) }, S.id)) }),
    y === "bottom" && I
  ] }) }) }) }) });
  return N === "list" ? F : /* @__PURE__ */ r.jsx("div", { style: c, className: ye(l), children: /* @__PURE__ */ r.jsx(Va, { className: ye("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsx(qn, { width: xn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    D,
    y === "top" && I,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": j.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((S) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${S.specialty}`, className: "nhs-slot-matrix__session-header", children: S.specialty }, S.id))
      ] }),
      j.map((S) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Zn(new Date(S)), children: Zn(new Date(S)) }),
        t.map(($) => {
          const k = M[S]?.[$.id];
          if (!k)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, $.id);
          const { slot: E, remaining: ie } = k, J = b.includes(E.id), z = d ? d(E) : `Slot ${Zn(new Date(E.start))} ${E.status}${ie === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": E.status,
              className: ye("nhs-slot-matrix__cell", J && "nhs-slot-matrix__cell--selected"),
              "aria-label": z,
              "aria-selected": J || void 0,
              onClick: () => w(E),
              children: ie > 0 ? `${ie} left` : "Full"
            },
            E.id
          );
        })
      ] }, S))
    ] }),
    y === "bottom" && I
  ] }) }) }) }) });
};
function Ho(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Zn(e) {
  return `${Ho(e.getHours())}:${Ho(e.getMinutes())}`;
}
const Ip = ({
  title: e,
  value: t,
  subtitle: n,
  variant: a = "default",
  href: s,
  className: o = "",
  ariaLabel: i,
  ...l
}) => {
  const c = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    o
  ].filter(Boolean).join(" "), d = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Xt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    n && /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: n })
  ] });
  return s ? /* @__PURE__ */ r.jsx(
    "a",
    {
      className: `${c} nhs-fdp-summary-card--clickable`,
      href: s,
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
}, Ny = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(Va, { children: /* @__PURE__ */ r.jsx(on, { children: e.map((s, o) => /* @__PURE__ */ r.jsx(
    qn,
    {
      width: xn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": o,
      children: /* @__PURE__ */ r.jsx(Ip, { ...s })
    },
    o
  )) }) }) });
}, Dp = gt.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: a,
    selectedRowIndex: s,
    onRowSelect: o,
    id: i,
    testId: l,
    ariaLabel: c,
    ariaLabelledby: d,
    ariaDescribedby: u,
    className: f,
    tableClassName: h,
    bordered: p = !1,
    striped: y = !1,
    responsive: m = !1,
    tableType: g = "default"
  }, L) => {
    const N = Be(null), C = Be(null), v = Be(null);
    gt.useImperativeHandle(L, () => N.current, []);
    const [b, j] = Fe(0), [M, w] = Fe(0), [x, I] = Fe("headers"), [_, D] = Fe("browse"), F = t.length, S = e.length, $ = Te(() => !n || n.length === 0 ? e : [...e].sort((O, ae) => {
      for (const { key: Y, direction: V } of n) {
        const fe = O[Y], pe = ae[Y];
        if (fe == null && pe == null) continue;
        if (fe == null) return 1;
        if (pe == null) return -1;
        let de = 0;
        if (typeof fe == "number" && typeof pe == "number" ? de = fe - pe : de = String(fe).localeCompare(String(pe)), de !== 0)
          return V === "asc" ? de : -de;
      }
      return 0;
    }), [e, n]), k = xe((O, ae) => {
      setTimeout(() => {
        const Y = N.current?.querySelector(
          `tbody tr:nth-child(${O + 1}) td:nth-child(${ae + 1})`
        );
        Y && (Y.focus(), typeof Y.scrollIntoView == "function" && Y.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), E = xe((O) => {
      setTimeout(() => {
        const ae = N.current?.querySelector(`th:nth-child(${O + 1})`);
        ae && (ae.focus(), typeof ae.scrollIntoView == "function" && ae.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ie = xe((O) => {
      a?.(O);
    }, [a]), J = xe((O) => {
      o?.(O);
    }, [o]), z = xe((O) => {
      const { key: ae } = O;
      switch (ae) {
        case "Enter":
          if (O.preventDefault(), x === "headers" && _ === "browse")
            D("navigate"), E(M);
          else if (x === "headers" && _ === "navigate") {
            const Y = t[M];
            Y && ie(Y.key);
          } else x === "cells" && _ === "browse" ? (D("navigate"), k(b, M)) : x === "cells" && _ === "navigate" && J(b);
          break;
        case "Escape":
          O.preventDefault(), (x === "headers" && _ === "navigate" || x === "cells" && _ === "navigate") && D("browse");
          break;
        case "ArrowLeft":
          if (O.preventDefault(), _ === "navigate" || _ === "browse" && x === "headers") {
            if (x === "headers") {
              const Y = Math.max(0, M - 1);
              w(Y), E(Y);
            } else if (x === "cells") {
              const Y = Math.max(0, M - 1);
              w(Y), k(b, Y);
            }
          }
          break;
        case "ArrowRight":
          if (O.preventDefault(), _ === "navigate" || _ === "browse" && x === "headers") {
            if (x === "headers") {
              const Y = Math.min(F - 1, M + 1);
              w(Y), E(Y);
            } else if (x === "cells") {
              const Y = Math.min(F - 1, M + 1);
              w(Y), k(b, Y);
            }
          }
          break;
        case "ArrowUp":
          if (O.preventDefault(), x === "cells") {
            if (_ === "browse") {
              const Y = Math.max(0, b - 1);
              j(Y), k(Y, 0), w(0);
            } else if (_ === "navigate")
              if (b > 0) {
                const Y = b - 1;
                j(Y), k(Y, M);
              } else
                I("headers"), D("browse"), E(M);
          }
          break;
        case "ArrowDown":
          if (O.preventDefault(), x === "headers" && _ === "browse")
            I("cells"), j(0), w(0), k(0, 0);
          else if (x === "cells") {
            const Y = S - 1;
            if (_ === "browse") {
              const V = Math.min(Y, b + 1);
              j(V), k(V, 0), w(0);
            } else if (_ === "navigate" && b < Y) {
              const V = b + 1;
              j(V), k(V, M);
            }
          }
          break;
        case "Home":
          O.preventDefault(), x === "headers" ? (w(0), E(0)) : x === "cells" && (O.ctrlKey ? (j(0), w(0), k(0, 0)) : (w(0), k(b, 0)));
          break;
        case "End":
          if (O.preventDefault(), x === "headers") {
            const Y = F - 1;
            w(Y), E(Y);
          } else if (x === "cells")
            if (O.ctrlKey) {
              const Y = S - 1, V = F - 1;
              j(Y), w(V), k(Y, V);
            } else {
              const Y = F - 1;
              w(Y), k(b, Y);
            }
          break;
        case " ":
          if (O.preventDefault(), x === "headers" && _ === "navigate") {
            const Y = t[M];
            Y && ie(Y.key);
          } else x === "cells" && _ === "navigate" && J(b);
          break;
      }
    }, [
      x,
      _,
      M,
      b,
      F,
      S,
      t,
      k,
      E,
      ie,
      J
    ]);
    Oe(() => {
      const O = N.current;
      if (O)
        return O.addEventListener("keydown", z), () => O.removeEventListener("keydown", z);
    }, [z]);
    const X = ye(
      "nhsuk-table",
      h,
      {
        "nhsuk-table--responsive": m,
        "nhsuk-table--bordered": p,
        "nhsuk-table--striped": y,
        "nhsuk-table--compact": g === "compact"
      },
      f
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: N,
        className: X,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": d,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: C, role: "row", children: t.map((O, ae) => {
            const Y = n?.find((pe) => pe.key === O.key), V = !!Y, fe = x === "headers" && M === ae;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: ye("sortable-header", {
                  "sortable-header--focused": fe
                }),
                role: "columnheader",
                tabIndex: fe ? 0 : -1,
                onClick: () => ie(O.key),
                onKeyDown: (pe) => {
                  (pe.key === "Enter" || pe.key === " ") && (pe.preventDefault(), ie(O.key));
                },
                "aria-sort": V ? Y?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: O.label }),
                  V && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((pe) => pe.key === O.key) + 1 }),
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
              O.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: v, className: "nhsuk-table__body", role: "rowgroup", children: $.map((O, ae) => {
            const Y = s === ae, V = x === "cells" && b === ae;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: ye("data-row", {
                  "data-row--selected": Y,
                  "data-row--focused": V
                }),
                "aria-selected": Y,
                children: t.map((fe, pe) => {
                  const de = fe.tableRenderer ? fe.tableRenderer(O) : fe.render ? fe.render(O) : O[fe.key], K = x === "cells" && b === ae && M === pe, te = () => typeof de == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: de ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: de ? "Yes" : "No" })
                  ] }) : String(de ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ye("data-cell", {
                        "data-cell--focused": K
                      }),
                      tabIndex: K ? 0 : -1,
                      onClick: () => J(ae),
                      children: te()
                    },
                    fe.key
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
const rl = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: a = "",
  emptyDescription: s = "No sorting applied",
  activeDescription: o,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: c = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const f = Be(null), h = Be(null), p = Be(null), y = xe((x, I) => {
    c || (h.current = I, x.dataTransfer.effectAllowed = "move", x.dataTransfer.setData("text/plain", I));
  }, [c]), m = xe((x, I) => {
    c || h.current === I || (x.preventDefault(), x.dataTransfer.dropEffect = "move", p.current = I);
  }, [c]), g = xe((x, I) => {
    if (c) return;
    x.preventDefault();
    const _ = h.current;
    if (!_ || _ === I) return;
    const D = e.findIndex((S) => S.key === _), F = e.findIndex((S) => S.key === I);
    if (D !== -1 && F !== -1) {
      const S = [...e], [$] = S.splice(D, 1);
      S.splice(F, 0, $), n(S);
    }
    h.current = null, p.current = null;
  }, [c, e, n]), L = xe(() => {
    h.current = null, p.current = null;
  }, []), N = xe((x) => {
    const I = t.find((_) => _.key === x);
    return I ? I.label : x;
  }, [t]), C = xe((x) => ["red", "orange", "blue", "aqua-green", "grey"][x] || "grey", []), v = xe((x) => {
    if (c) return;
    const I = e.map(
      (_) => _.key === x ? { ..._, direction: _.direction === "asc" ? "desc" : "asc" } : _
    );
    n(I);
  }, [e, n, c]), b = xe((x) => {
    if (c) return;
    const I = e.filter((_) => _.key !== x);
    n(I);
  }, [e, n, c]), j = xe(() => {
    c || n([]);
  }, [n, c]), M = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const x = e.map((I, _) => {
      const D = I.direction === "asc" ? "ascending" : "descending";
      return `${_ + 1}. ${N(I.key)} (${D})`;
    });
    if (x.length === 1)
      return `Sorted by: ${x[0]}`;
    if (x.length === 2)
      return `Sorted by: ${x.join(" and ")}`;
    {
      const I = x.pop();
      return `Sorted by: ${x.join(", ")}, and ${I}`;
    }
  }, w = Te(() => {
    const x = ["sort-description"];
    return l && x.push("sort-help"), u && x.push(u), x.join(" ");
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
          children: e.map((x, I) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (_) => y(_, x.key),
              onDragOver: (_) => m(_, x.key),
              onDrop: (_) => g(_, x.key),
              onDragEnd: L,
              onClick: () => v(x.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${x.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": x.key,
              children: /* @__PURE__ */ r.jsx(
                We,
                {
                  color: C(I),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => b(x.key),
                  disabled: c,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${I + 1}`, children: I + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: N(x.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (_) => {
                          _.stopPropagation(), v(x.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${N(x.key)}. Currently ${x.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ r.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${x.direction}`, children: /* @__PURE__ */ r.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${x.direction}`,
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
            x.key
          ))
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
        pt,
        {
          variant: "secondary",
          onClick: j,
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
function Tp(e, t) {
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
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), c = new Array(o).fill([]);
      for (let d = 0; d < Math.min(e.tabLoadingStates.length, o); d++)
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
const es = Hn(function(t, n) {
  const {
    dataConfig: a = {},
    tabPanels: s,
    selectedIndex: o,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: c,
    ariaDescription: d,
    className: u = "",
    disabled: f = !1,
    orientation: h = "horizontal",
    id: p,
    isLoading: y = !1,
    loadingComponent: m,
    error: g = null,
    errorComponent: L,
    "data-testid": N,
    actions: C,
    actionsMinGap: v = 16,
    forceActionsAbove: b = !1
  } = t, M = Be(
    p || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, w = typeof d == "string" && d.trim() !== "" && !/\s/.test(d), x = `${M}-description`, I = `${M}-navigation-help`, {
    dataComparator: _ = (T, U) => JSON.stringify(T) === JSON.stringify(U),
    filterFunction: D = (T) => T,
    booleanRenderer: F = (T) => T ? "✓" : "✗"
  } = a || {}, S = o !== void 0, $ = o ?? 0, [k, E] = Fe({
    focusArea: "tabs",
    focusedTabIndex: $,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), ie = Te(() => ({
    selectedIndex: $,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [$]), [J, z] = vi(Tp, ie);
  Oe(() => {
    const T = J.tabLoadingStates.length, U = s.length;
    T !== U && z({ type: "ADJUST_ARRAYS", payload: { newLength: U } });
  }, [s.length]), Oe(() => {
    S && z({ type: "SET_SELECTED_INDEX", payload: $ });
  }, [$, S]), Oe(() => {
    E((T) => ({
      ...T,
      focusArea: "tabs",
      focusedTabIndex: J.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [J.selectedIndex]), Oe(() => {
    l && l(J.globalSelectedRowData);
  }, [J.globalSelectedRowData, l]);
  const X = xe(
    (T, U) => _(T, U),
    [_]
  ), O = xe(
    (T) => {
      T >= 0 && T < s.length && !s[T].disabled && (z({ type: "SET_SELECTED_INDEX", payload: T }), E((U) => ({
        ...U,
        focusedTabIndex: T,
        focusArea: "tabs"
      })), i?.(T));
    },
    [s, i]
  ), ae = Be(!1), Y = xe(
    (T, U) => {
      if (!U?.force && !ae.current && T === 0) {
        ae.current = !0;
        return;
      }
      ae.current = !0, setTimeout(() => {
        const ee = V.current[T], ne = ee?.parentElement;
        if (ee && ne) {
          const q = ee.offsetLeft, oe = ee.offsetWidth, ve = ne.clientWidth, Se = q - ve / 2 + oe / 2;
          try {
            ne.scrollTo({
              left: Math.max(0, Se),
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
          tabListElementExists: !!ne
        });
      }, 50);
    },
    []
  ), V = Be([]), fe = Be([]), pe = xe(
    (T, U) => {
      const ee = J.sortConfig || [], ne = ee.find(
        (ve) => ve.key === U
      );
      let q;
      ne ? ne.direction === "asc" ? q = ee.map(
        (ve) => ve.key === U ? { ...ve, direction: "desc" } : ve
      ) : q = ee.filter(
        (ve) => ve.key !== U
      ) : q = [...ee, { key: U, direction: "asc" }], z({
        type: "SET_SORT",
        payload: q
      }), s[T].onSort?.(U);
    },
    [J.sortConfig, s]
  ), de = xe(
    (T) => {
      setTimeout(() => {
        const U = document.querySelector(
          `[data-tab-panel="${J.selectedIndex}"] th:nth-child(${T + 1})`
        );
        U && U.focus();
      }, 0);
    },
    [J.selectedIndex]
  ), K = xe(
    (T) => F(T),
    [F]
  ), te = xe(
    (T, U) => {
      setTimeout(() => {
        const ee = document.querySelector(
          `[data-tab-panel="${J.selectedIndex}"] tbody tr:nth-child(${T + 1}) td:nth-child(${U + 1})`
        );
        ee && ee.focus();
      }, 0);
    },
    [J.selectedIndex]
  );
  Oe(() => {
    k.isGridActive && (k.focusArea === "headers" ? setTimeout(() => {
      de(k.focusedHeaderIndex);
    }, 0) : k.focusArea === "cells" && setTimeout(() => {
      te(
        k.focusedRowIndex,
        k.focusedColumnIndex
      );
    }, 0));
  }, [
    k.focusArea,
    k.isGridActive,
    k.focusedHeaderIndex,
    k.focusedRowIndex,
    k.focusedColumnIndex,
    de,
    te
  ]), Oe(() => {
    Y(J.selectedIndex);
  }, [J.selectedIndex, Y]);
  const ue = xe(
    (T, U) => {
      const { key: ee } = T, ne = s[J.selectedIndex], q = ne?.columns.length || 0;
      switch (ee) {
        case "ArrowLeft":
          T.preventDefault();
          const oe = Math.max(0, U - 1);
          E((Ne) => ({
            ...Ne,
            focusedHeaderIndex: oe
          })), de(oe);
          break;
        case "ArrowRight":
          T.preventDefault();
          const ve = Math.min(q - 1, U + 1);
          E((Ne) => ({
            ...Ne,
            focusedHeaderIndex: ve
          })), de(ve);
          break;
        case "ArrowUp":
          T.preventDefault(), E((Ne) => ({
            ...Ne,
            focusArea: "tabs",
            focusedTabIndex: J.selectedIndex
          })), Y(J.selectedIndex), V.current[J.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          T.preventDefault(), E((Ne) => ({
            ...Ne,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: U,
            isGridActive: !0
          }));
          break;
        case "Home":
          T.preventDefault(), E((Ne) => ({ ...Ne, focusedHeaderIndex: 0 })), de(0);
          break;
        case "End":
          T.preventDefault();
          const Se = q - 1;
          E((Ne) => ({
            ...Ne,
            focusedHeaderIndex: Se
          })), de(Se);
          break;
        case "Enter":
        case " ":
          T.preventDefault();
          const we = ne?.columns[U]?.key;
          we && pe(J.selectedIndex, we);
          break;
      }
    },
    [
      s,
      J.selectedIndex,
      pe,
      E,
      de,
      te,
      V
    ]
  ), G = xe(
    (T, U, ee) => {
      const { key: ne } = T, q = s[J.selectedIndex], oe = q?.data.length || 0, ve = q?.columns.length || 0;
      switch (ne) {
        case "ArrowUp":
          if (T.preventDefault(), U === 0)
            E((ge) => ({
              ...ge,
              focusArea: "headers",
              focusedHeaderIndex: ee,
              isGridActive: !1
            })), de(ee);
          else {
            const ge = U - 1;
            E((De) => ({
              ...De,
              focusedRowIndex: ge
            })), te(ge, ee);
          }
          break;
        case "ArrowDown":
          T.preventDefault();
          const Se = Math.min(oe - 1, U + 1);
          E((ge) => ({
            ...ge,
            focusedRowIndex: Se
          })), te(Se, ee);
          break;
        case "ArrowLeft":
          T.preventDefault();
          const we = Math.max(0, ee - 1);
          E((ge) => ({
            ...ge,
            focusedColumnIndex: we
          })), te(U, we);
          break;
        case "ArrowRight":
          T.preventDefault();
          const Ne = Math.min(ve - 1, ee + 1);
          E((ge) => ({
            ...ge,
            focusedColumnIndex: Ne
          })), te(U, Ne);
          break;
        case "Home":
          T.preventDefault(), T.ctrlKey ? (E((ge) => ({
            ...ge,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), te(0, 0)) : (E((ge) => ({ ...ge, focusedColumnIndex: 0 })), te(U, 0));
          break;
        case "End":
          if (T.preventDefault(), T.ctrlKey) {
            const ge = oe - 1, De = ve - 1;
            E((Re) => ({
              ...Re,
              focusedRowIndex: ge,
              focusedColumnIndex: De
            })), te(ge, De);
          } else {
            const ge = ve - 1;
            E((De) => ({
              ...De,
              focusedColumnIndex: ge
            })), te(U, ge);
          }
          break;
        case "Enter":
        case " ":
          if (T.preventDefault(), q && q.data[U]) {
            const ge = q.data.some(
              (Ze) => "ews_data" in Ze
            ) ? D(q.data, J.filters) : q.data, De = J.sortConfig;
            let Re = ge;
            if (De && De.length > 0 && (Re = [...ge].sort((Ze, ze) => {
              for (const { key: at, direction: kt } of De) {
                let St = Ze[at], xt = ze[at];
                const Ge = q.columns.find(
                  (Pt) => Pt.key === at
                );
                if (Ge?.tableRenderer ? (St = Ge.tableRenderer(Ze), xt = Ge.tableRenderer(ze)) : Ge?.render && (St = Ge.render(Ze), xt = Ge.render(ze)), St == null && xt == null) continue;
                if (St == null) return kt === "asc" ? -1 : 1;
                if (xt == null) return kt === "asc" ? 1 : -1;
                let Ke = 0;
                if (typeof St == "number" && typeof xt == "number" ? Ke = St - xt : Ke = String(St).localeCompare(
                  String(xt),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Ke !== 0)
                  return kt === "asc" ? Ke : -Ke;
              }
              return 0;
            })), Re[U]) {
              const Ze = Re[U], at = J.globalSelectedRowData && X(J.globalSelectedRowData, Ze) ? null : Ze;
              z({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: at
              });
            }
          }
          break;
      }
    },
    [
      s,
      J.selectedIndex,
      J.filters,
      J.sortConfig,
      D,
      X,
      z,
      E,
      de,
      te
    ]
  ), ce = xe(
    (T, U) => D(T, U),
    [D]
  );
  if (yi(
    n,
    () => ({
      selectTab: (T) => {
        T >= 0 && T < s.length && (z({ type: "SET_SELECTED_INDEX", payload: T }), i?.(T));
      },
      refreshData: (T) => {
        console.log("Refreshing data for tab:", T ?? "all");
      },
      exportData: (T) => {
        const U = T ?? J.selectedIndex, ee = s[U];
        return ee ? ee.data : [];
      },
      getSelectedRows: (T) => J.globalSelectedRowData ? [] : [],
      clearSelection: (T) => {
        z({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (T) => {
        z({ type: "SET_FILTERS", payload: T });
      }
    }),
    [J.selectedIndex, J.selectedRows, s, i]
  ), y)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": N,
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
  if (g)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": N,
        children: L || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: g })
        ] })
      }
    );
  const le = Be(null), he = Be(null), A = Be(null), [P, re] = Fe(!0);
  Oe(() => {
    if (!C) {
      re(!1);
      return;
    }
    if (b) {
      re(!1);
      return;
    }
    function T() {
      if (!le.current || !he.current || !A.current) return;
      const ne = le.current.clientWidth, q = Array.from(
        he.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), oe = q.reduce((Ne, ge) => Ne + ge.offsetWidth, 0), ve = A.current.offsetWidth, Se = Math.max(8 * (q.length - 1), 0), we = oe + Se + ve + v <= ne;
      re(we);
    }
    const U = requestAnimationFrame(() => T()), ee = new ResizeObserver(() => T());
    return le.current && ee.observe(le.current), he.current && ee.observe(he.current), () => {
      cancelAnimationFrame(U), ee.disconnect();
    };
  }, [C, v, b, s.length]);
  const se = A, Q = xe(() => se.current ? Array.from(
    se.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((T) => !T.hasAttribute("disabled")) : [], []), R = xe(
    (T) => {
      const U = Q();
      if (!U.length) return;
      const ee = Math.max(0, Math.min(T, U.length - 1));
      U[ee].focus(), E((ne) => ({ ...ne, focusArea: "actions", focusedActionIndex: ee }));
    },
    [Q]
  ), H = xe(() => R(0), [R]), Z = xe(
    (T, U) => {
      const { key: ee } = T, ne = s.length - 1;
      switch (ee) {
        case "ArrowUp": {
          C && !P && (T.preventDefault(), H());
          break;
        }
        case "ArrowLeft": {
          T.preventDefault();
          const q = U > 0 ? U - 1 : ne;
          O(q), Y(q), V.current[q]?.focus();
          break;
        }
        case "ArrowRight": {
          if (T.preventDefault(), U === ne && C && P) {
            H();
            return;
          }
          const q = U < ne ? U + 1 : 0;
          O(q), Y(q), V.current[q]?.focus();
          break;
        }
        case "ArrowDown": {
          T.preventDefault(), E((q) => ({
            ...q,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          T.preventDefault(), O(0), Y(0), V.current[0]?.focus();
          break;
        }
        case "End": {
          T.preventDefault(), O(ne), Y(ne), V.current[ne]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          T.preventDefault(), O(U);
          break;
        }
        case "Tab": {
          !T.shiftKey && U === ne && C && P && H();
          break;
        }
      }
    },
    [s.length, O, Y, C, P, H]
  ), B = xe((T) => {
    const { key: U } = T, ee = Q();
    if (!ee.length) return;
    const ne = ee.findIndex((q) => q === document.activeElement);
    switch (U) {
      case "ArrowLeft": {
        if (P)
          if (ne > 0)
            T.preventDefault(), R(ne - 1);
          else {
            T.preventDefault();
            const q = s.length - 1;
            O(q), Y(q), V.current[q]?.focus(), E((oe) => ({ ...oe, focusArea: "tabs", focusedTabIndex: q }));
          }
        break;
      }
      case "ArrowRight": {
        P && (ne < ee.length - 1 ? (T.preventDefault(), R(ne + 1)) : (T.preventDefault(), O(0), Y(0), V.current[0]?.focus(), E((q) => ({ ...q, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (P)
          T.preventDefault(), E((q) => ({ ...q, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          T.preventDefault();
          const q = J.selectedIndex;
          V.current[q]?.focus(), E((oe) => ({ ...oe, focusArea: "tabs", focusedTabIndex: q }));
        }
        break;
      }
    }
  }, [Q, P, R, s.length, O, Y, J.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${u}`,
      id: p,
      "data-testid": N,
      ref: le,
      children: [
        d && !w && /* @__PURE__ */ r.jsx("div", { id: x, className: "nhsuk-u-visually-hidden", children: d }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: I,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          rl,
          {
            sortConfig: J.sortConfig || [],
            columns: s.flatMap(
              (T) => T.columns.map((U) => ({ key: U.key, label: U.label }))
            ).filter(
              (T, U, ee) => ee.findIndex((ne) => ne.key === T.key) === U
              // Remove duplicates
            ),
            onSortChange: (T) => {
              z({ type: "SET_SORT", payload: T });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        C && !P && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: A,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: B,
            children: C
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${P ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": d ? w ? d : x : I,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: he,
              children: s.map((T, U) => {
                const ee = U === J.selectedIndex, ne = T.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${T.id}`,
                    "aria-controls": `panel-${T.id}`,
                    "aria-selected": ee,
                    "aria-disabled": ne,
                    tabIndex: ee ? 0 : -1,
                    ref: (q) => {
                      V.current[U] = q;
                    },
                    onClick: () => O(U),
                    onKeyDown: (q) => Z(q, U),
                    disabled: ne,
                    className: [
                      "aria-tabs-datagrid__tab",
                      ee ? "aria-tabs-datagrid__tab--selected" : "",
                      ne ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: T.label }),
                      J.tabLoadingStates[U] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      J.tabErrors[U] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  T.id
                );
              })
            }
          ),
          C && P && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: A,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: B,
              children: C
            }
          )
        ] }),
        s.map((T, U) => {
          const ee = U === J.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${T.id}`,
              "aria-labelledby": `tab-${T.id}`,
              tabIndex: 0,
              hidden: !ee,
              ref: (ne) => {
                fe.current[U] = ne;
              },
              className: `aria-tabs-datagrid__panel ${T.className || ""}`,
              "data-tab-panel": U,
              children: ee && (() => {
                const ne = T.data.some(
                  (oe) => "ews_data" in oe
                ) ? ce(T.data, J.filters) : T.data, q = Te(() => {
                  const oe = J.sortConfig;
                  return !oe || oe.length === 0 ? ne : [...ne].sort((ve, Se) => {
                    for (const { key: we, direction: Ne } of oe) {
                      let ge = ve[we], De = Se[we];
                      const Re = T.columns.find(
                        (ze) => ze.key === we
                      );
                      if (Re?.tableRenderer ? (ge = Re.tableRenderer(ve), De = Re.tableRenderer(Se)) : Re?.render && (ge = Re.render(ve), De = Re.render(Se)), ge == null && De == null) continue;
                      if (ge == null) return 1;
                      if (De == null) return -1;
                      let Ze = 0;
                      if (typeof ge == "number" && typeof De == "number" ? Ze = ge - De : typeof ge == "boolean" && typeof De == "boolean" ? Ze = ge === De ? 0 : ge ? 1 : -1 : Ze = String(ge).localeCompare(
                        String(De),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Ze !== 0)
                        return Ne === "asc" ? Ze : -Ze;
                    }
                    return 0;
                  });
                }, [ne, J.sortConfig, T.columns]);
                return /* @__PURE__ */ r.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": T.ariaLabel,
                    "aria-describedby": T.ariaDescription ? `panel-${T.id}-description` : void 0,
                    children: [
                      T.ariaDescription && /* @__PURE__ */ r.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${T.id}-description`,
                          children: T.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: T.columns.map((oe, ve) => {
                        const Se = J.sortConfig?.find(
                          (ge) => ge.key === oe.key
                        ), we = !!Se, Ne = k.focusArea === "headers" && k.focusedHeaderIndex === ve;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${Ne ? "sortable-header--focused" : ""} ${we ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Ne ? 0 : -1,
                            onClick: () => pe(U, oe.key),
                            onKeyDown: (ge) => ue(ge, ve),
                            "aria-sort": we ? Se?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: oe.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${we ? `sort-indicator--${Se?.direction}` : ""}`,
                                  children: [
                                    J.sortConfig && J.sortConfig.length > 0 && J.sortConfig.findIndex(
                                      (ge) => ge.key === oe.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${J.sortConfig.findIndex((ge) => ge.key === oe.key) + 1}`,
                                        "data-priority": J.sortConfig.findIndex(
                                          (ge) => ge.key === oe.key
                                        ) + 1,
                                        title: `Sort priority: ${J.sortConfig.findIndex((ge) => ge.key === oe.key) + 1}`,
                                        children: J.sortConfig.findIndex(
                                          (ge) => ge.key === oe.key
                                        ) + 1
                                      }
                                    ),
                                    we && /* @__PURE__ */ r.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${Se?.direction}`,
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
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: q.map((oe, ve) => {
                        const Se = J.globalSelectedRowData && X(J.globalSelectedRowData, oe), we = k.focusArea === "cells" && k.focusedRowIndex === ve;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${Se ? "data-row--selected" : ""} ${we ? "data-row--focused" : ""}`,
                            "aria-selected": Se,
                            children: T.columns.map((Ne, ge) => {
                              const De = oe[Ne.key];
                              let Re;
                              Ne.tableRenderer ? Re = Ne.tableRenderer(oe) : Ne.render ? Re = Ne.render(oe) : Re = De;
                              const Ze = k.focusArea === "cells" && k.focusedRowIndex === ve && k.focusedColumnIndex === ge, ze = () => {
                                if (Ne.customRenderer) {
                                  const at = Ne.customRenderer(
                                    De,
                                    oe
                                  );
                                  return /* @__PURE__ */ r.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: at
                                    }
                                  );
                                }
                                return typeof De == "boolean" && Re === De ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  K(De),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: De ? "Yes" : "No" })
                                ] }) : gt.isValidElement(Re) || typeof Re != "object" ? Re ?? "" : Re;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Ze ? "data-cell--focused" : ""}`,
                                  tabIndex: Ze ? 0 : -1,
                                  onClick: () => {
                                    const kt = J.globalSelectedRowData && X(
                                      J.globalSelectedRowData,
                                      oe
                                    ) ? null : oe;
                                    z({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: kt
                                    });
                                  },
                                  onKeyDown: (at) => G(at, ve, ge),
                                  children: ze()
                                },
                                Ne.key
                              );
                            })
                          },
                          ve
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            T.id
          );
        })
      ]
    }
  );
}), xr = {
  asc: "↑",
  desc: "↓"
}, Lp = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Pa(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function $p(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Ap(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function Ep(e, t) {
  const n = t.find((s) => s.id === e), a = $p(t);
  return n ? n.priority < a : !1;
}
const jy = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: o = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const u = Te(() => Lp(e), [e]), f = xe((N) => {
    if (l) return;
    const C = e.map(
      (v) => v.id === N ? { ...v, direction: v.direction === "asc" ? "desc" : "asc" } : v
    );
    t(C);
  }, [e, t, l]), h = xe((N) => {
    if (l) return;
    const C = e.findIndex((b) => b.id === N);
    if (C <= 0) return;
    const v = [...e];
    [v[C], v[C - 1]] = [v[C - 1], v[C]], t(Pa(v));
  }, [e, t, l]), p = xe((N) => {
    if (l) return;
    const C = e.findIndex((b) => b.id === N);
    if (C >= e.length - 1 || C === -1) return;
    const v = [...e];
    [v[C], v[C + 1]] = [v[C + 1], v[C]], t(Pa(v));
  }, [e, t, l]), y = xe((N) => {
    if (l) return;
    const C = e.filter((v) => v.id !== N);
    t(Pa(C));
  }, [e, t, l]), m = xe(() => {
    l || t([]);
  }, [t, l]), g = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const N = u.map((C, v) => {
      const b = C.direction === "asc" ? "ascending" : "descending";
      return `${v + 1}. ${C.label} (${b})`;
    });
    if (N.length === 1)
      return `Sorted by: ${N[0]}`;
    if (N.length === 2)
      return `Sorted by: ${N.join(" and ")}`;
    {
      const C = N.pop();
      return `Sorted by: ${N.join(", ")}, and ${C}`;
    }
  }, L = Te(() => {
    const N = ["sort-description"];
    return i && N.push("sort-help"), d && N.push(d), N.join(" ");
  }, [i, d]);
  return e.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: `sort-status-control sort-status-control--empty ${n}`, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: g()
    }
  ) }) : /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${n}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: g()
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": c,
        "aria-describedby": L,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((N) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                We,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => y(N.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: N.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: N.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(N.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${N.label}. Currently ${N.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: N.direction === "asc" ? xr.asc : xr.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(N.id),
                          disabled: l || !Ap(N.id, e),
                          "aria-label": `Move ${N.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(N.id),
                          disabled: l || !Ep(N.id, e),
                          "aria-label": `Move ${N.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            N.id
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
      xr.asc,
      "/",
      xr.desc,
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
})), ts = [
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
], Pp = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Fp = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, Rp = (e) => {
  if (typeof e == "boolean") {
    const n = ts.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = ts.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, Bp = (e) => `${e.name}-${e.bed_name}`, Hp = () => ({
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
}), My = (e) => {
  const t = Hp();
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
}, zp = {
  dataComparator: Pp,
  filterFunction: Fp,
  booleanRenderer: Rp,
  getDataId: Bp
};
function zo(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badges: o = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: d = {},
    classPrefix: u = "adaptive-card"
  } = n, f = t.find((C) => C.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", p = () => s.filter((v) => !i.includes(v) && e[v]).slice(0, 3).map((v) => {
    const b = t.find((x) => x.key === v), j = e[v], M = d[v] ? d[v](j, e) : b?.cardRenderer ? b.cardRenderer(e) : b?.render ? b.render(e) : j;
    return `${b?.label || v}: ${M}`;
  }).join(" • "), y = () => o.length === 0 ? null : o.filter((C) => e[C.fieldKey] !== void 0).map((C) => {
    const v = e[C.fieldKey], b = C.render ? C.render(v, e) : v;
    return `<span class="nhsuk-tag ${Op(C, v)}">${b}</span>`;
  }).join(""), m = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", g = y(), L = p(), N = g ? `${L}${g ? `<div class="adaptive-card__badges">${g}</div>` : ""}` : L;
  return {
    variant: m(),
    heading: String(h),
    descriptionHtml: N,
    className: `adaptive-card ${u}`,
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
}, al = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: s = "medium",
  status: o = "active"
}) => {
  const i = e.name, l = e.age, c = e.ward_name, d = e.bed_name, u = e.ews_score, f = e.speciality, h = e.consultant;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${s} healthcare-card--${o}`,
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
            We,
            {
              color: Gp(ll(u)),
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
            pt,
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
            pt,
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
            pt,
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
}, sl = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        We,
        {
          color: Yp(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
        We,
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
] }), ol = ({
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
        We,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
        We,
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
] }), il = ({
  data: e,
  onSelect: t,
  onAction: n,
  priority: a = "medium"
}) => {
  const s = e.name, o = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, c = e.ews_data?.temperature, d = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            o !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Wp(o)}`, children: [
              "EWS: ",
              o
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ r.jsxs(
            We,
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
function ll(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Wp(e) {
  return ll(e);
}
function Gp(e) {
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
function Yp(e) {
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
const Vp = [
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
], cl = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Zp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Jp = (e) => cl(e) === "high" || e.status === "urgent" ? "primary" : "default", qp = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Xp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Vp,
  hiddenFields: [],
  getPriority: cl,
  getStatus: Zp,
  getVariant: Jp,
  fieldRenderers: qp,
  classPrefix: "adaptive-card--healthcare"
}, Qp = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", s = n.getStatus?.(e) || "active", o = s === "urgent" ? "active" : s;
    return /* @__PURE__ */ r.jsx(
      al,
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
      sl,
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
      ol,
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
      il,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Vitals selected:", s),
        onAction: (s, o) => console.log("Vitals action:", s, o)
      }
    );
  }
}, Kp = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Oo = {
  name: "healthcare",
  defaultCardConfig: Xp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Qp,
  fieldTypes: Kp
};
function Uo(e) {
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
function Wo(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function eh(e, t) {
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
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), c = new Array(o).fill([]);
      for (let d = 0; d < Math.min(e.tabLoadingStates.length, o); d++)
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
function th(e, t) {
  const [n, a] = Fe("cards");
  return Oe(() => {
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
function nh(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function rh(e, t, n, a) {
  const s = a ? { ...a.defaultCardConfig, ...n } : { ...Up, ...n };
  if (a && a.cardTemplates) {
    const o = nh(e);
    if (o && a.cardTemplates[o]) {
      const i = a.cardTemplates[o](e, t, s);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return s.cardTemplate && s.cardTemplate(e, t, s), zo(e, t, s);
}
const Iy = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: a = {},
  enableAdvancedSorting: s = !1,
  topActions: o,
  bottomActions: i,
  gridActions: l,
  forceGridActionsAbove: c,
  // Standard AriaTabsDataGrid props
  tabPanels: d,
  dataConfig: u,
  selectedIndex: f,
  onTabChange: h,
  ariaLabel: p = "Data grid",
  ariaDescription: y,
  orientation: m = "horizontal",
  id: g,
  disabled: L = !1,
  className: N,
  ...C
}) => {
  const v = th(e, t), b = f !== void 0, j = f ?? 0, M = Te(() => {
    if (d.some(
      (H) => H.data && H.data.length > 0 && Wo(H.data)
    )) {
      const H = Uo(n);
      return {
        ...Oo.defaultCardConfig,
        ...H
      };
    } else
      return Uo(n);
  }, [n, d]), w = Te(() => d.some(
    (H) => H.data && H.data.length > 0 && Wo(H.data)
  ) ? Oo : void 0, [d]), x = Te(() => ({
    selectedIndex: j,
    tabLoadingStates: new Array(d.length).fill(!1),
    tabErrors: new Array(d.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(d.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [j, d.length]), [I, _] = vi(eh, x), D = Be([]), F = Be([]), S = Be([]), $ = Be(null), [k, E] = Fe({
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
  }), ie = xe((R) => {
    if (!R.current)
      return { columns: 1, rows: 0 };
    const H = R.current, Z = H.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (Z.length === 0)
      return { columns: 1, rows: 0 };
    const B = H.offsetWidth, U = Z[0].offsetWidth, ee = Math.floor(B / U) || 1, ne = Math.ceil(Z.length / ee);
    return { columns: ee, rows: ne };
  }, []), J = xe((R, H) => ({
    row: Math.floor(R / H),
    col: R % H
  }), []), z = xe((R, H, Z) => R * Z + H, []), X = xe((R, H, Z, B) => {
    const { row: T, col: U } = J(R, B);
    let ee = T, ne = U;
    switch (H) {
      case "up":
        ee = Math.max(0, T - 1);
        break;
      case "down":
        ee = Math.min(Math.floor((Z - 1) / B), T + 1);
        break;
      case "left":
        ne = Math.max(0, U - 1);
        break;
      case "right":
        ne = Math.min(B - 1, U + 1);
        break;
    }
    const q = z(ee, ne, B);
    return Math.min(q, Z - 1);
  }, [J, z]);
  Oe(() => {
    k.isCardNavigationActive && k.focusedCardElementIndex >= 0 && k.cardElements.length > 0 && setTimeout(() => {
      const R = k.cardElements[k.focusedCardElementIndex];
      R && (R.element.focus(), R.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [k.isCardNavigationActive, k.focusedCardElementIndex, k.cardElements.length]), Oe(() => {
    const R = () => {
      if (v === "cards" && $.current) {
        const { columns: B, rows: T } = ie($);
        E((U) => ({
          ...U,
          gridColumns: B,
          gridRows: T
        }));
      }
    }, H = setTimeout(R, 200), Z = () => {
      setTimeout(R, 100);
    };
    return window.addEventListener("resize", Z), () => {
      clearTimeout(H), window.removeEventListener("resize", Z);
    };
  }, [v, d, ie]), Oe(() => {
    const R = I.tabLoadingStates.length, H = d.length;
    R !== H && _({ type: "ADJUST_ARRAYS", payload: { newLength: H } });
  }, [d.length, I.tabLoadingStates.length]), Oe(() => {
    b && f !== I.selectedIndex && _({ type: "SET_SELECTED_INDEX", payload: f });
  }, [b, f, I.selectedIndex]);
  const O = xe((R) => {
    R >= 0 && R < d.length && !d[R].disabled && (_({ type: "SET_SELECTED_INDEX", payload: R }), h?.(R));
  }, [d, h]), ae = xe((R) => {
    console.log("Card selected:", R), _({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: R
    });
  }, []), Y = xe((R) => {
    const H = F.current[R];
    H && (H.focus(), H.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), V = xe((R) => {
    const H = F.current[R];
    if (!H) return [];
    const Z = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), B = H.querySelectorAll(Z);
    return Array.from(B).map((T, U) => ({
      id: T.id || `card-${R}-element-${U}`,
      element: T,
      label: T.getAttribute("aria-label") || T.textContent?.trim() || T.getAttribute("title") || `Element ${U + 1}`,
      type: T.tagName.toLowerCase() === "button" ? "button" : T.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(T.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), fe = Be(null), pe = xe((R) => {
    const H = fe.current;
    if (!H) return;
    const Z = document.createElement("div");
    Z.setAttribute("aria-live", "polite"), Z.setAttribute("aria-atomic", "true"), Z.className = "sr-only", Z.textContent = R, H.appendChild(Z), setTimeout(() => {
      H.contains(Z) && H.removeChild(Z);
    }, 1e3);
  }, []), de = xe((R) => {
    const H = R.filter((B) => B.sortable !== !1), Z = [
      { value: "", label: "Sort by..." }
    ];
    return H.forEach((B) => {
      const T = B.label || B.key;
      B.key === "name" ? Z.push(
        { value: `${B.key}-asc`, label: `${T} (A-Z)` },
        { value: `${B.key}-desc`, label: `${T} (Z-A)` }
      ) : B.key === "ews_score" || B.key.includes("score") ? Z.push(
        { value: `${B.key}-desc`, label: `${T} (High-Low)` },
        { value: `${B.key}-asc`, label: `${T} (Low-High)` }
      ) : B.key === "age" || B.key.includes("date") || B.key.includes("time") ? Z.push(
        { value: `${B.key}-desc`, label: `${T} (Oldest-Youngest)` },
        { value: `${B.key}-asc`, label: `${T} (Youngest-Oldest)` }
      ) : Z.push(
        { value: `${B.key}-asc`, label: `${T} (A-Z)` },
        { value: `${B.key}-desc`, label: `${T} (Z-A)` }
      );
    }), Z;
  }, []), K = xe((R, H) => H ? [...R].sort((Z, B) => {
    const T = Z[H.key], U = B[H.key];
    if (T == null && U == null) return 0;
    if (T == null) return 1;
    if (U == null) return -1;
    const ee = Number(T), ne = Number(U);
    if (!isNaN(ee) && !isNaN(ne))
      return H.direction === "asc" ? ee - ne : ne - ee;
    const q = String(T).toLowerCase(), oe = String(U).toLowerCase(), ve = q.localeCompare(oe);
    return H.direction === "asc" ? ve : -ve;
  }) : R, []), te = xe((R) => {
    if (!R) {
      E((q) => ({ ...q, cardSortConfig: null })), pe("Card sorting cleared");
      return;
    }
    const [H, Z] = R.split("-"), B = { key: H, direction: Z };
    E((q) => ({ ...q, cardSortConfig: B }));
    const ee = d[I.selectedIndex]?.columns.find((q) => q.key === H)?.label || H;
    pe(`Cards sorted by ${ee} in ${Z === "asc" ? "ascending" : "descending"} order`);
  }, [d, I.selectedIndex, pe]), ue = xe((R) => {
    const B = d[I.selectedIndex]?.columns.find((U) => U.key === R.key)?.label || R.key, T = R.direction === "asc" ? "ascending" : "descending";
    return `${B} (${T})`;
  }, [d, I.selectedIndex]), G = xe((R) => {
    const H = d[I.selectedIndex];
    if (s) {
      const Z = I.sortConfig;
      return !Z || Z.length === 0 ? R : [...R].sort((B, T) => {
        for (const { key: U, direction: ee } of Z) {
          let ne = B[U], q = T[U];
          const oe = H?.columns.find((De) => De.key === U);
          if (oe?.cardRenderer ? (ne = oe.cardRenderer(B), q = oe.cardRenderer(T)) : oe?.render && (ne = oe.render(B), q = oe.render(T)), ne == null && q == null) continue;
          if (ne == null) return ee === "asc" ? -1 : 1;
          if (q == null) return ee === "asc" ? 1 : -1;
          const ve = Number(ne), Se = Number(q);
          if (!isNaN(ve) && !isNaN(Se)) {
            const De = ve - Se;
            if (De !== 0) return ee === "asc" ? De : -De;
            continue;
          }
          const we = String(ne).toLowerCase(), Ne = String(q).toLowerCase(), ge = we.localeCompare(Ne);
          if (ge !== 0) return ee === "asc" ? ge : -ge;
        }
        return 0;
      });
    } else
      return K(R, k.cardSortConfig);
  }, [s, I.sortConfig, k.cardSortConfig, K, d, I.selectedIndex]), ce = xe((R, H) => {
    const Z = V(R), B = Z[H];
    if (B) {
      B.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const T = `Focused on ${B.label}, ${B.type} ${H + 1} of ${Z.length} within card`;
      pe(T);
    }
  }, [V, pe]), le = xe((R) => {
    D.current[R]?.focus();
  }, []), he = xe(() => {
    const R = S.current[0];
    if (!R) return [];
    const H = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), Z = R.querySelectorAll(H);
    return Array.from(Z);
  }, []), A = xe((R) => {
    if (R === 0) {
      const H = S.current[0], Z = H?.querySelector(".sort-controls-row");
      if (Z) {
        Z.setAttribute("tabindex", "-1"), Z.focus();
        const T = `Sort controls group with ${he().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        pe(T);
      } else H && H.focus();
    } else {
      const H = he(), Z = R - 1, B = H[Z];
      if (B) {
        B.focus();
        const T = B.tagName.toLowerCase() === "select", U = B.tagName.toLowerCase() === "button", ee = T ? "dropdown" : U ? "button" : "control", ne = T ? ". Use Space key to open dropdown" : "", q = `${ee} ${Z + 1} of ${H.length}${ne}`;
        pe(q);
      }
    }
  }, [he, pe]), P = xe((R, H) => {
    const { key: Z } = R, B = d[I.selectedIndex], T = B?.data.length || 0;
    if (Z === "ArrowLeft" && R.shiftKey) {
      R.preventDefault(), R.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (Z === "ArrowRight" && R.shiftKey) {
      R.preventDefault(), R.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!k.isCardNavigationActive) {
      switch (Z) {
        case "ArrowUp":
          if (R.preventDefault(), H === 0)
            E((q) => ({ ...q, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), A(0);
          else {
            const q = X(H, "up", T, k.gridColumns);
            q !== H && (E((oe) => ({ ...oe, focusedCardIndex: q })), Y(q), pe(`Moved to card ${q + 1} of ${T}`));
          }
          break;
        case "ArrowDown":
          R.preventDefault();
          const U = X(H, "down", T, k.gridColumns);
          U !== H && (E((q) => ({ ...q, focusedCardIndex: U })), Y(U), pe(`Moved to card ${U + 1} of ${T}`));
          break;
        case "ArrowLeft":
          R.preventDefault();
          const ee = X(H, "left", T, k.gridColumns);
          ee !== H ? (E((q) => ({ ...q, focusedCardIndex: ee })), Y(ee), pe(`Moved to card ${ee + 1} of ${T}`)) : I.selectedIndex > 0 && (_({ type: "SET_SELECTED_INDEX", payload: I.selectedIndex - 1 }), E((q) => ({ ...q, focusArea: "tabs" })), setTimeout(() => le(I.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          R.preventDefault();
          const ne = X(H, "right", T, k.gridColumns);
          ne !== H ? (E((q) => ({ ...q, focusedCardIndex: ne })), Y(ne), pe(`Moved to card ${ne + 1} of ${T}`)) : I.selectedIndex < d.length - 1 && (_({ type: "SET_SELECTED_INDEX", payload: I.selectedIndex + 1 }), E((q) => ({ ...q, focusArea: "tabs" })), setTimeout(() => le(I.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (B?.data[H]) {
            R.preventDefault(), E((oe) => ({
              ...oe,
              selectedCardIndex: H
            }));
            const q = V(H);
            q.length > 0 ? (E((oe) => ({
              ...oe,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: q,
              selectedCardIndex: H
              // Ensure selection is maintained
            })), pe(`Card ${H + 1} selected and navigation activated. ${q.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : pe(`Card ${H + 1} selected.`);
          }
          break;
        case " ":
          if (B?.data[H]) {
            R.preventDefault(), E((oe) => ({
              ...oe,
              selectedCardIndex: oe.selectedCardIndex === H ? -1 : H
            }));
            const q = k.selectedCardIndex === H;
            pe(`Card ${H + 1} ${q ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (Z) {
      case "ArrowUp":
      case "ArrowLeft":
        R.preventDefault();
        const U = Math.max(0, k.focusedCardElementIndex - 1);
        E((oe) => ({ ...oe, focusedCardElementIndex: U })), ce(H, U);
        break;
      case "ArrowDown":
      case "ArrowRight":
        R.preventDefault();
        const ee = Math.min(k.cardElements.length - 1, k.focusedCardElementIndex + 1);
        E((oe) => ({ ...oe, focusedCardElementIndex: ee })), ce(H, ee);
        break;
      case "Enter":
        R.preventDefault();
        const ne = k.cardElements[k.focusedCardElementIndex];
        ne && (ne.element.click(), pe(`Activated ${ne.label}`));
        break;
      case " ":
        R.preventDefault();
        const q = k.cardElements[k.focusedCardElementIndex];
        if (q) {
          const oe = new MouseEvent("dblclick", { bubbles: !0 });
          q.element.dispatchEvent(oe), pe(`Double-clicked ${q.label}`);
        }
        break;
      case "Escape":
        R.preventDefault(), E((oe) => ({
          ...oe,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => Y(H), 0), pe("Exited card navigation, returned to card level");
        break;
      case "Home":
        R.preventDefault(), k.cardElements.length > 0 && (E((oe) => ({ ...oe, focusedCardElementIndex: 0 })), ce(H, 0));
        break;
      case "End":
        if (R.preventDefault(), k.cardElements.length > 0) {
          const oe = k.cardElements.length - 1;
          E((ve) => ({ ...ve, focusedCardElementIndex: oe })), ce(H, oe);
        }
        break;
    }
  }, [k, I.selectedIndex, d, ae, Y, le, E, V, ce, pe]), re = xe((R) => {
    const H = D.current[R], Z = H?.parentElement;
    if (!H || !Z) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const B = H.getBoundingClientRect(), T = Z.getBoundingClientRect();
    B.left >= T.left && B.right <= T.right || (console.log("Tab not visible, scrolling into view (mobile)"), H.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), se = xe((R, H) => {
    if (v !== "cards")
      return;
    const { key: Z } = R;
    switch (Z) {
      case "ArrowLeft":
        R.preventDefault();
        const B = H > 0 ? H - 1 : d.length - 1;
        O(B), E((ne) => ({ ...ne, focusedTabIndex: B })), D.current[B]?.focus(), re(B);
        break;
      case "ArrowRight":
        R.preventDefault();
        const T = H < d.length - 1 ? H + 1 : 0;
        O(T), E((ne) => ({ ...ne, focusedTabIndex: T })), D.current[T]?.focus(), re(T);
        break;
      case "ArrowDown":
        R.preventDefault();
        const U = d[I.selectedIndex];
        U && U.columns && U.columns.length > 0 ? (E((ne) => ({
          ...ne,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), A(0)) : (E((ne) => ({
          ...ne,
          focusArea: "cards",
          focusedCardIndex: 0
        })), Y(0));
        break;
      case "Home":
        R.preventDefault(), O(0), E((ne) => ({ ...ne, focusedTabIndex: 0 })), D.current[0]?.focus(), re(0);
        break;
      case "End":
        R.preventDefault();
        const ee = d.length - 1;
        O(ee), E((ne) => ({ ...ne, focusedTabIndex: ee })), D.current[ee]?.focus(), re(ee);
        break;
      case "Enter":
      case " ":
        R.preventDefault(), O(H);
        break;
    }
  }, [d.length, O, v, Y, E, re]), Q = xe((R, H) => {
    if (v !== "cards")
      return;
    const { key: Z } = R, B = d[I.selectedIndex];
    if (H === 0 && !k.isSortControlsActive) {
      switch (Z) {
        case "ArrowUp":
          R.preventDefault(), E((U) => ({
            ...U,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), le(I.selectedIndex);
          break;
        case "ArrowDown":
          R.preventDefault(), B?.data && B.data.length > 0 && (E((U) => ({
            ...U,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), Y(0));
          break;
        case "Enter":
        case " ":
          R.preventDefault();
          const T = he();
          if (T.length > 0) {
            E((ee) => ({
              ...ee,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), A(1);
            const U = `Entered sort controls navigation mode. ${T.length} controls available. Use arrow keys to navigate between controls.`;
            pe(U);
          }
          break;
        case "Escape":
          R.preventDefault(), E((U) => ({
            ...U,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), le(I.selectedIndex);
          break;
      }
      return;
    }
    if (k.isSortControlsActive) {
      const U = he().length;
      switch (Z) {
        case "ArrowLeft":
          R.preventDefault();
          const ee = k.focusedSortControlIndex > 1 ? k.focusedSortControlIndex - 1 : U;
          E((q) => ({ ...q, focusedSortControlIndex: ee })), A(ee);
          break;
        case "ArrowRight":
          R.preventDefault();
          const ne = k.focusedSortControlIndex < U ? k.focusedSortControlIndex + 1 : 1;
          E((q) => ({ ...q, focusedSortControlIndex: ne })), A(ne);
          break;
        case "ArrowDown":
          if (R.preventDefault(), k.isSortControlsActive) {
            const q = k.focusedSortControlIndex < U ? k.focusedSortControlIndex + 1 : 1;
            E((oe) => ({ ...oe, focusedSortControlIndex: q })), A(q);
          } else
            B?.data && B.data.length > 0 && (E((q) => ({
              ...q,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), Y(0));
          break;
        case "ArrowUp":
          R.preventDefault(), E((q) => ({
            ...q,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), A(0);
          break;
        case "Escape":
          R.preventDefault(), E((q) => ({
            ...q,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), A(0);
          break;
      }
    }
  }, [v, d, I.selectedIndex, k.isSortControlsActive, k.focusedSortControlIndex, A, le, Y, E, pe]);
  if (v === "cards") {
    const R = d[I.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${N || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": p,
            "aria-describedby": `${y || ""} ${g ? `${g}-navigation-help` : ""}`.trim(),
            "aria-orientation": m,
            className: "aria-tabs-datagrid__tabs",
            children: d.map((H, Z) => {
              const B = Z === I.selectedIndex, T = H.disabled || L;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${H.id}`,
                  "aria-controls": `panel-${H.id}`,
                  "aria-selected": B,
                  "aria-disabled": T,
                  tabIndex: B ? 0 : -1,
                  ref: (U) => {
                    D.current[Z] = U;
                  },
                  onClick: () => O(Z),
                  onKeyDown: (U) => se(U, Z),
                  disabled: T,
                  className: [
                    "aria-tabs-datagrid__tab",
                    B ? "aria-tabs-datagrid__tab--selected" : "",
                    T ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: H.label }),
                    I.tabLoadingStates[Z] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    I.tabErrors[Z] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                H.id
              );
            })
          }
        ),
        o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: o })
      ] }),
      R && R.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: s ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          rl,
          {
            sortConfig: I.sortConfig || [],
            columns: R.columns.map((H) => ({ key: H.key, label: H.label })),
            onSortChange: (H) => {
              _({ type: "SET_SORT", payload: H });
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
            tabIndex: k.focusArea === "sort-controls" ? 0 : -1,
            ref: (H) => {
              S.current[0] = H;
            },
            onKeyDown: (H) => Q(H, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${R.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  Sr,
                  {
                    id: `card-sort-${R.id}`,
                    name: `card-sort-${R.id}`,
                    value: k.cardSortConfig ? `${k.cardSortConfig.key}-${k.cardSortConfig.direction}` : "",
                    onChange: (H) => te(H.target.value),
                    className: "sort-select",
                    children: de(R.columns).map((H) => /* @__PURE__ */ r.jsx("option", { value: H.value, children: H.label }, H.value))
                  }
                )
              ] }),
              k.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  ue(k.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  pt,
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
          ref: $,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${R?.label || "Data"} cards in ${k.gridRows} rows and ${k.gridColumns} columns`,
          "aria-rowcount": k.gridRows,
          "aria-colcount": k.gridColumns,
          id: `panel-${R?.id}`,
          "aria-labelledby": `tab-${R?.id}`,
          children: G(R?.data || []).map((H, Z) => {
            const B = k.selectedCardIndex === Z, T = k.focusedCardIndex === Z && k.focusArea === "cards", U = k.focusedCardIndex === Z && k.focusArea === "card" && k.isCardNavigationActive, ee = Z === 0 && k.focusArea !== "cards", ne = T || ee, q = J(Z, k.gridColumns);
            if (n.cardTemplate) {
              const Se = n.cardTemplate(H, R.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": q.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (we) => {
                        F.current[Z] = we;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        B ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        T ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        U ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": q.col + 1,
                      "aria-selected": B,
                      "aria-expanded": U,
                      "aria-description": U ? `Card navigation active. ${k.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: ne ? 0 : -1,
                      onClick: () => {
                        E((we) => ({
                          ...we,
                          selectedCardIndex: we.selectedCardIndex === Z ? -1 : Z
                        })), ae(H);
                      },
                      onKeyDown: (we) => P(we, Z),
                      onFocus: () => {
                        E((we) => we.isCardNavigationActive ? we : we.focusedCardIndex !== Z || we.focusArea !== "cards" ? {
                          ...we,
                          focusedCardIndex: Z,
                          focusArea: "cards"
                        } : we);
                      },
                      children: Se
                    }
                  )
                },
                `card-${Z}`
              );
            }
            const oe = rh(H, R.columns, M, w), ve = [
              oe.className || "",
              B ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              T ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              U ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
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
                      B ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      T ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      U ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": q.col + 1,
                    "aria-selected": B,
                    "aria-expanded": U,
                    onKeyDown: (Se) => {
                      Se.key === "Enter" && (Se.preventDefault(), E((we) => ({
                        ...we,
                        selectedCardIndex: Z
                      }))), P(Se, Z);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      el,
                      {
                        ...oe,
                        ref: (Se) => {
                          F.current[Z] = Se;
                        },
                        className: ve,
                        "aria-label": `${oe["aria-label"] || oe.heading}. ${U ? `Card navigation active with ${k.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: ne ? 0 : -1,
                        onClick: () => {
                          E((Se) => ({
                            ...Se,
                            selectedCardIndex: Se.selectedCardIndex === Z ? -1 : Z
                          })), ae(H);
                        },
                        onKeyDown: (Se) => P(Se, Z),
                        onFocus: () => {
                          k.isCardNavigationActive || E((Se) => Se.focusedCardIndex !== Z || Se.focusArea !== "cards" ? {
                            ...Se,
                            focusedCardIndex: Z,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : Se);
                        }
                      }
                    )
                  }
                )
              },
              `card-${Z}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: fe,
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
  return v === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${N || ""}`, children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      es,
      {
        tabPanels: d,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: y,
        orientation: m,
        id: g,
        disabled: L,
        selectedIndex: f,
        onTabChange: h,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: c,
        ...C
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${N || ""}`, children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      es,
      {
        tabPanels: d,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: y,
        orientation: m,
        id: g,
        disabled: L,
        selectedIndex: f,
        onTabChange: h,
        actions: l,
        forceActionsAbove: c,
        ...C
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, dl = (e) => {
  const t = ts.find((n) => n.value === e);
  return t ? t.icon : null;
}, ah = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = n.discountedPrice || n.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => dl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, sh = (e) => Ys(e, [
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
]), oh = {
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
  booleanRenderer: (e) => dl(e),
  getDataId: (e) => `financial-${e.id}`
}, ih = (e) => Ys(e, [
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
]), lh = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: ah,
    createTabs: sh
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: oh,
    createTabs: ih
  }
}, Go = (e, t) => {
  const n = lh[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, ul = [
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
], ch = [
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
], dh = [
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
], Vo = [
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
], Zo = [
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
], fh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, ph = () => [
  {
    id: "patients",
    label: "Patients",
    data: ul,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      al,
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
    data: ch,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      sl,
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
    data: dh,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      ol,
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
      il,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], hh = () => {
  const [e, t] = Fe("healthcare"), n = Te(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: zp,
      tabPanels: ph(),
      data: ul
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Go("ecommerce", Yo),
      data: Yo
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Go("financial", Vo),
      data: Vo
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: fh,
      tabPanels: Ys(Zo, [
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
      data: Zo
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
      es,
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
}, Dy = hh, fl = (e) => /* @__PURE__ */ r.jsx(ji, { ...e }), Ty = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = xn.TwoThirds,
  mainWrapperSize: s,
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  service: c,
  navigation: d,
  search: u,
  account: f,
  organisation: h,
  logo: p,
  className: y,
  ...m
}) => {
  const g = {
    service: c,
    navigation: d,
    search: u,
    account: f,
    organisation: h,
    logo: p,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Ki, { ...o }),
    /* @__PURE__ */ r.jsx($i, { ...g }),
    /* @__PURE__ */ r.jsx(fl, { className: y, ...m, children: /* @__PURE__ */ r.jsx(Mi, { size: s, children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsxs(qn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Xt, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(Ai, { ...l })
  ] });
}, Ly = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: a = xn.TwoThirds,
  mainWrapperSize: s = "small",
  // Default to small size for transactional forms
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  backLinkProps: c,
  serviceName: d,
  serviceHref: u,
  logo: f,
  className: h,
  ...p
}) => {
  const y = {
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
    /* @__PURE__ */ r.jsx(Ki, { ...o }),
    /* @__PURE__ */ r.jsx($i, { ...y }),
    /* @__PURE__ */ r.jsxs(fl, { className: h, ...p, children: [
      c && /* @__PURE__ */ r.jsx(Ya, { ...c }),
      /* @__PURE__ */ r.jsx(Mi, { size: s, children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsxs(qn, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(Xt, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(Ai, { ...l })
  ] });
}, pl = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = ye("nhsuk-back-link", a), c = ye("nhsuk-back-link__link"), d = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: s === "button" ? /* @__PURE__ */ r.jsx("button", { className: c, type: "button", onClick: o, ...i, children: d() }) : /* @__PURE__ */ r.jsx("a", { className: c, href: n, ...i, children: d() }) });
};
pl.displayName = "ForwardLink";
const Nn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function Jo() {
  return typeof window > "u" ? Nn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function hl() {
  const [e, t] = W.useState(Jo());
  W.useEffect(() => {
    if (typeof window > "u") return;
    const o = () => t(Jo());
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []);
  const n = W.useCallback((o) => e >= Nn[o], [e]), a = W.useCallback((o) => e < Nn[o], [e]), s = W.useCallback((o, i) => e >= Nn[o] && e < Nn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: s,
    /** Raw numeric values */
    values: Nn
  };
}
function $y(e) {
  const { width: t, values: n } = hl();
  let a = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const o of s) {
    const i = n[o];
    t >= i && e[o] !== void 0 && (a = e[o]);
  }
  return a;
}
function mh(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [s, o] = W.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = W.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return W.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    s ? c.set(n, String(s)) : c.delete(n), c.set(a, i ? "1" : "0");
    const d = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", d);
  }, [s, i, t, n, a]), { selectedId: s, setSelectedId: o, drilledIn: i, setDrilledIn: l };
}
const gh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
), xh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
function bh(e) {
  const {
    items: t,
    selectedId: n,
    defaultSelectedId: a,
    onSelectionChange: s,
    renderItemContent: o,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: c,
    animated: d = !0,
    backLabel: u = "Back",
    nextLabel: f = "Next",
    isLoading: h = !1,
    emptyState: p,
    a11y: y,
    className: m,
    getId: g = (me) => me.id,
    orientation: L = "vertical",
    autoEnableThirdColumn: N = !0,
    onDrillChange: C,
    navigationInstructions: v = "Use arrow keys to navigate, Enter to open.",
    initialFocus: b = "first",
    skipFocusOnSelect: j = !1,
    skipAnnouncements: M = !1,
    onFocusChange: w,
    syncUrl: x = !1,
    urlParamSelected: I = "nsv",
    urlParamDrill: _ = "nsvDrill",
    urlSyncDebounceMs: D = 0,
    lazySecondary: F = !1,
    navFooter: S,
    collapsibleNav: $ = !1,
    navInitiallyCollapsed: k = !1,
    onNavCollapseChange: E,
    collapseToggleLabelShow: ie = "Show navigation",
    collapseToggleLabelHide: J = "Hide navigation",
    collapseToggleIconShow: z,
    collapseToggleIconHide: X,
    persistNavCollapsed: O,
    navCollapsedStorageKey: ae = "nsvCollapsed",
    navCollapsedUrlParam: Y = "nsvCollapsed",
    autoContentHeader: V,
    contentHeaderLevel: fe = 2,
    renderContentHeader: pe,
    contentSubheader: de,
    secondarySubheader: K
  } = e, { up: te } = hl(), [ue, G] = W.useState(!1);
  W.useEffect(() => {
    G(!0);
  }, []);
  const ce = ue && te("medium"), le = ue && te("xlarge");
  let he;
  c ? he = c : ce ? he = "two-column" : he = "list", !c && N && l && le && (he = "three-column");
  const A = mh({
    enabled: x,
    paramSelected: I,
    paramDrill: _
  }), [P, re] = W.useState(
    () => A.selectedId !== void 0 ? A.selectedId : a
  ), se = n !== void 0 ? n : P, Q = t.find((me) => g(me) === se), [R, H] = W.useState(
    void 0
  );
  W.useEffect(() => {
    if (se === void 0) return;
    H(se);
    const me = setTimeout(() => H(void 0), 220);
    return () => clearTimeout(me);
  }, [se]);
  const Z = W.useRef(null), B = W.useRef(null), T = W.useRef(null), U = W.useRef(null), [ee, ne] = W.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [q, oe] = W.useState(() => "nav"), [ve, Se] = W.useState(0), we = () => [
    U.current,
    B.current,
    T.current
  ].filter(Boolean), Ne = (me) => {
    const ke = we(), be = Math.max(0, Math.min(me, ke.length - 1));
    ke[be]?.focus(), Se(be);
  }, ge = W.useCallback(
    (me) => me ? Array.from(me.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (be) => !be.hasAttribute("disabled") && be.tabIndex !== -1
    ) : [],
    []
  ), De = W.useCallback(
    (me) => {
      const ke = ge(B.current);
      if (!ke.length) {
        B.current?.focus();
        return;
      }
      const be = Math.max(0, Math.min(me, ke.length - 1)), Ee = ke[be];
      Ee.focus(), setTimeout(() => {
        document.activeElement !== Ee && (Ee.focus(), setTimeout(() => {
          document.activeElement !== Ee && Ee.click();
        }, 10));
      }, 10), ne((Ye) => ({ ...Ye, contentIndex: be }));
      const et = (Ye) => {
        Ye.key === "Escape" && (Ye.preventDefault(), Ye.stopPropagation(), B.current?.focus(), Ee.removeEventListener("keydown", et));
      };
      ke.forEach((Ye) => {
        const Je = Ye._escapeHandler;
        Je && Ye.removeEventListener("keydown", Je);
      }), Ee._escapeHandler = et, Ee.addEventListener("keydown", et);
    },
    [ge]
  ), Re = W.useCallback(
    (me) => {
      const ke = ge(T.current);
      if (!ke.length) {
        T.current?.focus();
        return;
      }
      const be = Math.max(0, Math.min(me, ke.length - 1)), Ee = ke[be];
      Ee.focus(), setTimeout(() => {
        document.activeElement !== Ee && (Ee.focus(), setTimeout(() => {
          document.activeElement !== Ee && Ee.click();
        }, 10));
      }, 10), ne((Ye) => ({ ...Ye, secondaryIndex: be }));
      const et = (Ye) => {
        Ye.key === "Escape" && (Ye.preventDefault(), Ye.stopPropagation(), T.current?.focus(), Ee.removeEventListener("keydown", et));
      };
      ke.forEach((Ye) => {
        const Je = Ye._escapeHandler;
        Je && Ye.removeEventListener("keydown", Je);
      }), Ee._escapeHandler = et, Ee.addEventListener("keydown", et);
    },
    [ge]
  ), Ze = (me) => {
    if (me.defaultPrevented) return;
    const ke = me.key, be = me.target, Ee = !!dt.current && dt.current.contains(be), et = !!B.current && B.current.contains(be), Ye = !!T.current && T.current.contains(be), Je = !!T.current, kn = be === U.current || be === B.current || be === T.current, dn = ze && (he === "list" || he === "cards"), fr = et && !!be.closest(".nhs-navigation-split-view__header");
    if (q === "containers" && kn) {
      if (ke === "ArrowRight") {
        me.preventDefault();
        const Pe = we(), qe = Math.min(Pe.length - 1, ve + 1);
        Ne(qe);
        return;
      }
      if (ke === "ArrowLeft") {
        me.preventDefault();
        const Pe = Math.max(0, ve - 1);
        Ne(Pe);
        return;
      }
      if (ke === "Home") {
        me.preventDefault(), Ne(0);
        return;
      }
      if (ke === "End") {
        me.preventDefault(), Ne(we().length - 1);
        return;
      }
      if (ke === "Enter" || ke === " ") {
        if (me.preventDefault(), be === U.current) {
          if (oe("nav"), dt.current) {
            const Pe = Array.from(
              dt.current.querySelectorAll("[data-nav-item]")
            );
            (Pe[nt >= 0 ? nt : 0] || Pe[0])?.focus();
          }
        } else be === B.current ? (oe("content"), De(ee.contentIndex)) : be === T.current && (oe("secondary"), Re(ee.secondaryIndex));
        return;
      }
      return;
    }
    if (ke === "Escape") {
      if (q === "content" || q === "secondary") {
        if (et || Ye) {
          if (me.preventDefault(), oe("nav"), dt.current) {
            const qe = Array.from(
              dt.current.querySelectorAll("[data-nav-item]")
            )[nt >= 0 ? nt : 0];
            setTimeout(() => qe?.focus(), 10);
          }
        } else if ((be === B.current || be === T.current) && (me.preventDefault(), oe("nav"), dt.current)) {
          const qe = Array.from(
            dt.current.querySelectorAll("[data-nav-item]")
          )[nt >= 0 ? nt : 0];
          setTimeout(() => qe?.focus(), 10);
        }
      }
      return;
    }
    if (ke === "Enter" || ke === " ") {
      if (be.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (be === B.current && q === "content") {
        me.preventDefault(), me.stopPropagation(), ge(B.current).length > 0 && setTimeout(() => {
          De(ee.contentIndex);
        }, 50);
        return;
      }
      if (be === T.current && q === "secondary") {
        me.preventDefault(), me.stopPropagation(), ge(
          T.current
        ).length > 0 && setTimeout(() => {
          Re(ee.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (dn && fr && !kn && (ke === "ArrowRight" || ke === "ArrowLeft")) {
      const Pe = ge(B.current).filter(
        (qe) => qe.closest(".nhs-navigation-split-view__header")
      );
      if (Pe.length > 1) {
        const qe = Pe.indexOf(be);
        if (qe >= 0) {
          const to = (qe + (ke === "ArrowRight" ? 1 : -1) + Pe.length) % Pe.length;
          me.preventDefault(), Pe[to].focus();
          return;
        }
      }
    }
    if (ke === "ArrowRight") {
      if (Ee || q === "nav") {
        me.preventDefault(), oe("content"), setTimeout(() => B.current?.focus(), 10);
        return;
      }
      if (et || q === "content") {
        Je && (me.preventDefault(), oe("secondary"), setTimeout(() => T.current?.focus(), 10));
        return;
      }
    }
    if (ke === "ArrowLeft") {
      if (Ye || q === "secondary") {
        me.preventDefault(), oe("content"), setTimeout(() => B.current?.focus(), 10);
        return;
      }
      if (et || q === "content") {
        if (me.preventDefault(), oe("nav"), dt.current) {
          const qe = Array.from(
            dt.current.querySelectorAll("[data-nav-item]")
          )[nt >= 0 ? nt : 0];
          setTimeout(() => qe?.focus(), 10);
        }
        return;
      }
    }
    if (ke === "Home" && !Ee && (me.preventDefault(), oe("nav"), dt.current)) {
      const Pe = Array.from(
        dt.current.querySelectorAll("[data-nav-item]")
      ), qe = Pe[nt >= 0 ? nt : 0] || Pe[0];
      setTimeout(() => qe?.focus(), 10);
    }
    if (ke === "End") {
      const Pe = Je ? T.current : B.current;
      Pe && !Pe.contains(be) && (me.preventDefault(), Je ? (oe("secondary"), setTimeout(() => T.current?.focus(), 10)) : (oe("content"), setTimeout(() => B.current?.focus(), 10)));
    }
    if (ke === "ArrowDown" || ke === "ArrowUp") {
      if (be === B.current && ke === "ArrowDown") {
        me.preventDefault(), ge(B.current).length > 0 && De(0);
        return;
      }
      if (be === T.current && ke === "ArrowDown") {
        me.preventDefault(), ge(
          T.current
        ).length > 0 && Re(0);
        return;
      }
      if (et) {
        const Pe = ge(B.current);
        if (Pe.length) {
          me.preventDefault();
          const qe = ke === "ArrowDown" ? 1 : -1, Tt = (ee.contentIndex + qe + Pe.length) % Pe.length;
          De(Tt);
        }
      } else if (Ye) {
        const Pe = ge(T.current);
        if (Pe.length) {
          me.preventDefault();
          const qe = ke === "ArrowDown" ? 1 : -1, Tt = (ee.secondaryIndex + qe + Pe.length) % Pe.length;
          Re(Tt);
        }
      }
    }
  }, ze = !!Q && (he === "list" || he === "cards"), at = W.useMemo(() => V === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : V === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : V === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: V.mobile !== void 0 ? V.mobile : !0,
    tablet: V.tablet || !1,
    desktop: V.desktop || !1
  }, [V]), kt = ue && te("medium") && !te("xlarge"), St = ue && te("xlarge"), xt = !!l, Ge = he === "three-column", [Ke, Pt] = W.useState(!1);
  W.useEffect(() => {
    Ge && Ke && Pt(!1);
  }, [Ge, Ke]), W.useEffect(() => {
    Ke && !Ge && (oe("secondary"), Se(2), setTimeout(() => {
      T.current?.focus();
    }, 50));
  }, [Ke, Ge]), W.useEffect(() => {
    !Ke && !Ge && q === "secondary" && (oe("content"), Se(1), setTimeout(() => {
      B.current?.focus();
    }, 50));
  }, [Ke, Ge, q]);
  const Ie = !!Q && (ze && at.mobile || !ze && kt && at.tablet || !ze && St && at.desktop) || xt && !Ge, $e = `h${fe}`, Qe = Q ? W.createElement(
    $e,
    {
      style: {
        marginLeft: ze ? 32 : 0,
        marginRight: ze ? 32 : 0
      }
    },
    Q.label
  ) : null, bt = ze ? "mobile" : kt ? "tablet" : "desktop", ht = xt && !Ge && !Ke, _t = ze && at.mobile ? /* @__PURE__ */ r.jsx(
    Ya,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => _n(void 0, void 0)
    }
  ) : void 0, tt = ht ? /* @__PURE__ */ r.jsx(
    pl,
    {
      element: "button",
      text: f,
      onClick: () => {
        Pt(!0);
      }
    }
  ) : void 0, Ae = !Ge && Ke ? /* @__PURE__ */ r.jsx(
    Ya,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => Pt(!1)
    }
  ) : void 0, It = W.useMemo(() => {
    if (!Ie || !Q) return null;
    if (pe)
      return pe({
        item: Q,
        detailActive: ze,
        context: bt,
        backLink: _t,
        defaultHeading: Qe
      });
    const me = Q && de ? typeof de == "function" ? de(Q) : de : null;
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
            Ae || _t,
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
                  Qe,
                  me && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: me })
                ]
              }
            )
          ]
        }
      ),
      tt && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: tt })
    ] });
  }, [
    Ie,
    Q,
    pe,
    ze,
    bt,
    _t,
    Ae,
    Qe,
    tt,
    de
  ]);
  W.useEffect(() => {
    if (!x) return;
    const me = he === "three-column";
    let ke = !1;
    const be = () => {
      ke || (A.selectedId !== se && A.setSelectedId(se), A.drilledIn !== me && A.setDrilledIn(me));
    };
    if (D && D > 0) {
      const Ee = setTimeout(be, D);
      return () => {
        ke = !0, clearTimeout(Ee);
      };
    } else
      be();
  }, [x, A, se, he, D]), W.useEffect(() => {
    if (!x) return;
    const me = () => {
      const ke = new URLSearchParams(window.location.search), be = ke.get(I);
      ke.get(_), re(be === null ? void 0 : be);
    };
    return window.addEventListener("popstate", me), () => window.removeEventListener("popstate", me);
  }, [
    x,
    I,
    _,
    c,
    l
  ]);
  const ur = W.useRef(0), Ft = W.useRef(
    null
  ), _n = W.useCallback(
    (me, ke) => {
      me !== se && (n === void 0 && re(me), s?.(me, ke));
    },
    [n, s, se]
  );
  W.useEffect(() => {
    if (!j && ze && B.current) {
      const me = setTimeout(() => B.current?.focus(), 30);
      return () => clearTimeout(me);
    }
  }, [ze, se, j]);
  const dt = W.useRef(null), [nt, zn] = W.useState(
    () => b === "first" ? 0 : -1
  );
  W.useEffect(() => {
    if (nt < 0 || !dt.current) return;
    const ke = Array.from(
      dt.current.querySelectorAll("[data-nav-item]")
    )[nt];
    if (ke) {
      document.activeElement !== ke && ke.focus(), ur.current = nt;
      const be = t[nt];
      w?.(
        be ? g(be) : void 0,
        be,
        nt
      );
    }
  }, [nt, t, w, g]);
  const Rc = (me) => {
    const ke = L === "vertical" ? "ArrowDown" : "ArrowRight", be = L === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (me.key === "ArrowRight" && L === "vertical") {
      me.preventDefault(), Ke ? (oe("secondary"), setTimeout(() => {
        T.current?.focus();
      }, 10)) : (oe("content"), setTimeout(() => {
        B.current?.focus();
      }, 10));
      return;
    }
    if (me.key === ke)
      me.preventDefault(), zn((Ee) => Math.min(t.length - 1, Ee + 1));
    else if (me.key === be)
      me.preventDefault(), zn((Ee) => Math.max(0, Ee - 1));
    else if (me.key === "Home")
      me.preventDefault(), zn(0);
    else if (me.key === "End")
      me.preventDefault(), zn(t.length - 1);
    else if (me.key === "Enter" || me.key === " ") {
      me.preventDefault();
      const Ee = t[nt];
      Ee && !Ee.disabled && _n(g(Ee), Ee);
    } else if (me.key.length === 1 && /[a-z0-9]/i.test(me.key)) {
      Ft.current || (Ft.current = { buffer: "", last: 0 });
      const Ee = Date.now(), et = 700, Ye = me.key.toLowerCase();
      Ee - Ft.current.last > et ? Ft.current.buffer = Ye : Ft.current.buffer += Ye, Ft.current.last = Ee;
      let Je = Ft.current.buffer;
      const kn = Je.split("").every((Tt) => Tt === Je[0]), dn = t.map(
        (Tt) => String(Tt.label || "").toLowerCase()
      );
      let fr = 0;
      nt >= 0 && (fr = (nt + 1) % t.length);
      let Pe;
      const qe = (Tt, to) => {
        const no = t.length;
        for (let Ca = 0; Ca < no; Ca++) {
          const Na = (fr + Ca) % no;
          if (!t[Na].disabled && dn[Na].startsWith(Tt))
            return Na;
        }
      };
      kn && Je.length > 1 ? Pe = qe(Je[0]) : (Pe = qe(Je), Pe === void 0 && Je.length > 1 && (Pe = qe(Je[Je.length - 1]), Pe !== void 0 && Ft.current && (Ft.current.buffer = Je[Je.length - 1]))), Pe !== void 0 && zn(Pe);
    }
  }, Bc = W.useMemo(() => {
    if (O && (O === "url" || O === "both") && typeof window < "u") {
      const ke = new URLSearchParams(window.location.search).get(Y);
      if (ke === "1") return !0;
      if (ke === "0") return !1;
    }
    if (O && (O === "localStorage" || O === "both") && typeof window < "u")
      try {
        const me = window.localStorage.getItem(ae);
        if (me === "1") return !0;
        if (me === "0") return !1;
      } catch {
      }
    return k;
  }, [
    O,
    k,
    ae,
    Y
  ]), [Dt, Hc] = W.useState(Bc);
  W.useEffect(() => {
    E?.(Dt);
  }, [Dt, E]);
  const zc = W.useCallback(() => {
    ce && $ && Hc((me) => !me);
  }, [ce, $]);
  W.useEffect(() => {
    if (O && !(typeof window > "u")) {
      if (O === "localStorage" || O === "both")
        try {
          window.localStorage.setItem(
            ae,
            Dt ? "1" : "0"
          );
        } catch {
        }
      if (O === "url" || O === "both") {
        const me = new URLSearchParams(window.location.search);
        me.set(Y, Dt ? "1" : "0");
        const ke = `${window.location.pathname}?${me.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", ke);
      }
    }
  }, [
    Dt,
    O,
    ae,
    Y
  ]);
  const Oc = [
    "nhs-navigation-split-view",
    d ? "nhs-navigation-split-view--animated" : "",
    ze ? "nhs-navigation-split-view--detail-active" : "",
    he === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    $ && ce && Dt ? "nhs-navigation-split-view--nav-collapsed" : "",
    m
  ].filter(Boolean).join(" "), _a = W.useRef(null);
  W.useEffect(() => {
    if (!M && _a.current) {
      const me = Q ? `Selected ${Q.label}` : "Selection cleared";
      _a.current.textContent = me;
    }
  }, [Q, M]), W.useEffect(() => {
    !ze && se == null && dt.current && dt.current.querySelectorAll("[data-nav-item]")[ur.current]?.focus();
  }, [ze, se]);
  const nn = he === "three-column", [ka, Uc] = W.useState(!1);
  W.useEffect(() => {
    nn && !ka && Uc(!0);
  }, [nn, ka]);
  const eo = W.useRef(nn);
  W.useEffect(() => {
    eo.current !== nn && (C?.(nn), eo.current = nn);
  }, [nn, C]);
  const Wc = () => {
    if (he === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": se ? String(se) : void 0,
          children: [
            t.map((be) => {
              const Ee = g(be), et = Ee === se;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": et,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(Ee),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": et || void 0,
                      "data-disabled": be.disabled || void 0,
                      disabled: be.disabled,
                      onClick: () => !be.disabled && _n(Ee, be),
                      children: [
                        be.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: be.icon }),
                        /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: be.label }),
                        be.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: be.description }),
                        o?.(be),
                        be.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: be.badge })
                      ]
                    }
                  )
                },
                Ee
              );
            }),
            t.length === 0 && !h && /* @__PURE__ */ r.jsx(
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
    const me = "nsv-nav-instructions", ke = W.useMemo(() => W.memo(
      ({
        item: be,
        idx: Ee,
        selected: et,
        focused: Ye
      }) => {
        const Je = g(be), kn = be.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Ye ? 0 : -1,
          onClick: () => {
            ur.current = Ee, _n(Je, be);
          },
          onKeyDown: (dn) => {
            (dn.key === "Enter" || dn.key === " ") && (dn.preventDefault(), ur.current = Ee, _n(Je, be));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(Je),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": et,
            "aria-current": et ? "true" : void 0,
            "data-selected": et || void 0,
            "data-disabled": be.disabled || void 0,
            ...kn,
            children: [
              be.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: be.icon }),
              /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: be.label }),
                be.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: be.description }),
                o?.(be)
              ] }),
              be.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: be.badge })
            ]
          }
        );
      }
    ), [g, _n, o]);
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "ul",
        {
          ref: dt,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Rc,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": me,
          "aria-activedescendant": se ? String(se) : void 0,
          children: [
            t.map((be, Ee) => /* @__PURE__ */ r.jsx(
              ke,
              {
                item: be,
                idx: Ee,
                selected: g(be) === se,
                focused: Ee === nt || nt === -1 && Ee === 0 && b === "first",
                "data-just-selected": g(be) === R ? "true" : void 0
              },
              g(be)
            )),
            t.length === 0 && !h && /* @__PURE__ */ r.jsx(
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
          id: me,
          style: {
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)"
          },
          children: v
        }
      )
    ] });
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: Z,
      className: Oc,
      "aria-label": y?.rootLabel,
      "data-layout": he,
      onKeyDown: Ze,
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
                  ref: U,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": y?.navigationLabel || "Items",
                  "data-collapsed": Dt || void 0,
                  tabIndex: 0,
                  children: [
                    $ && ce && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: zc,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": Dt ? ie : J,
                        title: Dt ? ie : J,
                        children: Dt ? z || /* @__PURE__ */ r.jsx(xh, {}) : X || /* @__PURE__ */ r.jsx(gh, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Wc() }),
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
                  ref: B,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": y?.contentLabel || "Content",
                  "data-has-selection": !!Q || void 0,
                  tabIndex: 0,
                  style: {
                    display: Ke && !Ge ? "none" : void 0
                  },
                  children: [
                    Ie && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: It }),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(Q)
                      }
                    )
                  ]
                }
              ),
              he === "three-column" && (!F || ka) || Ke && !Ge ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: T,
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
                        Ke && !Ge && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
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
                                  Ae,
                                  /* @__PURE__ */ r.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: Q && typeof Q == "object" && "label" in Q ? Q.label : String(Q) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        Q && K && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof K == "function" ? K(Q) : K
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(Q) })
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
            ref: _a,
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
            children: nn ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
bh.displayName = "NavigationSplitView";
const yh = typeof window < "u" && window.document ? W.useLayoutEffect : W.useEffect, qo = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), vh = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: s, topLaneIndex: o }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, c = `${e._pxWidth}px`, d = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${o})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, p = (m) => {
    h && (m.preventDefault(), a?.(e));
  }, y = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": s || !1,
    onClick: p,
    onKeyDown: (m) => {
      (m.key === "Enter" || m.key === " ") && p(m), m.key === "Escape" && s && p(m);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ye("nhsuk-product-roadmap__item", h && "nhsuk-product-roadmap__item--expandable", s && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: c, top: d, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": u,
      "aria-colspan": f,
      ...y,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          h && /* @__PURE__ */ r.jsx("span", { className: ye("nhsuk-product-roadmap__item-expander", s && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, wh = Gc(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: n = 400,
  itemMaxLines: a = 2,
  className: s,
  ariaLabel: o = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: c = "overlay",
  ...d
}) => {
  const [u, f] = Fe(() => /* @__PURE__ */ new Set()), [h, p] = Fe(() => /* @__PURE__ */ new Set()), y = Be(/* @__PURE__ */ new Set()), m = xe((D) => u.has(D), [u]), g = xe((D) => {
    f((F) => {
      const S = new Set(F);
      return S.has(D.id) ? (S.delete(D.id), p(($) => {
        const k = new Set($);
        return k.add(D.id), k;
      }), setTimeout(() => p(($) => {
        const k = new Set($);
        return k.delete(D.id), k;
      }), 240), l?.(D.id, !1)) : (S.add(D.id), l?.(D.id, !0)), S;
    });
  }, [l]);
  yh(() => {
    if (c !== "inline" || !i || typeof document > "u") return;
    const D = [];
    if (u.forEach((k) => {
      y.current.has(k) || D.push(k);
    }), y.current = new Set(u), !D.length) return;
    const F = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, S = D.map((k) => `.nhsuk-product-roadmap__inline-children[data-parent="${k}"] .nhsuk-product-roadmap__inline-child`).join(","), $ = Array.from(document.querySelectorAll(S));
    if ($.length) {
      if (F) {
        $.forEach((k) => {
          k.style.opacity = "1", k.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((k) => {
        (k.gsap || k.default || k).to($, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        $.forEach((k) => {
          k.style.opacity = "1", k.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, c, i]);
  const L = xe(() => {
    u.size && f(/* @__PURE__ */ new Set());
  }, [u]), N = ye("nhsuk-product-roadmap", s), C = qo(n, 120, 1200, 400), v = qo(a, 1, 6, 2), b = Te(() => e.map((D) => /* @__PURE__ */ new Date(D + " 01")), [e]), j = Te(() => {
    if (b.length === 0) {
      const S = /* @__PURE__ */ new Date();
      return [S, S];
    }
    const D = new Date(b[0]), F = er.offset(new Date(b[b.length - 1]), 1);
    return [D, F];
  }, [b]), M = Te(() => Gs().domain(j).range([0, b.length * C]), [j, b.length, C]), w = xe((D) => {
    if (D.startDate) {
      const J = new Date(D.startDate), z = new Date(D.endDate ?? D.startDate);
      z < J && z.setTime(J.getTime());
      const X = M(J), O = er.offset(new Date(z), 1);
      let ae = M(O);
      Number.isFinite(ae) || (ae = X + C);
      const Y = Math.max(C * 0.25, ae - X), V = X / C, fe = Y / C;
      return { ...D, _pxLeft: X, _pxWidth: Y, _startFraction: V, _spanColumns: fe };
    }
    const F = D.date ?? 1, S = D.dateOffset ?? 0, $ = D.length ?? 1, k = D.partialLength ?? 1, E = F - 1 + S, ie = $ - 1 + k;
    return { ...D, _pxLeft: E * C, _pxWidth: ie * C, _startFraction: E, _spanColumns: ie };
  }, [M, C]), x = Te(() => t.map((D) => {
    const S = D.roadmapItems.map((k) => {
      const E = !k.childItems && k.children ? { ...k, childItems: k.children } : { ...k };
      return w(E);
    }).sort((k, E) => k._pxLeft !== E._pxLeft ? k._pxLeft - E._pxLeft : E._pxWidth - k._pxWidth), $ = [];
    return S.forEach((k) => {
      const E = k._pxLeft, ie = k._pxLeft + k._pxWidth;
      let J = $.findIndex((z) => z <= E);
      J === -1 && (J = $.length, $.push(0)), $[J] = ie, k.verticalPosition = J + 1;
    }), { ...D, roadmapItems: S, _laneCount: $.length };
  }), [t, w]), I = Te(() => x.map((D) => D._laneCount || 1), [x]), _ = Te(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: N,
      style: { "--column-width": `${C}px`, gridTemplateColumns: _ },
      role: "grid",
      "aria-label": o,
      "aria-colcount": e.length + 1,
      "aria-rowcount": x.length + 1,
      ...d,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((D, F) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": F + 2, children: D }, `${D}-${F}`))
        ] }),
        x.map((D, F) => {
          const S = F + 2, $ = I[F];
          let k, E = 0, ie = [];
          i && c === "inline" && (ie = D.roadmapItems.filter((O) => m(O.id) && O.childItems && O.childItems.length).map((O) => ({ id: O.id, lane: O.verticalPosition || 1, count: O.childItems.length })).sort((O, ae) => O.lane - ae.lane), E = ie.reduce((O, ae) => O + ae.count, 0));
          const J = $ + E;
          k = `calc((${J} * var(--roadmap-item-block-height)) + (max(0, ${J} - 1) * var(--roadmap-row-gap)))`;
          const z = {};
          let X = 0;
          return ie.forEach((O) => {
            X += O.count, z[O.lane + 1] = X;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": S, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: D.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: k }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: D.roadmapItems.map((O, ae) => {
              const Y = (O.verticalPosition || 1) - 1, V = ie.filter((K) => K.lane - 1 < Y).reduce((K, te) => K + te.count, 0), fe = Y + V, pe = m(O.id), de = h.has(O.id);
              return /* @__PURE__ */ r.jsxs(gt.Fragment, { children: [
                /* @__PURE__ */ r.jsx(vh, { item: O, maxLines: v, enableDrilldown: i, onExpand: g, isActive: pe, topLaneIndex: fe, laneOffset: V }),
                i && c === "inline" && (pe || de) && O.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": O.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${O.title} child tasks`, children: O.childItems.map((K, te) => {
                  const ue = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let G = O._pxLeft, ce = O._pxWidth;
                  if (K.startDate) {
                    const A = new Date(K.startDate);
                    let P = K.endDate ? new Date(K.endDate) : new Date(A);
                    P < A && (P = new Date(A));
                    const re = new Date(P);
                    re.setDate(re.getDate() + 1);
                    const se = M(A);
                    let Q = M(re);
                    (!Number.isFinite(Q) || Q <= se) && (Q = se + 6), G = se, ce = Math.max(6, Q - se);
                  }
                  const he = fe + 1 + te;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: ye("nhsuk-product-roadmap__inline-child", K.status && `nhsuk-product-roadmap__inline-child--status-${K.status}`, !pe && de && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${G}px`, width: `${ce}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${he})`, height: ue, opacity: pe ? 0 : void 0, transform: pe ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: K.title })
                      ]
                    },
                    K.id ?? te
                  );
                }) })
              ] }, O.id ?? ae);
            }) }) })
          ] }, `${D.heading}-${F}`);
        }),
        i && c === "overlay" && u.size === 1 && (() => {
          const D = Array.from(u)[0], F = t.flatMap((S) => S.roadmapItems).find((S) => S.id === D);
          return !F || !F.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${F.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: F.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: L, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: F.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: F.childItems.map((S, $) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: S.title }),
                S.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: S.content })
              ] }, S.id ?? $)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: L, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
wh.displayName = "ProductRoadmap";
function ml(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = ml(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Er() {
  for (var e, t, n = 0, a = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = ml(e)) && (a && (a += " "), a += t);
  return a;
}
function it(e) {
  return function() {
    return e;
  };
}
const ns = Math.PI, rs = 2 * ns, un = 1e-6, Sh = rs - un;
function gl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function _h(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return gl;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let s = 1, o = a.length; s < o; ++s)
      this._ += Math.round(arguments[s] * n) / n + a[s];
  };
}
class kh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? gl : _h(t);
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
    let i = this._x1, l = this._y1, c = a - t, d = s - n, u = i - t, f = l - n, h = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > un) if (!(Math.abs(f * c - d * u) > un) || !o)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let p = a - i, y = s - l, m = c * c + d * d, g = p * p + y * y, L = Math.sqrt(m), N = Math.sqrt(h), C = o * Math.tan((ns - Math.acos((m + h - g) / (2 * L * N))) / 2), v = C / N, b = C / L;
      Math.abs(v - 1) > un && this._append`L${t + v * u},${n + v * f}`, this._append`A${o},${o},0,0,${+(f * p > u * y)},${this._x1 = t + b * c},${this._y1 = n + b * d}`;
    }
  }
  arc(t, n, a, s, o, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(s), c = a * Math.sin(s), d = t + l, u = n + c, f = 1 ^ i, h = i ? s - o : o - s;
    this._x1 === null ? this._append`M${d},${u}` : (Math.abs(this._x1 - d) > un || Math.abs(this._y1 - u) > un) && this._append`L${d},${u}`, a && (h < 0 && (h = h % rs + rs), h > Sh ? this._append`A${a},${a},0,1,${f},${t - l},${n - c}A${a},${a},0,1,${f},${this._x1 = d},${this._y1 = u}` : h > un && this._append`A${a},${a},0,${+(h >= ns)},${f},${this._x1 = t + a * Math.cos(o)},${this._y1 = n + a * Math.sin(o)}`);
  }
  rect(t, n, a, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+s}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function xl(e) {
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
  }, () => new kh(t);
}
function bl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function yl(e) {
  this._context = e;
}
yl.prototype = {
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
function vl(e) {
  return new yl(e);
}
function wl(e) {
  return e[0];
}
function Sl(e) {
  return e[1];
}
function _l(e, t) {
  var n = it(!0), a = null, s = vl, o = null, i = xl(l);
  e = typeof e == "function" ? e : e === void 0 ? wl : it(e), t = typeof t == "function" ? t : t === void 0 ? Sl : it(t);
  function l(c) {
    var d, u = (c = bl(c)).length, f, h = !1, p;
    for (a == null && (o = s(p = i())), d = 0; d <= u; ++d)
      !(d < u && n(f = c[d], d, c)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+e(f, d, c), +t(f, d, c));
    if (p) return o = null, p + "" || null;
  }
  return l.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : it(+c), l) : e;
  }, l.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : it(+c), l) : t;
  }, l.defined = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : it(!!c), l) : n;
  }, l.curve = function(c) {
    return arguments.length ? (s = c, a != null && (o = s(a)), l) : s;
  }, l.context = function(c) {
    return arguments.length ? (c == null ? a = o = null : o = s(a = c), l) : a;
  }, l;
}
function as(e, t, n) {
  var a = null, s = it(!0), o = null, i = vl, l = null, c = xl(d);
  e = typeof e == "function" ? e : e === void 0 ? wl : it(+e), t = typeof t == "function" ? t : it(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? Sl : it(+n);
  function d(f) {
    var h, p, y, m = (f = bl(f)).length, g, L = !1, N, C = new Array(m), v = new Array(m);
    for (o == null && (l = i(N = c())), h = 0; h <= m; ++h) {
      if (!(h < m && s(g = f[h], h, f)) === L)
        if (L = !L)
          p = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), y = h - 1; y >= p; --y)
            l.point(C[y], v[y]);
          l.lineEnd(), l.areaEnd();
        }
      L && (C[h] = +e(g, h, f), v[h] = +t(g, h, f), l.point(a ? +a(g, h, f) : C[h], n ? +n(g, h, f) : v[h]));
    }
    if (N) return l = null, N + "" || null;
  }
  function u() {
    return _l().defined(s).curve(i).context(o);
  }
  return d.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : it(+f), a = null, d) : e;
  }, d.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : it(+f), d) : e;
  }, d.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : it(+f), d) : a;
  }, d.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : it(+f), n = null, d) : t;
  }, d.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : it(+f), d) : t;
  }, d.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : it(+f), d) : n;
  }, d.lineX0 = d.lineY0 = function() {
    return u().x(e).y(t);
  }, d.lineY1 = function() {
    return u().x(e).y(n);
  }, d.lineX1 = function() {
    return u().x(a).y(t);
  }, d.defined = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : it(!!f), d) : s;
  }, d.curve = function(f) {
    return arguments.length ? (i = f, o != null && (l = i(o)), d) : i;
  }, d.context = function(f) {
    return arguments.length ? (f == null ? o = l = null : l = i(o = f), d) : o;
  }, d;
}
function Xo(e) {
  return e < 0 ? -1 : 1;
}
function Qo(e, t, n) {
  var a = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (a || s < 0 && -0), i = (n - e._y1) / (s || a < 0 && -0), l = (o * s + i * a) / (a + s);
  return (Xo(o) + Xo(i)) * Math.min(Math.abs(o), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function Ko(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Fa(e, t, n) {
  var a = e._x0, s = e._y0, o = e._x1, i = e._y1, l = (o - a) / 3;
  e._context.bezierCurveTo(a + l, s + l * t, o - l, i - l * n, o, i);
}
function Pr(e) {
  this._context = e;
}
Pr.prototype = {
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
        Fa(this, this._t0, Ko(this, this._t0));
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
          this._point = 3, Fa(this, Ko(this, n = Qo(this, e, t)), n);
          break;
        default:
          Fa(this, this._t0, n = Qo(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(Pr.prototype).point = function(e, t) {
  Pr.prototype.point.call(this, t, e);
};
function Fr(e) {
  return new Pr(e);
}
function Ch(e, t, n) {
  const a = Ei(e, t);
  return Gs().domain(a).range(n);
}
function ei(e, t, n) {
  const [a, s] = Ei(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(s)))
    return Ir().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const c = s - a, d = (c > 0 ? c : a) * 0.1;
    i = Math.max(0, a - d), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = s ?? 0;
  return Ir().domain([i, l]).nice().range(n);
}
function ss(e, t, n, a) {
  const s = _l().x(t).y(n);
  return a?.smooth !== !1 && s.curve(Fr), s(e) ?? "";
}
function Nh(e = {}) {
  const t = W.useRef(null), n = W.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, s] = W.useState({ width: 0, height: 0 });
  W.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((c) => {
      for (const d of c) {
        const { width: u, height: f } = d.contentRect;
        s({ width: u, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const o = Math.max(0, a.width - n.left - n.right), i = Math.max(0, a.height - n.top - n.bottom);
  return { width: a.width, height: a.height, innerWidth: o, innerHeight: i, margin: n, ref: t };
}
const kl = W.createContext(null);
function cn() {
  return W.useContext(kl);
}
const jh = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: s,
  role: o = "group",
  ariaLabel: i
}) => {
  const l = Nh(t), c = { height: e, position: "relative" };
  return n !== void 0 && (c.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: c, role: o, "aria-label": i, children: /* @__PURE__ */ r.jsx(kl.Provider, { value: l, children: s }) });
}, Vs = W.createContext(null), Sn = () => W.useContext(Vs), Mh = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: s,
  xTickCount: o = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: c,
  yPadding: d,
  yBottomGapPx: u
}) => {
  const f = cn(), h = t ?? f?.innerWidth ?? 0, p = n ?? f?.innerHeight ?? 0, y = W.useMemo(() => e.flatMap((b) => b.data), [e]), m = W.useCallback(
    (b) => {
      if (a) return a(b);
      const j = b.x;
      return j instanceof Date ? j : new Date(j);
    },
    [a]
  ), g = c ?? 6, L = d ?? 6, N = W.useMemo(
    () => Ch(y, m, [
      g,
      Math.max(0, h - g)
    ]),
    [y, m, h, g]
  ), C = W.useMemo(() => {
    const b = Math.max(0, u ?? 0), j = Math.max(0, p - (L + b));
    if (l) {
      const M = ei([], (w) => w.y, [
        j,
        L
      ]);
      return M.domain(l), M;
    }
    return ei(y, (M) => M.y, [j, L]);
  }, [y, p, l, L, u]), v = W.useMemo(
    () => ({
      xScale: N,
      yScale: C,
      getXTicks: (b = o) => N.ticks(b),
      getYTicks: (b = i) => C.ticks(b)
    }),
    [N, C, o, i]
  );
  return /* @__PURE__ */ r.jsx(Vs.Provider, { value: v, children: s });
}, yr = 16, vr = 6, Ih = 16, Dh = 4, Th = 6, Lh = 3, $h = void 0, ti = ({
  type: e,
  scale: t,
  tickCount: n,
  tickValues: a,
  formatTick: s,
  label: o,
  offset: i,
  className: l,
  minLabelSpacing: c,
  maxTickLabelLength: d,
  autoMinLabelSpacing: u = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: h = !0,
  tickFormatPreset: p,
  yZeroBreak: y
}) => {
  const m = Sn(), g = cn(), L = t || (e === "x" ? m?.xScale : m?.yScale), N = n ?? (e === "x" ? 6 : 5), C = typeof s == "function", v = W.useMemo(() => {
    if (C || !p) return;
    const M = (w) => new Intl.DateTimeFormat(void 0, w);
    switch (p) {
      case "dayShortMonth":
        return (w) => {
          const x = w instanceof Date ? w : new Date(w);
          return `${x.getDate()}
${M({ month: "short" }).format(x)}`;
        };
      case "dayShortMonthYear":
        return (w) => {
          const x = w instanceof Date ? w : new Date(w);
          return `${x.getDate()}
${M({ month: "short" }).format(x)} ${x.getFullYear()}`;
        };
      case "shortMonth":
        return (w) => {
          const x = w instanceof Date ? w : new Date(w);
          return M({ month: "short" }).format(x);
        };
      case "shortMonthYear":
        return (w) => {
          const x = w instanceof Date ? w : new Date(w);
          return `${M({ month: "short" }).format(x)} ${x.getFullYear()}`;
        };
      case "hourMinute":
        return (w) => {
          const x = w instanceof Date ? w : new Date(w);
          return M({ hour: "2-digit", minute: "2-digit" }).format(x);
        };
      default:
        return;
    }
  }, [C, p]);
  let b = C ? s : v || ((M) => String(M));
  const j = W.useMemo(() => a && Array.isArray(a) ? a : L ? typeof L.ticks == "function" ? L.ticks(N) : L.domain ? L.domain() : [] : [], [L, N, a]);
  if (e === "x" && !C && !p && j.length && j.every((M) => M instanceof Date)) {
    const M = j[0], w = j[j.length - 1], x = w.getTime() - M.getTime(), I = 24 * 3600 * 1e3, _ = 365 * I, D = M.getFullYear() === w.getFullYear(), F = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (x < 2 * I) {
      const S = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      b = ($) => S.format($);
    } else if (x < 32 * I)
      b = (S) => {
        const $ = S;
        return `${$.getDate()} ${F.format($)}`;
      };
    else if (x < _ && D)
      b = (S) => F.format(S);
    else if (x < 2 * _) {
      const S = /* @__PURE__ */ new Set();
      b = ($) => {
        const k = $, E = k.getMonth();
        return S.has(E) || S.add(E), `${F.format(k)} ${k.getFullYear()}`;
      };
    } else
      b = (S) => String(S.getFullYear());
  }
  if (!L || !g) return null;
  if (e === "x") {
    const M = i ?? g.innerHeight, w = typeof L.bandwidth == "function", x = w ? L.bandwidth() : 0, I = (F) => {
      const S = L(F);
      return w ? S + x / 2 : S;
    };
    let _ = c ?? 0;
    if (u && c == null) {
      const F = j.map(
        ($) => b($).replace(/\n.*/g, "")
      ), S = F.length ? F.reduce(($, k) => $ + k.length, 0) / F.length : 0;
      _ = Math.max(12, Math.round(S * 6 + 4));
    }
    const D = W.useMemo(() => {
      if (a && Array.isArray(a) || _ <= 0) return j;
      const F = [];
      let S = -1 / 0;
      for (const $ of j) {
        const k = I($);
        k - S >= _ && (F.push($), S = k);
      }
      return F;
    }, [
      j,
      L,
      _,
      a,
      w,
      x
    ]);
    return /* @__PURE__ */ r.jsxs(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "),
        transform: `translate(0,${M})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
        children: [
          /* @__PURE__ */ r.jsx("line", { x1: 0, x2: g.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
          D.map((F, S) => {
            const $ = b(F), k = d && $.length > d ? $.slice(0, Math.max(1, d - 1)) + "…" : $, E = h ? k.split(/\n/) : [k.replace(/\n/g, " ")], ie = f < 0 ? "end" : f > 0 ? "start" : "middle";
            return /* @__PURE__ */ r.jsxs(
              "g",
              {
                transform: `translate(${I(F)},0)`,
                children: [
                  /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
                  /* @__PURE__ */ r.jsxs(
                    "text",
                    {
                      y: 9,
                      textAnchor: ie,
                      className: "fdp-axis__tick",
                      dominantBaseline: "hanging",
                      transform: f ? `rotate(${f})` : void 0,
                      fontFamily: "inherit",
                      children: [
                        E.map((J, z) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: z === 0 ? 0 : "1.1em", children: J }, z)),
                        k !== $ && /* @__PURE__ */ r.jsx("title", { children: $ })
                      ]
                    }
                  )
                ]
              },
              F?.toString?.() || S
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
          const M = !!y?.enabled, w = Math.max(vr, y?.gapPx ?? yr);
          if (!M)
            return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: g.innerHeight, stroke: "currentColor" });
          const x = Math.max(0, g.innerHeight - w);
          return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: x, stroke: "currentColor" });
        })(),
        j.map((M, w) => {
          const x = b(M), I = d && x.length > d ? x.slice(0, Math.max(1, d - 1)) + "…" : x, _ = h ? I.split(/\n/) : [I.replace(/\n/g, " ")];
          if (!!y?.enabled) {
            const F = Math.max(vr, y?.gapPx ?? yr), S = Math.max(0, g.innerHeight - F);
            if (L(M) > S - 1) return null;
          }
          return /* @__PURE__ */ r.jsxs(
            "g",
            {
              transform: `translate(0,${L(M)})`,
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
                      _.map((F, S) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: S === 0 ? 0 : "1.1em", children: F }, S)),
                      I !== x && /* @__PURE__ */ r.jsx("title", { children: x })
                    ]
                  }
                )
              ]
            },
            M?.toString?.() || w
          );
        }),
        !!y?.enabled && (() => {
          const M = Math.max(vr, y?.gapPx ?? yr), w = g.innerHeight, I = Math.max(0, w - M), _ = I, F = Math.max(4, w - _), S = Dh, $ = Th, k = Math.max(1, Math.round(y?.zigZag?.amplitudePx ?? S)), E = Math.max(1, Math.round(y?.zigZag?.stepXPx ?? Lh)), ie = y?.zigZag?.heightPx ?? $h, J = Math.max(4, Math.round(ie ?? 0));
          let z, X;
          if (y?.zigZag?.heightPx && y.zigZag.heightPx > 0) {
            const de = Math.max(4, Math.min(F - 2, J));
            z = Math.max(1, Math.floor(de / (2 * k))), X = Math.max(0, Math.min(de, z * 2 * k));
          } else typeof y?.zigZag?.cycles == "number" && y?.zigZag?.cycles > 0 ? (z = Math.max(1, Math.round(y.zigZag.cycles)), X = z * 2 * k, X = Math.min(X, F - 2), z = Math.max(1, Math.floor(X / (2 * k)))) : (z = $, X = Math.min(F - 2, z * 2 * k), z = Math.max(1, Math.floor(X / (2 * k))));
          const O = _ + (F - X) / 2, ae = O + X;
          let Y = "M0,0";
          const V = X > 0 ? Math.max(0, Math.floor((X - k) / (2 * k))) : 0, fe = Math.max(0, (X - V * 2 * k) / 2), pe = k > 0 ? E * (fe / k) : 0;
          fe > 0 && (Y += ` l${pe},${fe}`);
          for (let de = 0; de < V; de++)
            Y += ` l-${E},${k} l${E},${k}`;
          return fe > 0 && (Y += ` l-${pe},${fe}`), /* @__PURE__ */ r.jsxs("g", { children: [
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: I, y2: O, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${O})`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("path", { d: Y, stroke: "currentColor", fill: "none" }) }),
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: ae, y2: w, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${w})`, children: /* @__PURE__ */ r.jsx("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: "0" }) })
          ] });
        })(),
        o && /* @__PURE__ */ r.jsx(
          "text",
          {
            transform: "rotate(-90)",
            x: -g.innerHeight / 2,
            y: -g.margin.left + 12,
            textAnchor: "middle",
            className: "fdp-axis__label",
            fontFamily: "inherit",
            children: o
          }
        )
      ]
    }
  );
}, Ah = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: s
}) => {
  const o = Sn(), i = cn();
  if (!o || !i) return null;
  const l = e === "y" ? o.getYTicks(t) : o.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", s].filter(Boolean).join(" "), children: [
    e === "y" && l.map((c, d) => /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: 0,
        x2: i.innerWidth,
        y1: o.yScale(c),
        y2: o.yScale(c),
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
        x1: o.xScale(c),
        x2: o.xScale(c),
        stroke: n,
        strokeDasharray: a
      },
      d
    ))
  ] });
}, Eh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, lr = {
  color: Eh
}, Ph = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, ga = {
  color: Ph
}, Fh = [
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
let Ra = null, Ba = null, Ha = null, Cl = "optimized";
function Rh() {
  const e = { color: { ...ga.color, ...lr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
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
    return Fh;
  }
}
function Bh() {
  return Ra || (Ra = Rh()), Ra;
}
function Hh(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function za(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function zh(e, t, n) {
  const a = za(e), s = za(t), o = za(n), i = a * 0.4124 + s * 0.3576 + o * 0.1805, l = a * 0.2126 + s * 0.7152 + o * 0.0722, c = a * 0.0193 + s * 0.1192 + o * 0.9505;
  return { x: i * 100, y: l * 100, z: c * 100 };
}
function Oh(e, t, n) {
  let i = e / 95.047, l = t / 100, c = n / 108.883;
  const d = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = d(i), l = d(l), c = d(c), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - c) };
}
function Nl(e) {
  const t = Hh(e);
  if (!t) return null;
  const n = zh(t.r, t.g, t.b);
  return Oh(n.x, n.y, n.z);
}
function ni(e, t) {
  const n = e.L - t.L, a = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(n * n + a * a + s * s);
}
function Uh() {
  const e = Bh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Nl(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let c = 0, d = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (c += ni(l, t[f]), d++);
    const u = c / Math.max(1, d);
    u > a && (a = u, n = i);
  }
  const s = new Set(e.map((i, l) => l)), o = [];
  for (o.push(n), s.delete(n); s.size; ) {
    let i = Array.from(s)[0], l = -1;
    for (const c of s) {
      const d = t[c];
      if (!d) continue;
      let u = 1 / 0;
      for (const f of o) {
        const h = t[f];
        if (h) {
          const p = ni(d, h);
          p < u && (u = p);
        }
      }
      u > l && (l = u, i = c);
    }
    o.push(i), s.delete(i);
  }
  return o.map((i) => e[i]);
}
function Wh() {
  return Ba || (Ba = Uh()), Ba;
}
function Gh(e, t, n) {
  const a = (e + 16) / 116, s = t / 500 + a, o = a - n / 200, i = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, l = i(s) * 95.047, c = i(a) * 100, d = i(o) * 108.883;
  return { X: l, Y: c, Z: d };
}
function Yh(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, s = e * -0.9689 + t * 1.8758 + n * 0.0415, o = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), o = Math.min(1, Math.max(0, i(o))), { r: Math.round(a * 255), g: Math.round(s * 255), b: Math.round(o * 255) };
}
function Vh(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function Zh(e, t) {
  const n = Nl(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: s, Y: o, Z: i } = Gh(a, n.a, n.b), l = Yh(s, o, i);
  return Vh(l.r, l.g, l.b);
}
function Jh() {
  const e = Wh(), n = [12, -12, 24, -24].map((s) => e.map((o) => Zh(o, s))), a = [...e];
  return n.forEach((s) => a.push(...s)), a;
}
function qh() {
  return (!Ha || Xh()) && (Ha = Jh(), jl = Cl), Ha;
}
let jl = null;
function Xh() {
  return jl !== Cl;
}
function Et(e) {
  const t = qh();
  return t[e % t.length];
}
let Ln = null, tr = null, nr = null, rr = null;
function Qh() {
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
function xa() {
  (!Ln || !tr || !nr || !rr) && Qh();
}
function yn(e) {
  return xa(), Ln ? Ln[e % Ln.length] : "#212b32";
}
function Kh(e) {
  return xa(), tr ? tr[e] : void 0;
}
function Rr(e, t) {
  return Kh(e) || yn(t);
}
const os = ["low", "moderate", "high", "critical"];
let Oa = null;
function em() {
  const e = { color: { ...ga.color, ...lr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, n = {};
  return os.forEach((a) => {
    const s = t(`color.data-viz.severity.${a}`);
    s && (n[a] = s);
  }), n;
}
function Ml() {
  return Oa || (Oa = em()), Oa;
}
function tm(e) {
  return Ml()[e.toLowerCase()];
}
function nm(e, t) {
  return tm(e) || Ml()[os[t % os.length]] || Et(t);
}
function rm(e) {
  return xa(), nr ? nr[e] : void 0;
}
function am(e, t) {
  return rm(e) || yn(t);
}
const is = ["trust", "ambulance", "icb", "region"];
let Ua = null;
function sm() {
  const e = { color: { ...ga.color, ...lr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, n = {};
  return is.forEach((a) => {
    const s = t(`color.data-viz.org-level.${a}`);
    s && (n[a] = s);
  }), n;
}
function Il() {
  return Ua || (Ua = sm()), Ua;
}
function om(e) {
  return Il()[e.toLowerCase()];
}
function im(e, t) {
  return om(e) || Il()[is[t % is.length]] || Et(t);
}
function lm(e) {
  return xa(), rr ? rr[e] : void 0;
}
function cm(e, t) {
  return lm(e) || yn(t);
}
let Wa = null;
const dm = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function um(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function fm() {
  const e = { color: { ...ga.color, ...lr.color } }, t = (s, o = /* @__PURE__ */ new Set()) => {
    if (o.has(s)) return;
    o.add(s);
    const i = s.split(".").reduce((c, d) => c ? c[d] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), o) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return dm.forEach((s) => {
    const o = t(`color.data-viz.region.${s}`);
    o ? n[s] = o : a.push(s);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function pm() {
  return Wa || (Wa = fm()), Wa;
}
function hm(e) {
  return pm()[um(e)];
}
function $n(e, t) {
  return hm(e) || Et(t);
}
const Dl = W.createContext(null), cr = () => W.useContext(Dl), Ay = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [s, o] = W.useState(() => new Set(e)), i = n !== void 0, l = W.useMemo(() => i ? new Set(n) : s, [i, n, s]), c = W.useCallback((u) => {
    i || o(new Set(u)), a?.(Array.from(u));
  }, [i, a]), d = W.useMemo(() => ({
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
  return /* @__PURE__ */ r.jsx(Dl.Provider, { value: d, children: t });
}, Tl = W.createContext(null), tn = () => W.useContext(Tl), mm = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Sn(), s = cr(), [o, i] = W.useState(null), l = W.useRef(/* @__PURE__ */ new Map()), [c, d] = W.useState([]), u = W.useCallback(
    (M, w) => {
      l.current.set(M, w);
    },
    []
  ), f = W.useCallback((M) => {
    l.current.delete(M);
  }, []), h = W.useCallback(
    (M, w) => {
      if (!a) return;
      const { xScale: x, yScale: I } = a;
      let _ = null, D = 1 / 0;
      l.current.forEach((F, S) => {
        F.forEach(($, k) => {
          const E = x($.x), ie = I($.y), J = E - M, z = ie - w, X = Math.sqrt(J * J + z * z);
          X < D && (D = X, _ = {
            seriesId: S,
            index: k,
            x: $.x,
            y: $.y,
            clientX: E,
            clientY: ie
          });
        });
      }), _ && D <= t ? i(_) : i(null);
    },
    [a, t]
  ), p = W.useCallback(() => i(null), []);
  W.useEffect(() => {
    if (!o) {
      d([]);
      return;
    }
    if (!a) return;
    const { xScale: M, yScale: w } = a, x = [];
    l.current.forEach((I, _) => {
      I.forEach((D, F) => {
        (o.x instanceof Date && D.x instanceof Date ? D.x.getTime() === o.x.getTime() : D.x === o.x) && x.push({
          seriesId: _,
          index: F,
          x: D.x,
          y: D.y,
          clientX: M(D.x),
          clientY: w(D.y)
        });
      });
    }), x.sort((I, _) => I.seriesId.localeCompare(_.seriesId)), d(x);
  }, [o, a]);
  const y = W.useCallback(
    (M) => {
      if (!o) return;
      const w = l.current.get(o.seriesId);
      if (!w) return;
      let x = o.index + M;
      if (x < 0 || x >= w.length) {
        if (!n) return;
        x = (x + w.length) % w.length;
      }
      const I = w[x];
      if (!a) return;
      const { xScale: _, yScale: D } = a;
      i({
        seriesId: o.seriesId,
        index: x,
        x: I.x,
        y: I.y,
        clientX: _(I.x),
        clientY: D(I.y)
      });
    },
    [o, a, n]
  ), m = W.useCallback(
    (M) => {
      let w = Array.from(l.current.keys());
      if (s && (w = w.filter((E) => !s.isHidden(E))), w.length === 0) return;
      if (!o) {
        const E = w[0], ie = l.current.get(E);
        if (!ie || !a) return;
        const { xScale: J, yScale: z } = a, X = ie[0];
        i({
          seriesId: E,
          index: 0,
          x: X.x,
          y: X.y,
          clientX: J(X.x),
          clientY: z(X.y)
        });
        return;
      }
      const x = w.indexOf(o.seriesId);
      if (x === -1) return;
      let I = x + M;
      if (I < 0 || I >= w.length) {
        if (!n) return;
        I = (I + w.length) % w.length;
      }
      const _ = w[I], D = l.current.get(_);
      if (!D || !a) return;
      const F = Math.min(o.index, D.length - 1), S = D[F], { xScale: $, yScale: k } = a;
      i({
        seriesId: _,
        index: F,
        x: S.x,
        y: S.y,
        clientX: $(S.x),
        clientY: k(S.y)
      });
    },
    [o, a, n, s]
  ), g = W.useCallback(() => {
    let M = Array.from(l.current.keys());
    if (s && (M = M.filter((F) => !s.isHidden(F))), M.length === 0) return;
    const w = o ? o.seriesId : M[0], x = l.current.get(w);
    if (!x || x.length === 0 || !a) return;
    const I = x[0], { xScale: _, yScale: D } = a;
    i({
      seriesId: w,
      index: 0,
      x: I.x,
      y: I.y,
      clientX: _(I.x),
      clientY: D(I.y)
    });
  }, [o, a, s]), L = W.useCallback(() => {
    let M = Array.from(l.current.keys());
    if (s && (M = M.filter((S) => !s.isHidden(S))), M.length === 0) return;
    const w = o ? o.seriesId : M[0], x = l.current.get(w);
    if (!x || x.length === 0 || !a) return;
    const I = x.length - 1, _ = x[I], { xScale: D, yScale: F } = a;
    i({
      seriesId: w,
      index: I,
      x: _.x,
      y: _.y,
      clientX: D(_.x),
      clientY: F(_.y)
    });
  }, [o, a, s]), N = W.useCallback(
    () => y(1),
    [y]
  ), C = W.useCallback(
    () => y(-1),
    [y]
  ), v = W.useCallback(
    () => m(1),
    [m]
  ), b = W.useCallback(
    () => m(-1),
    [m]
  ), j = W.useMemo(
    () => ({
      focused: o,
      setFocused: i,
      aggregated: c,
      focusNearest: h,
      clear: p,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: N,
      focusPrevPoint: C,
      focusNextSeries: v,
      focusPrevSeries: b,
      focusFirstPoint: g,
      focusLastPoint: L
    }),
    [
      o,
      c,
      h,
      p,
      u,
      f,
      N,
      C,
      v,
      b,
      g,
      L
    ]
  );
  return /* @__PURE__ */ r.jsx(Tl.Provider, { value: j, children: e });
}, gm = ({
  series: e,
  seriesIndex: t,
  palette: n,
  showPoints: a,
  focusablePoints: s,
  focusIndex: o,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: c = 1,
  smooth: d = !0,
  gradientFillId: u,
  colors: f
}) => {
  const h = Sn();
  if (!h) return null;
  const { xScale: p, yScale: y } = h, g = cr()?.isHidden(e.id) ?? !1, L = g && l === "fade";
  if (g && l === "remove")
    return null;
  const N = tn();
  W.useEffect(() => {
    if (!N) return;
    const w = e.data.map((x) => ({ x: i(x), y: x.y }));
    return N.registerSeries(e.id, w), () => N.unregisterSeries(e.id);
  }, [N, e.id, e.data, i]);
  const C = W.useMemo(
    () => ss(
      e.data,
      (w) => p(i(w)),
      (w) => y(w.y),
      { smooth: d }
    ),
    [e.data, p, y, i, d]
  ), v = W.useMemo(() => {
    if (!e.data.length) return "";
    const [w] = y.domain(), x = as().x((I) => p(i(I))).y0(() => y(w)).y1((I) => y(I.y));
    return d && x.curve(Fr), x(e.data) || "";
  }, [e.data, p, y, i, d]), b = f && f[t], j = e.color || b || (n === "region" ? $n(e.id, t) : Et(t)), M = n === "region" ? Rr(e.id, t) : yn(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: L ? 0.25 : 1,
      "aria-hidden": L ? !0 : void 0,
      children: [
        u && /* @__PURE__ */ r.jsx(
          "path",
          {
            d: v,
            fill: `url(#${u})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: C,
            fill: "none",
            stroke: j,
            strokeWidth: c,
            role: "presentation"
          }
        ),
        a && e.data.map((w, x) => {
          const I = p(i(w)), _ = y(w.y), D = s ? 0 : -1, F = !L && (s && x === o || N?.focused?.seriesId === e.id && N.focused.index === x), S = () => {
            N && !L && N.setFocused({
              seriesId: e.id,
              index: x,
              x: i(w),
              y: w.y,
              clientX: I,
              clientY: _
            });
          }, $ = () => {
            N && N.focused?.seriesId === e.id && N.focused.index === x && N.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: I,
              cy: _,
              r: F ? 5 : 3.5,
              stroke: F ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : M,
              strokeWidth: F ? 2 : 1,
              fill: F ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : j,
              className: "fdp-line-point",
              tabIndex: L ? -1 : D,
              "aria-label": `${e.label || e.id} ${i(w).toDateString()} value ${w.y}`,
              "data-series": e.id,
              "data-index": x,
              onMouseEnter: S,
              onFocus: S,
              onMouseLeave: $,
              onBlur: $
            },
            x
          );
        })
      ]
    }
  );
}, xm = ({ polite: e = !0, format: t }) => {
  const n = tn(), [a, s] = W.useState(""), o = W.useRef("");
  return W.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let c;
    if (l && l.length > 1) {
      const d = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      c = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${d}`;
    } else
      c = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : bm(i.seriesId, i.x, i.y, i.index);
    if (c !== o.current) {
      o.current = c, s("");
      const d = setTimeout(() => s(c), 10);
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
function bm(e, t, n, a) {
  const s = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${s}, value ${n}`;
}
const Ey = () => {
  const e = tn(), t = cn();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: s, innerHeight: o } = t, i = Math.min(Math.max(n.clientX, 0), s), l = Math.min(Math.max(n.clientY, 0), o), c = i + 8, d = l - 8, u = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = u ? f : `${f} • ${n.y}`, p = /\d+$/.exec(n.seriesId || ""), y = p ? parseInt(p[0], 10) - 1 : 0, m = Et(y >= 0 ? y : 0) || "#005eb8", g = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: g, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: g, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: m, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const N = a.map((M) => `${M.seriesId}: ${M.y}`), C = [h, ...N], v = C.reduce((M, w) => Math.max(M, w.length), 0), b = Math.max(90, v * 6.2 + 16), j = 16 * C.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: c, y: d - j, rx: 4, ry: 4, width: b, height: j, fill: "#212b32", opacity: 0.92 }),
        C.map((M, w) => /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - j + 6 + 16 * (w + 0.7), fill: "#fff", fontSize: 12, children: M }, w))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: c, y: d - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, Py = ({
  items: e,
  palette: t = "categorical",
  direction: n = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: s = !0,
  hiddenIds: o,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: c
}) => {
  const d = cr(), u = !!(d && !a && !l && o === void 0), f = a || u, h = e || [], p = o !== void 0, [y, m] = W.useState(new Set(i)), g = p ? new Set(o) : y, [L, N] = W.useState(""), C = (v) => {
    if (u && d) {
      const D = d.isHidden(v);
      d.toggle(v);
      const S = h.find((k) => k.id === v)?.label || v, $ = c ? c(v, D, S) : `${S} ${D ? "shown" : "hidden"}`;
      N($);
      return;
    }
    if (!f) return;
    const b = new Set(g), j = b.has(v);
    j ? b.delete(v) : b.add(v), p || m(b);
    const M = h.filter((D) => !b.has(D.id)).map((D) => D.id), w = Array.from(b);
    l?.(M, w);
    const I = h.find((D) => D.id === v)?.label || v, _ = c ? c(v, j, I) : `${I} ${j ? "shown" : "hidden"}`;
    N(_);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((v, b) => {
      const j = v.palette || t, M = v.color || (j === "region" ? $n(v.id, b) : j === "severity" ? nm(v.id, b) : j === "org-level" ? im(v.id, b) : Et(b));
      let w = v.stroke || (j === "region" ? Rr(v.id, b) : j === "severity" ? am(v.id, b) : j === "org-level" ? cm(v.id, b) : yn(b));
      if (s && w) {
        const _ = w.trim().toLowerCase();
        (_ === "#fff" || _ === "#ffffff" || _ === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(_)) && (w = "#212b32");
      }
      const x = u && d ? d.isHidden(v.id) : g.has(v.id), I = f ? {
        "aria-pressed": !x,
        "aria-label": `${v.label} (${x ? "show" : "hide"})`,
        onClick: () => C(v.id)
      } : { "aria-label": v.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${x ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: M,
              backgroundImage: v.patternDataUrl ? `url(${v.patternDataUrl})` : void 0,
              backgroundSize: v.patternDataUrl ? "auto" : void 0,
              borderColor: w
            },
            ...I
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: v.label })
      ] }, v.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: L })
  ] });
}, Fy = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: a,
  areaOnly: s = !1,
  visibilityMode: o = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: c,
  gradientFill: d = !0,
  colors: u
}) => {
  const f = Sn();
  if (!f) return null;
  const { xScale: h, yScale: p } = f, m = cr()?.isHidden(e.id) ?? !1, g = m && o === "fade";
  if (m && o === "remove") return null;
  const L = tn();
  W.useEffect(() => {
    if (!L) return;
    const M = e.data.map((w) => ({ x: a(w), y: w.y }));
    return L.registerSeries(e.id, M), () => L.unregisterSeries(e.id);
  }, [L, e.id, e.data, a]);
  const N = u && u[t], C = e.color || N || (n === "region" ? $n(e.id, t) : Et(t)), v = W.useMemo(() => c && c.length === e.data.length ? ss(
    e.data,
    (M) => h(a(M)),
    (M) => {
      const w = e.data.indexOf(M);
      return p(c[w].y1);
    },
    { smooth: l }
  ) : ss(
    e.data,
    (M) => h(a(M)),
    (M) => p(M.y),
    { smooth: l }
  ), [e.data, c, h, p, a, l]), b = W.useMemo(() => {
    if (c && c.length === e.data.length) {
      const _ = as().x((D) => h(a(D))).y0((D, F) => p(c[F].y0)).y1((D, F) => p(c[F].y1));
      return l && _.curve(Fr), _(e.data) || "";
    }
    const [M, w] = p.domain();
    let x = i;
    x < M ? x = M : x > w && (x = w);
    const I = as().x((_) => h(a(_))).y0(() => p(x)).y1((_) => p(_.y));
    return l && I.curve(Fr), I(e.data) || "";
  }, [e.data, c, h, p, a, i, l]), j = W.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: g ? 0.25 : 1,
      "aria-hidden": g ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: j, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: C, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: C, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: b,
            fill: d ? `url(#${j})` : C,
            ...d ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !s && /* @__PURE__ */ r.jsx("path", { d: v, fill: "none", stroke: C, strokeWidth: 1 })
      ]
    }
  );
}, Ry = ({
  series: e,
  seriesIndex: t,
  seriesCount: n,
  palette: a,
  parseX: s,
  focusable: o = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: c,
  adaptive: d = !1,
  adaptiveGroupOccupancy: u = 0.9,
  visibilityMode: f = "remove",
  colorMode: h = "series",
  allSeries: p,
  stacked: y,
  gapRatio: m = 0.15,
  minBarWidth: g,
  gradientFill: L = !0,
  gradientStrokeMatch: N = !0,
  opacity: C = 1,
  fadedOpacity: v = 0.25,
  flatFillOpacity: b = 1,
  colors: j
}) => {
  const M = Math.max(0, m), w = Sn(), x = cn();
  if (!w || !x) return null;
  const { xScale: I, yScale: _ } = w, F = cr()?.isHidden(e.id) ?? !1, S = F && f === "fade";
  if (F && f === "remove") return null;
  const $ = tn();
  W.useEffect(() => {
    if (!$) return;
    const K = e.data.map((te) => ({ x: s(te), y: te.y }));
    return $.registerSeries(e.id, K), () => $.unregisterSeries(e.id);
  }, [$, e.id, e.data, s]);
  const k = typeof I.bandwidth == "function", E = k ? I.bandwidth() : void 0, ie = W.useMemo(() => {
    if (E != null) return E;
    const K = p && p.length ? p : [e], te = [];
    K.forEach((le) => {
      le.data.forEach((he) => {
        const A = I(s(he));
        Number.isFinite(A) && te.push(A);
      });
    });
    const ue = te.sort((le, he) => le - he);
    if (ue.length <= 1) return 40;
    const G = [];
    for (let le = 1; le < ue.length; le++)
      G.push(ue[le] - ue[le - 1]);
    return G.sort((le, he) => le - he), (G[Math.floor(G.length / 2)] || 40) * i;
  }, [e.data, p, I, s, i, E]), { basePerBar: J } = W.useMemo(() => {
    if (k) {
      const ue = ie, G = Math.max(
        1,
        (ue - l * (n - 1)) / n
      ), ce = e.barWidth ?? c;
      let le = ce ? Math.min(ce, ue) : G;
      if (d) {
        const he = ue * Math.min(1, Math.max(0.05, u)), A = Math.max(
          1,
          (he - l * (n - 1)) / n
        );
        le = ce ? Math.min(le, A) : A;
      }
      return { basePerBar: le };
    }
    const K = e.barWidth ?? c, te = Math.max(
      1,
      (ie - l * (n - 1)) / n
    );
    if (d) {
      const ue = p && p.length ? p : [e], G = [];
      ue.forEach(
        (re) => re.data.forEach((se) => {
          const Q = I(s(se));
          Number.isFinite(Q) && G.push(Q);
        })
      ), G.sort((re, se) => re - se);
      const ce = [];
      for (let re = 1; re < G.length; re++)
        ce.push(G[re] - G[re - 1]);
      ce.sort((re, se) => re - se);
      const he = (ce[Math.floor(ce.length / 2)] || ie) * Math.min(1, Math.max(0.05, u)), A = Math.max(
        1,
        (he - l * (n - 1)) / n
      );
      return { basePerBar: K ? Math.min(K, A) : A };
    }
    return K ? { basePerBar: Math.min(K, te) } : { basePerBar: te };
  }, [
    k,
    ie,
    l,
    n,
    c,
    e.barWidth,
    d,
    u,
    p,
    I,
    s
  ]), z = W.useMemo(() => {
    if (k) return [];
    const K = [];
    return (p && p.length ? p : [e]).forEach(
      (ue) => ue.data.forEach((G) => {
        const ce = I(s(G));
        Number.isFinite(ce) && K.push(ce);
      })
    ), K.sort((ue, G) => ue - G), Array.from(new Set(K));
  }, [k, p, e, I, s]), X = W.useMemo(() => {
    if (k)
      return [];
    if (!z.length) return [];
    if (z.length === 1)
      return [
        { center: z[0], left: 0, right: x.innerWidth }
      ];
    const K = [];
    for (let te = 0; te < z.length; te++) {
      const ue = z[te], G = te === 0 ? 0 : (z[te - 1] + ue) / 2, ce = te === z.length - 1 ? x.innerWidth : (ue + z[te + 1]) / 2;
      K.push({
        center: ue,
        left: Math.max(0, G),
        right: Math.min(x.innerWidth, ce)
      });
    }
    return K;
  }, [k, z, x.innerWidth]), O = W.useMemo(() => {
    if (k || !X.length)
      return;
    const K = Math.min(1, Math.max(0.05, i)), te = X.map((he) => Math.max(2, he.right - he.left)), ue = te.map(
      (he) => Math.max(2, Math.min(he - 1, he * K))
    );
    let G = Math.min(...ue);
    if (g)
      if (n <= 1) {
        const he = Math.min(...te.map((A) => A - 1));
        he >= g && G < g && (G = Math.min(he, g));
      } else {
        const he = Math.min(...te.map((P) => P - 1)), A = g * n + (n - 1) * (g * M);
        A <= he && G < A && (G = A);
      }
    if (n <= 1)
      return g && G < g && te.every((A) => A >= g) ? { groupWidth: g, barWidth: g } : { groupWidth: G, barWidth: G };
    let ce = G / (n + (n - 1) * M);
    return ce < 1 && (ce = 1), g && ce < g && g * n + (n - 1) * (g * M) <= G && (ce = g), { groupWidth: ce * n + (n - 1) * (ce * M), barWidth: ce };
  }, [
    k,
    X,
    i,
    n,
    M,
    g
  ]), ae = j && j[t] ? j[t] : void 0, Y = e.color || ae || (a === "region" ? $n(e.id, t) : Et(t)), V = a === "region" ? Rr(e.id, t) : yn(t), fe = N && (e.color || ae) ? Y : V, pe = Number.isFinite(_(0)) ? _(0) : _.range()[0], de = W.useId();
  return y && y.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: S ? v : C,
      "aria-hidden": S ? !0 : void 0,
      children: [
        L && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: de,
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
        e.data.map((K, te) => {
          const ue = s(K), G = I(k ? K.x : ue);
          let ce, le;
          if (k)
            ce = ie, le = G;
          else {
            const Z = X.find(
              (B) => Math.abs(B.center - G) < 0.5
            );
            if (!Z || !O)
              ce = J, le = G - J / 2;
            else {
              const { groupWidth: B } = O;
              ce = B;
              let T = G - B / 2;
              T < Z.left && (T = Z.left), T + B > Z.right && (T = Math.max(Z.left, Z.right - B)), le = T;
            }
          }
          const he = y[te], A = _(he.y0), P = _(he.y1), re = Math.min(A, P), se = Math.abs(P - A) || 1;
          if (!k && g && ce < g) {
            const Z = X.find(
              (B) => Math.abs(B.center - G) < 0.5
            );
            if (Z) {
              const B = Math.max(2, Z.right - Z.left - 1), T = Math.min(B, g);
              T > ce && (ce = T, le = Math.max(
                Z.left,
                Math.min(Z.right - ce, G - ce / 2)
              ));
            }
          }
          const Q = !S && $?.focused?.seriesId === e.id && $.focused.index === te, R = () => {
            !$ || S || $.setFocused({
              seriesId: e.id,
              index: te,
              x: ue,
              y: he.y1 - he.y0,
              clientX: le + ce / 2,
              clientY: re
            });
          }, H = () => {
            $?.focused?.seriesId === e.id && $.focused.index === te && $.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: le,
              y: re,
              width: ce,
              height: se,
              fill: L ? `url(#${de})` : Y,
              ...L ? {} : { fillOpacity: b },
              stroke: Q ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : L && N ? Y : void 0,
              strokeWidth: Q ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: S || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ue instanceof Date ? ue.toDateString() : ue} value ${he.y1 - he.y0}`,
              onMouseEnter: R,
              onFocus: R,
              onMouseLeave: H,
              onBlur: H
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
      opacity: S ? v : C,
      "aria-hidden": S ? !0 : void 0,
      children: [
        L && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: de,
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
          h === "category" && e.data.map((K, te) => {
            const G = j && j[te] || (a === "region" ? $n(String(K.x), te) : Et(te)), ce = `${de}-${te}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: ce,
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
              ce
            );
          })
        ] }),
        e.data.map((K, te) => {
          const ue = s(K), G = I(k ? K.x : ue);
          let ce, le;
          if (k) {
            const ee = ie;
            if (n <= 1)
              le = ee, ce = G;
            else {
              le = Math.max(
                1,
                ee / (n + (n - 1) * M)
              );
              const ne = le * M, q = le * n + ne * (n - 1);
              ce = G + (ee - q) / 2 + t * (le + ne);
            }
          } else {
            const ee = X.find((ne) => ne.center === G);
            if (!ee || !O)
              le = J, ce = G - J / 2, g && le < g && (le = g, ce = G - le / 2);
            else {
              const { barWidth: ne } = O;
              le = ne;
              const q = n > 1 ? ne * M : 0, oe = le * n + q * (n - 1);
              let ve = G - oe / 2;
              ve < ee.left && (ve = ee.left), ve + oe > ee.right && (ve = Math.max(ee.left, ee.right - oe)), ce = ve + t * (le + q);
            }
            if (g && le < g) {
              const ne = X.find(
                (q) => Math.abs(q.center - G) < 0.5
              );
              if (ne) {
                const q = Math.max(2, ne.right - ne.left - 1), oe = Math.min(q, g);
                if (oe > le)
                  if (n <= 1)
                    le = oe, ce = Math.max(
                      ne.left,
                      Math.min(ne.right - le, G - le / 2)
                    );
                  else {
                    const ve = oe * M, Se = oe * n + ve * (n - 1);
                    if (Se <= ne.right - ne.left - 1) {
                      le = oe;
                      const we = Se;
                      let Ne = G - we / 2;
                      Ne < ne.left && (Ne = ne.left), Ne + we > ne.right && (Ne = Math.max(
                        ne.left,
                        ne.right - we
                      )), ce = Ne + t * (le + ve);
                    }
                  }
              }
            }
          }
          const he = ce + le / 2, A = _(K.y), P = Math.min(pe, A), re = Math.abs(pe - A), se = !S && $?.focused?.seriesId === e.id && $.focused.index === te, Q = () => {
            !$ || S || $.setFocused({
              seriesId: e.id,
              index: te,
              x: ue,
              y: K.y,
              clientX: he,
              clientY: A
            });
          }, R = () => {
            $?.focused?.seriesId === e.id && $.focused.index === te && $.clear();
          }, H = h === "category" && j ? j[te] : void 0, Z = h === "category" ? H || (a === "region" ? $n(String(K.x), te) : Et(te)) : Y, B = h === "category" ? `${de}-${te}` : de, T = L && N ? Z : h === "category" ? a === "region" ? Rr(String(K.x), te) : yn(te) : fe, U = se ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : T || Z;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ce,
              y: P,
              width: le,
              height: re || 1,
              fill: L ? `url(#${B})` : Z,
              ...L ? {} : { fillOpacity: b },
              stroke: U,
              strokeWidth: se ? 2 : 1,
              className: "fdp-bar",
              tabIndex: S || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ue instanceof Date ? ue.toDateString() : ue} value ${K.y}`,
              onMouseEnter: Q,
              onFocus: Q,
              onMouseLeave: R,
              onBlur: R
            },
            te
          );
        })
      ]
    }
  );
}, By = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: s = 0.05,
  children: o,
  yTickCount: i = 5
}) => {
  const l = cn(), c = t ?? l?.innerWidth ?? 0, d = n ?? l?.innerHeight ?? 0, u = W.useMemo(() => e.flatMap((g) => g.data), [e]), f = W.useMemo(() => {
    const g = /* @__PURE__ */ new Set();
    return u.forEach((L) => g.add(L.x)), Array.from(g);
  }, [u]), h = W.useMemo(
    () => Math.max(0, ...u.map((g) => g.y)),
    [u]
  ), p = W.useMemo(
    () => Fi().domain(f).range([0, c]).paddingInner(a).paddingOuter(s),
    [f, c, a, s]
  ), y = W.useMemo(
    () => Ir().domain([0, h]).nice().range([d, 0]),
    [h, d]
  ), m = W.useMemo(
    () => ({
      xScale: p,
      yScale: y,
      getXTicks: () => f,
      getYTicks: (g = i) => y.ticks(g)
    }),
    [p, y, f, i]
  );
  return /* @__PURE__ */ r.jsx(Vs.Provider, { value: m, children: o });
}, Hy = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: s,
  id: o,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const c = W.useId(), d = o || c, u = t ? `${d}-desc` : void 0, f = n ? `${d}-src` : void 0, h = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: d,
      className: Er("fdp-chart fdp-chart--noscript", s),
      "aria-labelledby": `${d}-title`,
      "aria-describedby": Er(u, f),
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
}, zy = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const s = W.useRef(null);
  return W.useEffect(() => {
    const o = s.current;
    if (!o) return;
    const i = () => {
      const l = Array.from(o.querySelectorAll(e));
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
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: s, children: a });
}, ym = ({
  label: e,
  value: t,
  unit: n,
  delta: a,
  status: s = "neutral",
  variant: o = "default",
  subtitle: i,
  metadata: l,
  trendData: c,
  loading: d = !1,
  error: u,
  valueFormatter: f,
  className: h,
  style: p,
  id: y,
  announceDelta: m = !0,
  visual: g
}) => {
  const L = W.useId(), N = y || L, C = `${N}-label`, v = `${N}-value`, b = `${N}-delta`, j = typeof t == "number" && !Number.isNaN(t), M = d ? "—" : u ? "" : j ? f ? f(t) : t.toLocaleString() : t;
  let w, x = "", I = "";
  if (a && !d && !u) {
    w = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const _ = Math.abs(a.value), D = w === "up" ? `+${_}` : w === "down" ? `-${_}` : "0", F = a.isPercent ? "%" : "";
    if (x = `${D}${F}`, a.ariaLabel)
      I = a.ariaLabel;
    else {
      const S = a.invert ? w === "down" : w === "up";
      I = `${w === "neutral" ? "no change" : w === "up" ? "up" : "down"} ${_}${F}${w === "neutral" ? "" : S ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Er(
        "fdp-metric-card",
        o && `fdp-metric-card--${o}`,
        s && `fdp-metric-card--status-${s}`,
        d && "fdp-metric-card--loading",
        u && "fdp-metric-card--error",
        h
      ),
      style: p,
      role: "group",
      "aria-labelledby": C,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: C, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: v, className: "fdp-metric-card__value", children: d ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: M }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: b,
              "aria-label": I,
              className: Er(
                "fdp-metric-card__delta",
                w && `fdp-metric-card__delta--${w}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: x }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          c && c.length > 0 && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        g && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: g }),
        m && a && !a.ariaLabel && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: I })
      ] })
    }
  );
};
var ft = /* @__PURE__ */ ((e) => (e.Xs = "xs", e.Sm = "sm", e.Md = "md", e.Lg = "lg", e.Xl = "xl", e.Full = "full", e))(ft || {});
let ls = null;
try {
  ls = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const Xe = (e, t) => {
  if (!ls) return t;
  const n = e.split(".");
  let a = ls;
  for (const o of n) {
    if (a == null) break;
    a = a[o];
  }
  const s = a;
  return s == null ? t : typeof s == "string" || typeof s == "number" ? String(s) : s.$value != null ? String(s.$value) : s.value != null ? String(s.value) : t;
}, ba = () => ({
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
var sn = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(sn || {}), Nt = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Nt || {}), Ue = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Ue || {});
const Zs = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
Zs.reduce(
  (e, t, n) => (e[t] = n + 1, e),
  {}
);
const vm = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, wm = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, Ll = Zs.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: vm[t],
    category: wm[t],
    participatesInRanking: !0
  }, e),
  {}
);
Zs.map(
  (e) => Ll[e]
);
var ar = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(ar || {}), ln = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(ln || {}), $l = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))($l || {});
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
function ya(e) {
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
function va(e) {
  switch (e) {
    case Ue.Improvement:
      return "Improvement signal";
    case Ue.Concern:
      return "Concern signal";
    case Ue.Neither:
      return "Common cause variation";
    case Ue.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function Al(e) {
  switch (e) {
    case ln.Pass:
      return "Target met";
    case ln.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Sm(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const Mt = {
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
function El(e) {
  return e ? Mt[e]?.token ?? Mt.neither.token : Mt.neither.token;
}
function _m(e) {
  return e ? Mt[e]?.hex ?? Mt.neither.hex : Mt.neither.hex;
}
var hn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(hn || {});
const km = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Cm = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var rt = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(rt || {}), Me = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Me || {}), vt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(vt || {}), _e = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(_e || {});
const Nm = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, s = parseInt(t.slice(4, 6), 16) / 255, o = [n, a, s].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2] < 0.55 ? "#ffffff" : "#212b32";
}, wa = {
  special_cause_deteriorating: {
    hex: Mt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: Mt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: Mt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: Mt.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(wa).forEach((e) => {
  e.text || (e.text = Nm(e.hex));
});
const Pl = (e) => wa[e], Js = (e) => wa[e].judgement || "none", ri = {
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
function jm(e, t) {
  let n;
  return e === "common_cause" ? n = ri.common : n = ri.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
var mt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(mt || {}), Le = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Le || {}), Ce = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(Ce || {}), Ve = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(Ve || {}), mn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(mn || {}), Lt = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Lt || {}), En = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(En || {}), In = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(In || {}), ut = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(ut || {}), Rt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Rt || {}), $t = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))($t || {}), Br = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Br || {}), Hr = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Hr || {});
const an = {
  [Ve.SinglePoint]: 1,
  [Ve.TwoSigma]: 2,
  [Ve.Shift]: 3,
  [Ve.Trend]: 4
}, ai = 3.267, Mm = 2.66, si = 0.2777;
function je(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Dn(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function oi(e, t) {
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
function ii(e, t) {
  const n = e.filter(je);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const o = Dn(a), i = ai * o;
    a = a.filter((l) => l <= i);
  }
  const s = Dn(a);
  return { mrMean: s, mrUcl: ai * s };
}
function li(e, t) {
  if (!je(e) || !je(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = Mm * t, a = 2 / 3 * n, s = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + s,
    lowerOneSigma: e - s
  };
}
function Im(e, t, n, a) {
  if (e === mt.T) {
    const f = t.map((w) => je(w) && w > 0 ? Math.pow(w, si) : null), h = oi(f, n), p = ii(h, a), y = f.filter((w, x) => !n[x] && je(w)), m = y.length ? Dn(y) : NaN, g = li(m, p.mrMean), L = (w) => je(w) && w > 0 ? Math.pow(w, 1 / si) : null, N = je(g.upperProcessLimit) ? L(g.upperProcessLimit) : null, C = je(g.lowerProcessLimit) && g.lowerProcessLimit > 0 ? L(g.lowerProcessLimit) : null, v = je(g.upperTwoSigma) ? L(g.upperTwoSigma) : null, b = je(g.lowerTwoSigma) && g.lowerTwoSigma > 0 ? L(g.lowerTwoSigma) : null, j = je(g.upperOneSigma) ? L(g.upperOneSigma) : null, M = je(g.lowerOneSigma) && g.lowerOneSigma > 0 ? L(g.lowerOneSigma) : null;
    return {
      mean: je(m) && m > 0 ? L(m) : null,
      mr: h,
      mrMean: p.mrMean,
      mrUcl: p.mrUcl,
      upperProcessLimit: N,
      lowerProcessLimit: C,
      upperTwoSigma: v,
      lowerTwoSigma: b,
      upperOneSigma: j,
      lowerOneSigma: M
    };
  }
  if (e === mt.G) {
    const f = t.filter((_, D) => !n[D] && je(_)), h = f.length ? Dn(f) : NaN, p = je(h) ? 1 / (h + 1) : NaN, y = (_) => {
      if (!je(p) || p <= 0 || p >= 1) return NaN;
      const D = Math.ceil(Math.log(1 - _) / Math.log(1 - p)) - 1;
      return Math.max(0, D);
    }, m = 135e-5, g = 1 - 135e-5, L = 0.02275, N = 1 - 0.02275, C = 0.158655, v = 1 - 0.158655, b = y(g), j = y(m), M = y(N), w = y(L), x = y(v), I = y(C);
    return {
      mean: je(h) ? h : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: je(b) ? b : null,
      lowerProcessLimit: je(j) ? j : null,
      upperTwoSigma: je(M) ? M : null,
      lowerTwoSigma: je(w) ? w : null,
      upperOneSigma: je(x) ? x : null,
      lowerOneSigma: je(I) ? I : null
    };
  }
  if (e !== mt.XmR)
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
  const s = oi(t, n), o = s.filter(je), i = o.length ? Dn(o) : NaN, l = je(i) ? 3.267 * i : NaN;
  let c = NaN;
  {
    const f = t.reduce((h, p, y) => {
      if (n[y] || !je(p)) return h;
      if (!a)
        return h.push(p), h;
      const m = s[y];
      return (m === null || !je(l) || je(m) && m <= l) && h.push(p), h;
    }, []);
    c = f.length ? Dn(f) : NaN;
  }
  const d = ii(s, a), u = li(c, d.mrMean);
  return {
    mean: c,
    mr: s,
    mrMean: d.mrMean,
    mrUcl: d.mrUcl,
    ...u
  };
}
function Dm(e, t) {
  const n = e.map((c, d) => d).filter((c) => !e[c].ghost && je(e[c].value)), a = (c) => e[c], s = t.shiftPoints, o = t.trendPoints;
  let i = [], l = [];
  for (const c of n) {
    const d = a(c);
    if (!je(d.mean) || !je(d.value) ? (i = [], l = []) : d.value > d.mean ? (i.push(c), l = []) : d.value < d.mean ? (l.push(c), i = []) : (i = [], l = []), i.length >= s)
      for (const u of i) a(u).shiftUp = !0;
    if (l.length >= s)
      for (const u of l) a(u).shiftDown = !0;
  }
  for (let c = 0; c <= n.length - 3; c++) {
    const u = n.slice(c, c + 3).map(a);
    if (!u.every((v) => je(v.value) && je(v.mean)))
      continue;
    const f = u[0].mean, h = u.every((v) => v.value > f), p = u.every((v) => v.value < f);
    if (!h && !p)
      continue;
    const y = u[0].upperTwoSigma ?? 1 / 0, m = u[0].lowerTwoSigma ?? -1 / 0, g = u[0].upperProcessLimit ?? 1 / 0, L = u[0].lowerProcessLimit ?? -1 / 0, N = u.filter((v) => t.twoSigmaIncludeAboveThree ? v.value > y : v.value > y && v.value <= g), C = u.filter((v) => t.twoSigmaIncludeAboveThree ? v.value < m : v.value < m && v.value >= L);
    h && N.length >= 2 && N.forEach((v) => v.twoSigmaUp = !0), p && C.length >= 2 && C.forEach((v) => v.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let c = 0; c <= n.length - 5; c++) {
      const u = n.slice(c, c + 5).map(a);
      if (!u.every((N) => je(N.value) && je(N.mean)))
        continue;
      const f = u[0].mean, h = u.every((N) => N.value > f), p = u.every((N) => N.value < f);
      if (!h && !p)
        continue;
      const y = u[0].upperOneSigma ?? 1 / 0, m = u[0].lowerOneSigma ?? -1 / 0, g = u.filter((N) => N.value > y), L = u.filter((N) => N.value < m);
      h && g.length >= 4 && g.forEach((N) => N.fourOfFiveUp = !0), p && L.length >= 4 && L.forEach((N) => N.fourOfFiveDown = !0);
    }
  for (let c = 0; c <= n.length - o; c++) {
    const d = n.slice(c, c + o), u = d.map(a);
    if (!u.every((p) => je(p.value)))
      continue;
    let f = !0, h = !0;
    for (let p = 1; p < u.length && (u[p].value > u[p - 1].value || (f = !1), u[p].value < u[p - 1].value || (h = !1), !(!f && !h)); p++)
      ;
    f && d.forEach((p) => a(p).trendUp = !0), h && d.forEach((p) => a(p).trendDown = !0);
  }
}
function Fl(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: Ve.SinglePoint,
    rank: an[Ve.SinglePoint]
  }), e.singlePointDown && n.push({
    id: Ve.SinglePoint,
    rank: an[Ve.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: Ve.TwoSigma,
    rank: an[Ve.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: Ve.TwoSigma,
    rank: an[Ve.TwoSigma]
  }), e.shiftUp && t.push({ id: Ve.Shift, rank: an[Ve.Shift] }), e.shiftDown && n.push({ id: Ve.Shift, rank: an[Ve.Shift] }), e.trendUp && t.push({ id: Ve.Trend, rank: an[Ve.Trend] }), e.trendDown && n.push({ id: Ve.Trend, rank: an[Ve.Trend] });
  const a = t.reduce((i, l) => Math.max(i, l.rank), 0), s = n.reduce((i, l) => Math.max(i, l.rank), 0), o = a > s ? mn.Upwards : s > a ? mn.Downwards : mn.Same;
  return { up: t, dn: n, upMax: a, dnMax: s, primeDirection: o };
}
function ci(e, t) {
  const n = t === Le.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Le.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === Le.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Le.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function di(e, t, n, a = !1, s, o, i = !1) {
  const { up: l, dn: c, upMax: d, dnMax: u, primeDirection: f } = Fl(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, p = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && Tm({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: s, ruleHierarchy: o }), t === Le.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ce.ImprovementHigh : e.specialCauseConcernValue !== null ? Ce.ConcernLow : Ce.CommonCause : t === Le.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ce.ImprovementLow : e.specialCauseConcernValue !== null ? Ce.ConcernHigh : Ce.CommonCause : e.variationIcon = Ce.CommonCause;
  const y = e.specialCauseImprovementValue !== null ? Lt.Up : e.specialCauseConcernValue !== null ? Lt.Down : void 0, m = y === Lt.Up ? d : y === Lt.Down ? u : Math.max(d, u);
  e.primeRank = m || void 0;
  const g = y === Lt.Up ? l.find((L) => L.rank === m) : y === Lt.Down ? c.find((L) => L.rank === m) : void 0;
  return e.primeRuleId = g?.id, { originalImprovement: h, originalConcern: p };
}
function Tm(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: a,
    preferImprovementWhenConflict: s,
    preferTrendWhenConflict: o,
    primeDirection: i = t.primeDirection ?? mn.Same,
    conflictStrategy: l,
    ruleHierarchy: c
  } = e;
  if (o && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
    const u = !!t.trendUp, f = !!t.trendDown;
    if (n === Le.Up) {
      if (u && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!u && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (n === Le.Down) {
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
  const d = s ? In.PreferImprovement : l ?? In.SqlPrimeThenRule;
  if (d === In.PreferImprovement) {
    n === Le.Up ? t.specialCauseConcernValue = null : n === Le.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (d === In.RuleHierarchy) {
    const u = c ?? [Ve.Trend, Ve.Shift, Ve.TwoSigma, Ve.SinglePoint], { up: f, dn: h } = Fl(t);
    for (const p of u) {
      const y = f.some((g) => g.id === p), m = h.some((g) => g.id === p);
      if (y && !m) {
        n === Le.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (m && !y) {
        n === Le.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (y && m) {
        (n === Le.Up || n === Le.Down) && (a === En.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === mn.Upwards ? n === Le.Up ? t.specialCauseConcernValue = null : n === Le.Down && (t.specialCauseImprovementValue = null) : i === mn.Downwards ? n === Le.Up ? t.specialCauseImprovementValue = null : n === Le.Down && (t.specialCauseConcernValue = null) : a === En.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var cs = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(cs || {});
function Lm(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function $m(e) {
  const t = Lm(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function ui(e) {
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
  }), s = (i, l, c, d, u, f, h, p) => {
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
  let o = 0;
  for (; o < e.length; ) {
    const i = e[o];
    if (!i || i.value == null || i.ghost || !i.trendUp && !i.trendDown) {
      o++;
      continue;
    }
    const l = i.trendUp ? "Up" : i.trendDown ? "Down" : void 0;
    let c = o, d = o;
    for (; d < e.length; d++) {
      const L = e[d];
      if (!L || L.value == null || L.ghost || !(l === "Up" ? L.trendUp : L.trendDown)) break;
    }
    const u = d - 1, f = [];
    let h, p, y = 1 / 0, m = -1 / 0, g = 0;
    for (let L = c; L <= u; L++) {
      const N = e[L];
      if (N.value == null) continue;
      const C = N.value - (N.mean ?? 0), v = $m(C);
      if (!v) {
        h !== void 0 && (s(f, h, L - 1, p, y, m, g, l), h = void 0, p = void 0, y = 1 / 0, m = -1 / 0, g = 0);
        continue;
      }
      if (h === void 0)
        ({ segStart: h, segSide: p, minV: y, maxV: m, maxAbsDelta: g } = (() => {
          const b = n(L, v, N.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(C)
          };
        })());
      else if (v !== p)
        s(f, h, L - 1, p, y, m, g, l), { segStart: h, segSide: p, minV: y, maxV: m, maxAbsDelta: g } = (() => {
          const b = n(L, v, N.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(C)
          };
        })();
      else {
        const b = a(N.value, Math.abs(C), y, m, g);
        y = b.minV, m = b.maxV, g = b.maxAbsDelta;
      }
    }
    h !== void 0 && s(f, h, u, p, y, m, g, l), t.push({ trendDirection: l, start: c, end: u, segments: f }), o = u + 1;
  }
  return t;
}
function Am(e) {
  if (e === Le.Up) return "Above";
  if (e === Le.Down) return "Below";
}
function Em(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function fi(e, t) {
  const n = t.strategy ?? ut.CrossingAfterFavourable, a = Am(t.metricImprovement), s = Em(a), o = [];
  for (const i of e) {
    if (!a) {
      if (n === ut.ExtremeFavourable || n === ut.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let c = l[0];
        for (const d of l)
          d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean && (c = d);
        o.push(c);
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
      c && o.push(c);
      continue;
    }
    if (n === ut.CrossingAfterUnfavourable) {
      const l = i.segments;
      let c;
      for (let d = 0; d < l.length; d++) {
        const u = l[d];
        if (u.side === s && d > 0 && l[d - 1].side !== s) {
          c = u;
          break;
        }
      }
      if (!c) {
        const d = l.filter((u) => u.side === s);
        d.length > 0 && (c = d.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          d[0]
        ));
      }
      c && o.push(c);
      continue;
    }
    if (n === ut.ExtremeFavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d
      );
      o.push(c);
      continue;
    }
    if (n === ut.ExtremeUnfavourable) {
      const l = i.segments.filter((d) => d.side === s);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d);
      o.push(c);
      continue;
    }
    if (n === ut.FirstFavourable) {
      const l = i.segments.find((c) => c.side === a);
      l && o.push(l);
      continue;
    }
    if (n === ut.FirstUnfavourable) {
      const l = i.segments.find((c) => c.side === s);
      l && o.push(l);
      continue;
    }
    if (n === ut.LongestFavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.end - u.start > d.end - d.start ? u : d
      );
      o.push(c);
      continue;
    }
    if (n === ut.LongestUnfavourable) {
      const l = i.segments.filter((d) => d.side === s);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.end - u.start > d.end - d.start ? u : d);
      o.push(c);
      continue;
    }
    if (n === ut.LastFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      o.push(l[l.length - 1]);
      continue;
    }
    if (n === ut.LastUnfavourable) {
      const l = i.segments.filter((c) => c.side === s);
      if (l.length === 0) continue;
      o.push(l[l.length - 1]);
      continue;
    }
  }
  return o;
}
var lt = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(lt || {}), Bn = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(Bn || {});
function Pm(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function qs(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", s = t.enableNeutralNoJudgement ?? !0;
  return e.map((o) => {
    if (!o || o.value == null || o.ghost) return "Common";
    const { upAny: i, downAny: l } = Pm(o);
    if (i && l) return "Improvement";
    switch (o.variationIcon) {
      case Ce.ImprovementHigh:
      case Ce.ImprovementLow:
        return "Improvement";
      case Ce.ConcernHigh:
      case Ce.ConcernLow:
        return "Concern";
      case Ce.NeitherHigh:
      case Ce.NeitherLow: {
        if (a === "Ungated" && n !== Le.Neither) {
          if (i && !l)
            return n === Le.Up ? "Improvement" : "Concern";
          if (l && !i)
            return n === Le.Down ? "Improvement" : "Concern";
        }
        return s ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function Fm(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let s = qs(e, {
    metricImprovement: t,
    trendVisualMode: Bn.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === Le.Neither) return s;
  const o = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", c = (f, h) => {
    if (f < 0 || f >= s.length) return;
    const p = s[f];
    (p === lt.Common || p === lt.NoJudgement) && (s[f] = h);
  }, d = (f) => {
    if (f == null) return null;
    const h = e.reduce((y, m) => (m.partitionId === f && typeof m.value == "number" && !m.ghost && y.push(m.value), y), []);
    return h.length ? h.reduce((y, m) => y + m, 0) / h.length : null;
  }, u = Array.isArray(n?.boundaryIndices) && n.boundaryIndices.length ? n.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : e.reduce((f, h, p) => {
    if (p === 0) return f;
    const y = e[p - 1];
    return y && h && h.partitionId !== y.partitionId && f.push(p), f;
  }, []);
  for (const f of u) {
    const h = e[f - 1], p = e[f];
    if (!h || !p)
      continue;
    let y = f - 1;
    for (; y - 1 >= 0 && e[y - 1] && e[y - 1].partitionId === h.partitionId; )
      y--;
    let m = f;
    for (; m + 1 < e.length && e[m + 1] && e[m + 1].partitionId === p.partitionId; )
      m++;
    let g = null;
    for (let j = f - 1; j >= 0; j--) {
      const M = e[j];
      if (M.partitionId !== h.partitionId) break;
      if (typeof M.mean == "number") {
        g = M.mean;
        break;
      }
    }
    let L = null;
    for (let j = f; j < e.length; j++) {
      const M = e[j];
      if (M.partitionId !== p.partitionId) break;
      if (typeof M.mean == "number") {
        L = M.mean;
        break;
      }
    }
    if (g == null && (g = d(h.partitionId ?? null)), L == null && (L = d(p.partitionId ?? null)), g == null || L == null)
      continue;
    const N = L - g, C = t === Le.Up ? N > 0 : N < 0, v = C ? lt.Improvement : lt.Concern, b = l === "Same" ? v : C ? lt.Concern : lt.Improvement;
    for (let j = 1; j <= o; j++) {
      const M = f - j;
      if (M < y) break;
      c(M, b);
    }
    for (let j = 0; j < i; j++) {
      const M = f + j;
      if (M > m) break;
      c(M, v);
    }
  }
  return s;
}
function Rl(e) {
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
function Sa(e) {
  const { chartType: t, metricImprovement: n, data: a } = e, s = Rl(e.settings), o = {
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
    trendSegmentationMode: Rt.Off,
    trendSegmentationStrategy: ut.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...s
  }, i = s?.trendSegmentationMode || (s?.trendFavourableSegmentation === !0 ? Rt.Always : s?.trendFavourableSegmentation === !1 ? Rt.Off : o.trendSegmentationMode), l = a.map((m, g) => ({
    rowId: g + 1,
    x: m.x,
    value: je(m.value) ? m.value : null,
    ghost: !!m.ghost,
    baseline: !!m.baseline,
    target: je(m.target) ? m.target : null
  })), c = [];
  let d = [];
  for (const m of l)
    m.baseline && d.length && (c.push(d), d = []), d.push(m);
  d.length && c.push(d);
  const u = [], f = (o.trendFavourableSegmentation || i !== Rt.Off) && !o.preferImprovementWhenConflict, h = l.filter((m) => !m.ghost && je(m.value)).length, p = !!o.chartLevelEligibility && h >= o.minimumPoints;
  let y = 0;
  for (const m of c) {
    y++;
    const g = m.map((b) => b.value), L = m.map((b) => b.ghost), N = Im(
      t,
      g,
      L,
      !!o.excludeMovingRangeOutliers
    ), C = m.map((b, j) => {
      const M = !b.ghost && je(b.value) ? g.slice(0, j + 1).filter((x, I) => !L[I] && je(x)).length : 0, w = p ? !0 : M >= o.minimumPoints;
      return {
        rowId: b.rowId,
        x: b.x,
        value: je(b.value) ? b.value : null,
        ghost: b.ghost,
        partitionId: y,
        pointRank: M,
        mean: (w || p) && je(N.mean) ? N.mean : null,
        upperProcessLimit: w || p ? N.upperProcessLimit : null,
        lowerProcessLimit: w || p ? N.lowerProcessLimit : null,
        upperTwoSigma: w || p ? N.upperTwoSigma : null,
        lowerTwoSigma: w || p ? N.lowerTwoSigma : null,
        upperOneSigma: w || p ? N.upperOneSigma : null,
        lowerOneSigma: w || p ? N.lowerOneSigma : null,
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
        variationIcon: Ce.CommonCause
      };
    });
    for (const b of C)
      b.ghost || !je(b.value) || b.mean === null || (je(b.upperProcessLimit) && b.value > b.upperProcessLimit && (b.singlePointUp = !0), je(b.lowerProcessLimit) && b.value < b.lowerProcessLimit && (b.singlePointDown = !0));
    Dm(C, {
      shiftPoints: o.shiftPoints,
      trendPoints: o.trendPoints,
      twoSigmaIncludeAboveThree: !!o.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!o.enableFourOfFiveRule
    }), f && ((b) => {
      const j = b.some(
        (_) => (_.singlePointUp || _.twoSigmaUp || _.shiftUp || _.trendUp) && (_.singlePointDown || _.twoSigmaDown || _.shiftDown || _.trendDown)
      );
      if (i === Rt.Off || i === Rt.AutoWhenConflict && !j)
        return;
      const M = ui(b), w = fi(M, {
        metricImprovement: n,
        strategy: o.trendSegmentationStrategy
      }), x = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set();
      for (const _ of w)
        for (let D = _.start; D <= _.end; D++)
          _.trendDirection === cs.Up ? x.add(D) : I.add(D);
      b.forEach((_, D) => {
        _.trendUp = x.has(D) ? _.trendUp : !1, _.trendDown = I.has(D) ? _.trendDown : !1, o.trendDominatesHighlightedWindow && (x.has(D) ? (_.singlePointDown = !1, _.twoSigmaDown = !1, _.shiftDown = !1) : I.has(D) && (_.singlePointUp = !1, _.twoSigmaUp = !1, _.shiftUp = !1));
      });
    })(C);
    for (const b of C) {
      if (b.ghost || !je(b.value) || b.mean === null) {
        u.push(b);
        continue;
      }
      const { aligned: j, opposite: M } = ci(
        b,
        n
      );
      if (b.specialCauseImprovementValue = j ? b.value : null, b.specialCauseConcernValue = M ? b.value : null, n === Le.Neither) {
        const w = b.singlePointUp || b.twoSigmaUp || b.shiftUp || b.trendUp, x = b.singlePointDown || b.twoSigmaDown || b.shiftDown || b.trendDown;
        b.variationIcon = w ? Ce.NeitherHigh : x ? Ce.NeitherLow : Ce.CommonCause;
      } else
        di(b, n, o.metricConflictRule, o.preferImprovementWhenConflict === !0, o.conflictStrategy, o.ruleHierarchy, o.preferTrendWhenConflict === !0);
      u.push(b);
    }
  }
  if (o.trendAcrossPartitions) {
    const m = u.map((g, L) => ({ idx: L, r: g })).filter(({ r: g }) => !g.ghost && je(g.value));
    if (m.length >= o.trendPoints)
      for (let g = 0; g <= m.length - o.trendPoints; g++) {
        const L = m.slice(g, g + o.trendPoints).map((b) => b.idx), N = L.map((b) => u[b]);
        if (!N.every((b) => je(b.value))) continue;
        let C = !0, v = !0;
        for (let b = 1; b < N.length && (N[b].value > N[b - 1].value || (C = !1), N[b].value < N[b - 1].value || (v = !1), !(!C && !v)); b++)
          ;
        C && L.forEach((b) => u[b].trendUp = !0), v && L.forEach((b) => u[b].trendDown = !0);
      }
  }
  if (o.trendAcrossPartitions) {
    if (f) {
      const m = u.some(
        (g) => (g.singlePointUp || g.twoSigmaUp || g.shiftUp || g.trendUp) && (g.singlePointDown || g.twoSigmaDown || g.shiftDown || g.trendDown)
      );
      if (i === Rt.Always || i === Rt.AutoWhenConflict && m) {
        const g = ui(u), L = fi(g, { metricImprovement: n, strategy: o.trendSegmentationStrategy }), N = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
        for (const v of L)
          for (let b = v.start; b <= v.end; b++)
            v.trendDirection === cs.Up ? N.add(b) : C.add(b);
        u.forEach((v, b) => {
          v.trendUp = N.has(b) ? v.trendUp : !1, v.trendDown = C.has(b) ? v.trendDown : !1, o.trendDominatesHighlightedWindow && (N.has(b) ? (v.singlePointDown = !1, v.twoSigmaDown = !1, v.shiftDown = !1) : C.has(b) && (v.singlePointUp = !1, v.twoSigmaUp = !1, v.shiftUp = !1));
        });
      }
    }
    for (const m of u) {
      if (m.ghost || !je(m.value) || m.mean === null || n === Le.Neither) continue;
      const { aligned: g, opposite: L } = ci(m, n);
      m.specialCauseImprovementValue = g ? m.value : null, m.specialCauseConcernValue = L ? m.value : null, di(m, n, o.metricConflictRule, o.preferImprovementWhenConflict === !0, o.conflictStrategy, o.ruleHierarchy, o.preferTrendWhenConflict === !0);
    }
  }
  return { rows: u };
}
function Xs(e, t) {
  const n = Sa(e), a = qs(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? Bn.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), s = t?.boundaryWindows;
  if (!s || s.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const o = s.directionOverride ?? e.metricImprovement, i = Fm(n.rows, o, s), l = a.map((c, d) => {
    const u = i[d];
    if (c === lt.Common || c === lt.NoJudgement) {
      if (u === lt.Improvement) return lt.Improvement;
      if (u === lt.Concern) return lt.Concern;
    }
    return c;
  });
  return { rows: n.rows, visuals: l };
}
var Bl = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(Bl || {});
function Rm(e, t, n) {
  const a = n?.trendVisualMode ?? Bn.Ungated, s = n?.enableNeutralNoJudgement ?? !0, o = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
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
  const { rows: l, visuals: c } = Xs(e, {
    trendVisualMode: a,
    enableNeutralNoJudgement: s,
    boundaryWindows: i
  });
  let d = c.slice(), u = o.length ? o[0] : -1;
  if (u < 0) {
    for (let f = 1; f < l.length; f++)
      if (l[f].partitionId !== l[f - 1].partitionId) {
        u = f;
        break;
      }
  }
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && u > 0 && (d[u - 1] = lt.Common), { rows: l, visuals: d };
}
const Hl = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: En.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function Bm(e) {
  return { ...Hl, ...e ?? {} };
}
var st = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(st || {}), gn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(gn || {}), sr = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(sr || {});
const zl = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Le.Up ? rt.HigherIsBetter : i.improvementDirection === Le.Down ? rt.LowerIsBetter : rt.ContextDependent : i.polarity && (l = i.polarity);
    let c;
    const d = i.variationIcon;
    if (d === Ue.Improvement || d === Ue.Concern || d === Ue.Neither || d === Ue.Suppressed)
      d === Ue.Improvement ? c = _e.SpecialCauseImproving : d === Ue.Concern ? c = _e.SpecialCauseDeteriorating : d === Ue.Neither ? c = _e.CommonCause : c = _e.SpecialCauseNoJudgement;
    else
      switch (i.variationIcon) {
        case Ce.ImprovementHigh:
        case Ce.ImprovementLow:
          c = _e.SpecialCauseImproving;
          break;
        case Ce.ConcernHigh:
        case Ce.ConcernLow:
          c = _e.SpecialCauseDeteriorating;
          break;
        case Ce.NeitherHigh:
        case Ce.NeitherLow:
          c = i.specialCauseNeutral ? _e.SpecialCauseNoJudgement : _e.CommonCause;
          break;
        case Ce.CommonCause:
          c = _e.CommonCause;
          break;
        default:
          c = _e.SpecialCauseNoJudgement;
          break;
      }
    let u = i.trend;
    return u || (c === _e.SpecialCauseImproving ? u = l === rt.LowerIsBetter ? Me.Lower : Me.Higher : c === _e.SpecialCauseDeteriorating ? u = l === rt.LowerIsBetter ? Me.Higher : Me.Lower : c === _e.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? u = Me.Higher : i.lowSideSignal && !i.highSideSignal ? u = Me.Lower : u = Me.Higher : u = Me.Higher), { state: c, direction: u, polarity: l ?? rt.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === _e.SpecialCauseImproving || i.state === _e.SpecialCauseDeteriorating) && i.polarity && (i.state === _e.SpecialCauseImproving ? l = i.polarity === rt.LowerIsBetter ? Me.Lower : Me.Higher : l = i.polarity === rt.LowerIsBetter ? Me.Higher : Me.Lower), l || (i.state === _e.SpecialCauseImproving ? l = Me.Higher : i.state === _e.SpecialCauseDeteriorating ? l = Me.Lower : l = Me.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? rt.ContextDependent
    };
  }
  const n = e;
  t();
  const s = {
    [vt.Improving]: _e.SpecialCauseImproving,
    [vt.Deteriorating]: _e.SpecialCauseDeteriorating,
    [vt.No_Judgement]: _e.SpecialCauseNoJudgement,
    [vt.None]: _e.CommonCause
  }[n.judgement];
  let o;
  return n.judgement === vt.Improving ? o = n.polarity === rt.LowerIsBetter ? Me.Lower : Me.Higher : n.judgement === vt.Deteriorating ? o = n.polarity === rt.LowerIsBetter ? Me.Higher : Me.Lower : o = n.trend ?? Me.Higher, { state: s, direction: o, polarity: n.polarity };
};
function Ol(e, t) {
  const { state: n, direction: a, polarity: s } = zl(e), o = Js(n), i = a === Me.Higher ? "above" : "below", l = a === Me.Higher ? "upwards" : "downwards", c = (() => {
    switch (s) {
      case rt.HigherIsBetter:
        return "For this measure, higher values are better.";
      case rt.LowerIsBetter:
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
    c,
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
  letterMode: c = sr.Polarity,
  letterOverride: d,
  ...u
}) => {
  const f = wr(), h = wr(), {
    start: p,
    mid: y,
    end: m,
    triStart: g,
    triMid: L,
    triEnd: N
  } = ba(), { state: C, direction: v, polarity: b } = Te(
    () => zl(e),
    [e]
  ), j = Te(() => Pl(C), [C]), M = Te(() => Js(C), [C]), w = M === vt.Improving || M === vt.Deteriorating;
  let x = "";
  a && w && (c === sr.Polarity ? b === rt.HigherIsBetter ? x = "H" : b === rt.LowerIsBetter ? x = "L" : x = "" : x = v === Me.Higher ? "H" : "L"), d !== void 0 && (x = d);
  const I = C !== _e.CommonCause, _ = C === _e.SpecialCauseNoJudgement, D = Xe("common-cause", "#A6A6A6"), F = I ? j.hex : D, S = Te(
    () => jm(C, v),
    [C, v]
  ), $ = n || `${j.label}${x ? v === Me.Higher ? " – Higher" : " – Lower" : ""}`, k = Ol(
    e
  );
  if (i === gn.TriangleWithRun) {
    const X = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], O = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let ae = null;
    C === _e.SpecialCauseImproving || C === _e.SpecialCauseDeteriorating ? ae = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (v === Me.Higher ? X : O).map((ce) => ce.join(",")).join(" "),
        fill: j.hex,
        stroke: j.hex,
        strokeWidth: 6,
        transform: v === Me.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : C === _e.SpecialCauseNoJudgement && (ae = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: v === Me.Higher ? X.map((ce) => ce.join(",")).join(" ") : O.map((ce) => ce.join(",")).join(" "),
        fill: j.hex,
        stroke: j.hex,
        strokeWidth: 6,
        transform: v === Me.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const Y = Math.max(0, Math.min(5, Math.floor(l || 0))), V = C === _e.CommonCause ? 160 : v === Me.Higher ? 220 : 70, fe = 10, pe = 26, de = 150 - 2 * pe, K = C === _e.SpecialCauseImproving ? Xe("improvement", "#00B0F0") : C === _e.SpecialCauseDeteriorating ? Xe("concern", "#E46C0A") : D, te = Array.from({ length: 5 }).map((ce, le) => {
      const A = (C === _e.SpecialCauseImproving || C === _e.SpecialCauseDeteriorating) && le >= 5 - Y ? K : D;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: de + le * pe,
          cy: V,
          r: fe,
          fill: A,
          stroke: A,
          strokeWidth: 1
        },
        le
      );
    }), ue = Ga(
      j.hex,
      f,
      h,
      s,
      o,
      [
        { offset: "0%", opacity: g },
        { offset: "75%", opacity: L },
        { offset: "100%", opacity: N }
      ]
    ), G = C === _e.CommonCause || v === Me.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": $,
        "aria-description": k,
        ...u,
        children: [
          ue,
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
              stroke: j.hex,
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
            x && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: v === Me.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: x
              }
            ),
            te
          ] })
        ]
      }
    );
  }
  if (i === gn.Triangle) {
    const X = [
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
    let Y = null;
    C === _e.SpecialCauseImproving || C === _e.SpecialCauseDeteriorating ? Y = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (v === Me.Higher ? X : O).map((fe) => fe.join(",")).join(" "),
        fill: j.hex,
        stroke: j.hex,
        strokeWidth: 8,
        transform: v === Me.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : C === _e.SpecialCauseNoJudgement ? Y = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: v === Me.Higher ? X.map((fe) => fe.join(",")).join(" ") : O.map((fe) => fe.join(",")).join(" "),
        fill: j.hex,
        stroke: j.hex,
        strokeWidth: 8,
        transform: v === Me.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : C === _e.CommonCause && (Y = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: ae[0][0],
        y1: ae[0][1],
        x2: ae[1][0],
        y2: ae[1][1],
        stroke: j.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const V = Ga(
      j.hex,
      f,
      h,
      s,
      o,
      [
        { offset: "0%", opacity: g },
        { offset: "65%", opacity: L },
        { offset: "100%", opacity: N }
      ]
    );
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": $,
        "aria-description": k,
        ...u,
        children: [
          V,
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
              stroke: j.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          Y,
          x && (C === _e.SpecialCauseImproving || C === _e.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: v === Me.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: x
            }
          )
        ]
      }
    );
  }
  const E = Ga(
    j.hex,
    f,
    h,
    s,
    o,
    [
      { offset: "0%", opacity: p },
      { offset: "65%", opacity: y },
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
      "aria-label": $,
      "aria-description": k,
      ...u,
      children: [
        E,
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
            stroke: j.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        x && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: j.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: v === Me.Lower ? "340" : "155", children: x })
          }
        ),
        _ ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: j.hex,
            ...v === Me.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          S.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: D,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${S.map((ie) => `${ie.cx} ${ie.cy}`).join(" L ")}`
            }
          ),
          S.map((ie, J) => {
            const X = J >= S.length - 2 && I ? F : D, O = X;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: O,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: X,
                cx: ie.cx,
                cy: ie.cy,
                r: 16
              },
              J
            );
          })
        ] })
      ]
    }
  );
};
Qs.displayName = "SPCVariationIcon";
const Hm = {
  [ft.Xs]: { height: 24, pointR: 2, stroke: 1 },
  [ft.Sm]: { height: 32, pointR: 3, stroke: 1 },
  [ft.Md]: { height: 44, pointR: 4, stroke: 1 },
  [ft.Lg]: { height: 56, pointR: 5, stroke: 1 },
  [ft.Xl]: { height: 72, pointR: 6, stroke: 1 },
  // Full uses Md metrics for points; height adapts via 'height' attribute below
  [ft.Full]: { height: 44, pointR: 4, stroke: 1 }
};
function zm(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function Om(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), s = a >= 0 ? e.length - 1 - a : null, o = s != null ? e[s].value : null;
  return { mean: n, latestValue: o, latestIndex: s };
}
function Um(e) {
  switch (e) {
    case _e.SpecialCauseImproving:
      return Xe("improvement", "#00B0F0");
    case _e.SpecialCauseDeteriorating:
      return Xe("concern", "#E46C0A");
    case _e.SpecialCauseNoJudgement:
      return Xe("no-judgement", "#490092");
    case _e.CommonCause:
      return Xe("common-cause", "#A6A6A6");
    default:
      return Xe("common-cause", "#A6A6A6");
  }
}
const Ul = ({
  data: e,
  windowSize: t,
  minPointsForSignals: n = 13,
  showMean: a = !0,
  showLimits: s = !0,
  showLimitBand: o = !0,
  showInnerBands: i = !1,
  showLatestMarker: l = !0,
  showStateGlyph: c = !0,
  variationState: d,
  metricImprovement: u,
  gradientWash: f = !1,
  size: h = ft.Sm,
  ariaLabel: p,
  className: y,
  onPointClick: m,
  maxPoints: g,
  thinningStrategy: L = "stride",
  colorPointsBySignal: N = !0,
  centerLine: C,
  controlLimits: v,
  sigmaBands: b,
  pointSignals: j,
  pointNeutralSpecialCause: M
}) => {
  const w = u, x = Te(
    () => zm(e, t),
    [e, t]
  ), I = Te(() => Om(x), [x]), _ = (() => {
    if (typeof h == "string")
      switch (h) {
        case "xs":
          return ft.Xs;
        case "sm":
          return ft.Sm;
        case "md":
          return ft.Md;
        case "lg":
          return ft.Lg;
        case "xl":
          return ft.Xl;
        case "full":
          return ft.Full;
        default:
          return ft.Sm;
      }
    return h ?? ft.Sm;
  })(), D = Hm[_], F = Math.max(x.length * 6, 60), S = F, $ = _ === ft.Full ? "100%" : F, k = D.height, E = 4, ie = 2, J = Te(() => (e?.length ?? 0) - (x?.length ?? 0), [e?.length, x?.length]), z = C ?? null, X = Te(() => s && v || null, [s, v?.lower, v?.upper]), ae = Te(() => ({
    state: d ?? _e.CommonCause,
    firedRules: [],
    mean: z ?? null,
    stdDev: null,
    side: I.latestValue != null && z != null ? I.latestValue > z ? "above" : "below" : void 0
  }), [d, z, I.latestValue]).state, Y = Um(ae), V = (P) => {
    const re = x.filter((H) => H.value != null);
    if (!re.length) return k / 2;
    const se = re.map((H) => H.value);
    X && (X.lower != null && se.push(X.lower), X.upper != null && se.push(X.upper));
    const Q = Math.min(...se), R = Math.max(...se);
    return Q === R ? k / 2 : k - (P - Q) / (R - Q) * (k - ie * 2) - ie;
  }, fe = Te(() => {
    if (!g || x.length <= g)
      return x.map((Z, B) => B);
    if (L === "stride") {
      const Z = Math.max(2, g), B = (x.length - 1) / (Z - 1), T = /* @__PURE__ */ new Set();
      for (let U = 0; U < Z; U++) T.add(Math.round(U * B));
      return T.add(x.length - 1), Array.from(T).sort((U, ee) => U - ee);
    }
    const P = x.map((Z, B) => ({ i: B, v: Z.value }));
    function re(Z, B, T) {
      const U = Z.i, ee = Z.v ?? 0, ne = B.i, q = B.v ?? 0, oe = T.i, ve = T.v ?? 0, Se = Math.abs((ve - q) * U - (oe - ne) * ee + oe * q - ve * ne), we = Math.hypot(ve - q, oe - ne);
      return we === 0 ? 0 : Se / we;
    }
    function se(Z, B) {
      if (Z.length <= 2) return Z;
      let T = -1, U = -1;
      for (let ee = 1; ee < Z.length - 1; ee++) {
        const ne = re(Z[ee], Z[0], Z[Z.length - 1]);
        ne > T && (T = ne, U = ee);
      }
      if (T > B) {
        const ee = se(Z.slice(0, U + 1), B), ne = se(Z.slice(U), B);
        return [...ee.slice(0, -1), ...ne];
      }
      return [Z[0], Z[Z.length - 1]];
    }
    let Q = 0.1, R = P;
    for (let Z = 0; Z < 8 && (R = se(P, Q), !(R.length <= g)); Z++)
      Q *= 1.6;
    const H = new Set(R.map((Z) => Z.i));
    return H.add(0), H.add(x.length - 1), Array.from(H).sort((Z, B) => Z - B);
  }, [x, g, L]), pe = Te(
    () => fe.map((P) => x[P]),
    [fe, x]
  ), de = Te(() => {
    let P = "";
    return pe.forEach((re, se) => {
      if (re.value == null) return;
      const Q = V(re.value), R = se / (pe.length - 1 || 1) * (S - E * 2) + E;
      P += P ? ` L ${R} ${Q}` : `M ${R} ${Q}`;
    }), P;
  }, [pe, S]), K = I.latestIndex ?? -1, te = X, ue = ba(), G = Te(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [x.length, f]
  ), ce = x.length >= (n || 0), le = p || "SPC sparkline", he = (() => {
    if (!ae) return;
    const P = w === Le.Up ? rt.HigherIsBetter : w === Le.Down ? rt.LowerIsBetter : rt.ContextDependent, re = {
      variationIcon: ae === _e.SpecialCauseImproving ? "improvement" : ae === _e.SpecialCauseDeteriorating ? "concern" : ae === _e.SpecialCauseNoJudgement ? "none" : "neither",
      trend: w === Le.Up ? Me.Higher : Me.Lower,
      polarity: P
    };
    try {
      return Ol(re);
    } catch {
      return;
    }
  })(), A = Te(() => {
    if (!ce) return 10;
    const P = [...x].reverse().filter((se) => se.value != null).slice(0, 6).map((se) => V(se.value));
    return P.length && P.reduce((se, Q) => se + Q, 0) / P.length < k / 2 ? k : 10;
  }, [x, ce, k]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": le,
      "aria-description": he,
      width: $,
      height: k,
      className: y,
      viewBox: `0 0 ${S} ${k}`,
      children: [
        f && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: G, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: Y,
                stopOpacity: Number(ue.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: Y,
                stopOpacity: Number(ue.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: Y,
                stopOpacity: Number(ue.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: S,
              height: k,
              fill: `url(#${G})`
            }
          )
        ] }),
        te && te.lower != null && te.upper != null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          o && /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                V(te.upper),
                V(te.lower)
              ),
              width: S,
              height: Math.abs(
                V(te.upper) - V(te.lower)
              ),
              fill: Y,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: S,
              y1: V(te.lower),
              y2: V(te.lower),
              stroke: Y,
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
              y1: V(te.upper),
              y2: V(te.upper),
              stroke: Y,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          b && i && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            b.lowerTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: S,
                y1: V(b.lowerTwo),
                y2: V(b.lowerTwo),
                stroke: Y,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: S,
                y1: V(b.lowerOne),
                y2: V(b.lowerOne),
                stroke: Y,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: S,
                y1: V(b.upperOne),
                y2: V(b.upperOne),
                stroke: Y,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: S,
                y1: V(b.upperTwo),
                y2: V(b.upperTwo),
                stroke: Y,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && C != null && /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: 0,
            x2: S,
            y1: V(C),
            y2: V(C),
            stroke: Xe("common-cause", "#A6A6A6"),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: de,
            fill: "none",
            stroke: Xe("common-cause", "#A6A6A6"),
            strokeWidth: D.stroke,
            strokeLinecap: "round"
          }
        ),
        fe.map((P, re) => {
          const se = x[P];
          if (!se || se.value == null) return null;
          const Q = V(se.value), R = re / (pe.length - 1 || 1) * (S - E * 2) + E, Z = (P === K && l ? D.pointR + 1 : D.pointR) - 0.5;
          let B = Xe("common-cause", "#A6A6A6");
          if (N) {
            const T = j?.[J + P];
            T === "improvement" ? B = Xe("improvement", "#00B0F0") : T === "concern" ? B = Xe("concern", "#E46C0A") : M?.[J + P] ? B = Xe("no-judgement", "#490092") : B = Xe("common-cause", "#A6A6A6");
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: R,
              cy: Q,
              r: Z,
              fill: B,
              stroke: "none",
              strokeWidth: 0,
              onClick: m ? () => m(P, se) : void 0,
              style: m ? { cursor: "pointer" } : void 0,
              "data-index": P,
              "data-signal-colour": N ? B : void 0
            },
            P
          );
        }),
        c && ce && ae && ae !== _e.CommonCause && w && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: S - 4,
            y: A,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: Y,
            "data-glyph-pos": A < k / 2 ? "top" : "bottom",
            children: w === Le.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
Ul.displayName = "SPCSpark";
function pi(e) {
  switch (e) {
    case Ce.ImprovementHigh:
    case Ce.ImprovementLow:
      return _e.SpecialCauseImproving;
    case Ce.ConcernHigh:
    case Ce.ConcernLow:
      return _e.SpecialCauseDeteriorating;
    case Ce.NeitherHigh:
    case Ce.NeitherLow:
      return _e.SpecialCauseNoJudgement;
    case Ce.CommonCause:
      return _e.CommonCause;
    default:
      return null;
  }
}
function Wm(e) {
  return e === Ce.ImprovementHigh || e === Ce.ImprovementLow || e === Ce.ConcernHigh || e === Ce.ConcernLow || e === Ce.NeitherHigh || e === Ce.NeitherLow;
}
function Gm(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function Ym(e) {
  const {
    values: t,
    x: n,
    chartType: a = mt.XmR,
    metricImprovement: s = Le.Neither,
    showLimits: o = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: c = !1
    // autoClassify = true,
  } = e, d = W.useMemo(() => {
    const v = [];
    for (let b = 0; b < t.length; b++)
      v.push({ x: n?.[b], value: t[b] });
    return v;
  }, [t, n]), u = W.useMemo(() => {
    try {
      const v = d.map((b, j) => ({ x: b.x ?? j, value: b.value }));
      return Sa({ chartType: a, metricImprovement: s, data: v, settings: {} });
    } catch {
      return null;
    }
  }, [d, a, s]), f = W.useMemo(() => {
    const v = u?.rows;
    if (!v || v.length === 0) return null;
    for (let b = v.length - 1; b >= 0; b--) {
      const j = v[b];
      if (j && j.value != null && !j.ghost) return j;
    }
    return v[v.length - 1] ?? null;
  }, [u]), h = W.useMemo(() => {
    const v = u?.rows;
    if (!v || v.length === 0) return null;
    let b = v[v.length - 1];
    for (let j = v.length - 1; j >= 0; j--) {
      const M = v[j];
      if (M && M.value != null && !M.ghost) {
        b = M;
        break;
      }
    }
    return pi(b?.variationIcon);
  }, [u]), p = W.useMemo(() => f?.mean ?? null, [f]), y = W.useMemo(() => {
    if (!f) return null;
    const v = f?.lowerProcessLimit ?? null, b = f?.upperProcessLimit ?? null;
    return v == null && b == null ? null : { lower: v, upper: b };
  }, [f]), m = W.useMemo(() => f ? {
    upperOne: f?.upperOneSigma ?? null,
    upperTwo: f?.upperTwoSigma ?? null,
    lowerOne: f?.lowerOneSigma ?? null,
    lowerTwo: f?.lowerTwoSigma ?? null
  } : null, [f]), g = W.useMemo(() => {
    const v = u?.rows;
    if (!(!v || v.length === 0))
      return v.map((b) => {
        const j = !!b?.specialCauseSinglePointUp || !!b?.specialCauseTwoOfThreeUp || !!b?.specialCauseFourOfFiveUp || !!b?.specialCauseShiftUp || !!b?.specialCauseTrendUp, M = !!b?.specialCauseSinglePointDown || !!b?.specialCauseTwoOfThreeDown || !!b?.specialCauseFourOfFiveDown || !!b?.specialCauseShiftDown || !!b?.specialCauseTrendDown;
        switch (s) {
          case Le.Up:
            return j ? "improvement" : M ? "concern" : "neither";
          case Le.Down:
            return M ? "improvement" : j ? "concern" : "neither";
          case Le.Neither:
          default:
            return "neither";
        }
      });
  }, [u, s]), L = W.useMemo(() => {
    const v = u?.rows;
    if (!(!v || v.length === 0))
      return v.map((b) => b?.variationIcon === Ce.NeitherHigh || b?.variationIcon === Ce.NeitherLow);
  }, [u]), N = W.useMemo(() => {
    let v = null;
    if (f && f.value != null && !f.ghost) {
      const D = f.variationIcon;
      h === _e.SpecialCauseNoJudgement ? v = Wm(D) ? _e.SpecialCauseNoJudgement : _e.CommonCause : v = pi(D) ?? _e.CommonCause;
    }
    const b = v ?? _e.CommonCause, j = wa[b].hex, [M, w, x] = Gm(j), I = ba();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${M}, ${w}, ${x}, ${I.start}) 0%, rgba(${M}, ${w}, ${x}, ${I.mid}) 50%, rgba(${M}, ${w}, ${x}, ${I.end}) 100%)`,
      "--fdp-metric-card-accent": j
    };
  }, [f, h]);
  return { sparkProps: W.useMemo(() => ({
    data: d,
    showMean: c,
    showLimits: o,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: s,
    centerLine: p,
    controlLimits: y,
    sigmaBands: m,
    pointSignals: g,
    pointNeutralSpecialCause: L,
    variationState: h ?? void 0
  }), [
    d,
    c,
    o,
    i,
    l,
    s,
    h,
    p,
    y?.lower,
    y?.upper,
    m?.upperTwo,
    m?.lowerOne,
    m?.lowerTwo,
    g?.length,
    L?.length
  ]), metricCardStyle: N, latestState: h };
}
function hi(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function Vm(e, t, n) {
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
function Zm(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const a = [];
  for (let c = 1; c < n.length; c++) a.push(n[c].getTime() - n[c - 1].getTime());
  const s = a.sort((c, d) => c - d), o = s[Math.floor(s.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return o <= 2 * i ? "hourly" : o <= 2 * l ? "daily" : o <= 10 * l ? "weekly" : o <= 45 * l ? "monthly" : o <= 120 * l ? "quarterly" : "annually";
}
function mi(e, t) {
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
function Jm(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const s = e.filter((l) => l != null);
  if (!s.length) return;
  const o = Math.min(...s), i = Math.max(...s);
  if (a === "0-1") {
    if (o >= 0 && i <= 1 && i > 0) return "%";
  } else if (o >= 0 && i <= 100 && i > 0) return "%";
}
function qm(e, t, n = 1) {
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
function Wl(e) {
  const {
    values: t,
    dates: n,
    intervalHint: a,
    startDate: s,
    providedUnit: o,
    defaultUnit: i,
    autoValue: l = !0,
    autoDelta: c = !0,
    autoMetadata: d = !0,
    deltaConfig: u
  } = e, f = t.map((x) => typeof x == "number" ? x : x == null ? null : Number(x));
  let h = -1;
  for (let x = f.length - 1; x >= 0; x--)
    if (f[x] != null) {
      h = x;
      break;
    }
  let p = (n || []).map(hi);
  if (!p.some(Boolean)) {
    const x = hi(s);
    x && a ? p = Vm(f.length, x, a) : p = new Array(f.length).fill(void 0);
  }
  const m = Zm(p, a), g = Jm(f, o, i, e.percentHeuristic), L = l && h >= 0 && f[h] != null ? f[h] : void 0, N = { strategy: "previous", n: 1, absolute: !0, skipNulls: !0, ...u || {} };
  function C() {
    if (h < 0) return -1;
    if (N.strategy === "previous" || N.strategy === "n-points") {
      let F = h - (N.strategy === "previous" ? 1 : Math.max(1, N.n || 1));
      if (!N.skipNulls) return F;
      for (let S = F; S >= 0; S--) if (f[S] != null) return S;
      return -1;
    }
    const x = p[h];
    if (!x) return -1;
    const I = new Date(x);
    I.setFullYear(I.getFullYear() - 1);
    let _ = -1, D = 1 / 0;
    for (let F = 0; F < p.length; F++) {
      const S = p[F];
      if (!S || f[F] == null) continue;
      const $ = Math.abs(S.getTime() - I.getTime());
      $ < D && (D = $, _ = F);
    }
    return _;
  }
  const v = C(), b = v >= 0 ? f[v] : null;
  let j;
  if (c && L != null && b != null) {
    const x = L - b, I = N.absolute !== !1, _ = I ? x : b === 0 ? 0 : x / Math.abs(b) * 100;
    j = {
      value: Number.isFinite(_) ? Number(_.toFixed(2)) : 0,
      isPercent: I ? g === "%" : !0,
      period: `vs ${qm(m, a, N.strategy === "n-points" ? Math.max(1, N.n || 1) : 1)}`
    };
  }
  const M = h >= 0 ? p[h] : void 0, w = d && mi(M, m) ? `Latest: ${mi(M, m)}` : void 0;
  return { value: L, unit: g, delta: j, metadata: w, latestDate: M, frequency: m };
}
const Oy = ({
  sparkData: e,
  direction: t = Le.Neither,
  showMean: n = !1,
  showLimits: a = !0,
  showLimitBand: s = !1,
  showInnerBands: o = !1,
  maxPoints: i,
  autoValue: l = !0,
  autoDelta: c = !0,
  autoMetadata: d = !0,
  defaultUnit: u,
  intervalHint: f,
  startDate: h,
  deltaConfig: p,
  ...y
}) => {
  const m = Ym({
    values: e.map((j) => j.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: s,
    showInnerBands: o,
    showMean: n
  }), g = /* @__PURE__ */ r.jsx(Ul, { ...m.sparkProps, maxPoints: i }), L = W.useMemo(() => Wl({
    values: e.map((j) => typeof j.value == "number" ? j.value : null),
    dates: e.map((j) => j.date),
    intervalHint: f,
    startDate: h,
    providedUnit: y.unit,
    defaultUnit: u,
    autoValue: l,
    autoDelta: c,
    autoMetadata: d,
    deltaConfig: p
  }), [e, f, h, y.unit, u, l, c, d, p]), N = l && L.value != null ? L.value : y.value, C = c && L.delta ? L.delta : y.delta, v = L.unit || y.unit, b = d && L.metadata ? L.metadata : y.metadata;
  return /* @__PURE__ */ r.jsx(
    ym,
    {
      ...y,
      value: N,
      unit: v,
      delta: C,
      metadata: b,
      visual: g,
      style: m.metricCardStyle
    }
  );
};
function Xm({
  warnings: e,
  show: t,
  formatWarningCategory: n,
  formatWarningCode: a
}) {
  const [s, o] = W.useState(""), i = W.useRef("");
  return W.useEffect(() => {
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
    const c = {
      error: e.filter((f) => f.severity === $t.Error).length,
      warning: e.filter((f) => f.severity === $t.Warning).length,
      info: e.filter((f) => f.severity === $t.Info).length
    }, d = [];
    c.error && d.push(`${c.error} error${c.error === 1 ? "" : "s"}`), c.warning && d.push(`${c.warning} warning${c.warning === 1 ? "" : "s"}`), c.info && d.push(`${c.info} info`);
    const u = `Diagnostics updated: ${l} warning${l === 1 ? "" : "s"} (${d.join(", ")}).`;
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
        en,
        {
          firstCellIsHeader: !1,
          panel: !1,
          responsive: !1,
          head: [{ text: "Severity" }, { text: "Category" }, { text: "Code" }, { text: "Details" }],
          rows: e.map((l) => {
            let c = "grey";
            return l.severity === $t.Error ? c = "red" : l.severity === $t.Warning ? c = "orange" : l.severity === $t.Info && (c = "blue"), [
              {
                node: /* @__PURE__ */ r.jsx(We, { color: c, text: (l.severity ? String(l.severity) : "Info").replace(/^[a-z]/, (d) => d.toUpperCase()) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
              },
              {
                node: l.category ? /* @__PURE__ */ r.jsx(We, { color: "purple", text: n(l.category) }) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
              },
              {
                node: /* @__PURE__ */ r.jsx(We, { color: "grey", text: a(l.code) }),
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
function Qm({
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
  ...c
}) => {
  const d = wr(), u = wr(), { start: f, mid: h, end: p } = ba(), y = s || km[e], m = (i || Cm[e]).slice(0, 2), g = n || `Assurance ${e}`;
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": g,
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
          o && /* @__PURE__ */ r.jsxs("linearGradient", { id: u, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: y, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: y, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(p) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: o ? `url(#${u})` : "#ffffff",
            ...a ? { filter: `url(#${d})` } : {},
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
            children: /* @__PURE__ */ r.jsx("tspan", { x: 60, y: 184, children: m })
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
const Km = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: hn,
  Direction: Me,
  MetricPolarity: rt,
  SPCAssuranceIcon: Ks,
  SPCVariationIcon: Qs,
  VariationJudgement: vt,
  VariationState: _e,
  getVariationColour: Pl,
  getVariationTrend: Js
}, Symbol.toStringTag, { value: "Module" }));
function eg(e) {
  const { show: t, rowsForUi: n, minPoints: a, metricImprovement: s, variant: o, runLength: i } = e;
  if (!t || !n?.length) return null;
  const l = n, c = typeof a == "number" && !isNaN(a) ? a : 13;
  if (l.filter(
    (b) => !b.data.ghost && b.data.value != null
  ).length < c) return null;
  let u = -1;
  for (let b = l.length - 1; b >= 0; b--) {
    const j = l[b];
    if (j && j.data.value != null && !j.data.ghost) {
      u = b;
      break;
    }
  }
  if (u === -1) return null;
  const f = l[u], h = f.classification?.variation, p = f.classification?.assurance, y = h === Ue.Neither && !!f.classification?.neutralSpecialCauseValue, m = p === ln.Pass ? hn.Pass : p === ln.Fail ? hn.Fail : hn.Uncertain;
  let g;
  if (h === Ue.Suppressed) {
    const b = !!f.rules.singlePoint.up, j = !!f.rules.singlePoint.down;
    s === Nt.Up ? b ? g = Me.Higher : j && (g = Me.Lower) : s === Nt.Down ? j ? g = Me.Lower : b && (g = Me.Higher) : g = Me.Higher;
  } else if (h === Ue.Neither && y) {
    const b = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, j = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    b && !j ? g = Me.Higher : j && !b ? g = Me.Lower : g = Me.Higher;
  }
  const L = 80, N = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, C = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let v = Ce.CommonCause;
  return h === Ue.Improvement ? v = Ce.ImprovementHigh : h === Ue.Concern ? v = Ce.ConcernHigh : h === Ue.Neither && (y ? g === Me.Lower || C && !N ? v = Ce.NeitherLow : v = Ce.NeitherHigh : v = Ce.CommonCause), /* @__PURE__ */ r.jsxs(
    "div",
    {
      style: { display: "flex", gap: 12, marginRight: 16 },
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-icon",
            "data-variation": String(h),
            "data-trend": g ? String(g) : "none",
            style: { width: L, height: L },
            children: /* @__PURE__ */ r.jsx(
              Qs,
              {
                dropShadow: !1,
                data: {
                  variationIcon: v,
                  improvementDirection: s,
                  specialCauseNeutral: y,
                  highSideSignal: N,
                  lowSideSignal: C,
                  ...g ? { trend: g } : {}
                },
                letterMode: s === Nt.Neither ? sr.Direction : sr.Polarity,
                size: L,
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
            style: { width: L, height: L },
            children: /* @__PURE__ */ r.jsx(
              Ks,
              {
                status: m,
                size: L,
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
const Gl = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: s,
  dateFormatter: o,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const c = tn(), d = cn(), [u, f] = W.useState(null), [h, p] = W.useState(!1), y = W.useRef(null);
  W.useEffect(() => {
    if (c) {
      if (c.focused && (f(c.focused), y.current && (cancelAnimationFrame(y.current), y.current = null)), !c.focused && !h) {
        const Q = requestAnimationFrame(() => {
          f(null), y.current = null;
        });
        y.current = Q;
      }
      return () => {
        y.current && (cancelAnimationFrame(y.current), y.current = null);
      };
    }
  }, [c, c?.focused, h]);
  const m = c && (c.focused || (h ? u : null) || u), [g, L] = W.useState(!1);
  W.useEffect(() => {
    const Q = requestAnimationFrame(() => L(!0));
    return () => cancelAnimationFrame(Q);
  }, [m?.index]);
  const N = d?.innerWidth ?? 0, C = d?.innerHeight ?? 0, v = m ? Math.min(Math.max(m.clientX, 0), N) : 0, b = m ? Math.min(Math.max(m.clientY, 0), C) : 0, j = d?.ref?.current || void 0;
  if (!m)
    return null;
  const M = e?.[m.index], x = ya(
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
  ).map((Q) => ({ id: Q, label: An[Q].tooltip })), I = m.x instanceof Date ? m.x : new Date(m.x), _ = o ? o(I) : I.toDateString(), D = s ? `${s}` : "", F = a || D ? `${m.y}${D ? "" + D : " "}${a ? " " + a : ""}` : `${m.y}`, S = va(M?.classification?.variation), $ = Al(M?.classification?.assurance), k = Sm(
    t.mean ?? null,
    t.sigma,
    m.y
  ), E = n ? n(m.index, { x: m.x, y: m.y }) : void 0, ie = S || $ || k, J = M?.rules.trend.up || M?.rules.trend.down, z = M?.classification?.variation === Ue.Neither && J, X = l && z ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, O = x.length > 0, ae = M && "primeDirection" in M ? M.primeDirection : void 0, Y = M && "primeRuleId" in M ? M.primeRuleId : void 0, V = i && M?.classification?.variation === Ue.Neither && O, fe = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", pe = El(M?.classification?.variation), de = 6.2, te = [
    E || "",
    `${_} • ${F}`
  ].filter(Boolean).reduce(
    (Q, R) => Math.max(Q, R.length * de + 32),
    0
  ), ue = 200, G = 440, ce = Math.min(G, Math.max(ue, te));
  let le = v + 12, A = (d.margin?.top ?? 0) + b + 16;
  le + ce > N && (le = v - -60 - ce), le < 0 && (le = Math.max(0, N - ce));
  const P = m ? `spc-tooltip-${m.index}` : "spc-tooltip", re = typeof m.index == "number" ? m.index : NaN, se = j ? Yc(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: P,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (g ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: le,
          top: A,
          width: ce,
          maxWidth: G,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": g ? "false" : "true",
        "data-floating": !0,
        "data-placement": le + ce + 12 > N ? "left" : "right",
        onPointerEnter: () => {
          p(!0), y.current && (cancelAnimationFrame(y.current), y.current = null);
        },
        onPointerLeave: () => {
          if (p(!1), !c?.focused) {
            const Q = requestAnimationFrame(() => {
              f(null), y.current = null;
            });
            y.current = Q;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              re
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: _ })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: F })
          ] }),
          ie && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: S?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              We,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : S?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              We,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : V ? /* @__PURE__ */ r.jsx(
              We,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : S ? /* @__PURE__ */ r.jsx(
              We,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          $ && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const Q = $.toLowerCase(), H = !(Q.includes("not met") || Q.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(Q);
              return /* @__PURE__ */ r.jsx(
                We,
                {
                  text: $,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${H ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${$}`
                }
              );
            })() })
          ] }),
          k && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              We,
              {
                text: (() => {
                  const Q = k.toLowerCase();
                  return Q.startsWith("within 1") ? "≤1σ" : Q.startsWith("1–2") ? "1–2σ" : Q.startsWith("2–3") ? "2–3σ" : Q.startsWith(">3") ? ">3σ" : k;
                })(),
                color: k.includes(">3") ? "orange" : k.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${k}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          X && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: X })
          ] }),
          O && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: x.map(({ id: Q, label: R }) => {
                  const H = String(Q), B = H === ar.TrendIncreasing || H === ar.TrendDecreasing ? "fdp-spc-tag--trend" : V ? "fdp-spc-tag--no-judgement" : S ? S.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : S.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    We,
                    {
                      text: R,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${B}`,
                      "data-rule-id": H
                    },
                    H
                  );
                })
              }
            ),
            ae && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const Q = V ? "fdp-spc-tag--no-judgement" : S ? S.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : S.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", R = `${ae}${Y ? ` (${Y})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  We,
                  {
                    text: R,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${Q}`,
                    "aria-label": `Prime direction ${ae}${Y ? ` via ${Y}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    j
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
            cx: v,
            cy: b,
            r: 7,
            fill: "none",
            stroke: fe,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: v,
            cy: b,
            r: 5,
            fill: "#000",
            stroke: fe,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: v,
            cy: b,
            r: 2.5,
            fill: pe,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        se
      ]
    }
  );
}, tg = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const s = tn(), o = s?.focused ?? null, i = o?.index ?? null, l = typeof i == "number" && e ? e[i] : null, c = W.useMemo(
    () => l ? ya({
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
  ), d = W.useMemo(
    () => Array.from(
      new Set(c.map((m) => An[m]?.narration).filter(Boolean))
    ),
    [c]
  ), u = l ? va(l.classification?.variation) : null, f = l ? Al(l.classification?.assurance) : null, h = c.length > 0, p = l ? l.classification?.variation === Ue.Neither && h : !1, y = W.useRef(null);
  return W.useEffect(() => {
    if (!a || !o || l == null) return;
    const m = `${o.seriesId}:${o.index}`;
    if (y.current !== m) {
      y.current = m;
      try {
        a({
          index: o.index,
          x: o.x,
          y: o.y,
          row: l,
          rules: c
        });
      } catch {
      }
    }
  }, [o?.seriesId, o?.index, o?.x, o?.y, l, c, a]), /* @__PURE__ */ r.jsxs(
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
                      We,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : u?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      We,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : p ? /* @__PURE__ */ r.jsx(
                      We,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : u ? /* @__PURE__ */ r.jsx(
                      We,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const m = f.toLowerCase(), L = !(m.includes("not met") || m.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(m);
                      return /* @__PURE__ */ r.jsx(
                        We,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${L ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
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
                children: c.length === 0 ? /* @__PURE__ */ r.jsx("span", { children: " None" }) : c.map((m) => {
                  const g = String(m), N = g === ar.TrendIncreasing || g === ar.TrendDecreasing ? "fdp-spc-tag--trend" : p ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", C = An[m]?.tooltip || g;
                  return /* @__PURE__ */ r.jsx(
                    We,
                    {
                      text: C,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${N}`,
                      "data-rule-id": g,
                      title: An[m]?.tooltip
                    },
                    g
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
function ng(e, t = !0) {
  if (!e?.length) return [];
  const n = [...e];
  if (t) {
    for (let o = 1; o < n.length - 1; o++)
      n[o] === st.Common && n[o - 1] === n[o + 1] && n[o - 1] !== st.Common && (n[o] = n[o - 1]);
    let s = 0;
    for (; s < n.length; ) {
      const o = n[s];
      let i = s + 1;
      for (; i < n.length && n[i] === o; ) i++;
      i - s === 1 && o !== st.Common && (n[s] = st.Common), s = i;
    }
  }
  const a = [];
  if (n.length) {
    let s = 0;
    for (let o = 1; o <= n.length; o++)
      if (o === n.length || n[o] !== n[s]) {
        const i = n[s], l = o - 1, c = l - s + 1;
        (i === st.Common || c >= 2) && a.push({ start: s, end: l, category: i }), s = o;
      }
  }
  return a;
}
var Jn = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(Jn || {}), Yl = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(Yl || {});
function rg(e) {
  const {
    ui: t,
    input: n,
    engine: a,
    container: s,
    a11y: o,
    visualsEngine: i,
    meta: l,
    data: c,
    ariaLabel: d,
    height: u,
    showZones: f,
    showPoints: h,
    announceFocus: p,
    className: y,
    unit: m,
    targets: g,
    baselines: L,
    ghosts: N,
    settings: C,
    chartType: v,
    metricImprovement: b,
    gradientSequences: j,
    sequenceTransition: M,
    processLineWidth: w,
    showPartitionMarkers: x,
    showWarningsPanel: I,
    warningsFilter: _,
    enableNeutralNoJudgement: D,
    showTrendGatingExplanation: F,
    trendVisualMode: S,
    alwaysShowZeroY: $,
    alwaysShowHundredY: k,
    percentScale: E,
    showTrendStartMarkers: ie,
    showFirstFavourableCrossMarkers: J,
    showTrendBridgeOverlay: z,
    showSignalsInspector: X,
    onSignalFocus: O,
    showIcons: ae,
    showEmbeddedIcon: Y,
    embeddedIconVariant: V,
    embeddedIconRunLength: fe,
    showFocusIndicator: pe,
    visualsScenario: de,
    visualsEngineSettings: K,
    source: te,
    narrationContext: ue,
    highlightOutOfControl: G
  } = e;
  process.env.NODE_ENV !== "production" && (!n && (g !== void 0 || L !== void 0 || N !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !a && C !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !s && (u !== void 0 || y !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !o && (d !== void 0 || p !== void 0 || ue !== void 0 || m !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !i && (de !== void 0 || K !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || h !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && G !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !l && te !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const ce = n?.data ?? c ?? [], le = n?.targets ?? g, he = n?.baselines ?? L, A = n?.ghosts ?? N, P = a?.chartType ?? v ?? sn.XmR, re = a?.metricImprovement ?? b ?? Nt.Neither, se = a?.settings ?? C, Q = a?.autoRecalc, R = t?.axes?.alwaysShowZeroY ?? $ ?? !0, H = t?.axes?.alwaysShowHundredY ?? k ?? !1, Z = t?.axes?.percentScale ?? E ?? !1, B = t?.visuals?.gradientSequences ?? j ?? !1, T = t?.visuals?.sequenceTransition ?? M ?? "slope", U = t?.visuals?.processLineWidth ?? w ?? 2, ee = t?.visuals?.trend?.visualMode ?? S ?? "ungated", ne = t?.visuals?.trend?.showGatingExplanation ?? F ?? !0, q = t?.visuals?.rules?.enableNeutralNoJudgement ?? D ?? !0, oe = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, ve = t?.visuals?.showZones, Se = t?.visuals?.showPoints, we = t?.visuals?.rules?.highlightOutOfControl, Ne = s?.height, ge = s?.className, De = o?.label, Re = o?.unit, Ze = o?.narrationContext, ze = i?.scenario, at = i?.settings, kt = l?.source, St = t?.overlays?.partitionMarkers ?? x ?? !1, xt = t?.overlays?.trendStartMarkers ?? ie ?? !1, Ge = t?.overlays?.firstFavourableCrossMarkers ?? J ?? !1, Ke = t?.overlays?.trendBridge ?? z ?? !1, Pt = t?.inspector?.show ?? X ?? !1, dr = t?.inspector?.onFocus ?? O, Ie = t?.warnings?.show ?? I ?? !1, $e = t?.warnings?.filter ?? _, Qe = t?.icons?.show ?? ae ?? !1, bt = t?.icons?.embedded?.show ?? Y ?? !0, ht = t?.icons?.embedded?.variant ?? V ?? gn.Classic, _t = t?.icons?.embedded?.runLength ?? fe, tt = t?.overlays?.focusIndicator ?? pe ?? !0;
  return {
    effData: ce,
    effTargets: le,
    effBaselines: he,
    effGhosts: A,
    effChartTypeCore: P,
    effMetricImprovementCore: re,
    effEngineSettings: se,
    effEngineAutoRecalc: Q,
    effHeight: Ne,
    effClassName: ge,
    effAriaLabel: De,
    effUnit: Re,
    effNarrationContext: Ze,
    effShowZones: ve,
    effShowPoints: Se,
    effHighlightOutOfControl: we,
    effVisualsScenario: ze,
    effVisualsEngineSettings: at,
    effSource: kt,
    effAlwaysShowZeroY: R,
    effAlwaysShowHundredY: H,
    effPercentScale: Z,
    effGradientSequences: B,
    effSequenceTransition: T,
    effProcessLineWidth: U,
    effTrendVisualMode: ee,
    effShowTrendGatingExplanation: ne,
    effEnableNeutralNoJudgement: q,
    effEnableRules: oe,
    effShowPartitionMarkers: St,
    effShowTrendStartMarkers: xt,
    effShowFirstFavourableCrossMarkers: Ge,
    effShowTrendBridgeOverlay: Ke,
    effShowSignalsInspector: Pt,
    effOnSignalFocus: dr,
    effShowWarningsPanel: Ie,
    effWarningsFilter: $e,
    effShowIcons: Qe,
    effShowEmbeddedIcon: bt,
    effEmbeddedIconVariant: ht,
    effEmbeddedIconRunLength: _t,
    effShowFocusIndicator: tt
  };
}
let ag = 0;
const sg = ({
  series: e,
  showPoints: t,
  announceFocus: n,
  limits: a,
  showZones: s,
  highlightOutOfControl: o,
  engineRows: i,
  enableRules: l,
  narrationContext: c,
  gradientSequences: d,
  sequenceTransition: u,
  processLineWidth: f,
  effectiveUnit: h,
  partitionMarkers: p,
  ariaLabel: y,
  metricImprovement: m,
  enableNeutralNoJudgement: g = !0,
  showTrendGatingExplanation: L = !0,
  showTrendStartMarkers: N = !1,
  showFirstFavourableCrossMarkers: C = !1,
  showTrendBridgeOverlay: v = !1,
  showSignalsInspector: b = !1,
  onSignalFocus: j,
  visualCategories: M,
  uniformTarget: w,
  showFocusIndicator: x = !1,
  zeroBreakSlotGapPx: I
}) => {
  const _ = Sn(), D = cn();
  if (!_) return null;
  const { xScale: F, yScale: S } = _, $ = W.useRef(
    "spc-seq-" + ++ag
  ), k = tn(), E = e[0]?.data || [], ie = W.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const A = /* @__PURE__ */ new Set();
    return E.forEach((P, re) => {
      typeof a.ucl == "number" && P.y > a.ucl && A.add(re), typeof a.lcl == "number" && P.y < a.lcl && A.add(re);
    }), A;
  }, [a.ucl, a.lcl, E]), J = W.useMemo(() => {
    if (!i || !i.length) return null;
    const A = [];
    return i.forEach((P, re) => {
      const se = P.classification.variation === Ue.Concern || P.classification.variation === Ue.Improvement || !!P.classification.neutralSpecialCauseValue, Q = !!P.rules.singlePoint.up || !!P.rules.twoOfThree.up || !!P.rules.fourOfFive.up || !!P.rules.shift.up || !!P.rules.trend.up, R = !!P.rules.singlePoint.down || !!P.rules.twoOfThree.down || !!P.rules.fourOfFive.down || !!P.rules.shift.down || !!P.rules.trend.down;
      A[re] = {
        variation: P.classification.variation,
        assurance: P.classification.assurance,
        special: se,
        concern: P.classification.variation === Ue.Concern,
        improvement: P.classification.variation === Ue.Improvement,
        trendUp: !!P.rules.trend.up,
        trendDown: !!P.rules.trend.down,
        upAny: Q,
        downAny: R,
        neutralSpecial: !!P.classification.neutralSpecialCauseValue,
        shiftUp: !!P.rules.shift.up,
        shiftDown: !!P.rules.shift.down,
        twoOfThreeUp: !!P.rules.twoOfThree.up,
        twoOfThreeDown: !!P.rules.twoOfThree.down,
        fourOfFiveUp: !!P.rules.fourOfFive.up,
        fourOfFiveDown: !!P.rules.fourOfFive.down,
        partitionId: P.partition.id ?? null
      };
    }), A;
  }, [i]), z = W.useMemo(() => (M || []).map((A) => A === lt.Improvement ? st.Improvement : A === lt.Concern ? st.Concern : A === lt.NoJudgement ? st.NoJudgement : st.Common), [M]), X = W.useMemo(() => !d || !z.length ? [] : ng(z, !0), [d, z, y]), O = W.useMemo(
    () => E.map((A) => F(A.x instanceof Date ? A.x : new Date(A.x))),
    [E, F]
  ), ae = F.range()[1], Y = F.range()[0], V = W.useMemo(() => {
    if (!i || !i.length)
      return null;
    let A = Number.POSITIVE_INFINITY, P = Number.POSITIVE_INFINITY;
    if (i.forEach((B, T) => {
      B.rules.trend.up && (A = Math.min(A, T)), B.rules.trend.down && (P = Math.min(P, T));
    }), !Number.isFinite(A) && !Number.isFinite(P))
      return null;
    const re = A <= P, se = re ? Lt.Up : Lt.Down, Q = re ? A : P, R = (B) => m == null || m === Nt.Neither || B == null || typeof B.data.value != "number" || typeof B.limits.mean != "number" ? !1 : se === Lt.Up ? m === Nt.Up ? B.data.value > B.limits.mean : B.data.value < B.limits.mean : m === Nt.Down ? B.data.value < B.limits.mean : B.data.value > B.limits.mean;
    let H = null;
    for (let B = Q; B < i.length; B++) {
      const T = i[B];
      if (!(re ? !!T.rules.trend.up : !!T.rules.trend.down)) break;
      if (R(T)) {
        H = B;
        break;
      }
    }
    let Z = !1;
    if (H != null) {
      let B = 0;
      for (let T = H; T < i.length; T++) {
        const U = i[T];
        if (!(re ? !!U.rules.trend.up : !!U.rules.trend.down)) break;
        R(U) && B++;
      }
      Z = B >= 2;
    }
    return {
      direction: se,
      detectedAt: Q,
      firstFavourableCrossAt: H,
      persistedAcrossMean: Z
    };
  }, [i, m]), fe = W.useMemo(() => {
    if (!i || !i.length) return null;
    const A = (P) => {
      const re = [];
      let se = null, Q = null;
      for (let R = 0; R < i.length; R++) {
        const H = i[R], Z = P(H), B = typeof Z == "number" && !isNaN(Z) ? Z : null;
        if (B == null) {
          se !== null && Q != null && (re.push({
            x1: O[se],
            x2: O[R - 1],
            y: S(Q)
          }), se = null, Q = null);
          continue;
        }
        if (se === null) {
          se = R, Q = B;
          continue;
        }
        Q != null && Math.abs(B - Q) <= 1e-9 || (Q != null && re.push({
          x1: O[se],
          x2: O[R - 1],
          y: S(Q)
        }), se = R, Q = B);
      }
      return se !== null && Q != null && re.push({
        x1: O[se],
        x2: O[i.length - 1],
        y: S(Q)
      }), re;
    };
    return {
      mean: A((P) => P.limits.mean ?? null),
      ucl: A((P) => P.limits.ucl ?? null),
      lcl: A((P) => P.limits.lcl ?? null),
      onePos: A((P) => P.limits.oneSigma.upper ?? null),
      oneNeg: A((P) => P.limits.oneSigma.lower ?? null),
      twoPos: A((P) => P.limits.twoSigma.upper ?? null),
      twoNeg: A((P) => P.limits.twoSigma.lower ?? null)
    };
  }, [i, O, S]), pe = W.useMemo(() => X.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs(
      "linearGradient",
      {
        id: `${$.current}-grad-common`,
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
    X.map((A, P) => {
      const re = `${$.current}-grad-${P}`;
      let se, Q = 0.28, R = 0.12, H = 0.045;
      switch (A.category) {
        case st.Concern:
          se = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", Q = 0.28, R = 0.12, H = 0.045;
          break;
        case st.Improvement:
          se = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", Q = 0.26, R = 0.11, H = 0.045;
          break;
        case st.NoJudgement:
          se = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", Q = 0.26, R = 0.11, H = 0.045;
          break;
        default:
          se = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: re, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: se, stopOpacity: Q }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: se, stopOpacity: R }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: se, stopOpacity: H })
      ] }, re);
    })
  ] }) : null, [X]), de = W.useMemo(() => {
    if (!X.length) return null;
    const [A] = S.domain(), P = S(A), re = X.map((se, Q) => {
      const { start: R, end: H, category: Z } = se;
      if (R < 0 || H >= O.length || R > H)
        return null;
      const B = O[R], T = O[H];
      let U = "";
      if (Z === st.Common) {
        const ee = Q > 0 ? X[Q - 1] : null, ne = Q < X.length - 1 ? X[Q + 1] : null, q = ee ? O[ee.end] : Y, oe = ee ? S(E[ee.end].y) : P, ve = ne ? O[ne.start] : ae, Se = ne ? S(E[ne.start].y) : P;
        U = `M ${q} ${P}`, U += ` L ${q} ${oe}`;
        for (let we = R; we <= H; we++)
          U += ` L ${O[we]} ${S(E[we].y)}`;
        U += ` L ${ve} ${Se}`, U += ` L ${ve} ${P} Z`;
      } else {
        const ee = Q > 0 ? X[Q - 1] : null, ne = Q < X.length - 1 ? X[Q + 1] : null, q = ee && ee.category !== st.Common, oe = ne && ne.category !== st.Common, ve = S(E[R].y), Se = S(E[H].y);
        let we = B, Ne = T;
        if (q) {
          const ge = O[ee.end], De = S(E[ee.end].y), Re = E[R].y - E[ee.end].y;
          u === Jn.Slope && Re > 0 ? (U = `M ${ge} ${De} L ${B} ${ve}`, we = ge) : (U = `M ${B} ${P} L ${B} ${ve}`, we = B);
        } else
          U = `M ${B} ${P} L ${B} ${ve}`;
        for (let ge = R + 1; ge <= H; ge++)
          U += ` L ${O[ge]} ${S(E[ge].y)}`;
        if (U += ` L ${T} ${Se}`, oe) {
          const ge = O[ne.start], De = S(E[ne.start].y), Re = E[ne.start].y - E[H].y;
          (u === Jn.Slope && Re <= 0 || u === Jn.Extend) && (U += ` L ${ge} ${De}`, Ne = ge);
        }
        if (U += ` L ${Ne} ${P}`, U += ` L ${we} ${P} Z`, u === Jn.Neutral && q) {
          const ge = O[ee.end], De = S(E[ee.end].y), Re = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${ge} ${P} L ${ge} ${De} L ${B} ${ve} L ${B} ${P} Z`,
              fill: `url(#${$.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${Q}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            Re,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: U,
                fill: `url(#${$.current}-grad-${Q})`,
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
          d: U,
          fill: `url(#${$.current}-grad-${Q})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${Q}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: re });
  }, [X, O, ae, S, E, u]), K = W.useMemo(() => {
    if (!c?.timeframe && E.length >= 2) {
      const A = E.map((H) => H.x instanceof Date ? H.x : new Date(H.x)), P = new Date(Math.min(...A.map((H) => H.getTime()))), re = new Date(Math.max(...A.map((H) => H.getTime()))), se = Math.round((re.getTime() - P.getTime()) / 864e5) || 0;
      if (se < 14)
        return `The chart shows a timeframe of ${se + 1} days`;
      const Q = Math.round(se / 7);
      return Q < 20 ? `The chart shows a timeframe of ${Q} weeks` : `The chart shows a timeframe of ${(re.getFullYear() - P.getFullYear()) * 12 + (re.getMonth() - P.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, E]), te = (A) => {
    const P = A % 10, re = A % 100;
    return P === 1 && re !== 11 ? `${A}st` : P === 2 && re !== 12 ? `${A}nd` : P === 3 && re !== 13 ? `${A}rd` : `${A}th`;
  }, ue = (A) => `${te(A.getDate())} ${A.toLocaleString("en-GB", { month: "long" })}, ${A.getFullYear()}`, G = (A) => ({
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
  }), ce = W.useCallback(
    ({
      index: A,
      x: P,
      y: re
    }) => {
      const se = i?.[A], Q = P instanceof Date ? P : new Date(P), R = ue(Q), H = c?.measureUnit ? ` ${c.measureUnit}` : "", Z = c?.measureName ? ` ${c.measureName}` : "";
      if (!se)
        return `General summary is: ${K ? K + ". " : ""}Point ${A + 1}, ${R}, ${re}${H}${Z}`;
      const B = va(se.classification?.variation) || "Variation", T = ya(G(se)), U = T.length ? ` Rules: ${[...new Set(T.map((ne) => An[ne].narration))].join("; ")}.` : " No special cause rules.", ee = [];
      return c?.measureName && ee.push(`Measure: ${c.measureName}.`), c?.datasetContext && ee.push(`${c.datasetContext}.`), c?.organisation && ee.push(`Organisation: ${c.organisation}.`), c?.additionalNote && ee.push(c.additionalNote), [
        "General summary is:",
        ...ee,
        `Point ${A + 1} recorded on `,
        R + ",",
        `with a value of ${re} ${H}${Z}`,
        B + ".",
        U
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, K]
  ), le = W.useCallback(
    (A, P) => i?.[A] ? ce({
      index: A,
      seriesId: "process",
      x: P.x instanceof Date ? P.x : new Date(P.x),
      y: P.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, ce]
  ), he = W.useMemo(() => {
    try {
      const A = typeof S?.domain == "function" ? S.domain() : void 0;
      if (!A || !Array.isArray(A) || A.length < 2) return !1;
      const P = Math.min(A[0], A[1]), re = Math.max(A[0], A[1]);
      return !(0 >= P && 0 <= re);
    } catch {
      return !1;
    }
  }, [S]);
  return /* @__PURE__ */ r.jsx(mm, { children: /* @__PURE__ */ r.jsxs(
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
            width: _.xScale.range()[1] + 56 + 16,
            height: (D?.innerHeight ?? _.yScale.range()[0]) + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(ti, { type: "x" }),
              /* @__PURE__ */ r.jsx(
                ti,
                {
                  type: "y",
                  yZeroBreak: {
                    enabled: he,
                    gapPx: I,
                    zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
                  }
                }
              ),
              /* @__PURE__ */ r.jsx(Ah, { axis: "y" }),
              pe,
              de,
              p.map((A, P) => {
                const re = E[A];
                if (!re) return null;
                const se = F(re.x instanceof Date ? re.x : new Date(re.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: se,
                    x2: se,
                    y1: 0,
                    y2: S.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${P}`
                );
              }),
              fe?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                fe.mean.map((A, P) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__cl",
                    x1: A.x1,
                    x2: A.x2,
                    y1: A.y,
                    y2: A.y
                  },
                  `mean-${P}`
                )),
                fe.mean.map((A, P) => {
                  if (P === fe.mean.length - 1) return null;
                  const re = fe.mean[P + 1];
                  if (!re || A.y === re.y) return null;
                  const Q = Math.max(4, re.x1 - A.x2 || 0) * 0.5, R = `M ${A.x2},${A.y} C ${A.x2 + Q},${A.y} ${re.x1 - Q},${re.y} ${re.x1},${re.y}`;
                  return /* @__PURE__ */ r.jsx(
                    "path",
                    {
                      className: "fdp-spc__cl fdp-spc__cl-join",
                      d: R,
                      fill: "none"
                    },
                    `mean-join-${P}`
                  );
                })
              ] }) : null,
              w != null && /* @__PURE__ */ r.jsx(r.Fragment, {}),
              fe?.ucl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--ucl",
                  children: [
                    fe.ucl.map((A, P) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--ucl",
                        x1: A.x1,
                        x2: A.x2,
                        y1: A.y,
                        y2: A.y,
                        strokeWidth: 2
                      },
                      `ucl-${P}`
                    )),
                    fe.ucl.map((A, P) => {
                      if (P === fe.ucl.length - 1) return null;
                      const re = fe.ucl[P + 1];
                      if (!re || A.y === re.y) return null;
                      const Q = Math.max(4, re.x1 - A.x2 || 0) * 0.5, R = `M ${A.x2},${A.y} C ${A.x2 + Q},${A.y} ${re.x1 - Q},${re.y} ${re.x1},${re.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join",
                          d: R,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `ucl-join-${P}`
                      );
                    })
                  ]
                }
              ) : null,
              fe?.lcl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--lcl",
                  children: [
                    fe.lcl.map((A, P) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--lcl",
                        x1: A.x1,
                        x2: A.x2,
                        y1: A.y,
                        y2: A.y,
                        strokeWidth: 2
                      },
                      `lcl-${P}`
                    )),
                    fe.lcl.map((A, P) => {
                      if (P === fe.lcl.length - 1) return null;
                      const re = fe.lcl[P + 1];
                      if (!re || A.y === re.y) return null;
                      const Q = Math.max(4, re.x1 - A.x2 || 0) * 0.5, R = `M ${A.x2},${A.y} C ${A.x2 + Q},${A.y} ${re.x1 - Q},${re.y} ${re.x1},${re.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join",
                          d: R,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `lcl-join-${P}`
                      );
                    })
                  ]
                }
              ) : null,
              w != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: F.range()[1],
                    y1: S(w),
                    y2: S(w),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: F.range()[0] - 7,
                    y: S(w) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      w,
                      " ",
                      h || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              s && fe && fe.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                fe.onePos.map((A, P) => /* @__PURE__ */ r.jsx(
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
                  `onePos-${P}`
                )),
                fe.oneNeg.map((A, P) => /* @__PURE__ */ r.jsx(
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
                  `oneNeg-${P}`
                )),
                fe.twoPos.map((A, P) => /* @__PURE__ */ r.jsx(
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
                  `twoPos-${P}`
                )),
                fe.twoNeg.map((A, P) => /* @__PURE__ */ r.jsx(
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
                  `twoNeg-${P}`
                ))
              ] }),
              V && (N || C || v) && (() => {
                const A = V.detectedAt, P = V.firstFavourableCrossAt, re = E[A] ? F(
                  E[A].x instanceof Date ? E[A].x : new Date(E[A].x)
                ) : null, se = E[A] ? S(E[A].y) : null, Q = P != null && E[P] ? F(
                  E[P].x instanceof Date ? E[P].x : new Date(E[P].x)
                ) : null, R = P != null && E[P] ? S(E[P].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  v && re != null && se != null && Q != null && R != null && /* @__PURE__ */ r.jsx(
                    "line",
                    {
                      x1: re,
                      y1: se,
                      x2: Q,
                      y2: R,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  N && re != null && se != null && /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: re,
                      cy: se,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  C && Q != null && R != null && /* @__PURE__ */ r.jsx("circle", { cx: Q, cy: R, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                gm,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (A) => A.x instanceof Date ? A.x : new Date(A.x),
                  smooth: !1,
                  strokeWidth: f
                }
              ),
              t && E.map((A, P) => {
                const re = F(A.x instanceof Date ? A.x : new Date(A.x)), se = S(A.y), Q = ie.has(P), R = J?.[P], H = z[P], Z = H === st.Improvement, B = H === st.Concern, T = H === st.NoJudgement, U = [
                  "fdp-spc__point",
                  Q && o ? "fdp-spc__point--ooc" : null,
                  l && B ? "fdp-spc__point--sc-concern" : null,
                  l && Z ? "fdp-spc__point--sc-improvement" : null,
                  l && g && T ? "fdp-spc__point--sc-no-judgement" : null,
                  R?.assurance === ln.Pass ? "fdp-spc__point--assurance-pass" : null,
                  R?.assurance === ln.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), ee = k?.focused?.index === P;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: re,
                    cy: se,
                    r: 5,
                    className: U,
                    "data-variation": R?.variation,
                    "data-assurance": R?.assurance,
                    "aria-label": y,
                    ...ee ? { "aria-describedby": `spc-tooltip-${P}` } : {}
                  },
                  P
                );
              }),
              x && b && k?.focused && (() => {
                const A = k.focused, P = typeof A.index == "number" ? A.index : -1;
                if (P < 0 || !E[P]) return null;
                const re = F(
                  E[P].x instanceof Date ? E[P].x : new Date(E[P].x)
                ), se = S(E[P].y), Q = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ r.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: re,
                      cy: se,
                      r: 7,
                      fill: "none",
                      stroke: Q,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: re,
                      cy: se,
                      r: 5,
                      fill: "#000",
                      stroke: Q,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: re,
                      cy: se,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              D && /* @__PURE__ */ r.jsx(
                og,
                {
                  width: F.range()[1],
                  height: S.range()[0]
                }
              ),
              !b && /* @__PURE__ */ r.jsx(
                Gl,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: le,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (A) => ue(A),
                  enableNeutralNoJudgement: g,
                  showTrendGatingExplanation: L
                }
              )
            ] })
          }
        ),
        b && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          tg,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: h || c?.measureUnit,
            onSignalFocus: j
          }
        ) }),
        n && /* @__PURE__ */ r.jsx(
          xm,
          {
            format: (A) => ce({ ...A, x: A.x instanceof Date ? A.x : new Date(A.x) })
          }
        )
      ]
    }
  ) });
}, og = ({
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
function ig(e) {
  const { rows: t } = Sa(e), n = Xs(e);
  return { rows: t, visuals: n.visuals };
}
function lg(e, t, n) {
  const a = W.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const i = Math.min(e[0], e[1]), l = Math.max(e[0], e[1]);
    return !(0 >= i && 0 <= l);
  }, [e]), { slotPx: s, totalReservedPx: o } = W.useMemo(() => {
    if (!a) return { slotPx: 0, totalReservedPx: 0 };
    const l = (t ?? 260) - 60, c = yr, u = c + Ih, f = n?.maxFraction, h = Math.max(
      vr,
      Math.floor(l * f)
    ), p = Math.min(u, h);
    return { slotPx: Math.min(c, p), totalReservedPx: p };
  }, [a, t, n?.maxFraction]);
  return { show: a, slotPx: s, totalReservedPx: o };
}
function cg(e, t, n, a) {
  if (n.percentScale) {
    const c = e.map((f) => f.y), d = Math.max(100, ...c), u = Math.min(0, ...c);
    return [u < 0 ? u : 0, d > 100 ? d : 100];
  }
  const s = e.map((c) => c.y), o = (c) => {
    c != null && s.push(c);
  };
  if (o(t.mean), o(t.ucl), o(t.lcl), o(t.onePos), o(t.oneNeg), o(t.twoPos), o(t.twoNeg), a && a.length)
    for (const c of a)
      typeof c == "number" && !isNaN(c) && s.push(c);
  if (!s.length) return;
  let i = Math.min(...s), l = Math.max(...s);
  return n.alwaysShowZeroY && (i = Math.min(0, i)), n.alwaysShowHundredY && (l = Math.max(100, l)), [i, l];
}
function ds(e, t) {
  if (!e?.length || t.chartType !== mt.XmR) return null;
  const n = Math.max(2, Math.floor(t.shiftLength ?? 6)), a = [];
  for (let p = 0; p < e.length; p++) {
    const y = e[p], m = y.value;
    y?.ghost || typeof m == "number" && Number.isFinite(m) && a.push({ idx: p, value: m });
  }
  if (a.length < n * 2) return null;
  let s = 0, o = 0;
  for (let p = 1; p < a.length; p++)
    s += Math.abs(a[p].value - a[p - 1].value), o++;
  if (o === 0) return null;
  const l = s / o * (2.66 / 3);
  if (!Number.isFinite(l) || l <= 0) return null;
  const c = Math.max(0, t.deltaSigma ?? 0.5), d = t.metricImprovement === Le.Up, u = t.metricImprovement === Le.Down, f = (() => {
    for (let p = e.length - 1; p >= 0; p--) if (e[p]?.baseline) return p;
    return -1;
  })();
  function h(p, y) {
    let m = 0, g = 0;
    for (let L = p; L < y; L++)
      m += a[L].value, g++;
    return g ? m / g : NaN;
  }
  for (let p = n; p <= a.length - n; p++) {
    const y = h(p - n, p), m = h(p, p + n);
    if (!Number.isFinite(y) || !Number.isFinite(m)) continue;
    const g = m - y, L = g / l;
    let N = !1, C = !1;
    if (d ? (N = L >= c, C = !0) : u ? (N = -L >= c, C = !1) : (N = Math.abs(L) >= c, C = g > 0), !N) continue;
    const v = (M) => C ? M > y : M < y;
    let b = !0;
    for (let M = p; M < p + n; M++)
      if (!v(a[M].value)) {
        b = !1;
        break;
      }
    if (!b) continue;
    const j = a[p].idx;
    if (!(t.minGap && f >= 0 && j - f < t.minGap))
      return j;
  }
  return null;
}
function dg(e, t) {
  const n = ds(e, t);
  return n == null ? e.slice() : e.map((a, s) => s === n ? { ...a, baseline: !0 } : a);
}
function ug(e, t) {
  const n = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (n <= 1) return dg(e, t);
  let a = e.slice(), s = 0;
  const o = Math.max(1, t.minGap ?? 0);
  for (; s < n; ) {
    const i = ds(a, { ...t, minGap: o });
    if (i == null) break;
    if (a[i]?.baseline) {
      const l = ds(a, { ...t, minGap: o + 1 });
      if (l == null || l === i) break;
      a = a.map((c, d) => d === l ? { ...c, baseline: !0 } : c), s++;
      continue;
    }
    a = a.map((l, c) => c === i ? { ...l, baseline: !0 } : l), s++;
  }
  return a;
}
const fg = (e) => {
  const t = W.useCallback(
    (Ie) => String(Ie).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Qe) => Qe.length ? Qe[0].toUpperCase() + Qe.slice(1) : Qe).join(" "),
    []
  ), n = W.useCallback(
    (Ie) => String(Ie).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map(($e) => $e.length ? $e[0].toUpperCase() + $e.slice(1) : $e).join(" "),
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
    effMetricImprovementCore: c,
    effEngineSettings: d,
    effAlwaysShowZeroY: u,
    effAlwaysShowHundredY: f,
    effPercentScale: h,
    effGradientSequences: p,
    effSequenceTransition: y,
    effProcessLineWidth: m,
    effTrendVisualMode: g,
    effShowTrendGatingExplanation: L,
    effEnableNeutralNoJudgement: N,
    effEnableRules: C,
    effShowPartitionMarkers: v,
    effShowTrendStartMarkers: b,
    effShowFirstFavourableCrossMarkers: j,
    effShowTrendBridgeOverlay: M,
    effShowSignalsInspector: w,
    effOnSignalFocus: x,
    effShowWarningsPanel: I,
    effWarningsFilter: _,
    effShowEmbeddedIcon: D,
    effEmbeddedIconVariant: F,
    effEmbeddedIconRunLength: S,
    effShowFocusIndicator: $,
    effHeight: k,
    effClassName: E,
    effAriaLabel: ie,
    effUnit: J,
    effNarrationContext: z,
    effShowZones: X,
    effShowPoints: O,
    effHighlightOutOfControl: ae,
    effVisualsScenario: Y,
    effVisualsEngineSettings: V,
    effSource: fe,
    effEngineAutoRecalc: pe
  } = rg(e), de = ie ?? e.ariaLabel, K = k ?? e.height ?? 260, te = E ?? e.className, ue = J ?? e.unit, G = z ?? e.narrationContext, ce = X ?? e.showZones, le = O ?? e.showPoints, he = ae ?? e.highlightOutOfControl, A = Y ?? e.visualsScenario ?? Bl.None, P = V ?? e.visualsEngineSettings, re = fe ?? e.source, se = e.a11y?.announceFocus ?? e.announceFocus ?? !1, Q = W.useMemo(() => a.map((Ie, $e) => ({
    x: Ie.x,
    value: Ie.y,
    target: s?.[$e] ?? void 0,
    baseline: o?.[$e] ?? void 0,
    ghost: i?.[$e] ?? void 0
  })), [a, s, o, i]), R = W.useMemo(() => {
    try {
      const Ie = pe;
      return Ie?.enabled ? ug(Q, {
        chartType: l,
        metricImprovement: c,
        shiftLength: Ie.shiftLength,
        deltaSigma: Ie.deltaSigma,
        minGap: Ie.minGap,
        maxInsertions: Ie.maxInsertions
      }) : Q;
    } catch {
      return Q;
    }
  }, [Q, pe, l, c]), H = W.useMemo(() => {
    try {
      const Ie = d?.minimumPoints, $e = {};
      typeof Ie == "number" && !isNaN(Ie) && ($e.minimumPoints = Ie, R.filter(
        (Ae) => !Ae.ghost && typeof Ae.value == "number"
      ).length >= Ie && ($e.chartLevelEligibility = !0)), d?.enableFourOfFiveRule != null && ($e.enableFourOfFiveRule = !!d.enableFourOfFiveRule), P && Object.assign($e, P);
      const Qe = (tt) => {
        switch (tt) {
          case sn.XmR:
            return mt.XmR;
          case sn.T:
            return mt.T;
          case sn.G:
            return mt.G;
          default:
            return mt.XmR;
        }
      }, bt = (tt) => {
        switch (tt) {
          case Nt.Up:
            return Le.Up;
          case Nt.Down:
            return Le.Down;
          default:
            return Le.Neither;
        }
      }, ht = {
        chartType: Qe(l),
        metricImprovement: bt(c),
        data: R,
        settings: Object.keys($e).length ? $e : void 0
      }, { visuals: _t } = Rm(ht, A, {
        trendVisualMode: g === Yl.Ungated ? Bn.Ungated : Bn.Gated,
        enableNeutralNoJudgement: N
      });
      return _t || [];
    } catch {
      return [];
    }
  }, [
    R,
    l,
    c,
    g,
    N,
    d,
    A,
    P
  ]), B = W.useMemo(() => {
    try {
      const Ie = d?.minimumPoints, $e = {};
      typeof Ie == "number" && !isNaN(Ie) && ($e.minimumPoints = Ie, R.filter(
        (It) => !It.ghost && typeof It.value == "number"
      ).length >= Ie && ($e.chartLevelEligibility = !0)), d?.enableFourOfFiveRule != null && ($e.enableFourOfFiveRule = !!d.enableFourOfFiveRule), P && Object.assign($e, P);
      const Qe = (Ae) => {
        switch (Ae) {
          case sn.XmR:
            return mt.XmR;
          case sn.T:
            return mt.T;
          case sn.G:
            return mt.G;
          default:
            return mt.XmR;
        }
      }, bt = (Ae) => {
        switch (Ae) {
          case Nt.Up:
            return Le.Up;
          case Nt.Down:
            return Le.Down;
          default:
            return Le.Neither;
        }
      }, ht = {
        chartType: Qe(l),
        metricImprovement: bt(c),
        data: R,
        settings: Object.keys($e).length ? $e : void 0
      }, { rows: _t } = ig(ht), tt = (Ae) => {
        switch (Ae) {
          case Ce.ImprovementHigh:
          case Ce.ImprovementLow:
            return Ue.Improvement;
          case Ce.ConcernHigh:
          case Ce.ConcernLow:
            return Ue.Concern;
          case Ce.NeitherHigh:
          case Ce.NeitherLow:
            return Ue.Neither;
          case Ce.CommonCause:
          default:
            return Ue.Neither;
        }
      };
      return _t.map(
        (Ae, It) => ({
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
            neutralSpecialCauseValue: Ae.variationIcon === Ce.NeitherHigh || Ae.variationIcon === Ce.NeitherLow ? Ae.specialCauseImprovementValue ?? Ae.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: R[It]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [R, l, c, d, P]) || null, T = (B || []).slice().reverse().find((Ie) => Ie.limits.mean != null), U = T?.limits.mean ?? null, ee = W.useMemo(() => {
    const Ie = [];
    try {
      const $e = B, Qe = d?.minimumPoints ?? 13, bt = d?.minimumPoints ?? 12;
      if ($e && $e.length) {
        const ht = $e.filter(
          (tt) => !tt.data.ghost && tt.data.value != null
        ).length;
        ht < Qe && Ie.push({
          code: Hr.InsufficientPointsGlobal,
          severity: $t.Warning,
          category: Br.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: ht, minimumPoints: Qe }
        });
        const _t = /* @__PURE__ */ new Map();
        for (const tt of $e) {
          const Ae = tt.partition.id ?? 0, It = _t.get(Ae) || { size: 0, nonGhost: 0 };
          It.size += 1, !tt.data.ghost && tt.data.value != null && (It.nonGhost += 1), _t.set(Ae, It);
        }
        for (const [tt, Ae] of _t)
          Ae.nonGhost > 0 && Ae.nonGhost < bt && Ie.push({
            code: Hr.InsufficientPointsPartition,
            severity: $t.Warning,
            category: Br.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: tt,
              nonGhostCount: Ae.nonGhost,
              minimumPointsPartition: bt
            }
          });
      }
    } catch {
    }
    return Ie;
  }, [B, d?.minimumPoints]), ne = W.useMemo(() => ee.length ? _ ? ee.filter((Ie) => !(_.severities && Ie.severity && !_.severities.includes(Ie.severity) || _.categories && Ie.category && !_.categories.includes(Ie.category) || _.codes && !_.codes.includes(Ie.code))) : ee : [], [ee, _]), q = T?.limits.ucl ?? null, oe = T?.limits.lcl ?? null, ve = T?.limits.oneSigma.upper ?? null, Se = T?.limits.oneSigma.lower ?? null, we = T?.limits.twoSigma.upper ?? null, Ne = T?.limits.twoSigma.lower ?? null, ge = U != null && ve != null ? Math.abs(ve - U) : 0, De = W.useMemo(
    () => [{ id: "process", data: a, color: "#A6A6A6" }],
    [a]
  ), Re = W.useMemo(
    () => cg(
      a,
      { mean: U, ucl: q, lcl: oe, onePos: ve, oneNeg: Se, twoPos: we, twoNeg: Ne },
      {
        alwaysShowZeroY: !!u,
        alwaysShowHundredY: !!f,
        percentScale: !!h
      },
      s ?? null
    ),
    [
      a,
      U,
      q,
      oe,
      ve,
      Se,
      we,
      Ne,
      s,
      u,
      f,
      h
    ]
  ), Ze = W.useMemo(() => {
    const Ie = ($e) => {
      const Qe = $e.filter(
        (ht) => typeof ht == "number" && !isNaN(ht)
      );
      if (!Qe.length) return null;
      const bt = Qe[0];
      return Qe.every((ht) => ht === bt) ? bt : null;
    };
    if (B && B.length) {
      const $e = Ie(B.map((Qe) => Qe.target));
      if ($e != null) return $e;
    }
    return s && s.length ? Ie(s) : null;
  }, [B, s]), { show: ze, slotPx: at, totalReservedPx: kt } = lg(
    Re,
    K,
    { maxFraction: 0.35 }
  ), St = ze ? kt : 0, xt = W.useMemo(() => {
    const Ie = a.map(($e) => $e.x);
    return Wl({
      values: a.map(($e) => $e.y),
      dates: Ie,
      providedUnit: ue || G?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [a, ue, G?.measureUnit]), Ge = ue ?? G?.measureUnit ?? xt.unit, Ke = W.useMemo(() => Ge ? { ...G || {}, measureUnit: Ge } : G, [G, Ge]), Pt = W.useMemo(() => {
    if (!B) return [];
    const Ie = [];
    for (let $e = 1; $e < B.length; $e++)
      B[$e].partition.id !== B[$e - 1].partition.id && Ie.push($e);
    return Ie;
  }, [B]), dr = W.useMemo(
    () => eg({
      show: !!D,
      rowsForUi: B,
      minPoints: d?.minimumPoints ?? 13,
      metricImprovement: c,
      variant: F,
      runLength: S
    }),
    [
      D,
      B,
      d?.minimumPoints,
      c,
      F,
      S
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: te ? `fdp-spc-chart-wrapper ${te}` : "fdp-spc-chart-wrapper",
      children: [
        /* @__PURE__ */ r.jsx(
          Qm,
          {
            show: !!D,
            variationNode: dr,
            assuranceNode: null
          }
        ),
        /* @__PURE__ */ r.jsx(
          jh,
          {
            height: K,
            ariaLabel: de,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ r.jsx(Mh, { series: De, yDomain: Re, yBottomGapPx: St, children: (() => {
              const Ie = {
                series: De,
                showPoints: le,
                announceFocus: se,
                limits: { mean: U, ucl: q, lcl: oe, sigma: ge, onePos: ve, oneNeg: Se, twoPos: we, twoNeg: Ne },
                showZones: ce,
                highlightOutOfControl: he,
                engineRows: B,
                uniformTarget: Ze,
                visualCategories: H,
                enableRules: C,
                narrationContext: Ke,
                gradientSequences: p,
                sequenceTransition: y,
                processLineWidth: m,
                zeroBreakSlotGapPx: at,
                effectiveUnit: Ge,
                partitionMarkers: v ? Pt : [],
                ariaLabel: de,
                enableNeutralNoJudgement: N,
                showTrendGatingExplanation: L,
                metricImprovement: c,
                showTrendStartMarkers: b,
                showFirstFavourableCrossMarkers: j,
                showTrendBridgeOverlay: M,
                showSignalsInspector: w,
                onSignalFocus: x,
                showFocusIndicator: $
              };
              return /* @__PURE__ */ r.jsx(sg, { ...Ie });
            })() })
          }
        ),
        re && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof re == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          re
        ] }) : re }),
        /* @__PURE__ */ r.jsx(
          Xm,
          {
            show: !!I,
            warnings: ne,
            formatWarningCategory: n,
            formatWarningCode: t
          }
        )
      ]
    }
  );
}, Uy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: ln,
  BaselineSuggestionReason: $l,
  ChartType: mt,
  Icons: Km,
  ImprovementDirection: Le,
  PARITY_V26: Hl,
  RULE_METADATA: Ll,
  SPCChart: fg,
  SPCTooltipOverlay: Gl,
  SpcEmbeddedIconVariant: gn,
  SpcVisualCategory: lt,
  SpcWarningCategory: Br,
  SpcWarningCode: Hr,
  SpcWarningSeverity: $t,
  VARIATION_COLOR_TOKENS: Mt,
  VariationIcon: Ce,
  buildSpcV26a: Sa,
  buildSpcV26aWithVisuals: Xs,
  computeSpcVisualCategories: qs,
  extractRuleIds: ya,
  getVariationColorHex: _m,
  getVariationColorToken: El,
  normaliseSpcSettingsV2: Rl,
  ruleGlossary: An,
  variationLabel: va,
  withParityV26: Bm
}, Symbol.toStringTag, { value: "Module" })), pg = "150ms", hg = "300ms", mg = "500ms", gg = "cubic-bezier(0.4, 0, 1, 1)", xg = "cubic-bezier(0, 0, 0.2, 1)", bg = "cubic-bezier(0.4, 0, 0.2, 1)", yg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", vg = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", wg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Sg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", _g = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", kg = "1px", Cg = "2px", Ng = "4px", jg = "4px", Mg = "4px", Ig = "2px", Dg = "1px", Tg = "0px", Lg = "4px", $g = "8px", Ag = "12px", Vl = "#d8dde0", Zl = "#4c6272", Jl = "#d8dde0", ql = "#aeb7bd", Xl = "#d5281b", Ql = "#005eb8", Kl = "#ffffff", ec = "#212b32", tc = "#007f3b", nc = "#330072", rc = "#7c2855", ac = "#d5281b", sc = "#ffeb3b", oc = "#fff9c4", ic = "#ffb81c", lc = "#ed8b00", cc = "#00a499", dc = "#ae2573", uc = "#4c6272", fc = "#768692", pc = "#aeb7bd", hc = "#d8dde0", mc = "#f0f4f5", Eg = "#212b32", Pg = "#4c6272", Fg = "#ffffff", Rg = "#212b32", Bg = "#005eb8", Hg = "#7c2855", zg = "#003087", Og = "#330072", Ug = "#ffeb3b", Wg = "#212b32", Gg = "#d8dde0", Yg = "#ffffff33", Vg = "#d5281b", Zg = "#4c6272", Jg = "#ffffff", qg = "#007f3b", Xg = "#ffffff", Qg = "#006530", Kg = "#004021", e0 = "#004021", t0 = "#00000000", n0 = "#ffffff", r0 = "#005eb8", a0 = "#005eb8", s0 = "#d9e5f2", o0 = "#c7daf0", i0 = "#005eb8", l0 = "#ffffff", c0 = "#212b32", d0 = "#d9dde0", u0 = "#b3bcc2", f0 = "#b3bcc2", p0 = "#d5281b", h0 = "#aa2016", m0 = "#6a140e", g0 = "#6a140e", x0 = "#005eb8", b0 = "#004b93", y0 = "#002f5c", v0 = "#002f5c", w0 = "8px", S0 = "16px", _0 = "12px", k0 = "16px", C0 = "4px", N0 = "40px", j0 = "4px", M0 = "40px", I0 = "12px", D0 = "16px", T0 = "32px", L0 = "16px", $0 = "20px", A0 = "28px", E0 = "9px", P0 = "2px", F0 = "16px", R0 = "24px", B0 = "8px", H0 = "24px", z0 = "16px", O0 = "4px", U0 = "4px", W0 = "4px", G0 = "8px", Y0 = "4px", V0 = "16px", Z0 = "#007f3b", J0 = "#006530", q0 = "#004021", X0 = "#d8dde0", Q0 = "#ffffff", K0 = "#768692", ex = "#00000000", tx = "#ffeb3b", nx = "#00000000", rx = "#ffffff", ax = "#d9e5f2", sx = "#c7daf0", ox = "#005eb8", ix = "#005eb8", gc = "8px", xc = "16px", bc = "12px", yc = "16px", lx = "2px", cx = "4px", dx = "4px", ux = "600", fx = "#ffffff", px = "#d8dde0", hx = "#aeb7bd", mx = "#f0f4f5", gx = "#212b32", xx = "#212b32", bx = "#005eb8", vc = "16px", wc = "32px", Sc = "16px", yx = "1px", vx = "4px", wx = "none", Sx = "0 2px 4px rgba(0, 0, 0, 0.1)", _x = "#ffffff", kx = "#ffffff", Cx = "#d8dde0", Nx = "#ffffff", jx = "#4c6272", Mx = "#ffeb3b", Ix = "#d5281b", Dx = "#aeb7bd", Tx = "#212b32", Lx = "#4c6272", $x = "#768692", Ax = "#212b32", Ex = "#ffffff", Px = "600", Fx = "#d5281b", Rx = "600", Bx = "#4c6272", _c = "4px", kc = "40px", Cc = "40px", Nc = "12px", Hx = "2px", zx = "4px", Ox = "0px", Ux = "16px", Wx = "18px", Gx = "24px", Yx = "32px", Vx = "34px", Zx = "32px", Jx = "40px", qx = "48px", Xx = "5.4ex", Qx = "7.2ex", Kx = "9ex", eb = "10.8ex", tb = "20ex", nb = "38ex", rb = "56ex", ab = "44px", sb = "40px", ob = "1020px", ib = "100%", lb = "50%", cb = "33.333%", db = "25%", ub = "20%", fb = "320px", pb = "641px", hb = "1025px", mb = "1280px", gb = "960px", xb = "32px", bb = "16px", yb = "#d5281b", vb = "#d5281b", wb = "#ffffff", Sb = "#007f3b", _b = "#007f3b", kb = "#ffffff", Cb = "#ffeb3b", Nb = "#ffeb3b", jb = "#212b32", Mb = "#005eb8", Ib = "#005eb8", Db = "#ffffff", Tb = "#d8dde0", Lb = "#aeb7bd", $b = "#768692", Ab = "0 4px 0 #004021", Eb = "0 4px 0 #005eb8", Pb = "0 4px 0 #6a140e", Fb = "0 4px 0 #ffeb3b", Rb = "none", Bb = "0 2px 4px rgba(0, 0, 0, 0.1)", Hb = "4px", zb = "0px", Ob = "solid", Ub = "0 0 0 3px #ffeb3b", Wb = "0 0 0 3px #ffeb3b", Gb = "none", Yb = "0 1px 3px rgba(0, 0, 0, 0.12)", Vb = "0 2px 6px rgba(0, 0, 0, 0.16)", Zb = "0 4px 12px rgba(0, 0, 0, 0.20)", jc = "0", Mc = "4px", Ic = "8px", Dc = "16px", Tc = "24px", Lc = "32px", $c = "40px", Ac = "48px", Ec = "56px", Pc = "64px", us = "0", fs = "0", ps = "4px", hs = "4px", ms = "8px", gs = "8px", xs = "8px", bs = "16px", ys = "16px", vs = "24px", ws = "24px", Ss = "32px", _s = "32px", ks = "40px", Cs = "40px", Ns = "48px", js = "48px", Ms = "56px", Is = "56px", Ds = "64px", zr = "Frutiger W01", Or = "Arial, Helvetica, sans-serif", Ur = "sans-serif", Wr = "400", Gr = "600", Yr = "400", Vr = "12px", Zr = "14px", Jr = "12pt", qr = "14px", Xr = "16px", Qr = "12pt", Kr = "16px", ea = "19px", ta = "13pt", na = "19px", ra = "22px", aa = "15pt", sa = "22px", oa = "26px", ia = "17pt", la = "27px", ca = "36px", da = "20pt", ua = "33px", fa = "48px", pa = "24pt", Ts = "16px", Ls = "24px", Bt = {
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
}, Jb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: pg,
  AnimationDurationNormal: hg,
  AnimationDurationSlow: mg,
  AnimationEasingBounce: yg,
  AnimationEasingEaseIn: gg,
  AnimationEasingEaseInOut: bg,
  AnimationEasingEaseOut: xg,
  BorderColorCard: Jl,
  BorderColorCardHover: ql,
  BorderColorDefault: Vl,
  BorderColorError: Xl,
  BorderColorForm: Zl,
  BorderRadiusLarge: Ag,
  BorderRadiusMedium: $g,
  BorderRadiusNone: Tg,
  BorderRadiusSmall: Lg,
  BorderWidthCardBottom: jg,
  BorderWidthDefault: kg,
  BorderWidthFormElement: Cg,
  BorderWidthFormElementError: Ng,
  BorderWidthPanel: Mg,
  BorderWidthTableCell: Dg,
  BorderWidthTableHeader: Ig,
  BreakpointDesktop: hb,
  BreakpointLargeDesktop: mb,
  BreakpointMobile: fb,
  BreakpointTablet: pb,
  ButtonBorderRadius: cx,
  ButtonBorderWidth: lx,
  ButtonPrimaryBackgroundActive: q0,
  ButtonPrimaryBackgroundDefault: Z0,
  ButtonPrimaryBackgroundDisabled: X0,
  ButtonPrimaryBackgroundHover: J0,
  ButtonPrimaryBorderDefault: ex,
  ButtonPrimaryBorderFocus: tx,
  ButtonPrimaryTextDefault: Q0,
  ButtonPrimaryTextDisabled: K0,
  ButtonSecondaryBackgroundActive: sx,
  ButtonSecondaryBackgroundDefault: nx,
  ButtonSecondaryBackgroundHover: ax,
  ButtonSecondaryBackgroundSolid: rx,
  ButtonSecondaryBorderDefault: ix,
  ButtonSecondaryTextDefault: ox,
  ButtonShadowSize: dx,
  ButtonSpacingPaddingHorizontalDesktop: yc,
  ButtonSpacingPaddingHorizontalMobile: xc,
  ButtonSpacingPaddingVerticalDesktop: bc,
  ButtonSpacingPaddingVerticalMobile: gc,
  ButtonTypographyWeight: ux,
  CardBackgroundDefault: fx,
  CardBorderBottom: mx,
  CardBorderDefault: px,
  CardBorderHover: hx,
  CardBorderWidthBottom: vx,
  CardBorderWidthDefault: yx,
  CardShadowDefault: wx,
  CardShadowHover: Sx,
  CardSpacingHeadingMargin: Sc,
  CardSpacingPaddingDesktop: wc,
  CardSpacingPaddingMobile: vc,
  CardTextDescription: xx,
  CardTextHeading: gx,
  CardTextLink: bx,
  ColorBorderDefault: Gg,
  ColorBorderSecondary: Yg,
  ColorButtonLoginActive: y0,
  ColorButtonLoginBackground: x0,
  ColorButtonLoginHover: b0,
  ColorButtonLoginShadow: v0,
  ColorButtonPrimaryActive: Kg,
  ColorButtonPrimaryBackground: qg,
  ColorButtonPrimaryHover: Qg,
  ColorButtonPrimaryShadow: e0,
  ColorButtonPrimaryText: Xg,
  ColorButtonReverseActive: u0,
  ColorButtonReverseBackground: l0,
  ColorButtonReverseHover: d0,
  ColorButtonReverseShadow: f0,
  ColorButtonReverseText: c0,
  ColorButtonSecondaryActive: o0,
  ColorButtonSecondaryBackground: t0,
  ColorButtonSecondaryBackgroundSolid: n0,
  ColorButtonSecondaryBorder: r0,
  ColorButtonSecondaryHover: s0,
  ColorButtonSecondaryShadow: i0,
  ColorButtonSecondaryText: a0,
  ColorButtonWarningActive: m0,
  ColorButtonWarningBackground: p0,
  ColorButtonWarningHover: h0,
  ColorButtonWarningShadow: g0,
  ColorError: Vg,
  ColorFocusBackground: Ug,
  ColorFocusText: Wg,
  ColorFormBackground: Jg,
  ColorFormBorder: Zg,
  ColorGrey1: uc,
  ColorGrey2: fc,
  ColorGrey3: pc,
  ColorGrey4: hc,
  ColorGrey5: mc,
  ColorLinkActive: zg,
  ColorLinkDefault: Bg,
  ColorLinkHover: Hg,
  ColorLinkVisited: Og,
  ColorPrimaryBlack: ec,
  ColorPrimaryBlue: Ql,
  ColorPrimaryDarkPink: rc,
  ColorPrimaryGreen: tc,
  ColorPrimaryPurple: nc,
  ColorPrimaryRed: ac,
  ColorPrimaryWhite: Kl,
  ColorPrimaryYellow: sc,
  ColorSecondaryAquaGreen: cc,
  ColorSecondaryOrange: lc,
  ColorSecondaryPaleYellow: oc,
  ColorSecondaryPink: dc,
  ColorSecondaryWarmYellow: ic,
  ColorTextPrimary: Eg,
  ColorTextPrint: Rg,
  ColorTextReverse: Fg,
  ColorTextSecondary: Pg,
  ComponentBlur: U0,
  ComponentBreadcrumbChevronMarginLeft: E0,
  ComponentBreadcrumbChevronMarginRight: P0,
  ComponentBreadcrumbPaddingTopDesktop: R0,
  ComponentBreadcrumbPaddingTopMobile: F0,
  ComponentButtonPaddingDesktopHorizontal: k0,
  ComponentButtonPaddingDesktopVertical: _0,
  ComponentButtonPaddingMobileHorizontal: S0,
  ComponentButtonPaddingMobileVertical: w0,
  ComponentButtonShadowSize: C0,
  ComponentCardHeadingMargin: L0,
  ComponentCardPaddingDesktop: T0,
  ComponentCardPaddingMobile: D0,
  ComponentDetails: G0,
  ComponentExpander: Y0,
  ComponentFormCheckboxLabelPadding: I0,
  ComponentFormCheckboxSize: M0,
  ComponentFormInputMinHeight: N0,
  ComponentFormInputPadding: j0,
  ComponentLink: W0,
  ComponentPagination: V0,
  ComponentPanelPaddingDesktop: A0,
  ComponentPanelPaddingMobile: $0,
  ComponentSpread: O0,
  ComponentSummaryListCellPaddingHorizontal: H0,
  ComponentSummaryListCellPaddingVertical: B0,
  ComponentSummaryListRowMargin: z0,
  ElevationHigh: Zb,
  ElevationLow: Yb,
  ElevationMedium: Vb,
  ElevationNone: Gb,
  FocusOutlineOffset: zb,
  FocusOutlineStyle: Ob,
  FocusOutlineWidth: Hb,
  FocusShadowButton: Wb,
  FocusShadowInput: Ub,
  FontFamilyBase: zr,
  FontFamilyFallback: Or,
  FontFamilyPrint: Ur,
  FontLineHeightBase: Ls,
  FontSize14Mobile: Vr,
  FontSize14Print: Jr,
  FontSize14Tablet: Zr,
  FontSize16Mobile: qr,
  FontSize16Print: Qr,
  FontSize16Tablet: Xr,
  FontSize19Mobile: Kr,
  FontSize19Print: ta,
  FontSize19Tablet: ea,
  FontSize22Mobile: na,
  FontSize22Print: aa,
  FontSize22Tablet: ra,
  FontSize26Mobile: sa,
  FontSize26Print: ia,
  FontSize26Tablet: oa,
  FontSize36Mobile: la,
  FontSize36Print: da,
  FontSize36Tablet: ca,
  FontSize48Mobile: ua,
  FontSize48Print: pa,
  FontSize48Tablet: fa,
  FontSizeBase: Ts,
  FontWeightBold: Gr,
  FontWeightLight: Yr,
  FontWeightNormal: Wr,
  FormBorderRadius: Ox,
  FormBorderWidthDefault: Hx,
  FormBorderWidthError: zx,
  FormErrorTextDefault: Fx,
  FormErrorTypographyWeight: Rx,
  FormHintTextDefault: Bx,
  FormInputBackgroundDefault: _x,
  FormInputBackgroundDisabled: Cx,
  FormInputBackgroundError: Nx,
  FormInputBackgroundFocus: kx,
  FormInputBorderDefault: jx,
  FormInputBorderDisabled: Dx,
  FormInputBorderError: Ix,
  FormInputBorderFocus: Mx,
  FormInputTextDefault: Tx,
  FormInputTextDisabled: $x,
  FormInputTextPlaceholder: Lx,
  FormLabelTextDefault: Ax,
  FormLabelTextRequired: Ex,
  FormLabelTypographyWeight: Px,
  FormSpacingCheckboxLabelPadding: Nc,
  FormSpacingCheckboxSize: Cc,
  FormSpacingInputMinHeight: kc,
  FormSpacingInputPadding: _c,
  GridGutter: xb,
  GridGutterHalf: bb,
  GridPageWidth: gb,
  HeadingsNhsukHeadingL: Ht,
  HeadingsNhsukHeadingM: zt,
  HeadingsNhsukHeadingS: Ot,
  HeadingsNhsukHeadingXl: Bt,
  HeadingsNhsukHeadingXs: Ut,
  LayoutColumnActions: ub,
  LayoutColumnFull: ib,
  LayoutColumnHalf: lb,
  LayoutColumnQuarter: db,
  LayoutColumnThird: cb,
  LayoutContainerMaxWidth: ob,
  ParagraphsBody: Wt,
  ParagraphsBodyLarge: Gt,
  ParagraphsBodySmall: Yt,
  ParagraphsLedeText: Vt,
  ParagraphsLedeTextSmall: Zt,
  ShadowButtonDefault: Ab,
  ShadowButtonFocus: Fb,
  ShadowButtonSecondary: Eb,
  ShadowButtonWarning: Pb,
  ShadowCardDefault: Rb,
  ShadowCardHover: Bb,
  SizeButtonMinHeightDesktop: sb,
  SizeButtonMinHeightMobile: ab,
  SizeFormControlLarge: qx,
  SizeFormControlMedium: Jx,
  SizeFormControlSmall: Zx,
  SizeFormInputWidth2xl: nb,
  SizeFormInputWidth3xl: rb,
  SizeFormInputWidthLg: eb,
  SizeFormInputWidthMd: Kx,
  SizeFormInputWidthSm: Qx,
  SizeFormInputWidthXl: tb,
  SizeFormInputWidthXs: Xx,
  SizeIconExtraLarge: Yx,
  SizeIconLarge: Gx,
  SizeIconMedium: Wx,
  SizeIconNhsDefault: Vx,
  SizeIconSmall: Ux,
  Spacing0: jc,
  Spacing1: Mc,
  Spacing2: Ic,
  Spacing3: Dc,
  Spacing4: Tc,
  Spacing5: Lc,
  Spacing6: $c,
  Spacing7: Ac,
  Spacing8: Ec,
  Spacing9: Pc,
  SpacingResponsive0Mobile: us,
  SpacingResponsive0Tablet: fs,
  SpacingResponsive1Mobile: ps,
  SpacingResponsive1Tablet: hs,
  SpacingResponsive2Mobile: ms,
  SpacingResponsive2Tablet: gs,
  SpacingResponsive3Mobile: xs,
  SpacingResponsive3Tablet: bs,
  SpacingResponsive4Mobile: ys,
  SpacingResponsive4Tablet: vs,
  SpacingResponsive5Mobile: ws,
  SpacingResponsive5Tablet: Ss,
  SpacingResponsive6Mobile: _s,
  SpacingResponsive6Tablet: ks,
  SpacingResponsive7Mobile: Cs,
  SpacingResponsive7Tablet: Ns,
  SpacingResponsive8Mobile: js,
  SpacingResponsive8Tablet: Ms,
  SpacingResponsive9Mobile: Is,
  SpacingResponsive9Tablet: Ds,
  StateDisabledBackground: Tb,
  StateDisabledBorder: Lb,
  StateDisabledText: $b,
  StateErrorBackground: yb,
  StateErrorBorder: vb,
  StateErrorText: wb,
  StateInfoBackground: Mb,
  StateInfoBorder: Ib,
  StateInfoText: Db,
  StateSuccessBackground: Sb,
  StateSuccessBorder: _b,
  StateSuccessText: kb,
  StateWarningBackground: Cb,
  StateWarningBorder: Nb,
  StateWarningText: jb,
  TransitionButtonDefault: vg,
  TransitionButtonShadow: wg,
  TransitionCardHover: _g,
  TransitionInputFocus: Sg
}, Symbol.toStringTag, { value: "Module" })), Wy = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Gy = ({
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
), Yy = ({
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
), Vy = ({
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
), Zy = ({
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
), Jy = ({
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
), qy = ({
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
), Xy = ({
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
), Qy = ({
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
), Ky = ({
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
), e1 = ({
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
), t1 = () => Te(() => Jb, []), n1 = () => Te(() => ({
  // Border colors
  BorderColorDefault: Vl,
  BorderColorForm: Zl,
  BorderColorCard: Jl,
  BorderColorCardHover: ql,
  BorderColorError: Xl,
  // Primary colors
  ColorPrimaryBlue: Ql,
  ColorPrimaryWhite: Kl,
  ColorPrimaryBlack: ec,
  ColorPrimaryGreen: tc,
  ColorPrimaryPurple: nc,
  ColorPrimaryDarkPink: rc,
  ColorPrimaryRed: ac,
  ColorPrimaryYellow: sc,
  // Secondary colors
  ColorSecondaryPaleYellow: oc,
  ColorSecondaryWarmYellow: ic,
  ColorSecondaryOrange: lc,
  ColorSecondaryAquaGreen: cc,
  ColorSecondaryPink: dc,
  // Grey scale
  ColorGrey1: uc,
  ColorGrey2: fc,
  ColorGrey3: pc,
  ColorGrey4: hc,
  ColorGrey5: mc
}), []), r1 = () => Te(() => ({
  Spacing0: jc,
  Spacing1: Mc,
  Spacing2: Ic,
  Spacing3: Dc,
  Spacing4: Tc,
  Spacing5: Lc,
  Spacing6: $c,
  Spacing7: Ac,
  Spacing8: Ec,
  Spacing9: Pc
}), []), a1 = () => Te(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Vr,
    Size16: qr,
    Size19: Kr,
    Size22: na,
    Size26: sa,
    Size36: la,
    Size48: ua
  },
  Tablet: {
    Size14: Zr,
    Size16: Xr,
    Size19: ea,
    Size22: ra,
    Size26: oa,
    Size36: ca,
    Size48: fa
  },
  Print: {
    Size14: Jr,
    Size16: Qr,
    Size19: ta,
    Size22: aa,
    Size26: ia,
    Size36: da,
    Size48: pa
  },
  Family: {
    Base: zr,
    Fallback: Or,
    Print: Ur
  },
  Weight: {
    Normal: Wr,
    Bold: Gr,
    Light: Yr
  },
  Base: {
    Size: Ts,
    LineHeight: Ls
  },
  // Backward compatibility - individual exports
  FontFamilyBase: zr,
  FontFamilyFallback: Or,
  FontFamilyPrint: Ur,
  FontWeightNormal: Wr,
  FontWeightBold: Gr,
  FontWeightLight: Yr,
  FontSize14Mobile: Vr,
  FontSize14Tablet: Zr,
  FontSize14Print: Jr,
  FontSize16Mobile: qr,
  FontSize16Tablet: Xr,
  FontSize16Print: Qr,
  FontSize19Mobile: Kr,
  FontSize19Tablet: ea,
  FontSize19Print: ta,
  FontSize22Mobile: na,
  FontSize22Tablet: ra,
  FontSize22Print: aa,
  FontSize26Mobile: sa,
  FontSize26Tablet: oa,
  FontSize26Print: ia,
  FontSize36Mobile: la,
  FontSize36Tablet: ca,
  FontSize36Print: da,
  FontSize48Mobile: ua,
  FontSize48Tablet: fa,
  FontSize48Print: pa,
  FontSizeBase: Ts,
  FontLineHeightBase: Ls
}), []), s1 = () => Te(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: us,
    Size1: ps,
    Size2: ms,
    Size3: xs,
    Size4: ys,
    Size5: ws,
    Size6: _s,
    Size7: Cs,
    Size8: js,
    Size9: Is
  },
  Tablet: {
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
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: us,
  SpacingResponsive0Tablet: fs,
  SpacingResponsive1Mobile: ps,
  SpacingResponsive1Tablet: hs,
  SpacingResponsive2Mobile: ms,
  SpacingResponsive2Tablet: gs,
  SpacingResponsive3Mobile: xs,
  SpacingResponsive3Tablet: bs,
  SpacingResponsive4Mobile: ys,
  SpacingResponsive4Tablet: vs,
  SpacingResponsive5Mobile: ws,
  SpacingResponsive5Tablet: Ss,
  SpacingResponsive6Mobile: _s,
  SpacingResponsive6Tablet: ks,
  SpacingResponsive7Mobile: Cs,
  SpacingResponsive7Tablet: Ns,
  SpacingResponsive8Mobile: js,
  SpacingResponsive8Tablet: Ms,
  SpacingResponsive9Mobile: Is,
  SpacingResponsive9Tablet: Ds
}), []), o1 = () => Te(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: gc,
  ButtonSpacingPaddingHorizontalMobile: xc,
  ButtonSpacingPaddingVerticalDesktop: bc,
  ButtonSpacingPaddingHorizontalDesktop: yc,
  // Card spacing	
  CardSpacingPaddingMobile: vc,
  CardSpacingPaddingDesktop: wc,
  CardSpacingHeadingMargin: Sc,
  // Form spacing
  FormSpacingInputPadding: _c,
  FormSpacingInputMinHeight: kc,
  FormSpacingCheckboxSize: Cc,
  FormSpacingCheckboxLabelPadding: Nc
}), []), i1 = () => Te(() => ({
  xl: Bt,
  l: Ht,
  m: zt,
  s: Ot,
  xs: Ut
}), []), l1 = () => Te(() => ({
  body: Wt,
  bodyLarge: Gt,
  bodySmall: Yt,
  ledeText: Vt,
  ledeTextSmall: Zt
}), []), c1 = () => Te(() => ({
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
      base: zr,
      fallback: Or,
      print: Ur
    },
    weight: {
      normal: Wr,
      bold: Gr,
      light: Yr
    },
    sizes: {
      mobile: {
        size14: Vr,
        size16: qr,
        size19: Kr,
        size22: na,
        size26: sa,
        size36: la,
        size48: ua
      },
      tablet: {
        size14: Zr,
        size16: Xr,
        size19: ea,
        size22: ra,
        size26: oa,
        size36: ca,
        size48: fa
      },
      print: {
        size14: Jr,
        size16: Qr,
        size19: ta,
        size22: aa,
        size26: ia,
        size36: da,
        size48: pa
      }
    }
  }
}), []);
function d1(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, s] = W.useState(t), o = W.useCallback(() => s("three-column"), []), i = W.useCallback(() => s((c) => c === "three-column" ? n : c), [n]), l = W.useCallback(() => s((c) => c === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: s,
    drillIn: o,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const Fc = {
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
function u1(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...Fc, ...e }, a = [];
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
function f1(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...Fc, ...e };
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
const p1 = '"Frutiger W01", Arial, Helvetica, sans-serif', h1 = "Arial, Helvetica, sans-serif";
async function m1() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Ih as AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  yr as AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  vr as AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
  Dh as AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
  Th as AXIS_ZIGZAG_DEFAULT_CYCLES,
  $h as AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
  Lh as AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
  wi as Account,
  Kb as ActionLink,
  Iy as AdaptiveDataGrid,
  pg as AnimationDurationFast,
  hg as AnimationDurationNormal,
  mg as AnimationDurationSlow,
  yg as AnimationEasingBounce,
  gg as AnimationEasingEaseIn,
  bg as AnimationEasingEaseInOut,
  xg as AnimationEasingEaseOut,
  sl as AppointmentCard,
  Fy as AreaSeriesPrimitive,
  Dp as AriaDataGrid,
  es as AriaTabsDataGrid,
  Iy as AriaTabsDataGridAdaptive,
  ti as Axis,
  Ya as BackLink,
  By as BandScalesProvider,
  Ry as BarSeriesPrimitive,
  Jl as BorderColorCard,
  ql as BorderColorCardHover,
  Vl as BorderColorDefault,
  Xl as BorderColorError,
  Zl as BorderColorForm,
  Ag as BorderRadiusLarge,
  $g as BorderRadiusMedium,
  Tg as BorderRadiusNone,
  Lg as BorderRadiusSmall,
  jg as BorderWidthCardBottom,
  kg as BorderWidthDefault,
  Cg as BorderWidthFormElement,
  Ng as BorderWidthFormElementError,
  Mg as BorderWidthPanel,
  Dg as BorderWidthTableCell,
  Ig as BorderWidthTableHeader,
  fy as BrandThemeProvider,
  hp as Breadcrumb,
  gd as Breakpoint,
  hb as BreakpointDesktop,
  mb as BreakpointLargeDesktop,
  fb as BreakpointMobile,
  pb as BreakpointTablet,
  pt as Button,
  cx as ButtonBorderRadius,
  lx as ButtonBorderWidth,
  q0 as ButtonPrimaryBackgroundActive,
  Z0 as ButtonPrimaryBackgroundDefault,
  X0 as ButtonPrimaryBackgroundDisabled,
  J0 as ButtonPrimaryBackgroundHover,
  ex as ButtonPrimaryBorderDefault,
  tx as ButtonPrimaryBorderFocus,
  Q0 as ButtonPrimaryTextDefault,
  K0 as ButtonPrimaryTextDisabled,
  sx as ButtonSecondaryBackgroundActive,
  nx as ButtonSecondaryBackgroundDefault,
  ax as ButtonSecondaryBackgroundHover,
  rx as ButtonSecondaryBackgroundSolid,
  ix as ButtonSecondaryBorderDefault,
  ox as ButtonSecondaryTextDefault,
  dx as ButtonShadowSize,
  _i as ButtonSize,
  yc as ButtonSpacingPaddingHorizontalDesktop,
  xc as ButtonSpacingPaddingHorizontalMobile,
  bc as ButtonSpacingPaddingVerticalDesktop,
  gc as ButtonSpacingPaddingVerticalMobile,
  ux as ButtonTypographyWeight,
  Si as ButtonVariant,
  el as Card,
  fx as CardBackgroundDefault,
  mx as CardBorderBottom,
  px as CardBorderDefault,
  hx as CardBorderHover,
  vx as CardBorderWidthBottom,
  yx as CardBorderWidthDefault,
  xy as CardGroup,
  by as CardGroupItem,
  wx as CardShadowDefault,
  Sx as CardShadowHover,
  Sc as CardSpacingHeadingMargin,
  wc as CardSpacingPaddingDesktop,
  vc as CardSpacingPaddingMobile,
  xx as CardTextDescription,
  gx as CardTextHeading,
  bx as CardTextLink,
  yy as CareCard,
  ey as CharacterCount,
  zy as ChartEnhancer,
  Hy as ChartNoScript,
  jh as ChartRoot,
  rd as Checkbox,
  id as Checkboxes,
  Gg as ColorBorderDefault,
  Yg as ColorBorderSecondary,
  y0 as ColorButtonLoginActive,
  x0 as ColorButtonLoginBackground,
  b0 as ColorButtonLoginHover,
  v0 as ColorButtonLoginShadow,
  Kg as ColorButtonPrimaryActive,
  qg as ColorButtonPrimaryBackground,
  Qg as ColorButtonPrimaryHover,
  e0 as ColorButtonPrimaryShadow,
  Xg as ColorButtonPrimaryText,
  u0 as ColorButtonReverseActive,
  l0 as ColorButtonReverseBackground,
  d0 as ColorButtonReverseHover,
  f0 as ColorButtonReverseShadow,
  c0 as ColorButtonReverseText,
  o0 as ColorButtonSecondaryActive,
  t0 as ColorButtonSecondaryBackground,
  n0 as ColorButtonSecondaryBackgroundSolid,
  r0 as ColorButtonSecondaryBorder,
  s0 as ColorButtonSecondaryHover,
  i0 as ColorButtonSecondaryShadow,
  a0 as ColorButtonSecondaryText,
  m0 as ColorButtonWarningActive,
  p0 as ColorButtonWarningBackground,
  h0 as ColorButtonWarningHover,
  g0 as ColorButtonWarningShadow,
  Vg as ColorError,
  Ug as ColorFocusBackground,
  Wg as ColorFocusText,
  Jg as ColorFormBackground,
  Zg as ColorFormBorder,
  uc as ColorGrey1,
  fc as ColorGrey2,
  pc as ColorGrey3,
  hc as ColorGrey4,
  mc as ColorGrey5,
  zg as ColorLinkActive,
  Bg as ColorLinkDefault,
  Hg as ColorLinkHover,
  Og as ColorLinkVisited,
  ec as ColorPrimaryBlack,
  Ql as ColorPrimaryBlue,
  rc as ColorPrimaryDarkPink,
  tc as ColorPrimaryGreen,
  nc as ColorPrimaryPurple,
  ac as ColorPrimaryRed,
  Kl as ColorPrimaryWhite,
  sc as ColorPrimaryYellow,
  cc as ColorSecondaryAquaGreen,
  lc as ColorSecondaryOrange,
  oc as ColorSecondaryPaleYellow,
  dc as ColorSecondaryPink,
  ic as ColorSecondaryWarmYellow,
  Eg as ColorTextPrimary,
  Rg as ColorTextPrint,
  Fg as ColorTextReverse,
  Pg as ColorTextSecondary,
  qn as Column,
  bd as ColumnAlign,
  U0 as ComponentBlur,
  E0 as ComponentBreadcrumbChevronMarginLeft,
  P0 as ComponentBreadcrumbChevronMarginRight,
  R0 as ComponentBreadcrumbPaddingTopDesktop,
  F0 as ComponentBreadcrumbPaddingTopMobile,
  k0 as ComponentButtonPaddingDesktopHorizontal,
  _0 as ComponentButtonPaddingDesktopVertical,
  S0 as ComponentButtonPaddingMobileHorizontal,
  w0 as ComponentButtonPaddingMobileVertical,
  C0 as ComponentButtonShadowSize,
  L0 as ComponentCardHeadingMargin,
  T0 as ComponentCardPaddingDesktop,
  D0 as ComponentCardPaddingMobile,
  G0 as ComponentDetails,
  Y0 as ComponentExpander,
  I0 as ComponentFormCheckboxLabelPadding,
  M0 as ComponentFormCheckboxSize,
  N0 as ComponentFormInputMinHeight,
  j0 as ComponentFormInputPadding,
  W0 as ComponentLink,
  V0 as ComponentPagination,
  A0 as ComponentPanelPaddingDesktop,
  $0 as ComponentPanelPaddingMobile,
  O0 as ComponentSpread,
  H0 as ComponentSummaryListCellPaddingHorizontal,
  B0 as ComponentSummaryListCellPaddingVertical,
  z0 as ComponentSummaryListRowMargin,
  ji as Container,
  gy as ContentsList,
  Fc as DEFAULT_FONT_CONFIG,
  Ny as DashboardSummaryGrid,
  cy as DateInput,
  wp as Details,
  Sp as DoDontList,
  Zb as ElevationHigh,
  Yb as ElevationLow,
  Vb as ElevationMedium,
  Gb as ElevationNone,
  io as ErrorMessage,
  ly as ErrorSummary,
  _p as Expander,
  yt as FRUTIGER_FONT_FILES,
  Es as Fieldset,
  xd as Float,
  zb as FocusOutlineOffset,
  Ob as FocusOutlineStyle,
  Hb as FocusOutlineWidth,
  Wb as FocusShadowButton,
  Ub as FocusShadowInput,
  zr as FontFamilyBase,
  Or as FontFamilyFallback,
  Ur as FontFamilyPrint,
  Ls as FontLineHeightBase,
  Vr as FontSize14Mobile,
  Jr as FontSize14Print,
  Zr as FontSize14Tablet,
  qr as FontSize16Mobile,
  Qr as FontSize16Print,
  Xr as FontSize16Tablet,
  Kr as FontSize19Mobile,
  ta as FontSize19Print,
  ea as FontSize19Tablet,
  na as FontSize22Mobile,
  aa as FontSize22Print,
  ra as FontSize22Tablet,
  sa as FontSize26Mobile,
  ia as FontSize26Print,
  oa as FontSize26Tablet,
  la as FontSize36Mobile,
  da as FontSize36Print,
  ca as FontSize36Tablet,
  ua as FontSize48Mobile,
  pa as FontSize48Print,
  fa as FontSize48Tablet,
  Ts as FontSizeBase,
  Gr as FontWeightBold,
  Yr as FontWeightLight,
  Wr as FontWeightNormal,
  Ai as Footer,
  Ox as FormBorderRadius,
  Hx as FormBorderWidthDefault,
  zx as FormBorderWidthError,
  Fx as FormErrorTextDefault,
  Rx as FormErrorTypographyWeight,
  Bx as FormHintTextDefault,
  _x as FormInputBackgroundDefault,
  Cx as FormInputBackgroundDisabled,
  Nx as FormInputBackgroundError,
  kx as FormInputBackgroundFocus,
  jx as FormInputBorderDefault,
  Dx as FormInputBorderDisabled,
  Ix as FormInputBorderError,
  Mx as FormInputBorderFocus,
  Tx as FormInputTextDefault,
  $x as FormInputTextDisabled,
  Lx as FormInputTextPlaceholder,
  Ax as FormLabelTextDefault,
  Ex as FormLabelTextRequired,
  Px as FormLabelTypographyWeight,
  Nc as FormSpacingCheckboxLabelPadding,
  Cc as FormSpacingCheckboxSize,
  kc as FormSpacingInputMinHeight,
  _c as FormSpacingInputPadding,
  hy as GanttChart,
  Va as Grid,
  xb as GridGutter,
  bb as GridGutterHalf,
  Ah as GridLines,
  gb as GridPageWidth,
  xn as GridWidth,
  $i as Header,
  py as HeaderSSR,
  Bd as HeaderSearch,
  $i as HeaderStatic,
  Xt as Heading,
  Ht as HeadingsNhsukHeadingL,
  zt as HeadingsNhsukHeadingM,
  Ot as HeadingsNhsukHeadingS,
  Bt as HeadingsNhsukHeadingXl,
  Ut as HeadingsNhsukHeadingXs,
  zd as Hero,
  Ci as Hint,
  ky as Images,
  $s as Input,
  vy as InsetText,
  As as Label,
  ub as LayoutColumnActions,
  ib as LayoutColumnFull,
  lb as LayoutColumnHalf,
  db as LayoutColumnQuarter,
  cb as LayoutColumnThird,
  ob as LayoutContainerMaxWidth,
  Py as Legend,
  Mh as LineScalesProvider,
  gm as LineSeriesPrimitive,
  wd as List,
  Mi as MainWrapper,
  ol as MedicationCard,
  ym as MetricCard,
  qy as NHSBodyText,
  Xy as NHSBodyTextLarge,
  Qy as NHSBodyTextSmall,
  Gy as NHSHeading1,
  Yy as NHSHeading2,
  Vy as NHSHeading3,
  Zy as NHSHeading4,
  Jy as NHSHeading5,
  Ky as NHSLedeText,
  e1 as NHSLedeTextSmall,
  uy as NHSThemeProvider,
  h1 as NHS_FALLBACK_FONT_STACK,
  p1 as NHS_FONT_STACK,
  bh as NavigationSplitView,
  Ty as PageTemplate,
  my as Pagination,
  mp as Panel,
  Wt as ParagraphsBody,
  Gt as ParagraphsBodyLarge,
  Yt as ParagraphsBodySmall,
  Vt as ParagraphsLedeText,
  Zt as ParagraphsLedeTextSmall,
  al as PatientCard,
  wh as ProductRoadmap,
  ty as Radios,
  ny as RadiosServer,
  Iy as ResponsiveDataGrid,
  Dy as ResponsiveDataGridDemo,
  on as Row,
  Uy as SPC,
  fg as SPCChart,
  Oy as SPCMetricCard,
  Sr as Select,
  fd as SelectOption,
  Ab as ShadowButtonDefault,
  Fb as ShadowButtonFocus,
  Eb as ShadowButtonSecondary,
  Pb as ShadowButtonWarning,
  Rb as ShadowCardDefault,
  Bb as ShadowCardHover,
  sb as SizeButtonMinHeightDesktop,
  ab as SizeButtonMinHeightMobile,
  qx as SizeFormControlLarge,
  Jx as SizeFormControlMedium,
  Zx as SizeFormControlSmall,
  nb as SizeFormInputWidth2xl,
  rb as SizeFormInputWidth3xl,
  eb as SizeFormInputWidthLg,
  Kx as SizeFormInputWidthMd,
  Qx as SizeFormInputWidthSm,
  tb as SizeFormInputWidthXl,
  Xx as SizeFormInputWidthXs,
  Yx as SizeIconExtraLarge,
  Gx as SizeIconLarge,
  Wx as SizeIconMedium,
  Vx as SizeIconNhsDefault,
  Ux as SizeIconSmall,
  Ki as SkipLink,
  Cy as SlotMatrix,
  jy as SortStatusControl,
  jc as Spacing0,
  Mc as Spacing1,
  Ic as Spacing2,
  Dc as Spacing3,
  Tc as Spacing4,
  Lc as Spacing5,
  $c as Spacing6,
  Ac as Spacing7,
  Ec as Spacing8,
  Pc as Spacing9,
  us as SpacingResponsive0Mobile,
  fs as SpacingResponsive0Tablet,
  ps as SpacingResponsive1Mobile,
  hs as SpacingResponsive1Tablet,
  ms as SpacingResponsive2Mobile,
  gs as SpacingResponsive2Tablet,
  xs as SpacingResponsive3Mobile,
  bs as SpacingResponsive3Tablet,
  ys as SpacingResponsive4Mobile,
  vs as SpacingResponsive4Tablet,
  ws as SpacingResponsive5Mobile,
  Ss as SpacingResponsive5Tablet,
  _s as SpacingResponsive6Mobile,
  ks as SpacingResponsive6Tablet,
  Cs as SpacingResponsive7Mobile,
  Ns as SpacingResponsive7Tablet,
  js as SpacingResponsive8Mobile,
  Ms as SpacingResponsive8Tablet,
  Is as SpacingResponsive9Mobile,
  Ds as SpacingResponsive9Tablet,
  ry as SpacingUtilities,
  Tb as StateDisabledBackground,
  Lb as StateDisabledBorder,
  $b as StateDisabledText,
  yb as StateErrorBackground,
  vb as StateErrorBorder,
  wb as StateErrorText,
  Mb as StateInfoBackground,
  Ib as StateInfoBorder,
  Db as StateInfoText,
  Sb as StateSuccessBackground,
  _b as StateSuccessBorder,
  kb as StateSuccessText,
  Cb as StateWarningBackground,
  Nb as StateWarningBorder,
  jb as StateWarningText,
  Ip as SummaryCard,
  wy as SummaryList,
  en as Table,
  Sy as Tabs,
  We as Tag,
  kp as TaskList,
  cd as Textarea,
  Ey as TooltipOverlay,
  mm as TooltipProvider,
  Ly as TransactionalPageTemplate,
  vg as TransitionButtonDefault,
  wg as TransitionButtonShadow,
  _g as TransitionCardHover,
  Sg as TransitionInputFocus,
  Ay as VisibilityProvider,
  il as VitalsCard,
  iy as WIDTH_FRACTIONS,
  _y as WarningCallout,
  fl as WidthContainer,
  sy as WidthUtilities,
  m1 as checkFrutigerLoaded,
  Ys as createGenericTabsConfig,
  My as createTCHTabsConfig,
  u1 as generateFrutigerFontFace,
  Wy as getResponsiveStyles,
  ay as getSpacingClass,
  oy as getWidthClass,
  f1 as preloadFrutigerFonts,
  zp as tchDataConfig,
  Rd as useBrand,
  n1 as useColors,
  o1 as useComponentSpacing,
  i1 as useNHSHeadings,
  l1 as useNHSParagraphs,
  dy as useNHSTheme,
  c1 as useNHSTypographySystem,
  d1 as useNavigationSplitDrill,
  mh as useNavigationSplitUrlSync,
  hl as useNhsFdpBreakpoints,
  s1 as useResponsiveSpacing,
  $y as useResponsiveValue,
  r1 as useSpacing,
  Ym as useSpc,
  t1 as useTokens,
  a1 as useTypography
};
//# sourceMappingURL=index.esm.js.map
