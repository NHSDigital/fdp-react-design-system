import * as Za from "react";
import be, { useState as re, useEffect as se, useCallback as q, createElement as Br, useRef as oe, useMemo as le, createContext as Ja, useContext as Xa, forwardRef as Xe, useImperativeHandle as Fr, useReducer as Rr } from "react";
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
    function e(D) {
      if (D == null) return null;
      if (typeof D == "function")
        return D.$$typeof === v ? null : D.displayName || D.name || null;
      if (typeof D == "string") return D;
      switch (D) {
        case b:
          return "Fragment";
        case T:
          return "Profiler";
        case C:
          return "StrictMode";
        case A:
          return "Suspense";
        case N:
          return "SuspenseList";
        case y:
          return "Activity";
      }
      if (typeof D == "object")
        switch (typeof D.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), D.$$typeof) {
          case R:
            return "Portal";
          case M:
            return (D.displayName || "Context") + ".Provider";
          case F:
            return (D._context.displayName || "Context") + ".Consumer";
          case j:
            var V = D.render;
            return D = D.displayName, D || (D = V.displayName || V.name || "", D = D !== "" ? "ForwardRef(" + D + ")" : "ForwardRef"), D;
          case L:
            return V = D.displayName || null, V !== null ? V : e(D.type) || "Memo";
          case _:
            V = D._payload, D = D._init;
            try {
              return e(D(V));
            } catch {
            }
        }
      return null;
    }
    function t(D) {
      return "" + D;
    }
    function r(D) {
      try {
        t(D);
        var V = !1;
      } catch {
        V = !0;
      }
      if (V) {
        V = console;
        var H = V.error, G = typeof Symbol == "function" && Symbol.toStringTag && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return H.call(
          V,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          G
        ), t(D);
      }
    }
    function a(D) {
      if (D === b) return "<>";
      if (typeof D == "object" && D !== null && D.$$typeof === _)
        return "<...>";
      try {
        var V = e(D);
        return V ? "<" + V + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var D = f.A;
      return D === null ? null : D.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(D) {
      if ($.call(D, "key")) {
        var V = Object.getOwnPropertyDescriptor(D, "key").get;
        if (V && V.isReactWarning) return !1;
      }
      return D.key !== void 0;
    }
    function l(D, V) {
      function H() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          V
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: H,
        configurable: !0
      });
    }
    function c() {
      var D = e(this.type);
      return O[D] || (O[D] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), D = this.props.ref, D !== void 0 ? D : null;
    }
    function u(D, V, H, G, k, I, h, g) {
      return H = I.ref, D = {
        $$typeof: S,
        type: D,
        key: V,
        props: I,
        _owner: k
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(D, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(D, "ref", { enumerable: !1, value: null }), D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(D, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(D, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.defineProperty(D, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    }
    function d(D, V, H, G, k, I, h, g) {
      var B = V.children;
      if (B !== void 0)
        if (G)
          if (ee(B)) {
            for (G = 0; G < B.length; G++)
              m(B[G]);
            Object.freeze && Object.freeze(B);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(B);
      if ($.call(V, "key")) {
        B = e(D);
        var w = Object.keys(V).filter(function(z) {
          return z !== "key";
        });
        G = 0 < w.length ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}", te[B + G] || (w = 0 < w.length ? "{" + w.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          G,
          B,
          w,
          B
        ), te[B + G] = !0);
      }
      if (B = null, H !== void 0 && (r(H), B = "" + H), i(V) && (r(V.key), B = "" + V.key), "key" in V) {
        H = {};
        for (var E in V)
          E !== "key" && (H[E] = V[E]);
      } else H = V;
      return B && l(
        H,
        typeof D == "function" ? D.displayName || D.name || "Unknown" : D
      ), u(
        D,
        B,
        I,
        k,
        s(),
        H,
        h,
        g
      );
    }
    function m(D) {
      typeof D == "object" && D !== null && D.$$typeof === S && D._store && (D._store.validated = 1);
    }
    var p = be, S = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), M = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), v = Symbol.for("react.client.reference"), f = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, ee = Array.isArray, Z = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(D) {
        return D();
      }
    };
    var P, O = {}, K = p.react_stack_bottom_frame.bind(
      p,
      o
    )(), X = Z(a(o)), te = {};
    tt.Fragment = b, tt.jsx = function(D, V, H, G, k) {
      var I = 1e4 > f.recentlyCreatedOwnerStacks++;
      return d(
        D,
        V,
        H,
        !1,
        G,
        k,
        I ? Error("react-stack-top-frame") : K,
        I ? Z(a(D)) : X
      );
    }, tt.jsxs = function(D, V, H, G, k) {
      var I = 1e4 > f.recentlyCreatedOwnerStacks++;
      return d(
        D,
        V,
        H,
        !0,
        G,
        k,
        I ? Error("react-stack-top-frame") : K,
        I ? Z(a(D)) : X
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
const U = /* @__PURE__ */ Qa(as), ch = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...s
}) => {
  const o = U(
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
      className: U(
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
          className: U("nhsuk-account__item", o.className),
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
  } = e, [u, d] = Qt(!1), [m, p] = Qt(!1), [S, R] = Qt(!1), b = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    s !== "default" ? `nhs-aria-button--${s}` : "",
    o ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), C = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", T = {
    ...u && { "data-pressed": "true" },
    ...m && { "data-hovered": "true" },
    ...S && { "data-focused": "true" },
    ...C && { "data-disabled": "true" }
  }, F = He(() => !C && d(!0), [C]), M = He(() => d(!1), []), j = He(() => !C && p(!0), [C]), A = He(() => {
    p(!1), d(!1);
  }, []), N = He(() => R(!0), []), L = He(() => R(!1), []), _ = He((f) => {
    f.key === " " && ("href" in c || f.currentTarget.getAttribute("role") === "button") && (f.preventDefault(), f.currentTarget.click());
  }, [c]), y = He((f) => {
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
        ...T,
        ...l && { "data-prevent-double-click": "true" },
        onKeyDown: ($) => {
          f.onKeyDown?.($), _($);
        },
        onClick: ($) => {
          f.onClick?.($), y($);
        },
        onMouseDown: ($) => {
          f.onMouseDown?.($), F();
        },
        onMouseUp: ($) => {
          f.onMouseUp?.($), M();
        },
        onMouseEnter: ($) => {
          f.onMouseEnter?.($), j();
        },
        onMouseLeave: ($) => {
          f.onMouseLeave?.($), A();
        },
        onFocus: ($) => {
          f.onFocus?.($), N();
        },
        onBlur: ($) => {
          f.onBlur?.($), L();
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
  const v = c;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: v.type || "button",
      disabled: v.disabled,
      className: b,
      "data-module": "nhs-button",
      ...T,
      ...l && { "data-prevent-double-click": "true" },
      ...v.disabled && { "aria-disabled": "true" },
      onKeyDown: (f) => {
        v.onKeyDown?.(f), _(f);
      },
      onClick: (f) => {
        v.onClick?.(f), y(f);
      },
      onMouseDown: (f) => {
        v.onMouseDown?.(f), F();
      },
      onMouseUp: (f) => {
        v.onMouseUp?.(f), M();
      },
      onMouseEnter: (f) => {
        v.onMouseEnter?.(f), j();
      },
      onMouseLeave: (f) => {
        v.onMouseLeave?.(f), A();
      },
      onFocus: (f) => {
        v.onFocus?.(f), N();
      },
      onBlur: (f) => {
        v.onBlur?.(f), L();
      },
      id: v.id,
      style: v.style,
      title: v.title,
      "aria-label": v["aria-label"],
      "aria-describedby": v["aria-describedby"],
      "aria-labelledby": v["aria-labelledby"],
      tabIndex: v.tabIndex,
      name: v.name,
      value: v.value,
      form: v.form,
      formAction: v.formAction,
      formEncType: v.formEncType,
      formMethod: v.formMethod,
      formNoValidate: v.formNoValidate,
      formTarget: v.formTarget,
      autoFocus: v.autoFocus,
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
  const l = U(
    "nhsuk-back-link",
    a
  ), c = U(
    "nhsuk-back-link__link"
  ), u = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
      children: u()
    }
  ) : /* @__PURE__ */ n.jsx(
    "a",
    {
      className: c,
      href: r,
      ...i,
      children: u()
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
  ...u
}) => {
  const d = U(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": s,
      "nhsuk-tag--closable": o,
      "nhsuk-tag--disabled": l
    },
    c
  ), m = (p) => {
    p.preventDefault(), p.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: d, ...u, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    o && /* @__PURE__ */ n.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: m,
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
  children: u,
  onChange: d,
  onBlur: m,
  onFocus: p,
  attributes: S,
  ...R
}) => {
  const [b, C] = re(a), T = r !== void 0, F = T ? r : b;
  se(() => {
    T || C(a);
  }, [a, T]);
  const M = (_) => {
    const y = _.target.checked;
    T || C(y), d?.(y, _);
  }, j = i ? `${e}-hint` : void 0, A = l ? `${e}-error` : void 0, N = [j, A].filter(Boolean).join(" ") || void 0, L = U(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ n.jsx("div", { className: L, ...R, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: F,
        disabled: s,
        onChange: M,
        onBlur: m,
        onFocus: p,
        "aria-describedby": N,
        ...S
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: u }),
    i && /* @__PURE__ */ n.jsx("div", { id: j, className: "nhsuk-checkboxes__hint", children: i }),
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
  hasError: u = !1,
  describedBy: d,
  className: m,
  width: p = "full",
  inputMode: S,
  autoComplete: R,
  maxLength: b,
  minLength: C,
  pattern: T,
  step: F,
  min: M,
  max: j,
  showValueLabels: A = !1,
  showCurrentValue: N = !1,
  valueLabels: L,
  onChange: _,
  onBlur: y,
  onFocus: v,
  onKeyDown: f,
  ...$
}) => {
  const [ee, Z] = re(a || s || (r === "range" ? M || "0" : ""));
  se(() => {
    a !== void 0 && Z(a);
  }, [a]);
  const P = (te) => {
    Z(te.target.value), _?.(te);
  }, O = r === "range", K = U(
    "nhsuk-input",
    {
      "nhsuk-input--error": u,
      "nhsuk-input--range": O,
      [`nhsuk-input--width-${p}`]: p !== "full" && !O
    },
    m
  ), X = O ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    A && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: L?.min || M || "0" }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: K,
          id: e,
          name: t,
          type: r,
          value: ee,
          defaultValue: s,
          placeholder: o,
          disabled: i,
          readOnly: l,
          required: c,
          "aria-describedby": d,
          inputMode: S,
          autoComplete: R,
          maxLength: b,
          minLength: C,
          pattern: T,
          step: F,
          min: M,
          max: j,
          onChange: P,
          onBlur: y,
          onFocus: v,
          onKeyDown: f,
          ...$
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: L?.max || j || "100" })
    ] }),
    !A && /* @__PURE__ */ n.jsx(
      "input",
      {
        className: K,
        id: e,
        name: t,
        type: r,
        value: ee,
        defaultValue: s,
        placeholder: o,
        disabled: i,
        readOnly: l,
        required: c,
        "aria-describedby": d,
        inputMode: S,
        autoComplete: R,
        maxLength: b,
        minLength: C,
        pattern: T,
        step: F,
        min: M,
        max: j,
        onChange: P,
        onBlur: y,
        onFocus: v,
        onKeyDown: f,
        ...$
      }
    ),
    N && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      L?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: ee })
    ] }) })
  ] }) : null;
  return O ? X : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: K,
      id: e,
      name: t,
      type: r,
      value: a,
      defaultValue: s,
      placeholder: o,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": d,
      inputMode: S,
      autoComplete: R,
      maxLength: b,
      minLength: C,
      pattern: T,
      step: F,
      min: M,
      max: j,
      onChange: _,
      onBlur: y,
      onFocus: v,
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
  const i = U(
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
  const o = U(
    "nhsuk-fieldset",
    r
  ), i = U(
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
  small: u = !1,
  onChange: d,
  fieldsetAttributes: m,
  attributes: p,
  ...S
}) => {
  const [R, b] = re(
    e.filter((_) => _.checked).map((_) => _.value)
  ), C = r || t, T = i ? `${C}-hint` : void 0, F = l ? `${C}-error` : void 0, M = [T, F].filter(Boolean).join(" ") || void 0, j = (_, y) => {
    let v;
    y ? v = [...R, _] : v = R.filter((f) => f !== _), b(v), d?.(v);
  }, A = () => e.map((_, y) => {
    const v = `${C}-${y + 1}`, f = `${v}-conditional`, $ = R.includes(_.value), ee = _.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: v,
          name: t,
          type: "checkbox",
          value: _.value,
          checked: $,
          disabled: ee,
          onChange: (Z) => j(_.value, Z.target.checked),
          "aria-describedby": _.hint ? `${v}-hint` : M,
          ..._.conditional && {
            "aria-controls": f,
            "aria-expanded": $ ? "true" : "false"
          },
          ..._.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: v, children: _.text }),
      _.hint && /* @__PURE__ */ n.jsx("div", { id: `${v}-hint`, className: "nhsuk-checkboxes__hint", children: _.hint }),
      _.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: U("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !$
          }),
          id: f,
          children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            _.conditional.label && /* @__PURE__ */ n.jsx(An, { htmlFor: _.conditional.id, children: _.conditional.label }),
            /* @__PURE__ */ n.jsx($n, { ..._.conditional })
          ] }) : _.conditional
        }
      )
    ] }, _.value);
  }), N = U(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": u
    },
    c
  ), L = U("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: L, ...p, ...S, children: /* @__PURE__ */ n.jsxs(
    Hn,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: M,
      ...m,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: T, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: F, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: N, children: A() })
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
  describedBy: u,
  className: d,
  rows: m = 5,
  cols: p,
  maxLength: S,
  minLength: R,
  wrap: b = "soft",
  resize: C = "vertical",
  autoComplete: T,
  spellCheck: F,
  onChange: M,
  onBlur: j,
  onFocus: A,
  onKeyDown: N,
  ...L
}) => {
  const _ = U(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": c,
      [`nhsuk-textarea--resize-${C}`]: C !== "vertical"
    },
    d
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: _,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": u,
      rows: m,
      cols: p,
      maxLength: S,
      minLength: R,
      wrap: b,
      autoComplete: T,
      spellCheck: F,
      onChange: M,
      onBlur: j,
      onFocus: A,
      onKeyDown: N,
      ...L
    }
  );
}, Ir = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const s = U("nhsuk-hint", t);
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
  onCountChange: u,
  onChange: d,
  ...m
}) => {
  const [p, S] = re(o), [R, b] = re(0), [C, T] = re(!1), [F, M] = re(!1), j = q((v) => r ? v.trim() === "" ? 0 : v.trim().split(/\s+/).length : v.length, [r]);
  se(() => {
    const v = j(p), f = t || r || 0, $ = f - v, ee = Math.floor(f * (a / 100));
    b($), T(v > f), M(v >= ee || v > f), u && u(v, $);
  }, [p, t, r, a, j, u]);
  const A = (v) => {
    const f = v.target.value;
    S(f), d && d(v);
  }, N = () => {
    const v = t || r || 0, f = r ? "word" : "character", $ = r ? "words" : "characters";
    if (!F)
      return `You can enter up to ${v} ${v === 1 ? f : $}`;
    if (C) {
      const ee = Math.abs(R);
      return `You have ${ee} ${ee === 1 ? f : $} too many`;
    } else
      return `You have ${R} ${R === 1 ? f : $} remaining`;
  }, L = U(
    "nhsuk-character-count",
    l
  ), _ = U(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !F,
      "nhsuk-error-message": C
    },
    c?.classes
  ), y = U(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": C
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: L,
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
            value: p,
            rows: i,
            className: y,
            onChange: A,
            "aria-describedby": `${e}-info`,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          Ir,
          {
            id: `${e}-info`,
            className: _,
            children: N()
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
  const i = U(
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
  multiple: u = !1,
  size: d,
  autoComplete: m,
  options: p,
  children: S,
  onChange: R,
  onBlur: b,
  onFocus: C,
  ...T
}) => {
  const F = U(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    c
  ), M = () => p ? p.map((j, A) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: j.value,
      disabled: j.disabled,
      selected: j.selected,
      children: j.text
    },
    `${j.value}-${A}`
  )) : null;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: F,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      disabled: s,
      required: o,
      "aria-describedby": l,
      multiple: u,
      size: d,
      autoComplete: m,
      onChange: R,
      onBlur: b,
      onFocus: C,
      ...T,
      children: S || M()
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
  onChange: u,
  onBlur: d,
  onFocus: m,
  ...p
}) => {
  const [S, R] = re(t || r || ""), b = U(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    o
  ), C = (T) => {
    const F = T.target.value;
    R(F), u && u(T);
  };
  return /* @__PURE__ */ n.jsx(Hn, { children: /* @__PURE__ */ n.jsx("div", { className: b, ...p, children: c.map((T, F) => {
    const M = `${e}-${F}`, j = T.conditional ? `${M}-conditional` : void 0, A = S === T.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: M,
          name: e,
          type: "radio",
          value: T.value,
          disabled: T.disabled,
          checked: A,
          "aria-describedby": s,
          onChange: C,
          onBlur: d,
          onFocus: m
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: M, children: T.text }),
      T.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: T.hint }),
      T.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: U("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !A
          }),
          id: j,
          children: typeof T.conditional == "object" && T.conditional !== null && "label" in T.conditional && "id" in T.conditional && "name" in T.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            T.conditional.label && /* @__PURE__ */ n.jsx(An, { htmlFor: T.conditional.id, children: T.conditional.label }),
            /* @__PURE__ */ n.jsx($n, { ...T.conditional })
          ] }) : T.conditional
        }
      )
    ] }, T.value);
  }) }) });
}, Mr = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...s
}) => {
  const o = U(
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
  const a = U("nhsuk-grid-row", t);
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
  const u = U(
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
  return /* @__PURE__ */ n.jsx("div", { className: u, ...c, children: e });
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
  const c = i || (t === "number" ? "ol" : "ul"), u = U(
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
  return /* @__PURE__ */ n.jsx(c, { className: u, role: o, ...l, children: e });
}, gs = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = U("nhsuk-list__item", t);
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
  const u = e ?? ((R) => {
    switch (R) {
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
  })(o), d = U(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${o}`]: o
    },
    t
  ), m = s || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), p = `h${u}`, S = i ? { ...l.style, marginBottom: i } : l.style;
  return Br(
    p,
    { className: d, ...l, style: S },
    m
  );
}, nr = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...s
}) => {
  const o = U("nhsuk-error-message", t);
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
  const c = oe(null);
  se(() => {
    c.current && c.current.focus();
  }, []);
  const u = U(
    "nhsuk-error-summary",
    o
  ), d = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, m = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, p = (S) => {
    const R = S.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text;
    return S.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: S.href,
        ...S.attributes,
        children: R
      }
    ) : R;
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: c,
      className: u,
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      "data-module": "nhsuk-error-summary",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: d() }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ n.jsx("p", { children: i }),
          !i && (r || a) && /* @__PURE__ */ n.jsx("p", { children: m() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((S, R) => /* @__PURE__ */ n.jsx("li", { children: p(S) }, R)) })
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
  ...u
}) => {
  const [d, m] = re(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [p, S] = re({}), R = (P) => P % 4 === 0 && P % 100 !== 0 || P % 400 === 0, b = (P, O) => {
    const K = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return P === 2 && R(O) ? 29 : K[P - 1];
  }, C = (P, O, K) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Day must be a number";
    const X = parseInt(P, 10);
    if (X < 1 || X > 31) return "Day must be between 1 and 31";
    if (O && K) {
      const te = parseInt(O, 10), D = parseInt(K, 10);
      if (!isNaN(te) && !isNaN(D) && te >= 1 && te <= 12) {
        const V = b(te, D);
        if (X > V)
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
          ][te - 1]} ${D} only has ${V} days`;
      }
    }
  }, T = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Month must be a number";
    const O = parseInt(P, 10);
    if (O < 1 || O > 12) return "Month must be between 1 and 12";
  }, F = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Year must be a number";
    const O = parseInt(P, 10), K = (/* @__PURE__ */ new Date()).getFullYear();
    if (O < 1900 || O > K + 10)
      return `Year must be between 1900 and ${K + 10}`;
  }, M = (P, O, K) => {
    if (!P || !O || !K) return;
    const X = parseInt(P, 10), te = parseInt(O, 10), D = parseInt(K, 10);
    if (isNaN(X) || isNaN(te) || isNaN(D) || te < 1 || te > 12 || D < 1900) return;
    const V = b(te, D);
    X < 1 || X > V;
  }, j = q((P, O) => {
    const K = {
      ...d,
      [P]: O
    };
    m(K), c && c(K);
  }, [d, c]), A = q((P) => {
    const O = d[P];
    let K;
    if (P === "day")
      K = C(O, d.month, d.year);
    else if (P === "month") {
      if (K = T(O), !K && d.day) {
        const X = C(d.day, O, d.year);
        S((te) => ({
          ...te,
          day: X
        }));
      }
    } else if (P === "year" && (K = F(O), !K && d.day && d.month)) {
      const X = C(d.day, d.month, O);
      S((te) => ({
        ...te,
        day: X
      }));
    }
    if (S((X) => ({
      ...X,
      [P]: K
    })), d.day && d.month && d.year) {
      const X = M(
        P === "day" ? O : d.day,
        P === "month" ? O : d.month,
        P === "year" ? O : d.year
      );
      X && S((te) => ({
        ...te,
        day: X
      }));
    }
  }, [d, C, T, F, M]), N = le(() => [
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
  ], []), L = r || N;
  let _ = o?.describedBy || "";
  const y = i ? `${e}-hint` : "", v = l ? `${e}-error` : "";
  y && (_ = _ ? `${_} ${y}` : y), v && (_ = _ ? `${_} ${v}` : v);
  const f = Object.values(p).some((P) => P), $ = U(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || f
    }
  ), ee = U(
    "nhsuk-date-input",
    t
  ), Z = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Ir,
      {
        id: y,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      nr,
      {
        id: v,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(p).map(
      ([P, O]) => O ? /* @__PURE__ */ n.jsxs(
        nr,
        {
          id: `${e}-${P}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            O
          ]
        },
        `${P}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: ee, id: e, "data-testid": "date-input", ...u, children: L.map((P) => {
      const O = P.id || `${e}-${P.name}`, K = a ? `${a}[${P.name}]` : P.name, X = P.label || P.name.charAt(0).toUpperCase() + P.name.slice(1), te = p[P.name], D = d[P.name] || "";
      let V = _;
      if (te) {
        const H = `${e}-${P.name}-error`;
        V = V ? `${V} ${H}` : H;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          An,
          {
            htmlFor: O,
            className: "nhsuk-date-input__label",
            children: X
          }
        ),
        /* @__PURE__ */ n.jsx(
          $n,
          {
            id: O,
            name: K,
            value: D,
            className: U("nhsuk-date-input__input", P.classes, {
              "nhsuk-input--error": te
            }),
            inputMode: P.inputmode,
            autoComplete: P.autocomplete,
            pattern: P.pattern,
            "aria-describedby": V || void 0,
            hasError: !!te,
            onChange: (H) => j(P.name, H.target.value),
            onBlur: () => A(P.name)
          }
        )
      ] }, P.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: $, children: o ? /* @__PURE__ */ n.jsx(
    Hn,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: _ || void 0,
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
const _h = ({ children: e, theme: t }) => (se(() => {
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
  disabled: u = !1,
  callbacks: d = {},
  isLoading: m = !1,
  showResults: p = !1,
  results: S = [],
  formAttributes: R = {},
  inputAttributes: b = {},
  buttonAttributes: C = {},
  preventDefaultSubmit: T = !1,
  debounceMs: F = 300,
  minQueryLength: M = 1
}) => {
  const [j, A] = re(""), [N, L] = re(!1), _ = oe(void 0), y = oe(null), v = oe(null), f = e === "controlled" && s !== void 0, $ = f ? s : j, ee = q((G) => {
    _.current && clearTimeout(_.current), _.current = setTimeout(() => {
      d.onChange && G.length >= M && d.onChange(G);
    }, F);
  }, [d.onChange, F, M]), Z = q((G) => {
    const k = G.target.value;
    f || A(k), e !== "form" && ee(k);
  }, [f, e, ee]), P = q((G) => {
    const k = $.trim(), I = {
      query: k,
      timestamp: Date.now(),
      formData: new FormData(G.currentTarget)
    };
    e === "controlled" || e === "hybrid" && T ? (G.preventDefault(), d.onSearch && k.length >= M && d.onSearch(I)) : e === "hybrid" && d.onSearch && k.length >= M && d.onSearch(I);
  }, [e, $, d.onSearch, T, M]), O = q(() => {
    L(!0), d.onFocus?.();
  }, [d.onFocus]), K = q(() => {
    L(!1), d.onBlur?.();
  }, [d.onBlur]), X = q(() => {
    f || A(""), d.onClear?.(), v.current?.focus();
  }, [f, d.onClear]);
  se(() => () => {
    _.current && clearTimeout(_.current);
  }, []);
  const te = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: U("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": m
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), D = () => /* @__PURE__ */ n.jsx(
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
  ), V = () => !$ || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: X,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), H = () => !p || !S.length || !N ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: S.map((G) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: G.href ? /* @__PURE__ */ n.jsxs("a", { href: G.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: G.title }),
    G.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: G.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => d.onSearch?.({ query: G.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: G.title }),
        G.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: G.description })
      ]
    }
  ) }, G.id)) });
  return /* @__PURE__ */ n.jsxs("search", { className: U("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": m,
    "nhsuk-header__search--focused": N,
    "nhsuk-header__search--has-results": p && S.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: y,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        onSubmit: P,
        ...R,
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
                ref: v,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: o,
                autoComplete: "off",
                value: $,
                onChange: Z,
                onFocus: O,
                onBlur: K,
                disabled: u || m,
                "aria-expanded": p && S.length > 0,
                "aria-haspopup": "listbox",
                ...b
              }
            ),
            V()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: u || m || e !== "form" && $.length < M,
              ...C,
              children: [
                m ? D() : te(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: m ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    H()
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
  attributes: u = {},
  ...d
}) => {
  const [m, p] = re(!1), [S, R] = re(!1), [b, C] = re(i?.items?.length || 0), [T, F] = re(!1), [M, j] = re(!1), [A, N] = re(!1), L = oe(null), _ = oe(null), y = oe(!1), v = oe(null), f = oe([]), $ = oe(null);
  se(() => {
    typeof window > "u" || (N(!0), F(!0));
  }, []), se(() => {
    if (!A || !i?.items?.length) return;
    f.current = i.items;
    const h = setTimeout(() => {
      L.current && _.current && X();
    }, 100);
    return () => clearTimeout(h);
  }, [A, i?.items]);
  const ee = r.href && !t.href || r.href && r.href === t.href, Z = ee ? r.href : t.href, P = U(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), O = U(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), K = U(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), X = q(() => {
    if (!(typeof window > "u" || y.current) && !(!L.current || !_.current || !f.current.length)) {
      y.current = !0;
      try {
        const h = _.current, g = L.current, B = h.offsetWidth, w = g.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (w.length === 0 || B === 0) {
          y.current = !1;
          return;
        }
        const E = window.innerWidth < 768, z = E ? 16 : 32, x = z * 2, Y = B - x, Q = Array.from(w).map((ce) => ce.offsetWidth), J = Q.reduce((ce, ie) => ce + ie, 0), W = E ? 80 : 100, ne = $.current !== null && $.current !== E;
        if ($.current = E, console.log("Overflow check:", {
          containerWidth: B,
          availableContainerWidth: Y,
          totalGutters: x,
          gutterSize: z,
          totalWidth: J,
          mobile: E,
          breakpointChanged: ne,
          itemCount: Q.length,
          measurements: Q
        }), J <= Y)
          R(!1), C(f.current.length);
        else {
          const ce = Y - W;
          let ie = 0, ge = 0;
          for (let Ae = 0; Ae < Q.length; Ae++) {
            const ke = ge + Q[Ae];
            if (ke <= ce)
              ge = ke, ie = Ae + 1;
            else
              break;
          }
          ie = Math.max(1, ie);
          const _e = ie < Q.length;
          R(_e), C(ie);
        }
        y.current = !1;
      } catch (h) {
        console.error("Overflow detection error:", h), R(!1), C(f.current.length), y.current = !1;
      }
    }
  }, []);
  se(() => {
    if (typeof document > "u") return;
    const h = (g) => {
      g.key === "Escape" && m && p(!1);
    };
    if (m)
      return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [m]), se(() => {
    if (typeof window > "u" || !A) return;
    const h = () => {
      m && (p(!1), j(!1)), v.current && clearTimeout(v.current), v.current = setTimeout(() => {
        f.current.length > 0 && X();
      }, 250);
    };
    let g = null, B = null;
    return window.matchMedia && (g = window.matchMedia("(max-width: 767px)"), B = () => {
      console.log("Breakpoint changed:", g?.matches ? "mobile" : "desktop"), f.current.length > 0 && setTimeout(() => X(), 50);
    }, g.addEventListener ? g.addEventListener("change", B) : g.addListener(B)), window.addEventListener("resize", h), () => {
      window.removeEventListener("resize", h), g && B && (g.removeEventListener ? g.removeEventListener("change", B) : g.removeListener(B)), v.current && clearTimeout(v.current);
    };
  }, [A, m, X]), se(() => {
    if (typeof document > "u") return;
    const h = (g) => {
      const B = g.target, w = L.current?.contains(B);
      m && !w && p(!1);
    };
    if (m)
      return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [m]);
  const te = (h) => {
    h && (h.preventDefault(), h.stopPropagation());
    const g = !m;
    p(g), g ? setTimeout(() => {
      j(!0);
    }, 50) : j(!1);
  }, D = () => /* @__PURE__ */ n.jsxs(
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
  ), V = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : D(), H = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, G = (h, g) => h ? g ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: g, children: h }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: h }) : null, k = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), I = (h) => {
    if (h.active || h.current) {
      const g = h.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: g });
    }
    return h.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: P,
      role: "banner",
      "data-module": "nhsuk-header",
      ...u,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: O, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            Z ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: Z, children: [
              V(),
              H(),
              ee && G(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              V(),
              H(),
              ee && G(r.text)
            ] }),
            r.text && !ee && G(r.text, r.href)
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
            className: K,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: U(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !T && A,
                    "nhsuk-header__navigation-container--ssr": !A
                  },
                  l
                ),
                ref: _,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: L, children: [
                  (A ? i.items.slice(0, b) : i.items).map((h, g) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: U(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": h.active || h.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !A && g >= 4
                          // Mark items that would be hidden on client
                        },
                        h.className
                      ),
                      ...h.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: h.href,
                          ...h.active || h.current ? {
                            "aria-current": h.current ? "page" : "true"
                          } : {},
                          children: I(h)
                        }
                      )
                    },
                    g
                  )),
                  A && S && b < i.items.length && /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ n.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: te,
                          type: "button",
                          children: [
                            /* @__PURE__ */ n.jsx("span", { children: "More" }),
                            k()
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
        A && i && i.items && i.items.length > 0 && m && M && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !M,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(b).map((h, g) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: U(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": h.active || h.current
                  }
                ),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: h.href,
                    ...h.active || h.current ? {
                      "aria-current": h.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      p(!1), j(!1);
                    },
                    children: I(h)
                  }
                )
              },
              `overflow-${b + g}`
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
  attributes: u = {},
  ...d
}) => {
  const m = r.href && !t.href || r.href && r.href === t.href, p = m ? r.href : t.href, S = U(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), R = U(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), b = U(
    "nhsuk-header__navigation",
    i?.className
  ), C = () => /* @__PURE__ */ n.jsxs(
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
  ), T = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : C(), F = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, M = (N, L) => N ? L ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: L, children: N }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: N }) : null, j = () => !i?.items || i.items.length === 0 ? null : i.items.map((N, L) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: N.href,
          ...N.attributes || {},
          children: N.text
        }
      )
    },
    N.href || L
  )), A = () => s ? /* @__PURE__ */ n.jsx(Ar, { ...s }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: S,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...u,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: R, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            p ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: p, children: [
              T(),
              F(),
              m && M(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              T(),
              F(),
              m && M(r.text)
            ] }),
            r.text && !m && M(r.text, r.href)
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
                children: j()
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
  attributes: u = {},
  maxVisibleItems: d = 5,
  // New prop to control CSS-based overflow
  ...m
}) => {
  const p = r.href && !t.href || r.href && r.href === t.href, S = p ? r.href : t.href, R = U(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), b = U(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), C = U(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), T = () => /* @__PURE__ */ n.jsxs(
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
  ), F = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : T(), M = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, j = (N, L) => N ? L ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: L, children: N }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: N }) : null, A = (N) => {
    if (N.active || N.current) {
      const L = N.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: N.html } }) : N.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: L });
    }
    return N.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: N.html } }) : N.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: R,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...u,
      ...m,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: b, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            S ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: S, children: [
              F(),
              M(),
              p && j(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              F(),
              M(),
              p && j(r.text)
            ] }),
            r.text && !p && j(r.text, r.href)
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
            className: C,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: U(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, d).map((N, L) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: U(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": N.active || N.current
                        },
                        N.className
                      ),
                      ...N.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: N.href,
                          ...N.active || N.current ? {
                            "aria-current": N.current ? "page" : "true"
                          } : {},
                          children: A(N)
                        }
                      )
                    },
                    L
                  )),
                  i.items.length > d && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more nhsuk-header__navigation-item--static", children: /* @__PURE__ */ n.jsxs("details", { className: "nhsuk-header__navigation-details", children: [
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(d).map((N, L) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: U(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": N.active || N.current
                          }
                        ),
                        children: /* @__PURE__ */ n.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: N.href,
                            ...N.active || N.current ? {
                              "aria-current": N.current ? "page" : "true"
                            } : {},
                            children: A(N)
                          }
                        )
                      },
                      `overflow-${d + L}`
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
  ...u
}) => {
  const d = [
    "nhsuk-hero",
    o && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    o && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-width-container",
    i,
    o ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), p = [
    "nhsuk-hero__heading",
    r,
    !c && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), S = c || e || a || s, R = () => {
    if (!e) return null;
    const b = { className: p };
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
      className: d,
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...u,
      children: [
        o && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: S && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          R(),
          c || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && S && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          R(),
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
  const c = (d, m = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: U("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": m
      }),
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: d.URL,
          target: d.newWindow ? "_blank" : void 0,
          rel: d.newWindow ? "noopener noreferrer" : void 0,
          children: d.label
        }
      )
    },
    `${d.URL}-${d.label}`
  ), u = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs("div", { className: U("nhsuk-width-container", i), children: [
      /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ n.jsx("div", { className: U("nhsuk-footer", e), children: u ? (
        // Multi-column layout
        /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((d) => c(d)) }),
          r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((d) => c(d)) }),
          a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((d) => c(d)) }),
          s && s.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((d) => c(d)) })
        ] })
      ) : (
        // Single column layout (default)
        /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
          t.map((d) => c(d, !0)),
          (r || []).map((d) => c(d, !0)),
          (a || []).map((d) => c(d, !0)),
          (s || []).map((d) => c(d, !0))
        ] })
      ) }),
      !u && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
    ] }),
    u && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
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
  function s(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const m = u + d >>> 1;
        r(l[m], c) < 0 ? u = m + 1 : d = m;
      } while (u < d);
    }
    return u;
  }
  function o(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const m = u + d >>> 1;
        r(l[m], c) <= 0 ? u = m + 1 : d = m;
      } while (u < d);
    }
    return u;
  }
  function i(l, c, u = 0, d = l.length) {
    const m = s(l, c, u, d - 1);
    return m > u && a(l[m - 1], c) > -a(l[m], c) ? m - 1 : m;
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
  let l, c, u;
  return s < 0 ? (u = Math.pow(10, -s) / i, l = Math.round(e * u), c = Math.round(t * u), l / u < e && ++l, c / u > t && --c, u = -u) : (u = Math.pow(10, s) * i, l = Math.round(e / u), c = Math.round(t / u), l * u < e && ++l, c * u > t && --c), c < l && 0.5 <= r && r < 2 ? zr(e, t, r * 2) : [l, c, u];
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
    var i = r((s = cn(s)).r, (o = cn(o)).r), l = r(s.g, o.g), c = r(s.b, o.b), u = Ur(s.opacity, o.opacity);
    return function(d) {
      return s.r = i(d), s.g = l(d), s.b = c(d), s.opacity = u(d), s + "";
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
  return r < t.length && (o = t.slice(r), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? c[0] ? Xs(c[0].x) : Js(t) : (t = c.length, function(u) {
    for (var d = 0, m; d < t; ++d) l[(m = c[d]).i] = m.x(u);
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
  var e = mr, t = mr, r = Un, a, s, o, i = Ve, l, c, u;
  function d() {
    var p = Math.min(e.length, t.length);
    return i !== Ve && (i = ro(e[0], e[p - 1])), l = p > 2 ? so : ao, c = u = null, m;
  }
  function m(p) {
    return p == null || isNaN(p = +p) ? o : (c || (c = l(e.map(a), t, r)))(a(i(p)));
  }
  return m.invert = function(p) {
    return i(s((u || (u = l(t, e.map(a), xt)))(p)));
  }, m.domain = function(p) {
    return arguments.length ? (e = Array.from(p, no), d()) : e.slice();
  }, m.range = function(p) {
    return arguments.length ? (t = Array.from(p), d()) : t.slice();
  }, m.rangeRound = function(p) {
    return t = Array.from(p), r = eo, d();
  }, m.clamp = function(p) {
    return arguments.length ? (i = p ? !0 : Ve, d()) : i !== Ve;
  }, m.interpolate = function(p) {
    return arguments.length ? (r = p, d()) : r;
  }, m.unknown = function(p) {
    return arguments.length ? (o = p, m) : o;
  }, function(p, S) {
    return a = p, s = S, d();
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
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+o)), t(o, l), e(o);
    while (u < o && o < i);
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
  function l(u, d, m) {
    const p = d < u;
    p && ([u, d] = [d, u]);
    const S = m && typeof m.range == "function" ? m : c(u, d, m), R = S ? S.range(u, +d + 1) : [];
    return p ? R.reverse() : R;
  }
  function c(u, d, m) {
    const p = Math.abs(d - u) / m, S = zn(([, , C]) => C).right(i, p);
    if (S === i.length) return e.every(ar(u / an, d / an, m));
    if (S === 0) return yt.every(Math.max(ar(u, d, m), 1));
    const [R, b] = i[p / i[S - 1][2] < i[S][2] / p ? S - 1 : S];
    return R.every(b);
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
  var t = e.dateTime, r = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, u = rt(s), d = at(s), m = rt(o), p = at(o), S = rt(i), R = at(i), b = rt(l), C = at(l), T = rt(c), F = at(c), M = {
    a: K,
    A: X,
    b: te,
    B: D,
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
    p: V,
    q: H,
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
  }, j = {
    a: G,
    A: k,
    b: I,
    B: h,
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
    p: g,
    q: B,
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
    a: v,
    A: f,
    b: $,
    B: ee,
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
    p: y,
    q: Lo,
    Q: Uo,
    s: Go,
    S: Po,
    u: Fo,
    U: Ro,
    V: Io,
    w: Bo,
    W: Mo,
    x: P,
    X: O,
    y: xr,
    Y: br,
    Z: Eo,
    "%": Oo
  };
  M.x = N(r, M), M.X = N(a, M), M.c = N(t, M), j.x = N(r, j), j.X = N(a, j), j.c = N(t, j);
  function N(w, E) {
    return function(z) {
      var x = [], Y = -1, Q = 0, J = w.length, W, ne, ce;
      for (z instanceof Date || (z = /* @__PURE__ */ new Date(+z)); ++Y < J; )
        w.charCodeAt(Y) === 37 && (x.push(w.slice(Q, Y)), (ne = gr[W = w.charAt(++Y)]) != null ? W = w.charAt(++Y) : ne = W === "e" ? " " : "0", (ce = E[W]) && (W = ce(z, ne)), x.push(W), Q = Y + 1);
      return x.push(w.slice(Q, Y)), x.join("");
    };
  }
  function L(w, E) {
    return function(z) {
      var x = nt(1900, void 0, 1), Y = _(x, w, z += "", 0), Q, J;
      if (Y != z.length) return null;
      if ("Q" in x) return new Date(x.Q);
      if ("s" in x) return new Date(x.s * 1e3 + ("L" in x ? x.L : 0));
      if (E && !("Z" in x) && (x.Z = 0), "p" in x && (x.H = x.H % 12 + x.p * 12), x.m === void 0 && (x.m = "q" in x ? x.q : 0), "V" in x) {
        if (x.V < 1 || x.V > 53) return null;
        "w" in x || (x.w = 1), "Z" in x ? (Q = on(nt(x.y, 0, 1)), J = Q.getUTCDay(), Q = J > 4 || J === 0 ? kt.ceil(Q) : kt(Q), Q = qn.offset(Q, (x.V - 1) * 7), x.y = Q.getUTCFullYear(), x.m = Q.getUTCMonth(), x.d = Q.getUTCDate() + (x.w + 6) % 7) : (Q = sn(nt(x.y, 0, 1)), J = Q.getDay(), Q = J > 4 || J === 0 ? _t.ceil(Q) : _t(Q), Q = ct.offset(Q, (x.V - 1) * 7), x.y = Q.getFullYear(), x.m = Q.getMonth(), x.d = Q.getDate() + (x.w + 6) % 7);
      } else ("W" in x || "U" in x) && ("w" in x || (x.w = "u" in x ? x.u % 7 : "W" in x ? 1 : 0), J = "Z" in x ? on(nt(x.y, 0, 1)).getUTCDay() : sn(nt(x.y, 0, 1)).getDay(), x.m = 0, x.d = "W" in x ? (x.w + 6) % 7 + x.W * 7 - (J + 5) % 7 : x.w + x.U * 7 - (J + 6) % 7);
      return "Z" in x ? (x.H += x.Z / 100 | 0, x.M += x.Z % 100, on(x)) : sn(x);
    };
  }
  function _(w, E, z, x) {
    for (var Y = 0, Q = E.length, J = z.length, W, ne; Y < Q; ) {
      if (x >= J) return -1;
      if (W = E.charCodeAt(Y++), W === 37) {
        if (W = E.charAt(Y++), ne = A[W in gr ? E.charAt(Y++) : W], !ne || (x = ne(w, z, x)) < 0) return -1;
      } else if (W != z.charCodeAt(x++))
        return -1;
    }
    return x;
  }
  function y(w, E, z) {
    var x = u.exec(E.slice(z));
    return x ? (w.p = d.get(x[0].toLowerCase()), z + x[0].length) : -1;
  }
  function v(w, E, z) {
    var x = S.exec(E.slice(z));
    return x ? (w.w = R.get(x[0].toLowerCase()), z + x[0].length) : -1;
  }
  function f(w, E, z) {
    var x = m.exec(E.slice(z));
    return x ? (w.w = p.get(x[0].toLowerCase()), z + x[0].length) : -1;
  }
  function $(w, E, z) {
    var x = T.exec(E.slice(z));
    return x ? (w.m = F.get(x[0].toLowerCase()), z + x[0].length) : -1;
  }
  function ee(w, E, z) {
    var x = b.exec(E.slice(z));
    return x ? (w.m = C.get(x[0].toLowerCase()), z + x[0].length) : -1;
  }
  function Z(w, E, z) {
    return _(w, t, E, z);
  }
  function P(w, E, z) {
    return _(w, r, E, z);
  }
  function O(w, E, z) {
    return _(w, a, E, z);
  }
  function K(w) {
    return i[w.getDay()];
  }
  function X(w) {
    return o[w.getDay()];
  }
  function te(w) {
    return c[w.getMonth()];
  }
  function D(w) {
    return l[w.getMonth()];
  }
  function V(w) {
    return s[+(w.getHours() >= 12)];
  }
  function H(w) {
    return 1 + ~~(w.getMonth() / 3);
  }
  function G(w) {
    return i[w.getUTCDay()];
  }
  function k(w) {
    return o[w.getUTCDay()];
  }
  function I(w) {
    return c[w.getUTCMonth()];
  }
  function h(w) {
    return l[w.getUTCMonth()];
  }
  function g(w) {
    return s[+(w.getUTCHours() >= 12)];
  }
  function B(w) {
    return 1 + ~~(w.getUTCMonth() / 3);
  }
  return {
    format: function(w) {
      var E = N(w += "", M);
      return E.toString = function() {
        return w;
      }, E;
    },
    parse: function(w) {
      var E = L(w += "", !1);
      return E.toString = function() {
        return w;
      }, E;
    },
    utcFormat: function(w) {
      var E = N(w += "", j);
      return E.toString = function() {
        return w;
      }, E;
    },
    utcParse: function(w) {
      var E = L(w += "", !0);
      return E.toString = function() {
        return w;
      }, E;
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
function Jr(e, t, r, a, s, o, i, l, c, u) {
  var d = lo(), m = d.invert, p = d.domain, S = u(".%L"), R = u(":%S"), b = u("%I:%M"), C = u("%I %p"), T = u("%a %d"), F = u("%b %d"), M = u("%B"), j = u("%Y");
  function A(N) {
    return (c(N) < N ? S : l(N) < N ? R : i(N) < N ? b : o(N) < N ? C : a(N) < N ? s(N) < N ? T : F : r(N) < N ? M : j)(N);
  }
  return d.invert = function(N) {
    return new Date(m(N));
  }, d.domain = function(N) {
    return arguments.length ? p(Array.from(N, Ti)) : p().map(Ni);
  }, d.ticks = function(N) {
    var L = p();
    return e(L[0], L[L.length - 1], N ?? 10);
  }, d.tickFormat = function(N, L) {
    return L == null ? A : u(L);
  }, d.nice = function(N) {
    var L = p();
    return (!N || typeof N.range != "function") && (N = t(L[0], L[L.length - 1], N ?? 10)), N ? p(co(L, N)) : d;
  }, d.copy = function() {
    return oo(d, Jr(e, t, r, a, s, o, i, l, c, u));
  }, d;
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
  const u = oe(null), [d, m] = re(!1), [p, S] = re(!1), R = t(e.start), b = t(e.end), C = Math.max(b - R, 20), T = () => {
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
  }, F = e.progress ? C * e.progress / 100 : 0, M = () => {
    r?.(e);
  }, j = () => {
    a?.(e);
  }, A = ($) => {
    $.key === "Enter" ? ($.preventDefault(), M()) : $.key === " " && ($.preventDefault(), j());
  }, N = () => {
    m(!0);
  }, L = () => {
    m(!1);
  }, _ = () => {
    S(!0), l?.();
  }, y = () => {
    S(!1);
  }, v = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (p || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), f = {
    "--task-left": `${R}px`,
    "--task-width": `${C}px`,
    "--task-color": T(),
    left: `${R}px`,
    width: `${C}px`,
    backgroundColor: T()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: u,
      "data-task-index": o,
      className: v,
      style: f,
      onClick: M,
      onDoubleClick: j,
      onKeyDown: A,
      onMouseDown: N,
      onMouseUp: L,
      onFocus: _,
      onBlur: y,
      "aria-label": c || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
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
function Fi({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let S = e.getTime(); S <= t.getTime(); S += 864e5)
    a.push(new Date(S));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = re(-1), c = oe(null), u = (S) => {
    if (S.key === "ArrowLeft") {
      S.preventDefault();
      const R = Math.max(0, i === -1 ? 0 : i - 1);
      l(R), p(R);
    } else if (S.key === "ArrowRight") {
      S.preventDefault();
      const R = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(R), p(R);
    } else if (S.key === "ArrowDown") {
      S.preventDefault();
      const R = document.querySelector(".gantt-row .timeline-container");
      R && R.focus();
    } else if (S.key === "Home")
      S.preventDefault(), l(0), p(0);
    else if (S.key === "End") {
      S.preventDefault();
      const R = a.length - 1;
      l(R), p(R);
    }
  }, d = (S) => {
    if (S.key === "ArrowDown") {
      S.preventDefault();
      const R = document.querySelector(".gantt-row .resource-label");
      R && R.focus();
    } else if (S.key === "ArrowRight") {
      S.preventDefault();
      const R = c.current;
      R && R.focus();
    }
  }, m = () => {
    i === -1 && (l(0), setTimeout(() => p(0), 0));
  }, p = (S) => {
    const R = c.current?.querySelector(`[data-date-index="${S}"]`);
    R && R.focus();
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
            onKeyDown: d,
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
            onKeyDown: u,
            onFocus: m,
            children: a.map((S, R) => {
              const b = S.getTime() === o.getTime(), C = i === R;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": R,
                  className: `date-column ${b ? "today" : ""} ${C ? "focused" : ""}`,
                  tabIndex: C ? 0 : -1,
                  role: "button",
                  "aria-label": `${S.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${b ? " (Today)" : ""}`,
                  onFocus: () => l(R),
                  onKeyDown: u,
                  children: S.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                R
              );
            })
          }
        )
      ]
    }
  );
}
function Ri({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, c] = re(!1), [u, d] = re(-1), m = oe(null);
  se(() => {
    l && u >= 0 && t.length > 0 && setTimeout(() => {
      m.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
    }, 0);
  }, [l, u, t.length]);
  const p = (b) => {
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
          b.preventDefault(), m.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (b.preventDefault(), c(!0), d(0));
          break;
      }
      return;
    }
    switch (b.key) {
      case "ArrowLeft":
        b.preventDefault();
        const C = Math.max(0, u - 1);
        d(C), m.current?.querySelector(`[data-task-index="${C}"]`)?.focus();
        break;
      case "ArrowRight":
        b.preventDefault();
        const F = Math.min(t.length - 1, u + 1);
        d(F), m.current?.querySelector(`[data-task-index="${F}"]`)?.focus();
        break;
      case "Enter":
        b.preventDefault(), u >= 0 && a?.(t[u]);
        break;
      case " ":
        b.preventDefault(), u >= 0 && s?.(t[u]);
        break;
      case "Escape":
        b.preventDefault(), c(!1), d(-1), m.current?.focus();
        break;
    }
  }, S = (b) => {
    switch (b.key) {
      case "ArrowUp":
        b.preventDefault(), o === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        b.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        b.preventDefault(), m.current?.focus();
        break;
    }
  }, R = (b) => {
    l && d(b);
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
            onKeyDown: S,
            children: e.label
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: m,
            className: `timeline-container ${l ? "timeline-active" : ""}`,
            role: "gridcell",
            "aria-colindex": 2,
            "aria-colspan": i,
            tabIndex: 0,
            "aria-label": `Timeline for ${e.label} with ${t.length} task${t.length !== 1 ? "s" : ""}. Press Enter to activate task navigation, then use arrow keys to navigate, Enter to select, Space to activate, Escape to exit`,
            onKeyDown: p,
            onFocus: () => {
              l || d(-1);
            },
            children: t.map((b, C) => /* @__PURE__ */ n.jsx(
              Bi,
              {
                task: b,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && u === C,
                taskIndex: C,
                tabIndex: l && u === C ? 0 : -1,
                onFocus: () => R(C)
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
  const i = oe(null), [l, c] = re(800), u = le(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const b = new Date(r);
    return isNaN(b.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : b;
  }, [r]), d = le(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const b = new Date(a);
    return isNaN(b.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : b;
  }, [a]), m = le(() => Math.ceil((d.getTime() - u.getTime()) / 864e5) + 1, [u, d]);
  se(() => {
    if (!i.current) return;
    const b = new ResizeObserver((C) => {
      const T = C[0];
      T && c(Math.max(T.contentRect.width - 220, 400));
    });
    return b.observe(i.current), () => b.disconnect();
  }, []);
  const p = le(
    () => Di().domain([u, d]).range([0, l]),
    [u, d, l]
  ), S = le(() => {
    const b = /* @__PURE__ */ new Map();
    return t.forEach((C) => {
      const T = b.get(C.resourceId) || [];
      T.push(C), b.set(C.resourceId, T);
    }), b;
  }, [t]), R = (b) => {
    if (b.target === b.currentTarget)
      switch (b.key) {
        case "ArrowDown":
          b.preventDefault();
          const C = i.current?.querySelector(".gantt-row .resource-label");
          C && C.focus();
          break;
        case "Home":
          b.preventDefault();
          const T = i.current?.querySelector(".header-resource");
          T && T.focus();
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
      "aria-colcount": m + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: R,
      children: [
        /* @__PURE__ */ n.jsx(Fi, { viewStart: u, viewEnd: d, dateCount: m }),
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
            children: e.map((b, C) => /* @__PURE__ */ n.jsx(
              Ri,
              {
                resource: b,
                tasks: S.get(b.id) || [],
                scale: p,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: C,
                dateCount: m
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
    (T) => be.isValidElement(T) && (T.type === vt || T.type?.displayName === "BreadcrumbItem")
  ).map((T) => ({
    text: typeof T.props.children == "string" ? T.props.children : String(T.props.children),
    href: T.props.href,
    active: T.props.active,
    attributes: T.props.attributes
  })) : [], u = () => t ? c() : s && o ? [{ href: s, text: o }] : e, d = () => {
    const C = u();
    if (C && C.length > 0) {
      const T = C.slice().reverse().find((F) => F.href && !F.active);
      if (T)
        return { href: T.href, text: T.text };
    }
    return { text: "Home" };
  }, m = u(), p = d(), S = U(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), b = m && m.length > 1 ? a : void 0;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: S,
      "aria-label": b,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          be.Children.map(t, (C, T) => be.isValidElement(C) && (C.type === vt || C.type?.displayName === "BreadcrumbItem") ? be.cloneElement(C, { key: T }) : null)
        ) : (
          // Render from items array
          m?.map((C, T) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: C.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...C.attributes || {},
              children: C.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: C.href,
              role: "link",
              ...C.attributes || {},
              children: C.text
            }
          ) }, T))
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
  se(() => {
    o(!0);
  }, []), se(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (c) => {
      const u = c.target, d = u.getAttribute("href");
      if (d && d.startsWith("#")) {
        const m = document.querySelector(d);
        if (m) {
          m.hasAttribute("tabindex") || m.setAttribute("tabindex", "-1"), m.focus(), m.classList.add("nhsuk-skip-link-focused-element");
          const p = window.setTimeout(() => {
            m.classList.remove("nhsuk-skip-link-focused-element"), m.getAttribute("tabindex") === "-1" && m.removeAttribute("tabindex");
          }, 3e3);
          u.__nhsSkipLinkTimeout = p;
        }
      }
    };
    try {
      const c = document.querySelectorAll(".nhsuk-skip-link");
      return c.forEach((u) => {
        u.addEventListener("click", l);
      }), () => {
        try {
          c.forEach((u) => {
            u.removeEventListener("click", l);
            const d = u.__nhsSkipLinkTimeout;
            d && window.clearTimeout && window.clearTimeout(d);
          });
        } catch (u) {
          console.warn("SkipLink cleanup error:", u);
        }
      };
    } catch (c) {
      return console.warn("SkipLink initialization error:", c), () => {
      };
    }
  }, [s]);
  const i = U("nhsuk-skip-link", r);
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
  const i = U("nhsuk-pagination", s);
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
  const s = U("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
  imgAlt: u,
  ...d
}, m) => {
  const p = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    d.className
  ].filter(Boolean).join(" "), S = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), R = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), b = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const F = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Ee,
      {
        level: a,
        className: R,
        children: F()
      }
    );
  }, C = () => d.children ? d.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: o }) : null, T = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      ...d,
      className: p,
      ref: m,
      children: [
        c && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: u || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: S, children: [
          b(),
          C(),
          T()
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
  "data-testid": u,
  id: d,
  "aria-label": m,
  "aria-labelledby": p,
  "aria-describedby": S
}) => {
  const R = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), b = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), C = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const F = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], M = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        F,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Ee,
      {
        level: a,
        className: b,
        children: M
      }
    );
  }, T = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: R,
      "data-testid": u,
      id: d,
      "aria-label": m,
      "aria-labelledby": p,
      "aria-describedby": S,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          C(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: T() })
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
  const u = U(
    "nhsuk-panel",
    t
  ), d = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
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
  ) : null, m = () => l ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : o ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: o }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: u, id: e, ...c, children: [
    d(),
    m()
  ] });
}, Dh = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...s
}) => {
  const o = U("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: o, ...s, children: i() });
}, Bh = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const s = U(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), o = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((c, u) => /* @__PURE__ */ n.jsx(
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
    u
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
  panelClasses: u,
  tableClasses: d,
  classes: m,
  attributes: p,
  "data-testid": S
}) => {
  const R = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), b = U(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    d
  ), C = U(m), T = (j, A) => {
    const N = U("nhsuk-table__header", {
      [`nhsuk-table__header--${j.format}`]: j.format
    }, j.classes), L = {
      scope: "col",
      ...j.colspan && { colSpan: j.colspan },
      ...j.rowspan && { rowSpan: j.rowspan },
      ...o && { role: "columnheader" },
      ...j.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: N, ...L, children: j.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: j.html } }) : j.text }, A);
  }, F = (j, A, N) => {
    const L = s && N, _ = U(
      L ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${L ? "header" : "cell"}--${j.format}`]: j.format
      },
      j.classes
    ), y = {
      ...L && { scope: "row" },
      ...j.colspan && { colSpan: j.colspan },
      ...j.rowspan && { rowSpan: j.rowspan },
      ...o && {
        role: L ? "rowheader" : "cell",
        ...j.header && { "data-label": j.header }
      },
      ...j.attributes
    }, v = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      o && j.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        j.header,
        " "
      ] }),
      j.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: j.html } }) : j.text
    ] }), f = L ? "th" : "td";
    return /* @__PURE__ */ n.jsx(f, { className: _, ...y, children: v }, A);
  }, M = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: b,
      ...o && { role: "table" },
      ...p,
      ...S && { "data-testid": S },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: R, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...o && { role: "row" }, children: t.map((j, A) => T(j, A)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((j, A) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: j.map(
              (N, L) => F(N, L, L === 0)
            )
          },
          A
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(Ei, { className: u, children: [
    i && /* @__PURE__ */ n.jsx(Ee, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    M()
  ] }) : C ? /* @__PURE__ */ n.jsx("div", { className: C, children: M() }) : M();
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
  id: u,
  "data-testid": d,
  ...m
}, p) => {
  const S = r !== void 0, [R, b] = re(() => t || e[0]?.id || ""), C = S ? r : R, T = oe(null), F = oe(/* @__PURE__ */ new Map()), M = q((v) => {
    S || b(v), a?.(v);
  }, [S, a]), j = q((v) => {
    s?.(v), l && M(v);
  }, [s, l, M]), A = q((v, f) => {
    const $ = e.filter((P) => !P.disabled).map((P) => P.id), ee = $.indexOf(f);
    let Z = null;
    switch (v.key) {
      case "ArrowLeft":
        Z = ee > 0 ? ee - 1 : $.length - 1;
        break;
      case "ArrowRight":
        Z = ee < $.length - 1 ? ee + 1 : 0;
        break;
      case "Home":
        Z = 0;
        break;
      case "End":
        Z = $.length - 1;
        break;
      case "Escape":
        v.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (Z !== null) {
      v.preventDefault();
      const P = $[Z], O = F.current.get(P);
      O && (O.focus(), j(P));
    }
  }, [e, j, i]), N = q((v, f) => {
    f ? F.current.set(v, f) : F.current.delete(v);
  }, []), L = q((v) => {
    const f = F.current.get(v);
    f && f.focus();
  }, []);
  Fr(p, () => ({
    focusTab: L,
    getActiveTab: () => C,
    getTabListElement: () => T.current
  }), [L, C]);
  const _ = q((v) => {
    const f = v.relatedTarget;
    T.current?.contains(f) || o?.();
  }, [o]), y = U("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: y,
      id: u,
      "data-testid": d,
      ...m,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: T,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: _,
                children: e.map((v) => {
                  const f = v.id === C, $ = v.disabled, ee = U("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": f,
                    "nhsuk-tabs__list-item--disabled": $
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: ee, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (Z) => N(v.id, Z),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": f,
                      "aria-controls": `${v.id}-panel`,
                      id: `${v.id}-tab`,
                      tabIndex: f ? 0 : -1,
                      disabled: $,
                      onClick: () => !$ && M(v.id),
                      onKeyDown: (Z) => !$ && A(Z, v.id),
                      onFocus: () => !$ && j(v.id),
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
          const f = v.id === C;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${v.id}-tab`,
              id: `${v.id}-panel`,
              hidden: !f,
              children: v.content
            },
            v.id
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
  }, u) => {
    const d = [
      "nhsuk-details",
      o
    ].filter(Boolean).join(" "), m = t ? /* @__PURE__ */ n.jsx(
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
        ref: u,
        id: i,
        className: d,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: m }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
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
    const u = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], d = () => t === "cross" ? /* @__PURE__ */ n.jsxs(
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
    ), m = (S) => t === "cross" && !a ? `do not ${S}` : S, p = () => /* @__PURE__ */ n.jsx(
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
          p(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: u.join(" "), role: "list", children: r.map((S, R) => /* @__PURE__ */ n.jsxs("li", { children: [
            d(),
            m(S.item)
          ] }, R)) }) })
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
  }, u) => {
    const d = [
      "nhsuk-expander",
      o
    ].filter(Boolean).join(" "), m = t ? /* @__PURE__ */ n.jsx(
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
        ref: u,
        id: i,
        className: d,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: m }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
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
      const u = c + 1, d = `${t}-${u}-hint`, m = `${t}-${u}-status`, p = !!l.href, S = [
        "nhsuk-task-list__item",
        p && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), R = [
        l.hint && d,
        m
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Pi,
        {
          item: l,
          itemClasses: S,
          hasLink: p,
          hintId: d,
          statusId: m,
          ariaDescribedBy: R
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
    const u = e.title.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, d = [
      r ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: d,
        href: e.href,
        "aria-describedby": o,
        children: u
      }
    ) : /* @__PURE__ */ n.jsx("div", { className: e.title.classes || "", children: u });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ n.jsx(
    "div",
    {
      id: a,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ n.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, c = () => {
    const u = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let d;
    return e.status.tag ? d = /* @__PURE__ */ n.jsx(Me, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ n.jsx("div", { className: u, id: s, children: d });
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
  const l = /important/i.test(e), c = () => s || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), u = [
    "nhsuk-warning-callout",
    o
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: u,
      ...i,
      children: [
        Br(
          d,
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
  ].filter(Boolean).join(" "), u = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
      children: u
    }
  ) : /* @__PURE__ */ n.jsx(
    "div",
    {
      className: c,
      "aria-label": i,
      ...l,
      children: u
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
    ariaLabelledby: u,
    ariaDescribedby: d,
    className: m,
    tableClassName: p,
    bordered: S = !1,
    striped: R = !1,
    responsive: b = !1,
    tableType: C = "default"
  }, T) => {
    const F = oe(null), M = oe(null), j = oe(null);
    be.useImperativeHandle(T, () => F.current, []);
    const [A, N] = re(0), [L, _] = re(0), [y, v] = re("headers"), [f, $] = re("browse"), ee = t.length, Z = e.length, P = le(() => !r || r.length === 0 ? e : [...e].sort((H, G) => {
      for (const { key: k, direction: I } of r) {
        const h = H[k], g = G[k];
        if (h == null && g == null) continue;
        if (h == null) return 1;
        if (g == null) return -1;
        let B = 0;
        if (typeof h == "number" && typeof g == "number" ? B = h - g : B = String(h).localeCompare(String(g)), B !== 0)
          return I === "asc" ? B : -B;
      }
      return 0;
    }), [e, r]), O = q((H, G) => {
      setTimeout(() => {
        const k = F.current?.querySelector(
          `tbody tr:nth-child(${H + 1}) td:nth-child(${G + 1})`
        );
        k && (k.focus(), typeof k.scrollIntoView == "function" && k.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), K = q((H) => {
      setTimeout(() => {
        const G = F.current?.querySelector(`th:nth-child(${H + 1})`);
        G && (G.focus(), typeof G.scrollIntoView == "function" && G.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), X = q((H) => {
      a?.(H);
    }, [a]), te = q((H) => {
      o?.(H);
    }, [o]), D = q((H) => {
      const { key: G } = H;
      switch (G) {
        case "Enter":
          if (H.preventDefault(), y === "headers" && f === "browse")
            $("navigate"), K(L);
          else if (y === "headers" && f === "navigate") {
            const k = t[L];
            k && X(k.key);
          } else y === "cells" && f === "browse" ? ($("navigate"), O(A, L)) : y === "cells" && f === "navigate" && te(A);
          break;
        case "Escape":
          H.preventDefault(), (y === "headers" && f === "navigate" || y === "cells" && f === "navigate") && $("browse");
          break;
        case "ArrowLeft":
          if (H.preventDefault(), f === "navigate" || f === "browse" && y === "headers") {
            if (y === "headers") {
              const k = Math.max(0, L - 1);
              _(k), K(k);
            } else if (y === "cells") {
              const k = Math.max(0, L - 1);
              _(k), O(A, k);
            }
          }
          break;
        case "ArrowRight":
          if (H.preventDefault(), f === "navigate" || f === "browse" && y === "headers") {
            if (y === "headers") {
              const k = Math.min(ee - 1, L + 1);
              _(k), K(k);
            } else if (y === "cells") {
              const k = Math.min(ee - 1, L + 1);
              _(k), O(A, k);
            }
          }
          break;
        case "ArrowUp":
          if (H.preventDefault(), y === "cells") {
            if (f === "browse") {
              const k = Math.max(0, A - 1);
              N(k), O(k, 0), _(0);
            } else if (f === "navigate")
              if (A > 0) {
                const k = A - 1;
                N(k), O(k, L);
              } else
                v("headers"), $("browse"), K(L);
          }
          break;
        case "ArrowDown":
          if (H.preventDefault(), y === "headers" && f === "browse")
            v("cells"), N(0), _(0), O(0, 0);
          else if (y === "cells") {
            const k = Z - 1;
            if (f === "browse") {
              const I = Math.min(k, A + 1);
              N(I), O(I, 0), _(0);
            } else if (f === "navigate" && A < k) {
              const I = A + 1;
              N(I), O(I, L);
            }
          }
          break;
        case "Home":
          H.preventDefault(), y === "headers" ? (_(0), K(0)) : y === "cells" && (H.ctrlKey ? (N(0), _(0), O(0, 0)) : (_(0), O(A, 0)));
          break;
        case "End":
          if (H.preventDefault(), y === "headers") {
            const k = ee - 1;
            _(k), K(k);
          } else if (y === "cells")
            if (H.ctrlKey) {
              const k = Z - 1, I = ee - 1;
              N(k), _(I), O(k, I);
            } else {
              const k = ee - 1;
              _(k), O(A, k);
            }
          break;
        case " ":
          if (H.preventDefault(), y === "headers" && f === "navigate") {
            const k = t[L];
            k && X(k.key);
          } else y === "cells" && f === "navigate" && te(A);
          break;
      }
    }, [
      y,
      f,
      L,
      A,
      ee,
      Z,
      t,
      O,
      K,
      X,
      te
    ]);
    se(() => {
      const H = F.current;
      if (H)
        return H.addEventListener("keydown", D), () => H.removeEventListener("keydown", D);
    }, [D]);
    const V = U(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": b,
        "nhsuk-table--bordered": S,
        "nhsuk-table--striped": R,
        "nhsuk-table--compact": C === "compact"
      },
      m
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: F,
        className: V,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": u,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: M, role: "row", children: t.map((H, G) => {
            const k = r?.find((g) => g.key === H.key), I = !!k, h = y === "headers" && L === G;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: U("sortable-header", {
                  "sortable-header--focused": h
                }),
                role: "columnheader",
                tabIndex: h ? 0 : -1,
                onClick: () => X(H.key),
                onKeyDown: (g) => {
                  (g.key === "Enter" || g.key === " ") && (g.preventDefault(), X(H.key));
                },
                "aria-sort": I ? k?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: H.label }),
                  I && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((g) => g.key === H.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: k?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              H.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: j, className: "nhsuk-table__body", role: "rowgroup", children: P.map((H, G) => {
            const k = s === G, I = y === "cells" && A === G;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: U("data-row", {
                  "data-row--selected": k,
                  "data-row--focused": I
                }),
                "aria-selected": k,
                children: t.map((h, g) => {
                  const B = h.render ? h.render(H) : H[h.key], w = y === "cells" && A === G && L === g, E = () => typeof B == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: B ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: B ? "Yes" : "No" })
                  ] }) : String(B ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: U("data-cell", {
                        "data-cell--focused": w
                      }),
                      tabIndex: w ? 0 : -1,
                      onClick: () => te(G),
                      children: E()
                    },
                    h.key
                  );
                })
              },
              G
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
  ariaLabel: u = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const m = oe(null), p = oe(null), S = oe(null), R = q((y, v) => {
    c || (p.current = v, y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", v));
  }, [c]), b = q((y, v) => {
    c || p.current === v || (y.preventDefault(), y.dataTransfer.dropEffect = "move", S.current = v);
  }, [c]), C = q((y, v) => {
    if (c) return;
    y.preventDefault();
    const f = p.current;
    if (!f || f === v) return;
    const $ = e.findIndex((Z) => Z.key === f), ee = e.findIndex((Z) => Z.key === v);
    if ($ !== -1 && ee !== -1) {
      const Z = [...e], [P] = Z.splice($, 1);
      Z.splice(ee, 0, P), r(Z);
    }
    p.current = null, S.current = null;
  }, [c, e, r]), T = q(() => {
    p.current = null, S.current = null;
  }, []), F = q((y) => {
    const v = t.find((f) => f.key === y);
    return v ? v.label : y;
  }, [t]), M = q((y) => ["red", "orange", "blue", "aqua-green", "grey"][y] || "grey", []), j = q((y) => {
    if (c) return;
    const v = e.map(
      (f) => f.key === y ? { ...f, direction: f.direction === "asc" ? "desc" : "asc" } : f
    );
    r(v);
  }, [e, r, c]), A = q((y) => {
    if (c) return;
    const v = e.filter((f) => f.key !== y);
    r(v);
  }, [e, r, c]), N = q(() => {
    c || r([]);
  }, [r, c]), L = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const y = e.map((v, f) => {
      const $ = v.direction === "asc" ? "ascending" : "descending";
      return `${f + 1}. ${F(v.key)} (${$})`;
    });
    if (y.length === 1)
      return `Sorted by: ${y[0]}`;
    if (y.length === 2)
      return `Sorted by: ${y.join(" and ")}`;
    {
      const v = y.pop();
      return `Sorted by: ${y.join(", ")}, and ${v}`;
    }
  }, _ = le(() => {
    const y = ["sort-description"];
    return l && y.push("sort-help"), d && y.push(d), y.join(" ");
  }, [l, d]);
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
        children: L()
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: m,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": u,
          "aria-describedby": _,
          children: e.map((y, v) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (f) => R(f, y.key),
              onDragOver: (f) => b(f, y.key),
              onDrop: (f) => C(f, y.key),
              onDragEnd: T,
              onClick: () => j(y.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": y.key,
              children: /* @__PURE__ */ n.jsx(
                Me,
                {
                  color: M(v),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => A(y.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${v + 1}`, children: v + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: F(y.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (f) => {
                          f.stopPropagation(), j(y.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${F(y.key)}. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${y.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${y.direction}`,
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
            y.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        me,
        {
          variant: "secondary",
          onClick: N,
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
      for (let u = 0; u < Math.min(e.tabLoadingStates.length, o); u++)
        i[u] = e.tabLoadingStates[u], l[u] = e.tabErrors[u], c[u] = e.selectedRows[u];
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
      ariaDescription: u,
      className: d = "",
      disabled: m = !1,
      orientation: p = "horizontal",
      id: S,
      isLoading: R = !1,
      loadingComponent: b,
      error: C = null,
      errorComponent: T,
      "data-testid": F
    } = t, {
      dataComparator: M = (h, g) => JSON.stringify(h) === JSON.stringify(g),
      filterFunction: j = (h) => h,
      booleanRenderer: A = (h) => h ? "✓" : "✗"
    } = a || {}, N = o !== void 0, L = o ?? 0, [_, y] = re({
      focusArea: "tabs",
      focusedTabIndex: L,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), v = le(() => ({
      selectedIndex: L,
      tabLoadingStates: new Array(s.length).fill(!1),
      tabErrors: new Array(s.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(s.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [L]), [f, $] = Rr(Ui, v);
    se(() => {
      const h = f.tabLoadingStates.length, g = s.length;
      h !== g && $({ type: "ADJUST_ARRAYS", payload: { newLength: g } });
    }, [s.length]), se(() => {
      N && $({ type: "SET_SELECTED_INDEX", payload: L });
    }, [L, N]), se(() => {
      y((h) => ({
        ...h,
        focusArea: "tabs",
        focusedTabIndex: f.selectedIndex,
        focusedHeaderIndex: 0,
        focusedRowIndex: 0,
        focusedColumnIndex: 0,
        isGridActive: !1
      }));
    }, [f.selectedIndex]), se(() => {
      l && l(f.globalSelectedRowData);
    }, [f.globalSelectedRowData, l]);
    const ee = q((h, g) => M(h, g), [M]), Z = q((h) => {
      h >= 0 && h < s.length && !s[h].disabled && ($({ type: "SET_SELECTED_INDEX", payload: h }), y((g) => ({
        ...g,
        focusedTabIndex: h,
        focusArea: "tabs"
      })), i?.(h));
    }, [s, i]), P = q((h) => {
      console.log("scrollTabIntoView called with tabIndex:", h), setTimeout(() => {
        console.log("scrollTabIntoView timeout executing for tabIndex:", h);
        const g = K.current[h], B = g?.parentElement;
        if (console.log("scrollTabIntoView debug:", {
          tabIndex: h,
          tabElement: g,
          tabListElement: B,
          tabRefsLength: K.current.length,
          allTabRefs: K.current.map((w, E) => ({ index: E, hasRef: !!w }))
        }), g && B) {
          const w = g.offsetLeft, E = g.offsetWidth, z = B.clientWidth, x = w - z / 2 + E / 2;
          console.log("Scroll calculation:", {
            tabOffsetLeft: w,
            tabWidth: E,
            tabListWidth: z,
            targetScrollLeft: x
          });
          try {
            B.scrollTo({
              left: Math.max(0, x),
              behavior: "smooth"
            }), console.log("scrollTo executed successfully");
          } catch (Y) {
            console.log("scrollTo failed, using fallback:", Y), g.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else
          console.log("Missing elements for scroll:", { tabElement: g, tabListElement: B });
      }, 50);
    }, []), O = q((h, g) => {
      const { key: B } = h;
      switch (B) {
        case "ArrowLeft":
          console.log("ArrowLeft key pressed, calling scrollTabIntoView"), h.preventDefault();
          const w = g > 0 ? g - 1 : s.length - 1;
          Z(w), P(w), K.current[w]?.focus();
          break;
        case "ArrowRight":
          console.log("ArrowRight key pressed, calling scrollTabIntoView"), h.preventDefault();
          const E = g < s.length - 1 ? g + 1 : 0;
          Z(E), P(E), K.current[E]?.focus();
          break;
        case "ArrowDown":
          h.preventDefault(), y((x) => ({
            ...x,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        case "Home":
          h.preventDefault(), Z(0), P(0), K.current[0]?.focus();
          break;
        case "End":
          h.preventDefault();
          const z = s.length - 1;
          Z(z), P(z), K.current[z]?.focus();
          break;
        case "Enter":
        case " ":
          h.preventDefault(), Z(g);
          break;
      }
    }, [s.length, Z, P]), K = oe([]), X = oe([]), te = q((h, g) => {
      const B = f.sortConfig || [], w = B.find((x) => x.key === g);
      let E;
      w ? w.direction === "asc" ? E = B.map(
        (x) => x.key === g ? { ...x, direction: "desc" } : x
      ) : E = B.filter((x) => x.key !== g) : E = [...B, { key: g, direction: "asc" }], $({
        type: "SET_SORT",
        payload: E
      }), s[h].onSort?.(g);
    }, [f.sortConfig, s]), D = q((h) => {
      setTimeout(() => {
        const g = document.querySelector(
          `[data-tab-panel="${f.selectedIndex}"] th:nth-child(${h + 1})`
        );
        g && g.focus();
      }, 0);
    }, [f.selectedIndex]), V = q((h) => A(h), [A]), H = q((h, g) => {
      setTimeout(() => {
        const B = document.querySelector(
          `[data-tab-panel="${f.selectedIndex}"] tbody tr:nth-child(${h + 1}) td:nth-child(${g + 1})`
        );
        B && B.focus();
      }, 0);
    }, [f.selectedIndex]);
    se(() => {
      _.isGridActive && (_.focusArea === "headers" ? setTimeout(() => {
        D(_.focusedHeaderIndex);
      }, 0) : _.focusArea === "cells" && setTimeout(() => {
        H(_.focusedRowIndex, _.focusedColumnIndex);
      }, 0));
    }, [_.focusArea, _.isGridActive, _.focusedHeaderIndex, _.focusedRowIndex, _.focusedColumnIndex, D, H]), se(() => {
      P(f.selectedIndex);
    }, [f.selectedIndex, P]);
    const G = q((h, g) => {
      const { key: B } = h, w = s[f.selectedIndex], E = w?.columns.length || 0;
      switch (B) {
        case "ArrowLeft":
          h.preventDefault();
          const z = Math.max(0, g - 1);
          y((J) => ({ ...J, focusedHeaderIndex: z })), D(z);
          break;
        case "ArrowRight":
          h.preventDefault();
          const x = Math.min(E - 1, g + 1);
          y((J) => ({ ...J, focusedHeaderIndex: x })), D(x);
          break;
        case "ArrowUp":
          h.preventDefault(), y((J) => ({
            ...J,
            focusArea: "tabs",
            focusedTabIndex: f.selectedIndex
          })), P(f.selectedIndex), K.current[f.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          h.preventDefault(), y((J) => ({
            ...J,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: g,
            isGridActive: !0
          }));
          break;
        case "Home":
          h.preventDefault(), y((J) => ({ ...J, focusedHeaderIndex: 0 })), D(0);
          break;
        case "End":
          h.preventDefault();
          const Y = E - 1;
          y((J) => ({ ...J, focusedHeaderIndex: Y })), D(Y);
          break;
        case "Enter":
        case " ":
          h.preventDefault();
          const Q = w?.columns[g]?.key;
          Q && te(f.selectedIndex, Q);
          break;
      }
    }, [s, f.selectedIndex, te, y, D, H, K]), k = q((h, g, B) => {
      const { key: w } = h, E = s[f.selectedIndex], z = E?.data.length || 0, x = E?.columns.length || 0;
      switch (w) {
        case "ArrowUp":
          if (h.preventDefault(), g === 0)
            y((W) => ({
              ...W,
              focusArea: "headers",
              focusedHeaderIndex: B,
              isGridActive: !1
            })), D(B);
          else {
            const W = g - 1;
            y((ne) => ({ ...ne, focusedRowIndex: W })), H(W, B);
          }
          break;
        case "ArrowDown":
          h.preventDefault();
          const Y = Math.min(z - 1, g + 1);
          y((W) => ({ ...W, focusedRowIndex: Y })), H(Y, B);
          break;
        case "ArrowLeft":
          h.preventDefault();
          const Q = Math.max(0, B - 1);
          y((W) => ({ ...W, focusedColumnIndex: Q })), H(g, Q);
          break;
        case "ArrowRight":
          h.preventDefault();
          const J = Math.min(x - 1, B + 1);
          y((W) => ({ ...W, focusedColumnIndex: J })), H(g, J);
          break;
        case "Home":
          h.preventDefault(), h.ctrlKey ? (y((W) => ({ ...W, focusedRowIndex: 0, focusedColumnIndex: 0 })), H(0, 0)) : (y((W) => ({ ...W, focusedColumnIndex: 0 })), H(g, 0));
          break;
        case "End":
          if (h.preventDefault(), h.ctrlKey) {
            const W = z - 1, ne = x - 1;
            y((ce) => ({ ...ce, focusedRowIndex: W, focusedColumnIndex: ne })), H(W, ne);
          } else {
            const W = x - 1;
            y((ne) => ({ ...ne, focusedColumnIndex: W })), H(g, W);
          }
          break;
        case "Enter":
        case " ":
          if (h.preventDefault(), E && E.data[g]) {
            const W = E.data.some((ie) => "ews_data" in ie) ? j(E.data, f.filters) : E.data, ne = f.sortConfig;
            let ce = W;
            if (ne && ne.length > 0 && (ce = [...W].sort((ie, ge) => {
              for (const { key: _e, direction: Ae } of ne) {
                let ke = ie[_e], Ge = ge[_e];
                const Jt = E.columns.find((Ka) => Ka.key === _e);
                if (Jt?.render && (ke = Jt.render(ie), Ge = Jt.render(ge)), ke == null && Ge == null) continue;
                if (ke == null) return Ae === "asc" ? -1 : 1;
                if (Ge == null) return Ae === "asc" ? 1 : -1;
                let Qe = 0;
                if (typeof ke == "number" && typeof Ge == "number" ? Qe = ke - Ge : Qe = String(ke).localeCompare(String(Ge), void 0, { numeric: !0, sensitivity: "base" }), Qe !== 0)
                  return Ae === "asc" ? Qe : -Qe;
              }
              return 0;
            })), ce[g]) {
              const ie = ce[g], _e = f.globalSelectedRowData && ee(f.globalSelectedRowData, ie) ? null : ie;
              $({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: _e
              });
            }
          }
          break;
      }
    }, [s, f.selectedIndex, f.filters, f.sortConfig, j, ee, $, y, D, H]), I = q((h, g) => j(h, g), [j]);
    return Fr(r, () => ({
      selectTab: (h) => {
        h >= 0 && h < s.length && ($({ type: "SET_SELECTED_INDEX", payload: h }), i?.(h));
      },
      refreshData: (h) => {
        console.log("Refreshing data for tab:", h ?? "all");
      },
      exportData: (h) => {
        const g = h ?? f.selectedIndex, B = s[g];
        return B ? B.data : [];
      },
      getSelectedRows: (h) => f.globalSelectedRowData ? [] : [],
      clearSelection: (h) => {
        $({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (h) => {
        $({ type: "SET_FILTERS", payload: h });
      }
    }), [f.selectedIndex, f.selectedRows, s, i]), R ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": F, children: b || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : C ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": F, children: T || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: C })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${p} ${d}`,
        id: S,
        "data-testid": F,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${S}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Oi,
            {
              sortConfig: f.sortConfig || [],
              columns: s.flatMap(
                (h) => h.columns.map((g) => ({ key: g.key, label: g.label }))
              ).filter(
                (h, g, B) => B.findIndex((w) => w.key === h.key) === g
                // Remove duplicates
              ),
              onSortChange: (h) => {
                $({ type: "SET_SORT", payload: h });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": `${u || ""} ${S ? `${S}-navigation-help` : ""}`.trim(),
              "aria-orientation": p,
              className: "aria-tabs-datagrid__tabs",
              children: s.map((h, g) => {
                const B = g === f.selectedIndex, w = h.disabled || m;
                return console.log(`Tab ${g} (${h.label}): disabled=${w}, panel.disabled=${h.disabled}, global disabled=${m}`), /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${h.id}`,
                    "aria-controls": `panel-${h.id}`,
                    "aria-selected": B,
                    "aria-disabled": w,
                    tabIndex: B ? 0 : -1,
                    ref: (E) => {
                      K.current[g] = E;
                    },
                    onClick: () => Z(g),
                    onKeyDown: (E) => O(E, g),
                    disabled: w,
                    className: `
                  aria-tabs-datagrid__tab
                  ${B ? "aria-tabs-datagrid__tab--selected" : ""}
                  ${w ? "aria-tabs-datagrid__tab--disabled" : ""}
                `.trim(),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: h.label }),
                      f.tabLoadingStates[g] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      f.tabErrors[g] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  h.id
                );
              })
            }
          ),
          s.map((h, g) => {
            const B = g === f.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${h.id}`,
                "aria-labelledby": `tab-${h.id}`,
                tabIndex: 0,
                hidden: !B,
                ref: (w) => {
                  X.current[g] = w;
                },
                className: `aria-tabs-datagrid__panel ${h.className || ""}`,
                "data-tab-panel": g,
                children: B && (() => {
                  const w = h.data.some((z) => "ews_data" in z) ? I(h.data, f.filters) : h.data, E = le(() => {
                    const z = f.sortConfig;
                    return !z || z.length === 0 ? w : [...w].sort((x, Y) => {
                      for (const { key: Q, direction: J } of z) {
                        let W = x[Q], ne = Y[Q];
                        const ce = h.columns.find((ge) => ge.key === Q);
                        if (ce?.render && (W = ce.render(x), ne = ce.render(Y)), W == null && ne == null) continue;
                        if (W == null) return 1;
                        if (ne == null) return -1;
                        let ie = 0;
                        if (typeof W == "number" && typeof ne == "number" ? ie = W - ne : typeof W == "boolean" && typeof ne == "boolean" ? ie = W === ne ? 0 : W ? 1 : -1 : ie = String(W).localeCompare(String(ne), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), ie !== 0)
                          return J === "asc" ? ie : -ie;
                      }
                      return 0;
                    });
                  }, [w, f.sortConfig, h.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": h.ariaLabel,
                      "aria-describedby": h.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: h.columns.map((z, x) => {
                          const Y = f.sortConfig?.find((W) => W.key === z.key), Q = !!Y, J = _.focusArea === "headers" && _.focusedHeaderIndex === x;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${J ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: J ? 0 : -1,
                              onClick: () => te(g, z.key),
                              onKeyDown: (W) => G(W, x),
                              "aria-sort": Q ? Y?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: z.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${Q ? `sort-indicator--${Y?.direction}` : ""}`, children: [
                                  f.sortConfig && f.sortConfig.length > 0 && f.sortConfig.findIndex((W) => W.key === z.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${f.sortConfig.findIndex((W) => W.key === z.key) + 1}`,
                                      "data-priority": f.sortConfig.findIndex((W) => W.key === z.key) + 1,
                                      title: `Sort priority: ${f.sortConfig.findIndex((W) => W.key === z.key) + 1}`,
                                      children: f.sortConfig.findIndex((W) => W.key === z.key) + 1
                                    }
                                  ),
                                  Q && /* @__PURE__ */ n.jsx(
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
                            z.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: E.map((z, x) => {
                          const Y = f.globalSelectedRowData && ee(f.globalSelectedRowData, z), Q = _.focusArea === "cells" && _.focusedRowIndex === x;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${Y ? "data-row--selected" : ""} ${Q ? "data-row--focused" : ""}`,
                              "aria-selected": Y,
                              children: h.columns.map((J, W) => {
                                const ne = J.render ? J.render(z) : z[J.key], ce = _.focusArea === "cells" && _.focusedRowIndex === x && _.focusedColumnIndex === W, ie = () => typeof ne == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  V(ne),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ne ? "Yes" : "No" })
                                ] }) : String(ne ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${ce ? "data-cell--focused" : ""}`,
                                    tabIndex: ce ? 0 : -1,
                                    onClick: () => {
                                      const _e = f.globalSelectedRowData && ee(f.globalSelectedRowData, z) ? null : z;
                                      $({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: _e
                                      });
                                    },
                                    onKeyDown: (ge) => k(ge, x, W),
                                    children: ie()
                                  },
                                  J.key
                                );
                              })
                            },
                            x
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
  ariaDescribedBy: u
}) => {
  const d = le(() => Gi(e), [e]), m = q((F) => {
    if (l) return;
    const M = e.map(
      (j) => j.id === F ? { ...j, direction: j.direction === "asc" ? "desc" : "asc" } : j
    );
    t(M);
  }, [e, t, l]), p = q((F) => {
    if (l) return;
    const M = e.findIndex((A) => A.id === F);
    if (M <= 0) return;
    const j = [...e];
    [j[M], j[M - 1]] = [j[M - 1], j[M]], t(ln(j));
  }, [e, t, l]), S = q((F) => {
    if (l) return;
    const M = e.findIndex((A) => A.id === F);
    if (M >= e.length - 1 || M === -1) return;
    const j = [...e];
    [j[M], j[M + 1]] = [j[M + 1], j[M]], t(ln(j));
  }, [e, t, l]), R = q((F) => {
    if (l) return;
    const M = e.filter((j) => j.id !== F);
    t(ln(M));
  }, [e, t, l]), b = q(() => {
    l || t([]);
  }, [t, l]), C = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const F = d.map((M, j) => {
      const A = M.direction === "asc" ? "ascending" : "descending";
      return `${j + 1}. ${M.label} (${A})`;
    });
    if (F.length === 1)
      return `Sorted by: ${F[0]}`;
    if (F.length === 2)
      return `Sorted by: ${F.join(" and ")}`;
    {
      const M = F.pop();
      return `Sorted by: ${F.join(", ")}, and ${M}`;
    }
  }, T = le(() => {
    const F = ["sort-description"];
    return i && F.push("sort-help"), u && F.push(u), F.join(" ");
  }, [i, u]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: C()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: C()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": c,
        "aria-describedby": T,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((F) => /* @__PURE__ */ n.jsx(
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
                  onClose: () => R(F.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: F.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: F.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => m(F.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${F.label}. Currently ${F.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: F.direction === "asc" ? ft.asc : ft.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(F.id),
                          disabled: l || !Vi(F.id, e),
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
                          onClick: () => S(F.id),
                          disabled: l || !qi(F.id, e),
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
      for (let u = 0; u < Math.min(e.tabLoadingStates.length, o); u++)
        i[u] = e.tabLoadingStates[u], l[u] = e.tabErrors[u], c[u] = e.selectedRows[u];
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
  return se(() => {
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
  } = r, l = t.find((b) => b.key === a), c = l?.render ? l.render(e) : e[a || "name"] || "Untitled", u = () => s.filter((C) => !i.includes(C) && e[C]).slice(0, 3).map((C) => {
    const T = t.find((j) => j.key === C), F = T?.render ? T.render(e) : e[C];
    return `${T?.label || C}: ${F}`;
  }).join(" • "), d = () => o.length === 0 ? null : o.filter((b) => e[b] !== void 0).map((b) => {
    const C = t.find((F) => F.key === b), T = C?.render ? C.render(e) : e[b];
    if (b === "ews_score") {
      const F = Number(T);
      return `<span class="nhsuk-tag nhsuk-tag--${F >= 7 ? "high" : F >= 3 ? "medium" : "low"} adaptive-card__ews-badge">EWS: ${T}</span>`;
    }
    return `<span class="nhsuk-tag adaptive-card__badge">${T}</span>`;
  }).join(""), m = () => e.ews_score && Number(e.ews_score) >= 7 || e.priority === "high" || e.status === "urgent" ? "primary" : "default", p = d(), S = u(), R = p ? `${S}${p ? `<div class="adaptive-card__badges">${p}</div>` : ""}` : S;
  return {
    variant: m(),
    heading: String(c),
    descriptionHtml: R,
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
  ariaDescription: u,
  orientation: d = "horizontal",
  id: m,
  disabled: p = !1,
  className: S,
  ...R
}) => {
  const b = nl(e, t), C = i !== void 0, T = i ?? 0, F = le(() => ({
    selectedIndex: T,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [T, s.length]), [M, j] = Rr(tl, F), A = oe([]), N = oe([]), L = oe(null), [_, y] = re({
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
  }), v = q((k) => {
    if (!k.current)
      return { columns: 1, rows: 0 };
    const I = k.current, h = I.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (h.length === 0)
      return { columns: 1, rows: 0 };
    const g = I.offsetWidth, w = h[0].offsetWidth, E = Math.floor(g / w) || 1, z = Math.ceil(h.length / E);
    return { columns: E, rows: z };
  }, []), f = q((k, I) => ({
    row: Math.floor(k / I),
    col: k % I
  }), []), $ = q((k, I, h) => k * h + I, []), ee = q((k, I, h, g) => {
    const { row: B, col: w } = f(k, g);
    let E = B, z = w;
    switch (I) {
      case "up":
        E = Math.max(0, B - 1);
        break;
      case "down":
        E = Math.min(Math.floor((h - 1) / g), B + 1);
        break;
      case "left":
        z = Math.max(0, w - 1);
        break;
      case "right":
        z = Math.min(g - 1, w + 1);
        break;
    }
    const x = $(E, z, g);
    return Math.min(x, h - 1);
  }, [f, $]);
  se(() => {
    _.isCardNavigationActive && _.focusedCardElementIndex >= 0 && _.cardElements.length > 0 && setTimeout(() => {
      const k = _.cardElements[_.focusedCardElementIndex];
      k && (k.element.focus(), k.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [_.isCardNavigationActive, _.focusedCardElementIndex, _.cardElements.length]), se(() => {
    const k = () => {
      if (b === "cards" && L.current) {
        const { columns: g, rows: B } = v(L);
        y((w) => ({
          ...w,
          gridColumns: g,
          gridRows: B
        }));
      }
    }, I = setTimeout(k, 200), h = () => {
      setTimeout(k, 100);
    };
    return window.addEventListener("resize", h), () => {
      clearTimeout(I), window.removeEventListener("resize", h);
    };
  }, [b, s, v]), se(() => {
    const k = M.tabLoadingStates.length, I = s.length;
    k !== I && j({ type: "ADJUST_ARRAYS", payload: { newLength: I } });
  }, [s.length, M.tabLoadingStates.length]), se(() => {
    C && i !== M.selectedIndex && j({ type: "SET_SELECTED_INDEX", payload: i });
  }, [C, i, M.selectedIndex]);
  const Z = q((k) => {
    k >= 0 && k < s.length && !s[k].disabled && (j({ type: "SET_SELECTED_INDEX", payload: k }), l?.(k));
  }, [s, l]), P = q((k) => {
    console.log("Card selected:", k), j({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: k
    });
  }, []), O = q((k) => {
    const I = N.current[k];
    I && (I.focus(), I.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), K = q((k) => {
    const I = N.current[k];
    if (!I) return [];
    const h = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), g = I.querySelectorAll(h);
    return Array.from(g).map((B, w) => ({
      id: B.id || `card-${k}-element-${w}`,
      element: B,
      label: B.getAttribute("aria-label") || B.textContent?.trim() || B.getAttribute("title") || `Element ${w + 1}`,
      type: B.tagName.toLowerCase() === "button" ? "button" : B.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(B.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), X = q((k) => {
    const I = document.createElement("div");
    I.setAttribute("aria-live", "polite"), I.setAttribute("aria-atomic", "true"), I.className = "sr-only", I.textContent = k, document.body.appendChild(I), setTimeout(() => {
      document.body.removeChild(I);
    }, 1e3);
  }, []), te = q((k, I) => {
    const h = K(k), g = h[I];
    if (g) {
      g.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const B = `Focused on ${g.label}, ${g.type} ${I + 1} of ${h.length} within card`;
      X(B);
    }
  }, [K, X]), D = q((k) => {
    A.current[k]?.focus();
  }, []), V = q((k, I) => {
    const { key: h } = k, g = s[M.selectedIndex], B = g?.data.length || 0;
    if (h === "ArrowLeft" && k.shiftKey) {
      k.preventDefault(), k.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (h === "ArrowRight" && k.shiftKey) {
      k.preventDefault(), k.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!_.isCardNavigationActive) {
      switch (h) {
        case "ArrowUp":
          if (k.preventDefault(), I === 0)
            y((x) => ({ ...x, focusArea: "tabs" })), D(M.selectedIndex);
          else {
            const x = ee(I, "up", B, _.gridColumns);
            x !== I && (y((Y) => ({ ...Y, focusedCardIndex: x })), O(x), X(`Moved to card ${x + 1} of ${B}`));
          }
          break;
        case "ArrowDown":
          k.preventDefault();
          const w = ee(I, "down", B, _.gridColumns);
          w !== I && (y((x) => ({ ...x, focusedCardIndex: w })), O(w), X(`Moved to card ${w + 1} of ${B}`));
          break;
        case "ArrowLeft":
          k.preventDefault();
          const E = ee(I, "left", B, _.gridColumns);
          E !== I ? (y((x) => ({ ...x, focusedCardIndex: E })), O(E), X(`Moved to card ${E + 1} of ${B}`)) : M.selectedIndex > 0 && (j({ type: "SET_SELECTED_INDEX", payload: M.selectedIndex - 1 }), y((x) => ({ ...x, focusArea: "tabs" })), setTimeout(() => D(M.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          k.preventDefault();
          const z = ee(I, "right", B, _.gridColumns);
          z !== I ? (y((x) => ({ ...x, focusedCardIndex: z })), O(z), X(`Moved to card ${z + 1} of ${B}`)) : M.selectedIndex < s.length - 1 && (j({ type: "SET_SELECTED_INDEX", payload: M.selectedIndex + 1 }), y((x) => ({ ...x, focusArea: "tabs" })), setTimeout(() => D(M.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (g?.data[I]) {
            k.preventDefault(), y((Y) => ({
              ...Y,
              selectedCardIndex: I
            }));
            const x = K(I);
            x.length > 0 ? (y((Y) => ({
              ...Y,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: x,
              selectedCardIndex: I
              // Ensure selection is maintained
            })), X(`Card ${I + 1} selected and navigation activated. ${x.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : X(`Card ${I + 1} selected.`);
          }
          break;
        case " ":
          if (g?.data[I]) {
            k.preventDefault(), y((Y) => ({
              ...Y,
              selectedCardIndex: Y.selectedCardIndex === I ? -1 : I
            }));
            const x = _.selectedCardIndex === I;
            X(`Card ${I + 1} ${x ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (h) {
      case "ArrowUp":
      case "ArrowLeft":
        k.preventDefault();
        const w = Math.max(0, _.focusedCardElementIndex - 1);
        y((Y) => ({ ...Y, focusedCardElementIndex: w })), te(I, w);
        break;
      case "ArrowDown":
      case "ArrowRight":
        k.preventDefault();
        const E = Math.min(_.cardElements.length - 1, _.focusedCardElementIndex + 1);
        y((Y) => ({ ...Y, focusedCardElementIndex: E })), te(I, E);
        break;
      case "Enter":
        k.preventDefault();
        const z = _.cardElements[_.focusedCardElementIndex];
        z && (z.element.click(), X(`Activated ${z.label}`));
        break;
      case " ":
        k.preventDefault();
        const x = _.cardElements[_.focusedCardElementIndex];
        if (x) {
          const Y = new MouseEvent("dblclick", { bubbles: !0 });
          x.element.dispatchEvent(Y), X(`Double-clicked ${x.label}`);
        }
        break;
      case "Escape":
        k.preventDefault(), y((Y) => ({
          ...Y,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => O(I), 0), X("Exited card navigation, returned to card level");
        break;
      case "Home":
        k.preventDefault(), _.cardElements.length > 0 && (y((Y) => ({ ...Y, focusedCardElementIndex: 0 })), te(I, 0));
        break;
      case "End":
        if (k.preventDefault(), _.cardElements.length > 0) {
          const Y = _.cardElements.length - 1;
          y((Q) => ({ ...Q, focusedCardElementIndex: Y })), te(I, Y);
        }
        break;
    }
  }, [_, M.selectedIndex, s, P, O, D, y, K, te, X]), H = q((k) => {
    console.log("scrollTabIntoViewMobile called for index:", k);
    const I = A.current[k], h = I?.parentElement;
    if (!I || !h) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const g = I.getBoundingClientRect(), B = h.getBoundingClientRect();
    g.left >= B.left && g.right <= B.right || (console.log("Tab not visible, scrolling into view (mobile)"), I.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), G = q((k, I) => {
    if (b !== "cards")
      return;
    console.log("handleTabKeyDownWithCards called with key:", k.key, "index:", I);
    const { key: h } = k;
    switch (h) {
      case "ArrowLeft":
        k.preventDefault();
        const g = I > 0 ? I - 1 : s.length - 1;
        Z(g), y((E) => ({ ...E, focusedTabIndex: g })), A.current[g]?.focus(), H(g);
        break;
      case "ArrowRight":
        k.preventDefault();
        const B = I < s.length - 1 ? I + 1 : 0;
        Z(B), y((E) => ({ ...E, focusedTabIndex: B })), A.current[B]?.focus(), H(B);
        break;
      case "ArrowDown":
        k.preventDefault(), y((E) => ({
          ...E,
          focusArea: "cards",
          focusedCardIndex: 0
        })), O(0);
        break;
      case "Home":
        k.preventDefault(), Z(0), y((E) => ({ ...E, focusedTabIndex: 0 })), A.current[0]?.focus(), H(0);
        break;
      case "End":
        k.preventDefault();
        const w = s.length - 1;
        Z(w), y((E) => ({ ...E, focusedTabIndex: w })), A.current[w]?.focus(), H(w);
        break;
      case "Enter":
      case " ":
        k.preventDefault(), Z(I);
        break;
    }
  }, [s.length, Z, b, O, y, H]);
  if (b === "cards") {
    const k = s[M.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${S || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": c,
          "aria-describedby": `${u || ""} ${m ? `${m}-navigation-help` : ""}`.trim(),
          "aria-orientation": d,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((I, h) => {
            const g = h === M.selectedIndex, B = I.disabled || p;
            return console.log(`Mobile Tab ${h} (${I.label}): disabled=${B}, panel.disabled=${I.disabled}, global disabled=${p}`), /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${I.id}`,
                "aria-controls": `panel-${I.id}`,
                "aria-selected": g,
                "aria-disabled": B,
                tabIndex: g ? 0 : -1,
                ref: (w) => {
                  A.current[h] = w;
                },
                onClick: () => Z(h),
                onKeyDown: (w) => G(w, h),
                disabled: B,
                className: `
				  aria-tabs-datagrid__tab
				  ${g ? "aria-tabs-datagrid__tab--selected" : ""}
				  ${B ? "aria-tabs-datagrid__tab--disabled" : ""}
				`.trim(),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: I.label }),
                  M.tabLoadingStates[h] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  M.tabErrors[h] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              I.id
            );
          })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: L,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${k?.label || "Data"} cards in ${_.gridRows} rows and ${_.gridColumns} columns`,
          "aria-rowcount": _.gridRows,
          "aria-colcount": _.gridColumns,
          id: `panel-${k?.id}`,
          "aria-labelledby": `tab-${k?.id}`,
          children: k?.data.map((I, h) => {
            const g = _.selectedCardIndex === h, B = _.focusedCardIndex === h && _.focusArea === "cards", w = _.focusedCardIndex === h && _.focusArea === "card" && _.isCardNavigationActive, E = h === 0 && _.focusArea !== "cards", z = B || E, x = f(h, _.gridColumns);
            if (r.cardTemplate) {
              const J = r.cardTemplate(I, k.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: (W) => {
                    N.current[h] = W;
                  },
                  className: `
					aria-tabs-datagrid-adaptive__card-wrapper
					${g ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : ""}
					${B ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : ""}
					${w ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""}
				  `.trim(),
                  role: "gridcell",
                  "aria-rowindex": x.row + 1,
                  "aria-colindex": x.col + 1,
                  "aria-selected": g,
                  "aria-expanded": w,
                  "aria-description": w ? `Card navigation active. ${_.cardElements.length} interactive elements available.` : void 0,
                  tabIndex: z ? 0 : -1,
                  onClick: () => {
                    y((W) => ({
                      ...W,
                      selectedCardIndex: W.selectedCardIndex === h ? -1 : h
                    })), P(I);
                  },
                  onKeyDown: (W) => V(W, h),
                  onFocus: () => {
                    y((W) => W.focusedCardIndex !== h || W.focusArea !== "cards" ? {
                      ...W,
                      focusedCardIndex: h,
                      focusArea: "cards"
                    } : W);
                  },
                  children: J
                },
                `card-${h}`
              );
            }
            const Y = rl(I, k.columns, r), Q = `
			  ${Y.className}
			  ${g ? "aria-tabs-datagrid-adaptive__card--selected" : ""}
			  ${B ? "aria-tabs-datagrid-adaptive__card--focused" : ""}
			  ${w ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""}
			`.trim();
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                className: `
				  aria-tabs-datagrid-adaptive__card-wrapper
				  ${w ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""}
				`.trim(),
                role: "gridcell",
                "aria-rowindex": x.row + 1,
                "aria-colindex": x.col + 1,
                children: /* @__PURE__ */ n.jsx(
                  Qr,
                  {
                    ...Y,
                    ref: (J) => {
                      N.current[h] = J;
                    },
                    className: Q,
                    "aria-selected": g,
                    "aria-expanded": w,
                    "aria-label": `${Y["aria-label"] || Y.heading}. ${w ? `Card navigation active with ${_.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                    tabIndex: z ? 0 : -1,
                    onClick: () => {
                      y((J) => ({
                        ...J,
                        selectedCardIndex: J.selectedCardIndex === h ? -1 : h
                      })), P(I);
                    },
                    onKeyDown: (J) => V(J, h),
                    onFocus: () => {
                      _.isCardNavigationActive || y((J) => J.focusedCardIndex !== h || J.focusArea !== "cards" ? {
                        ...J,
                        focusedCardIndex: h,
                        focusArea: "cards",
                        // Reset card navigation state when switching cards
                        focusedCardElementIndex: 0,
                        cardElements: []
                      } : J);
                    }
                  }
                )
              },
              `card-${h}`
            );
          })
        }
      )
    ] });
  }
  return b === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${S || ""}`, children: /* @__PURE__ */ n.jsx(
    hn,
    {
      tabPanels: s,
      dataConfig: o,
      ariaLabel: c,
      ariaDescription: u,
      orientation: d,
      id: m,
      disabled: p,
      selectedIndex: i,
      onTabChange: l,
      className: "aria-tabs-datagrid-adaptive__table--hybrid",
      ...R
    }
  ) }) : /* @__PURE__ */ n.jsx(
    hn,
    {
      tabPanels: s,
      dataConfig: o,
      ariaLabel: c,
      ariaDescription: u,
      orientation: d,
      id: m,
      disabled: p,
      selectedIndex: i,
      onTabChange: l,
      ...R
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
  const i = e.nhs_number || e.nhsNumber || e.patient_id, l = e.name || e.patient_name || `${e.first_name || ""} ${e.last_name || ""}`.trim(), c = e.dob || e.date_of_birth || e.birth_date, u = e.ward || e.location || e.current_ward, d = e.condition || e.diagnosis || e.primary_condition, m = e.alert_level || e.ews_score || e.priority_level;
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
            m && /* @__PURE__ */ n.jsxs(
              Me,
              {
                color: cl(ea(m)),
                className: "healthcare-card__alert",
                children: [
                  "EWS: ",
                  m
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
          u && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Ward" }),
            /* @__PURE__ */ n.jsx("dd", { children: u })
          ] }),
          d && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Condition" }),
            /* @__PURE__ */ n.jsx("dd", { children: d })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            me,
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
            me,
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
            me,
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
}, sl = ({
  data: e,
  onSelect: t,
  onAction: r,
  status: a = "pending"
}) => {
  const s = e.appointment_time || e.time || e.scheduled_time, o = e.patient_name || e.name, i = e.appointment_type || e.type || e.service, l = e.consultant || e.doctor || e.practitioner, c = e.room || e.location || e.clinic, u = e.duration || e.estimated_duration;
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
            u && /* @__PURE__ */ n.jsxs(
              Me,
              {
                color: "blue",
                className: "healthcare-card__duration",
                children: [
                  u,
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
              onClick: (d) => {
                d.stopPropagation(), r?.("reschedule", e);
              },
              children: "Reschedule"
            }
          ),
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (d) => {
                d.stopPropagation(), r?.("check-in", e);
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
  const s = e.medication || e.drug_name || e.name, o = e.dose || e.dosage || e.amount, i = e.frequency || e.schedule, l = e.route || e.administration_route, c = e.next_due || e.next_administration, u = e.prescriber || e.doctor, d = e.allergies || e.contraindications;
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
            d && /* @__PURE__ */ n.jsx(
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
          u && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Prescriber" }),
            /* @__PURE__ */ n.jsx("dd", { children: u })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (m) => {
                m.stopPropagation(), r?.("view-history", e);
              },
              children: "History"
            }
          ),
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (m) => {
                m.stopPropagation(), r?.("administer", e);
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
  const s = e.temperature || e.temp, o = e.blood_pressure || e.bp || `${e.systolic}/${e.diastolic}`, i = e.heart_rate || e.pulse || e.hr, l = e.respiratory_rate || e.resp_rate || e.rr, c = e.oxygen_saturation || e.spo2 || e.o2_sat, u = e.ews_score || e.news_score || e.alert_score, d = e.recorded_time || e.timestamp || e.time;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--vitals healthcare-card--${a}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__header", children: /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vitals-summary", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__timestamp", children: Jn(d) }),
          u && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${ll(u)}`, children: [
            "EWS: ",
            u
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
              onClick: (m) => {
                m.stopPropagation(), r?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ n.jsx(
            me,
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
  navigation: u,
  search: d,
  account: m,
  organisation: p,
  logo: S,
  className: R,
  ...b
}) => {
  const C = {
    service: c,
    navigation: u,
    search: d,
    account: m,
    organisation: p,
    logo: S,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Xr, { ...o }),
    /* @__PURE__ */ n.jsx(Hr, { ...C }),
    /* @__PURE__ */ n.jsx(ra, { className: R, ...b, children: /* @__PURE__ */ n.jsx(Er, { size: s, children: /* @__PURE__ */ n.jsx(pt, { children: /* @__PURE__ */ n.jsxs(Pn, { width: a, children: [
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
  serviceName: u,
  serviceHref: d,
  logo: m,
  className: p,
  ...S
}) => {
  const R = {
    service: {
      text: u,
      href: d
    },
    logo: m,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Xr, { ...o }),
    /* @__PURE__ */ n.jsx(Hr, { ...R }),
    /* @__PURE__ */ n.jsxs(ra, { className: p, ...S, children: [
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
