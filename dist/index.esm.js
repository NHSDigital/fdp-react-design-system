import * as he from "react";
import Re, { useState as ge, useEffect as ve, useCallback as ee, useRef as xe, createElement as _a, useMemo as _e, useContext as so, createContext as oo, forwardRef as yt, useImperativeHandle as ka, useReducer as wa } from "react";
function io(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var At = { exports: {} }, Ct = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar;
function lo() {
  if (Ar) return Ct;
  Ar = 1;
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
  return Ct.Fragment = t, Ct.jsx = r, Ct.jsxs = r, Ct;
}
var jt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr;
function co() {
  return Hr || (Hr = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === R ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case x:
          return "Fragment";
        case q:
          return "Profiler";
        case _:
          return "StrictMode";
        case A:
          return "Suspense";
        case p:
          return "SuspenseList";
        case w:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case B:
            return "Portal";
          case T:
            return (S.displayName || "Context") + ".Provider";
          case M:
            return (S._context.displayName || "Context") + ".Consumer";
          case k:
            var Q = S.render;
            return S = S.displayName, S || (S = Q.displayName || Q.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case L:
            return Q = S.displayName || null, Q !== null ? Q : e(S.type) || "Memo";
          case D:
            Q = S._payload, S = S._init;
            try {
              return e(S(Q));
            } catch {
            }
        }
      return null;
    }
    function t(S) {
      return "" + S;
    }
    function r(S) {
      try {
        t(S);
        var Q = !1;
      } catch {
        Q = !0;
      }
      if (Q) {
        Q = console;
        var $ = Q.error, O = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return $.call(
          Q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), t(S);
      }
    }
    function a(S) {
      if (S === x) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === D)
        return "<...>";
      try {
        var Q = e(S);
        return Q ? "<" + Q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var S = y.A;
      return S === null ? null : S.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(S) {
      if (N.call(S, "key")) {
        var Q = Object.getOwnPropertyDescriptor(S, "key").get;
        if (Q && Q.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function l(S, Q) {
      function $() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          Q
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: $,
        configurable: !0
      });
    }
    function c() {
      var S = e(this.type);
      return X[S] || (X[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function d(S, Q, $, O, z, le, h, C) {
      return $ = le.ref, S = {
        $$typeof: f,
        type: S,
        key: Q,
        props: le,
        _owner: z
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function u(S, Q, $, O, z, le, h, C) {
      var E = Q.children;
      if (E !== void 0)
        if (O)
          if (W(E)) {
            for (O = 0; O < E.length; O++)
              m(E[O]);
            Object.freeze && Object.freeze(E);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(E);
      if (N.call(Q, "key")) {
        E = e(S);
        var F = Object.keys(Q).filter(function(Y) {
          return Y !== "key";
        });
        O = 0 < F.length ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}", de[E + O] || (F = 0 < F.length ? "{" + F.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          E,
          F,
          E
        ), de[E + O] = !0);
      }
      if (E = null, $ !== void 0 && (r($), E = "" + $), i(Q) && (r(Q.key), E = "" + Q.key), "key" in Q) {
        $ = {};
        for (var U in Q)
          U !== "key" && ($[U] = Q[U]);
      } else $ = Q;
      return E && l(
        $,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), d(
        S,
        E,
        le,
        z,
        o(),
        $,
        h,
        C
      );
    }
    function m(S) {
      typeof S == "object" && S !== null && S.$$typeof === f && S._store && (S._store.validated = 1);
    }
    var b = Re, f = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), T = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), R = Symbol.for("react.client.reference"), y = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, W = Array.isArray, oe = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var P, X = {}, re = b.react_stack_bottom_frame.bind(
      b,
      s
    )(), ie = oe(a(s)), de = {};
    jt.Fragment = x, jt.jsx = function(S, Q, $, O, z) {
      var le = 1e4 > y.recentlyCreatedOwnerStacks++;
      return u(
        S,
        Q,
        $,
        !1,
        O,
        z,
        le ? Error("react-stack-top-frame") : re,
        le ? oe(a(S)) : ie
      );
    }, jt.jsxs = function(S, Q, $, O, z) {
      var le = 1e4 > y.recentlyCreatedOwnerStacks++;
      return u(
        S,
        Q,
        $,
        !0,
        O,
        z,
        le ? Error("react-stack-top-frame") : re,
        le ? oe(a(S)) : ie
      );
    };
  })()), jt;
}
var Pr;
function uo() {
  return Pr || (Pr = 1, process.env.NODE_ENV === "production" ? At.exports = lo() : At.exports = co()), At.exports;
}
var n = uo(), Ln = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var zr;
function ho() {
  return zr || (zr = 1, (function(e) {
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
  })(Ln)), Ln.exports;
}
var fo = ho();
const J = /* @__PURE__ */ io(fo), Sf = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = J(
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
}, xr = ({
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
    ) : null, l = s.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, c = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i,
      l
    ] });
    return s.href ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-account__link nhsuk-header__account-link", href: s.href, children: c }) : s.action ? /* @__PURE__ */ n.jsx(
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
      className: J(
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
          className: J("nhsuk-account__item nhsuk-header__account-item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
}, { forwardRef: mo, useCallback: nt, useState: En } = he;
function po(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [d, u] = En(!1), [m, b] = En(!1), [f, B] = En(!1), x = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    o !== "default" ? `nhs-aria-button--${o}` : "",
    s ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), _ = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", q = {
    ...d && { "data-pressed": "true" },
    ...m && { "data-hovered": "true" },
    ...f && { "data-focused": "true" },
    ..._ && { "data-disabled": "true" }
  }, M = nt(() => !_ && u(!0), [_]), T = nt(() => u(!1), []), k = nt(() => !_ && b(!0), [_]), A = nt(() => {
    b(!1), u(!1);
  }, []), p = nt(() => B(!0), []), L = nt(() => B(!1), []), D = nt((E) => {
    E.key === " " && ("href" in c || E.currentTarget.getAttribute("role") === "button") && (E.preventDefault(), E.currentTarget.click());
  }, [c]), w = nt((E) => {
    if (l) {
      const F = E.currentTarget;
      if (F.getAttribute("data-processing") === "true") {
        E.preventDefault();
        return;
      }
      F.setAttribute("data-processing", "true"), setTimeout(() => {
        F.removeAttribute("data-processing");
      }, 1e3);
    }
  }, [l]);
  if ("href" in c && c.href) {
    const { id: E, style: F, title: U, ["aria-label"]: Y, ["aria-describedby"]: j, ["aria-labelledby"]: ue, tabIndex: ae, ...ne } = c, G = c;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: G.href,
        target: G.target,
        rel: G.rel,
        className: x,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...q,
        ...l && { "data-prevent-double-click": "true" },
        ...ne,
        onKeyDown: (g) => {
          G.onKeyDown?.(g), D(g);
        },
        onClick: (g) => {
          G.onClick?.(g), w(g);
        },
        onMouseDown: (g) => {
          G.onMouseDown?.(g), M();
        },
        onMouseUp: (g) => {
          G.onMouseUp?.(g), T();
        },
        onMouseEnter: (g) => {
          G.onMouseEnter?.(g), k();
        },
        onMouseLeave: (g) => {
          G.onMouseLeave?.(g), A();
        },
        onFocus: (g) => {
          G.onFocus?.(g), p();
        },
        onBlur: (g) => {
          G.onBlur?.(g), L();
        },
        "aria-disabled": G["aria-disabled"],
        ...G["aria-disabled"] === "true" && { tabIndex: -1 },
        id: E,
        style: F,
        title: U,
        "aria-label": Y,
        "aria-describedby": j,
        "aria-labelledby": ue,
        tabIndex: ae,
        children: r
      }
    );
  }
  const { id: R, style: y, title: N, ["aria-label"]: W, ["aria-describedby"]: oe, ["aria-labelledby"]: P, tabIndex: X, name: re, value: ie, form: de, formAction: S, formEncType: Q, formMethod: $, formNoValidate: O, formTarget: z, autoFocus: le, ...h } = c, C = c;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: C.type || "button",
      disabled: C.disabled,
      className: x,
      "data-module": "nhs-button",
      ...q,
      ...l && { "data-prevent-double-click": "true" },
      ...C.disabled && { "aria-disabled": "true" },
      ...h,
      onKeyDown: (E) => {
        C.onKeyDown?.(E), D(E);
      },
      onClick: (E) => {
        C.onClick?.(E), w(E);
      },
      onMouseDown: (E) => {
        C.onMouseDown?.(E), M();
      },
      onMouseUp: (E) => {
        C.onMouseUp?.(E), T();
      },
      onMouseEnter: (E) => {
        C.onMouseEnter?.(E), k();
      },
      onMouseLeave: (E) => {
        C.onMouseLeave?.(E), A();
      },
      onFocus: (E) => {
        C.onFocus?.(E), p();
      },
      onBlur: (E) => {
        C.onBlur?.(E), L();
      },
      id: R,
      style: y,
      title: N,
      "aria-label": W,
      "aria-describedby": oe,
      "aria-labelledby": P,
      tabIndex: X,
      name: re,
      value: ie,
      form: de,
      formAction: S,
      formEncType: Q,
      formMethod: $,
      formNoValidate: O,
      formTarget: z,
      autoFocus: le,
      children: r
    }
  );
}
const Ie = mo(po);
Ie.displayName = "Button";
const Un = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = J(
    "nhsuk-back-link",
    a
  ), c = J(
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
}, Je = ({
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
  const u = J(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": o,
      "nhsuk-tag--closable": s,
      "nhsuk-tag--disabled": l
    },
    c
  ), m = (b) => {
    b.preventDefault(), b.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: u, ...d, children: [
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
}, go = ({
  id: e,
  name: t,
  checked: r,
  defaultChecked: a = !1,
  disabled: o = !1,
  value: s = "true",
  hint: i,
  errorMessage: l,
  className: c,
  children: d,
  onChange: u,
  onBlur: m,
  onFocus: b,
  attributes: f,
  ...B
}) => {
  const [x, _] = ge(a), q = r !== void 0, M = q ? r : x;
  ve(() => {
    q || _(a);
  }, [a, q]);
  const T = (D) => {
    const w = D.target.checked;
    q || _(w), u?.(w, D);
  }, k = i ? `${e}-hint` : void 0, A = l ? `${e}-error` : void 0, p = [k, A].filter(Boolean).join(" ") || void 0, L = J(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ n.jsx("div", { className: L, ...B, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: M,
        disabled: o,
        onChange: T,
        onBlur: m,
        onFocus: b,
        "aria-describedby": p,
        ...f
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: d }),
    i && /* @__PURE__ */ n.jsx("div", { id: k, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: A, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
go.displayName = "Checkbox";
const yr = ({
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
  className: m,
  width: b = "full",
  inputMode: f,
  autoComplete: B,
  maxLength: x,
  minLength: _,
  pattern: q,
  step: M,
  min: T,
  max: k,
  showValueLabels: A = !1,
  showCurrentValue: p = !1,
  valueLabels: L,
  onChange: D,
  onBlur: w,
  onFocus: R,
  onKeyDown: y,
  ...N
}) => {
  const [W, oe] = ge(a || o || (r === "range" ? T || "0" : ""));
  ve(() => {
    a !== void 0 && oe(a);
  }, [a]);
  const P = (z) => {
    const le = z.target;
    oe(le.value), ("type" in z && z.nativeEvent || z.type === "keydown") && D?.(z);
  }, X = r === "range", re = J(
    "nhsuk-input",
    {
      "nhsuk-input--error": d,
      "nhsuk-input--range": X,
      [`nhsuk-input--width-${b}`]: b !== "full" && !X
    },
    m
  ), ie = a !== void 0, de = {
    id: e,
    name: t,
    type: r,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: c,
    "aria-describedby": u,
    inputMode: f,
    autoComplete: B,
    maxLength: x,
    minLength: _,
    pattern: q,
    step: M,
    min: T,
    max: k,
    onChange: P,
    onBlur: w,
    onFocus: R,
    onKeyDown: (z) => {
      if (X && /[0-9]/.test(z.key)) {
        const le = (W?.toString() || "") + z.key;
        z.target.value = le, P(z);
      }
      y?.(z);
    },
    ...N
  }, S = !ie && o !== void 0 ? { defaultValue: o } : {}, Q = ie ? { value: a } : {}, $ = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: re,
      ...Q,
      ...S,
      "data-current-value": W,
      ...de
    }
  ), O = X ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    A && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: L?.min || T || "0" }),
      $(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: L?.max || k || "100" })
    ] }),
    !A && $(),
    p && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      L?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: W })
    ] }) })
  ] }) : null;
  return X ? O : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: re,
      id: e,
      name: t,
      type: r,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": u,
      inputMode: f,
      autoComplete: B,
      maxLength: x,
      minLength: _,
      pattern: q,
      step: M,
      min: T,
      max: k,
      onChange: D,
      onBlur: w,
      onFocus: R,
      onKeyDown: y,
      ...N
    }
  );
}, vr = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = J(
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
}, _r = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = J(
    "nhsuk-fieldset",
    r
  ), i = J(
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
}, bo = ({
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
  fieldsetAttributes: m,
  attributes: b,
  ...f
}) => {
  const [B, x] = ge(
    e.filter((D) => D.checked).map((D) => D.value)
  ), _ = r || t, q = i ? `${_}-hint` : void 0, M = l ? `${_}-error` : void 0, T = [q, M].filter(Boolean).join(" ") || void 0, k = (D, w) => {
    let R;
    w ? R = [...B, D] : R = B.filter((y) => y !== D), x(R), u?.(R);
  }, A = () => e.map((D, w) => {
    const R = `${_}-${w + 1}`, y = `${R}-conditional`, N = B.includes(D.value), W = D.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: R,
          name: t,
          type: "checkbox",
          value: D.value,
          checked: N,
          disabled: W,
          onChange: (oe) => k(D.value, oe.target.checked),
          "aria-describedby": D.hint ? `${R}-hint` : T,
          ...D.conditional && {
            "aria-controls": y,
            "aria-expanded": N ? "true" : "false"
          },
          ...D.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: R, children: D.text }),
      D.hint && /* @__PURE__ */ n.jsx("div", { id: `${R}-hint`, className: "nhsuk-checkboxes__hint", children: D.hint }),
      D.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: J("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !N
          }),
          id: y,
          children: typeof D.conditional == "object" && D.conditional !== null && "label" in D.conditional && "id" in D.conditional && "name" in D.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            D.conditional.label && /* @__PURE__ */ n.jsx(vr, { htmlFor: D.conditional.id, children: D.conditional.label }),
            /* @__PURE__ */ n.jsx(yr, { ...D.conditional })
          ] }) : D.conditional
        }
      )
    ] }, D.value);
  }), p = J(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": d
    },
    c
  ), L = J("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: L, ...b, ...f, children: /* @__PURE__ */ n.jsxs(
    _r,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: T,
      ...m,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: q, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: M, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: p, children: A() })
      ]
    }
  ) });
};
bo.displayName = "Checkboxes";
const xo = ({
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
  rows: m = 5,
  cols: b,
  maxLength: f,
  minLength: B,
  wrap: x = "soft",
  resize: _ = "vertical",
  autoComplete: q,
  spellCheck: M,
  onChange: T,
  onBlur: k,
  onFocus: A,
  onKeyDown: p,
  ...L
}) => {
  const D = J(
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
      rows: m,
      cols: b,
      maxLength: f,
      minLength: B,
      wrap: x,
      autoComplete: q,
      spellCheck: M,
      onChange: T,
      onBlur: k,
      onFocus: A,
      onKeyDown: p,
      ...L
    }
  );
}, Sa = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = J("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, id: e, ...a, children: r });
}, Cf = ({
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
  ...m
}) => {
  const [b, f] = ge(s), [B, x] = ge(0), [_, q] = ge(!1), [M, T] = ge(!1), k = ee((R) => r ? R.trim() === "" ? 0 : R.trim().split(/\s+/).length : R.length, [r]);
  ve(() => {
    const R = k(b), y = t || r || 0, N = y - R, W = Math.floor(y * (a / 100));
    x(N), q(R > y), T(R >= W || R > y), d && d(R, N);
  }, [b, t, r, a, k, d]);
  const A = (R) => {
    const y = R.target.value;
    f(y), u && u(R);
  }, p = () => {
    const R = t || r || 0, y = r ? "word" : "character", N = r ? "words" : "characters";
    if (!M)
      return `You can enter up to ${R} ${R === 1 ? y : N}`;
    if (_) {
      const W = Math.abs(B);
      return `You have ${W} ${W === 1 ? y : N} too many`;
    } else
      return `You have ${B} ${B === 1 ? y : N} remaining`;
  }, L = J(
    "nhsuk-character-count",
    l
  ), D = J(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !M,
      "nhsuk-error-message": _
    },
    c?.classes
  ), w = J(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": _
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
          xo,
          {
            id: e,
            name: o,
            value: b,
            rows: i,
            className: w,
            onChange: A,
            "aria-describedby": `${e}-info`,
            "aria-invalid": _ || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          Sa,
          {
            id: `${e}-info`,
            className: D,
            role: "status",
            "aria-live": "polite",
            children: p()
          }
        )
      ]
    }
  );
}, yo = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = J(
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
}, vo = ({
  id: e,
  name: t,
  ariaLabel: r,
  value: a,
  defaultValue: o,
  disabled: s = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: c,
  className: d,
  multiple: u = !1,
  size: m,
  autoComplete: b,
  options: f,
  children: B,
  onChange: x,
  onBlur: _,
  onFocus: q,
  ...M
}) => {
  const T = J(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    d
  ), k = () => f ? f.map((p, L) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: p.value,
      disabled: p.disabled,
      "data-initial-selected": p.selected || void 0,
      children: p.text
    },
    `${p.value}-${L}`
  )) : null, A = o === void 0 && a === void 0 && f ? f.find((p) => p.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: T,
      id: e,
      name: t,
      "aria-label": r,
      value: a,
      defaultValue: o !== void 0 ? o : A,
      disabled: s,
      required: i,
      "aria-describedby": c,
      multiple: u,
      size: m,
      autoComplete: b,
      onChange: x,
      onBlur: _,
      onFocus: q,
      ...M,
      children: B || k()
    }
  );
}, Ca = vo;
Ca.Option = yo;
const jf = ({
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
  onFocus: m,
  ...b
}) => {
  const [f, B] = ge(t || r || ""), x = xe([]), _ = J(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    s
  ), q = (T) => {
    const k = T.target.value;
    B(k), d && d(T);
  }, M = ee((T) => {
    const { key: k } = T;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(k)) return;
    T.preventDefault();
    const A = x.current.filter((w) => w && !w.disabled), p = A.indexOf(T.currentTarget);
    if (p === -1) return;
    let L = p;
    k === "ArrowDown" || k === "ArrowRight" ? L = (p + 1) % A.length : (k === "ArrowUp" || k === "ArrowLeft") && (L = (p - 1 + A.length) % A.length);
    const D = A[L];
    D && (D.focus(), D.checked || D.click());
  }, []);
  return /* @__PURE__ */ n.jsx(_r, { children: /* @__PURE__ */ n.jsx("div", { className: _, ...b, children: c.map((T, k) => {
    const A = `${e}-${k}`, p = T.conditional ? `${A}-conditional` : void 0, L = f === T.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: A,
          name: e,
          type: "radio",
          value: T.value,
          disabled: T.disabled,
          checked: L,
          "aria-describedby": o,
          onChange: q,
          onBlur: u,
          onFocus: m,
          onKeyDown: M,
          ref: (D) => {
            D && (x.current[k] = D);
          }
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: A, children: T.text }),
      T.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: T.hint }),
      T.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: J("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !L
          }),
          id: p,
          children: typeof T.conditional == "object" && T.conditional !== null && "label" in T.conditional && "id" in T.conditional && "name" in T.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            T.conditional.label && /* @__PURE__ */ n.jsx(vr, { htmlFor: T.conditional.id, children: T.conditional.label }),
            /* @__PURE__ */ n.jsx(yr, { ...T.conditional })
          ] }) : T.conditional
        }
      )
    ] }, T.value);
  }) }) });
}, ja = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...o
}) => {
  const s = J(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), i = a ? { maxWidth: a } : void 0;
  return /* @__PURE__ */ n.jsx("div", { className: s, style: i, ...o, children: e });
}, It = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = J("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: e });
}, kr = ({
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
  const d = J(
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
}, _o = ({
  children: e,
  className: t,
  ...r
}) => {
  const o = Re.Children.toArray(e)[0], s = Re.isValidElement(o) && (o.type === It || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(ja, { className: t, ...r, children: s ? e : /* @__PURE__ */ n.jsx(It, { children: e }) });
}, ko = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), d = J(
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
}, wo = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = J("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, So = ko;
So.Item = wo;
const Nf = ({
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
}, Tf = {
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
}, Df = ({
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
}, If = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Rf = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Na = ({
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
}, Xe = ({
  level: e,
  className: t,
  text: r,
  html: a,
  children: o,
  size: s,
  marginBottom: i,
  ...l
}) => {
  const d = e ?? ((B) => {
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
  })(s), u = J(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${s}`]: s
    },
    t
  ), m = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), b = `h${d}`, f = i ? { ...l.style, marginBottom: i } : l.style;
  return _a(
    b,
    { className: u, ...l, style: f },
    m
  );
}, Wr = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...o
}) => {
  const s = J("nhsuk-error-message", t);
  return /* @__PURE__ */ n.jsxs("span", { className: s, id: e, ...o, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      r,
      " "
    ] }),
    a
  ] });
}, Bf = ({
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
  ve(() => {
    c.current && c.current.focus();
  }, []);
  const d = J(
    "nhsuk-error-summary",
    s
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, m = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, b = (f) => {
    const B = f.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: f.html } }) : f.text;
    return f.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: f.href,
        ...f.attributes,
        children: B
      }
    ) : B;
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
          i && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (r || a) && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: m() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((f, B) => /* @__PURE__ */ n.jsx("li", { children: b(f) }, B)) })
        ] })
      ]
    }
  );
}, Ff = ({
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
  const [u, m] = ge(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [b, f] = ge({}), B = (P) => P % 4 === 0 && P % 100 !== 0 || P % 400 === 0, x = (P, X) => {
    const re = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return P === 2 && B(X) ? 29 : re[P - 1];
  }, _ = (P, X, re) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Day must be a number";
    const ie = parseInt(P, 10);
    if (ie < 1 || ie > 31) return "Day must be between 1 and 31";
    if (X && re) {
      const de = parseInt(X, 10), S = parseInt(re, 10);
      if (!isNaN(de) && !isNaN(S) && de >= 1 && de <= 12) {
        const Q = x(de, S);
        if (ie > Q)
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
          ][de - 1]} ${S} only has ${Q} days`;
      }
    }
  }, q = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Month must be a number";
    const X = parseInt(P, 10);
    if (X < 1 || X > 12) return "Month must be between 1 and 12";
  }, M = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Year must be a number";
    const X = parseInt(P, 10), re = (/* @__PURE__ */ new Date()).getFullYear();
    if (X < 1900 || X > re + 10)
      return `Year must be between 1900 and ${re + 10}`;
  }, T = (P, X, re) => {
    if (!P || !X || !re) return;
    const ie = parseInt(P, 10), de = parseInt(X, 10), S = parseInt(re, 10);
    if (isNaN(ie) || isNaN(de) || isNaN(S) || de < 1 || de > 12 || S < 1900) return;
    const Q = x(de, S);
    ie < 1 || ie > Q;
  }, k = ee((P, X) => {
    const re = {
      ...u,
      [P]: X
    };
    m(re), c && c(re);
  }, [u, c]), A = ee((P) => {
    const X = u[P];
    let re;
    if (P === "day")
      re = _(X, u.month, u.year);
    else if (P === "month") {
      if (re = q(X), !re && u.day) {
        const ie = _(u.day, X, u.year);
        f((de) => ({
          ...de,
          day: ie
        }));
      }
    } else if (P === "year" && (re = M(X), !re && u.day && u.month)) {
      const ie = _(u.day, u.month, X);
      f((de) => ({
        ...de,
        day: ie
      }));
    }
    if (f((ie) => ({
      ...ie,
      [P]: re
    })), u.day && u.month && u.year) {
      const ie = T(
        P === "day" ? X : u.day,
        P === "month" ? X : u.month,
        P === "year" ? X : u.year
      );
      ie && f((de) => ({
        ...de,
        day: ie
      }));
    }
  }, [u, _, q, M, T]), p = _e(() => [
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
  ], []), L = r || p;
  let D = s?.describedBy || "";
  const w = i ? `${e}-hint` : "", R = l ? `${e}-error` : "";
  w && (D = D ? `${D} ${w}` : w), R && (D = D ? `${D} ${R}` : R);
  const y = Object.values(b).some((P) => P), N = J(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || y
    }
  ), W = J(
    "nhsuk-date-input",
    t
  ), oe = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Sa,
      {
        id: w,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      Wr,
      {
        id: R,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(b).map(
      ([P, X]) => X ? /* @__PURE__ */ n.jsxs(
        Wr,
        {
          id: `${e}-${P}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            X
          ]
        },
        `${P}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: W, id: e, "data-testid": "date-input", ...d, children: L.map((P) => {
      const X = P.id || `${e}-${P.name}`, re = a ? `${a}[${P.name}]` : P.name, ie = P.label || P.name.charAt(0).toUpperCase() + P.name.slice(1), de = b[P.name], S = u[P.name] || "";
      let Q = D;
      if (de) {
        const $ = `${e}-${P.name}-error`;
        Q = Q ? `${Q} ${$}` : $;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          vr,
          {
            htmlFor: X,
            className: "nhsuk-date-input__label",
            children: ie
          }
        ),
        /* @__PURE__ */ n.jsx(
          yr,
          {
            id: X,
            name: re,
            value: S,
            className: J("nhsuk-date-input__input", P.classes, {
              "nhsuk-input--error": de
            }),
            inputMode: P.inputmode,
            autoComplete: P.autocomplete,
            pattern: P.pattern,
            "aria-describedby": Q || void 0,
            hasError: !!de,
            onChange: ($) => k(P.name, $.target.value),
            onBlur: () => A(P.name)
          }
        )
      ] }, P.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: N, children: s ? /* @__PURE__ */ n.jsx(
    _r,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: D || void 0,
      children: oe()
    }
  ) : oe() });
}, Ta = {
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
}, Da = oo(Ta), Co = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Ta, ...t };
  return /* @__PURE__ */ n.jsx(Da.Provider, { value: r, children: e });
}, Lf = () => {
  const e = so(Da);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function jo() {
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
function No() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = jo(), document.head.appendChild(e);
}
const Ef = ({ children: e, theme: t }) => (ve(() => {
  No();
}, []), /* @__PURE__ */ n.jsx(Co, { theme: t, children: e })), Ia = ({
  mode: e = "form",
  action: t = "/search",
  method: r = "get",
  name: a = "q",
  value: o,
  placeholder: s = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: c,
  disabled: d = !1,
  callbacks: u = {},
  isLoading: m = !1,
  showResults: b = !1,
  results: f = [],
  formAttributes: B = {},
  inputAttributes: x = {},
  buttonAttributes: _ = {},
  preventDefaultSubmit: q = !1,
  debounceMs: M = 300,
  minQueryLength: T = 1
}) => {
  const [k, A] = ge(""), [p, L] = ge(!1), D = xe(void 0), w = xe(null), R = xe(null), y = e === "controlled" && o !== void 0, N = y ? o : k, W = ee((O) => {
    D.current && clearTimeout(D.current), D.current = setTimeout(() => {
      u.onChange && O.length >= T && u.onChange(O);
    }, M);
  }, [u.onChange, M, T]), oe = ee((O) => {
    const z = O.target.value;
    y || A(z), e !== "form" && W(z);
  }, [y, e, W]), P = ee((O) => {
    const z = N.trim(), le = {
      query: z,
      timestamp: Date.now(),
      formData: new FormData(O.currentTarget)
    };
    e === "controlled" || e === "hybrid" && q ? (O.preventDefault(), u.onSearch && z.length >= T && u.onSearch(le)) : e === "hybrid" && u.onSearch && z.length >= T && u.onSearch(le);
  }, [e, N, u.onSearch, q, T]), X = ee(() => {
    L(!0), u.onFocus?.();
  }, [u.onFocus]), re = ee(() => {
    L(!1), u.onBlur?.();
  }, [u.onBlur]), ie = ee(() => {
    y || A(""), u.onClear?.(), R.current?.focus();
  }, [y, u.onClear]);
  ve(() => () => {
    D.current && clearTimeout(D.current);
  }, []);
  const de = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: J("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": m
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), S = () => /* @__PURE__ */ n.jsx(
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
  ), Q = () => !N || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ie,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), $ = () => !b || !f.length || !p ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: f.map((O) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: O.href ? /* @__PURE__ */ n.jsxs("a", { href: O.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: O.title }),
    O.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: O.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => u.onSearch?.({ query: O.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: O.title }),
        O.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: O.description })
      ]
    }
  ) }, O.id)) });
  return /* @__PURE__ */ n.jsxs("div", { className: J("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": m,
    "nhsuk-header__search--focused": p,
    "nhsuk-header__search--has-results": b && f.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: w,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        role: "search",
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
                ref: R,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: N,
                onChange: oe,
                onFocus: X,
                onBlur: re,
                disabled: d || m,
                ...b && f.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...x
              }
            ),
            Q()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: d || m || e !== "form" && N.length < T,
              ..._,
              children: [
                m ? S() : de(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: m ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    $()
  ] });
}, Ra = ({
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
  const [m, b] = ge(!1), [f, B] = ge(!1), [x, _] = ge(i?.items?.length || 0), [q, M] = ge(!1), [T, k] = ge(!1), [A, p] = ge(!1), L = xe(null), D = xe(null), w = xe(!1), R = xe(null), y = xe([]), N = xe(null);
  ve(() => {
    typeof window > "u" || (p(!0), M(!0));
  }, []), ve(() => {
    if (!A || !i?.items?.length) return;
    y.current = i.items;
    const h = setTimeout(() => {
      L.current && D.current && ie();
    }, 100);
    return () => clearTimeout(h);
  }, [A, i?.items]);
  const W = r.href && !t.href || r.href && r.href === t.href, oe = W ? r.href : t.href, P = J(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), X = J(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), re = J(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), ie = ee(() => {
    if (!(typeof window > "u" || w.current) && !(!L.current || !D.current || !y.current.length)) {
      w.current = !0;
      try {
        const h = D.current, C = L.current, E = h.offsetWidth, F = C.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (F.length === 0 || E === 0) {
          w.current = !1;
          return;
        }
        const U = window.innerWidth < 768, Y = U ? 16 : 32, j = Y * 2, ue = E - j, ae = Array.from(F).map((v) => v.offsetWidth), ne = ae.reduce((v, I) => v + I, 0), G = U ? 80 : 100, g = N.current !== null && N.current !== U;
        if (N.current = U, console.log("Overflow check:", {
          containerWidth: E,
          availableContainerWidth: ue,
          totalGutters: j,
          gutterSize: Y,
          totalWidth: ne,
          mobile: U,
          breakpointChanged: g,
          itemCount: ae.length,
          measurements: ae
        }), ne <= ue)
          B(!1), _(y.current.length);
        else {
          const v = ue - G;
          let I = 0, H = 0;
          for (let K = 0; K < ae.length; K++) {
            const te = H + ae[K];
            if (te <= v)
              H = te, I = K + 1;
            else
              break;
          }
          I = Math.max(1, I);
          const V = I < ae.length;
          B(V), _(I);
        }
        w.current = !1;
      } catch (h) {
        console.error("Overflow detection error:", h), B(!1), _(y.current.length), w.current = !1;
      }
    }
  }, []);
  ve(() => {
    if (typeof document > "u") return;
    const h = (C) => {
      C.key === "Escape" && m && b(!1);
    };
    if (m)
      return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [m]), ve(() => {
    if (typeof window > "u" || !A) return;
    const h = () => {
      m && (b(!1), k(!1)), R.current && clearTimeout(R.current), R.current = setTimeout(() => {
        y.current.length > 0 && ie();
      }, 250);
    };
    let C = null, E = null;
    return window.matchMedia && (C = window.matchMedia("(max-width: 767px)"), E = () => {
      y.current.length > 0 && setTimeout(() => ie(), 50);
    }, C.addEventListener ? C.addEventListener("change", E) : C.addListener(E)), window.addEventListener("resize", h), () => {
      window.removeEventListener("resize", h), C && E && (C.removeEventListener ? C.removeEventListener("change", E) : C.removeListener(E)), R.current && clearTimeout(R.current);
    };
  }, [A, m, ie]), ve(() => {
    if (typeof document > "u") return;
    const h = (C) => {
      const E = C.target, F = L.current?.contains(E);
      m && !F && b(!1);
    };
    if (m)
      return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [m]);
  const de = (h) => {
    h && (h.preventDefault(), h.stopPropagation());
    const C = !m;
    b(C), C ? setTimeout(() => {
      k(!0);
    }, 50) : k(!1);
  }, S = () => /* @__PURE__ */ n.jsxs(
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
  ) : S(), $ = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, O = (h, C) => h ? C ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: C, children: h }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: h }) : null, z = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), le = (h) => {
    if (h.active || h.current) {
      const C = h.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: C });
    }
    return h.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: P,
      role: "banner",
      "data-module": "nhsuk-header",
      ...d,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: X, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            oe ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: oe, children: [
              Q(),
              $(),
              W && O(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              Q(),
              $(),
              W && O(r.text)
            ] }),
            r.text && !W && O(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx(Ia, { ...o }),
          /* @__PURE__ */ n.jsx(
            xr,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: re,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: J(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !q && A,
                    "nhsuk-header__navigation-container--ssr": !A
                  },
                  l
                ),
                ref: D,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: L, children: [
                  (A ? i.items.slice(0, x) : i.items).map((h, C) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: J(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": h.active || h.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !A && C >= 4
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
                          children: le(h)
                        }
                      )
                    },
                    C
                  )),
                  A && f && x < i.items.length && /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ n.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: de,
                          type: "button",
                          children: [
                            /* @__PURE__ */ n.jsx("span", { children: "More" }),
                            z()
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
        A && i && i.items && i.items.length > 0 && m && T && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !T,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(x).map((h, C) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: J(
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
                      b(!1), k(!1);
                    },
                    children: le(h)
                  }
                )
              },
              `overflow-${x + C}`
            )) })
          }
        )
      ]
    }
  );
}, Mf = ({
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
  const m = r.href && !t.href || r.href && r.href === t.href, b = m ? r.href : t.href, f = J(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), B = J(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), x = J(
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
  ) : _(), M = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, T = (p, L) => p ? L ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: L, children: p }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: p }) : null, k = () => !i?.items || i.items.length === 0 ? null : i.items.map((p, L) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: p.href,
          ...p.attributes || {},
          children: p.text
        }
      )
    },
    p.href || L
  )), A = () => o ? /* @__PURE__ */ n.jsx(Ia, { ...o }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: f,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...d,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: B, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            b ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: b, children: [
              q(),
              M(),
              m && T(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              q(),
              M(),
              m && T(r.text)
            ] }),
            r.text && !m && T(r.text, r.href)
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
            xr,
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
                children: k()
              }
            ) })
          }
        )
      ]
    }
  );
}, $f = ({
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
  ...m
}) => {
  const b = r.href && !t.href || r.href && r.href === t.href, f = b ? r.href : t.href, B = J(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), x = J(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), _ = J(
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
  ), M = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : q(), T = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, k = (p, L) => p ? L ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: L, children: p }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: p }) : null, A = (p) => {
    if (p.active || p.current) {
      const L = p.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: p.html } }) : p.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: L });
    }
    return p.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: p.html } }) : p.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: B,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...d,
      ...m,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: x, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            f ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: f, children: [
              M(),
              T(),
              b && k(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              M(),
              T(),
              b && k(r.text)
            ] }),
            r.text && !b && k(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            xr,
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
                className: J(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, u).map((p, L) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: J(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": p.active || p.current
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
                          children: A(p)
                        }
                      )
                    },
                    L
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(u).map((p, L) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: J(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": p.active || p.current
                          }
                        ),
                        children: /* @__PURE__ */ n.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: p.href,
                            ...p.active || p.current ? {
                              "aria-current": p.current ? "page" : "true"
                            } : {},
                            children: A(p)
                          }
                        )
                      },
                      `overflow-${u + L}`
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
}, To = ({
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
  ].filter(Boolean).join(" "), m = [
    "nhsuk-width-container",
    i,
    s ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), b = [
    "nhsuk-hero__heading",
    r,
    !c && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), f = c || e || a || o, B = () => {
    if (!e) return null;
    const x = { className: b };
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
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...d,
      children: [
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: f && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          B(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && f && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          B(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
To.displayName = "Hero";
const Ba = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: c,
  footerStyle: d,
  containerStyle: u
}) => {
  const m = (f, B = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: J("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": B
      }),
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: f.URL,
          target: f.newWindow ? "_blank" : void 0,
          rel: f.newWindow ? "noopener noreferrer" : void 0,
          children: f.label
        }
      )
    },
    `${f.URL}-${f.label}`
  ), b = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...c }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: J("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: J("nhsuk-footer", e), style: d, children: b ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((f) => m(f)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((f) => m(f)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((f) => m(f)) }),
              o && o.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((f) => m(f)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((f) => m(f, !0)),
              (r || []).map((f) => m(f, !0)),
              (a || []).map((f) => m(f, !0)),
              (o || []).map((f) => m(f, !0))
            ] })
          ) }),
          !b && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    b && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function Wt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Do(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function wr(e) {
  let t, r, a;
  e.length !== 2 ? (t = Wt, r = (l, c) => Wt(e(l), c), a = (l, c) => e(l) - c) : (t = e === Wt || e === Do ? e : Io, r = e, a = e);
  function o(l, c, d = 0, u = l.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const m = d + u >>> 1;
        r(l[m], c) < 0 ? d = m + 1 : u = m;
      } while (d < u);
    }
    return d;
  }
  function s(l, c, d = 0, u = l.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const m = d + u >>> 1;
        r(l[m], c) <= 0 ? d = m + 1 : u = m;
      } while (d < u);
    }
    return d;
  }
  function i(l, c, d = 0, u = l.length) {
    const m = o(l, c, d, u - 1);
    return m > d && a(l[m - 1], c) > -a(l[m], c) ? m - 1 : m;
  }
  return { left: o, center: i, right: s };
}
function Io() {
  return 0;
}
function Ro(e) {
  return e === null ? NaN : +e;
}
const Bo = wr(Wt), Fo = Bo.right;
wr(Ro).center;
const Lo = Math.sqrt(50), Eo = Math.sqrt(10), Mo = Math.sqrt(2);
function Fa(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Lo ? 10 : s >= Eo ? 5 : s >= Mo ? 2 : 1;
  let l, c, d;
  return o < 0 ? (d = Math.pow(10, -o) / i, l = Math.round(e * d), c = Math.round(t * d), l / d < e && ++l, c / d > t && --c, d = -d) : (d = Math.pow(10, o) * i, l = Math.round(e / d), c = Math.round(t / d), l * d < e && ++l, c * d > t && --c), c < l && 0.5 <= r && r < 2 ? Fa(e, t, r * 2) : [l, c, d];
}
function Or(e, t, r) {
  return t = +t, e = +e, r = +r, Fa(e, t, r)[2];
}
function Ur(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? Or(t, e, r) : Or(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function $o(e, t) {
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
function Sr(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function La(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function Lt() {
}
var Rt = 0.7, Ot = 1 / Rt, gt = "\\s*([+-]?\\d+)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Me = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ao = /^#([0-9a-f]{3,8})$/, Ho = new RegExp(`^rgb\\(${gt},${gt},${gt}\\)$`), Po = new RegExp(`^rgb\\(${Me},${Me},${Me}\\)$`), zo = new RegExp(`^rgba\\(${gt},${gt},${gt},${Bt}\\)$`), Wo = new RegExp(`^rgba\\(${Me},${Me},${Me},${Bt}\\)$`), Oo = new RegExp(`^hsl\\(${Bt},${Me},${Me}\\)$`), Uo = new RegExp(`^hsla\\(${Bt},${Me},${Me},${Bt}\\)$`), Gr = {
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
Sr(Lt, Ft, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Vr,
  // Deprecated! Use color.formatHex.
  formatHex: Vr,
  formatHex8: Go,
  formatHsl: Vo,
  formatRgb: Yr,
  toString: Yr
});
function Vr() {
  return this.rgb().formatHex();
}
function Go() {
  return this.rgb().formatHex8();
}
function Vo() {
  return Ea(this).formatHsl();
}
function Yr() {
  return this.rgb().formatRgb();
}
function Ft(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Ao.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? qr(t) : r === 3 ? new De(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Ht(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Ht(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ho.exec(e)) ? new De(t[1], t[2], t[3], 1) : (t = Po.exec(e)) ? new De(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = zo.exec(e)) ? Ht(t[1], t[2], t[3], t[4]) : (t = Wo.exec(e)) ? Ht(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Oo.exec(e)) ? Jr(t[1], t[2] / 100, t[3] / 100, 1) : (t = Uo.exec(e)) ? Jr(t[1], t[2] / 100, t[3] / 100, t[4]) : Gr.hasOwnProperty(e) ? qr(Gr[e]) : e === "transparent" ? new De(NaN, NaN, NaN, 0) : null;
}
function qr(e) {
  return new De(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ht(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new De(e, t, r, a);
}
function Yo(e) {
  return e instanceof Lt || (e = Ft(e)), e ? (e = e.rgb(), new De(e.r, e.g, e.b, e.opacity)) : new De();
}
function Gn(e, t, r, a) {
  return arguments.length === 1 ? Yo(e) : new De(e, t, r, a ?? 1);
}
function De(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
Sr(De, Gn, La(Lt, {
  brighter(e) {
    return e = e == null ? Ot : Math.pow(Ot, e), new De(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Rt : Math.pow(Rt, e), new De(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new De(it(this.r), it(this.g), it(this.b), Ut(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Kr,
  // Deprecated! Use color.formatHex.
  formatHex: Kr,
  formatHex8: qo,
  formatRgb: Zr,
  toString: Zr
}));
function Kr() {
  return `#${ot(this.r)}${ot(this.g)}${ot(this.b)}`;
}
function qo() {
  return `#${ot(this.r)}${ot(this.g)}${ot(this.b)}${ot((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Zr() {
  const e = Ut(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${it(this.r)}, ${it(this.g)}, ${it(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ut(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function it(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ot(e) {
  return e = it(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Jr(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Le(e, t, r, a);
}
function Ea(e) {
  if (e instanceof Le) return new Le(e.h, e.s, e.l, e.opacity);
  if (e instanceof Lt || (e = Ft(e)), !e) return new Le();
  if (e instanceof Le) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Le(i, l, c, e.opacity);
}
function Ko(e, t, r, a) {
  return arguments.length === 1 ? Ea(e) : new Le(e, t, r, a ?? 1);
}
function Le(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
Sr(Le, Ko, La(Lt, {
  brighter(e) {
    return e = e == null ? Ot : Math.pow(Ot, e), new Le(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Rt : Math.pow(Rt, e), new Le(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new De(
      Mn(e >= 240 ? e - 240 : e + 120, o, a),
      Mn(e, o, a),
      Mn(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Le(Xr(this.h), Pt(this.s), Pt(this.l), Ut(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ut(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Xr(this.h)}, ${Pt(this.s) * 100}%, ${Pt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Xr(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Pt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Mn(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Cr = (e) => () => e;
function Zo(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Jo(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function Xo(e) {
  return (e = +e) == 1 ? Ma : function(t, r) {
    return r - t ? Jo(t, r, e) : Cr(isNaN(t) ? r : t);
  };
}
function Ma(e, t) {
  var r = t - e;
  return r ? Zo(e, r) : Cr(isNaN(e) ? t : e);
}
const Qr = (function e(t) {
  var r = Xo(t);
  function a(o, s) {
    var i = r((o = Gn(o)).r, (s = Gn(s)).r), l = r(o.g, s.g), c = r(o.b, s.b), d = Ma(o.opacity, s.opacity);
    return function(u) {
      return o.r = i(u), o.g = l(u), o.b = c(u), o.opacity = d(u), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Qo(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function ei(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ti(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = jr(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function ni(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function Gt(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function ri(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = jr(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var Vn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $n = new RegExp(Vn.source, "g");
function ai(e) {
  return function() {
    return e;
  };
}
function si(e) {
  return function(t) {
    return e(t) + "";
  };
}
function oi(e, t) {
  var r = Vn.lastIndex = $n.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = Vn.exec(e)) && (o = $n.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: Gt(a, o) })), r = $n.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? si(c[0].x) : ai(t) : (t = c.length, function(d) {
    for (var u = 0, m; u < t; ++u) l[(m = c[u]).i] = m.x(d);
    return l.join("");
  });
}
function jr(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? Cr(t) : (r === "number" ? Gt : r === "string" ? (a = Ft(t)) ? (t = a, Qr) : oi : t instanceof Ft ? Qr : t instanceof Date ? ni : ei(t) ? Qo : Array.isArray(t) ? ti : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ri : Gt)(e, t);
}
function ii(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function li(e) {
  return function() {
    return e;
  };
}
function ci(e) {
  return +e;
}
var ea = [0, 1];
function mt(e) {
  return e;
}
function Yn(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : li(isNaN(t) ? NaN : 0.5);
}
function di(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function ui(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = Yn(o, a), s = r(i, s)) : (a = Yn(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function hi(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = Yn(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = Fo(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function fi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function mi() {
  var e = ea, t = ea, r = jr, a, o, s, i = mt, l, c, d;
  function u() {
    var b = Math.min(e.length, t.length);
    return i !== mt && (i = di(e[0], e[b - 1])), l = b > 2 ? hi : ui, c = d = null, m;
  }
  function m(b) {
    return b == null || isNaN(b = +b) ? s : (c || (c = l(e.map(a), t, r)))(a(i(b)));
  }
  return m.invert = function(b) {
    return i(o((d || (d = l(t, e.map(a), Gt)))(b)));
  }, m.domain = function(b) {
    return arguments.length ? (e = Array.from(b, ci), u()) : e.slice();
  }, m.range = function(b) {
    return arguments.length ? (t = Array.from(b), u()) : t.slice();
  }, m.rangeRound = function(b) {
    return t = Array.from(b), r = ii, u();
  }, m.clamp = function(b) {
    return arguments.length ? (i = b ? !0 : mt, u()) : i !== mt;
  }, m.interpolate = function(b) {
    return arguments.length ? (r = b, u()) : r;
  }, m.unknown = function(b) {
    return arguments.length ? (s = b, m) : s;
  }, function(b, f) {
    return a = b, o = f, u();
  };
}
function pi() {
  return mi()(mt, mt);
}
function gi(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const An = /* @__PURE__ */ new Date(), Hn = /* @__PURE__ */ new Date();
function Se(e, t, r, a) {
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
  }, o.filter = (s) => Se((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), r && (o.count = (s, i) => (An.setTime(+s), Hn.setTime(+i), e(An), e(Hn), Math.floor(r(An, Hn))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const Vt = Se(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Vt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Se((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Vt);
Vt.range;
const Ke = 1e3, Be = Ke * 60, Ze = Be * 60, Qe = Ze * 24, Nr = Qe * 7, ta = Qe * 30, Pn = Qe * 365, pt = Se((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ke);
}, (e, t) => (t - e) / Ke, (e) => e.getUTCSeconds());
pt.range;
const Tr = Se((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ke);
}, (e, t) => {
  e.setTime(+e + t * Be);
}, (e, t) => (t - e) / Be, (e) => e.getMinutes());
Tr.range;
const bi = Se((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Be);
}, (e, t) => (t - e) / Be, (e) => e.getUTCMinutes());
bi.range;
const Dr = Se((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ke - e.getMinutes() * Be);
}, (e, t) => {
  e.setTime(+e + t * Ze);
}, (e, t) => (t - e) / Ze, (e) => e.getHours());
Dr.range;
const xi = Se((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ze);
}, (e, t) => (t - e) / Ze, (e) => e.getUTCHours());
xi.range;
const Et = Se(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Be) / Qe,
  (e) => e.getDate() - 1
);
Et.range;
const Ir = Se((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Qe, (e) => e.getUTCDate() - 1);
Ir.range;
const yi = Se((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Qe, (e) => Math.floor(e / Qe));
yi.range;
function ct(e) {
  return Se((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Be) / Nr);
}
const Sn = ct(0), Yt = ct(1), vi = ct(2), _i = ct(3), bt = ct(4), ki = ct(5), wi = ct(6);
Sn.range;
Yt.range;
vi.range;
_i.range;
bt.range;
ki.range;
wi.range;
function dt(e) {
  return Se((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Nr);
}
const $a = dt(0), qt = dt(1), Si = dt(2), Ci = dt(3), xt = dt(4), ji = dt(5), Ni = dt(6);
$a.range;
qt.range;
Si.range;
Ci.range;
xt.range;
ji.range;
Ni.range;
const Rr = Se((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Rr.range;
const Ti = Se((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Ti.range;
const et = Se((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
et.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Se((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
et.range;
const lt = Se((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
lt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Se((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
lt.range;
function Di(e, t, r, a, o, s) {
  const i = [
    [pt, 1, Ke],
    [pt, 5, 5 * Ke],
    [pt, 15, 15 * Ke],
    [pt, 30, 30 * Ke],
    [s, 1, Be],
    [s, 5, 5 * Be],
    [s, 15, 15 * Be],
    [s, 30, 30 * Be],
    [o, 1, Ze],
    [o, 3, 3 * Ze],
    [o, 6, 6 * Ze],
    [o, 12, 12 * Ze],
    [a, 1, Qe],
    [a, 2, 2 * Qe],
    [r, 1, Nr],
    [t, 1, ta],
    [t, 3, 3 * ta],
    [e, 1, Pn]
  ];
  function l(d, u, m) {
    const b = u < d;
    b && ([d, u] = [u, d]);
    const f = m && typeof m.range == "function" ? m : c(d, u, m), B = f ? f.range(d, +u + 1) : [];
    return b ? B.reverse() : B;
  }
  function c(d, u, m) {
    const b = Math.abs(u - d) / m, f = wr(([, , _]) => _).right(i, b);
    if (f === i.length) return e.every(Ur(d / Pn, u / Pn, m));
    if (f === 0) return Vt.every(Math.max(Ur(d, u, m), 1));
    const [B, x] = i[b / i[f - 1][2] < i[f][2] / b ? f - 1 : f];
    return B.every(x);
  }
  return [l, c];
}
const [Ii, Ri] = Di(et, Rr, Sn, Et, Dr, Tr);
function zn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Wn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Nt(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Bi(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, d = Tt(o), u = Dt(o), m = Tt(s), b = Dt(s), f = Tt(i), B = Dt(i), x = Tt(l), _ = Dt(l), q = Tt(c), M = Dt(c), T = {
    a: re,
    A: ie,
    b: de,
    B: S,
    c: null,
    d: ia,
    e: ia,
    f: tl,
    g: ul,
    G: fl,
    H: Xi,
    I: Qi,
    j: el,
    L: Aa,
    m: nl,
    M: rl,
    p: Q,
    q: $,
    Q: da,
    s: ua,
    S: al,
    u: sl,
    U: ol,
    V: il,
    w: ll,
    W: cl,
    x: null,
    X: null,
    y: dl,
    Y: hl,
    Z: ml,
    "%": ca
  }, k = {
    a: O,
    A: z,
    b: le,
    B: h,
    c: null,
    d: la,
    e: la,
    f: xl,
    g: Tl,
    G: Il,
    H: pl,
    I: gl,
    j: bl,
    L: Pa,
    m: yl,
    M: vl,
    p: C,
    q: E,
    Q: da,
    s: ua,
    S: _l,
    u: kl,
    U: wl,
    V: Sl,
    w: Cl,
    W: jl,
    x: null,
    X: null,
    y: Nl,
    Y: Dl,
    Z: Rl,
    "%": ca
  }, A = {
    a: R,
    A: y,
    b: N,
    B: W,
    c: oe,
    d: sa,
    e: sa,
    f: qi,
    g: aa,
    G: ra,
    H: oa,
    I: oa,
    j: Ui,
    L: Yi,
    m: Oi,
    M: Gi,
    p: w,
    q: Wi,
    Q: Zi,
    s: Ji,
    S: Vi,
    u: $i,
    U: Ai,
    V: Hi,
    w: Mi,
    W: Pi,
    x: P,
    X,
    y: aa,
    Y: ra,
    Z: zi,
    "%": Ki
  };
  T.x = p(r, T), T.X = p(a, T), T.c = p(t, T), k.x = p(r, k), k.X = p(a, k), k.c = p(t, k);
  function p(F, U) {
    return function(Y) {
      var j = [], ue = -1, ae = 0, ne = F.length, G, g, v;
      for (Y instanceof Date || (Y = /* @__PURE__ */ new Date(+Y)); ++ue < ne; )
        F.charCodeAt(ue) === 37 && (j.push(F.slice(ae, ue)), (g = na[G = F.charAt(++ue)]) != null ? G = F.charAt(++ue) : g = G === "e" ? " " : "0", (v = U[G]) && (G = v(Y, g)), j.push(G), ae = ue + 1);
      return j.push(F.slice(ae, ue)), j.join("");
    };
  }
  function L(F, U) {
    return function(Y) {
      var j = Nt(1900, void 0, 1), ue = D(j, F, Y += "", 0), ae, ne;
      if (ue != Y.length) return null;
      if ("Q" in j) return new Date(j.Q);
      if ("s" in j) return new Date(j.s * 1e3 + ("L" in j ? j.L : 0));
      if (U && !("Z" in j) && (j.Z = 0), "p" in j && (j.H = j.H % 12 + j.p * 12), j.m === void 0 && (j.m = "q" in j ? j.q : 0), "V" in j) {
        if (j.V < 1 || j.V > 53) return null;
        "w" in j || (j.w = 1), "Z" in j ? (ae = Wn(Nt(j.y, 0, 1)), ne = ae.getUTCDay(), ae = ne > 4 || ne === 0 ? qt.ceil(ae) : qt(ae), ae = Ir.offset(ae, (j.V - 1) * 7), j.y = ae.getUTCFullYear(), j.m = ae.getUTCMonth(), j.d = ae.getUTCDate() + (j.w + 6) % 7) : (ae = zn(Nt(j.y, 0, 1)), ne = ae.getDay(), ae = ne > 4 || ne === 0 ? Yt.ceil(ae) : Yt(ae), ae = Et.offset(ae, (j.V - 1) * 7), j.y = ae.getFullYear(), j.m = ae.getMonth(), j.d = ae.getDate() + (j.w + 6) % 7);
      } else ("W" in j || "U" in j) && ("w" in j || (j.w = "u" in j ? j.u % 7 : "W" in j ? 1 : 0), ne = "Z" in j ? Wn(Nt(j.y, 0, 1)).getUTCDay() : zn(Nt(j.y, 0, 1)).getDay(), j.m = 0, j.d = "W" in j ? (j.w + 6) % 7 + j.W * 7 - (ne + 5) % 7 : j.w + j.U * 7 - (ne + 6) % 7);
      return "Z" in j ? (j.H += j.Z / 100 | 0, j.M += j.Z % 100, Wn(j)) : zn(j);
    };
  }
  function D(F, U, Y, j) {
    for (var ue = 0, ae = U.length, ne = Y.length, G, g; ue < ae; ) {
      if (j >= ne) return -1;
      if (G = U.charCodeAt(ue++), G === 37) {
        if (G = U.charAt(ue++), g = A[G in na ? U.charAt(ue++) : G], !g || (j = g(F, Y, j)) < 0) return -1;
      } else if (G != Y.charCodeAt(j++))
        return -1;
    }
    return j;
  }
  function w(F, U, Y) {
    var j = d.exec(U.slice(Y));
    return j ? (F.p = u.get(j[0].toLowerCase()), Y + j[0].length) : -1;
  }
  function R(F, U, Y) {
    var j = f.exec(U.slice(Y));
    return j ? (F.w = B.get(j[0].toLowerCase()), Y + j[0].length) : -1;
  }
  function y(F, U, Y) {
    var j = m.exec(U.slice(Y));
    return j ? (F.w = b.get(j[0].toLowerCase()), Y + j[0].length) : -1;
  }
  function N(F, U, Y) {
    var j = q.exec(U.slice(Y));
    return j ? (F.m = M.get(j[0].toLowerCase()), Y + j[0].length) : -1;
  }
  function W(F, U, Y) {
    var j = x.exec(U.slice(Y));
    return j ? (F.m = _.get(j[0].toLowerCase()), Y + j[0].length) : -1;
  }
  function oe(F, U, Y) {
    return D(F, t, U, Y);
  }
  function P(F, U, Y) {
    return D(F, r, U, Y);
  }
  function X(F, U, Y) {
    return D(F, a, U, Y);
  }
  function re(F) {
    return i[F.getDay()];
  }
  function ie(F) {
    return s[F.getDay()];
  }
  function de(F) {
    return c[F.getMonth()];
  }
  function S(F) {
    return l[F.getMonth()];
  }
  function Q(F) {
    return o[+(F.getHours() >= 12)];
  }
  function $(F) {
    return 1 + ~~(F.getMonth() / 3);
  }
  function O(F) {
    return i[F.getUTCDay()];
  }
  function z(F) {
    return s[F.getUTCDay()];
  }
  function le(F) {
    return c[F.getUTCMonth()];
  }
  function h(F) {
    return l[F.getUTCMonth()];
  }
  function C(F) {
    return o[+(F.getUTCHours() >= 12)];
  }
  function E(F) {
    return 1 + ~~(F.getUTCMonth() / 3);
  }
  return {
    format: function(F) {
      var U = p(F += "", T);
      return U.toString = function() {
        return F;
      }, U;
    },
    parse: function(F) {
      var U = L(F += "", !1);
      return U.toString = function() {
        return F;
      }, U;
    },
    utcFormat: function(F) {
      var U = p(F += "", k);
      return U.toString = function() {
        return F;
      }, U;
    },
    utcParse: function(F) {
      var U = L(F += "", !0);
      return U.toString = function() {
        return F;
      }, U;
    }
  };
}
var na = { "-": "", _: " ", 0: "0" }, Ce = /^\s*\d+/, Fi = /^%/, Li = /[\\^$*+?|[\]().{}]/g;
function be(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function Ei(e) {
  return e.replace(Li, "\\$&");
}
function Tt(e) {
  return new RegExp("^(?:" + e.map(Ei).join("|") + ")", "i");
}
function Dt(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Mi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function $i(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Ai(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function Hi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Pi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function ra(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function aa(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function zi(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Wi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function Oi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function sa(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Ui(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function oa(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Gi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Vi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Yi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function qi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Ki(e, t, r) {
  var a = Fi.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Zi(e, t, r) {
  var a = Ce.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Ji(e, t, r) {
  var a = Ce.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function ia(e, t) {
  return be(e.getDate(), t, 2);
}
function Xi(e, t) {
  return be(e.getHours(), t, 2);
}
function Qi(e, t) {
  return be(e.getHours() % 12 || 12, t, 2);
}
function el(e, t) {
  return be(1 + Et.count(et(e), e), t, 3);
}
function Aa(e, t) {
  return be(e.getMilliseconds(), t, 3);
}
function tl(e, t) {
  return Aa(e, t) + "000";
}
function nl(e, t) {
  return be(e.getMonth() + 1, t, 2);
}
function rl(e, t) {
  return be(e.getMinutes(), t, 2);
}
function al(e, t) {
  return be(e.getSeconds(), t, 2);
}
function sl(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ol(e, t) {
  return be(Sn.count(et(e) - 1, e), t, 2);
}
function Ha(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? bt(e) : bt.ceil(e);
}
function il(e, t) {
  return e = Ha(e), be(bt.count(et(e), e) + (et(e).getDay() === 4), t, 2);
}
function ll(e) {
  return e.getDay();
}
function cl(e, t) {
  return be(Yt.count(et(e) - 1, e), t, 2);
}
function dl(e, t) {
  return be(e.getFullYear() % 100, t, 2);
}
function ul(e, t) {
  return e = Ha(e), be(e.getFullYear() % 100, t, 2);
}
function hl(e, t) {
  return be(e.getFullYear() % 1e4, t, 4);
}
function fl(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? bt(e) : bt.ceil(e), be(e.getFullYear() % 1e4, t, 4);
}
function ml(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + be(t / 60 | 0, "0", 2) + be(t % 60, "0", 2);
}
function la(e, t) {
  return be(e.getUTCDate(), t, 2);
}
function pl(e, t) {
  return be(e.getUTCHours(), t, 2);
}
function gl(e, t) {
  return be(e.getUTCHours() % 12 || 12, t, 2);
}
function bl(e, t) {
  return be(1 + Ir.count(lt(e), e), t, 3);
}
function Pa(e, t) {
  return be(e.getUTCMilliseconds(), t, 3);
}
function xl(e, t) {
  return Pa(e, t) + "000";
}
function yl(e, t) {
  return be(e.getUTCMonth() + 1, t, 2);
}
function vl(e, t) {
  return be(e.getUTCMinutes(), t, 2);
}
function _l(e, t) {
  return be(e.getUTCSeconds(), t, 2);
}
function kl(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function wl(e, t) {
  return be($a.count(lt(e) - 1, e), t, 2);
}
function za(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? xt(e) : xt.ceil(e);
}
function Sl(e, t) {
  return e = za(e), be(xt.count(lt(e), e) + (lt(e).getUTCDay() === 4), t, 2);
}
function Cl(e) {
  return e.getUTCDay();
}
function jl(e, t) {
  return be(qt.count(lt(e) - 1, e), t, 2);
}
function Nl(e, t) {
  return be(e.getUTCFullYear() % 100, t, 2);
}
function Tl(e, t) {
  return e = za(e), be(e.getUTCFullYear() % 100, t, 2);
}
function Dl(e, t) {
  return be(e.getUTCFullYear() % 1e4, t, 4);
}
function Il(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? xt(e) : xt.ceil(e), be(e.getUTCFullYear() % 1e4, t, 4);
}
function Rl() {
  return "+0000";
}
function ca() {
  return "%";
}
function da(e) {
  return +e;
}
function ua(e) {
  return Math.floor(+e / 1e3);
}
var ht, Wa;
Bl({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Bl(e) {
  return ht = Bi(e), Wa = ht.format, ht.parse, ht.utcFormat, ht.utcParse, ht;
}
function Fl(e) {
  return new Date(e);
}
function Ll(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Oa(e, t, r, a, o, s, i, l, c, d) {
  var u = pi(), m = u.invert, b = u.domain, f = d(".%L"), B = d(":%S"), x = d("%I:%M"), _ = d("%I %p"), q = d("%a %d"), M = d("%b %d"), T = d("%B"), k = d("%Y");
  function A(p) {
    return (c(p) < p ? f : l(p) < p ? B : i(p) < p ? x : s(p) < p ? _ : a(p) < p ? o(p) < p ? q : M : r(p) < p ? T : k)(p);
  }
  return u.invert = function(p) {
    return new Date(m(p));
  }, u.domain = function(p) {
    return arguments.length ? b(Array.from(p, Ll)) : b().map(Fl);
  }, u.ticks = function(p) {
    var L = b();
    return e(L[0], L[L.length - 1], p ?? 10);
  }, u.tickFormat = function(p, L) {
    return L == null ? A : d(L);
  }, u.nice = function(p) {
    var L = b();
    return (!p || typeof p.range != "function") && (p = t(L[0], L[L.length - 1], p ?? 10)), p ? b(gi(L, p)) : u;
  }, u.copy = function() {
    return fi(u, Oa(e, t, r, a, o, s, i, l, c, d));
  }, u;
}
function El() {
  return $o.apply(Oa(Ii, Ri, et, Rr, Sn, Et, Dr, Tr, pt, Wa).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Ml({
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
  const d = xe(null), [u, m] = ge(!1), [b, f] = ge(!1), B = t(e.start), x = t(e.end), _ = Math.max(x - B, 20), q = () => {
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
  }, M = e.progress ? _ * e.progress / 100 : 0, T = () => {
    r?.(e);
  }, k = () => {
    a?.(e);
  }, A = (N) => {
    N.key === "Enter" ? (N.preventDefault(), T()) : N.key === " " && (N.preventDefault(), k());
  }, p = () => {
    m(!0);
  }, L = () => {
    m(!1);
  }, D = () => {
    f(!0), l?.();
  }, w = () => {
    f(!1);
  }, R = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (b || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), y = {
    "--task-left": `${B}px`,
    "--task-width": `${_}px`,
    "--task-color": q(),
    left: `${B}px`,
    width: `${_}px`,
    backgroundColor: q()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: d,
      "data-task-index": s,
      className: R,
      style: y,
      onClick: T,
      onDoubleClick: k,
      onKeyDown: A,
      onMouseDown: p,
      onMouseUp: L,
      onFocus: D,
      onBlur: w,
      "aria-label": c || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${M}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function $l({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let f = e.getTime(); f <= t.getTime(); f += 864e5)
    a.push(new Date(f));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = ge(-1), c = xe(null), d = (f) => {
    if (f.key === "ArrowLeft") {
      f.preventDefault();
      const B = Math.max(0, i === -1 ? 0 : i - 1);
      l(B), b(B);
    } else if (f.key === "ArrowRight") {
      f.preventDefault();
      const B = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(B), b(B);
    } else if (f.key === "ArrowDown") {
      f.preventDefault();
      const B = document.querySelector(".gantt-row .timeline-container");
      B && B.focus();
    } else if (f.key === "Home")
      f.preventDefault(), l(0), b(0);
    else if (f.key === "End") {
      f.preventDefault();
      const B = a.length - 1;
      l(B), b(B);
    }
  }, u = (f) => {
    if (f.key === "ArrowDown") {
      f.preventDefault();
      const B = document.querySelector(".gantt-row .resource-label");
      B && B.focus();
    } else if (f.key === "ArrowRight") {
      f.preventDefault();
      const B = c.current;
      B && B.focus();
    }
  }, m = () => {
    i === -1 && (l(0), setTimeout(() => b(0), 0));
  }, b = (f) => {
    const B = c.current?.querySelector(`[data-date-index="${f}"]`);
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
            onKeyDown: d,
            onFocus: m,
            children: a.map((f, B) => {
              const x = f.getTime() === s.getTime(), _ = i === B;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": B,
                  className: `date-column ${x ? "today" : ""} ${_ ? "focused" : ""}`,
                  tabIndex: _ ? 0 : -1,
                  role: "button",
                  "aria-label": `${f.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${x ? " (Today)" : ""}`,
                  onFocus: () => l(B),
                  onKeyDown: d,
                  children: f.toLocaleDateString("en-GB", {
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
function Al({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = ge(!1), [d, u] = ge(-1), m = xe(null);
  ve(() => {
    l && d >= 0 && t.length > 0 && setTimeout(() => {
      m.current?.querySelector(`[data-task-index="${d}"]`)?.focus();
    }, 0);
  }, [l, d, t.length]);
  const b = (x) => {
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
          t.length > 0 && (x.preventDefault(), c(!0), u(0));
          break;
      }
      return;
    }
    switch (x.key) {
      case "ArrowLeft":
        x.preventDefault();
        const _ = Math.max(0, d - 1);
        u(_), m.current?.querySelector(`[data-task-index="${_}"]`)?.focus();
        break;
      case "ArrowRight":
        x.preventDefault();
        const M = Math.min(t.length - 1, d + 1);
        u(M), m.current?.querySelector(`[data-task-index="${M}"]`)?.focus();
        break;
      case "Enter":
        x.preventDefault(), d >= 0 && a?.(t[d]);
        break;
      case " ":
        x.preventDefault(), d >= 0 && o?.(t[d]);
        break;
      case "Escape":
        x.preventDefault(), c(!1), u(-1), m.current?.focus();
        break;
    }
  }, f = (x) => {
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
    l && u(x);
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
            onKeyDown: f,
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
            onKeyDown: b,
            onFocus: () => {
              l || u(-1);
            },
            children: t.map((x, _) => /* @__PURE__ */ n.jsx(
              Ml,
              {
                task: x,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && d === _,
                taskIndex: _,
                tabIndex: l && d === _ ? 0 : -1,
                onFocus: () => B(_)
              },
              x.id
            ))
          }
        )
      ]
    }
  );
}
function Af({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = xe(null), [l, c] = ge(800), d = _e(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const x = new Date(r);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : x;
  }, [r]), u = _e(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const x = new Date(a);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : x;
  }, [a]), m = _e(() => Math.ceil((u.getTime() - d.getTime()) / 864e5) + 1, [d, u]);
  ve(() => {
    if (!i.current) return;
    const x = new ResizeObserver((_) => {
      const q = _[0];
      q && c(Math.max(q.contentRect.width - 220, 400));
    });
    return x.observe(i.current), () => x.disconnect();
  }, []);
  const b = _e(
    () => El().domain([d, u]).range([0, l]),
    [d, u, l]
  ), f = _e(() => {
    const x = /* @__PURE__ */ new Map();
    return t.forEach((_) => {
      const q = x.get(_.resourceId) || [];
      q.push(_), x.set(_.resourceId, q);
    }), x;
  }, [t]), B = (x) => {
    if (x.target === x.currentTarget)
      switch (x.key) {
        case "ArrowDown":
          x.preventDefault();
          const _ = i.current?.querySelector(".gantt-row .resource-label");
          _ && _.focus();
          break;
        case "Home":
          x.preventDefault();
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
      "aria-colcount": m + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: B,
      children: [
        /* @__PURE__ */ n.jsx($l, { viewStart: d, viewEnd: u, dateCount: m }),
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
            children: e.map((x, _) => /* @__PURE__ */ n.jsx(
              Al,
              {
                resource: x,
                tasks: f.get(x.id) || [],
                scale: b,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: _,
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
const Kt = ({
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
) }), Hl = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? Re.Children.toArray(t).filter(
    (_) => Re.isValidElement(_) && (_.type === Kt || _.type?.displayName === "BreadcrumbItem")
  ).map((_) => ({
    text: typeof _.props.children == "string" ? _.props.children : String(_.props.children),
    href: _.props.href,
    active: _.props.active,
    attributes: _.props.attributes
  })) : [], d = () => t ? c() : o && s ? [{ href: o, text: s }] : e, u = () => {
    const x = d();
    if (x && x.length > 0) {
      const _ = x.slice().reverse().find((q) => q.href && !q.active);
      if (_)
        return { href: _.href, text: _.text };
    }
    return { text: "Home" };
  }, m = d(), b = u(), f = J(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), B = a;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: f,
      "aria-label": B,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          Re.Children.map(t, (x, _) => Re.isValidElement(x) && (x.type === Kt || x.type?.displayName === "BreadcrumbItem") ? Re.cloneElement(x, { key: _ }) : null)
        ) : (
          // Render from items array
          m?.filter((x) => x.active || !!x.href).map((x, _) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: x.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...x.attributes || {},
              children: x.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: x.href,
              role: "link",
              ...x.attributes || {},
              children: x.text
            }
          ) }, _))
        ) }),
        b.href && /* @__PURE__ */ n.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ n.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: b.href,
            role: "link",
            "aria-label": `Back to ${b.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              b.text
            ]
          }
        ) })
      ]
    }
  );
}, Pl = Hl;
Pl.Item = Kt;
Kt.displayName = "BreadcrumbItem";
const Ua = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [o, s] = ge(!1);
  ve(() => {
    s(!0);
  }, []), ve(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (c) => {
      const d = c.target, u = d.getAttribute("href");
      if (u && u.startsWith("#")) {
        const m = document.querySelector(u);
        if (m) {
          m.hasAttribute("tabindex") || m.setAttribute("tabindex", "-1"), m.focus(), m.classList.add("nhsuk-skip-link-focused-element");
          const b = window.setTimeout(() => {
            m.classList.remove("nhsuk-skip-link-focused-element"), m.getAttribute("tabindex") === "-1" && m.removeAttribute("tabindex");
          }, 3e3);
          d.__nhsSkipLinkTimeout = b;
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
  const i = J("nhsuk-skip-link", r);
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
}, Hf = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = J("nhsuk-pagination", o);
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
}, Pf = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = J("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, Ga = Re.forwardRef(({
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
  ...u
}, m) => {
  const b = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    u.className
  ].filter(Boolean).join(" "), f = [
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
    const M = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Xe,
      {
        level: a,
        className: B,
        children: M()
      }
    );
  }, _ = () => u.children ? u.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, q = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      className: b,
      ref: m,
      children: [
        c && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: d || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: f, children: [
          x(),
          _(),
          q()
        ] })
      ]
    }
  );
});
Ga.displayName = "Card";
const zf = ({
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
}, Wf = ({
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
}, Of = ({
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
  "aria-label": m,
  "aria-labelledby": b,
  "aria-describedby": f
}) => {
  const B = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), x = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), _ = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const M = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], T = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        M,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Xe,
      {
        level: a,
        className: x,
        children: T
      }
    );
  }, q = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: B,
      "data-testid": d,
      id: u,
      "aria-label": m,
      "aria-labelledby": b,
      "aria-describedby": f,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          _(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: q() })
      ]
    }
  );
}, zl = ({
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
  const d = J(
    "nhsuk-panel",
    t
  ), u = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Xe,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Xe,
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
  return /* @__PURE__ */ n.jsxs("div", { className: d, id: e, ...c, children: [
    u(),
    m()
  ] });
}, Uf = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = J("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, Gf = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = J(
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
}, Vf = ({
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
  classes: m,
  attributes: b,
  "data-testid": f
}) => {
  const B = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), x = J(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), _ = J(m), q = (k, A) => {
    const p = J("nhsuk-table__header", {
      [`nhsuk-table__header--${k.format}`]: k.format
    }, k.classes), L = {
      scope: "col",
      ...k.colspan && { colSpan: k.colspan },
      ...k.rowspan && { rowSpan: k.rowspan },
      ...s && { role: "columnheader" },
      ...k.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: p, ...L, children: k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text }, A);
  }, M = (k, A, p) => {
    const L = o && p, D = J(
      L ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${L ? "header" : "cell"}--${k.format}`]: k.format
      },
      k.classes
    ), w = {
      ...L && { scope: "row" },
      ...k.colspan && { colSpan: k.colspan },
      ...k.rowspan && { rowSpan: k.rowspan },
      ...s && {
        role: L ? "rowheader" : "cell",
        ...k.header && { "data-label": k.header }
      },
      ...k.attributes
    }, R = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && k.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        k.header,
        " "
      ] }),
      k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text
    ] }), y = L ? "th" : "td";
    return /* @__PURE__ */ n.jsx(y, { className: D, ...w, children: R }, A);
  }, T = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: x,
      ...s && { role: "table" },
      ...b,
      ...f && { "data-testid": f },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: B, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((k, A) => q(k, A)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((k, A) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: k.map(
              (p, L) => M(p, L, L === 0)
            )
          },
          A
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(zl, { className: d, children: [
    i && /* @__PURE__ */ n.jsx(Xe, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    T()
  ] }) : _ ? /* @__PURE__ */ n.jsx("div", { className: _, children: T() }) : T();
}, Yf = yt(({
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
  ...m
}, b) => {
  const f = r !== void 0, [B, x] = ge(() => t || e[0]?.id || ""), _ = f ? r : B, q = xe(null), M = xe(/* @__PURE__ */ new Map()), T = ee((R) => {
    f || x(R), a?.(R);
  }, [f, a]), k = ee((R) => {
    o?.(R), l && T(R);
  }, [o, l, T]), A = ee((R, y) => {
    const N = e.filter((P) => !P.disabled).map((P) => P.id), W = N.indexOf(y);
    let oe = null;
    switch (R.key) {
      case "ArrowLeft":
        oe = W > 0 ? W - 1 : N.length - 1;
        break;
      case "ArrowRight":
        oe = W < N.length - 1 ? W + 1 : 0;
        break;
      case "Home":
        oe = 0;
        break;
      case "End":
        oe = N.length - 1;
        break;
      case "Escape":
        R.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (oe !== null) {
      R.preventDefault();
      const P = N[oe], X = M.current.get(P);
      X && (X.focus(), k(P));
    }
  }, [e, k, i]), p = ee((R, y) => {
    y ? M.current.set(R, y) : M.current.delete(R);
  }, []), L = ee((R) => {
    const y = M.current.get(R);
    y && y.focus();
  }, []);
  ka(b, () => ({
    focusTab: L,
    getActiveTab: () => _,
    getTabListElement: () => q.current
  }), [L, _]);
  const D = ee((R) => {
    const y = R.relatedTarget;
    q.current?.contains(y) || s?.();
  }, [s]), w = J("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: w,
      id: d,
      "data-testid": u,
      ...m,
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
                onBlur: D,
                children: e.map((R) => {
                  const y = R.id === _, N = R.disabled, W = J("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": y,
                    "nhsuk-tabs__list-item--disabled": N
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: W, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (oe) => p(R.id, oe),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": y,
                      "aria-controls": `${R.id}-panel`,
                      id: `${R.id}-tab`,
                      tabIndex: y ? 0 : -1,
                      disabled: N,
                      onClick: () => !N && T(R.id),
                      onKeyDown: (oe) => !N && A(oe, R.id),
                      onFocus: () => !N && k(R.id),
                      ...R.attributes,
                      children: R.label
                    }
                  ) }, R.id);
                })
              }
            )
          }
        ),
        e.map((R) => {
          const y = R.id === _;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${R.id}-tab`,
              id: `${R.id}-panel`,
              hidden: !y,
              children: R.content
            },
            R.id
          );
        })
      ]
    }
  );
}), Wl = yt(
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
    ].filter(Boolean).join(" "), m = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let b;
    return l ? b = l : a ? b = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (b = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: d,
        id: i,
        className: u,
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: m }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: b })
        ]
      }
    );
  }
);
Wl.displayName = "Details";
const Ol = yt(
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
    ), m = (f) => t === "cross" && !a ? `do not ${f}` : f, b = () => /* @__PURE__ */ n.jsx(
      Xe,
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
          b(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: d.join(" "), role: "list", children: r.map((f, B) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            m(f.item)
          ] }, B)) }) })
        ]
      }
    );
  }
);
Ol.displayName = "DoDontList";
const Ul = yt(
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
    ].filter(Boolean).join(" "), m = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let b;
    return l ? b = l : a ? b = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (b = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: d,
        id: i,
        className: u,
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: m }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: b })
        ]
      }
    );
  }
);
Ul.displayName = "Expander";
const Gl = yt(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const d = c + 1, u = `${t}-${d}-hint`, m = `${t}-${d}-status`, b = !!l.href, f = [
        "nhsuk-task-list__item",
        b && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), B = [
        l.hint && u,
        m
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Vl,
        {
          item: l,
          itemClasses: f,
          hasLink: b,
          hintId: u,
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
), Vl = ({
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
    return e.status.tag ? u = /* @__PURE__ */ n.jsx(Je, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ n.jsx("div", { className: d, id: o, children: u });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
Gl.displayName = "TaskList";
const qf = ({
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
        _a(
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
}, Kf = ({
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
}, Yl = ({
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
    /* @__PURE__ */ n.jsx(Xe, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, Zf = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(_o, { children: /* @__PURE__ */ n.jsx(It, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    kr,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ n.jsx(Yl, { ...o })
    },
    s
  )) }) }) });
}, ql = Re.forwardRef(
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
    className: m,
    tableClassName: b,
    bordered: f = !1,
    striped: B = !1,
    responsive: x = !1,
    tableType: _ = "default"
  }, q) => {
    const M = xe(null), T = xe(null), k = xe(null);
    Re.useImperativeHandle(q, () => M.current, []);
    const [A, p] = ge(0), [L, D] = ge(0), [w, R] = ge("headers"), [y, N] = ge("browse"), W = t.length, oe = e.length, P = _e(() => !r || r.length === 0 ? e : [...e].sort(($, O) => {
      for (const { key: z, direction: le } of r) {
        const h = $[z], C = O[z];
        if (h == null && C == null) continue;
        if (h == null) return 1;
        if (C == null) return -1;
        let E = 0;
        if (typeof h == "number" && typeof C == "number" ? E = h - C : E = String(h).localeCompare(String(C)), E !== 0)
          return le === "asc" ? E : -E;
      }
      return 0;
    }), [e, r]), X = ee(($, O) => {
      setTimeout(() => {
        const z = M.current?.querySelector(
          `tbody tr:nth-child(${$ + 1}) td:nth-child(${O + 1})`
        );
        z && (z.focus(), typeof z.scrollIntoView == "function" && z.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), re = ee(($) => {
      setTimeout(() => {
        const O = M.current?.querySelector(`th:nth-child(${$ + 1})`);
        O && (O.focus(), typeof O.scrollIntoView == "function" && O.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ie = ee(($) => {
      a?.($);
    }, [a]), de = ee(($) => {
      s?.($);
    }, [s]), S = ee(($) => {
      const { key: O } = $;
      switch (O) {
        case "Enter":
          if ($.preventDefault(), w === "headers" && y === "browse")
            N("navigate"), re(L);
          else if (w === "headers" && y === "navigate") {
            const z = t[L];
            z && ie(z.key);
          } else w === "cells" && y === "browse" ? (N("navigate"), X(A, L)) : w === "cells" && y === "navigate" && de(A);
          break;
        case "Escape":
          $.preventDefault(), (w === "headers" && y === "navigate" || w === "cells" && y === "navigate") && N("browse");
          break;
        case "ArrowLeft":
          if ($.preventDefault(), y === "navigate" || y === "browse" && w === "headers") {
            if (w === "headers") {
              const z = Math.max(0, L - 1);
              D(z), re(z);
            } else if (w === "cells") {
              const z = Math.max(0, L - 1);
              D(z), X(A, z);
            }
          }
          break;
        case "ArrowRight":
          if ($.preventDefault(), y === "navigate" || y === "browse" && w === "headers") {
            if (w === "headers") {
              const z = Math.min(W - 1, L + 1);
              D(z), re(z);
            } else if (w === "cells") {
              const z = Math.min(W - 1, L + 1);
              D(z), X(A, z);
            }
          }
          break;
        case "ArrowUp":
          if ($.preventDefault(), w === "cells") {
            if (y === "browse") {
              const z = Math.max(0, A - 1);
              p(z), X(z, 0), D(0);
            } else if (y === "navigate")
              if (A > 0) {
                const z = A - 1;
                p(z), X(z, L);
              } else
                R("headers"), N("browse"), re(L);
          }
          break;
        case "ArrowDown":
          if ($.preventDefault(), w === "headers" && y === "browse")
            R("cells"), p(0), D(0), X(0, 0);
          else if (w === "cells") {
            const z = oe - 1;
            if (y === "browse") {
              const le = Math.min(z, A + 1);
              p(le), X(le, 0), D(0);
            } else if (y === "navigate" && A < z) {
              const le = A + 1;
              p(le), X(le, L);
            }
          }
          break;
        case "Home":
          $.preventDefault(), w === "headers" ? (D(0), re(0)) : w === "cells" && ($.ctrlKey ? (p(0), D(0), X(0, 0)) : (D(0), X(A, 0)));
          break;
        case "End":
          if ($.preventDefault(), w === "headers") {
            const z = W - 1;
            D(z), re(z);
          } else if (w === "cells")
            if ($.ctrlKey) {
              const z = oe - 1, le = W - 1;
              p(z), D(le), X(z, le);
            } else {
              const z = W - 1;
              D(z), X(A, z);
            }
          break;
        case " ":
          if ($.preventDefault(), w === "headers" && y === "navigate") {
            const z = t[L];
            z && ie(z.key);
          } else w === "cells" && y === "navigate" && de(A);
          break;
      }
    }, [
      w,
      y,
      L,
      A,
      W,
      oe,
      t,
      X,
      re,
      ie,
      de
    ]);
    ve(() => {
      const $ = M.current;
      if ($)
        return $.addEventListener("keydown", S), () => $.removeEventListener("keydown", S);
    }, [S]);
    const Q = J(
      "nhsuk-table",
      b,
      {
        "nhsuk-table--responsive": x,
        "nhsuk-table--bordered": f,
        "nhsuk-table--striped": B,
        "nhsuk-table--compact": _ === "compact"
      },
      m
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: M,
        className: Q,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": d,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: T, role: "row", children: t.map(($, O) => {
            const z = r?.find((C) => C.key === $.key), le = !!z, h = w === "headers" && L === O;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: J("sortable-header", {
                  "sortable-header--focused": h
                }),
                role: "columnheader",
                tabIndex: h ? 0 : -1,
                onClick: () => ie($.key),
                onKeyDown: (C) => {
                  (C.key === "Enter" || C.key === " ") && (C.preventDefault(), ie($.key));
                },
                "aria-sort": le ? z?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: $.label }),
                  le && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((C) => C.key === $.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: z?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              $.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: k, className: "nhsuk-table__body", role: "rowgroup", children: P.map(($, O) => {
            const z = o === O, le = w === "cells" && A === O;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: J("data-row", {
                  "data-row--selected": z,
                  "data-row--focused": le
                }),
                "aria-selected": z,
                children: t.map((h, C) => {
                  const E = h.tableRenderer ? h.tableRenderer($) : h.render ? h.render($) : $[h.key], F = w === "cells" && A === O && L === C, U = () => typeof E == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: E ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: E ? "Yes" : "No" })
                  ] }) : String(E ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: J("data-cell", {
                        "data-cell--focused": F
                      }),
                      tabIndex: F ? 0 : -1,
                      onClick: () => de(O),
                      children: U()
                    },
                    h.key
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
ql.displayName = "AriaDataGrid";
const Va = ({
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
  const m = xe(null), b = xe(null), f = xe(null), B = ee((w, R) => {
    c || (b.current = R, w.dataTransfer.effectAllowed = "move", w.dataTransfer.setData("text/plain", R));
  }, [c]), x = ee((w, R) => {
    c || b.current === R || (w.preventDefault(), w.dataTransfer.dropEffect = "move", f.current = R);
  }, [c]), _ = ee((w, R) => {
    if (c) return;
    w.preventDefault();
    const y = b.current;
    if (!y || y === R) return;
    const N = e.findIndex((oe) => oe.key === y), W = e.findIndex((oe) => oe.key === R);
    if (N !== -1 && W !== -1) {
      const oe = [...e], [P] = oe.splice(N, 1);
      oe.splice(W, 0, P), r(oe);
    }
    b.current = null, f.current = null;
  }, [c, e, r]), q = ee(() => {
    b.current = null, f.current = null;
  }, []), M = ee((w) => {
    const R = t.find((y) => y.key === w);
    return R ? R.label : w;
  }, [t]), T = ee((w) => ["red", "orange", "blue", "aqua-green", "grey"][w] || "grey", []), k = ee((w) => {
    if (c) return;
    const R = e.map(
      (y) => y.key === w ? { ...y, direction: y.direction === "asc" ? "desc" : "asc" } : y
    );
    r(R);
  }, [e, r, c]), A = ee((w) => {
    if (c) return;
    const R = e.filter((y) => y.key !== w);
    r(R);
  }, [e, r, c]), p = ee(() => {
    c || r([]);
  }, [r, c]), L = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const w = e.map((R, y) => {
      const N = R.direction === "asc" ? "ascending" : "descending";
      return `${y + 1}. ${M(R.key)} (${N})`;
    });
    if (w.length === 1)
      return `Sorted by: ${w[0]}`;
    if (w.length === 2)
      return `Sorted by: ${w.join(" and ")}`;
    {
      const R = w.pop();
      return `Sorted by: ${w.join(", ")}, and ${R}`;
    }
  }, D = _e(() => {
    const w = ["sort-description"];
    return l && w.push("sort-help"), u && w.push(u), w.join(" ");
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
          "aria-label": d,
          "aria-describedby": D,
          children: e.map((w, R) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (y) => B(y, w.key),
              onDragOver: (y) => x(y, w.key),
              onDrop: (y) => _(y, w.key),
              onDragEnd: q,
              onClick: () => k(w.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${w.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": w.key,
              children: /* @__PURE__ */ n.jsx(
                Je,
                {
                  color: T(R),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => A(w.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${R + 1}`, children: R + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: M(w.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (y) => {
                          y.stopPropagation(), k(w.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${M(w.key)}. Currently ${w.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${w.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${w.direction}`,
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
            w.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        Ie,
        {
          variant: "secondary",
          onClick: p,
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
function Kl(e, t) {
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
const qn = yt(
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
      disabled: m = !1,
      orientation: b = "horizontal",
      id: f,
      isLoading: B = !1,
      loadingComponent: x,
      error: _ = null,
      errorComponent: q,
      "data-testid": M
    } = t, {
      dataComparator: T = (h, C) => JSON.stringify(h) === JSON.stringify(C),
      filterFunction: k = (h) => h,
      booleanRenderer: A = (h) => h ? "✓" : "✗"
    } = a || {}, p = s !== void 0, L = s ?? 0, [D, w] = ge({
      focusArea: "tabs",
      focusedTabIndex: L,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), R = _e(() => ({
      selectedIndex: L,
      tabLoadingStates: new Array(o.length).fill(!1),
      tabErrors: new Array(o.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(o.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [L]), [y, N] = wa(Kl, R);
    ve(() => {
      const h = y.tabLoadingStates.length, C = o.length;
      h !== C && N({ type: "ADJUST_ARRAYS", payload: { newLength: C } });
    }, [o.length]), ve(() => {
      p && N({ type: "SET_SELECTED_INDEX", payload: L });
    }, [L, p]), ve(() => {
      w((h) => ({
        ...h,
        focusArea: "tabs",
        focusedTabIndex: y.selectedIndex,
        focusedHeaderIndex: 0,
        focusedRowIndex: 0,
        focusedColumnIndex: 0,
        isGridActive: !1
      }));
    }, [y.selectedIndex]), ve(() => {
      l && l(y.globalSelectedRowData);
    }, [y.globalSelectedRowData, l]);
    const W = ee((h, C) => T(h, C), [T]), oe = ee((h) => {
      h >= 0 && h < o.length && !o[h].disabled && (N({ type: "SET_SELECTED_INDEX", payload: h }), w((C) => ({
        ...C,
        focusedTabIndex: h,
        focusArea: "tabs"
      })), i?.(h));
    }, [o, i]), P = ee((h) => {
      setTimeout(() => {
        const C = re.current[h], E = C?.parentElement;
        if (C && E) {
          const F = C.offsetLeft, U = C.offsetWidth, Y = E.clientWidth, j = F - Y / 2 + U / 2;
          try {
            E.scrollTo({
              left: Math.max(0, j),
              behavior: "smooth"
            });
          } catch {
            C.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else
          process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", { tabElementExists: !!C, tabListElementExists: !!E });
      }, 50);
    }, []), X = ee((h, C) => {
      const { key: E } = h;
      switch (E) {
        case "ArrowLeft":
          h.preventDefault();
          const F = C > 0 ? C - 1 : o.length - 1;
          oe(F), P(F), re.current[F]?.focus();
          break;
        case "ArrowRight":
          h.preventDefault();
          const U = C < o.length - 1 ? C + 1 : 0;
          oe(U), P(U), re.current[U]?.focus();
          break;
        case "ArrowDown":
          h.preventDefault(), w((j) => ({
            ...j,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        case "Home":
          h.preventDefault(), oe(0), P(0), re.current[0]?.focus();
          break;
        case "End":
          h.preventDefault();
          const Y = o.length - 1;
          oe(Y), P(Y), re.current[Y]?.focus();
          break;
        case "Enter":
        case " ":
          h.preventDefault(), oe(C);
          break;
      }
    }, [o.length, oe, P]), re = xe([]), ie = xe([]), de = ee((h, C) => {
      const E = y.sortConfig || [], F = E.find((j) => j.key === C);
      let U;
      F ? F.direction === "asc" ? U = E.map(
        (j) => j.key === C ? { ...j, direction: "desc" } : j
      ) : U = E.filter((j) => j.key !== C) : U = [...E, { key: C, direction: "asc" }], N({
        type: "SET_SORT",
        payload: U
      }), o[h].onSort?.(C);
    }, [y.sortConfig, o]), S = ee((h) => {
      setTimeout(() => {
        const C = document.querySelector(
          `[data-tab-panel="${y.selectedIndex}"] th:nth-child(${h + 1})`
        );
        C && C.focus();
      }, 0);
    }, [y.selectedIndex]), Q = ee((h) => A(h), [A]), $ = ee((h, C) => {
      setTimeout(() => {
        const E = document.querySelector(
          `[data-tab-panel="${y.selectedIndex}"] tbody tr:nth-child(${h + 1}) td:nth-child(${C + 1})`
        );
        E && E.focus();
      }, 0);
    }, [y.selectedIndex]);
    ve(() => {
      D.isGridActive && (D.focusArea === "headers" ? setTimeout(() => {
        S(D.focusedHeaderIndex);
      }, 0) : D.focusArea === "cells" && setTimeout(() => {
        $(D.focusedRowIndex, D.focusedColumnIndex);
      }, 0));
    }, [D.focusArea, D.isGridActive, D.focusedHeaderIndex, D.focusedRowIndex, D.focusedColumnIndex, S, $]), ve(() => {
      P(y.selectedIndex);
    }, [y.selectedIndex, P]);
    const O = ee((h, C) => {
      const { key: E } = h, F = o[y.selectedIndex], U = F?.columns.length || 0;
      switch (E) {
        case "ArrowLeft":
          h.preventDefault();
          const Y = Math.max(0, C - 1);
          w((ne) => ({ ...ne, focusedHeaderIndex: Y })), S(Y);
          break;
        case "ArrowRight":
          h.preventDefault();
          const j = Math.min(U - 1, C + 1);
          w((ne) => ({ ...ne, focusedHeaderIndex: j })), S(j);
          break;
        case "ArrowUp":
          h.preventDefault(), w((ne) => ({
            ...ne,
            focusArea: "tabs",
            focusedTabIndex: y.selectedIndex
          })), P(y.selectedIndex), re.current[y.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          h.preventDefault(), w((ne) => ({
            ...ne,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: C,
            isGridActive: !0
          }));
          break;
        case "Home":
          h.preventDefault(), w((ne) => ({ ...ne, focusedHeaderIndex: 0 })), S(0);
          break;
        case "End":
          h.preventDefault();
          const ue = U - 1;
          w((ne) => ({ ...ne, focusedHeaderIndex: ue })), S(ue);
          break;
        case "Enter":
        case " ":
          h.preventDefault();
          const ae = F?.columns[C]?.key;
          ae && de(y.selectedIndex, ae);
          break;
      }
    }, [o, y.selectedIndex, de, w, S, $, re]), z = ee((h, C, E) => {
      const { key: F } = h, U = o[y.selectedIndex], Y = U?.data.length || 0, j = U?.columns.length || 0;
      switch (F) {
        case "ArrowUp":
          if (h.preventDefault(), C === 0)
            w((G) => ({
              ...G,
              focusArea: "headers",
              focusedHeaderIndex: E,
              isGridActive: !1
            })), S(E);
          else {
            const G = C - 1;
            w((g) => ({ ...g, focusedRowIndex: G })), $(G, E);
          }
          break;
        case "ArrowDown":
          h.preventDefault();
          const ue = Math.min(Y - 1, C + 1);
          w((G) => ({ ...G, focusedRowIndex: ue })), $(ue, E);
          break;
        case "ArrowLeft":
          h.preventDefault();
          const ae = Math.max(0, E - 1);
          w((G) => ({ ...G, focusedColumnIndex: ae })), $(C, ae);
          break;
        case "ArrowRight":
          h.preventDefault();
          const ne = Math.min(j - 1, E + 1);
          w((G) => ({ ...G, focusedColumnIndex: ne })), $(C, ne);
          break;
        case "Home":
          h.preventDefault(), h.ctrlKey ? (w((G) => ({ ...G, focusedRowIndex: 0, focusedColumnIndex: 0 })), $(0, 0)) : (w((G) => ({ ...G, focusedColumnIndex: 0 })), $(C, 0));
          break;
        case "End":
          if (h.preventDefault(), h.ctrlKey) {
            const G = Y - 1, g = j - 1;
            w((v) => ({ ...v, focusedRowIndex: G, focusedColumnIndex: g })), $(G, g);
          } else {
            const G = j - 1;
            w((g) => ({ ...g, focusedColumnIndex: G })), $(C, G);
          }
          break;
        case "Enter":
        case " ":
          if (h.preventDefault(), U && U.data[C]) {
            const G = U.data.some((I) => "ews_data" in I) ? k(U.data, y.filters) : U.data, g = y.sortConfig;
            let v = G;
            if (g && g.length > 0 && (v = [...G].sort((I, H) => {
              for (const { key: V, direction: K } of g) {
                let te = I[V], se = H[V];
                const Z = U.columns.find((je) => je.key === V);
                if (Z?.tableRenderer ? (te = Z.tableRenderer(I), se = Z.tableRenderer(H)) : Z?.render && (te = Z.render(I), se = Z.render(H)), te == null && se == null) continue;
                if (te == null) return K === "asc" ? -1 : 1;
                if (se == null) return K === "asc" ? 1 : -1;
                let fe = 0;
                if (typeof te == "number" && typeof se == "number" ? fe = te - se : fe = String(te).localeCompare(String(se), void 0, { numeric: !0, sensitivity: "base" }), fe !== 0)
                  return K === "asc" ? fe : -fe;
              }
              return 0;
            })), v[C]) {
              const I = v[C], V = y.globalSelectedRowData && W(y.globalSelectedRowData, I) ? null : I;
              N({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: V
              });
            }
          }
          break;
      }
    }, [o, y.selectedIndex, y.filters, y.sortConfig, k, W, N, w, S, $]), le = ee((h, C) => k(h, C), [k]);
    return ka(r, () => ({
      selectTab: (h) => {
        h >= 0 && h < o.length && (N({ type: "SET_SELECTED_INDEX", payload: h }), i?.(h));
      },
      refreshData: (h) => {
        console.log("Refreshing data for tab:", h ?? "all");
      },
      exportData: (h) => {
        const C = h ?? y.selectedIndex, E = o[C];
        return E ? E.data : [];
      },
      getSelectedRows: (h) => y.globalSelectedRowData ? [] : [],
      clearSelection: (h) => {
        N({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (h) => {
        N({ type: "SET_FILTERS", payload: h });
      }
    }), [y.selectedIndex, y.selectedRows, o, i]), B ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`, "data-testid": M, children: x || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : _ ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`, "data-testid": M, children: q || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: _ })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${b} ${u}`,
        id: f,
        "data-testid": M,
        children: [
          d && /* @__PURE__ */ n.jsx("div", { id: `${f}-description`, className: "nhsuk-u-visually-hidden", children: d }),
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${f}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Va,
            {
              sortConfig: y.sortConfig || [],
              columns: o.flatMap(
                (h) => h.columns.map((C) => ({ key: C.key, label: C.label }))
              ).filter(
                (h, C, E) => E.findIndex((F) => F.key === h.key) === C
                // Remove duplicates
              ),
              onSortChange: (h) => {
                N({ type: "SET_SORT", payload: h });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": `${d ? `${f}-description` : ""} ${f ? `${f}-navigation-help` : ""}`.trim() || void 0,
              "aria-orientation": b,
              className: "aria-tabs-datagrid__tabs",
              children: o.map((h, C) => {
                const E = C === y.selectedIndex, F = h.disabled || m;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${h.id}`,
                    "aria-controls": `panel-${h.id}`,
                    "aria-selected": E,
                    "aria-disabled": F,
                    tabIndex: E ? 0 : -1,
                    ref: (U) => {
                      re.current[C] = U;
                    },
                    onClick: () => oe(C),
                    onKeyDown: (U) => X(U, C),
                    disabled: F,
                    className: [
                      "aria-tabs-datagrid__tab",
                      E ? "aria-tabs-datagrid__tab--selected" : "",
                      F ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: h.label }),
                      y.tabLoadingStates[C] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      y.tabErrors[C] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  h.id
                );
              })
            }
          ),
          o.map((h, C) => {
            const E = C === y.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${h.id}`,
                "aria-labelledby": `tab-${h.id}`,
                tabIndex: 0,
                hidden: !E,
                ref: (F) => {
                  ie.current[C] = F;
                },
                className: `aria-tabs-datagrid__panel ${h.className || ""}`,
                "data-tab-panel": C,
                children: E && (() => {
                  const F = h.data.some((Y) => "ews_data" in Y) ? le(h.data, y.filters) : h.data, U = _e(() => {
                    const Y = y.sortConfig;
                    return !Y || Y.length === 0 ? F : [...F].sort((j, ue) => {
                      for (const { key: ae, direction: ne } of Y) {
                        let G = j[ae], g = ue[ae];
                        const v = h.columns.find((H) => H.key === ae);
                        if (v?.tableRenderer ? (G = v.tableRenderer(j), g = v.tableRenderer(ue)) : v?.render && (G = v.render(j), g = v.render(ue)), G == null && g == null) continue;
                        if (G == null) return 1;
                        if (g == null) return -1;
                        let I = 0;
                        if (typeof G == "number" && typeof g == "number" ? I = G - g : typeof G == "boolean" && typeof g == "boolean" ? I = G === g ? 0 : G ? 1 : -1 : I = String(G).localeCompare(String(g), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), I !== 0)
                          return ne === "asc" ? I : -I;
                      }
                      return 0;
                    });
                  }, [F, y.sortConfig, h.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": h.ariaLabel,
                      "aria-describedby": h.ariaDescription ? `panel-${h.id}-description` : void 0,
                      children: [
                        h.ariaDescription && /* @__PURE__ */ n.jsx("caption", { className: "nhsuk-u-visually-hidden", id: `panel-${h.id}-description`, children: h.ariaDescription }),
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: h.columns.map((Y, j) => {
                          const ue = y.sortConfig?.find((G) => G.key === Y.key), ae = !!ue, ne = D.focusArea === "headers" && D.focusedHeaderIndex === j;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${ne ? "sortable-header--focused" : ""} ${ae ? "sortable-header--sorted" : ""}`,
                              role: "columnheader",
                              tabIndex: ne ? 0 : -1,
                              onClick: () => de(C, Y.key),
                              onKeyDown: (G) => O(G, j),
                              "aria-sort": ae ? ue?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: Y.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${ae ? `sort-indicator--${ue?.direction}` : ""}`, children: [
                                  y.sortConfig && y.sortConfig.length > 0 && y.sortConfig.findIndex((G) => G.key === Y.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${y.sortConfig.findIndex((G) => G.key === Y.key) + 1}`,
                                      "data-priority": y.sortConfig.findIndex((G) => G.key === Y.key) + 1,
                                      title: `Sort priority: ${y.sortConfig.findIndex((G) => G.key === Y.key) + 1}`,
                                      children: y.sortConfig.findIndex((G) => G.key === Y.key) + 1
                                    }
                                  ),
                                  ae && /* @__PURE__ */ n.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${ue?.direction}`,
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
                            Y.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: U.map((Y, j) => {
                          const ue = y.globalSelectedRowData && W(y.globalSelectedRowData, Y), ae = D.focusArea === "cells" && D.focusedRowIndex === j;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${ue ? "data-row--selected" : ""} ${ae ? "data-row--focused" : ""}`,
                              "aria-selected": ue,
                              children: h.columns.map((ne, G) => {
                                const g = Y[ne.key];
                                let v;
                                ne.tableRenderer ? v = ne.tableRenderer(Y) : ne.render ? v = ne.render(Y) : v = g;
                                const I = D.focusArea === "cells" && D.focusedRowIndex === j && D.focusedColumnIndex === G, H = () => {
                                  if (ne.customRenderer) {
                                    const V = ne.customRenderer(g, Y);
                                    return /* @__PURE__ */ n.jsx("span", { className: "data-cell__custom", "data-custom-rendered": "true", children: V });
                                  }
                                  return typeof g == "boolean" && v === g ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                    Q(g),
                                    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: g ? "Yes" : "No" })
                                  ] }) : Re.isValidElement(v) || typeof v != "object" ? v ?? "" : v;
                                };
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${I ? "data-cell--focused" : ""}`,
                                    tabIndex: I ? 0 : -1,
                                    onClick: () => {
                                      const K = y.globalSelectedRowData && W(y.globalSelectedRowData, Y) ? null : Y;
                                      N({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: K
                                      });
                                    },
                                    onKeyDown: (V) => z(V, j, G),
                                    children: H()
                                  },
                                  ne.key
                                );
                              })
                            },
                            j
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
), zt = {
  asc: "↑",
  desc: "↓"
}, Zl = (e) => [...e].sort((t, r) => t.priority - r.priority);
function On(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Jl(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Xl(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function Ql(e, t) {
  const r = t.find((o) => o.id === e), a = Jl(t);
  return r ? r.priority < a : !1;
}
const Jf = ({
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
  const u = _e(() => Zl(e), [e]), m = ee((M) => {
    if (l) return;
    const T = e.map(
      (k) => k.id === M ? { ...k, direction: k.direction === "asc" ? "desc" : "asc" } : k
    );
    t(T);
  }, [e, t, l]), b = ee((M) => {
    if (l) return;
    const T = e.findIndex((A) => A.id === M);
    if (T <= 0) return;
    const k = [...e];
    [k[T], k[T - 1]] = [k[T - 1], k[T]], t(On(k));
  }, [e, t, l]), f = ee((M) => {
    if (l) return;
    const T = e.findIndex((A) => A.id === M);
    if (T >= e.length - 1 || T === -1) return;
    const k = [...e];
    [k[T], k[T + 1]] = [k[T + 1], k[T]], t(On(k));
  }, [e, t, l]), B = ee((M) => {
    if (l) return;
    const T = e.filter((k) => k.id !== M);
    t(On(T));
  }, [e, t, l]), x = ee(() => {
    l || t([]);
  }, [t, l]), _ = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const M = u.map((T, k) => {
      const A = T.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${T.label} (${A})`;
    });
    if (M.length === 1)
      return `Sorted by: ${M[0]}`;
    if (M.length === 2)
      return `Sorted by: ${M.join(" and ")}`;
    {
      const T = M.pop();
      return `Sorted by: ${M.join(", ")}, and ${T}`;
    }
  }, q = _e(() => {
    const M = ["sort-description"];
    return i && M.push("sort-help"), d && M.push(d), M.join(" ");
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
        "aria-describedby": q,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((M) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Je,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => B(M.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: M.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: M.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => m(M.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${M.label}. Currently ${M.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: M.direction === "asc" ? zt.asc : zt.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => b(M.id),
                          disabled: l || !Xl(M.id, e),
                          "aria-label": `Move ${M.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => f(M.id),
                          disabled: l || !Ql(M.id, e),
                          "aria-label": `Move ${M.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            M.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      Ie,
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
      zt.asc,
      "/",
      zt.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Br = (e, t) => t.map((r) => ({
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
})), Kn = [
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
], ec = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), tc = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, nc = (e) => {
  if (typeof e == "boolean") {
    const r = Kn.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = Kn.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, rc = (e) => `${e.name}-${e.bed_name}`, ac = () => ({
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
}), Xf = (e) => {
  const t = ac();
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
}, sc = {
  dataComparator: ec,
  filterFunction: tc,
  booleanRenderer: nc,
  getDataId: rc
};
function ha(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: d = {},
    classPrefix: u = "adaptive-card"
  } = r, m = t.find((T) => T.key === a), b = m?.cardRenderer ? m.cardRenderer(e) : m?.render ? m.render(e) : e[a || "name"] || "Untitled", f = () => o.filter((k) => !i.includes(k) && e[k]).slice(0, 3).map((k) => {
    const A = t.find((w) => w.key === k), p = e[k], L = d[k] ? d[k](p, e) : A?.cardRenderer ? A.cardRenderer(e) : A?.render ? A.render(e) : p;
    return `${A?.label || k}: ${L}`;
  }).join(" • "), B = () => s.length === 0 ? null : s.filter((T) => e[T.fieldKey] !== void 0).map((T) => {
    const k = e[T.fieldKey], A = T.render ? T.render(k, e) : k;
    return `<span class="nhsuk-tag ${oc(T, k)}">${A}</span>`;
  }).join(""), x = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", _ = B(), q = f(), M = _ ? `${q}${_ ? `<div class="adaptive-card__badges">${_}</div>` : ""}` : q;
  return {
    variant: x(),
    heading: String(b),
    descriptionHtml: M,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${b}`
  };
}
function oc(e, t) {
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
const ic = {
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
}, Ya = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, c = e.ward_name, d = e.bed_name, u = e.ews_score, m = e.speciality, b = e.consultant;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${o} healthcare-card--${s}`,
      onClick: () => r?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${c}, Bed ${d}`,
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
            Je,
            {
              color: cc(Ja(u)),
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
            /* @__PURE__ */ n.jsx("dd", { children: c })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Bed" }),
            /* @__PURE__ */ n.jsx("dd", { children: d })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Specialty" }),
            /* @__PURE__ */ n.jsx("dd", { children: m })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ n.jsx("dd", { children: b })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            Ie,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (f) => {
                f.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Ie,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (f) => {
                f.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Ie,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (f) => {
                f.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, qa = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        Je,
        {
          color: dc(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        Je,
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
      Ie,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Ie,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), Ka = ({
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
        Je,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        Je,
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
      Ie,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Ie,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), Za = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, c = e.ews_data?.temperature, d = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, m = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${lc(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: m && /* @__PURE__ */ n.jsxs(
            Je,
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
          d !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-value", children: d })
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
            Ie,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (b) => {
                b.stopPropagation(), r?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Ie,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (b) => {
                b.stopPropagation(), r?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function Ja(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function lc(e) {
  return Ja(e);
}
function cc(e) {
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
function dc(e) {
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
const uc = [
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
], Xa = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", hc = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, fc = (e) => Xa(e) === "high" || e.status === "urgent" ? "primary" : "default", mc = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, pc = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: uc,
  hiddenFields: [],
  getPriority: Xa,
  getStatus: hc,
  getVariant: fc,
  fieldRenderers: mc,
  classPrefix: "adaptive-card--healthcare"
}, gc = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", o = r.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ n.jsx(
      Ya,
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
      qa,
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
      Ka,
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
      Za,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, bc = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, fa = {
  name: "healthcare",
  defaultCardConfig: pc,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: gc,
  fieldTypes: bc
};
function ma(e) {
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
function pa(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function xc(e, t) {
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
function yc(e, t) {
  const [r, a] = ge("cards");
  return ve(() => {
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
function vc(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function _c(e, t, r, a) {
  const o = a ? { ...a.defaultCardConfig, ...r } : { ...ic, ...r };
  if (a && a.cardTemplates) {
    const s = vc(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), ha(e, t, o);
}
const Qf = ({
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
  ariaLabel: d = "Data grid",
  ariaDescription: u,
  orientation: m = "horizontal",
  id: b,
  disabled: f = !1,
  className: B,
  ...x
}) => {
  const _ = yc(e, t), q = l !== void 0, M = l ?? 0, T = _e(() => {
    if (s.some(
      (v) => v.data && v.data.length > 0 && pa(v.data)
    )) {
      const v = ma(r);
      return {
        ...fa.defaultCardConfig,
        ...v
      };
    } else
      return ma(r);
  }, [r, s]), k = _e(() => s.some(
    (v) => v.data && v.data.length > 0 && pa(v.data)
  ) ? fa : void 0, [s]), A = _e(() => ({
    selectedIndex: M,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [M, s.length]), [p, L] = wa(xc, A), D = xe([]), w = xe([]), R = xe([]), y = xe(null), [N, W] = ge({
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
  }), oe = ee((g) => {
    if (!g.current)
      return { columns: 1, rows: 0 };
    const v = g.current, I = v.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (I.length === 0)
      return { columns: 1, rows: 0 };
    const H = v.offsetWidth, K = I[0].offsetWidth, te = Math.floor(H / K) || 1, se = Math.ceil(I.length / te);
    return { columns: te, rows: se };
  }, []), P = ee((g, v) => ({
    row: Math.floor(g / v),
    col: g % v
  }), []), X = ee((g, v, I) => g * I + v, []), re = ee((g, v, I, H) => {
    const { row: V, col: K } = P(g, H);
    let te = V, se = K;
    switch (v) {
      case "up":
        te = Math.max(0, V - 1);
        break;
      case "down":
        te = Math.min(Math.floor((I - 1) / H), V + 1);
        break;
      case "left":
        se = Math.max(0, K - 1);
        break;
      case "right":
        se = Math.min(H - 1, K + 1);
        break;
    }
    const Z = X(te, se, H);
    return Math.min(Z, I - 1);
  }, [P, X]);
  ve(() => {
    N.isCardNavigationActive && N.focusedCardElementIndex >= 0 && N.cardElements.length > 0 && setTimeout(() => {
      const g = N.cardElements[N.focusedCardElementIndex];
      g && (g.element.focus(), g.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [N.isCardNavigationActive, N.focusedCardElementIndex, N.cardElements.length]), ve(() => {
    const g = () => {
      if (_ === "cards" && y.current) {
        const { columns: H, rows: V } = oe(y);
        W((K) => ({
          ...K,
          gridColumns: H,
          gridRows: V
        }));
      }
    }, v = setTimeout(g, 200), I = () => {
      setTimeout(g, 100);
    };
    return window.addEventListener("resize", I), () => {
      clearTimeout(v), window.removeEventListener("resize", I);
    };
  }, [_, s, oe]), ve(() => {
    const g = p.tabLoadingStates.length, v = s.length;
    g !== v && L({ type: "ADJUST_ARRAYS", payload: { newLength: v } });
  }, [s.length, p.tabLoadingStates.length]), ve(() => {
    q && l !== p.selectedIndex && L({ type: "SET_SELECTED_INDEX", payload: l });
  }, [q, l, p.selectedIndex]);
  const ie = ee((g) => {
    g >= 0 && g < s.length && !s[g].disabled && (L({ type: "SET_SELECTED_INDEX", payload: g }), c?.(g));
  }, [s, c]), de = ee((g) => {
    console.log("Card selected:", g), L({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: g
    });
  }, []), S = ee((g) => {
    const v = w.current[g];
    v && (v.focus(), v.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), Q = ee((g) => {
    const v = w.current[g];
    if (!v) return [];
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
    ].join(", "), H = v.querySelectorAll(I);
    return Array.from(H).map((V, K) => ({
      id: V.id || `card-${g}-element-${K}`,
      element: V,
      label: V.getAttribute("aria-label") || V.textContent?.trim() || V.getAttribute("title") || `Element ${K + 1}`,
      type: V.tagName.toLowerCase() === "button" ? "button" : V.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(V.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), $ = xe(null), O = ee((g) => {
    const v = $.current;
    if (!v) return;
    const I = document.createElement("div");
    I.setAttribute("aria-live", "polite"), I.setAttribute("aria-atomic", "true"), I.className = "sr-only", I.textContent = g, v.appendChild(I), setTimeout(() => {
      v.contains(I) && v.removeChild(I);
    }, 1e3);
  }, []), z = ee((g) => {
    const v = g.filter((H) => H.sortable !== !1), I = [
      { value: "", label: "Sort by..." }
    ];
    return v.forEach((H) => {
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
  }, []), le = ee((g, v) => v ? [...g].sort((I, H) => {
    const V = I[v.key], K = H[v.key];
    if (V == null && K == null) return 0;
    if (V == null) return 1;
    if (K == null) return -1;
    const te = Number(V), se = Number(K);
    if (!isNaN(te) && !isNaN(se))
      return v.direction === "asc" ? te - se : se - te;
    const Z = String(V).toLowerCase(), fe = String(K).toLowerCase(), je = Z.localeCompare(fe);
    return v.direction === "asc" ? je : -je;
  }) : g, []), h = ee((g) => {
    if (!g) {
      W((Z) => ({ ...Z, cardSortConfig: null })), O("Card sorting cleared");
      return;
    }
    const [v, I] = g.split("-"), H = { key: v, direction: I };
    W((Z) => ({ ...Z, cardSortConfig: H }));
    const te = s[p.selectedIndex]?.columns.find((Z) => Z.key === v)?.label || v;
    O(`Cards sorted by ${te} in ${I === "asc" ? "ascending" : "descending"} order`);
  }, [s, p.selectedIndex, O]), C = ee((g) => {
    const H = s[p.selectedIndex]?.columns.find((K) => K.key === g.key)?.label || g.key, V = g.direction === "asc" ? "ascending" : "descending";
    return `${H} (${V})`;
  }, [s, p.selectedIndex]), E = ee((g) => {
    const v = s[p.selectedIndex];
    if (o) {
      const I = p.sortConfig;
      return !I || I.length === 0 ? g : [...g].sort((H, V) => {
        for (const { key: K, direction: te } of I) {
          let se = H[K], Z = V[K];
          const fe = v?.columns.find(($e) => $e.key === K);
          if (fe?.cardRenderer ? (se = fe.cardRenderer(H), Z = fe.cardRenderer(V)) : fe?.render && (se = fe.render(H), Z = fe.render(V)), se == null && Z == null) continue;
          if (se == null) return te === "asc" ? -1 : 1;
          if (Z == null) return te === "asc" ? 1 : -1;
          const je = Number(se), ye = Number(Z);
          if (!isNaN(je) && !isNaN(ye)) {
            const $e = je - ye;
            if ($e !== 0) return te === "asc" ? $e : -$e;
            continue;
          }
          const ke = String(se).toLowerCase(), vt = String(Z).toLowerCase(), Mt = ke.localeCompare(vt);
          if (Mt !== 0) return te === "asc" ? Mt : -Mt;
        }
        return 0;
      });
    } else
      return le(g, N.cardSortConfig);
  }, [o, p.sortConfig, N.cardSortConfig, le, s, p.selectedIndex]), F = ee((g, v) => {
    const I = Q(g), H = I[v];
    if (H) {
      H.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const V = `Focused on ${H.label}, ${H.type} ${v + 1} of ${I.length} within card`;
      O(V);
    }
  }, [Q, O]), U = ee((g) => {
    D.current[g]?.focus();
  }, []), Y = ee(() => {
    const g = R.current[0];
    if (!g) return [];
    const v = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), I = g.querySelectorAll(v);
    return Array.from(I);
  }, []), j = ee((g) => {
    if (g === 0) {
      const v = R.current[0], I = v?.querySelector(".sort-controls-row");
      if (I) {
        I.setAttribute("tabindex", "-1"), I.focus();
        const V = `Sort controls group with ${Y().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        O(V);
      } else v && v.focus();
    } else {
      const v = Y(), I = g - 1, H = v[I];
      if (H) {
        H.focus();
        const V = H.tagName.toLowerCase() === "select", K = H.tagName.toLowerCase() === "button", te = V ? "dropdown" : K ? "button" : "control", se = V ? ". Use Space key to open dropdown" : "", Z = `${te} ${I + 1} of ${v.length}${se}`;
        O(Z);
      }
    }
  }, [Y, O]), ue = ee((g, v) => {
    const { key: I } = g, H = s[p.selectedIndex], V = H?.data.length || 0;
    if (I === "ArrowLeft" && g.shiftKey) {
      g.preventDefault(), g.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (I === "ArrowRight" && g.shiftKey) {
      g.preventDefault(), g.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!N.isCardNavigationActive) {
      switch (I) {
        case "ArrowUp":
          if (g.preventDefault(), v === 0)
            W((Z) => ({ ...Z, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), j(0);
          else {
            const Z = re(v, "up", V, N.gridColumns);
            Z !== v && (W((fe) => ({ ...fe, focusedCardIndex: Z })), S(Z), O(`Moved to card ${Z + 1} of ${V}`));
          }
          break;
        case "ArrowDown":
          g.preventDefault();
          const K = re(v, "down", V, N.gridColumns);
          K !== v && (W((Z) => ({ ...Z, focusedCardIndex: K })), S(K), O(`Moved to card ${K + 1} of ${V}`));
          break;
        case "ArrowLeft":
          g.preventDefault();
          const te = re(v, "left", V, N.gridColumns);
          te !== v ? (W((Z) => ({ ...Z, focusedCardIndex: te })), S(te), O(`Moved to card ${te + 1} of ${V}`)) : p.selectedIndex > 0 && (L({ type: "SET_SELECTED_INDEX", payload: p.selectedIndex - 1 }), W((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => U(p.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          g.preventDefault();
          const se = re(v, "right", V, N.gridColumns);
          se !== v ? (W((Z) => ({ ...Z, focusedCardIndex: se })), S(se), O(`Moved to card ${se + 1} of ${V}`)) : p.selectedIndex < s.length - 1 && (L({ type: "SET_SELECTED_INDEX", payload: p.selectedIndex + 1 }), W((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => U(p.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (H?.data[v]) {
            g.preventDefault(), W((fe) => ({
              ...fe,
              selectedCardIndex: v
            }));
            const Z = Q(v);
            Z.length > 0 ? (W((fe) => ({
              ...fe,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: Z,
              selectedCardIndex: v
              // Ensure selection is maintained
            })), O(`Card ${v + 1} selected and navigation activated. ${Z.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : O(`Card ${v + 1} selected.`);
          }
          break;
        case " ":
          if (H?.data[v]) {
            g.preventDefault(), W((fe) => ({
              ...fe,
              selectedCardIndex: fe.selectedCardIndex === v ? -1 : v
            }));
            const Z = N.selectedCardIndex === v;
            O(`Card ${v + 1} ${Z ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (I) {
      case "ArrowUp":
      case "ArrowLeft":
        g.preventDefault();
        const K = Math.max(0, N.focusedCardElementIndex - 1);
        W((fe) => ({ ...fe, focusedCardElementIndex: K })), F(v, K);
        break;
      case "ArrowDown":
      case "ArrowRight":
        g.preventDefault();
        const te = Math.min(N.cardElements.length - 1, N.focusedCardElementIndex + 1);
        W((fe) => ({ ...fe, focusedCardElementIndex: te })), F(v, te);
        break;
      case "Enter":
        g.preventDefault();
        const se = N.cardElements[N.focusedCardElementIndex];
        se && (se.element.click(), O(`Activated ${se.label}`));
        break;
      case " ":
        g.preventDefault();
        const Z = N.cardElements[N.focusedCardElementIndex];
        if (Z) {
          const fe = new MouseEvent("dblclick", { bubbles: !0 });
          Z.element.dispatchEvent(fe), O(`Double-clicked ${Z.label}`);
        }
        break;
      case "Escape":
        g.preventDefault(), W((fe) => ({
          ...fe,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => S(v), 0), O("Exited card navigation, returned to card level");
        break;
      case "Home":
        g.preventDefault(), N.cardElements.length > 0 && (W((fe) => ({ ...fe, focusedCardElementIndex: 0 })), F(v, 0));
        break;
      case "End":
        if (g.preventDefault(), N.cardElements.length > 0) {
          const fe = N.cardElements.length - 1;
          W((je) => ({ ...je, focusedCardElementIndex: fe })), F(v, fe);
        }
        break;
    }
  }, [N, p.selectedIndex, s, de, S, U, W, Q, F, O]), ae = ee((g) => {
    const v = D.current[g], I = v?.parentElement;
    if (!v || !I) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const H = v.getBoundingClientRect(), V = I.getBoundingClientRect();
    H.left >= V.left && H.right <= V.right || (console.log("Tab not visible, scrolling into view (mobile)"), v.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), ne = ee((g, v) => {
    if (_ !== "cards")
      return;
    const { key: I } = g;
    switch (I) {
      case "ArrowLeft":
        g.preventDefault();
        const H = v > 0 ? v - 1 : s.length - 1;
        ie(H), W((se) => ({ ...se, focusedTabIndex: H })), D.current[H]?.focus(), ae(H);
        break;
      case "ArrowRight":
        g.preventDefault();
        const V = v < s.length - 1 ? v + 1 : 0;
        ie(V), W((se) => ({ ...se, focusedTabIndex: V })), D.current[V]?.focus(), ae(V);
        break;
      case "ArrowDown":
        g.preventDefault();
        const K = s[p.selectedIndex];
        K && K.columns && K.columns.length > 0 ? (W((se) => ({
          ...se,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), j(0)) : (W((se) => ({
          ...se,
          focusArea: "cards",
          focusedCardIndex: 0
        })), S(0));
        break;
      case "Home":
        g.preventDefault(), ie(0), W((se) => ({ ...se, focusedTabIndex: 0 })), D.current[0]?.focus(), ae(0);
        break;
      case "End":
        g.preventDefault();
        const te = s.length - 1;
        ie(te), W((se) => ({ ...se, focusedTabIndex: te })), D.current[te]?.focus(), ae(te);
        break;
      case "Enter":
      case " ":
        g.preventDefault(), ie(v);
        break;
    }
  }, [s.length, ie, _, S, W, ae]), G = ee((g, v) => {
    if (_ !== "cards")
      return;
    const { key: I } = g, H = s[p.selectedIndex];
    if (v === 0 && !N.isSortControlsActive) {
      switch (I) {
        case "ArrowUp":
          g.preventDefault(), W((K) => ({
            ...K,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), U(p.selectedIndex);
          break;
        case "ArrowDown":
          g.preventDefault(), H?.data && H.data.length > 0 && (W((K) => ({
            ...K,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), S(0));
          break;
        case "Enter":
        case " ":
          g.preventDefault();
          const V = Y();
          if (V.length > 0) {
            W((te) => ({
              ...te,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), j(1);
            const K = `Entered sort controls navigation mode. ${V.length} controls available. Use arrow keys to navigate between controls.`;
            O(K);
          }
          break;
        case "Escape":
          g.preventDefault(), W((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), U(p.selectedIndex);
          break;
      }
      return;
    }
    if (N.isSortControlsActive) {
      const K = Y().length;
      switch (I) {
        case "ArrowLeft":
          g.preventDefault();
          const te = N.focusedSortControlIndex > 1 ? N.focusedSortControlIndex - 1 : K;
          W((Z) => ({ ...Z, focusedSortControlIndex: te })), j(te);
          break;
        case "ArrowRight":
          g.preventDefault();
          const se = N.focusedSortControlIndex < K ? N.focusedSortControlIndex + 1 : 1;
          W((Z) => ({ ...Z, focusedSortControlIndex: se })), j(se);
          break;
        case "ArrowDown":
          if (g.preventDefault(), N.isSortControlsActive) {
            const Z = N.focusedSortControlIndex < K ? N.focusedSortControlIndex + 1 : 1;
            W((fe) => ({ ...fe, focusedSortControlIndex: Z })), j(Z);
          } else
            H?.data && H.data.length > 0 && (W((Z) => ({
              ...Z,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), S(0));
          break;
        case "ArrowUp":
          g.preventDefault(), W((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), j(0);
          break;
        case "Escape":
          g.preventDefault(), W((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), j(0);
          break;
      }
    }
  }, [_, s, p.selectedIndex, N.isSortControlsActive, N.focusedSortControlIndex, j, U, S, W, O]);
  if (_ === "cards") {
    const g = s[p.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${B || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": d,
          "aria-describedby": `${u || ""} ${b ? `${b}-navigation-help` : ""}`.trim(),
          "aria-orientation": m,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((v, I) => {
            const H = I === p.selectedIndex, V = v.disabled || f;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${v.id}`,
                "aria-controls": `panel-${v.id}`,
                "aria-selected": H,
                "aria-disabled": V,
                tabIndex: H ? 0 : -1,
                ref: (K) => {
                  D.current[I] = K;
                },
                onClick: () => ie(I),
                onKeyDown: (K) => ne(K, I),
                disabled: V,
                className: [
                  "aria-tabs-datagrid__tab",
                  H ? "aria-tabs-datagrid__tab--selected" : "",
                  V ? "aria-tabs-datagrid__tab--disabled" : ""
                ].filter(Boolean).join(" "),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: v.label }),
                  p.tabLoadingStates[I] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  p.tabErrors[I] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              v.id
            );
          })
        }
      ),
      g && g.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          Va,
          {
            sortConfig: p.sortConfig || [],
            columns: g.columns.map((v) => ({ key: v.key, label: v.label })),
            onSortChange: (v) => {
              L({ type: "SET_SORT", payload: v });
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
            tabIndex: N.focusArea === "sort-controls" ? 0 : -1,
            ref: (v) => {
              R.current[0] = v;
            },
            onKeyDown: (v) => G(v, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${g.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  Ca,
                  {
                    id: `card-sort-${g.id}`,
                    name: `card-sort-${g.id}`,
                    value: N.cardSortConfig ? `${N.cardSortConfig.key}-${N.cardSortConfig.direction}` : "",
                    onChange: (v) => h(v.target.value),
                    className: "sort-select",
                    children: z(g.columns).map((v) => /* @__PURE__ */ n.jsx("option", { value: v.value, children: v.label }, v.value))
                  }
                )
              ] }),
              N.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  C(N.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  Ie,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => h(""),
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
          "aria-label": `${g?.label || "Data"} cards in ${N.gridRows} rows and ${N.gridColumns} columns`,
          "aria-rowcount": N.gridRows,
          "aria-colcount": N.gridColumns,
          id: `panel-${g?.id}`,
          "aria-labelledby": `tab-${g?.id}`,
          children: E(g?.data || []).map((v, I) => {
            const H = N.selectedCardIndex === I, V = N.focusedCardIndex === I && N.focusArea === "cards", K = N.focusedCardIndex === I && N.focusArea === "card" && N.isCardNavigationActive, te = I === 0 && N.focusArea !== "cards", se = V || te, Z = P(I, N.gridColumns);
            if (r.cardTemplate) {
              const ye = r.cardTemplate(v, g.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": Z.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      ref: (ke) => {
                        w.current[I] = ke;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        H ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        V ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        K ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": Z.col + 1,
                      "aria-selected": H,
                      "aria-expanded": K,
                      "aria-description": K ? `Card navigation active. ${N.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: se ? 0 : -1,
                      onClick: () => {
                        W((ke) => ({
                          ...ke,
                          selectedCardIndex: ke.selectedCardIndex === I ? -1 : I
                        })), de(v);
                      },
                      onKeyDown: (ke) => ue(ke, I),
                      onFocus: () => {
                        W((ke) => ke.focusedCardIndex !== I || ke.focusArea !== "cards" ? {
                          ...ke,
                          focusedCardIndex: I,
                          focusArea: "cards"
                        } : ke);
                      },
                      children: ye
                    }
                  )
                },
                `card-${I}`
              );
            }
            const fe = _c(v, g.columns, T, k), je = [
              fe.className || "",
              H ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              V ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              K ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": Z.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      H ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      V ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      K ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": Z.col + 1,
                    "aria-selected": H,
                    "aria-expanded": K,
                    onKeyDown: (ye) => {
                      ye.key === "Enter" && (ye.preventDefault(), W((ke) => ({
                        ...ke,
                        selectedCardIndex: I
                      }))), ue(ye, I);
                    },
                    children: /* @__PURE__ */ n.jsx(
                      Ga,
                      {
                        ...fe,
                        ref: (ye) => {
                          w.current[I] = ye;
                        },
                        className: je,
                        "aria-label": `${fe["aria-label"] || fe.heading}. ${K ? `Card navigation active with ${N.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: se ? 0 : -1,
                        onClick: () => {
                          W((ye) => ({
                            ...ye,
                            selectedCardIndex: ye.selectedCardIndex === I ? -1 : I
                          })), de(v);
                        },
                        onKeyDown: (ye) => ue(ye, I),
                        onFocus: () => {
                          N.isCardNavigationActive || W((ye) => ye.focusedCardIndex !== I || ye.focusArea !== "cards" ? {
                            ...ye,
                            focusedCardIndex: I,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : ye);
                        }
                      }
                    )
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
          ref: $,
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
  return _ === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${B || ""}`, children: /* @__PURE__ */ n.jsx(
    qn,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: d,
      ariaDescription: u,
      orientation: m,
      id: b,
      disabled: f,
      selectedIndex: l,
      onTabChange: c,
      className: "aria-tabs-datagrid-adaptive__table--hybrid",
      ...x
    }
  ) }) : /* @__PURE__ */ n.jsx(
    qn,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: d,
      ariaDescription: u,
      orientation: m,
      id: b,
      disabled: f,
      selectedIndex: l,
      onTabChange: c,
      ...x
    }
  );
}, Qa = (e) => {
  const t = Kn.find((r) => r.value === e);
  return t ? t.icon : null;
}, kc = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => Qa(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, wc = (e) => Br(e, [
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
]), Sc = {
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
  booleanRenderer: (e) => Qa(e),
  getDataId: (e) => `financial-${e.id}`
}, Cc = (e) => Br(e, [
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
]), jc = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: kc,
    createTabs: wc
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Sc,
    createTabs: Cc
  }
}, ga = (e, t) => {
  const r = jc[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, es = [
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
], Nc = [
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
], Tc = [
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
], Dc = [
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
], ba = [
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
], xa = [
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
], ya = [
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
], Ic = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Rc = () => [
  {
    id: "patients",
    label: "Patients",
    data: es,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Ya,
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
    data: Nc,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      qa,
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
    data: Tc,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Ka,
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
    data: Dc,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Za,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Bc = () => {
  const [e, t] = ge("healthcare"), r = _e(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: sc,
      tabPanels: Rc(),
      data: es
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...ga("ecommerce", ba),
      data: ba
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...ga("financial", xa),
      data: xa
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Ic,
      tabPanels: Br(ya, [
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
      data: ya
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
        Ie,
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
      qn,
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
}, em = Bc, ts = (e) => /* @__PURE__ */ n.jsx(ja, { ...e }), tm = ({
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
  account: m,
  organisation: b,
  logo: f,
  className: B,
  ...x
}) => {
  const _ = {
    service: c,
    navigation: d,
    search: u,
    account: m,
    organisation: b,
    logo: f,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ua, { ...s }),
    /* @__PURE__ */ n.jsx(Ra, { ..._ }),
    /* @__PURE__ */ n.jsx(ts, { className: B, ...x, children: /* @__PURE__ */ n.jsx(Na, { size: o, children: /* @__PURE__ */ n.jsx(It, { children: /* @__PURE__ */ n.jsxs(kr, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Xe, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Ba, { ...l })
  ] });
}, nm = ({
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
  logo: m,
  className: b,
  ...f
}) => {
  const B = {
    service: {
      text: d,
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
    /* @__PURE__ */ n.jsx(Ua, { ...s }),
    /* @__PURE__ */ n.jsx(Ra, { ...B }),
    /* @__PURE__ */ n.jsxs(ts, { className: b, ...f, children: [
      c && /* @__PURE__ */ n.jsx(Un, { ...c }),
      /* @__PURE__ */ n.jsx(Na, { size: o, children: /* @__PURE__ */ n.jsx(It, { children: /* @__PURE__ */ n.jsxs(kr, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Xe, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Ba, { ...l })
  ] });
}, ns = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = J("nhsuk-back-link", a), c = J("nhsuk-back-link__link"), d = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ n.jsx("button", { className: c, type: "button", onClick: s, ...i, children: d() }) : /* @__PURE__ */ n.jsx("a", { className: c, href: r, ...i, children: d() }) });
};
ns.displayName = "ForwardLink";
const ft = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function va() {
  return typeof window > "u" ? ft.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function rs() {
  const [e, t] = he.useState(va());
  he.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(va());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = he.useCallback((s) => e >= ft[s], [e]), a = he.useCallback((s) => e < ft[s], [e]), o = he.useCallback((s, i) => e >= ft[s] && e < ft[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: o,
    /** Raw numeric values */
    values: ft
  };
}
function rm(e) {
  const { width: t, values: r } = rs();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function Fc(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = he.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = he.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return he.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    o ? c.set(r, String(o)) : c.delete(r), c.set(a, i ? "1" : "0");
    const d = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", d);
  }, [o, i, t, r, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Lc = ({ className: e }) => /* @__PURE__ */ n.jsx("svg", { className: e, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z" }) }), Ec = ({ className: e }) => /* @__PURE__ */ n.jsx("svg", { className: e, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z" }) });
function Mc(e) {
  const {
    items: t,
    selectedId: r,
    defaultSelectedId: a,
    onSelectionChange: o,
    renderItemContent: s,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: c,
    animated: d = !0,
    backLabel: u = "Back",
    nextLabel: m = "Next",
    isLoading: b = !1,
    emptyState: f,
    a11y: B,
    className: x,
    getId: _ = (ce) => ce.id,
    orientation: q = "vertical",
    autoEnableThirdColumn: M = !0,
    onDrillChange: T,
    navigationInstructions: k = "Use arrow keys to navigate, Enter to open.",
    initialFocus: A = "first",
    skipFocusOnSelect: p = !1,
    skipAnnouncements: L = !1,
    onFocusChange: D,
    syncUrl: w = !1,
    urlParamSelected: R = "nsv",
    urlParamDrill: y = "nsvDrill",
    urlSyncDebounceMs: N = 0,
    lazySecondary: W = !1,
    navFooter: oe,
    collapsibleNav: P = !1,
    navInitiallyCollapsed: X = !1,
    onNavCollapseChange: re,
    collapseToggleLabelShow: ie = "Show navigation",
    collapseToggleLabelHide: de = "Hide navigation",
    collapseToggleIconShow: S,
    collapseToggleIconHide: Q,
    persistNavCollapsed: $,
    navCollapsedStorageKey: O = "nsvCollapsed",
    navCollapsedUrlParam: z = "nsvCollapsed",
    autoContentHeader: le,
    contentHeaderLevel: h = 2,
    renderContentHeader: C,
    contentSubheader: E,
    secondarySubheader: F
  } = e, { up: U } = rs(), [Y, j] = he.useState(!1);
  he.useEffect(() => {
    j(!0);
  }, []);
  const ue = Y && U("medium"), ae = Y && U("xlarge");
  let ne;
  c ? ne = c : ue ? ne = "two-column" : ne = "list", !c && M && l && ae && (ne = "three-column");
  const G = Fc({
    enabled: w,
    paramSelected: R,
    paramDrill: y
  }), [g, v] = he.useState(
    () => G.selectedId !== void 0 ? G.selectedId : a
  ), I = r !== void 0 ? r : g, H = t.find((ce) => _(ce) === I), V = he.useRef(null), K = he.useRef(null), te = !!H && (ne === "list" || ne === "cards"), se = he.useMemo(() => le === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : le === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : le === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: le.mobile !== void 0 ? le.mobile : !0,
    tablet: le.tablet || !1,
    desktop: le.desktop || !1
  }, [le]), Z = Y && U("medium") && !U("xlarge"), fe = Y && U("xlarge"), je = !!l, ye = ne === "three-column", [ke, vt] = he.useState(!1);
  he.useEffect(() => {
    ye && ke && vt(!1);
  }, [ye, ke]);
  const $e = !!H && (te && se.mobile || !te && Z && se.tablet || !te && fe && se.desktop) || je && !ye, Ks = `h${h}`, Cn = H ? he.createElement(Ks, { style: { marginLeft: te ? 32 : 0, marginRight: te ? 32 : 0 } }, H.label) : null, Fr = te ? "mobile" : Z ? "tablet" : "desktop", Zs = je && !ye && !ke, jn = te && se.mobile ? /* @__PURE__ */ n.jsx(
    Un,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => ut(void 0, void 0)
    }
  ) : void 0, Nn = Zs ? /* @__PURE__ */ n.jsx(
    ns,
    {
      element: "button",
      text: m,
      onClick: () => {
        vt(!0);
      }
    }
  ) : void 0, Lr = !ye && ke ? /* @__PURE__ */ n.jsx(
    Un,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => vt(!1)
    }
  ) : void 0, Js = he.useMemo(() => {
    if (!$e || !H) return null;
    if (C) return C({
      item: H,
      detailActive: te,
      context: Fr,
      backLink: jn,
      defaultHeading: Cn
    });
    const ce = H && E ? typeof E == "function" ? E(H) : E : null;
    return /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
      /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 0, flex: "1 1 auto", minWidth: 0 }, children: [
        Lr || jn,
        /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }, children: [
          Cn,
          ce && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: ce })
        ] })
      ] }),
      Nn && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: Nn })
    ] });
  }, [$e, H, C, te, Fr, jn, Lr, Cn, Nn, E]);
  he.useEffect(() => {
    if (!w) return;
    const ce = ne === "three-column";
    let we = !1;
    const me = () => {
      we || (G.selectedId !== I && G.setSelectedId(I), G.drilledIn !== ce && G.setDrilledIn(ce));
    };
    if (N && N > 0) {
      const pe = setTimeout(me, N);
      return () => {
        we = !0, clearTimeout(pe);
      };
    } else
      me();
  }, [w, G, I, ne, N]), he.useEffect(() => {
    if (!w) return;
    const ce = () => {
      const we = new URLSearchParams(window.location.search), me = we.get(R);
      we.get(y), v(me === null ? void 0 : me);
    };
    return window.addEventListener("popstate", ce), () => window.removeEventListener("popstate", ce);
  }, [w, R, y, c, l]);
  const $t = he.useRef(0), Ae = he.useRef(null), ut = he.useCallback((ce, we) => {
    r === void 0 && v(ce), o?.(ce, we);
  }, [r, o]);
  he.useEffect(() => {
    if (!p && te && K.current) {
      const ce = setTimeout(() => K.current?.focus(), 30);
      return () => clearTimeout(ce);
    }
  }, [te, I, p]);
  const _t = he.useRef(null), [Fe, kt] = he.useState(() => A === "first" ? 0 : -1);
  he.useEffect(() => {
    if (!_t.current) return;
    const ce = Array.from(_t.current.querySelectorAll("[data-nav-item]"));
    if (ce.forEach((we, me) => {
      we.tabIndex = (Fe === -1 ? me === 0 && A === "first" : me === Fe) ? 0 : -1;
    }), Fe >= 0) {
      ce[Fe]?.focus(), $t.current = Fe;
      const me = t[Fe];
      D?.(me ? _(me) : void 0, me, Fe);
    }
  }, [Fe, t, A, D, _]);
  const Xs = (ce) => {
    const we = q === "vertical" ? "ArrowDown" : "ArrowRight", me = q === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ce.key === we)
      ce.preventDefault(), kt((pe) => Math.min(t.length - 1, pe + 1));
    else if (ce.key === me)
      ce.preventDefault(), kt((pe) => Math.max(0, pe - 1));
    else if (ce.key === "Home")
      ce.preventDefault(), kt(0);
    else if (ce.key === "End")
      ce.preventDefault(), kt(t.length - 1);
    else if (ce.key === "Enter" || ce.key === " ") {
      ce.preventDefault();
      const pe = t[Fe];
      pe && !pe.disabled && ut(_(pe), pe);
    } else if (ce.key.length === 1 && /[a-z0-9]/i.test(ce.key)) {
      Ae.current || (Ae.current = { buffer: "", last: 0 });
      const pe = Date.now(), rt = 700, at = ce.key.toLowerCase();
      pe - Ae.current.last > rt ? Ae.current.buffer = at : Ae.current.buffer += at, Ae.current.last = pe;
      let Ne = Ae.current.buffer;
      const In = Ne.split("").every((St) => St === Ne[0]), wt = t.map((St) => String(St.label || "").toLowerCase());
      let Mr = 0;
      Fe >= 0 && (Mr = (Fe + 1) % t.length);
      let st;
      const Rn = (St, _f) => {
        const $r = t.length;
        for (let Bn = 0; Bn < $r; Bn++) {
          const Fn = (Mr + Bn) % $r;
          if (!t[Fn].disabled && wt[Fn].startsWith(St))
            return Fn;
        }
      };
      In && Ne.length > 1 ? st = Rn(Ne[0]) : (st = Rn(Ne), st === void 0 && Ne.length > 1 && (st = Rn(Ne[Ne.length - 1]), st !== void 0 && Ae.current && (Ae.current.buffer = Ne[Ne.length - 1]))), st !== void 0 && kt(st);
    }
  }, Qs = he.useMemo(() => {
    if ($ && ($ === "url" || $ === "both") && typeof window < "u") {
      const we = new URLSearchParams(window.location.search).get(z);
      if (we === "1") return !0;
      if (we === "0") return !1;
    }
    if ($ && ($ === "localStorage" || $ === "both") && typeof window < "u")
      try {
        const ce = window.localStorage.getItem(O);
        if (ce === "1") return !0;
        if (ce === "0") return !1;
      } catch {
      }
    return X;
  }, [$, X, O, z]), [Ee, eo] = he.useState(Qs);
  he.useEffect(() => {
    re?.(Ee);
  }, [Ee, re]);
  const to = he.useCallback(() => {
    ue && P && eo((ce) => !ce);
  }, [ue, P]);
  he.useEffect(() => {
    if ($ && !(typeof window > "u")) {
      if ($ === "localStorage" || $ === "both")
        try {
          window.localStorage.setItem(O, Ee ? "1" : "0");
        } catch {
        }
      if ($ === "url" || $ === "both") {
        const ce = new URLSearchParams(window.location.search);
        ce.set(z, Ee ? "1" : "0");
        const we = `${window.location.pathname}?${ce.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", we);
      }
    }
  }, [Ee, $, O, z]);
  const no = [
    "nhs-navigation-split-view",
    d ? "nhs-navigation-split-view--animated" : "",
    te ? "nhs-navigation-split-view--detail-active" : "",
    ne === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    P && ue && Ee ? "nhs-navigation-split-view--nav-collapsed" : "",
    x
  ].filter(Boolean).join(" "), Tn = he.useRef(null);
  he.useEffect(() => {
    if (!L && Tn.current) {
      const ce = H ? `Selected ${H.label}` : "Selection cleared";
      Tn.current.textContent = ce;
    }
  }, [H, L]), he.useEffect(() => {
    !te && I == null && _t.current && _t.current.querySelectorAll("[data-nav-item]")[$t.current]?.focus();
  }, [te, I]);
  const tt = ne === "three-column", [Dn, ro] = he.useState(!1);
  he.useEffect(() => {
    tt && !Dn && ro(!0);
  }, [tt, Dn]);
  const Er = he.useRef(tt);
  he.useEffect(() => {
    Er.current !== tt && (T?.(tt), Er.current = tt);
  }, [tt, T]);
  const ao = () => {
    if (ne === "cards")
      return /* @__PURE__ */ n.jsxs("ul", { className: "nhs-navigation-split-view__cards", role: "listbox", "aria-activedescendant": I ? String(I) : void 0, children: [
        t.map((me) => {
          const pe = _(me), rt = pe === I;
          return /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", role: "option", "aria-selected": rt, children: /* @__PURE__ */ n.jsxs(
            "button",
            {
              id: String(pe),
              type: "button",
              className: "nhs-navigation-split-view__card",
              "data-selected": rt || void 0,
              "data-disabled": me.disabled || void 0,
              disabled: me.disabled,
              onClick: () => !me.disabled && ut(pe, me),
              children: [
                me.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: me.icon }),
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: me.label }),
                me.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: me.description }),
                s?.(me),
                me.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: me.badge })
              ]
            }
          ) }, pe);
        }),
        t.length === 0 && !b && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", "aria-disabled": "true", children: f || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
      ] });
    const ce = "nsv-nav-instructions", we = he.useMemo(() => {
      const me = ({ item: pe, idx: rt, selected: at }) => {
        const Ne = _(pe), In = pe.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: at ? 0 : -1,
          onClick: () => {
            $t.current = rt, ut(Ne, pe);
          },
          onKeyDown: (wt) => {
            (wt.key === "Enter" || wt.key === " ") && (wt.preventDefault(), $t.current = rt, ut(Ne, pe));
          }
        };
        return /* @__PURE__ */ n.jsxs(
          "li",
          {
            id: String(Ne),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": at,
            "aria-current": at ? "true" : void 0,
            "data-selected": at || void 0,
            "data-disabled": pe.disabled || void 0,
            ...In,
            children: [
              pe.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: pe.icon }),
              /* @__PURE__ */ n.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: pe.label }),
                pe.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: pe.description }),
                s?.(pe)
              ] }),
              pe.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: pe.badge })
            ]
          }
        );
      };
      return he.memo(me);
    }, [_, ut, s]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: _t,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Xs,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": ce,
          "aria-activedescendant": I ? String(I) : void 0,
          children: [
            t.map((me, pe) => /* @__PURE__ */ n.jsx(we, { item: me, idx: pe, selected: _(me) === I }, _(me))),
            t.length === 0 && !b && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__list-item", "aria-disabled": "true", children: f || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
          ]
        }
      ),
      /* @__PURE__ */ n.jsx("div", { id: ce, style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: k })
    ] });
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: V,
      className: no,
      "aria-label": B?.rootLabel,
      "data-layout": ne,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__panes", "data-active-detail": te || void 0, style: { transform: te ? "translateX(-100%)" : void 0 }, children: [
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "nhs-navigation-split-view__nav-pane",
              role: "navigation",
              "aria-label": B?.navigationLabel || "Items",
              "data-collapsed": Ee || void 0,
              children: [
                P && ue && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: to,
                    className: "nhs-navigation-split-view__nav-collapse-btn",
                    "aria-label": Ee ? ie : de,
                    title: Ee ? ie : de,
                    children: Ee ? S || /* @__PURE__ */ n.jsx(Ec, {}) : Q || /* @__PURE__ */ n.jsx(Lc, {})
                  }
                ) }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: ao() }),
                oe && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-footer", role: "contentinfo", children: oe })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              ref: K,
              className: "nhs-navigation-split-view__content-pane",
              role: "region",
              "aria-label": B?.contentLabel || "Content",
              "data-has-selection": !!H || void 0,
              tabIndex: -1,
              children: [
                $e && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: Js }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__content-inner", style: { padding: 32, flex: 1 }, children: ke && !ye ? l?.(H) : i(H) })
              ]
            }
          ),
          ne === "three-column" && (!W || Dn) && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhs-navigation-split-view__secondary-pane",
              role: "region",
              "aria-label": B?.secondaryContentLabel || "Secondary",
              children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__secondary-inner", style: { display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }, children: [
                H && F && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__secondary-header", style: { padding: "16px 32px", borderBottom: "1px solid var(--nsplit-divider)" }, children: typeof F == "function" ? F(H) : F }),
                /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(H) })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ n.jsx("div", { ref: Tn, "aria-live": "polite", "aria-atomic": "true", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" } }),
        /* @__PURE__ */ n.jsx("div", { "aria-live": "polite", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: tt ? "Expanded to three column layout" : "In two column layout" })
      ] })
    }
  );
}
Mc.displayName = "NavigationSplitView";
const $c = "150ms", Ac = "300ms", Hc = "500ms", Pc = "cubic-bezier(0.4, 0, 1, 1)", zc = "cubic-bezier(0, 0, 0.2, 1)", Wc = "cubic-bezier(0.4, 0, 0.2, 1)", Oc = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Uc = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Gc = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Vc = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Yc = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", qc = "1px", Kc = "2px", Zc = "4px", Jc = "4px", Xc = "4px", Qc = "2px", ed = "1px", td = "0px", nd = "4px", rd = "8px", ad = "12px", as = "#d8dde0", ss = "#4c6272", os = "#d8dde0", is = "#aeb7bd", ls = "#d5281b", cs = "#005eb8", ds = "#ffffff", us = "#212b32", hs = "#007f3b", fs = "#330072", ms = "#7c2855", ps = "#d5281b", gs = "#ffeb3b", bs = "#fff9c4", xs = "#ffb81c", ys = "#ed8b00", vs = "#00a499", _s = "#ae2573", ks = "#4c6272", ws = "#768692", Ss = "#aeb7bd", Cs = "#d8dde0", js = "#f0f4f5", sd = "#212b32", od = "#4c6272", id = "#ffffff", ld = "#212b32", cd = "#005eb8", dd = "#7c2855", ud = "#003087", hd = "#330072", fd = "#ffeb3b", md = "#212b32", pd = "#d8dde0", gd = "#ffffff33", bd = "#d5281b", xd = "#4c6272", yd = "#ffffff", vd = "#007f3b", _d = "#ffffff", kd = "#006530", wd = "#004021", Sd = "#004021", Cd = "#00000000", jd = "#ffffff", Nd = "#005eb8", Td = "#005eb8", Dd = "#d9e5f2", Id = "#c7daf0", Rd = "#005eb8", Bd = "#ffffff", Fd = "#212b32", Ld = "#d9dde0", Ed = "#b3bcc2", Md = "#b3bcc2", $d = "#d5281b", Ad = "#aa2016", Hd = "#6a140e", Pd = "#6a140e", zd = "#005eb8", Wd = "#004b93", Od = "#002f5c", Ud = "#002f5c", Gd = "8px", Vd = "16px", Yd = "12px", qd = "16px", Kd = "4px", Zd = "40px", Jd = "4px", Xd = "40px", Qd = "12px", eu = "16px", tu = "32px", nu = "16px", ru = "20px", au = "28px", su = "9px", ou = "2px", iu = "16px", lu = "24px", cu = "8px", du = "24px", uu = "16px", hu = "4px", fu = "4px", mu = "4px", pu = "8px", gu = "4px", bu = "16px", xu = "#007f3b", yu = "#006530", vu = "#004021", _u = "#d8dde0", ku = "#ffffff", wu = "#768692", Su = "#00000000", Cu = "#ffeb3b", ju = "#00000000", Nu = "#ffffff", Tu = "#d9e5f2", Du = "#c7daf0", Iu = "#005eb8", Ru = "#005eb8", Ns = "8px", Ts = "16px", Ds = "12px", Is = "16px", Bu = "2px", Fu = "4px", Lu = "4px", Eu = "600", Mu = "#ffffff", $u = "#d8dde0", Au = "#aeb7bd", Hu = "#f0f4f5", Pu = "#212b32", zu = "#212b32", Wu = "#005eb8", Rs = "16px", Bs = "32px", Fs = "16px", Ou = "1px", Uu = "4px", Gu = "none", Vu = "0 2px 4px rgba(0, 0, 0, 0.1)", Yu = "#ffffff", qu = "#ffffff", Ku = "#d8dde0", Zu = "#ffffff", Ju = "#4c6272", Xu = "#ffeb3b", Qu = "#d5281b", eh = "#aeb7bd", th = "#212b32", nh = "#4c6272", rh = "#768692", ah = "#212b32", sh = "#ffffff", oh = "600", ih = "#d5281b", lh = "600", ch = "#4c6272", Ls = "4px", Es = "40px", Ms = "40px", $s = "12px", dh = "2px", uh = "4px", hh = "0px", fh = "16px", mh = "18px", ph = "24px", gh = "32px", bh = "34px", xh = "32px", yh = "40px", vh = "48px", _h = "5.4ex", kh = "7.2ex", wh = "9ex", Sh = "10.8ex", Ch = "20ex", jh = "38ex", Nh = "56ex", Th = "44px", Dh = "40px", Ih = "1020px", Rh = "100%", Bh = "50%", Fh = "33.333%", Lh = "25%", Eh = "20%", Mh = "320px", $h = "641px", Ah = "1025px", Hh = "1280px", Ph = "960px", zh = "32px", Wh = "16px", Oh = "#d5281b", Uh = "#d5281b", Gh = "#ffffff", Vh = "#007f3b", Yh = "#007f3b", qh = "#ffffff", Kh = "#ffeb3b", Zh = "#ffeb3b", Jh = "#212b32", Xh = "#005eb8", Qh = "#005eb8", ef = "#ffffff", tf = "#d8dde0", nf = "#aeb7bd", rf = "#768692", af = "0 4px 0 #004021", sf = "0 4px 0 #005eb8", of = "0 4px 0 #6a140e", lf = "0 4px 0 #ffeb3b", cf = "none", df = "0 2px 4px rgba(0, 0, 0, 0.1)", uf = "4px", hf = "0px", ff = "solid", mf = "0 0 0 3px #ffeb3b", pf = "0 0 0 3px #ffeb3b", gf = "none", bf = "0 1px 3px rgba(0, 0, 0, 0.12)", xf = "0 2px 6px rgba(0, 0, 0, 0.16)", yf = "0 4px 12px rgba(0, 0, 0, 0.20)", As = "0", Hs = "4px", Ps = "8px", zs = "16px", Ws = "24px", Os = "32px", Us = "40px", Gs = "48px", Vs = "56px", Ys = "64px", Zn = "0", Jn = "0", Xn = "4px", Qn = "4px", er = "8px", tr = "8px", nr = "8px", rr = "16px", ar = "16px", sr = "24px", or = "24px", ir = "32px", lr = "32px", cr = "40px", dr = "40px", ur = "48px", hr = "48px", fr = "56px", mr = "56px", pr = "64px", Zt = "Frutiger W01", Jt = "Arial, Helvetica, sans-serif", Xt = "sans-serif", Qt = "400", en = "600", tn = "400", nn = "12px", rn = "14px", an = "12pt", sn = "14px", on = "16px", ln = "12pt", cn = "16px", dn = "19px", un = "13pt", hn = "19px", fn = "22px", mn = "15pt", pn = "22px", gn = "26px", bn = "17pt", xn = "27px", yn = "36px", vn = "20pt", _n = "33px", kn = "48px", wn = "24pt", gr = "16px", br = "24px", He = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Pe = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ze = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, We = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Oe = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ue = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ge = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ve = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ye = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, qe = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: $c,
  AnimationDurationNormal: Ac,
  AnimationDurationSlow: Hc,
  AnimationEasingBounce: Oc,
  AnimationEasingEaseIn: Pc,
  AnimationEasingEaseInOut: Wc,
  AnimationEasingEaseOut: zc,
  BorderColorCard: os,
  BorderColorCardHover: is,
  BorderColorDefault: as,
  BorderColorError: ls,
  BorderColorForm: ss,
  BorderRadiusLarge: ad,
  BorderRadiusMedium: rd,
  BorderRadiusNone: td,
  BorderRadiusSmall: nd,
  BorderWidthCardBottom: Jc,
  BorderWidthDefault: qc,
  BorderWidthFormElement: Kc,
  BorderWidthFormElementError: Zc,
  BorderWidthPanel: Xc,
  BorderWidthTableCell: ed,
  BorderWidthTableHeader: Qc,
  BreakpointDesktop: Ah,
  BreakpointLargeDesktop: Hh,
  BreakpointMobile: Mh,
  BreakpointTablet: $h,
  ButtonBorderRadius: Fu,
  ButtonBorderWidth: Bu,
  ButtonPrimaryBackgroundActive: vu,
  ButtonPrimaryBackgroundDefault: xu,
  ButtonPrimaryBackgroundDisabled: _u,
  ButtonPrimaryBackgroundHover: yu,
  ButtonPrimaryBorderDefault: Su,
  ButtonPrimaryBorderFocus: Cu,
  ButtonPrimaryTextDefault: ku,
  ButtonPrimaryTextDisabled: wu,
  ButtonSecondaryBackgroundActive: Du,
  ButtonSecondaryBackgroundDefault: ju,
  ButtonSecondaryBackgroundHover: Tu,
  ButtonSecondaryBackgroundSolid: Nu,
  ButtonSecondaryBorderDefault: Ru,
  ButtonSecondaryTextDefault: Iu,
  ButtonShadowSize: Lu,
  ButtonSpacingPaddingHorizontalDesktop: Is,
  ButtonSpacingPaddingHorizontalMobile: Ts,
  ButtonSpacingPaddingVerticalDesktop: Ds,
  ButtonSpacingPaddingVerticalMobile: Ns,
  ButtonTypographyWeight: Eu,
  CardBackgroundDefault: Mu,
  CardBorderBottom: Hu,
  CardBorderDefault: $u,
  CardBorderHover: Au,
  CardBorderWidthBottom: Uu,
  CardBorderWidthDefault: Ou,
  CardShadowDefault: Gu,
  CardShadowHover: Vu,
  CardSpacingHeadingMargin: Fs,
  CardSpacingPaddingDesktop: Bs,
  CardSpacingPaddingMobile: Rs,
  CardTextDescription: zu,
  CardTextHeading: Pu,
  CardTextLink: Wu,
  ColorBorderDefault: pd,
  ColorBorderSecondary: gd,
  ColorButtonLoginActive: Od,
  ColorButtonLoginBackground: zd,
  ColorButtonLoginHover: Wd,
  ColorButtonLoginShadow: Ud,
  ColorButtonPrimaryActive: wd,
  ColorButtonPrimaryBackground: vd,
  ColorButtonPrimaryHover: kd,
  ColorButtonPrimaryShadow: Sd,
  ColorButtonPrimaryText: _d,
  ColorButtonReverseActive: Ed,
  ColorButtonReverseBackground: Bd,
  ColorButtonReverseHover: Ld,
  ColorButtonReverseShadow: Md,
  ColorButtonReverseText: Fd,
  ColorButtonSecondaryActive: Id,
  ColorButtonSecondaryBackground: Cd,
  ColorButtonSecondaryBackgroundSolid: jd,
  ColorButtonSecondaryBorder: Nd,
  ColorButtonSecondaryHover: Dd,
  ColorButtonSecondaryShadow: Rd,
  ColorButtonSecondaryText: Td,
  ColorButtonWarningActive: Hd,
  ColorButtonWarningBackground: $d,
  ColorButtonWarningHover: Ad,
  ColorButtonWarningShadow: Pd,
  ColorError: bd,
  ColorFocusBackground: fd,
  ColorFocusText: md,
  ColorFormBackground: yd,
  ColorFormBorder: xd,
  ColorGrey1: ks,
  ColorGrey2: ws,
  ColorGrey3: Ss,
  ColorGrey4: Cs,
  ColorGrey5: js,
  ColorLinkActive: ud,
  ColorLinkDefault: cd,
  ColorLinkHover: dd,
  ColorLinkVisited: hd,
  ColorPrimaryBlack: us,
  ColorPrimaryBlue: cs,
  ColorPrimaryDarkPink: ms,
  ColorPrimaryGreen: hs,
  ColorPrimaryPurple: fs,
  ColorPrimaryRed: ps,
  ColorPrimaryWhite: ds,
  ColorPrimaryYellow: gs,
  ColorSecondaryAquaGreen: vs,
  ColorSecondaryOrange: ys,
  ColorSecondaryPaleYellow: bs,
  ColorSecondaryPink: _s,
  ColorSecondaryWarmYellow: xs,
  ColorTextPrimary: sd,
  ColorTextPrint: ld,
  ColorTextReverse: id,
  ColorTextSecondary: od,
  ComponentBlur: fu,
  ComponentBreadcrumbChevronMarginLeft: su,
  ComponentBreadcrumbChevronMarginRight: ou,
  ComponentBreadcrumbPaddingTopDesktop: lu,
  ComponentBreadcrumbPaddingTopMobile: iu,
  ComponentButtonPaddingDesktopHorizontal: qd,
  ComponentButtonPaddingDesktopVertical: Yd,
  ComponentButtonPaddingMobileHorizontal: Vd,
  ComponentButtonPaddingMobileVertical: Gd,
  ComponentButtonShadowSize: Kd,
  ComponentCardHeadingMargin: nu,
  ComponentCardPaddingDesktop: tu,
  ComponentCardPaddingMobile: eu,
  ComponentDetails: pu,
  ComponentExpander: gu,
  ComponentFormCheckboxLabelPadding: Qd,
  ComponentFormCheckboxSize: Xd,
  ComponentFormInputMinHeight: Zd,
  ComponentFormInputPadding: Jd,
  ComponentLink: mu,
  ComponentPagination: bu,
  ComponentPanelPaddingDesktop: au,
  ComponentPanelPaddingMobile: ru,
  ComponentSpread: hu,
  ComponentSummaryListCellPaddingHorizontal: du,
  ComponentSummaryListCellPaddingVertical: cu,
  ComponentSummaryListRowMargin: uu,
  ElevationHigh: yf,
  ElevationLow: bf,
  ElevationMedium: xf,
  ElevationNone: gf,
  FocusOutlineOffset: hf,
  FocusOutlineStyle: ff,
  FocusOutlineWidth: uf,
  FocusShadowButton: pf,
  FocusShadowInput: mf,
  FontFamilyBase: Zt,
  FontFamilyFallback: Jt,
  FontFamilyPrint: Xt,
  FontLineHeightBase: br,
  FontSize14Mobile: nn,
  FontSize14Print: an,
  FontSize14Tablet: rn,
  FontSize16Mobile: sn,
  FontSize16Print: ln,
  FontSize16Tablet: on,
  FontSize19Mobile: cn,
  FontSize19Print: un,
  FontSize19Tablet: dn,
  FontSize22Mobile: hn,
  FontSize22Print: mn,
  FontSize22Tablet: fn,
  FontSize26Mobile: pn,
  FontSize26Print: bn,
  FontSize26Tablet: gn,
  FontSize36Mobile: xn,
  FontSize36Print: vn,
  FontSize36Tablet: yn,
  FontSize48Mobile: _n,
  FontSize48Print: wn,
  FontSize48Tablet: kn,
  FontSizeBase: gr,
  FontWeightBold: en,
  FontWeightLight: tn,
  FontWeightNormal: Qt,
  FormBorderRadius: hh,
  FormBorderWidthDefault: dh,
  FormBorderWidthError: uh,
  FormErrorTextDefault: ih,
  FormErrorTypographyWeight: lh,
  FormHintTextDefault: ch,
  FormInputBackgroundDefault: Yu,
  FormInputBackgroundDisabled: Ku,
  FormInputBackgroundError: Zu,
  FormInputBackgroundFocus: qu,
  FormInputBorderDefault: Ju,
  FormInputBorderDisabled: eh,
  FormInputBorderError: Qu,
  FormInputBorderFocus: Xu,
  FormInputTextDefault: th,
  FormInputTextDisabled: rh,
  FormInputTextPlaceholder: nh,
  FormLabelTextDefault: ah,
  FormLabelTextRequired: sh,
  FormLabelTypographyWeight: oh,
  FormSpacingCheckboxLabelPadding: $s,
  FormSpacingCheckboxSize: Ms,
  FormSpacingInputMinHeight: Es,
  FormSpacingInputPadding: Ls,
  GridGutter: zh,
  GridGutterHalf: Wh,
  GridPageWidth: Ph,
  HeadingsNhsukHeadingL: Pe,
  HeadingsNhsukHeadingM: ze,
  HeadingsNhsukHeadingS: We,
  HeadingsNhsukHeadingXl: He,
  HeadingsNhsukHeadingXs: Oe,
  LayoutColumnActions: Eh,
  LayoutColumnFull: Rh,
  LayoutColumnHalf: Bh,
  LayoutColumnQuarter: Lh,
  LayoutColumnThird: Fh,
  LayoutContainerMaxWidth: Ih,
  ParagraphsBody: Ue,
  ParagraphsBodyLarge: Ge,
  ParagraphsBodySmall: Ve,
  ParagraphsLedeText: Ye,
  ParagraphsLedeTextSmall: qe,
  ShadowButtonDefault: af,
  ShadowButtonFocus: lf,
  ShadowButtonSecondary: sf,
  ShadowButtonWarning: of,
  ShadowCardDefault: cf,
  ShadowCardHover: df,
  SizeButtonMinHeightDesktop: Dh,
  SizeButtonMinHeightMobile: Th,
  SizeFormControlLarge: vh,
  SizeFormControlMedium: yh,
  SizeFormControlSmall: xh,
  SizeFormInputWidth2xl: jh,
  SizeFormInputWidth3xl: Nh,
  SizeFormInputWidthLg: Sh,
  SizeFormInputWidthMd: wh,
  SizeFormInputWidthSm: kh,
  SizeFormInputWidthXl: Ch,
  SizeFormInputWidthXs: _h,
  SizeIconExtraLarge: gh,
  SizeIconLarge: ph,
  SizeIconMedium: mh,
  SizeIconNhsDefault: bh,
  SizeIconSmall: fh,
  Spacing0: As,
  Spacing1: Hs,
  Spacing2: Ps,
  Spacing3: zs,
  Spacing4: Ws,
  Spacing5: Os,
  Spacing6: Us,
  Spacing7: Gs,
  Spacing8: Vs,
  Spacing9: Ys,
  SpacingResponsive0Mobile: Zn,
  SpacingResponsive0Tablet: Jn,
  SpacingResponsive1Mobile: Xn,
  SpacingResponsive1Tablet: Qn,
  SpacingResponsive2Mobile: er,
  SpacingResponsive2Tablet: tr,
  SpacingResponsive3Mobile: nr,
  SpacingResponsive3Tablet: rr,
  SpacingResponsive4Mobile: ar,
  SpacingResponsive4Tablet: sr,
  SpacingResponsive5Mobile: or,
  SpacingResponsive5Tablet: ir,
  SpacingResponsive6Mobile: lr,
  SpacingResponsive6Tablet: cr,
  SpacingResponsive7Mobile: dr,
  SpacingResponsive7Tablet: ur,
  SpacingResponsive8Mobile: hr,
  SpacingResponsive8Tablet: fr,
  SpacingResponsive9Mobile: mr,
  SpacingResponsive9Tablet: pr,
  StateDisabledBackground: tf,
  StateDisabledBorder: nf,
  StateDisabledText: rf,
  StateErrorBackground: Oh,
  StateErrorBorder: Uh,
  StateErrorText: Gh,
  StateInfoBackground: Xh,
  StateInfoBorder: Qh,
  StateInfoText: ef,
  StateSuccessBackground: Vh,
  StateSuccessBorder: Yh,
  StateSuccessText: qh,
  StateWarningBackground: Kh,
  StateWarningBorder: Zh,
  StateWarningText: Jh,
  TransitionButtonDefault: Uc,
  TransitionButtonShadow: Gc,
  TransitionCardHover: Yc,
  TransitionInputFocus: Vc
}, Symbol.toStringTag, { value: "Module" })), am = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), sm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
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
), om = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
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
), im = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
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
), lm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), cm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), dm = ({
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
), um = ({
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
), hm = ({
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
), fm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ye.fontFamily,
      fontWeight: Ye.fontWeight,
      fontSize: Ye.fontSize.mobile,
      lineHeight: Ye.lineHeight,
      marginTop: Ye.marginTop,
      marginBottom: Ye.marginBottom.mobile,
      ...r
    },
    children: e
  }
), mm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: qe.fontFamily,
      fontWeight: qe.fontWeight,
      fontSize: qe.fontSize.mobile,
      lineHeight: qe.lineHeight,
      marginTop: qe.marginTop,
      marginBottom: qe.marginBottom.mobile,
      ...r
    },
    children: e
  }
), pm = () => _e(() => vf, []), gm = () => _e(() => ({
  // Border colors
  BorderColorDefault: as,
  BorderColorForm: ss,
  BorderColorCard: os,
  BorderColorCardHover: is,
  BorderColorError: ls,
  // Primary colors
  ColorPrimaryBlue: cs,
  ColorPrimaryWhite: ds,
  ColorPrimaryBlack: us,
  ColorPrimaryGreen: hs,
  ColorPrimaryPurple: fs,
  ColorPrimaryDarkPink: ms,
  ColorPrimaryRed: ps,
  ColorPrimaryYellow: gs,
  // Secondary colors
  ColorSecondaryPaleYellow: bs,
  ColorSecondaryWarmYellow: xs,
  ColorSecondaryOrange: ys,
  ColorSecondaryAquaGreen: vs,
  ColorSecondaryPink: _s,
  // Grey scale
  ColorGrey1: ks,
  ColorGrey2: ws,
  ColorGrey3: Ss,
  ColorGrey4: Cs,
  ColorGrey5: js
}), []), bm = () => _e(() => ({
  Spacing0: As,
  Spacing1: Hs,
  Spacing2: Ps,
  Spacing3: zs,
  Spacing4: Ws,
  Spacing5: Os,
  Spacing6: Us,
  Spacing7: Gs,
  Spacing8: Vs,
  Spacing9: Ys
}), []), xm = () => _e(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: nn,
    Size16: sn,
    Size19: cn,
    Size22: hn,
    Size26: pn,
    Size36: xn,
    Size48: _n
  },
  Tablet: {
    Size14: rn,
    Size16: on,
    Size19: dn,
    Size22: fn,
    Size26: gn,
    Size36: yn,
    Size48: kn
  },
  Print: {
    Size14: an,
    Size16: ln,
    Size19: un,
    Size22: mn,
    Size26: bn,
    Size36: vn,
    Size48: wn
  },
  Family: {
    Base: Zt,
    Fallback: Jt,
    Print: Xt
  },
  Weight: {
    Normal: Qt,
    Bold: en,
    Light: tn
  },
  Base: {
    Size: gr,
    LineHeight: br
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Zt,
  FontFamilyFallback: Jt,
  FontFamilyPrint: Xt,
  FontWeightNormal: Qt,
  FontWeightBold: en,
  FontWeightLight: tn,
  FontSize14Mobile: nn,
  FontSize14Tablet: rn,
  FontSize14Print: an,
  FontSize16Mobile: sn,
  FontSize16Tablet: on,
  FontSize16Print: ln,
  FontSize19Mobile: cn,
  FontSize19Tablet: dn,
  FontSize19Print: un,
  FontSize22Mobile: hn,
  FontSize22Tablet: fn,
  FontSize22Print: mn,
  FontSize26Mobile: pn,
  FontSize26Tablet: gn,
  FontSize26Print: bn,
  FontSize36Mobile: xn,
  FontSize36Tablet: yn,
  FontSize36Print: vn,
  FontSize48Mobile: _n,
  FontSize48Tablet: kn,
  FontSize48Print: wn,
  FontSizeBase: gr,
  FontLineHeightBase: br
}), []), ym = () => _e(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Zn,
    Size1: Xn,
    Size2: er,
    Size3: nr,
    Size4: ar,
    Size5: or,
    Size6: lr,
    Size7: dr,
    Size8: hr,
    Size9: mr
  },
  Tablet: {
    Size0: Jn,
    Size1: Qn,
    Size2: tr,
    Size3: rr,
    Size4: sr,
    Size5: ir,
    Size6: cr,
    Size7: ur,
    Size8: fr,
    Size9: pr
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Zn,
  SpacingResponsive0Tablet: Jn,
  SpacingResponsive1Mobile: Xn,
  SpacingResponsive1Tablet: Qn,
  SpacingResponsive2Mobile: er,
  SpacingResponsive2Tablet: tr,
  SpacingResponsive3Mobile: nr,
  SpacingResponsive3Tablet: rr,
  SpacingResponsive4Mobile: ar,
  SpacingResponsive4Tablet: sr,
  SpacingResponsive5Mobile: or,
  SpacingResponsive5Tablet: ir,
  SpacingResponsive6Mobile: lr,
  SpacingResponsive6Tablet: cr,
  SpacingResponsive7Mobile: dr,
  SpacingResponsive7Tablet: ur,
  SpacingResponsive8Mobile: hr,
  SpacingResponsive8Tablet: fr,
  SpacingResponsive9Mobile: mr,
  SpacingResponsive9Tablet: pr
}), []), vm = () => _e(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Ns,
  ButtonSpacingPaddingHorizontalMobile: Ts,
  ButtonSpacingPaddingVerticalDesktop: Ds,
  ButtonSpacingPaddingHorizontalDesktop: Is,
  // Card spacing	
  CardSpacingPaddingMobile: Rs,
  CardSpacingPaddingDesktop: Bs,
  CardSpacingHeadingMargin: Fs,
  // Form spacing
  FormSpacingInputPadding: Ls,
  FormSpacingInputMinHeight: Es,
  FormSpacingCheckboxSize: Ms,
  FormSpacingCheckboxLabelPadding: $s
}), []), _m = () => _e(() => ({
  xl: He,
  l: Pe,
  m: ze,
  s: We,
  xs: Oe
}), []), km = () => _e(() => ({
  body: Ue,
  bodyLarge: Ge,
  bodySmall: Ve,
  ledeText: Ye,
  ledeTextSmall: qe
}), []), wm = () => _e(() => ({
  headings: {
    xl: He,
    l: Pe,
    m: ze,
    s: We,
    xs: Oe
  },
  paragraphs: {
    body: Ue,
    bodyLarge: Ge,
    bodySmall: Ve,
    ledeText: Ye,
    ledeTextSmall: qe
  },
  fonts: {
    family: {
      base: Zt,
      fallback: Jt,
      print: Xt
    },
    weight: {
      normal: Qt,
      bold: en,
      light: tn
    },
    sizes: {
      mobile: {
        size14: nn,
        size16: sn,
        size19: cn,
        size22: hn,
        size26: pn,
        size36: xn,
        size48: _n
      },
      tablet: {
        size14: rn,
        size16: on,
        size19: dn,
        size22: fn,
        size26: gn,
        size36: yn,
        size48: kn
      },
      print: {
        size14: an,
        size16: ln,
        size19: un,
        size22: mn,
        size26: bn,
        size36: vn,
        size48: wn
      }
    }
  }
}), []);
function Sm(e = {}) {
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
const qs = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, Te = {
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
function Cm(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...qs, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${Te.normal.eot}?#iefix") format("eot"),
       url("${t}${Te.normal.woff2}") format("woff2"),
       url("${t}${Te.normal.woff}") format("woff"),
       url("${t}${Te.normal.ttf}") format("truetype");
  src: url("${t}${Te.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${Te.bold.eot}?#iefix") format("eot"),
       url("${t}${Te.bold.woff2}") format("woff2"),
       url("${t}${Te.bold.woff}") format("woff"),
       url("${t}${Te.bold.ttf}") format("truetype");
  src: url("${t}${Te.bold.eot}");
}`), a.join(`
`);
}
function jm(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...qs, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${Te.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${Te.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${Te.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${Te.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const Nm = '"Frutiger W01", Arial, Helvetica, sans-serif', Tm = "Arial, Helvetica, sans-serif";
async function Dm() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  xr as Account,
  Sf as ActionLink,
  Qf as AdaptiveDataGrid,
  $c as AnimationDurationFast,
  Ac as AnimationDurationNormal,
  Hc as AnimationDurationSlow,
  Oc as AnimationEasingBounce,
  Pc as AnimationEasingEaseIn,
  Wc as AnimationEasingEaseInOut,
  zc as AnimationEasingEaseOut,
  qa as AppointmentCard,
  ql as AriaDataGrid,
  qn as AriaTabsDataGrid,
  Qf as AriaTabsDataGridAdaptive,
  Un as BackLink,
  os as BorderColorCard,
  is as BorderColorCardHover,
  as as BorderColorDefault,
  ls as BorderColorError,
  ss as BorderColorForm,
  ad as BorderRadiusLarge,
  rd as BorderRadiusMedium,
  td as BorderRadiusNone,
  nd as BorderRadiusSmall,
  Jc as BorderWidthCardBottom,
  qc as BorderWidthDefault,
  Kc as BorderWidthFormElement,
  Zc as BorderWidthFormElementError,
  Xc as BorderWidthPanel,
  ed as BorderWidthTableCell,
  Qc as BorderWidthTableHeader,
  Pl as Breadcrumb,
  Ah as BreakpointDesktop,
  Hh as BreakpointLargeDesktop,
  Mh as BreakpointMobile,
  $h as BreakpointTablet,
  Ie as Button,
  Fu as ButtonBorderRadius,
  Bu as ButtonBorderWidth,
  vu as ButtonPrimaryBackgroundActive,
  xu as ButtonPrimaryBackgroundDefault,
  _u as ButtonPrimaryBackgroundDisabled,
  yu as ButtonPrimaryBackgroundHover,
  Su as ButtonPrimaryBorderDefault,
  Cu as ButtonPrimaryBorderFocus,
  ku as ButtonPrimaryTextDefault,
  wu as ButtonPrimaryTextDisabled,
  Du as ButtonSecondaryBackgroundActive,
  ju as ButtonSecondaryBackgroundDefault,
  Tu as ButtonSecondaryBackgroundHover,
  Nu as ButtonSecondaryBackgroundSolid,
  Ru as ButtonSecondaryBorderDefault,
  Iu as ButtonSecondaryTextDefault,
  Lu as ButtonShadowSize,
  Is as ButtonSpacingPaddingHorizontalDesktop,
  Ts as ButtonSpacingPaddingHorizontalMobile,
  Ds as ButtonSpacingPaddingVerticalDesktop,
  Ns as ButtonSpacingPaddingVerticalMobile,
  Eu as ButtonTypographyWeight,
  Ga as Card,
  Mu as CardBackgroundDefault,
  Hu as CardBorderBottom,
  $u as CardBorderDefault,
  Au as CardBorderHover,
  Uu as CardBorderWidthBottom,
  Ou as CardBorderWidthDefault,
  zf as CardGroup,
  Wf as CardGroupItem,
  Gu as CardShadowDefault,
  Vu as CardShadowHover,
  Fs as CardSpacingHeadingMargin,
  Bs as CardSpacingPaddingDesktop,
  Rs as CardSpacingPaddingMobile,
  zu as CardTextDescription,
  Pu as CardTextHeading,
  Wu as CardTextLink,
  Of as CareCard,
  Cf as CharacterCount,
  go as Checkbox,
  bo as Checkboxes,
  pd as ColorBorderDefault,
  gd as ColorBorderSecondary,
  Od as ColorButtonLoginActive,
  zd as ColorButtonLoginBackground,
  Wd as ColorButtonLoginHover,
  Ud as ColorButtonLoginShadow,
  wd as ColorButtonPrimaryActive,
  vd as ColorButtonPrimaryBackground,
  kd as ColorButtonPrimaryHover,
  Sd as ColorButtonPrimaryShadow,
  _d as ColorButtonPrimaryText,
  Ed as ColorButtonReverseActive,
  Bd as ColorButtonReverseBackground,
  Ld as ColorButtonReverseHover,
  Md as ColorButtonReverseShadow,
  Fd as ColorButtonReverseText,
  Id as ColorButtonSecondaryActive,
  Cd as ColorButtonSecondaryBackground,
  jd as ColorButtonSecondaryBackgroundSolid,
  Nd as ColorButtonSecondaryBorder,
  Dd as ColorButtonSecondaryHover,
  Rd as ColorButtonSecondaryShadow,
  Td as ColorButtonSecondaryText,
  Hd as ColorButtonWarningActive,
  $d as ColorButtonWarningBackground,
  Ad as ColorButtonWarningHover,
  Pd as ColorButtonWarningShadow,
  bd as ColorError,
  fd as ColorFocusBackground,
  md as ColorFocusText,
  yd as ColorFormBackground,
  xd as ColorFormBorder,
  ks as ColorGrey1,
  ws as ColorGrey2,
  Ss as ColorGrey3,
  Cs as ColorGrey4,
  js as ColorGrey5,
  ud as ColorLinkActive,
  cd as ColorLinkDefault,
  dd as ColorLinkHover,
  hd as ColorLinkVisited,
  us as ColorPrimaryBlack,
  cs as ColorPrimaryBlue,
  ms as ColorPrimaryDarkPink,
  hs as ColorPrimaryGreen,
  fs as ColorPrimaryPurple,
  ps as ColorPrimaryRed,
  ds as ColorPrimaryWhite,
  gs as ColorPrimaryYellow,
  vs as ColorSecondaryAquaGreen,
  ys as ColorSecondaryOrange,
  bs as ColorSecondaryPaleYellow,
  _s as ColorSecondaryPink,
  xs as ColorSecondaryWarmYellow,
  sd as ColorTextPrimary,
  ld as ColorTextPrint,
  id as ColorTextReverse,
  od as ColorTextSecondary,
  kr as Column,
  fu as ComponentBlur,
  su as ComponentBreadcrumbChevronMarginLeft,
  ou as ComponentBreadcrumbChevronMarginRight,
  lu as ComponentBreadcrumbPaddingTopDesktop,
  iu as ComponentBreadcrumbPaddingTopMobile,
  qd as ComponentButtonPaddingDesktopHorizontal,
  Yd as ComponentButtonPaddingDesktopVertical,
  Vd as ComponentButtonPaddingMobileHorizontal,
  Gd as ComponentButtonPaddingMobileVertical,
  Kd as ComponentButtonShadowSize,
  nu as ComponentCardHeadingMargin,
  tu as ComponentCardPaddingDesktop,
  eu as ComponentCardPaddingMobile,
  pu as ComponentDetails,
  gu as ComponentExpander,
  Qd as ComponentFormCheckboxLabelPadding,
  Xd as ComponentFormCheckboxSize,
  Zd as ComponentFormInputMinHeight,
  Jd as ComponentFormInputPadding,
  mu as ComponentLink,
  bu as ComponentPagination,
  au as ComponentPanelPaddingDesktop,
  ru as ComponentPanelPaddingMobile,
  hu as ComponentSpread,
  du as ComponentSummaryListCellPaddingHorizontal,
  cu as ComponentSummaryListCellPaddingVertical,
  uu as ComponentSummaryListRowMargin,
  ja as Container,
  Pf as ContentsList,
  qs as DEFAULT_FONT_CONFIG,
  Zf as DashboardSummaryGrid,
  Ff as DateInput,
  Wl as Details,
  Ol as DoDontList,
  yf as ElevationHigh,
  bf as ElevationLow,
  xf as ElevationMedium,
  gf as ElevationNone,
  Wr as ErrorMessage,
  Bf as ErrorSummary,
  Ul as Expander,
  Te as FRUTIGER_FONT_FILES,
  _r as Fieldset,
  hf as FocusOutlineOffset,
  ff as FocusOutlineStyle,
  uf as FocusOutlineWidth,
  pf as FocusShadowButton,
  mf as FocusShadowInput,
  Zt as FontFamilyBase,
  Jt as FontFamilyFallback,
  Xt as FontFamilyPrint,
  br as FontLineHeightBase,
  nn as FontSize14Mobile,
  an as FontSize14Print,
  rn as FontSize14Tablet,
  sn as FontSize16Mobile,
  ln as FontSize16Print,
  on as FontSize16Tablet,
  cn as FontSize19Mobile,
  un as FontSize19Print,
  dn as FontSize19Tablet,
  hn as FontSize22Mobile,
  mn as FontSize22Print,
  fn as FontSize22Tablet,
  pn as FontSize26Mobile,
  bn as FontSize26Print,
  gn as FontSize26Tablet,
  xn as FontSize36Mobile,
  vn as FontSize36Print,
  yn as FontSize36Tablet,
  _n as FontSize48Mobile,
  wn as FontSize48Print,
  kn as FontSize48Tablet,
  gr as FontSizeBase,
  en as FontWeightBold,
  tn as FontWeightLight,
  Qt as FontWeightNormal,
  Ba as Footer,
  hh as FormBorderRadius,
  dh as FormBorderWidthDefault,
  uh as FormBorderWidthError,
  ih as FormErrorTextDefault,
  lh as FormErrorTypographyWeight,
  ch as FormHintTextDefault,
  Yu as FormInputBackgroundDefault,
  Ku as FormInputBackgroundDisabled,
  Zu as FormInputBackgroundError,
  qu as FormInputBackgroundFocus,
  Ju as FormInputBorderDefault,
  eh as FormInputBorderDisabled,
  Qu as FormInputBorderError,
  Xu as FormInputBorderFocus,
  th as FormInputTextDefault,
  rh as FormInputTextDisabled,
  nh as FormInputTextPlaceholder,
  ah as FormLabelTextDefault,
  sh as FormLabelTextRequired,
  oh as FormLabelTypographyWeight,
  $s as FormSpacingCheckboxLabelPadding,
  Ms as FormSpacingCheckboxSize,
  Es as FormSpacingInputMinHeight,
  Ls as FormSpacingInputPadding,
  Af as GanttChart,
  _o as Grid,
  zh as GridGutter,
  Wh as GridGutterHalf,
  Ph as GridPageWidth,
  Ra as Header,
  Mf as HeaderSSR,
  Ia as HeaderSearch,
  $f as HeaderStatic,
  Xe as Heading,
  Pe as HeadingsNhsukHeadingL,
  ze as HeadingsNhsukHeadingM,
  We as HeadingsNhsukHeadingS,
  He as HeadingsNhsukHeadingXl,
  Oe as HeadingsNhsukHeadingXs,
  To as Hero,
  Sa as Hint,
  Kf as Images,
  yr as Input,
  Uf as InsetText,
  vr as Label,
  Eh as LayoutColumnActions,
  Rh as LayoutColumnFull,
  Bh as LayoutColumnHalf,
  Lh as LayoutColumnQuarter,
  Fh as LayoutColumnThird,
  Ih as LayoutContainerMaxWidth,
  So as List,
  Na as MainWrapper,
  Ka as MedicationCard,
  dm as NHSBodyText,
  um as NHSBodyTextLarge,
  hm as NHSBodyTextSmall,
  sm as NHSHeading1,
  om as NHSHeading2,
  im as NHSHeading3,
  lm as NHSHeading4,
  cm as NHSHeading5,
  fm as NHSLedeText,
  mm as NHSLedeTextSmall,
  Ef as NHSThemeProvider,
  Tm as NHS_FALLBACK_FONT_STACK,
  Nm as NHS_FONT_STACK,
  Mc as NavigationSplitView,
  tm as PageTemplate,
  Hf as Pagination,
  zl as Panel,
  Ue as ParagraphsBody,
  Ge as ParagraphsBodyLarge,
  Ve as ParagraphsBodySmall,
  Ye as ParagraphsLedeText,
  qe as ParagraphsLedeTextSmall,
  Ya as PatientCard,
  jf as Radios,
  Qf as ResponsiveDataGrid,
  em as ResponsiveDataGridDemo,
  It as Row,
  Ca as Select,
  yo as SelectOption,
  af as ShadowButtonDefault,
  lf as ShadowButtonFocus,
  sf as ShadowButtonSecondary,
  of as ShadowButtonWarning,
  cf as ShadowCardDefault,
  df as ShadowCardHover,
  Dh as SizeButtonMinHeightDesktop,
  Th as SizeButtonMinHeightMobile,
  vh as SizeFormControlLarge,
  yh as SizeFormControlMedium,
  xh as SizeFormControlSmall,
  jh as SizeFormInputWidth2xl,
  Nh as SizeFormInputWidth3xl,
  Sh as SizeFormInputWidthLg,
  wh as SizeFormInputWidthMd,
  kh as SizeFormInputWidthSm,
  Ch as SizeFormInputWidthXl,
  _h as SizeFormInputWidthXs,
  gh as SizeIconExtraLarge,
  ph as SizeIconLarge,
  mh as SizeIconMedium,
  bh as SizeIconNhsDefault,
  fh as SizeIconSmall,
  Ua as SkipLink,
  Jf as SortStatusControl,
  As as Spacing0,
  Hs as Spacing1,
  Ps as Spacing2,
  zs as Spacing3,
  Ws as Spacing4,
  Os as Spacing5,
  Us as Spacing6,
  Gs as Spacing7,
  Vs as Spacing8,
  Ys as Spacing9,
  Zn as SpacingResponsive0Mobile,
  Jn as SpacingResponsive0Tablet,
  Xn as SpacingResponsive1Mobile,
  Qn as SpacingResponsive1Tablet,
  er as SpacingResponsive2Mobile,
  tr as SpacingResponsive2Tablet,
  nr as SpacingResponsive3Mobile,
  rr as SpacingResponsive3Tablet,
  ar as SpacingResponsive4Mobile,
  sr as SpacingResponsive4Tablet,
  or as SpacingResponsive5Mobile,
  ir as SpacingResponsive5Tablet,
  lr as SpacingResponsive6Mobile,
  cr as SpacingResponsive6Tablet,
  dr as SpacingResponsive7Mobile,
  ur as SpacingResponsive7Tablet,
  hr as SpacingResponsive8Mobile,
  fr as SpacingResponsive8Tablet,
  mr as SpacingResponsive9Mobile,
  pr as SpacingResponsive9Tablet,
  Nf as SpacingUtilities,
  tf as StateDisabledBackground,
  nf as StateDisabledBorder,
  rf as StateDisabledText,
  Oh as StateErrorBackground,
  Uh as StateErrorBorder,
  Gh as StateErrorText,
  Xh as StateInfoBackground,
  Qh as StateInfoBorder,
  ef as StateInfoText,
  Vh as StateSuccessBackground,
  Yh as StateSuccessBorder,
  qh as StateSuccessText,
  Kh as StateWarningBackground,
  Zh as StateWarningBorder,
  Jh as StateWarningText,
  Yl as SummaryCard,
  Gf as SummaryList,
  Vf as Table,
  Yf as Tabs,
  Je as Tag,
  Gl as TaskList,
  xo as Textarea,
  nm as TransactionalPageTemplate,
  Uc as TransitionButtonDefault,
  Gc as TransitionButtonShadow,
  Yc as TransitionCardHover,
  Vc as TransitionInputFocus,
  Za as VitalsCard,
  Rf as WIDTH_FRACTIONS,
  qf as WarningCallout,
  ts as WidthContainer,
  Df as WidthUtilities,
  Dm as checkFrutigerLoaded,
  Br as createGenericTabsConfig,
  Xf as createTCHTabsConfig,
  Cm as generateFrutigerFontFace,
  am as getResponsiveStyles,
  Tf as getSpacingClass,
  If as getWidthClass,
  jm as preloadFrutigerFonts,
  sc as tchDataConfig,
  gm as useColors,
  vm as useComponentSpacing,
  _m as useNHSHeadings,
  km as useNHSParagraphs,
  Lf as useNHSTheme,
  wm as useNHSTypographySystem,
  Sm as useNavigationSplitDrill,
  Fc as useNavigationSplitUrlSync,
  rs as useNhsFdpBreakpoints,
  ym as useResponsiveSpacing,
  rm as useResponsiveValue,
  bm as useSpacing,
  pm as useTokens,
  xm as useTypography
};
//# sourceMappingURL=index.esm.js.map
