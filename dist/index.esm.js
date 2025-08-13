import * as Ja from "react";
import ke, { useState as ie, useEffect as de, useCallback as q, createElement as Br, useRef as ce, useMemo as he, createContext as Xa, useContext as Qa, forwardRef as Xe, useImperativeHandle as Fr, useReducer as Ir } from "react";
function es(e) {
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
function ts() {
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
function ns() {
  return Qn || (Qn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === p ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case y:
          return "Fragment";
        case B:
          return "Profiler";
        case w:
          return "StrictMode";
        case A:
          return "Suspense";
        case C:
          return "SuspenseList";
        case m:
          return "Activity";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case I:
            return "Portal";
          case j:
            return (v.displayName || "Context") + ".Provider";
          case F:
            return (v._context.displayName || "Context") + ".Consumer";
          case S:
            var Q = v.render;
            return v = v.displayName, v || (v = Q.displayName || Q.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case E:
            return Q = v.displayName || null, Q !== null ? Q : e(v.type) || "Memo";
          case R:
            Q = v._payload, v = v._init;
            try {
              return e(v(Q));
            } catch {
            }
        }
      return null;
    }
    function t(v) {
      return "" + v;
    }
    function r(v) {
      try {
        t(v);
        var Q = !1;
      } catch {
        Q = !0;
      }
      if (Q) {
        Q = console;
        var z = Q.error, K = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return z.call(
          Q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          K
        ), t(v);
      }
    }
    function a(v) {
      if (v === y) return "<>";
      if (typeof v == "object" && v !== null && v.$$typeof === R)
        return "<...>";
      try {
        var Q = e(v);
        return Q ? "<" + Q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var v = f.A;
      return v === null ? null : v.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(v) {
      if ($.call(v, "key")) {
        var Q = Object.getOwnPropertyDescriptor(v, "key").get;
        if (Q && Q.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function l(v, Q) {
      function z() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          Q
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: z,
        configurable: !0
      });
    }
    function c() {
      var v = e(this.type);
      return V[v] || (V[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function h(v, Q, z, K, G, se, b, N) {
      return z = se.ref, v = {
        $$typeof: k,
        type: v,
        key: Q,
        props: se,
        _owner: G
      }, (z !== void 0 ? z : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(v, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: b
      }), Object.defineProperty(v, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function d(v, Q, z, K, G, se, b, N) {
      var W = Q.children;
      if (W !== void 0)
        if (K)
          if (ne(W)) {
            for (K = 0; K < W.length; K++)
              g(W[K]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(W);
      if ($.call(Q, "key")) {
        W = e(v);
        var L = Object.keys(Q).filter(function(U) {
          return U !== "key";
        });
        K = 0 < L.length ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}", ae[W + K] || (L = 0 < L.length ? "{" + L.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          K,
          W,
          L,
          W
        ), ae[W + K] = !0);
      }
      if (W = null, z !== void 0 && (r(z), W = "" + z), i(Q) && (r(Q.key), W = "" + Q.key), "key" in Q) {
        z = {};
        for (var O in Q)
          O !== "key" && (z[O] = Q[O]);
      } else z = Q;
      return W && l(
        z,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), h(
        v,
        W,
        se,
        G,
        s(),
        z,
        b,
        N
      );
    }
    function g(v) {
      typeof v == "object" && v !== null && v.$$typeof === k && v._store && (v._store.validated = 1);
    }
    var x = ke, k = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), j = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), m = Symbol.for("react.activity"), p = Symbol.for("react.client.reference"), f = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, ne = Array.isArray, ee = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(v) {
        return v();
      }
    };
    var H, V = {}, Z = x.react_stack_bottom_frame.bind(
      x,
      o
    )(), re = ee(a(o)), ae = {};
    tt.Fragment = y, tt.jsx = function(v, Q, z, K, G) {
      var se = 1e4 > f.recentlyCreatedOwnerStacks++;
      return d(
        v,
        Q,
        z,
        !1,
        K,
        G,
        se ? Error("react-stack-top-frame") : Z,
        se ? ee(a(v)) : re
      );
    }, tt.jsxs = function(v, Q, z, K, G) {
      var se = 1e4 > f.recentlyCreatedOwnerStacks++;
      return d(
        v,
        Q,
        z,
        !0,
        K,
        G,
        se ? Error("react-stack-top-frame") : Z,
        se ? ee(a(v)) : re
      );
    };
  }()), tt;
}
var er;
function rs() {
  return er || (er = 1, process.env.NODE_ENV === "production" ? dt.exports = ts() : dt.exports = ns()), dt.exports;
}
var n = rs(), Xt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var tr;
function as() {
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
var ss = as();
const Y = /* @__PURE__ */ es(ss), ch = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...s
}) => {
  const o = Y(
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
}, En = ({
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
      className: Y(
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
          className: Y("nhsuk-account__item", o.className),
          children: s(o)
        },
        i
      )) })
    }
  );
}, { forwardRef: os, useCallback: Pe, useState: Qt } = Ja;
function is(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: s = "default",
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [h, d] = Qt(!1), [g, x] = Qt(!1), [k, I] = Qt(!1), y = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    s !== "default" ? `nhs-aria-button--${s}` : "",
    o ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), w = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", B = {
    ...h && { "data-pressed": "true" },
    ...g && { "data-hovered": "true" },
    ...k && { "data-focused": "true" },
    ...w && { "data-disabled": "true" }
  }, F = Pe(() => !w && d(!0), [w]), j = Pe(() => d(!1), []), S = Pe(() => !w && x(!0), [w]), A = Pe(() => {
    x(!1), d(!1);
  }, []), C = Pe(() => I(!0), []), E = Pe(() => I(!1), []), R = Pe((f) => {
    f.key === " " && ("href" in c || f.currentTarget.getAttribute("role") === "button") && (f.preventDefault(), f.currentTarget.click());
  }, [c]), m = Pe((f) => {
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
        className: y,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...B,
        ...l && { "data-prevent-double-click": "true" },
        onKeyDown: ($) => {
          f.onKeyDown?.($), R($);
        },
        onClick: ($) => {
          f.onClick?.($), m($);
        },
        onMouseDown: ($) => {
          f.onMouseDown?.($), F();
        },
        onMouseUp: ($) => {
          f.onMouseUp?.($), j();
        },
        onMouseEnter: ($) => {
          f.onMouseEnter?.($), S();
        },
        onMouseLeave: ($) => {
          f.onMouseLeave?.($), A();
        },
        onFocus: ($) => {
          f.onFocus?.($), C();
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
  const p = c;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: p.type || "button",
      disabled: p.disabled,
      className: y,
      "data-module": "nhs-button",
      ...B,
      ...l && { "data-prevent-double-click": "true" },
      ...p.disabled && { "aria-disabled": "true" },
      onKeyDown: (f) => {
        p.onKeyDown?.(f), R(f);
      },
      onClick: (f) => {
        p.onClick?.(f), m(f);
      },
      onMouseDown: (f) => {
        p.onMouseDown?.(f), F();
      },
      onMouseUp: (f) => {
        p.onMouseUp?.(f), j();
      },
      onMouseEnter: (f) => {
        p.onMouseEnter?.(f), S();
      },
      onMouseLeave: (f) => {
        p.onMouseLeave?.(f), A();
      },
      onFocus: (f) => {
        p.onFocus?.(f), C();
      },
      onBlur: (f) => {
        p.onBlur?.(f), E();
      },
      id: p.id,
      style: p.style,
      title: p.title,
      "aria-label": p["aria-label"],
      "aria-describedby": p["aria-describedby"],
      "aria-labelledby": p["aria-labelledby"],
      tabIndex: p.tabIndex,
      name: p.name,
      value: p.value,
      form: p.form,
      formAction: p.formAction,
      formEncType: p.formEncType,
      formMethod: p.formMethod,
      formNoValidate: p.formNoValidate,
      formTarget: p.formTarget,
      autoFocus: p.autoFocus,
      children: r
    }
  );
}
const ye = os(is);
ye.displayName = "Button";
const ls = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = Y(
    "nhsuk-back-link",
    a
  ), c = Y(
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
}, Ee = ({
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
  const d = Y(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": s,
      "nhsuk-tag--closable": o,
      "nhsuk-tag--disabled": l
    },
    c
  ), g = (x) => {
    x.preventDefault(), x.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: d, ...h, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    o && /* @__PURE__ */ n.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: g,
        disabled: l,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
}, cs = ({
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
  onChange: d,
  onBlur: g,
  onFocus: x,
  attributes: k,
  ...I
}) => {
  const [y, w] = ie(a), B = r !== void 0, F = B ? r : y;
  de(() => {
    B || w(a);
  }, [a, B]);
  const j = (R) => {
    const m = R.target.checked;
    B || w(m), d?.(m, R);
  }, S = i ? `${e}-hint` : void 0, A = l ? `${e}-error` : void 0, C = [S, A].filter(Boolean).join(" ") || void 0, E = Y(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ n.jsx("div", { className: E, ...I, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
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
        onChange: j,
        onBlur: g,
        onFocus: x,
        "aria-describedby": C,
        ...k
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: h }),
    i && /* @__PURE__ */ n.jsx("div", { id: S, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: A, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
cs.displayName = "Checkbox";
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
  describedBy: d,
  className: g,
  width: x = "full",
  inputMode: k,
  autoComplete: I,
  maxLength: y,
  minLength: w,
  pattern: B,
  step: F,
  min: j,
  max: S,
  showValueLabels: A = !1,
  showCurrentValue: C = !1,
  valueLabels: E,
  onChange: R,
  onBlur: m,
  onFocus: p,
  onKeyDown: f,
  ...$
}) => {
  const [ne, ee] = ie(a || s || (r === "range" ? j || "0" : ""));
  de(() => {
    a !== void 0 && ee(a);
  }, [a]);
  const H = (ae) => {
    ee(ae.target.value), R?.(ae);
  }, V = r === "range", Z = Y(
    "nhsuk-input",
    {
      "nhsuk-input--error": h,
      "nhsuk-input--range": V,
      [`nhsuk-input--width-${x}`]: x !== "full" && !V
    },
    g
  ), re = V ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    A && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: E?.min || j || "0" }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: Z,
          id: e,
          name: t,
          type: r,
          value: ne,
          defaultValue: s,
          placeholder: o,
          disabled: i,
          readOnly: l,
          required: c,
          "aria-describedby": d,
          inputMode: k,
          autoComplete: I,
          maxLength: y,
          minLength: w,
          pattern: B,
          step: F,
          min: j,
          max: S,
          onChange: H,
          onBlur: m,
          onFocus: p,
          onKeyDown: f,
          ...$
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: E?.max || S || "100" })
    ] }),
    !A && /* @__PURE__ */ n.jsx(
      "input",
      {
        className: Z,
        id: e,
        name: t,
        type: r,
        value: ne,
        defaultValue: s,
        placeholder: o,
        disabled: i,
        readOnly: l,
        required: c,
        "aria-describedby": d,
        inputMode: k,
        autoComplete: I,
        maxLength: y,
        minLength: w,
        pattern: B,
        step: F,
        min: j,
        max: S,
        onChange: H,
        onBlur: m,
        onFocus: p,
        onKeyDown: f,
        ...$
      }
    ),
    C && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      E?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: ne })
    ] }) })
  ] }) : null;
  return V ? re : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: Z,
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
      inputMode: k,
      autoComplete: I,
      maxLength: y,
      minLength: w,
      pattern: B,
      step: F,
      min: j,
      max: S,
      onChange: R,
      onBlur: m,
      onFocus: p,
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
  const i = Y(
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
  const o = Y(
    "nhsuk-fieldset",
    r
  ), i = Y(
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
}, ds = ({
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
  onChange: d,
  fieldsetAttributes: g,
  attributes: x,
  ...k
}) => {
  const [I, y] = ie(
    e.filter((R) => R.checked).map((R) => R.value)
  ), w = r || t, B = i ? `${w}-hint` : void 0, F = l ? `${w}-error` : void 0, j = [B, F].filter(Boolean).join(" ") || void 0, S = (R, m) => {
    let p;
    m ? p = [...I, R] : p = I.filter((f) => f !== R), y(p), d?.(p);
  }, A = () => e.map((R, m) => {
    const p = `${w}-${m + 1}`, f = `${p}-conditional`, $ = I.includes(R.value), ne = R.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: p,
          name: t,
          type: "checkbox",
          value: R.value,
          checked: $,
          disabled: ne,
          onChange: (ee) => S(R.value, ee.target.checked),
          "aria-describedby": R.hint ? `${p}-hint` : j,
          ...R.conditional && {
            "aria-controls": f,
            "aria-expanded": $ ? "true" : "false"
          },
          ...R.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: p, children: R.text }),
      R.hint && /* @__PURE__ */ n.jsx("div", { id: `${p}-hint`, className: "nhsuk-checkboxes__hint", children: R.hint }),
      R.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: Y("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !$
          }),
          id: f,
          children: typeof R.conditional == "object" && R.conditional !== null && "label" in R.conditional && "id" in R.conditional && "name" in R.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            R.conditional.label && /* @__PURE__ */ n.jsx(An, { htmlFor: R.conditional.id, children: R.conditional.label }),
            /* @__PURE__ */ n.jsx($n, { ...R.conditional })
          ] }) : R.conditional
        }
      )
    ] }, R.value);
  }), C = Y(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": h
    },
    c
  ), E = Y("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: E, ...x, ...k, children: /* @__PURE__ */ n.jsxs(
    Hn,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: j,
      ...g,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: B, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: F, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: C, children: A() })
      ]
    }
  ) });
};
ds.displayName = "Checkboxes";
const us = ({
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
  className: d,
  rows: g = 5,
  cols: x,
  maxLength: k,
  minLength: I,
  wrap: y = "soft",
  resize: w = "vertical",
  autoComplete: B,
  spellCheck: F,
  onChange: j,
  onBlur: S,
  onFocus: A,
  onKeyDown: C,
  ...E
}) => {
  const R = Y(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": c,
      [`nhsuk-textarea--resize-${w}`]: w !== "vertical"
    },
    d
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: R,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": h,
      rows: g,
      cols: x,
      maxLength: k,
      minLength: I,
      wrap: y,
      autoComplete: B,
      spellCheck: F,
      onChange: j,
      onBlur: S,
      onFocus: A,
      onKeyDown: C,
      ...E
    }
  );
}, Rr = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const s = Y("nhsuk-hint", t);
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
  onChange: d,
  ...g
}) => {
  const [x, k] = ie(o), [I, y] = ie(0), [w, B] = ie(!1), [F, j] = ie(!1), S = q((p) => r ? p.trim() === "" ? 0 : p.trim().split(/\s+/).length : p.length, [r]);
  de(() => {
    const p = S(x), f = t || r || 0, $ = f - p, ne = Math.floor(f * (a / 100));
    y($), B(p > f), j(p >= ne || p > f), h && h(p, $);
  }, [x, t, r, a, S, h]);
  const A = (p) => {
    const f = p.target.value;
    k(f), d && d(p);
  }, C = () => {
    const p = t || r || 0, f = r ? "word" : "character", $ = r ? "words" : "characters";
    if (!F)
      return `You can enter up to ${p} ${p === 1 ? f : $}`;
    if (w) {
      const ne = Math.abs(I);
      return `You have ${ne} ${ne === 1 ? f : $} too many`;
    } else
      return `You have ${I} ${I === 1 ? f : $} remaining`;
  }, E = Y(
    "nhsuk-character-count",
    l
  ), R = Y(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !F,
      "nhsuk-error-message": w
    },
    c?.classes
  ), m = Y(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": w
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
          us,
          {
            id: e,
            name: s,
            value: x,
            rows: i,
            className: m,
            onChange: A,
            "aria-describedby": `${e}-info`,
            ...g
          }
        ),
        /* @__PURE__ */ n.jsx(
          Rr,
          {
            id: `${e}-info`,
            className: R,
            children: C()
          }
        )
      ]
    }
  );
}, hs = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  className: a,
  children: s,
  ...o
}) => {
  const i = Y(
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
}, fs = ({
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
  size: d,
  autoComplete: g,
  options: x,
  children: k,
  onChange: I,
  onBlur: y,
  onFocus: w,
  ...B
}) => {
  const F = Y(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    c
  ), j = () => x ? x.map((S, A) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: S.value,
      disabled: S.disabled,
      selected: S.selected,
      children: S.text
    },
    `${S.value}-${A}`
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
      multiple: h,
      size: d,
      autoComplete: g,
      onChange: I,
      onBlur: y,
      onFocus: w,
      ...B,
      children: k || j()
    }
  );
}, Mr = fs;
Mr.Option = hs;
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
  onBlur: d,
  onFocus: g,
  ...x
}) => {
  const [k, I] = ie(t || r || ""), y = Y(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    o
  ), w = (B) => {
    const F = B.target.value;
    I(F), h && h(B);
  };
  return /* @__PURE__ */ n.jsx(Hn, { children: /* @__PURE__ */ n.jsx("div", { className: y, ...x, children: c.map((B, F) => {
    const j = `${e}-${F}`, S = B.conditional ? `${j}-conditional` : void 0, A = k === B.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: j,
          name: e,
          type: "radio",
          value: B.value,
          disabled: B.disabled,
          checked: A,
          "aria-describedby": s,
          onChange: w,
          onBlur: d,
          onFocus: g
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: j, children: B.text }),
      B.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: B.hint }),
      B.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: Y("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !A
          }),
          id: S,
          children: typeof B.conditional == "object" && B.conditional !== null && "label" in B.conditional && "id" in B.conditional && "name" in B.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            B.conditional.label && /* @__PURE__ */ n.jsx(An, { htmlFor: B.conditional.id, children: B.conditional.label }),
            /* @__PURE__ */ n.jsx($n, { ...B.conditional })
          ] }) : B.conditional
        }
      )
    ] }, B.value);
  }) }) });
}, Lr = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...s
}) => {
  const o = Y(
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
  const a = Y("nhsuk-grid-row", t);
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
  const h = Y(
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
  const s = ke.Children.toArray(e)[0], o = ke.isValidElement(s) && (s.type === pt || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Lr, { className: t, ...r, children: o ? e : /* @__PURE__ */ n.jsx(pt, { children: e }) });
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
  const c = i || (t === "number" ? "ol" : "ul"), h = Y(
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
  const a = Y("nhsuk-list__item", t);
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
}, $e = ({
  level: e,
  className: t,
  text: r,
  html: a,
  children: s,
  size: o,
  marginBottom: i,
  ...l
}) => {
  const h = e ?? ((I) => {
    switch (I) {
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
  })(o), d = Y(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${o}`]: o
    },
    t
  ), g = s || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), x = `h${h}`, k = i ? { ...l.style, marginBottom: i } : l.style;
  return Br(
    x,
    { className: d, ...l, style: k },
    g
  );
}, nr = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...s
}) => {
  const o = Y("nhsuk-error-message", t);
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
  const c = ce(null);
  de(() => {
    c.current && c.current.focus();
  }, []);
  const h = Y(
    "nhsuk-error-summary",
    o
  ), d = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, g = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, x = (k) => {
    const I = k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text;
    return k.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: k.href,
        ...k.attributes,
        children: I
      }
    ) : I;
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
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: d() }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ n.jsx("p", { children: i }),
          !i && (r || a) && /* @__PURE__ */ n.jsx("p", { children: g() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((k, I) => /* @__PURE__ */ n.jsx("li", { children: x(k) }, I)) })
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
  const [d, g] = ie(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [x, k] = ie({}), I = (H) => H % 4 === 0 && H % 100 !== 0 || H % 400 === 0, y = (H, V) => {
    const Z = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return H === 2 && I(V) ? 29 : Z[H - 1];
  }, w = (H, V, Z) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Day must be a number";
    const re = parseInt(H, 10);
    if (re < 1 || re > 31) return "Day must be between 1 and 31";
    if (V && Z) {
      const ae = parseInt(V, 10), v = parseInt(Z, 10);
      if (!isNaN(ae) && !isNaN(v) && ae >= 1 && ae <= 12) {
        const Q = y(ae, v);
        if (re > Q)
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
          ][ae - 1]} ${v} only has ${Q} days`;
      }
    }
  }, B = (H) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Month must be a number";
    const V = parseInt(H, 10);
    if (V < 1 || V > 12) return "Month must be between 1 and 12";
  }, F = (H) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Year must be a number";
    const V = parseInt(H, 10), Z = (/* @__PURE__ */ new Date()).getFullYear();
    if (V < 1900 || V > Z + 10)
      return `Year must be between 1900 and ${Z + 10}`;
  }, j = (H, V, Z) => {
    if (!H || !V || !Z) return;
    const re = parseInt(H, 10), ae = parseInt(V, 10), v = parseInt(Z, 10);
    if (isNaN(re) || isNaN(ae) || isNaN(v) || ae < 1 || ae > 12 || v < 1900) return;
    const Q = y(ae, v);
    re < 1 || re > Q;
  }, S = q((H, V) => {
    const Z = {
      ...d,
      [H]: V
    };
    g(Z), c && c(Z);
  }, [d, c]), A = q((H) => {
    const V = d[H];
    let Z;
    if (H === "day")
      Z = w(V, d.month, d.year);
    else if (H === "month") {
      if (Z = B(V), !Z && d.day) {
        const re = w(d.day, V, d.year);
        k((ae) => ({
          ...ae,
          day: re
        }));
      }
    } else if (H === "year" && (Z = F(V), !Z && d.day && d.month)) {
      const re = w(d.day, d.month, V);
      k((ae) => ({
        ...ae,
        day: re
      }));
    }
    if (k((re) => ({
      ...re,
      [H]: Z
    })), d.day && d.month && d.year) {
      const re = j(
        H === "day" ? V : d.day,
        H === "month" ? V : d.month,
        H === "year" ? V : d.year
      );
      re && k((ae) => ({
        ...ae,
        day: re
      }));
    }
  }, [d, w, B, F, j]), C = he(() => [
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
  ], []), E = r || C;
  let R = o?.describedBy || "";
  const m = i ? `${e}-hint` : "", p = l ? `${e}-error` : "";
  m && (R = R ? `${R} ${m}` : m), p && (R = R ? `${R} ${p}` : p);
  const f = Object.values(x).some((H) => H), $ = Y(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || f
    }
  ), ne = Y(
    "nhsuk-date-input",
    t
  ), ee = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Rr,
      {
        id: m,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      nr,
      {
        id: p,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(x).map(
      ([H, V]) => V ? /* @__PURE__ */ n.jsxs(
        nr,
        {
          id: `${e}-${H}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            V
          ]
        },
        `${H}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: ne, id: e, "data-testid": "date-input", ...h, children: E.map((H) => {
      const V = H.id || `${e}-${H.name}`, Z = a ? `${a}[${H.name}]` : H.name, re = H.label || H.name.charAt(0).toUpperCase() + H.name.slice(1), ae = x[H.name], v = d[H.name] || "";
      let Q = R;
      if (ae) {
        const z = `${e}-${H.name}-error`;
        Q = Q ? `${Q} ${z}` : z;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          An,
          {
            htmlFor: V,
            className: "nhsuk-date-input__label",
            children: re
          }
        ),
        /* @__PURE__ */ n.jsx(
          $n,
          {
            id: V,
            name: Z,
            value: v,
            className: Y("nhsuk-date-input__input", H.classes, {
              "nhsuk-input--error": ae
            }),
            inputMode: H.inputmode,
            autoComplete: H.autocomplete,
            pattern: H.pattern,
            "aria-describedby": Q || void 0,
            hasError: !!ae,
            onChange: (z) => S(H.name, z.target.value),
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
      describedBy: R || void 0,
      children: ee()
    }
  ) : ee() });
}, $r = {
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
}, Ar = Xa($r), xs = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...$r, ...t };
  return /* @__PURE__ */ n.jsx(Ar.Provider, { value: r, children: e });
}, yh = () => {
  const e = Qa(Ar);
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
const _h = ({ children: e, theme: t }) => (de(() => {
  _s();
}, []), /* @__PURE__ */ n.jsx(xs, { theme: t, children: e })), Hr = ({
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
  callbacks: d = {},
  isLoading: g = !1,
  showResults: x = !1,
  results: k = [],
  formAttributes: I = {},
  inputAttributes: y = {},
  buttonAttributes: w = {},
  preventDefaultSubmit: B = !1,
  debounceMs: F = 300,
  minQueryLength: j = 1
}) => {
  const [S, A] = ie(""), [C, E] = ie(!1), R = ce(void 0), m = ce(null), p = ce(null), f = e === "controlled" && s !== void 0, $ = f ? s : S, ne = q((K) => {
    R.current && clearTimeout(R.current), R.current = setTimeout(() => {
      d.onChange && K.length >= j && d.onChange(K);
    }, F);
  }, [d.onChange, F, j]), ee = q((K) => {
    const G = K.target.value;
    f || A(G), e !== "form" && ne(G);
  }, [f, e, ne]), H = q((K) => {
    const G = $.trim(), se = {
      query: G,
      timestamp: Date.now(),
      formData: new FormData(K.currentTarget)
    };
    e === "controlled" || e === "hybrid" && B ? (K.preventDefault(), d.onSearch && G.length >= j && d.onSearch(se)) : e === "hybrid" && d.onSearch && G.length >= j && d.onSearch(se);
  }, [e, $, d.onSearch, B, j]), V = q(() => {
    E(!0), d.onFocus?.();
  }, [d.onFocus]), Z = q(() => {
    E(!1), d.onBlur?.();
  }, [d.onBlur]), re = q(() => {
    f || A(""), d.onClear?.(), p.current?.focus();
  }, [f, d.onClear]);
  de(() => () => {
    R.current && clearTimeout(R.current);
  }, []);
  const ae = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: Y("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": g
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), v = () => /* @__PURE__ */ n.jsx(
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
  ), Q = () => !$ || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: re,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), z = () => !x || !k.length || !C ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: k.map((K) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: K.href ? /* @__PURE__ */ n.jsxs("a", { href: K.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: K.title }),
    K.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: K.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => d.onSearch?.({ query: K.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: K.title }),
        K.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: K.description })
      ]
    }
  ) }, K.id)) });
  return /* @__PURE__ */ n.jsxs("search", { className: Y("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": g,
    "nhsuk-header__search--focused": C,
    "nhsuk-header__search--has-results": x && k.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: m,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        onSubmit: H,
        ...I,
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
                ref: p,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: o,
                autoComplete: "off",
                value: $,
                onChange: ee,
                onFocus: V,
                onBlur: Z,
                disabled: h || g,
                "aria-expanded": x && k.length > 0,
                "aria-haspopup": "listbox",
                ...y
              }
            ),
            Q()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: h || g || e !== "form" && $.length < j,
              ...w,
              children: [
                g ? v() : ae(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: g ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    z()
  ] });
}, Pr = ({
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
  ...d
}) => {
  const [g, x] = ie(!1), [k, I] = ie(!1), [y, w] = ie(i?.items?.length || 0), [B, F] = ie(!1), [j, S] = ie(!1), [A, C] = ie(!1), E = ce(null), R = ce(null), m = ce(!1), p = ce(null), f = ce([]), $ = ce(null);
  de(() => {
    typeof window > "u" || (C(!0), F(!0));
  }, []), de(() => {
    if (!A || !i?.items?.length) return;
    f.current = i.items;
    const b = setTimeout(() => {
      E.current && R.current && re();
    }, 100);
    return () => clearTimeout(b);
  }, [A, i?.items]);
  const ne = r.href && !t.href || r.href && r.href === t.href, ee = ne ? r.href : t.href, H = Y(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), V = Y(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), Z = Y(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), re = q(() => {
    if (!(typeof window > "u" || m.current) && !(!E.current || !R.current || !f.current.length)) {
      m.current = !0;
      try {
        const b = R.current, N = E.current, W = b.offsetWidth, L = N.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (L.length === 0 || W === 0) {
          m.current = !1;
          return;
        }
        const O = window.innerWidth < 768, U = O ? 16 : 32, u = U * 2, _ = W - u, T = Array.from(L).map((te) => te.offsetWidth), M = T.reduce((te, X) => te + X, 0), D = O ? 80 : 100, P = $.current !== null && $.current !== O;
        if ($.current = O, console.log("Overflow check:", {
          containerWidth: W,
          availableContainerWidth: _,
          totalGutters: u,
          gutterSize: U,
          totalWidth: M,
          mobile: O,
          breakpointChanged: P,
          itemCount: T.length,
          measurements: T
        }), M <= _)
          I(!1), w(f.current.length);
        else {
          const te = _ - D;
          let X = 0, J = 0;
          for (let ge = 0; ge < T.length; ge++) {
            const ue = J + T[ge];
            if (ue <= te)
              J = ue, X = ge + 1;
            else
              break;
          }
          X = Math.max(1, X);
          const oe = X < T.length;
          I(oe), w(X);
        }
        m.current = !1;
      } catch (b) {
        console.error("Overflow detection error:", b), I(!1), w(f.current.length), m.current = !1;
      }
    }
  }, []);
  de(() => {
    if (typeof document > "u") return;
    const b = (N) => {
      N.key === "Escape" && g && x(!1);
    };
    if (g)
      return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [g]), de(() => {
    if (typeof window > "u" || !A) return;
    const b = () => {
      g && (x(!1), S(!1)), p.current && clearTimeout(p.current), p.current = setTimeout(() => {
        f.current.length > 0 && re();
      }, 250);
    };
    let N = null, W = null;
    return window.matchMedia && (N = window.matchMedia("(max-width: 767px)"), W = () => {
      console.log("Breakpoint changed:", N?.matches ? "mobile" : "desktop"), f.current.length > 0 && setTimeout(() => re(), 50);
    }, N.addEventListener ? N.addEventListener("change", W) : N.addListener(W)), window.addEventListener("resize", b), () => {
      window.removeEventListener("resize", b), N && W && (N.removeEventListener ? N.removeEventListener("change", W) : N.removeListener(W)), p.current && clearTimeout(p.current);
    };
  }, [A, g, re]), de(() => {
    if (typeof document > "u") return;
    const b = (N) => {
      const W = N.target, L = E.current?.contains(W);
      g && !L && x(!1);
    };
    if (g)
      return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, [g]);
  const ae = (b) => {
    b && (b.preventDefault(), b.stopPropagation());
    const N = !g;
    x(N), N ? setTimeout(() => {
      S(!0);
    }, 50) : S(!1);
  }, v = () => /* @__PURE__ */ n.jsxs(
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
  ), Q = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : v(), z = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, K = (b, N) => b ? N ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: N, children: b }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: b }) : null, G = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), se = (b) => {
    if (b.active || b.current) {
      const N = b.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: N });
    }
    return b.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: H,
      role: "banner",
      "data-module": "nhsuk-header",
      ...h,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: V, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            ee ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: ee, children: [
              Q(),
              z(),
              ne && K(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              Q(),
              z(),
              ne && K(r.text)
            ] }),
            r.text && !ne && K(r.text, r.href)
          ] }),
          s && /* @__PURE__ */ n.jsx(Hr, { ...s }),
          /* @__PURE__ */ n.jsx(
            En,
            {
              ...o,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: Z,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: Y(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !B && A,
                    "nhsuk-header__navigation-container--ssr": !A
                  },
                  l
                ),
                ref: R,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: E, children: [
                  (A ? i.items.slice(0, y) : i.items).map((b, N) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: Y(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": b.active || b.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !A && N >= 4
                          // Mark items that would be hidden on client
                        },
                        b.className
                      ),
                      ...b.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: b.href,
                          ...b.active || b.current ? {
                            "aria-current": b.current ? "page" : "true"
                          } : {},
                          children: se(b)
                        }
                      )
                    },
                    N
                  )),
                  A && k && y < i.items.length && /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ n.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: ae,
                          type: "button",
                          children: [
                            /* @__PURE__ */ n.jsx("span", { children: "More" }),
                            G()
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
        A && i && i.items && i.items.length > 0 && g && j && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !j,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(y).map((b, N) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: Y(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": b.active || b.current
                  }
                ),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: b.href,
                    ...b.active || b.current ? {
                      "aria-current": b.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      x(!1), S(!1);
                    },
                    children: se(b)
                  }
                )
              },
              `overflow-${y + N}`
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
  ...d
}) => {
  const g = r.href && !t.href || r.href && r.href === t.href, x = g ? r.href : t.href, k = Y(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), I = Y(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), y = Y(
    "nhsuk-header__navigation",
    i?.className
  ), w = () => /* @__PURE__ */ n.jsxs(
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
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : w(), F = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, j = (C, E) => C ? E ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: E, children: C }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: C }) : null, S = () => !i?.items || i.items.length === 0 ? null : i.items.map((C, E) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: C.href,
          ...C.attributes || {},
          children: C.text
        }
      )
    },
    C.href || E
  )), A = () => s ? /* @__PURE__ */ n.jsx(Hr, { ...s }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: k,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...h,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: I, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            x ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: x, children: [
              B(),
              F(),
              g && j(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              B(),
              F(),
              g && j(r.text)
            ] }),
            r.text && !g && j(r.text, r.href)
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
            En,
            {
              ...o,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: y,
            id: "header-navigation",
            role: "navigation",
            "aria-label": i.ariaLabel || "Primary navigation",
            "data-navigation-enhanced": "false",
            children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-header__navigation-list",
                "data-navigation-list": "true",
                children: S()
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
  maxVisibleItems: d = 5,
  // New prop to control CSS-based overflow
  ...g
}) => {
  const x = r.href && !t.href || r.href && r.href === t.href, k = x ? r.href : t.href, I = Y(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), y = Y(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), w = Y(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), B = () => /* @__PURE__ */ n.jsxs(
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
  ) : B(), j = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, S = (C, E) => C ? E ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: E, children: C }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: C }) : null, A = (C) => {
    if (C.active || C.current) {
      const E = C.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: C.html } }) : C.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: E });
    }
    return C.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: C.html } }) : C.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: I,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...h,
      ...g,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: y, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            k ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: k, children: [
              F(),
              j(),
              x && S(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              F(),
              j(),
              x && S(r.text)
            ] }),
            r.text && !x && S(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            En,
            {
              ...o,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: w,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: Y(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, d).map((C, E) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: Y(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": C.active || C.current
                        },
                        C.className
                      ),
                      ...C.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: C.href,
                          ...C.active || C.current ? {
                            "aria-current": C.current ? "page" : "true"
                          } : {},
                          children: A(C)
                        }
                      )
                    },
                    E
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(d).map((C, E) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: Y(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": C.active || C.current
                          }
                        ),
                        children: /* @__PURE__ */ n.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: C.href,
                            ...C.active || C.current ? {
                              "aria-current": C.current ? "page" : "true"
                            } : {},
                            children: A(C)
                          }
                        )
                      },
                      `overflow-${d + E}`
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
  const d = [
    "nhsuk-hero",
    o && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    o && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), g = [
    "nhsuk-width-container",
    i,
    o ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), x = [
    "nhsuk-hero__heading",
    r,
    !c && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), k = c || e || a || s, I = () => {
    if (!e) return null;
    const y = { className: x };
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
      className: d,
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...h,
      children: [
        o && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: k && /* @__PURE__ */ n.jsx("div", { className: g, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          I(),
          c || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && k && /* @__PURE__ */ n.jsx("div", { className: g, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          I(),
          c || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
ks.displayName = "Hero";
const zr = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: s,
  copyright: o = "© NHS England",
  containerClasses: i,
  attributes: l = {}
}) => {
  const c = (d, g = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: Y("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": g
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
  ), h = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs("div", { className: Y("nhsuk-width-container", i), children: [
      /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ n.jsx("div", { className: Y("nhsuk-footer", e), children: h ? (
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
  function s(l, c, h = 0, d = l.length) {
    if (h < d) {
      if (t(c, c) !== 0) return d;
      do {
        const g = h + d >>> 1;
        r(l[g], c) < 0 ? h = g + 1 : d = g;
      } while (h < d);
    }
    return h;
  }
  function o(l, c, h = 0, d = l.length) {
    if (h < d) {
      if (t(c, c) !== 0) return d;
      do {
        const g = h + d >>> 1;
        r(l[g], c) <= 0 ? h = g + 1 : d = g;
      } while (h < d);
    }
    return h;
  }
  function i(l, c, h = 0, d = l.length) {
    const g = s(l, c, h, d - 1);
    return g > h && a(l[g - 1], c) > -a(l[g], c) ? g - 1 : g;
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
function Wr(e, t, r) {
  const a = (t - e) / Math.max(0, r), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= Ns ? 10 : o >= Ts ? 5 : o >= Ds ? 2 : 1;
  let l, c, h;
  return s < 0 ? (h = Math.pow(10, -s) / i, l = Math.round(e * h), c = Math.round(t * h), l / h < e && ++l, c / h > t && --c, h = -h) : (h = Math.pow(10, s) * i, l = Math.round(e / h), c = Math.round(t / h), l * h < e && ++l, c * h > t && --c), c < l && 0.5 <= r && r < 2 ? Wr(e, t, r * 2) : [l, c, h];
}
function rr(e, t, r) {
  return t = +t, e = +e, r = +r, Wr(e, t, r)[2];
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
function Or(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function lt() {
}
var st = 0.7, gt = 1 / st, Ke = "\\s*([+-]?\\d+)\\s*", ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", we = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Fs = /^#([0-9a-f]{3,8})$/, Is = new RegExp(`^rgb\\(${Ke},${Ke},${Ke}\\)$`), Rs = new RegExp(`^rgb\\(${we},${we},${we}\\)$`), Ms = new RegExp(`^rgba\\(${Ke},${Ke},${Ke},${ot}\\)$`), Ls = new RegExp(`^rgba\\(${we},${we},${we},${ot}\\)$`), Es = new RegExp(`^hsl\\(${ot},${we},${we}\\)$`), $s = new RegExp(`^hsla\\(${ot},${we},${we},${ot}\\)$`), sr = {
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
  return Ur(this).formatHsl();
}
function ir() {
  return this.rgb().formatRgb();
}
function it(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Fs.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? lr(t) : r === 3 ? new xe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ut(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ut(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Is.exec(e)) ? new xe(t[1], t[2], t[3], 1) : (t = Rs.exec(e)) ? new xe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ms.exec(e)) ? ut(t[1], t[2], t[3], t[4]) : (t = Ls.exec(e)) ? ut(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Es.exec(e)) ? ur(t[1], t[2] / 100, t[3] / 100, 1) : (t = $s.exec(e)) ? ur(t[1], t[2] / 100, t[3] / 100, t[4]) : sr.hasOwnProperty(e) ? lr(sr[e]) : e === "transparent" ? new xe(NaN, NaN, NaN, 0) : null;
}
function lr(e) {
  return new xe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ut(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new xe(e, t, r, a);
}
function Ps(e) {
  return e instanceof lt || (e = it(e)), e ? (e = e.rgb(), new xe(e.r, e.g, e.b, e.opacity)) : new xe();
}
function cn(e, t, r, a) {
  return arguments.length === 1 ? Ps(e) : new xe(e, t, r, a ?? 1);
}
function xe(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
Wn(xe, cn, Or(lt, {
  brighter(e) {
    return e = e == null ? gt : Math.pow(gt, e), new xe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? st : Math.pow(st, e), new xe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new xe(We(this.r), We(this.g), We(this.b), bt(this.opacity));
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
  return `#${ze(this.r)}${ze(this.g)}${ze(this.b)}`;
}
function zs() {
  return `#${ze(this.r)}${ze(this.g)}${ze(this.b)}${ze((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function dr() {
  const e = bt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${We(this.r)}, ${We(this.g)}, ${We(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function bt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function We(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ze(e) {
  return e = We(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ur(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ve(e, t, r, a);
}
function Ur(e) {
  if (e instanceof ve) return new ve(e.h, e.s, e.l, e.opacity);
  if (e instanceof lt || (e = it(e)), !e) return new ve();
  if (e instanceof ve) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, s = Math.min(t, r, a), o = Math.max(t, r, a), i = NaN, l = o - s, c = (o + s) / 2;
  return l ? (t === o ? i = (r - a) / l + (r < a) * 6 : r === o ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? o + s : 2 - o - s, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new ve(i, l, c, e.opacity);
}
function Ws(e, t, r, a) {
  return arguments.length === 1 ? Ur(e) : new ve(e, t, r, a ?? 1);
}
function ve(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
Wn(ve, Ws, Or(lt, {
  brighter(e) {
    return e = e == null ? gt : Math.pow(gt, e), new ve(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? st : Math.pow(st, e), new ve(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - a;
    return new xe(
      en(e >= 240 ? e - 240 : e + 120, s, a),
      en(e, s, a),
      en(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new ve(hr(this.h), ht(this.s), ht(this.l), bt(this.opacity));
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
  return (e = +e) == 1 ? Gr : function(t, r) {
    return r - t ? Us(t, r, e) : On(isNaN(t) ? r : t);
  };
}
function Gr(e, t) {
  var r = t - e;
  return r ? Os(e, r) : On(isNaN(e) ? t : e);
}
const fr = function e(t) {
  var r = Gs(t);
  function a(s, o) {
    var i = r((s = cn(s)).r, (o = cn(o)).r), l = r(s.g, o.g), c = r(s.b, o.b), h = Gr(s.opacity, o.opacity);
    return function(d) {
      return s.r = i(d), s.g = l(d), s.b = c(d), s.opacity = h(d), s + "";
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
    for (var d = 0, g; d < t; ++d) l[(g = c[d]).i] = g.x(h);
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
  function d() {
    var x = Math.min(e.length, t.length);
    return i !== Ve && (i = ro(e[0], e[x - 1])), l = x > 2 ? so : ao, c = h = null, g;
  }
  function g(x) {
    return x == null || isNaN(x = +x) ? o : (c || (c = l(e.map(a), t, r)))(a(i(x)));
  }
  return g.invert = function(x) {
    return i(s((h || (h = l(t, e.map(a), xt)))(x)));
  }, g.domain = function(x) {
    return arguments.length ? (e = Array.from(x, no), d()) : e.slice();
  }, g.range = function(x) {
    return arguments.length ? (t = Array.from(x), d()) : t.slice();
  }, g.rangeRound = function(x) {
    return t = Array.from(x), r = eo, d();
  }, g.clamp = function(x) {
    return arguments.length ? (i = x ? !0 : Ve, d()) : i !== Ve;
  }, g.interpolate = function(x) {
    return arguments.length ? (r = x, d()) : r;
  }, g.unknown = function(x) {
    return arguments.length ? (o = x, g) : o;
  }, function(x, k) {
    return a = x, s = k, d();
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
function fe(e, t, r, a) {
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
  }, s.filter = (o) => fe((i) => {
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
const yt = fe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
yt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? fe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : yt);
yt.range;
const Me = 1e3, _e = Me * 60, Le = _e * 60, Ae = Le * 24, Gn = Ae * 7, pr = Ae * 30, an = Ae * 365, qe = fe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Me);
}, (e, t) => (t - e) / Me, (e) => e.getUTCSeconds());
qe.range;
const Yn = fe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Me);
}, (e, t) => {
  e.setTime(+e + t * _e);
}, (e, t) => (t - e) / _e, (e) => e.getMinutes());
Yn.range;
const uo = fe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * _e);
}, (e, t) => (t - e) / _e, (e) => e.getUTCMinutes());
uo.range;
const Vn = fe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Me - e.getMinutes() * _e);
}, (e, t) => {
  e.setTime(+e + t * Le);
}, (e, t) => (t - e) / Le, (e) => e.getHours());
Vn.range;
const ho = fe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Le);
}, (e, t) => (t - e) / Le, (e) => e.getUTCHours());
ho.range;
const ct = fe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * _e) / Ae,
  (e) => e.getDate() - 1
);
ct.range;
const qn = fe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ae, (e) => e.getUTCDate() - 1);
qn.range;
const fo = fe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ae, (e) => Math.floor(e / Ae));
fo.range;
function Ue(e) {
  return fe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * _e) / Gn);
}
const Zt = Ue(0), _t = Ue(1), mo = Ue(2), po = Ue(3), Ze = Ue(4), go = Ue(5), bo = Ue(6);
Zt.range;
_t.range;
mo.range;
po.range;
Ze.range;
go.range;
bo.range;
function Ge(e) {
  return fe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Gn);
}
const Yr = Ge(0), kt = Ge(1), xo = Ge(2), yo = Ge(3), Je = Ge(4), _o = Ge(5), ko = Ge(6);
Yr.range;
kt.range;
xo.range;
yo.range;
Je.range;
_o.range;
ko.range;
const Kn = fe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Kn.range;
const vo = fe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
vo.range;
const He = fe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
He.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : fe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
He.range;
const Oe = fe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Oe.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : fe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Oe.range;
function wo(e, t, r, a, s, o) {
  const i = [
    [qe, 1, Me],
    [qe, 5, 5 * Me],
    [qe, 15, 15 * Me],
    [qe, 30, 30 * Me],
    [o, 1, _e],
    [o, 5, 5 * _e],
    [o, 15, 15 * _e],
    [o, 30, 30 * _e],
    [s, 1, Le],
    [s, 3, 3 * Le],
    [s, 6, 6 * Le],
    [s, 12, 12 * Le],
    [a, 1, Ae],
    [a, 2, 2 * Ae],
    [r, 1, Gn],
    [t, 1, pr],
    [t, 3, 3 * pr],
    [e, 1, an]
  ];
  function l(h, d, g) {
    const x = d < h;
    x && ([h, d] = [d, h]);
    const k = g && typeof g.range == "function" ? g : c(h, d, g), I = k ? k.range(h, +d + 1) : [];
    return x ? I.reverse() : I;
  }
  function c(h, d, g) {
    const x = Math.abs(d - h) / g, k = zn(([, , w]) => w).right(i, x);
    if (k === i.length) return e.every(ar(h / an, d / an, g));
    if (k === 0) return yt.every(Math.max(ar(h, d, g), 1));
    const [I, y] = i[x / i[k - 1][2] < i[k][2] / x ? k - 1 : k];
    return I.every(y);
  }
  return [l, c];
}
const [So, Co] = wo(He, Kn, Zt, ct, Vn, Yn);
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
  var t = e.dateTime, r = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, h = rt(s), d = at(s), g = rt(o), x = at(o), k = rt(i), I = at(i), y = rt(l), w = at(l), B = rt(c), F = at(c), j = {
    a: Z,
    A: re,
    b: ae,
    B: v,
    c: null,
    d: kr,
    e: kr,
    f: Ko,
    g: si,
    G: ii,
    H: Yo,
    I: Vo,
    j: qo,
    L: Vr,
    m: Zo,
    M: Jo,
    p: Q,
    q: z,
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
  }, S = {
    a: K,
    A: G,
    b: se,
    B: b,
    c: null,
    d: vr,
    e: vr,
    f: hi,
    g: vi,
    G: Si,
    H: ci,
    I: di,
    j: ui,
    L: Kr,
    m: fi,
    M: mi,
    p: N,
    q: W,
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
    a: p,
    A: f,
    b: $,
    B: ne,
    c: ee,
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
    p: m,
    q: Eo,
    Q: Uo,
    s: Go,
    S: Po,
    u: Fo,
    U: Io,
    V: Ro,
    w: Bo,
    W: Mo,
    x: H,
    X: V,
    y: xr,
    Y: br,
    Z: Lo,
    "%": Oo
  };
  j.x = C(r, j), j.X = C(a, j), j.c = C(t, j), S.x = C(r, S), S.X = C(a, S), S.c = C(t, S);
  function C(L, O) {
    return function(U) {
      var u = [], _ = -1, T = 0, M = L.length, D, P, te;
      for (U instanceof Date || (U = /* @__PURE__ */ new Date(+U)); ++_ < M; )
        L.charCodeAt(_) === 37 && (u.push(L.slice(T, _)), (P = gr[D = L.charAt(++_)]) != null ? D = L.charAt(++_) : P = D === "e" ? " " : "0", (te = O[D]) && (D = te(U, P)), u.push(D), T = _ + 1);
      return u.push(L.slice(T, _)), u.join("");
    };
  }
  function E(L, O) {
    return function(U) {
      var u = nt(1900, void 0, 1), _ = R(u, L, U += "", 0), T, M;
      if (_ != U.length) return null;
      if ("Q" in u) return new Date(u.Q);
      if ("s" in u) return new Date(u.s * 1e3 + ("L" in u ? u.L : 0));
      if (O && !("Z" in u) && (u.Z = 0), "p" in u && (u.H = u.H % 12 + u.p * 12), u.m === void 0 && (u.m = "q" in u ? u.q : 0), "V" in u) {
        if (u.V < 1 || u.V > 53) return null;
        "w" in u || (u.w = 1), "Z" in u ? (T = on(nt(u.y, 0, 1)), M = T.getUTCDay(), T = M > 4 || M === 0 ? kt.ceil(T) : kt(T), T = qn.offset(T, (u.V - 1) * 7), u.y = T.getUTCFullYear(), u.m = T.getUTCMonth(), u.d = T.getUTCDate() + (u.w + 6) % 7) : (T = sn(nt(u.y, 0, 1)), M = T.getDay(), T = M > 4 || M === 0 ? _t.ceil(T) : _t(T), T = ct.offset(T, (u.V - 1) * 7), u.y = T.getFullYear(), u.m = T.getMonth(), u.d = T.getDate() + (u.w + 6) % 7);
      } else ("W" in u || "U" in u) && ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0), M = "Z" in u ? on(nt(u.y, 0, 1)).getUTCDay() : sn(nt(u.y, 0, 1)).getDay(), u.m = 0, u.d = "W" in u ? (u.w + 6) % 7 + u.W * 7 - (M + 5) % 7 : u.w + u.U * 7 - (M + 6) % 7);
      return "Z" in u ? (u.H += u.Z / 100 | 0, u.M += u.Z % 100, on(u)) : sn(u);
    };
  }
  function R(L, O, U, u) {
    for (var _ = 0, T = O.length, M = U.length, D, P; _ < T; ) {
      if (u >= M) return -1;
      if (D = O.charCodeAt(_++), D === 37) {
        if (D = O.charAt(_++), P = A[D in gr ? O.charAt(_++) : D], !P || (u = P(L, U, u)) < 0) return -1;
      } else if (D != U.charCodeAt(u++))
        return -1;
    }
    return u;
  }
  function m(L, O, U) {
    var u = h.exec(O.slice(U));
    return u ? (L.p = d.get(u[0].toLowerCase()), U + u[0].length) : -1;
  }
  function p(L, O, U) {
    var u = k.exec(O.slice(U));
    return u ? (L.w = I.get(u[0].toLowerCase()), U + u[0].length) : -1;
  }
  function f(L, O, U) {
    var u = g.exec(O.slice(U));
    return u ? (L.w = x.get(u[0].toLowerCase()), U + u[0].length) : -1;
  }
  function $(L, O, U) {
    var u = B.exec(O.slice(U));
    return u ? (L.m = F.get(u[0].toLowerCase()), U + u[0].length) : -1;
  }
  function ne(L, O, U) {
    var u = y.exec(O.slice(U));
    return u ? (L.m = w.get(u[0].toLowerCase()), U + u[0].length) : -1;
  }
  function ee(L, O, U) {
    return R(L, t, O, U);
  }
  function H(L, O, U) {
    return R(L, r, O, U);
  }
  function V(L, O, U) {
    return R(L, a, O, U);
  }
  function Z(L) {
    return i[L.getDay()];
  }
  function re(L) {
    return o[L.getDay()];
  }
  function ae(L) {
    return c[L.getMonth()];
  }
  function v(L) {
    return l[L.getMonth()];
  }
  function Q(L) {
    return s[+(L.getHours() >= 12)];
  }
  function z(L) {
    return 1 + ~~(L.getMonth() / 3);
  }
  function K(L) {
    return i[L.getUTCDay()];
  }
  function G(L) {
    return o[L.getUTCDay()];
  }
  function se(L) {
    return c[L.getUTCMonth()];
  }
  function b(L) {
    return l[L.getUTCMonth()];
  }
  function N(L) {
    return s[+(L.getUTCHours() >= 12)];
  }
  function W(L) {
    return 1 + ~~(L.getUTCMonth() / 3);
  }
  return {
    format: function(L) {
      var O = C(L += "", j);
      return O.toString = function() {
        return L;
      }, O;
    },
    parse: function(L) {
      var O = E(L += "", !1);
      return O.toString = function() {
        return L;
      }, O;
    },
    utcFormat: function(L) {
      var O = C(L += "", S);
      return O.toString = function() {
        return L;
      }, O;
    },
    utcParse: function(L) {
      var O = E(L += "", !0);
      return O.toString = function() {
        return L;
      }, O;
    }
  };
}
var gr = { "-": "", _: " ", 0: "0" }, pe = /^\s*\d+/, No = /^%/, To = /[\\^$*+?|[\]().{}]/g;
function le(e, t, r) {
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
  var a = pe.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function Fo(e, t, r) {
  var a = pe.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Io(e, t, r) {
  var a = pe.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function Ro(e, t, r) {
  var a = pe.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Mo(e, t, r) {
  var a = pe.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function br(e, t, r) {
  var a = pe.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function xr(e, t, r) {
  var a = pe.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function Lo(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Eo(e, t, r) {
  var a = pe.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function $o(e, t, r) {
  var a = pe.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function yr(e, t, r) {
  var a = pe.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Ao(e, t, r) {
  var a = pe.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function _r(e, t, r) {
  var a = pe.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Ho(e, t, r) {
  var a = pe.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Po(e, t, r) {
  var a = pe.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function zo(e, t, r) {
  var a = pe.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function Wo(e, t, r) {
  var a = pe.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Oo(e, t, r) {
  var a = No.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Uo(e, t, r) {
  var a = pe.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Go(e, t, r) {
  var a = pe.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function kr(e, t) {
  return le(e.getDate(), t, 2);
}
function Yo(e, t) {
  return le(e.getHours(), t, 2);
}
function Vo(e, t) {
  return le(e.getHours() % 12 || 12, t, 2);
}
function qo(e, t) {
  return le(1 + ct.count(He(e), e), t, 3);
}
function Vr(e, t) {
  return le(e.getMilliseconds(), t, 3);
}
function Ko(e, t) {
  return Vr(e, t) + "000";
}
function Zo(e, t) {
  return le(e.getMonth() + 1, t, 2);
}
function Jo(e, t) {
  return le(e.getMinutes(), t, 2);
}
function Xo(e, t) {
  return le(e.getSeconds(), t, 2);
}
function Qo(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ei(e, t) {
  return le(Zt.count(He(e) - 1, e), t, 2);
}
function qr(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ze(e) : Ze.ceil(e);
}
function ti(e, t) {
  return e = qr(e), le(Ze.count(He(e), e) + (He(e).getDay() === 4), t, 2);
}
function ni(e) {
  return e.getDay();
}
function ri(e, t) {
  return le(_t.count(He(e) - 1, e), t, 2);
}
function ai(e, t) {
  return le(e.getFullYear() % 100, t, 2);
}
function si(e, t) {
  return e = qr(e), le(e.getFullYear() % 100, t, 2);
}
function oi(e, t) {
  return le(e.getFullYear() % 1e4, t, 4);
}
function ii(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Ze(e) : Ze.ceil(e), le(e.getFullYear() % 1e4, t, 4);
}
function li(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + le(t / 60 | 0, "0", 2) + le(t % 60, "0", 2);
}
function vr(e, t) {
  return le(e.getUTCDate(), t, 2);
}
function ci(e, t) {
  return le(e.getUTCHours(), t, 2);
}
function di(e, t) {
  return le(e.getUTCHours() % 12 || 12, t, 2);
}
function ui(e, t) {
  return le(1 + qn.count(Oe(e), e), t, 3);
}
function Kr(e, t) {
  return le(e.getUTCMilliseconds(), t, 3);
}
function hi(e, t) {
  return Kr(e, t) + "000";
}
function fi(e, t) {
  return le(e.getUTCMonth() + 1, t, 2);
}
function mi(e, t) {
  return le(e.getUTCMinutes(), t, 2);
}
function pi(e, t) {
  return le(e.getUTCSeconds(), t, 2);
}
function gi(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function bi(e, t) {
  return le(Yr.count(Oe(e) - 1, e), t, 2);
}
function Zr(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Je(e) : Je.ceil(e);
}
function xi(e, t) {
  return e = Zr(e), le(Je.count(Oe(e), e) + (Oe(e).getUTCDay() === 4), t, 2);
}
function yi(e) {
  return e.getUTCDay();
}
function _i(e, t) {
  return le(kt.count(Oe(e) - 1, e), t, 2);
}
function ki(e, t) {
  return le(e.getUTCFullYear() % 100, t, 2);
}
function vi(e, t) {
  return e = Zr(e), le(e.getUTCFullYear() % 100, t, 2);
}
function wi(e, t) {
  return le(e.getUTCFullYear() % 1e4, t, 4);
}
function Si(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Je(e) : Je.ceil(e), le(e.getUTCFullYear() % 1e4, t, 4);
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
var Ye, Jr;
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
  return Ye = jo(e), Jr = Ye.format, Ye.parse, Ye.utcFormat, Ye.utcParse, Ye;
}
function Ni(e) {
  return new Date(e);
}
function Ti(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Xr(e, t, r, a, s, o, i, l, c, h) {
  var d = lo(), g = d.invert, x = d.domain, k = h(".%L"), I = h(":%S"), y = h("%I:%M"), w = h("%I %p"), B = h("%a %d"), F = h("%b %d"), j = h("%B"), S = h("%Y");
  function A(C) {
    return (c(C) < C ? k : l(C) < C ? I : i(C) < C ? y : o(C) < C ? w : a(C) < C ? s(C) < C ? B : F : r(C) < C ? j : S)(C);
  }
  return d.invert = function(C) {
    return new Date(g(C));
  }, d.domain = function(C) {
    return arguments.length ? x(Array.from(C, Ti)) : x().map(Ni);
  }, d.ticks = function(C) {
    var E = x();
    return e(E[0], E[E.length - 1], C ?? 10);
  }, d.tickFormat = function(C, E) {
    return E == null ? A : h(E);
  }, d.nice = function(C) {
    var E = x();
    return (!C || typeof C.range != "function") && (C = t(E[0], E[E.length - 1], C ?? 10)), C ? x(co(E, C)) : d;
  }, d.copy = function() {
    return oo(d, Xr(e, t, r, a, s, o, i, l, c, h));
  }, d;
}
function Di() {
  return Bs.apply(Xr(So, Co, He, Kn, Zt, ct, Vn, Yn, qe, Jr).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
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
  const h = ce(null), [d, g] = ie(!1), [x, k] = ie(!1), I = t(e.start), y = t(e.end), w = Math.max(y - I, 20), B = () => {
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
  }, F = e.progress ? w * e.progress / 100 : 0, j = () => {
    r?.(e);
  }, S = () => {
    a?.(e);
  }, A = ($) => {
    $.key === "Enter" ? ($.preventDefault(), j()) : $.key === " " && ($.preventDefault(), S());
  }, C = () => {
    g(!0);
  }, E = () => {
    g(!1);
  }, R = () => {
    k(!0), l?.();
  }, m = () => {
    k(!1);
  }, p = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (x || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), f = {
    "--task-left": `${I}px`,
    "--task-width": `${w}px`,
    "--task-color": B(),
    left: `${I}px`,
    width: `${w}px`,
    backgroundColor: B()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: h,
      "data-task-index": o,
      className: p,
      style: f,
      onClick: j,
      onDoubleClick: S,
      onKeyDown: A,
      onMouseDown: C,
      onMouseUp: E,
      onFocus: R,
      onBlur: m,
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
  for (let k = e.getTime(); k <= t.getTime(); k += 864e5)
    a.push(new Date(k));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = ie(-1), c = ce(null), h = (k) => {
    if (k.key === "ArrowLeft") {
      k.preventDefault();
      const I = Math.max(0, i === -1 ? 0 : i - 1);
      l(I), x(I);
    } else if (k.key === "ArrowRight") {
      k.preventDefault();
      const I = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(I), x(I);
    } else if (k.key === "ArrowDown") {
      k.preventDefault();
      const I = document.querySelector(".gantt-row .timeline-container");
      I && I.focus();
    } else if (k.key === "Home")
      k.preventDefault(), l(0), x(0);
    else if (k.key === "End") {
      k.preventDefault();
      const I = a.length - 1;
      l(I), x(I);
    }
  }, d = (k) => {
    if (k.key === "ArrowDown") {
      k.preventDefault();
      const I = document.querySelector(".gantt-row .resource-label");
      I && I.focus();
    } else if (k.key === "ArrowRight") {
      k.preventDefault();
      const I = c.current;
      I && I.focus();
    }
  }, g = () => {
    i === -1 && (l(0), setTimeout(() => x(0), 0));
  }, x = (k) => {
    const I = c.current?.querySelector(`[data-date-index="${k}"]`);
    I && I.focus();
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
            onKeyDown: h,
            onFocus: g,
            children: a.map((k, I) => {
              const y = k.getTime() === o.getTime(), w = i === I;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": I,
                  className: `date-column ${y ? "today" : ""} ${w ? "focused" : ""}`,
                  tabIndex: w ? 0 : -1,
                  role: "button",
                  "aria-label": `${k.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${y ? " (Today)" : ""}`,
                  onFocus: () => l(I),
                  onKeyDown: h,
                  children: k.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                I
              );
            })
          }
        )
      ]
    }
  );
}
function Ii({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, c] = ie(!1), [h, d] = ie(-1), g = ce(null);
  de(() => {
    l && h >= 0 && t.length > 0 && setTimeout(() => {
      g.current?.querySelector(`[data-task-index="${h}"]`)?.focus();
    }, 0);
  }, [l, h, t.length]);
  const x = (y) => {
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
          y.preventDefault(), o === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          y.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          y.preventDefault(), g.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (y.preventDefault(), c(!0), d(0));
          break;
      }
      return;
    }
    switch (y.key) {
      case "ArrowLeft":
        y.preventDefault();
        const w = Math.max(0, h - 1);
        d(w), g.current?.querySelector(`[data-task-index="${w}"]`)?.focus();
        break;
      case "ArrowRight":
        y.preventDefault();
        const F = Math.min(t.length - 1, h + 1);
        d(F), g.current?.querySelector(`[data-task-index="${F}"]`)?.focus();
        break;
      case "Enter":
        y.preventDefault(), h >= 0 && a?.(t[h]);
        break;
      case " ":
        y.preventDefault(), h >= 0 && s?.(t[h]);
        break;
      case "Escape":
        y.preventDefault(), c(!1), d(-1), g.current?.focus();
        break;
    }
  }, k = (y) => {
    switch (y.key) {
      case "ArrowUp":
        y.preventDefault(), o === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        y.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        y.preventDefault(), g.current?.focus();
        break;
    }
  }, I = (y) => {
    l && d(y);
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
            onKeyDown: k,
            children: e.label
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: g,
            className: `timeline-container ${l ? "timeline-active" : ""}`,
            role: "gridcell",
            "aria-colindex": 2,
            "aria-colspan": i,
            tabIndex: 0,
            "aria-label": `Timeline for ${e.label} with ${t.length} task${t.length !== 1 ? "s" : ""}. Press Enter to activate task navigation, then use arrow keys to navigate, Enter to select, Space to activate, Escape to exit`,
            onKeyDown: x,
            onFocus: () => {
              l || d(-1);
            },
            children: t.map((y, w) => /* @__PURE__ */ n.jsx(
              Bi,
              {
                task: y,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && h === w,
                taskIndex: w,
                tabIndex: l && h === w ? 0 : -1,
                onFocus: () => I(w)
              },
              y.id
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
  const i = ce(null), [l, c] = ie(800), h = he(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const y = new Date(r);
    return isNaN(y.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : y;
  }, [r]), d = he(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const y = new Date(a);
    return isNaN(y.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : y;
  }, [a]), g = he(() => Math.ceil((d.getTime() - h.getTime()) / 864e5) + 1, [h, d]);
  de(() => {
    if (!i.current) return;
    const y = new ResizeObserver((w) => {
      const B = w[0];
      B && c(Math.max(B.contentRect.width - 220, 400));
    });
    return y.observe(i.current), () => y.disconnect();
  }, []);
  const x = he(
    () => Di().domain([h, d]).range([0, l]),
    [h, d, l]
  ), k = he(() => {
    const y = /* @__PURE__ */ new Map();
    return t.forEach((w) => {
      const B = y.get(w.resourceId) || [];
      B.push(w), y.set(w.resourceId, B);
    }), y;
  }, [t]), I = (y) => {
    if (y.target === y.currentTarget)
      switch (y.key) {
        case "ArrowDown":
          y.preventDefault();
          const w = i.current?.querySelector(".gantt-row .resource-label");
          w && w.focus();
          break;
        case "Home":
          y.preventDefault();
          const B = i.current?.querySelector(".header-resource");
          B && B.focus();
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
      "aria-colcount": g + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: I,
      children: [
        /* @__PURE__ */ n.jsx(Fi, { viewStart: h, viewEnd: d, dateCount: g }),
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
            children: e.map((y, w) => /* @__PURE__ */ n.jsx(
              Ii,
              {
                resource: y,
                tasks: k.get(y.id) || [],
                scale: x,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: w,
                dateCount: g
              },
              y.id
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
) }), Ri = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? ke.Children.toArray(t).filter(
    (B) => ke.isValidElement(B) && (B.type === vt || B.type?.displayName === "BreadcrumbItem")
  ).map((B) => ({
    text: typeof B.props.children == "string" ? B.props.children : String(B.props.children),
    href: B.props.href,
    active: B.props.active,
    attributes: B.props.attributes
  })) : [], h = () => t ? c() : s && o ? [{ href: s, text: o }] : e, d = () => {
    const w = h();
    if (w && w.length > 0) {
      const B = w.slice().reverse().find((F) => F.href && !F.active);
      if (B)
        return { href: B.href, text: B.text };
    }
    return { text: "Home" };
  }, g = h(), x = d(), k = Y(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), y = g && g.length > 1 ? a : void 0;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: k,
      "aria-label": y,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          ke.Children.map(t, (w, B) => ke.isValidElement(w) && (w.type === vt || w.type?.displayName === "BreadcrumbItem") ? ke.cloneElement(w, { key: B }) : null)
        ) : (
          // Render from items array
          g?.map((w, B) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: w.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...w.attributes || {},
              children: w.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: w.href,
              role: "link",
              ...w.attributes || {},
              children: w.text
            }
          ) }, B))
        ) }),
        x.href && /* @__PURE__ */ n.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ n.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: x.href,
            role: "link",
            "aria-label": `Back to ${x.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              x.text
            ]
          }
        ) })
      ]
    }
  );
}, Mi = Ri;
Mi.Item = vt;
vt.displayName = "BreadcrumbItem";
const Qr = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [s, o] = ie(!1);
  de(() => {
    o(!0);
  }, []), de(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (c) => {
      const h = c.target, d = h.getAttribute("href");
      if (d && d.startsWith("#")) {
        const g = document.querySelector(d);
        if (g) {
          g.hasAttribute("tabindex") || g.setAttribute("tabindex", "-1"), g.focus(), g.classList.add("nhsuk-skip-link-focused-element");
          const x = window.setTimeout(() => {
            g.classList.remove("nhsuk-skip-link-focused-element"), g.getAttribute("tabindex") === "-1" && g.removeAttribute("tabindex");
          }, 3e3);
          h.__nhsSkipLinkTimeout = x;
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
            const d = h.__nhsSkipLinkTimeout;
            d && window.clearTimeout && window.clearTimeout(d);
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
  const i = Y("nhsuk-skip-link", r);
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
  const i = Y("nhsuk-pagination", s);
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
  const s = Y("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, ea = ke.forwardRef(({
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
  ...d
}, g) => {
  const x = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    d.className
  ].filter(Boolean).join(" "), k = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), I = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), y = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const F = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      $e,
      {
        level: a,
        className: I,
        children: F()
      }
    );
  }, w = () => d.children ? d.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: o }) : null, B = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      className: x,
      ref: g,
      children: [
        c && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: h || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: k, children: [
          y(),
          w(),
          B()
        ] })
      ]
    }
  );
});
ea.displayName = "Card";
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
  id: d,
  "aria-label": g,
  "aria-labelledby": x,
  "aria-describedby": k
}) => {
  const I = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), y = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), w = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const F = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], j = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        F,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      $e,
      {
        level: a,
        className: y,
        children: j
      }
    );
  }, B = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: I,
      "data-testid": h,
      id: d,
      "aria-label": g,
      "aria-labelledby": x,
      "aria-describedby": k,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          w(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: B() })
      ]
    }
  );
}, Li = ({
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
  const h = Y(
    "nhsuk-panel",
    t
  ), d = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    $e,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    $e,
    {
      level: s,
      className: "nhsuk-panel__heading",
      text: r,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, g = () => l ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : o ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: o }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: h, id: e, ...c, children: [
    d(),
    g()
  ] });
}, Dh = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...s
}) => {
  const o = Y("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: o, ...s, children: i() });
}, Bh = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const s = Y(
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
  tableClasses: d,
  classes: g,
  attributes: x,
  "data-testid": k
}) => {
  const I = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), y = Y(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    d
  ), w = Y(g), B = (S, A) => {
    const C = Y("nhsuk-table__header", {
      [`nhsuk-table__header--${S.format}`]: S.format
    }, S.classes), E = {
      scope: "col",
      ...S.colspan && { colSpan: S.colspan },
      ...S.rowspan && { rowSpan: S.rowspan },
      ...o && { role: "columnheader" },
      ...S.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: C, ...E, children: S.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text }, A);
  }, F = (S, A, C) => {
    const E = s && C, R = Y(
      E ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${E ? "header" : "cell"}--${S.format}`]: S.format
      },
      S.classes
    ), m = {
      ...E && { scope: "row" },
      ...S.colspan && { colSpan: S.colspan },
      ...S.rowspan && { rowSpan: S.rowspan },
      ...o && {
        role: E ? "rowheader" : "cell",
        ...S.header && { "data-label": S.header }
      },
      ...S.attributes
    }, p = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      o && S.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        S.header,
        " "
      ] }),
      S.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text
    ] }), f = E ? "th" : "td";
    return /* @__PURE__ */ n.jsx(f, { className: R, ...m, children: p }, A);
  }, j = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: y,
      ...o && { role: "table" },
      ...x,
      ...k && { "data-testid": k },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: I, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...o && { role: "row" }, children: t.map((S, A) => B(S, A)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((S, A) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: S.map(
              (C, E) => F(C, E, E === 0)
            )
          },
          A
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(Li, { className: h, children: [
    i && /* @__PURE__ */ n.jsx($e, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    j()
  ] }) : w ? /* @__PURE__ */ n.jsx("div", { className: w, children: j() }) : j();
}, Ih = Xe(({
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
  "data-testid": d,
  ...g
}, x) => {
  const k = r !== void 0, [I, y] = ie(() => t || e[0]?.id || ""), w = k ? r : I, B = ce(null), F = ce(/* @__PURE__ */ new Map()), j = q((p) => {
    k || y(p), a?.(p);
  }, [k, a]), S = q((p) => {
    s?.(p), l && j(p);
  }, [s, l, j]), A = q((p, f) => {
    const $ = e.filter((H) => !H.disabled).map((H) => H.id), ne = $.indexOf(f);
    let ee = null;
    switch (p.key) {
      case "ArrowLeft":
        ee = ne > 0 ? ne - 1 : $.length - 1;
        break;
      case "ArrowRight":
        ee = ne < $.length - 1 ? ne + 1 : 0;
        break;
      case "Home":
        ee = 0;
        break;
      case "End":
        ee = $.length - 1;
        break;
      case "Escape":
        p.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (ee !== null) {
      p.preventDefault();
      const H = $[ee], V = F.current.get(H);
      V && (V.focus(), S(H));
    }
  }, [e, S, i]), C = q((p, f) => {
    f ? F.current.set(p, f) : F.current.delete(p);
  }, []), E = q((p) => {
    const f = F.current.get(p);
    f && f.focus();
  }, []);
  Fr(x, () => ({
    focusTab: E,
    getActiveTab: () => w,
    getTabListElement: () => B.current
  }), [E, w]);
  const R = q((p) => {
    const f = p.relatedTarget;
    B.current?.contains(f) || o?.();
  }, [o]), m = Y("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: m,
      id: h,
      "data-testid": d,
      ...g,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: B,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: R,
                children: e.map((p) => {
                  const f = p.id === w, $ = p.disabled, ne = Y("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": f,
                    "nhsuk-tabs__list-item--disabled": $
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: ne, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (ee) => C(p.id, ee),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": f,
                      "aria-controls": `${p.id}-panel`,
                      id: `${p.id}-tab`,
                      tabIndex: f ? 0 : -1,
                      disabled: $,
                      onClick: () => !$ && j(p.id),
                      onKeyDown: (ee) => !$ && A(ee, p.id),
                      onFocus: () => !$ && S(p.id),
                      ...p.attributes,
                      children: p.label
                    }
                  ) }, p.id);
                })
              }
            )
          }
        ),
        e.map((p) => {
          const f = p.id === w;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${p.id}-tab`,
              id: `${p.id}-panel`,
              hidden: !f,
              children: p.content
            },
            p.id
          );
        })
      ]
    }
  );
}), Ei = Xe(
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
    const d = [
      "nhsuk-details",
      o
    ].filter(Boolean).join(" "), g = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let x;
    return l ? x = l : a ? x = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (x = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: h,
        id: i,
        className: d,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: g }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: x })
        ]
      }
    );
  }
);
Ei.displayName = "Details";
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
    ), g = (k) => t === "cross" && !a ? `do not ${k}` : k, x = () => /* @__PURE__ */ n.jsx(
      $e,
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
          x(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: h.join(" "), role: "list", children: r.map((k, I) => /* @__PURE__ */ n.jsxs("li", { children: [
            d(),
            g(k.item)
          ] }, I)) }) })
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
    const d = [
      "nhsuk-expander",
      o
    ].filter(Boolean).join(" "), g = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let x;
    return l ? x = l : a ? x = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (x = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: h,
        id: i,
        className: d,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: g }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: x })
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
      const h = c + 1, d = `${t}-${h}-hint`, g = `${t}-${h}-status`, x = !!l.href, k = [
        "nhsuk-task-list__item",
        x && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), I = [
        l.hint && d,
        g
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Pi,
        {
          item: l,
          itemClasses: k,
          hasLink: x,
          hintId: d,
          statusId: g,
          ariaDescribedBy: I
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
    const h = e.title.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, d = [
      r ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: d,
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
    let d;
    return e.status.tag ? d = /* @__PURE__ */ n.jsx(Ee, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ n.jsx("div", { className: h, id: s, children: d });
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
const Rh = ({
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
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: h,
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
  ].filter(Boolean).join(" "), h = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx($e, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, Lh = ({
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
}, Wi = ke.forwardRef(
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
    ariaDescribedby: d,
    className: g,
    tableClassName: x,
    bordered: k = !1,
    striped: I = !1,
    responsive: y = !1,
    tableType: w = "default"
  }, B) => {
    const F = ce(null), j = ce(null), S = ce(null);
    ke.useImperativeHandle(B, () => F.current, []);
    const [A, C] = ie(0), [E, R] = ie(0), [m, p] = ie("headers"), [f, $] = ie("browse"), ne = t.length, ee = e.length, H = he(() => !r || r.length === 0 ? e : [...e].sort((z, K) => {
      for (const { key: G, direction: se } of r) {
        const b = z[G], N = K[G];
        if (b == null && N == null) continue;
        if (b == null) return 1;
        if (N == null) return -1;
        let W = 0;
        if (typeof b == "number" && typeof N == "number" ? W = b - N : W = String(b).localeCompare(String(N)), W !== 0)
          return se === "asc" ? W : -W;
      }
      return 0;
    }), [e, r]), V = q((z, K) => {
      setTimeout(() => {
        const G = F.current?.querySelector(
          `tbody tr:nth-child(${z + 1}) td:nth-child(${K + 1})`
        );
        G && (G.focus(), typeof G.scrollIntoView == "function" && G.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Z = q((z) => {
      setTimeout(() => {
        const K = F.current?.querySelector(`th:nth-child(${z + 1})`);
        K && (K.focus(), typeof K.scrollIntoView == "function" && K.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), re = q((z) => {
      a?.(z);
    }, [a]), ae = q((z) => {
      o?.(z);
    }, [o]), v = q((z) => {
      const { key: K } = z;
      switch (K) {
        case "Enter":
          if (z.preventDefault(), m === "headers" && f === "browse")
            $("navigate"), Z(E);
          else if (m === "headers" && f === "navigate") {
            const G = t[E];
            G && re(G.key);
          } else m === "cells" && f === "browse" ? ($("navigate"), V(A, E)) : m === "cells" && f === "navigate" && ae(A);
          break;
        case "Escape":
          z.preventDefault(), (m === "headers" && f === "navigate" || m === "cells" && f === "navigate") && $("browse");
          break;
        case "ArrowLeft":
          if (z.preventDefault(), f === "navigate" || f === "browse" && m === "headers") {
            if (m === "headers") {
              const G = Math.max(0, E - 1);
              R(G), Z(G);
            } else if (m === "cells") {
              const G = Math.max(0, E - 1);
              R(G), V(A, G);
            }
          }
          break;
        case "ArrowRight":
          if (z.preventDefault(), f === "navigate" || f === "browse" && m === "headers") {
            if (m === "headers") {
              const G = Math.min(ne - 1, E + 1);
              R(G), Z(G);
            } else if (m === "cells") {
              const G = Math.min(ne - 1, E + 1);
              R(G), V(A, G);
            }
          }
          break;
        case "ArrowUp":
          if (z.preventDefault(), m === "cells") {
            if (f === "browse") {
              const G = Math.max(0, A - 1);
              C(G), V(G, 0), R(0);
            } else if (f === "navigate")
              if (A > 0) {
                const G = A - 1;
                C(G), V(G, E);
              } else
                p("headers"), $("browse"), Z(E);
          }
          break;
        case "ArrowDown":
          if (z.preventDefault(), m === "headers" && f === "browse")
            p("cells"), C(0), R(0), V(0, 0);
          else if (m === "cells") {
            const G = ee - 1;
            if (f === "browse") {
              const se = Math.min(G, A + 1);
              C(se), V(se, 0), R(0);
            } else if (f === "navigate" && A < G) {
              const se = A + 1;
              C(se), V(se, E);
            }
          }
          break;
        case "Home":
          z.preventDefault(), m === "headers" ? (R(0), Z(0)) : m === "cells" && (z.ctrlKey ? (C(0), R(0), V(0, 0)) : (R(0), V(A, 0)));
          break;
        case "End":
          if (z.preventDefault(), m === "headers") {
            const G = ne - 1;
            R(G), Z(G);
          } else if (m === "cells")
            if (z.ctrlKey) {
              const G = ee - 1, se = ne - 1;
              C(G), R(se), V(G, se);
            } else {
              const G = ne - 1;
              R(G), V(A, G);
            }
          break;
        case " ":
          if (z.preventDefault(), m === "headers" && f === "navigate") {
            const G = t[E];
            G && re(G.key);
          } else m === "cells" && f === "navigate" && ae(A);
          break;
      }
    }, [
      m,
      f,
      E,
      A,
      ne,
      ee,
      t,
      V,
      Z,
      re,
      ae
    ]);
    de(() => {
      const z = F.current;
      if (z)
        return z.addEventListener("keydown", v), () => z.removeEventListener("keydown", v);
    }, [v]);
    const Q = Y(
      "nhsuk-table",
      x,
      {
        "nhsuk-table--responsive": y,
        "nhsuk-table--bordered": k,
        "nhsuk-table--striped": I,
        "nhsuk-table--compact": w === "compact"
      },
      g
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: F,
        className: Q,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": h,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: j, role: "row", children: t.map((z, K) => {
            const G = r?.find((N) => N.key === z.key), se = !!G, b = m === "headers" && E === K;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: Y("sortable-header", {
                  "sortable-header--focused": b
                }),
                role: "columnheader",
                tabIndex: b ? 0 : -1,
                onClick: () => re(z.key),
                onKeyDown: (N) => {
                  (N.key === "Enter" || N.key === " ") && (N.preventDefault(), re(z.key));
                },
                "aria-sort": se ? G?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: z.label }),
                  se && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((N) => N.key === z.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: G?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              z.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: S, className: "nhsuk-table__body", role: "rowgroup", children: H.map((z, K) => {
            const G = s === K, se = m === "cells" && A === K;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: Y("data-row", {
                  "data-row--selected": G,
                  "data-row--focused": se
                }),
                "aria-selected": G,
                children: t.map((b, N) => {
                  const W = b.render ? b.render(z) : z[b.key], L = m === "cells" && A === K && E === N, O = () => typeof W == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: W ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: W ? "Yes" : "No" })
                  ] }) : String(W ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: Y("data-cell", {
                        "data-cell--focused": L
                      }),
                      tabIndex: L ? 0 : -1,
                      onClick: () => ae(K),
                      children: O()
                    },
                    b.key
                  );
                })
              },
              K
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
  ariaDescribedBy: d
}) => {
  const g = ce(null), x = ce(null), k = ce(null), I = q((m, p) => {
    c || (x.current = p, m.dataTransfer.effectAllowed = "move", m.dataTransfer.setData("text/plain", p));
  }, [c]), y = q((m, p) => {
    c || x.current === p || (m.preventDefault(), m.dataTransfer.dropEffect = "move", k.current = p);
  }, [c]), w = q((m, p) => {
    if (c) return;
    m.preventDefault();
    const f = x.current;
    if (!f || f === p) return;
    const $ = e.findIndex((ee) => ee.key === f), ne = e.findIndex((ee) => ee.key === p);
    if ($ !== -1 && ne !== -1) {
      const ee = [...e], [H] = ee.splice($, 1);
      ee.splice(ne, 0, H), r(ee);
    }
    x.current = null, k.current = null;
  }, [c, e, r]), B = q(() => {
    x.current = null, k.current = null;
  }, []), F = q((m) => {
    const p = t.find((f) => f.key === m);
    return p ? p.label : m;
  }, [t]), j = q((m) => ["red", "orange", "blue", "aqua-green", "grey"][m] || "grey", []), S = q((m) => {
    if (c) return;
    const p = e.map(
      (f) => f.key === m ? { ...f, direction: f.direction === "asc" ? "desc" : "asc" } : f
    );
    r(p);
  }, [e, r, c]), A = q((m) => {
    if (c) return;
    const p = e.filter((f) => f.key !== m);
    r(p);
  }, [e, r, c]), C = q(() => {
    c || r([]);
  }, [r, c]), E = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const m = e.map((p, f) => {
      const $ = p.direction === "asc" ? "ascending" : "descending";
      return `${f + 1}. ${F(p.key)} (${$})`;
    });
    if (m.length === 1)
      return `Sorted by: ${m[0]}`;
    if (m.length === 2)
      return `Sorted by: ${m.join(" and ")}`;
    {
      const p = m.pop();
      return `Sorted by: ${m.join(", ")}, and ${p}`;
    }
  }, R = he(() => {
    const m = ["sort-description"];
    return l && m.push("sort-help"), d && m.push(d), m.join(" ");
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
        children: E()
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: g,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": h,
          "aria-describedby": R,
          children: e.map((m, p) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (f) => I(f, m.key),
              onDragOver: (f) => y(f, m.key),
              onDrop: (f) => w(f, m.key),
              onDragEnd: B,
              onClick: () => S(m.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${m.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": m.key,
              children: /* @__PURE__ */ n.jsx(
                Ee,
                {
                  color: j(p),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => A(m.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${p + 1}`, children: p + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: F(m.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (f) => {
                          f.stopPropagation(), S(m.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${F(m.key)}. Currently ${m.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${m.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${m.direction}`,
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
            m.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        ye,
        {
          variant: "secondary",
          onClick: C,
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
      className: d = "",
      disabled: g = !1,
      orientation: x = "horizontal",
      id: k,
      isLoading: I = !1,
      loadingComponent: y,
      error: w = null,
      errorComponent: B,
      "data-testid": F
    } = t, {
      dataComparator: j = (b, N) => JSON.stringify(b) === JSON.stringify(N),
      filterFunction: S = (b) => b,
      booleanRenderer: A = (b) => b ? "✓" : "✗"
    } = a || {}, C = o !== void 0, E = o ?? 0, [R, m] = ie({
      focusArea: "tabs",
      focusedTabIndex: E,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), p = he(() => ({
      selectedIndex: E,
      tabLoadingStates: new Array(s.length).fill(!1),
      tabErrors: new Array(s.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(s.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [E]), [f, $] = Ir(Ui, p);
    de(() => {
      const b = f.tabLoadingStates.length, N = s.length;
      b !== N && $({ type: "ADJUST_ARRAYS", payload: { newLength: N } });
    }, [s.length]), de(() => {
      C && $({ type: "SET_SELECTED_INDEX", payload: E });
    }, [E, C]), de(() => {
      m((b) => ({
        ...b,
        focusArea: "tabs",
        focusedTabIndex: f.selectedIndex,
        focusedHeaderIndex: 0,
        focusedRowIndex: 0,
        focusedColumnIndex: 0,
        isGridActive: !1
      }));
    }, [f.selectedIndex]), de(() => {
      l && l(f.globalSelectedRowData);
    }, [f.globalSelectedRowData, l]);
    const ne = q((b, N) => j(b, N), [j]), ee = q((b) => {
      b >= 0 && b < s.length && !s[b].disabled && ($({ type: "SET_SELECTED_INDEX", payload: b }), m((N) => ({
        ...N,
        focusedTabIndex: b,
        focusArea: "tabs"
      })), i?.(b));
    }, [s, i]), H = q((b) => {
      setTimeout(() => {
        const N = Z.current[b], W = N?.parentElement;
        if (N && W) {
          const L = N.offsetLeft, O = N.offsetWidth, U = W.clientWidth, u = L - U / 2 + O / 2;
          try {
            W.scrollTo({
              left: Math.max(0, u),
              behavior: "smooth"
            });
          } catch {
            N.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else
          console.log("Missing elements for scroll:", { tabElement: N, tabListElement: W });
      }, 50);
    }, []), V = q((b, N) => {
      const { key: W } = b;
      switch (W) {
        case "ArrowLeft":
          b.preventDefault();
          const L = N > 0 ? N - 1 : s.length - 1;
          ee(L), H(L), Z.current[L]?.focus();
          break;
        case "ArrowRight":
          b.preventDefault();
          const O = N < s.length - 1 ? N + 1 : 0;
          ee(O), H(O), Z.current[O]?.focus();
          break;
        case "ArrowDown":
          b.preventDefault(), m((u) => ({
            ...u,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        case "Home":
          b.preventDefault(), ee(0), H(0), Z.current[0]?.focus();
          break;
        case "End":
          b.preventDefault();
          const U = s.length - 1;
          ee(U), H(U), Z.current[U]?.focus();
          break;
        case "Enter":
        case " ":
          b.preventDefault(), ee(N);
          break;
      }
    }, [s.length, ee, H]), Z = ce([]), re = ce([]), ae = q((b, N) => {
      const W = f.sortConfig || [], L = W.find((u) => u.key === N);
      let O;
      L ? L.direction === "asc" ? O = W.map(
        (u) => u.key === N ? { ...u, direction: "desc" } : u
      ) : O = W.filter((u) => u.key !== N) : O = [...W, { key: N, direction: "asc" }], $({
        type: "SET_SORT",
        payload: O
      }), s[b].onSort?.(N);
    }, [f.sortConfig, s]), v = q((b) => {
      setTimeout(() => {
        const N = document.querySelector(
          `[data-tab-panel="${f.selectedIndex}"] th:nth-child(${b + 1})`
        );
        N && N.focus();
      }, 0);
    }, [f.selectedIndex]), Q = q((b) => A(b), [A]), z = q((b, N) => {
      setTimeout(() => {
        const W = document.querySelector(
          `[data-tab-panel="${f.selectedIndex}"] tbody tr:nth-child(${b + 1}) td:nth-child(${N + 1})`
        );
        W && W.focus();
      }, 0);
    }, [f.selectedIndex]);
    de(() => {
      R.isGridActive && (R.focusArea === "headers" ? setTimeout(() => {
        v(R.focusedHeaderIndex);
      }, 0) : R.focusArea === "cells" && setTimeout(() => {
        z(R.focusedRowIndex, R.focusedColumnIndex);
      }, 0));
    }, [R.focusArea, R.isGridActive, R.focusedHeaderIndex, R.focusedRowIndex, R.focusedColumnIndex, v, z]), de(() => {
      H(f.selectedIndex);
    }, [f.selectedIndex, H]);
    const K = q((b, N) => {
      const { key: W } = b, L = s[f.selectedIndex], O = L?.columns.length || 0;
      switch (W) {
        case "ArrowLeft":
          b.preventDefault();
          const U = Math.max(0, N - 1);
          m((M) => ({ ...M, focusedHeaderIndex: U })), v(U);
          break;
        case "ArrowRight":
          b.preventDefault();
          const u = Math.min(O - 1, N + 1);
          m((M) => ({ ...M, focusedHeaderIndex: u })), v(u);
          break;
        case "ArrowUp":
          b.preventDefault(), m((M) => ({
            ...M,
            focusArea: "tabs",
            focusedTabIndex: f.selectedIndex
          })), H(f.selectedIndex), Z.current[f.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          b.preventDefault(), m((M) => ({
            ...M,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: N,
            isGridActive: !0
          }));
          break;
        case "Home":
          b.preventDefault(), m((M) => ({ ...M, focusedHeaderIndex: 0 })), v(0);
          break;
        case "End":
          b.preventDefault();
          const _ = O - 1;
          m((M) => ({ ...M, focusedHeaderIndex: _ })), v(_);
          break;
        case "Enter":
        case " ":
          b.preventDefault();
          const T = L?.columns[N]?.key;
          T && ae(f.selectedIndex, T);
          break;
      }
    }, [s, f.selectedIndex, ae, m, v, z, Z]), G = q((b, N, W) => {
      const { key: L } = b, O = s[f.selectedIndex], U = O?.data.length || 0, u = O?.columns.length || 0;
      switch (L) {
        case "ArrowUp":
          if (b.preventDefault(), N === 0)
            m((D) => ({
              ...D,
              focusArea: "headers",
              focusedHeaderIndex: W,
              isGridActive: !1
            })), v(W);
          else {
            const D = N - 1;
            m((P) => ({ ...P, focusedRowIndex: D })), z(D, W);
          }
          break;
        case "ArrowDown":
          b.preventDefault();
          const _ = Math.min(U - 1, N + 1);
          m((D) => ({ ...D, focusedRowIndex: _ })), z(_, W);
          break;
        case "ArrowLeft":
          b.preventDefault();
          const T = Math.max(0, W - 1);
          m((D) => ({ ...D, focusedColumnIndex: T })), z(N, T);
          break;
        case "ArrowRight":
          b.preventDefault();
          const M = Math.min(u - 1, W + 1);
          m((D) => ({ ...D, focusedColumnIndex: M })), z(N, M);
          break;
        case "Home":
          b.preventDefault(), b.ctrlKey ? (m((D) => ({ ...D, focusedRowIndex: 0, focusedColumnIndex: 0 })), z(0, 0)) : (m((D) => ({ ...D, focusedColumnIndex: 0 })), z(N, 0));
          break;
        case "End":
          if (b.preventDefault(), b.ctrlKey) {
            const D = U - 1, P = u - 1;
            m((te) => ({ ...te, focusedRowIndex: D, focusedColumnIndex: P })), z(D, P);
          } else {
            const D = u - 1;
            m((P) => ({ ...P, focusedColumnIndex: D })), z(N, D);
          }
          break;
        case "Enter":
        case " ":
          if (b.preventDefault(), O && O.data[N]) {
            const D = O.data.some((X) => "ews_data" in X) ? S(O.data, f.filters) : O.data, P = f.sortConfig;
            let te = D;
            if (P && P.length > 0 && (te = [...D].sort((X, J) => {
              for (const { key: oe, direction: ge } of P) {
                let ue = X[oe], me = J[oe];
                const Jt = O.columns.find((Za) => Za.key === oe);
                if (Jt?.render && (ue = Jt.render(X), me = Jt.render(J)), ue == null && me == null) continue;
                if (ue == null) return ge === "asc" ? -1 : 1;
                if (me == null) return ge === "asc" ? 1 : -1;
                let Qe = 0;
                if (typeof ue == "number" && typeof me == "number" ? Qe = ue - me : Qe = String(ue).localeCompare(String(me), void 0, { numeric: !0, sensitivity: "base" }), Qe !== 0)
                  return ge === "asc" ? Qe : -Qe;
              }
              return 0;
            })), te[N]) {
              const X = te[N], oe = f.globalSelectedRowData && ne(f.globalSelectedRowData, X) ? null : X;
              $({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: oe
              });
            }
          }
          break;
      }
    }, [s, f.selectedIndex, f.filters, f.sortConfig, S, ne, $, m, v, z]), se = q((b, N) => S(b, N), [S]);
    return Fr(r, () => ({
      selectTab: (b) => {
        b >= 0 && b < s.length && ($({ type: "SET_SELECTED_INDEX", payload: b }), i?.(b));
      },
      refreshData: (b) => {
        console.log("Refreshing data for tab:", b ?? "all");
      },
      exportData: (b) => {
        const N = b ?? f.selectedIndex, W = s[N];
        return W ? W.data : [];
      },
      getSelectedRows: (b) => f.globalSelectedRowData ? [] : [],
      clearSelection: (b) => {
        $({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (b) => {
        $({ type: "SET_FILTERS", payload: b });
      }
    }), [f.selectedIndex, f.selectedRows, s, i]), I ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": F, children: y || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : w ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": F, children: B || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: w })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${x} ${d}`,
        id: k,
        "data-testid": F,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${k}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Oi,
            {
              sortConfig: f.sortConfig || [],
              columns: s.flatMap(
                (b) => b.columns.map((N) => ({ key: N.key, label: N.label }))
              ).filter(
                (b, N, W) => W.findIndex((L) => L.key === b.key) === N
                // Remove duplicates
              ),
              onSortChange: (b) => {
                $({ type: "SET_SORT", payload: b });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": `${h || ""} ${k ? `${k}-navigation-help` : ""}`.trim(),
              "aria-orientation": x,
              className: "aria-tabs-datagrid__tabs",
              children: s.map((b, N) => {
                const W = N === f.selectedIndex, L = b.disabled || g;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${b.id}`,
                    "aria-controls": `panel-${b.id}`,
                    "aria-selected": W,
                    "aria-disabled": L,
                    tabIndex: W ? 0 : -1,
                    ref: (O) => {
                      Z.current[N] = O;
                    },
                    onClick: () => ee(N),
                    onKeyDown: (O) => V(O, N),
                    disabled: L,
                    className: `
				  aria-tabs-datagrid__tab
				  ${W ? "aria-tabs-datagrid__tab--selected" : ""}
				  ${L ? "aria-tabs-datagrid__tab--disabled" : ""}
				`.trim(),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: b.label }),
                      f.tabLoadingStates[N] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      f.tabErrors[N] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  b.id
                );
              })
            }
          ),
          s.map((b, N) => {
            const W = N === f.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${b.id}`,
                "aria-labelledby": `tab-${b.id}`,
                tabIndex: 0,
                hidden: !W,
                ref: (L) => {
                  re.current[N] = L;
                },
                className: `aria-tabs-datagrid__panel ${b.className || ""}`,
                "data-tab-panel": N,
                children: W && (() => {
                  const L = b.data.some((U) => "ews_data" in U) ? se(b.data, f.filters) : b.data, O = he(() => {
                    const U = f.sortConfig;
                    return !U || U.length === 0 ? L : [...L].sort((u, _) => {
                      for (const { key: T, direction: M } of U) {
                        let D = u[T], P = _[T];
                        const te = b.columns.find((J) => J.key === T);
                        if (te?.render && (D = te.render(u), P = te.render(_)), D == null && P == null) continue;
                        if (D == null) return 1;
                        if (P == null) return -1;
                        let X = 0;
                        if (typeof D == "number" && typeof P == "number" ? X = D - P : typeof D == "boolean" && typeof P == "boolean" ? X = D === P ? 0 : D ? 1 : -1 : X = String(D).localeCompare(String(P), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), X !== 0)
                          return M === "asc" ? X : -X;
                      }
                      return 0;
                    });
                  }, [L, f.sortConfig, b.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": b.ariaLabel,
                      "aria-describedby": b.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: b.columns.map((U, u) => {
                          const _ = f.sortConfig?.find((D) => D.key === U.key), T = !!_, M = R.focusArea === "headers" && R.focusedHeaderIndex === u;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${M ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: M ? 0 : -1,
                              onClick: () => ae(N, U.key),
                              onKeyDown: (D) => K(D, u),
                              "aria-sort": T ? _?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: U.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${T ? `sort-indicator--${_?.direction}` : ""}`, children: [
                                  f.sortConfig && f.sortConfig.length > 0 && f.sortConfig.findIndex((D) => D.key === U.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${f.sortConfig.findIndex((D) => D.key === U.key) + 1}`,
                                      "data-priority": f.sortConfig.findIndex((D) => D.key === U.key) + 1,
                                      title: `Sort priority: ${f.sortConfig.findIndex((D) => D.key === U.key) + 1}`,
                                      children: f.sortConfig.findIndex((D) => D.key === U.key) + 1
                                    }
                                  ),
                                  T && /* @__PURE__ */ n.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${_?.direction}`,
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
                            U.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: O.map((U, u) => {
                          const _ = f.globalSelectedRowData && ne(f.globalSelectedRowData, U), T = R.focusArea === "cells" && R.focusedRowIndex === u;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${_ ? "data-row--selected" : ""} ${T ? "data-row--focused" : ""}`,
                              "aria-selected": _,
                              children: b.columns.map((M, D) => {
                                const P = M.render ? M.render(U) : U[M.key], te = R.focusArea === "cells" && R.focusedRowIndex === u && R.focusedColumnIndex === D, X = () => typeof P == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  Q(P),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: P ? "Yes" : "No" })
                                ] }) : String(P ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${te ? "data-cell--focused" : ""}`,
                                    tabIndex: te ? 0 : -1,
                                    onClick: () => {
                                      const oe = f.globalSelectedRowData && ne(f.globalSelectedRowData, U) ? null : U;
                                      $({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: oe
                                      });
                                    },
                                    onKeyDown: (J) => G(J, u, D),
                                    children: X()
                                  },
                                  M.key
                                );
                              })
                            },
                            u
                          );
                        }) })
                      ]
                    }
                  );
                })()
              },
              b.id
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
const Eh = ({
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
  const d = he(() => Gi(e), [e]), g = q((F) => {
    if (l) return;
    const j = e.map(
      (S) => S.id === F ? { ...S, direction: S.direction === "asc" ? "desc" : "asc" } : S
    );
    t(j);
  }, [e, t, l]), x = q((F) => {
    if (l) return;
    const j = e.findIndex((A) => A.id === F);
    if (j <= 0) return;
    const S = [...e];
    [S[j], S[j - 1]] = [S[j - 1], S[j]], t(ln(S));
  }, [e, t, l]), k = q((F) => {
    if (l) return;
    const j = e.findIndex((A) => A.id === F);
    if (j >= e.length - 1 || j === -1) return;
    const S = [...e];
    [S[j], S[j + 1]] = [S[j + 1], S[j]], t(ln(S));
  }, [e, t, l]), I = q((F) => {
    if (l) return;
    const j = e.filter((S) => S.id !== F);
    t(ln(j));
  }, [e, t, l]), y = q(() => {
    l || t([]);
  }, [t, l]), w = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const F = d.map((j, S) => {
      const A = j.direction === "asc" ? "ascending" : "descending";
      return `${S + 1}. ${j.label} (${A})`;
    });
    if (F.length === 1)
      return `Sorted by: ${F[0]}`;
    if (F.length === 2)
      return `Sorted by: ${F.join(" and ")}`;
    {
      const j = F.pop();
      return `Sorted by: ${F.join(", ")}, and ${j}`;
    }
  }, B = he(() => {
    const F = ["sort-description"];
    return i && F.push("sort-help"), h && F.push(h), F.join(" ");
  }, [i, h]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: w()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: w()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": c,
        "aria-describedby": B,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((F) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Ee,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => I(F.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: F.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: F.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => g(F.id),
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
                          onClick: () => x(F.id),
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
                          onClick: () => k(F.id),
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
      ye,
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
  const [r, a] = ie("cards");
  return de(() => {
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
  } = r, l = t.find((y) => y.key === a), c = l?.render ? l.render(e) : e[a || "name"] || "Untitled", h = () => s.filter((w) => !i.includes(w) && e[w]).slice(0, 3).map((w) => {
    const B = t.find((S) => S.key === w), F = B?.render ? B.render(e) : e[w];
    return `${B?.label || w}: ${F}`;
  }).join(" • "), d = () => o.length === 0 ? null : o.filter((y) => e[y] !== void 0).map((y) => {
    const w = t.find((F) => F.key === y), B = w?.render ? w.render(e) : e[y];
    if (y === "ews_score") {
      const F = Number(B);
      return `<span class="nhsuk-tag nhsuk-tag--${F >= 7 ? "high" : F >= 3 ? "medium" : "low"} adaptive-card__ews-badge">EWS: ${B}</span>`;
    }
    return `<span class="nhsuk-tag adaptive-card__badge">${B}</span>`;
  }).join(""), g = () => e.ews_score && Number(e.ews_score) >= 7 || e.priority === "high" || e.status === "urgent" ? "primary" : "default", x = d(), k = h(), I = x ? `${k}${x ? `<div class="adaptive-card__badges">${x}</div>` : ""}` : k;
  return {
    variant: g(),
    heading: String(c),
    descriptionHtml: I,
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
  orientation: d = "horizontal",
  id: g,
  disabled: x = !1,
  className: k,
  ...I
}) => {
  const y = nl(e, t), w = i !== void 0, B = i ?? 0, F = he(() => ({
    selectedIndex: B,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [B, s.length]), [j, S] = Ir(tl, F), A = ce([]), C = ce([]), E = ce([]), R = ce(null), [m, p] = ie({
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
  }), f = q((u) => {
    if (!u.current)
      return { columns: 1, rows: 0 };
    const _ = u.current, T = _.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (T.length === 0)
      return { columns: 1, rows: 0 };
    const M = _.offsetWidth, P = T[0].offsetWidth, te = Math.floor(M / P) || 1, X = Math.ceil(T.length / te);
    return { columns: te, rows: X };
  }, []), $ = q((u, _) => ({
    row: Math.floor(u / _),
    col: u % _
  }), []), ne = q((u, _, T) => u * T + _, []), ee = q((u, _, T, M) => {
    const { row: D, col: P } = $(u, M);
    let te = D, X = P;
    switch (_) {
      case "up":
        te = Math.max(0, D - 1);
        break;
      case "down":
        te = Math.min(Math.floor((T - 1) / M), D + 1);
        break;
      case "left":
        X = Math.max(0, P - 1);
        break;
      case "right":
        X = Math.min(M - 1, P + 1);
        break;
    }
    const J = ne(te, X, M);
    return Math.min(J, T - 1);
  }, [$, ne]);
  de(() => {
    m.isCardNavigationActive && m.focusedCardElementIndex >= 0 && m.cardElements.length > 0 && setTimeout(() => {
      const u = m.cardElements[m.focusedCardElementIndex];
      u && (u.element.focus(), u.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [m.isCardNavigationActive, m.focusedCardElementIndex, m.cardElements.length]), de(() => {
    const u = () => {
      if (y === "cards" && R.current) {
        const { columns: M, rows: D } = f(R);
        p((P) => ({
          ...P,
          gridColumns: M,
          gridRows: D
        }));
      }
    }, _ = setTimeout(u, 200), T = () => {
      setTimeout(u, 100);
    };
    return window.addEventListener("resize", T), () => {
      clearTimeout(_), window.removeEventListener("resize", T);
    };
  }, [y, s, f]), de(() => {
    const u = j.tabLoadingStates.length, _ = s.length;
    u !== _ && S({ type: "ADJUST_ARRAYS", payload: { newLength: _ } });
  }, [s.length, j.tabLoadingStates.length]), de(() => {
    w && i !== j.selectedIndex && S({ type: "SET_SELECTED_INDEX", payload: i });
  }, [w, i, j.selectedIndex]);
  const H = q((u) => {
    u >= 0 && u < s.length && !s[u].disabled && (S({ type: "SET_SELECTED_INDEX", payload: u }), l?.(u));
  }, [s, l]), V = q((u) => {
    console.log("Card selected:", u), S({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: u
    });
  }, []), Z = q((u) => {
    const _ = C.current[u];
    _ && (_.focus(), _.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), re = q((u) => {
    const _ = C.current[u];
    if (!_) return [];
    const T = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), M = _.querySelectorAll(T);
    return Array.from(M).map((D, P) => ({
      id: D.id || `card-${u}-element-${P}`,
      element: D,
      label: D.getAttribute("aria-label") || D.textContent?.trim() || D.getAttribute("title") || `Element ${P + 1}`,
      type: D.tagName.toLowerCase() === "button" ? "button" : D.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(D.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), ae = ce(null), v = q((u) => {
    const _ = ae.current;
    if (!_) return;
    const T = document.createElement("div");
    T.setAttribute("aria-live", "polite"), T.setAttribute("aria-atomic", "true"), T.className = "sr-only", T.textContent = u, _.appendChild(T), setTimeout(() => {
      _.contains(T) && _.removeChild(T);
    }, 1e3);
  }, []), Q = q((u) => {
    const _ = u.filter((M) => M.sortable !== !1), T = [
      { value: "", label: "Sort by..." }
    ];
    return _.forEach((M) => {
      const D = M.label || M.key;
      M.key === "name" ? T.push(
        { value: `${M.key}-asc`, label: `${D} (A-Z)` },
        { value: `${M.key}-desc`, label: `${D} (Z-A)` }
      ) : M.key === "ews_score" || M.key.includes("score") ? T.push(
        { value: `${M.key}-desc`, label: `${D} (High-Low)` },
        { value: `${M.key}-asc`, label: `${D} (Low-High)` }
      ) : M.key === "age" || M.key.includes("date") || M.key.includes("time") ? T.push(
        { value: `${M.key}-desc`, label: `${D} (Newest-Oldest)` },
        { value: `${M.key}-asc`, label: `${D} (Oldest-Newest)` }
      ) : T.push(
        { value: `${M.key}-asc`, label: `${D} (A-Z)` },
        { value: `${M.key}-desc`, label: `${D} (Z-A)` }
      );
    }), T;
  }, []), z = q((u, _) => _ ? [...u].sort((T, M) => {
    const D = T[_.key], P = M[_.key];
    if (D == null && P == null) return 0;
    if (D == null) return 1;
    if (P == null) return -1;
    const te = Number(D), X = Number(P);
    if (!isNaN(te) && !isNaN(X))
      return _.direction === "asc" ? te - X : X - te;
    const J = String(D).toLowerCase(), oe = String(P).toLowerCase(), ge = J.localeCompare(oe);
    return _.direction === "asc" ? ge : -ge;
  }) : u, []), K = q((u) => {
    if (!u) {
      p((J) => ({ ...J, cardSortConfig: null })), v("Card sorting cleared");
      return;
    }
    const [_, T] = u.split("-"), M = { key: _, direction: T };
    p((J) => ({ ...J, cardSortConfig: M }));
    const te = s[j.selectedIndex]?.columns.find((J) => J.key === _)?.label || _;
    v(`Cards sorted by ${te} in ${T === "asc" ? "ascending" : "descending"} order`);
  }, [s, j.selectedIndex, v]), G = q((u) => {
    const M = s[j.selectedIndex]?.columns.find((P) => P.key === u.key)?.label || u.key, D = u.direction === "asc" ? "ascending" : "descending";
    return `${M} (${D})`;
  }, [s, j.selectedIndex]), se = q((u, _) => {
    const T = re(u), M = T[_];
    if (M) {
      M.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const D = `Focused on ${M.label}, ${M.type} ${_ + 1} of ${T.length} within card`;
      v(D);
    }
  }, [re, v]), b = q((u) => {
    A.current[u]?.focus();
  }, []), N = q((u) => {
    const _ = E.current[u];
    if (_) {
      if (u === 0)
        _.focus();
      else {
        const M = _.querySelector("select, button");
        M ? M.focus() : _.focus();
      }
      const T = `Sort control ${u + 1} of ${E.current.filter((M) => M !== null).length}`;
      v(T);
    }
  }, [v]), W = q((u, _) => {
    const { key: T } = u, M = s[j.selectedIndex], D = M?.data.length || 0;
    if (T === "ArrowLeft" && u.shiftKey) {
      u.preventDefault(), u.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (T === "ArrowRight" && u.shiftKey) {
      u.preventDefault(), u.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!m.isCardNavigationActive) {
      switch (T) {
        case "ArrowUp":
          if (u.preventDefault(), _ === 0)
            p((J) => ({ ...J, focusArea: "tabs" })), b(j.selectedIndex);
          else {
            const J = ee(_, "up", D, m.gridColumns);
            J !== _ && (p((oe) => ({ ...oe, focusedCardIndex: J })), Z(J), v(`Moved to card ${J + 1} of ${D}`));
          }
          break;
        case "ArrowDown":
          u.preventDefault();
          const P = ee(_, "down", D, m.gridColumns);
          P !== _ && (p((J) => ({ ...J, focusedCardIndex: P })), Z(P), v(`Moved to card ${P + 1} of ${D}`));
          break;
        case "ArrowLeft":
          u.preventDefault();
          const te = ee(_, "left", D, m.gridColumns);
          te !== _ ? (p((J) => ({ ...J, focusedCardIndex: te })), Z(te), v(`Moved to card ${te + 1} of ${D}`)) : j.selectedIndex > 0 && (S({ type: "SET_SELECTED_INDEX", payload: j.selectedIndex - 1 }), p((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => b(j.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          u.preventDefault();
          const X = ee(_, "right", D, m.gridColumns);
          X !== _ ? (p((J) => ({ ...J, focusedCardIndex: X })), Z(X), v(`Moved to card ${X + 1} of ${D}`)) : j.selectedIndex < s.length - 1 && (S({ type: "SET_SELECTED_INDEX", payload: j.selectedIndex + 1 }), p((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => b(j.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (M?.data[_]) {
            u.preventDefault(), p((oe) => ({
              ...oe,
              selectedCardIndex: _
            }));
            const J = re(_);
            J.length > 0 ? (p((oe) => ({
              ...oe,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: J,
              selectedCardIndex: _
              // Ensure selection is maintained
            })), v(`Card ${_ + 1} selected and navigation activated. ${J.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : v(`Card ${_ + 1} selected.`);
          }
          break;
        case " ":
          if (M?.data[_]) {
            u.preventDefault(), p((oe) => ({
              ...oe,
              selectedCardIndex: oe.selectedCardIndex === _ ? -1 : _
            }));
            const J = m.selectedCardIndex === _;
            v(`Card ${_ + 1} ${J ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (T) {
      case "ArrowUp":
      case "ArrowLeft":
        u.preventDefault();
        const P = Math.max(0, m.focusedCardElementIndex - 1);
        p((oe) => ({ ...oe, focusedCardElementIndex: P })), se(_, P);
        break;
      case "ArrowDown":
      case "ArrowRight":
        u.preventDefault();
        const te = Math.min(m.cardElements.length - 1, m.focusedCardElementIndex + 1);
        p((oe) => ({ ...oe, focusedCardElementIndex: te })), se(_, te);
        break;
      case "Enter":
        u.preventDefault();
        const X = m.cardElements[m.focusedCardElementIndex];
        X && (X.element.click(), v(`Activated ${X.label}`));
        break;
      case " ":
        u.preventDefault();
        const J = m.cardElements[m.focusedCardElementIndex];
        if (J) {
          const oe = new MouseEvent("dblclick", { bubbles: !0 });
          J.element.dispatchEvent(oe), v(`Double-clicked ${J.label}`);
        }
        break;
      case "Escape":
        u.preventDefault(), p((oe) => ({
          ...oe,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => Z(_), 0), v("Exited card navigation, returned to card level");
        break;
      case "Home":
        u.preventDefault(), m.cardElements.length > 0 && (p((oe) => ({ ...oe, focusedCardElementIndex: 0 })), se(_, 0));
        break;
      case "End":
        if (u.preventDefault(), m.cardElements.length > 0) {
          const oe = m.cardElements.length - 1;
          p((ge) => ({ ...ge, focusedCardElementIndex: oe })), se(_, oe);
        }
        break;
    }
  }, [m, j.selectedIndex, s, V, Z, b, p, re, se, v]), L = q((u) => {
    const _ = A.current[u], T = _?.parentElement;
    if (!_ || !T) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const M = _.getBoundingClientRect(), D = T.getBoundingClientRect();
    M.left >= D.left && M.right <= D.right || (console.log("Tab not visible, scrolling into view (mobile)"), _.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), O = q((u, _) => {
    if (y !== "cards")
      return;
    const { key: T } = u;
    switch (T) {
      case "ArrowLeft":
        u.preventDefault();
        const M = _ > 0 ? _ - 1 : s.length - 1;
        H(M), p((X) => ({ ...X, focusedTabIndex: M })), A.current[M]?.focus(), L(M);
        break;
      case "ArrowRight":
        u.preventDefault();
        const D = _ < s.length - 1 ? _ + 1 : 0;
        H(D), p((X) => ({ ...X, focusedTabIndex: D })), A.current[D]?.focus(), L(D);
        break;
      case "ArrowDown":
        u.preventDefault();
        const P = s[j.selectedIndex];
        P && P.columns && P.columns.length > 0 ? (p((X) => ({
          ...X,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), N(0)) : (p((X) => ({
          ...X,
          focusArea: "cards",
          focusedCardIndex: 0
        })), Z(0));
        break;
      case "Home":
        u.preventDefault(), H(0), p((X) => ({ ...X, focusedTabIndex: 0 })), A.current[0]?.focus(), L(0);
        break;
      case "End":
        u.preventDefault();
        const te = s.length - 1;
        H(te), p((X) => ({ ...X, focusedTabIndex: te })), A.current[te]?.focus(), L(te);
        break;
      case "Enter":
      case " ":
        u.preventDefault(), H(_);
        break;
    }
  }, [s.length, H, y, Z, p, L]), U = q((u, _) => {
    if (y !== "cards")
      return;
    const { key: T } = u, M = s[j.selectedIndex];
    if (_ === 0 && !m.isSortControlsActive) {
      switch (T) {
        case "ArrowUp":
          u.preventDefault(), p((P) => ({
            ...P,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), b(j.selectedIndex);
          break;
        case "ArrowDown":
          u.preventDefault(), M?.data && M.data.length > 0 && (p((P) => ({
            ...P,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), Z(0));
          break;
        case "Enter":
        case " ":
          u.preventDefault(), p((P) => ({
            ...P,
            isSortControlsActive: !0,
            focusedSortControlIndex: 1
            // Start with the select dropdown
          })), N(1), v("Entered sort controls navigation mode. Use arrow keys to navigate between controls.");
          break;
        case "Escape":
          u.preventDefault(), p((P) => ({
            ...P,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), b(j.selectedIndex);
          break;
      }
      return;
    }
    if (m.isSortControlsActive) {
      const P = E.current.filter((te) => te !== null).length;
      switch (T) {
        case "ArrowLeft":
          u.preventDefault();
          const te = m.focusedSortControlIndex > 1 ? m.focusedSortControlIndex - 1 : P - 1;
          p((J) => ({ ...J, focusedSortControlIndex: te })), N(te);
          break;
        case "ArrowRight":
          u.preventDefault();
          const X = m.focusedSortControlIndex < P - 1 ? m.focusedSortControlIndex + 1 : 1;
          p((J) => ({ ...J, focusedSortControlIndex: X })), N(X);
          break;
        case "ArrowUp":
          u.preventDefault(), p((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), N(0);
          break;
        case "ArrowDown":
          u.preventDefault(), M?.data && M.data.length > 0 && (p((J) => ({
            ...J,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), Z(0));
          break;
        case "Escape":
          u.preventDefault(), p((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), b(j.selectedIndex);
          break;
      }
    }
  }, [y, s, j.selectedIndex, m.isSortControlsActive, m.focusedSortControlIndex, N, b, Z, p, v]);
  if (y === "cards") {
    const u = s[j.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${k || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": c,
          "aria-describedby": `${h || ""} ${g ? `${g}-navigation-help` : ""}`.trim(),
          "aria-orientation": d,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((_, T) => {
            const M = T === j.selectedIndex, D = _.disabled || x;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${_.id}`,
                "aria-controls": `panel-${_.id}`,
                "aria-selected": M,
                "aria-disabled": D,
                tabIndex: M ? 0 : -1,
                ref: (P) => {
                  A.current[T] = P;
                },
                onClick: () => H(T),
                onKeyDown: (P) => O(P, T),
                disabled: D,
                className: `
				  aria-tabs-datagrid__tab
				  ${M ? "aria-tabs-datagrid__tab--selected" : ""}
				  ${D ? "aria-tabs-datagrid__tab--disabled" : ""}
				`.trim(),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: _.label }),
                  j.tabLoadingStates[T] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  j.tabErrors[T] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              _.id
            );
          })
        }
      ),
      u && u.columns && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: "aria-tabs-datagrid-adaptive__sort-controls",
          role: "region",
          "aria-label": "Sort controls",
          tabIndex: m.focusArea === "sort-controls" ? 0 : -1,
          ref: (_) => {
            E.current[0] = _;
          },
          onKeyDown: (_) => U(_, 0),
          children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
              /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${u.id}`, className: "sort-label", children: "Sort cards by" }),
              /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: (_) => {
                    E.current[1] = _;
                  },
                  onKeyDown: (_) => {
                    m.isSortControlsActive && m.focusedSortControlIndex === 1 && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Escape"].includes(_.key) && U(_, 1);
                  },
                  children: /* @__PURE__ */ n.jsx(
                    Mr,
                    {
                      id: `card-sort-${u.id}`,
                      name: `card-sort-${u.id}`,
                      value: m.cardSortConfig ? `${m.cardSortConfig.key}-${m.cardSortConfig.direction}` : "",
                      onChange: (_) => K(_.target.value),
                      className: "sort-select",
                      children: Q(u.columns).map((_) => /* @__PURE__ */ n.jsx("option", { value: _.value, children: _.label }, _.value))
                    }
                  )
                }
              )
            ] }),
            m.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
              /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                "Sorted by ",
                G(m.cardSortConfig)
              ] }),
              /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: (_) => {
                    E.current[2] = _;
                  },
                  onKeyDown: (_) => {
                    m.isSortControlsActive && m.focusedSortControlIndex === 2 && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Escape"].includes(_.key) && U(_, 2);
                  },
                  children: /* @__PURE__ */ n.jsx(
                    ye,
                    {
                      variant: "secondary",
                      size: "small",
                      onClick: () => K(""),
                      "aria-label": "Clear card sorting",
                      className: "sort-clear-button",
                      children: "Clear"
                    }
                  )
                }
              )
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: R,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${u?.label || "Data"} cards in ${m.gridRows} rows and ${m.gridColumns} columns`,
          "aria-rowcount": m.gridRows,
          "aria-colcount": m.gridColumns,
          id: `panel-${u?.id}`,
          "aria-labelledby": `tab-${u?.id}`,
          children: z(u?.data || [], m.cardSortConfig).map((_, T) => {
            const M = m.selectedCardIndex === T, D = m.focusedCardIndex === T && m.focusArea === "cards", P = m.focusedCardIndex === T && m.focusArea === "card" && m.isCardNavigationActive, te = T === 0 && m.focusArea !== "cards", X = D || te, J = $(T, m.gridColumns);
            if (r.cardTemplate) {
              const ue = r.cardTemplate(_, u.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: (me) => {
                    C.current[T] = me;
                  },
                  className: `
					aria-tabs-datagrid-adaptive__card-wrapper
					${M ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : ""}
					${D ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : ""}
					${P ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""}
				  `.trim(),
                  role: "gridcell",
                  "aria-rowindex": J.row + 1,
                  "aria-colindex": J.col + 1,
                  "aria-selected": M,
                  "aria-expanded": P,
                  "aria-description": P ? `Card navigation active. ${m.cardElements.length} interactive elements available.` : void 0,
                  tabIndex: X ? 0 : -1,
                  onClick: () => {
                    p((me) => ({
                      ...me,
                      selectedCardIndex: me.selectedCardIndex === T ? -1 : T
                    })), V(_);
                  },
                  onKeyDown: (me) => W(me, T),
                  onFocus: () => {
                    p((me) => me.focusedCardIndex !== T || me.focusArea !== "cards" ? {
                      ...me,
                      focusedCardIndex: T,
                      focusArea: "cards"
                    } : me);
                  },
                  children: ue
                },
                `card-${T}`
              );
            }
            const oe = rl(_, u.columns, r), ge = `
			  ${oe.className}
			  ${M ? "aria-tabs-datagrid-adaptive__card--selected" : ""}
			  ${D ? "aria-tabs-datagrid-adaptive__card--focused" : ""}
			  ${P ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""}
			`.trim();
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                className: `
				  aria-tabs-datagrid-adaptive__card-wrapper
				  ${P ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""}
				`.trim(),
                role: "gridcell",
                "aria-rowindex": J.row + 1,
                "aria-colindex": J.col + 1,
                children: /* @__PURE__ */ n.jsx(
                  ea,
                  {
                    ...oe,
                    ref: (ue) => {
                      C.current[T] = ue;
                    },
                    className: ge,
                    "aria-selected": M,
                    "aria-expanded": P,
                    "aria-label": `${oe["aria-label"] || oe.heading}. ${P ? `Card navigation active with ${m.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                    tabIndex: X ? 0 : -1,
                    onClick: () => {
                      p((ue) => ({
                        ...ue,
                        selectedCardIndex: ue.selectedCardIndex === T ? -1 : T
                      })), V(_);
                    },
                    onKeyDown: (ue) => W(ue, T),
                    onFocus: () => {
                      m.isCardNavigationActive || p((ue) => ue.focusedCardIndex !== T || ue.focusArea !== "cards" ? {
                        ...ue,
                        focusedCardIndex: T,
                        focusArea: "cards",
                        // Reset card navigation state when switching cards
                        focusedCardElementIndex: 0,
                        cardElements: []
                      } : ue);
                    }
                  }
                )
              },
              `card-${T}`
            );
          })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: ae,
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
  return y === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${k || ""}`, children: /* @__PURE__ */ n.jsx(
    hn,
    {
      tabPanels: s,
      dataConfig: o,
      ariaLabel: c,
      ariaDescription: h,
      orientation: d,
      id: g,
      disabled: x,
      selectedIndex: i,
      onTabChange: l,
      className: "aria-tabs-datagrid-adaptive__table--hybrid",
      ...I
    }
  ) }) : /* @__PURE__ */ n.jsx(
    hn,
    {
      tabPanels: s,
      dataConfig: o,
      ariaLabel: c,
      ariaDescription: h,
      orientation: d,
      id: g,
      disabled: x,
      selectedIndex: i,
      onTabChange: l,
      ...I
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
  const i = e.nhs_number || e.nhsNumber || e.patient_id, l = e.name || e.patient_name || `${e.first_name || ""} ${e.last_name || ""}`.trim(), c = e.dob || e.date_of_birth || e.birth_date, h = e.ward || e.location || e.current_ward, d = e.condition || e.diagnosis || e.primary_condition, g = e.alert_level || e.ews_score || e.priority_level;
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
            g && /* @__PURE__ */ n.jsxs(
              Ee,
              {
                color: cl(ta(g)),
                className: "healthcare-card__alert",
                children: [
                  "EWS: ",
                  g
                ]
              }
            ),
            s === "high" && /* @__PURE__ */ n.jsx(
              Ee,
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
          d && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Condition" }),
            /* @__PURE__ */ n.jsx("dd", { children: d })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            ye,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (x) => {
                x.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            ye,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (x) => {
                x.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            ye,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (x) => {
                x.stopPropagation(), a?.("view-full", e);
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
              Ee,
              {
                color: dl(a),
                className: "healthcare-card__status",
                children: a.charAt(0).toUpperCase() + a.slice(1)
              }
            ),
            h && /* @__PURE__ */ n.jsxs(
              Ee,
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
            ye,
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
            ye,
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
  const s = e.medication || e.drug_name || e.name, o = e.dose || e.dosage || e.amount, i = e.frequency || e.schedule, l = e.route || e.administration_route, c = e.next_due || e.next_administration, h = e.prescriber || e.doctor, d = e.allergies || e.contraindications;
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
              Ee,
              {
                color: "blue",
                className: "healthcare-card__route",
                children: l
              }
            ),
            d && /* @__PURE__ */ n.jsx(
              Ee,
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
            ye,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (g) => {
                g.stopPropagation(), r?.("view-history", e);
              },
              children: "History"
            }
          ),
          /* @__PURE__ */ n.jsx(
            ye,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (g) => {
                g.stopPropagation(), r?.("administer", e);
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
  const s = e.temperature || e.temp, o = e.blood_pressure || e.bp || `${e.systolic}/${e.diastolic}`, i = e.heart_rate || e.pulse || e.hr, l = e.respiratory_rate || e.resp_rate || e.rr, c = e.oxygen_saturation || e.spo2 || e.o2_sat, h = e.ews_score || e.news_score || e.alert_score, d = e.recorded_time || e.timestamp || e.time;
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
            ye,
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
            ye,
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
function ta(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function ll(e) {
  return ta(e);
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
const na = (e) => {
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
  booleanRenderer: (e) => na(e),
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
  booleanRenderer: (e) => na(e),
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
}, ra = [
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
    data: ra,
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
  const [e, t] = ie("healthcare"), r = he(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: el,
      tabPanels: wl(),
      data: ra
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
        ye,
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
}, Hh = Sl, aa = (e) => /* @__PURE__ */ n.jsx(Lr, { ...e }), Ph = ({
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
  search: d,
  account: g,
  organisation: x,
  logo: k,
  className: I,
  ...y
}) => {
  const w = {
    service: c,
    navigation: h,
    search: d,
    account: g,
    organisation: x,
    logo: k,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Qr, { ...o }),
    /* @__PURE__ */ n.jsx(Pr, { ...w }),
    /* @__PURE__ */ n.jsx(aa, { className: I, ...y, children: /* @__PURE__ */ n.jsx(Er, { size: s, children: /* @__PURE__ */ n.jsx(pt, { children: /* @__PURE__ */ n.jsxs(Pn, { width: a, children: [
      t && /* @__PURE__ */ n.jsx($e, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(zr, { ...l })
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
  serviceHref: d,
  logo: g,
  className: x,
  ...k
}) => {
  const I = {
    service: {
      text: h,
      href: d
    },
    logo: g,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Qr, { ...o }),
    /* @__PURE__ */ n.jsx(Pr, { ...I }),
    /* @__PURE__ */ n.jsxs(aa, { className: x, ...k, children: [
      c && /* @__PURE__ */ n.jsx(ls, { ...c }),
      /* @__PURE__ */ n.jsx(Er, { size: s, children: /* @__PURE__ */ n.jsx(pt, { children: /* @__PURE__ */ n.jsxs(Pn, { width: a, children: [
        t && /* @__PURE__ */ n.jsx($e, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(zr, { ...l })
  ] });
}, Cl = "150ms", jl = "300ms", Nl = "500ms", Tl = "cubic-bezier(0.4, 0, 1, 1)", Dl = "cubic-bezier(0, 0, 0.2, 1)", Bl = "cubic-bezier(0.4, 0, 0.2, 1)", Fl = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Il = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Rl = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ml = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ll = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", El = "1px", $l = "2px", Al = "4px", Hl = "4px", Pl = "4px", zl = "2px", Wl = "1px", Ol = "0px", Ul = "4px", Gl = "8px", Yl = "12px", sa = "#d8dde0", oa = "#4c6272", ia = "#d8dde0", la = "#aeb7bd", ca = "#d5281b", da = "#005eb8", ua = "#ffffff", ha = "#212b32", fa = "#007f3b", ma = "#330072", pa = "#7c2855", ga = "#d5281b", ba = "#ffeb3b", xa = "#fff9c4", ya = "#ffb81c", _a = "#ed8b00", ka = "#00a499", va = "#ae2573", wa = "#4c6272", Sa = "#768692", Ca = "#aeb7bd", ja = "#d8dde0", Na = "#f0f4f5", Vl = "#212b32", ql = "#4c6272", Kl = "#ffffff", Zl = "#212b32", Jl = "#005eb8", Xl = "#7c2855", Ql = "#003087", ec = "#330072", tc = "#ffeb3b", nc = "#212b32", rc = "#d8dde0", ac = "#ffffff33", sc = "#d5281b", oc = "#4c6272", ic = "#ffffff", lc = "#007f3b", cc = "#ffffff", dc = "#006530", uc = "#004021", hc = "#004021", fc = "#00000000", mc = "#ffffff", pc = "#005eb8", gc = "#005eb8", bc = "#d9e5f2", xc = "#c7daf0", yc = "#005eb8", _c = "#ffffff", kc = "#212b32", vc = "#d9dde0", wc = "#b3bcc2", Sc = "#b3bcc2", Cc = "#d5281b", jc = "#aa2016", Nc = "#6a140e", Tc = "#6a140e", Dc = "#005eb8", Bc = "#004b93", Fc = "#002f5c", Ic = "#002f5c", Rc = "8px", Mc = "16px", Lc = "12px", Ec = "16px", $c = "4px", Ac = "40px", Hc = "4px", Pc = "40px", zc = "12px", Wc = "16px", Oc = "32px", Uc = "16px", Gc = "20px", Yc = "28px", Vc = "9px", qc = "2px", Kc = "16px", Zc = "24px", Jc = "8px", Xc = "24px", Qc = "16px", ed = "4px", td = "4px", nd = "4px", rd = "8px", ad = "4px", sd = "16px", od = "#007f3b", id = "#006530", ld = "#004021", cd = "#d8dde0", dd = "#ffffff", ud = "#768692", hd = "#00000000", fd = "#ffeb3b", md = "#00000000", pd = "#ffffff", gd = "#d9e5f2", bd = "#c7daf0", xd = "#005eb8", yd = "#005eb8", Ta = "8px", Da = "16px", Ba = "12px", Fa = "16px", _d = "2px", kd = "4px", vd = "4px", wd = "600", Sd = "#ffffff", Cd = "#d8dde0", jd = "#aeb7bd", Nd = "#f0f4f5", Td = "#212b32", Dd = "#212b32", Bd = "#005eb8", Ia = "16px", Ra = "32px", Ma = "16px", Fd = "1px", Id = "4px", Rd = "none", Md = "0 2px 4px rgba(0, 0, 0, 0.1)", Ld = "#ffffff", Ed = "#ffffff", $d = "#d8dde0", Ad = "#ffffff", Hd = "#4c6272", Pd = "#ffeb3b", zd = "#d5281b", Wd = "#aeb7bd", Od = "#212b32", Ud = "#4c6272", Gd = "#768692", Yd = "#212b32", Vd = "#ffffff", qd = "600", Kd = "#d5281b", Zd = "600", Jd = "#4c6272", La = "4px", Ea = "40px", $a = "40px", Aa = "12px", Xd = "2px", Qd = "4px", eu = "0px", tu = "16px", nu = "18px", ru = "24px", au = "32px", su = "34px", ou = "32px", iu = "40px", lu = "48px", cu = "5.4ex", du = "7.2ex", uu = "9ex", hu = "10.8ex", fu = "20ex", mu = "38ex", pu = "56ex", gu = "44px", bu = "40px", xu = "1020px", yu = "100%", _u = "50%", ku = "33.333%", vu = "25%", wu = "20%", Su = "320px", Cu = "641px", ju = "1025px", Nu = "1280px", Tu = "960px", Du = "32px", Bu = "16px", Fu = "#d5281b", Iu = "#d5281b", Ru = "#ffffff", Mu = "#007f3b", Lu = "#007f3b", Eu = "#ffffff", $u = "#ffeb3b", Au = "#ffeb3b", Hu = "#212b32", Pu = "#005eb8", zu = "#005eb8", Wu = "#ffffff", Ou = "#d8dde0", Uu = "#aeb7bd", Gu = "#768692", Yu = "0 4px 0 #004021", Vu = "0 4px 0 #005eb8", qu = "0 4px 0 #6a140e", Ku = "0 4px 0 #ffeb3b", Zu = "none", Ju = "0 2px 4px rgba(0, 0, 0, 0.1)", Xu = "4px", Qu = "0px", eh = "solid", th = "0 0 0 3px #ffeb3b", nh = "0 0 0 3px #ffeb3b", rh = "none", ah = "0 1px 3px rgba(0, 0, 0, 0.12)", sh = "0 2px 6px rgba(0, 0, 0, 0.16)", oh = "0 4px 12px rgba(0, 0, 0, 0.20)", Ha = "0", Pa = "4px", za = "8px", Wa = "16px", Oa = "24px", Ua = "32px", Ga = "40px", Ya = "48px", Va = "56px", qa = "64px", mn = "0", pn = "0", gn = "4px", bn = "4px", xn = "8px", yn = "8px", _n = "8px", kn = "16px", vn = "16px", wn = "24px", Sn = "24px", Cn = "32px", jn = "32px", Nn = "40px", Tn = "40px", Dn = "48px", Bn = "48px", Fn = "56px", In = "56px", Rn = "64px", wt = "Frutiger W01", St = "Arial, Helvetica, sans-serif", Ct = "sans-serif", jt = "400", Nt = "600", Tt = "400", Dt = "12px", Bt = "14px", Ft = "12pt", It = "14px", Rt = "16px", Mt = "12pt", Lt = "16px", Et = "19px", $t = "13pt", At = "19px", Ht = "22px", Pt = "15pt", zt = "22px", Wt = "26px", Ot = "17pt", Ut = "27px", Gt = "36px", Yt = "20pt", Vt = "33px", qt = "48px", Kt = "24pt", Mn = "16px", Ln = "24px", Se = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ce = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, je = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ne = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Te = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, De = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Be = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Fe = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ie = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Re = {
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
  BorderColorCard: ia,
  BorderColorCardHover: la,
  BorderColorDefault: sa,
  BorderColorError: ca,
  BorderColorForm: oa,
  BorderRadiusLarge: Yl,
  BorderRadiusMedium: Gl,
  BorderRadiusNone: Ol,
  BorderRadiusSmall: Ul,
  BorderWidthCardBottom: Hl,
  BorderWidthDefault: El,
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
  ButtonSpacingPaddingHorizontalDesktop: Fa,
  ButtonSpacingPaddingHorizontalMobile: Da,
  ButtonSpacingPaddingVerticalDesktop: Ba,
  ButtonSpacingPaddingVerticalMobile: Ta,
  ButtonTypographyWeight: wd,
  CardBackgroundDefault: Sd,
  CardBorderBottom: Nd,
  CardBorderDefault: Cd,
  CardBorderHover: jd,
  CardBorderWidthBottom: Id,
  CardBorderWidthDefault: Fd,
  CardShadowDefault: Rd,
  CardShadowHover: Md,
  CardSpacingHeadingMargin: Ma,
  CardSpacingPaddingDesktop: Ra,
  CardSpacingPaddingMobile: Ia,
  CardTextDescription: Dd,
  CardTextHeading: Td,
  CardTextLink: Bd,
  ColorBorderDefault: rc,
  ColorBorderSecondary: ac,
  ColorButtonLoginActive: Fc,
  ColorButtonLoginBackground: Dc,
  ColorButtonLoginHover: Bc,
  ColorButtonLoginShadow: Ic,
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
  ColorGrey1: wa,
  ColorGrey2: Sa,
  ColorGrey3: Ca,
  ColorGrey4: ja,
  ColorGrey5: Na,
  ColorLinkActive: Ql,
  ColorLinkDefault: Jl,
  ColorLinkHover: Xl,
  ColorLinkVisited: ec,
  ColorPrimaryBlack: ha,
  ColorPrimaryBlue: da,
  ColorPrimaryDarkPink: pa,
  ColorPrimaryGreen: fa,
  ColorPrimaryPurple: ma,
  ColorPrimaryRed: ga,
  ColorPrimaryWhite: ua,
  ColorPrimaryYellow: ba,
  ColorSecondaryAquaGreen: ka,
  ColorSecondaryOrange: _a,
  ColorSecondaryPaleYellow: xa,
  ColorSecondaryPink: va,
  ColorSecondaryWarmYellow: ya,
  ColorTextPrimary: Vl,
  ColorTextPrint: Zl,
  ColorTextReverse: Kl,
  ColorTextSecondary: ql,
  ComponentBlur: td,
  ComponentBreadcrumbChevronMarginLeft: Vc,
  ComponentBreadcrumbChevronMarginRight: qc,
  ComponentBreadcrumbPaddingTopDesktop: Zc,
  ComponentBreadcrumbPaddingTopMobile: Kc,
  ComponentButtonPaddingDesktopHorizontal: Ec,
  ComponentButtonPaddingDesktopVertical: Lc,
  ComponentButtonPaddingMobileHorizontal: Mc,
  ComponentButtonPaddingMobileVertical: Rc,
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
  FontLineHeightBase: Ln,
  FontSize14Mobile: Dt,
  FontSize14Print: Ft,
  FontSize14Tablet: Bt,
  FontSize16Mobile: It,
  FontSize16Print: Mt,
  FontSize16Tablet: Rt,
  FontSize19Mobile: Lt,
  FontSize19Print: $t,
  FontSize19Tablet: Et,
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
  FormInputBackgroundDefault: Ld,
  FormInputBackgroundDisabled: $d,
  FormInputBackgroundError: Ad,
  FormInputBackgroundFocus: Ed,
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
  FormSpacingCheckboxLabelPadding: Aa,
  FormSpacingCheckboxSize: $a,
  FormSpacingInputMinHeight: Ea,
  FormSpacingInputPadding: La,
  GridGutter: Du,
  GridGutterHalf: Bu,
  GridPageWidth: Tu,
  HeadingsNhsukHeadingL: Ce,
  HeadingsNhsukHeadingM: je,
  HeadingsNhsukHeadingS: Ne,
  HeadingsNhsukHeadingXl: Se,
  HeadingsNhsukHeadingXs: Te,
  LayoutColumnActions: wu,
  LayoutColumnFull: yu,
  LayoutColumnHalf: _u,
  LayoutColumnQuarter: vu,
  LayoutColumnThird: ku,
  LayoutContainerMaxWidth: xu,
  ParagraphsBody: De,
  ParagraphsBodyLarge: Be,
  ParagraphsBodySmall: Fe,
  ParagraphsLedeText: Ie,
  ParagraphsLedeTextSmall: Re,
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
  Spacing0: Ha,
  Spacing1: Pa,
  Spacing2: za,
  Spacing3: Wa,
  Spacing4: Oa,
  Spacing5: Ua,
  Spacing6: Ga,
  Spacing7: Ya,
  Spacing8: Va,
  Spacing9: qa,
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
  SpacingResponsive9Mobile: In,
  SpacingResponsive9Tablet: Rn,
  StateDisabledBackground: Ou,
  StateDisabledBorder: Uu,
  StateDisabledText: Gu,
  StateErrorBackground: Fu,
  StateErrorBorder: Iu,
  StateErrorText: Ru,
  StateInfoBackground: Pu,
  StateInfoBorder: zu,
  StateInfoText: Wu,
  StateSuccessBackground: Mu,
  StateSuccessBorder: Lu,
  StateSuccessText: Eu,
  StateWarningBackground: $u,
  StateWarningBorder: Au,
  StateWarningText: Hu,
  TransitionButtonDefault: Il,
  TransitionButtonShadow: Rl,
  TransitionCardHover: Ll,
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
), Uh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
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
), Gh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
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
), Yh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), Vh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), qh = ({
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
), Kh = ({
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
), Zh = ({
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
), Jh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ie.fontFamily,
      fontWeight: Ie.fontWeight,
      fontSize: Ie.fontSize.mobile,
      lineHeight: Ie.lineHeight,
      marginTop: Ie.marginTop,
      marginBottom: Ie.marginBottom.mobile,
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
      fontFamily: Re.fontFamily,
      fontWeight: Re.fontWeight,
      fontSize: Re.fontSize.mobile,
      lineHeight: Re.lineHeight,
      marginTop: Re.marginTop,
      marginBottom: Re.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Qh = () => he(() => ih, []), ef = () => he(() => ({
  // Border colors
  BorderColorDefault: sa,
  BorderColorForm: oa,
  BorderColorCard: ia,
  BorderColorCardHover: la,
  BorderColorError: ca,
  // Primary colors
  ColorPrimaryBlue: da,
  ColorPrimaryWhite: ua,
  ColorPrimaryBlack: ha,
  ColorPrimaryGreen: fa,
  ColorPrimaryPurple: ma,
  ColorPrimaryDarkPink: pa,
  ColorPrimaryRed: ga,
  ColorPrimaryYellow: ba,
  // Secondary colors
  ColorSecondaryPaleYellow: xa,
  ColorSecondaryWarmYellow: ya,
  ColorSecondaryOrange: _a,
  ColorSecondaryAquaGreen: ka,
  ColorSecondaryPink: va,
  // Grey scale
  ColorGrey1: wa,
  ColorGrey2: Sa,
  ColorGrey3: Ca,
  ColorGrey4: ja,
  ColorGrey5: Na
}), []), tf = () => he(() => ({
  Spacing0: Ha,
  Spacing1: Pa,
  Spacing2: za,
  Spacing3: Wa,
  Spacing4: Oa,
  Spacing5: Ua,
  Spacing6: Ga,
  Spacing7: Ya,
  Spacing8: Va,
  Spacing9: qa
}), []), nf = () => he(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Dt,
    Size16: It,
    Size19: Lt,
    Size22: At,
    Size26: zt,
    Size36: Ut,
    Size48: Vt
  },
  Tablet: {
    Size14: Bt,
    Size16: Rt,
    Size19: Et,
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
    LineHeight: Ln
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
  FontSize16Mobile: It,
  FontSize16Tablet: Rt,
  FontSize16Print: Mt,
  FontSize19Mobile: Lt,
  FontSize19Tablet: Et,
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
  FontLineHeightBase: Ln
}), []), rf = () => he(() => ({
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
    Size9: In
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
    Size9: Rn
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
  SpacingResponsive9Mobile: In,
  SpacingResponsive9Tablet: Rn
}), []), af = () => he(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Ta,
  ButtonSpacingPaddingHorizontalMobile: Da,
  ButtonSpacingPaddingVerticalDesktop: Ba,
  ButtonSpacingPaddingHorizontalDesktop: Fa,
  // Card spacing	
  CardSpacingPaddingMobile: Ia,
  CardSpacingPaddingDesktop: Ra,
  CardSpacingHeadingMargin: Ma,
  // Form spacing
  FormSpacingInputPadding: La,
  FormSpacingInputMinHeight: Ea,
  FormSpacingCheckboxSize: $a,
  FormSpacingCheckboxLabelPadding: Aa
}), []), sf = () => he(() => ({
  xl: Se,
  l: Ce,
  m: je,
  s: Ne,
  xs: Te
}), []), of = () => he(() => ({
  body: De,
  bodyLarge: Be,
  bodySmall: Fe,
  ledeText: Ie,
  ledeTextSmall: Re
}), []), lf = () => he(() => ({
  headings: {
    xl: Se,
    l: Ce,
    m: je,
    s: Ne,
    xs: Te
  },
  paragraphs: {
    body: De,
    bodyLarge: Be,
    bodySmall: Fe,
    ledeText: Ie,
    ledeTextSmall: Re
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
        size16: It,
        size19: Lt,
        size22: At,
        size26: zt,
        size36: Ut,
        size48: Vt
      },
      tablet: {
        size14: Bt,
        size16: Rt,
        size19: Et,
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
}), []), Ka = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, be = {
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
  const { fontPath: t, fontWeights: r } = { ...Ka, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${be.normal.eot}?#iefix") format("eot"),
       url("${t}${be.normal.woff2}") format("woff2"),
       url("${t}${be.normal.woff}") format("woff"),
       url("${t}${be.normal.ttf}") format("truetype");
  src: url("${t}${be.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${be.bold.eot}?#iefix") format("eot"),
       url("${t}${be.bold.woff2}") format("woff2"),
       url("${t}${be.bold.woff}") format("woff"),
       url("${t}${be.bold.ttf}") format("truetype");
  src: url("${t}${be.bold.eot}");
}`), a.join(`
`);
}
function df(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...Ka, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${be.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${be.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${be.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${be.bold.woff}`, as: "font", type: "font/woff" }
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
  En as Account,
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
  ls as BackLink,
  ia as BorderColorCard,
  la as BorderColorCardHover,
  sa as BorderColorDefault,
  ca as BorderColorError,
  oa as BorderColorForm,
  Yl as BorderRadiusLarge,
  Gl as BorderRadiusMedium,
  Ol as BorderRadiusNone,
  Ul as BorderRadiusSmall,
  Hl as BorderWidthCardBottom,
  El as BorderWidthDefault,
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
  ye as Button,
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
  Fa as ButtonSpacingPaddingHorizontalDesktop,
  Da as ButtonSpacingPaddingHorizontalMobile,
  Ba as ButtonSpacingPaddingVerticalDesktop,
  Ta as ButtonSpacingPaddingVerticalMobile,
  wd as ButtonTypographyWeight,
  ea as Card,
  Sd as CardBackgroundDefault,
  Nd as CardBorderBottom,
  Cd as CardBorderDefault,
  jd as CardBorderHover,
  Id as CardBorderWidthBottom,
  Fd as CardBorderWidthDefault,
  jh as CardGroup,
  Nh as CardGroupItem,
  Rd as CardShadowDefault,
  Md as CardShadowHover,
  Ma as CardSpacingHeadingMargin,
  Ra as CardSpacingPaddingDesktop,
  Ia as CardSpacingPaddingMobile,
  Dd as CardTextDescription,
  Td as CardTextHeading,
  Bd as CardTextLink,
  Th as CareCard,
  dh as CharacterCount,
  cs as Checkbox,
  ds as Checkboxes,
  rc as ColorBorderDefault,
  ac as ColorBorderSecondary,
  Fc as ColorButtonLoginActive,
  Dc as ColorButtonLoginBackground,
  Bc as ColorButtonLoginHover,
  Ic as ColorButtonLoginShadow,
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
  wa as ColorGrey1,
  Sa as ColorGrey2,
  Ca as ColorGrey3,
  ja as ColorGrey4,
  Na as ColorGrey5,
  Ql as ColorLinkActive,
  Jl as ColorLinkDefault,
  Xl as ColorLinkHover,
  ec as ColorLinkVisited,
  ha as ColorPrimaryBlack,
  da as ColorPrimaryBlue,
  pa as ColorPrimaryDarkPink,
  fa as ColorPrimaryGreen,
  ma as ColorPrimaryPurple,
  ga as ColorPrimaryRed,
  ua as ColorPrimaryWhite,
  ba as ColorPrimaryYellow,
  ka as ColorSecondaryAquaGreen,
  _a as ColorSecondaryOrange,
  xa as ColorSecondaryPaleYellow,
  va as ColorSecondaryPink,
  ya as ColorSecondaryWarmYellow,
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
  Ec as ComponentButtonPaddingDesktopHorizontal,
  Lc as ComponentButtonPaddingDesktopVertical,
  Mc as ComponentButtonPaddingMobileHorizontal,
  Rc as ComponentButtonPaddingMobileVertical,
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
  Lr as Container,
  Ch as ContentsList,
  Ka as DEFAULT_FONT_CONFIG,
  Lh as DashboardSummaryGrid,
  xh as DateInput,
  Ei as Details,
  $i as DoDontList,
  oh as ElevationHigh,
  ah as ElevationLow,
  sh as ElevationMedium,
  rh as ElevationNone,
  nr as ErrorMessage,
  bh as ErrorSummary,
  Ai as Expander,
  be as FRUTIGER_FONT_FILES,
  Hn as Fieldset,
  Qu as FocusOutlineOffset,
  eh as FocusOutlineStyle,
  Xu as FocusOutlineWidth,
  nh as FocusShadowButton,
  th as FocusShadowInput,
  wt as FontFamilyBase,
  St as FontFamilyFallback,
  Ct as FontFamilyPrint,
  Ln as FontLineHeightBase,
  Dt as FontSize14Mobile,
  Ft as FontSize14Print,
  Bt as FontSize14Tablet,
  It as FontSize16Mobile,
  Mt as FontSize16Print,
  Rt as FontSize16Tablet,
  Lt as FontSize19Mobile,
  $t as FontSize19Print,
  Et as FontSize19Tablet,
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
  zr as Footer,
  eu as FormBorderRadius,
  Xd as FormBorderWidthDefault,
  Qd as FormBorderWidthError,
  Kd as FormErrorTextDefault,
  Zd as FormErrorTypographyWeight,
  Jd as FormHintTextDefault,
  Ld as FormInputBackgroundDefault,
  $d as FormInputBackgroundDisabled,
  Ad as FormInputBackgroundError,
  Ed as FormInputBackgroundFocus,
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
  Aa as FormSpacingCheckboxLabelPadding,
  $a as FormSpacingCheckboxSize,
  Ea as FormSpacingInputMinHeight,
  La as FormSpacingInputPadding,
  wh as GanttChart,
  ms as Grid,
  Du as GridGutter,
  Bu as GridGutterHalf,
  Tu as GridPageWidth,
  Pr as Header,
  kh as HeaderSSR,
  Hr as HeaderSearch,
  vh as HeaderStatic,
  $e as Heading,
  Ce as HeadingsNhsukHeadingL,
  je as HeadingsNhsukHeadingM,
  Ne as HeadingsNhsukHeadingS,
  Se as HeadingsNhsukHeadingXl,
  Te as HeadingsNhsukHeadingXs,
  ks as Hero,
  Rr as Hint,
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
  Li as Panel,
  De as ParagraphsBody,
  Be as ParagraphsBodyLarge,
  Fe as ParagraphsBodySmall,
  Ie as ParagraphsLedeText,
  Re as ParagraphsLedeTextSmall,
  al as PatientCard,
  uh as Radios,
  Ah as ResponsiveDataGrid,
  Hh as ResponsiveDataGridDemo,
  pt as Row,
  Mr as Select,
  hs as SelectOption,
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
  Qr as SkipLink,
  Eh as SortStatusControl,
  Ha as Spacing0,
  Pa as Spacing1,
  za as Spacing2,
  Wa as Spacing3,
  Oa as Spacing4,
  Ua as Spacing5,
  Ga as Spacing6,
  Ya as Spacing7,
  Va as Spacing8,
  qa as Spacing9,
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
  In as SpacingResponsive9Mobile,
  Rn as SpacingResponsive9Tablet,
  hh as SpacingUtilities,
  Ou as StateDisabledBackground,
  Uu as StateDisabledBorder,
  Gu as StateDisabledText,
  Fu as StateErrorBackground,
  Iu as StateErrorBorder,
  Ru as StateErrorText,
  Pu as StateInfoBackground,
  zu as StateInfoBorder,
  Wu as StateInfoText,
  Mu as StateSuccessBackground,
  Lu as StateSuccessBorder,
  Eu as StateSuccessText,
  $u as StateWarningBackground,
  Au as StateWarningBorder,
  Hu as StateWarningText,
  zi as SummaryCard,
  Bh as SummaryList,
  Fh as Table,
  Ih as Tabs,
  Ee as Tag,
  Hi as TaskList,
  us as Textarea,
  zh as TransactionalPageTemplate,
  Il as TransitionButtonDefault,
  Rl as TransitionButtonShadow,
  Ll as TransitionCardHover,
  Ml as TransitionInputFocus,
  il as VitalsCard,
  gh as WIDTH_FRACTIONS,
  Rh as WarningCallout,
  aa as WidthContainer,
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
