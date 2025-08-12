import * as qa from "react";
import xe, { useState as ne, useEffect as le, useCallback as Z, createElement as Br, useRef as se, useMemo as oe, createContext as Ka, useContext as Za, forwardRef as qe, useImperativeHandle as Fr, useReducer as Rr } from "react";
function Ja(e) {
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
var Jn;
function Xa() {
  if (Jn) return Je;
  Jn = 1;
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
var Xn;
function Qa() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === p ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case g:
          return "Fragment";
        case w:
          return "Profiler";
        case _:
          return "StrictMode";
        case L:
          return "Suspense";
        case y:
          return "SuspenseList";
        case b:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case j:
            return "Portal";
          case N:
            return (T.displayName || "Context") + ".Provider";
          case C:
            return (T._context.displayName || "Context") + ".Consumer";
          case v:
            var O = T.render;
            return T = T.displayName, T || (T = O.displayName || O.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case M:
            return O = T.displayName || null, O !== null ? O : e(T.type) || "Memo";
          case F:
            O = T._payload, T = T._init;
            try {
              return e(T(O));
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
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var H = O.error, Y = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return H.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Y
        ), t(T);
      }
    }
    function a(T) {
      if (T === g) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === F)
        return "<...>";
      try {
        var O = e(T);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var T = h.A;
      return T === null ? null : T.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(T) {
      if (R.call(T, "key")) {
        var O = Object.getOwnPropertyDescriptor(T, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function l(T, O) {
      function H() {
        E || (E = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: H,
        configurable: !0
      });
    }
    function c() {
      var T = e(this.type);
      return W[T] || (W[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function u(T, O, H, Y, P, S, k, I) {
      return H = S.ref, T = {
        $$typeof: x,
        type: T,
        key: O,
        props: S,
        _owner: P
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(T, "ref", {
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
        value: k
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function d(T, O, H, Y, P, S, k, I) {
      var G = O.children;
      if (G !== void 0)
        if (Y)
          if (V(G)) {
            for (Y = 0; Y < G.length; Y++)
              f(G[Y]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(G);
      if (R.call(O, "key")) {
        G = e(T);
        var B = Object.keys(O).filter(function(A) {
          return A !== "key";
        });
        Y = 0 < B.length ? "{key: someKey, " + B.join(": ..., ") + ": ...}" : "{key: someKey}", J[G + Y] || (B = 0 < B.length ? "{" + B.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Y,
          G,
          B,
          G
        ), J[G + Y] = !0);
      }
      if (G = null, H !== void 0 && (r(H), G = "" + H), i(O) && (r(O.key), G = "" + O.key), "key" in O) {
        H = {};
        for (var $ in O)
          $ !== "key" && (H[$] = O[$]);
      } else H = O;
      return G && l(
        H,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), u(
        T,
        G,
        S,
        P,
        s(),
        H,
        k,
        I
      );
    }
    function f(T) {
      typeof T == "object" && T !== null && T.$$typeof === x && T._store && (T._store.validated = 1);
    }
    var m = xe, x = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), N = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), p = Symbol.for("react.client.reference"), h = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = Object.prototype.hasOwnProperty, V = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(T) {
        return T();
      }
    };
    var E, W = {}, X = m.react_stack_bottom_frame.bind(
      m,
      o
    )(), Q = K(a(o)), J = {};
    Xe.Fragment = g, Xe.jsx = function(T, O, H, Y, P) {
      var S = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        T,
        O,
        H,
        !1,
        Y,
        P,
        S ? Error("react-stack-top-frame") : X,
        S ? K(a(T)) : Q
      );
    }, Xe.jsxs = function(T, O, H, Y, P) {
      var S = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        T,
        O,
        H,
        !0,
        Y,
        P,
        S ? Error("react-stack-top-frame") : X,
        S ? K(a(T)) : Q
      );
    };
  }()), Xe;
}
var Qn;
function es() {
  return Qn || (Qn = 1, process.env.NODE_ENV === "production" ? it.exports = Xa() : it.exports = Qa()), it.exports;
}
var n = es(), Kt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var er;
function ts() {
  return er || (er = 1, function(e) {
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
  }(Kt)), Kt.exports;
}
var ns = ts();
const z = /* @__PURE__ */ Ja(ns), Xu = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...s
}) => {
  const o = z(
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
}, Mn = ({
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
      className: z(
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
          className: z("nhsuk-account__item", o.className),
          children: s(o)
        },
        i
      )) })
    }
  );
}, { forwardRef: rs, useCallback: $e, useState: Zt } = qa;
function as(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: s = "default",
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [u, d] = Zt(!1), [f, m] = Zt(!1), [x, j] = Zt(!1), g = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    s !== "default" ? `nhs-aria-button--${s}` : "",
    o ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), _ = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", w = {
    ...u && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...x && { "data-focused": "true" },
    ..._ && { "data-disabled": "true" }
  }, C = $e(() => !_ && d(!0), [_]), N = $e(() => d(!1), []), v = $e(() => !_ && m(!0), [_]), L = $e(() => {
    m(!1), d(!1);
  }, []), y = $e(() => j(!0), []), M = $e(() => j(!1), []), F = $e((h) => {
    h.key === " " && ("href" in c || h.currentTarget.getAttribute("role") === "button") && (h.preventDefault(), h.currentTarget.click());
  }, [c]), b = $e((h) => {
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
        ...w,
        ...l && { "data-prevent-double-click": "true" },
        onKeyDown: (R) => {
          h.onKeyDown?.(R), F(R);
        },
        onClick: (R) => {
          h.onClick?.(R), b(R);
        },
        onMouseDown: (R) => {
          h.onMouseDown?.(R), C();
        },
        onMouseUp: (R) => {
          h.onMouseUp?.(R), N();
        },
        onMouseEnter: (R) => {
          h.onMouseEnter?.(R), v();
        },
        onMouseLeave: (R) => {
          h.onMouseLeave?.(R), L();
        },
        onFocus: (R) => {
          h.onFocus?.(R), y();
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
      ...w,
      ...l && { "data-prevent-double-click": "true" },
      ...p.disabled && { "aria-disabled": "true" },
      onKeyDown: (h) => {
        p.onKeyDown?.(h), F(h);
      },
      onClick: (h) => {
        p.onClick?.(h), b(h);
      },
      onMouseDown: (h) => {
        p.onMouseDown?.(h), C();
      },
      onMouseUp: (h) => {
        p.onMouseUp?.(h), N();
      },
      onMouseEnter: (h) => {
        p.onMouseEnter?.(h), v();
      },
      onMouseLeave: (h) => {
        p.onMouseLeave?.(h), L();
      },
      onFocus: (h) => {
        p.onFocus?.(h), y();
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
const Ln = rs(as);
Ln.displayName = "Button";
const ss = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = z(
    "nhsuk-back-link",
    a
  ), c = z(
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
}, In = ({
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
  const d = z(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": s,
      "nhsuk-tag--closable": o,
      "nhsuk-tag--disabled": l
    },
    c
  ), f = (m) => {
    m.preventDefault(), m.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: d, ...u, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    o && /* @__PURE__ */ n.jsx(
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
}, os = ({
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
  onBlur: f,
  onFocus: m,
  attributes: x,
  ...j
}) => {
  const [g, _] = ne(a), w = r !== void 0, C = w ? r : g;
  le(() => {
    w || _(a);
  }, [a, w]);
  const N = (F) => {
    const b = F.target.checked;
    w || _(b), d?.(b, F);
  }, v = i ? `${e}-hint` : void 0, L = l ? `${e}-error` : void 0, y = [v, L].filter(Boolean).join(" ") || void 0, M = z(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ n.jsx("div", { className: M, ...j, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: C,
        disabled: s,
        onChange: N,
        onBlur: f,
        onFocus: m,
        "aria-describedby": y,
        ...x
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: u }),
    i && /* @__PURE__ */ n.jsx("div", { id: v, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: L, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
os.displayName = "Checkbox";
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
  className: f,
  width: m = "full",
  inputMode: x,
  autoComplete: j,
  maxLength: g,
  minLength: _,
  pattern: w,
  step: C,
  min: N,
  max: v,
  showValueLabels: L = !1,
  showCurrentValue: y = !1,
  valueLabels: M,
  onChange: F,
  onBlur: b,
  onFocus: p,
  onKeyDown: h,
  ...R
}) => {
  const [V, K] = ne(a || s || (r === "range" ? N || "0" : ""));
  le(() => {
    a !== void 0 && K(a);
  }, [a]);
  const E = (J) => {
    K(J.target.value), F?.(J);
  }, W = r === "range", X = z(
    "nhsuk-input",
    {
      "nhsuk-input--error": u,
      "nhsuk-input--range": W,
      [`nhsuk-input--width-${m}`]: m !== "full" && !W
    },
    f
  ), Q = W ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    L && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: M?.min || N || "0" }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: X,
          id: e,
          name: t,
          type: r,
          value: V,
          defaultValue: s,
          placeholder: o,
          disabled: i,
          readOnly: l,
          required: c,
          "aria-describedby": d,
          inputMode: x,
          autoComplete: j,
          maxLength: g,
          minLength: _,
          pattern: w,
          step: C,
          min: N,
          max: v,
          onChange: E,
          onBlur: b,
          onFocus: p,
          onKeyDown: h,
          ...R
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: M?.max || v || "100" })
    ] }),
    !L && /* @__PURE__ */ n.jsx(
      "input",
      {
        className: X,
        id: e,
        name: t,
        type: r,
        value: V,
        defaultValue: s,
        placeholder: o,
        disabled: i,
        readOnly: l,
        required: c,
        "aria-describedby": d,
        inputMode: x,
        autoComplete: j,
        maxLength: g,
        minLength: _,
        pattern: w,
        step: C,
        min: N,
        max: v,
        onChange: E,
        onBlur: b,
        onFocus: p,
        onKeyDown: h,
        ...R
      }
    ),
    y && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      M?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: V })
    ] }) })
  ] }) : null;
  return W ? Q : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: X,
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
      inputMode: x,
      autoComplete: j,
      maxLength: g,
      minLength: _,
      pattern: w,
      step: C,
      min: N,
      max: v,
      onChange: F,
      onBlur: b,
      onFocus: p,
      onKeyDown: h,
      ...R
    }
  );
}, En = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = z(
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
  const o = z(
    "nhsuk-fieldset",
    r
  ), i = z(
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
}, is = ({
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
  fieldsetAttributes: f,
  attributes: m,
  ...x
}) => {
  const [j, g] = ne(
    e.filter((F) => F.checked).map((F) => F.value)
  ), _ = r || t, w = i ? `${_}-hint` : void 0, C = l ? `${_}-error` : void 0, N = [w, C].filter(Boolean).join(" ") || void 0, v = (F, b) => {
    let p;
    b ? p = [...j, F] : p = j.filter((h) => h !== F), g(p), d?.(p);
  }, L = () => e.map((F, b) => {
    const p = `${_}-${b + 1}`, h = `${p}-conditional`, R = j.includes(F.value), V = F.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: p,
          name: t,
          type: "checkbox",
          value: F.value,
          checked: R,
          disabled: V,
          onChange: (K) => v(F.value, K.target.checked),
          "aria-describedby": F.hint ? `${p}-hint` : N,
          ...F.conditional && {
            "aria-controls": h,
            "aria-expanded": R ? "true" : "false"
          },
          ...F.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: p, children: F.text }),
      F.hint && /* @__PURE__ */ n.jsx("div", { id: `${p}-hint`, className: "nhsuk-checkboxes__hint", children: F.hint }),
      F.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: z("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !R
          }),
          id: h,
          children: typeof F.conditional == "object" && F.conditional !== null && "label" in F.conditional && "id" in F.conditional && "name" in F.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            F.conditional.label && /* @__PURE__ */ n.jsx(En, { htmlFor: F.conditional.id, children: F.conditional.label }),
            /* @__PURE__ */ n.jsx($n, { ...F.conditional })
          ] }) : F.conditional
        }
      )
    ] }, F.value);
  }), y = z(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": u
    },
    c
  ), M = z("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: M, ...m, ...x, children: /* @__PURE__ */ n.jsxs(
    Hn,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: N,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: w, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: C, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: y, children: L() })
      ]
    }
  ) });
};
is.displayName = "Checkboxes";
const ls = ({
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
  rows: f = 5,
  cols: m,
  maxLength: x,
  minLength: j,
  wrap: g = "soft",
  resize: _ = "vertical",
  autoComplete: w,
  spellCheck: C,
  onChange: N,
  onBlur: v,
  onFocus: L,
  onKeyDown: y,
  ...M
}) => {
  const F = z(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": c,
      [`nhsuk-textarea--resize-${_}`]: _ !== "vertical"
    },
    d
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: F,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": u,
      rows: f,
      cols: m,
      maxLength: x,
      minLength: j,
      wrap: g,
      autoComplete: w,
      spellCheck: C,
      onChange: N,
      onBlur: v,
      onFocus: L,
      onKeyDown: y,
      ...M
    }
  );
}, Mr = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const s = z("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: s, id: e, ...a, children: r });
}, Qu = ({
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
  ...f
}) => {
  const [m, x] = ne(o), [j, g] = ne(0), [_, w] = ne(!1), [C, N] = ne(!1), v = Z((p) => r ? p.trim() === "" ? 0 : p.trim().split(/\s+/).length : p.length, [r]);
  le(() => {
    const p = v(m), h = t || r || 0, R = h - p, V = Math.floor(h * (a / 100));
    g(R), w(p > h), N(p >= V || p > h), u && u(p, R);
  }, [m, t, r, a, v, u]);
  const L = (p) => {
    const h = p.target.value;
    x(h), d && d(p);
  }, y = () => {
    const p = t || r || 0, h = r ? "word" : "character", R = r ? "words" : "characters";
    if (!C)
      return `You can enter up to ${p} ${p === 1 ? h : R}`;
    if (_) {
      const V = Math.abs(j);
      return `You have ${V} ${V === 1 ? h : R} too many`;
    } else
      return `You have ${j} ${j === 1 ? h : R} remaining`;
  }, M = z(
    "nhsuk-character-count",
    l
  ), F = z(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !C,
      "nhsuk-error-message": _
    },
    c?.classes
  ), b = z(
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
          ls,
          {
            id: e,
            name: s,
            value: m,
            rows: i,
            className: b,
            onChange: L,
            "aria-describedby": `${e}-info`,
            ...f
          }
        ),
        /* @__PURE__ */ n.jsx(
          Mr,
          {
            id: `${e}-info`,
            className: F,
            children: y()
          }
        )
      ]
    }
  );
}, cs = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  className: a,
  children: s,
  ...o
}) => {
  const i = z(
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
}, ds = ({
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
  autoComplete: f,
  options: m,
  children: x,
  onChange: j,
  onBlur: g,
  onFocus: _,
  ...w
}) => {
  const C = z(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    c
  ), N = () => m ? m.map((v, L) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: v.value,
      disabled: v.disabled,
      selected: v.selected,
      children: v.text
    },
    `${v.value}-${L}`
  )) : null;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: C,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      disabled: s,
      required: o,
      "aria-describedby": l,
      multiple: u,
      size: d,
      autoComplete: f,
      onChange: j,
      onBlur: g,
      onFocus: _,
      ...w,
      children: x || N()
    }
  );
}, us = ds;
us.Option = cs;
const eh = ({
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
  onFocus: f,
  ...m
}) => {
  const [x, j] = ne(t || r || ""), g = z(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    o
  ), _ = (w) => {
    const C = w.target.value;
    j(C), u && u(w);
  };
  return /* @__PURE__ */ n.jsx(Hn, { children: /* @__PURE__ */ n.jsx("div", { className: g, ...m, children: c.map((w, C) => {
    const N = `${e}-${C}`, v = w.conditional ? `${N}-conditional` : void 0, L = x === w.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: N,
          name: e,
          type: "radio",
          value: w.value,
          disabled: w.disabled,
          checked: L,
          "aria-describedby": s,
          onChange: _,
          onBlur: d,
          onFocus: f
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: N, children: w.text }),
      w.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: w.hint }),
      w.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: z("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !L
          }),
          id: v,
          children: typeof w.conditional == "object" && w.conditional !== null && "label" in w.conditional && "id" in w.conditional && "name" in w.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            w.conditional.label && /* @__PURE__ */ n.jsx(En, { htmlFor: w.conditional.id, children: w.conditional.label }),
            /* @__PURE__ */ n.jsx($n, { ...w.conditional })
          ] }) : w.conditional
        }
      )
    ] }, w.value);
  }) }) });
}, Lr = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...s
}) => {
  const o = z(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), i = a ? { maxWidth: a } : void 0;
  return /* @__PURE__ */ n.jsx("div", { className: o, style: i, ...s, children: e });
}, ht = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = z("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: e });
}, An = ({
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
  const u = z(
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
}, hs = ({
  children: e,
  className: t,
  ...r
}) => {
  const s = xe.Children.toArray(e)[0], o = xe.isValidElement(s) && (s.type === ht || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Lr, { className: t, ...r, children: o ? e : /* @__PURE__ */ n.jsx(ht, { children: e }) });
}, fs = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: s,
  role: o,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), u = z(
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
}, ms = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = z("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, ps = fs;
ps.Item = ms;
const th = ({
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
}, nh = {
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
}, rh = ({
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
}, ah = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, sh = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Ir = ({
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
}, Me = ({
  level: e,
  className: t,
  text: r,
  html: a,
  children: s,
  size: o,
  marginBottom: i,
  ...l
}) => {
  const u = e ?? ((j) => {
    switch (j) {
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
  })(o), d = z(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${o}`]: o
    },
    t
  ), f = s || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), m = `h${u}`, x = i ? { ...l.style, marginBottom: i } : l.style;
  return Br(
    m,
    { className: d, ...l, style: x },
    f
  );
}, tr = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...s
}) => {
  const o = z("nhsuk-error-message", t);
  return /* @__PURE__ */ n.jsxs("span", { className: o, id: e, ...s, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      r,
      " "
    ] }),
    a
  ] });
}, oh = ({
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
  le(() => {
    c.current && c.current.focus();
  }, []);
  const u = z(
    "nhsuk-error-summary",
    o
  ), d = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, m = (x) => {
    const j = x.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } }) : x.text;
    return x.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: x.href,
        ...x.attributes,
        children: j
      }
    ) : j;
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
          !i && (r || a) && /* @__PURE__ */ n.jsx("p", { children: f() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((x, j) => /* @__PURE__ */ n.jsx("li", { children: m(x) }, j)) })
        ] })
      ]
    }
  );
}, ih = ({
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
  const [d, f] = ne(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [m, x] = ne({}), j = (E) => E % 4 === 0 && E % 100 !== 0 || E % 400 === 0, g = (E, W) => {
    const X = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return E === 2 && j(W) ? 29 : X[E - 1];
  }, _ = (E, W, X) => {
    if (!E) return;
    if (!/^\d+$/.test(E)) return "Day must be a number";
    const Q = parseInt(E, 10);
    if (Q < 1 || Q > 31) return "Day must be between 1 and 31";
    if (W && X) {
      const J = parseInt(W, 10), T = parseInt(X, 10);
      if (!isNaN(J) && !isNaN(T) && J >= 1 && J <= 12) {
        const O = g(J, T);
        if (Q > O)
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
          ][J - 1]} ${T} only has ${O} days`;
      }
    }
  }, w = (E) => {
    if (!E) return;
    if (!/^\d+$/.test(E)) return "Month must be a number";
    const W = parseInt(E, 10);
    if (W < 1 || W > 12) return "Month must be between 1 and 12";
  }, C = (E) => {
    if (!E) return;
    if (!/^\d+$/.test(E)) return "Year must be a number";
    const W = parseInt(E, 10), X = (/* @__PURE__ */ new Date()).getFullYear();
    if (W < 1900 || W > X + 10)
      return `Year must be between 1900 and ${X + 10}`;
  }, N = (E, W, X) => {
    if (!E || !W || !X) return;
    const Q = parseInt(E, 10), J = parseInt(W, 10), T = parseInt(X, 10);
    if (isNaN(Q) || isNaN(J) || isNaN(T) || J < 1 || J > 12 || T < 1900) return;
    const O = g(J, T);
    Q < 1 || Q > O;
  }, v = Z((E, W) => {
    const X = {
      ...d,
      [E]: W
    };
    f(X), c && c(X);
  }, [d, c]), L = Z((E) => {
    const W = d[E];
    let X;
    if (E === "day")
      X = _(W, d.month, d.year);
    else if (E === "month") {
      if (X = w(W), !X && d.day) {
        const Q = _(d.day, W, d.year);
        x((J) => ({
          ...J,
          day: Q
        }));
      }
    } else if (E === "year" && (X = C(W), !X && d.day && d.month)) {
      const Q = _(d.day, d.month, W);
      x((J) => ({
        ...J,
        day: Q
      }));
    }
    if (x((Q) => ({
      ...Q,
      [E]: X
    })), d.day && d.month && d.year) {
      const Q = N(
        E === "day" ? W : d.day,
        E === "month" ? W : d.month,
        E === "year" ? W : d.year
      );
      Q && x((J) => ({
        ...J,
        day: Q
      }));
    }
  }, [d, _, w, C, N]), y = oe(() => [
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
  ], []), M = r || y;
  let F = o?.describedBy || "";
  const b = i ? `${e}-hint` : "", p = l ? `${e}-error` : "";
  b && (F = F ? `${F} ${b}` : b), p && (F = F ? `${F} ${p}` : p);
  const h = Object.values(m).some((E) => E), R = z(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || h
    }
  ), V = z(
    "nhsuk-date-input",
    t
  ), K = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Mr,
      {
        id: b,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      tr,
      {
        id: p,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([E, W]) => W ? /* @__PURE__ */ n.jsxs(
        tr,
        {
          id: `${e}-${E}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            W
          ]
        },
        `${E}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: V, id: e, "data-testid": "date-input", ...u, children: M.map((E) => {
      const W = E.id || `${e}-${E.name}`, X = a ? `${a}[${E.name}]` : E.name, Q = E.label || E.name.charAt(0).toUpperCase() + E.name.slice(1), J = m[E.name], T = d[E.name] || "";
      let O = F;
      if (J) {
        const H = `${e}-${E.name}-error`;
        O = O ? `${O} ${H}` : H;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          En,
          {
            htmlFor: W,
            className: "nhsuk-date-input__label",
            children: Q
          }
        ),
        /* @__PURE__ */ n.jsx(
          $n,
          {
            id: W,
            name: X,
            value: T,
            className: z("nhsuk-date-input__input", E.classes, {
              "nhsuk-input--error": J
            }),
            inputMode: E.inputmode,
            autoComplete: E.autocomplete,
            pattern: E.pattern,
            "aria-describedby": O || void 0,
            hasError: !!J,
            onChange: (H) => v(E.name, H.target.value),
            onBlur: () => L(E.name)
          }
        )
      ] }, E.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: R, children: o ? /* @__PURE__ */ n.jsx(
    Hn,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: F || void 0,
      children: K()
    }
  ) : K() });
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
}, Er = Ka($r), gs = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...$r, ...t };
  return /* @__PURE__ */ n.jsx(Er.Provider, { value: r, children: e });
}, lh = () => {
  const e = Za(Er);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function bs() {
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
function xs() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = bs(), document.head.appendChild(e);
}
const ch = ({ children: e, theme: t }) => (le(() => {
  xs();
}, []), /* @__PURE__ */ n.jsx(gs, { theme: t, children: e })), Hr = ({
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
  isLoading: f = !1,
  showResults: m = !1,
  results: x = [],
  formAttributes: j = {},
  inputAttributes: g = {},
  buttonAttributes: _ = {},
  preventDefaultSubmit: w = !1,
  debounceMs: C = 300,
  minQueryLength: N = 1
}) => {
  const [v, L] = ne(""), [y, M] = ne(!1), F = se(void 0), b = se(null), p = se(null), h = e === "controlled" && s !== void 0, R = h ? s : v, V = Z((Y) => {
    F.current && clearTimeout(F.current), F.current = setTimeout(() => {
      d.onChange && Y.length >= N && d.onChange(Y);
    }, C);
  }, [d.onChange, C, N]), K = Z((Y) => {
    const P = Y.target.value;
    h || L(P), e !== "form" && V(P);
  }, [h, e, V]), E = Z((Y) => {
    const P = R.trim(), S = {
      query: P,
      timestamp: Date.now(),
      formData: new FormData(Y.currentTarget)
    };
    e === "controlled" || e === "hybrid" && w ? (Y.preventDefault(), d.onSearch && P.length >= N && d.onSearch(S)) : e === "hybrid" && d.onSearch && P.length >= N && d.onSearch(S);
  }, [e, R, d.onSearch, w, N]), W = Z(() => {
    M(!0), d.onFocus?.();
  }, [d.onFocus]), X = Z(() => {
    M(!1), d.onBlur?.();
  }, [d.onBlur]), Q = Z(() => {
    h || L(""), d.onClear?.(), p.current?.focus();
  }, [h, d.onClear]);
  le(() => () => {
    F.current && clearTimeout(F.current);
  }, []);
  const J = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: z("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": f
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
  ), O = () => !R || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: Q,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), H = () => !m || !x.length || !y ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: x.map((Y) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: Y.href ? /* @__PURE__ */ n.jsxs("a", { href: Y.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: Y.title }),
    Y.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: Y.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => d.onSearch?.({ query: Y.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: Y.title }),
        Y.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: Y.description })
      ]
    }
  ) }, Y.id)) });
  return /* @__PURE__ */ n.jsxs("search", { className: z("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": y,
    "nhsuk-header__search--has-results": m && x.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: b,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        onSubmit: E,
        ...j,
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
                value: R,
                onChange: K,
                onFocus: W,
                onBlur: X,
                disabled: u || f,
                "aria-expanded": m && x.length > 0,
                "aria-haspopup": "listbox",
                ...g
              }
            ),
            O()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: u || f || e !== "form" && R.length < N,
              ..._,
              children: [
                f ? T() : J(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    H()
  ] });
}, Ar = ({
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
  const [f, m] = ne(!1), [x, j] = ne(!1), [g, _] = ne(i?.items?.length || 0), [w, C] = ne(!1), [N, v] = ne(!1), [L, y] = ne(!1), M = se(null), F = se(null), b = se(!1), p = se(null), h = se([]), R = se(null);
  le(() => {
    typeof window > "u" || (y(!0), C(!0));
  }, []), le(() => {
    if (!L || !i?.items?.length) return;
    h.current = i.items;
    const k = setTimeout(() => {
      M.current && F.current && Q();
    }, 100);
    return () => clearTimeout(k);
  }, [L, i?.items]);
  const V = r.href && !t.href || r.href && r.href === t.href, K = V ? r.href : t.href, E = z(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), W = z(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), X = z(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), Q = Z(() => {
    if (!(typeof window > "u" || b.current) && !(!M.current || !F.current || !h.current.length)) {
      b.current = !0;
      try {
        const k = F.current, I = M.current, G = k.offsetWidth, B = I.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (B.length === 0 || G === 0) {
          b.current = !1;
          return;
        }
        const $ = window.innerWidth < 768, A = $ ? 16 : 32, D = A * 2, te = G - D, q = Array.from(B).map((ae) => ae.offsetWidth), U = q.reduce((ae, ue) => ae + ue, 0), ee = $ ? 80 : 100, ie = R.current !== null && R.current !== $;
        if (R.current = $, console.log("Overflow check:", {
          containerWidth: G,
          availableContainerWidth: te,
          totalGutters: D,
          gutterSize: A,
          totalWidth: U,
          mobile: $,
          breakpointChanged: ie,
          itemCount: q.length,
          measurements: q
        }), U <= te)
          j(!1), _(h.current.length);
        else {
          const ae = te - ee;
          let ue = 0, be = 0;
          for (let pe = 0; pe < q.length; pe++) {
            const _e = be + q[pe];
            if (_e <= ae)
              be = _e, ue = pe + 1;
            else
              break;
          }
          ue = Math.max(1, ue);
          const Ke = ue < q.length;
          j(Ke), _(ue);
        }
        b.current = !1;
      } catch (k) {
        console.error("Overflow detection error:", k), j(!1), _(h.current.length), b.current = !1;
      }
    }
  }, []);
  le(() => {
    if (typeof document > "u") return;
    const k = (I) => {
      I.key === "Escape" && f && m(!1);
    };
    if (f)
      return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [f]), le(() => {
    if (typeof window > "u" || !L) return;
    const k = () => {
      f && (m(!1), v(!1)), p.current && clearTimeout(p.current), p.current = setTimeout(() => {
        h.current.length > 0 && Q();
      }, 250);
    };
    let I = null, G = null;
    return window.matchMedia && (I = window.matchMedia("(max-width: 767px)"), G = () => {
      console.log("Breakpoint changed:", I?.matches ? "mobile" : "desktop"), h.current.length > 0 && setTimeout(() => Q(), 50);
    }, I.addEventListener ? I.addEventListener("change", G) : I.addListener(G)), window.addEventListener("resize", k), () => {
      window.removeEventListener("resize", k), I && G && (I.removeEventListener ? I.removeEventListener("change", G) : I.removeListener(G)), p.current && clearTimeout(p.current);
    };
  }, [L, f, Q]), le(() => {
    if (typeof document > "u") return;
    const k = (I) => {
      const G = I.target, B = M.current?.contains(G);
      f && !B && m(!1);
    };
    if (f)
      return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [f]);
  const J = (k) => {
    k && (k.preventDefault(), k.stopPropagation());
    const I = !f;
    m(I), I ? setTimeout(() => {
      v(!0);
    }, 50) : v(!1);
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
  ), O = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : T(), H = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, Y = (k, I) => k ? I ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: I, children: k }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: k }) : null, P = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), S = (k) => {
    if (k.active || k.current) {
      const I = k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: I });
    }
    return k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: E,
      role: "banner",
      "data-module": "nhsuk-header",
      ...u,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: W, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            K ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: K, children: [
              O(),
              H(),
              V && Y(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              O(),
              H(),
              V && Y(r.text)
            ] }),
            r.text && !V && Y(r.text, r.href)
          ] }),
          s && /* @__PURE__ */ n.jsx(Hr, { ...s }),
          /* @__PURE__ */ n.jsx(
            Mn,
            {
              ...o,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: X,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: z(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !w && L,
                    "nhsuk-header__navigation-container--ssr": !L
                  },
                  l
                ),
                ref: F,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: M, children: [
                  (L ? i.items.slice(0, g) : i.items).map((k, I) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: z(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": k.active || k.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !L && I >= 4
                          // Mark items that would be hidden on client
                        },
                        k.className
                      ),
                      ...k.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: k.href,
                          ...k.active || k.current ? {
                            "aria-current": k.current ? "page" : "true"
                          } : {},
                          children: S(k)
                        }
                      )
                    },
                    I
                  )),
                  L && x && g < i.items.length && /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ n.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: J,
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
        L && i && i.items && i.items.length > 0 && f && N && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !N,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(g).map((k, I) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: z(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": k.active || k.current
                  }
                ),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: k.href,
                    ...k.active || k.current ? {
                      "aria-current": k.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      m(!1), v(!1);
                    },
                    children: S(k)
                  }
                )
              },
              `overflow-${g + I}`
            )) })
          }
        )
      ]
    }
  );
}, dh = ({
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
  const f = r.href && !t.href || r.href && r.href === t.href, m = f ? r.href : t.href, x = z(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), j = z(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), g = z(
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
  ), w = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : _(), C = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, N = (y, M) => y ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: y }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: y }) : null, v = () => !i?.items || i.items.length === 0 ? null : i.items.map((y, M) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: y.href,
          ...y.attributes || {},
          children: y.text
        }
      )
    },
    y.href || M
  )), L = () => s ? /* @__PURE__ */ n.jsx(Hr, { ...s }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: x,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...u,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: j, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            m ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: m, children: [
              w(),
              C(),
              f && N(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              w(),
              C(),
              f && N(r.text)
            ] }),
            r.text && !f && N(r.text, r.href)
          ] }),
          (c === "organisation" || a) && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            a && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name", children: a.name }),
              a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: a.descriptor })
            ] }),
            L()
          ] }),
          c !== "organisation" && !a && L(),
          /* @__PURE__ */ n.jsx(
            Mn,
            {
              ...o,
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
                children: v()
              }
            ) })
          }
        )
      ]
    }
  );
}, uh = ({
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
  ...f
}) => {
  const m = r.href && !t.href || r.href && r.href === t.href, x = m ? r.href : t.href, j = z(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), g = z(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), _ = z(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
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
  ), C = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : w(), N = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, v = (y, M) => y ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: y }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: y }) : null, L = (y) => {
    if (y.active || y.current) {
      const M = y.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } }) : y.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: M });
    }
    return y.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } }) : y.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: j,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...u,
      ...f,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: g, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            x ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: x, children: [
              C(),
              N(),
              m && v(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              C(),
              N(),
              m && v(r.text)
            ] }),
            r.text && !m && v(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            Mn,
            {
              ...o,
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
                className: z(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, d).map((y, M) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: z(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
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
                          ...y.active || y.current ? {
                            "aria-current": y.current ? "page" : "true"
                          } : {},
                          children: L(y)
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(d).map((y, M) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: z(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": y.active || y.current
                          }
                        ),
                        children: /* @__PURE__ */ n.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: y.href,
                            ...y.active || y.current ? {
                              "aria-current": y.current ? "page" : "true"
                            } : {},
                            children: L(y)
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
}, ys = ({
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
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    i,
    o ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), m = [
    "nhsuk-hero__heading",
    r,
    !c && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), x = c || e || a || s, j = () => {
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
      className: d,
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...u,
      children: [
        o && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: x && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          j(),
          c || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && x && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          j(),
          c || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
ys.displayName = "Hero";
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
  const c = (d, f = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: z("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": f
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
    /* @__PURE__ */ n.jsxs("div", { className: z("nhsuk-width-container", i), children: [
      /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ n.jsx("div", { className: z("nhsuk-footer", e), children: u ? (
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
function ut(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function _s(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Pn(e) {
  let t, r, a;
  e.length !== 2 ? (t = ut, r = (l, c) => ut(e(l), c), a = (l, c) => e(l) - c) : (t = e === ut || e === _s ? e : ks, r = e, a = e);
  function s(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const f = u + d >>> 1;
        r(l[f], c) < 0 ? u = f + 1 : d = f;
      } while (u < d);
    }
    return u;
  }
  function o(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const f = u + d >>> 1;
        r(l[f], c) <= 0 ? u = f + 1 : d = f;
      } while (u < d);
    }
    return u;
  }
  function i(l, c, u = 0, d = l.length) {
    const f = s(l, c, u, d - 1);
    return f > u && a(l[f - 1], c) > -a(l[f], c) ? f - 1 : f;
  }
  return { left: s, center: i, right: o };
}
function ks() {
  return 0;
}
function vs(e) {
  return e === null ? NaN : +e;
}
const Ss = Pn(ut), ws = Ss.right;
Pn(vs).center;
const Cs = Math.sqrt(50), js = Math.sqrt(10), Ns = Math.sqrt(2);
function zr(e, t, r) {
  const a = (t - e) / Math.max(0, r), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= Cs ? 10 : o >= js ? 5 : o >= Ns ? 2 : 1;
  let l, c, u;
  return s < 0 ? (u = Math.pow(10, -s) / i, l = Math.round(e * u), c = Math.round(t * u), l / u < e && ++l, c / u > t && --c, u = -u) : (u = Math.pow(10, s) * i, l = Math.round(e / u), c = Math.round(t / u), l * u < e && ++l, c * u > t && --c), c < l && 0.5 <= r && r < 2 ? zr(e, t, r * 2) : [l, c, u];
}
function nr(e, t, r) {
  return t = +t, e = +e, r = +r, zr(e, t, r)[2];
}
function rr(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, s = a ? nr(t, e, r) : nr(e, t, r);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function Ts(e, t) {
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
function zn(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Wr(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function st() {
}
var nt = 0.7, ft = 1 / nt, Ge = "\\s*([+-]?\\d+)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ye = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ds = /^#([0-9a-f]{3,8})$/, Bs = new RegExp(`^rgb\\(${Ge},${Ge},${Ge}\\)$`), Fs = new RegExp(`^rgb\\(${ye},${ye},${ye}\\)$`), Rs = new RegExp(`^rgba\\(${Ge},${Ge},${Ge},${rt}\\)$`), Ms = new RegExp(`^rgba\\(${ye},${ye},${ye},${rt}\\)$`), Ls = new RegExp(`^hsl\\(${rt},${ye},${ye}\\)$`), Is = new RegExp(`^hsla\\(${rt},${ye},${ye},${rt}\\)$`), ar = {
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
zn(st, at, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: sr,
  // Deprecated! Use color.formatHex.
  formatHex: sr,
  formatHex8: $s,
  formatHsl: Es,
  formatRgb: or,
  toString: or
});
function sr() {
  return this.rgb().formatHex();
}
function $s() {
  return this.rgb().formatHex8();
}
function Es() {
  return Or(this).formatHsl();
}
function or() {
  return this.rgb().formatRgb();
}
function at(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Ds.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? ir(t) : r === 3 ? new fe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? lt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? lt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Bs.exec(e)) ? new fe(t[1], t[2], t[3], 1) : (t = Fs.exec(e)) ? new fe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Rs.exec(e)) ? lt(t[1], t[2], t[3], t[4]) : (t = Ms.exec(e)) ? lt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ls.exec(e)) ? dr(t[1], t[2] / 100, t[3] / 100, 1) : (t = Is.exec(e)) ? dr(t[1], t[2] / 100, t[3] / 100, t[4]) : ar.hasOwnProperty(e) ? ir(ar[e]) : e === "transparent" ? new fe(NaN, NaN, NaN, 0) : null;
}
function ir(e) {
  return new fe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function lt(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new fe(e, t, r, a);
}
function Hs(e) {
  return e instanceof st || (e = at(e)), e ? (e = e.rgb(), new fe(e.r, e.g, e.b, e.opacity)) : new fe();
}
function sn(e, t, r, a) {
  return arguments.length === 1 ? Hs(e) : new fe(e, t, r, a ?? 1);
}
function fe(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
zn(fe, sn, Wr(st, {
  brighter(e) {
    return e = e == null ? ft : Math.pow(ft, e), new fe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? nt : Math.pow(nt, e), new fe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new fe(He(this.r), He(this.g), He(this.b), mt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: lr,
  // Deprecated! Use color.formatHex.
  formatHex: lr,
  formatHex8: As,
  formatRgb: cr,
  toString: cr
}));
function lr() {
  return `#${Ee(this.r)}${Ee(this.g)}${Ee(this.b)}`;
}
function As() {
  return `#${Ee(this.r)}${Ee(this.g)}${Ee(this.b)}${Ee((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function cr() {
  const e = mt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${He(this.r)}, ${He(this.g)}, ${He(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function mt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function He(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ee(e) {
  return e = He(e), (e < 16 ? "0" : "") + e.toString(16);
}
function dr(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ge(e, t, r, a);
}
function Or(e) {
  if (e instanceof ge) return new ge(e.h, e.s, e.l, e.opacity);
  if (e instanceof st || (e = at(e)), !e) return new ge();
  if (e instanceof ge) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, s = Math.min(t, r, a), o = Math.max(t, r, a), i = NaN, l = o - s, c = (o + s) / 2;
  return l ? (t === o ? i = (r - a) / l + (r < a) * 6 : r === o ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? o + s : 2 - o - s, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new ge(i, l, c, e.opacity);
}
function Ps(e, t, r, a) {
  return arguments.length === 1 ? Or(e) : new ge(e, t, r, a ?? 1);
}
function ge(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
zn(ge, Ps, Wr(st, {
  brighter(e) {
    return e = e == null ? ft : Math.pow(ft, e), new ge(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? nt : Math.pow(nt, e), new ge(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - a;
    return new fe(
      Jt(e >= 240 ? e - 240 : e + 120, s, a),
      Jt(e, s, a),
      Jt(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new ge(ur(this.h), ct(this.s), ct(this.l), mt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = mt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ur(this.h)}, ${ct(this.s) * 100}%, ${ct(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ur(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ct(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Jt(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Wn = (e) => () => e;
function zs(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Ws(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function Os(e) {
  return (e = +e) == 1 ? Ur : function(t, r) {
    return r - t ? Ws(t, r, e) : Wn(isNaN(t) ? r : t);
  };
}
function Ur(e, t) {
  var r = t - e;
  return r ? zs(e, r) : Wn(isNaN(e) ? t : e);
}
const hr = function e(t) {
  var r = Os(t);
  function a(s, o) {
    var i = r((s = sn(s)).r, (o = sn(o)).r), l = r(s.g, o.g), c = r(s.b, o.b), u = Ur(s.opacity, o.opacity);
    return function(d) {
      return s.r = i(d), s.g = l(d), s.b = c(d), s.opacity = u(d), s + "";
    };
  }
  return a.gamma = e, a;
}(1);
function Us(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < r; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function Gs(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ys(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, s = new Array(a), o = new Array(r), i;
  for (i = 0; i < a; ++i) s[i] = On(e[i], t[i]);
  for (; i < r; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function Vs(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function pt(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function qs(e, t) {
  var r = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = On(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in r) a[s] = r[s](o);
    return a;
  };
}
var on = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xt = new RegExp(on.source, "g");
function Ks(e) {
  return function() {
    return e;
  };
}
function Zs(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Js(e, t) {
  var r = on.lastIndex = Xt.lastIndex = 0, a, s, o, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = on.exec(e)) && (s = Xt.exec(t)); )
    (o = s.index) > r && (o = t.slice(r, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, c.push({ i, x: pt(a, s) })), r = Xt.lastIndex;
  return r < t.length && (o = t.slice(r), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? c[0] ? Zs(c[0].x) : Ks(t) : (t = c.length, function(u) {
    for (var d = 0, f; d < t; ++d) l[(f = c[d]).i] = f.x(u);
    return l.join("");
  });
}
function On(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? Wn(t) : (r === "number" ? pt : r === "string" ? (a = at(t)) ? (t = a, hr) : Js : t instanceof at ? hr : t instanceof Date ? Vs : Gs(t) ? Us : Array.isArray(t) ? Ys : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? qs : pt)(e, t);
}
function Xs(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Qs(e) {
  return function() {
    return e;
  };
}
function eo(e) {
  return +e;
}
var fr = [0, 1];
function Oe(e) {
  return e;
}
function ln(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Qs(isNaN(t) ? NaN : 0.5);
}
function to(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function no(e, t, r) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = ln(s, a), o = r(i, o)) : (a = ln(a, s), o = r(o, i)), function(l) {
    return o(a(l));
  };
}
function ro(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = ln(e[i], e[i + 1]), o[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = ws(e, l, 1, a) - 1;
    return o[c](s[c](l));
  };
}
function ao(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function so() {
  var e = fr, t = fr, r = On, a, s, o, i = Oe, l, c, u;
  function d() {
    var m = Math.min(e.length, t.length);
    return i !== Oe && (i = to(e[0], e[m - 1])), l = m > 2 ? ro : no, c = u = null, f;
  }
  function f(m) {
    return m == null || isNaN(m = +m) ? o : (c || (c = l(e.map(a), t, r)))(a(i(m)));
  }
  return f.invert = function(m) {
    return i(s((u || (u = l(t, e.map(a), pt)))(m)));
  }, f.domain = function(m) {
    return arguments.length ? (e = Array.from(m, eo), d()) : e.slice();
  }, f.range = function(m) {
    return arguments.length ? (t = Array.from(m), d()) : t.slice();
  }, f.rangeRound = function(m) {
    return t = Array.from(m), r = Xs, d();
  }, f.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : Oe, d()) : i !== Oe;
  }, f.interpolate = function(m) {
    return arguments.length ? (r = m, d()) : r;
  }, f.unknown = function(m) {
    return arguments.length ? (o = m, f) : o;
  }, function(m, x) {
    return a = m, s = x, d();
  };
}
function oo() {
  return so()(Oe, Oe);
}
function io(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, s = e[r], o = e[a], i;
  return o < s && (i = r, r = a, a = i, i = s, s = o, o = i), e[r] = t.floor(s), e[a] = t.ceil(o), e;
}
const Qt = /* @__PURE__ */ new Date(), en = /* @__PURE__ */ new Date();
function ce(e, t, r, a) {
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
  }, s.filter = (o) => ce((i) => {
    if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !o(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !o(i); )
          ;
  }), r && (s.count = (o, i) => (Qt.setTime(+o), en.setTime(+i), e(Qt), e(en), Math.floor(r(Qt, en))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const gt = ce(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
gt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ce((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : gt);
gt.range;
const Fe = 1e3, me = Fe * 60, Re = me * 60, Le = Re * 24, Un = Le * 7, mr = Le * 30, tn = Le * 365, Ue = ce((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Fe);
}, (e, t) => (t - e) / Fe, (e) => e.getUTCSeconds());
Ue.range;
const Gn = ce((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Fe);
}, (e, t) => {
  e.setTime(+e + t * me);
}, (e, t) => (t - e) / me, (e) => e.getMinutes());
Gn.range;
const lo = ce((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * me);
}, (e, t) => (t - e) / me, (e) => e.getUTCMinutes());
lo.range;
const Yn = ce((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Fe - e.getMinutes() * me);
}, (e, t) => {
  e.setTime(+e + t * Re);
}, (e, t) => (t - e) / Re, (e) => e.getHours());
Yn.range;
const co = ce((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Re);
}, (e, t) => (t - e) / Re, (e) => e.getUTCHours());
co.range;
const ot = ce(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * me) / Le,
  (e) => e.getDate() - 1
);
ot.range;
const Vn = ce((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Le, (e) => e.getUTCDate() - 1);
Vn.range;
const uo = ce((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Le, (e) => Math.floor(e / Le));
uo.range;
function Pe(e) {
  return ce((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * me) / Un);
}
const Vt = Pe(0), bt = Pe(1), ho = Pe(2), fo = Pe(3), Ye = Pe(4), mo = Pe(5), po = Pe(6);
Vt.range;
bt.range;
ho.range;
fo.range;
Ye.range;
mo.range;
po.range;
function ze(e) {
  return ce((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Un);
}
const Gr = ze(0), xt = ze(1), go = ze(2), bo = ze(3), Ve = ze(4), xo = ze(5), yo = ze(6);
Gr.range;
xt.range;
go.range;
bo.range;
Ve.range;
xo.range;
yo.range;
const qn = ce((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
qn.range;
const _o = ce((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
_o.range;
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
const Ae = ce((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Ae.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ce((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Ae.range;
function ko(e, t, r, a, s, o) {
  const i = [
    [Ue, 1, Fe],
    [Ue, 5, 5 * Fe],
    [Ue, 15, 15 * Fe],
    [Ue, 30, 30 * Fe],
    [o, 1, me],
    [o, 5, 5 * me],
    [o, 15, 15 * me],
    [o, 30, 30 * me],
    [s, 1, Re],
    [s, 3, 3 * Re],
    [s, 6, 6 * Re],
    [s, 12, 12 * Re],
    [a, 1, Le],
    [a, 2, 2 * Le],
    [r, 1, Un],
    [t, 1, mr],
    [t, 3, 3 * mr],
    [e, 1, tn]
  ];
  function l(u, d, f) {
    const m = d < u;
    m && ([u, d] = [d, u]);
    const x = f && typeof f.range == "function" ? f : c(u, d, f), j = x ? x.range(u, +d + 1) : [];
    return m ? j.reverse() : j;
  }
  function c(u, d, f) {
    const m = Math.abs(d - u) / f, x = Pn(([, , _]) => _).right(i, m);
    if (x === i.length) return e.every(rr(u / tn, d / tn, f));
    if (x === 0) return gt.every(Math.max(rr(u, d, f), 1));
    const [j, g] = i[m / i[x - 1][2] < i[x][2] / m ? x - 1 : x];
    return j.every(g);
  }
  return [l, c];
}
const [vo, So] = ko(Ie, qn, Vt, ot, Yn, Gn);
function nn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function rn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Qe(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function wo(e) {
  var t = e.dateTime, r = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, u = et(s), d = tt(s), f = et(o), m = tt(o), x = et(i), j = tt(i), g = et(l), _ = tt(l), w = et(c), C = tt(c), N = {
    a: X,
    A: Q,
    b: J,
    B: T,
    c: null,
    d: _r,
    e: _r,
    f: Vo,
    g: ri,
    G: si,
    H: Uo,
    I: Go,
    j: Yo,
    L: Yr,
    m: qo,
    M: Ko,
    p: O,
    q: H,
    Q: Sr,
    s: wr,
    S: Zo,
    u: Jo,
    U: Xo,
    V: Qo,
    w: ei,
    W: ti,
    x: null,
    X: null,
    y: ni,
    Y: ai,
    Z: oi,
    "%": vr
  }, v = {
    a: Y,
    A: P,
    b: S,
    B: k,
    c: null,
    d: kr,
    e: kr,
    f: di,
    g: _i,
    G: vi,
    H: ii,
    I: li,
    j: ci,
    L: qr,
    m: ui,
    M: hi,
    p: I,
    q: G,
    Q: Sr,
    s: wr,
    S: fi,
    u: mi,
    U: pi,
    V: gi,
    w: bi,
    W: xi,
    x: null,
    X: null,
    y: yi,
    Y: ki,
    Z: Si,
    "%": vr
  }, L = {
    a: p,
    A: h,
    b: R,
    B: V,
    c: K,
    d: xr,
    e: xr,
    f: Po,
    g: br,
    G: gr,
    H: yr,
    I: yr,
    j: $o,
    L: Ao,
    m: Io,
    M: Eo,
    p: b,
    q: Lo,
    Q: Wo,
    s: Oo,
    S: Ho,
    u: Do,
    U: Bo,
    V: Fo,
    w: To,
    W: Ro,
    x: E,
    X: W,
    y: br,
    Y: gr,
    Z: Mo,
    "%": zo
  };
  N.x = y(r, N), N.X = y(a, N), N.c = y(t, N), v.x = y(r, v), v.X = y(a, v), v.c = y(t, v);
  function y(B, $) {
    return function(A) {
      var D = [], te = -1, q = 0, U = B.length, ee, ie, ae;
      for (A instanceof Date || (A = /* @__PURE__ */ new Date(+A)); ++te < U; )
        B.charCodeAt(te) === 37 && (D.push(B.slice(q, te)), (ie = pr[ee = B.charAt(++te)]) != null ? ee = B.charAt(++te) : ie = ee === "e" ? " " : "0", (ae = $[ee]) && (ee = ae(A, ie)), D.push(ee), q = te + 1);
      return D.push(B.slice(q, te)), D.join("");
    };
  }
  function M(B, $) {
    return function(A) {
      var D = Qe(1900, void 0, 1), te = F(D, B, A += "", 0), q, U;
      if (te != A.length) return null;
      if ("Q" in D) return new Date(D.Q);
      if ("s" in D) return new Date(D.s * 1e3 + ("L" in D ? D.L : 0));
      if ($ && !("Z" in D) && (D.Z = 0), "p" in D && (D.H = D.H % 12 + D.p * 12), D.m === void 0 && (D.m = "q" in D ? D.q : 0), "V" in D) {
        if (D.V < 1 || D.V > 53) return null;
        "w" in D || (D.w = 1), "Z" in D ? (q = rn(Qe(D.y, 0, 1)), U = q.getUTCDay(), q = U > 4 || U === 0 ? xt.ceil(q) : xt(q), q = Vn.offset(q, (D.V - 1) * 7), D.y = q.getUTCFullYear(), D.m = q.getUTCMonth(), D.d = q.getUTCDate() + (D.w + 6) % 7) : (q = nn(Qe(D.y, 0, 1)), U = q.getDay(), q = U > 4 || U === 0 ? bt.ceil(q) : bt(q), q = ot.offset(q, (D.V - 1) * 7), D.y = q.getFullYear(), D.m = q.getMonth(), D.d = q.getDate() + (D.w + 6) % 7);
      } else ("W" in D || "U" in D) && ("w" in D || (D.w = "u" in D ? D.u % 7 : "W" in D ? 1 : 0), U = "Z" in D ? rn(Qe(D.y, 0, 1)).getUTCDay() : nn(Qe(D.y, 0, 1)).getDay(), D.m = 0, D.d = "W" in D ? (D.w + 6) % 7 + D.W * 7 - (U + 5) % 7 : D.w + D.U * 7 - (U + 6) % 7);
      return "Z" in D ? (D.H += D.Z / 100 | 0, D.M += D.Z % 100, rn(D)) : nn(D);
    };
  }
  function F(B, $, A, D) {
    for (var te = 0, q = $.length, U = A.length, ee, ie; te < q; ) {
      if (D >= U) return -1;
      if (ee = $.charCodeAt(te++), ee === 37) {
        if (ee = $.charAt(te++), ie = L[ee in pr ? $.charAt(te++) : ee], !ie || (D = ie(B, A, D)) < 0) return -1;
      } else if (ee != A.charCodeAt(D++))
        return -1;
    }
    return D;
  }
  function b(B, $, A) {
    var D = u.exec($.slice(A));
    return D ? (B.p = d.get(D[0].toLowerCase()), A + D[0].length) : -1;
  }
  function p(B, $, A) {
    var D = x.exec($.slice(A));
    return D ? (B.w = j.get(D[0].toLowerCase()), A + D[0].length) : -1;
  }
  function h(B, $, A) {
    var D = f.exec($.slice(A));
    return D ? (B.w = m.get(D[0].toLowerCase()), A + D[0].length) : -1;
  }
  function R(B, $, A) {
    var D = w.exec($.slice(A));
    return D ? (B.m = C.get(D[0].toLowerCase()), A + D[0].length) : -1;
  }
  function V(B, $, A) {
    var D = g.exec($.slice(A));
    return D ? (B.m = _.get(D[0].toLowerCase()), A + D[0].length) : -1;
  }
  function K(B, $, A) {
    return F(B, t, $, A);
  }
  function E(B, $, A) {
    return F(B, r, $, A);
  }
  function W(B, $, A) {
    return F(B, a, $, A);
  }
  function X(B) {
    return i[B.getDay()];
  }
  function Q(B) {
    return o[B.getDay()];
  }
  function J(B) {
    return c[B.getMonth()];
  }
  function T(B) {
    return l[B.getMonth()];
  }
  function O(B) {
    return s[+(B.getHours() >= 12)];
  }
  function H(B) {
    return 1 + ~~(B.getMonth() / 3);
  }
  function Y(B) {
    return i[B.getUTCDay()];
  }
  function P(B) {
    return o[B.getUTCDay()];
  }
  function S(B) {
    return c[B.getUTCMonth()];
  }
  function k(B) {
    return l[B.getUTCMonth()];
  }
  function I(B) {
    return s[+(B.getUTCHours() >= 12)];
  }
  function G(B) {
    return 1 + ~~(B.getUTCMonth() / 3);
  }
  return {
    format: function(B) {
      var $ = y(B += "", N);
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
      var $ = y(B += "", v);
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
var pr = { "-": "", _: " ", 0: "0" }, de = /^\s*\d+/, Co = /^%/, jo = /[\\^$*+?|[\]().{}]/g;
function re(e, t, r) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < r ? new Array(r - o + 1).join(t) + s : s);
}
function No(e) {
  return e.replace(jo, "\\$&");
}
function et(e) {
  return new RegExp("^(?:" + e.map(No).join("|") + ")", "i");
}
function tt(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function To(e, t, r) {
  var a = de.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function Do(e, t, r) {
  var a = de.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Bo(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function Fo(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Ro(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function gr(e, t, r) {
  var a = de.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function br(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function Mo(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Lo(e, t, r) {
  var a = de.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function Io(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function xr(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function $o(e, t, r) {
  var a = de.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function yr(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Eo(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Ho(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Ao(e, t, r) {
  var a = de.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function Po(e, t, r) {
  var a = de.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function zo(e, t, r) {
  var a = Co.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Wo(e, t, r) {
  var a = de.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Oo(e, t, r) {
  var a = de.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function _r(e, t) {
  return re(e.getDate(), t, 2);
}
function Uo(e, t) {
  return re(e.getHours(), t, 2);
}
function Go(e, t) {
  return re(e.getHours() % 12 || 12, t, 2);
}
function Yo(e, t) {
  return re(1 + ot.count(Ie(e), e), t, 3);
}
function Yr(e, t) {
  return re(e.getMilliseconds(), t, 3);
}
function Vo(e, t) {
  return Yr(e, t) + "000";
}
function qo(e, t) {
  return re(e.getMonth() + 1, t, 2);
}
function Ko(e, t) {
  return re(e.getMinutes(), t, 2);
}
function Zo(e, t) {
  return re(e.getSeconds(), t, 2);
}
function Jo(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Xo(e, t) {
  return re(Vt.count(Ie(e) - 1, e), t, 2);
}
function Vr(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ye(e) : Ye.ceil(e);
}
function Qo(e, t) {
  return e = Vr(e), re(Ye.count(Ie(e), e) + (Ie(e).getDay() === 4), t, 2);
}
function ei(e) {
  return e.getDay();
}
function ti(e, t) {
  return re(bt.count(Ie(e) - 1, e), t, 2);
}
function ni(e, t) {
  return re(e.getFullYear() % 100, t, 2);
}
function ri(e, t) {
  return e = Vr(e), re(e.getFullYear() % 100, t, 2);
}
function ai(e, t) {
  return re(e.getFullYear() % 1e4, t, 4);
}
function si(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Ye(e) : Ye.ceil(e), re(e.getFullYear() % 1e4, t, 4);
}
function oi(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + re(t / 60 | 0, "0", 2) + re(t % 60, "0", 2);
}
function kr(e, t) {
  return re(e.getUTCDate(), t, 2);
}
function ii(e, t) {
  return re(e.getUTCHours(), t, 2);
}
function li(e, t) {
  return re(e.getUTCHours() % 12 || 12, t, 2);
}
function ci(e, t) {
  return re(1 + Vn.count(Ae(e), e), t, 3);
}
function qr(e, t) {
  return re(e.getUTCMilliseconds(), t, 3);
}
function di(e, t) {
  return qr(e, t) + "000";
}
function ui(e, t) {
  return re(e.getUTCMonth() + 1, t, 2);
}
function hi(e, t) {
  return re(e.getUTCMinutes(), t, 2);
}
function fi(e, t) {
  return re(e.getUTCSeconds(), t, 2);
}
function mi(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function pi(e, t) {
  return re(Gr.count(Ae(e) - 1, e), t, 2);
}
function Kr(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ve(e) : Ve.ceil(e);
}
function gi(e, t) {
  return e = Kr(e), re(Ve.count(Ae(e), e) + (Ae(e).getUTCDay() === 4), t, 2);
}
function bi(e) {
  return e.getUTCDay();
}
function xi(e, t) {
  return re(xt.count(Ae(e) - 1, e), t, 2);
}
function yi(e, t) {
  return re(e.getUTCFullYear() % 100, t, 2);
}
function _i(e, t) {
  return e = Kr(e), re(e.getUTCFullYear() % 100, t, 2);
}
function ki(e, t) {
  return re(e.getUTCFullYear() % 1e4, t, 4);
}
function vi(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ve(e) : Ve.ceil(e), re(e.getUTCFullYear() % 1e4, t, 4);
}
function Si() {
  return "+0000";
}
function vr() {
  return "%";
}
function Sr(e) {
  return +e;
}
function wr(e) {
  return Math.floor(+e / 1e3);
}
var We, Zr;
wi({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function wi(e) {
  return We = wo(e), Zr = We.format, We.parse, We.utcFormat, We.utcParse, We;
}
function Ci(e) {
  return new Date(e);
}
function ji(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Jr(e, t, r, a, s, o, i, l, c, u) {
  var d = oo(), f = d.invert, m = d.domain, x = u(".%L"), j = u(":%S"), g = u("%I:%M"), _ = u("%I %p"), w = u("%a %d"), C = u("%b %d"), N = u("%B"), v = u("%Y");
  function L(y) {
    return (c(y) < y ? x : l(y) < y ? j : i(y) < y ? g : o(y) < y ? _ : a(y) < y ? s(y) < y ? w : C : r(y) < y ? N : v)(y);
  }
  return d.invert = function(y) {
    return new Date(f(y));
  }, d.domain = function(y) {
    return arguments.length ? m(Array.from(y, ji)) : m().map(Ci);
  }, d.ticks = function(y) {
    var M = m();
    return e(M[0], M[M.length - 1], y ?? 10);
  }, d.tickFormat = function(y, M) {
    return M == null ? L : u(M);
  }, d.nice = function(y) {
    var M = m();
    return (!y || typeof y.range != "function") && (y = t(M[0], M[M.length - 1], y ?? 10)), y ? m(io(M, y)) : d;
  }, d.copy = function() {
    return ao(d, Jr(e, t, r, a, s, o, i, l, c, u));
  }, d;
}
function Ni() {
  return Ts.apply(Jr(vo, So, Ie, qn, Vt, ot, Yn, Gn, Ue, Zr).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Ti({
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
  const u = se(null), [d, f] = ne(!1), [m, x] = ne(!1), j = t(e.start), g = t(e.end), _ = Math.max(g - j, 20), w = () => {
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
  }, C = e.progress ? _ * e.progress / 100 : 0, N = () => {
    r?.(e);
  }, v = () => {
    a?.(e);
  }, L = (R) => {
    R.key === "Enter" ? (R.preventDefault(), N()) : R.key === " " && (R.preventDefault(), v());
  }, y = () => {
    f(!0);
  }, M = () => {
    f(!1);
  }, F = () => {
    x(!0), l?.();
  }, b = () => {
    x(!1);
  }, p = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (m || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), h = {
    "--task-left": `${j}px`,
    "--task-width": `${_}px`,
    "--task-color": w(),
    left: `${j}px`,
    width: `${_}px`,
    backgroundColor: w()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: u,
      "data-task-index": o,
      className: p,
      style: h,
      onClick: N,
      onDoubleClick: v,
      onKeyDown: L,
      onMouseDown: y,
      onMouseUp: M,
      onFocus: F,
      onBlur: b,
      "aria-label": c || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${C}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function Di({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let x = e.getTime(); x <= t.getTime(); x += 864e5)
    a.push(new Date(x));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = ne(-1), c = se(null), u = (x) => {
    if (x.key === "ArrowLeft") {
      x.preventDefault();
      const j = Math.max(0, i === -1 ? 0 : i - 1);
      l(j), m(j);
    } else if (x.key === "ArrowRight") {
      x.preventDefault();
      const j = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(j), m(j);
    } else if (x.key === "ArrowDown") {
      x.preventDefault();
      const j = document.querySelector(".gantt-row .timeline-container");
      j && j.focus();
    } else if (x.key === "Home")
      x.preventDefault(), l(0), m(0);
    else if (x.key === "End") {
      x.preventDefault();
      const j = a.length - 1;
      l(j), m(j);
    }
  }, d = (x) => {
    if (x.key === "ArrowDown") {
      x.preventDefault();
      const j = document.querySelector(".gantt-row .resource-label");
      j && j.focus();
    } else if (x.key === "ArrowRight") {
      x.preventDefault();
      const j = c.current;
      j && j.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (x) => {
    const j = c.current?.querySelector(`[data-date-index="${x}"]`);
    j && j.focus();
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
            onFocus: f,
            children: a.map((x, j) => {
              const g = x.getTime() === o.getTime(), _ = i === j;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": j,
                  className: `date-column ${g ? "today" : ""} ${_ ? "focused" : ""}`,
                  tabIndex: _ ? 0 : -1,
                  role: "button",
                  "aria-label": `${x.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
                  onFocus: () => l(j),
                  onKeyDown: u,
                  children: x.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                j
              );
            })
          }
        )
      ]
    }
  );
}
function Bi({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, c] = ne(!1), [u, d] = ne(-1), f = se(null);
  le(() => {
    l && u >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
    }, 0);
  }, [l, u, t.length]);
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
          g.preventDefault(), o === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          g.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          g.preventDefault(), f.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (g.preventDefault(), c(!0), d(0));
          break;
      }
      return;
    }
    switch (g.key) {
      case "ArrowLeft":
        g.preventDefault();
        const _ = Math.max(0, u - 1);
        d(_), f.current?.querySelector(`[data-task-index="${_}"]`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault();
        const C = Math.min(t.length - 1, u + 1);
        d(C), f.current?.querySelector(`[data-task-index="${C}"]`)?.focus();
        break;
      case "Enter":
        g.preventDefault(), u >= 0 && a?.(t[u]);
        break;
      case " ":
        g.preventDefault(), u >= 0 && s?.(t[u]);
        break;
      case "Escape":
        g.preventDefault(), c(!1), d(-1), f.current?.focus();
        break;
    }
  }, x = (g) => {
    switch (g.key) {
      case "ArrowUp":
        g.preventDefault(), o === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        g.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault(), f.current?.focus();
        break;
    }
  }, j = (g) => {
    l && d(g);
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
              l || d(-1);
            },
            children: t.map((g, _) => /* @__PURE__ */ n.jsx(
              Ti,
              {
                task: g,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && u === _,
                taskIndex: _,
                tabIndex: l && u === _ ? 0 : -1,
                onFocus: () => j(_)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function hh({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = se(null), [l, c] = ne(800), u = oe(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const g = new Date(r);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [r]), d = oe(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const g = new Date(a);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [a]), f = oe(() => Math.ceil((d.getTime() - u.getTime()) / 864e5) + 1, [u, d]);
  le(() => {
    if (!i.current) return;
    const g = new ResizeObserver((_) => {
      const w = _[0];
      w && c(Math.max(w.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const m = oe(
    () => Ni().domain([u, d]).range([0, l]),
    [u, d, l]
  ), x = oe(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((_) => {
      const w = g.get(_.resourceId) || [];
      w.push(_), g.set(_.resourceId, w);
    }), g;
  }, [t]), j = (g) => {
    if (g.target === g.currentTarget)
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault();
          const _ = i.current?.querySelector(".gantt-row .resource-label");
          _ && _.focus();
          break;
        case "Home":
          g.preventDefault();
          const w = i.current?.querySelector(".header-resource");
          w && w.focus();
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
      onKeyDown: j,
      children: [
        /* @__PURE__ */ n.jsx(Di, { viewStart: u, viewEnd: d, dateCount: f }),
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
              Bi,
              {
                resource: g,
                tasks: x.get(g.id) || [],
                scale: m,
                onTaskClick: s,
                onTaskDoubleClick: o,
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
const yt = ({
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
) }), Fi = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? xe.Children.toArray(t).filter(
    (w) => xe.isValidElement(w) && (w.type === yt || w.type?.displayName === "BreadcrumbItem")
  ).map((w) => ({
    text: typeof w.props.children == "string" ? w.props.children : String(w.props.children),
    href: w.props.href,
    active: w.props.active,
    attributes: w.props.attributes
  })) : [], u = () => t ? c() : s && o ? [{ href: s, text: o }] : e, d = () => {
    const _ = u();
    if (_ && _.length > 0) {
      const w = _.slice().reverse().find((C) => C.href && !C.active);
      if (w)
        return { href: w.href, text: w.text };
    }
    return { text: "Home" };
  }, f = u(), m = d(), x = z(
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
          xe.Children.map(t, (_, w) => xe.isValidElement(_) && (_.type === yt || _.type?.displayName === "BreadcrumbItem") ? xe.cloneElement(_, { key: w }) : null)
        ) : (
          // Render from items array
          f?.map((_, w) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: _.active ? /* @__PURE__ */ n.jsx(
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
          ) }, w))
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
}, Ri = Fi;
Ri.Item = yt;
yt.displayName = "BreadcrumbItem";
const Xr = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [s, o] = ne(!1);
  le(() => {
    o(!0);
  }, []), le(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (c) => {
      const u = c.target, d = u.getAttribute("href");
      if (d && d.startsWith("#")) {
        const f = document.querySelector(d);
        if (f) {
          f.hasAttribute("tabindex") || f.setAttribute("tabindex", "-1"), f.focus(), f.classList.add("nhsuk-skip-link-focused-element");
          const m = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
          }, 3e3);
          u.__nhsSkipLinkTimeout = m;
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
  const i = z("nhsuk-skip-link", r);
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
}, fh = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: s,
  attributes: o = {}
}) => {
  const i = z("nhsuk-pagination", s);
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
}, mh = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const s = z("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, Mi = ({
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
  className: d,
  children: f,
  "data-testid": m,
  id: x,
  "aria-label": j,
  "aria-labelledby": g,
  "aria-describedby": _
}) => {
  const w = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    d
  ].filter(Boolean).join(" "), C = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), N = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), v = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const M = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Me,
      {
        level: a,
        className: N,
        children: M()
      }
    );
  }, L = () => f || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: o }) : null), y = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      className: w,
      "data-testid": m,
      id: x,
      "aria-label": j,
      "aria-labelledby": g,
      "aria-describedby": _,
      children: [
        c && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: u || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: C, children: [
          v(),
          L(),
          y()
        ] })
      ]
    }
  );
}, ph = ({
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
}, gh = ({
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
}, bh = ({
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
  "aria-label": f,
  "aria-labelledby": m,
  "aria-describedby": x
}) => {
  const j = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), g = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), _ = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const C = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], N = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        C,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Me,
      {
        level: a,
        className: g,
        children: N
      }
    );
  }, w = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: j,
      "data-testid": u,
      id: d,
      "aria-label": f,
      "aria-labelledby": m,
      "aria-describedby": x,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          _(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: w() })
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
  const u = z(
    "nhsuk-panel",
    t
  ), d = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Me,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Me,
    {
      level: s,
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
  ) : o ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: o }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: u, id: e, ...c, children: [
    d(),
    f()
  ] });
}, xh = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...s
}) => {
  const o = z("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: o, ...s, children: i() });
}, yh = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const s = z(
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
}, _h = ({
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
  classes: f,
  attributes: m,
  "data-testid": x
}) => {
  const j = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), g = z(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    d
  ), _ = z(f), w = (v, L) => {
    const y = z("nhsuk-table__header", {
      [`nhsuk-table__header--${v.format}`]: v.format
    }, v.classes), M = {
      scope: "col",
      ...v.colspan && { colSpan: v.colspan },
      ...v.rowspan && { rowSpan: v.rowspan },
      ...o && { role: "columnheader" },
      ...v.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: y, ...M, children: v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text }, L);
  }, C = (v, L, y) => {
    const M = s && y, F = z(
      M ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${M ? "header" : "cell"}--${v.format}`]: v.format
      },
      v.classes
    ), b = {
      ...M && { scope: "row" },
      ...v.colspan && { colSpan: v.colspan },
      ...v.rowspan && { rowSpan: v.rowspan },
      ...o && {
        role: M ? "rowheader" : "cell",
        ...v.header && { "data-label": v.header }
      },
      ...v.attributes
    }, p = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      o && v.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        v.header,
        " "
      ] }),
      v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text
    ] }), h = M ? "th" : "td";
    return /* @__PURE__ */ n.jsx(h, { className: F, ...b, children: p }, L);
  }, N = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: g,
      ...o && { role: "table" },
      ...m,
      ...x && { "data-testid": x },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: j, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...o && { role: "row" }, children: t.map((v, L) => w(v, L)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((v, L) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: v.map(
              (y, M) => C(y, M, M === 0)
            )
          },
          L
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(Li, { className: u, children: [
    i && /* @__PURE__ */ n.jsx(Me, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    N()
  ] }) : _ ? /* @__PURE__ */ n.jsx("div", { className: _, children: N() }) : N();
}, kh = qe(({
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
  ...f
}, m) => {
  const x = r !== void 0, [j, g] = ne(() => t || e[0]?.id || ""), _ = x ? r : j, w = se(null), C = se(/* @__PURE__ */ new Map()), N = Z((p) => {
    x || g(p), a?.(p);
  }, [x, a]), v = Z((p) => {
    s?.(p), l && N(p);
  }, [s, l, N]), L = Z((p, h) => {
    const R = e.filter((E) => !E.disabled).map((E) => E.id), V = R.indexOf(h);
    let K = null;
    switch (p.key) {
      case "ArrowLeft":
        K = V > 0 ? V - 1 : R.length - 1;
        break;
      case "ArrowRight":
        K = V < R.length - 1 ? V + 1 : 0;
        break;
      case "Home":
        K = 0;
        break;
      case "End":
        K = R.length - 1;
        break;
      case "Escape":
        p.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (K !== null) {
      p.preventDefault();
      const E = R[K], W = C.current.get(E);
      W && (W.focus(), v(E));
    }
  }, [e, v, i]), y = Z((p, h) => {
    h ? C.current.set(p, h) : C.current.delete(p);
  }, []), M = Z((p) => {
    const h = C.current.get(p);
    h && h.focus();
  }, []);
  Fr(m, () => ({
    focusTab: M,
    getActiveTab: () => _,
    getTabListElement: () => w.current
  }), [M, _]);
  const F = Z((p) => {
    const h = p.relatedTarget;
    w.current?.contains(h) || o?.();
  }, [o]), b = z("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: b,
      id: u,
      "data-testid": d,
      ...f,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: w,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: F,
                children: e.map((p) => {
                  const h = p.id === _, R = p.disabled, V = z("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": h,
                    "nhsuk-tabs__list-item--disabled": R
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: V, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (K) => y(p.id, K),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": h,
                      "aria-controls": `${p.id}-panel`,
                      id: `${p.id}-tab`,
                      tabIndex: h ? 0 : -1,
                      disabled: R,
                      onClick: () => !R && N(p.id),
                      onKeyDown: (K) => !R && L(K, p.id),
                      onFocus: () => !R && v(p.id),
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
}), Ii = qe(
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
        ref: u,
        id: i,
        className: d,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
Ii.displayName = "Details";
const $i = qe(
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
    ), f = (x) => t === "cross" && !a ? `do not ${x}` : x, m = () => /* @__PURE__ */ n.jsx(
      Me,
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
          m(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: u.join(" "), role: "list", children: r.map((x, j) => /* @__PURE__ */ n.jsxs("li", { children: [
            d(),
            f(x.item)
          ] }, j)) }) })
        ]
      }
    );
  }
);
$i.displayName = "DoDontList";
const Ei = qe(
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
        ref: u,
        id: i,
        className: d,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
Ei.displayName = "Expander";
const Hi = qe(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const u = c + 1, d = `${t}-${u}-hint`, f = `${t}-${u}-status`, m = !!l.href, x = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), j = [
        l.hint && d,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Ai,
        {
          item: l,
          itemClasses: x,
          hasLink: m,
          hintId: d,
          statusId: f,
          ariaDescribedBy: j
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
), Ai = ({
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
    return e.status.tag ? d = /* @__PURE__ */ n.jsx(In, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ n.jsx("div", { className: u, id: s, children: d });
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
const vh = ({
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
}, Sh = ({
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
}, Pi = ({
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
    /* @__PURE__ */ n.jsx(Me, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, wh = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(hs, { children: e.map((s, o) => /* @__PURE__ */ n.jsx(
    An,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      children: /* @__PURE__ */ n.jsx(Pi, { ...s })
    },
    o
  )) }) });
}, zi = xe.forwardRef(
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
    className: f,
    tableClassName: m,
    bordered: x = !1,
    striped: j = !1,
    responsive: g = !1,
    tableType: _ = "default"
  }, w) => {
    const C = se(null), N = se(null), v = se(null);
    xe.useImperativeHandle(w, () => C.current, []);
    const [L, y] = ne(0), [M, F] = ne(0), [b, p] = ne("headers"), [h, R] = ne("browse"), V = t.length, K = e.length, E = oe(() => !r || r.length === 0 ? e : [...e].sort((H, Y) => {
      for (const { key: P, direction: S } of r) {
        const k = H[P], I = Y[P];
        if (k == null && I == null) continue;
        if (k == null) return 1;
        if (I == null) return -1;
        let G = 0;
        if (typeof k == "number" && typeof I == "number" ? G = k - I : G = String(k).localeCompare(String(I)), G !== 0)
          return S === "asc" ? G : -G;
      }
      return 0;
    }), [e, r]), W = Z((H, Y) => {
      setTimeout(() => {
        const P = C.current?.querySelector(
          `tbody tr:nth-child(${H + 1}) td:nth-child(${Y + 1})`
        );
        P && (P.focus(), typeof P.scrollIntoView == "function" && P.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), X = Z((H) => {
      setTimeout(() => {
        const Y = C.current?.querySelector(`th:nth-child(${H + 1})`);
        Y && (Y.focus(), typeof Y.scrollIntoView == "function" && Y.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Q = Z((H) => {
      a?.(H);
    }, [a]), J = Z((H) => {
      o?.(H);
    }, [o]), T = Z((H) => {
      const { key: Y } = H;
      switch (Y) {
        case "Enter":
          if (H.preventDefault(), b === "headers" && h === "browse")
            R("navigate"), X(M);
          else if (b === "headers" && h === "navigate") {
            const P = t[M];
            P && Q(P.key);
          } else b === "cells" && h === "browse" ? (R("navigate"), W(L, M)) : b === "cells" && h === "navigate" && J(L);
          break;
        case "Escape":
          H.preventDefault(), (b === "headers" && h === "navigate" || b === "cells" && h === "navigate") && R("browse");
          break;
        case "ArrowLeft":
          if (H.preventDefault(), h === "navigate" || h === "browse" && b === "headers") {
            if (b === "headers") {
              const P = Math.max(0, M - 1);
              F(P), X(P);
            } else if (b === "cells") {
              const P = Math.max(0, M - 1);
              F(P), W(L, P);
            }
          }
          break;
        case "ArrowRight":
          if (H.preventDefault(), h === "navigate" || h === "browse" && b === "headers") {
            if (b === "headers") {
              const P = Math.min(V - 1, M + 1);
              F(P), X(P);
            } else if (b === "cells") {
              const P = Math.min(V - 1, M + 1);
              F(P), W(L, P);
            }
          }
          break;
        case "ArrowUp":
          if (H.preventDefault(), b === "cells") {
            if (h === "browse") {
              const P = Math.max(0, L - 1);
              y(P), W(P, 0), F(0);
            } else if (h === "navigate")
              if (L > 0) {
                const P = L - 1;
                y(P), W(P, M);
              } else
                p("headers"), R("browse"), X(M);
          }
          break;
        case "ArrowDown":
          if (H.preventDefault(), b === "headers" && h === "browse")
            p("cells"), y(0), F(0), W(0, 0);
          else if (b === "cells") {
            const P = K - 1;
            if (h === "browse") {
              const S = Math.min(P, L + 1);
              y(S), W(S, 0), F(0);
            } else if (h === "navigate" && L < P) {
              const S = L + 1;
              y(S), W(S, M);
            }
          }
          break;
        case "Home":
          H.preventDefault(), b === "headers" ? (F(0), X(0)) : b === "cells" && (H.ctrlKey ? (y(0), F(0), W(0, 0)) : (F(0), W(L, 0)));
          break;
        case "End":
          if (H.preventDefault(), b === "headers") {
            const P = V - 1;
            F(P), X(P);
          } else if (b === "cells")
            if (H.ctrlKey) {
              const P = K - 1, S = V - 1;
              y(P), F(S), W(P, S);
            } else {
              const P = V - 1;
              F(P), W(L, P);
            }
          break;
        case " ":
          if (H.preventDefault(), b === "headers" && h === "navigate") {
            const P = t[M];
            P && Q(P.key);
          } else b === "cells" && h === "navigate" && J(L);
          break;
      }
    }, [
      b,
      h,
      M,
      L,
      V,
      K,
      t,
      W,
      X,
      Q,
      J
    ]);
    le(() => {
      const H = C.current;
      if (H)
        return H.addEventListener("keydown", T), () => H.removeEventListener("keydown", T);
    }, [T]);
    const O = z(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": x,
        "nhsuk-table--striped": j,
        "nhsuk-table--compact": _ === "compact"
      },
      f
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: C,
        className: O,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": u,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: N, role: "row", children: t.map((H, Y) => {
            const P = r?.find((I) => I.key === H.key), S = !!P, k = b === "headers" && M === Y;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: z("sortable-header", {
                  "sortable-header--focused": k
                }),
                role: "columnheader",
                tabIndex: k ? 0 : -1,
                onClick: () => Q(H.key),
                onKeyDown: (I) => {
                  (I.key === "Enter" || I.key === " ") && (I.preventDefault(), Q(H.key));
                },
                "aria-sort": S ? P?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: H.label }),
                  S && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((I) => I.key === H.key) + 1 }),
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
              H.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: v, className: "nhsuk-table__body", role: "rowgroup", children: E.map((H, Y) => {
            const P = s === Y, S = b === "cells" && L === Y;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: z("data-row", {
                  "data-row--selected": P,
                  "data-row--focused": S
                }),
                "aria-selected": P,
                children: t.map((k, I) => {
                  const G = k.render ? k.render(H) : H[k.key], B = b === "cells" && L === Y && M === I, $ = () => typeof G == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: G ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: G ? "Yes" : "No" })
                  ] }) : String(G ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: z("data-cell", {
                        "data-cell--focused": B
                      }),
                      tabIndex: B ? 0 : -1,
                      onClick: () => J(Y),
                      children: $()
                    },
                    k.key
                  );
                })
              },
              Y
            );
          }) })
        ]
      }
    );
  }
);
zi.displayName = "AriaDataGrid";
const Wi = ({
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
  const f = se(null), m = se(null), x = se(null), j = Z((b, p) => {
    c || (m.current = p, b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("text/plain", p));
  }, [c]), g = Z((b, p) => {
    c || m.current === p || (b.preventDefault(), b.dataTransfer.dropEffect = "move", x.current = p);
  }, [c]), _ = Z((b, p) => {
    if (c) return;
    b.preventDefault();
    const h = m.current;
    if (!h || h === p) return;
    const R = e.findIndex((K) => K.key === h), V = e.findIndex((K) => K.key === p);
    if (R !== -1 && V !== -1) {
      const K = [...e], [E] = K.splice(R, 1);
      K.splice(V, 0, E), r(K);
    }
    m.current = null, x.current = null;
  }, [c, e, r]), w = Z(() => {
    m.current = null, x.current = null;
  }, []), C = Z((b) => {
    const p = t.find((h) => h.key === b);
    return p ? p.label : b;
  }, [t]), N = Z((b) => ["red", "orange", "blue", "aqua-green", "grey"][b] || "grey", []), v = Z((b) => {
    if (c) return;
    const p = e.map(
      (h) => h.key === b ? { ...h, direction: h.direction === "asc" ? "desc" : "asc" } : h
    );
    r(p);
  }, [e, r, c]), L = Z((b) => {
    if (c) return;
    const p = e.filter((h) => h.key !== b);
    r(p);
  }, [e, r, c]), y = Z(() => {
    c || r([]);
  }, [r, c]), M = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const b = e.map((p, h) => {
      const R = p.direction === "asc" ? "ascending" : "descending";
      return `${h + 1}. ${C(p.key)} (${R})`;
    });
    if (b.length === 1)
      return `Sorted by: ${b[0]}`;
    if (b.length === 2)
      return `Sorted by: ${b.join(" and ")}`;
    {
      const p = b.pop();
      return `Sorted by: ${b.join(", ")}, and ${p}`;
    }
  }, F = oe(() => {
    const b = ["sort-description"];
    return l && b.push("sort-help"), d && b.push(d), b.join(" ");
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
          "aria-label": u,
          "aria-describedby": F,
          children: e.map((b, p) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (h) => j(h, b.key),
              onDragOver: (h) => g(h, b.key),
              onDrop: (h) => _(h, b.key),
              onDragEnd: w,
              onClick: () => v(b.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": b.key,
              children: /* @__PURE__ */ n.jsx(
                In,
                {
                  color: N(p),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => L(b.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${p + 1}`, children: p + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: C(b.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (h) => {
                          h.stopPropagation(), v(b.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${C(b.key)}. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${b.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${b.direction}`,
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
            b.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        Ln,
        {
          variant: "secondary",
          onClick: y,
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
function Oi(e, t) {
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
const cn = qe(
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
      disabled: f = !1,
      orientation: m = "horizontal",
      id: x,
      isLoading: j = !1,
      loadingComponent: g,
      error: _ = null,
      errorComponent: w,
      "data-testid": C
    } = t, {
      dataComparator: N = (S, k) => JSON.stringify(S) === JSON.stringify(k),
      filterFunction: v = (S) => S,
      booleanRenderer: L = (S) => S ? "✓" : "✗"
    } = a || {}, y = o !== void 0, M = o ?? 0, [F, b] = ne({
      focusArea: "tabs",
      focusedTabIndex: M,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), p = oe(() => ({
      selectedIndex: M,
      tabLoadingStates: new Array(s.length).fill(!1),
      tabErrors: new Array(s.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(s.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [M]), [h, R] = Rr(Oi, p);
    le(() => {
      const S = h.tabLoadingStates.length, k = s.length;
      S !== k && R({ type: "ADJUST_ARRAYS", payload: { newLength: k } });
    }, [s.length]), le(() => {
      y && R({ type: "SET_SELECTED_INDEX", payload: M });
    }, [M, y]), le(() => {
      l && l(h.globalSelectedRowData);
    }, [h.globalSelectedRowData, l]);
    const V = Z((S, k) => N(S, k), [N]), K = Z((S) => {
      S >= 0 && S < s.length && !s[S].disabled && (R({ type: "SET_SELECTED_INDEX", payload: S }), i?.(S));
    }, [s, i]), E = Z((S, k) => {
      const { key: I } = S;
      switch (I) {
        case "ArrowLeft":
          S.preventDefault();
          const G = k > 0 ? k - 1 : s.length - 1;
          K(G), b((A) => ({ ...A, focusedTabIndex: G })), W.current[G]?.focus();
          break;
        case "ArrowRight":
          S.preventDefault();
          const B = k < s.length - 1 ? k + 1 : 0;
          K(B), b((A) => ({ ...A, focusedTabIndex: B })), W.current[B]?.focus();
          break;
        case "ArrowDown":
          S.preventDefault(), b((A) => ({
            ...A,
            focusArea: "headers",
            focusedHeaderIndex: 0
          })), J(0);
          break;
        case "Home":
          S.preventDefault(), K(0), b((A) => ({ ...A, focusedTabIndex: 0 })), W.current[0]?.focus();
          break;
        case "End":
          S.preventDefault();
          const $ = s.length - 1;
          K($), b((A) => ({ ...A, focusedTabIndex: $ })), W.current[$]?.focus();
          break;
        case "Enter":
        case " ":
          S.preventDefault(), K(k);
          break;
      }
    }, [s.length, K]), W = se([]), X = se([]), Q = Z((S, k) => {
      const I = h.sortConfig || [], G = I.find((A) => A.key === k);
      let B;
      G ? G.direction === "asc" ? B = I.map(
        (A) => A.key === k ? { ...A, direction: "desc" } : A
      ) : B = I.filter((A) => A.key !== k) : B = [...I, { key: k, direction: "asc" }], R({
        type: "SET_SORT",
        payload: B
      }), s[S].onSort?.(k);
    }, [h.sortConfig, s]), J = Z((S) => {
      setTimeout(() => {
        const k = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] th:nth-child(${S + 1})`
        );
        k && k.focus();
      }, 0);
    }, [h.selectedIndex]), T = Z((S) => L(S), [L]), O = Z((S, k) => {
      setTimeout(() => {
        const I = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] tbody tr:nth-child(${S + 1}) td:nth-child(${k + 1})`
        );
        I && I.focus();
      }, 0);
    }, [h.selectedIndex]), H = Z((S, k) => {
      const { key: I } = S, G = s[h.selectedIndex], B = G?.columns.length || 0;
      switch (I) {
        case "ArrowLeft":
          S.preventDefault();
          const $ = Math.max(0, k - 1);
          b((q) => ({ ...q, focusedHeaderIndex: $ })), J($);
          break;
        case "ArrowRight":
          S.preventDefault();
          const A = Math.min(B - 1, k + 1);
          b((q) => ({ ...q, focusedHeaderIndex: A })), J(A);
          break;
        case "ArrowUp":
          S.preventDefault(), b((q) => ({
            ...q,
            focusArea: "tabs",
            focusedTabIndex: h.selectedIndex
          })), W.current[h.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          S.preventDefault(), b((q) => ({
            ...q,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: k,
            isGridActive: !0
          })), O(0, k);
          break;
        case "Home":
          S.preventDefault(), b((q) => ({ ...q, focusedHeaderIndex: 0 })), J(0);
          break;
        case "End":
          S.preventDefault();
          const D = B - 1;
          b((q) => ({ ...q, focusedHeaderIndex: D })), J(D);
          break;
        case "Enter":
        case " ":
          S.preventDefault();
          const te = G?.columns[k]?.key;
          te && Q(h.selectedIndex, te);
          break;
      }
    }, [s, h.selectedIndex, Q, b, J, O, W]), Y = Z((S, k, I) => {
      const { key: G } = S, B = s[h.selectedIndex], $ = B?.data.length || 0, A = B?.columns.length || 0;
      switch (G) {
        case "ArrowUp":
          if (S.preventDefault(), k === 0)
            b((U) => ({
              ...U,
              focusArea: "headers",
              focusedHeaderIndex: I,
              isGridActive: !1
            })), J(I);
          else {
            const U = k - 1;
            b((ee) => ({ ...ee, focusedRowIndex: U })), O(U, I);
          }
          break;
        case "ArrowDown":
          S.preventDefault();
          const D = Math.min($ - 1, k + 1);
          b((U) => ({ ...U, focusedRowIndex: D })), O(D, I);
          break;
        case "ArrowLeft":
          S.preventDefault();
          const te = Math.max(0, I - 1);
          b((U) => ({ ...U, focusedColumnIndex: te })), O(k, te);
          break;
        case "ArrowRight":
          S.preventDefault();
          const q = Math.min(A - 1, I + 1);
          b((U) => ({ ...U, focusedColumnIndex: q })), O(k, q);
          break;
        case "Home":
          S.preventDefault(), S.ctrlKey ? (b((U) => ({ ...U, focusedRowIndex: 0, focusedColumnIndex: 0 })), O(0, 0)) : (b((U) => ({ ...U, focusedColumnIndex: 0 })), O(k, 0));
          break;
        case "End":
          if (S.preventDefault(), S.ctrlKey) {
            const U = $ - 1, ee = A - 1;
            b((ie) => ({ ...ie, focusedRowIndex: U, focusedColumnIndex: ee })), O(U, ee);
          } else {
            const U = A - 1;
            b((ee) => ({ ...ee, focusedColumnIndex: U })), O(k, U);
          }
          break;
        case "Enter":
        case " ":
          if (S.preventDefault(), B && B.data[k]) {
            const U = B.data.some((ae) => "ews_data" in ae) ? v(B.data, h.filters) : B.data, ee = h.sortConfig;
            let ie = U;
            if (ee && ee.length > 0 && (ie = [...U].sort((ae, ue) => {
              for (const { key: be, direction: Ke } of ee) {
                let pe = ae[be], _e = ue[be];
                const qt = B.columns.find((Va) => Va.key === be);
                if (qt?.render && (pe = qt.render(ae), _e = qt.render(ue)), pe == null && _e == null) continue;
                if (pe == null) return Ke === "asc" ? -1 : 1;
                if (_e == null) return Ke === "asc" ? 1 : -1;
                let Ze = 0;
                if (typeof pe == "number" && typeof _e == "number" ? Ze = pe - _e : Ze = String(pe).localeCompare(String(_e), void 0, { numeric: !0, sensitivity: "base" }), Ze !== 0)
                  return Ke === "asc" ? Ze : -Ze;
              }
              return 0;
            })), ie[k]) {
              const ae = ie[k], be = h.globalSelectedRowData && V(h.globalSelectedRowData, ae) ? null : ae;
              R({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: be
              });
            }
          }
          break;
      }
    }, [s, h.selectedIndex, h.filters, h.sortConfig, v, V, R, b, J, O]), P = Z((S, k) => v(S, k), [v]);
    return Fr(r, () => ({
      selectTab: (S) => {
        S >= 0 && S < s.length && (R({ type: "SET_SELECTED_INDEX", payload: S }), i?.(S));
      },
      refreshData: (S) => {
        console.log("Refreshing data for tab:", S ?? "all");
      },
      exportData: (S) => {
        const k = S ?? h.selectedIndex, I = s[k];
        return I ? I.data : [];
      },
      getSelectedRows: (S) => h.globalSelectedRowData ? [] : [],
      clearSelection: (S) => {
        R({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (S) => {
        R({ type: "SET_FILTERS", payload: S });
      }
    }), [h.selectedIndex, h.selectedRows, s, i]), j ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": C, children: g || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : _ ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": C, children: w || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: _ })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${d}`,
        id: x,
        "data-testid": C,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${x}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Wi,
            {
              sortConfig: h.sortConfig || [],
              columns: s.flatMap(
                (S) => S.columns.map((k) => ({ key: k.key, label: k.label }))
              ).filter(
                (S, k, I) => I.findIndex((G) => G.key === S.key) === k
                // Remove duplicates
              ),
              onSortChange: (S) => {
                R({ type: "SET_SORT", payload: S });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": `${u || ""} ${x ? `${x}-navigation-help` : ""}`.trim(),
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              children: s.map((S, k) => {
                const I = k === h.selectedIndex, G = S.disabled || f;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${S.id}`,
                    "aria-controls": `panel-${S.id}`,
                    "aria-selected": I,
                    "aria-disabled": G,
                    tabIndex: I ? 0 : -1,
                    ref: (B) => {
                      W.current[k] = B;
                    },
                    onClick: () => K(k),
                    onKeyDown: (B) => E(B, k),
                    disabled: G,
                    className: `
                  aria-tabs-datagrid__tab
                  ${I ? "aria-tabs-datagrid__tab--selected" : ""}
                  ${G ? "aria-tabs-datagrid__tab--disabled" : ""}
                `.trim(),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: S.label }),
                      h.tabLoadingStates[k] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      h.tabErrors[k] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  S.id
                );
              })
            }
          ),
          s.map((S, k) => {
            const I = k === h.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${S.id}`,
                "aria-labelledby": `tab-${S.id}`,
                tabIndex: 0,
                hidden: !I,
                ref: (G) => {
                  X.current[k] = G;
                },
                className: `aria-tabs-datagrid__panel ${S.className || ""}`,
                "data-tab-panel": k,
                children: I && (() => {
                  const G = S.data.some(($) => "ews_data" in $) ? P(S.data, h.filters) : S.data, B = oe(() => {
                    const $ = h.sortConfig;
                    return !$ || $.length === 0 ? G : [...G].sort((A, D) => {
                      for (const { key: te, direction: q } of $) {
                        let U = A[te], ee = D[te];
                        const ie = S.columns.find((ue) => ue.key === te);
                        if (ie?.render && (U = ie.render(A), ee = ie.render(D)), U == null && ee == null) continue;
                        if (U == null) return 1;
                        if (ee == null) return -1;
                        let ae = 0;
                        if (typeof U == "number" && typeof ee == "number" ? ae = U - ee : typeof U == "boolean" && typeof ee == "boolean" ? ae = U === ee ? 0 : U ? 1 : -1 : ae = String(U).localeCompare(String(ee), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), ae !== 0)
                          return q === "asc" ? ae : -ae;
                      }
                      return 0;
                    });
                  }, [G, h.sortConfig, S.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": S.ariaLabel,
                      "aria-describedby": S.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: S.columns.map(($, A) => {
                          const D = h.sortConfig?.find((U) => U.key === $.key), te = !!D, q = F.focusArea === "headers" && F.focusedHeaderIndex === A;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${q ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: q ? 0 : -1,
                              onClick: () => Q(k, $.key),
                              onKeyDown: (U) => H(U, A),
                              "aria-sort": te ? D?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: $.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${te ? `sort-indicator--${D?.direction}` : ""}`, children: [
                                  h.sortConfig && h.sortConfig.length > 0 && h.sortConfig.findIndex((U) => U.key === $.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${h.sortConfig.findIndex((U) => U.key === $.key) + 1}`,
                                      "data-priority": h.sortConfig.findIndex((U) => U.key === $.key) + 1,
                                      title: `Sort priority: ${h.sortConfig.findIndex((U) => U.key === $.key) + 1}`,
                                      children: h.sortConfig.findIndex((U) => U.key === $.key) + 1
                                    }
                                  ),
                                  te && /* @__PURE__ */ n.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${D?.direction}`,
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
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: B.map(($, A) => {
                          const D = h.globalSelectedRowData && V(h.globalSelectedRowData, $), te = F.focusArea === "cells" && F.focusedRowIndex === A;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${D ? "data-row--selected" : ""} ${te ? "data-row--focused" : ""}`,
                              "aria-selected": D,
                              children: S.columns.map((q, U) => {
                                const ee = q.render ? q.render($) : $[q.key], ie = F.focusArea === "cells" && F.focusedRowIndex === A && F.focusedColumnIndex === U, ae = () => typeof ee == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  T(ee),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ee ? "Yes" : "No" })
                                ] }) : String(ee ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${ie ? "data-cell--focused" : ""}`,
                                    tabIndex: ie ? 0 : -1,
                                    onClick: () => {
                                      const be = h.globalSelectedRowData && V(h.globalSelectedRowData, $) ? null : $;
                                      R({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: be
                                      });
                                    },
                                    onKeyDown: (ue) => Y(ue, A, U),
                                    children: ae()
                                  },
                                  q.key
                                );
                              })
                            },
                            A
                          );
                        }) })
                      ]
                    }
                  );
                })()
              },
              S.id
            );
          })
        ]
      }
    );
  }
), dt = {
  asc: "↑",
  desc: "↓"
}, Ui = (e) => [...e].sort((t, r) => t.priority - r.priority);
function an(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Gi(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Yi(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function Vi(e, t) {
  const r = t.find((s) => s.id === e), a = Gi(t);
  return r ? r.priority < a : !1;
}
const Ch = ({
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
  const d = oe(() => Ui(e), [e]), f = Z((C) => {
    if (l) return;
    const N = e.map(
      (v) => v.id === C ? { ...v, direction: v.direction === "asc" ? "desc" : "asc" } : v
    );
    t(N);
  }, [e, t, l]), m = Z((C) => {
    if (l) return;
    const N = e.findIndex((L) => L.id === C);
    if (N <= 0) return;
    const v = [...e];
    [v[N], v[N - 1]] = [v[N - 1], v[N]], t(an(v));
  }, [e, t, l]), x = Z((C) => {
    if (l) return;
    const N = e.findIndex((L) => L.id === C);
    if (N >= e.length - 1 || N === -1) return;
    const v = [...e];
    [v[N], v[N + 1]] = [v[N + 1], v[N]], t(an(v));
  }, [e, t, l]), j = Z((C) => {
    if (l) return;
    const N = e.filter((v) => v.id !== C);
    t(an(N));
  }, [e, t, l]), g = Z(() => {
    l || t([]);
  }, [t, l]), _ = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const C = d.map((N, v) => {
      const L = N.direction === "asc" ? "ascending" : "descending";
      return `${v + 1}. ${N.label} (${L})`;
    });
    if (C.length === 1)
      return `Sorted by: ${C[0]}`;
    if (C.length === 2)
      return `Sorted by: ${C.join(" and ")}`;
    {
      const N = C.pop();
      return `Sorted by: ${C.join(", ")}, and ${N}`;
    }
  }, w = oe(() => {
    const C = ["sort-description"];
    return i && C.push("sort-help"), u && C.push(u), C.join(" ");
  }, [i, u]);
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
        "aria-describedby": w,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((C) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                In,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => j(C.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: C.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: C.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(C.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${C.label}. Currently ${C.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: C.direction === "asc" ? dt.asc : dt.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(C.id),
                          disabled: l || !Yi(C.id, e),
                          "aria-label": `Move ${C.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => x(C.id),
                          disabled: l || !Vi(C.id, e),
                          "aria-label": `Move ${C.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            C.id
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      Ln,
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
      dt.asc,
      "/",
      dt.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Kn = (e, t) => t.map((r) => ({
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
})), dn = [
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
], qi = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Ki = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Zi = (e) => {
  if (typeof e == "boolean") {
    const r = dn.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = dn.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, Ji = (e) => `${e.name}-${e.bed_name}`, Xi = () => ({
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
}), Qi = (e) => {
  const t = Xi();
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
  dataComparator: qi,
  filterFunction: Ki,
  booleanRenderer: Zi,
  getDataId: Ji
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
  const [r, a] = ne("cards");
  return le(() => {
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
  } = r, l = t.find((g) => g.key === a), c = l?.render ? l.render(e) : e[a || "name"] || "Untitled", u = () => s.filter((_) => !i.includes(_) && e[_]).slice(0, 3).map((_) => {
    const w = t.find((v) => v.key === _), C = w?.render ? w.render(e) : e[_];
    return `${w?.label || _}: ${C}`;
  }).join(" • "), d = () => o.length === 0 ? null : o.filter((g) => e[g] !== void 0).map((g) => {
    const _ = t.find((C) => C.key === g), w = _?.render ? _.render(e) : e[g];
    if (g === "ews_score") {
      const C = Number(w);
      return `<span class="nhsuk-tag nhsuk-tag--${C >= 7 ? "high" : C >= 3 ? "medium" : "low"} adaptive-card__ews-badge">EWS: ${w}</span>`;
    }
    return `<span class="nhsuk-tag adaptive-card__badge">${w}</span>`;
  }).join(""), f = () => e.ews_score && Number(e.ews_score) >= 7 || e.priority === "high" || e.status === "urgent" ? "primary" : "default", m = d(), x = u(), j = m ? `${x}${m ? `<div class="adaptive-card__badges">${m}</div>` : ""}` : x;
  return {
    variant: f(),
    heading: String(c),
    descriptionHtml: j,
    className: "adaptive-card adaptive-card--healthcare",
    "aria-label": `Healthcare record for ${c}`
  };
}
const jh = ({
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
  id: f,
  disabled: m = !1,
  className: x,
  ...j
}) => {
  const g = nl(e, t), _ = i !== void 0, w = i ?? 0, C = oe(() => ({
    selectedIndex: w,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [w, s.length]), [N, v] = Rr(tl, C), L = se([]);
  le(() => {
    const b = N.tabLoadingStates.length, p = s.length;
    b !== p && v({ type: "ADJUST_ARRAYS", payload: { newLength: p } });
  }, [s.length, N.tabLoadingStates.length]), le(() => {
    _ && i !== N.selectedIndex && v({ type: "SET_SELECTED_INDEX", payload: i });
  }, [_, i, N.selectedIndex]);
  const y = Z((b) => {
    b >= 0 && b < s.length && !s[b].disabled && (v({ type: "SET_SELECTED_INDEX", payload: b }), l?.(b));
  }, [s, l]), M = Z((b, p) => {
    const { key: h } = b;
    switch (h) {
      case "ArrowLeft":
        b.preventDefault();
        const R = p > 0 ? p - 1 : s.length - 1;
        y(R), L.current[R]?.focus();
        break;
      case "ArrowRight":
        b.preventDefault();
        const V = p < s.length - 1 ? p + 1 : 0;
        y(V), L.current[V]?.focus();
        break;
      case "Home":
        b.preventDefault(), y(0), L.current[0]?.focus();
        break;
      case "End":
        b.preventDefault();
        const K = s.length - 1;
        y(K), L.current[K]?.focus();
        break;
      case "Enter":
      case " ":
        b.preventDefault(), y(p);
        break;
    }
  }, [s.length, y]), F = Z((b) => {
    console.log("Card selected:", b);
  }, []);
  if (g === "cards") {
    const b = s[N.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${x || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": c,
          "aria-describedby": `${u || ""} ${f ? `${f}-navigation-help` : ""}`.trim(),
          "aria-orientation": d,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((p, h) => {
            const R = h === N.selectedIndex, V = p.disabled || m;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${p.id}`,
                "aria-controls": `panel-${p.id}`,
                "aria-selected": R,
                "aria-disabled": V,
                tabIndex: R ? 0 : -1,
                ref: (K) => {
                  L.current[h] = K;
                },
                onClick: () => y(h),
                onKeyDown: (K) => M(K, h),
                disabled: V,
                className: `
                  aria-tabs-datagrid__tab
                  ${R ? "aria-tabs-datagrid__tab--selected" : ""}
                  ${V ? "aria-tabs-datagrid__tab--disabled" : ""}
                `.trim(),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: p.label }),
                  N.tabLoadingStates[h] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  N.tabErrors[h] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              p.id
            );
          })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "tabpanel",
          id: `panel-${b?.id}`,
          "aria-labelledby": `tab-${b?.id}`,
          children: b?.data.map((p, h) => {
            if (r.cardTemplate) {
              const V = r.cardTemplate(p, b.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  className: "aria-tabs-datagrid-adaptive__card-wrapper",
                  role: "gridcell",
                  tabIndex: 0,
                  children: V
                },
                `card-${h}`
              );
            }
            const R = rl(p, b.columns, r);
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "aria-tabs-datagrid-adaptive__card-wrapper",
                role: "gridcell",
                tabIndex: 0,
                onClick: () => F(p),
                onKeyDown: (V) => {
                  (V.key === "Enter" || V.key === " ") && (V.preventDefault(), F(p));
                },
                style: { cursor: "pointer" },
                children: /* @__PURE__ */ n.jsx(Mi, { ...R })
              },
              `card-${h}`
            );
          })
        }
      )
    ] });
  }
  return g === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${x || ""}`, children: /* @__PURE__ */ n.jsx(
    cn,
    {
      tabPanels: s,
      dataConfig: o,
      ariaLabel: c,
      ariaDescription: u,
      orientation: d,
      id: f,
      disabled: m,
      selectedIndex: N.selectedIndex,
      onTabChange: y,
      className: "aria-tabs-datagrid-adaptive__table--hybrid",
      ...j
    }
  ) }) : /* @__PURE__ */ n.jsx(
    cn,
    {
      tabPanels: s,
      dataConfig: o,
      ariaLabel: c,
      ariaDescription: u,
      orientation: d,
      id: f,
      disabled: m,
      selectedIndex: N.selectedIndex,
      onTabChange: y,
      ...j
    }
  );
}, Qr = (e) => {
  const t = dn.find((r) => r.value === e);
  return t ? t.icon : null;
}, al = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = r.discountedPrice || r.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => Qr(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, sl = (e) => Kn(e, [
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
]), ol = {
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
  booleanRenderer: (e) => Qr(e),
  getDataId: (e) => `financial-${e.id}`
}, il = (e) => Kn(e, [
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
]), ll = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: al,
    createTabs: sl
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: ol,
    createTabs: il
  }
}, Cr = (e, t) => {
  const r = ll[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, jr = [
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
], cl = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, dl = () => {
  const [e, t] = ne("healthcare"), r = oe(() => ({
    healthcare: {
      title: "Healthcare Patient Management",
      description: "NHS Early Warning System with patient monitoring",
      dataConfig: el,
      tabPanels: Qi(jr),
      data: jr
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Cr("ecommerce", Nr),
      data: Nr
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Cr("financial", Tr),
      data: Tr
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: cl,
      tabPanels: Kn(Dr, [
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
        "button",
        {
          onClick: () => t(s),
          style: {
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #d1d5db",
            backgroundColor: e === s ? "#3b82f6" : "#ffffff",
            color: e === s ? "#ffffff" : "#374151",
            cursor: "pointer",
            fontWeight: "500",
            transition: "all 0.2s",
            textTransform: "capitalize"
          },
          onMouseOver: (o) => {
            e !== s && (o.currentTarget.style.backgroundColor = "#f3f4f6");
          },
          onMouseOut: (o) => {
            e !== s && (o.currentTarget.style.backgroundColor = "#ffffff");
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
      cn,
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
}, Nh = dl, Th = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: s = "medium",
  status: o = "active"
}) => {
  const i = e.nhs_number || e.nhsNumber || e.patient_id, l = e.name || e.patient_name || `${e.first_name || ""} ${e.last_name || ""}`.trim(), c = e.dob || e.date_of_birth || e.birth_date, u = e.ward || e.location || e.current_ward, d = e.condition || e.diagnosis || e.primary_condition, f = e.alert_level || e.ews_score || e.priority_level;
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
            f && /* @__PURE__ */ n.jsxs("span", { className: `nhsuk-tag healthcare-card__alert healthcare-card__alert--${ea(f)}`, children: [
              "EWS: ",
              f
            ] }),
            s === "high" && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-tag healthcare-card__priority healthcare-card__priority--high", children: "High Priority" })
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
            "button",
            {
              className: "nhsuk-button nhsuk-button--secondary healthcare-card__action",
              onClick: (m) => {
                m.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              className: "nhsuk-button nhsuk-button--secondary healthcare-card__action",
              onClick: (m) => {
                m.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              className: "nhsuk-button healthcare-card__action healthcare-card__action--primary",
              onClick: (m) => {
                m.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full"
            }
          )
        ] })
      ]
    }
  );
}, Dh = ({
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
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: Zn(s) }),
            /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: i })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
            /* @__PURE__ */ n.jsx("span", { className: `nhsuk-tag healthcare-card__status healthcare-card__status--${a}`, children: a.charAt(0).toUpperCase() + a.slice(1) }),
            u && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-tag healthcare-card__duration", children: [
              u,
              " min"
            ] })
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
            "button",
            {
              className: "nhsuk-button nhsuk-button--secondary healthcare-card__action",
              onClick: (d) => {
                d.stopPropagation(), r?.("reschedule", e);
              },
              children: "Reschedule"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              className: "nhsuk-button healthcare-card__action healthcare-card__action--primary",
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
}, Bh = ({
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
            l && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-tag healthcare-card__route", children: l }),
            d && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-tag healthcare-card__warning", children: "⚠️ Allergies" })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("dl", { className: "healthcare-card__details", children: [
          c && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--urgent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Next Due" }),
            /* @__PURE__ */ n.jsx("dd", { children: Zn(c) })
          ] }),
          u && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Prescriber" }),
            /* @__PURE__ */ n.jsx("dd", { children: u })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            "button",
            {
              className: "nhsuk-button nhsuk-button--secondary healthcare-card__action",
              onClick: (f) => {
                f.stopPropagation(), r?.("view-history", e);
              },
              children: "History"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              className: "nhsuk-button healthcare-card__action healthcare-card__action--primary",
              onClick: (f) => {
                f.stopPropagation(), r?.("administer", e);
              },
              children: "Administer"
            }
          )
        ] })
      ]
    }
  );
}, Fh = ({
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
          /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__timestamp", children: Zn(d) }),
          u && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${ul(u)}`, children: [
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
            "button",
            {
              className: "nhsuk-button nhsuk-button--secondary healthcare-card__action",
              onClick: (f) => {
                f.stopPropagation(), r?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              className: "nhsuk-button healthcare-card__action healthcare-card__action--primary",
              onClick: (f) => {
                f.stopPropagation(), r?.("record-new", e);
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
function ul(e) {
  return ea(e);
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
function Zn(e) {
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
const ta = (e) => /* @__PURE__ */ n.jsx(Lr, { ...e }), Rh = ({
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
  account: f,
  organisation: m,
  logo: x,
  className: j,
  ...g
}) => {
  const _ = {
    service: c,
    navigation: u,
    search: d,
    account: f,
    organisation: m,
    logo: x,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Xr, { ...o }),
    /* @__PURE__ */ n.jsx(Ar, { ..._ }),
    /* @__PURE__ */ n.jsx(ta, { className: j, ...g, children: /* @__PURE__ */ n.jsx(Ir, { size: s, children: /* @__PURE__ */ n.jsx(ht, { children: /* @__PURE__ */ n.jsxs(An, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Me, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Pr, { ...l })
  ] });
}, Mh = ({
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
  logo: f,
  className: m,
  ...x
}) => {
  const j = {
    service: {
      text: u,
      href: d
    },
    logo: f,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Xr, { ...o }),
    /* @__PURE__ */ n.jsx(Ar, { ...j }),
    /* @__PURE__ */ n.jsxs(ta, { className: m, ...x, children: [
      c && /* @__PURE__ */ n.jsx(ss, { ...c }),
      /* @__PURE__ */ n.jsx(Ir, { size: s, children: /* @__PURE__ */ n.jsx(ht, { children: /* @__PURE__ */ n.jsxs(An, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Me, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Pr, { ...l })
  ] });
}, ml = "150ms", pl = "300ms", gl = "500ms", bl = "cubic-bezier(0.4, 0, 1, 1)", xl = "cubic-bezier(0, 0, 0.2, 1)", yl = "cubic-bezier(0.4, 0, 0.2, 1)", _l = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", kl = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", vl = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Sl = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", wl = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Cl = "1px", jl = "2px", Nl = "4px", Tl = "4px", Dl = "4px", Bl = "2px", Fl = "1px", Rl = "0px", Ml = "4px", Ll = "8px", Il = "12px", na = "#d8dde0", ra = "#4c6272", aa = "#d8dde0", sa = "#aeb7bd", oa = "#d5281b", ia = "#005eb8", la = "#ffffff", ca = "#212b32", da = "#007f3b", ua = "#330072", ha = "#7c2855", fa = "#d5281b", ma = "#ffeb3b", pa = "#fff9c4", ga = "#ffb81c", ba = "#ed8b00", xa = "#00a499", ya = "#ae2573", _a = "#4c6272", ka = "#768692", va = "#aeb7bd", Sa = "#d8dde0", wa = "#f0f4f5", $l = "#212b32", El = "#4c6272", Hl = "#ffffff", Al = "#212b32", Pl = "#005eb8", zl = "#7c2855", Wl = "#003087", Ol = "#330072", Ul = "#ffeb3b", Gl = "#212b32", Yl = "#d8dde0", Vl = "#ffffff33", ql = "#d5281b", Kl = "#4c6272", Zl = "#ffffff", Jl = "#007f3b", Xl = "#ffffff", Ql = "#006530", ec = "#004021", tc = "#004021", nc = "#00000000", rc = "#ffffff", ac = "#005eb8", sc = "#005eb8", oc = "#d9e5f2", ic = "#c7daf0", lc = "#005eb8", cc = "#ffffff", dc = "#212b32", uc = "#d9dde0", hc = "#b3bcc2", fc = "#b3bcc2", mc = "#d5281b", pc = "#aa2016", gc = "#6a140e", bc = "#6a140e", xc = "#005eb8", yc = "#004b93", _c = "#002f5c", kc = "#002f5c", vc = "8px", Sc = "16px", wc = "12px", Cc = "16px", jc = "4px", Nc = "40px", Tc = "4px", Dc = "40px", Bc = "12px", Fc = "16px", Rc = "32px", Mc = "16px", Lc = "20px", Ic = "28px", $c = "9px", Ec = "2px", Hc = "16px", Ac = "24px", Pc = "8px", zc = "24px", Wc = "16px", Oc = "4px", Uc = "4px", Gc = "4px", Yc = "8px", Vc = "4px", qc = "16px", Kc = "#007f3b", Zc = "#006530", Jc = "#004021", Xc = "#d8dde0", Qc = "#ffffff", ed = "#768692", td = "#00000000", nd = "#ffeb3b", rd = "#00000000", ad = "#ffffff", sd = "#d9e5f2", od = "#c7daf0", id = "#005eb8", ld = "#005eb8", Ca = "8px", ja = "16px", Na = "12px", Ta = "16px", cd = "2px", dd = "4px", ud = "4px", hd = "600", fd = "#ffffff", md = "#d8dde0", pd = "#aeb7bd", gd = "#f0f4f5", bd = "#212b32", xd = "#212b32", yd = "#005eb8", Da = "16px", Ba = "32px", Fa = "16px", _d = "1px", kd = "4px", vd = "none", Sd = "0 2px 4px rgba(0, 0, 0, 0.1)", wd = "#ffffff", Cd = "#ffffff", jd = "#d8dde0", Nd = "#ffffff", Td = "#4c6272", Dd = "#ffeb3b", Bd = "#d5281b", Fd = "#aeb7bd", Rd = "#212b32", Md = "#4c6272", Ld = "#768692", Id = "#212b32", $d = "#ffffff", Ed = "600", Hd = "#d5281b", Ad = "600", Pd = "#4c6272", Ra = "4px", Ma = "40px", La = "40px", Ia = "12px", zd = "2px", Wd = "4px", Od = "0px", Ud = "16px", Gd = "18px", Yd = "24px", Vd = "32px", qd = "34px", Kd = "32px", Zd = "40px", Jd = "48px", Xd = "5.4ex", Qd = "7.2ex", eu = "9ex", tu = "10.8ex", nu = "20ex", ru = "38ex", au = "56ex", su = "44px", ou = "40px", iu = "1020px", lu = "100%", cu = "50%", du = "33.333%", uu = "25%", hu = "20%", fu = "320px", mu = "641px", pu = "1025px", gu = "1280px", bu = "960px", xu = "32px", yu = "16px", _u = "#d5281b", ku = "#d5281b", vu = "#ffffff", Su = "#007f3b", wu = "#007f3b", Cu = "#ffffff", ju = "#ffeb3b", Nu = "#ffeb3b", Tu = "#212b32", Du = "#005eb8", Bu = "#005eb8", Fu = "#ffffff", Ru = "#d8dde0", Mu = "#aeb7bd", Lu = "#768692", Iu = "0 4px 0 #004021", $u = "0 4px 0 #005eb8", Eu = "0 4px 0 #6a140e", Hu = "0 4px 0 #ffeb3b", Au = "none", Pu = "0 2px 4px rgba(0, 0, 0, 0.1)", zu = "4px", Wu = "0px", Ou = "solid", Uu = "0 0 0 3px #ffeb3b", Gu = "0 0 0 3px #ffeb3b", Yu = "none", Vu = "0 1px 3px rgba(0, 0, 0, 0.12)", qu = "0 2px 6px rgba(0, 0, 0, 0.16)", Ku = "0 4px 12px rgba(0, 0, 0, 0.20)", $a = "0", Ea = "4px", Ha = "8px", Aa = "16px", Pa = "24px", za = "32px", Wa = "40px", Oa = "48px", Ua = "56px", Ga = "64px", un = "0", hn = "0", fn = "4px", mn = "4px", pn = "8px", gn = "8px", bn = "8px", xn = "16px", yn = "16px", _n = "24px", kn = "24px", vn = "32px", Sn = "32px", wn = "40px", Cn = "40px", jn = "48px", Nn = "48px", Tn = "56px", Dn = "56px", Bn = "64px", _t = "Frutiger W01", kt = "Arial, Helvetica, sans-serif", vt = "sans-serif", St = "400", wt = "600", Ct = "400", jt = "12px", Nt = "14px", Tt = "12pt", Dt = "14px", Bt = "16px", Ft = "12pt", Rt = "16px", Mt = "19px", Lt = "13pt", It = "19px", $t = "22px", Et = "15pt", Ht = "22px", At = "26px", Pt = "17pt", zt = "27px", Wt = "36px", Ot = "20pt", Ut = "33px", Gt = "48px", Yt = "24pt", Fn = "16px", Rn = "24px", ke = {
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
}, Se = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, we = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ce = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, je = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ne = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Te = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, De = {
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
}, Zu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: ml,
  AnimationDurationNormal: pl,
  AnimationDurationSlow: gl,
  AnimationEasingBounce: _l,
  AnimationEasingEaseIn: bl,
  AnimationEasingEaseInOut: yl,
  AnimationEasingEaseOut: xl,
  BorderColorCard: aa,
  BorderColorCardHover: sa,
  BorderColorDefault: na,
  BorderColorError: oa,
  BorderColorForm: ra,
  BorderRadiusLarge: Il,
  BorderRadiusMedium: Ll,
  BorderRadiusNone: Rl,
  BorderRadiusSmall: Ml,
  BorderWidthCardBottom: Tl,
  BorderWidthDefault: Cl,
  BorderWidthFormElement: jl,
  BorderWidthFormElementError: Nl,
  BorderWidthPanel: Dl,
  BorderWidthTableCell: Fl,
  BorderWidthTableHeader: Bl,
  BreakpointDesktop: pu,
  BreakpointLargeDesktop: gu,
  BreakpointMobile: fu,
  BreakpointTablet: mu,
  ButtonBorderRadius: dd,
  ButtonBorderWidth: cd,
  ButtonPrimaryBackgroundActive: Jc,
  ButtonPrimaryBackgroundDefault: Kc,
  ButtonPrimaryBackgroundDisabled: Xc,
  ButtonPrimaryBackgroundHover: Zc,
  ButtonPrimaryBorderDefault: td,
  ButtonPrimaryBorderFocus: nd,
  ButtonPrimaryTextDefault: Qc,
  ButtonPrimaryTextDisabled: ed,
  ButtonSecondaryBackgroundActive: od,
  ButtonSecondaryBackgroundDefault: rd,
  ButtonSecondaryBackgroundHover: sd,
  ButtonSecondaryBackgroundSolid: ad,
  ButtonSecondaryBorderDefault: ld,
  ButtonSecondaryTextDefault: id,
  ButtonShadowSize: ud,
  ButtonSpacingPaddingHorizontalDesktop: Ta,
  ButtonSpacingPaddingHorizontalMobile: ja,
  ButtonSpacingPaddingVerticalDesktop: Na,
  ButtonSpacingPaddingVerticalMobile: Ca,
  ButtonTypographyWeight: hd,
  CardBackgroundDefault: fd,
  CardBorderBottom: gd,
  CardBorderDefault: md,
  CardBorderHover: pd,
  CardBorderWidthBottom: kd,
  CardBorderWidthDefault: _d,
  CardShadowDefault: vd,
  CardShadowHover: Sd,
  CardSpacingHeadingMargin: Fa,
  CardSpacingPaddingDesktop: Ba,
  CardSpacingPaddingMobile: Da,
  CardTextDescription: xd,
  CardTextHeading: bd,
  CardTextLink: yd,
  ColorBorderDefault: Yl,
  ColorBorderSecondary: Vl,
  ColorButtonLoginActive: _c,
  ColorButtonLoginBackground: xc,
  ColorButtonLoginHover: yc,
  ColorButtonLoginShadow: kc,
  ColorButtonPrimaryActive: ec,
  ColorButtonPrimaryBackground: Jl,
  ColorButtonPrimaryHover: Ql,
  ColorButtonPrimaryShadow: tc,
  ColorButtonPrimaryText: Xl,
  ColorButtonReverseActive: hc,
  ColorButtonReverseBackground: cc,
  ColorButtonReverseHover: uc,
  ColorButtonReverseShadow: fc,
  ColorButtonReverseText: dc,
  ColorButtonSecondaryActive: ic,
  ColorButtonSecondaryBackground: nc,
  ColorButtonSecondaryBackgroundSolid: rc,
  ColorButtonSecondaryBorder: ac,
  ColorButtonSecondaryHover: oc,
  ColorButtonSecondaryShadow: lc,
  ColorButtonSecondaryText: sc,
  ColorButtonWarningActive: gc,
  ColorButtonWarningBackground: mc,
  ColorButtonWarningHover: pc,
  ColorButtonWarningShadow: bc,
  ColorError: ql,
  ColorFocusBackground: Ul,
  ColorFocusText: Gl,
  ColorFormBackground: Zl,
  ColorFormBorder: Kl,
  ColorGrey1: _a,
  ColorGrey2: ka,
  ColorGrey3: va,
  ColorGrey4: Sa,
  ColorGrey5: wa,
  ColorLinkActive: Wl,
  ColorLinkDefault: Pl,
  ColorLinkHover: zl,
  ColorLinkVisited: Ol,
  ColorPrimaryBlack: ca,
  ColorPrimaryBlue: ia,
  ColorPrimaryDarkPink: ha,
  ColorPrimaryGreen: da,
  ColorPrimaryPurple: ua,
  ColorPrimaryRed: fa,
  ColorPrimaryWhite: la,
  ColorPrimaryYellow: ma,
  ColorSecondaryAquaGreen: xa,
  ColorSecondaryOrange: ba,
  ColorSecondaryPaleYellow: pa,
  ColorSecondaryPink: ya,
  ColorSecondaryWarmYellow: ga,
  ColorTextPrimary: $l,
  ColorTextPrint: Al,
  ColorTextReverse: Hl,
  ColorTextSecondary: El,
  ComponentBlur: Uc,
  ComponentBreadcrumbChevronMarginLeft: $c,
  ComponentBreadcrumbChevronMarginRight: Ec,
  ComponentBreadcrumbPaddingTopDesktop: Ac,
  ComponentBreadcrumbPaddingTopMobile: Hc,
  ComponentButtonPaddingDesktopHorizontal: Cc,
  ComponentButtonPaddingDesktopVertical: wc,
  ComponentButtonPaddingMobileHorizontal: Sc,
  ComponentButtonPaddingMobileVertical: vc,
  ComponentButtonShadowSize: jc,
  ComponentCardHeadingMargin: Mc,
  ComponentCardPaddingDesktop: Rc,
  ComponentCardPaddingMobile: Fc,
  ComponentDetails: Yc,
  ComponentExpander: Vc,
  ComponentFormCheckboxLabelPadding: Bc,
  ComponentFormCheckboxSize: Dc,
  ComponentFormInputMinHeight: Nc,
  ComponentFormInputPadding: Tc,
  ComponentLink: Gc,
  ComponentPagination: qc,
  ComponentPanelPaddingDesktop: Ic,
  ComponentPanelPaddingMobile: Lc,
  ComponentSpread: Oc,
  ComponentSummaryListCellPaddingHorizontal: zc,
  ComponentSummaryListCellPaddingVertical: Pc,
  ComponentSummaryListRowMargin: Wc,
  ElevationHigh: Ku,
  ElevationLow: Vu,
  ElevationMedium: qu,
  ElevationNone: Yu,
  FocusOutlineOffset: Wu,
  FocusOutlineStyle: Ou,
  FocusOutlineWidth: zu,
  FocusShadowButton: Gu,
  FocusShadowInput: Uu,
  FontFamilyBase: _t,
  FontFamilyFallback: kt,
  FontFamilyPrint: vt,
  FontLineHeightBase: Rn,
  FontSize14Mobile: jt,
  FontSize14Print: Tt,
  FontSize14Tablet: Nt,
  FontSize16Mobile: Dt,
  FontSize16Print: Ft,
  FontSize16Tablet: Bt,
  FontSize19Mobile: Rt,
  FontSize19Print: Lt,
  FontSize19Tablet: Mt,
  FontSize22Mobile: It,
  FontSize22Print: Et,
  FontSize22Tablet: $t,
  FontSize26Mobile: Ht,
  FontSize26Print: Pt,
  FontSize26Tablet: At,
  FontSize36Mobile: zt,
  FontSize36Print: Ot,
  FontSize36Tablet: Wt,
  FontSize48Mobile: Ut,
  FontSize48Print: Yt,
  FontSize48Tablet: Gt,
  FontSizeBase: Fn,
  FontWeightBold: wt,
  FontWeightLight: Ct,
  FontWeightNormal: St,
  FormBorderRadius: Od,
  FormBorderWidthDefault: zd,
  FormBorderWidthError: Wd,
  FormErrorTextDefault: Hd,
  FormErrorTypographyWeight: Ad,
  FormHintTextDefault: Pd,
  FormInputBackgroundDefault: wd,
  FormInputBackgroundDisabled: jd,
  FormInputBackgroundError: Nd,
  FormInputBackgroundFocus: Cd,
  FormInputBorderDefault: Td,
  FormInputBorderDisabled: Fd,
  FormInputBorderError: Bd,
  FormInputBorderFocus: Dd,
  FormInputTextDefault: Rd,
  FormInputTextDisabled: Ld,
  FormInputTextPlaceholder: Md,
  FormLabelTextDefault: Id,
  FormLabelTextRequired: $d,
  FormLabelTypographyWeight: Ed,
  FormSpacingCheckboxLabelPadding: Ia,
  FormSpacingCheckboxSize: La,
  FormSpacingInputMinHeight: Ma,
  FormSpacingInputPadding: Ra,
  GridGutter: xu,
  GridGutterHalf: yu,
  GridPageWidth: bu,
  HeadingsNhsukHeadingL: ve,
  HeadingsNhsukHeadingM: Se,
  HeadingsNhsukHeadingS: we,
  HeadingsNhsukHeadingXl: ke,
  HeadingsNhsukHeadingXs: Ce,
  LayoutColumnActions: hu,
  LayoutColumnFull: lu,
  LayoutColumnHalf: cu,
  LayoutColumnQuarter: uu,
  LayoutColumnThird: du,
  LayoutContainerMaxWidth: iu,
  ParagraphsBody: je,
  ParagraphsBodyLarge: Ne,
  ParagraphsBodySmall: Te,
  ParagraphsLedeText: De,
  ParagraphsLedeTextSmall: Be,
  ShadowButtonDefault: Iu,
  ShadowButtonFocus: Hu,
  ShadowButtonSecondary: $u,
  ShadowButtonWarning: Eu,
  ShadowCardDefault: Au,
  ShadowCardHover: Pu,
  SizeButtonMinHeightDesktop: ou,
  SizeButtonMinHeightMobile: su,
  SizeFormControlLarge: Jd,
  SizeFormControlMedium: Zd,
  SizeFormControlSmall: Kd,
  SizeFormInputWidth2xl: ru,
  SizeFormInputWidth3xl: au,
  SizeFormInputWidthLg: tu,
  SizeFormInputWidthMd: eu,
  SizeFormInputWidthSm: Qd,
  SizeFormInputWidthXl: nu,
  SizeFormInputWidthXs: Xd,
  SizeIconExtraLarge: Vd,
  SizeIconLarge: Yd,
  SizeIconMedium: Gd,
  SizeIconNhsDefault: qd,
  SizeIconSmall: Ud,
  Spacing0: $a,
  Spacing1: Ea,
  Spacing2: Ha,
  Spacing3: Aa,
  Spacing4: Pa,
  Spacing5: za,
  Spacing6: Wa,
  Spacing7: Oa,
  Spacing8: Ua,
  Spacing9: Ga,
  SpacingResponsive0Mobile: un,
  SpacingResponsive0Tablet: hn,
  SpacingResponsive1Mobile: fn,
  SpacingResponsive1Tablet: mn,
  SpacingResponsive2Mobile: pn,
  SpacingResponsive2Tablet: gn,
  SpacingResponsive3Mobile: bn,
  SpacingResponsive3Tablet: xn,
  SpacingResponsive4Mobile: yn,
  SpacingResponsive4Tablet: _n,
  SpacingResponsive5Mobile: kn,
  SpacingResponsive5Tablet: vn,
  SpacingResponsive6Mobile: Sn,
  SpacingResponsive6Tablet: wn,
  SpacingResponsive7Mobile: Cn,
  SpacingResponsive7Tablet: jn,
  SpacingResponsive8Mobile: Nn,
  SpacingResponsive8Tablet: Tn,
  SpacingResponsive9Mobile: Dn,
  SpacingResponsive9Tablet: Bn,
  StateDisabledBackground: Ru,
  StateDisabledBorder: Mu,
  StateDisabledText: Lu,
  StateErrorBackground: _u,
  StateErrorBorder: ku,
  StateErrorText: vu,
  StateInfoBackground: Du,
  StateInfoBorder: Bu,
  StateInfoText: Fu,
  StateSuccessBackground: Su,
  StateSuccessBorder: wu,
  StateSuccessText: Cu,
  StateWarningBackground: ju,
  StateWarningBorder: Nu,
  StateWarningText: Tu,
  TransitionButtonDefault: kl,
  TransitionButtonShadow: vl,
  TransitionCardHover: wl,
  TransitionInputFocus: Sl
}, Symbol.toStringTag, { value: "Module" })), Lh = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Ih = ({
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
), $h = ({
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
), Eh = ({
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
), Hh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), Ah = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), Ph = ({
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
), zh = ({
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
), Wh = ({
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
), Oh = ({
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
), Uh = ({
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
), Gh = () => oe(() => Zu, []), Yh = () => oe(() => ({
  // Border colors
  BorderColorDefault: na,
  BorderColorForm: ra,
  BorderColorCard: aa,
  BorderColorCardHover: sa,
  BorderColorError: oa,
  // Primary colors
  ColorPrimaryBlue: ia,
  ColorPrimaryWhite: la,
  ColorPrimaryBlack: ca,
  ColorPrimaryGreen: da,
  ColorPrimaryPurple: ua,
  ColorPrimaryDarkPink: ha,
  ColorPrimaryRed: fa,
  ColorPrimaryYellow: ma,
  // Secondary colors
  ColorSecondaryPaleYellow: pa,
  ColorSecondaryWarmYellow: ga,
  ColorSecondaryOrange: ba,
  ColorSecondaryAquaGreen: xa,
  ColorSecondaryPink: ya,
  // Grey scale
  ColorGrey1: _a,
  ColorGrey2: ka,
  ColorGrey3: va,
  ColorGrey4: Sa,
  ColorGrey5: wa
}), []), Vh = () => oe(() => ({
  Spacing0: $a,
  Spacing1: Ea,
  Spacing2: Ha,
  Spacing3: Aa,
  Spacing4: Pa,
  Spacing5: za,
  Spacing6: Wa,
  Spacing7: Oa,
  Spacing8: Ua,
  Spacing9: Ga
}), []), qh = () => oe(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: jt,
    Size16: Dt,
    Size19: Rt,
    Size22: It,
    Size26: Ht,
    Size36: zt,
    Size48: Ut
  },
  Tablet: {
    Size14: Nt,
    Size16: Bt,
    Size19: Mt,
    Size22: $t,
    Size26: At,
    Size36: Wt,
    Size48: Gt
  },
  Print: {
    Size14: Tt,
    Size16: Ft,
    Size19: Lt,
    Size22: Et,
    Size26: Pt,
    Size36: Ot,
    Size48: Yt
  },
  Family: {
    Base: _t,
    Fallback: kt,
    Print: vt
  },
  Weight: {
    Normal: St,
    Bold: wt,
    Light: Ct
  },
  Base: {
    Size: Fn,
    LineHeight: Rn
  },
  // Backward compatibility - individual exports
  FontFamilyBase: _t,
  FontFamilyFallback: kt,
  FontFamilyPrint: vt,
  FontWeightNormal: St,
  FontWeightBold: wt,
  FontWeightLight: Ct,
  FontSize14Mobile: jt,
  FontSize14Tablet: Nt,
  FontSize14Print: Tt,
  FontSize16Mobile: Dt,
  FontSize16Tablet: Bt,
  FontSize16Print: Ft,
  FontSize19Mobile: Rt,
  FontSize19Tablet: Mt,
  FontSize19Print: Lt,
  FontSize22Mobile: It,
  FontSize22Tablet: $t,
  FontSize22Print: Et,
  FontSize26Mobile: Ht,
  FontSize26Tablet: At,
  FontSize26Print: Pt,
  FontSize36Mobile: zt,
  FontSize36Tablet: Wt,
  FontSize36Print: Ot,
  FontSize48Mobile: Ut,
  FontSize48Tablet: Gt,
  FontSize48Print: Yt,
  FontSizeBase: Fn,
  FontLineHeightBase: Rn
}), []), Kh = () => oe(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: un,
    Size1: fn,
    Size2: pn,
    Size3: bn,
    Size4: yn,
    Size5: kn,
    Size6: Sn,
    Size7: Cn,
    Size8: Nn,
    Size9: Dn
  },
  Tablet: {
    Size0: hn,
    Size1: mn,
    Size2: gn,
    Size3: xn,
    Size4: _n,
    Size5: vn,
    Size6: wn,
    Size7: jn,
    Size8: Tn,
    Size9: Bn
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: un,
  SpacingResponsive0Tablet: hn,
  SpacingResponsive1Mobile: fn,
  SpacingResponsive1Tablet: mn,
  SpacingResponsive2Mobile: pn,
  SpacingResponsive2Tablet: gn,
  SpacingResponsive3Mobile: bn,
  SpacingResponsive3Tablet: xn,
  SpacingResponsive4Mobile: yn,
  SpacingResponsive4Tablet: _n,
  SpacingResponsive5Mobile: kn,
  SpacingResponsive5Tablet: vn,
  SpacingResponsive6Mobile: Sn,
  SpacingResponsive6Tablet: wn,
  SpacingResponsive7Mobile: Cn,
  SpacingResponsive7Tablet: jn,
  SpacingResponsive8Mobile: Nn,
  SpacingResponsive8Tablet: Tn,
  SpacingResponsive9Mobile: Dn,
  SpacingResponsive9Tablet: Bn
}), []), Zh = () => oe(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Ca,
  ButtonSpacingPaddingHorizontalMobile: ja,
  ButtonSpacingPaddingVerticalDesktop: Na,
  ButtonSpacingPaddingHorizontalDesktop: Ta,
  // Card spacing	
  CardSpacingPaddingMobile: Da,
  CardSpacingPaddingDesktop: Ba,
  CardSpacingHeadingMargin: Fa,
  // Form spacing
  FormSpacingInputPadding: Ra,
  FormSpacingInputMinHeight: Ma,
  FormSpacingCheckboxSize: La,
  FormSpacingCheckboxLabelPadding: Ia
}), []), Jh = () => oe(() => ({
  xl: ke,
  l: ve,
  m: Se,
  s: we,
  xs: Ce
}), []), Xh = () => oe(() => ({
  body: je,
  bodyLarge: Ne,
  bodySmall: Te,
  ledeText: De,
  ledeTextSmall: Be
}), []), Qh = () => oe(() => ({
  headings: {
    xl: ke,
    l: ve,
    m: Se,
    s: we,
    xs: Ce
  },
  paragraphs: {
    body: je,
    bodyLarge: Ne,
    bodySmall: Te,
    ledeText: De,
    ledeTextSmall: Be
  },
  fonts: {
    family: {
      base: _t,
      fallback: kt,
      print: vt
    },
    weight: {
      normal: St,
      bold: wt,
      light: Ct
    },
    sizes: {
      mobile: {
        size14: jt,
        size16: Dt,
        size19: Rt,
        size22: It,
        size26: Ht,
        size36: zt,
        size48: Ut
      },
      tablet: {
        size14: Nt,
        size16: Bt,
        size19: Mt,
        size22: $t,
        size26: At,
        size36: Wt,
        size48: Gt
      },
      print: {
        size14: Tt,
        size16: Ft,
        size19: Lt,
        size22: Et,
        size26: Pt,
        size36: Ot,
        size48: Yt
      }
    }
  }
}), []), Ya = {
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
function ef(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...Ya, ...e }, a = [];
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
function tf(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...Ya, ...e };
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
const nf = '"Frutiger W01", Arial, Helvetica, sans-serif', rf = "Arial, Helvetica, sans-serif";
async function af() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Mn as Account,
  Xu as ActionLink,
  jh as AdaptiveDataGrid,
  ml as AnimationDurationFast,
  pl as AnimationDurationNormal,
  gl as AnimationDurationSlow,
  _l as AnimationEasingBounce,
  bl as AnimationEasingEaseIn,
  yl as AnimationEasingEaseInOut,
  xl as AnimationEasingEaseOut,
  Dh as AppointmentCard,
  zi as AriaDataGrid,
  cn as AriaTabsDataGrid,
  jh as AriaTabsDataGridAdaptive,
  ss as BackLink,
  aa as BorderColorCard,
  sa as BorderColorCardHover,
  na as BorderColorDefault,
  oa as BorderColorError,
  ra as BorderColorForm,
  Il as BorderRadiusLarge,
  Ll as BorderRadiusMedium,
  Rl as BorderRadiusNone,
  Ml as BorderRadiusSmall,
  Tl as BorderWidthCardBottom,
  Cl as BorderWidthDefault,
  jl as BorderWidthFormElement,
  Nl as BorderWidthFormElementError,
  Dl as BorderWidthPanel,
  Fl as BorderWidthTableCell,
  Bl as BorderWidthTableHeader,
  Ri as Breadcrumb,
  pu as BreakpointDesktop,
  gu as BreakpointLargeDesktop,
  fu as BreakpointMobile,
  mu as BreakpointTablet,
  Ln as Button,
  dd as ButtonBorderRadius,
  cd as ButtonBorderWidth,
  Jc as ButtonPrimaryBackgroundActive,
  Kc as ButtonPrimaryBackgroundDefault,
  Xc as ButtonPrimaryBackgroundDisabled,
  Zc as ButtonPrimaryBackgroundHover,
  td as ButtonPrimaryBorderDefault,
  nd as ButtonPrimaryBorderFocus,
  Qc as ButtonPrimaryTextDefault,
  ed as ButtonPrimaryTextDisabled,
  od as ButtonSecondaryBackgroundActive,
  rd as ButtonSecondaryBackgroundDefault,
  sd as ButtonSecondaryBackgroundHover,
  ad as ButtonSecondaryBackgroundSolid,
  ld as ButtonSecondaryBorderDefault,
  id as ButtonSecondaryTextDefault,
  ud as ButtonShadowSize,
  Ta as ButtonSpacingPaddingHorizontalDesktop,
  ja as ButtonSpacingPaddingHorizontalMobile,
  Na as ButtonSpacingPaddingVerticalDesktop,
  Ca as ButtonSpacingPaddingVerticalMobile,
  hd as ButtonTypographyWeight,
  Mi as Card,
  fd as CardBackgroundDefault,
  gd as CardBorderBottom,
  md as CardBorderDefault,
  pd as CardBorderHover,
  kd as CardBorderWidthBottom,
  _d as CardBorderWidthDefault,
  ph as CardGroup,
  gh as CardGroupItem,
  vd as CardShadowDefault,
  Sd as CardShadowHover,
  Fa as CardSpacingHeadingMargin,
  Ba as CardSpacingPaddingDesktop,
  Da as CardSpacingPaddingMobile,
  xd as CardTextDescription,
  bd as CardTextHeading,
  yd as CardTextLink,
  bh as CareCard,
  Qu as CharacterCount,
  os as Checkbox,
  is as Checkboxes,
  Yl as ColorBorderDefault,
  Vl as ColorBorderSecondary,
  _c as ColorButtonLoginActive,
  xc as ColorButtonLoginBackground,
  yc as ColorButtonLoginHover,
  kc as ColorButtonLoginShadow,
  ec as ColorButtonPrimaryActive,
  Jl as ColorButtonPrimaryBackground,
  Ql as ColorButtonPrimaryHover,
  tc as ColorButtonPrimaryShadow,
  Xl as ColorButtonPrimaryText,
  hc as ColorButtonReverseActive,
  cc as ColorButtonReverseBackground,
  uc as ColorButtonReverseHover,
  fc as ColorButtonReverseShadow,
  dc as ColorButtonReverseText,
  ic as ColorButtonSecondaryActive,
  nc as ColorButtonSecondaryBackground,
  rc as ColorButtonSecondaryBackgroundSolid,
  ac as ColorButtonSecondaryBorder,
  oc as ColorButtonSecondaryHover,
  lc as ColorButtonSecondaryShadow,
  sc as ColorButtonSecondaryText,
  gc as ColorButtonWarningActive,
  mc as ColorButtonWarningBackground,
  pc as ColorButtonWarningHover,
  bc as ColorButtonWarningShadow,
  ql as ColorError,
  Ul as ColorFocusBackground,
  Gl as ColorFocusText,
  Zl as ColorFormBackground,
  Kl as ColorFormBorder,
  _a as ColorGrey1,
  ka as ColorGrey2,
  va as ColorGrey3,
  Sa as ColorGrey4,
  wa as ColorGrey5,
  Wl as ColorLinkActive,
  Pl as ColorLinkDefault,
  zl as ColorLinkHover,
  Ol as ColorLinkVisited,
  ca as ColorPrimaryBlack,
  ia as ColorPrimaryBlue,
  ha as ColorPrimaryDarkPink,
  da as ColorPrimaryGreen,
  ua as ColorPrimaryPurple,
  fa as ColorPrimaryRed,
  la as ColorPrimaryWhite,
  ma as ColorPrimaryYellow,
  xa as ColorSecondaryAquaGreen,
  ba as ColorSecondaryOrange,
  pa as ColorSecondaryPaleYellow,
  ya as ColorSecondaryPink,
  ga as ColorSecondaryWarmYellow,
  $l as ColorTextPrimary,
  Al as ColorTextPrint,
  Hl as ColorTextReverse,
  El as ColorTextSecondary,
  An as Column,
  Uc as ComponentBlur,
  $c as ComponentBreadcrumbChevronMarginLeft,
  Ec as ComponentBreadcrumbChevronMarginRight,
  Ac as ComponentBreadcrumbPaddingTopDesktop,
  Hc as ComponentBreadcrumbPaddingTopMobile,
  Cc as ComponentButtonPaddingDesktopHorizontal,
  wc as ComponentButtonPaddingDesktopVertical,
  Sc as ComponentButtonPaddingMobileHorizontal,
  vc as ComponentButtonPaddingMobileVertical,
  jc as ComponentButtonShadowSize,
  Mc as ComponentCardHeadingMargin,
  Rc as ComponentCardPaddingDesktop,
  Fc as ComponentCardPaddingMobile,
  Yc as ComponentDetails,
  Vc as ComponentExpander,
  Bc as ComponentFormCheckboxLabelPadding,
  Dc as ComponentFormCheckboxSize,
  Nc as ComponentFormInputMinHeight,
  Tc as ComponentFormInputPadding,
  Gc as ComponentLink,
  qc as ComponentPagination,
  Ic as ComponentPanelPaddingDesktop,
  Lc as ComponentPanelPaddingMobile,
  Oc as ComponentSpread,
  zc as ComponentSummaryListCellPaddingHorizontal,
  Pc as ComponentSummaryListCellPaddingVertical,
  Wc as ComponentSummaryListRowMargin,
  Lr as Container,
  mh as ContentsList,
  Ya as DEFAULT_FONT_CONFIG,
  wh as DashboardSummaryGrid,
  ih as DateInput,
  Ii as Details,
  $i as DoDontList,
  Ku as ElevationHigh,
  Vu as ElevationLow,
  qu as ElevationMedium,
  Yu as ElevationNone,
  tr as ErrorMessage,
  oh as ErrorSummary,
  Ei as Expander,
  he as FRUTIGER_FONT_FILES,
  Hn as Fieldset,
  Wu as FocusOutlineOffset,
  Ou as FocusOutlineStyle,
  zu as FocusOutlineWidth,
  Gu as FocusShadowButton,
  Uu as FocusShadowInput,
  _t as FontFamilyBase,
  kt as FontFamilyFallback,
  vt as FontFamilyPrint,
  Rn as FontLineHeightBase,
  jt as FontSize14Mobile,
  Tt as FontSize14Print,
  Nt as FontSize14Tablet,
  Dt as FontSize16Mobile,
  Ft as FontSize16Print,
  Bt as FontSize16Tablet,
  Rt as FontSize19Mobile,
  Lt as FontSize19Print,
  Mt as FontSize19Tablet,
  It as FontSize22Mobile,
  Et as FontSize22Print,
  $t as FontSize22Tablet,
  Ht as FontSize26Mobile,
  Pt as FontSize26Print,
  At as FontSize26Tablet,
  zt as FontSize36Mobile,
  Ot as FontSize36Print,
  Wt as FontSize36Tablet,
  Ut as FontSize48Mobile,
  Yt as FontSize48Print,
  Gt as FontSize48Tablet,
  Fn as FontSizeBase,
  wt as FontWeightBold,
  Ct as FontWeightLight,
  St as FontWeightNormal,
  Pr as Footer,
  Od as FormBorderRadius,
  zd as FormBorderWidthDefault,
  Wd as FormBorderWidthError,
  Hd as FormErrorTextDefault,
  Ad as FormErrorTypographyWeight,
  Pd as FormHintTextDefault,
  wd as FormInputBackgroundDefault,
  jd as FormInputBackgroundDisabled,
  Nd as FormInputBackgroundError,
  Cd as FormInputBackgroundFocus,
  Td as FormInputBorderDefault,
  Fd as FormInputBorderDisabled,
  Bd as FormInputBorderError,
  Dd as FormInputBorderFocus,
  Rd as FormInputTextDefault,
  Ld as FormInputTextDisabled,
  Md as FormInputTextPlaceholder,
  Id as FormLabelTextDefault,
  $d as FormLabelTextRequired,
  Ed as FormLabelTypographyWeight,
  Ia as FormSpacingCheckboxLabelPadding,
  La as FormSpacingCheckboxSize,
  Ma as FormSpacingInputMinHeight,
  Ra as FormSpacingInputPadding,
  hh as GanttChart,
  hs as Grid,
  xu as GridGutter,
  yu as GridGutterHalf,
  bu as GridPageWidth,
  Ar as Header,
  dh as HeaderSSR,
  Hr as HeaderSearch,
  uh as HeaderStatic,
  Me as Heading,
  ve as HeadingsNhsukHeadingL,
  Se as HeadingsNhsukHeadingM,
  we as HeadingsNhsukHeadingS,
  ke as HeadingsNhsukHeadingXl,
  Ce as HeadingsNhsukHeadingXs,
  ys as Hero,
  Mr as Hint,
  Sh as Images,
  $n as Input,
  xh as InsetText,
  En as Label,
  hu as LayoutColumnActions,
  lu as LayoutColumnFull,
  cu as LayoutColumnHalf,
  uu as LayoutColumnQuarter,
  du as LayoutColumnThird,
  iu as LayoutContainerMaxWidth,
  ps as List,
  Ir as MainWrapper,
  Bh as MedicationCard,
  Ph as NHSBodyText,
  zh as NHSBodyTextLarge,
  Wh as NHSBodyTextSmall,
  Ih as NHSHeading1,
  $h as NHSHeading2,
  Eh as NHSHeading3,
  Hh as NHSHeading4,
  Ah as NHSHeading5,
  Oh as NHSLedeText,
  Uh as NHSLedeTextSmall,
  ch as NHSThemeProvider,
  rf as NHS_FALLBACK_FONT_STACK,
  nf as NHS_FONT_STACK,
  Rh as PageTemplate,
  fh as Pagination,
  Li as Panel,
  je as ParagraphsBody,
  Ne as ParagraphsBodyLarge,
  Te as ParagraphsBodySmall,
  De as ParagraphsLedeText,
  Be as ParagraphsLedeTextSmall,
  Th as PatientCard,
  eh as Radios,
  jh as ResponsiveDataGrid,
  Nh as ResponsiveDataGridDemo,
  ht as Row,
  us as Select,
  cs as SelectOption,
  Iu as ShadowButtonDefault,
  Hu as ShadowButtonFocus,
  $u as ShadowButtonSecondary,
  Eu as ShadowButtonWarning,
  Au as ShadowCardDefault,
  Pu as ShadowCardHover,
  ou as SizeButtonMinHeightDesktop,
  su as SizeButtonMinHeightMobile,
  Jd as SizeFormControlLarge,
  Zd as SizeFormControlMedium,
  Kd as SizeFormControlSmall,
  ru as SizeFormInputWidth2xl,
  au as SizeFormInputWidth3xl,
  tu as SizeFormInputWidthLg,
  eu as SizeFormInputWidthMd,
  Qd as SizeFormInputWidthSm,
  nu as SizeFormInputWidthXl,
  Xd as SizeFormInputWidthXs,
  Vd as SizeIconExtraLarge,
  Yd as SizeIconLarge,
  Gd as SizeIconMedium,
  qd as SizeIconNhsDefault,
  Ud as SizeIconSmall,
  Xr as SkipLink,
  Ch as SortStatusControl,
  $a as Spacing0,
  Ea as Spacing1,
  Ha as Spacing2,
  Aa as Spacing3,
  Pa as Spacing4,
  za as Spacing5,
  Wa as Spacing6,
  Oa as Spacing7,
  Ua as Spacing8,
  Ga as Spacing9,
  un as SpacingResponsive0Mobile,
  hn as SpacingResponsive0Tablet,
  fn as SpacingResponsive1Mobile,
  mn as SpacingResponsive1Tablet,
  pn as SpacingResponsive2Mobile,
  gn as SpacingResponsive2Tablet,
  bn as SpacingResponsive3Mobile,
  xn as SpacingResponsive3Tablet,
  yn as SpacingResponsive4Mobile,
  _n as SpacingResponsive4Tablet,
  kn as SpacingResponsive5Mobile,
  vn as SpacingResponsive5Tablet,
  Sn as SpacingResponsive6Mobile,
  wn as SpacingResponsive6Tablet,
  Cn as SpacingResponsive7Mobile,
  jn as SpacingResponsive7Tablet,
  Nn as SpacingResponsive8Mobile,
  Tn as SpacingResponsive8Tablet,
  Dn as SpacingResponsive9Mobile,
  Bn as SpacingResponsive9Tablet,
  th as SpacingUtilities,
  Ru as StateDisabledBackground,
  Mu as StateDisabledBorder,
  Lu as StateDisabledText,
  _u as StateErrorBackground,
  ku as StateErrorBorder,
  vu as StateErrorText,
  Du as StateInfoBackground,
  Bu as StateInfoBorder,
  Fu as StateInfoText,
  Su as StateSuccessBackground,
  wu as StateSuccessBorder,
  Cu as StateSuccessText,
  ju as StateWarningBackground,
  Nu as StateWarningBorder,
  Tu as StateWarningText,
  Pi as SummaryCard,
  yh as SummaryList,
  _h as Table,
  kh as Tabs,
  In as Tag,
  Hi as TaskList,
  ls as Textarea,
  Mh as TransactionalPageTemplate,
  kl as TransitionButtonDefault,
  vl as TransitionButtonShadow,
  wl as TransitionCardHover,
  Sl as TransitionInputFocus,
  Fh as VitalsCard,
  sh as WIDTH_FRACTIONS,
  vh as WarningCallout,
  ta as WidthContainer,
  rh as WidthUtilities,
  af as checkFrutigerLoaded,
  Kn as createGenericTabsConfig,
  Qi as createTCHTabsConfig,
  ef as generateFrutigerFontFace,
  Lh as getResponsiveStyles,
  nh as getSpacingClass,
  ah as getWidthClass,
  tf as preloadFrutigerFonts,
  el as tchDataConfig,
  Yh as useColors,
  Zh as useComponentSpacing,
  Jh as useNHSHeadings,
  Xh as useNHSParagraphs,
  lh as useNHSTheme,
  Qh as useNHSTypographySystem,
  Kh as useResponsiveSpacing,
  Vh as useSpacing,
  Gh as useTokens,
  qh as useTypography
};
//# sourceMappingURL=index.esm.js.map
