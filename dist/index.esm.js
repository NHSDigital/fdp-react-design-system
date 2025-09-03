import * as ce from "react";
import Ze, { useState as Se, useEffect as Ie, useCallback as re, useRef as Ce, createElement as za, useMemo as Re, useContext as Co, createContext as jo, forwardRef as Pt, useImperativeHandle as Wa, useReducer as Oa } from "react";
function No(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rn = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ra;
function To() {
  if (ra) return Ot;
  ra = 1;
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
  return Ot.Fragment = t, Ot.jsx = r, Ot.jsxs = r, Ot;
}
var Ut = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa;
function Do() {
  return aa || (aa = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === b ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case g:
          return "Fragment";
        case q:
          return "Profiler";
        case k:
          return "StrictMode";
        case L:
          return "Suspense";
        case v:
          return "SuspenseList";
        case I:
          return "Activity";
      }
      if (typeof j == "object")
        switch (typeof j.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), j.$$typeof) {
          case C:
            return "Portal";
          case _:
            return (j.displayName || "Context") + ".Provider";
          case B:
            return (j._context.displayName || "Context") + ".Consumer";
          case y:
            var ae = j.render;
            return j = j.displayName, j || (j = ae.displayName || ae.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case $:
            return ae = j.displayName || null, ae !== null ? ae : e(j.type) || "Memo";
          case A:
            ae = j._payload, j = j._init;
            try {
              return e(j(ae));
            } catch {
            }
        }
      return null;
    }
    function t(j) {
      return "" + j;
    }
    function r(j) {
      try {
        t(j);
        var ae = !1;
      } catch {
        ae = !0;
      }
      if (ae) {
        ae = console;
        var M = ae.error, te = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return M.call(
          ae,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          te
        ), t(j);
      }
    }
    function a(j) {
      if (j === g) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === A)
        return "<...>";
      try {
        var ae = e(j);
        return ae ? "<" + ae + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var j = F.A;
      return j === null ? null : j.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(j) {
      if (X.call(j, "key")) {
        var ae = Object.getOwnPropertyDescriptor(j, "key").get;
        if (ae && ae.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function l(j, ae) {
      function M() {
        R || (R = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ae
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: M,
        configurable: !0
      });
    }
    function d() {
      var j = e(this.type);
      return x[j] || (x[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function c(j, ae, M, te, E, ie, Q, V) {
      return M = ie.ref, j = {
        $$typeof: p,
        type: j,
        key: ae,
        props: ie,
        _owner: E
      }, (M !== void 0 ? M : null) !== null ? Object.defineProperty(j, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(j, "ref", { enumerable: !1, value: null }), j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(j, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(j, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.defineProperty(j, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    }
    function u(j, ae, M, te, E, ie, Q, V) {
      var K = ae.children;
      if (K !== void 0)
        if (te)
          if (de(K)) {
            for (te = 0; te < K.length; te++)
              f(K[te]);
            Object.freeze && Object.freeze(K);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(K);
      if (X.call(ae, "key")) {
        K = e(j);
        var U = Object.keys(ae).filter(function(me) {
          return me !== "key";
        });
        te = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", P[K + te] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          te,
          K,
          U,
          K
        ), P[K + te] = !0);
      }
      if (K = null, M !== void 0 && (r(M), K = "" + M), i(ae) && (r(ae.key), K = "" + ae.key), "key" in ae) {
        M = {};
        for (var se in ae)
          se !== "key" && (M[se] = ae[se]);
      } else M = ae;
      return K && l(
        M,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), c(
        j,
        K,
        ie,
        E,
        o(),
        M,
        Q,
        V
      );
    }
    function f(j) {
      typeof j == "object" && j !== null && j.$$typeof === p && j._store && (j._store.validated = 1);
    }
    var m = Ze, p = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), b = Symbol.for("react.client.reference"), F = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, de = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(j) {
        return j();
      }
    };
    var R, x = {}, N = m.react_stack_bottom_frame.bind(
      m,
      s
    )(), ue = J(a(s)), P = {};
    Ut.Fragment = g, Ut.jsx = function(j, ae, M, te, E) {
      var ie = 1e4 > F.recentlyCreatedOwnerStacks++;
      return u(
        j,
        ae,
        M,
        !1,
        te,
        E,
        ie ? Error("react-stack-top-frame") : N,
        ie ? J(a(j)) : ue
      );
    }, Ut.jsxs = function(j, ae, M, te, E) {
      var ie = 1e4 > F.recentlyCreatedOwnerStacks++;
      return u(
        j,
        ae,
        M,
        !0,
        te,
        E,
        ie ? Error("react-stack-top-frame") : N,
        ie ? J(a(j)) : ue
      );
    };
  })()), Ut;
}
var sa;
function Io() {
  return sa || (sa = 1, process.env.NODE_ENV === "production" ? rn.exports = To() : rn.exports = Do()), rn.exports;
}
var n = Io(), er = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var oa;
function Ro() {
  return oa || (oa = 1, (function(e) {
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
  })(er)), er.exports;
}
var Fo = Ro();
const ee = /* @__PURE__ */ No(Fo), Gf = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = ee(
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
}, Hr = ({
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
      className: ee(
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
          className: ee("nhsuk-account__item nhsuk-header__account-item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
}, { forwardRef: Bo, useCallback: wt, useState: tr } = ce;
function Lo(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, u] = tr(!1), [f, m] = tr(!1), [p, C] = tr(!1), g = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    o !== "default" ? `nhs-aria-button--${o}` : "",
    s ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), k = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", q = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...p && { "data-focused": "true" },
    ...k && { "data-disabled": "true" }
  }, B = wt(() => !k && u(!0), [k]), _ = wt(() => u(!1), []), y = wt(() => !k && m(!0), [k]), L = wt(() => {
    m(!1), u(!1);
  }, []), v = wt(() => C(!0), []), $ = wt(() => C(!1), []), A = wt((K) => {
    K.key === " " && ("href" in d || K.currentTarget.getAttribute("role") === "button") && (K.preventDefault(), K.currentTarget.click());
  }, [d]), I = wt((K) => {
    if (l) {
      const U = K.currentTarget;
      if (U.getAttribute("data-processing") === "true") {
        K.preventDefault();
        return;
      }
      U.setAttribute("data-processing", "true"), setTimeout(() => {
        U.removeAttribute("data-processing");
      }, 1e3);
    }
  }, [l]);
  if ("href" in d && d.href) {
    const { id: K, style: U, title: se, ["aria-label"]: me, ["aria-describedby"]: z, ["aria-labelledby"]: je, tabIndex: fe, ...pe } = d, he = d;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: he.href,
        target: he.target,
        rel: he.rel,
        className: g,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...q,
        ...l && { "data-prevent-double-click": "true" },
        ...pe,
        onKeyDown: (xe) => {
          he.onKeyDown?.(xe), A(xe);
        },
        onClick: (xe) => {
          he.onClick?.(xe), I(xe);
        },
        onMouseDown: (xe) => {
          he.onMouseDown?.(xe), B();
        },
        onMouseUp: (xe) => {
          he.onMouseUp?.(xe), _();
        },
        onMouseEnter: (xe) => {
          he.onMouseEnter?.(xe), y();
        },
        onMouseLeave: (xe) => {
          he.onMouseLeave?.(xe), L();
        },
        onFocus: (xe) => {
          he.onFocus?.(xe), v();
        },
        onBlur: (xe) => {
          he.onBlur?.(xe), $();
        },
        "aria-disabled": he["aria-disabled"],
        ...he["aria-disabled"] === "true" && { tabIndex: -1 },
        id: K,
        style: U,
        title: se,
        "aria-label": me,
        "aria-describedby": z,
        "aria-labelledby": je,
        tabIndex: fe,
        children: r
      }
    );
  }
  const { id: b, style: F, title: X, ["aria-label"]: de, ["aria-describedby"]: J, ["aria-labelledby"]: R, tabIndex: x, name: N, value: ue, form: P, formAction: j, formEncType: ae, formMethod: M, formNoValidate: te, formTarget: E, autoFocus: ie, ...Q } = d, V = d;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: V.type || "button",
      disabled: V.disabled,
      className: g,
      "data-module": "nhs-button",
      ...q,
      ...l && { "data-prevent-double-click": "true" },
      ...V.disabled && { "aria-disabled": "true" },
      ...Q,
      onKeyDown: (K) => {
        V.onKeyDown?.(K), A(K);
      },
      onClick: (K) => {
        V.onClick?.(K), I(K);
      },
      onMouseDown: (K) => {
        V.onMouseDown?.(K), B();
      },
      onMouseUp: (K) => {
        V.onMouseUp?.(K), _();
      },
      onMouseEnter: (K) => {
        V.onMouseEnter?.(K), y();
      },
      onMouseLeave: (K) => {
        V.onMouseLeave?.(K), L();
      },
      onFocus: (K) => {
        V.onFocus?.(K), v();
      },
      onBlur: (K) => {
        V.onBlur?.(K), $();
      },
      id: b,
      style: F,
      title: X,
      "aria-label": de,
      "aria-describedby": J,
      "aria-labelledby": R,
      tabIndex: x,
      name: N,
      value: ue,
      form: P,
      formAction: j,
      formEncType: ae,
      formMethod: M,
      formNoValidate: te,
      formTarget: E,
      autoFocus: ie,
      children: r
    }
  );
}
const Ve = Bo(Lo);
Ve.displayName = "Button";
const dr = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = ee(
    "nhsuk-back-link",
    a
  ), d = ee(
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
}, rt = ({
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
  const u = ee(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": o,
      "nhsuk-tag--closable": s,
      "nhsuk-tag--disabled": l
    },
    d
  ), f = (m) => {
    m.preventDefault(), m.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: u, ...c, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    s && /* @__PURE__ */ n.jsx(
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
}, Eo = ({
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
  onChange: u,
  onBlur: f,
  onFocus: m,
  attributes: p,
  ...C
}) => {
  const [g, k] = Se(a), q = r !== void 0, B = q ? r : g;
  Ie(() => {
    q || k(a);
  }, [a, q]);
  const _ = (A) => {
    const I = A.target.checked;
    q || k(I), u?.(I, A);
  }, y = i ? `${e}-hint` : void 0, L = l ? `${e}-error` : void 0, v = [y, L].filter(Boolean).join(" ") || void 0, $ = ee(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ n.jsx("div", { className: $, ...C, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: B,
        disabled: o,
        onChange: _,
        onBlur: f,
        onFocus: m,
        "aria-describedby": v,
        ...p
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ n.jsx("div", { id: y, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: L, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
Eo.displayName = "Checkbox";
const Pr = ({
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
  describedBy: u,
  className: f,
  width: m = "full",
  inputMode: p,
  autoComplete: C,
  maxLength: g,
  minLength: k,
  pattern: q,
  step: B,
  min: _,
  max: y,
  showValueLabels: L = !1,
  showCurrentValue: v = !1,
  valueLabels: $,
  onChange: A,
  onBlur: I,
  onFocus: b,
  onKeyDown: F,
  ...X
}) => {
  const [de, J] = Se(a || o || (r === "range" ? _ || "0" : ""));
  Ie(() => {
    a !== void 0 && J(a);
  }, [a]);
  const R = (E) => {
    const ie = E.target;
    J(ie.value), ("type" in E && E.nativeEvent || E.type === "keydown") && A?.(E);
  }, x = r === "range", N = ee(
    "nhsuk-input",
    {
      "nhsuk-input--error": c,
      "nhsuk-input--range": x,
      [`nhsuk-input--width-${m}`]: m !== "full" && !x
    },
    f
  ), ue = a !== void 0, P = {
    id: e,
    name: t,
    type: r,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": u,
    inputMode: p,
    autoComplete: C,
    maxLength: g,
    minLength: k,
    pattern: q,
    step: B,
    min: _,
    max: y,
    onChange: R,
    onBlur: I,
    onFocus: b,
    onKeyDown: (E) => {
      if (x && /[0-9]/.test(E.key)) {
        const ie = (de?.toString() || "") + E.key;
        E.target.value = ie, R(E);
      }
      F?.(E);
    },
    ...X
  }, j = !ue && o !== void 0 ? { defaultValue: o } : {}, ae = ue ? { value: a } : {}, M = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: N,
      ...ae,
      ...j,
      "data-current-value": de,
      ...P
    }
  ), te = x ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    L && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: $?.min || _ || "0" }),
      M(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: $?.max || y || "100" })
    ] }),
    !L && M(),
    v && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      $?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: de })
    ] }) })
  ] }) : null;
  return x ? te : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: N,
      id: e,
      name: t,
      type: r,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: d,
      "aria-describedby": u,
      inputMode: p,
      autoComplete: C,
      maxLength: g,
      minLength: k,
      pattern: q,
      step: B,
      min: _,
      max: y,
      onChange: A,
      onBlur: I,
      onFocus: b,
      onKeyDown: F,
      ...X
    }
  );
}, zr = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = ee(
    "nhsuk-label",
    {
      [`nhsuk-label--${a}`]: a !== "m"
    },
    t
  ), l = r ? "h1" : "label";
  return /* @__PURE__ */ n.jsx(
    l,
    {
      className: i,
      htmlFor: r ? void 0 : e,
      ...s,
      children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o
    }
  );
}, Wr = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = ee(
    "nhsuk-fieldset",
    r
  ), i = ee(
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
}, Ao = ({
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
  onChange: u,
  fieldsetAttributes: f,
  attributes: m,
  ...p
}) => {
  const [C, g] = Se(
    e.filter((A) => A.checked).map((A) => A.value)
  ), k = r || t, q = i ? `${k}-hint` : void 0, B = l ? `${k}-error` : void 0, _ = [q, B].filter(Boolean).join(" ") || void 0, y = (A, I) => {
    let b;
    I ? b = [...C, A] : b = C.filter((F) => F !== A), g(b), u?.(b);
  }, L = () => e.map((A, I) => {
    const b = `${k}-${I + 1}`, F = `${b}-conditional`, X = C.includes(A.value), de = A.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: b,
          name: t,
          type: "checkbox",
          value: A.value,
          checked: X,
          disabled: de,
          onChange: (J) => y(A.value, J.target.checked),
          "aria-describedby": A.hint ? `${b}-hint` : _,
          ...A.conditional && {
            "aria-controls": F,
            "aria-expanded": X ? "true" : "false"
          },
          ...A.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: b, children: A.text }),
      A.hint && /* @__PURE__ */ n.jsx("div", { id: `${b}-hint`, className: "nhsuk-checkboxes__hint", children: A.hint }),
      A.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: ee("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !X
          }),
          id: F,
          children: typeof A.conditional == "object" && A.conditional !== null && "label" in A.conditional && "id" in A.conditional && "name" in A.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            A.conditional.label && /* @__PURE__ */ n.jsx(zr, { htmlFor: A.conditional.id, children: A.conditional.label }),
            /* @__PURE__ */ n.jsx(Pr, { ...A.conditional })
          ] }) : A.conditional
        }
      )
    ] }, A.value);
  }), v = ee(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": c
    },
    d
  ), $ = ee("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: $, ...m, ...p, children: /* @__PURE__ */ n.jsxs(
    Wr,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: _,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: q, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: B, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: v, children: L() })
      ]
    }
  ) });
};
Ao.displayName = "Checkboxes";
const Mo = ({
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
  className: u,
  rows: f = 5,
  cols: m,
  maxLength: p,
  minLength: C,
  wrap: g = "soft",
  resize: k = "vertical",
  autoComplete: q,
  spellCheck: B,
  onChange: _,
  onBlur: y,
  onFocus: L,
  onKeyDown: v,
  ...$
}) => {
  const A = ee(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": d,
      [`nhsuk-textarea--resize-${k}`]: k !== "vertical"
    },
    u
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: A,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: o,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": c,
      rows: f,
      cols: m,
      maxLength: p,
      minLength: C,
      wrap: g,
      autoComplete: q,
      spellCheck: B,
      onChange: _,
      onBlur: y,
      onFocus: L,
      onKeyDown: v,
      ...$
    }
  );
}, Ua = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = ee("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, id: e, ...a, children: r });
}, Vf = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: a = 75,
  name: o,
  value: s = "",
  rows: i,
  className: l,
  countMessage: d,
  onCountChange: c,
  onChange: u,
  ...f
}) => {
  const [m, p] = Se(s), [C, g] = Se(0), [k, q] = Se(!1), [B, _] = Se(!1), y = re((b) => r ? b.trim() === "" ? 0 : b.trim().split(/\s+/).length : b.length, [r]);
  Ie(() => {
    const b = y(m), F = t || r || 0, X = F - b, de = Math.floor(F * (a / 100));
    g(X), q(b > F), _(b >= de || b > F), c && c(b, X);
  }, [m, t, r, a, y, c]);
  const L = (b) => {
    const F = b.target.value;
    p(F), u && u(b);
  }, v = () => {
    const b = t || r || 0, F = r ? "word" : "character", X = r ? "words" : "characters";
    if (!B)
      return `You can enter up to ${b} ${b === 1 ? F : X}`;
    if (k) {
      const de = Math.abs(C);
      return `You have ${de} ${de === 1 ? F : X} too many`;
    } else
      return `You have ${C} ${C === 1 ? F : X} remaining`;
  }, $ = ee(
    "nhsuk-character-count",
    l
  ), A = ee(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !B,
      "nhsuk-error-message": k
    },
    d?.classes
  ), I = ee(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": k
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: $,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          Mo,
          {
            id: e,
            name: o,
            value: m,
            rows: i,
            className: I,
            onChange: L,
            "aria-describedby": `${e}-info`,
            "aria-invalid": k || void 0,
            ...f
          }
        ),
        /* @__PURE__ */ n.jsx(
          Ua,
          {
            id: `${e}-info`,
            className: A,
            role: "status",
            "aria-live": "polite",
            children: v()
          }
        )
      ]
    }
  );
}, $o = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = ee(
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
}, Ho = ({
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
  multiple: u = !1,
  size: f,
  autoComplete: m,
  options: p,
  children: C,
  onChange: g,
  onBlur: k,
  onFocus: q,
  ...B
}) => {
  const _ = ee(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    c
  ), y = () => p ? p.map((v, $) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: v.value,
      disabled: v.disabled,
      "data-initial-selected": v.selected || void 0,
      children: v.text
    },
    `${v.value}-${$}`
  )) : null, L = o === void 0 && a === void 0 && p ? p.find((v) => v.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: _,
      id: e,
      name: t,
      "aria-label": r,
      value: a,
      defaultValue: o !== void 0 ? o : L,
      disabled: s,
      required: i,
      "aria-describedby": d,
      multiple: u,
      size: f,
      autoComplete: m,
      onChange: g,
      onBlur: k,
      onFocus: q,
      ...B,
      children: C || y()
    }
  );
}, cn = Ho;
cn.Option = $o;
const Yf = ({
  name: e,
  value: t,
  defaultValue: r,
  hasError: a = !1,
  describedBy: o,
  className: s,
  size: i = "normal",
  inline: l = !1,
  options: d,
  onChange: c,
  onBlur: u,
  onFocus: f,
  ...m
}) => {
  const [p, C] = Se(t || r || ""), g = Ce([]), k = ee(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    s
  ), q = (_) => {
    const y = _.target.value;
    C(y), c && c(_);
  }, B = re((_) => {
    const { key: y } = _;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(y)) return;
    _.preventDefault();
    const L = g.current.filter((I) => I && !I.disabled), v = L.indexOf(_.currentTarget);
    if (v === -1) return;
    let $ = v;
    y === "ArrowDown" || y === "ArrowRight" ? $ = (v + 1) % L.length : (y === "ArrowUp" || y === "ArrowLeft") && ($ = (v - 1 + L.length) % L.length);
    const A = L[$];
    A && (A.focus(), A.checked || A.click());
  }, []);
  return /* @__PURE__ */ n.jsx(Wr, { children: /* @__PURE__ */ n.jsx("div", { className: k, ...m, children: d.map((_, y) => {
    const L = `${e}-${y}`, v = _.conditional ? `${L}-conditional` : void 0, $ = p === _.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: L,
          name: e,
          type: "radio",
          value: _.value,
          disabled: _.disabled,
          checked: $,
          "aria-describedby": o,
          onChange: q,
          onBlur: u,
          onFocus: f,
          onKeyDown: B,
          ref: (A) => {
            A && (g.current[y] = A);
          }
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: L, children: _.text }),
      _.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: _.hint }),
      _.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: ee("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !$
          }),
          id: v,
          children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            _.conditional.label && /* @__PURE__ */ n.jsx(zr, { htmlFor: _.conditional.id, children: _.conditional.label }),
            /* @__PURE__ */ n.jsx(Pr, { ..._.conditional })
          ] }) : _.conditional
        }
      )
    ] }, _.value);
  }) }) });
}, Ga = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = ee(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), l = a ? { maxWidth: a, ...o || {} } : o;
  return /* @__PURE__ */ n.jsx("div", { className: i, style: l, ...s, children: e });
}, Nt = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const o = ee("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, style: r, ...a, children: e });
}, Kt = ({
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
  const u = ee(
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
  return /* @__PURE__ */ n.jsx("div", { className: u, style: d, ...c, children: e });
}, ur = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const s = Ze.Children.toArray(e)[0], i = Ze.isValidElement(s) && (s.type === Nt || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Ga, { className: t, style: r, ...a, children: i ? e : /* @__PURE__ */ n.jsx(Nt, { children: e }) });
}, Po = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const d = i || (t === "number" ? "ol" : "ul"), c = ee(
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
}, zo = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = ee("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, Wo = Po;
Wo.Item = zo;
const qf = ({
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
}, Kf = {
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
}, Zf = ({
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
}, Jf = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Xf = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Va = ({
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
}, xt = ({
  level: e,
  className: t,
  text: r,
  html: a,
  children: o,
  size: s,
  marginBottom: i,
  ...l
}) => {
  const c = e ?? ((C) => {
    switch (C) {
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
  })(s), u = ee(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${s}`]: s
    },
    t
  ), f = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), m = `h${c}`, p = i ? { ...l.style, marginBottom: i } : l.style;
  return za(
    m,
    { className: u, ...l, style: p },
    f
  );
}, ia = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...o
}) => {
  const s = ee("nhsuk-error-message", t);
  return /* @__PURE__ */ n.jsxs("span", { className: s, id: e, ...o, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      r,
      " "
    ] }),
    a
  ] });
}, Qf = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const d = Ce(null);
  Ie(() => {
    d.current && d.current.focus();
  }, []);
  const c = ee(
    "nhsuk-error-summary",
    s
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, m = (p) => {
    const C = p.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: p.html } }) : p.text;
    return p.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: p.href,
        ...p.attributes,
        children: C
      }
    ) : C;
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
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((p, C) => /* @__PURE__ */ n.jsx("li", { children: m(p) }, C)) })
        ] })
      ]
    }
  );
}, em = ({
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
  const [u, f] = Se(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [m, p] = Se({}), C = (R) => R % 4 === 0 && R % 100 !== 0 || R % 400 === 0, g = (R, x) => {
    const N = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return R === 2 && C(x) ? 29 : N[R - 1];
  }, k = (R, x, N) => {
    if (!R) return;
    if (!/^\d+$/.test(R)) return "Day must be a number";
    const ue = parseInt(R, 10);
    if (ue < 1 || ue > 31) return "Day must be between 1 and 31";
    if (x && N) {
      const P = parseInt(x, 10), j = parseInt(N, 10);
      if (!isNaN(P) && !isNaN(j) && P >= 1 && P <= 12) {
        const ae = g(P, j);
        if (ue > ae)
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
          ][P - 1]} ${j} only has ${ae} days`;
      }
    }
  }, q = (R) => {
    if (!R) return;
    if (!/^\d+$/.test(R)) return "Month must be a number";
    const x = parseInt(R, 10);
    if (x < 1 || x > 12) return "Month must be between 1 and 12";
  }, B = (R) => {
    if (!R) return;
    if (!/^\d+$/.test(R)) return "Year must be a number";
    const x = parseInt(R, 10), N = (/* @__PURE__ */ new Date()).getFullYear();
    if (x < 1900 || x > N + 10)
      return `Year must be between 1900 and ${N + 10}`;
  }, _ = (R, x, N) => {
    if (!R || !x || !N) return;
    const ue = parseInt(R, 10), P = parseInt(x, 10), j = parseInt(N, 10);
    if (isNaN(ue) || isNaN(P) || isNaN(j) || P < 1 || P > 12 || j < 1900) return;
    const ae = g(P, j);
    ue < 1 || ue > ae;
  }, y = re((R, x) => {
    const N = {
      ...u,
      [R]: x
    };
    f(N), d && d(N);
  }, [u, d]), L = re((R) => {
    const x = u[R];
    let N;
    if (R === "day")
      N = k(x, u.month, u.year);
    else if (R === "month") {
      if (N = q(x), !N && u.day) {
        const ue = k(u.day, x, u.year);
        p((P) => ({
          ...P,
          day: ue
        }));
      }
    } else if (R === "year" && (N = B(x), !N && u.day && u.month)) {
      const ue = k(u.day, u.month, x);
      p((P) => ({
        ...P,
        day: ue
      }));
    }
    if (p((ue) => ({
      ...ue,
      [R]: N
    })), u.day && u.month && u.year) {
      const ue = _(
        R === "day" ? x : u.day,
        R === "month" ? x : u.month,
        R === "year" ? x : u.year
      );
      ue && p((P) => ({
        ...P,
        day: ue
      }));
    }
  }, [u, k, q, B, _]), v = Re(() => [
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
  ], []), $ = r || v;
  let A = s?.describedBy || "";
  const I = i ? `${e}-hint` : "", b = l ? `${e}-error` : "";
  I && (A = A ? `${A} ${I}` : I), b && (A = A ? `${A} ${b}` : b);
  const F = Object.values(m).some((R) => R), X = ee(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || F
    }
  ), de = ee(
    "nhsuk-date-input",
    t
  ), J = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Ua,
      {
        id: I,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      ia,
      {
        id: b,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([R, x]) => x ? /* @__PURE__ */ n.jsxs(
        ia,
        {
          id: `${e}-${R}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            x
          ]
        },
        `${R}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: de, id: e, "data-testid": "date-input", ...c, children: $.map((R) => {
      const x = R.id || `${e}-${R.name}`, N = a ? `${a}[${R.name}]` : R.name, ue = R.label || R.name.charAt(0).toUpperCase() + R.name.slice(1), P = m[R.name], j = u[R.name] || "";
      let ae = A;
      if (P) {
        const M = `${e}-${R.name}-error`;
        ae = ae ? `${ae} ${M}` : M;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          zr,
          {
            htmlFor: x,
            className: "nhsuk-date-input__label",
            children: ue
          }
        ),
        /* @__PURE__ */ n.jsx(
          Pr,
          {
            id: x,
            name: N,
            value: j,
            className: ee("nhsuk-date-input__input", R.classes, {
              "nhsuk-input--error": P
            }),
            inputMode: R.inputmode,
            autoComplete: R.autocomplete,
            pattern: R.pattern,
            "aria-describedby": ae || void 0,
            hasError: !!P,
            onChange: (M) => y(R.name, M.target.value),
            onBlur: () => L(R.name)
          }
        )
      ] }, R.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: X, children: s ? /* @__PURE__ */ n.jsx(
    Wr,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: A || void 0,
      children: J()
    }
  ) : J() });
}, Ya = {
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
}, qa = jo(Ya), Oo = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Ya, ...t };
  return /* @__PURE__ */ n.jsx(qa.Provider, { value: r, children: e });
}, tm = () => {
  const e = Co(qa);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Uo() {
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
function Go() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Uo(), document.head.appendChild(e);
}
const nm = ({ children: e, theme: t }) => (Ie(() => {
  Go();
}, []), /* @__PURE__ */ n.jsx(Oo, { theme: t, children: e })), Ka = ({
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
  callbacks: u = {},
  isLoading: f = !1,
  showResults: m = !1,
  results: p = [],
  formAttributes: C = {},
  inputAttributes: g = {},
  buttonAttributes: k = {},
  preventDefaultSubmit: q = !1,
  debounceMs: B = 300,
  minQueryLength: _ = 1
}) => {
  const [y, L] = Se(""), [v, $] = Se(!1), A = Ce(void 0), I = Ce(null), b = Ce(null), F = e === "controlled" && o !== void 0, X = F ? o : y, de = re((te) => {
    A.current && clearTimeout(A.current), A.current = setTimeout(() => {
      u.onChange && te.length >= _ && u.onChange(te);
    }, B);
  }, [u.onChange, B, _]), J = re((te) => {
    const E = te.target.value;
    F || L(E), e !== "form" && de(E);
  }, [F, e, de]), R = re((te) => {
    const E = X.trim(), ie = {
      query: E,
      timestamp: Date.now(),
      formData: new FormData(te.currentTarget)
    };
    e === "controlled" || e === "hybrid" && q ? (te.preventDefault(), u.onSearch && E.length >= _ && u.onSearch(ie)) : e === "hybrid" && u.onSearch && E.length >= _ && u.onSearch(ie);
  }, [e, X, u.onSearch, q, _]), x = re(() => {
    $(!0), u.onFocus?.();
  }, [u.onFocus]), N = re(() => {
    $(!1), u.onBlur?.();
  }, [u.onBlur]), ue = re(() => {
    F || L(""), u.onClear?.(), b.current?.focus();
  }, [F, u.onClear]);
  Ie(() => () => {
    A.current && clearTimeout(A.current);
  }, []);
  const P = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: ee("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": f
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), j = () => /* @__PURE__ */ n.jsx(
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
  ), ae = () => !X || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ue,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), M = () => !m || !p.length || !v ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: p.map((te) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: te.href ? /* @__PURE__ */ n.jsxs("a", { href: te.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: te.title }),
    te.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: te.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => u.onSearch?.({ query: te.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: te.title }),
        te.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: te.description })
      ]
    }
  ) }, te.id)) });
  return /* @__PURE__ */ n.jsxs("div", { className: ee("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": v,
    "nhsuk-header__search--has-results": m && p.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: I,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        role: "search",
        onSubmit: R,
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
                ref: b,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: X,
                onChange: J,
                onFocus: x,
                onBlur: N,
                disabled: c || f,
                ...m && p.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...g
              }
            ),
            ae()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || f || e !== "form" && X.length < _,
              ...k,
              children: [
                f ? j() : P(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    M()
  ] });
}, Za = ({
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
  ...u
}) => {
  const [f, m] = Se(!1), [p, C] = Se(!1), [g, k] = Se(i?.items?.length || 0), [q, B] = Se(!1), [_, y] = Se(!1), [L, v] = Se(!1), $ = Ce(null), A = Ce(null), I = Ce(!1), b = Ce(null), F = Ce([]), X = Ce(null);
  Ie(() => {
    typeof window > "u" || (v(!0), B(!0));
  }, []), Ie(() => {
    if (!L || !i?.items?.length) return;
    F.current = i.items;
    const Q = setTimeout(() => {
      $.current && A.current && ue();
    }, 100);
    return () => clearTimeout(Q);
  }, [L, i?.items]);
  const de = r.href && !t.href || r.href && r.href === t.href, J = de ? r.href : t.href, R = ee(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": d === "organisation" || a,
      "nhsuk-header--white": d === "white"
    },
    e
  ), x = ee(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), N = ee(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), ue = re(() => {
    if (!(typeof window > "u" || I.current) && !(!$.current || !A.current || !F.current.length)) {
      I.current = !0;
      try {
        const Q = A.current, V = $.current, K = Q.offsetWidth, U = V.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (U.length === 0 || K === 0) {
          I.current = !1;
          return;
        }
        const se = window.innerWidth < 768, me = se ? 16 : 32, z = me * 2, je = K - z, fe = Array.from(U).map(($e) => $e.offsetWidth), pe = fe.reduce(($e, De) => $e + De, 0), he = se ? 80 : 100, xe = X.current !== null && X.current !== se;
        if (X.current = se, console.log("Overflow check:", {
          containerWidth: K,
          availableContainerWidth: je,
          totalGutters: z,
          gutterSize: me,
          totalWidth: pe,
          mobile: se,
          breakpointChanged: xe,
          itemCount: fe.length,
          measurements: fe
        }), pe <= je)
          C(!1), k(F.current.length);
        else {
          const $e = je - he;
          let De = 0, Ne = 0;
          for (let S = 0; S < fe.length; S++) {
            const W = Ne + fe[S];
            if (W <= $e)
              Ne = W, De = S + 1;
            else
              break;
          }
          De = Math.max(1, De);
          const T = De < fe.length;
          C(T), k(De);
        }
        I.current = !1;
      } catch (Q) {
        console.error("Overflow detection error:", Q), C(!1), k(F.current.length), I.current = !1;
      }
    }
  }, []);
  Ie(() => {
    if (typeof document > "u") return;
    const Q = (V) => {
      V.key === "Escape" && f && m(!1);
    };
    if (f)
      return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
  }, [f]), Ie(() => {
    if (typeof window > "u" || !L) return;
    const Q = () => {
      f && (m(!1), y(!1)), b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        F.current.length > 0 && ue();
      }, 250);
    };
    let V = null, K = null;
    return window.matchMedia && (V = window.matchMedia("(max-width: 767px)"), K = () => {
      F.current.length > 0 && setTimeout(() => ue(), 50);
    }, V.addEventListener ? V.addEventListener("change", K) : V.addListener(K)), window.addEventListener("resize", Q), () => {
      window.removeEventListener("resize", Q), V && K && (V.removeEventListener ? V.removeEventListener("change", K) : V.removeListener(K)), b.current && clearTimeout(b.current);
    };
  }, [L, f, ue]), Ie(() => {
    if (typeof document > "u") return;
    const Q = (V) => {
      const K = V.target, U = $.current?.contains(K);
      f && !U && m(!1);
    };
    if (f)
      return document.addEventListener("mousedown", Q), () => document.removeEventListener("mousedown", Q);
  }, [f]);
  const P = (Q) => {
    Q && (Q.preventDefault(), Q.stopPropagation());
    const V = !f;
    m(V), V ? setTimeout(() => {
      y(!0);
    }, 50) : y(!1);
  }, j = () => /* @__PURE__ */ n.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": t.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ n.jsx("title", { children: t.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), ae = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : j(), M = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, te = (Q, V) => Q ? V ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: V, children: Q }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: Q }) : null, E = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), ie = (Q) => {
    if (Q.active || Q.current) {
      const V = Q.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: Q.html } }) : Q.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: V });
    }
    return Q.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: Q.html } }) : Q.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: R,
      role: "banner",
      "data-module": "nhsuk-header",
      ...c,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: x, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            J ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: J, children: [
              ae(),
              M(),
              de && te(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              ae(),
              M(),
              de && te(r.text)
            ] }),
            r.text && !de && te(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx(Ka, { ...o }),
          /* @__PURE__ */ n.jsx(
            Hr,
            {
              ...s,
              variant: d === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: N,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: ee(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !q && L,
                    "nhsuk-header__navigation-container--ssr": !L
                  },
                  l
                ),
                ref: A,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: $, children: [
                  (L ? i.items.slice(0, g) : i.items).map((Q, V) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: ee(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": Q.active || Q.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !L && V >= 4
                          // Mark items that would be hidden on client
                        },
                        Q.className
                      ),
                      ...Q.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: Q.href,
                          ...Q.active || Q.current ? {
                            "aria-current": Q.current ? "page" : "true"
                          } : {},
                          children: ie(Q)
                        }
                      )
                    },
                    V
                  )),
                  L && p && g < i.items.length && /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ n.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: P,
                          type: "button",
                          children: [
                            /* @__PURE__ */ n.jsx("span", { children: "More" }),
                            E()
                          ]
                        }
                      )
                    }
                  )
                ] })
              }
            )
          }
        ),
        L && i && i.items && i.items.length > 0 && f && _ && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !_,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(g).map((Q, V) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: ee(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": Q.active || Q.current
                  }
                ),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: Q.href,
                    ...Q.active || Q.current ? {
                      "aria-current": Q.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      m(!1), y(!1);
                    },
                    children: ie(Q)
                  }
                )
              },
              `overflow-${g + V}`
            )) })
          }
        )
      ]
    }
  );
}, rm = ({
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
  ...u
}) => {
  const f = r.href && !t.href || r.href && r.href === t.href, m = f ? r.href : t.href, p = ee(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": d === "organisation" || a,
      "nhsuk-header--white": d === "white"
    },
    e
  ), C = ee(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), g = ee(
    "nhsuk-header__navigation",
    i?.className
  ), k = () => /* @__PURE__ */ n.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": t.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ n.jsx("title", { children: t.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), q = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS",
      role: "img",
      "aria-label": t.ariaLabel || "NHS"
    }
  ) : k(), B = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, _ = (v, $) => v ? $ ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: $, children: v }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: v }) : null, y = () => !i?.items || i.items.length === 0 ? null : i.items.map((v, $) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: v.href,
          ...v.attributes || {},
          children: v.text
        }
      )
    },
    v.href || $
  )), L = () => o ? /* @__PURE__ */ n.jsx(Ka, { ...o }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: p,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...c,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: C, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            m ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: m, children: [
              q(),
              B(),
              f && _(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              q(),
              B(),
              f && _(r.text)
            ] }),
            r.text && !f && _(r.text, r.href)
          ] }),
          (d === "organisation" || a) && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            a && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name", children: a.name }),
              a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: a.descriptor })
            ] }),
            L()
          ] }),
          d !== "organisation" && !a && L(),
          /* @__PURE__ */ n.jsx(
            Hr,
            {
              ...s,
              variant: d === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: g,
            id: "header-navigation",
            role: "navigation",
            "aria-label": i.ariaLabel || "Primary navigation",
            "data-navigation-enhanced": "false",
            children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-header__navigation-list",
                "data-navigation-list": "true",
                children: y()
              }
            ) })
          }
        )
      ]
    }
  );
}, am = ({
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
  maxVisibleItems: u = 5,
  // New prop to control CSS-based overflow
  ...f
}) => {
  const m = r.href && !t.href || r.href && r.href === t.href, p = m ? r.href : t.href, C = ee(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": d === "organisation" || a,
      "nhsuk-header--white": d === "white"
    },
    e
  ), g = ee(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), k = ee(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), q = () => /* @__PURE__ */ n.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": t.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ n.jsx("title", { children: t.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), B = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : q(), _ = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, y = (v, $) => v ? $ ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: $, children: v }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: v }) : null, L = (v) => {
    if (v.active || v.current) {
      const $ = v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: $ });
    }
    return v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: C,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...c,
      ...f,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: g, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            p ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: p, children: [
              B(),
              _(),
              m && y(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              B(),
              _(),
              m && y(r.text)
            ] }),
            r.text && !m && y(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            Hr,
            {
              ...s,
              variant: d === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: k,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: ee(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, u).map((v, $) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: ee(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": v.active || v.current
                        },
                        v.className
                      ),
                      ...v.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: v.href,
                          ...v.active || v.current ? {
                            "aria-current": v.current ? "page" : "true"
                          } : {},
                          children: L(v)
                        }
                      )
                    },
                    $
                  )),
                  i.items.length > u && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more nhsuk-header__navigation-item--static", children: /* @__PURE__ */ n.jsxs("details", { className: "nhsuk-header__navigation-details", children: [
                    /* @__PURE__ */ n.jsxs("summary", { className: "nhsuk-header__navigation-summary", children: [
                      /* @__PURE__ */ n.jsx("span", { children: "More" }),
                      /* @__PURE__ */ n.jsx(
                        "svg",
                        {
                          className: "nhsuk-icon nhsuk-icon__chevron-down",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          focusable: "false",
                          children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(u).map((v, $) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: ee(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": v.active || v.current
                          }
                        ),
                        children: /* @__PURE__ */ n.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: v.href,
                            ...v.active || v.current ? {
                              "aria-current": v.current ? "page" : "true"
                            } : {},
                            children: L(v)
                          }
                        )
                      },
                      `overflow-${u + $}`
                    )) })
                  ] }) })
                ] })
              }
            )
          }
        )
      ]
    }
  );
}, Vo = ({
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
  const u = [
    "nhsuk-hero",
    s && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    s && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    i,
    s ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), m = [
    "nhsuk-hero__heading",
    r,
    !d && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), p = d || e || a || o, C = () => {
    if (!e) return null;
    const g = { className: m };
    switch (t) {
      case 1:
        return /* @__PURE__ */ n.jsx("h1", { ...g, children: e });
      case 2:
        return /* @__PURE__ */ n.jsx("h2", { ...g, children: e });
      case 3:
        return /* @__PURE__ */ n.jsx("h3", { ...g, children: e });
      case 4:
        return /* @__PURE__ */ n.jsx("h4", { ...g, children: e });
      case 5:
        return /* @__PURE__ */ n.jsx("h5", { ...g, children: e });
      case 6:
        return /* @__PURE__ */ n.jsx("h6", { ...g, children: e });
      default:
        return /* @__PURE__ */ n.jsx("h1", { ...g, children: e });
    }
  };
  return /* @__PURE__ */ n.jsxs(
    "section",
    {
      className: u,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: p && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          C(),
          d || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && p && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          C(),
          d || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Vo.displayName = "Hero";
const Ja = ({
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
  containerStyle: u
}) => {
  const f = (p, C = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: ee("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": C
      }),
      children: /* @__PURE__ */ n.jsx(
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
  ), m = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: ee("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: ee("nhsuk-footer", e), style: c, children: m ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((p) => f(p)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((p) => f(p)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((p) => f(p)) }),
              o && o.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((p) => f(p)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((p) => f(p, !0)),
              (r || []).map((p) => f(p, !0)),
              (a || []).map((p) => f(p, !0)),
              (o || []).map((p) => f(p, !0))
            ] })
          ) }),
          !m && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    m && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function ln(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Yo(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Or(e) {
  let t, r, a;
  e.length !== 2 ? (t = ln, r = (l, d) => ln(e(l), d), a = (l, d) => e(l) - d) : (t = e === ln || e === Yo ? e : qo, r = e, a = e);
  function o(l, d, c = 0, u = l.length) {
    if (c < u) {
      if (t(d, d) !== 0) return u;
      do {
        const f = c + u >>> 1;
        r(l[f], d) < 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function s(l, d, c = 0, u = l.length) {
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
    const f = o(l, d, c, u - 1);
    return f > c && a(l[f - 1], d) > -a(l[f], d) ? f - 1 : f;
  }
  return { left: o, center: i, right: s };
}
function qo() {
  return 0;
}
function Ko(e) {
  return e === null ? NaN : +e;
}
const Zo = Or(ln), Jo = Zo.right;
Or(Ko).center;
const Xo = Math.sqrt(50), Qo = Math.sqrt(10), ei = Math.sqrt(2);
function Xa(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Xo ? 10 : s >= Qo ? 5 : s >= ei ? 2 : 1;
  let l, d, c;
  return o < 0 ? (c = Math.pow(10, -o) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, o) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= r && r < 2 ? Xa(e, t, r * 2) : [l, d, c];
}
function la(e, t, r) {
  return t = +t, e = +e, r = +r, Xa(e, t, r)[2];
}
function ca(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? la(t, e, r) : la(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function ti(e, t) {
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
function Ur(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Qa(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function Qt() {
}
var Zt = 0.7, dn = 1 / Zt, Mt = "\\s*([+-]?\\d+)\\s*", Jt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ni = /^#([0-9a-f]{3,8})$/, ri = new RegExp(`^rgb\\(${Mt},${Mt},${Mt}\\)$`), ai = new RegExp(`^rgb\\(${nt},${nt},${nt}\\)$`), si = new RegExp(`^rgba\\(${Mt},${Mt},${Mt},${Jt}\\)$`), oi = new RegExp(`^rgba\\(${nt},${nt},${nt},${Jt}\\)$`), ii = new RegExp(`^hsl\\(${Jt},${nt},${nt}\\)$`), li = new RegExp(`^hsla\\(${Jt},${nt},${nt},${Jt}\\)$`), da = {
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
Ur(Qt, Xt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ua,
  // Deprecated! Use color.formatHex.
  formatHex: ua,
  formatHex8: ci,
  formatHsl: di,
  formatRgb: ha,
  toString: ha
});
function ua() {
  return this.rgb().formatHex();
}
function ci() {
  return this.rgb().formatHex8();
}
function di() {
  return es(this).formatHsl();
}
function ha() {
  return this.rgb().formatRgb();
}
function Xt(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = ni.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? fa(t) : r === 3 ? new Ke(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? an(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? an(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ri.exec(e)) ? new Ke(t[1], t[2], t[3], 1) : (t = ai.exec(e)) ? new Ke(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = si.exec(e)) ? an(t[1], t[2], t[3], t[4]) : (t = oi.exec(e)) ? an(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ii.exec(e)) ? ga(t[1], t[2] / 100, t[3] / 100, 1) : (t = li.exec(e)) ? ga(t[1], t[2] / 100, t[3] / 100, t[4]) : da.hasOwnProperty(e) ? fa(da[e]) : e === "transparent" ? new Ke(NaN, NaN, NaN, 0) : null;
}
function fa(e) {
  return new Ke(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function an(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new Ke(e, t, r, a);
}
function ui(e) {
  return e instanceof Qt || (e = Xt(e)), e ? (e = e.rgb(), new Ke(e.r, e.g, e.b, e.opacity)) : new Ke();
}
function hr(e, t, r, a) {
  return arguments.length === 1 ? ui(e) : new Ke(e, t, r, a ?? 1);
}
function Ke(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
Ur(Ke, hr, Qa(Qt, {
  brighter(e) {
    return e = e == null ? dn : Math.pow(dn, e), new Ke(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Zt : Math.pow(Zt, e), new Ke(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ke(jt(this.r), jt(this.g), jt(this.b), un(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ma,
  // Deprecated! Use color.formatHex.
  formatHex: ma,
  formatHex8: hi,
  formatRgb: pa,
  toString: pa
}));
function ma() {
  return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}`;
}
function hi() {
  return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}${Ct((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function pa() {
  const e = un(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${jt(this.r)}, ${jt(this.g)}, ${jt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function un(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function jt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ct(e) {
  return e = jt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ga(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Xe(e, t, r, a);
}
function es(e) {
  if (e instanceof Xe) return new Xe(e.h, e.s, e.l, e.opacity);
  if (e instanceof Qt || (e = Xt(e)), !e) return new Xe();
  if (e instanceof Xe) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, d = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= d < 0.5 ? s + o : 2 - s - o, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new Xe(i, l, d, e.opacity);
}
function fi(e, t, r, a) {
  return arguments.length === 1 ? es(e) : new Xe(e, t, r, a ?? 1);
}
function Xe(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
Ur(Xe, fi, Qa(Qt, {
  brighter(e) {
    return e = e == null ? dn : Math.pow(dn, e), new Xe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Zt : Math.pow(Zt, e), new Xe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new Ke(
      nr(e >= 240 ? e - 240 : e + 120, o, a),
      nr(e, o, a),
      nr(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Xe(ba(this.h), sn(this.s), sn(this.l), un(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = un(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ba(this.h)}, ${sn(this.s) * 100}%, ${sn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ba(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function sn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function nr(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Gr = (e) => () => e;
function mi(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function pi(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function gi(e) {
  return (e = +e) == 1 ? ts : function(t, r) {
    return r - t ? pi(t, r, e) : Gr(isNaN(t) ? r : t);
  };
}
function ts(e, t) {
  var r = t - e;
  return r ? mi(e, r) : Gr(isNaN(e) ? t : e);
}
const xa = (function e(t) {
  var r = gi(t);
  function a(o, s) {
    var i = r((o = hr(o)).r, (s = hr(s)).r), l = r(o.g, s.g), d = r(o.b, s.b), c = ts(o.opacity, s.opacity);
    return function(u) {
      return o.r = i(u), o.g = l(u), o.b = d(u), o.opacity = c(u), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function bi(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function xi(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function yi(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = Vr(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function vi(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function hn(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function _i(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = Vr(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var fr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rr = new RegExp(fr.source, "g");
function ki(e) {
  return function() {
    return e;
  };
}
function wi(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Si(e, t) {
  var r = fr.lastIndex = rr.lastIndex = 0, a, o, s, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = fr.exec(e)) && (o = rr.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, d.push({ i, x: hn(a, o) })), r = rr.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? d[0] ? wi(d[0].x) : ki(t) : (t = d.length, function(c) {
    for (var u = 0, f; u < t; ++u) l[(f = d[u]).i] = f.x(c);
    return l.join("");
  });
}
function Vr(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? Gr(t) : (r === "number" ? hn : r === "string" ? (a = Xt(t)) ? (t = a, xa) : Si : t instanceof Xt ? xa : t instanceof Date ? vi : xi(t) ? bi : Array.isArray(t) ? yi : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? _i : hn)(e, t);
}
function Ci(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function ji(e) {
  return function() {
    return e;
  };
}
function Ni(e) {
  return +e;
}
var ya = [0, 1];
function Et(e) {
  return e;
}
function mr(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : ji(isNaN(t) ? NaN : 0.5);
}
function Ti(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Di(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = mr(o, a), s = r(i, s)) : (a = mr(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function Ii(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = mr(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var d = Jo(e, l, 1, a) - 1;
    return s[d](o[d](l));
  };
}
function Ri(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Fi() {
  var e = ya, t = ya, r = Vr, a, o, s, i = Et, l, d, c;
  function u() {
    var m = Math.min(e.length, t.length);
    return i !== Et && (i = Ti(e[0], e[m - 1])), l = m > 2 ? Ii : Di, d = c = null, f;
  }
  function f(m) {
    return m == null || isNaN(m = +m) ? s : (d || (d = l(e.map(a), t, r)))(a(i(m)));
  }
  return f.invert = function(m) {
    return i(o((c || (c = l(t, e.map(a), hn)))(m)));
  }, f.domain = function(m) {
    return arguments.length ? (e = Array.from(m, Ni), u()) : e.slice();
  }, f.range = function(m) {
    return arguments.length ? (t = Array.from(m), u()) : t.slice();
  }, f.rangeRound = function(m) {
    return t = Array.from(m), r = Ci, u();
  }, f.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : Et, u()) : i !== Et;
  }, f.interpolate = function(m) {
    return arguments.length ? (r = m, u()) : r;
  }, f.unknown = function(m) {
    return arguments.length ? (s = m, f) : s;
  }, function(m, p) {
    return a = m, o = p, u();
  };
}
function Bi() {
  return Fi()(Et, Et);
}
function Li(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const ar = /* @__PURE__ */ new Date(), sr = /* @__PURE__ */ new Date();
function We(e, t, r, a) {
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
  }, o.filter = (s) => We((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), r && (o.count = (s, i) => (ar.setTime(+s), sr.setTime(+i), e(ar), e(sr), Math.floor(r(ar, sr))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const fn = We(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
fn.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? We((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : fn);
fn.range;
const gt = 1e3, Je = gt * 60, bt = Je * 60, yt = bt * 24, Yr = yt * 7, va = yt * 30, or = yt * 365, At = We((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * gt);
}, (e, t) => (t - e) / gt, (e) => e.getUTCSeconds());
At.range;
const qr = We((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * gt);
}, (e, t) => {
  e.setTime(+e + t * Je);
}, (e, t) => (t - e) / Je, (e) => e.getMinutes());
qr.range;
const Ei = We((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Je);
}, (e, t) => (t - e) / Je, (e) => e.getUTCMinutes());
Ei.range;
const Kr = We((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * gt - e.getMinutes() * Je);
}, (e, t) => {
  e.setTime(+e + t * bt);
}, (e, t) => (t - e) / bt, (e) => e.getHours());
Kr.range;
const Ai = We((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * bt);
}, (e, t) => (t - e) / bt, (e) => e.getUTCHours());
Ai.range;
const en = We(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Je) / yt,
  (e) => e.getDate() - 1
);
en.range;
const Zr = We((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / yt, (e) => e.getUTCDate() - 1);
Zr.range;
const Mi = We((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / yt, (e) => Math.floor(e / yt));
Mi.range;
function Dt(e) {
  return We((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Je) / Yr);
}
const Un = Dt(0), mn = Dt(1), $i = Dt(2), Hi = Dt(3), $t = Dt(4), Pi = Dt(5), zi = Dt(6);
Un.range;
mn.range;
$i.range;
Hi.range;
$t.range;
Pi.range;
zi.range;
function It(e) {
  return We((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Yr);
}
const ns = It(0), pn = It(1), Wi = It(2), Oi = It(3), Ht = It(4), Ui = It(5), Gi = It(6);
ns.range;
pn.range;
Wi.range;
Oi.range;
Ht.range;
Ui.range;
Gi.range;
const Jr = We((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Jr.range;
const Vi = We((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Vi.range;
const vt = We((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
vt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : We((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
vt.range;
const Tt = We((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Tt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : We((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Tt.range;
function Yi(e, t, r, a, o, s) {
  const i = [
    [At, 1, gt],
    [At, 5, 5 * gt],
    [At, 15, 15 * gt],
    [At, 30, 30 * gt],
    [s, 1, Je],
    [s, 5, 5 * Je],
    [s, 15, 15 * Je],
    [s, 30, 30 * Je],
    [o, 1, bt],
    [o, 3, 3 * bt],
    [o, 6, 6 * bt],
    [o, 12, 12 * bt],
    [a, 1, yt],
    [a, 2, 2 * yt],
    [r, 1, Yr],
    [t, 1, va],
    [t, 3, 3 * va],
    [e, 1, or]
  ];
  function l(c, u, f) {
    const m = u < c;
    m && ([c, u] = [u, c]);
    const p = f && typeof f.range == "function" ? f : d(c, u, f), C = p ? p.range(c, +u + 1) : [];
    return m ? C.reverse() : C;
  }
  function d(c, u, f) {
    const m = Math.abs(u - c) / f, p = Or(([, , k]) => k).right(i, m);
    if (p === i.length) return e.every(ca(c / or, u / or, f));
    if (p === 0) return fn.every(Math.max(ca(c, u, f), 1));
    const [C, g] = i[m / i[p - 1][2] < i[p][2] / m ? p - 1 : p];
    return C.every(g);
  }
  return [l, d];
}
const [qi, Ki] = Yi(vt, Jr, Un, en, Kr, qr);
function ir(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function lr(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Gt(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Zi(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = Vt(o), u = Yt(o), f = Vt(s), m = Yt(s), p = Vt(i), C = Yt(i), g = Vt(l), k = Yt(l), q = Vt(d), B = Yt(d), _ = {
    a: N,
    A: ue,
    b: P,
    B: j,
    c: null,
    d: ja,
    e: ja,
    f: yl,
    g: Dl,
    G: Rl,
    H: gl,
    I: bl,
    j: xl,
    L: rs,
    m: vl,
    M: _l,
    p: ae,
    q: M,
    Q: Da,
    s: Ia,
    S: kl,
    u: wl,
    U: Sl,
    V: Cl,
    w: jl,
    W: Nl,
    x: null,
    X: null,
    y: Tl,
    Y: Il,
    Z: Fl,
    "%": Ta
  }, y = {
    a: te,
    A: E,
    b: ie,
    B: Q,
    c: null,
    d: Na,
    e: Na,
    f: Al,
    g: Vl,
    G: ql,
    H: Bl,
    I: Ll,
    j: El,
    L: ss,
    m: Ml,
    M: $l,
    p: V,
    q: K,
    Q: Da,
    s: Ia,
    S: Hl,
    u: Pl,
    U: zl,
    V: Wl,
    w: Ol,
    W: Ul,
    x: null,
    X: null,
    y: Gl,
    Y: Yl,
    Z: Kl,
    "%": Ta
  }, L = {
    a: b,
    A: F,
    b: X,
    B: de,
    c: J,
    d: Sa,
    e: Sa,
    f: hl,
    g: wa,
    G: ka,
    H: Ca,
    I: Ca,
    j: ll,
    L: ul,
    m: il,
    M: cl,
    p: I,
    q: ol,
    Q: ml,
    s: pl,
    S: dl,
    u: tl,
    U: nl,
    V: rl,
    w: el,
    W: al,
    x: R,
    X: x,
    y: wa,
    Y: ka,
    Z: sl,
    "%": fl
  };
  _.x = v(r, _), _.X = v(a, _), _.c = v(t, _), y.x = v(r, y), y.X = v(a, y), y.c = v(t, y);
  function v(U, se) {
    return function(me) {
      var z = [], je = -1, fe = 0, pe = U.length, he, xe, $e;
      for (me instanceof Date || (me = /* @__PURE__ */ new Date(+me)); ++je < pe; )
        U.charCodeAt(je) === 37 && (z.push(U.slice(fe, je)), (xe = _a[he = U.charAt(++je)]) != null ? he = U.charAt(++je) : xe = he === "e" ? " " : "0", ($e = se[he]) && (he = $e(me, xe)), z.push(he), fe = je + 1);
      return z.push(U.slice(fe, je)), z.join("");
    };
  }
  function $(U, se) {
    return function(me) {
      var z = Gt(1900, void 0, 1), je = A(z, U, me += "", 0), fe, pe;
      if (je != me.length) return null;
      if ("Q" in z) return new Date(z.Q);
      if ("s" in z) return new Date(z.s * 1e3 + ("L" in z ? z.L : 0));
      if (se && !("Z" in z) && (z.Z = 0), "p" in z && (z.H = z.H % 12 + z.p * 12), z.m === void 0 && (z.m = "q" in z ? z.q : 0), "V" in z) {
        if (z.V < 1 || z.V > 53) return null;
        "w" in z || (z.w = 1), "Z" in z ? (fe = lr(Gt(z.y, 0, 1)), pe = fe.getUTCDay(), fe = pe > 4 || pe === 0 ? pn.ceil(fe) : pn(fe), fe = Zr.offset(fe, (z.V - 1) * 7), z.y = fe.getUTCFullYear(), z.m = fe.getUTCMonth(), z.d = fe.getUTCDate() + (z.w + 6) % 7) : (fe = ir(Gt(z.y, 0, 1)), pe = fe.getDay(), fe = pe > 4 || pe === 0 ? mn.ceil(fe) : mn(fe), fe = en.offset(fe, (z.V - 1) * 7), z.y = fe.getFullYear(), z.m = fe.getMonth(), z.d = fe.getDate() + (z.w + 6) % 7);
      } else ("W" in z || "U" in z) && ("w" in z || (z.w = "u" in z ? z.u % 7 : "W" in z ? 1 : 0), pe = "Z" in z ? lr(Gt(z.y, 0, 1)).getUTCDay() : ir(Gt(z.y, 0, 1)).getDay(), z.m = 0, z.d = "W" in z ? (z.w + 6) % 7 + z.W * 7 - (pe + 5) % 7 : z.w + z.U * 7 - (pe + 6) % 7);
      return "Z" in z ? (z.H += z.Z / 100 | 0, z.M += z.Z % 100, lr(z)) : ir(z);
    };
  }
  function A(U, se, me, z) {
    for (var je = 0, fe = se.length, pe = me.length, he, xe; je < fe; ) {
      if (z >= pe) return -1;
      if (he = se.charCodeAt(je++), he === 37) {
        if (he = se.charAt(je++), xe = L[he in _a ? se.charAt(je++) : he], !xe || (z = xe(U, me, z)) < 0) return -1;
      } else if (he != me.charCodeAt(z++))
        return -1;
    }
    return z;
  }
  function I(U, se, me) {
    var z = c.exec(se.slice(me));
    return z ? (U.p = u.get(z[0].toLowerCase()), me + z[0].length) : -1;
  }
  function b(U, se, me) {
    var z = p.exec(se.slice(me));
    return z ? (U.w = C.get(z[0].toLowerCase()), me + z[0].length) : -1;
  }
  function F(U, se, me) {
    var z = f.exec(se.slice(me));
    return z ? (U.w = m.get(z[0].toLowerCase()), me + z[0].length) : -1;
  }
  function X(U, se, me) {
    var z = q.exec(se.slice(me));
    return z ? (U.m = B.get(z[0].toLowerCase()), me + z[0].length) : -1;
  }
  function de(U, se, me) {
    var z = g.exec(se.slice(me));
    return z ? (U.m = k.get(z[0].toLowerCase()), me + z[0].length) : -1;
  }
  function J(U, se, me) {
    return A(U, t, se, me);
  }
  function R(U, se, me) {
    return A(U, r, se, me);
  }
  function x(U, se, me) {
    return A(U, a, se, me);
  }
  function N(U) {
    return i[U.getDay()];
  }
  function ue(U) {
    return s[U.getDay()];
  }
  function P(U) {
    return d[U.getMonth()];
  }
  function j(U) {
    return l[U.getMonth()];
  }
  function ae(U) {
    return o[+(U.getHours() >= 12)];
  }
  function M(U) {
    return 1 + ~~(U.getMonth() / 3);
  }
  function te(U) {
    return i[U.getUTCDay()];
  }
  function E(U) {
    return s[U.getUTCDay()];
  }
  function ie(U) {
    return d[U.getUTCMonth()];
  }
  function Q(U) {
    return l[U.getUTCMonth()];
  }
  function V(U) {
    return o[+(U.getUTCHours() >= 12)];
  }
  function K(U) {
    return 1 + ~~(U.getUTCMonth() / 3);
  }
  return {
    format: function(U) {
      var se = v(U += "", _);
      return se.toString = function() {
        return U;
      }, se;
    },
    parse: function(U) {
      var se = $(U += "", !1);
      return se.toString = function() {
        return U;
      }, se;
    },
    utcFormat: function(U) {
      var se = v(U += "", y);
      return se.toString = function() {
        return U;
      }, se;
    },
    utcParse: function(U) {
      var se = $(U += "", !0);
      return se.toString = function() {
        return U;
      }, se;
    }
  };
}
var _a = { "-": "", _: " ", 0: "0" }, Ue = /^\s*\d+/, Ji = /^%/, Xi = /[\\^$*+?|[\]().{}]/g;
function Te(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function Qi(e) {
  return e.replace(Xi, "\\$&");
}
function Vt(e) {
  return new RegExp("^(?:" + e.map(Qi).join("|") + ")", "i");
}
function Yt(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function el(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function tl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function nl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function rl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function al(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function ka(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function wa(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function sl(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function ol(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function il(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function Sa(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function ll(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function Ca(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function cl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function dl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function ul(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function hl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function fl(e, t, r) {
  var a = Ji.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function ml(e, t, r) {
  var a = Ue.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function pl(e, t, r) {
  var a = Ue.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function ja(e, t) {
  return Te(e.getDate(), t, 2);
}
function gl(e, t) {
  return Te(e.getHours(), t, 2);
}
function bl(e, t) {
  return Te(e.getHours() % 12 || 12, t, 2);
}
function xl(e, t) {
  return Te(1 + en.count(vt(e), e), t, 3);
}
function rs(e, t) {
  return Te(e.getMilliseconds(), t, 3);
}
function yl(e, t) {
  return rs(e, t) + "000";
}
function vl(e, t) {
  return Te(e.getMonth() + 1, t, 2);
}
function _l(e, t) {
  return Te(e.getMinutes(), t, 2);
}
function kl(e, t) {
  return Te(e.getSeconds(), t, 2);
}
function wl(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Sl(e, t) {
  return Te(Un.count(vt(e) - 1, e), t, 2);
}
function as(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? $t(e) : $t.ceil(e);
}
function Cl(e, t) {
  return e = as(e), Te($t.count(vt(e), e) + (vt(e).getDay() === 4), t, 2);
}
function jl(e) {
  return e.getDay();
}
function Nl(e, t) {
  return Te(mn.count(vt(e) - 1, e), t, 2);
}
function Tl(e, t) {
  return Te(e.getFullYear() % 100, t, 2);
}
function Dl(e, t) {
  return e = as(e), Te(e.getFullYear() % 100, t, 2);
}
function Il(e, t) {
  return Te(e.getFullYear() % 1e4, t, 4);
}
function Rl(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? $t(e) : $t.ceil(e), Te(e.getFullYear() % 1e4, t, 4);
}
function Fl(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Te(t / 60 | 0, "0", 2) + Te(t % 60, "0", 2);
}
function Na(e, t) {
  return Te(e.getUTCDate(), t, 2);
}
function Bl(e, t) {
  return Te(e.getUTCHours(), t, 2);
}
function Ll(e, t) {
  return Te(e.getUTCHours() % 12 || 12, t, 2);
}
function El(e, t) {
  return Te(1 + Zr.count(Tt(e), e), t, 3);
}
function ss(e, t) {
  return Te(e.getUTCMilliseconds(), t, 3);
}
function Al(e, t) {
  return ss(e, t) + "000";
}
function Ml(e, t) {
  return Te(e.getUTCMonth() + 1, t, 2);
}
function $l(e, t) {
  return Te(e.getUTCMinutes(), t, 2);
}
function Hl(e, t) {
  return Te(e.getUTCSeconds(), t, 2);
}
function Pl(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function zl(e, t) {
  return Te(ns.count(Tt(e) - 1, e), t, 2);
}
function os(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ht(e) : Ht.ceil(e);
}
function Wl(e, t) {
  return e = os(e), Te(Ht.count(Tt(e), e) + (Tt(e).getUTCDay() === 4), t, 2);
}
function Ol(e) {
  return e.getUTCDay();
}
function Ul(e, t) {
  return Te(pn.count(Tt(e) - 1, e), t, 2);
}
function Gl(e, t) {
  return Te(e.getUTCFullYear() % 100, t, 2);
}
function Vl(e, t) {
  return e = os(e), Te(e.getUTCFullYear() % 100, t, 2);
}
function Yl(e, t) {
  return Te(e.getUTCFullYear() % 1e4, t, 4);
}
function ql(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ht(e) : Ht.ceil(e), Te(e.getUTCFullYear() % 1e4, t, 4);
}
function Kl() {
  return "+0000";
}
function Ta() {
  return "%";
}
function Da(e) {
  return +e;
}
function Ia(e) {
  return Math.floor(+e / 1e3);
}
var Bt, is;
Zl({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Zl(e) {
  return Bt = Zi(e), is = Bt.format, Bt.parse, Bt.utcFormat, Bt.utcParse, Bt;
}
function Jl(e) {
  return new Date(e);
}
function Xl(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ls(e, t, r, a, o, s, i, l, d, c) {
  var u = Bi(), f = u.invert, m = u.domain, p = c(".%L"), C = c(":%S"), g = c("%I:%M"), k = c("%I %p"), q = c("%a %d"), B = c("%b %d"), _ = c("%B"), y = c("%Y");
  function L(v) {
    return (d(v) < v ? p : l(v) < v ? C : i(v) < v ? g : s(v) < v ? k : a(v) < v ? o(v) < v ? q : B : r(v) < v ? _ : y)(v);
  }
  return u.invert = function(v) {
    return new Date(f(v));
  }, u.domain = function(v) {
    return arguments.length ? m(Array.from(v, Xl)) : m().map(Jl);
  }, u.ticks = function(v) {
    var $ = m();
    return e($[0], $[$.length - 1], v ?? 10);
  }, u.tickFormat = function(v, $) {
    return $ == null ? L : c($);
  }, u.nice = function(v) {
    var $ = m();
    return (!v || typeof v.range != "function") && (v = t($[0], $[$.length - 1], v ?? 10)), v ? m(Li($, v)) : u;
  }, u.copy = function() {
    return Ri(u, ls(e, t, r, a, o, s, i, l, d, c));
  }, u;
}
function Ql() {
  return ti.apply(ls(qi, Ki, vt, Jr, Un, en, Kr, qr, At, is).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function ec({
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
  const c = Ce(null), [u, f] = Se(!1), [m, p] = Se(!1), C = t(e.start), g = t(e.end), k = Math.max(g - C, 20), q = () => {
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
  }, B = e.progress ? k * e.progress / 100 : 0, _ = () => {
    r?.(e);
  }, y = () => {
    a?.(e);
  }, L = (X) => {
    X.key === "Enter" ? (X.preventDefault(), _()) : X.key === " " && (X.preventDefault(), y());
  }, v = () => {
    f(!0);
  }, $ = () => {
    f(!1);
  }, A = () => {
    p(!0), l?.();
  }, I = () => {
    p(!1);
  }, b = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (m || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), F = {
    "--task-left": `${C}px`,
    "--task-width": `${k}px`,
    "--task-color": q(),
    left: `${C}px`,
    width: `${k}px`,
    backgroundColor: q()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": s,
      className: b,
      style: F,
      onClick: _,
      onDoubleClick: y,
      onKeyDown: L,
      onMouseDown: v,
      onMouseUp: $,
      onFocus: A,
      onBlur: I,
      "aria-label": d || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${B}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function tc({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let p = e.getTime(); p <= t.getTime(); p += 864e5)
    a.push(new Date(p));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = Se(-1), d = Ce(null), c = (p) => {
    if (p.key === "ArrowLeft") {
      p.preventDefault();
      const C = Math.max(0, i === -1 ? 0 : i - 1);
      l(C), m(C);
    } else if (p.key === "ArrowRight") {
      p.preventDefault();
      const C = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(C), m(C);
    } else if (p.key === "ArrowDown") {
      p.preventDefault();
      const C = document.querySelector(".gantt-row .timeline-container");
      C && C.focus();
    } else if (p.key === "Home")
      p.preventDefault(), l(0), m(0);
    else if (p.key === "End") {
      p.preventDefault();
      const C = a.length - 1;
      l(C), m(C);
    }
  }, u = (p) => {
    if (p.key === "ArrowDown") {
      p.preventDefault();
      const C = document.querySelector(".gantt-row .resource-label");
      C && C.focus();
    } else if (p.key === "ArrowRight") {
      p.preventDefault();
      const C = d.current;
      C && C.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (p) => {
    const C = d.current?.querySelector(`[data-date-index="${p}"]`);
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
            children: a.map((p, C) => {
              const g = p.getTime() === s.getTime(), k = i === C;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": C,
                  className: `date-column ${g ? "today" : ""} ${k ? "focused" : ""}`,
                  tabIndex: k ? 0 : -1,
                  role: "button",
                  "aria-label": `${p.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
                  onFocus: () => l(C),
                  onKeyDown: c,
                  children: p.toLocaleDateString("en-GB", {
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
function nc({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, d] = Se(!1), [c, u] = Se(-1), f = Ce(null);
  Ie(() => {
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
          g.preventDefault(), s === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          g.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`)?.focus();
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
        const k = Math.max(0, c - 1);
        u(k), f.current?.querySelector(`[data-task-index="${k}"]`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault();
        const B = Math.min(t.length - 1, c + 1);
        u(B), f.current?.querySelector(`[data-task-index="${B}"]`)?.focus();
        break;
      case "Enter":
        g.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        g.preventDefault(), c >= 0 && o?.(t[c]);
        break;
      case "Escape":
        g.preventDefault(), d(!1), u(-1), f.current?.focus();
        break;
    }
  }, p = (g) => {
    switch (g.key) {
      case "ArrowUp":
        g.preventDefault(), s === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        g.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault(), f.current?.focus();
        break;
    }
  }, C = (g) => {
    l && u(g);
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
            onKeyDown: p,
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
            children: t.map((g, k) => /* @__PURE__ */ n.jsx(
              ec,
              {
                task: g,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && c === k,
                taskIndex: k,
                tabIndex: l && c === k ? 0 : -1,
                onFocus: () => C(k)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function sm({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Ce(null), [l, d] = Se(800), c = Re(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const g = new Date(r);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [r]), u = Re(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const g = new Date(a);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [a]), f = Re(() => Math.ceil((u.getTime() - c.getTime()) / 864e5) + 1, [c, u]);
  Ie(() => {
    if (!i.current) return;
    const g = new ResizeObserver((k) => {
      const q = k[0];
      q && d(Math.max(q.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const m = Re(
    () => Ql().domain([c, u]).range([0, l]),
    [c, u, l]
  ), p = Re(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((k) => {
      const q = g.get(k.resourceId) || [];
      q.push(k), g.set(k.resourceId, q);
    }), g;
  }, [t]), C = (g) => {
    if (g.target === g.currentTarget)
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault();
          const k = i.current?.querySelector(".gantt-row .resource-label");
          k && k.focus();
          break;
        case "Home":
          g.preventDefault();
          const q = i.current?.querySelector(".header-resource");
          q && q.focus();
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
        /* @__PURE__ */ n.jsx(tc, { viewStart: c, viewEnd: u, dateCount: f }),
        /* @__PURE__ */ n.jsx(
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
            children: e.map((g, k) => /* @__PURE__ */ n.jsx(
              nc,
              {
                resource: g,
                tasks: p.get(g.id) || [],
                scale: m,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: k,
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
const gn = ({
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
) }), rc = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const d = () => t ? Ze.Children.toArray(t).filter(
    (k) => Ze.isValidElement(k) && (k.type === gn || k.type?.displayName === "BreadcrumbItem")
  ).map((k) => ({
    text: typeof k.props.children == "string" ? k.props.children : String(k.props.children),
    href: k.props.href,
    active: k.props.active,
    attributes: k.props.attributes
  })) : [], c = () => t ? d() : o && s ? [{ href: o, text: s }] : e, u = () => {
    const g = c();
    if (g && g.length > 0) {
      const k = g.slice().reverse().find((q) => q.href && !q.active);
      if (k)
        return { href: k.href, text: k.text };
    }
    return { text: "Home" };
  }, f = c(), m = u(), p = ee(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), C = a;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: p,
      "aria-label": C,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          Ze.Children.map(t, (g, k) => Ze.isValidElement(g) && (g.type === gn || g.type?.displayName === "BreadcrumbItem") ? Ze.cloneElement(g, { key: k }) : null)
        ) : (
          // Render from items array
          f?.filter((g) => g.active || !!g.href).map((g, k) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: g.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...g.attributes || {},
              children: g.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: g.href,
              role: "link",
              ...g.attributes || {},
              children: g.text
            }
          ) }, k))
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
}, ac = rc;
ac.Item = gn;
gn.displayName = "BreadcrumbItem";
const cs = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [o, s] = Se(!1);
  Ie(() => {
    s(!0);
  }, []), Ie(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (d) => {
      const c = d.target, u = c.getAttribute("href");
      if (u && u.startsWith("#")) {
        const f = document.querySelector(u);
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
  }, [o]);
  const i = ee("nhsuk-skip-link", r);
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
}, om = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = ee("nhsuk-pagination", o);
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
}, im = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = ee("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, ds = Ze.forwardRef(({
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
  ].filter(Boolean).join(" "), C = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), g = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const B = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      xt,
      {
        level: a,
        className: C,
        children: B()
      }
    );
  }, k = () => u.children ? u.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, q = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsxs("div", { className: p, children: [
          g(),
          k(),
          q()
        ] })
      ]
    }
  );
});
ds.displayName = "Card";
const lm = ({
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
}, cm = ({
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
}, dm = ({
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
  id: u,
  "aria-label": f,
  "aria-labelledby": m,
  "aria-describedby": p
}) => {
  const C = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), g = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), k = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const B = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], _ = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        B,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      xt,
      {
        level: a,
        className: g,
        children: _
      }
    );
  }, q = () => d || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: C,
      "data-testid": c,
      id: u,
      "aria-label": f,
      "aria-labelledby": m,
      "aria-describedby": p,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          k(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: q() })
      ]
    }
  );
}, sc = ({
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
  const c = ee(
    "nhsuk-panel",
    t
  ), u = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    xt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    xt,
    {
      level: o,
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
  ) : s ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: s }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: c, id: e, ...d, children: [
    u(),
    f()
  ] });
}, um = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = ee("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, hm = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = ee(
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
}, fm = ({
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
  tableClasses: u,
  classes: f,
  attributes: m,
  "data-testid": p
}) => {
  const C = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), g = ee(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), k = ee(f), q = (y, L) => {
    const v = ee("nhsuk-table__header", {
      [`nhsuk-table__header--${y.format}`]: y.format
    }, y.classes), $ = {
      scope: "col",
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...s && { role: "columnheader" },
      ...y.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: v, ...$, children: y.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } }) : y.text }, L);
  }, B = (y, L, v) => {
    const $ = o && v, A = ee(
      $ ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${$ ? "header" : "cell"}--${y.format}`]: y.format
      },
      y.classes
    ), I = {
      ...$ && { scope: "row" },
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...s && {
        role: $ ? "rowheader" : "cell",
        ...y.header && { "data-label": y.header }
      },
      ...y.attributes
    }, b = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && y.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        y.header,
        " "
      ] }),
      y.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } }) : y.text
    ] }), F = $ ? "th" : "td";
    return /* @__PURE__ */ n.jsx(F, { className: A, ...I, children: b }, L);
  }, _ = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: g,
      ...s && { role: "table" },
      ...m,
      ...p && { "data-testid": p },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: C, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((y, L) => q(y, L)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((y, L) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: y.map(
              (v, $) => B(v, $, $ === 0)
            )
          },
          L
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ n.jsxs(sc, { className: c, children: [
    i && /* @__PURE__ */ n.jsx(xt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    _()
  ] }) : k ? /* @__PURE__ */ n.jsx("div", { className: k, children: _() }) : _();
}, mm = Pt(({
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
  "data-testid": u,
  ...f
}, m) => {
  const p = r !== void 0, [C, g] = Se(() => t || e[0]?.id || ""), k = p ? r : C, q = Ce(null), B = Ce(/* @__PURE__ */ new Map()), _ = re((b) => {
    p || g(b), a?.(b);
  }, [p, a]), y = re((b) => {
    o?.(b), l && _(b);
  }, [o, l, _]), L = re((b, F) => {
    const X = e.filter((R) => !R.disabled).map((R) => R.id), de = X.indexOf(F);
    let J = null;
    switch (b.key) {
      case "ArrowLeft":
        J = de > 0 ? de - 1 : X.length - 1;
        break;
      case "ArrowRight":
        J = de < X.length - 1 ? de + 1 : 0;
        break;
      case "Home":
        J = 0;
        break;
      case "End":
        J = X.length - 1;
        break;
      case "Escape":
        b.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (J !== null) {
      b.preventDefault();
      const R = X[J], x = B.current.get(R);
      x && (x.focus(), y(R));
    }
  }, [e, y, i]), v = re((b, F) => {
    F ? B.current.set(b, F) : B.current.delete(b);
  }, []), $ = re((b) => {
    const F = B.current.get(b);
    F && F.focus();
  }, []);
  Wa(m, () => ({
    focusTab: $,
    getActiveTab: () => k,
    getTabListElement: () => q.current
  }), [$, k]);
  const A = re((b) => {
    const F = b.relatedTarget;
    q.current?.contains(F) || s?.();
  }, [s]), I = ee("nhsuk-tabs", d);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: I,
      id: c,
      "data-testid": u,
      ...f,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: q,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: A,
                children: e.map((b) => {
                  const F = b.id === k, X = b.disabled, de = ee("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": F,
                    "nhsuk-tabs__list-item--disabled": X
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: de, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (J) => v(b.id, J),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": F,
                      "aria-controls": `${b.id}-panel`,
                      id: `${b.id}-tab`,
                      tabIndex: F ? 0 : -1,
                      disabled: X,
                      onClick: () => !X && _(b.id),
                      onKeyDown: (J) => !X && L(J, b.id),
                      onFocus: () => !X && y(b.id),
                      ...b.attributes,
                      children: b.label
                    }
                  ) }, b.id);
                })
              }
            )
          }
        ),
        e.map((b) => {
          const F = b.id === k;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${b.id}-tab`,
              id: `${b.id}-panel`,
              hidden: !F,
              children: b.content
            },
            b.id
          );
        })
      ]
    }
  );
}), oc = Pt(
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
    const u = [
      "nhsuk-details",
      s
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
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
oc.displayName = "Details";
const ic = Pt(
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
    ), f = (p) => t === "cross" && !a ? `do not ${p}` : p, m = () => /* @__PURE__ */ n.jsx(
      xt,
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
          m(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: c.join(" "), role: "list", children: r.map((p, C) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            f(p.item)
          ] }, C)) }) })
        ]
      }
    );
  }
);
ic.displayName = "DoDontList";
const lc = Pt(
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
    const u = [
      "nhsuk-expander",
      s
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
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
lc.displayName = "Expander";
const cc = Pt(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, u = `${t}-${c}-hint`, f = `${t}-${c}-status`, m = !!l.href, p = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), C = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        dc,
        {
          item: l,
          itemClasses: p,
          hasLink: m,
          hintId: u,
          statusId: f,
          ariaDescribedBy: C
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
), dc = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
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
    let u;
    return e.status.tag ? u = /* @__PURE__ */ n.jsx(rt, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ n.jsx("div", { className: c, id: o, children: u });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    d()
  ] });
};
cc.displayName = "TaskList";
const pm = ({
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
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: c,
      ...i,
      children: [
        za(
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
}, gm = ({
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
}, uc = ({
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
    /* @__PURE__ */ n.jsx(Ve, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ n.jsx(Ve, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ n.jsx(Ve, { variant: "secondary", size: "small", onClick: r, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ n.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ n.jsx(
      cn,
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
      cn,
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
] }), hc = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(rt, { color: fc(r.status), text: r.label }) }, r.status)) });
function fc(e) {
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
const bm = ({
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
  toolbar: u,
  enableDefaultToolbar: f = !0,
  legendItems: m,
  enableDefaultLegend: p = !0,
  legendPlacement: C = "bottom",
  onA11yModeChange: g
}) => {
  const [k, q] = Se("grid"), B = i || k, [_, y] = Se(a || []), L = r ?? _, v = Re(() => {
    const J = /* @__PURE__ */ new Set();
    return e.forEach((R) => J.add(new Date(R.start).getTime())), Array.from(J).sort((R, x) => R - x);
  }, [e]), $ = Re(() => {
    const J = {};
    return e.forEach((R) => {
      const x = new Date(R.start).getTime();
      J[x] || (J[x] = {});
      const N = R.capacity - R.booked - (R.held || 0);
      J[x][R.sessionId] = { slot: R, remaining: N };
    }), J;
  }, [e]), A = re((J) => {
    if (s === "single") {
      const R = [J.id];
      r || y(R), o?.(R, { lastAction: "select" });
    } else {
      const R = L.includes(J.id), x = R ? L.filter((N) => N !== J.id) : [...L, J.id];
      r || y(x), o?.(x, { lastAction: R ? "deselect" : "select" });
    }
  }, [s, L, r, o]), I = Re(() => m || (p ? Array.from(new Set(e.map((R) => R.status))).map((R) => ({
    status: R,
    label: R.charAt(0).toUpperCase() + R.slice(1)
  })) : void 0), [m, p, e]), b = I ? /* @__PURE__ */ n.jsx(
    hc,
    {
      items: I,
      orientation: C === "left" || C === "right" ? "vertical" : "horizontal"
    }
  ) : null, F = (J) => {
    i || q(J), g?.(J);
  }, X = u || (f ? /* @__PURE__ */ n.jsx(
    uc,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: B,
      onA11yModeChange: F
    }
  ) : null), de = /* @__PURE__ */ n.jsx("div", { style: d, className: ee(l), children: /* @__PURE__ */ n.jsx(ur, { className: ee("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(Nt, { children: /* @__PURE__ */ n.jsx(Kt, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    X,
    C === "top" && b,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((J) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => A(J), "aria-pressed": L.includes(J.id), children: [
      qt(new Date(J.start)),
      " – ",
      qt(new Date(J.end)),
      " (",
      J.status,
      ")"
    ] }) }, J.id)) }),
    C === "bottom" && b
  ] }) }) }) }) });
  return B === "list" ? de : /* @__PURE__ */ n.jsx("div", { style: d, className: ee(l), children: /* @__PURE__ */ n.jsx(ur, { className: ee("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(Nt, { children: /* @__PURE__ */ n.jsx(Kt, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    X,
    C === "top" && b,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": v.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((J) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${J.specialty}`, className: "nhs-slot-matrix__session-header", children: J.specialty }, J.id))
      ] }),
      v.map((J) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": qt(new Date(J)), children: qt(new Date(J)) }),
        t.map((R) => {
          const x = $[J]?.[R.id];
          if (!x)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, R.id);
          const { slot: N, remaining: ue } = x, P = L.includes(N.id), j = c ? c(N) : `Slot ${qt(new Date(N.start))} ${N.status}${ue === 0 ? " full" : ""}`;
          return /* @__PURE__ */ n.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": N.status,
              className: ee("nhs-slot-matrix__cell", P && "nhs-slot-matrix__cell--selected"),
              "aria-label": j,
              "aria-selected": P || void 0,
              onClick: () => A(N),
              children: ue > 0 ? `${ue} left` : "Full"
            },
            N.id
          );
        })
      ] }, J))
    ] }),
    C === "bottom" && b
  ] }) }) }) }) });
};
function Ra(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function qt(e) {
  return `${Ra(e.getHours())}:${Ra(e.getMinutes())}`;
}
const mc = ({
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
    /* @__PURE__ */ n.jsx(xt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, xm = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(ur, { children: /* @__PURE__ */ n.jsx(Nt, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    Kt,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ n.jsx(mc, { ...o })
    },
    s
  )) }) }) });
}, pc = Ze.forwardRef(
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
    ariaDescribedby: u,
    className: f,
    tableClassName: m,
    bordered: p = !1,
    striped: C = !1,
    responsive: g = !1,
    tableType: k = "default"
  }, q) => {
    const B = Ce(null), _ = Ce(null), y = Ce(null);
    Ze.useImperativeHandle(q, () => B.current, []);
    const [L, v] = Se(0), [$, A] = Se(0), [I, b] = Se("headers"), [F, X] = Se("browse"), de = t.length, J = e.length, R = Re(() => !r || r.length === 0 ? e : [...e].sort((M, te) => {
      for (const { key: E, direction: ie } of r) {
        const Q = M[E], V = te[E];
        if (Q == null && V == null) continue;
        if (Q == null) return 1;
        if (V == null) return -1;
        let K = 0;
        if (typeof Q == "number" && typeof V == "number" ? K = Q - V : K = String(Q).localeCompare(String(V)), K !== 0)
          return ie === "asc" ? K : -K;
      }
      return 0;
    }), [e, r]), x = re((M, te) => {
      setTimeout(() => {
        const E = B.current?.querySelector(
          `tbody tr:nth-child(${M + 1}) td:nth-child(${te + 1})`
        );
        E && (E.focus(), typeof E.scrollIntoView == "function" && E.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), N = re((M) => {
      setTimeout(() => {
        const te = B.current?.querySelector(`th:nth-child(${M + 1})`);
        te && (te.focus(), typeof te.scrollIntoView == "function" && te.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ue = re((M) => {
      a?.(M);
    }, [a]), P = re((M) => {
      s?.(M);
    }, [s]), j = re((M) => {
      const { key: te } = M;
      switch (te) {
        case "Enter":
          if (M.preventDefault(), I === "headers" && F === "browse")
            X("navigate"), N($);
          else if (I === "headers" && F === "navigate") {
            const E = t[$];
            E && ue(E.key);
          } else I === "cells" && F === "browse" ? (X("navigate"), x(L, $)) : I === "cells" && F === "navigate" && P(L);
          break;
        case "Escape":
          M.preventDefault(), (I === "headers" && F === "navigate" || I === "cells" && F === "navigate") && X("browse");
          break;
        case "ArrowLeft":
          if (M.preventDefault(), F === "navigate" || F === "browse" && I === "headers") {
            if (I === "headers") {
              const E = Math.max(0, $ - 1);
              A(E), N(E);
            } else if (I === "cells") {
              const E = Math.max(0, $ - 1);
              A(E), x(L, E);
            }
          }
          break;
        case "ArrowRight":
          if (M.preventDefault(), F === "navigate" || F === "browse" && I === "headers") {
            if (I === "headers") {
              const E = Math.min(de - 1, $ + 1);
              A(E), N(E);
            } else if (I === "cells") {
              const E = Math.min(de - 1, $ + 1);
              A(E), x(L, E);
            }
          }
          break;
        case "ArrowUp":
          if (M.preventDefault(), I === "cells") {
            if (F === "browse") {
              const E = Math.max(0, L - 1);
              v(E), x(E, 0), A(0);
            } else if (F === "navigate")
              if (L > 0) {
                const E = L - 1;
                v(E), x(E, $);
              } else
                b("headers"), X("browse"), N($);
          }
          break;
        case "ArrowDown":
          if (M.preventDefault(), I === "headers" && F === "browse")
            b("cells"), v(0), A(0), x(0, 0);
          else if (I === "cells") {
            const E = J - 1;
            if (F === "browse") {
              const ie = Math.min(E, L + 1);
              v(ie), x(ie, 0), A(0);
            } else if (F === "navigate" && L < E) {
              const ie = L + 1;
              v(ie), x(ie, $);
            }
          }
          break;
        case "Home":
          M.preventDefault(), I === "headers" ? (A(0), N(0)) : I === "cells" && (M.ctrlKey ? (v(0), A(0), x(0, 0)) : (A(0), x(L, 0)));
          break;
        case "End":
          if (M.preventDefault(), I === "headers") {
            const E = de - 1;
            A(E), N(E);
          } else if (I === "cells")
            if (M.ctrlKey) {
              const E = J - 1, ie = de - 1;
              v(E), A(ie), x(E, ie);
            } else {
              const E = de - 1;
              A(E), x(L, E);
            }
          break;
        case " ":
          if (M.preventDefault(), I === "headers" && F === "navigate") {
            const E = t[$];
            E && ue(E.key);
          } else I === "cells" && F === "navigate" && P(L);
          break;
      }
    }, [
      I,
      F,
      $,
      L,
      de,
      J,
      t,
      x,
      N,
      ue,
      P
    ]);
    Ie(() => {
      const M = B.current;
      if (M)
        return M.addEventListener("keydown", j), () => M.removeEventListener("keydown", j);
    }, [j]);
    const ae = ee(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": p,
        "nhsuk-table--striped": C,
        "nhsuk-table--compact": k === "compact"
      },
      f
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: B,
        className: ae,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: _, role: "row", children: t.map((M, te) => {
            const E = r?.find((V) => V.key === M.key), ie = !!E, Q = I === "headers" && $ === te;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: ee("sortable-header", {
                  "sortable-header--focused": Q
                }),
                role: "columnheader",
                tabIndex: Q ? 0 : -1,
                onClick: () => ue(M.key),
                onKeyDown: (V) => {
                  (V.key === "Enter" || V.key === " ") && (V.preventDefault(), ue(M.key));
                },
                "aria-sort": ie ? E?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: M.label }),
                  ie && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((V) => V.key === M.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: E?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              M.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: y, className: "nhsuk-table__body", role: "rowgroup", children: R.map((M, te) => {
            const E = o === te, ie = I === "cells" && L === te;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: ee("data-row", {
                  "data-row--selected": E,
                  "data-row--focused": ie
                }),
                "aria-selected": E,
                children: t.map((Q, V) => {
                  const K = Q.tableRenderer ? Q.tableRenderer(M) : Q.render ? Q.render(M) : M[Q.key], U = I === "cells" && L === te && $ === V, se = () => typeof K == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: K ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: K ? "Yes" : "No" })
                  ] }) : String(K ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ee("data-cell", {
                        "data-cell--focused": U
                      }),
                      tabIndex: U ? 0 : -1,
                      onClick: () => P(te),
                      children: se()
                    },
                    Q.key
                  );
                })
              },
              te
            );
          }) })
        ]
      }
    );
  }
);
pc.displayName = "AriaDataGrid";
const us = ({
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
  ariaDescribedBy: u
}) => {
  const f = Ce(null), m = Ce(null), p = Ce(null), C = re((I, b) => {
    d || (m.current = b, I.dataTransfer.effectAllowed = "move", I.dataTransfer.setData("text/plain", b));
  }, [d]), g = re((I, b) => {
    d || m.current === b || (I.preventDefault(), I.dataTransfer.dropEffect = "move", p.current = b);
  }, [d]), k = re((I, b) => {
    if (d) return;
    I.preventDefault();
    const F = m.current;
    if (!F || F === b) return;
    const X = e.findIndex((J) => J.key === F), de = e.findIndex((J) => J.key === b);
    if (X !== -1 && de !== -1) {
      const J = [...e], [R] = J.splice(X, 1);
      J.splice(de, 0, R), r(J);
    }
    m.current = null, p.current = null;
  }, [d, e, r]), q = re(() => {
    m.current = null, p.current = null;
  }, []), B = re((I) => {
    const b = t.find((F) => F.key === I);
    return b ? b.label : I;
  }, [t]), _ = re((I) => ["red", "orange", "blue", "aqua-green", "grey"][I] || "grey", []), y = re((I) => {
    if (d) return;
    const b = e.map(
      (F) => F.key === I ? { ...F, direction: F.direction === "asc" ? "desc" : "asc" } : F
    );
    r(b);
  }, [e, r, d]), L = re((I) => {
    if (d) return;
    const b = e.filter((F) => F.key !== I);
    r(b);
  }, [e, r, d]), v = re(() => {
    d || r([]);
  }, [r, d]), $ = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const I = e.map((b, F) => {
      const X = b.direction === "asc" ? "ascending" : "descending";
      return `${F + 1}. ${B(b.key)} (${X})`;
    });
    if (I.length === 1)
      return `Sorted by: ${I[0]}`;
    if (I.length === 2)
      return `Sorted by: ${I.join(" and ")}`;
    {
      const b = I.pop();
      return `Sorted by: ${I.join(", ")}, and ${b}`;
    }
  }, A = Re(() => {
    const I = ["sort-description"];
    return l && I.push("sort-help"), u && I.push(u), I.join(" ");
  }, [l, u]);
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
        children: $()
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
          "aria-describedby": A,
          children: e.map((I, b) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (F) => C(F, I.key),
              onDragOver: (F) => g(F, I.key),
              onDrop: (F) => k(F, I.key),
              onDragEnd: q,
              onClick: () => y(I.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${I.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": I.key,
              children: /* @__PURE__ */ n.jsx(
                rt,
                {
                  color: _(b),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => L(I.key),
                  disabled: d,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${b + 1}`, children: b + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: B(I.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (F) => {
                          F.stopPropagation(), y(I.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${B(I.key)}. Currently ${I.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${I.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${I.direction}`,
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
            I.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        Ve,
        {
          variant: "secondary",
          onClick: v,
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
function gc(e, t) {
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
const pr = Pt(function(t, r) {
  const {
    dataConfig: a = {},
    tabPanels: o,
    selectedIndex: s,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: d,
    ariaDescription: c,
    className: u = "",
    disabled: f = !1,
    orientation: m = "horizontal",
    id: p,
    isLoading: C = !1,
    loadingComponent: g,
    error: k = null,
    errorComponent: q,
    "data-testid": B,
    actions: _,
    actionsMinGap: y = 16,
    forceActionsAbove: L = !1
  } = t, $ = Ce(
    p || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, A = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), I = `${$}-description`, b = `${$}-navigation-help`, {
    dataComparator: F = (h, w) => JSON.stringify(h) === JSON.stringify(w),
    filterFunction: X = (h) => h,
    booleanRenderer: de = (h) => h ? "✓" : "✗"
  } = a || {}, J = s !== void 0, R = s ?? 0, [x, N] = Se({
    focusArea: "tabs",
    focusedTabIndex: R,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), ue = Re(() => ({
    selectedIndex: R,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [R]), [P, j] = Oa(gc, ue);
  Ie(() => {
    const h = P.tabLoadingStates.length, w = o.length;
    h !== w && j({ type: "ADJUST_ARRAYS", payload: { newLength: w } });
  }, [o.length]), Ie(() => {
    J && j({ type: "SET_SELECTED_INDEX", payload: R });
  }, [R, J]), Ie(() => {
    N((h) => ({
      ...h,
      focusArea: "tabs",
      focusedTabIndex: P.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [P.selectedIndex]), Ie(() => {
    l && l(P.globalSelectedRowData);
  }, [P.globalSelectedRowData, l]);
  const ae = re(
    (h, w) => F(h, w),
    [F]
  ), M = re(
    (h) => {
      h >= 0 && h < o.length && !o[h].disabled && (j({ type: "SET_SELECTED_INDEX", payload: h }), N((w) => ({
        ...w,
        focusedTabIndex: h,
        focusArea: "tabs"
      })), i?.(h));
    },
    [o, i]
  ), te = Ce(!1), E = re(
    (h, w) => {
      if (!w?.force && !te.current && h === 0) {
        te.current = !0;
        return;
      }
      te.current = !0, setTimeout(() => {
        const O = ie.current[h], Y = O?.parentElement;
        if (O && Y) {
          const D = O.offsetLeft, G = O.offsetWidth, ye = Y.clientWidth, ge = D - ye / 2 + G / 2;
          try {
            Y.scrollTo({
              left: Math.max(0, ge),
              behavior: "smooth"
            });
          } catch {
            O.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!O,
          tabListElementExists: !!Y
        });
      }, 50);
    },
    []
  ), ie = Ce([]), Q = Ce([]), V = re(
    (h, w) => {
      const O = P.sortConfig || [], Y = O.find(
        (ye) => ye.key === w
      );
      let D;
      Y ? Y.direction === "asc" ? D = O.map(
        (ye) => ye.key === w ? { ...ye, direction: "desc" } : ye
      ) : D = O.filter(
        (ye) => ye.key !== w
      ) : D = [...O, { key: w, direction: "asc" }], j({
        type: "SET_SORT",
        payload: D
      }), o[h].onSort?.(w);
    },
    [P.sortConfig, o]
  ), K = re(
    (h) => {
      setTimeout(() => {
        const w = document.querySelector(
          `[data-tab-panel="${P.selectedIndex}"] th:nth-child(${h + 1})`
        );
        w && w.focus();
      }, 0);
    },
    [P.selectedIndex]
  ), U = re(
    (h) => de(h),
    [de]
  ), se = re(
    (h, w) => {
      setTimeout(() => {
        const O = document.querySelector(
          `[data-tab-panel="${P.selectedIndex}"] tbody tr:nth-child(${h + 1}) td:nth-child(${w + 1})`
        );
        O && O.focus();
      }, 0);
    },
    [P.selectedIndex]
  );
  Ie(() => {
    x.isGridActive && (x.focusArea === "headers" ? setTimeout(() => {
      K(x.focusedHeaderIndex);
    }, 0) : x.focusArea === "cells" && setTimeout(() => {
      se(
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
    K,
    se
  ]), Ie(() => {
    E(P.selectedIndex);
  }, [P.selectedIndex, E]);
  const me = re(
    (h, w) => {
      const { key: O } = h, Y = o[P.selectedIndex], D = Y?.columns.length || 0;
      switch (O) {
        case "ArrowLeft":
          h.preventDefault();
          const G = Math.max(0, w - 1);
          N((we) => ({
            ...we,
            focusedHeaderIndex: G
          })), K(G);
          break;
        case "ArrowRight":
          h.preventDefault();
          const ye = Math.min(D - 1, w + 1);
          N((we) => ({
            ...we,
            focusedHeaderIndex: ye
          })), K(ye);
          break;
        case "ArrowUp":
          h.preventDefault(), N((we) => ({
            ...we,
            focusArea: "tabs",
            focusedTabIndex: P.selectedIndex
          })), E(P.selectedIndex), ie.current[P.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          h.preventDefault(), N((we) => ({
            ...we,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: w,
            isGridActive: !0
          }));
          break;
        case "Home":
          h.preventDefault(), N((we) => ({ ...we, focusedHeaderIndex: 0 })), K(0);
          break;
        case "End":
          h.preventDefault();
          const ge = D - 1;
          N((we) => ({
            ...we,
            focusedHeaderIndex: ge
          })), K(ge);
          break;
        case "Enter":
        case " ":
          h.preventDefault();
          const _e = Y?.columns[w]?.key;
          _e && V(P.selectedIndex, _e);
          break;
      }
    },
    [
      o,
      P.selectedIndex,
      V,
      N,
      K,
      se,
      ie
    ]
  ), z = re(
    (h, w, O) => {
      const { key: Y } = h, D = o[P.selectedIndex], G = D?.data.length || 0, ye = D?.columns.length || 0;
      switch (Y) {
        case "ArrowUp":
          if (h.preventDefault(), w === 0)
            N((oe) => ({
              ...oe,
              focusArea: "headers",
              focusedHeaderIndex: O,
              isGridActive: !1
            })), K(O);
          else {
            const oe = w - 1;
            N((ke) => ({
              ...ke,
              focusedRowIndex: oe
            })), se(oe, O);
          }
          break;
        case "ArrowDown":
          h.preventDefault();
          const ge = Math.min(G - 1, w + 1);
          N((oe) => ({
            ...oe,
            focusedRowIndex: ge
          })), se(ge, O);
          break;
        case "ArrowLeft":
          h.preventDefault();
          const _e = Math.max(0, O - 1);
          N((oe) => ({
            ...oe,
            focusedColumnIndex: _e
          })), se(w, _e);
          break;
        case "ArrowRight":
          h.preventDefault();
          const we = Math.min(ye - 1, O + 1);
          N((oe) => ({
            ...oe,
            focusedColumnIndex: we
          })), se(w, we);
          break;
        case "Home":
          h.preventDefault(), h.ctrlKey ? (N((oe) => ({
            ...oe,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), se(0, 0)) : (N((oe) => ({ ...oe, focusedColumnIndex: 0 })), se(w, 0));
          break;
        case "End":
          if (h.preventDefault(), h.ctrlKey) {
            const oe = G - 1, ke = ye - 1;
            N((Fe) => ({
              ...Fe,
              focusedRowIndex: oe,
              focusedColumnIndex: ke
            })), se(oe, ke);
          } else {
            const oe = ye - 1;
            N((ke) => ({
              ...ke,
              focusedColumnIndex: oe
            })), se(w, oe);
          }
          break;
        case "Enter":
        case " ":
          if (h.preventDefault(), D && D.data[w]) {
            const oe = D.data.some(
              (Pe) => "ews_data" in Pe
            ) ? X(D.data, P.filters) : D.data, ke = P.sortConfig;
            let Fe = oe;
            if (ke && ke.length > 0 && (Fe = [...oe].sort((Pe, Be) => {
              for (const { key: Ye, direction: _t } of ke) {
                let at = Pe[Ye], Qe = Be[Ye];
                const ze = D.columns.find(
                  (zt) => zt.key === Ye
                );
                if (ze?.tableRenderer ? (at = ze.tableRenderer(Pe), Qe = ze.tableRenderer(Be)) : ze?.render && (at = ze.render(Pe), Qe = ze.render(Be)), at == null && Qe == null) continue;
                if (at == null) return _t === "asc" ? -1 : 1;
                if (Qe == null) return _t === "asc" ? 1 : -1;
                let Oe = 0;
                if (typeof at == "number" && typeof Qe == "number" ? Oe = at - Qe : Oe = String(at).localeCompare(
                  String(Qe),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Oe !== 0)
                  return _t === "asc" ? Oe : -Oe;
              }
              return 0;
            })), Fe[w]) {
              const Pe = Fe[w], Ye = P.globalSelectedRowData && ae(P.globalSelectedRowData, Pe) ? null : Pe;
              j({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: Ye
              });
            }
          }
          break;
      }
    },
    [
      o,
      P.selectedIndex,
      P.filters,
      P.sortConfig,
      X,
      ae,
      j,
      N,
      K,
      se
    ]
  ), je = re(
    (h, w) => X(h, w),
    [X]
  );
  if (Wa(
    r,
    () => ({
      selectTab: (h) => {
        h >= 0 && h < o.length && (j({ type: "SET_SELECTED_INDEX", payload: h }), i?.(h));
      },
      refreshData: (h) => {
        console.log("Refreshing data for tab:", h ?? "all");
      },
      exportData: (h) => {
        const w = h ?? P.selectedIndex, O = o[w];
        return O ? O.data : [];
      },
      getSelectedRows: (h) => P.globalSelectedRowData ? [] : [],
      clearSelection: (h) => {
        j({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (h) => {
        j({ type: "SET_FILTERS", payload: h });
      }
    }),
    [P.selectedIndex, P.selectedRows, o, i]
  ), C)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": B,
        children: g || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx(
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
  if (k)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": B,
        children: q || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: k })
        ] })
      }
    );
  const fe = Ce(null), pe = Ce(null), he = Ce(null), [xe, $e] = Se(!0);
  Ie(() => {
    if (!_) {
      $e(!1);
      return;
    }
    if (L) {
      $e(!1);
      return;
    }
    function h() {
      if (!fe.current || !pe.current || !he.current) return;
      const Y = fe.current.clientWidth, D = Array.from(
        pe.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), G = D.reduce((we, oe) => we + oe.offsetWidth, 0), ye = he.current.offsetWidth, ge = Math.max(8 * (D.length - 1), 0), _e = G + ge + ye + y <= Y;
      $e(_e);
    }
    const w = requestAnimationFrame(() => h()), O = new ResizeObserver(() => h());
    return fe.current && O.observe(fe.current), pe.current && O.observe(pe.current), () => {
      cancelAnimationFrame(w), O.disconnect();
    };
  }, [_, y, L, o.length]);
  const De = he, Ne = re(() => De.current ? Array.from(
    De.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((h) => !h.hasAttribute("disabled")) : [], []), T = re(
    (h) => {
      const w = Ne();
      if (!w.length) return;
      const O = Math.max(0, Math.min(h, w.length - 1));
      w[O].focus(), N((Y) => ({ ...Y, focusArea: "actions", focusedActionIndex: O }));
    },
    [Ne]
  ), S = re(() => T(0), [T]), W = re(
    (h, w) => {
      const { key: O } = h, Y = o.length - 1;
      switch (O) {
        case "ArrowUp": {
          _ && !xe && (h.preventDefault(), S());
          break;
        }
        case "ArrowLeft": {
          h.preventDefault();
          const D = w > 0 ? w - 1 : Y;
          M(D), E(D), ie.current[D]?.focus();
          break;
        }
        case "ArrowRight": {
          if (h.preventDefault(), w === Y && _ && xe) {
            S();
            return;
          }
          const D = w < Y ? w + 1 : 0;
          M(D), E(D), ie.current[D]?.focus();
          break;
        }
        case "ArrowDown": {
          h.preventDefault(), N((D) => ({
            ...D,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          h.preventDefault(), M(0), E(0), ie.current[0]?.focus();
          break;
        }
        case "End": {
          h.preventDefault(), M(Y), E(Y), ie.current[Y]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          h.preventDefault(), M(w);
          break;
        }
        case "Tab": {
          !h.shiftKey && w === Y && _ && xe && S();
          break;
        }
      }
    },
    [o.length, M, E, _, xe, S]
  ), H = re((h) => {
    const { key: w } = h, O = Ne();
    if (!O.length) return;
    const Y = O.findIndex((D) => D === document.activeElement);
    switch (w) {
      case "ArrowLeft": {
        if (xe)
          if (Y > 0)
            h.preventDefault(), T(Y - 1);
          else {
            h.preventDefault();
            const D = o.length - 1;
            M(D), E(D), ie.current[D]?.focus(), N((G) => ({ ...G, focusArea: "tabs", focusedTabIndex: D }));
          }
        break;
      }
      case "ArrowRight": {
        xe && (Y < O.length - 1 ? (h.preventDefault(), T(Y + 1)) : (h.preventDefault(), M(0), E(0), ie.current[0]?.focus(), N((D) => ({ ...D, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (xe)
          h.preventDefault(), N((D) => ({ ...D, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          h.preventDefault();
          const D = P.selectedIndex;
          ie.current[D]?.focus(), N((G) => ({ ...G, focusArea: "tabs", focusedTabIndex: D }));
        }
        break;
      }
    }
  }, [Ne, xe, T, o.length, M, E, P.selectedIndex]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${u}`,
      id: p,
      "data-testid": B,
      ref: fe,
      children: [
        c && !A && /* @__PURE__ */ n.jsx("div", { id: I, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: b,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ n.jsx(
          us,
          {
            sortConfig: P.sortConfig || [],
            columns: o.flatMap(
              (h) => h.columns.map((w) => ({ key: w.key, label: w.label }))
            ).filter(
              (h, w, O) => O.findIndex((Y) => Y.key === h.key) === w
              // Remove duplicates
            ),
            onSortChange: (h) => {
              j({ type: "SET_SORT", payload: h });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        _ && !xe && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: he,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: H,
            children: _
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${xe ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? A ? c : I : b,
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              ref: pe,
              children: o.map((h, w) => {
                const O = w === P.selectedIndex, Y = h.disabled || f;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${h.id}`,
                    "aria-controls": `panel-${h.id}`,
                    "aria-selected": O,
                    "aria-disabled": Y,
                    tabIndex: O ? 0 : -1,
                    ref: (D) => {
                      ie.current[w] = D;
                    },
                    onClick: () => M(w),
                    onKeyDown: (D) => W(D, w),
                    disabled: Y,
                    className: [
                      "aria-tabs-datagrid__tab",
                      O ? "aria-tabs-datagrid__tab--selected" : "",
                      Y ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: h.label }),
                      P.tabLoadingStates[w] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      P.tabErrors[w] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  h.id
                );
              })
            }
          ),
          _ && xe && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: he,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: H,
              children: _
            }
          )
        ] }),
        o.map((h, w) => {
          const O = w === P.selectedIndex;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${h.id}`,
              "aria-labelledby": `tab-${h.id}`,
              tabIndex: 0,
              hidden: !O,
              ref: (Y) => {
                Q.current[w] = Y;
              },
              className: `aria-tabs-datagrid__panel ${h.className || ""}`,
              "data-tab-panel": w,
              children: O && (() => {
                const Y = h.data.some(
                  (G) => "ews_data" in G
                ) ? je(h.data, P.filters) : h.data, D = Re(() => {
                  const G = P.sortConfig;
                  return !G || G.length === 0 ? Y : [...Y].sort((ye, ge) => {
                    for (const { key: _e, direction: we } of G) {
                      let oe = ye[_e], ke = ge[_e];
                      const Fe = h.columns.find(
                        (Be) => Be.key === _e
                      );
                      if (Fe?.tableRenderer ? (oe = Fe.tableRenderer(ye), ke = Fe.tableRenderer(ge)) : Fe?.render && (oe = Fe.render(ye), ke = Fe.render(ge)), oe == null && ke == null) continue;
                      if (oe == null) return 1;
                      if (ke == null) return -1;
                      let Pe = 0;
                      if (typeof oe == "number" && typeof ke == "number" ? Pe = oe - ke : typeof oe == "boolean" && typeof ke == "boolean" ? Pe = oe === ke ? 0 : oe ? 1 : -1 : Pe = String(oe).localeCompare(
                        String(ke),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Pe !== 0)
                        return we === "asc" ? Pe : -Pe;
                    }
                    return 0;
                  });
                }, [Y, P.sortConfig, h.columns]);
                return /* @__PURE__ */ n.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": h.ariaLabel,
                    "aria-describedby": h.ariaDescription ? `panel-${h.id}-description` : void 0,
                    children: [
                      h.ariaDescription && /* @__PURE__ */ n.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${h.id}-description`,
                          children: h.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: h.columns.map((G, ye) => {
                        const ge = P.sortConfig?.find(
                          (oe) => oe.key === G.key
                        ), _e = !!ge, we = x.focusArea === "headers" && x.focusedHeaderIndex === ye;
                        return /* @__PURE__ */ n.jsx(
                          "th",
                          {
                            className: `sortable-header ${we ? "sortable-header--focused" : ""} ${_e ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: we ? 0 : -1,
                            onClick: () => V(w, G.key),
                            onKeyDown: (oe) => me(oe, ye),
                            "aria-sort": _e ? ge?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ n.jsx("span", { className: "header-label", children: G.label }),
                              /* @__PURE__ */ n.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${_e ? `sort-indicator--${ge?.direction}` : ""}`,
                                  children: [
                                    P.sortConfig && P.sortConfig.length > 0 && P.sortConfig.findIndex(
                                      (oe) => oe.key === G.key
                                    ) !== -1 && /* @__PURE__ */ n.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${P.sortConfig.findIndex((oe) => oe.key === G.key) + 1}`,
                                        "data-priority": P.sortConfig.findIndex(
                                          (oe) => oe.key === G.key
                                        ) + 1,
                                        title: `Sort priority: ${P.sortConfig.findIndex((oe) => oe.key === G.key) + 1}`,
                                        children: P.sortConfig.findIndex(
                                          (oe) => oe.key === G.key
                                        ) + 1
                                      }
                                    ),
                                    _e && /* @__PURE__ */ n.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${ge?.direction}`,
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
                          G.key
                        );
                      }) }) }),
                      /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: D.map((G, ye) => {
                        const ge = P.globalSelectedRowData && ae(P.globalSelectedRowData, G), _e = x.focusArea === "cells" && x.focusedRowIndex === ye;
                        return /* @__PURE__ */ n.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ge ? "data-row--selected" : ""} ${_e ? "data-row--focused" : ""}`,
                            "aria-selected": ge,
                            children: h.columns.map((we, oe) => {
                              const ke = G[we.key];
                              let Fe;
                              we.tableRenderer ? Fe = we.tableRenderer(G) : we.render ? Fe = we.render(G) : Fe = ke;
                              const Pe = x.focusArea === "cells" && x.focusedRowIndex === ye && x.focusedColumnIndex === oe, Be = () => {
                                if (we.customRenderer) {
                                  const Ye = we.customRenderer(
                                    ke,
                                    G
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
                                return typeof ke == "boolean" && Fe === ke ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  U(ke),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ke ? "Yes" : "No" })
                                ] }) : Ze.isValidElement(Fe) || typeof Fe != "object" ? Fe ?? "" : Fe;
                              };
                              return /* @__PURE__ */ n.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Pe ? "data-cell--focused" : ""}`,
                                  tabIndex: Pe ? 0 : -1,
                                  onClick: () => {
                                    const _t = P.globalSelectedRowData && ae(
                                      P.globalSelectedRowData,
                                      G
                                    ) ? null : G;
                                    j({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: _t
                                    });
                                  },
                                  onKeyDown: (Ye) => z(Ye, ye, oe),
                                  children: Be()
                                },
                                we.key
                              );
                            })
                          },
                          ye
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            h.id
          );
        })
      ]
    }
  );
}), on = {
  asc: "↑",
  desc: "↓"
}, bc = (e) => [...e].sort((t, r) => t.priority - r.priority);
function cr(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function xc(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function yc(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function vc(e, t) {
  const r = t.find((o) => o.id === e), a = xc(t);
  return r ? r.priority < a : !1;
}
const ym = ({
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
  const u = Re(() => bc(e), [e]), f = re((B) => {
    if (l) return;
    const _ = e.map(
      (y) => y.id === B ? { ...y, direction: y.direction === "asc" ? "desc" : "asc" } : y
    );
    t(_);
  }, [e, t, l]), m = re((B) => {
    if (l) return;
    const _ = e.findIndex((L) => L.id === B);
    if (_ <= 0) return;
    const y = [...e];
    [y[_], y[_ - 1]] = [y[_ - 1], y[_]], t(cr(y));
  }, [e, t, l]), p = re((B) => {
    if (l) return;
    const _ = e.findIndex((L) => L.id === B);
    if (_ >= e.length - 1 || _ === -1) return;
    const y = [...e];
    [y[_], y[_ + 1]] = [y[_ + 1], y[_]], t(cr(y));
  }, [e, t, l]), C = re((B) => {
    if (l) return;
    const _ = e.filter((y) => y.id !== B);
    t(cr(_));
  }, [e, t, l]), g = re(() => {
    l || t([]);
  }, [t, l]), k = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const B = u.map((_, y) => {
      const L = _.direction === "asc" ? "ascending" : "descending";
      return `${y + 1}. ${_.label} (${L})`;
    });
    if (B.length === 1)
      return `Sorted by: ${B[0]}`;
    if (B.length === 2)
      return `Sorted by: ${B.join(" and ")}`;
    {
      const _ = B.pop();
      return `Sorted by: ${B.join(", ")}, and ${_}`;
    }
  }, q = Re(() => {
    const B = ["sort-description"];
    return i && B.push("sort-help"), c && B.push(c), B.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: k()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: k()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": d,
        "aria-describedby": q,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((B) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                rt,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => C(B.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: B.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: B.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(B.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${B.label}. Currently ${B.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: B.direction === "asc" ? on.asc : on.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(B.id),
                          disabled: l || !yc(B.id, e),
                          "aria-label": `Move ${B.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(B.id),
                          disabled: l || !vc(B.id, e),
                          "aria-label": `Move ${B.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            B.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      Ve,
      {
        variant: "secondary",
        onClick: g,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsxs("small", { children: [
      "Click ",
      on.asc,
      "/",
      on.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Xr = (e, t) => t.map((r) => ({
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
})), gr = [
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
], _c = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), kc = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, wc = (e) => {
  if (typeof e == "boolean") {
    const r = gr.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = gr.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, Sc = (e) => `${e.name}-${e.bed_name}`, Cc = () => ({
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
}), vm = (e) => {
  const t = Cc();
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
}, jc = {
  dataComparator: _c,
  filterFunction: kc,
  booleanRenderer: wc,
  getDataId: Sc
};
function Fa(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: u = "adaptive-card"
  } = r, f = t.find((_) => _.key === a), m = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", p = () => o.filter((y) => !i.includes(y) && e[y]).slice(0, 3).map((y) => {
    const L = t.find((I) => I.key === y), v = e[y], $ = c[y] ? c[y](v, e) : L?.cardRenderer ? L.cardRenderer(e) : L?.render ? L.render(e) : v;
    return `${L?.label || y}: ${$}`;
  }).join(" • "), C = () => s.length === 0 ? null : s.filter((_) => e[_.fieldKey] !== void 0).map((_) => {
    const y = e[_.fieldKey], L = _.render ? _.render(y, e) : y;
    return `<span class="nhsuk-tag ${Nc(_, y)}">${L}</span>`;
  }).join(""), g = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", k = C(), q = p(), B = k ? `${q}${k ? `<div class="adaptive-card__badges">${k}</div>` : ""}` : q;
  return {
    variant: g(),
    heading: String(m),
    descriptionHtml: B,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${m}`
  };
}
function Nc(e, t) {
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
const Tc = {
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
}, hs = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, c = e.bed_name, u = e.ews_score, f = e.speciality, m = e.consultant;
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
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: u !== void 0 && /* @__PURE__ */ n.jsxs(
            rt,
            {
              color: Ic(gs(u)),
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
            Ve,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Ve,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Ve,
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
}, fs = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        rt,
        {
          color: Rc(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        rt,
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
      Ve,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Ve,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), ms = ({
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
        rt,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        rt,
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
      Ve,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Ve,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), ps = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, d = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Dc(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ n.jsxs(
            rt,
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
            Ve,
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
            Ve,
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
function gs(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Dc(e) {
  return gs(e);
}
function Ic(e) {
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
function Rc(e) {
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
const Fc = [
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
], bs = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Bc = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Lc = (e) => bs(e) === "high" || e.status === "urgent" ? "primary" : "default", Ec = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Ac = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Fc,
  hiddenFields: [],
  getPriority: bs,
  getStatus: Bc,
  getVariant: Lc,
  fieldRenderers: Ec,
  classPrefix: "adaptive-card--healthcare"
}, Mc = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", o = r.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ n.jsx(
      hs,
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
      fs,
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
      ms,
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
      ps,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, $c = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Ba = {
  name: "healthcare",
  defaultCardConfig: Ac,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Mc,
  fieldTypes: $c
};
function La(e) {
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
function Ea(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function Hc(e, t) {
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
function Pc(e, t) {
  const [r, a] = Se("cards");
  return Ie(() => {
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
function zc(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Wc(e, t, r, a) {
  const o = a ? { ...a.defaultCardConfig, ...r } : { ...Tc, ...r };
  if (a && a.cardTemplates) {
    const s = zc(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), Fa(e, t, o);
}
const _m = ({
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
  dataConfig: u,
  selectedIndex: f,
  onTabChange: m,
  ariaLabel: p = "Data grid",
  ariaDescription: C,
  orientation: g = "horizontal",
  id: k,
  disabled: q = !1,
  className: B,
  ..._
}) => {
  const y = Pc(e, t), L = f !== void 0, v = f ?? 0, $ = Re(() => {
    if (c.some(
      (S) => S.data && S.data.length > 0 && Ea(S.data)
    )) {
      const S = La(r);
      return {
        ...Ba.defaultCardConfig,
        ...S
      };
    } else
      return La(r);
  }, [r, c]), A = Re(() => c.some(
    (S) => S.data && S.data.length > 0 && Ea(S.data)
  ) ? Ba : void 0, [c]), I = Re(() => ({
    selectedIndex: v,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [v, c.length]), [b, F] = Oa(Hc, I), X = Ce([]), de = Ce([]), J = Ce([]), R = Ce(null), [x, N] = Se({
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
  }), ue = re((T) => {
    if (!T.current)
      return { columns: 1, rows: 0 };
    const S = T.current, W = S.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (W.length === 0)
      return { columns: 1, rows: 0 };
    const H = S.offsetWidth, w = W[0].offsetWidth, O = Math.floor(H / w) || 1, Y = Math.ceil(W.length / O);
    return { columns: O, rows: Y };
  }, []), P = re((T, S) => ({
    row: Math.floor(T / S),
    col: T % S
  }), []), j = re((T, S, W) => T * W + S, []), ae = re((T, S, W, H) => {
    const { row: h, col: w } = P(T, H);
    let O = h, Y = w;
    switch (S) {
      case "up":
        O = Math.max(0, h - 1);
        break;
      case "down":
        O = Math.min(Math.floor((W - 1) / H), h + 1);
        break;
      case "left":
        Y = Math.max(0, w - 1);
        break;
      case "right":
        Y = Math.min(H - 1, w + 1);
        break;
    }
    const D = j(O, Y, H);
    return Math.min(D, W - 1);
  }, [P, j]);
  Ie(() => {
    x.isCardNavigationActive && x.focusedCardElementIndex >= 0 && x.cardElements.length > 0 && setTimeout(() => {
      const T = x.cardElements[x.focusedCardElementIndex];
      T && (T.element.focus(), T.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [x.isCardNavigationActive, x.focusedCardElementIndex, x.cardElements.length]), Ie(() => {
    const T = () => {
      if (y === "cards" && R.current) {
        const { columns: H, rows: h } = ue(R);
        N((w) => ({
          ...w,
          gridColumns: H,
          gridRows: h
        }));
      }
    }, S = setTimeout(T, 200), W = () => {
      setTimeout(T, 100);
    };
    return window.addEventListener("resize", W), () => {
      clearTimeout(S), window.removeEventListener("resize", W);
    };
  }, [y, c, ue]), Ie(() => {
    const T = b.tabLoadingStates.length, S = c.length;
    T !== S && F({ type: "ADJUST_ARRAYS", payload: { newLength: S } });
  }, [c.length, b.tabLoadingStates.length]), Ie(() => {
    L && f !== b.selectedIndex && F({ type: "SET_SELECTED_INDEX", payload: f });
  }, [L, f, b.selectedIndex]);
  const M = re((T) => {
    T >= 0 && T < c.length && !c[T].disabled && (F({ type: "SET_SELECTED_INDEX", payload: T }), m?.(T));
  }, [c, m]), te = re((T) => {
    console.log("Card selected:", T), F({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: T
    });
  }, []), E = re((T) => {
    const S = de.current[T];
    S && (S.focus(), S.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), ie = re((T) => {
    const S = de.current[T];
    if (!S) return [];
    const W = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), H = S.querySelectorAll(W);
    return Array.from(H).map((h, w) => ({
      id: h.id || `card-${T}-element-${w}`,
      element: h,
      label: h.getAttribute("aria-label") || h.textContent?.trim() || h.getAttribute("title") || `Element ${w + 1}`,
      type: h.tagName.toLowerCase() === "button" ? "button" : h.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(h.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), Q = Ce(null), V = re((T) => {
    const S = Q.current;
    if (!S) return;
    const W = document.createElement("div");
    W.setAttribute("aria-live", "polite"), W.setAttribute("aria-atomic", "true"), W.className = "sr-only", W.textContent = T, S.appendChild(W), setTimeout(() => {
      S.contains(W) && S.removeChild(W);
    }, 1e3);
  }, []), K = re((T) => {
    const S = T.filter((H) => H.sortable !== !1), W = [
      { value: "", label: "Sort by..." }
    ];
    return S.forEach((H) => {
      const h = H.label || H.key;
      H.key === "name" ? W.push(
        { value: `${H.key}-asc`, label: `${h} (A-Z)` },
        { value: `${H.key}-desc`, label: `${h} (Z-A)` }
      ) : H.key === "ews_score" || H.key.includes("score") ? W.push(
        { value: `${H.key}-desc`, label: `${h} (High-Low)` },
        { value: `${H.key}-asc`, label: `${h} (Low-High)` }
      ) : H.key === "age" || H.key.includes("date") || H.key.includes("time") ? W.push(
        { value: `${H.key}-desc`, label: `${h} (Oldest-Youngest)` },
        { value: `${H.key}-asc`, label: `${h} (Youngest-Oldest)` }
      ) : W.push(
        { value: `${H.key}-asc`, label: `${h} (A-Z)` },
        { value: `${H.key}-desc`, label: `${h} (Z-A)` }
      );
    }), W;
  }, []), U = re((T, S) => S ? [...T].sort((W, H) => {
    const h = W[S.key], w = H[S.key];
    if (h == null && w == null) return 0;
    if (h == null) return 1;
    if (w == null) return -1;
    const O = Number(h), Y = Number(w);
    if (!isNaN(O) && !isNaN(Y))
      return S.direction === "asc" ? O - Y : Y - O;
    const D = String(h).toLowerCase(), G = String(w).toLowerCase(), ye = D.localeCompare(G);
    return S.direction === "asc" ? ye : -ye;
  }) : T, []), se = re((T) => {
    if (!T) {
      N((D) => ({ ...D, cardSortConfig: null })), V("Card sorting cleared");
      return;
    }
    const [S, W] = T.split("-"), H = { key: S, direction: W };
    N((D) => ({ ...D, cardSortConfig: H }));
    const O = c[b.selectedIndex]?.columns.find((D) => D.key === S)?.label || S;
    V(`Cards sorted by ${O} in ${W === "asc" ? "ascending" : "descending"} order`);
  }, [c, b.selectedIndex, V]), me = re((T) => {
    const H = c[b.selectedIndex]?.columns.find((w) => w.key === T.key)?.label || T.key, h = T.direction === "asc" ? "ascending" : "descending";
    return `${H} (${h})`;
  }, [c, b.selectedIndex]), z = re((T) => {
    const S = c[b.selectedIndex];
    if (o) {
      const W = b.sortConfig;
      return !W || W.length === 0 ? T : [...T].sort((H, h) => {
        for (const { key: w, direction: O } of W) {
          let Y = H[w], D = h[w];
          const G = S?.columns.find((ke) => ke.key === w);
          if (G?.cardRenderer ? (Y = G.cardRenderer(H), D = G.cardRenderer(h)) : G?.render && (Y = G.render(H), D = G.render(h)), Y == null && D == null) continue;
          if (Y == null) return O === "asc" ? -1 : 1;
          if (D == null) return O === "asc" ? 1 : -1;
          const ye = Number(Y), ge = Number(D);
          if (!isNaN(ye) && !isNaN(ge)) {
            const ke = ye - ge;
            if (ke !== 0) return O === "asc" ? ke : -ke;
            continue;
          }
          const _e = String(Y).toLowerCase(), we = String(D).toLowerCase(), oe = _e.localeCompare(we);
          if (oe !== 0) return O === "asc" ? oe : -oe;
        }
        return 0;
      });
    } else
      return U(T, x.cardSortConfig);
  }, [o, b.sortConfig, x.cardSortConfig, U, c, b.selectedIndex]), je = re((T, S) => {
    const W = ie(T), H = W[S];
    if (H) {
      H.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const h = `Focused on ${H.label}, ${H.type} ${S + 1} of ${W.length} within card`;
      V(h);
    }
  }, [ie, V]), fe = re((T) => {
    X.current[T]?.focus();
  }, []), pe = re(() => {
    const T = J.current[0];
    if (!T) return [];
    const S = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), W = T.querySelectorAll(S);
    return Array.from(W);
  }, []), he = re((T) => {
    if (T === 0) {
      const S = J.current[0], W = S?.querySelector(".sort-controls-row");
      if (W) {
        W.setAttribute("tabindex", "-1"), W.focus();
        const h = `Sort controls group with ${pe().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        V(h);
      } else S && S.focus();
    } else {
      const S = pe(), W = T - 1, H = S[W];
      if (H) {
        H.focus();
        const h = H.tagName.toLowerCase() === "select", w = H.tagName.toLowerCase() === "button", O = h ? "dropdown" : w ? "button" : "control", Y = h ? ". Use Space key to open dropdown" : "", D = `${O} ${W + 1} of ${S.length}${Y}`;
        V(D);
      }
    }
  }, [pe, V]), xe = re((T, S) => {
    const { key: W } = T, H = c[b.selectedIndex], h = H?.data.length || 0;
    if (W === "ArrowLeft" && T.shiftKey) {
      T.preventDefault(), T.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (W === "ArrowRight" && T.shiftKey) {
      T.preventDefault(), T.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!x.isCardNavigationActive) {
      switch (W) {
        case "ArrowUp":
          if (T.preventDefault(), S === 0)
            N((D) => ({ ...D, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), he(0);
          else {
            const D = ae(S, "up", h, x.gridColumns);
            D !== S && (N((G) => ({ ...G, focusedCardIndex: D })), E(D), V(`Moved to card ${D + 1} of ${h}`));
          }
          break;
        case "ArrowDown":
          T.preventDefault();
          const w = ae(S, "down", h, x.gridColumns);
          w !== S && (N((D) => ({ ...D, focusedCardIndex: w })), E(w), V(`Moved to card ${w + 1} of ${h}`));
          break;
        case "ArrowLeft":
          T.preventDefault();
          const O = ae(S, "left", h, x.gridColumns);
          O !== S ? (N((D) => ({ ...D, focusedCardIndex: O })), E(O), V(`Moved to card ${O + 1} of ${h}`)) : b.selectedIndex > 0 && (F({ type: "SET_SELECTED_INDEX", payload: b.selectedIndex - 1 }), N((D) => ({ ...D, focusArea: "tabs" })), setTimeout(() => fe(b.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          T.preventDefault();
          const Y = ae(S, "right", h, x.gridColumns);
          Y !== S ? (N((D) => ({ ...D, focusedCardIndex: Y })), E(Y), V(`Moved to card ${Y + 1} of ${h}`)) : b.selectedIndex < c.length - 1 && (F({ type: "SET_SELECTED_INDEX", payload: b.selectedIndex + 1 }), N((D) => ({ ...D, focusArea: "tabs" })), setTimeout(() => fe(b.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (H?.data[S]) {
            T.preventDefault(), N((G) => ({
              ...G,
              selectedCardIndex: S
            }));
            const D = ie(S);
            D.length > 0 ? (N((G) => ({
              ...G,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: D,
              selectedCardIndex: S
              // Ensure selection is maintained
            })), V(`Card ${S + 1} selected and navigation activated. ${D.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : V(`Card ${S + 1} selected.`);
          }
          break;
        case " ":
          if (H?.data[S]) {
            T.preventDefault(), N((G) => ({
              ...G,
              selectedCardIndex: G.selectedCardIndex === S ? -1 : S
            }));
            const D = x.selectedCardIndex === S;
            V(`Card ${S + 1} ${D ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (W) {
      case "ArrowUp":
      case "ArrowLeft":
        T.preventDefault();
        const w = Math.max(0, x.focusedCardElementIndex - 1);
        N((G) => ({ ...G, focusedCardElementIndex: w })), je(S, w);
        break;
      case "ArrowDown":
      case "ArrowRight":
        T.preventDefault();
        const O = Math.min(x.cardElements.length - 1, x.focusedCardElementIndex + 1);
        N((G) => ({ ...G, focusedCardElementIndex: O })), je(S, O);
        break;
      case "Enter":
        T.preventDefault();
        const Y = x.cardElements[x.focusedCardElementIndex];
        Y && (Y.element.click(), V(`Activated ${Y.label}`));
        break;
      case " ":
        T.preventDefault();
        const D = x.cardElements[x.focusedCardElementIndex];
        if (D) {
          const G = new MouseEvent("dblclick", { bubbles: !0 });
          D.element.dispatchEvent(G), V(`Double-clicked ${D.label}`);
        }
        break;
      case "Escape":
        T.preventDefault(), N((G) => ({
          ...G,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => E(S), 0), V("Exited card navigation, returned to card level");
        break;
      case "Home":
        T.preventDefault(), x.cardElements.length > 0 && (N((G) => ({ ...G, focusedCardElementIndex: 0 })), je(S, 0));
        break;
      case "End":
        if (T.preventDefault(), x.cardElements.length > 0) {
          const G = x.cardElements.length - 1;
          N((ye) => ({ ...ye, focusedCardElementIndex: G })), je(S, G);
        }
        break;
    }
  }, [x, b.selectedIndex, c, te, E, fe, N, ie, je, V]), $e = re((T) => {
    const S = X.current[T], W = S?.parentElement;
    if (!S || !W) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const H = S.getBoundingClientRect(), h = W.getBoundingClientRect();
    H.left >= h.left && H.right <= h.right || (console.log("Tab not visible, scrolling into view (mobile)"), S.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), De = re((T, S) => {
    if (y !== "cards")
      return;
    const { key: W } = T;
    switch (W) {
      case "ArrowLeft":
        T.preventDefault();
        const H = S > 0 ? S - 1 : c.length - 1;
        M(H), N((Y) => ({ ...Y, focusedTabIndex: H })), X.current[H]?.focus(), $e(H);
        break;
      case "ArrowRight":
        T.preventDefault();
        const h = S < c.length - 1 ? S + 1 : 0;
        M(h), N((Y) => ({ ...Y, focusedTabIndex: h })), X.current[h]?.focus(), $e(h);
        break;
      case "ArrowDown":
        T.preventDefault();
        const w = c[b.selectedIndex];
        w && w.columns && w.columns.length > 0 ? (N((Y) => ({
          ...Y,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), he(0)) : (N((Y) => ({
          ...Y,
          focusArea: "cards",
          focusedCardIndex: 0
        })), E(0));
        break;
      case "Home":
        T.preventDefault(), M(0), N((Y) => ({ ...Y, focusedTabIndex: 0 })), X.current[0]?.focus(), $e(0);
        break;
      case "End":
        T.preventDefault();
        const O = c.length - 1;
        M(O), N((Y) => ({ ...Y, focusedTabIndex: O })), X.current[O]?.focus(), $e(O);
        break;
      case "Enter":
      case " ":
        T.preventDefault(), M(S);
        break;
    }
  }, [c.length, M, y, E, N, $e]), Ne = re((T, S) => {
    if (y !== "cards")
      return;
    const { key: W } = T, H = c[b.selectedIndex];
    if (S === 0 && !x.isSortControlsActive) {
      switch (W) {
        case "ArrowUp":
          T.preventDefault(), N((w) => ({
            ...w,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), fe(b.selectedIndex);
          break;
        case "ArrowDown":
          T.preventDefault(), H?.data && H.data.length > 0 && (N((w) => ({
            ...w,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), E(0));
          break;
        case "Enter":
        case " ":
          T.preventDefault();
          const h = pe();
          if (h.length > 0) {
            N((O) => ({
              ...O,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), he(1);
            const w = `Entered sort controls navigation mode. ${h.length} controls available. Use arrow keys to navigate between controls.`;
            V(w);
          }
          break;
        case "Escape":
          T.preventDefault(), N((w) => ({
            ...w,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), fe(b.selectedIndex);
          break;
      }
      return;
    }
    if (x.isSortControlsActive) {
      const w = pe().length;
      switch (W) {
        case "ArrowLeft":
          T.preventDefault();
          const O = x.focusedSortControlIndex > 1 ? x.focusedSortControlIndex - 1 : w;
          N((D) => ({ ...D, focusedSortControlIndex: O })), he(O);
          break;
        case "ArrowRight":
          T.preventDefault();
          const Y = x.focusedSortControlIndex < w ? x.focusedSortControlIndex + 1 : 1;
          N((D) => ({ ...D, focusedSortControlIndex: Y })), he(Y);
          break;
        case "ArrowDown":
          if (T.preventDefault(), x.isSortControlsActive) {
            const D = x.focusedSortControlIndex < w ? x.focusedSortControlIndex + 1 : 1;
            N((G) => ({ ...G, focusedSortControlIndex: D })), he(D);
          } else
            H?.data && H.data.length > 0 && (N((D) => ({
              ...D,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), E(0));
          break;
        case "ArrowUp":
          T.preventDefault(), N((D) => ({
            ...D,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), he(0);
          break;
        case "Escape":
          T.preventDefault(), N((D) => ({
            ...D,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), he(0);
          break;
      }
    }
  }, [y, c, b.selectedIndex, x.isSortControlsActive, x.focusedSortControlIndex, he, fe, E, N, V]);
  if (y === "cards") {
    const T = c[b.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${B || ""}`, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": p,
            "aria-describedby": `${C || ""} ${k ? `${k}-navigation-help` : ""}`.trim(),
            "aria-orientation": g,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((S, W) => {
              const H = W === b.selectedIndex, h = S.disabled || q;
              return /* @__PURE__ */ n.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${S.id}`,
                  "aria-controls": `panel-${S.id}`,
                  "aria-selected": H,
                  "aria-disabled": h,
                  tabIndex: H ? 0 : -1,
                  ref: (w) => {
                    X.current[W] = w;
                  },
                  onClick: () => M(W),
                  onKeyDown: (w) => De(w, W),
                  disabled: h,
                  className: [
                    "aria-tabs-datagrid__tab",
                    H ? "aria-tabs-datagrid__tab--selected" : "",
                    h ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: S.label }),
                    b.tabLoadingStates[W] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    b.tabErrors[W] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                S.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      T && T.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          us,
          {
            sortConfig: b.sortConfig || [],
            columns: T.columns.map((S) => ({ key: S.key, label: S.label })),
            onSortChange: (S) => {
              F({ type: "SET_SORT", payload: S });
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
            ref: (S) => {
              J.current[0] = S;
            },
            onKeyDown: (S) => Ne(S, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${T.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  cn,
                  {
                    id: `card-sort-${T.id}`,
                    name: `card-sort-${T.id}`,
                    value: x.cardSortConfig ? `${x.cardSortConfig.key}-${x.cardSortConfig.direction}` : "",
                    onChange: (S) => se(S.target.value),
                    className: "sort-select",
                    children: K(T.columns).map((S) => /* @__PURE__ */ n.jsx("option", { value: S.value, children: S.label }, S.value))
                  }
                )
              ] }),
              x.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  me(x.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  Ve,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => se(""),
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
          ref: R,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${T?.label || "Data"} cards in ${x.gridRows} rows and ${x.gridColumns} columns`,
          "aria-rowcount": x.gridRows,
          "aria-colcount": x.gridColumns,
          id: `panel-${T?.id}`,
          "aria-labelledby": `tab-${T?.id}`,
          children: z(T?.data || []).map((S, W) => {
            const H = x.selectedCardIndex === W, h = x.focusedCardIndex === W && x.focusArea === "cards", w = x.focusedCardIndex === W && x.focusArea === "card" && x.isCardNavigationActive, O = W === 0 && x.focusArea !== "cards", Y = h || O, D = P(W, x.gridColumns);
            if (r.cardTemplate) {
              const ge = r.cardTemplate(S, T.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": D.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      ref: (_e) => {
                        de.current[W] = _e;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        H ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        h ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        w ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": D.col + 1,
                      "aria-selected": H,
                      "aria-expanded": w,
                      "aria-description": w ? `Card navigation active. ${x.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: Y ? 0 : -1,
                      onClick: () => {
                        N((_e) => ({
                          ..._e,
                          selectedCardIndex: _e.selectedCardIndex === W ? -1 : W
                        })), te(S);
                      },
                      onKeyDown: (_e) => xe(_e, W),
                      onFocus: () => {
                        N((_e) => _e.focusedCardIndex !== W || _e.focusArea !== "cards" ? {
                          ..._e,
                          focusedCardIndex: W,
                          focusArea: "cards"
                        } : _e);
                      },
                      children: ge
                    }
                  )
                },
                `card-${W}`
              );
            }
            const G = Wc(S, T.columns, $, A), ye = [
              G.className || "",
              H ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              h ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              w ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": D.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      H ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      h ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      w ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": D.col + 1,
                    "aria-selected": H,
                    "aria-expanded": w,
                    onKeyDown: (ge) => {
                      ge.key === "Enter" && (ge.preventDefault(), N((_e) => ({
                        ..._e,
                        selectedCardIndex: W
                      }))), xe(ge, W);
                    },
                    children: /* @__PURE__ */ n.jsx(
                      ds,
                      {
                        ...G,
                        ref: (ge) => {
                          de.current[W] = ge;
                        },
                        className: ye,
                        "aria-label": `${G["aria-label"] || G.heading}. ${w ? `Card navigation active with ${x.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: Y ? 0 : -1,
                        onClick: () => {
                          N((ge) => ({
                            ...ge,
                            selectedCardIndex: ge.selectedCardIndex === W ? -1 : W
                          })), te(S);
                        },
                        onKeyDown: (ge) => xe(ge, W),
                        onFocus: () => {
                          x.isCardNavigationActive || N((ge) => ge.focusedCardIndex !== W || ge.focusArea !== "cards" ? {
                            ...ge,
                            focusedCardIndex: W,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : ge);
                        }
                      }
                    )
                  }
                )
              },
              `card-${W}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: Q,
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
  return y === "hybrid" ? /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${B || ""}`, children: [
    s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ n.jsx(
      pr,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: C,
        orientation: g,
        id: k,
        disabled: q,
        selectedIndex: f,
        onTabChange: m,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ..._
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${B || ""}`, children: [
    s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ n.jsx(
      pr,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: C,
        orientation: g,
        id: k,
        disabled: q,
        selectedIndex: f,
        onTabChange: m,
        actions: l,
        forceActionsAbove: d,
        ..._
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, xs = (e) => {
  const t = gr.find((r) => r.value === e);
  return t ? t.icon : null;
}, Oc = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => xs(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Uc = (e) => Xr(e, [
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
]), Gc = {
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
  booleanRenderer: (e) => xs(e),
  getDataId: (e) => `financial-${e.id}`
}, Vc = (e) => Xr(e, [
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
]), Yc = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Oc,
    createTabs: Uc
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Gc,
    createTabs: Vc
  }
}, Aa = (e, t) => {
  const r = Yc[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, ys = [
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
], qc = [
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
], Kc = [
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
], Zc = [
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
], Ma = [
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
], $a = [
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
], Ha = [
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
], Jc = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Xc = () => [
  {
    id: "patients",
    label: "Patients",
    data: ys,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      hs,
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
    data: qc,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      fs,
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
    data: Kc,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ms,
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
    data: Zc,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ps,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Qc = () => {
  const [e, t] = Se("healthcare"), r = Re(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: jc,
      tabPanels: Xc(),
      data: ys
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Aa("ecommerce", Ma),
      data: Ma
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Aa("financial", $a),
      data: $a
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Jc,
      tabPanels: Xr(Ha, [
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
      data: Ha
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
        Ve,
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
      pr,
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
}, km = Qc, vs = (e) => /* @__PURE__ */ n.jsx(Ga, { ...e }), wm = ({
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
  search: u,
  account: f,
  organisation: m,
  logo: p,
  className: C,
  ...g
}) => {
  const k = {
    service: d,
    navigation: c,
    search: u,
    account: f,
    organisation: m,
    logo: p,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(cs, { ...s }),
    /* @__PURE__ */ n.jsx(Za, { ...k }),
    /* @__PURE__ */ n.jsx(vs, { className: C, ...g, children: /* @__PURE__ */ n.jsx(Va, { size: o, children: /* @__PURE__ */ n.jsx(Nt, { children: /* @__PURE__ */ n.jsxs(Kt, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(xt, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Ja, { ...l })
  ] });
}, Sm = ({
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
  serviceHref: u,
  logo: f,
  className: m,
  ...p
}) => {
  const C = {
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
    /* @__PURE__ */ n.jsx(cs, { ...s }),
    /* @__PURE__ */ n.jsx(Za, { ...C }),
    /* @__PURE__ */ n.jsxs(vs, { className: m, ...p, children: [
      d && /* @__PURE__ */ n.jsx(dr, { ...d }),
      /* @__PURE__ */ n.jsx(Va, { size: o, children: /* @__PURE__ */ n.jsx(Nt, { children: /* @__PURE__ */ n.jsxs(Kt, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(xt, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Ja, { ...l })
  ] });
}, _s = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = ee("nhsuk-back-link", a), d = ee("nhsuk-back-link__link"), c = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
_s.displayName = "ForwardLink";
const Lt = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function Pa() {
  return typeof window > "u" ? Lt.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function ks() {
  const [e, t] = ce.useState(Pa());
  ce.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(Pa());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = ce.useCallback((s) => e >= Lt[s], [e]), a = ce.useCallback((s) => e < Lt[s], [e]), o = ce.useCallback((s, i) => e >= Lt[s] && e < Lt[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: o,
    /** Raw numeric values */
    values: Lt
  };
}
function Cm(e) {
  const { width: t, values: r } = ks();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function ed(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = ce.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = ce.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return ce.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    o ? d.set(r, String(o)) : d.delete(r), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [o, i, t, r, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const td = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
), nd = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
function rd(e) {
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
    backLabel: u = "Back",
    nextLabel: f = "Next",
    isLoading: m = !1,
    emptyState: p,
    a11y: C,
    className: g,
    getId: k = (Z) => Z.id,
    orientation: q = "vertical",
    autoEnableThirdColumn: B = !0,
    onDrillChange: _,
    navigationInstructions: y = "Use arrow keys to navigate, Enter to open.",
    initialFocus: L = "first",
    skipFocusOnSelect: v = !1,
    skipAnnouncements: $ = !1,
    onFocusChange: A,
    syncUrl: I = !1,
    urlParamSelected: b = "nsv",
    urlParamDrill: F = "nsvDrill",
    urlSyncDebounceMs: X = 0,
    lazySecondary: de = !1,
    navFooter: J,
    collapsibleNav: R = !1,
    navInitiallyCollapsed: x = !1,
    onNavCollapseChange: N,
    collapseToggleLabelShow: ue = "Show navigation",
    collapseToggleLabelHide: P = "Hide navigation",
    collapseToggleIconShow: j,
    collapseToggleIconHide: ae,
    persistNavCollapsed: M,
    navCollapsedStorageKey: te = "nsvCollapsed",
    navCollapsedUrlParam: E = "nsvCollapsed",
    autoContentHeader: ie,
    contentHeaderLevel: Q = 2,
    renderContentHeader: V,
    contentSubheader: K,
    secondarySubheader: U
  } = e, { up: se } = ks(), [me, z] = ce.useState(!1);
  ce.useEffect(() => {
    z(!0);
  }, []);
  const je = me && se("medium"), fe = me && se("xlarge");
  let pe;
  d ? pe = d : je ? pe = "two-column" : pe = "list", !d && B && l && fe && (pe = "three-column");
  const he = ed({
    enabled: I,
    paramSelected: b,
    paramDrill: F
  }), [xe, $e] = ce.useState(
    () => he.selectedId !== void 0 ? he.selectedId : a
  ), De = r !== void 0 ? r : xe, Ne = t.find((Z) => k(Z) === De), [T, S] = ce.useState(
    void 0
  );
  ce.useEffect(() => {
    if (De === void 0) return;
    S(De);
    const Z = setTimeout(() => S(void 0), 220);
    return () => clearTimeout(Z);
  }, [De]);
  const W = ce.useRef(null), H = ce.useRef(null), h = ce.useRef(null), w = ce.useRef(null), [O, Y] = ce.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [D, G] = ce.useState(() => "nav"), [ye, ge] = ce.useState(0), _e = () => [
    w.current,
    H.current,
    h.current
  ].filter(Boolean), we = (Z) => {
    const le = _e(), ne = Math.max(0, Math.min(Z, le.length - 1));
    le[ne]?.focus(), ge(ne);
  }, oe = ce.useCallback(
    (Z) => Z ? Array.from(Z.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (ne) => !ne.hasAttribute("disabled") && ne.tabIndex !== -1
    ) : [],
    []
  ), ke = ce.useCallback(
    (Z) => {
      const le = oe(H.current);
      if (!le.length) {
        H.current?.focus();
        return;
      }
      const ne = Math.max(0, Math.min(Z, le.length - 1)), be = le[ne];
      be.focus(), setTimeout(() => {
        document.activeElement !== be && (be.focus(), setTimeout(() => {
          document.activeElement !== be && be.click();
        }, 10));
      }, 10), Y((Le) => ({ ...Le, contentIndex: ne }));
      const Me = (Le) => {
        Le.key === "Escape" && (Le.preventDefault(), Le.stopPropagation(), H.current?.focus(), be.removeEventListener("keydown", Me));
      };
      le.forEach((Le) => {
        const Ee = Le._escapeHandler;
        Ee && Le.removeEventListener("keydown", Ee);
      }), be._escapeHandler = Me, be.addEventListener("keydown", Me);
    },
    [oe]
  ), Fe = ce.useCallback(
    (Z) => {
      const le = oe(h.current);
      if (!le.length) {
        h.current?.focus();
        return;
      }
      const ne = Math.max(0, Math.min(Z, le.length - 1)), be = le[ne];
      be.focus(), setTimeout(() => {
        document.activeElement !== be && (be.focus(), setTimeout(() => {
          document.activeElement !== be && be.click();
        }, 10));
      }, 10), Y((Le) => ({ ...Le, secondaryIndex: ne }));
      const Me = (Le) => {
        Le.key === "Escape" && (Le.preventDefault(), Le.stopPropagation(), h.current?.focus(), be.removeEventListener("keydown", Me));
      };
      le.forEach((Le) => {
        const Ee = Le._escapeHandler;
        Ee && Le.removeEventListener("keydown", Ee);
      }), be._escapeHandler = Me, be.addEventListener("keydown", Me);
    },
    [oe]
  ), Pe = (Z) => {
    if (Z.defaultPrevented) return;
    const le = Z.key, ne = Z.target, be = !!Ge.current && Ge.current.contains(ne), Me = !!H.current && H.current.contains(ne), Le = !!h.current && h.current.contains(ne), Ee = !!h.current, Ft = ne === w.current || ne === H.current || ne === h.current, St = Be && (pe === "list" || pe === "cards"), nn = Me && !!ne.closest(".nhs-navigation-split-view__header");
    if (D === "containers" && Ft) {
      if (le === "ArrowRight") {
        Z.preventDefault();
        const ve = _e(), Ae = Math.min(ve.length - 1, ye + 1);
        we(Ae);
        return;
      }
      if (le === "ArrowLeft") {
        Z.preventDefault();
        const ve = Math.max(0, ye - 1);
        we(ve);
        return;
      }
      if (le === "Home") {
        Z.preventDefault(), we(0);
        return;
      }
      if (le === "End") {
        Z.preventDefault(), we(_e().length - 1);
        return;
      }
      if (le === "Enter" || le === " ") {
        if (Z.preventDefault(), ne === w.current) {
          if (G("nav"), Ge.current) {
            const ve = Array.from(
              Ge.current.querySelectorAll("[data-nav-item]")
            );
            (ve[He >= 0 ? He : 0] || ve[0])?.focus();
          }
        } else ne === H.current ? (G("content"), ke(O.contentIndex)) : ne === h.current && (G("secondary"), Fe(O.secondaryIndex));
        return;
      }
      return;
    }
    if (le === "Escape") {
      if (D === "content" || D === "secondary") {
        if (Me || Le) {
          if (Z.preventDefault(), G("nav"), Ge.current) {
            const Ae = Array.from(
              Ge.current.querySelectorAll("[data-nav-item]")
            )[He >= 0 ? He : 0];
            setTimeout(() => Ae?.focus(), 10);
          }
        } else if ((ne === H.current || ne === h.current) && (Z.preventDefault(), G("nav"), Ge.current)) {
          const Ae = Array.from(
            Ge.current.querySelectorAll("[data-nav-item]")
          )[He >= 0 ? He : 0];
          setTimeout(() => Ae?.focus(), 10);
        }
      }
      return;
    }
    if (le === "Enter" || le === " ") {
      if (ne.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (ne === H.current && D === "content") {
        Z.preventDefault(), Z.stopPropagation(), oe(H.current).length > 0 && setTimeout(() => {
          ke(O.contentIndex);
        }, 50);
        return;
      }
      if (ne === h.current && D === "secondary") {
        Z.preventDefault(), Z.stopPropagation(), oe(
          h.current
        ).length > 0 && setTimeout(() => {
          Fe(O.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (St && nn && !Ft && (le === "ArrowRight" || le === "ArrowLeft")) {
      const ve = oe(H.current).filter(
        (Ae) => Ae.closest(".nhs-navigation-split-view__header")
      );
      if (ve.length > 1) {
        const Ae = ve.indexOf(ne);
        if (Ae >= 0) {
          const ta = (Ae + (le === "ArrowRight" ? 1 : -1) + ve.length) % ve.length;
          Z.preventDefault(), ve[ta].focus();
          return;
        }
      }
    }
    if (le === "ArrowRight") {
      if (be || D === "nav") {
        Z.preventDefault(), G("content"), setTimeout(() => H.current?.focus(), 10);
        return;
      }
      if (Me || D === "content") {
        Ee && (Z.preventDefault(), G("secondary"), setTimeout(() => h.current?.focus(), 10));
        return;
      }
    }
    if (le === "ArrowLeft") {
      if (Le || D === "secondary") {
        Z.preventDefault(), G("content"), setTimeout(() => H.current?.focus(), 10);
        return;
      }
      if (Me || D === "content") {
        if (Z.preventDefault(), G("nav"), Ge.current) {
          const Ae = Array.from(
            Ge.current.querySelectorAll("[data-nav-item]")
          )[He >= 0 ? He : 0];
          setTimeout(() => Ae?.focus(), 10);
        }
        return;
      }
    }
    if (le === "Home" && !be && (Z.preventDefault(), G("nav"), Ge.current)) {
      const ve = Array.from(
        Ge.current.querySelectorAll("[data-nav-item]")
      ), Ae = ve[He >= 0 ? He : 0] || ve[0];
      setTimeout(() => Ae?.focus(), 10);
    }
    if (le === "End") {
      const ve = Ee ? h.current : H.current;
      ve && !ve.contains(ne) && (Z.preventDefault(), Ee ? (G("secondary"), setTimeout(() => h.current?.focus(), 10)) : (G("content"), setTimeout(() => H.current?.focus(), 10)));
    }
    if (le === "ArrowDown" || le === "ArrowUp") {
      if (ne === H.current && le === "ArrowDown") {
        Z.preventDefault(), oe(H.current).length > 0 && ke(0);
        return;
      }
      if (ne === h.current && le === "ArrowDown") {
        Z.preventDefault(), oe(
          h.current
        ).length > 0 && Fe(0);
        return;
      }
      if (Me) {
        const ve = oe(H.current);
        if (ve.length) {
          Z.preventDefault();
          const Ae = le === "ArrowDown" ? 1 : -1, tt = (O.contentIndex + Ae + ve.length) % ve.length;
          ke(tt);
        }
      } else if (Le) {
        const ve = oe(h.current);
        if (ve.length) {
          Z.preventDefault();
          const Ae = le === "ArrowDown" ? 1 : -1, tt = (O.secondaryIndex + Ae + ve.length) % ve.length;
          Fe(tt);
        }
      }
    }
  }, Be = !!Ne && (pe === "list" || pe === "cards"), Ye = ce.useMemo(() => ie === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : ie === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : ie === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: ie.mobile !== void 0 ? ie.mobile : !0,
    tablet: ie.tablet || !1,
    desktop: ie.desktop || !1
  }, [ie]), _t = me && se("medium") && !se("xlarge"), at = me && se("xlarge"), Qe = !!l, ze = pe === "three-column", [Oe, zt] = ce.useState(!1);
  ce.useEffect(() => {
    ze && Oe && zt(!1);
  }, [ze, Oe]), ce.useEffect(() => {
    Oe && !ze && (G("secondary"), ge(2), setTimeout(() => {
      h.current?.focus();
    }, 50));
  }, [Oe, ze]), ce.useEffect(() => {
    !Oe && !ze && D === "secondary" && (G("content"), ge(1), setTimeout(() => {
      H.current?.focus();
    }, 50));
  }, [Oe, ze, D]);
  const Gn = !!Ne && (Be && Ye.mobile || !Be && _t && Ye.tablet || !Be && at && Ye.desktop) || Qe && !ze, po = `h${Q}`, Vn = Ne ? ce.createElement(
    po,
    {
      style: {
        marginLeft: Be ? 32 : 0,
        marginRight: Be ? 32 : 0
      }
    },
    Ne.label
  ) : null, Qr = Be ? "mobile" : _t ? "tablet" : "desktop", go = Qe && !ze && !Oe, Yn = Be && Ye.mobile ? /* @__PURE__ */ n.jsx(
    dr,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => Rt(void 0, void 0)
    }
  ) : void 0, qn = go ? /* @__PURE__ */ n.jsx(
    _s,
    {
      element: "button",
      text: f,
      onClick: () => {
        zt(!0);
      }
    }
  ) : void 0, Kn = !ze && Oe ? /* @__PURE__ */ n.jsx(
    dr,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => zt(!1)
    }
  ) : void 0, bo = ce.useMemo(() => {
    if (!Gn || !Ne) return null;
    if (V)
      return V({
        item: Ne,
        detailActive: Be,
        context: Qr,
        backLink: Yn,
        defaultHeading: Vn
      });
    const Z = Ne && K ? typeof K == "function" ? K(Ne) : K : null;
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
            Kn || Yn,
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
                  Vn,
                  Z && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: Z })
                ]
              }
            )
          ]
        }
      ),
      qn && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: qn })
    ] });
  }, [
    Gn,
    Ne,
    V,
    Be,
    Qr,
    Yn,
    Kn,
    Vn,
    qn,
    K
  ]);
  ce.useEffect(() => {
    if (!I) return;
    const Z = pe === "three-column";
    let le = !1;
    const ne = () => {
      le || (he.selectedId !== De && he.setSelectedId(De), he.drilledIn !== Z && he.setDrilledIn(Z));
    };
    if (X && X > 0) {
      const be = setTimeout(ne, X);
      return () => {
        le = !0, clearTimeout(be);
      };
    } else
      ne();
  }, [I, he, De, pe, X]), ce.useEffect(() => {
    if (!I) return;
    const Z = () => {
      const le = new URLSearchParams(window.location.search), ne = le.get(b);
      le.get(F), $e(ne === null ? void 0 : ne);
    };
    return window.addEventListener("popstate", Z), () => window.removeEventListener("popstate", Z);
  }, [
    I,
    b,
    F,
    d,
    l
  ]);
  const tn = ce.useRef(0), st = ce.useRef(
    null
  ), Rt = ce.useCallback(
    (Z, le) => {
      Z !== De && (r === void 0 && $e(Z), o?.(Z, le));
    },
    [r, o, De]
  );
  ce.useEffect(() => {
    if (!v && Be && H.current) {
      const Z = setTimeout(() => H.current?.focus(), 30);
      return () => clearTimeout(Z);
    }
  }, [Be, De, v]);
  const Ge = ce.useRef(null), [He, Wt] = ce.useState(
    () => L === "first" ? 0 : -1
  );
  ce.useEffect(() => {
    if (He < 0 || !Ge.current) return;
    const le = Array.from(
      Ge.current.querySelectorAll("[data-nav-item]")
    )[He];
    if (le) {
      document.activeElement !== le && le.focus(), tn.current = He;
      const ne = t[He];
      A?.(
        ne ? k(ne) : void 0,
        ne,
        He
      );
    }
  }, [He, t, A, k]);
  const xo = (Z) => {
    const le = q === "vertical" ? "ArrowDown" : "ArrowRight", ne = q === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (Z.key === "ArrowRight" && q === "vertical") {
      Z.preventDefault(), Oe ? (G("secondary"), setTimeout(() => {
        h.current?.focus();
      }, 10)) : (G("content"), setTimeout(() => {
        H.current?.focus();
      }, 10));
      return;
    }
    if (Z.key === le)
      Z.preventDefault(), Wt((be) => Math.min(t.length - 1, be + 1));
    else if (Z.key === ne)
      Z.preventDefault(), Wt((be) => Math.max(0, be - 1));
    else if (Z.key === "Home")
      Z.preventDefault(), Wt(0);
    else if (Z.key === "End")
      Z.preventDefault(), Wt(t.length - 1);
    else if (Z.key === "Enter" || Z.key === " ") {
      Z.preventDefault();
      const be = t[He];
      be && !be.disabled && Rt(k(be), be);
    } else if (Z.key.length === 1 && /[a-z0-9]/i.test(Z.key)) {
      st.current || (st.current = { buffer: "", last: 0 });
      const be = Date.now(), Me = 700, Le = Z.key.toLowerCase();
      be - st.current.last > Me ? st.current.buffer = Le : st.current.buffer += Le, st.current.last = be;
      let Ee = st.current.buffer;
      const Ft = Ee.split("").every((tt) => tt === Ee[0]), St = t.map(
        (tt) => String(tt.label || "").toLowerCase()
      );
      let nn = 0;
      He >= 0 && (nn = (He + 1) % t.length);
      let ve;
      const Ae = (tt, ta) => {
        const na = t.length;
        for (let Xn = 0; Xn < na; Xn++) {
          const Qn = (nn + Xn) % na;
          if (!t[Qn].disabled && St[Qn].startsWith(tt))
            return Qn;
        }
      };
      Ft && Ee.length > 1 ? ve = Ae(Ee[0]) : (ve = Ae(Ee), ve === void 0 && Ee.length > 1 && (ve = Ae(Ee[Ee.length - 1]), ve !== void 0 && st.current && (st.current.buffer = Ee[Ee.length - 1]))), ve !== void 0 && Wt(ve);
    }
  }, yo = ce.useMemo(() => {
    if (M && (M === "url" || M === "both") && typeof window < "u") {
      const le = new URLSearchParams(window.location.search).get(E);
      if (le === "1") return !0;
      if (le === "0") return !1;
    }
    if (M && (M === "localStorage" || M === "both") && typeof window < "u")
      try {
        const Z = window.localStorage.getItem(te);
        if (Z === "1") return !0;
        if (Z === "0") return !1;
      } catch {
      }
    return x;
  }, [
    M,
    x,
    te,
    E
  ]), [et, vo] = ce.useState(yo);
  ce.useEffect(() => {
    N?.(et);
  }, [et, N]);
  const _o = ce.useCallback(() => {
    je && R && vo((Z) => !Z);
  }, [je, R]);
  ce.useEffect(() => {
    if (M && !(typeof window > "u")) {
      if (M === "localStorage" || M === "both")
        try {
          window.localStorage.setItem(
            te,
            et ? "1" : "0"
          );
        } catch {
        }
      if (M === "url" || M === "both") {
        const Z = new URLSearchParams(window.location.search);
        Z.set(E, et ? "1" : "0");
        const le = `${window.location.pathname}?${Z.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", le);
      }
    }
  }, [
    et,
    M,
    te,
    E
  ]);
  const ko = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Be ? "nhs-navigation-split-view--detail-active" : "",
    pe === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    R && je && et ? "nhs-navigation-split-view--nav-collapsed" : "",
    g
  ].filter(Boolean).join(" "), Zn = ce.useRef(null);
  ce.useEffect(() => {
    if (!$ && Zn.current) {
      const Z = Ne ? `Selected ${Ne.label}` : "Selection cleared";
      Zn.current.textContent = Z;
    }
  }, [Ne, $]), ce.useEffect(() => {
    !Be && De == null && Ge.current && Ge.current.querySelectorAll("[data-nav-item]")[tn.current]?.focus();
  }, [Be, De]);
  const kt = pe === "three-column", [Jn, wo] = ce.useState(!1);
  ce.useEffect(() => {
    kt && !Jn && wo(!0);
  }, [kt, Jn]);
  const ea = ce.useRef(kt);
  ce.useEffect(() => {
    ea.current !== kt && (_?.(kt), ea.current = kt);
  }, [kt, _]);
  const So = () => {
    if (pe === "cards")
      return /* @__PURE__ */ n.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": De ? String(De) : void 0,
          children: [
            t.map((ne) => {
              const be = k(ne), Me = be === De;
              return /* @__PURE__ */ n.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": Me,
                  children: /* @__PURE__ */ n.jsxs(
                    "button",
                    {
                      id: String(be),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": Me || void 0,
                      "data-disabled": ne.disabled || void 0,
                      disabled: ne.disabled,
                      onClick: () => !ne.disabled && Rt(be, ne),
                      children: [
                        ne.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ne.icon }),
                        /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ne.label }),
                        ne.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ne.description }),
                        s?.(ne),
                        ne.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: ne.badge })
                      ]
                    }
                  )
                },
                be
              );
            }),
            t.length === 0 && !m && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: p || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const Z = "nsv-nav-instructions", le = ce.useMemo(() => ce.memo(
      ({
        item: ne,
        idx: be,
        selected: Me,
        focused: Le
      }) => {
        const Ee = k(ne), Ft = ne.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Le ? 0 : -1,
          onClick: () => {
            tn.current = be, Rt(Ee, ne);
          },
          onKeyDown: (St) => {
            (St.key === "Enter" || St.key === " ") && (St.preventDefault(), tn.current = be, Rt(Ee, ne));
          }
        };
        return /* @__PURE__ */ n.jsxs(
          "li",
          {
            id: String(Ee),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": Me,
            "aria-current": Me ? "true" : void 0,
            "data-selected": Me || void 0,
            "data-disabled": ne.disabled || void 0,
            ...Ft,
            children: [
              ne.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ne.icon }),
              /* @__PURE__ */ n.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ne.label }),
                ne.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ne.description }),
                s?.(ne)
              ] }),
              ne.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: ne.badge })
            ]
          }
        );
      }
    ), [k, Rt, s]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: Ge,
          className: "nhs-navigation-split-view__list",
          onKeyDown: xo,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": Z,
          "aria-activedescendant": De ? String(De) : void 0,
          children: [
            t.map((ne, be) => /* @__PURE__ */ n.jsx(
              le,
              {
                item: ne,
                idx: be,
                selected: k(ne) === De,
                focused: be === He || He === -1 && be === 0 && L === "first",
                "data-just-selected": k(ne) === T ? "true" : void 0
              },
              k(ne)
            )),
            t.length === 0 && !m && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: p || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          id: Z,
          style: {
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)"
          },
          children: y
        }
      )
    ] });
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: W,
      className: ko,
      "aria-label": C?.rootLabel,
      "data-layout": pe,
      onKeyDown: Pe,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Be || void 0,
            style: { transform: Be ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: w,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": C?.navigationLabel || "Items",
                  "data-collapsed": et || void 0,
                  tabIndex: 0,
                  children: [
                    R && je && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: _o,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": et ? ue : P,
                        title: et ? ue : P,
                        children: et ? j || /* @__PURE__ */ n.jsx(nd, {}) : ae || /* @__PURE__ */ n.jsx(td, {})
                      }
                    ) }),
                    /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: So() }),
                    J && /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: J
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: H,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": C?.contentLabel || "Content",
                  "data-has-selection": !!Ne || void 0,
                  tabIndex: 0,
                  style: {
                    display: Oe && !ze ? "none" : void 0
                  },
                  children: [
                    Gn && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: bo }),
                    /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(Ne)
                      }
                    )
                  ]
                }
              ),
              pe === "three-column" && (!de || Jn) || Oe && !ze ? /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: h,
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
                        Oe && !ze && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ n.jsx(
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
                                  Kn,
                                  /* @__PURE__ */ n.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ n.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: Ne && typeof Ne == "object" && "label" in Ne ? Ne.label : String(Ne) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        Ne && U && /* @__PURE__ */ n.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof U == "function" ? U(Ne) : U
                          }
                        ),
                        /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(Ne) })
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
            ref: Zn,
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
            children: kt ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
rd.displayName = "NavigationSplitView";
const ad = "150ms", sd = "300ms", od = "500ms", id = "cubic-bezier(0.4, 0, 1, 1)", ld = "cubic-bezier(0, 0, 0.2, 1)", cd = "cubic-bezier(0.4, 0, 0.2, 1)", dd = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", ud = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", hd = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", fd = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", md = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", pd = "1px", gd = "2px", bd = "4px", xd = "4px", yd = "4px", vd = "2px", _d = "1px", kd = "0px", wd = "4px", Sd = "8px", Cd = "12px", ws = "#d8dde0", Ss = "#4c6272", Cs = "#d8dde0", js = "#aeb7bd", Ns = "#d5281b", Ts = "#005eb8", Ds = "#ffffff", Is = "#212b32", Rs = "#007f3b", Fs = "#330072", Bs = "#7c2855", Ls = "#d5281b", Es = "#ffeb3b", As = "#fff9c4", Ms = "#ffb81c", $s = "#ed8b00", Hs = "#00a499", Ps = "#ae2573", zs = "#4c6272", Ws = "#768692", Os = "#aeb7bd", Us = "#d8dde0", Gs = "#f0f4f5", jd = "#212b32", Nd = "#4c6272", Td = "#ffffff", Dd = "#212b32", Id = "#005eb8", Rd = "#7c2855", Fd = "#003087", Bd = "#330072", Ld = "#ffeb3b", Ed = "#212b32", Ad = "#d8dde0", Md = "#ffffff33", $d = "#d5281b", Hd = "#4c6272", Pd = "#ffffff", zd = "#007f3b", Wd = "#ffffff", Od = "#006530", Ud = "#004021", Gd = "#004021", Vd = "#00000000", Yd = "#ffffff", qd = "#005eb8", Kd = "#005eb8", Zd = "#d9e5f2", Jd = "#c7daf0", Xd = "#005eb8", Qd = "#ffffff", eu = "#212b32", tu = "#d9dde0", nu = "#b3bcc2", ru = "#b3bcc2", au = "#d5281b", su = "#aa2016", ou = "#6a140e", iu = "#6a140e", lu = "#005eb8", cu = "#004b93", du = "#002f5c", uu = "#002f5c", hu = "8px", fu = "16px", mu = "12px", pu = "16px", gu = "4px", bu = "40px", xu = "4px", yu = "40px", vu = "12px", _u = "16px", ku = "32px", wu = "16px", Su = "20px", Cu = "28px", ju = "9px", Nu = "2px", Tu = "16px", Du = "24px", Iu = "8px", Ru = "24px", Fu = "16px", Bu = "4px", Lu = "4px", Eu = "4px", Au = "8px", Mu = "4px", $u = "16px", Hu = "#007f3b", Pu = "#006530", zu = "#004021", Wu = "#d8dde0", Ou = "#ffffff", Uu = "#768692", Gu = "#00000000", Vu = "#ffeb3b", Yu = "#00000000", qu = "#ffffff", Ku = "#d9e5f2", Zu = "#c7daf0", Ju = "#005eb8", Xu = "#005eb8", Vs = "8px", Ys = "16px", qs = "12px", Ks = "16px", Qu = "2px", eh = "4px", th = "4px", nh = "600", rh = "#ffffff", ah = "#d8dde0", sh = "#aeb7bd", oh = "#f0f4f5", ih = "#212b32", lh = "#212b32", ch = "#005eb8", Zs = "16px", Js = "32px", Xs = "16px", dh = "1px", uh = "4px", hh = "none", fh = "0 2px 4px rgba(0, 0, 0, 0.1)", mh = "#ffffff", ph = "#ffffff", gh = "#d8dde0", bh = "#ffffff", xh = "#4c6272", yh = "#ffeb3b", vh = "#d5281b", _h = "#aeb7bd", kh = "#212b32", wh = "#4c6272", Sh = "#768692", Ch = "#212b32", jh = "#ffffff", Nh = "600", Th = "#d5281b", Dh = "600", Ih = "#4c6272", Qs = "4px", eo = "40px", to = "40px", no = "12px", Rh = "2px", Fh = "4px", Bh = "0px", Lh = "16px", Eh = "18px", Ah = "24px", Mh = "32px", $h = "34px", Hh = "32px", Ph = "40px", zh = "48px", Wh = "5.4ex", Oh = "7.2ex", Uh = "9ex", Gh = "10.8ex", Vh = "20ex", Yh = "38ex", qh = "56ex", Kh = "44px", Zh = "40px", Jh = "1020px", Xh = "100%", Qh = "50%", ef = "33.333%", tf = "25%", nf = "20%", rf = "320px", af = "641px", sf = "1025px", of = "1280px", lf = "960px", cf = "32px", df = "16px", uf = "#d5281b", hf = "#d5281b", ff = "#ffffff", mf = "#007f3b", pf = "#007f3b", gf = "#ffffff", bf = "#ffeb3b", xf = "#ffeb3b", yf = "#212b32", vf = "#005eb8", _f = "#005eb8", kf = "#ffffff", wf = "#d8dde0", Sf = "#aeb7bd", Cf = "#768692", jf = "0 4px 0 #004021", Nf = "0 4px 0 #005eb8", Tf = "0 4px 0 #6a140e", Df = "0 4px 0 #ffeb3b", If = "none", Rf = "0 2px 4px rgba(0, 0, 0, 0.1)", Ff = "4px", Bf = "0px", Lf = "solid", Ef = "0 0 0 3px #ffeb3b", Af = "0 0 0 3px #ffeb3b", Mf = "none", $f = "0 1px 3px rgba(0, 0, 0, 0.12)", Hf = "0 2px 6px rgba(0, 0, 0, 0.16)", Pf = "0 4px 12px rgba(0, 0, 0, 0.20)", ro = "0", ao = "4px", so = "8px", oo = "16px", io = "24px", lo = "32px", co = "40px", uo = "48px", ho = "56px", fo = "64px", br = "0", xr = "0", yr = "4px", vr = "4px", _r = "8px", kr = "8px", wr = "8px", Sr = "16px", Cr = "16px", jr = "24px", Nr = "24px", Tr = "32px", Dr = "32px", Ir = "40px", Rr = "40px", Fr = "48px", Br = "48px", Lr = "56px", Er = "56px", Ar = "64px", bn = "Frutiger W01", xn = "Arial, Helvetica, sans-serif", yn = "sans-serif", vn = "400", _n = "600", kn = "400", wn = "12px", Sn = "14px", Cn = "12pt", jn = "14px", Nn = "16px", Tn = "12pt", Dn = "16px", In = "19px", Rn = "13pt", Fn = "19px", Bn = "22px", Ln = "15pt", En = "22px", An = "26px", Mn = "17pt", $n = "27px", Hn = "36px", Pn = "20pt", zn = "33px", Wn = "48px", On = "24pt", Mr = "16px", $r = "24px", ot = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, it = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, lt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ct = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, dt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ut = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ht = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, ft = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, mt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, pt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: ad,
  AnimationDurationNormal: sd,
  AnimationDurationSlow: od,
  AnimationEasingBounce: dd,
  AnimationEasingEaseIn: id,
  AnimationEasingEaseInOut: cd,
  AnimationEasingEaseOut: ld,
  BorderColorCard: Cs,
  BorderColorCardHover: js,
  BorderColorDefault: ws,
  BorderColorError: Ns,
  BorderColorForm: Ss,
  BorderRadiusLarge: Cd,
  BorderRadiusMedium: Sd,
  BorderRadiusNone: kd,
  BorderRadiusSmall: wd,
  BorderWidthCardBottom: xd,
  BorderWidthDefault: pd,
  BorderWidthFormElement: gd,
  BorderWidthFormElementError: bd,
  BorderWidthPanel: yd,
  BorderWidthTableCell: _d,
  BorderWidthTableHeader: vd,
  BreakpointDesktop: sf,
  BreakpointLargeDesktop: of,
  BreakpointMobile: rf,
  BreakpointTablet: af,
  ButtonBorderRadius: eh,
  ButtonBorderWidth: Qu,
  ButtonPrimaryBackgroundActive: zu,
  ButtonPrimaryBackgroundDefault: Hu,
  ButtonPrimaryBackgroundDisabled: Wu,
  ButtonPrimaryBackgroundHover: Pu,
  ButtonPrimaryBorderDefault: Gu,
  ButtonPrimaryBorderFocus: Vu,
  ButtonPrimaryTextDefault: Ou,
  ButtonPrimaryTextDisabled: Uu,
  ButtonSecondaryBackgroundActive: Zu,
  ButtonSecondaryBackgroundDefault: Yu,
  ButtonSecondaryBackgroundHover: Ku,
  ButtonSecondaryBackgroundSolid: qu,
  ButtonSecondaryBorderDefault: Xu,
  ButtonSecondaryTextDefault: Ju,
  ButtonShadowSize: th,
  ButtonSpacingPaddingHorizontalDesktop: Ks,
  ButtonSpacingPaddingHorizontalMobile: Ys,
  ButtonSpacingPaddingVerticalDesktop: qs,
  ButtonSpacingPaddingVerticalMobile: Vs,
  ButtonTypographyWeight: nh,
  CardBackgroundDefault: rh,
  CardBorderBottom: oh,
  CardBorderDefault: ah,
  CardBorderHover: sh,
  CardBorderWidthBottom: uh,
  CardBorderWidthDefault: dh,
  CardShadowDefault: hh,
  CardShadowHover: fh,
  CardSpacingHeadingMargin: Xs,
  CardSpacingPaddingDesktop: Js,
  CardSpacingPaddingMobile: Zs,
  CardTextDescription: lh,
  CardTextHeading: ih,
  CardTextLink: ch,
  ColorBorderDefault: Ad,
  ColorBorderSecondary: Md,
  ColorButtonLoginActive: du,
  ColorButtonLoginBackground: lu,
  ColorButtonLoginHover: cu,
  ColorButtonLoginShadow: uu,
  ColorButtonPrimaryActive: Ud,
  ColorButtonPrimaryBackground: zd,
  ColorButtonPrimaryHover: Od,
  ColorButtonPrimaryShadow: Gd,
  ColorButtonPrimaryText: Wd,
  ColorButtonReverseActive: nu,
  ColorButtonReverseBackground: Qd,
  ColorButtonReverseHover: tu,
  ColorButtonReverseShadow: ru,
  ColorButtonReverseText: eu,
  ColorButtonSecondaryActive: Jd,
  ColorButtonSecondaryBackground: Vd,
  ColorButtonSecondaryBackgroundSolid: Yd,
  ColorButtonSecondaryBorder: qd,
  ColorButtonSecondaryHover: Zd,
  ColorButtonSecondaryShadow: Xd,
  ColorButtonSecondaryText: Kd,
  ColorButtonWarningActive: ou,
  ColorButtonWarningBackground: au,
  ColorButtonWarningHover: su,
  ColorButtonWarningShadow: iu,
  ColorError: $d,
  ColorFocusBackground: Ld,
  ColorFocusText: Ed,
  ColorFormBackground: Pd,
  ColorFormBorder: Hd,
  ColorGrey1: zs,
  ColorGrey2: Ws,
  ColorGrey3: Os,
  ColorGrey4: Us,
  ColorGrey5: Gs,
  ColorLinkActive: Fd,
  ColorLinkDefault: Id,
  ColorLinkHover: Rd,
  ColorLinkVisited: Bd,
  ColorPrimaryBlack: Is,
  ColorPrimaryBlue: Ts,
  ColorPrimaryDarkPink: Bs,
  ColorPrimaryGreen: Rs,
  ColorPrimaryPurple: Fs,
  ColorPrimaryRed: Ls,
  ColorPrimaryWhite: Ds,
  ColorPrimaryYellow: Es,
  ColorSecondaryAquaGreen: Hs,
  ColorSecondaryOrange: $s,
  ColorSecondaryPaleYellow: As,
  ColorSecondaryPink: Ps,
  ColorSecondaryWarmYellow: Ms,
  ColorTextPrimary: jd,
  ColorTextPrint: Dd,
  ColorTextReverse: Td,
  ColorTextSecondary: Nd,
  ComponentBlur: Lu,
  ComponentBreadcrumbChevronMarginLeft: ju,
  ComponentBreadcrumbChevronMarginRight: Nu,
  ComponentBreadcrumbPaddingTopDesktop: Du,
  ComponentBreadcrumbPaddingTopMobile: Tu,
  ComponentButtonPaddingDesktopHorizontal: pu,
  ComponentButtonPaddingDesktopVertical: mu,
  ComponentButtonPaddingMobileHorizontal: fu,
  ComponentButtonPaddingMobileVertical: hu,
  ComponentButtonShadowSize: gu,
  ComponentCardHeadingMargin: wu,
  ComponentCardPaddingDesktop: ku,
  ComponentCardPaddingMobile: _u,
  ComponentDetails: Au,
  ComponentExpander: Mu,
  ComponentFormCheckboxLabelPadding: vu,
  ComponentFormCheckboxSize: yu,
  ComponentFormInputMinHeight: bu,
  ComponentFormInputPadding: xu,
  ComponentLink: Eu,
  ComponentPagination: $u,
  ComponentPanelPaddingDesktop: Cu,
  ComponentPanelPaddingMobile: Su,
  ComponentSpread: Bu,
  ComponentSummaryListCellPaddingHorizontal: Ru,
  ComponentSummaryListCellPaddingVertical: Iu,
  ComponentSummaryListRowMargin: Fu,
  ElevationHigh: Pf,
  ElevationLow: $f,
  ElevationMedium: Hf,
  ElevationNone: Mf,
  FocusOutlineOffset: Bf,
  FocusOutlineStyle: Lf,
  FocusOutlineWidth: Ff,
  FocusShadowButton: Af,
  FocusShadowInput: Ef,
  FontFamilyBase: bn,
  FontFamilyFallback: xn,
  FontFamilyPrint: yn,
  FontLineHeightBase: $r,
  FontSize14Mobile: wn,
  FontSize14Print: Cn,
  FontSize14Tablet: Sn,
  FontSize16Mobile: jn,
  FontSize16Print: Tn,
  FontSize16Tablet: Nn,
  FontSize19Mobile: Dn,
  FontSize19Print: Rn,
  FontSize19Tablet: In,
  FontSize22Mobile: Fn,
  FontSize22Print: Ln,
  FontSize22Tablet: Bn,
  FontSize26Mobile: En,
  FontSize26Print: Mn,
  FontSize26Tablet: An,
  FontSize36Mobile: $n,
  FontSize36Print: Pn,
  FontSize36Tablet: Hn,
  FontSize48Mobile: zn,
  FontSize48Print: On,
  FontSize48Tablet: Wn,
  FontSizeBase: Mr,
  FontWeightBold: _n,
  FontWeightLight: kn,
  FontWeightNormal: vn,
  FormBorderRadius: Bh,
  FormBorderWidthDefault: Rh,
  FormBorderWidthError: Fh,
  FormErrorTextDefault: Th,
  FormErrorTypographyWeight: Dh,
  FormHintTextDefault: Ih,
  FormInputBackgroundDefault: mh,
  FormInputBackgroundDisabled: gh,
  FormInputBackgroundError: bh,
  FormInputBackgroundFocus: ph,
  FormInputBorderDefault: xh,
  FormInputBorderDisabled: _h,
  FormInputBorderError: vh,
  FormInputBorderFocus: yh,
  FormInputTextDefault: kh,
  FormInputTextDisabled: Sh,
  FormInputTextPlaceholder: wh,
  FormLabelTextDefault: Ch,
  FormLabelTextRequired: jh,
  FormLabelTypographyWeight: Nh,
  FormSpacingCheckboxLabelPadding: no,
  FormSpacingCheckboxSize: to,
  FormSpacingInputMinHeight: eo,
  FormSpacingInputPadding: Qs,
  GridGutter: cf,
  GridGutterHalf: df,
  GridPageWidth: lf,
  HeadingsNhsukHeadingL: it,
  HeadingsNhsukHeadingM: lt,
  HeadingsNhsukHeadingS: ct,
  HeadingsNhsukHeadingXl: ot,
  HeadingsNhsukHeadingXs: dt,
  LayoutColumnActions: nf,
  LayoutColumnFull: Xh,
  LayoutColumnHalf: Qh,
  LayoutColumnQuarter: tf,
  LayoutColumnThird: ef,
  LayoutContainerMaxWidth: Jh,
  ParagraphsBody: ut,
  ParagraphsBodyLarge: ht,
  ParagraphsBodySmall: ft,
  ParagraphsLedeText: mt,
  ParagraphsLedeTextSmall: pt,
  ShadowButtonDefault: jf,
  ShadowButtonFocus: Df,
  ShadowButtonSecondary: Nf,
  ShadowButtonWarning: Tf,
  ShadowCardDefault: If,
  ShadowCardHover: Rf,
  SizeButtonMinHeightDesktop: Zh,
  SizeButtonMinHeightMobile: Kh,
  SizeFormControlLarge: zh,
  SizeFormControlMedium: Ph,
  SizeFormControlSmall: Hh,
  SizeFormInputWidth2xl: Yh,
  SizeFormInputWidth3xl: qh,
  SizeFormInputWidthLg: Gh,
  SizeFormInputWidthMd: Uh,
  SizeFormInputWidthSm: Oh,
  SizeFormInputWidthXl: Vh,
  SizeFormInputWidthXs: Wh,
  SizeIconExtraLarge: Mh,
  SizeIconLarge: Ah,
  SizeIconMedium: Eh,
  SizeIconNhsDefault: $h,
  SizeIconSmall: Lh,
  Spacing0: ro,
  Spacing1: ao,
  Spacing2: so,
  Spacing3: oo,
  Spacing4: io,
  Spacing5: lo,
  Spacing6: co,
  Spacing7: uo,
  Spacing8: ho,
  Spacing9: fo,
  SpacingResponsive0Mobile: br,
  SpacingResponsive0Tablet: xr,
  SpacingResponsive1Mobile: yr,
  SpacingResponsive1Tablet: vr,
  SpacingResponsive2Mobile: _r,
  SpacingResponsive2Tablet: kr,
  SpacingResponsive3Mobile: wr,
  SpacingResponsive3Tablet: Sr,
  SpacingResponsive4Mobile: Cr,
  SpacingResponsive4Tablet: jr,
  SpacingResponsive5Mobile: Nr,
  SpacingResponsive5Tablet: Tr,
  SpacingResponsive6Mobile: Dr,
  SpacingResponsive6Tablet: Ir,
  SpacingResponsive7Mobile: Rr,
  SpacingResponsive7Tablet: Fr,
  SpacingResponsive8Mobile: Br,
  SpacingResponsive8Tablet: Lr,
  SpacingResponsive9Mobile: Er,
  SpacingResponsive9Tablet: Ar,
  StateDisabledBackground: wf,
  StateDisabledBorder: Sf,
  StateDisabledText: Cf,
  StateErrorBackground: uf,
  StateErrorBorder: hf,
  StateErrorText: ff,
  StateInfoBackground: vf,
  StateInfoBorder: _f,
  StateInfoText: kf,
  StateSuccessBackground: mf,
  StateSuccessBorder: pf,
  StateSuccessText: gf,
  StateWarningBackground: bf,
  StateWarningBorder: xf,
  StateWarningText: yf,
  TransitionButtonDefault: ud,
  TransitionButtonShadow: hd,
  TransitionCardHover: md,
  TransitionInputFocus: fd
}, Symbol.toStringTag, { value: "Module" })), jm = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Nm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: ot.fontFamily,
      fontWeight: ot.fontWeight,
      fontSize: ot.fontSize.mobile,
      lineHeight: ot.lineHeight,
      marginTop: ot.marginTop,
      marginBottom: ot.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Tm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: it.fontFamily,
      fontWeight: it.fontWeight,
      fontSize: it.fontSize.mobile,
      lineHeight: it.lineHeight,
      marginTop: it.marginTop,
      marginBottom: it.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Dm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: lt.fontFamily,
      fontWeight: lt.fontWeight,
      fontSize: lt.fontSize.mobile,
      lineHeight: lt.lineHeight,
      marginTop: lt.marginTop,
      marginBottom: lt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Im = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: ct.fontFamily,
      fontWeight: ct.fontWeight,
      fontSize: ct.fontSize.mobile,
      lineHeight: ct.lineHeight,
      marginTop: ct.marginTop,
      marginBottom: ct.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Rm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: dt.fontFamily,
      fontWeight: dt.fontWeight,
      fontSize: dt.fontSize.mobile,
      lineHeight: dt.lineHeight,
      marginTop: dt.marginTop,
      marginBottom: dt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Fm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: ut.fontFamily,
      fontWeight: ut.fontWeight,
      fontSize: ut.fontSize.mobile,
      lineHeight: ut.lineHeight,
      marginTop: ut.marginTop,
      marginBottom: ut.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Bm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: ht.fontFamily,
      fontWeight: ht.fontWeight,
      fontSize: ht.fontSize.mobile,
      lineHeight: ht.lineHeight,
      marginTop: ht.marginTop,
      marginBottom: ht.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Lm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: ft.fontFamily,
      fontWeight: ft.fontWeight,
      fontSize: ft.fontSize.mobile,
      lineHeight: ft.lineHeight,
      marginTop: ft.marginTop,
      marginBottom: ft.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Em = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: mt.fontFamily,
      fontWeight: mt.fontWeight,
      fontSize: mt.fontSize.mobile,
      lineHeight: mt.lineHeight,
      marginTop: mt.marginTop,
      marginBottom: mt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Am = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: pt.fontFamily,
      fontWeight: pt.fontWeight,
      fontSize: pt.fontSize.mobile,
      lineHeight: pt.lineHeight,
      marginTop: pt.marginTop,
      marginBottom: pt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Mm = () => Re(() => zf, []), $m = () => Re(() => ({
  // Border colors
  BorderColorDefault: ws,
  BorderColorForm: Ss,
  BorderColorCard: Cs,
  BorderColorCardHover: js,
  BorderColorError: Ns,
  // Primary colors
  ColorPrimaryBlue: Ts,
  ColorPrimaryWhite: Ds,
  ColorPrimaryBlack: Is,
  ColorPrimaryGreen: Rs,
  ColorPrimaryPurple: Fs,
  ColorPrimaryDarkPink: Bs,
  ColorPrimaryRed: Ls,
  ColorPrimaryYellow: Es,
  // Secondary colors
  ColorSecondaryPaleYellow: As,
  ColorSecondaryWarmYellow: Ms,
  ColorSecondaryOrange: $s,
  ColorSecondaryAquaGreen: Hs,
  ColorSecondaryPink: Ps,
  // Grey scale
  ColorGrey1: zs,
  ColorGrey2: Ws,
  ColorGrey3: Os,
  ColorGrey4: Us,
  ColorGrey5: Gs
}), []), Hm = () => Re(() => ({
  Spacing0: ro,
  Spacing1: ao,
  Spacing2: so,
  Spacing3: oo,
  Spacing4: io,
  Spacing5: lo,
  Spacing6: co,
  Spacing7: uo,
  Spacing8: ho,
  Spacing9: fo
}), []), Pm = () => Re(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: wn,
    Size16: jn,
    Size19: Dn,
    Size22: Fn,
    Size26: En,
    Size36: $n,
    Size48: zn
  },
  Tablet: {
    Size14: Sn,
    Size16: Nn,
    Size19: In,
    Size22: Bn,
    Size26: An,
    Size36: Hn,
    Size48: Wn
  },
  Print: {
    Size14: Cn,
    Size16: Tn,
    Size19: Rn,
    Size22: Ln,
    Size26: Mn,
    Size36: Pn,
    Size48: On
  },
  Family: {
    Base: bn,
    Fallback: xn,
    Print: yn
  },
  Weight: {
    Normal: vn,
    Bold: _n,
    Light: kn
  },
  Base: {
    Size: Mr,
    LineHeight: $r
  },
  // Backward compatibility - individual exports
  FontFamilyBase: bn,
  FontFamilyFallback: xn,
  FontFamilyPrint: yn,
  FontWeightNormal: vn,
  FontWeightBold: _n,
  FontWeightLight: kn,
  FontSize14Mobile: wn,
  FontSize14Tablet: Sn,
  FontSize14Print: Cn,
  FontSize16Mobile: jn,
  FontSize16Tablet: Nn,
  FontSize16Print: Tn,
  FontSize19Mobile: Dn,
  FontSize19Tablet: In,
  FontSize19Print: Rn,
  FontSize22Mobile: Fn,
  FontSize22Tablet: Bn,
  FontSize22Print: Ln,
  FontSize26Mobile: En,
  FontSize26Tablet: An,
  FontSize26Print: Mn,
  FontSize36Mobile: $n,
  FontSize36Tablet: Hn,
  FontSize36Print: Pn,
  FontSize48Mobile: zn,
  FontSize48Tablet: Wn,
  FontSize48Print: On,
  FontSizeBase: Mr,
  FontLineHeightBase: $r
}), []), zm = () => Re(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: br,
    Size1: yr,
    Size2: _r,
    Size3: wr,
    Size4: Cr,
    Size5: Nr,
    Size6: Dr,
    Size7: Rr,
    Size8: Br,
    Size9: Er
  },
  Tablet: {
    Size0: xr,
    Size1: vr,
    Size2: kr,
    Size3: Sr,
    Size4: jr,
    Size5: Tr,
    Size6: Ir,
    Size7: Fr,
    Size8: Lr,
    Size9: Ar
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: br,
  SpacingResponsive0Tablet: xr,
  SpacingResponsive1Mobile: yr,
  SpacingResponsive1Tablet: vr,
  SpacingResponsive2Mobile: _r,
  SpacingResponsive2Tablet: kr,
  SpacingResponsive3Mobile: wr,
  SpacingResponsive3Tablet: Sr,
  SpacingResponsive4Mobile: Cr,
  SpacingResponsive4Tablet: jr,
  SpacingResponsive5Mobile: Nr,
  SpacingResponsive5Tablet: Tr,
  SpacingResponsive6Mobile: Dr,
  SpacingResponsive6Tablet: Ir,
  SpacingResponsive7Mobile: Rr,
  SpacingResponsive7Tablet: Fr,
  SpacingResponsive8Mobile: Br,
  SpacingResponsive8Tablet: Lr,
  SpacingResponsive9Mobile: Er,
  SpacingResponsive9Tablet: Ar
}), []), Wm = () => Re(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Vs,
  ButtonSpacingPaddingHorizontalMobile: Ys,
  ButtonSpacingPaddingVerticalDesktop: qs,
  ButtonSpacingPaddingHorizontalDesktop: Ks,
  // Card spacing	
  CardSpacingPaddingMobile: Zs,
  CardSpacingPaddingDesktop: Js,
  CardSpacingHeadingMargin: Xs,
  // Form spacing
  FormSpacingInputPadding: Qs,
  FormSpacingInputMinHeight: eo,
  FormSpacingCheckboxSize: to,
  FormSpacingCheckboxLabelPadding: no
}), []), Om = () => Re(() => ({
  xl: ot,
  l: it,
  m: lt,
  s: ct,
  xs: dt
}), []), Um = () => Re(() => ({
  body: ut,
  bodyLarge: ht,
  bodySmall: ft,
  ledeText: mt,
  ledeTextSmall: pt
}), []), Gm = () => Re(() => ({
  headings: {
    xl: ot,
    l: it,
    m: lt,
    s: ct,
    xs: dt
  },
  paragraphs: {
    body: ut,
    bodyLarge: ht,
    bodySmall: ft,
    ledeText: mt,
    ledeTextSmall: pt
  },
  fonts: {
    family: {
      base: bn,
      fallback: xn,
      print: yn
    },
    weight: {
      normal: vn,
      bold: _n,
      light: kn
    },
    sizes: {
      mobile: {
        size14: wn,
        size16: jn,
        size19: Dn,
        size22: Fn,
        size26: En,
        size36: $n,
        size48: zn
      },
      tablet: {
        size14: Sn,
        size16: Nn,
        size19: In,
        size22: Bn,
        size26: An,
        size36: Hn,
        size48: Wn
      },
      print: {
        size14: Cn,
        size16: Tn,
        size19: Rn,
        size22: Ln,
        size26: Mn,
        size36: Pn,
        size48: On
      }
    }
  }
}), []);
function Vm(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [a, o] = ce.useState(t), s = ce.useCallback(() => o("three-column"), []), i = ce.useCallback(() => o((d) => d === "three-column" ? r : d), [r]), l = ce.useCallback(() => o((d) => d === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const mo = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, qe = {
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
function Ym(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...mo, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${qe.normal.eot}?#iefix") format("eot"),
       url("${t}${qe.normal.woff2}") format("woff2"),
       url("${t}${qe.normal.woff}") format("woff"),
       url("${t}${qe.normal.ttf}") format("truetype");
  src: url("${t}${qe.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${qe.bold.eot}?#iefix") format("eot"),
       url("${t}${qe.bold.woff2}") format("woff2"),
       url("${t}${qe.bold.woff}") format("woff"),
       url("${t}${qe.bold.ttf}") format("truetype");
  src: url("${t}${qe.bold.eot}");
}`), a.join(`
`);
}
function qm(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...mo, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${qe.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${qe.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${qe.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${qe.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const Km = '"Frutiger W01", Arial, Helvetica, sans-serif', Zm = "Arial, Helvetica, sans-serif";
async function Jm() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Hr as Account,
  Gf as ActionLink,
  _m as AdaptiveDataGrid,
  ad as AnimationDurationFast,
  sd as AnimationDurationNormal,
  od as AnimationDurationSlow,
  dd as AnimationEasingBounce,
  id as AnimationEasingEaseIn,
  cd as AnimationEasingEaseInOut,
  ld as AnimationEasingEaseOut,
  fs as AppointmentCard,
  pc as AriaDataGrid,
  pr as AriaTabsDataGrid,
  _m as AriaTabsDataGridAdaptive,
  dr as BackLink,
  Cs as BorderColorCard,
  js as BorderColorCardHover,
  ws as BorderColorDefault,
  Ns as BorderColorError,
  Ss as BorderColorForm,
  Cd as BorderRadiusLarge,
  Sd as BorderRadiusMedium,
  kd as BorderRadiusNone,
  wd as BorderRadiusSmall,
  xd as BorderWidthCardBottom,
  pd as BorderWidthDefault,
  gd as BorderWidthFormElement,
  bd as BorderWidthFormElementError,
  yd as BorderWidthPanel,
  _d as BorderWidthTableCell,
  vd as BorderWidthTableHeader,
  ac as Breadcrumb,
  sf as BreakpointDesktop,
  of as BreakpointLargeDesktop,
  rf as BreakpointMobile,
  af as BreakpointTablet,
  Ve as Button,
  eh as ButtonBorderRadius,
  Qu as ButtonBorderWidth,
  zu as ButtonPrimaryBackgroundActive,
  Hu as ButtonPrimaryBackgroundDefault,
  Wu as ButtonPrimaryBackgroundDisabled,
  Pu as ButtonPrimaryBackgroundHover,
  Gu as ButtonPrimaryBorderDefault,
  Vu as ButtonPrimaryBorderFocus,
  Ou as ButtonPrimaryTextDefault,
  Uu as ButtonPrimaryTextDisabled,
  Zu as ButtonSecondaryBackgroundActive,
  Yu as ButtonSecondaryBackgroundDefault,
  Ku as ButtonSecondaryBackgroundHover,
  qu as ButtonSecondaryBackgroundSolid,
  Xu as ButtonSecondaryBorderDefault,
  Ju as ButtonSecondaryTextDefault,
  th as ButtonShadowSize,
  Ks as ButtonSpacingPaddingHorizontalDesktop,
  Ys as ButtonSpacingPaddingHorizontalMobile,
  qs as ButtonSpacingPaddingVerticalDesktop,
  Vs as ButtonSpacingPaddingVerticalMobile,
  nh as ButtonTypographyWeight,
  ds as Card,
  rh as CardBackgroundDefault,
  oh as CardBorderBottom,
  ah as CardBorderDefault,
  sh as CardBorderHover,
  uh as CardBorderWidthBottom,
  dh as CardBorderWidthDefault,
  lm as CardGroup,
  cm as CardGroupItem,
  hh as CardShadowDefault,
  fh as CardShadowHover,
  Xs as CardSpacingHeadingMargin,
  Js as CardSpacingPaddingDesktop,
  Zs as CardSpacingPaddingMobile,
  lh as CardTextDescription,
  ih as CardTextHeading,
  ch as CardTextLink,
  dm as CareCard,
  Vf as CharacterCount,
  Eo as Checkbox,
  Ao as Checkboxes,
  Ad as ColorBorderDefault,
  Md as ColorBorderSecondary,
  du as ColorButtonLoginActive,
  lu as ColorButtonLoginBackground,
  cu as ColorButtonLoginHover,
  uu as ColorButtonLoginShadow,
  Ud as ColorButtonPrimaryActive,
  zd as ColorButtonPrimaryBackground,
  Od as ColorButtonPrimaryHover,
  Gd as ColorButtonPrimaryShadow,
  Wd as ColorButtonPrimaryText,
  nu as ColorButtonReverseActive,
  Qd as ColorButtonReverseBackground,
  tu as ColorButtonReverseHover,
  ru as ColorButtonReverseShadow,
  eu as ColorButtonReverseText,
  Jd as ColorButtonSecondaryActive,
  Vd as ColorButtonSecondaryBackground,
  Yd as ColorButtonSecondaryBackgroundSolid,
  qd as ColorButtonSecondaryBorder,
  Zd as ColorButtonSecondaryHover,
  Xd as ColorButtonSecondaryShadow,
  Kd as ColorButtonSecondaryText,
  ou as ColorButtonWarningActive,
  au as ColorButtonWarningBackground,
  su as ColorButtonWarningHover,
  iu as ColorButtonWarningShadow,
  $d as ColorError,
  Ld as ColorFocusBackground,
  Ed as ColorFocusText,
  Pd as ColorFormBackground,
  Hd as ColorFormBorder,
  zs as ColorGrey1,
  Ws as ColorGrey2,
  Os as ColorGrey3,
  Us as ColorGrey4,
  Gs as ColorGrey5,
  Fd as ColorLinkActive,
  Id as ColorLinkDefault,
  Rd as ColorLinkHover,
  Bd as ColorLinkVisited,
  Is as ColorPrimaryBlack,
  Ts as ColorPrimaryBlue,
  Bs as ColorPrimaryDarkPink,
  Rs as ColorPrimaryGreen,
  Fs as ColorPrimaryPurple,
  Ls as ColorPrimaryRed,
  Ds as ColorPrimaryWhite,
  Es as ColorPrimaryYellow,
  Hs as ColorSecondaryAquaGreen,
  $s as ColorSecondaryOrange,
  As as ColorSecondaryPaleYellow,
  Ps as ColorSecondaryPink,
  Ms as ColorSecondaryWarmYellow,
  jd as ColorTextPrimary,
  Dd as ColorTextPrint,
  Td as ColorTextReverse,
  Nd as ColorTextSecondary,
  Kt as Column,
  Lu as ComponentBlur,
  ju as ComponentBreadcrumbChevronMarginLeft,
  Nu as ComponentBreadcrumbChevronMarginRight,
  Du as ComponentBreadcrumbPaddingTopDesktop,
  Tu as ComponentBreadcrumbPaddingTopMobile,
  pu as ComponentButtonPaddingDesktopHorizontal,
  mu as ComponentButtonPaddingDesktopVertical,
  fu as ComponentButtonPaddingMobileHorizontal,
  hu as ComponentButtonPaddingMobileVertical,
  gu as ComponentButtonShadowSize,
  wu as ComponentCardHeadingMargin,
  ku as ComponentCardPaddingDesktop,
  _u as ComponentCardPaddingMobile,
  Au as ComponentDetails,
  Mu as ComponentExpander,
  vu as ComponentFormCheckboxLabelPadding,
  yu as ComponentFormCheckboxSize,
  bu as ComponentFormInputMinHeight,
  xu as ComponentFormInputPadding,
  Eu as ComponentLink,
  $u as ComponentPagination,
  Cu as ComponentPanelPaddingDesktop,
  Su as ComponentPanelPaddingMobile,
  Bu as ComponentSpread,
  Ru as ComponentSummaryListCellPaddingHorizontal,
  Iu as ComponentSummaryListCellPaddingVertical,
  Fu as ComponentSummaryListRowMargin,
  Ga as Container,
  im as ContentsList,
  mo as DEFAULT_FONT_CONFIG,
  xm as DashboardSummaryGrid,
  em as DateInput,
  oc as Details,
  ic as DoDontList,
  Pf as ElevationHigh,
  $f as ElevationLow,
  Hf as ElevationMedium,
  Mf as ElevationNone,
  ia as ErrorMessage,
  Qf as ErrorSummary,
  lc as Expander,
  qe as FRUTIGER_FONT_FILES,
  Wr as Fieldset,
  Bf as FocusOutlineOffset,
  Lf as FocusOutlineStyle,
  Ff as FocusOutlineWidth,
  Af as FocusShadowButton,
  Ef as FocusShadowInput,
  bn as FontFamilyBase,
  xn as FontFamilyFallback,
  yn as FontFamilyPrint,
  $r as FontLineHeightBase,
  wn as FontSize14Mobile,
  Cn as FontSize14Print,
  Sn as FontSize14Tablet,
  jn as FontSize16Mobile,
  Tn as FontSize16Print,
  Nn as FontSize16Tablet,
  Dn as FontSize19Mobile,
  Rn as FontSize19Print,
  In as FontSize19Tablet,
  Fn as FontSize22Mobile,
  Ln as FontSize22Print,
  Bn as FontSize22Tablet,
  En as FontSize26Mobile,
  Mn as FontSize26Print,
  An as FontSize26Tablet,
  $n as FontSize36Mobile,
  Pn as FontSize36Print,
  Hn as FontSize36Tablet,
  zn as FontSize48Mobile,
  On as FontSize48Print,
  Wn as FontSize48Tablet,
  Mr as FontSizeBase,
  _n as FontWeightBold,
  kn as FontWeightLight,
  vn as FontWeightNormal,
  Ja as Footer,
  Bh as FormBorderRadius,
  Rh as FormBorderWidthDefault,
  Fh as FormBorderWidthError,
  Th as FormErrorTextDefault,
  Dh as FormErrorTypographyWeight,
  Ih as FormHintTextDefault,
  mh as FormInputBackgroundDefault,
  gh as FormInputBackgroundDisabled,
  bh as FormInputBackgroundError,
  ph as FormInputBackgroundFocus,
  xh as FormInputBorderDefault,
  _h as FormInputBorderDisabled,
  vh as FormInputBorderError,
  yh as FormInputBorderFocus,
  kh as FormInputTextDefault,
  Sh as FormInputTextDisabled,
  wh as FormInputTextPlaceholder,
  Ch as FormLabelTextDefault,
  jh as FormLabelTextRequired,
  Nh as FormLabelTypographyWeight,
  no as FormSpacingCheckboxLabelPadding,
  to as FormSpacingCheckboxSize,
  eo as FormSpacingInputMinHeight,
  Qs as FormSpacingInputPadding,
  sm as GanttChart,
  ur as Grid,
  cf as GridGutter,
  df as GridGutterHalf,
  lf as GridPageWidth,
  Za as Header,
  rm as HeaderSSR,
  Ka as HeaderSearch,
  am as HeaderStatic,
  xt as Heading,
  it as HeadingsNhsukHeadingL,
  lt as HeadingsNhsukHeadingM,
  ct as HeadingsNhsukHeadingS,
  ot as HeadingsNhsukHeadingXl,
  dt as HeadingsNhsukHeadingXs,
  Vo as Hero,
  Ua as Hint,
  gm as Images,
  Pr as Input,
  um as InsetText,
  zr as Label,
  nf as LayoutColumnActions,
  Xh as LayoutColumnFull,
  Qh as LayoutColumnHalf,
  tf as LayoutColumnQuarter,
  ef as LayoutColumnThird,
  Jh as LayoutContainerMaxWidth,
  Wo as List,
  Va as MainWrapper,
  ms as MedicationCard,
  Fm as NHSBodyText,
  Bm as NHSBodyTextLarge,
  Lm as NHSBodyTextSmall,
  Nm as NHSHeading1,
  Tm as NHSHeading2,
  Dm as NHSHeading3,
  Im as NHSHeading4,
  Rm as NHSHeading5,
  Em as NHSLedeText,
  Am as NHSLedeTextSmall,
  nm as NHSThemeProvider,
  Zm as NHS_FALLBACK_FONT_STACK,
  Km as NHS_FONT_STACK,
  rd as NavigationSplitView,
  wm as PageTemplate,
  om as Pagination,
  sc as Panel,
  ut as ParagraphsBody,
  ht as ParagraphsBodyLarge,
  ft as ParagraphsBodySmall,
  mt as ParagraphsLedeText,
  pt as ParagraphsLedeTextSmall,
  hs as PatientCard,
  Yf as Radios,
  _m as ResponsiveDataGrid,
  km as ResponsiveDataGridDemo,
  Nt as Row,
  cn as Select,
  $o as SelectOption,
  jf as ShadowButtonDefault,
  Df as ShadowButtonFocus,
  Nf as ShadowButtonSecondary,
  Tf as ShadowButtonWarning,
  If as ShadowCardDefault,
  Rf as ShadowCardHover,
  Zh as SizeButtonMinHeightDesktop,
  Kh as SizeButtonMinHeightMobile,
  zh as SizeFormControlLarge,
  Ph as SizeFormControlMedium,
  Hh as SizeFormControlSmall,
  Yh as SizeFormInputWidth2xl,
  qh as SizeFormInputWidth3xl,
  Gh as SizeFormInputWidthLg,
  Uh as SizeFormInputWidthMd,
  Oh as SizeFormInputWidthSm,
  Vh as SizeFormInputWidthXl,
  Wh as SizeFormInputWidthXs,
  Mh as SizeIconExtraLarge,
  Ah as SizeIconLarge,
  Eh as SizeIconMedium,
  $h as SizeIconNhsDefault,
  Lh as SizeIconSmall,
  cs as SkipLink,
  bm as SlotMatrix,
  ym as SortStatusControl,
  ro as Spacing0,
  ao as Spacing1,
  so as Spacing2,
  oo as Spacing3,
  io as Spacing4,
  lo as Spacing5,
  co as Spacing6,
  uo as Spacing7,
  ho as Spacing8,
  fo as Spacing9,
  br as SpacingResponsive0Mobile,
  xr as SpacingResponsive0Tablet,
  yr as SpacingResponsive1Mobile,
  vr as SpacingResponsive1Tablet,
  _r as SpacingResponsive2Mobile,
  kr as SpacingResponsive2Tablet,
  wr as SpacingResponsive3Mobile,
  Sr as SpacingResponsive3Tablet,
  Cr as SpacingResponsive4Mobile,
  jr as SpacingResponsive4Tablet,
  Nr as SpacingResponsive5Mobile,
  Tr as SpacingResponsive5Tablet,
  Dr as SpacingResponsive6Mobile,
  Ir as SpacingResponsive6Tablet,
  Rr as SpacingResponsive7Mobile,
  Fr as SpacingResponsive7Tablet,
  Br as SpacingResponsive8Mobile,
  Lr as SpacingResponsive8Tablet,
  Er as SpacingResponsive9Mobile,
  Ar as SpacingResponsive9Tablet,
  qf as SpacingUtilities,
  wf as StateDisabledBackground,
  Sf as StateDisabledBorder,
  Cf as StateDisabledText,
  uf as StateErrorBackground,
  hf as StateErrorBorder,
  ff as StateErrorText,
  vf as StateInfoBackground,
  _f as StateInfoBorder,
  kf as StateInfoText,
  mf as StateSuccessBackground,
  pf as StateSuccessBorder,
  gf as StateSuccessText,
  bf as StateWarningBackground,
  xf as StateWarningBorder,
  yf as StateWarningText,
  mc as SummaryCard,
  hm as SummaryList,
  fm as Table,
  mm as Tabs,
  rt as Tag,
  cc as TaskList,
  Mo as Textarea,
  Sm as TransactionalPageTemplate,
  ud as TransitionButtonDefault,
  hd as TransitionButtonShadow,
  md as TransitionCardHover,
  fd as TransitionInputFocus,
  ps as VitalsCard,
  Xf as WIDTH_FRACTIONS,
  pm as WarningCallout,
  vs as WidthContainer,
  Zf as WidthUtilities,
  Jm as checkFrutigerLoaded,
  Xr as createGenericTabsConfig,
  vm as createTCHTabsConfig,
  Ym as generateFrutigerFontFace,
  jm as getResponsiveStyles,
  Kf as getSpacingClass,
  Jf as getWidthClass,
  qm as preloadFrutigerFonts,
  jc as tchDataConfig,
  $m as useColors,
  Wm as useComponentSpacing,
  Om as useNHSHeadings,
  Um as useNHSParagraphs,
  tm as useNHSTheme,
  Gm as useNHSTypographySystem,
  Vm as useNavigationSplitDrill,
  ed as useNavigationSplitUrlSync,
  ks as useNhsFdpBreakpoints,
  zm as useResponsiveSpacing,
  Cm as useResponsiveValue,
  Hm as useSpacing,
  Mm as useTokens,
  Pm as useTypography
};
//# sourceMappingURL=index.esm.js.map
