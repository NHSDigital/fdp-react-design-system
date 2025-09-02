import * as le from "react";
import Ze, { useState as we, useEffect as Fe, useCallback as ee, useRef as Te, createElement as Pa, useMemo as De, useContext as So, createContext as Co, forwardRef as Pt, useImperativeHandle as za, useReducer as Wa } from "react";
function jo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rn = { exports: {} }, Ut = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var na;
function No() {
  if (na) return Ut;
  na = 1;
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
  return Ut.Fragment = t, Ut.jsx = r, Ut.jsxs = r, Ut;
}
var Ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ra;
function To() {
  return ra || (ra = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(C) {
      if (C == null) return null;
      if (typeof C == "function")
        return C.$$typeof === x ? null : C.displayName || C.name || null;
      if (typeof C == "string") return C;
      switch (C) {
        case g:
          return "Fragment";
        case G:
          return "Profiler";
        case _:
          return "StrictMode";
        case H:
          return "Suspense";
        case A:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof C == "object")
        switch (typeof C.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), C.$$typeof) {
          case v:
            return "Portal";
          case I:
            return (C.displayName || "Context") + ".Provider";
          case j:
            return (C._context.displayName || "Context") + ".Consumer";
          case k:
            var te = C.render;
            return C = C.displayName, C || (C = te.displayName || te.name || "", C = C !== "" ? "ForwardRef(" + C + ")" : "ForwardRef"), C;
          case V:
            return te = C.displayName || null, te !== null ? te : e(C.type) || "Memo";
          case M:
            te = C._payload, C = C._init;
            try {
              return e(C(te));
            } catch {
            }
        }
      return null;
    }
    function t(C) {
      return "" + C;
    }
    function r(C) {
      try {
        t(C);
        var te = !1;
      } catch {
        te = !0;
      }
      if (te) {
        te = console;
        var E = te.error, Q = typeof Symbol == "function" && Symbol.toStringTag && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return E.call(
          te,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Q
        ), t(C);
      }
    }
    function a(C) {
      if (C === g) return "<>";
      if (typeof C == "object" && C !== null && C.$$typeof === M)
        return "<...>";
      try {
        var te = e(C);
        return te ? "<" + te + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var C = B.A;
      return C === null ? null : C.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(C) {
      if (Z.call(C, "key")) {
        var te = Object.getOwnPropertyDescriptor(C, "key").get;
        if (te && te.isReactWarning) return !1;
      }
      return C.key !== void 0;
    }
    function l(C, te) {
      function E() {
        y || (y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          te
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(C, "key", {
        get: E,
        configurable: !0
      });
    }
    function d() {
      var C = e(this.type);
      return b[C] || (b[C] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), C = this.props.ref, C !== void 0 ? C : null;
    }
    function c(C, te, E, Q, F, ae, Ce, se) {
      return E = ae.ref, C = {
        $$typeof: m,
        type: C,
        key: te,
        props: ae,
        _owner: F
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(C, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(C, "ref", { enumerable: !1, value: null }), C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(C, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(C, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ce
      }), Object.defineProperty(C, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    }
    function u(C, te, E, Q, F, ae, Ce, se) {
      var X = te.children;
      if (X !== void 0)
        if (Q)
          if (ce(X)) {
            for (Q = 0; Q < X.length; Q++)
              f(X[Q]);
            Object.freeze && Object.freeze(X);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(X);
      if (Z.call(te, "key")) {
        X = e(C);
        var Y = Object.keys(te).filter(function(me) {
          return me !== "key";
        });
        Q = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", $[X + Q] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Q,
          X,
          Y,
          X
        ), $[X + Q] = !0);
      }
      if (X = null, E !== void 0 && (r(E), X = "" + E), i(te) && (r(te.key), X = "" + te.key), "key" in te) {
        E = {};
        for (var re in te)
          re !== "key" && (E[re] = te[re]);
      } else E = te;
      return X && l(
        E,
        typeof C == "function" ? C.displayName || C.name || "Unknown" : C
      ), c(
        C,
        X,
        ae,
        F,
        o(),
        E,
        Ce,
        se
      );
    }
    function f(C) {
      typeof C == "object" && C !== null && C.$$typeof === m && C._store && (C._store.validated = 1);
    }
    var p = Ze, m = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), I = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), x = Symbol.for("react.client.reference"), B = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.prototype.hasOwnProperty, ce = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(C) {
        return C();
      }
    };
    var y, b = {}, N = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), ue = K(a(s)), $ = {};
    Ot.Fragment = g, Ot.jsx = function(C, te, E, Q, F) {
      var ae = 1e4 > B.recentlyCreatedOwnerStacks++;
      return u(
        C,
        te,
        E,
        !1,
        Q,
        F,
        ae ? Error("react-stack-top-frame") : N,
        ae ? K(a(C)) : ue
      );
    }, Ot.jsxs = function(C, te, E, Q, F) {
      var ae = 1e4 > B.recentlyCreatedOwnerStacks++;
      return u(
        C,
        te,
        E,
        !0,
        Q,
        F,
        ae ? Error("react-stack-top-frame") : N,
        ae ? K(a(C)) : ue
      );
    };
  })()), Ot;
}
var aa;
function Do() {
  return aa || (aa = 1, process.env.NODE_ENV === "production" ? rn.exports = No() : rn.exports = To()), rn.exports;
}
var n = Do(), er = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var sa;
function Io() {
  return sa || (sa = 1, (function(e) {
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
var Ro = Io();
const oe = /* @__PURE__ */ jo(Ro), tm = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = oe(
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
}, Bo = ({
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
      className: oe(
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
          className: oe("nhsuk-account__item nhsuk-header__account-item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
};
function Fo(e) {
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
const { forwardRef: Eo, useCallback: wt, useState: tr } = le;
function Ao(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, u] = tr(!1), [f, p] = tr(!1), [m, v] = tr(!1), g = Fo({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), _ = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", G = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...m && { "data-focused": "true" },
    ..._ && { "data-disabled": "true" }
  }, j = wt(
    () => !_ && u(!0),
    [_]
  ), I = wt(() => u(!1), []), k = wt(
    () => !_ && p(!0),
    [_]
  ), H = wt(() => {
    p(!1), u(!1);
  }, []), A = wt(() => v(!0), []), V = wt(() => v(!1), []), M = wt(
    (X) => {
      X.key === " " && ("href" in d || X.currentTarget.getAttribute("role") === "button") && (X.preventDefault(), X.currentTarget.click());
    },
    [d]
  ), R = wt(
    (X) => {
      if (l) {
        const Y = X.currentTarget;
        if (Y.getAttribute("data-processing") === "true") {
          X.preventDefault();
          return;
        }
        Y.setAttribute("data-processing", "true"), setTimeout(() => {
          Y.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in d && d.href) {
    const {
      id: X,
      style: Y,
      title: re,
      ["aria-label"]: me,
      ["aria-describedby"]: P,
      ["aria-labelledby"]: je,
      tabIndex: ge,
      ...pe
    } = d, de = d;
    return /* @__PURE__ */ n.jsx(
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
        ...G,
        ...l && { "data-prevent-double-click": "true" },
        ...pe,
        onKeyDown: (be) => {
          de.onKeyDown?.(be), M(be);
        },
        onClick: (be) => {
          de.onClick?.(be), R(be);
        },
        onMouseDown: (be) => {
          de.onMouseDown?.(be), j();
        },
        onMouseUp: (be) => {
          de.onMouseUp?.(be), I();
        },
        onMouseEnter: (be) => {
          de.onMouseEnter?.(be), k();
        },
        onMouseLeave: (be) => {
          de.onMouseLeave?.(be), H();
        },
        onFocus: (be) => {
          de.onFocus?.(be), A();
        },
        onBlur: (be) => {
          de.onBlur?.(be), V();
        },
        "aria-disabled": de["aria-disabled"],
        ...de["aria-disabled"] === "true" && { tabIndex: -1 },
        id: X,
        style: Y,
        title: re,
        "aria-label": me,
        "aria-describedby": P,
        "aria-labelledby": je,
        tabIndex: ge,
        children: r
      }
    );
  }
  const {
    id: x,
    style: B,
    title: Z,
    ["aria-label"]: ce,
    ["aria-describedby"]: K,
    ["aria-labelledby"]: y,
    tabIndex: b,
    name: N,
    value: ue,
    form: $,
    formAction: C,
    formEncType: te,
    formMethod: E,
    formNoValidate: Q,
    formTarget: F,
    autoFocus: ae,
    ...Ce
  } = d, se = d;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: se.type || "button",
      disabled: se.disabled,
      className: g.classes,
      "data-module": "nhs-button",
      ...G,
      ...l && { "data-prevent-double-click": "true" },
      ...se.disabled && { "aria-disabled": "true" },
      ...Ce,
      onKeyDown: (X) => {
        se.onKeyDown?.(X), M(X);
      },
      onClick: (X) => {
        se.onClick?.(X), R(X);
      },
      onMouseDown: (X) => {
        se.onMouseDown?.(X), j();
      },
      onMouseUp: (X) => {
        se.onMouseUp?.(X), I();
      },
      onMouseEnter: (X) => {
        se.onMouseEnter?.(X), k();
      },
      onMouseLeave: (X) => {
        se.onMouseLeave?.(X), H();
      },
      onFocus: (X) => {
        se.onFocus?.(X), A();
      },
      onBlur: (X) => {
        se.onBlur?.(X), V();
      },
      id: x,
      style: B,
      title: Z,
      "aria-label": ce,
      "aria-describedby": K,
      "aria-labelledby": y,
      tabIndex: b,
      name: N,
      value: ue,
      form: $,
      formAction: C,
      formEncType: te,
      formMethod: E,
      formNoValidate: Q,
      formTarget: F,
      autoFocus: ae,
      children: r
    }
  );
}
const Ge = Eo(Ao);
Ge.displayName = "Button";
const dr = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = oe(
    "nhsuk-back-link",
    a
  ), d = oe(
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
function Lo(e) {
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
const rt = ({
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
  const u = Lo({ color: a, noBorder: o, closable: s, disabled: l, className: d }), f = (p) => {
    p.preventDefault(), p.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: u.classes, ...c, children: [
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
}, Mo = ({
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
  onFocus: p,
  attributes: m,
  ...v
}) => {
  const [g, _] = we(a), G = r !== void 0, j = G ? r : g;
  Fe(() => {
    G || _(a);
  }, [a, G]);
  const I = (M) => {
    const R = M.target.checked;
    G || _(R), u?.(R, M);
  }, k = i ? `${e}-hint` : void 0, H = l ? `${e}-error` : void 0, A = [k, H].filter(Boolean).join(" ") || void 0, V = oe(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ n.jsx("div", { className: V, ...v, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: j,
        disabled: o,
        onChange: I,
        onBlur: f,
        onFocus: p,
        "aria-describedby": A,
        ...m
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ n.jsx("div", { id: k, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: H, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
Mo.displayName = "Checkbox";
function $o(e) {
  const r = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
const Hr = ({
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
  width: p = "full",
  inputMode: m,
  autoComplete: v,
  maxLength: g,
  minLength: _,
  pattern: G,
  step: j,
  min: I,
  max: k,
  showValueLabels: H = !1,
  showCurrentValue: A = !1,
  valueLabels: V,
  onChange: M,
  onBlur: R,
  onFocus: x,
  onKeyDown: B,
  ...Z
}) => {
  const [ce, K] = we(a || o || (r === "range" ? I || "0" : ""));
  Fe(() => {
    a !== void 0 && K(a);
  }, [a]);
  const y = (F) => {
    const ae = F.target;
    K(ae.value), ("type" in F && F.nativeEvent || F.type === "keydown") && M?.(F);
  }, { classes: b, isRange: N } = $o({ type: r, hasError: c, width: p, className: f }), ue = a !== void 0, $ = {
    id: e,
    name: t,
    type: r,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": u,
    inputMode: m,
    autoComplete: v,
    maxLength: g,
    minLength: _,
    pattern: G,
    step: j,
    min: I,
    max: k,
    onChange: y,
    onBlur: R,
    onFocus: x,
    onKeyDown: (F) => {
      if (N && /[0-9]/.test(F.key)) {
        const ae = (ce?.toString() || "") + F.key;
        F.target.value = ae, y(F);
      }
      B?.(F);
    },
    ...Z
  }, C = !ue && o !== void 0 ? { defaultValue: o } : {}, te = ue ? { value: a } : {}, E = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: b,
      ...te,
      ...C,
      "data-current-value": ce,
      ...$
    }
  ), Q = N ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    H && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: V?.min || I || "0" }),
      E(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: V?.max || k || "100" })
    ] }),
    !H && E(),
    A && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      V?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: ce })
    ] }) })
  ] }) : null;
  return N ? Q : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: b,
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
      inputMode: m,
      autoComplete: v,
      maxLength: g,
      minLength: _,
      pattern: G,
      step: j,
      min: I,
      max: k,
      onChange: M,
      onBlur: R,
      onFocus: x,
      onKeyDown: B,
      ...Z
    }
  );
};
function Ho(e) {
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
const Pr = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = Ho({ size: a, isPageHeading: r, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ n.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
}, zr = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = oe(
    "nhsuk-fieldset",
    r
  ), i = oe(
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
}, Po = ({
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
  attributes: p,
  ...m
}) => {
  const [v, g] = we(
    e.filter((M) => M.checked).map((M) => M.value)
  ), _ = r || t, G = i ? `${_}-hint` : void 0, j = l ? `${_}-error` : void 0, I = [G, j].filter(Boolean).join(" ") || void 0, k = (M, R) => {
    let x;
    R ? x = [...v, M] : x = v.filter((B) => B !== M), g(x), u?.(x);
  }, H = () => e.map((M, R) => {
    const x = `${_}-${R + 1}`, B = `${x}-conditional`, Z = v.includes(M.value), ce = M.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: x,
          name: t,
          type: "checkbox",
          value: M.value,
          checked: Z,
          disabled: ce,
          onChange: (K) => k(M.value, K.target.checked),
          "aria-describedby": M.hint ? `${x}-hint` : I,
          ...M.conditional && {
            "aria-controls": B,
            "aria-expanded": Z ? "true" : "false"
          },
          ...M.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: x, children: M.text }),
      M.hint && /* @__PURE__ */ n.jsx("div", { id: `${x}-hint`, className: "nhsuk-checkboxes__hint", children: M.hint }),
      M.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: oe("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !Z
          }),
          id: B,
          children: typeof M.conditional == "object" && M.conditional !== null && "label" in M.conditional && "id" in M.conditional && "name" in M.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            M.conditional.label && /* @__PURE__ */ n.jsx(Pr, { htmlFor: M.conditional.id, children: M.conditional.label }),
            /* @__PURE__ */ n.jsx(Hr, { ...M.conditional })
          ] }) : M.conditional
        }
      )
    ] }, M.value);
  }), A = oe(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": c
    },
    d
  ), V = oe("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: V, ...p, ...m, children: /* @__PURE__ */ n.jsxs(
    zr,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: I,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: G, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: j, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: A, children: H() })
      ]
    }
  ) });
};
Po.displayName = "Checkboxes";
const zo = ({
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
  cols: p,
  maxLength: m,
  minLength: v,
  wrap: g = "soft",
  resize: _ = "vertical",
  autoComplete: G,
  spellCheck: j,
  onChange: I,
  onBlur: k,
  onFocus: H,
  onKeyDown: A,
  ...V
}) => {
  const M = oe(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": d,
      [`nhsuk-textarea--resize-${_}`]: _ !== "vertical"
    },
    u
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: M,
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
      cols: p,
      maxLength: m,
      minLength: v,
      wrap: g,
      autoComplete: G,
      spellCheck: j,
      onChange: I,
      onBlur: k,
      onFocus: H,
      onKeyDown: A,
      ...V
    }
  );
};
function Wo(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Ua = ({ id: e, className: t, children: r, ...a }) => {
  const o = Wo({ id: e, className: t });
  return /* @__PURE__ */ n.jsx("div", { className: o.classes, id: o.id, ...a, children: r });
}, nm = ({
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
  const [p, m] = we(s), [v, g] = we(0), [_, G] = we(!1), [j, I] = we(!1), k = ee((x) => r ? x.trim() === "" ? 0 : x.trim().split(/\s+/).length : x.length, [r]);
  Fe(() => {
    const x = k(p), B = t || r || 0, Z = B - x, ce = Math.floor(B * (a / 100));
    g(Z), G(x > B), I(x >= ce || x > B), c && c(x, Z);
  }, [p, t, r, a, k, c]);
  const H = (x) => {
    const B = x.target.value;
    m(B), u && u(x);
  }, A = () => {
    const x = t || r || 0, B = r ? "word" : "character", Z = r ? "words" : "characters";
    if (!j)
      return `You can enter up to ${x} ${x === 1 ? B : Z}`;
    if (_) {
      const ce = Math.abs(v);
      return `You have ${ce} ${ce === 1 ? B : Z} too many`;
    } else
      return `You have ${v} ${v === 1 ? B : Z} remaining`;
  }, V = oe(
    "nhsuk-character-count",
    l
  ), M = oe(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !j,
      "nhsuk-error-message": _
    },
    d?.classes
  ), R = oe(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": _
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: V,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          zo,
          {
            id: e,
            name: o,
            value: p,
            rows: i,
            className: R,
            onChange: H,
            "aria-describedby": `${e}-info`,
            "aria-invalid": _ || void 0,
            ...f
          }
        ),
        /* @__PURE__ */ n.jsx(
          Ua,
          {
            id: `${e}-info`,
            className: M,
            role: "status",
            "aria-live": "polite",
            children: A()
          }
        )
      ]
    }
  );
}, Uo = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = oe(
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
}, Oo = ({
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
  autoComplete: p,
  options: m,
  children: v,
  onChange: g,
  onBlur: _,
  onFocus: G,
  ...j
}) => {
  const I = oe(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    c
  ), k = () => m ? m.map((A, V) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: A.value,
      disabled: A.disabled,
      "data-initial-selected": A.selected || void 0,
      children: A.text
    },
    `${A.value}-${V}`
  )) : null, H = o === void 0 && a === void 0 && m ? m.find((A) => A.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: I,
      id: e,
      name: t,
      "aria-label": r,
      value: a,
      defaultValue: o !== void 0 ? o : H,
      disabled: s,
      required: i,
      "aria-describedby": d,
      multiple: u,
      size: f,
      autoComplete: p,
      onChange: g,
      onBlur: _,
      onFocus: G,
      ...j,
      children: v || k()
    }
  );
}, cn = Oo;
cn.Option = Uo;
function Oa(e, {
  variant: t,
  selectedValue: r,
  enableBehaviourAttr: a,
  handleChange: o,
  handleBlur: s,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: d
}) {
  const {
    name: c,
    hasError: u = !1,
    describedBy: f,
    className: p,
    size: m = "normal",
    inline: v = !1,
    options: g,
    ..._
  } = e, G = oe(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": u,
      "nhsuk-radios--small": m === "small",
      "nhsuk-radios--inline": v
    },
    p
  );
  return /* @__PURE__ */ n.jsx(zr, { children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: G,
      ..._,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: g.map((j, I) => {
        const k = `${c}-${I}`, H = j.conditional ? `${k}-conditional` : void 0, A = r === j.value;
        return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: k,
              name: c,
              type: "radio",
              value: j.value,
              disabled: j.disabled,
              ...t === "client" ? { checked: A, onChange: o, onBlur: s, onFocus: i, onKeyDown: l, ref: (V) => {
                V && d && (d.current[I] = V);
              } } : { defaultChecked: A, "data-nhs-radios-input": !0 },
              "aria-describedby": f
            }
          ),
          /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: k, children: j.text }),
          j.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: j.hint }),
          j.conditional && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: oe("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !A
              }),
              id: H,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof j.conditional == "object" && j.conditional !== null && "label" in j.conditional && "id" in j.conditional && "name" in j.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
                j.conditional.label && /* @__PURE__ */ n.jsx(Pr, { htmlFor: j.conditional.id, children: j.conditional.label }),
                /* @__PURE__ */ n.jsx(Hr, { ...j.conditional })
              ] }) : j.conditional
            }
          )
        ] }, j.value);
      })
    }
  ) });
}
const rm = ({ value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = we(e || t || ""), d = Te([]), c = (f) => {
    const p = f.target.value;
    l(p), r?.(f);
  }, u = ee((f) => {
    const { key: p } = f;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(p)) return;
    f.preventDefault();
    const m = d.current.filter((G) => G && !G.disabled), v = m.indexOf(f.currentTarget);
    if (v === -1) return;
    let g = v;
    ["ArrowDown", "ArrowRight"].includes(p) ? g = (v + 1) % m.length : ["ArrowUp", "ArrowLeft"].includes(p) && (g = (v - 1 + m.length) % m.length);
    const _ = m[g];
    _ && (_.focus(), _.checked || _.click());
  }, []);
  return Oa(
    { value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: o, ...s },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: c,
      handleBlur: a,
      handleFocus: o,
      handleKeyDown: u,
      itemsRef: d
    }
  );
}, am = ({ value: e, defaultValue: t, ...r }) => {
  const a = e || t || "";
  return Oa(
    { value: e, defaultValue: t, ...r },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0
    }
  );
}, Ga = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = oe(
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
  const o = oe("nhsuk-grid-row", t);
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
  const u = oe(
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
}, Go = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const d = i || (t === "number" ? "ol" : "ul"), c = oe(
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
}, Vo = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = oe("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, Yo = Go;
Yo.Item = Vo;
const sm = ({
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
}, om = {
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
}, im = ({
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
}, lm = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, cm = [
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
};
function qo(e) {
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
function Ko(e) {
  const t = e.level ?? qo(e.size), r = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: r, style: a };
}
const xt = ({ level: e, className: t, text: r, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const d = Ko({ level: e, size: s, className: t, marginBottom: i }), c = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r);
  return Pa(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function Zo(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const oa = ({ id: e, className: t, visuallyHiddenText: r = "Error:", children: a, ...o }) => {
  const s = Zo({ id: e, className: t, visuallyHiddenText: r });
  return /* @__PURE__ */ n.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, dm = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const d = Te(null);
  Fe(() => {
    d.current && d.current.focus();
  }, []);
  const c = oe(
    "nhsuk-error-summary",
    s
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, p = (m) => {
    const v = m.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: m.html } }) : m.text;
    return m.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: m.href,
        ...m.attributes,
        children: v
      }
    ) : v;
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
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((m, v) => /* @__PURE__ */ n.jsx("li", { children: p(m) }, v)) })
        ] })
      ]
    }
  );
}, um = ({
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
  const [u, f] = we(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [p, m] = we({}), v = (y) => y % 4 === 0 && y % 100 !== 0 || y % 400 === 0, g = (y, b) => {
    const N = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return y === 2 && v(b) ? 29 : N[y - 1];
  }, _ = (y, b, N) => {
    if (!y) return;
    if (!/^\d+$/.test(y)) return "Day must be a number";
    const ue = parseInt(y, 10);
    if (ue < 1 || ue > 31) return "Day must be between 1 and 31";
    if (b && N) {
      const $ = parseInt(b, 10), C = parseInt(N, 10);
      if (!isNaN($) && !isNaN(C) && $ >= 1 && $ <= 12) {
        const te = g($, C);
        if (ue > te)
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
          ][$ - 1]} ${C} only has ${te} days`;
      }
    }
  }, G = (y) => {
    if (!y) return;
    if (!/^\d+$/.test(y)) return "Month must be a number";
    const b = parseInt(y, 10);
    if (b < 1 || b > 12) return "Month must be between 1 and 12";
  }, j = (y) => {
    if (!y) return;
    if (!/^\d+$/.test(y)) return "Year must be a number";
    const b = parseInt(y, 10), N = (/* @__PURE__ */ new Date()).getFullYear();
    if (b < 1900 || b > N + 10)
      return `Year must be between 1900 and ${N + 10}`;
  }, I = (y, b, N) => {
    if (!y || !b || !N) return;
    const ue = parseInt(y, 10), $ = parseInt(b, 10), C = parseInt(N, 10);
    if (isNaN(ue) || isNaN($) || isNaN(C) || $ < 1 || $ > 12 || C < 1900) return;
    const te = g($, C);
    ue < 1 || ue > te;
  }, k = ee((y, b) => {
    const N = {
      ...u,
      [y]: b
    };
    f(N), d && d(N);
  }, [u, d]), H = ee((y) => {
    const b = u[y];
    let N;
    if (y === "day")
      N = _(b, u.month, u.year);
    else if (y === "month") {
      if (N = G(b), !N && u.day) {
        const ue = _(u.day, b, u.year);
        m(($) => ({
          ...$,
          day: ue
        }));
      }
    } else if (y === "year" && (N = j(b), !N && u.day && u.month)) {
      const ue = _(u.day, u.month, b);
      m(($) => ({
        ...$,
        day: ue
      }));
    }
    if (m((ue) => ({
      ...ue,
      [y]: N
    })), u.day && u.month && u.year) {
      const ue = I(
        y === "day" ? b : u.day,
        y === "month" ? b : u.month,
        y === "year" ? b : u.year
      );
      ue && m(($) => ({
        ...$,
        day: ue
      }));
    }
  }, [u, _, G, j, I]), A = De(() => [
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
  ], []), V = r || A;
  let M = s?.describedBy || "";
  const R = i ? `${e}-hint` : "", x = l ? `${e}-error` : "";
  R && (M = M ? `${M} ${R}` : R), x && (M = M ? `${M} ${x}` : x);
  const B = Object.values(p).some((y) => y), Z = oe(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || B
    }
  ), ce = oe(
    "nhsuk-date-input",
    t
  ), K = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Ua,
      {
        id: R,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      oa,
      {
        id: x,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(p).map(
      ([y, b]) => b ? /* @__PURE__ */ n.jsxs(
        oa,
        {
          id: `${e}-${y}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            b
          ]
        },
        `${y}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: ce, id: e, "data-testid": "date-input", ...c, children: V.map((y) => {
      const b = y.id || `${e}-${y.name}`, N = a ? `${a}[${y.name}]` : y.name, ue = y.label || y.name.charAt(0).toUpperCase() + y.name.slice(1), $ = p[y.name], C = u[y.name] || "";
      let te = M;
      if ($) {
        const E = `${e}-${y.name}-error`;
        te = te ? `${te} ${E}` : E;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          Pr,
          {
            htmlFor: b,
            className: "nhsuk-date-input__label",
            children: ue
          }
        ),
        /* @__PURE__ */ n.jsx(
          Hr,
          {
            id: b,
            name: N,
            value: C,
            className: oe("nhsuk-date-input__input", y.classes, {
              "nhsuk-input--error": $
            }),
            inputMode: y.inputmode,
            autoComplete: y.autocomplete,
            pattern: y.pattern,
            "aria-describedby": te || void 0,
            hasError: !!$,
            onChange: (E) => k(y.name, E.target.value),
            onBlur: () => H(y.name)
          }
        )
      ] }, y.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: Z, children: s ? /* @__PURE__ */ n.jsx(
    zr,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: M || void 0,
      children: K()
    }
  ) : K() });
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
}, qa = Co(Ya), Jo = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Ya, ...t };
  return /* @__PURE__ */ n.jsx(qa.Provider, { value: r, children: e });
}, hm = () => {
  const e = So(qa);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Xo() {
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
function Qo() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Xo(), document.head.appendChild(e);
}
const fm = ({ children: e, theme: t }) => (Fe(() => {
  Qo();
}, []), /* @__PURE__ */ n.jsx(Jo, { theme: t, children: e })), ei = ({
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
  showResults: p = !1,
  results: m = [],
  formAttributes: v = {},
  inputAttributes: g = {},
  buttonAttributes: _ = {},
  preventDefaultSubmit: G = !1,
  debounceMs: j = 300,
  minQueryLength: I = 1
}) => {
  const [k, H] = we(""), [A, V] = we(!1), M = Te(void 0), R = Te(null), x = Te(null), B = e === "controlled" && o !== void 0, Z = B ? o : k, ce = ee((Q) => {
    M.current && clearTimeout(M.current), M.current = setTimeout(() => {
      u.onChange && Q.length >= I && u.onChange(Q);
    }, j);
  }, [u.onChange, j, I]), K = ee((Q) => {
    const F = Q.target.value;
    B || H(F), e !== "form" && ce(F);
  }, [B, e, ce]), y = ee((Q) => {
    const F = Z.trim(), ae = {
      query: F,
      timestamp: Date.now(),
      formData: new FormData(Q.currentTarget)
    };
    e === "controlled" || e === "hybrid" && G ? (Q.preventDefault(), u.onSearch && F.length >= I && u.onSearch(ae)) : e === "hybrid" && u.onSearch && F.length >= I && u.onSearch(ae);
  }, [e, Z, u.onSearch, G, I]), b = ee(() => {
    V(!0), u.onFocus?.();
  }, [u.onFocus]), N = ee(() => {
    V(!1), u.onBlur?.();
  }, [u.onBlur]), ue = ee(() => {
    B || H(""), u.onClear?.(), x.current?.focus();
  }, [B, u.onClear]);
  Fe(() => () => {
    M.current && clearTimeout(M.current);
  }, []);
  const $ = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: oe("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": f
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), C = () => /* @__PURE__ */ n.jsx(
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
  ), te = () => !Z || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ue,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), E = () => !p || !m.length || !A ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: m.map((Q) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: Q.href ? /* @__PURE__ */ n.jsxs("a", { href: Q.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: Q.title }),
    Q.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: Q.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => u.onSearch?.({ query: Q.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: Q.title }),
        Q.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: Q.description })
      ]
    }
  ) }, Q.id)) });
  return /* @__PURE__ */ n.jsxs("div", { className: oe("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": A,
    "nhsuk-header__search--has-results": p && m.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: R,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        role: "search",
        onSubmit: y,
        ...v,
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
                ref: x,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: Z,
                onChange: K,
                onFocus: b,
                onBlur: N,
                disabled: c || f,
                ...p && m.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...g
              }
            ),
            te()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || f || e !== "form" && Z.length < I,
              ..._,
              children: [
                f ? C() : $(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    E()
  ] });
};
function ti(e, {
  variant: t,
  isClient: r,
  menuOpen: a = !1,
  showMoreButton: o = !1,
  visibleItems: s,
  dropdownVisible: i,
  toggleMenu: l
}) {
  const {
    className: d,
    logo: c = {},
    service: u = {},
    organisation: f,
    search: p,
    account: m,
    navigation: v,
    containerClasses: g,
    variant: _ = "default",
    attributes: G = {},
    maxVisibleItems: j,
    ...I
  } = e;
  "maxVisibleItems" in I && delete I.maxVisibleItems;
  const k = u.href && !c.href || u.href && u.href === c.href, H = k ? u.href : c.href, A = oe(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": _ === "organisation" || f,
      "nhsuk-header--white": _ === "white"
    },
    d
  ), V = oe("nhsuk-header__container", "nhsuk-width-container", g), M = oe(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": v?.white,
      "nhsuk-header__navigation--justified": v?.justified
    },
    v?.className
  ), R = () => /* @__PURE__ */ n.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": c.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ n.jsx("title", { children: c.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), x = () => c.src ? /* @__PURE__ */ n.jsx("img", { className: "nhsuk-header__organisation-logo", src: c.src, width: "280", alt: c.ariaLabel || "NHS" }) : R(), B = () => f ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      f.name,
      f.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        " ",
        f.split
      ] })
    ] }),
    f.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: f.descriptor })
  ] }) : null, Z = (y, b) => y ? b ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: b, children: y }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: y }) : null, ce = (y) => y.active || y.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: y.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } }) : y.text }) : y.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } }) : y.text, K = () => /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__chevron-down", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 7", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M1.414 0 6 4.586 10.586 0 12 1.414 6 7 0 1.414 1.414 0Z" }) });
  return v?.items, /* @__PURE__ */ n.jsxs("header", { className: A, role: "banner", "data-module": "nhsuk-header", ...G, ...I, children: [
    /* @__PURE__ */ n.jsxs("div", { className: V, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
        H ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: H, children: [
          x(),
          B(),
          k && Z(u.text)
        ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          x(),
          B(),
          k && Z(u.text)
        ] }),
        u.text && !k && Z(u.text, u.href)
      ] }),
      p && /* @__PURE__ */ n.jsx(ei, { ...p }),
      /* @__PURE__ */ n.jsx(Bo, { ...m, variant: _ === "white" ? "white" : "default" })
    ] }),
    v && v.items && v.items.length > 0 && /* @__PURE__ */ n.jsx("nav", { className: M, "aria-label": v.ariaLabel || "Menu", children: /* @__PURE__ */ n.jsx(
      "div",
      {
        className: oe(
          "nhsuk-header__navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--initializing": r && t === "client",
            "nhsuk-header__navigation-container--ssr": !r
          },
          g
        ),
        children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", children: [
          (v?.items || []).slice(0, s ?? (v?.items?.length || 0)).map((y, b) => /* @__PURE__ */ n.jsx(
            "li",
            {
              className: oe(
                "nhsuk-header__navigation-item",
                {
                  "nhsuk-header__navigation-item--current": y.active || y.current
                },
                y.className
              ),
              ...y.attributes || {},
              children: /* @__PURE__ */ n.jsx(
                "a",
                {
                  className: "nhsuk-header__navigation-link",
                  href: y.href,
                  ...y.active || y.current ? { "aria-current": y.current ? "page" : "true" } : {},
                  children: ce(y)
                }
              )
            },
            b
          )),
          o && s !== void 0 && v?.items && s < v.items.length && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__navigation-button", id: "toggle-more-menu", onClick: l, type: "button", children: [
            /* @__PURE__ */ n.jsx("span", { children: "More" }),
            K()
          ] }) })
        ] })
      }
    ) }),
    r && v && v.items && v.items.length > 0 && a && i && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__dropdown-menu", hidden: !i, children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: v.items.slice(s ?? 0).map((y, b) => /* @__PURE__ */ n.jsx(
      "li",
      {
        className: oe("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": y.active || y.current
        }),
        children: /* @__PURE__ */ n.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: y.href,
            ...y.active || y.current ? { "aria-current": y.current ? "page" : "true" } : {},
            onClick: () => {
              l?.();
            },
            children: ce(y)
          }
        )
      },
      `overflow-${(s ?? 0) + b}`
    )) }) }),
    t === "server"
  ] });
}
const Ka = ({
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
  const [f, p] = we(!1), [m] = we(!1), [v] = we(i?.items?.length || 0), [g, _] = we(!1), [G, j] = we(!1);
  Fe(() => {
    typeof window > "u" || j(!0);
  }, []), Fe(() => {
    if (typeof document > "u") return;
    const k = (H) => {
      H.key === "Escape" && f && p(!1);
    };
    if (f)
      return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [f]);
  const I = (k) => {
    k && (k.preventDefault(), k.stopPropagation());
    const H = !f;
    p(H), _(H);
  };
  return ti(
    { className: e, logo: t, service: r, organisation: a, search: o, account: s, navigation: i, containerClasses: l, variant: d, attributes: c, ...u },
    {
      variant: "client",
      isClient: G,
      menuOpen: f,
      showMoreButton: m,
      visibleItems: v,
      dropdownVisible: g,
      toggleMenu: I
    }
  );
}, ni = ({
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
  ].filter(Boolean).join(" "), p = [
    "nhsuk-hero__heading",
    r,
    !d && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), m = d || e || a || o, v = () => {
    if (!e) return null;
    const g = { className: p };
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
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: m && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          v(),
          d || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && m && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          v(),
          d || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
ni.displayName = "Hero";
const Za = ({
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
  const f = (m, v = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: oe("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": v
      }),
      children: /* @__PURE__ */ n.jsx(
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
  ), p = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: oe("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: oe("nhsuk-footer", e), style: c, children: p ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((m) => f(m)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((m) => f(m)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((m) => f(m)) }),
              o && o.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((m) => f(m)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((m) => f(m, !0)),
              (r || []).map((m) => f(m, !0)),
              (a || []).map((m) => f(m, !0)),
              (o || []).map((m) => f(m, !0))
            ] })
          ) }),
          !p && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    p && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function ln(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ri(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Wr(e) {
  let t, r, a;
  e.length !== 2 ? (t = ln, r = (l, d) => ln(e(l), d), a = (l, d) => e(l) - d) : (t = e === ln || e === ri ? e : ai, r = e, a = e);
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
function ai() {
  return 0;
}
function si(e) {
  return e === null ? NaN : +e;
}
const oi = Wr(ln), ii = oi.right;
Wr(si).center;
const li = Math.sqrt(50), ci = Math.sqrt(10), di = Math.sqrt(2);
function Ja(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= li ? 10 : s >= ci ? 5 : s >= di ? 2 : 1;
  let l, d, c;
  return o < 0 ? (c = Math.pow(10, -o) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, o) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= r && r < 2 ? Ja(e, t, r * 2) : [l, d, c];
}
function ia(e, t, r) {
  return t = +t, e = +e, r = +r, Ja(e, t, r)[2];
}
function la(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? ia(t, e, r) : ia(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function ui(e, t) {
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
function Xa(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function Qt() {
}
var Zt = 0.7, dn = 1 / Zt, Mt = "\\s*([+-]?\\d+)\\s*", Jt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", hi = /^#([0-9a-f]{3,8})$/, fi = new RegExp(`^rgb\\(${Mt},${Mt},${Mt}\\)$`), mi = new RegExp(`^rgb\\(${nt},${nt},${nt}\\)$`), pi = new RegExp(`^rgba\\(${Mt},${Mt},${Mt},${Jt}\\)$`), gi = new RegExp(`^rgba\\(${nt},${nt},${nt},${Jt}\\)$`), bi = new RegExp(`^hsl\\(${Jt},${nt},${nt}\\)$`), xi = new RegExp(`^hsla\\(${Jt},${nt},${nt},${Jt}\\)$`), ca = {
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
  hex: da,
  // Deprecated! Use color.formatHex.
  formatHex: da,
  formatHex8: yi,
  formatHsl: vi,
  formatRgb: ua,
  toString: ua
});
function da() {
  return this.rgb().formatHex();
}
function yi() {
  return this.rgb().formatHex8();
}
function vi() {
  return Qa(this).formatHsl();
}
function ua() {
  return this.rgb().formatRgb();
}
function Xt(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = hi.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? ha(t) : r === 3 ? new Ke(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? an(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? an(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = fi.exec(e)) ? new Ke(t[1], t[2], t[3], 1) : (t = mi.exec(e)) ? new Ke(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = pi.exec(e)) ? an(t[1], t[2], t[3], t[4]) : (t = gi.exec(e)) ? an(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = bi.exec(e)) ? pa(t[1], t[2] / 100, t[3] / 100, 1) : (t = xi.exec(e)) ? pa(t[1], t[2] / 100, t[3] / 100, t[4]) : ca.hasOwnProperty(e) ? ha(ca[e]) : e === "transparent" ? new Ke(NaN, NaN, NaN, 0) : null;
}
function ha(e) {
  return new Ke(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function an(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new Ke(e, t, r, a);
}
function _i(e) {
  return e instanceof Qt || (e = Xt(e)), e ? (e = e.rgb(), new Ke(e.r, e.g, e.b, e.opacity)) : new Ke();
}
function hr(e, t, r, a) {
  return arguments.length === 1 ? _i(e) : new Ke(e, t, r, a ?? 1);
}
function Ke(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
Ur(Ke, hr, Xa(Qt, {
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
  hex: fa,
  // Deprecated! Use color.formatHex.
  formatHex: fa,
  formatHex8: ki,
  formatRgb: ma,
  toString: ma
}));
function fa() {
  return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}`;
}
function ki() {
  return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}${Ct((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ma() {
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
function pa(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Xe(e, t, r, a);
}
function Qa(e) {
  if (e instanceof Xe) return new Xe(e.h, e.s, e.l, e.opacity);
  if (e instanceof Qt || (e = Xt(e)), !e) return new Xe();
  if (e instanceof Xe) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, d = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= d < 0.5 ? s + o : 2 - s - o, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new Xe(i, l, d, e.opacity);
}
function wi(e, t, r, a) {
  return arguments.length === 1 ? Qa(e) : new Xe(e, t, r, a ?? 1);
}
function Xe(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
Ur(Xe, wi, Xa(Qt, {
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
    return new Xe(ga(this.h), sn(this.s), sn(this.l), un(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = un(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ga(this.h)}, ${sn(this.s) * 100}%, ${sn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ga(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function sn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function nr(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Or = (e) => () => e;
function Si(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Ci(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function ji(e) {
  return (e = +e) == 1 ? es : function(t, r) {
    return r - t ? Ci(t, r, e) : Or(isNaN(t) ? r : t);
  };
}
function es(e, t) {
  var r = t - e;
  return r ? Si(e, r) : Or(isNaN(e) ? t : e);
}
const ba = (function e(t) {
  var r = ji(t);
  function a(o, s) {
    var i = r((o = hr(o)).r, (s = hr(s)).r), l = r(o.g, s.g), d = r(o.b, s.b), c = es(o.opacity, s.opacity);
    return function(u) {
      return o.r = i(u), o.g = l(u), o.b = d(u), o.opacity = c(u), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Ni(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Ti(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Di(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = Gr(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Ii(e, t) {
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
function Ri(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = Gr(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var fr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rr = new RegExp(fr.source, "g");
function Bi(e) {
  return function() {
    return e;
  };
}
function Fi(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ei(e, t) {
  var r = fr.lastIndex = rr.lastIndex = 0, a, o, s, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = fr.exec(e)) && (o = rr.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, d.push({ i, x: hn(a, o) })), r = rr.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? d[0] ? Fi(d[0].x) : Bi(t) : (t = d.length, function(c) {
    for (var u = 0, f; u < t; ++u) l[(f = d[u]).i] = f.x(c);
    return l.join("");
  });
}
function Gr(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? Or(t) : (r === "number" ? hn : r === "string" ? (a = Xt(t)) ? (t = a, ba) : Ei : t instanceof Xt ? ba : t instanceof Date ? Ii : Ti(t) ? Ni : Array.isArray(t) ? Di : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Ri : hn)(e, t);
}
function Ai(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Li(e) {
  return function() {
    return e;
  };
}
function Mi(e) {
  return +e;
}
var xa = [0, 1];
function At(e) {
  return e;
}
function mr(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Li(isNaN(t) ? NaN : 0.5);
}
function $i(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Hi(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = mr(o, a), s = r(i, s)) : (a = mr(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function Pi(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = mr(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var d = ii(e, l, 1, a) - 1;
    return s[d](o[d](l));
  };
}
function zi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Wi() {
  var e = xa, t = xa, r = Gr, a, o, s, i = At, l, d, c;
  function u() {
    var p = Math.min(e.length, t.length);
    return i !== At && (i = $i(e[0], e[p - 1])), l = p > 2 ? Pi : Hi, d = c = null, f;
  }
  function f(p) {
    return p == null || isNaN(p = +p) ? s : (d || (d = l(e.map(a), t, r)))(a(i(p)));
  }
  return f.invert = function(p) {
    return i(o((c || (c = l(t, e.map(a), hn)))(p)));
  }, f.domain = function(p) {
    return arguments.length ? (e = Array.from(p, Mi), u()) : e.slice();
  }, f.range = function(p) {
    return arguments.length ? (t = Array.from(p), u()) : t.slice();
  }, f.rangeRound = function(p) {
    return t = Array.from(p), r = Ai, u();
  }, f.clamp = function(p) {
    return arguments.length ? (i = p ? !0 : At, u()) : i !== At;
  }, f.interpolate = function(p) {
    return arguments.length ? (r = p, u()) : r;
  }, f.unknown = function(p) {
    return arguments.length ? (s = p, f) : s;
  }, function(p, m) {
    return a = p, o = m, u();
  };
}
function Ui() {
  return Wi()(At, At);
}
function Oi(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const ar = /* @__PURE__ */ new Date(), sr = /* @__PURE__ */ new Date();
function ze(e, t, r, a) {
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
  }, o.filter = (s) => ze((i) => {
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
const fn = ze(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
fn.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ze((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : fn);
fn.range;
const gt = 1e3, Je = gt * 60, bt = Je * 60, yt = bt * 24, Vr = yt * 7, ya = yt * 30, or = yt * 365, Lt = ze((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * gt);
}, (e, t) => (t - e) / gt, (e) => e.getUTCSeconds());
Lt.range;
const Yr = ze((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * gt);
}, (e, t) => {
  e.setTime(+e + t * Je);
}, (e, t) => (t - e) / Je, (e) => e.getMinutes());
Yr.range;
const Gi = ze((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Je);
}, (e, t) => (t - e) / Je, (e) => e.getUTCMinutes());
Gi.range;
const qr = ze((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * gt - e.getMinutes() * Je);
}, (e, t) => {
  e.setTime(+e + t * bt);
}, (e, t) => (t - e) / bt, (e) => e.getHours());
qr.range;
const Vi = ze((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * bt);
}, (e, t) => (t - e) / bt, (e) => e.getUTCHours());
Vi.range;
const en = ze(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Je) / yt,
  (e) => e.getDate() - 1
);
en.range;
const Kr = ze((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / yt, (e) => e.getUTCDate() - 1);
Kr.range;
const Yi = ze((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / yt, (e) => Math.floor(e / yt));
Yi.range;
function Dt(e) {
  return ze((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Je) / Vr);
}
const On = Dt(0), mn = Dt(1), qi = Dt(2), Ki = Dt(3), $t = Dt(4), Zi = Dt(5), Ji = Dt(6);
On.range;
mn.range;
qi.range;
Ki.range;
$t.range;
Zi.range;
Ji.range;
function It(e) {
  return ze((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Vr);
}
const ts = It(0), pn = It(1), Xi = It(2), Qi = It(3), Ht = It(4), el = It(5), tl = It(6);
ts.range;
pn.range;
Xi.range;
Qi.range;
Ht.range;
el.range;
tl.range;
const Zr = ze((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Zr.range;
const nl = ze((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
nl.range;
const vt = ze((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
vt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ze((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
vt.range;
const Tt = ze((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Tt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ze((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Tt.range;
function rl(e, t, r, a, o, s) {
  const i = [
    [Lt, 1, gt],
    [Lt, 5, 5 * gt],
    [Lt, 15, 15 * gt],
    [Lt, 30, 30 * gt],
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
    [r, 1, Vr],
    [t, 1, ya],
    [t, 3, 3 * ya],
    [e, 1, or]
  ];
  function l(c, u, f) {
    const p = u < c;
    p && ([c, u] = [u, c]);
    const m = f && typeof f.range == "function" ? f : d(c, u, f), v = m ? m.range(c, +u + 1) : [];
    return p ? v.reverse() : v;
  }
  function d(c, u, f) {
    const p = Math.abs(u - c) / f, m = Wr(([, , _]) => _).right(i, p);
    if (m === i.length) return e.every(la(c / or, u / or, f));
    if (m === 0) return fn.every(Math.max(la(c, u, f), 1));
    const [v, g] = i[p / i[m - 1][2] < i[m][2] / p ? m - 1 : m];
    return v.every(g);
  }
  return [l, d];
}
const [al, sl] = rl(vt, Zr, On, en, qr, Yr);
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
function ol(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = Vt(o), u = Yt(o), f = Vt(s), p = Yt(s), m = Vt(i), v = Yt(i), g = Vt(l), _ = Yt(l), G = Vt(d), j = Yt(d), I = {
    a: N,
    A: ue,
    b: $,
    B: C,
    c: null,
    d: Ca,
    e: Ca,
    f: Dl,
    g: Hl,
    G: zl,
    H: jl,
    I: Nl,
    j: Tl,
    L: ns,
    m: Il,
    M: Rl,
    p: te,
    q: E,
    Q: Ta,
    s: Da,
    S: Bl,
    u: Fl,
    U: El,
    V: Al,
    w: Ll,
    W: Ml,
    x: null,
    X: null,
    y: $l,
    Y: Pl,
    Z: Wl,
    "%": Na
  }, k = {
    a: Q,
    A: F,
    b: ae,
    B: Ce,
    c: null,
    d: ja,
    e: ja,
    f: Vl,
    g: nc,
    G: ac,
    H: Ul,
    I: Ol,
    j: Gl,
    L: as,
    m: Yl,
    M: ql,
    p: se,
    q: X,
    Q: Ta,
    s: Da,
    S: Kl,
    u: Zl,
    U: Jl,
    V: Xl,
    w: Ql,
    W: ec,
    x: null,
    X: null,
    y: tc,
    Y: rc,
    Z: sc,
    "%": Na
  }, H = {
    a: x,
    A: B,
    b: Z,
    B: ce,
    c: K,
    d: wa,
    e: wa,
    f: kl,
    g: ka,
    G: _a,
    H: Sa,
    I: Sa,
    j: xl,
    L: _l,
    m: bl,
    M: yl,
    p: R,
    q: gl,
    Q: Sl,
    s: Cl,
    S: vl,
    u: ul,
    U: hl,
    V: fl,
    w: dl,
    W: ml,
    x: y,
    X: b,
    y: ka,
    Y: _a,
    Z: pl,
    "%": wl
  };
  I.x = A(r, I), I.X = A(a, I), I.c = A(t, I), k.x = A(r, k), k.X = A(a, k), k.c = A(t, k);
  function A(Y, re) {
    return function(me) {
      var P = [], je = -1, ge = 0, pe = Y.length, de, be, Ve;
      for (me instanceof Date || (me = /* @__PURE__ */ new Date(+me)); ++je < pe; )
        Y.charCodeAt(je) === 37 && (P.push(Y.slice(ge, je)), (be = va[de = Y.charAt(++je)]) != null ? de = Y.charAt(++je) : be = de === "e" ? " " : "0", (Ve = re[de]) && (de = Ve(me, be)), P.push(de), ge = je + 1);
      return P.push(Y.slice(ge, je)), P.join("");
    };
  }
  function V(Y, re) {
    return function(me) {
      var P = Gt(1900, void 0, 1), je = M(P, Y, me += "", 0), ge, pe;
      if (je != me.length) return null;
      if ("Q" in P) return new Date(P.Q);
      if ("s" in P) return new Date(P.s * 1e3 + ("L" in P ? P.L : 0));
      if (re && !("Z" in P) && (P.Z = 0), "p" in P && (P.H = P.H % 12 + P.p * 12), P.m === void 0 && (P.m = "q" in P ? P.q : 0), "V" in P) {
        if (P.V < 1 || P.V > 53) return null;
        "w" in P || (P.w = 1), "Z" in P ? (ge = lr(Gt(P.y, 0, 1)), pe = ge.getUTCDay(), ge = pe > 4 || pe === 0 ? pn.ceil(ge) : pn(ge), ge = Kr.offset(ge, (P.V - 1) * 7), P.y = ge.getUTCFullYear(), P.m = ge.getUTCMonth(), P.d = ge.getUTCDate() + (P.w + 6) % 7) : (ge = ir(Gt(P.y, 0, 1)), pe = ge.getDay(), ge = pe > 4 || pe === 0 ? mn.ceil(ge) : mn(ge), ge = en.offset(ge, (P.V - 1) * 7), P.y = ge.getFullYear(), P.m = ge.getMonth(), P.d = ge.getDate() + (P.w + 6) % 7);
      } else ("W" in P || "U" in P) && ("w" in P || (P.w = "u" in P ? P.u % 7 : "W" in P ? 1 : 0), pe = "Z" in P ? lr(Gt(P.y, 0, 1)).getUTCDay() : ir(Gt(P.y, 0, 1)).getDay(), P.m = 0, P.d = "W" in P ? (P.w + 6) % 7 + P.W * 7 - (pe + 5) % 7 : P.w + P.U * 7 - (pe + 6) % 7);
      return "Z" in P ? (P.H += P.Z / 100 | 0, P.M += P.Z % 100, lr(P)) : ir(P);
    };
  }
  function M(Y, re, me, P) {
    for (var je = 0, ge = re.length, pe = me.length, de, be; je < ge; ) {
      if (P >= pe) return -1;
      if (de = re.charCodeAt(je++), de === 37) {
        if (de = re.charAt(je++), be = H[de in va ? re.charAt(je++) : de], !be || (P = be(Y, me, P)) < 0) return -1;
      } else if (de != me.charCodeAt(P++))
        return -1;
    }
    return P;
  }
  function R(Y, re, me) {
    var P = c.exec(re.slice(me));
    return P ? (Y.p = u.get(P[0].toLowerCase()), me + P[0].length) : -1;
  }
  function x(Y, re, me) {
    var P = m.exec(re.slice(me));
    return P ? (Y.w = v.get(P[0].toLowerCase()), me + P[0].length) : -1;
  }
  function B(Y, re, me) {
    var P = f.exec(re.slice(me));
    return P ? (Y.w = p.get(P[0].toLowerCase()), me + P[0].length) : -1;
  }
  function Z(Y, re, me) {
    var P = G.exec(re.slice(me));
    return P ? (Y.m = j.get(P[0].toLowerCase()), me + P[0].length) : -1;
  }
  function ce(Y, re, me) {
    var P = g.exec(re.slice(me));
    return P ? (Y.m = _.get(P[0].toLowerCase()), me + P[0].length) : -1;
  }
  function K(Y, re, me) {
    return M(Y, t, re, me);
  }
  function y(Y, re, me) {
    return M(Y, r, re, me);
  }
  function b(Y, re, me) {
    return M(Y, a, re, me);
  }
  function N(Y) {
    return i[Y.getDay()];
  }
  function ue(Y) {
    return s[Y.getDay()];
  }
  function $(Y) {
    return d[Y.getMonth()];
  }
  function C(Y) {
    return l[Y.getMonth()];
  }
  function te(Y) {
    return o[+(Y.getHours() >= 12)];
  }
  function E(Y) {
    return 1 + ~~(Y.getMonth() / 3);
  }
  function Q(Y) {
    return i[Y.getUTCDay()];
  }
  function F(Y) {
    return s[Y.getUTCDay()];
  }
  function ae(Y) {
    return d[Y.getUTCMonth()];
  }
  function Ce(Y) {
    return l[Y.getUTCMonth()];
  }
  function se(Y) {
    return o[+(Y.getUTCHours() >= 12)];
  }
  function X(Y) {
    return 1 + ~~(Y.getUTCMonth() / 3);
  }
  return {
    format: function(Y) {
      var re = A(Y += "", I);
      return re.toString = function() {
        return Y;
      }, re;
    },
    parse: function(Y) {
      var re = V(Y += "", !1);
      return re.toString = function() {
        return Y;
      }, re;
    },
    utcFormat: function(Y) {
      var re = A(Y += "", k);
      return re.toString = function() {
        return Y;
      }, re;
    },
    utcParse: function(Y) {
      var re = V(Y += "", !0);
      return re.toString = function() {
        return Y;
      }, re;
    }
  };
}
var va = { "-": "", _: " ", 0: "0" }, Ue = /^\s*\d+/, il = /^%/, ll = /[\\^$*+?|[\]().{}]/g;
function Se(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function cl(e) {
  return e.replace(ll, "\\$&");
}
function Vt(e) {
  return new RegExp("^(?:" + e.map(cl).join("|") + ")", "i");
}
function Yt(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function dl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function ul(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function hl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function fl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function ml(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function _a(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function ka(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function pl(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function gl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function bl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function wa(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function xl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function Sa(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function yl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function vl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function _l(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function kl(e, t, r) {
  var a = Ue.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function wl(e, t, r) {
  var a = il.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Sl(e, t, r) {
  var a = Ue.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Cl(e, t, r) {
  var a = Ue.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function Ca(e, t) {
  return Se(e.getDate(), t, 2);
}
function jl(e, t) {
  return Se(e.getHours(), t, 2);
}
function Nl(e, t) {
  return Se(e.getHours() % 12 || 12, t, 2);
}
function Tl(e, t) {
  return Se(1 + en.count(vt(e), e), t, 3);
}
function ns(e, t) {
  return Se(e.getMilliseconds(), t, 3);
}
function Dl(e, t) {
  return ns(e, t) + "000";
}
function Il(e, t) {
  return Se(e.getMonth() + 1, t, 2);
}
function Rl(e, t) {
  return Se(e.getMinutes(), t, 2);
}
function Bl(e, t) {
  return Se(e.getSeconds(), t, 2);
}
function Fl(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function El(e, t) {
  return Se(On.count(vt(e) - 1, e), t, 2);
}
function rs(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? $t(e) : $t.ceil(e);
}
function Al(e, t) {
  return e = rs(e), Se($t.count(vt(e), e) + (vt(e).getDay() === 4), t, 2);
}
function Ll(e) {
  return e.getDay();
}
function Ml(e, t) {
  return Se(mn.count(vt(e) - 1, e), t, 2);
}
function $l(e, t) {
  return Se(e.getFullYear() % 100, t, 2);
}
function Hl(e, t) {
  return e = rs(e), Se(e.getFullYear() % 100, t, 2);
}
function Pl(e, t) {
  return Se(e.getFullYear() % 1e4, t, 4);
}
function zl(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? $t(e) : $t.ceil(e), Se(e.getFullYear() % 1e4, t, 4);
}
function Wl(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Se(t / 60 | 0, "0", 2) + Se(t % 60, "0", 2);
}
function ja(e, t) {
  return Se(e.getUTCDate(), t, 2);
}
function Ul(e, t) {
  return Se(e.getUTCHours(), t, 2);
}
function Ol(e, t) {
  return Se(e.getUTCHours() % 12 || 12, t, 2);
}
function Gl(e, t) {
  return Se(1 + Kr.count(Tt(e), e), t, 3);
}
function as(e, t) {
  return Se(e.getUTCMilliseconds(), t, 3);
}
function Vl(e, t) {
  return as(e, t) + "000";
}
function Yl(e, t) {
  return Se(e.getUTCMonth() + 1, t, 2);
}
function ql(e, t) {
  return Se(e.getUTCMinutes(), t, 2);
}
function Kl(e, t) {
  return Se(e.getUTCSeconds(), t, 2);
}
function Zl(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Jl(e, t) {
  return Se(ts.count(Tt(e) - 1, e), t, 2);
}
function ss(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ht(e) : Ht.ceil(e);
}
function Xl(e, t) {
  return e = ss(e), Se(Ht.count(Tt(e), e) + (Tt(e).getUTCDay() === 4), t, 2);
}
function Ql(e) {
  return e.getUTCDay();
}
function ec(e, t) {
  return Se(pn.count(Tt(e) - 1, e), t, 2);
}
function tc(e, t) {
  return Se(e.getUTCFullYear() % 100, t, 2);
}
function nc(e, t) {
  return e = ss(e), Se(e.getUTCFullYear() % 100, t, 2);
}
function rc(e, t) {
  return Se(e.getUTCFullYear() % 1e4, t, 4);
}
function ac(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ht(e) : Ht.ceil(e), Se(e.getUTCFullYear() % 1e4, t, 4);
}
function sc() {
  return "+0000";
}
function Na() {
  return "%";
}
function Ta(e) {
  return +e;
}
function Da(e) {
  return Math.floor(+e / 1e3);
}
var Ft, os;
oc({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function oc(e) {
  return Ft = ol(e), os = Ft.format, Ft.parse, Ft.utcFormat, Ft.utcParse, Ft;
}
function ic(e) {
  return new Date(e);
}
function lc(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function is(e, t, r, a, o, s, i, l, d, c) {
  var u = Ui(), f = u.invert, p = u.domain, m = c(".%L"), v = c(":%S"), g = c("%I:%M"), _ = c("%I %p"), G = c("%a %d"), j = c("%b %d"), I = c("%B"), k = c("%Y");
  function H(A) {
    return (d(A) < A ? m : l(A) < A ? v : i(A) < A ? g : s(A) < A ? _ : a(A) < A ? o(A) < A ? G : j : r(A) < A ? I : k)(A);
  }
  return u.invert = function(A) {
    return new Date(f(A));
  }, u.domain = function(A) {
    return arguments.length ? p(Array.from(A, lc)) : p().map(ic);
  }, u.ticks = function(A) {
    var V = p();
    return e(V[0], V[V.length - 1], A ?? 10);
  }, u.tickFormat = function(A, V) {
    return V == null ? H : c(V);
  }, u.nice = function(A) {
    var V = p();
    return (!A || typeof A.range != "function") && (A = t(V[0], V[V.length - 1], A ?? 10)), A ? p(Oi(V, A)) : u;
  }, u.copy = function() {
    return zi(u, is(e, t, r, a, o, s, i, l, d, c));
  }, u;
}
function cc() {
  return ui.apply(is(al, sl, vt, Zr, On, en, qr, Yr, Lt, os).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function dc({
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
  const c = Te(null), [u, f] = we(!1), [p, m] = we(!1), v = t(e.start), g = t(e.end), _ = Math.max(g - v, 20), G = () => {
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
  }, j = e.progress ? _ * e.progress / 100 : 0, I = () => {
    r?.(e);
  }, k = () => {
    a?.(e);
  }, H = (Z) => {
    Z.key === "Enter" ? (Z.preventDefault(), I()) : Z.key === " " && (Z.preventDefault(), k());
  }, A = () => {
    f(!0);
  }, V = () => {
    f(!1);
  }, M = () => {
    m(!0), l?.();
  }, R = () => {
    m(!1);
  }, x = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (p || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), B = {
    "--task-left": `${v}px`,
    "--task-width": `${_}px`,
    "--task-color": G(),
    left: `${v}px`,
    width: `${_}px`,
    backgroundColor: G()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": s,
      className: x,
      style: B,
      onClick: I,
      onDoubleClick: k,
      onKeyDown: H,
      onMouseDown: A,
      onMouseUp: V,
      onFocus: M,
      onBlur: R,
      "aria-label": d || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${j}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function uc({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let m = e.getTime(); m <= t.getTime(); m += 864e5)
    a.push(new Date(m));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = we(-1), d = Te(null), c = (m) => {
    if (m.key === "ArrowLeft") {
      m.preventDefault();
      const v = Math.max(0, i === -1 ? 0 : i - 1);
      l(v), p(v);
    } else if (m.key === "ArrowRight") {
      m.preventDefault();
      const v = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(v), p(v);
    } else if (m.key === "ArrowDown") {
      m.preventDefault();
      const v = document.querySelector(".gantt-row .timeline-container");
      v && v.focus();
    } else if (m.key === "Home")
      m.preventDefault(), l(0), p(0);
    else if (m.key === "End") {
      m.preventDefault();
      const v = a.length - 1;
      l(v), p(v);
    }
  }, u = (m) => {
    if (m.key === "ArrowDown") {
      m.preventDefault();
      const v = document.querySelector(".gantt-row .resource-label");
      v && v.focus();
    } else if (m.key === "ArrowRight") {
      m.preventDefault();
      const v = d.current;
      v && v.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => p(0), 0));
  }, p = (m) => {
    const v = d.current?.querySelector(`[data-date-index="${m}"]`);
    v && v.focus();
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
            children: a.map((m, v) => {
              const g = m.getTime() === s.getTime(), _ = i === v;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": v,
                  className: `date-column ${g ? "today" : ""} ${_ ? "focused" : ""}`,
                  tabIndex: _ ? 0 : -1,
                  role: "button",
                  "aria-label": `${m.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
                  onFocus: () => l(v),
                  onKeyDown: c,
                  children: m.toLocaleDateString("en-GB", {
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
function hc({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, d] = we(!1), [c, u] = we(-1), f = Te(null);
  Fe(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
  const p = (g) => {
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
        const _ = Math.max(0, c - 1);
        u(_), f.current?.querySelector(`[data-task-index="${_}"]`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault();
        const j = Math.min(t.length - 1, c + 1);
        u(j), f.current?.querySelector(`[data-task-index="${j}"]`)?.focus();
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
  }, m = (g) => {
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
  }, v = (g) => {
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
            onKeyDown: m,
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
            onKeyDown: p,
            onFocus: () => {
              l || u(-1);
            },
            children: t.map((g, _) => /* @__PURE__ */ n.jsx(
              dc,
              {
                task: g,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && c === _,
                taskIndex: _,
                tabIndex: l && c === _ ? 0 : -1,
                onFocus: () => v(_)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function mm({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Te(null), [l, d] = we(800), c = De(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const g = new Date(r);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [r]), u = De(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const g = new Date(a);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [a]), f = De(() => Math.ceil((u.getTime() - c.getTime()) / 864e5) + 1, [c, u]);
  Fe(() => {
    if (!i.current) return;
    const g = new ResizeObserver((_) => {
      const G = _[0];
      G && d(Math.max(G.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const p = De(
    () => cc().domain([c, u]).range([0, l]),
    [c, u, l]
  ), m = De(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((_) => {
      const G = g.get(_.resourceId) || [];
      G.push(_), g.set(_.resourceId, G);
    }), g;
  }, [t]), v = (g) => {
    if (g.target === g.currentTarget)
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault();
          const _ = i.current?.querySelector(".gantt-row .resource-label");
          _ && _.focus();
          break;
        case "Home":
          g.preventDefault();
          const G = i.current?.querySelector(".header-resource");
          G && G.focus();
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
      onKeyDown: v,
      children: [
        /* @__PURE__ */ n.jsx(uc, { viewStart: c, viewEnd: u, dateCount: f }),
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
            children: e.map((g, _) => /* @__PURE__ */ n.jsx(
              hc,
              {
                resource: g,
                tasks: m.get(g.id) || [],
                scale: p,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: _,
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
) }), fc = ({
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
    (_) => Ze.isValidElement(_) && (_.type === gn || _.type?.displayName === "BreadcrumbItem")
  ).map((_) => ({
    text: typeof _.props.children == "string" ? _.props.children : String(_.props.children),
    href: _.props.href,
    active: _.props.active,
    attributes: _.props.attributes
  })) : [], c = () => t ? d() : o && s ? [{ href: o, text: s }] : e, u = () => {
    const g = c();
    if (g && g.length > 0) {
      const _ = g.slice().reverse().find((G) => G.href && !G.active);
      if (_)
        return { href: _.href, text: _.text };
    }
    return { text: "Home" };
  }, f = c(), p = u(), m = oe(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), v = a;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: m,
      "aria-label": v,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          Ze.Children.map(t, (g, _) => Ze.isValidElement(g) && (g.type === gn || g.type?.displayName === "BreadcrumbItem") ? Ze.cloneElement(g, { key: _ }) : null)
        ) : (
          // Render from items array
          f?.filter((g) => g.active || !!g.href).map((g, _) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: g.active ? /* @__PURE__ */ n.jsx(
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
          ) }, _))
        ) }),
        p.href && /* @__PURE__ */ n.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ n.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: p.href,
            role: "link",
            "aria-label": `Back to ${p.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              p.text
            ]
          }
        ) })
      ]
    }
  );
}, mc = fc;
mc.Item = gn;
gn.displayName = "BreadcrumbItem";
const ls = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [o, s] = we(!1);
  Fe(() => {
    s(!0);
  }, []), Fe(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (d) => {
      const c = d.target, u = c.getAttribute("href");
      if (u && u.startsWith("#")) {
        const f = document.querySelector(u);
        if (f) {
          f.hasAttribute("tabindex") || f.setAttribute("tabindex", "-1"), f.focus(), f.classList.add("nhsuk-skip-link-focused-element");
          const p = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
          }, 3e3);
          c.__nhsSkipLinkTimeout = p;
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
  const i = oe("nhsuk-skip-link", r);
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
}, pm = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = oe("nhsuk-pagination", o);
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
}, gm = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = oe("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, cs = Ze.forwardRef(({
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
  const p = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    u.className
  ].filter(Boolean).join(" "), m = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), v = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), g = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const j = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      xt,
      {
        level: a,
        className: v,
        children: j()
      }
    );
  }, _ = () => u.children ? u.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, G = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      className: p,
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
        /* @__PURE__ */ n.jsxs("div", { className: m, children: [
          g(),
          _(),
          G()
        ] })
      ]
    }
  );
});
cs.displayName = "Card";
const bm = ({
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
}, xm = ({
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
}, ym = ({
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
  "aria-labelledby": p,
  "aria-describedby": m
}) => {
  const v = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), g = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), _ = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const j = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], I = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        j,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      xt,
      {
        level: a,
        className: g,
        children: I
      }
    );
  }, G = () => d || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: v,
      "data-testid": c,
      id: u,
      "aria-label": f,
      "aria-labelledby": p,
      "aria-describedby": m,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          _(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: G() })
      ]
    }
  );
}, pc = ({
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
  const c = oe(
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
}, vm = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = oe("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, _m = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = oe(
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
}, km = ({
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
  attributes: p,
  "data-testid": m
}) => {
  const v = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), g = oe(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), _ = oe(f), G = (k, H) => {
    const A = oe("nhsuk-table__header", {
      [`nhsuk-table__header--${k.format}`]: k.format
    }, k.classes), V = {
      scope: "col",
      ...k.colspan && { colSpan: k.colspan },
      ...k.rowspan && { rowSpan: k.rowspan },
      ...s && { role: "columnheader" },
      ...k.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: A, ...V, children: k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text }, H);
  }, j = (k, H, A) => {
    const V = o && A, M = oe(
      V ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${V ? "header" : "cell"}--${k.format}`]: k.format
      },
      k.classes
    ), R = {
      ...V && { scope: "row" },
      ...k.colspan && { colSpan: k.colspan },
      ...k.rowspan && { rowSpan: k.rowspan },
      ...s && {
        role: V ? "rowheader" : "cell",
        ...k.header && { "data-label": k.header }
      },
      ...k.attributes
    }, x = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && k.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        k.header,
        " "
      ] }),
      k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text
    ] }), B = V ? "th" : "td";
    return /* @__PURE__ */ n.jsx(B, { className: M, ...R, children: x }, H);
  }, I = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: g,
      ...s && { role: "table" },
      ...p,
      ...m && { "data-testid": m },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: v, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((k, H) => G(k, H)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((k, H) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: k.map(
              (A, V) => j(A, V, V === 0)
            )
          },
          H
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ n.jsxs(pc, { className: c, children: [
    i && /* @__PURE__ */ n.jsx(xt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    I()
  ] }) : _ ? /* @__PURE__ */ n.jsx("div", { className: _, children: I() }) : I();
}, wm = Pt(({
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
}, p) => {
  const m = r !== void 0, [v, g] = we(() => t || e[0]?.id || ""), _ = m ? r : v, G = Te(null), j = Te(/* @__PURE__ */ new Map()), I = ee((x) => {
    m || g(x), a?.(x);
  }, [m, a]), k = ee((x) => {
    o?.(x), l && I(x);
  }, [o, l, I]), H = ee((x, B) => {
    const Z = e.filter((y) => !y.disabled).map((y) => y.id), ce = Z.indexOf(B);
    let K = null;
    switch (x.key) {
      case "ArrowLeft":
        K = ce > 0 ? ce - 1 : Z.length - 1;
        break;
      case "ArrowRight":
        K = ce < Z.length - 1 ? ce + 1 : 0;
        break;
      case "Home":
        K = 0;
        break;
      case "End":
        K = Z.length - 1;
        break;
      case "Escape":
        x.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (K !== null) {
      x.preventDefault();
      const y = Z[K], b = j.current.get(y);
      b && (b.focus(), k(y));
    }
  }, [e, k, i]), A = ee((x, B) => {
    B ? j.current.set(x, B) : j.current.delete(x);
  }, []), V = ee((x) => {
    const B = j.current.get(x);
    B && B.focus();
  }, []);
  za(p, () => ({
    focusTab: V,
    getActiveTab: () => _,
    getTabListElement: () => G.current
  }), [V, _]);
  const M = ee((x) => {
    const B = x.relatedTarget;
    G.current?.contains(B) || s?.();
  }, [s]), R = oe("nhsuk-tabs", d);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: R,
      id: c,
      "data-testid": u,
      ...f,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: G,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: M,
                children: e.map((x) => {
                  const B = x.id === _, Z = x.disabled, ce = oe("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": B,
                    "nhsuk-tabs__list-item--disabled": Z
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: ce, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (K) => A(x.id, K),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": B,
                      "aria-controls": `${x.id}-panel`,
                      id: `${x.id}-tab`,
                      tabIndex: B ? 0 : -1,
                      disabled: Z,
                      onClick: () => !Z && I(x.id),
                      onKeyDown: (K) => !Z && H(K, x.id),
                      onFocus: () => !Z && k(x.id),
                      ...x.attributes,
                      children: x.label
                    }
                  ) }, x.id);
                })
              }
            )
          }
        ),
        e.map((x) => {
          const B = x.id === _;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${x.id}-tab`,
              id: `${x.id}-panel`,
              hidden: !B,
              children: x.content
            },
            x.id
          );
        })
      ]
    }
  );
}), gc = Pt(
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
    let p;
    return l ? p = l : a ? p = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (p = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: u,
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
gc.displayName = "Details";
const bc = Pt(
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
    ), f = (m) => t === "cross" && !a ? `do not ${m}` : m, p = () => /* @__PURE__ */ n.jsx(
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
          p(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: c.join(" "), role: "list", children: r.map((m, v) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            f(m.item)
          ] }, v)) }) })
        ]
      }
    );
  }
);
bc.displayName = "DoDontList";
const xc = Pt(
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
    let p;
    return l ? p = l : a ? p = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (p = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: u,
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
xc.displayName = "Expander";
const yc = Pt(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, u = `${t}-${c}-hint`, f = `${t}-${c}-status`, p = !!l.href, m = [
        "nhsuk-task-list__item",
        p && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), v = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        vc,
        {
          item: l,
          itemClasses: m,
          hasLink: p,
          hintId: u,
          statusId: f,
          ariaDescribedBy: v
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
), vc = ({
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
yc.displayName = "TaskList";
const Sm = ({
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
        Pa(
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
}, Cm = ({
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
}, _c = ({
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
    /* @__PURE__ */ n.jsx(Ge, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ n.jsx(Ge, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ n.jsx(Ge, { variant: "secondary", size: "small", onClick: r, "aria-label": "Next date range", children: "Next" }),
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
] }), kc = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(rt, { color: wc(r.status), text: r.label }) }, r.status)) });
function wc(e) {
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
const jm = ({
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
  legendItems: p,
  enableDefaultLegend: m = !0,
  legendPlacement: v = "bottom",
  onA11yModeChange: g
}) => {
  const [_, G] = we("grid"), j = i || _, [I, k] = we(a || []), H = r ?? I, A = De(() => {
    const K = /* @__PURE__ */ new Set();
    return e.forEach((y) => K.add(new Date(y.start).getTime())), Array.from(K).sort((y, b) => y - b);
  }, [e]), V = De(() => {
    const K = {};
    return e.forEach((y) => {
      const b = new Date(y.start).getTime();
      K[b] || (K[b] = {});
      const N = y.capacity - y.booked - (y.held || 0);
      K[b][y.sessionId] = { slot: y, remaining: N };
    }), K;
  }, [e]), M = ee((K) => {
    if (s === "single") {
      const y = [K.id];
      r || k(y), o?.(y, { lastAction: "select" });
    } else {
      const y = H.includes(K.id), b = y ? H.filter((N) => N !== K.id) : [...H, K.id];
      r || k(b), o?.(b, { lastAction: y ? "deselect" : "select" });
    }
  }, [s, H, r, o]), R = De(() => p || (m ? Array.from(new Set(e.map((y) => y.status))).map((y) => ({
    status: y,
    label: y.charAt(0).toUpperCase() + y.slice(1)
  })) : void 0), [p, m, e]), x = R ? /* @__PURE__ */ n.jsx(
    kc,
    {
      items: R,
      orientation: v === "left" || v === "right" ? "vertical" : "horizontal"
    }
  ) : null, B = (K) => {
    i || G(K), g?.(K);
  }, Z = u || (f ? /* @__PURE__ */ n.jsx(
    _c,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: j,
      onA11yModeChange: B
    }
  ) : null), ce = /* @__PURE__ */ n.jsx("div", { style: d, className: oe(l), children: /* @__PURE__ */ n.jsx(ur, { className: oe("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(Nt, { children: /* @__PURE__ */ n.jsx(Kt, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    Z,
    v === "top" && x,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((K) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => M(K), "aria-pressed": H.includes(K.id), children: [
      qt(new Date(K.start)),
      " – ",
      qt(new Date(K.end)),
      " (",
      K.status,
      ")"
    ] }) }, K.id)) }),
    v === "bottom" && x
  ] }) }) }) }) });
  return j === "list" ? ce : /* @__PURE__ */ n.jsx("div", { style: d, className: oe(l), children: /* @__PURE__ */ n.jsx(ur, { className: oe("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(Nt, { children: /* @__PURE__ */ n.jsx(Kt, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    Z,
    v === "top" && x,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": A.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((K) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${K.specialty}`, className: "nhs-slot-matrix__session-header", children: K.specialty }, K.id))
      ] }),
      A.map((K) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": qt(new Date(K)), children: qt(new Date(K)) }),
        t.map((y) => {
          const b = V[K]?.[y.id];
          if (!b)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, y.id);
          const { slot: N, remaining: ue } = b, $ = H.includes(N.id), C = c ? c(N) : `Slot ${qt(new Date(N.start))} ${N.status}${ue === 0 ? " full" : ""}`;
          return /* @__PURE__ */ n.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": N.status,
              className: oe("nhs-slot-matrix__cell", $ && "nhs-slot-matrix__cell--selected"),
              "aria-label": C,
              "aria-selected": $ || void 0,
              onClick: () => M(N),
              children: ue > 0 ? `${ue} left` : "Full"
            },
            N.id
          );
        })
      ] }, K))
    ] }),
    v === "bottom" && x
  ] }) }) }) }) });
};
function Ia(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function qt(e) {
  return `${Ia(e.getHours())}:${Ia(e.getMinutes())}`;
}
const Sc = ({
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
}, Nm = ({
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
      children: /* @__PURE__ */ n.jsx(Sc, { ...o })
    },
    s
  )) }) }) });
}, Cc = Ze.forwardRef(
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
    tableClassName: p,
    bordered: m = !1,
    striped: v = !1,
    responsive: g = !1,
    tableType: _ = "default"
  }, G) => {
    const j = Te(null), I = Te(null), k = Te(null);
    Ze.useImperativeHandle(G, () => j.current, []);
    const [H, A] = we(0), [V, M] = we(0), [R, x] = we("headers"), [B, Z] = we("browse"), ce = t.length, K = e.length, y = De(() => !r || r.length === 0 ? e : [...e].sort((E, Q) => {
      for (const { key: F, direction: ae } of r) {
        const Ce = E[F], se = Q[F];
        if (Ce == null && se == null) continue;
        if (Ce == null) return 1;
        if (se == null) return -1;
        let X = 0;
        if (typeof Ce == "number" && typeof se == "number" ? X = Ce - se : X = String(Ce).localeCompare(String(se)), X !== 0)
          return ae === "asc" ? X : -X;
      }
      return 0;
    }), [e, r]), b = ee((E, Q) => {
      setTimeout(() => {
        const F = j.current?.querySelector(
          `tbody tr:nth-child(${E + 1}) td:nth-child(${Q + 1})`
        );
        F && (F.focus(), typeof F.scrollIntoView == "function" && F.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), N = ee((E) => {
      setTimeout(() => {
        const Q = j.current?.querySelector(`th:nth-child(${E + 1})`);
        Q && (Q.focus(), typeof Q.scrollIntoView == "function" && Q.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ue = ee((E) => {
      a?.(E);
    }, [a]), $ = ee((E) => {
      s?.(E);
    }, [s]), C = ee((E) => {
      const { key: Q } = E;
      switch (Q) {
        case "Enter":
          if (E.preventDefault(), R === "headers" && B === "browse")
            Z("navigate"), N(V);
          else if (R === "headers" && B === "navigate") {
            const F = t[V];
            F && ue(F.key);
          } else R === "cells" && B === "browse" ? (Z("navigate"), b(H, V)) : R === "cells" && B === "navigate" && $(H);
          break;
        case "Escape":
          E.preventDefault(), (R === "headers" && B === "navigate" || R === "cells" && B === "navigate") && Z("browse");
          break;
        case "ArrowLeft":
          if (E.preventDefault(), B === "navigate" || B === "browse" && R === "headers") {
            if (R === "headers") {
              const F = Math.max(0, V - 1);
              M(F), N(F);
            } else if (R === "cells") {
              const F = Math.max(0, V - 1);
              M(F), b(H, F);
            }
          }
          break;
        case "ArrowRight":
          if (E.preventDefault(), B === "navigate" || B === "browse" && R === "headers") {
            if (R === "headers") {
              const F = Math.min(ce - 1, V + 1);
              M(F), N(F);
            } else if (R === "cells") {
              const F = Math.min(ce - 1, V + 1);
              M(F), b(H, F);
            }
          }
          break;
        case "ArrowUp":
          if (E.preventDefault(), R === "cells") {
            if (B === "browse") {
              const F = Math.max(0, H - 1);
              A(F), b(F, 0), M(0);
            } else if (B === "navigate")
              if (H > 0) {
                const F = H - 1;
                A(F), b(F, V);
              } else
                x("headers"), Z("browse"), N(V);
          }
          break;
        case "ArrowDown":
          if (E.preventDefault(), R === "headers" && B === "browse")
            x("cells"), A(0), M(0), b(0, 0);
          else if (R === "cells") {
            const F = K - 1;
            if (B === "browse") {
              const ae = Math.min(F, H + 1);
              A(ae), b(ae, 0), M(0);
            } else if (B === "navigate" && H < F) {
              const ae = H + 1;
              A(ae), b(ae, V);
            }
          }
          break;
        case "Home":
          E.preventDefault(), R === "headers" ? (M(0), N(0)) : R === "cells" && (E.ctrlKey ? (A(0), M(0), b(0, 0)) : (M(0), b(H, 0)));
          break;
        case "End":
          if (E.preventDefault(), R === "headers") {
            const F = ce - 1;
            M(F), N(F);
          } else if (R === "cells")
            if (E.ctrlKey) {
              const F = K - 1, ae = ce - 1;
              A(F), M(ae), b(F, ae);
            } else {
              const F = ce - 1;
              M(F), b(H, F);
            }
          break;
        case " ":
          if (E.preventDefault(), R === "headers" && B === "navigate") {
            const F = t[V];
            F && ue(F.key);
          } else R === "cells" && B === "navigate" && $(H);
          break;
      }
    }, [
      R,
      B,
      V,
      H,
      ce,
      K,
      t,
      b,
      N,
      ue,
      $
    ]);
    Fe(() => {
      const E = j.current;
      if (E)
        return E.addEventListener("keydown", C), () => E.removeEventListener("keydown", C);
    }, [C]);
    const te = oe(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": m,
        "nhsuk-table--striped": v,
        "nhsuk-table--compact": _ === "compact"
      },
      f
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: j,
        className: te,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: I, role: "row", children: t.map((E, Q) => {
            const F = r?.find((se) => se.key === E.key), ae = !!F, Ce = R === "headers" && V === Q;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: oe("sortable-header", {
                  "sortable-header--focused": Ce
                }),
                role: "columnheader",
                tabIndex: Ce ? 0 : -1,
                onClick: () => ue(E.key),
                onKeyDown: (se) => {
                  (se.key === "Enter" || se.key === " ") && (se.preventDefault(), ue(E.key));
                },
                "aria-sort": ae ? F?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: E.label }),
                  ae && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((se) => se.key === E.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: F?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              E.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: k, className: "nhsuk-table__body", role: "rowgroup", children: y.map((E, Q) => {
            const F = o === Q, ae = R === "cells" && H === Q;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: oe("data-row", {
                  "data-row--selected": F,
                  "data-row--focused": ae
                }),
                "aria-selected": F,
                children: t.map((Ce, se) => {
                  const X = Ce.tableRenderer ? Ce.tableRenderer(E) : Ce.render ? Ce.render(E) : E[Ce.key], Y = R === "cells" && H === Q && V === se, re = () => typeof X == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: X ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: X ? "Yes" : "No" })
                  ] }) : String(X ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: oe("data-cell", {
                        "data-cell--focused": Y
                      }),
                      tabIndex: Y ? 0 : -1,
                      onClick: () => $(Q),
                      children: re()
                    },
                    Ce.key
                  );
                })
              },
              Q
            );
          }) })
        ]
      }
    );
  }
);
Cc.displayName = "AriaDataGrid";
const ds = ({
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
  const f = Te(null), p = Te(null), m = Te(null), v = ee((R, x) => {
    d || (p.current = x, R.dataTransfer.effectAllowed = "move", R.dataTransfer.setData("text/plain", x));
  }, [d]), g = ee((R, x) => {
    d || p.current === x || (R.preventDefault(), R.dataTransfer.dropEffect = "move", m.current = x);
  }, [d]), _ = ee((R, x) => {
    if (d) return;
    R.preventDefault();
    const B = p.current;
    if (!B || B === x) return;
    const Z = e.findIndex((K) => K.key === B), ce = e.findIndex((K) => K.key === x);
    if (Z !== -1 && ce !== -1) {
      const K = [...e], [y] = K.splice(Z, 1);
      K.splice(ce, 0, y), r(K);
    }
    p.current = null, m.current = null;
  }, [d, e, r]), G = ee(() => {
    p.current = null, m.current = null;
  }, []), j = ee((R) => {
    const x = t.find((B) => B.key === R);
    return x ? x.label : R;
  }, [t]), I = ee((R) => ["red", "orange", "blue", "aqua-green", "grey"][R] || "grey", []), k = ee((R) => {
    if (d) return;
    const x = e.map(
      (B) => B.key === R ? { ...B, direction: B.direction === "asc" ? "desc" : "asc" } : B
    );
    r(x);
  }, [e, r, d]), H = ee((R) => {
    if (d) return;
    const x = e.filter((B) => B.key !== R);
    r(x);
  }, [e, r, d]), A = ee(() => {
    d || r([]);
  }, [r, d]), V = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const R = e.map((x, B) => {
      const Z = x.direction === "asc" ? "ascending" : "descending";
      return `${B + 1}. ${j(x.key)} (${Z})`;
    });
    if (R.length === 1)
      return `Sorted by: ${R[0]}`;
    if (R.length === 2)
      return `Sorted by: ${R.join(" and ")}`;
    {
      const x = R.pop();
      return `Sorted by: ${R.join(", ")}, and ${x}`;
    }
  }, M = De(() => {
    const R = ["sort-description"];
    return l && R.push("sort-help"), u && R.push(u), R.join(" ");
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
        children: V()
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
          "aria-describedby": M,
          children: e.map((R, x) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (B) => v(B, R.key),
              onDragOver: (B) => g(B, R.key),
              onDrop: (B) => _(B, R.key),
              onDragEnd: G,
              onClick: () => k(R.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${R.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": R.key,
              children: /* @__PURE__ */ n.jsx(
                rt,
                {
                  color: I(x),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => H(R.key),
                  disabled: d,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${x + 1}`, children: x + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: j(R.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (B) => {
                          B.stopPropagation(), k(R.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${j(R.key)}. Currently ${R.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${R.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${R.direction}`,
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
            R.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        Ge,
        {
          variant: "secondary",
          onClick: A,
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
function jc(e, t) {
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
    orientation: p = "horizontal",
    id: m,
    isLoading: v = !1,
    loadingComponent: g,
    error: _ = null,
    errorComponent: G,
    "data-testid": j,
    actions: I,
    actionsMinGap: k = 16,
    forceActionsAbove: H = !1
  } = t, V = Te(
    m || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, M = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), R = `${V}-description`, x = `${V}-navigation-help`, {
    dataComparator: B = (h, w) => JSON.stringify(h) === JSON.stringify(w),
    filterFunction: Z = (h) => h,
    booleanRenderer: ce = (h) => h ? "✓" : "✗"
  } = a || {}, K = s !== void 0, y = s ?? 0, [b, N] = we({
    focusArea: "tabs",
    focusedTabIndex: y,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), ue = De(() => ({
    selectedIndex: y,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [y]), [$, C] = Wa(jc, ue);
  Fe(() => {
    const h = $.tabLoadingStates.length, w = o.length;
    h !== w && C({ type: "ADJUST_ARRAYS", payload: { newLength: w } });
  }, [o.length]), Fe(() => {
    K && C({ type: "SET_SELECTED_INDEX", payload: y });
  }, [y, K]), Fe(() => {
    N((h) => ({
      ...h,
      focusArea: "tabs",
      focusedTabIndex: $.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [$.selectedIndex]), Fe(() => {
    l && l($.globalSelectedRowData);
  }, [$.globalSelectedRowData, l]);
  const te = ee(
    (h, w) => B(h, w),
    [B]
  ), E = ee(
    (h) => {
      h >= 0 && h < o.length && !o[h].disabled && (C({ type: "SET_SELECTED_INDEX", payload: h }), N((w) => ({
        ...w,
        focusedTabIndex: h,
        focusArea: "tabs"
      })), i?.(h));
    },
    [o, i]
  ), Q = Te(!1), F = ee(
    (h, w) => {
      if (!w?.force && !Q.current && h === 0) {
        Q.current = !0;
        return;
      }
      Q.current = !0, setTimeout(() => {
        const W = ae.current[h], O = W?.parentElement;
        if (W && O) {
          const T = W.offsetLeft, U = W.offsetWidth, xe = O.clientWidth, he = T - xe / 2 + U / 2;
          try {
            O.scrollTo({
              left: Math.max(0, he),
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
          tabListElementExists: !!O
        });
      }, 50);
    },
    []
  ), ae = Te([]), Ce = Te([]), se = ee(
    (h, w) => {
      const W = $.sortConfig || [], O = W.find(
        (xe) => xe.key === w
      );
      let T;
      O ? O.direction === "asc" ? T = W.map(
        (xe) => xe.key === w ? { ...xe, direction: "desc" } : xe
      ) : T = W.filter(
        (xe) => xe.key !== w
      ) : T = [...W, { key: w, direction: "asc" }], C({
        type: "SET_SORT",
        payload: T
      }), o[h].onSort?.(w);
    },
    [$.sortConfig, o]
  ), X = ee(
    (h) => {
      setTimeout(() => {
        const w = document.querySelector(
          `[data-tab-panel="${$.selectedIndex}"] th:nth-child(${h + 1})`
        );
        w && w.focus();
      }, 0);
    },
    [$.selectedIndex]
  ), Y = ee(
    (h) => ce(h),
    [ce]
  ), re = ee(
    (h, w) => {
      setTimeout(() => {
        const W = document.querySelector(
          `[data-tab-panel="${$.selectedIndex}"] tbody tr:nth-child(${h + 1}) td:nth-child(${w + 1})`
        );
        W && W.focus();
      }, 0);
    },
    [$.selectedIndex]
  );
  Fe(() => {
    b.isGridActive && (b.focusArea === "headers" ? setTimeout(() => {
      X(b.focusedHeaderIndex);
    }, 0) : b.focusArea === "cells" && setTimeout(() => {
      re(
        b.focusedRowIndex,
        b.focusedColumnIndex
      );
    }, 0));
  }, [
    b.focusArea,
    b.isGridActive,
    b.focusedHeaderIndex,
    b.focusedRowIndex,
    b.focusedColumnIndex,
    X,
    re
  ]), Fe(() => {
    F($.selectedIndex);
  }, [$.selectedIndex, F]);
  const me = ee(
    (h, w) => {
      const { key: W } = h, O = o[$.selectedIndex], T = O?.columns.length || 0;
      switch (W) {
        case "ArrowLeft":
          h.preventDefault();
          const U = Math.max(0, w - 1);
          N((ke) => ({
            ...ke,
            focusedHeaderIndex: U
          })), X(U);
          break;
        case "ArrowRight":
          h.preventDefault();
          const xe = Math.min(T - 1, w + 1);
          N((ke) => ({
            ...ke,
            focusedHeaderIndex: xe
          })), X(xe);
          break;
        case "ArrowUp":
          h.preventDefault(), N((ke) => ({
            ...ke,
            focusArea: "tabs",
            focusedTabIndex: $.selectedIndex
          })), F($.selectedIndex), ae.current[$.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          h.preventDefault(), N((ke) => ({
            ...ke,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: w,
            isGridActive: !0
          }));
          break;
        case "Home":
          h.preventDefault(), N((ke) => ({ ...ke, focusedHeaderIndex: 0 })), X(0);
          break;
        case "End":
          h.preventDefault();
          const he = T - 1;
          N((ke) => ({
            ...ke,
            focusedHeaderIndex: he
          })), X(he);
          break;
        case "Enter":
        case " ":
          h.preventDefault();
          const ve = O?.columns[w]?.key;
          ve && se($.selectedIndex, ve);
          break;
      }
    },
    [
      o,
      $.selectedIndex,
      se,
      N,
      X,
      re,
      ae
    ]
  ), P = ee(
    (h, w, W) => {
      const { key: O } = h, T = o[$.selectedIndex], U = T?.data.length || 0, xe = T?.columns.length || 0;
      switch (O) {
        case "ArrowUp":
          if (h.preventDefault(), w === 0)
            N((ne) => ({
              ...ne,
              focusArea: "headers",
              focusedHeaderIndex: W,
              isGridActive: !1
            })), X(W);
          else {
            const ne = w - 1;
            N((_e) => ({
              ..._e,
              focusedRowIndex: ne
            })), re(ne, W);
          }
          break;
        case "ArrowDown":
          h.preventDefault();
          const he = Math.min(U - 1, w + 1);
          N((ne) => ({
            ...ne,
            focusedRowIndex: he
          })), re(he, W);
          break;
        case "ArrowLeft":
          h.preventDefault();
          const ve = Math.max(0, W - 1);
          N((ne) => ({
            ...ne,
            focusedColumnIndex: ve
          })), re(w, ve);
          break;
        case "ArrowRight":
          h.preventDefault();
          const ke = Math.min(xe - 1, W + 1);
          N((ne) => ({
            ...ne,
            focusedColumnIndex: ke
          })), re(w, ke);
          break;
        case "Home":
          h.preventDefault(), h.ctrlKey ? (N((ne) => ({
            ...ne,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), re(0, 0)) : (N((ne) => ({ ...ne, focusedColumnIndex: 0 })), re(w, 0));
          break;
        case "End":
          if (h.preventDefault(), h.ctrlKey) {
            const ne = U - 1, _e = xe - 1;
            N((Ie) => ({
              ...Ie,
              focusedRowIndex: ne,
              focusedColumnIndex: _e
            })), re(ne, _e);
          } else {
            const ne = xe - 1;
            N((_e) => ({
              ..._e,
              focusedColumnIndex: ne
            })), re(w, ne);
          }
          break;
        case "Enter":
        case " ":
          if (h.preventDefault(), T && T.data[w]) {
            const ne = T.data.some(
              (He) => "ews_data" in He
            ) ? Z(T.data, $.filters) : T.data, _e = $.sortConfig;
            let Ie = ne;
            if (_e && _e.length > 0 && (Ie = [...ne].sort((He, Re) => {
              for (const { key: Ye, direction: _t } of _e) {
                let at = He[Ye], Qe = Re[Ye];
                const Pe = T.columns.find(
                  (zt) => zt.key === Ye
                );
                if (Pe?.tableRenderer ? (at = Pe.tableRenderer(He), Qe = Pe.tableRenderer(Re)) : Pe?.render && (at = Pe.render(He), Qe = Pe.render(Re)), at == null && Qe == null) continue;
                if (at == null) return _t === "asc" ? -1 : 1;
                if (Qe == null) return _t === "asc" ? 1 : -1;
                let We = 0;
                if (typeof at == "number" && typeof Qe == "number" ? We = at - Qe : We = String(at).localeCompare(
                  String(Qe),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), We !== 0)
                  return _t === "asc" ? We : -We;
              }
              return 0;
            })), Ie[w]) {
              const He = Ie[w], Ye = $.globalSelectedRowData && te($.globalSelectedRowData, He) ? null : He;
              C({
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
      $.selectedIndex,
      $.filters,
      $.sortConfig,
      Z,
      te,
      C,
      N,
      X,
      re
    ]
  ), je = ee(
    (h, w) => Z(h, w),
    [Z]
  );
  if (za(
    r,
    () => ({
      selectTab: (h) => {
        h >= 0 && h < o.length && (C({ type: "SET_SELECTED_INDEX", payload: h }), i?.(h));
      },
      refreshData: (h) => {
        console.log("Refreshing data for tab:", h ?? "all");
      },
      exportData: (h) => {
        const w = h ?? $.selectedIndex, W = o[w];
        return W ? W.data : [];
      },
      getSelectedRows: (h) => $.globalSelectedRowData ? [] : [],
      clearSelection: (h) => {
        C({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (h) => {
        C({ type: "SET_FILTERS", payload: h });
      }
    }),
    [$.selectedIndex, $.selectedRows, o, i]
  ), v)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": j,
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
  if (_)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": j,
        children: G || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: _ })
        ] })
      }
    );
  const ge = Te(null), pe = Te(null), de = Te(null), [be, Ve] = we(!0);
  Fe(() => {
    if (!I) {
      Ve(!1);
      return;
    }
    if (H) {
      Ve(!1);
      return;
    }
    function h() {
      if (!ge.current || !pe.current || !de.current) return;
      const O = ge.current.clientWidth, T = Array.from(
        pe.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), U = T.reduce((ke, ne) => ke + ne.offsetWidth, 0), xe = de.current.offsetWidth, he = Math.max(8 * (T.length - 1), 0), ve = U + he + xe + k <= O;
      Ve(ve);
    }
    const w = requestAnimationFrame(() => h()), W = new ResizeObserver(() => h());
    return ge.current && W.observe(ge.current), pe.current && W.observe(pe.current), () => {
      cancelAnimationFrame(w), W.disconnect();
    };
  }, [I, k, H, o.length]);
  const Le = de, Ne = ee(() => Le.current ? Array.from(
    Le.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((h) => !h.hasAttribute("disabled")) : [], []), D = ee(
    (h) => {
      const w = Ne();
      if (!w.length) return;
      const W = Math.max(0, Math.min(h, w.length - 1));
      w[W].focus(), N((O) => ({ ...O, focusArea: "actions", focusedActionIndex: W }));
    },
    [Ne]
  ), S = ee(() => D(0), [D]), z = ee(
    (h, w) => {
      const { key: W } = h, O = o.length - 1;
      switch (W) {
        case "ArrowUp": {
          I && !be && (h.preventDefault(), S());
          break;
        }
        case "ArrowLeft": {
          h.preventDefault();
          const T = w > 0 ? w - 1 : O;
          E(T), F(T), ae.current[T]?.focus();
          break;
        }
        case "ArrowRight": {
          if (h.preventDefault(), w === O && I && be) {
            S();
            return;
          }
          const T = w < O ? w + 1 : 0;
          E(T), F(T), ae.current[T]?.focus();
          break;
        }
        case "ArrowDown": {
          h.preventDefault(), N((T) => ({
            ...T,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          h.preventDefault(), E(0), F(0), ae.current[0]?.focus();
          break;
        }
        case "End": {
          h.preventDefault(), E(O), F(O), ae.current[O]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          h.preventDefault(), E(w);
          break;
        }
        case "Tab": {
          !h.shiftKey && w === O && I && be && S();
          break;
        }
      }
    },
    [o.length, E, F, I, be, S]
  ), L = ee((h) => {
    const { key: w } = h, W = Ne();
    if (!W.length) return;
    const O = W.findIndex((T) => T === document.activeElement);
    switch (w) {
      case "ArrowLeft": {
        if (be)
          if (O > 0)
            h.preventDefault(), D(O - 1);
          else {
            h.preventDefault();
            const T = o.length - 1;
            E(T), F(T), ae.current[T]?.focus(), N((U) => ({ ...U, focusArea: "tabs", focusedTabIndex: T }));
          }
        break;
      }
      case "ArrowRight": {
        be && (O < W.length - 1 ? (h.preventDefault(), D(O + 1)) : (h.preventDefault(), E(0), F(0), ae.current[0]?.focus(), N((T) => ({ ...T, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (be)
          h.preventDefault(), N((T) => ({ ...T, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          h.preventDefault();
          const T = $.selectedIndex;
          ae.current[T]?.focus(), N((U) => ({ ...U, focusArea: "tabs", focusedTabIndex: T }));
        }
        break;
      }
    }
  }, [Ne, be, D, o.length, E, F, $.selectedIndex]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${p} ${u}`,
      id: m,
      "data-testid": j,
      ref: ge,
      children: [
        c && !M && /* @__PURE__ */ n.jsx("div", { id: R, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: x,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ n.jsx(
          ds,
          {
            sortConfig: $.sortConfig || [],
            columns: o.flatMap(
              (h) => h.columns.map((w) => ({ key: w.key, label: w.label }))
            ).filter(
              (h, w, W) => W.findIndex((O) => O.key === h.key) === w
              // Remove duplicates
            ),
            onSortChange: (h) => {
              C({ type: "SET_SORT", payload: h });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        I && !be && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: de,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: L,
            children: I
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${be ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? M ? c : R : x,
              "aria-orientation": p,
              className: "aria-tabs-datagrid__tabs",
              ref: pe,
              children: o.map((h, w) => {
                const W = w === $.selectedIndex, O = h.disabled || f;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${h.id}`,
                    "aria-controls": `panel-${h.id}`,
                    "aria-selected": W,
                    "aria-disabled": O,
                    tabIndex: W ? 0 : -1,
                    ref: (T) => {
                      ae.current[w] = T;
                    },
                    onClick: () => E(w),
                    onKeyDown: (T) => z(T, w),
                    disabled: O,
                    className: [
                      "aria-tabs-datagrid__tab",
                      W ? "aria-tabs-datagrid__tab--selected" : "",
                      O ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: h.label }),
                      $.tabLoadingStates[w] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      $.tabErrors[w] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  h.id
                );
              })
            }
          ),
          I && be && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: de,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: L,
              children: I
            }
          )
        ] }),
        o.map((h, w) => {
          const W = w === $.selectedIndex;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${h.id}`,
              "aria-labelledby": `tab-${h.id}`,
              tabIndex: 0,
              hidden: !W,
              ref: (O) => {
                Ce.current[w] = O;
              },
              className: `aria-tabs-datagrid__panel ${h.className || ""}`,
              "data-tab-panel": w,
              children: W && (() => {
                const O = h.data.some(
                  (U) => "ews_data" in U
                ) ? je(h.data, $.filters) : h.data, T = De(() => {
                  const U = $.sortConfig;
                  return !U || U.length === 0 ? O : [...O].sort((xe, he) => {
                    for (const { key: ve, direction: ke } of U) {
                      let ne = xe[ve], _e = he[ve];
                      const Ie = h.columns.find(
                        (Re) => Re.key === ve
                      );
                      if (Ie?.tableRenderer ? (ne = Ie.tableRenderer(xe), _e = Ie.tableRenderer(he)) : Ie?.render && (ne = Ie.render(xe), _e = Ie.render(he)), ne == null && _e == null) continue;
                      if (ne == null) return 1;
                      if (_e == null) return -1;
                      let He = 0;
                      if (typeof ne == "number" && typeof _e == "number" ? He = ne - _e : typeof ne == "boolean" && typeof _e == "boolean" ? He = ne === _e ? 0 : ne ? 1 : -1 : He = String(ne).localeCompare(
                        String(_e),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), He !== 0)
                        return ke === "asc" ? He : -He;
                    }
                    return 0;
                  });
                }, [O, $.sortConfig, h.columns]);
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
                      /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: h.columns.map((U, xe) => {
                        const he = $.sortConfig?.find(
                          (ne) => ne.key === U.key
                        ), ve = !!he, ke = b.focusArea === "headers" && b.focusedHeaderIndex === xe;
                        return /* @__PURE__ */ n.jsx(
                          "th",
                          {
                            className: `sortable-header ${ke ? "sortable-header--focused" : ""} ${ve ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: ke ? 0 : -1,
                            onClick: () => se(w, U.key),
                            onKeyDown: (ne) => me(ne, xe),
                            "aria-sort": ve ? he?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ n.jsx("span", { className: "header-label", children: U.label }),
                              /* @__PURE__ */ n.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ve ? `sort-indicator--${he?.direction}` : ""}`,
                                  children: [
                                    $.sortConfig && $.sortConfig.length > 0 && $.sortConfig.findIndex(
                                      (ne) => ne.key === U.key
                                    ) !== -1 && /* @__PURE__ */ n.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${$.sortConfig.findIndex((ne) => ne.key === U.key) + 1}`,
                                        "data-priority": $.sortConfig.findIndex(
                                          (ne) => ne.key === U.key
                                        ) + 1,
                                        title: `Sort priority: ${$.sortConfig.findIndex((ne) => ne.key === U.key) + 1}`,
                                        children: $.sortConfig.findIndex(
                                          (ne) => ne.key === U.key
                                        ) + 1
                                      }
                                    ),
                                    ve && /* @__PURE__ */ n.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${he?.direction}`,
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
                          U.key
                        );
                      }) }) }),
                      /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: T.map((U, xe) => {
                        const he = $.globalSelectedRowData && te($.globalSelectedRowData, U), ve = b.focusArea === "cells" && b.focusedRowIndex === xe;
                        return /* @__PURE__ */ n.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${he ? "data-row--selected" : ""} ${ve ? "data-row--focused" : ""}`,
                            "aria-selected": he,
                            children: h.columns.map((ke, ne) => {
                              const _e = U[ke.key];
                              let Ie;
                              ke.tableRenderer ? Ie = ke.tableRenderer(U) : ke.render ? Ie = ke.render(U) : Ie = _e;
                              const He = b.focusArea === "cells" && b.focusedRowIndex === xe && b.focusedColumnIndex === ne, Re = () => {
                                if (ke.customRenderer) {
                                  const Ye = ke.customRenderer(
                                    _e,
                                    U
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
                                return typeof _e == "boolean" && Ie === _e ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  Y(_e),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: _e ? "Yes" : "No" })
                                ] }) : Ze.isValidElement(Ie) || typeof Ie != "object" ? Ie ?? "" : Ie;
                              };
                              return /* @__PURE__ */ n.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${He ? "data-cell--focused" : ""}`,
                                  tabIndex: He ? 0 : -1,
                                  onClick: () => {
                                    const _t = $.globalSelectedRowData && te(
                                      $.globalSelectedRowData,
                                      U
                                    ) ? null : U;
                                    C({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: _t
                                    });
                                  },
                                  onKeyDown: (Ye) => P(Ye, xe, ne),
                                  children: Re()
                                },
                                ke.key
                              );
                            })
                          },
                          xe
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
}, Nc = (e) => [...e].sort((t, r) => t.priority - r.priority);
function cr(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Tc(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Dc(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function Ic(e, t) {
  const r = t.find((o) => o.id === e), a = Tc(t);
  return r ? r.priority < a : !1;
}
const Tm = ({
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
  const u = De(() => Nc(e), [e]), f = ee((j) => {
    if (l) return;
    const I = e.map(
      (k) => k.id === j ? { ...k, direction: k.direction === "asc" ? "desc" : "asc" } : k
    );
    t(I);
  }, [e, t, l]), p = ee((j) => {
    if (l) return;
    const I = e.findIndex((H) => H.id === j);
    if (I <= 0) return;
    const k = [...e];
    [k[I], k[I - 1]] = [k[I - 1], k[I]], t(cr(k));
  }, [e, t, l]), m = ee((j) => {
    if (l) return;
    const I = e.findIndex((H) => H.id === j);
    if (I >= e.length - 1 || I === -1) return;
    const k = [...e];
    [k[I], k[I + 1]] = [k[I + 1], k[I]], t(cr(k));
  }, [e, t, l]), v = ee((j) => {
    if (l) return;
    const I = e.filter((k) => k.id !== j);
    t(cr(I));
  }, [e, t, l]), g = ee(() => {
    l || t([]);
  }, [t, l]), _ = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const j = u.map((I, k) => {
      const H = I.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${I.label} (${H})`;
    });
    if (j.length === 1)
      return `Sorted by: ${j[0]}`;
    if (j.length === 2)
      return `Sorted by: ${j.join(" and ")}`;
    {
      const I = j.pop();
      return `Sorted by: ${j.join(", ")}, and ${I}`;
    }
  }, G = De(() => {
    const j = ["sort-description"];
    return i && j.push("sort-help"), c && j.push(c), j.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: _()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: _()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": d,
        "aria-describedby": G,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((j) => /* @__PURE__ */ n.jsx(
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
                  onClose: () => v(j.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: j.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: j.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(j.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${j.label}. Currently ${j.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: j.direction === "asc" ? on.asc : on.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(j.id),
                          disabled: l || !Dc(j.id, e),
                          "aria-label": `Move ${j.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(j.id),
                          disabled: l || !Ic(j.id, e),
                          "aria-label": `Move ${j.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            j.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      Ge,
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
}, Jr = (e, t) => t.map((r) => ({
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
], Rc = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Bc = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Fc = (e) => {
  if (typeof e == "boolean") {
    const r = gr.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = gr.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, Ec = (e) => `${e.name}-${e.bed_name}`, Ac = () => ({
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
}), Dm = (e) => {
  const t = Ac();
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
}, Lc = {
  dataComparator: Rc,
  filterFunction: Bc,
  booleanRenderer: Fc,
  getDataId: Ec
};
function Ra(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: u = "adaptive-card"
  } = r, f = t.find((I) => I.key === a), p = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", m = () => o.filter((k) => !i.includes(k) && e[k]).slice(0, 3).map((k) => {
    const H = t.find((R) => R.key === k), A = e[k], V = c[k] ? c[k](A, e) : H?.cardRenderer ? H.cardRenderer(e) : H?.render ? H.render(e) : A;
    return `${H?.label || k}: ${V}`;
  }).join(" • "), v = () => s.length === 0 ? null : s.filter((I) => e[I.fieldKey] !== void 0).map((I) => {
    const k = e[I.fieldKey], H = I.render ? I.render(k, e) : k;
    return `<span class="nhsuk-tag ${Mc(I, k)}">${H}</span>`;
  }).join(""), g = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", _ = v(), G = m(), j = _ ? `${G}${_ ? `<div class="adaptive-card__badges">${_}</div>` : ""}` : G;
  return {
    variant: g(),
    heading: String(p),
    descriptionHtml: j,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${p}`
  };
}
function Mc(e, t) {
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
const $c = {
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
}, us = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, c = e.bed_name, u = e.ews_score, f = e.speciality, p = e.consultant;
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
              color: Pc(ps(u)),
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
            /* @__PURE__ */ n.jsx("dd", { children: p })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            Ge,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (m) => {
                m.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Ge,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (m) => {
                m.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Ge,
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
}, hs = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        rt,
        {
          color: zc(e.status || "active"),
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
      Ge,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Ge,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), fs = ({
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
      Ge,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Ge,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), ms = ({
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
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Hc(s)}`, children: [
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
            Ge,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), r?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Ge,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (p) => {
                p.stopPropagation(), r?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function ps(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Hc(e) {
  return ps(e);
}
function Pc(e) {
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
function zc(e) {
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
const Wc = [
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
], gs = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Uc = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Oc = (e) => gs(e) === "high" || e.status === "urgent" ? "primary" : "default", Gc = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Vc = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Wc,
  hiddenFields: [],
  getPriority: gs,
  getStatus: Uc,
  getVariant: Oc,
  fieldRenderers: Gc,
  classPrefix: "adaptive-card--healthcare"
}, Yc = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", o = r.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ n.jsx(
      us,
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
      hs,
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
      fs,
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
      ms,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, qc = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Ba = {
  name: "healthcare",
  defaultCardConfig: Vc,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Yc,
  fieldTypes: qc
};
function Fa(e) {
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
function Kc(e, t) {
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
function Zc(e, t) {
  const [r, a] = we("cards");
  return Fe(() => {
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
function Jc(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Xc(e, t, r, a) {
  const o = a ? { ...a.defaultCardConfig, ...r } : { ...$c, ...r };
  if (a && a.cardTemplates) {
    const s = Jc(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), Ra(e, t, o);
}
const Im = ({
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
  onTabChange: p,
  ariaLabel: m = "Data grid",
  ariaDescription: v,
  orientation: g = "horizontal",
  id: _,
  disabled: G = !1,
  className: j,
  ...I
}) => {
  const k = Zc(e, t), H = f !== void 0, A = f ?? 0, V = De(() => {
    if (c.some(
      (S) => S.data && S.data.length > 0 && Ea(S.data)
    )) {
      const S = Fa(r);
      return {
        ...Ba.defaultCardConfig,
        ...S
      };
    } else
      return Fa(r);
  }, [r, c]), M = De(() => c.some(
    (S) => S.data && S.data.length > 0 && Ea(S.data)
  ) ? Ba : void 0, [c]), R = De(() => ({
    selectedIndex: A,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [A, c.length]), [x, B] = Wa(Kc, R), Z = Te([]), ce = Te([]), K = Te([]), y = Te(null), [b, N] = we({
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
  }), ue = ee((D) => {
    if (!D.current)
      return { columns: 1, rows: 0 };
    const S = D.current, z = S.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (z.length === 0)
      return { columns: 1, rows: 0 };
    const L = S.offsetWidth, w = z[0].offsetWidth, W = Math.floor(L / w) || 1, O = Math.ceil(z.length / W);
    return { columns: W, rows: O };
  }, []), $ = ee((D, S) => ({
    row: Math.floor(D / S),
    col: D % S
  }), []), C = ee((D, S, z) => D * z + S, []), te = ee((D, S, z, L) => {
    const { row: h, col: w } = $(D, L);
    let W = h, O = w;
    switch (S) {
      case "up":
        W = Math.max(0, h - 1);
        break;
      case "down":
        W = Math.min(Math.floor((z - 1) / L), h + 1);
        break;
      case "left":
        O = Math.max(0, w - 1);
        break;
      case "right":
        O = Math.min(L - 1, w + 1);
        break;
    }
    const T = C(W, O, L);
    return Math.min(T, z - 1);
  }, [$, C]);
  Fe(() => {
    b.isCardNavigationActive && b.focusedCardElementIndex >= 0 && b.cardElements.length > 0 && setTimeout(() => {
      const D = b.cardElements[b.focusedCardElementIndex];
      D && (D.element.focus(), D.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [b.isCardNavigationActive, b.focusedCardElementIndex, b.cardElements.length]), Fe(() => {
    const D = () => {
      if (k === "cards" && y.current) {
        const { columns: L, rows: h } = ue(y);
        N((w) => ({
          ...w,
          gridColumns: L,
          gridRows: h
        }));
      }
    }, S = setTimeout(D, 200), z = () => {
      setTimeout(D, 100);
    };
    return window.addEventListener("resize", z), () => {
      clearTimeout(S), window.removeEventListener("resize", z);
    };
  }, [k, c, ue]), Fe(() => {
    const D = x.tabLoadingStates.length, S = c.length;
    D !== S && B({ type: "ADJUST_ARRAYS", payload: { newLength: S } });
  }, [c.length, x.tabLoadingStates.length]), Fe(() => {
    H && f !== x.selectedIndex && B({ type: "SET_SELECTED_INDEX", payload: f });
  }, [H, f, x.selectedIndex]);
  const E = ee((D) => {
    D >= 0 && D < c.length && !c[D].disabled && (B({ type: "SET_SELECTED_INDEX", payload: D }), p?.(D));
  }, [c, p]), Q = ee((D) => {
    console.log("Card selected:", D), B({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: D
    });
  }, []), F = ee((D) => {
    const S = ce.current[D];
    S && (S.focus(), S.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), ae = ee((D) => {
    const S = ce.current[D];
    if (!S) return [];
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
    ].join(", "), L = S.querySelectorAll(z);
    return Array.from(L).map((h, w) => ({
      id: h.id || `card-${D}-element-${w}`,
      element: h,
      label: h.getAttribute("aria-label") || h.textContent?.trim() || h.getAttribute("title") || `Element ${w + 1}`,
      type: h.tagName.toLowerCase() === "button" ? "button" : h.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(h.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), Ce = Te(null), se = ee((D) => {
    const S = Ce.current;
    if (!S) return;
    const z = document.createElement("div");
    z.setAttribute("aria-live", "polite"), z.setAttribute("aria-atomic", "true"), z.className = "sr-only", z.textContent = D, S.appendChild(z), setTimeout(() => {
      S.contains(z) && S.removeChild(z);
    }, 1e3);
  }, []), X = ee((D) => {
    const S = D.filter((L) => L.sortable !== !1), z = [
      { value: "", label: "Sort by..." }
    ];
    return S.forEach((L) => {
      const h = L.label || L.key;
      L.key === "name" ? z.push(
        { value: `${L.key}-asc`, label: `${h} (A-Z)` },
        { value: `${L.key}-desc`, label: `${h} (Z-A)` }
      ) : L.key === "ews_score" || L.key.includes("score") ? z.push(
        { value: `${L.key}-desc`, label: `${h} (High-Low)` },
        { value: `${L.key}-asc`, label: `${h} (Low-High)` }
      ) : L.key === "age" || L.key.includes("date") || L.key.includes("time") ? z.push(
        { value: `${L.key}-desc`, label: `${h} (Oldest-Youngest)` },
        { value: `${L.key}-asc`, label: `${h} (Youngest-Oldest)` }
      ) : z.push(
        { value: `${L.key}-asc`, label: `${h} (A-Z)` },
        { value: `${L.key}-desc`, label: `${h} (Z-A)` }
      );
    }), z;
  }, []), Y = ee((D, S) => S ? [...D].sort((z, L) => {
    const h = z[S.key], w = L[S.key];
    if (h == null && w == null) return 0;
    if (h == null) return 1;
    if (w == null) return -1;
    const W = Number(h), O = Number(w);
    if (!isNaN(W) && !isNaN(O))
      return S.direction === "asc" ? W - O : O - W;
    const T = String(h).toLowerCase(), U = String(w).toLowerCase(), xe = T.localeCompare(U);
    return S.direction === "asc" ? xe : -xe;
  }) : D, []), re = ee((D) => {
    if (!D) {
      N((T) => ({ ...T, cardSortConfig: null })), se("Card sorting cleared");
      return;
    }
    const [S, z] = D.split("-"), L = { key: S, direction: z };
    N((T) => ({ ...T, cardSortConfig: L }));
    const W = c[x.selectedIndex]?.columns.find((T) => T.key === S)?.label || S;
    se(`Cards sorted by ${W} in ${z === "asc" ? "ascending" : "descending"} order`);
  }, [c, x.selectedIndex, se]), me = ee((D) => {
    const L = c[x.selectedIndex]?.columns.find((w) => w.key === D.key)?.label || D.key, h = D.direction === "asc" ? "ascending" : "descending";
    return `${L} (${h})`;
  }, [c, x.selectedIndex]), P = ee((D) => {
    const S = c[x.selectedIndex];
    if (o) {
      const z = x.sortConfig;
      return !z || z.length === 0 ? D : [...D].sort((L, h) => {
        for (const { key: w, direction: W } of z) {
          let O = L[w], T = h[w];
          const U = S?.columns.find((_e) => _e.key === w);
          if (U?.cardRenderer ? (O = U.cardRenderer(L), T = U.cardRenderer(h)) : U?.render && (O = U.render(L), T = U.render(h)), O == null && T == null) continue;
          if (O == null) return W === "asc" ? -1 : 1;
          if (T == null) return W === "asc" ? 1 : -1;
          const xe = Number(O), he = Number(T);
          if (!isNaN(xe) && !isNaN(he)) {
            const _e = xe - he;
            if (_e !== 0) return W === "asc" ? _e : -_e;
            continue;
          }
          const ve = String(O).toLowerCase(), ke = String(T).toLowerCase(), ne = ve.localeCompare(ke);
          if (ne !== 0) return W === "asc" ? ne : -ne;
        }
        return 0;
      });
    } else
      return Y(D, b.cardSortConfig);
  }, [o, x.sortConfig, b.cardSortConfig, Y, c, x.selectedIndex]), je = ee((D, S) => {
    const z = ae(D), L = z[S];
    if (L) {
      L.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const h = `Focused on ${L.label}, ${L.type} ${S + 1} of ${z.length} within card`;
      se(h);
    }
  }, [ae, se]), ge = ee((D) => {
    Z.current[D]?.focus();
  }, []), pe = ee(() => {
    const D = K.current[0];
    if (!D) return [];
    const S = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), z = D.querySelectorAll(S);
    return Array.from(z);
  }, []), de = ee((D) => {
    if (D === 0) {
      const S = K.current[0], z = S?.querySelector(".sort-controls-row");
      if (z) {
        z.setAttribute("tabindex", "-1"), z.focus();
        const h = `Sort controls group with ${pe().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        se(h);
      } else S && S.focus();
    } else {
      const S = pe(), z = D - 1, L = S[z];
      if (L) {
        L.focus();
        const h = L.tagName.toLowerCase() === "select", w = L.tagName.toLowerCase() === "button", W = h ? "dropdown" : w ? "button" : "control", O = h ? ". Use Space key to open dropdown" : "", T = `${W} ${z + 1} of ${S.length}${O}`;
        se(T);
      }
    }
  }, [pe, se]), be = ee((D, S) => {
    const { key: z } = D, L = c[x.selectedIndex], h = L?.data.length || 0;
    if (z === "ArrowLeft" && D.shiftKey) {
      D.preventDefault(), D.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (z === "ArrowRight" && D.shiftKey) {
      D.preventDefault(), D.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!b.isCardNavigationActive) {
      switch (z) {
        case "ArrowUp":
          if (D.preventDefault(), S === 0)
            N((T) => ({ ...T, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), de(0);
          else {
            const T = te(S, "up", h, b.gridColumns);
            T !== S && (N((U) => ({ ...U, focusedCardIndex: T })), F(T), se(`Moved to card ${T + 1} of ${h}`));
          }
          break;
        case "ArrowDown":
          D.preventDefault();
          const w = te(S, "down", h, b.gridColumns);
          w !== S && (N((T) => ({ ...T, focusedCardIndex: w })), F(w), se(`Moved to card ${w + 1} of ${h}`));
          break;
        case "ArrowLeft":
          D.preventDefault();
          const W = te(S, "left", h, b.gridColumns);
          W !== S ? (N((T) => ({ ...T, focusedCardIndex: W })), F(W), se(`Moved to card ${W + 1} of ${h}`)) : x.selectedIndex > 0 && (B({ type: "SET_SELECTED_INDEX", payload: x.selectedIndex - 1 }), N((T) => ({ ...T, focusArea: "tabs" })), setTimeout(() => ge(x.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          D.preventDefault();
          const O = te(S, "right", h, b.gridColumns);
          O !== S ? (N((T) => ({ ...T, focusedCardIndex: O })), F(O), se(`Moved to card ${O + 1} of ${h}`)) : x.selectedIndex < c.length - 1 && (B({ type: "SET_SELECTED_INDEX", payload: x.selectedIndex + 1 }), N((T) => ({ ...T, focusArea: "tabs" })), setTimeout(() => ge(x.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (L?.data[S]) {
            D.preventDefault(), N((U) => ({
              ...U,
              selectedCardIndex: S
            }));
            const T = ae(S);
            T.length > 0 ? (N((U) => ({
              ...U,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: T,
              selectedCardIndex: S
              // Ensure selection is maintained
            })), se(`Card ${S + 1} selected and navigation activated. ${T.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : se(`Card ${S + 1} selected.`);
          }
          break;
        case " ":
          if (L?.data[S]) {
            D.preventDefault(), N((U) => ({
              ...U,
              selectedCardIndex: U.selectedCardIndex === S ? -1 : S
            }));
            const T = b.selectedCardIndex === S;
            se(`Card ${S + 1} ${T ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (z) {
      case "ArrowUp":
      case "ArrowLeft":
        D.preventDefault();
        const w = Math.max(0, b.focusedCardElementIndex - 1);
        N((U) => ({ ...U, focusedCardElementIndex: w })), je(S, w);
        break;
      case "ArrowDown":
      case "ArrowRight":
        D.preventDefault();
        const W = Math.min(b.cardElements.length - 1, b.focusedCardElementIndex + 1);
        N((U) => ({ ...U, focusedCardElementIndex: W })), je(S, W);
        break;
      case "Enter":
        D.preventDefault();
        const O = b.cardElements[b.focusedCardElementIndex];
        O && (O.element.click(), se(`Activated ${O.label}`));
        break;
      case " ":
        D.preventDefault();
        const T = b.cardElements[b.focusedCardElementIndex];
        if (T) {
          const U = new MouseEvent("dblclick", { bubbles: !0 });
          T.element.dispatchEvent(U), se(`Double-clicked ${T.label}`);
        }
        break;
      case "Escape":
        D.preventDefault(), N((U) => ({
          ...U,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => F(S), 0), se("Exited card navigation, returned to card level");
        break;
      case "Home":
        D.preventDefault(), b.cardElements.length > 0 && (N((U) => ({ ...U, focusedCardElementIndex: 0 })), je(S, 0));
        break;
      case "End":
        if (D.preventDefault(), b.cardElements.length > 0) {
          const U = b.cardElements.length - 1;
          N((xe) => ({ ...xe, focusedCardElementIndex: U })), je(S, U);
        }
        break;
    }
  }, [b, x.selectedIndex, c, Q, F, ge, N, ae, je, se]), Ve = ee((D) => {
    const S = Z.current[D], z = S?.parentElement;
    if (!S || !z) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const L = S.getBoundingClientRect(), h = z.getBoundingClientRect();
    L.left >= h.left && L.right <= h.right || (console.log("Tab not visible, scrolling into view (mobile)"), S.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Le = ee((D, S) => {
    if (k !== "cards")
      return;
    const { key: z } = D;
    switch (z) {
      case "ArrowLeft":
        D.preventDefault();
        const L = S > 0 ? S - 1 : c.length - 1;
        E(L), N((O) => ({ ...O, focusedTabIndex: L })), Z.current[L]?.focus(), Ve(L);
        break;
      case "ArrowRight":
        D.preventDefault();
        const h = S < c.length - 1 ? S + 1 : 0;
        E(h), N((O) => ({ ...O, focusedTabIndex: h })), Z.current[h]?.focus(), Ve(h);
        break;
      case "ArrowDown":
        D.preventDefault();
        const w = c[x.selectedIndex];
        w && w.columns && w.columns.length > 0 ? (N((O) => ({
          ...O,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), de(0)) : (N((O) => ({
          ...O,
          focusArea: "cards",
          focusedCardIndex: 0
        })), F(0));
        break;
      case "Home":
        D.preventDefault(), E(0), N((O) => ({ ...O, focusedTabIndex: 0 })), Z.current[0]?.focus(), Ve(0);
        break;
      case "End":
        D.preventDefault();
        const W = c.length - 1;
        E(W), N((O) => ({ ...O, focusedTabIndex: W })), Z.current[W]?.focus(), Ve(W);
        break;
      case "Enter":
      case " ":
        D.preventDefault(), E(S);
        break;
    }
  }, [c.length, E, k, F, N, Ve]), Ne = ee((D, S) => {
    if (k !== "cards")
      return;
    const { key: z } = D, L = c[x.selectedIndex];
    if (S === 0 && !b.isSortControlsActive) {
      switch (z) {
        case "ArrowUp":
          D.preventDefault(), N((w) => ({
            ...w,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), ge(x.selectedIndex);
          break;
        case "ArrowDown":
          D.preventDefault(), L?.data && L.data.length > 0 && (N((w) => ({
            ...w,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), F(0));
          break;
        case "Enter":
        case " ":
          D.preventDefault();
          const h = pe();
          if (h.length > 0) {
            N((W) => ({
              ...W,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), de(1);
            const w = `Entered sort controls navigation mode. ${h.length} controls available. Use arrow keys to navigate between controls.`;
            se(w);
          }
          break;
        case "Escape":
          D.preventDefault(), N((w) => ({
            ...w,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), ge(x.selectedIndex);
          break;
      }
      return;
    }
    if (b.isSortControlsActive) {
      const w = pe().length;
      switch (z) {
        case "ArrowLeft":
          D.preventDefault();
          const W = b.focusedSortControlIndex > 1 ? b.focusedSortControlIndex - 1 : w;
          N((T) => ({ ...T, focusedSortControlIndex: W })), de(W);
          break;
        case "ArrowRight":
          D.preventDefault();
          const O = b.focusedSortControlIndex < w ? b.focusedSortControlIndex + 1 : 1;
          N((T) => ({ ...T, focusedSortControlIndex: O })), de(O);
          break;
        case "ArrowDown":
          if (D.preventDefault(), b.isSortControlsActive) {
            const T = b.focusedSortControlIndex < w ? b.focusedSortControlIndex + 1 : 1;
            N((U) => ({ ...U, focusedSortControlIndex: T })), de(T);
          } else
            L?.data && L.data.length > 0 && (N((T) => ({
              ...T,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), F(0));
          break;
        case "ArrowUp":
          D.preventDefault(), N((T) => ({
            ...T,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), de(0);
          break;
        case "Escape":
          D.preventDefault(), N((T) => ({
            ...T,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), de(0);
          break;
      }
    }
  }, [k, c, x.selectedIndex, b.isSortControlsActive, b.focusedSortControlIndex, de, ge, F, N, se]);
  if (k === "cards") {
    const D = c[x.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${j || ""}`, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": m,
            "aria-describedby": `${v || ""} ${_ ? `${_}-navigation-help` : ""}`.trim(),
            "aria-orientation": g,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((S, z) => {
              const L = z === x.selectedIndex, h = S.disabled || G;
              return /* @__PURE__ */ n.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${S.id}`,
                  "aria-controls": `panel-${S.id}`,
                  "aria-selected": L,
                  "aria-disabled": h,
                  tabIndex: L ? 0 : -1,
                  ref: (w) => {
                    Z.current[z] = w;
                  },
                  onClick: () => E(z),
                  onKeyDown: (w) => Le(w, z),
                  disabled: h,
                  className: [
                    "aria-tabs-datagrid__tab",
                    L ? "aria-tabs-datagrid__tab--selected" : "",
                    h ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: S.label }),
                    x.tabLoadingStates[z] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    x.tabErrors[z] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                S.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      D && D.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          ds,
          {
            sortConfig: x.sortConfig || [],
            columns: D.columns.map((S) => ({ key: S.key, label: S.label })),
            onSortChange: (S) => {
              B({ type: "SET_SORT", payload: S });
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
            tabIndex: b.focusArea === "sort-controls" ? 0 : -1,
            ref: (S) => {
              K.current[0] = S;
            },
            onKeyDown: (S) => Ne(S, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${D.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  cn,
                  {
                    id: `card-sort-${D.id}`,
                    name: `card-sort-${D.id}`,
                    value: b.cardSortConfig ? `${b.cardSortConfig.key}-${b.cardSortConfig.direction}` : "",
                    onChange: (S) => re(S.target.value),
                    className: "sort-select",
                    children: X(D.columns).map((S) => /* @__PURE__ */ n.jsx("option", { value: S.value, children: S.label }, S.value))
                  }
                )
              ] }),
              b.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  me(b.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  Ge,
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
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: y,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${D?.label || "Data"} cards in ${b.gridRows} rows and ${b.gridColumns} columns`,
          "aria-rowcount": b.gridRows,
          "aria-colcount": b.gridColumns,
          id: `panel-${D?.id}`,
          "aria-labelledby": `tab-${D?.id}`,
          children: P(D?.data || []).map((S, z) => {
            const L = b.selectedCardIndex === z, h = b.focusedCardIndex === z && b.focusArea === "cards", w = b.focusedCardIndex === z && b.focusArea === "card" && b.isCardNavigationActive, W = z === 0 && b.focusArea !== "cards", O = h || W, T = $(z, b.gridColumns);
            if (r.cardTemplate) {
              const he = r.cardTemplate(S, D.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": T.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      ref: (ve) => {
                        ce.current[z] = ve;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        L ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        h ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        w ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": T.col + 1,
                      "aria-selected": L,
                      "aria-expanded": w,
                      "aria-description": w ? `Card navigation active. ${b.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: O ? 0 : -1,
                      onClick: () => {
                        N((ve) => ({
                          ...ve,
                          selectedCardIndex: ve.selectedCardIndex === z ? -1 : z
                        })), Q(S);
                      },
                      onKeyDown: (ve) => be(ve, z),
                      onFocus: () => {
                        N((ve) => ve.focusedCardIndex !== z || ve.focusArea !== "cards" ? {
                          ...ve,
                          focusedCardIndex: z,
                          focusArea: "cards"
                        } : ve);
                      },
                      children: he
                    }
                  )
                },
                `card-${z}`
              );
            }
            const U = Xc(S, D.columns, V, M), xe = [
              U.className || "",
              L ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              h ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              w ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": T.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      L ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      h ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      w ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": T.col + 1,
                    "aria-selected": L,
                    "aria-expanded": w,
                    onKeyDown: (he) => {
                      he.key === "Enter" && (he.preventDefault(), N((ve) => ({
                        ...ve,
                        selectedCardIndex: z
                      }))), be(he, z);
                    },
                    children: /* @__PURE__ */ n.jsx(
                      cs,
                      {
                        ...U,
                        ref: (he) => {
                          ce.current[z] = he;
                        },
                        className: xe,
                        "aria-label": `${U["aria-label"] || U.heading}. ${w ? `Card navigation active with ${b.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: O ? 0 : -1,
                        onClick: () => {
                          N((he) => ({
                            ...he,
                            selectedCardIndex: he.selectedCardIndex === z ? -1 : z
                          })), Q(S);
                        },
                        onKeyDown: (he) => be(he, z),
                        onFocus: () => {
                          b.isCardNavigationActive || N((he) => he.focusedCardIndex !== z || he.focusArea !== "cards" ? {
                            ...he,
                            focusedCardIndex: z,
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
              `card-${z}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: Ce,
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
  return k === "hybrid" ? /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${j || ""}`, children: [
    s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ n.jsx(
      pr,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: m,
        ariaDescription: v,
        orientation: g,
        id: _,
        disabled: G,
        selectedIndex: f,
        onTabChange: p,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...I
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${j || ""}`, children: [
    s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ n.jsx(
      pr,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: m,
        ariaDescription: v,
        orientation: g,
        id: _,
        disabled: G,
        selectedIndex: f,
        onTabChange: p,
        actions: l,
        forceActionsAbove: d,
        ...I
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, bs = (e) => {
  const t = gr.find((r) => r.value === e);
  return t ? t.icon : null;
}, Qc = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => bs(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, ed = (e) => Jr(e, [
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
]), td = {
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
  booleanRenderer: (e) => bs(e),
  getDataId: (e) => `financial-${e.id}`
}, nd = (e) => Jr(e, [
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
]), rd = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Qc,
    createTabs: ed
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: td,
    createTabs: nd
  }
}, Aa = (e, t) => {
  const r = rd[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, xs = [
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
], ad = [
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
], sd = [
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
], od = [
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
], La = [
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
], Ma = [
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
], $a = [
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
], id = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, ld = () => [
  {
    id: "patients",
    label: "Patients",
    data: xs,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      us,
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
    data: ad,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      hs,
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
    data: sd,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      fs,
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
    data: od,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ms,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], cd = () => {
  const [e, t] = we("healthcare"), r = De(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Lc,
      tabPanels: ld(),
      data: xs
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Aa("ecommerce", La),
      data: La
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Aa("financial", Ma),
      data: Ma
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: id,
      tabPanels: Jr($a, [
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
      data: $a
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
        Ge,
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
}, Rm = cd, ys = (e) => /* @__PURE__ */ n.jsx(Ga, { ...e }), Bm = ({
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
  organisation: p,
  logo: m,
  className: v,
  ...g
}) => {
  const _ = {
    service: d,
    navigation: c,
    search: u,
    account: f,
    organisation: p,
    logo: m,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(ls, { ...s }),
    /* @__PURE__ */ n.jsx(Ka, { ..._ }),
    /* @__PURE__ */ n.jsx(ys, { className: v, ...g, children: /* @__PURE__ */ n.jsx(Va, { size: o, children: /* @__PURE__ */ n.jsx(Nt, { children: /* @__PURE__ */ n.jsxs(Kt, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(xt, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Za, { ...l })
  ] });
}, Fm = ({
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
  className: p,
  ...m
}) => {
  const v = {
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
    /* @__PURE__ */ n.jsx(ls, { ...s }),
    /* @__PURE__ */ n.jsx(Ka, { ...v }),
    /* @__PURE__ */ n.jsxs(ys, { className: p, ...m, children: [
      d && /* @__PURE__ */ n.jsx(dr, { ...d }),
      /* @__PURE__ */ n.jsx(Va, { size: o, children: /* @__PURE__ */ n.jsx(Nt, { children: /* @__PURE__ */ n.jsxs(Kt, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(xt, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Za, { ...l })
  ] });
}, vs = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = oe("nhsuk-back-link", a), d = oe("nhsuk-back-link__link"), c = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
vs.displayName = "ForwardLink";
const Et = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function Ha() {
  return typeof window > "u" ? Et.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function _s() {
  const [e, t] = le.useState(Ha());
  le.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(Ha());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = le.useCallback((s) => e >= Et[s], [e]), a = le.useCallback((s) => e < Et[s], [e]), o = le.useCallback((s, i) => e >= Et[s] && e < Et[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: o,
    /** Raw numeric values */
    values: Et
  };
}
function Em(e) {
  const { width: t, values: r } = _s();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function dd(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = le.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = le.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return le.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    o ? d.set(r, String(o)) : d.delete(r), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [o, i, t, r, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const ud = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
), hd = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
function fd(e) {
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
    isLoading: p = !1,
    emptyState: m,
    a11y: v,
    className: g,
    getId: _ = (q) => q.id,
    orientation: G = "vertical",
    autoEnableThirdColumn: j = !0,
    onDrillChange: I,
    navigationInstructions: k = "Use arrow keys to navigate, Enter to open.",
    initialFocus: H = "first",
    skipFocusOnSelect: A = !1,
    skipAnnouncements: V = !1,
    onFocusChange: M,
    syncUrl: R = !1,
    urlParamSelected: x = "nsv",
    urlParamDrill: B = "nsvDrill",
    urlSyncDebounceMs: Z = 0,
    lazySecondary: ce = !1,
    navFooter: K,
    collapsibleNav: y = !1,
    navInitiallyCollapsed: b = !1,
    onNavCollapseChange: N,
    collapseToggleLabelShow: ue = "Show navigation",
    collapseToggleLabelHide: $ = "Hide navigation",
    collapseToggleIconShow: C,
    collapseToggleIconHide: te,
    persistNavCollapsed: E,
    navCollapsedStorageKey: Q = "nsvCollapsed",
    navCollapsedUrlParam: F = "nsvCollapsed",
    autoContentHeader: ae,
    contentHeaderLevel: Ce = 2,
    renderContentHeader: se,
    contentSubheader: X,
    secondarySubheader: Y
  } = e, { up: re } = _s(), [me, P] = le.useState(!1);
  le.useEffect(() => {
    P(!0);
  }, []);
  const je = me && re("medium"), ge = me && re("xlarge");
  let pe;
  d ? pe = d : je ? pe = "two-column" : pe = "list", !d && j && l && ge && (pe = "three-column");
  const de = dd({
    enabled: R,
    paramSelected: x,
    paramDrill: B
  }), [be, Ve] = le.useState(
    () => de.selectedId !== void 0 ? de.selectedId : a
  ), Le = r !== void 0 ? r : be, Ne = t.find((q) => _(q) === Le), [D, S] = le.useState(
    void 0
  );
  le.useEffect(() => {
    if (Le === void 0) return;
    S(Le);
    const q = setTimeout(() => S(void 0), 220);
    return () => clearTimeout(q);
  }, [Le]);
  const z = le.useRef(null), L = le.useRef(null), h = le.useRef(null), w = le.useRef(null), [W, O] = le.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [T, U] = le.useState(() => "nav"), [xe, he] = le.useState(0), ve = () => [
    w.current,
    L.current,
    h.current
  ].filter(Boolean), ke = (q) => {
    const ie = ve(), J = Math.max(0, Math.min(q, ie.length - 1));
    ie[J]?.focus(), he(J);
  }, ne = le.useCallback(
    (q) => q ? Array.from(q.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (J) => !J.hasAttribute("disabled") && J.tabIndex !== -1
    ) : [],
    []
  ), _e = le.useCallback(
    (q) => {
      const ie = ne(L.current);
      if (!ie.length) {
        L.current?.focus();
        return;
      }
      const J = Math.max(0, Math.min(q, ie.length - 1)), fe = ie[J];
      fe.focus(), setTimeout(() => {
        document.activeElement !== fe && (fe.focus(), setTimeout(() => {
          document.activeElement !== fe && fe.click();
        }, 10));
      }, 10), O((Be) => ({ ...Be, contentIndex: J }));
      const Me = (Be) => {
        Be.key === "Escape" && (Be.preventDefault(), Be.stopPropagation(), L.current?.focus(), fe.removeEventListener("keydown", Me));
      };
      ie.forEach((Be) => {
        const Ee = Be._escapeHandler;
        Ee && Be.removeEventListener("keydown", Ee);
      }), fe._escapeHandler = Me, fe.addEventListener("keydown", Me);
    },
    [ne]
  ), Ie = le.useCallback(
    (q) => {
      const ie = ne(h.current);
      if (!ie.length) {
        h.current?.focus();
        return;
      }
      const J = Math.max(0, Math.min(q, ie.length - 1)), fe = ie[J];
      fe.focus(), setTimeout(() => {
        document.activeElement !== fe && (fe.focus(), setTimeout(() => {
          document.activeElement !== fe && fe.click();
        }, 10));
      }, 10), O((Be) => ({ ...Be, secondaryIndex: J }));
      const Me = (Be) => {
        Be.key === "Escape" && (Be.preventDefault(), Be.stopPropagation(), h.current?.focus(), fe.removeEventListener("keydown", Me));
      };
      ie.forEach((Be) => {
        const Ee = Be._escapeHandler;
        Ee && Be.removeEventListener("keydown", Ee);
      }), fe._escapeHandler = Me, fe.addEventListener("keydown", Me);
    },
    [ne]
  ), He = (q) => {
    if (q.defaultPrevented) return;
    const ie = q.key, J = q.target, fe = !!Oe.current && Oe.current.contains(J), Me = !!L.current && L.current.contains(J), Be = !!h.current && h.current.contains(J), Ee = !!h.current, Bt = J === w.current || J === L.current || J === h.current, St = Re && (pe === "list" || pe === "cards"), nn = Me && !!J.closest(".nhs-navigation-split-view__header");
    if (T === "containers" && Bt) {
      if (ie === "ArrowRight") {
        q.preventDefault();
        const ye = ve(), Ae = Math.min(ye.length - 1, xe + 1);
        ke(Ae);
        return;
      }
      if (ie === "ArrowLeft") {
        q.preventDefault();
        const ye = Math.max(0, xe - 1);
        ke(ye);
        return;
      }
      if (ie === "Home") {
        q.preventDefault(), ke(0);
        return;
      }
      if (ie === "End") {
        q.preventDefault(), ke(ve().length - 1);
        return;
      }
      if (ie === "Enter" || ie === " ") {
        if (q.preventDefault(), J === w.current) {
          if (U("nav"), Oe.current) {
            const ye = Array.from(
              Oe.current.querySelectorAll("[data-nav-item]")
            );
            (ye[$e >= 0 ? $e : 0] || ye[0])?.focus();
          }
        } else J === L.current ? (U("content"), _e(W.contentIndex)) : J === h.current && (U("secondary"), Ie(W.secondaryIndex));
        return;
      }
      return;
    }
    if (ie === "Escape") {
      if (T === "content" || T === "secondary") {
        if (Me || Be) {
          if (q.preventDefault(), U("nav"), Oe.current) {
            const Ae = Array.from(
              Oe.current.querySelectorAll("[data-nav-item]")
            )[$e >= 0 ? $e : 0];
            setTimeout(() => Ae?.focus(), 10);
          }
        } else if ((J === L.current || J === h.current) && (q.preventDefault(), U("nav"), Oe.current)) {
          const Ae = Array.from(
            Oe.current.querySelectorAll("[data-nav-item]")
          )[$e >= 0 ? $e : 0];
          setTimeout(() => Ae?.focus(), 10);
        }
      }
      return;
    }
    if (ie === "Enter" || ie === " ") {
      if (J.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (J === L.current && T === "content") {
        q.preventDefault(), q.stopPropagation(), ne(L.current).length > 0 && setTimeout(() => {
          _e(W.contentIndex);
        }, 50);
        return;
      }
      if (J === h.current && T === "secondary") {
        q.preventDefault(), q.stopPropagation(), ne(
          h.current
        ).length > 0 && setTimeout(() => {
          Ie(W.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (St && nn && !Bt && (ie === "ArrowRight" || ie === "ArrowLeft")) {
      const ye = ne(L.current).filter(
        (Ae) => Ae.closest(".nhs-navigation-split-view__header")
      );
      if (ye.length > 1) {
        const Ae = ye.indexOf(J);
        if (Ae >= 0) {
          const ea = (Ae + (ie === "ArrowRight" ? 1 : -1) + ye.length) % ye.length;
          q.preventDefault(), ye[ea].focus();
          return;
        }
      }
    }
    if (ie === "ArrowRight") {
      if (fe || T === "nav") {
        q.preventDefault(), U("content"), setTimeout(() => L.current?.focus(), 10);
        return;
      }
      if (Me || T === "content") {
        Ee && (q.preventDefault(), U("secondary"), setTimeout(() => h.current?.focus(), 10));
        return;
      }
    }
    if (ie === "ArrowLeft") {
      if (Be || T === "secondary") {
        q.preventDefault(), U("content"), setTimeout(() => L.current?.focus(), 10);
        return;
      }
      if (Me || T === "content") {
        if (q.preventDefault(), U("nav"), Oe.current) {
          const Ae = Array.from(
            Oe.current.querySelectorAll("[data-nav-item]")
          )[$e >= 0 ? $e : 0];
          setTimeout(() => Ae?.focus(), 10);
        }
        return;
      }
    }
    if (ie === "Home" && !fe && (q.preventDefault(), U("nav"), Oe.current)) {
      const ye = Array.from(
        Oe.current.querySelectorAll("[data-nav-item]")
      ), Ae = ye[$e >= 0 ? $e : 0] || ye[0];
      setTimeout(() => Ae?.focus(), 10);
    }
    if (ie === "End") {
      const ye = Ee ? h.current : L.current;
      ye && !ye.contains(J) && (q.preventDefault(), Ee ? (U("secondary"), setTimeout(() => h.current?.focus(), 10)) : (U("content"), setTimeout(() => L.current?.focus(), 10)));
    }
    if (ie === "ArrowDown" || ie === "ArrowUp") {
      if (J === L.current && ie === "ArrowDown") {
        q.preventDefault(), ne(L.current).length > 0 && _e(0);
        return;
      }
      if (J === h.current && ie === "ArrowDown") {
        q.preventDefault(), ne(
          h.current
        ).length > 0 && Ie(0);
        return;
      }
      if (Me) {
        const ye = ne(L.current);
        if (ye.length) {
          q.preventDefault();
          const Ae = ie === "ArrowDown" ? 1 : -1, tt = (W.contentIndex + Ae + ye.length) % ye.length;
          _e(tt);
        }
      } else if (Be) {
        const ye = ne(h.current);
        if (ye.length) {
          q.preventDefault();
          const Ae = ie === "ArrowDown" ? 1 : -1, tt = (W.secondaryIndex + Ae + ye.length) % ye.length;
          Ie(tt);
        }
      }
    }
  }, Re = !!Ne && (pe === "list" || pe === "cards"), Ye = le.useMemo(() => ae === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : ae === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : ae === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: ae.mobile !== void 0 ? ae.mobile : !0,
    tablet: ae.tablet || !1,
    desktop: ae.desktop || !1
  }, [ae]), _t = me && re("medium") && !re("xlarge"), at = me && re("xlarge"), Qe = !!l, Pe = pe === "three-column", [We, zt] = le.useState(!1);
  le.useEffect(() => {
    Pe && We && zt(!1);
  }, [Pe, We]), le.useEffect(() => {
    We && !Pe && (U("secondary"), he(2), setTimeout(() => {
      h.current?.focus();
    }, 50));
  }, [We, Pe]), le.useEffect(() => {
    !We && !Pe && T === "secondary" && (U("content"), he(1), setTimeout(() => {
      L.current?.focus();
    }, 50));
  }, [We, Pe, T]);
  const Gn = !!Ne && (Re && Ye.mobile || !Re && _t && Ye.tablet || !Re && at && Ye.desktop) || Qe && !Pe, mo = `h${Ce}`, Vn = Ne ? le.createElement(
    mo,
    {
      style: {
        marginLeft: Re ? 32 : 0,
        marginRight: Re ? 32 : 0
      }
    },
    Ne.label
  ) : null, Xr = Re ? "mobile" : _t ? "tablet" : "desktop", po = Qe && !Pe && !We, Yn = Re && Ye.mobile ? /* @__PURE__ */ n.jsx(
    dr,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => Rt(void 0, void 0)
    }
  ) : void 0, qn = po ? /* @__PURE__ */ n.jsx(
    vs,
    {
      element: "button",
      text: f,
      onClick: () => {
        zt(!0);
      }
    }
  ) : void 0, Kn = !Pe && We ? /* @__PURE__ */ n.jsx(
    dr,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => zt(!1)
    }
  ) : void 0, go = le.useMemo(() => {
    if (!Gn || !Ne) return null;
    if (se)
      return se({
        item: Ne,
        detailActive: Re,
        context: Xr,
        backLink: Yn,
        defaultHeading: Vn
      });
    const q = Ne && X ? typeof X == "function" ? X(Ne) : X : null;
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
                  q && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: q })
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
    se,
    Re,
    Xr,
    Yn,
    Kn,
    Vn,
    qn,
    X
  ]);
  le.useEffect(() => {
    if (!R) return;
    const q = pe === "three-column";
    let ie = !1;
    const J = () => {
      ie || (de.selectedId !== Le && de.setSelectedId(Le), de.drilledIn !== q && de.setDrilledIn(q));
    };
    if (Z && Z > 0) {
      const fe = setTimeout(J, Z);
      return () => {
        ie = !0, clearTimeout(fe);
      };
    } else
      J();
  }, [R, de, Le, pe, Z]), le.useEffect(() => {
    if (!R) return;
    const q = () => {
      const ie = new URLSearchParams(window.location.search), J = ie.get(x);
      ie.get(B), Ve(J === null ? void 0 : J);
    };
    return window.addEventListener("popstate", q), () => window.removeEventListener("popstate", q);
  }, [
    R,
    x,
    B,
    d,
    l
  ]);
  const tn = le.useRef(0), st = le.useRef(
    null
  ), Rt = le.useCallback(
    (q, ie) => {
      q !== Le && (r === void 0 && Ve(q), o?.(q, ie));
    },
    [r, o, Le]
  );
  le.useEffect(() => {
    if (!A && Re && L.current) {
      const q = setTimeout(() => L.current?.focus(), 30);
      return () => clearTimeout(q);
    }
  }, [Re, Le, A]);
  const Oe = le.useRef(null), [$e, Wt] = le.useState(
    () => H === "first" ? 0 : -1
  );
  le.useEffect(() => {
    if ($e < 0 || !Oe.current) return;
    const ie = Array.from(
      Oe.current.querySelectorAll("[data-nav-item]")
    )[$e];
    if (ie) {
      document.activeElement !== ie && ie.focus(), tn.current = $e;
      const J = t[$e];
      M?.(
        J ? _(J) : void 0,
        J,
        $e
      );
    }
  }, [$e, t, M, _]);
  const bo = (q) => {
    const ie = G === "vertical" ? "ArrowDown" : "ArrowRight", J = G === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (q.key === "ArrowRight" && G === "vertical") {
      q.preventDefault(), We ? (U("secondary"), setTimeout(() => {
        h.current?.focus();
      }, 10)) : (U("content"), setTimeout(() => {
        L.current?.focus();
      }, 10));
      return;
    }
    if (q.key === ie)
      q.preventDefault(), Wt((fe) => Math.min(t.length - 1, fe + 1));
    else if (q.key === J)
      q.preventDefault(), Wt((fe) => Math.max(0, fe - 1));
    else if (q.key === "Home")
      q.preventDefault(), Wt(0);
    else if (q.key === "End")
      q.preventDefault(), Wt(t.length - 1);
    else if (q.key === "Enter" || q.key === " ") {
      q.preventDefault();
      const fe = t[$e];
      fe && !fe.disabled && Rt(_(fe), fe);
    } else if (q.key.length === 1 && /[a-z0-9]/i.test(q.key)) {
      st.current || (st.current = { buffer: "", last: 0 });
      const fe = Date.now(), Me = 700, Be = q.key.toLowerCase();
      fe - st.current.last > Me ? st.current.buffer = Be : st.current.buffer += Be, st.current.last = fe;
      let Ee = st.current.buffer;
      const Bt = Ee.split("").every((tt) => tt === Ee[0]), St = t.map(
        (tt) => String(tt.label || "").toLowerCase()
      );
      let nn = 0;
      $e >= 0 && (nn = ($e + 1) % t.length);
      let ye;
      const Ae = (tt, ea) => {
        const ta = t.length;
        for (let Xn = 0; Xn < ta; Xn++) {
          const Qn = (nn + Xn) % ta;
          if (!t[Qn].disabled && St[Qn].startsWith(tt))
            return Qn;
        }
      };
      Bt && Ee.length > 1 ? ye = Ae(Ee[0]) : (ye = Ae(Ee), ye === void 0 && Ee.length > 1 && (ye = Ae(Ee[Ee.length - 1]), ye !== void 0 && st.current && (st.current.buffer = Ee[Ee.length - 1]))), ye !== void 0 && Wt(ye);
    }
  }, xo = le.useMemo(() => {
    if (E && (E === "url" || E === "both") && typeof window < "u") {
      const ie = new URLSearchParams(window.location.search).get(F);
      if (ie === "1") return !0;
      if (ie === "0") return !1;
    }
    if (E && (E === "localStorage" || E === "both") && typeof window < "u")
      try {
        const q = window.localStorage.getItem(Q);
        if (q === "1") return !0;
        if (q === "0") return !1;
      } catch {
      }
    return b;
  }, [
    E,
    b,
    Q,
    F
  ]), [et, yo] = le.useState(xo);
  le.useEffect(() => {
    N?.(et);
  }, [et, N]);
  const vo = le.useCallback(() => {
    je && y && yo((q) => !q);
  }, [je, y]);
  le.useEffect(() => {
    if (E && !(typeof window > "u")) {
      if (E === "localStorage" || E === "both")
        try {
          window.localStorage.setItem(
            Q,
            et ? "1" : "0"
          );
        } catch {
        }
      if (E === "url" || E === "both") {
        const q = new URLSearchParams(window.location.search);
        q.set(F, et ? "1" : "0");
        const ie = `${window.location.pathname}?${q.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", ie);
      }
    }
  }, [
    et,
    E,
    Q,
    F
  ]);
  const _o = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Re ? "nhs-navigation-split-view--detail-active" : "",
    pe === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    y && je && et ? "nhs-navigation-split-view--nav-collapsed" : "",
    g
  ].filter(Boolean).join(" "), Zn = le.useRef(null);
  le.useEffect(() => {
    if (!V && Zn.current) {
      const q = Ne ? `Selected ${Ne.label}` : "Selection cleared";
      Zn.current.textContent = q;
    }
  }, [Ne, V]), le.useEffect(() => {
    !Re && Le == null && Oe.current && Oe.current.querySelectorAll("[data-nav-item]")[tn.current]?.focus();
  }, [Re, Le]);
  const kt = pe === "three-column", [Jn, ko] = le.useState(!1);
  le.useEffect(() => {
    kt && !Jn && ko(!0);
  }, [kt, Jn]);
  const Qr = le.useRef(kt);
  le.useEffect(() => {
    Qr.current !== kt && (I?.(kt), Qr.current = kt);
  }, [kt, I]);
  const wo = () => {
    if (pe === "cards")
      return /* @__PURE__ */ n.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": Le ? String(Le) : void 0,
          children: [
            t.map((J) => {
              const fe = _(J), Me = fe === Le;
              return /* @__PURE__ */ n.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": Me,
                  children: /* @__PURE__ */ n.jsxs(
                    "button",
                    {
                      id: String(fe),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": Me || void 0,
                      "data-disabled": J.disabled || void 0,
                      disabled: J.disabled,
                      onClick: () => !J.disabled && Rt(fe, J),
                      children: [
                        J.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: J.icon }),
                        /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: J.label }),
                        J.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: J.description }),
                        s?.(J),
                        J.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: J.badge })
                      ]
                    }
                  )
                },
                fe
              );
            }),
            t.length === 0 && !p && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: m || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const q = "nsv-nav-instructions", ie = le.useMemo(() => le.memo(
      ({
        item: J,
        idx: fe,
        selected: Me,
        focused: Be
      }) => {
        const Ee = _(J), Bt = J.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Be ? 0 : -1,
          onClick: () => {
            tn.current = fe, Rt(Ee, J);
          },
          onKeyDown: (St) => {
            (St.key === "Enter" || St.key === " ") && (St.preventDefault(), tn.current = fe, Rt(Ee, J));
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
            "data-disabled": J.disabled || void 0,
            ...Bt,
            children: [
              J.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: J.icon }),
              /* @__PURE__ */ n.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: J.label }),
                J.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: J.description }),
                s?.(J)
              ] }),
              J.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: J.badge })
            ]
          }
        );
      }
    ), [_, Rt, s]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: Oe,
          className: "nhs-navigation-split-view__list",
          onKeyDown: bo,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": q,
          "aria-activedescendant": Le ? String(Le) : void 0,
          children: [
            t.map((J, fe) => /* @__PURE__ */ n.jsx(
              ie,
              {
                item: J,
                idx: fe,
                selected: _(J) === Le,
                focused: fe === $e || $e === -1 && fe === 0 && H === "first",
                "data-just-selected": _(J) === D ? "true" : void 0
              },
              _(J)
            )),
            t.length === 0 && !p && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: m || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          id: q,
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
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: z,
      className: _o,
      "aria-label": v?.rootLabel,
      "data-layout": pe,
      onKeyDown: He,
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
                  ref: w,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": v?.navigationLabel || "Items",
                  "data-collapsed": et || void 0,
                  tabIndex: 0,
                  children: [
                    y && je && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: vo,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": et ? ue : $,
                        title: et ? ue : $,
                        children: et ? C || /* @__PURE__ */ n.jsx(hd, {}) : te || /* @__PURE__ */ n.jsx(ud, {})
                      }
                    ) }),
                    /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: wo() }),
                    K && /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: K
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: L,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": v?.contentLabel || "Content",
                  "data-has-selection": !!Ne || void 0,
                  tabIndex: 0,
                  style: {
                    display: We && !Pe ? "none" : void 0
                  },
                  children: [
                    Gn && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: go }),
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
              pe === "three-column" && (!ce || Jn) || We && !Pe ? /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: h,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": v?.secondaryContentLabel || "Secondary",
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
                        We && !Pe && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ n.jsx(
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
                        Ne && Y && /* @__PURE__ */ n.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof Y == "function" ? Y(Ne) : Y
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
fd.displayName = "NavigationSplitView";
const md = "150ms", pd = "300ms", gd = "500ms", bd = "cubic-bezier(0.4, 0, 1, 1)", xd = "cubic-bezier(0, 0, 0.2, 1)", yd = "cubic-bezier(0.4, 0, 0.2, 1)", vd = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", _d = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", kd = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", wd = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Sd = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Cd = "1px", jd = "2px", Nd = "4px", Td = "4px", Dd = "4px", Id = "2px", Rd = "1px", Bd = "0px", Fd = "4px", Ed = "8px", Ad = "12px", ks = "#d8dde0", ws = "#4c6272", Ss = "#d8dde0", Cs = "#aeb7bd", js = "#d5281b", Ns = "#005eb8", Ts = "#ffffff", Ds = "#212b32", Is = "#007f3b", Rs = "#330072", Bs = "#7c2855", Fs = "#d5281b", Es = "#ffeb3b", As = "#fff9c4", Ls = "#ffb81c", Ms = "#ed8b00", $s = "#00a499", Hs = "#ae2573", Ps = "#4c6272", zs = "#768692", Ws = "#aeb7bd", Us = "#d8dde0", Os = "#f0f4f5", Ld = "#212b32", Md = "#4c6272", $d = "#ffffff", Hd = "#212b32", Pd = "#005eb8", zd = "#7c2855", Wd = "#003087", Ud = "#330072", Od = "#ffeb3b", Gd = "#212b32", Vd = "#d8dde0", Yd = "#ffffff33", qd = "#d5281b", Kd = "#4c6272", Zd = "#ffffff", Jd = "#007f3b", Xd = "#ffffff", Qd = "#006530", eu = "#004021", tu = "#004021", nu = "#00000000", ru = "#ffffff", au = "#005eb8", su = "#005eb8", ou = "#d9e5f2", iu = "#c7daf0", lu = "#005eb8", cu = "#ffffff", du = "#212b32", uu = "#d9dde0", hu = "#b3bcc2", fu = "#b3bcc2", mu = "#d5281b", pu = "#aa2016", gu = "#6a140e", bu = "#6a140e", xu = "#005eb8", yu = "#004b93", vu = "#002f5c", _u = "#002f5c", ku = "8px", wu = "16px", Su = "12px", Cu = "16px", ju = "4px", Nu = "40px", Tu = "4px", Du = "40px", Iu = "12px", Ru = "16px", Bu = "32px", Fu = "16px", Eu = "20px", Au = "28px", Lu = "9px", Mu = "2px", $u = "16px", Hu = "24px", Pu = "8px", zu = "24px", Wu = "16px", Uu = "4px", Ou = "4px", Gu = "4px", Vu = "8px", Yu = "4px", qu = "16px", Ku = "#007f3b", Zu = "#006530", Ju = "#004021", Xu = "#d8dde0", Qu = "#ffffff", eh = "#768692", th = "#00000000", nh = "#ffeb3b", rh = "#00000000", ah = "#ffffff", sh = "#d9e5f2", oh = "#c7daf0", ih = "#005eb8", lh = "#005eb8", Gs = "8px", Vs = "16px", Ys = "12px", qs = "16px", ch = "2px", dh = "4px", uh = "4px", hh = "600", fh = "#ffffff", mh = "#d8dde0", ph = "#aeb7bd", gh = "#f0f4f5", bh = "#212b32", xh = "#212b32", yh = "#005eb8", Ks = "16px", Zs = "32px", Js = "16px", vh = "1px", _h = "4px", kh = "none", wh = "0 2px 4px rgba(0, 0, 0, 0.1)", Sh = "#ffffff", Ch = "#ffffff", jh = "#d8dde0", Nh = "#ffffff", Th = "#4c6272", Dh = "#ffeb3b", Ih = "#d5281b", Rh = "#aeb7bd", Bh = "#212b32", Fh = "#4c6272", Eh = "#768692", Ah = "#212b32", Lh = "#ffffff", Mh = "600", $h = "#d5281b", Hh = "600", Ph = "#4c6272", Xs = "4px", Qs = "40px", eo = "40px", to = "12px", zh = "2px", Wh = "4px", Uh = "0px", Oh = "16px", Gh = "18px", Vh = "24px", Yh = "32px", qh = "34px", Kh = "32px", Zh = "40px", Jh = "48px", Xh = "5.4ex", Qh = "7.2ex", ef = "9ex", tf = "10.8ex", nf = "20ex", rf = "38ex", af = "56ex", sf = "44px", of = "40px", lf = "1020px", cf = "100%", df = "50%", uf = "33.333%", hf = "25%", ff = "20%", mf = "320px", pf = "641px", gf = "1025px", bf = "1280px", xf = "960px", yf = "32px", vf = "16px", _f = "#d5281b", kf = "#d5281b", wf = "#ffffff", Sf = "#007f3b", Cf = "#007f3b", jf = "#ffffff", Nf = "#ffeb3b", Tf = "#ffeb3b", Df = "#212b32", If = "#005eb8", Rf = "#005eb8", Bf = "#ffffff", Ff = "#d8dde0", Ef = "#aeb7bd", Af = "#768692", Lf = "0 4px 0 #004021", Mf = "0 4px 0 #005eb8", $f = "0 4px 0 #6a140e", Hf = "0 4px 0 #ffeb3b", Pf = "none", zf = "0 2px 4px rgba(0, 0, 0, 0.1)", Wf = "4px", Uf = "0px", Of = "solid", Gf = "0 0 0 3px #ffeb3b", Vf = "0 0 0 3px #ffeb3b", Yf = "none", qf = "0 1px 3px rgba(0, 0, 0, 0.12)", Kf = "0 2px 6px rgba(0, 0, 0, 0.16)", Zf = "0 4px 12px rgba(0, 0, 0, 0.20)", no = "0", ro = "4px", ao = "8px", so = "16px", oo = "24px", io = "32px", lo = "40px", co = "48px", uo = "56px", ho = "64px", br = "0", xr = "0", yr = "4px", vr = "4px", _r = "8px", kr = "8px", wr = "8px", Sr = "16px", Cr = "16px", jr = "24px", Nr = "24px", Tr = "32px", Dr = "32px", Ir = "40px", Rr = "40px", Br = "48px", Fr = "48px", Er = "56px", Ar = "56px", Lr = "64px", bn = "Frutiger W01", xn = "Arial, Helvetica, sans-serif", yn = "sans-serif", vn = "400", _n = "600", kn = "400", wn = "12px", Sn = "14px", Cn = "12pt", jn = "14px", Nn = "16px", Tn = "12pt", Dn = "16px", In = "19px", Rn = "13pt", Bn = "19px", Fn = "22px", En = "15pt", An = "22px", Ln = "26px", Mn = "17pt", $n = "27px", Hn = "36px", Pn = "20pt", zn = "33px", Wn = "48px", Un = "24pt", Mr = "16px", $r = "24px", ot = {
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
}, Jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: md,
  AnimationDurationNormal: pd,
  AnimationDurationSlow: gd,
  AnimationEasingBounce: vd,
  AnimationEasingEaseIn: bd,
  AnimationEasingEaseInOut: yd,
  AnimationEasingEaseOut: xd,
  BorderColorCard: Ss,
  BorderColorCardHover: Cs,
  BorderColorDefault: ks,
  BorderColorError: js,
  BorderColorForm: ws,
  BorderRadiusLarge: Ad,
  BorderRadiusMedium: Ed,
  BorderRadiusNone: Bd,
  BorderRadiusSmall: Fd,
  BorderWidthCardBottom: Td,
  BorderWidthDefault: Cd,
  BorderWidthFormElement: jd,
  BorderWidthFormElementError: Nd,
  BorderWidthPanel: Dd,
  BorderWidthTableCell: Rd,
  BorderWidthTableHeader: Id,
  BreakpointDesktop: gf,
  BreakpointLargeDesktop: bf,
  BreakpointMobile: mf,
  BreakpointTablet: pf,
  ButtonBorderRadius: dh,
  ButtonBorderWidth: ch,
  ButtonPrimaryBackgroundActive: Ju,
  ButtonPrimaryBackgroundDefault: Ku,
  ButtonPrimaryBackgroundDisabled: Xu,
  ButtonPrimaryBackgroundHover: Zu,
  ButtonPrimaryBorderDefault: th,
  ButtonPrimaryBorderFocus: nh,
  ButtonPrimaryTextDefault: Qu,
  ButtonPrimaryTextDisabled: eh,
  ButtonSecondaryBackgroundActive: oh,
  ButtonSecondaryBackgroundDefault: rh,
  ButtonSecondaryBackgroundHover: sh,
  ButtonSecondaryBackgroundSolid: ah,
  ButtonSecondaryBorderDefault: lh,
  ButtonSecondaryTextDefault: ih,
  ButtonShadowSize: uh,
  ButtonSpacingPaddingHorizontalDesktop: qs,
  ButtonSpacingPaddingHorizontalMobile: Vs,
  ButtonSpacingPaddingVerticalDesktop: Ys,
  ButtonSpacingPaddingVerticalMobile: Gs,
  ButtonTypographyWeight: hh,
  CardBackgroundDefault: fh,
  CardBorderBottom: gh,
  CardBorderDefault: mh,
  CardBorderHover: ph,
  CardBorderWidthBottom: _h,
  CardBorderWidthDefault: vh,
  CardShadowDefault: kh,
  CardShadowHover: wh,
  CardSpacingHeadingMargin: Js,
  CardSpacingPaddingDesktop: Zs,
  CardSpacingPaddingMobile: Ks,
  CardTextDescription: xh,
  CardTextHeading: bh,
  CardTextLink: yh,
  ColorBorderDefault: Vd,
  ColorBorderSecondary: Yd,
  ColorButtonLoginActive: vu,
  ColorButtonLoginBackground: xu,
  ColorButtonLoginHover: yu,
  ColorButtonLoginShadow: _u,
  ColorButtonPrimaryActive: eu,
  ColorButtonPrimaryBackground: Jd,
  ColorButtonPrimaryHover: Qd,
  ColorButtonPrimaryShadow: tu,
  ColorButtonPrimaryText: Xd,
  ColorButtonReverseActive: hu,
  ColorButtonReverseBackground: cu,
  ColorButtonReverseHover: uu,
  ColorButtonReverseShadow: fu,
  ColorButtonReverseText: du,
  ColorButtonSecondaryActive: iu,
  ColorButtonSecondaryBackground: nu,
  ColorButtonSecondaryBackgroundSolid: ru,
  ColorButtonSecondaryBorder: au,
  ColorButtonSecondaryHover: ou,
  ColorButtonSecondaryShadow: lu,
  ColorButtonSecondaryText: su,
  ColorButtonWarningActive: gu,
  ColorButtonWarningBackground: mu,
  ColorButtonWarningHover: pu,
  ColorButtonWarningShadow: bu,
  ColorError: qd,
  ColorFocusBackground: Od,
  ColorFocusText: Gd,
  ColorFormBackground: Zd,
  ColorFormBorder: Kd,
  ColorGrey1: Ps,
  ColorGrey2: zs,
  ColorGrey3: Ws,
  ColorGrey4: Us,
  ColorGrey5: Os,
  ColorLinkActive: Wd,
  ColorLinkDefault: Pd,
  ColorLinkHover: zd,
  ColorLinkVisited: Ud,
  ColorPrimaryBlack: Ds,
  ColorPrimaryBlue: Ns,
  ColorPrimaryDarkPink: Bs,
  ColorPrimaryGreen: Is,
  ColorPrimaryPurple: Rs,
  ColorPrimaryRed: Fs,
  ColorPrimaryWhite: Ts,
  ColorPrimaryYellow: Es,
  ColorSecondaryAquaGreen: $s,
  ColorSecondaryOrange: Ms,
  ColorSecondaryPaleYellow: As,
  ColorSecondaryPink: Hs,
  ColorSecondaryWarmYellow: Ls,
  ColorTextPrimary: Ld,
  ColorTextPrint: Hd,
  ColorTextReverse: $d,
  ColorTextSecondary: Md,
  ComponentBlur: Ou,
  ComponentBreadcrumbChevronMarginLeft: Lu,
  ComponentBreadcrumbChevronMarginRight: Mu,
  ComponentBreadcrumbPaddingTopDesktop: Hu,
  ComponentBreadcrumbPaddingTopMobile: $u,
  ComponentButtonPaddingDesktopHorizontal: Cu,
  ComponentButtonPaddingDesktopVertical: Su,
  ComponentButtonPaddingMobileHorizontal: wu,
  ComponentButtonPaddingMobileVertical: ku,
  ComponentButtonShadowSize: ju,
  ComponentCardHeadingMargin: Fu,
  ComponentCardPaddingDesktop: Bu,
  ComponentCardPaddingMobile: Ru,
  ComponentDetails: Vu,
  ComponentExpander: Yu,
  ComponentFormCheckboxLabelPadding: Iu,
  ComponentFormCheckboxSize: Du,
  ComponentFormInputMinHeight: Nu,
  ComponentFormInputPadding: Tu,
  ComponentLink: Gu,
  ComponentPagination: qu,
  ComponentPanelPaddingDesktop: Au,
  ComponentPanelPaddingMobile: Eu,
  ComponentSpread: Uu,
  ComponentSummaryListCellPaddingHorizontal: zu,
  ComponentSummaryListCellPaddingVertical: Pu,
  ComponentSummaryListRowMargin: Wu,
  ElevationHigh: Zf,
  ElevationLow: qf,
  ElevationMedium: Kf,
  ElevationNone: Yf,
  FocusOutlineOffset: Uf,
  FocusOutlineStyle: Of,
  FocusOutlineWidth: Wf,
  FocusShadowButton: Vf,
  FocusShadowInput: Gf,
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
  FontSize22Mobile: Bn,
  FontSize22Print: En,
  FontSize22Tablet: Fn,
  FontSize26Mobile: An,
  FontSize26Print: Mn,
  FontSize26Tablet: Ln,
  FontSize36Mobile: $n,
  FontSize36Print: Pn,
  FontSize36Tablet: Hn,
  FontSize48Mobile: zn,
  FontSize48Print: Un,
  FontSize48Tablet: Wn,
  FontSizeBase: Mr,
  FontWeightBold: _n,
  FontWeightLight: kn,
  FontWeightNormal: vn,
  FormBorderRadius: Uh,
  FormBorderWidthDefault: zh,
  FormBorderWidthError: Wh,
  FormErrorTextDefault: $h,
  FormErrorTypographyWeight: Hh,
  FormHintTextDefault: Ph,
  FormInputBackgroundDefault: Sh,
  FormInputBackgroundDisabled: jh,
  FormInputBackgroundError: Nh,
  FormInputBackgroundFocus: Ch,
  FormInputBorderDefault: Th,
  FormInputBorderDisabled: Rh,
  FormInputBorderError: Ih,
  FormInputBorderFocus: Dh,
  FormInputTextDefault: Bh,
  FormInputTextDisabled: Eh,
  FormInputTextPlaceholder: Fh,
  FormLabelTextDefault: Ah,
  FormLabelTextRequired: Lh,
  FormLabelTypographyWeight: Mh,
  FormSpacingCheckboxLabelPadding: to,
  FormSpacingCheckboxSize: eo,
  FormSpacingInputMinHeight: Qs,
  FormSpacingInputPadding: Xs,
  GridGutter: yf,
  GridGutterHalf: vf,
  GridPageWidth: xf,
  HeadingsNhsukHeadingL: it,
  HeadingsNhsukHeadingM: lt,
  HeadingsNhsukHeadingS: ct,
  HeadingsNhsukHeadingXl: ot,
  HeadingsNhsukHeadingXs: dt,
  LayoutColumnActions: ff,
  LayoutColumnFull: cf,
  LayoutColumnHalf: df,
  LayoutColumnQuarter: hf,
  LayoutColumnThird: uf,
  LayoutContainerMaxWidth: lf,
  ParagraphsBody: ut,
  ParagraphsBodyLarge: ht,
  ParagraphsBodySmall: ft,
  ParagraphsLedeText: mt,
  ParagraphsLedeTextSmall: pt,
  ShadowButtonDefault: Lf,
  ShadowButtonFocus: Hf,
  ShadowButtonSecondary: Mf,
  ShadowButtonWarning: $f,
  ShadowCardDefault: Pf,
  ShadowCardHover: zf,
  SizeButtonMinHeightDesktop: of,
  SizeButtonMinHeightMobile: sf,
  SizeFormControlLarge: Jh,
  SizeFormControlMedium: Zh,
  SizeFormControlSmall: Kh,
  SizeFormInputWidth2xl: rf,
  SizeFormInputWidth3xl: af,
  SizeFormInputWidthLg: tf,
  SizeFormInputWidthMd: ef,
  SizeFormInputWidthSm: Qh,
  SizeFormInputWidthXl: nf,
  SizeFormInputWidthXs: Xh,
  SizeIconExtraLarge: Yh,
  SizeIconLarge: Vh,
  SizeIconMedium: Gh,
  SizeIconNhsDefault: qh,
  SizeIconSmall: Oh,
  Spacing0: no,
  Spacing1: ro,
  Spacing2: ao,
  Spacing3: so,
  Spacing4: oo,
  Spacing5: io,
  Spacing6: lo,
  Spacing7: co,
  Spacing8: uo,
  Spacing9: ho,
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
  SpacingResponsive7Tablet: Br,
  SpacingResponsive8Mobile: Fr,
  SpacingResponsive8Tablet: Er,
  SpacingResponsive9Mobile: Ar,
  SpacingResponsive9Tablet: Lr,
  StateDisabledBackground: Ff,
  StateDisabledBorder: Ef,
  StateDisabledText: Af,
  StateErrorBackground: _f,
  StateErrorBorder: kf,
  StateErrorText: wf,
  StateInfoBackground: If,
  StateInfoBorder: Rf,
  StateInfoText: Bf,
  StateSuccessBackground: Sf,
  StateSuccessBorder: Cf,
  StateSuccessText: jf,
  StateWarningBackground: Nf,
  StateWarningBorder: Tf,
  StateWarningText: Df,
  TransitionButtonDefault: _d,
  TransitionButtonShadow: kd,
  TransitionCardHover: Sd,
  TransitionInputFocus: wd
}, Symbol.toStringTag, { value: "Module" })), Am = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Lm = ({
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
), Mm = ({
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
), $m = ({
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
), Hm = ({
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
), Pm = ({
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
), zm = ({
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
), Wm = ({
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
), Um = ({
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
), Om = ({
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
), Gm = ({
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
), Vm = () => De(() => Jf, []), Ym = () => De(() => ({
  // Border colors
  BorderColorDefault: ks,
  BorderColorForm: ws,
  BorderColorCard: Ss,
  BorderColorCardHover: Cs,
  BorderColorError: js,
  // Primary colors
  ColorPrimaryBlue: Ns,
  ColorPrimaryWhite: Ts,
  ColorPrimaryBlack: Ds,
  ColorPrimaryGreen: Is,
  ColorPrimaryPurple: Rs,
  ColorPrimaryDarkPink: Bs,
  ColorPrimaryRed: Fs,
  ColorPrimaryYellow: Es,
  // Secondary colors
  ColorSecondaryPaleYellow: As,
  ColorSecondaryWarmYellow: Ls,
  ColorSecondaryOrange: Ms,
  ColorSecondaryAquaGreen: $s,
  ColorSecondaryPink: Hs,
  // Grey scale
  ColorGrey1: Ps,
  ColorGrey2: zs,
  ColorGrey3: Ws,
  ColorGrey4: Us,
  ColorGrey5: Os
}), []), qm = () => De(() => ({
  Spacing0: no,
  Spacing1: ro,
  Spacing2: ao,
  Spacing3: so,
  Spacing4: oo,
  Spacing5: io,
  Spacing6: lo,
  Spacing7: co,
  Spacing8: uo,
  Spacing9: ho
}), []), Km = () => De(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: wn,
    Size16: jn,
    Size19: Dn,
    Size22: Bn,
    Size26: An,
    Size36: $n,
    Size48: zn
  },
  Tablet: {
    Size14: Sn,
    Size16: Nn,
    Size19: In,
    Size22: Fn,
    Size26: Ln,
    Size36: Hn,
    Size48: Wn
  },
  Print: {
    Size14: Cn,
    Size16: Tn,
    Size19: Rn,
    Size22: En,
    Size26: Mn,
    Size36: Pn,
    Size48: Un
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
  FontSize22Mobile: Bn,
  FontSize22Tablet: Fn,
  FontSize22Print: En,
  FontSize26Mobile: An,
  FontSize26Tablet: Ln,
  FontSize26Print: Mn,
  FontSize36Mobile: $n,
  FontSize36Tablet: Hn,
  FontSize36Print: Pn,
  FontSize48Mobile: zn,
  FontSize48Tablet: Wn,
  FontSize48Print: Un,
  FontSizeBase: Mr,
  FontLineHeightBase: $r
}), []), Zm = () => De(() => ({
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
    Size8: Fr,
    Size9: Ar
  },
  Tablet: {
    Size0: xr,
    Size1: vr,
    Size2: kr,
    Size3: Sr,
    Size4: jr,
    Size5: Tr,
    Size6: Ir,
    Size7: Br,
    Size8: Er,
    Size9: Lr
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
  SpacingResponsive7Tablet: Br,
  SpacingResponsive8Mobile: Fr,
  SpacingResponsive8Tablet: Er,
  SpacingResponsive9Mobile: Ar,
  SpacingResponsive9Tablet: Lr
}), []), Jm = () => De(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Gs,
  ButtonSpacingPaddingHorizontalMobile: Vs,
  ButtonSpacingPaddingVerticalDesktop: Ys,
  ButtonSpacingPaddingHorizontalDesktop: qs,
  // Card spacing	
  CardSpacingPaddingMobile: Ks,
  CardSpacingPaddingDesktop: Zs,
  CardSpacingHeadingMargin: Js,
  // Form spacing
  FormSpacingInputPadding: Xs,
  FormSpacingInputMinHeight: Qs,
  FormSpacingCheckboxSize: eo,
  FormSpacingCheckboxLabelPadding: to
}), []), Xm = () => De(() => ({
  xl: ot,
  l: it,
  m: lt,
  s: ct,
  xs: dt
}), []), Qm = () => De(() => ({
  body: ut,
  bodyLarge: ht,
  bodySmall: ft,
  ledeText: mt,
  ledeTextSmall: pt
}), []), ep = () => De(() => ({
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
        size22: Bn,
        size26: An,
        size36: $n,
        size48: zn
      },
      tablet: {
        size14: Sn,
        size16: Nn,
        size19: In,
        size22: Fn,
        size26: Ln,
        size36: Hn,
        size48: Wn
      },
      print: {
        size14: Cn,
        size16: Tn,
        size19: Rn,
        size22: En,
        size26: Mn,
        size36: Pn,
        size48: Un
      }
    }
  }
}), []);
function tp(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [a, o] = le.useState(t), s = le.useCallback(() => o("three-column"), []), i = le.useCallback(() => o((d) => d === "three-column" ? r : d), [r]), l = le.useCallback(() => o((d) => d === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const fo = {
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
function np(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...fo, ...e }, a = [];
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
function rp(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...fo, ...e };
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
const ap = '"Frutiger W01", Arial, Helvetica, sans-serif', sp = "Arial, Helvetica, sans-serif";
async function op() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Bo as Account,
  tm as ActionLink,
  Im as AdaptiveDataGrid,
  md as AnimationDurationFast,
  pd as AnimationDurationNormal,
  gd as AnimationDurationSlow,
  vd as AnimationEasingBounce,
  bd as AnimationEasingEaseIn,
  yd as AnimationEasingEaseInOut,
  xd as AnimationEasingEaseOut,
  hs as AppointmentCard,
  Cc as AriaDataGrid,
  pr as AriaTabsDataGrid,
  Im as AriaTabsDataGridAdaptive,
  dr as BackLink,
  Ss as BorderColorCard,
  Cs as BorderColorCardHover,
  ks as BorderColorDefault,
  js as BorderColorError,
  ws as BorderColorForm,
  Ad as BorderRadiusLarge,
  Ed as BorderRadiusMedium,
  Bd as BorderRadiusNone,
  Fd as BorderRadiusSmall,
  Td as BorderWidthCardBottom,
  Cd as BorderWidthDefault,
  jd as BorderWidthFormElement,
  Nd as BorderWidthFormElementError,
  Dd as BorderWidthPanel,
  Rd as BorderWidthTableCell,
  Id as BorderWidthTableHeader,
  mc as Breadcrumb,
  gf as BreakpointDesktop,
  bf as BreakpointLargeDesktop,
  mf as BreakpointMobile,
  pf as BreakpointTablet,
  Ge as Button,
  dh as ButtonBorderRadius,
  ch as ButtonBorderWidth,
  Ju as ButtonPrimaryBackgroundActive,
  Ku as ButtonPrimaryBackgroundDefault,
  Xu as ButtonPrimaryBackgroundDisabled,
  Zu as ButtonPrimaryBackgroundHover,
  th as ButtonPrimaryBorderDefault,
  nh as ButtonPrimaryBorderFocus,
  Qu as ButtonPrimaryTextDefault,
  eh as ButtonPrimaryTextDisabled,
  oh as ButtonSecondaryBackgroundActive,
  rh as ButtonSecondaryBackgroundDefault,
  sh as ButtonSecondaryBackgroundHover,
  ah as ButtonSecondaryBackgroundSolid,
  lh as ButtonSecondaryBorderDefault,
  ih as ButtonSecondaryTextDefault,
  uh as ButtonShadowSize,
  qs as ButtonSpacingPaddingHorizontalDesktop,
  Vs as ButtonSpacingPaddingHorizontalMobile,
  Ys as ButtonSpacingPaddingVerticalDesktop,
  Gs as ButtonSpacingPaddingVerticalMobile,
  hh as ButtonTypographyWeight,
  cs as Card,
  fh as CardBackgroundDefault,
  gh as CardBorderBottom,
  mh as CardBorderDefault,
  ph as CardBorderHover,
  _h as CardBorderWidthBottom,
  vh as CardBorderWidthDefault,
  bm as CardGroup,
  xm as CardGroupItem,
  kh as CardShadowDefault,
  wh as CardShadowHover,
  Js as CardSpacingHeadingMargin,
  Zs as CardSpacingPaddingDesktop,
  Ks as CardSpacingPaddingMobile,
  xh as CardTextDescription,
  bh as CardTextHeading,
  yh as CardTextLink,
  ym as CareCard,
  nm as CharacterCount,
  Mo as Checkbox,
  Po as Checkboxes,
  Vd as ColorBorderDefault,
  Yd as ColorBorderSecondary,
  vu as ColorButtonLoginActive,
  xu as ColorButtonLoginBackground,
  yu as ColorButtonLoginHover,
  _u as ColorButtonLoginShadow,
  eu as ColorButtonPrimaryActive,
  Jd as ColorButtonPrimaryBackground,
  Qd as ColorButtonPrimaryHover,
  tu as ColorButtonPrimaryShadow,
  Xd as ColorButtonPrimaryText,
  hu as ColorButtonReverseActive,
  cu as ColorButtonReverseBackground,
  uu as ColorButtonReverseHover,
  fu as ColorButtonReverseShadow,
  du as ColorButtonReverseText,
  iu as ColorButtonSecondaryActive,
  nu as ColorButtonSecondaryBackground,
  ru as ColorButtonSecondaryBackgroundSolid,
  au as ColorButtonSecondaryBorder,
  ou as ColorButtonSecondaryHover,
  lu as ColorButtonSecondaryShadow,
  su as ColorButtonSecondaryText,
  gu as ColorButtonWarningActive,
  mu as ColorButtonWarningBackground,
  pu as ColorButtonWarningHover,
  bu as ColorButtonWarningShadow,
  qd as ColorError,
  Od as ColorFocusBackground,
  Gd as ColorFocusText,
  Zd as ColorFormBackground,
  Kd as ColorFormBorder,
  Ps as ColorGrey1,
  zs as ColorGrey2,
  Ws as ColorGrey3,
  Us as ColorGrey4,
  Os as ColorGrey5,
  Wd as ColorLinkActive,
  Pd as ColorLinkDefault,
  zd as ColorLinkHover,
  Ud as ColorLinkVisited,
  Ds as ColorPrimaryBlack,
  Ns as ColorPrimaryBlue,
  Bs as ColorPrimaryDarkPink,
  Is as ColorPrimaryGreen,
  Rs as ColorPrimaryPurple,
  Fs as ColorPrimaryRed,
  Ts as ColorPrimaryWhite,
  Es as ColorPrimaryYellow,
  $s as ColorSecondaryAquaGreen,
  Ms as ColorSecondaryOrange,
  As as ColorSecondaryPaleYellow,
  Hs as ColorSecondaryPink,
  Ls as ColorSecondaryWarmYellow,
  Ld as ColorTextPrimary,
  Hd as ColorTextPrint,
  $d as ColorTextReverse,
  Md as ColorTextSecondary,
  Kt as Column,
  Ou as ComponentBlur,
  Lu as ComponentBreadcrumbChevronMarginLeft,
  Mu as ComponentBreadcrumbChevronMarginRight,
  Hu as ComponentBreadcrumbPaddingTopDesktop,
  $u as ComponentBreadcrumbPaddingTopMobile,
  Cu as ComponentButtonPaddingDesktopHorizontal,
  Su as ComponentButtonPaddingDesktopVertical,
  wu as ComponentButtonPaddingMobileHorizontal,
  ku as ComponentButtonPaddingMobileVertical,
  ju as ComponentButtonShadowSize,
  Fu as ComponentCardHeadingMargin,
  Bu as ComponentCardPaddingDesktop,
  Ru as ComponentCardPaddingMobile,
  Vu as ComponentDetails,
  Yu as ComponentExpander,
  Iu as ComponentFormCheckboxLabelPadding,
  Du as ComponentFormCheckboxSize,
  Nu as ComponentFormInputMinHeight,
  Tu as ComponentFormInputPadding,
  Gu as ComponentLink,
  qu as ComponentPagination,
  Au as ComponentPanelPaddingDesktop,
  Eu as ComponentPanelPaddingMobile,
  Uu as ComponentSpread,
  zu as ComponentSummaryListCellPaddingHorizontal,
  Pu as ComponentSummaryListCellPaddingVertical,
  Wu as ComponentSummaryListRowMargin,
  Ga as Container,
  gm as ContentsList,
  fo as DEFAULT_FONT_CONFIG,
  Nm as DashboardSummaryGrid,
  um as DateInput,
  gc as Details,
  bc as DoDontList,
  Zf as ElevationHigh,
  qf as ElevationLow,
  Kf as ElevationMedium,
  Yf as ElevationNone,
  oa as ErrorMessage,
  dm as ErrorSummary,
  xc as Expander,
  qe as FRUTIGER_FONT_FILES,
  zr as Fieldset,
  Uf as FocusOutlineOffset,
  Of as FocusOutlineStyle,
  Wf as FocusOutlineWidth,
  Vf as FocusShadowButton,
  Gf as FocusShadowInput,
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
  Bn as FontSize22Mobile,
  En as FontSize22Print,
  Fn as FontSize22Tablet,
  An as FontSize26Mobile,
  Mn as FontSize26Print,
  Ln as FontSize26Tablet,
  $n as FontSize36Mobile,
  Pn as FontSize36Print,
  Hn as FontSize36Tablet,
  zn as FontSize48Mobile,
  Un as FontSize48Print,
  Wn as FontSize48Tablet,
  Mr as FontSizeBase,
  _n as FontWeightBold,
  kn as FontWeightLight,
  vn as FontWeightNormal,
  Za as Footer,
  Uh as FormBorderRadius,
  zh as FormBorderWidthDefault,
  Wh as FormBorderWidthError,
  $h as FormErrorTextDefault,
  Hh as FormErrorTypographyWeight,
  Ph as FormHintTextDefault,
  Sh as FormInputBackgroundDefault,
  jh as FormInputBackgroundDisabled,
  Nh as FormInputBackgroundError,
  Ch as FormInputBackgroundFocus,
  Th as FormInputBorderDefault,
  Rh as FormInputBorderDisabled,
  Ih as FormInputBorderError,
  Dh as FormInputBorderFocus,
  Bh as FormInputTextDefault,
  Eh as FormInputTextDisabled,
  Fh as FormInputTextPlaceholder,
  Ah as FormLabelTextDefault,
  Lh as FormLabelTextRequired,
  Mh as FormLabelTypographyWeight,
  to as FormSpacingCheckboxLabelPadding,
  eo as FormSpacingCheckboxSize,
  Qs as FormSpacingInputMinHeight,
  Xs as FormSpacingInputPadding,
  mm as GanttChart,
  ur as Grid,
  yf as GridGutter,
  vf as GridGutterHalf,
  xf as GridPageWidth,
  Ka as Header,
  ei as HeaderSearch,
  xt as Heading,
  it as HeadingsNhsukHeadingL,
  lt as HeadingsNhsukHeadingM,
  ct as HeadingsNhsukHeadingS,
  ot as HeadingsNhsukHeadingXl,
  dt as HeadingsNhsukHeadingXs,
  ni as Hero,
  Ua as Hint,
  Cm as Images,
  Hr as Input,
  vm as InsetText,
  Pr as Label,
  ff as LayoutColumnActions,
  cf as LayoutColumnFull,
  df as LayoutColumnHalf,
  hf as LayoutColumnQuarter,
  uf as LayoutColumnThird,
  lf as LayoutContainerMaxWidth,
  Yo as List,
  Va as MainWrapper,
  fs as MedicationCard,
  zm as NHSBodyText,
  Wm as NHSBodyTextLarge,
  Um as NHSBodyTextSmall,
  Lm as NHSHeading1,
  Mm as NHSHeading2,
  $m as NHSHeading3,
  Hm as NHSHeading4,
  Pm as NHSHeading5,
  Om as NHSLedeText,
  Gm as NHSLedeTextSmall,
  fm as NHSThemeProvider,
  sp as NHS_FALLBACK_FONT_STACK,
  ap as NHS_FONT_STACK,
  fd as NavigationSplitView,
  Bm as PageTemplate,
  pm as Pagination,
  pc as Panel,
  ut as ParagraphsBody,
  ht as ParagraphsBodyLarge,
  ft as ParagraphsBodySmall,
  mt as ParagraphsLedeText,
  pt as ParagraphsLedeTextSmall,
  us as PatientCard,
  rm as Radios,
  am as RadiosServer,
  Im as ResponsiveDataGrid,
  Rm as ResponsiveDataGridDemo,
  Nt as Row,
  cn as Select,
  Uo as SelectOption,
  Lf as ShadowButtonDefault,
  Hf as ShadowButtonFocus,
  Mf as ShadowButtonSecondary,
  $f as ShadowButtonWarning,
  Pf as ShadowCardDefault,
  zf as ShadowCardHover,
  of as SizeButtonMinHeightDesktop,
  sf as SizeButtonMinHeightMobile,
  Jh as SizeFormControlLarge,
  Zh as SizeFormControlMedium,
  Kh as SizeFormControlSmall,
  rf as SizeFormInputWidth2xl,
  af as SizeFormInputWidth3xl,
  tf as SizeFormInputWidthLg,
  ef as SizeFormInputWidthMd,
  Qh as SizeFormInputWidthSm,
  nf as SizeFormInputWidthXl,
  Xh as SizeFormInputWidthXs,
  Yh as SizeIconExtraLarge,
  Vh as SizeIconLarge,
  Gh as SizeIconMedium,
  qh as SizeIconNhsDefault,
  Oh as SizeIconSmall,
  ls as SkipLink,
  jm as SlotMatrix,
  Tm as SortStatusControl,
  no as Spacing0,
  ro as Spacing1,
  ao as Spacing2,
  so as Spacing3,
  oo as Spacing4,
  io as Spacing5,
  lo as Spacing6,
  co as Spacing7,
  uo as Spacing8,
  ho as Spacing9,
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
  Br as SpacingResponsive7Tablet,
  Fr as SpacingResponsive8Mobile,
  Er as SpacingResponsive8Tablet,
  Ar as SpacingResponsive9Mobile,
  Lr as SpacingResponsive9Tablet,
  sm as SpacingUtilities,
  Ff as StateDisabledBackground,
  Ef as StateDisabledBorder,
  Af as StateDisabledText,
  _f as StateErrorBackground,
  kf as StateErrorBorder,
  wf as StateErrorText,
  If as StateInfoBackground,
  Rf as StateInfoBorder,
  Bf as StateInfoText,
  Sf as StateSuccessBackground,
  Cf as StateSuccessBorder,
  jf as StateSuccessText,
  Nf as StateWarningBackground,
  Tf as StateWarningBorder,
  Df as StateWarningText,
  Sc as SummaryCard,
  _m as SummaryList,
  km as Table,
  wm as Tabs,
  rt as Tag,
  yc as TaskList,
  zo as Textarea,
  Fm as TransactionalPageTemplate,
  _d as TransitionButtonDefault,
  kd as TransitionButtonShadow,
  Sd as TransitionCardHover,
  wd as TransitionInputFocus,
  ms as VitalsCard,
  cm as WIDTH_FRACTIONS,
  Sm as WarningCallout,
  ys as WidthContainer,
  im as WidthUtilities,
  op as checkFrutigerLoaded,
  Jr as createGenericTabsConfig,
  Dm as createTCHTabsConfig,
  np as generateFrutigerFontFace,
  Am as getResponsiveStyles,
  om as getSpacingClass,
  lm as getWidthClass,
  rp as preloadFrutigerFonts,
  Lc as tchDataConfig,
  Ym as useColors,
  Jm as useComponentSpacing,
  Xm as useNHSHeadings,
  Qm as useNHSParagraphs,
  hm as useNHSTheme,
  ep as useNHSTypographySystem,
  tp as useNavigationSplitDrill,
  dd as useNavigationSplitUrlSync,
  _s as useNhsFdpBreakpoints,
  Zm as useResponsiveSpacing,
  Em as useResponsiveValue,
  qm as useSpacing,
  Vm as useTokens,
  Km as useTypography
};
//# sourceMappingURL=index.esm.js.map
