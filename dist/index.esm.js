import * as fe from "react";
import Fe, { useState as ge, useEffect as _e, useCallback as ne, useRef as xe, createElement as ka, useMemo as ke, useContext as so, createContext as oo, forwardRef as _t, useImperativeHandle as wa, useReducer as Sa } from "react";
function io(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var At = { exports: {} }, jt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr;
function lo() {
  if (Hr) return jt;
  Hr = 1;
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
  return jt.Fragment = t, jt.jsx = r, jt.jsxs = r, jt;
}
var Nt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr;
function co() {
  return Pr || (Pr = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === j ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case y:
          return "Fragment";
        case q:
          return "Profiler";
        case v:
          return "StrictMode";
        case M:
          return "Suspense";
        case p:
          return "SuspenseList";
        case N:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case T:
            return "Portal";
          case k:
            return (S.displayName || "Context") + ".Provider";
          case E:
            return (S._context.displayName || "Context") + ".Consumer";
          case _:
            var J = S.render;
            return S = S.displayName, S || (S = J.displayName || J.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case F:
            return J = S.displayName || null, J !== null ? J : e(S.type) || "Memo";
          case R:
            J = S._payload, S = S._init;
            try {
              return e(S(J));
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
        var J = !1;
      } catch {
        J = !0;
      }
      if (J) {
        J = console;
        var P = J.error, H = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return P.call(
          J,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), t(S);
      }
    }
    function a(S) {
      if (S === y) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === R)
        return "<...>";
      try {
        var J = e(S);
        return J ? "<" + J + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var S = L.A;
      return S === null ? null : S.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(S) {
      if (C.call(S, "key")) {
        var J = Object.getOwnPropertyDescriptor(S, "key").get;
        if (J && J.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function l(S, J) {
      function P() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          J
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: P,
        configurable: !0
      });
    }
    function c() {
      var S = e(this.type);
      return D[S] || (D[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function d(S, J, P, H, O, le, V, te) {
      return P = le.ref, S = {
        $$typeof: g,
        type: S,
        key: J,
        props: le,
        _owner: O
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(S, "ref", {
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
        value: V
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function u(S, J, P, H, O, le, V, te) {
      var G = J.children;
      if (G !== void 0)
        if (H)
          if ($(G)) {
            for (H = 0; H < G.length; H++)
              m(G[H]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(G);
      if (C.call(J, "key")) {
        G = e(S);
        var z = Object.keys(J).filter(function(de) {
          return de !== "key";
        });
        H = 0 < z.length ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}", ce[G + H] || (z = 0 < z.length ? "{" + z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          G,
          z,
          G
        ), ce[G + H] = !0);
      }
      if (G = null, P !== void 0 && (r(P), G = "" + P), i(J) && (r(J.key), G = "" + J.key), "key" in J) {
        P = {};
        for (var ae in J)
          ae !== "key" && (P[ae] = J[ae]);
      } else P = J;
      return G && l(
        P,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), d(
        S,
        G,
        le,
        O,
        o(),
        P,
        V,
        te
      );
    }
    function m(S) {
      typeof S == "object" && S !== null && S.$$typeof === g && S._store && (S._store.validated = 1);
    }
    var b = Fe, g = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), k = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), j = Symbol.for("react.client.reference"), L = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, $ = Array.isArray, ee = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var U, D = {}, se = b.react_stack_bottom_frame.bind(
      b,
      s
    )(), ie = ee(a(s)), ce = {};
    Nt.Fragment = y, Nt.jsx = function(S, J, P, H, O) {
      var le = 1e4 > L.recentlyCreatedOwnerStacks++;
      return u(
        S,
        J,
        P,
        !1,
        H,
        O,
        le ? Error("react-stack-top-frame") : se,
        le ? ee(a(S)) : ie
      );
    }, Nt.jsxs = function(S, J, P, H, O) {
      var le = 1e4 > L.recentlyCreatedOwnerStacks++;
      return u(
        S,
        J,
        P,
        !0,
        H,
        O,
        le ? Error("react-stack-top-frame") : se,
        le ? ee(a(S)) : ie
      );
    };
  })()), Nt;
}
var zr;
function uo() {
  return zr || (zr = 1, process.env.NODE_ENV === "production" ? At.exports = lo() : At.exports = co()), At.exports;
}
var n = uo(), En = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Wr;
function ho() {
  return Wr || (Wr = 1, (function(e) {
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
  })(En)), En.exports;
}
var fo = ho();
const Q = /* @__PURE__ */ io(fo), Sf = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = Q(
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
}, yr = ({
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
      className: Q(
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
          className: Q("nhsuk-account__item nhsuk-header__account-item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
}, { forwardRef: mo, useCallback: at, useState: Mn } = fe;
function po(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [d, u] = Mn(!1), [m, b] = Mn(!1), [g, T] = Mn(!1), y = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    o !== "default" ? `nhs-aria-button--${o}` : "",
    s ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), v = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", q = {
    ...d && { "data-pressed": "true" },
    ...m && { "data-hovered": "true" },
    ...g && { "data-focused": "true" },
    ...v && { "data-disabled": "true" }
  }, E = at(() => !v && u(!0), [v]), k = at(() => u(!1), []), _ = at(() => !v && b(!0), [v]), M = at(() => {
    b(!1), u(!1);
  }, []), p = at(() => T(!0), []), F = at(() => T(!1), []), R = at((G) => {
    G.key === " " && ("href" in c || G.currentTarget.getAttribute("role") === "button") && (G.preventDefault(), G.currentTarget.click());
  }, [c]), N = at((G) => {
    if (l) {
      const z = G.currentTarget;
      if (z.getAttribute("data-processing") === "true") {
        G.preventDefault();
        return;
      }
      z.setAttribute("data-processing", "true"), setTimeout(() => {
        z.removeAttribute("data-processing");
      }, 1e3);
    }
  }, [l]);
  if ("href" in c && c.href) {
    const { id: G, style: z, title: ae, ["aria-label"]: de, ["aria-describedby"]: h, ["aria-labelledby"]: W, tabIndex: Z, ...oe } = c, re = c;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: re.href,
        target: re.target,
        rel: re.rel,
        className: y,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...q,
        ...l && { "data-prevent-double-click": "true" },
        ...oe,
        onKeyDown: (f) => {
          re.onKeyDown?.(f), R(f);
        },
        onClick: (f) => {
          re.onClick?.(f), N(f);
        },
        onMouseDown: (f) => {
          re.onMouseDown?.(f), E();
        },
        onMouseUp: (f) => {
          re.onMouseUp?.(f), k();
        },
        onMouseEnter: (f) => {
          re.onMouseEnter?.(f), _();
        },
        onMouseLeave: (f) => {
          re.onMouseLeave?.(f), M();
        },
        onFocus: (f) => {
          re.onFocus?.(f), p();
        },
        onBlur: (f) => {
          re.onBlur?.(f), F();
        },
        "aria-disabled": re["aria-disabled"],
        ...re["aria-disabled"] === "true" && { tabIndex: -1 },
        id: G,
        style: z,
        title: ae,
        "aria-label": de,
        "aria-describedby": h,
        "aria-labelledby": W,
        tabIndex: Z,
        children: r
      }
    );
  }
  const { id: j, style: L, title: C, ["aria-label"]: $, ["aria-describedby"]: ee, ["aria-labelledby"]: U, tabIndex: D, name: se, value: ie, form: ce, formAction: S, formEncType: J, formMethod: P, formNoValidate: H, formTarget: O, autoFocus: le, ...V } = c, te = c;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: te.type || "button",
      disabled: te.disabled,
      className: y,
      "data-module": "nhs-button",
      ...q,
      ...l && { "data-prevent-double-click": "true" },
      ...te.disabled && { "aria-disabled": "true" },
      ...V,
      onKeyDown: (G) => {
        te.onKeyDown?.(G), R(G);
      },
      onClick: (G) => {
        te.onClick?.(G), N(G);
      },
      onMouseDown: (G) => {
        te.onMouseDown?.(G), E();
      },
      onMouseUp: (G) => {
        te.onMouseUp?.(G), k();
      },
      onMouseEnter: (G) => {
        te.onMouseEnter?.(G), _();
      },
      onMouseLeave: (G) => {
        te.onMouseLeave?.(G), M();
      },
      onFocus: (G) => {
        te.onFocus?.(G), p();
      },
      onBlur: (G) => {
        te.onBlur?.(G), F();
      },
      id: j,
      style: L,
      title: C,
      "aria-label": $,
      "aria-describedby": ee,
      "aria-labelledby": U,
      tabIndex: D,
      name: se,
      value: ie,
      form: ce,
      formAction: S,
      formEncType: J,
      formMethod: P,
      formNoValidate: H,
      formTarget: O,
      autoFocus: le,
      children: r
    }
  );
}
const Re = mo(po);
Re.displayName = "Button";
const Gn = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = Q(
    "nhsuk-back-link",
    a
  ), c = Q(
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
}, Qe = ({
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
  const u = Q(
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
  attributes: g,
  ...T
}) => {
  const [y, v] = ge(a), q = r !== void 0, E = q ? r : y;
  _e(() => {
    q || v(a);
  }, [a, q]);
  const k = (R) => {
    const N = R.target.checked;
    q || v(N), u?.(N, R);
  }, _ = i ? `${e}-hint` : void 0, M = l ? `${e}-error` : void 0, p = [_, M].filter(Boolean).join(" ") || void 0, F = Q(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ n.jsx("div", { className: F, ...T, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: E,
        disabled: o,
        onChange: k,
        onBlur: m,
        onFocus: b,
        "aria-describedby": p,
        ...g
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: d }),
    i && /* @__PURE__ */ n.jsx("div", { id: _, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: M, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
go.displayName = "Checkbox";
const vr = ({
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
  inputMode: g,
  autoComplete: T,
  maxLength: y,
  minLength: v,
  pattern: q,
  step: E,
  min: k,
  max: _,
  showValueLabels: M = !1,
  showCurrentValue: p = !1,
  valueLabels: F,
  onChange: R,
  onBlur: N,
  onFocus: j,
  onKeyDown: L,
  ...C
}) => {
  const [$, ee] = ge(a || o || (r === "range" ? k || "0" : ""));
  _e(() => {
    a !== void 0 && ee(a);
  }, [a]);
  const U = (O) => {
    const le = O.target;
    ee(le.value), ("type" in O && O.nativeEvent || O.type === "keydown") && R?.(O);
  }, D = r === "range", se = Q(
    "nhsuk-input",
    {
      "nhsuk-input--error": d,
      "nhsuk-input--range": D,
      [`nhsuk-input--width-${b}`]: b !== "full" && !D
    },
    m
  ), ie = a !== void 0, ce = {
    id: e,
    name: t,
    type: r,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: c,
    "aria-describedby": u,
    inputMode: g,
    autoComplete: T,
    maxLength: y,
    minLength: v,
    pattern: q,
    step: E,
    min: k,
    max: _,
    onChange: U,
    onBlur: N,
    onFocus: j,
    onKeyDown: (O) => {
      if (D && /[0-9]/.test(O.key)) {
        const le = ($?.toString() || "") + O.key;
        O.target.value = le, U(O);
      }
      L?.(O);
    },
    ...C
  }, S = !ie && o !== void 0 ? { defaultValue: o } : {}, J = ie ? { value: a } : {}, P = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: se,
      ...J,
      ...S,
      "data-current-value": $,
      ...ce
    }
  ), H = D ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    M && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: F?.min || k || "0" }),
      P(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: F?.max || _ || "100" })
    ] }),
    !M && P(),
    p && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      F?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: $ })
    ] }) })
  ] }) : null;
  return D ? H : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: se,
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
      inputMode: g,
      autoComplete: T,
      maxLength: y,
      minLength: v,
      pattern: q,
      step: E,
      min: k,
      max: _,
      onChange: R,
      onBlur: N,
      onFocus: j,
      onKeyDown: L,
      ...C
    }
  );
}, _r = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = Q(
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
}, kr = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = Q(
    "nhsuk-fieldset",
    r
  ), i = Q(
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
  ...g
}) => {
  const [T, y] = ge(
    e.filter((R) => R.checked).map((R) => R.value)
  ), v = r || t, q = i ? `${v}-hint` : void 0, E = l ? `${v}-error` : void 0, k = [q, E].filter(Boolean).join(" ") || void 0, _ = (R, N) => {
    let j;
    N ? j = [...T, R] : j = T.filter((L) => L !== R), y(j), u?.(j);
  }, M = () => e.map((R, N) => {
    const j = `${v}-${N + 1}`, L = `${j}-conditional`, C = T.includes(R.value), $ = R.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: j,
          name: t,
          type: "checkbox",
          value: R.value,
          checked: C,
          disabled: $,
          onChange: (ee) => _(R.value, ee.target.checked),
          "aria-describedby": R.hint ? `${j}-hint` : k,
          ...R.conditional && {
            "aria-controls": L,
            "aria-expanded": C ? "true" : "false"
          },
          ...R.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: j, children: R.text }),
      R.hint && /* @__PURE__ */ n.jsx("div", { id: `${j}-hint`, className: "nhsuk-checkboxes__hint", children: R.hint }),
      R.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: Q("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !C
          }),
          id: L,
          children: typeof R.conditional == "object" && R.conditional !== null && "label" in R.conditional && "id" in R.conditional && "name" in R.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            R.conditional.label && /* @__PURE__ */ n.jsx(_r, { htmlFor: R.conditional.id, children: R.conditional.label }),
            /* @__PURE__ */ n.jsx(vr, { ...R.conditional })
          ] }) : R.conditional
        }
      )
    ] }, R.value);
  }), p = Q(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": d
    },
    c
  ), F = Q("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: F, ...b, ...g, children: /* @__PURE__ */ n.jsxs(
    kr,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: k,
      ...m,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: q, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: E, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: p, children: M() })
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
  maxLength: g,
  minLength: T,
  wrap: y = "soft",
  resize: v = "vertical",
  autoComplete: q,
  spellCheck: E,
  onChange: k,
  onBlur: _,
  onFocus: M,
  onKeyDown: p,
  ...F
}) => {
  const R = Q(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": c,
      [`nhsuk-textarea--resize-${v}`]: v !== "vertical"
    },
    u
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: R,
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
      maxLength: g,
      minLength: T,
      wrap: y,
      autoComplete: q,
      spellCheck: E,
      onChange: k,
      onBlur: _,
      onFocus: M,
      onKeyDown: p,
      ...F
    }
  );
}, Ca = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = Q("nhsuk-hint", t);
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
  const [b, g] = ge(s), [T, y] = ge(0), [v, q] = ge(!1), [E, k] = ge(!1), _ = ne((j) => r ? j.trim() === "" ? 0 : j.trim().split(/\s+/).length : j.length, [r]);
  _e(() => {
    const j = _(b), L = t || r || 0, C = L - j, $ = Math.floor(L * (a / 100));
    y(C), q(j > L), k(j >= $ || j > L), d && d(j, C);
  }, [b, t, r, a, _, d]);
  const M = (j) => {
    const L = j.target.value;
    g(L), u && u(j);
  }, p = () => {
    const j = t || r || 0, L = r ? "word" : "character", C = r ? "words" : "characters";
    if (!E)
      return `You can enter up to ${j} ${j === 1 ? L : C}`;
    if (v) {
      const $ = Math.abs(T);
      return `You have ${$} ${$ === 1 ? L : C} too many`;
    } else
      return `You have ${T} ${T === 1 ? L : C} remaining`;
  }, F = Q(
    "nhsuk-character-count",
    l
  ), R = Q(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !E,
      "nhsuk-error-message": v
    },
    c?.classes
  ), N = Q(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": v
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: F,
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
            className: N,
            onChange: M,
            "aria-describedby": `${e}-info`,
            "aria-invalid": v || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          Ca,
          {
            id: `${e}-info`,
            className: R,
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
  const i = Q(
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
  options: g,
  children: T,
  onChange: y,
  onBlur: v,
  onFocus: q,
  ...E
}) => {
  const k = Q(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    d
  ), _ = () => g ? g.map((p, F) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: p.value,
      disabled: p.disabled,
      "data-initial-selected": p.selected || void 0,
      children: p.text
    },
    `${p.value}-${F}`
  )) : null, M = o === void 0 && a === void 0 && g ? g.find((p) => p.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: k,
      id: e,
      name: t,
      "aria-label": r,
      value: a,
      defaultValue: o !== void 0 ? o : M,
      disabled: s,
      required: i,
      "aria-describedby": c,
      multiple: u,
      size: m,
      autoComplete: b,
      onChange: y,
      onBlur: v,
      onFocus: q,
      ...E,
      children: T || _()
    }
  );
}, ja = vo;
ja.Option = yo;
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
  const [g, T] = ge(t || r || ""), y = xe([]), v = Q(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    s
  ), q = (k) => {
    const _ = k.target.value;
    T(_), d && d(k);
  }, E = ne((k) => {
    const { key: _ } = k;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(_)) return;
    k.preventDefault();
    const M = y.current.filter((N) => N && !N.disabled), p = M.indexOf(k.currentTarget);
    if (p === -1) return;
    let F = p;
    _ === "ArrowDown" || _ === "ArrowRight" ? F = (p + 1) % M.length : (_ === "ArrowUp" || _ === "ArrowLeft") && (F = (p - 1 + M.length) % M.length);
    const R = M[F];
    R && (R.focus(), R.checked || R.click());
  }, []);
  return /* @__PURE__ */ n.jsx(kr, { children: /* @__PURE__ */ n.jsx("div", { className: v, ...b, children: c.map((k, _) => {
    const M = `${e}-${_}`, p = k.conditional ? `${M}-conditional` : void 0, F = g === k.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: M,
          name: e,
          type: "radio",
          value: k.value,
          disabled: k.disabled,
          checked: F,
          "aria-describedby": o,
          onChange: q,
          onBlur: u,
          onFocus: m,
          onKeyDown: E,
          ref: (R) => {
            R && (y.current[_] = R);
          }
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: M, children: k.text }),
      k.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: k.hint }),
      k.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: Q("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !F
          }),
          id: p,
          children: typeof k.conditional == "object" && k.conditional !== null && "label" in k.conditional && "id" in k.conditional && "name" in k.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            k.conditional.label && /* @__PURE__ */ n.jsx(_r, { htmlFor: k.conditional.id, children: k.conditional.label }),
            /* @__PURE__ */ n.jsx(vr, { ...k.conditional })
          ] }) : k.conditional
        }
      )
    ] }, k.value);
  }) }) });
}, Na = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...o
}) => {
  const s = Q(
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
  const a = Q("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: e });
}, wr = ({
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
  const d = Q(
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
  const o = Fe.Children.toArray(e)[0], s = Fe.isValidElement(o) && (o.type === Rt || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Na, { className: t, ...r, children: s ? e : /* @__PURE__ */ n.jsx(Rt, { children: e }) });
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
  const c = i || (t === "number" ? "ol" : "ul"), d = Q(
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
  const a = Q("nhsuk-list__item", t);
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
], Ta = ({
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
}, et = ({
  level: e,
  className: t,
  text: r,
  html: a,
  children: o,
  size: s,
  marginBottom: i,
  ...l
}) => {
  const d = e ?? ((T) => {
    switch (T) {
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
  })(s), u = Q(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${s}`]: s
    },
    t
  ), m = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), b = `h${d}`, g = i ? { ...l.style, marginBottom: i } : l.style;
  return ka(
    b,
    { className: u, ...l, style: g },
    m
  );
}, Or = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...o
}) => {
  const s = Q("nhsuk-error-message", t);
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
  _e(() => {
    c.current && c.current.focus();
  }, []);
  const d = Q(
    "nhsuk-error-summary",
    s
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, m = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, b = (g) => {
    const T = g.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
    return g.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: g.href,
        ...g.attributes,
        children: T
      }
    ) : T;
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
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((g, T) => /* @__PURE__ */ n.jsx("li", { children: b(g) }, T)) })
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
  })), [b, g] = ge({}), T = (U) => U % 4 === 0 && U % 100 !== 0 || U % 400 === 0, y = (U, D) => {
    const se = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return U === 2 && T(D) ? 29 : se[U - 1];
  }, v = (U, D, se) => {
    if (!U) return;
    if (!/^\d+$/.test(U)) return "Day must be a number";
    const ie = parseInt(U, 10);
    if (ie < 1 || ie > 31) return "Day must be between 1 and 31";
    if (D && se) {
      const ce = parseInt(D, 10), S = parseInt(se, 10);
      if (!isNaN(ce) && !isNaN(S) && ce >= 1 && ce <= 12) {
        const J = y(ce, S);
        if (ie > J)
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
          ][ce - 1]} ${S} only has ${J} days`;
      }
    }
  }, q = (U) => {
    if (!U) return;
    if (!/^\d+$/.test(U)) return "Month must be a number";
    const D = parseInt(U, 10);
    if (D < 1 || D > 12) return "Month must be between 1 and 12";
  }, E = (U) => {
    if (!U) return;
    if (!/^\d+$/.test(U)) return "Year must be a number";
    const D = parseInt(U, 10), se = (/* @__PURE__ */ new Date()).getFullYear();
    if (D < 1900 || D > se + 10)
      return `Year must be between 1900 and ${se + 10}`;
  }, k = (U, D, se) => {
    if (!U || !D || !se) return;
    const ie = parseInt(U, 10), ce = parseInt(D, 10), S = parseInt(se, 10);
    if (isNaN(ie) || isNaN(ce) || isNaN(S) || ce < 1 || ce > 12 || S < 1900) return;
    const J = y(ce, S);
    ie < 1 || ie > J;
  }, _ = ne((U, D) => {
    const se = {
      ...u,
      [U]: D
    };
    m(se), c && c(se);
  }, [u, c]), M = ne((U) => {
    const D = u[U];
    let se;
    if (U === "day")
      se = v(D, u.month, u.year);
    else if (U === "month") {
      if (se = q(D), !se && u.day) {
        const ie = v(u.day, D, u.year);
        g((ce) => ({
          ...ce,
          day: ie
        }));
      }
    } else if (U === "year" && (se = E(D), !se && u.day && u.month)) {
      const ie = v(u.day, u.month, D);
      g((ce) => ({
        ...ce,
        day: ie
      }));
    }
    if (g((ie) => ({
      ...ie,
      [U]: se
    })), u.day && u.month && u.year) {
      const ie = k(
        U === "day" ? D : u.day,
        U === "month" ? D : u.month,
        U === "year" ? D : u.year
      );
      ie && g((ce) => ({
        ...ce,
        day: ie
      }));
    }
  }, [u, v, q, E, k]), p = ke(() => [
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
  ], []), F = r || p;
  let R = s?.describedBy || "";
  const N = i ? `${e}-hint` : "", j = l ? `${e}-error` : "";
  N && (R = R ? `${R} ${N}` : N), j && (R = R ? `${R} ${j}` : j);
  const L = Object.values(b).some((U) => U), C = Q(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || L
    }
  ), $ = Q(
    "nhsuk-date-input",
    t
  ), ee = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Ca,
      {
        id: N,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      Or,
      {
        id: j,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(b).map(
      ([U, D]) => D ? /* @__PURE__ */ n.jsxs(
        Or,
        {
          id: `${e}-${U}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            D
          ]
        },
        `${U}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: $, id: e, "data-testid": "date-input", ...d, children: F.map((U) => {
      const D = U.id || `${e}-${U.name}`, se = a ? `${a}[${U.name}]` : U.name, ie = U.label || U.name.charAt(0).toUpperCase() + U.name.slice(1), ce = b[U.name], S = u[U.name] || "";
      let J = R;
      if (ce) {
        const P = `${e}-${U.name}-error`;
        J = J ? `${J} ${P}` : P;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          _r,
          {
            htmlFor: D,
            className: "nhsuk-date-input__label",
            children: ie
          }
        ),
        /* @__PURE__ */ n.jsx(
          vr,
          {
            id: D,
            name: se,
            value: S,
            className: Q("nhsuk-date-input__input", U.classes, {
              "nhsuk-input--error": ce
            }),
            inputMode: U.inputmode,
            autoComplete: U.autocomplete,
            pattern: U.pattern,
            "aria-describedby": J || void 0,
            hasError: !!ce,
            onChange: (P) => _(U.name, P.target.value),
            onBlur: () => M(U.name)
          }
        )
      ] }, U.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: C, children: s ? /* @__PURE__ */ n.jsx(
    kr,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: R || void 0,
      children: ee()
    }
  ) : ee() });
}, Da = {
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
}, Ia = oo(Da), Co = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Da, ...t };
  return /* @__PURE__ */ n.jsx(Ia.Provider, { value: r, children: e });
}, Lf = () => {
  const e = so(Ia);
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
const Ef = ({ children: e, theme: t }) => (_e(() => {
  No();
}, []), /* @__PURE__ */ n.jsx(Co, { theme: t, children: e })), Ra = ({
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
  results: g = [],
  formAttributes: T = {},
  inputAttributes: y = {},
  buttonAttributes: v = {},
  preventDefaultSubmit: q = !1,
  debounceMs: E = 300,
  minQueryLength: k = 1
}) => {
  const [_, M] = ge(""), [p, F] = ge(!1), R = xe(void 0), N = xe(null), j = xe(null), L = e === "controlled" && o !== void 0, C = L ? o : _, $ = ne((H) => {
    R.current && clearTimeout(R.current), R.current = setTimeout(() => {
      u.onChange && H.length >= k && u.onChange(H);
    }, E);
  }, [u.onChange, E, k]), ee = ne((H) => {
    const O = H.target.value;
    L || M(O), e !== "form" && $(O);
  }, [L, e, $]), U = ne((H) => {
    const O = C.trim(), le = {
      query: O,
      timestamp: Date.now(),
      formData: new FormData(H.currentTarget)
    };
    e === "controlled" || e === "hybrid" && q ? (H.preventDefault(), u.onSearch && O.length >= k && u.onSearch(le)) : e === "hybrid" && u.onSearch && O.length >= k && u.onSearch(le);
  }, [e, C, u.onSearch, q, k]), D = ne(() => {
    F(!0), u.onFocus?.();
  }, [u.onFocus]), se = ne(() => {
    F(!1), u.onBlur?.();
  }, [u.onBlur]), ie = ne(() => {
    L || M(""), u.onClear?.(), j.current?.focus();
  }, [L, u.onClear]);
  _e(() => () => {
    R.current && clearTimeout(R.current);
  }, []);
  const ce = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: Q("nhsuk-icon nhsuk-icon__search", {
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
  ), J = () => !C || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ie,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), P = () => !b || !g.length || !p ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: g.map((H) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: H.href ? /* @__PURE__ */ n.jsxs("a", { href: H.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: H.title }),
    H.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: H.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => u.onSearch?.({ query: H.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: H.title }),
        H.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: H.description })
      ]
    }
  ) }, H.id)) });
  return /* @__PURE__ */ n.jsxs("div", { className: Q("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": m,
    "nhsuk-header__search--focused": p,
    "nhsuk-header__search--has-results": b && g.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: N,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        role: "search",
        onSubmit: U,
        ...T,
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
                ref: j,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: C,
                onChange: ee,
                onFocus: D,
                onBlur: se,
                disabled: d || m,
                ...b && g.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...y
              }
            ),
            J()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: d || m || e !== "form" && C.length < k,
              ...v,
              children: [
                m ? S() : ce(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: m ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    P()
  ] });
}, Ba = ({
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
  const [m, b] = ge(!1), [g, T] = ge(!1), [y, v] = ge(i?.items?.length || 0), [q, E] = ge(!1), [k, _] = ge(!1), [M, p] = ge(!1), F = xe(null), R = xe(null), N = xe(!1), j = xe(null), L = xe([]), C = xe(null);
  _e(() => {
    typeof window > "u" || (p(!0), E(!0));
  }, []), _e(() => {
    if (!M || !i?.items?.length) return;
    L.current = i.items;
    const V = setTimeout(() => {
      F.current && R.current && ie();
    }, 100);
    return () => clearTimeout(V);
  }, [M, i?.items]);
  const $ = r.href && !t.href || r.href && r.href === t.href, ee = $ ? r.href : t.href, U = Q(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), D = Q(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), se = Q(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), ie = ne(() => {
    if (!(typeof window > "u" || N.current) && !(!F.current || !R.current || !L.current.length)) {
      N.current = !0;
      try {
        const V = R.current, te = F.current, G = V.offsetWidth, z = te.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (z.length === 0 || G === 0) {
          N.current = !1;
          return;
        }
        const ae = window.innerWidth < 768, de = ae ? 16 : 32, h = de * 2, W = G - h, Z = Array.from(z).map((x) => x.offsetWidth), oe = Z.reduce((x, w) => x + w, 0), re = ae ? 80 : 100, f = C.current !== null && C.current !== ae;
        if (C.current = ae, console.log("Overflow check:", {
          containerWidth: G,
          availableContainerWidth: W,
          totalGutters: h,
          gutterSize: de,
          totalWidth: oe,
          mobile: ae,
          breakpointChanged: f,
          itemCount: Z.length,
          measurements: Z
        }), oe <= W)
          T(!1), v(L.current.length);
        else {
          const x = W - re;
          let w = 0, B = 0;
          for (let I = 0; I < Z.length; I++) {
            const Y = B + Z[I];
            if (Y <= x)
              B = Y, w = I + 1;
            else
              break;
          }
          w = Math.max(1, w);
          const A = w < Z.length;
          T(A), v(w);
        }
        N.current = !1;
      } catch (V) {
        console.error("Overflow detection error:", V), T(!1), v(L.current.length), N.current = !1;
      }
    }
  }, []);
  _e(() => {
    if (typeof document > "u") return;
    const V = (te) => {
      te.key === "Escape" && m && b(!1);
    };
    if (m)
      return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
  }, [m]), _e(() => {
    if (typeof window > "u" || !M) return;
    const V = () => {
      m && (b(!1), _(!1)), j.current && clearTimeout(j.current), j.current = setTimeout(() => {
        L.current.length > 0 && ie();
      }, 250);
    };
    let te = null, G = null;
    return window.matchMedia && (te = window.matchMedia("(max-width: 767px)"), G = () => {
      L.current.length > 0 && setTimeout(() => ie(), 50);
    }, te.addEventListener ? te.addEventListener("change", G) : te.addListener(G)), window.addEventListener("resize", V), () => {
      window.removeEventListener("resize", V), te && G && (te.removeEventListener ? te.removeEventListener("change", G) : te.removeListener(G)), j.current && clearTimeout(j.current);
    };
  }, [M, m, ie]), _e(() => {
    if (typeof document > "u") return;
    const V = (te) => {
      const G = te.target, z = F.current?.contains(G);
      m && !z && b(!1);
    };
    if (m)
      return document.addEventListener("mousedown", V), () => document.removeEventListener("mousedown", V);
  }, [m]);
  const ce = (V) => {
    V && (V.preventDefault(), V.stopPropagation());
    const te = !m;
    b(te), te ? setTimeout(() => {
      _(!0);
    }, 50) : _(!1);
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
  ), J = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : S(), P = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, H = (V, te) => V ? te ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: te, children: V }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: V }) : null, O = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), le = (V) => {
    if (V.active || V.current) {
      const te = V.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: V.html } }) : V.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: te });
    }
    return V.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: V.html } }) : V.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: U,
      role: "banner",
      "data-module": "nhsuk-header",
      ...d,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: D, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            ee ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: ee, children: [
              J(),
              P(),
              $ && H(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              J(),
              P(),
              $ && H(r.text)
            ] }),
            r.text && !$ && H(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx(Ra, { ...o }),
          /* @__PURE__ */ n.jsx(
            yr,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: se,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: Q(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !q && M,
                    "nhsuk-header__navigation-container--ssr": !M
                  },
                  l
                ),
                ref: R,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: F, children: [
                  (M ? i.items.slice(0, y) : i.items).map((V, te) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: Q(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": V.active || V.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !M && te >= 4
                          // Mark items that would be hidden on client
                        },
                        V.className
                      ),
                      ...V.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: V.href,
                          ...V.active || V.current ? {
                            "aria-current": V.current ? "page" : "true"
                          } : {},
                          children: le(V)
                        }
                      )
                    },
                    te
                  )),
                  M && g && y < i.items.length && /* @__PURE__ */ n.jsx(
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
        M && i && i.items && i.items.length > 0 && m && k && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !k,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(y).map((V, te) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: Q(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": V.active || V.current
                  }
                ),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: V.href,
                    ...V.active || V.current ? {
                      "aria-current": V.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      b(!1), _(!1);
                    },
                    children: le(V)
                  }
                )
              },
              `overflow-${y + te}`
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
  const m = r.href && !t.href || r.href && r.href === t.href, b = m ? r.href : t.href, g = Q(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), T = Q(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), y = Q(
    "nhsuk-header__navigation",
    i?.className
  ), v = () => /* @__PURE__ */ n.jsxs(
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
  ) : v(), E = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, k = (p, F) => p ? F ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: F, children: p }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: p }) : null, _ = () => !i?.items || i.items.length === 0 ? null : i.items.map((p, F) => /* @__PURE__ */ n.jsx(
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
    p.href || F
  )), M = () => o ? /* @__PURE__ */ n.jsx(Ra, { ...o }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: g,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...d,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: T, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            b ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: b, children: [
              q(),
              E(),
              m && k(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              q(),
              E(),
              m && k(r.text)
            ] }),
            r.text && !m && k(r.text, r.href)
          ] }),
          (c === "organisation" || a) && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            a && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name", children: a.name }),
              a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: a.descriptor })
            ] }),
            M()
          ] }),
          c !== "organisation" && !a && M(),
          /* @__PURE__ */ n.jsx(
            yr,
            {
              ...s,
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
                children: _()
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
  const b = r.href && !t.href || r.href && r.href === t.href, g = b ? r.href : t.href, T = Q(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), y = Q(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), v = Q(
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
  ), E = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : q(), k = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, _ = (p, F) => p ? F ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: F, children: p }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: p }) : null, M = (p) => {
    if (p.active || p.current) {
      const F = p.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: p.html } }) : p.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: F });
    }
    return p.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: p.html } }) : p.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: T,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...d,
      ...m,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: y, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            g ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: g, children: [
              E(),
              k(),
              b && _(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              E(),
              k(),
              b && _(r.text)
            ] }),
            r.text && !b && _(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            yr,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: v,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: Q(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, u).map((p, F) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: Q(
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
                          children: M(p)
                        }
                      )
                    },
                    F
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(u).map((p, F) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: Q(
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
                            children: M(p)
                          }
                        )
                      },
                      `overflow-${u + F}`
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
  ].filter(Boolean).join(" "), g = c || e || a || o, T = () => {
    if (!e) return null;
    const y = { className: b };
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
      className: u,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...d,
      children: [
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: g && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          T(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && g && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          T(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
To.displayName = "Hero";
const Fa = ({
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
  const m = (g, T = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: Q("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": T
      }),
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: g.URL,
          target: g.newWindow ? "_blank" : void 0,
          rel: g.newWindow ? "noopener noreferrer" : void 0,
          children: g.label
        }
      )
    },
    `${g.URL}-${g.label}`
  ), b = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...c }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: Q("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: Q("nhsuk-footer", e), style: d, children: b ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((g) => m(g)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((g) => m(g)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((g) => m(g)) }),
              o && o.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((g) => m(g)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((g) => m(g, !0)),
              (r || []).map((g) => m(g, !0)),
              (a || []).map((g) => m(g, !0)),
              (o || []).map((g) => m(g, !0))
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
function Sr(e) {
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
const Bo = Sr(Wt), Fo = Bo.right;
Sr(Ro).center;
const Lo = Math.sqrt(50), Eo = Math.sqrt(10), Mo = Math.sqrt(2);
function La(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Lo ? 10 : s >= Eo ? 5 : s >= Mo ? 2 : 1;
  let l, c, d;
  return o < 0 ? (d = Math.pow(10, -o) / i, l = Math.round(e * d), c = Math.round(t * d), l / d < e && ++l, c / d > t && --c, d = -d) : (d = Math.pow(10, o) * i, l = Math.round(e / d), c = Math.round(t / d), l * d < e && ++l, c * d > t && --c), c < l && 0.5 <= r && r < 2 ? La(e, t, r * 2) : [l, c, d];
}
function Ur(e, t, r) {
  return t = +t, e = +e, r = +r, La(e, t, r)[2];
}
function Gr(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? Ur(t, e, r) : Ur(e, t, r);
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
function Cr(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Ea(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function Et() {
}
var Bt = 0.7, Ot = 1 / Bt, xt = "\\s*([+-]?\\d+)\\s*", Ft = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", He = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ao = /^#([0-9a-f]{3,8})$/, Ho = new RegExp(`^rgb\\(${xt},${xt},${xt}\\)$`), Po = new RegExp(`^rgb\\(${He},${He},${He}\\)$`), zo = new RegExp(`^rgba\\(${xt},${xt},${xt},${Ft}\\)$`), Wo = new RegExp(`^rgba\\(${He},${He},${He},${Ft}\\)$`), Oo = new RegExp(`^hsl\\(${Ft},${He},${He}\\)$`), Uo = new RegExp(`^hsla\\(${Ft},${He},${He},${Ft}\\)$`), Vr = {
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
Cr(Et, Lt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Yr,
  // Deprecated! Use color.formatHex.
  formatHex: Yr,
  formatHex8: Go,
  formatHsl: Vo,
  formatRgb: qr,
  toString: qr
});
function Yr() {
  return this.rgb().formatHex();
}
function Go() {
  return this.rgb().formatHex8();
}
function Vo() {
  return Ma(this).formatHsl();
}
function qr() {
  return this.rgb().formatRgb();
}
function Lt(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Ao.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Kr(t) : r === 3 ? new Ie(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Ht(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Ht(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ho.exec(e)) ? new Ie(t[1], t[2], t[3], 1) : (t = Po.exec(e)) ? new Ie(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = zo.exec(e)) ? Ht(t[1], t[2], t[3], t[4]) : (t = Wo.exec(e)) ? Ht(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Oo.exec(e)) ? Xr(t[1], t[2] / 100, t[3] / 100, 1) : (t = Uo.exec(e)) ? Xr(t[1], t[2] / 100, t[3] / 100, t[4]) : Vr.hasOwnProperty(e) ? Kr(Vr[e]) : e === "transparent" ? new Ie(NaN, NaN, NaN, 0) : null;
}
function Kr(e) {
  return new Ie(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ht(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new Ie(e, t, r, a);
}
function Yo(e) {
  return e instanceof Et || (e = Lt(e)), e ? (e = e.rgb(), new Ie(e.r, e.g, e.b, e.opacity)) : new Ie();
}
function Vn(e, t, r, a) {
  return arguments.length === 1 ? Yo(e) : new Ie(e, t, r, a ?? 1);
}
function Ie(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
Cr(Ie, Vn, Ea(Et, {
  brighter(e) {
    return e = e == null ? Ot : Math.pow(Ot, e), new Ie(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Bt : Math.pow(Bt, e), new Ie(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ie(ct(this.r), ct(this.g), ct(this.b), Ut(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Zr,
  // Deprecated! Use color.formatHex.
  formatHex: Zr,
  formatHex8: qo,
  formatRgb: Jr,
  toString: Jr
}));
function Zr() {
  return `#${lt(this.r)}${lt(this.g)}${lt(this.b)}`;
}
function qo() {
  return `#${lt(this.r)}${lt(this.g)}${lt(this.b)}${lt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Jr() {
  const e = Ut(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ct(this.r)}, ${ct(this.g)}, ${ct(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ut(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ct(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function lt(e) {
  return e = ct(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Xr(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new $e(e, t, r, a);
}
function Ma(e) {
  if (e instanceof $e) return new $e(e.h, e.s, e.l, e.opacity);
  if (e instanceof Et || (e = Lt(e)), !e) return new $e();
  if (e instanceof $e) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new $e(i, l, c, e.opacity);
}
function Ko(e, t, r, a) {
  return arguments.length === 1 ? Ma(e) : new $e(e, t, r, a ?? 1);
}
function $e(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
Cr($e, Ko, Ea(Et, {
  brighter(e) {
    return e = e == null ? Ot : Math.pow(Ot, e), new $e(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Bt : Math.pow(Bt, e), new $e(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new Ie(
      $n(e >= 240 ? e - 240 : e + 120, o, a),
      $n(e, o, a),
      $n(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new $e(Qr(this.h), Pt(this.s), Pt(this.l), Ut(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ut(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Qr(this.h)}, ${Pt(this.s) * 100}%, ${Pt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Qr(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Pt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function $n(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const jr = (e) => () => e;
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
  return (e = +e) == 1 ? $a : function(t, r) {
    return r - t ? Jo(t, r, e) : jr(isNaN(t) ? r : t);
  };
}
function $a(e, t) {
  var r = t - e;
  return r ? Zo(e, r) : jr(isNaN(e) ? t : e);
}
const ea = (function e(t) {
  var r = Xo(t);
  function a(o, s) {
    var i = r((o = Vn(o)).r, (s = Vn(s)).r), l = r(o.g, s.g), c = r(o.b, s.b), d = $a(o.opacity, s.opacity);
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
  for (i = 0; i < a; ++i) o[i] = Nr(e[i], t[i]);
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
    o in e ? r[o] = Nr(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var Yn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, An = new RegExp(Yn.source, "g");
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
  var r = Yn.lastIndex = An.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = Yn.exec(e)) && (o = An.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: Gt(a, o) })), r = An.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? si(c[0].x) : ai(t) : (t = c.length, function(d) {
    for (var u = 0, m; u < t; ++u) l[(m = c[u]).i] = m.x(d);
    return l.join("");
  });
}
function Nr(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? jr(t) : (r === "number" ? Gt : r === "string" ? (a = Lt(t)) ? (t = a, ea) : oi : t instanceof Lt ? ea : t instanceof Date ? ni : ei(t) ? Qo : Array.isArray(t) ? ti : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ri : Gt)(e, t);
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
var ta = [0, 1];
function gt(e) {
  return e;
}
function qn(e, t) {
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
  return o < a ? (a = qn(o, a), s = r(i, s)) : (a = qn(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function hi(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = qn(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = Fo(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function fi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function mi() {
  var e = ta, t = ta, r = Nr, a, o, s, i = gt, l, c, d;
  function u() {
    var b = Math.min(e.length, t.length);
    return i !== gt && (i = di(e[0], e[b - 1])), l = b > 2 ? hi : ui, c = d = null, m;
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
    return arguments.length ? (i = b ? !0 : gt, u()) : i !== gt;
  }, m.interpolate = function(b) {
    return arguments.length ? (r = b, u()) : r;
  }, m.unknown = function(b) {
    return arguments.length ? (s = b, m) : s;
  }, function(b, g) {
    return a = b, o = g, u();
  };
}
function pi() {
  return mi()(gt, gt);
}
function gi(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const Hn = /* @__PURE__ */ new Date(), Pn = /* @__PURE__ */ new Date();
function Ce(e, t, r, a) {
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
  }, o.filter = (s) => Ce((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), r && (o.count = (s, i) => (Hn.setTime(+s), Pn.setTime(+i), e(Hn), e(Pn), Math.floor(r(Hn, Pn))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const Vt = Ce(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Vt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ce((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Vt);
Vt.range;
const Je = 1e3, Le = Je * 60, Xe = Le * 60, tt = Xe * 24, Tr = tt * 7, na = tt * 30, zn = tt * 365, bt = Ce((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Je);
}, (e, t) => (t - e) / Je, (e) => e.getUTCSeconds());
bt.range;
const Dr = Ce((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Je);
}, (e, t) => {
  e.setTime(+e + t * Le);
}, (e, t) => (t - e) / Le, (e) => e.getMinutes());
Dr.range;
const bi = Ce((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Le);
}, (e, t) => (t - e) / Le, (e) => e.getUTCMinutes());
bi.range;
const Ir = Ce((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Je - e.getMinutes() * Le);
}, (e, t) => {
  e.setTime(+e + t * Xe);
}, (e, t) => (t - e) / Xe, (e) => e.getHours());
Ir.range;
const xi = Ce((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Xe);
}, (e, t) => (t - e) / Xe, (e) => e.getUTCHours());
xi.range;
const Mt = Ce(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Le) / tt,
  (e) => e.getDate() - 1
);
Mt.range;
const Rr = Ce((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / tt, (e) => e.getUTCDate() - 1);
Rr.range;
const yi = Ce((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / tt, (e) => Math.floor(e / tt));
yi.range;
function ut(e) {
  return Ce((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Le) / Tr);
}
const Sn = ut(0), Yt = ut(1), vi = ut(2), _i = ut(3), yt = ut(4), ki = ut(5), wi = ut(6);
Sn.range;
Yt.range;
vi.range;
_i.range;
yt.range;
ki.range;
wi.range;
function ht(e) {
  return Ce((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Tr);
}
const Aa = ht(0), qt = ht(1), Si = ht(2), Ci = ht(3), vt = ht(4), ji = ht(5), Ni = ht(6);
Aa.range;
qt.range;
Si.range;
Ci.range;
vt.range;
ji.range;
Ni.range;
const Br = Ce((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Br.range;
const Ti = Ce((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Ti.range;
const nt = Ce((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
nt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ce((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
nt.range;
const dt = Ce((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
dt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ce((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
dt.range;
function Di(e, t, r, a, o, s) {
  const i = [
    [bt, 1, Je],
    [bt, 5, 5 * Je],
    [bt, 15, 15 * Je],
    [bt, 30, 30 * Je],
    [s, 1, Le],
    [s, 5, 5 * Le],
    [s, 15, 15 * Le],
    [s, 30, 30 * Le],
    [o, 1, Xe],
    [o, 3, 3 * Xe],
    [o, 6, 6 * Xe],
    [o, 12, 12 * Xe],
    [a, 1, tt],
    [a, 2, 2 * tt],
    [r, 1, Tr],
    [t, 1, na],
    [t, 3, 3 * na],
    [e, 1, zn]
  ];
  function l(d, u, m) {
    const b = u < d;
    b && ([d, u] = [u, d]);
    const g = m && typeof m.range == "function" ? m : c(d, u, m), T = g ? g.range(d, +u + 1) : [];
    return b ? T.reverse() : T;
  }
  function c(d, u, m) {
    const b = Math.abs(u - d) / m, g = Sr(([, , v]) => v).right(i, b);
    if (g === i.length) return e.every(Gr(d / zn, u / zn, m));
    if (g === 0) return Vt.every(Math.max(Gr(d, u, m), 1));
    const [T, y] = i[b / i[g - 1][2] < i[g][2] / b ? g - 1 : g];
    return T.every(y);
  }
  return [l, c];
}
const [Ii, Ri] = Di(nt, Br, Sn, Mt, Ir, Dr);
function Wn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function On(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Tt(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Bi(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, d = Dt(o), u = It(o), m = Dt(s), b = It(s), g = Dt(i), T = It(i), y = Dt(l), v = It(l), q = Dt(c), E = It(c), k = {
    a: se,
    A: ie,
    b: ce,
    B: S,
    c: null,
    d: la,
    e: la,
    f: tl,
    g: ul,
    G: fl,
    H: Xi,
    I: Qi,
    j: el,
    L: Ha,
    m: nl,
    M: rl,
    p: J,
    q: P,
    Q: ua,
    s: ha,
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
    "%": da
  }, _ = {
    a: H,
    A: O,
    b: le,
    B: V,
    c: null,
    d: ca,
    e: ca,
    f: xl,
    g: Tl,
    G: Il,
    H: pl,
    I: gl,
    j: bl,
    L: za,
    m: yl,
    M: vl,
    p: te,
    q: G,
    Q: ua,
    s: ha,
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
    "%": da
  }, M = {
    a: j,
    A: L,
    b: C,
    B: $,
    c: ee,
    d: oa,
    e: oa,
    f: qi,
    g: sa,
    G: aa,
    H: ia,
    I: ia,
    j: Ui,
    L: Yi,
    m: Oi,
    M: Gi,
    p: N,
    q: Wi,
    Q: Zi,
    s: Ji,
    S: Vi,
    u: $i,
    U: Ai,
    V: Hi,
    w: Mi,
    W: Pi,
    x: U,
    X: D,
    y: sa,
    Y: aa,
    Z: zi,
    "%": Ki
  };
  k.x = p(r, k), k.X = p(a, k), k.c = p(t, k), _.x = p(r, _), _.X = p(a, _), _.c = p(t, _);
  function p(z, ae) {
    return function(de) {
      var h = [], W = -1, Z = 0, oe = z.length, re, f, x;
      for (de instanceof Date || (de = /* @__PURE__ */ new Date(+de)); ++W < oe; )
        z.charCodeAt(W) === 37 && (h.push(z.slice(Z, W)), (f = ra[re = z.charAt(++W)]) != null ? re = z.charAt(++W) : f = re === "e" ? " " : "0", (x = ae[re]) && (re = x(de, f)), h.push(re), Z = W + 1);
      return h.push(z.slice(Z, W)), h.join("");
    };
  }
  function F(z, ae) {
    return function(de) {
      var h = Tt(1900, void 0, 1), W = R(h, z, de += "", 0), Z, oe;
      if (W != de.length) return null;
      if ("Q" in h) return new Date(h.Q);
      if ("s" in h) return new Date(h.s * 1e3 + ("L" in h ? h.L : 0));
      if (ae && !("Z" in h) && (h.Z = 0), "p" in h && (h.H = h.H % 12 + h.p * 12), h.m === void 0 && (h.m = "q" in h ? h.q : 0), "V" in h) {
        if (h.V < 1 || h.V > 53) return null;
        "w" in h || (h.w = 1), "Z" in h ? (Z = On(Tt(h.y, 0, 1)), oe = Z.getUTCDay(), Z = oe > 4 || oe === 0 ? qt.ceil(Z) : qt(Z), Z = Rr.offset(Z, (h.V - 1) * 7), h.y = Z.getUTCFullYear(), h.m = Z.getUTCMonth(), h.d = Z.getUTCDate() + (h.w + 6) % 7) : (Z = Wn(Tt(h.y, 0, 1)), oe = Z.getDay(), Z = oe > 4 || oe === 0 ? Yt.ceil(Z) : Yt(Z), Z = Mt.offset(Z, (h.V - 1) * 7), h.y = Z.getFullYear(), h.m = Z.getMonth(), h.d = Z.getDate() + (h.w + 6) % 7);
      } else ("W" in h || "U" in h) && ("w" in h || (h.w = "u" in h ? h.u % 7 : "W" in h ? 1 : 0), oe = "Z" in h ? On(Tt(h.y, 0, 1)).getUTCDay() : Wn(Tt(h.y, 0, 1)).getDay(), h.m = 0, h.d = "W" in h ? (h.w + 6) % 7 + h.W * 7 - (oe + 5) % 7 : h.w + h.U * 7 - (oe + 6) % 7);
      return "Z" in h ? (h.H += h.Z / 100 | 0, h.M += h.Z % 100, On(h)) : Wn(h);
    };
  }
  function R(z, ae, de, h) {
    for (var W = 0, Z = ae.length, oe = de.length, re, f; W < Z; ) {
      if (h >= oe) return -1;
      if (re = ae.charCodeAt(W++), re === 37) {
        if (re = ae.charAt(W++), f = M[re in ra ? ae.charAt(W++) : re], !f || (h = f(z, de, h)) < 0) return -1;
      } else if (re != de.charCodeAt(h++))
        return -1;
    }
    return h;
  }
  function N(z, ae, de) {
    var h = d.exec(ae.slice(de));
    return h ? (z.p = u.get(h[0].toLowerCase()), de + h[0].length) : -1;
  }
  function j(z, ae, de) {
    var h = g.exec(ae.slice(de));
    return h ? (z.w = T.get(h[0].toLowerCase()), de + h[0].length) : -1;
  }
  function L(z, ae, de) {
    var h = m.exec(ae.slice(de));
    return h ? (z.w = b.get(h[0].toLowerCase()), de + h[0].length) : -1;
  }
  function C(z, ae, de) {
    var h = q.exec(ae.slice(de));
    return h ? (z.m = E.get(h[0].toLowerCase()), de + h[0].length) : -1;
  }
  function $(z, ae, de) {
    var h = y.exec(ae.slice(de));
    return h ? (z.m = v.get(h[0].toLowerCase()), de + h[0].length) : -1;
  }
  function ee(z, ae, de) {
    return R(z, t, ae, de);
  }
  function U(z, ae, de) {
    return R(z, r, ae, de);
  }
  function D(z, ae, de) {
    return R(z, a, ae, de);
  }
  function se(z) {
    return i[z.getDay()];
  }
  function ie(z) {
    return s[z.getDay()];
  }
  function ce(z) {
    return c[z.getMonth()];
  }
  function S(z) {
    return l[z.getMonth()];
  }
  function J(z) {
    return o[+(z.getHours() >= 12)];
  }
  function P(z) {
    return 1 + ~~(z.getMonth() / 3);
  }
  function H(z) {
    return i[z.getUTCDay()];
  }
  function O(z) {
    return s[z.getUTCDay()];
  }
  function le(z) {
    return c[z.getUTCMonth()];
  }
  function V(z) {
    return l[z.getUTCMonth()];
  }
  function te(z) {
    return o[+(z.getUTCHours() >= 12)];
  }
  function G(z) {
    return 1 + ~~(z.getUTCMonth() / 3);
  }
  return {
    format: function(z) {
      var ae = p(z += "", k);
      return ae.toString = function() {
        return z;
      }, ae;
    },
    parse: function(z) {
      var ae = F(z += "", !1);
      return ae.toString = function() {
        return z;
      }, ae;
    },
    utcFormat: function(z) {
      var ae = p(z += "", _);
      return ae.toString = function() {
        return z;
      }, ae;
    },
    utcParse: function(z) {
      var ae = F(z += "", !0);
      return ae.toString = function() {
        return z;
      }, ae;
    }
  };
}
var ra = { "-": "", _: " ", 0: "0" }, je = /^\s*\d+/, Fi = /^%/, Li = /[\\^$*+?|[\]().{}]/g;
function ye(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function Ei(e) {
  return e.replace(Li, "\\$&");
}
function Dt(e) {
  return new RegExp("^(?:" + e.map(Ei).join("|") + ")", "i");
}
function It(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Mi(e, t, r) {
  var a = je.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function $i(e, t, r) {
  var a = je.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Ai(e, t, r) {
  var a = je.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function Hi(e, t, r) {
  var a = je.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Pi(e, t, r) {
  var a = je.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function aa(e, t, r) {
  var a = je.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function sa(e, t, r) {
  var a = je.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function zi(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Wi(e, t, r) {
  var a = je.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function Oi(e, t, r) {
  var a = je.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function oa(e, t, r) {
  var a = je.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Ui(e, t, r) {
  var a = je.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function ia(e, t, r) {
  var a = je.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Gi(e, t, r) {
  var a = je.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Vi(e, t, r) {
  var a = je.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Yi(e, t, r) {
  var a = je.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function qi(e, t, r) {
  var a = je.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Ki(e, t, r) {
  var a = Fi.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Zi(e, t, r) {
  var a = je.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Ji(e, t, r) {
  var a = je.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function la(e, t) {
  return ye(e.getDate(), t, 2);
}
function Xi(e, t) {
  return ye(e.getHours(), t, 2);
}
function Qi(e, t) {
  return ye(e.getHours() % 12 || 12, t, 2);
}
function el(e, t) {
  return ye(1 + Mt.count(nt(e), e), t, 3);
}
function Ha(e, t) {
  return ye(e.getMilliseconds(), t, 3);
}
function tl(e, t) {
  return Ha(e, t) + "000";
}
function nl(e, t) {
  return ye(e.getMonth() + 1, t, 2);
}
function rl(e, t) {
  return ye(e.getMinutes(), t, 2);
}
function al(e, t) {
  return ye(e.getSeconds(), t, 2);
}
function sl(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ol(e, t) {
  return ye(Sn.count(nt(e) - 1, e), t, 2);
}
function Pa(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? yt(e) : yt.ceil(e);
}
function il(e, t) {
  return e = Pa(e), ye(yt.count(nt(e), e) + (nt(e).getDay() === 4), t, 2);
}
function ll(e) {
  return e.getDay();
}
function cl(e, t) {
  return ye(Yt.count(nt(e) - 1, e), t, 2);
}
function dl(e, t) {
  return ye(e.getFullYear() % 100, t, 2);
}
function ul(e, t) {
  return e = Pa(e), ye(e.getFullYear() % 100, t, 2);
}
function hl(e, t) {
  return ye(e.getFullYear() % 1e4, t, 4);
}
function fl(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? yt(e) : yt.ceil(e), ye(e.getFullYear() % 1e4, t, 4);
}
function ml(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ye(t / 60 | 0, "0", 2) + ye(t % 60, "0", 2);
}
function ca(e, t) {
  return ye(e.getUTCDate(), t, 2);
}
function pl(e, t) {
  return ye(e.getUTCHours(), t, 2);
}
function gl(e, t) {
  return ye(e.getUTCHours() % 12 || 12, t, 2);
}
function bl(e, t) {
  return ye(1 + Rr.count(dt(e), e), t, 3);
}
function za(e, t) {
  return ye(e.getUTCMilliseconds(), t, 3);
}
function xl(e, t) {
  return za(e, t) + "000";
}
function yl(e, t) {
  return ye(e.getUTCMonth() + 1, t, 2);
}
function vl(e, t) {
  return ye(e.getUTCMinutes(), t, 2);
}
function _l(e, t) {
  return ye(e.getUTCSeconds(), t, 2);
}
function kl(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function wl(e, t) {
  return ye(Aa.count(dt(e) - 1, e), t, 2);
}
function Wa(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? vt(e) : vt.ceil(e);
}
function Sl(e, t) {
  return e = Wa(e), ye(vt.count(dt(e), e) + (dt(e).getUTCDay() === 4), t, 2);
}
function Cl(e) {
  return e.getUTCDay();
}
function jl(e, t) {
  return ye(qt.count(dt(e) - 1, e), t, 2);
}
function Nl(e, t) {
  return ye(e.getUTCFullYear() % 100, t, 2);
}
function Tl(e, t) {
  return e = Wa(e), ye(e.getUTCFullYear() % 100, t, 2);
}
function Dl(e, t) {
  return ye(e.getUTCFullYear() % 1e4, t, 4);
}
function Il(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? vt(e) : vt.ceil(e), ye(e.getUTCFullYear() % 1e4, t, 4);
}
function Rl() {
  return "+0000";
}
function da() {
  return "%";
}
function ua(e) {
  return +e;
}
function ha(e) {
  return Math.floor(+e / 1e3);
}
var mt, Oa;
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
  return mt = Bi(e), Oa = mt.format, mt.parse, mt.utcFormat, mt.utcParse, mt;
}
function Fl(e) {
  return new Date(e);
}
function Ll(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ua(e, t, r, a, o, s, i, l, c, d) {
  var u = pi(), m = u.invert, b = u.domain, g = d(".%L"), T = d(":%S"), y = d("%I:%M"), v = d("%I %p"), q = d("%a %d"), E = d("%b %d"), k = d("%B"), _ = d("%Y");
  function M(p) {
    return (c(p) < p ? g : l(p) < p ? T : i(p) < p ? y : s(p) < p ? v : a(p) < p ? o(p) < p ? q : E : r(p) < p ? k : _)(p);
  }
  return u.invert = function(p) {
    return new Date(m(p));
  }, u.domain = function(p) {
    return arguments.length ? b(Array.from(p, Ll)) : b().map(Fl);
  }, u.ticks = function(p) {
    var F = b();
    return e(F[0], F[F.length - 1], p ?? 10);
  }, u.tickFormat = function(p, F) {
    return F == null ? M : d(F);
  }, u.nice = function(p) {
    var F = b();
    return (!p || typeof p.range != "function") && (p = t(F[0], F[F.length - 1], p ?? 10)), p ? b(gi(F, p)) : u;
  }, u.copy = function() {
    return fi(u, Ua(e, t, r, a, o, s, i, l, c, d));
  }, u;
}
function El() {
  return $o.apply(Ua(Ii, Ri, nt, Br, Sn, Mt, Ir, Dr, bt, Oa).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
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
  const d = xe(null), [u, m] = ge(!1), [b, g] = ge(!1), T = t(e.start), y = t(e.end), v = Math.max(y - T, 20), q = () => {
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
  }, E = e.progress ? v * e.progress / 100 : 0, k = () => {
    r?.(e);
  }, _ = () => {
    a?.(e);
  }, M = (C) => {
    C.key === "Enter" ? (C.preventDefault(), k()) : C.key === " " && (C.preventDefault(), _());
  }, p = () => {
    m(!0);
  }, F = () => {
    m(!1);
  }, R = () => {
    g(!0), l?.();
  }, N = () => {
    g(!1);
  }, j = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (b || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), L = {
    "--task-left": `${T}px`,
    "--task-width": `${v}px`,
    "--task-color": q(),
    left: `${T}px`,
    width: `${v}px`,
    backgroundColor: q()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: d,
      "data-task-index": s,
      className: j,
      style: L,
      onClick: k,
      onDoubleClick: _,
      onKeyDown: M,
      onMouseDown: p,
      onMouseUp: F,
      onFocus: R,
      onBlur: N,
      "aria-label": c || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${E}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function $l({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let g = e.getTime(); g <= t.getTime(); g += 864e5)
    a.push(new Date(g));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = ge(-1), c = xe(null), d = (g) => {
    if (g.key === "ArrowLeft") {
      g.preventDefault();
      const T = Math.max(0, i === -1 ? 0 : i - 1);
      l(T), b(T);
    } else if (g.key === "ArrowRight") {
      g.preventDefault();
      const T = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(T), b(T);
    } else if (g.key === "ArrowDown") {
      g.preventDefault();
      const T = document.querySelector(".gantt-row .timeline-container");
      T && T.focus();
    } else if (g.key === "Home")
      g.preventDefault(), l(0), b(0);
    else if (g.key === "End") {
      g.preventDefault();
      const T = a.length - 1;
      l(T), b(T);
    }
  }, u = (g) => {
    if (g.key === "ArrowDown") {
      g.preventDefault();
      const T = document.querySelector(".gantt-row .resource-label");
      T && T.focus();
    } else if (g.key === "ArrowRight") {
      g.preventDefault();
      const T = c.current;
      T && T.focus();
    }
  }, m = () => {
    i === -1 && (l(0), setTimeout(() => b(0), 0));
  }, b = (g) => {
    const T = c.current?.querySelector(`[data-date-index="${g}"]`);
    T && T.focus();
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
            children: a.map((g, T) => {
              const y = g.getTime() === s.getTime(), v = i === T;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": T,
                  className: `date-column ${y ? "today" : ""} ${v ? "focused" : ""}`,
                  tabIndex: v ? 0 : -1,
                  role: "button",
                  "aria-label": `${g.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${y ? " (Today)" : ""}`,
                  onFocus: () => l(T),
                  onKeyDown: d,
                  children: g.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                T
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
  _e(() => {
    l && d >= 0 && t.length > 0 && setTimeout(() => {
      m.current?.querySelector(`[data-task-index="${d}"]`)?.focus();
    }, 0);
  }, [l, d, t.length]);
  const b = (y) => {
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
          y.preventDefault(), s === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          y.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          y.preventDefault(), m.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (y.preventDefault(), c(!0), u(0));
          break;
      }
      return;
    }
    switch (y.key) {
      case "ArrowLeft":
        y.preventDefault();
        const v = Math.max(0, d - 1);
        u(v), m.current?.querySelector(`[data-task-index="${v}"]`)?.focus();
        break;
      case "ArrowRight":
        y.preventDefault();
        const E = Math.min(t.length - 1, d + 1);
        u(E), m.current?.querySelector(`[data-task-index="${E}"]`)?.focus();
        break;
      case "Enter":
        y.preventDefault(), d >= 0 && a?.(t[d]);
        break;
      case " ":
        y.preventDefault(), d >= 0 && o?.(t[d]);
        break;
      case "Escape":
        y.preventDefault(), c(!1), u(-1), m.current?.focus();
        break;
    }
  }, g = (y) => {
    switch (y.key) {
      case "ArrowUp":
        y.preventDefault(), s === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        y.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        y.preventDefault(), m.current?.focus();
        break;
    }
  }, T = (y) => {
    l && u(y);
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
            onKeyDown: g,
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
            children: t.map((y, v) => /* @__PURE__ */ n.jsx(
              Ml,
              {
                task: y,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && d === v,
                taskIndex: v,
                tabIndex: l && d === v ? 0 : -1,
                onFocus: () => T(v)
              },
              y.id
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
  const i = xe(null), [l, c] = ge(800), d = ke(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const y = new Date(r);
    return isNaN(y.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : y;
  }, [r]), u = ke(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const y = new Date(a);
    return isNaN(y.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : y;
  }, [a]), m = ke(() => Math.ceil((u.getTime() - d.getTime()) / 864e5) + 1, [d, u]);
  _e(() => {
    if (!i.current) return;
    const y = new ResizeObserver((v) => {
      const q = v[0];
      q && c(Math.max(q.contentRect.width - 220, 400));
    });
    return y.observe(i.current), () => y.disconnect();
  }, []);
  const b = ke(
    () => El().domain([d, u]).range([0, l]),
    [d, u, l]
  ), g = ke(() => {
    const y = /* @__PURE__ */ new Map();
    return t.forEach((v) => {
      const q = y.get(v.resourceId) || [];
      q.push(v), y.set(v.resourceId, q);
    }), y;
  }, [t]), T = (y) => {
    if (y.target === y.currentTarget)
      switch (y.key) {
        case "ArrowDown":
          y.preventDefault();
          const v = i.current?.querySelector(".gantt-row .resource-label");
          v && v.focus();
          break;
        case "Home":
          y.preventDefault();
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
      onKeyDown: T,
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
            onKeyDown: (y) => {
              y.key === "ArrowLeft" && y.altKey ? (y.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : y.key === "ArrowRight" && y.altKey ? (y.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : y.key === "ArrowUp" && y.altKey ? (y.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : y.key === "ArrowDown" && y.altKey && (y.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((y, v) => /* @__PURE__ */ n.jsx(
              Al,
              {
                resource: y,
                tasks: g.get(y.id) || [],
                scale: b,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: v,
                dateCount: m
              },
              y.id
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
  const c = () => t ? Fe.Children.toArray(t).filter(
    (v) => Fe.isValidElement(v) && (v.type === Kt || v.type?.displayName === "BreadcrumbItem")
  ).map((v) => ({
    text: typeof v.props.children == "string" ? v.props.children : String(v.props.children),
    href: v.props.href,
    active: v.props.active,
    attributes: v.props.attributes
  })) : [], d = () => t ? c() : o && s ? [{ href: o, text: s }] : e, u = () => {
    const y = d();
    if (y && y.length > 0) {
      const v = y.slice().reverse().find((q) => q.href && !q.active);
      if (v)
        return { href: v.href, text: v.text };
    }
    return { text: "Home" };
  }, m = d(), b = u(), g = Q(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), T = a;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: g,
      "aria-label": T,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          Fe.Children.map(t, (y, v) => Fe.isValidElement(y) && (y.type === Kt || y.type?.displayName === "BreadcrumbItem") ? Fe.cloneElement(y, { key: v }) : null)
        ) : (
          // Render from items array
          m?.filter((y) => y.active || !!y.href).map((y, v) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: y.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...y.attributes || {},
              children: y.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: y.href,
              role: "link",
              ...y.attributes || {},
              children: y.text
            }
          ) }, v))
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
const Ga = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [o, s] = ge(!1);
  _e(() => {
    s(!0);
  }, []), _e(() => {
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
  const i = Q("nhsuk-skip-link", r);
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
  const i = Q("nhsuk-pagination", o);
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
  const o = Q("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, Va = Fe.forwardRef(({
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
  ].filter(Boolean).join(" "), g = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), T = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), y = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const E = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      et,
      {
        level: a,
        className: T,
        children: E()
      }
    );
  }, v = () => u.children ? u.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, q = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsxs("div", { className: g, children: [
          y(),
          v(),
          q()
        ] })
      ]
    }
  );
});
Va.displayName = "Card";
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
  "aria-describedby": g
}) => {
  const T = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), y = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), v = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const E = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], k = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        E,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      et,
      {
        level: a,
        className: y,
        children: k
      }
    );
  }, q = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: T,
      "data-testid": d,
      id: u,
      "aria-label": m,
      "aria-labelledby": b,
      "aria-describedby": g,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          v(),
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
  const d = Q(
    "nhsuk-panel",
    t
  ), u = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    et,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    et,
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
  const s = Q("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, Gf = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = Q(
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
  "data-testid": g
}) => {
  const T = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), y = Q(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), v = Q(m), q = (_, M) => {
    const p = Q("nhsuk-table__header", {
      [`nhsuk-table__header--${_.format}`]: _.format
    }, _.classes), F = {
      scope: "col",
      ..._.colspan && { colSpan: _.colspan },
      ..._.rowspan && { rowSpan: _.rowspan },
      ...s && { role: "columnheader" },
      ..._.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: p, ...F, children: _.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text }, M);
  }, E = (_, M, p) => {
    const F = o && p, R = Q(
      F ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${F ? "header" : "cell"}--${_.format}`]: _.format
      },
      _.classes
    ), N = {
      ...F && { scope: "row" },
      ..._.colspan && { colSpan: _.colspan },
      ..._.rowspan && { rowSpan: _.rowspan },
      ...s && {
        role: F ? "rowheader" : "cell",
        ..._.header && { "data-label": _.header }
      },
      ..._.attributes
    }, j = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && _.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        _.header,
        " "
      ] }),
      _.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text
    ] }), L = F ? "th" : "td";
    return /* @__PURE__ */ n.jsx(L, { className: R, ...N, children: j }, M);
  }, k = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: y,
      ...s && { role: "table" },
      ...b,
      ...g && { "data-testid": g },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: T, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((_, M) => q(_, M)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((_, M) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: _.map(
              (p, F) => E(p, F, F === 0)
            )
          },
          M
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(zl, { className: d, children: [
    i && /* @__PURE__ */ n.jsx(et, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    k()
  ] }) : v ? /* @__PURE__ */ n.jsx("div", { className: v, children: k() }) : k();
}, Yf = _t(({
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
  const g = r !== void 0, [T, y] = ge(() => t || e[0]?.id || ""), v = g ? r : T, q = xe(null), E = xe(/* @__PURE__ */ new Map()), k = ne((j) => {
    g || y(j), a?.(j);
  }, [g, a]), _ = ne((j) => {
    o?.(j), l && k(j);
  }, [o, l, k]), M = ne((j, L) => {
    const C = e.filter((U) => !U.disabled).map((U) => U.id), $ = C.indexOf(L);
    let ee = null;
    switch (j.key) {
      case "ArrowLeft":
        ee = $ > 0 ? $ - 1 : C.length - 1;
        break;
      case "ArrowRight":
        ee = $ < C.length - 1 ? $ + 1 : 0;
        break;
      case "Home":
        ee = 0;
        break;
      case "End":
        ee = C.length - 1;
        break;
      case "Escape":
        j.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (ee !== null) {
      j.preventDefault();
      const U = C[ee], D = E.current.get(U);
      D && (D.focus(), _(U));
    }
  }, [e, _, i]), p = ne((j, L) => {
    L ? E.current.set(j, L) : E.current.delete(j);
  }, []), F = ne((j) => {
    const L = E.current.get(j);
    L && L.focus();
  }, []);
  wa(b, () => ({
    focusTab: F,
    getActiveTab: () => v,
    getTabListElement: () => q.current
  }), [F, v]);
  const R = ne((j) => {
    const L = j.relatedTarget;
    q.current?.contains(L) || s?.();
  }, [s]), N = Q("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: N,
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
                onBlur: R,
                children: e.map((j) => {
                  const L = j.id === v, C = j.disabled, $ = Q("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": L,
                    "nhsuk-tabs__list-item--disabled": C
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: $, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (ee) => p(j.id, ee),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": L,
                      "aria-controls": `${j.id}-panel`,
                      id: `${j.id}-tab`,
                      tabIndex: L ? 0 : -1,
                      disabled: C,
                      onClick: () => !C && k(j.id),
                      onKeyDown: (ee) => !C && M(ee, j.id),
                      onFocus: () => !C && _(j.id),
                      ...j.attributes,
                      children: j.label
                    }
                  ) }, j.id);
                })
              }
            )
          }
        ),
        e.map((j) => {
          const L = j.id === v;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${j.id}-tab`,
              id: `${j.id}-panel`,
              hidden: !L,
              children: j.content
            },
            j.id
          );
        })
      ]
    }
  );
}), Wl = _t(
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
const Ol = _t(
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
    ), m = (g) => t === "cross" && !a ? `do not ${g}` : g, b = () => /* @__PURE__ */ n.jsx(
      et,
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
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: d.join(" "), role: "list", children: r.map((g, T) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            m(g.item)
          ] }, T)) }) })
        ]
      }
    );
  }
);
Ol.displayName = "DoDontList";
const Ul = _t(
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
const Gl = _t(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const d = c + 1, u = `${t}-${d}-hint`, m = `${t}-${d}-status`, b = !!l.href, g = [
        "nhsuk-task-list__item",
        b && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), T = [
        l.hint && u,
        m
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Vl,
        {
          item: l,
          itemClasses: g,
          hasLink: b,
          hintId: u,
          statusId: m,
          ariaDescribedBy: T
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
    return e.status.tag ? u = /* @__PURE__ */ n.jsx(Qe, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ n.jsx("div", { className: d, id: o, children: u });
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
        ka(
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
    /* @__PURE__ */ n.jsx(et, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(_o, { children: /* @__PURE__ */ n.jsx(Rt, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    wr,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ n.jsx(Yl, { ...o })
    },
    s
  )) }) }) });
}, ql = Fe.forwardRef(
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
    bordered: g = !1,
    striped: T = !1,
    responsive: y = !1,
    tableType: v = "default"
  }, q) => {
    const E = xe(null), k = xe(null), _ = xe(null);
    Fe.useImperativeHandle(q, () => E.current, []);
    const [M, p] = ge(0), [F, R] = ge(0), [N, j] = ge("headers"), [L, C] = ge("browse"), $ = t.length, ee = e.length, U = ke(() => !r || r.length === 0 ? e : [...e].sort((P, H) => {
      for (const { key: O, direction: le } of r) {
        const V = P[O], te = H[O];
        if (V == null && te == null) continue;
        if (V == null) return 1;
        if (te == null) return -1;
        let G = 0;
        if (typeof V == "number" && typeof te == "number" ? G = V - te : G = String(V).localeCompare(String(te)), G !== 0)
          return le === "asc" ? G : -G;
      }
      return 0;
    }), [e, r]), D = ne((P, H) => {
      setTimeout(() => {
        const O = E.current?.querySelector(
          `tbody tr:nth-child(${P + 1}) td:nth-child(${H + 1})`
        );
        O && (O.focus(), typeof O.scrollIntoView == "function" && O.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), se = ne((P) => {
      setTimeout(() => {
        const H = E.current?.querySelector(`th:nth-child(${P + 1})`);
        H && (H.focus(), typeof H.scrollIntoView == "function" && H.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ie = ne((P) => {
      a?.(P);
    }, [a]), ce = ne((P) => {
      s?.(P);
    }, [s]), S = ne((P) => {
      const { key: H } = P;
      switch (H) {
        case "Enter":
          if (P.preventDefault(), N === "headers" && L === "browse")
            C("navigate"), se(F);
          else if (N === "headers" && L === "navigate") {
            const O = t[F];
            O && ie(O.key);
          } else N === "cells" && L === "browse" ? (C("navigate"), D(M, F)) : N === "cells" && L === "navigate" && ce(M);
          break;
        case "Escape":
          P.preventDefault(), (N === "headers" && L === "navigate" || N === "cells" && L === "navigate") && C("browse");
          break;
        case "ArrowLeft":
          if (P.preventDefault(), L === "navigate" || L === "browse" && N === "headers") {
            if (N === "headers") {
              const O = Math.max(0, F - 1);
              R(O), se(O);
            } else if (N === "cells") {
              const O = Math.max(0, F - 1);
              R(O), D(M, O);
            }
          }
          break;
        case "ArrowRight":
          if (P.preventDefault(), L === "navigate" || L === "browse" && N === "headers") {
            if (N === "headers") {
              const O = Math.min($ - 1, F + 1);
              R(O), se(O);
            } else if (N === "cells") {
              const O = Math.min($ - 1, F + 1);
              R(O), D(M, O);
            }
          }
          break;
        case "ArrowUp":
          if (P.preventDefault(), N === "cells") {
            if (L === "browse") {
              const O = Math.max(0, M - 1);
              p(O), D(O, 0), R(0);
            } else if (L === "navigate")
              if (M > 0) {
                const O = M - 1;
                p(O), D(O, F);
              } else
                j("headers"), C("browse"), se(F);
          }
          break;
        case "ArrowDown":
          if (P.preventDefault(), N === "headers" && L === "browse")
            j("cells"), p(0), R(0), D(0, 0);
          else if (N === "cells") {
            const O = ee - 1;
            if (L === "browse") {
              const le = Math.min(O, M + 1);
              p(le), D(le, 0), R(0);
            } else if (L === "navigate" && M < O) {
              const le = M + 1;
              p(le), D(le, F);
            }
          }
          break;
        case "Home":
          P.preventDefault(), N === "headers" ? (R(0), se(0)) : N === "cells" && (P.ctrlKey ? (p(0), R(0), D(0, 0)) : (R(0), D(M, 0)));
          break;
        case "End":
          if (P.preventDefault(), N === "headers") {
            const O = $ - 1;
            R(O), se(O);
          } else if (N === "cells")
            if (P.ctrlKey) {
              const O = ee - 1, le = $ - 1;
              p(O), R(le), D(O, le);
            } else {
              const O = $ - 1;
              R(O), D(M, O);
            }
          break;
        case " ":
          if (P.preventDefault(), N === "headers" && L === "navigate") {
            const O = t[F];
            O && ie(O.key);
          } else N === "cells" && L === "navigate" && ce(M);
          break;
      }
    }, [
      N,
      L,
      F,
      M,
      $,
      ee,
      t,
      D,
      se,
      ie,
      ce
    ]);
    _e(() => {
      const P = E.current;
      if (P)
        return P.addEventListener("keydown", S), () => P.removeEventListener("keydown", S);
    }, [S]);
    const J = Q(
      "nhsuk-table",
      b,
      {
        "nhsuk-table--responsive": y,
        "nhsuk-table--bordered": g,
        "nhsuk-table--striped": T,
        "nhsuk-table--compact": v === "compact"
      },
      m
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: E,
        className: J,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": d,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: k, role: "row", children: t.map((P, H) => {
            const O = r?.find((te) => te.key === P.key), le = !!O, V = N === "headers" && F === H;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: Q("sortable-header", {
                  "sortable-header--focused": V
                }),
                role: "columnheader",
                tabIndex: V ? 0 : -1,
                onClick: () => ie(P.key),
                onKeyDown: (te) => {
                  (te.key === "Enter" || te.key === " ") && (te.preventDefault(), ie(P.key));
                },
                "aria-sort": le ? O?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: P.label }),
                  le && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((te) => te.key === P.key) + 1 }),
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
          /* @__PURE__ */ n.jsx("tbody", { ref: _, className: "nhsuk-table__body", role: "rowgroup", children: U.map((P, H) => {
            const O = o === H, le = N === "cells" && M === H;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: Q("data-row", {
                  "data-row--selected": O,
                  "data-row--focused": le
                }),
                "aria-selected": O,
                children: t.map((V, te) => {
                  const G = V.tableRenderer ? V.tableRenderer(P) : V.render ? V.render(P) : P[V.key], z = N === "cells" && M === H && F === te, ae = () => typeof G == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: G ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: G ? "Yes" : "No" })
                  ] }) : String(G ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: Q("data-cell", {
                        "data-cell--focused": z
                      }),
                      tabIndex: z ? 0 : -1,
                      onClick: () => ce(H),
                      children: ae()
                    },
                    V.key
                  );
                })
              },
              H
            );
          }) })
        ]
      }
    );
  }
);
ql.displayName = "AriaDataGrid";
const Ya = ({
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
  const m = xe(null), b = xe(null), g = xe(null), T = ne((N, j) => {
    c || (b.current = j, N.dataTransfer.effectAllowed = "move", N.dataTransfer.setData("text/plain", j));
  }, [c]), y = ne((N, j) => {
    c || b.current === j || (N.preventDefault(), N.dataTransfer.dropEffect = "move", g.current = j);
  }, [c]), v = ne((N, j) => {
    if (c) return;
    N.preventDefault();
    const L = b.current;
    if (!L || L === j) return;
    const C = e.findIndex((ee) => ee.key === L), $ = e.findIndex((ee) => ee.key === j);
    if (C !== -1 && $ !== -1) {
      const ee = [...e], [U] = ee.splice(C, 1);
      ee.splice($, 0, U), r(ee);
    }
    b.current = null, g.current = null;
  }, [c, e, r]), q = ne(() => {
    b.current = null, g.current = null;
  }, []), E = ne((N) => {
    const j = t.find((L) => L.key === N);
    return j ? j.label : N;
  }, [t]), k = ne((N) => ["red", "orange", "blue", "aqua-green", "grey"][N] || "grey", []), _ = ne((N) => {
    if (c) return;
    const j = e.map(
      (L) => L.key === N ? { ...L, direction: L.direction === "asc" ? "desc" : "asc" } : L
    );
    r(j);
  }, [e, r, c]), M = ne((N) => {
    if (c) return;
    const j = e.filter((L) => L.key !== N);
    r(j);
  }, [e, r, c]), p = ne(() => {
    c || r([]);
  }, [r, c]), F = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const N = e.map((j, L) => {
      const C = j.direction === "asc" ? "ascending" : "descending";
      return `${L + 1}. ${E(j.key)} (${C})`;
    });
    if (N.length === 1)
      return `Sorted by: ${N[0]}`;
    if (N.length === 2)
      return `Sorted by: ${N.join(" and ")}`;
    {
      const j = N.pop();
      return `Sorted by: ${N.join(", ")}, and ${j}`;
    }
  }, R = ke(() => {
    const N = ["sort-description"];
    return l && N.push("sort-help"), u && N.push(u), N.join(" ");
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
        children: F()
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
          "aria-describedby": R,
          children: e.map((N, j) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (L) => T(L, N.key),
              onDragOver: (L) => y(L, N.key),
              onDrop: (L) => v(L, N.key),
              onDragEnd: q,
              onClick: () => _(N.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${N.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": N.key,
              children: /* @__PURE__ */ n.jsx(
                Qe,
                {
                  color: k(j),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => M(N.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${j + 1}`, children: j + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: E(N.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (L) => {
                          L.stopPropagation(), _(N.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${E(N.key)}. Currently ${N.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${N.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${N.direction}`,
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
            N.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        Re,
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
const Kn = _t(
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
      id: g,
      isLoading: T = !1,
      loadingComponent: y,
      error: v = null,
      errorComponent: q,
      "data-testid": E
    } = t, _ = xe(g || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`).current, M = typeof d == "string" && d.trim() !== "" && !/\s/.test(d), p = `${_}-description`, F = `${_}-navigation-help`, {
      dataComparator: R = (h, W) => JSON.stringify(h) === JSON.stringify(W),
      filterFunction: N = (h) => h,
      booleanRenderer: j = (h) => h ? "✓" : "✗"
    } = a || {}, L = s !== void 0, C = s ?? 0, [$, ee] = ge({
      focusArea: "tabs",
      focusedTabIndex: C,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), U = ke(() => ({
      selectedIndex: C,
      tabLoadingStates: new Array(o.length).fill(!1),
      tabErrors: new Array(o.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(o.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [C]), [D, se] = Sa(Kl, U);
    _e(() => {
      const h = D.tabLoadingStates.length, W = o.length;
      h !== W && se({ type: "ADJUST_ARRAYS", payload: { newLength: W } });
    }, [o.length]), _e(() => {
      L && se({ type: "SET_SELECTED_INDEX", payload: C });
    }, [C, L]), _e(() => {
      ee((h) => ({
        ...h,
        focusArea: "tabs",
        focusedTabIndex: D.selectedIndex,
        focusedHeaderIndex: 0,
        focusedRowIndex: 0,
        focusedColumnIndex: 0,
        isGridActive: !1
      }));
    }, [D.selectedIndex]), _e(() => {
      l && l(D.globalSelectedRowData);
    }, [D.globalSelectedRowData, l]);
    const ie = ne((h, W) => R(h, W), [R]), ce = ne((h) => {
      h >= 0 && h < o.length && !o[h].disabled && (se({ type: "SET_SELECTED_INDEX", payload: h }), ee((W) => ({
        ...W,
        focusedTabIndex: h,
        focusArea: "tabs"
      })), i?.(h));
    }, [o, i]), S = xe(!1), J = ne((h, W) => {
      if (!W?.force && !S.current && h === 0) {
        S.current = !0;
        return;
      }
      S.current = !0, setTimeout(() => {
        const Z = H.current[h], oe = Z?.parentElement;
        if (Z && oe) {
          const re = Z.offsetLeft, f = Z.offsetWidth, x = oe.clientWidth, w = re - x / 2 + f / 2;
          try {
            oe.scrollTo({ left: Math.max(0, w), behavior: "smooth" });
          } catch {
            Z.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", { tabElementExists: !!Z, tabListElementExists: !!oe });
      }, 50);
    }, []), P = ne((h, W) => {
      const { key: Z } = h;
      switch (Z) {
        case "ArrowLeft":
          h.preventDefault();
          const oe = W > 0 ? W - 1 : o.length - 1;
          ce(oe), J(oe), H.current[oe]?.focus();
          break;
        case "ArrowRight":
          h.preventDefault();
          const re = W < o.length - 1 ? W + 1 : 0;
          ce(re), J(re), H.current[re]?.focus();
          break;
        case "ArrowDown":
          h.preventDefault(), ee((x) => ({
            ...x,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        case "Home":
          h.preventDefault(), ce(0), J(0), H.current[0]?.focus();
          break;
        case "End":
          h.preventDefault();
          const f = o.length - 1;
          ce(f), J(f), H.current[f]?.focus();
          break;
        case "Enter":
        case " ":
          h.preventDefault(), ce(W);
          break;
      }
    }, [o.length, ce, J]), H = xe([]), O = xe([]), le = ne((h, W) => {
      const Z = D.sortConfig || [], oe = Z.find((x) => x.key === W);
      let re;
      oe ? oe.direction === "asc" ? re = Z.map(
        (x) => x.key === W ? { ...x, direction: "desc" } : x
      ) : re = Z.filter((x) => x.key !== W) : re = [...Z, { key: W, direction: "asc" }], se({
        type: "SET_SORT",
        payload: re
      }), o[h].onSort?.(W);
    }, [D.sortConfig, o]), V = ne((h) => {
      setTimeout(() => {
        const W = document.querySelector(
          `[data-tab-panel="${D.selectedIndex}"] th:nth-child(${h + 1})`
        );
        W && W.focus();
      }, 0);
    }, [D.selectedIndex]), te = ne((h) => j(h), [j]), G = ne((h, W) => {
      setTimeout(() => {
        const Z = document.querySelector(
          `[data-tab-panel="${D.selectedIndex}"] tbody tr:nth-child(${h + 1}) td:nth-child(${W + 1})`
        );
        Z && Z.focus();
      }, 0);
    }, [D.selectedIndex]);
    _e(() => {
      $.isGridActive && ($.focusArea === "headers" ? setTimeout(() => {
        V($.focusedHeaderIndex);
      }, 0) : $.focusArea === "cells" && setTimeout(() => {
        G($.focusedRowIndex, $.focusedColumnIndex);
      }, 0));
    }, [$.focusArea, $.isGridActive, $.focusedHeaderIndex, $.focusedRowIndex, $.focusedColumnIndex, V, G]), _e(() => {
      J(D.selectedIndex);
    }, [D.selectedIndex, J]);
    const z = ne((h, W) => {
      const { key: Z } = h, oe = o[D.selectedIndex], re = oe?.columns.length || 0;
      switch (Z) {
        case "ArrowLeft":
          h.preventDefault();
          const f = Math.max(0, W - 1);
          ee((A) => ({ ...A, focusedHeaderIndex: f })), V(f);
          break;
        case "ArrowRight":
          h.preventDefault();
          const x = Math.min(re - 1, W + 1);
          ee((A) => ({ ...A, focusedHeaderIndex: x })), V(x);
          break;
        case "ArrowUp":
          h.preventDefault(), ee((A) => ({
            ...A,
            focusArea: "tabs",
            focusedTabIndex: D.selectedIndex
          })), J(D.selectedIndex), H.current[D.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          h.preventDefault(), ee((A) => ({
            ...A,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: W,
            isGridActive: !0
          }));
          break;
        case "Home":
          h.preventDefault(), ee((A) => ({ ...A, focusedHeaderIndex: 0 })), V(0);
          break;
        case "End":
          h.preventDefault();
          const w = re - 1;
          ee((A) => ({ ...A, focusedHeaderIndex: w })), V(w);
          break;
        case "Enter":
        case " ":
          h.preventDefault();
          const B = oe?.columns[W]?.key;
          B && le(D.selectedIndex, B);
          break;
      }
    }, [o, D.selectedIndex, le, ee, V, G, H]), ae = ne((h, W, Z) => {
      const { key: oe } = h, re = o[D.selectedIndex], f = re?.data.length || 0, x = re?.columns.length || 0;
      switch (oe) {
        case "ArrowUp":
          if (h.preventDefault(), W === 0)
            ee((I) => ({
              ...I,
              focusArea: "headers",
              focusedHeaderIndex: Z,
              isGridActive: !1
            })), V(Z);
          else {
            const I = W - 1;
            ee((Y) => ({ ...Y, focusedRowIndex: I })), G(I, Z);
          }
          break;
        case "ArrowDown":
          h.preventDefault();
          const w = Math.min(f - 1, W + 1);
          ee((I) => ({ ...I, focusedRowIndex: w })), G(w, Z);
          break;
        case "ArrowLeft":
          h.preventDefault();
          const B = Math.max(0, Z - 1);
          ee((I) => ({ ...I, focusedColumnIndex: B })), G(W, B);
          break;
        case "ArrowRight":
          h.preventDefault();
          const A = Math.min(x - 1, Z + 1);
          ee((I) => ({ ...I, focusedColumnIndex: A })), G(W, A);
          break;
        case "Home":
          h.preventDefault(), h.ctrlKey ? (ee((I) => ({ ...I, focusedRowIndex: 0, focusedColumnIndex: 0 })), G(0, 0)) : (ee((I) => ({ ...I, focusedColumnIndex: 0 })), G(W, 0));
          break;
        case "End":
          if (h.preventDefault(), h.ctrlKey) {
            const I = f - 1, Y = x - 1;
            ee((X) => ({ ...X, focusedRowIndex: I, focusedColumnIndex: Y })), G(I, Y);
          } else {
            const I = x - 1;
            ee((Y) => ({ ...Y, focusedColumnIndex: I })), G(W, I);
          }
          break;
        case "Enter":
        case " ":
          if (h.preventDefault(), re && re.data[W]) {
            const I = re.data.some((K) => "ews_data" in K) ? N(re.data, D.filters) : re.data, Y = D.sortConfig;
            let X = I;
            if (Y && Y.length > 0 && (X = [...I].sort((K, he) => {
              for (const { key: we, direction: be } of Y) {
                let ve = K[we], Be = he[we];
                const Ee = re.columns.find((Cn) => Cn.key === we);
                if (Ee?.tableRenderer ? (ve = Ee.tableRenderer(K), Be = Ee.tableRenderer(he)) : Ee?.render && (ve = Ee.render(K), Be = Ee.render(he)), ve == null && Be == null) continue;
                if (ve == null) return be === "asc" ? -1 : 1;
                if (Be == null) return be === "asc" ? 1 : -1;
                let Ne = 0;
                if (typeof ve == "number" && typeof Be == "number" ? Ne = ve - Be : Ne = String(ve).localeCompare(String(Be), void 0, { numeric: !0, sensitivity: "base" }), Ne !== 0)
                  return be === "asc" ? Ne : -Ne;
              }
              return 0;
            })), X[W]) {
              const K = X[W], we = D.globalSelectedRowData && ie(D.globalSelectedRowData, K) ? null : K;
              se({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: we
              });
            }
          }
          break;
      }
    }, [o, D.selectedIndex, D.filters, D.sortConfig, N, ie, se, ee, V, G]), de = ne((h, W) => N(h, W), [N]);
    return wa(r, () => ({
      selectTab: (h) => {
        h >= 0 && h < o.length && (se({ type: "SET_SELECTED_INDEX", payload: h }), i?.(h));
      },
      refreshData: (h) => {
        console.log("Refreshing data for tab:", h ?? "all");
      },
      exportData: (h) => {
        const W = h ?? D.selectedIndex, Z = o[W];
        return Z ? Z.data : [];
      },
      getSelectedRows: (h) => D.globalSelectedRowData ? [] : [],
      clearSelection: (h) => {
        se({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (h) => {
        se({ type: "SET_FILTERS", payload: h });
      }
    }), [D.selectedIndex, D.selectedRows, o, i]), T ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`, "data-testid": E, children: y || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : v ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`, "data-testid": E, children: q || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: v })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${b} ${u}`,
        id: g,
        "data-testid": E,
        children: [
          d && !M && /* @__PURE__ */ n.jsx("div", { id: p, className: "nhsuk-u-visually-hidden", children: d }),
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: F, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Ya,
            {
              sortConfig: D.sortConfig || [],
              columns: o.flatMap(
                (h) => h.columns.map((W) => ({ key: W.key, label: W.label }))
              ).filter(
                (h, W, Z) => Z.findIndex((oe) => oe.key === h.key) === W
                // Remove duplicates
              ),
              onSortChange: (h) => {
                se({ type: "SET_SORT", payload: h });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": d ? M ? d : p : F,
              "aria-orientation": b,
              className: "aria-tabs-datagrid__tabs",
              children: o.map((h, W) => {
                const Z = W === D.selectedIndex, oe = h.disabled || m;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${h.id}`,
                    "aria-controls": `panel-${h.id}`,
                    "aria-selected": Z,
                    "aria-disabled": oe,
                    tabIndex: Z ? 0 : -1,
                    ref: (re) => {
                      H.current[W] = re;
                    },
                    onClick: () => ce(W),
                    onKeyDown: (re) => P(re, W),
                    disabled: oe,
                    className: [
                      "aria-tabs-datagrid__tab",
                      Z ? "aria-tabs-datagrid__tab--selected" : "",
                      oe ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: h.label }),
                      D.tabLoadingStates[W] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      D.tabErrors[W] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  h.id
                );
              })
            }
          ),
          o.map((h, W) => {
            const Z = W === D.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${h.id}`,
                "aria-labelledby": `tab-${h.id}`,
                tabIndex: 0,
                hidden: !Z,
                ref: (oe) => {
                  O.current[W] = oe;
                },
                className: `aria-tabs-datagrid__panel ${h.className || ""}`,
                "data-tab-panel": W,
                children: Z && (() => {
                  const oe = h.data.some((f) => "ews_data" in f) ? de(h.data, D.filters) : h.data, re = ke(() => {
                    const f = D.sortConfig;
                    return !f || f.length === 0 ? oe : [...oe].sort((x, w) => {
                      for (const { key: B, direction: A } of f) {
                        let I = x[B], Y = w[B];
                        const X = h.columns.find((he) => he.key === B);
                        if (X?.tableRenderer ? (I = X.tableRenderer(x), Y = X.tableRenderer(w)) : X?.render && (I = X.render(x), Y = X.render(w)), I == null && Y == null) continue;
                        if (I == null) return 1;
                        if (Y == null) return -1;
                        let K = 0;
                        if (typeof I == "number" && typeof Y == "number" ? K = I - Y : typeof I == "boolean" && typeof Y == "boolean" ? K = I === Y ? 0 : I ? 1 : -1 : K = String(I).localeCompare(String(Y), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), K !== 0)
                          return A === "asc" ? K : -K;
                      }
                      return 0;
                    });
                  }, [oe, D.sortConfig, h.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": h.ariaLabel,
                      "aria-describedby": h.ariaDescription ? `panel-${h.id}-description` : void 0,
                      children: [
                        h.ariaDescription && /* @__PURE__ */ n.jsx("caption", { className: "nhsuk-u-visually-hidden", id: `panel-${h.id}-description`, children: h.ariaDescription }),
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: h.columns.map((f, x) => {
                          const w = D.sortConfig?.find((I) => I.key === f.key), B = !!w, A = $.focusArea === "headers" && $.focusedHeaderIndex === x;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${A ? "sortable-header--focused" : ""} ${B ? "sortable-header--sorted" : ""}`,
                              role: "columnheader",
                              tabIndex: A ? 0 : -1,
                              onClick: () => le(W, f.key),
                              onKeyDown: (I) => z(I, x),
                              "aria-sort": B ? w?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: f.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${B ? `sort-indicator--${w?.direction}` : ""}`, children: [
                                  D.sortConfig && D.sortConfig.length > 0 && D.sortConfig.findIndex((I) => I.key === f.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${D.sortConfig.findIndex((I) => I.key === f.key) + 1}`,
                                      "data-priority": D.sortConfig.findIndex((I) => I.key === f.key) + 1,
                                      title: `Sort priority: ${D.sortConfig.findIndex((I) => I.key === f.key) + 1}`,
                                      children: D.sortConfig.findIndex((I) => I.key === f.key) + 1
                                    }
                                  ),
                                  B && /* @__PURE__ */ n.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${w?.direction}`,
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
                            f.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: re.map((f, x) => {
                          const w = D.globalSelectedRowData && ie(D.globalSelectedRowData, f), B = $.focusArea === "cells" && $.focusedRowIndex === x;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${w ? "data-row--selected" : ""} ${B ? "data-row--focused" : ""}`,
                              "aria-selected": w,
                              children: h.columns.map((A, I) => {
                                const Y = f[A.key];
                                let X;
                                A.tableRenderer ? X = A.tableRenderer(f) : A.render ? X = A.render(f) : X = Y;
                                const K = $.focusArea === "cells" && $.focusedRowIndex === x && $.focusedColumnIndex === I, he = () => {
                                  if (A.customRenderer) {
                                    const we = A.customRenderer(Y, f);
                                    return /* @__PURE__ */ n.jsx("span", { className: "data-cell__custom", "data-custom-rendered": "true", children: we });
                                  }
                                  return typeof Y == "boolean" && X === Y ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                    te(Y),
                                    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: Y ? "Yes" : "No" })
                                  ] }) : Fe.isValidElement(X) || typeof X != "object" ? X ?? "" : X;
                                };
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${K ? "data-cell--focused" : ""}`,
                                    tabIndex: K ? 0 : -1,
                                    onClick: () => {
                                      const be = D.globalSelectedRowData && ie(D.globalSelectedRowData, f) ? null : f;
                                      se({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: be
                                      });
                                    },
                                    onKeyDown: (we) => ae(we, x, I),
                                    children: he()
                                  },
                                  A.key
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
), zt = {
  asc: "↑",
  desc: "↓"
}, Zl = (e) => [...e].sort((t, r) => t.priority - r.priority);
function Un(e) {
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
  const u = ke(() => Zl(e), [e]), m = ne((E) => {
    if (l) return;
    const k = e.map(
      (_) => _.id === E ? { ..._, direction: _.direction === "asc" ? "desc" : "asc" } : _
    );
    t(k);
  }, [e, t, l]), b = ne((E) => {
    if (l) return;
    const k = e.findIndex((M) => M.id === E);
    if (k <= 0) return;
    const _ = [...e];
    [_[k], _[k - 1]] = [_[k - 1], _[k]], t(Un(_));
  }, [e, t, l]), g = ne((E) => {
    if (l) return;
    const k = e.findIndex((M) => M.id === E);
    if (k >= e.length - 1 || k === -1) return;
    const _ = [...e];
    [_[k], _[k + 1]] = [_[k + 1], _[k]], t(Un(_));
  }, [e, t, l]), T = ne((E) => {
    if (l) return;
    const k = e.filter((_) => _.id !== E);
    t(Un(k));
  }, [e, t, l]), y = ne(() => {
    l || t([]);
  }, [t, l]), v = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const E = u.map((k, _) => {
      const M = k.direction === "asc" ? "ascending" : "descending";
      return `${_ + 1}. ${k.label} (${M})`;
    });
    if (E.length === 1)
      return `Sorted by: ${E[0]}`;
    if (E.length === 2)
      return `Sorted by: ${E.join(" and ")}`;
    {
      const k = E.pop();
      return `Sorted by: ${E.join(", ")}, and ${k}`;
    }
  }, q = ke(() => {
    const E = ["sort-description"];
    return i && E.push("sort-help"), d && E.push(d), E.join(" ");
  }, [i, d]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: v()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: v()
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
          u.map((E) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Qe,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => T(E.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: E.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: E.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => m(E.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${E.label}. Currently ${E.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: E.direction === "asc" ? zt.asc : zt.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => b(E.id),
                          disabled: l || !Xl(E.id, e),
                          "aria-label": `Move ${E.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g(E.id),
                          disabled: l || !Ql(E.id, e),
                          "aria-label": `Move ${E.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            E.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      Re,
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
      zt.asc,
      "/",
      zt.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Fr = (e, t) => t.map((r) => ({
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
})), Zn = [
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
    const r = Zn.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = Zn.find((r) => r.value === e);
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
function fa(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: d = {},
    classPrefix: u = "adaptive-card"
  } = r, m = t.find((k) => k.key === a), b = m?.cardRenderer ? m.cardRenderer(e) : m?.render ? m.render(e) : e[a || "name"] || "Untitled", g = () => o.filter((_) => !i.includes(_) && e[_]).slice(0, 3).map((_) => {
    const M = t.find((N) => N.key === _), p = e[_], F = d[_] ? d[_](p, e) : M?.cardRenderer ? M.cardRenderer(e) : M?.render ? M.render(e) : p;
    return `${M?.label || _}: ${F}`;
  }).join(" • "), T = () => s.length === 0 ? null : s.filter((k) => e[k.fieldKey] !== void 0).map((k) => {
    const _ = e[k.fieldKey], M = k.render ? k.render(_, e) : _;
    return `<span class="nhsuk-tag ${oc(k, _)}">${M}</span>`;
  }).join(""), y = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", v = T(), q = g(), E = v ? `${q}${v ? `<div class="adaptive-card__badges">${v}</div>` : ""}` : q;
  return {
    variant: y(),
    heading: String(b),
    descriptionHtml: E,
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
}, qa = ({
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
            Qe,
            {
              color: cc(Xa(u)),
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
            Re,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (g) => {
                g.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Re,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (g) => {
                g.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Re,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (g) => {
                g.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, Ka = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        Qe,
        {
          color: dc(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        Qe,
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
      Re,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Re,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), Za = ({
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
        Qe,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        Qe,
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
      Re,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Re,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), Ja = ({
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
            Qe,
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
            Re,
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
            Re,
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
function Xa(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function lc(e) {
  return Xa(e);
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
], Qa = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", hc = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, fc = (e) => Qa(e) === "high" || e.status === "urgent" ? "primary" : "default", mc = {
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
  getPriority: Qa,
  getStatus: hc,
  getVariant: fc,
  fieldRenderers: mc,
  classPrefix: "adaptive-card--healthcare"
}, gc = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", o = r.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ n.jsx(
      qa,
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
      Ka,
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
      Za,
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
      Ja,
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
}, ma = {
  name: "healthcare",
  defaultCardConfig: pc,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: gc,
  fieldTypes: bc
};
function pa(e) {
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
function ga(e) {
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
  return _e(() => {
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
  return o.cardTemplate && o.cardTemplate(e, t, o), fa(e, t, o);
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
  disabled: g = !1,
  className: T,
  ...y
}) => {
  const v = yc(e, t), q = l !== void 0, E = l ?? 0, k = ke(() => {
    if (s.some(
      (x) => x.data && x.data.length > 0 && ga(x.data)
    )) {
      const x = pa(r);
      return {
        ...ma.defaultCardConfig,
        ...x
      };
    } else
      return pa(r);
  }, [r, s]), _ = ke(() => s.some(
    (x) => x.data && x.data.length > 0 && ga(x.data)
  ) ? ma : void 0, [s]), M = ke(() => ({
    selectedIndex: E,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [E, s.length]), [p, F] = Sa(xc, M), R = xe([]), N = xe([]), j = xe([]), L = xe(null), [C, $] = ge({
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
  }), ee = ne((f) => {
    if (!f.current)
      return { columns: 1, rows: 0 };
    const x = f.current, w = x.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (w.length === 0)
      return { columns: 1, rows: 0 };
    const B = x.offsetWidth, I = w[0].offsetWidth, Y = Math.floor(B / I) || 1, X = Math.ceil(w.length / Y);
    return { columns: Y, rows: X };
  }, []), U = ne((f, x) => ({
    row: Math.floor(f / x),
    col: f % x
  }), []), D = ne((f, x, w) => f * w + x, []), se = ne((f, x, w, B) => {
    const { row: A, col: I } = U(f, B);
    let Y = A, X = I;
    switch (x) {
      case "up":
        Y = Math.max(0, A - 1);
        break;
      case "down":
        Y = Math.min(Math.floor((w - 1) / B), A + 1);
        break;
      case "left":
        X = Math.max(0, I - 1);
        break;
      case "right":
        X = Math.min(B - 1, I + 1);
        break;
    }
    const K = D(Y, X, B);
    return Math.min(K, w - 1);
  }, [U, D]);
  _e(() => {
    C.isCardNavigationActive && C.focusedCardElementIndex >= 0 && C.cardElements.length > 0 && setTimeout(() => {
      const f = C.cardElements[C.focusedCardElementIndex];
      f && (f.element.focus(), f.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [C.isCardNavigationActive, C.focusedCardElementIndex, C.cardElements.length]), _e(() => {
    const f = () => {
      if (v === "cards" && L.current) {
        const { columns: B, rows: A } = ee(L);
        $((I) => ({
          ...I,
          gridColumns: B,
          gridRows: A
        }));
      }
    }, x = setTimeout(f, 200), w = () => {
      setTimeout(f, 100);
    };
    return window.addEventListener("resize", w), () => {
      clearTimeout(x), window.removeEventListener("resize", w);
    };
  }, [v, s, ee]), _e(() => {
    const f = p.tabLoadingStates.length, x = s.length;
    f !== x && F({ type: "ADJUST_ARRAYS", payload: { newLength: x } });
  }, [s.length, p.tabLoadingStates.length]), _e(() => {
    q && l !== p.selectedIndex && F({ type: "SET_SELECTED_INDEX", payload: l });
  }, [q, l, p.selectedIndex]);
  const ie = ne((f) => {
    f >= 0 && f < s.length && !s[f].disabled && (F({ type: "SET_SELECTED_INDEX", payload: f }), c?.(f));
  }, [s, c]), ce = ne((f) => {
    console.log("Card selected:", f), F({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: f
    });
  }, []), S = ne((f) => {
    const x = N.current[f];
    x && (x.focus(), x.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), J = ne((f) => {
    const x = N.current[f];
    if (!x) return [];
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
    ].join(", "), B = x.querySelectorAll(w);
    return Array.from(B).map((A, I) => ({
      id: A.id || `card-${f}-element-${I}`,
      element: A,
      label: A.getAttribute("aria-label") || A.textContent?.trim() || A.getAttribute("title") || `Element ${I + 1}`,
      type: A.tagName.toLowerCase() === "button" ? "button" : A.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(A.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), P = xe(null), H = ne((f) => {
    const x = P.current;
    if (!x) return;
    const w = document.createElement("div");
    w.setAttribute("aria-live", "polite"), w.setAttribute("aria-atomic", "true"), w.className = "sr-only", w.textContent = f, x.appendChild(w), setTimeout(() => {
      x.contains(w) && x.removeChild(w);
    }, 1e3);
  }, []), O = ne((f) => {
    const x = f.filter((B) => B.sortable !== !1), w = [
      { value: "", label: "Sort by..." }
    ];
    return x.forEach((B) => {
      const A = B.label || B.key;
      B.key === "name" ? w.push(
        { value: `${B.key}-asc`, label: `${A} (A-Z)` },
        { value: `${B.key}-desc`, label: `${A} (Z-A)` }
      ) : B.key === "ews_score" || B.key.includes("score") ? w.push(
        { value: `${B.key}-desc`, label: `${A} (High-Low)` },
        { value: `${B.key}-asc`, label: `${A} (Low-High)` }
      ) : B.key === "age" || B.key.includes("date") || B.key.includes("time") ? w.push(
        { value: `${B.key}-desc`, label: `${A} (Oldest-Youngest)` },
        { value: `${B.key}-asc`, label: `${A} (Youngest-Oldest)` }
      ) : w.push(
        { value: `${B.key}-asc`, label: `${A} (A-Z)` },
        { value: `${B.key}-desc`, label: `${A} (Z-A)` }
      );
    }), w;
  }, []), le = ne((f, x) => x ? [...f].sort((w, B) => {
    const A = w[x.key], I = B[x.key];
    if (A == null && I == null) return 0;
    if (A == null) return 1;
    if (I == null) return -1;
    const Y = Number(A), X = Number(I);
    if (!isNaN(Y) && !isNaN(X))
      return x.direction === "asc" ? Y - X : X - Y;
    const K = String(A).toLowerCase(), he = String(I).toLowerCase(), we = K.localeCompare(he);
    return x.direction === "asc" ? we : -we;
  }) : f, []), V = ne((f) => {
    if (!f) {
      $((K) => ({ ...K, cardSortConfig: null })), H("Card sorting cleared");
      return;
    }
    const [x, w] = f.split("-"), B = { key: x, direction: w };
    $((K) => ({ ...K, cardSortConfig: B }));
    const Y = s[p.selectedIndex]?.columns.find((K) => K.key === x)?.label || x;
    H(`Cards sorted by ${Y} in ${w === "asc" ? "ascending" : "descending"} order`);
  }, [s, p.selectedIndex, H]), te = ne((f) => {
    const B = s[p.selectedIndex]?.columns.find((I) => I.key === f.key)?.label || f.key, A = f.direction === "asc" ? "ascending" : "descending";
    return `${B} (${A})`;
  }, [s, p.selectedIndex]), G = ne((f) => {
    const x = s[p.selectedIndex];
    if (o) {
      const w = p.sortConfig;
      return !w || w.length === 0 ? f : [...f].sort((B, A) => {
        for (const { key: I, direction: Y } of w) {
          let X = B[I], K = A[I];
          const he = x?.columns.find((Ne) => Ne.key === I);
          if (he?.cardRenderer ? (X = he.cardRenderer(B), K = he.cardRenderer(A)) : he?.render && (X = he.render(B), K = he.render(A)), X == null && K == null) continue;
          if (X == null) return Y === "asc" ? -1 : 1;
          if (K == null) return Y === "asc" ? 1 : -1;
          const we = Number(X), be = Number(K);
          if (!isNaN(we) && !isNaN(be)) {
            const Ne = we - be;
            if (Ne !== 0) return Y === "asc" ? Ne : -Ne;
            continue;
          }
          const ve = String(X).toLowerCase(), Be = String(K).toLowerCase(), Ee = ve.localeCompare(Be);
          if (Ee !== 0) return Y === "asc" ? Ee : -Ee;
        }
        return 0;
      });
    } else
      return le(f, C.cardSortConfig);
  }, [o, p.sortConfig, C.cardSortConfig, le, s, p.selectedIndex]), z = ne((f, x) => {
    const w = J(f), B = w[x];
    if (B) {
      B.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const A = `Focused on ${B.label}, ${B.type} ${x + 1} of ${w.length} within card`;
      H(A);
    }
  }, [J, H]), ae = ne((f) => {
    R.current[f]?.focus();
  }, []), de = ne(() => {
    const f = j.current[0];
    if (!f) return [];
    const x = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), w = f.querySelectorAll(x);
    return Array.from(w);
  }, []), h = ne((f) => {
    if (f === 0) {
      const x = j.current[0], w = x?.querySelector(".sort-controls-row");
      if (w) {
        w.setAttribute("tabindex", "-1"), w.focus();
        const A = `Sort controls group with ${de().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        H(A);
      } else x && x.focus();
    } else {
      const x = de(), w = f - 1, B = x[w];
      if (B) {
        B.focus();
        const A = B.tagName.toLowerCase() === "select", I = B.tagName.toLowerCase() === "button", Y = A ? "dropdown" : I ? "button" : "control", X = A ? ". Use Space key to open dropdown" : "", K = `${Y} ${w + 1} of ${x.length}${X}`;
        H(K);
      }
    }
  }, [de, H]), W = ne((f, x) => {
    const { key: w } = f, B = s[p.selectedIndex], A = B?.data.length || 0;
    if (w === "ArrowLeft" && f.shiftKey) {
      f.preventDefault(), f.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (w === "ArrowRight" && f.shiftKey) {
      f.preventDefault(), f.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!C.isCardNavigationActive) {
      switch (w) {
        case "ArrowUp":
          if (f.preventDefault(), x === 0)
            $((K) => ({ ...K, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), h(0);
          else {
            const K = se(x, "up", A, C.gridColumns);
            K !== x && ($((he) => ({ ...he, focusedCardIndex: K })), S(K), H(`Moved to card ${K + 1} of ${A}`));
          }
          break;
        case "ArrowDown":
          f.preventDefault();
          const I = se(x, "down", A, C.gridColumns);
          I !== x && ($((K) => ({ ...K, focusedCardIndex: I })), S(I), H(`Moved to card ${I + 1} of ${A}`));
          break;
        case "ArrowLeft":
          f.preventDefault();
          const Y = se(x, "left", A, C.gridColumns);
          Y !== x ? ($((K) => ({ ...K, focusedCardIndex: Y })), S(Y), H(`Moved to card ${Y + 1} of ${A}`)) : p.selectedIndex > 0 && (F({ type: "SET_SELECTED_INDEX", payload: p.selectedIndex - 1 }), $((K) => ({ ...K, focusArea: "tabs" })), setTimeout(() => ae(p.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          f.preventDefault();
          const X = se(x, "right", A, C.gridColumns);
          X !== x ? ($((K) => ({ ...K, focusedCardIndex: X })), S(X), H(`Moved to card ${X + 1} of ${A}`)) : p.selectedIndex < s.length - 1 && (F({ type: "SET_SELECTED_INDEX", payload: p.selectedIndex + 1 }), $((K) => ({ ...K, focusArea: "tabs" })), setTimeout(() => ae(p.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (B?.data[x]) {
            f.preventDefault(), $((he) => ({
              ...he,
              selectedCardIndex: x
            }));
            const K = J(x);
            K.length > 0 ? ($((he) => ({
              ...he,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: K,
              selectedCardIndex: x
              // Ensure selection is maintained
            })), H(`Card ${x + 1} selected and navigation activated. ${K.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : H(`Card ${x + 1} selected.`);
          }
          break;
        case " ":
          if (B?.data[x]) {
            f.preventDefault(), $((he) => ({
              ...he,
              selectedCardIndex: he.selectedCardIndex === x ? -1 : x
            }));
            const K = C.selectedCardIndex === x;
            H(`Card ${x + 1} ${K ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (w) {
      case "ArrowUp":
      case "ArrowLeft":
        f.preventDefault();
        const I = Math.max(0, C.focusedCardElementIndex - 1);
        $((he) => ({ ...he, focusedCardElementIndex: I })), z(x, I);
        break;
      case "ArrowDown":
      case "ArrowRight":
        f.preventDefault();
        const Y = Math.min(C.cardElements.length - 1, C.focusedCardElementIndex + 1);
        $((he) => ({ ...he, focusedCardElementIndex: Y })), z(x, Y);
        break;
      case "Enter":
        f.preventDefault();
        const X = C.cardElements[C.focusedCardElementIndex];
        X && (X.element.click(), H(`Activated ${X.label}`));
        break;
      case " ":
        f.preventDefault();
        const K = C.cardElements[C.focusedCardElementIndex];
        if (K) {
          const he = new MouseEvent("dblclick", { bubbles: !0 });
          K.element.dispatchEvent(he), H(`Double-clicked ${K.label}`);
        }
        break;
      case "Escape":
        f.preventDefault(), $((he) => ({
          ...he,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => S(x), 0), H("Exited card navigation, returned to card level");
        break;
      case "Home":
        f.preventDefault(), C.cardElements.length > 0 && ($((he) => ({ ...he, focusedCardElementIndex: 0 })), z(x, 0));
        break;
      case "End":
        if (f.preventDefault(), C.cardElements.length > 0) {
          const he = C.cardElements.length - 1;
          $((we) => ({ ...we, focusedCardElementIndex: he })), z(x, he);
        }
        break;
    }
  }, [C, p.selectedIndex, s, ce, S, ae, $, J, z, H]), Z = ne((f) => {
    const x = R.current[f], w = x?.parentElement;
    if (!x || !w) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const B = x.getBoundingClientRect(), A = w.getBoundingClientRect();
    B.left >= A.left && B.right <= A.right || (console.log("Tab not visible, scrolling into view (mobile)"), x.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), oe = ne((f, x) => {
    if (v !== "cards")
      return;
    const { key: w } = f;
    switch (w) {
      case "ArrowLeft":
        f.preventDefault();
        const B = x > 0 ? x - 1 : s.length - 1;
        ie(B), $((X) => ({ ...X, focusedTabIndex: B })), R.current[B]?.focus(), Z(B);
        break;
      case "ArrowRight":
        f.preventDefault();
        const A = x < s.length - 1 ? x + 1 : 0;
        ie(A), $((X) => ({ ...X, focusedTabIndex: A })), R.current[A]?.focus(), Z(A);
        break;
      case "ArrowDown":
        f.preventDefault();
        const I = s[p.selectedIndex];
        I && I.columns && I.columns.length > 0 ? ($((X) => ({
          ...X,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), h(0)) : ($((X) => ({
          ...X,
          focusArea: "cards",
          focusedCardIndex: 0
        })), S(0));
        break;
      case "Home":
        f.preventDefault(), ie(0), $((X) => ({ ...X, focusedTabIndex: 0 })), R.current[0]?.focus(), Z(0);
        break;
      case "End":
        f.preventDefault();
        const Y = s.length - 1;
        ie(Y), $((X) => ({ ...X, focusedTabIndex: Y })), R.current[Y]?.focus(), Z(Y);
        break;
      case "Enter":
      case " ":
        f.preventDefault(), ie(x);
        break;
    }
  }, [s.length, ie, v, S, $, Z]), re = ne((f, x) => {
    if (v !== "cards")
      return;
    const { key: w } = f, B = s[p.selectedIndex];
    if (x === 0 && !C.isSortControlsActive) {
      switch (w) {
        case "ArrowUp":
          f.preventDefault(), $((I) => ({
            ...I,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), ae(p.selectedIndex);
          break;
        case "ArrowDown":
          f.preventDefault(), B?.data && B.data.length > 0 && ($((I) => ({
            ...I,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), S(0));
          break;
        case "Enter":
        case " ":
          f.preventDefault();
          const A = de();
          if (A.length > 0) {
            $((Y) => ({
              ...Y,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), h(1);
            const I = `Entered sort controls navigation mode. ${A.length} controls available. Use arrow keys to navigate between controls.`;
            H(I);
          }
          break;
        case "Escape":
          f.preventDefault(), $((I) => ({
            ...I,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), ae(p.selectedIndex);
          break;
      }
      return;
    }
    if (C.isSortControlsActive) {
      const I = de().length;
      switch (w) {
        case "ArrowLeft":
          f.preventDefault();
          const Y = C.focusedSortControlIndex > 1 ? C.focusedSortControlIndex - 1 : I;
          $((K) => ({ ...K, focusedSortControlIndex: Y })), h(Y);
          break;
        case "ArrowRight":
          f.preventDefault();
          const X = C.focusedSortControlIndex < I ? C.focusedSortControlIndex + 1 : 1;
          $((K) => ({ ...K, focusedSortControlIndex: X })), h(X);
          break;
        case "ArrowDown":
          if (f.preventDefault(), C.isSortControlsActive) {
            const K = C.focusedSortControlIndex < I ? C.focusedSortControlIndex + 1 : 1;
            $((he) => ({ ...he, focusedSortControlIndex: K })), h(K);
          } else
            B?.data && B.data.length > 0 && ($((K) => ({
              ...K,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), S(0));
          break;
        case "ArrowUp":
          f.preventDefault(), $((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), h(0);
          break;
        case "Escape":
          f.preventDefault(), $((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), h(0);
          break;
      }
    }
  }, [v, s, p.selectedIndex, C.isSortControlsActive, C.focusedSortControlIndex, h, ae, S, $, H]);
  if (v === "cards") {
    const f = s[p.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${T || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": d,
          "aria-describedby": `${u || ""} ${b ? `${b}-navigation-help` : ""}`.trim(),
          "aria-orientation": m,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((x, w) => {
            const B = w === p.selectedIndex, A = x.disabled || g;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${x.id}`,
                "aria-controls": `panel-${x.id}`,
                "aria-selected": B,
                "aria-disabled": A,
                tabIndex: B ? 0 : -1,
                ref: (I) => {
                  R.current[w] = I;
                },
                onClick: () => ie(w),
                onKeyDown: (I) => oe(I, w),
                disabled: A,
                className: [
                  "aria-tabs-datagrid__tab",
                  B ? "aria-tabs-datagrid__tab--selected" : "",
                  A ? "aria-tabs-datagrid__tab--disabled" : ""
                ].filter(Boolean).join(" "),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: x.label }),
                  p.tabLoadingStates[w] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  p.tabErrors[w] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              x.id
            );
          })
        }
      ),
      f && f.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          Ya,
          {
            sortConfig: p.sortConfig || [],
            columns: f.columns.map((x) => ({ key: x.key, label: x.label })),
            onSortChange: (x) => {
              F({ type: "SET_SORT", payload: x });
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
            tabIndex: C.focusArea === "sort-controls" ? 0 : -1,
            ref: (x) => {
              j.current[0] = x;
            },
            onKeyDown: (x) => re(x, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${f.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  ja,
                  {
                    id: `card-sort-${f.id}`,
                    name: `card-sort-${f.id}`,
                    value: C.cardSortConfig ? `${C.cardSortConfig.key}-${C.cardSortConfig.direction}` : "",
                    onChange: (x) => V(x.target.value),
                    className: "sort-select",
                    children: O(f.columns).map((x) => /* @__PURE__ */ n.jsx("option", { value: x.value, children: x.label }, x.value))
                  }
                )
              ] }),
              C.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  te(C.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  Re,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => V(""),
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
          ref: L,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${f?.label || "Data"} cards in ${C.gridRows} rows and ${C.gridColumns} columns`,
          "aria-rowcount": C.gridRows,
          "aria-colcount": C.gridColumns,
          id: `panel-${f?.id}`,
          "aria-labelledby": `tab-${f?.id}`,
          children: G(f?.data || []).map((x, w) => {
            const B = C.selectedCardIndex === w, A = C.focusedCardIndex === w && C.focusArea === "cards", I = C.focusedCardIndex === w && C.focusArea === "card" && C.isCardNavigationActive, Y = w === 0 && C.focusArea !== "cards", X = A || Y, K = U(w, C.gridColumns);
            if (r.cardTemplate) {
              const be = r.cardTemplate(x, f.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": K.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      ref: (ve) => {
                        N.current[w] = ve;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        B ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        A ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        I ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": K.col + 1,
                      "aria-selected": B,
                      "aria-expanded": I,
                      "aria-description": I ? `Card navigation active. ${C.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: X ? 0 : -1,
                      onClick: () => {
                        $((ve) => ({
                          ...ve,
                          selectedCardIndex: ve.selectedCardIndex === w ? -1 : w
                        })), ce(x);
                      },
                      onKeyDown: (ve) => W(ve, w),
                      onFocus: () => {
                        $((ve) => ve.focusedCardIndex !== w || ve.focusArea !== "cards" ? {
                          ...ve,
                          focusedCardIndex: w,
                          focusArea: "cards"
                        } : ve);
                      },
                      children: be
                    }
                  )
                },
                `card-${w}`
              );
            }
            const he = _c(x, f.columns, k, _), we = [
              he.className || "",
              B ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              A ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              I ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": K.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      B ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      A ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      I ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": K.col + 1,
                    "aria-selected": B,
                    "aria-expanded": I,
                    onKeyDown: (be) => {
                      be.key === "Enter" && (be.preventDefault(), $((ve) => ({
                        ...ve,
                        selectedCardIndex: w
                      }))), W(be, w);
                    },
                    children: /* @__PURE__ */ n.jsx(
                      Va,
                      {
                        ...he,
                        ref: (be) => {
                          N.current[w] = be;
                        },
                        className: we,
                        "aria-label": `${he["aria-label"] || he.heading}. ${I ? `Card navigation active with ${C.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: X ? 0 : -1,
                        onClick: () => {
                          $((be) => ({
                            ...be,
                            selectedCardIndex: be.selectedCardIndex === w ? -1 : w
                          })), ce(x);
                        },
                        onKeyDown: (be) => W(be, w),
                        onFocus: () => {
                          C.isCardNavigationActive || $((be) => be.focusedCardIndex !== w || be.focusArea !== "cards" ? {
                            ...be,
                            focusedCardIndex: w,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : be);
                        }
                      }
                    )
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
          ref: P,
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
  return v === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${T || ""}`, children: /* @__PURE__ */ n.jsx(
    Kn,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: d,
      ariaDescription: u,
      orientation: m,
      id: b,
      disabled: g,
      selectedIndex: l,
      onTabChange: c,
      className: "aria-tabs-datagrid-adaptive__table--hybrid",
      ...y
    }
  ) }) : /* @__PURE__ */ n.jsx(
    Kn,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: d,
      ariaDescription: u,
      orientation: m,
      id: b,
      disabled: g,
      selectedIndex: l,
      onTabChange: c,
      ...y
    }
  );
}, es = (e) => {
  const t = Zn.find((r) => r.value === e);
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
  booleanRenderer: (e) => es(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, wc = (e) => Fr(e, [
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
  booleanRenderer: (e) => es(e),
  getDataId: (e) => `financial-${e.id}`
}, Cc = (e) => Fr(e, [
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
}, ba = (e, t) => {
  const r = jc[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, ts = [
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
], xa = [
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
], ya = [
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
], va = [
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
    data: ts,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      qa,
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
      Ka,
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
      Za,
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
      Ja,
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
  const [e, t] = ge("healthcare"), r = ke(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: sc,
      tabPanels: Rc(),
      data: ts
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...ba("ecommerce", xa),
      data: xa
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...ba("financial", ya),
      data: ya
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Ic,
      tabPanels: Fr(va, [
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
      data: va
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
        Re,
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
      Kn,
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
}, em = Bc, ns = (e) => /* @__PURE__ */ n.jsx(Na, { ...e }), tm = ({
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
  logo: g,
  className: T,
  ...y
}) => {
  const v = {
    service: c,
    navigation: d,
    search: u,
    account: m,
    organisation: b,
    logo: g,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ga, { ...s }),
    /* @__PURE__ */ n.jsx(Ba, { ...v }),
    /* @__PURE__ */ n.jsx(ns, { className: T, ...y, children: /* @__PURE__ */ n.jsx(Ta, { size: o, children: /* @__PURE__ */ n.jsx(Rt, { children: /* @__PURE__ */ n.jsxs(wr, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(et, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Fa, { ...l })
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
  ...g
}) => {
  const T = {
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
    /* @__PURE__ */ n.jsx(Ga, { ...s }),
    /* @__PURE__ */ n.jsx(Ba, { ...T }),
    /* @__PURE__ */ n.jsxs(ns, { className: b, ...g, children: [
      c && /* @__PURE__ */ n.jsx(Gn, { ...c }),
      /* @__PURE__ */ n.jsx(Ta, { size: o, children: /* @__PURE__ */ n.jsx(Rt, { children: /* @__PURE__ */ n.jsxs(wr, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(et, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Fa, { ...l })
  ] });
}, rs = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = Q("nhsuk-back-link", a), c = Q("nhsuk-back-link__link"), d = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
rs.displayName = "ForwardLink";
const pt = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function _a() {
  return typeof window > "u" ? pt.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function as() {
  const [e, t] = fe.useState(_a());
  fe.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(_a());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = fe.useCallback((s) => e >= pt[s], [e]), a = fe.useCallback((s) => e < pt[s], [e]), o = fe.useCallback((s, i) => e >= pt[s] && e < pt[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: o,
    /** Raw numeric values */
    values: pt
  };
}
function rm(e) {
  const { width: t, values: r } = as();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function Fc(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = fe.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = fe.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return fe.useEffect(() => {
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
    emptyState: g,
    a11y: T,
    className: y,
    getId: v = (ue) => ue.id,
    orientation: q = "vertical",
    autoEnableThirdColumn: E = !0,
    onDrillChange: k,
    navigationInstructions: _ = "Use arrow keys to navigate, Enter to open.",
    initialFocus: M = "first",
    skipFocusOnSelect: p = !1,
    skipAnnouncements: F = !1,
    onFocusChange: R,
    syncUrl: N = !1,
    urlParamSelected: j = "nsv",
    urlParamDrill: L = "nsvDrill",
    urlSyncDebounceMs: C = 0,
    lazySecondary: $ = !1,
    navFooter: ee,
    collapsibleNav: U = !1,
    navInitiallyCollapsed: D = !1,
    onNavCollapseChange: se,
    collapseToggleLabelShow: ie = "Show navigation",
    collapseToggleLabelHide: ce = "Hide navigation",
    collapseToggleIconShow: S,
    collapseToggleIconHide: J,
    persistNavCollapsed: P,
    navCollapsedStorageKey: H = "nsvCollapsed",
    navCollapsedUrlParam: O = "nsvCollapsed",
    autoContentHeader: le,
    contentHeaderLevel: V = 2,
    renderContentHeader: te,
    contentSubheader: G,
    secondarySubheader: z
  } = e, { up: ae } = as(), [de, h] = fe.useState(!1);
  fe.useEffect(() => {
    h(!0);
  }, []);
  const W = de && ae("medium"), Z = de && ae("xlarge");
  let oe;
  c ? oe = c : W ? oe = "two-column" : oe = "list", !c && E && l && Z && (oe = "three-column");
  const re = Fc({
    enabled: N,
    paramSelected: j,
    paramDrill: L
  }), [f, x] = fe.useState(
    () => re.selectedId !== void 0 ? re.selectedId : a
  ), w = r !== void 0 ? r : f, B = t.find((ue) => v(ue) === w), A = fe.useRef(null), I = fe.useRef(null), Y = !!B && (oe === "list" || oe === "cards"), X = fe.useMemo(() => le === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : le === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : le === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: le.mobile !== void 0 ? le.mobile : !0,
    tablet: le.tablet || !1,
    desktop: le.desktop || !1
  }, [le]), K = de && ae("medium") && !ae("xlarge"), he = de && ae("xlarge"), we = !!l, be = oe === "three-column", [ve, Be] = fe.useState(!1);
  fe.useEffect(() => {
    be && ve && Be(!1);
  }, [be, ve]);
  const Ne = !!B && (Y && X.mobile || !Y && K && X.tablet || !Y && he && X.desktop) || we && !be, Cn = `h${V}`, jn = B ? fe.createElement(Cn, { style: { marginLeft: Y ? 32 : 0, marginRight: Y ? 32 : 0 } }, B.label) : null, Lr = Y ? "mobile" : K ? "tablet" : "desktop", Zs = we && !be && !ve, Nn = Y && X.mobile ? /* @__PURE__ */ n.jsx(
    Gn,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => ft(void 0, void 0)
    }
  ) : void 0, Tn = Zs ? /* @__PURE__ */ n.jsx(
    rs,
    {
      element: "button",
      text: m,
      onClick: () => {
        Be(!0);
      }
    }
  ) : void 0, Er = !be && ve ? /* @__PURE__ */ n.jsx(
    Gn,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => Be(!1)
    }
  ) : void 0, Js = fe.useMemo(() => {
    if (!Ne || !B) return null;
    if (te) return te({
      item: B,
      detailActive: Y,
      context: Lr,
      backLink: Nn,
      defaultHeading: jn
    });
    const ue = B && G ? typeof G == "function" ? G(B) : G : null;
    return /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
      /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 0, flex: "1 1 auto", minWidth: 0 }, children: [
        Er || Nn,
        /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }, children: [
          jn,
          ue && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: ue })
        ] })
      ] }),
      Tn && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: Tn })
    ] });
  }, [Ne, B, te, Y, Lr, Nn, Er, jn, Tn, G]);
  fe.useEffect(() => {
    if (!N) return;
    const ue = oe === "three-column";
    let Se = !1;
    const me = () => {
      Se || (re.selectedId !== w && re.setSelectedId(w), re.drilledIn !== ue && re.setDrilledIn(ue));
    };
    if (C && C > 0) {
      const pe = setTimeout(me, C);
      return () => {
        Se = !0, clearTimeout(pe);
      };
    } else
      me();
  }, [N, re, w, oe, C]), fe.useEffect(() => {
    if (!N) return;
    const ue = () => {
      const Se = new URLSearchParams(window.location.search), me = Se.get(j);
      Se.get(L), x(me === null ? void 0 : me);
    };
    return window.addEventListener("popstate", ue), () => window.removeEventListener("popstate", ue);
  }, [N, j, L, c, l]);
  const $t = fe.useRef(0), Pe = fe.useRef(null), ft = fe.useCallback((ue, Se) => {
    r === void 0 && x(ue), o?.(ue, Se);
  }, [r, o]);
  fe.useEffect(() => {
    if (!p && Y && I.current) {
      const ue = setTimeout(() => I.current?.focus(), 30);
      return () => clearTimeout(ue);
    }
  }, [Y, w, p]);
  const kt = fe.useRef(null), [Me, wt] = fe.useState(() => M === "first" ? 0 : -1);
  fe.useEffect(() => {
    if (!kt.current) return;
    const ue = Array.from(kt.current.querySelectorAll("[data-nav-item]"));
    if (ue.forEach((Se, me) => {
      Se.tabIndex = (Me === -1 ? me === 0 && M === "first" : me === Me) ? 0 : -1;
    }), Me >= 0) {
      ue[Me]?.focus(), $t.current = Me;
      const me = t[Me];
      R?.(me ? v(me) : void 0, me, Me);
    }
  }, [Me, t, M, R, v]);
  const Xs = (ue) => {
    const Se = q === "vertical" ? "ArrowDown" : "ArrowRight", me = q === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ue.key === Se)
      ue.preventDefault(), wt((pe) => Math.min(t.length - 1, pe + 1));
    else if (ue.key === me)
      ue.preventDefault(), wt((pe) => Math.max(0, pe - 1));
    else if (ue.key === "Home")
      ue.preventDefault(), wt(0);
    else if (ue.key === "End")
      ue.preventDefault(), wt(t.length - 1);
    else if (ue.key === "Enter" || ue.key === " ") {
      ue.preventDefault();
      const pe = t[Me];
      pe && !pe.disabled && ft(v(pe), pe);
    } else if (ue.key.length === 1 && /[a-z0-9]/i.test(ue.key)) {
      Pe.current || (Pe.current = { buffer: "", last: 0 });
      const pe = Date.now(), st = 700, ot = ue.key.toLowerCase();
      pe - Pe.current.last > st ? Pe.current.buffer = ot : Pe.current.buffer += ot, Pe.current.last = pe;
      let Te = Pe.current.buffer;
      const Rn = Te.split("").every((Ct) => Ct === Te[0]), St = t.map((Ct) => String(Ct.label || "").toLowerCase());
      let $r = 0;
      Me >= 0 && ($r = (Me + 1) % t.length);
      let it;
      const Bn = (Ct, _f) => {
        const Ar = t.length;
        for (let Fn = 0; Fn < Ar; Fn++) {
          const Ln = ($r + Fn) % Ar;
          if (!t[Ln].disabled && St[Ln].startsWith(Ct))
            return Ln;
        }
      };
      Rn && Te.length > 1 ? it = Bn(Te[0]) : (it = Bn(Te), it === void 0 && Te.length > 1 && (it = Bn(Te[Te.length - 1]), it !== void 0 && Pe.current && (Pe.current.buffer = Te[Te.length - 1]))), it !== void 0 && wt(it);
    }
  }, Qs = fe.useMemo(() => {
    if (P && (P === "url" || P === "both") && typeof window < "u") {
      const Se = new URLSearchParams(window.location.search).get(O);
      if (Se === "1") return !0;
      if (Se === "0") return !1;
    }
    if (P && (P === "localStorage" || P === "both") && typeof window < "u")
      try {
        const ue = window.localStorage.getItem(H);
        if (ue === "1") return !0;
        if (ue === "0") return !1;
      } catch {
      }
    return D;
  }, [P, D, H, O]), [Ae, eo] = fe.useState(Qs);
  fe.useEffect(() => {
    se?.(Ae);
  }, [Ae, se]);
  const to = fe.useCallback(() => {
    W && U && eo((ue) => !ue);
  }, [W, U]);
  fe.useEffect(() => {
    if (P && !(typeof window > "u")) {
      if (P === "localStorage" || P === "both")
        try {
          window.localStorage.setItem(H, Ae ? "1" : "0");
        } catch {
        }
      if (P === "url" || P === "both") {
        const ue = new URLSearchParams(window.location.search);
        ue.set(O, Ae ? "1" : "0");
        const Se = `${window.location.pathname}?${ue.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", Se);
      }
    }
  }, [Ae, P, H, O]);
  const no = [
    "nhs-navigation-split-view",
    d ? "nhs-navigation-split-view--animated" : "",
    Y ? "nhs-navigation-split-view--detail-active" : "",
    oe === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    U && W && Ae ? "nhs-navigation-split-view--nav-collapsed" : "",
    y
  ].filter(Boolean).join(" "), Dn = fe.useRef(null);
  fe.useEffect(() => {
    if (!F && Dn.current) {
      const ue = B ? `Selected ${B.label}` : "Selection cleared";
      Dn.current.textContent = ue;
    }
  }, [B, F]), fe.useEffect(() => {
    !Y && w == null && kt.current && kt.current.querySelectorAll("[data-nav-item]")[$t.current]?.focus();
  }, [Y, w]);
  const rt = oe === "three-column", [In, ro] = fe.useState(!1);
  fe.useEffect(() => {
    rt && !In && ro(!0);
  }, [rt, In]);
  const Mr = fe.useRef(rt);
  fe.useEffect(() => {
    Mr.current !== rt && (k?.(rt), Mr.current = rt);
  }, [rt, k]);
  const ao = () => {
    if (oe === "cards")
      return /* @__PURE__ */ n.jsxs("ul", { className: "nhs-navigation-split-view__cards", role: "listbox", "aria-activedescendant": w ? String(w) : void 0, children: [
        t.map((me) => {
          const pe = v(me), st = pe === w;
          return /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", role: "option", "aria-selected": st, children: /* @__PURE__ */ n.jsxs(
            "button",
            {
              id: String(pe),
              type: "button",
              className: "nhs-navigation-split-view__card",
              "data-selected": st || void 0,
              "data-disabled": me.disabled || void 0,
              disabled: me.disabled,
              onClick: () => !me.disabled && ft(pe, me),
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
        t.length === 0 && !b && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", "aria-disabled": "true", children: g || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
      ] });
    const ue = "nsv-nav-instructions", Se = fe.useMemo(() => {
      const me = ({ item: pe, idx: st, selected: ot }) => {
        const Te = v(pe), Rn = pe.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: ot ? 0 : -1,
          onClick: () => {
            $t.current = st, ft(Te, pe);
          },
          onKeyDown: (St) => {
            (St.key === "Enter" || St.key === " ") && (St.preventDefault(), $t.current = st, ft(Te, pe));
          }
        };
        return /* @__PURE__ */ n.jsxs(
          "li",
          {
            id: String(Te),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": ot,
            "aria-current": ot ? "true" : void 0,
            "data-selected": ot || void 0,
            "data-disabled": pe.disabled || void 0,
            ...Rn,
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
      return fe.memo(me);
    }, [v, ft, s]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: kt,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Xs,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": ue,
          "aria-activedescendant": w ? String(w) : void 0,
          children: [
            t.map((me, pe) => /* @__PURE__ */ n.jsx(Se, { item: me, idx: pe, selected: v(me) === w }, v(me))),
            t.length === 0 && !b && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__list-item", "aria-disabled": "true", children: g || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
          ]
        }
      ),
      /* @__PURE__ */ n.jsx("div", { id: ue, style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: _ })
    ] });
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: A,
      className: no,
      "aria-label": T?.rootLabel,
      "data-layout": oe,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__panes", "data-active-detail": Y || void 0, style: { transform: Y ? "translateX(-100%)" : void 0 }, children: [
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "nhs-navigation-split-view__nav-pane",
              role: "navigation",
              "aria-label": T?.navigationLabel || "Items",
              "data-collapsed": Ae || void 0,
              children: [
                U && W && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: to,
                    className: "nhs-navigation-split-view__nav-collapse-btn",
                    "aria-label": Ae ? ie : ce,
                    title: Ae ? ie : ce,
                    children: Ae ? S || /* @__PURE__ */ n.jsx(Ec, {}) : J || /* @__PURE__ */ n.jsx(Lc, {})
                  }
                ) }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: ao() }),
                ee && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-footer", role: "contentinfo", children: ee })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              ref: I,
              className: "nhs-navigation-split-view__content-pane",
              role: "region",
              "aria-label": T?.contentLabel || "Content",
              "data-has-selection": !!B || void 0,
              tabIndex: -1,
              children: [
                Ne && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: Js }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__content-inner", style: { padding: 32, flex: 1 }, children: ve && !be ? l?.(B) : i(B) })
              ]
            }
          ),
          oe === "three-column" && (!$ || In) && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhs-navigation-split-view__secondary-pane",
              role: "region",
              "aria-label": T?.secondaryContentLabel || "Secondary",
              children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__secondary-inner", style: { display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }, children: [
                B && z && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__secondary-header", style: { padding: "16px 32px", borderBottom: "1px solid var(--nsplit-divider)" }, children: typeof z == "function" ? z(B) : z }),
                /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(B) })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ n.jsx("div", { ref: Dn, "aria-live": "polite", "aria-atomic": "true", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" } }),
        /* @__PURE__ */ n.jsx("div", { "aria-live": "polite", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: rt ? "Expanded to three column layout" : "In two column layout" })
      ] })
    }
  );
}
Mc.displayName = "NavigationSplitView";
const $c = "150ms", Ac = "300ms", Hc = "500ms", Pc = "cubic-bezier(0.4, 0, 1, 1)", zc = "cubic-bezier(0, 0, 0.2, 1)", Wc = "cubic-bezier(0.4, 0, 0.2, 1)", Oc = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Uc = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Gc = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Vc = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Yc = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", qc = "1px", Kc = "2px", Zc = "4px", Jc = "4px", Xc = "4px", Qc = "2px", ed = "1px", td = "0px", nd = "4px", rd = "8px", ad = "12px", ss = "#d8dde0", os = "#4c6272", is = "#d8dde0", ls = "#aeb7bd", cs = "#d5281b", ds = "#005eb8", us = "#ffffff", hs = "#212b32", fs = "#007f3b", ms = "#330072", ps = "#7c2855", gs = "#d5281b", bs = "#ffeb3b", xs = "#fff9c4", ys = "#ffb81c", vs = "#ed8b00", _s = "#00a499", ks = "#ae2573", ws = "#4c6272", Ss = "#768692", Cs = "#aeb7bd", js = "#d8dde0", Ns = "#f0f4f5", sd = "#212b32", od = "#4c6272", id = "#ffffff", ld = "#212b32", cd = "#005eb8", dd = "#7c2855", ud = "#003087", hd = "#330072", fd = "#ffeb3b", md = "#212b32", pd = "#d8dde0", gd = "#ffffff33", bd = "#d5281b", xd = "#4c6272", yd = "#ffffff", vd = "#007f3b", _d = "#ffffff", kd = "#006530", wd = "#004021", Sd = "#004021", Cd = "#00000000", jd = "#ffffff", Nd = "#005eb8", Td = "#005eb8", Dd = "#d9e5f2", Id = "#c7daf0", Rd = "#005eb8", Bd = "#ffffff", Fd = "#212b32", Ld = "#d9dde0", Ed = "#b3bcc2", Md = "#b3bcc2", $d = "#d5281b", Ad = "#aa2016", Hd = "#6a140e", Pd = "#6a140e", zd = "#005eb8", Wd = "#004b93", Od = "#002f5c", Ud = "#002f5c", Gd = "8px", Vd = "16px", Yd = "12px", qd = "16px", Kd = "4px", Zd = "40px", Jd = "4px", Xd = "40px", Qd = "12px", eu = "16px", tu = "32px", nu = "16px", ru = "20px", au = "28px", su = "9px", ou = "2px", iu = "16px", lu = "24px", cu = "8px", du = "24px", uu = "16px", hu = "4px", fu = "4px", mu = "4px", pu = "8px", gu = "4px", bu = "16px", xu = "#007f3b", yu = "#006530", vu = "#004021", _u = "#d8dde0", ku = "#ffffff", wu = "#768692", Su = "#00000000", Cu = "#ffeb3b", ju = "#00000000", Nu = "#ffffff", Tu = "#d9e5f2", Du = "#c7daf0", Iu = "#005eb8", Ru = "#005eb8", Ts = "8px", Ds = "16px", Is = "12px", Rs = "16px", Bu = "2px", Fu = "4px", Lu = "4px", Eu = "600", Mu = "#ffffff", $u = "#d8dde0", Au = "#aeb7bd", Hu = "#f0f4f5", Pu = "#212b32", zu = "#212b32", Wu = "#005eb8", Bs = "16px", Fs = "32px", Ls = "16px", Ou = "1px", Uu = "4px", Gu = "none", Vu = "0 2px 4px rgba(0, 0, 0, 0.1)", Yu = "#ffffff", qu = "#ffffff", Ku = "#d8dde0", Zu = "#ffffff", Ju = "#4c6272", Xu = "#ffeb3b", Qu = "#d5281b", eh = "#aeb7bd", th = "#212b32", nh = "#4c6272", rh = "#768692", ah = "#212b32", sh = "#ffffff", oh = "600", ih = "#d5281b", lh = "600", ch = "#4c6272", Es = "4px", Ms = "40px", $s = "40px", As = "12px", dh = "2px", uh = "4px", hh = "0px", fh = "16px", mh = "18px", ph = "24px", gh = "32px", bh = "34px", xh = "32px", yh = "40px", vh = "48px", _h = "5.4ex", kh = "7.2ex", wh = "9ex", Sh = "10.8ex", Ch = "20ex", jh = "38ex", Nh = "56ex", Th = "44px", Dh = "40px", Ih = "1020px", Rh = "100%", Bh = "50%", Fh = "33.333%", Lh = "25%", Eh = "20%", Mh = "320px", $h = "641px", Ah = "1025px", Hh = "1280px", Ph = "960px", zh = "32px", Wh = "16px", Oh = "#d5281b", Uh = "#d5281b", Gh = "#ffffff", Vh = "#007f3b", Yh = "#007f3b", qh = "#ffffff", Kh = "#ffeb3b", Zh = "#ffeb3b", Jh = "#212b32", Xh = "#005eb8", Qh = "#005eb8", ef = "#ffffff", tf = "#d8dde0", nf = "#aeb7bd", rf = "#768692", af = "0 4px 0 #004021", sf = "0 4px 0 #005eb8", of = "0 4px 0 #6a140e", lf = "0 4px 0 #ffeb3b", cf = "none", df = "0 2px 4px rgba(0, 0, 0, 0.1)", uf = "4px", hf = "0px", ff = "solid", mf = "0 0 0 3px #ffeb3b", pf = "0 0 0 3px #ffeb3b", gf = "none", bf = "0 1px 3px rgba(0, 0, 0, 0.12)", xf = "0 2px 6px rgba(0, 0, 0, 0.16)", yf = "0 4px 12px rgba(0, 0, 0, 0.20)", Hs = "0", Ps = "4px", zs = "8px", Ws = "16px", Os = "24px", Us = "32px", Gs = "40px", Vs = "48px", Ys = "56px", qs = "64px", Jn = "0", Xn = "0", Qn = "4px", er = "4px", tr = "8px", nr = "8px", rr = "8px", ar = "16px", sr = "16px", or = "24px", ir = "24px", lr = "32px", cr = "32px", dr = "40px", ur = "40px", hr = "48px", fr = "48px", mr = "56px", pr = "56px", gr = "64px", Zt = "Frutiger W01", Jt = "Arial, Helvetica, sans-serif", Xt = "sans-serif", Qt = "400", en = "600", tn = "400", nn = "12px", rn = "14px", an = "12pt", sn = "14px", on = "16px", ln = "12pt", cn = "16px", dn = "19px", un = "13pt", hn = "19px", fn = "22px", mn = "15pt", pn = "22px", gn = "26px", bn = "17pt", xn = "27px", yn = "36px", vn = "20pt", _n = "33px", kn = "48px", wn = "24pt", br = "16px", xr = "24px", ze = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, We = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Oe = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ue = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ge = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ve = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ye = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, qe = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ke = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ze = {
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
  BorderColorCard: is,
  BorderColorCardHover: ls,
  BorderColorDefault: ss,
  BorderColorError: cs,
  BorderColorForm: os,
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
  ButtonSpacingPaddingHorizontalDesktop: Rs,
  ButtonSpacingPaddingHorizontalMobile: Ds,
  ButtonSpacingPaddingVerticalDesktop: Is,
  ButtonSpacingPaddingVerticalMobile: Ts,
  ButtonTypographyWeight: Eu,
  CardBackgroundDefault: Mu,
  CardBorderBottom: Hu,
  CardBorderDefault: $u,
  CardBorderHover: Au,
  CardBorderWidthBottom: Uu,
  CardBorderWidthDefault: Ou,
  CardShadowDefault: Gu,
  CardShadowHover: Vu,
  CardSpacingHeadingMargin: Ls,
  CardSpacingPaddingDesktop: Fs,
  CardSpacingPaddingMobile: Bs,
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
  ColorGrey1: ws,
  ColorGrey2: Ss,
  ColorGrey3: Cs,
  ColorGrey4: js,
  ColorGrey5: Ns,
  ColorLinkActive: ud,
  ColorLinkDefault: cd,
  ColorLinkHover: dd,
  ColorLinkVisited: hd,
  ColorPrimaryBlack: hs,
  ColorPrimaryBlue: ds,
  ColorPrimaryDarkPink: ps,
  ColorPrimaryGreen: fs,
  ColorPrimaryPurple: ms,
  ColorPrimaryRed: gs,
  ColorPrimaryWhite: us,
  ColorPrimaryYellow: bs,
  ColorSecondaryAquaGreen: _s,
  ColorSecondaryOrange: vs,
  ColorSecondaryPaleYellow: xs,
  ColorSecondaryPink: ks,
  ColorSecondaryWarmYellow: ys,
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
  FontLineHeightBase: xr,
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
  FontSizeBase: br,
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
  FormSpacingCheckboxLabelPadding: As,
  FormSpacingCheckboxSize: $s,
  FormSpacingInputMinHeight: Ms,
  FormSpacingInputPadding: Es,
  GridGutter: zh,
  GridGutterHalf: Wh,
  GridPageWidth: Ph,
  HeadingsNhsukHeadingL: We,
  HeadingsNhsukHeadingM: Oe,
  HeadingsNhsukHeadingS: Ue,
  HeadingsNhsukHeadingXl: ze,
  HeadingsNhsukHeadingXs: Ge,
  LayoutColumnActions: Eh,
  LayoutColumnFull: Rh,
  LayoutColumnHalf: Bh,
  LayoutColumnQuarter: Lh,
  LayoutColumnThird: Fh,
  LayoutContainerMaxWidth: Ih,
  ParagraphsBody: Ve,
  ParagraphsBodyLarge: Ye,
  ParagraphsBodySmall: qe,
  ParagraphsLedeText: Ke,
  ParagraphsLedeTextSmall: Ze,
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
  Spacing0: Hs,
  Spacing1: Ps,
  Spacing2: zs,
  Spacing3: Ws,
  Spacing4: Os,
  Spacing5: Us,
  Spacing6: Gs,
  Spacing7: Vs,
  Spacing8: Ys,
  Spacing9: qs,
  SpacingResponsive0Mobile: Jn,
  SpacingResponsive0Tablet: Xn,
  SpacingResponsive1Mobile: Qn,
  SpacingResponsive1Tablet: er,
  SpacingResponsive2Mobile: tr,
  SpacingResponsive2Tablet: nr,
  SpacingResponsive3Mobile: rr,
  SpacingResponsive3Tablet: ar,
  SpacingResponsive4Mobile: sr,
  SpacingResponsive4Tablet: or,
  SpacingResponsive5Mobile: ir,
  SpacingResponsive5Tablet: lr,
  SpacingResponsive6Mobile: cr,
  SpacingResponsive6Tablet: dr,
  SpacingResponsive7Mobile: ur,
  SpacingResponsive7Tablet: hr,
  SpacingResponsive8Mobile: fr,
  SpacingResponsive8Tablet: mr,
  SpacingResponsive9Mobile: pr,
  SpacingResponsive9Tablet: gr,
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
), om = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
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
), im = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
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
), lm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), cm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), dm = ({
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
), um = ({
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
), hm = ({
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
), fm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ke.fontFamily,
      fontWeight: Ke.fontWeight,
      fontSize: Ke.fontSize.mobile,
      lineHeight: Ke.lineHeight,
      marginTop: Ke.marginTop,
      marginBottom: Ke.marginBottom.mobile,
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
      fontFamily: Ze.fontFamily,
      fontWeight: Ze.fontWeight,
      fontSize: Ze.fontSize.mobile,
      lineHeight: Ze.lineHeight,
      marginTop: Ze.marginTop,
      marginBottom: Ze.marginBottom.mobile,
      ...r
    },
    children: e
  }
), pm = () => ke(() => vf, []), gm = () => ke(() => ({
  // Border colors
  BorderColorDefault: ss,
  BorderColorForm: os,
  BorderColorCard: is,
  BorderColorCardHover: ls,
  BorderColorError: cs,
  // Primary colors
  ColorPrimaryBlue: ds,
  ColorPrimaryWhite: us,
  ColorPrimaryBlack: hs,
  ColorPrimaryGreen: fs,
  ColorPrimaryPurple: ms,
  ColorPrimaryDarkPink: ps,
  ColorPrimaryRed: gs,
  ColorPrimaryYellow: bs,
  // Secondary colors
  ColorSecondaryPaleYellow: xs,
  ColorSecondaryWarmYellow: ys,
  ColorSecondaryOrange: vs,
  ColorSecondaryAquaGreen: _s,
  ColorSecondaryPink: ks,
  // Grey scale
  ColorGrey1: ws,
  ColorGrey2: Ss,
  ColorGrey3: Cs,
  ColorGrey4: js,
  ColorGrey5: Ns
}), []), bm = () => ke(() => ({
  Spacing0: Hs,
  Spacing1: Ps,
  Spacing2: zs,
  Spacing3: Ws,
  Spacing4: Os,
  Spacing5: Us,
  Spacing6: Gs,
  Spacing7: Vs,
  Spacing8: Ys,
  Spacing9: qs
}), []), xm = () => ke(() => ({
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
    Size: br,
    LineHeight: xr
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
  FontSizeBase: br,
  FontLineHeightBase: xr
}), []), ym = () => ke(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
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
  Tablet: {
    Size0: Xn,
    Size1: er,
    Size2: nr,
    Size3: ar,
    Size4: or,
    Size5: lr,
    Size6: dr,
    Size7: hr,
    Size8: mr,
    Size9: gr
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Jn,
  SpacingResponsive0Tablet: Xn,
  SpacingResponsive1Mobile: Qn,
  SpacingResponsive1Tablet: er,
  SpacingResponsive2Mobile: tr,
  SpacingResponsive2Tablet: nr,
  SpacingResponsive3Mobile: rr,
  SpacingResponsive3Tablet: ar,
  SpacingResponsive4Mobile: sr,
  SpacingResponsive4Tablet: or,
  SpacingResponsive5Mobile: ir,
  SpacingResponsive5Tablet: lr,
  SpacingResponsive6Mobile: cr,
  SpacingResponsive6Tablet: dr,
  SpacingResponsive7Mobile: ur,
  SpacingResponsive7Tablet: hr,
  SpacingResponsive8Mobile: fr,
  SpacingResponsive8Tablet: mr,
  SpacingResponsive9Mobile: pr,
  SpacingResponsive9Tablet: gr
}), []), vm = () => ke(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Ts,
  ButtonSpacingPaddingHorizontalMobile: Ds,
  ButtonSpacingPaddingVerticalDesktop: Is,
  ButtonSpacingPaddingHorizontalDesktop: Rs,
  // Card spacing	
  CardSpacingPaddingMobile: Bs,
  CardSpacingPaddingDesktop: Fs,
  CardSpacingHeadingMargin: Ls,
  // Form spacing
  FormSpacingInputPadding: Es,
  FormSpacingInputMinHeight: Ms,
  FormSpacingCheckboxSize: $s,
  FormSpacingCheckboxLabelPadding: As
}), []), _m = () => ke(() => ({
  xl: ze,
  l: We,
  m: Oe,
  s: Ue,
  xs: Ge
}), []), km = () => ke(() => ({
  body: Ve,
  bodyLarge: Ye,
  bodySmall: qe,
  ledeText: Ke,
  ledeTextSmall: Ze
}), []), wm = () => ke(() => ({
  headings: {
    xl: ze,
    l: We,
    m: Oe,
    s: Ue,
    xs: Ge
  },
  paragraphs: {
    body: Ve,
    bodyLarge: Ye,
    bodySmall: qe,
    ledeText: Ke,
    ledeTextSmall: Ze
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
const Ks = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, De = {
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
  const { fontPath: t, fontWeights: r } = { ...Ks, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${De.normal.eot}?#iefix") format("eot"),
       url("${t}${De.normal.woff2}") format("woff2"),
       url("${t}${De.normal.woff}") format("woff"),
       url("${t}${De.normal.ttf}") format("truetype");
  src: url("${t}${De.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${De.bold.eot}?#iefix") format("eot"),
       url("${t}${De.bold.woff2}") format("woff2"),
       url("${t}${De.bold.woff}") format("woff"),
       url("${t}${De.bold.ttf}") format("truetype");
  src: url("${t}${De.bold.eot}");
}`), a.join(`
`);
}
function jm(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...Ks, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${De.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${De.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${De.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${De.bold.woff}`, as: "font", type: "font/woff" }
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
  yr as Account,
  Sf as ActionLink,
  Qf as AdaptiveDataGrid,
  $c as AnimationDurationFast,
  Ac as AnimationDurationNormal,
  Hc as AnimationDurationSlow,
  Oc as AnimationEasingBounce,
  Pc as AnimationEasingEaseIn,
  Wc as AnimationEasingEaseInOut,
  zc as AnimationEasingEaseOut,
  Ka as AppointmentCard,
  ql as AriaDataGrid,
  Kn as AriaTabsDataGrid,
  Qf as AriaTabsDataGridAdaptive,
  Gn as BackLink,
  is as BorderColorCard,
  ls as BorderColorCardHover,
  ss as BorderColorDefault,
  cs as BorderColorError,
  os as BorderColorForm,
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
  Re as Button,
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
  Rs as ButtonSpacingPaddingHorizontalDesktop,
  Ds as ButtonSpacingPaddingHorizontalMobile,
  Is as ButtonSpacingPaddingVerticalDesktop,
  Ts as ButtonSpacingPaddingVerticalMobile,
  Eu as ButtonTypographyWeight,
  Va as Card,
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
  Ls as CardSpacingHeadingMargin,
  Fs as CardSpacingPaddingDesktop,
  Bs as CardSpacingPaddingMobile,
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
  ws as ColorGrey1,
  Ss as ColorGrey2,
  Cs as ColorGrey3,
  js as ColorGrey4,
  Ns as ColorGrey5,
  ud as ColorLinkActive,
  cd as ColorLinkDefault,
  dd as ColorLinkHover,
  hd as ColorLinkVisited,
  hs as ColorPrimaryBlack,
  ds as ColorPrimaryBlue,
  ps as ColorPrimaryDarkPink,
  fs as ColorPrimaryGreen,
  ms as ColorPrimaryPurple,
  gs as ColorPrimaryRed,
  us as ColorPrimaryWhite,
  bs as ColorPrimaryYellow,
  _s as ColorSecondaryAquaGreen,
  vs as ColorSecondaryOrange,
  xs as ColorSecondaryPaleYellow,
  ks as ColorSecondaryPink,
  ys as ColorSecondaryWarmYellow,
  sd as ColorTextPrimary,
  ld as ColorTextPrint,
  id as ColorTextReverse,
  od as ColorTextSecondary,
  wr as Column,
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
  Na as Container,
  Pf as ContentsList,
  Ks as DEFAULT_FONT_CONFIG,
  Zf as DashboardSummaryGrid,
  Ff as DateInput,
  Wl as Details,
  Ol as DoDontList,
  yf as ElevationHigh,
  bf as ElevationLow,
  xf as ElevationMedium,
  gf as ElevationNone,
  Or as ErrorMessage,
  Bf as ErrorSummary,
  Ul as Expander,
  De as FRUTIGER_FONT_FILES,
  kr as Fieldset,
  hf as FocusOutlineOffset,
  ff as FocusOutlineStyle,
  uf as FocusOutlineWidth,
  pf as FocusShadowButton,
  mf as FocusShadowInput,
  Zt as FontFamilyBase,
  Jt as FontFamilyFallback,
  Xt as FontFamilyPrint,
  xr as FontLineHeightBase,
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
  br as FontSizeBase,
  en as FontWeightBold,
  tn as FontWeightLight,
  Qt as FontWeightNormal,
  Fa as Footer,
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
  As as FormSpacingCheckboxLabelPadding,
  $s as FormSpacingCheckboxSize,
  Ms as FormSpacingInputMinHeight,
  Es as FormSpacingInputPadding,
  Af as GanttChart,
  _o as Grid,
  zh as GridGutter,
  Wh as GridGutterHalf,
  Ph as GridPageWidth,
  Ba as Header,
  Mf as HeaderSSR,
  Ra as HeaderSearch,
  $f as HeaderStatic,
  et as Heading,
  We as HeadingsNhsukHeadingL,
  Oe as HeadingsNhsukHeadingM,
  Ue as HeadingsNhsukHeadingS,
  ze as HeadingsNhsukHeadingXl,
  Ge as HeadingsNhsukHeadingXs,
  To as Hero,
  Ca as Hint,
  Kf as Images,
  vr as Input,
  Uf as InsetText,
  _r as Label,
  Eh as LayoutColumnActions,
  Rh as LayoutColumnFull,
  Bh as LayoutColumnHalf,
  Lh as LayoutColumnQuarter,
  Fh as LayoutColumnThird,
  Ih as LayoutContainerMaxWidth,
  So as List,
  Ta as MainWrapper,
  Za as MedicationCard,
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
  Ve as ParagraphsBody,
  Ye as ParagraphsBodyLarge,
  qe as ParagraphsBodySmall,
  Ke as ParagraphsLedeText,
  Ze as ParagraphsLedeTextSmall,
  qa as PatientCard,
  jf as Radios,
  Qf as ResponsiveDataGrid,
  em as ResponsiveDataGridDemo,
  Rt as Row,
  ja as Select,
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
  Ga as SkipLink,
  Jf as SortStatusControl,
  Hs as Spacing0,
  Ps as Spacing1,
  zs as Spacing2,
  Ws as Spacing3,
  Os as Spacing4,
  Us as Spacing5,
  Gs as Spacing6,
  Vs as Spacing7,
  Ys as Spacing8,
  qs as Spacing9,
  Jn as SpacingResponsive0Mobile,
  Xn as SpacingResponsive0Tablet,
  Qn as SpacingResponsive1Mobile,
  er as SpacingResponsive1Tablet,
  tr as SpacingResponsive2Mobile,
  nr as SpacingResponsive2Tablet,
  rr as SpacingResponsive3Mobile,
  ar as SpacingResponsive3Tablet,
  sr as SpacingResponsive4Mobile,
  or as SpacingResponsive4Tablet,
  ir as SpacingResponsive5Mobile,
  lr as SpacingResponsive5Tablet,
  cr as SpacingResponsive6Mobile,
  dr as SpacingResponsive6Tablet,
  ur as SpacingResponsive7Mobile,
  hr as SpacingResponsive7Tablet,
  fr as SpacingResponsive8Mobile,
  mr as SpacingResponsive8Tablet,
  pr as SpacingResponsive9Mobile,
  gr as SpacingResponsive9Tablet,
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
  Qe as Tag,
  Gl as TaskList,
  xo as Textarea,
  nm as TransactionalPageTemplate,
  Uc as TransitionButtonDefault,
  Gc as TransitionButtonShadow,
  Yc as TransitionCardHover,
  Vc as TransitionInputFocus,
  Ja as VitalsCard,
  Rf as WIDTH_FRACTIONS,
  qf as WarningCallout,
  ns as WidthContainer,
  Df as WidthUtilities,
  Dm as checkFrutigerLoaded,
  Fr as createGenericTabsConfig,
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
  as as useNhsFdpBreakpoints,
  ym as useResponsiveSpacing,
  rm as useResponsiveValue,
  bm as useSpacing,
  pm as useTokens,
  xm as useTypography
};
//# sourceMappingURL=index.esm.js.map
