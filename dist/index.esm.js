import * as fe from "react";
import Be, { useState as pe, useEffect as ye, useCallback as ee, createElement as Zr, useRef as xe, useMemo as ve, useContext as ws, createContext as Ss, forwardRef as ut, useImperativeHandle as Jr, useReducer as Xr } from "react";
function Cs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wt = { exports: {} }, ht = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function js() {
  if (fr) return ht;
  fr = 1;
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
  return ht.Fragment = t, ht.jsx = r, ht.jsxs = r, ht;
}
var ft = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function Ns() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(N) {
      if (N == null) return null;
      if (typeof N == "function")
        return N.$$typeof === k ? null : N.displayName || N.name || null;
      if (typeof N == "string") return N;
      switch (N) {
        case x:
          return "Fragment";
        case F:
          return "Profiler";
        case j:
          return "StrictMode";
        case $:
          return "Suspense";
        case g:
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
          case R:
            return (N._context.displayName || "Context") + ".Consumer";
          case w:
            var Y = N.render;
            return N = N.displayName, N || (N = Y.displayName || Y.name || "", N = N !== "" ? "ForwardRef(" + N + ")" : "ForwardRef"), N;
          case M:
            return Y = N.displayName || null, Y !== null ? Y : e(N.type) || "Memo";
          case D:
            Y = N._payload, N = N._init;
            try {
              return e(N(Y));
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
        var Y = !1;
      } catch {
        Y = !0;
      }
      if (Y) {
        Y = console;
        var A = Y.error, O = typeof Symbol == "function" && Symbol.toStringTag && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return A.call(
          Y,
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
        var Y = e(N);
        return Y ? "<" + Y + ">" : "<...>";
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
      if (_.call(N, "key")) {
        var Y = Object.getOwnPropertyDescriptor(N, "key").get;
        if (Y && Y.isReactWarning) return !1;
      }
      return N.key !== void 0;
    }
    function l(N, Y) {
      function A() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          Y
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(N, "key", {
        get: A,
        configurable: !0
      });
    }
    function c() {
      var N = e(this.type);
      return Q[N] || (Q[N] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), N = this.props.ref, N !== void 0 ? N : null;
    }
    function u(N, Y, A, O, q, de, m, T) {
      return A = de.ref, N = {
        $$typeof: v,
        type: N,
        key: Y,
        props: de,
        _owner: q
      }, (A !== void 0 ? A : null) !== null ? Object.defineProperty(N, "ref", {
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
        value: m
      }), Object.defineProperty(N, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    }
    function d(N, Y, A, O, q, de, m, T) {
      var G = Y.children;
      if (G !== void 0)
        if (O)
          if (W(G)) {
            for (O = 0; O < G.length; O++)
              f(G[O]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(G);
      if (_.call(Y, "key")) {
        G = e(N);
        var E = Object.keys(Y).filter(function(z) {
          return z !== "key";
        });
        O = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", le[G + O] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          G,
          E,
          G
        ), le[G + O] = !0);
      }
      if (G = null, A !== void 0 && (r(A), G = "" + A), i(Y) && (r(Y.key), G = "" + Y.key), "key" in Y) {
        A = {};
        for (var U in Y)
          U !== "key" && (A[U] = Y[U]);
      } else A = Y;
      return G && l(
        A,
        typeof N == "function" ? N.displayName || N.name || "Unknown" : N
      ), u(
        N,
        G,
        de,
        q,
        o(),
        A,
        m,
        T
      );
    }
    function f(N) {
      typeof N == "object" && N !== null && N.$$typeof === v && N._store && (N._store.validated = 1);
    }
    var p = Be, v = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), L = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), h = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, W = Array.isArray, ae = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(N) {
        return N();
      }
    };
    var P, Q = {}, ne = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), ie = ae(a(s)), le = {};
    ft.Fragment = x, ft.jsx = function(N, Y, A, O, q) {
      var de = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        N,
        Y,
        A,
        !1,
        O,
        q,
        de ? Error("react-stack-top-frame") : ne,
        de ? ae(a(N)) : ie
      );
    }, ft.jsxs = function(N, Y, A, O, q) {
      var de = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        N,
        Y,
        A,
        !0,
        O,
        q,
        de ? Error("react-stack-top-frame") : ne,
        de ? ae(a(N)) : ie
      );
    };
  }()), ft;
}
var pr;
function Ts() {
  return pr || (pr = 1, process.env.NODE_ENV === "production" ? wt.exports = js() : wt.exports = Ns()), wt.exports;
}
var n = Ts(), fn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var gr;
function Ds() {
  return gr || (gr = 1, function(e) {
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
  }(fn)), fn.exports;
}
var Fs = Ds();
const X = /* @__PURE__ */ Cs(Fs), Ph = ({
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
}, Zn = ({
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
}, { forwardRef: Bs, useCallback: Ze, useState: mn } = fe;
function Is(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [u, d] = mn(!1), [f, p] = mn(!1), [v, B] = mn(!1), x = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    o !== "default" ? `nhs-aria-button--${o}` : "",
    s ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), j = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", F = {
    ...u && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...v && { "data-focused": "true" },
    ...j && { "data-disabled": "true" }
  }, R = Ze(() => !j && d(!0), [j]), L = Ze(() => d(!1), []), w = Ze(() => !j && p(!0), [j]), $ = Ze(() => {
    p(!1), d(!1);
  }, []), g = Ze(() => B(!0), []), M = Ze(() => B(!1), []), D = Ze((h) => {
    h.key === " " && ("href" in c || h.currentTarget.getAttribute("role") === "button") && (h.preventDefault(), h.currentTarget.click());
  }, [c]), C = Ze((h) => {
    if (l) {
      const _ = h.currentTarget;
      if (_.getAttribute("data-processing") === "true") {
        h.preventDefault();
        return;
      }
      _.setAttribute("data-processing", "true"), setTimeout(() => {
        _.removeAttribute("data-processing");
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
        onKeyDown: (_) => {
          h.onKeyDown?.(_), D(_);
        },
        onClick: (_) => {
          h.onClick?.(_), C(_);
        },
        onMouseDown: (_) => {
          h.onMouseDown?.(_), R();
        },
        onMouseUp: (_) => {
          h.onMouseUp?.(_), L();
        },
        onMouseEnter: (_) => {
          h.onMouseEnter?.(_), w();
        },
        onMouseLeave: (_) => {
          h.onMouseLeave?.(_), $();
        },
        onFocus: (_) => {
          h.onFocus?.(_), g();
        },
        onBlur: (_) => {
          h.onBlur?.(_), M();
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
  const k = c;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: k.type || "button",
      disabled: k.disabled,
      className: x,
      "data-module": "nhs-button",
      ...F,
      ...l && { "data-prevent-double-click": "true" },
      ...k.disabled && { "aria-disabled": "true" },
      onKeyDown: (h) => {
        k.onKeyDown?.(h), D(h);
      },
      onClick: (h) => {
        k.onClick?.(h), C(h);
      },
      onMouseDown: (h) => {
        k.onMouseDown?.(h), R();
      },
      onMouseUp: (h) => {
        k.onMouseUp?.(h), L();
      },
      onMouseEnter: (h) => {
        k.onMouseEnter?.(h), w();
      },
      onMouseLeave: (h) => {
        k.onMouseLeave?.(h), $();
      },
      onFocus: (h) => {
        k.onFocus?.(h), g();
      },
      onBlur: (h) => {
        k.onBlur?.(h), M();
      },
      id: k.id,
      style: k.style,
      title: k.title,
      "aria-label": k["aria-label"],
      "aria-describedby": k["aria-describedby"],
      "aria-labelledby": k["aria-labelledby"],
      tabIndex: k.tabIndex,
      name: k.name,
      value: k.value,
      form: k.form,
      formAction: k.formAction,
      formEncType: k.formEncType,
      formMethod: k.formMethod,
      formNoValidate: k.formNoValidate,
      formTarget: k.formTarget,
      autoFocus: k.autoFocus,
      children: r
    }
  );
}
const De = Bs(Is);
De.displayName = "Button";
const Qr = ({
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
}, Ve = ({
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
  ), f = (p) => {
    p.preventDefault(), p.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: d, ...u, children: [
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
}, Rs = ({
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
  onBlur: f,
  onFocus: p,
  attributes: v,
  ...B
}) => {
  const [x, j] = pe(a), F = r !== void 0, R = F ? r : x;
  ye(() => {
    F || j(a);
  }, [a, F]);
  const L = (D) => {
    const C = D.target.checked;
    F || j(C), d?.(C, D);
  }, w = i ? `${e}-hint` : void 0, $ = l ? `${e}-error` : void 0, g = [w, $].filter(Boolean).join(" ") || void 0, M = X(
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
        checked: R,
        disabled: o,
        onChange: L,
        onBlur: f,
        onFocus: p,
        "aria-describedby": g,
        ...v
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: u }),
    i && /* @__PURE__ */ n.jsx("div", { id: w, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: $, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
Rs.displayName = "Checkbox";
const Jn = ({
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
  className: f,
  width: p = "full",
  inputMode: v,
  autoComplete: B,
  maxLength: x,
  minLength: j,
  pattern: F,
  step: R,
  min: L,
  max: w,
  showValueLabels: $ = !1,
  showCurrentValue: g = !1,
  valueLabels: M,
  onChange: D,
  onBlur: C,
  onFocus: k,
  onKeyDown: h,
  ..._
}) => {
  const [W, ae] = pe(a || o || (r === "range" ? L || "0" : ""));
  ye(() => {
    a !== void 0 && ae(a);
  }, [a]);
  const P = (le) => {
    ae(le.target.value), D?.(le);
  }, Q = r === "range", ne = X(
    "nhsuk-input",
    {
      "nhsuk-input--error": u,
      "nhsuk-input--range": Q,
      [`nhsuk-input--width-${p}`]: p !== "full" && !Q
    },
    f
  ), ie = Q ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    $ && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: M?.min || L || "0" }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: ne,
          id: e,
          name: t,
          type: r,
          value: W,
          defaultValue: o,
          placeholder: s,
          disabled: i,
          readOnly: l,
          required: c,
          "aria-describedby": d,
          inputMode: v,
          autoComplete: B,
          maxLength: x,
          minLength: j,
          pattern: F,
          step: R,
          min: L,
          max: w,
          onChange: P,
          onBlur: C,
          onFocus: k,
          onKeyDown: h,
          ..._
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: M?.max || w || "100" })
    ] }),
    !$ && /* @__PURE__ */ n.jsx(
      "input",
      {
        className: ne,
        id: e,
        name: t,
        type: r,
        value: W,
        defaultValue: o,
        placeholder: s,
        disabled: i,
        readOnly: l,
        required: c,
        "aria-describedby": d,
        inputMode: v,
        autoComplete: B,
        maxLength: x,
        minLength: j,
        pattern: F,
        step: R,
        min: L,
        max: w,
        onChange: P,
        onBlur: C,
        onFocus: k,
        onKeyDown: h,
        ..._
      }
    ),
    g && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      M?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: W })
    ] }) })
  ] }) : null;
  return Q ? ie : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: ne,
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
      inputMode: v,
      autoComplete: B,
      maxLength: x,
      minLength: j,
      pattern: F,
      step: R,
      min: L,
      max: w,
      onChange: D,
      onBlur: C,
      onFocus: k,
      onKeyDown: h,
      ..._
    }
  );
}, Xn = ({
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
}, Qn = ({
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
}, Ls = ({
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
  fieldsetAttributes: f,
  attributes: p,
  ...v
}) => {
  const [B, x] = pe(
    e.filter((D) => D.checked).map((D) => D.value)
  ), j = r || t, F = i ? `${j}-hint` : void 0, R = l ? `${j}-error` : void 0, L = [F, R].filter(Boolean).join(" ") || void 0, w = (D, C) => {
    let k;
    C ? k = [...B, D] : k = B.filter((h) => h !== D), x(k), d?.(k);
  }, $ = () => e.map((D, C) => {
    const k = `${j}-${C + 1}`, h = `${k}-conditional`, _ = B.includes(D.value), W = D.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: k,
          name: t,
          type: "checkbox",
          value: D.value,
          checked: _,
          disabled: W,
          onChange: (ae) => w(D.value, ae.target.checked),
          "aria-describedby": D.hint ? `${k}-hint` : L,
          ...D.conditional && {
            "aria-controls": h,
            "aria-expanded": _ ? "true" : "false"
          },
          ...D.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: k, children: D.text }),
      D.hint && /* @__PURE__ */ n.jsx("div", { id: `${k}-hint`, className: "nhsuk-checkboxes__hint", children: D.hint }),
      D.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: X("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !_
          }),
          id: h,
          children: typeof D.conditional == "object" && D.conditional !== null && "label" in D.conditional && "id" in D.conditional && "name" in D.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            D.conditional.label && /* @__PURE__ */ n.jsx(Xn, { htmlFor: D.conditional.id, children: D.conditional.label }),
            /* @__PURE__ */ n.jsx(Jn, { ...D.conditional })
          ] }) : D.conditional
        }
      )
    ] }, D.value);
  }), g = X(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": u
    },
    c
  ), M = X("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: M, ...p, ...v, children: /* @__PURE__ */ n.jsxs(
    Qn,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: L,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: F, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: R, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: g, children: $() })
      ]
    }
  ) });
};
Ls.displayName = "Checkboxes";
const Es = ({
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
  rows: f = 5,
  cols: p,
  maxLength: v,
  minLength: B,
  wrap: x = "soft",
  resize: j = "vertical",
  autoComplete: F,
  spellCheck: R,
  onChange: L,
  onBlur: w,
  onFocus: $,
  onKeyDown: g,
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
      rows: f,
      cols: p,
      maxLength: v,
      minLength: B,
      wrap: x,
      autoComplete: F,
      spellCheck: R,
      onChange: L,
      onBlur: w,
      onFocus: $,
      onKeyDown: g,
      ...M
    }
  );
}, ea = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = X("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, id: e, ...a, children: r });
}, zh = ({
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
  ...f
}) => {
  const [p, v] = pe(s), [B, x] = pe(0), [j, F] = pe(!1), [R, L] = pe(!1), w = ee((k) => r ? k.trim() === "" ? 0 : k.trim().split(/\s+/).length : k.length, [r]);
  ye(() => {
    const k = w(p), h = t || r || 0, _ = h - k, W = Math.floor(h * (a / 100));
    x(_), F(k > h), L(k >= W || k > h), u && u(k, _);
  }, [p, t, r, a, w, u]);
  const $ = (k) => {
    const h = k.target.value;
    v(h), d && d(k);
  }, g = () => {
    const k = t || r || 0, h = r ? "word" : "character", _ = r ? "words" : "characters";
    if (!R)
      return `You can enter up to ${k} ${k === 1 ? h : _}`;
    if (j) {
      const W = Math.abs(B);
      return `You have ${W} ${W === 1 ? h : _} too many`;
    } else
      return `You have ${B} ${B === 1 ? h : _} remaining`;
  }, M = X(
    "nhsuk-character-count",
    l
  ), D = X(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !R,
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
          Es,
          {
            id: e,
            name: o,
            value: p,
            rows: i,
            className: C,
            onChange: $,
            "aria-describedby": `${e}-info`,
            ...f
          }
        ),
        /* @__PURE__ */ n.jsx(
          ea,
          {
            id: `${e}-info`,
            className: D,
            children: g()
          }
        )
      ]
    }
  );
}, Ms = ({
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
}, $s = ({
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
  autoComplete: f,
  options: p,
  children: v,
  onChange: B,
  onBlur: x,
  onFocus: j,
  ...F
}) => {
  const R = X(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    c
  ), L = () => p ? p.map((w, $) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: w.value,
      disabled: w.disabled,
      selected: w.selected,
      children: w.text
    },
    `${w.value}-${$}`
  )) : null;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: R,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      disabled: o,
      required: s,
      "aria-describedby": l,
      multiple: u,
      size: d,
      autoComplete: f,
      onChange: B,
      onBlur: x,
      onFocus: j,
      ...F,
      children: v || L()
    }
  );
}, ta = $s;
ta.Option = Ms;
const Wh = ({
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
  onFocus: f,
  ...p
}) => {
  const [v, B] = pe(t || r || ""), x = X(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    s
  ), j = (F) => {
    const R = F.target.value;
    B(R), u && u(F);
  };
  return /* @__PURE__ */ n.jsx(Qn, { children: /* @__PURE__ */ n.jsx("div", { className: x, ...p, children: c.map((F, R) => {
    const L = `${e}-${R}`, w = F.conditional ? `${L}-conditional` : void 0, $ = v === F.value;
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
          checked: $,
          "aria-describedby": o,
          onChange: j,
          onBlur: d,
          onFocus: f
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: L, children: F.text }),
      F.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: F.hint }),
      F.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: X("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !$
          }),
          id: w,
          children: typeof F.conditional == "object" && F.conditional !== null && "label" in F.conditional && "id" in F.conditional && "name" in F.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            F.conditional.label && /* @__PURE__ */ n.jsx(Xn, { htmlFor: F.conditional.id, children: F.conditional.label }),
            /* @__PURE__ */ n.jsx(Jn, { ...F.conditional })
          ] }) : F.conditional
        }
      )
    ] }, F.value);
  }) }) });
}, na = ({
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
}, Tt = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = X("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: e });
}, er = ({
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
}, As = ({
  children: e,
  className: t,
  ...r
}) => {
  const o = Be.Children.toArray(e)[0], s = Be.isValidElement(o) && (o.type === Tt || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(na, { className: t, ...r, children: s ? e : /* @__PURE__ */ n.jsx(Tt, { children: e }) });
}, Hs = ({
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
}, Ps = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = X("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, zs = Hs;
zs.Item = Ps;
const Oh = ({
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
}, Uh = {
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
}, Gh = ({
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
}, Vh = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Yh = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], ra = ({
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
}, Ye = ({
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
  ), f = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), p = `h${u}`, v = i ? { ...l.style, marginBottom: i } : l.style;
  return Zr(
    p,
    { className: d, ...l, style: v },
    f
  );
}, br = ({
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
}, qh = ({
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
  ), d = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, p = (v) => {
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
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((v, B) => /* @__PURE__ */ n.jsx("li", { children: p(v) }, B)) })
        ] })
      ]
    }
  );
}, Kh = ({
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
  const [d, f] = pe(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [p, v] = pe({}), B = (P) => P % 4 === 0 && P % 100 !== 0 || P % 400 === 0, x = (P, Q) => {
    const ne = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return P === 2 && B(Q) ? 29 : ne[P - 1];
  }, j = (P, Q, ne) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Day must be a number";
    const ie = parseInt(P, 10);
    if (ie < 1 || ie > 31) return "Day must be between 1 and 31";
    if (Q && ne) {
      const le = parseInt(Q, 10), N = parseInt(ne, 10);
      if (!isNaN(le) && !isNaN(N) && le >= 1 && le <= 12) {
        const Y = x(le, N);
        if (ie > Y)
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
          ][le - 1]} ${N} only has ${Y} days`;
      }
    }
  }, F = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Month must be a number";
    const Q = parseInt(P, 10);
    if (Q < 1 || Q > 12) return "Month must be between 1 and 12";
  }, R = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Year must be a number";
    const Q = parseInt(P, 10), ne = (/* @__PURE__ */ new Date()).getFullYear();
    if (Q < 1900 || Q > ne + 10)
      return `Year must be between 1900 and ${ne + 10}`;
  }, L = (P, Q, ne) => {
    if (!P || !Q || !ne) return;
    const ie = parseInt(P, 10), le = parseInt(Q, 10), N = parseInt(ne, 10);
    if (isNaN(ie) || isNaN(le) || isNaN(N) || le < 1 || le > 12 || N < 1900) return;
    const Y = x(le, N);
    ie < 1 || ie > Y;
  }, w = ee((P, Q) => {
    const ne = {
      ...d,
      [P]: Q
    };
    f(ne), c && c(ne);
  }, [d, c]), $ = ee((P) => {
    const Q = d[P];
    let ne;
    if (P === "day")
      ne = j(Q, d.month, d.year);
    else if (P === "month") {
      if (ne = F(Q), !ne && d.day) {
        const ie = j(d.day, Q, d.year);
        v((le) => ({
          ...le,
          day: ie
        }));
      }
    } else if (P === "year" && (ne = R(Q), !ne && d.day && d.month)) {
      const ie = j(d.day, d.month, Q);
      v((le) => ({
        ...le,
        day: ie
      }));
    }
    if (v((ie) => ({
      ...ie,
      [P]: ne
    })), d.day && d.month && d.year) {
      const ie = L(
        P === "day" ? Q : d.day,
        P === "month" ? Q : d.month,
        P === "year" ? Q : d.year
      );
      ie && v((le) => ({
        ...le,
        day: ie
      }));
    }
  }, [d, j, F, R, L]), g = ve(() => [
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
  ], []), M = r || g;
  let D = s?.describedBy || "";
  const C = i ? `${e}-hint` : "", k = l ? `${e}-error` : "";
  C && (D = D ? `${D} ${C}` : C), k && (D = D ? `${D} ${k}` : k);
  const h = Object.values(p).some((P) => P), _ = X(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || h
    }
  ), W = X(
    "nhsuk-date-input",
    t
  ), ae = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      ea,
      {
        id: C,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      br,
      {
        id: k,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(p).map(
      ([P, Q]) => Q ? /* @__PURE__ */ n.jsxs(
        br,
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
    /* @__PURE__ */ n.jsx("div", { className: W, id: e, "data-testid": "date-input", ...u, children: M.map((P) => {
      const Q = P.id || `${e}-${P.name}`, ne = a ? `${a}[${P.name}]` : P.name, ie = P.label || P.name.charAt(0).toUpperCase() + P.name.slice(1), le = p[P.name], N = d[P.name] || "";
      let Y = D;
      if (le) {
        const A = `${e}-${P.name}-error`;
        Y = Y ? `${Y} ${A}` : A;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          Xn,
          {
            htmlFor: Q,
            className: "nhsuk-date-input__label",
            children: ie
          }
        ),
        /* @__PURE__ */ n.jsx(
          Jn,
          {
            id: Q,
            name: ne,
            value: N,
            className: X("nhsuk-date-input__input", P.classes, {
              "nhsuk-input--error": le
            }),
            inputMode: P.inputmode,
            autoComplete: P.autocomplete,
            pattern: P.pattern,
            "aria-describedby": Y || void 0,
            hasError: !!le,
            onChange: (A) => w(P.name, A.target.value),
            onBlur: () => $(P.name)
          }
        )
      ] }, P.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: _, children: s ? /* @__PURE__ */ n.jsx(
    Qn,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: D || void 0,
      children: ae()
    }
  ) : ae() });
}, aa = {
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
}, sa = Ss(aa), Ws = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...aa, ...t };
  return /* @__PURE__ */ n.jsx(sa.Provider, { value: r, children: e });
}, Zh = () => {
  const e = ws(sa);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Os() {
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
function Us() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Os(), document.head.appendChild(e);
}
const Jh = ({ children: e, theme: t }) => (ye(() => {
  Us();
}, []), /* @__PURE__ */ n.jsx(Ws, { theme: t, children: e })), oa = ({
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
  isLoading: f = !1,
  showResults: p = !1,
  results: v = [],
  formAttributes: B = {},
  inputAttributes: x = {},
  buttonAttributes: j = {},
  preventDefaultSubmit: F = !1,
  debounceMs: R = 300,
  minQueryLength: L = 1
}) => {
  const [w, $] = pe(""), [g, M] = pe(!1), D = xe(void 0), C = xe(null), k = xe(null), h = e === "controlled" && o !== void 0, _ = h ? o : w, W = ee((O) => {
    D.current && clearTimeout(D.current), D.current = setTimeout(() => {
      d.onChange && O.length >= L && d.onChange(O);
    }, R);
  }, [d.onChange, R, L]), ae = ee((O) => {
    const q = O.target.value;
    h || $(q), e !== "form" && W(q);
  }, [h, e, W]), P = ee((O) => {
    const q = _.trim(), de = {
      query: q,
      timestamp: Date.now(),
      formData: new FormData(O.currentTarget)
    };
    e === "controlled" || e === "hybrid" && F ? (O.preventDefault(), d.onSearch && q.length >= L && d.onSearch(de)) : e === "hybrid" && d.onSearch && q.length >= L && d.onSearch(de);
  }, [e, _, d.onSearch, F, L]), Q = ee(() => {
    M(!0), d.onFocus?.();
  }, [d.onFocus]), ne = ee(() => {
    M(!1), d.onBlur?.();
  }, [d.onBlur]), ie = ee(() => {
    h || $(""), d.onClear?.(), k.current?.focus();
  }, [h, d.onClear]);
  ye(() => () => {
    D.current && clearTimeout(D.current);
  }, []);
  const le = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: X("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": f
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
  ), Y = () => !_ || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ie,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), A = () => !p || !v.length || !g ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: v.map((O) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: O.href ? /* @__PURE__ */ n.jsxs("a", { href: O.href, className: "nhsuk-header__search-result-link", children: [
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
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": g,
    "nhsuk-header__search--has-results": p && v.length > 0
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
                ref: k,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: _,
                onChange: ae,
                onFocus: Q,
                onBlur: ne,
                disabled: u || f,
                "aria-expanded": p && v.length > 0,
                "aria-haspopup": "listbox",
                ...x
              }
            ),
            Y()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: u || f || e !== "form" && _.length < L,
              ...j,
              children: [
                f ? N() : le(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    A()
  ] });
}, ia = ({
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
  const [f, p] = pe(!1), [v, B] = pe(!1), [x, j] = pe(i?.items?.length || 0), [F, R] = pe(!1), [L, w] = pe(!1), [$, g] = pe(!1), M = xe(null), D = xe(null), C = xe(!1), k = xe(null), h = xe([]), _ = xe(null);
  ye(() => {
    typeof window > "u" || (g(!0), R(!0));
  }, []), ye(() => {
    if (!$ || !i?.items?.length) return;
    h.current = i.items;
    const m = setTimeout(() => {
      M.current && D.current && ie();
    }, 100);
    return () => clearTimeout(m);
  }, [$, i?.items]);
  const W = r.href && !t.href || r.href && r.href === t.href, ae = W ? r.href : t.href, P = X(
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
  ), ne = X(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), ie = ee(() => {
    if (!(typeof window > "u" || C.current) && !(!M.current || !D.current || !h.current.length)) {
      C.current = !0;
      try {
        const m = D.current, T = M.current, G = m.offsetWidth, E = T.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (E.length === 0 || G === 0) {
          C.current = !1;
          return;
        }
        const U = window.innerWidth < 768, z = U ? 16 : 32, S = z * 2, he = G - S, re = Array.from(E).map((y) => y.offsetWidth), oe = re.reduce((y, I) => y + I, 0), K = U ? 80 : 100, b = _.current !== null && _.current !== U;
        if (_.current = U, console.log("Overflow check:", {
          containerWidth: G,
          availableContainerWidth: he,
          totalGutters: S,
          gutterSize: z,
          totalWidth: oe,
          mobile: U,
          breakpointChanged: b,
          itemCount: re.length,
          measurements: re
        }), oe <= he)
          B(!1), j(h.current.length);
        else {
          const y = he - K;
          let I = 0, H = 0;
          for (let Z = 0; Z < re.length; Z++) {
            const te = H + re[Z];
            if (te <= y)
              H = te, I = Z + 1;
            else
              break;
          }
          I = Math.max(1, I);
          const V = I < re.length;
          B(V), j(I);
        }
        C.current = !1;
      } catch (m) {
        console.error("Overflow detection error:", m), B(!1), j(h.current.length), C.current = !1;
      }
    }
  }, []);
  ye(() => {
    if (typeof document > "u") return;
    const m = (T) => {
      T.key === "Escape" && f && p(!1);
    };
    if (f)
      return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [f]), ye(() => {
    if (typeof window > "u" || !$) return;
    const m = () => {
      f && (p(!1), w(!1)), k.current && clearTimeout(k.current), k.current = setTimeout(() => {
        h.current.length > 0 && ie();
      }, 250);
    };
    let T = null, G = null;
    return window.matchMedia && (T = window.matchMedia("(max-width: 767px)"), G = () => {
      console.log("Breakpoint changed:", T?.matches ? "mobile" : "desktop"), h.current.length > 0 && setTimeout(() => ie(), 50);
    }, T.addEventListener ? T.addEventListener("change", G) : T.addListener(G)), window.addEventListener("resize", m), () => {
      window.removeEventListener("resize", m), T && G && (T.removeEventListener ? T.removeEventListener("change", G) : T.removeListener(G)), k.current && clearTimeout(k.current);
    };
  }, [$, f, ie]), ye(() => {
    if (typeof document > "u") return;
    const m = (T) => {
      const G = T.target, E = M.current?.contains(G);
      f && !E && p(!1);
    };
    if (f)
      return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [f]);
  const le = (m) => {
    m && (m.preventDefault(), m.stopPropagation());
    const T = !f;
    p(T), T ? setTimeout(() => {
      w(!0);
    }, 50) : w(!1);
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
  ), Y = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : N(), A = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, O = (m, T) => m ? T ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: T, children: m }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: m }) : null, q = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), de = (m) => {
    if (m.active || m.current) {
      const T = m.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: m.html } }) : m.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: T });
    }
    return m.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: m.html } }) : m.text;
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
              Y(),
              A(),
              W && O(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              Y(),
              A(),
              W && O(r.text)
            ] }),
            r.text && !W && O(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx(oa, { ...o }),
          /* @__PURE__ */ n.jsx(
            Zn,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: ne,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: X(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !F && $,
                    "nhsuk-header__navigation-container--ssr": !$
                  },
                  l
                ),
                ref: D,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: M, children: [
                  ($ ? i.items.slice(0, x) : i.items).map((m, T) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: X(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": m.active || m.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !$ && T >= 4
                          // Mark items that would be hidden on client
                        },
                        m.className
                      ),
                      ...m.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: m.href,
                          ...m.active || m.current ? {
                            "aria-current": m.current ? "page" : "true"
                          } : {},
                          children: de(m)
                        }
                      )
                    },
                    T
                  )),
                  $ && v && x < i.items.length && /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ n.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: le,
                          type: "button",
                          children: [
                            /* @__PURE__ */ n.jsx("span", { children: "More" }),
                            q()
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
        $ && i && i.items && i.items.length > 0 && f && L && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !L,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(x).map((m, T) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: X(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": m.active || m.current
                  }
                ),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: m.href,
                    ...m.active || m.current ? {
                      "aria-current": m.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      p(!1), w(!1);
                    },
                    children: de(m)
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
}, Xh = ({
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
  const f = r.href && !t.href || r.href && r.href === t.href, p = f ? r.href : t.href, v = X(
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
  ) : j(), R = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, L = (g, M) => g ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: g }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: g }) : null, w = () => !i?.items || i.items.length === 0 ? null : i.items.map((g, M) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: g.href,
          ...g.attributes || {},
          children: g.text
        }
      )
    },
    g.href || M
  )), $ = () => o ? /* @__PURE__ */ n.jsx(oa, { ...o }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: v,
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
              R(),
              f && L(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              F(),
              R(),
              f && L(r.text)
            ] }),
            r.text && !f && L(r.text, r.href)
          ] }),
          (c === "organisation" || a) && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            a && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name", children: a.name }),
              a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: a.descriptor })
            ] }),
            $()
          ] }),
          c !== "organisation" && !a && $(),
          /* @__PURE__ */ n.jsx(
            Zn,
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
                children: w()
              }
            ) })
          }
        )
      ]
    }
  );
}, Qh = ({
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
  ...f
}) => {
  const p = r.href && !t.href || r.href && r.href === t.href, v = p ? r.href : t.href, B = X(
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
  ), R = () => t.src ? /* @__PURE__ */ n.jsx(
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
  ] }) : null, w = (g, M) => g ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: g }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: g }) : null, $ = (g) => {
    if (g.active || g.current) {
      const M = g.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: M });
    }
    return g.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: B,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...u,
      ...f,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: x, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            v ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: v, children: [
              R(),
              L(),
              p && w(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              R(),
              L(),
              p && w(r.text)
            ] }),
            r.text && !p && w(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            Zn,
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
                  i.items.slice(0, d).map((g, M) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: X(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": g.active || g.current
                        },
                        g.className
                      ),
                      ...g.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: g.href,
                          ...g.active || g.current ? {
                            "aria-current": g.current ? "page" : "true"
                          } : {},
                          children: $(g)
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(d).map((g, M) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: X(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": g.active || g.current
                          }
                        ),
                        children: /* @__PURE__ */ n.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: g.href,
                            ...g.active || g.current ? {
                              "aria-current": g.current ? "page" : "true"
                            } : {},
                            children: $(g)
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
}, Gs = ({
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
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    i,
    s ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), p = [
    "nhsuk-hero__heading",
    r,
    !c && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), v = c || e || a || o, B = () => {
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
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: v && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          B(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && v && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          B(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Gs.displayName = "Hero";
const la = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {}
}) => {
  const c = (d, f = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: X("nhsuk-footer__list-item", {
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
function Nt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Vs(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function tr(e) {
  let t, r, a;
  e.length !== 2 ? (t = Nt, r = (l, c) => Nt(e(l), c), a = (l, c) => e(l) - c) : (t = e === Nt || e === Vs ? e : Ys, r = e, a = e);
  function o(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const f = u + d >>> 1;
        r(l[f], c) < 0 ? u = f + 1 : d = f;
      } while (u < d);
    }
    return u;
  }
  function s(l, c, u = 0, d = l.length) {
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
    const f = o(l, c, u, d - 1);
    return f > u && a(l[f - 1], c) > -a(l[f], c) ? f - 1 : f;
  }
  return { left: o, center: i, right: s };
}
function Ys() {
  return 0;
}
function qs(e) {
  return e === null ? NaN : +e;
}
const Ks = tr(Nt), Zs = Ks.right;
tr(qs).center;
const Js = Math.sqrt(50), Xs = Math.sqrt(10), Qs = Math.sqrt(2);
function ca(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Js ? 10 : s >= Xs ? 5 : s >= Qs ? 2 : 1;
  let l, c, u;
  return o < 0 ? (u = Math.pow(10, -o) / i, l = Math.round(e * u), c = Math.round(t * u), l / u < e && ++l, c / u > t && --c, u = -u) : (u = Math.pow(10, o) * i, l = Math.round(e / u), c = Math.round(t / u), l * u < e && ++l, c * u > t && --c), c < l && 0.5 <= r && r < 2 ? ca(e, t, r * 2) : [l, c, u];
}
function xr(e, t, r) {
  return t = +t, e = +e, r = +r, ca(e, t, r)[2];
}
function yr(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? xr(t, e, r) : xr(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function eo(e, t) {
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
function nr(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function da(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function _t() {
}
var bt = 0.7, Dt = 1 / bt, lt = "\\s*([+-]?\\d+)\\s*", xt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Re = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", to = /^#([0-9a-f]{3,8})$/, no = new RegExp(`^rgb\\(${lt},${lt},${lt}\\)$`), ro = new RegExp(`^rgb\\(${Re},${Re},${Re}\\)$`), ao = new RegExp(`^rgba\\(${lt},${lt},${lt},${xt}\\)$`), so = new RegExp(`^rgba\\(${Re},${Re},${Re},${xt}\\)$`), oo = new RegExp(`^hsl\\(${xt},${Re},${Re}\\)$`), io = new RegExp(`^hsla\\(${xt},${Re},${Re},${xt}\\)$`), _r = {
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
nr(_t, yt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: vr,
  // Deprecated! Use color.formatHex.
  formatHex: vr,
  formatHex8: lo,
  formatHsl: co,
  formatRgb: kr,
  toString: kr
});
function vr() {
  return this.rgb().formatHex();
}
function lo() {
  return this.rgb().formatHex8();
}
function co() {
  return ua(this).formatHsl();
}
function kr() {
  return this.rgb().formatRgb();
}
function yt(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = to.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? wr(t) : r === 3 ? new Te(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? St(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? St(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = no.exec(e)) ? new Te(t[1], t[2], t[3], 1) : (t = ro.exec(e)) ? new Te(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ao.exec(e)) ? St(t[1], t[2], t[3], t[4]) : (t = so.exec(e)) ? St(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = oo.exec(e)) ? jr(t[1], t[2] / 100, t[3] / 100, 1) : (t = io.exec(e)) ? jr(t[1], t[2] / 100, t[3] / 100, t[4]) : _r.hasOwnProperty(e) ? wr(_r[e]) : e === "transparent" ? new Te(NaN, NaN, NaN, 0) : null;
}
function wr(e) {
  return new Te(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function St(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new Te(e, t, r, a);
}
function uo(e) {
  return e instanceof _t || (e = yt(e)), e ? (e = e.rgb(), new Te(e.r, e.g, e.b, e.opacity)) : new Te();
}
function wn(e, t, r, a) {
  return arguments.length === 1 ? uo(e) : new Te(e, t, r, a ?? 1);
}
function Te(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
nr(Te, wn, da(_t, {
  brighter(e) {
    return e = e == null ? Dt : Math.pow(Dt, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? bt : Math.pow(bt, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Te(Qe(this.r), Qe(this.g), Qe(this.b), Ft(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Sr,
  // Deprecated! Use color.formatHex.
  formatHex: Sr,
  formatHex8: ho,
  formatRgb: Cr,
  toString: Cr
}));
function Sr() {
  return `#${Xe(this.r)}${Xe(this.g)}${Xe(this.b)}`;
}
function ho() {
  return `#${Xe(this.r)}${Xe(this.g)}${Xe(this.b)}${Xe((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Cr() {
  const e = Ft(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Qe(this.r)}, ${Qe(this.g)}, ${Qe(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ft(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Qe(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Xe(e) {
  return e = Qe(e), (e < 16 ? "0" : "") + e.toString(16);
}
function jr(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ie(e, t, r, a);
}
function ua(e) {
  if (e instanceof Ie) return new Ie(e.h, e.s, e.l, e.opacity);
  if (e instanceof _t || (e = yt(e)), !e) return new Ie();
  if (e instanceof Ie) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Ie(i, l, c, e.opacity);
}
function fo(e, t, r, a) {
  return arguments.length === 1 ? ua(e) : new Ie(e, t, r, a ?? 1);
}
function Ie(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
nr(Ie, fo, da(_t, {
  brighter(e) {
    return e = e == null ? Dt : Math.pow(Dt, e), new Ie(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? bt : Math.pow(bt, e), new Ie(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new Te(
      pn(e >= 240 ? e - 240 : e + 120, o, a),
      pn(e, o, a),
      pn(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Ie(Nr(this.h), Ct(this.s), Ct(this.l), Ft(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ft(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Nr(this.h)}, ${Ct(this.s) * 100}%, ${Ct(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Nr(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ct(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function pn(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const rr = (e) => () => e;
function mo(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function po(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function go(e) {
  return (e = +e) == 1 ? ha : function(t, r) {
    return r - t ? po(t, r, e) : rr(isNaN(t) ? r : t);
  };
}
function ha(e, t) {
  var r = t - e;
  return r ? mo(e, r) : rr(isNaN(e) ? t : e);
}
const Tr = function e(t) {
  var r = go(t);
  function a(o, s) {
    var i = r((o = wn(o)).r, (s = wn(s)).r), l = r(o.g, s.g), c = r(o.b, s.b), u = ha(o.opacity, s.opacity);
    return function(d) {
      return o.r = i(d), o.g = l(d), o.b = c(d), o.opacity = u(d), o + "";
    };
  }
  return a.gamma = e, a;
}(1);
function bo(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function xo(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function yo(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = ar(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function _o(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function Bt(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function vo(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = ar(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var Sn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, gn = new RegExp(Sn.source, "g");
function ko(e) {
  return function() {
    return e;
  };
}
function wo(e) {
  return function(t) {
    return e(t) + "";
  };
}
function So(e, t) {
  var r = Sn.lastIndex = gn.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = Sn.exec(e)) && (o = gn.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: Bt(a, o) })), r = gn.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? wo(c[0].x) : ko(t) : (t = c.length, function(u) {
    for (var d = 0, f; d < t; ++d) l[(f = c[d]).i] = f.x(u);
    return l.join("");
  });
}
function ar(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? rr(t) : (r === "number" ? Bt : r === "string" ? (a = yt(t)) ? (t = a, Tr) : So : t instanceof yt ? Tr : t instanceof Date ? _o : xo(t) ? bo : Array.isArray(t) ? yo : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? vo : Bt)(e, t);
}
function Co(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function jo(e) {
  return function() {
    return e;
  };
}
function No(e) {
  return +e;
}
var Dr = [0, 1];
function ot(e) {
  return e;
}
function Cn(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : jo(isNaN(t) ? NaN : 0.5);
}
function To(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Do(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = Cn(o, a), s = r(i, s)) : (a = Cn(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function Fo(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = Cn(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = Zs(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function Bo(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Io() {
  var e = Dr, t = Dr, r = ar, a, o, s, i = ot, l, c, u;
  function d() {
    var p = Math.min(e.length, t.length);
    return i !== ot && (i = To(e[0], e[p - 1])), l = p > 2 ? Fo : Do, c = u = null, f;
  }
  function f(p) {
    return p == null || isNaN(p = +p) ? s : (c || (c = l(e.map(a), t, r)))(a(i(p)));
  }
  return f.invert = function(p) {
    return i(o((u || (u = l(t, e.map(a), Bt)))(p)));
  }, f.domain = function(p) {
    return arguments.length ? (e = Array.from(p, No), d()) : e.slice();
  }, f.range = function(p) {
    return arguments.length ? (t = Array.from(p), d()) : t.slice();
  }, f.rangeRound = function(p) {
    return t = Array.from(p), r = Co, d();
  }, f.clamp = function(p) {
    return arguments.length ? (i = p ? !0 : ot, d()) : i !== ot;
  }, f.interpolate = function(p) {
    return arguments.length ? (r = p, d()) : r;
  }, f.unknown = function(p) {
    return arguments.length ? (s = p, f) : s;
  }, function(p, v) {
    return a = p, o = v, d();
  };
}
function Ro() {
  return Io()(ot, ot);
}
function Lo(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const bn = /* @__PURE__ */ new Date(), xn = /* @__PURE__ */ new Date();
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
  }), r && (o.count = (s, i) => (bn.setTime(+s), xn.setTime(+i), e(bn), e(xn), Math.floor(r(bn, xn))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const It = we(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
It.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? we((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : It);
It.range;
const Ue = 1e3, Fe = Ue * 60, Ge = Fe * 60, qe = Ge * 24, sr = qe * 7, Fr = qe * 30, yn = qe * 365, it = we((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ue);
}, (e, t) => (t - e) / Ue, (e) => e.getUTCSeconds());
it.range;
const or = we((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ue);
}, (e, t) => {
  e.setTime(+e + t * Fe);
}, (e, t) => (t - e) / Fe, (e) => e.getMinutes());
or.range;
const Eo = we((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Fe);
}, (e, t) => (t - e) / Fe, (e) => e.getUTCMinutes());
Eo.range;
const ir = we((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ue - e.getMinutes() * Fe);
}, (e, t) => {
  e.setTime(+e + t * Ge);
}, (e, t) => (t - e) / Ge, (e) => e.getHours());
ir.range;
const Mo = we((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ge);
}, (e, t) => (t - e) / Ge, (e) => e.getUTCHours());
Mo.range;
const vt = we(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Fe) / qe,
  (e) => e.getDate() - 1
);
vt.range;
const lr = we((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / qe, (e) => e.getUTCDate() - 1);
lr.range;
const $o = we((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / qe, (e) => Math.floor(e / qe));
$o.range;
function tt(e) {
  return we((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Fe) / sr);
}
const dn = tt(0), Rt = tt(1), Ao = tt(2), Ho = tt(3), ct = tt(4), Po = tt(5), zo = tt(6);
dn.range;
Rt.range;
Ao.range;
Ho.range;
ct.range;
Po.range;
zo.range;
function nt(e) {
  return we((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / sr);
}
const fa = nt(0), Lt = nt(1), Wo = nt(2), Oo = nt(3), dt = nt(4), Uo = nt(5), Go = nt(6);
fa.range;
Lt.range;
Wo.range;
Oo.range;
dt.range;
Uo.range;
Go.range;
const cr = we((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
cr.range;
const Vo = we((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Vo.range;
const Ke = we((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ke.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : we((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Ke.range;
const et = we((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
et.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : we((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
et.range;
function Yo(e, t, r, a, o, s) {
  const i = [
    [it, 1, Ue],
    [it, 5, 5 * Ue],
    [it, 15, 15 * Ue],
    [it, 30, 30 * Ue],
    [s, 1, Fe],
    [s, 5, 5 * Fe],
    [s, 15, 15 * Fe],
    [s, 30, 30 * Fe],
    [o, 1, Ge],
    [o, 3, 3 * Ge],
    [o, 6, 6 * Ge],
    [o, 12, 12 * Ge],
    [a, 1, qe],
    [a, 2, 2 * qe],
    [r, 1, sr],
    [t, 1, Fr],
    [t, 3, 3 * Fr],
    [e, 1, yn]
  ];
  function l(u, d, f) {
    const p = d < u;
    p && ([u, d] = [d, u]);
    const v = f && typeof f.range == "function" ? f : c(u, d, f), B = v ? v.range(u, +d + 1) : [];
    return p ? B.reverse() : B;
  }
  function c(u, d, f) {
    const p = Math.abs(d - u) / f, v = tr(([, , j]) => j).right(i, p);
    if (v === i.length) return e.every(yr(u / yn, d / yn, f));
    if (v === 0) return It.every(Math.max(yr(u, d, f), 1));
    const [B, x] = i[p / i[v - 1][2] < i[v][2] / p ? v - 1 : v];
    return B.every(x);
  }
  return [l, c];
}
const [qo, Ko] = Yo(Ke, cr, dn, vt, ir, or);
function _n(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function vn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function mt(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Zo(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, u = pt(o), d = gt(o), f = pt(s), p = gt(s), v = pt(i), B = gt(i), x = pt(l), j = gt(l), F = pt(c), R = gt(c), L = {
    a: ne,
    A: ie,
    b: le,
    B: N,
    c: null,
    d: Mr,
    e: Mr,
    f: yi,
    g: Di,
    G: Bi,
    H: gi,
    I: bi,
    j: xi,
    L: ma,
    m: _i,
    M: vi,
    p: Y,
    q: A,
    Q: Hr,
    s: Pr,
    S: ki,
    u: wi,
    U: Si,
    V: Ci,
    w: ji,
    W: Ni,
    x: null,
    X: null,
    y: Ti,
    Y: Fi,
    Z: Ii,
    "%": Ar
  }, w = {
    a: O,
    A: q,
    b: de,
    B: m,
    c: null,
    d: $r,
    e: $r,
    f: Mi,
    g: Vi,
    G: qi,
    H: Ri,
    I: Li,
    j: Ei,
    L: ga,
    m: $i,
    M: Ai,
    p: T,
    q: G,
    Q: Hr,
    s: Pr,
    S: Hi,
    u: Pi,
    U: zi,
    V: Wi,
    w: Oi,
    W: Ui,
    x: null,
    X: null,
    y: Gi,
    Y: Yi,
    Z: Ki,
    "%": Ar
  }, $ = {
    a: k,
    A: h,
    b: _,
    B: W,
    c: ae,
    d: Lr,
    e: Lr,
    f: hi,
    g: Rr,
    G: Ir,
    H: Er,
    I: Er,
    j: li,
    L: ui,
    m: ii,
    M: ci,
    p: C,
    q: oi,
    Q: mi,
    s: pi,
    S: di,
    u: ti,
    U: ni,
    V: ri,
    w: ei,
    W: ai,
    x: P,
    X: Q,
    y: Rr,
    Y: Ir,
    Z: si,
    "%": fi
  };
  L.x = g(r, L), L.X = g(a, L), L.c = g(t, L), w.x = g(r, w), w.X = g(a, w), w.c = g(t, w);
  function g(E, U) {
    return function(z) {
      var S = [], he = -1, re = 0, oe = E.length, K, b, y;
      for (z instanceof Date || (z = /* @__PURE__ */ new Date(+z)); ++he < oe; )
        E.charCodeAt(he) === 37 && (S.push(E.slice(re, he)), (b = Br[K = E.charAt(++he)]) != null ? K = E.charAt(++he) : b = K === "e" ? " " : "0", (y = U[K]) && (K = y(z, b)), S.push(K), re = he + 1);
      return S.push(E.slice(re, he)), S.join("");
    };
  }
  function M(E, U) {
    return function(z) {
      var S = mt(1900, void 0, 1), he = D(S, E, z += "", 0), re, oe;
      if (he != z.length) return null;
      if ("Q" in S) return new Date(S.Q);
      if ("s" in S) return new Date(S.s * 1e3 + ("L" in S ? S.L : 0));
      if (U && !("Z" in S) && (S.Z = 0), "p" in S && (S.H = S.H % 12 + S.p * 12), S.m === void 0 && (S.m = "q" in S ? S.q : 0), "V" in S) {
        if (S.V < 1 || S.V > 53) return null;
        "w" in S || (S.w = 1), "Z" in S ? (re = vn(mt(S.y, 0, 1)), oe = re.getUTCDay(), re = oe > 4 || oe === 0 ? Lt.ceil(re) : Lt(re), re = lr.offset(re, (S.V - 1) * 7), S.y = re.getUTCFullYear(), S.m = re.getUTCMonth(), S.d = re.getUTCDate() + (S.w + 6) % 7) : (re = _n(mt(S.y, 0, 1)), oe = re.getDay(), re = oe > 4 || oe === 0 ? Rt.ceil(re) : Rt(re), re = vt.offset(re, (S.V - 1) * 7), S.y = re.getFullYear(), S.m = re.getMonth(), S.d = re.getDate() + (S.w + 6) % 7);
      } else ("W" in S || "U" in S) && ("w" in S || (S.w = "u" in S ? S.u % 7 : "W" in S ? 1 : 0), oe = "Z" in S ? vn(mt(S.y, 0, 1)).getUTCDay() : _n(mt(S.y, 0, 1)).getDay(), S.m = 0, S.d = "W" in S ? (S.w + 6) % 7 + S.W * 7 - (oe + 5) % 7 : S.w + S.U * 7 - (oe + 6) % 7);
      return "Z" in S ? (S.H += S.Z / 100 | 0, S.M += S.Z % 100, vn(S)) : _n(S);
    };
  }
  function D(E, U, z, S) {
    for (var he = 0, re = U.length, oe = z.length, K, b; he < re; ) {
      if (S >= oe) return -1;
      if (K = U.charCodeAt(he++), K === 37) {
        if (K = U.charAt(he++), b = $[K in Br ? U.charAt(he++) : K], !b || (S = b(E, z, S)) < 0) return -1;
      } else if (K != z.charCodeAt(S++))
        return -1;
    }
    return S;
  }
  function C(E, U, z) {
    var S = u.exec(U.slice(z));
    return S ? (E.p = d.get(S[0].toLowerCase()), z + S[0].length) : -1;
  }
  function k(E, U, z) {
    var S = v.exec(U.slice(z));
    return S ? (E.w = B.get(S[0].toLowerCase()), z + S[0].length) : -1;
  }
  function h(E, U, z) {
    var S = f.exec(U.slice(z));
    return S ? (E.w = p.get(S[0].toLowerCase()), z + S[0].length) : -1;
  }
  function _(E, U, z) {
    var S = F.exec(U.slice(z));
    return S ? (E.m = R.get(S[0].toLowerCase()), z + S[0].length) : -1;
  }
  function W(E, U, z) {
    var S = x.exec(U.slice(z));
    return S ? (E.m = j.get(S[0].toLowerCase()), z + S[0].length) : -1;
  }
  function ae(E, U, z) {
    return D(E, t, U, z);
  }
  function P(E, U, z) {
    return D(E, r, U, z);
  }
  function Q(E, U, z) {
    return D(E, a, U, z);
  }
  function ne(E) {
    return i[E.getDay()];
  }
  function ie(E) {
    return s[E.getDay()];
  }
  function le(E) {
    return c[E.getMonth()];
  }
  function N(E) {
    return l[E.getMonth()];
  }
  function Y(E) {
    return o[+(E.getHours() >= 12)];
  }
  function A(E) {
    return 1 + ~~(E.getMonth() / 3);
  }
  function O(E) {
    return i[E.getUTCDay()];
  }
  function q(E) {
    return s[E.getUTCDay()];
  }
  function de(E) {
    return c[E.getUTCMonth()];
  }
  function m(E) {
    return l[E.getUTCMonth()];
  }
  function T(E) {
    return o[+(E.getUTCHours() >= 12)];
  }
  function G(E) {
    return 1 + ~~(E.getUTCMonth() / 3);
  }
  return {
    format: function(E) {
      var U = g(E += "", L);
      return U.toString = function() {
        return E;
      }, U;
    },
    parse: function(E) {
      var U = M(E += "", !1);
      return U.toString = function() {
        return E;
      }, U;
    },
    utcFormat: function(E) {
      var U = g(E += "", w);
      return U.toString = function() {
        return E;
      }, U;
    },
    utcParse: function(E) {
      var U = M(E += "", !0);
      return U.toString = function() {
        return E;
      }, U;
    }
  };
}
var Br = { "-": "", _: " ", 0: "0" }, Se = /^\s*\d+/, Jo = /^%/, Xo = /[\\^$*+?|[\]().{}]/g;
function ge(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function Qo(e) {
  return e.replace(Xo, "\\$&");
}
function pt(e) {
  return new RegExp("^(?:" + e.map(Qo).join("|") + ")", "i");
}
function gt(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function ei(e, t, r) {
  var a = Se.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function ti(e, t, r) {
  var a = Se.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function ni(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function ri(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function ai(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function Ir(e, t, r) {
  var a = Se.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function Rr(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function si(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function oi(e, t, r) {
  var a = Se.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function ii(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function Lr(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function li(e, t, r) {
  var a = Se.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function Er(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function ci(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function di(e, t, r) {
  var a = Se.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function ui(e, t, r) {
  var a = Se.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function hi(e, t, r) {
  var a = Se.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function fi(e, t, r) {
  var a = Jo.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function mi(e, t, r) {
  var a = Se.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function pi(e, t, r) {
  var a = Se.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function Mr(e, t) {
  return ge(e.getDate(), t, 2);
}
function gi(e, t) {
  return ge(e.getHours(), t, 2);
}
function bi(e, t) {
  return ge(e.getHours() % 12 || 12, t, 2);
}
function xi(e, t) {
  return ge(1 + vt.count(Ke(e), e), t, 3);
}
function ma(e, t) {
  return ge(e.getMilliseconds(), t, 3);
}
function yi(e, t) {
  return ma(e, t) + "000";
}
function _i(e, t) {
  return ge(e.getMonth() + 1, t, 2);
}
function vi(e, t) {
  return ge(e.getMinutes(), t, 2);
}
function ki(e, t) {
  return ge(e.getSeconds(), t, 2);
}
function wi(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Si(e, t) {
  return ge(dn.count(Ke(e) - 1, e), t, 2);
}
function pa(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ct(e) : ct.ceil(e);
}
function Ci(e, t) {
  return e = pa(e), ge(ct.count(Ke(e), e) + (Ke(e).getDay() === 4), t, 2);
}
function ji(e) {
  return e.getDay();
}
function Ni(e, t) {
  return ge(Rt.count(Ke(e) - 1, e), t, 2);
}
function Ti(e, t) {
  return ge(e.getFullYear() % 100, t, 2);
}
function Di(e, t) {
  return e = pa(e), ge(e.getFullYear() % 100, t, 2);
}
function Fi(e, t) {
  return ge(e.getFullYear() % 1e4, t, 4);
}
function Bi(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? ct(e) : ct.ceil(e), ge(e.getFullYear() % 1e4, t, 4);
}
function Ii(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ge(t / 60 | 0, "0", 2) + ge(t % 60, "0", 2);
}
function $r(e, t) {
  return ge(e.getUTCDate(), t, 2);
}
function Ri(e, t) {
  return ge(e.getUTCHours(), t, 2);
}
function Li(e, t) {
  return ge(e.getUTCHours() % 12 || 12, t, 2);
}
function Ei(e, t) {
  return ge(1 + lr.count(et(e), e), t, 3);
}
function ga(e, t) {
  return ge(e.getUTCMilliseconds(), t, 3);
}
function Mi(e, t) {
  return ga(e, t) + "000";
}
function $i(e, t) {
  return ge(e.getUTCMonth() + 1, t, 2);
}
function Ai(e, t) {
  return ge(e.getUTCMinutes(), t, 2);
}
function Hi(e, t) {
  return ge(e.getUTCSeconds(), t, 2);
}
function Pi(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function zi(e, t) {
  return ge(fa.count(et(e) - 1, e), t, 2);
}
function ba(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? dt(e) : dt.ceil(e);
}
function Wi(e, t) {
  return e = ba(e), ge(dt.count(et(e), e) + (et(e).getUTCDay() === 4), t, 2);
}
function Oi(e) {
  return e.getUTCDay();
}
function Ui(e, t) {
  return ge(Lt.count(et(e) - 1, e), t, 2);
}
function Gi(e, t) {
  return ge(e.getUTCFullYear() % 100, t, 2);
}
function Vi(e, t) {
  return e = ba(e), ge(e.getUTCFullYear() % 100, t, 2);
}
function Yi(e, t) {
  return ge(e.getUTCFullYear() % 1e4, t, 4);
}
function qi(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? dt(e) : dt.ceil(e), ge(e.getUTCFullYear() % 1e4, t, 4);
}
function Ki() {
  return "+0000";
}
function Ar() {
  return "%";
}
function Hr(e) {
  return +e;
}
function Pr(e) {
  return Math.floor(+e / 1e3);
}
var at, xa;
Zi({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Zi(e) {
  return at = Zo(e), xa = at.format, at.parse, at.utcFormat, at.utcParse, at;
}
function Ji(e) {
  return new Date(e);
}
function Xi(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ya(e, t, r, a, o, s, i, l, c, u) {
  var d = Ro(), f = d.invert, p = d.domain, v = u(".%L"), B = u(":%S"), x = u("%I:%M"), j = u("%I %p"), F = u("%a %d"), R = u("%b %d"), L = u("%B"), w = u("%Y");
  function $(g) {
    return (c(g) < g ? v : l(g) < g ? B : i(g) < g ? x : s(g) < g ? j : a(g) < g ? o(g) < g ? F : R : r(g) < g ? L : w)(g);
  }
  return d.invert = function(g) {
    return new Date(f(g));
  }, d.domain = function(g) {
    return arguments.length ? p(Array.from(g, Xi)) : p().map(Ji);
  }, d.ticks = function(g) {
    var M = p();
    return e(M[0], M[M.length - 1], g ?? 10);
  }, d.tickFormat = function(g, M) {
    return M == null ? $ : u(M);
  }, d.nice = function(g) {
    var M = p();
    return (!g || typeof g.range != "function") && (g = t(M[0], M[M.length - 1], g ?? 10)), g ? p(Lo(M, g)) : d;
  }, d.copy = function() {
    return Bo(d, ya(e, t, r, a, o, s, i, l, c, u));
  }, d;
}
function Qi() {
  return eo.apply(ya(qo, Ko, Ke, cr, dn, vt, ir, or, it, xa).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function el({
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
  const u = xe(null), [d, f] = pe(!1), [p, v] = pe(!1), B = t(e.start), x = t(e.end), j = Math.max(x - B, 20), F = () => {
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
  }, R = e.progress ? j * e.progress / 100 : 0, L = () => {
    r?.(e);
  }, w = () => {
    a?.(e);
  }, $ = (_) => {
    _.key === "Enter" ? (_.preventDefault(), L()) : _.key === " " && (_.preventDefault(), w());
  }, g = () => {
    f(!0);
  }, M = () => {
    f(!1);
  }, D = () => {
    v(!0), l?.();
  }, C = () => {
    v(!1);
  }, k = [
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
      className: k,
      style: h,
      onClick: L,
      onDoubleClick: w,
      onKeyDown: $,
      onMouseDown: g,
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
            style: { width: `${R}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function tl({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let v = e.getTime(); v <= t.getTime(); v += 864e5)
    a.push(new Date(v));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = pe(-1), c = xe(null), u = (v) => {
    if (v.key === "ArrowLeft") {
      v.preventDefault();
      const B = Math.max(0, i === -1 ? 0 : i - 1);
      l(B), p(B);
    } else if (v.key === "ArrowRight") {
      v.preventDefault();
      const B = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(B), p(B);
    } else if (v.key === "ArrowDown") {
      v.preventDefault();
      const B = document.querySelector(".gantt-row .timeline-container");
      B && B.focus();
    } else if (v.key === "Home")
      v.preventDefault(), l(0), p(0);
    else if (v.key === "End") {
      v.preventDefault();
      const B = a.length - 1;
      l(B), p(B);
    }
  }, d = (v) => {
    if (v.key === "ArrowDown") {
      v.preventDefault();
      const B = document.querySelector(".gantt-row .resource-label");
      B && B.focus();
    } else if (v.key === "ArrowRight") {
      v.preventDefault();
      const B = c.current;
      B && B.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => p(0), 0));
  }, p = (v) => {
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
            children: a.map((v, B) => {
              const x = v.getTime() === s.getTime(), j = i === B;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": B,
                  className: `date-column ${x ? "today" : ""} ${j ? "focused" : ""}`,
                  tabIndex: j ? 0 : -1,
                  role: "button",
                  "aria-label": `${v.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${x ? " (Today)" : ""}`,
                  onFocus: () => l(B),
                  onKeyDown: u,
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
function nl({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = pe(!1), [u, d] = pe(-1), f = xe(null);
  ye(() => {
    l && u >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
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
          x.preventDefault(), f.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
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
        d(j), f.current?.querySelector(`[data-task-index="${j}"]`)?.focus();
        break;
      case "ArrowRight":
        x.preventDefault();
        const R = Math.min(t.length - 1, u + 1);
        d(R), f.current?.querySelector(`[data-task-index="${R}"]`)?.focus();
        break;
      case "Enter":
        x.preventDefault(), u >= 0 && a?.(t[u]);
        break;
      case " ":
        x.preventDefault(), u >= 0 && o?.(t[u]);
        break;
      case "Escape":
        x.preventDefault(), c(!1), d(-1), f.current?.focus();
        break;
    }
  }, v = (x) => {
    switch (x.key) {
      case "ArrowUp":
        x.preventDefault(), s === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        x.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        x.preventDefault(), f.current?.focus();
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
            onKeyDown: v,
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
              l || d(-1);
            },
            children: t.map((x, j) => /* @__PURE__ */ n.jsx(
              el,
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
function ef({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = xe(null), [l, c] = pe(800), u = ve(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const x = new Date(r);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : x;
  }, [r]), d = ve(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const x = new Date(a);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : x;
  }, [a]), f = ve(() => Math.ceil((d.getTime() - u.getTime()) / 864e5) + 1, [u, d]);
  ye(() => {
    if (!i.current) return;
    const x = new ResizeObserver((j) => {
      const F = j[0];
      F && c(Math.max(F.contentRect.width - 220, 400));
    });
    return x.observe(i.current), () => x.disconnect();
  }, []);
  const p = ve(
    () => Qi().domain([u, d]).range([0, l]),
    [u, d, l]
  ), v = ve(() => {
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
      "aria-colcount": f + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: B,
      children: [
        /* @__PURE__ */ n.jsx(tl, { viewStart: u, viewEnd: d, dateCount: f }),
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
              nl,
              {
                resource: x,
                tasks: v.get(x.id) || [],
                scale: p,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: j,
                dateCount: f
              },
              x.id
            ))
          }
        )
      ]
    }
  );
}
const Et = ({
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
) }), rl = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? Be.Children.toArray(t).filter(
    (F) => Be.isValidElement(F) && (F.type === Et || F.type?.displayName === "BreadcrumbItem")
  ).map((F) => ({
    text: typeof F.props.children == "string" ? F.props.children : String(F.props.children),
    href: F.props.href,
    active: F.props.active,
    attributes: F.props.attributes
  })) : [], u = () => t ? c() : o && s ? [{ href: o, text: s }] : e, d = () => {
    const j = u();
    if (j && j.length > 0) {
      const F = j.slice().reverse().find((R) => R.href && !R.active);
      if (F)
        return { href: F.href, text: F.text };
    }
    return { text: "Home" };
  }, f = u(), p = d(), v = X(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), x = f && f.length > 1 ? a : void 0;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: v,
      "aria-label": x,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          Be.Children.map(t, (j, F) => Be.isValidElement(j) && (j.type === Et || j.type?.displayName === "BreadcrumbItem") ? Be.cloneElement(j, { key: F }) : null)
        ) : (
          // Render from items array
          f?.map((j, F) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: j.active ? /* @__PURE__ */ n.jsx(
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
}, al = rl;
al.Item = Et;
Et.displayName = "BreadcrumbItem";
const _a = ({
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
        const f = document.querySelector(d);
        if (f) {
          f.hasAttribute("tabindex") || f.setAttribute("tabindex", "-1"), f.focus(), f.classList.add("nhsuk-skip-link-focused-element");
          const p = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
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
}, tf = ({
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
}, nf = ({
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
}, va = Be.forwardRef(({
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
}, f) => {
  const p = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    d.className
  ].filter(Boolean).join(" "), v = [
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
    const R = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Ye,
      {
        level: a,
        className: B,
        children: R()
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
      ref: f,
      children: [
        c && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: u || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: v, children: [
          x(),
          j(),
          F()
        ] })
      ]
    }
  );
});
va.displayName = "Card";
const rf = ({
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
}, af = ({
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
}, sf = ({
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
  "aria-label": f,
  "aria-labelledby": p,
  "aria-describedby": v
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
    const R = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], L = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        R,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Ye,
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
      "aria-label": f,
      "aria-labelledby": p,
      "aria-describedby": v,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          j(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: F() })
      ]
    }
  );
}, sl = ({
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
    Ye,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Ye,
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
  return /* @__PURE__ */ n.jsxs("div", { className: u, id: e, ...c, children: [
    d(),
    f()
  ] });
}, of = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = X("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, lf = ({
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
}, cf = ({
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
  classes: f,
  attributes: p,
  "data-testid": v
}) => {
  const B = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), x = X(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    d
  ), j = X(f), F = (w, $) => {
    const g = X("nhsuk-table__header", {
      [`nhsuk-table__header--${w.format}`]: w.format
    }, w.classes), M = {
      scope: "col",
      ...w.colspan && { colSpan: w.colspan },
      ...w.rowspan && { rowSpan: w.rowspan },
      ...s && { role: "columnheader" },
      ...w.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: g, ...M, children: w.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text }, $);
  }, R = (w, $, g) => {
    const M = o && g, D = X(
      M ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${M ? "header" : "cell"}--${w.format}`]: w.format
      },
      w.classes
    ), C = {
      ...M && { scope: "row" },
      ...w.colspan && { colSpan: w.colspan },
      ...w.rowspan && { rowSpan: w.rowspan },
      ...s && {
        role: M ? "rowheader" : "cell",
        ...w.header && { "data-label": w.header }
      },
      ...w.attributes
    }, k = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && w.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        w.header,
        " "
      ] }),
      w.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text
    ] }), h = M ? "th" : "td";
    return /* @__PURE__ */ n.jsx(h, { className: D, ...C, children: k }, $);
  }, L = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: x,
      ...s && { role: "table" },
      ...p,
      ...v && { "data-testid": v },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: B, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((w, $) => F(w, $)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((w, $) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: w.map(
              (g, M) => R(g, M, M === 0)
            )
          },
          $
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(sl, { className: u, children: [
    i && /* @__PURE__ */ n.jsx(Ye, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    L()
  ] }) : j ? /* @__PURE__ */ n.jsx("div", { className: j, children: L() }) : L();
}, df = ut(({
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
  ...f
}, p) => {
  const v = r !== void 0, [B, x] = pe(() => t || e[0]?.id || ""), j = v ? r : B, F = xe(null), R = xe(/* @__PURE__ */ new Map()), L = ee((k) => {
    v || x(k), a?.(k);
  }, [v, a]), w = ee((k) => {
    o?.(k), l && L(k);
  }, [o, l, L]), $ = ee((k, h) => {
    const _ = e.filter((P) => !P.disabled).map((P) => P.id), W = _.indexOf(h);
    let ae = null;
    switch (k.key) {
      case "ArrowLeft":
        ae = W > 0 ? W - 1 : _.length - 1;
        break;
      case "ArrowRight":
        ae = W < _.length - 1 ? W + 1 : 0;
        break;
      case "Home":
        ae = 0;
        break;
      case "End":
        ae = _.length - 1;
        break;
      case "Escape":
        k.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (ae !== null) {
      k.preventDefault();
      const P = _[ae], Q = R.current.get(P);
      Q && (Q.focus(), w(P));
    }
  }, [e, w, i]), g = ee((k, h) => {
    h ? R.current.set(k, h) : R.current.delete(k);
  }, []), M = ee((k) => {
    const h = R.current.get(k);
    h && h.focus();
  }, []);
  Jr(p, () => ({
    focusTab: M,
    getActiveTab: () => j,
    getTabListElement: () => F.current
  }), [M, j]);
  const D = ee((k) => {
    const h = k.relatedTarget;
    F.current?.contains(h) || s?.();
  }, [s]), C = X("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: C,
      id: u,
      "data-testid": d,
      ...f,
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
                children: e.map((k) => {
                  const h = k.id === j, _ = k.disabled, W = X("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": h,
                    "nhsuk-tabs__list-item--disabled": _
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: W, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (ae) => g(k.id, ae),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": h,
                      "aria-controls": `${k.id}-panel`,
                      id: `${k.id}-tab`,
                      tabIndex: h ? 0 : -1,
                      disabled: _,
                      onClick: () => !_ && L(k.id),
                      onKeyDown: (ae) => !_ && $(ae, k.id),
                      onFocus: () => !_ && w(k.id),
                      ...k.attributes,
                      children: k.label
                    }
                  ) }, k.id);
                })
              }
            )
          }
        ),
        e.map((k) => {
          const h = k.id === j;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${k.id}-tab`,
              id: `${k.id}-panel`,
              hidden: !h,
              children: k.content
            },
            k.id
          );
        })
      ]
    }
  );
}), ol = ut(
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
        ref: u,
        id: i,
        className: d,
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
ol.displayName = "Details";
const il = ut(
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
    ), f = (v) => t === "cross" && !a ? `do not ${v}` : v, p = () => /* @__PURE__ */ n.jsx(
      Ye,
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
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: u.join(" "), role: "list", children: r.map((v, B) => /* @__PURE__ */ n.jsxs("li", { children: [
            d(),
            f(v.item)
          ] }, B)) }) })
        ]
      }
    );
  }
);
il.displayName = "DoDontList";
const ll = ut(
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
        ref: u,
        id: i,
        className: d,
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
ll.displayName = "Expander";
const cl = ut(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const u = c + 1, d = `${t}-${u}-hint`, f = `${t}-${u}-status`, p = !!l.href, v = [
        "nhsuk-task-list__item",
        p && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), B = [
        l.hint && d,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        dl,
        {
          item: l,
          itemClasses: v,
          hasLink: p,
          hintId: d,
          statusId: f,
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
), dl = ({
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
    return e.status.tag ? d = /* @__PURE__ */ n.jsx(Ve, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ n.jsx("div", { className: u, id: o, children: d });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
cl.displayName = "TaskList";
const uf = ({
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
        Zr(
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
}, hf = ({
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
}, ul = ({
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
    /* @__PURE__ */ n.jsx(Ye, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, ff = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(As, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    er,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      children: /* @__PURE__ */ n.jsx(ul, { ...o })
    },
    s
  )) }) });
}, hl = Be.forwardRef(
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
    className: f,
    tableClassName: p,
    bordered: v = !1,
    striped: B = !1,
    responsive: x = !1,
    tableType: j = "default"
  }, F) => {
    const R = xe(null), L = xe(null), w = xe(null);
    Be.useImperativeHandle(F, () => R.current, []);
    const [$, g] = pe(0), [M, D] = pe(0), [C, k] = pe("headers"), [h, _] = pe("browse"), W = t.length, ae = e.length, P = ve(() => !r || r.length === 0 ? e : [...e].sort((A, O) => {
      for (const { key: q, direction: de } of r) {
        const m = A[q], T = O[q];
        if (m == null && T == null) continue;
        if (m == null) return 1;
        if (T == null) return -1;
        let G = 0;
        if (typeof m == "number" && typeof T == "number" ? G = m - T : G = String(m).localeCompare(String(T)), G !== 0)
          return de === "asc" ? G : -G;
      }
      return 0;
    }), [e, r]), Q = ee((A, O) => {
      setTimeout(() => {
        const q = R.current?.querySelector(
          `tbody tr:nth-child(${A + 1}) td:nth-child(${O + 1})`
        );
        q && (q.focus(), typeof q.scrollIntoView == "function" && q.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ne = ee((A) => {
      setTimeout(() => {
        const O = R.current?.querySelector(`th:nth-child(${A + 1})`);
        O && (O.focus(), typeof O.scrollIntoView == "function" && O.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ie = ee((A) => {
      a?.(A);
    }, [a]), le = ee((A) => {
      s?.(A);
    }, [s]), N = ee((A) => {
      const { key: O } = A;
      switch (O) {
        case "Enter":
          if (A.preventDefault(), C === "headers" && h === "browse")
            _("navigate"), ne(M);
          else if (C === "headers" && h === "navigate") {
            const q = t[M];
            q && ie(q.key);
          } else C === "cells" && h === "browse" ? (_("navigate"), Q($, M)) : C === "cells" && h === "navigate" && le($);
          break;
        case "Escape":
          A.preventDefault(), (C === "headers" && h === "navigate" || C === "cells" && h === "navigate") && _("browse");
          break;
        case "ArrowLeft":
          if (A.preventDefault(), h === "navigate" || h === "browse" && C === "headers") {
            if (C === "headers") {
              const q = Math.max(0, M - 1);
              D(q), ne(q);
            } else if (C === "cells") {
              const q = Math.max(0, M - 1);
              D(q), Q($, q);
            }
          }
          break;
        case "ArrowRight":
          if (A.preventDefault(), h === "navigate" || h === "browse" && C === "headers") {
            if (C === "headers") {
              const q = Math.min(W - 1, M + 1);
              D(q), ne(q);
            } else if (C === "cells") {
              const q = Math.min(W - 1, M + 1);
              D(q), Q($, q);
            }
          }
          break;
        case "ArrowUp":
          if (A.preventDefault(), C === "cells") {
            if (h === "browse") {
              const q = Math.max(0, $ - 1);
              g(q), Q(q, 0), D(0);
            } else if (h === "navigate")
              if ($ > 0) {
                const q = $ - 1;
                g(q), Q(q, M);
              } else
                k("headers"), _("browse"), ne(M);
          }
          break;
        case "ArrowDown":
          if (A.preventDefault(), C === "headers" && h === "browse")
            k("cells"), g(0), D(0), Q(0, 0);
          else if (C === "cells") {
            const q = ae - 1;
            if (h === "browse") {
              const de = Math.min(q, $ + 1);
              g(de), Q(de, 0), D(0);
            } else if (h === "navigate" && $ < q) {
              const de = $ + 1;
              g(de), Q(de, M);
            }
          }
          break;
        case "Home":
          A.preventDefault(), C === "headers" ? (D(0), ne(0)) : C === "cells" && (A.ctrlKey ? (g(0), D(0), Q(0, 0)) : (D(0), Q($, 0)));
          break;
        case "End":
          if (A.preventDefault(), C === "headers") {
            const q = W - 1;
            D(q), ne(q);
          } else if (C === "cells")
            if (A.ctrlKey) {
              const q = ae - 1, de = W - 1;
              g(q), D(de), Q(q, de);
            } else {
              const q = W - 1;
              D(q), Q($, q);
            }
          break;
        case " ":
          if (A.preventDefault(), C === "headers" && h === "navigate") {
            const q = t[M];
            q && ie(q.key);
          } else C === "cells" && h === "navigate" && le($);
          break;
      }
    }, [
      C,
      h,
      M,
      $,
      W,
      ae,
      t,
      Q,
      ne,
      ie,
      le
    ]);
    ye(() => {
      const A = R.current;
      if (A)
        return A.addEventListener("keydown", N), () => A.removeEventListener("keydown", N);
    }, [N]);
    const Y = X(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": x,
        "nhsuk-table--bordered": v,
        "nhsuk-table--striped": B,
        "nhsuk-table--compact": j === "compact"
      },
      f
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: R,
        className: Y,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": u,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: L, role: "row", children: t.map((A, O) => {
            const q = r?.find((T) => T.key === A.key), de = !!q, m = C === "headers" && M === O;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: X("sortable-header", {
                  "sortable-header--focused": m
                }),
                role: "columnheader",
                tabIndex: m ? 0 : -1,
                onClick: () => ie(A.key),
                onKeyDown: (T) => {
                  (T.key === "Enter" || T.key === " ") && (T.preventDefault(), ie(A.key));
                },
                "aria-sort": de ? q?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: A.label }),
                  de && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((T) => T.key === A.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: q?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              A.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: w, className: "nhsuk-table__body", role: "rowgroup", children: P.map((A, O) => {
            const q = o === O, de = C === "cells" && $ === O;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: X("data-row", {
                  "data-row--selected": q,
                  "data-row--focused": de
                }),
                "aria-selected": q,
                children: t.map((m, T) => {
                  const G = m.tableRenderer ? m.tableRenderer(A) : m.render ? m.render(A) : A[m.key], E = C === "cells" && $ === O && M === T, U = () => typeof G == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: G ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: G ? "Yes" : "No" })
                  ] }) : String(G ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: X("data-cell", {
                        "data-cell--focused": E
                      }),
                      tabIndex: E ? 0 : -1,
                      onClick: () => le(O),
                      children: U()
                    },
                    m.key
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
hl.displayName = "AriaDataGrid";
const ka = ({
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
  const f = xe(null), p = xe(null), v = xe(null), B = ee((C, k) => {
    c || (p.current = k, C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("text/plain", k));
  }, [c]), x = ee((C, k) => {
    c || p.current === k || (C.preventDefault(), C.dataTransfer.dropEffect = "move", v.current = k);
  }, [c]), j = ee((C, k) => {
    if (c) return;
    C.preventDefault();
    const h = p.current;
    if (!h || h === k) return;
    const _ = e.findIndex((ae) => ae.key === h), W = e.findIndex((ae) => ae.key === k);
    if (_ !== -1 && W !== -1) {
      const ae = [...e], [P] = ae.splice(_, 1);
      ae.splice(W, 0, P), r(ae);
    }
    p.current = null, v.current = null;
  }, [c, e, r]), F = ee(() => {
    p.current = null, v.current = null;
  }, []), R = ee((C) => {
    const k = t.find((h) => h.key === C);
    return k ? k.label : C;
  }, [t]), L = ee((C) => ["red", "orange", "blue", "aqua-green", "grey"][C] || "grey", []), w = ee((C) => {
    if (c) return;
    const k = e.map(
      (h) => h.key === C ? { ...h, direction: h.direction === "asc" ? "desc" : "asc" } : h
    );
    r(k);
  }, [e, r, c]), $ = ee((C) => {
    if (c) return;
    const k = e.filter((h) => h.key !== C);
    r(k);
  }, [e, r, c]), g = ee(() => {
    c || r([]);
  }, [r, c]), M = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const C = e.map((k, h) => {
      const _ = k.direction === "asc" ? "ascending" : "descending";
      return `${h + 1}. ${R(k.key)} (${_})`;
    });
    if (C.length === 1)
      return `Sorted by: ${C[0]}`;
    if (C.length === 2)
      return `Sorted by: ${C.join(" and ")}`;
    {
      const k = C.pop();
      return `Sorted by: ${C.join(", ")}, and ${k}`;
    }
  }, D = ve(() => {
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
          ref: f,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": u,
          "aria-describedby": D,
          children: e.map((C, k) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (h) => B(h, C.key),
              onDragOver: (h) => x(h, C.key),
              onDrop: (h) => j(h, C.key),
              onDragEnd: F,
              onClick: () => w(C.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${C.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": C.key,
              children: /* @__PURE__ */ n.jsx(
                Ve,
                {
                  color: L(k),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => $(C.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${k + 1}`, children: k + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: R(C.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (h) => {
                          h.stopPropagation(), w(C.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${R(C.key)}. Currently ${C.direction === "asc" ? "ascending" : "descending"}`,
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
          onClick: g,
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
function fl(e, t) {
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
const jn = ut(
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
      disabled: f = !1,
      orientation: p = "horizontal",
      id: v,
      isLoading: B = !1,
      loadingComponent: x,
      error: j = null,
      errorComponent: F,
      "data-testid": R
    } = t, {
      dataComparator: L = (m, T) => JSON.stringify(m) === JSON.stringify(T),
      filterFunction: w = (m) => m,
      booleanRenderer: $ = (m) => m ? "✓" : "✗"
    } = a || {}, g = s !== void 0, M = s ?? 0, [D, C] = pe({
      focusArea: "tabs",
      focusedTabIndex: M,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), k = ve(() => ({
      selectedIndex: M,
      tabLoadingStates: new Array(o.length).fill(!1),
      tabErrors: new Array(o.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(o.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [M]), [h, _] = Xr(fl, k);
    ye(() => {
      const m = h.tabLoadingStates.length, T = o.length;
      m !== T && _({ type: "ADJUST_ARRAYS", payload: { newLength: T } });
    }, [o.length]), ye(() => {
      g && _({ type: "SET_SELECTED_INDEX", payload: M });
    }, [M, g]), ye(() => {
      C((m) => ({
        ...m,
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
    const W = ee((m, T) => L(m, T), [L]), ae = ee((m) => {
      m >= 0 && m < o.length && !o[m].disabled && (_({ type: "SET_SELECTED_INDEX", payload: m }), C((T) => ({
        ...T,
        focusedTabIndex: m,
        focusArea: "tabs"
      })), i?.(m));
    }, [o, i]), P = ee((m) => {
      setTimeout(() => {
        const T = ne.current[m], G = T?.parentElement;
        if (T && G) {
          const E = T.offsetLeft, U = T.offsetWidth, z = G.clientWidth, S = E - z / 2 + U / 2;
          try {
            G.scrollTo({
              left: Math.max(0, S),
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
          console.log("Missing elements for scroll:", { tabElement: T, tabListElement: G });
      }, 50);
    }, []), Q = ee((m, T) => {
      const { key: G } = m;
      switch (G) {
        case "ArrowLeft":
          m.preventDefault();
          const E = T > 0 ? T - 1 : o.length - 1;
          ae(E), P(E), ne.current[E]?.focus();
          break;
        case "ArrowRight":
          m.preventDefault();
          const U = T < o.length - 1 ? T + 1 : 0;
          ae(U), P(U), ne.current[U]?.focus();
          break;
        case "ArrowDown":
          m.preventDefault(), C((S) => ({
            ...S,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        case "Home":
          m.preventDefault(), ae(0), P(0), ne.current[0]?.focus();
          break;
        case "End":
          m.preventDefault();
          const z = o.length - 1;
          ae(z), P(z), ne.current[z]?.focus();
          break;
        case "Enter":
        case " ":
          m.preventDefault(), ae(T);
          break;
      }
    }, [o.length, ae, P]), ne = xe([]), ie = xe([]), le = ee((m, T) => {
      const G = h.sortConfig || [], E = G.find((S) => S.key === T);
      let U;
      E ? E.direction === "asc" ? U = G.map(
        (S) => S.key === T ? { ...S, direction: "desc" } : S
      ) : U = G.filter((S) => S.key !== T) : U = [...G, { key: T, direction: "asc" }], _({
        type: "SET_SORT",
        payload: U
      }), o[m].onSort?.(T);
    }, [h.sortConfig, o]), N = ee((m) => {
      setTimeout(() => {
        const T = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] th:nth-child(${m + 1})`
        );
        T && T.focus();
      }, 0);
    }, [h.selectedIndex]), Y = ee((m) => $(m), [$]), A = ee((m, T) => {
      setTimeout(() => {
        const G = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] tbody tr:nth-child(${m + 1}) td:nth-child(${T + 1})`
        );
        G && G.focus();
      }, 0);
    }, [h.selectedIndex]);
    ye(() => {
      D.isGridActive && (D.focusArea === "headers" ? setTimeout(() => {
        N(D.focusedHeaderIndex);
      }, 0) : D.focusArea === "cells" && setTimeout(() => {
        A(D.focusedRowIndex, D.focusedColumnIndex);
      }, 0));
    }, [D.focusArea, D.isGridActive, D.focusedHeaderIndex, D.focusedRowIndex, D.focusedColumnIndex, N, A]), ye(() => {
      P(h.selectedIndex);
    }, [h.selectedIndex, P]);
    const O = ee((m, T) => {
      const { key: G } = m, E = o[h.selectedIndex], U = E?.columns.length || 0;
      switch (G) {
        case "ArrowLeft":
          m.preventDefault();
          const z = Math.max(0, T - 1);
          C((oe) => ({ ...oe, focusedHeaderIndex: z })), N(z);
          break;
        case "ArrowRight":
          m.preventDefault();
          const S = Math.min(U - 1, T + 1);
          C((oe) => ({ ...oe, focusedHeaderIndex: S })), N(S);
          break;
        case "ArrowUp":
          m.preventDefault(), C((oe) => ({
            ...oe,
            focusArea: "tabs",
            focusedTabIndex: h.selectedIndex
          })), P(h.selectedIndex), ne.current[h.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          m.preventDefault(), C((oe) => ({
            ...oe,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: T,
            isGridActive: !0
          }));
          break;
        case "Home":
          m.preventDefault(), C((oe) => ({ ...oe, focusedHeaderIndex: 0 })), N(0);
          break;
        case "End":
          m.preventDefault();
          const he = U - 1;
          C((oe) => ({ ...oe, focusedHeaderIndex: he })), N(he);
          break;
        case "Enter":
        case " ":
          m.preventDefault();
          const re = E?.columns[T]?.key;
          re && le(h.selectedIndex, re);
          break;
      }
    }, [o, h.selectedIndex, le, C, N, A, ne]), q = ee((m, T, G) => {
      const { key: E } = m, U = o[h.selectedIndex], z = U?.data.length || 0, S = U?.columns.length || 0;
      switch (E) {
        case "ArrowUp":
          if (m.preventDefault(), T === 0)
            C((K) => ({
              ...K,
              focusArea: "headers",
              focusedHeaderIndex: G,
              isGridActive: !1
            })), N(G);
          else {
            const K = T - 1;
            C((b) => ({ ...b, focusedRowIndex: K })), A(K, G);
          }
          break;
        case "ArrowDown":
          m.preventDefault();
          const he = Math.min(z - 1, T + 1);
          C((K) => ({ ...K, focusedRowIndex: he })), A(he, G);
          break;
        case "ArrowLeft":
          m.preventDefault();
          const re = Math.max(0, G - 1);
          C((K) => ({ ...K, focusedColumnIndex: re })), A(T, re);
          break;
        case "ArrowRight":
          m.preventDefault();
          const oe = Math.min(S - 1, G + 1);
          C((K) => ({ ...K, focusedColumnIndex: oe })), A(T, oe);
          break;
        case "Home":
          m.preventDefault(), m.ctrlKey ? (C((K) => ({ ...K, focusedRowIndex: 0, focusedColumnIndex: 0 })), A(0, 0)) : (C((K) => ({ ...K, focusedColumnIndex: 0 })), A(T, 0));
          break;
        case "End":
          if (m.preventDefault(), m.ctrlKey) {
            const K = z - 1, b = S - 1;
            C((y) => ({ ...y, focusedRowIndex: K, focusedColumnIndex: b })), A(K, b);
          } else {
            const K = S - 1;
            C((b) => ({ ...b, focusedColumnIndex: K })), A(T, K);
          }
          break;
        case "Enter":
        case " ":
          if (m.preventDefault(), U && U.data[T]) {
            const K = U.data.some((I) => "ews_data" in I) ? w(U.data, h.filters) : U.data, b = h.sortConfig;
            let y = K;
            if (b && b.length > 0 && (y = [...K].sort((I, H) => {
              for (const { key: V, direction: Z } of b) {
                let te = I[V], se = H[V];
                const J = U.columns.find((je) => je.key === V);
                if (J?.tableRenderer ? (te = J.tableRenderer(I), se = J.tableRenderer(H)) : J?.render && (te = J.render(I), se = J.render(H)), te == null && se == null) continue;
                if (te == null) return Z === "asc" ? -1 : 1;
                if (se == null) return Z === "asc" ? 1 : -1;
                let ce = 0;
                if (typeof te == "number" && typeof se == "number" ? ce = te - se : ce = String(te).localeCompare(String(se), void 0, { numeric: !0, sensitivity: "base" }), ce !== 0)
                  return Z === "asc" ? ce : -ce;
              }
              return 0;
            })), y[T]) {
              const I = y[T], V = h.globalSelectedRowData && W(h.globalSelectedRowData, I) ? null : I;
              _({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: V
              });
            }
          }
          break;
      }
    }, [o, h.selectedIndex, h.filters, h.sortConfig, w, W, _, C, N, A]), de = ee((m, T) => w(m, T), [w]);
    return Jr(r, () => ({
      selectTab: (m) => {
        m >= 0 && m < o.length && (_({ type: "SET_SELECTED_INDEX", payload: m }), i?.(m));
      },
      refreshData: (m) => {
        console.log("Refreshing data for tab:", m ?? "all");
      },
      exportData: (m) => {
        const T = m ?? h.selectedIndex, G = o[T];
        return G ? G.data : [];
      },
      getSelectedRows: (m) => h.globalSelectedRowData ? [] : [],
      clearSelection: (m) => {
        _({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (m) => {
        _({ type: "SET_FILTERS", payload: m });
      }
    }), [h.selectedIndex, h.selectedRows, o, i]), B ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": R, children: x || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : j ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": R, children: F || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: j })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${p} ${d}`,
        id: v,
        "data-testid": R,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${v}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            ka,
            {
              sortConfig: h.sortConfig || [],
              columns: o.flatMap(
                (m) => m.columns.map((T) => ({ key: T.key, label: T.label }))
              ).filter(
                (m, T, G) => G.findIndex((E) => E.key === m.key) === T
                // Remove duplicates
              ),
              onSortChange: (m) => {
                _({ type: "SET_SORT", payload: m });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": `${u || ""} ${v ? `${v}-navigation-help` : ""}`.trim(),
              "aria-orientation": p,
              className: "aria-tabs-datagrid__tabs",
              children: o.map((m, T) => {
                const G = T === h.selectedIndex, E = m.disabled || f;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${m.id}`,
                    "aria-controls": `panel-${m.id}`,
                    "aria-selected": G,
                    "aria-disabled": E,
                    tabIndex: G ? 0 : -1,
                    ref: (U) => {
                      ne.current[T] = U;
                    },
                    onClick: () => ae(T),
                    onKeyDown: (U) => Q(U, T),
                    disabled: E,
                    className: [
                      "aria-tabs-datagrid__tab",
                      G ? "aria-tabs-datagrid__tab--selected" : "",
                      E ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: m.label }),
                      h.tabLoadingStates[T] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      h.tabErrors[T] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  m.id
                );
              })
            }
          ),
          o.map((m, T) => {
            const G = T === h.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${m.id}`,
                "aria-labelledby": `tab-${m.id}`,
                tabIndex: 0,
                hidden: !G,
                ref: (E) => {
                  ie.current[T] = E;
                },
                className: `aria-tabs-datagrid__panel ${m.className || ""}`,
                "data-tab-panel": T,
                children: G && (() => {
                  const E = m.data.some((z) => "ews_data" in z) ? de(m.data, h.filters) : m.data, U = ve(() => {
                    const z = h.sortConfig;
                    return !z || z.length === 0 ? E : [...E].sort((S, he) => {
                      for (const { key: re, direction: oe } of z) {
                        let K = S[re], b = he[re];
                        const y = m.columns.find((H) => H.key === re);
                        if (y?.tableRenderer ? (K = y.tableRenderer(S), b = y.tableRenderer(he)) : y?.render && (K = y.render(S), b = y.render(he)), K == null && b == null) continue;
                        if (K == null) return 1;
                        if (b == null) return -1;
                        let I = 0;
                        if (typeof K == "number" && typeof b == "number" ? I = K - b : typeof K == "boolean" && typeof b == "boolean" ? I = K === b ? 0 : K ? 1 : -1 : I = String(K).localeCompare(String(b), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), I !== 0)
                          return oe === "asc" ? I : -I;
                      }
                      return 0;
                    });
                  }, [E, h.sortConfig, m.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": m.ariaLabel,
                      "aria-describedby": m.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: m.columns.map((z, S) => {
                          const he = h.sortConfig?.find((K) => K.key === z.key), re = !!he, oe = D.focusArea === "headers" && D.focusedHeaderIndex === S;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${oe ? "sortable-header--focused" : ""} ${re ? "sortable-header--sorted" : ""}`,
                              role: "columnheader",
                              tabIndex: oe ? 0 : -1,
                              onClick: () => le(T, z.key),
                              onKeyDown: (K) => O(K, S),
                              "aria-sort": re ? he?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: z.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${re ? `sort-indicator--${he?.direction}` : ""}`, children: [
                                  h.sortConfig && h.sortConfig.length > 0 && h.sortConfig.findIndex((K) => K.key === z.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${h.sortConfig.findIndex((K) => K.key === z.key) + 1}`,
                                      "data-priority": h.sortConfig.findIndex((K) => K.key === z.key) + 1,
                                      title: `Sort priority: ${h.sortConfig.findIndex((K) => K.key === z.key) + 1}`,
                                      children: h.sortConfig.findIndex((K) => K.key === z.key) + 1
                                    }
                                  ),
                                  re && /* @__PURE__ */ n.jsx(
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
                                ] })
                              ] })
                            },
                            z.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: U.map((z, S) => {
                          const he = h.globalSelectedRowData && W(h.globalSelectedRowData, z), re = D.focusArea === "cells" && D.focusedRowIndex === S;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${he ? "data-row--selected" : ""} ${re ? "data-row--focused" : ""}`,
                              "aria-selected": he,
                              children: m.columns.map((oe, K) => {
                                const b = oe.tableRenderer ? oe.tableRenderer(z) : oe.render ? oe.render(z) : z[oe.key], y = D.focusArea === "cells" && D.focusedRowIndex === S && D.focusedColumnIndex === K, I = () => typeof b == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  Y(b),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: b ? "Yes" : "No" })
                                ] }) : String(b ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${y ? "data-cell--focused" : ""}`,
                                    tabIndex: y ? 0 : -1,
                                    onClick: () => {
                                      const V = h.globalSelectedRowData && W(h.globalSelectedRowData, z) ? null : z;
                                      _({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: V
                                      });
                                    },
                                    onKeyDown: (H) => q(H, S, K),
                                    children: I()
                                  },
                                  oe.key
                                );
                              })
                            },
                            S
                          );
                        }) })
                      ]
                    }
                  );
                })()
              },
              m.id
            );
          })
        ]
      }
    );
  }
), jt = {
  asc: "↑",
  desc: "↓"
}, ml = (e) => [...e].sort((t, r) => t.priority - r.priority);
function kn(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function pl(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function gl(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function bl(e, t) {
  const r = t.find((o) => o.id === e), a = pl(t);
  return r ? r.priority < a : !1;
}
const mf = ({
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
  const d = ve(() => ml(e), [e]), f = ee((R) => {
    if (l) return;
    const L = e.map(
      (w) => w.id === R ? { ...w, direction: w.direction === "asc" ? "desc" : "asc" } : w
    );
    t(L);
  }, [e, t, l]), p = ee((R) => {
    if (l) return;
    const L = e.findIndex(($) => $.id === R);
    if (L <= 0) return;
    const w = [...e];
    [w[L], w[L - 1]] = [w[L - 1], w[L]], t(kn(w));
  }, [e, t, l]), v = ee((R) => {
    if (l) return;
    const L = e.findIndex(($) => $.id === R);
    if (L >= e.length - 1 || L === -1) return;
    const w = [...e];
    [w[L], w[L + 1]] = [w[L + 1], w[L]], t(kn(w));
  }, [e, t, l]), B = ee((R) => {
    if (l) return;
    const L = e.filter((w) => w.id !== R);
    t(kn(L));
  }, [e, t, l]), x = ee(() => {
    l || t([]);
  }, [t, l]), j = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const R = d.map((L, w) => {
      const $ = L.direction === "asc" ? "ascending" : "descending";
      return `${w + 1}. ${L.label} (${$})`;
    });
    if (R.length === 1)
      return `Sorted by: ${R[0]}`;
    if (R.length === 2)
      return `Sorted by: ${R.join(" and ")}`;
    {
      const L = R.pop();
      return `Sorted by: ${R.join(", ")}, and ${L}`;
    }
  }, F = ve(() => {
    const R = ["sort-description"];
    return i && R.push("sort-help"), u && R.push(u), R.join(" ");
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
          d.map((R) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Ve,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => B(R.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: R.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: R.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(R.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${R.label}. Currently ${R.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: R.direction === "asc" ? jt.asc : jt.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(R.id),
                          disabled: l || !gl(R.id, e),
                          "aria-label": `Move ${R.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => v(R.id),
                          disabled: l || !bl(R.id, e),
                          "aria-label": `Move ${R.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            R.id
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
      jt.asc,
      "/",
      jt.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, dr = (e, t) => t.map((r) => ({
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
})), Nn = [
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
], xl = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), yl = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, _l = (e) => {
  if (typeof e == "boolean") {
    const r = Nn.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = Nn.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, vl = (e) => `${e.name}-${e.bed_name}`, kl = () => ({
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
}), pf = (e) => {
  const t = kl();
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
}, wl = {
  dataComparator: xl,
  filterFunction: yl,
  booleanRenderer: _l,
  getDataId: vl
};
function zr(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: u = {},
    classPrefix: d = "adaptive-card"
  } = r, f = t.find((L) => L.key === a), p = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", v = () => o.filter((w) => !i.includes(w) && e[w]).slice(0, 3).map((w) => {
    const $ = t.find((C) => C.key === w), g = e[w], M = u[w] ? u[w](g, e) : $?.cardRenderer ? $.cardRenderer(e) : $?.render ? $.render(e) : g;
    return `${$?.label || w}: ${M}`;
  }).join(" • "), B = () => s.length === 0 ? null : s.filter((L) => e[L.fieldKey] !== void 0).map((L) => {
    const w = e[L.fieldKey], $ = L.render ? L.render(w, e) : w;
    return `<span class="nhsuk-tag ${Sl(L, w)}">${$}</span>`;
  }).join(""), x = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", j = B(), F = v(), R = j ? `${F}${j ? `<div class="adaptive-card__badges">${j}</div>` : ""}` : F;
  return {
    variant: x(),
    heading: String(p),
    descriptionHtml: R,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${p}`
  };
}
function Sl(e, t) {
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
const Cl = {
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
}, wa = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, c = e.ward_name, u = e.bed_name, d = e.ews_score, f = e.speciality, p = e.consultant;
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
            Ve,
            {
              color: Nl(Na(d)),
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
            /* @__PURE__ */ n.jsx("dd", { children: f })
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
              onClick: (v) => {
                v.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            De,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (v) => {
                v.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            De,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (v) => {
                v.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, Sa = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        Ve,
        {
          color: Tl(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        Ve,
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
] }), Ca = ({
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
        Ve,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        Ve,
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
] }), ja = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, c = e.ews_data?.temperature, u = e.ews_data?.systolic_bp, d = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${jl(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ n.jsxs(
            Ve,
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
function Na(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function jl(e) {
  return Na(e);
}
function Nl(e) {
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
function Tl(e) {
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
const Dl = [
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
], Ta = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Fl = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Bl = (e) => Ta(e) === "high" || e.status === "urgent" ? "primary" : "default", Il = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Rl = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Dl,
  hiddenFields: [],
  getPriority: Ta,
  getStatus: Fl,
  getVariant: Bl,
  fieldRenderers: Il,
  classPrefix: "adaptive-card--healthcare"
}, Ll = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", o = r.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ n.jsx(
      wa,
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
      Sa,
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
      Ca,
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
      ja,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, El = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Wr = {
  name: "healthcare",
  defaultCardConfig: Rl,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Ll,
  fieldTypes: El
};
function Or(e) {
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
function Ur(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function Ml(e, t) {
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
function $l(e, t) {
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
function Al(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Hl(e, t, r, a) {
  const o = a ? { ...a.defaultCardConfig, ...r } : { ...Cl, ...r };
  if (a && a.cardTemplates) {
    const s = Al(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), zr(e, t, o);
}
const gf = ({
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
  orientation: f = "horizontal",
  id: p,
  disabled: v = !1,
  className: B,
  ...x
}) => {
  const j = $l(e, t), F = l !== void 0, R = l ?? 0, L = ve(() => {
    if (s.some(
      (y) => y.data && y.data.length > 0 && Ur(y.data)
    )) {
      const y = Or(r);
      return {
        ...Wr.defaultCardConfig,
        ...y
      };
    } else
      return Or(r);
  }, [r, s]), w = ve(() => s.some(
    (y) => y.data && y.data.length > 0 && Ur(y.data)
  ) ? Wr : void 0, [s]), $ = ve(() => ({
    selectedIndex: R,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [R, s.length]), [g, M] = Xr(Ml, $), D = xe([]), C = xe([]), k = xe([]), h = xe(null), [_, W] = pe({
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
  }), ae = ee((b) => {
    if (!b.current)
      return { columns: 1, rows: 0 };
    const y = b.current, I = y.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (I.length === 0)
      return { columns: 1, rows: 0 };
    const H = y.offsetWidth, Z = I[0].offsetWidth, te = Math.floor(H / Z) || 1, se = Math.ceil(I.length / te);
    return { columns: te, rows: se };
  }, []), P = ee((b, y) => ({
    row: Math.floor(b / y),
    col: b % y
  }), []), Q = ee((b, y, I) => b * I + y, []), ne = ee((b, y, I, H) => {
    const { row: V, col: Z } = P(b, H);
    let te = V, se = Z;
    switch (y) {
      case "up":
        te = Math.max(0, V - 1);
        break;
      case "down":
        te = Math.min(Math.floor((I - 1) / H), V + 1);
        break;
      case "left":
        se = Math.max(0, Z - 1);
        break;
      case "right":
        se = Math.min(H - 1, Z + 1);
        break;
    }
    const J = Q(te, se, H);
    return Math.min(J, I - 1);
  }, [P, Q]);
  ye(() => {
    _.isCardNavigationActive && _.focusedCardElementIndex >= 0 && _.cardElements.length > 0 && setTimeout(() => {
      const b = _.cardElements[_.focusedCardElementIndex];
      b && (b.element.focus(), b.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [_.isCardNavigationActive, _.focusedCardElementIndex, _.cardElements.length]), ye(() => {
    const b = () => {
      if (j === "cards" && h.current) {
        const { columns: H, rows: V } = ae(h);
        W((Z) => ({
          ...Z,
          gridColumns: H,
          gridRows: V
        }));
      }
    }, y = setTimeout(b, 200), I = () => {
      setTimeout(b, 100);
    };
    return window.addEventListener("resize", I), () => {
      clearTimeout(y), window.removeEventListener("resize", I);
    };
  }, [j, s, ae]), ye(() => {
    const b = g.tabLoadingStates.length, y = s.length;
    b !== y && M({ type: "ADJUST_ARRAYS", payload: { newLength: y } });
  }, [s.length, g.tabLoadingStates.length]), ye(() => {
    F && l !== g.selectedIndex && M({ type: "SET_SELECTED_INDEX", payload: l });
  }, [F, l, g.selectedIndex]);
  const ie = ee((b) => {
    b >= 0 && b < s.length && !s[b].disabled && (M({ type: "SET_SELECTED_INDEX", payload: b }), c?.(b));
  }, [s, c]), le = ee((b) => {
    console.log("Card selected:", b), M({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: b
    });
  }, []), N = ee((b) => {
    const y = C.current[b];
    y && (y.focus(), y.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), Y = ee((b) => {
    const y = C.current[b];
    if (!y) return [];
    const I = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), H = y.querySelectorAll(I);
    return Array.from(H).map((V, Z) => ({
      id: V.id || `card-${b}-element-${Z}`,
      element: V,
      label: V.getAttribute("aria-label") || V.textContent?.trim() || V.getAttribute("title") || `Element ${Z + 1}`,
      type: V.tagName.toLowerCase() === "button" ? "button" : V.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(V.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), A = xe(null), O = ee((b) => {
    const y = A.current;
    if (!y) return;
    const I = document.createElement("div");
    I.setAttribute("aria-live", "polite"), I.setAttribute("aria-atomic", "true"), I.className = "sr-only", I.textContent = b, y.appendChild(I), setTimeout(() => {
      y.contains(I) && y.removeChild(I);
    }, 1e3);
  }, []), q = ee((b) => {
    const y = b.filter((H) => H.sortable !== !1), I = [
      { value: "", label: "Sort by..." }
    ];
    return y.forEach((H) => {
      const V = H.label || H.key;
      H.key === "name" ? I.push(
        { value: `${H.key}-asc`, label: `${V} (A-Z)` },
        { value: `${H.key}-desc`, label: `${V} (Z-A)` }
      ) : H.key === "ews_score" || H.key.includes("score") ? I.push(
        { value: `${H.key}-desc`, label: `${V} (High-Low)` },
        { value: `${H.key}-asc`, label: `${V} (Low-High)` }
      ) : H.key === "age" || H.key.includes("date") || H.key.includes("time") ? I.push(
        { value: `${H.key}-desc`, label: `${V} (Oldest-Youngest)` },
        { value: `${H.key}-asc`, label: `${V} (Youngest-Oldest)` }
      ) : I.push(
        { value: `${H.key}-asc`, label: `${V} (A-Z)` },
        { value: `${H.key}-desc`, label: `${V} (Z-A)` }
      );
    }), I;
  }, []), de = ee((b, y) => y ? [...b].sort((I, H) => {
    const V = I[y.key], Z = H[y.key];
    if (V == null && Z == null) return 0;
    if (V == null) return 1;
    if (Z == null) return -1;
    const te = Number(V), se = Number(Z);
    if (!isNaN(te) && !isNaN(se))
      return y.direction === "asc" ? te - se : se - te;
    const J = String(V).toLowerCase(), ce = String(Z).toLowerCase(), je = J.localeCompare(ce);
    return y.direction === "asc" ? je : -je;
  }) : b, []), m = ee((b) => {
    if (!b) {
      W((J) => ({ ...J, cardSortConfig: null })), O("Card sorting cleared");
      return;
    }
    const [y, I] = b.split("-"), H = { key: y, direction: I };
    W((J) => ({ ...J, cardSortConfig: H }));
    const te = s[g.selectedIndex]?.columns.find((J) => J.key === y)?.label || y;
    O(`Cards sorted by ${te} in ${I === "asc" ? "ascending" : "descending"} order`);
  }, [s, g.selectedIndex, O]), T = ee((b) => {
    const H = s[g.selectedIndex]?.columns.find((Z) => Z.key === b.key)?.label || b.key, V = b.direction === "asc" ? "ascending" : "descending";
    return `${H} (${V})`;
  }, [s, g.selectedIndex]), G = ee((b) => {
    const y = s[g.selectedIndex];
    if (o) {
      const I = g.sortConfig;
      return !I || I.length === 0 ? b : [...b].sort((H, V) => {
        for (const { key: Z, direction: te } of I) {
          let se = H[Z], J = V[Z];
          const ce = y?.columns.find((Je) => Je.key === Z);
          if (ce?.cardRenderer ? (se = ce.cardRenderer(H), J = ce.cardRenderer(V)) : ce?.render && (se = ce.render(H), J = ce.render(V)), se == null && J == null) continue;
          if (se == null) return te === "asc" ? -1 : 1;
          if (J == null) return te === "asc" ? 1 : -1;
          const je = Number(se), _e = Number(J);
          if (!isNaN(je) && !isNaN(_e)) {
            const Je = je - _e;
            if (Je !== 0) return te === "asc" ? Je : -Je;
            continue;
          }
          const Ce = String(se).toLowerCase(), un = String(J).toLowerCase(), rt = Ce.localeCompare(un);
          if (rt !== 0) return te === "asc" ? rt : -rt;
        }
        return 0;
      });
    } else
      return de(b, _.cardSortConfig);
  }, [o, g.sortConfig, _.cardSortConfig, de, s, g.selectedIndex]), E = ee((b, y) => {
    const I = Y(b), H = I[y];
    if (H) {
      H.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const V = `Focused on ${H.label}, ${H.type} ${y + 1} of ${I.length} within card`;
      O(V);
    }
  }, [Y, O]), U = ee((b) => {
    D.current[b]?.focus();
  }, []), z = ee(() => {
    const b = k.current[0];
    if (!b) return [];
    const y = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), I = b.querySelectorAll(y);
    return Array.from(I);
  }, []), S = ee((b) => {
    if (b === 0) {
      const y = k.current[0];
      if (y) {
        y.focus();
        const H = `Sort controls region with ${z().length} interactive elements. Press Enter or Space to navigate between controls.`;
        O(H);
      }
    } else {
      const y = z(), I = b - 1, H = y[I];
      if (H) {
        H.focus();
        const V = H.tagName.toLowerCase() === "select", Z = H.tagName.toLowerCase() === "button", te = V ? "dropdown" : Z ? "button" : "control", se = V ? ". Use Space key to open dropdown" : "", J = `${te} ${I + 1} of ${y.length}${se}`;
        O(J);
      }
    }
  }, [z, O]), he = ee((b, y) => {
    const { key: I } = b, H = s[g.selectedIndex], V = H?.data.length || 0;
    if (I === "ArrowLeft" && b.shiftKey) {
      b.preventDefault(), b.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (I === "ArrowRight" && b.shiftKey) {
      b.preventDefault(), b.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!_.isCardNavigationActive) {
      switch (I) {
        case "ArrowUp":
          if (b.preventDefault(), y === 0)
            W((J) => ({ ...J, focusArea: "tabs" })), U(g.selectedIndex);
          else {
            const J = ne(y, "up", V, _.gridColumns);
            J !== y && (W((ce) => ({ ...ce, focusedCardIndex: J })), N(J), O(`Moved to card ${J + 1} of ${V}`));
          }
          break;
        case "ArrowDown":
          b.preventDefault();
          const Z = ne(y, "down", V, _.gridColumns);
          Z !== y && (W((J) => ({ ...J, focusedCardIndex: Z })), N(Z), O(`Moved to card ${Z + 1} of ${V}`));
          break;
        case "ArrowLeft":
          b.preventDefault();
          const te = ne(y, "left", V, _.gridColumns);
          te !== y ? (W((J) => ({ ...J, focusedCardIndex: te })), N(te), O(`Moved to card ${te + 1} of ${V}`)) : g.selectedIndex > 0 && (M({ type: "SET_SELECTED_INDEX", payload: g.selectedIndex - 1 }), W((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => U(g.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          b.preventDefault();
          const se = ne(y, "right", V, _.gridColumns);
          se !== y ? (W((J) => ({ ...J, focusedCardIndex: se })), N(se), O(`Moved to card ${se + 1} of ${V}`)) : g.selectedIndex < s.length - 1 && (M({ type: "SET_SELECTED_INDEX", payload: g.selectedIndex + 1 }), W((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => U(g.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (H?.data[y]) {
            b.preventDefault(), W((ce) => ({
              ...ce,
              selectedCardIndex: y
            }));
            const J = Y(y);
            J.length > 0 ? (W((ce) => ({
              ...ce,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: J,
              selectedCardIndex: y
              // Ensure selection is maintained
            })), O(`Card ${y + 1} selected and navigation activated. ${J.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : O(`Card ${y + 1} selected.`);
          }
          break;
        case " ":
          if (H?.data[y]) {
            b.preventDefault(), W((ce) => ({
              ...ce,
              selectedCardIndex: ce.selectedCardIndex === y ? -1 : y
            }));
            const J = _.selectedCardIndex === y;
            O(`Card ${y + 1} ${J ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (I) {
      case "ArrowUp":
      case "ArrowLeft":
        b.preventDefault();
        const Z = Math.max(0, _.focusedCardElementIndex - 1);
        W((ce) => ({ ...ce, focusedCardElementIndex: Z })), E(y, Z);
        break;
      case "ArrowDown":
      case "ArrowRight":
        b.preventDefault();
        const te = Math.min(_.cardElements.length - 1, _.focusedCardElementIndex + 1);
        W((ce) => ({ ...ce, focusedCardElementIndex: te })), E(y, te);
        break;
      case "Enter":
        b.preventDefault();
        const se = _.cardElements[_.focusedCardElementIndex];
        se && (se.element.click(), O(`Activated ${se.label}`));
        break;
      case " ":
        b.preventDefault();
        const J = _.cardElements[_.focusedCardElementIndex];
        if (J) {
          const ce = new MouseEvent("dblclick", { bubbles: !0 });
          J.element.dispatchEvent(ce), O(`Double-clicked ${J.label}`);
        }
        break;
      case "Escape":
        b.preventDefault(), W((ce) => ({
          ...ce,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => N(y), 0), O("Exited card navigation, returned to card level");
        break;
      case "Home":
        b.preventDefault(), _.cardElements.length > 0 && (W((ce) => ({ ...ce, focusedCardElementIndex: 0 })), E(y, 0));
        break;
      case "End":
        if (b.preventDefault(), _.cardElements.length > 0) {
          const ce = _.cardElements.length - 1;
          W((je) => ({ ...je, focusedCardElementIndex: ce })), E(y, ce);
        }
        break;
    }
  }, [_, g.selectedIndex, s, le, N, U, W, Y, E, O]), re = ee((b) => {
    const y = D.current[b], I = y?.parentElement;
    if (!y || !I) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const H = y.getBoundingClientRect(), V = I.getBoundingClientRect();
    H.left >= V.left && H.right <= V.right || (console.log("Tab not visible, scrolling into view (mobile)"), y.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), oe = ee((b, y) => {
    if (j !== "cards")
      return;
    const { key: I } = b;
    switch (I) {
      case "ArrowLeft":
        b.preventDefault();
        const H = y > 0 ? y - 1 : s.length - 1;
        ie(H), W((se) => ({ ...se, focusedTabIndex: H })), D.current[H]?.focus(), re(H);
        break;
      case "ArrowRight":
        b.preventDefault();
        const V = y < s.length - 1 ? y + 1 : 0;
        ie(V), W((se) => ({ ...se, focusedTabIndex: V })), D.current[V]?.focus(), re(V);
        break;
      case "ArrowDown":
        b.preventDefault();
        const Z = s[g.selectedIndex];
        Z && Z.columns && Z.columns.length > 0 ? (W((se) => ({
          ...se,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), S(0)) : (W((se) => ({
          ...se,
          focusArea: "cards",
          focusedCardIndex: 0
        })), N(0));
        break;
      case "Home":
        b.preventDefault(), ie(0), W((se) => ({ ...se, focusedTabIndex: 0 })), D.current[0]?.focus(), re(0);
        break;
      case "End":
        b.preventDefault();
        const te = s.length - 1;
        ie(te), W((se) => ({ ...se, focusedTabIndex: te })), D.current[te]?.focus(), re(te);
        break;
      case "Enter":
      case " ":
        b.preventDefault(), ie(y);
        break;
    }
  }, [s.length, ie, j, N, W, re]), K = ee((b, y) => {
    if (j !== "cards")
      return;
    const { key: I } = b, H = s[g.selectedIndex];
    if (y === 0 && !_.isSortControlsActive) {
      switch (I) {
        case "ArrowUp":
          b.preventDefault(), W((Z) => ({
            ...Z,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), U(g.selectedIndex);
          break;
        case "ArrowDown":
          b.preventDefault(), H?.data && H.data.length > 0 && (W((Z) => ({
            ...Z,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), N(0));
          break;
        case "Enter":
        case " ":
          b.preventDefault();
          const V = z();
          if (V.length > 0) {
            W((te) => ({
              ...te,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), S(1);
            const Z = `Entered sort controls navigation mode. ${V.length} controls available. Use arrow keys to navigate between controls.`;
            O(Z);
          }
          break;
        case "Escape":
          b.preventDefault(), W((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), U(g.selectedIndex);
          break;
      }
      return;
    }
    if (_.isSortControlsActive) {
      const Z = z().length;
      switch (I) {
        case "ArrowLeft":
          b.preventDefault();
          const te = _.focusedSortControlIndex > 1 ? _.focusedSortControlIndex - 1 : Z;
          W((J) => ({ ...J, focusedSortControlIndex: te })), S(te);
          break;
        case "ArrowRight":
          b.preventDefault();
          const se = _.focusedSortControlIndex < Z ? _.focusedSortControlIndex + 1 : 1;
          W((J) => ({ ...J, focusedSortControlIndex: se })), S(se);
          break;
        case "ArrowDown":
          if (b.preventDefault(), _.isSortControlsActive) {
            const J = _.focusedSortControlIndex < Z ? _.focusedSortControlIndex + 1 : 1;
            W((ce) => ({ ...ce, focusedSortControlIndex: J })), S(J);
          } else
            H?.data && H.data.length > 0 && (W((J) => ({
              ...J,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), N(0));
          break;
        case "ArrowUp":
          b.preventDefault(), W((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), S(0);
          break;
        case "Escape":
          b.preventDefault(), W((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), U(g.selectedIndex);
          break;
      }
    }
  }, [j, s, g.selectedIndex, _.isSortControlsActive, _.focusedSortControlIndex, S, U, N, W, O]);
  if (j === "cards") {
    const b = s[g.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${B || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": u,
          "aria-describedby": `${d || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
          "aria-orientation": f,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((y, I) => {
            const H = I === g.selectedIndex, V = y.disabled || v;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${y.id}`,
                "aria-controls": `panel-${y.id}`,
                "aria-selected": H,
                "aria-disabled": V,
                tabIndex: H ? 0 : -1,
                ref: (Z) => {
                  D.current[I] = Z;
                },
                onClick: () => ie(I),
                onKeyDown: (Z) => oe(Z, I),
                disabled: V,
                className: [
                  "aria-tabs-datagrid__tab",
                  H ? "aria-tabs-datagrid__tab--selected" : "",
                  V ? "aria-tabs-datagrid__tab--disabled" : ""
                ].filter(Boolean).join(" "),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: y.label }),
                  g.tabLoadingStates[I] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  g.tabErrors[I] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              y.id
            );
          })
        }
      ),
      b && b.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          ka,
          {
            sortConfig: g.sortConfig || [],
            columns: b.columns.map((y) => ({ key: y.key, label: y.label })),
            onSortChange: (y) => {
              M({ type: "SET_SORT", payload: y });
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
            tabIndex: _.focusArea === "sort-controls" ? 0 : -1,
            ref: (y) => {
              k.current[0] = y;
            },
            onKeyDown: (y) => K(y, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${b.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  ta,
                  {
                    id: `card-sort-${b.id}`,
                    name: `card-sort-${b.id}`,
                    value: _.cardSortConfig ? `${_.cardSortConfig.key}-${_.cardSortConfig.direction}` : "",
                    onChange: (y) => m(y.target.value),
                    className: "sort-select",
                    children: q(b.columns).map((y) => /* @__PURE__ */ n.jsx("option", { value: y.value, children: y.label }, y.value))
                  }
                )
              ] }),
              _.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  T(_.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  De,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => m(""),
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
          "aria-label": `${b?.label || "Data"} cards in ${_.gridRows} rows and ${_.gridColumns} columns`,
          "aria-rowcount": _.gridRows,
          "aria-colcount": _.gridColumns,
          id: `panel-${b?.id}`,
          "aria-labelledby": `tab-${b?.id}`,
          children: G(b?.data || []).map((y, I) => {
            const H = _.selectedCardIndex === I, V = _.focusedCardIndex === I && _.focusArea === "cards", Z = _.focusedCardIndex === I && _.focusArea === "card" && _.isCardNavigationActive, te = I === 0 && _.focusArea !== "cards", se = V || te, J = P(I, _.gridColumns);
            if (r.cardTemplate) {
              const _e = r.cardTemplate(y, b.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: (Ce) => {
                    C.current[I] = Ce;
                  },
                  className: [
                    "aria-tabs-datagrid-adaptive__card-wrapper",
                    H ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                    V ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                    Z ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                  ].filter(Boolean).join(" "),
                  role: "gridcell",
                  "aria-rowindex": J.row + 1,
                  "aria-colindex": J.col + 1,
                  "aria-selected": H,
                  "aria-expanded": Z,
                  "aria-description": Z ? `Card navigation active. ${_.cardElements.length} interactive elements available.` : void 0,
                  tabIndex: se ? 0 : -1,
                  onClick: () => {
                    W((Ce) => ({
                      ...Ce,
                      selectedCardIndex: Ce.selectedCardIndex === I ? -1 : I
                    })), le(y);
                  },
                  onKeyDown: (Ce) => he(Ce, I),
                  onFocus: () => {
                    W((Ce) => Ce.focusedCardIndex !== I || Ce.focusArea !== "cards" ? {
                      ...Ce,
                      focusedCardIndex: I,
                      focusArea: "cards"
                    } : Ce);
                  },
                  children: _e
                },
                `card-${I}`
              );
            }
            const ce = Hl(y, b.columns, L, w), je = [
              ce.className || "",
              H ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              V ? "aria-tabs-datagrid-adaptive__card--focused" : "",
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
                  va,
                  {
                    ...ce,
                    ref: (_e) => {
                      C.current[I] = _e;
                    },
                    className: je,
                    "aria-selected": H,
                    "aria-expanded": Z,
                    "aria-label": `${ce["aria-label"] || ce.heading}. ${Z ? `Card navigation active with ${_.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                    tabIndex: se ? 0 : -1,
                    onClick: () => {
                      W((_e) => ({
                        ..._e,
                        selectedCardIndex: _e.selectedCardIndex === I ? -1 : I
                      })), le(y);
                    },
                    onKeyDown: (_e) => he(_e, I),
                    onFocus: () => {
                      _.isCardNavigationActive || W((_e) => _e.focusedCardIndex !== I || _e.focusArea !== "cards" ? {
                        ..._e,
                        focusedCardIndex: I,
                        focusArea: "cards",
                        // Reset card navigation state when switching cards
                        focusedCardElementIndex: 0,
                        cardElements: []
                      } : _e);
                    }
                  }
                )
              },
              `card-${I}`
            );
          })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: A,
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
    jn,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: u,
      ariaDescription: d,
      orientation: f,
      id: p,
      disabled: v,
      selectedIndex: l,
      onTabChange: c,
      className: "aria-tabs-datagrid-adaptive__table--hybrid",
      ...x
    }
  ) }) : /* @__PURE__ */ n.jsx(
    jn,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: u,
      ariaDescription: d,
      orientation: f,
      id: p,
      disabled: v,
      selectedIndex: l,
      onTabChange: c,
      ...x
    }
  );
}, Da = (e) => {
  const t = Nn.find((r) => r.value === e);
  return t ? t.icon : null;
}, Pl = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => Da(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, zl = (e) => dr(e, [
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
]), Wl = {
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
  booleanRenderer: (e) => Da(e),
  getDataId: (e) => `financial-${e.id}`
}, Ol = (e) => dr(e, [
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
]), Ul = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Pl,
    createTabs: zl
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Wl,
    createTabs: Ol
  }
}, Gr = (e, t) => {
  const r = Ul[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, Fa = [
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
], Gl = [
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
], Vl = [
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
], Yl = [
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
], Vr = [
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
], Yr = [
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
], qr = [
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
], ql = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Kl = () => [
  {
    id: "patients",
    label: "Patients",
    data: Fa,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      wa,
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
    data: Gl,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Sa,
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
    data: Vl,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Ca,
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
    data: Yl,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ja,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Zl = () => {
  const [e, t] = pe("healthcare"), r = ve(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: wl,
      tabPanels: Kl(),
      data: Fa
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Gr("ecommerce", Vr),
      data: Vr
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Gr("financial", Yr),
      data: Yr
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: ql,
      tabPanels: dr(qr, [
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
      data: qr
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
      jn,
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
}, bf = Zl, Ba = (e) => /* @__PURE__ */ n.jsx(na, { ...e }), xf = ({
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
  account: f,
  organisation: p,
  logo: v,
  className: B,
  ...x
}) => {
  const j = {
    service: c,
    navigation: u,
    search: d,
    account: f,
    organisation: p,
    logo: v,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(_a, { ...s }),
    /* @__PURE__ */ n.jsx(ia, { ...j }),
    /* @__PURE__ */ n.jsx(Ba, { className: B, ...x, children: /* @__PURE__ */ n.jsx(ra, { size: o, children: /* @__PURE__ */ n.jsx(Tt, { children: /* @__PURE__ */ n.jsxs(er, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Ye, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(la, { ...l })
  ] });
}, yf = ({
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
  logo: f,
  className: p,
  ...v
}) => {
  const B = {
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
    /* @__PURE__ */ n.jsx(_a, { ...s }),
    /* @__PURE__ */ n.jsx(ia, { ...B }),
    /* @__PURE__ */ n.jsxs(Ba, { className: p, ...v, children: [
      c && /* @__PURE__ */ n.jsx(Qr, { ...c }),
      /* @__PURE__ */ n.jsx(ra, { size: o, children: /* @__PURE__ */ n.jsx(Tt, { children: /* @__PURE__ */ n.jsxs(er, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Ye, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(la, { ...l })
  ] });
}, st = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function Kr() {
  return typeof window > "u" ? st.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function ur() {
  const [e, t] = fe.useState(Kr());
  fe.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(Kr());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = fe.useCallback((s) => e >= st[s], [e]), a = fe.useCallback((s) => e < st[s], [e]), o = fe.useCallback((s, i) => e >= st[s] && e < st[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: o,
    /** Raw numeric values */
    values: st
  };
}
function _f(e) {
  const { width: t, values: r } = ur();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function Jl(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = fe.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = fe.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return fe.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    o ? c.set(r, String(o)) : c.delete(r), c.set(a, i ? "1" : "0");
    const u = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", u);
  }, [o, i, t, r, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Xl = ({ className: e }) => /* @__PURE__ */ n.jsx("svg", { className: e, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z" }) }), Ql = ({ className: e }) => /* @__PURE__ */ n.jsx("svg", { className: e, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z" }) });
function ec(e) {
  const { up: t } = ur();
  return e || (t("medium") ? "two-column" : "list");
}
function tc(e) {
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
    isLoading: f = !1,
    emptyState: p,
    a11y: v,
    className: B,
    getId: x = (ue) => ue.id,
    orientation: j = "vertical",
    autoEnableThirdColumn: F = !0,
    onDrillChange: R,
    navigationInstructions: L = "Use arrow keys to navigate, Enter to open.",
    initialFocus: w = "first",
    skipFocusOnSelect: $ = !1,
    skipAnnouncements: g = !1,
    onFocusChange: M,
    syncUrl: D = !1,
    urlParamSelected: C = "nsv",
    urlParamDrill: k = "nsvDrill",
    urlSyncDebounceMs: h = 0,
    lazySecondary: _ = !1,
    navFooter: W,
    collapsibleNav: ae = !1,
    navInitiallyCollapsed: P = !1,
    onNavCollapseChange: Q,
    collapseToggleLabelShow: ne = "Show navigation",
    collapseToggleLabelHide: ie = "Hide navigation",
    collapseToggleIconShow: le,
    collapseToggleIconHide: N,
    persistNavCollapsed: Y,
    navCollapsedStorageKey: A = "nsvCollapsed",
    navCollapsedUrlParam: O = "nsvCollapsed"
  } = e, { up: q } = ur(), de = q("medium");
  let T = ec(c);
  !c && F && l && q("xlarge") && (T = "three-column");
  const G = Jl({
    enabled: D,
    paramSelected: C,
    paramDrill: k
  }), [E, U] = fe.useState(
    () => G.selectedId !== void 0 ? G.selectedId : a
  ), z = r !== void 0 ? r : E, S = t.find((ue) => x(ue) === z), he = fe.useRef(null), re = fe.useRef(null), oe = !!S && (T === "list" || T === "cards");
  fe.useEffect(() => {
    if (!D) return;
    const ue = T === "three-column";
    let ke = !1;
    const me = () => {
      ke || (G.selectedId !== z && G.setSelectedId(z), G.drilledIn !== ue && G.setDrilledIn(ue));
    };
    if (h && h > 0) {
      const be = setTimeout(me, h);
      return () => {
        ke = !0, clearTimeout(be);
      };
    } else
      me();
  }, [D, G, z, T, h]), fe.useEffect(() => {
    if (!D) return;
    const ue = () => {
      const ke = new URLSearchParams(window.location.search), me = ke.get(C);
      ke.get(k), U(me === null ? void 0 : me);
    };
    return window.addEventListener("popstate", ue), () => window.removeEventListener("popstate", ue);
  }, [D, C, k, c, l]);
  const K = fe.useRef(0), b = fe.useCallback((ue, ke) => {
    r === void 0 && U(ue), o?.(ue, ke);
  }, [r, o]);
  fe.useEffect(() => {
    if (!$ && oe && re.current) {
      const ue = setTimeout(() => re.current?.focus(), 30);
      return () => clearTimeout(ue);
    }
  }, [oe, z, $]);
  const y = fe.useRef(null), [I, H] = fe.useState(() => w === "first" ? 0 : -1);
  fe.useEffect(() => {
    if (!y.current) return;
    const ue = Array.from(y.current.querySelectorAll("button[data-nav-item]"));
    if (ue.forEach((ke, me) => ke.tabIndex = (I === -1 ? me === 0 && w === "first" : me === I) ? 0 : -1), I >= 0) {
      ue[I]?.focus();
      const me = t[I];
      M?.(me ? x(me) : void 0, me, I);
    }
  }, [I, t, w, M, x]);
  const V = (ue) => {
    const ke = j === "vertical" ? "ArrowDown" : "ArrowRight", me = j === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ue.key === ke)
      ue.preventDefault(), H((be) => Math.min(t.length - 1, be + 1));
    else if (ue.key === me)
      ue.preventDefault(), H((be) => Math.max(0, be - 1));
    else if (ue.key === "Home")
      ue.preventDefault(), H(0);
    else if (ue.key === "End")
      ue.preventDefault(), H(t.length - 1);
    else if (ue.key === "Enter" || ue.key === " ") {
      ue.preventDefault();
      const be = t[I];
      be && !be.disabled && b(x(be), be);
    }
  }, Z = fe.useMemo(() => {
    if (Y && (Y === "url" || Y === "both") && typeof window < "u") {
      const ke = new URLSearchParams(window.location.search).get(O);
      if (ke === "1") return !0;
      if (ke === "0") return !1;
    }
    if (Y && (Y === "localStorage" || Y === "both") && typeof window < "u")
      try {
        const ue = window.localStorage.getItem(A);
        if (ue === "1") return !0;
        if (ue === "0") return !1;
      } catch {
      }
    return P;
  }, [Y, P, A, O]), [te, se] = fe.useState(Z);
  fe.useEffect(() => {
    Q?.(te);
  }, [te, Q]);
  const J = fe.useCallback(() => {
    de && ae && se((ue) => !ue);
  }, [de, ae]);
  fe.useEffect(() => {
    if (Y && !(typeof window > "u")) {
      if (Y === "localStorage" || Y === "both")
        try {
          window.localStorage.setItem(A, te ? "1" : "0");
        } catch {
        }
      if (Y === "url" || Y === "both") {
        const ue = new URLSearchParams(window.location.search);
        ue.set(O, te ? "1" : "0");
        const ke = `${window.location.pathname}?${ue.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", ke);
      }
    }
  }, [te, Y, A, O]);
  const ce = [
    "nhs-navigation-split-view",
    u ? "nhs-navigation-split-view--animated" : "",
    oe ? "nhs-navigation-split-view--detail-active" : "",
    T === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    ae && de && te ? "nhs-navigation-split-view--nav-collapsed" : "",
    B
  ].filter(Boolean).join(" "), je = fe.useRef(null);
  fe.useEffect(() => {
    if (!g && je.current) {
      const ue = S ? `Selected ${S.label}` : "Selection cleared";
      je.current.textContent = ue;
    }
  }, [S, g]), fe.useEffect(() => {
    !oe && z == null && y.current && y.current.querySelectorAll("button[data-nav-item]")[K.current]?.focus();
  }, [oe, z]);
  const _e = T === "three-column", [Ce, un] = fe.useState(!1);
  fe.useEffect(() => {
    _e && !Ce && un(!0);
  }, [_e, Ce]);
  const rt = fe.useRef(_e);
  fe.useEffect(() => {
    rt.current !== _e && (R?.(_e), rt.current = _e);
  }, [_e, R]);
  const Je = () => {
    if (T === "cards")
      return /* @__PURE__ */ n.jsxs("ul", { className: "nhs-navigation-split-view__cards", role: "listbox", "aria-activedescendant": z ? String(z) : void 0, children: [
        t.map((me) => {
          const be = x(me), kt = be === z;
          return /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", role: "option", "aria-selected": kt, children: /* @__PURE__ */ n.jsxs(
            "button",
            {
              id: String(be),
              type: "button",
              className: "nhs-navigation-split-view__card",
              "data-selected": kt || void 0,
              "data-disabled": me.disabled || void 0,
              disabled: me.disabled,
              onClick: () => !me.disabled && b(be, me),
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
        t.length === 0 && !f && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", "aria-disabled": "true", children: p || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
      ] });
    const ue = "nsv-nav-instructions", ke = fe.useMemo(() => {
      const me = ({ item: be, idx: kt, selected: hn }) => {
        const hr = x(be);
        return /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__list-item", role: "option", "aria-selected": hn, children: /* @__PURE__ */ n.jsxs(
          "button",
          {
            id: String(hr),
            "data-nav-item": !0,
            type: "button",
            className: "nhs-navigation-split-view__item-button",
            "data-selected": hn || void 0,
            "data-disabled": be.disabled || void 0,
            disabled: be.disabled,
            "aria-current": hn ? "true" : void 0,
            onClick: () => {
              be.disabled || (K.current = kt, b(hr, be));
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
      return fe.memo(me);
    }, [x, b, s]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: y,
          className: "nhs-navigation-split-view__list",
          onKeyDown: V,
          role: "listbox",
          "aria-describedby": ue,
          "aria-activedescendant": z ? String(z) : void 0,
          children: [
            t.map((me, be) => /* @__PURE__ */ n.jsx(ke, { item: me, idx: be, selected: x(me) === z }, x(me))),
            t.length === 0 && !f && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__list-item", "aria-disabled": "true", children: p || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
          ]
        }
      ),
      /* @__PURE__ */ n.jsx("div", { id: ue, style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: L })
    ] });
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: he,
      className: ce,
      "aria-label": v?.rootLabel,
      "data-layout": T,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__panes", "data-active-detail": oe || void 0, style: { transform: oe ? "translateX(-100%)" : void 0 }, children: [
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "nhs-navigation-split-view__nav-pane",
              role: "navigation",
              "aria-label": v?.navigationLabel || "Items",
              "data-collapsed": te || void 0,
              children: [
                ae && de && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: J,
                    className: "nhs-navigation-split-view__nav-collapse-btn",
                    "aria-label": te ? ne : ie,
                    title: te ? ne : ie,
                    children: te ? le || /* @__PURE__ */ n.jsx(Ql, {}) : N || /* @__PURE__ */ n.jsx(Xl, {})
                  }
                ) }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Je() }),
                W && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-footer", role: "contentinfo", children: W })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              ref: re,
              className: "nhs-navigation-split-view__content-pane",
              role: "region",
              "aria-label": v?.contentLabel || "Content",
              "data-has-selection": !!S || void 0,
              tabIndex: -1,
              children: [
                oe && /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__header", children: [
                  /* @__PURE__ */ n.jsx(
                    Qr,
                    {
                      element: "button",
                      text: d,
                      onClick: () => b(void 0, void 0)
                    }
                  ),
                  /* @__PURE__ */ n.jsx("h2", { style: { margin: 0, fontSize: 18 }, children: S?.label })
                ] }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__content-inner", style: { padding: 16, flex: 1 }, children: i(S) })
              ]
            }
          ),
          T === "three-column" && (!_ || Ce) && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhs-navigation-split-view__secondary-pane",
              role: "region",
              "aria-label": v?.secondaryContentLabel || "Secondary",
              children: /* @__PURE__ */ n.jsx("div", { style: { padding: 16, flex: 1 }, children: l?.(S) })
            }
          )
        ] }),
        /* @__PURE__ */ n.jsx("div", { ref: je, "aria-live": "polite", "aria-atomic": "true", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" } }),
        /* @__PURE__ */ n.jsx("div", { "aria-live": "polite", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: _e ? "Expanded to three column layout" : "In two column layout" })
      ] })
    }
  );
}
tc.displayName = "NavigationSplitView";
const nc = "150ms", rc = "300ms", ac = "500ms", sc = "cubic-bezier(0.4, 0, 1, 1)", oc = "cubic-bezier(0, 0, 0.2, 1)", ic = "cubic-bezier(0.4, 0, 0.2, 1)", lc = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", cc = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", dc = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", uc = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", hc = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", fc = "1px", mc = "2px", pc = "4px", gc = "4px", bc = "4px", xc = "2px", yc = "1px", _c = "0px", vc = "4px", kc = "8px", wc = "12px", Ia = "#d8dde0", Ra = "#4c6272", La = "#d8dde0", Ea = "#aeb7bd", Ma = "#d5281b", $a = "#005eb8", Aa = "#ffffff", Ha = "#212b32", Pa = "#007f3b", za = "#330072", Wa = "#7c2855", Oa = "#d5281b", Ua = "#ffeb3b", Ga = "#fff9c4", Va = "#ffb81c", Ya = "#ed8b00", qa = "#00a499", Ka = "#ae2573", Za = "#4c6272", Ja = "#768692", Xa = "#aeb7bd", Qa = "#d8dde0", es = "#f0f4f5", Sc = "#212b32", Cc = "#4c6272", jc = "#ffffff", Nc = "#212b32", Tc = "#005eb8", Dc = "#7c2855", Fc = "#003087", Bc = "#330072", Ic = "#ffeb3b", Rc = "#212b32", Lc = "#d8dde0", Ec = "#ffffff33", Mc = "#d5281b", $c = "#4c6272", Ac = "#ffffff", Hc = "#007f3b", Pc = "#ffffff", zc = "#006530", Wc = "#004021", Oc = "#004021", Uc = "#00000000", Gc = "#ffffff", Vc = "#005eb8", Yc = "#005eb8", qc = "#d9e5f2", Kc = "#c7daf0", Zc = "#005eb8", Jc = "#ffffff", Xc = "#212b32", Qc = "#d9dde0", ed = "#b3bcc2", td = "#b3bcc2", nd = "#d5281b", rd = "#aa2016", ad = "#6a140e", sd = "#6a140e", od = "#005eb8", id = "#004b93", ld = "#002f5c", cd = "#002f5c", dd = "8px", ud = "16px", hd = "12px", fd = "16px", md = "4px", pd = "40px", gd = "4px", bd = "40px", xd = "12px", yd = "16px", _d = "32px", vd = "16px", kd = "20px", wd = "28px", Sd = "9px", Cd = "2px", jd = "16px", Nd = "24px", Td = "8px", Dd = "24px", Fd = "16px", Bd = "4px", Id = "4px", Rd = "4px", Ld = "8px", Ed = "4px", Md = "16px", $d = "#007f3b", Ad = "#006530", Hd = "#004021", Pd = "#d8dde0", zd = "#ffffff", Wd = "#768692", Od = "#00000000", Ud = "#ffeb3b", Gd = "#00000000", Vd = "#ffffff", Yd = "#d9e5f2", qd = "#c7daf0", Kd = "#005eb8", Zd = "#005eb8", ts = "8px", ns = "16px", rs = "12px", as = "16px", Jd = "2px", Xd = "4px", Qd = "4px", eu = "600", tu = "#ffffff", nu = "#d8dde0", ru = "#aeb7bd", au = "#f0f4f5", su = "#212b32", ou = "#212b32", iu = "#005eb8", ss = "16px", os = "32px", is = "16px", lu = "1px", cu = "4px", du = "none", uu = "0 2px 4px rgba(0, 0, 0, 0.1)", hu = "#ffffff", fu = "#ffffff", mu = "#d8dde0", pu = "#ffffff", gu = "#4c6272", bu = "#ffeb3b", xu = "#d5281b", yu = "#aeb7bd", _u = "#212b32", vu = "#4c6272", ku = "#768692", wu = "#212b32", Su = "#ffffff", Cu = "600", ju = "#d5281b", Nu = "600", Tu = "#4c6272", ls = "4px", cs = "40px", ds = "40px", us = "12px", Du = "2px", Fu = "4px", Bu = "0px", Iu = "16px", Ru = "18px", Lu = "24px", Eu = "32px", Mu = "34px", $u = "32px", Au = "40px", Hu = "48px", Pu = "5.4ex", zu = "7.2ex", Wu = "9ex", Ou = "10.8ex", Uu = "20ex", Gu = "38ex", Vu = "56ex", Yu = "44px", qu = "40px", Ku = "1020px", Zu = "100%", Ju = "50%", Xu = "33.333%", Qu = "25%", eh = "20%", th = "320px", nh = "641px", rh = "1025px", ah = "1280px", sh = "960px", oh = "32px", ih = "16px", lh = "#d5281b", ch = "#d5281b", dh = "#ffffff", uh = "#007f3b", hh = "#007f3b", fh = "#ffffff", mh = "#ffeb3b", ph = "#ffeb3b", gh = "#212b32", bh = "#005eb8", xh = "#005eb8", yh = "#ffffff", _h = "#d8dde0", vh = "#aeb7bd", kh = "#768692", wh = "0 4px 0 #004021", Sh = "0 4px 0 #005eb8", Ch = "0 4px 0 #6a140e", jh = "0 4px 0 #ffeb3b", Nh = "none", Th = "0 2px 4px rgba(0, 0, 0, 0.1)", Dh = "4px", Fh = "0px", Bh = "solid", Ih = "0 0 0 3px #ffeb3b", Rh = "0 0 0 3px #ffeb3b", Lh = "none", Eh = "0 1px 3px rgba(0, 0, 0, 0.12)", Mh = "0 2px 6px rgba(0, 0, 0, 0.16)", $h = "0 4px 12px rgba(0, 0, 0, 0.20)", hs = "0", fs = "4px", ms = "8px", ps = "16px", gs = "24px", bs = "32px", xs = "40px", ys = "48px", _s = "56px", vs = "64px", Tn = "0", Dn = "0", Fn = "4px", Bn = "4px", In = "8px", Rn = "8px", Ln = "8px", En = "16px", Mn = "16px", $n = "24px", An = "24px", Hn = "32px", Pn = "32px", zn = "40px", Wn = "40px", On = "48px", Un = "48px", Gn = "56px", Vn = "56px", Yn = "64px", Mt = "Frutiger W01", $t = "Arial, Helvetica, sans-serif", At = "sans-serif", Ht = "400", Pt = "600", zt = "400", Wt = "12px", Ot = "14px", Ut = "12pt", Gt = "14px", Vt = "16px", Yt = "12pt", qt = "16px", Kt = "19px", Zt = "13pt", Jt = "19px", Xt = "22px", Qt = "15pt", en = "22px", tn = "26px", nn = "17pt", rn = "27px", an = "36px", sn = "20pt", on = "33px", ln = "48px", cn = "24pt", qn = "16px", Kn = "24px", Le = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ee = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Me = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, $e = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ae = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, He = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Pe = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, ze = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, We = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Oe = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: nc,
  AnimationDurationNormal: rc,
  AnimationDurationSlow: ac,
  AnimationEasingBounce: lc,
  AnimationEasingEaseIn: sc,
  AnimationEasingEaseInOut: ic,
  AnimationEasingEaseOut: oc,
  BorderColorCard: La,
  BorderColorCardHover: Ea,
  BorderColorDefault: Ia,
  BorderColorError: Ma,
  BorderColorForm: Ra,
  BorderRadiusLarge: wc,
  BorderRadiusMedium: kc,
  BorderRadiusNone: _c,
  BorderRadiusSmall: vc,
  BorderWidthCardBottom: gc,
  BorderWidthDefault: fc,
  BorderWidthFormElement: mc,
  BorderWidthFormElementError: pc,
  BorderWidthPanel: bc,
  BorderWidthTableCell: yc,
  BorderWidthTableHeader: xc,
  BreakpointDesktop: rh,
  BreakpointLargeDesktop: ah,
  BreakpointMobile: th,
  BreakpointTablet: nh,
  ButtonBorderRadius: Xd,
  ButtonBorderWidth: Jd,
  ButtonPrimaryBackgroundActive: Hd,
  ButtonPrimaryBackgroundDefault: $d,
  ButtonPrimaryBackgroundDisabled: Pd,
  ButtonPrimaryBackgroundHover: Ad,
  ButtonPrimaryBorderDefault: Od,
  ButtonPrimaryBorderFocus: Ud,
  ButtonPrimaryTextDefault: zd,
  ButtonPrimaryTextDisabled: Wd,
  ButtonSecondaryBackgroundActive: qd,
  ButtonSecondaryBackgroundDefault: Gd,
  ButtonSecondaryBackgroundHover: Yd,
  ButtonSecondaryBackgroundSolid: Vd,
  ButtonSecondaryBorderDefault: Zd,
  ButtonSecondaryTextDefault: Kd,
  ButtonShadowSize: Qd,
  ButtonSpacingPaddingHorizontalDesktop: as,
  ButtonSpacingPaddingHorizontalMobile: ns,
  ButtonSpacingPaddingVerticalDesktop: rs,
  ButtonSpacingPaddingVerticalMobile: ts,
  ButtonTypographyWeight: eu,
  CardBackgroundDefault: tu,
  CardBorderBottom: au,
  CardBorderDefault: nu,
  CardBorderHover: ru,
  CardBorderWidthBottom: cu,
  CardBorderWidthDefault: lu,
  CardShadowDefault: du,
  CardShadowHover: uu,
  CardSpacingHeadingMargin: is,
  CardSpacingPaddingDesktop: os,
  CardSpacingPaddingMobile: ss,
  CardTextDescription: ou,
  CardTextHeading: su,
  CardTextLink: iu,
  ColorBorderDefault: Lc,
  ColorBorderSecondary: Ec,
  ColorButtonLoginActive: ld,
  ColorButtonLoginBackground: od,
  ColorButtonLoginHover: id,
  ColorButtonLoginShadow: cd,
  ColorButtonPrimaryActive: Wc,
  ColorButtonPrimaryBackground: Hc,
  ColorButtonPrimaryHover: zc,
  ColorButtonPrimaryShadow: Oc,
  ColorButtonPrimaryText: Pc,
  ColorButtonReverseActive: ed,
  ColorButtonReverseBackground: Jc,
  ColorButtonReverseHover: Qc,
  ColorButtonReverseShadow: td,
  ColorButtonReverseText: Xc,
  ColorButtonSecondaryActive: Kc,
  ColorButtonSecondaryBackground: Uc,
  ColorButtonSecondaryBackgroundSolid: Gc,
  ColorButtonSecondaryBorder: Vc,
  ColorButtonSecondaryHover: qc,
  ColorButtonSecondaryShadow: Zc,
  ColorButtonSecondaryText: Yc,
  ColorButtonWarningActive: ad,
  ColorButtonWarningBackground: nd,
  ColorButtonWarningHover: rd,
  ColorButtonWarningShadow: sd,
  ColorError: Mc,
  ColorFocusBackground: Ic,
  ColorFocusText: Rc,
  ColorFormBackground: Ac,
  ColorFormBorder: $c,
  ColorGrey1: Za,
  ColorGrey2: Ja,
  ColorGrey3: Xa,
  ColorGrey4: Qa,
  ColorGrey5: es,
  ColorLinkActive: Fc,
  ColorLinkDefault: Tc,
  ColorLinkHover: Dc,
  ColorLinkVisited: Bc,
  ColorPrimaryBlack: Ha,
  ColorPrimaryBlue: $a,
  ColorPrimaryDarkPink: Wa,
  ColorPrimaryGreen: Pa,
  ColorPrimaryPurple: za,
  ColorPrimaryRed: Oa,
  ColorPrimaryWhite: Aa,
  ColorPrimaryYellow: Ua,
  ColorSecondaryAquaGreen: qa,
  ColorSecondaryOrange: Ya,
  ColorSecondaryPaleYellow: Ga,
  ColorSecondaryPink: Ka,
  ColorSecondaryWarmYellow: Va,
  ColorTextPrimary: Sc,
  ColorTextPrint: Nc,
  ColorTextReverse: jc,
  ColorTextSecondary: Cc,
  ComponentBlur: Id,
  ComponentBreadcrumbChevronMarginLeft: Sd,
  ComponentBreadcrumbChevronMarginRight: Cd,
  ComponentBreadcrumbPaddingTopDesktop: Nd,
  ComponentBreadcrumbPaddingTopMobile: jd,
  ComponentButtonPaddingDesktopHorizontal: fd,
  ComponentButtonPaddingDesktopVertical: hd,
  ComponentButtonPaddingMobileHorizontal: ud,
  ComponentButtonPaddingMobileVertical: dd,
  ComponentButtonShadowSize: md,
  ComponentCardHeadingMargin: vd,
  ComponentCardPaddingDesktop: _d,
  ComponentCardPaddingMobile: yd,
  ComponentDetails: Ld,
  ComponentExpander: Ed,
  ComponentFormCheckboxLabelPadding: xd,
  ComponentFormCheckboxSize: bd,
  ComponentFormInputMinHeight: pd,
  ComponentFormInputPadding: gd,
  ComponentLink: Rd,
  ComponentPagination: Md,
  ComponentPanelPaddingDesktop: wd,
  ComponentPanelPaddingMobile: kd,
  ComponentSpread: Bd,
  ComponentSummaryListCellPaddingHorizontal: Dd,
  ComponentSummaryListCellPaddingVertical: Td,
  ComponentSummaryListRowMargin: Fd,
  ElevationHigh: $h,
  ElevationLow: Eh,
  ElevationMedium: Mh,
  ElevationNone: Lh,
  FocusOutlineOffset: Fh,
  FocusOutlineStyle: Bh,
  FocusOutlineWidth: Dh,
  FocusShadowButton: Rh,
  FocusShadowInput: Ih,
  FontFamilyBase: Mt,
  FontFamilyFallback: $t,
  FontFamilyPrint: At,
  FontLineHeightBase: Kn,
  FontSize14Mobile: Wt,
  FontSize14Print: Ut,
  FontSize14Tablet: Ot,
  FontSize16Mobile: Gt,
  FontSize16Print: Yt,
  FontSize16Tablet: Vt,
  FontSize19Mobile: qt,
  FontSize19Print: Zt,
  FontSize19Tablet: Kt,
  FontSize22Mobile: Jt,
  FontSize22Print: Qt,
  FontSize22Tablet: Xt,
  FontSize26Mobile: en,
  FontSize26Print: nn,
  FontSize26Tablet: tn,
  FontSize36Mobile: rn,
  FontSize36Print: sn,
  FontSize36Tablet: an,
  FontSize48Mobile: on,
  FontSize48Print: cn,
  FontSize48Tablet: ln,
  FontSizeBase: qn,
  FontWeightBold: Pt,
  FontWeightLight: zt,
  FontWeightNormal: Ht,
  FormBorderRadius: Bu,
  FormBorderWidthDefault: Du,
  FormBorderWidthError: Fu,
  FormErrorTextDefault: ju,
  FormErrorTypographyWeight: Nu,
  FormHintTextDefault: Tu,
  FormInputBackgroundDefault: hu,
  FormInputBackgroundDisabled: mu,
  FormInputBackgroundError: pu,
  FormInputBackgroundFocus: fu,
  FormInputBorderDefault: gu,
  FormInputBorderDisabled: yu,
  FormInputBorderError: xu,
  FormInputBorderFocus: bu,
  FormInputTextDefault: _u,
  FormInputTextDisabled: ku,
  FormInputTextPlaceholder: vu,
  FormLabelTextDefault: wu,
  FormLabelTextRequired: Su,
  FormLabelTypographyWeight: Cu,
  FormSpacingCheckboxLabelPadding: us,
  FormSpacingCheckboxSize: ds,
  FormSpacingInputMinHeight: cs,
  FormSpacingInputPadding: ls,
  GridGutter: oh,
  GridGutterHalf: ih,
  GridPageWidth: sh,
  HeadingsNhsukHeadingL: Ee,
  HeadingsNhsukHeadingM: Me,
  HeadingsNhsukHeadingS: $e,
  HeadingsNhsukHeadingXl: Le,
  HeadingsNhsukHeadingXs: Ae,
  LayoutColumnActions: eh,
  LayoutColumnFull: Zu,
  LayoutColumnHalf: Ju,
  LayoutColumnQuarter: Qu,
  LayoutColumnThird: Xu,
  LayoutContainerMaxWidth: Ku,
  ParagraphsBody: He,
  ParagraphsBodyLarge: Pe,
  ParagraphsBodySmall: ze,
  ParagraphsLedeText: We,
  ParagraphsLedeTextSmall: Oe,
  ShadowButtonDefault: wh,
  ShadowButtonFocus: jh,
  ShadowButtonSecondary: Sh,
  ShadowButtonWarning: Ch,
  ShadowCardDefault: Nh,
  ShadowCardHover: Th,
  SizeButtonMinHeightDesktop: qu,
  SizeButtonMinHeightMobile: Yu,
  SizeFormControlLarge: Hu,
  SizeFormControlMedium: Au,
  SizeFormControlSmall: $u,
  SizeFormInputWidth2xl: Gu,
  SizeFormInputWidth3xl: Vu,
  SizeFormInputWidthLg: Ou,
  SizeFormInputWidthMd: Wu,
  SizeFormInputWidthSm: zu,
  SizeFormInputWidthXl: Uu,
  SizeFormInputWidthXs: Pu,
  SizeIconExtraLarge: Eu,
  SizeIconLarge: Lu,
  SizeIconMedium: Ru,
  SizeIconNhsDefault: Mu,
  SizeIconSmall: Iu,
  Spacing0: hs,
  Spacing1: fs,
  Spacing2: ms,
  Spacing3: ps,
  Spacing4: gs,
  Spacing5: bs,
  Spacing6: xs,
  Spacing7: ys,
  Spacing8: _s,
  Spacing9: vs,
  SpacingResponsive0Mobile: Tn,
  SpacingResponsive0Tablet: Dn,
  SpacingResponsive1Mobile: Fn,
  SpacingResponsive1Tablet: Bn,
  SpacingResponsive2Mobile: In,
  SpacingResponsive2Tablet: Rn,
  SpacingResponsive3Mobile: Ln,
  SpacingResponsive3Tablet: En,
  SpacingResponsive4Mobile: Mn,
  SpacingResponsive4Tablet: $n,
  SpacingResponsive5Mobile: An,
  SpacingResponsive5Tablet: Hn,
  SpacingResponsive6Mobile: Pn,
  SpacingResponsive6Tablet: zn,
  SpacingResponsive7Mobile: Wn,
  SpacingResponsive7Tablet: On,
  SpacingResponsive8Mobile: Un,
  SpacingResponsive8Tablet: Gn,
  SpacingResponsive9Mobile: Vn,
  SpacingResponsive9Tablet: Yn,
  StateDisabledBackground: _h,
  StateDisabledBorder: vh,
  StateDisabledText: kh,
  StateErrorBackground: lh,
  StateErrorBorder: ch,
  StateErrorText: dh,
  StateInfoBackground: bh,
  StateInfoBorder: xh,
  StateInfoText: yh,
  StateSuccessBackground: uh,
  StateSuccessBorder: hh,
  StateSuccessText: fh,
  StateWarningBackground: mh,
  StateWarningBorder: ph,
  StateWarningText: gh,
  TransitionButtonDefault: cc,
  TransitionButtonShadow: dc,
  TransitionCardHover: hc,
  TransitionInputFocus: uc
}, Symbol.toStringTag, { value: "Module" })), vf = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), kf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: Le.fontFamily,
      fontWeight: Le.fontWeight,
      fontSize: Le.fontSize.mobile,
      lineHeight: Le.lineHeight,
      marginTop: Le.marginTop,
      marginBottom: Le.marginBottom.mobile,
      ...r
    },
    children: e
  }
), wf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: Ee.fontFamily,
      fontWeight: Ee.fontWeight,
      fontSize: Ee.fontSize.mobile,
      lineHeight: Ee.lineHeight,
      marginTop: Ee.marginTop,
      marginBottom: Ee.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Sf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: Me.fontFamily,
      fontWeight: Me.fontWeight,
      fontSize: Me.fontSize.mobile,
      lineHeight: Me.lineHeight,
      marginTop: Me.marginTop,
      marginBottom: Me.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Cf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), jf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), Nf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
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
), Tf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
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
), Df = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
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
), Ff = ({
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
), Bf = ({
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
), If = () => ve(() => Ah, []), Rf = () => ve(() => ({
  // Border colors
  BorderColorDefault: Ia,
  BorderColorForm: Ra,
  BorderColorCard: La,
  BorderColorCardHover: Ea,
  BorderColorError: Ma,
  // Primary colors
  ColorPrimaryBlue: $a,
  ColorPrimaryWhite: Aa,
  ColorPrimaryBlack: Ha,
  ColorPrimaryGreen: Pa,
  ColorPrimaryPurple: za,
  ColorPrimaryDarkPink: Wa,
  ColorPrimaryRed: Oa,
  ColorPrimaryYellow: Ua,
  // Secondary colors
  ColorSecondaryPaleYellow: Ga,
  ColorSecondaryWarmYellow: Va,
  ColorSecondaryOrange: Ya,
  ColorSecondaryAquaGreen: qa,
  ColorSecondaryPink: Ka,
  // Grey scale
  ColorGrey1: Za,
  ColorGrey2: Ja,
  ColorGrey3: Xa,
  ColorGrey4: Qa,
  ColorGrey5: es
}), []), Lf = () => ve(() => ({
  Spacing0: hs,
  Spacing1: fs,
  Spacing2: ms,
  Spacing3: ps,
  Spacing4: gs,
  Spacing5: bs,
  Spacing6: xs,
  Spacing7: ys,
  Spacing8: _s,
  Spacing9: vs
}), []), Ef = () => ve(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Wt,
    Size16: Gt,
    Size19: qt,
    Size22: Jt,
    Size26: en,
    Size36: rn,
    Size48: on
  },
  Tablet: {
    Size14: Ot,
    Size16: Vt,
    Size19: Kt,
    Size22: Xt,
    Size26: tn,
    Size36: an,
    Size48: ln
  },
  Print: {
    Size14: Ut,
    Size16: Yt,
    Size19: Zt,
    Size22: Qt,
    Size26: nn,
    Size36: sn,
    Size48: cn
  },
  Family: {
    Base: Mt,
    Fallback: $t,
    Print: At
  },
  Weight: {
    Normal: Ht,
    Bold: Pt,
    Light: zt
  },
  Base: {
    Size: qn,
    LineHeight: Kn
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Mt,
  FontFamilyFallback: $t,
  FontFamilyPrint: At,
  FontWeightNormal: Ht,
  FontWeightBold: Pt,
  FontWeightLight: zt,
  FontSize14Mobile: Wt,
  FontSize14Tablet: Ot,
  FontSize14Print: Ut,
  FontSize16Mobile: Gt,
  FontSize16Tablet: Vt,
  FontSize16Print: Yt,
  FontSize19Mobile: qt,
  FontSize19Tablet: Kt,
  FontSize19Print: Zt,
  FontSize22Mobile: Jt,
  FontSize22Tablet: Xt,
  FontSize22Print: Qt,
  FontSize26Mobile: en,
  FontSize26Tablet: tn,
  FontSize26Print: nn,
  FontSize36Mobile: rn,
  FontSize36Tablet: an,
  FontSize36Print: sn,
  FontSize48Mobile: on,
  FontSize48Tablet: ln,
  FontSize48Print: cn,
  FontSizeBase: qn,
  FontLineHeightBase: Kn
}), []), Mf = () => ve(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Tn,
    Size1: Fn,
    Size2: In,
    Size3: Ln,
    Size4: Mn,
    Size5: An,
    Size6: Pn,
    Size7: Wn,
    Size8: Un,
    Size9: Vn
  },
  Tablet: {
    Size0: Dn,
    Size1: Bn,
    Size2: Rn,
    Size3: En,
    Size4: $n,
    Size5: Hn,
    Size6: zn,
    Size7: On,
    Size8: Gn,
    Size9: Yn
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Tn,
  SpacingResponsive0Tablet: Dn,
  SpacingResponsive1Mobile: Fn,
  SpacingResponsive1Tablet: Bn,
  SpacingResponsive2Mobile: In,
  SpacingResponsive2Tablet: Rn,
  SpacingResponsive3Mobile: Ln,
  SpacingResponsive3Tablet: En,
  SpacingResponsive4Mobile: Mn,
  SpacingResponsive4Tablet: $n,
  SpacingResponsive5Mobile: An,
  SpacingResponsive5Tablet: Hn,
  SpacingResponsive6Mobile: Pn,
  SpacingResponsive6Tablet: zn,
  SpacingResponsive7Mobile: Wn,
  SpacingResponsive7Tablet: On,
  SpacingResponsive8Mobile: Un,
  SpacingResponsive8Tablet: Gn,
  SpacingResponsive9Mobile: Vn,
  SpacingResponsive9Tablet: Yn
}), []), $f = () => ve(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: ts,
  ButtonSpacingPaddingHorizontalMobile: ns,
  ButtonSpacingPaddingVerticalDesktop: rs,
  ButtonSpacingPaddingHorizontalDesktop: as,
  // Card spacing	
  CardSpacingPaddingMobile: ss,
  CardSpacingPaddingDesktop: os,
  CardSpacingHeadingMargin: is,
  // Form spacing
  FormSpacingInputPadding: ls,
  FormSpacingInputMinHeight: cs,
  FormSpacingCheckboxSize: ds,
  FormSpacingCheckboxLabelPadding: us
}), []), Af = () => ve(() => ({
  xl: Le,
  l: Ee,
  m: Me,
  s: $e,
  xs: Ae
}), []), Hf = () => ve(() => ({
  body: He,
  bodyLarge: Pe,
  bodySmall: ze,
  ledeText: We,
  ledeTextSmall: Oe
}), []), Pf = () => ve(() => ({
  headings: {
    xl: Le,
    l: Ee,
    m: Me,
    s: $e,
    xs: Ae
  },
  paragraphs: {
    body: He,
    bodyLarge: Pe,
    bodySmall: ze,
    ledeText: We,
    ledeTextSmall: Oe
  },
  fonts: {
    family: {
      base: Mt,
      fallback: $t,
      print: At
    },
    weight: {
      normal: Ht,
      bold: Pt,
      light: zt
    },
    sizes: {
      mobile: {
        size14: Wt,
        size16: Gt,
        size19: qt,
        size22: Jt,
        size26: en,
        size36: rn,
        size48: on
      },
      tablet: {
        size14: Ot,
        size16: Vt,
        size19: Kt,
        size22: Xt,
        size26: tn,
        size36: an,
        size48: ln
      },
      print: {
        size14: Ut,
        size16: Yt,
        size19: Zt,
        size22: Qt,
        size26: nn,
        size36: sn,
        size48: cn
      }
    }
  }
}), []);
function zf(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [a, o] = fe.useState(t), s = fe.useCallback(() => o("three-column"), []), i = fe.useCallback(() => o((c) => c === "three-column" ? r : c), [r]), l = fe.useCallback(() => o((c) => c === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const ks = {
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
function Wf(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...ks, ...e }, a = [];
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
function Of(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...ks, ...e };
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
const Uf = '"Frutiger W01", Arial, Helvetica, sans-serif', Gf = "Arial, Helvetica, sans-serif";
async function Vf() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Zn as Account,
  Ph as ActionLink,
  gf as AdaptiveDataGrid,
  nc as AnimationDurationFast,
  rc as AnimationDurationNormal,
  ac as AnimationDurationSlow,
  lc as AnimationEasingBounce,
  sc as AnimationEasingEaseIn,
  ic as AnimationEasingEaseInOut,
  oc as AnimationEasingEaseOut,
  Sa as AppointmentCard,
  hl as AriaDataGrid,
  jn as AriaTabsDataGrid,
  gf as AriaTabsDataGridAdaptive,
  Qr as BackLink,
  La as BorderColorCard,
  Ea as BorderColorCardHover,
  Ia as BorderColorDefault,
  Ma as BorderColorError,
  Ra as BorderColorForm,
  wc as BorderRadiusLarge,
  kc as BorderRadiusMedium,
  _c as BorderRadiusNone,
  vc as BorderRadiusSmall,
  gc as BorderWidthCardBottom,
  fc as BorderWidthDefault,
  mc as BorderWidthFormElement,
  pc as BorderWidthFormElementError,
  bc as BorderWidthPanel,
  yc as BorderWidthTableCell,
  xc as BorderWidthTableHeader,
  al as Breadcrumb,
  rh as BreakpointDesktop,
  ah as BreakpointLargeDesktop,
  th as BreakpointMobile,
  nh as BreakpointTablet,
  De as Button,
  Xd as ButtonBorderRadius,
  Jd as ButtonBorderWidth,
  Hd as ButtonPrimaryBackgroundActive,
  $d as ButtonPrimaryBackgroundDefault,
  Pd as ButtonPrimaryBackgroundDisabled,
  Ad as ButtonPrimaryBackgroundHover,
  Od as ButtonPrimaryBorderDefault,
  Ud as ButtonPrimaryBorderFocus,
  zd as ButtonPrimaryTextDefault,
  Wd as ButtonPrimaryTextDisabled,
  qd as ButtonSecondaryBackgroundActive,
  Gd as ButtonSecondaryBackgroundDefault,
  Yd as ButtonSecondaryBackgroundHover,
  Vd as ButtonSecondaryBackgroundSolid,
  Zd as ButtonSecondaryBorderDefault,
  Kd as ButtonSecondaryTextDefault,
  Qd as ButtonShadowSize,
  as as ButtonSpacingPaddingHorizontalDesktop,
  ns as ButtonSpacingPaddingHorizontalMobile,
  rs as ButtonSpacingPaddingVerticalDesktop,
  ts as ButtonSpacingPaddingVerticalMobile,
  eu as ButtonTypographyWeight,
  va as Card,
  tu as CardBackgroundDefault,
  au as CardBorderBottom,
  nu as CardBorderDefault,
  ru as CardBorderHover,
  cu as CardBorderWidthBottom,
  lu as CardBorderWidthDefault,
  rf as CardGroup,
  af as CardGroupItem,
  du as CardShadowDefault,
  uu as CardShadowHover,
  is as CardSpacingHeadingMargin,
  os as CardSpacingPaddingDesktop,
  ss as CardSpacingPaddingMobile,
  ou as CardTextDescription,
  su as CardTextHeading,
  iu as CardTextLink,
  sf as CareCard,
  zh as CharacterCount,
  Rs as Checkbox,
  Ls as Checkboxes,
  Lc as ColorBorderDefault,
  Ec as ColorBorderSecondary,
  ld as ColorButtonLoginActive,
  od as ColorButtonLoginBackground,
  id as ColorButtonLoginHover,
  cd as ColorButtonLoginShadow,
  Wc as ColorButtonPrimaryActive,
  Hc as ColorButtonPrimaryBackground,
  zc as ColorButtonPrimaryHover,
  Oc as ColorButtonPrimaryShadow,
  Pc as ColorButtonPrimaryText,
  ed as ColorButtonReverseActive,
  Jc as ColorButtonReverseBackground,
  Qc as ColorButtonReverseHover,
  td as ColorButtonReverseShadow,
  Xc as ColorButtonReverseText,
  Kc as ColorButtonSecondaryActive,
  Uc as ColorButtonSecondaryBackground,
  Gc as ColorButtonSecondaryBackgroundSolid,
  Vc as ColorButtonSecondaryBorder,
  qc as ColorButtonSecondaryHover,
  Zc as ColorButtonSecondaryShadow,
  Yc as ColorButtonSecondaryText,
  ad as ColorButtonWarningActive,
  nd as ColorButtonWarningBackground,
  rd as ColorButtonWarningHover,
  sd as ColorButtonWarningShadow,
  Mc as ColorError,
  Ic as ColorFocusBackground,
  Rc as ColorFocusText,
  Ac as ColorFormBackground,
  $c as ColorFormBorder,
  Za as ColorGrey1,
  Ja as ColorGrey2,
  Xa as ColorGrey3,
  Qa as ColorGrey4,
  es as ColorGrey5,
  Fc as ColorLinkActive,
  Tc as ColorLinkDefault,
  Dc as ColorLinkHover,
  Bc as ColorLinkVisited,
  Ha as ColorPrimaryBlack,
  $a as ColorPrimaryBlue,
  Wa as ColorPrimaryDarkPink,
  Pa as ColorPrimaryGreen,
  za as ColorPrimaryPurple,
  Oa as ColorPrimaryRed,
  Aa as ColorPrimaryWhite,
  Ua as ColorPrimaryYellow,
  qa as ColorSecondaryAquaGreen,
  Ya as ColorSecondaryOrange,
  Ga as ColorSecondaryPaleYellow,
  Ka as ColorSecondaryPink,
  Va as ColorSecondaryWarmYellow,
  Sc as ColorTextPrimary,
  Nc as ColorTextPrint,
  jc as ColorTextReverse,
  Cc as ColorTextSecondary,
  er as Column,
  Id as ComponentBlur,
  Sd as ComponentBreadcrumbChevronMarginLeft,
  Cd as ComponentBreadcrumbChevronMarginRight,
  Nd as ComponentBreadcrumbPaddingTopDesktop,
  jd as ComponentBreadcrumbPaddingTopMobile,
  fd as ComponentButtonPaddingDesktopHorizontal,
  hd as ComponentButtonPaddingDesktopVertical,
  ud as ComponentButtonPaddingMobileHorizontal,
  dd as ComponentButtonPaddingMobileVertical,
  md as ComponentButtonShadowSize,
  vd as ComponentCardHeadingMargin,
  _d as ComponentCardPaddingDesktop,
  yd as ComponentCardPaddingMobile,
  Ld as ComponentDetails,
  Ed as ComponentExpander,
  xd as ComponentFormCheckboxLabelPadding,
  bd as ComponentFormCheckboxSize,
  pd as ComponentFormInputMinHeight,
  gd as ComponentFormInputPadding,
  Rd as ComponentLink,
  Md as ComponentPagination,
  wd as ComponentPanelPaddingDesktop,
  kd as ComponentPanelPaddingMobile,
  Bd as ComponentSpread,
  Dd as ComponentSummaryListCellPaddingHorizontal,
  Td as ComponentSummaryListCellPaddingVertical,
  Fd as ComponentSummaryListRowMargin,
  na as Container,
  nf as ContentsList,
  ks as DEFAULT_FONT_CONFIG,
  ff as DashboardSummaryGrid,
  Kh as DateInput,
  ol as Details,
  il as DoDontList,
  $h as ElevationHigh,
  Eh as ElevationLow,
  Mh as ElevationMedium,
  Lh as ElevationNone,
  br as ErrorMessage,
  qh as ErrorSummary,
  ll as Expander,
  Ne as FRUTIGER_FONT_FILES,
  Qn as Fieldset,
  Fh as FocusOutlineOffset,
  Bh as FocusOutlineStyle,
  Dh as FocusOutlineWidth,
  Rh as FocusShadowButton,
  Ih as FocusShadowInput,
  Mt as FontFamilyBase,
  $t as FontFamilyFallback,
  At as FontFamilyPrint,
  Kn as FontLineHeightBase,
  Wt as FontSize14Mobile,
  Ut as FontSize14Print,
  Ot as FontSize14Tablet,
  Gt as FontSize16Mobile,
  Yt as FontSize16Print,
  Vt as FontSize16Tablet,
  qt as FontSize19Mobile,
  Zt as FontSize19Print,
  Kt as FontSize19Tablet,
  Jt as FontSize22Mobile,
  Qt as FontSize22Print,
  Xt as FontSize22Tablet,
  en as FontSize26Mobile,
  nn as FontSize26Print,
  tn as FontSize26Tablet,
  rn as FontSize36Mobile,
  sn as FontSize36Print,
  an as FontSize36Tablet,
  on as FontSize48Mobile,
  cn as FontSize48Print,
  ln as FontSize48Tablet,
  qn as FontSizeBase,
  Pt as FontWeightBold,
  zt as FontWeightLight,
  Ht as FontWeightNormal,
  la as Footer,
  Bu as FormBorderRadius,
  Du as FormBorderWidthDefault,
  Fu as FormBorderWidthError,
  ju as FormErrorTextDefault,
  Nu as FormErrorTypographyWeight,
  Tu as FormHintTextDefault,
  hu as FormInputBackgroundDefault,
  mu as FormInputBackgroundDisabled,
  pu as FormInputBackgroundError,
  fu as FormInputBackgroundFocus,
  gu as FormInputBorderDefault,
  yu as FormInputBorderDisabled,
  xu as FormInputBorderError,
  bu as FormInputBorderFocus,
  _u as FormInputTextDefault,
  ku as FormInputTextDisabled,
  vu as FormInputTextPlaceholder,
  wu as FormLabelTextDefault,
  Su as FormLabelTextRequired,
  Cu as FormLabelTypographyWeight,
  us as FormSpacingCheckboxLabelPadding,
  ds as FormSpacingCheckboxSize,
  cs as FormSpacingInputMinHeight,
  ls as FormSpacingInputPadding,
  ef as GanttChart,
  As as Grid,
  oh as GridGutter,
  ih as GridGutterHalf,
  sh as GridPageWidth,
  ia as Header,
  Xh as HeaderSSR,
  oa as HeaderSearch,
  Qh as HeaderStatic,
  Ye as Heading,
  Ee as HeadingsNhsukHeadingL,
  Me as HeadingsNhsukHeadingM,
  $e as HeadingsNhsukHeadingS,
  Le as HeadingsNhsukHeadingXl,
  Ae as HeadingsNhsukHeadingXs,
  Gs as Hero,
  ea as Hint,
  hf as Images,
  Jn as Input,
  of as InsetText,
  Xn as Label,
  eh as LayoutColumnActions,
  Zu as LayoutColumnFull,
  Ju as LayoutColumnHalf,
  Qu as LayoutColumnQuarter,
  Xu as LayoutColumnThird,
  Ku as LayoutContainerMaxWidth,
  zs as List,
  ra as MainWrapper,
  Ca as MedicationCard,
  Nf as NHSBodyText,
  Tf as NHSBodyTextLarge,
  Df as NHSBodyTextSmall,
  kf as NHSHeading1,
  wf as NHSHeading2,
  Sf as NHSHeading3,
  Cf as NHSHeading4,
  jf as NHSHeading5,
  Ff as NHSLedeText,
  Bf as NHSLedeTextSmall,
  Jh as NHSThemeProvider,
  Gf as NHS_FALLBACK_FONT_STACK,
  Uf as NHS_FONT_STACK,
  tc as NavigationSplitView,
  xf as PageTemplate,
  tf as Pagination,
  sl as Panel,
  He as ParagraphsBody,
  Pe as ParagraphsBodyLarge,
  ze as ParagraphsBodySmall,
  We as ParagraphsLedeText,
  Oe as ParagraphsLedeTextSmall,
  wa as PatientCard,
  Wh as Radios,
  gf as ResponsiveDataGrid,
  bf as ResponsiveDataGridDemo,
  Tt as Row,
  ta as Select,
  Ms as SelectOption,
  wh as ShadowButtonDefault,
  jh as ShadowButtonFocus,
  Sh as ShadowButtonSecondary,
  Ch as ShadowButtonWarning,
  Nh as ShadowCardDefault,
  Th as ShadowCardHover,
  qu as SizeButtonMinHeightDesktop,
  Yu as SizeButtonMinHeightMobile,
  Hu as SizeFormControlLarge,
  Au as SizeFormControlMedium,
  $u as SizeFormControlSmall,
  Gu as SizeFormInputWidth2xl,
  Vu as SizeFormInputWidth3xl,
  Ou as SizeFormInputWidthLg,
  Wu as SizeFormInputWidthMd,
  zu as SizeFormInputWidthSm,
  Uu as SizeFormInputWidthXl,
  Pu as SizeFormInputWidthXs,
  Eu as SizeIconExtraLarge,
  Lu as SizeIconLarge,
  Ru as SizeIconMedium,
  Mu as SizeIconNhsDefault,
  Iu as SizeIconSmall,
  _a as SkipLink,
  mf as SortStatusControl,
  hs as Spacing0,
  fs as Spacing1,
  ms as Spacing2,
  ps as Spacing3,
  gs as Spacing4,
  bs as Spacing5,
  xs as Spacing6,
  ys as Spacing7,
  _s as Spacing8,
  vs as Spacing9,
  Tn as SpacingResponsive0Mobile,
  Dn as SpacingResponsive0Tablet,
  Fn as SpacingResponsive1Mobile,
  Bn as SpacingResponsive1Tablet,
  In as SpacingResponsive2Mobile,
  Rn as SpacingResponsive2Tablet,
  Ln as SpacingResponsive3Mobile,
  En as SpacingResponsive3Tablet,
  Mn as SpacingResponsive4Mobile,
  $n as SpacingResponsive4Tablet,
  An as SpacingResponsive5Mobile,
  Hn as SpacingResponsive5Tablet,
  Pn as SpacingResponsive6Mobile,
  zn as SpacingResponsive6Tablet,
  Wn as SpacingResponsive7Mobile,
  On as SpacingResponsive7Tablet,
  Un as SpacingResponsive8Mobile,
  Gn as SpacingResponsive8Tablet,
  Vn as SpacingResponsive9Mobile,
  Yn as SpacingResponsive9Tablet,
  Oh as SpacingUtilities,
  _h as StateDisabledBackground,
  vh as StateDisabledBorder,
  kh as StateDisabledText,
  lh as StateErrorBackground,
  ch as StateErrorBorder,
  dh as StateErrorText,
  bh as StateInfoBackground,
  xh as StateInfoBorder,
  yh as StateInfoText,
  uh as StateSuccessBackground,
  hh as StateSuccessBorder,
  fh as StateSuccessText,
  mh as StateWarningBackground,
  ph as StateWarningBorder,
  gh as StateWarningText,
  ul as SummaryCard,
  lf as SummaryList,
  cf as Table,
  df as Tabs,
  Ve as Tag,
  cl as TaskList,
  Es as Textarea,
  yf as TransactionalPageTemplate,
  cc as TransitionButtonDefault,
  dc as TransitionButtonShadow,
  hc as TransitionCardHover,
  uc as TransitionInputFocus,
  ja as VitalsCard,
  Yh as WIDTH_FRACTIONS,
  uf as WarningCallout,
  Ba as WidthContainer,
  Gh as WidthUtilities,
  Vf as checkFrutigerLoaded,
  dr as createGenericTabsConfig,
  pf as createTCHTabsConfig,
  Wf as generateFrutigerFontFace,
  vf as getResponsiveStyles,
  Uh as getSpacingClass,
  Vh as getWidthClass,
  Of as preloadFrutigerFonts,
  wl as tchDataConfig,
  Rf as useColors,
  $f as useComponentSpacing,
  Af as useNHSHeadings,
  Hf as useNHSParagraphs,
  Zh as useNHSTheme,
  Pf as useNHSTypographySystem,
  zf as useNavigationSplitDrill,
  Jl as useNavigationSplitUrlSync,
  ur as useNhsFdpBreakpoints,
  Mf as useResponsiveSpacing,
  _f as useResponsiveValue,
  Lf as useSpacing,
  If as useTokens,
  Ef as useTypography
};
//# sourceMappingURL=index.esm.js.map
