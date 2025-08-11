import * as Ea from "react";
import be, { useState as ne, useEffect as le, useCallback as X, createElement as Sr, useRef as se, useMemo as ie, createContext as za, useContext as Pa, forwardRef as qe, useImperativeHandle as wr, useReducer as Aa } from "react";
function Wa(e) {
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
var Vn;
function Oa() {
  if (Vn) return Je;
  Vn = 1;
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
var qn;
function Ua() {
  return qn || (qn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === p ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case g:
          return "Fragment";
        case w:
          return "Profiler";
        case S:
          return "StrictMode";
        case I:
          return "Suspense";
        case k:
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
          case N:
            return (j._context.displayName || "Context") + ".Consumer";
          case v:
            var O = j.render;
            return j = j.displayName, j || (j = O.displayName || O.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case M:
            return O = j.displayName || null, O !== null ? O : e(j.type) || "Memo";
          case D:
            O = j._payload, j = j._init;
            try {
              return e(j(O));
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
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var E = O.error, G = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return E.call(
          O,
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
        var O = e(j);
        return O ? "<" + O + ">" : "<...>";
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
        var O = Object.getOwnPropertyDescriptor(j, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function l(j, O) {
      function E() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: E,
        configurable: !0
      });
    }
    function c() {
      var j = e(this.type);
      return W[j] || (W[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function d(j, O, E, G, P, _, b, L) {
      return E = _.ref, j = {
        $$typeof: x,
        type: j,
        key: O,
        props: _,
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
    function u(j, O, E, G, P, _, b, L) {
      var Y = O.children;
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
      if (R.call(O, "key")) {
        Y = e(j);
        var B = Object.keys(O).filter(function(z) {
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
      if (Y = null, E !== void 0 && (r(E), Y = "" + E), i(O) && (r(O.key), Y = "" + O.key), "key" in O) {
        E = {};
        for (var $ in O)
          $ !== "key" && (E[$] = O[$]);
      } else E = O;
      return Y && l(
        E,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), d(
        j,
        Y,
        _,
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
    var m = be, x = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), F = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), p = Symbol.for("react.client.reference"), h = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = Object.prototype.hasOwnProperty, K = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(j) {
        return j();
      }
    };
    var H, W = {}, J = m.react_stack_bottom_frame.bind(
      m,
      s
    )(), Q = q(a(s)), Z = {};
    Xe.Fragment = g, Xe.jsx = function(j, O, E, G, P) {
      var _ = 1e4 > h.recentlyCreatedOwnerStacks++;
      return u(
        j,
        O,
        E,
        !1,
        G,
        P,
        _ ? Error("react-stack-top-frame") : J,
        _ ? q(a(j)) : Q
      );
    }, Xe.jsxs = function(j, O, E, G, P) {
      var _ = 1e4 > h.recentlyCreatedOwnerStacks++;
      return u(
        j,
        O,
        E,
        !0,
        G,
        P,
        _ ? Error("react-stack-top-frame") : J,
        _ ? q(a(j)) : Q
      );
    };
  }()), Xe;
}
var Kn;
function Ya() {
  return Kn || (Kn = 1, process.env.NODE_ENV === "production" ? it.exports = Oa() : it.exports = Ua()), it.exports;
}
var n = Ya(), Kt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Zn;
function Ga() {
  return Zn || (Zn = 1, function(e) {
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
  }(Kt)), Kt.exports;
}
var Va = Ga();
const A = /* @__PURE__ */ Wa(Va), Bd = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = A(
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
}, Dn = ({
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
      className: A(
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
          className: A("nhsuk-account__item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
}, { forwardRef: qa, useCallback: $e, useState: Zt } = Ea;
function Ka(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [d, u] = Zt(!1), [f, m] = Zt(!1), [x, C] = Zt(!1), g = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    o !== "default" ? `nhs-aria-button--${o}` : "",
    s ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), S = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", w = {
    ...d && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...x && { "data-focused": "true" },
    ...S && { "data-disabled": "true" }
  }, N = $e(() => !S && u(!0), [S]), F = $e(() => u(!1), []), v = $e(() => !S && m(!0), [S]), I = $e(() => {
    m(!1), u(!1);
  }, []), k = $e(() => C(!0), []), M = $e(() => C(!1), []), D = $e((h) => {
    h.key === " " && ("href" in c || h.currentTarget.getAttribute("role") === "button") && (h.preventDefault(), h.currentTarget.click());
  }, [c]), y = $e((h) => {
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
          h.onKeyDown?.(R), D(R);
        },
        onClick: (R) => {
          h.onClick?.(R), y(R);
        },
        onMouseDown: (R) => {
          h.onMouseDown?.(R), N();
        },
        onMouseUp: (R) => {
          h.onMouseUp?.(R), F();
        },
        onMouseEnter: (R) => {
          h.onMouseEnter?.(R), v();
        },
        onMouseLeave: (R) => {
          h.onMouseLeave?.(R), I();
        },
        onFocus: (R) => {
          h.onFocus?.(R), k();
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
        p.onKeyDown?.(h), D(h);
      },
      onClick: (h) => {
        p.onClick?.(h), y(h);
      },
      onMouseDown: (h) => {
        p.onMouseDown?.(h), N();
      },
      onMouseUp: (h) => {
        p.onMouseUp?.(h), F();
      },
      onMouseEnter: (h) => {
        p.onMouseEnter?.(h), v();
      },
      onMouseLeave: (h) => {
        p.onMouseLeave?.(h), I();
      },
      onFocus: (h) => {
        p.onFocus?.(h), k();
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
const Mn = qa(Ka);
Mn.displayName = "Button";
const Za = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = A(
    "nhsuk-back-link",
    a
  ), c = A(
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
}, Rn = ({
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
  const u = A(
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
}, Ja = ({
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
  onBlur: f,
  onFocus: m,
  attributes: x,
  ...C
}) => {
  const [g, S] = ne(a), w = r !== void 0, N = w ? r : g;
  le(() => {
    w || S(a);
  }, [a, w]);
  const F = (D) => {
    const y = D.target.checked;
    w || S(y), u?.(y, D);
  }, v = i ? `${e}-hint` : void 0, I = l ? `${e}-error` : void 0, k = [v, I].filter(Boolean).join(" ") || void 0, M = A(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ n.jsx("div", { className: M, ...C, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: N,
        disabled: o,
        onChange: F,
        onBlur: f,
        onFocus: m,
        "aria-describedby": k,
        ...x
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: d }),
    i && /* @__PURE__ */ n.jsx("div", { id: v, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: I, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
Ja.displayName = "Checkbox";
const In = ({
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
  minLength: S,
  pattern: w,
  step: N,
  min: F,
  max: v,
  showValueLabels: I = !1,
  showCurrentValue: k = !1,
  valueLabels: M,
  onChange: D,
  onBlur: y,
  onFocus: p,
  onKeyDown: h,
  ...R
}) => {
  const [K, q] = ne(a || o || (r === "range" ? F || "0" : ""));
  le(() => {
    a !== void 0 && q(a);
  }, [a]);
  const H = (Z) => {
    q(Z.target.value), D?.(Z);
  }, W = r === "range", J = A(
    "nhsuk-input",
    {
      "nhsuk-input--error": d,
      "nhsuk-input--range": W,
      [`nhsuk-input--width-${m}`]: m !== "full" && !W
    },
    f
  ), Q = W ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
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
          minLength: S,
          pattern: w,
          step: N,
          min: F,
          max: v,
          onChange: H,
          onBlur: y,
          onFocus: p,
          onKeyDown: h,
          ...R
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: M?.max || v || "100" })
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
        minLength: S,
        pattern: w,
        step: N,
        min: F,
        max: v,
        onChange: H,
        onBlur: y,
        onFocus: p,
        onKeyDown: h,
        ...R
      }
    ),
    k && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      M?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: K })
    ] }) })
  ] }) : null;
  return W ? Q : /* @__PURE__ */ n.jsx(
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
      minLength: S,
      pattern: w,
      step: N,
      min: F,
      max: v,
      onChange: D,
      onBlur: y,
      onFocus: p,
      onKeyDown: h,
      ...R
    }
  );
}, Ln = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = A(
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
}, $n = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = A(
    "nhsuk-fieldset",
    r
  ), i = A(
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
}, Xa = ({
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
  const [C, g] = ne(
    e.filter((D) => D.checked).map((D) => D.value)
  ), S = r || t, w = i ? `${S}-hint` : void 0, N = l ? `${S}-error` : void 0, F = [w, N].filter(Boolean).join(" ") || void 0, v = (D, y) => {
    let p;
    y ? p = [...C, D] : p = C.filter((h) => h !== D), g(p), u?.(p);
  }, I = () => e.map((D, y) => {
    const p = `${S}-${y + 1}`, h = `${p}-conditional`, R = C.includes(D.value), K = D.disabled || !1;
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
          onChange: (q) => v(D.value, q.target.checked),
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
          className: A("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !R
          }),
          id: h,
          children: typeof D.conditional == "object" && D.conditional !== null && "label" in D.conditional && "id" in D.conditional && "name" in D.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            D.conditional.label && /* @__PURE__ */ n.jsx(Ln, { htmlFor: D.conditional.id, children: D.conditional.label }),
            /* @__PURE__ */ n.jsx(In, { ...D.conditional })
          ] }) : D.conditional
        }
      )
    ] }, D.value);
  }), k = A(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": d
    },
    c
  ), M = A("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: M, ...m, ...x, children: /* @__PURE__ */ n.jsxs(
    $n,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: F,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: w, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: N, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: k, children: I() })
      ]
    }
  ) });
};
Xa.displayName = "Checkboxes";
const Qa = ({
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
  resize: S = "vertical",
  autoComplete: w,
  spellCheck: N,
  onChange: F,
  onBlur: v,
  onFocus: I,
  onKeyDown: k,
  ...M
}) => {
  const D = A(
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
      autoComplete: w,
      spellCheck: N,
      onChange: F,
      onBlur: v,
      onFocus: I,
      onKeyDown: k,
      ...M
    }
  );
}, Cr = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = A("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, id: e, ...a, children: r });
}, Fd = ({
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
  const [m, x] = ne(s), [C, g] = ne(0), [S, w] = ne(!1), [N, F] = ne(!1), v = X((p) => r ? p.trim() === "" ? 0 : p.trim().split(/\s+/).length : p.length, [r]);
  le(() => {
    const p = v(m), h = t || r || 0, R = h - p, K = Math.floor(h * (a / 100));
    g(R), w(p > h), F(p >= K || p > h), d && d(p, R);
  }, [m, t, r, a, v, d]);
  const I = (p) => {
    const h = p.target.value;
    x(h), u && u(p);
  }, k = () => {
    const p = t || r || 0, h = r ? "word" : "character", R = r ? "words" : "characters";
    if (!N)
      return `You can enter up to ${p} ${p === 1 ? h : R}`;
    if (S) {
      const K = Math.abs(C);
      return `You have ${K} ${K === 1 ? h : R} too many`;
    } else
      return `You have ${C} ${C === 1 ? h : R} remaining`;
  }, M = A(
    "nhsuk-character-count",
    l
  ), D = A(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !N,
      "nhsuk-error-message": S
    },
    c?.classes
  ), y = A(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": S
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
          Qa,
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
            children: k()
          }
        )
      ]
    }
  );
}, es = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  className: a,
  children: o,
  ...s
}) => {
  const i = A(
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
}, ts = ({
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
  children: x,
  onChange: C,
  onBlur: g,
  onFocus: S,
  ...w
}) => {
  const N = A(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    c
  ), F = () => m ? m.map((v, I) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: v.value,
      disabled: v.disabled,
      selected: v.selected,
      children: v.text
    },
    `${v.value}-${I}`
  )) : null;
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
      onChange: C,
      onBlur: g,
      onFocus: S,
      ...w,
      children: x || F()
    }
  );
}, ns = ts;
ns.Option = es;
const Dd = ({
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
  const [x, C] = ne(t || r || ""), g = A(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    s
  ), S = (w) => {
    const N = w.target.value;
    C(N), d && d(w);
  };
  return /* @__PURE__ */ n.jsx($n, { children: /* @__PURE__ */ n.jsx("div", { className: g, ...m, children: c.map((w, N) => {
    const F = `${e}-${N}`, v = w.conditional ? `${F}-conditional` : void 0, I = x === w.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: F,
          name: e,
          type: "radio",
          value: w.value,
          disabled: w.disabled,
          checked: I,
          "aria-describedby": o,
          onChange: S,
          onBlur: u,
          onFocus: f
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: F, children: w.text }),
      w.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: w.hint }),
      w.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: A("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !I
          }),
          id: v,
          children: typeof w.conditional == "object" && w.conditional !== null && "label" in w.conditional && "id" in w.conditional && "name" in w.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            w.conditional.label && /* @__PURE__ */ n.jsx(Ln, { htmlFor: w.conditional.id, children: w.conditional.label }),
            /* @__PURE__ */ n.jsx(In, { ...w.conditional })
          ] }) : w.conditional
        }
      )
    ] }, w.value);
  }) }) });
}, jr = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...o
}) => {
  const s = A(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), i = a ? { maxWidth: a } : void 0;
  return /* @__PURE__ */ n.jsx("div", { className: s, style: i, ...o, children: e });
}, ht = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = A("nhsuk-grid-row", t);
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
  const d = A(
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
}, rs = ({
  children: e,
  className: t,
  ...r
}) => {
  const o = be.Children.toArray(e)[0], s = be.isValidElement(o) && (o.type === ht || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(jr, { className: t, ...r, children: s ? e : /* @__PURE__ */ n.jsx(ht, { children: e }) });
}, as = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), d = A(
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
}, ss = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = A("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, os = as;
os.Item = ss;
const Md = ({
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
}, Rd = {
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
}, Id = ({
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
}, Ld = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, $d = [
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
}, Re = ({
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
  })(s), u = A(
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
}, Jn = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...o
}) => {
  const s = A("nhsuk-error-message", t);
  return /* @__PURE__ */ n.jsxs("span", { className: s, id: e, ...o, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      r,
      " "
    ] }),
    a
  ] });
}, Hd = ({
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
  const d = A(
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
}, Ed = ({
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
  const [u, f] = ne(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [m, x] = ne({}), C = (H) => H % 4 === 0 && H % 100 !== 0 || H % 400 === 0, g = (H, W) => {
    const J = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return H === 2 && C(W) ? 29 : J[H - 1];
  }, S = (H, W, J) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Day must be a number";
    const Q = parseInt(H, 10);
    if (Q < 1 || Q > 31) return "Day must be between 1 and 31";
    if (W && J) {
      const Z = parseInt(W, 10), j = parseInt(J, 10);
      if (!isNaN(Z) && !isNaN(j) && Z >= 1 && Z <= 12) {
        const O = g(Z, j);
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
          ][Z - 1]} ${j} only has ${O} days`;
      }
    }
  }, w = (H) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Month must be a number";
    const W = parseInt(H, 10);
    if (W < 1 || W > 12) return "Month must be between 1 and 12";
  }, N = (H) => {
    if (!H) return;
    if (!/^\d+$/.test(H)) return "Year must be a number";
    const W = parseInt(H, 10), J = (/* @__PURE__ */ new Date()).getFullYear();
    if (W < 1900 || W > J + 10)
      return `Year must be between 1900 and ${J + 10}`;
  }, F = (H, W, J) => {
    if (!H || !W || !J) return;
    const Q = parseInt(H, 10), Z = parseInt(W, 10), j = parseInt(J, 10);
    if (isNaN(Q) || isNaN(Z) || isNaN(j) || Z < 1 || Z > 12 || j < 1900) return;
    const O = g(Z, j);
    Q < 1 || Q > O;
  }, v = X((H, W) => {
    const J = {
      ...u,
      [H]: W
    };
    f(J), c && c(J);
  }, [u, c]), I = X((H) => {
    const W = u[H];
    let J;
    if (H === "day")
      J = S(W, u.month, u.year);
    else if (H === "month") {
      if (J = w(W), !J && u.day) {
        const Q = S(u.day, W, u.year);
        x((Z) => ({
          ...Z,
          day: Q
        }));
      }
    } else if (H === "year" && (J = N(W), !J && u.day && u.month)) {
      const Q = S(u.day, u.month, W);
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
        H === "day" ? W : u.day,
        H === "month" ? W : u.month,
        H === "year" ? W : u.year
      );
      Q && x((Z) => ({
        ...Z,
        day: Q
      }));
    }
  }, [u, S, w, N, F]), k = ie(() => [
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
  ], []), M = r || k;
  let D = s?.describedBy || "";
  const y = i ? `${e}-hint` : "", p = l ? `${e}-error` : "";
  y && (D = D ? `${D} ${y}` : y), p && (D = D ? `${D} ${p}` : p);
  const h = Object.values(m).some((H) => H), R = A(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || h
    }
  ), K = A(
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
      Jn,
      {
        id: p,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([H, W]) => W ? /* @__PURE__ */ n.jsxs(
        Jn,
        {
          id: `${e}-${H}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            W
          ]
        },
        `${H}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: K, id: e, "data-testid": "date-input", ...d, children: M.map((H) => {
      const W = H.id || `${e}-${H.name}`, J = a ? `${a}[${H.name}]` : H.name, Q = H.label || H.name.charAt(0).toUpperCase() + H.name.slice(1), Z = m[H.name], j = u[H.name] || "";
      let O = D;
      if (Z) {
        const E = `${e}-${H.name}-error`;
        O = O ? `${O} ${E}` : E;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          Ln,
          {
            htmlFor: W,
            className: "nhsuk-date-input__label",
            children: Q
          }
        ),
        /* @__PURE__ */ n.jsx(
          In,
          {
            id: W,
            name: J,
            value: j,
            className: A("nhsuk-date-input__input", H.classes, {
              "nhsuk-input--error": Z
            }),
            inputMode: H.inputmode,
            autoComplete: H.autocomplete,
            pattern: H.pattern,
            "aria-describedby": O || void 0,
            hasError: !!Z,
            onChange: (E) => v(H.name, E.target.value),
            onBlur: () => I(H.name)
          }
        )
      ] }, H.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: R, children: s ? /* @__PURE__ */ n.jsx(
    $n,
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
}, Br = za(Tr), is = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Tr, ...t };
  return /* @__PURE__ */ n.jsx(Br.Provider, { value: r, children: e });
}, zd = () => {
  const e = Pa(Br);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function ls() {
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
function cs() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = ls(), document.head.appendChild(e);
}
const Pd = ({ children: e, theme: t }) => (le(() => {
  cs();
}, []), /* @__PURE__ */ n.jsx(is, { theme: t, children: e })), Fr = ({
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
  buttonAttributes: S = {},
  preventDefaultSubmit: w = !1,
  debounceMs: N = 300,
  minQueryLength: F = 1
}) => {
  const [v, I] = ne(""), [k, M] = ne(!1), D = se(void 0), y = se(null), p = se(null), h = e === "controlled" && o !== void 0, R = h ? o : v, K = X((G) => {
    D.current && clearTimeout(D.current), D.current = setTimeout(() => {
      u.onChange && G.length >= F && u.onChange(G);
    }, N);
  }, [u.onChange, N, F]), q = X((G) => {
    const P = G.target.value;
    h || I(P), e !== "form" && K(P);
  }, [h, e, K]), H = X((G) => {
    const P = R.trim(), _ = {
      query: P,
      timestamp: Date.now(),
      formData: new FormData(G.currentTarget)
    };
    e === "controlled" || e === "hybrid" && w ? (G.preventDefault(), u.onSearch && P.length >= F && u.onSearch(_)) : e === "hybrid" && u.onSearch && P.length >= F && u.onSearch(_);
  }, [e, R, u.onSearch, w, F]), W = X(() => {
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
      className: A("nhsuk-icon nhsuk-icon__search", {
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
  ), O = () => !R || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: Q,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), E = () => !m || !x.length || !k ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: x.map((G) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: G.href ? /* @__PURE__ */ n.jsxs("a", { href: G.href, className: "nhsuk-header__search-result-link", children: [
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
  return /* @__PURE__ */ n.jsxs("search", { className: A("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": k,
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
                onFocus: W,
                onBlur: J,
                disabled: d || f,
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
              disabled: d || f || e !== "form" && R.length < F,
              ...S,
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
}, Dr = ({
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
  const [f, m] = ne(!1), [x, C] = ne(!1), [g, S] = ne(i?.items?.length || 0), [w, N] = ne(!1), [F, v] = ne(!1), [I, k] = ne(!1), M = se(null), D = se(null), y = se(!1), p = se(null), h = se([]), R = se(null);
  le(() => {
    typeof window > "u" || (k(!0), N(!0));
  }, []), le(() => {
    if (!I || !i?.items?.length) return;
    h.current = i.items;
    const b = setTimeout(() => {
      M.current && D.current && Q();
    }, 100);
    return () => clearTimeout(b);
  }, [I, i?.items]);
  const K = r.href && !t.href || r.href && r.href === t.href, q = K ? r.href : t.href, H = A(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), W = A(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), J = A(
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
        const $ = window.innerWidth < 768, z = $ ? 16 : 32, T = z * 2, te = Y - T, V = Array.from(B).map((ae) => ae.offsetWidth), U = V.reduce((ae, de) => ae + de, 0), ee = $ ? 80 : 100, oe = R.current !== null && R.current !== $;
        if (R.current = $, console.log("Overflow check:", {
          containerWidth: Y,
          availableContainerWidth: te,
          totalGutters: T,
          gutterSize: z,
          totalWidth: U,
          mobile: $,
          breakpointChanged: oe,
          itemCount: V.length,
          measurements: V
        }), U <= te)
          C(!1), S(h.current.length);
        else {
          const ae = te - ee;
          let de = 0, xe = 0;
          for (let pe = 0; pe < V.length; pe++) {
            const ke = xe + V[pe];
            if (ke <= ae)
              xe = ke, de = pe + 1;
            else
              break;
          }
          de = Math.max(1, de);
          const Ke = de < V.length;
          C(Ke), S(de);
        }
        y.current = !1;
      } catch (b) {
        console.error("Overflow detection error:", b), C(!1), S(h.current.length), y.current = !1;
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
      f && (m(!1), v(!1)), p.current && clearTimeout(p.current), p.current = setTimeout(() => {
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
      v(!0);
    }, 50) : v(!1);
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
  ), O = () => t.src ? /* @__PURE__ */ n.jsx(
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
  ), _ = (b) => {
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
        /* @__PURE__ */ n.jsxs("div", { className: W, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            q ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: q, children: [
              O(),
              E(),
              K && G(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              O(),
              E(),
              K && G(r.text)
            ] }),
            r.text && !K && G(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx(Fr, { ...o }),
          /* @__PURE__ */ n.jsx(
            Dn,
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
                className: A(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !w && I,
                    "nhsuk-header__navigation-container--ssr": !I
                  },
                  l
                ),
                ref: D,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: M, children: [
                  (I ? i.items.slice(0, g) : i.items).map((b, L) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: A(
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
                          children: _(b)
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
                className: A(
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
                      m(!1), v(!1);
                    },
                    children: _(b)
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
}, Ad = ({
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
  const f = r.href && !t.href || r.href && r.href === t.href, m = f ? r.href : t.href, x = A(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), C = A(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), g = A(
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
  ), w = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : S(), N = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, F = (k, M) => k ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: k }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: k }) : null, v = () => !i?.items || i.items.length === 0 ? null : i.items.map((k, M) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: k.href,
          ...k.attributes || {},
          children: k.text
        }
      )
    },
    k.href || M
  )), I = () => o ? /* @__PURE__ */ n.jsx(Fr, { ...o }) : null;
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
              w(),
              N(),
              f && F(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              w(),
              N(),
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
            Dn,
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
                children: v()
              }
            ) })
          }
        )
      ]
    }
  );
}, Wd = ({
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
  const m = r.href && !t.href || r.href && r.href === t.href, x = m ? r.href : t.href, C = A(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), g = A(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), S = A(
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
  ), N = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
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
  ] }) : null, v = (k, M) => k ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: k }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: k }) : null, I = (k) => {
    if (k.active || k.current) {
      const M = k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: M });
    }
    return k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text;
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
              N(),
              F(),
              m && v(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              N(),
              F(),
              m && v(r.text)
            ] }),
            r.text && !m && v(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            Dn,
            {
              ...s,
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
                className: A(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, u).map((k, M) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: A(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": k.active || k.current
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
                          children: I(k)
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(u).map((k, M) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: A(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": k.active || k.current
                          }
                        ),
                        children: /* @__PURE__ */ n.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: k.href,
                            ...k.active || k.current ? {
                              "aria-current": k.current ? "page" : "true"
                            } : {},
                            children: I(k)
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
}, us = ({
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
us.displayName = "Hero";
const Mr = ({
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
      className: A("nhsuk-footer__list-item", {
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
    /* @__PURE__ */ n.jsxs("div", { className: A("nhsuk-width-container", i), children: [
      /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ n.jsx("div", { className: A("nhsuk-footer", e), children: d ? (
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
function ds(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function En(e) {
  let t, r, a;
  e.length !== 2 ? (t = dt, r = (l, c) => dt(e(l), c), a = (l, c) => e(l) - c) : (t = e === dt || e === ds ? e : hs, r = e, a = e);
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
function hs() {
  return 0;
}
function fs(e) {
  return e === null ? NaN : +e;
}
const ms = En(dt), ps = ms.right;
En(fs).center;
const gs = Math.sqrt(50), xs = Math.sqrt(10), bs = Math.sqrt(2);
function Rr(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= gs ? 10 : s >= xs ? 5 : s >= bs ? 2 : 1;
  let l, c, d;
  return o < 0 ? (d = Math.pow(10, -o) / i, l = Math.round(e * d), c = Math.round(t * d), l / d < e && ++l, c / d > t && --c, d = -d) : (d = Math.pow(10, o) * i, l = Math.round(e / d), c = Math.round(t / d), l * d < e && ++l, c * d > t && --c), c < l && 0.5 <= r && r < 2 ? Rr(e, t, r * 2) : [l, c, d];
}
function Xn(e, t, r) {
  return t = +t, e = +e, r = +r, Rr(e, t, r)[2];
}
function Qn(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? Xn(t, e, r) : Xn(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function ys(e, t) {
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
function Ir(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function st() {
}
var nt = 0.7, ft = 1 / nt, Ye = "\\s*([+-]?\\d+)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ye = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ks = /^#([0-9a-f]{3,8})$/, _s = new RegExp(`^rgb\\(${Ye},${Ye},${Ye}\\)$`), vs = new RegExp(`^rgb\\(${ye},${ye},${ye}\\)$`), Ss = new RegExp(`^rgba\\(${Ye},${Ye},${Ye},${rt}\\)$`), ws = new RegExp(`^rgba\\(${ye},${ye},${ye},${rt}\\)$`), Cs = new RegExp(`^hsl\\(${rt},${ye},${ye}\\)$`), js = new RegExp(`^hsla\\(${rt},${ye},${ye},${rt}\\)$`), er = {
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
  hex: tr,
  // Deprecated! Use color.formatHex.
  formatHex: tr,
  formatHex8: Ns,
  formatHsl: Ts,
  formatRgb: nr,
  toString: nr
});
function tr() {
  return this.rgb().formatHex();
}
function Ns() {
  return this.rgb().formatHex8();
}
function Ts() {
  return Lr(this).formatHsl();
}
function nr() {
  return this.rgb().formatRgb();
}
function at(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = ks.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? rr(t) : r === 3 ? new fe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? lt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? lt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = _s.exec(e)) ? new fe(t[1], t[2], t[3], 1) : (t = vs.exec(e)) ? new fe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ss.exec(e)) ? lt(t[1], t[2], t[3], t[4]) : (t = ws.exec(e)) ? lt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Cs.exec(e)) ? or(t[1], t[2] / 100, t[3] / 100, 1) : (t = js.exec(e)) ? or(t[1], t[2] / 100, t[3] / 100, t[4]) : er.hasOwnProperty(e) ? rr(er[e]) : e === "transparent" ? new fe(NaN, NaN, NaN, 0) : null;
}
function rr(e) {
  return new fe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function lt(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new fe(e, t, r, a);
}
function Bs(e) {
  return e instanceof st || (e = at(e)), e ? (e = e.rgb(), new fe(e.r, e.g, e.b, e.opacity)) : new fe();
}
function sn(e, t, r, a) {
  return arguments.length === 1 ? Bs(e) : new fe(e, t, r, a ?? 1);
}
function fe(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
zn(fe, sn, Ir(st, {
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
    return new fe(Ee(this.r), Ee(this.g), Ee(this.b), mt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ar,
  // Deprecated! Use color.formatHex.
  formatHex: ar,
  formatHex8: Fs,
  formatRgb: sr,
  toString: sr
}));
function ar() {
  return `#${He(this.r)}${He(this.g)}${He(this.b)}`;
}
function Fs() {
  return `#${He(this.r)}${He(this.g)}${He(this.b)}${He((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function sr() {
  const e = mt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ee(this.r)}, ${Ee(this.g)}, ${Ee(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function mt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ee(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function He(e) {
  return e = Ee(e), (e < 16 ? "0" : "") + e.toString(16);
}
function or(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ge(e, t, r, a);
}
function Lr(e) {
  if (e instanceof ge) return new ge(e.h, e.s, e.l, e.opacity);
  if (e instanceof st || (e = at(e)), !e) return new ge();
  if (e instanceof ge) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new ge(i, l, c, e.opacity);
}
function Ds(e, t, r, a) {
  return arguments.length === 1 ? Lr(e) : new ge(e, t, r, a ?? 1);
}
function ge(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
zn(ge, Ds, Ir(st, {
  brighter(e) {
    return e = e == null ? ft : Math.pow(ft, e), new ge(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? nt : Math.pow(nt, e), new ge(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new fe(
      Jt(e >= 240 ? e - 240 : e + 120, o, a),
      Jt(e, o, a),
      Jt(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new ge(ir(this.h), ct(this.s), ct(this.l), mt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = mt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ir(this.h)}, ${ct(this.s) * 100}%, ${ct(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ir(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ct(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Jt(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Pn = (e) => () => e;
function Ms(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Rs(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function Is(e) {
  return (e = +e) == 1 ? $r : function(t, r) {
    return r - t ? Rs(t, r, e) : Pn(isNaN(t) ? r : t);
  };
}
function $r(e, t) {
  var r = t - e;
  return r ? Ms(e, r) : Pn(isNaN(e) ? t : e);
}
const lr = function e(t) {
  var r = Is(t);
  function a(o, s) {
    var i = r((o = sn(o)).r, (s = sn(s)).r), l = r(o.g, s.g), c = r(o.b, s.b), d = $r(o.opacity, s.opacity);
    return function(u) {
      return o.r = i(u), o.g = l(u), o.b = c(u), o.opacity = d(u), o + "";
    };
  }
  return a.gamma = e, a;
}(1);
function Ls(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function $s(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Hs(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = An(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Es(e, t) {
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
function zs(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = An(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var on = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xt = new RegExp(on.source, "g");
function Ps(e) {
  return function() {
    return e;
  };
}
function As(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ws(e, t) {
  var r = on.lastIndex = Xt.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = on.exec(e)) && (o = Xt.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: pt(a, o) })), r = Xt.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? As(c[0].x) : Ps(t) : (t = c.length, function(d) {
    for (var u = 0, f; u < t; ++u) l[(f = c[u]).i] = f.x(d);
    return l.join("");
  });
}
function An(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? Pn(t) : (r === "number" ? pt : r === "string" ? (a = at(t)) ? (t = a, lr) : Ws : t instanceof at ? lr : t instanceof Date ? Es : $s(t) ? Ls : Array.isArray(t) ? Hs : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? zs : pt)(e, t);
}
function Os(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Us(e) {
  return function() {
    return e;
  };
}
function Ys(e) {
  return +e;
}
var cr = [0, 1];
function Oe(e) {
  return e;
}
function ln(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Us(isNaN(t) ? NaN : 0.5);
}
function Gs(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Vs(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = ln(o, a), s = r(i, s)) : (a = ln(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function qs(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = ln(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = ps(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function Ks(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Zs() {
  var e = cr, t = cr, r = An, a, o, s, i = Oe, l, c, d;
  function u() {
    var m = Math.min(e.length, t.length);
    return i !== Oe && (i = Gs(e[0], e[m - 1])), l = m > 2 ? qs : Vs, c = d = null, f;
  }
  function f(m) {
    return m == null || isNaN(m = +m) ? s : (c || (c = l(e.map(a), t, r)))(a(i(m)));
  }
  return f.invert = function(m) {
    return i(o((d || (d = l(t, e.map(a), pt)))(m)));
  }, f.domain = function(m) {
    return arguments.length ? (e = Array.from(m, Ys), u()) : e.slice();
  }, f.range = function(m) {
    return arguments.length ? (t = Array.from(m), u()) : t.slice();
  }, f.rangeRound = function(m) {
    return t = Array.from(m), r = Os, u();
  }, f.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : Oe, u()) : i !== Oe;
  }, f.interpolate = function(m) {
    return arguments.length ? (r = m, u()) : r;
  }, f.unknown = function(m) {
    return arguments.length ? (s = m, f) : s;
  }, function(m, x) {
    return a = m, o = x, u();
  };
}
function Js() {
  return Zs()(Oe, Oe);
}
function Xs(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const Qt = /* @__PURE__ */ new Date(), en = /* @__PURE__ */ new Date();
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
  }), r && (o.count = (s, i) => (Qt.setTime(+s), en.setTime(+i), e(Qt), e(en), Math.floor(r(Qt, en))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
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
const De = 1e3, me = De * 60, Me = me * 60, Ie = Me * 24, Wn = Ie * 7, ur = Ie * 30, tn = Ie * 365, Ue = ce((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * De);
}, (e, t) => (t - e) / De, (e) => e.getUTCSeconds());
Ue.range;
const On = ce((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * De);
}, (e, t) => {
  e.setTime(+e + t * me);
}, (e, t) => (t - e) / me, (e) => e.getMinutes());
On.range;
const Qs = ce((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * me);
}, (e, t) => (t - e) / me, (e) => e.getUTCMinutes());
Qs.range;
const Un = ce((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * De - e.getMinutes() * me);
}, (e, t) => {
  e.setTime(+e + t * Me);
}, (e, t) => (t - e) / Me, (e) => e.getHours());
Un.range;
const eo = ce((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Me);
}, (e, t) => (t - e) / Me, (e) => e.getUTCHours());
eo.range;
const ot = ce(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * me) / Ie,
  (e) => e.getDate() - 1
);
ot.range;
const Yn = ce((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ie, (e) => e.getUTCDate() - 1);
Yn.range;
const to = ce((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ie, (e) => Math.floor(e / Ie));
to.range;
function Pe(e) {
  return ce((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * me) / Wn);
}
const Vt = Pe(0), xt = Pe(1), no = Pe(2), ro = Pe(3), Ge = Pe(4), ao = Pe(5), so = Pe(6);
Vt.range;
xt.range;
no.range;
ro.range;
Ge.range;
ao.range;
so.range;
function Ae(e) {
  return ce((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Wn);
}
const Hr = Ae(0), bt = Ae(1), oo = Ae(2), io = Ae(3), Ve = Ae(4), lo = Ae(5), co = Ae(6);
Hr.range;
bt.range;
oo.range;
io.range;
Ve.range;
lo.range;
co.range;
const Gn = ce((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Gn.range;
const uo = ce((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
uo.range;
const Le = ce((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Le.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ce((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Le.range;
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
function ho(e, t, r, a, o, s) {
  const i = [
    [Ue, 1, De],
    [Ue, 5, 5 * De],
    [Ue, 15, 15 * De],
    [Ue, 30, 30 * De],
    [s, 1, me],
    [s, 5, 5 * me],
    [s, 15, 15 * me],
    [s, 30, 30 * me],
    [o, 1, Me],
    [o, 3, 3 * Me],
    [o, 6, 6 * Me],
    [o, 12, 12 * Me],
    [a, 1, Ie],
    [a, 2, 2 * Ie],
    [r, 1, Wn],
    [t, 1, ur],
    [t, 3, 3 * ur],
    [e, 1, tn]
  ];
  function l(d, u, f) {
    const m = u < d;
    m && ([d, u] = [u, d]);
    const x = f && typeof f.range == "function" ? f : c(d, u, f), C = x ? x.range(d, +u + 1) : [];
    return m ? C.reverse() : C;
  }
  function c(d, u, f) {
    const m = Math.abs(u - d) / f, x = En(([, , S]) => S).right(i, m);
    if (x === i.length) return e.every(Qn(d / tn, u / tn, f));
    if (x === 0) return gt.every(Math.max(Qn(d, u, f), 1));
    const [C, g] = i[m / i[x - 1][2] < i[x][2] / m ? x - 1 : x];
    return C.every(g);
  }
  return [l, c];
}
const [fo, mo] = ho(Le, Gn, Vt, ot, Un, On);
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
function po(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, d = et(o), u = tt(o), f = et(s), m = tt(s), x = et(i), C = tt(i), g = et(l), S = tt(l), w = et(c), N = tt(c), F = {
    a: J,
    A: Q,
    b: Z,
    B: j,
    c: null,
    d: gr,
    e: gr,
    f: Eo,
    g: qo,
    G: Zo,
    H: Lo,
    I: $o,
    j: Ho,
    L: Er,
    m: zo,
    M: Po,
    p: O,
    q: E,
    Q: yr,
    s: kr,
    S: Ao,
    u: Wo,
    U: Oo,
    V: Uo,
    w: Yo,
    W: Go,
    x: null,
    X: null,
    y: Vo,
    Y: Ko,
    Z: Jo,
    "%": br
  }, v = {
    a: G,
    A: P,
    b: _,
    B: b,
    c: null,
    d: xr,
    e: xr,
    f: ti,
    g: di,
    G: fi,
    H: Xo,
    I: Qo,
    j: ei,
    L: Pr,
    m: ni,
    M: ri,
    p: L,
    q: Y,
    Q: yr,
    s: kr,
    S: ai,
    u: si,
    U: oi,
    V: ii,
    w: li,
    W: ci,
    x: null,
    X: null,
    y: ui,
    Y: hi,
    Z: mi,
    "%": br
  }, I = {
    a: p,
    A: h,
    b: R,
    B: K,
    c: q,
    d: mr,
    e: mr,
    f: Do,
    g: fr,
    G: hr,
    H: pr,
    I: pr,
    j: No,
    L: Fo,
    m: jo,
    M: To,
    p: y,
    q: Co,
    Q: Ro,
    s: Io,
    S: Bo,
    u: ko,
    U: _o,
    V: vo,
    w: yo,
    W: So,
    x: H,
    X: W,
    y: fr,
    Y: hr,
    Z: wo,
    "%": Mo
  };
  F.x = k(r, F), F.X = k(a, F), F.c = k(t, F), v.x = k(r, v), v.X = k(a, v), v.c = k(t, v);
  function k(B, $) {
    return function(z) {
      var T = [], te = -1, V = 0, U = B.length, ee, oe, ae;
      for (z instanceof Date || (z = /* @__PURE__ */ new Date(+z)); ++te < U; )
        B.charCodeAt(te) === 37 && (T.push(B.slice(V, te)), (oe = dr[ee = B.charAt(++te)]) != null ? ee = B.charAt(++te) : oe = ee === "e" ? " " : "0", (ae = $[ee]) && (ee = ae(z, oe)), T.push(ee), V = te + 1);
      return T.push(B.slice(V, te)), T.join("");
    };
  }
  function M(B, $) {
    return function(z) {
      var T = Qe(1900, void 0, 1), te = D(T, B, z += "", 0), V, U;
      if (te != z.length) return null;
      if ("Q" in T) return new Date(T.Q);
      if ("s" in T) return new Date(T.s * 1e3 + ("L" in T ? T.L : 0));
      if ($ && !("Z" in T) && (T.Z = 0), "p" in T && (T.H = T.H % 12 + T.p * 12), T.m === void 0 && (T.m = "q" in T ? T.q : 0), "V" in T) {
        if (T.V < 1 || T.V > 53) return null;
        "w" in T || (T.w = 1), "Z" in T ? (V = rn(Qe(T.y, 0, 1)), U = V.getUTCDay(), V = U > 4 || U === 0 ? bt.ceil(V) : bt(V), V = Yn.offset(V, (T.V - 1) * 7), T.y = V.getUTCFullYear(), T.m = V.getUTCMonth(), T.d = V.getUTCDate() + (T.w + 6) % 7) : (V = nn(Qe(T.y, 0, 1)), U = V.getDay(), V = U > 4 || U === 0 ? xt.ceil(V) : xt(V), V = ot.offset(V, (T.V - 1) * 7), T.y = V.getFullYear(), T.m = V.getMonth(), T.d = V.getDate() + (T.w + 6) % 7);
      } else ("W" in T || "U" in T) && ("w" in T || (T.w = "u" in T ? T.u % 7 : "W" in T ? 1 : 0), U = "Z" in T ? rn(Qe(T.y, 0, 1)).getUTCDay() : nn(Qe(T.y, 0, 1)).getDay(), T.m = 0, T.d = "W" in T ? (T.w + 6) % 7 + T.W * 7 - (U + 5) % 7 : T.w + T.U * 7 - (U + 6) % 7);
      return "Z" in T ? (T.H += T.Z / 100 | 0, T.M += T.Z % 100, rn(T)) : nn(T);
    };
  }
  function D(B, $, z, T) {
    for (var te = 0, V = $.length, U = z.length, ee, oe; te < V; ) {
      if (T >= U) return -1;
      if (ee = $.charCodeAt(te++), ee === 37) {
        if (ee = $.charAt(te++), oe = I[ee in dr ? $.charAt(te++) : ee], !oe || (T = oe(B, z, T)) < 0) return -1;
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
    var T = w.exec($.slice(z));
    return T ? (B.m = N.get(T[0].toLowerCase()), z + T[0].length) : -1;
  }
  function K(B, $, z) {
    var T = g.exec($.slice(z));
    return T ? (B.m = S.get(T[0].toLowerCase()), z + T[0].length) : -1;
  }
  function q(B, $, z) {
    return D(B, t, $, z);
  }
  function H(B, $, z) {
    return D(B, r, $, z);
  }
  function W(B, $, z) {
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
  function O(B) {
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
  function _(B) {
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
      var $ = k(B += "", F);
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
      var $ = k(B += "", v);
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
var dr = { "-": "", _: " ", 0: "0" }, ue = /^\s*\d+/, go = /^%/, xo = /[\\^$*+?|[\]().{}]/g;
function re(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function bo(e) {
  return e.replace(xo, "\\$&");
}
function et(e) {
  return new RegExp("^(?:" + e.map(bo).join("|") + ")", "i");
}
function tt(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function yo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function ko(e, t, r) {
  var a = ue.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function _o(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function vo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function So(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function hr(e, t, r) {
  var a = ue.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function fr(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function wo(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Co(e, t, r) {
  var a = ue.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function jo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function mr(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function No(e, t, r) {
  var a = ue.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function pr(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function To(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Bo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Fo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function Do(e, t, r) {
  var a = ue.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Mo(e, t, r) {
  var a = go.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Ro(e, t, r) {
  var a = ue.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Io(e, t, r) {
  var a = ue.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function gr(e, t) {
  return re(e.getDate(), t, 2);
}
function Lo(e, t) {
  return re(e.getHours(), t, 2);
}
function $o(e, t) {
  return re(e.getHours() % 12 || 12, t, 2);
}
function Ho(e, t) {
  return re(1 + ot.count(Le(e), e), t, 3);
}
function Er(e, t) {
  return re(e.getMilliseconds(), t, 3);
}
function Eo(e, t) {
  return Er(e, t) + "000";
}
function zo(e, t) {
  return re(e.getMonth() + 1, t, 2);
}
function Po(e, t) {
  return re(e.getMinutes(), t, 2);
}
function Ao(e, t) {
  return re(e.getSeconds(), t, 2);
}
function Wo(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Oo(e, t) {
  return re(Vt.count(Le(e) - 1, e), t, 2);
}
function zr(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ge(e) : Ge.ceil(e);
}
function Uo(e, t) {
  return e = zr(e), re(Ge.count(Le(e), e) + (Le(e).getDay() === 4), t, 2);
}
function Yo(e) {
  return e.getDay();
}
function Go(e, t) {
  return re(xt.count(Le(e) - 1, e), t, 2);
}
function Vo(e, t) {
  return re(e.getFullYear() % 100, t, 2);
}
function qo(e, t) {
  return e = zr(e), re(e.getFullYear() % 100, t, 2);
}
function Ko(e, t) {
  return re(e.getFullYear() % 1e4, t, 4);
}
function Zo(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Ge(e) : Ge.ceil(e), re(e.getFullYear() % 1e4, t, 4);
}
function Jo(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + re(t / 60 | 0, "0", 2) + re(t % 60, "0", 2);
}
function xr(e, t) {
  return re(e.getUTCDate(), t, 2);
}
function Xo(e, t) {
  return re(e.getUTCHours(), t, 2);
}
function Qo(e, t) {
  return re(e.getUTCHours() % 12 || 12, t, 2);
}
function ei(e, t) {
  return re(1 + Yn.count(ze(e), e), t, 3);
}
function Pr(e, t) {
  return re(e.getUTCMilliseconds(), t, 3);
}
function ti(e, t) {
  return Pr(e, t) + "000";
}
function ni(e, t) {
  return re(e.getUTCMonth() + 1, t, 2);
}
function ri(e, t) {
  return re(e.getUTCMinutes(), t, 2);
}
function ai(e, t) {
  return re(e.getUTCSeconds(), t, 2);
}
function si(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function oi(e, t) {
  return re(Hr.count(ze(e) - 1, e), t, 2);
}
function Ar(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ve(e) : Ve.ceil(e);
}
function ii(e, t) {
  return e = Ar(e), re(Ve.count(ze(e), e) + (ze(e).getUTCDay() === 4), t, 2);
}
function li(e) {
  return e.getUTCDay();
}
function ci(e, t) {
  return re(bt.count(ze(e) - 1, e), t, 2);
}
function ui(e, t) {
  return re(e.getUTCFullYear() % 100, t, 2);
}
function di(e, t) {
  return e = Ar(e), re(e.getUTCFullYear() % 100, t, 2);
}
function hi(e, t) {
  return re(e.getUTCFullYear() % 1e4, t, 4);
}
function fi(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ve(e) : Ve.ceil(e), re(e.getUTCFullYear() % 1e4, t, 4);
}
function mi() {
  return "+0000";
}
function br() {
  return "%";
}
function yr(e) {
  return +e;
}
function kr(e) {
  return Math.floor(+e / 1e3);
}
var We, Wr;
pi({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function pi(e) {
  return We = po(e), Wr = We.format, We.parse, We.utcFormat, We.utcParse, We;
}
function gi(e) {
  return new Date(e);
}
function xi(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Or(e, t, r, a, o, s, i, l, c, d) {
  var u = Js(), f = u.invert, m = u.domain, x = d(".%L"), C = d(":%S"), g = d("%I:%M"), S = d("%I %p"), w = d("%a %d"), N = d("%b %d"), F = d("%B"), v = d("%Y");
  function I(k) {
    return (c(k) < k ? x : l(k) < k ? C : i(k) < k ? g : s(k) < k ? S : a(k) < k ? o(k) < k ? w : N : r(k) < k ? F : v)(k);
  }
  return u.invert = function(k) {
    return new Date(f(k));
  }, u.domain = function(k) {
    return arguments.length ? m(Array.from(k, xi)) : m().map(gi);
  }, u.ticks = function(k) {
    var M = m();
    return e(M[0], M[M.length - 1], k ?? 10);
  }, u.tickFormat = function(k, M) {
    return M == null ? I : d(M);
  }, u.nice = function(k) {
    var M = m();
    return (!k || typeof k.range != "function") && (k = t(M[0], M[M.length - 1], k ?? 10)), k ? m(Xs(M, k)) : u;
  }, u.copy = function() {
    return Ks(u, Or(e, t, r, a, o, s, i, l, c, d));
  }, u;
}
function bi() {
  return ys.apply(Or(fo, mo, Le, Gn, Vt, ot, Un, On, Ue, Wr).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function yi({
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
  const d = se(null), [u, f] = ne(!1), [m, x] = ne(!1), C = t(e.start), g = t(e.end), S = Math.max(g - C, 20), w = () => {
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
  }, N = e.progress ? S * e.progress / 100 : 0, F = () => {
    r?.(e);
  }, v = () => {
    a?.(e);
  }, I = (R) => {
    R.key === "Enter" ? (R.preventDefault(), F()) : R.key === " " && (R.preventDefault(), v());
  }, k = () => {
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
    "--task-width": `${S}px`,
    "--task-color": w(),
    left: `${C}px`,
    width: `${S}px`,
    backgroundColor: w()
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
      onDoubleClick: v,
      onKeyDown: I,
      onMouseDown: k,
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
            style: { width: `${N}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function ki({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let x = e.getTime(); x <= t.getTime(); x += 864e5)
    a.push(new Date(x));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = ne(-1), c = se(null), d = (x) => {
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
              const g = x.getTime() === s.getTime(), S = i === C;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": C,
                  className: `date-column ${g ? "today" : ""} ${S ? "focused" : ""}`,
                  tabIndex: S ? 0 : -1,
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
function _i({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = ne(!1), [d, u] = ne(-1), f = se(null);
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
        const S = Math.max(0, d - 1);
        u(S), f.current?.querySelector(`[data-task-index="${S}"]`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault();
        const N = Math.min(t.length - 1, d + 1);
        u(N), f.current?.querySelector(`[data-task-index="${N}"]`)?.focus();
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
            children: t.map((g, S) => /* @__PURE__ */ n.jsx(
              yi,
              {
                task: g,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && d === S,
                taskIndex: S,
                tabIndex: l && d === S ? 0 : -1,
                onFocus: () => C(S)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function Od({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = se(null), [l, c] = ne(800), d = ie(() => {
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
    const g = new ResizeObserver((S) => {
      const w = S[0];
      w && c(Math.max(w.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const m = ie(
    () => bi().domain([d, u]).range([0, l]),
    [d, u, l]
  ), x = ie(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((S) => {
      const w = g.get(S.resourceId) || [];
      w.push(S), g.set(S.resourceId, w);
    }), g;
  }, [t]), C = (g) => {
    if (g.target === g.currentTarget)
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault();
          const S = i.current?.querySelector(".gantt-row .resource-label");
          S && S.focus();
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
      onKeyDown: C,
      children: [
        /* @__PURE__ */ n.jsx(ki, { viewStart: d, viewEnd: u, dateCount: f }),
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
            children: e.map((g, S) => /* @__PURE__ */ n.jsx(
              _i,
              {
                resource: g,
                tasks: x.get(g.id) || [],
                scale: m,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: S,
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
) }), vi = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? be.Children.toArray(t).filter(
    (w) => be.isValidElement(w) && (w.type === yt || w.type?.displayName === "BreadcrumbItem")
  ).map((w) => ({
    text: typeof w.props.children == "string" ? w.props.children : String(w.props.children),
    href: w.props.href,
    active: w.props.active,
    attributes: w.props.attributes
  })) : [], d = () => t ? c() : o && s ? [{ href: o, text: s }] : e, u = () => {
    const S = d();
    if (S && S.length > 0) {
      const w = S.slice().reverse().find((N) => N.href && !N.active);
      if (w)
        return { href: w.href, text: w.text };
    }
    return { text: "Home" };
  }, f = d(), m = u(), x = A(
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
          be.Children.map(t, (S, w) => be.isValidElement(S) && (S.type === yt || S.type?.displayName === "BreadcrumbItem") ? be.cloneElement(S, { key: w }) : null)
        ) : (
          // Render from items array
          f?.map((S, w) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: S.active ? /* @__PURE__ */ n.jsx(
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
}, Si = vi;
Si.Item = yt;
yt.displayName = "BreadcrumbItem";
const Ur = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [o, s] = ne(!1);
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
  const i = A("nhsuk-skip-link", r);
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
}, Ud = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = A("nhsuk-pagination", o);
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
}, Yd = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = A("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, Gd = ({
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
  "aria-describedby": S
}) => {
  const w = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    u
  ].filter(Boolean).join(" "), N = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), F = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), v = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const M = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Re,
      {
        level: a,
        className: F,
        children: M()
      }
    );
  }, I = () => f || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null), k = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      "aria-label": C,
      "aria-labelledby": g,
      "aria-describedby": S,
      children: [
        c && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: d || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: N, children: [
          v(),
          I(),
          k()
        ] })
      ]
    }
  );
}, Vd = ({
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
}, qd = ({
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
}, Kd = ({
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
  ].filter(Boolean).join(" "), S = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const N = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], F = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        N,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Re,
      {
        level: a,
        className: g,
        children: F
      }
    );
  }, w = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
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
          S(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: w() })
      ]
    }
  );
}, wi = ({
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
  const d = A(
    "nhsuk-panel",
    t
  ), u = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Re,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Re,
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
}, Zd = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = A("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, Jd = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = A(
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
}, Xd = ({
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
  const C = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), g = A(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), S = A(f), w = (v, I) => {
    const k = A("nhsuk-table__header", {
      [`nhsuk-table__header--${v.format}`]: v.format
    }, v.classes), M = {
      scope: "col",
      ...v.colspan && { colSpan: v.colspan },
      ...v.rowspan && { rowSpan: v.rowspan },
      ...s && { role: "columnheader" },
      ...v.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: k, ...M, children: v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text }, I);
  }, N = (v, I, k) => {
    const M = o && k, D = A(
      M ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${M ? "header" : "cell"}--${v.format}`]: v.format
      },
      v.classes
    ), y = {
      ...M && { scope: "row" },
      ...v.colspan && { colSpan: v.colspan },
      ...v.rowspan && { rowSpan: v.rowspan },
      ...s && {
        role: M ? "rowheader" : "cell",
        ...v.header && { "data-label": v.header }
      },
      ...v.attributes
    }, p = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && v.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        v.header,
        " "
      ] }),
      v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text
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
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((v, I) => w(v, I)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((v, I) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: v.map(
              (k, M) => N(k, M, M === 0)
            )
          },
          I
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(wi, { className: d, children: [
    i && /* @__PURE__ */ n.jsx(Re, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    F()
  ] }) : S ? /* @__PURE__ */ n.jsx("div", { className: S, children: F() }) : F();
}, Qd = qe(({
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
  const x = r !== void 0, [C, g] = ne(() => t || e[0]?.id || ""), S = x ? r : C, w = se(null), N = se(/* @__PURE__ */ new Map()), F = X((p) => {
    x || g(p), a?.(p);
  }, [x, a]), v = X((p) => {
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
      const H = R[q], W = N.current.get(H);
      W && (W.focus(), v(H));
    }
  }, [e, v, i]), k = X((p, h) => {
    h ? N.current.set(p, h) : N.current.delete(p);
  }, []), M = X((p) => {
    const h = N.current.get(p);
    h && h.focus();
  }, []);
  wr(m, () => ({
    focusTab: M,
    getActiveTab: () => S,
    getTabListElement: () => w.current
  }), [M, S]);
  const D = X((p) => {
    const h = p.relatedTarget;
    w.current?.contains(h) || s?.();
  }, [s]), y = A("nhsuk-tabs", c);
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
            ref: w,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: D,
                children: e.map((p) => {
                  const h = p.id === S, R = p.disabled, K = A("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": h,
                    "nhsuk-tabs__list-item--disabled": R
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: K, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (q) => k(p.id, q),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": h,
                      "aria-controls": `${p.id}-panel`,
                      id: `${p.id}-tab`,
                      tabIndex: h ? 0 : -1,
                      disabled: R,
                      onClick: () => !R && F(p.id),
                      onKeyDown: (q) => !R && I(q, p.id),
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
          const h = p.id === S;
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
}), Ci = qe(
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
Ci.displayName = "Details";
const ji = qe(
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
      Re,
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
ji.displayName = "DoDontList";
const Ni = qe(
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
Ni.displayName = "Expander";
const Ti = qe(
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
        Bi,
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
), Bi = ({
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
    return e.status.tag ? u = /* @__PURE__ */ n.jsx(Rn, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ n.jsx("div", { className: d, id: o, children: u });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
Ti.displayName = "TaskList";
const eh = ({
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
}, th = ({
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
}, Fi = ({
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
    /* @__PURE__ */ n.jsx(Re, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, nh = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(rs, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    Hn,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      children: /* @__PURE__ */ n.jsx(Fi, { ...o })
    },
    s
  )) }) });
}, Di = be.forwardRef(
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
    tableType: S = "default"
  }, w) => {
    const N = se(null), F = se(null), v = se(null);
    be.useImperativeHandle(w, () => N.current, []);
    const [I, k] = ne(0), [M, D] = ne(0), [y, p] = ne("headers"), [h, R] = ne("browse"), K = t.length, q = e.length, H = ie(() => !r || r.length === 0 ? e : [...e].sort((E, G) => {
      for (const { key: P, direction: _ } of r) {
        const b = E[P], L = G[P];
        if (b == null && L == null) continue;
        if (b == null) return 1;
        if (L == null) return -1;
        let Y = 0;
        if (typeof b == "number" && typeof L == "number" ? Y = b - L : Y = String(b).localeCompare(String(L)), Y !== 0)
          return _ === "asc" ? Y : -Y;
      }
      return 0;
    }), [e, r]), W = X((E, G) => {
      setTimeout(() => {
        const P = N.current?.querySelector(
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
        const G = N.current?.querySelector(`th:nth-child(${E + 1})`);
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
          } else y === "cells" && h === "browse" ? (R("navigate"), W(I, M)) : y === "cells" && h === "navigate" && Z(I);
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
              D(P), W(I, P);
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
              D(P), W(I, P);
            }
          }
          break;
        case "ArrowUp":
          if (E.preventDefault(), y === "cells") {
            if (h === "browse") {
              const P = Math.max(0, I - 1);
              k(P), W(P, 0), D(0);
            } else if (h === "navigate")
              if (I > 0) {
                const P = I - 1;
                k(P), W(P, M);
              } else
                p("headers"), R("browse"), J(M);
          }
          break;
        case "ArrowDown":
          if (E.preventDefault(), y === "headers" && h === "browse")
            p("cells"), k(0), D(0), W(0, 0);
          else if (y === "cells") {
            const P = q - 1;
            if (h === "browse") {
              const _ = Math.min(P, I + 1);
              k(_), W(_, 0), D(0);
            } else if (h === "navigate" && I < P) {
              const _ = I + 1;
              k(_), W(_, M);
            }
          }
          break;
        case "Home":
          E.preventDefault(), y === "headers" ? (D(0), J(0)) : y === "cells" && (E.ctrlKey ? (k(0), D(0), W(0, 0)) : (D(0), W(I, 0)));
          break;
        case "End":
          if (E.preventDefault(), y === "headers") {
            const P = K - 1;
            D(P), J(P);
          } else if (y === "cells")
            if (E.ctrlKey) {
              const P = q - 1, _ = K - 1;
              k(P), D(_), W(P, _);
            } else {
              const P = K - 1;
              D(P), W(I, P);
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
      W,
      J,
      Q,
      Z
    ]);
    le(() => {
      const E = N.current;
      if (E)
        return E.addEventListener("keydown", j), () => E.removeEventListener("keydown", j);
    }, [j]);
    const O = A(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": x,
        "nhsuk-table--striped": C,
        "nhsuk-table--compact": S === "compact"
      },
      f
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: N,
        className: O,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": d,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: F, role: "row", children: t.map((E, G) => {
            const P = r?.find((L) => L.key === E.key), _ = !!P, b = y === "headers" && M === G;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: A("sortable-header", {
                  "sortable-header--focused": b
                }),
                role: "columnheader",
                tabIndex: b ? 0 : -1,
                onClick: () => Q(E.key),
                onKeyDown: (L) => {
                  (L.key === "Enter" || L.key === " ") && (L.preventDefault(), Q(E.key));
                },
                "aria-sort": _ ? P?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: E.label }),
                  _ && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
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
          /* @__PURE__ */ n.jsx("tbody", { ref: v, className: "nhsuk-table__body", role: "rowgroup", children: H.map((E, G) => {
            const P = o === G, _ = y === "cells" && I === G;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: A("data-row", {
                  "data-row--selected": P,
                  "data-row--focused": _
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
                      className: A("data-cell", {
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
Di.displayName = "AriaDataGrid";
const Mi = ({
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
  }, [c]), S = X((y, p) => {
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
  }, [c, e, r]), w = X(() => {
    m.current = null, x.current = null;
  }, []), N = X((y) => {
    const p = t.find((h) => h.key === y);
    return p ? p.label : y;
  }, [t]), F = X((y) => ["red", "orange", "blue", "aqua-green", "grey"][y] || "grey", []), v = X((y) => {
    if (c) return;
    const p = e.map(
      (h) => h.key === y ? { ...h, direction: h.direction === "asc" ? "desc" : "asc" } : h
    );
    r(p);
  }, [e, r, c]), I = X((y) => {
    if (c) return;
    const p = e.filter((h) => h.key !== y);
    r(p);
  }, [e, r, c]), k = X(() => {
    c || r([]);
  }, [r, c]), M = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const y = e.map((p, h) => {
      const R = p.direction === "asc" ? "ascending" : "descending";
      return `${h + 1}. ${N(p.key)} (${R})`;
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
              onDrop: (h) => S(h, y.key),
              onDragEnd: w,
              onClick: () => v(y.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": y.key,
              children: /* @__PURE__ */ n.jsx(
                Rn,
                {
                  color: F(p),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => I(y.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${p + 1}`, children: p + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: N(y.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (h) => {
                          h.stopPropagation(), v(y.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${N(y.key)}. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
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
        Mn,
        {
          variant: "secondary",
          onClick: k,
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
function Ri(e, t) {
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
      error: S = null,
      errorComponent: w,
      "data-testid": N
    } = t, {
      dataComparator: F = (_, b) => JSON.stringify(_) === JSON.stringify(b),
      filterFunction: v = (_) => _,
      booleanRenderer: I = (_) => _ ? "✓" : "✗"
    } = a || {}, k = s !== void 0, M = s ?? 0, [D, y] = ne({
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
    }), [M]), [h, R] = Aa(Ri, p);
    le(() => {
      const _ = h.tabLoadingStates.length, b = o.length;
      _ !== b && R({ type: "ADJUST_ARRAYS", payload: { newLength: b } });
    }, [o.length]), le(() => {
      k && R({ type: "SET_SELECTED_INDEX", payload: M });
    }, [M, k]), le(() => {
      l && l(h.globalSelectedRowData);
    }, [h.globalSelectedRowData, l]);
    const K = X((_, b) => F(_, b), [F]), q = X((_) => {
      _ >= 0 && _ < o.length && !o[_].disabled && (R({ type: "SET_SELECTED_INDEX", payload: _ }), i?.(_));
    }, [o, i]), H = X((_, b) => {
      const { key: L } = _;
      switch (L) {
        case "ArrowLeft":
          _.preventDefault();
          const Y = b > 0 ? b - 1 : o.length - 1;
          q(Y), y((z) => ({ ...z, focusedTabIndex: Y })), W.current[Y]?.focus();
          break;
        case "ArrowRight":
          _.preventDefault();
          const B = b < o.length - 1 ? b + 1 : 0;
          q(B), y((z) => ({ ...z, focusedTabIndex: B })), W.current[B]?.focus();
          break;
        case "ArrowDown":
          _.preventDefault(), y((z) => ({
            ...z,
            focusArea: "headers",
            focusedHeaderIndex: 0
          })), Z(0);
          break;
        case "Home":
          _.preventDefault(), q(0), y((z) => ({ ...z, focusedTabIndex: 0 })), W.current[0]?.focus();
          break;
        case "End":
          _.preventDefault();
          const $ = o.length - 1;
          q($), y((z) => ({ ...z, focusedTabIndex: $ })), W.current[$]?.focus();
          break;
        case "Enter":
        case " ":
          _.preventDefault(), q(b);
          break;
      }
    }, [o.length, q]), W = se([]), J = se([]), Q = X((_, b) => {
      const L = h.sortConfig || [], Y = L.find((z) => z.key === b);
      let B;
      Y ? Y.direction === "asc" ? B = L.map(
        (z) => z.key === b ? { ...z, direction: "desc" } : z
      ) : B = L.filter((z) => z.key !== b) : B = [...L, { key: b, direction: "asc" }], R({
        type: "SET_SORT",
        payload: B
      }), o[_].onSort?.(b);
    }, [h.sortConfig, o]), Z = X((_) => {
      setTimeout(() => {
        const b = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] th:nth-child(${_ + 1})`
        );
        b && b.focus();
      }, 0);
    }, [h.selectedIndex]), j = X((_) => I(_), [I]), O = X((_, b) => {
      setTimeout(() => {
        const L = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] tbody tr:nth-child(${_ + 1}) td:nth-child(${b + 1})`
        );
        L && L.focus();
      }, 0);
    }, [h.selectedIndex]), E = X((_, b) => {
      const { key: L } = _, Y = o[h.selectedIndex], B = Y?.columns.length || 0;
      switch (L) {
        case "ArrowLeft":
          _.preventDefault();
          const $ = Math.max(0, b - 1);
          y((V) => ({ ...V, focusedHeaderIndex: $ })), Z($);
          break;
        case "ArrowRight":
          _.preventDefault();
          const z = Math.min(B - 1, b + 1);
          y((V) => ({ ...V, focusedHeaderIndex: z })), Z(z);
          break;
        case "ArrowUp":
          _.preventDefault(), y((V) => ({
            ...V,
            focusArea: "tabs",
            focusedTabIndex: h.selectedIndex
          })), W.current[h.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          _.preventDefault(), y((V) => ({
            ...V,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: b,
            isGridActive: !0
          })), O(0, b);
          break;
        case "Home":
          _.preventDefault(), y((V) => ({ ...V, focusedHeaderIndex: 0 })), Z(0);
          break;
        case "End":
          _.preventDefault();
          const T = B - 1;
          y((V) => ({ ...V, focusedHeaderIndex: T })), Z(T);
          break;
        case "Enter":
        case " ":
          _.preventDefault();
          const te = Y?.columns[b]?.key;
          te && Q(h.selectedIndex, te);
          break;
      }
    }, [o, h.selectedIndex, Q, y, Z, O, W]), G = X((_, b, L) => {
      const { key: Y } = _, B = o[h.selectedIndex], $ = B?.data.length || 0, z = B?.columns.length || 0;
      switch (Y) {
        case "ArrowUp":
          if (_.preventDefault(), b === 0)
            y((U) => ({
              ...U,
              focusArea: "headers",
              focusedHeaderIndex: L,
              isGridActive: !1
            })), Z(L);
          else {
            const U = b - 1;
            y((ee) => ({ ...ee, focusedRowIndex: U })), O(U, L);
          }
          break;
        case "ArrowDown":
          _.preventDefault();
          const T = Math.min($ - 1, b + 1);
          y((U) => ({ ...U, focusedRowIndex: T })), O(T, L);
          break;
        case "ArrowLeft":
          _.preventDefault();
          const te = Math.max(0, L - 1);
          y((U) => ({ ...U, focusedColumnIndex: te })), O(b, te);
          break;
        case "ArrowRight":
          _.preventDefault();
          const V = Math.min(z - 1, L + 1);
          y((U) => ({ ...U, focusedColumnIndex: V })), O(b, V);
          break;
        case "Home":
          _.preventDefault(), _.ctrlKey ? (y((U) => ({ ...U, focusedRowIndex: 0, focusedColumnIndex: 0 })), O(0, 0)) : (y((U) => ({ ...U, focusedColumnIndex: 0 })), O(b, 0));
          break;
        case "End":
          if (_.preventDefault(), _.ctrlKey) {
            const U = $ - 1, ee = z - 1;
            y((oe) => ({ ...oe, focusedRowIndex: U, focusedColumnIndex: ee })), O(U, ee);
          } else {
            const U = z - 1;
            y((ee) => ({ ...ee, focusedColumnIndex: U })), O(b, U);
          }
          break;
        case "Enter":
        case " ":
          if (_.preventDefault(), B && B.data[b]) {
            const U = B.data.some((ae) => "ews_data" in ae) ? v(B.data, h.filters) : B.data, ee = h.sortConfig;
            let oe = U;
            if (ee && ee.length > 0 && (oe = [...U].sort((ae, de) => {
              for (const { key: xe, direction: Ke } of ee) {
                let pe = ae[xe], ke = de[xe];
                const qt = B.columns.find((Ha) => Ha.key === xe);
                if (qt?.render && (pe = qt.render(ae), ke = qt.render(de)), pe == null && ke == null) continue;
                if (pe == null) return Ke === "asc" ? -1 : 1;
                if (ke == null) return Ke === "asc" ? 1 : -1;
                let Ze = 0;
                if (typeof pe == "number" && typeof ke == "number" ? Ze = pe - ke : Ze = String(pe).localeCompare(String(ke), void 0, { numeric: !0, sensitivity: "base" }), Ze !== 0)
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
    }, [o, h.selectedIndex, h.filters, h.sortConfig, v, K, R, y, Z, O]), P = X((_, b) => v(_, b), [v]);
    return wr(r, () => ({
      selectTab: (_) => {
        _ >= 0 && _ < o.length && (R({ type: "SET_SELECTED_INDEX", payload: _ }), i?.(_));
      },
      refreshData: (_) => {
        console.log("Refreshing data for tab:", _ ?? "all");
      },
      exportData: (_) => {
        const b = _ ?? h.selectedIndex, L = o[b];
        return L ? L.data : [];
      },
      getSelectedRows: (_) => h.globalSelectedRowData ? [] : [],
      clearSelection: (_) => {
        R({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (_) => {
        R({ type: "SET_FILTERS", payload: _ });
      }
    }), [h.selectedIndex, h.selectedRows, o, i]), C ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`, "data-testid": N, children: g || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : S ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`, "data-testid": N, children: w || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: S })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${u}`,
        id: x,
        "data-testid": N,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${x}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Mi,
            {
              sortConfig: h.sortConfig || [],
              columns: o.flatMap(
                (_) => _.columns.map((b) => ({ key: b.key, label: b.label }))
              ).filter(
                (_, b, L) => L.findIndex((Y) => Y.key === _.key) === b
                // Remove duplicates
              ),
              onSortChange: (_) => {
                R({ type: "SET_SORT", payload: _ });
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
              children: o.map((_, b) => {
                const L = b === h.selectedIndex, Y = _.disabled || f;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${_.id}`,
                    "aria-controls": `panel-${_.id}`,
                    "aria-selected": L,
                    "aria-disabled": Y,
                    tabIndex: L ? 0 : -1,
                    ref: (B) => {
                      W.current[b] = B;
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
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: _.label }),
                      h.tabLoadingStates[b] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      h.tabErrors[b] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  _.id
                );
              })
            }
          ),
          o.map((_, b) => {
            const L = b === h.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${_.id}`,
                "aria-labelledby": `tab-${_.id}`,
                tabIndex: 0,
                hidden: !L,
                ref: (Y) => {
                  J.current[b] = Y;
                },
                className: `aria-tabs-datagrid__panel ${_.className || ""}`,
                "data-tab-panel": b,
                children: L && (() => {
                  const Y = _.data.some(($) => "ews_data" in $) ? P(_.data, h.filters) : _.data, B = ie(() => {
                    const $ = h.sortConfig;
                    return !$ || $.length === 0 ? Y : [...Y].sort((z, T) => {
                      for (const { key: te, direction: V } of $) {
                        let U = z[te], ee = T[te];
                        const oe = _.columns.find((de) => de.key === te);
                        if (oe?.render && (U = oe.render(z), ee = oe.render(T)), U == null && ee == null) continue;
                        if (U == null) return 1;
                        if (ee == null) return -1;
                        let ae = 0;
                        if (typeof U == "number" && typeof ee == "number" ? ae = U - ee : typeof U == "boolean" && typeof ee == "boolean" ? ae = U === ee ? 0 : U ? 1 : -1 : ae = String(U).localeCompare(String(ee), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), ae !== 0)
                          return V === "asc" ? ae : -ae;
                      }
                      return 0;
                    });
                  }, [Y, h.sortConfig, _.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": _.ariaLabel,
                      "aria-describedby": _.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: _.columns.map(($, z) => {
                          const T = h.sortConfig?.find((U) => U.key === $.key), te = !!T, V = D.focusArea === "headers" && D.focusedHeaderIndex === z;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${V ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: V ? 0 : -1,
                              onClick: () => Q(b, $.key),
                              onKeyDown: (U) => E(U, z),
                              "aria-sort": te ? T?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: $.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${te ? `sort-indicator--${T?.direction}` : ""}`, children: [
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
                              children: _.columns.map((V, U) => {
                                const ee = V.render ? V.render($) : $[V.key], oe = D.focusArea === "cells" && D.focusedRowIndex === z && D.focusedColumnIndex === U, ae = () => typeof ee == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
                                    onKeyDown: (de) => G(de, z, U),
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
              _.id
            );
          })
        ]
      }
    );
  }
);
function Ii(e, t) {
  const [r, a] = ne("cards");
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
const rh = ({
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
  experimental: a = {},
  ...o
}) => {
  const s = Ii(e, t), {
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
          Li,
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
}, Li = ({
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
}, $i = (e) => [...e].sort((t, r) => t.priority - r.priority);
function an(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Hi(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Ei(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function zi(e, t) {
  const r = t.find((o) => o.id === e), a = Hi(t);
  return r ? r.priority < a : !1;
}
const ah = ({
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
  const u = ie(() => $i(e), [e]), f = X((N) => {
    if (l) return;
    const F = e.map(
      (v) => v.id === N ? { ...v, direction: v.direction === "asc" ? "desc" : "asc" } : v
    );
    t(F);
  }, [e, t, l]), m = X((N) => {
    if (l) return;
    const F = e.findIndex((I) => I.id === N);
    if (F <= 0) return;
    const v = [...e];
    [v[F], v[F - 1]] = [v[F - 1], v[F]], t(an(v));
  }, [e, t, l]), x = X((N) => {
    if (l) return;
    const F = e.findIndex((I) => I.id === N);
    if (F >= e.length - 1 || F === -1) return;
    const v = [...e];
    [v[F], v[F + 1]] = [v[F + 1], v[F]], t(an(v));
  }, [e, t, l]), C = X((N) => {
    if (l) return;
    const F = e.filter((v) => v.id !== N);
    t(an(F));
  }, [e, t, l]), g = X(() => {
    l || t([]);
  }, [t, l]), S = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const N = u.map((F, v) => {
      const I = F.direction === "asc" ? "ascending" : "descending";
      return `${v + 1}. ${F.label} (${I})`;
    });
    if (N.length === 1)
      return `Sorted by: ${N[0]}`;
    if (N.length === 2)
      return `Sorted by: ${N.join(" and ")}`;
    {
      const F = N.pop();
      return `Sorted by: ${N.join(", ")}, and ${F}`;
    }
  }, w = ie(() => {
    const N = ["sort-description"];
    return i && N.push("sort-help"), d && N.push(d), N.join(" ");
  }, [i, d]);
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
        "aria-describedby": w,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((N) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Rn,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => C(N.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: N.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: N.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(N.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${N.label}. Currently ${N.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: N.direction === "asc" ? ut.asc : ut.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(N.id),
                          disabled: l || !Ei(N.id, e),
                          "aria-label": `Move ${N.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => x(N.id),
                          disabled: l || !zi(N.id, e),
                          "aria-label": `Move ${N.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            N.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      Mn,
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
}, sh = (e, t) => t.map((r) => ({
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
})), vr = [
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
], Pi = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Ai = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Wi = (e) => {
  if (typeof e == "boolean") {
    const r = vr.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = vr.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, Oi = (e) => `${e.name}-${e.bed_name}`, Ui = () => ({
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
}), oh = (e) => {
  const t = Ui();
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
}, ih = {
  dataComparator: Pi,
  filterFunction: Ai,
  booleanRenderer: Wi,
  getDataId: Oi
}, Yr = (e) => /* @__PURE__ */ n.jsx(jr, { ...e }), lh = ({
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
  const S = {
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
    /* @__PURE__ */ n.jsx(Dr, { ...S }),
    /* @__PURE__ */ n.jsx(Yr, { className: C, ...g, children: /* @__PURE__ */ n.jsx(Nr, { size: o, children: /* @__PURE__ */ n.jsx(ht, { children: /* @__PURE__ */ n.jsxs(Hn, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Re, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Mr, { ...l })
  ] });
}, ch = ({
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
    /* @__PURE__ */ n.jsx(Dr, { ...C }),
    /* @__PURE__ */ n.jsxs(Yr, { className: m, ...x, children: [
      c && /* @__PURE__ */ n.jsx(Za, { ...c }),
      /* @__PURE__ */ n.jsx(Nr, { size: o, children: /* @__PURE__ */ n.jsx(ht, { children: /* @__PURE__ */ n.jsxs(Hn, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Re, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Mr, { ...l })
  ] });
}, Yi = "150ms", Gi = "300ms", Vi = "500ms", qi = "cubic-bezier(0.4, 0, 1, 1)", Ki = "cubic-bezier(0, 0, 0.2, 1)", Zi = "cubic-bezier(0.4, 0, 0.2, 1)", Ji = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Xi = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Qi = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", el = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", tl = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", nl = "1px", rl = "2px", al = "4px", sl = "4px", ol = "4px", il = "2px", ll = "1px", cl = "0px", ul = "4px", dl = "8px", hl = "12px", Gr = "#d8dde0", Vr = "#4c6272", qr = "#d8dde0", Kr = "#aeb7bd", Zr = "#d5281b", Jr = "#005eb8", Xr = "#ffffff", Qr = "#212b32", ea = "#007f3b", ta = "#330072", na = "#7c2855", ra = "#d5281b", aa = "#ffeb3b", sa = "#fff9c4", oa = "#ffb81c", ia = "#ed8b00", la = "#00a499", ca = "#ae2573", ua = "#4c6272", da = "#768692", ha = "#aeb7bd", fa = "#d8dde0", ma = "#f0f4f5", fl = "#212b32", ml = "#4c6272", pl = "#ffffff", gl = "#212b32", xl = "#005eb8", bl = "#7c2855", yl = "#003087", kl = "#330072", _l = "#ffeb3b", vl = "#212b32", Sl = "#d8dde0", wl = "#ffffff33", Cl = "#d5281b", jl = "#4c6272", Nl = "#ffffff", Tl = "#007f3b", Bl = "#ffffff", Fl = "#006530", Dl = "#004021", Ml = "#004021", Rl = "#00000000", Il = "#ffffff", Ll = "#005eb8", $l = "#005eb8", Hl = "#d9e5f2", El = "#c7daf0", zl = "#005eb8", Pl = "#ffffff", Al = "#212b32", Wl = "#d9dde0", Ol = "#b3bcc2", Ul = "#b3bcc2", Yl = "#d5281b", Gl = "#aa2016", Vl = "#6a140e", ql = "#6a140e", Kl = "#005eb8", Zl = "#004b93", Jl = "#002f5c", Xl = "#002f5c", Ql = "8px", ec = "16px", tc = "12px", nc = "16px", rc = "4px", ac = "40px", sc = "4px", oc = "40px", ic = "12px", lc = "16px", cc = "32px", uc = "16px", dc = "20px", hc = "28px", fc = "9px", mc = "2px", pc = "16px", gc = "24px", xc = "8px", bc = "24px", yc = "16px", kc = "4px", _c = "4px", vc = "4px", Sc = "8px", wc = "4px", Cc = "16px", jc = "#007f3b", Nc = "#006530", Tc = "#004021", Bc = "#d8dde0", Fc = "#ffffff", Dc = "#768692", Mc = "#00000000", Rc = "#ffeb3b", Ic = "#00000000", Lc = "#ffffff", $c = "#d9e5f2", Hc = "#c7daf0", Ec = "#005eb8", zc = "#005eb8", pa = "8px", ga = "16px", xa = "12px", ba = "16px", Pc = "2px", Ac = "4px", Wc = "4px", Oc = "600", Uc = "#ffffff", Yc = "#d8dde0", Gc = "#aeb7bd", Vc = "#f0f4f5", qc = "#212b32", Kc = "#212b32", Zc = "#005eb8", ya = "16px", ka = "32px", _a = "16px", Jc = "1px", Xc = "4px", Qc = "none", eu = "0 2px 4px rgba(0, 0, 0, 0.1)", tu = "#ffffff", nu = "#ffffff", ru = "#d8dde0", au = "#ffffff", su = "#4c6272", ou = "#ffeb3b", iu = "#d5281b", lu = "#aeb7bd", cu = "#212b32", uu = "#4c6272", du = "#768692", hu = "#212b32", fu = "#ffffff", mu = "600", pu = "#d5281b", gu = "600", xu = "#4c6272", va = "4px", Sa = "40px", wa = "40px", Ca = "12px", bu = "2px", yu = "4px", ku = "0px", _u = "16px", vu = "18px", Su = "24px", wu = "32px", Cu = "34px", ju = "32px", Nu = "40px", Tu = "48px", Bu = "5.4ex", Fu = "7.2ex", Du = "9ex", Mu = "10.8ex", Ru = "20ex", Iu = "38ex", Lu = "56ex", $u = "44px", Hu = "40px", Eu = "1020px", zu = "100%", Pu = "50%", Au = "33.333%", Wu = "25%", Ou = "20%", Uu = "320px", Yu = "641px", Gu = "1025px", Vu = "1280px", qu = "960px", Ku = "32px", Zu = "16px", Ju = "#d5281b", Xu = "#d5281b", Qu = "#ffffff", ed = "#007f3b", td = "#007f3b", nd = "#ffffff", rd = "#ffeb3b", ad = "#ffeb3b", sd = "#212b32", od = "#005eb8", id = "#005eb8", ld = "#ffffff", cd = "#d8dde0", ud = "#aeb7bd", dd = "#768692", hd = "0 4px 0 #004021", fd = "0 4px 0 #005eb8", md = "0 4px 0 #6a140e", pd = "0 4px 0 #ffeb3b", gd = "none", xd = "0 2px 4px rgba(0, 0, 0, 0.1)", bd = "4px", yd = "0px", kd = "solid", _d = "0 0 0 3px #ffeb3b", vd = "0 0 0 3px #ffeb3b", Sd = "none", wd = "0 1px 3px rgba(0, 0, 0, 0.12)", Cd = "0 2px 6px rgba(0, 0, 0, 0.16)", jd = "0 4px 12px rgba(0, 0, 0, 0.20)", ja = "0", Na = "4px", Ta = "8px", Ba = "16px", Fa = "24px", Da = "32px", Ma = "40px", Ra = "48px", Ia = "56px", La = "64px", cn = "0", un = "0", dn = "4px", hn = "4px", fn = "8px", mn = "8px", pn = "8px", gn = "16px", xn = "16px", bn = "24px", yn = "24px", kn = "32px", _n = "32px", vn = "40px", Sn = "40px", wn = "48px", Cn = "48px", jn = "56px", Nn = "56px", Tn = "64px", kt = "Frutiger W01", _t = "Arial, Helvetica, sans-serif", vt = "sans-serif", St = "400", wt = "600", Ct = "400", jt = "12px", Nt = "14px", Tt = "12pt", Bt = "14px", Ft = "16px", Dt = "12pt", Mt = "16px", Rt = "19px", It = "13pt", Lt = "19px", $t = "22px", Ht = "15pt", Et = "22px", zt = "26px", Pt = "17pt", At = "27px", Wt = "36px", Ot = "20pt", Ut = "33px", Yt = "48px", Gt = "24pt", Bn = "16px", Fn = "24px", _e = {
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
}, Nd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Yi,
  AnimationDurationNormal: Gi,
  AnimationDurationSlow: Vi,
  AnimationEasingBounce: Ji,
  AnimationEasingEaseIn: qi,
  AnimationEasingEaseInOut: Zi,
  AnimationEasingEaseOut: Ki,
  BorderColorCard: qr,
  BorderColorCardHover: Kr,
  BorderColorDefault: Gr,
  BorderColorError: Zr,
  BorderColorForm: Vr,
  BorderRadiusLarge: hl,
  BorderRadiusMedium: dl,
  BorderRadiusNone: cl,
  BorderRadiusSmall: ul,
  BorderWidthCardBottom: sl,
  BorderWidthDefault: nl,
  BorderWidthFormElement: rl,
  BorderWidthFormElementError: al,
  BorderWidthPanel: ol,
  BorderWidthTableCell: ll,
  BorderWidthTableHeader: il,
  BreakpointDesktop: Gu,
  BreakpointLargeDesktop: Vu,
  BreakpointMobile: Uu,
  BreakpointTablet: Yu,
  ButtonBorderRadius: Ac,
  ButtonBorderWidth: Pc,
  ButtonPrimaryBackgroundActive: Tc,
  ButtonPrimaryBackgroundDefault: jc,
  ButtonPrimaryBackgroundDisabled: Bc,
  ButtonPrimaryBackgroundHover: Nc,
  ButtonPrimaryBorderDefault: Mc,
  ButtonPrimaryBorderFocus: Rc,
  ButtonPrimaryTextDefault: Fc,
  ButtonPrimaryTextDisabled: Dc,
  ButtonSecondaryBackgroundActive: Hc,
  ButtonSecondaryBackgroundDefault: Ic,
  ButtonSecondaryBackgroundHover: $c,
  ButtonSecondaryBackgroundSolid: Lc,
  ButtonSecondaryBorderDefault: zc,
  ButtonSecondaryTextDefault: Ec,
  ButtonShadowSize: Wc,
  ButtonSpacingPaddingHorizontalDesktop: ba,
  ButtonSpacingPaddingHorizontalMobile: ga,
  ButtonSpacingPaddingVerticalDesktop: xa,
  ButtonSpacingPaddingVerticalMobile: pa,
  ButtonTypographyWeight: Oc,
  CardBackgroundDefault: Uc,
  CardBorderBottom: Vc,
  CardBorderDefault: Yc,
  CardBorderHover: Gc,
  CardBorderWidthBottom: Xc,
  CardBorderWidthDefault: Jc,
  CardShadowDefault: Qc,
  CardShadowHover: eu,
  CardSpacingHeadingMargin: _a,
  CardSpacingPaddingDesktop: ka,
  CardSpacingPaddingMobile: ya,
  CardTextDescription: Kc,
  CardTextHeading: qc,
  CardTextLink: Zc,
  ColorBorderDefault: Sl,
  ColorBorderSecondary: wl,
  ColorButtonLoginActive: Jl,
  ColorButtonLoginBackground: Kl,
  ColorButtonLoginHover: Zl,
  ColorButtonLoginShadow: Xl,
  ColorButtonPrimaryActive: Dl,
  ColorButtonPrimaryBackground: Tl,
  ColorButtonPrimaryHover: Fl,
  ColorButtonPrimaryShadow: Ml,
  ColorButtonPrimaryText: Bl,
  ColorButtonReverseActive: Ol,
  ColorButtonReverseBackground: Pl,
  ColorButtonReverseHover: Wl,
  ColorButtonReverseShadow: Ul,
  ColorButtonReverseText: Al,
  ColorButtonSecondaryActive: El,
  ColorButtonSecondaryBackground: Rl,
  ColorButtonSecondaryBackgroundSolid: Il,
  ColorButtonSecondaryBorder: Ll,
  ColorButtonSecondaryHover: Hl,
  ColorButtonSecondaryShadow: zl,
  ColorButtonSecondaryText: $l,
  ColorButtonWarningActive: Vl,
  ColorButtonWarningBackground: Yl,
  ColorButtonWarningHover: Gl,
  ColorButtonWarningShadow: ql,
  ColorError: Cl,
  ColorFocusBackground: _l,
  ColorFocusText: vl,
  ColorFormBackground: Nl,
  ColorFormBorder: jl,
  ColorGrey1: ua,
  ColorGrey2: da,
  ColorGrey3: ha,
  ColorGrey4: fa,
  ColorGrey5: ma,
  ColorLinkActive: yl,
  ColorLinkDefault: xl,
  ColorLinkHover: bl,
  ColorLinkVisited: kl,
  ColorPrimaryBlack: Qr,
  ColorPrimaryBlue: Jr,
  ColorPrimaryDarkPink: na,
  ColorPrimaryGreen: ea,
  ColorPrimaryPurple: ta,
  ColorPrimaryRed: ra,
  ColorPrimaryWhite: Xr,
  ColorPrimaryYellow: aa,
  ColorSecondaryAquaGreen: la,
  ColorSecondaryOrange: ia,
  ColorSecondaryPaleYellow: sa,
  ColorSecondaryPink: ca,
  ColorSecondaryWarmYellow: oa,
  ColorTextPrimary: fl,
  ColorTextPrint: gl,
  ColorTextReverse: pl,
  ColorTextSecondary: ml,
  ComponentBlur: _c,
  ComponentBreadcrumbChevronMarginLeft: fc,
  ComponentBreadcrumbChevronMarginRight: mc,
  ComponentBreadcrumbPaddingTopDesktop: gc,
  ComponentBreadcrumbPaddingTopMobile: pc,
  ComponentButtonPaddingDesktopHorizontal: nc,
  ComponentButtonPaddingDesktopVertical: tc,
  ComponentButtonPaddingMobileHorizontal: ec,
  ComponentButtonPaddingMobileVertical: Ql,
  ComponentButtonShadowSize: rc,
  ComponentCardHeadingMargin: uc,
  ComponentCardPaddingDesktop: cc,
  ComponentCardPaddingMobile: lc,
  ComponentDetails: Sc,
  ComponentExpander: wc,
  ComponentFormCheckboxLabelPadding: ic,
  ComponentFormCheckboxSize: oc,
  ComponentFormInputMinHeight: ac,
  ComponentFormInputPadding: sc,
  ComponentLink: vc,
  ComponentPagination: Cc,
  ComponentPanelPaddingDesktop: hc,
  ComponentPanelPaddingMobile: dc,
  ComponentSpread: kc,
  ComponentSummaryListCellPaddingHorizontal: bc,
  ComponentSummaryListCellPaddingVertical: xc,
  ComponentSummaryListRowMargin: yc,
  ElevationHigh: jd,
  ElevationLow: wd,
  ElevationMedium: Cd,
  ElevationNone: Sd,
  FocusOutlineOffset: yd,
  FocusOutlineStyle: kd,
  FocusOutlineWidth: bd,
  FocusShadowButton: vd,
  FocusShadowInput: _d,
  FontFamilyBase: kt,
  FontFamilyFallback: _t,
  FontFamilyPrint: vt,
  FontLineHeightBase: Fn,
  FontSize14Mobile: jt,
  FontSize14Print: Tt,
  FontSize14Tablet: Nt,
  FontSize16Mobile: Bt,
  FontSize16Print: Dt,
  FontSize16Tablet: Ft,
  FontSize19Mobile: Mt,
  FontSize19Print: It,
  FontSize19Tablet: Rt,
  FontSize22Mobile: Lt,
  FontSize22Print: Ht,
  FontSize22Tablet: $t,
  FontSize26Mobile: Et,
  FontSize26Print: Pt,
  FontSize26Tablet: zt,
  FontSize36Mobile: At,
  FontSize36Print: Ot,
  FontSize36Tablet: Wt,
  FontSize48Mobile: Ut,
  FontSize48Print: Gt,
  FontSize48Tablet: Yt,
  FontSizeBase: Bn,
  FontWeightBold: wt,
  FontWeightLight: Ct,
  FontWeightNormal: St,
  FormBorderRadius: ku,
  FormBorderWidthDefault: bu,
  FormBorderWidthError: yu,
  FormErrorTextDefault: pu,
  FormErrorTypographyWeight: gu,
  FormHintTextDefault: xu,
  FormInputBackgroundDefault: tu,
  FormInputBackgroundDisabled: ru,
  FormInputBackgroundError: au,
  FormInputBackgroundFocus: nu,
  FormInputBorderDefault: su,
  FormInputBorderDisabled: lu,
  FormInputBorderError: iu,
  FormInputBorderFocus: ou,
  FormInputTextDefault: cu,
  FormInputTextDisabled: du,
  FormInputTextPlaceholder: uu,
  FormLabelTextDefault: hu,
  FormLabelTextRequired: fu,
  FormLabelTypographyWeight: mu,
  FormSpacingCheckboxLabelPadding: Ca,
  FormSpacingCheckboxSize: wa,
  FormSpacingInputMinHeight: Sa,
  FormSpacingInputPadding: va,
  GridGutter: Ku,
  GridGutterHalf: Zu,
  GridPageWidth: qu,
  HeadingsNhsukHeadingL: ve,
  HeadingsNhsukHeadingM: Se,
  HeadingsNhsukHeadingS: we,
  HeadingsNhsukHeadingXl: _e,
  HeadingsNhsukHeadingXs: Ce,
  LayoutColumnActions: Ou,
  LayoutColumnFull: zu,
  LayoutColumnHalf: Pu,
  LayoutColumnQuarter: Wu,
  LayoutColumnThird: Au,
  LayoutContainerMaxWidth: Eu,
  ParagraphsBody: je,
  ParagraphsBodyLarge: Ne,
  ParagraphsBodySmall: Te,
  ParagraphsLedeText: Be,
  ParagraphsLedeTextSmall: Fe,
  ShadowButtonDefault: hd,
  ShadowButtonFocus: pd,
  ShadowButtonSecondary: fd,
  ShadowButtonWarning: md,
  ShadowCardDefault: gd,
  ShadowCardHover: xd,
  SizeButtonMinHeightDesktop: Hu,
  SizeButtonMinHeightMobile: $u,
  SizeFormControlLarge: Tu,
  SizeFormControlMedium: Nu,
  SizeFormControlSmall: ju,
  SizeFormInputWidth2xl: Iu,
  SizeFormInputWidth3xl: Lu,
  SizeFormInputWidthLg: Mu,
  SizeFormInputWidthMd: Du,
  SizeFormInputWidthSm: Fu,
  SizeFormInputWidthXl: Ru,
  SizeFormInputWidthXs: Bu,
  SizeIconExtraLarge: wu,
  SizeIconLarge: Su,
  SizeIconMedium: vu,
  SizeIconNhsDefault: Cu,
  SizeIconSmall: _u,
  Spacing0: ja,
  Spacing1: Na,
  Spacing2: Ta,
  Spacing3: Ba,
  Spacing4: Fa,
  Spacing5: Da,
  Spacing6: Ma,
  Spacing7: Ra,
  Spacing8: Ia,
  Spacing9: La,
  SpacingResponsive0Mobile: cn,
  SpacingResponsive0Tablet: un,
  SpacingResponsive1Mobile: dn,
  SpacingResponsive1Tablet: hn,
  SpacingResponsive2Mobile: fn,
  SpacingResponsive2Tablet: mn,
  SpacingResponsive3Mobile: pn,
  SpacingResponsive3Tablet: gn,
  SpacingResponsive4Mobile: xn,
  SpacingResponsive4Tablet: bn,
  SpacingResponsive5Mobile: yn,
  SpacingResponsive5Tablet: kn,
  SpacingResponsive6Mobile: _n,
  SpacingResponsive6Tablet: vn,
  SpacingResponsive7Mobile: Sn,
  SpacingResponsive7Tablet: wn,
  SpacingResponsive8Mobile: Cn,
  SpacingResponsive8Tablet: jn,
  SpacingResponsive9Mobile: Nn,
  SpacingResponsive9Tablet: Tn,
  StateDisabledBackground: cd,
  StateDisabledBorder: ud,
  StateDisabledText: dd,
  StateErrorBackground: Ju,
  StateErrorBorder: Xu,
  StateErrorText: Qu,
  StateInfoBackground: od,
  StateInfoBorder: id,
  StateInfoText: ld,
  StateSuccessBackground: ed,
  StateSuccessBorder: td,
  StateSuccessText: nd,
  StateWarningBackground: rd,
  StateWarningBorder: ad,
  StateWarningText: sd,
  TransitionButtonDefault: Xi,
  TransitionButtonShadow: Qi,
  TransitionCardHover: tl,
  TransitionInputFocus: el
}, Symbol.toStringTag, { value: "Module" })), uh = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), dh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
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
), hh = ({
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
), fh = ({
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
), mh = ({
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
), ph = ({
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
), gh = ({
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
), xh = ({
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
), bh = ({
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
), yh = ({
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
), kh = ({
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
), _h = () => ie(() => Nd, []), vh = () => ie(() => ({
  // Border colors
  BorderColorDefault: Gr,
  BorderColorForm: Vr,
  BorderColorCard: qr,
  BorderColorCardHover: Kr,
  BorderColorError: Zr,
  // Primary colors
  ColorPrimaryBlue: Jr,
  ColorPrimaryWhite: Xr,
  ColorPrimaryBlack: Qr,
  ColorPrimaryGreen: ea,
  ColorPrimaryPurple: ta,
  ColorPrimaryDarkPink: na,
  ColorPrimaryRed: ra,
  ColorPrimaryYellow: aa,
  // Secondary colors
  ColorSecondaryPaleYellow: sa,
  ColorSecondaryWarmYellow: oa,
  ColorSecondaryOrange: ia,
  ColorSecondaryAquaGreen: la,
  ColorSecondaryPink: ca,
  // Grey scale
  ColorGrey1: ua,
  ColorGrey2: da,
  ColorGrey3: ha,
  ColorGrey4: fa,
  ColorGrey5: ma
}), []), Sh = () => ie(() => ({
  Spacing0: ja,
  Spacing1: Na,
  Spacing2: Ta,
  Spacing3: Ba,
  Spacing4: Fa,
  Spacing5: Da,
  Spacing6: Ma,
  Spacing7: Ra,
  Spacing8: Ia,
  Spacing9: La
}), []), wh = () => ie(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: jt,
    Size16: Bt,
    Size19: Mt,
    Size22: Lt,
    Size26: Et,
    Size36: At,
    Size48: Ut
  },
  Tablet: {
    Size14: Nt,
    Size16: Ft,
    Size19: Rt,
    Size22: $t,
    Size26: zt,
    Size36: Wt,
    Size48: Yt
  },
  Print: {
    Size14: Tt,
    Size16: Dt,
    Size19: It,
    Size22: Ht,
    Size26: Pt,
    Size36: Ot,
    Size48: Gt
  },
  Family: {
    Base: kt,
    Fallback: _t,
    Print: vt
  },
  Weight: {
    Normal: St,
    Bold: wt,
    Light: Ct
  },
  Base: {
    Size: Bn,
    LineHeight: Fn
  },
  // Backward compatibility - individual exports
  FontFamilyBase: kt,
  FontFamilyFallback: _t,
  FontFamilyPrint: vt,
  FontWeightNormal: St,
  FontWeightBold: wt,
  FontWeightLight: Ct,
  FontSize14Mobile: jt,
  FontSize14Tablet: Nt,
  FontSize14Print: Tt,
  FontSize16Mobile: Bt,
  FontSize16Tablet: Ft,
  FontSize16Print: Dt,
  FontSize19Mobile: Mt,
  FontSize19Tablet: Rt,
  FontSize19Print: It,
  FontSize22Mobile: Lt,
  FontSize22Tablet: $t,
  FontSize22Print: Ht,
  FontSize26Mobile: Et,
  FontSize26Tablet: zt,
  FontSize26Print: Pt,
  FontSize36Mobile: At,
  FontSize36Tablet: Wt,
  FontSize36Print: Ot,
  FontSize48Mobile: Ut,
  FontSize48Tablet: Yt,
  FontSize48Print: Gt,
  FontSizeBase: Bn,
  FontLineHeightBase: Fn
}), []), Ch = () => ie(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: cn,
    Size1: dn,
    Size2: fn,
    Size3: pn,
    Size4: xn,
    Size5: yn,
    Size6: _n,
    Size7: Sn,
    Size8: Cn,
    Size9: Nn
  },
  Tablet: {
    Size0: un,
    Size1: hn,
    Size2: mn,
    Size3: gn,
    Size4: bn,
    Size5: kn,
    Size6: vn,
    Size7: wn,
    Size8: jn,
    Size9: Tn
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: cn,
  SpacingResponsive0Tablet: un,
  SpacingResponsive1Mobile: dn,
  SpacingResponsive1Tablet: hn,
  SpacingResponsive2Mobile: fn,
  SpacingResponsive2Tablet: mn,
  SpacingResponsive3Mobile: pn,
  SpacingResponsive3Tablet: gn,
  SpacingResponsive4Mobile: xn,
  SpacingResponsive4Tablet: bn,
  SpacingResponsive5Mobile: yn,
  SpacingResponsive5Tablet: kn,
  SpacingResponsive6Mobile: _n,
  SpacingResponsive6Tablet: vn,
  SpacingResponsive7Mobile: Sn,
  SpacingResponsive7Tablet: wn,
  SpacingResponsive8Mobile: Cn,
  SpacingResponsive8Tablet: jn,
  SpacingResponsive9Mobile: Nn,
  SpacingResponsive9Tablet: Tn
}), []), jh = () => ie(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: pa,
  ButtonSpacingPaddingHorizontalMobile: ga,
  ButtonSpacingPaddingVerticalDesktop: xa,
  ButtonSpacingPaddingHorizontalDesktop: ba,
  // Card spacing	
  CardSpacingPaddingMobile: ya,
  CardSpacingPaddingDesktop: ka,
  CardSpacingHeadingMargin: _a,
  // Form spacing
  FormSpacingInputPadding: va,
  FormSpacingInputMinHeight: Sa,
  FormSpacingCheckboxSize: wa,
  FormSpacingCheckboxLabelPadding: Ca
}), []), Nh = () => ie(() => ({
  xl: _e,
  l: ve,
  m: Se,
  s: we,
  xs: Ce
}), []), Th = () => ie(() => ({
  body: je,
  bodyLarge: Ne,
  bodySmall: Te,
  ledeText: Be,
  ledeTextSmall: Fe
}), []), Bh = () => ie(() => ({
  headings: {
    xl: _e,
    l: ve,
    m: Se,
    s: we,
    xs: Ce
  },
  paragraphs: {
    body: je,
    bodyLarge: Ne,
    bodySmall: Te,
    ledeText: Be,
    ledeTextSmall: Fe
  },
  fonts: {
    family: {
      base: kt,
      fallback: _t,
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
        size16: Bt,
        size19: Mt,
        size22: Lt,
        size26: Et,
        size36: At,
        size48: Ut
      },
      tablet: {
        size14: Nt,
        size16: Ft,
        size19: Rt,
        size22: $t,
        size26: zt,
        size36: Wt,
        size48: Yt
      },
      print: {
        size14: Tt,
        size16: Dt,
        size19: It,
        size22: Ht,
        size26: Pt,
        size36: Ot,
        size48: Gt
      }
    }
  }
}), []), $a = {
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
function Fh(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...$a, ...e }, a = [];
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
function Dh(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...$a, ...e };
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
const Mh = '"Frutiger W01", Arial, Helvetica, sans-serif', Rh = "Arial, Helvetica, sans-serif";
async function Ih() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Dn as Account,
  Bd as ActionLink,
  Yi as AnimationDurationFast,
  Gi as AnimationDurationNormal,
  Vi as AnimationDurationSlow,
  Ji as AnimationEasingBounce,
  qi as AnimationEasingEaseIn,
  Zi as AnimationEasingEaseInOut,
  Ki as AnimationEasingEaseOut,
  Di as AriaDataGrid,
  _r as AriaTabsDataGrid,
  rh as AriaTabsDataGridAdaptive,
  Za as BackLink,
  qr as BorderColorCard,
  Kr as BorderColorCardHover,
  Gr as BorderColorDefault,
  Zr as BorderColorError,
  Vr as BorderColorForm,
  hl as BorderRadiusLarge,
  dl as BorderRadiusMedium,
  cl as BorderRadiusNone,
  ul as BorderRadiusSmall,
  sl as BorderWidthCardBottom,
  nl as BorderWidthDefault,
  rl as BorderWidthFormElement,
  al as BorderWidthFormElementError,
  ol as BorderWidthPanel,
  ll as BorderWidthTableCell,
  il as BorderWidthTableHeader,
  Si as Breadcrumb,
  Gu as BreakpointDesktop,
  Vu as BreakpointLargeDesktop,
  Uu as BreakpointMobile,
  Yu as BreakpointTablet,
  Mn as Button,
  Ac as ButtonBorderRadius,
  Pc as ButtonBorderWidth,
  Tc as ButtonPrimaryBackgroundActive,
  jc as ButtonPrimaryBackgroundDefault,
  Bc as ButtonPrimaryBackgroundDisabled,
  Nc as ButtonPrimaryBackgroundHover,
  Mc as ButtonPrimaryBorderDefault,
  Rc as ButtonPrimaryBorderFocus,
  Fc as ButtonPrimaryTextDefault,
  Dc as ButtonPrimaryTextDisabled,
  Hc as ButtonSecondaryBackgroundActive,
  Ic as ButtonSecondaryBackgroundDefault,
  $c as ButtonSecondaryBackgroundHover,
  Lc as ButtonSecondaryBackgroundSolid,
  zc as ButtonSecondaryBorderDefault,
  Ec as ButtonSecondaryTextDefault,
  Wc as ButtonShadowSize,
  ba as ButtonSpacingPaddingHorizontalDesktop,
  ga as ButtonSpacingPaddingHorizontalMobile,
  xa as ButtonSpacingPaddingVerticalDesktop,
  pa as ButtonSpacingPaddingVerticalMobile,
  Oc as ButtonTypographyWeight,
  Gd as Card,
  Uc as CardBackgroundDefault,
  Vc as CardBorderBottom,
  Yc as CardBorderDefault,
  Gc as CardBorderHover,
  Xc as CardBorderWidthBottom,
  Jc as CardBorderWidthDefault,
  Vd as CardGroup,
  qd as CardGroupItem,
  Qc as CardShadowDefault,
  eu as CardShadowHover,
  _a as CardSpacingHeadingMargin,
  ka as CardSpacingPaddingDesktop,
  ya as CardSpacingPaddingMobile,
  Kc as CardTextDescription,
  qc as CardTextHeading,
  Zc as CardTextLink,
  Kd as CareCard,
  Fd as CharacterCount,
  Ja as Checkbox,
  Xa as Checkboxes,
  Sl as ColorBorderDefault,
  wl as ColorBorderSecondary,
  Jl as ColorButtonLoginActive,
  Kl as ColorButtonLoginBackground,
  Zl as ColorButtonLoginHover,
  Xl as ColorButtonLoginShadow,
  Dl as ColorButtonPrimaryActive,
  Tl as ColorButtonPrimaryBackground,
  Fl as ColorButtonPrimaryHover,
  Ml as ColorButtonPrimaryShadow,
  Bl as ColorButtonPrimaryText,
  Ol as ColorButtonReverseActive,
  Pl as ColorButtonReverseBackground,
  Wl as ColorButtonReverseHover,
  Ul as ColorButtonReverseShadow,
  Al as ColorButtonReverseText,
  El as ColorButtonSecondaryActive,
  Rl as ColorButtonSecondaryBackground,
  Il as ColorButtonSecondaryBackgroundSolid,
  Ll as ColorButtonSecondaryBorder,
  Hl as ColorButtonSecondaryHover,
  zl as ColorButtonSecondaryShadow,
  $l as ColorButtonSecondaryText,
  Vl as ColorButtonWarningActive,
  Yl as ColorButtonWarningBackground,
  Gl as ColorButtonWarningHover,
  ql as ColorButtonWarningShadow,
  Cl as ColorError,
  _l as ColorFocusBackground,
  vl as ColorFocusText,
  Nl as ColorFormBackground,
  jl as ColorFormBorder,
  ua as ColorGrey1,
  da as ColorGrey2,
  ha as ColorGrey3,
  fa as ColorGrey4,
  ma as ColorGrey5,
  yl as ColorLinkActive,
  xl as ColorLinkDefault,
  bl as ColorLinkHover,
  kl as ColorLinkVisited,
  Qr as ColorPrimaryBlack,
  Jr as ColorPrimaryBlue,
  na as ColorPrimaryDarkPink,
  ea as ColorPrimaryGreen,
  ta as ColorPrimaryPurple,
  ra as ColorPrimaryRed,
  Xr as ColorPrimaryWhite,
  aa as ColorPrimaryYellow,
  la as ColorSecondaryAquaGreen,
  ia as ColorSecondaryOrange,
  sa as ColorSecondaryPaleYellow,
  ca as ColorSecondaryPink,
  oa as ColorSecondaryWarmYellow,
  fl as ColorTextPrimary,
  gl as ColorTextPrint,
  pl as ColorTextReverse,
  ml as ColorTextSecondary,
  Hn as Column,
  _c as ComponentBlur,
  fc as ComponentBreadcrumbChevronMarginLeft,
  mc as ComponentBreadcrumbChevronMarginRight,
  gc as ComponentBreadcrumbPaddingTopDesktop,
  pc as ComponentBreadcrumbPaddingTopMobile,
  nc as ComponentButtonPaddingDesktopHorizontal,
  tc as ComponentButtonPaddingDesktopVertical,
  ec as ComponentButtonPaddingMobileHorizontal,
  Ql as ComponentButtonPaddingMobileVertical,
  rc as ComponentButtonShadowSize,
  uc as ComponentCardHeadingMargin,
  cc as ComponentCardPaddingDesktop,
  lc as ComponentCardPaddingMobile,
  Sc as ComponentDetails,
  wc as ComponentExpander,
  ic as ComponentFormCheckboxLabelPadding,
  oc as ComponentFormCheckboxSize,
  ac as ComponentFormInputMinHeight,
  sc as ComponentFormInputPadding,
  vc as ComponentLink,
  Cc as ComponentPagination,
  hc as ComponentPanelPaddingDesktop,
  dc as ComponentPanelPaddingMobile,
  kc as ComponentSpread,
  bc as ComponentSummaryListCellPaddingHorizontal,
  xc as ComponentSummaryListCellPaddingVertical,
  yc as ComponentSummaryListRowMargin,
  jr as Container,
  Yd as ContentsList,
  $a as DEFAULT_FONT_CONFIG,
  nh as DashboardSummaryGrid,
  Ed as DateInput,
  Ci as Details,
  ji as DoDontList,
  jd as ElevationHigh,
  wd as ElevationLow,
  Cd as ElevationMedium,
  Sd as ElevationNone,
  Jn as ErrorMessage,
  Hd as ErrorSummary,
  Ni as Expander,
  he as FRUTIGER_FONT_FILES,
  $n as Fieldset,
  yd as FocusOutlineOffset,
  kd as FocusOutlineStyle,
  bd as FocusOutlineWidth,
  vd as FocusShadowButton,
  _d as FocusShadowInput,
  kt as FontFamilyBase,
  _t as FontFamilyFallback,
  vt as FontFamilyPrint,
  Fn as FontLineHeightBase,
  jt as FontSize14Mobile,
  Tt as FontSize14Print,
  Nt as FontSize14Tablet,
  Bt as FontSize16Mobile,
  Dt as FontSize16Print,
  Ft as FontSize16Tablet,
  Mt as FontSize19Mobile,
  It as FontSize19Print,
  Rt as FontSize19Tablet,
  Lt as FontSize22Mobile,
  Ht as FontSize22Print,
  $t as FontSize22Tablet,
  Et as FontSize26Mobile,
  Pt as FontSize26Print,
  zt as FontSize26Tablet,
  At as FontSize36Mobile,
  Ot as FontSize36Print,
  Wt as FontSize36Tablet,
  Ut as FontSize48Mobile,
  Gt as FontSize48Print,
  Yt as FontSize48Tablet,
  Bn as FontSizeBase,
  wt as FontWeightBold,
  Ct as FontWeightLight,
  St as FontWeightNormal,
  Mr as Footer,
  ku as FormBorderRadius,
  bu as FormBorderWidthDefault,
  yu as FormBorderWidthError,
  pu as FormErrorTextDefault,
  gu as FormErrorTypographyWeight,
  xu as FormHintTextDefault,
  tu as FormInputBackgroundDefault,
  ru as FormInputBackgroundDisabled,
  au as FormInputBackgroundError,
  nu as FormInputBackgroundFocus,
  su as FormInputBorderDefault,
  lu as FormInputBorderDisabled,
  iu as FormInputBorderError,
  ou as FormInputBorderFocus,
  cu as FormInputTextDefault,
  du as FormInputTextDisabled,
  uu as FormInputTextPlaceholder,
  hu as FormLabelTextDefault,
  fu as FormLabelTextRequired,
  mu as FormLabelTypographyWeight,
  Ca as FormSpacingCheckboxLabelPadding,
  wa as FormSpacingCheckboxSize,
  Sa as FormSpacingInputMinHeight,
  va as FormSpacingInputPadding,
  Od as GanttChart,
  rs as Grid,
  Ku as GridGutter,
  Zu as GridGutterHalf,
  qu as GridPageWidth,
  Dr as Header,
  Ad as HeaderSSR,
  Fr as HeaderSearch,
  Wd as HeaderStatic,
  Re as Heading,
  ve as HeadingsNhsukHeadingL,
  Se as HeadingsNhsukHeadingM,
  we as HeadingsNhsukHeadingS,
  _e as HeadingsNhsukHeadingXl,
  Ce as HeadingsNhsukHeadingXs,
  us as Hero,
  Cr as Hint,
  th as Images,
  In as Input,
  Zd as InsetText,
  Ln as Label,
  Ou as LayoutColumnActions,
  zu as LayoutColumnFull,
  Pu as LayoutColumnHalf,
  Wu as LayoutColumnQuarter,
  Au as LayoutColumnThird,
  Eu as LayoutContainerMaxWidth,
  os as List,
  Nr as MainWrapper,
  gh as NHSBodyText,
  xh as NHSBodyTextLarge,
  bh as NHSBodyTextSmall,
  dh as NHSHeading1,
  hh as NHSHeading2,
  fh as NHSHeading3,
  mh as NHSHeading4,
  ph as NHSHeading5,
  yh as NHSLedeText,
  kh as NHSLedeTextSmall,
  Pd as NHSThemeProvider,
  Rh as NHS_FALLBACK_FONT_STACK,
  Mh as NHS_FONT_STACK,
  lh as PageTemplate,
  Ud as Pagination,
  wi as Panel,
  je as ParagraphsBody,
  Ne as ParagraphsBodyLarge,
  Te as ParagraphsBodySmall,
  Be as ParagraphsLedeText,
  Fe as ParagraphsLedeTextSmall,
  Dd as Radios,
  ht as Row,
  ns as Select,
  es as SelectOption,
  hd as ShadowButtonDefault,
  pd as ShadowButtonFocus,
  fd as ShadowButtonSecondary,
  md as ShadowButtonWarning,
  gd as ShadowCardDefault,
  xd as ShadowCardHover,
  Hu as SizeButtonMinHeightDesktop,
  $u as SizeButtonMinHeightMobile,
  Tu as SizeFormControlLarge,
  Nu as SizeFormControlMedium,
  ju as SizeFormControlSmall,
  Iu as SizeFormInputWidth2xl,
  Lu as SizeFormInputWidth3xl,
  Mu as SizeFormInputWidthLg,
  Du as SizeFormInputWidthMd,
  Fu as SizeFormInputWidthSm,
  Ru as SizeFormInputWidthXl,
  Bu as SizeFormInputWidthXs,
  wu as SizeIconExtraLarge,
  Su as SizeIconLarge,
  vu as SizeIconMedium,
  Cu as SizeIconNhsDefault,
  _u as SizeIconSmall,
  Ur as SkipLink,
  ah as SortStatusControl,
  ja as Spacing0,
  Na as Spacing1,
  Ta as Spacing2,
  Ba as Spacing3,
  Fa as Spacing4,
  Da as Spacing5,
  Ma as Spacing6,
  Ra as Spacing7,
  Ia as Spacing8,
  La as Spacing9,
  cn as SpacingResponsive0Mobile,
  un as SpacingResponsive0Tablet,
  dn as SpacingResponsive1Mobile,
  hn as SpacingResponsive1Tablet,
  fn as SpacingResponsive2Mobile,
  mn as SpacingResponsive2Tablet,
  pn as SpacingResponsive3Mobile,
  gn as SpacingResponsive3Tablet,
  xn as SpacingResponsive4Mobile,
  bn as SpacingResponsive4Tablet,
  yn as SpacingResponsive5Mobile,
  kn as SpacingResponsive5Tablet,
  _n as SpacingResponsive6Mobile,
  vn as SpacingResponsive6Tablet,
  Sn as SpacingResponsive7Mobile,
  wn as SpacingResponsive7Tablet,
  Cn as SpacingResponsive8Mobile,
  jn as SpacingResponsive8Tablet,
  Nn as SpacingResponsive9Mobile,
  Tn as SpacingResponsive9Tablet,
  Md as SpacingUtilities,
  cd as StateDisabledBackground,
  ud as StateDisabledBorder,
  dd as StateDisabledText,
  Ju as StateErrorBackground,
  Xu as StateErrorBorder,
  Qu as StateErrorText,
  od as StateInfoBackground,
  id as StateInfoBorder,
  ld as StateInfoText,
  ed as StateSuccessBackground,
  td as StateSuccessBorder,
  nd as StateSuccessText,
  rd as StateWarningBackground,
  ad as StateWarningBorder,
  sd as StateWarningText,
  Fi as SummaryCard,
  Jd as SummaryList,
  Xd as Table,
  Qd as Tabs,
  Rn as Tag,
  Ti as TaskList,
  Qa as Textarea,
  ch as TransactionalPageTemplate,
  Xi as TransitionButtonDefault,
  Qi as TransitionButtonShadow,
  tl as TransitionCardHover,
  el as TransitionInputFocus,
  $d as WIDTH_FRACTIONS,
  eh as WarningCallout,
  Yr as WidthContainer,
  Id as WidthUtilities,
  Ih as checkFrutigerLoaded,
  sh as createGenericTabsConfig,
  oh as createTCHTabsConfig,
  Fh as generateFrutigerFontFace,
  uh as getResponsiveStyles,
  Rd as getSpacingClass,
  Ld as getWidthClass,
  Dh as preloadFrutigerFonts,
  ih as tchDataConfig,
  vh as useColors,
  jh as useComponentSpacing,
  Nh as useNHSHeadings,
  Th as useNHSParagraphs,
  zd as useNHSTheme,
  Bh as useNHSTypographySystem,
  Ch as useResponsiveSpacing,
  Sh as useSpacing,
  _h as useTokens,
  wh as useTypography
};
//# sourceMappingURL=index.esm.js.map
