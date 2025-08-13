import * as Ja from "react";
import xe, { useState as ae, useEffect as le, useCallback as K, createElement as Br, useRef as ie, useMemo as de, createContext as Xa, useContext as Qa, forwardRef as Xe, useImperativeHandle as Fr, useReducer as Rr } from "react";
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
    function e(F) {
      if (F == null) return null;
      if (typeof F == "function")
        return F.$$typeof === v ? null : F.displayName || F.name || null;
      if (typeof F == "string") return F;
      switch (F) {
        case y:
          return "Fragment";
        case D:
          return "Profiler";
        case C:
          return "StrictMode";
        case $:
          return "Suspense";
        case N:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof F == "object")
        switch (typeof F.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), F.$$typeof) {
          case I:
            return "Portal";
          case B:
            return (F.displayName || "Context") + ".Provider";
          case R:
            return (F._context.displayName || "Context") + ".Consumer";
          case j:
            var Z = F.render;
            return F = F.displayName, F || (F = Z.displayName || Z.name || "", F = F !== "" ? "ForwardRef(" + F + ")" : "ForwardRef"), F;
          case M:
            return Z = F.displayName || null, Z !== null ? Z : e(F.type) || "Memo";
          case _:
            Z = F._payload, F = F._init;
            try {
              return e(F(Z));
            } catch {
            }
        }
      return null;
    }
    function t(F) {
      return "" + F;
    }
    function r(F) {
      try {
        t(F);
        var Z = !1;
      } catch {
        Z = !0;
      }
      if (Z) {
        Z = console;
        var P = Z.error, q = typeof Symbol == "function" && Symbol.toStringTag && F[Symbol.toStringTag] || F.constructor.name || "Object";
        return P.call(
          Z,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          q
        ), t(F);
      }
    }
    function a(F) {
      if (F === y) return "<>";
      if (typeof F == "object" && F !== null && F.$$typeof === _)
        return "<...>";
      try {
        var Z = e(F);
        return Z ? "<" + Z + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var F = h.A;
      return F === null ? null : F.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(F) {
      if (L.call(F, "key")) {
        var Z = Object.getOwnPropertyDescriptor(F, "key").get;
        if (Z && Z.isReactWarning) return !1;
      }
      return F.key !== void 0;
    }
    function l(F, Z) {
      function P() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          Z
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(F, "key", {
        get: P,
        configurable: !0
      });
    }
    function c() {
      var F = e(this.type);
      return Y[F] || (Y[F] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), F = this.props.ref, F !== void 0 ? F : null;
    }
    function u(F, Z, P, q, O, re, b, T) {
      return P = re.ref, F = {
        $$typeof: S,
        type: F,
        key: Z,
        props: re,
        _owner: O
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(F, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(F, "ref", { enumerable: !1, value: null }), F._store = {}, Object.defineProperty(F._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(F, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(F, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: b
      }), Object.defineProperty(F, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    }
    function d(F, Z, P, q, O, re, b, T) {
      var W = Z.children;
      if (W !== void 0)
        if (q)
          if (ee(W)) {
            for (q = 0; q < W.length; q++)
              p(W[q]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(W);
      if (L.call(Z, "key")) {
        W = e(F);
        var f = Object.keys(Z).filter(function(w) {
          return w !== "key";
        });
        q = 0 < f.length ? "{key: someKey, " + f.join(": ..., ") + ": ...}" : "{key: someKey}", J[W + q] || (f = 0 < f.length ? "{" + f.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          q,
          W,
          f,
          W
        ), J[W + q] = !0);
      }
      if (W = null, P !== void 0 && (r(P), W = "" + P), i(Z) && (r(Z.key), W = "" + Z.key), "key" in Z) {
        P = {};
        for (var g in Z)
          g !== "key" && (P[g] = Z[g]);
      } else P = Z;
      return W && l(
        P,
        typeof F == "function" ? F.displayName || F.name || "Unknown" : F
      ), u(
        F,
        W,
        re,
        O,
        s(),
        P,
        b,
        T
      );
    }
    function p(F) {
      typeof F == "object" && F !== null && F.$$typeof === S && F._store && (F._store.validated = 1);
    }
    var x = xe, S = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), B = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), v = Symbol.for("react.client.reference"), h = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, ee = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(F) {
        return F();
      }
    };
    var H, Y = {}, Q = x.react_stack_bottom_frame.bind(
      x,
      o
    )(), ne = X(a(o)), J = {};
    tt.Fragment = y, tt.jsx = function(F, Z, P, q, O) {
      var re = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        F,
        Z,
        P,
        !1,
        q,
        O,
        re ? Error("react-stack-top-frame") : Q,
        re ? X(a(F)) : ne
      );
    }, tt.jsxs = function(F, Z, P, q, O) {
      var re = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        F,
        Z,
        P,
        !0,
        q,
        O,
        re ? Error("react-stack-top-frame") : Q,
        re ? X(a(F)) : ne
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
const V = /* @__PURE__ */ es(ss), ch = ({
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
}, { forwardRef: os, useCallback: He, useState: Qt } = Ja;
function is(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: s = "default",
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [u, d] = Qt(!1), [p, x] = Qt(!1), [S, I] = Qt(!1), y = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    s !== "default" ? `nhs-aria-button--${s}` : "",
    o ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), C = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", D = {
    ...u && { "data-pressed": "true" },
    ...p && { "data-hovered": "true" },
    ...S && { "data-focused": "true" },
    ...C && { "data-disabled": "true" }
  }, R = He(() => !C && d(!0), [C]), B = He(() => d(!1), []), j = He(() => !C && x(!0), [C]), $ = He(() => {
    x(!1), d(!1);
  }, []), N = He(() => I(!0), []), M = He(() => I(!1), []), _ = He((h) => {
    h.key === " " && ("href" in c || h.currentTarget.getAttribute("role") === "button") && (h.preventDefault(), h.currentTarget.click());
  }, [c]), k = He((h) => {
    if (l) {
      const L = h.currentTarget;
      if (L.getAttribute("data-processing") === "true") {
        h.preventDefault();
        return;
      }
      L.setAttribute("data-processing", "true"), setTimeout(() => {
        L.removeAttribute("data-processing");
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
        className: y,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...D,
        ...l && { "data-prevent-double-click": "true" },
        onKeyDown: (L) => {
          h.onKeyDown?.(L), _(L);
        },
        onClick: (L) => {
          h.onClick?.(L), k(L);
        },
        onMouseDown: (L) => {
          h.onMouseDown?.(L), R();
        },
        onMouseUp: (L) => {
          h.onMouseUp?.(L), B();
        },
        onMouseEnter: (L) => {
          h.onMouseEnter?.(L), j();
        },
        onMouseLeave: (L) => {
          h.onMouseLeave?.(L), $();
        },
        onFocus: (L) => {
          h.onFocus?.(L), N();
        },
        onBlur: (L) => {
          h.onBlur?.(L), M();
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
      className: y,
      "data-module": "nhs-button",
      ...D,
      ...l && { "data-prevent-double-click": "true" },
      ...v.disabled && { "aria-disabled": "true" },
      onKeyDown: (h) => {
        v.onKeyDown?.(h), _(h);
      },
      onClick: (h) => {
        v.onClick?.(h), k(h);
      },
      onMouseDown: (h) => {
        v.onMouseDown?.(h), R();
      },
      onMouseUp: (h) => {
        v.onMouseUp?.(h), B();
      },
      onMouseEnter: (h) => {
        v.onMouseEnter?.(h), j();
      },
      onMouseLeave: (h) => {
        v.onMouseLeave?.(h), $();
      },
      onFocus: (h) => {
        v.onFocus?.(h), N();
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
const ge = os(is);
ge.displayName = "Button";
const ls = ({
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
  ), c = V(
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
  const d = V(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": s,
      "nhsuk-tag--closable": o,
      "nhsuk-tag--disabled": l
    },
    c
  ), p = (x) => {
    x.preventDefault(), x.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: d, ...u, children: [
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
  children: u,
  onChange: d,
  onBlur: p,
  onFocus: x,
  attributes: S,
  ...I
}) => {
  const [y, C] = ae(a), D = r !== void 0, R = D ? r : y;
  le(() => {
    D || C(a);
  }, [a, D]);
  const B = (_) => {
    const k = _.target.checked;
    D || C(k), d?.(k, _);
  }, j = i ? `${e}-hint` : void 0, $ = l ? `${e}-error` : void 0, N = [j, $].filter(Boolean).join(" ") || void 0, M = V(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ n.jsx("div", { className: M, ...I, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: R,
        disabled: s,
        onChange: B,
        onBlur: p,
        onFocus: x,
        "aria-describedby": N,
        ...S
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: u }),
    i && /* @__PURE__ */ n.jsx("div", { id: j, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: $, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
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
  hasError: u = !1,
  describedBy: d,
  className: p,
  width: x = "full",
  inputMode: S,
  autoComplete: I,
  maxLength: y,
  minLength: C,
  pattern: D,
  step: R,
  min: B,
  max: j,
  showValueLabels: $ = !1,
  showCurrentValue: N = !1,
  valueLabels: M,
  onChange: _,
  onBlur: k,
  onFocus: v,
  onKeyDown: h,
  ...L
}) => {
  const [ee, X] = ae(a || s || (r === "range" ? B || "0" : ""));
  le(() => {
    a !== void 0 && X(a);
  }, [a]);
  const H = (J) => {
    X(J.target.value), _?.(J);
  }, Y = r === "range", Q = V(
    "nhsuk-input",
    {
      "nhsuk-input--error": u,
      "nhsuk-input--range": Y,
      [`nhsuk-input--width-${x}`]: x !== "full" && !Y
    },
    p
  ), ne = Y ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    $ && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: M?.min || B || "0" }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: Q,
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
          autoComplete: I,
          maxLength: y,
          minLength: C,
          pattern: D,
          step: R,
          min: B,
          max: j,
          onChange: H,
          onBlur: k,
          onFocus: v,
          onKeyDown: h,
          ...L
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: M?.max || j || "100" })
    ] }),
    !$ && /* @__PURE__ */ n.jsx(
      "input",
      {
        className: Q,
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
        autoComplete: I,
        maxLength: y,
        minLength: C,
        pattern: D,
        step: R,
        min: B,
        max: j,
        onChange: H,
        onBlur: k,
        onFocus: v,
        onKeyDown: h,
        ...L
      }
    ),
    N && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      M?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: ee })
    ] }) })
  ] }) : null;
  return Y ? ne : /* @__PURE__ */ n.jsx(
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
      required: c,
      "aria-describedby": d,
      inputMode: S,
      autoComplete: I,
      maxLength: y,
      minLength: C,
      pattern: D,
      step: R,
      min: B,
      max: j,
      onChange: _,
      onBlur: k,
      onFocus: v,
      onKeyDown: h,
      ...L
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
}, Hn = ({
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
  small: u = !1,
  onChange: d,
  fieldsetAttributes: p,
  attributes: x,
  ...S
}) => {
  const [I, y] = ae(
    e.filter((_) => _.checked).map((_) => _.value)
  ), C = r || t, D = i ? `${C}-hint` : void 0, R = l ? `${C}-error` : void 0, B = [D, R].filter(Boolean).join(" ") || void 0, j = (_, k) => {
    let v;
    k ? v = [...I, _] : v = I.filter((h) => h !== _), y(v), d?.(v);
  }, $ = () => e.map((_, k) => {
    const v = `${C}-${k + 1}`, h = `${v}-conditional`, L = I.includes(_.value), ee = _.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: v,
          name: t,
          type: "checkbox",
          value: _.value,
          checked: L,
          disabled: ee,
          onChange: (X) => j(_.value, X.target.checked),
          "aria-describedby": _.hint ? `${v}-hint` : B,
          ..._.conditional && {
            "aria-controls": h,
            "aria-expanded": L ? "true" : "false"
          },
          ..._.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: v, children: _.text }),
      _.hint && /* @__PURE__ */ n.jsx("div", { id: `${v}-hint`, className: "nhsuk-checkboxes__hint", children: _.hint }),
      _.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: V("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !L
          }),
          id: h,
          children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            _.conditional.label && /* @__PURE__ */ n.jsx(An, { htmlFor: _.conditional.id, children: _.conditional.label }),
            /* @__PURE__ */ n.jsx($n, { ..._.conditional })
          ] }) : _.conditional
        }
      )
    ] }, _.value);
  }), N = V(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": u
    },
    c
  ), M = V("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: M, ...x, ...S, children: /* @__PURE__ */ n.jsxs(
    Hn,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: B,
      ...p,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: D, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: R, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: N, children: $() })
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
  describedBy: u,
  className: d,
  rows: p = 5,
  cols: x,
  maxLength: S,
  minLength: I,
  wrap: y = "soft",
  resize: C = "vertical",
  autoComplete: D,
  spellCheck: R,
  onChange: B,
  onBlur: j,
  onFocus: $,
  onKeyDown: N,
  ...M
}) => {
  const _ = V(
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
      rows: p,
      cols: x,
      maxLength: S,
      minLength: I,
      wrap: y,
      autoComplete: D,
      spellCheck: R,
      onChange: B,
      onBlur: j,
      onFocus: $,
      onKeyDown: N,
      ...M
    }
  );
}, Ir = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const s = V("nhsuk-hint", t);
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
  ...p
}) => {
  const [x, S] = ae(o), [I, y] = ae(0), [C, D] = ae(!1), [R, B] = ae(!1), j = K((v) => r ? v.trim() === "" ? 0 : v.trim().split(/\s+/).length : v.length, [r]);
  le(() => {
    const v = j(x), h = t || r || 0, L = h - v, ee = Math.floor(h * (a / 100));
    y(L), D(v > h), B(v >= ee || v > h), u && u(v, L);
  }, [x, t, r, a, j, u]);
  const $ = (v) => {
    const h = v.target.value;
    S(h), d && d(v);
  }, N = () => {
    const v = t || r || 0, h = r ? "word" : "character", L = r ? "words" : "characters";
    if (!R)
      return `You can enter up to ${v} ${v === 1 ? h : L}`;
    if (C) {
      const ee = Math.abs(I);
      return `You have ${ee} ${ee === 1 ? h : L} too many`;
    } else
      return `You have ${I} ${I === 1 ? h : L} remaining`;
  }, M = V(
    "nhsuk-character-count",
    l
  ), _ = V(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !R,
      "nhsuk-error-message": C
    },
    c?.classes
  ), k = V(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": C
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
          us,
          {
            id: e,
            name: s,
            value: x,
            rows: i,
            className: k,
            onChange: $,
            "aria-describedby": `${e}-info`,
            ...p
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
}, hs = ({
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
  multiple: u = !1,
  size: d,
  autoComplete: p,
  options: x,
  children: S,
  onChange: I,
  onBlur: y,
  onFocus: C,
  ...D
}) => {
  const R = V(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    c
  ), B = () => x ? x.map((j, $) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: j.value,
      disabled: j.disabled,
      selected: j.selected,
      children: j.text
    },
    `${j.value}-${$}`
  )) : null;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: R,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      disabled: s,
      required: o,
      "aria-describedby": l,
      multiple: u,
      size: d,
      autoComplete: p,
      onChange: I,
      onBlur: y,
      onFocus: C,
      ...D,
      children: S || B()
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
  onChange: u,
  onBlur: d,
  onFocus: p,
  ...x
}) => {
  const [S, I] = ae(t || r || ""), y = V(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    o
  ), C = (D) => {
    const R = D.target.value;
    I(R), u && u(D);
  };
  return /* @__PURE__ */ n.jsx(Hn, { children: /* @__PURE__ */ n.jsx("div", { className: y, ...x, children: c.map((D, R) => {
    const B = `${e}-${R}`, j = D.conditional ? `${B}-conditional` : void 0, $ = S === D.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: B,
          name: e,
          type: "radio",
          value: D.value,
          disabled: D.disabled,
          checked: $,
          "aria-describedby": s,
          onChange: C,
          onBlur: d,
          onFocus: p
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: B, children: D.text }),
      D.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: D.hint }),
      D.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: V("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !$
          }),
          id: j,
          children: typeof D.conditional == "object" && D.conditional !== null && "label" in D.conditional && "id" in D.conditional && "name" in D.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            D.conditional.label && /* @__PURE__ */ n.jsx(An, { htmlFor: D.conditional.id, children: D.conditional.label }),
            /* @__PURE__ */ n.jsx($n, { ...D.conditional })
          ] }) : D.conditional
        }
      )
    ] }, D.value);
  }) }) });
}, Lr = ({
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
}, pt = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = V("nhsuk-grid-row", t);
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
  const u = V(
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
  const s = xe.Children.toArray(e)[0], o = xe.isValidElement(s) && (s.type === pt || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
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
  const c = i || (t === "number" ? "ol" : "ul"), u = V(
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
  const a = V("nhsuk-list__item", t);
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
}, Le = ({
  level: e,
  className: t,
  text: r,
  html: a,
  children: s,
  size: o,
  marginBottom: i,
  ...l
}) => {
  const u = e ?? ((I) => {
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
  })(o), d = V(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${o}`]: o
    },
    t
  ), p = s || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), x = `h${u}`, S = i ? { ...l.style, marginBottom: i } : l.style;
  return Br(
    x,
    { className: d, ...l, style: S },
    p
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
  const c = ie(null);
  le(() => {
    c.current && c.current.focus();
  }, []);
  const u = V(
    "nhsuk-error-summary",
    o
  ), d = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, p = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, x = (S) => {
    const I = S.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text;
    return S.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: S.href,
        ...S.attributes,
        children: I
      }
    ) : I;
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
          !i && (r || a) && /* @__PURE__ */ n.jsx("p", { children: p() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((S, I) => /* @__PURE__ */ n.jsx("li", { children: x(S) }, I)) })
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
  const [d, p] = ae(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [x, S] = ae({}), I = (H) => H % 4 === 0 && H % 100 !== 0 || H % 400 === 0, y = (H, Y) => {
    const Q = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return H === 2 && I(Y) ? 29 : Q[H - 1];
  }, C = (H, Y, Q) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Day must be a number";
    const ne = parseInt(H, 10);
    if (ne < 1 || ne > 31) return "Day must be between 1 and 31";
    if (Y && Q) {
      const J = parseInt(Y, 10), F = parseInt(Q, 10);
      if (!isNaN(J) && !isNaN(F) && J >= 1 && J <= 12) {
        const Z = y(J, F);
        if (ne > Z)
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
          ][J - 1]} ${F} only has ${Z} days`;
      }
    }
  }, D = (H) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Month must be a number";
    const Y = parseInt(H, 10);
    if (Y < 1 || Y > 12) return "Month must be between 1 and 12";
  }, R = (H) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Year must be a number";
    const Y = parseInt(H, 10), Q = (/* @__PURE__ */ new Date()).getFullYear();
    if (Y < 1900 || Y > Q + 10)
      return `Year must be between 1900 and ${Q + 10}`;
  }, B = (H, Y, Q) => {
    if (!H || !Y || !Q) return;
    const ne = parseInt(H, 10), J = parseInt(Y, 10), F = parseInt(Q, 10);
    if (isNaN(ne) || isNaN(J) || isNaN(F) || J < 1 || J > 12 || F < 1900) return;
    const Z = y(J, F);
    ne < 1 || ne > Z;
  }, j = K((H, Y) => {
    const Q = {
      ...d,
      [H]: Y
    };
    p(Q), c && c(Q);
  }, [d, c]), $ = K((H) => {
    const Y = d[H];
    let Q;
    if (H === "day")
      Q = C(Y, d.month, d.year);
    else if (H === "month") {
      if (Q = D(Y), !Q && d.day) {
        const ne = C(d.day, Y, d.year);
        S((J) => ({
          ...J,
          day: ne
        }));
      }
    } else if (H === "year" && (Q = R(Y), !Q && d.day && d.month)) {
      const ne = C(d.day, d.month, Y);
      S((J) => ({
        ...J,
        day: ne
      }));
    }
    if (S((ne) => ({
      ...ne,
      [H]: Q
    })), d.day && d.month && d.year) {
      const ne = B(
        H === "day" ? Y : d.day,
        H === "month" ? Y : d.month,
        H === "year" ? Y : d.year
      );
      ne && S((J) => ({
        ...J,
        day: ne
      }));
    }
  }, [d, C, D, R, B]), N = de(() => [
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
  ], []), M = r || N;
  let _ = o?.describedBy || "";
  const k = i ? `${e}-hint` : "", v = l ? `${e}-error` : "";
  k && (_ = _ ? `${_} ${k}` : k), v && (_ = _ ? `${_} ${v}` : v);
  const h = Object.values(x).some((H) => H), L = V(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || h
    }
  ), ee = V(
    "nhsuk-date-input",
    t
  ), X = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Ir,
      {
        id: k,
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
    Object.entries(x).map(
      ([H, Y]) => Y ? /* @__PURE__ */ n.jsxs(
        nr,
        {
          id: `${e}-${H}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            Y
          ]
        },
        `${H}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: ee, id: e, "data-testid": "date-input", ...u, children: M.map((H) => {
      const Y = H.id || `${e}-${H.name}`, Q = a ? `${a}[${H.name}]` : H.name, ne = H.label || H.name.charAt(0).toUpperCase() + H.name.slice(1), J = x[H.name], F = d[H.name] || "";
      let Z = _;
      if (J) {
        const P = `${e}-${H.name}-error`;
        Z = Z ? `${Z} ${P}` : P;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          An,
          {
            htmlFor: Y,
            className: "nhsuk-date-input__label",
            children: ne
          }
        ),
        /* @__PURE__ */ n.jsx(
          $n,
          {
            id: Y,
            name: Q,
            value: F,
            className: V("nhsuk-date-input__input", H.classes, {
              "nhsuk-input--error": J
            }),
            inputMode: H.inputmode,
            autoComplete: H.autocomplete,
            pattern: H.pattern,
            "aria-describedby": Z || void 0,
            hasError: !!J,
            onChange: (P) => j(H.name, P.target.value),
            onBlur: () => $(H.name)
          }
        )
      ] }, H.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: L, children: o ? /* @__PURE__ */ n.jsx(
    Hn,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: _ || void 0,
      children: X()
    }
  ) : X() });
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
const _h = ({ children: e, theme: t }) => (le(() => {
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
  disabled: u = !1,
  callbacks: d = {},
  isLoading: p = !1,
  showResults: x = !1,
  results: S = [],
  formAttributes: I = {},
  inputAttributes: y = {},
  buttonAttributes: C = {},
  preventDefaultSubmit: D = !1,
  debounceMs: R = 300,
  minQueryLength: B = 1
}) => {
  const [j, $] = ae(""), [N, M] = ae(!1), _ = ie(void 0), k = ie(null), v = ie(null), h = e === "controlled" && s !== void 0, L = h ? s : j, ee = K((q) => {
    _.current && clearTimeout(_.current), _.current = setTimeout(() => {
      d.onChange && q.length >= B && d.onChange(q);
    }, R);
  }, [d.onChange, R, B]), X = K((q) => {
    const O = q.target.value;
    h || $(O), e !== "form" && ee(O);
  }, [h, e, ee]), H = K((q) => {
    const O = L.trim(), re = {
      query: O,
      timestamp: Date.now(),
      formData: new FormData(q.currentTarget)
    };
    e === "controlled" || e === "hybrid" && D ? (q.preventDefault(), d.onSearch && O.length >= B && d.onSearch(re)) : e === "hybrid" && d.onSearch && O.length >= B && d.onSearch(re);
  }, [e, L, d.onSearch, D, B]), Y = K(() => {
    M(!0), d.onFocus?.();
  }, [d.onFocus]), Q = K(() => {
    M(!1), d.onBlur?.();
  }, [d.onBlur]), ne = K(() => {
    h || $(""), d.onClear?.(), v.current?.focus();
  }, [h, d.onClear]);
  le(() => () => {
    _.current && clearTimeout(_.current);
  }, []);
  const J = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: V("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": p
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), F = () => /* @__PURE__ */ n.jsx(
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
  ), Z = () => !L || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ne,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), P = () => !x || !S.length || !N ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: S.map((q) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: q.href ? /* @__PURE__ */ n.jsxs("a", { href: q.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: q.title }),
    q.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: q.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => d.onSearch?.({ query: q.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: q.title }),
        q.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: q.description })
      ]
    }
  ) }, q.id)) });
  return /* @__PURE__ */ n.jsxs("search", { className: V("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": p,
    "nhsuk-header__search--focused": N,
    "nhsuk-header__search--has-results": x && S.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: k,
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
                ref: v,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: o,
                autoComplete: "off",
                value: L,
                onChange: X,
                onFocus: Y,
                onBlur: Q,
                disabled: u || p,
                "aria-expanded": x && S.length > 0,
                "aria-haspopup": "listbox",
                ...y
              }
            ),
            Z()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: u || p || e !== "form" && L.length < B,
              ...C,
              children: [
                p ? F() : J(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: p ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    P()
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
  attributes: u = {},
  ...d
}) => {
  const [p, x] = ae(!1), [S, I] = ae(!1), [y, C] = ae(i?.items?.length || 0), [D, R] = ae(!1), [B, j] = ae(!1), [$, N] = ae(!1), M = ie(null), _ = ie(null), k = ie(!1), v = ie(null), h = ie([]), L = ie(null);
  le(() => {
    typeof window > "u" || (N(!0), R(!0));
  }, []), le(() => {
    if (!$ || !i?.items?.length) return;
    h.current = i.items;
    const b = setTimeout(() => {
      M.current && _.current && ne();
    }, 100);
    return () => clearTimeout(b);
  }, [$, i?.items]);
  const ee = r.href && !t.href || r.href && r.href === t.href, X = ee ? r.href : t.href, H = V(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), Y = V(
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
  ), ne = K(() => {
    if (!(typeof window > "u" || k.current) && !(!M.current || !_.current || !h.current.length)) {
      k.current = !0;
      try {
        const b = _.current, T = M.current, W = b.offsetWidth, f = T.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (f.length === 0 || W === 0) {
          k.current = !1;
          return;
        }
        const g = window.innerWidth < 768, w = g ? 16 : 32, m = w * 2, E = W - m, A = Array.from(f).map((te) => te.offsetWidth), G = A.reduce((te, oe) => te + oe, 0), z = g ? 80 : 100, U = L.current !== null && L.current !== g;
        if (L.current = g, console.log("Overflow check:", {
          containerWidth: W,
          availableContainerWidth: E,
          totalGutters: m,
          gutterSize: w,
          totalWidth: G,
          mobile: g,
          breakpointChanged: U,
          itemCount: A.length,
          measurements: A
        }), G <= E)
          I(!1), C(h.current.length);
        else {
          const te = E - z;
          let oe = 0, ce = 0;
          for (let Ae = 0; Ae < A.length; Ae++) {
            const ke = ce + A[Ae];
            if (ke <= te)
              ce = ke, oe = Ae + 1;
            else
              break;
          }
          oe = Math.max(1, oe);
          const ue = oe < A.length;
          I(ue), C(oe);
        }
        k.current = !1;
      } catch (b) {
        console.error("Overflow detection error:", b), I(!1), C(h.current.length), k.current = !1;
      }
    }
  }, []);
  le(() => {
    if (typeof document > "u") return;
    const b = (T) => {
      T.key === "Escape" && p && x(!1);
    };
    if (p)
      return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [p]), le(() => {
    if (typeof window > "u" || !$) return;
    const b = () => {
      p && (x(!1), j(!1)), v.current && clearTimeout(v.current), v.current = setTimeout(() => {
        h.current.length > 0 && ne();
      }, 250);
    };
    let T = null, W = null;
    return window.matchMedia && (T = window.matchMedia("(max-width: 767px)"), W = () => {
      console.log("Breakpoint changed:", T?.matches ? "mobile" : "desktop"), h.current.length > 0 && setTimeout(() => ne(), 50);
    }, T.addEventListener ? T.addEventListener("change", W) : T.addListener(W)), window.addEventListener("resize", b), () => {
      window.removeEventListener("resize", b), T && W && (T.removeEventListener ? T.removeEventListener("change", W) : T.removeListener(W)), v.current && clearTimeout(v.current);
    };
  }, [$, p, ne]), le(() => {
    if (typeof document > "u") return;
    const b = (T) => {
      const W = T.target, f = M.current?.contains(W);
      p && !f && x(!1);
    };
    if (p)
      return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, [p]);
  const J = (b) => {
    b && (b.preventDefault(), b.stopPropagation());
    const T = !p;
    x(T), T ? setTimeout(() => {
      j(!0);
    }, 50) : j(!1);
  }, F = () => /* @__PURE__ */ n.jsxs(
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
  ), Z = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : F(), P = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, q = (b, T) => b ? T ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: T, children: b }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: b }) : null, O = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), re = (b) => {
    if (b.active || b.current) {
      const T = b.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: T });
    }
    return b.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: H,
      role: "banner",
      "data-module": "nhsuk-header",
      ...u,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: Y, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            X ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: X, children: [
              Z(),
              P(),
              ee && q(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              Z(),
              P(),
              ee && q(r.text)
            ] }),
            r.text && !ee && q(r.text, r.href)
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
            className: Q,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: V(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !D && $,
                    "nhsuk-header__navigation-container--ssr": !$
                  },
                  l
                ),
                ref: _,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: M, children: [
                  ($ ? i.items.slice(0, y) : i.items).map((b, T) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: V(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": b.active || b.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !$ && T >= 4
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
                          children: re(b)
                        }
                      )
                    },
                    T
                  )),
                  $ && S && y < i.items.length && /* @__PURE__ */ n.jsx(
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
        $ && i && i.items && i.items.length > 0 && p && B && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !B,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(y).map((b, T) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: V(
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
                      x(!1), j(!1);
                    },
                    children: re(b)
                  }
                )
              },
              `overflow-${y + T}`
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
  const p = r.href && !t.href || r.href && r.href === t.href, x = p ? r.href : t.href, S = V(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), I = V(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), y = V(
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
  ), D = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : C(), R = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, B = (N, M) => N ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: N }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: N }) : null, j = () => !i?.items || i.items.length === 0 ? null : i.items.map((N, M) => /* @__PURE__ */ n.jsx(
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
    N.href || M
  )), $ = () => s ? /* @__PURE__ */ n.jsx(Hr, { ...s }) : null;
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
        /* @__PURE__ */ n.jsxs("div", { className: I, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            x ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: x, children: [
              D(),
              R(),
              p && B(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              D(),
              R(),
              p && B(r.text)
            ] }),
            r.text && !p && B(r.text, r.href)
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
  ...p
}) => {
  const x = r.href && !t.href || r.href && r.href === t.href, S = x ? r.href : t.href, I = V(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), y = V(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), C = V(
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
  ), R = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : D(), B = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, j = (N, M) => N ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: N }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: N }) : null, $ = (N) => {
    if (N.active || N.current) {
      const M = N.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: N.html } }) : N.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: M });
    }
    return N.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: N.html } }) : N.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: I,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...u,
      ...p,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: y, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            S ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: S, children: [
              R(),
              B(),
              x && j(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              R(),
              B(),
              x && j(r.text)
            ] }),
            r.text && !x && j(r.text, r.href)
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
            className: C,
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
                  i.items.slice(0, d).map((N, M) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: V(
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
                          children: $(N)
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(d).map((N, M) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: V(
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
                            children: $(N)
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
  ].filter(Boolean).join(" "), p = [
    "nhsuk-width-container",
    i,
    o ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), x = [
    "nhsuk-hero__heading",
    r,
    !c && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), S = c || e || a || s, I = () => {
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
      ...u,
      children: [
        o && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: S && /* @__PURE__ */ n.jsx("div", { className: p, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          I(),
          c || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && S && /* @__PURE__ */ n.jsx("div", { className: p, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
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
  const c = (d, p = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: V("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": p
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
    /* @__PURE__ */ n.jsxs("div", { className: V("nhsuk-width-container", i), children: [
      /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ n.jsx("div", { className: V("nhsuk-footer", e), children: u ? (
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
        const p = u + d >>> 1;
        r(l[p], c) < 0 ? u = p + 1 : d = p;
      } while (u < d);
    }
    return u;
  }
  function o(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const p = u + d >>> 1;
        r(l[p], c) <= 0 ? u = p + 1 : d = p;
      } while (u < d);
    }
    return u;
  }
  function i(l, c, u = 0, d = l.length) {
    const p = s(l, c, u, d - 1);
    return p > u && a(l[p - 1], c) > -a(l[p], c) ? p - 1 : p;
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
  let l, c, u;
  return s < 0 ? (u = Math.pow(10, -s) / i, l = Math.round(e * u), c = Math.round(t * u), l / u < e && ++l, c / u > t && --c, u = -u) : (u = Math.pow(10, s) * i, l = Math.round(e / u), c = Math.round(t / u), l * u < e && ++l, c * u > t && --c), c < l && 0.5 <= r && r < 2 ? Wr(e, t, r * 2) : [l, c, u];
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
var st = 0.7, gt = 1 / st, Ke = "\\s*([+-]?\\d+)\\s*", ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", _e = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Fs = /^#([0-9a-f]{3,8})$/, Rs = new RegExp(`^rgb\\(${Ke},${Ke},${Ke}\\)$`), Is = new RegExp(`^rgb\\(${_e},${_e},${_e}\\)$`), Ms = new RegExp(`^rgba\\(${Ke},${Ke},${Ke},${ot}\\)$`), Ls = new RegExp(`^rgba\\(${_e},${_e},${_e},${ot}\\)$`), Es = new RegExp(`^hsl\\(${ot},${_e},${_e}\\)$`), $s = new RegExp(`^hsla\\(${ot},${_e},${_e},${ot}\\)$`), sr = {
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
  return e = (e + "").trim().toLowerCase(), (t = Fs.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? lr(t) : r === 3 ? new pe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ut(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ut(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Rs.exec(e)) ? new pe(t[1], t[2], t[3], 1) : (t = Is.exec(e)) ? new pe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ms.exec(e)) ? ut(t[1], t[2], t[3], t[4]) : (t = Ls.exec(e)) ? ut(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Es.exec(e)) ? ur(t[1], t[2] / 100, t[3] / 100, 1) : (t = $s.exec(e)) ? ur(t[1], t[2] / 100, t[3] / 100, t[4]) : sr.hasOwnProperty(e) ? lr(sr[e]) : e === "transparent" ? new pe(NaN, NaN, NaN, 0) : null;
}
function lr(e) {
  return new pe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ut(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new pe(e, t, r, a);
}
function Ps(e) {
  return e instanceof lt || (e = it(e)), e ? (e = e.rgb(), new pe(e.r, e.g, e.b, e.opacity)) : new pe();
}
function cn(e, t, r, a) {
  return arguments.length === 1 ? Ps(e) : new pe(e, t, r, a ?? 1);
}
function pe(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
Wn(pe, cn, Or(lt, {
  brighter(e) {
    return e = e == null ? gt : Math.pow(gt, e), new pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? st : Math.pow(st, e), new pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pe(ze(this.r), ze(this.g), ze(this.b), bt(this.opacity));
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
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ye(e, t, r, a);
}
function Ur(e) {
  if (e instanceof ye) return new ye(e.h, e.s, e.l, e.opacity);
  if (e instanceof lt || (e = it(e)), !e) return new ye();
  if (e instanceof ye) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, s = Math.min(t, r, a), o = Math.max(t, r, a), i = NaN, l = o - s, c = (o + s) / 2;
  return l ? (t === o ? i = (r - a) / l + (r < a) * 6 : r === o ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? o + s : 2 - o - s, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new ye(i, l, c, e.opacity);
}
function Ws(e, t, r, a) {
  return arguments.length === 1 ? Ur(e) : new ye(e, t, r, a ?? 1);
}
function ye(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
Wn(ye, Ws, Or(lt, {
  brighter(e) {
    return e = e == null ? gt : Math.pow(gt, e), new ye(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? st : Math.pow(st, e), new ye(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - a;
    return new pe(
      en(e >= 240 ? e - 240 : e + 120, s, a),
      en(e, s, a),
      en(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new ye(hr(this.h), ht(this.s), ht(this.l), bt(this.opacity));
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
    var i = r((s = cn(s)).r, (o = cn(o)).r), l = r(s.g, o.g), c = r(s.b, o.b), u = Gr(s.opacity, o.opacity);
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
    for (var d = 0, p; d < t; ++d) l[(p = c[d]).i] = p.x(u);
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
    var x = Math.min(e.length, t.length);
    return i !== Ve && (i = ro(e[0], e[x - 1])), l = x > 2 ? so : ao, c = u = null, p;
  }
  function p(x) {
    return x == null || isNaN(x = +x) ? o : (c || (c = l(e.map(a), t, r)))(a(i(x)));
  }
  return p.invert = function(x) {
    return i(s((u || (u = l(t, e.map(a), xt)))(x)));
  }, p.domain = function(x) {
    return arguments.length ? (e = Array.from(x, no), d()) : e.slice();
  }, p.range = function(x) {
    return arguments.length ? (t = Array.from(x), d()) : t.slice();
  }, p.rangeRound = function(x) {
    return t = Array.from(x), r = eo, d();
  }, p.clamp = function(x) {
    return arguments.length ? (i = x ? !0 : Ve, d()) : i !== Ve;
  }, p.interpolate = function(x) {
    return arguments.length ? (r = x, d()) : r;
  }, p.unknown = function(x) {
    return arguments.length ? (o = x, p) : o;
  }, function(x, S) {
    return a = x, s = S, d();
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
function he(e, t, r, a) {
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
  }, s.filter = (o) => he((i) => {
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
const yt = he(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
yt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? he((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : yt);
yt.range;
const Re = 1e3, be = Re * 60, Ie = be * 60, Ee = Ie * 24, Gn = Ee * 7, pr = Ee * 30, an = Ee * 365, qe = he((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Re);
}, (e, t) => (t - e) / Re, (e) => e.getUTCSeconds());
qe.range;
const Yn = he((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Re);
}, (e, t) => {
  e.setTime(+e + t * be);
}, (e, t) => (t - e) / be, (e) => e.getMinutes());
Yn.range;
const uo = he((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * be);
}, (e, t) => (t - e) / be, (e) => e.getUTCMinutes());
uo.range;
const Vn = he((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Re - e.getMinutes() * be);
}, (e, t) => {
  e.setTime(+e + t * Ie);
}, (e, t) => (t - e) / Ie, (e) => e.getHours());
Vn.range;
const ho = he((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ie);
}, (e, t) => (t - e) / Ie, (e) => e.getUTCHours());
ho.range;
const ct = he(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * be) / Ee,
  (e) => e.getDate() - 1
);
ct.range;
const qn = he((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ee, (e) => e.getUTCDate() - 1);
qn.range;
const fo = he((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ee, (e) => Math.floor(e / Ee));
fo.range;
function Oe(e) {
  return he((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * be) / Gn);
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
  return he((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Gn);
}
const Yr = Ue(0), kt = Ue(1), xo = Ue(2), yo = Ue(3), Je = Ue(4), _o = Ue(5), ko = Ue(6);
Yr.range;
kt.range;
xo.range;
yo.range;
Je.range;
_o.range;
ko.range;
const Kn = he((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Kn.range;
const vo = he((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
vo.range;
const $e = he((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
$e.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : he((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
$e.range;
const We = he((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
We.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : he((t) => {
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
    [o, 1, be],
    [o, 5, 5 * be],
    [o, 15, 15 * be],
    [o, 30, 30 * be],
    [s, 1, Ie],
    [s, 3, 3 * Ie],
    [s, 6, 6 * Ie],
    [s, 12, 12 * Ie],
    [a, 1, Ee],
    [a, 2, 2 * Ee],
    [r, 1, Gn],
    [t, 1, pr],
    [t, 3, 3 * pr],
    [e, 1, an]
  ];
  function l(u, d, p) {
    const x = d < u;
    x && ([u, d] = [d, u]);
    const S = p && typeof p.range == "function" ? p : c(u, d, p), I = S ? S.range(u, +d + 1) : [];
    return x ? I.reverse() : I;
  }
  function c(u, d, p) {
    const x = Math.abs(d - u) / p, S = zn(([, , C]) => C).right(i, x);
    if (S === i.length) return e.every(ar(u / an, d / an, p));
    if (S === 0) return yt.every(Math.max(ar(u, d, p), 1));
    const [I, y] = i[x / i[S - 1][2] < i[S][2] / x ? S - 1 : S];
    return I.every(y);
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
  var t = e.dateTime, r = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, u = rt(s), d = at(s), p = rt(o), x = at(o), S = rt(i), I = at(i), y = rt(l), C = at(l), D = rt(c), R = at(c), B = {
    a: Q,
    A: ne,
    b: J,
    B: F,
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
    p: Z,
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
  }, j = {
    a: q,
    A: O,
    b: re,
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
    p: T,
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
  }, $ = {
    a: v,
    A: h,
    b: L,
    B: ee,
    c: X,
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
    p: k,
    q: Eo,
    Q: Uo,
    s: Go,
    S: Po,
    u: Fo,
    U: Ro,
    V: Io,
    w: Bo,
    W: Mo,
    x: H,
    X: Y,
    y: xr,
    Y: br,
    Z: Lo,
    "%": Oo
  };
  B.x = N(r, B), B.X = N(a, B), B.c = N(t, B), j.x = N(r, j), j.X = N(a, j), j.c = N(t, j);
  function N(f, g) {
    return function(w) {
      var m = [], E = -1, A = 0, G = f.length, z, U, te;
      for (w instanceof Date || (w = /* @__PURE__ */ new Date(+w)); ++E < G; )
        f.charCodeAt(E) === 37 && (m.push(f.slice(A, E)), (U = gr[z = f.charAt(++E)]) != null ? z = f.charAt(++E) : U = z === "e" ? " " : "0", (te = g[z]) && (z = te(w, U)), m.push(z), A = E + 1);
      return m.push(f.slice(A, E)), m.join("");
    };
  }
  function M(f, g) {
    return function(w) {
      var m = nt(1900, void 0, 1), E = _(m, f, w += "", 0), A, G;
      if (E != w.length) return null;
      if ("Q" in m) return new Date(m.Q);
      if ("s" in m) return new Date(m.s * 1e3 + ("L" in m ? m.L : 0));
      if (g && !("Z" in m) && (m.Z = 0), "p" in m && (m.H = m.H % 12 + m.p * 12), m.m === void 0 && (m.m = "q" in m ? m.q : 0), "V" in m) {
        if (m.V < 1 || m.V > 53) return null;
        "w" in m || (m.w = 1), "Z" in m ? (A = on(nt(m.y, 0, 1)), G = A.getUTCDay(), A = G > 4 || G === 0 ? kt.ceil(A) : kt(A), A = qn.offset(A, (m.V - 1) * 7), m.y = A.getUTCFullYear(), m.m = A.getUTCMonth(), m.d = A.getUTCDate() + (m.w + 6) % 7) : (A = sn(nt(m.y, 0, 1)), G = A.getDay(), A = G > 4 || G === 0 ? _t.ceil(A) : _t(A), A = ct.offset(A, (m.V - 1) * 7), m.y = A.getFullYear(), m.m = A.getMonth(), m.d = A.getDate() + (m.w + 6) % 7);
      } else ("W" in m || "U" in m) && ("w" in m || (m.w = "u" in m ? m.u % 7 : "W" in m ? 1 : 0), G = "Z" in m ? on(nt(m.y, 0, 1)).getUTCDay() : sn(nt(m.y, 0, 1)).getDay(), m.m = 0, m.d = "W" in m ? (m.w + 6) % 7 + m.W * 7 - (G + 5) % 7 : m.w + m.U * 7 - (G + 6) % 7);
      return "Z" in m ? (m.H += m.Z / 100 | 0, m.M += m.Z % 100, on(m)) : sn(m);
    };
  }
  function _(f, g, w, m) {
    for (var E = 0, A = g.length, G = w.length, z, U; E < A; ) {
      if (m >= G) return -1;
      if (z = g.charCodeAt(E++), z === 37) {
        if (z = g.charAt(E++), U = $[z in gr ? g.charAt(E++) : z], !U || (m = U(f, w, m)) < 0) return -1;
      } else if (z != w.charCodeAt(m++))
        return -1;
    }
    return m;
  }
  function k(f, g, w) {
    var m = u.exec(g.slice(w));
    return m ? (f.p = d.get(m[0].toLowerCase()), w + m[0].length) : -1;
  }
  function v(f, g, w) {
    var m = S.exec(g.slice(w));
    return m ? (f.w = I.get(m[0].toLowerCase()), w + m[0].length) : -1;
  }
  function h(f, g, w) {
    var m = p.exec(g.slice(w));
    return m ? (f.w = x.get(m[0].toLowerCase()), w + m[0].length) : -1;
  }
  function L(f, g, w) {
    var m = D.exec(g.slice(w));
    return m ? (f.m = R.get(m[0].toLowerCase()), w + m[0].length) : -1;
  }
  function ee(f, g, w) {
    var m = y.exec(g.slice(w));
    return m ? (f.m = C.get(m[0].toLowerCase()), w + m[0].length) : -1;
  }
  function X(f, g, w) {
    return _(f, t, g, w);
  }
  function H(f, g, w) {
    return _(f, r, g, w);
  }
  function Y(f, g, w) {
    return _(f, a, g, w);
  }
  function Q(f) {
    return i[f.getDay()];
  }
  function ne(f) {
    return o[f.getDay()];
  }
  function J(f) {
    return c[f.getMonth()];
  }
  function F(f) {
    return l[f.getMonth()];
  }
  function Z(f) {
    return s[+(f.getHours() >= 12)];
  }
  function P(f) {
    return 1 + ~~(f.getMonth() / 3);
  }
  function q(f) {
    return i[f.getUTCDay()];
  }
  function O(f) {
    return o[f.getUTCDay()];
  }
  function re(f) {
    return c[f.getUTCMonth()];
  }
  function b(f) {
    return l[f.getUTCMonth()];
  }
  function T(f) {
    return s[+(f.getUTCHours() >= 12)];
  }
  function W(f) {
    return 1 + ~~(f.getUTCMonth() / 3);
  }
  return {
    format: function(f) {
      var g = N(f += "", B);
      return g.toString = function() {
        return f;
      }, g;
    },
    parse: function(f) {
      var g = M(f += "", !1);
      return g.toString = function() {
        return f;
      }, g;
    },
    utcFormat: function(f) {
      var g = N(f += "", j);
      return g.toString = function() {
        return f;
      }, g;
    },
    utcParse: function(f) {
      var g = M(f += "", !0);
      return g.toString = function() {
        return f;
      }, g;
    }
  };
}
var gr = { "-": "", _: " ", 0: "0" }, fe = /^\s*\d+/, No = /^%/, To = /[\\^$*+?|[\]().{}]/g;
function se(e, t, r) {
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
  var a = fe.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function Fo(e, t, r) {
  var a = fe.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Ro(e, t, r) {
  var a = fe.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function Io(e, t, r) {
  var a = fe.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Mo(e, t, r) {
  var a = fe.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function br(e, t, r) {
  var a = fe.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function xr(e, t, r) {
  var a = fe.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function Lo(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Eo(e, t, r) {
  var a = fe.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function $o(e, t, r) {
  var a = fe.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function yr(e, t, r) {
  var a = fe.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Ao(e, t, r) {
  var a = fe.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function _r(e, t, r) {
  var a = fe.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Ho(e, t, r) {
  var a = fe.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Po(e, t, r) {
  var a = fe.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function zo(e, t, r) {
  var a = fe.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function Wo(e, t, r) {
  var a = fe.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Oo(e, t, r) {
  var a = No.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Uo(e, t, r) {
  var a = fe.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Go(e, t, r) {
  var a = fe.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function kr(e, t) {
  return se(e.getDate(), t, 2);
}
function Yo(e, t) {
  return se(e.getHours(), t, 2);
}
function Vo(e, t) {
  return se(e.getHours() % 12 || 12, t, 2);
}
function qo(e, t) {
  return se(1 + ct.count($e(e), e), t, 3);
}
function Vr(e, t) {
  return se(e.getMilliseconds(), t, 3);
}
function Ko(e, t) {
  return Vr(e, t) + "000";
}
function Zo(e, t) {
  return se(e.getMonth() + 1, t, 2);
}
function Jo(e, t) {
  return se(e.getMinutes(), t, 2);
}
function Xo(e, t) {
  return se(e.getSeconds(), t, 2);
}
function Qo(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ei(e, t) {
  return se(Zt.count($e(e) - 1, e), t, 2);
}
function qr(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ze(e) : Ze.ceil(e);
}
function ti(e, t) {
  return e = qr(e), se(Ze.count($e(e), e) + ($e(e).getDay() === 4), t, 2);
}
function ni(e) {
  return e.getDay();
}
function ri(e, t) {
  return se(_t.count($e(e) - 1, e), t, 2);
}
function ai(e, t) {
  return se(e.getFullYear() % 100, t, 2);
}
function si(e, t) {
  return e = qr(e), se(e.getFullYear() % 100, t, 2);
}
function oi(e, t) {
  return se(e.getFullYear() % 1e4, t, 4);
}
function ii(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Ze(e) : Ze.ceil(e), se(e.getFullYear() % 1e4, t, 4);
}
function li(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + se(t / 60 | 0, "0", 2) + se(t % 60, "0", 2);
}
function vr(e, t) {
  return se(e.getUTCDate(), t, 2);
}
function ci(e, t) {
  return se(e.getUTCHours(), t, 2);
}
function di(e, t) {
  return se(e.getUTCHours() % 12 || 12, t, 2);
}
function ui(e, t) {
  return se(1 + qn.count(We(e), e), t, 3);
}
function Kr(e, t) {
  return se(e.getUTCMilliseconds(), t, 3);
}
function hi(e, t) {
  return Kr(e, t) + "000";
}
function fi(e, t) {
  return se(e.getUTCMonth() + 1, t, 2);
}
function mi(e, t) {
  return se(e.getUTCMinutes(), t, 2);
}
function pi(e, t) {
  return se(e.getUTCSeconds(), t, 2);
}
function gi(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function bi(e, t) {
  return se(Yr.count(We(e) - 1, e), t, 2);
}
function Zr(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Je(e) : Je.ceil(e);
}
function xi(e, t) {
  return e = Zr(e), se(Je.count(We(e), e) + (We(e).getUTCDay() === 4), t, 2);
}
function yi(e) {
  return e.getUTCDay();
}
function _i(e, t) {
  return se(kt.count(We(e) - 1, e), t, 2);
}
function ki(e, t) {
  return se(e.getUTCFullYear() % 100, t, 2);
}
function vi(e, t) {
  return e = Zr(e), se(e.getUTCFullYear() % 100, t, 2);
}
function wi(e, t) {
  return se(e.getUTCFullYear() % 1e4, t, 4);
}
function Si(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Je(e) : Je.ceil(e), se(e.getUTCFullYear() % 1e4, t, 4);
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
function Xr(e, t, r, a, s, o, i, l, c, u) {
  var d = lo(), p = d.invert, x = d.domain, S = u(".%L"), I = u(":%S"), y = u("%I:%M"), C = u("%I %p"), D = u("%a %d"), R = u("%b %d"), B = u("%B"), j = u("%Y");
  function $(N) {
    return (c(N) < N ? S : l(N) < N ? I : i(N) < N ? y : o(N) < N ? C : a(N) < N ? s(N) < N ? D : R : r(N) < N ? B : j)(N);
  }
  return d.invert = function(N) {
    return new Date(p(N));
  }, d.domain = function(N) {
    return arguments.length ? x(Array.from(N, Ti)) : x().map(Ni);
  }, d.ticks = function(N) {
    var M = x();
    return e(M[0], M[M.length - 1], N ?? 10);
  }, d.tickFormat = function(N, M) {
    return M == null ? $ : u(M);
  }, d.nice = function(N) {
    var M = x();
    return (!N || typeof N.range != "function") && (N = t(M[0], M[M.length - 1], N ?? 10)), N ? x(co(M, N)) : d;
  }, d.copy = function() {
    return oo(d, Xr(e, t, r, a, s, o, i, l, c, u));
  }, d;
}
function Di() {
  return Bs.apply(Xr(So, Co, $e, Kn, Zt, ct, Vn, Yn, qe, Jr).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
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
  const u = ie(null), [d, p] = ae(!1), [x, S] = ae(!1), I = t(e.start), y = t(e.end), C = Math.max(y - I, 20), D = () => {
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
  }, R = e.progress ? C * e.progress / 100 : 0, B = () => {
    r?.(e);
  }, j = () => {
    a?.(e);
  }, $ = (L) => {
    L.key === "Enter" ? (L.preventDefault(), B()) : L.key === " " && (L.preventDefault(), j());
  }, N = () => {
    p(!0);
  }, M = () => {
    p(!1);
  }, _ = () => {
    S(!0), l?.();
  }, k = () => {
    S(!1);
  }, v = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (x || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), h = {
    "--task-left": `${I}px`,
    "--task-width": `${C}px`,
    "--task-color": D(),
    left: `${I}px`,
    width: `${C}px`,
    backgroundColor: D()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: u,
      "data-task-index": o,
      className: v,
      style: h,
      onClick: B,
      onDoubleClick: j,
      onKeyDown: $,
      onMouseDown: N,
      onMouseUp: M,
      onFocus: _,
      onBlur: k,
      "aria-label": c || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
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
function Fi({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let S = e.getTime(); S <= t.getTime(); S += 864e5)
    a.push(new Date(S));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = ae(-1), c = ie(null), u = (S) => {
    if (S.key === "ArrowLeft") {
      S.preventDefault();
      const I = Math.max(0, i === -1 ? 0 : i - 1);
      l(I), x(I);
    } else if (S.key === "ArrowRight") {
      S.preventDefault();
      const I = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(I), x(I);
    } else if (S.key === "ArrowDown") {
      S.preventDefault();
      const I = document.querySelector(".gantt-row .timeline-container");
      I && I.focus();
    } else if (S.key === "Home")
      S.preventDefault(), l(0), x(0);
    else if (S.key === "End") {
      S.preventDefault();
      const I = a.length - 1;
      l(I), x(I);
    }
  }, d = (S) => {
    if (S.key === "ArrowDown") {
      S.preventDefault();
      const I = document.querySelector(".gantt-row .resource-label");
      I && I.focus();
    } else if (S.key === "ArrowRight") {
      S.preventDefault();
      const I = c.current;
      I && I.focus();
    }
  }, p = () => {
    i === -1 && (l(0), setTimeout(() => x(0), 0));
  }, x = (S) => {
    const I = c.current?.querySelector(`[data-date-index="${S}"]`);
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
            onKeyDown: u,
            onFocus: p,
            children: a.map((S, I) => {
              const y = S.getTime() === o.getTime(), C = i === I;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": I,
                  className: `date-column ${y ? "today" : ""} ${C ? "focused" : ""}`,
                  tabIndex: C ? 0 : -1,
                  role: "button",
                  "aria-label": `${S.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${y ? " (Today)" : ""}`,
                  onFocus: () => l(I),
                  onKeyDown: u,
                  children: S.toLocaleDateString("en-GB", {
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
function Ri({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, c] = ae(!1), [u, d] = ae(-1), p = ie(null);
  le(() => {
    l && u >= 0 && t.length > 0 && setTimeout(() => {
      p.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
    }, 0);
  }, [l, u, t.length]);
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
          y.preventDefault(), p.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
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
        const C = Math.max(0, u - 1);
        d(C), p.current?.querySelector(`[data-task-index="${C}"]`)?.focus();
        break;
      case "ArrowRight":
        y.preventDefault();
        const R = Math.min(t.length - 1, u + 1);
        d(R), p.current?.querySelector(`[data-task-index="${R}"]`)?.focus();
        break;
      case "Enter":
        y.preventDefault(), u >= 0 && a?.(t[u]);
        break;
      case " ":
        y.preventDefault(), u >= 0 && s?.(t[u]);
        break;
      case "Escape":
        y.preventDefault(), c(!1), d(-1), p.current?.focus();
        break;
    }
  }, S = (y) => {
    switch (y.key) {
      case "ArrowUp":
        y.preventDefault(), o === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        y.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        y.preventDefault(), p.current?.focus();
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
            onKeyDown: S,
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
            onKeyDown: x,
            onFocus: () => {
              l || d(-1);
            },
            children: t.map((y, C) => /* @__PURE__ */ n.jsx(
              Bi,
              {
                task: y,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && u === C,
                taskIndex: C,
                tabIndex: l && u === C ? 0 : -1,
                onFocus: () => I(C)
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
  const i = ie(null), [l, c] = ae(800), u = de(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const y = new Date(r);
    return isNaN(y.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : y;
  }, [r]), d = de(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const y = new Date(a);
    return isNaN(y.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : y;
  }, [a]), p = de(() => Math.ceil((d.getTime() - u.getTime()) / 864e5) + 1, [u, d]);
  le(() => {
    if (!i.current) return;
    const y = new ResizeObserver((C) => {
      const D = C[0];
      D && c(Math.max(D.contentRect.width - 220, 400));
    });
    return y.observe(i.current), () => y.disconnect();
  }, []);
  const x = de(
    () => Di().domain([u, d]).range([0, l]),
    [u, d, l]
  ), S = de(() => {
    const y = /* @__PURE__ */ new Map();
    return t.forEach((C) => {
      const D = y.get(C.resourceId) || [];
      D.push(C), y.set(C.resourceId, D);
    }), y;
  }, [t]), I = (y) => {
    if (y.target === y.currentTarget)
      switch (y.key) {
        case "ArrowDown":
          y.preventDefault();
          const C = i.current?.querySelector(".gantt-row .resource-label");
          C && C.focus();
          break;
        case "Home":
          y.preventDefault();
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
      "aria-colcount": p + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: I,
      children: [
        /* @__PURE__ */ n.jsx(Fi, { viewStart: u, viewEnd: d, dateCount: p }),
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
            children: e.map((y, C) => /* @__PURE__ */ n.jsx(
              Ri,
              {
                resource: y,
                tasks: S.get(y.id) || [],
                scale: x,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: C,
                dateCount: p
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
  const c = () => t ? xe.Children.toArray(t).filter(
    (D) => xe.isValidElement(D) && (D.type === vt || D.type?.displayName === "BreadcrumbItem")
  ).map((D) => ({
    text: typeof D.props.children == "string" ? D.props.children : String(D.props.children),
    href: D.props.href,
    active: D.props.active,
    attributes: D.props.attributes
  })) : [], u = () => t ? c() : s && o ? [{ href: s, text: o }] : e, d = () => {
    const C = u();
    if (C && C.length > 0) {
      const D = C.slice().reverse().find((R) => R.href && !R.active);
      if (D)
        return { href: D.href, text: D.text };
    }
    return { text: "Home" };
  }, p = u(), x = d(), S = V(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), y = p && p.length > 1 ? a : void 0;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: S,
      "aria-label": y,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          xe.Children.map(t, (C, D) => xe.isValidElement(C) && (C.type === vt || C.type?.displayName === "BreadcrumbItem") ? xe.cloneElement(C, { key: D }) : null)
        ) : (
          // Render from items array
          p?.map((C, D) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: C.active ? /* @__PURE__ */ n.jsx(
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
          ) }, D))
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
}, Mi = Ii;
Mi.Item = vt;
vt.displayName = "BreadcrumbItem";
const Qr = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [s, o] = ae(!1);
  le(() => {
    o(!0);
  }, []), le(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (c) => {
      const u = c.target, d = u.getAttribute("href");
      if (d && d.startsWith("#")) {
        const p = document.querySelector(d);
        if (p) {
          p.hasAttribute("tabindex") || p.setAttribute("tabindex", "-1"), p.focus(), p.classList.add("nhsuk-skip-link-focused-element");
          const x = window.setTimeout(() => {
            p.classList.remove("nhsuk-skip-link-focused-element"), p.getAttribute("tabindex") === "-1" && p.removeAttribute("tabindex");
          }, 3e3);
          u.__nhsSkipLinkTimeout = x;
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
}, Sh = ({
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
}, Ch = ({
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
}, ea = xe.forwardRef(({
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
}, p) => {
  const x = [
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
  ].filter(Boolean).join(" "), I = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), y = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const R = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Le,
      {
        level: a,
        className: I,
        children: R()
      }
    );
  }, C = () => d.children ? d.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: o }) : null, D = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      ref: p,
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
          y(),
          C(),
          D()
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
  "data-testid": u,
  id: d,
  "aria-label": p,
  "aria-labelledby": x,
  "aria-describedby": S
}) => {
  const I = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), y = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), C = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const R = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], B = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        R,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Le,
      {
        level: a,
        className: y,
        children: B
      }
    );
  }, D = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: I,
      "data-testid": u,
      id: d,
      "aria-label": p,
      "aria-labelledby": x,
      "aria-describedby": S,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          C(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: D() })
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
  const u = V(
    "nhsuk-panel",
    t
  ), d = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Le,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Le,
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
  return /* @__PURE__ */ n.jsxs("div", { className: u, id: e, ...c, children: [
    d(),
    p()
  ] });
}, Dh = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...s
}) => {
  const o = V("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: o, ...s, children: i() });
}, Bh = ({
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
  classes: p,
  attributes: x,
  "data-testid": S
}) => {
  const I = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), y = V(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    d
  ), C = V(p), D = (j, $) => {
    const N = V("nhsuk-table__header", {
      [`nhsuk-table__header--${j.format}`]: j.format
    }, j.classes), M = {
      scope: "col",
      ...j.colspan && { colSpan: j.colspan },
      ...j.rowspan && { rowSpan: j.rowspan },
      ...o && { role: "columnheader" },
      ...j.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: N, ...M, children: j.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: j.html } }) : j.text }, $);
  }, R = (j, $, N) => {
    const M = s && N, _ = V(
      M ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${M ? "header" : "cell"}--${j.format}`]: j.format
      },
      j.classes
    ), k = {
      ...M && { scope: "row" },
      ...j.colspan && { colSpan: j.colspan },
      ...j.rowspan && { rowSpan: j.rowspan },
      ...o && {
        role: M ? "rowheader" : "cell",
        ...j.header && { "data-label": j.header }
      },
      ...j.attributes
    }, v = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      o && j.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        j.header,
        " "
      ] }),
      j.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: j.html } }) : j.text
    ] }), h = M ? "th" : "td";
    return /* @__PURE__ */ n.jsx(h, { className: _, ...k, children: v }, $);
  }, B = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: y,
      ...o && { role: "table" },
      ...x,
      ...S && { "data-testid": S },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: I, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...o && { role: "row" }, children: t.map((j, $) => D(j, $)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((j, $) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: j.map(
              (N, M) => R(N, M, M === 0)
            )
          },
          $
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(Li, { className: u, children: [
    i && /* @__PURE__ */ n.jsx(Le, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    B()
  ] }) : C ? /* @__PURE__ */ n.jsx("div", { className: C, children: B() }) : B();
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
  ...p
}, x) => {
  const S = r !== void 0, [I, y] = ae(() => t || e[0]?.id || ""), C = S ? r : I, D = ie(null), R = ie(/* @__PURE__ */ new Map()), B = K((v) => {
    S || y(v), a?.(v);
  }, [S, a]), j = K((v) => {
    s?.(v), l && B(v);
  }, [s, l, B]), $ = K((v, h) => {
    const L = e.filter((H) => !H.disabled).map((H) => H.id), ee = L.indexOf(h);
    let X = null;
    switch (v.key) {
      case "ArrowLeft":
        X = ee > 0 ? ee - 1 : L.length - 1;
        break;
      case "ArrowRight":
        X = ee < L.length - 1 ? ee + 1 : 0;
        break;
      case "Home":
        X = 0;
        break;
      case "End":
        X = L.length - 1;
        break;
      case "Escape":
        v.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (X !== null) {
      v.preventDefault();
      const H = L[X], Y = R.current.get(H);
      Y && (Y.focus(), j(H));
    }
  }, [e, j, i]), N = K((v, h) => {
    h ? R.current.set(v, h) : R.current.delete(v);
  }, []), M = K((v) => {
    const h = R.current.get(v);
    h && h.focus();
  }, []);
  Fr(x, () => ({
    focusTab: M,
    getActiveTab: () => C,
    getTabListElement: () => D.current
  }), [M, C]);
  const _ = K((v) => {
    const h = v.relatedTarget;
    D.current?.contains(h) || o?.();
  }, [o]), k = V("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: k,
      id: u,
      "data-testid": d,
      ...p,
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
                onBlur: _,
                children: e.map((v) => {
                  const h = v.id === C, L = v.disabled, ee = V("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": h,
                    "nhsuk-tabs__list-item--disabled": L
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: ee, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (X) => N(v.id, X),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": h,
                      "aria-controls": `${v.id}-panel`,
                      id: `${v.id}-tab`,
                      tabIndex: h ? 0 : -1,
                      disabled: L,
                      onClick: () => !L && B(v.id),
                      onKeyDown: (X) => !L && $(X, v.id),
                      onFocus: () => !L && j(v.id),
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
          const h = v.id === C;
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
  }, u) => {
    const d = [
      "nhsuk-details",
      o
    ].filter(Boolean).join(" "), p = t ? /* @__PURE__ */ n.jsx(
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
        ref: u,
        id: i,
        className: d,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: p }),
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
    ), p = (S) => t === "cross" && !a ? `do not ${S}` : S, x = () => /* @__PURE__ */ n.jsx(
      Le,
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
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: u.join(" "), role: "list", children: r.map((S, I) => /* @__PURE__ */ n.jsxs("li", { children: [
            d(),
            p(S.item)
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
  }, u) => {
    const d = [
      "nhsuk-expander",
      o
    ].filter(Boolean).join(" "), p = t ? /* @__PURE__ */ n.jsx(
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
        ref: u,
        id: i,
        className: d,
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: p }),
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
      const u = c + 1, d = `${t}-${u}-hint`, p = `${t}-${u}-status`, x = !!l.href, S = [
        "nhsuk-task-list__item",
        x && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), I = [
        l.hint && d,
        p
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Pi,
        {
          item: l,
          itemClasses: S,
          hasLink: x,
          hintId: d,
          statusId: p,
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
    /* @__PURE__ */ n.jsx(Le, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, Wi = xe.forwardRef(
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
    className: p,
    tableClassName: x,
    bordered: S = !1,
    striped: I = !1,
    responsive: y = !1,
    tableType: C = "default"
  }, D) => {
    const R = ie(null), B = ie(null), j = ie(null);
    xe.useImperativeHandle(D, () => R.current, []);
    const [$, N] = ae(0), [M, _] = ae(0), [k, v] = ae("headers"), [h, L] = ae("browse"), ee = t.length, X = e.length, H = de(() => !r || r.length === 0 ? e : [...e].sort((P, q) => {
      for (const { key: O, direction: re } of r) {
        const b = P[O], T = q[O];
        if (b == null && T == null) continue;
        if (b == null) return 1;
        if (T == null) return -1;
        let W = 0;
        if (typeof b == "number" && typeof T == "number" ? W = b - T : W = String(b).localeCompare(String(T)), W !== 0)
          return re === "asc" ? W : -W;
      }
      return 0;
    }), [e, r]), Y = K((P, q) => {
      setTimeout(() => {
        const O = R.current?.querySelector(
          `tbody tr:nth-child(${P + 1}) td:nth-child(${q + 1})`
        );
        O && (O.focus(), typeof O.scrollIntoView == "function" && O.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Q = K((P) => {
      setTimeout(() => {
        const q = R.current?.querySelector(`th:nth-child(${P + 1})`);
        q && (q.focus(), typeof q.scrollIntoView == "function" && q.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ne = K((P) => {
      a?.(P);
    }, [a]), J = K((P) => {
      o?.(P);
    }, [o]), F = K((P) => {
      const { key: q } = P;
      switch (q) {
        case "Enter":
          if (P.preventDefault(), k === "headers" && h === "browse")
            L("navigate"), Q(M);
          else if (k === "headers" && h === "navigate") {
            const O = t[M];
            O && ne(O.key);
          } else k === "cells" && h === "browse" ? (L("navigate"), Y($, M)) : k === "cells" && h === "navigate" && J($);
          break;
        case "Escape":
          P.preventDefault(), (k === "headers" && h === "navigate" || k === "cells" && h === "navigate") && L("browse");
          break;
        case "ArrowLeft":
          if (P.preventDefault(), h === "navigate" || h === "browse" && k === "headers") {
            if (k === "headers") {
              const O = Math.max(0, M - 1);
              _(O), Q(O);
            } else if (k === "cells") {
              const O = Math.max(0, M - 1);
              _(O), Y($, O);
            }
          }
          break;
        case "ArrowRight":
          if (P.preventDefault(), h === "navigate" || h === "browse" && k === "headers") {
            if (k === "headers") {
              const O = Math.min(ee - 1, M + 1);
              _(O), Q(O);
            } else if (k === "cells") {
              const O = Math.min(ee - 1, M + 1);
              _(O), Y($, O);
            }
          }
          break;
        case "ArrowUp":
          if (P.preventDefault(), k === "cells") {
            if (h === "browse") {
              const O = Math.max(0, $ - 1);
              N(O), Y(O, 0), _(0);
            } else if (h === "navigate")
              if ($ > 0) {
                const O = $ - 1;
                N(O), Y(O, M);
              } else
                v("headers"), L("browse"), Q(M);
          }
          break;
        case "ArrowDown":
          if (P.preventDefault(), k === "headers" && h === "browse")
            v("cells"), N(0), _(0), Y(0, 0);
          else if (k === "cells") {
            const O = X - 1;
            if (h === "browse") {
              const re = Math.min(O, $ + 1);
              N(re), Y(re, 0), _(0);
            } else if (h === "navigate" && $ < O) {
              const re = $ + 1;
              N(re), Y(re, M);
            }
          }
          break;
        case "Home":
          P.preventDefault(), k === "headers" ? (_(0), Q(0)) : k === "cells" && (P.ctrlKey ? (N(0), _(0), Y(0, 0)) : (_(0), Y($, 0)));
          break;
        case "End":
          if (P.preventDefault(), k === "headers") {
            const O = ee - 1;
            _(O), Q(O);
          } else if (k === "cells")
            if (P.ctrlKey) {
              const O = X - 1, re = ee - 1;
              N(O), _(re), Y(O, re);
            } else {
              const O = ee - 1;
              _(O), Y($, O);
            }
          break;
        case " ":
          if (P.preventDefault(), k === "headers" && h === "navigate") {
            const O = t[M];
            O && ne(O.key);
          } else k === "cells" && h === "navigate" && J($);
          break;
      }
    }, [
      k,
      h,
      M,
      $,
      ee,
      X,
      t,
      Y,
      Q,
      ne,
      J
    ]);
    le(() => {
      const P = R.current;
      if (P)
        return P.addEventListener("keydown", F), () => P.removeEventListener("keydown", F);
    }, [F]);
    const Z = V(
      "nhsuk-table",
      x,
      {
        "nhsuk-table--responsive": y,
        "nhsuk-table--bordered": S,
        "nhsuk-table--striped": I,
        "nhsuk-table--compact": C === "compact"
      },
      p
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: R,
        className: Z,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": u,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: B, role: "row", children: t.map((P, q) => {
            const O = r?.find((T) => T.key === P.key), re = !!O, b = k === "headers" && M === q;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: V("sortable-header", {
                  "sortable-header--focused": b
                }),
                role: "columnheader",
                tabIndex: b ? 0 : -1,
                onClick: () => ne(P.key),
                onKeyDown: (T) => {
                  (T.key === "Enter" || T.key === " ") && (T.preventDefault(), ne(P.key));
                },
                "aria-sort": re ? O?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: P.label }),
                  re && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((T) => T.key === P.key) + 1 }),
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
          /* @__PURE__ */ n.jsx("tbody", { ref: j, className: "nhsuk-table__body", role: "rowgroup", children: H.map((P, q) => {
            const O = s === q, re = k === "cells" && $ === q;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: V("data-row", {
                  "data-row--selected": O,
                  "data-row--focused": re
                }),
                "aria-selected": O,
                children: t.map((b, T) => {
                  const W = b.render ? b.render(P) : P[b.key], f = k === "cells" && $ === q && M === T, g = () => typeof W == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: W ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: W ? "Yes" : "No" })
                  ] }) : String(W ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: V("data-cell", {
                        "data-cell--focused": f
                      }),
                      tabIndex: f ? 0 : -1,
                      onClick: () => J(q),
                      children: g()
                    },
                    b.key
                  );
                })
              },
              q
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
  const p = ie(null), x = ie(null), S = ie(null), I = K((k, v) => {
    c || (x.current = v, k.dataTransfer.effectAllowed = "move", k.dataTransfer.setData("text/plain", v));
  }, [c]), y = K((k, v) => {
    c || x.current === v || (k.preventDefault(), k.dataTransfer.dropEffect = "move", S.current = v);
  }, [c]), C = K((k, v) => {
    if (c) return;
    k.preventDefault();
    const h = x.current;
    if (!h || h === v) return;
    const L = e.findIndex((X) => X.key === h), ee = e.findIndex((X) => X.key === v);
    if (L !== -1 && ee !== -1) {
      const X = [...e], [H] = X.splice(L, 1);
      X.splice(ee, 0, H), r(X);
    }
    x.current = null, S.current = null;
  }, [c, e, r]), D = K(() => {
    x.current = null, S.current = null;
  }, []), R = K((k) => {
    const v = t.find((h) => h.key === k);
    return v ? v.label : k;
  }, [t]), B = K((k) => ["red", "orange", "blue", "aqua-green", "grey"][k] || "grey", []), j = K((k) => {
    if (c) return;
    const v = e.map(
      (h) => h.key === k ? { ...h, direction: h.direction === "asc" ? "desc" : "asc" } : h
    );
    r(v);
  }, [e, r, c]), $ = K((k) => {
    if (c) return;
    const v = e.filter((h) => h.key !== k);
    r(v);
  }, [e, r, c]), N = K(() => {
    c || r([]);
  }, [r, c]), M = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const k = e.map((v, h) => {
      const L = v.direction === "asc" ? "ascending" : "descending";
      return `${h + 1}. ${R(v.key)} (${L})`;
    });
    if (k.length === 1)
      return `Sorted by: ${k[0]}`;
    if (k.length === 2)
      return `Sorted by: ${k.join(" and ")}`;
    {
      const v = k.pop();
      return `Sorted by: ${k.join(", ")}, and ${v}`;
    }
  }, _ = de(() => {
    const k = ["sort-description"];
    return l && k.push("sort-help"), d && k.push(d), k.join(" ");
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
          ref: p,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": u,
          "aria-describedby": _,
          children: e.map((k, v) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (h) => I(h, k.key),
              onDragOver: (h) => y(h, k.key),
              onDrop: (h) => C(h, k.key),
              onDragEnd: D,
              onClick: () => j(k.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${k.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": k.key,
              children: /* @__PURE__ */ n.jsx(
                Me,
                {
                  color: B(v),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => $(k.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${v + 1}`, children: v + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: R(k.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (h) => {
                          h.stopPropagation(), j(k.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${R(k.key)}. Currently ${k.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${k.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${k.direction}`,
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
            k.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        ge,
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
      disabled: p = !1,
      orientation: x = "horizontal",
      id: S,
      isLoading: I = !1,
      loadingComponent: y,
      error: C = null,
      errorComponent: D,
      "data-testid": R
    } = t, {
      dataComparator: B = (b, T) => JSON.stringify(b) === JSON.stringify(T),
      filterFunction: j = (b) => b,
      booleanRenderer: $ = (b) => b ? "✓" : "✗"
    } = a || {}, N = o !== void 0, M = o ?? 0, [_, k] = ae({
      focusArea: "tabs",
      focusedTabIndex: M,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), v = de(() => ({
      selectedIndex: M,
      tabLoadingStates: new Array(s.length).fill(!1),
      tabErrors: new Array(s.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(s.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [M]), [h, L] = Rr(Ui, v);
    le(() => {
      const b = h.tabLoadingStates.length, T = s.length;
      b !== T && L({ type: "ADJUST_ARRAYS", payload: { newLength: T } });
    }, [s.length]), le(() => {
      N && L({ type: "SET_SELECTED_INDEX", payload: M });
    }, [M, N]), le(() => {
      k((b) => ({
        ...b,
        focusArea: "tabs",
        focusedTabIndex: h.selectedIndex,
        focusedHeaderIndex: 0,
        focusedRowIndex: 0,
        focusedColumnIndex: 0,
        isGridActive: !1
      }));
    }, [h.selectedIndex]), le(() => {
      l && l(h.globalSelectedRowData);
    }, [h.globalSelectedRowData, l]);
    const ee = K((b, T) => B(b, T), [B]), X = K((b) => {
      b >= 0 && b < s.length && !s[b].disabled && (L({ type: "SET_SELECTED_INDEX", payload: b }), k((T) => ({
        ...T,
        focusedTabIndex: b,
        focusArea: "tabs"
      })), i?.(b));
    }, [s, i]), H = K((b) => {
      setTimeout(() => {
        const T = Q.current[b], W = T?.parentElement;
        if (T && W) {
          const f = T.offsetLeft, g = T.offsetWidth, w = W.clientWidth, m = f - w / 2 + g / 2;
          try {
            W.scrollTo({
              left: Math.max(0, m),
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
          console.log("Missing elements for scroll:", { tabElement: T, tabListElement: W });
      }, 50);
    }, []), Y = K((b, T) => {
      const { key: W } = b;
      switch (W) {
        case "ArrowLeft":
          b.preventDefault();
          const f = T > 0 ? T - 1 : s.length - 1;
          X(f), H(f), Q.current[f]?.focus();
          break;
        case "ArrowRight":
          b.preventDefault();
          const g = T < s.length - 1 ? T + 1 : 0;
          X(g), H(g), Q.current[g]?.focus();
          break;
        case "ArrowDown":
          b.preventDefault(), k((m) => ({
            ...m,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        case "Home":
          b.preventDefault(), X(0), H(0), Q.current[0]?.focus();
          break;
        case "End":
          b.preventDefault();
          const w = s.length - 1;
          X(w), H(w), Q.current[w]?.focus();
          break;
        case "Enter":
        case " ":
          b.preventDefault(), X(T);
          break;
      }
    }, [s.length, X, H]), Q = ie([]), ne = ie([]), J = K((b, T) => {
      const W = h.sortConfig || [], f = W.find((m) => m.key === T);
      let g;
      f ? f.direction === "asc" ? g = W.map(
        (m) => m.key === T ? { ...m, direction: "desc" } : m
      ) : g = W.filter((m) => m.key !== T) : g = [...W, { key: T, direction: "asc" }], L({
        type: "SET_SORT",
        payload: g
      }), s[b].onSort?.(T);
    }, [h.sortConfig, s]), F = K((b) => {
      setTimeout(() => {
        const T = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] th:nth-child(${b + 1})`
        );
        T && T.focus();
      }, 0);
    }, [h.selectedIndex]), Z = K((b) => $(b), [$]), P = K((b, T) => {
      setTimeout(() => {
        const W = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] tbody tr:nth-child(${b + 1}) td:nth-child(${T + 1})`
        );
        W && W.focus();
      }, 0);
    }, [h.selectedIndex]);
    le(() => {
      _.isGridActive && (_.focusArea === "headers" ? setTimeout(() => {
        F(_.focusedHeaderIndex);
      }, 0) : _.focusArea === "cells" && setTimeout(() => {
        P(_.focusedRowIndex, _.focusedColumnIndex);
      }, 0));
    }, [_.focusArea, _.isGridActive, _.focusedHeaderIndex, _.focusedRowIndex, _.focusedColumnIndex, F, P]), le(() => {
      H(h.selectedIndex);
    }, [h.selectedIndex, H]);
    const q = K((b, T) => {
      const { key: W } = b, f = s[h.selectedIndex], g = f?.columns.length || 0;
      switch (W) {
        case "ArrowLeft":
          b.preventDefault();
          const w = Math.max(0, T - 1);
          k((G) => ({ ...G, focusedHeaderIndex: w })), F(w);
          break;
        case "ArrowRight":
          b.preventDefault();
          const m = Math.min(g - 1, T + 1);
          k((G) => ({ ...G, focusedHeaderIndex: m })), F(m);
          break;
        case "ArrowUp":
          b.preventDefault(), k((G) => ({
            ...G,
            focusArea: "tabs",
            focusedTabIndex: h.selectedIndex
          })), H(h.selectedIndex), Q.current[h.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          b.preventDefault(), k((G) => ({
            ...G,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: T,
            isGridActive: !0
          }));
          break;
        case "Home":
          b.preventDefault(), k((G) => ({ ...G, focusedHeaderIndex: 0 })), F(0);
          break;
        case "End":
          b.preventDefault();
          const E = g - 1;
          k((G) => ({ ...G, focusedHeaderIndex: E })), F(E);
          break;
        case "Enter":
        case " ":
          b.preventDefault();
          const A = f?.columns[T]?.key;
          A && J(h.selectedIndex, A);
          break;
      }
    }, [s, h.selectedIndex, J, k, F, P, Q]), O = K((b, T, W) => {
      const { key: f } = b, g = s[h.selectedIndex], w = g?.data.length || 0, m = g?.columns.length || 0;
      switch (f) {
        case "ArrowUp":
          if (b.preventDefault(), T === 0)
            k((z) => ({
              ...z,
              focusArea: "headers",
              focusedHeaderIndex: W,
              isGridActive: !1
            })), F(W);
          else {
            const z = T - 1;
            k((U) => ({ ...U, focusedRowIndex: z })), P(z, W);
          }
          break;
        case "ArrowDown":
          b.preventDefault();
          const E = Math.min(w - 1, T + 1);
          k((z) => ({ ...z, focusedRowIndex: E })), P(E, W);
          break;
        case "ArrowLeft":
          b.preventDefault();
          const A = Math.max(0, W - 1);
          k((z) => ({ ...z, focusedColumnIndex: A })), P(T, A);
          break;
        case "ArrowRight":
          b.preventDefault();
          const G = Math.min(m - 1, W + 1);
          k((z) => ({ ...z, focusedColumnIndex: G })), P(T, G);
          break;
        case "Home":
          b.preventDefault(), b.ctrlKey ? (k((z) => ({ ...z, focusedRowIndex: 0, focusedColumnIndex: 0 })), P(0, 0)) : (k((z) => ({ ...z, focusedColumnIndex: 0 })), P(T, 0));
          break;
        case "End":
          if (b.preventDefault(), b.ctrlKey) {
            const z = w - 1, U = m - 1;
            k((te) => ({ ...te, focusedRowIndex: z, focusedColumnIndex: U })), P(z, U);
          } else {
            const z = m - 1;
            k((U) => ({ ...U, focusedColumnIndex: z })), P(T, z);
          }
          break;
        case "Enter":
        case " ":
          if (b.preventDefault(), g && g.data[T]) {
            const z = g.data.some((oe) => "ews_data" in oe) ? j(g.data, h.filters) : g.data, U = h.sortConfig;
            let te = z;
            if (U && U.length > 0 && (te = [...z].sort((oe, ce) => {
              for (const { key: ue, direction: Ae } of U) {
                let ke = oe[ue], Ge = ce[ue];
                const Jt = g.columns.find((Za) => Za.key === ue);
                if (Jt?.render && (ke = Jt.render(oe), Ge = Jt.render(ce)), ke == null && Ge == null) continue;
                if (ke == null) return Ae === "asc" ? -1 : 1;
                if (Ge == null) return Ae === "asc" ? 1 : -1;
                let Qe = 0;
                if (typeof ke == "number" && typeof Ge == "number" ? Qe = ke - Ge : Qe = String(ke).localeCompare(String(Ge), void 0, { numeric: !0, sensitivity: "base" }), Qe !== 0)
                  return Ae === "asc" ? Qe : -Qe;
              }
              return 0;
            })), te[T]) {
              const oe = te[T], ue = h.globalSelectedRowData && ee(h.globalSelectedRowData, oe) ? null : oe;
              L({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: ue
              });
            }
          }
          break;
      }
    }, [s, h.selectedIndex, h.filters, h.sortConfig, j, ee, L, k, F, P]), re = K((b, T) => j(b, T), [j]);
    return Fr(r, () => ({
      selectTab: (b) => {
        b >= 0 && b < s.length && (L({ type: "SET_SELECTED_INDEX", payload: b }), i?.(b));
      },
      refreshData: (b) => {
        console.log("Refreshing data for tab:", b ?? "all");
      },
      exportData: (b) => {
        const T = b ?? h.selectedIndex, W = s[T];
        return W ? W.data : [];
      },
      getSelectedRows: (b) => h.globalSelectedRowData ? [] : [],
      clearSelection: (b) => {
        L({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (b) => {
        L({ type: "SET_FILTERS", payload: b });
      }
    }), [h.selectedIndex, h.selectedRows, s, i]), I ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": R, children: y || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : C ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": R, children: D || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: C })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${x} ${d}`,
        id: S,
        "data-testid": R,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${S}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Oi,
            {
              sortConfig: h.sortConfig || [],
              columns: s.flatMap(
                (b) => b.columns.map((T) => ({ key: T.key, label: T.label }))
              ).filter(
                (b, T, W) => W.findIndex((f) => f.key === b.key) === T
                // Remove duplicates
              ),
              onSortChange: (b) => {
                L({ type: "SET_SORT", payload: b });
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
              "aria-orientation": x,
              className: "aria-tabs-datagrid__tabs",
              children: s.map((b, T) => {
                const W = T === h.selectedIndex, f = b.disabled || p;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${b.id}`,
                    "aria-controls": `panel-${b.id}`,
                    "aria-selected": W,
                    "aria-disabled": f,
                    tabIndex: W ? 0 : -1,
                    ref: (g) => {
                      Q.current[T] = g;
                    },
                    onClick: () => X(T),
                    onKeyDown: (g) => Y(g, T),
                    disabled: f,
                    className: `
				  aria-tabs-datagrid__tab
				  ${W ? "aria-tabs-datagrid__tab--selected" : ""}
				  ${f ? "aria-tabs-datagrid__tab--disabled" : ""}
				`.trim(),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: b.label }),
                      h.tabLoadingStates[T] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      h.tabErrors[T] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  b.id
                );
              })
            }
          ),
          s.map((b, T) => {
            const W = T === h.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${b.id}`,
                "aria-labelledby": `tab-${b.id}`,
                tabIndex: 0,
                hidden: !W,
                ref: (f) => {
                  ne.current[T] = f;
                },
                className: `aria-tabs-datagrid__panel ${b.className || ""}`,
                "data-tab-panel": T,
                children: W && (() => {
                  const f = b.data.some((w) => "ews_data" in w) ? re(b.data, h.filters) : b.data, g = de(() => {
                    const w = h.sortConfig;
                    return !w || w.length === 0 ? f : [...f].sort((m, E) => {
                      for (const { key: A, direction: G } of w) {
                        let z = m[A], U = E[A];
                        const te = b.columns.find((ce) => ce.key === A);
                        if (te?.render && (z = te.render(m), U = te.render(E)), z == null && U == null) continue;
                        if (z == null) return 1;
                        if (U == null) return -1;
                        let oe = 0;
                        if (typeof z == "number" && typeof U == "number" ? oe = z - U : typeof z == "boolean" && typeof U == "boolean" ? oe = z === U ? 0 : z ? 1 : -1 : oe = String(z).localeCompare(String(U), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), oe !== 0)
                          return G === "asc" ? oe : -oe;
                      }
                      return 0;
                    });
                  }, [f, h.sortConfig, b.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": b.ariaLabel,
                      "aria-describedby": b.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: b.columns.map((w, m) => {
                          const E = h.sortConfig?.find((z) => z.key === w.key), A = !!E, G = _.focusArea === "headers" && _.focusedHeaderIndex === m;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${G ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: G ? 0 : -1,
                              onClick: () => J(T, w.key),
                              onKeyDown: (z) => q(z, m),
                              "aria-sort": A ? E?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: w.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${A ? `sort-indicator--${E?.direction}` : ""}`, children: [
                                  h.sortConfig && h.sortConfig.length > 0 && h.sortConfig.findIndex((z) => z.key === w.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${h.sortConfig.findIndex((z) => z.key === w.key) + 1}`,
                                      "data-priority": h.sortConfig.findIndex((z) => z.key === w.key) + 1,
                                      title: `Sort priority: ${h.sortConfig.findIndex((z) => z.key === w.key) + 1}`,
                                      children: h.sortConfig.findIndex((z) => z.key === w.key) + 1
                                    }
                                  ),
                                  A && /* @__PURE__ */ n.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${E?.direction}`,
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
                            w.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: g.map((w, m) => {
                          const E = h.globalSelectedRowData && ee(h.globalSelectedRowData, w), A = _.focusArea === "cells" && _.focusedRowIndex === m;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${E ? "data-row--selected" : ""} ${A ? "data-row--focused" : ""}`,
                              "aria-selected": E,
                              children: b.columns.map((G, z) => {
                                const U = G.render ? G.render(w) : w[G.key], te = _.focusArea === "cells" && _.focusedRowIndex === m && _.focusedColumnIndex === z, oe = () => typeof U == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  Z(U),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: U ? "Yes" : "No" })
                                ] }) : String(U ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${te ? "data-cell--focused" : ""}`,
                                    tabIndex: te ? 0 : -1,
                                    onClick: () => {
                                      const ue = h.globalSelectedRowData && ee(h.globalSelectedRowData, w) ? null : w;
                                      L({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: ue
                                      });
                                    },
                                    onKeyDown: (ce) => O(ce, m, z),
                                    children: oe()
                                  },
                                  G.key
                                );
                              })
                            },
                            m
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
  ariaDescribedBy: u
}) => {
  const d = de(() => Gi(e), [e]), p = K((R) => {
    if (l) return;
    const B = e.map(
      (j) => j.id === R ? { ...j, direction: j.direction === "asc" ? "desc" : "asc" } : j
    );
    t(B);
  }, [e, t, l]), x = K((R) => {
    if (l) return;
    const B = e.findIndex(($) => $.id === R);
    if (B <= 0) return;
    const j = [...e];
    [j[B], j[B - 1]] = [j[B - 1], j[B]], t(ln(j));
  }, [e, t, l]), S = K((R) => {
    if (l) return;
    const B = e.findIndex(($) => $.id === R);
    if (B >= e.length - 1 || B === -1) return;
    const j = [...e];
    [j[B], j[B + 1]] = [j[B + 1], j[B]], t(ln(j));
  }, [e, t, l]), I = K((R) => {
    if (l) return;
    const B = e.filter((j) => j.id !== R);
    t(ln(B));
  }, [e, t, l]), y = K(() => {
    l || t([]);
  }, [t, l]), C = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const R = d.map((B, j) => {
      const $ = B.direction === "asc" ? "ascending" : "descending";
      return `${j + 1}. ${B.label} (${$})`;
    });
    if (R.length === 1)
      return `Sorted by: ${R[0]}`;
    if (R.length === 2)
      return `Sorted by: ${R.join(" and ")}`;
    {
      const B = R.pop();
      return `Sorted by: ${R.join(", ")}, and ${B}`;
    }
  }, D = de(() => {
    const R = ["sort-description"];
    return i && R.push("sort-help"), u && R.push(u), R.join(" ");
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
        "aria-describedby": D,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((R) => /* @__PURE__ */ n.jsx(
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
                  onClose: () => I(R.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: R.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: R.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => p(R.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${R.label}. Currently ${R.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: R.direction === "asc" ? ft.asc : ft.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => x(R.id),
                          disabled: l || !Vi(R.id, e),
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
                          onClick: () => S(R.id),
                          disabled: l || !qi(R.id, e),
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
    o && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      ge,
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
  const [r, a] = ae("cards");
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
  } = r, l = t.find((y) => y.key === a), c = l?.render ? l.render(e) : e[a || "name"] || "Untitled", u = () => s.filter((C) => !i.includes(C) && e[C]).slice(0, 3).map((C) => {
    const D = t.find((j) => j.key === C), R = D?.render ? D.render(e) : e[C];
    return `${D?.label || C}: ${R}`;
  }).join(" • "), d = () => o.length === 0 ? null : o.filter((y) => e[y] !== void 0).map((y) => {
    const C = t.find((R) => R.key === y), D = C?.render ? C.render(e) : e[y];
    if (y === "ews_score") {
      const R = Number(D);
      return `<span class="nhsuk-tag nhsuk-tag--${R >= 7 ? "high" : R >= 3 ? "medium" : "low"} adaptive-card__ews-badge">EWS: ${D}</span>`;
    }
    return `<span class="nhsuk-tag adaptive-card__badge">${D}</span>`;
  }).join(""), p = () => e.ews_score && Number(e.ews_score) >= 7 || e.priority === "high" || e.status === "urgent" ? "primary" : "default", x = d(), S = u(), I = x ? `${S}${x ? `<div class="adaptive-card__badges">${x}</div>` : ""}` : S;
  return {
    variant: p(),
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
  ariaDescription: u,
  orientation: d = "horizontal",
  id: p,
  disabled: x = !1,
  className: S,
  ...I
}) => {
  const y = nl(e, t), C = i !== void 0, D = i ?? 0, R = de(() => ({
    selectedIndex: D,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [D, s.length]), [B, j] = Rr(tl, R), $ = ie([]), N = ie([]), M = ie(null), [_, k] = ae({
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
    cardSortConfig: null
  }), v = K((f) => {
    if (!f.current)
      return { columns: 1, rows: 0 };
    const g = f.current, w = g.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (w.length === 0)
      return { columns: 1, rows: 0 };
    const m = g.offsetWidth, A = w[0].offsetWidth, G = Math.floor(m / A) || 1, z = Math.ceil(w.length / G);
    return { columns: G, rows: z };
  }, []), h = K((f, g) => ({
    row: Math.floor(f / g),
    col: f % g
  }), []), L = K((f, g, w) => f * w + g, []), ee = K((f, g, w, m) => {
    const { row: E, col: A } = h(f, m);
    let G = E, z = A;
    switch (g) {
      case "up":
        G = Math.max(0, E - 1);
        break;
      case "down":
        G = Math.min(Math.floor((w - 1) / m), E + 1);
        break;
      case "left":
        z = Math.max(0, A - 1);
        break;
      case "right":
        z = Math.min(m - 1, A + 1);
        break;
    }
    const U = L(G, z, m);
    return Math.min(U, w - 1);
  }, [h, L]);
  le(() => {
    _.isCardNavigationActive && _.focusedCardElementIndex >= 0 && _.cardElements.length > 0 && setTimeout(() => {
      const f = _.cardElements[_.focusedCardElementIndex];
      f && (f.element.focus(), f.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [_.isCardNavigationActive, _.focusedCardElementIndex, _.cardElements.length]), le(() => {
    const f = () => {
      if (y === "cards" && M.current) {
        const { columns: m, rows: E } = v(M);
        k((A) => ({
          ...A,
          gridColumns: m,
          gridRows: E
        }));
      }
    }, g = setTimeout(f, 200), w = () => {
      setTimeout(f, 100);
    };
    return window.addEventListener("resize", w), () => {
      clearTimeout(g), window.removeEventListener("resize", w);
    };
  }, [y, s, v]), le(() => {
    const f = B.tabLoadingStates.length, g = s.length;
    f !== g && j({ type: "ADJUST_ARRAYS", payload: { newLength: g } });
  }, [s.length, B.tabLoadingStates.length]), le(() => {
    C && i !== B.selectedIndex && j({ type: "SET_SELECTED_INDEX", payload: i });
  }, [C, i, B.selectedIndex]);
  const X = K((f) => {
    f >= 0 && f < s.length && !s[f].disabled && (j({ type: "SET_SELECTED_INDEX", payload: f }), l?.(f));
  }, [s, l]), H = K((f) => {
    console.log("Card selected:", f), j({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: f
    });
  }, []), Y = K((f) => {
    const g = N.current[f];
    g && (g.focus(), g.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), Q = K((f) => {
    const g = N.current[f];
    if (!g) return [];
    const w = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), m = g.querySelectorAll(w);
    return Array.from(m).map((E, A) => ({
      id: E.id || `card-${f}-element-${A}`,
      element: E,
      label: E.getAttribute("aria-label") || E.textContent?.trim() || E.getAttribute("title") || `Element ${A + 1}`,
      type: E.tagName.toLowerCase() === "button" ? "button" : E.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(E.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), ne = ie(null), J = K((f) => {
    const g = ne.current;
    if (!g) return;
    const w = document.createElement("div");
    w.setAttribute("aria-live", "polite"), w.setAttribute("aria-atomic", "true"), w.className = "sr-only", w.textContent = f, g.appendChild(w), setTimeout(() => {
      g.contains(w) && g.removeChild(w);
    }, 1e3);
  }, []), F = K((f) => {
    const g = f.filter((m) => m.sortable !== !1), w = [
      { value: "", label: "Sort by..." }
    ];
    return g.forEach((m) => {
      const E = m.label || m.key;
      m.key === "name" ? w.push(
        { value: `${m.key}-asc`, label: `${E} (A-Z)` },
        { value: `${m.key}-desc`, label: `${E} (Z-A)` }
      ) : m.key === "ews_score" || m.key.includes("score") ? w.push(
        { value: `${m.key}-desc`, label: `${E} (High-Low)` },
        { value: `${m.key}-asc`, label: `${E} (Low-High)` }
      ) : m.key === "age" || m.key.includes("date") || m.key.includes("time") ? w.push(
        { value: `${m.key}-desc`, label: `${E} (Newest-Oldest)` },
        { value: `${m.key}-asc`, label: `${E} (Oldest-Newest)` }
      ) : w.push(
        { value: `${m.key}-asc`, label: `${E} (A-Z)` },
        { value: `${m.key}-desc`, label: `${E} (Z-A)` }
      );
    }), w;
  }, []), Z = K((f, g) => g ? [...f].sort((w, m) => {
    const E = w[g.key], A = m[g.key];
    if (E == null && A == null) return 0;
    if (E == null) return 1;
    if (A == null) return -1;
    const G = Number(E), z = Number(A);
    if (!isNaN(G) && !isNaN(z))
      return g.direction === "asc" ? G - z : z - G;
    const U = String(E).toLowerCase(), te = String(A).toLowerCase(), oe = U.localeCompare(te);
    return g.direction === "asc" ? oe : -oe;
  }) : f, []), P = K((f) => {
    if (!f) {
      k((U) => ({ ...U, cardSortConfig: null })), J("Card sorting cleared");
      return;
    }
    const [g, w] = f.split("-"), m = { key: g, direction: w };
    k((U) => ({ ...U, cardSortConfig: m }));
    const G = s[B.selectedIndex]?.columns.find((U) => U.key === g)?.label || g;
    J(`Cards sorted by ${G} in ${w === "asc" ? "ascending" : "descending"} order`);
  }, [s, B.selectedIndex, J]), q = K((f) => {
    const m = s[B.selectedIndex]?.columns.find((A) => A.key === f.key)?.label || f.key, E = f.direction === "asc" ? "ascending" : "descending";
    return `${m} (${E})`;
  }, [s, B.selectedIndex]), O = K((f, g) => {
    const w = Q(f), m = w[g];
    if (m) {
      m.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const E = `Focused on ${m.label}, ${m.type} ${g + 1} of ${w.length} within card`;
      J(E);
    }
  }, [Q, J]), re = K((f) => {
    $.current[f]?.focus();
  }, []), b = K((f, g) => {
    const { key: w } = f, m = s[B.selectedIndex], E = m?.data.length || 0;
    if (w === "ArrowLeft" && f.shiftKey) {
      f.preventDefault(), f.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (w === "ArrowRight" && f.shiftKey) {
      f.preventDefault(), f.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!_.isCardNavigationActive) {
      switch (w) {
        case "ArrowUp":
          if (f.preventDefault(), g === 0)
            k((U) => ({ ...U, focusArea: "tabs" })), re(B.selectedIndex);
          else {
            const U = ee(g, "up", E, _.gridColumns);
            U !== g && (k((te) => ({ ...te, focusedCardIndex: U })), Y(U), J(`Moved to card ${U + 1} of ${E}`));
          }
          break;
        case "ArrowDown":
          f.preventDefault();
          const A = ee(g, "down", E, _.gridColumns);
          A !== g && (k((U) => ({ ...U, focusedCardIndex: A })), Y(A), J(`Moved to card ${A + 1} of ${E}`));
          break;
        case "ArrowLeft":
          f.preventDefault();
          const G = ee(g, "left", E, _.gridColumns);
          G !== g ? (k((U) => ({ ...U, focusedCardIndex: G })), Y(G), J(`Moved to card ${G + 1} of ${E}`)) : B.selectedIndex > 0 && (j({ type: "SET_SELECTED_INDEX", payload: B.selectedIndex - 1 }), k((U) => ({ ...U, focusArea: "tabs" })), setTimeout(() => re(B.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          f.preventDefault();
          const z = ee(g, "right", E, _.gridColumns);
          z !== g ? (k((U) => ({ ...U, focusedCardIndex: z })), Y(z), J(`Moved to card ${z + 1} of ${E}`)) : B.selectedIndex < s.length - 1 && (j({ type: "SET_SELECTED_INDEX", payload: B.selectedIndex + 1 }), k((U) => ({ ...U, focusArea: "tabs" })), setTimeout(() => re(B.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (m?.data[g]) {
            f.preventDefault(), k((te) => ({
              ...te,
              selectedCardIndex: g
            }));
            const U = Q(g);
            U.length > 0 ? (k((te) => ({
              ...te,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: U,
              selectedCardIndex: g
              // Ensure selection is maintained
            })), J(`Card ${g + 1} selected and navigation activated. ${U.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : J(`Card ${g + 1} selected.`);
          }
          break;
        case " ":
          if (m?.data[g]) {
            f.preventDefault(), k((te) => ({
              ...te,
              selectedCardIndex: te.selectedCardIndex === g ? -1 : g
            }));
            const U = _.selectedCardIndex === g;
            J(`Card ${g + 1} ${U ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (w) {
      case "ArrowUp":
      case "ArrowLeft":
        f.preventDefault();
        const A = Math.max(0, _.focusedCardElementIndex - 1);
        k((te) => ({ ...te, focusedCardElementIndex: A })), O(g, A);
        break;
      case "ArrowDown":
      case "ArrowRight":
        f.preventDefault();
        const G = Math.min(_.cardElements.length - 1, _.focusedCardElementIndex + 1);
        k((te) => ({ ...te, focusedCardElementIndex: G })), O(g, G);
        break;
      case "Enter":
        f.preventDefault();
        const z = _.cardElements[_.focusedCardElementIndex];
        z && (z.element.click(), J(`Activated ${z.label}`));
        break;
      case " ":
        f.preventDefault();
        const U = _.cardElements[_.focusedCardElementIndex];
        if (U) {
          const te = new MouseEvent("dblclick", { bubbles: !0 });
          U.element.dispatchEvent(te), J(`Double-clicked ${U.label}`);
        }
        break;
      case "Escape":
        f.preventDefault(), k((te) => ({
          ...te,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => Y(g), 0), J("Exited card navigation, returned to card level");
        break;
      case "Home":
        f.preventDefault(), _.cardElements.length > 0 && (k((te) => ({ ...te, focusedCardElementIndex: 0 })), O(g, 0));
        break;
      case "End":
        if (f.preventDefault(), _.cardElements.length > 0) {
          const te = _.cardElements.length - 1;
          k((oe) => ({ ...oe, focusedCardElementIndex: te })), O(g, te);
        }
        break;
    }
  }, [_, B.selectedIndex, s, H, Y, re, k, Q, O, J]), T = K((f) => {
    const g = $.current[f], w = g?.parentElement;
    if (!g || !w) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const m = g.getBoundingClientRect(), E = w.getBoundingClientRect();
    m.left >= E.left && m.right <= E.right || (console.log("Tab not visible, scrolling into view (mobile)"), g.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), W = K((f, g) => {
    if (y !== "cards")
      return;
    console.log("handleTabKeyDownWithCards called with key:", f.key, "index:", g);
    const { key: w } = f;
    switch (w) {
      case "ArrowLeft":
        f.preventDefault();
        const m = g > 0 ? g - 1 : s.length - 1;
        X(m), k((G) => ({ ...G, focusedTabIndex: m })), $.current[m]?.focus(), T(m);
        break;
      case "ArrowRight":
        f.preventDefault();
        const E = g < s.length - 1 ? g + 1 : 0;
        X(E), k((G) => ({ ...G, focusedTabIndex: E })), $.current[E]?.focus(), T(E);
        break;
      case "ArrowDown":
        f.preventDefault(), k((G) => ({
          ...G,
          focusArea: "cards",
          focusedCardIndex: 0
        })), Y(0);
        break;
      case "Home":
        f.preventDefault(), X(0), k((G) => ({ ...G, focusedTabIndex: 0 })), $.current[0]?.focus(), T(0);
        break;
      case "End":
        f.preventDefault();
        const A = s.length - 1;
        X(A), k((G) => ({ ...G, focusedTabIndex: A })), $.current[A]?.focus(), T(A);
        break;
      case "Enter":
      case " ":
        f.preventDefault(), X(g);
        break;
    }
  }, [s.length, X, y, Y, k, T]);
  if (y === "cards") {
    const f = s[B.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${S || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": c,
          "aria-describedby": `${u || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
          "aria-orientation": d,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((g, w) => {
            const m = w === B.selectedIndex, E = g.disabled || x;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${g.id}`,
                "aria-controls": `panel-${g.id}`,
                "aria-selected": m,
                "aria-disabled": E,
                tabIndex: m ? 0 : -1,
                ref: (A) => {
                  $.current[w] = A;
                },
                onClick: () => X(w),
                onKeyDown: (A) => W(A, w),
                disabled: E,
                className: `
				  aria-tabs-datagrid__tab
				  ${m ? "aria-tabs-datagrid__tab--selected" : ""}
				  ${E ? "aria-tabs-datagrid__tab--disabled" : ""}
				`.trim(),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: g.label }),
                  B.tabLoadingStates[w] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  B.tabErrors[w] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              g.id
            );
          })
        }
      ),
      f && f.columns && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__sort-controls", children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
          /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${f.id}`, className: "sort-label", children: "Sort cards by" }),
          /* @__PURE__ */ n.jsx(
            Mr,
            {
              id: `card-sort-${f.id}`,
              name: `card-sort-${f.id}`,
              value: _.cardSortConfig ? `${_.cardSortConfig.key}-${_.cardSortConfig.direction}` : "",
              onChange: (g) => P(g.target.value),
              className: "sort-select",
              children: F(f.columns).map((g) => /* @__PURE__ */ n.jsx("option", { value: g.value, children: g.label }, g.value))
            }
          )
        ] }),
        _.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
          /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
            "Sorted by ",
            q(_.cardSortConfig)
          ] }),
          /* @__PURE__ */ n.jsx(
            ge,
            {
              variant: "secondary",
              size: "small",
              onClick: () => P(""),
              "aria-label": "Clear card sorting",
              className: "sort-clear-button",
              children: "Clear"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: M,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${f?.label || "Data"} cards in ${_.gridRows} rows and ${_.gridColumns} columns`,
          "aria-rowcount": _.gridRows,
          "aria-colcount": _.gridColumns,
          id: `panel-${f?.id}`,
          "aria-labelledby": `tab-${f?.id}`,
          children: Z(f?.data || [], _.cardSortConfig).map((g, w) => {
            const m = _.selectedCardIndex === w, E = _.focusedCardIndex === w && _.focusArea === "cards", A = _.focusedCardIndex === w && _.focusArea === "card" && _.isCardNavigationActive, G = w === 0 && _.focusArea !== "cards", z = E || G, U = h(w, _.gridColumns);
            if (r.cardTemplate) {
              const ce = r.cardTemplate(g, f.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: (ue) => {
                    N.current[w] = ue;
                  },
                  className: `
					aria-tabs-datagrid-adaptive__card-wrapper
					${m ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : ""}
					${E ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : ""}
					${A ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""}
				  `.trim(),
                  role: "gridcell",
                  "aria-rowindex": U.row + 1,
                  "aria-colindex": U.col + 1,
                  "aria-selected": m,
                  "aria-expanded": A,
                  "aria-description": A ? `Card navigation active. ${_.cardElements.length} interactive elements available.` : void 0,
                  tabIndex: z ? 0 : -1,
                  onClick: () => {
                    k((ue) => ({
                      ...ue,
                      selectedCardIndex: ue.selectedCardIndex === w ? -1 : w
                    })), H(g);
                  },
                  onKeyDown: (ue) => b(ue, w),
                  onFocus: () => {
                    k((ue) => ue.focusedCardIndex !== w || ue.focusArea !== "cards" ? {
                      ...ue,
                      focusedCardIndex: w,
                      focusArea: "cards"
                    } : ue);
                  },
                  children: ce
                },
                `card-${w}`
              );
            }
            const te = rl(g, f.columns, r), oe = `
			  ${te.className}
			  ${m ? "aria-tabs-datagrid-adaptive__card--selected" : ""}
			  ${E ? "aria-tabs-datagrid-adaptive__card--focused" : ""}
			  ${A ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""}
			`.trim();
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                className: `
				  aria-tabs-datagrid-adaptive__card-wrapper
				  ${A ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""}
				`.trim(),
                role: "gridcell",
                "aria-rowindex": U.row + 1,
                "aria-colindex": U.col + 1,
                children: /* @__PURE__ */ n.jsx(
                  ea,
                  {
                    ...te,
                    ref: (ce) => {
                      N.current[w] = ce;
                    },
                    className: oe,
                    "aria-selected": m,
                    "aria-expanded": A,
                    "aria-label": `${te["aria-label"] || te.heading}. ${A ? `Card navigation active with ${_.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                    tabIndex: z ? 0 : -1,
                    onClick: () => {
                      k((ce) => ({
                        ...ce,
                        selectedCardIndex: ce.selectedCardIndex === w ? -1 : w
                      })), H(g);
                    },
                    onKeyDown: (ce) => b(ce, w),
                    onFocus: () => {
                      _.isCardNavigationActive || k((ce) => ce.focusedCardIndex !== w || ce.focusArea !== "cards" ? {
                        ...ce,
                        focusedCardIndex: w,
                        focusArea: "cards",
                        // Reset card navigation state when switching cards
                        focusedCardElementIndex: 0,
                        cardElements: []
                      } : ce);
                    }
                  }
                )
              },
              `card-${w}`
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
  return y === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${S || ""}`, children: /* @__PURE__ */ n.jsx(
    hn,
    {
      tabPanels: s,
      dataConfig: o,
      ariaLabel: c,
      ariaDescription: u,
      orientation: d,
      id: p,
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
      ariaDescription: u,
      orientation: d,
      id: p,
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
  const i = e.nhs_number || e.nhsNumber || e.patient_id, l = e.name || e.patient_name || `${e.first_name || ""} ${e.last_name || ""}`.trim(), c = e.dob || e.date_of_birth || e.birth_date, u = e.ward || e.location || e.current_ward, d = e.condition || e.diagnosis || e.primary_condition, p = e.alert_level || e.ews_score || e.priority_level;
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
                color: cl(ta(p)),
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
            ge,
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
            ge,
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
            ge,
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
            ge,
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
            ge,
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
            ge,
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
            ge,
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
            ge,
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
            ge,
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
  const [e, t] = ae("healthcare"), r = de(() => ({
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
        ge,
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
  navigation: u,
  search: d,
  account: p,
  organisation: x,
  logo: S,
  className: I,
  ...y
}) => {
  const C = {
    service: c,
    navigation: u,
    search: d,
    account: p,
    organisation: x,
    logo: S,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Qr, { ...o }),
    /* @__PURE__ */ n.jsx(Pr, { ...C }),
    /* @__PURE__ */ n.jsx(aa, { className: I, ...y, children: /* @__PURE__ */ n.jsx(Er, { size: s, children: /* @__PURE__ */ n.jsx(pt, { children: /* @__PURE__ */ n.jsxs(Pn, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Le, { size: "l", ...r, children: t }),
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
  serviceName: u,
  serviceHref: d,
  logo: p,
  className: x,
  ...S
}) => {
  const I = {
    service: {
      text: u,
      href: d
    },
    logo: p,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Qr, { ...o }),
    /* @__PURE__ */ n.jsx(Pr, { ...I }),
    /* @__PURE__ */ n.jsxs(aa, { className: x, ...S, children: [
      c && /* @__PURE__ */ n.jsx(ls, { ...c }),
      /* @__PURE__ */ n.jsx(Er, { size: s, children: /* @__PURE__ */ n.jsx(pt, { children: /* @__PURE__ */ n.jsxs(Pn, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Le, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(zr, { ...l })
  ] });
}, Cl = "150ms", jl = "300ms", Nl = "500ms", Tl = "cubic-bezier(0.4, 0, 1, 1)", Dl = "cubic-bezier(0, 0, 0.2, 1)", Bl = "cubic-bezier(0.4, 0, 0.2, 1)", Fl = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Rl = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Il = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ml = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ll = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", El = "1px", $l = "2px", Al = "4px", Hl = "4px", Pl = "4px", zl = "2px", Wl = "1px", Ol = "0px", Ul = "4px", Gl = "8px", Yl = "12px", sa = "#d8dde0", oa = "#4c6272", ia = "#d8dde0", la = "#aeb7bd", ca = "#d5281b", da = "#005eb8", ua = "#ffffff", ha = "#212b32", fa = "#007f3b", ma = "#330072", pa = "#7c2855", ga = "#d5281b", ba = "#ffeb3b", xa = "#fff9c4", ya = "#ffb81c", _a = "#ed8b00", ka = "#00a499", va = "#ae2573", wa = "#4c6272", Sa = "#768692", Ca = "#aeb7bd", ja = "#d8dde0", Na = "#f0f4f5", Vl = "#212b32", ql = "#4c6272", Kl = "#ffffff", Zl = "#212b32", Jl = "#005eb8", Xl = "#7c2855", Ql = "#003087", ec = "#330072", tc = "#ffeb3b", nc = "#212b32", rc = "#d8dde0", ac = "#ffffff33", sc = "#d5281b", oc = "#4c6272", ic = "#ffffff", lc = "#007f3b", cc = "#ffffff", dc = "#006530", uc = "#004021", hc = "#004021", fc = "#00000000", mc = "#ffffff", pc = "#005eb8", gc = "#005eb8", bc = "#d9e5f2", xc = "#c7daf0", yc = "#005eb8", _c = "#ffffff", kc = "#212b32", vc = "#d9dde0", wc = "#b3bcc2", Sc = "#b3bcc2", Cc = "#d5281b", jc = "#aa2016", Nc = "#6a140e", Tc = "#6a140e", Dc = "#005eb8", Bc = "#004b93", Fc = "#002f5c", Rc = "#002f5c", Ic = "8px", Mc = "16px", Lc = "12px", Ec = "16px", $c = "4px", Ac = "40px", Hc = "4px", Pc = "40px", zc = "12px", Wc = "16px", Oc = "32px", Uc = "16px", Gc = "20px", Yc = "28px", Vc = "9px", qc = "2px", Kc = "16px", Zc = "24px", Jc = "8px", Xc = "24px", Qc = "16px", ed = "4px", td = "4px", nd = "4px", rd = "8px", ad = "4px", sd = "16px", od = "#007f3b", id = "#006530", ld = "#004021", cd = "#d8dde0", dd = "#ffffff", ud = "#768692", hd = "#00000000", fd = "#ffeb3b", md = "#00000000", pd = "#ffffff", gd = "#d9e5f2", bd = "#c7daf0", xd = "#005eb8", yd = "#005eb8", Ta = "8px", Da = "16px", Ba = "12px", Fa = "16px", _d = "2px", kd = "4px", vd = "4px", wd = "600", Sd = "#ffffff", Cd = "#d8dde0", jd = "#aeb7bd", Nd = "#f0f4f5", Td = "#212b32", Dd = "#212b32", Bd = "#005eb8", Ra = "16px", Ia = "32px", Ma = "16px", Fd = "1px", Rd = "4px", Id = "none", Md = "0 2px 4px rgba(0, 0, 0, 0.1)", Ld = "#ffffff", Ed = "#ffffff", $d = "#d8dde0", Ad = "#ffffff", Hd = "#4c6272", Pd = "#ffeb3b", zd = "#d5281b", Wd = "#aeb7bd", Od = "#212b32", Ud = "#4c6272", Gd = "#768692", Yd = "#212b32", Vd = "#ffffff", qd = "600", Kd = "#d5281b", Zd = "600", Jd = "#4c6272", La = "4px", Ea = "40px", $a = "40px", Aa = "12px", Xd = "2px", Qd = "4px", eu = "0px", tu = "16px", nu = "18px", ru = "24px", au = "32px", su = "34px", ou = "32px", iu = "40px", lu = "48px", cu = "5.4ex", du = "7.2ex", uu = "9ex", hu = "10.8ex", fu = "20ex", mu = "38ex", pu = "56ex", gu = "44px", bu = "40px", xu = "1020px", yu = "100%", _u = "50%", ku = "33.333%", vu = "25%", wu = "20%", Su = "320px", Cu = "641px", ju = "1025px", Nu = "1280px", Tu = "960px", Du = "32px", Bu = "16px", Fu = "#d5281b", Ru = "#d5281b", Iu = "#ffffff", Mu = "#007f3b", Lu = "#007f3b", Eu = "#ffffff", $u = "#ffeb3b", Au = "#ffeb3b", Hu = "#212b32", Pu = "#005eb8", zu = "#005eb8", Wu = "#ffffff", Ou = "#d8dde0", Uu = "#aeb7bd", Gu = "#768692", Yu = "0 4px 0 #004021", Vu = "0 4px 0 #005eb8", qu = "0 4px 0 #6a140e", Ku = "0 4px 0 #ffeb3b", Zu = "none", Ju = "0 2px 4px rgba(0, 0, 0, 0.1)", Xu = "4px", Qu = "0px", eh = "solid", th = "0 0 0 3px #ffeb3b", nh = "0 0 0 3px #ffeb3b", rh = "none", ah = "0 1px 3px rgba(0, 0, 0, 0.12)", sh = "0 2px 6px rgba(0, 0, 0, 0.16)", oh = "0 4px 12px rgba(0, 0, 0, 0.20)", Ha = "0", Pa = "4px", za = "8px", Wa = "16px", Oa = "24px", Ua = "32px", Ga = "40px", Ya = "48px", Va = "56px", qa = "64px", mn = "0", pn = "0", gn = "4px", bn = "4px", xn = "8px", yn = "8px", _n = "8px", kn = "16px", vn = "16px", wn = "24px", Sn = "24px", Cn = "32px", jn = "32px", Nn = "40px", Tn = "40px", Dn = "48px", Bn = "48px", Fn = "56px", Rn = "56px", In = "64px", wt = "Frutiger W01", St = "Arial, Helvetica, sans-serif", Ct = "sans-serif", jt = "400", Nt = "600", Tt = "400", Dt = "12px", Bt = "14px", Ft = "12pt", Rt = "14px", It = "16px", Mt = "12pt", Lt = "16px", Et = "19px", $t = "13pt", At = "19px", Ht = "22px", Pt = "15pt", zt = "22px", Wt = "26px", Ot = "17pt", Ut = "27px", Gt = "36px", Yt = "20pt", Vt = "33px", qt = "48px", Kt = "24pt", Mn = "16px", Ln = "24px", ve = {
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
  CardBorderWidthBottom: Rd,
  CardBorderWidthDefault: Fd,
  CardShadowDefault: Id,
  CardShadowHover: Md,
  CardSpacingHeadingMargin: Ma,
  CardSpacingPaddingDesktop: Ia,
  CardSpacingPaddingMobile: Ra,
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
  FontLineHeightBase: Ln,
  FontSize14Mobile: Dt,
  FontSize14Print: Ft,
  FontSize14Tablet: Bt,
  FontSize16Mobile: Rt,
  FontSize16Print: Mt,
  FontSize16Tablet: It,
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
  StateSuccessBorder: Lu,
  StateSuccessText: Eu,
  StateWarningBackground: $u,
  StateWarningBorder: Au,
  StateWarningText: Hu,
  TransitionButtonDefault: Rl,
  TransitionButtonShadow: Il,
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
), Qh = () => de(() => ih, []), ef = () => de(() => ({
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
}), []), tf = () => de(() => ({
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
}), []), nf = () => de(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Dt,
    Size16: Rt,
    Size19: Lt,
    Size22: At,
    Size26: zt,
    Size36: Ut,
    Size48: Vt
  },
  Tablet: {
    Size14: Bt,
    Size16: It,
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
  FontSize16Mobile: Rt,
  FontSize16Tablet: It,
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
}), []), rf = () => de(() => ({
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
}), []), af = () => de(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Ta,
  ButtonSpacingPaddingHorizontalMobile: Da,
  ButtonSpacingPaddingVerticalDesktop: Ba,
  ButtonSpacingPaddingHorizontalDesktop: Fa,
  // Card spacing	
  CardSpacingPaddingMobile: Ra,
  CardSpacingPaddingDesktop: Ia,
  CardSpacingHeadingMargin: Ma,
  // Form spacing
  FormSpacingInputPadding: La,
  FormSpacingInputMinHeight: Ea,
  FormSpacingCheckboxSize: $a,
  FormSpacingCheckboxLabelPadding: Aa
}), []), sf = () => de(() => ({
  xl: ve,
  l: we,
  m: Se,
  s: Ce,
  xs: je
}), []), of = () => de(() => ({
  body: Ne,
  bodyLarge: Te,
  bodySmall: De,
  ledeText: Be,
  ledeTextSmall: Fe
}), []), lf = () => de(() => ({
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
        size19: Lt,
        size22: At,
        size26: zt,
        size36: Ut,
        size48: Vt
      },
      tablet: {
        size14: Bt,
        size16: It,
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
}, me = {
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
  src: url("${t}${me.normal.eot}?#iefix") format("eot"),
       url("${t}${me.normal.woff2}") format("woff2"),
       url("${t}${me.normal.woff}") format("woff"),
       url("${t}${me.normal.ttf}") format("truetype");
  src: url("${t}${me.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${me.bold.eot}?#iefix") format("eot"),
       url("${t}${me.bold.woff2}") format("woff2"),
       url("${t}${me.bold.woff}") format("woff"),
       url("${t}${me.bold.ttf}") format("truetype");
  src: url("${t}${me.bold.eot}");
}`), a.join(`
`);
}
function df(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...Ka, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${me.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${me.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${me.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${me.bold.woff}`, as: "font", type: "font/woff" }
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
  ge as Button,
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
  Rd as CardBorderWidthBottom,
  Fd as CardBorderWidthDefault,
  jh as CardGroup,
  Nh as CardGroupItem,
  Id as CardShadowDefault,
  Md as CardShadowHover,
  Ma as CardSpacingHeadingMargin,
  Ia as CardSpacingPaddingDesktop,
  Ra as CardSpacingPaddingMobile,
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
  me as FRUTIGER_FONT_FILES,
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
  Rt as FontSize16Mobile,
  Mt as FontSize16Print,
  It as FontSize16Tablet,
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
  Le as Heading,
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
  Li as Panel,
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
  Lu as StateSuccessBorder,
  Eu as StateSuccessText,
  $u as StateWarningBackground,
  Au as StateWarningBorder,
  Hu as StateWarningText,
  zi as SummaryCard,
  Bh as SummaryList,
  Fh as Table,
  Rh as Tabs,
  Me as Tag,
  Hi as TaskList,
  us as Textarea,
  zh as TransactionalPageTemplate,
  Rl as TransitionButtonDefault,
  Il as TransitionButtonShadow,
  Ll as TransitionCardHover,
  Ml as TransitionInputFocus,
  il as VitalsCard,
  gh as WIDTH_FRACTIONS,
  Ih as WarningCallout,
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
