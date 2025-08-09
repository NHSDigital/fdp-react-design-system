import * as Ha from "react";
import $e, { useState as re, useEffect as le, useCallback as X, createElement as Sr, useRef as se, useMemo as ie, createContext as Ea, useContext as za, forwardRef as qe, useImperativeHandle as wr, useReducer as Pa } from "react";
function Aa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var it = { exports: {} }, Je = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn;
function Wa() {
  if (qn) return Je;
  qn = 1;
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
  return Je.Fragment = t, Je.jsx = r, Je.jsxs = r, Je;
}
var Xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function Ua() {
  return Kn || (Kn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === p ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case g:
          return "Fragment";
        case N:
          return "Profiler";
        case _:
          return "StrictMode";
        case I:
          return "Suspense";
        case v:
          return "SuspenseList";
        case y:
          return "Activity";
      }
      if (typeof j == "object")
        switch (typeof j.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), j.$$typeof) {
          case C:
            return "Portal";
          case F:
            return (j.displayName || "Context") + ".Provider";
          case w:
            return (j._context.displayName || "Context") + ".Consumer";
          case S:
            var W = j.render;
            return j = j.displayName, j || (j = W.displayName || W.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case M:
            return W = j.displayName || null, W !== null ? W : e(j.type) || "Memo";
          case D:
            W = j._payload, j = j._init;
            try {
              return e(j(W));
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
        var W = !1;
      } catch {
        W = !0;
      }
      if (W) {
        W = console;
        var E = W.error, G = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return E.call(
          W,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          G
        ), t(j);
      }
    }
    function a(j) {
      if (j === g) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === D)
        return "<...>";
      try {
        var W = e(j);
        return W ? "<" + W + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var j = h.A;
      return j === null ? null : j.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(j) {
      if (R.call(j, "key")) {
        var W = Object.getOwnPropertyDescriptor(j, "key").get;
        if (W && W.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function l(j, W) {
      function E() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          W
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: E,
        configurable: !0
      });
    }
    function c() {
      var j = e(this.type);
      return A[j] || (A[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function d(j, W, E, G, P, k, b, L) {
      return E = k.ref, j = {
        $$typeof: x,
        type: j,
        key: W,
        props: k,
        _owner: P
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(j, "ref", {
        enumerable: !1,
        get: c
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
        value: b
      }), Object.defineProperty(j, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    }
    function u(j, W, E, G, P, k, b, L) {
      var Y = W.children;
      if (Y !== void 0)
        if (G)
          if (K(Y)) {
            for (G = 0; G < Y.length; G++)
              f(Y[G]);
            Object.freeze && Object.freeze(Y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(Y);
      if (R.call(W, "key")) {
        Y = e(j);
        var B = Object.keys(W).filter(function(z) {
          return z !== "key";
        });
        G = 0 < B.length ? "{key: someKey, " + B.join(": ..., ") + ": ...}" : "{key: someKey}", Z[Y + G] || (B = 0 < B.length ? "{" + B.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          G,
          Y,
          B,
          Y
        ), Z[Y + G] = !0);
      }
      if (Y = null, E !== void 0 && (r(E), Y = "" + E), i(W) && (r(W.key), Y = "" + W.key), "key" in W) {
        E = {};
        for (var $ in W)
          $ !== "key" && (E[$] = W[$]);
      } else E = W;
      return Y && l(
        E,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), d(
        j,
        Y,
        k,
        P,
        o(),
        E,
        b,
        L
      );
    }
    function f(j) {
      typeof j == "object" && j !== null && j.$$typeof === x && j._store && (j._store.validated = 1);
    }
    var m = $e, x = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), F = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), p = Symbol.for("react.client.reference"), h = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = Object.prototype.hasOwnProperty, K = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(j) {
        return j();
      }
    };
    var H, A = {}, J = m.react_stack_bottom_frame.bind(
      m,
      s
    )(), Q = q(a(s)), Z = {};
    Xe.Fragment = g, Xe.jsx = function(j, W, E, G, P) {
      var k = 1e4 > h.recentlyCreatedOwnerStacks++;
      return u(
        j,
        W,
        E,
        !1,
        G,
        P,
        k ? Error("react-stack-top-frame") : J,
        k ? q(a(j)) : Q
      );
    }, Xe.jsxs = function(j, W, E, G, P) {
      var k = 1e4 > h.recentlyCreatedOwnerStacks++;
      return u(
        j,
        W,
        E,
        !0,
        G,
        P,
        k ? Error("react-stack-top-frame") : J,
        k ? q(a(j)) : Q
      );
    };
  }()), Xe;
}
var Zn;
function Oa() {
  return Zn || (Zn = 1, process.env.NODE_ENV === "production" ? it.exports = Wa() : it.exports = Ua()), it.exports;
}
var n = Oa(), qt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Jn;
function Ya() {
  return Jn || (Jn = 1, function(e) {
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
  }(qt)), qt.exports;
}
var Ga = Ya();
const U = /* @__PURE__ */ Aa(Ga), yd = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = U(
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
}, Fn = ({
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
        children: /* @__PURE__ */ n.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, l = s.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, c = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i,
      l
    ] });
    return s.href ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-account__link", href: s.href, children: c }) : s.action ? /* @__PURE__ */ n.jsx(
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
      children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-account__list", children: t.map((s, i) => s && /* @__PURE__ */ n.jsx(
        "li",
        {
          className: U("nhsuk-account__item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
}, { forwardRef: Va, useCallback: Le, useState: Kt } = Ha;
function qa(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [d, u] = Kt(!1), [f, m] = Kt(!1), [x, C] = Kt(!1), g = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    o !== "default" ? `nhs-aria-button--${o}` : "",
    s ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), _ = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", N = {
    ...d && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...x && { "data-focused": "true" },
    ..._ && { "data-disabled": "true" }
  }, w = Le(() => !_ && u(!0), [_]), F = Le(() => u(!1), []), S = Le(() => !_ && m(!0), [_]), I = Le(() => {
    m(!1), u(!1);
  }, []), v = Le(() => C(!0), []), M = Le(() => C(!1), []), D = Le((h) => {
    h.key === " " && ("href" in c || h.currentTarget.getAttribute("role") === "button") && (h.preventDefault(), h.currentTarget.click());
  }, [c]), y = Le((h) => {
    if (l) {
      const R = h.currentTarget;
      if (R.getAttribute("data-processing") === "true") {
        h.preventDefault();
        return;
      }
      R.setAttribute("data-processing", "true"), setTimeout(() => {
        R.removeAttribute("data-processing");
      }, 1e3);
    }
  }, [l]);
  if ("href" in c && c.href) {
    const h = c;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: h.href,
        target: h.target,
        rel: h.rel,
        className: g,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...N,
        ...l && { "data-prevent-double-click": "true" },
        onKeyDown: (R) => {
          h.onKeyDown?.(R), D(R);
        },
        onClick: (R) => {
          h.onClick?.(R), y(R);
        },
        onMouseDown: (R) => {
          h.onMouseDown?.(R), w();
        },
        onMouseUp: (R) => {
          h.onMouseUp?.(R), F();
        },
        onMouseEnter: (R) => {
          h.onMouseEnter?.(R), S();
        },
        onMouseLeave: (R) => {
          h.onMouseLeave?.(R), I();
        },
        onFocus: (R) => {
          h.onFocus?.(R), v();
        },
        onBlur: (R) => {
          h.onBlur?.(R), M();
        },
        "aria-disabled": h["aria-disabled"],
        ...h["aria-disabled"] === "true" && { tabIndex: -1 },
        id: h.id,
        style: h.style,
        title: h.title,
        "aria-label": h["aria-label"],
        "aria-describedby": h["aria-describedby"],
        "aria-labelledby": h["aria-labelledby"],
        tabIndex: h.tabIndex,
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
      className: g,
      "data-module": "nhs-button",
      ...N,
      ...l && { "data-prevent-double-click": "true" },
      ...p.disabled && { "aria-disabled": "true" },
      onKeyDown: (h) => {
        p.onKeyDown?.(h), D(h);
      },
      onClick: (h) => {
        p.onClick?.(h), y(h);
      },
      onMouseDown: (h) => {
        p.onMouseDown?.(h), w();
      },
      onMouseUp: (h) => {
        p.onMouseUp?.(h), F();
      },
      onMouseEnter: (h) => {
        p.onMouseEnter?.(h), S();
      },
      onMouseLeave: (h) => {
        p.onMouseLeave?.(h), I();
      },
      onFocus: (h) => {
        p.onFocus?.(h), v();
      },
      onBlur: (h) => {
        p.onBlur?.(h), M();
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
const Dn = Va(qa);
Dn.displayName = "Button";
const Ka = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = U(
    "nhsuk-back-link",
    a
  ), c = U(
    "nhsuk-back-link__link"
  ), d = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
      className: c,
      onClick: s,
      type: "button",
      ...i,
      children: d()
    }
  ) : /* @__PURE__ */ n.jsx(
    "a",
    {
      className: c,
      href: r,
      ...i,
      children: d()
    }
  ) });
}, Mn = ({
  text: e,
  html: t,
  children: r,
  color: a = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: c,
  ...d
}) => {
  const u = U(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": o,
      "nhsuk-tag--closable": s,
      "nhsuk-tag--disabled": l
    },
    c
  ), f = (m) => {
    m.preventDefault(), m.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: u, ...d, children: [
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
}, Rn = ({
  id: e,
  name: t,
  type: r = "text",
  value: a,
  defaultValue: o,
  placeholder: s,
  disabled: i = !1,
  readOnly: l = !1,
  required: c = !1,
  hasError: d = !1,
  describedBy: u,
  className: f,
  width: m = "full",
  inputMode: x,
  autoComplete: C,
  maxLength: g,
  minLength: _,
  pattern: N,
  step: w,
  min: F,
  max: S,
  showValueLabels: I = !1,
  showCurrentValue: v = !1,
  valueLabels: M,
  onChange: D,
  onBlur: y,
  onFocus: p,
  onKeyDown: h,
  ...R
}) => {
  const [K, q] = re(a || o || (r === "range" ? F || "0" : ""));
  le(() => {
    a !== void 0 && q(a);
  }, [a]);
  const H = (Z) => {
    q(Z.target.value), D?.(Z);
  }, A = r === "range", J = U(
    "nhsuk-input",
    {
      "nhsuk-input--error": d,
      "nhsuk-input--range": A,
      [`nhsuk-input--width-${m}`]: m !== "full" && !A
    },
    f
  ), Q = A ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    I && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: M?.min || F || "0" }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: J,
          id: e,
          name: t,
          type: r,
          value: K,
          defaultValue: o,
          placeholder: s,
          disabled: i,
          readOnly: l,
          required: c,
          "aria-describedby": u,
          inputMode: x,
          autoComplete: C,
          maxLength: g,
          minLength: _,
          pattern: N,
          step: w,
          min: F,
          max: S,
          onChange: H,
          onBlur: y,
          onFocus: p,
          onKeyDown: h,
          ...R
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: M?.max || S || "100" })
    ] }),
    !I && /* @__PURE__ */ n.jsx(
      "input",
      {
        className: J,
        id: e,
        name: t,
        type: r,
        value: K,
        defaultValue: o,
        placeholder: s,
        disabled: i,
        readOnly: l,
        required: c,
        "aria-describedby": u,
        inputMode: x,
        autoComplete: C,
        maxLength: g,
        minLength: _,
        pattern: N,
        step: w,
        min: F,
        max: S,
        onChange: H,
        onBlur: y,
        onFocus: p,
        onKeyDown: h,
        ...R
      }
    ),
    v && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      M?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: K })
    ] }) })
  ] }) : null;
  return A ? Q : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: J,
      id: e,
      name: t,
      type: r,
      value: a,
      defaultValue: o,
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": u,
      inputMode: x,
      autoComplete: C,
      maxLength: g,
      minLength: _,
      pattern: N,
      step: w,
      min: F,
      max: S,
      onChange: D,
      onBlur: y,
      onFocus: p,
      onKeyDown: h,
      ...R
    }
  );
}, In = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
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
      ...s,
      children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o
    }
  );
}, Ln = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = U(
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
      className: s,
      "aria-describedby": a,
      ...o,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ n.jsx("legend", { className: i, children: l() }),
        e
      ]
    }
  );
}, Za = ({
  items: e,
  name: t,
  idPrefix: r,
  legend: a,
  isPageHeading: o = !1,
  legendSize: s = "l",
  hint: i,
  errorMessage: l,
  className: c = "",
  small: d = !1,
  onChange: u,
  fieldsetAttributes: f,
  attributes: m,
  ...x
}) => {
  const [C, g] = re(
    e.filter((D) => D.checked).map((D) => D.value)
  ), _ = r || t, N = i ? `${_}-hint` : void 0, w = l ? `${_}-error` : void 0, F = [N, w].filter(Boolean).join(" ") || void 0, S = (D, y) => {
    let p;
    y ? p = [...C, D] : p = C.filter((h) => h !== D), g(p), u?.(p);
  }, I = () => e.map((D, y) => {
    const p = `${_}-${y + 1}`, h = `${p}-conditional`, R = C.includes(D.value), K = D.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: p,
          name: t,
          type: "checkbox",
          value: D.value,
          checked: R,
          disabled: K,
          onChange: (q) => S(D.value, q.target.checked),
          "aria-describedby": D.hint ? `${p}-hint` : F,
          ...D.conditional && {
            "aria-controls": h,
            "aria-expanded": R ? "true" : "false"
          },
          ...D.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: p, children: D.text }),
      D.hint && /* @__PURE__ */ n.jsx("div", { id: `${p}-hint`, className: "nhsuk-checkboxes__hint", children: D.hint }),
      D.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: U("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !R
          }),
          id: h,
          children: typeof D.conditional == "object" && D.conditional !== null && "label" in D.conditional && "id" in D.conditional && "name" in D.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            D.conditional.label && /* @__PURE__ */ n.jsx(In, { htmlFor: D.conditional.id, children: D.conditional.label }),
            /* @__PURE__ */ n.jsx(Rn, { ...D.conditional })
          ] }) : D.conditional
        }
      )
    ] }, D.value);
  }), v = U(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": d
    },
    c
  ), M = U("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: M, ...m, ...x, children: /* @__PURE__ */ n.jsxs(
    Ln,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: F,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: N, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: w, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: v, children: I() })
      ]
    }
  ) });
};
Za.displayName = "Checkboxes";
const Ja = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  placeholder: o,
  disabled: s = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: c = !1,
  describedBy: d,
  className: u,
  rows: f = 5,
  cols: m,
  maxLength: x,
  minLength: C,
  wrap: g = "soft",
  resize: _ = "vertical",
  autoComplete: N,
  spellCheck: w,
  onChange: F,
  onBlur: S,
  onFocus: I,
  onKeyDown: v,
  ...M
}) => {
  const D = U(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": c,
      [`nhsuk-textarea--resize-${_}`]: _ !== "vertical"
    },
    u
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: D,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: o,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": d,
      rows: f,
      cols: m,
      maxLength: x,
      minLength: C,
      wrap: g,
      autoComplete: N,
      spellCheck: w,
      onChange: F,
      onBlur: S,
      onFocus: I,
      onKeyDown: v,
      ...M
    }
  );
}, Cr = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = U("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, id: e, ...a, children: r });
}, kd = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: a = 75,
  name: o,
  value: s = "",
  rows: i,
  className: l,
  countMessage: c,
  onCountChange: d,
  onChange: u,
  ...f
}) => {
  const [m, x] = re(s), [C, g] = re(0), [_, N] = re(!1), [w, F] = re(!1), S = X((p) => r ? p.trim() === "" ? 0 : p.trim().split(/\s+/).length : p.length, [r]);
  le(() => {
    const p = S(m), h = t || r || 0, R = h - p, K = Math.floor(h * (a / 100));
    g(R), N(p > h), F(p >= K || p > h), d && d(p, R);
  }, [m, t, r, a, S, d]);
  const I = (p) => {
    const h = p.target.value;
    x(h), u && u(p);
  }, v = () => {
    const p = t || r || 0, h = r ? "word" : "character", R = r ? "words" : "characters";
    if (!w)
      return `You can enter up to ${p} ${p === 1 ? h : R}`;
    if (_) {
      const K = Math.abs(C);
      return `You have ${K} ${K === 1 ? h : R} too many`;
    } else
      return `You have ${C} ${C === 1 ? h : R} remaining`;
  }, M = U(
    "nhsuk-character-count",
    l
  ), D = U(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !w,
      "nhsuk-error-message": _
    },
    c?.classes
  ), y = U(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": _
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: M,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          Ja,
          {
            id: e,
            name: o,
            value: m,
            rows: i,
            className: y,
            onChange: I,
            "aria-describedby": `${e}-info`,
            ...f
          }
        ),
        /* @__PURE__ */ n.jsx(
          Cr,
          {
            id: `${e}-info`,
            className: D,
            children: v()
          }
        )
      ]
    }
  );
}, vd = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  disabled: o = !1,
  required: s = !1,
  hasError: i = !1,
  describedBy: l,
  className: c,
  multiple: d = !1,
  size: u,
  autoComplete: f,
  options: m,
  onChange: x,
  onBlur: C,
  onFocus: g,
  ..._
}) => {
  const N = U(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    c
  );
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: N,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      disabled: o,
      required: s,
      "aria-describedby": l,
      multiple: d,
      size: u,
      autoComplete: f,
      onChange: x,
      onBlur: C,
      onFocus: g,
      ..._,
      children: m.map((w, F) => /* @__PURE__ */ n.jsx(
        "option",
        {
          value: w.value,
          disabled: w.disabled,
          selected: w.selected,
          children: w.text
        },
        `${w.value}-${F}`
      ))
    }
  );
}, _d = ({
  name: e,
  value: t,
  defaultValue: r,
  hasError: a = !1,
  describedBy: o,
  className: s,
  size: i = "normal",
  inline: l = !1,
  options: c,
  onChange: d,
  onBlur: u,
  onFocus: f,
  ...m
}) => {
  const [x, C] = re(t || r || ""), g = U(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    s
  ), _ = (N) => {
    const w = N.target.value;
    C(w), d && d(N);
  };
  return /* @__PURE__ */ n.jsx(Ln, { children: /* @__PURE__ */ n.jsx("div", { className: g, ...m, children: c.map((N, w) => {
    const F = `${e}-${w}`, S = N.conditional ? `${F}-conditional` : void 0, I = x === N.value;
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
          checked: I,
          "aria-describedby": o,
          onChange: _,
          onBlur: u,
          onFocus: f
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: F, children: N.text }),
      N.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: N.hint }),
      N.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: U("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !I
          }),
          id: S,
          children: typeof N.conditional == "object" && N.conditional !== null && "label" in N.conditional && "id" in N.conditional && "name" in N.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            N.conditional.label && /* @__PURE__ */ n.jsx(In, { htmlFor: N.conditional.id, children: N.conditional.label }),
            /* @__PURE__ */ n.jsx(Rn, { ...N.conditional })
          ] }) : N.conditional
        }
      )
    ] }, N.value);
  }) }) });
}, jr = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...o
}) => {
  const s = U(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), i = a ? { maxWidth: a } : void 0;
  return /* @__PURE__ */ n.jsx("div", { className: s, style: i, ...o, children: e });
}, $n = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = U("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: e });
}, Hn = ({
  children: e,
  width: t = "full",
  mobileWidth: r,
  tabletWidth: a,
  desktopWidth: o,
  start: s,
  className: i,
  forceWidth: l = !1,
  ...c
}) => {
  const d = U(
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
  return /* @__PURE__ */ n.jsx("div", { className: d, ...c, children: e });
}, Xa = ({
  children: e,
  className: t,
  ...r
}) => /* @__PURE__ */ n.jsx(jr, { className: t, ...r, children: /* @__PURE__ */ n.jsx($n, { children: e }) }), Qa = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), d = U(
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
  return /* @__PURE__ */ n.jsx(c, { className: d, role: s, ...l, children: e });
}, es = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = U("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, ts = Qa;
ts.Item = es;
const Sd = ({
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
}, wd = {
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
}, Cd = ({
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
}, jd = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Nd = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Nr = ({
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
}, Me = ({
  level: e,
  className: t,
  text: r,
  html: a,
  children: o,
  size: s,
  marginBottom: i,
  ...l
}) => {
  const d = e ?? ((C) => {
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
  })(s), u = U(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${s}`]: s
    },
    t
  ), f = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), m = `h${d}`, x = i ? { ...l.style, marginBottom: i } : l.style;
  return Sr(
    m,
    { className: u, ...l, style: x },
    f
  );
}, Xn = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...o
}) => {
  const s = U("nhsuk-error-message", t);
  return /* @__PURE__ */ n.jsxs("span", { className: s, id: e, ...o, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      r,
      " "
    ] }),
    a
  ] });
}, Td = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const c = se(null);
  le(() => {
    c.current && c.current.focus();
  }, []);
  const d = U(
    "nhsuk-error-summary",
    s
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, m = (x) => {
    const C = x.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } }) : x.text;
    return x.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: x.href,
        ...x.attributes,
        children: C
      }
    ) : C;
  };
  return /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: u() }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ n.jsx("p", { children: i }),
          !i && (r || a) && /* @__PURE__ */ n.jsx("p", { children: f() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((x, C) => /* @__PURE__ */ n.jsx("li", { children: m(x) }, C)) })
        ] })
      ]
    }
  );
}, Bd = ({
  id: e,
  className: t,
  items: r,
  namePrefix: a,
  values: o = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: c,
  ...d
}) => {
  const [u, f] = re(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [m, x] = re({}), C = (H) => H % 4 === 0 && H % 100 !== 0 || H % 400 === 0, g = (H, A) => {
    const J = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return H === 2 && C(A) ? 29 : J[H - 1];
  }, _ = (H, A, J) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Day must be a number";
    const Q = parseInt(H, 10);
    if (Q < 1 || Q > 31) return "Day must be between 1 and 31";
    if (A && J) {
      const Z = parseInt(A, 10), j = parseInt(J, 10);
      if (!isNaN(Z) && !isNaN(j) && Z >= 1 && Z <= 12) {
        const W = g(Z, j);
        if (Q > W)
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
          ][Z - 1]} ${j} only has ${W} days`;
      }
    }
  }, N = (H) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Month must be a number";
    const A = parseInt(H, 10);
    if (A < 1 || A > 12) return "Month must be between 1 and 12";
  }, w = (H) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Year must be a number";
    const A = parseInt(H, 10), J = (/* @__PURE__ */ new Date()).getFullYear();
    if (A < 1900 || A > J + 10)
      return `Year must be between 1900 and ${J + 10}`;
  }, F = (H, A, J) => {
    if (!H || !A || !J) return;
    const Q = parseInt(H, 10), Z = parseInt(A, 10), j = parseInt(J, 10);
    if (isNaN(Q) || isNaN(Z) || isNaN(j) || Z < 1 || Z > 12 || j < 1900) return;
    const W = g(Z, j);
    Q < 1 || Q > W;
  }, S = X((H, A) => {
    const J = {
      ...u,
      [H]: A
    };
    f(J), c && c(J);
  }, [u, c]), I = X((H) => {
    const A = u[H];
    let J;
    if (H === "day")
      J = _(A, u.month, u.year);
    else if (H === "month") {
      if (J = N(A), !J && u.day) {
        const Q = _(u.day, A, u.year);
        x((Z) => ({
          ...Z,
          day: Q
        }));
      }
    } else if (H === "year" && (J = w(A), !J && u.day && u.month)) {
      const Q = _(u.day, u.month, A);
      x((Z) => ({
        ...Z,
        day: Q
      }));
    }
    if (x((Q) => ({
      ...Q,
      [H]: J
    })), u.day && u.month && u.year) {
      const Q = F(
        H === "day" ? A : u.day,
        H === "month" ? A : u.month,
        H === "year" ? A : u.year
      );
      Q && x((Z) => ({
        ...Z,
        day: Q
      }));
    }
  }, [u, _, N, w, F]), v = ie(() => [
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
  ], []), M = r || v;
  let D = s?.describedBy || "";
  const y = i ? `${e}-hint` : "", p = l ? `${e}-error` : "";
  y && (D = D ? `${D} ${y}` : y), p && (D = D ? `${D} ${p}` : p);
  const h = Object.values(m).some((H) => H), R = U(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || h
    }
  ), K = U(
    "nhsuk-date-input",
    t
  ), q = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Cr,
      {
        id: y,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      Xn,
      {
        id: p,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([H, A]) => A ? /* @__PURE__ */ n.jsxs(
        Xn,
        {
          id: `${e}-${H}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            A
          ]
        },
        `${H}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: K, id: e, "data-testid": "date-input", ...d, children: M.map((H) => {
      const A = H.id || `${e}-${H.name}`, J = a ? `${a}[${H.name}]` : H.name, Q = H.label || H.name.charAt(0).toUpperCase() + H.name.slice(1), Z = m[H.name], j = u[H.name] || "";
      let W = D;
      if (Z) {
        const E = `${e}-${H.name}-error`;
        W = W ? `${W} ${E}` : E;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          In,
          {
            htmlFor: A,
            className: "nhsuk-date-input__label",
            children: Q
          }
        ),
        /* @__PURE__ */ n.jsx(
          Rn,
          {
            id: A,
            name: J,
            value: j,
            className: U("nhsuk-date-input__input", H.classes, {
              "nhsuk-input--error": Z
            }),
            inputMode: H.inputmode,
            autoComplete: H.autocomplete,
            pattern: H.pattern,
            "aria-describedby": W || void 0,
            hasError: !!Z,
            onChange: (E) => S(H.name, E.target.value),
            onBlur: () => I(H.name)
          }
        )
      ] }, H.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: R, children: s ? /* @__PURE__ */ n.jsx(
    Ln,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: D || void 0,
      children: q()
    }
  ) : q() });
}, Tr = {
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
}, Br = Ea(Tr), ns = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Tr, ...t };
  return /* @__PURE__ */ n.jsx(Br.Provider, { value: r, children: e });
}, Fd = () => {
  const e = za(Br);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function rs() {
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
function as() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = rs(), document.head.appendChild(e);
}
const Dd = ({ children: e, theme: t }) => (le(() => {
  as();
}, []), /* @__PURE__ */ n.jsx(ns, { theme: t, children: e })), En = ({
  mode: e = "form",
  action: t = "https://www.nhs.uk/search/",
  method: r = "get",
  name: a = "q",
  value: o,
  placeholder: s = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: c,
  disabled: d = !1,
  callbacks: u = {},
  isLoading: f = !1,
  showResults: m = !1,
  results: x = [],
  formAttributes: C = {},
  inputAttributes: g = {},
  buttonAttributes: _ = {},
  preventDefaultSubmit: N = !1,
  debounceMs: w = 300,
  minQueryLength: F = 1
}) => {
  const [S, I] = re(""), [v, M] = re(!1), D = se(void 0), y = se(null), p = se(null), h = e === "controlled" && o !== void 0, R = h ? o : S, K = X((G) => {
    D.current && clearTimeout(D.current), D.current = setTimeout(() => {
      u.onChange && G.length >= F && u.onChange(G);
    }, w);
  }, [u.onChange, w, F]), q = X((G) => {
    const P = G.target.value;
    h || I(P), e !== "form" && K(P);
  }, [h, e, K]), H = X((G) => {
    const P = R.trim(), k = {
      query: P,
      timestamp: Date.now(),
      formData: new FormData(G.currentTarget)
    };
    e === "controlled" || e === "hybrid" && N ? (G.preventDefault(), u.onSearch && P.length >= F && u.onSearch(k)) : e === "hybrid" && u.onSearch && P.length >= F && u.onSearch(k);
  }, [e, R, u.onSearch, N, F]), A = X(() => {
    M(!0), u.onFocus?.();
  }, [u.onFocus]), J = X(() => {
    M(!1), u.onBlur?.();
  }, [u.onBlur]), Q = X(() => {
    h || I(""), u.onClear?.(), p.current?.focus();
  }, [h, u.onClear]);
  le(() => () => {
    D.current && clearTimeout(D.current);
  }, []);
  const Z = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: U("nhsuk-icon nhsuk-icon__search", {
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
  ), W = () => !R || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: Q,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), E = () => !m || !x.length || !v ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: x.map((G) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: G.href ? /* @__PURE__ */ n.jsxs("a", { href: G.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: G.title }),
    G.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: G.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => u.onSearch?.({ query: G.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: G.title }),
        G.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: G.description })
      ]
    }
  ) }, G.id)) });
  return /* @__PURE__ */ n.jsxs("search", { className: U("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": v,
    "nhsuk-header__search--has-results": m && x.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: y,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        onSubmit: H,
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
                ref: p,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: R,
                onChange: q,
                onFocus: A,
                onBlur: J,
                disabled: d || f,
                "aria-expanded": m && x.length > 0,
                "aria-haspopup": "listbox",
                ...g
              }
            ),
            W()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: d || f || e !== "form" && R.length < F,
              ..._,
              children: [
                f ? j() : Z(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    E()
  ] });
}, Fr = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: d = {},
  ...u
}) => {
  const [f, m] = re(!1), [x, C] = re(!1), [g, _] = re(i?.items?.length || 0), [N, w] = re(!1), [F, S] = re(!1), [I, v] = re(!1), M = se(null), D = se(null), y = se(!1), p = se(null), h = se([]), R = se(null);
  le(() => {
    typeof window > "u" || (v(!0), w(!0));
  }, []), le(() => {
    if (!I || !i?.items?.length) return;
    h.current = i.items;
    const b = setTimeout(() => {
      M.current && D.current && Q();
    }, 100);
    return () => clearTimeout(b);
  }, [I, i?.items]);
  const K = r.href && !t.href || r.href && r.href === t.href, q = K ? r.href : t.href, H = U(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), A = U(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), J = U(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), Q = X(() => {
    if (!(typeof window > "u" || y.current) && !(!M.current || !D.current || !h.current.length)) {
      y.current = !0;
      try {
        const b = D.current, L = M.current, Y = b.offsetWidth, B = L.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (B.length === 0 || Y === 0) {
          y.current = !1;
          return;
        }
        const $ = window.innerWidth < 768, z = $ ? 16 : 32, T = z * 2, te = Y - T, V = Array.from(B).map((ae) => ae.offsetWidth), O = V.reduce((ae, de) => ae + de, 0), ee = $ ? 80 : 100, oe = R.current !== null && R.current !== $;
        if (R.current = $, console.log("Overflow check:", {
          containerWidth: Y,
          availableContainerWidth: te,
          totalGutters: T,
          gutterSize: z,
          totalWidth: O,
          mobile: $,
          breakpointChanged: oe,
          itemCount: V.length,
          measurements: V
        }), O <= te)
          C(!1), _(h.current.length);
        else {
          const ae = te - ee;
          let de = 0, xe = 0;
          for (let pe = 0; pe < V.length; pe++) {
            const ye = xe + V[pe];
            if (ye <= ae)
              xe = ye, de = pe + 1;
            else
              break;
          }
          de = Math.max(1, de);
          const Ke = de < V.length;
          C(Ke), _(de);
        }
        y.current = !1;
      } catch (b) {
        console.error("Overflow detection error:", b), C(!1), _(h.current.length), y.current = !1;
      }
    }
  }, []);
  le(() => {
    if (typeof document > "u") return;
    const b = (L) => {
      L.key === "Escape" && f && m(!1);
    };
    if (f)
      return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [f]), le(() => {
    if (typeof window > "u" || !I) return;
    const b = () => {
      f && (m(!1), S(!1)), p.current && clearTimeout(p.current), p.current = setTimeout(() => {
        h.current.length > 0 && Q();
      }, 250);
    };
    let L = null, Y = null;
    return window.matchMedia && (L = window.matchMedia("(max-width: 767px)"), Y = () => {
      console.log("Breakpoint changed:", L?.matches ? "mobile" : "desktop"), h.current.length > 0 && setTimeout(() => Q(), 50);
    }, L.addEventListener ? L.addEventListener("change", Y) : L.addListener(Y)), window.addEventListener("resize", b), () => {
      window.removeEventListener("resize", b), L && Y && (L.removeEventListener ? L.removeEventListener("change", Y) : L.removeListener(Y)), p.current && clearTimeout(p.current);
    };
  }, [I, f, Q]), le(() => {
    if (typeof document > "u") return;
    const b = (L) => {
      const Y = L.target, B = M.current?.contains(Y);
      f && !B && m(!1);
    };
    if (f)
      return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, [f]);
  const Z = (b) => {
    b && (b.preventDefault(), b.stopPropagation());
    const L = !f;
    m(L), L ? setTimeout(() => {
      S(!0);
    }, 50) : S(!1);
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
  ), W = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : j(), E = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, G = (b, L) => b ? L ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: L, children: b }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: b }) : null, P = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), k = (b) => {
    if (b.active || b.current) {
      const L = b.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: L });
    }
    return b.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: H,
      role: "banner",
      "data-module": "nhsuk-header",
      ...d,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: A, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            q ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: q, children: [
              W(),
              E(),
              K && G(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              W(),
              E(),
              K && G(r.text)
            ] }),
            r.text && !K && G(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx(En, { ...o }),
          /* @__PURE__ */ n.jsx(
            Fn,
            {
              ...s,
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
                className: U(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !N && I,
                    "nhsuk-header__navigation-container--ssr": !I
                  },
                  l
                ),
                ref: D,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: M, children: [
                  (I ? i.items.slice(0, g) : i.items).map((b, L) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: U(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": b.active || b.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !I && L >= 4
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
                          children: k(b)
                        }
                      )
                    },
                    L
                  )),
                  I && x && g < i.items.length && /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ n.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: Z,
                          type: "button",
                          children: [
                            /* @__PURE__ */ n.jsx("span", { children: "More" }),
                            P()
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
        I && i && i.items && i.items.length > 0 && f && F && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !F,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(g).map((b, L) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: U(
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
                      m(!1), S(!1);
                    },
                    children: k(b)
                  }
                )
              },
              `overflow-${g + L}`
            )) })
          }
        )
      ]
    }
  );
}, Md = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: d = {},
  ...u
}) => {
  const f = r.href && !t.href || r.href && r.href === t.href, m = f ? r.href : t.href, x = U(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), C = U(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), g = U(
    "nhsuk-header__navigation",
    i?.className
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
  ) : _(), w = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, F = (v, M) => v ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: v }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: v }) : null, S = () => !i?.items || i.items.length === 0 ? null : i.items.map((v, M) => /* @__PURE__ */ n.jsx(
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
    v.href || M
  )), I = () => o ? /* @__PURE__ */ n.jsx(En, { ...o }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: x,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...d,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: C, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            m ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: m, children: [
              N(),
              w(),
              f && F(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              N(),
              w(),
              f && F(r.text)
            ] }),
            r.text && !f && F(r.text, r.href)
          ] }),
          (c === "organisation" || a) && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            a && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name", children: a.name }),
              a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: a.descriptor })
            ] }),
            I()
          ] }),
          c !== "organisation" && !a && I(),
          /* @__PURE__ */ n.jsx(
            Fn,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
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
                children: S()
              }
            ) })
          }
        )
      ]
    }
  );
}, Rd = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: d = {},
  maxVisibleItems: u = 5,
  // New prop to control CSS-based overflow
  ...f
}) => {
  const m = r.href && !t.href || r.href && r.href === t.href, x = m ? r.href : t.href, C = U(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), g = U(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), _ = U(
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
  ), w = () => t.src ? /* @__PURE__ */ n.jsx(
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
  ] }) : null, S = (v, M) => v ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: v }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: v }) : null, I = (v) => {
    if (v.active || v.current) {
      const M = v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: M });
    }
    return v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: C,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...d,
      ...f,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: g, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            x ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: x, children: [
              w(),
              F(),
              m && S(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              w(),
              F(),
              m && S(r.text)
            ] }),
            r.text && !m && S(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx(En, { ...o }),
          /* @__PURE__ */ n.jsx(
            Fn,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: _,
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
                  i.items.slice(0, u).map((v, M) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: U(
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
                          children: I(v)
                        }
                      )
                    },
                    M
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(u).map((v, M) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: U(
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
                            children: I(v)
                          }
                        )
                      },
                      `overflow-${u + M}`
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
}, ss = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
  text: a,
  html: o,
  imageURL: s,
  containerClasses: i = "",
  classes: l = "",
  children: c,
  ...d
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
    !c && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), x = c || e || a || o, C = () => {
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
      ...d,
      children: [
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: x && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          C(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && x && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          C(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
ss.displayName = "Hero";
const Dr = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {}
}) => {
  const c = (u, f = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: U("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": f
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
  ), d = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs("div", { className: U("nhsuk-width-container", i), children: [
      /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ n.jsx("div", { className: U("nhsuk-footer", e), children: d ? (
        // Multi-column layout
        /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((u) => c(u)) }),
          r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((u) => c(u)) }),
          a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((u) => c(u)) }),
          o && o.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((u) => c(u)) })
        ] })
      ) : (
        // Single column layout (default)
        /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
          t.map((u) => c(u, !0)),
          (r || []).map((u) => c(u, !0)),
          (a || []).map((u) => c(u, !0)),
          (o || []).map((u) => c(u, !0))
        ] })
      ) }),
      !d && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
    ] }),
    d && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function dt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function os(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function zn(e) {
  let t, r, a;
  e.length !== 2 ? (t = dt, r = (l, c) => dt(e(l), c), a = (l, c) => e(l) - c) : (t = e === dt || e === os ? e : is, r = e, a = e);
  function o(l, c, d = 0, u = l.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        r(l[f], c) < 0 ? d = f + 1 : u = f;
      } while (d < u);
    }
    return d;
  }
  function s(l, c, d = 0, u = l.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        r(l[f], c) <= 0 ? d = f + 1 : u = f;
      } while (d < u);
    }
    return d;
  }
  function i(l, c, d = 0, u = l.length) {
    const f = o(l, c, d, u - 1);
    return f > d && a(l[f - 1], c) > -a(l[f], c) ? f - 1 : f;
  }
  return { left: o, center: i, right: s };
}
function is() {
  return 0;
}
function ls(e) {
  return e === null ? NaN : +e;
}
const cs = zn(dt), us = cs.right;
zn(ls).center;
const ds = Math.sqrt(50), hs = Math.sqrt(10), fs = Math.sqrt(2);
function Mr(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= ds ? 10 : s >= hs ? 5 : s >= fs ? 2 : 1;
  let l, c, d;
  return o < 0 ? (d = Math.pow(10, -o) / i, l = Math.round(e * d), c = Math.round(t * d), l / d < e && ++l, c / d > t && --c, d = -d) : (d = Math.pow(10, o) * i, l = Math.round(e / d), c = Math.round(t / d), l * d < e && ++l, c * d > t && --c), c < l && 0.5 <= r && r < 2 ? Mr(e, t, r * 2) : [l, c, d];
}
function Qn(e, t, r) {
  return t = +t, e = +e, r = +r, Mr(e, t, r)[2];
}
function er(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? Qn(t, e, r) : Qn(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function ms(e, t) {
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
function Pn(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Rr(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function st() {
}
var nt = 0.7, ht = 1 / nt, Ye = "\\s*([+-]?\\d+)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", be = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ps = /^#([0-9a-f]{3,8})$/, gs = new RegExp(`^rgb\\(${Ye},${Ye},${Ye}\\)$`), xs = new RegExp(`^rgb\\(${be},${be},${be}\\)$`), bs = new RegExp(`^rgba\\(${Ye},${Ye},${Ye},${rt}\\)$`), ys = new RegExp(`^rgba\\(${be},${be},${be},${rt}\\)$`), ks = new RegExp(`^hsl\\(${rt},${be},${be}\\)$`), vs = new RegExp(`^hsla\\(${rt},${be},${be},${rt}\\)$`), tr = {
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
Pn(st, at, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: nr,
  // Deprecated! Use color.formatHex.
  formatHex: nr,
  formatHex8: _s,
  formatHsl: Ss,
  formatRgb: rr,
  toString: rr
});
function nr() {
  return this.rgb().formatHex();
}
function _s() {
  return this.rgb().formatHex8();
}
function Ss() {
  return Ir(this).formatHsl();
}
function rr() {
  return this.rgb().formatRgb();
}
function at(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = ps.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? ar(t) : r === 3 ? new fe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? lt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? lt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = gs.exec(e)) ? new fe(t[1], t[2], t[3], 1) : (t = xs.exec(e)) ? new fe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = bs.exec(e)) ? lt(t[1], t[2], t[3], t[4]) : (t = ys.exec(e)) ? lt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ks.exec(e)) ? ir(t[1], t[2] / 100, t[3] / 100, 1) : (t = vs.exec(e)) ? ir(t[1], t[2] / 100, t[3] / 100, t[4]) : tr.hasOwnProperty(e) ? ar(tr[e]) : e === "transparent" ? new fe(NaN, NaN, NaN, 0) : null;
}
function ar(e) {
  return new fe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function lt(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new fe(e, t, r, a);
}
function ws(e) {
  return e instanceof st || (e = at(e)), e ? (e = e.rgb(), new fe(e.r, e.g, e.b, e.opacity)) : new fe();
}
function an(e, t, r, a) {
  return arguments.length === 1 ? ws(e) : new fe(e, t, r, a ?? 1);
}
function fe(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
Pn(fe, an, Rr(st, {
  brighter(e) {
    return e = e == null ? ht : Math.pow(ht, e), new fe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? nt : Math.pow(nt, e), new fe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new fe(Ee(this.r), Ee(this.g), Ee(this.b), ft(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: sr,
  // Deprecated! Use color.formatHex.
  formatHex: sr,
  formatHex8: Cs,
  formatRgb: or,
  toString: or
}));
function sr() {
  return `#${He(this.r)}${He(this.g)}${He(this.b)}`;
}
function Cs() {
  return `#${He(this.r)}${He(this.g)}${He(this.b)}${He((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function or() {
  const e = ft(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ee(this.r)}, ${Ee(this.g)}, ${Ee(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ft(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ee(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function He(e) {
  return e = Ee(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ir(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ge(e, t, r, a);
}
function Ir(e) {
  if (e instanceof ge) return new ge(e.h, e.s, e.l, e.opacity);
  if (e instanceof st || (e = at(e)), !e) return new ge();
  if (e instanceof ge) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new ge(i, l, c, e.opacity);
}
function js(e, t, r, a) {
  return arguments.length === 1 ? Ir(e) : new ge(e, t, r, a ?? 1);
}
function ge(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
Pn(ge, js, Rr(st, {
  brighter(e) {
    return e = e == null ? ht : Math.pow(ht, e), new ge(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? nt : Math.pow(nt, e), new ge(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new fe(
      Zt(e >= 240 ? e - 240 : e + 120, o, a),
      Zt(e, o, a),
      Zt(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new ge(lr(this.h), ct(this.s), ct(this.l), ft(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ft(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${lr(this.h)}, ${ct(this.s) * 100}%, ${ct(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function lr(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ct(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Zt(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const An = (e) => () => e;
function Ns(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Ts(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function Bs(e) {
  return (e = +e) == 1 ? Lr : function(t, r) {
    return r - t ? Ts(t, r, e) : An(isNaN(t) ? r : t);
  };
}
function Lr(e, t) {
  var r = t - e;
  return r ? Ns(e, r) : An(isNaN(e) ? t : e);
}
const cr = function e(t) {
  var r = Bs(t);
  function a(o, s) {
    var i = r((o = an(o)).r, (s = an(s)).r), l = r(o.g, s.g), c = r(o.b, s.b), d = Lr(o.opacity, s.opacity);
    return function(u) {
      return o.r = i(u), o.g = l(u), o.b = c(u), o.opacity = d(u), o + "";
    };
  }
  return a.gamma = e, a;
}(1);
function Fs(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Ds(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ms(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = Wn(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Rs(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function mt(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Is(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = Wn(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var sn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Jt = new RegExp(sn.source, "g");
function Ls(e) {
  return function() {
    return e;
  };
}
function $s(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Hs(e, t) {
  var r = sn.lastIndex = Jt.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = sn.exec(e)) && (o = Jt.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: mt(a, o) })), r = Jt.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? $s(c[0].x) : Ls(t) : (t = c.length, function(d) {
    for (var u = 0, f; u < t; ++u) l[(f = c[u]).i] = f.x(d);
    return l.join("");
  });
}
function Wn(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? An(t) : (r === "number" ? mt : r === "string" ? (a = at(t)) ? (t = a, cr) : Hs : t instanceof at ? cr : t instanceof Date ? Rs : Ds(t) ? Fs : Array.isArray(t) ? Ms : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Is : mt)(e, t);
}
function Es(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function zs(e) {
  return function() {
    return e;
  };
}
function Ps(e) {
  return +e;
}
var ur = [0, 1];
function Ue(e) {
  return e;
}
function on(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : zs(isNaN(t) ? NaN : 0.5);
}
function As(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Ws(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = on(o, a), s = r(i, s)) : (a = on(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function Us(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = on(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = us(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function Os(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ys() {
  var e = ur, t = ur, r = Wn, a, o, s, i = Ue, l, c, d;
  function u() {
    var m = Math.min(e.length, t.length);
    return i !== Ue && (i = As(e[0], e[m - 1])), l = m > 2 ? Us : Ws, c = d = null, f;
  }
  function f(m) {
    return m == null || isNaN(m = +m) ? s : (c || (c = l(e.map(a), t, r)))(a(i(m)));
  }
  return f.invert = function(m) {
    return i(o((d || (d = l(t, e.map(a), mt)))(m)));
  }, f.domain = function(m) {
    return arguments.length ? (e = Array.from(m, Ps), u()) : e.slice();
  }, f.range = function(m) {
    return arguments.length ? (t = Array.from(m), u()) : t.slice();
  }, f.rangeRound = function(m) {
    return t = Array.from(m), r = Es, u();
  }, f.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : Ue, u()) : i !== Ue;
  }, f.interpolate = function(m) {
    return arguments.length ? (r = m, u()) : r;
  }, f.unknown = function(m) {
    return arguments.length ? (s = m, f) : s;
  }, function(m, x) {
    return a = m, o = x, u();
  };
}
function Gs() {
  return Ys()(Ue, Ue);
}
function Vs(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const Xt = /* @__PURE__ */ new Date(), Qt = /* @__PURE__ */ new Date();
function ce(e, t, r, a) {
  function o(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return o.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), o.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), o.round = (s) => {
    const i = o(s), l = o.ceil(s);
    return s - i < l - s ? i : l;
  }, o.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), o.range = (s, i, l) => {
    const c = [];
    if (s = o.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return c;
    let d;
    do
      c.push(d = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (d < s && s < i);
    return c;
  }, o.filter = (s) => ce((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), r && (o.count = (s, i) => (Xt.setTime(+s), Qt.setTime(+i), e(Xt), e(Qt), Math.floor(r(Xt, Qt))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const pt = ce(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
pt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ce((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : pt);
pt.range;
const Fe = 1e3, me = Fe * 60, De = me * 60, Re = De * 24, Un = Re * 7, dr = Re * 30, en = Re * 365, Oe = ce((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Fe);
}, (e, t) => (t - e) / Fe, (e) => e.getUTCSeconds());
Oe.range;
const On = ce((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Fe);
}, (e, t) => {
  e.setTime(+e + t * me);
}, (e, t) => (t - e) / me, (e) => e.getMinutes());
On.range;
const qs = ce((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * me);
}, (e, t) => (t - e) / me, (e) => e.getUTCMinutes());
qs.range;
const Yn = ce((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Fe - e.getMinutes() * me);
}, (e, t) => {
  e.setTime(+e + t * De);
}, (e, t) => (t - e) / De, (e) => e.getHours());
Yn.range;
const Ks = ce((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * De);
}, (e, t) => (t - e) / De, (e) => e.getUTCHours());
Ks.range;
const ot = ce(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * me) / Re,
  (e) => e.getDate() - 1
);
ot.range;
const Gn = ce((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Re, (e) => e.getUTCDate() - 1);
Gn.range;
const Zs = ce((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Re, (e) => Math.floor(e / Re));
Zs.range;
function Pe(e) {
  return ce((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * me) / Un);
}
const Gt = Pe(0), gt = Pe(1), Js = Pe(2), Xs = Pe(3), Ge = Pe(4), Qs = Pe(5), eo = Pe(6);
Gt.range;
gt.range;
Js.range;
Xs.range;
Ge.range;
Qs.range;
eo.range;
function Ae(e) {
  return ce((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Un);
}
const $r = Ae(0), xt = Ae(1), to = Ae(2), no = Ae(3), Ve = Ae(4), ro = Ae(5), ao = Ae(6);
$r.range;
xt.range;
to.range;
no.range;
Ve.range;
ro.range;
ao.range;
const Vn = ce((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Vn.range;
const so = ce((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
so.range;
const Ie = ce((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ie.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ce((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Ie.range;
const ze = ce((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
ze.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ce((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
ze.range;
function oo(e, t, r, a, o, s) {
  const i = [
    [Oe, 1, Fe],
    [Oe, 5, 5 * Fe],
    [Oe, 15, 15 * Fe],
    [Oe, 30, 30 * Fe],
    [s, 1, me],
    [s, 5, 5 * me],
    [s, 15, 15 * me],
    [s, 30, 30 * me],
    [o, 1, De],
    [o, 3, 3 * De],
    [o, 6, 6 * De],
    [o, 12, 12 * De],
    [a, 1, Re],
    [a, 2, 2 * Re],
    [r, 1, Un],
    [t, 1, dr],
    [t, 3, 3 * dr],
    [e, 1, en]
  ];
  function l(d, u, f) {
    const m = u < d;
    m && ([d, u] = [u, d]);
    const x = f && typeof f.range == "function" ? f : c(d, u, f), C = x ? x.range(d, +u + 1) : [];
    return m ? C.reverse() : C;
  }
  function c(d, u, f) {
    const m = Math.abs(u - d) / f, x = zn(([, , _]) => _).right(i, m);
    if (x === i.length) return e.every(er(d / en, u / en, f));
    if (x === 0) return pt.every(Math.max(er(d, u, f), 1));
    const [C, g] = i[m / i[x - 1][2] < i[x][2] / m ? x - 1 : x];
    return C.every(g);
  }
  return [l, c];
}
const [io, lo] = oo(Ie, Vn, Gt, ot, Yn, On);
function tn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function nn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Qe(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function co(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, d = et(o), u = tt(o), f = et(s), m = tt(s), x = et(i), C = tt(i), g = et(l), _ = tt(l), N = et(c), w = tt(c), F = {
    a: J,
    A: Q,
    b: Z,
    B: j,
    c: null,
    d: xr,
    e: xr,
    f: Ro,
    g: Uo,
    G: Yo,
    H: Fo,
    I: Do,
    j: Mo,
    L: Hr,
    m: Io,
    M: Lo,
    p: W,
    q: E,
    Q: kr,
    s: vr,
    S: $o,
    u: Ho,
    U: Eo,
    V: zo,
    w: Po,
    W: Ao,
    x: null,
    X: null,
    y: Wo,
    Y: Oo,
    Z: Go,
    "%": yr
  }, S = {
    a: G,
    A: P,
    b: k,
    B: b,
    c: null,
    d: br,
    e: br,
    f: Zo,
    g: oi,
    G: li,
    H: Vo,
    I: qo,
    j: Ko,
    L: zr,
    m: Jo,
    M: Xo,
    p: L,
    q: Y,
    Q: kr,
    s: vr,
    S: Qo,
    u: ei,
    U: ti,
    V: ni,
    w: ri,
    W: ai,
    x: null,
    X: null,
    y: si,
    Y: ii,
    Z: ci,
    "%": yr
  }, I = {
    a: p,
    A: h,
    b: R,
    B: K,
    c: q,
    d: pr,
    e: pr,
    f: jo,
    g: mr,
    G: fr,
    H: gr,
    I: gr,
    j: _o,
    L: Co,
    m: vo,
    M: So,
    p: y,
    q: ko,
    Q: To,
    s: Bo,
    S: wo,
    u: po,
    U: go,
    V: xo,
    w: mo,
    W: bo,
    x: H,
    X: A,
    y: mr,
    Y: fr,
    Z: yo,
    "%": No
  };
  F.x = v(r, F), F.X = v(a, F), F.c = v(t, F), S.x = v(r, S), S.X = v(a, S), S.c = v(t, S);
  function v(B, $) {
    return function(z) {
      var T = [], te = -1, V = 0, O = B.length, ee, oe, ae;
      for (z instanceof Date || (z = /* @__PURE__ */ new Date(+z)); ++te < O; )
        B.charCodeAt(te) === 37 && (T.push(B.slice(V, te)), (oe = hr[ee = B.charAt(++te)]) != null ? ee = B.charAt(++te) : oe = ee === "e" ? " " : "0", (ae = $[ee]) && (ee = ae(z, oe)), T.push(ee), V = te + 1);
      return T.push(B.slice(V, te)), T.join("");
    };
  }
  function M(B, $) {
    return function(z) {
      var T = Qe(1900, void 0, 1), te = D(T, B, z += "", 0), V, O;
      if (te != z.length) return null;
      if ("Q" in T) return new Date(T.Q);
      if ("s" in T) return new Date(T.s * 1e3 + ("L" in T ? T.L : 0));
      if ($ && !("Z" in T) && (T.Z = 0), "p" in T && (T.H = T.H % 12 + T.p * 12), T.m === void 0 && (T.m = "q" in T ? T.q : 0), "V" in T) {
        if (T.V < 1 || T.V > 53) return null;
        "w" in T || (T.w = 1), "Z" in T ? (V = nn(Qe(T.y, 0, 1)), O = V.getUTCDay(), V = O > 4 || O === 0 ? xt.ceil(V) : xt(V), V = Gn.offset(V, (T.V - 1) * 7), T.y = V.getUTCFullYear(), T.m = V.getUTCMonth(), T.d = V.getUTCDate() + (T.w + 6) % 7) : (V = tn(Qe(T.y, 0, 1)), O = V.getDay(), V = O > 4 || O === 0 ? gt.ceil(V) : gt(V), V = ot.offset(V, (T.V - 1) * 7), T.y = V.getFullYear(), T.m = V.getMonth(), T.d = V.getDate() + (T.w + 6) % 7);
      } else ("W" in T || "U" in T) && ("w" in T || (T.w = "u" in T ? T.u % 7 : "W" in T ? 1 : 0), O = "Z" in T ? nn(Qe(T.y, 0, 1)).getUTCDay() : tn(Qe(T.y, 0, 1)).getDay(), T.m = 0, T.d = "W" in T ? (T.w + 6) % 7 + T.W * 7 - (O + 5) % 7 : T.w + T.U * 7 - (O + 6) % 7);
      return "Z" in T ? (T.H += T.Z / 100 | 0, T.M += T.Z % 100, nn(T)) : tn(T);
    };
  }
  function D(B, $, z, T) {
    for (var te = 0, V = $.length, O = z.length, ee, oe; te < V; ) {
      if (T >= O) return -1;
      if (ee = $.charCodeAt(te++), ee === 37) {
        if (ee = $.charAt(te++), oe = I[ee in hr ? $.charAt(te++) : ee], !oe || (T = oe(B, z, T)) < 0) return -1;
      } else if (ee != z.charCodeAt(T++))
        return -1;
    }
    return T;
  }
  function y(B, $, z) {
    var T = d.exec($.slice(z));
    return T ? (B.p = u.get(T[0].toLowerCase()), z + T[0].length) : -1;
  }
  function p(B, $, z) {
    var T = x.exec($.slice(z));
    return T ? (B.w = C.get(T[0].toLowerCase()), z + T[0].length) : -1;
  }
  function h(B, $, z) {
    var T = f.exec($.slice(z));
    return T ? (B.w = m.get(T[0].toLowerCase()), z + T[0].length) : -1;
  }
  function R(B, $, z) {
    var T = N.exec($.slice(z));
    return T ? (B.m = w.get(T[0].toLowerCase()), z + T[0].length) : -1;
  }
  function K(B, $, z) {
    var T = g.exec($.slice(z));
    return T ? (B.m = _.get(T[0].toLowerCase()), z + T[0].length) : -1;
  }
  function q(B, $, z) {
    return D(B, t, $, z);
  }
  function H(B, $, z) {
    return D(B, r, $, z);
  }
  function A(B, $, z) {
    return D(B, a, $, z);
  }
  function J(B) {
    return i[B.getDay()];
  }
  function Q(B) {
    return s[B.getDay()];
  }
  function Z(B) {
    return c[B.getMonth()];
  }
  function j(B) {
    return l[B.getMonth()];
  }
  function W(B) {
    return o[+(B.getHours() >= 12)];
  }
  function E(B) {
    return 1 + ~~(B.getMonth() / 3);
  }
  function G(B) {
    return i[B.getUTCDay()];
  }
  function P(B) {
    return s[B.getUTCDay()];
  }
  function k(B) {
    return c[B.getUTCMonth()];
  }
  function b(B) {
    return l[B.getUTCMonth()];
  }
  function L(B) {
    return o[+(B.getUTCHours() >= 12)];
  }
  function Y(B) {
    return 1 + ~~(B.getUTCMonth() / 3);
  }
  return {
    format: function(B) {
      var $ = v(B += "", F);
      return $.toString = function() {
        return B;
      }, $;
    },
    parse: function(B) {
      var $ = M(B += "", !1);
      return $.toString = function() {
        return B;
      }, $;
    },
    utcFormat: function(B) {
      var $ = v(B += "", S);
      return $.toString = function() {
        return B;
      }, $;
    },
    utcParse: function(B) {
      var $ = M(B += "", !0);
      return $.toString = function() {
        return B;
      }, $;
    }
  };
}
var hr = { "-": "", _: " ", 0: "0" }, ue = /^\s*\d+/, uo = /^%/, ho = /[\\^$*+?|[\]().{}]/g;
function ne(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function fo(e) {
  return e.replace(ho, "\\$&");
}
function et(e) {
  return new RegExp("^(?:" + e.map(fo).join("|") + ")", "i");
}
function tt(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function mo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function po(e, t, r) {
  var a = ue.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function go(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function xo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function bo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function fr(e, t, r) {
  var a = ue.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function mr(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function yo(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function ko(e, t, r) {
  var a = ue.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function vo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function pr(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function _o(e, t, r) {
  var a = ue.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function gr(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function So(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function wo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Co(e, t, r) {
  var a = ue.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function jo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function No(e, t, r) {
  var a = uo.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function To(e, t, r) {
  var a = ue.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Bo(e, t, r) {
  var a = ue.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function xr(e, t) {
  return ne(e.getDate(), t, 2);
}
function Fo(e, t) {
  return ne(e.getHours(), t, 2);
}
function Do(e, t) {
  return ne(e.getHours() % 12 || 12, t, 2);
}
function Mo(e, t) {
  return ne(1 + ot.count(Ie(e), e), t, 3);
}
function Hr(e, t) {
  return ne(e.getMilliseconds(), t, 3);
}
function Ro(e, t) {
  return Hr(e, t) + "000";
}
function Io(e, t) {
  return ne(e.getMonth() + 1, t, 2);
}
function Lo(e, t) {
  return ne(e.getMinutes(), t, 2);
}
function $o(e, t) {
  return ne(e.getSeconds(), t, 2);
}
function Ho(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Eo(e, t) {
  return ne(Gt.count(Ie(e) - 1, e), t, 2);
}
function Er(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ge(e) : Ge.ceil(e);
}
function zo(e, t) {
  return e = Er(e), ne(Ge.count(Ie(e), e) + (Ie(e).getDay() === 4), t, 2);
}
function Po(e) {
  return e.getDay();
}
function Ao(e, t) {
  return ne(gt.count(Ie(e) - 1, e), t, 2);
}
function Wo(e, t) {
  return ne(e.getFullYear() % 100, t, 2);
}
function Uo(e, t) {
  return e = Er(e), ne(e.getFullYear() % 100, t, 2);
}
function Oo(e, t) {
  return ne(e.getFullYear() % 1e4, t, 4);
}
function Yo(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Ge(e) : Ge.ceil(e), ne(e.getFullYear() % 1e4, t, 4);
}
function Go(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ne(t / 60 | 0, "0", 2) + ne(t % 60, "0", 2);
}
function br(e, t) {
  return ne(e.getUTCDate(), t, 2);
}
function Vo(e, t) {
  return ne(e.getUTCHours(), t, 2);
}
function qo(e, t) {
  return ne(e.getUTCHours() % 12 || 12, t, 2);
}
function Ko(e, t) {
  return ne(1 + Gn.count(ze(e), e), t, 3);
}
function zr(e, t) {
  return ne(e.getUTCMilliseconds(), t, 3);
}
function Zo(e, t) {
  return zr(e, t) + "000";
}
function Jo(e, t) {
  return ne(e.getUTCMonth() + 1, t, 2);
}
function Xo(e, t) {
  return ne(e.getUTCMinutes(), t, 2);
}
function Qo(e, t) {
  return ne(e.getUTCSeconds(), t, 2);
}
function ei(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function ti(e, t) {
  return ne($r.count(ze(e) - 1, e), t, 2);
}
function Pr(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ve(e) : Ve.ceil(e);
}
function ni(e, t) {
  return e = Pr(e), ne(Ve.count(ze(e), e) + (ze(e).getUTCDay() === 4), t, 2);
}
function ri(e) {
  return e.getUTCDay();
}
function ai(e, t) {
  return ne(xt.count(ze(e) - 1, e), t, 2);
}
function si(e, t) {
  return ne(e.getUTCFullYear() % 100, t, 2);
}
function oi(e, t) {
  return e = Pr(e), ne(e.getUTCFullYear() % 100, t, 2);
}
function ii(e, t) {
  return ne(e.getUTCFullYear() % 1e4, t, 4);
}
function li(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ve(e) : Ve.ceil(e), ne(e.getUTCFullYear() % 1e4, t, 4);
}
function ci() {
  return "+0000";
}
function yr() {
  return "%";
}
function kr(e) {
  return +e;
}
function vr(e) {
  return Math.floor(+e / 1e3);
}
var We, Ar;
ui({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ui(e) {
  return We = co(e), Ar = We.format, We.parse, We.utcFormat, We.utcParse, We;
}
function di(e) {
  return new Date(e);
}
function hi(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Wr(e, t, r, a, o, s, i, l, c, d) {
  var u = Gs(), f = u.invert, m = u.domain, x = d(".%L"), C = d(":%S"), g = d("%I:%M"), _ = d("%I %p"), N = d("%a %d"), w = d("%b %d"), F = d("%B"), S = d("%Y");
  function I(v) {
    return (c(v) < v ? x : l(v) < v ? C : i(v) < v ? g : s(v) < v ? _ : a(v) < v ? o(v) < v ? N : w : r(v) < v ? F : S)(v);
  }
  return u.invert = function(v) {
    return new Date(f(v));
  }, u.domain = function(v) {
    return arguments.length ? m(Array.from(v, hi)) : m().map(di);
  }, u.ticks = function(v) {
    var M = m();
    return e(M[0], M[M.length - 1], v ?? 10);
  }, u.tickFormat = function(v, M) {
    return M == null ? I : d(M);
  }, u.nice = function(v) {
    var M = m();
    return (!v || typeof v.range != "function") && (v = t(M[0], M[M.length - 1], v ?? 10)), v ? m(Vs(M, v)) : u;
  }, u.copy = function() {
    return Os(u, Wr(e, t, r, a, o, s, i, l, c, d));
  }, u;
}
function fi() {
  return ms.apply(Wr(io, lo, Ie, Vn, Gt, ot, Yn, On, Oe, Ar).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function mi({
  task: e,
  scale: t,
  onTaskClick: r,
  onTaskDoubleClick: a,
  isSelected: o = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": c
}) {
  const d = se(null), [u, f] = re(!1), [m, x] = re(!1), C = t(e.start), g = t(e.end), _ = Math.max(g - C, 20), N = () => {
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
  }, w = e.progress ? _ * e.progress / 100 : 0, F = () => {
    r?.(e);
  }, S = () => {
    a?.(e);
  }, I = (R) => {
    R.key === "Enter" ? (R.preventDefault(), F()) : R.key === " " && (R.preventDefault(), S());
  }, v = () => {
    f(!0);
  }, M = () => {
    f(!1);
  }, D = () => {
    x(!0), l?.();
  }, y = () => {
    x(!1);
  }, p = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (m || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), h = {
    "--task-left": `${C}px`,
    "--task-width": `${_}px`,
    "--task-color": N(),
    left: `${C}px`,
    width: `${_}px`,
    backgroundColor: N()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: d,
      "data-task-index": s,
      className: p,
      style: h,
      onClick: F,
      onDoubleClick: S,
      onKeyDown: I,
      onMouseDown: v,
      onMouseUp: M,
      onFocus: D,
      onBlur: y,
      "aria-label": c || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${w}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function pi({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let x = e.getTime(); x <= t.getTime(); x += 864e5)
    a.push(new Date(x));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = re(-1), c = se(null), d = (x) => {
    if (x.key === "ArrowLeft") {
      x.preventDefault();
      const C = Math.max(0, i === -1 ? 0 : i - 1);
      l(C), m(C);
    } else if (x.key === "ArrowRight") {
      x.preventDefault();
      const C = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(C), m(C);
    } else if (x.key === "ArrowDown") {
      x.preventDefault();
      const C = document.querySelector(".gantt-row .timeline-container");
      C && C.focus();
    } else if (x.key === "Home")
      x.preventDefault(), l(0), m(0);
    else if (x.key === "End") {
      x.preventDefault();
      const C = a.length - 1;
      l(C), m(C);
    }
  }, u = (x) => {
    if (x.key === "ArrowDown") {
      x.preventDefault();
      const C = document.querySelector(".gantt-row .resource-label");
      C && C.focus();
    } else if (x.key === "ArrowRight") {
      x.preventDefault();
      const C = c.current;
      C && C.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (x) => {
    const C = c.current?.querySelector(`[data-date-index="${x}"]`);
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
            ref: c,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": r,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: d,
            onFocus: f,
            children: a.map((x, C) => {
              const g = x.getTime() === s.getTime(), _ = i === C;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": C,
                  className: `date-column ${g ? "today" : ""} ${_ ? "focused" : ""}`,
                  tabIndex: _ ? 0 : -1,
                  role: "button",
                  "aria-label": `${x.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
                  onFocus: () => l(C),
                  onKeyDown: d,
                  children: x.toLocaleDateString("en-GB", {
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
function gi({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = re(!1), [d, u] = re(-1), f = se(null);
  le(() => {
    l && d >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${d}"]`)?.focus();
    }, 0);
  }, [l, d, t.length]);
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
          t.length > 0 && (g.preventDefault(), c(!0), u(0));
          break;
      }
      return;
    }
    switch (g.key) {
      case "ArrowLeft":
        g.preventDefault();
        const _ = Math.max(0, d - 1);
        u(_), f.current?.querySelector(`[data-task-index="${_}"]`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault();
        const w = Math.min(t.length - 1, d + 1);
        u(w), f.current?.querySelector(`[data-task-index="${w}"]`)?.focus();
        break;
      case "Enter":
        g.preventDefault(), d >= 0 && a?.(t[d]);
        break;
      case " ":
        g.preventDefault(), d >= 0 && o?.(t[d]);
        break;
      case "Escape":
        g.preventDefault(), c(!1), u(-1), f.current?.focus();
        break;
    }
  }, x = (g) => {
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
            onKeyDown: x,
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
            children: t.map((g, _) => /* @__PURE__ */ n.jsx(
              mi,
              {
                task: g,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && d === _,
                taskIndex: _,
                tabIndex: l && d === _ ? 0 : -1,
                onFocus: () => C(_)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function Id({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = se(null), [l, c] = re(800), d = ie(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const g = new Date(r);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [r]), u = ie(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const g = new Date(a);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [a]), f = ie(() => Math.ceil((u.getTime() - d.getTime()) / 864e5) + 1, [d, u]);
  le(() => {
    if (!i.current) return;
    const g = new ResizeObserver((_) => {
      const N = _[0];
      N && c(Math.max(N.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const m = ie(
    () => fi().domain([d, u]).range([0, l]),
    [d, u, l]
  ), x = ie(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((_) => {
      const N = g.get(_.resourceId) || [];
      N.push(_), g.set(_.resourceId, N);
    }), g;
  }, [t]), C = (g) => {
    if (g.target === g.currentTarget)
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault();
          const _ = i.current?.querySelector(".gantt-row .resource-label");
          _ && _.focus();
          break;
        case "Home":
          g.preventDefault();
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
      "aria-colcount": f + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: C,
      children: [
        /* @__PURE__ */ n.jsx(pi, { viewStart: d, viewEnd: u, dateCount: f }),
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
              gi,
              {
                resource: g,
                tasks: x.get(g.id) || [],
                scale: m,
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
const bt = ({
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
) }), xi = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? $e.Children.toArray(t).filter(
    (N) => $e.isValidElement(N) && (N.type === bt || N.type?.displayName === "BreadcrumbItem")
  ).map((N) => ({
    text: typeof N.props.children == "string" ? N.props.children : String(N.props.children),
    href: N.props.href,
    active: N.props.active,
    attributes: N.props.attributes
  })) : [], d = () => t ? c() : o && s ? [{ href: o, text: s }] : e, u = () => {
    const _ = d();
    if (_ && _.length > 0) {
      const N = _.slice().reverse().find((w) => w.href && !w.active);
      if (N)
        return { href: N.href, text: N.text };
    }
    return { text: "Home" };
  }, f = d(), m = u(), x = U(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), g = f && f.length > 1 ? a : void 0;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: x,
      "aria-label": g,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          $e.Children.map(t, (_, N) => $e.isValidElement(_) && (_.type === bt || _.type?.displayName === "BreadcrumbItem") ? $e.cloneElement(_, { key: N }) : null)
        ) : (
          // Render from items array
          f?.map((_, N) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: _.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ..._.attributes || {},
              children: _.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: _.href,
              role: "link",
              ..._.attributes || {},
              children: _.text
            }
          ) }, N))
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
}, bi = xi;
bi.Item = bt;
bt.displayName = "BreadcrumbItem";
const Ur = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [o, s] = re(!1);
  le(() => {
    s(!0);
  }, []), le(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (c) => {
      const d = c.target, u = d.getAttribute("href");
      if (u && u.startsWith("#")) {
        const f = document.querySelector(u);
        if (f) {
          f.hasAttribute("tabindex") || f.setAttribute("tabindex", "-1"), f.focus(), f.classList.add("nhsuk-skip-link-focused-element");
          const m = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
          }, 3e3);
          d.__nhsSkipLinkTimeout = m;
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
  }, [o]);
  const i = U("nhsuk-skip-link", r);
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
}, Ld = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = U("nhsuk-pagination", o);
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
}, $d = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = U("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, Hd = ({
  variant: e = "default",
  heading: t,
  headingHtml: r,
  headingLevel: a = 2,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  href: l,
  imgURL: c,
  imgAlt: d,
  className: u,
  children: f,
  "data-testid": m,
  id: x,
  "aria-label": C,
  "aria-labelledby": g,
  "aria-describedby": _
}) => {
  const N = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    u
  ].filter(Boolean).join(" "), w = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), F = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), S = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const M = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Me,
      {
        level: a,
        className: F,
        children: M()
      }
    );
  }, I = () => f || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null), v = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      className: N,
      "data-testid": m,
      id: x,
      "aria-label": C,
      "aria-labelledby": g,
      "aria-describedby": _,
      children: [
        c && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: d || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: w, children: [
          S(),
          I(),
          v()
        ] })
      ]
    }
  );
}, Ed = ({
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
}, zd = ({
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
}, Pd = ({
  type: e,
  heading: t,
  headingHtml: r,
  headingLevel: a = 3,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  className: l,
  children: c,
  "data-testid": d,
  id: u,
  "aria-label": f,
  "aria-labelledby": m,
  "aria-describedby": x
}) => {
  const C = [
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
    const w = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], F = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        w,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Me,
      {
        level: a,
        className: g,
        children: F
      }
    );
  }, N = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: C,
      "data-testid": d,
      id: u,
      "aria-label": f,
      "aria-labelledby": m,
      "aria-describedby": x,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          _(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: N() })
      ]
    }
  );
}, yi = ({
  id: e,
  className: t,
  headingText: r,
  headingHtml: a,
  headingLevel: o = 2,
  bodyText: s,
  bodyHtml: i,
  children: l,
  ...c
}) => {
  const d = U(
    "nhsuk-panel",
    t
  ), u = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Me,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Me,
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
  return /* @__PURE__ */ n.jsxs("div", { className: d, id: e, ...c, children: [
    u(),
    f()
  ] });
}, Ad = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = U("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, Wd = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = U(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((c, d) => /* @__PURE__ */ n.jsx(
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
            s(c),
            c.visuallyHiddenText && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: c.visuallyHiddenText })
          ]
        }
      )
    },
    d
  )) }) });
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: o, ...a, children: e.map((l, c) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, c)) }) });
}, Ud = ({
  rows: e,
  head: t,
  caption: r,
  captionSize: a,
  firstCellIsHeader: o = !1,
  responsive: s = !1,
  heading: i,
  headingLevel: l = 3,
  panel: c = !1,
  panelClasses: d,
  tableClasses: u,
  classes: f,
  attributes: m,
  "data-testid": x
}) => {
  const C = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), g = U(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), _ = U(f), N = (S, I) => {
    const v = U("nhsuk-table__header", {
      [`nhsuk-table__header--${S.format}`]: S.format
    }, S.classes), M = {
      scope: "col",
      ...S.colspan && { colSpan: S.colspan },
      ...S.rowspan && { rowSpan: S.rowspan },
      ...s && { role: "columnheader" },
      ...S.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: v, ...M, children: S.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text }, I);
  }, w = (S, I, v) => {
    const M = o && v, D = U(
      M ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${M ? "header" : "cell"}--${S.format}`]: S.format
      },
      S.classes
    ), y = {
      ...M && { scope: "row" },
      ...S.colspan && { colSpan: S.colspan },
      ...S.rowspan && { rowSpan: S.rowspan },
      ...s && {
        role: M ? "rowheader" : "cell",
        ...S.header && { "data-label": S.header }
      },
      ...S.attributes
    }, p = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && S.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        S.header,
        " "
      ] }),
      S.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text
    ] }), h = M ? "th" : "td";
    return /* @__PURE__ */ n.jsx(h, { className: D, ...y, children: p }, I);
  }, F = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: g,
      ...s && { role: "table" },
      ...m,
      ...x && { "data-testid": x },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: C, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((S, I) => N(S, I)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((S, I) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: S.map(
              (v, M) => w(v, M, M === 0)
            )
          },
          I
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(yi, { className: d, children: [
    i && /* @__PURE__ */ n.jsx(Me, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    F()
  ] }) : _ ? /* @__PURE__ */ n.jsx("div", { className: _, children: F() }) : F();
}, Od = qe(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
  onTabChange: a,
  onTabFocus: o,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: c,
  id: d,
  "data-testid": u,
  ...f
}, m) => {
  const x = r !== void 0, [C, g] = re(() => t || e[0]?.id || ""), _ = x ? r : C, N = se(null), w = se(/* @__PURE__ */ new Map()), F = X((p) => {
    x || g(p), a?.(p);
  }, [x, a]), S = X((p) => {
    o?.(p), l && F(p);
  }, [o, l, F]), I = X((p, h) => {
    const R = e.filter((H) => !H.disabled).map((H) => H.id), K = R.indexOf(h);
    let q = null;
    switch (p.key) {
      case "ArrowLeft":
        q = K > 0 ? K - 1 : R.length - 1;
        break;
      case "ArrowRight":
        q = K < R.length - 1 ? K + 1 : 0;
        break;
      case "Home":
        q = 0;
        break;
      case "End":
        q = R.length - 1;
        break;
      case "Escape":
        p.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (q !== null) {
      p.preventDefault();
      const H = R[q], A = w.current.get(H);
      A && (A.focus(), S(H));
    }
  }, [e, S, i]), v = X((p, h) => {
    h ? w.current.set(p, h) : w.current.delete(p);
  }, []), M = X((p) => {
    const h = w.current.get(p);
    h && h.focus();
  }, []);
  wr(m, () => ({
    focusTab: M,
    getActiveTab: () => _,
    getTabListElement: () => N.current
  }), [M, _]);
  const D = X((p) => {
    const h = p.relatedTarget;
    N.current?.contains(h) || s?.();
  }, [s]), y = U("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: y,
      id: d,
      "data-testid": u,
      ...f,
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
                onBlur: D,
                children: e.map((p) => {
                  const h = p.id === _, R = p.disabled, K = U("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": h,
                    "nhsuk-tabs__list-item--disabled": R
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: K, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (q) => v(p.id, q),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": h,
                      "aria-controls": `${p.id}-panel`,
                      id: `${p.id}-tab`,
                      tabIndex: h ? 0 : -1,
                      disabled: R,
                      onClick: () => !R && F(p.id),
                      onKeyDown: (q) => !R && I(q, p.id),
                      onFocus: () => !R && S(p.id),
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
          const h = p.id === _;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${p.id}-tab`,
              id: `${p.id}-panel`,
              hidden: !h,
              children: p.content
            },
            p.id
          );
        })
      ]
    }
  );
}), ki = qe(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...c
  }, d) => {
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
        ref: d,
        id: i,
        className: u,
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
ki.displayName = "Details";
const vi = qe(
  ({
    title: e,
    type: t,
    items: r,
    hidePrefix: a = !1,
    headingLevel: o = 3,
    className: s,
    ...i
  }, l) => {
    const c = ["nhsuk-do-dont-list"];
    s && c.push(s);
    const d = [
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
    ), f = (x) => t === "cross" && !a ? `do not ${x}` : x, m = () => /* @__PURE__ */ n.jsx(
      Me,
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
        className: c.join(" "),
        ...i,
        children: [
          m(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: d.join(" "), role: "list", children: r.map((x, C) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            f(x.item)
          ] }, C)) }) })
        ]
      }
    );
  }
);
vi.displayName = "DoDontList";
const _i = qe(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...c
  }, d) => {
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
        ref: d,
        id: i,
        className: u,
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
_i.displayName = "Expander";
const Si = qe(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const d = c + 1, u = `${t}-${d}-hint`, f = `${t}-${d}-status`, m = !!l.href, x = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), C = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        wi,
        {
          item: l,
          itemClasses: x,
          hasLink: m,
          hintId: u,
          statusId: f,
          ariaDescribedBy: C
        },
        c
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
), wi = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const d = e.title.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, u = [
      r ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: u,
        href: e.href,
        "aria-describedby": s,
        children: d
      }
    ) : /* @__PURE__ */ n.jsx("div", { className: e.title.classes || "", children: d });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ n.jsx(
    "div",
    {
      id: a,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ n.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, c = () => {
    const d = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let u;
    return e.status.tag ? u = /* @__PURE__ */ n.jsx(Mn, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ n.jsx("div", { className: d, id: o, children: u });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
Si.displayName = "TaskList";
const Yd = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: a,
  children: o,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), c = () => o || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), d = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: d,
      ...i,
      children: [
        Sr(
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
}, Gd = ({
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
}, Ci = ({
  title: e,
  value: t,
  subtitle: r,
  variant: a = "default",
  href: o,
  className: s = "",
  ariaLabel: i,
  ...l
}) => {
  const c = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    s
  ].filter(Boolean).join(" "), d = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Me, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    r && /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: r })
  ] });
  return o ? /* @__PURE__ */ n.jsx(
    "a",
    {
      className: `${c} nhs-fdp-summary-card--clickable`,
      href: o,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: d
    }
  ) : /* @__PURE__ */ n.jsx(
    "div",
    {
      className: c,
      "aria-label": i,
      ...l,
      children: d
    }
  );
}, Vd = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(Xa, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    Hn,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      children: /* @__PURE__ */ n.jsx(Ci, { ...o })
    },
    s
  )) }) });
}, ji = $e.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: r,
    onSort: a,
    selectedRowIndex: o,
    onRowSelect: s,
    id: i,
    testId: l,
    ariaLabel: c,
    ariaLabelledby: d,
    ariaDescribedby: u,
    className: f,
    tableClassName: m,
    bordered: x = !1,
    striped: C = !1,
    responsive: g = !1,
    tableType: _ = "default"
  }, N) => {
    const w = se(null), F = se(null), S = se(null);
    $e.useImperativeHandle(N, () => w.current, []);
    const [I, v] = re(0), [M, D] = re(0), [y, p] = re("headers"), [h, R] = re("browse"), K = t.length, q = e.length, H = ie(() => !r || r.length === 0 ? e : [...e].sort((E, G) => {
      for (const { key: P, direction: k } of r) {
        const b = E[P], L = G[P];
        if (b == null && L == null) continue;
        if (b == null) return 1;
        if (L == null) return -1;
        let Y = 0;
        if (typeof b == "number" && typeof L == "number" ? Y = b - L : Y = String(b).localeCompare(String(L)), Y !== 0)
          return k === "asc" ? Y : -Y;
      }
      return 0;
    }), [e, r]), A = X((E, G) => {
      setTimeout(() => {
        const P = w.current?.querySelector(
          `tbody tr:nth-child(${E + 1}) td:nth-child(${G + 1})`
        );
        P && (P.focus(), typeof P.scrollIntoView == "function" && P.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), J = X((E) => {
      setTimeout(() => {
        const G = w.current?.querySelector(`th:nth-child(${E + 1})`);
        G && (G.focus(), typeof G.scrollIntoView == "function" && G.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Q = X((E) => {
      a?.(E);
    }, [a]), Z = X((E) => {
      s?.(E);
    }, [s]), j = X((E) => {
      const { key: G } = E;
      switch (G) {
        case "Enter":
          if (E.preventDefault(), y === "headers" && h === "browse")
            R("navigate"), J(M);
          else if (y === "headers" && h === "navigate") {
            const P = t[M];
            P && Q(P.key);
          } else y === "cells" && h === "browse" ? (R("navigate"), A(I, M)) : y === "cells" && h === "navigate" && Z(I);
          break;
        case "Escape":
          E.preventDefault(), (y === "headers" && h === "navigate" || y === "cells" && h === "navigate") && R("browse");
          break;
        case "ArrowLeft":
          if (E.preventDefault(), h === "navigate" || h === "browse" && y === "headers") {
            if (y === "headers") {
              const P = Math.max(0, M - 1);
              D(P), J(P);
            } else if (y === "cells") {
              const P = Math.max(0, M - 1);
              D(P), A(I, P);
            }
          }
          break;
        case "ArrowRight":
          if (E.preventDefault(), h === "navigate" || h === "browse" && y === "headers") {
            if (y === "headers") {
              const P = Math.min(K - 1, M + 1);
              D(P), J(P);
            } else if (y === "cells") {
              const P = Math.min(K - 1, M + 1);
              D(P), A(I, P);
            }
          }
          break;
        case "ArrowUp":
          if (E.preventDefault(), y === "cells") {
            if (h === "browse") {
              const P = Math.max(0, I - 1);
              v(P), A(P, 0), D(0);
            } else if (h === "navigate")
              if (I > 0) {
                const P = I - 1;
                v(P), A(P, M);
              } else
                p("headers"), R("browse"), J(M);
          }
          break;
        case "ArrowDown":
          if (E.preventDefault(), y === "headers" && h === "browse")
            p("cells"), v(0), D(0), A(0, 0);
          else if (y === "cells") {
            const P = q - 1;
            if (h === "browse") {
              const k = Math.min(P, I + 1);
              v(k), A(k, 0), D(0);
            } else if (h === "navigate" && I < P) {
              const k = I + 1;
              v(k), A(k, M);
            }
          }
          break;
        case "Home":
          E.preventDefault(), y === "headers" ? (D(0), J(0)) : y === "cells" && (E.ctrlKey ? (v(0), D(0), A(0, 0)) : (D(0), A(I, 0)));
          break;
        case "End":
          if (E.preventDefault(), y === "headers") {
            const P = K - 1;
            D(P), J(P);
          } else if (y === "cells")
            if (E.ctrlKey) {
              const P = q - 1, k = K - 1;
              v(P), D(k), A(P, k);
            } else {
              const P = K - 1;
              D(P), A(I, P);
            }
          break;
        case " ":
          if (E.preventDefault(), y === "headers" && h === "navigate") {
            const P = t[M];
            P && Q(P.key);
          } else y === "cells" && h === "navigate" && Z(I);
          break;
      }
    }, [
      y,
      h,
      M,
      I,
      K,
      q,
      t,
      A,
      J,
      Q,
      Z
    ]);
    le(() => {
      const E = w.current;
      if (E)
        return E.addEventListener("keydown", j), () => E.removeEventListener("keydown", j);
    }, [j]);
    const W = U(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": x,
        "nhsuk-table--striped": C,
        "nhsuk-table--compact": _ === "compact"
      },
      f
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: w,
        className: W,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": d,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: F, role: "row", children: t.map((E, G) => {
            const P = r?.find((L) => L.key === E.key), k = !!P, b = y === "headers" && M === G;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: U("sortable-header", {
                  "sortable-header--focused": b
                }),
                role: "columnheader",
                tabIndex: b ? 0 : -1,
                onClick: () => Q(E.key),
                onKeyDown: (L) => {
                  (L.key === "Enter" || L.key === " ") && (L.preventDefault(), Q(E.key));
                },
                "aria-sort": k ? P?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: E.label }),
                  k && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((L) => L.key === E.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: P?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              E.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: S, className: "nhsuk-table__body", role: "rowgroup", children: H.map((E, G) => {
            const P = o === G, k = y === "cells" && I === G;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: U("data-row", {
                  "data-row--selected": P,
                  "data-row--focused": k
                }),
                "aria-selected": P,
                children: t.map((b, L) => {
                  const Y = b.render ? b.render(E) : E[b.key], B = y === "cells" && I === G && M === L, $ = () => typeof Y == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: Y ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: Y ? "Yes" : "No" })
                  ] }) : String(Y ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: U("data-cell", {
                        "data-cell--focused": B
                      }),
                      tabIndex: B ? 0 : -1,
                      onClick: () => Z(G),
                      children: $()
                    },
                    b.key
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
ji.displayName = "AriaDataGrid";
const Ni = ({
  sortConfig: e,
  columns: t,
  onSortChange: r,
  className: a = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: c = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const f = se(null), m = se(null), x = se(null), C = X((y, p) => {
    c || (m.current = p, y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", p));
  }, [c]), g = X((y, p) => {
    c || m.current === p || (y.preventDefault(), y.dataTransfer.dropEffect = "move", x.current = p);
  }, [c]), _ = X((y, p) => {
    if (c) return;
    y.preventDefault();
    const h = m.current;
    if (!h || h === p) return;
    const R = e.findIndex((q) => q.key === h), K = e.findIndex((q) => q.key === p);
    if (R !== -1 && K !== -1) {
      const q = [...e], [H] = q.splice(R, 1);
      q.splice(K, 0, H), r(q);
    }
    m.current = null, x.current = null;
  }, [c, e, r]), N = X(() => {
    m.current = null, x.current = null;
  }, []), w = X((y) => {
    const p = t.find((h) => h.key === y);
    return p ? p.label : y;
  }, [t]), F = X((y) => ["red", "orange", "blue", "aqua-green", "grey"][y] || "grey", []), S = X((y) => {
    if (c) return;
    const p = e.map(
      (h) => h.key === y ? { ...h, direction: h.direction === "asc" ? "desc" : "asc" } : h
    );
    r(p);
  }, [e, r, c]), I = X((y) => {
    if (c) return;
    const p = e.filter((h) => h.key !== y);
    r(p);
  }, [e, r, c]), v = X(() => {
    c || r([]);
  }, [r, c]), M = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const y = e.map((p, h) => {
      const R = p.direction === "asc" ? "ascending" : "descending";
      return `${h + 1}. ${w(p.key)} (${R})`;
    });
    if (y.length === 1)
      return `Sorted by: ${y[0]}`;
    if (y.length === 2)
      return `Sorted by: ${y.join(" and ")}`;
    {
      const p = y.pop();
      return `Sorted by: ${y.join(", ")}, and ${p}`;
    }
  }, D = ie(() => {
    const y = ["sort-description"];
    return l && y.push("sort-help"), u && y.push(u), y.join(" ");
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
        children: M()
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: f,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": d,
          "aria-describedby": D,
          children: e.map((y, p) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (h) => C(h, y.key),
              onDragOver: (h) => g(h, y.key),
              onDrop: (h) => _(h, y.key),
              onDragEnd: N,
              onClick: () => S(y.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": y.key,
              children: /* @__PURE__ */ n.jsx(
                Mn,
                {
                  color: F(p),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => I(y.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${p + 1}`, children: p + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: w(y.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (h) => {
                          h.stopPropagation(), S(y.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${w(y.key)}. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
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
        Dn,
        {
          variant: "secondary",
          onClick: v,
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
function Ti(e, t) {
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
      const { newLength: s } = t.payload, i = new Array(s).fill(!1), l = new Array(s).fill(null), c = new Array(s).fill([]);
      for (let d = 0; d < Math.min(e.tabLoadingStates.length, s); d++)
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
const _r = qe(
  function(t, r) {
    const {
      dataConfig: a = {},
      tabPanels: o,
      selectedIndex: s,
      onTabChange: i,
      onGlobalRowSelectionChange: l,
      ariaLabel: c,
      ariaDescription: d,
      className: u = "",
      disabled: f = !1,
      orientation: m = "horizontal",
      id: x,
      isLoading: C = !1,
      loadingComponent: g,
      error: _ = null,
      errorComponent: N,
      "data-testid": w
    } = t, {
      dataComparator: F = (k, b) => JSON.stringify(k) === JSON.stringify(b),
      filterFunction: S = (k) => k,
      booleanRenderer: I = (k) => k ? "✓" : "✗"
    } = a || {}, v = s !== void 0, M = s ?? 0, [D, y] = re({
      focusArea: "tabs",
      focusedTabIndex: M,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), p = ie(() => ({
      selectedIndex: M,
      tabLoadingStates: new Array(o.length).fill(!1),
      tabErrors: new Array(o.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(o.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [M]), [h, R] = Pa(Ti, p);
    le(() => {
      const k = h.tabLoadingStates.length, b = o.length;
      k !== b && R({ type: "ADJUST_ARRAYS", payload: { newLength: b } });
    }, [o.length]), le(() => {
      v && R({ type: "SET_SELECTED_INDEX", payload: M });
    }, [M, v]), le(() => {
      l && l(h.globalSelectedRowData);
    }, [h.globalSelectedRowData, l]);
    const K = X((k, b) => F(k, b), [F]), q = X((k) => {
      k >= 0 && k < o.length && !o[k].disabled && (R({ type: "SET_SELECTED_INDEX", payload: k }), i?.(k));
    }, [o, i]), H = X((k, b) => {
      const { key: L } = k;
      switch (L) {
        case "ArrowLeft":
          k.preventDefault();
          const Y = b > 0 ? b - 1 : o.length - 1;
          q(Y), y((z) => ({ ...z, focusedTabIndex: Y })), A.current[Y]?.focus();
          break;
        case "ArrowRight":
          k.preventDefault();
          const B = b < o.length - 1 ? b + 1 : 0;
          q(B), y((z) => ({ ...z, focusedTabIndex: B })), A.current[B]?.focus();
          break;
        case "ArrowDown":
          k.preventDefault(), y((z) => ({
            ...z,
            focusArea: "headers",
            focusedHeaderIndex: 0
          })), Z(0);
          break;
        case "Home":
          k.preventDefault(), q(0), y((z) => ({ ...z, focusedTabIndex: 0 })), A.current[0]?.focus();
          break;
        case "End":
          k.preventDefault();
          const $ = o.length - 1;
          q($), y((z) => ({ ...z, focusedTabIndex: $ })), A.current[$]?.focus();
          break;
        case "Enter":
        case " ":
          k.preventDefault(), q(b);
          break;
      }
    }, [o.length, q]), A = se([]), J = se([]), Q = X((k, b) => {
      const L = h.sortConfig || [], Y = L.find((z) => z.key === b);
      let B;
      Y ? Y.direction === "asc" ? B = L.map(
        (z) => z.key === b ? { ...z, direction: "desc" } : z
      ) : B = L.filter((z) => z.key !== b) : B = [...L, { key: b, direction: "asc" }], R({
        type: "SET_SORT",
        payload: B
      }), o[k].onSort?.(b);
    }, [h.sortConfig, o]), Z = X((k) => {
      setTimeout(() => {
        const b = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] th:nth-child(${k + 1})`
        );
        b && b.focus();
      }, 0);
    }, [h.selectedIndex]), j = X((k) => I(k), [I]), W = X((k, b) => {
      setTimeout(() => {
        const L = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] tbody tr:nth-child(${k + 1}) td:nth-child(${b + 1})`
        );
        L && L.focus();
      }, 0);
    }, [h.selectedIndex]), E = X((k, b) => {
      const { key: L } = k, Y = o[h.selectedIndex], B = Y?.columns.length || 0;
      switch (L) {
        case "ArrowLeft":
          k.preventDefault();
          const $ = Math.max(0, b - 1);
          y((V) => ({ ...V, focusedHeaderIndex: $ })), Z($);
          break;
        case "ArrowRight":
          k.preventDefault();
          const z = Math.min(B - 1, b + 1);
          y((V) => ({ ...V, focusedHeaderIndex: z })), Z(z);
          break;
        case "ArrowUp":
          k.preventDefault(), y((V) => ({
            ...V,
            focusArea: "tabs",
            focusedTabIndex: h.selectedIndex
          })), A.current[h.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          k.preventDefault(), y((V) => ({
            ...V,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: b,
            isGridActive: !0
          })), W(0, b);
          break;
        case "Home":
          k.preventDefault(), y((V) => ({ ...V, focusedHeaderIndex: 0 })), Z(0);
          break;
        case "End":
          k.preventDefault();
          const T = B - 1;
          y((V) => ({ ...V, focusedHeaderIndex: T })), Z(T);
          break;
        case "Enter":
        case " ":
          k.preventDefault();
          const te = Y?.columns[b]?.key;
          te && Q(h.selectedIndex, te);
          break;
      }
    }, [o, h.selectedIndex, Q, y, Z, W, A]), G = X((k, b, L) => {
      const { key: Y } = k, B = o[h.selectedIndex], $ = B?.data.length || 0, z = B?.columns.length || 0;
      switch (Y) {
        case "ArrowUp":
          if (k.preventDefault(), b === 0)
            y((O) => ({
              ...O,
              focusArea: "headers",
              focusedHeaderIndex: L,
              isGridActive: !1
            })), Z(L);
          else {
            const O = b - 1;
            y((ee) => ({ ...ee, focusedRowIndex: O })), W(O, L);
          }
          break;
        case "ArrowDown":
          k.preventDefault();
          const T = Math.min($ - 1, b + 1);
          y((O) => ({ ...O, focusedRowIndex: T })), W(T, L);
          break;
        case "ArrowLeft":
          k.preventDefault();
          const te = Math.max(0, L - 1);
          y((O) => ({ ...O, focusedColumnIndex: te })), W(b, te);
          break;
        case "ArrowRight":
          k.preventDefault();
          const V = Math.min(z - 1, L + 1);
          y((O) => ({ ...O, focusedColumnIndex: V })), W(b, V);
          break;
        case "Home":
          k.preventDefault(), k.ctrlKey ? (y((O) => ({ ...O, focusedRowIndex: 0, focusedColumnIndex: 0 })), W(0, 0)) : (y((O) => ({ ...O, focusedColumnIndex: 0 })), W(b, 0));
          break;
        case "End":
          if (k.preventDefault(), k.ctrlKey) {
            const O = $ - 1, ee = z - 1;
            y((oe) => ({ ...oe, focusedRowIndex: O, focusedColumnIndex: ee })), W(O, ee);
          } else {
            const O = z - 1;
            y((ee) => ({ ...ee, focusedColumnIndex: O })), W(b, O);
          }
          break;
        case "Enter":
        case " ":
          if (k.preventDefault(), B && B.data[b]) {
            const O = B.data.some((ae) => "ews_data" in ae) ? S(B.data, h.filters) : B.data, ee = h.sortConfig;
            let oe = O;
            if (ee && ee.length > 0 && (oe = [...O].sort((ae, de) => {
              for (const { key: xe, direction: Ke } of ee) {
                let pe = ae[xe], ye = de[xe];
                const Vt = B.columns.find(($a) => $a.key === xe);
                if (Vt?.render && (pe = Vt.render(ae), ye = Vt.render(de)), pe == null && ye == null) continue;
                if (pe == null) return Ke === "asc" ? -1 : 1;
                if (ye == null) return Ke === "asc" ? 1 : -1;
                let Ze = 0;
                if (typeof pe == "number" && typeof ye == "number" ? Ze = pe - ye : Ze = String(pe).localeCompare(String(ye), void 0, { numeric: !0, sensitivity: "base" }), Ze !== 0)
                  return Ke === "asc" ? Ze : -Ze;
              }
              return 0;
            })), oe[b]) {
              const ae = oe[b], xe = h.globalSelectedRowData && K(h.globalSelectedRowData, ae) ? null : ae;
              R({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: xe
              });
            }
          }
          break;
      }
    }, [o, h.selectedIndex, h.filters, h.sortConfig, S, K, R, y, Z, W]), P = X((k, b) => S(k, b), [S]);
    return wr(r, () => ({
      selectTab: (k) => {
        k >= 0 && k < o.length && (R({ type: "SET_SELECTED_INDEX", payload: k }), i?.(k));
      },
      refreshData: (k) => {
        console.log("Refreshing data for tab:", k ?? "all");
      },
      exportData: (k) => {
        const b = k ?? h.selectedIndex, L = o[b];
        return L ? L.data : [];
      },
      getSelectedRows: (k) => h.globalSelectedRowData ? [] : [],
      clearSelection: (k) => {
        R({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (k) => {
        R({ type: "SET_FILTERS", payload: k });
      }
    }), [h.selectedIndex, h.selectedRows, o, i]), C ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`, "data-testid": w, children: g || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : _ ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`, "data-testid": w, children: N || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: _ })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${u}`,
        id: x,
        "data-testid": w,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${x}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Ni,
            {
              sortConfig: h.sortConfig || [],
              columns: o.flatMap(
                (k) => k.columns.map((b) => ({ key: b.key, label: b.label }))
              ).filter(
                (k, b, L) => L.findIndex((Y) => Y.key === k.key) === b
                // Remove duplicates
              ),
              onSortChange: (k) => {
                R({ type: "SET_SORT", payload: k });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": `${d || ""} ${x ? `${x}-navigation-help` : ""}`.trim(),
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              children: o.map((k, b) => {
                const L = b === h.selectedIndex, Y = k.disabled || f;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${k.id}`,
                    "aria-controls": `panel-${k.id}`,
                    "aria-selected": L,
                    "aria-disabled": Y,
                    tabIndex: L ? 0 : -1,
                    ref: (B) => {
                      A.current[b] = B;
                    },
                    onClick: () => q(b),
                    onKeyDown: (B) => H(B, b),
                    disabled: Y,
                    className: `
                  aria-tabs-datagrid__tab
                  ${L ? "aria-tabs-datagrid__tab--selected" : ""}
                  ${Y ? "aria-tabs-datagrid__tab--disabled" : ""}
                `.trim(),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: k.label }),
                      h.tabLoadingStates[b] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      h.tabErrors[b] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  k.id
                );
              })
            }
          ),
          o.map((k, b) => {
            const L = b === h.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${k.id}`,
                "aria-labelledby": `tab-${k.id}`,
                tabIndex: 0,
                hidden: !L,
                ref: (Y) => {
                  J.current[b] = Y;
                },
                className: `aria-tabs-datagrid__panel ${k.className || ""}`,
                "data-tab-panel": b,
                children: L && (() => {
                  const Y = k.data.some(($) => "ews_data" in $) ? P(k.data, h.filters) : k.data, B = ie(() => {
                    const $ = h.sortConfig;
                    return !$ || $.length === 0 ? Y : [...Y].sort((z, T) => {
                      for (const { key: te, direction: V } of $) {
                        let O = z[te], ee = T[te];
                        const oe = k.columns.find((de) => de.key === te);
                        if (oe?.render && (O = oe.render(z), ee = oe.render(T)), O == null && ee == null) continue;
                        if (O == null) return 1;
                        if (ee == null) return -1;
                        let ae = 0;
                        if (typeof O == "number" && typeof ee == "number" ? ae = O - ee : typeof O == "boolean" && typeof ee == "boolean" ? ae = O === ee ? 0 : O ? 1 : -1 : ae = String(O).localeCompare(String(ee), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), ae !== 0)
                          return V === "asc" ? ae : -ae;
                      }
                      return 0;
                    });
                  }, [Y, h.sortConfig, k.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": k.ariaLabel,
                      "aria-describedby": k.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: k.columns.map(($, z) => {
                          const T = h.sortConfig?.find((O) => O.key === $.key), te = !!T, V = D.focusArea === "headers" && D.focusedHeaderIndex === z;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${V ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: V ? 0 : -1,
                              onClick: () => Q(b, $.key),
                              onKeyDown: (O) => E(O, z),
                              "aria-sort": te ? T?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: $.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${te ? `sort-indicator--${T?.direction}` : ""}`, children: [
                                  h.sortConfig && h.sortConfig.length > 0 && h.sortConfig.findIndex((O) => O.key === $.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${h.sortConfig.findIndex((O) => O.key === $.key) + 1}`,
                                      "data-priority": h.sortConfig.findIndex((O) => O.key === $.key) + 1,
                                      title: `Sort priority: ${h.sortConfig.findIndex((O) => O.key === $.key) + 1}`,
                                      children: h.sortConfig.findIndex((O) => O.key === $.key) + 1
                                    }
                                  ),
                                  te && /* @__PURE__ */ n.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${T?.direction}`,
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
                            $.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: B.map(($, z) => {
                          const T = h.globalSelectedRowData && K(h.globalSelectedRowData, $), te = D.focusArea === "cells" && D.focusedRowIndex === z;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${T ? "data-row--selected" : ""} ${te ? "data-row--focused" : ""}`,
                              "aria-selected": T,
                              children: k.columns.map((V, O) => {
                                const ee = V.render ? V.render($) : $[V.key], oe = D.focusArea === "cells" && D.focusedRowIndex === z && D.focusedColumnIndex === O, ae = () => typeof ee == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  j(ee),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ee ? "Yes" : "No" })
                                ] }) : String(ee ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${oe ? "data-cell--focused" : ""}`,
                                    tabIndex: oe ? 0 : -1,
                                    onClick: () => {
                                      const xe = h.globalSelectedRowData && K(h.globalSelectedRowData, $) ? null : $;
                                      R({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: xe
                                      });
                                    },
                                    onKeyDown: (de) => G(de, z, O),
                                    children: ae()
                                  },
                                  V.key
                                );
                              })
                            },
                            z
                          );
                        }) })
                      ]
                    }
                  );
                })()
              },
              k.id
            );
          })
        ]
      }
    );
  }
);
function Bi(e, t) {
  const [r, a] = re("cards");
  return le(() => {
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
const qd = ({
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
  experimental: a = {},
  ...o
}) => {
  const s = Bi(e, t), {
    primaryField: i = o.tabPanels[0]?.columns[0]?.key,
    secondaryFields: l = o.tabPanels[0]?.columns.slice(1, 3).map((f) => f.key) || [],
    badgeFields: c = [],
    hiddenFields: d = [],
    cardTemplate: u
  } = r;
  return s === "cards" ? /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${o.className || ""}`, children: [
    /* @__PURE__ */ n.jsx("div", { role: "tablist", className: "aria-tabs-datagrid-adaptive__tabs", children: o.tabPanels.map((f, m) => /* @__PURE__ */ n.jsx(
      "button",
      {
        role: "tab",
        className: `aria-tabs-datagrid-adaptive__tab ${m === 0 ? "aria-tabs-datagrid-adaptive__tab--selected" : ""}`,
        children: f.label
      },
      f.id
    )) }),
    /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__cards", role: "grid", children: o.tabPanels[0]?.data.map((f, m) => /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "aria-tabs-datagrid-adaptive__card",
        role: "gridcell",
        tabIndex: 0,
        children: u ? u(f, o.tabPanels[0].columns) : /* @__PURE__ */ n.jsx(
          Fi,
          {
            row: f,
            columns: o.tabPanels[0].columns,
            primaryField: i,
            secondaryFields: l,
            badgeFields: c,
            hiddenFields: d
          }
        )
      },
      m
    )) })
  ] }) : s === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${o.className || ""}`, children: /* @__PURE__ */ n.jsx(_r, { ...o, className: "aria-tabs-datagrid-adaptive__table--hybrid" }) }) : /* @__PURE__ */ n.jsx(_r, { ...o });
}, Fi = ({
  row: e,
  columns: t,
  primaryField: r,
  secondaryFields: a,
  badgeFields: o,
  hiddenFields: s
}) => {
  const i = t.find((c) => c.key === r), l = i?.render ? i.render(e) : e[r || ""];
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__card-header", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "aria-tabs-datagrid-adaptive__card-title", children: l }),
      o.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__card-badges", children: o.map((c) => {
        const d = t.find((f) => f.key === c), u = d?.render ? d.render(e) : e[c];
        return /* @__PURE__ */ n.jsx("span", { className: "nhsuk-tag aria-tabs-datagrid-adaptive__card-badge", children: u }, c);
      }) })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__card-body", children: a.map((c) => {
      const d = t.find((f) => f.key === c);
      if (!d || s.includes(c)) return null;
      const u = d.render ? d.render(e) : e[c];
      return /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__card-field", children: [
        /* @__PURE__ */ n.jsx("dt", { className: "aria-tabs-datagrid-adaptive__card-field-label", children: d.label }),
        /* @__PURE__ */ n.jsx("dd", { className: "aria-tabs-datagrid-adaptive__card-field-value", children: typeof u == "boolean" ? u ? "✓" : "✗" : String(u ?? "") })
      ] }, c);
    }) }),
    /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__card-actions", children: /* @__PURE__ */ n.jsx("button", { className: "nhsuk-button nhsuk-button--secondary", type: "button", children: "View Details" }) })
  ] });
}, ut = {
  asc: "↑",
  desc: "↓"
}, Di = (e) => [...e].sort((t, r) => t.priority - r.priority);
function rn(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Mi(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Ri(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function Ii(e, t) {
  const r = t.find((o) => o.id === e), a = Mi(t);
  return r ? r.priority < a : !1;
}
const Kd = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const u = ie(() => Di(e), [e]), f = X((w) => {
    if (l) return;
    const F = e.map(
      (S) => S.id === w ? { ...S, direction: S.direction === "asc" ? "desc" : "asc" } : S
    );
    t(F);
  }, [e, t, l]), m = X((w) => {
    if (l) return;
    const F = e.findIndex((I) => I.id === w);
    if (F <= 0) return;
    const S = [...e];
    [S[F], S[F - 1]] = [S[F - 1], S[F]], t(rn(S));
  }, [e, t, l]), x = X((w) => {
    if (l) return;
    const F = e.findIndex((I) => I.id === w);
    if (F >= e.length - 1 || F === -1) return;
    const S = [...e];
    [S[F], S[F + 1]] = [S[F + 1], S[F]], t(rn(S));
  }, [e, t, l]), C = X((w) => {
    if (l) return;
    const F = e.filter((S) => S.id !== w);
    t(rn(F));
  }, [e, t, l]), g = X(() => {
    l || t([]);
  }, [t, l]), _ = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const w = u.map((F, S) => {
      const I = F.direction === "asc" ? "ascending" : "descending";
      return `${S + 1}. ${F.label} (${I})`;
    });
    if (w.length === 1)
      return `Sorted by: ${w[0]}`;
    if (w.length === 2)
      return `Sorted by: ${w.join(" and ")}`;
    {
      const F = w.pop();
      return `Sorted by: ${w.join(", ")}, and ${F}`;
    }
  }, N = ie(() => {
    const w = ["sort-description"];
    return i && w.push("sort-help"), d && w.push(d), w.join(" ");
  }, [i, d]);
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
        "aria-label": c,
        "aria-describedby": N,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((w) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Mn,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => C(w.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: w.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: w.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(w.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${w.label}. Currently ${w.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: w.direction === "asc" ? ut.asc : ut.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(w.id),
                          disabled: l || !Ri(w.id, e),
                          "aria-label": `Move ${w.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => x(w.id),
                          disabled: l || !Ii(w.id, e),
                          "aria-label": `Move ${w.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            w.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      Dn,
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
      ut.asc,
      "/",
      ut.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Or = (e) => /* @__PURE__ */ n.jsx(jr, { ...e }), Zd = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: o,
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  service: c,
  navigation: d,
  search: u,
  account: f,
  organisation: m,
  logo: x,
  className: C,
  ...g
}) => {
  const _ = {
    service: c,
    navigation: d,
    search: u,
    account: f,
    organisation: m,
    logo: x,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ur, { ...s }),
    /* @__PURE__ */ n.jsx(Fr, { ..._ }),
    /* @__PURE__ */ n.jsx(Or, { className: C, ...g, children: /* @__PURE__ */ n.jsx(Nr, { size: o, children: /* @__PURE__ */ n.jsx($n, { children: /* @__PURE__ */ n.jsxs(Hn, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Me, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Dr, { ...l })
  ] });
}, Jd = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: o = "small",
  // Default to small size for transactional forms
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  backLinkProps: c,
  serviceName: d,
  serviceHref: u,
  logo: f,
  className: m,
  ...x
}) => {
  const C = {
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
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ur, { ...s }),
    /* @__PURE__ */ n.jsx(Fr, { ...C }),
    /* @__PURE__ */ n.jsxs(Or, { className: m, ...x, children: [
      c && /* @__PURE__ */ n.jsx(Ka, { ...c }),
      /* @__PURE__ */ n.jsx(Nr, { size: o, children: /* @__PURE__ */ n.jsx($n, { children: /* @__PURE__ */ n.jsxs(Hn, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Me, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Dr, { ...l })
  ] });
}, Li = "150ms", $i = "300ms", Hi = "500ms", Ei = "cubic-bezier(0.4, 0, 1, 1)", zi = "cubic-bezier(0, 0, 0.2, 1)", Pi = "cubic-bezier(0.4, 0, 0.2, 1)", Ai = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Wi = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Ui = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Oi = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Yi = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Gi = "1px", Vi = "2px", qi = "4px", Ki = "4px", Zi = "4px", Ji = "2px", Xi = "1px", Qi = "0px", el = "4px", tl = "8px", nl = "12px", Yr = "#d8dde0", Gr = "#4c6272", Vr = "#d8dde0", qr = "#aeb7bd", Kr = "#d5281b", Zr = "#005eb8", Jr = "#ffffff", Xr = "#212b32", Qr = "#007f3b", ea = "#330072", ta = "#7c2855", na = "#d5281b", ra = "#ffeb3b", aa = "#fff9c4", sa = "#ffb81c", oa = "#ed8b00", ia = "#00a499", la = "#ae2573", ca = "#4c6272", ua = "#768692", da = "#aeb7bd", ha = "#d8dde0", fa = "#f0f4f5", rl = "#212b32", al = "#4c6272", sl = "#ffffff", ol = "#212b32", il = "#005eb8", ll = "#7c2855", cl = "#003087", ul = "#330072", dl = "#ffeb3b", hl = "#212b32", fl = "#d8dde0", ml = "#ffffff33", pl = "#d5281b", gl = "#4c6272", xl = "#ffffff", bl = "#007f3b", yl = "#ffffff", kl = "#006530", vl = "#004021", _l = "#004021", Sl = "#00000000", wl = "#ffffff", Cl = "#005eb8", jl = "#005eb8", Nl = "#d9e5f2", Tl = "#c7daf0", Bl = "#005eb8", Fl = "#ffffff", Dl = "#212b32", Ml = "#d9dde0", Rl = "#b3bcc2", Il = "#b3bcc2", Ll = "#d5281b", $l = "#aa2016", Hl = "#6a140e", El = "#6a140e", zl = "#005eb8", Pl = "#004b93", Al = "#002f5c", Wl = "#002f5c", Ul = "8px", Ol = "16px", Yl = "12px", Gl = "16px", Vl = "4px", ql = "40px", Kl = "4px", Zl = "40px", Jl = "12px", Xl = "16px", Ql = "32px", ec = "16px", tc = "20px", nc = "28px", rc = "9px", ac = "2px", sc = "16px", oc = "24px", ic = "8px", lc = "24px", cc = "16px", uc = "4px", dc = "4px", hc = "4px", fc = "8px", mc = "4px", pc = "16px", gc = "#007f3b", xc = "#006530", bc = "#004021", yc = "#d8dde0", kc = "#ffffff", vc = "#768692", _c = "#00000000", Sc = "#ffeb3b", wc = "#00000000", Cc = "#ffffff", jc = "#d9e5f2", Nc = "#c7daf0", Tc = "#005eb8", Bc = "#005eb8", ma = "8px", pa = "16px", ga = "12px", xa = "16px", Fc = "2px", Dc = "4px", Mc = "4px", Rc = "600", Ic = "#ffffff", Lc = "#d8dde0", $c = "#aeb7bd", Hc = "#f0f4f5", Ec = "#212b32", zc = "#212b32", Pc = "#005eb8", ba = "16px", ya = "32px", ka = "16px", Ac = "1px", Wc = "4px", Uc = "none", Oc = "0 2px 4px rgba(0, 0, 0, 0.1)", Yc = "#ffffff", Gc = "#ffffff", Vc = "#d8dde0", qc = "#ffffff", Kc = "#4c6272", Zc = "#ffeb3b", Jc = "#d5281b", Xc = "#aeb7bd", Qc = "#212b32", eu = "#4c6272", tu = "#768692", nu = "#212b32", ru = "#ffffff", au = "600", su = "#d5281b", ou = "600", iu = "#4c6272", va = "4px", _a = "40px", Sa = "40px", wa = "12px", lu = "2px", cu = "4px", uu = "0px", du = "16px", hu = "18px", fu = "24px", mu = "32px", pu = "34px", gu = "32px", xu = "40px", bu = "48px", yu = "5.4ex", ku = "7.2ex", vu = "9ex", _u = "10.8ex", Su = "20ex", wu = "38ex", Cu = "56ex", ju = "44px", Nu = "40px", Tu = "1020px", Bu = "100%", Fu = "50%", Du = "33.333%", Mu = "25%", Ru = "20%", Iu = "320px", Lu = "641px", $u = "1025px", Hu = "1280px", Eu = "960px", zu = "32px", Pu = "16px", Au = "#d5281b", Wu = "#d5281b", Uu = "#ffffff", Ou = "#007f3b", Yu = "#007f3b", Gu = "#ffffff", Vu = "#ffeb3b", qu = "#ffeb3b", Ku = "#212b32", Zu = "#005eb8", Ju = "#005eb8", Xu = "#ffffff", Qu = "#d8dde0", ed = "#aeb7bd", td = "#768692", nd = "0 4px 0 #004021", rd = "0 4px 0 #005eb8", ad = "0 4px 0 #6a140e", sd = "0 4px 0 #ffeb3b", od = "none", id = "0 2px 4px rgba(0, 0, 0, 0.1)", ld = "4px", cd = "0px", ud = "solid", dd = "0 0 0 3px #ffeb3b", hd = "0 0 0 3px #ffeb3b", fd = "none", md = "0 1px 3px rgba(0, 0, 0, 0.12)", pd = "0 2px 6px rgba(0, 0, 0, 0.16)", gd = "0 4px 12px rgba(0, 0, 0, 0.20)", Ca = "0", ja = "4px", Na = "8px", Ta = "16px", Ba = "24px", Fa = "32px", Da = "40px", Ma = "48px", Ra = "56px", Ia = "64px", ln = "0", cn = "0", un = "4px", dn = "4px", hn = "8px", fn = "8px", mn = "8px", pn = "16px", gn = "16px", xn = "24px", bn = "24px", yn = "32px", kn = "32px", vn = "40px", _n = "40px", Sn = "48px", wn = "48px", Cn = "56px", jn = "56px", Nn = "64px", yt = "Frutiger W01", kt = "Arial, Helvetica, sans-serif", vt = "sans-serif", _t = "400", St = "600", wt = "400", Ct = "12px", jt = "14px", Nt = "12pt", Tt = "14px", Bt = "16px", Ft = "12pt", Dt = "16px", Mt = "19px", Rt = "13pt", It = "19px", Lt = "22px", $t = "15pt", Ht = "22px", Et = "26px", zt = "17pt", Pt = "27px", At = "36px", Wt = "20pt", Ut = "33px", Ot = "48px", Yt = "24pt", Tn = "16px", Bn = "24px", ke = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, ve = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, _e = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Se = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, we = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ce = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, je = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ne = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Te = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Be = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Li,
  AnimationDurationNormal: $i,
  AnimationDurationSlow: Hi,
  AnimationEasingBounce: Ai,
  AnimationEasingEaseIn: Ei,
  AnimationEasingEaseInOut: Pi,
  AnimationEasingEaseOut: zi,
  BorderColorCard: Vr,
  BorderColorCardHover: qr,
  BorderColorDefault: Yr,
  BorderColorError: Kr,
  BorderColorForm: Gr,
  BorderRadiusLarge: nl,
  BorderRadiusMedium: tl,
  BorderRadiusNone: Qi,
  BorderRadiusSmall: el,
  BorderWidthCardBottom: Ki,
  BorderWidthDefault: Gi,
  BorderWidthFormElement: Vi,
  BorderWidthFormElementError: qi,
  BorderWidthPanel: Zi,
  BorderWidthTableCell: Xi,
  BorderWidthTableHeader: Ji,
  BreakpointDesktop: $u,
  BreakpointLargeDesktop: Hu,
  BreakpointMobile: Iu,
  BreakpointTablet: Lu,
  ButtonBorderRadius: Dc,
  ButtonBorderWidth: Fc,
  ButtonPrimaryBackgroundActive: bc,
  ButtonPrimaryBackgroundDefault: gc,
  ButtonPrimaryBackgroundDisabled: yc,
  ButtonPrimaryBackgroundHover: xc,
  ButtonPrimaryBorderDefault: _c,
  ButtonPrimaryBorderFocus: Sc,
  ButtonPrimaryTextDefault: kc,
  ButtonPrimaryTextDisabled: vc,
  ButtonSecondaryBackgroundActive: Nc,
  ButtonSecondaryBackgroundDefault: wc,
  ButtonSecondaryBackgroundHover: jc,
  ButtonSecondaryBackgroundSolid: Cc,
  ButtonSecondaryBorderDefault: Bc,
  ButtonSecondaryTextDefault: Tc,
  ButtonShadowSize: Mc,
  ButtonSpacingPaddingHorizontalDesktop: xa,
  ButtonSpacingPaddingHorizontalMobile: pa,
  ButtonSpacingPaddingVerticalDesktop: ga,
  ButtonSpacingPaddingVerticalMobile: ma,
  ButtonTypographyWeight: Rc,
  CardBackgroundDefault: Ic,
  CardBorderBottom: Hc,
  CardBorderDefault: Lc,
  CardBorderHover: $c,
  CardBorderWidthBottom: Wc,
  CardBorderWidthDefault: Ac,
  CardShadowDefault: Uc,
  CardShadowHover: Oc,
  CardSpacingHeadingMargin: ka,
  CardSpacingPaddingDesktop: ya,
  CardSpacingPaddingMobile: ba,
  CardTextDescription: zc,
  CardTextHeading: Ec,
  CardTextLink: Pc,
  ColorBorderDefault: fl,
  ColorBorderSecondary: ml,
  ColorButtonLoginActive: Al,
  ColorButtonLoginBackground: zl,
  ColorButtonLoginHover: Pl,
  ColorButtonLoginShadow: Wl,
  ColorButtonPrimaryActive: vl,
  ColorButtonPrimaryBackground: bl,
  ColorButtonPrimaryHover: kl,
  ColorButtonPrimaryShadow: _l,
  ColorButtonPrimaryText: yl,
  ColorButtonReverseActive: Rl,
  ColorButtonReverseBackground: Fl,
  ColorButtonReverseHover: Ml,
  ColorButtonReverseShadow: Il,
  ColorButtonReverseText: Dl,
  ColorButtonSecondaryActive: Tl,
  ColorButtonSecondaryBackground: Sl,
  ColorButtonSecondaryBackgroundSolid: wl,
  ColorButtonSecondaryBorder: Cl,
  ColorButtonSecondaryHover: Nl,
  ColorButtonSecondaryShadow: Bl,
  ColorButtonSecondaryText: jl,
  ColorButtonWarningActive: Hl,
  ColorButtonWarningBackground: Ll,
  ColorButtonWarningHover: $l,
  ColorButtonWarningShadow: El,
  ColorError: pl,
  ColorFocusBackground: dl,
  ColorFocusText: hl,
  ColorFormBackground: xl,
  ColorFormBorder: gl,
  ColorGrey1: ca,
  ColorGrey2: ua,
  ColorGrey3: da,
  ColorGrey4: ha,
  ColorGrey5: fa,
  ColorLinkActive: cl,
  ColorLinkDefault: il,
  ColorLinkHover: ll,
  ColorLinkVisited: ul,
  ColorPrimaryBlack: Xr,
  ColorPrimaryBlue: Zr,
  ColorPrimaryDarkPink: ta,
  ColorPrimaryGreen: Qr,
  ColorPrimaryPurple: ea,
  ColorPrimaryRed: na,
  ColorPrimaryWhite: Jr,
  ColorPrimaryYellow: ra,
  ColorSecondaryAquaGreen: ia,
  ColorSecondaryOrange: oa,
  ColorSecondaryPaleYellow: aa,
  ColorSecondaryPink: la,
  ColorSecondaryWarmYellow: sa,
  ColorTextPrimary: rl,
  ColorTextPrint: ol,
  ColorTextReverse: sl,
  ColorTextSecondary: al,
  ComponentBlur: dc,
  ComponentBreadcrumbChevronMarginLeft: rc,
  ComponentBreadcrumbChevronMarginRight: ac,
  ComponentBreadcrumbPaddingTopDesktop: oc,
  ComponentBreadcrumbPaddingTopMobile: sc,
  ComponentButtonPaddingDesktopHorizontal: Gl,
  ComponentButtonPaddingDesktopVertical: Yl,
  ComponentButtonPaddingMobileHorizontal: Ol,
  ComponentButtonPaddingMobileVertical: Ul,
  ComponentButtonShadowSize: Vl,
  ComponentCardHeadingMargin: ec,
  ComponentCardPaddingDesktop: Ql,
  ComponentCardPaddingMobile: Xl,
  ComponentDetails: fc,
  ComponentExpander: mc,
  ComponentFormCheckboxLabelPadding: Jl,
  ComponentFormCheckboxSize: Zl,
  ComponentFormInputMinHeight: ql,
  ComponentFormInputPadding: Kl,
  ComponentLink: hc,
  ComponentPagination: pc,
  ComponentPanelPaddingDesktop: nc,
  ComponentPanelPaddingMobile: tc,
  ComponentSpread: uc,
  ComponentSummaryListCellPaddingHorizontal: lc,
  ComponentSummaryListCellPaddingVertical: ic,
  ComponentSummaryListRowMargin: cc,
  ElevationHigh: gd,
  ElevationLow: md,
  ElevationMedium: pd,
  ElevationNone: fd,
  FocusOutlineOffset: cd,
  FocusOutlineStyle: ud,
  FocusOutlineWidth: ld,
  FocusShadowButton: hd,
  FocusShadowInput: dd,
  FontFamilyBase: yt,
  FontFamilyFallback: kt,
  FontFamilyPrint: vt,
  FontLineHeightBase: Bn,
  FontSize14Mobile: Ct,
  FontSize14Print: Nt,
  FontSize14Tablet: jt,
  FontSize16Mobile: Tt,
  FontSize16Print: Ft,
  FontSize16Tablet: Bt,
  FontSize19Mobile: Dt,
  FontSize19Print: Rt,
  FontSize19Tablet: Mt,
  FontSize22Mobile: It,
  FontSize22Print: $t,
  FontSize22Tablet: Lt,
  FontSize26Mobile: Ht,
  FontSize26Print: zt,
  FontSize26Tablet: Et,
  FontSize36Mobile: Pt,
  FontSize36Print: Wt,
  FontSize36Tablet: At,
  FontSize48Mobile: Ut,
  FontSize48Print: Yt,
  FontSize48Tablet: Ot,
  FontSizeBase: Tn,
  FontWeightBold: St,
  FontWeightLight: wt,
  FontWeightNormal: _t,
  FormBorderRadius: uu,
  FormBorderWidthDefault: lu,
  FormBorderWidthError: cu,
  FormErrorTextDefault: su,
  FormErrorTypographyWeight: ou,
  FormHintTextDefault: iu,
  FormInputBackgroundDefault: Yc,
  FormInputBackgroundDisabled: Vc,
  FormInputBackgroundError: qc,
  FormInputBackgroundFocus: Gc,
  FormInputBorderDefault: Kc,
  FormInputBorderDisabled: Xc,
  FormInputBorderError: Jc,
  FormInputBorderFocus: Zc,
  FormInputTextDefault: Qc,
  FormInputTextDisabled: tu,
  FormInputTextPlaceholder: eu,
  FormLabelTextDefault: nu,
  FormLabelTextRequired: ru,
  FormLabelTypographyWeight: au,
  FormSpacingCheckboxLabelPadding: wa,
  FormSpacingCheckboxSize: Sa,
  FormSpacingInputMinHeight: _a,
  FormSpacingInputPadding: va,
  GridGutter: zu,
  GridGutterHalf: Pu,
  GridPageWidth: Eu,
  HeadingsNhsukHeadingL: ve,
  HeadingsNhsukHeadingM: _e,
  HeadingsNhsukHeadingS: Se,
  HeadingsNhsukHeadingXl: ke,
  HeadingsNhsukHeadingXs: we,
  LayoutColumnActions: Ru,
  LayoutColumnFull: Bu,
  LayoutColumnHalf: Fu,
  LayoutColumnQuarter: Mu,
  LayoutColumnThird: Du,
  LayoutContainerMaxWidth: Tu,
  ParagraphsBody: Ce,
  ParagraphsBodyLarge: je,
  ParagraphsBodySmall: Ne,
  ParagraphsLedeText: Te,
  ParagraphsLedeTextSmall: Be,
  ShadowButtonDefault: nd,
  ShadowButtonFocus: sd,
  ShadowButtonSecondary: rd,
  ShadowButtonWarning: ad,
  ShadowCardDefault: od,
  ShadowCardHover: id,
  SizeButtonMinHeightDesktop: Nu,
  SizeButtonMinHeightMobile: ju,
  SizeFormControlLarge: bu,
  SizeFormControlMedium: xu,
  SizeFormControlSmall: gu,
  SizeFormInputWidth2xl: wu,
  SizeFormInputWidth3xl: Cu,
  SizeFormInputWidthLg: _u,
  SizeFormInputWidthMd: vu,
  SizeFormInputWidthSm: ku,
  SizeFormInputWidthXl: Su,
  SizeFormInputWidthXs: yu,
  SizeIconExtraLarge: mu,
  SizeIconLarge: fu,
  SizeIconMedium: hu,
  SizeIconNhsDefault: pu,
  SizeIconSmall: du,
  Spacing0: Ca,
  Spacing1: ja,
  Spacing2: Na,
  Spacing3: Ta,
  Spacing4: Ba,
  Spacing5: Fa,
  Spacing6: Da,
  Spacing7: Ma,
  Spacing8: Ra,
  Spacing9: Ia,
  SpacingResponsive0Mobile: ln,
  SpacingResponsive0Tablet: cn,
  SpacingResponsive1Mobile: un,
  SpacingResponsive1Tablet: dn,
  SpacingResponsive2Mobile: hn,
  SpacingResponsive2Tablet: fn,
  SpacingResponsive3Mobile: mn,
  SpacingResponsive3Tablet: pn,
  SpacingResponsive4Mobile: gn,
  SpacingResponsive4Tablet: xn,
  SpacingResponsive5Mobile: bn,
  SpacingResponsive5Tablet: yn,
  SpacingResponsive6Mobile: kn,
  SpacingResponsive6Tablet: vn,
  SpacingResponsive7Mobile: _n,
  SpacingResponsive7Tablet: Sn,
  SpacingResponsive8Mobile: wn,
  SpacingResponsive8Tablet: Cn,
  SpacingResponsive9Mobile: jn,
  SpacingResponsive9Tablet: Nn,
  StateDisabledBackground: Qu,
  StateDisabledBorder: ed,
  StateDisabledText: td,
  StateErrorBackground: Au,
  StateErrorBorder: Wu,
  StateErrorText: Uu,
  StateInfoBackground: Zu,
  StateInfoBorder: Ju,
  StateInfoText: Xu,
  StateSuccessBackground: Ou,
  StateSuccessBorder: Yu,
  StateSuccessText: Gu,
  StateWarningBackground: Vu,
  StateWarningBorder: qu,
  StateWarningText: Ku,
  TransitionButtonDefault: Wi,
  TransitionButtonShadow: Ui,
  TransitionCardHover: Yi,
  TransitionInputFocus: Oi
}, Symbol.toStringTag, { value: "Module" })), Xd = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Qd = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: ke.fontFamily,
      fontWeight: ke.fontWeight,
      fontSize: ke.fontSize.mobile,
      lineHeight: ke.lineHeight,
      marginTop: ke.marginTop,
      marginBottom: ke.marginBottom.mobile,
      ...r
    },
    children: e
  }
), eh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
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
), th = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: _e.fontFamily,
      fontWeight: _e.fontWeight,
      fontSize: _e.fontSize.mobile,
      lineHeight: _e.lineHeight,
      marginTop: _e.marginTop,
      marginBottom: _e.marginBottom.mobile,
      ...r
    },
    children: e
  }
), nh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), rh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), ah = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
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
), sh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
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
), oh = ({
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
), ih = ({
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
), lh = ({
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
), ch = () => ie(() => xd, []), uh = () => ie(() => ({
  // Border colors
  BorderColorDefault: Yr,
  BorderColorForm: Gr,
  BorderColorCard: Vr,
  BorderColorCardHover: qr,
  BorderColorError: Kr,
  // Primary colors
  ColorPrimaryBlue: Zr,
  ColorPrimaryWhite: Jr,
  ColorPrimaryBlack: Xr,
  ColorPrimaryGreen: Qr,
  ColorPrimaryPurple: ea,
  ColorPrimaryDarkPink: ta,
  ColorPrimaryRed: na,
  ColorPrimaryYellow: ra,
  // Secondary colors
  ColorSecondaryPaleYellow: aa,
  ColorSecondaryWarmYellow: sa,
  ColorSecondaryOrange: oa,
  ColorSecondaryAquaGreen: ia,
  ColorSecondaryPink: la,
  // Grey scale
  ColorGrey1: ca,
  ColorGrey2: ua,
  ColorGrey3: da,
  ColorGrey4: ha,
  ColorGrey5: fa
}), []), dh = () => ie(() => ({
  Spacing0: Ca,
  Spacing1: ja,
  Spacing2: Na,
  Spacing3: Ta,
  Spacing4: Ba,
  Spacing5: Fa,
  Spacing6: Da,
  Spacing7: Ma,
  Spacing8: Ra,
  Spacing9: Ia
}), []), hh = () => ie(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Ct,
    Size16: Tt,
    Size19: Dt,
    Size22: It,
    Size26: Ht,
    Size36: Pt,
    Size48: Ut
  },
  Tablet: {
    Size14: jt,
    Size16: Bt,
    Size19: Mt,
    Size22: Lt,
    Size26: Et,
    Size36: At,
    Size48: Ot
  },
  Print: {
    Size14: Nt,
    Size16: Ft,
    Size19: Rt,
    Size22: $t,
    Size26: zt,
    Size36: Wt,
    Size48: Yt
  },
  Family: {
    Base: yt,
    Fallback: kt,
    Print: vt
  },
  Weight: {
    Normal: _t,
    Bold: St,
    Light: wt
  },
  Base: {
    Size: Tn,
    LineHeight: Bn
  },
  // Backward compatibility - individual exports
  FontFamilyBase: yt,
  FontFamilyFallback: kt,
  FontFamilyPrint: vt,
  FontWeightNormal: _t,
  FontWeightBold: St,
  FontWeightLight: wt,
  FontSize14Mobile: Ct,
  FontSize14Tablet: jt,
  FontSize14Print: Nt,
  FontSize16Mobile: Tt,
  FontSize16Tablet: Bt,
  FontSize16Print: Ft,
  FontSize19Mobile: Dt,
  FontSize19Tablet: Mt,
  FontSize19Print: Rt,
  FontSize22Mobile: It,
  FontSize22Tablet: Lt,
  FontSize22Print: $t,
  FontSize26Mobile: Ht,
  FontSize26Tablet: Et,
  FontSize26Print: zt,
  FontSize36Mobile: Pt,
  FontSize36Tablet: At,
  FontSize36Print: Wt,
  FontSize48Mobile: Ut,
  FontSize48Tablet: Ot,
  FontSize48Print: Yt,
  FontSizeBase: Tn,
  FontLineHeightBase: Bn
}), []), fh = () => ie(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: ln,
    Size1: un,
    Size2: hn,
    Size3: mn,
    Size4: gn,
    Size5: bn,
    Size6: kn,
    Size7: _n,
    Size8: wn,
    Size9: jn
  },
  Tablet: {
    Size0: cn,
    Size1: dn,
    Size2: fn,
    Size3: pn,
    Size4: xn,
    Size5: yn,
    Size6: vn,
    Size7: Sn,
    Size8: Cn,
    Size9: Nn
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: ln,
  SpacingResponsive0Tablet: cn,
  SpacingResponsive1Mobile: un,
  SpacingResponsive1Tablet: dn,
  SpacingResponsive2Mobile: hn,
  SpacingResponsive2Tablet: fn,
  SpacingResponsive3Mobile: mn,
  SpacingResponsive3Tablet: pn,
  SpacingResponsive4Mobile: gn,
  SpacingResponsive4Tablet: xn,
  SpacingResponsive5Mobile: bn,
  SpacingResponsive5Tablet: yn,
  SpacingResponsive6Mobile: kn,
  SpacingResponsive6Tablet: vn,
  SpacingResponsive7Mobile: _n,
  SpacingResponsive7Tablet: Sn,
  SpacingResponsive8Mobile: wn,
  SpacingResponsive8Tablet: Cn,
  SpacingResponsive9Mobile: jn,
  SpacingResponsive9Tablet: Nn
}), []), mh = () => ie(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: ma,
  ButtonSpacingPaddingHorizontalMobile: pa,
  ButtonSpacingPaddingVerticalDesktop: ga,
  ButtonSpacingPaddingHorizontalDesktop: xa,
  // Card spacing	
  CardSpacingPaddingMobile: ba,
  CardSpacingPaddingDesktop: ya,
  CardSpacingHeadingMargin: ka,
  // Form spacing
  FormSpacingInputPadding: va,
  FormSpacingInputMinHeight: _a,
  FormSpacingCheckboxSize: Sa,
  FormSpacingCheckboxLabelPadding: wa
}), []), ph = () => ie(() => ({
  xl: ke,
  l: ve,
  m: _e,
  s: Se,
  xs: we
}), []), gh = () => ie(() => ({
  body: Ce,
  bodyLarge: je,
  bodySmall: Ne,
  ledeText: Te,
  ledeTextSmall: Be
}), []), xh = () => ie(() => ({
  headings: {
    xl: ke,
    l: ve,
    m: _e,
    s: Se,
    xs: we
  },
  paragraphs: {
    body: Ce,
    bodyLarge: je,
    bodySmall: Ne,
    ledeText: Te,
    ledeTextSmall: Be
  },
  fonts: {
    family: {
      base: yt,
      fallback: kt,
      print: vt
    },
    weight: {
      normal: _t,
      bold: St,
      light: wt
    },
    sizes: {
      mobile: {
        size14: Ct,
        size16: Tt,
        size19: Dt,
        size22: It,
        size26: Ht,
        size36: Pt,
        size48: Ut
      },
      tablet: {
        size14: jt,
        size16: Bt,
        size19: Mt,
        size22: Lt,
        size26: Et,
        size36: At,
        size48: Ot
      },
      print: {
        size14: Nt,
        size16: Ft,
        size19: Rt,
        size22: $t,
        size26: zt,
        size36: Wt,
        size48: Yt
      }
    }
  }
}), []), La = {
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
function bh(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...La, ...e }, a = [];
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
function yh(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...La, ...e };
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
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const kh = '"Frutiger W01", Arial, Helvetica, sans-serif', vh = "Arial, Helvetica, sans-serif";
async function _h() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Fn as Account,
  yd as ActionLink,
  Li as AnimationDurationFast,
  $i as AnimationDurationNormal,
  Hi as AnimationDurationSlow,
  Ai as AnimationEasingBounce,
  Ei as AnimationEasingEaseIn,
  Pi as AnimationEasingEaseInOut,
  zi as AnimationEasingEaseOut,
  ji as AriaDataGrid,
  _r as AriaTabsDataGrid,
  qd as AriaTabsDataGridAdaptive,
  Ka as BackLink,
  Vr as BorderColorCard,
  qr as BorderColorCardHover,
  Yr as BorderColorDefault,
  Kr as BorderColorError,
  Gr as BorderColorForm,
  nl as BorderRadiusLarge,
  tl as BorderRadiusMedium,
  Qi as BorderRadiusNone,
  el as BorderRadiusSmall,
  Ki as BorderWidthCardBottom,
  Gi as BorderWidthDefault,
  Vi as BorderWidthFormElement,
  qi as BorderWidthFormElementError,
  Zi as BorderWidthPanel,
  Xi as BorderWidthTableCell,
  Ji as BorderWidthTableHeader,
  bi as Breadcrumb,
  $u as BreakpointDesktop,
  Hu as BreakpointLargeDesktop,
  Iu as BreakpointMobile,
  Lu as BreakpointTablet,
  Dn as Button,
  Dc as ButtonBorderRadius,
  Fc as ButtonBorderWidth,
  bc as ButtonPrimaryBackgroundActive,
  gc as ButtonPrimaryBackgroundDefault,
  yc as ButtonPrimaryBackgroundDisabled,
  xc as ButtonPrimaryBackgroundHover,
  _c as ButtonPrimaryBorderDefault,
  Sc as ButtonPrimaryBorderFocus,
  kc as ButtonPrimaryTextDefault,
  vc as ButtonPrimaryTextDisabled,
  Nc as ButtonSecondaryBackgroundActive,
  wc as ButtonSecondaryBackgroundDefault,
  jc as ButtonSecondaryBackgroundHover,
  Cc as ButtonSecondaryBackgroundSolid,
  Bc as ButtonSecondaryBorderDefault,
  Tc as ButtonSecondaryTextDefault,
  Mc as ButtonShadowSize,
  xa as ButtonSpacingPaddingHorizontalDesktop,
  pa as ButtonSpacingPaddingHorizontalMobile,
  ga as ButtonSpacingPaddingVerticalDesktop,
  ma as ButtonSpacingPaddingVerticalMobile,
  Rc as ButtonTypographyWeight,
  Hd as Card,
  Ic as CardBackgroundDefault,
  Hc as CardBorderBottom,
  Lc as CardBorderDefault,
  $c as CardBorderHover,
  Wc as CardBorderWidthBottom,
  Ac as CardBorderWidthDefault,
  Ed as CardGroup,
  zd as CardGroupItem,
  Uc as CardShadowDefault,
  Oc as CardShadowHover,
  ka as CardSpacingHeadingMargin,
  ya as CardSpacingPaddingDesktop,
  ba as CardSpacingPaddingMobile,
  zc as CardTextDescription,
  Ec as CardTextHeading,
  Pc as CardTextLink,
  Pd as CareCard,
  kd as CharacterCount,
  Za as Checkboxes,
  fl as ColorBorderDefault,
  ml as ColorBorderSecondary,
  Al as ColorButtonLoginActive,
  zl as ColorButtonLoginBackground,
  Pl as ColorButtonLoginHover,
  Wl as ColorButtonLoginShadow,
  vl as ColorButtonPrimaryActive,
  bl as ColorButtonPrimaryBackground,
  kl as ColorButtonPrimaryHover,
  _l as ColorButtonPrimaryShadow,
  yl as ColorButtonPrimaryText,
  Rl as ColorButtonReverseActive,
  Fl as ColorButtonReverseBackground,
  Ml as ColorButtonReverseHover,
  Il as ColorButtonReverseShadow,
  Dl as ColorButtonReverseText,
  Tl as ColorButtonSecondaryActive,
  Sl as ColorButtonSecondaryBackground,
  wl as ColorButtonSecondaryBackgroundSolid,
  Cl as ColorButtonSecondaryBorder,
  Nl as ColorButtonSecondaryHover,
  Bl as ColorButtonSecondaryShadow,
  jl as ColorButtonSecondaryText,
  Hl as ColorButtonWarningActive,
  Ll as ColorButtonWarningBackground,
  $l as ColorButtonWarningHover,
  El as ColorButtonWarningShadow,
  pl as ColorError,
  dl as ColorFocusBackground,
  hl as ColorFocusText,
  xl as ColorFormBackground,
  gl as ColorFormBorder,
  ca as ColorGrey1,
  ua as ColorGrey2,
  da as ColorGrey3,
  ha as ColorGrey4,
  fa as ColorGrey5,
  cl as ColorLinkActive,
  il as ColorLinkDefault,
  ll as ColorLinkHover,
  ul as ColorLinkVisited,
  Xr as ColorPrimaryBlack,
  Zr as ColorPrimaryBlue,
  ta as ColorPrimaryDarkPink,
  Qr as ColorPrimaryGreen,
  ea as ColorPrimaryPurple,
  na as ColorPrimaryRed,
  Jr as ColorPrimaryWhite,
  ra as ColorPrimaryYellow,
  ia as ColorSecondaryAquaGreen,
  oa as ColorSecondaryOrange,
  aa as ColorSecondaryPaleYellow,
  la as ColorSecondaryPink,
  sa as ColorSecondaryWarmYellow,
  rl as ColorTextPrimary,
  ol as ColorTextPrint,
  sl as ColorTextReverse,
  al as ColorTextSecondary,
  Hn as Column,
  dc as ComponentBlur,
  rc as ComponentBreadcrumbChevronMarginLeft,
  ac as ComponentBreadcrumbChevronMarginRight,
  oc as ComponentBreadcrumbPaddingTopDesktop,
  sc as ComponentBreadcrumbPaddingTopMobile,
  Gl as ComponentButtonPaddingDesktopHorizontal,
  Yl as ComponentButtonPaddingDesktopVertical,
  Ol as ComponentButtonPaddingMobileHorizontal,
  Ul as ComponentButtonPaddingMobileVertical,
  Vl as ComponentButtonShadowSize,
  ec as ComponentCardHeadingMargin,
  Ql as ComponentCardPaddingDesktop,
  Xl as ComponentCardPaddingMobile,
  fc as ComponentDetails,
  mc as ComponentExpander,
  Jl as ComponentFormCheckboxLabelPadding,
  Zl as ComponentFormCheckboxSize,
  ql as ComponentFormInputMinHeight,
  Kl as ComponentFormInputPadding,
  hc as ComponentLink,
  pc as ComponentPagination,
  nc as ComponentPanelPaddingDesktop,
  tc as ComponentPanelPaddingMobile,
  uc as ComponentSpread,
  lc as ComponentSummaryListCellPaddingHorizontal,
  ic as ComponentSummaryListCellPaddingVertical,
  cc as ComponentSummaryListRowMargin,
  jr as Container,
  $d as ContentsList,
  La as DEFAULT_FONT_CONFIG,
  Vd as DashboardSummaryGrid,
  Bd as DateInput,
  ki as Details,
  vi as DoDontList,
  gd as ElevationHigh,
  md as ElevationLow,
  pd as ElevationMedium,
  fd as ElevationNone,
  Xn as ErrorMessage,
  Td as ErrorSummary,
  _i as Expander,
  he as FRUTIGER_FONT_FILES,
  Ln as Fieldset,
  cd as FocusOutlineOffset,
  ud as FocusOutlineStyle,
  ld as FocusOutlineWidth,
  hd as FocusShadowButton,
  dd as FocusShadowInput,
  yt as FontFamilyBase,
  kt as FontFamilyFallback,
  vt as FontFamilyPrint,
  Bn as FontLineHeightBase,
  Ct as FontSize14Mobile,
  Nt as FontSize14Print,
  jt as FontSize14Tablet,
  Tt as FontSize16Mobile,
  Ft as FontSize16Print,
  Bt as FontSize16Tablet,
  Dt as FontSize19Mobile,
  Rt as FontSize19Print,
  Mt as FontSize19Tablet,
  It as FontSize22Mobile,
  $t as FontSize22Print,
  Lt as FontSize22Tablet,
  Ht as FontSize26Mobile,
  zt as FontSize26Print,
  Et as FontSize26Tablet,
  Pt as FontSize36Mobile,
  Wt as FontSize36Print,
  At as FontSize36Tablet,
  Ut as FontSize48Mobile,
  Yt as FontSize48Print,
  Ot as FontSize48Tablet,
  Tn as FontSizeBase,
  St as FontWeightBold,
  wt as FontWeightLight,
  _t as FontWeightNormal,
  Dr as Footer,
  uu as FormBorderRadius,
  lu as FormBorderWidthDefault,
  cu as FormBorderWidthError,
  su as FormErrorTextDefault,
  ou as FormErrorTypographyWeight,
  iu as FormHintTextDefault,
  Yc as FormInputBackgroundDefault,
  Vc as FormInputBackgroundDisabled,
  qc as FormInputBackgroundError,
  Gc as FormInputBackgroundFocus,
  Kc as FormInputBorderDefault,
  Xc as FormInputBorderDisabled,
  Jc as FormInputBorderError,
  Zc as FormInputBorderFocus,
  Qc as FormInputTextDefault,
  tu as FormInputTextDisabled,
  eu as FormInputTextPlaceholder,
  nu as FormLabelTextDefault,
  ru as FormLabelTextRequired,
  au as FormLabelTypographyWeight,
  wa as FormSpacingCheckboxLabelPadding,
  Sa as FormSpacingCheckboxSize,
  _a as FormSpacingInputMinHeight,
  va as FormSpacingInputPadding,
  Id as GanttChart,
  Xa as Grid,
  zu as GridGutter,
  Pu as GridGutterHalf,
  Eu as GridPageWidth,
  Fr as Header,
  Md as HeaderSSR,
  En as HeaderSearch,
  Rd as HeaderStatic,
  Me as Heading,
  ve as HeadingsNhsukHeadingL,
  _e as HeadingsNhsukHeadingM,
  Se as HeadingsNhsukHeadingS,
  ke as HeadingsNhsukHeadingXl,
  we as HeadingsNhsukHeadingXs,
  ss as Hero,
  Cr as Hint,
  Gd as Images,
  Rn as Input,
  Ad as InsetText,
  In as Label,
  Ru as LayoutColumnActions,
  Bu as LayoutColumnFull,
  Fu as LayoutColumnHalf,
  Mu as LayoutColumnQuarter,
  Du as LayoutColumnThird,
  Tu as LayoutContainerMaxWidth,
  ts as List,
  Nr as MainWrapper,
  ah as NHSBodyText,
  sh as NHSBodyTextLarge,
  oh as NHSBodyTextSmall,
  Qd as NHSHeading1,
  eh as NHSHeading2,
  th as NHSHeading3,
  nh as NHSHeading4,
  rh as NHSHeading5,
  ih as NHSLedeText,
  lh as NHSLedeTextSmall,
  Dd as NHSThemeProvider,
  vh as NHS_FALLBACK_FONT_STACK,
  kh as NHS_FONT_STACK,
  Zd as PageTemplate,
  Ld as Pagination,
  yi as Panel,
  Ce as ParagraphsBody,
  je as ParagraphsBodyLarge,
  Ne as ParagraphsBodySmall,
  Te as ParagraphsLedeText,
  Be as ParagraphsLedeTextSmall,
  _d as Radios,
  $n as Row,
  vd as Select,
  nd as ShadowButtonDefault,
  sd as ShadowButtonFocus,
  rd as ShadowButtonSecondary,
  ad as ShadowButtonWarning,
  od as ShadowCardDefault,
  id as ShadowCardHover,
  Nu as SizeButtonMinHeightDesktop,
  ju as SizeButtonMinHeightMobile,
  bu as SizeFormControlLarge,
  xu as SizeFormControlMedium,
  gu as SizeFormControlSmall,
  wu as SizeFormInputWidth2xl,
  Cu as SizeFormInputWidth3xl,
  _u as SizeFormInputWidthLg,
  vu as SizeFormInputWidthMd,
  ku as SizeFormInputWidthSm,
  Su as SizeFormInputWidthXl,
  yu as SizeFormInputWidthXs,
  mu as SizeIconExtraLarge,
  fu as SizeIconLarge,
  hu as SizeIconMedium,
  pu as SizeIconNhsDefault,
  du as SizeIconSmall,
  Ur as SkipLink,
  Kd as SortStatusControl,
  Ca as Spacing0,
  ja as Spacing1,
  Na as Spacing2,
  Ta as Spacing3,
  Ba as Spacing4,
  Fa as Spacing5,
  Da as Spacing6,
  Ma as Spacing7,
  Ra as Spacing8,
  Ia as Spacing9,
  ln as SpacingResponsive0Mobile,
  cn as SpacingResponsive0Tablet,
  un as SpacingResponsive1Mobile,
  dn as SpacingResponsive1Tablet,
  hn as SpacingResponsive2Mobile,
  fn as SpacingResponsive2Tablet,
  mn as SpacingResponsive3Mobile,
  pn as SpacingResponsive3Tablet,
  gn as SpacingResponsive4Mobile,
  xn as SpacingResponsive4Tablet,
  bn as SpacingResponsive5Mobile,
  yn as SpacingResponsive5Tablet,
  kn as SpacingResponsive6Mobile,
  vn as SpacingResponsive6Tablet,
  _n as SpacingResponsive7Mobile,
  Sn as SpacingResponsive7Tablet,
  wn as SpacingResponsive8Mobile,
  Cn as SpacingResponsive8Tablet,
  jn as SpacingResponsive9Mobile,
  Nn as SpacingResponsive9Tablet,
  Sd as SpacingUtilities,
  Qu as StateDisabledBackground,
  ed as StateDisabledBorder,
  td as StateDisabledText,
  Au as StateErrorBackground,
  Wu as StateErrorBorder,
  Uu as StateErrorText,
  Zu as StateInfoBackground,
  Ju as StateInfoBorder,
  Xu as StateInfoText,
  Ou as StateSuccessBackground,
  Yu as StateSuccessBorder,
  Gu as StateSuccessText,
  Vu as StateWarningBackground,
  qu as StateWarningBorder,
  Ku as StateWarningText,
  Ci as SummaryCard,
  Wd as SummaryList,
  Ud as Table,
  Od as Tabs,
  Mn as Tag,
  Si as TaskList,
  Ja as Textarea,
  Jd as TransactionalPageTemplate,
  Wi as TransitionButtonDefault,
  Ui as TransitionButtonShadow,
  Yi as TransitionCardHover,
  Oi as TransitionInputFocus,
  Nd as WIDTH_FRACTIONS,
  Yd as WarningCallout,
  Or as WidthContainer,
  Cd as WidthUtilities,
  _h as checkFrutigerLoaded,
  bh as generateFrutigerFontFace,
  Xd as getResponsiveStyles,
  wd as getSpacingClass,
  jd as getWidthClass,
  yh as preloadFrutigerFonts,
  uh as useColors,
  mh as useComponentSpacing,
  ph as useNHSHeadings,
  gh as useNHSParagraphs,
  Fd as useNHSTheme,
  xh as useNHSTypographySystem,
  fh as useResponsiveSpacing,
  dh as useSpacing,
  ch as useTokens,
  hh as useTypography
};
//# sourceMappingURL=index.esm.js.map
