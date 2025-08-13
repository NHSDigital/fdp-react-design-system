import * as Za from "react";
import be, { useState as re, useEffect as oe, useCallback as K, createElement as Br, useRef as se, useMemo as le, createContext as Ja, useContext as Xa, forwardRef as Xe, useImperativeHandle as Fr, useReducer as Rr } from "react";
function Qa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dt = { exports: {} }, et = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function es() {
  if (Xn) return et;
  Xn = 1;
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
  return et.Fragment = t, et.jsx = r, et.jsxs = r, et;
}
var tt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function ts() {
  return Qn || (Qn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === _ ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case b:
          return "Fragment";
        case N:
          return "Profiler";
        case S:
          return "StrictMode";
        case A:
          return "Suspense";
        case j:
          return "SuspenseList";
        case x:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case B:
            return "Portal";
          case F:
            return (T.displayName || "Context") + ".Provider";
          case D:
            return (T._context.displayName || "Context") + ".Consumer";
          case C:
            var q = T.render;
            return T = T.displayName, T || (T = q.displayName || q.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case E:
            return q = T.displayName || null, q !== null ? q : e(T.type) || "Memo";
          case y:
            q = T._payload, T = T._init;
            try {
              return e(T(q));
            } catch {
            }
        }
      return null;
    }
    function t(T) {
      return "" + T;
    }
    function r(T) {
      try {
        t(T);
        var q = !1;
      } catch {
        q = !0;
      }
      if (q) {
        q = console;
        var P = q.error, V = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return P.call(
          q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          V
        ), t(T);
      }
    }
    function a(T) {
      if (T === b) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === y)
        return "<...>";
      try {
        var q = e(T);
        return q ? "<" + q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var T = f.A;
      return T === null ? null : T.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(T) {
      if ($.call(T, "key")) {
        var q = Object.getOwnPropertyDescriptor(T, "key").get;
        if (q && q.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function l(T, q) {
      function P() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          q
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: P,
        configurable: !0
      });
    }
    function c() {
      var T = e(this.type);
      return U[T] || (U[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function h(T, q, P, V, O, R, d, m) {
      return P = R.ref, T = {
        $$typeof: v,
        type: T,
        key: q,
        props: R,
        _owner: O
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(T, "ref", { enumerable: !1, value: null }), T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(T, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(T, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: d
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: m
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function u(T, q, P, V, O, R, d, m) {
      var I = q.children;
      if (I !== void 0)
        if (V)
          if (Q(I)) {
            for (V = 0; V < I.length; V++)
              p(I[V]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(I);
      if ($.call(q, "key")) {
        I = e(T);
        var k = Object.keys(q).filter(function(L) {
          return L !== "key";
        });
        V = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", X[I + V] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          V,
          I,
          k,
          I
        ), X[I + V] = !0);
      }
      if (I = null, P !== void 0 && (r(P), I = "" + P), i(q) && (r(q.key), I = "" + q.key), "key" in q) {
        P = {};
        for (var M in q)
          M !== "key" && (P[M] = q[M]);
      } else P = q;
      return I && l(
        P,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), h(
        T,
        I,
        R,
        O,
        s(),
        P,
        d,
        m
      );
    }
    function p(T) {
      typeof T == "object" && T !== null && T.$$typeof === v && T._store && (T._store.validated = 1);
    }
    var g = be, v = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), F = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), f = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, Q = Array.isArray, Z = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(T) {
        return T();
      }
    };
    var H, U = {}, J = g.react_stack_bottom_frame.bind(
      g,
      o
    )(), ne = Z(a(o)), X = {};
    tt.Fragment = b, tt.jsx = function(T, q, P, V, O) {
      var R = 1e4 > f.recentlyCreatedOwnerStacks++;
      return u(
        T,
        q,
        P,
        !1,
        V,
        O,
        R ? Error("react-stack-top-frame") : J,
        R ? Z(a(T)) : ne
      );
    }, tt.jsxs = function(T, q, P, V, O) {
      var R = 1e4 > f.recentlyCreatedOwnerStacks++;
      return u(
        T,
        q,
        P,
        !0,
        V,
        O,
        R ? Error("react-stack-top-frame") : J,
        R ? Z(a(T)) : ne
      );
    };
  }()), tt;
}
var er;
function ns() {
  return er || (er = 1, process.env.NODE_ENV === "production" ? dt.exports = es() : dt.exports = ts()), dt.exports;
}
var n = ns(), Xt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var tr;
function rs() {
  return tr || (tr = 1, function(e) {
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
  }(Xt)), Xt.exports;
}
var as = rs();
const G = /* @__PURE__ */ Qa(as), ch = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...s
}) => {
  const o = G(
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
}, Ln = ({
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
        children: /* @__PURE__ */ n.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, l = o.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text, c = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i,
      l
    ] });
    return o.href ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-account__link", href: o.href, children: c }) : o.action ? /* @__PURE__ */ n.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: o.action,
        method: o.method || "post",
        children: /* @__PURE__ */ n.jsx(
          "button",
          {
            className: "nhsuk-account__button",
            type: "submit",
            role: "button",
            children: c
          }
        )
      }
    ) : /* @__PURE__ */ n.jsx("span", { children: c });
  };
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: G(
        "nhsuk-account",
        {
          "nhsuk-account--white": a === "white"
        },
        r
      ),
      "aria-label": e,
      children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-account__list", children: t.map((o, i) => o && /* @__PURE__ */ n.jsx(
        "li",
        {
          className: G("nhsuk-account__item", o.className),
          children: s(o)
        },
        i
      )) })
    }
  );
}, { forwardRef: ss, useCallback: He, useState: Qt } = Za;
function os(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: s = "default",
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [h, u] = Qt(!1), [p, g] = Qt(!1), [v, B] = Qt(!1), b = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    s !== "default" ? `nhs-aria-button--${s}` : "",
    o ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), S = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", N = {
    ...h && { "data-pressed": "true" },
    ...p && { "data-hovered": "true" },
    ...v && { "data-focused": "true" },
    ...S && { "data-disabled": "true" }
  }, D = He(() => !S && u(!0), [S]), F = He(() => u(!1), []), C = He(() => !S && g(!0), [S]), A = He(() => {
    g(!1), u(!1);
  }, []), j = He(() => B(!0), []), E = He(() => B(!1), []), y = He((f) => {
    f.key === " " && ("href" in c || f.currentTarget.getAttribute("role") === "button") && (f.preventDefault(), f.currentTarget.click());
  }, [c]), x = He((f) => {
    if (l) {
      const $ = f.currentTarget;
      if ($.getAttribute("data-processing") === "true") {
        f.preventDefault();
        return;
      }
      $.setAttribute("data-processing", "true"), setTimeout(() => {
        $.removeAttribute("data-processing");
      }, 1e3);
    }
  }, [l]);
  if ("href" in c && c.href) {
    const f = c;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: f.href,
        target: f.target,
        rel: f.rel,
        className: b,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...N,
        ...l && { "data-prevent-double-click": "true" },
        onKeyDown: ($) => {
          f.onKeyDown?.($), y($);
        },
        onClick: ($) => {
          f.onClick?.($), x($);
        },
        onMouseDown: ($) => {
          f.onMouseDown?.($), D();
        },
        onMouseUp: ($) => {
          f.onMouseUp?.($), F();
        },
        onMouseEnter: ($) => {
          f.onMouseEnter?.($), C();
        },
        onMouseLeave: ($) => {
          f.onMouseLeave?.($), A();
        },
        onFocus: ($) => {
          f.onFocus?.($), j();
        },
        onBlur: ($) => {
          f.onBlur?.($), E();
        },
        "aria-disabled": f["aria-disabled"],
        ...f["aria-disabled"] === "true" && { tabIndex: -1 },
        id: f.id,
        style: f.style,
        title: f.title,
        "aria-label": f["aria-label"],
        "aria-describedby": f["aria-describedby"],
        "aria-labelledby": f["aria-labelledby"],
        tabIndex: f.tabIndex,
        children: r
      }
    );
  }
  const _ = c;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: _.type || "button",
      disabled: _.disabled,
      className: b,
      "data-module": "nhs-button",
      ...N,
      ...l && { "data-prevent-double-click": "true" },
      ..._.disabled && { "aria-disabled": "true" },
      onKeyDown: (f) => {
        _.onKeyDown?.(f), y(f);
      },
      onClick: (f) => {
        _.onClick?.(f), x(f);
      },
      onMouseDown: (f) => {
        _.onMouseDown?.(f), D();
      },
      onMouseUp: (f) => {
        _.onMouseUp?.(f), F();
      },
      onMouseEnter: (f) => {
        _.onMouseEnter?.(f), C();
      },
      onMouseLeave: (f) => {
        _.onMouseLeave?.(f), A();
      },
      onFocus: (f) => {
        _.onFocus?.(f), j();
      },
      onBlur: (f) => {
        _.onBlur?.(f), E();
      },
      id: _.id,
      style: _.style,
      title: _.title,
      "aria-label": _["aria-label"],
      "aria-describedby": _["aria-describedby"],
      "aria-labelledby": _["aria-labelledby"],
      tabIndex: _.tabIndex,
      name: _.name,
      value: _.value,
      form: _.form,
      formAction: _.formAction,
      formEncType: _.formEncType,
      formMethod: _.formMethod,
      formNoValidate: _.formNoValidate,
      formTarget: _.formTarget,
      autoFocus: _.autoFocus,
      children: r
    }
  );
}
const me = ss(os);
me.displayName = "Button";
const is = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = G(
    "nhsuk-back-link",
    a
  ), c = G(
    "nhsuk-back-link__link"
  ), h = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
      className: c,
      onClick: o,
      type: "button",
      ...i,
      children: h()
    }
  ) : /* @__PURE__ */ n.jsx(
    "a",
    {
      className: c,
      href: r,
      ...i,
      children: h()
    }
  ) });
}, Me = ({
  text: e,
  html: t,
  children: r,
  color: a = "default",
  noBorder: s = !1,
  closable: o = !1,
  onClose: i,
  disabled: l = !1,
  className: c,
  ...h
}) => {
  const u = G(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": s,
      "nhsuk-tag--closable": o,
      "nhsuk-tag--disabled": l
    },
    c
  ), p = (g) => {
    g.preventDefault(), g.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: u, ...h, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    o && /* @__PURE__ */ n.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: p,
        disabled: l,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
}, ls = ({
  id: e,
  name: t,
  checked: r,
  defaultChecked: a = !1,
  disabled: s = !1,
  value: o = "true",
  hint: i,
  errorMessage: l,
  className: c,
  children: h,
  onChange: u,
  onBlur: p,
  onFocus: g,
  attributes: v,
  ...B
}) => {
  const [b, S] = re(a), N = r !== void 0, D = N ? r : b;
  oe(() => {
    N || S(a);
  }, [a, N]);
  const F = (y) => {
    const x = y.target.checked;
    N || S(x), u?.(x, y);
  }, C = i ? `${e}-hint` : void 0, A = l ? `${e}-error` : void 0, j = [C, A].filter(Boolean).join(" ") || void 0, E = G(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ n.jsx("div", { className: E, ...B, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: D,
        disabled: s,
        onChange: F,
        onBlur: p,
        onFocus: g,
        "aria-describedby": j,
        ...v
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: h }),
    i && /* @__PURE__ */ n.jsx("div", { id: C, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: A, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
ls.displayName = "Checkbox";
const $n = ({
  id: e,
  name: t,
  type: r = "text",
  value: a,
  defaultValue: s,
  placeholder: o,
  disabled: i = !1,
  readOnly: l = !1,
  required: c = !1,
  hasError: h = !1,
  describedBy: u,
  className: p,
  width: g = "full",
  inputMode: v,
  autoComplete: B,
  maxLength: b,
  minLength: S,
  pattern: N,
  step: D,
  min: F,
  max: C,
  showValueLabels: A = !1,
  showCurrentValue: j = !1,
  valueLabels: E,
  onChange: y,
  onBlur: x,
  onFocus: _,
  onKeyDown: f,
  ...$
}) => {
  const [Q, Z] = re(a || s || (r === "range" ? F || "0" : ""));
  oe(() => {
    a !== void 0 && Z(a);
  }, [a]);
  const H = (X) => {
    Z(X.target.value), y?.(X);
  }, U = r === "range", J = G(
    "nhsuk-input",
    {
      "nhsuk-input--error": h,
      "nhsuk-input--range": U,
      [`nhsuk-input--width-${g}`]: g !== "full" && !U
    },
    p
  ), ne = U ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    A && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: E?.min || F || "0" }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: J,
          id: e,
          name: t,
          type: r,
          value: Q,
          defaultValue: s,
          placeholder: o,
          disabled: i,
          readOnly: l,
          required: c,
          "aria-describedby": u,
          inputMode: v,
          autoComplete: B,
          maxLength: b,
          minLength: S,
          pattern: N,
          step: D,
          min: F,
          max: C,
          onChange: H,
          onBlur: x,
          onFocus: _,
          onKeyDown: f,
          ...$
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: E?.max || C || "100" })
    ] }),
    !A && /* @__PURE__ */ n.jsx(
      "input",
      {
        className: J,
        id: e,
        name: t,
        type: r,
        value: Q,
        defaultValue: s,
        placeholder: o,
        disabled: i,
        readOnly: l,
        required: c,
        "aria-describedby": u,
        inputMode: v,
        autoComplete: B,
        maxLength: b,
        minLength: S,
        pattern: N,
        step: D,
        min: F,
        max: C,
        onChange: H,
        onBlur: x,
        onFocus: _,
        onKeyDown: f,
        ...$
      }
    ),
    j && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      E?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: Q })
    ] }) })
  ] }) : null;
  return U ? ne : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: J,
      id: e,
      name: t,
      type: r,
      value: a,
      defaultValue: s,
      placeholder: o,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": u,
      inputMode: v,
      autoComplete: B,
      maxLength: b,
      minLength: S,
      pattern: N,
      step: D,
      min: F,
      max: C,
      onChange: y,
      onBlur: x,
      onFocus: _,
      onKeyDown: f,
      ...$
    }
  );
}, An = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = G(
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
      ...o,
      children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s
    }
  );
}, Hn = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...s
}) => {
  const o = G(
    "nhsuk-fieldset",
    r
  ), i = G(
    "nhsuk-fieldset__legend",
    {
      [`nhsuk-fieldset__legend--${t?.size}`]: t?.size
    },
    t?.className
  ), l = () => {
    const c = t?.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return t?.isPageHeading ? /* @__PURE__ */ n.jsx("h1", { className: "nhsuk-fieldset__heading", children: c }) : c;
  };
  return /* @__PURE__ */ n.jsxs(
    "fieldset",
    {
      className: o,
      "aria-describedby": a,
      ...s,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ n.jsx("legend", { className: i, children: l() }),
        e
      ]
    }
  );
}, cs = ({
  items: e,
  name: t,
  idPrefix: r,
  legend: a,
  isPageHeading: s = !1,
  legendSize: o = "l",
  hint: i,
  errorMessage: l,
  className: c = "",
  small: h = !1,
  onChange: u,
  fieldsetAttributes: p,
  attributes: g,
  ...v
}) => {
  const [B, b] = re(
    e.filter((y) => y.checked).map((y) => y.value)
  ), S = r || t, N = i ? `${S}-hint` : void 0, D = l ? `${S}-error` : void 0, F = [N, D].filter(Boolean).join(" ") || void 0, C = (y, x) => {
    let _;
    x ? _ = [...B, y] : _ = B.filter((f) => f !== y), b(_), u?.(_);
  }, A = () => e.map((y, x) => {
    const _ = `${S}-${x + 1}`, f = `${_}-conditional`, $ = B.includes(y.value), Q = y.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: _,
          name: t,
          type: "checkbox",
          value: y.value,
          checked: $,
          disabled: Q,
          onChange: (Z) => C(y.value, Z.target.checked),
          "aria-describedby": y.hint ? `${_}-hint` : F,
          ...y.conditional && {
            "aria-controls": f,
            "aria-expanded": $ ? "true" : "false"
          },
          ...y.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: _, children: y.text }),
      y.hint && /* @__PURE__ */ n.jsx("div", { id: `${_}-hint`, className: "nhsuk-checkboxes__hint", children: y.hint }),
      y.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: G("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !$
          }),
          id: f,
          children: typeof y.conditional == "object" && y.conditional !== null && "label" in y.conditional && "id" in y.conditional && "name" in y.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            y.conditional.label && /* @__PURE__ */ n.jsx(An, { htmlFor: y.conditional.id, children: y.conditional.label }),
            /* @__PURE__ */ n.jsx($n, { ...y.conditional })
          ] }) : y.conditional
        }
      )
    ] }, y.value);
  }), j = G(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": h
    },
    c
  ), E = G("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: E, ...g, ...v, children: /* @__PURE__ */ n.jsxs(
    Hn,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: F,
      ...p,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: N, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: D, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: j, children: A() })
      ]
    }
  ) });
};
cs.displayName = "Checkboxes";
const ds = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  placeholder: s,
  disabled: o = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: c = !1,
  describedBy: h,
  className: u,
  rows: p = 5,
  cols: g,
  maxLength: v,
  minLength: B,
  wrap: b = "soft",
  resize: S = "vertical",
  autoComplete: N,
  spellCheck: D,
  onChange: F,
  onBlur: C,
  onFocus: A,
  onKeyDown: j,
  ...E
}) => {
  const y = G(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": c,
      [`nhsuk-textarea--resize-${S}`]: S !== "vertical"
    },
    u
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: y,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": h,
      rows: p,
      cols: g,
      maxLength: v,
      minLength: B,
      wrap: b,
      autoComplete: N,
      spellCheck: D,
      onChange: F,
      onBlur: C,
      onFocus: A,
      onKeyDown: j,
      ...E
    }
  );
}, Ir = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const s = G("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: s, id: e, ...a, children: r });
}, dh = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: a = 75,
  name: s,
  value: o = "",
  rows: i,
  className: l,
  countMessage: c,
  onCountChange: h,
  onChange: u,
  ...p
}) => {
  const [g, v] = re(o), [B, b] = re(0), [S, N] = re(!1), [D, F] = re(!1), C = K((_) => r ? _.trim() === "" ? 0 : _.trim().split(/\s+/).length : _.length, [r]);
  oe(() => {
    const _ = C(g), f = t || r || 0, $ = f - _, Q = Math.floor(f * (a / 100));
    b($), N(_ > f), F(_ >= Q || _ > f), h && h(_, $);
  }, [g, t, r, a, C, h]);
  const A = (_) => {
    const f = _.target.value;
    v(f), u && u(_);
  }, j = () => {
    const _ = t || r || 0, f = r ? "word" : "character", $ = r ? "words" : "characters";
    if (!D)
      return `You can enter up to ${_} ${_ === 1 ? f : $}`;
    if (S) {
      const Q = Math.abs(B);
      return `You have ${Q} ${Q === 1 ? f : $} too many`;
    } else
      return `You have ${B} ${B === 1 ? f : $} remaining`;
  }, E = G(
    "nhsuk-character-count",
    l
  ), y = G(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !D,
      "nhsuk-error-message": S
    },
    c?.classes
  ), x = G(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": S
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: E,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          ds,
          {
            id: e,
            name: s,
            value: g,
            rows: i,
            className: x,
            onChange: A,
            "aria-describedby": `${e}-info`,
            ...p
          }
        ),
        /* @__PURE__ */ n.jsx(
          Ir,
          {
            id: `${e}-info`,
            className: y,
            children: j()
          }
        )
      ]
    }
  );
}, us = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  className: a,
  children: s,
  ...o
}) => {
  const i = G(
    "nhsuk-select__option",
    a
  );
  return /* @__PURE__ */ n.jsx(
    "option",
    {
      className: i,
      value: e,
      disabled: t,
      selected: r,
      ...o,
      children: s
    }
  );
}, hs = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  disabled: s = !1,
  required: o = !1,
  hasError: i = !1,
  describedBy: l,
  className: c,
  multiple: h = !1,
  size: u,
  autoComplete: p,
  options: g,
  children: v,
  onChange: B,
  onBlur: b,
  onFocus: S,
  ...N
}) => {
  const D = G(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    c
  ), F = () => g ? g.map((C, A) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: C.value,
      disabled: C.disabled,
      selected: C.selected,
      children: C.text
    },
    `${C.value}-${A}`
  )) : null;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: D,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      disabled: s,
      required: o,
      "aria-describedby": l,
      multiple: h,
      size: u,
      autoComplete: p,
      onChange: B,
      onBlur: b,
      onFocus: S,
      ...N,
      children: v || F()
    }
  );
}, fs = hs;
fs.Option = us;
const uh = ({
  name: e,
  value: t,
  defaultValue: r,
  hasError: a = !1,
  describedBy: s,
  className: o,
  size: i = "normal",
  inline: l = !1,
  options: c,
  onChange: h,
  onBlur: u,
  onFocus: p,
  ...g
}) => {
  const [v, B] = re(t || r || ""), b = G(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    o
  ), S = (N) => {
    const D = N.target.value;
    B(D), h && h(N);
  };
  return /* @__PURE__ */ n.jsx(Hn, { children: /* @__PURE__ */ n.jsx("div", { className: b, ...g, children: c.map((N, D) => {
    const F = `${e}-${D}`, C = N.conditional ? `${F}-conditional` : void 0, A = v === N.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: F,
          name: e,
          type: "radio",
          value: N.value,
          disabled: N.disabled,
          checked: A,
          "aria-describedby": s,
          onChange: S,
          onBlur: u,
          onFocus: p
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: F, children: N.text }),
      N.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: N.hint }),
      N.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: G("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !A
          }),
          id: C,
          children: typeof N.conditional == "object" && N.conditional !== null && "label" in N.conditional && "id" in N.conditional && "name" in N.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            N.conditional.label && /* @__PURE__ */ n.jsx(An, { htmlFor: N.conditional.id, children: N.conditional.label }),
            /* @__PURE__ */ n.jsx($n, { ...N.conditional })
          ] }) : N.conditional
        }
      )
    ] }, N.value);
  }) }) });
}, Mr = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...s
}) => {
  const o = G(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), i = a ? { maxWidth: a } : void 0;
  return /* @__PURE__ */ n.jsx("div", { className: o, style: i, ...s, children: e });
}, pt = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = G("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: e });
}, Pn = ({
  children: e,
  width: t = "full",
  mobileWidth: r,
  tabletWidth: a,
  desktopWidth: s,
  start: o,
  className: i,
  forceWidth: l = !1,
  ...c
}) => {
  const h = G(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !l,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: l,
      // Responsive width overrides
      [`nhsuk-u-${r}-mobile`]: r,
      [`nhsuk-u-${a}-tablet`]: a,
      [`nhsuk-u-${s}-desktop`]: s,
      // Grid positioning
      [`nhsuk-grid-column-start-${o}`]: o && o >= 1 && o <= 7
    },
    i
  );
  return /* @__PURE__ */ n.jsx("div", { className: h, ...c, children: e });
}, ms = ({
  children: e,
  className: t,
  ...r
}) => {
  const s = be.Children.toArray(e)[0], o = be.isValidElement(s) && (s.type === pt || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Mr, { className: t, ...r, children: o ? e : /* @__PURE__ */ n.jsx(pt, { children: e }) });
}, ps = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: s,
  role: o,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), h = G(
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
  return /* @__PURE__ */ n.jsx(c, { className: h, role: o, ...l, children: e });
}, gs = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = G("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, bs = ps;
bs.Item = gs;
const hh = ({
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
}, fh = {
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
}, mh = ({
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
}, ph = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, gh = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Er = ({
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
}, Ee = ({
  level: e,
  className: t,
  text: r,
  html: a,
  children: s,
  size: o,
  marginBottom: i,
  ...l
}) => {
  const h = e ?? ((B) => {
    switch (B) {
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
  })(o), u = G(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${o}`]: o
    },
    t
  ), p = s || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), g = `h${h}`, v = i ? { ...l.style, marginBottom: i } : l.style;
  return Br(
    g,
    { className: u, ...l, style: v },
    p
  );
}, nr = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...s
}) => {
  const o = G("nhsuk-error-message", t);
  return /* @__PURE__ */ n.jsxs("span", { className: o, id: e, ...s, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      r,
      " "
    ] }),
    a
  ] });
}, bh = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: s,
  className: o,
  children: i,
  ...l
}) => {
  const c = se(null);
  oe(() => {
    c.current && c.current.focus();
  }, []);
  const h = G(
    "nhsuk-error-summary",
    o
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, p = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, g = (v) => {
    const B = v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text;
    return v.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: v.href,
        ...v.attributes,
        children: B
      }
    ) : B;
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: c,
      className: h,
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      "data-module": "nhsuk-error-summary",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: u() }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ n.jsx("p", { children: i }),
          !i && (r || a) && /* @__PURE__ */ n.jsx("p", { children: p() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((v, B) => /* @__PURE__ */ n.jsx("li", { children: g(v) }, B)) })
        ] })
      ]
    }
  );
}, xh = ({
  id: e,
  className: t,
  items: r,
  namePrefix: a,
  values: s = {},
  fieldset: o,
  hint: i,
  errorMessage: l,
  onChange: c,
  ...h
}) => {
  const [u, p] = re(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [g, v] = re({}), B = (H) => H % 4 === 0 && H % 100 !== 0 || H % 400 === 0, b = (H, U) => {
    const J = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return H === 2 && B(U) ? 29 : J[H - 1];
  }, S = (H, U, J) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Day must be a number";
    const ne = parseInt(H, 10);
    if (ne < 1 || ne > 31) return "Day must be between 1 and 31";
    if (U && J) {
      const X = parseInt(U, 10), T = parseInt(J, 10);
      if (!isNaN(X) && !isNaN(T) && X >= 1 && X <= 12) {
        const q = b(X, T);
        if (ne > q)
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
          ][X - 1]} ${T} only has ${q} days`;
      }
    }
  }, N = (H) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Month must be a number";
    const U = parseInt(H, 10);
    if (U < 1 || U > 12) return "Month must be between 1 and 12";
  }, D = (H) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Year must be a number";
    const U = parseInt(H, 10), J = (/* @__PURE__ */ new Date()).getFullYear();
    if (U < 1900 || U > J + 10)
      return `Year must be between 1900 and ${J + 10}`;
  }, F = (H, U, J) => {
    if (!H || !U || !J) return;
    const ne = parseInt(H, 10), X = parseInt(U, 10), T = parseInt(J, 10);
    if (isNaN(ne) || isNaN(X) || isNaN(T) || X < 1 || X > 12 || T < 1900) return;
    const q = b(X, T);
    ne < 1 || ne > q;
  }, C = K((H, U) => {
    const J = {
      ...u,
      [H]: U
    };
    p(J), c && c(J);
  }, [u, c]), A = K((H) => {
    const U = u[H];
    let J;
    if (H === "day")
      J = S(U, u.month, u.year);
    else if (H === "month") {
      if (J = N(U), !J && u.day) {
        const ne = S(u.day, U, u.year);
        v((X) => ({
          ...X,
          day: ne
        }));
      }
    } else if (H === "year" && (J = D(U), !J && u.day && u.month)) {
      const ne = S(u.day, u.month, U);
      v((X) => ({
        ...X,
        day: ne
      }));
    }
    if (v((ne) => ({
      ...ne,
      [H]: J
    })), u.day && u.month && u.year) {
      const ne = F(
        H === "day" ? U : u.day,
        H === "month" ? U : u.month,
        H === "year" ? U : u.year
      );
      ne && v((X) => ({
        ...X,
        day: ne
      }));
    }
  }, [u, S, N, D, F]), j = le(() => [
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
  ], []), E = r || j;
  let y = o?.describedBy || "";
  const x = i ? `${e}-hint` : "", _ = l ? `${e}-error` : "";
  x && (y = y ? `${y} ${x}` : x), _ && (y = y ? `${y} ${_}` : _);
  const f = Object.values(g).some((H) => H), $ = G(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || f
    }
  ), Q = G(
    "nhsuk-date-input",
    t
  ), Z = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Ir,
      {
        id: x,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      nr,
      {
        id: _,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(g).map(
      ([H, U]) => U ? /* @__PURE__ */ n.jsxs(
        nr,
        {
          id: `${e}-${H}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            U
          ]
        },
        `${H}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: Q, id: e, "data-testid": "date-input", ...h, children: E.map((H) => {
      const U = H.id || `${e}-${H.name}`, J = a ? `${a}[${H.name}]` : H.name, ne = H.label || H.name.charAt(0).toUpperCase() + H.name.slice(1), X = g[H.name], T = u[H.name] || "";
      let q = y;
      if (X) {
        const P = `${e}-${H.name}-error`;
        q = q ? `${q} ${P}` : P;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          An,
          {
            htmlFor: U,
            className: "nhsuk-date-input__label",
            children: ne
          }
        ),
        /* @__PURE__ */ n.jsx(
          $n,
          {
            id: U,
            name: J,
            value: T,
            className: G("nhsuk-date-input__input", H.classes, {
              "nhsuk-input--error": X
            }),
            inputMode: H.inputmode,
            autoComplete: H.autocomplete,
            pattern: H.pattern,
            "aria-describedby": q || void 0,
            hasError: !!X,
            onChange: (P) => C(H.name, P.target.value),
            onBlur: () => A(H.name)
          }
        )
      ] }, H.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: $, children: o ? /* @__PURE__ */ n.jsx(
    Hn,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: y || void 0,
      children: Z()
    }
  ) : Z() });
}, Lr = {
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
}, $r = Ja(Lr), xs = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Lr, ...t };
  return /* @__PURE__ */ n.jsx($r.Provider, { value: r, children: e });
}, yh = () => {
  const e = Xa($r);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function ys() {
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
function _s() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = ys(), document.head.appendChild(e);
}
const _h = ({ children: e, theme: t }) => (oe(() => {
  _s();
}, []), /* @__PURE__ */ n.jsx(xs, { theme: t, children: e })), Ar = ({
  mode: e = "form",
  action: t = "https://www.nhs.uk/search/",
  method: r = "get",
  name: a = "q",
  value: s,
  placeholder: o = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: c,
  disabled: h = !1,
  callbacks: u = {},
  isLoading: p = !1,
  showResults: g = !1,
  results: v = [],
  formAttributes: B = {},
  inputAttributes: b = {},
  buttonAttributes: S = {},
  preventDefaultSubmit: N = !1,
  debounceMs: D = 300,
  minQueryLength: F = 1
}) => {
  const [C, A] = re(""), [j, E] = re(!1), y = se(void 0), x = se(null), _ = se(null), f = e === "controlled" && s !== void 0, $ = f ? s : C, Q = K((V) => {
    y.current && clearTimeout(y.current), y.current = setTimeout(() => {
      u.onChange && V.length >= F && u.onChange(V);
    }, D);
  }, [u.onChange, D, F]), Z = K((V) => {
    const O = V.target.value;
    f || A(O), e !== "form" && Q(O);
  }, [f, e, Q]), H = K((V) => {
    const O = $.trim(), R = {
      query: O,
      timestamp: Date.now(),
      formData: new FormData(V.currentTarget)
    };
    e === "controlled" || e === "hybrid" && N ? (V.preventDefault(), u.onSearch && O.length >= F && u.onSearch(R)) : e === "hybrid" && u.onSearch && O.length >= F && u.onSearch(R);
  }, [e, $, u.onSearch, N, F]), U = K(() => {
    E(!0), u.onFocus?.();
  }, [u.onFocus]), J = K(() => {
    E(!1), u.onBlur?.();
  }, [u.onBlur]), ne = K(() => {
    f || A(""), u.onClear?.(), _.current?.focus();
  }, [f, u.onClear]);
  oe(() => () => {
    y.current && clearTimeout(y.current);
  }, []);
  const X = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: G("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": p
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), T = () => /* @__PURE__ */ n.jsx(
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
  ), q = () => !$ || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ne,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), P = () => !g || !v.length || !j ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: v.map((V) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: V.href ? /* @__PURE__ */ n.jsxs("a", { href: V.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: V.title }),
    V.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: V.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => u.onSearch?.({ query: V.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: V.title }),
        V.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: V.description })
      ]
    }
  ) }, V.id)) });
  return /* @__PURE__ */ n.jsxs("search", { className: G("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": p,
    "nhsuk-header__search--focused": j,
    "nhsuk-header__search--has-results": g && v.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: x,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        onSubmit: H,
        ...B,
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
                ref: _,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: o,
                autoComplete: "off",
                value: $,
                onChange: Z,
                onFocus: U,
                onBlur: J,
                disabled: h || p,
                "aria-expanded": g && v.length > 0,
                "aria-haspopup": "listbox",
                ...b
              }
            ),
            q()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: h || p || e !== "form" && $.length < F,
              ...S,
              children: [
                p ? T() : X(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: p ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    P()
  ] });
}, Hr = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: h = {},
  ...u
}) => {
  const [p, g] = re(!1), [v, B] = re(!1), [b, S] = re(i?.items?.length || 0), [N, D] = re(!1), [F, C] = re(!1), [A, j] = re(!1), E = se(null), y = se(null), x = se(!1), _ = se(null), f = se([]), $ = se(null);
  oe(() => {
    typeof window > "u" || (j(!0), D(!0));
  }, []), oe(() => {
    if (!A || !i?.items?.length) return;
    f.current = i.items;
    const d = setTimeout(() => {
      E.current && y.current && ne();
    }, 100);
    return () => clearTimeout(d);
  }, [A, i?.items]);
  const Q = r.href && !t.href || r.href && r.href === t.href, Z = Q ? r.href : t.href, H = G(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), U = G(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), J = G(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), ne = K(() => {
    if (!(typeof window > "u" || x.current) && !(!E.current || !y.current || !f.current.length)) {
      x.current = !0;
      try {
        const d = y.current, m = E.current, I = d.offsetWidth, k = m.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (k.length === 0 || I === 0) {
          x.current = !1;
          return;
        }
        const M = window.innerWidth < 768, L = M ? 16 : 32, w = L * 2, Y = I - w, W = Array.from(k).map((ce) => ce.offsetWidth), te = W.reduce((ce, ie) => ce + ie, 0), z = M ? 80 : 100, ee = $.current !== null && $.current !== M;
        if ($.current = M, console.log("Overflow check:", {
          containerWidth: I,
          availableContainerWidth: Y,
          totalGutters: w,
          gutterSize: L,
          totalWidth: te,
          mobile: M,
          breakpointChanged: ee,
          itemCount: W.length,
          measurements: W
        }), te <= Y)
          B(!1), S(f.current.length);
        else {
          const ce = Y - z;
          let ie = 0, ge = 0;
          for (let Ae = 0; Ae < W.length; Ae++) {
            const ke = ge + W[Ae];
            if (ke <= ce)
              ge = ke, ie = Ae + 1;
            else
              break;
          }
          ie = Math.max(1, ie);
          const _e = ie < W.length;
          B(_e), S(ie);
        }
        x.current = !1;
      } catch (d) {
        console.error("Overflow detection error:", d), B(!1), S(f.current.length), x.current = !1;
      }
    }
  }, []);
  oe(() => {
    if (typeof document > "u") return;
    const d = (m) => {
      m.key === "Escape" && p && g(!1);
    };
    if (p)
      return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [p]), oe(() => {
    if (typeof window > "u" || !A) return;
    const d = () => {
      p && (g(!1), C(!1)), _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        f.current.length > 0 && ne();
      }, 250);
    };
    let m = null, I = null;
    return window.matchMedia && (m = window.matchMedia("(max-width: 767px)"), I = () => {
      console.log("Breakpoint changed:", m?.matches ? "mobile" : "desktop"), f.current.length > 0 && setTimeout(() => ne(), 50);
    }, m.addEventListener ? m.addEventListener("change", I) : m.addListener(I)), window.addEventListener("resize", d), () => {
      window.removeEventListener("resize", d), m && I && (m.removeEventListener ? m.removeEventListener("change", I) : m.removeListener(I)), _.current && clearTimeout(_.current);
    };
  }, [A, p, ne]), oe(() => {
    if (typeof document > "u") return;
    const d = (m) => {
      const I = m.target, k = E.current?.contains(I);
      p && !k && g(!1);
    };
    if (p)
      return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, [p]);
  const X = (d) => {
    d && (d.preventDefault(), d.stopPropagation());
    const m = !p;
    g(m), m ? setTimeout(() => {
      C(!0);
    }, 50) : C(!1);
  }, T = () => /* @__PURE__ */ n.jsxs(
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
      alt: t.ariaLabel || "NHS"
    }
  ) : T(), P = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, V = (d, m) => d ? m ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: m, children: d }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: d }) : null, O = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), R = (d) => {
    if (d.active || d.current) {
      const m = d.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: d.html } }) : d.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: m });
    }
    return d.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: d.html } }) : d.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: H,
      role: "banner",
      "data-module": "nhsuk-header",
      ...h,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: U, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            Z ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: Z, children: [
              q(),
              P(),
              Q && V(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              q(),
              P(),
              Q && V(r.text)
            ] }),
            r.text && !Q && V(r.text, r.href)
          ] }),
          s && /* @__PURE__ */ n.jsx(Ar, { ...s }),
          /* @__PURE__ */ n.jsx(
            Ln,
            {
              ...o,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: J,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: G(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !N && A,
                    "nhsuk-header__navigation-container--ssr": !A
                  },
                  l
                ),
                ref: y,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: E, children: [
                  (A ? i.items.slice(0, b) : i.items).map((d, m) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: G(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": d.active || d.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !A && m >= 4
                          // Mark items that would be hidden on client
                        },
                        d.className
                      ),
                      ...d.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: d.href,
                          ...d.active || d.current ? {
                            "aria-current": d.current ? "page" : "true"
                          } : {},
                          children: R(d)
                        }
                      )
                    },
                    m
                  )),
                  A && v && b < i.items.length && /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ n.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: X,
                          type: "button",
                          children: [
                            /* @__PURE__ */ n.jsx("span", { children: "More" }),
                            O()
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
        A && i && i.items && i.items.length > 0 && p && F && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !F,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(b).map((d, m) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: G(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": d.active || d.current
                  }
                ),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: d.href,
                    ...d.active || d.current ? {
                      "aria-current": d.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      g(!1), C(!1);
                    },
                    children: R(d)
                  }
                )
              },
              `overflow-${b + m}`
            )) })
          }
        )
      ]
    }
  );
}, kh = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: h = {},
  ...u
}) => {
  const p = r.href && !t.href || r.href && r.href === t.href, g = p ? r.href : t.href, v = G(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), B = G(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), b = G(
    "nhsuk-header__navigation",
    i?.className
  ), S = () => /* @__PURE__ */ n.jsxs(
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
  ), N = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : S(), D = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, F = (j, E) => j ? E ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: E, children: j }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: j }) : null, C = () => !i?.items || i.items.length === 0 ? null : i.items.map((j, E) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: j.href,
          ...j.attributes || {},
          children: j.text
        }
      )
    },
    j.href || E
  )), A = () => s ? /* @__PURE__ */ n.jsx(Ar, { ...s }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: v,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...h,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: B, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            g ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: g, children: [
              N(),
              D(),
              p && F(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              N(),
              D(),
              p && F(r.text)
            ] }),
            r.text && !p && F(r.text, r.href)
          ] }),
          (c === "organisation" || a) && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            a && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name", children: a.name }),
              a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: a.descriptor })
            ] }),
            A()
          ] }),
          c !== "organisation" && !a && A(),
          /* @__PURE__ */ n.jsx(
            Ln,
            {
              ...o,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: b,
            id: "header-navigation",
            role: "navigation",
            "aria-label": i.ariaLabel || "Primary navigation",
            "data-navigation-enhanced": "false",
            children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-header__navigation-list",
                "data-navigation-list": "true",
                children: C()
              }
            ) })
          }
        )
      ]
    }
  );
}, vh = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: h = {},
  maxVisibleItems: u = 5,
  // New prop to control CSS-based overflow
  ...p
}) => {
  const g = r.href && !t.href || r.href && r.href === t.href, v = g ? r.href : t.href, B = G(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), b = G(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), S = G(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), N = () => /* @__PURE__ */ n.jsxs(
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
  ), D = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : N(), F = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, C = (j, E) => j ? E ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: E, children: j }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: j }) : null, A = (j) => {
    if (j.active || j.current) {
      const E = j.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: j.html } }) : j.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: E });
    }
    return j.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: j.html } }) : j.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: B,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...h,
      ...p,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: b, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            v ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: v, children: [
              D(),
              F(),
              g && C(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              D(),
              F(),
              g && C(r.text)
            ] }),
            r.text && !g && C(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            Ln,
            {
              ...o,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: S,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: G(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, u).map((j, E) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: G(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": j.active || j.current
                        },
                        j.className
                      ),
                      ...j.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: j.href,
                          ...j.active || j.current ? {
                            "aria-current": j.current ? "page" : "true"
                          } : {},
                          children: A(j)
                        }
                      )
                    },
                    E
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(u).map((j, E) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: G(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": j.active || j.current
                          }
                        ),
                        children: /* @__PURE__ */ n.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: j.href,
                            ...j.active || j.current ? {
                              "aria-current": j.current ? "page" : "true"
                            } : {},
                            children: A(j)
                          }
                        )
                      },
                      `overflow-${u + E}`
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
}, ks = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
  text: a,
  html: s,
  imageURL: o,
  containerClasses: i = "",
  classes: l = "",
  children: c,
  ...h
}) => {
  const u = [
    "nhsuk-hero",
    o && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    o && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), p = [
    "nhsuk-width-container",
    i,
    o ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), g = [
    "nhsuk-hero__heading",
    r,
    !c && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), v = c || e || a || s, B = () => {
    if (!e) return null;
    const b = { className: g };
    switch (t) {
      case 1:
        return /* @__PURE__ */ n.jsx("h1", { ...b, children: e });
      case 2:
        return /* @__PURE__ */ n.jsx("h2", { ...b, children: e });
      case 3:
        return /* @__PURE__ */ n.jsx("h3", { ...b, children: e });
      case 4:
        return /* @__PURE__ */ n.jsx("h4", { ...b, children: e });
      case 5:
        return /* @__PURE__ */ n.jsx("h5", { ...b, children: e });
      case 6:
        return /* @__PURE__ */ n.jsx("h6", { ...b, children: e });
      default:
        return /* @__PURE__ */ n.jsx("h1", { ...b, children: e });
    }
  };
  return /* @__PURE__ */ n.jsxs(
    "section",
    {
      className: u,
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...h,
      children: [
        o && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: v && /* @__PURE__ */ n.jsx("div", { className: p, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          B(),
          c || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && v && /* @__PURE__ */ n.jsx("div", { className: p, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          B(),
          c || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
ks.displayName = "Hero";
const Pr = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: s,
  copyright: o = "© NHS England",
  containerClasses: i,
  attributes: l = {}
}) => {
  const c = (u, p = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: G("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": p
      }),
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: u.URL,
          target: u.newWindow ? "_blank" : void 0,
          rel: u.newWindow ? "noopener noreferrer" : void 0,
          children: u.label
        }
      )
    },
    `${u.URL}-${u.label}`
  ), h = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs("div", { className: G("nhsuk-width-container", i), children: [
      /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ n.jsx("div", { className: G("nhsuk-footer", e), children: h ? (
        // Multi-column layout
        /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((u) => c(u)) }),
          r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((u) => c(u)) }),
          a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((u) => c(u)) }),
          s && s.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((u) => c(u)) })
        ] })
      ) : (
        // Single column layout (default)
        /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
          t.map((u) => c(u, !0)),
          (r || []).map((u) => c(u, !0)),
          (a || []).map((u) => c(u, !0)),
          (s || []).map((u) => c(u, !0))
        ] })
      ) }),
      !h && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
    ] }),
    h && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
  ] }) });
};
function mt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function vs(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function zn(e) {
  let t, r, a;
  e.length !== 2 ? (t = mt, r = (l, c) => mt(e(l), c), a = (l, c) => e(l) - c) : (t = e === mt || e === vs ? e : ws, r = e, a = e);
  function s(l, c, h = 0, u = l.length) {
    if (h < u) {
      if (t(c, c) !== 0) return u;
      do {
        const p = h + u >>> 1;
        r(l[p], c) < 0 ? h = p + 1 : u = p;
      } while (h < u);
    }
    return h;
  }
  function o(l, c, h = 0, u = l.length) {
    if (h < u) {
      if (t(c, c) !== 0) return u;
      do {
        const p = h + u >>> 1;
        r(l[p], c) <= 0 ? h = p + 1 : u = p;
      } while (h < u);
    }
    return h;
  }
  function i(l, c, h = 0, u = l.length) {
    const p = s(l, c, h, u - 1);
    return p > h && a(l[p - 1], c) > -a(l[p], c) ? p - 1 : p;
  }
  return { left: s, center: i, right: o };
}
function ws() {
  return 0;
}
function Ss(e) {
  return e === null ? NaN : +e;
}
const Cs = zn(mt), js = Cs.right;
zn(Ss).center;
const Ns = Math.sqrt(50), Ts = Math.sqrt(10), Ds = Math.sqrt(2);
function zr(e, t, r) {
  const a = (t - e) / Math.max(0, r), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= Ns ? 10 : o >= Ts ? 5 : o >= Ds ? 2 : 1;
  let l, c, h;
  return s < 0 ? (h = Math.pow(10, -s) / i, l = Math.round(e * h), c = Math.round(t * h), l / h < e && ++l, c / h > t && --c, h = -h) : (h = Math.pow(10, s) * i, l = Math.round(e / h), c = Math.round(t / h), l * h < e && ++l, c * h > t && --c), c < l && 0.5 <= r && r < 2 ? zr(e, t, r * 2) : [l, c, h];
}
function rr(e, t, r) {
  return t = +t, e = +e, r = +r, zr(e, t, r)[2];
}
function ar(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, s = a ? rr(t, e, r) : rr(e, t, r);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function Bs(e, t) {
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
function Wn(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Wr(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function lt() {
}
var st = 0.7, gt = 1 / st, Ke = "\\s*([+-]?\\d+)\\s*", ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ye = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Fs = /^#([0-9a-f]{3,8})$/, Rs = new RegExp(`^rgb\\(${Ke},${Ke},${Ke}\\)$`), Is = new RegExp(`^rgb\\(${ye},${ye},${ye}\\)$`), Ms = new RegExp(`^rgba\\(${Ke},${Ke},${Ke},${ot}\\)$`), Es = new RegExp(`^rgba\\(${ye},${ye},${ye},${ot}\\)$`), Ls = new RegExp(`^hsl\\(${ot},${ye},${ye}\\)$`), $s = new RegExp(`^hsla\\(${ot},${ye},${ye},${ot}\\)$`), sr = {
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
Wn(lt, it, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: or,
  // Deprecated! Use color.formatHex.
  formatHex: or,
  formatHex8: As,
  formatHsl: Hs,
  formatRgb: ir,
  toString: ir
});
function or() {
  return this.rgb().formatHex();
}
function As() {
  return this.rgb().formatHex8();
}
function Hs() {
  return Or(this).formatHsl();
}
function ir() {
  return this.rgb().formatRgb();
}
function it(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Fs.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? lr(t) : r === 3 ? new fe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ut(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ut(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Rs.exec(e)) ? new fe(t[1], t[2], t[3], 1) : (t = Is.exec(e)) ? new fe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ms.exec(e)) ? ut(t[1], t[2], t[3], t[4]) : (t = Es.exec(e)) ? ut(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ls.exec(e)) ? ur(t[1], t[2] / 100, t[3] / 100, 1) : (t = $s.exec(e)) ? ur(t[1], t[2] / 100, t[3] / 100, t[4]) : sr.hasOwnProperty(e) ? lr(sr[e]) : e === "transparent" ? new fe(NaN, NaN, NaN, 0) : null;
}
function lr(e) {
  return new fe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ut(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new fe(e, t, r, a);
}
function Ps(e) {
  return e instanceof lt || (e = it(e)), e ? (e = e.rgb(), new fe(e.r, e.g, e.b, e.opacity)) : new fe();
}
function cn(e, t, r, a) {
  return arguments.length === 1 ? Ps(e) : new fe(e, t, r, a ?? 1);
}
function fe(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
Wn(fe, cn, Wr(lt, {
  brighter(e) {
    return e = e == null ? gt : Math.pow(gt, e), new fe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? st : Math.pow(st, e), new fe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new fe(ze(this.r), ze(this.g), ze(this.b), bt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: cr,
  // Deprecated! Use color.formatHex.
  formatHex: cr,
  formatHex8: zs,
  formatRgb: dr,
  toString: dr
}));
function cr() {
  return `#${Pe(this.r)}${Pe(this.g)}${Pe(this.b)}`;
}
function zs() {
  return `#${Pe(this.r)}${Pe(this.g)}${Pe(this.b)}${Pe((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function dr() {
  const e = bt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ze(this.r)}, ${ze(this.g)}, ${ze(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function bt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ze(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Pe(e) {
  return e = ze(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ur(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new xe(e, t, r, a);
}
function Or(e) {
  if (e instanceof xe) return new xe(e.h, e.s, e.l, e.opacity);
  if (e instanceof lt || (e = it(e)), !e) return new xe();
  if (e instanceof xe) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, s = Math.min(t, r, a), o = Math.max(t, r, a), i = NaN, l = o - s, c = (o + s) / 2;
  return l ? (t === o ? i = (r - a) / l + (r < a) * 6 : r === o ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? o + s : 2 - o - s, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new xe(i, l, c, e.opacity);
}
function Ws(e, t, r, a) {
  return arguments.length === 1 ? Or(e) : new xe(e, t, r, a ?? 1);
}
function xe(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
Wn(xe, Ws, Wr(lt, {
  brighter(e) {
    return e = e == null ? gt : Math.pow(gt, e), new xe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? st : Math.pow(st, e), new xe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - a;
    return new fe(
      en(e >= 240 ? e - 240 : e + 120, s, a),
      en(e, s, a),
      en(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new xe(hr(this.h), ht(this.s), ht(this.l), bt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = bt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${hr(this.h)}, ${ht(this.s) * 100}%, ${ht(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function hr(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ht(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function en(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const On = (e) => () => e;
function Os(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Us(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function Gs(e) {
  return (e = +e) == 1 ? Ur : function(t, r) {
    return r - t ? Us(t, r, e) : On(isNaN(t) ? r : t);
  };
}
function Ur(e, t) {
  var r = t - e;
  return r ? Os(e, r) : On(isNaN(e) ? t : e);
}
const fr = function e(t) {
  var r = Gs(t);
  function a(s, o) {
    var i = r((s = cn(s)).r, (o = cn(o)).r), l = r(s.g, o.g), c = r(s.b, o.b), h = Ur(s.opacity, o.opacity);
    return function(u) {
      return s.r = i(u), s.g = l(u), s.b = c(u), s.opacity = h(u), s + "";
    };
  }
  return a.gamma = e, a;
}(1);
function Ys(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < r; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function Vs(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function qs(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, s = new Array(a), o = new Array(r), i;
  for (i = 0; i < a; ++i) s[i] = Un(e[i], t[i]);
  for (; i < r; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function Ks(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function xt(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Zs(e, t) {
  var r = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = Un(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in r) a[s] = r[s](o);
    return a;
  };
}
var dn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, tn = new RegExp(dn.source, "g");
function Js(e) {
  return function() {
    return e;
  };
}
function Xs(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Qs(e, t) {
  var r = dn.lastIndex = tn.lastIndex = 0, a, s, o, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = dn.exec(e)) && (s = tn.exec(t)); )
    (o = s.index) > r && (o = t.slice(r, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, c.push({ i, x: xt(a, s) })), r = tn.lastIndex;
  return r < t.length && (o = t.slice(r), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? c[0] ? Xs(c[0].x) : Js(t) : (t = c.length, function(h) {
    for (var u = 0, p; u < t; ++u) l[(p = c[u]).i] = p.x(h);
    return l.join("");
  });
}
function Un(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? On(t) : (r === "number" ? xt : r === "string" ? (a = it(t)) ? (t = a, fr) : Qs : t instanceof it ? fr : t instanceof Date ? Ks : Vs(t) ? Ys : Array.isArray(t) ? qs : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Zs : xt)(e, t);
}
function eo(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function to(e) {
  return function() {
    return e;
  };
}
function no(e) {
  return +e;
}
var mr = [0, 1];
function Ve(e) {
  return e;
}
function un(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : to(isNaN(t) ? NaN : 0.5);
}
function ro(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function ao(e, t, r) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = un(s, a), o = r(i, o)) : (a = un(a, s), o = r(o, i)), function(l) {
    return o(a(l));
  };
}
function so(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = un(e[i], e[i + 1]), o[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = js(e, l, 1, a) - 1;
    return o[c](s[c](l));
  };
}
function oo(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function io() {
  var e = mr, t = mr, r = Un, a, s, o, i = Ve, l, c, h;
  function u() {
    var g = Math.min(e.length, t.length);
    return i !== Ve && (i = ro(e[0], e[g - 1])), l = g > 2 ? so : ao, c = h = null, p;
  }
  function p(g) {
    return g == null || isNaN(g = +g) ? o : (c || (c = l(e.map(a), t, r)))(a(i(g)));
  }
  return p.invert = function(g) {
    return i(s((h || (h = l(t, e.map(a), xt)))(g)));
  }, p.domain = function(g) {
    return arguments.length ? (e = Array.from(g, no), u()) : e.slice();
  }, p.range = function(g) {
    return arguments.length ? (t = Array.from(g), u()) : t.slice();
  }, p.rangeRound = function(g) {
    return t = Array.from(g), r = eo, u();
  }, p.clamp = function(g) {
    return arguments.length ? (i = g ? !0 : Ve, u()) : i !== Ve;
  }, p.interpolate = function(g) {
    return arguments.length ? (r = g, u()) : r;
  }, p.unknown = function(g) {
    return arguments.length ? (o = g, p) : o;
  }, function(g, v) {
    return a = g, s = v, u();
  };
}
function lo() {
  return io()(Ve, Ve);
}
function co(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, s = e[r], o = e[a], i;
  return o < s && (i = r, r = a, a = i, i = s, s = o, o = i), e[r] = t.floor(s), e[a] = t.ceil(o), e;
}
const nn = /* @__PURE__ */ new Date(), rn = /* @__PURE__ */ new Date();
function de(e, t, r, a) {
  function s(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return s.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), s.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), s.round = (o) => {
    const i = s(o), l = s.ceil(o);
    return o - i < l - o ? i : l;
  }, s.offset = (o, i) => (t(o = /* @__PURE__ */ new Date(+o), i == null ? 1 : Math.floor(i)), o), s.range = (o, i, l) => {
    const c = [];
    if (o = s.ceil(o), l = l == null ? 1 : Math.floor(l), !(o < i) || !(l > 0)) return c;
    let h;
    do
      c.push(h = /* @__PURE__ */ new Date(+o)), t(o, l), e(o);
    while (h < o && o < i);
    return c;
  }, s.filter = (o) => de((i) => {
    if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !o(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !o(i); )
          ;
  }), r && (s.count = (o, i) => (nn.setTime(+o), rn.setTime(+i), e(nn), e(rn), Math.floor(r(nn, rn))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const yt = de(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
yt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? de((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : yt);
yt.range;
const Re = 1e3, pe = Re * 60, Ie = pe * 60, Le = Ie * 24, Gn = Le * 7, pr = Le * 30, an = Le * 365, qe = de((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Re);
}, (e, t) => (t - e) / Re, (e) => e.getUTCSeconds());
qe.range;
const Yn = de((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Re);
}, (e, t) => {
  e.setTime(+e + t * pe);
}, (e, t) => (t - e) / pe, (e) => e.getMinutes());
Yn.range;
const uo = de((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * pe);
}, (e, t) => (t - e) / pe, (e) => e.getUTCMinutes());
uo.range;
const Vn = de((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Re - e.getMinutes() * pe);
}, (e, t) => {
  e.setTime(+e + t * Ie);
}, (e, t) => (t - e) / Ie, (e) => e.getHours());
Vn.range;
const ho = de((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ie);
}, (e, t) => (t - e) / Ie, (e) => e.getUTCHours());
ho.range;
const ct = de(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * pe) / Le,
  (e) => e.getDate() - 1
);
ct.range;
const qn = de((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Le, (e) => e.getUTCDate() - 1);
qn.range;
const fo = de((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Le, (e) => Math.floor(e / Le));
fo.range;
function Oe(e) {
  return de((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * pe) / Gn);
}
const Zt = Oe(0), _t = Oe(1), mo = Oe(2), po = Oe(3), Ze = Oe(4), go = Oe(5), bo = Oe(6);
Zt.range;
_t.range;
mo.range;
po.range;
Ze.range;
go.range;
bo.range;
function Ue(e) {
  return de((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Gn);
}
const Gr = Ue(0), kt = Ue(1), xo = Ue(2), yo = Ue(3), Je = Ue(4), _o = Ue(5), ko = Ue(6);
Gr.range;
kt.range;
xo.range;
yo.range;
Je.range;
_o.range;
ko.range;
const Kn = de((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Kn.range;
const vo = de((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
vo.range;
const $e = de((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
$e.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : de((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
$e.range;
const We = de((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
We.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : de((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
We.range;
function wo(e, t, r, a, s, o) {
  const i = [
    [qe, 1, Re],
    [qe, 5, 5 * Re],
    [qe, 15, 15 * Re],
    [qe, 30, 30 * Re],
    [o, 1, pe],
    [o, 5, 5 * pe],
    [o, 15, 15 * pe],
    [o, 30, 30 * pe],
    [s, 1, Ie],
    [s, 3, 3 * Ie],
    [s, 6, 6 * Ie],
    [s, 12, 12 * Ie],
    [a, 1, Le],
    [a, 2, 2 * Le],
    [r, 1, Gn],
    [t, 1, pr],
    [t, 3, 3 * pr],
    [e, 1, an]
  ];
  function l(h, u, p) {
    const g = u < h;
    g && ([h, u] = [u, h]);
    const v = p && typeof p.range == "function" ? p : c(h, u, p), B = v ? v.range(h, +u + 1) : [];
    return g ? B.reverse() : B;
  }
  function c(h, u, p) {
    const g = Math.abs(u - h) / p, v = zn(([, , S]) => S).right(i, g);
    if (v === i.length) return e.every(ar(h / an, u / an, p));
    if (v === 0) return yt.every(Math.max(ar(h, u, p), 1));
    const [B, b] = i[g / i[v - 1][2] < i[v][2] / g ? v - 1 : v];
    return B.every(b);
  }
  return [l, c];
}
const [So, Co] = wo($e, Kn, Zt, ct, Vn, Yn);
function sn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function on(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function nt(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function jo(e) {
  var t = e.dateTime, r = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, h = rt(s), u = at(s), p = rt(o), g = at(o), v = rt(i), B = at(i), b = rt(l), S = at(l), N = rt(c), D = at(c), F = {
    a: J,
    A: ne,
    b: X,
    B: T,
    c: null,
    d: kr,
    e: kr,
    f: Ko,
    g: si,
    G: ii,
    H: Yo,
    I: Vo,
    j: qo,
    L: Yr,
    m: Zo,
    M: Jo,
    p: q,
    q: P,
    Q: Sr,
    s: Cr,
    S: Xo,
    u: Qo,
    U: ei,
    V: ti,
    w: ni,
    W: ri,
    x: null,
    X: null,
    y: ai,
    Y: oi,
    Z: li,
    "%": wr
  }, C = {
    a: V,
    A: O,
    b: R,
    B: d,
    c: null,
    d: vr,
    e: vr,
    f: hi,
    g: vi,
    G: Si,
    H: ci,
    I: di,
    j: ui,
    L: qr,
    m: fi,
    M: mi,
    p: m,
    q: I,
    Q: Sr,
    s: Cr,
    S: pi,
    u: gi,
    U: bi,
    V: xi,
    w: yi,
    W: _i,
    x: null,
    X: null,
    y: ki,
    Y: wi,
    Z: Ci,
    "%": wr
  }, A = {
    a: _,
    A: f,
    b: $,
    B: Q,
    c: Z,
    d: yr,
    e: yr,
    f: Wo,
    g: xr,
    G: br,
    H: _r,
    I: _r,
    j: Ao,
    L: zo,
    m: $o,
    M: Ho,
    p: x,
    q: Lo,
    Q: Uo,
    s: Go,
    S: Po,
    u: Fo,
    U: Ro,
    V: Io,
    w: Bo,
    W: Mo,
    x: H,
    X: U,
    y: xr,
    Y: br,
    Z: Eo,
    "%": Oo
  };
  F.x = j(r, F), F.X = j(a, F), F.c = j(t, F), C.x = j(r, C), C.X = j(a, C), C.c = j(t, C);
  function j(k, M) {
    return function(L) {
      var w = [], Y = -1, W = 0, te = k.length, z, ee, ce;
      for (L instanceof Date || (L = /* @__PURE__ */ new Date(+L)); ++Y < te; )
        k.charCodeAt(Y) === 37 && (w.push(k.slice(W, Y)), (ee = gr[z = k.charAt(++Y)]) != null ? z = k.charAt(++Y) : ee = z === "e" ? " " : "0", (ce = M[z]) && (z = ce(L, ee)), w.push(z), W = Y + 1);
      return w.push(k.slice(W, Y)), w.join("");
    };
  }
  function E(k, M) {
    return function(L) {
      var w = nt(1900, void 0, 1), Y = y(w, k, L += "", 0), W, te;
      if (Y != L.length) return null;
      if ("Q" in w) return new Date(w.Q);
      if ("s" in w) return new Date(w.s * 1e3 + ("L" in w ? w.L : 0));
      if (M && !("Z" in w) && (w.Z = 0), "p" in w && (w.H = w.H % 12 + w.p * 12), w.m === void 0 && (w.m = "q" in w ? w.q : 0), "V" in w) {
        if (w.V < 1 || w.V > 53) return null;
        "w" in w || (w.w = 1), "Z" in w ? (W = on(nt(w.y, 0, 1)), te = W.getUTCDay(), W = te > 4 || te === 0 ? kt.ceil(W) : kt(W), W = qn.offset(W, (w.V - 1) * 7), w.y = W.getUTCFullYear(), w.m = W.getUTCMonth(), w.d = W.getUTCDate() + (w.w + 6) % 7) : (W = sn(nt(w.y, 0, 1)), te = W.getDay(), W = te > 4 || te === 0 ? _t.ceil(W) : _t(W), W = ct.offset(W, (w.V - 1) * 7), w.y = W.getFullYear(), w.m = W.getMonth(), w.d = W.getDate() + (w.w + 6) % 7);
      } else ("W" in w || "U" in w) && ("w" in w || (w.w = "u" in w ? w.u % 7 : "W" in w ? 1 : 0), te = "Z" in w ? on(nt(w.y, 0, 1)).getUTCDay() : sn(nt(w.y, 0, 1)).getDay(), w.m = 0, w.d = "W" in w ? (w.w + 6) % 7 + w.W * 7 - (te + 5) % 7 : w.w + w.U * 7 - (te + 6) % 7);
      return "Z" in w ? (w.H += w.Z / 100 | 0, w.M += w.Z % 100, on(w)) : sn(w);
    };
  }
  function y(k, M, L, w) {
    for (var Y = 0, W = M.length, te = L.length, z, ee; Y < W; ) {
      if (w >= te) return -1;
      if (z = M.charCodeAt(Y++), z === 37) {
        if (z = M.charAt(Y++), ee = A[z in gr ? M.charAt(Y++) : z], !ee || (w = ee(k, L, w)) < 0) return -1;
      } else if (z != L.charCodeAt(w++))
        return -1;
    }
    return w;
  }
  function x(k, M, L) {
    var w = h.exec(M.slice(L));
    return w ? (k.p = u.get(w[0].toLowerCase()), L + w[0].length) : -1;
  }
  function _(k, M, L) {
    var w = v.exec(M.slice(L));
    return w ? (k.w = B.get(w[0].toLowerCase()), L + w[0].length) : -1;
  }
  function f(k, M, L) {
    var w = p.exec(M.slice(L));
    return w ? (k.w = g.get(w[0].toLowerCase()), L + w[0].length) : -1;
  }
  function $(k, M, L) {
    var w = N.exec(M.slice(L));
    return w ? (k.m = D.get(w[0].toLowerCase()), L + w[0].length) : -1;
  }
  function Q(k, M, L) {
    var w = b.exec(M.slice(L));
    return w ? (k.m = S.get(w[0].toLowerCase()), L + w[0].length) : -1;
  }
  function Z(k, M, L) {
    return y(k, t, M, L);
  }
  function H(k, M, L) {
    return y(k, r, M, L);
  }
  function U(k, M, L) {
    return y(k, a, M, L);
  }
  function J(k) {
    return i[k.getDay()];
  }
  function ne(k) {
    return o[k.getDay()];
  }
  function X(k) {
    return c[k.getMonth()];
  }
  function T(k) {
    return l[k.getMonth()];
  }
  function q(k) {
    return s[+(k.getHours() >= 12)];
  }
  function P(k) {
    return 1 + ~~(k.getMonth() / 3);
  }
  function V(k) {
    return i[k.getUTCDay()];
  }
  function O(k) {
    return o[k.getUTCDay()];
  }
  function R(k) {
    return c[k.getUTCMonth()];
  }
  function d(k) {
    return l[k.getUTCMonth()];
  }
  function m(k) {
    return s[+(k.getUTCHours() >= 12)];
  }
  function I(k) {
    return 1 + ~~(k.getUTCMonth() / 3);
  }
  return {
    format: function(k) {
      var M = j(k += "", F);
      return M.toString = function() {
        return k;
      }, M;
    },
    parse: function(k) {
      var M = E(k += "", !1);
      return M.toString = function() {
        return k;
      }, M;
    },
    utcFormat: function(k) {
      var M = j(k += "", C);
      return M.toString = function() {
        return k;
      }, M;
    },
    utcParse: function(k) {
      var M = E(k += "", !0);
      return M.toString = function() {
        return k;
      }, M;
    }
  };
}
var gr = { "-": "", _: " ", 0: "0" }, ue = /^\s*\d+/, No = /^%/, To = /[\\^$*+?|[\]().{}]/g;
function ae(e, t, r) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < r ? new Array(r - o + 1).join(t) + s : s);
}
function Do(e) {
  return e.replace(To, "\\$&");
}
function rt(e) {
  return new RegExp("^(?:" + e.map(Do).join("|") + ")", "i");
}
function at(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Bo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function Fo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Ro(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function Io(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Mo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function br(e, t, r) {
  var a = ue.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function xr(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function Eo(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Lo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function $o(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function yr(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Ao(e, t, r) {
  var a = ue.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function _r(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Ho(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Po(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function zo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function Wo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Oo(e, t, r) {
  var a = No.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Uo(e, t, r) {
  var a = ue.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Go(e, t, r) {
  var a = ue.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function kr(e, t) {
  return ae(e.getDate(), t, 2);
}
function Yo(e, t) {
  return ae(e.getHours(), t, 2);
}
function Vo(e, t) {
  return ae(e.getHours() % 12 || 12, t, 2);
}
function qo(e, t) {
  return ae(1 + ct.count($e(e), e), t, 3);
}
function Yr(e, t) {
  return ae(e.getMilliseconds(), t, 3);
}
function Ko(e, t) {
  return Yr(e, t) + "000";
}
function Zo(e, t) {
  return ae(e.getMonth() + 1, t, 2);
}
function Jo(e, t) {
  return ae(e.getMinutes(), t, 2);
}
function Xo(e, t) {
  return ae(e.getSeconds(), t, 2);
}
function Qo(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ei(e, t) {
  return ae(Zt.count($e(e) - 1, e), t, 2);
}
function Vr(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ze(e) : Ze.ceil(e);
}
function ti(e, t) {
  return e = Vr(e), ae(Ze.count($e(e), e) + ($e(e).getDay() === 4), t, 2);
}
function ni(e) {
  return e.getDay();
}
function ri(e, t) {
  return ae(_t.count($e(e) - 1, e), t, 2);
}
function ai(e, t) {
  return ae(e.getFullYear() % 100, t, 2);
}
function si(e, t) {
  return e = Vr(e), ae(e.getFullYear() % 100, t, 2);
}
function oi(e, t) {
  return ae(e.getFullYear() % 1e4, t, 4);
}
function ii(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Ze(e) : Ze.ceil(e), ae(e.getFullYear() % 1e4, t, 4);
}
function li(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ae(t / 60 | 0, "0", 2) + ae(t % 60, "0", 2);
}
function vr(e, t) {
  return ae(e.getUTCDate(), t, 2);
}
function ci(e, t) {
  return ae(e.getUTCHours(), t, 2);
}
function di(e, t) {
  return ae(e.getUTCHours() % 12 || 12, t, 2);
}
function ui(e, t) {
  return ae(1 + qn.count(We(e), e), t, 3);
}
function qr(e, t) {
  return ae(e.getUTCMilliseconds(), t, 3);
}
function hi(e, t) {
  return qr(e, t) + "000";
}
function fi(e, t) {
  return ae(e.getUTCMonth() + 1, t, 2);
}
function mi(e, t) {
  return ae(e.getUTCMinutes(), t, 2);
}
function pi(e, t) {
  return ae(e.getUTCSeconds(), t, 2);
}
function gi(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function bi(e, t) {
  return ae(Gr.count(We(e) - 1, e), t, 2);
}
function Kr(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Je(e) : Je.ceil(e);
}
function xi(e, t) {
  return e = Kr(e), ae(Je.count(We(e), e) + (We(e).getUTCDay() === 4), t, 2);
}
function yi(e) {
  return e.getUTCDay();
}
function _i(e, t) {
  return ae(kt.count(We(e) - 1, e), t, 2);
}
function ki(e, t) {
  return ae(e.getUTCFullYear() % 100, t, 2);
}
function vi(e, t) {
  return e = Kr(e), ae(e.getUTCFullYear() % 100, t, 2);
}
function wi(e, t) {
  return ae(e.getUTCFullYear() % 1e4, t, 4);
}
function Si(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Je(e) : Je.ceil(e), ae(e.getUTCFullYear() % 1e4, t, 4);
}
function Ci() {
  return "+0000";
}
function wr() {
  return "%";
}
function Sr(e) {
  return +e;
}
function Cr(e) {
  return Math.floor(+e / 1e3);
}
var Ye, Zr;
ji({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ji(e) {
  return Ye = jo(e), Zr = Ye.format, Ye.parse, Ye.utcFormat, Ye.utcParse, Ye;
}
function Ni(e) {
  return new Date(e);
}
function Ti(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Jr(e, t, r, a, s, o, i, l, c, h) {
  var u = lo(), p = u.invert, g = u.domain, v = h(".%L"), B = h(":%S"), b = h("%I:%M"), S = h("%I %p"), N = h("%a %d"), D = h("%b %d"), F = h("%B"), C = h("%Y");
  function A(j) {
    return (c(j) < j ? v : l(j) < j ? B : i(j) < j ? b : o(j) < j ? S : a(j) < j ? s(j) < j ? N : D : r(j) < j ? F : C)(j);
  }
  return u.invert = function(j) {
    return new Date(p(j));
  }, u.domain = function(j) {
    return arguments.length ? g(Array.from(j, Ti)) : g().map(Ni);
  }, u.ticks = function(j) {
    var E = g();
    return e(E[0], E[E.length - 1], j ?? 10);
  }, u.tickFormat = function(j, E) {
    return E == null ? A : h(E);
  }, u.nice = function(j) {
    var E = g();
    return (!j || typeof j.range != "function") && (j = t(E[0], E[E.length - 1], j ?? 10)), j ? g(co(E, j)) : u;
  }, u.copy = function() {
    return oo(u, Jr(e, t, r, a, s, o, i, l, c, h));
  }, u;
}
function Di() {
  return Bs.apply(Jr(So, Co, $e, Kn, Zt, ct, Vn, Yn, qe, Zr).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Bi({
  task: e,
  scale: t,
  onTaskClick: r,
  onTaskDoubleClick: a,
  isSelected: s = !1,
  taskIndex: o,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": c
}) {
  const h = se(null), [u, p] = re(!1), [g, v] = re(!1), B = t(e.start), b = t(e.end), S = Math.max(b - B, 20), N = () => {
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
  }, D = e.progress ? S * e.progress / 100 : 0, F = () => {
    r?.(e);
  }, C = () => {
    a?.(e);
  }, A = ($) => {
    $.key === "Enter" ? ($.preventDefault(), F()) : $.key === " " && ($.preventDefault(), C());
  }, j = () => {
    p(!0);
  }, E = () => {
    p(!1);
  }, y = () => {
    v(!0), l?.();
  }, x = () => {
    v(!1);
  }, _ = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (g || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), f = {
    "--task-left": `${B}px`,
    "--task-width": `${S}px`,
    "--task-color": N(),
    left: `${B}px`,
    width: `${S}px`,
    backgroundColor: N()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: h,
      "data-task-index": o,
      className: _,
      style: f,
      onClick: F,
      onDoubleClick: C,
      onKeyDown: A,
      onMouseDown: j,
      onMouseUp: E,
      onFocus: y,
      onBlur: x,
      "aria-label": c || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${D}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function Fi({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let v = e.getTime(); v <= t.getTime(); v += 864e5)
    a.push(new Date(v));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = re(-1), c = se(null), h = (v) => {
    if (v.key === "ArrowLeft") {
      v.preventDefault();
      const B = Math.max(0, i === -1 ? 0 : i - 1);
      l(B), g(B);
    } else if (v.key === "ArrowRight") {
      v.preventDefault();
      const B = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(B), g(B);
    } else if (v.key === "ArrowDown") {
      v.preventDefault();
      const B = document.querySelector(".gantt-row .timeline-container");
      B && B.focus();
    } else if (v.key === "Home")
      v.preventDefault(), l(0), g(0);
    else if (v.key === "End") {
      v.preventDefault();
      const B = a.length - 1;
      l(B), g(B);
    }
  }, u = (v) => {
    if (v.key === "ArrowDown") {
      v.preventDefault();
      const B = document.querySelector(".gantt-row .resource-label");
      B && B.focus();
    } else if (v.key === "ArrowRight") {
      v.preventDefault();
      const B = c.current;
      B && B.focus();
    }
  }, p = () => {
    i === -1 && (l(0), setTimeout(() => g(0), 0));
  }, g = (v) => {
    const B = c.current?.querySelector(`[data-date-index="${v}"]`);
    B && B.focus();
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
            ref: c,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": r,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: h,
            onFocus: p,
            children: a.map((v, B) => {
              const b = v.getTime() === o.getTime(), S = i === B;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": B,
                  className: `date-column ${b ? "today" : ""} ${S ? "focused" : ""}`,
                  tabIndex: S ? 0 : -1,
                  role: "button",
                  "aria-label": `${v.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${b ? " (Today)" : ""}`,
                  onFocus: () => l(B),
                  onKeyDown: h,
                  children: v.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                B
              );
            })
          }
        )
      ]
    }
  );
}
function Ri({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, c] = re(!1), [h, u] = re(-1), p = se(null);
  oe(() => {
    l && h >= 0 && t.length > 0 && setTimeout(() => {
      p.current?.querySelector(`[data-task-index="${h}"]`)?.focus();
    }, 0);
  }, [l, h, t.length]);
  const g = (b) => {
    if (b.key === "ArrowLeft" && b.shiftKey) {
      b.preventDefault(), b.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (b.key === "ArrowRight" && b.shiftKey) {
      b.preventDefault(), b.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (b.key) {
        case "ArrowUp":
          b.preventDefault(), o === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          b.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          b.preventDefault(), p.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (b.preventDefault(), c(!0), u(0));
          break;
      }
      return;
    }
    switch (b.key) {
      case "ArrowLeft":
        b.preventDefault();
        const S = Math.max(0, h - 1);
        u(S), p.current?.querySelector(`[data-task-index="${S}"]`)?.focus();
        break;
      case "ArrowRight":
        b.preventDefault();
        const D = Math.min(t.length - 1, h + 1);
        u(D), p.current?.querySelector(`[data-task-index="${D}"]`)?.focus();
        break;
      case "Enter":
        b.preventDefault(), h >= 0 && a?.(t[h]);
        break;
      case " ":
        b.preventDefault(), h >= 0 && s?.(t[h]);
        break;
      case "Escape":
        b.preventDefault(), c(!1), u(-1), p.current?.focus();
        break;
    }
  }, v = (b) => {
    switch (b.key) {
      case "ArrowUp":
        b.preventDefault(), o === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        b.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        b.preventDefault(), p.current?.focus();
        break;
    }
  }, B = (b) => {
    l && u(b);
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
            onKeyDown: v,
            children: e.label
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: p,
            className: `timeline-container ${l ? "timeline-active" : ""}`,
            role: "gridcell",
            "aria-colindex": 2,
            "aria-colspan": i,
            tabIndex: 0,
            "aria-label": `Timeline for ${e.label} with ${t.length} task${t.length !== 1 ? "s" : ""}. Press Enter to activate task navigation, then use arrow keys to navigate, Enter to select, Space to activate, Escape to exit`,
            onKeyDown: g,
            onFocus: () => {
              l || u(-1);
            },
            children: t.map((b, S) => /* @__PURE__ */ n.jsx(
              Bi,
              {
                task: b,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && h === S,
                taskIndex: S,
                tabIndex: l && h === S ? 0 : -1,
                onFocus: () => B(S)
              },
              b.id
            ))
          }
        )
      ]
    }
  );
}
function wh({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = se(null), [l, c] = re(800), h = le(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const b = new Date(r);
    return isNaN(b.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : b;
  }, [r]), u = le(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const b = new Date(a);
    return isNaN(b.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : b;
  }, [a]), p = le(() => Math.ceil((u.getTime() - h.getTime()) / 864e5) + 1, [h, u]);
  oe(() => {
    if (!i.current) return;
    const b = new ResizeObserver((S) => {
      const N = S[0];
      N && c(Math.max(N.contentRect.width - 220, 400));
    });
    return b.observe(i.current), () => b.disconnect();
  }, []);
  const g = le(
    () => Di().domain([h, u]).range([0, l]),
    [h, u, l]
  ), v = le(() => {
    const b = /* @__PURE__ */ new Map();
    return t.forEach((S) => {
      const N = b.get(S.resourceId) || [];
      N.push(S), b.set(S.resourceId, N);
    }), b;
  }, [t]), B = (b) => {
    if (b.target === b.currentTarget)
      switch (b.key) {
        case "ArrowDown":
          b.preventDefault();
          const S = i.current?.querySelector(".gantt-row .resource-label");
          S && S.focus();
          break;
        case "Home":
          b.preventDefault();
          const N = i.current?.querySelector(".header-resource");
          N && N.focus();
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
      "aria-colcount": p + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: B,
      children: [
        /* @__PURE__ */ n.jsx(Fi, { viewStart: h, viewEnd: u, dateCount: p }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (b) => {
              b.key === "ArrowLeft" && b.altKey ? (b.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : b.key === "ArrowRight" && b.altKey ? (b.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : b.key === "ArrowUp" && b.altKey ? (b.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : b.key === "ArrowDown" && b.altKey && (b.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((b, S) => /* @__PURE__ */ n.jsx(
              Ri,
              {
                resource: b,
                tasks: v.get(b.id) || [],
                scale: g,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: S,
                dateCount: p
              },
              b.id
            ))
          }
        )
      ]
    }
  );
}
const vt = ({
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
) }), Ii = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? be.Children.toArray(t).filter(
    (N) => be.isValidElement(N) && (N.type === vt || N.type?.displayName === "BreadcrumbItem")
  ).map((N) => ({
    text: typeof N.props.children == "string" ? N.props.children : String(N.props.children),
    href: N.props.href,
    active: N.props.active,
    attributes: N.props.attributes
  })) : [], h = () => t ? c() : s && o ? [{ href: s, text: o }] : e, u = () => {
    const S = h();
    if (S && S.length > 0) {
      const N = S.slice().reverse().find((D) => D.href && !D.active);
      if (N)
        return { href: N.href, text: N.text };
    }
    return { text: "Home" };
  }, p = h(), g = u(), v = G(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), b = p && p.length > 1 ? a : void 0;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: v,
      "aria-label": b,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          be.Children.map(t, (S, N) => be.isValidElement(S) && (S.type === vt || S.type?.displayName === "BreadcrumbItem") ? be.cloneElement(S, { key: N }) : null)
        ) : (
          // Render from items array
          p?.map((S, N) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: S.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...S.attributes || {},
              children: S.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: S.href,
              role: "link",
              ...S.attributes || {},
              children: S.text
            }
          ) }, N))
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
}, Mi = Ii;
Mi.Item = vt;
vt.displayName = "BreadcrumbItem";
const Xr = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [s, o] = re(!1);
  oe(() => {
    o(!0);
  }, []), oe(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (c) => {
      const h = c.target, u = h.getAttribute("href");
      if (u && u.startsWith("#")) {
        const p = document.querySelector(u);
        if (p) {
          p.hasAttribute("tabindex") || p.setAttribute("tabindex", "-1"), p.focus(), p.classList.add("nhsuk-skip-link-focused-element");
          const g = window.setTimeout(() => {
            p.classList.remove("nhsuk-skip-link-focused-element"), p.getAttribute("tabindex") === "-1" && p.removeAttribute("tabindex");
          }, 3e3);
          h.__nhsSkipLinkTimeout = g;
        }
      }
    };
    try {
      const c = document.querySelectorAll(".nhsuk-skip-link");
      return c.forEach((h) => {
        h.addEventListener("click", l);
      }), () => {
        try {
          c.forEach((h) => {
            h.removeEventListener("click", l);
            const u = h.__nhsSkipLinkTimeout;
            u && window.clearTimeout && window.clearTimeout(u);
          });
        } catch (h) {
          console.warn("SkipLink cleanup error:", h);
        }
      };
    } catch (c) {
      return console.warn("SkipLink initialization error:", c), () => {
      };
    }
  }, [s]);
  const i = G("nhsuk-skip-link", r);
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
}, Sh = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: s,
  attributes: o = {}
}) => {
  const i = G("nhsuk-pagination", s);
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
}, Ch = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const s = G("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, Qr = be.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: r,
  headingLevel: a = 2,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  href: l,
  imgURL: c,
  imgAlt: h,
  ...u
}, p) => {
  const g = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    u.className
  ].filter(Boolean).join(" "), v = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), B = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), b = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const D = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Ee,
      {
        level: a,
        className: B,
        children: D()
      }
    );
  }, S = () => u.children ? u.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: o }) : null, N = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      className: g,
      ref: p,
      children: [
        c && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: h || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: v, children: [
          b(),
          S(),
          N()
        ] })
      ]
    }
  );
});
Qr.displayName = "Card";
const jh = ({
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
}, Nh = ({
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
}, Th = ({
  type: e,
  heading: t,
  headingHtml: r,
  headingLevel: a = 3,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  className: l,
  children: c,
  "data-testid": h,
  id: u,
  "aria-label": p,
  "aria-labelledby": g,
  "aria-describedby": v
}) => {
  const B = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), b = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), S = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const D = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], F = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        D,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Ee,
      {
        level: a,
        className: b,
        children: F
      }
    );
  }, N = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: B,
      "data-testid": h,
      id: u,
      "aria-label": p,
      "aria-labelledby": g,
      "aria-describedby": v,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          S(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: N() })
      ]
    }
  );
}, Ei = ({
  id: e,
  className: t,
  headingText: r,
  headingHtml: a,
  headingLevel: s = 2,
  bodyText: o,
  bodyHtml: i,
  children: l,
  ...c
}) => {
  const h = G(
    "nhsuk-panel",
    t
  ), u = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Ee,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Ee,
    {
      level: s,
      className: "nhsuk-panel__heading",
      text: r,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, p = () => l ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : o ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: o }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: h, id: e, ...c, children: [
    u(),
    p()
  ] });
}, Dh = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...s
}) => {
  const o = G("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: o, ...s, children: i() });
}, Bh = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const s = G(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), o = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((c, h) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-summary-list__actions-list-item",
      children: /* @__PURE__ */ n.jsxs(
        "a",
        {
          href: c.href,
          className: "nhsuk-link",
          ...c.attributes,
          children: [
            o(c),
            c.visuallyHiddenText && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: c.visuallyHiddenText })
          ]
        }
      )
    },
    h
  )) }) });
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: s, ...a, children: e.map((l, c) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: o(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: o(l.value) }),
    i(l.actions)
  ] }, c)) }) });
}, Fh = ({
  rows: e,
  head: t,
  caption: r,
  captionSize: a,
  firstCellIsHeader: s = !1,
  responsive: o = !1,
  heading: i,
  headingLevel: l = 3,
  panel: c = !1,
  panelClasses: h,
  tableClasses: u,
  classes: p,
  attributes: g,
  "data-testid": v
}) => {
  const B = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), b = G(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    u
  ), S = G(p), N = (C, A) => {
    const j = G("nhsuk-table__header", {
      [`nhsuk-table__header--${C.format}`]: C.format
    }, C.classes), E = {
      scope: "col",
      ...C.colspan && { colSpan: C.colspan },
      ...C.rowspan && { rowSpan: C.rowspan },
      ...o && { role: "columnheader" },
      ...C.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: j, ...E, children: C.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: C.html } }) : C.text }, A);
  }, D = (C, A, j) => {
    const E = s && j, y = G(
      E ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${E ? "header" : "cell"}--${C.format}`]: C.format
      },
      C.classes
    ), x = {
      ...E && { scope: "row" },
      ...C.colspan && { colSpan: C.colspan },
      ...C.rowspan && { rowSpan: C.rowspan },
      ...o && {
        role: E ? "rowheader" : "cell",
        ...C.header && { "data-label": C.header }
      },
      ...C.attributes
    }, _ = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      o && C.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        C.header,
        " "
      ] }),
      C.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: C.html } }) : C.text
    ] }), f = E ? "th" : "td";
    return /* @__PURE__ */ n.jsx(f, { className: y, ...x, children: _ }, A);
  }, F = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: b,
      ...o && { role: "table" },
      ...g,
      ...v && { "data-testid": v },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: B, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...o && { role: "row" }, children: t.map((C, A) => N(C, A)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((C, A) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: C.map(
              (j, E) => D(j, E, E === 0)
            )
          },
          A
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(Ei, { className: h, children: [
    i && /* @__PURE__ */ n.jsx(Ee, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    F()
  ] }) : S ? /* @__PURE__ */ n.jsx("div", { className: S, children: F() }) : F();
}, Rh = Xe(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
  onTabChange: a,
  onTabFocus: s,
  onTabListBlur: o,
  onEscape: i,
  autoActivate: l = !0,
  className: c,
  id: h,
  "data-testid": u,
  ...p
}, g) => {
  const v = r !== void 0, [B, b] = re(() => t || e[0]?.id || ""), S = v ? r : B, N = se(null), D = se(/* @__PURE__ */ new Map()), F = K((_) => {
    v || b(_), a?.(_);
  }, [v, a]), C = K((_) => {
    s?.(_), l && F(_);
  }, [s, l, F]), A = K((_, f) => {
    const $ = e.filter((H) => !H.disabled).map((H) => H.id), Q = $.indexOf(f);
    let Z = null;
    switch (_.key) {
      case "ArrowLeft":
        Z = Q > 0 ? Q - 1 : $.length - 1;
        break;
      case "ArrowRight":
        Z = Q < $.length - 1 ? Q + 1 : 0;
        break;
      case "Home":
        Z = 0;
        break;
      case "End":
        Z = $.length - 1;
        break;
      case "Escape":
        _.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (Z !== null) {
      _.preventDefault();
      const H = $[Z], U = D.current.get(H);
      U && (U.focus(), C(H));
    }
  }, [e, C, i]), j = K((_, f) => {
    f ? D.current.set(_, f) : D.current.delete(_);
  }, []), E = K((_) => {
    const f = D.current.get(_);
    f && f.focus();
  }, []);
  Fr(g, () => ({
    focusTab: E,
    getActiveTab: () => S,
    getTabListElement: () => N.current
  }), [E, S]);
  const y = K((_) => {
    const f = _.relatedTarget;
    N.current?.contains(f) || o?.();
  }, [o]), x = G("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: x,
      id: h,
      "data-testid": u,
      ...p,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: N,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: y,
                children: e.map((_) => {
                  const f = _.id === S, $ = _.disabled, Q = G("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": f,
                    "nhsuk-tabs__list-item--disabled": $
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: Q, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (Z) => j(_.id, Z),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": f,
                      "aria-controls": `${_.id}-panel`,
                      id: `${_.id}-tab`,
                      tabIndex: f ? 0 : -1,
                      disabled: $,
                      onClick: () => !$ && F(_.id),
                      onKeyDown: (Z) => !$ && A(Z, _.id),
                      onFocus: () => !$ && C(_.id),
                      ..._.attributes,
                      children: _.label
                    }
                  ) }, _.id);
                })
              }
            )
          }
        ),
        e.map((_) => {
          const f = _.id === S;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${_.id}-tab`,
              id: `${_.id}-panel`,
              hidden: !f,
              children: _.content
            },
            _.id
          );
        })
      ]
    }
  );
}), Li = Xe(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...c
  }, h) => {
    const u = [
      "nhsuk-details",
      o
    ].filter(Boolean).join(" "), p = t ? /* @__PURE__ */ n.jsx(
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
        ref: h,
        id: i,
        className: u,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: p }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: g })
        ]
      }
    );
  }
);
Li.displayName = "Details";
const $i = Xe(
  ({
    title: e,
    type: t,
    items: r,
    hidePrefix: a = !1,
    headingLevel: s = 3,
    className: o,
    ...i
  }, l) => {
    const c = ["nhsuk-do-dont-list"];
    o && c.push(o);
    const h = [
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
    ), p = (v) => t === "cross" && !a ? `do not ${v}` : v, g = () => /* @__PURE__ */ n.jsx(
      Ee,
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
        className: c.join(" "),
        ...i,
        children: [
          g(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: h.join(" "), role: "list", children: r.map((v, B) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            p(v.item)
          ] }, B)) }) })
        ]
      }
    );
  }
);
$i.displayName = "DoDontList";
const Ai = Xe(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...c
  }, h) => {
    const u = [
      "nhsuk-expander",
      o
    ].filter(Boolean).join(" "), p = t ? /* @__PURE__ */ n.jsx(
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
        ref: h,
        id: i,
        className: u,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: p }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: g })
        ]
      }
    );
  }
);
Ai.displayName = "Expander";
const Hi = Xe(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const h = c + 1, u = `${t}-${h}-hint`, p = `${t}-${h}-status`, g = !!l.href, v = [
        "nhsuk-task-list__item",
        g && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), B = [
        l.hint && u,
        p
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Pi,
        {
          item: l,
          itemClasses: v,
          hasLink: g,
          hintId: u,
          statusId: p,
          ariaDescribedBy: B
        },
        c
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
), Pi = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: a,
  statusId: s,
  ariaDescribedBy: o
}) => {
  const i = () => {
    const h = e.title.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, u = [
      r ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: u,
        href: e.href,
        "aria-describedby": o,
        children: h
      }
    ) : /* @__PURE__ */ n.jsx("div", { className: e.title.classes || "", children: h });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ n.jsx(
    "div",
    {
      id: a,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ n.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, c = () => {
    const h = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let u;
    return e.status.tag ? u = /* @__PURE__ */ n.jsx(Me, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ n.jsx("div", { className: h, id: s, children: u });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
Hi.displayName = "TaskList";
const Ih = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: a,
  children: s,
  className: o,
  ...i
}) => {
  const l = /important/i.test(e), c = () => s || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), h = [
    "nhsuk-warning-callout",
    o
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: h,
      ...i,
      children: [
        Br(
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
        c()
      ]
    }
  );
}, Mh = ({
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
}, zi = ({
  title: e,
  value: t,
  subtitle: r,
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
  ].filter(Boolean).join(" "), h = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ee, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    r && /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: r })
  ] });
  return s ? /* @__PURE__ */ n.jsx(
    "a",
    {
      className: `${c} nhs-fdp-summary-card--clickable`,
      href: s,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: h
    }
  ) : /* @__PURE__ */ n.jsx(
    "div",
    {
      className: c,
      "aria-label": i,
      ...l,
      children: h
    }
  );
}, Eh = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(ms, { children: e.map((s, o) => /* @__PURE__ */ n.jsx(
    Pn,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      children: /* @__PURE__ */ n.jsx(zi, { ...s })
    },
    o
  )) }) });
}, Wi = be.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: r,
    onSort: a,
    selectedRowIndex: s,
    onRowSelect: o,
    id: i,
    testId: l,
    ariaLabel: c,
    ariaLabelledby: h,
    ariaDescribedby: u,
    className: p,
    tableClassName: g,
    bordered: v = !1,
    striped: B = !1,
    responsive: b = !1,
    tableType: S = "default"
  }, N) => {
    const D = se(null), F = se(null), C = se(null);
    be.useImperativeHandle(N, () => D.current, []);
    const [A, j] = re(0), [E, y] = re(0), [x, _] = re("headers"), [f, $] = re("browse"), Q = t.length, Z = e.length, H = le(() => !r || r.length === 0 ? e : [...e].sort((P, V) => {
      for (const { key: O, direction: R } of r) {
        const d = P[O], m = V[O];
        if (d == null && m == null) continue;
        if (d == null) return 1;
        if (m == null) return -1;
        let I = 0;
        if (typeof d == "number" && typeof m == "number" ? I = d - m : I = String(d).localeCompare(String(m)), I !== 0)
          return R === "asc" ? I : -I;
      }
      return 0;
    }), [e, r]), U = K((P, V) => {
      setTimeout(() => {
        const O = D.current?.querySelector(
          `tbody tr:nth-child(${P + 1}) td:nth-child(${V + 1})`
        );
        O && (O.focus(), typeof O.scrollIntoView == "function" && O.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), J = K((P) => {
      setTimeout(() => {
        const V = D.current?.querySelector(`th:nth-child(${P + 1})`);
        V && (V.focus(), typeof V.scrollIntoView == "function" && V.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ne = K((P) => {
      a?.(P);
    }, [a]), X = K((P) => {
      o?.(P);
    }, [o]), T = K((P) => {
      const { key: V } = P;
      switch (V) {
        case "Enter":
          if (P.preventDefault(), x === "headers" && f === "browse")
            $("navigate"), J(E);
          else if (x === "headers" && f === "navigate") {
            const O = t[E];
            O && ne(O.key);
          } else x === "cells" && f === "browse" ? ($("navigate"), U(A, E)) : x === "cells" && f === "navigate" && X(A);
          break;
        case "Escape":
          P.preventDefault(), (x === "headers" && f === "navigate" || x === "cells" && f === "navigate") && $("browse");
          break;
        case "ArrowLeft":
          if (P.preventDefault(), f === "navigate" || f === "browse" && x === "headers") {
            if (x === "headers") {
              const O = Math.max(0, E - 1);
              y(O), J(O);
            } else if (x === "cells") {
              const O = Math.max(0, E - 1);
              y(O), U(A, O);
            }
          }
          break;
        case "ArrowRight":
          if (P.preventDefault(), f === "navigate" || f === "browse" && x === "headers") {
            if (x === "headers") {
              const O = Math.min(Q - 1, E + 1);
              y(O), J(O);
            } else if (x === "cells") {
              const O = Math.min(Q - 1, E + 1);
              y(O), U(A, O);
            }
          }
          break;
        case "ArrowUp":
          if (P.preventDefault(), x === "cells") {
            if (f === "browse") {
              const O = Math.max(0, A - 1);
              j(O), U(O, 0), y(0);
            } else if (f === "navigate")
              if (A > 0) {
                const O = A - 1;
                j(O), U(O, E);
              } else
                _("headers"), $("browse"), J(E);
          }
          break;
        case "ArrowDown":
          if (P.preventDefault(), x === "headers" && f === "browse")
            _("cells"), j(0), y(0), U(0, 0);
          else if (x === "cells") {
            const O = Z - 1;
            if (f === "browse") {
              const R = Math.min(O, A + 1);
              j(R), U(R, 0), y(0);
            } else if (f === "navigate" && A < O) {
              const R = A + 1;
              j(R), U(R, E);
            }
          }
          break;
        case "Home":
          P.preventDefault(), x === "headers" ? (y(0), J(0)) : x === "cells" && (P.ctrlKey ? (j(0), y(0), U(0, 0)) : (y(0), U(A, 0)));
          break;
        case "End":
          if (P.preventDefault(), x === "headers") {
            const O = Q - 1;
            y(O), J(O);
          } else if (x === "cells")
            if (P.ctrlKey) {
              const O = Z - 1, R = Q - 1;
              j(O), y(R), U(O, R);
            } else {
              const O = Q - 1;
              y(O), U(A, O);
            }
          break;
        case " ":
          if (P.preventDefault(), x === "headers" && f === "navigate") {
            const O = t[E];
            O && ne(O.key);
          } else x === "cells" && f === "navigate" && X(A);
          break;
      }
    }, [
      x,
      f,
      E,
      A,
      Q,
      Z,
      t,
      U,
      J,
      ne,
      X
    ]);
    oe(() => {
      const P = D.current;
      if (P)
        return P.addEventListener("keydown", T), () => P.removeEventListener("keydown", T);
    }, [T]);
    const q = G(
      "nhsuk-table",
      g,
      {
        "nhsuk-table--responsive": b,
        "nhsuk-table--bordered": v,
        "nhsuk-table--striped": B,
        "nhsuk-table--compact": S === "compact"
      },
      p
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: D,
        className: q,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": h,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: F, role: "row", children: t.map((P, V) => {
            const O = r?.find((m) => m.key === P.key), R = !!O, d = x === "headers" && E === V;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: G("sortable-header", {
                  "sortable-header--focused": d
                }),
                role: "columnheader",
                tabIndex: d ? 0 : -1,
                onClick: () => ne(P.key),
                onKeyDown: (m) => {
                  (m.key === "Enter" || m.key === " ") && (m.preventDefault(), ne(P.key));
                },
                "aria-sort": R ? O?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: P.label }),
                  R && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((m) => m.key === P.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: O?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              P.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: C, className: "nhsuk-table__body", role: "rowgroup", children: H.map((P, V) => {
            const O = s === V, R = x === "cells" && A === V;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: G("data-row", {
                  "data-row--selected": O,
                  "data-row--focused": R
                }),
                "aria-selected": O,
                children: t.map((d, m) => {
                  const I = d.render ? d.render(P) : P[d.key], k = x === "cells" && A === V && E === m, M = () => typeof I == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: I ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: I ? "Yes" : "No" })
                  ] }) : String(I ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: G("data-cell", {
                        "data-cell--focused": k
                      }),
                      tabIndex: k ? 0 : -1,
                      onClick: () => X(V),
                      children: M()
                    },
                    d.key
                  );
                })
              },
              V
            );
          }) })
        ]
      }
    );
  }
);
Wi.displayName = "AriaDataGrid";
const Oi = ({
  sortConfig: e,
  columns: t,
  onSortChange: r,
  className: a = "",
  emptyDescription: s = "No sorting applied",
  activeDescription: o,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: c = !1,
  ariaLabel: h = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const p = se(null), g = se(null), v = se(null), B = K((x, _) => {
    c || (g.current = _, x.dataTransfer.effectAllowed = "move", x.dataTransfer.setData("text/plain", _));
  }, [c]), b = K((x, _) => {
    c || g.current === _ || (x.preventDefault(), x.dataTransfer.dropEffect = "move", v.current = _);
  }, [c]), S = K((x, _) => {
    if (c) return;
    x.preventDefault();
    const f = g.current;
    if (!f || f === _) return;
    const $ = e.findIndex((Z) => Z.key === f), Q = e.findIndex((Z) => Z.key === _);
    if ($ !== -1 && Q !== -1) {
      const Z = [...e], [H] = Z.splice($, 1);
      Z.splice(Q, 0, H), r(Z);
    }
    g.current = null, v.current = null;
  }, [c, e, r]), N = K(() => {
    g.current = null, v.current = null;
  }, []), D = K((x) => {
    const _ = t.find((f) => f.key === x);
    return _ ? _.label : x;
  }, [t]), F = K((x) => ["red", "orange", "blue", "aqua-green", "grey"][x] || "grey", []), C = K((x) => {
    if (c) return;
    const _ = e.map(
      (f) => f.key === x ? { ...f, direction: f.direction === "asc" ? "desc" : "asc" } : f
    );
    r(_);
  }, [e, r, c]), A = K((x) => {
    if (c) return;
    const _ = e.filter((f) => f.key !== x);
    r(_);
  }, [e, r, c]), j = K(() => {
    c || r([]);
  }, [r, c]), E = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const x = e.map((_, f) => {
      const $ = _.direction === "asc" ? "ascending" : "descending";
      return `${f + 1}. ${D(_.key)} (${$})`;
    });
    if (x.length === 1)
      return `Sorted by: ${x[0]}`;
    if (x.length === 2)
      return `Sorted by: ${x.join(" and ")}`;
    {
      const _ = x.pop();
      return `Sorted by: ${x.join(", ")}, and ${_}`;
    }
  }, y = le(() => {
    const x = ["sort-description"];
    return l && x.push("sort-help"), u && x.push(u), x.join(" ");
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
        children: E()
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: p,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": h,
          "aria-describedby": y,
          children: e.map((x, _) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (f) => B(f, x.key),
              onDragOver: (f) => b(f, x.key),
              onDrop: (f) => S(f, x.key),
              onDragEnd: N,
              onClick: () => C(x.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${x.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": x.key,
              children: /* @__PURE__ */ n.jsx(
                Me,
                {
                  color: F(_),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => A(x.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${_ + 1}`, children: _ + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: D(x.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (f) => {
                          f.stopPropagation(), C(x.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${D(x.key)}. Currently ${x.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${x.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${x.direction}`,
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
            x.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        me,
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
    l && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function Ui(e, t) {
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
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), c = new Array(o).fill([]);
      for (let h = 0; h < Math.min(e.tabLoadingStates.length, o); h++)
        i[h] = e.tabLoadingStates[h], l[h] = e.tabErrors[h], c[h] = e.selectedRows[h];
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
const hn = Xe(
  function(t, r) {
    const {
      dataConfig: a = {},
      tabPanels: s,
      selectedIndex: o,
      onTabChange: i,
      onGlobalRowSelectionChange: l,
      ariaLabel: c,
      ariaDescription: h,
      className: u = "",
      disabled: p = !1,
      orientation: g = "horizontal",
      id: v,
      isLoading: B = !1,
      loadingComponent: b,
      error: S = null,
      errorComponent: N,
      "data-testid": D
    } = t, {
      dataComparator: F = (d, m) => JSON.stringify(d) === JSON.stringify(m),
      filterFunction: C = (d) => d,
      booleanRenderer: A = (d) => d ? "✓" : "✗"
    } = a || {}, j = o !== void 0, E = o ?? 0, [y, x] = re({
      focusArea: "tabs",
      focusedTabIndex: E,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), _ = le(() => ({
      selectedIndex: E,
      tabLoadingStates: new Array(s.length).fill(!1),
      tabErrors: new Array(s.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(s.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [E]), [f, $] = Rr(Ui, _);
    oe(() => {
      const d = f.tabLoadingStates.length, m = s.length;
      d !== m && $({ type: "ADJUST_ARRAYS", payload: { newLength: m } });
    }, [s.length]), oe(() => {
      j && $({ type: "SET_SELECTED_INDEX", payload: E });
    }, [E, j]), oe(() => {
      x((d) => ({
        ...d,
        focusArea: "tabs",
        focusedTabIndex: f.selectedIndex,
        focusedHeaderIndex: 0,
        focusedRowIndex: 0,
        focusedColumnIndex: 0,
        isGridActive: !1
      }));
    }, [f.selectedIndex]), oe(() => {
      l && l(f.globalSelectedRowData);
    }, [f.globalSelectedRowData, l]);
    const Q = K((d, m) => F(d, m), [F]), Z = K((d) => {
      d >= 0 && d < s.length && !s[d].disabled && ($({ type: "SET_SELECTED_INDEX", payload: d }), x((m) => ({
        ...m,
        focusedTabIndex: d,
        focusArea: "tabs"
      })), i?.(d));
    }, [s, i]), H = K((d) => {
      setTimeout(() => {
        const m = J.current[d], I = m?.parentElement;
        if (m && I) {
          const k = m.offsetLeft, M = m.offsetWidth, L = I.clientWidth, w = k - L / 2 + M / 2;
          try {
            I.scrollTo({
              left: Math.max(0, w),
              behavior: "smooth"
            });
          } catch {
            m.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else
          console.log("Missing elements for scroll:", { tabElement: m, tabListElement: I });
      }, 50);
    }, []), U = K((d, m) => {
      const { key: I } = d;
      switch (I) {
        case "ArrowLeft":
          d.preventDefault();
          const k = m > 0 ? m - 1 : s.length - 1;
          Z(k), H(k), J.current[k]?.focus();
          break;
        case "ArrowRight":
          d.preventDefault();
          const M = m < s.length - 1 ? m + 1 : 0;
          Z(M), H(M), J.current[M]?.focus();
          break;
        case "ArrowDown":
          d.preventDefault(), x((w) => ({
            ...w,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        case "Home":
          d.preventDefault(), Z(0), H(0), J.current[0]?.focus();
          break;
        case "End":
          d.preventDefault();
          const L = s.length - 1;
          Z(L), H(L), J.current[L]?.focus();
          break;
        case "Enter":
        case " ":
          d.preventDefault(), Z(m);
          break;
      }
    }, [s.length, Z, H]), J = se([]), ne = se([]), X = K((d, m) => {
      const I = f.sortConfig || [], k = I.find((w) => w.key === m);
      let M;
      k ? k.direction === "asc" ? M = I.map(
        (w) => w.key === m ? { ...w, direction: "desc" } : w
      ) : M = I.filter((w) => w.key !== m) : M = [...I, { key: m, direction: "asc" }], $({
        type: "SET_SORT",
        payload: M
      }), s[d].onSort?.(m);
    }, [f.sortConfig, s]), T = K((d) => {
      setTimeout(() => {
        const m = document.querySelector(
          `[data-tab-panel="${f.selectedIndex}"] th:nth-child(${d + 1})`
        );
        m && m.focus();
      }, 0);
    }, [f.selectedIndex]), q = K((d) => A(d), [A]), P = K((d, m) => {
      setTimeout(() => {
        const I = document.querySelector(
          `[data-tab-panel="${f.selectedIndex}"] tbody tr:nth-child(${d + 1}) td:nth-child(${m + 1})`
        );
        I && I.focus();
      }, 0);
    }, [f.selectedIndex]);
    oe(() => {
      y.isGridActive && (y.focusArea === "headers" ? setTimeout(() => {
        T(y.focusedHeaderIndex);
      }, 0) : y.focusArea === "cells" && setTimeout(() => {
        P(y.focusedRowIndex, y.focusedColumnIndex);
      }, 0));
    }, [y.focusArea, y.isGridActive, y.focusedHeaderIndex, y.focusedRowIndex, y.focusedColumnIndex, T, P]), oe(() => {
      H(f.selectedIndex);
    }, [f.selectedIndex, H]);
    const V = K((d, m) => {
      const { key: I } = d, k = s[f.selectedIndex], M = k?.columns.length || 0;
      switch (I) {
        case "ArrowLeft":
          d.preventDefault();
          const L = Math.max(0, m - 1);
          x((te) => ({ ...te, focusedHeaderIndex: L })), T(L);
          break;
        case "ArrowRight":
          d.preventDefault();
          const w = Math.min(M - 1, m + 1);
          x((te) => ({ ...te, focusedHeaderIndex: w })), T(w);
          break;
        case "ArrowUp":
          d.preventDefault(), x((te) => ({
            ...te,
            focusArea: "tabs",
            focusedTabIndex: f.selectedIndex
          })), H(f.selectedIndex), J.current[f.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          d.preventDefault(), x((te) => ({
            ...te,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: m,
            isGridActive: !0
          }));
          break;
        case "Home":
          d.preventDefault(), x((te) => ({ ...te, focusedHeaderIndex: 0 })), T(0);
          break;
        case "End":
          d.preventDefault();
          const Y = M - 1;
          x((te) => ({ ...te, focusedHeaderIndex: Y })), T(Y);
          break;
        case "Enter":
        case " ":
          d.preventDefault();
          const W = k?.columns[m]?.key;
          W && X(f.selectedIndex, W);
          break;
      }
    }, [s, f.selectedIndex, X, x, T, P, J]), O = K((d, m, I) => {
      const { key: k } = d, M = s[f.selectedIndex], L = M?.data.length || 0, w = M?.columns.length || 0;
      switch (k) {
        case "ArrowUp":
          if (d.preventDefault(), m === 0)
            x((z) => ({
              ...z,
              focusArea: "headers",
              focusedHeaderIndex: I,
              isGridActive: !1
            })), T(I);
          else {
            const z = m - 1;
            x((ee) => ({ ...ee, focusedRowIndex: z })), P(z, I);
          }
          break;
        case "ArrowDown":
          d.preventDefault();
          const Y = Math.min(L - 1, m + 1);
          x((z) => ({ ...z, focusedRowIndex: Y })), P(Y, I);
          break;
        case "ArrowLeft":
          d.preventDefault();
          const W = Math.max(0, I - 1);
          x((z) => ({ ...z, focusedColumnIndex: W })), P(m, W);
          break;
        case "ArrowRight":
          d.preventDefault();
          const te = Math.min(w - 1, I + 1);
          x((z) => ({ ...z, focusedColumnIndex: te })), P(m, te);
          break;
        case "Home":
          d.preventDefault(), d.ctrlKey ? (x((z) => ({ ...z, focusedRowIndex: 0, focusedColumnIndex: 0 })), P(0, 0)) : (x((z) => ({ ...z, focusedColumnIndex: 0 })), P(m, 0));
          break;
        case "End":
          if (d.preventDefault(), d.ctrlKey) {
            const z = L - 1, ee = w - 1;
            x((ce) => ({ ...ce, focusedRowIndex: z, focusedColumnIndex: ee })), P(z, ee);
          } else {
            const z = w - 1;
            x((ee) => ({ ...ee, focusedColumnIndex: z })), P(m, z);
          }
          break;
        case "Enter":
        case " ":
          if (d.preventDefault(), M && M.data[m]) {
            const z = M.data.some((ie) => "ews_data" in ie) ? C(M.data, f.filters) : M.data, ee = f.sortConfig;
            let ce = z;
            if (ee && ee.length > 0 && (ce = [...z].sort((ie, ge) => {
              for (const { key: _e, direction: Ae } of ee) {
                let ke = ie[_e], Ge = ge[_e];
                const Jt = M.columns.find((Ka) => Ka.key === _e);
                if (Jt?.render && (ke = Jt.render(ie), Ge = Jt.render(ge)), ke == null && Ge == null) continue;
                if (ke == null) return Ae === "asc" ? -1 : 1;
                if (Ge == null) return Ae === "asc" ? 1 : -1;
                let Qe = 0;
                if (typeof ke == "number" && typeof Ge == "number" ? Qe = ke - Ge : Qe = String(ke).localeCompare(String(Ge), void 0, { numeric: !0, sensitivity: "base" }), Qe !== 0)
                  return Ae === "asc" ? Qe : -Qe;
              }
              return 0;
            })), ce[m]) {
              const ie = ce[m], _e = f.globalSelectedRowData && Q(f.globalSelectedRowData, ie) ? null : ie;
              $({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: _e
              });
            }
          }
          break;
      }
    }, [s, f.selectedIndex, f.filters, f.sortConfig, C, Q, $, x, T, P]), R = K((d, m) => C(d, m), [C]);
    return Fr(r, () => ({
      selectTab: (d) => {
        d >= 0 && d < s.length && ($({ type: "SET_SELECTED_INDEX", payload: d }), i?.(d));
      },
      refreshData: (d) => {
        console.log("Refreshing data for tab:", d ?? "all");
      },
      exportData: (d) => {
        const m = d ?? f.selectedIndex, I = s[m];
        return I ? I.data : [];
      },
      getSelectedRows: (d) => f.globalSelectedRowData ? [] : [],
      clearSelection: (d) => {
        $({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (d) => {
        $({ type: "SET_FILTERS", payload: d });
      }
    }), [f.selectedIndex, f.selectedRows, s, i]), B ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`, "data-testid": D, children: b || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : S ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`, "data-testid": D, children: N || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: S })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${g} ${u}`,
        id: v,
        "data-testid": D,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${v}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Oi,
            {
              sortConfig: f.sortConfig || [],
              columns: s.flatMap(
                (d) => d.columns.map((m) => ({ key: m.key, label: m.label }))
              ).filter(
                (d, m, I) => I.findIndex((k) => k.key === d.key) === m
                // Remove duplicates
              ),
              onSortChange: (d) => {
                $({ type: "SET_SORT", payload: d });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": `${h || ""} ${v ? `${v}-navigation-help` : ""}`.trim(),
              "aria-orientation": g,
              className: "aria-tabs-datagrid__tabs",
              children: s.map((d, m) => {
                const I = m === f.selectedIndex, k = d.disabled || p;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${d.id}`,
                    "aria-controls": `panel-${d.id}`,
                    "aria-selected": I,
                    "aria-disabled": k,
                    tabIndex: I ? 0 : -1,
                    ref: (M) => {
                      J.current[m] = M;
                    },
                    onClick: () => Z(m),
                    onKeyDown: (M) => U(M, m),
                    disabled: k,
                    className: `
				  aria-tabs-datagrid__tab
				  ${I ? "aria-tabs-datagrid__tab--selected" : ""}
				  ${k ? "aria-tabs-datagrid__tab--disabled" : ""}
				`.trim(),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: d.label }),
                      f.tabLoadingStates[m] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      f.tabErrors[m] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  d.id
                );
              })
            }
          ),
          s.map((d, m) => {
            const I = m === f.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${d.id}`,
                "aria-labelledby": `tab-${d.id}`,
                tabIndex: 0,
                hidden: !I,
                ref: (k) => {
                  ne.current[m] = k;
                },
                className: `aria-tabs-datagrid__panel ${d.className || ""}`,
                "data-tab-panel": m,
                children: I && (() => {
                  const k = d.data.some((L) => "ews_data" in L) ? R(d.data, f.filters) : d.data, M = le(() => {
                    const L = f.sortConfig;
                    return !L || L.length === 0 ? k : [...k].sort((w, Y) => {
                      for (const { key: W, direction: te } of L) {
                        let z = w[W], ee = Y[W];
                        const ce = d.columns.find((ge) => ge.key === W);
                        if (ce?.render && (z = ce.render(w), ee = ce.render(Y)), z == null && ee == null) continue;
                        if (z == null) return 1;
                        if (ee == null) return -1;
                        let ie = 0;
                        if (typeof z == "number" && typeof ee == "number" ? ie = z - ee : typeof z == "boolean" && typeof ee == "boolean" ? ie = z === ee ? 0 : z ? 1 : -1 : ie = String(z).localeCompare(String(ee), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), ie !== 0)
                          return te === "asc" ? ie : -ie;
                      }
                      return 0;
                    });
                  }, [k, f.sortConfig, d.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": d.ariaLabel,
                      "aria-describedby": d.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: d.columns.map((L, w) => {
                          const Y = f.sortConfig?.find((z) => z.key === L.key), W = !!Y, te = y.focusArea === "headers" && y.focusedHeaderIndex === w;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${te ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: te ? 0 : -1,
                              onClick: () => X(m, L.key),
                              onKeyDown: (z) => V(z, w),
                              "aria-sort": W ? Y?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: L.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${W ? `sort-indicator--${Y?.direction}` : ""}`, children: [
                                  f.sortConfig && f.sortConfig.length > 0 && f.sortConfig.findIndex((z) => z.key === L.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${f.sortConfig.findIndex((z) => z.key === L.key) + 1}`,
                                      "data-priority": f.sortConfig.findIndex((z) => z.key === L.key) + 1,
                                      title: `Sort priority: ${f.sortConfig.findIndex((z) => z.key === L.key) + 1}`,
                                      children: f.sortConfig.findIndex((z) => z.key === L.key) + 1
                                    }
                                  ),
                                  W && /* @__PURE__ */ n.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${Y?.direction}`,
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      "aria-hidden": "true",
                                      focusable: "false",
                                      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                                    }
                                  )
                                ] })
                              ] })
                            },
                            L.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: M.map((L, w) => {
                          const Y = f.globalSelectedRowData && Q(f.globalSelectedRowData, L), W = y.focusArea === "cells" && y.focusedRowIndex === w;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${Y ? "data-row--selected" : ""} ${W ? "data-row--focused" : ""}`,
                              "aria-selected": Y,
                              children: d.columns.map((te, z) => {
                                const ee = te.render ? te.render(L) : L[te.key], ce = y.focusArea === "cells" && y.focusedRowIndex === w && y.focusedColumnIndex === z, ie = () => typeof ee == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  q(ee),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ee ? "Yes" : "No" })
                                ] }) : String(ee ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${ce ? "data-cell--focused" : ""}`,
                                    tabIndex: ce ? 0 : -1,
                                    onClick: () => {
                                      const _e = f.globalSelectedRowData && Q(f.globalSelectedRowData, L) ? null : L;
                                      $({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: _e
                                      });
                                    },
                                    onKeyDown: (ge) => O(ge, w, z),
                                    children: ie()
                                  },
                                  te.key
                                );
                              })
                            },
                            w
                          );
                        }) })
                      ]
                    }
                  );
                })()
              },
              d.id
            );
          })
        ]
      }
    );
  }
), ft = {
  asc: "↑",
  desc: "↓"
}, Gi = (e) => [...e].sort((t, r) => t.priority - r.priority);
function ln(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Yi(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Vi(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function qi(e, t) {
  const r = t.find((s) => s.id === e), a = Yi(t);
  return r ? r.priority < a : !1;
}
const Lh = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: o = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: h
}) => {
  const u = le(() => Gi(e), [e]), p = K((D) => {
    if (l) return;
    const F = e.map(
      (C) => C.id === D ? { ...C, direction: C.direction === "asc" ? "desc" : "asc" } : C
    );
    t(F);
  }, [e, t, l]), g = K((D) => {
    if (l) return;
    const F = e.findIndex((A) => A.id === D);
    if (F <= 0) return;
    const C = [...e];
    [C[F], C[F - 1]] = [C[F - 1], C[F]], t(ln(C));
  }, [e, t, l]), v = K((D) => {
    if (l) return;
    const F = e.findIndex((A) => A.id === D);
    if (F >= e.length - 1 || F === -1) return;
    const C = [...e];
    [C[F], C[F + 1]] = [C[F + 1], C[F]], t(ln(C));
  }, [e, t, l]), B = K((D) => {
    if (l) return;
    const F = e.filter((C) => C.id !== D);
    t(ln(F));
  }, [e, t, l]), b = K(() => {
    l || t([]);
  }, [t, l]), S = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const D = u.map((F, C) => {
      const A = F.direction === "asc" ? "ascending" : "descending";
      return `${C + 1}. ${F.label} (${A})`;
    });
    if (D.length === 1)
      return `Sorted by: ${D[0]}`;
    if (D.length === 2)
      return `Sorted by: ${D.join(" and ")}`;
    {
      const F = D.pop();
      return `Sorted by: ${D.join(", ")}, and ${F}`;
    }
  }, N = le(() => {
    const D = ["sort-description"];
    return i && D.push("sort-help"), h && D.push(h), D.join(" ");
  }, [i, h]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: S()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: S()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": c,
        "aria-describedby": N,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((D) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Me,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => B(D.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: D.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: D.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => p(D.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${D.label}. Currently ${D.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: D.direction === "asc" ? ft.asc : ft.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g(D.id),
                          disabled: l || !Vi(D.id, e),
                          "aria-label": `Move ${D.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => v(D.id),
                          disabled: l || !qi(D.id, e),
                          "aria-label": `Move ${D.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            D.id
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      me,
      {
        variant: "secondary",
        onClick: b,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsxs("small", { children: [
      "Click ",
      ft.asc,
      "/",
      ft.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Zn = (e, t) => t.map((r) => ({
  id: r.id,
  label: r.label,
  data: r.filter ? r.filter(e) : e,
  columns: r.columns.map((a) => ({
    key: a.key,
    label: a.label,
    render: a.render
  })),
  sortConfig: r.sortConfig,
  ariaLabel: r.ariaLabel || `${r.label} Data Grid`,
  ariaDescription: r.ariaDescription || `Data grid showing ${r.label.toLowerCase()}`,
  className: r.className,
  disabled: r.disabled
})), fn = [
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
], Ki = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Zi = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Ji = (e) => {
  if (typeof e == "boolean") {
    const r = fn.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = fn.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, Xi = (e) => `${e.name}-${e.bed_name}`, Qi = () => ({
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
}), $h = (e) => {
  const t = Qi();
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
}, el = {
  dataComparator: Ki,
  filterFunction: Zi,
  booleanRenderer: Ji,
  getDataId: Xi
};
function tl(e, t) {
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
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), c = new Array(o).fill([]);
      for (let h = 0; h < Math.min(e.tabLoadingStates.length, o); h++)
        i[h] = e.tabLoadingStates[h], l[h] = e.tabErrors[h], c[h] = e.selectedRows[h];
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
function nl(e, t) {
  const [r, a] = re("cards");
  return oe(() => {
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
function rl(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badgeFields: o = [],
    hiddenFields: i = []
  } = r, l = t.find((b) => b.key === a), c = l?.render ? l.render(e) : e[a || "name"] || "Untitled", h = () => s.filter((S) => !i.includes(S) && e[S]).slice(0, 3).map((S) => {
    const N = t.find((C) => C.key === S), D = N?.render ? N.render(e) : e[S];
    return `${N?.label || S}: ${D}`;
  }).join(" • "), u = () => o.length === 0 ? null : o.filter((b) => e[b] !== void 0).map((b) => {
    const S = t.find((D) => D.key === b), N = S?.render ? S.render(e) : e[b];
    if (b === "ews_score") {
      const D = Number(N);
      return `<span class="nhsuk-tag nhsuk-tag--${D >= 7 ? "high" : D >= 3 ? "medium" : "low"} adaptive-card__ews-badge">EWS: ${N}</span>`;
    }
    return `<span class="nhsuk-tag adaptive-card__badge">${N}</span>`;
  }).join(""), p = () => e.ews_score && Number(e.ews_score) >= 7 || e.priority === "high" || e.status === "urgent" ? "primary" : "default", g = u(), v = h(), B = g ? `${v}${g ? `<div class="adaptive-card__badges">${g}</div>` : ""}` : v;
  return {
    variant: p(),
    heading: String(c),
    descriptionHtml: B,
    className: "adaptive-card adaptive-card--healthcare",
    "aria-label": `Healthcare record for ${c}`
  };
}
const Ah = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
  experimental: a = {},
  // Standard AriaTabsDataGrid props
  tabPanels: s,
  dataConfig: o,
  selectedIndex: i,
  onTabChange: l,
  ariaLabel: c = "Data grid",
  ariaDescription: h,
  orientation: u = "horizontal",
  id: p,
  disabled: g = !1,
  className: v,
  ...B
}) => {
  const b = nl(e, t), S = i !== void 0, N = i ?? 0, D = le(() => ({
    selectedIndex: N,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [N, s.length]), [F, C] = Rr(tl, D), A = se([]), j = se([]), E = se(null), [y, x] = re({
    focusArea: "tabs",
    focusedTabIndex: 0,
    focusedCardIndex: 0,
    selectedCardIndex: -1,
    isGridActive: !1,
    focusedCardElementIndex: 0,
    cardElements: [],
    isCardNavigationActive: !1,
    gridColumns: 1,
    gridRows: 1
  }), _ = K((R) => {
    if (!R.current)
      return { columns: 1, rows: 0 };
    const d = R.current, m = d.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (m.length === 0)
      return { columns: 1, rows: 0 };
    const I = d.offsetWidth, M = m[0].offsetWidth, L = Math.floor(I / M) || 1, w = Math.ceil(m.length / L);
    return { columns: L, rows: w };
  }, []), f = K((R, d) => ({
    row: Math.floor(R / d),
    col: R % d
  }), []), $ = K((R, d, m) => R * m + d, []), Q = K((R, d, m, I) => {
    const { row: k, col: M } = f(R, I);
    let L = k, w = M;
    switch (d) {
      case "up":
        L = Math.max(0, k - 1);
        break;
      case "down":
        L = Math.min(Math.floor((m - 1) / I), k + 1);
        break;
      case "left":
        w = Math.max(0, M - 1);
        break;
      case "right":
        w = Math.min(I - 1, M + 1);
        break;
    }
    const Y = $(L, w, I);
    return Math.min(Y, m - 1);
  }, [f, $]);
  oe(() => {
    y.isCardNavigationActive && y.focusedCardElementIndex >= 0 && y.cardElements.length > 0 && setTimeout(() => {
      const R = y.cardElements[y.focusedCardElementIndex];
      R && (R.element.focus(), R.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [y.isCardNavigationActive, y.focusedCardElementIndex, y.cardElements.length]), oe(() => {
    const R = () => {
      if (b === "cards" && E.current) {
        const { columns: I, rows: k } = _(E);
        x((M) => ({
          ...M,
          gridColumns: I,
          gridRows: k
        }));
      }
    }, d = setTimeout(R, 200), m = () => {
      setTimeout(R, 100);
    };
    return window.addEventListener("resize", m), () => {
      clearTimeout(d), window.removeEventListener("resize", m);
    };
  }, [b, s, _]), oe(() => {
    const R = F.tabLoadingStates.length, d = s.length;
    R !== d && C({ type: "ADJUST_ARRAYS", payload: { newLength: d } });
  }, [s.length, F.tabLoadingStates.length]), oe(() => {
    S && i !== F.selectedIndex && C({ type: "SET_SELECTED_INDEX", payload: i });
  }, [S, i, F.selectedIndex]);
  const Z = K((R) => {
    R >= 0 && R < s.length && !s[R].disabled && (C({ type: "SET_SELECTED_INDEX", payload: R }), l?.(R));
  }, [s, l]), H = K((R) => {
    console.log("Card selected:", R), C({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: R
    });
  }, []), U = K((R) => {
    const d = j.current[R];
    d && (d.focus(), d.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), J = K((R) => {
    const d = j.current[R];
    if (!d) return [];
    const m = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), I = d.querySelectorAll(m);
    return Array.from(I).map((k, M) => ({
      id: k.id || `card-${R}-element-${M}`,
      element: k,
      label: k.getAttribute("aria-label") || k.textContent?.trim() || k.getAttribute("title") || `Element ${M + 1}`,
      type: k.tagName.toLowerCase() === "button" ? "button" : k.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(k.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), ne = se(null), X = K((R) => {
    const d = ne.current;
    if (!d) return;
    const m = document.createElement("div");
    m.setAttribute("aria-live", "polite"), m.setAttribute("aria-atomic", "true"), m.className = "sr-only", m.textContent = R, d.appendChild(m), setTimeout(() => {
      d.contains(m) && d.removeChild(m);
    }, 1e3);
  }, []), T = K((R, d) => {
    const m = J(R), I = m[d];
    if (I) {
      I.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const k = `Focused on ${I.label}, ${I.type} ${d + 1} of ${m.length} within card`;
      X(k);
    }
  }, [J, X]), q = K((R) => {
    A.current[R]?.focus();
  }, []), P = K((R, d) => {
    const { key: m } = R, I = s[F.selectedIndex], k = I?.data.length || 0;
    if (m === "ArrowLeft" && R.shiftKey) {
      R.preventDefault(), R.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (m === "ArrowRight" && R.shiftKey) {
      R.preventDefault(), R.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!y.isCardNavigationActive) {
      switch (m) {
        case "ArrowUp":
          if (R.preventDefault(), d === 0)
            x((Y) => ({ ...Y, focusArea: "tabs" })), q(F.selectedIndex);
          else {
            const Y = Q(d, "up", k, y.gridColumns);
            Y !== d && (x((W) => ({ ...W, focusedCardIndex: Y })), U(Y), X(`Moved to card ${Y + 1} of ${k}`));
          }
          break;
        case "ArrowDown":
          R.preventDefault();
          const M = Q(d, "down", k, y.gridColumns);
          M !== d && (x((Y) => ({ ...Y, focusedCardIndex: M })), U(M), X(`Moved to card ${M + 1} of ${k}`));
          break;
        case "ArrowLeft":
          R.preventDefault();
          const L = Q(d, "left", k, y.gridColumns);
          L !== d ? (x((Y) => ({ ...Y, focusedCardIndex: L })), U(L), X(`Moved to card ${L + 1} of ${k}`)) : F.selectedIndex > 0 && (C({ type: "SET_SELECTED_INDEX", payload: F.selectedIndex - 1 }), x((Y) => ({ ...Y, focusArea: "tabs" })), setTimeout(() => q(F.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          R.preventDefault();
          const w = Q(d, "right", k, y.gridColumns);
          w !== d ? (x((Y) => ({ ...Y, focusedCardIndex: w })), U(w), X(`Moved to card ${w + 1} of ${k}`)) : F.selectedIndex < s.length - 1 && (C({ type: "SET_SELECTED_INDEX", payload: F.selectedIndex + 1 }), x((Y) => ({ ...Y, focusArea: "tabs" })), setTimeout(() => q(F.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (I?.data[d]) {
            R.preventDefault(), x((W) => ({
              ...W,
              selectedCardIndex: d
            }));
            const Y = J(d);
            Y.length > 0 ? (x((W) => ({
              ...W,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: Y,
              selectedCardIndex: d
              // Ensure selection is maintained
            })), X(`Card ${d + 1} selected and navigation activated. ${Y.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : X(`Card ${d + 1} selected.`);
          }
          break;
        case " ":
          if (I?.data[d]) {
            R.preventDefault(), x((W) => ({
              ...W,
              selectedCardIndex: W.selectedCardIndex === d ? -1 : d
            }));
            const Y = y.selectedCardIndex === d;
            X(`Card ${d + 1} ${Y ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (m) {
      case "ArrowUp":
      case "ArrowLeft":
        R.preventDefault();
        const M = Math.max(0, y.focusedCardElementIndex - 1);
        x((W) => ({ ...W, focusedCardElementIndex: M })), T(d, M);
        break;
      case "ArrowDown":
      case "ArrowRight":
        R.preventDefault();
        const L = Math.min(y.cardElements.length - 1, y.focusedCardElementIndex + 1);
        x((W) => ({ ...W, focusedCardElementIndex: L })), T(d, L);
        break;
      case "Enter":
        R.preventDefault();
        const w = y.cardElements[y.focusedCardElementIndex];
        w && (w.element.click(), X(`Activated ${w.label}`));
        break;
      case " ":
        R.preventDefault();
        const Y = y.cardElements[y.focusedCardElementIndex];
        if (Y) {
          const W = new MouseEvent("dblclick", { bubbles: !0 });
          Y.element.dispatchEvent(W), X(`Double-clicked ${Y.label}`);
        }
        break;
      case "Escape":
        R.preventDefault(), x((W) => ({
          ...W,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => U(d), 0), X("Exited card navigation, returned to card level");
        break;
      case "Home":
        R.preventDefault(), y.cardElements.length > 0 && (x((W) => ({ ...W, focusedCardElementIndex: 0 })), T(d, 0));
        break;
      case "End":
        if (R.preventDefault(), y.cardElements.length > 0) {
          const W = y.cardElements.length - 1;
          x((te) => ({ ...te, focusedCardElementIndex: W })), T(d, W);
        }
        break;
    }
  }, [y, F.selectedIndex, s, H, U, q, x, J, T, X]), V = K((R) => {
    console.log("scrollTabIntoViewMobile called for index:", R);
    const d = A.current[R], m = d?.parentElement;
    if (!d || !m) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const I = d.getBoundingClientRect(), k = m.getBoundingClientRect();
    I.left >= k.left && I.right <= k.right || (console.log("Tab not visible, scrolling into view (mobile)"), d.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), O = K((R, d) => {
    if (b !== "cards")
      return;
    console.log("handleTabKeyDownWithCards called with key:", R.key, "index:", d);
    const { key: m } = R;
    switch (m) {
      case "ArrowLeft":
        R.preventDefault();
        const I = d > 0 ? d - 1 : s.length - 1;
        Z(I), x((L) => ({ ...L, focusedTabIndex: I })), A.current[I]?.focus(), V(I);
        break;
      case "ArrowRight":
        R.preventDefault();
        const k = d < s.length - 1 ? d + 1 : 0;
        Z(k), x((L) => ({ ...L, focusedTabIndex: k })), A.current[k]?.focus(), V(k);
        break;
      case "ArrowDown":
        R.preventDefault(), x((L) => ({
          ...L,
          focusArea: "cards",
          focusedCardIndex: 0
        })), U(0);
        break;
      case "Home":
        R.preventDefault(), Z(0), x((L) => ({ ...L, focusedTabIndex: 0 })), A.current[0]?.focus(), V(0);
        break;
      case "End":
        R.preventDefault();
        const M = s.length - 1;
        Z(M), x((L) => ({ ...L, focusedTabIndex: M })), A.current[M]?.focus(), V(M);
        break;
      case "Enter":
      case " ":
        R.preventDefault(), Z(d);
        break;
    }
  }, [s.length, Z, b, U, x, V]);
  if (b === "cards") {
    const R = s[F.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${v || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": c,
          "aria-describedby": `${h || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
          "aria-orientation": u,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((d, m) => {
            const I = m === F.selectedIndex, k = d.disabled || g;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${d.id}`,
                "aria-controls": `panel-${d.id}`,
                "aria-selected": I,
                "aria-disabled": k,
                tabIndex: I ? 0 : -1,
                ref: (M) => {
                  A.current[m] = M;
                },
                onClick: () => Z(m),
                onKeyDown: (M) => O(M, m),
                disabled: k,
                className: `
				  aria-tabs-datagrid__tab
				  ${I ? "aria-tabs-datagrid__tab--selected" : ""}
				  ${k ? "aria-tabs-datagrid__tab--disabled" : ""}
				`.trim(),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: d.label }),
                  F.tabLoadingStates[m] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  F.tabErrors[m] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              d.id
            );
          })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: E,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${R?.label || "Data"} cards in ${y.gridRows} rows and ${y.gridColumns} columns`,
          "aria-rowcount": y.gridRows,
          "aria-colcount": y.gridColumns,
          id: `panel-${R?.id}`,
          "aria-labelledby": `tab-${R?.id}`,
          children: R?.data.map((d, m) => {
            const I = y.selectedCardIndex === m, k = y.focusedCardIndex === m && y.focusArea === "cards", M = y.focusedCardIndex === m && y.focusArea === "card" && y.isCardNavigationActive, L = m === 0 && y.focusArea !== "cards", w = k || L, Y = f(m, y.gridColumns);
            if (r.cardTemplate) {
              const z = r.cardTemplate(d, R.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: (ee) => {
                    j.current[m] = ee;
                  },
                  className: `
					aria-tabs-datagrid-adaptive__card-wrapper
					${I ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : ""}
					${k ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : ""}
					${M ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""}
				  `.trim(),
                  role: "gridcell",
                  "aria-rowindex": Y.row + 1,
                  "aria-colindex": Y.col + 1,
                  "aria-selected": I,
                  "aria-expanded": M,
                  "aria-description": M ? `Card navigation active. ${y.cardElements.length} interactive elements available.` : void 0,
                  tabIndex: w ? 0 : -1,
                  onClick: () => {
                    x((ee) => ({
                      ...ee,
                      selectedCardIndex: ee.selectedCardIndex === m ? -1 : m
                    })), H(d);
                  },
                  onKeyDown: (ee) => P(ee, m),
                  onFocus: () => {
                    x((ee) => ee.focusedCardIndex !== m || ee.focusArea !== "cards" ? {
                      ...ee,
                      focusedCardIndex: m,
                      focusArea: "cards"
                    } : ee);
                  },
                  children: z
                },
                `card-${m}`
              );
            }
            const W = rl(d, R.columns, r), te = `
			  ${W.className}
			  ${I ? "aria-tabs-datagrid-adaptive__card--selected" : ""}
			  ${k ? "aria-tabs-datagrid-adaptive__card--focused" : ""}
			  ${M ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""}
			`.trim();
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                className: `
				  aria-tabs-datagrid-adaptive__card-wrapper
				  ${M ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""}
				`.trim(),
                role: "gridcell",
                "aria-rowindex": Y.row + 1,
                "aria-colindex": Y.col + 1,
                children: /* @__PURE__ */ n.jsx(
                  Qr,
                  {
                    ...W,
                    ref: (z) => {
                      j.current[m] = z;
                    },
                    className: te,
                    "aria-selected": I,
                    "aria-expanded": M,
                    "aria-label": `${W["aria-label"] || W.heading}. ${M ? `Card navigation active with ${y.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                    tabIndex: w ? 0 : -1,
                    onClick: () => {
                      x((z) => ({
                        ...z,
                        selectedCardIndex: z.selectedCardIndex === m ? -1 : m
                      })), H(d);
                    },
                    onKeyDown: (z) => P(z, m),
                    onFocus: () => {
                      y.isCardNavigationActive || x((z) => z.focusedCardIndex !== m || z.focusArea !== "cards" ? {
                        ...z,
                        focusedCardIndex: m,
                        focusArea: "cards",
                        // Reset card navigation state when switching cards
                        focusedCardElementIndex: 0,
                        cardElements: []
                      } : z);
                    }
                  }
                )
              },
              `card-${m}`
            );
          })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: ne,
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
  return b === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${v || ""}`, children: /* @__PURE__ */ n.jsx(
    hn,
    {
      tabPanels: s,
      dataConfig: o,
      ariaLabel: c,
      ariaDescription: h,
      orientation: u,
      id: p,
      disabled: g,
      selectedIndex: i,
      onTabChange: l,
      className: "aria-tabs-datagrid-adaptive__table--hybrid",
      ...B
    }
  ) }) : /* @__PURE__ */ n.jsx(
    hn,
    {
      tabPanels: s,
      dataConfig: o,
      ariaLabel: c,
      ariaDescription: h,
      orientation: u,
      id: p,
      disabled: g,
      selectedIndex: i,
      onTabChange: l,
      ...B
    }
  );
}, al = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: s = "medium",
  status: o = "active"
}) => {
  const i = e.nhs_number || e.nhsNumber || e.patient_id, l = e.name || e.patient_name || `${e.first_name || ""} ${e.last_name || ""}`.trim(), c = e.dob || e.date_of_birth || e.birth_date, h = e.ward || e.location || e.current_ward, u = e.condition || e.diagnosis || e.primary_condition, p = e.alert_level || e.ews_score || e.priority_level;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${s} healthcare-card--${o}`,
      onClick: () => r?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${l}, NHS number ${i}`,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__patient-name", children: l }),
            /* @__PURE__ */ n.jsxs("p", { className: "healthcare-card__nhs-number", children: [
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__label", children: "NHS:" }),
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__value", children: i })
            ] })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
            p && /* @__PURE__ */ n.jsxs(
              Me,
              {
                color: cl(ea(p)),
                className: "healthcare-card__alert",
                children: [
                  "EWS: ",
                  p
                ]
              }
            ),
            s === "high" && /* @__PURE__ */ n.jsx(
              Me,
              {
                color: ul(s),
                className: "healthcare-card__priority",
                children: "High Priority"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("dl", { className: "healthcare-card__details", children: [
          c && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "DOB" }),
            /* @__PURE__ */ n.jsxs("dd", { children: [
              hl(c),
              " (",
              fl(c),
              "y)"
            ] })
          ] }),
          h && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Ward" }),
            /* @__PURE__ */ n.jsx("dd", { children: h })
          ] }),
          u && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Condition" }),
            /* @__PURE__ */ n.jsx("dd", { children: u })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (g) => {
                g.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (g) => {
                g.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            me,
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
}, sl = ({
  data: e,
  onSelect: t,
  onAction: r,
  status: a = "pending"
}) => {
  const s = e.appointment_time || e.time || e.scheduled_time, o = e.patient_name || e.name, i = e.appointment_type || e.type || e.service, l = e.consultant || e.doctor || e.practitioner, c = e.room || e.location || e.clinic, h = e.duration || e.estimated_duration;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--appointment healthcare-card--${a}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: Jn(s) }),
            /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: i })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
            /* @__PURE__ */ n.jsx(
              Me,
              {
                color: dl(a),
                className: "healthcare-card__status",
                children: a.charAt(0).toUpperCase() + a.slice(1)
              }
            ),
            h && /* @__PURE__ */ n.jsxs(
              Me,
              {
                color: "blue",
                className: "healthcare-card__duration",
                children: [
                  h,
                  " min"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("dl", { className: "healthcare-card__details", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Patient" }),
            /* @__PURE__ */ n.jsx("dd", { children: o })
          ] }),
          l && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ n.jsx("dd", { children: l })
          ] }),
          c && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Location" }),
            /* @__PURE__ */ n.jsx("dd", { children: c })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (u) => {
                u.stopPropagation(), r?.("reschedule", e);
              },
              children: "Reschedule"
            }
          ),
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (u) => {
                u.stopPropagation(), r?.("check-in", e);
              },
              children: "Check In"
            }
          )
        ] })
      ]
    }
  );
}, ol = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const s = e.medication || e.drug_name || e.name, o = e.dose || e.dosage || e.amount, i = e.frequency || e.schedule, l = e.route || e.administration_route, c = e.next_due || e.next_administration, h = e.prescriber || e.doctor, u = e.allergies || e.contraindications;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--medication healthcare-card--${a}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__medication-info", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__medication-name", children: s }),
            /* @__PURE__ */ n.jsxs("p", { className: "healthcare-card__dose", children: [
              o,
              " - ",
              i
            ] })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
            l && /* @__PURE__ */ n.jsx(
              Me,
              {
                color: "blue",
                className: "healthcare-card__route",
                children: l
              }
            ),
            u && /* @__PURE__ */ n.jsx(
              Me,
              {
                color: "red",
                className: "healthcare-card__warning",
                children: "⚠️ Allergies"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("dl", { className: "healthcare-card__details", children: [
          c && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--urgent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Next Due" }),
            /* @__PURE__ */ n.jsx("dd", { children: Jn(c) })
          ] }),
          h && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Prescriber" }),
            /* @__PURE__ */ n.jsx("dd", { children: h })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), r?.("view-history", e);
              },
              children: "History"
            }
          ),
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (p) => {
                p.stopPropagation(), r?.("administer", e);
              },
              children: "Administer"
            }
          )
        ] })
      ]
    }
  );
}, il = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const s = e.temperature || e.temp, o = e.blood_pressure || e.bp || `${e.systolic}/${e.diastolic}`, i = e.heart_rate || e.pulse || e.hr, l = e.respiratory_rate || e.resp_rate || e.rr, c = e.oxygen_saturation || e.spo2 || e.o2_sat, h = e.ews_score || e.news_score || e.alert_score, u = e.recorded_time || e.timestamp || e.time;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--vitals healthcare-card--${a}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__header", children: /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vitals-summary", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__timestamp", children: Jn(u) }),
          h && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${ll(h)}`, children: [
            "EWS: ",
            h
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vitals-grid", children: [
          s && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Temp" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              s,
              "°C"
            ] })
          ] }),
          o && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "BP" }),
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-value", children: o })
          ] }),
          i && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "HR" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              i,
              " bpm"
            ] })
          ] }),
          l && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "RR" }),
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-value", children: l })
          ] }),
          c && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "SpO₂" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              c,
              "%"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            me,
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
            me,
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
function ea(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function ll(e) {
  return ea(e);
}
function cl(e) {
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
function dl(e) {
  switch (e) {
    case "active":
      return "green";
    case "pending":
      return "orange";
    case "completed":
      return "aqua-green";
    case "cancelled":
      return "grey";
    default:
      return "default";
  }
}
function ul(e) {
  switch (e) {
    case "high":
      return "red";
    case "medium":
      return "orange";
    case "low":
      return "grey";
    default:
      return "default";
  }
}
function hl(e) {
  try {
    return new Date(e).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  } catch {
    return e;
  }
}
function Jn(e) {
  try {
    return new Date(e).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return e;
  }
}
function fl(e) {
  try {
    const t = new Date(e), r = /* @__PURE__ */ new Date();
    let a = r.getFullYear() - t.getFullYear();
    const s = r.getMonth() - t.getMonth();
    return (s < 0 || s === 0 && r.getDate() < t.getDate()) && a--, a;
  } catch {
    return 0;
  }
}
const ta = (e) => {
  const t = fn.find((r) => r.value === e);
  return t ? t.icon : null;
}, ml = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = r.discountedPrice || r.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => ta(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, pl = (e) => Zn(e, [
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
]), gl = {
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
  booleanRenderer: (e) => ta(e),
  getDataId: (e) => `financial-${e.id}`
}, bl = (e) => Zn(e, [
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
]), xl = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: ml,
    createTabs: pl
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: gl,
    createTabs: bl
  }
}, jr = (e, t) => {
  const r = xl[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, na = [
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
], yl = [
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
], _l = [
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
], kl = [
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
], Nr = [
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
], Tr = [
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
], Dr = [
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
], vl = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, wl = () => [
  {
    id: "patients",
    label: "Patients",
    data: na,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      al,
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
    data: yl,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      sl,
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
    data: _l,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ol,
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
    data: kl,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      il,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Sl = () => {
  const [e, t] = re("healthcare"), r = le(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: el,
      tabPanels: wl(),
      data: na
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...jr("ecommerce", Nr),
      data: Nr
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...jr("financial", Tr),
      data: Tr
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: vl,
      tabPanels: Zn(Dr, [
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
      data: Dr
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
        me,
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
      hn,
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
}, Hh = Sl, ra = (e) => /* @__PURE__ */ n.jsx(Mr, { ...e }), Ph = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: s,
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  service: c,
  navigation: h,
  search: u,
  account: p,
  organisation: g,
  logo: v,
  className: B,
  ...b
}) => {
  const S = {
    service: c,
    navigation: h,
    search: u,
    account: p,
    organisation: g,
    logo: v,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Xr, { ...o }),
    /* @__PURE__ */ n.jsx(Hr, { ...S }),
    /* @__PURE__ */ n.jsx(ra, { className: B, ...b, children: /* @__PURE__ */ n.jsx(Er, { size: s, children: /* @__PURE__ */ n.jsx(pt, { children: /* @__PURE__ */ n.jsxs(Pn, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Ee, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Pr, { ...l })
  ] });
}, zh = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: s = "small",
  // Default to small size for transactional forms
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  backLinkProps: c,
  serviceName: h,
  serviceHref: u,
  logo: p,
  className: g,
  ...v
}) => {
  const B = {
    service: {
      text: h,
      href: u
    },
    logo: p,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Xr, { ...o }),
    /* @__PURE__ */ n.jsx(Hr, { ...B }),
    /* @__PURE__ */ n.jsxs(ra, { className: g, ...v, children: [
      c && /* @__PURE__ */ n.jsx(is, { ...c }),
      /* @__PURE__ */ n.jsx(Er, { size: s, children: /* @__PURE__ */ n.jsx(pt, { children: /* @__PURE__ */ n.jsxs(Pn, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Ee, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Pr, { ...l })
  ] });
}, Cl = "150ms", jl = "300ms", Nl = "500ms", Tl = "cubic-bezier(0.4, 0, 1, 1)", Dl = "cubic-bezier(0, 0, 0.2, 1)", Bl = "cubic-bezier(0.4, 0, 0.2, 1)", Fl = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Rl = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Il = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ml = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", El = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Ll = "1px", $l = "2px", Al = "4px", Hl = "4px", Pl = "4px", zl = "2px", Wl = "1px", Ol = "0px", Ul = "4px", Gl = "8px", Yl = "12px", aa = "#d8dde0", sa = "#4c6272", oa = "#d8dde0", ia = "#aeb7bd", la = "#d5281b", ca = "#005eb8", da = "#ffffff", ua = "#212b32", ha = "#007f3b", fa = "#330072", ma = "#7c2855", pa = "#d5281b", ga = "#ffeb3b", ba = "#fff9c4", xa = "#ffb81c", ya = "#ed8b00", _a = "#00a499", ka = "#ae2573", va = "#4c6272", wa = "#768692", Sa = "#aeb7bd", Ca = "#d8dde0", ja = "#f0f4f5", Vl = "#212b32", ql = "#4c6272", Kl = "#ffffff", Zl = "#212b32", Jl = "#005eb8", Xl = "#7c2855", Ql = "#003087", ec = "#330072", tc = "#ffeb3b", nc = "#212b32", rc = "#d8dde0", ac = "#ffffff33", sc = "#d5281b", oc = "#4c6272", ic = "#ffffff", lc = "#007f3b", cc = "#ffffff", dc = "#006530", uc = "#004021", hc = "#004021", fc = "#00000000", mc = "#ffffff", pc = "#005eb8", gc = "#005eb8", bc = "#d9e5f2", xc = "#c7daf0", yc = "#005eb8", _c = "#ffffff", kc = "#212b32", vc = "#d9dde0", wc = "#b3bcc2", Sc = "#b3bcc2", Cc = "#d5281b", jc = "#aa2016", Nc = "#6a140e", Tc = "#6a140e", Dc = "#005eb8", Bc = "#004b93", Fc = "#002f5c", Rc = "#002f5c", Ic = "8px", Mc = "16px", Ec = "12px", Lc = "16px", $c = "4px", Ac = "40px", Hc = "4px", Pc = "40px", zc = "12px", Wc = "16px", Oc = "32px", Uc = "16px", Gc = "20px", Yc = "28px", Vc = "9px", qc = "2px", Kc = "16px", Zc = "24px", Jc = "8px", Xc = "24px", Qc = "16px", ed = "4px", td = "4px", nd = "4px", rd = "8px", ad = "4px", sd = "16px", od = "#007f3b", id = "#006530", ld = "#004021", cd = "#d8dde0", dd = "#ffffff", ud = "#768692", hd = "#00000000", fd = "#ffeb3b", md = "#00000000", pd = "#ffffff", gd = "#d9e5f2", bd = "#c7daf0", xd = "#005eb8", yd = "#005eb8", Na = "8px", Ta = "16px", Da = "12px", Ba = "16px", _d = "2px", kd = "4px", vd = "4px", wd = "600", Sd = "#ffffff", Cd = "#d8dde0", jd = "#aeb7bd", Nd = "#f0f4f5", Td = "#212b32", Dd = "#212b32", Bd = "#005eb8", Fa = "16px", Ra = "32px", Ia = "16px", Fd = "1px", Rd = "4px", Id = "none", Md = "0 2px 4px rgba(0, 0, 0, 0.1)", Ed = "#ffffff", Ld = "#ffffff", $d = "#d8dde0", Ad = "#ffffff", Hd = "#4c6272", Pd = "#ffeb3b", zd = "#d5281b", Wd = "#aeb7bd", Od = "#212b32", Ud = "#4c6272", Gd = "#768692", Yd = "#212b32", Vd = "#ffffff", qd = "600", Kd = "#d5281b", Zd = "600", Jd = "#4c6272", Ma = "4px", Ea = "40px", La = "40px", $a = "12px", Xd = "2px", Qd = "4px", eu = "0px", tu = "16px", nu = "18px", ru = "24px", au = "32px", su = "34px", ou = "32px", iu = "40px", lu = "48px", cu = "5.4ex", du = "7.2ex", uu = "9ex", hu = "10.8ex", fu = "20ex", mu = "38ex", pu = "56ex", gu = "44px", bu = "40px", xu = "1020px", yu = "100%", _u = "50%", ku = "33.333%", vu = "25%", wu = "20%", Su = "320px", Cu = "641px", ju = "1025px", Nu = "1280px", Tu = "960px", Du = "32px", Bu = "16px", Fu = "#d5281b", Ru = "#d5281b", Iu = "#ffffff", Mu = "#007f3b", Eu = "#007f3b", Lu = "#ffffff", $u = "#ffeb3b", Au = "#ffeb3b", Hu = "#212b32", Pu = "#005eb8", zu = "#005eb8", Wu = "#ffffff", Ou = "#d8dde0", Uu = "#aeb7bd", Gu = "#768692", Yu = "0 4px 0 #004021", Vu = "0 4px 0 #005eb8", qu = "0 4px 0 #6a140e", Ku = "0 4px 0 #ffeb3b", Zu = "none", Ju = "0 2px 4px rgba(0, 0, 0, 0.1)", Xu = "4px", Qu = "0px", eh = "solid", th = "0 0 0 3px #ffeb3b", nh = "0 0 0 3px #ffeb3b", rh = "none", ah = "0 1px 3px rgba(0, 0, 0, 0.12)", sh = "0 2px 6px rgba(0, 0, 0, 0.16)", oh = "0 4px 12px rgba(0, 0, 0, 0.20)", Aa = "0", Ha = "4px", Pa = "8px", za = "16px", Wa = "24px", Oa = "32px", Ua = "40px", Ga = "48px", Ya = "56px", Va = "64px", mn = "0", pn = "0", gn = "4px", bn = "4px", xn = "8px", yn = "8px", _n = "8px", kn = "16px", vn = "16px", wn = "24px", Sn = "24px", Cn = "32px", jn = "32px", Nn = "40px", Tn = "40px", Dn = "48px", Bn = "48px", Fn = "56px", Rn = "56px", In = "64px", wt = "Frutiger W01", St = "Arial, Helvetica, sans-serif", Ct = "sans-serif", jt = "400", Nt = "600", Tt = "400", Dt = "12px", Bt = "14px", Ft = "12pt", Rt = "14px", It = "16px", Mt = "12pt", Et = "16px", Lt = "19px", $t = "13pt", At = "19px", Ht = "22px", Pt = "15pt", zt = "22px", Wt = "26px", Ot = "17pt", Ut = "27px", Gt = "36px", Yt = "20pt", Vt = "33px", qt = "48px", Kt = "24pt", Mn = "16px", En = "24px", ve = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, we = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Se = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ce = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, je = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ne = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Te = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, De = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Be = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Fe = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, ih = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Cl,
  AnimationDurationNormal: jl,
  AnimationDurationSlow: Nl,
  AnimationEasingBounce: Fl,
  AnimationEasingEaseIn: Tl,
  AnimationEasingEaseInOut: Bl,
  AnimationEasingEaseOut: Dl,
  BorderColorCard: oa,
  BorderColorCardHover: ia,
  BorderColorDefault: aa,
  BorderColorError: la,
  BorderColorForm: sa,
  BorderRadiusLarge: Yl,
  BorderRadiusMedium: Gl,
  BorderRadiusNone: Ol,
  BorderRadiusSmall: Ul,
  BorderWidthCardBottom: Hl,
  BorderWidthDefault: Ll,
  BorderWidthFormElement: $l,
  BorderWidthFormElementError: Al,
  BorderWidthPanel: Pl,
  BorderWidthTableCell: Wl,
  BorderWidthTableHeader: zl,
  BreakpointDesktop: ju,
  BreakpointLargeDesktop: Nu,
  BreakpointMobile: Su,
  BreakpointTablet: Cu,
  ButtonBorderRadius: kd,
  ButtonBorderWidth: _d,
  ButtonPrimaryBackgroundActive: ld,
  ButtonPrimaryBackgroundDefault: od,
  ButtonPrimaryBackgroundDisabled: cd,
  ButtonPrimaryBackgroundHover: id,
  ButtonPrimaryBorderDefault: hd,
  ButtonPrimaryBorderFocus: fd,
  ButtonPrimaryTextDefault: dd,
  ButtonPrimaryTextDisabled: ud,
  ButtonSecondaryBackgroundActive: bd,
  ButtonSecondaryBackgroundDefault: md,
  ButtonSecondaryBackgroundHover: gd,
  ButtonSecondaryBackgroundSolid: pd,
  ButtonSecondaryBorderDefault: yd,
  ButtonSecondaryTextDefault: xd,
  ButtonShadowSize: vd,
  ButtonSpacingPaddingHorizontalDesktop: Ba,
  ButtonSpacingPaddingHorizontalMobile: Ta,
  ButtonSpacingPaddingVerticalDesktop: Da,
  ButtonSpacingPaddingVerticalMobile: Na,
  ButtonTypographyWeight: wd,
  CardBackgroundDefault: Sd,
  CardBorderBottom: Nd,
  CardBorderDefault: Cd,
  CardBorderHover: jd,
  CardBorderWidthBottom: Rd,
  CardBorderWidthDefault: Fd,
  CardShadowDefault: Id,
  CardShadowHover: Md,
  CardSpacingHeadingMargin: Ia,
  CardSpacingPaddingDesktop: Ra,
  CardSpacingPaddingMobile: Fa,
  CardTextDescription: Dd,
  CardTextHeading: Td,
  CardTextLink: Bd,
  ColorBorderDefault: rc,
  ColorBorderSecondary: ac,
  ColorButtonLoginActive: Fc,
  ColorButtonLoginBackground: Dc,
  ColorButtonLoginHover: Bc,
  ColorButtonLoginShadow: Rc,
  ColorButtonPrimaryActive: uc,
  ColorButtonPrimaryBackground: lc,
  ColorButtonPrimaryHover: dc,
  ColorButtonPrimaryShadow: hc,
  ColorButtonPrimaryText: cc,
  ColorButtonReverseActive: wc,
  ColorButtonReverseBackground: _c,
  ColorButtonReverseHover: vc,
  ColorButtonReverseShadow: Sc,
  ColorButtonReverseText: kc,
  ColorButtonSecondaryActive: xc,
  ColorButtonSecondaryBackground: fc,
  ColorButtonSecondaryBackgroundSolid: mc,
  ColorButtonSecondaryBorder: pc,
  ColorButtonSecondaryHover: bc,
  ColorButtonSecondaryShadow: yc,
  ColorButtonSecondaryText: gc,
  ColorButtonWarningActive: Nc,
  ColorButtonWarningBackground: Cc,
  ColorButtonWarningHover: jc,
  ColorButtonWarningShadow: Tc,
  ColorError: sc,
  ColorFocusBackground: tc,
  ColorFocusText: nc,
  ColorFormBackground: ic,
  ColorFormBorder: oc,
  ColorGrey1: va,
  ColorGrey2: wa,
  ColorGrey3: Sa,
  ColorGrey4: Ca,
  ColorGrey5: ja,
  ColorLinkActive: Ql,
  ColorLinkDefault: Jl,
  ColorLinkHover: Xl,
  ColorLinkVisited: ec,
  ColorPrimaryBlack: ua,
  ColorPrimaryBlue: ca,
  ColorPrimaryDarkPink: ma,
  ColorPrimaryGreen: ha,
  ColorPrimaryPurple: fa,
  ColorPrimaryRed: pa,
  ColorPrimaryWhite: da,
  ColorPrimaryYellow: ga,
  ColorSecondaryAquaGreen: _a,
  ColorSecondaryOrange: ya,
  ColorSecondaryPaleYellow: ba,
  ColorSecondaryPink: ka,
  ColorSecondaryWarmYellow: xa,
  ColorTextPrimary: Vl,
  ColorTextPrint: Zl,
  ColorTextReverse: Kl,
  ColorTextSecondary: ql,
  ComponentBlur: td,
  ComponentBreadcrumbChevronMarginLeft: Vc,
  ComponentBreadcrumbChevronMarginRight: qc,
  ComponentBreadcrumbPaddingTopDesktop: Zc,
  ComponentBreadcrumbPaddingTopMobile: Kc,
  ComponentButtonPaddingDesktopHorizontal: Lc,
  ComponentButtonPaddingDesktopVertical: Ec,
  ComponentButtonPaddingMobileHorizontal: Mc,
  ComponentButtonPaddingMobileVertical: Ic,
  ComponentButtonShadowSize: $c,
  ComponentCardHeadingMargin: Uc,
  ComponentCardPaddingDesktop: Oc,
  ComponentCardPaddingMobile: Wc,
  ComponentDetails: rd,
  ComponentExpander: ad,
  ComponentFormCheckboxLabelPadding: zc,
  ComponentFormCheckboxSize: Pc,
  ComponentFormInputMinHeight: Ac,
  ComponentFormInputPadding: Hc,
  ComponentLink: nd,
  ComponentPagination: sd,
  ComponentPanelPaddingDesktop: Yc,
  ComponentPanelPaddingMobile: Gc,
  ComponentSpread: ed,
  ComponentSummaryListCellPaddingHorizontal: Xc,
  ComponentSummaryListCellPaddingVertical: Jc,
  ComponentSummaryListRowMargin: Qc,
  ElevationHigh: oh,
  ElevationLow: ah,
  ElevationMedium: sh,
  ElevationNone: rh,
  FocusOutlineOffset: Qu,
  FocusOutlineStyle: eh,
  FocusOutlineWidth: Xu,
  FocusShadowButton: nh,
  FocusShadowInput: th,
  FontFamilyBase: wt,
  FontFamilyFallback: St,
  FontFamilyPrint: Ct,
  FontLineHeightBase: En,
  FontSize14Mobile: Dt,
  FontSize14Print: Ft,
  FontSize14Tablet: Bt,
  FontSize16Mobile: Rt,
  FontSize16Print: Mt,
  FontSize16Tablet: It,
  FontSize19Mobile: Et,
  FontSize19Print: $t,
  FontSize19Tablet: Lt,
  FontSize22Mobile: At,
  FontSize22Print: Pt,
  FontSize22Tablet: Ht,
  FontSize26Mobile: zt,
  FontSize26Print: Ot,
  FontSize26Tablet: Wt,
  FontSize36Mobile: Ut,
  FontSize36Print: Yt,
  FontSize36Tablet: Gt,
  FontSize48Mobile: Vt,
  FontSize48Print: Kt,
  FontSize48Tablet: qt,
  FontSizeBase: Mn,
  FontWeightBold: Nt,
  FontWeightLight: Tt,
  FontWeightNormal: jt,
  FormBorderRadius: eu,
  FormBorderWidthDefault: Xd,
  FormBorderWidthError: Qd,
  FormErrorTextDefault: Kd,
  FormErrorTypographyWeight: Zd,
  FormHintTextDefault: Jd,
  FormInputBackgroundDefault: Ed,
  FormInputBackgroundDisabled: $d,
  FormInputBackgroundError: Ad,
  FormInputBackgroundFocus: Ld,
  FormInputBorderDefault: Hd,
  FormInputBorderDisabled: Wd,
  FormInputBorderError: zd,
  FormInputBorderFocus: Pd,
  FormInputTextDefault: Od,
  FormInputTextDisabled: Gd,
  FormInputTextPlaceholder: Ud,
  FormLabelTextDefault: Yd,
  FormLabelTextRequired: Vd,
  FormLabelTypographyWeight: qd,
  FormSpacingCheckboxLabelPadding: $a,
  FormSpacingCheckboxSize: La,
  FormSpacingInputMinHeight: Ea,
  FormSpacingInputPadding: Ma,
  GridGutter: Du,
  GridGutterHalf: Bu,
  GridPageWidth: Tu,
  HeadingsNhsukHeadingL: we,
  HeadingsNhsukHeadingM: Se,
  HeadingsNhsukHeadingS: Ce,
  HeadingsNhsukHeadingXl: ve,
  HeadingsNhsukHeadingXs: je,
  LayoutColumnActions: wu,
  LayoutColumnFull: yu,
  LayoutColumnHalf: _u,
  LayoutColumnQuarter: vu,
  LayoutColumnThird: ku,
  LayoutContainerMaxWidth: xu,
  ParagraphsBody: Ne,
  ParagraphsBodyLarge: Te,
  ParagraphsBodySmall: De,
  ParagraphsLedeText: Be,
  ParagraphsLedeTextSmall: Fe,
  ShadowButtonDefault: Yu,
  ShadowButtonFocus: Ku,
  ShadowButtonSecondary: Vu,
  ShadowButtonWarning: qu,
  ShadowCardDefault: Zu,
  ShadowCardHover: Ju,
  SizeButtonMinHeightDesktop: bu,
  SizeButtonMinHeightMobile: gu,
  SizeFormControlLarge: lu,
  SizeFormControlMedium: iu,
  SizeFormControlSmall: ou,
  SizeFormInputWidth2xl: mu,
  SizeFormInputWidth3xl: pu,
  SizeFormInputWidthLg: hu,
  SizeFormInputWidthMd: uu,
  SizeFormInputWidthSm: du,
  SizeFormInputWidthXl: fu,
  SizeFormInputWidthXs: cu,
  SizeIconExtraLarge: au,
  SizeIconLarge: ru,
  SizeIconMedium: nu,
  SizeIconNhsDefault: su,
  SizeIconSmall: tu,
  Spacing0: Aa,
  Spacing1: Ha,
  Spacing2: Pa,
  Spacing3: za,
  Spacing4: Wa,
  Spacing5: Oa,
  Spacing6: Ua,
  Spacing7: Ga,
  Spacing8: Ya,
  Spacing9: Va,
  SpacingResponsive0Mobile: mn,
  SpacingResponsive0Tablet: pn,
  SpacingResponsive1Mobile: gn,
  SpacingResponsive1Tablet: bn,
  SpacingResponsive2Mobile: xn,
  SpacingResponsive2Tablet: yn,
  SpacingResponsive3Mobile: _n,
  SpacingResponsive3Tablet: kn,
  SpacingResponsive4Mobile: vn,
  SpacingResponsive4Tablet: wn,
  SpacingResponsive5Mobile: Sn,
  SpacingResponsive5Tablet: Cn,
  SpacingResponsive6Mobile: jn,
  SpacingResponsive6Tablet: Nn,
  SpacingResponsive7Mobile: Tn,
  SpacingResponsive7Tablet: Dn,
  SpacingResponsive8Mobile: Bn,
  SpacingResponsive8Tablet: Fn,
  SpacingResponsive9Mobile: Rn,
  SpacingResponsive9Tablet: In,
  StateDisabledBackground: Ou,
  StateDisabledBorder: Uu,
  StateDisabledText: Gu,
  StateErrorBackground: Fu,
  StateErrorBorder: Ru,
  StateErrorText: Iu,
  StateInfoBackground: Pu,
  StateInfoBorder: zu,
  StateInfoText: Wu,
  StateSuccessBackground: Mu,
  StateSuccessBorder: Eu,
  StateSuccessText: Lu,
  StateWarningBackground: $u,
  StateWarningBorder: Au,
  StateWarningText: Hu,
  TransitionButtonDefault: Rl,
  TransitionButtonShadow: Il,
  TransitionCardHover: El,
  TransitionInputFocus: Ml
}, Symbol.toStringTag, { value: "Module" })), Wh = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Oh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: ve.fontFamily,
      fontWeight: ve.fontWeight,
      fontSize: ve.fontSize.mobile,
      lineHeight: ve.lineHeight,
      marginTop: ve.marginTop,
      marginBottom: ve.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Uh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: we.fontFamily,
      fontWeight: we.fontWeight,
      fontSize: we.fontSize.mobile,
      lineHeight: we.lineHeight,
      marginTop: we.marginTop,
      marginBottom: we.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Gh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: Se.fontFamily,
      fontWeight: Se.fontWeight,
      fontSize: Se.fontSize.mobile,
      lineHeight: Se.lineHeight,
      marginTop: Se.marginTop,
      marginBottom: Se.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Yh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: Ce.fontFamily,
      fontWeight: Ce.fontWeight,
      fontSize: Ce.fontSize.mobile,
      lineHeight: Ce.lineHeight,
      marginTop: Ce.marginTop,
      marginBottom: Ce.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Vh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: je.fontFamily,
      fontWeight: je.fontWeight,
      fontSize: je.fontSize.mobile,
      lineHeight: je.lineHeight,
      marginTop: je.marginTop,
      marginBottom: je.marginBottom.mobile,
      ...r
    },
    children: e
  }
), qh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ne.fontFamily,
      fontWeight: Ne.fontWeight,
      fontSize: Ne.fontSize.mobile,
      lineHeight: Ne.lineHeight,
      marginTop: Ne.marginTop,
      marginBottom: Ne.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Kh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Te.fontFamily,
      fontWeight: Te.fontWeight,
      fontSize: Te.fontSize.mobile,
      lineHeight: Te.lineHeight,
      marginTop: Te.marginTop,
      marginBottom: Te.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Zh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: De.fontFamily,
      fontWeight: De.fontWeight,
      fontSize: De.fontSize.mobile,
      lineHeight: De.lineHeight,
      marginTop: De.marginTop,
      marginBottom: De.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Jh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Be.fontFamily,
      fontWeight: Be.fontWeight,
      fontSize: Be.fontSize.mobile,
      lineHeight: Be.lineHeight,
      marginTop: Be.marginTop,
      marginBottom: Be.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Xh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Fe.fontFamily,
      fontWeight: Fe.fontWeight,
      fontSize: Fe.fontSize.mobile,
      lineHeight: Fe.lineHeight,
      marginTop: Fe.marginTop,
      marginBottom: Fe.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Qh = () => le(() => ih, []), ef = () => le(() => ({
  // Border colors
  BorderColorDefault: aa,
  BorderColorForm: sa,
  BorderColorCard: oa,
  BorderColorCardHover: ia,
  BorderColorError: la,
  // Primary colors
  ColorPrimaryBlue: ca,
  ColorPrimaryWhite: da,
  ColorPrimaryBlack: ua,
  ColorPrimaryGreen: ha,
  ColorPrimaryPurple: fa,
  ColorPrimaryDarkPink: ma,
  ColorPrimaryRed: pa,
  ColorPrimaryYellow: ga,
  // Secondary colors
  ColorSecondaryPaleYellow: ba,
  ColorSecondaryWarmYellow: xa,
  ColorSecondaryOrange: ya,
  ColorSecondaryAquaGreen: _a,
  ColorSecondaryPink: ka,
  // Grey scale
  ColorGrey1: va,
  ColorGrey2: wa,
  ColorGrey3: Sa,
  ColorGrey4: Ca,
  ColorGrey5: ja
}), []), tf = () => le(() => ({
  Spacing0: Aa,
  Spacing1: Ha,
  Spacing2: Pa,
  Spacing3: za,
  Spacing4: Wa,
  Spacing5: Oa,
  Spacing6: Ua,
  Spacing7: Ga,
  Spacing8: Ya,
  Spacing9: Va
}), []), nf = () => le(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Dt,
    Size16: Rt,
    Size19: Et,
    Size22: At,
    Size26: zt,
    Size36: Ut,
    Size48: Vt
  },
  Tablet: {
    Size14: Bt,
    Size16: It,
    Size19: Lt,
    Size22: Ht,
    Size26: Wt,
    Size36: Gt,
    Size48: qt
  },
  Print: {
    Size14: Ft,
    Size16: Mt,
    Size19: $t,
    Size22: Pt,
    Size26: Ot,
    Size36: Yt,
    Size48: Kt
  },
  Family: {
    Base: wt,
    Fallback: St,
    Print: Ct
  },
  Weight: {
    Normal: jt,
    Bold: Nt,
    Light: Tt
  },
  Base: {
    Size: Mn,
    LineHeight: En
  },
  // Backward compatibility - individual exports
  FontFamilyBase: wt,
  FontFamilyFallback: St,
  FontFamilyPrint: Ct,
  FontWeightNormal: jt,
  FontWeightBold: Nt,
  FontWeightLight: Tt,
  FontSize14Mobile: Dt,
  FontSize14Tablet: Bt,
  FontSize14Print: Ft,
  FontSize16Mobile: Rt,
  FontSize16Tablet: It,
  FontSize16Print: Mt,
  FontSize19Mobile: Et,
  FontSize19Tablet: Lt,
  FontSize19Print: $t,
  FontSize22Mobile: At,
  FontSize22Tablet: Ht,
  FontSize22Print: Pt,
  FontSize26Mobile: zt,
  FontSize26Tablet: Wt,
  FontSize26Print: Ot,
  FontSize36Mobile: Ut,
  FontSize36Tablet: Gt,
  FontSize36Print: Yt,
  FontSize48Mobile: Vt,
  FontSize48Tablet: qt,
  FontSize48Print: Kt,
  FontSizeBase: Mn,
  FontLineHeightBase: En
}), []), rf = () => le(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: mn,
    Size1: gn,
    Size2: xn,
    Size3: _n,
    Size4: vn,
    Size5: Sn,
    Size6: jn,
    Size7: Tn,
    Size8: Bn,
    Size9: Rn
  },
  Tablet: {
    Size0: pn,
    Size1: bn,
    Size2: yn,
    Size3: kn,
    Size4: wn,
    Size5: Cn,
    Size6: Nn,
    Size7: Dn,
    Size8: Fn,
    Size9: In
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: mn,
  SpacingResponsive0Tablet: pn,
  SpacingResponsive1Mobile: gn,
  SpacingResponsive1Tablet: bn,
  SpacingResponsive2Mobile: xn,
  SpacingResponsive2Tablet: yn,
  SpacingResponsive3Mobile: _n,
  SpacingResponsive3Tablet: kn,
  SpacingResponsive4Mobile: vn,
  SpacingResponsive4Tablet: wn,
  SpacingResponsive5Mobile: Sn,
  SpacingResponsive5Tablet: Cn,
  SpacingResponsive6Mobile: jn,
  SpacingResponsive6Tablet: Nn,
  SpacingResponsive7Mobile: Tn,
  SpacingResponsive7Tablet: Dn,
  SpacingResponsive8Mobile: Bn,
  SpacingResponsive8Tablet: Fn,
  SpacingResponsive9Mobile: Rn,
  SpacingResponsive9Tablet: In
}), []), af = () => le(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Na,
  ButtonSpacingPaddingHorizontalMobile: Ta,
  ButtonSpacingPaddingVerticalDesktop: Da,
  ButtonSpacingPaddingHorizontalDesktop: Ba,
  // Card spacing	
  CardSpacingPaddingMobile: Fa,
  CardSpacingPaddingDesktop: Ra,
  CardSpacingHeadingMargin: Ia,
  // Form spacing
  FormSpacingInputPadding: Ma,
  FormSpacingInputMinHeight: Ea,
  FormSpacingCheckboxSize: La,
  FormSpacingCheckboxLabelPadding: $a
}), []), sf = () => le(() => ({
  xl: ve,
  l: we,
  m: Se,
  s: Ce,
  xs: je
}), []), of = () => le(() => ({
  body: Ne,
  bodyLarge: Te,
  bodySmall: De,
  ledeText: Be,
  ledeTextSmall: Fe
}), []), lf = () => le(() => ({
  headings: {
    xl: ve,
    l: we,
    m: Se,
    s: Ce,
    xs: je
  },
  paragraphs: {
    body: Ne,
    bodyLarge: Te,
    bodySmall: De,
    ledeText: Be,
    ledeTextSmall: Fe
  },
  fonts: {
    family: {
      base: wt,
      fallback: St,
      print: Ct
    },
    weight: {
      normal: jt,
      bold: Nt,
      light: Tt
    },
    sizes: {
      mobile: {
        size14: Dt,
        size16: Rt,
        size19: Et,
        size22: At,
        size26: zt,
        size36: Ut,
        size48: Vt
      },
      tablet: {
        size14: Bt,
        size16: It,
        size19: Lt,
        size22: Ht,
        size26: Wt,
        size36: Gt,
        size48: qt
      },
      print: {
        size14: Ft,
        size16: Mt,
        size19: $t,
        size22: Pt,
        size26: Ot,
        size36: Yt,
        size48: Kt
      }
    }
  }
}), []), qa = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, he = {
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
function cf(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...qa, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${he.normal.eot}?#iefix") format("eot"),
       url("${t}${he.normal.woff2}") format("woff2"),
       url("${t}${he.normal.woff}") format("woff"),
       url("${t}${he.normal.ttf}") format("truetype");
  src: url("${t}${he.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${he.bold.eot}?#iefix") format("eot"),
       url("${t}${he.bold.woff2}") format("woff2"),
       url("${t}${he.bold.woff}") format("woff"),
       url("${t}${he.bold.ttf}") format("truetype");
  src: url("${t}${he.bold.eot}");
}`), a.join(`
`);
}
function df(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...qa, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${he.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${he.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${he.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${he.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const uf = '"Frutiger W01", Arial, Helvetica, sans-serif', hf = "Arial, Helvetica, sans-serif";
async function ff() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Ln as Account,
  ch as ActionLink,
  Ah as AdaptiveDataGrid,
  Cl as AnimationDurationFast,
  jl as AnimationDurationNormal,
  Nl as AnimationDurationSlow,
  Fl as AnimationEasingBounce,
  Tl as AnimationEasingEaseIn,
  Bl as AnimationEasingEaseInOut,
  Dl as AnimationEasingEaseOut,
  sl as AppointmentCard,
  Wi as AriaDataGrid,
  hn as AriaTabsDataGrid,
  Ah as AriaTabsDataGridAdaptive,
  is as BackLink,
  oa as BorderColorCard,
  ia as BorderColorCardHover,
  aa as BorderColorDefault,
  la as BorderColorError,
  sa as BorderColorForm,
  Yl as BorderRadiusLarge,
  Gl as BorderRadiusMedium,
  Ol as BorderRadiusNone,
  Ul as BorderRadiusSmall,
  Hl as BorderWidthCardBottom,
  Ll as BorderWidthDefault,
  $l as BorderWidthFormElement,
  Al as BorderWidthFormElementError,
  Pl as BorderWidthPanel,
  Wl as BorderWidthTableCell,
  zl as BorderWidthTableHeader,
  Mi as Breadcrumb,
  ju as BreakpointDesktop,
  Nu as BreakpointLargeDesktop,
  Su as BreakpointMobile,
  Cu as BreakpointTablet,
  me as Button,
  kd as ButtonBorderRadius,
  _d as ButtonBorderWidth,
  ld as ButtonPrimaryBackgroundActive,
  od as ButtonPrimaryBackgroundDefault,
  cd as ButtonPrimaryBackgroundDisabled,
  id as ButtonPrimaryBackgroundHover,
  hd as ButtonPrimaryBorderDefault,
  fd as ButtonPrimaryBorderFocus,
  dd as ButtonPrimaryTextDefault,
  ud as ButtonPrimaryTextDisabled,
  bd as ButtonSecondaryBackgroundActive,
  md as ButtonSecondaryBackgroundDefault,
  gd as ButtonSecondaryBackgroundHover,
  pd as ButtonSecondaryBackgroundSolid,
  yd as ButtonSecondaryBorderDefault,
  xd as ButtonSecondaryTextDefault,
  vd as ButtonShadowSize,
  Ba as ButtonSpacingPaddingHorizontalDesktop,
  Ta as ButtonSpacingPaddingHorizontalMobile,
  Da as ButtonSpacingPaddingVerticalDesktop,
  Na as ButtonSpacingPaddingVerticalMobile,
  wd as ButtonTypographyWeight,
  Qr as Card,
  Sd as CardBackgroundDefault,
  Nd as CardBorderBottom,
  Cd as CardBorderDefault,
  jd as CardBorderHover,
  Rd as CardBorderWidthBottom,
  Fd as CardBorderWidthDefault,
  jh as CardGroup,
  Nh as CardGroupItem,
  Id as CardShadowDefault,
  Md as CardShadowHover,
  Ia as CardSpacingHeadingMargin,
  Ra as CardSpacingPaddingDesktop,
  Fa as CardSpacingPaddingMobile,
  Dd as CardTextDescription,
  Td as CardTextHeading,
  Bd as CardTextLink,
  Th as CareCard,
  dh as CharacterCount,
  ls as Checkbox,
  cs as Checkboxes,
  rc as ColorBorderDefault,
  ac as ColorBorderSecondary,
  Fc as ColorButtonLoginActive,
  Dc as ColorButtonLoginBackground,
  Bc as ColorButtonLoginHover,
  Rc as ColorButtonLoginShadow,
  uc as ColorButtonPrimaryActive,
  lc as ColorButtonPrimaryBackground,
  dc as ColorButtonPrimaryHover,
  hc as ColorButtonPrimaryShadow,
  cc as ColorButtonPrimaryText,
  wc as ColorButtonReverseActive,
  _c as ColorButtonReverseBackground,
  vc as ColorButtonReverseHover,
  Sc as ColorButtonReverseShadow,
  kc as ColorButtonReverseText,
  xc as ColorButtonSecondaryActive,
  fc as ColorButtonSecondaryBackground,
  mc as ColorButtonSecondaryBackgroundSolid,
  pc as ColorButtonSecondaryBorder,
  bc as ColorButtonSecondaryHover,
  yc as ColorButtonSecondaryShadow,
  gc as ColorButtonSecondaryText,
  Nc as ColorButtonWarningActive,
  Cc as ColorButtonWarningBackground,
  jc as ColorButtonWarningHover,
  Tc as ColorButtonWarningShadow,
  sc as ColorError,
  tc as ColorFocusBackground,
  nc as ColorFocusText,
  ic as ColorFormBackground,
  oc as ColorFormBorder,
  va as ColorGrey1,
  wa as ColorGrey2,
  Sa as ColorGrey3,
  Ca as ColorGrey4,
  ja as ColorGrey5,
  Ql as ColorLinkActive,
  Jl as ColorLinkDefault,
  Xl as ColorLinkHover,
  ec as ColorLinkVisited,
  ua as ColorPrimaryBlack,
  ca as ColorPrimaryBlue,
  ma as ColorPrimaryDarkPink,
  ha as ColorPrimaryGreen,
  fa as ColorPrimaryPurple,
  pa as ColorPrimaryRed,
  da as ColorPrimaryWhite,
  ga as ColorPrimaryYellow,
  _a as ColorSecondaryAquaGreen,
  ya as ColorSecondaryOrange,
  ba as ColorSecondaryPaleYellow,
  ka as ColorSecondaryPink,
  xa as ColorSecondaryWarmYellow,
  Vl as ColorTextPrimary,
  Zl as ColorTextPrint,
  Kl as ColorTextReverse,
  ql as ColorTextSecondary,
  Pn as Column,
  td as ComponentBlur,
  Vc as ComponentBreadcrumbChevronMarginLeft,
  qc as ComponentBreadcrumbChevronMarginRight,
  Zc as ComponentBreadcrumbPaddingTopDesktop,
  Kc as ComponentBreadcrumbPaddingTopMobile,
  Lc as ComponentButtonPaddingDesktopHorizontal,
  Ec as ComponentButtonPaddingDesktopVertical,
  Mc as ComponentButtonPaddingMobileHorizontal,
  Ic as ComponentButtonPaddingMobileVertical,
  $c as ComponentButtonShadowSize,
  Uc as ComponentCardHeadingMargin,
  Oc as ComponentCardPaddingDesktop,
  Wc as ComponentCardPaddingMobile,
  rd as ComponentDetails,
  ad as ComponentExpander,
  zc as ComponentFormCheckboxLabelPadding,
  Pc as ComponentFormCheckboxSize,
  Ac as ComponentFormInputMinHeight,
  Hc as ComponentFormInputPadding,
  nd as ComponentLink,
  sd as ComponentPagination,
  Yc as ComponentPanelPaddingDesktop,
  Gc as ComponentPanelPaddingMobile,
  ed as ComponentSpread,
  Xc as ComponentSummaryListCellPaddingHorizontal,
  Jc as ComponentSummaryListCellPaddingVertical,
  Qc as ComponentSummaryListRowMargin,
  Mr as Container,
  Ch as ContentsList,
  qa as DEFAULT_FONT_CONFIG,
  Eh as DashboardSummaryGrid,
  xh as DateInput,
  Li as Details,
  $i as DoDontList,
  oh as ElevationHigh,
  ah as ElevationLow,
  sh as ElevationMedium,
  rh as ElevationNone,
  nr as ErrorMessage,
  bh as ErrorSummary,
  Ai as Expander,
  he as FRUTIGER_FONT_FILES,
  Hn as Fieldset,
  Qu as FocusOutlineOffset,
  eh as FocusOutlineStyle,
  Xu as FocusOutlineWidth,
  nh as FocusShadowButton,
  th as FocusShadowInput,
  wt as FontFamilyBase,
  St as FontFamilyFallback,
  Ct as FontFamilyPrint,
  En as FontLineHeightBase,
  Dt as FontSize14Mobile,
  Ft as FontSize14Print,
  Bt as FontSize14Tablet,
  Rt as FontSize16Mobile,
  Mt as FontSize16Print,
  It as FontSize16Tablet,
  Et as FontSize19Mobile,
  $t as FontSize19Print,
  Lt as FontSize19Tablet,
  At as FontSize22Mobile,
  Pt as FontSize22Print,
  Ht as FontSize22Tablet,
  zt as FontSize26Mobile,
  Ot as FontSize26Print,
  Wt as FontSize26Tablet,
  Ut as FontSize36Mobile,
  Yt as FontSize36Print,
  Gt as FontSize36Tablet,
  Vt as FontSize48Mobile,
  Kt as FontSize48Print,
  qt as FontSize48Tablet,
  Mn as FontSizeBase,
  Nt as FontWeightBold,
  Tt as FontWeightLight,
  jt as FontWeightNormal,
  Pr as Footer,
  eu as FormBorderRadius,
  Xd as FormBorderWidthDefault,
  Qd as FormBorderWidthError,
  Kd as FormErrorTextDefault,
  Zd as FormErrorTypographyWeight,
  Jd as FormHintTextDefault,
  Ed as FormInputBackgroundDefault,
  $d as FormInputBackgroundDisabled,
  Ad as FormInputBackgroundError,
  Ld as FormInputBackgroundFocus,
  Hd as FormInputBorderDefault,
  Wd as FormInputBorderDisabled,
  zd as FormInputBorderError,
  Pd as FormInputBorderFocus,
  Od as FormInputTextDefault,
  Gd as FormInputTextDisabled,
  Ud as FormInputTextPlaceholder,
  Yd as FormLabelTextDefault,
  Vd as FormLabelTextRequired,
  qd as FormLabelTypographyWeight,
  $a as FormSpacingCheckboxLabelPadding,
  La as FormSpacingCheckboxSize,
  Ea as FormSpacingInputMinHeight,
  Ma as FormSpacingInputPadding,
  wh as GanttChart,
  ms as Grid,
  Du as GridGutter,
  Bu as GridGutterHalf,
  Tu as GridPageWidth,
  Hr as Header,
  kh as HeaderSSR,
  Ar as HeaderSearch,
  vh as HeaderStatic,
  Ee as Heading,
  we as HeadingsNhsukHeadingL,
  Se as HeadingsNhsukHeadingM,
  Ce as HeadingsNhsukHeadingS,
  ve as HeadingsNhsukHeadingXl,
  je as HeadingsNhsukHeadingXs,
  ks as Hero,
  Ir as Hint,
  Mh as Images,
  $n as Input,
  Dh as InsetText,
  An as Label,
  wu as LayoutColumnActions,
  yu as LayoutColumnFull,
  _u as LayoutColumnHalf,
  vu as LayoutColumnQuarter,
  ku as LayoutColumnThird,
  xu as LayoutContainerMaxWidth,
  bs as List,
  Er as MainWrapper,
  ol as MedicationCard,
  qh as NHSBodyText,
  Kh as NHSBodyTextLarge,
  Zh as NHSBodyTextSmall,
  Oh as NHSHeading1,
  Uh as NHSHeading2,
  Gh as NHSHeading3,
  Yh as NHSHeading4,
  Vh as NHSHeading5,
  Jh as NHSLedeText,
  Xh as NHSLedeTextSmall,
  _h as NHSThemeProvider,
  hf as NHS_FALLBACK_FONT_STACK,
  uf as NHS_FONT_STACK,
  Ph as PageTemplate,
  Sh as Pagination,
  Ei as Panel,
  Ne as ParagraphsBody,
  Te as ParagraphsBodyLarge,
  De as ParagraphsBodySmall,
  Be as ParagraphsLedeText,
  Fe as ParagraphsLedeTextSmall,
  al as PatientCard,
  uh as Radios,
  Ah as ResponsiveDataGrid,
  Hh as ResponsiveDataGridDemo,
  pt as Row,
  fs as Select,
  us as SelectOption,
  Yu as ShadowButtonDefault,
  Ku as ShadowButtonFocus,
  Vu as ShadowButtonSecondary,
  qu as ShadowButtonWarning,
  Zu as ShadowCardDefault,
  Ju as ShadowCardHover,
  bu as SizeButtonMinHeightDesktop,
  gu as SizeButtonMinHeightMobile,
  lu as SizeFormControlLarge,
  iu as SizeFormControlMedium,
  ou as SizeFormControlSmall,
  mu as SizeFormInputWidth2xl,
  pu as SizeFormInputWidth3xl,
  hu as SizeFormInputWidthLg,
  uu as SizeFormInputWidthMd,
  du as SizeFormInputWidthSm,
  fu as SizeFormInputWidthXl,
  cu as SizeFormInputWidthXs,
  au as SizeIconExtraLarge,
  ru as SizeIconLarge,
  nu as SizeIconMedium,
  su as SizeIconNhsDefault,
  tu as SizeIconSmall,
  Xr as SkipLink,
  Lh as SortStatusControl,
  Aa as Spacing0,
  Ha as Spacing1,
  Pa as Spacing2,
  za as Spacing3,
  Wa as Spacing4,
  Oa as Spacing5,
  Ua as Spacing6,
  Ga as Spacing7,
  Ya as Spacing8,
  Va as Spacing9,
  mn as SpacingResponsive0Mobile,
  pn as SpacingResponsive0Tablet,
  gn as SpacingResponsive1Mobile,
  bn as SpacingResponsive1Tablet,
  xn as SpacingResponsive2Mobile,
  yn as SpacingResponsive2Tablet,
  _n as SpacingResponsive3Mobile,
  kn as SpacingResponsive3Tablet,
  vn as SpacingResponsive4Mobile,
  wn as SpacingResponsive4Tablet,
  Sn as SpacingResponsive5Mobile,
  Cn as SpacingResponsive5Tablet,
  jn as SpacingResponsive6Mobile,
  Nn as SpacingResponsive6Tablet,
  Tn as SpacingResponsive7Mobile,
  Dn as SpacingResponsive7Tablet,
  Bn as SpacingResponsive8Mobile,
  Fn as SpacingResponsive8Tablet,
  Rn as SpacingResponsive9Mobile,
  In as SpacingResponsive9Tablet,
  hh as SpacingUtilities,
  Ou as StateDisabledBackground,
  Uu as StateDisabledBorder,
  Gu as StateDisabledText,
  Fu as StateErrorBackground,
  Ru as StateErrorBorder,
  Iu as StateErrorText,
  Pu as StateInfoBackground,
  zu as StateInfoBorder,
  Wu as StateInfoText,
  Mu as StateSuccessBackground,
  Eu as StateSuccessBorder,
  Lu as StateSuccessText,
  $u as StateWarningBackground,
  Au as StateWarningBorder,
  Hu as StateWarningText,
  zi as SummaryCard,
  Bh as SummaryList,
  Fh as Table,
  Rh as Tabs,
  Me as Tag,
  Hi as TaskList,
  ds as Textarea,
  zh as TransactionalPageTemplate,
  Rl as TransitionButtonDefault,
  Il as TransitionButtonShadow,
  El as TransitionCardHover,
  Ml as TransitionInputFocus,
  il as VitalsCard,
  gh as WIDTH_FRACTIONS,
  Ih as WarningCallout,
  ra as WidthContainer,
  mh as WidthUtilities,
  ff as checkFrutigerLoaded,
  Zn as createGenericTabsConfig,
  $h as createTCHTabsConfig,
  cf as generateFrutigerFontFace,
  Wh as getResponsiveStyles,
  fh as getSpacingClass,
  ph as getWidthClass,
  df as preloadFrutigerFonts,
  el as tchDataConfig,
  ef as useColors,
  af as useComponentSpacing,
  sf as useNHSHeadings,
  of as useNHSParagraphs,
  yh as useNHSTheme,
  lf as useNHSTypographySystem,
  rf as useResponsiveSpacing,
  tf as useSpacing,
  Qh as useTokens,
  nf as useTypography
};
//# sourceMappingURL=index.esm.js.map
