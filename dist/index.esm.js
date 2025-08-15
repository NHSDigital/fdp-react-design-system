import * as ss from "react";
import we, { useState as de, useEffect as fe, useCallback as K, createElement as $r, useRef as he, useMemo as me, createContext as os, useContext as is, forwardRef as tt, useImperativeHandle as Mr, useReducer as Lr } from "react";
function ls(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ht = { exports: {} }, nt = {};
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
function cs() {
  if (Xn) return nt;
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
  return nt.Fragment = t, nt.jsx = r, nt.jsxs = r, nt;
}
var rt = {};
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
function ds() {
  return Qn || (Qn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === y ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case x:
          return "Fragment";
        case D:
          return "Profiler";
        case N:
          return "StrictMode";
        case F:
          return "Suspense";
        case v:
          return "SuspenseList";
        case S:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case B:
            return "Portal";
          case M:
            return (T.displayName || "Context") + ".Provider";
          case $:
            return (T._context.displayName || "Context") + ".Consumer";
          case k:
            var X = T.render;
            return T = T.displayName, T || (T = X.displayName || X.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case A:
            return X = T.displayName || null, X !== null ? X : e(T.type) || "Memo";
          case I:
            X = T._payload, T = T._init;
            try {
              return e(T(X));
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
        var X = !1;
      } catch {
        X = !0;
      }
      if (X) {
        X = console;
        var E = X.error, J = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return E.call(
          X,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          J
        ), t(T);
      }
    }
    function a(T) {
      if (T === x) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === I)
        return "<...>";
      try {
        var X = e(T);
        return X ? "<" + X + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var T = c.A;
      return T === null ? null : T.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(T) {
      if (w.call(T, "key")) {
        var X = Object.getOwnPropertyDescriptor(T, "key").get;
        if (X && X.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function l(T, X) {
      function E() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          X
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: E,
        configurable: !0
      });
    }
    function d() {
      var T = e(this.type);
      return q[T] || (q[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function h(T, X, E, J, G, ie, p, j) {
      return E = ie.ref, T = {
        $$typeof: _,
        type: T,
        key: X,
        props: ie,
        _owner: G
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: d
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
        value: p
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function u(T, X, E, J, G, ie, p, j) {
      var W = X.children;
      if (W !== void 0)
        if (J)
          if (re(W)) {
            for (J = 0; J < W.length; J++)
              m(W[J]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(W);
      if (w.call(X, "key")) {
        W = e(T);
        var L = Object.keys(X).filter(function(U) {
          return U !== "key";
        });
        J = 0 < L.length ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}", te[W + J] || (L = 0 < L.length ? "{" + L.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          J,
          W,
          L,
          W
        ), te[W + J] = !0);
      }
      if (W = null, E !== void 0 && (r(E), W = "" + E), i(X) && (r(X.key), W = "" + X.key), "key" in X) {
        E = {};
        for (var O in X)
          O !== "key" && (E[O] = X[O]);
      } else E = X;
      return W && l(
        E,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), h(
        T,
        W,
        ie,
        G,
        s(),
        E,
        p,
        j
      );
    }
    function m(T) {
      typeof T == "object" && T !== null && T.$$typeof === _ && T._store && (T._store.validated = 1);
    }
    var g = we, _ = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), M = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), y = Symbol.for("react.client.reference"), c = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = Object.prototype.hasOwnProperty, re = Array.isArray, ee = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(T) {
        return T();
      }
    };
    var z, q = {}, Q = g.react_stack_bottom_frame.bind(
      g,
      o
    )(), se = ee(a(o)), te = {};
    rt.Fragment = x, rt.jsx = function(T, X, E, J, G) {
      var ie = 1e4 > c.recentlyCreatedOwnerStacks++;
      return u(
        T,
        X,
        E,
        !1,
        J,
        G,
        ie ? Error("react-stack-top-frame") : Q,
        ie ? ee(a(T)) : se
      );
    }, rt.jsxs = function(T, X, E, J, G) {
      var ie = 1e4 > c.recentlyCreatedOwnerStacks++;
      return u(
        T,
        X,
        E,
        !0,
        J,
        G,
        ie ? Error("react-stack-top-frame") : Q,
        ie ? ee(a(T)) : se
      );
    };
  }()), rt;
}
var er;
function us() {
  return er || (er = 1, process.env.NODE_ENV === "production" ? ht.exports = cs() : ht.exports = ds()), ht.exports;
}
var n = us(), Qt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var tr;
function hs() {
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
  }(Qt)), Qt.exports;
}
var fs = hs();
const V = /* @__PURE__ */ ls(fs), _h = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...s
}) => {
  const o = V(
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
    ) : null, l = o.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text, d = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i,
      l
    ] });
    return o.href ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-account__link", href: o.href, children: d }) : o.action ? /* @__PURE__ */ n.jsx(
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
            children: d
          }
        )
      }
    ) : /* @__PURE__ */ n.jsx("span", { children: d });
  };
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: V(
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
          className: V("nhsuk-account__item", o.className),
          children: s(o)
        },
        i
      )) })
    }
  );
}, { forwardRef: ms, useCallback: Oe, useState: en } = ss;
function ps(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: s = "default",
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [h, u] = en(!1), [m, g] = en(!1), [_, B] = en(!1), x = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    s !== "default" ? `nhs-aria-button--${s}` : "",
    o ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), N = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", D = {
    ...h && { "data-pressed": "true" },
    ...m && { "data-hovered": "true" },
    ..._ && { "data-focused": "true" },
    ...N && { "data-disabled": "true" }
  }, $ = Oe(() => !N && u(!0), [N]), M = Oe(() => u(!1), []), k = Oe(() => !N && g(!0), [N]), F = Oe(() => {
    g(!1), u(!1);
  }, []), v = Oe(() => B(!0), []), A = Oe(() => B(!1), []), I = Oe((c) => {
    c.key === " " && ("href" in d || c.currentTarget.getAttribute("role") === "button") && (c.preventDefault(), c.currentTarget.click());
  }, [d]), S = Oe((c) => {
    if (l) {
      const w = c.currentTarget;
      if (w.getAttribute("data-processing") === "true") {
        c.preventDefault();
        return;
      }
      w.setAttribute("data-processing", "true"), setTimeout(() => {
        w.removeAttribute("data-processing");
      }, 1e3);
    }
  }, [l]);
  if ("href" in d && d.href) {
    const c = d;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: c.href,
        target: c.target,
        rel: c.rel,
        className: x,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...D,
        ...l && { "data-prevent-double-click": "true" },
        onKeyDown: (w) => {
          c.onKeyDown?.(w), I(w);
        },
        onClick: (w) => {
          c.onClick?.(w), S(w);
        },
        onMouseDown: (w) => {
          c.onMouseDown?.(w), $();
        },
        onMouseUp: (w) => {
          c.onMouseUp?.(w), M();
        },
        onMouseEnter: (w) => {
          c.onMouseEnter?.(w), k();
        },
        onMouseLeave: (w) => {
          c.onMouseLeave?.(w), F();
        },
        onFocus: (w) => {
          c.onFocus?.(w), v();
        },
        onBlur: (w) => {
          c.onBlur?.(w), A();
        },
        "aria-disabled": c["aria-disabled"],
        ...c["aria-disabled"] === "true" && { tabIndex: -1 },
        id: c.id,
        style: c.style,
        title: c.title,
        "aria-label": c["aria-label"],
        "aria-describedby": c["aria-describedby"],
        "aria-labelledby": c["aria-labelledby"],
        tabIndex: c.tabIndex,
        children: r
      }
    );
  }
  const y = d;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: y.type || "button",
      disabled: y.disabled,
      className: x,
      "data-module": "nhs-button",
      ...D,
      ...l && { "data-prevent-double-click": "true" },
      ...y.disabled && { "aria-disabled": "true" },
      onKeyDown: (c) => {
        y.onKeyDown?.(c), I(c);
      },
      onClick: (c) => {
        y.onClick?.(c), S(c);
      },
      onMouseDown: (c) => {
        y.onMouseDown?.(c), $();
      },
      onMouseUp: (c) => {
        y.onMouseUp?.(c), M();
      },
      onMouseEnter: (c) => {
        y.onMouseEnter?.(c), k();
      },
      onMouseLeave: (c) => {
        y.onMouseLeave?.(c), F();
      },
      onFocus: (c) => {
        y.onFocus?.(c), v();
      },
      onBlur: (c) => {
        y.onBlur?.(c), A();
      },
      id: y.id,
      style: y.style,
      title: y.title,
      "aria-label": y["aria-label"],
      "aria-describedby": y["aria-describedby"],
      "aria-labelledby": y["aria-labelledby"],
      tabIndex: y.tabIndex,
      name: y.name,
      value: y.value,
      form: y.form,
      formAction: y.formAction,
      formEncType: y.formEncType,
      formMethod: y.formMethod,
      formNoValidate: y.formNoValidate,
      formTarget: y.formTarget,
      autoFocus: y.autoFocus,
      children: r
    }
  );
}
const _e = ms(ps);
_e.displayName = "Button";
const gs = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = V(
    "nhsuk-back-link",
    a
  ), d = V(
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
      className: d,
      onClick: o,
      type: "button",
      ...i,
      children: h()
    }
  ) : /* @__PURE__ */ n.jsx(
    "a",
    {
      className: d,
      href: r,
      ...i,
      children: h()
    }
  ) });
}, He = ({
  text: e,
  html: t,
  children: r,
  color: a = "default",
  noBorder: s = !1,
  closable: o = !1,
  onClose: i,
  disabled: l = !1,
  className: d,
  ...h
}) => {
  const u = V(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": s,
      "nhsuk-tag--closable": o,
      "nhsuk-tag--disabled": l
    },
    d
  ), m = (g) => {
    g.preventDefault(), g.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: u, ...h, children: [
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
}, bs = ({
  id: e,
  name: t,
  checked: r,
  defaultChecked: a = !1,
  disabled: s = !1,
  value: o = "true",
  hint: i,
  errorMessage: l,
  className: d,
  children: h,
  onChange: u,
  onBlur: m,
  onFocus: g,
  attributes: _,
  ...B
}) => {
  const [x, N] = de(a), D = r !== void 0, $ = D ? r : x;
  fe(() => {
    D || N(a);
  }, [a, D]);
  const M = (I) => {
    const S = I.target.checked;
    D || N(S), u?.(S, I);
  }, k = i ? `${e}-hint` : void 0, F = l ? `${e}-error` : void 0, v = [k, F].filter(Boolean).join(" ") || void 0, A = V(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ n.jsx("div", { className: A, ...B, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: $,
        disabled: s,
        onChange: M,
        onBlur: m,
        onFocus: g,
        "aria-describedby": v,
        ..._
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: h }),
    i && /* @__PURE__ */ n.jsx("div", { id: k, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: F, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
bs.displayName = "Checkbox";
const An = ({
  id: e,
  name: t,
  type: r = "text",
  value: a,
  defaultValue: s,
  placeholder: o,
  disabled: i = !1,
  readOnly: l = !1,
  required: d = !1,
  hasError: h = !1,
  describedBy: u,
  className: m,
  width: g = "full",
  inputMode: _,
  autoComplete: B,
  maxLength: x,
  minLength: N,
  pattern: D,
  step: $,
  min: M,
  max: k,
  showValueLabels: F = !1,
  showCurrentValue: v = !1,
  valueLabels: A,
  onChange: I,
  onBlur: S,
  onFocus: y,
  onKeyDown: c,
  ...w
}) => {
  const [re, ee] = de(a || s || (r === "range" ? M || "0" : ""));
  fe(() => {
    a !== void 0 && ee(a);
  }, [a]);
  const z = (te) => {
    ee(te.target.value), I?.(te);
  }, q = r === "range", Q = V(
    "nhsuk-input",
    {
      "nhsuk-input--error": h,
      "nhsuk-input--range": q,
      [`nhsuk-input--width-${g}`]: g !== "full" && !q
    },
    m
  ), se = q ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    F && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: A?.min || M || "0" }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: Q,
          id: e,
          name: t,
          type: r,
          value: re,
          defaultValue: s,
          placeholder: o,
          disabled: i,
          readOnly: l,
          required: d,
          "aria-describedby": u,
          inputMode: _,
          autoComplete: B,
          maxLength: x,
          minLength: N,
          pattern: D,
          step: $,
          min: M,
          max: k,
          onChange: z,
          onBlur: S,
          onFocus: y,
          onKeyDown: c,
          ...w
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: A?.max || k || "100" })
    ] }),
    !F && /* @__PURE__ */ n.jsx(
      "input",
      {
        className: Q,
        id: e,
        name: t,
        type: r,
        value: re,
        defaultValue: s,
        placeholder: o,
        disabled: i,
        readOnly: l,
        required: d,
        "aria-describedby": u,
        inputMode: _,
        autoComplete: B,
        maxLength: x,
        minLength: N,
        pattern: D,
        step: $,
        min: M,
        max: k,
        onChange: z,
        onBlur: S,
        onFocus: y,
        onKeyDown: c,
        ...w
      }
    ),
    v && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      A?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: re })
    ] }) })
  ] }) : null;
  return q ? se : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: Q,
      id: e,
      name: t,
      type: r,
      value: a,
      defaultValue: s,
      placeholder: o,
      disabled: i,
      readOnly: l,
      required: d,
      "aria-describedby": u,
      inputMode: _,
      autoComplete: B,
      maxLength: x,
      minLength: N,
      pattern: D,
      step: $,
      min: M,
      max: k,
      onChange: I,
      onBlur: S,
      onFocus: y,
      onKeyDown: c,
      ...w
    }
  );
}, Hn = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = V(
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
}, Pn = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...s
}) => {
  const o = V(
    "nhsuk-fieldset",
    r
  ), i = V(
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
      className: o,
      "aria-describedby": a,
      ...s,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ n.jsx("legend", { className: i, children: l() }),
        e
      ]
    }
  );
}, xs = ({
  items: e,
  name: t,
  idPrefix: r,
  legend: a,
  isPageHeading: s = !1,
  legendSize: o = "l",
  hint: i,
  errorMessage: l,
  className: d = "",
  small: h = !1,
  onChange: u,
  fieldsetAttributes: m,
  attributes: g,
  ..._
}) => {
  const [B, x] = de(
    e.filter((I) => I.checked).map((I) => I.value)
  ), N = r || t, D = i ? `${N}-hint` : void 0, $ = l ? `${N}-error` : void 0, M = [D, $].filter(Boolean).join(" ") || void 0, k = (I, S) => {
    let y;
    S ? y = [...B, I] : y = B.filter((c) => c !== I), x(y), u?.(y);
  }, F = () => e.map((I, S) => {
    const y = `${N}-${S + 1}`, c = `${y}-conditional`, w = B.includes(I.value), re = I.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: y,
          name: t,
          type: "checkbox",
          value: I.value,
          checked: w,
          disabled: re,
          onChange: (ee) => k(I.value, ee.target.checked),
          "aria-describedby": I.hint ? `${y}-hint` : M,
          ...I.conditional && {
            "aria-controls": c,
            "aria-expanded": w ? "true" : "false"
          },
          ...I.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: y, children: I.text }),
      I.hint && /* @__PURE__ */ n.jsx("div", { id: `${y}-hint`, className: "nhsuk-checkboxes__hint", children: I.hint }),
      I.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: V("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !w
          }),
          id: c,
          children: typeof I.conditional == "object" && I.conditional !== null && "label" in I.conditional && "id" in I.conditional && "name" in I.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            I.conditional.label && /* @__PURE__ */ n.jsx(Hn, { htmlFor: I.conditional.id, children: I.conditional.label }),
            /* @__PURE__ */ n.jsx(An, { ...I.conditional })
          ] }) : I.conditional
        }
      )
    ] }, I.value);
  }), v = V(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": h
    },
    d
  ), A = V("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: A, ...g, ..._, children: /* @__PURE__ */ n.jsxs(
    Pn,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: M,
      ...m,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: D, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: $, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: v, children: F() })
      ]
    }
  ) });
};
xs.displayName = "Checkboxes";
const ys = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  placeholder: s,
  disabled: o = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: d = !1,
  describedBy: h,
  className: u,
  rows: m = 5,
  cols: g,
  maxLength: _,
  minLength: B,
  wrap: x = "soft",
  resize: N = "vertical",
  autoComplete: D,
  spellCheck: $,
  onChange: M,
  onBlur: k,
  onFocus: F,
  onKeyDown: v,
  ...A
}) => {
  const I = V(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": d,
      [`nhsuk-textarea--resize-${N}`]: N !== "vertical"
    },
    u
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: I,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": h,
      rows: m,
      cols: g,
      maxLength: _,
      minLength: B,
      wrap: x,
      autoComplete: D,
      spellCheck: $,
      onChange: M,
      onBlur: k,
      onFocus: F,
      onKeyDown: v,
      ...A
    }
  );
}, Er = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const s = V("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: s, id: e, ...a, children: r });
}, kh = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: a = 75,
  name: s,
  value: o = "",
  rows: i,
  className: l,
  countMessage: d,
  onCountChange: h,
  onChange: u,
  ...m
}) => {
  const [g, _] = de(o), [B, x] = de(0), [N, D] = de(!1), [$, M] = de(!1), k = K((y) => r ? y.trim() === "" ? 0 : y.trim().split(/\s+/).length : y.length, [r]);
  fe(() => {
    const y = k(g), c = t || r || 0, w = c - y, re = Math.floor(c * (a / 100));
    x(w), D(y > c), M(y >= re || y > c), h && h(y, w);
  }, [g, t, r, a, k, h]);
  const F = (y) => {
    const c = y.target.value;
    _(c), u && u(y);
  }, v = () => {
    const y = t || r || 0, c = r ? "word" : "character", w = r ? "words" : "characters";
    if (!$)
      return `You can enter up to ${y} ${y === 1 ? c : w}`;
    if (N) {
      const re = Math.abs(B);
      return `You have ${re} ${re === 1 ? c : w} too many`;
    } else
      return `You have ${B} ${B === 1 ? c : w} remaining`;
  }, A = V(
    "nhsuk-character-count",
    l
  ), I = V(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !$,
      "nhsuk-error-message": N
    },
    d?.classes
  ), S = V(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": N
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: A,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          ys,
          {
            id: e,
            name: s,
            value: g,
            rows: i,
            className: S,
            onChange: F,
            "aria-describedby": `${e}-info`,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          Er,
          {
            id: `${e}-info`,
            className: I,
            children: v()
          }
        )
      ]
    }
  );
}, _s = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  className: a,
  children: s,
  ...o
}) => {
  const i = V(
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
}, ks = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  disabled: s = !1,
  required: o = !1,
  hasError: i = !1,
  describedBy: l,
  className: d,
  multiple: h = !1,
  size: u,
  autoComplete: m,
  options: g,
  children: _,
  onChange: B,
  onBlur: x,
  onFocus: N,
  ...D
}) => {
  const $ = V(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    d
  ), M = () => g ? g.map((k, F) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: k.value,
      disabled: k.disabled,
      selected: k.selected,
      children: k.text
    },
    `${k.value}-${F}`
  )) : null;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: $,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      disabled: s,
      required: o,
      "aria-describedby": l,
      multiple: h,
      size: u,
      autoComplete: m,
      onChange: B,
      onBlur: x,
      onFocus: N,
      ...D,
      children: _ || M()
    }
  );
}, Ar = ks;
Ar.Option = _s;
const vh = ({
  name: e,
  value: t,
  defaultValue: r,
  hasError: a = !1,
  describedBy: s,
  className: o,
  size: i = "normal",
  inline: l = !1,
  options: d,
  onChange: h,
  onBlur: u,
  onFocus: m,
  ...g
}) => {
  const [_, B] = de(t || r || ""), x = V(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    o
  ), N = (D) => {
    const $ = D.target.value;
    B($), h && h(D);
  };
  return /* @__PURE__ */ n.jsx(Pn, { children: /* @__PURE__ */ n.jsx("div", { className: x, ...g, children: d.map((D, $) => {
    const M = `${e}-${$}`, k = D.conditional ? `${M}-conditional` : void 0, F = _ === D.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: M,
          name: e,
          type: "radio",
          value: D.value,
          disabled: D.disabled,
          checked: F,
          "aria-describedby": s,
          onChange: N,
          onBlur: u,
          onFocus: m
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: M, children: D.text }),
      D.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: D.hint }),
      D.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: V("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !F
          }),
          id: k,
          children: typeof D.conditional == "object" && D.conditional !== null && "label" in D.conditional && "id" in D.conditional && "name" in D.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            D.conditional.label && /* @__PURE__ */ n.jsx(Hn, { htmlFor: D.conditional.id, children: D.conditional.label }),
            /* @__PURE__ */ n.jsx(An, { ...D.conditional })
          ] }) : D.conditional
        }
      )
    ] }, D.value);
  }) }) });
}, Hr = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...s
}) => {
  const o = V(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), i = a ? { maxWidth: a } : void 0;
  return /* @__PURE__ */ n.jsx("div", { className: o, style: i, ...s, children: e });
}, bt = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = V("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: e });
}, zn = ({
  children: e,
  width: t = "full",
  mobileWidth: r,
  tabletWidth: a,
  desktopWidth: s,
  start: o,
  className: i,
  forceWidth: l = !1,
  ...d
}) => {
  const h = V(
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
  return /* @__PURE__ */ n.jsx("div", { className: h, ...d, children: e });
}, vs = ({
  children: e,
  className: t,
  ...r
}) => {
  const s = we.Children.toArray(e)[0], o = we.isValidElement(s) && (s.type === bt || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Hr, { className: t, ...r, children: o ? e : /* @__PURE__ */ n.jsx(bt, { children: e }) });
}, ws = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: s,
  role: o,
  as: i,
  ...l
}) => {
  const d = i || (t === "number" ? "ol" : "ul"), h = V(
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
  return /* @__PURE__ */ n.jsx(d, { className: h, role: o, ...l, children: e });
}, Ss = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = V("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, Cs = ws;
Cs.Item = Ss;
const wh = ({
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
}, Sh = {
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
}, Ch = ({
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
}, jh = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Nh = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Pr = ({
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
}, Pe = ({
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
  })(o), u = V(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${o}`]: o
    },
    t
  ), m = s || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), g = `h${h}`, _ = i ? { ...l.style, marginBottom: i } : l.style;
  return $r(
    g,
    { className: u, ...l, style: _ },
    m
  );
}, nr = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...s
}) => {
  const o = V("nhsuk-error-message", t);
  return /* @__PURE__ */ n.jsxs("span", { className: o, id: e, ...s, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      r,
      " "
    ] }),
    a
  ] });
}, Th = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: s,
  className: o,
  children: i,
  ...l
}) => {
  const d = he(null);
  fe(() => {
    d.current && d.current.focus();
  }, []);
  const h = V(
    "nhsuk-error-summary",
    o
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, m = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, g = (_) => {
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
      ref: d,
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
          !i && (r || a) && /* @__PURE__ */ n.jsx("p", { children: m() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((_, B) => /* @__PURE__ */ n.jsx("li", { children: g(_) }, B)) })
        ] })
      ]
    }
  );
}, Dh = ({
  id: e,
  className: t,
  items: r,
  namePrefix: a,
  values: s = {},
  fieldset: o,
  hint: i,
  errorMessage: l,
  onChange: d,
  ...h
}) => {
  const [u, m] = de(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [g, _] = de({}), B = (z) => z % 4 === 0 && z % 100 !== 0 || z % 400 === 0, x = (z, q) => {
    const Q = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return z === 2 && B(q) ? 29 : Q[z - 1];
  }, N = (z, q, Q) => {
    if (!z) return;
    if (!/^\d+$/.test(z)) return "Day must be a number";
    const se = parseInt(z, 10);
    if (se < 1 || se > 31) return "Day must be between 1 and 31";
    if (q && Q) {
      const te = parseInt(q, 10), T = parseInt(Q, 10);
      if (!isNaN(te) && !isNaN(T) && te >= 1 && te <= 12) {
        const X = x(te, T);
        if (se > X)
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
          ][te - 1]} ${T} only has ${X} days`;
      }
    }
  }, D = (z) => {
    if (!z) return;
    if (!/^\d+$/.test(z)) return "Month must be a number";
    const q = parseInt(z, 10);
    if (q < 1 || q > 12) return "Month must be between 1 and 12";
  }, $ = (z) => {
    if (!z) return;
    if (!/^\d+$/.test(z)) return "Year must be a number";
    const q = parseInt(z, 10), Q = (/* @__PURE__ */ new Date()).getFullYear();
    if (q < 1900 || q > Q + 10)
      return `Year must be between 1900 and ${Q + 10}`;
  }, M = (z, q, Q) => {
    if (!z || !q || !Q) return;
    const se = parseInt(z, 10), te = parseInt(q, 10), T = parseInt(Q, 10);
    if (isNaN(se) || isNaN(te) || isNaN(T) || te < 1 || te > 12 || T < 1900) return;
    const X = x(te, T);
    se < 1 || se > X;
  }, k = K((z, q) => {
    const Q = {
      ...u,
      [z]: q
    };
    m(Q), d && d(Q);
  }, [u, d]), F = K((z) => {
    const q = u[z];
    let Q;
    if (z === "day")
      Q = N(q, u.month, u.year);
    else if (z === "month") {
      if (Q = D(q), !Q && u.day) {
        const se = N(u.day, q, u.year);
        _((te) => ({
          ...te,
          day: se
        }));
      }
    } else if (z === "year" && (Q = $(q), !Q && u.day && u.month)) {
      const se = N(u.day, u.month, q);
      _((te) => ({
        ...te,
        day: se
      }));
    }
    if (_((se) => ({
      ...se,
      [z]: Q
    })), u.day && u.month && u.year) {
      const se = M(
        z === "day" ? q : u.day,
        z === "month" ? q : u.month,
        z === "year" ? q : u.year
      );
      se && _((te) => ({
        ...te,
        day: se
      }));
    }
  }, [u, N, D, $, M]), v = me(() => [
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
  ], []), A = r || v;
  let I = o?.describedBy || "";
  const S = i ? `${e}-hint` : "", y = l ? `${e}-error` : "";
  S && (I = I ? `${I} ${S}` : S), y && (I = I ? `${I} ${y}` : y);
  const c = Object.values(g).some((z) => z), w = V(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || c
    }
  ), re = V(
    "nhsuk-date-input",
    t
  ), ee = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Er,
      {
        id: S,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      nr,
      {
        id: y,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(g).map(
      ([z, q]) => q ? /* @__PURE__ */ n.jsxs(
        nr,
        {
          id: `${e}-${z}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            q
          ]
        },
        `${z}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: re, id: e, "data-testid": "date-input", ...h, children: A.map((z) => {
      const q = z.id || `${e}-${z.name}`, Q = a ? `${a}[${z.name}]` : z.name, se = z.label || z.name.charAt(0).toUpperCase() + z.name.slice(1), te = g[z.name], T = u[z.name] || "";
      let X = I;
      if (te) {
        const E = `${e}-${z.name}-error`;
        X = X ? `${X} ${E}` : E;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          Hn,
          {
            htmlFor: q,
            className: "nhsuk-date-input__label",
            children: se
          }
        ),
        /* @__PURE__ */ n.jsx(
          An,
          {
            id: q,
            name: Q,
            value: T,
            className: V("nhsuk-date-input__input", z.classes, {
              "nhsuk-input--error": te
            }),
            inputMode: z.inputmode,
            autoComplete: z.autocomplete,
            pattern: z.pattern,
            "aria-describedby": X || void 0,
            hasError: !!te,
            onChange: (E) => k(z.name, E.target.value),
            onBlur: () => F(z.name)
          }
        )
      ] }, z.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: w, children: o ? /* @__PURE__ */ n.jsx(
    Pn,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: I || void 0,
      children: ee()
    }
  ) : ee() });
}, zr = {
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
}, Wr = os(zr), js = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...zr, ...t };
  return /* @__PURE__ */ n.jsx(Wr.Provider, { value: r, children: e });
}, Fh = () => {
  const e = is(Wr);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Ns() {
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
function Ts() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Ns(), document.head.appendChild(e);
}
const Bh = ({ children: e, theme: t }) => (fe(() => {
  Ts();
}, []), /* @__PURE__ */ n.jsx(js, { theme: t, children: e })), Or = ({
  mode: e = "form",
  action: t = "https://www.nhs.uk/search/",
  method: r = "get",
  name: a = "q",
  value: s,
  placeholder: o = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: d,
  disabled: h = !1,
  callbacks: u = {},
  isLoading: m = !1,
  showResults: g = !1,
  results: _ = [],
  formAttributes: B = {},
  inputAttributes: x = {},
  buttonAttributes: N = {},
  preventDefaultSubmit: D = !1,
  debounceMs: $ = 300,
  minQueryLength: M = 1
}) => {
  const [k, F] = de(""), [v, A] = de(!1), I = he(void 0), S = he(null), y = he(null), c = e === "controlled" && s !== void 0, w = c ? s : k, re = K((J) => {
    I.current && clearTimeout(I.current), I.current = setTimeout(() => {
      u.onChange && J.length >= M && u.onChange(J);
    }, $);
  }, [u.onChange, $, M]), ee = K((J) => {
    const G = J.target.value;
    c || F(G), e !== "form" && re(G);
  }, [c, e, re]), z = K((J) => {
    const G = w.trim(), ie = {
      query: G,
      timestamp: Date.now(),
      formData: new FormData(J.currentTarget)
    };
    e === "controlled" || e === "hybrid" && D ? (J.preventDefault(), u.onSearch && G.length >= M && u.onSearch(ie)) : e === "hybrid" && u.onSearch && G.length >= M && u.onSearch(ie);
  }, [e, w, u.onSearch, D, M]), q = K(() => {
    A(!0), u.onFocus?.();
  }, [u.onFocus]), Q = K(() => {
    A(!1), u.onBlur?.();
  }, [u.onBlur]), se = K(() => {
    c || F(""), u.onClear?.(), y.current?.focus();
  }, [c, u.onClear]);
  fe(() => () => {
    I.current && clearTimeout(I.current);
  }, []);
  const te = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: V("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": m
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
  ), X = () => !w || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: se,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), E = () => !g || !_.length || !v ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: _.map((J) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: J.href ? /* @__PURE__ */ n.jsxs("a", { href: J.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: J.title }),
    J.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: J.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => u.onSearch?.({ query: J.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: J.title }),
        J.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: J.description })
      ]
    }
  ) }, J.id)) });
  return /* @__PURE__ */ n.jsxs("search", { className: V("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": m,
    "nhsuk-header__search--focused": v,
    "nhsuk-header__search--has-results": g && _.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: S,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        onSubmit: z,
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
                ref: y,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: o,
                autoComplete: "off",
                value: w,
                onChange: ee,
                onFocus: q,
                onBlur: Q,
                disabled: h || m,
                "aria-expanded": g && _.length > 0,
                "aria-haspopup": "listbox",
                ...x
              }
            ),
            X()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: h || m || e !== "form" && w.length < M,
              ...N,
              children: [
                m ? T() : te(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: m ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    E()
  ] });
}, Ur = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: d = "default",
  attributes: h = {},
  ...u
}) => {
  const [m, g] = de(!1), [_, B] = de(!1), [x, N] = de(i?.items?.length || 0), [D, $] = de(!1), [M, k] = de(!1), [F, v] = de(!1), A = he(null), I = he(null), S = he(!1), y = he(null), c = he([]), w = he(null);
  fe(() => {
    typeof window > "u" || (v(!0), $(!0));
  }, []), fe(() => {
    if (!F || !i?.items?.length) return;
    c.current = i.items;
    const p = setTimeout(() => {
      A.current && I.current && se();
    }, 100);
    return () => clearTimeout(p);
  }, [F, i?.items]);
  const re = r.href && !t.href || r.href && r.href === t.href, ee = re ? r.href : t.href, z = V(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": d === "organisation" || a,
      "nhsuk-header--white": d === "white"
    },
    e
  ), q = V(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), Q = V(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), se = K(() => {
    if (!(typeof window > "u" || S.current) && !(!A.current || !I.current || !c.current.length)) {
      S.current = !0;
      try {
        const p = I.current, j = A.current, W = p.offsetWidth, L = j.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (L.length === 0 || W === 0) {
          S.current = !1;
          return;
        }
        const O = window.innerWidth < 768, U = O ? 16 : 32, C = U * 2, le = W - C, ne = Array.from(L).map((H) => H.offsetWidth), b = ne.reduce((H, P) => H + P, 0), f = O ? 80 : 100, R = w.current !== null && w.current !== O;
        if (w.current = O, console.log("Overflow check:", {
          containerWidth: W,
          availableContainerWidth: le,
          totalGutters: C,
          gutterSize: U,
          totalWidth: b,
          mobile: O,
          breakpointChanged: R,
          itemCount: ne.length,
          measurements: ne
        }), b <= le)
          B(!1), N(c.current.length);
        else {
          const H = le - f;
          let P = 0, Y = 0;
          for (let ae = 0; ae < ne.length; ae++) {
            const Z = Y + ne[ae];
            if (Z <= H)
              Y = Z, P = ae + 1;
            else
              break;
          }
          P = Math.max(1, P);
          const oe = P < ne.length;
          B(oe), N(P);
        }
        S.current = !1;
      } catch (p) {
        console.error("Overflow detection error:", p), B(!1), N(c.current.length), S.current = !1;
      }
    }
  }, []);
  fe(() => {
    if (typeof document > "u") return;
    const p = (j) => {
      j.key === "Escape" && m && g(!1);
    };
    if (m)
      return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [m]), fe(() => {
    if (typeof window > "u" || !F) return;
    const p = () => {
      m && (g(!1), k(!1)), y.current && clearTimeout(y.current), y.current = setTimeout(() => {
        c.current.length > 0 && se();
      }, 250);
    };
    let j = null, W = null;
    return window.matchMedia && (j = window.matchMedia("(max-width: 767px)"), W = () => {
      console.log("Breakpoint changed:", j?.matches ? "mobile" : "desktop"), c.current.length > 0 && setTimeout(() => se(), 50);
    }, j.addEventListener ? j.addEventListener("change", W) : j.addListener(W)), window.addEventListener("resize", p), () => {
      window.removeEventListener("resize", p), j && W && (j.removeEventListener ? j.removeEventListener("change", W) : j.removeListener(W)), y.current && clearTimeout(y.current);
    };
  }, [F, m, se]), fe(() => {
    if (typeof document > "u") return;
    const p = (j) => {
      const W = j.target, L = A.current?.contains(W);
      m && !L && g(!1);
    };
    if (m)
      return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [m]);
  const te = (p) => {
    p && (p.preventDefault(), p.stopPropagation());
    const j = !m;
    g(j), j ? setTimeout(() => {
      k(!0);
    }, 50) : k(!1);
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
  ), X = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : T(), E = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, J = (p, j) => p ? j ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: j, children: p }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: p }) : null, G = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), ie = (p) => {
    if (p.active || p.current) {
      const j = p.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: p.html } }) : p.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: j });
    }
    return p.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: p.html } }) : p.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: z,
      role: "banner",
      "data-module": "nhsuk-header",
      ...h,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: q, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            ee ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: ee, children: [
              X(),
              E(),
              re && J(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              X(),
              E(),
              re && J(r.text)
            ] }),
            r.text && !re && J(r.text, r.href)
          ] }),
          s && /* @__PURE__ */ n.jsx(Or, { ...s }),
          /* @__PURE__ */ n.jsx(
            En,
            {
              ...o,
              variant: d === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: Q,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: V(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !D && F,
                    "nhsuk-header__navigation-container--ssr": !F
                  },
                  l
                ),
                ref: I,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: A, children: [
                  (F ? i.items.slice(0, x) : i.items).map((p, j) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: V(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": p.active || p.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !F && j >= 4
                          // Mark items that would be hidden on client
                        },
                        p.className
                      ),
                      ...p.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: p.href,
                          ...p.active || p.current ? {
                            "aria-current": p.current ? "page" : "true"
                          } : {},
                          children: ie(p)
                        }
                      )
                    },
                    j
                  )),
                  F && _ && x < i.items.length && /* @__PURE__ */ n.jsx(
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
        F && i && i.items && i.items.length > 0 && m && M && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !M,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(x).map((p, j) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: V(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": p.active || p.current
                  }
                ),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: p.href,
                    ...p.active || p.current ? {
                      "aria-current": p.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      g(!1), k(!1);
                    },
                    children: ie(p)
                  }
                )
              },
              `overflow-${x + j}`
            )) })
          }
        )
      ]
    }
  );
}, Ih = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: d = "default",
  attributes: h = {},
  ...u
}) => {
  const m = r.href && !t.href || r.href && r.href === t.href, g = m ? r.href : t.href, _ = V(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": d === "organisation" || a,
      "nhsuk-header--white": d === "white"
    },
    e
  ), B = V(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), x = V(
    "nhsuk-header__navigation",
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
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : N(), $ = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, M = (v, A) => v ? A ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: A, children: v }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: v }) : null, k = () => !i?.items || i.items.length === 0 ? null : i.items.map((v, A) => /* @__PURE__ */ n.jsx(
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
    v.href || A
  )), F = () => s ? /* @__PURE__ */ n.jsx(Or, { ...s }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: _,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...h,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: B, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            g ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: g, children: [
              D(),
              $(),
              m && M(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              D(),
              $(),
              m && M(r.text)
            ] }),
            r.text && !m && M(r.text, r.href)
          ] }),
          (d === "organisation" || a) && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            a && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name", children: a.name }),
              a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: a.descriptor })
            ] }),
            F()
          ] }),
          d !== "organisation" && !a && F(),
          /* @__PURE__ */ n.jsx(
            En,
            {
              ...o,
              variant: d === "white" ? "white" : "default"
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
                children: k()
              }
            ) })
          }
        )
      ]
    }
  );
}, Rh = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: d = "default",
  attributes: h = {},
  maxVisibleItems: u = 5,
  // New prop to control CSS-based overflow
  ...m
}) => {
  const g = r.href && !t.href || r.href && r.href === t.href, _ = g ? r.href : t.href, B = V(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": d === "organisation" || a,
      "nhsuk-header--white": d === "white"
    },
    e
  ), x = V(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), N = V(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), D = () => /* @__PURE__ */ n.jsxs(
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
  ), $ = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : D(), M = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, k = (v, A) => v ? A ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: A, children: v }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: v }) : null, F = (v) => {
    if (v.active || v.current) {
      const A = v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: A });
    }
    return v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: B,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...h,
      ...m,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: x, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            _ ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: _, children: [
              $(),
              M(),
              g && k(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              $(),
              M(),
              g && k(r.text)
            ] }),
            r.text && !g && k(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            En,
            {
              ...o,
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
                className: V(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, u).map((v, A) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: V(
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
                          children: F(v)
                        }
                      )
                    },
                    A
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(u).map((v, A) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: V(
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
                            children: F(v)
                          }
                        )
                      },
                      `overflow-${u + A}`
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
}, Ds = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
  text: a,
  html: s,
  imageURL: o,
  containerClasses: i = "",
  classes: l = "",
  children: d,
  ...h
}) => {
  const u = [
    "nhsuk-hero",
    o && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    o && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-width-container",
    i,
    o ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), g = [
    "nhsuk-hero__heading",
    r,
    !d && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), _ = d || e || a || s, B = () => {
    if (!e) return null;
    const x = { className: g };
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
      className: u,
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...h,
      children: [
        o && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: _ && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          B(),
          d || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && _ && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          B(),
          d || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Ds.displayName = "Hero";
const Gr = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: s,
  copyright: o = "© NHS England",
  containerClasses: i,
  attributes: l = {}
}) => {
  const d = (u, m = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: V("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": m
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
    /* @__PURE__ */ n.jsxs("div", { className: V("nhsuk-width-container", i), children: [
      /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ n.jsx("div", { className: V("nhsuk-footer", e), children: h ? (
        // Multi-column layout
        /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((u) => d(u)) }),
          r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((u) => d(u)) }),
          a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((u) => d(u)) }),
          s && s.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((u) => d(u)) })
        ] })
      ) : (
        // Single column layout (default)
        /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
          t.map((u) => d(u, !0)),
          (r || []).map((u) => d(u, !0)),
          (a || []).map((u) => d(u, !0)),
          (s || []).map((u) => d(u, !0))
        ] })
      ) }),
      !h && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
    ] }),
    h && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
  ] }) });
};
function gt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Fs(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Wn(e) {
  let t, r, a;
  e.length !== 2 ? (t = gt, r = (l, d) => gt(e(l), d), a = (l, d) => e(l) - d) : (t = e === gt || e === Fs ? e : Bs, r = e, a = e);
  function s(l, d, h = 0, u = l.length) {
    if (h < u) {
      if (t(d, d) !== 0) return u;
      do {
        const m = h + u >>> 1;
        r(l[m], d) < 0 ? h = m + 1 : u = m;
      } while (h < u);
    }
    return h;
  }
  function o(l, d, h = 0, u = l.length) {
    if (h < u) {
      if (t(d, d) !== 0) return u;
      do {
        const m = h + u >>> 1;
        r(l[m], d) <= 0 ? h = m + 1 : u = m;
      } while (h < u);
    }
    return h;
  }
  function i(l, d, h = 0, u = l.length) {
    const m = s(l, d, h, u - 1);
    return m > h && a(l[m - 1], d) > -a(l[m], d) ? m - 1 : m;
  }
  return { left: s, center: i, right: o };
}
function Bs() {
  return 0;
}
function Is(e) {
  return e === null ? NaN : +e;
}
const Rs = Wn(gt), $s = Rs.right;
Wn(Is).center;
const Ms = Math.sqrt(50), Ls = Math.sqrt(10), Es = Math.sqrt(2);
function Vr(e, t, r) {
  const a = (t - e) / Math.max(0, r), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= Ms ? 10 : o >= Ls ? 5 : o >= Es ? 2 : 1;
  let l, d, h;
  return s < 0 ? (h = Math.pow(10, -s) / i, l = Math.round(e * h), d = Math.round(t * h), l / h < e && ++l, d / h > t && --d, h = -h) : (h = Math.pow(10, s) * i, l = Math.round(e / h), d = Math.round(t / h), l * h < e && ++l, d * h > t && --d), d < l && 0.5 <= r && r < 2 ? Vr(e, t, r * 2) : [l, d, h];
}
function rr(e, t, r) {
  return t = +t, e = +e, r = +r, Vr(e, t, r)[2];
}
function ar(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, s = a ? rr(t, e, r) : rr(e, t, r);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function As(e, t) {
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
function On(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Yr(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function dt() {
}
var it = 0.7, xt = 1 / it, Xe = "\\s*([+-]?\\d+)\\s*", lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", je = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Hs = /^#([0-9a-f]{3,8})$/, Ps = new RegExp(`^rgb\\(${Xe},${Xe},${Xe}\\)$`), zs = new RegExp(`^rgb\\(${je},${je},${je}\\)$`), Ws = new RegExp(`^rgba\\(${Xe},${Xe},${Xe},${lt}\\)$`), Os = new RegExp(`^rgba\\(${je},${je},${je},${lt}\\)$`), Us = new RegExp(`^hsl\\(${lt},${je},${je}\\)$`), Gs = new RegExp(`^hsla\\(${lt},${je},${je},${lt}\\)$`), sr = {
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
On(dt, ct, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: or,
  // Deprecated! Use color.formatHex.
  formatHex: or,
  formatHex8: Vs,
  formatHsl: Ys,
  formatRgb: ir,
  toString: ir
});
function or() {
  return this.rgb().formatHex();
}
function Vs() {
  return this.rgb().formatHex8();
}
function Ys() {
  return qr(this).formatHsl();
}
function ir() {
  return this.rgb().formatRgb();
}
function ct(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Hs.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? lr(t) : r === 3 ? new ye(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ft(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ft(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ps.exec(e)) ? new ye(t[1], t[2], t[3], 1) : (t = zs.exec(e)) ? new ye(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ws.exec(e)) ? ft(t[1], t[2], t[3], t[4]) : (t = Os.exec(e)) ? ft(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Us.exec(e)) ? ur(t[1], t[2] / 100, t[3] / 100, 1) : (t = Gs.exec(e)) ? ur(t[1], t[2] / 100, t[3] / 100, t[4]) : sr.hasOwnProperty(e) ? lr(sr[e]) : e === "transparent" ? new ye(NaN, NaN, NaN, 0) : null;
}
function lr(e) {
  return new ye(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ft(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new ye(e, t, r, a);
}
function qs(e) {
  return e instanceof dt || (e = ct(e)), e ? (e = e.rgb(), new ye(e.r, e.g, e.b, e.opacity)) : new ye();
}
function dn(e, t, r, a) {
  return arguments.length === 1 ? qs(e) : new ye(e, t, r, a ?? 1);
}
function ye(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
On(ye, dn, Yr(dt, {
  brighter(e) {
    return e = e == null ? xt : Math.pow(xt, e), new ye(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? it : Math.pow(it, e), new ye(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ye(Ge(this.r), Ge(this.g), Ge(this.b), yt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: cr,
  // Deprecated! Use color.formatHex.
  formatHex: cr,
  formatHex8: Ks,
  formatRgb: dr,
  toString: dr
}));
function cr() {
  return `#${Ue(this.r)}${Ue(this.g)}${Ue(this.b)}`;
}
function Ks() {
  return `#${Ue(this.r)}${Ue(this.g)}${Ue(this.b)}${Ue((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function dr() {
  const e = yt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ge(this.r)}, ${Ge(this.g)}, ${Ge(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function yt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ge(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ue(e) {
  return e = Ge(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ur(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Se(e, t, r, a);
}
function qr(e) {
  if (e instanceof Se) return new Se(e.h, e.s, e.l, e.opacity);
  if (e instanceof dt || (e = ct(e)), !e) return new Se();
  if (e instanceof Se) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, s = Math.min(t, r, a), o = Math.max(t, r, a), i = NaN, l = o - s, d = (o + s) / 2;
  return l ? (t === o ? i = (r - a) / l + (r < a) * 6 : r === o ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= d < 0.5 ? o + s : 2 - o - s, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new Se(i, l, d, e.opacity);
}
function Zs(e, t, r, a) {
  return arguments.length === 1 ? qr(e) : new Se(e, t, r, a ?? 1);
}
function Se(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
On(Se, Zs, Yr(dt, {
  brighter(e) {
    return e = e == null ? xt : Math.pow(xt, e), new Se(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? it : Math.pow(it, e), new Se(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - a;
    return new ye(
      tn(e >= 240 ? e - 240 : e + 120, s, a),
      tn(e, s, a),
      tn(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new Se(hr(this.h), mt(this.s), mt(this.l), yt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = yt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${hr(this.h)}, ${mt(this.s) * 100}%, ${mt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function hr(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function mt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function tn(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Un = (e) => () => e;
function Js(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Xs(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function Qs(e) {
  return (e = +e) == 1 ? Kr : function(t, r) {
    return r - t ? Xs(t, r, e) : Un(isNaN(t) ? r : t);
  };
}
function Kr(e, t) {
  var r = t - e;
  return r ? Js(e, r) : Un(isNaN(e) ? t : e);
}
const fr = function e(t) {
  var r = Qs(t);
  function a(s, o) {
    var i = r((s = dn(s)).r, (o = dn(o)).r), l = r(s.g, o.g), d = r(s.b, o.b), h = Kr(s.opacity, o.opacity);
    return function(u) {
      return s.r = i(u), s.g = l(u), s.b = d(u), s.opacity = h(u), s + "";
    };
  }
  return a.gamma = e, a;
}(1);
function eo(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < r; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function to(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function no(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, s = new Array(a), o = new Array(r), i;
  for (i = 0; i < a; ++i) s[i] = Gn(e[i], t[i]);
  for (; i < r; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function ro(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function _t(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function ao(e, t) {
  var r = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = Gn(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in r) a[s] = r[s](o);
    return a;
  };
}
var un = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, nn = new RegExp(un.source, "g");
function so(e) {
  return function() {
    return e;
  };
}
function oo(e) {
  return function(t) {
    return e(t) + "";
  };
}
function io(e, t) {
  var r = un.lastIndex = nn.lastIndex = 0, a, s, o, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = un.exec(e)) && (s = nn.exec(t)); )
    (o = s.index) > r && (o = t.slice(r, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, d.push({ i, x: _t(a, s) })), r = nn.lastIndex;
  return r < t.length && (o = t.slice(r), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? d[0] ? oo(d[0].x) : so(t) : (t = d.length, function(h) {
    for (var u = 0, m; u < t; ++u) l[(m = d[u]).i] = m.x(h);
    return l.join("");
  });
}
function Gn(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? Un(t) : (r === "number" ? _t : r === "string" ? (a = ct(t)) ? (t = a, fr) : io : t instanceof ct ? fr : t instanceof Date ? ro : to(t) ? eo : Array.isArray(t) ? no : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ao : _t)(e, t);
}
function lo(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function co(e) {
  return function() {
    return e;
  };
}
function uo(e) {
  return +e;
}
var mr = [0, 1];
function Ze(e) {
  return e;
}
function hn(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : co(isNaN(t) ? NaN : 0.5);
}
function ho(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function fo(e, t, r) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = hn(s, a), o = r(i, o)) : (a = hn(a, s), o = r(o, i)), function(l) {
    return o(a(l));
  };
}
function mo(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = hn(e[i], e[i + 1]), o[i] = r(t[i], t[i + 1]);
  return function(l) {
    var d = $s(e, l, 1, a) - 1;
    return o[d](s[d](l));
  };
}
function po(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function go() {
  var e = mr, t = mr, r = Gn, a, s, o, i = Ze, l, d, h;
  function u() {
    var g = Math.min(e.length, t.length);
    return i !== Ze && (i = ho(e[0], e[g - 1])), l = g > 2 ? mo : fo, d = h = null, m;
  }
  function m(g) {
    return g == null || isNaN(g = +g) ? o : (d || (d = l(e.map(a), t, r)))(a(i(g)));
  }
  return m.invert = function(g) {
    return i(s((h || (h = l(t, e.map(a), _t)))(g)));
  }, m.domain = function(g) {
    return arguments.length ? (e = Array.from(g, uo), u()) : e.slice();
  }, m.range = function(g) {
    return arguments.length ? (t = Array.from(g), u()) : t.slice();
  }, m.rangeRound = function(g) {
    return t = Array.from(g), r = lo, u();
  }, m.clamp = function(g) {
    return arguments.length ? (i = g ? !0 : Ze, u()) : i !== Ze;
  }, m.interpolate = function(g) {
    return arguments.length ? (r = g, u()) : r;
  }, m.unknown = function(g) {
    return arguments.length ? (o = g, m) : o;
  }, function(g, _) {
    return a = g, s = _, u();
  };
}
function bo() {
  return go()(Ze, Ze);
}
function xo(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, s = e[r], o = e[a], i;
  return o < s && (i = r, r = a, a = i, i = s, s = o, o = i), e[r] = t.floor(s), e[a] = t.ceil(o), e;
}
const rn = /* @__PURE__ */ new Date(), an = /* @__PURE__ */ new Date();
function ge(e, t, r, a) {
  function s(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return s.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), s.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), s.round = (o) => {
    const i = s(o), l = s.ceil(o);
    return o - i < l - o ? i : l;
  }, s.offset = (o, i) => (t(o = /* @__PURE__ */ new Date(+o), i == null ? 1 : Math.floor(i)), o), s.range = (o, i, l) => {
    const d = [];
    if (o = s.ceil(o), l = l == null ? 1 : Math.floor(l), !(o < i) || !(l > 0)) return d;
    let h;
    do
      d.push(h = /* @__PURE__ */ new Date(+o)), t(o, l), e(o);
    while (h < o && o < i);
    return d;
  }, s.filter = (o) => ge((i) => {
    if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !o(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !o(i); )
          ;
  }), r && (s.count = (o, i) => (rn.setTime(+o), an.setTime(+i), e(rn), e(an), Math.floor(r(rn, an))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const kt = ge(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
kt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ge((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : kt);
kt.range;
const Ee = 1e3, ve = Ee * 60, Ae = ve * 60, ze = Ae * 24, Vn = ze * 7, pr = ze * 30, sn = ze * 365, Je = ge((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ee);
}, (e, t) => (t - e) / Ee, (e) => e.getUTCSeconds());
Je.range;
const Yn = ge((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ee);
}, (e, t) => {
  e.setTime(+e + t * ve);
}, (e, t) => (t - e) / ve, (e) => e.getMinutes());
Yn.range;
const yo = ge((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ve);
}, (e, t) => (t - e) / ve, (e) => e.getUTCMinutes());
yo.range;
const qn = ge((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ee - e.getMinutes() * ve);
}, (e, t) => {
  e.setTime(+e + t * Ae);
}, (e, t) => (t - e) / Ae, (e) => e.getHours());
qn.range;
const _o = ge((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ae);
}, (e, t) => (t - e) / Ae, (e) => e.getUTCHours());
_o.range;
const ut = ge(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ve) / ze,
  (e) => e.getDate() - 1
);
ut.range;
const Kn = ge((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / ze, (e) => e.getUTCDate() - 1);
Kn.range;
const ko = ge((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / ze, (e) => Math.floor(e / ze));
ko.range;
function Ye(e) {
  return ge((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * ve) / Vn);
}
const Xt = Ye(0), vt = Ye(1), vo = Ye(2), wo = Ye(3), Qe = Ye(4), So = Ye(5), Co = Ye(6);
Xt.range;
vt.range;
vo.range;
wo.range;
Qe.range;
So.range;
Co.range;
function qe(e) {
  return ge((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Vn);
}
const Zr = qe(0), wt = qe(1), jo = qe(2), No = qe(3), et = qe(4), To = qe(5), Do = qe(6);
Zr.range;
wt.range;
jo.range;
No.range;
et.range;
To.range;
Do.range;
const Zn = ge((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Zn.range;
const Fo = ge((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Fo.range;
const We = ge((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
We.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ge((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
We.range;
const Ve = ge((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Ve.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ge((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Ve.range;
function Bo(e, t, r, a, s, o) {
  const i = [
    [Je, 1, Ee],
    [Je, 5, 5 * Ee],
    [Je, 15, 15 * Ee],
    [Je, 30, 30 * Ee],
    [o, 1, ve],
    [o, 5, 5 * ve],
    [o, 15, 15 * ve],
    [o, 30, 30 * ve],
    [s, 1, Ae],
    [s, 3, 3 * Ae],
    [s, 6, 6 * Ae],
    [s, 12, 12 * Ae],
    [a, 1, ze],
    [a, 2, 2 * ze],
    [r, 1, Vn],
    [t, 1, pr],
    [t, 3, 3 * pr],
    [e, 1, sn]
  ];
  function l(h, u, m) {
    const g = u < h;
    g && ([h, u] = [u, h]);
    const _ = m && typeof m.range == "function" ? m : d(h, u, m), B = _ ? _.range(h, +u + 1) : [];
    return g ? B.reverse() : B;
  }
  function d(h, u, m) {
    const g = Math.abs(u - h) / m, _ = Wn(([, , N]) => N).right(i, g);
    if (_ === i.length) return e.every(ar(h / sn, u / sn, m));
    if (_ === 0) return kt.every(Math.max(ar(h, u, m), 1));
    const [B, x] = i[g / i[_ - 1][2] < i[_][2] / g ? _ - 1 : _];
    return B.every(x);
  }
  return [l, d];
}
const [Io, Ro] = Bo(We, Zn, Xt, ut, qn, Yn);
function on(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ln(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function at(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function $o(e) {
  var t = e.dateTime, r = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, h = st(s), u = ot(s), m = st(o), g = ot(o), _ = st(i), B = ot(i), x = st(l), N = ot(l), D = st(d), $ = ot(d), M = {
    a: Q,
    A: se,
    b: te,
    B: T,
    c: null,
    d: kr,
    e: kr,
    f: ri,
    g: fi,
    G: pi,
    H: ei,
    I: ti,
    j: ni,
    L: Jr,
    m: ai,
    M: si,
    p: X,
    q: E,
    Q: Sr,
    s: Cr,
    S: oi,
    u: ii,
    U: li,
    V: ci,
    w: di,
    W: ui,
    x: null,
    X: null,
    y: hi,
    Y: mi,
    Z: gi,
    "%": wr
  }, k = {
    a: J,
    A: G,
    b: ie,
    B: p,
    c: null,
    d: vr,
    e: vr,
    f: _i,
    g: Fi,
    G: Ii,
    H: bi,
    I: xi,
    j: yi,
    L: Qr,
    m: ki,
    M: vi,
    p: j,
    q: W,
    Q: Sr,
    s: Cr,
    S: wi,
    u: Si,
    U: Ci,
    V: ji,
    w: Ni,
    W: Ti,
    x: null,
    X: null,
    y: Di,
    Y: Bi,
    Z: Ri,
    "%": wr
  }, F = {
    a: y,
    A: c,
    b: w,
    B: re,
    c: ee,
    d: yr,
    e: yr,
    f: Zo,
    g: xr,
    G: br,
    H: _r,
    I: _r,
    j: Vo,
    L: Ko,
    m: Go,
    M: Yo,
    p: S,
    q: Uo,
    Q: Xo,
    s: Qo,
    S: qo,
    u: Ho,
    U: Po,
    V: zo,
    w: Ao,
    W: Wo,
    x: z,
    X: q,
    y: xr,
    Y: br,
    Z: Oo,
    "%": Jo
  };
  M.x = v(r, M), M.X = v(a, M), M.c = v(t, M), k.x = v(r, k), k.X = v(a, k), k.c = v(t, k);
  function v(L, O) {
    return function(U) {
      var C = [], le = -1, ne = 0, b = L.length, f, R, H;
      for (U instanceof Date || (U = /* @__PURE__ */ new Date(+U)); ++le < b; )
        L.charCodeAt(le) === 37 && (C.push(L.slice(ne, le)), (R = gr[f = L.charAt(++le)]) != null ? f = L.charAt(++le) : R = f === "e" ? " " : "0", (H = O[f]) && (f = H(U, R)), C.push(f), ne = le + 1);
      return C.push(L.slice(ne, le)), C.join("");
    };
  }
  function A(L, O) {
    return function(U) {
      var C = at(1900, void 0, 1), le = I(C, L, U += "", 0), ne, b;
      if (le != U.length) return null;
      if ("Q" in C) return new Date(C.Q);
      if ("s" in C) return new Date(C.s * 1e3 + ("L" in C ? C.L : 0));
      if (O && !("Z" in C) && (C.Z = 0), "p" in C && (C.H = C.H % 12 + C.p * 12), C.m === void 0 && (C.m = "q" in C ? C.q : 0), "V" in C) {
        if (C.V < 1 || C.V > 53) return null;
        "w" in C || (C.w = 1), "Z" in C ? (ne = ln(at(C.y, 0, 1)), b = ne.getUTCDay(), ne = b > 4 || b === 0 ? wt.ceil(ne) : wt(ne), ne = Kn.offset(ne, (C.V - 1) * 7), C.y = ne.getUTCFullYear(), C.m = ne.getUTCMonth(), C.d = ne.getUTCDate() + (C.w + 6) % 7) : (ne = on(at(C.y, 0, 1)), b = ne.getDay(), ne = b > 4 || b === 0 ? vt.ceil(ne) : vt(ne), ne = ut.offset(ne, (C.V - 1) * 7), C.y = ne.getFullYear(), C.m = ne.getMonth(), C.d = ne.getDate() + (C.w + 6) % 7);
      } else ("W" in C || "U" in C) && ("w" in C || (C.w = "u" in C ? C.u % 7 : "W" in C ? 1 : 0), b = "Z" in C ? ln(at(C.y, 0, 1)).getUTCDay() : on(at(C.y, 0, 1)).getDay(), C.m = 0, C.d = "W" in C ? (C.w + 6) % 7 + C.W * 7 - (b + 5) % 7 : C.w + C.U * 7 - (b + 6) % 7);
      return "Z" in C ? (C.H += C.Z / 100 | 0, C.M += C.Z % 100, ln(C)) : on(C);
    };
  }
  function I(L, O, U, C) {
    for (var le = 0, ne = O.length, b = U.length, f, R; le < ne; ) {
      if (C >= b) return -1;
      if (f = O.charCodeAt(le++), f === 37) {
        if (f = O.charAt(le++), R = F[f in gr ? O.charAt(le++) : f], !R || (C = R(L, U, C)) < 0) return -1;
      } else if (f != U.charCodeAt(C++))
        return -1;
    }
    return C;
  }
  function S(L, O, U) {
    var C = h.exec(O.slice(U));
    return C ? (L.p = u.get(C[0].toLowerCase()), U + C[0].length) : -1;
  }
  function y(L, O, U) {
    var C = _.exec(O.slice(U));
    return C ? (L.w = B.get(C[0].toLowerCase()), U + C[0].length) : -1;
  }
  function c(L, O, U) {
    var C = m.exec(O.slice(U));
    return C ? (L.w = g.get(C[0].toLowerCase()), U + C[0].length) : -1;
  }
  function w(L, O, U) {
    var C = D.exec(O.slice(U));
    return C ? (L.m = $.get(C[0].toLowerCase()), U + C[0].length) : -1;
  }
  function re(L, O, U) {
    var C = x.exec(O.slice(U));
    return C ? (L.m = N.get(C[0].toLowerCase()), U + C[0].length) : -1;
  }
  function ee(L, O, U) {
    return I(L, t, O, U);
  }
  function z(L, O, U) {
    return I(L, r, O, U);
  }
  function q(L, O, U) {
    return I(L, a, O, U);
  }
  function Q(L) {
    return i[L.getDay()];
  }
  function se(L) {
    return o[L.getDay()];
  }
  function te(L) {
    return d[L.getMonth()];
  }
  function T(L) {
    return l[L.getMonth()];
  }
  function X(L) {
    return s[+(L.getHours() >= 12)];
  }
  function E(L) {
    return 1 + ~~(L.getMonth() / 3);
  }
  function J(L) {
    return i[L.getUTCDay()];
  }
  function G(L) {
    return o[L.getUTCDay()];
  }
  function ie(L) {
    return d[L.getUTCMonth()];
  }
  function p(L) {
    return l[L.getUTCMonth()];
  }
  function j(L) {
    return s[+(L.getUTCHours() >= 12)];
  }
  function W(L) {
    return 1 + ~~(L.getUTCMonth() / 3);
  }
  return {
    format: function(L) {
      var O = v(L += "", M);
      return O.toString = function() {
        return L;
      }, O;
    },
    parse: function(L) {
      var O = A(L += "", !1);
      return O.toString = function() {
        return L;
      }, O;
    },
    utcFormat: function(L) {
      var O = v(L += "", k);
      return O.toString = function() {
        return L;
      }, O;
    },
    utcParse: function(L) {
      var O = A(L += "", !0);
      return O.toString = function() {
        return L;
      }, O;
    }
  };
}
var gr = { "-": "", _: " ", 0: "0" }, be = /^\s*\d+/, Mo = /^%/, Lo = /[\\^$*+?|[\]().{}]/g;
function ue(e, t, r) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < r ? new Array(r - o + 1).join(t) + s : s);
}
function Eo(e) {
  return e.replace(Lo, "\\$&");
}
function st(e) {
  return new RegExp("^(?:" + e.map(Eo).join("|") + ")", "i");
}
function ot(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Ao(e, t, r) {
  var a = be.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function Ho(e, t, r) {
  var a = be.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Po(e, t, r) {
  var a = be.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function zo(e, t, r) {
  var a = be.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Wo(e, t, r) {
  var a = be.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function br(e, t, r) {
  var a = be.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function xr(e, t, r) {
  var a = be.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function Oo(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Uo(e, t, r) {
  var a = be.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function Go(e, t, r) {
  var a = be.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function yr(e, t, r) {
  var a = be.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Vo(e, t, r) {
  var a = be.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function _r(e, t, r) {
  var a = be.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Yo(e, t, r) {
  var a = be.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function qo(e, t, r) {
  var a = be.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Ko(e, t, r) {
  var a = be.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function Zo(e, t, r) {
  var a = be.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Jo(e, t, r) {
  var a = Mo.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Xo(e, t, r) {
  var a = be.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Qo(e, t, r) {
  var a = be.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function kr(e, t) {
  return ue(e.getDate(), t, 2);
}
function ei(e, t) {
  return ue(e.getHours(), t, 2);
}
function ti(e, t) {
  return ue(e.getHours() % 12 || 12, t, 2);
}
function ni(e, t) {
  return ue(1 + ut.count(We(e), e), t, 3);
}
function Jr(e, t) {
  return ue(e.getMilliseconds(), t, 3);
}
function ri(e, t) {
  return Jr(e, t) + "000";
}
function ai(e, t) {
  return ue(e.getMonth() + 1, t, 2);
}
function si(e, t) {
  return ue(e.getMinutes(), t, 2);
}
function oi(e, t) {
  return ue(e.getSeconds(), t, 2);
}
function ii(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function li(e, t) {
  return ue(Xt.count(We(e) - 1, e), t, 2);
}
function Xr(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Qe(e) : Qe.ceil(e);
}
function ci(e, t) {
  return e = Xr(e), ue(Qe.count(We(e), e) + (We(e).getDay() === 4), t, 2);
}
function di(e) {
  return e.getDay();
}
function ui(e, t) {
  return ue(vt.count(We(e) - 1, e), t, 2);
}
function hi(e, t) {
  return ue(e.getFullYear() % 100, t, 2);
}
function fi(e, t) {
  return e = Xr(e), ue(e.getFullYear() % 100, t, 2);
}
function mi(e, t) {
  return ue(e.getFullYear() % 1e4, t, 4);
}
function pi(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Qe(e) : Qe.ceil(e), ue(e.getFullYear() % 1e4, t, 4);
}
function gi(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ue(t / 60 | 0, "0", 2) + ue(t % 60, "0", 2);
}
function vr(e, t) {
  return ue(e.getUTCDate(), t, 2);
}
function bi(e, t) {
  return ue(e.getUTCHours(), t, 2);
}
function xi(e, t) {
  return ue(e.getUTCHours() % 12 || 12, t, 2);
}
function yi(e, t) {
  return ue(1 + Kn.count(Ve(e), e), t, 3);
}
function Qr(e, t) {
  return ue(e.getUTCMilliseconds(), t, 3);
}
function _i(e, t) {
  return Qr(e, t) + "000";
}
function ki(e, t) {
  return ue(e.getUTCMonth() + 1, t, 2);
}
function vi(e, t) {
  return ue(e.getUTCMinutes(), t, 2);
}
function wi(e, t) {
  return ue(e.getUTCSeconds(), t, 2);
}
function Si(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Ci(e, t) {
  return ue(Zr.count(Ve(e) - 1, e), t, 2);
}
function ea(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? et(e) : et.ceil(e);
}
function ji(e, t) {
  return e = ea(e), ue(et.count(Ve(e), e) + (Ve(e).getUTCDay() === 4), t, 2);
}
function Ni(e) {
  return e.getUTCDay();
}
function Ti(e, t) {
  return ue(wt.count(Ve(e) - 1, e), t, 2);
}
function Di(e, t) {
  return ue(e.getUTCFullYear() % 100, t, 2);
}
function Fi(e, t) {
  return e = ea(e), ue(e.getUTCFullYear() % 100, t, 2);
}
function Bi(e, t) {
  return ue(e.getUTCFullYear() % 1e4, t, 4);
}
function Ii(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? et(e) : et.ceil(e), ue(e.getUTCFullYear() % 1e4, t, 4);
}
function Ri() {
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
var Ke, ta;
$i({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function $i(e) {
  return Ke = $o(e), ta = Ke.format, Ke.parse, Ke.utcFormat, Ke.utcParse, Ke;
}
function Mi(e) {
  return new Date(e);
}
function Li(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function na(e, t, r, a, s, o, i, l, d, h) {
  var u = bo(), m = u.invert, g = u.domain, _ = h(".%L"), B = h(":%S"), x = h("%I:%M"), N = h("%I %p"), D = h("%a %d"), $ = h("%b %d"), M = h("%B"), k = h("%Y");
  function F(v) {
    return (d(v) < v ? _ : l(v) < v ? B : i(v) < v ? x : o(v) < v ? N : a(v) < v ? s(v) < v ? D : $ : r(v) < v ? M : k)(v);
  }
  return u.invert = function(v) {
    return new Date(m(v));
  }, u.domain = function(v) {
    return arguments.length ? g(Array.from(v, Li)) : g().map(Mi);
  }, u.ticks = function(v) {
    var A = g();
    return e(A[0], A[A.length - 1], v ?? 10);
  }, u.tickFormat = function(v, A) {
    return A == null ? F : h(A);
  }, u.nice = function(v) {
    var A = g();
    return (!v || typeof v.range != "function") && (v = t(A[0], A[A.length - 1], v ?? 10)), v ? g(xo(A, v)) : u;
  }, u.copy = function() {
    return po(u, na(e, t, r, a, s, o, i, l, d, h));
  }, u;
}
function Ei() {
  return As.apply(na(Io, Ro, We, Zn, Xt, ut, qn, Yn, Je, ta).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Ai({
  task: e,
  scale: t,
  onTaskClick: r,
  onTaskDoubleClick: a,
  isSelected: s = !1,
  taskIndex: o,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": d
}) {
  const h = he(null), [u, m] = de(!1), [g, _] = de(!1), B = t(e.start), x = t(e.end), N = Math.max(x - B, 20), D = () => {
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
  }, $ = e.progress ? N * e.progress / 100 : 0, M = () => {
    r?.(e);
  }, k = () => {
    a?.(e);
  }, F = (w) => {
    w.key === "Enter" ? (w.preventDefault(), M()) : w.key === " " && (w.preventDefault(), k());
  }, v = () => {
    m(!0);
  }, A = () => {
    m(!1);
  }, I = () => {
    _(!0), l?.();
  }, S = () => {
    _(!1);
  }, y = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (g || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), c = {
    "--task-left": `${B}px`,
    "--task-width": `${N}px`,
    "--task-color": D(),
    left: `${B}px`,
    width: `${N}px`,
    backgroundColor: D()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: h,
      "data-task-index": o,
      className: y,
      style: c,
      onClick: M,
      onDoubleClick: k,
      onKeyDown: F,
      onMouseDown: v,
      onMouseUp: A,
      onFocus: I,
      onBlur: S,
      "aria-label": d || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${$}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function Hi({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let _ = e.getTime(); _ <= t.getTime(); _ += 864e5)
    a.push(new Date(_));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = de(-1), d = he(null), h = (_) => {
    if (_.key === "ArrowLeft") {
      _.preventDefault();
      const B = Math.max(0, i === -1 ? 0 : i - 1);
      l(B), g(B);
    } else if (_.key === "ArrowRight") {
      _.preventDefault();
      const B = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(B), g(B);
    } else if (_.key === "ArrowDown") {
      _.preventDefault();
      const B = document.querySelector(".gantt-row .timeline-container");
      B && B.focus();
    } else if (_.key === "Home")
      _.preventDefault(), l(0), g(0);
    else if (_.key === "End") {
      _.preventDefault();
      const B = a.length - 1;
      l(B), g(B);
    }
  }, u = (_) => {
    if (_.key === "ArrowDown") {
      _.preventDefault();
      const B = document.querySelector(".gantt-row .resource-label");
      B && B.focus();
    } else if (_.key === "ArrowRight") {
      _.preventDefault();
      const B = d.current;
      B && B.focus();
    }
  }, m = () => {
    i === -1 && (l(0), setTimeout(() => g(0), 0));
  }, g = (_) => {
    const B = d.current?.querySelector(`[data-date-index="${_}"]`);
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
            ref: d,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": r,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: h,
            onFocus: m,
            children: a.map((_, B) => {
              const x = _.getTime() === o.getTime(), N = i === B;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": B,
                  className: `date-column ${x ? "today" : ""} ${N ? "focused" : ""}`,
                  tabIndex: N ? 0 : -1,
                  role: "button",
                  "aria-label": `${_.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${x ? " (Today)" : ""}`,
                  onFocus: () => l(B),
                  onKeyDown: h,
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
function Pi({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, d] = de(!1), [h, u] = de(-1), m = he(null);
  fe(() => {
    l && h >= 0 && t.length > 0 && setTimeout(() => {
      m.current?.querySelector(`[data-task-index="${h}"]`)?.focus();
    }, 0);
  }, [l, h, t.length]);
  const g = (x) => {
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
          x.preventDefault(), o === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          x.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          x.preventDefault(), m.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (x.preventDefault(), d(!0), u(0));
          break;
      }
      return;
    }
    switch (x.key) {
      case "ArrowLeft":
        x.preventDefault();
        const N = Math.max(0, h - 1);
        u(N), m.current?.querySelector(`[data-task-index="${N}"]`)?.focus();
        break;
      case "ArrowRight":
        x.preventDefault();
        const $ = Math.min(t.length - 1, h + 1);
        u($), m.current?.querySelector(`[data-task-index="${$}"]`)?.focus();
        break;
      case "Enter":
        x.preventDefault(), h >= 0 && a?.(t[h]);
        break;
      case " ":
        x.preventDefault(), h >= 0 && s?.(t[h]);
        break;
      case "Escape":
        x.preventDefault(), d(!1), u(-1), m.current?.focus();
        break;
    }
  }, _ = (x) => {
    switch (x.key) {
      case "ArrowUp":
        x.preventDefault(), o === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        x.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        x.preventDefault(), m.current?.focus();
        break;
    }
  }, B = (x) => {
    l && u(x);
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
            onKeyDown: g,
            onFocus: () => {
              l || u(-1);
            },
            children: t.map((x, N) => /* @__PURE__ */ n.jsx(
              Ai,
              {
                task: x,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && h === N,
                taskIndex: N,
                tabIndex: l && h === N ? 0 : -1,
                onFocus: () => B(N)
              },
              x.id
            ))
          }
        )
      ]
    }
  );
}
function $h({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = he(null), [l, d] = de(800), h = me(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const x = new Date(r);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : x;
  }, [r]), u = me(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const x = new Date(a);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : x;
  }, [a]), m = me(() => Math.ceil((u.getTime() - h.getTime()) / 864e5) + 1, [h, u]);
  fe(() => {
    if (!i.current) return;
    const x = new ResizeObserver((N) => {
      const D = N[0];
      D && d(Math.max(D.contentRect.width - 220, 400));
    });
    return x.observe(i.current), () => x.disconnect();
  }, []);
  const g = me(
    () => Ei().domain([h, u]).range([0, l]),
    [h, u, l]
  ), _ = me(() => {
    const x = /* @__PURE__ */ new Map();
    return t.forEach((N) => {
      const D = x.get(N.resourceId) || [];
      D.push(N), x.set(N.resourceId, D);
    }), x;
  }, [t]), B = (x) => {
    if (x.target === x.currentTarget)
      switch (x.key) {
        case "ArrowDown":
          x.preventDefault();
          const N = i.current?.querySelector(".gantt-row .resource-label");
          N && N.focus();
          break;
        case "Home":
          x.preventDefault();
          const D = i.current?.querySelector(".header-resource");
          D && D.focus();
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
        /* @__PURE__ */ n.jsx(Hi, { viewStart: h, viewEnd: u, dateCount: m }),
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
            children: e.map((x, N) => /* @__PURE__ */ n.jsx(
              Pi,
              {
                resource: x,
                tasks: _.get(x.id) || [],
                scale: g,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: N,
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
const St = ({
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
) }), zi = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const d = () => t ? we.Children.toArray(t).filter(
    (D) => we.isValidElement(D) && (D.type === St || D.type?.displayName === "BreadcrumbItem")
  ).map((D) => ({
    text: typeof D.props.children == "string" ? D.props.children : String(D.props.children),
    href: D.props.href,
    active: D.props.active,
    attributes: D.props.attributes
  })) : [], h = () => t ? d() : s && o ? [{ href: s, text: o }] : e, u = () => {
    const N = h();
    if (N && N.length > 0) {
      const D = N.slice().reverse().find(($) => $.href && !$.active);
      if (D)
        return { href: D.href, text: D.text };
    }
    return { text: "Home" };
  }, m = h(), g = u(), _ = V(
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
          we.Children.map(t, (N, D) => we.isValidElement(N) && (N.type === St || N.type?.displayName === "BreadcrumbItem") ? we.cloneElement(N, { key: D }) : null)
        ) : (
          // Render from items array
          m?.map((N, D) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: N.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...N.attributes || {},
              children: N.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: N.href,
              role: "link",
              ...N.attributes || {},
              children: N.text
            }
          ) }, D))
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
}, Wi = zi;
Wi.Item = St;
St.displayName = "BreadcrumbItem";
const ra = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [s, o] = de(!1);
  fe(() => {
    o(!0);
  }, []), fe(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (d) => {
      const h = d.target, u = h.getAttribute("href");
      if (u && u.startsWith("#")) {
        const m = document.querySelector(u);
        if (m) {
          m.hasAttribute("tabindex") || m.setAttribute("tabindex", "-1"), m.focus(), m.classList.add("nhsuk-skip-link-focused-element");
          const g = window.setTimeout(() => {
            m.classList.remove("nhsuk-skip-link-focused-element"), m.getAttribute("tabindex") === "-1" && m.removeAttribute("tabindex");
          }, 3e3);
          h.__nhsSkipLinkTimeout = g;
        }
      }
    };
    try {
      const d = document.querySelectorAll(".nhsuk-skip-link");
      return d.forEach((h) => {
        h.addEventListener("click", l);
      }), () => {
        try {
          d.forEach((h) => {
            h.removeEventListener("click", l);
            const u = h.__nhsSkipLinkTimeout;
            u && window.clearTimeout && window.clearTimeout(u);
          });
        } catch (h) {
          console.warn("SkipLink cleanup error:", h);
        }
      };
    } catch (d) {
      return console.warn("SkipLink initialization error:", d), () => {
      };
    }
  }, [s]);
  const i = V("nhsuk-skip-link", r);
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
}, Mh = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: s,
  attributes: o = {}
}) => {
  const i = V("nhsuk-pagination", s);
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
}, Lh = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const s = V("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, aa = we.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: r,
  headingLevel: a = 2,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  href: l,
  imgURL: d,
  imgAlt: h,
  ...u
}, m) => {
  const g = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    u.className
  ].filter(Boolean).join(" "), _ = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), B = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), x = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const $ = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Pe,
      {
        level: a,
        className: B,
        children: $()
      }
    );
  }, N = () => u.children ? u.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: o }) : null, D = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      ref: m,
      children: [
        d && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: d,
            alt: h || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: _, children: [
          x(),
          N(),
          D()
        ] })
      ]
    }
  );
});
aa.displayName = "Card";
const Eh = ({
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
}, Ah = ({
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
}, Hh = ({
  type: e,
  heading: t,
  headingHtml: r,
  headingLevel: a = 3,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  className: l,
  children: d,
  "data-testid": h,
  id: u,
  "aria-label": m,
  "aria-labelledby": g,
  "aria-describedby": _
}) => {
  const B = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), x = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), N = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const $ = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], M = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        $,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Pe,
      {
        level: a,
        className: x,
        children: M
      }
    );
  }, D = () => d || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: B,
      "data-testid": h,
      id: u,
      "aria-label": m,
      "aria-labelledby": g,
      "aria-describedby": _,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          N(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: D() })
      ]
    }
  );
}, Oi = ({
  id: e,
  className: t,
  headingText: r,
  headingHtml: a,
  headingLevel: s = 2,
  bodyText: o,
  bodyHtml: i,
  children: l,
  ...d
}) => {
  const h = V(
    "nhsuk-panel",
    t
  ), u = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Pe,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Pe,
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
  return /* @__PURE__ */ n.jsxs("div", { className: h, id: e, ...d, children: [
    u(),
    m()
  ] });
}, Ph = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...s
}) => {
  const o = V("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: o, ...s, children: i() });
}, zh = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const s = V(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), o = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((d, h) => /* @__PURE__ */ n.jsx(
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
            o(d),
            d.visuallyHiddenText && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: d.visuallyHiddenText })
          ]
        }
      )
    },
    h
  )) }) });
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: s, ...a, children: e.map((l, d) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: o(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: o(l.value) }),
    i(l.actions)
  ] }, d)) }) });
}, Wh = ({
  rows: e,
  head: t,
  caption: r,
  captionSize: a,
  firstCellIsHeader: s = !1,
  responsive: o = !1,
  heading: i,
  headingLevel: l = 3,
  panel: d = !1,
  panelClasses: h,
  tableClasses: u,
  classes: m,
  attributes: g,
  "data-testid": _
}) => {
  const B = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), x = V(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    u
  ), N = V(m), D = (k, F) => {
    const v = V("nhsuk-table__header", {
      [`nhsuk-table__header--${k.format}`]: k.format
    }, k.classes), A = {
      scope: "col",
      ...k.colspan && { colSpan: k.colspan },
      ...k.rowspan && { rowSpan: k.rowspan },
      ...o && { role: "columnheader" },
      ...k.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: v, ...A, children: k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text }, F);
  }, $ = (k, F, v) => {
    const A = s && v, I = V(
      A ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${A ? "header" : "cell"}--${k.format}`]: k.format
      },
      k.classes
    ), S = {
      ...A && { scope: "row" },
      ...k.colspan && { colSpan: k.colspan },
      ...k.rowspan && { rowSpan: k.rowspan },
      ...o && {
        role: A ? "rowheader" : "cell",
        ...k.header && { "data-label": k.header }
      },
      ...k.attributes
    }, y = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      o && k.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        k.header,
        " "
      ] }),
      k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text
    ] }), c = A ? "th" : "td";
    return /* @__PURE__ */ n.jsx(c, { className: I, ...S, children: y }, F);
  }, M = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: x,
      ...o && { role: "table" },
      ...g,
      ..._ && { "data-testid": _ },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: B, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...o && { role: "row" }, children: t.map((k, F) => D(k, F)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((k, F) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: k.map(
              (v, A) => $(v, A, A === 0)
            )
          },
          F
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ n.jsxs(Oi, { className: h, children: [
    i && /* @__PURE__ */ n.jsx(Pe, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    M()
  ] }) : N ? /* @__PURE__ */ n.jsx("div", { className: N, children: M() }) : M();
}, Oh = tt(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
  onTabChange: a,
  onTabFocus: s,
  onTabListBlur: o,
  onEscape: i,
  autoActivate: l = !0,
  className: d,
  id: h,
  "data-testid": u,
  ...m
}, g) => {
  const _ = r !== void 0, [B, x] = de(() => t || e[0]?.id || ""), N = _ ? r : B, D = he(null), $ = he(/* @__PURE__ */ new Map()), M = K((y) => {
    _ || x(y), a?.(y);
  }, [_, a]), k = K((y) => {
    s?.(y), l && M(y);
  }, [s, l, M]), F = K((y, c) => {
    const w = e.filter((z) => !z.disabled).map((z) => z.id), re = w.indexOf(c);
    let ee = null;
    switch (y.key) {
      case "ArrowLeft":
        ee = re > 0 ? re - 1 : w.length - 1;
        break;
      case "ArrowRight":
        ee = re < w.length - 1 ? re + 1 : 0;
        break;
      case "Home":
        ee = 0;
        break;
      case "End":
        ee = w.length - 1;
        break;
      case "Escape":
        y.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (ee !== null) {
      y.preventDefault();
      const z = w[ee], q = $.current.get(z);
      q && (q.focus(), k(z));
    }
  }, [e, k, i]), v = K((y, c) => {
    c ? $.current.set(y, c) : $.current.delete(y);
  }, []), A = K((y) => {
    const c = $.current.get(y);
    c && c.focus();
  }, []);
  Mr(g, () => ({
    focusTab: A,
    getActiveTab: () => N,
    getTabListElement: () => D.current
  }), [A, N]);
  const I = K((y) => {
    const c = y.relatedTarget;
    D.current?.contains(c) || o?.();
  }, [o]), S = V("nhsuk-tabs", d);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: S,
      id: h,
      "data-testid": u,
      ...m,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: D,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: I,
                children: e.map((y) => {
                  const c = y.id === N, w = y.disabled, re = V("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": c,
                    "nhsuk-tabs__list-item--disabled": w
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: re, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (ee) => v(y.id, ee),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": c,
                      "aria-controls": `${y.id}-panel`,
                      id: `${y.id}-tab`,
                      tabIndex: c ? 0 : -1,
                      disabled: w,
                      onClick: () => !w && M(y.id),
                      onKeyDown: (ee) => !w && F(ee, y.id),
                      onFocus: () => !w && k(y.id),
                      ...y.attributes,
                      children: y.label
                    }
                  ) }, y.id);
                })
              }
            )
          }
        ),
        e.map((y) => {
          const c = y.id === N;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${y.id}-tab`,
              id: `${y.id}-panel`,
              hidden: !c,
              children: y.content
            },
            y.id
          );
        })
      ]
    }
  );
}), Ui = tt(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...d
  }, h) => {
    const u = [
      "nhsuk-details",
      o
    ].filter(Boolean).join(" "), m = t ? /* @__PURE__ */ n.jsx(
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
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: m }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: g })
        ]
      }
    );
  }
);
Ui.displayName = "Details";
const Gi = tt(
  ({
    title: e,
    type: t,
    items: r,
    hidePrefix: a = !1,
    headingLevel: s = 3,
    className: o,
    ...i
  }, l) => {
    const d = ["nhsuk-do-dont-list"];
    o && d.push(o);
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
    ), m = (_) => t === "cross" && !a ? `do not ${_}` : _, g = () => /* @__PURE__ */ n.jsx(
      Pe,
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
        className: d.join(" "),
        ...i,
        children: [
          g(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: h.join(" "), role: "list", children: r.map((_, B) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            m(_.item)
          ] }, B)) }) })
        ]
      }
    );
  }
);
Gi.displayName = "DoDontList";
const Vi = tt(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...d
  }, h) => {
    const u = [
      "nhsuk-expander",
      o
    ].filter(Boolean).join(" "), m = t ? /* @__PURE__ */ n.jsx(
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
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: m }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: g })
        ]
      }
    );
  }
);
Vi.displayName = "Expander";
const Yi = tt(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, d) => {
      const h = d + 1, u = `${t}-${h}-hint`, m = `${t}-${h}-status`, g = !!l.href, _ = [
        "nhsuk-task-list__item",
        g && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), B = [
        l.hint && u,
        m
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        qi,
        {
          item: l,
          itemClasses: _,
          hasLink: g,
          hintId: u,
          statusId: m,
          ariaDescribedBy: B
        },
        d
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
), qi = ({
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
  ) : /* @__PURE__ */ n.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, d = () => {
    const h = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let u;
    return e.status.tag ? u = /* @__PURE__ */ n.jsx(He, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ n.jsx("div", { className: h, id: s, children: u });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    d()
  ] });
};
Yi.displayName = "TaskList";
const Uh = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: a,
  children: s,
  className: o,
  ...i
}) => {
  const l = /important/i.test(e), d = () => s || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), h = [
    "nhsuk-warning-callout",
    o
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: h,
      ...i,
      children: [
        $r(
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
}, Gh = ({
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
}, Ki = ({
  title: e,
  value: t,
  subtitle: r,
  variant: a = "default",
  href: s,
  className: o = "",
  ariaLabel: i,
  ...l
}) => {
  const d = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    o
  ].filter(Boolean).join(" "), h = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Pe, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    r && /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: r })
  ] });
  return s ? /* @__PURE__ */ n.jsx(
    "a",
    {
      className: `${d} nhs-fdp-summary-card--clickable`,
      href: s,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: h
    }
  ) : /* @__PURE__ */ n.jsx(
    "div",
    {
      className: d,
      "aria-label": i,
      ...l,
      children: h
    }
  );
}, Vh = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(vs, { children: e.map((s, o) => /* @__PURE__ */ n.jsx(
    zn,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      children: /* @__PURE__ */ n.jsx(Ki, { ...s })
    },
    o
  )) }) });
}, Zi = we.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: r,
    onSort: a,
    selectedRowIndex: s,
    onRowSelect: o,
    id: i,
    testId: l,
    ariaLabel: d,
    ariaLabelledby: h,
    ariaDescribedby: u,
    className: m,
    tableClassName: g,
    bordered: _ = !1,
    striped: B = !1,
    responsive: x = !1,
    tableType: N = "default"
  }, D) => {
    const $ = he(null), M = he(null), k = he(null);
    we.useImperativeHandle(D, () => $.current, []);
    const [F, v] = de(0), [A, I] = de(0), [S, y] = de("headers"), [c, w] = de("browse"), re = t.length, ee = e.length, z = me(() => !r || r.length === 0 ? e : [...e].sort((E, J) => {
      for (const { key: G, direction: ie } of r) {
        const p = E[G], j = J[G];
        if (p == null && j == null) continue;
        if (p == null) return 1;
        if (j == null) return -1;
        let W = 0;
        if (typeof p == "number" && typeof j == "number" ? W = p - j : W = String(p).localeCompare(String(j)), W !== 0)
          return ie === "asc" ? W : -W;
      }
      return 0;
    }), [e, r]), q = K((E, J) => {
      setTimeout(() => {
        const G = $.current?.querySelector(
          `tbody tr:nth-child(${E + 1}) td:nth-child(${J + 1})`
        );
        G && (G.focus(), typeof G.scrollIntoView == "function" && G.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Q = K((E) => {
      setTimeout(() => {
        const J = $.current?.querySelector(`th:nth-child(${E + 1})`);
        J && (J.focus(), typeof J.scrollIntoView == "function" && J.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), se = K((E) => {
      a?.(E);
    }, [a]), te = K((E) => {
      o?.(E);
    }, [o]), T = K((E) => {
      const { key: J } = E;
      switch (J) {
        case "Enter":
          if (E.preventDefault(), S === "headers" && c === "browse")
            w("navigate"), Q(A);
          else if (S === "headers" && c === "navigate") {
            const G = t[A];
            G && se(G.key);
          } else S === "cells" && c === "browse" ? (w("navigate"), q(F, A)) : S === "cells" && c === "navigate" && te(F);
          break;
        case "Escape":
          E.preventDefault(), (S === "headers" && c === "navigate" || S === "cells" && c === "navigate") && w("browse");
          break;
        case "ArrowLeft":
          if (E.preventDefault(), c === "navigate" || c === "browse" && S === "headers") {
            if (S === "headers") {
              const G = Math.max(0, A - 1);
              I(G), Q(G);
            } else if (S === "cells") {
              const G = Math.max(0, A - 1);
              I(G), q(F, G);
            }
          }
          break;
        case "ArrowRight":
          if (E.preventDefault(), c === "navigate" || c === "browse" && S === "headers") {
            if (S === "headers") {
              const G = Math.min(re - 1, A + 1);
              I(G), Q(G);
            } else if (S === "cells") {
              const G = Math.min(re - 1, A + 1);
              I(G), q(F, G);
            }
          }
          break;
        case "ArrowUp":
          if (E.preventDefault(), S === "cells") {
            if (c === "browse") {
              const G = Math.max(0, F - 1);
              v(G), q(G, 0), I(0);
            } else if (c === "navigate")
              if (F > 0) {
                const G = F - 1;
                v(G), q(G, A);
              } else
                y("headers"), w("browse"), Q(A);
          }
          break;
        case "ArrowDown":
          if (E.preventDefault(), S === "headers" && c === "browse")
            y("cells"), v(0), I(0), q(0, 0);
          else if (S === "cells") {
            const G = ee - 1;
            if (c === "browse") {
              const ie = Math.min(G, F + 1);
              v(ie), q(ie, 0), I(0);
            } else if (c === "navigate" && F < G) {
              const ie = F + 1;
              v(ie), q(ie, A);
            }
          }
          break;
        case "Home":
          E.preventDefault(), S === "headers" ? (I(0), Q(0)) : S === "cells" && (E.ctrlKey ? (v(0), I(0), q(0, 0)) : (I(0), q(F, 0)));
          break;
        case "End":
          if (E.preventDefault(), S === "headers") {
            const G = re - 1;
            I(G), Q(G);
          } else if (S === "cells")
            if (E.ctrlKey) {
              const G = ee - 1, ie = re - 1;
              v(G), I(ie), q(G, ie);
            } else {
              const G = re - 1;
              I(G), q(F, G);
            }
          break;
        case " ":
          if (E.preventDefault(), S === "headers" && c === "navigate") {
            const G = t[A];
            G && se(G.key);
          } else S === "cells" && c === "navigate" && te(F);
          break;
      }
    }, [
      S,
      c,
      A,
      F,
      re,
      ee,
      t,
      q,
      Q,
      se,
      te
    ]);
    fe(() => {
      const E = $.current;
      if (E)
        return E.addEventListener("keydown", T), () => E.removeEventListener("keydown", T);
    }, [T]);
    const X = V(
      "nhsuk-table",
      g,
      {
        "nhsuk-table--responsive": x,
        "nhsuk-table--bordered": _,
        "nhsuk-table--striped": B,
        "nhsuk-table--compact": N === "compact"
      },
      m
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: $,
        className: X,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": h,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: M, role: "row", children: t.map((E, J) => {
            const G = r?.find((j) => j.key === E.key), ie = !!G, p = S === "headers" && A === J;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: V("sortable-header", {
                  "sortable-header--focused": p
                }),
                role: "columnheader",
                tabIndex: p ? 0 : -1,
                onClick: () => se(E.key),
                onKeyDown: (j) => {
                  (j.key === "Enter" || j.key === " ") && (j.preventDefault(), se(E.key));
                },
                "aria-sort": ie ? G?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: E.label }),
                  ie && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((j) => j.key === E.key) + 1 }),
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
              E.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: k, className: "nhsuk-table__body", role: "rowgroup", children: z.map((E, J) => {
            const G = s === J, ie = S === "cells" && F === J;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: V("data-row", {
                  "data-row--selected": G,
                  "data-row--focused": ie
                }),
                "aria-selected": G,
                children: t.map((p, j) => {
                  const W = p.render ? p.render(E) : E[p.key], L = S === "cells" && F === J && A === j, O = () => typeof W == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: W ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: W ? "Yes" : "No" })
                  ] }) : String(W ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: V("data-cell", {
                        "data-cell--focused": L
                      }),
                      tabIndex: L ? 0 : -1,
                      onClick: () => te(J),
                      children: O()
                    },
                    p.key
                  );
                })
              },
              J
            );
          }) })
        ]
      }
    );
  }
);
Zi.displayName = "AriaDataGrid";
const Ji = ({
  sortConfig: e,
  columns: t,
  onSortChange: r,
  className: a = "",
  emptyDescription: s = "No sorting applied",
  activeDescription: o,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: d = !1,
  ariaLabel: h = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const m = he(null), g = he(null), _ = he(null), B = K((S, y) => {
    d || (g.current = y, S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("text/plain", y));
  }, [d]), x = K((S, y) => {
    d || g.current === y || (S.preventDefault(), S.dataTransfer.dropEffect = "move", _.current = y);
  }, [d]), N = K((S, y) => {
    if (d) return;
    S.preventDefault();
    const c = g.current;
    if (!c || c === y) return;
    const w = e.findIndex((ee) => ee.key === c), re = e.findIndex((ee) => ee.key === y);
    if (w !== -1 && re !== -1) {
      const ee = [...e], [z] = ee.splice(w, 1);
      ee.splice(re, 0, z), r(ee);
    }
    g.current = null, _.current = null;
  }, [d, e, r]), D = K(() => {
    g.current = null, _.current = null;
  }, []), $ = K((S) => {
    const y = t.find((c) => c.key === S);
    return y ? y.label : S;
  }, [t]), M = K((S) => ["red", "orange", "blue", "aqua-green", "grey"][S] || "grey", []), k = K((S) => {
    if (d) return;
    const y = e.map(
      (c) => c.key === S ? { ...c, direction: c.direction === "asc" ? "desc" : "asc" } : c
    );
    r(y);
  }, [e, r, d]), F = K((S) => {
    if (d) return;
    const y = e.filter((c) => c.key !== S);
    r(y);
  }, [e, r, d]), v = K(() => {
    d || r([]);
  }, [r, d]), A = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const S = e.map((y, c) => {
      const w = y.direction === "asc" ? "ascending" : "descending";
      return `${c + 1}. ${$(y.key)} (${w})`;
    });
    if (S.length === 1)
      return `Sorted by: ${S[0]}`;
    if (S.length === 2)
      return `Sorted by: ${S.join(" and ")}`;
    {
      const y = S.pop();
      return `Sorted by: ${S.join(", ")}, and ${y}`;
    }
  }, I = me(() => {
    const S = ["sort-description"];
    return l && S.push("sort-help"), u && S.push(u), S.join(" ");
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
        children: A()
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: m,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": h,
          "aria-describedby": I,
          children: e.map((S, y) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (c) => B(c, S.key),
              onDragOver: (c) => x(c, S.key),
              onDrop: (c) => N(c, S.key),
              onDragEnd: D,
              onClick: () => k(S.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${S.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": S.key,
              children: /* @__PURE__ */ n.jsx(
                He,
                {
                  color: M(y),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => F(S.key),
                  disabled: d,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${y + 1}`, children: y + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: $(S.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (c) => {
                          c.stopPropagation(), k(S.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${$(S.key)}. Currently ${S.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${S.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${S.direction}`,
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
            S.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        _e,
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
function Xi(e, t) {
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
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), d = new Array(o).fill([]);
      for (let h = 0; h < Math.min(e.tabLoadingStates.length, o); h++)
        i[h] = e.tabLoadingStates[h], l[h] = e.tabErrors[h], d[h] = e.selectedRows[h];
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
const fn = tt(
  function(t, r) {
    const {
      dataConfig: a = {},
      tabPanels: s,
      selectedIndex: o,
      onTabChange: i,
      onGlobalRowSelectionChange: l,
      ariaLabel: d,
      ariaDescription: h,
      className: u = "",
      disabled: m = !1,
      orientation: g = "horizontal",
      id: _,
      isLoading: B = !1,
      loadingComponent: x,
      error: N = null,
      errorComponent: D,
      "data-testid": $
    } = t, {
      dataComparator: M = (p, j) => JSON.stringify(p) === JSON.stringify(j),
      filterFunction: k = (p) => p,
      booleanRenderer: F = (p) => p ? "✓" : "✗"
    } = a || {}, v = o !== void 0, A = o ?? 0, [I, S] = de({
      focusArea: "tabs",
      focusedTabIndex: A,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), y = me(() => ({
      selectedIndex: A,
      tabLoadingStates: new Array(s.length).fill(!1),
      tabErrors: new Array(s.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(s.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [A]), [c, w] = Lr(Xi, y);
    fe(() => {
      const p = c.tabLoadingStates.length, j = s.length;
      p !== j && w({ type: "ADJUST_ARRAYS", payload: { newLength: j } });
    }, [s.length]), fe(() => {
      v && w({ type: "SET_SELECTED_INDEX", payload: A });
    }, [A, v]), fe(() => {
      S((p) => ({
        ...p,
        focusArea: "tabs",
        focusedTabIndex: c.selectedIndex,
        focusedHeaderIndex: 0,
        focusedRowIndex: 0,
        focusedColumnIndex: 0,
        isGridActive: !1
      }));
    }, [c.selectedIndex]), fe(() => {
      l && l(c.globalSelectedRowData);
    }, [c.globalSelectedRowData, l]);
    const re = K((p, j) => M(p, j), [M]), ee = K((p) => {
      p >= 0 && p < s.length && !s[p].disabled && (w({ type: "SET_SELECTED_INDEX", payload: p }), S((j) => ({
        ...j,
        focusedTabIndex: p,
        focusArea: "tabs"
      })), i?.(p));
    }, [s, i]), z = K((p) => {
      setTimeout(() => {
        const j = Q.current[p], W = j?.parentElement;
        if (j && W) {
          const L = j.offsetLeft, O = j.offsetWidth, U = W.clientWidth, C = L - U / 2 + O / 2;
          try {
            W.scrollTo({
              left: Math.max(0, C),
              behavior: "smooth"
            });
          } catch {
            j.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else
          console.log("Missing elements for scroll:", { tabElement: j, tabListElement: W });
      }, 50);
    }, []), q = K((p, j) => {
      const { key: W } = p;
      switch (W) {
        case "ArrowLeft":
          p.preventDefault();
          const L = j > 0 ? j - 1 : s.length - 1;
          ee(L), z(L), Q.current[L]?.focus();
          break;
        case "ArrowRight":
          p.preventDefault();
          const O = j < s.length - 1 ? j + 1 : 0;
          ee(O), z(O), Q.current[O]?.focus();
          break;
        case "ArrowDown":
          p.preventDefault(), S((C) => ({
            ...C,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        case "Home":
          p.preventDefault(), ee(0), z(0), Q.current[0]?.focus();
          break;
        case "End":
          p.preventDefault();
          const U = s.length - 1;
          ee(U), z(U), Q.current[U]?.focus();
          break;
        case "Enter":
        case " ":
          p.preventDefault(), ee(j);
          break;
      }
    }, [s.length, ee, z]), Q = he([]), se = he([]), te = K((p, j) => {
      const W = c.sortConfig || [], L = W.find((C) => C.key === j);
      let O;
      L ? L.direction === "asc" ? O = W.map(
        (C) => C.key === j ? { ...C, direction: "desc" } : C
      ) : O = W.filter((C) => C.key !== j) : O = [...W, { key: j, direction: "asc" }], w({
        type: "SET_SORT",
        payload: O
      }), s[p].onSort?.(j);
    }, [c.sortConfig, s]), T = K((p) => {
      setTimeout(() => {
        const j = document.querySelector(
          `[data-tab-panel="${c.selectedIndex}"] th:nth-child(${p + 1})`
        );
        j && j.focus();
      }, 0);
    }, [c.selectedIndex]), X = K((p) => F(p), [F]), E = K((p, j) => {
      setTimeout(() => {
        const W = document.querySelector(
          `[data-tab-panel="${c.selectedIndex}"] tbody tr:nth-child(${p + 1}) td:nth-child(${j + 1})`
        );
        W && W.focus();
      }, 0);
    }, [c.selectedIndex]);
    fe(() => {
      I.isGridActive && (I.focusArea === "headers" ? setTimeout(() => {
        T(I.focusedHeaderIndex);
      }, 0) : I.focusArea === "cells" && setTimeout(() => {
        E(I.focusedRowIndex, I.focusedColumnIndex);
      }, 0));
    }, [I.focusArea, I.isGridActive, I.focusedHeaderIndex, I.focusedRowIndex, I.focusedColumnIndex, T, E]), fe(() => {
      z(c.selectedIndex);
    }, [c.selectedIndex, z]);
    const J = K((p, j) => {
      const { key: W } = p, L = s[c.selectedIndex], O = L?.columns.length || 0;
      switch (W) {
        case "ArrowLeft":
          p.preventDefault();
          const U = Math.max(0, j - 1);
          S((b) => ({ ...b, focusedHeaderIndex: U })), T(U);
          break;
        case "ArrowRight":
          p.preventDefault();
          const C = Math.min(O - 1, j + 1);
          S((b) => ({ ...b, focusedHeaderIndex: C })), T(C);
          break;
        case "ArrowUp":
          p.preventDefault(), S((b) => ({
            ...b,
            focusArea: "tabs",
            focusedTabIndex: c.selectedIndex
          })), z(c.selectedIndex), Q.current[c.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          p.preventDefault(), S((b) => ({
            ...b,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: j,
            isGridActive: !0
          }));
          break;
        case "Home":
          p.preventDefault(), S((b) => ({ ...b, focusedHeaderIndex: 0 })), T(0);
          break;
        case "End":
          p.preventDefault();
          const le = O - 1;
          S((b) => ({ ...b, focusedHeaderIndex: le })), T(le);
          break;
        case "Enter":
        case " ":
          p.preventDefault();
          const ne = L?.columns[j]?.key;
          ne && te(c.selectedIndex, ne);
          break;
      }
    }, [s, c.selectedIndex, te, S, T, E, Q]), G = K((p, j, W) => {
      const { key: L } = p, O = s[c.selectedIndex], U = O?.data.length || 0, C = O?.columns.length || 0;
      switch (L) {
        case "ArrowUp":
          if (p.preventDefault(), j === 0)
            S((f) => ({
              ...f,
              focusArea: "headers",
              focusedHeaderIndex: W,
              isGridActive: !1
            })), T(W);
          else {
            const f = j - 1;
            S((R) => ({ ...R, focusedRowIndex: f })), E(f, W);
          }
          break;
        case "ArrowDown":
          p.preventDefault();
          const le = Math.min(U - 1, j + 1);
          S((f) => ({ ...f, focusedRowIndex: le })), E(le, W);
          break;
        case "ArrowLeft":
          p.preventDefault();
          const ne = Math.max(0, W - 1);
          S((f) => ({ ...f, focusedColumnIndex: ne })), E(j, ne);
          break;
        case "ArrowRight":
          p.preventDefault();
          const b = Math.min(C - 1, W + 1);
          S((f) => ({ ...f, focusedColumnIndex: b })), E(j, b);
          break;
        case "Home":
          p.preventDefault(), p.ctrlKey ? (S((f) => ({ ...f, focusedRowIndex: 0, focusedColumnIndex: 0 })), E(0, 0)) : (S((f) => ({ ...f, focusedColumnIndex: 0 })), E(j, 0));
          break;
        case "End":
          if (p.preventDefault(), p.ctrlKey) {
            const f = U - 1, R = C - 1;
            S((H) => ({ ...H, focusedRowIndex: f, focusedColumnIndex: R })), E(f, R);
          } else {
            const f = C - 1;
            S((R) => ({ ...R, focusedColumnIndex: f })), E(j, f);
          }
          break;
        case "Enter":
        case " ":
          if (p.preventDefault(), O && O.data[j]) {
            const f = O.data.some((P) => "ews_data" in P) ? k(O.data, c.filters) : O.data, R = c.sortConfig;
            let H = f;
            if (R && R.length > 0 && (H = [...f].sort((P, Y) => {
              for (const { key: oe, direction: ae } of R) {
                let Z = P[oe], ce = Y[oe];
                const Ce = O.columns.find((ke) => ke.key === oe);
                if (Ce?.render && (Z = Ce.render(P), ce = Ce.render(Y)), Z == null && ce == null) continue;
                if (Z == null) return ae === "asc" ? -1 : 1;
                if (ce == null) return ae === "asc" ? 1 : -1;
                let pe = 0;
                if (typeof Z == "number" && typeof ce == "number" ? pe = Z - ce : pe = String(Z).localeCompare(String(ce), void 0, { numeric: !0, sensitivity: "base" }), pe !== 0)
                  return ae === "asc" ? pe : -pe;
              }
              return 0;
            })), H[j]) {
              const P = H[j], oe = c.globalSelectedRowData && re(c.globalSelectedRowData, P) ? null : P;
              w({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: oe
              });
            }
          }
          break;
      }
    }, [s, c.selectedIndex, c.filters, c.sortConfig, k, re, w, S, T, E]), ie = K((p, j) => k(p, j), [k]);
    return Mr(r, () => ({
      selectTab: (p) => {
        p >= 0 && p < s.length && (w({ type: "SET_SELECTED_INDEX", payload: p }), i?.(p));
      },
      refreshData: (p) => {
        console.log("Refreshing data for tab:", p ?? "all");
      },
      exportData: (p) => {
        const j = p ?? c.selectedIndex, W = s[j];
        return W ? W.data : [];
      },
      getSelectedRows: (p) => c.globalSelectedRowData ? [] : [],
      clearSelection: (p) => {
        w({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (p) => {
        w({ type: "SET_FILTERS", payload: p });
      }
    }), [c.selectedIndex, c.selectedRows, s, i]), B ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`, "data-testid": $, children: x || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : N ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`, "data-testid": $, children: D || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: N })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${g} ${u}`,
        id: _,
        "data-testid": $,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${_}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Ji,
            {
              sortConfig: c.sortConfig || [],
              columns: s.flatMap(
                (p) => p.columns.map((j) => ({ key: j.key, label: j.label }))
              ).filter(
                (p, j, W) => W.findIndex((L) => L.key === p.key) === j
                // Remove duplicates
              ),
              onSortChange: (p) => {
                w({ type: "SET_SORT", payload: p });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": `${h || ""} ${_ ? `${_}-navigation-help` : ""}`.trim(),
              "aria-orientation": g,
              className: "aria-tabs-datagrid__tabs",
              children: s.map((p, j) => {
                const W = j === c.selectedIndex, L = p.disabled || m;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${p.id}`,
                    "aria-controls": `panel-${p.id}`,
                    "aria-selected": W,
                    "aria-disabled": L,
                    tabIndex: W ? 0 : -1,
                    ref: (O) => {
                      Q.current[j] = O;
                    },
                    onClick: () => ee(j),
                    onKeyDown: (O) => q(O, j),
                    disabled: L,
                    className: `
				  aria-tabs-datagrid__tab
				  ${W ? "aria-tabs-datagrid__tab--selected" : ""}
				  ${L ? "aria-tabs-datagrid__tab--disabled" : ""}
				`.trim(),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: p.label }),
                      c.tabLoadingStates[j] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      c.tabErrors[j] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  p.id
                );
              })
            }
          ),
          s.map((p, j) => {
            const W = j === c.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${p.id}`,
                "aria-labelledby": `tab-${p.id}`,
                tabIndex: 0,
                hidden: !W,
                ref: (L) => {
                  se.current[j] = L;
                },
                className: `aria-tabs-datagrid__panel ${p.className || ""}`,
                "data-tab-panel": j,
                children: W && (() => {
                  const L = p.data.some((U) => "ews_data" in U) ? ie(p.data, c.filters) : p.data, O = me(() => {
                    const U = c.sortConfig;
                    return !U || U.length === 0 ? L : [...L].sort((C, le) => {
                      for (const { key: ne, direction: b } of U) {
                        let f = C[ne], R = le[ne];
                        const H = p.columns.find((Y) => Y.key === ne);
                        if (H?.render && (f = H.render(C), R = H.render(le)), f == null && R == null) continue;
                        if (f == null) return 1;
                        if (R == null) return -1;
                        let P = 0;
                        if (typeof f == "number" && typeof R == "number" ? P = f - R : typeof f == "boolean" && typeof R == "boolean" ? P = f === R ? 0 : f ? 1 : -1 : P = String(f).localeCompare(String(R), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), P !== 0)
                          return b === "asc" ? P : -P;
                      }
                      return 0;
                    });
                  }, [L, c.sortConfig, p.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": p.ariaLabel,
                      "aria-describedby": p.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: p.columns.map((U, C) => {
                          const le = c.sortConfig?.find((f) => f.key === U.key), ne = !!le, b = I.focusArea === "headers" && I.focusedHeaderIndex === C;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${b ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: b ? 0 : -1,
                              onClick: () => te(j, U.key),
                              onKeyDown: (f) => J(f, C),
                              "aria-sort": ne ? le?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: U.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${ne ? `sort-indicator--${le?.direction}` : ""}`, children: [
                                  c.sortConfig && c.sortConfig.length > 0 && c.sortConfig.findIndex((f) => f.key === U.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${c.sortConfig.findIndex((f) => f.key === U.key) + 1}`,
                                      "data-priority": c.sortConfig.findIndex((f) => f.key === U.key) + 1,
                                      title: `Sort priority: ${c.sortConfig.findIndex((f) => f.key === U.key) + 1}`,
                                      children: c.sortConfig.findIndex((f) => f.key === U.key) + 1
                                    }
                                  ),
                                  ne && /* @__PURE__ */ n.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${le?.direction}`,
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
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: O.map((U, C) => {
                          const le = c.globalSelectedRowData && re(c.globalSelectedRowData, U), ne = I.focusArea === "cells" && I.focusedRowIndex === C;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${le ? "data-row--selected" : ""} ${ne ? "data-row--focused" : ""}`,
                              "aria-selected": le,
                              children: p.columns.map((b, f) => {
                                const R = b.render ? b.render(U) : U[b.key], H = I.focusArea === "cells" && I.focusedRowIndex === C && I.focusedColumnIndex === f, P = () => typeof R == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  X(R),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: R ? "Yes" : "No" })
                                ] }) : String(R ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${H ? "data-cell--focused" : ""}`,
                                    tabIndex: H ? 0 : -1,
                                    onClick: () => {
                                      const oe = c.globalSelectedRowData && re(c.globalSelectedRowData, U) ? null : U;
                                      w({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: oe
                                      });
                                    },
                                    onKeyDown: (Y) => G(Y, C, f),
                                    children: P()
                                  },
                                  b.key
                                );
                              })
                            },
                            C
                          );
                        }) })
                      ]
                    }
                  );
                })()
              },
              p.id
            );
          })
        ]
      }
    );
  }
), pt = {
  asc: "↑",
  desc: "↓"
}, Qi = (e) => [...e].sort((t, r) => t.priority - r.priority);
function cn(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function el(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function tl(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function nl(e, t) {
  const r = t.find((s) => s.id === e), a = el(t);
  return r ? r.priority < a : !1;
}
const Yh = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: o = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: h
}) => {
  const u = me(() => Qi(e), [e]), m = K(($) => {
    if (l) return;
    const M = e.map(
      (k) => k.id === $ ? { ...k, direction: k.direction === "asc" ? "desc" : "asc" } : k
    );
    t(M);
  }, [e, t, l]), g = K(($) => {
    if (l) return;
    const M = e.findIndex((F) => F.id === $);
    if (M <= 0) return;
    const k = [...e];
    [k[M], k[M - 1]] = [k[M - 1], k[M]], t(cn(k));
  }, [e, t, l]), _ = K(($) => {
    if (l) return;
    const M = e.findIndex((F) => F.id === $);
    if (M >= e.length - 1 || M === -1) return;
    const k = [...e];
    [k[M], k[M + 1]] = [k[M + 1], k[M]], t(cn(k));
  }, [e, t, l]), B = K(($) => {
    if (l) return;
    const M = e.filter((k) => k.id !== $);
    t(cn(M));
  }, [e, t, l]), x = K(() => {
    l || t([]);
  }, [t, l]), N = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const $ = u.map((M, k) => {
      const F = M.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${M.label} (${F})`;
    });
    if ($.length === 1)
      return `Sorted by: ${$[0]}`;
    if ($.length === 2)
      return `Sorted by: ${$.join(" and ")}`;
    {
      const M = $.pop();
      return `Sorted by: ${$.join(", ")}, and ${M}`;
    }
  }, D = me(() => {
    const $ = ["sort-description"];
    return i && $.push("sort-help"), h && $.push(h), $.join(" ");
  }, [i, h]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: N()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: N()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": d,
        "aria-describedby": D,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map(($) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                He,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => B($.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: $.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: $.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => m($.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${$.label}. Currently ${$.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: $.direction === "asc" ? pt.asc : pt.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g($.id),
                          disabled: l || !tl($.id, e),
                          "aria-label": `Move ${$.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => _($.id),
                          disabled: l || !nl($.id, e),
                          "aria-label": `Move ${$.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            $.id
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      _e,
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
      pt.asc,
      "/",
      pt.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Jn = (e, t) => t.map((r) => ({
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
})), mn = [
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
], rl = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), al = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, sl = (e) => {
  if (typeof e == "boolean") {
    const r = mn.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = mn.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, ol = (e) => `${e.name}-${e.bed_name}`, il = () => ({
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
}), qh = (e) => {
  const t = il();
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
}, ll = {
  dataComparator: rl,
  filterFunction: al,
  booleanRenderer: sl,
  getDataId: ol
};
function jr(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badges: o = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: h = {},
    classPrefix: u = "adaptive-card"
  } = r, m = t.find((M) => M.key === a), g = m?.render ? m.render(e) : e[a || "name"] || "Untitled", _ = () => s.filter((k) => !i.includes(k) && e[k]).slice(0, 3).map((k) => {
    const F = t.find((S) => S.key === k), v = e[k], A = h[k] ? h[k](v, e) : F?.render ? F.render(e) : v;
    return `${F?.label || k}: ${A}`;
  }).join(" • "), B = () => o.length === 0 ? null : o.filter((M) => e[M.fieldKey] !== void 0).map((M) => {
    const k = e[M.fieldKey], F = M.render ? M.render(k, e) : k;
    return `<span class="nhsuk-tag ${cl(M, k)}">${F}</span>`;
  }).join(""), x = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", N = B(), D = _(), $ = N ? `${D}${N ? `<div class="adaptive-card__badges">${N}</div>` : ""}` : D;
  return {
    variant: x(),
    heading: String(g),
    descriptionHtml: $,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${g}`
  };
}
function cl(e, t) {
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
const dl = {
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
}, sa = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: s = "medium",
  status: o = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, h = e.bed_name, u = e.ews_score, m = e.speciality, g = e.consultant;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${s} healthcare-card--${o}`,
      onClick: () => r?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${d}, Bed ${h}`,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__patient-name", children: i }),
            /* @__PURE__ */ n.jsxs("p", { className: "healthcare-card__age-info", children: [
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__label", children: "Age:" }),
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__value", children: l })
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: u !== void 0 && /* @__PURE__ */ n.jsxs(
            He,
            {
              color: hl(ca(u)),
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
            /* @__PURE__ */ n.jsx("dd", { children: h })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Specialty" }),
            /* @__PURE__ */ n.jsx("dd", { children: m })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ n.jsx("dd", { children: g })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            _e,
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
            _e,
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
            _e,
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
}, oa = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        He,
        {
          color: fl(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        He,
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
      _e,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      _e,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), ia = ({
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
        He,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        He,
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
      _e,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      _e,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), la = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const s = e.name, o = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, d = e.ews_data?.temperature, h = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, m = e.ews_data?.avpu;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--vitals healthcare-card--${a}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Vital signs for ${s}, EWS Score ${o}`,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vitals-summary", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__patient-name", children: s }),
            o !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${ul(o)}`, children: [
              "EWS: ",
              o
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: m && /* @__PURE__ */ n.jsxs(
            He,
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
          d !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Temperature" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              d,
              "°C"
            ] })
          ] }),
          h !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-value", children: h })
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
            _e,
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
            _e,
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
function ca(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function ul(e) {
  return ca(e);
}
function hl(e) {
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
function fl(e) {
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
const ml = [
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
], da = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", pl = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, gl = (e) => da(e) === "high" || e.status === "urgent" ? "primary" : "default", bl = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, xl = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: ml,
  hiddenFields: [],
  getPriority: da,
  getStatus: pl,
  getVariant: gl,
  fieldRenderers: bl,
  classPrefix: "adaptive-card--healthcare"
}, yl = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", s = r.getStatus?.(e) || "active", o = s === "urgent" ? "active" : s;
    return /* @__PURE__ */ n.jsx(
      sa,
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
  appointment: (e, t, r) => {
    const a = r.getStatus?.(e) || "pending", s = a === "urgent" ? "pending" : a;
    return /* @__PURE__ */ n.jsx(
      oa,
      {
        data: e,
        columns: t,
        status: s,
        onSelect: (o) => console.log("Appointment selected:", o),
        onAction: (o, i) => console.log("Appointment action:", o, i)
      }
    );
  },
  medication: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium";
    return /* @__PURE__ */ n.jsx(
      ia,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Medication selected:", s),
        onAction: (s, o) => console.log("Medication action:", s, o)
      }
    );
  },
  vitals: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium";
    return /* @__PURE__ */ n.jsx(
      la,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Vitals selected:", s),
        onAction: (s, o) => console.log("Vitals action:", s, o)
      }
    );
  }
}, _l = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Nr = {
  name: "healthcare",
  defaultCardConfig: xl,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: yl,
  fieldTypes: _l
};
function Tr(e) {
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
function Dr(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function kl(e, t) {
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
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), d = new Array(o).fill([]);
      for (let h = 0; h < Math.min(e.tabLoadingStates.length, o); h++)
        i[h] = e.tabLoadingStates[h], l[h] = e.tabErrors[h], d[h] = e.selectedRows[h];
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
function vl(e, t) {
  const [r, a] = de("cards");
  return fe(() => {
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
function wl(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Sl(e, t, r, a) {
  const s = a ? { ...a.defaultCardConfig, ...r } : { ...dl, ...r };
  if (a && a.cardTemplates) {
    const o = wl(e);
    if (o && a.cardTemplates[o]) {
      const i = a.cardTemplates[o](e, t, s);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return s.cardTemplate && s.cardTemplate(e, t, s), jr(e, t, s);
}
const Kh = ({
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
  ariaLabel: d = "Data grid",
  ariaDescription: h,
  orientation: u = "horizontal",
  id: m,
  disabled: g = !1,
  className: _,
  ...B
}) => {
  const x = vl(e, t), N = i !== void 0, D = i ?? 0, $ = me(() => {
    if (s.some(
      (f) => f.data && f.data.length > 0 && Dr(f.data)
    )) {
      const f = Tr(r);
      return {
        ...Nr.defaultCardConfig,
        ...f
      };
    } else
      return Tr(r);
  }, [r, s]), M = me(() => s.some(
    (f) => f.data && f.data.length > 0 && Dr(f.data)
  ) ? Nr : void 0, [s]), k = me(() => ({
    selectedIndex: D,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [D, s.length]), [F, v] = Lr(kl, k), A = he([]), I = he([]), S = he([]), y = he(null), [c, w] = de({
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
  }), re = K((b) => {
    if (!b.current)
      return { columns: 1, rows: 0 };
    const f = b.current, R = f.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (R.length === 0)
      return { columns: 1, rows: 0 };
    const H = f.offsetWidth, Y = R[0].offsetWidth, oe = Math.floor(H / Y) || 1, ae = Math.ceil(R.length / oe);
    return { columns: oe, rows: ae };
  }, []), ee = K((b, f) => ({
    row: Math.floor(b / f),
    col: b % f
  }), []), z = K((b, f, R) => b * R + f, []), q = K((b, f, R, H) => {
    const { row: P, col: Y } = ee(b, H);
    let oe = P, ae = Y;
    switch (f) {
      case "up":
        oe = Math.max(0, P - 1);
        break;
      case "down":
        oe = Math.min(Math.floor((R - 1) / H), P + 1);
        break;
      case "left":
        ae = Math.max(0, Y - 1);
        break;
      case "right":
        ae = Math.min(H - 1, Y + 1);
        break;
    }
    const Z = z(oe, ae, H);
    return Math.min(Z, R - 1);
  }, [ee, z]);
  fe(() => {
    c.isCardNavigationActive && c.focusedCardElementIndex >= 0 && c.cardElements.length > 0 && setTimeout(() => {
      const b = c.cardElements[c.focusedCardElementIndex];
      b && (b.element.focus(), b.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [c.isCardNavigationActive, c.focusedCardElementIndex, c.cardElements.length]), fe(() => {
    const b = () => {
      if (x === "cards" && y.current) {
        const { columns: H, rows: P } = re(y);
        w((Y) => ({
          ...Y,
          gridColumns: H,
          gridRows: P
        }));
      }
    }, f = setTimeout(b, 200), R = () => {
      setTimeout(b, 100);
    };
    return window.addEventListener("resize", R), () => {
      clearTimeout(f), window.removeEventListener("resize", R);
    };
  }, [x, s, re]), fe(() => {
    const b = F.tabLoadingStates.length, f = s.length;
    b !== f && v({ type: "ADJUST_ARRAYS", payload: { newLength: f } });
  }, [s.length, F.tabLoadingStates.length]), fe(() => {
    N && i !== F.selectedIndex && v({ type: "SET_SELECTED_INDEX", payload: i });
  }, [N, i, F.selectedIndex]);
  const Q = K((b) => {
    b >= 0 && b < s.length && !s[b].disabled && (v({ type: "SET_SELECTED_INDEX", payload: b }), l?.(b));
  }, [s, l]), se = K((b) => {
    console.log("Card selected:", b), v({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: b
    });
  }, []), te = K((b) => {
    const f = I.current[b];
    f && (f.focus(), f.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), T = K((b) => {
    const f = I.current[b];
    if (!f) return [];
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
    ].join(", "), H = f.querySelectorAll(R);
    return Array.from(H).map((P, Y) => ({
      id: P.id || `card-${b}-element-${Y}`,
      element: P,
      label: P.getAttribute("aria-label") || P.textContent?.trim() || P.getAttribute("title") || `Element ${Y + 1}`,
      type: P.tagName.toLowerCase() === "button" ? "button" : P.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(P.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), X = he(null), E = K((b) => {
    const f = X.current;
    if (!f) return;
    const R = document.createElement("div");
    R.setAttribute("aria-live", "polite"), R.setAttribute("aria-atomic", "true"), R.className = "sr-only", R.textContent = b, f.appendChild(R), setTimeout(() => {
      f.contains(R) && f.removeChild(R);
    }, 1e3);
  }, []), J = K((b) => {
    const f = b.filter((H) => H.sortable !== !1), R = [
      { value: "", label: "Sort by..." }
    ];
    return f.forEach((H) => {
      const P = H.label || H.key;
      H.key === "name" ? R.push(
        { value: `${H.key}-asc`, label: `${P} (A-Z)` },
        { value: `${H.key}-desc`, label: `${P} (Z-A)` }
      ) : H.key === "ews_score" || H.key.includes("score") ? R.push(
        { value: `${H.key}-desc`, label: `${P} (High-Low)` },
        { value: `${H.key}-asc`, label: `${P} (Low-High)` }
      ) : H.key === "age" || H.key.includes("date") || H.key.includes("time") ? R.push(
        { value: `${H.key}-desc`, label: `${P} (Newest-Oldest)` },
        { value: `${H.key}-asc`, label: `${P} (Oldest-Newest)` }
      ) : R.push(
        { value: `${H.key}-asc`, label: `${P} (A-Z)` },
        { value: `${H.key}-desc`, label: `${P} (Z-A)` }
      );
    }), R;
  }, []), G = K((b, f) => f ? [...b].sort((R, H) => {
    const P = R[f.key], Y = H[f.key];
    if (P == null && Y == null) return 0;
    if (P == null) return 1;
    if (Y == null) return -1;
    const oe = Number(P), ae = Number(Y);
    if (!isNaN(oe) && !isNaN(ae))
      return f.direction === "asc" ? oe - ae : ae - oe;
    const Z = String(P).toLowerCase(), ce = String(Y).toLowerCase(), Ce = Z.localeCompare(ce);
    return f.direction === "asc" ? Ce : -Ce;
  }) : b, []), ie = K((b) => {
    if (!b) {
      w((Z) => ({ ...Z, cardSortConfig: null })), E("Card sorting cleared");
      return;
    }
    const [f, R] = b.split("-"), H = { key: f, direction: R };
    w((Z) => ({ ...Z, cardSortConfig: H }));
    const oe = s[F.selectedIndex]?.columns.find((Z) => Z.key === f)?.label || f;
    E(`Cards sorted by ${oe} in ${R === "asc" ? "ascending" : "descending"} order`);
  }, [s, F.selectedIndex, E]), p = K((b) => {
    const H = s[F.selectedIndex]?.columns.find((Y) => Y.key === b.key)?.label || b.key, P = b.direction === "asc" ? "ascending" : "descending";
    return `${H} (${P})`;
  }, [s, F.selectedIndex]), j = K((b, f) => {
    const R = T(b), H = R[f];
    if (H) {
      H.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const P = `Focused on ${H.label}, ${H.type} ${f + 1} of ${R.length} within card`;
      E(P);
    }
  }, [T, E]), W = K((b) => {
    A.current[b]?.focus();
  }, []), L = K(() => {
    const b = S.current[0];
    if (!b) return [];
    const f = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), R = b.querySelectorAll(f);
    return Array.from(R);
  }, []), O = K((b) => {
    if (b === 0) {
      const f = S.current[0];
      if (f) {
        f.focus();
        const H = `Sort controls region with ${L().length} interactive elements. Press Enter or Space to navigate between controls.`;
        E(H);
      }
    } else {
      const f = L(), R = b - 1, H = f[R];
      if (H) {
        H.focus();
        const P = H.tagName.toLowerCase() === "select", Y = H.tagName.toLowerCase() === "button", oe = P ? "dropdown" : Y ? "button" : "control", ae = P ? ". Use Space key to open dropdown" : "", Z = `${oe} ${R + 1} of ${f.length}${ae}`;
        E(Z);
      }
    }
  }, [L, E]), U = K((b, f) => {
    const { key: R } = b, H = s[F.selectedIndex], P = H?.data.length || 0;
    if (R === "ArrowLeft" && b.shiftKey) {
      b.preventDefault(), b.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (R === "ArrowRight" && b.shiftKey) {
      b.preventDefault(), b.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!c.isCardNavigationActive) {
      switch (R) {
        case "ArrowUp":
          if (b.preventDefault(), f === 0)
            w((Z) => ({ ...Z, focusArea: "tabs" })), W(F.selectedIndex);
          else {
            const Z = q(f, "up", P, c.gridColumns);
            Z !== f && (w((ce) => ({ ...ce, focusedCardIndex: Z })), te(Z), E(`Moved to card ${Z + 1} of ${P}`));
          }
          break;
        case "ArrowDown":
          b.preventDefault();
          const Y = q(f, "down", P, c.gridColumns);
          Y !== f && (w((Z) => ({ ...Z, focusedCardIndex: Y })), te(Y), E(`Moved to card ${Y + 1} of ${P}`));
          break;
        case "ArrowLeft":
          b.preventDefault();
          const oe = q(f, "left", P, c.gridColumns);
          oe !== f ? (w((Z) => ({ ...Z, focusedCardIndex: oe })), te(oe), E(`Moved to card ${oe + 1} of ${P}`)) : F.selectedIndex > 0 && (v({ type: "SET_SELECTED_INDEX", payload: F.selectedIndex - 1 }), w((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => W(F.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          b.preventDefault();
          const ae = q(f, "right", P, c.gridColumns);
          ae !== f ? (w((Z) => ({ ...Z, focusedCardIndex: ae })), te(ae), E(`Moved to card ${ae + 1} of ${P}`)) : F.selectedIndex < s.length - 1 && (v({ type: "SET_SELECTED_INDEX", payload: F.selectedIndex + 1 }), w((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => W(F.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (H?.data[f]) {
            b.preventDefault(), w((ce) => ({
              ...ce,
              selectedCardIndex: f
            }));
            const Z = T(f);
            Z.length > 0 ? (w((ce) => ({
              ...ce,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: Z,
              selectedCardIndex: f
              // Ensure selection is maintained
            })), E(`Card ${f + 1} selected and navigation activated. ${Z.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : E(`Card ${f + 1} selected.`);
          }
          break;
        case " ":
          if (H?.data[f]) {
            b.preventDefault(), w((ce) => ({
              ...ce,
              selectedCardIndex: ce.selectedCardIndex === f ? -1 : f
            }));
            const Z = c.selectedCardIndex === f;
            E(`Card ${f + 1} ${Z ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (R) {
      case "ArrowUp":
      case "ArrowLeft":
        b.preventDefault();
        const Y = Math.max(0, c.focusedCardElementIndex - 1);
        w((ce) => ({ ...ce, focusedCardElementIndex: Y })), j(f, Y);
        break;
      case "ArrowDown":
      case "ArrowRight":
        b.preventDefault();
        const oe = Math.min(c.cardElements.length - 1, c.focusedCardElementIndex + 1);
        w((ce) => ({ ...ce, focusedCardElementIndex: oe })), j(f, oe);
        break;
      case "Enter":
        b.preventDefault();
        const ae = c.cardElements[c.focusedCardElementIndex];
        ae && (ae.element.click(), E(`Activated ${ae.label}`));
        break;
      case " ":
        b.preventDefault();
        const Z = c.cardElements[c.focusedCardElementIndex];
        if (Z) {
          const ce = new MouseEvent("dblclick", { bubbles: !0 });
          Z.element.dispatchEvent(ce), E(`Double-clicked ${Z.label}`);
        }
        break;
      case "Escape":
        b.preventDefault(), w((ce) => ({
          ...ce,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => te(f), 0), E("Exited card navigation, returned to card level");
        break;
      case "Home":
        b.preventDefault(), c.cardElements.length > 0 && (w((ce) => ({ ...ce, focusedCardElementIndex: 0 })), j(f, 0));
        break;
      case "End":
        if (b.preventDefault(), c.cardElements.length > 0) {
          const ce = c.cardElements.length - 1;
          w((Ce) => ({ ...Ce, focusedCardElementIndex: ce })), j(f, ce);
        }
        break;
    }
  }, [c, F.selectedIndex, s, se, te, W, w, T, j, E]), C = K((b) => {
    const f = A.current[b], R = f?.parentElement;
    if (!f || !R) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const H = f.getBoundingClientRect(), P = R.getBoundingClientRect();
    H.left >= P.left && H.right <= P.right || (console.log("Tab not visible, scrolling into view (mobile)"), f.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), le = K((b, f) => {
    if (x !== "cards")
      return;
    const { key: R } = b;
    switch (R) {
      case "ArrowLeft":
        b.preventDefault();
        const H = f > 0 ? f - 1 : s.length - 1;
        Q(H), w((ae) => ({ ...ae, focusedTabIndex: H })), A.current[H]?.focus(), C(H);
        break;
      case "ArrowRight":
        b.preventDefault();
        const P = f < s.length - 1 ? f + 1 : 0;
        Q(P), w((ae) => ({ ...ae, focusedTabIndex: P })), A.current[P]?.focus(), C(P);
        break;
      case "ArrowDown":
        b.preventDefault();
        const Y = s[F.selectedIndex];
        Y && Y.columns && Y.columns.length > 0 ? (w((ae) => ({
          ...ae,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), O(0)) : (w((ae) => ({
          ...ae,
          focusArea: "cards",
          focusedCardIndex: 0
        })), te(0));
        break;
      case "Home":
        b.preventDefault(), Q(0), w((ae) => ({ ...ae, focusedTabIndex: 0 })), A.current[0]?.focus(), C(0);
        break;
      case "End":
        b.preventDefault();
        const oe = s.length - 1;
        Q(oe), w((ae) => ({ ...ae, focusedTabIndex: oe })), A.current[oe]?.focus(), C(oe);
        break;
      case "Enter":
      case " ":
        b.preventDefault(), Q(f);
        break;
    }
  }, [s.length, Q, x, te, w, C]), ne = K((b, f) => {
    if (x !== "cards")
      return;
    const { key: R } = b, H = s[F.selectedIndex];
    if (f === 0 && !c.isSortControlsActive) {
      switch (R) {
        case "ArrowUp":
          b.preventDefault(), w((Y) => ({
            ...Y,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), W(F.selectedIndex);
          break;
        case "ArrowDown":
          b.preventDefault(), H?.data && H.data.length > 0 && (w((Y) => ({
            ...Y,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), te(0));
          break;
        case "Enter":
        case " ":
          b.preventDefault();
          const P = L();
          if (P.length > 0) {
            w((oe) => ({
              ...oe,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), O(1);
            const Y = `Entered sort controls navigation mode. ${P.length} controls available. Use arrow keys to navigate between controls.`;
            E(Y);
          }
          break;
        case "Escape":
          b.preventDefault(), w((Y) => ({
            ...Y,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), W(F.selectedIndex);
          break;
      }
      return;
    }
    if (c.isSortControlsActive) {
      const Y = L().length;
      switch (R) {
        case "ArrowLeft":
          b.preventDefault();
          const oe = c.focusedSortControlIndex > 1 ? c.focusedSortControlIndex - 1 : Y;
          w((Z) => ({ ...Z, focusedSortControlIndex: oe })), O(oe);
          break;
        case "ArrowRight":
          b.preventDefault();
          const ae = c.focusedSortControlIndex < Y ? c.focusedSortControlIndex + 1 : 1;
          w((Z) => ({ ...Z, focusedSortControlIndex: ae })), O(ae);
          break;
        case "ArrowDown":
          if (b.preventDefault(), c.isSortControlsActive) {
            const Z = c.focusedSortControlIndex < Y ? c.focusedSortControlIndex + 1 : 1;
            w((ce) => ({ ...ce, focusedSortControlIndex: Z })), O(Z);
          } else
            H?.data && H.data.length > 0 && (w((Z) => ({
              ...Z,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), te(0));
          break;
        case "ArrowUp":
          b.preventDefault(), w((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), O(0);
          break;
        case "Escape":
          b.preventDefault(), w((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), W(F.selectedIndex);
          break;
      }
    }
  }, [x, s, F.selectedIndex, c.isSortControlsActive, c.focusedSortControlIndex, O, W, te, w, E]);
  if (x === "cards") {
    const b = s[F.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${_ || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": d,
          "aria-describedby": `${h || ""} ${m ? `${m}-navigation-help` : ""}`.trim(),
          "aria-orientation": u,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((f, R) => {
            const H = R === F.selectedIndex, P = f.disabled || g;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${f.id}`,
                "aria-controls": `panel-${f.id}`,
                "aria-selected": H,
                "aria-disabled": P,
                tabIndex: H ? 0 : -1,
                ref: (Y) => {
                  A.current[R] = Y;
                },
                onClick: () => Q(R),
                onKeyDown: (Y) => le(Y, R),
                disabled: P,
                className: `
				  aria-tabs-datagrid__tab
				  ${H ? "aria-tabs-datagrid__tab--selected" : ""}
				  ${P ? "aria-tabs-datagrid__tab--disabled" : ""}
				`.trim(),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: f.label }),
                  F.tabLoadingStates[R] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  F.tabErrors[R] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              f.id
            );
          })
        }
      ),
      b && b.columns && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: "aria-tabs-datagrid-adaptive__sort-controls",
          role: "region",
          "aria-label": "Sort controls",
          tabIndex: c.focusArea === "sort-controls" ? 0 : -1,
          ref: (f) => {
            S.current[0] = f;
          },
          onKeyDown: (f) => ne(f, 0),
          children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
              /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${b.id}`, className: "sort-label", children: "Sort cards by" }),
              /* @__PURE__ */ n.jsx(
                Ar,
                {
                  id: `card-sort-${b.id}`,
                  name: `card-sort-${b.id}`,
                  value: c.cardSortConfig ? `${c.cardSortConfig.key}-${c.cardSortConfig.direction}` : "",
                  onChange: (f) => ie(f.target.value),
                  className: "sort-select",
                  children: J(b.columns).map((f) => /* @__PURE__ */ n.jsx("option", { value: f.value, children: f.label }, f.value))
                }
              )
            ] }),
            c.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
              /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                "Sorted by ",
                p(c.cardSortConfig)
              ] }),
              /* @__PURE__ */ n.jsx(
                _e,
                {
                  variant: "secondary",
                  size: "small",
                  onClick: () => ie(""),
                  "aria-label": "Clear card sorting",
                  className: "sort-clear-button",
                  children: "Clear"
                }
              )
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: y,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${b?.label || "Data"} cards in ${c.gridRows} rows and ${c.gridColumns} columns`,
          "aria-rowcount": c.gridRows,
          "aria-colcount": c.gridColumns,
          id: `panel-${b?.id}`,
          "aria-labelledby": `tab-${b?.id}`,
          children: G(b?.data || [], c.cardSortConfig).map((f, R) => {
            const H = c.selectedCardIndex === R, P = c.focusedCardIndex === R && c.focusArea === "cards", Y = c.focusedCardIndex === R && c.focusArea === "card" && c.isCardNavigationActive, oe = R === 0 && c.focusArea !== "cards", ae = P || oe, Z = ee(R, c.gridColumns);
            if (r.cardTemplate) {
              const pe = r.cardTemplate(f, b.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: (ke) => {
                    I.current[R] = ke;
                  },
                  className: `
					aria-tabs-datagrid-adaptive__card-wrapper
					${H ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : ""}
					${P ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : ""}
					${Y ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""}
				  `.trim(),
                  role: "gridcell",
                  "aria-rowindex": Z.row + 1,
                  "aria-colindex": Z.col + 1,
                  "aria-selected": H,
                  "aria-expanded": Y,
                  "aria-description": Y ? `Card navigation active. ${c.cardElements.length} interactive elements available.` : void 0,
                  tabIndex: ae ? 0 : -1,
                  onClick: () => {
                    w((ke) => ({
                      ...ke,
                      selectedCardIndex: ke.selectedCardIndex === R ? -1 : R
                    })), se(f);
                  },
                  onKeyDown: (ke) => U(ke, R),
                  onFocus: () => {
                    w((ke) => ke.focusedCardIndex !== R || ke.focusArea !== "cards" ? {
                      ...ke,
                      focusedCardIndex: R,
                      focusArea: "cards"
                    } : ke);
                  },
                  children: pe
                },
                `card-${R}`
              );
            }
            const ce = Sl(f, b.columns, $, M), Ce = `
			  ${ce.className || ""}
			  ${H ? "aria-tabs-datagrid-adaptive__card--selected" : ""}
			  ${P ? "aria-tabs-datagrid-adaptive__card--focused" : ""}
			  ${Y ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""}
			`.trim();
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                className: `
				  aria-tabs-datagrid-adaptive__card-wrapper
				  ${Y ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""}
				`.trim(),
                role: "gridcell",
                "aria-rowindex": Z.row + 1,
                "aria-colindex": Z.col + 1,
                children: /* @__PURE__ */ n.jsx(
                  aa,
                  {
                    ...ce,
                    ref: (pe) => {
                      I.current[R] = pe;
                    },
                    className: Ce,
                    "aria-selected": H,
                    "aria-expanded": Y,
                    "aria-label": `${ce["aria-label"] || ce.heading}. ${Y ? `Card navigation active with ${c.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                    tabIndex: ae ? 0 : -1,
                    onClick: () => {
                      w((pe) => ({
                        ...pe,
                        selectedCardIndex: pe.selectedCardIndex === R ? -1 : R
                      })), se(f);
                    },
                    onKeyDown: (pe) => U(pe, R),
                    onFocus: () => {
                      c.isCardNavigationActive || w((pe) => pe.focusedCardIndex !== R || pe.focusArea !== "cards" ? {
                        ...pe,
                        focusedCardIndex: R,
                        focusArea: "cards",
                        // Reset card navigation state when switching cards
                        focusedCardElementIndex: 0,
                        cardElements: []
                      } : pe);
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
          ref: X,
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
  return x === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${_ || ""}`, children: /* @__PURE__ */ n.jsx(
    fn,
    {
      tabPanels: s,
      dataConfig: o,
      ariaLabel: d,
      ariaDescription: h,
      orientation: u,
      id: m,
      disabled: g,
      selectedIndex: i,
      onTabChange: l,
      className: "aria-tabs-datagrid-adaptive__table--hybrid",
      ...B
    }
  ) }) : /* @__PURE__ */ n.jsx(
    fn,
    {
      tabPanels: s,
      dataConfig: o,
      ariaLabel: d,
      ariaDescription: h,
      orientation: u,
      id: m,
      disabled: g,
      selectedIndex: i,
      onTabChange: l,
      ...B
    }
  );
}, ua = (e) => {
  const t = mn.find((r) => r.value === e);
  return t ? t.icon : null;
}, Cl = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = r.discountedPrice || r.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => ua(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, jl = (e) => Jn(e, [
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
]), Nl = {
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
  booleanRenderer: (e) => ua(e),
  getDataId: (e) => `financial-${e.id}`
}, Tl = (e) => Jn(e, [
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
]), Dl = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Cl,
    createTabs: jl
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Nl,
    createTabs: Tl
  }
}, Fr = (e, t) => {
  const r = Dl[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, ha = [
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
], Fl = [
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
], Bl = [
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
], Il = [
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
], Br = [
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
], Ir = [
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
], Rr = [
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
], Rl = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, $l = () => [
  {
    id: "patients",
    label: "Patients",
    data: ha,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      sa,
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
    data: Fl,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      oa,
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
    data: Bl,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ia,
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
    data: Il,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      la,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Ml = () => {
  const [e, t] = de("healthcare"), r = me(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: ll,
      tabPanels: $l(),
      data: ha
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Fr("ecommerce", Br),
      data: Br
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Fr("financial", Ir),
      data: Ir
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Rl,
      tabPanels: Jn(Rr, [
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
      data: Rr
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
        _e,
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
      fn,
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
}, Zh = Ml, fa = (e) => /* @__PURE__ */ n.jsx(Hr, { ...e }), Jh = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: s,
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  service: d,
  navigation: h,
  search: u,
  account: m,
  organisation: g,
  logo: _,
  className: B,
  ...x
}) => {
  const N = {
    service: d,
    navigation: h,
    search: u,
    account: m,
    organisation: g,
    logo: _,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(ra, { ...o }),
    /* @__PURE__ */ n.jsx(Ur, { ...N }),
    /* @__PURE__ */ n.jsx(fa, { className: B, ...x, children: /* @__PURE__ */ n.jsx(Pr, { size: s, children: /* @__PURE__ */ n.jsx(bt, { children: /* @__PURE__ */ n.jsxs(zn, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Pe, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Gr, { ...l })
  ] });
}, Xh = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: s = "small",
  // Default to small size for transactional forms
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  backLinkProps: d,
  serviceName: h,
  serviceHref: u,
  logo: m,
  className: g,
  ..._
}) => {
  const B = {
    service: {
      text: h,
      href: u
    },
    logo: m,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(ra, { ...o }),
    /* @__PURE__ */ n.jsx(Ur, { ...B }),
    /* @__PURE__ */ n.jsxs(fa, { className: g, ..._, children: [
      d && /* @__PURE__ */ n.jsx(gs, { ...d }),
      /* @__PURE__ */ n.jsx(Pr, { size: s, children: /* @__PURE__ */ n.jsx(bt, { children: /* @__PURE__ */ n.jsxs(zn, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Pe, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Gr, { ...l })
  ] });
}, Ll = "150ms", El = "300ms", Al = "500ms", Hl = "cubic-bezier(0.4, 0, 1, 1)", Pl = "cubic-bezier(0, 0, 0.2, 1)", zl = "cubic-bezier(0.4, 0, 0.2, 1)", Wl = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Ol = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Ul = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Gl = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Vl = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Yl = "1px", ql = "2px", Kl = "4px", Zl = "4px", Jl = "4px", Xl = "2px", Ql = "1px", ec = "0px", tc = "4px", nc = "8px", rc = "12px", ma = "#d8dde0", pa = "#4c6272", ga = "#d8dde0", ba = "#aeb7bd", xa = "#d5281b", ya = "#005eb8", _a = "#ffffff", ka = "#212b32", va = "#007f3b", wa = "#330072", Sa = "#7c2855", Ca = "#d5281b", ja = "#ffeb3b", Na = "#fff9c4", Ta = "#ffb81c", Da = "#ed8b00", Fa = "#00a499", Ba = "#ae2573", Ia = "#4c6272", Ra = "#768692", $a = "#aeb7bd", Ma = "#d8dde0", La = "#f0f4f5", ac = "#212b32", sc = "#4c6272", oc = "#ffffff", ic = "#212b32", lc = "#005eb8", cc = "#7c2855", dc = "#003087", uc = "#330072", hc = "#ffeb3b", fc = "#212b32", mc = "#d8dde0", pc = "#ffffff33", gc = "#d5281b", bc = "#4c6272", xc = "#ffffff", yc = "#007f3b", _c = "#ffffff", kc = "#006530", vc = "#004021", wc = "#004021", Sc = "#00000000", Cc = "#ffffff", jc = "#005eb8", Nc = "#005eb8", Tc = "#d9e5f2", Dc = "#c7daf0", Fc = "#005eb8", Bc = "#ffffff", Ic = "#212b32", Rc = "#d9dde0", $c = "#b3bcc2", Mc = "#b3bcc2", Lc = "#d5281b", Ec = "#aa2016", Ac = "#6a140e", Hc = "#6a140e", Pc = "#005eb8", zc = "#004b93", Wc = "#002f5c", Oc = "#002f5c", Uc = "8px", Gc = "16px", Vc = "12px", Yc = "16px", qc = "4px", Kc = "40px", Zc = "4px", Jc = "40px", Xc = "12px", Qc = "16px", ed = "32px", td = "16px", nd = "20px", rd = "28px", ad = "9px", sd = "2px", od = "16px", id = "24px", ld = "8px", cd = "24px", dd = "16px", ud = "4px", hd = "4px", fd = "4px", md = "8px", pd = "4px", gd = "16px", bd = "#007f3b", xd = "#006530", yd = "#004021", _d = "#d8dde0", kd = "#ffffff", vd = "#768692", wd = "#00000000", Sd = "#ffeb3b", Cd = "#00000000", jd = "#ffffff", Nd = "#d9e5f2", Td = "#c7daf0", Dd = "#005eb8", Fd = "#005eb8", Ea = "8px", Aa = "16px", Ha = "12px", Pa = "16px", Bd = "2px", Id = "4px", Rd = "4px", $d = "600", Md = "#ffffff", Ld = "#d8dde0", Ed = "#aeb7bd", Ad = "#f0f4f5", Hd = "#212b32", Pd = "#212b32", zd = "#005eb8", za = "16px", Wa = "32px", Oa = "16px", Wd = "1px", Od = "4px", Ud = "none", Gd = "0 2px 4px rgba(0, 0, 0, 0.1)", Vd = "#ffffff", Yd = "#ffffff", qd = "#d8dde0", Kd = "#ffffff", Zd = "#4c6272", Jd = "#ffeb3b", Xd = "#d5281b", Qd = "#aeb7bd", eu = "#212b32", tu = "#4c6272", nu = "#768692", ru = "#212b32", au = "#ffffff", su = "600", ou = "#d5281b", iu = "600", lu = "#4c6272", Ua = "4px", Ga = "40px", Va = "40px", Ya = "12px", cu = "2px", du = "4px", uu = "0px", hu = "16px", fu = "18px", mu = "24px", pu = "32px", gu = "34px", bu = "32px", xu = "40px", yu = "48px", _u = "5.4ex", ku = "7.2ex", vu = "9ex", wu = "10.8ex", Su = "20ex", Cu = "38ex", ju = "56ex", Nu = "44px", Tu = "40px", Du = "1020px", Fu = "100%", Bu = "50%", Iu = "33.333%", Ru = "25%", $u = "20%", Mu = "320px", Lu = "641px", Eu = "1025px", Au = "1280px", Hu = "960px", Pu = "32px", zu = "16px", Wu = "#d5281b", Ou = "#d5281b", Uu = "#ffffff", Gu = "#007f3b", Vu = "#007f3b", Yu = "#ffffff", qu = "#ffeb3b", Ku = "#ffeb3b", Zu = "#212b32", Ju = "#005eb8", Xu = "#005eb8", Qu = "#ffffff", eh = "#d8dde0", th = "#aeb7bd", nh = "#768692", rh = "0 4px 0 #004021", ah = "0 4px 0 #005eb8", sh = "0 4px 0 #6a140e", oh = "0 4px 0 #ffeb3b", ih = "none", lh = "0 2px 4px rgba(0, 0, 0, 0.1)", ch = "4px", dh = "0px", uh = "solid", hh = "0 0 0 3px #ffeb3b", fh = "0 0 0 3px #ffeb3b", mh = "none", ph = "0 1px 3px rgba(0, 0, 0, 0.12)", gh = "0 2px 6px rgba(0, 0, 0, 0.16)", bh = "0 4px 12px rgba(0, 0, 0, 0.20)", qa = "0", Ka = "4px", Za = "8px", Ja = "16px", Xa = "24px", Qa = "32px", es = "40px", ts = "48px", ns = "56px", rs = "64px", pn = "0", gn = "0", bn = "4px", xn = "4px", yn = "8px", _n = "8px", kn = "8px", vn = "16px", wn = "16px", Sn = "24px", Cn = "24px", jn = "32px", Nn = "32px", Tn = "40px", Dn = "40px", Fn = "48px", Bn = "48px", In = "56px", Rn = "56px", $n = "64px", Ct = "Frutiger W01", jt = "Arial, Helvetica, sans-serif", Nt = "sans-serif", Tt = "400", Dt = "600", Ft = "400", Bt = "12px", It = "14px", Rt = "12pt", $t = "14px", Mt = "16px", Lt = "12pt", Et = "16px", At = "19px", Ht = "13pt", Pt = "19px", zt = "22px", Wt = "15pt", Ot = "22px", Ut = "26px", Gt = "17pt", Vt = "27px", Yt = "36px", qt = "20pt", Kt = "33px", Zt = "48px", Jt = "24pt", Mn = "16px", Ln = "24px", Ne = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Te = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, De = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Fe = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Be = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ie = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Re = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, $e = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Me = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Le = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Ll,
  AnimationDurationNormal: El,
  AnimationDurationSlow: Al,
  AnimationEasingBounce: Wl,
  AnimationEasingEaseIn: Hl,
  AnimationEasingEaseInOut: zl,
  AnimationEasingEaseOut: Pl,
  BorderColorCard: ga,
  BorderColorCardHover: ba,
  BorderColorDefault: ma,
  BorderColorError: xa,
  BorderColorForm: pa,
  BorderRadiusLarge: rc,
  BorderRadiusMedium: nc,
  BorderRadiusNone: ec,
  BorderRadiusSmall: tc,
  BorderWidthCardBottom: Zl,
  BorderWidthDefault: Yl,
  BorderWidthFormElement: ql,
  BorderWidthFormElementError: Kl,
  BorderWidthPanel: Jl,
  BorderWidthTableCell: Ql,
  BorderWidthTableHeader: Xl,
  BreakpointDesktop: Eu,
  BreakpointLargeDesktop: Au,
  BreakpointMobile: Mu,
  BreakpointTablet: Lu,
  ButtonBorderRadius: Id,
  ButtonBorderWidth: Bd,
  ButtonPrimaryBackgroundActive: yd,
  ButtonPrimaryBackgroundDefault: bd,
  ButtonPrimaryBackgroundDisabled: _d,
  ButtonPrimaryBackgroundHover: xd,
  ButtonPrimaryBorderDefault: wd,
  ButtonPrimaryBorderFocus: Sd,
  ButtonPrimaryTextDefault: kd,
  ButtonPrimaryTextDisabled: vd,
  ButtonSecondaryBackgroundActive: Td,
  ButtonSecondaryBackgroundDefault: Cd,
  ButtonSecondaryBackgroundHover: Nd,
  ButtonSecondaryBackgroundSolid: jd,
  ButtonSecondaryBorderDefault: Fd,
  ButtonSecondaryTextDefault: Dd,
  ButtonShadowSize: Rd,
  ButtonSpacingPaddingHorizontalDesktop: Pa,
  ButtonSpacingPaddingHorizontalMobile: Aa,
  ButtonSpacingPaddingVerticalDesktop: Ha,
  ButtonSpacingPaddingVerticalMobile: Ea,
  ButtonTypographyWeight: $d,
  CardBackgroundDefault: Md,
  CardBorderBottom: Ad,
  CardBorderDefault: Ld,
  CardBorderHover: Ed,
  CardBorderWidthBottom: Od,
  CardBorderWidthDefault: Wd,
  CardShadowDefault: Ud,
  CardShadowHover: Gd,
  CardSpacingHeadingMargin: Oa,
  CardSpacingPaddingDesktop: Wa,
  CardSpacingPaddingMobile: za,
  CardTextDescription: Pd,
  CardTextHeading: Hd,
  CardTextLink: zd,
  ColorBorderDefault: mc,
  ColorBorderSecondary: pc,
  ColorButtonLoginActive: Wc,
  ColorButtonLoginBackground: Pc,
  ColorButtonLoginHover: zc,
  ColorButtonLoginShadow: Oc,
  ColorButtonPrimaryActive: vc,
  ColorButtonPrimaryBackground: yc,
  ColorButtonPrimaryHover: kc,
  ColorButtonPrimaryShadow: wc,
  ColorButtonPrimaryText: _c,
  ColorButtonReverseActive: $c,
  ColorButtonReverseBackground: Bc,
  ColorButtonReverseHover: Rc,
  ColorButtonReverseShadow: Mc,
  ColorButtonReverseText: Ic,
  ColorButtonSecondaryActive: Dc,
  ColorButtonSecondaryBackground: Sc,
  ColorButtonSecondaryBackgroundSolid: Cc,
  ColorButtonSecondaryBorder: jc,
  ColorButtonSecondaryHover: Tc,
  ColorButtonSecondaryShadow: Fc,
  ColorButtonSecondaryText: Nc,
  ColorButtonWarningActive: Ac,
  ColorButtonWarningBackground: Lc,
  ColorButtonWarningHover: Ec,
  ColorButtonWarningShadow: Hc,
  ColorError: gc,
  ColorFocusBackground: hc,
  ColorFocusText: fc,
  ColorFormBackground: xc,
  ColorFormBorder: bc,
  ColorGrey1: Ia,
  ColorGrey2: Ra,
  ColorGrey3: $a,
  ColorGrey4: Ma,
  ColorGrey5: La,
  ColorLinkActive: dc,
  ColorLinkDefault: lc,
  ColorLinkHover: cc,
  ColorLinkVisited: uc,
  ColorPrimaryBlack: ka,
  ColorPrimaryBlue: ya,
  ColorPrimaryDarkPink: Sa,
  ColorPrimaryGreen: va,
  ColorPrimaryPurple: wa,
  ColorPrimaryRed: Ca,
  ColorPrimaryWhite: _a,
  ColorPrimaryYellow: ja,
  ColorSecondaryAquaGreen: Fa,
  ColorSecondaryOrange: Da,
  ColorSecondaryPaleYellow: Na,
  ColorSecondaryPink: Ba,
  ColorSecondaryWarmYellow: Ta,
  ColorTextPrimary: ac,
  ColorTextPrint: ic,
  ColorTextReverse: oc,
  ColorTextSecondary: sc,
  ComponentBlur: hd,
  ComponentBreadcrumbChevronMarginLeft: ad,
  ComponentBreadcrumbChevronMarginRight: sd,
  ComponentBreadcrumbPaddingTopDesktop: id,
  ComponentBreadcrumbPaddingTopMobile: od,
  ComponentButtonPaddingDesktopHorizontal: Yc,
  ComponentButtonPaddingDesktopVertical: Vc,
  ComponentButtonPaddingMobileHorizontal: Gc,
  ComponentButtonPaddingMobileVertical: Uc,
  ComponentButtonShadowSize: qc,
  ComponentCardHeadingMargin: td,
  ComponentCardPaddingDesktop: ed,
  ComponentCardPaddingMobile: Qc,
  ComponentDetails: md,
  ComponentExpander: pd,
  ComponentFormCheckboxLabelPadding: Xc,
  ComponentFormCheckboxSize: Jc,
  ComponentFormInputMinHeight: Kc,
  ComponentFormInputPadding: Zc,
  ComponentLink: fd,
  ComponentPagination: gd,
  ComponentPanelPaddingDesktop: rd,
  ComponentPanelPaddingMobile: nd,
  ComponentSpread: ud,
  ComponentSummaryListCellPaddingHorizontal: cd,
  ComponentSummaryListCellPaddingVertical: ld,
  ComponentSummaryListRowMargin: dd,
  ElevationHigh: bh,
  ElevationLow: ph,
  ElevationMedium: gh,
  ElevationNone: mh,
  FocusOutlineOffset: dh,
  FocusOutlineStyle: uh,
  FocusOutlineWidth: ch,
  FocusShadowButton: fh,
  FocusShadowInput: hh,
  FontFamilyBase: Ct,
  FontFamilyFallback: jt,
  FontFamilyPrint: Nt,
  FontLineHeightBase: Ln,
  FontSize14Mobile: Bt,
  FontSize14Print: Rt,
  FontSize14Tablet: It,
  FontSize16Mobile: $t,
  FontSize16Print: Lt,
  FontSize16Tablet: Mt,
  FontSize19Mobile: Et,
  FontSize19Print: Ht,
  FontSize19Tablet: At,
  FontSize22Mobile: Pt,
  FontSize22Print: Wt,
  FontSize22Tablet: zt,
  FontSize26Mobile: Ot,
  FontSize26Print: Gt,
  FontSize26Tablet: Ut,
  FontSize36Mobile: Vt,
  FontSize36Print: qt,
  FontSize36Tablet: Yt,
  FontSize48Mobile: Kt,
  FontSize48Print: Jt,
  FontSize48Tablet: Zt,
  FontSizeBase: Mn,
  FontWeightBold: Dt,
  FontWeightLight: Ft,
  FontWeightNormal: Tt,
  FormBorderRadius: uu,
  FormBorderWidthDefault: cu,
  FormBorderWidthError: du,
  FormErrorTextDefault: ou,
  FormErrorTypographyWeight: iu,
  FormHintTextDefault: lu,
  FormInputBackgroundDefault: Vd,
  FormInputBackgroundDisabled: qd,
  FormInputBackgroundError: Kd,
  FormInputBackgroundFocus: Yd,
  FormInputBorderDefault: Zd,
  FormInputBorderDisabled: Qd,
  FormInputBorderError: Xd,
  FormInputBorderFocus: Jd,
  FormInputTextDefault: eu,
  FormInputTextDisabled: nu,
  FormInputTextPlaceholder: tu,
  FormLabelTextDefault: ru,
  FormLabelTextRequired: au,
  FormLabelTypographyWeight: su,
  FormSpacingCheckboxLabelPadding: Ya,
  FormSpacingCheckboxSize: Va,
  FormSpacingInputMinHeight: Ga,
  FormSpacingInputPadding: Ua,
  GridGutter: Pu,
  GridGutterHalf: zu,
  GridPageWidth: Hu,
  HeadingsNhsukHeadingL: Te,
  HeadingsNhsukHeadingM: De,
  HeadingsNhsukHeadingS: Fe,
  HeadingsNhsukHeadingXl: Ne,
  HeadingsNhsukHeadingXs: Be,
  LayoutColumnActions: $u,
  LayoutColumnFull: Fu,
  LayoutColumnHalf: Bu,
  LayoutColumnQuarter: Ru,
  LayoutColumnThird: Iu,
  LayoutContainerMaxWidth: Du,
  ParagraphsBody: Ie,
  ParagraphsBodyLarge: Re,
  ParagraphsBodySmall: $e,
  ParagraphsLedeText: Me,
  ParagraphsLedeTextSmall: Le,
  ShadowButtonDefault: rh,
  ShadowButtonFocus: oh,
  ShadowButtonSecondary: ah,
  ShadowButtonWarning: sh,
  ShadowCardDefault: ih,
  ShadowCardHover: lh,
  SizeButtonMinHeightDesktop: Tu,
  SizeButtonMinHeightMobile: Nu,
  SizeFormControlLarge: yu,
  SizeFormControlMedium: xu,
  SizeFormControlSmall: bu,
  SizeFormInputWidth2xl: Cu,
  SizeFormInputWidth3xl: ju,
  SizeFormInputWidthLg: wu,
  SizeFormInputWidthMd: vu,
  SizeFormInputWidthSm: ku,
  SizeFormInputWidthXl: Su,
  SizeFormInputWidthXs: _u,
  SizeIconExtraLarge: pu,
  SizeIconLarge: mu,
  SizeIconMedium: fu,
  SizeIconNhsDefault: gu,
  SizeIconSmall: hu,
  Spacing0: qa,
  Spacing1: Ka,
  Spacing2: Za,
  Spacing3: Ja,
  Spacing4: Xa,
  Spacing5: Qa,
  Spacing6: es,
  Spacing7: ts,
  Spacing8: ns,
  Spacing9: rs,
  SpacingResponsive0Mobile: pn,
  SpacingResponsive0Tablet: gn,
  SpacingResponsive1Mobile: bn,
  SpacingResponsive1Tablet: xn,
  SpacingResponsive2Mobile: yn,
  SpacingResponsive2Tablet: _n,
  SpacingResponsive3Mobile: kn,
  SpacingResponsive3Tablet: vn,
  SpacingResponsive4Mobile: wn,
  SpacingResponsive4Tablet: Sn,
  SpacingResponsive5Mobile: Cn,
  SpacingResponsive5Tablet: jn,
  SpacingResponsive6Mobile: Nn,
  SpacingResponsive6Tablet: Tn,
  SpacingResponsive7Mobile: Dn,
  SpacingResponsive7Tablet: Fn,
  SpacingResponsive8Mobile: Bn,
  SpacingResponsive8Tablet: In,
  SpacingResponsive9Mobile: Rn,
  SpacingResponsive9Tablet: $n,
  StateDisabledBackground: eh,
  StateDisabledBorder: th,
  StateDisabledText: nh,
  StateErrorBackground: Wu,
  StateErrorBorder: Ou,
  StateErrorText: Uu,
  StateInfoBackground: Ju,
  StateInfoBorder: Xu,
  StateInfoText: Qu,
  StateSuccessBackground: Gu,
  StateSuccessBorder: Vu,
  StateSuccessText: Yu,
  StateWarningBackground: qu,
  StateWarningBorder: Ku,
  StateWarningText: Zu,
  TransitionButtonDefault: Ol,
  TransitionButtonShadow: Ul,
  TransitionCardHover: Vl,
  TransitionInputFocus: Gl
}, Symbol.toStringTag, { value: "Module" })), Qh = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), ef = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
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
), tf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
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
), nf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
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
), rf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), af = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), sf = ({
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
), of = ({
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
), lf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
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
), cf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
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
), df = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
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
), uf = () => me(() => xh, []), hf = () => me(() => ({
  // Border colors
  BorderColorDefault: ma,
  BorderColorForm: pa,
  BorderColorCard: ga,
  BorderColorCardHover: ba,
  BorderColorError: xa,
  // Primary colors
  ColorPrimaryBlue: ya,
  ColorPrimaryWhite: _a,
  ColorPrimaryBlack: ka,
  ColorPrimaryGreen: va,
  ColorPrimaryPurple: wa,
  ColorPrimaryDarkPink: Sa,
  ColorPrimaryRed: Ca,
  ColorPrimaryYellow: ja,
  // Secondary colors
  ColorSecondaryPaleYellow: Na,
  ColorSecondaryWarmYellow: Ta,
  ColorSecondaryOrange: Da,
  ColorSecondaryAquaGreen: Fa,
  ColorSecondaryPink: Ba,
  // Grey scale
  ColorGrey1: Ia,
  ColorGrey2: Ra,
  ColorGrey3: $a,
  ColorGrey4: Ma,
  ColorGrey5: La
}), []), ff = () => me(() => ({
  Spacing0: qa,
  Spacing1: Ka,
  Spacing2: Za,
  Spacing3: Ja,
  Spacing4: Xa,
  Spacing5: Qa,
  Spacing6: es,
  Spacing7: ts,
  Spacing8: ns,
  Spacing9: rs
}), []), mf = () => me(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Bt,
    Size16: $t,
    Size19: Et,
    Size22: Pt,
    Size26: Ot,
    Size36: Vt,
    Size48: Kt
  },
  Tablet: {
    Size14: It,
    Size16: Mt,
    Size19: At,
    Size22: zt,
    Size26: Ut,
    Size36: Yt,
    Size48: Zt
  },
  Print: {
    Size14: Rt,
    Size16: Lt,
    Size19: Ht,
    Size22: Wt,
    Size26: Gt,
    Size36: qt,
    Size48: Jt
  },
  Family: {
    Base: Ct,
    Fallback: jt,
    Print: Nt
  },
  Weight: {
    Normal: Tt,
    Bold: Dt,
    Light: Ft
  },
  Base: {
    Size: Mn,
    LineHeight: Ln
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Ct,
  FontFamilyFallback: jt,
  FontFamilyPrint: Nt,
  FontWeightNormal: Tt,
  FontWeightBold: Dt,
  FontWeightLight: Ft,
  FontSize14Mobile: Bt,
  FontSize14Tablet: It,
  FontSize14Print: Rt,
  FontSize16Mobile: $t,
  FontSize16Tablet: Mt,
  FontSize16Print: Lt,
  FontSize19Mobile: Et,
  FontSize19Tablet: At,
  FontSize19Print: Ht,
  FontSize22Mobile: Pt,
  FontSize22Tablet: zt,
  FontSize22Print: Wt,
  FontSize26Mobile: Ot,
  FontSize26Tablet: Ut,
  FontSize26Print: Gt,
  FontSize36Mobile: Vt,
  FontSize36Tablet: Yt,
  FontSize36Print: qt,
  FontSize48Mobile: Kt,
  FontSize48Tablet: Zt,
  FontSize48Print: Jt,
  FontSizeBase: Mn,
  FontLineHeightBase: Ln
}), []), pf = () => me(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: pn,
    Size1: bn,
    Size2: yn,
    Size3: kn,
    Size4: wn,
    Size5: Cn,
    Size6: Nn,
    Size7: Dn,
    Size8: Bn,
    Size9: Rn
  },
  Tablet: {
    Size0: gn,
    Size1: xn,
    Size2: _n,
    Size3: vn,
    Size4: Sn,
    Size5: jn,
    Size6: Tn,
    Size7: Fn,
    Size8: In,
    Size9: $n
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: pn,
  SpacingResponsive0Tablet: gn,
  SpacingResponsive1Mobile: bn,
  SpacingResponsive1Tablet: xn,
  SpacingResponsive2Mobile: yn,
  SpacingResponsive2Tablet: _n,
  SpacingResponsive3Mobile: kn,
  SpacingResponsive3Tablet: vn,
  SpacingResponsive4Mobile: wn,
  SpacingResponsive4Tablet: Sn,
  SpacingResponsive5Mobile: Cn,
  SpacingResponsive5Tablet: jn,
  SpacingResponsive6Mobile: Nn,
  SpacingResponsive6Tablet: Tn,
  SpacingResponsive7Mobile: Dn,
  SpacingResponsive7Tablet: Fn,
  SpacingResponsive8Mobile: Bn,
  SpacingResponsive8Tablet: In,
  SpacingResponsive9Mobile: Rn,
  SpacingResponsive9Tablet: $n
}), []), gf = () => me(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Ea,
  ButtonSpacingPaddingHorizontalMobile: Aa,
  ButtonSpacingPaddingVerticalDesktop: Ha,
  ButtonSpacingPaddingHorizontalDesktop: Pa,
  // Card spacing	
  CardSpacingPaddingMobile: za,
  CardSpacingPaddingDesktop: Wa,
  CardSpacingHeadingMargin: Oa,
  // Form spacing
  FormSpacingInputPadding: Ua,
  FormSpacingInputMinHeight: Ga,
  FormSpacingCheckboxSize: Va,
  FormSpacingCheckboxLabelPadding: Ya
}), []), bf = () => me(() => ({
  xl: Ne,
  l: Te,
  m: De,
  s: Fe,
  xs: Be
}), []), xf = () => me(() => ({
  body: Ie,
  bodyLarge: Re,
  bodySmall: $e,
  ledeText: Me,
  ledeTextSmall: Le
}), []), yf = () => me(() => ({
  headings: {
    xl: Ne,
    l: Te,
    m: De,
    s: Fe,
    xs: Be
  },
  paragraphs: {
    body: Ie,
    bodyLarge: Re,
    bodySmall: $e,
    ledeText: Me,
    ledeTextSmall: Le
  },
  fonts: {
    family: {
      base: Ct,
      fallback: jt,
      print: Nt
    },
    weight: {
      normal: Tt,
      bold: Dt,
      light: Ft
    },
    sizes: {
      mobile: {
        size14: Bt,
        size16: $t,
        size19: Et,
        size22: Pt,
        size26: Ot,
        size36: Vt,
        size48: Kt
      },
      tablet: {
        size14: It,
        size16: Mt,
        size19: At,
        size22: zt,
        size26: Ut,
        size36: Yt,
        size48: Zt
      },
      print: {
        size14: Rt,
        size16: Lt,
        size19: Ht,
        size22: Wt,
        size26: Gt,
        size36: qt,
        size48: Jt
      }
    }
  }
}), []), as = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, xe = {
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
function _f(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...as, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${xe.normal.eot}?#iefix") format("eot"),
       url("${t}${xe.normal.woff2}") format("woff2"),
       url("${t}${xe.normal.woff}") format("woff"),
       url("${t}${xe.normal.ttf}") format("truetype");
  src: url("${t}${xe.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${xe.bold.eot}?#iefix") format("eot"),
       url("${t}${xe.bold.woff2}") format("woff2"),
       url("${t}${xe.bold.woff}") format("woff"),
       url("${t}${xe.bold.ttf}") format("truetype");
  src: url("${t}${xe.bold.eot}");
}`), a.join(`
`);
}
function kf(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...as, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${xe.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${xe.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${xe.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${xe.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const vf = '"Frutiger W01", Arial, Helvetica, sans-serif', wf = "Arial, Helvetica, sans-serif";
async function Sf() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  En as Account,
  _h as ActionLink,
  Kh as AdaptiveDataGrid,
  Ll as AnimationDurationFast,
  El as AnimationDurationNormal,
  Al as AnimationDurationSlow,
  Wl as AnimationEasingBounce,
  Hl as AnimationEasingEaseIn,
  zl as AnimationEasingEaseInOut,
  Pl as AnimationEasingEaseOut,
  oa as AppointmentCard,
  Zi as AriaDataGrid,
  fn as AriaTabsDataGrid,
  Kh as AriaTabsDataGridAdaptive,
  gs as BackLink,
  ga as BorderColorCard,
  ba as BorderColorCardHover,
  ma as BorderColorDefault,
  xa as BorderColorError,
  pa as BorderColorForm,
  rc as BorderRadiusLarge,
  nc as BorderRadiusMedium,
  ec as BorderRadiusNone,
  tc as BorderRadiusSmall,
  Zl as BorderWidthCardBottom,
  Yl as BorderWidthDefault,
  ql as BorderWidthFormElement,
  Kl as BorderWidthFormElementError,
  Jl as BorderWidthPanel,
  Ql as BorderWidthTableCell,
  Xl as BorderWidthTableHeader,
  Wi as Breadcrumb,
  Eu as BreakpointDesktop,
  Au as BreakpointLargeDesktop,
  Mu as BreakpointMobile,
  Lu as BreakpointTablet,
  _e as Button,
  Id as ButtonBorderRadius,
  Bd as ButtonBorderWidth,
  yd as ButtonPrimaryBackgroundActive,
  bd as ButtonPrimaryBackgroundDefault,
  _d as ButtonPrimaryBackgroundDisabled,
  xd as ButtonPrimaryBackgroundHover,
  wd as ButtonPrimaryBorderDefault,
  Sd as ButtonPrimaryBorderFocus,
  kd as ButtonPrimaryTextDefault,
  vd as ButtonPrimaryTextDisabled,
  Td as ButtonSecondaryBackgroundActive,
  Cd as ButtonSecondaryBackgroundDefault,
  Nd as ButtonSecondaryBackgroundHover,
  jd as ButtonSecondaryBackgroundSolid,
  Fd as ButtonSecondaryBorderDefault,
  Dd as ButtonSecondaryTextDefault,
  Rd as ButtonShadowSize,
  Pa as ButtonSpacingPaddingHorizontalDesktop,
  Aa as ButtonSpacingPaddingHorizontalMobile,
  Ha as ButtonSpacingPaddingVerticalDesktop,
  Ea as ButtonSpacingPaddingVerticalMobile,
  $d as ButtonTypographyWeight,
  aa as Card,
  Md as CardBackgroundDefault,
  Ad as CardBorderBottom,
  Ld as CardBorderDefault,
  Ed as CardBorderHover,
  Od as CardBorderWidthBottom,
  Wd as CardBorderWidthDefault,
  Eh as CardGroup,
  Ah as CardGroupItem,
  Ud as CardShadowDefault,
  Gd as CardShadowHover,
  Oa as CardSpacingHeadingMargin,
  Wa as CardSpacingPaddingDesktop,
  za as CardSpacingPaddingMobile,
  Pd as CardTextDescription,
  Hd as CardTextHeading,
  zd as CardTextLink,
  Hh as CareCard,
  kh as CharacterCount,
  bs as Checkbox,
  xs as Checkboxes,
  mc as ColorBorderDefault,
  pc as ColorBorderSecondary,
  Wc as ColorButtonLoginActive,
  Pc as ColorButtonLoginBackground,
  zc as ColorButtonLoginHover,
  Oc as ColorButtonLoginShadow,
  vc as ColorButtonPrimaryActive,
  yc as ColorButtonPrimaryBackground,
  kc as ColorButtonPrimaryHover,
  wc as ColorButtonPrimaryShadow,
  _c as ColorButtonPrimaryText,
  $c as ColorButtonReverseActive,
  Bc as ColorButtonReverseBackground,
  Rc as ColorButtonReverseHover,
  Mc as ColorButtonReverseShadow,
  Ic as ColorButtonReverseText,
  Dc as ColorButtonSecondaryActive,
  Sc as ColorButtonSecondaryBackground,
  Cc as ColorButtonSecondaryBackgroundSolid,
  jc as ColorButtonSecondaryBorder,
  Tc as ColorButtonSecondaryHover,
  Fc as ColorButtonSecondaryShadow,
  Nc as ColorButtonSecondaryText,
  Ac as ColorButtonWarningActive,
  Lc as ColorButtonWarningBackground,
  Ec as ColorButtonWarningHover,
  Hc as ColorButtonWarningShadow,
  gc as ColorError,
  hc as ColorFocusBackground,
  fc as ColorFocusText,
  xc as ColorFormBackground,
  bc as ColorFormBorder,
  Ia as ColorGrey1,
  Ra as ColorGrey2,
  $a as ColorGrey3,
  Ma as ColorGrey4,
  La as ColorGrey5,
  dc as ColorLinkActive,
  lc as ColorLinkDefault,
  cc as ColorLinkHover,
  uc as ColorLinkVisited,
  ka as ColorPrimaryBlack,
  ya as ColorPrimaryBlue,
  Sa as ColorPrimaryDarkPink,
  va as ColorPrimaryGreen,
  wa as ColorPrimaryPurple,
  Ca as ColorPrimaryRed,
  _a as ColorPrimaryWhite,
  ja as ColorPrimaryYellow,
  Fa as ColorSecondaryAquaGreen,
  Da as ColorSecondaryOrange,
  Na as ColorSecondaryPaleYellow,
  Ba as ColorSecondaryPink,
  Ta as ColorSecondaryWarmYellow,
  ac as ColorTextPrimary,
  ic as ColorTextPrint,
  oc as ColorTextReverse,
  sc as ColorTextSecondary,
  zn as Column,
  hd as ComponentBlur,
  ad as ComponentBreadcrumbChevronMarginLeft,
  sd as ComponentBreadcrumbChevronMarginRight,
  id as ComponentBreadcrumbPaddingTopDesktop,
  od as ComponentBreadcrumbPaddingTopMobile,
  Yc as ComponentButtonPaddingDesktopHorizontal,
  Vc as ComponentButtonPaddingDesktopVertical,
  Gc as ComponentButtonPaddingMobileHorizontal,
  Uc as ComponentButtonPaddingMobileVertical,
  qc as ComponentButtonShadowSize,
  td as ComponentCardHeadingMargin,
  ed as ComponentCardPaddingDesktop,
  Qc as ComponentCardPaddingMobile,
  md as ComponentDetails,
  pd as ComponentExpander,
  Xc as ComponentFormCheckboxLabelPadding,
  Jc as ComponentFormCheckboxSize,
  Kc as ComponentFormInputMinHeight,
  Zc as ComponentFormInputPadding,
  fd as ComponentLink,
  gd as ComponentPagination,
  rd as ComponentPanelPaddingDesktop,
  nd as ComponentPanelPaddingMobile,
  ud as ComponentSpread,
  cd as ComponentSummaryListCellPaddingHorizontal,
  ld as ComponentSummaryListCellPaddingVertical,
  dd as ComponentSummaryListRowMargin,
  Hr as Container,
  Lh as ContentsList,
  as as DEFAULT_FONT_CONFIG,
  Vh as DashboardSummaryGrid,
  Dh as DateInput,
  Ui as Details,
  Gi as DoDontList,
  bh as ElevationHigh,
  ph as ElevationLow,
  gh as ElevationMedium,
  mh as ElevationNone,
  nr as ErrorMessage,
  Th as ErrorSummary,
  Vi as Expander,
  xe as FRUTIGER_FONT_FILES,
  Pn as Fieldset,
  dh as FocusOutlineOffset,
  uh as FocusOutlineStyle,
  ch as FocusOutlineWidth,
  fh as FocusShadowButton,
  hh as FocusShadowInput,
  Ct as FontFamilyBase,
  jt as FontFamilyFallback,
  Nt as FontFamilyPrint,
  Ln as FontLineHeightBase,
  Bt as FontSize14Mobile,
  Rt as FontSize14Print,
  It as FontSize14Tablet,
  $t as FontSize16Mobile,
  Lt as FontSize16Print,
  Mt as FontSize16Tablet,
  Et as FontSize19Mobile,
  Ht as FontSize19Print,
  At as FontSize19Tablet,
  Pt as FontSize22Mobile,
  Wt as FontSize22Print,
  zt as FontSize22Tablet,
  Ot as FontSize26Mobile,
  Gt as FontSize26Print,
  Ut as FontSize26Tablet,
  Vt as FontSize36Mobile,
  qt as FontSize36Print,
  Yt as FontSize36Tablet,
  Kt as FontSize48Mobile,
  Jt as FontSize48Print,
  Zt as FontSize48Tablet,
  Mn as FontSizeBase,
  Dt as FontWeightBold,
  Ft as FontWeightLight,
  Tt as FontWeightNormal,
  Gr as Footer,
  uu as FormBorderRadius,
  cu as FormBorderWidthDefault,
  du as FormBorderWidthError,
  ou as FormErrorTextDefault,
  iu as FormErrorTypographyWeight,
  lu as FormHintTextDefault,
  Vd as FormInputBackgroundDefault,
  qd as FormInputBackgroundDisabled,
  Kd as FormInputBackgroundError,
  Yd as FormInputBackgroundFocus,
  Zd as FormInputBorderDefault,
  Qd as FormInputBorderDisabled,
  Xd as FormInputBorderError,
  Jd as FormInputBorderFocus,
  eu as FormInputTextDefault,
  nu as FormInputTextDisabled,
  tu as FormInputTextPlaceholder,
  ru as FormLabelTextDefault,
  au as FormLabelTextRequired,
  su as FormLabelTypographyWeight,
  Ya as FormSpacingCheckboxLabelPadding,
  Va as FormSpacingCheckboxSize,
  Ga as FormSpacingInputMinHeight,
  Ua as FormSpacingInputPadding,
  $h as GanttChart,
  vs as Grid,
  Pu as GridGutter,
  zu as GridGutterHalf,
  Hu as GridPageWidth,
  Ur as Header,
  Ih as HeaderSSR,
  Or as HeaderSearch,
  Rh as HeaderStatic,
  Pe as Heading,
  Te as HeadingsNhsukHeadingL,
  De as HeadingsNhsukHeadingM,
  Fe as HeadingsNhsukHeadingS,
  Ne as HeadingsNhsukHeadingXl,
  Be as HeadingsNhsukHeadingXs,
  Ds as Hero,
  Er as Hint,
  Gh as Images,
  An as Input,
  Ph as InsetText,
  Hn as Label,
  $u as LayoutColumnActions,
  Fu as LayoutColumnFull,
  Bu as LayoutColumnHalf,
  Ru as LayoutColumnQuarter,
  Iu as LayoutColumnThird,
  Du as LayoutContainerMaxWidth,
  Cs as List,
  Pr as MainWrapper,
  ia as MedicationCard,
  sf as NHSBodyText,
  of as NHSBodyTextLarge,
  lf as NHSBodyTextSmall,
  ef as NHSHeading1,
  tf as NHSHeading2,
  nf as NHSHeading3,
  rf as NHSHeading4,
  af as NHSHeading5,
  cf as NHSLedeText,
  df as NHSLedeTextSmall,
  Bh as NHSThemeProvider,
  wf as NHS_FALLBACK_FONT_STACK,
  vf as NHS_FONT_STACK,
  Jh as PageTemplate,
  Mh as Pagination,
  Oi as Panel,
  Ie as ParagraphsBody,
  Re as ParagraphsBodyLarge,
  $e as ParagraphsBodySmall,
  Me as ParagraphsLedeText,
  Le as ParagraphsLedeTextSmall,
  sa as PatientCard,
  vh as Radios,
  Kh as ResponsiveDataGrid,
  Zh as ResponsiveDataGridDemo,
  bt as Row,
  Ar as Select,
  _s as SelectOption,
  rh as ShadowButtonDefault,
  oh as ShadowButtonFocus,
  ah as ShadowButtonSecondary,
  sh as ShadowButtonWarning,
  ih as ShadowCardDefault,
  lh as ShadowCardHover,
  Tu as SizeButtonMinHeightDesktop,
  Nu as SizeButtonMinHeightMobile,
  yu as SizeFormControlLarge,
  xu as SizeFormControlMedium,
  bu as SizeFormControlSmall,
  Cu as SizeFormInputWidth2xl,
  ju as SizeFormInputWidth3xl,
  wu as SizeFormInputWidthLg,
  vu as SizeFormInputWidthMd,
  ku as SizeFormInputWidthSm,
  Su as SizeFormInputWidthXl,
  _u as SizeFormInputWidthXs,
  pu as SizeIconExtraLarge,
  mu as SizeIconLarge,
  fu as SizeIconMedium,
  gu as SizeIconNhsDefault,
  hu as SizeIconSmall,
  ra as SkipLink,
  Yh as SortStatusControl,
  qa as Spacing0,
  Ka as Spacing1,
  Za as Spacing2,
  Ja as Spacing3,
  Xa as Spacing4,
  Qa as Spacing5,
  es as Spacing6,
  ts as Spacing7,
  ns as Spacing8,
  rs as Spacing9,
  pn as SpacingResponsive0Mobile,
  gn as SpacingResponsive0Tablet,
  bn as SpacingResponsive1Mobile,
  xn as SpacingResponsive1Tablet,
  yn as SpacingResponsive2Mobile,
  _n as SpacingResponsive2Tablet,
  kn as SpacingResponsive3Mobile,
  vn as SpacingResponsive3Tablet,
  wn as SpacingResponsive4Mobile,
  Sn as SpacingResponsive4Tablet,
  Cn as SpacingResponsive5Mobile,
  jn as SpacingResponsive5Tablet,
  Nn as SpacingResponsive6Mobile,
  Tn as SpacingResponsive6Tablet,
  Dn as SpacingResponsive7Mobile,
  Fn as SpacingResponsive7Tablet,
  Bn as SpacingResponsive8Mobile,
  In as SpacingResponsive8Tablet,
  Rn as SpacingResponsive9Mobile,
  $n as SpacingResponsive9Tablet,
  wh as SpacingUtilities,
  eh as StateDisabledBackground,
  th as StateDisabledBorder,
  nh as StateDisabledText,
  Wu as StateErrorBackground,
  Ou as StateErrorBorder,
  Uu as StateErrorText,
  Ju as StateInfoBackground,
  Xu as StateInfoBorder,
  Qu as StateInfoText,
  Gu as StateSuccessBackground,
  Vu as StateSuccessBorder,
  Yu as StateSuccessText,
  qu as StateWarningBackground,
  Ku as StateWarningBorder,
  Zu as StateWarningText,
  Ki as SummaryCard,
  zh as SummaryList,
  Wh as Table,
  Oh as Tabs,
  He as Tag,
  Yi as TaskList,
  ys as Textarea,
  Xh as TransactionalPageTemplate,
  Ol as TransitionButtonDefault,
  Ul as TransitionButtonShadow,
  Vl as TransitionCardHover,
  Gl as TransitionInputFocus,
  la as VitalsCard,
  Nh as WIDTH_FRACTIONS,
  Uh as WarningCallout,
  fa as WidthContainer,
  Ch as WidthUtilities,
  Sf as checkFrutigerLoaded,
  Jn as createGenericTabsConfig,
  qh as createTCHTabsConfig,
  _f as generateFrutigerFontFace,
  Qh as getResponsiveStyles,
  Sh as getSpacingClass,
  jh as getWidthClass,
  kf as preloadFrutigerFonts,
  ll as tchDataConfig,
  hf as useColors,
  gf as useComponentSpacing,
  bf as useNHSHeadings,
  xf as useNHSParagraphs,
  Fh as useNHSTheme,
  yf as useNHSTypographySystem,
  pf as useResponsiveSpacing,
  ff as useSpacing,
  uf as useTokens,
  mf as useTypography
};
//# sourceMappingURL=index.esm.js.map
