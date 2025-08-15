import * as he from "react";
import Ie, { useState as pe, useEffect as ye, useCallback as ee, createElement as na, useRef as xe, useMemo as _e, useContext as $s, createContext as As, forwardRef as mt, useImperativeHandle as ra, useReducer as aa } from "react";
function Hs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tt = { exports: {} }, pt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function Ps() {
  if (yr) return pt;
  yr = 1;
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
  return pt.Fragment = t, pt.jsx = r, pt.jsxs = r, pt;
}
var gt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r;
function zs() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    function e(N) {
      if (N == null) return null;
      if (typeof N == "function")
        return N.$$typeof === v ? null : N.displayName || N.name || null;
      if (typeof N == "string") return N;
      switch (N) {
        case x:
          return "Fragment";
        case F:
          return "Profiler";
        case j:
          return "StrictMode";
        case A:
          return "Suspense";
        case b:
          return "SuspenseList";
        case C:
          return "Activity";
      }
      if (typeof N == "object")
        switch (typeof N.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), N.$$typeof) {
          case B:
            return "Portal";
          case L:
            return (N.displayName || "Context") + ".Provider";
          case I:
            return (N._context.displayName || "Context") + ".Consumer";
          case S:
            var K = N.render;
            return N = N.displayName, N || (N = K.displayName || K.name || "", N = N !== "" ? "ForwardRef(" + N + ")" : "ForwardRef"), N;
          case M:
            return K = N.displayName || null, K !== null ? K : e(N.type) || "Memo";
          case D:
            K = N._payload, N = N._init;
            try {
              return e(N(K));
            } catch {
            }
        }
      return null;
    }
    function t(N) {
      return "" + N;
    }
    function r(N) {
      try {
        t(N);
        var K = !1;
      } catch {
        K = !0;
      }
      if (K) {
        K = console;
        var H = K.error, O = typeof Symbol == "function" && Symbol.toStringTag && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return H.call(
          K,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), t(N);
      }
    }
    function a(N) {
      if (N === x) return "<>";
      if (typeof N == "object" && N !== null && N.$$typeof === D)
        return "<...>";
      try {
        var K = e(N);
        return K ? "<" + K + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var N = h.A;
      return N === null ? null : N.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(N) {
      if (y.call(N, "key")) {
        var K = Object.getOwnPropertyDescriptor(N, "key").get;
        if (K && K.isReactWarning) return !1;
      }
      return N.key !== void 0;
    }
    function l(N, K) {
      function H() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          K
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(N, "key", {
        get: H,
        configurable: !0
      });
    }
    function c() {
      var N = e(this.type);
      return Q[N] || (Q[N] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), N = this.props.ref, N !== void 0 ? N : null;
    }
    function u(N, K, H, O, V, fe, f, T) {
      return H = fe.ref, N = {
        $$typeof: _,
        type: N,
        key: K,
        props: fe,
        _owner: V
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(N, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(N, "ref", { enumerable: !1, value: null }), N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(N, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(N, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: f
      }), Object.defineProperty(N, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    }
    function d(N, K, H, O, V, fe, f, T) {
      var U = K.children;
      if (U !== void 0)
        if (O)
          if (z(U)) {
            for (O = 0; O < U.length; O++)
              m(U[O]);
            Object.freeze && Object.freeze(U);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(U);
      if (y.call(K, "key")) {
        U = e(N);
        var E = Object.keys(K).filter(function(q) {
          return q !== "key";
        });
        O = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", ce[U + O] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          U,
          E,
          U
        ), ce[U + O] = !0);
      }
      if (U = null, H !== void 0 && (r(H), U = "" + H), i(K) && (r(K.key), U = "" + K.key), "key" in K) {
        H = {};
        for (var W in K)
          W !== "key" && (H[W] = K[W]);
      } else H = K;
      return U && l(
        H,
        typeof N == "function" ? N.displayName || N.name || "Unknown" : N
      ), u(
        N,
        U,
        fe,
        V,
        o(),
        H,
        f,
        T
      );
    }
    function m(N) {
      typeof N == "object" && N !== null && N.$$typeof === _ && N._store && (N._store.validated = 1);
    }
    var p = Ie, _ = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), L = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), v = Symbol.for("react.client.reference"), h = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, z = Array.isArray, ae = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(N) {
        return N();
      }
    };
    var P, Q = {}, te = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), oe = ae(a(s)), ce = {};
    gt.Fragment = x, gt.jsx = function(N, K, H, O, V) {
      var fe = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        N,
        K,
        H,
        !1,
        O,
        V,
        fe ? Error("react-stack-top-frame") : te,
        fe ? ae(a(N)) : oe
      );
    }, gt.jsxs = function(N, K, H, O, V) {
      var fe = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        N,
        K,
        H,
        !0,
        O,
        V,
        fe ? Error("react-stack-top-frame") : te,
        fe ? ae(a(N)) : oe
      );
    };
  }()), gt;
}
var vr;
function Ws() {
  return vr || (vr = 1, process.env.NODE_ENV === "production" ? Tt.exports = Ps() : Tt.exports = zs()), Tt.exports;
}
var n = Ws(), yn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var kr;
function Os() {
  return kr || (kr = 1, function(e) {
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
  }(yn)), yn.exports;
}
var Us = Os();
const X = /* @__PURE__ */ Hs(Us), Qh = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = X(
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
}, nr = ({
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
      className: X(
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
          className: X("nhsuk-account__item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
}, { forwardRef: Gs, useCallback: tt, useState: _n } = he;
function Vs(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [u, d] = _n(!1), [m, p] = _n(!1), [_, B] = _n(!1), x = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    o !== "default" ? `nhs-aria-button--${o}` : "",
    s ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), j = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", F = {
    ...u && { "data-pressed": "true" },
    ...m && { "data-hovered": "true" },
    ..._ && { "data-focused": "true" },
    ...j && { "data-disabled": "true" }
  }, I = tt(() => !j && d(!0), [j]), L = tt(() => d(!1), []), S = tt(() => !j && p(!0), [j]), A = tt(() => {
    p(!1), d(!1);
  }, []), b = tt(() => B(!0), []), M = tt(() => B(!1), []), D = tt((h) => {
    h.key === " " && ("href" in c || h.currentTarget.getAttribute("role") === "button") && (h.preventDefault(), h.currentTarget.click());
  }, [c]), C = tt((h) => {
    if (l) {
      const y = h.currentTarget;
      if (y.getAttribute("data-processing") === "true") {
        h.preventDefault();
        return;
      }
      y.setAttribute("data-processing", "true"), setTimeout(() => {
        y.removeAttribute("data-processing");
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
        className: x,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...F,
        ...l && { "data-prevent-double-click": "true" },
        onKeyDown: (y) => {
          h.onKeyDown?.(y), D(y);
        },
        onClick: (y) => {
          h.onClick?.(y), C(y);
        },
        onMouseDown: (y) => {
          h.onMouseDown?.(y), I();
        },
        onMouseUp: (y) => {
          h.onMouseUp?.(y), L();
        },
        onMouseEnter: (y) => {
          h.onMouseEnter?.(y), S();
        },
        onMouseLeave: (y) => {
          h.onMouseLeave?.(y), A();
        },
        onFocus: (y) => {
          h.onFocus?.(y), b();
        },
        onBlur: (y) => {
          h.onBlur?.(y), M();
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
  const v = c;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: v.type || "button",
      disabled: v.disabled,
      className: x,
      "data-module": "nhs-button",
      ...F,
      ...l && { "data-prevent-double-click": "true" },
      ...v.disabled && { "aria-disabled": "true" },
      onKeyDown: (h) => {
        v.onKeyDown?.(h), D(h);
      },
      onClick: (h) => {
        v.onClick?.(h), C(h);
      },
      onMouseDown: (h) => {
        v.onMouseDown?.(h), I();
      },
      onMouseUp: (h) => {
        v.onMouseUp?.(h), L();
      },
      onMouseEnter: (h) => {
        v.onMouseEnter?.(h), S();
      },
      onMouseLeave: (h) => {
        v.onMouseLeave?.(h), A();
      },
      onFocus: (h) => {
        v.onFocus?.(h), b();
      },
      onBlur: (h) => {
        v.onBlur?.(h), M();
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
const De = Gs(Vs);
De.displayName = "Button";
const sa = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = X(
    "nhsuk-back-link",
    a
  ), c = X(
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ n.jsx(
    "button",
    {
      className: c,
      onClick: s,
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
}, Ke = ({
  text: e,
  html: t,
  children: r,
  color: a = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: c,
  ...u
}) => {
  const d = X(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": o,
      "nhsuk-tag--closable": s,
      "nhsuk-tag--disabled": l
    },
    c
  ), m = (p) => {
    p.preventDefault(), p.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: d, ...u, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    s && /* @__PURE__ */ n.jsx(
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
}, Ys = ({
  id: e,
  name: t,
  checked: r,
  defaultChecked: a = !1,
  disabled: o = !1,
  value: s = "true",
  hint: i,
  errorMessage: l,
  className: c,
  children: u,
  onChange: d,
  onBlur: m,
  onFocus: p,
  attributes: _,
  ...B
}) => {
  const [x, j] = pe(a), F = r !== void 0, I = F ? r : x;
  ye(() => {
    F || j(a);
  }, [a, F]);
  const L = (D) => {
    const C = D.target.checked;
    F || j(C), d?.(C, D);
  }, S = i ? `${e}-hint` : void 0, A = l ? `${e}-error` : void 0, b = [S, A].filter(Boolean).join(" ") || void 0, M = X(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ n.jsx("div", { className: M, ...B, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: I,
        disabled: o,
        onChange: L,
        onBlur: m,
        onFocus: p,
        "aria-describedby": b,
        ..._
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: u }),
    i && /* @__PURE__ */ n.jsx("div", { id: S, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: A, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
Ys.displayName = "Checkbox";
const rr = ({
  id: e,
  name: t,
  type: r = "text",
  value: a,
  defaultValue: o,
  placeholder: s,
  disabled: i = !1,
  readOnly: l = !1,
  required: c = !1,
  hasError: u = !1,
  describedBy: d,
  className: m,
  width: p = "full",
  inputMode: _,
  autoComplete: B,
  maxLength: x,
  minLength: j,
  pattern: F,
  step: I,
  min: L,
  max: S,
  showValueLabels: A = !1,
  showCurrentValue: b = !1,
  valueLabels: M,
  onChange: D,
  onBlur: C,
  onFocus: v,
  onKeyDown: h,
  ...y
}) => {
  const [z, ae] = pe(a || o || (r === "range" ? L || "0" : ""));
  ye(() => {
    a !== void 0 && ae(a);
  }, [a]);
  const P = (ce) => {
    ae(ce.target.value), D?.(ce);
  }, Q = r === "range", te = X(
    "nhsuk-input",
    {
      "nhsuk-input--error": u,
      "nhsuk-input--range": Q,
      [`nhsuk-input--width-${p}`]: p !== "full" && !Q
    },
    m
  ), oe = Q ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    A && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: M?.min || L || "0" }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: te,
          id: e,
          name: t,
          type: r,
          value: z,
          defaultValue: o,
          placeholder: s,
          disabled: i,
          readOnly: l,
          required: c,
          "aria-describedby": d,
          inputMode: _,
          autoComplete: B,
          maxLength: x,
          minLength: j,
          pattern: F,
          step: I,
          min: L,
          max: S,
          onChange: P,
          onBlur: C,
          onFocus: v,
          onKeyDown: h,
          ...y
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: M?.max || S || "100" })
    ] }),
    !A && /* @__PURE__ */ n.jsx(
      "input",
      {
        className: te,
        id: e,
        name: t,
        type: r,
        value: z,
        defaultValue: o,
        placeholder: s,
        disabled: i,
        readOnly: l,
        required: c,
        "aria-describedby": d,
        inputMode: _,
        autoComplete: B,
        maxLength: x,
        minLength: j,
        pattern: F,
        step: I,
        min: L,
        max: S,
        onChange: P,
        onBlur: C,
        onFocus: v,
        onKeyDown: h,
        ...y
      }
    ),
    b && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      M?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: z })
    ] }) })
  ] }) : null;
  return Q ? oe : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: te,
      id: e,
      name: t,
      type: r,
      value: a,
      defaultValue: o,
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": d,
      inputMode: _,
      autoComplete: B,
      maxLength: x,
      minLength: j,
      pattern: F,
      step: I,
      min: L,
      max: S,
      onChange: D,
      onBlur: C,
      onFocus: v,
      onKeyDown: h,
      ...y
    }
  );
}, ar = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = X(
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
}, sr = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = X(
    "nhsuk-fieldset",
    r
  ), i = X(
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
}, qs = ({
  items: e,
  name: t,
  idPrefix: r,
  legend: a,
  isPageHeading: o = !1,
  legendSize: s = "l",
  hint: i,
  errorMessage: l,
  className: c = "",
  small: u = !1,
  onChange: d,
  fieldsetAttributes: m,
  attributes: p,
  ..._
}) => {
  const [B, x] = pe(
    e.filter((D) => D.checked).map((D) => D.value)
  ), j = r || t, F = i ? `${j}-hint` : void 0, I = l ? `${j}-error` : void 0, L = [F, I].filter(Boolean).join(" ") || void 0, S = (D, C) => {
    let v;
    C ? v = [...B, D] : v = B.filter((h) => h !== D), x(v), d?.(v);
  }, A = () => e.map((D, C) => {
    const v = `${j}-${C + 1}`, h = `${v}-conditional`, y = B.includes(D.value), z = D.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: v,
          name: t,
          type: "checkbox",
          value: D.value,
          checked: y,
          disabled: z,
          onChange: (ae) => S(D.value, ae.target.checked),
          "aria-describedby": D.hint ? `${v}-hint` : L,
          ...D.conditional && {
            "aria-controls": h,
            "aria-expanded": y ? "true" : "false"
          },
          ...D.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: v, children: D.text }),
      D.hint && /* @__PURE__ */ n.jsx("div", { id: `${v}-hint`, className: "nhsuk-checkboxes__hint", children: D.hint }),
      D.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: X("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !y
          }),
          id: h,
          children: typeof D.conditional == "object" && D.conditional !== null && "label" in D.conditional && "id" in D.conditional && "name" in D.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            D.conditional.label && /* @__PURE__ */ n.jsx(ar, { htmlFor: D.conditional.id, children: D.conditional.label }),
            /* @__PURE__ */ n.jsx(rr, { ...D.conditional })
          ] }) : D.conditional
        }
      )
    ] }, D.value);
  }), b = X(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": u
    },
    c
  ), M = X("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: M, ...p, ..._, children: /* @__PURE__ */ n.jsxs(
    sr,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: L,
      ...m,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: F, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: I, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: b, children: A() })
      ]
    }
  ) });
};
qs.displayName = "Checkboxes";
const Ks = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  placeholder: o,
  disabled: s = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: c = !1,
  describedBy: u,
  className: d,
  rows: m = 5,
  cols: p,
  maxLength: _,
  minLength: B,
  wrap: x = "soft",
  resize: j = "vertical",
  autoComplete: F,
  spellCheck: I,
  onChange: L,
  onBlur: S,
  onFocus: A,
  onKeyDown: b,
  ...M
}) => {
  const D = X(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": c,
      [`nhsuk-textarea--resize-${j}`]: j !== "vertical"
    },
    d
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
      "aria-describedby": u,
      rows: m,
      cols: p,
      maxLength: _,
      minLength: B,
      wrap: x,
      autoComplete: F,
      spellCheck: I,
      onChange: L,
      onBlur: S,
      onFocus: A,
      onKeyDown: b,
      ...M
    }
  );
}, oa = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = X("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, id: e, ...a, children: r });
}, ef = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: a = 75,
  name: o,
  value: s = "",
  rows: i,
  className: l,
  countMessage: c,
  onCountChange: u,
  onChange: d,
  ...m
}) => {
  const [p, _] = pe(s), [B, x] = pe(0), [j, F] = pe(!1), [I, L] = pe(!1), S = ee((v) => r ? v.trim() === "" ? 0 : v.trim().split(/\s+/).length : v.length, [r]);
  ye(() => {
    const v = S(p), h = t || r || 0, y = h - v, z = Math.floor(h * (a / 100));
    x(y), F(v > h), L(v >= z || v > h), u && u(v, y);
  }, [p, t, r, a, S, u]);
  const A = (v) => {
    const h = v.target.value;
    _(h), d && d(v);
  }, b = () => {
    const v = t || r || 0, h = r ? "word" : "character", y = r ? "words" : "characters";
    if (!I)
      return `You can enter up to ${v} ${v === 1 ? h : y}`;
    if (j) {
      const z = Math.abs(B);
      return `You have ${z} ${z === 1 ? h : y} too many`;
    } else
      return `You have ${B} ${B === 1 ? h : y} remaining`;
  }, M = X(
    "nhsuk-character-count",
    l
  ), D = X(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !I,
      "nhsuk-error-message": j
    },
    c?.classes
  ), C = X(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": j
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
          Ks,
          {
            id: e,
            name: o,
            value: p,
            rows: i,
            className: C,
            onChange: A,
            "aria-describedby": `${e}-info`,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          oa,
          {
            id: `${e}-info`,
            className: D,
            children: b()
          }
        )
      ]
    }
  );
}, Zs = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  className: a,
  children: o,
  ...s
}) => {
  const i = X(
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
      ...s,
      children: o
    }
  );
}, Js = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  disabled: o = !1,
  required: s = !1,
  hasError: i = !1,
  describedBy: l,
  className: c,
  multiple: u = !1,
  size: d,
  autoComplete: m,
  options: p,
  children: _,
  onChange: B,
  onBlur: x,
  onFocus: j,
  ...F
}) => {
  const I = X(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    c
  ), L = () => p ? p.map((S, A) => /* @__PURE__ */ n.jsx(
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
      className: I,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      disabled: o,
      required: s,
      "aria-describedby": l,
      multiple: u,
      size: d,
      autoComplete: m,
      onChange: B,
      onBlur: x,
      onFocus: j,
      ...F,
      children: _ || L()
    }
  );
}, ia = Js;
ia.Option = Zs;
const tf = ({
  name: e,
  value: t,
  defaultValue: r,
  hasError: a = !1,
  describedBy: o,
  className: s,
  size: i = "normal",
  inline: l = !1,
  options: c,
  onChange: u,
  onBlur: d,
  onFocus: m,
  ...p
}) => {
  const [_, B] = pe(t || r || ""), x = X(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    s
  ), j = (F) => {
    const I = F.target.value;
    B(I), u && u(F);
  };
  return /* @__PURE__ */ n.jsx(sr, { children: /* @__PURE__ */ n.jsx("div", { className: x, ...p, children: c.map((F, I) => {
    const L = `${e}-${I}`, S = F.conditional ? `${L}-conditional` : void 0, A = _ === F.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: L,
          name: e,
          type: "radio",
          value: F.value,
          disabled: F.disabled,
          checked: A,
          "aria-describedby": o,
          onChange: j,
          onBlur: d,
          onFocus: m
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: L, children: F.text }),
      F.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: F.hint }),
      F.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: X("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !A
          }),
          id: S,
          children: typeof F.conditional == "object" && F.conditional !== null && "label" in F.conditional && "id" in F.conditional && "name" in F.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            F.conditional.label && /* @__PURE__ */ n.jsx(ar, { htmlFor: F.conditional.id, children: F.conditional.label }),
            /* @__PURE__ */ n.jsx(rr, { ...F.conditional })
          ] }) : F.conditional
        }
      )
    ] }, F.value);
  }) }) });
}, la = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...o
}) => {
  const s = X(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), i = a ? { maxWidth: a } : void 0;
  return /* @__PURE__ */ n.jsx("div", { className: s, style: i, ...o, children: e });
}, Rt = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = X("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: e });
}, or = ({
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
  const u = X(
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
  return /* @__PURE__ */ n.jsx("div", { className: u, ...c, children: e });
}, Xs = ({
  children: e,
  className: t,
  ...r
}) => {
  const o = Ie.Children.toArray(e)[0], s = Ie.isValidElement(o) && (o.type === Rt || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(la, { className: t, ...r, children: s ? e : /* @__PURE__ */ n.jsx(Rt, { children: e }) });
}, Qs = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), u = X(
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
  return /* @__PURE__ */ n.jsx(c, { className: u, role: s, ...l, children: e });
}, eo = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = X("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, to = Qs;
to.Item = eo;
const nf = ({
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
}, rf = {
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
}, af = ({
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
}, sf = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, of = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], ca = ({
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
}, Ze = ({
  level: e,
  className: t,
  text: r,
  html: a,
  children: o,
  size: s,
  marginBottom: i,
  ...l
}) => {
  const u = e ?? ((B) => {
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
  })(s), d = X(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${s}`]: s
    },
    t
  ), m = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), p = `h${u}`, _ = i ? { ...l.style, marginBottom: i } : l.style;
  return na(
    p,
    { className: d, ...l, style: _ },
    m
  );
}, wr = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...o
}) => {
  const s = X("nhsuk-error-message", t);
  return /* @__PURE__ */ n.jsxs("span", { className: s, id: e, ...o, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      r,
      " "
    ] }),
    a
  ] });
}, lf = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const c = xe(null);
  ye(() => {
    c.current && c.current.focus();
  }, []);
  const u = X(
    "nhsuk-error-summary",
    s
  ), d = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, m = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, p = (_) => {
    const B = _.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text;
    return _.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: _.href,
        ..._.attributes,
        children: B
      }
    ) : B;
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
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((_, B) => /* @__PURE__ */ n.jsx("li", { children: p(_) }, B)) })
        ] })
      ]
    }
  );
}, cf = ({
  id: e,
  className: t,
  items: r,
  namePrefix: a,
  values: o = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: c,
  ...u
}) => {
  const [d, m] = pe(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [p, _] = pe({}), B = (P) => P % 4 === 0 && P % 100 !== 0 || P % 400 === 0, x = (P, Q) => {
    const te = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return P === 2 && B(Q) ? 29 : te[P - 1];
  }, j = (P, Q, te) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Day must be a number";
    const oe = parseInt(P, 10);
    if (oe < 1 || oe > 31) return "Day must be between 1 and 31";
    if (Q && te) {
      const ce = parseInt(Q, 10), N = parseInt(te, 10);
      if (!isNaN(ce) && !isNaN(N) && ce >= 1 && ce <= 12) {
        const K = x(ce, N);
        if (oe > K)
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
          ][ce - 1]} ${N} only has ${K} days`;
      }
    }
  }, F = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Month must be a number";
    const Q = parseInt(P, 10);
    if (Q < 1 || Q > 12) return "Month must be between 1 and 12";
  }, I = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Year must be a number";
    const Q = parseInt(P, 10), te = (/* @__PURE__ */ new Date()).getFullYear();
    if (Q < 1900 || Q > te + 10)
      return `Year must be between 1900 and ${te + 10}`;
  }, L = (P, Q, te) => {
    if (!P || !Q || !te) return;
    const oe = parseInt(P, 10), ce = parseInt(Q, 10), N = parseInt(te, 10);
    if (isNaN(oe) || isNaN(ce) || isNaN(N) || ce < 1 || ce > 12 || N < 1900) return;
    const K = x(ce, N);
    oe < 1 || oe > K;
  }, S = ee((P, Q) => {
    const te = {
      ...d,
      [P]: Q
    };
    m(te), c && c(te);
  }, [d, c]), A = ee((P) => {
    const Q = d[P];
    let te;
    if (P === "day")
      te = j(Q, d.month, d.year);
    else if (P === "month") {
      if (te = F(Q), !te && d.day) {
        const oe = j(d.day, Q, d.year);
        _((ce) => ({
          ...ce,
          day: oe
        }));
      }
    } else if (P === "year" && (te = I(Q), !te && d.day && d.month)) {
      const oe = j(d.day, d.month, Q);
      _((ce) => ({
        ...ce,
        day: oe
      }));
    }
    if (_((oe) => ({
      ...oe,
      [P]: te
    })), d.day && d.month && d.year) {
      const oe = L(
        P === "day" ? Q : d.day,
        P === "month" ? Q : d.month,
        P === "year" ? Q : d.year
      );
      oe && _((ce) => ({
        ...ce,
        day: oe
      }));
    }
  }, [d, j, F, I, L]), b = _e(() => [
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
  ], []), M = r || b;
  let D = s?.describedBy || "";
  const C = i ? `${e}-hint` : "", v = l ? `${e}-error` : "";
  C && (D = D ? `${D} ${C}` : C), v && (D = D ? `${D} ${v}` : v);
  const h = Object.values(p).some((P) => P), y = X(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || h
    }
  ), z = X(
    "nhsuk-date-input",
    t
  ), ae = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      oa,
      {
        id: C,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      wr,
      {
        id: v,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(p).map(
      ([P, Q]) => Q ? /* @__PURE__ */ n.jsxs(
        wr,
        {
          id: `${e}-${P}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            Q
          ]
        },
        `${P}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: z, id: e, "data-testid": "date-input", ...u, children: M.map((P) => {
      const Q = P.id || `${e}-${P.name}`, te = a ? `${a}[${P.name}]` : P.name, oe = P.label || P.name.charAt(0).toUpperCase() + P.name.slice(1), ce = p[P.name], N = d[P.name] || "";
      let K = D;
      if (ce) {
        const H = `${e}-${P.name}-error`;
        K = K ? `${K} ${H}` : H;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          ar,
          {
            htmlFor: Q,
            className: "nhsuk-date-input__label",
            children: oe
          }
        ),
        /* @__PURE__ */ n.jsx(
          rr,
          {
            id: Q,
            name: te,
            value: N,
            className: X("nhsuk-date-input__input", P.classes, {
              "nhsuk-input--error": ce
            }),
            inputMode: P.inputmode,
            autoComplete: P.autocomplete,
            pattern: P.pattern,
            "aria-describedby": K || void 0,
            hasError: !!ce,
            onChange: (H) => S(P.name, H.target.value),
            onBlur: () => A(P.name)
          }
        )
      ] }, P.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: y, children: s ? /* @__PURE__ */ n.jsx(
    sr,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: D || void 0,
      children: ae()
    }
  ) : ae() });
}, da = {
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
}, ua = As(da), no = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...da, ...t };
  return /* @__PURE__ */ n.jsx(ua.Provider, { value: r, children: e });
}, df = () => {
  const e = $s(ua);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function ro() {
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
function ao() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = ro(), document.head.appendChild(e);
}
const uf = ({ children: e, theme: t }) => (ye(() => {
  ao();
}, []), /* @__PURE__ */ n.jsx(no, { theme: t, children: e })), ha = ({
  mode: e = "form",
  action: t = "https://www.nhs.uk/search/",
  method: r = "get",
  name: a = "q",
  value: o,
  placeholder: s = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: c,
  disabled: u = !1,
  callbacks: d = {},
  isLoading: m = !1,
  showResults: p = !1,
  results: _ = [],
  formAttributes: B = {},
  inputAttributes: x = {},
  buttonAttributes: j = {},
  preventDefaultSubmit: F = !1,
  debounceMs: I = 300,
  minQueryLength: L = 1
}) => {
  const [S, A] = pe(""), [b, M] = pe(!1), D = xe(void 0), C = xe(null), v = xe(null), h = e === "controlled" && o !== void 0, y = h ? o : S, z = ee((O) => {
    D.current && clearTimeout(D.current), D.current = setTimeout(() => {
      d.onChange && O.length >= L && d.onChange(O);
    }, I);
  }, [d.onChange, I, L]), ae = ee((O) => {
    const V = O.target.value;
    h || A(V), e !== "form" && z(V);
  }, [h, e, z]), P = ee((O) => {
    const V = y.trim(), fe = {
      query: V,
      timestamp: Date.now(),
      formData: new FormData(O.currentTarget)
    };
    e === "controlled" || e === "hybrid" && F ? (O.preventDefault(), d.onSearch && V.length >= L && d.onSearch(fe)) : e === "hybrid" && d.onSearch && V.length >= L && d.onSearch(fe);
  }, [e, y, d.onSearch, F, L]), Q = ee(() => {
    M(!0), d.onFocus?.();
  }, [d.onFocus]), te = ee(() => {
    M(!1), d.onBlur?.();
  }, [d.onBlur]), oe = ee(() => {
    h || A(""), d.onClear?.(), v.current?.focus();
  }, [h, d.onClear]);
  ye(() => () => {
    D.current && clearTimeout(D.current);
  }, []);
  const ce = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: X("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": m
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), N = () => /* @__PURE__ */ n.jsx(
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
  ), K = () => !y || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: oe,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), H = () => !p || !_.length || !b ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: _.map((O) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: O.href ? /* @__PURE__ */ n.jsxs("a", { href: O.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: O.title }),
    O.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: O.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => d.onSearch?.({ query: O.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: O.title }),
        O.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: O.description })
      ]
    }
  ) }, O.id)) });
  return /* @__PURE__ */ n.jsxs("search", { className: X("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": m,
    "nhsuk-header__search--focused": b,
    "nhsuk-header__search--has-results": p && _.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: C,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        onSubmit: P,
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
                ref: v,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: y,
                onChange: ae,
                onFocus: Q,
                onBlur: te,
                disabled: u || m,
                "aria-expanded": p && _.length > 0,
                "aria-haspopup": "listbox",
                ...x
              }
            ),
            K()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: u || m || e !== "form" && y.length < L,
              ...j,
              children: [
                m ? N() : ce(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: m ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    H()
  ] });
}, fa = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: u = {},
  ...d
}) => {
  const [m, p] = pe(!1), [_, B] = pe(!1), [x, j] = pe(i?.items?.length || 0), [F, I] = pe(!1), [L, S] = pe(!1), [A, b] = pe(!1), M = xe(null), D = xe(null), C = xe(!1), v = xe(null), h = xe([]), y = xe(null);
  ye(() => {
    typeof window > "u" || (b(!0), I(!0));
  }, []), ye(() => {
    if (!A || !i?.items?.length) return;
    h.current = i.items;
    const f = setTimeout(() => {
      M.current && D.current && oe();
    }, 100);
    return () => clearTimeout(f);
  }, [A, i?.items]);
  const z = r.href && !t.href || r.href && r.href === t.href, ae = z ? r.href : t.href, P = X(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), Q = X(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), te = X(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), oe = ee(() => {
    if (!(typeof window > "u" || C.current) && !(!M.current || !D.current || !h.current.length)) {
      C.current = !0;
      try {
        const f = D.current, T = M.current, U = f.offsetWidth, E = T.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (E.length === 0 || U === 0) {
          C.current = !1;
          return;
        }
        const W = window.innerWidth < 768, q = W ? 16 : 32, w = q * 2, ie = U - w, ne = Array.from(E).map((k) => k.offsetWidth), le = ne.reduce((k, R) => k + R, 0), Y = W ? 80 : 100, g = y.current !== null && y.current !== W;
        if (y.current = W, console.log("Overflow check:", {
          containerWidth: U,
          availableContainerWidth: ie,
          totalGutters: w,
          gutterSize: q,
          totalWidth: le,
          mobile: W,
          breakpointChanged: g,
          itemCount: ne.length,
          measurements: ne
        }), le <= ie)
          B(!1), j(h.current.length);
        else {
          const k = ie - Y;
          let R = 0, $ = 0;
          for (let Z = 0; Z < ne.length; Z++) {
            const se = $ + ne[Z];
            if (se <= k)
              $ = se, R = Z + 1;
            else
              break;
          }
          R = Math.max(1, R);
          const G = R < ne.length;
          B(G), j(R);
        }
        C.current = !1;
      } catch (f) {
        console.error("Overflow detection error:", f), B(!1), j(h.current.length), C.current = !1;
      }
    }
  }, []);
  ye(() => {
    if (typeof document > "u") return;
    const f = (T) => {
      T.key === "Escape" && m && p(!1);
    };
    if (m)
      return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [m]), ye(() => {
    if (typeof window > "u" || !A) return;
    const f = () => {
      m && (p(!1), S(!1)), v.current && clearTimeout(v.current), v.current = setTimeout(() => {
        h.current.length > 0 && oe();
      }, 250);
    };
    let T = null, U = null;
    return window.matchMedia && (T = window.matchMedia("(max-width: 767px)"), U = () => {
      console.log("Breakpoint changed:", T?.matches ? "mobile" : "desktop"), h.current.length > 0 && setTimeout(() => oe(), 50);
    }, T.addEventListener ? T.addEventListener("change", U) : T.addListener(U)), window.addEventListener("resize", f), () => {
      window.removeEventListener("resize", f), T && U && (T.removeEventListener ? T.removeEventListener("change", U) : T.removeListener(U)), v.current && clearTimeout(v.current);
    };
  }, [A, m, oe]), ye(() => {
    if (typeof document > "u") return;
    const f = (T) => {
      const U = T.target, E = M.current?.contains(U);
      m && !E && p(!1);
    };
    if (m)
      return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [m]);
  const ce = (f) => {
    f && (f.preventDefault(), f.stopPropagation());
    const T = !m;
    p(T), T ? setTimeout(() => {
      S(!0);
    }, 50) : S(!1);
  }, N = () => /* @__PURE__ */ n.jsxs(
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
  ), K = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : N(), H = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, O = (f, T) => f ? T ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: T, children: f }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: f }) : null, V = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), fe = (f) => {
    if (f.active || f.current) {
      const T = f.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: f.html } }) : f.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: T });
    }
    return f.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: f.html } }) : f.text;
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
        /* @__PURE__ */ n.jsxs("div", { className: Q, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            ae ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: ae, children: [
              K(),
              H(),
              z && O(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              K(),
              H(),
              z && O(r.text)
            ] }),
            r.text && !z && O(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx(ha, { ...o }),
          /* @__PURE__ */ n.jsx(
            nr,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: te,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: X(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !F && A,
                    "nhsuk-header__navigation-container--ssr": !A
                  },
                  l
                ),
                ref: D,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: M, children: [
                  (A ? i.items.slice(0, x) : i.items).map((f, T) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: X(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": f.active || f.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !A && T >= 4
                          // Mark items that would be hidden on client
                        },
                        f.className
                      ),
                      ...f.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: f.href,
                          ...f.active || f.current ? {
                            "aria-current": f.current ? "page" : "true"
                          } : {},
                          children: fe(f)
                        }
                      )
                    },
                    T
                  )),
                  A && _ && x < i.items.length && /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ n.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: ce,
                          type: "button",
                          children: [
                            /* @__PURE__ */ n.jsx("span", { children: "More" }),
                            V()
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
        A && i && i.items && i.items.length > 0 && m && L && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !L,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(x).map((f, T) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: X(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": f.active || f.current
                  }
                ),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: f.href,
                    ...f.active || f.current ? {
                      "aria-current": f.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      p(!1), S(!1);
                    },
                    children: fe(f)
                  }
                )
              },
              `overflow-${x + T}`
            )) })
          }
        )
      ]
    }
  );
}, hf = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: u = {},
  ...d
}) => {
  const m = r.href && !t.href || r.href && r.href === t.href, p = m ? r.href : t.href, _ = X(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), B = X(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), x = X(
    "nhsuk-header__navigation",
    i?.className
  ), j = () => /* @__PURE__ */ n.jsxs(
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
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : j(), I = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, L = (b, M) => b ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: b }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: b }) : null, S = () => !i?.items || i.items.length === 0 ? null : i.items.map((b, M) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: b.href,
          ...b.attributes || {},
          children: b.text
        }
      )
    },
    b.href || M
  )), A = () => o ? /* @__PURE__ */ n.jsx(ha, { ...o }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: _,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...u,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: B, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            p ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: p, children: [
              F(),
              I(),
              m && L(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              F(),
              I(),
              m && L(r.text)
            ] }),
            r.text && !m && L(r.text, r.href)
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
            nr,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: x,
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
}, ff = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: u = {},
  maxVisibleItems: d = 5,
  // New prop to control CSS-based overflow
  ...m
}) => {
  const p = r.href && !t.href || r.href && r.href === t.href, _ = p ? r.href : t.href, B = X(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), x = X(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), j = X(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), F = () => /* @__PURE__ */ n.jsxs(
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
  ), I = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : F(), L = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, S = (b, M) => b ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: b }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: b }) : null, A = (b) => {
    if (b.active || b.current) {
      const M = b.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: M });
    }
    return b.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: B,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...u,
      ...m,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: x, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            _ ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: _, children: [
              I(),
              L(),
              p && S(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              I(),
              L(),
              p && S(r.text)
            ] }),
            r.text && !p && S(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            nr,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: j,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: X(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, d).map((b, M) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: X(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": b.active || b.current
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
                          children: A(b)
                        }
                      )
                    },
                    M
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(d).map((b, M) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: X(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": b.active || b.current
                          }
                        ),
                        children: /* @__PURE__ */ n.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: b.href,
                            ...b.active || b.current ? {
                              "aria-current": b.current ? "page" : "true"
                            } : {},
                            children: A(b)
                          }
                        )
                      },
                      `overflow-${d + M}`
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
}, so = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
  text: a,
  html: o,
  imageURL: s,
  containerClasses: i = "",
  classes: l = "",
  children: c,
  ...u
}) => {
  const d = [
    "nhsuk-hero",
    s && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    s && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-width-container",
    i,
    s ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), p = [
    "nhsuk-hero__heading",
    r,
    !c && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), _ = c || e || a || o, B = () => {
    if (!e) return null;
    const x = { className: p };
    switch (t) {
      case 1:
        return /* @__PURE__ */ n.jsx("h1", { ...x, children: e });
      case 2:
        return /* @__PURE__ */ n.jsx("h2", { ...x, children: e });
      case 3:
        return /* @__PURE__ */ n.jsx("h3", { ...x, children: e });
      case 4:
        return /* @__PURE__ */ n.jsx("h4", { ...x, children: e });
      case 5:
        return /* @__PURE__ */ n.jsx("h5", { ...x, children: e });
      case 6:
        return /* @__PURE__ */ n.jsx("h6", { ...x, children: e });
      default:
        return /* @__PURE__ */ n.jsx("h1", { ...x, children: e });
    }
  };
  return /* @__PURE__ */ n.jsxs(
    "section",
    {
      className: d,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...u,
      children: [
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: _ && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          B(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && _ && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          B(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
so.displayName = "Hero";
const ma = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {}
}) => {
  const c = (d, m = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: X("nhsuk-footer__list-item", {
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
    /* @__PURE__ */ n.jsxs("div", { className: X("nhsuk-width-container", i), children: [
      /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ n.jsx("div", { className: X("nhsuk-footer", e), children: u ? (
        // Multi-column layout
        /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((d) => c(d)) }),
          r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((d) => c(d)) }),
          a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((d) => c(d)) }),
          o && o.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((d) => c(d)) })
        ] })
      ) : (
        // Single column layout (default)
        /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
          t.map((d) => c(d, !0)),
          (r || []).map((d) => c(d, !0)),
          (a || []).map((d) => c(d, !0)),
          (o || []).map((d) => c(d, !0))
        ] })
      ) }),
      !u && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
    ] }),
    u && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function It(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function oo(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ir(e) {
  let t, r, a;
  e.length !== 2 ? (t = It, r = (l, c) => It(e(l), c), a = (l, c) => e(l) - c) : (t = e === It || e === oo ? e : io, r = e, a = e);
  function o(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const m = u + d >>> 1;
        r(l[m], c) < 0 ? u = m + 1 : d = m;
      } while (u < d);
    }
    return u;
  }
  function s(l, c, u = 0, d = l.length) {
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
    const m = o(l, c, u, d - 1);
    return m > u && a(l[m - 1], c) > -a(l[m], c) ? m - 1 : m;
  }
  return { left: o, center: i, right: s };
}
function io() {
  return 0;
}
function lo(e) {
  return e === null ? NaN : +e;
}
const co = ir(It), uo = co.right;
ir(lo).center;
const ho = Math.sqrt(50), fo = Math.sqrt(10), mo = Math.sqrt(2);
function pa(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= ho ? 10 : s >= fo ? 5 : s >= mo ? 2 : 1;
  let l, c, u;
  return o < 0 ? (u = Math.pow(10, -o) / i, l = Math.round(e * u), c = Math.round(t * u), l / u < e && ++l, c / u > t && --c, u = -u) : (u = Math.pow(10, o) * i, l = Math.round(e / u), c = Math.round(t / u), l * u < e && ++l, c * u > t && --c), c < l && 0.5 <= r && r < 2 ? pa(e, t, r * 2) : [l, c, u];
}
function Sr(e, t, r) {
  return t = +t, e = +e, r = +r, pa(e, t, r)[2];
}
function Cr(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? Sr(t, e, r) : Sr(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function po(e, t) {
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
function lr(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function ga(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function wt() {
}
var _t = 0.7, Lt = 1 / _t, ut = "\\s*([+-]?\\d+)\\s*", vt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ee = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", go = /^#([0-9a-f]{3,8})$/, bo = new RegExp(`^rgb\\(${ut},${ut},${ut}\\)$`), xo = new RegExp(`^rgb\\(${Ee},${Ee},${Ee}\\)$`), yo = new RegExp(`^rgba\\(${ut},${ut},${ut},${vt}\\)$`), _o = new RegExp(`^rgba\\(${Ee},${Ee},${Ee},${vt}\\)$`), vo = new RegExp(`^hsl\\(${vt},${Ee},${Ee}\\)$`), ko = new RegExp(`^hsla\\(${vt},${Ee},${Ee},${vt}\\)$`), jr = {
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
lr(wt, kt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Nr,
  // Deprecated! Use color.formatHex.
  formatHex: Nr,
  formatHex8: wo,
  formatHsl: So,
  formatRgb: Tr,
  toString: Tr
});
function Nr() {
  return this.rgb().formatHex();
}
function wo() {
  return this.rgb().formatHex8();
}
function So() {
  return ba(this).formatHsl();
}
function Tr() {
  return this.rgb().formatRgb();
}
function kt(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = go.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Dr(t) : r === 3 ? new Te(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Dt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Dt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = bo.exec(e)) ? new Te(t[1], t[2], t[3], 1) : (t = xo.exec(e)) ? new Te(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = yo.exec(e)) ? Dt(t[1], t[2], t[3], t[4]) : (t = _o.exec(e)) ? Dt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = vo.exec(e)) ? Ir(t[1], t[2] / 100, t[3] / 100, 1) : (t = ko.exec(e)) ? Ir(t[1], t[2] / 100, t[3] / 100, t[4]) : jr.hasOwnProperty(e) ? Dr(jr[e]) : e === "transparent" ? new Te(NaN, NaN, NaN, 0) : null;
}
function Dr(e) {
  return new Te(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Dt(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new Te(e, t, r, a);
}
function Co(e) {
  return e instanceof wt || (e = kt(e)), e ? (e = e.rgb(), new Te(e.r, e.g, e.b, e.opacity)) : new Te();
}
function Dn(e, t, r, a) {
  return arguments.length === 1 ? Co(e) : new Te(e, t, r, a ?? 1);
}
function Te(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
lr(Te, Dn, ga(wt, {
  brighter(e) {
    return e = e == null ? Lt : Math.pow(Lt, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _t : Math.pow(_t, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Te(rt(this.r), rt(this.g), rt(this.b), Et(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Fr,
  // Deprecated! Use color.formatHex.
  formatHex: Fr,
  formatHex8: jo,
  formatRgb: Br,
  toString: Br
}));
function Fr() {
  return `#${nt(this.r)}${nt(this.g)}${nt(this.b)}`;
}
function jo() {
  return `#${nt(this.r)}${nt(this.g)}${nt(this.b)}${nt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Br() {
  const e = Et(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${rt(this.r)}, ${rt(this.g)}, ${rt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Et(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function rt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function nt(e) {
  return e = rt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ir(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Re(e, t, r, a);
}
function ba(e) {
  if (e instanceof Re) return new Re(e.h, e.s, e.l, e.opacity);
  if (e instanceof wt || (e = kt(e)), !e) return new Re();
  if (e instanceof Re) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Re(i, l, c, e.opacity);
}
function No(e, t, r, a) {
  return arguments.length === 1 ? ba(e) : new Re(e, t, r, a ?? 1);
}
function Re(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
lr(Re, No, ga(wt, {
  brighter(e) {
    return e = e == null ? Lt : Math.pow(Lt, e), new Re(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _t : Math.pow(_t, e), new Re(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new Te(
      vn(e >= 240 ? e - 240 : e + 120, o, a),
      vn(e, o, a),
      vn(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Re(Rr(this.h), Ft(this.s), Ft(this.l), Et(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Et(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Rr(this.h)}, ${Ft(this.s) * 100}%, ${Ft(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Rr(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ft(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function vn(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const cr = (e) => () => e;
function To(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Do(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function Fo(e) {
  return (e = +e) == 1 ? xa : function(t, r) {
    return r - t ? Do(t, r, e) : cr(isNaN(t) ? r : t);
  };
}
function xa(e, t) {
  var r = t - e;
  return r ? To(e, r) : cr(isNaN(e) ? t : e);
}
const Lr = function e(t) {
  var r = Fo(t);
  function a(o, s) {
    var i = r((o = Dn(o)).r, (s = Dn(s)).r), l = r(o.g, s.g), c = r(o.b, s.b), u = xa(o.opacity, s.opacity);
    return function(d) {
      return o.r = i(d), o.g = l(d), o.b = c(d), o.opacity = u(d), o + "";
    };
  }
  return a.gamma = e, a;
}(1);
function Bo(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Io(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ro(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = dr(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Lo(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function Mt(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Eo(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = dr(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var Fn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, kn = new RegExp(Fn.source, "g");
function Mo(e) {
  return function() {
    return e;
  };
}
function $o(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ao(e, t) {
  var r = Fn.lastIndex = kn.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = Fn.exec(e)) && (o = kn.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: Mt(a, o) })), r = kn.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? $o(c[0].x) : Mo(t) : (t = c.length, function(u) {
    for (var d = 0, m; d < t; ++d) l[(m = c[d]).i] = m.x(u);
    return l.join("");
  });
}
function dr(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? cr(t) : (r === "number" ? Mt : r === "string" ? (a = kt(t)) ? (t = a, Lr) : Ao : t instanceof kt ? Lr : t instanceof Date ? Lo : Io(t) ? Bo : Array.isArray(t) ? Ro : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Eo : Mt)(e, t);
}
function Ho(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Po(e) {
  return function() {
    return e;
  };
}
function zo(e) {
  return +e;
}
var Er = [0, 1];
function ct(e) {
  return e;
}
function Bn(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Po(isNaN(t) ? NaN : 0.5);
}
function Wo(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Oo(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = Bn(o, a), s = r(i, s)) : (a = Bn(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function Uo(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = Bn(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = uo(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function Go(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Vo() {
  var e = Er, t = Er, r = dr, a, o, s, i = ct, l, c, u;
  function d() {
    var p = Math.min(e.length, t.length);
    return i !== ct && (i = Wo(e[0], e[p - 1])), l = p > 2 ? Uo : Oo, c = u = null, m;
  }
  function m(p) {
    return p == null || isNaN(p = +p) ? s : (c || (c = l(e.map(a), t, r)))(a(i(p)));
  }
  return m.invert = function(p) {
    return i(o((u || (u = l(t, e.map(a), Mt)))(p)));
  }, m.domain = function(p) {
    return arguments.length ? (e = Array.from(p, zo), d()) : e.slice();
  }, m.range = function(p) {
    return arguments.length ? (t = Array.from(p), d()) : t.slice();
  }, m.rangeRound = function(p) {
    return t = Array.from(p), r = Ho, d();
  }, m.clamp = function(p) {
    return arguments.length ? (i = p ? !0 : ct, d()) : i !== ct;
  }, m.interpolate = function(p) {
    return arguments.length ? (r = p, d()) : r;
  }, m.unknown = function(p) {
    return arguments.length ? (s = p, m) : s;
  }, function(p, _) {
    return a = p, o = _, d();
  };
}
function Yo() {
  return Vo()(ct, ct);
}
function qo(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const wn = /* @__PURE__ */ new Date(), Sn = /* @__PURE__ */ new Date();
function we(e, t, r, a) {
  function o(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return o.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), o.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), o.round = (s) => {
    const i = o(s), l = o.ceil(s);
    return s - i < l - s ? i : l;
  }, o.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), o.range = (s, i, l) => {
    const c = [];
    if (s = o.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (u < s && s < i);
    return c;
  }, o.filter = (s) => we((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), r && (o.count = (s, i) => (wn.setTime(+s), Sn.setTime(+i), e(wn), e(Sn), Math.floor(r(wn, Sn))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const $t = we(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
$t.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? we((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : $t);
$t.range;
const Ye = 1e3, Fe = Ye * 60, qe = Fe * 60, Je = qe * 24, ur = Je * 7, Mr = Je * 30, Cn = Je * 365, dt = we((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ye);
}, (e, t) => (t - e) / Ye, (e) => e.getUTCSeconds());
dt.range;
const hr = we((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ye);
}, (e, t) => {
  e.setTime(+e + t * Fe);
}, (e, t) => (t - e) / Fe, (e) => e.getMinutes());
hr.range;
const Ko = we((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Fe);
}, (e, t) => (t - e) / Fe, (e) => e.getUTCMinutes());
Ko.range;
const fr = we((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ye - e.getMinutes() * Fe);
}, (e, t) => {
  e.setTime(+e + t * qe);
}, (e, t) => (t - e) / qe, (e) => e.getHours());
fr.range;
const Zo = we((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * qe);
}, (e, t) => (t - e) / qe, (e) => e.getUTCHours());
Zo.range;
const St = we(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Fe) / Je,
  (e) => e.getDate() - 1
);
St.range;
const mr = we((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Je, (e) => e.getUTCDate() - 1);
mr.range;
const Jo = we((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Je, (e) => Math.floor(e / Je));
Jo.range;
function st(e) {
  return we((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Fe) / ur);
}
const pn = st(0), At = st(1), Xo = st(2), Qo = st(3), ht = st(4), ei = st(5), ti = st(6);
pn.range;
At.range;
Xo.range;
Qo.range;
ht.range;
ei.range;
ti.range;
function ot(e) {
  return we((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / ur);
}
const ya = ot(0), Ht = ot(1), ni = ot(2), ri = ot(3), ft = ot(4), ai = ot(5), si = ot(6);
ya.range;
Ht.range;
ni.range;
ri.range;
ft.range;
ai.range;
si.range;
const pr = we((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
pr.range;
const oi = we((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
oi.range;
const Xe = we((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Xe.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : we((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Xe.range;
const at = we((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
at.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : we((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
at.range;
function ii(e, t, r, a, o, s) {
  const i = [
    [dt, 1, Ye],
    [dt, 5, 5 * Ye],
    [dt, 15, 15 * Ye],
    [dt, 30, 30 * Ye],
    [s, 1, Fe],
    [s, 5, 5 * Fe],
    [s, 15, 15 * Fe],
    [s, 30, 30 * Fe],
    [o, 1, qe],
    [o, 3, 3 * qe],
    [o, 6, 6 * qe],
    [o, 12, 12 * qe],
    [a, 1, Je],
    [a, 2, 2 * Je],
    [r, 1, ur],
    [t, 1, Mr],
    [t, 3, 3 * Mr],
    [e, 1, Cn]
  ];
  function l(u, d, m) {
    const p = d < u;
    p && ([u, d] = [d, u]);
    const _ = m && typeof m.range == "function" ? m : c(u, d, m), B = _ ? _.range(u, +d + 1) : [];
    return p ? B.reverse() : B;
  }
  function c(u, d, m) {
    const p = Math.abs(d - u) / m, _ = ir(([, , j]) => j).right(i, p);
    if (_ === i.length) return e.every(Cr(u / Cn, d / Cn, m));
    if (_ === 0) return $t.every(Math.max(Cr(u, d, m), 1));
    const [B, x] = i[p / i[_ - 1][2] < i[_][2] / p ? _ - 1 : _];
    return B.every(x);
  }
  return [l, c];
}
const [li, ci] = ii(Xe, pr, pn, St, fr, hr);
function jn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Nn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function bt(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function di(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, u = xt(o), d = yt(o), m = xt(s), p = yt(s), _ = xt(i), B = yt(i), x = xt(l), j = yt(l), F = xt(c), I = yt(c), L = {
    a: te,
    A: oe,
    b: ce,
    B: N,
    c: null,
    d: Wr,
    e: Wr,
    f: Ri,
    g: Oi,
    G: Gi,
    H: Fi,
    I: Bi,
    j: Ii,
    L: _a,
    m: Li,
    M: Ei,
    p: K,
    q: H,
    Q: Gr,
    s: Vr,
    S: Mi,
    u: $i,
    U: Ai,
    V: Hi,
    w: Pi,
    W: zi,
    x: null,
    X: null,
    y: Wi,
    Y: Ui,
    Z: Vi,
    "%": Ur
  }, S = {
    a: O,
    A: V,
    b: fe,
    B: f,
    c: null,
    d: Or,
    e: Or,
    f: Zi,
    g: ol,
    G: ll,
    H: Yi,
    I: qi,
    j: Ki,
    L: ka,
    m: Ji,
    M: Xi,
    p: T,
    q: U,
    Q: Gr,
    s: Vr,
    S: Qi,
    u: el,
    U: tl,
    V: nl,
    w: rl,
    W: al,
    x: null,
    X: null,
    y: sl,
    Y: il,
    Z: cl,
    "%": Ur
  }, A = {
    a: v,
    A: h,
    b: y,
    B: z,
    c: ae,
    d: Pr,
    e: Pr,
    f: ji,
    g: Hr,
    G: Ar,
    H: zr,
    I: zr,
    j: ki,
    L: Ci,
    m: vi,
    M: wi,
    p: C,
    q: _i,
    Q: Ti,
    s: Di,
    S: Si,
    u: pi,
    U: gi,
    V: bi,
    w: mi,
    W: xi,
    x: P,
    X: Q,
    y: Hr,
    Y: Ar,
    Z: yi,
    "%": Ni
  };
  L.x = b(r, L), L.X = b(a, L), L.c = b(t, L), S.x = b(r, S), S.X = b(a, S), S.c = b(t, S);
  function b(E, W) {
    return function(q) {
      var w = [], ie = -1, ne = 0, le = E.length, Y, g, k;
      for (q instanceof Date || (q = /* @__PURE__ */ new Date(+q)); ++ie < le; )
        E.charCodeAt(ie) === 37 && (w.push(E.slice(ne, ie)), (g = $r[Y = E.charAt(++ie)]) != null ? Y = E.charAt(++ie) : g = Y === "e" ? " " : "0", (k = W[Y]) && (Y = k(q, g)), w.push(Y), ne = ie + 1);
      return w.push(E.slice(ne, ie)), w.join("");
    };
  }
  function M(E, W) {
    return function(q) {
      var w = bt(1900, void 0, 1), ie = D(w, E, q += "", 0), ne, le;
      if (ie != q.length) return null;
      if ("Q" in w) return new Date(w.Q);
      if ("s" in w) return new Date(w.s * 1e3 + ("L" in w ? w.L : 0));
      if (W && !("Z" in w) && (w.Z = 0), "p" in w && (w.H = w.H % 12 + w.p * 12), w.m === void 0 && (w.m = "q" in w ? w.q : 0), "V" in w) {
        if (w.V < 1 || w.V > 53) return null;
        "w" in w || (w.w = 1), "Z" in w ? (ne = Nn(bt(w.y, 0, 1)), le = ne.getUTCDay(), ne = le > 4 || le === 0 ? Ht.ceil(ne) : Ht(ne), ne = mr.offset(ne, (w.V - 1) * 7), w.y = ne.getUTCFullYear(), w.m = ne.getUTCMonth(), w.d = ne.getUTCDate() + (w.w + 6) % 7) : (ne = jn(bt(w.y, 0, 1)), le = ne.getDay(), ne = le > 4 || le === 0 ? At.ceil(ne) : At(ne), ne = St.offset(ne, (w.V - 1) * 7), w.y = ne.getFullYear(), w.m = ne.getMonth(), w.d = ne.getDate() + (w.w + 6) % 7);
      } else ("W" in w || "U" in w) && ("w" in w || (w.w = "u" in w ? w.u % 7 : "W" in w ? 1 : 0), le = "Z" in w ? Nn(bt(w.y, 0, 1)).getUTCDay() : jn(bt(w.y, 0, 1)).getDay(), w.m = 0, w.d = "W" in w ? (w.w + 6) % 7 + w.W * 7 - (le + 5) % 7 : w.w + w.U * 7 - (le + 6) % 7);
      return "Z" in w ? (w.H += w.Z / 100 | 0, w.M += w.Z % 100, Nn(w)) : jn(w);
    };
  }
  function D(E, W, q, w) {
    for (var ie = 0, ne = W.length, le = q.length, Y, g; ie < ne; ) {
      if (w >= le) return -1;
      if (Y = W.charCodeAt(ie++), Y === 37) {
        if (Y = W.charAt(ie++), g = A[Y in $r ? W.charAt(ie++) : Y], !g || (w = g(E, q, w)) < 0) return -1;
      } else if (Y != q.charCodeAt(w++))
        return -1;
    }
    return w;
  }
  function C(E, W, q) {
    var w = u.exec(W.slice(q));
    return w ? (E.p = d.get(w[0].toLowerCase()), q + w[0].length) : -1;
  }
  function v(E, W, q) {
    var w = _.exec(W.slice(q));
    return w ? (E.w = B.get(w[0].toLowerCase()), q + w[0].length) : -1;
  }
  function h(E, W, q) {
    var w = m.exec(W.slice(q));
    return w ? (E.w = p.get(w[0].toLowerCase()), q + w[0].length) : -1;
  }
  function y(E, W, q) {
    var w = F.exec(W.slice(q));
    return w ? (E.m = I.get(w[0].toLowerCase()), q + w[0].length) : -1;
  }
  function z(E, W, q) {
    var w = x.exec(W.slice(q));
    return w ? (E.m = j.get(w[0].toLowerCase()), q + w[0].length) : -1;
  }
  function ae(E, W, q) {
    return D(E, t, W, q);
  }
  function P(E, W, q) {
    return D(E, r, W, q);
  }
  function Q(E, W, q) {
    return D(E, a, W, q);
  }
  function te(E) {
    return i[E.getDay()];
  }
  function oe(E) {
    return s[E.getDay()];
  }
  function ce(E) {
    return c[E.getMonth()];
  }
  function N(E) {
    return l[E.getMonth()];
  }
  function K(E) {
    return o[+(E.getHours() >= 12)];
  }
  function H(E) {
    return 1 + ~~(E.getMonth() / 3);
  }
  function O(E) {
    return i[E.getUTCDay()];
  }
  function V(E) {
    return s[E.getUTCDay()];
  }
  function fe(E) {
    return c[E.getUTCMonth()];
  }
  function f(E) {
    return l[E.getUTCMonth()];
  }
  function T(E) {
    return o[+(E.getUTCHours() >= 12)];
  }
  function U(E) {
    return 1 + ~~(E.getUTCMonth() / 3);
  }
  return {
    format: function(E) {
      var W = b(E += "", L);
      return W.toString = function() {
        return E;
      }, W;
    },
    parse: function(E) {
      var W = M(E += "", !1);
      return W.toString = function() {
        return E;
      }, W;
    },
    utcFormat: function(E) {
      var W = b(E += "", S);
      return W.toString = function() {
        return E;
      }, W;
    },
    utcParse: function(E) {
      var W = M(E += "", !0);
      return W.toString = function() {
        return E;
      }, W;
    }
  };
}
var $r = { "-": "", _: " ", 0: "0" }, Se = /^\s*\d+/, ui = /^%/, hi = /[\\^$*+?|[\]().{}]/g;
function ge(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function fi(e) {
  return e.replace(hi, "\\$&");
}
function xt(e) {
  return new RegExp("^(?:" + e.map(fi).join("|") + ")", "i");
}
function yt(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function mi(e, t, r) {
  var a = Se.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function pi(e, t, r) {
  var a = Se.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function gi(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function bi(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function xi(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function Ar(e, t, r) {
  var a = Se.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function Hr(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function yi(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function _i(e, t, r) {
  var a = Se.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function vi(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function Pr(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function ki(e, t, r) {
  var a = Se.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function zr(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function wi(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Si(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Ci(e, t, r) {
  var a = Se.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function ji(e, t, r) {
  var a = Se.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Ni(e, t, r) {
  var a = ui.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Ti(e, t, r) {
  var a = Se.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Di(e, t, r) {
  var a = Se.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function Wr(e, t) {
  return ge(e.getDate(), t, 2);
}
function Fi(e, t) {
  return ge(e.getHours(), t, 2);
}
function Bi(e, t) {
  return ge(e.getHours() % 12 || 12, t, 2);
}
function Ii(e, t) {
  return ge(1 + St.count(Xe(e), e), t, 3);
}
function _a(e, t) {
  return ge(e.getMilliseconds(), t, 3);
}
function Ri(e, t) {
  return _a(e, t) + "000";
}
function Li(e, t) {
  return ge(e.getMonth() + 1, t, 2);
}
function Ei(e, t) {
  return ge(e.getMinutes(), t, 2);
}
function Mi(e, t) {
  return ge(e.getSeconds(), t, 2);
}
function $i(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Ai(e, t) {
  return ge(pn.count(Xe(e) - 1, e), t, 2);
}
function va(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ht(e) : ht.ceil(e);
}
function Hi(e, t) {
  return e = va(e), ge(ht.count(Xe(e), e) + (Xe(e).getDay() === 4), t, 2);
}
function Pi(e) {
  return e.getDay();
}
function zi(e, t) {
  return ge(At.count(Xe(e) - 1, e), t, 2);
}
function Wi(e, t) {
  return ge(e.getFullYear() % 100, t, 2);
}
function Oi(e, t) {
  return e = va(e), ge(e.getFullYear() % 100, t, 2);
}
function Ui(e, t) {
  return ge(e.getFullYear() % 1e4, t, 4);
}
function Gi(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? ht(e) : ht.ceil(e), ge(e.getFullYear() % 1e4, t, 4);
}
function Vi(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ge(t / 60 | 0, "0", 2) + ge(t % 60, "0", 2);
}
function Or(e, t) {
  return ge(e.getUTCDate(), t, 2);
}
function Yi(e, t) {
  return ge(e.getUTCHours(), t, 2);
}
function qi(e, t) {
  return ge(e.getUTCHours() % 12 || 12, t, 2);
}
function Ki(e, t) {
  return ge(1 + mr.count(at(e), e), t, 3);
}
function ka(e, t) {
  return ge(e.getUTCMilliseconds(), t, 3);
}
function Zi(e, t) {
  return ka(e, t) + "000";
}
function Ji(e, t) {
  return ge(e.getUTCMonth() + 1, t, 2);
}
function Xi(e, t) {
  return ge(e.getUTCMinutes(), t, 2);
}
function Qi(e, t) {
  return ge(e.getUTCSeconds(), t, 2);
}
function el(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function tl(e, t) {
  return ge(ya.count(at(e) - 1, e), t, 2);
}
function wa(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ft(e) : ft.ceil(e);
}
function nl(e, t) {
  return e = wa(e), ge(ft.count(at(e), e) + (at(e).getUTCDay() === 4), t, 2);
}
function rl(e) {
  return e.getUTCDay();
}
function al(e, t) {
  return ge(Ht.count(at(e) - 1, e), t, 2);
}
function sl(e, t) {
  return ge(e.getUTCFullYear() % 100, t, 2);
}
function ol(e, t) {
  return e = wa(e), ge(e.getUTCFullYear() % 100, t, 2);
}
function il(e, t) {
  return ge(e.getUTCFullYear() % 1e4, t, 4);
}
function ll(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? ft(e) : ft.ceil(e), ge(e.getUTCFullYear() % 1e4, t, 4);
}
function cl() {
  return "+0000";
}
function Ur() {
  return "%";
}
function Gr(e) {
  return +e;
}
function Vr(e) {
  return Math.floor(+e / 1e3);
}
var it, Sa;
dl({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function dl(e) {
  return it = di(e), Sa = it.format, it.parse, it.utcFormat, it.utcParse, it;
}
function ul(e) {
  return new Date(e);
}
function hl(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ca(e, t, r, a, o, s, i, l, c, u) {
  var d = Yo(), m = d.invert, p = d.domain, _ = u(".%L"), B = u(":%S"), x = u("%I:%M"), j = u("%I %p"), F = u("%a %d"), I = u("%b %d"), L = u("%B"), S = u("%Y");
  function A(b) {
    return (c(b) < b ? _ : l(b) < b ? B : i(b) < b ? x : s(b) < b ? j : a(b) < b ? o(b) < b ? F : I : r(b) < b ? L : S)(b);
  }
  return d.invert = function(b) {
    return new Date(m(b));
  }, d.domain = function(b) {
    return arguments.length ? p(Array.from(b, hl)) : p().map(ul);
  }, d.ticks = function(b) {
    var M = p();
    return e(M[0], M[M.length - 1], b ?? 10);
  }, d.tickFormat = function(b, M) {
    return M == null ? A : u(M);
  }, d.nice = function(b) {
    var M = p();
    return (!b || typeof b.range != "function") && (b = t(M[0], M[M.length - 1], b ?? 10)), b ? p(qo(M, b)) : d;
  }, d.copy = function() {
    return Go(d, Ca(e, t, r, a, o, s, i, l, c, u));
  }, d;
}
function fl() {
  return po.apply(Ca(li, ci, Xe, pr, pn, St, fr, hr, dt, Sa).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function ml({
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
  const u = xe(null), [d, m] = pe(!1), [p, _] = pe(!1), B = t(e.start), x = t(e.end), j = Math.max(x - B, 20), F = () => {
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
  }, I = e.progress ? j * e.progress / 100 : 0, L = () => {
    r?.(e);
  }, S = () => {
    a?.(e);
  }, A = (y) => {
    y.key === "Enter" ? (y.preventDefault(), L()) : y.key === " " && (y.preventDefault(), S());
  }, b = () => {
    m(!0);
  }, M = () => {
    m(!1);
  }, D = () => {
    _(!0), l?.();
  }, C = () => {
    _(!1);
  }, v = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (p || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), h = {
    "--task-left": `${B}px`,
    "--task-width": `${j}px`,
    "--task-color": F(),
    left: `${B}px`,
    width: `${j}px`,
    backgroundColor: F()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: u,
      "data-task-index": s,
      className: v,
      style: h,
      onClick: L,
      onDoubleClick: S,
      onKeyDown: A,
      onMouseDown: b,
      onMouseUp: M,
      onFocus: D,
      onBlur: C,
      "aria-label": c || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${I}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function pl({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let _ = e.getTime(); _ <= t.getTime(); _ += 864e5)
    a.push(new Date(_));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = pe(-1), c = xe(null), u = (_) => {
    if (_.key === "ArrowLeft") {
      _.preventDefault();
      const B = Math.max(0, i === -1 ? 0 : i - 1);
      l(B), p(B);
    } else if (_.key === "ArrowRight") {
      _.preventDefault();
      const B = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(B), p(B);
    } else if (_.key === "ArrowDown") {
      _.preventDefault();
      const B = document.querySelector(".gantt-row .timeline-container");
      B && B.focus();
    } else if (_.key === "Home")
      _.preventDefault(), l(0), p(0);
    else if (_.key === "End") {
      _.preventDefault();
      const B = a.length - 1;
      l(B), p(B);
    }
  }, d = (_) => {
    if (_.key === "ArrowDown") {
      _.preventDefault();
      const B = document.querySelector(".gantt-row .resource-label");
      B && B.focus();
    } else if (_.key === "ArrowRight") {
      _.preventDefault();
      const B = c.current;
      B && B.focus();
    }
  }, m = () => {
    i === -1 && (l(0), setTimeout(() => p(0), 0));
  }, p = (_) => {
    const B = c.current?.querySelector(`[data-date-index="${_}"]`);
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
            children: a.map((_, B) => {
              const x = _.getTime() === s.getTime(), j = i === B;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": B,
                  className: `date-column ${x ? "today" : ""} ${j ? "focused" : ""}`,
                  tabIndex: j ? 0 : -1,
                  role: "button",
                  "aria-label": `${_.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${x ? " (Today)" : ""}`,
                  onFocus: () => l(B),
                  onKeyDown: u,
                  children: _.toLocaleDateString("en-GB", {
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
function gl({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = pe(!1), [u, d] = pe(-1), m = xe(null);
  ye(() => {
    l && u >= 0 && t.length > 0 && setTimeout(() => {
      m.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
    }, 0);
  }, [l, u, t.length]);
  const p = (x) => {
    if (x.key === "ArrowLeft" && x.shiftKey) {
      x.preventDefault(), x.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (x.key === "ArrowRight" && x.shiftKey) {
      x.preventDefault(), x.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (x.key) {
        case "ArrowUp":
          x.preventDefault(), s === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          x.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          x.preventDefault(), m.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (x.preventDefault(), c(!0), d(0));
          break;
      }
      return;
    }
    switch (x.key) {
      case "ArrowLeft":
        x.preventDefault();
        const j = Math.max(0, u - 1);
        d(j), m.current?.querySelector(`[data-task-index="${j}"]`)?.focus();
        break;
      case "ArrowRight":
        x.preventDefault();
        const I = Math.min(t.length - 1, u + 1);
        d(I), m.current?.querySelector(`[data-task-index="${I}"]`)?.focus();
        break;
      case "Enter":
        x.preventDefault(), u >= 0 && a?.(t[u]);
        break;
      case " ":
        x.preventDefault(), u >= 0 && o?.(t[u]);
        break;
      case "Escape":
        x.preventDefault(), c(!1), d(-1), m.current?.focus();
        break;
    }
  }, _ = (x) => {
    switch (x.key) {
      case "ArrowUp":
        x.preventDefault(), s === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        x.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        x.preventDefault(), m.current?.focus();
        break;
    }
  }, B = (x) => {
    l && d(x);
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
            onKeyDown: _,
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
            children: t.map((x, j) => /* @__PURE__ */ n.jsx(
              ml,
              {
                task: x,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && u === j,
                taskIndex: j,
                tabIndex: l && u === j ? 0 : -1,
                onFocus: () => B(j)
              },
              x.id
            ))
          }
        )
      ]
    }
  );
}
function mf({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = xe(null), [l, c] = pe(800), u = _e(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const x = new Date(r);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : x;
  }, [r]), d = _e(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const x = new Date(a);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : x;
  }, [a]), m = _e(() => Math.ceil((d.getTime() - u.getTime()) / 864e5) + 1, [u, d]);
  ye(() => {
    if (!i.current) return;
    const x = new ResizeObserver((j) => {
      const F = j[0];
      F && c(Math.max(F.contentRect.width - 220, 400));
    });
    return x.observe(i.current), () => x.disconnect();
  }, []);
  const p = _e(
    () => fl().domain([u, d]).range([0, l]),
    [u, d, l]
  ), _ = _e(() => {
    const x = /* @__PURE__ */ new Map();
    return t.forEach((j) => {
      const F = x.get(j.resourceId) || [];
      F.push(j), x.set(j.resourceId, F);
    }), x;
  }, [t]), B = (x) => {
    if (x.target === x.currentTarget)
      switch (x.key) {
        case "ArrowDown":
          x.preventDefault();
          const j = i.current?.querySelector(".gantt-row .resource-label");
          j && j.focus();
          break;
        case "Home":
          x.preventDefault();
          const F = i.current?.querySelector(".header-resource");
          F && F.focus();
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
      onKeyDown: B,
      children: [
        /* @__PURE__ */ n.jsx(pl, { viewStart: u, viewEnd: d, dateCount: m }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (x) => {
              x.key === "ArrowLeft" && x.altKey ? (x.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : x.key === "ArrowRight" && x.altKey ? (x.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : x.key === "ArrowUp" && x.altKey ? (x.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : x.key === "ArrowDown" && x.altKey && (x.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((x, j) => /* @__PURE__ */ n.jsx(
              gl,
              {
                resource: x,
                tasks: _.get(x.id) || [],
                scale: p,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: j,
                dateCount: m
              },
              x.id
            ))
          }
        )
      ]
    }
  );
}
const Pt = ({
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
) }), bl = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? Ie.Children.toArray(t).filter(
    (F) => Ie.isValidElement(F) && (F.type === Pt || F.type?.displayName === "BreadcrumbItem")
  ).map((F) => ({
    text: typeof F.props.children == "string" ? F.props.children : String(F.props.children),
    href: F.props.href,
    active: F.props.active,
    attributes: F.props.attributes
  })) : [], u = () => t ? c() : o && s ? [{ href: o, text: s }] : e, d = () => {
    const j = u();
    if (j && j.length > 0) {
      const F = j.slice().reverse().find((I) => I.href && !I.active);
      if (F)
        return { href: F.href, text: F.text };
    }
    return { text: "Home" };
  }, m = u(), p = d(), _ = X(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), x = m && m.length > 1 ? a : void 0;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: _,
      "aria-label": x,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          Ie.Children.map(t, (j, F) => Ie.isValidElement(j) && (j.type === Pt || j.type?.displayName === "BreadcrumbItem") ? Ie.cloneElement(j, { key: F }) : null)
        ) : (
          // Render from items array
          m?.map((j, F) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: j.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...j.attributes || {},
              children: j.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: j.href,
              role: "link",
              ...j.attributes || {},
              children: j.text
            }
          ) }, F))
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
}, xl = bl;
xl.Item = Pt;
Pt.displayName = "BreadcrumbItem";
const ja = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [o, s] = pe(!1);
  ye(() => {
    s(!0);
  }, []), ye(() => {
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
  }, [o]);
  const i = X("nhsuk-skip-link", r);
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
}, pf = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = X("nhsuk-pagination", o);
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
}, gf = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = X("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, Na = Ie.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: r,
  headingLevel: a = 2,
  headingClasses: o,
  description: s,
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
  ].filter(Boolean).join(" "), _ = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), B = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), x = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const I = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Ze,
      {
        level: a,
        className: B,
        children: I()
      }
    );
  }, j = () => d.children ? d.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, F = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsxs("div", { className: _, children: [
          x(),
          j(),
          F()
        ] })
      ]
    }
  );
});
Na.displayName = "Card";
const bf = ({
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
}, xf = ({
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
}, yf = ({
  type: e,
  heading: t,
  headingHtml: r,
  headingLevel: a = 3,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  className: l,
  children: c,
  "data-testid": u,
  id: d,
  "aria-label": m,
  "aria-labelledby": p,
  "aria-describedby": _
}) => {
  const B = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), x = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), j = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const I = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], L = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        I,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Ze,
      {
        level: a,
        className: x,
        children: L
      }
    );
  }, F = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: B,
      "data-testid": u,
      id: d,
      "aria-label": m,
      "aria-labelledby": p,
      "aria-describedby": _,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          j(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: F() })
      ]
    }
  );
}, yl = ({
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
  const u = X(
    "nhsuk-panel",
    t
  ), d = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Ze,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Ze,
    {
      level: o,
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
  ) : s ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: s }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: u, id: e, ...c, children: [
    d(),
    m()
  ] });
}, _f = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = X("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, vf = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = X(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((c, u) => /* @__PURE__ */ n.jsx(
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
    u
  )) }) });
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: o, ...a, children: e.map((l, c) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, c)) }) });
}, kf = ({
  rows: e,
  head: t,
  caption: r,
  captionSize: a,
  firstCellIsHeader: o = !1,
  responsive: s = !1,
  heading: i,
  headingLevel: l = 3,
  panel: c = !1,
  panelClasses: u,
  tableClasses: d,
  classes: m,
  attributes: p,
  "data-testid": _
}) => {
  const B = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), x = X(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    d
  ), j = X(m), F = (S, A) => {
    const b = X("nhsuk-table__header", {
      [`nhsuk-table__header--${S.format}`]: S.format
    }, S.classes), M = {
      scope: "col",
      ...S.colspan && { colSpan: S.colspan },
      ...S.rowspan && { rowSpan: S.rowspan },
      ...s && { role: "columnheader" },
      ...S.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: b, ...M, children: S.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text }, A);
  }, I = (S, A, b) => {
    const M = o && b, D = X(
      M ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${M ? "header" : "cell"}--${S.format}`]: S.format
      },
      S.classes
    ), C = {
      ...M && { scope: "row" },
      ...S.colspan && { colSpan: S.colspan },
      ...S.rowspan && { rowSpan: S.rowspan },
      ...s && {
        role: M ? "rowheader" : "cell",
        ...S.header && { "data-label": S.header }
      },
      ...S.attributes
    }, v = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && S.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        S.header,
        " "
      ] }),
      S.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text
    ] }), h = M ? "th" : "td";
    return /* @__PURE__ */ n.jsx(h, { className: D, ...C, children: v }, A);
  }, L = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: x,
      ...s && { role: "table" },
      ...p,
      ..._ && { "data-testid": _ },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: B, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((S, A) => F(S, A)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((S, A) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: S.map(
              (b, M) => I(b, M, M === 0)
            )
          },
          A
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(yl, { className: u, children: [
    i && /* @__PURE__ */ n.jsx(Ze, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    L()
  ] }) : j ? /* @__PURE__ */ n.jsx("div", { className: j, children: L() }) : L();
}, wf = mt(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
  onTabChange: a,
  onTabFocus: o,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: c,
  id: u,
  "data-testid": d,
  ...m
}, p) => {
  const _ = r !== void 0, [B, x] = pe(() => t || e[0]?.id || ""), j = _ ? r : B, F = xe(null), I = xe(/* @__PURE__ */ new Map()), L = ee((v) => {
    _ || x(v), a?.(v);
  }, [_, a]), S = ee((v) => {
    o?.(v), l && L(v);
  }, [o, l, L]), A = ee((v, h) => {
    const y = e.filter((P) => !P.disabled).map((P) => P.id), z = y.indexOf(h);
    let ae = null;
    switch (v.key) {
      case "ArrowLeft":
        ae = z > 0 ? z - 1 : y.length - 1;
        break;
      case "ArrowRight":
        ae = z < y.length - 1 ? z + 1 : 0;
        break;
      case "Home":
        ae = 0;
        break;
      case "End":
        ae = y.length - 1;
        break;
      case "Escape":
        v.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (ae !== null) {
      v.preventDefault();
      const P = y[ae], Q = I.current.get(P);
      Q && (Q.focus(), S(P));
    }
  }, [e, S, i]), b = ee((v, h) => {
    h ? I.current.set(v, h) : I.current.delete(v);
  }, []), M = ee((v) => {
    const h = I.current.get(v);
    h && h.focus();
  }, []);
  ra(p, () => ({
    focusTab: M,
    getActiveTab: () => j,
    getTabListElement: () => F.current
  }), [M, j]);
  const D = ee((v) => {
    const h = v.relatedTarget;
    F.current?.contains(h) || s?.();
  }, [s]), C = X("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: C,
      id: u,
      "data-testid": d,
      ...m,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: F,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: D,
                children: e.map((v) => {
                  const h = v.id === j, y = v.disabled, z = X("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": h,
                    "nhsuk-tabs__list-item--disabled": y
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: z, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (ae) => b(v.id, ae),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": h,
                      "aria-controls": `${v.id}-panel`,
                      id: `${v.id}-tab`,
                      tabIndex: h ? 0 : -1,
                      disabled: y,
                      onClick: () => !y && L(v.id),
                      onKeyDown: (ae) => !y && A(ae, v.id),
                      onFocus: () => !y && S(v.id),
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
          const h = v.id === j;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${v.id}-tab`,
              id: `${v.id}-panel`,
              hidden: !h,
              children: v.content
            },
            v.id
          );
        })
      ]
    }
  );
}), _l = mt(
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
  }, u) => {
    const d = [
      "nhsuk-details",
      s
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
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: m }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
_l.displayName = "Details";
const vl = mt(
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
    ), m = (_) => t === "cross" && !a ? `do not ${_}` : _, p = () => /* @__PURE__ */ n.jsx(
      Ze,
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
          p(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: u.join(" "), role: "list", children: r.map((_, B) => /* @__PURE__ */ n.jsxs("li", { children: [
            d(),
            m(_.item)
          ] }, B)) }) })
        ]
      }
    );
  }
);
vl.displayName = "DoDontList";
const kl = mt(
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
  }, u) => {
    const d = [
      "nhsuk-expander",
      s
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
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: m }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
kl.displayName = "Expander";
const wl = mt(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const u = c + 1, d = `${t}-${u}-hint`, m = `${t}-${u}-status`, p = !!l.href, _ = [
        "nhsuk-task-list__item",
        p && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), B = [
        l.hint && d,
        m
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Sl,
        {
          item: l,
          itemClasses: _,
          hasLink: p,
          hintId: d,
          statusId: m,
          ariaDescribedBy: B
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
), Sl = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
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
        "aria-describedby": s,
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
    return e.status.tag ? d = /* @__PURE__ */ n.jsx(Ke, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ n.jsx("div", { className: u, id: o, children: d });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
wl.displayName = "TaskList";
const Sf = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: a,
  children: o,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), c = () => o || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), u = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: u,
      ...i,
      children: [
        na(
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
}, Cf = ({
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
}, Cl = ({
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
  ].filter(Boolean).join(" "), u = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ze, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, jf = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(Xs, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    or,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      children: /* @__PURE__ */ n.jsx(Cl, { ...o })
    },
    s
  )) }) });
}, jl = Ie.forwardRef(
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
    ariaLabelledby: u,
    ariaDescribedby: d,
    className: m,
    tableClassName: p,
    bordered: _ = !1,
    striped: B = !1,
    responsive: x = !1,
    tableType: j = "default"
  }, F) => {
    const I = xe(null), L = xe(null), S = xe(null);
    Ie.useImperativeHandle(F, () => I.current, []);
    const [A, b] = pe(0), [M, D] = pe(0), [C, v] = pe("headers"), [h, y] = pe("browse"), z = t.length, ae = e.length, P = _e(() => !r || r.length === 0 ? e : [...e].sort((H, O) => {
      for (const { key: V, direction: fe } of r) {
        const f = H[V], T = O[V];
        if (f == null && T == null) continue;
        if (f == null) return 1;
        if (T == null) return -1;
        let U = 0;
        if (typeof f == "number" && typeof T == "number" ? U = f - T : U = String(f).localeCompare(String(T)), U !== 0)
          return fe === "asc" ? U : -U;
      }
      return 0;
    }), [e, r]), Q = ee((H, O) => {
      setTimeout(() => {
        const V = I.current?.querySelector(
          `tbody tr:nth-child(${H + 1}) td:nth-child(${O + 1})`
        );
        V && (V.focus(), typeof V.scrollIntoView == "function" && V.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), te = ee((H) => {
      setTimeout(() => {
        const O = I.current?.querySelector(`th:nth-child(${H + 1})`);
        O && (O.focus(), typeof O.scrollIntoView == "function" && O.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), oe = ee((H) => {
      a?.(H);
    }, [a]), ce = ee((H) => {
      s?.(H);
    }, [s]), N = ee((H) => {
      const { key: O } = H;
      switch (O) {
        case "Enter":
          if (H.preventDefault(), C === "headers" && h === "browse")
            y("navigate"), te(M);
          else if (C === "headers" && h === "navigate") {
            const V = t[M];
            V && oe(V.key);
          } else C === "cells" && h === "browse" ? (y("navigate"), Q(A, M)) : C === "cells" && h === "navigate" && ce(A);
          break;
        case "Escape":
          H.preventDefault(), (C === "headers" && h === "navigate" || C === "cells" && h === "navigate") && y("browse");
          break;
        case "ArrowLeft":
          if (H.preventDefault(), h === "navigate" || h === "browse" && C === "headers") {
            if (C === "headers") {
              const V = Math.max(0, M - 1);
              D(V), te(V);
            } else if (C === "cells") {
              const V = Math.max(0, M - 1);
              D(V), Q(A, V);
            }
          }
          break;
        case "ArrowRight":
          if (H.preventDefault(), h === "navigate" || h === "browse" && C === "headers") {
            if (C === "headers") {
              const V = Math.min(z - 1, M + 1);
              D(V), te(V);
            } else if (C === "cells") {
              const V = Math.min(z - 1, M + 1);
              D(V), Q(A, V);
            }
          }
          break;
        case "ArrowUp":
          if (H.preventDefault(), C === "cells") {
            if (h === "browse") {
              const V = Math.max(0, A - 1);
              b(V), Q(V, 0), D(0);
            } else if (h === "navigate")
              if (A > 0) {
                const V = A - 1;
                b(V), Q(V, M);
              } else
                v("headers"), y("browse"), te(M);
          }
          break;
        case "ArrowDown":
          if (H.preventDefault(), C === "headers" && h === "browse")
            v("cells"), b(0), D(0), Q(0, 0);
          else if (C === "cells") {
            const V = ae - 1;
            if (h === "browse") {
              const fe = Math.min(V, A + 1);
              b(fe), Q(fe, 0), D(0);
            } else if (h === "navigate" && A < V) {
              const fe = A + 1;
              b(fe), Q(fe, M);
            }
          }
          break;
        case "Home":
          H.preventDefault(), C === "headers" ? (D(0), te(0)) : C === "cells" && (H.ctrlKey ? (b(0), D(0), Q(0, 0)) : (D(0), Q(A, 0)));
          break;
        case "End":
          if (H.preventDefault(), C === "headers") {
            const V = z - 1;
            D(V), te(V);
          } else if (C === "cells")
            if (H.ctrlKey) {
              const V = ae - 1, fe = z - 1;
              b(V), D(fe), Q(V, fe);
            } else {
              const V = z - 1;
              D(V), Q(A, V);
            }
          break;
        case " ":
          if (H.preventDefault(), C === "headers" && h === "navigate") {
            const V = t[M];
            V && oe(V.key);
          } else C === "cells" && h === "navigate" && ce(A);
          break;
      }
    }, [
      C,
      h,
      M,
      A,
      z,
      ae,
      t,
      Q,
      te,
      oe,
      ce
    ]);
    ye(() => {
      const H = I.current;
      if (H)
        return H.addEventListener("keydown", N), () => H.removeEventListener("keydown", N);
    }, [N]);
    const K = X(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": x,
        "nhsuk-table--bordered": _,
        "nhsuk-table--striped": B,
        "nhsuk-table--compact": j === "compact"
      },
      m
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: I,
        className: K,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": u,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: L, role: "row", children: t.map((H, O) => {
            const V = r?.find((T) => T.key === H.key), fe = !!V, f = C === "headers" && M === O;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: X("sortable-header", {
                  "sortable-header--focused": f
                }),
                role: "columnheader",
                tabIndex: f ? 0 : -1,
                onClick: () => oe(H.key),
                onKeyDown: (T) => {
                  (T.key === "Enter" || T.key === " ") && (T.preventDefault(), oe(H.key));
                },
                "aria-sort": fe ? V?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: H.label }),
                  fe && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((T) => T.key === H.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: V?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              H.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: S, className: "nhsuk-table__body", role: "rowgroup", children: P.map((H, O) => {
            const V = o === O, fe = C === "cells" && A === O;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: X("data-row", {
                  "data-row--selected": V,
                  "data-row--focused": fe
                }),
                "aria-selected": V,
                children: t.map((f, T) => {
                  const U = f.tableRenderer ? f.tableRenderer(H) : f.render ? f.render(H) : H[f.key], E = C === "cells" && A === O && M === T, W = () => typeof U == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: U ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: U ? "Yes" : "No" })
                  ] }) : String(U ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: X("data-cell", {
                        "data-cell--focused": E
                      }),
                      tabIndex: E ? 0 : -1,
                      onClick: () => ce(O),
                      children: W()
                    },
                    f.key
                  );
                })
              },
              O
            );
          }) })
        ]
      }
    );
  }
);
jl.displayName = "AriaDataGrid";
const Ta = ({
  sortConfig: e,
  columns: t,
  onSortChange: r,
  className: a = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: c = !1,
  ariaLabel: u = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const m = xe(null), p = xe(null), _ = xe(null), B = ee((C, v) => {
    c || (p.current = v, C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("text/plain", v));
  }, [c]), x = ee((C, v) => {
    c || p.current === v || (C.preventDefault(), C.dataTransfer.dropEffect = "move", _.current = v);
  }, [c]), j = ee((C, v) => {
    if (c) return;
    C.preventDefault();
    const h = p.current;
    if (!h || h === v) return;
    const y = e.findIndex((ae) => ae.key === h), z = e.findIndex((ae) => ae.key === v);
    if (y !== -1 && z !== -1) {
      const ae = [...e], [P] = ae.splice(y, 1);
      ae.splice(z, 0, P), r(ae);
    }
    p.current = null, _.current = null;
  }, [c, e, r]), F = ee(() => {
    p.current = null, _.current = null;
  }, []), I = ee((C) => {
    const v = t.find((h) => h.key === C);
    return v ? v.label : C;
  }, [t]), L = ee((C) => ["red", "orange", "blue", "aqua-green", "grey"][C] || "grey", []), S = ee((C) => {
    if (c) return;
    const v = e.map(
      (h) => h.key === C ? { ...h, direction: h.direction === "asc" ? "desc" : "asc" } : h
    );
    r(v);
  }, [e, r, c]), A = ee((C) => {
    if (c) return;
    const v = e.filter((h) => h.key !== C);
    r(v);
  }, [e, r, c]), b = ee(() => {
    c || r([]);
  }, [r, c]), M = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const C = e.map((v, h) => {
      const y = v.direction === "asc" ? "ascending" : "descending";
      return `${h + 1}. ${I(v.key)} (${y})`;
    });
    if (C.length === 1)
      return `Sorted by: ${C[0]}`;
    if (C.length === 2)
      return `Sorted by: ${C.join(" and ")}`;
    {
      const v = C.pop();
      return `Sorted by: ${C.join(", ")}, and ${v}`;
    }
  }, D = _e(() => {
    const C = ["sort-description"];
    return l && C.push("sort-help"), d && C.push(d), C.join(" ");
  }, [l, d]);
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
          ref: m,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": u,
          "aria-describedby": D,
          children: e.map((C, v) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (h) => B(h, C.key),
              onDragOver: (h) => x(h, C.key),
              onDrop: (h) => j(h, C.key),
              onDragEnd: F,
              onClick: () => S(C.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${C.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": C.key,
              children: /* @__PURE__ */ n.jsx(
                Ke,
                {
                  color: L(v),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => A(C.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${v + 1}`, children: v + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: I(C.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (h) => {
                          h.stopPropagation(), S(C.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${I(C.key)}. Currently ${C.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${C.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${C.direction}`,
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
            C.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        De,
        {
          variant: "secondary",
          onClick: b,
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
function Nl(e, t) {
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
      for (let u = 0; u < Math.min(e.tabLoadingStates.length, s); u++)
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
const In = mt(
  function(t, r) {
    const {
      dataConfig: a = {},
      tabPanels: o,
      selectedIndex: s,
      onTabChange: i,
      onGlobalRowSelectionChange: l,
      ariaLabel: c,
      ariaDescription: u,
      className: d = "",
      disabled: m = !1,
      orientation: p = "horizontal",
      id: _,
      isLoading: B = !1,
      loadingComponent: x,
      error: j = null,
      errorComponent: F,
      "data-testid": I
    } = t, {
      dataComparator: L = (f, T) => JSON.stringify(f) === JSON.stringify(T),
      filterFunction: S = (f) => f,
      booleanRenderer: A = (f) => f ? "✓" : "✗"
    } = a || {}, b = s !== void 0, M = s ?? 0, [D, C] = pe({
      focusArea: "tabs",
      focusedTabIndex: M,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), v = _e(() => ({
      selectedIndex: M,
      tabLoadingStates: new Array(o.length).fill(!1),
      tabErrors: new Array(o.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(o.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [M]), [h, y] = aa(Nl, v);
    ye(() => {
      const f = h.tabLoadingStates.length, T = o.length;
      f !== T && y({ type: "ADJUST_ARRAYS", payload: { newLength: T } });
    }, [o.length]), ye(() => {
      b && y({ type: "SET_SELECTED_INDEX", payload: M });
    }, [M, b]), ye(() => {
      C((f) => ({
        ...f,
        focusArea: "tabs",
        focusedTabIndex: h.selectedIndex,
        focusedHeaderIndex: 0,
        focusedRowIndex: 0,
        focusedColumnIndex: 0,
        isGridActive: !1
      }));
    }, [h.selectedIndex]), ye(() => {
      l && l(h.globalSelectedRowData);
    }, [h.globalSelectedRowData, l]);
    const z = ee((f, T) => L(f, T), [L]), ae = ee((f) => {
      f >= 0 && f < o.length && !o[f].disabled && (y({ type: "SET_SELECTED_INDEX", payload: f }), C((T) => ({
        ...T,
        focusedTabIndex: f,
        focusArea: "tabs"
      })), i?.(f));
    }, [o, i]), P = ee((f) => {
      setTimeout(() => {
        const T = te.current[f], U = T?.parentElement;
        if (T && U) {
          const E = T.offsetLeft, W = T.offsetWidth, q = U.clientWidth, w = E - q / 2 + W / 2;
          try {
            U.scrollTo({
              left: Math.max(0, w),
              behavior: "smooth"
            });
          } catch {
            T.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else
          console.log("Missing elements for scroll:", { tabElement: T, tabListElement: U });
      }, 50);
    }, []), Q = ee((f, T) => {
      const { key: U } = f;
      switch (U) {
        case "ArrowLeft":
          f.preventDefault();
          const E = T > 0 ? T - 1 : o.length - 1;
          ae(E), P(E), te.current[E]?.focus();
          break;
        case "ArrowRight":
          f.preventDefault();
          const W = T < o.length - 1 ? T + 1 : 0;
          ae(W), P(W), te.current[W]?.focus();
          break;
        case "ArrowDown":
          f.preventDefault(), C((w) => ({
            ...w,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        case "Home":
          f.preventDefault(), ae(0), P(0), te.current[0]?.focus();
          break;
        case "End":
          f.preventDefault();
          const q = o.length - 1;
          ae(q), P(q), te.current[q]?.focus();
          break;
        case "Enter":
        case " ":
          f.preventDefault(), ae(T);
          break;
      }
    }, [o.length, ae, P]), te = xe([]), oe = xe([]), ce = ee((f, T) => {
      const U = h.sortConfig || [], E = U.find((w) => w.key === T);
      let W;
      E ? E.direction === "asc" ? W = U.map(
        (w) => w.key === T ? { ...w, direction: "desc" } : w
      ) : W = U.filter((w) => w.key !== T) : W = [...U, { key: T, direction: "asc" }], y({
        type: "SET_SORT",
        payload: W
      }), o[f].onSort?.(T);
    }, [h.sortConfig, o]), N = ee((f) => {
      setTimeout(() => {
        const T = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] th:nth-child(${f + 1})`
        );
        T && T.focus();
      }, 0);
    }, [h.selectedIndex]), K = ee((f) => A(f), [A]), H = ee((f, T) => {
      setTimeout(() => {
        const U = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] tbody tr:nth-child(${f + 1}) td:nth-child(${T + 1})`
        );
        U && U.focus();
      }, 0);
    }, [h.selectedIndex]);
    ye(() => {
      D.isGridActive && (D.focusArea === "headers" ? setTimeout(() => {
        N(D.focusedHeaderIndex);
      }, 0) : D.focusArea === "cells" && setTimeout(() => {
        H(D.focusedRowIndex, D.focusedColumnIndex);
      }, 0));
    }, [D.focusArea, D.isGridActive, D.focusedHeaderIndex, D.focusedRowIndex, D.focusedColumnIndex, N, H]), ye(() => {
      P(h.selectedIndex);
    }, [h.selectedIndex, P]);
    const O = ee((f, T) => {
      const { key: U } = f, E = o[h.selectedIndex], W = E?.columns.length || 0;
      switch (U) {
        case "ArrowLeft":
          f.preventDefault();
          const q = Math.max(0, T - 1);
          C((le) => ({ ...le, focusedHeaderIndex: q })), N(q);
          break;
        case "ArrowRight":
          f.preventDefault();
          const w = Math.min(W - 1, T + 1);
          C((le) => ({ ...le, focusedHeaderIndex: w })), N(w);
          break;
        case "ArrowUp":
          f.preventDefault(), C((le) => ({
            ...le,
            focusArea: "tabs",
            focusedTabIndex: h.selectedIndex
          })), P(h.selectedIndex), te.current[h.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          f.preventDefault(), C((le) => ({
            ...le,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: T,
            isGridActive: !0
          }));
          break;
        case "Home":
          f.preventDefault(), C((le) => ({ ...le, focusedHeaderIndex: 0 })), N(0);
          break;
        case "End":
          f.preventDefault();
          const ie = W - 1;
          C((le) => ({ ...le, focusedHeaderIndex: ie })), N(ie);
          break;
        case "Enter":
        case " ":
          f.preventDefault();
          const ne = E?.columns[T]?.key;
          ne && ce(h.selectedIndex, ne);
          break;
      }
    }, [o, h.selectedIndex, ce, C, N, H, te]), V = ee((f, T, U) => {
      const { key: E } = f, W = o[h.selectedIndex], q = W?.data.length || 0, w = W?.columns.length || 0;
      switch (E) {
        case "ArrowUp":
          if (f.preventDefault(), T === 0)
            C((Y) => ({
              ...Y,
              focusArea: "headers",
              focusedHeaderIndex: U,
              isGridActive: !1
            })), N(U);
          else {
            const Y = T - 1;
            C((g) => ({ ...g, focusedRowIndex: Y })), H(Y, U);
          }
          break;
        case "ArrowDown":
          f.preventDefault();
          const ie = Math.min(q - 1, T + 1);
          C((Y) => ({ ...Y, focusedRowIndex: ie })), H(ie, U);
          break;
        case "ArrowLeft":
          f.preventDefault();
          const ne = Math.max(0, U - 1);
          C((Y) => ({ ...Y, focusedColumnIndex: ne })), H(T, ne);
          break;
        case "ArrowRight":
          f.preventDefault();
          const le = Math.min(w - 1, U + 1);
          C((Y) => ({ ...Y, focusedColumnIndex: le })), H(T, le);
          break;
        case "Home":
          f.preventDefault(), f.ctrlKey ? (C((Y) => ({ ...Y, focusedRowIndex: 0, focusedColumnIndex: 0 })), H(0, 0)) : (C((Y) => ({ ...Y, focusedColumnIndex: 0 })), H(T, 0));
          break;
        case "End":
          if (f.preventDefault(), f.ctrlKey) {
            const Y = q - 1, g = w - 1;
            C((k) => ({ ...k, focusedRowIndex: Y, focusedColumnIndex: g })), H(Y, g);
          } else {
            const Y = w - 1;
            C((g) => ({ ...g, focusedColumnIndex: Y })), H(T, Y);
          }
          break;
        case "Enter":
        case " ":
          if (f.preventDefault(), W && W.data[T]) {
            const Y = W.data.some((R) => "ews_data" in R) ? S(W.data, h.filters) : W.data, g = h.sortConfig;
            let k = Y;
            if (g && g.length > 0 && (k = [...Y].sort((R, $) => {
              for (const { key: G, direction: Z } of g) {
                let se = R[G], re = $[G];
                const J = W.columns.find((je) => je.key === G);
                if (J?.tableRenderer ? (se = J.tableRenderer(R), re = J.tableRenderer($)) : J?.render && (se = J.render(R), re = J.render($)), se == null && re == null) continue;
                if (se == null) return Z === "asc" ? -1 : 1;
                if (re == null) return Z === "asc" ? 1 : -1;
                let de = 0;
                if (typeof se == "number" && typeof re == "number" ? de = se - re : de = String(se).localeCompare(String(re), void 0, { numeric: !0, sensitivity: "base" }), de !== 0)
                  return Z === "asc" ? de : -de;
              }
              return 0;
            })), k[T]) {
              const R = k[T], G = h.globalSelectedRowData && z(h.globalSelectedRowData, R) ? null : R;
              y({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: G
              });
            }
          }
          break;
      }
    }, [o, h.selectedIndex, h.filters, h.sortConfig, S, z, y, C, N, H]), fe = ee((f, T) => S(f, T), [S]);
    return ra(r, () => ({
      selectTab: (f) => {
        f >= 0 && f < o.length && (y({ type: "SET_SELECTED_INDEX", payload: f }), i?.(f));
      },
      refreshData: (f) => {
        console.log("Refreshing data for tab:", f ?? "all");
      },
      exportData: (f) => {
        const T = f ?? h.selectedIndex, U = o[T];
        return U ? U.data : [];
      },
      getSelectedRows: (f) => h.globalSelectedRowData ? [] : [],
      clearSelection: (f) => {
        y({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (f) => {
        y({ type: "SET_FILTERS", payload: f });
      }
    }), [h.selectedIndex, h.selectedRows, o, i]), B ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": I, children: x || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : j ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": I, children: F || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: j })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${p} ${d}`,
        id: _,
        "data-testid": I,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${_}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Ta,
            {
              sortConfig: h.sortConfig || [],
              columns: o.flatMap(
                (f) => f.columns.map((T) => ({ key: T.key, label: T.label }))
              ).filter(
                (f, T, U) => U.findIndex((E) => E.key === f.key) === T
                // Remove duplicates
              ),
              onSortChange: (f) => {
                y({ type: "SET_SORT", payload: f });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": `${u || ""} ${_ ? `${_}-navigation-help` : ""}`.trim(),
              "aria-orientation": p,
              className: "aria-tabs-datagrid__tabs",
              children: o.map((f, T) => {
                const U = T === h.selectedIndex, E = f.disabled || m;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${f.id}`,
                    "aria-controls": `panel-${f.id}`,
                    "aria-selected": U,
                    "aria-disabled": E,
                    tabIndex: U ? 0 : -1,
                    ref: (W) => {
                      te.current[T] = W;
                    },
                    onClick: () => ae(T),
                    onKeyDown: (W) => Q(W, T),
                    disabled: E,
                    className: [
                      "aria-tabs-datagrid__tab",
                      U ? "aria-tabs-datagrid__tab--selected" : "",
                      E ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: f.label }),
                      h.tabLoadingStates[T] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      h.tabErrors[T] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  f.id
                );
              })
            }
          ),
          o.map((f, T) => {
            const U = T === h.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${f.id}`,
                "aria-labelledby": `tab-${f.id}`,
                tabIndex: 0,
                hidden: !U,
                ref: (E) => {
                  oe.current[T] = E;
                },
                className: `aria-tabs-datagrid__panel ${f.className || ""}`,
                "data-tab-panel": T,
                children: U && (() => {
                  const E = f.data.some((q) => "ews_data" in q) ? fe(f.data, h.filters) : f.data, W = _e(() => {
                    const q = h.sortConfig;
                    return !q || q.length === 0 ? E : [...E].sort((w, ie) => {
                      for (const { key: ne, direction: le } of q) {
                        let Y = w[ne], g = ie[ne];
                        const k = f.columns.find(($) => $.key === ne);
                        if (k?.tableRenderer ? (Y = k.tableRenderer(w), g = k.tableRenderer(ie)) : k?.render && (Y = k.render(w), g = k.render(ie)), Y == null && g == null) continue;
                        if (Y == null) return 1;
                        if (g == null) return -1;
                        let R = 0;
                        if (typeof Y == "number" && typeof g == "number" ? R = Y - g : typeof Y == "boolean" && typeof g == "boolean" ? R = Y === g ? 0 : Y ? 1 : -1 : R = String(Y).localeCompare(String(g), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), R !== 0)
                          return le === "asc" ? R : -R;
                      }
                      return 0;
                    });
                  }, [E, h.sortConfig, f.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": f.ariaLabel,
                      "aria-describedby": f.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: f.columns.map((q, w) => {
                          const ie = h.sortConfig?.find((Y) => Y.key === q.key), ne = !!ie, le = D.focusArea === "headers" && D.focusedHeaderIndex === w;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${le ? "sortable-header--focused" : ""} ${ne ? "sortable-header--sorted" : ""}`,
                              role: "columnheader",
                              tabIndex: le ? 0 : -1,
                              onClick: () => ce(T, q.key),
                              onKeyDown: (Y) => O(Y, w),
                              "aria-sort": ne ? ie?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: q.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${ne ? `sort-indicator--${ie?.direction}` : ""}`, children: [
                                  h.sortConfig && h.sortConfig.length > 0 && h.sortConfig.findIndex((Y) => Y.key === q.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${h.sortConfig.findIndex((Y) => Y.key === q.key) + 1}`,
                                      "data-priority": h.sortConfig.findIndex((Y) => Y.key === q.key) + 1,
                                      title: `Sort priority: ${h.sortConfig.findIndex((Y) => Y.key === q.key) + 1}`,
                                      children: h.sortConfig.findIndex((Y) => Y.key === q.key) + 1
                                    }
                                  ),
                                  ne && /* @__PURE__ */ n.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${ie?.direction}`,
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
                            q.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: W.map((q, w) => {
                          const ie = h.globalSelectedRowData && z(h.globalSelectedRowData, q), ne = D.focusArea === "cells" && D.focusedRowIndex === w;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${ie ? "data-row--selected" : ""} ${ne ? "data-row--focused" : ""}`,
                              "aria-selected": ie,
                              children: f.columns.map((le, Y) => {
                                const g = le.tableRenderer ? le.tableRenderer(q) : le.render ? le.render(q) : q[le.key], k = D.focusArea === "cells" && D.focusedRowIndex === w && D.focusedColumnIndex === Y, R = () => typeof g == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  K(g),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: g ? "Yes" : "No" })
                                ] }) : String(g ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${k ? "data-cell--focused" : ""}`,
                                    tabIndex: k ? 0 : -1,
                                    onClick: () => {
                                      const G = h.globalSelectedRowData && z(h.globalSelectedRowData, q) ? null : q;
                                      y({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: G
                                      });
                                    },
                                    onKeyDown: ($) => V($, w, Y),
                                    children: R()
                                  },
                                  le.key
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
              f.id
            );
          })
        ]
      }
    );
  }
), Bt = {
  asc: "↑",
  desc: "↓"
}, Tl = (e) => [...e].sort((t, r) => t.priority - r.priority);
function Tn(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Dl(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Fl(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function Bl(e, t) {
  const r = t.find((o) => o.id === e), a = Dl(t);
  return r ? r.priority < a : !1;
}
const Nf = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const d = _e(() => Tl(e), [e]), m = ee((I) => {
    if (l) return;
    const L = e.map(
      (S) => S.id === I ? { ...S, direction: S.direction === "asc" ? "desc" : "asc" } : S
    );
    t(L);
  }, [e, t, l]), p = ee((I) => {
    if (l) return;
    const L = e.findIndex((A) => A.id === I);
    if (L <= 0) return;
    const S = [...e];
    [S[L], S[L - 1]] = [S[L - 1], S[L]], t(Tn(S));
  }, [e, t, l]), _ = ee((I) => {
    if (l) return;
    const L = e.findIndex((A) => A.id === I);
    if (L >= e.length - 1 || L === -1) return;
    const S = [...e];
    [S[L], S[L + 1]] = [S[L + 1], S[L]], t(Tn(S));
  }, [e, t, l]), B = ee((I) => {
    if (l) return;
    const L = e.filter((S) => S.id !== I);
    t(Tn(L));
  }, [e, t, l]), x = ee(() => {
    l || t([]);
  }, [t, l]), j = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const I = d.map((L, S) => {
      const A = L.direction === "asc" ? "ascending" : "descending";
      return `${S + 1}. ${L.label} (${A})`;
    });
    if (I.length === 1)
      return `Sorted by: ${I[0]}`;
    if (I.length === 2)
      return `Sorted by: ${I.join(" and ")}`;
    {
      const L = I.pop();
      return `Sorted by: ${I.join(", ")}, and ${L}`;
    }
  }, F = _e(() => {
    const I = ["sort-description"];
    return i && I.push("sort-help"), u && I.push(u), I.join(" ");
  }, [i, u]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: j()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: j()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": c,
        "aria-describedby": F,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((I) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Ke,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => B(I.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: I.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: I.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => m(I.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${I.label}. Currently ${I.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: I.direction === "asc" ? Bt.asc : Bt.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(I.id),
                          disabled: l || !Fl(I.id, e),
                          "aria-label": `Move ${I.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => _(I.id),
                          disabled: l || !Bl(I.id, e),
                          "aria-label": `Move ${I.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            I.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      De,
      {
        variant: "secondary",
        onClick: x,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsxs("small", { children: [
      "Click ",
      Bt.asc,
      "/",
      Bt.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, gr = (e, t) => t.map((r) => ({
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
})), Rn = [
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
], Il = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Rl = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Ll = (e) => {
  if (typeof e == "boolean") {
    const r = Rn.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = Rn.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, El = (e) => `${e.name}-${e.bed_name}`, Ml = () => ({
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
}), Tf = (e) => {
  const t = Ml();
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
}, $l = {
  dataComparator: Il,
  filterFunction: Rl,
  booleanRenderer: Ll,
  getDataId: El
};
function Yr(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: u = {},
    classPrefix: d = "adaptive-card"
  } = r, m = t.find((L) => L.key === a), p = m?.cardRenderer ? m.cardRenderer(e) : m?.render ? m.render(e) : e[a || "name"] || "Untitled", _ = () => o.filter((S) => !i.includes(S) && e[S]).slice(0, 3).map((S) => {
    const A = t.find((C) => C.key === S), b = e[S], M = u[S] ? u[S](b, e) : A?.cardRenderer ? A.cardRenderer(e) : A?.render ? A.render(e) : b;
    return `${A?.label || S}: ${M}`;
  }).join(" • "), B = () => s.length === 0 ? null : s.filter((L) => e[L.fieldKey] !== void 0).map((L) => {
    const S = e[L.fieldKey], A = L.render ? L.render(S, e) : S;
    return `<span class="nhsuk-tag ${Al(L, S)}">${A}</span>`;
  }).join(""), x = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", j = B(), F = _(), I = j ? `${F}${j ? `<div class="adaptive-card__badges">${j}</div>` : ""}` : F;
  return {
    variant: x(),
    heading: String(p),
    descriptionHtml: I,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${p}`
  };
}
function Al(e, t) {
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
const Hl = {
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
}, Da = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, c = e.ward_name, u = e.bed_name, d = e.ews_score, m = e.speciality, p = e.consultant;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${o} healthcare-card--${s}`,
      onClick: () => r?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${c}, Bed ${u}`,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__patient-name", children: i }),
            /* @__PURE__ */ n.jsxs("p", { className: "healthcare-card__age-info", children: [
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__label", children: "Age: " }),
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__value", children: l })
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: d !== void 0 && /* @__PURE__ */ n.jsxs(
            Ke,
            {
              color: zl(Ra(d)),
              className: "healthcare-card__alert",
              children: [
                "EWS: ",
                d
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("dl", { className: "healthcare-card__details", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Ward" }),
            /* @__PURE__ */ n.jsx("dd", { children: c })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Bed" }),
            /* @__PURE__ */ n.jsx("dd", { children: u })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Specialty" }),
            /* @__PURE__ */ n.jsx("dd", { children: m })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ n.jsx("dd", { children: p })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            De,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (_) => {
                _.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            De,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (_) => {
                _.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            De,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (_) => {
                _.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, Fa = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        Ke,
        {
          color: Wl(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        Ke,
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
      De,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      De,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), Ba = ({
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
        Ke,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        Ke,
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
      De,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      De,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), Ia = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, c = e.ews_data?.temperature, u = e.ews_data?.systolic_bp, d = e.ews_data?.heart_rate, m = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Pl(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: m && /* @__PURE__ */ n.jsxs(
            Ke,
            {
              color: "blue",
              className: "healthcare-card__avpu",
              children: [
                "AVPU: ",
                m.toUpperCase()
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
          c !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Temperature" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              c,
              "°C"
            ] })
          ] }),
          u !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-value", children: u })
          ] }),
          d !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Heart Rate" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              d,
              " bpm"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            De,
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
            De,
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
function Ra(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Pl(e) {
  return Ra(e);
}
function zl(e) {
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
function Wl(e) {
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
const Ol = [
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
], La = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Ul = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Gl = (e) => La(e) === "high" || e.status === "urgent" ? "primary" : "default", Vl = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Yl = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Ol,
  hiddenFields: [],
  getPriority: La,
  getStatus: Ul,
  getVariant: Gl,
  fieldRenderers: Vl,
  classPrefix: "adaptive-card--healthcare"
}, ql = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", o = r.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ n.jsx(
      Da,
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
      Fa,
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
      Ba,
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
      Ia,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, Kl = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, qr = {
  name: "healthcare",
  defaultCardConfig: Yl,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: ql,
  fieldTypes: Kl
};
function Kr(e) {
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
function Zr(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function Zl(e, t) {
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
      for (let u = 0; u < Math.min(e.tabLoadingStates.length, s); u++)
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
function Jl(e, t) {
  const [r, a] = pe("cards");
  return ye(() => {
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
function Xl(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Ql(e, t, r, a) {
  const o = a ? { ...a.defaultCardConfig, ...r } : { ...Hl, ...r };
  if (a && a.cardTemplates) {
    const s = Xl(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), Yr(e, t, o);
}
const Df = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
  experimental: a = {},
  enableAdvancedSorting: o = !1,
  // Standard AriaTabsDataGrid props
  tabPanels: s,
  dataConfig: i,
  selectedIndex: l,
  onTabChange: c,
  ariaLabel: u = "Data grid",
  ariaDescription: d,
  orientation: m = "horizontal",
  id: p,
  disabled: _ = !1,
  className: B,
  ...x
}) => {
  const j = Jl(e, t), F = l !== void 0, I = l ?? 0, L = _e(() => {
    if (s.some(
      (k) => k.data && k.data.length > 0 && Zr(k.data)
    )) {
      const k = Kr(r);
      return {
        ...qr.defaultCardConfig,
        ...k
      };
    } else
      return Kr(r);
  }, [r, s]), S = _e(() => s.some(
    (k) => k.data && k.data.length > 0 && Zr(k.data)
  ) ? qr : void 0, [s]), A = _e(() => ({
    selectedIndex: I,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [I, s.length]), [b, M] = aa(Zl, A), D = xe([]), C = xe([]), v = xe([]), h = xe(null), [y, z] = pe({
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
  }), ae = ee((g) => {
    if (!g.current)
      return { columns: 1, rows: 0 };
    const k = g.current, R = k.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (R.length === 0)
      return { columns: 1, rows: 0 };
    const $ = k.offsetWidth, Z = R[0].offsetWidth, se = Math.floor($ / Z) || 1, re = Math.ceil(R.length / se);
    return { columns: se, rows: re };
  }, []), P = ee((g, k) => ({
    row: Math.floor(g / k),
    col: g % k
  }), []), Q = ee((g, k, R) => g * R + k, []), te = ee((g, k, R, $) => {
    const { row: G, col: Z } = P(g, $);
    let se = G, re = Z;
    switch (k) {
      case "up":
        se = Math.max(0, G - 1);
        break;
      case "down":
        se = Math.min(Math.floor((R - 1) / $), G + 1);
        break;
      case "left":
        re = Math.max(0, Z - 1);
        break;
      case "right":
        re = Math.min($ - 1, Z + 1);
        break;
    }
    const J = Q(se, re, $);
    return Math.min(J, R - 1);
  }, [P, Q]);
  ye(() => {
    y.isCardNavigationActive && y.focusedCardElementIndex >= 0 && y.cardElements.length > 0 && setTimeout(() => {
      const g = y.cardElements[y.focusedCardElementIndex];
      g && (g.element.focus(), g.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [y.isCardNavigationActive, y.focusedCardElementIndex, y.cardElements.length]), ye(() => {
    const g = () => {
      if (j === "cards" && h.current) {
        const { columns: $, rows: G } = ae(h);
        z((Z) => ({
          ...Z,
          gridColumns: $,
          gridRows: G
        }));
      }
    }, k = setTimeout(g, 200), R = () => {
      setTimeout(g, 100);
    };
    return window.addEventListener("resize", R), () => {
      clearTimeout(k), window.removeEventListener("resize", R);
    };
  }, [j, s, ae]), ye(() => {
    const g = b.tabLoadingStates.length, k = s.length;
    g !== k && M({ type: "ADJUST_ARRAYS", payload: { newLength: k } });
  }, [s.length, b.tabLoadingStates.length]), ye(() => {
    F && l !== b.selectedIndex && M({ type: "SET_SELECTED_INDEX", payload: l });
  }, [F, l, b.selectedIndex]);
  const oe = ee((g) => {
    g >= 0 && g < s.length && !s[g].disabled && (M({ type: "SET_SELECTED_INDEX", payload: g }), c?.(g));
  }, [s, c]), ce = ee((g) => {
    console.log("Card selected:", g), M({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: g
    });
  }, []), N = ee((g) => {
    const k = C.current[g];
    k && (k.focus(), k.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), K = ee((g) => {
    const k = C.current[g];
    if (!k) return [];
    const R = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), $ = k.querySelectorAll(R);
    return Array.from($).map((G, Z) => ({
      id: G.id || `card-${g}-element-${Z}`,
      element: G,
      label: G.getAttribute("aria-label") || G.textContent?.trim() || G.getAttribute("title") || `Element ${Z + 1}`,
      type: G.tagName.toLowerCase() === "button" ? "button" : G.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(G.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), H = xe(null), O = ee((g) => {
    const k = H.current;
    if (!k) return;
    const R = document.createElement("div");
    R.setAttribute("aria-live", "polite"), R.setAttribute("aria-atomic", "true"), R.className = "sr-only", R.textContent = g, k.appendChild(R), setTimeout(() => {
      k.contains(R) && k.removeChild(R);
    }, 1e3);
  }, []), V = ee((g) => {
    const k = g.filter(($) => $.sortable !== !1), R = [
      { value: "", label: "Sort by..." }
    ];
    return k.forEach(($) => {
      const G = $.label || $.key;
      $.key === "name" ? R.push(
        { value: `${$.key}-asc`, label: `${G} (A-Z)` },
        { value: `${$.key}-desc`, label: `${G} (Z-A)` }
      ) : $.key === "ews_score" || $.key.includes("score") ? R.push(
        { value: `${$.key}-desc`, label: `${G} (High-Low)` },
        { value: `${$.key}-asc`, label: `${G} (Low-High)` }
      ) : $.key === "age" || $.key.includes("date") || $.key.includes("time") ? R.push(
        { value: `${$.key}-desc`, label: `${G} (Oldest-Youngest)` },
        { value: `${$.key}-asc`, label: `${G} (Youngest-Oldest)` }
      ) : R.push(
        { value: `${$.key}-asc`, label: `${G} (A-Z)` },
        { value: `${$.key}-desc`, label: `${G} (Z-A)` }
      );
    }), R;
  }, []), fe = ee((g, k) => k ? [...g].sort((R, $) => {
    const G = R[k.key], Z = $[k.key];
    if (G == null && Z == null) return 0;
    if (G == null) return 1;
    if (Z == null) return -1;
    const se = Number(G), re = Number(Z);
    if (!isNaN(se) && !isNaN(re))
      return k.direction === "asc" ? se - re : re - se;
    const J = String(G).toLowerCase(), de = String(Z).toLowerCase(), je = J.localeCompare(de);
    return k.direction === "asc" ? je : -je;
  }) : g, []), f = ee((g) => {
    if (!g) {
      z((J) => ({ ...J, cardSortConfig: null })), O("Card sorting cleared");
      return;
    }
    const [k, R] = g.split("-"), $ = { key: k, direction: R };
    z((J) => ({ ...J, cardSortConfig: $ }));
    const se = s[b.selectedIndex]?.columns.find((J) => J.key === k)?.label || k;
    O(`Cards sorted by ${se} in ${R === "asc" ? "ascending" : "descending"} order`);
  }, [s, b.selectedIndex, O]), T = ee((g) => {
    const $ = s[b.selectedIndex]?.columns.find((Z) => Z.key === g.key)?.label || g.key, G = g.direction === "asc" ? "ascending" : "descending";
    return `${$} (${G})`;
  }, [s, b.selectedIndex]), U = ee((g) => {
    const k = s[b.selectedIndex];
    if (o) {
      const R = b.sortConfig;
      return !R || R.length === 0 ? g : [...g].sort(($, G) => {
        for (const { key: Z, direction: se } of R) {
          let re = $[Z], J = G[Z];
          const de = k?.columns.find((Be) => Be.key === Z);
          if (de?.cardRenderer ? (re = de.cardRenderer($), J = de.cardRenderer(G)) : de?.render && (re = de.render($), J = de.render(G)), re == null && J == null) continue;
          if (re == null) return se === "asc" ? -1 : 1;
          if (J == null) return se === "asc" ? 1 : -1;
          const je = Number(re), ve = Number(J);
          if (!isNaN(je) && !isNaN(ve)) {
            const Be = je - ve;
            if (Be !== 0) return se === "asc" ? Be : -Be;
            continue;
          }
          const Ce = String(re).toLowerCase(), Ct = String(J).toLowerCase(), Me = Ce.localeCompare(Ct);
          if (Me !== 0) return se === "asc" ? Me : -Me;
        }
        return 0;
      });
    } else
      return fe(g, y.cardSortConfig);
  }, [o, b.sortConfig, y.cardSortConfig, fe, s, b.selectedIndex]), E = ee((g, k) => {
    const R = K(g), $ = R[k];
    if ($) {
      $.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const G = `Focused on ${$.label}, ${$.type} ${k + 1} of ${R.length} within card`;
      O(G);
    }
  }, [K, O]), W = ee((g) => {
    D.current[g]?.focus();
  }, []), q = ee(() => {
    const g = v.current[0];
    if (!g) return [];
    const k = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), R = g.querySelectorAll(k);
    return Array.from(R);
  }, []), w = ee((g) => {
    if (g === 0) {
      const k = v.current[0];
      if (k) {
        k.focus();
        const $ = `Sort controls region with ${q().length} interactive elements. Press Enter or Space to navigate between controls.`;
        O($);
      }
    } else {
      const k = q(), R = g - 1, $ = k[R];
      if ($) {
        $.focus();
        const G = $.tagName.toLowerCase() === "select", Z = $.tagName.toLowerCase() === "button", se = G ? "dropdown" : Z ? "button" : "control", re = G ? ". Use Space key to open dropdown" : "", J = `${se} ${R + 1} of ${k.length}${re}`;
        O(J);
      }
    }
  }, [q, O]), ie = ee((g, k) => {
    const { key: R } = g, $ = s[b.selectedIndex], G = $?.data.length || 0;
    if (R === "ArrowLeft" && g.shiftKey) {
      g.preventDefault(), g.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (R === "ArrowRight" && g.shiftKey) {
      g.preventDefault(), g.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!y.isCardNavigationActive) {
      switch (R) {
        case "ArrowUp":
          if (g.preventDefault(), k === 0)
            z((J) => ({ ...J, focusArea: "tabs" })), W(b.selectedIndex);
          else {
            const J = te(k, "up", G, y.gridColumns);
            J !== k && (z((de) => ({ ...de, focusedCardIndex: J })), N(J), O(`Moved to card ${J + 1} of ${G}`));
          }
          break;
        case "ArrowDown":
          g.preventDefault();
          const Z = te(k, "down", G, y.gridColumns);
          Z !== k && (z((J) => ({ ...J, focusedCardIndex: Z })), N(Z), O(`Moved to card ${Z + 1} of ${G}`));
          break;
        case "ArrowLeft":
          g.preventDefault();
          const se = te(k, "left", G, y.gridColumns);
          se !== k ? (z((J) => ({ ...J, focusedCardIndex: se })), N(se), O(`Moved to card ${se + 1} of ${G}`)) : b.selectedIndex > 0 && (M({ type: "SET_SELECTED_INDEX", payload: b.selectedIndex - 1 }), z((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => W(b.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          g.preventDefault();
          const re = te(k, "right", G, y.gridColumns);
          re !== k ? (z((J) => ({ ...J, focusedCardIndex: re })), N(re), O(`Moved to card ${re + 1} of ${G}`)) : b.selectedIndex < s.length - 1 && (M({ type: "SET_SELECTED_INDEX", payload: b.selectedIndex + 1 }), z((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => W(b.selectedIndex + 1), 0));
          break;
        case "Enter":
          if ($?.data[k]) {
            g.preventDefault(), z((de) => ({
              ...de,
              selectedCardIndex: k
            }));
            const J = K(k);
            J.length > 0 ? (z((de) => ({
              ...de,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: J,
              selectedCardIndex: k
              // Ensure selection is maintained
            })), O(`Card ${k + 1} selected and navigation activated. ${J.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : O(`Card ${k + 1} selected.`);
          }
          break;
        case " ":
          if ($?.data[k]) {
            g.preventDefault(), z((de) => ({
              ...de,
              selectedCardIndex: de.selectedCardIndex === k ? -1 : k
            }));
            const J = y.selectedCardIndex === k;
            O(`Card ${k + 1} ${J ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (R) {
      case "ArrowUp":
      case "ArrowLeft":
        g.preventDefault();
        const Z = Math.max(0, y.focusedCardElementIndex - 1);
        z((de) => ({ ...de, focusedCardElementIndex: Z })), E(k, Z);
        break;
      case "ArrowDown":
      case "ArrowRight":
        g.preventDefault();
        const se = Math.min(y.cardElements.length - 1, y.focusedCardElementIndex + 1);
        z((de) => ({ ...de, focusedCardElementIndex: se })), E(k, se);
        break;
      case "Enter":
        g.preventDefault();
        const re = y.cardElements[y.focusedCardElementIndex];
        re && (re.element.click(), O(`Activated ${re.label}`));
        break;
      case " ":
        g.preventDefault();
        const J = y.cardElements[y.focusedCardElementIndex];
        if (J) {
          const de = new MouseEvent("dblclick", { bubbles: !0 });
          J.element.dispatchEvent(de), O(`Double-clicked ${J.label}`);
        }
        break;
      case "Escape":
        g.preventDefault(), z((de) => ({
          ...de,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => N(k), 0), O("Exited card navigation, returned to card level");
        break;
      case "Home":
        g.preventDefault(), y.cardElements.length > 0 && (z((de) => ({ ...de, focusedCardElementIndex: 0 })), E(k, 0));
        break;
      case "End":
        if (g.preventDefault(), y.cardElements.length > 0) {
          const de = y.cardElements.length - 1;
          z((je) => ({ ...je, focusedCardElementIndex: de })), E(k, de);
        }
        break;
    }
  }, [y, b.selectedIndex, s, ce, N, W, z, K, E, O]), ne = ee((g) => {
    const k = D.current[g], R = k?.parentElement;
    if (!k || !R) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const $ = k.getBoundingClientRect(), G = R.getBoundingClientRect();
    $.left >= G.left && $.right <= G.right || (console.log("Tab not visible, scrolling into view (mobile)"), k.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), le = ee((g, k) => {
    if (j !== "cards")
      return;
    const { key: R } = g;
    switch (R) {
      case "ArrowLeft":
        g.preventDefault();
        const $ = k > 0 ? k - 1 : s.length - 1;
        oe($), z((re) => ({ ...re, focusedTabIndex: $ })), D.current[$]?.focus(), ne($);
        break;
      case "ArrowRight":
        g.preventDefault();
        const G = k < s.length - 1 ? k + 1 : 0;
        oe(G), z((re) => ({ ...re, focusedTabIndex: G })), D.current[G]?.focus(), ne(G);
        break;
      case "ArrowDown":
        g.preventDefault();
        const Z = s[b.selectedIndex];
        Z && Z.columns && Z.columns.length > 0 ? (z((re) => ({
          ...re,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), w(0)) : (z((re) => ({
          ...re,
          focusArea: "cards",
          focusedCardIndex: 0
        })), N(0));
        break;
      case "Home":
        g.preventDefault(), oe(0), z((re) => ({ ...re, focusedTabIndex: 0 })), D.current[0]?.focus(), ne(0);
        break;
      case "End":
        g.preventDefault();
        const se = s.length - 1;
        oe(se), z((re) => ({ ...re, focusedTabIndex: se })), D.current[se]?.focus(), ne(se);
        break;
      case "Enter":
      case " ":
        g.preventDefault(), oe(k);
        break;
    }
  }, [s.length, oe, j, N, z, ne]), Y = ee((g, k) => {
    if (j !== "cards")
      return;
    const { key: R } = g, $ = s[b.selectedIndex];
    if (k === 0 && !y.isSortControlsActive) {
      switch (R) {
        case "ArrowUp":
          g.preventDefault(), z((Z) => ({
            ...Z,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), W(b.selectedIndex);
          break;
        case "ArrowDown":
          g.preventDefault(), $?.data && $.data.length > 0 && (z((Z) => ({
            ...Z,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), N(0));
          break;
        case "Enter":
        case " ":
          g.preventDefault();
          const G = q();
          if (G.length > 0) {
            z((se) => ({
              ...se,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), w(1);
            const Z = `Entered sort controls navigation mode. ${G.length} controls available. Use arrow keys to navigate between controls.`;
            O(Z);
          }
          break;
        case "Escape":
          g.preventDefault(), z((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), W(b.selectedIndex);
          break;
      }
      return;
    }
    if (y.isSortControlsActive) {
      const Z = q().length;
      switch (R) {
        case "ArrowLeft":
          g.preventDefault();
          const se = y.focusedSortControlIndex > 1 ? y.focusedSortControlIndex - 1 : Z;
          z((J) => ({ ...J, focusedSortControlIndex: se })), w(se);
          break;
        case "ArrowRight":
          g.preventDefault();
          const re = y.focusedSortControlIndex < Z ? y.focusedSortControlIndex + 1 : 1;
          z((J) => ({ ...J, focusedSortControlIndex: re })), w(re);
          break;
        case "ArrowDown":
          if (g.preventDefault(), y.isSortControlsActive) {
            const J = y.focusedSortControlIndex < Z ? y.focusedSortControlIndex + 1 : 1;
            z((de) => ({ ...de, focusedSortControlIndex: J })), w(J);
          } else
            $?.data && $.data.length > 0 && (z((J) => ({
              ...J,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), N(0));
          break;
        case "ArrowUp":
          g.preventDefault(), z((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), w(0);
          break;
        case "Escape":
          g.preventDefault(), z((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), W(b.selectedIndex);
          break;
      }
    }
  }, [j, s, b.selectedIndex, y.isSortControlsActive, y.focusedSortControlIndex, w, W, N, z, O]);
  if (j === "cards") {
    const g = s[b.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${B || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": u,
          "aria-describedby": `${d || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
          "aria-orientation": m,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((k, R) => {
            const $ = R === b.selectedIndex, G = k.disabled || _;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${k.id}`,
                "aria-controls": `panel-${k.id}`,
                "aria-selected": $,
                "aria-disabled": G,
                tabIndex: $ ? 0 : -1,
                ref: (Z) => {
                  D.current[R] = Z;
                },
                onClick: () => oe(R),
                onKeyDown: (Z) => le(Z, R),
                disabled: G,
                className: [
                  "aria-tabs-datagrid__tab",
                  $ ? "aria-tabs-datagrid__tab--selected" : "",
                  G ? "aria-tabs-datagrid__tab--disabled" : ""
                ].filter(Boolean).join(" "),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: k.label }),
                  b.tabLoadingStates[R] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  b.tabErrors[R] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              k.id
            );
          })
        }
      ),
      g && g.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          Ta,
          {
            sortConfig: b.sortConfig || [],
            columns: g.columns.map((k) => ({ key: k.key, label: k.label })),
            onSortChange: (k) => {
              M({ type: "SET_SORT", payload: k });
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
            tabIndex: y.focusArea === "sort-controls" ? 0 : -1,
            ref: (k) => {
              v.current[0] = k;
            },
            onKeyDown: (k) => Y(k, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${g.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  ia,
                  {
                    id: `card-sort-${g.id}`,
                    name: `card-sort-${g.id}`,
                    value: y.cardSortConfig ? `${y.cardSortConfig.key}-${y.cardSortConfig.direction}` : "",
                    onChange: (k) => f(k.target.value),
                    className: "sort-select",
                    children: V(g.columns).map((k) => /* @__PURE__ */ n.jsx("option", { value: k.value, children: k.label }, k.value))
                  }
                )
              ] }),
              y.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  T(y.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  De,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => f(""),
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
          ref: h,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${g?.label || "Data"} cards in ${y.gridRows} rows and ${y.gridColumns} columns`,
          "aria-rowcount": y.gridRows,
          "aria-colcount": y.gridColumns,
          id: `panel-${g?.id}`,
          "aria-labelledby": `tab-${g?.id}`,
          children: U(g?.data || []).map((k, R) => {
            const $ = y.selectedCardIndex === R, G = y.focusedCardIndex === R && y.focusArea === "cards", Z = y.focusedCardIndex === R && y.focusArea === "card" && y.isCardNavigationActive, se = R === 0 && y.focusArea !== "cards", re = G || se, J = P(R, y.gridColumns);
            if (r.cardTemplate) {
              const ve = r.cardTemplate(k, g.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: (Ce) => {
                    C.current[R] = Ce;
                  },
                  className: [
                    "aria-tabs-datagrid-adaptive__card-wrapper",
                    $ ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                    G ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                    Z ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                  ].filter(Boolean).join(" "),
                  role: "gridcell",
                  "aria-rowindex": J.row + 1,
                  "aria-colindex": J.col + 1,
                  "aria-selected": $,
                  "aria-expanded": Z,
                  "aria-description": Z ? `Card navigation active. ${y.cardElements.length} interactive elements available.` : void 0,
                  tabIndex: re ? 0 : -1,
                  onClick: () => {
                    z((Ce) => ({
                      ...Ce,
                      selectedCardIndex: Ce.selectedCardIndex === R ? -1 : R
                    })), ce(k);
                  },
                  onKeyDown: (Ce) => ie(Ce, R),
                  onFocus: () => {
                    z((Ce) => Ce.focusedCardIndex !== R || Ce.focusArea !== "cards" ? {
                      ...Ce,
                      focusedCardIndex: R,
                      focusArea: "cards"
                    } : Ce);
                  },
                  children: ve
                },
                `card-${R}`
              );
            }
            const de = Ql(k, g.columns, L, S), je = [
              de.className || "",
              $ ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              G ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              Z ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                className: [
                  "aria-tabs-datagrid-adaptive__card-wrapper",
                  Z ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                ].filter(Boolean).join(" "),
                role: "gridcell",
                "aria-rowindex": J.row + 1,
                "aria-colindex": J.col + 1,
                children: /* @__PURE__ */ n.jsx(
                  Na,
                  {
                    ...de,
                    ref: (ve) => {
                      C.current[R] = ve;
                    },
                    className: je,
                    "aria-selected": $,
                    "aria-expanded": Z,
                    "aria-label": `${de["aria-label"] || de.heading}. ${Z ? `Card navigation active with ${y.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                    tabIndex: re ? 0 : -1,
                    onClick: () => {
                      z((ve) => ({
                        ...ve,
                        selectedCardIndex: ve.selectedCardIndex === R ? -1 : R
                      })), ce(k);
                    },
                    onKeyDown: (ve) => ie(ve, R),
                    onFocus: () => {
                      y.isCardNavigationActive || z((ve) => ve.focusedCardIndex !== R || ve.focusArea !== "cards" ? {
                        ...ve,
                        focusedCardIndex: R,
                        focusArea: "cards",
                        // Reset card navigation state when switching cards
                        focusedCardElementIndex: 0,
                        cardElements: []
                      } : ve);
                    }
                  }
                )
              },
              `card-${R}`
            );
          })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: H,
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
  return j === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${B || ""}`, children: /* @__PURE__ */ n.jsx(
    In,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: u,
      ariaDescription: d,
      orientation: m,
      id: p,
      disabled: _,
      selectedIndex: l,
      onTabChange: c,
      className: "aria-tabs-datagrid-adaptive__table--hybrid",
      ...x
    }
  ) }) : /* @__PURE__ */ n.jsx(
    In,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: u,
      ariaDescription: d,
      orientation: m,
      id: p,
      disabled: _,
      selectedIndex: l,
      onTabChange: c,
      ...x
    }
  );
}, Ea = (e) => {
  const t = Rn.find((r) => r.value === e);
  return t ? t.icon : null;
}, ec = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => Ea(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, tc = (e) => gr(e, [
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
]), nc = {
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
  booleanRenderer: (e) => Ea(e),
  getDataId: (e) => `financial-${e.id}`
}, rc = (e) => gr(e, [
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
]), ac = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: ec,
    createTabs: tc
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: nc,
    createTabs: rc
  }
}, Jr = (e, t) => {
  const r = ac[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, Ma = [
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
], sc = [
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
], oc = [
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
], ic = [
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
], Xr = [
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
], Qr = [
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
], ea = [
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
], lc = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, cc = () => [
  {
    id: "patients",
    label: "Patients",
    data: Ma,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Da,
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
    data: sc,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Fa,
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
    data: oc,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Ba,
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
    data: ic,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Ia,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], dc = () => {
  const [e, t] = pe("healthcare"), r = _e(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: $l,
      tabPanels: cc(),
      data: Ma
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Jr("ecommerce", Xr),
      data: Xr
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Jr("financial", Qr),
      data: Qr
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: lc,
      tabPanels: gr(ea, [
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
      data: ea
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
        De,
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
      In,
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
}, Ff = dc, $a = (e) => /* @__PURE__ */ n.jsx(la, { ...e }), Bf = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: o,
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  service: c,
  navigation: u,
  search: d,
  account: m,
  organisation: p,
  logo: _,
  className: B,
  ...x
}) => {
  const j = {
    service: c,
    navigation: u,
    search: d,
    account: m,
    organisation: p,
    logo: _,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(ja, { ...s }),
    /* @__PURE__ */ n.jsx(fa, { ...j }),
    /* @__PURE__ */ n.jsx($a, { className: B, ...x, children: /* @__PURE__ */ n.jsx(ca, { size: o, children: /* @__PURE__ */ n.jsx(Rt, { children: /* @__PURE__ */ n.jsxs(or, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Ze, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(ma, { ...l })
  ] });
}, If = ({
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
  serviceName: u,
  serviceHref: d,
  logo: m,
  className: p,
  ..._
}) => {
  const B = {
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
    /* @__PURE__ */ n.jsx(ja, { ...s }),
    /* @__PURE__ */ n.jsx(fa, { ...B }),
    /* @__PURE__ */ n.jsxs($a, { className: p, ..._, children: [
      c && /* @__PURE__ */ n.jsx(sa, { ...c }),
      /* @__PURE__ */ n.jsx(ca, { size: o, children: /* @__PURE__ */ n.jsx(Rt, { children: /* @__PURE__ */ n.jsxs(or, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Ze, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(ma, { ...l })
  ] });
}, lt = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function ta() {
  return typeof window > "u" ? lt.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Aa() {
  const [e, t] = he.useState(ta());
  he.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(ta());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = he.useCallback((s) => e >= lt[s], [e]), a = he.useCallback((s) => e < lt[s], [e]), o = he.useCallback((s, i) => e >= lt[s] && e < lt[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: o,
    /** Raw numeric values */
    values: lt
  };
}
function Rf(e) {
  const { width: t, values: r } = Aa();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function uc(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = he.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = he.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return he.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    o ? c.set(r, String(o)) : c.delete(r), c.set(a, i ? "1" : "0");
    const u = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", u);
  }, [o, i, t, r, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const hc = ({ className: e }) => /* @__PURE__ */ n.jsx("svg", { className: e, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z" }) }), fc = ({ className: e }) => /* @__PURE__ */ n.jsx("svg", { className: e, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z" }) });
function mc(e) {
  const {
    items: t,
    selectedId: r,
    defaultSelectedId: a,
    onSelectionChange: o,
    renderItemContent: s,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: c,
    animated: u = !0,
    backLabel: d = "Back",
    isLoading: m = !1,
    emptyState: p,
    a11y: _,
    className: B,
    getId: x = (ue) => ue.id,
    orientation: j = "vertical",
    autoEnableThirdColumn: F = !0,
    onDrillChange: I,
    navigationInstructions: L = "Use arrow keys to navigate, Enter to open.",
    initialFocus: S = "first",
    skipFocusOnSelect: A = !1,
    skipAnnouncements: b = !1,
    onFocusChange: M,
    syncUrl: D = !1,
    urlParamSelected: C = "nsv",
    urlParamDrill: v = "nsvDrill",
    urlSyncDebounceMs: h = 0,
    lazySecondary: y = !1,
    navFooter: z,
    collapsibleNav: ae = !1,
    navInitiallyCollapsed: P = !1,
    onNavCollapseChange: Q,
    collapseToggleLabelShow: te = "Show navigation",
    collapseToggleLabelHide: oe = "Hide navigation",
    collapseToggleIconShow: ce,
    collapseToggleIconHide: N,
    persistNavCollapsed: K,
    navCollapsedStorageKey: H = "nsvCollapsed",
    navCollapsedUrlParam: O = "nsvCollapsed",
    autoContentHeader: V,
    contentHeaderLevel: fe = 2,
    renderContentHeader: f
  } = e, { up: T } = Aa(), [U, E] = he.useState(!1);
  he.useEffect(() => {
    E(!0);
  }, []);
  const W = U && T("medium"), q = U && T("xlarge");
  let w;
  c ? w = c : W ? w = "two-column" : w = "list", !c && F && l && q && (w = "three-column");
  const ie = uc({
    enabled: D,
    paramSelected: C,
    paramDrill: v
  }), [ne, le] = he.useState(
    () => ie.selectedId !== void 0 ? ie.selectedId : a
  ), Y = r !== void 0 ? r : ne, g = t.find((ue) => x(ue) === Y), k = he.useRef(null), R = he.useRef(null), $ = !!g && (w === "list" || w === "cards"), G = he.useMemo(() => V === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : V === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : V === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: V.mobile !== void 0 ? V.mobile : !0,
    tablet: V.tablet || !1,
    desktop: V.desktop || !1
  }, [V]), Z = U && T("medium") && !T("xlarge"), se = U && T("xlarge"), re = !!g && ($ && G.mobile || // mobile detail view (list/cards)
  !$ && Z && G.tablet || // tablet two-column
  !$ && se && G.desktop), J = `h${fe}`, de = g ? he.createElement(J, { style: { marginLeft: $ ? 32 : 0 } }, g.label) : null, je = $ ? "mobile" : Z ? "tablet" : "desktop", ve = $ && G.mobile ? /* @__PURE__ */ n.jsx(
    sa,
    {
      element: "button",
      text: d,
      onClick: () => Me(void 0, void 0)
    }
  ) : void 0, Ce = he.useMemo(() => !re || !g ? null : f ? f({
    item: g,
    detailActive: $,
    context: je,
    backLink: ve,
    defaultHeading: de
  }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    ve,
    de
  ] }), [re, g, f, $, je, ve, de]);
  he.useEffect(() => {
    if (!D) return;
    const ue = w === "three-column";
    let ke = !1;
    const me = () => {
      ke || (ie.selectedId !== Y && ie.setSelectedId(Y), ie.drilledIn !== ue && ie.setDrilledIn(ue));
    };
    if (h && h > 0) {
      const be = setTimeout(me, h);
      return () => {
        ke = !0, clearTimeout(be);
      };
    } else
      me();
  }, [D, ie, Y, w, h]), he.useEffect(() => {
    if (!D) return;
    const ue = () => {
      const ke = new URLSearchParams(window.location.search), me = ke.get(C);
      ke.get(v), le(me === null ? void 0 : me);
    };
    return window.addEventListener("popstate", ue), () => window.removeEventListener("popstate", ue);
  }, [D, C, v, c, l]);
  const Ct = he.useRef(0), Me = he.useCallback((ue, ke) => {
    r === void 0 && le(ue), o?.(ue, ke);
  }, [r, o]);
  he.useEffect(() => {
    if (!A && $ && R.current) {
      const ue = setTimeout(() => R.current?.focus(), 30);
      return () => clearTimeout(ue);
    }
  }, [$, Y, A]);
  const Be = he.useRef(null), [Qe, jt] = he.useState(() => S === "first" ? 0 : -1);
  he.useEffect(() => {
    if (!Be.current) return;
    const ue = Array.from(Be.current.querySelectorAll("button[data-nav-item]"));
    if (ue.forEach((ke, me) => ke.tabIndex = (Qe === -1 ? me === 0 && S === "first" : me === Qe) ? 0 : -1), Qe >= 0) {
      ue[Qe]?.focus();
      const me = t[Qe];
      M?.(me ? x(me) : void 0, me, Qe);
    }
  }, [Qe, t, S, M, x]);
  const Fs = (ue) => {
    const ke = j === "vertical" ? "ArrowDown" : "ArrowRight", me = j === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ue.key === ke)
      ue.preventDefault(), jt((be) => Math.min(t.length - 1, be + 1));
    else if (ue.key === me)
      ue.preventDefault(), jt((be) => Math.max(0, be - 1));
    else if (ue.key === "Home")
      ue.preventDefault(), jt(0);
    else if (ue.key === "End")
      ue.preventDefault(), jt(t.length - 1);
    else if (ue.key === "Enter" || ue.key === " ") {
      ue.preventDefault();
      const be = t[Qe];
      be && !be.disabled && Me(x(be), be);
    }
  }, Bs = he.useMemo(() => {
    if (K && (K === "url" || K === "both") && typeof window < "u") {
      const ke = new URLSearchParams(window.location.search).get(O);
      if (ke === "1") return !0;
      if (ke === "0") return !1;
    }
    if (K && (K === "localStorage" || K === "both") && typeof window < "u")
      try {
        const ue = window.localStorage.getItem(H);
        if (ue === "1") return !0;
        if (ue === "0") return !1;
      } catch {
      }
    return P;
  }, [K, P, H, O]), [Le, Is] = he.useState(Bs);
  he.useEffect(() => {
    Q?.(Le);
  }, [Le, Q]);
  const Rs = he.useCallback(() => {
    W && ae && Is((ue) => !ue);
  }, [W, ae]);
  he.useEffect(() => {
    if (K && !(typeof window > "u")) {
      if (K === "localStorage" || K === "both")
        try {
          window.localStorage.setItem(H, Le ? "1" : "0");
        } catch {
        }
      if (K === "url" || K === "both") {
        const ue = new URLSearchParams(window.location.search);
        ue.set(O, Le ? "1" : "0");
        const ke = `${window.location.pathname}?${ue.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", ke);
      }
    }
  }, [Le, K, H, O]);
  const Ls = [
    "nhs-navigation-split-view",
    u ? "nhs-navigation-split-view--animated" : "",
    $ ? "nhs-navigation-split-view--detail-active" : "",
    w === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    ae && W && Le ? "nhs-navigation-split-view--nav-collapsed" : "",
    B
  ].filter(Boolean).join(" "), gn = he.useRef(null);
  he.useEffect(() => {
    if (!b && gn.current) {
      const ue = g ? `Selected ${g.label}` : "Selection cleared";
      gn.current.textContent = ue;
    }
  }, [g, b]), he.useEffect(() => {
    !$ && Y == null && Be.current && Be.current.querySelectorAll("button[data-nav-item]")[Ct.current]?.focus();
  }, [$, Y]);
  const et = w === "three-column", [bn, Es] = he.useState(!1);
  he.useEffect(() => {
    et && !bn && Es(!0);
  }, [et, bn]);
  const br = he.useRef(et);
  he.useEffect(() => {
    br.current !== et && (I?.(et), br.current = et);
  }, [et, I]);
  const Ms = () => {
    if (w === "cards")
      return /* @__PURE__ */ n.jsxs("ul", { className: "nhs-navigation-split-view__cards", role: "listbox", "aria-activedescendant": Y ? String(Y) : void 0, children: [
        t.map((me) => {
          const be = x(me), Nt = be === Y;
          return /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", role: "option", "aria-selected": Nt, children: /* @__PURE__ */ n.jsxs(
            "button",
            {
              id: String(be),
              type: "button",
              className: "nhs-navigation-split-view__card",
              "data-selected": Nt || void 0,
              "data-disabled": me.disabled || void 0,
              disabled: me.disabled,
              onClick: () => !me.disabled && Me(be, me),
              children: [
                me.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: me.icon }),
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: me.label }),
                me.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: me.description }),
                s?.(me),
                me.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: me.badge })
              ]
            }
          ) }, be);
        }),
        t.length === 0 && !m && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", "aria-disabled": "true", children: p || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
      ] });
    const ue = "nsv-nav-instructions", ke = he.useMemo(() => {
      const me = ({ item: be, idx: Nt, selected: xn }) => {
        const xr = x(be);
        return /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__list-item", role: "option", "aria-selected": xn, children: /* @__PURE__ */ n.jsxs(
          "button",
          {
            id: String(xr),
            "data-nav-item": !0,
            type: "button",
            className: "nhs-navigation-split-view__item-button",
            "data-selected": xn || void 0,
            "data-disabled": be.disabled || void 0,
            disabled: be.disabled,
            "aria-current": xn ? "true" : void 0,
            onClick: () => {
              be.disabled || (Ct.current = Nt, Me(xr, be));
            },
            children: [
              be.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: be.icon }),
              /* @__PURE__ */ n.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: be.label }),
                be.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: be.description }),
                s?.(be)
              ] }),
              be.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: be.badge })
            ]
          }
        ) });
      };
      return he.memo(me);
    }, [x, Me, s]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: Be,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Fs,
          role: "listbox",
          "aria-describedby": ue,
          "aria-activedescendant": Y ? String(Y) : void 0,
          children: [
            t.map((me, be) => /* @__PURE__ */ n.jsx(ke, { item: me, idx: be, selected: x(me) === Y }, x(me))),
            t.length === 0 && !m && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__list-item", "aria-disabled": "true", children: p || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
          ]
        }
      ),
      /* @__PURE__ */ n.jsx("div", { id: ue, style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: L })
    ] });
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: k,
      className: Ls,
      "aria-label": _?.rootLabel,
      "data-layout": w,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__panes", "data-active-detail": $ || void 0, style: { transform: $ ? "translateX(-100%)" : void 0 }, children: [
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "nhs-navigation-split-view__nav-pane",
              role: "navigation",
              "aria-label": _?.navigationLabel || "Items",
              "data-collapsed": Le || void 0,
              children: [
                ae && W && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: Rs,
                    className: "nhs-navigation-split-view__nav-collapse-btn",
                    "aria-label": Le ? te : oe,
                    title: Le ? te : oe,
                    children: Le ? ce || /* @__PURE__ */ n.jsx(fc, {}) : N || /* @__PURE__ */ n.jsx(hc, {})
                  }
                ) }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Ms() }),
                z && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-footer", role: "contentinfo", children: z })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              ref: R,
              className: "nhs-navigation-split-view__content-pane",
              role: "region",
              "aria-label": _?.contentLabel || "Content",
              "data-has-selection": !!g || void 0,
              tabIndex: -1,
              children: [
                re && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: Ce }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__content-inner", style: { padding: 32, flex: 1 }, children: i(g) })
              ]
            }
          ),
          w === "three-column" && (!y || bn) && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhs-navigation-split-view__secondary-pane",
              role: "region",
              "aria-label": _?.secondaryContentLabel || "Secondary",
              children: /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(g) })
            }
          )
        ] }),
        /* @__PURE__ */ n.jsx("div", { ref: gn, "aria-live": "polite", "aria-atomic": "true", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" } }),
        /* @__PURE__ */ n.jsx("div", { "aria-live": "polite", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: et ? "Expanded to three column layout" : "In two column layout" })
      ] })
    }
  );
}
mc.displayName = "NavigationSplitView";
const pc = "150ms", gc = "300ms", bc = "500ms", xc = "cubic-bezier(0.4, 0, 1, 1)", yc = "cubic-bezier(0, 0, 0.2, 1)", _c = "cubic-bezier(0.4, 0, 0.2, 1)", vc = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", kc = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", wc = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Sc = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Cc = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", jc = "1px", Nc = "2px", Tc = "4px", Dc = "4px", Fc = "4px", Bc = "2px", Ic = "1px", Rc = "0px", Lc = "4px", Ec = "8px", Mc = "12px", Ha = "#d8dde0", Pa = "#4c6272", za = "#d8dde0", Wa = "#aeb7bd", Oa = "#d5281b", Ua = "#005eb8", Ga = "#ffffff", Va = "#212b32", Ya = "#007f3b", qa = "#330072", Ka = "#7c2855", Za = "#d5281b", Ja = "#ffeb3b", Xa = "#fff9c4", Qa = "#ffb81c", es = "#ed8b00", ts = "#00a499", ns = "#ae2573", rs = "#4c6272", as = "#768692", ss = "#aeb7bd", os = "#d8dde0", is = "#f0f4f5", $c = "#212b32", Ac = "#4c6272", Hc = "#ffffff", Pc = "#212b32", zc = "#005eb8", Wc = "#7c2855", Oc = "#003087", Uc = "#330072", Gc = "#ffeb3b", Vc = "#212b32", Yc = "#d8dde0", qc = "#ffffff33", Kc = "#d5281b", Zc = "#4c6272", Jc = "#ffffff", Xc = "#007f3b", Qc = "#ffffff", ed = "#006530", td = "#004021", nd = "#004021", rd = "#00000000", ad = "#ffffff", sd = "#005eb8", od = "#005eb8", id = "#d9e5f2", ld = "#c7daf0", cd = "#005eb8", dd = "#ffffff", ud = "#212b32", hd = "#d9dde0", fd = "#b3bcc2", md = "#b3bcc2", pd = "#d5281b", gd = "#aa2016", bd = "#6a140e", xd = "#6a140e", yd = "#005eb8", _d = "#004b93", vd = "#002f5c", kd = "#002f5c", wd = "8px", Sd = "16px", Cd = "12px", jd = "16px", Nd = "4px", Td = "40px", Dd = "4px", Fd = "40px", Bd = "12px", Id = "16px", Rd = "32px", Ld = "16px", Ed = "20px", Md = "28px", $d = "9px", Ad = "2px", Hd = "16px", Pd = "24px", zd = "8px", Wd = "24px", Od = "16px", Ud = "4px", Gd = "4px", Vd = "4px", Yd = "8px", qd = "4px", Kd = "16px", Zd = "#007f3b", Jd = "#006530", Xd = "#004021", Qd = "#d8dde0", eu = "#ffffff", tu = "#768692", nu = "#00000000", ru = "#ffeb3b", au = "#00000000", su = "#ffffff", ou = "#d9e5f2", iu = "#c7daf0", lu = "#005eb8", cu = "#005eb8", ls = "8px", cs = "16px", ds = "12px", us = "16px", du = "2px", uu = "4px", hu = "4px", fu = "600", mu = "#ffffff", pu = "#d8dde0", gu = "#aeb7bd", bu = "#f0f4f5", xu = "#212b32", yu = "#212b32", _u = "#005eb8", hs = "16px", fs = "32px", ms = "16px", vu = "1px", ku = "4px", wu = "none", Su = "0 2px 4px rgba(0, 0, 0, 0.1)", Cu = "#ffffff", ju = "#ffffff", Nu = "#d8dde0", Tu = "#ffffff", Du = "#4c6272", Fu = "#ffeb3b", Bu = "#d5281b", Iu = "#aeb7bd", Ru = "#212b32", Lu = "#4c6272", Eu = "#768692", Mu = "#212b32", $u = "#ffffff", Au = "600", Hu = "#d5281b", Pu = "600", zu = "#4c6272", ps = "4px", gs = "40px", bs = "40px", xs = "12px", Wu = "2px", Ou = "4px", Uu = "0px", Gu = "16px", Vu = "18px", Yu = "24px", qu = "32px", Ku = "34px", Zu = "32px", Ju = "40px", Xu = "48px", Qu = "5.4ex", eh = "7.2ex", th = "9ex", nh = "10.8ex", rh = "20ex", ah = "38ex", sh = "56ex", oh = "44px", ih = "40px", lh = "1020px", ch = "100%", dh = "50%", uh = "33.333%", hh = "25%", fh = "20%", mh = "320px", ph = "641px", gh = "1025px", bh = "1280px", xh = "960px", yh = "32px", _h = "16px", vh = "#d5281b", kh = "#d5281b", wh = "#ffffff", Sh = "#007f3b", Ch = "#007f3b", jh = "#ffffff", Nh = "#ffeb3b", Th = "#ffeb3b", Dh = "#212b32", Fh = "#005eb8", Bh = "#005eb8", Ih = "#ffffff", Rh = "#d8dde0", Lh = "#aeb7bd", Eh = "#768692", Mh = "0 4px 0 #004021", $h = "0 4px 0 #005eb8", Ah = "0 4px 0 #6a140e", Hh = "0 4px 0 #ffeb3b", Ph = "none", zh = "0 2px 4px rgba(0, 0, 0, 0.1)", Wh = "4px", Oh = "0px", Uh = "solid", Gh = "0 0 0 3px #ffeb3b", Vh = "0 0 0 3px #ffeb3b", Yh = "none", qh = "0 1px 3px rgba(0, 0, 0, 0.12)", Kh = "0 2px 6px rgba(0, 0, 0, 0.16)", Zh = "0 4px 12px rgba(0, 0, 0, 0.20)", ys = "0", _s = "4px", vs = "8px", ks = "16px", ws = "24px", Ss = "32px", Cs = "40px", js = "48px", Ns = "56px", Ts = "64px", Ln = "0", En = "0", Mn = "4px", $n = "4px", An = "8px", Hn = "8px", Pn = "8px", zn = "16px", Wn = "16px", On = "24px", Un = "24px", Gn = "32px", Vn = "32px", Yn = "40px", qn = "40px", Kn = "48px", Zn = "48px", Jn = "56px", Xn = "56px", Qn = "64px", zt = "Frutiger W01", Wt = "Arial, Helvetica, sans-serif", Ot = "sans-serif", Ut = "400", Gt = "600", Vt = "400", Yt = "12px", qt = "14px", Kt = "12pt", Zt = "14px", Jt = "16px", Xt = "12pt", Qt = "16px", en = "19px", tn = "13pt", nn = "19px", rn = "22px", an = "15pt", sn = "22px", on = "26px", ln = "17pt", cn = "27px", dn = "36px", un = "20pt", hn = "33px", fn = "48px", mn = "24pt", er = "16px", tr = "24px", $e = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ae = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, He = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Pe = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ze = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, We = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Oe = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ue = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ge = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ve = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: pc,
  AnimationDurationNormal: gc,
  AnimationDurationSlow: bc,
  AnimationEasingBounce: vc,
  AnimationEasingEaseIn: xc,
  AnimationEasingEaseInOut: _c,
  AnimationEasingEaseOut: yc,
  BorderColorCard: za,
  BorderColorCardHover: Wa,
  BorderColorDefault: Ha,
  BorderColorError: Oa,
  BorderColorForm: Pa,
  BorderRadiusLarge: Mc,
  BorderRadiusMedium: Ec,
  BorderRadiusNone: Rc,
  BorderRadiusSmall: Lc,
  BorderWidthCardBottom: Dc,
  BorderWidthDefault: jc,
  BorderWidthFormElement: Nc,
  BorderWidthFormElementError: Tc,
  BorderWidthPanel: Fc,
  BorderWidthTableCell: Ic,
  BorderWidthTableHeader: Bc,
  BreakpointDesktop: gh,
  BreakpointLargeDesktop: bh,
  BreakpointMobile: mh,
  BreakpointTablet: ph,
  ButtonBorderRadius: uu,
  ButtonBorderWidth: du,
  ButtonPrimaryBackgroundActive: Xd,
  ButtonPrimaryBackgroundDefault: Zd,
  ButtonPrimaryBackgroundDisabled: Qd,
  ButtonPrimaryBackgroundHover: Jd,
  ButtonPrimaryBorderDefault: nu,
  ButtonPrimaryBorderFocus: ru,
  ButtonPrimaryTextDefault: eu,
  ButtonPrimaryTextDisabled: tu,
  ButtonSecondaryBackgroundActive: iu,
  ButtonSecondaryBackgroundDefault: au,
  ButtonSecondaryBackgroundHover: ou,
  ButtonSecondaryBackgroundSolid: su,
  ButtonSecondaryBorderDefault: cu,
  ButtonSecondaryTextDefault: lu,
  ButtonShadowSize: hu,
  ButtonSpacingPaddingHorizontalDesktop: us,
  ButtonSpacingPaddingHorizontalMobile: cs,
  ButtonSpacingPaddingVerticalDesktop: ds,
  ButtonSpacingPaddingVerticalMobile: ls,
  ButtonTypographyWeight: fu,
  CardBackgroundDefault: mu,
  CardBorderBottom: bu,
  CardBorderDefault: pu,
  CardBorderHover: gu,
  CardBorderWidthBottom: ku,
  CardBorderWidthDefault: vu,
  CardShadowDefault: wu,
  CardShadowHover: Su,
  CardSpacingHeadingMargin: ms,
  CardSpacingPaddingDesktop: fs,
  CardSpacingPaddingMobile: hs,
  CardTextDescription: yu,
  CardTextHeading: xu,
  CardTextLink: _u,
  ColorBorderDefault: Yc,
  ColorBorderSecondary: qc,
  ColorButtonLoginActive: vd,
  ColorButtonLoginBackground: yd,
  ColorButtonLoginHover: _d,
  ColorButtonLoginShadow: kd,
  ColorButtonPrimaryActive: td,
  ColorButtonPrimaryBackground: Xc,
  ColorButtonPrimaryHover: ed,
  ColorButtonPrimaryShadow: nd,
  ColorButtonPrimaryText: Qc,
  ColorButtonReverseActive: fd,
  ColorButtonReverseBackground: dd,
  ColorButtonReverseHover: hd,
  ColorButtonReverseShadow: md,
  ColorButtonReverseText: ud,
  ColorButtonSecondaryActive: ld,
  ColorButtonSecondaryBackground: rd,
  ColorButtonSecondaryBackgroundSolid: ad,
  ColorButtonSecondaryBorder: sd,
  ColorButtonSecondaryHover: id,
  ColorButtonSecondaryShadow: cd,
  ColorButtonSecondaryText: od,
  ColorButtonWarningActive: bd,
  ColorButtonWarningBackground: pd,
  ColorButtonWarningHover: gd,
  ColorButtonWarningShadow: xd,
  ColorError: Kc,
  ColorFocusBackground: Gc,
  ColorFocusText: Vc,
  ColorFormBackground: Jc,
  ColorFormBorder: Zc,
  ColorGrey1: rs,
  ColorGrey2: as,
  ColorGrey3: ss,
  ColorGrey4: os,
  ColorGrey5: is,
  ColorLinkActive: Oc,
  ColorLinkDefault: zc,
  ColorLinkHover: Wc,
  ColorLinkVisited: Uc,
  ColorPrimaryBlack: Va,
  ColorPrimaryBlue: Ua,
  ColorPrimaryDarkPink: Ka,
  ColorPrimaryGreen: Ya,
  ColorPrimaryPurple: qa,
  ColorPrimaryRed: Za,
  ColorPrimaryWhite: Ga,
  ColorPrimaryYellow: Ja,
  ColorSecondaryAquaGreen: ts,
  ColorSecondaryOrange: es,
  ColorSecondaryPaleYellow: Xa,
  ColorSecondaryPink: ns,
  ColorSecondaryWarmYellow: Qa,
  ColorTextPrimary: $c,
  ColorTextPrint: Pc,
  ColorTextReverse: Hc,
  ColorTextSecondary: Ac,
  ComponentBlur: Gd,
  ComponentBreadcrumbChevronMarginLeft: $d,
  ComponentBreadcrumbChevronMarginRight: Ad,
  ComponentBreadcrumbPaddingTopDesktop: Pd,
  ComponentBreadcrumbPaddingTopMobile: Hd,
  ComponentButtonPaddingDesktopHorizontal: jd,
  ComponentButtonPaddingDesktopVertical: Cd,
  ComponentButtonPaddingMobileHorizontal: Sd,
  ComponentButtonPaddingMobileVertical: wd,
  ComponentButtonShadowSize: Nd,
  ComponentCardHeadingMargin: Ld,
  ComponentCardPaddingDesktop: Rd,
  ComponentCardPaddingMobile: Id,
  ComponentDetails: Yd,
  ComponentExpander: qd,
  ComponentFormCheckboxLabelPadding: Bd,
  ComponentFormCheckboxSize: Fd,
  ComponentFormInputMinHeight: Td,
  ComponentFormInputPadding: Dd,
  ComponentLink: Vd,
  ComponentPagination: Kd,
  ComponentPanelPaddingDesktop: Md,
  ComponentPanelPaddingMobile: Ed,
  ComponentSpread: Ud,
  ComponentSummaryListCellPaddingHorizontal: Wd,
  ComponentSummaryListCellPaddingVertical: zd,
  ComponentSummaryListRowMargin: Od,
  ElevationHigh: Zh,
  ElevationLow: qh,
  ElevationMedium: Kh,
  ElevationNone: Yh,
  FocusOutlineOffset: Oh,
  FocusOutlineStyle: Uh,
  FocusOutlineWidth: Wh,
  FocusShadowButton: Vh,
  FocusShadowInput: Gh,
  FontFamilyBase: zt,
  FontFamilyFallback: Wt,
  FontFamilyPrint: Ot,
  FontLineHeightBase: tr,
  FontSize14Mobile: Yt,
  FontSize14Print: Kt,
  FontSize14Tablet: qt,
  FontSize16Mobile: Zt,
  FontSize16Print: Xt,
  FontSize16Tablet: Jt,
  FontSize19Mobile: Qt,
  FontSize19Print: tn,
  FontSize19Tablet: en,
  FontSize22Mobile: nn,
  FontSize22Print: an,
  FontSize22Tablet: rn,
  FontSize26Mobile: sn,
  FontSize26Print: ln,
  FontSize26Tablet: on,
  FontSize36Mobile: cn,
  FontSize36Print: un,
  FontSize36Tablet: dn,
  FontSize48Mobile: hn,
  FontSize48Print: mn,
  FontSize48Tablet: fn,
  FontSizeBase: er,
  FontWeightBold: Gt,
  FontWeightLight: Vt,
  FontWeightNormal: Ut,
  FormBorderRadius: Uu,
  FormBorderWidthDefault: Wu,
  FormBorderWidthError: Ou,
  FormErrorTextDefault: Hu,
  FormErrorTypographyWeight: Pu,
  FormHintTextDefault: zu,
  FormInputBackgroundDefault: Cu,
  FormInputBackgroundDisabled: Nu,
  FormInputBackgroundError: Tu,
  FormInputBackgroundFocus: ju,
  FormInputBorderDefault: Du,
  FormInputBorderDisabled: Iu,
  FormInputBorderError: Bu,
  FormInputBorderFocus: Fu,
  FormInputTextDefault: Ru,
  FormInputTextDisabled: Eu,
  FormInputTextPlaceholder: Lu,
  FormLabelTextDefault: Mu,
  FormLabelTextRequired: $u,
  FormLabelTypographyWeight: Au,
  FormSpacingCheckboxLabelPadding: xs,
  FormSpacingCheckboxSize: bs,
  FormSpacingInputMinHeight: gs,
  FormSpacingInputPadding: ps,
  GridGutter: yh,
  GridGutterHalf: _h,
  GridPageWidth: xh,
  HeadingsNhsukHeadingL: Ae,
  HeadingsNhsukHeadingM: He,
  HeadingsNhsukHeadingS: Pe,
  HeadingsNhsukHeadingXl: $e,
  HeadingsNhsukHeadingXs: ze,
  LayoutColumnActions: fh,
  LayoutColumnFull: ch,
  LayoutColumnHalf: dh,
  LayoutColumnQuarter: hh,
  LayoutColumnThird: uh,
  LayoutContainerMaxWidth: lh,
  ParagraphsBody: We,
  ParagraphsBodyLarge: Oe,
  ParagraphsBodySmall: Ue,
  ParagraphsLedeText: Ge,
  ParagraphsLedeTextSmall: Ve,
  ShadowButtonDefault: Mh,
  ShadowButtonFocus: Hh,
  ShadowButtonSecondary: $h,
  ShadowButtonWarning: Ah,
  ShadowCardDefault: Ph,
  ShadowCardHover: zh,
  SizeButtonMinHeightDesktop: ih,
  SizeButtonMinHeightMobile: oh,
  SizeFormControlLarge: Xu,
  SizeFormControlMedium: Ju,
  SizeFormControlSmall: Zu,
  SizeFormInputWidth2xl: ah,
  SizeFormInputWidth3xl: sh,
  SizeFormInputWidthLg: nh,
  SizeFormInputWidthMd: th,
  SizeFormInputWidthSm: eh,
  SizeFormInputWidthXl: rh,
  SizeFormInputWidthXs: Qu,
  SizeIconExtraLarge: qu,
  SizeIconLarge: Yu,
  SizeIconMedium: Vu,
  SizeIconNhsDefault: Ku,
  SizeIconSmall: Gu,
  Spacing0: ys,
  Spacing1: _s,
  Spacing2: vs,
  Spacing3: ks,
  Spacing4: ws,
  Spacing5: Ss,
  Spacing6: Cs,
  Spacing7: js,
  Spacing8: Ns,
  Spacing9: Ts,
  SpacingResponsive0Mobile: Ln,
  SpacingResponsive0Tablet: En,
  SpacingResponsive1Mobile: Mn,
  SpacingResponsive1Tablet: $n,
  SpacingResponsive2Mobile: An,
  SpacingResponsive2Tablet: Hn,
  SpacingResponsive3Mobile: Pn,
  SpacingResponsive3Tablet: zn,
  SpacingResponsive4Mobile: Wn,
  SpacingResponsive4Tablet: On,
  SpacingResponsive5Mobile: Un,
  SpacingResponsive5Tablet: Gn,
  SpacingResponsive6Mobile: Vn,
  SpacingResponsive6Tablet: Yn,
  SpacingResponsive7Mobile: qn,
  SpacingResponsive7Tablet: Kn,
  SpacingResponsive8Mobile: Zn,
  SpacingResponsive8Tablet: Jn,
  SpacingResponsive9Mobile: Xn,
  SpacingResponsive9Tablet: Qn,
  StateDisabledBackground: Rh,
  StateDisabledBorder: Lh,
  StateDisabledText: Eh,
  StateErrorBackground: vh,
  StateErrorBorder: kh,
  StateErrorText: wh,
  StateInfoBackground: Fh,
  StateInfoBorder: Bh,
  StateInfoText: Ih,
  StateSuccessBackground: Sh,
  StateSuccessBorder: Ch,
  StateSuccessText: jh,
  StateWarningBackground: Nh,
  StateWarningBorder: Th,
  StateWarningText: Dh,
  TransitionButtonDefault: kc,
  TransitionButtonShadow: wc,
  TransitionCardHover: Cc,
  TransitionInputFocus: Sc
}, Symbol.toStringTag, { value: "Module" })), Lf = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Ef = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: $e.fontFamily,
      fontWeight: $e.fontWeight,
      fontSize: $e.fontSize.mobile,
      lineHeight: $e.lineHeight,
      marginTop: $e.marginTop,
      marginBottom: $e.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Mf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: Ae.fontFamily,
      fontWeight: Ae.fontWeight,
      fontSize: Ae.fontSize.mobile,
      lineHeight: Ae.lineHeight,
      marginTop: Ae.marginTop,
      marginBottom: Ae.marginBottom.mobile,
      ...r
    },
    children: e
  }
), $f = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: He.fontFamily,
      fontWeight: He.fontWeight,
      fontSize: He.fontSize.mobile,
      lineHeight: He.lineHeight,
      marginTop: He.marginTop,
      marginBottom: He.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Af = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: Pe.fontFamily,
      fontWeight: Pe.fontWeight,
      fontSize: Pe.fontSize.mobile,
      lineHeight: Pe.lineHeight,
      marginTop: Pe.marginTop,
      marginBottom: Pe.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Hf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: ze.fontFamily,
      fontWeight: ze.fontWeight,
      fontSize: ze.fontSize.mobile,
      lineHeight: ze.lineHeight,
      marginTop: ze.marginTop,
      marginBottom: ze.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Pf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: We.fontFamily,
      fontWeight: We.fontWeight,
      fontSize: We.fontSize.mobile,
      lineHeight: We.lineHeight,
      marginTop: We.marginTop,
      marginBottom: We.marginBottom.mobile,
      ...r
    },
    children: e
  }
), zf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Oe.fontFamily,
      fontWeight: Oe.fontWeight,
      fontSize: Oe.fontSize.mobile,
      lineHeight: Oe.lineHeight,
      marginTop: Oe.marginTop,
      marginBottom: Oe.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Wf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ue.fontFamily,
      fontWeight: Ue.fontWeight,
      fontSize: Ue.fontSize.mobile,
      lineHeight: Ue.lineHeight,
      marginTop: Ue.marginTop,
      marginBottom: Ue.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Of = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ge.fontFamily,
      fontWeight: Ge.fontWeight,
      fontSize: Ge.fontSize.mobile,
      lineHeight: Ge.lineHeight,
      marginTop: Ge.marginTop,
      marginBottom: Ge.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Uf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ve.fontFamily,
      fontWeight: Ve.fontWeight,
      fontSize: Ve.fontSize.mobile,
      lineHeight: Ve.lineHeight,
      marginTop: Ve.marginTop,
      marginBottom: Ve.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Gf = () => _e(() => Jh, []), Vf = () => _e(() => ({
  // Border colors
  BorderColorDefault: Ha,
  BorderColorForm: Pa,
  BorderColorCard: za,
  BorderColorCardHover: Wa,
  BorderColorError: Oa,
  // Primary colors
  ColorPrimaryBlue: Ua,
  ColorPrimaryWhite: Ga,
  ColorPrimaryBlack: Va,
  ColorPrimaryGreen: Ya,
  ColorPrimaryPurple: qa,
  ColorPrimaryDarkPink: Ka,
  ColorPrimaryRed: Za,
  ColorPrimaryYellow: Ja,
  // Secondary colors
  ColorSecondaryPaleYellow: Xa,
  ColorSecondaryWarmYellow: Qa,
  ColorSecondaryOrange: es,
  ColorSecondaryAquaGreen: ts,
  ColorSecondaryPink: ns,
  // Grey scale
  ColorGrey1: rs,
  ColorGrey2: as,
  ColorGrey3: ss,
  ColorGrey4: os,
  ColorGrey5: is
}), []), Yf = () => _e(() => ({
  Spacing0: ys,
  Spacing1: _s,
  Spacing2: vs,
  Spacing3: ks,
  Spacing4: ws,
  Spacing5: Ss,
  Spacing6: Cs,
  Spacing7: js,
  Spacing8: Ns,
  Spacing9: Ts
}), []), qf = () => _e(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Yt,
    Size16: Zt,
    Size19: Qt,
    Size22: nn,
    Size26: sn,
    Size36: cn,
    Size48: hn
  },
  Tablet: {
    Size14: qt,
    Size16: Jt,
    Size19: en,
    Size22: rn,
    Size26: on,
    Size36: dn,
    Size48: fn
  },
  Print: {
    Size14: Kt,
    Size16: Xt,
    Size19: tn,
    Size22: an,
    Size26: ln,
    Size36: un,
    Size48: mn
  },
  Family: {
    Base: zt,
    Fallback: Wt,
    Print: Ot
  },
  Weight: {
    Normal: Ut,
    Bold: Gt,
    Light: Vt
  },
  Base: {
    Size: er,
    LineHeight: tr
  },
  // Backward compatibility - individual exports
  FontFamilyBase: zt,
  FontFamilyFallback: Wt,
  FontFamilyPrint: Ot,
  FontWeightNormal: Ut,
  FontWeightBold: Gt,
  FontWeightLight: Vt,
  FontSize14Mobile: Yt,
  FontSize14Tablet: qt,
  FontSize14Print: Kt,
  FontSize16Mobile: Zt,
  FontSize16Tablet: Jt,
  FontSize16Print: Xt,
  FontSize19Mobile: Qt,
  FontSize19Tablet: en,
  FontSize19Print: tn,
  FontSize22Mobile: nn,
  FontSize22Tablet: rn,
  FontSize22Print: an,
  FontSize26Mobile: sn,
  FontSize26Tablet: on,
  FontSize26Print: ln,
  FontSize36Mobile: cn,
  FontSize36Tablet: dn,
  FontSize36Print: un,
  FontSize48Mobile: hn,
  FontSize48Tablet: fn,
  FontSize48Print: mn,
  FontSizeBase: er,
  FontLineHeightBase: tr
}), []), Kf = () => _e(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Ln,
    Size1: Mn,
    Size2: An,
    Size3: Pn,
    Size4: Wn,
    Size5: Un,
    Size6: Vn,
    Size7: qn,
    Size8: Zn,
    Size9: Xn
  },
  Tablet: {
    Size0: En,
    Size1: $n,
    Size2: Hn,
    Size3: zn,
    Size4: On,
    Size5: Gn,
    Size6: Yn,
    Size7: Kn,
    Size8: Jn,
    Size9: Qn
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Ln,
  SpacingResponsive0Tablet: En,
  SpacingResponsive1Mobile: Mn,
  SpacingResponsive1Tablet: $n,
  SpacingResponsive2Mobile: An,
  SpacingResponsive2Tablet: Hn,
  SpacingResponsive3Mobile: Pn,
  SpacingResponsive3Tablet: zn,
  SpacingResponsive4Mobile: Wn,
  SpacingResponsive4Tablet: On,
  SpacingResponsive5Mobile: Un,
  SpacingResponsive5Tablet: Gn,
  SpacingResponsive6Mobile: Vn,
  SpacingResponsive6Tablet: Yn,
  SpacingResponsive7Mobile: qn,
  SpacingResponsive7Tablet: Kn,
  SpacingResponsive8Mobile: Zn,
  SpacingResponsive8Tablet: Jn,
  SpacingResponsive9Mobile: Xn,
  SpacingResponsive9Tablet: Qn
}), []), Zf = () => _e(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: ls,
  ButtonSpacingPaddingHorizontalMobile: cs,
  ButtonSpacingPaddingVerticalDesktop: ds,
  ButtonSpacingPaddingHorizontalDesktop: us,
  // Card spacing	
  CardSpacingPaddingMobile: hs,
  CardSpacingPaddingDesktop: fs,
  CardSpacingHeadingMargin: ms,
  // Form spacing
  FormSpacingInputPadding: ps,
  FormSpacingInputMinHeight: gs,
  FormSpacingCheckboxSize: bs,
  FormSpacingCheckboxLabelPadding: xs
}), []), Jf = () => _e(() => ({
  xl: $e,
  l: Ae,
  m: He,
  s: Pe,
  xs: ze
}), []), Xf = () => _e(() => ({
  body: We,
  bodyLarge: Oe,
  bodySmall: Ue,
  ledeText: Ge,
  ledeTextSmall: Ve
}), []), Qf = () => _e(() => ({
  headings: {
    xl: $e,
    l: Ae,
    m: He,
    s: Pe,
    xs: ze
  },
  paragraphs: {
    body: We,
    bodyLarge: Oe,
    bodySmall: Ue,
    ledeText: Ge,
    ledeTextSmall: Ve
  },
  fonts: {
    family: {
      base: zt,
      fallback: Wt,
      print: Ot
    },
    weight: {
      normal: Ut,
      bold: Gt,
      light: Vt
    },
    sizes: {
      mobile: {
        size14: Yt,
        size16: Zt,
        size19: Qt,
        size22: nn,
        size26: sn,
        size36: cn,
        size48: hn
      },
      tablet: {
        size14: qt,
        size16: Jt,
        size19: en,
        size22: rn,
        size26: on,
        size36: dn,
        size48: fn
      },
      print: {
        size14: Kt,
        size16: Xt,
        size19: tn,
        size22: an,
        size26: ln,
        size36: un,
        size48: mn
      }
    }
  }
}), []);
function em(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [a, o] = he.useState(t), s = he.useCallback(() => o("three-column"), []), i = he.useCallback(() => o((c) => c === "three-column" ? r : c), [r]), l = he.useCallback(() => o((c) => c === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const Ds = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, Ne = {
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
function tm(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...Ds, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${Ne.normal.eot}?#iefix") format("eot"),
       url("${t}${Ne.normal.woff2}") format("woff2"),
       url("${t}${Ne.normal.woff}") format("woff"),
       url("${t}${Ne.normal.ttf}") format("truetype");
  src: url("${t}${Ne.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${Ne.bold.eot}?#iefix") format("eot"),
       url("${t}${Ne.bold.woff2}") format("woff2"),
       url("${t}${Ne.bold.woff}") format("woff"),
       url("${t}${Ne.bold.ttf}") format("truetype");
  src: url("${t}${Ne.bold.eot}");
}`), a.join(`
`);
}
function nm(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...Ds, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${Ne.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${Ne.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${Ne.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${Ne.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const rm = '"Frutiger W01", Arial, Helvetica, sans-serif', am = "Arial, Helvetica, sans-serif";
async function sm() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  nr as Account,
  Qh as ActionLink,
  Df as AdaptiveDataGrid,
  pc as AnimationDurationFast,
  gc as AnimationDurationNormal,
  bc as AnimationDurationSlow,
  vc as AnimationEasingBounce,
  xc as AnimationEasingEaseIn,
  _c as AnimationEasingEaseInOut,
  yc as AnimationEasingEaseOut,
  Fa as AppointmentCard,
  jl as AriaDataGrid,
  In as AriaTabsDataGrid,
  Df as AriaTabsDataGridAdaptive,
  sa as BackLink,
  za as BorderColorCard,
  Wa as BorderColorCardHover,
  Ha as BorderColorDefault,
  Oa as BorderColorError,
  Pa as BorderColorForm,
  Mc as BorderRadiusLarge,
  Ec as BorderRadiusMedium,
  Rc as BorderRadiusNone,
  Lc as BorderRadiusSmall,
  Dc as BorderWidthCardBottom,
  jc as BorderWidthDefault,
  Nc as BorderWidthFormElement,
  Tc as BorderWidthFormElementError,
  Fc as BorderWidthPanel,
  Ic as BorderWidthTableCell,
  Bc as BorderWidthTableHeader,
  xl as Breadcrumb,
  gh as BreakpointDesktop,
  bh as BreakpointLargeDesktop,
  mh as BreakpointMobile,
  ph as BreakpointTablet,
  De as Button,
  uu as ButtonBorderRadius,
  du as ButtonBorderWidth,
  Xd as ButtonPrimaryBackgroundActive,
  Zd as ButtonPrimaryBackgroundDefault,
  Qd as ButtonPrimaryBackgroundDisabled,
  Jd as ButtonPrimaryBackgroundHover,
  nu as ButtonPrimaryBorderDefault,
  ru as ButtonPrimaryBorderFocus,
  eu as ButtonPrimaryTextDefault,
  tu as ButtonPrimaryTextDisabled,
  iu as ButtonSecondaryBackgroundActive,
  au as ButtonSecondaryBackgroundDefault,
  ou as ButtonSecondaryBackgroundHover,
  su as ButtonSecondaryBackgroundSolid,
  cu as ButtonSecondaryBorderDefault,
  lu as ButtonSecondaryTextDefault,
  hu as ButtonShadowSize,
  us as ButtonSpacingPaddingHorizontalDesktop,
  cs as ButtonSpacingPaddingHorizontalMobile,
  ds as ButtonSpacingPaddingVerticalDesktop,
  ls as ButtonSpacingPaddingVerticalMobile,
  fu as ButtonTypographyWeight,
  Na as Card,
  mu as CardBackgroundDefault,
  bu as CardBorderBottom,
  pu as CardBorderDefault,
  gu as CardBorderHover,
  ku as CardBorderWidthBottom,
  vu as CardBorderWidthDefault,
  bf as CardGroup,
  xf as CardGroupItem,
  wu as CardShadowDefault,
  Su as CardShadowHover,
  ms as CardSpacingHeadingMargin,
  fs as CardSpacingPaddingDesktop,
  hs as CardSpacingPaddingMobile,
  yu as CardTextDescription,
  xu as CardTextHeading,
  _u as CardTextLink,
  yf as CareCard,
  ef as CharacterCount,
  Ys as Checkbox,
  qs as Checkboxes,
  Yc as ColorBorderDefault,
  qc as ColorBorderSecondary,
  vd as ColorButtonLoginActive,
  yd as ColorButtonLoginBackground,
  _d as ColorButtonLoginHover,
  kd as ColorButtonLoginShadow,
  td as ColorButtonPrimaryActive,
  Xc as ColorButtonPrimaryBackground,
  ed as ColorButtonPrimaryHover,
  nd as ColorButtonPrimaryShadow,
  Qc as ColorButtonPrimaryText,
  fd as ColorButtonReverseActive,
  dd as ColorButtonReverseBackground,
  hd as ColorButtonReverseHover,
  md as ColorButtonReverseShadow,
  ud as ColorButtonReverseText,
  ld as ColorButtonSecondaryActive,
  rd as ColorButtonSecondaryBackground,
  ad as ColorButtonSecondaryBackgroundSolid,
  sd as ColorButtonSecondaryBorder,
  id as ColorButtonSecondaryHover,
  cd as ColorButtonSecondaryShadow,
  od as ColorButtonSecondaryText,
  bd as ColorButtonWarningActive,
  pd as ColorButtonWarningBackground,
  gd as ColorButtonWarningHover,
  xd as ColorButtonWarningShadow,
  Kc as ColorError,
  Gc as ColorFocusBackground,
  Vc as ColorFocusText,
  Jc as ColorFormBackground,
  Zc as ColorFormBorder,
  rs as ColorGrey1,
  as as ColorGrey2,
  ss as ColorGrey3,
  os as ColorGrey4,
  is as ColorGrey5,
  Oc as ColorLinkActive,
  zc as ColorLinkDefault,
  Wc as ColorLinkHover,
  Uc as ColorLinkVisited,
  Va as ColorPrimaryBlack,
  Ua as ColorPrimaryBlue,
  Ka as ColorPrimaryDarkPink,
  Ya as ColorPrimaryGreen,
  qa as ColorPrimaryPurple,
  Za as ColorPrimaryRed,
  Ga as ColorPrimaryWhite,
  Ja as ColorPrimaryYellow,
  ts as ColorSecondaryAquaGreen,
  es as ColorSecondaryOrange,
  Xa as ColorSecondaryPaleYellow,
  ns as ColorSecondaryPink,
  Qa as ColorSecondaryWarmYellow,
  $c as ColorTextPrimary,
  Pc as ColorTextPrint,
  Hc as ColorTextReverse,
  Ac as ColorTextSecondary,
  or as Column,
  Gd as ComponentBlur,
  $d as ComponentBreadcrumbChevronMarginLeft,
  Ad as ComponentBreadcrumbChevronMarginRight,
  Pd as ComponentBreadcrumbPaddingTopDesktop,
  Hd as ComponentBreadcrumbPaddingTopMobile,
  jd as ComponentButtonPaddingDesktopHorizontal,
  Cd as ComponentButtonPaddingDesktopVertical,
  Sd as ComponentButtonPaddingMobileHorizontal,
  wd as ComponentButtonPaddingMobileVertical,
  Nd as ComponentButtonShadowSize,
  Ld as ComponentCardHeadingMargin,
  Rd as ComponentCardPaddingDesktop,
  Id as ComponentCardPaddingMobile,
  Yd as ComponentDetails,
  qd as ComponentExpander,
  Bd as ComponentFormCheckboxLabelPadding,
  Fd as ComponentFormCheckboxSize,
  Td as ComponentFormInputMinHeight,
  Dd as ComponentFormInputPadding,
  Vd as ComponentLink,
  Kd as ComponentPagination,
  Md as ComponentPanelPaddingDesktop,
  Ed as ComponentPanelPaddingMobile,
  Ud as ComponentSpread,
  Wd as ComponentSummaryListCellPaddingHorizontal,
  zd as ComponentSummaryListCellPaddingVertical,
  Od as ComponentSummaryListRowMargin,
  la as Container,
  gf as ContentsList,
  Ds as DEFAULT_FONT_CONFIG,
  jf as DashboardSummaryGrid,
  cf as DateInput,
  _l as Details,
  vl as DoDontList,
  Zh as ElevationHigh,
  qh as ElevationLow,
  Kh as ElevationMedium,
  Yh as ElevationNone,
  wr as ErrorMessage,
  lf as ErrorSummary,
  kl as Expander,
  Ne as FRUTIGER_FONT_FILES,
  sr as Fieldset,
  Oh as FocusOutlineOffset,
  Uh as FocusOutlineStyle,
  Wh as FocusOutlineWidth,
  Vh as FocusShadowButton,
  Gh as FocusShadowInput,
  zt as FontFamilyBase,
  Wt as FontFamilyFallback,
  Ot as FontFamilyPrint,
  tr as FontLineHeightBase,
  Yt as FontSize14Mobile,
  Kt as FontSize14Print,
  qt as FontSize14Tablet,
  Zt as FontSize16Mobile,
  Xt as FontSize16Print,
  Jt as FontSize16Tablet,
  Qt as FontSize19Mobile,
  tn as FontSize19Print,
  en as FontSize19Tablet,
  nn as FontSize22Mobile,
  an as FontSize22Print,
  rn as FontSize22Tablet,
  sn as FontSize26Mobile,
  ln as FontSize26Print,
  on as FontSize26Tablet,
  cn as FontSize36Mobile,
  un as FontSize36Print,
  dn as FontSize36Tablet,
  hn as FontSize48Mobile,
  mn as FontSize48Print,
  fn as FontSize48Tablet,
  er as FontSizeBase,
  Gt as FontWeightBold,
  Vt as FontWeightLight,
  Ut as FontWeightNormal,
  ma as Footer,
  Uu as FormBorderRadius,
  Wu as FormBorderWidthDefault,
  Ou as FormBorderWidthError,
  Hu as FormErrorTextDefault,
  Pu as FormErrorTypographyWeight,
  zu as FormHintTextDefault,
  Cu as FormInputBackgroundDefault,
  Nu as FormInputBackgroundDisabled,
  Tu as FormInputBackgroundError,
  ju as FormInputBackgroundFocus,
  Du as FormInputBorderDefault,
  Iu as FormInputBorderDisabled,
  Bu as FormInputBorderError,
  Fu as FormInputBorderFocus,
  Ru as FormInputTextDefault,
  Eu as FormInputTextDisabled,
  Lu as FormInputTextPlaceholder,
  Mu as FormLabelTextDefault,
  $u as FormLabelTextRequired,
  Au as FormLabelTypographyWeight,
  xs as FormSpacingCheckboxLabelPadding,
  bs as FormSpacingCheckboxSize,
  gs as FormSpacingInputMinHeight,
  ps as FormSpacingInputPadding,
  mf as GanttChart,
  Xs as Grid,
  yh as GridGutter,
  _h as GridGutterHalf,
  xh as GridPageWidth,
  fa as Header,
  hf as HeaderSSR,
  ha as HeaderSearch,
  ff as HeaderStatic,
  Ze as Heading,
  Ae as HeadingsNhsukHeadingL,
  He as HeadingsNhsukHeadingM,
  Pe as HeadingsNhsukHeadingS,
  $e as HeadingsNhsukHeadingXl,
  ze as HeadingsNhsukHeadingXs,
  so as Hero,
  oa as Hint,
  Cf as Images,
  rr as Input,
  _f as InsetText,
  ar as Label,
  fh as LayoutColumnActions,
  ch as LayoutColumnFull,
  dh as LayoutColumnHalf,
  hh as LayoutColumnQuarter,
  uh as LayoutColumnThird,
  lh as LayoutContainerMaxWidth,
  to as List,
  ca as MainWrapper,
  Ba as MedicationCard,
  Pf as NHSBodyText,
  zf as NHSBodyTextLarge,
  Wf as NHSBodyTextSmall,
  Ef as NHSHeading1,
  Mf as NHSHeading2,
  $f as NHSHeading3,
  Af as NHSHeading4,
  Hf as NHSHeading5,
  Of as NHSLedeText,
  Uf as NHSLedeTextSmall,
  uf as NHSThemeProvider,
  am as NHS_FALLBACK_FONT_STACK,
  rm as NHS_FONT_STACK,
  mc as NavigationSplitView,
  Bf as PageTemplate,
  pf as Pagination,
  yl as Panel,
  We as ParagraphsBody,
  Oe as ParagraphsBodyLarge,
  Ue as ParagraphsBodySmall,
  Ge as ParagraphsLedeText,
  Ve as ParagraphsLedeTextSmall,
  Da as PatientCard,
  tf as Radios,
  Df as ResponsiveDataGrid,
  Ff as ResponsiveDataGridDemo,
  Rt as Row,
  ia as Select,
  Zs as SelectOption,
  Mh as ShadowButtonDefault,
  Hh as ShadowButtonFocus,
  $h as ShadowButtonSecondary,
  Ah as ShadowButtonWarning,
  Ph as ShadowCardDefault,
  zh as ShadowCardHover,
  ih as SizeButtonMinHeightDesktop,
  oh as SizeButtonMinHeightMobile,
  Xu as SizeFormControlLarge,
  Ju as SizeFormControlMedium,
  Zu as SizeFormControlSmall,
  ah as SizeFormInputWidth2xl,
  sh as SizeFormInputWidth3xl,
  nh as SizeFormInputWidthLg,
  th as SizeFormInputWidthMd,
  eh as SizeFormInputWidthSm,
  rh as SizeFormInputWidthXl,
  Qu as SizeFormInputWidthXs,
  qu as SizeIconExtraLarge,
  Yu as SizeIconLarge,
  Vu as SizeIconMedium,
  Ku as SizeIconNhsDefault,
  Gu as SizeIconSmall,
  ja as SkipLink,
  Nf as SortStatusControl,
  ys as Spacing0,
  _s as Spacing1,
  vs as Spacing2,
  ks as Spacing3,
  ws as Spacing4,
  Ss as Spacing5,
  Cs as Spacing6,
  js as Spacing7,
  Ns as Spacing8,
  Ts as Spacing9,
  Ln as SpacingResponsive0Mobile,
  En as SpacingResponsive0Tablet,
  Mn as SpacingResponsive1Mobile,
  $n as SpacingResponsive1Tablet,
  An as SpacingResponsive2Mobile,
  Hn as SpacingResponsive2Tablet,
  Pn as SpacingResponsive3Mobile,
  zn as SpacingResponsive3Tablet,
  Wn as SpacingResponsive4Mobile,
  On as SpacingResponsive4Tablet,
  Un as SpacingResponsive5Mobile,
  Gn as SpacingResponsive5Tablet,
  Vn as SpacingResponsive6Mobile,
  Yn as SpacingResponsive6Tablet,
  qn as SpacingResponsive7Mobile,
  Kn as SpacingResponsive7Tablet,
  Zn as SpacingResponsive8Mobile,
  Jn as SpacingResponsive8Tablet,
  Xn as SpacingResponsive9Mobile,
  Qn as SpacingResponsive9Tablet,
  nf as SpacingUtilities,
  Rh as StateDisabledBackground,
  Lh as StateDisabledBorder,
  Eh as StateDisabledText,
  vh as StateErrorBackground,
  kh as StateErrorBorder,
  wh as StateErrorText,
  Fh as StateInfoBackground,
  Bh as StateInfoBorder,
  Ih as StateInfoText,
  Sh as StateSuccessBackground,
  Ch as StateSuccessBorder,
  jh as StateSuccessText,
  Nh as StateWarningBackground,
  Th as StateWarningBorder,
  Dh as StateWarningText,
  Cl as SummaryCard,
  vf as SummaryList,
  kf as Table,
  wf as Tabs,
  Ke as Tag,
  wl as TaskList,
  Ks as Textarea,
  If as TransactionalPageTemplate,
  kc as TransitionButtonDefault,
  wc as TransitionButtonShadow,
  Cc as TransitionCardHover,
  Sc as TransitionInputFocus,
  Ia as VitalsCard,
  of as WIDTH_FRACTIONS,
  Sf as WarningCallout,
  $a as WidthContainer,
  af as WidthUtilities,
  sm as checkFrutigerLoaded,
  gr as createGenericTabsConfig,
  Tf as createTCHTabsConfig,
  tm as generateFrutigerFontFace,
  Lf as getResponsiveStyles,
  rf as getSpacingClass,
  sf as getWidthClass,
  nm as preloadFrutigerFonts,
  $l as tchDataConfig,
  Vf as useColors,
  Zf as useComponentSpacing,
  Jf as useNHSHeadings,
  Xf as useNHSParagraphs,
  df as useNHSTheme,
  Qf as useNHSTypographySystem,
  em as useNavigationSplitDrill,
  uc as useNavigationSplitUrlSync,
  Aa as useNhsFdpBreakpoints,
  Kf as useResponsiveSpacing,
  Rf as useResponsiveValue,
  Yf as useSpacing,
  Gf as useTokens,
  qf as useTypography
};
//# sourceMappingURL=index.esm.js.map
