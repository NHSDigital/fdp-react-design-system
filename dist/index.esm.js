import * as U from "react";
import at, { useState as Me, useEffect as Ae, useCallback as fe, useRef as Le, createElement as wo, useMemo as De, useContext as Pl, createContext as Rl, forwardRef as un, useImperativeHandle as _o, useReducer as So, memo as Hl, useLayoutEffect as zl, useId as Hn } from "react";
import { createPortal as Wl } from "react-dom";
function Ol(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fn = { exports: {} }, pn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ws;
function Ul() {
  if (ws) return pn;
  ws = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(a, o, s) {
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
  return pn.Fragment = t, pn.jsx = n, pn.jsxs = n, pn;
}
var mn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _s;
function Gl() {
  return _s || (_s = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(w) {
      if (w == null) return null;
      if (typeof w == "function")
        return w.$$typeof === N ? null : w.displayName || w.name || null;
      if (typeof w == "string") return w;
      switch (w) {
        case m:
          return "Fragment";
        case E:
          return "Profiler";
        case u:
          return "StrictMode";
        case B:
          return "Suspense";
        case S:
          return "SuspenseList";
        case C:
          return "Activity";
      }
      if (typeof w == "object")
        switch (typeof w.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), w.$$typeof) {
          case M:
            return "Portal";
          case j:
            return (w.displayName || "Context") + ".Provider";
          case P:
            return (w._context.displayName || "Context") + ".Consumer";
          case _:
            var A = w.render;
            return w = w.displayName, w || (w = A.displayName || A.name || "", w = w !== "" ? "ForwardRef(" + w + ")" : "ForwardRef"), w;
          case L:
            return A = w.displayName || null, A !== null ? A : e(w.type) || "Memo";
          case T:
            A = w._payload, w = w._init;
            try {
              return e(w(A));
            } catch {
            }
        }
      return null;
    }
    function t(w) {
      return "" + w;
    }
    function n(w) {
      try {
        t(w);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var k = A.error, O = typeof Symbol == "function" && Symbol.toStringTag && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return k.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), t(w);
      }
    }
    function a(w) {
      if (w === m) return "<>";
      if (typeof w == "object" && w !== null && w.$$typeof === T)
        return "<...>";
      try {
        var A = e(w);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var w = x.A;
      return w === null ? null : w.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(w) {
      if (v.call(w, "key")) {
        var A = Object.getOwnPropertyDescriptor(w, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return w.key !== void 0;
    }
    function l(w, A) {
      function k() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(w, "key", {
        get: k,
        configurable: !0
      });
    }
    function d() {
      var w = e(this.type);
      return y[w] || (y[w] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), w = this.props.ref, w !== void 0 ? w : null;
    }
    function c(w, A, k, O, I, J, ue, ce) {
      return k = J.ref, w = {
        $$typeof: g,
        type: w,
        key: A,
        props: J,
        _owner: I
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(w, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(w, "ref", { enumerable: !1, value: null }), w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(w, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(w, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.defineProperty(w, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    }
    function f(w, A, k, O, I, J, ue, ce) {
      var Z = A.children;
      if (Z !== void 0)
        if (O)
          if (R(Z)) {
            for (O = 0; O < Z.length; O++)
              h(Z[O]);
            Object.freeze && Object.freeze(Z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(Z);
      if (v.call(A, "key")) {
        Z = e(w);
        var G = Object.keys(A).filter(function(re) {
          return re !== "key";
        });
        O = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", b[Z + O] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          Z,
          G,
          Z
        ), b[Z + O] = !0);
      }
      if (Z = null, k !== void 0 && (n(k), Z = "" + k), i(A) && (n(A.key), Z = "" + A.key), "key" in A) {
        k = {};
        for (var W in A)
          W !== "key" && (k[W] = A[W]);
      } else k = A;
      return Z && l(
        k,
        typeof w == "function" ? w.displayName || w.name || "Unknown" : w
      ), c(
        w,
        Z,
        J,
        I,
        o(),
        k,
        ue,
        ce
      );
    }
    function h(w) {
      typeof w == "object" && w !== null && w.$$typeof === g && w._store && (w._store.validated = 1);
    }
    var p = at, g = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), j = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), N = Symbol.for("react.client.reference"), x = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, v = Object.prototype.hasOwnProperty, R = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(w) {
        return w();
      }
    };
    var $, y = {}, H = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), Q = D(a(s)), b = {};
    mn.Fragment = m, mn.jsx = function(w, A, k, O, I) {
      var J = 1e4 > x.recentlyCreatedOwnerStacks++;
      return f(
        w,
        A,
        k,
        !1,
        O,
        I,
        J ? Error("react-stack-top-frame") : H,
        J ? D(a(w)) : Q
      );
    }, mn.jsxs = function(w, A, k, O, I) {
      var J = 1e4 > x.recentlyCreatedOwnerStacks++;
      return f(
        w,
        A,
        k,
        !0,
        O,
        I,
        J ? Error("react-stack-top-frame") : H,
        J ? D(a(w)) : Q
      );
    };
  })()), mn;
}
var Ss;
function Yl() {
  return Ss || (Ss = 1, process.env.NODE_ENV === "production" ? Fn.exports = Ul() : Fn.exports = Gl()), Fn.exports;
}
var r = Yl(), Or = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ks;
function Vl() {
  return ks || (ks = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
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
          return n.apply(null, s);
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
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(Or)), Or.exports;
}
var ql = Vl();
const ge = /* @__PURE__ */ Ol(ql), X0 = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...o
}) => {
  const s = ge(
    "nhsuk-action-link__link",
    a
  );
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ r.jsxs(
    "a",
    {
      className: s,
      href: t,
      target: n ? "_blank" : void 0,
      rel: n ? "noopener noreferrer" : void 0,
      ...o,
      children: [
        /* @__PURE__ */ r.jsxs(
          "svg",
          {
            className: "nhsuk-icon nhsuk-icon__arrow-right-circle",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "36",
            height: "36",
            children: [
              /* @__PURE__ */ r.jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ r.jsx("path", { d: "M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z" })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-action-link__text", children: e })
      ]
    }
  ) });
}, Kl = ({
  ariaLabel: e = "Account",
  items: t = [],
  className: n,
  variant: a = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const o = (s) => {
    const i = s.icon ? /* @__PURE__ */ r.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        "aria-label": s.icon === !0 ? "User" : void 0,
        children: /* @__PURE__ */ r.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, l = s.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, d = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      i,
      l
    ] });
    return s.href ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-account__link nhsuk-header__account-link", href: s.href, children: d }) : s.action ? /* @__PURE__ */ r.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: s.action,
        method: s.method || "post",
        children: /* @__PURE__ */ r.jsx(
          "button",
          {
            className: "nhsuk-account__button",
            type: "submit",
            role: "button",
            children: d
          }
        )
      }
    ) : /* @__PURE__ */ r.jsx("span", { children: d });
  };
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: ge(
        "nhsuk-account",
        {
          "nhsuk-account--white": a === "white"
        },
        n
      ),
      "aria-label": e,
      children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-account__list", children: t.map((s, i) => s && /* @__PURE__ */ r.jsx(
        "li",
        {
          className: ge("nhsuk-account__item nhsuk-header__account-item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
};
function Xl(e) {
  const t = e.variant || "primary", n = e.size || "default", a = !!e.fullWidth, o = [
    "nhs-aria-button",
    `nhs-aria-button--${t}`,
    n !== "default" ? `nhs-aria-button--${n}` : "",
    a ? "nhs-aria-button--full-width" : "",
    e.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: e.href ? "a" : "button",
    classes: o,
    data: { module: "nhs-button" },
    attrs: e.href ? { href: e.href, role: "button" } : { type: "button" },
    preventDoubleClick: !!e.preventDoubleClick
  };
}
const { forwardRef: Zl, useCallback: Ft, useState: Ur } = U;
function Jl(e, t) {
  const {
    children: n,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, f] = Ur(!1), [h, p] = Ur(!1), [g, M] = Ur(!1), m = Xl({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), u = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", E = {
    ...c && { "data-pressed": "true" },
    ...h && { "data-hovered": "true" },
    ...g && { "data-focused": "true" },
    ...u && { "data-disabled": "true" }
  }, P = Ft(
    () => !u && f(!0),
    [u]
  ), j = Ft(() => f(!1), []), _ = Ft(
    () => !u && p(!0),
    [u]
  ), B = Ft(() => {
    p(!1), f(!1);
  }, []), S = Ft(() => M(!0), []), L = Ft(() => M(!1), []), T = Ft(
    (Z) => {
      Z.key === " " && ("href" in d || Z.currentTarget.getAttribute("role") === "button") && (Z.preventDefault(), Z.currentTarget.click());
    },
    [d]
  ), C = Ft(
    (Z) => {
      if (l) {
        const G = Z.currentTarget;
        if (G.getAttribute("data-processing") === "true") {
          Z.preventDefault();
          return;
        }
        G.setAttribute("data-processing", "true"), setTimeout(() => {
          G.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in d && d.href) {
    const {
      id: Z,
      style: G,
      title: W,
      ["aria-label"]: re,
      ["aria-describedby"]: z,
      ["aria-labelledby"]: oe,
      tabIndex: Y,
      ...ie
    } = d, le = d;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: le.href,
        target: le.target,
        rel: le.rel,
        className: m.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...E,
        ...l && { "data-prevent-double-click": "true" },
        ...ie,
        onKeyDown: (xe) => {
          le.onKeyDown?.(xe), T(xe);
        },
        onClick: (xe) => {
          le.onClick?.(xe), C(xe);
        },
        onMouseDown: (xe) => {
          le.onMouseDown?.(xe), P();
        },
        onMouseUp: (xe) => {
          le.onMouseUp?.(xe), j();
        },
        onMouseEnter: (xe) => {
          le.onMouseEnter?.(xe), _();
        },
        onMouseLeave: (xe) => {
          le.onMouseLeave?.(xe), B();
        },
        onFocus: (xe) => {
          le.onFocus?.(xe), S();
        },
        onBlur: (xe) => {
          le.onBlur?.(xe), L();
        },
        "aria-disabled": le["aria-disabled"],
        ...le["aria-disabled"] === "true" && { tabIndex: -1 },
        id: Z,
        style: G,
        title: W,
        "aria-label": re,
        "aria-describedby": z,
        "aria-labelledby": oe,
        tabIndex: Y,
        children: n
      }
    );
  }
  const {
    id: N,
    style: x,
    title: v,
    ["aria-label"]: R,
    ["aria-describedby"]: D,
    ["aria-labelledby"]: $,
    tabIndex: y,
    name: H,
    value: Q,
    form: b,
    formAction: w,
    formEncType: A,
    formMethod: k,
    formNoValidate: O,
    formTarget: I,
    autoFocus: J,
    ...ue
  } = d, ce = d;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: ce.type || "button",
      disabled: ce.disabled,
      className: m.classes,
      "data-module": "nhs-button",
      ...E,
      ...l && { "data-prevent-double-click": "true" },
      ...ce.disabled && { "aria-disabled": "true" },
      ...ue,
      onKeyDown: (Z) => {
        ce.onKeyDown?.(Z), T(Z);
      },
      onClick: (Z) => {
        ce.onClick?.(Z), C(Z);
      },
      onMouseDown: (Z) => {
        ce.onMouseDown?.(Z), P();
      },
      onMouseUp: (Z) => {
        ce.onMouseUp?.(Z), j();
      },
      onMouseEnter: (Z) => {
        ce.onMouseEnter?.(Z), _();
      },
      onMouseLeave: (Z) => {
        ce.onMouseLeave?.(Z), B();
      },
      onFocus: (Z) => {
        ce.onFocus?.(Z), S();
      },
      onBlur: (Z) => {
        ce.onBlur?.(Z), L();
      },
      id: N,
      style: x,
      title: v,
      "aria-label": R,
      "aria-describedby": D,
      "aria-labelledby": $,
      tabIndex: y,
      name: H,
      value: Q,
      form: b,
      formAction: w,
      formEncType: A,
      formMethod: k,
      formNoValidate: O,
      formTarget: I,
      autoFocus: J,
      children: n
    }
  );
}
const et = Zl(Jl);
et.displayName = "Button";
const la = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = ge(
    "nhsuk-back-link",
    a
  ), d = ge(
    "nhsuk-back-link__link"
  ), c = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__chevron-left",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "24",
        width: "24",
        children: /* @__PURE__ */ r.jsx("path", { d: "M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z" })
      }
    ),
    t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ r.jsx(
    "button",
    {
      className: d,
      onClick: s,
      type: "button",
      ...i,
      children: c()
    }
  ) : /* @__PURE__ */ r.jsx(
    "a",
    {
      className: d,
      href: n,
      ...i,
      children: c()
    }
  ) });
};
function Ql(e) {
  const { color: t = "default", noBorder: n, closable: a, disabled: o, className: s } = e;
  return { classes: [
    "nhsuk-tag",
    t !== "default" ? `nhsuk-tag--${t}` : "",
    n ? "nhsuk-tag--no-border" : "",
    a ? "nhsuk-tag--closable" : "",
    o ? "nhsuk-tag--disabled" : "",
    s || ""
  ].filter(Boolean).join(" "), showClose: !!a, disabled: !!o };
}
const Qe = ({
  text: e,
  html: t,
  children: n,
  color: a = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: d,
  ...c
}) => {
  const f = Ql({ color: a, noBorder: o, closable: s, disabled: l, className: d }), h = (p) => {
    p.preventDefault(), p.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ r.jsxs("strong", { className: f.classes, ...c, children: [
    n || (t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    s && /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: h,
        disabled: l,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
}, ec = ({
  id: e,
  name: t,
  checked: n,
  defaultChecked: a = !1,
  disabled: o = !1,
  value: s = "true",
  hint: i,
  errorMessage: l,
  className: d,
  children: c,
  onChange: f,
  onBlur: h,
  onFocus: p,
  attributes: g,
  ...M
}) => {
  const [m, u] = Me(a), E = n !== void 0, P = E ? n : m;
  Ae(() => {
    E || u(a);
  }, [a, E]);
  const j = (T) => {
    const C = T.target.checked;
    E || u(C), f?.(C, T);
  }, _ = i ? `${e}-hint` : void 0, B = l ? `${e}-error` : void 0, S = [_, B].filter(Boolean).join(" ") || void 0, L = ge(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ r.jsx("div", { className: L, ...M, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: P,
        disabled: o,
        onChange: j,
        onBlur: h,
        onFocus: p,
        "aria-describedby": S,
        ...g
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ r.jsx("div", { id: _, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: B, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
ec.displayName = "Checkbox";
function tc(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const Va = ({
  id: e,
  name: t,
  type: n = "text",
  value: a,
  defaultValue: o,
  placeholder: s,
  disabled: i = !1,
  readOnly: l = !1,
  required: d = !1,
  hasError: c = !1,
  describedBy: f,
  className: h,
  width: p = "full",
  inputMode: g,
  autoComplete: M,
  maxLength: m,
  minLength: u,
  pattern: E,
  step: P,
  min: j,
  max: _,
  showValueLabels: B = !1,
  showCurrentValue: S = !1,
  valueLabels: L,
  onChange: T,
  onBlur: C,
  onFocus: N,
  onKeyDown: x,
  ...v
}) => {
  const [R, D] = Me(a || o || (n === "range" ? j || "0" : ""));
  Ae(() => {
    a !== void 0 && D(a);
  }, [a]);
  const $ = (I) => {
    const J = I.target;
    D(J.value), ("type" in I && I.nativeEvent || I.type === "keydown") && T?.(I);
  }, { classes: y, isRange: H } = tc({ type: n, hasError: c, width: p, className: h }), Q = a !== void 0, b = {
    id: e,
    name: t,
    type: n,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": f,
    inputMode: g,
    autoComplete: M,
    maxLength: m,
    minLength: u,
    pattern: E,
    step: P,
    min: j,
    max: _,
    onChange: $,
    onBlur: C,
    onFocus: N,
    onKeyDown: (I) => {
      if (H && /[0-9]/.test(I.key)) {
        const J = (R?.toString() || "") + I.key;
        I.target.value = J, $(I);
      }
      x?.(I);
    },
    ...v
  }, w = !Q && o !== void 0 ? { defaultValue: o } : {}, A = Q ? { value: a } : {}, k = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: y,
      ...A,
      ...w,
      "data-current-value": R,
      ...b
    }
  ), O = H ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    B && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: L?.min || j || "0" }),
      k(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: L?.max || _ || "100" })
    ] }),
    !B && k(),
    S && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      L?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: R })
    ] }) })
  ] }) : null;
  return H ? O : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: y,
      id: e,
      name: t,
      type: n,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: d,
      "aria-describedby": f,
      inputMode: g,
      autoComplete: M,
      maxLength: m,
      minLength: u,
      pattern: E,
      step: P,
      min: j,
      max: _,
      onChange: T,
      onBlur: C,
      onFocus: N,
      onKeyDown: x,
      ...v
    }
  );
};
function nc(e) {
  const t = e.size || "m", n = [
    "nhsuk-label",
    t !== "m" ? `nhsuk-label--${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: e.isPageHeading ? "h1" : "label",
    classes: n,
    size: t,
    htmlFor: e.isPageHeading ? void 0 : e.htmlFor,
    isPageHeading: !!e.isPageHeading
  };
}
const qa = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = nc({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
}, Ka = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...o
}) => {
  const s = ge(
    "nhsuk-fieldset",
    n
  ), i = ge(
    "nhsuk-fieldset__legend",
    {
      [`nhsuk-fieldset__legend--${t?.size}`]: t?.size
    },
    t?.className
  ), l = () => {
    const d = t?.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return t?.isPageHeading ? /* @__PURE__ */ r.jsx("h1", { className: "nhsuk-fieldset__heading", children: d }) : d;
  };
  return /* @__PURE__ */ r.jsxs(
    "fieldset",
    {
      className: s,
      "aria-describedby": a,
      ...o,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ r.jsx("legend", { className: i, children: l() }),
        e
      ]
    }
  );
}, rc = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: a,
  isPageHeading: o = !1,
  legendSize: s = "l",
  hint: i,
  errorMessage: l,
  className: d = "",
  small: c = !1,
  onChange: f,
  fieldsetAttributes: h,
  attributes: p,
  ...g
}) => {
  const [M, m] = Me(
    e.filter((T) => T.checked).map((T) => T.value)
  ), u = n || t, E = i ? `${u}-hint` : void 0, P = l ? `${u}-error` : void 0, j = [E, P].filter(Boolean).join(" ") || void 0, _ = (T, C) => {
    let N;
    C ? N = [...M, T] : N = M.filter((x) => x !== T), m(N), f?.(N);
  }, B = () => e.map((T, C) => {
    const N = `${u}-${C + 1}`, x = `${N}-conditional`, v = M.includes(T.value), R = T.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: N,
          name: t,
          type: "checkbox",
          value: T.value,
          checked: v,
          disabled: R,
          onChange: (D) => _(T.value, D.target.checked),
          "aria-describedby": T.hint ? `${N}-hint` : j,
          ...T.conditional && {
            "aria-controls": x,
            "aria-expanded": v ? "true" : "false"
          },
          ...T.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: N, children: T.text }),
      T.hint && /* @__PURE__ */ r.jsx("div", { id: `${N}-hint`, className: "nhsuk-checkboxes__hint", children: T.hint }),
      T.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: ge("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !v
          }),
          id: x,
          children: typeof T.conditional == "object" && T.conditional !== null && "label" in T.conditional && "id" in T.conditional && "name" in T.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            T.conditional.label && /* @__PURE__ */ r.jsx(qa, { htmlFor: T.conditional.id, children: T.conditional.label }),
            /* @__PURE__ */ r.jsx(Va, { ...T.conditional })
          ] }) : T.conditional
        }
      )
    ] }, T.value);
  }), S = ge(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": c
    },
    d
  ), L = ge("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ r.jsx("div", { className: L, ...p, ...g, children: /* @__PURE__ */ r.jsxs(
    Ka,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: j,
      ...h,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: E, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: P, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: S, children: B() })
      ]
    }
  ) });
};
rc.displayName = "Checkboxes";
const ac = ({
  id: e,
  name: t,
  value: n,
  defaultValue: a,
  placeholder: o,
  disabled: s = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: d = !1,
  describedBy: c,
  className: f,
  rows: h = 5,
  cols: p,
  maxLength: g,
  minLength: M,
  wrap: m = "soft",
  resize: u = "vertical",
  autoComplete: E,
  spellCheck: P,
  onChange: j,
  onBlur: _,
  onFocus: B,
  onKeyDown: S,
  ...L
}) => {
  const T = ge(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": d,
      [`nhsuk-textarea--resize-${u}`]: u !== "vertical"
    },
    f
  );
  return /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: T,
      id: e,
      name: t,
      value: n,
      defaultValue: a,
      placeholder: o,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": c,
      rows: h,
      cols: p,
      maxLength: g,
      minLength: M,
      wrap: m,
      autoComplete: E,
      spellCheck: P,
      onChange: j,
      onBlur: _,
      onFocus: B,
      onKeyDown: S,
      ...L
    }
  );
};
function sc(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const ko = ({ id: e, className: t, children: n, ...a }) => {
  const o = sc({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: o.classes, id: o.id, ...a, children: n });
}, Z0 = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: a = 75,
  name: o,
  value: s,
  defaultValue: i,
  rows: l,
  className: d,
  countMessage: c,
  onCountChange: f,
  onChange: h,
  ...p
}) => {
  const g = s ?? i ?? "", [M, m] = Me(g), [u, E] = Me(0), [P, j] = Me(!1), [_, B] = Me(!1), S = fe((v) => n ? v.trim() === "" ? 0 : v.trim().split(/\s+/).length : v.length, [n]);
  Ae(() => {
    const v = S(M), R = t || n || 0, D = R - v, $ = Math.floor(R * (a / 100));
    E(D), j(v > R), B(v >= $ || v > R), f && f(v, D);
  }, [M, t, n, a, S, f]);
  const L = (v) => {
    const R = v.target.value;
    m(R), h && h(v);
  }, T = () => {
    const v = t || n || 0, R = n ? "word" : "character", D = n ? "words" : "characters";
    if (!_)
      return `You can enter up to ${v} ${v === 1 ? R : D}`;
    if (P) {
      const $ = Math.abs(u);
      return `You have ${$} ${$ === 1 ? R : D} too many`;
    } else
      return `You have ${u} ${u === 1 ? R : D} remaining`;
  }, C = ge(
    "nhsuk-character-count",
    d
  ), N = ge(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !_,
      "nhsuk-error-message": P
    },
    c?.classes
  ), x = ge(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": P
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: C,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": n,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ r.jsx(
          ac,
          {
            id: e,
            name: o,
            value: s !== void 0 ? M : void 0,
            defaultValue: s === void 0 ? i ?? M : void 0,
            rows: l,
            className: x,
            onChange: L,
            "aria-describedby": `${e}-info`,
            "aria-invalid": P || void 0,
            ...p
          }
        ),
        /* @__PURE__ */ r.jsx(
          ko,
          {
            id: `${e}-info`,
            className: N,
            role: "status",
            "aria-live": "polite",
            children: T()
          }
        )
      ]
    }
  );
}, oc = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = ge(
    "nhsuk-select__option",
    a
  );
  return /* @__PURE__ */ r.jsx(
    "option",
    {
      className: i,
      value: e,
      disabled: t,
      ...s,
      children: o
    }
  );
}, ic = ({
  id: e,
  name: t,
  ariaLabel: n,
  value: a,
  defaultValue: o,
  disabled: s = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: d,
  className: c,
  multiple: f = !1,
  size: h,
  autoComplete: p,
  options: g,
  children: M,
  onChange: m,
  onBlur: u,
  onFocus: E,
  ...P
}) => {
  const j = ge(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    c
  ), _ = () => g ? g.map((S, L) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: S.value,
      disabled: S.disabled,
      "data-initial-selected": S.selected || void 0,
      children: S.text
    },
    `${S.value}-${L}`
  )) : null, B = o === void 0 && a === void 0 && g ? g.find((S) => S.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: j,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: o !== void 0 ? o : B,
      disabled: s,
      required: i,
      "aria-describedby": d,
      multiple: f,
      size: h,
      autoComplete: p,
      onChange: m,
      onBlur: u,
      onFocus: E,
      ...P,
      children: M || _()
    }
  );
}, zn = ic;
zn.Option = oc;
function Co(e, {
  variant: t,
  selectedValue: n,
  enableBehaviourAttr: a,
  handleChange: o,
  handleBlur: s,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: d
}) {
  const { onChange: c, onBlur: f, onFocus: h, ...p } = e, {
    name: g,
    hasError: M = !1,
    describedBy: m,
    className: u,
    size: E = "normal",
    inline: P = !1,
    options: j,
    ..._
  } = p, B = ge(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": M,
      "nhsuk-radios--small": E === "small",
      "nhsuk-radios--inline": P
    },
    u
  );
  return /* @__PURE__ */ r.jsx(Ka, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: B,
      ..._,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: j.map((S, L) => {
        const T = `${g}-${L}`, C = S.conditional ? `${T}-conditional` : void 0, N = n === S.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: T,
              name: g,
              type: "radio",
              value: S.value,
              disabled: S.disabled,
              ...t === "client" ? { checked: N, onChange: o, onBlur: s, onFocus: i, onKeyDown: l, ref: (x) => {
                x && d && (d.current[L] = x);
              } } : { defaultChecked: N, "data-nhs-radios-input": !0 },
              "aria-describedby": m
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: T, children: S.text }),
          S.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: S.hint }),
          S.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: ge("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !N
              }),
              id: C,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof S.conditional == "object" && S.conditional !== null && "label" in S.conditional && "id" in S.conditional && "name" in S.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                S.conditional.label && /* @__PURE__ */ r.jsx(qa, { htmlFor: S.conditional.id, children: S.conditional.label }),
                /* @__PURE__ */ r.jsx(Va, { ...S.conditional })
              ] }) : S.conditional
            }
          )
        ] }, S.value);
      })
    }
  ) });
}
const J0 = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = Me(e || t || ""), d = Le([]), c = Le(i), f = (g) => {
    const M = g.target.value;
    M !== c.current && (c.current = M, l(M), n?.(g));
  }, h = (g) => {
    o?.(g);
  }, p = fe((g) => {
    const { key: M } = g;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(M)) return;
    g.preventDefault();
    const m = d.current.filter((j) => j && !j.disabled), u = m.indexOf(g.currentTarget);
    if (u === -1) return;
    let E = u;
    ["ArrowDown", "ArrowRight"].includes(M) ? E = (u + 1) % m.length : ["ArrowUp", "ArrowLeft"].includes(M) && (E = (u - 1 + m.length) % m.length);
    const P = m[E];
    P && (P.focus(), P.checked || P.click());
  }, []);
  return Co(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: f,
      handleBlur: a,
      handleFocus: h,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: p,
      itemsRef: d
    }
  );
}, Q0 = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return Co(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0
    }
  );
}, jo = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = ge(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), l = a ? { maxWidth: a, ...o || {} } : o;
  return /* @__PURE__ */ r.jsx("div", { className: i, style: l, ...s, children: e });
}, Gt = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const o = ge("nhsuk-grid-row", t);
  return /* @__PURE__ */ r.jsx("div", { className: o, style: n, ...a, children: e });
}, vn = ({
  children: e,
  width: t = "full",
  mobileWidth: n,
  tabletWidth: a,
  desktopWidth: o,
  start: s,
  className: i,
  forceWidth: l = !1,
  style: d,
  ...c
}) => {
  const f = ge(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !l,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: l,
      // Responsive width overrides
      [`nhsuk-u-${n}-mobile`]: n,
      [`nhsuk-u-${a}-tablet`]: a,
      [`nhsuk-u-${o}-desktop`]: o,
      // Grid positioning
      [`nhsuk-grid-column-start-${s}`]: s && s >= 1 && s <= 7
    },
    i
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: d, ...c, children: e });
}, ca = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const s = at.Children.toArray(e)[0], i = at.isValidElement(s) && (s.type === Gt || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ r.jsx(jo, { className: t, style: n, ...a, children: i ? e : /* @__PURE__ */ r.jsx(Gt, { children: e }) });
}, lc = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const d = i || (t === "number" ? "ol" : "ul"), c = ge(
    "nhsuk-list",
    {
      "nhsuk-list--bullet": t === "bullet",
      "nhsuk-list--number": t === "number",
      "nhsuk-list--none": t === "none",
      "nhsuk-list--border": a,
      [`nhsuk-list--${n}`]: n !== "medium"
    },
    o
  );
  return /* @__PURE__ */ r.jsx(d, { className: c, role: s, ...l, children: e });
}, cc = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = ge("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, dc = lc;
dc.Item = cc;
const ex = ({
  debug: e = !1,
  className: t,
  children: n,
  ...a
}) => {
  if (!n)
    return null;
  const o = [
    "nhsuk-spacing-utilities",
    e && "nhsuk-spacing-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: o, ...a, children: n });
}, tx = {
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
}, nx = ({
  debug: e = !1,
  className: t,
  children: n,
  ...a
}) => {
  if (!n)
    return null;
  const o = [
    "nhsuk-width-utilities",
    e && "nhsuk-width-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: o, ...a, children: n });
}, rx = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, ax = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], No = ({
  as: e = "main",
  size: t = "default",
  className: n,
  children: a,
  ...o
}) => {
  const s = [
    "nhsuk-main-wrapper",
    t === "large" && "nhsuk-main-wrapper--l",
    t === "small" && "nhsuk-main-wrapper--s",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(e, { className: s, ...o, children: a });
};
function uc(e) {
  switch (e) {
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
}
function fc(e) {
  const t = e.level ?? uc(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const $t = ({ level: e, className: t, text: n, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const d = fc({ level: e, size: s, className: t, marginBottom: i }), c = o || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return wo(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function hc(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const Cs = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...o }) => {
  const s = hc({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, sx = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const d = Le(null);
  Ae(() => {
    d.current && d.current.focus();
  }, []);
  const c = ge(
    "nhsuk-error-summary",
    s
  ), f = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, h = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, p = (g) => {
    const M = g.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
    return g.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: g.href,
        ...g.attributes,
        children: M
      }
    ) : M;
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: d,
      className: c,
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      "data-module": "nhsuk-error-summary",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: f() }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (n || a) && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: h() }),
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((g, M) => /* @__PURE__ */ r.jsx("li", { children: p(g) }, M)) })
        ] })
      ]
    }
  );
}, ox = ({
  id: e,
  className: t,
  items: n,
  namePrefix: a,
  values: o = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: d,
  ...c
}) => {
  const [f, h] = Me(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [p, g] = Me({}), M = ($) => $ % 4 === 0 && $ % 100 !== 0 || $ % 400 === 0, m = ($, y) => {
    const H = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return $ === 2 && M(y) ? 29 : H[$ - 1];
  }, u = ($, y, H) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Day must be a number";
    const Q = parseInt($, 10);
    if (Q < 1 || Q > 31) return "Day must be between 1 and 31";
    if (y && H) {
      const b = parseInt(y, 10), w = parseInt(H, 10);
      if (!isNaN(b) && !isNaN(w) && b >= 1 && b <= 12) {
        const A = m(b, w);
        if (Q > A)
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
          ][b - 1]} ${w} only has ${A} days`;
      }
    }
  }, E = ($) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Month must be a number";
    const y = parseInt($, 10);
    if (y < 1 || y > 12) return "Month must be between 1 and 12";
  }, P = ($) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Year must be a number";
    const y = parseInt($, 10), H = (/* @__PURE__ */ new Date()).getFullYear();
    if (y < 1900 || y > H + 10)
      return `Year must be between 1900 and ${H + 10}`;
  }, j = ($, y, H) => {
    if (!$ || !y || !H) return;
    const Q = parseInt($, 10), b = parseInt(y, 10), w = parseInt(H, 10);
    if (isNaN(Q) || isNaN(b) || isNaN(w) || b < 1 || b > 12 || w < 1900) return;
    const A = m(b, w);
    Q < 1 || Q > A;
  }, _ = fe(($, y) => {
    const H = {
      ...f,
      [$]: y
    };
    h(H), d && d(H);
  }, [f, d]), B = fe(($) => {
    const y = f[$];
    let H;
    if ($ === "day")
      H = u(y, f.month, f.year);
    else if ($ === "month") {
      if (H = E(y), !H && f.day) {
        const Q = u(f.day, y, f.year);
        g((b) => ({
          ...b,
          day: Q
        }));
      }
    } else if ($ === "year" && (H = P(y), !H && f.day && f.month)) {
      const Q = u(f.day, f.month, y);
      g((b) => ({
        ...b,
        day: Q
      }));
    }
    if (g((Q) => ({
      ...Q,
      [$]: H
    })), f.day && f.month && f.year) {
      const Q = j(
        $ === "day" ? y : f.day,
        $ === "month" ? y : f.month,
        $ === "year" ? y : f.year
      );
      Q && g((b) => ({
        ...b,
        day: Q
      }));
    }
  }, [f, u, E, P, j]), S = De(() => [
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
  ], []), L = n || S;
  let T = s?.describedBy || "";
  const C = i ? `${e}-hint` : "", N = l ? `${e}-error` : "";
  C && (T = T ? `${T} ${C}` : C), N && (T = T ? `${T} ${N}` : N);
  const x = Object.values(p).some(($) => $), v = ge(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || x
    }
  ), R = ge(
    "nhsuk-date-input",
    t
  ), D = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      ko,
      {
        id: C,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      Cs,
      {
        id: N,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(p).map(
      ([$, y]) => y ? /* @__PURE__ */ r.jsxs(
        Cs,
        {
          id: `${e}-${$}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            y
          ]
        },
        `${$}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: R, id: e, "data-testid": "date-input", ...c, children: L.map(($) => {
      const y = $.id || `${e}-${$.name}`, H = a ? `${a}[${$.name}]` : $.name, Q = $.label || $.name.charAt(0).toUpperCase() + $.name.slice(1), b = p[$.name], w = f[$.name] || "";
      let A = T;
      if (b) {
        const k = `${e}-${$.name}-error`;
        A = A ? `${A} ${k}` : k;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          qa,
          {
            htmlFor: y,
            className: "nhsuk-date-input__label",
            children: Q
          }
        ),
        /* @__PURE__ */ r.jsx(
          Va,
          {
            id: y,
            name: H,
            value: w,
            className: ge("nhsuk-date-input__input", $.classes, {
              "nhsuk-input--error": b
            }),
            inputMode: $.inputmode,
            autoComplete: $.autocomplete,
            pattern: $.pattern,
            "aria-describedby": A || void 0,
            hasError: !!b,
            onChange: (k) => _($.name, k.target.value),
            onBlur: () => B($.name)
          }
        )
      ] }, $.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: v, children: s ? /* @__PURE__ */ r.jsx(
    Ka,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: T || void 0,
      children: D()
    }
  ) : D() });
}, To = {
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
}, $o = Rl(To), pc = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...To, ...t };
  return /* @__PURE__ */ r.jsx($o.Provider, { value: n, children: e });
}, ix = () => {
  const e = Pl($o);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function mc() {
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
function gc() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = mc(), document.head.appendChild(e);
}
const lx = ({ children: e, theme: t }) => (Ae(() => {
  gc();
}, []), /* @__PURE__ */ r.jsx(pc, { theme: t, children: e })), xc = ({
  mode: e = "form",
  action: t = "/search",
  method: n = "get",
  name: a = "q",
  value: o,
  placeholder: s = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: d,
  disabled: c = !1,
  callbacks: f = {},
  isLoading: h = !1,
  showResults: p = !1,
  results: g = [],
  formAttributes: M = {},
  inputAttributes: m = {},
  buttonAttributes: u = {},
  preventDefaultSubmit: E = !1,
  debounceMs: P = 300,
  minQueryLength: j = 1
}) => {
  const [_, B] = Me(""), [S, L] = Me(!1), T = Le(void 0), C = Le(null), N = Le(null), x = e === "controlled" && o !== void 0, v = x ? o : _, R = fe((O) => {
    T.current && clearTimeout(T.current), T.current = setTimeout(() => {
      f.onChange && O.length >= j && f.onChange(O);
    }, P);
  }, [f.onChange, P, j]), D = fe((O) => {
    const I = O.target.value;
    x || B(I), e !== "form" && R(I);
  }, [x, e, R]), $ = fe((O) => {
    const I = v.trim(), J = {
      query: I,
      timestamp: Date.now(),
      formData: new FormData(O.currentTarget)
    };
    e === "controlled" || e === "hybrid" && E ? (O.preventDefault(), f.onSearch && I.length >= j && f.onSearch(J)) : e === "hybrid" && f.onSearch && I.length >= j && f.onSearch(J);
  }, [e, v, f.onSearch, E, j]), y = fe(() => {
    L(!0), f.onFocus?.();
  }, [f.onFocus]), H = fe(() => {
    L(!1), f.onBlur?.();
  }, [f.onBlur]), Q = fe(() => {
    x || B(""), f.onClear?.(), N.current?.focus();
  }, [x, f.onClear]);
  Ae(() => () => {
    T.current && clearTimeout(T.current);
  }, []);
  const b = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: ge("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": h
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), w = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__spinner",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsxs(
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
            /* @__PURE__ */ r.jsx(
              "animate",
              {
                attributeName: "stroke-dasharray",
                dur: "2s",
                values: "0 31.416;15.708 15.708;0 31.416",
                repeatCount: "indefinite"
              }
            ),
            /* @__PURE__ */ r.jsx(
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
  ), A = () => !v || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: Q,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ r.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ r.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), k = () => !p || !g.length || !S ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: g.map((O) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: O.href ? /* @__PURE__ */ r.jsxs("a", { href: O.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: O.title }),
    O.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: O.description })
  ] }) : /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => f.onSearch?.({ query: O.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: O.title }),
        O.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: O.description })
      ]
    }
  ) }, O.id)) });
  return /* @__PURE__ */ r.jsxs("div", { className: ge("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": h,
    "nhsuk-header__search--focused": S,
    "nhsuk-header__search--has-results": p && g.length > 0
  }), children: [
    /* @__PURE__ */ r.jsxs(
      "form",
      {
        ref: C,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? n : void 0,
        role: "search",
        onSubmit: $,
        ...M,
        children: [
          /* @__PURE__ */ r.jsx(
            "label",
            {
              className: "nhsuk-u-visually-hidden",
              htmlFor: "search-field",
              children: i
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
            /* @__PURE__ */ r.jsx(
              "input",
              {
                ref: N,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: v,
                onChange: D,
                onFocus: y,
                onBlur: H,
                disabled: c || h,
                ...p && g.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...m
              }
            ),
            A()
          ] }),
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || h || e !== "form" && v.length < j,
              ...u,
              children: [
                h ? w() : b(),
                /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: h ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    k()
  ] });
};
function Do(e, {
  variant: t,
  isClient: n,
  menuOpen: a = !1,
  showMoreButton: o = !1,
  visibleItems: s,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: d,
  navListRef: c
}) {
  const {
    className: f,
    logo: h = {},
    service: p = {},
    organisation: g,
    search: M,
    account: m,
    navigation: u,
    containerClasses: E,
    variant: P = "default",
    attributes: j = {},
    maxVisibleItems: _,
    // deprecated (ignored)
    responsiveNavigation: B = !0,
    ...S
  } = e;
  "maxVisibleItems" in S && delete S.maxVisibleItems;
  const L = p.href && !h.href || p.href && p.href === h.href, T = L ? p.href : h.href, C = ge(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": P === "organisation" || g,
      "nhsuk-header--white": P === "white"
    },
    f
  ), N = ge(
    "nhsuk-header__container",
    E
  ), x = ge(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": u?.white,
      "nhsuk-header__navigation--justified": u?.justified
    },
    u?.className
  ), v = () => /* @__PURE__ */ r.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": h.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ r.jsx("title", { children: h.ariaLabel || "NHS" }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), R = () => h.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: h.src,
      width: "280",
      alt: h.ariaLabel || "NHS"
    }
  ) : v(), D = () => g ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      g.name,
      g.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        g.split
      ] })
    ] }),
    g.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: g.descriptor })
  ] }) : null, $ = (A, k) => A ? k ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: k, children: A }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: A }) : null, y = (A) => A.active || A.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: A.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: A.html } }) : A.text }) : A.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: A.html } }) : A.text, H = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), Q = t === "server" && u?.items && !B, b = Q ? [] : u?.items, w = Q ? u.items : [];
  return /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: C,
      role: "banner",
      "data-module": "nhsuk-header",
      ...j,
      ...S,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: N, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            T ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: T, children: [
              R(),
              D(),
              L && $(p.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              R(),
              D(),
              L && $(p.text)
            ] }),
            p.text && !L && $(p.text, p.href)
          ] }),
          M && /* @__PURE__ */ r.jsx(xc, { ...M }),
          /* @__PURE__ */ r.jsx(
            Kl,
            {
              ...m,
              variant: P === "white" ? "white" : "default"
            }
          )
        ] }),
        u && u.items && u.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: x,
            "aria-label": u.ariaLabel || "Menu",
            children: /* @__PURE__ */ r.jsx(
              "div",
              {
                className: ge(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": n && t === "client",
                    "nhsuk-header__navigation-container--ssr": !n
                  },
                  E
                ),
                ref: t === "client" ? d : void 0,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: t === "client" ? c : void 0,
                    children: [
                      (t === "server" ? b || [] : u?.items || []).map((A, k) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: ge(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": A.active || A.current,
                              "nhsuk-header__navigation-item--hidden": t === "client" && o && s !== void 0 && k >= (s ?? 0)
                            },
                            A.className
                          ),
                          ...A.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: A.href,
                              ...A.active || A.current ? { "aria-current": A.current ? "page" : "true" } : {},
                              children: y(A)
                            }
                          )
                        },
                        k
                      )),
                      t === "client" && o && s !== void 0 && /* @__PURE__ */ r.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ r.jsxs(
                        "button",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          type: "button",
                          "aria-haspopup": "true",
                          "aria-expanded": a ? "true" : "false",
                          "aria-controls": "nhsuk-header-more-menu",
                          onClick: l,
                          children: [
                            /* @__PURE__ */ r.jsx("span", { children: "More" }),
                            H()
                          ]
                        }
                      ) })
                    ]
                  }
                )
              }
            )
          }
        ),
        t === "client" && n && u && u.items && u.items.length > 0 && a && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: u.items.slice(s ?? 0).map((A, k) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: ge("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": A.active || A.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: A.href,
                    ...A.active || A.current ? { "aria-current": A.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: y(A)
                  }
                )
              },
              `overflow-${(s ?? 0) + k}`
            )) })
          }
        ),
        t === "server" && Q && w.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: w.map((A, k) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: ge("nhsuk-header__dropdown-item", {
              "nhsuk-header__dropdown-item--current": A.active || A.current
            }),
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__dropdown-link",
                href: A.href,
                ...A.active || A.current ? { "aria-current": A.current ? "page" : "true" } : {},
                children: y(A)
              }
            )
          },
          `overflow-server-${k}`
        )) }) })
      ]
    }
  );
}
const Mo = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: d = "default",
  attributes: c = {},
  ...f
}) => {
  const [h, p] = Me(!1), [g, M] = Me(!1), [m, u] = Me(i?.items?.length || 0), [E, P] = Me(!1), [j, _] = Me(!1), B = Le(null), S = Le(null), L = Le(!1);
  Ae(() => {
    typeof window > "u" || _(!0);
  }, []), Ae(() => {
    if (typeof document > "u") return;
    const x = (v) => {
      v.key === "Escape" && h && p(!1);
    };
    if (h)
      return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
  }, [h]);
  const T = Le(null), C = fe(() => {
    if (!j || !i?.items || i.items.length === 0 || L.current) return;
    const x = B.current, v = S.current;
    if (!x || !v) return;
    L.current = !0, x.classList.add("nhsuk-header__navigation-container--measuring");
    const R = x.clientWidth, D = Array.from(v.children);
    if (!D.length) {
      x.classList.remove("nhsuk-header__navigation-container--measuring"), L.current = !1;
      return;
    }
    if (T.current == null) {
      const I = document.createElement("button");
      I.type = "button", I.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", I.style.position = "absolute", I.style.visibility = "hidden", I.style.pointerEvents = "none", I.innerHTML = "<span>More</span>", x.appendChild(I), T.current = I.getBoundingClientRect().width || 104, x.removeChild(I);
    }
    const $ = T.current + 16;
    let y = 0, H = 0;
    const Q = window.getComputedStyle(x), b = parseFloat(Q.paddingLeft) || 0, w = parseFloat(Q.paddingRight) || 0;
    let A = b + w;
    for (const I of D) {
      const J = I.getBoundingClientRect().width;
      if (y + J + $ + A > R) break;
      y += J, H += 1;
    }
    const k = H < i.items.length, O = k ? H : i.items.length;
    M((I) => I === k ? I : k), u((I) => I === O ? I : O), x.classList.remove("nhsuk-header__navigation-container--measuring"), L.current = !1;
  }, [j, i?.items]);
  Ae(() => {
    if (!j) return;
    const x = B.current;
    if (!x) return;
    let v = null;
    const R = () => {
      v == null && (v = window.requestAnimationFrame(() => {
        v = null, C();
      }));
    };
    C();
    const D = new ResizeObserver(() => R());
    return D.observe(x), S.current && D.observe(S.current), () => {
      v != null && window.cancelAnimationFrame(v), D.disconnect();
    };
  }, [j, C]), Ae(() => {
    j && C();
  }, [i?.items?.length, j, C]);
  const N = (x) => {
    x && (x.preventDefault(), x.stopPropagation());
    const v = !h;
    p(v), P(v);
  };
  return Do(
    {
      className: e,
      logo: t,
      service: n,
      organisation: a,
      search: o,
      account: s,
      navigation: i,
      containerClasses: l,
      variant: d,
      attributes: c,
      ...f
    },
    {
      variant: "client",
      isClient: j,
      menuOpen: h,
      showMoreButton: g,
      visibleItems: m,
      dropdownVisible: E,
      toggleMenu: N,
      navContainerRef: B,
      navListRef: S
    }
  );
}, cx = (e) => Do(e, {
  variant: "server",
  isClient: !1
}), bc = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
  text: a,
  html: o,
  imageURL: s,
  containerClasses: i = "",
  classes: l = "",
  children: d,
  ...c
}) => {
  const f = [
    "nhsuk-hero",
    s && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    s && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), h = [
    "nhsuk-width-container",
    i,
    s ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), p = [
    "nhsuk-hero__heading",
    n,
    !d && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), g = d || e || a || o, M = () => {
    if (!e) return null;
    const m = { className: p };
    switch (t) {
      case 1:
        return /* @__PURE__ */ r.jsx("h1", { ...m, children: e });
      case 2:
        return /* @__PURE__ */ r.jsx("h2", { ...m, children: e });
      case 3:
        return /* @__PURE__ */ r.jsx("h3", { ...m, children: e });
      case 4:
        return /* @__PURE__ */ r.jsx("h4", { ...m, children: e });
      case 5:
        return /* @__PURE__ */ r.jsx("h5", { ...m, children: e });
      case 6:
        return /* @__PURE__ */ r.jsx("h6", { ...m, children: e });
      default:
        return /* @__PURE__ */ r.jsx("h1", { ...m, children: e });
    }
  };
  return /* @__PURE__ */ r.jsxs(
    "section",
    {
      className: f,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        s && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: g && /* @__PURE__ */ r.jsx("div", { className: h, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          M(),
          d || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && g && /* @__PURE__ */ r.jsx("div", { className: h, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          M(),
          d || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
bc.displayName = "Hero";
const Io = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: d,
  footerStyle: c,
  containerStyle: f
}) => {
  const h = (g, M = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: ge("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": M
      }),
      children: /* @__PURE__ */ r.jsx(
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
  ), p = !!(n || a);
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: ge("nhsuk-width-container", i),
        style: f,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: ge("nhsuk-footer", e), style: c, children: p ? (
            // Multi-column layout
            /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((g) => h(g)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((g) => h(g)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((g) => h(g)) }),
              o && o.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((g) => h(g)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((g) => h(g, !0)),
              (n || []).map((g) => h(g, !0)),
              (a || []).map((g) => h(g, !0)),
              (o || []).map((g) => h(g, !0))
            ] })
          ) }),
          !p && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    p && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function Rn(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function yc(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Xa(e) {
  let t, n, a;
  e.length !== 2 ? (t = Rn, n = (l, d) => Rn(e(l), d), a = (l, d) => e(l) - d) : (t = e === Rn || e === yc ? e : vc, n = e, a = e);
  function o(l, d, c = 0, f = l.length) {
    if (c < f) {
      if (t(d, d) !== 0) return f;
      do {
        const h = c + f >>> 1;
        n(l[h], d) < 0 ? c = h + 1 : f = h;
      } while (c < f);
    }
    return c;
  }
  function s(l, d, c = 0, f = l.length) {
    if (c < f) {
      if (t(d, d) !== 0) return f;
      do {
        const h = c + f >>> 1;
        n(l[h], d) <= 0 ? c = h + 1 : f = h;
      } while (c < f);
    }
    return c;
  }
  function i(l, d, c = 0, f = l.length) {
    const h = o(l, d, c, f - 1);
    return h > c && a(l[h - 1], d) > -a(l[h], d) ? h - 1 : h;
  }
  return { left: o, center: i, right: s };
}
function vc() {
  return 0;
}
function wc(e) {
  return e === null ? NaN : +e;
}
const _c = Xa(Rn), Sc = _c.right;
Xa(wc).center;
function Lo(e, t) {
  let n, a;
  if (t === void 0)
    for (const o of e)
      o != null && (n === void 0 ? o >= o && (n = a = o) : (n > o && (n = o), a < o && (a = o)));
  else {
    let o = -1;
    for (let s of e)
      (s = t(s, ++o, e)) != null && (n === void 0 ? s >= s && (n = a = s) : (n > s && (n = s), a < s && (a = s)));
  }
  return [n, a];
}
class js extends Map {
  constructor(t, n = jc) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(Ns(this, t));
  }
  has(t) {
    return super.has(Ns(this, t));
  }
  set(t, n) {
    return super.set(kc(this, t), n);
  }
  delete(t) {
    return super.delete(Cc(this, t));
  }
}
function Ns({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function kc({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Cc({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function jc(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Nc = Math.sqrt(50), Tc = Math.sqrt(10), $c = Math.sqrt(2);
function Wn(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Nc ? 10 : s >= Tc ? 5 : s >= $c ? 2 : 1;
  let l, d, c;
  return o < 0 ? (c = Math.pow(10, -o) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, o) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= n && n < 2 ? Wn(e, t, n * 2) : [l, d, c];
}
function Dc(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, s, i] = a ? Wn(t, e, n) : Wn(e, t, n);
  if (!(s >= o)) return [];
  const l = s - o + 1, d = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) d[c] = (s - c) / -i;
    else for (let c = 0; c < l; ++c) d[c] = (s - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) d[c] = (o + c) / -i;
  else for (let c = 0; c < l; ++c) d[c] = (o + c) * i;
  return d;
}
function da(e, t, n) {
  return t = +t, e = +e, n = +n, Wn(e, t, n)[2];
}
function ua(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? da(t, e, n) : da(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function Mc(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, s = new Array(o); ++a < o; )
    s[a] = e + a * n;
  return s;
}
function Dr(e, t) {
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
const Ts = Symbol("implicit");
function Fo() {
  var e = new js(), t = [], n = [], a = Ts;
  function o(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (a !== Ts) return a;
      e.set(s, i = t.push(s) - 1);
    }
    return n[i % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new js();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.copy = function() {
    return Fo(t, n).unknown(a);
  }, Dr.apply(o, arguments), o;
}
function Ao() {
  var e = Fo().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, s, i, l = !1, d = 0, c = 0, f = 0.5;
  delete e.unknown;
  function h() {
    var p = t().length, g = o < a, M = g ? o : a, m = g ? a : o;
    s = (m - M) / Math.max(1, p - d + c * 2), l && (s = Math.floor(s)), M += (m - M - s * (p - d)) * f, i = s * (1 - d), l && (M = Math.round(M), i = Math.round(i));
    var u = Mc(p).map(function(E) {
      return M + s * E;
    });
    return n(g ? u.reverse() : u);
  }
  return e.domain = function(p) {
    return arguments.length ? (t(p), h()) : t();
  }, e.range = function(p) {
    return arguments.length ? ([a, o] = p, a = +a, o = +o, h()) : [a, o];
  }, e.rangeRound = function(p) {
    return [a, o] = p, a = +a, o = +o, l = !0, h();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return s;
  }, e.round = function(p) {
    return arguments.length ? (l = !!p, h()) : l;
  }, e.padding = function(p) {
    return arguments.length ? (d = Math.min(1, c = +p), h()) : d;
  }, e.paddingInner = function(p) {
    return arguments.length ? (d = Math.min(1, p), h()) : d;
  }, e.paddingOuter = function(p) {
    return arguments.length ? (c = +p, h()) : c;
  }, e.align = function(p) {
    return arguments.length ? (f = Math.max(0, Math.min(1, p)), h()) : f;
  }, e.copy = function() {
    return Ao(t(), [a, o]).round(l).paddingInner(d).paddingOuter(c).align(f);
  }, Dr.apply(h(), arguments);
}
function Za(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Bo(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function Tn() {
}
var wn = 0.7, On = 1 / wn, an = "\\s*([+-]?\\d+)\\s*", _n = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ht = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ic = /^#([0-9a-f]{3,8})$/, Lc = new RegExp(`^rgb\\(${an},${an},${an}\\)$`), Fc = new RegExp(`^rgb\\(${ht},${ht},${ht}\\)$`), Ac = new RegExp(`^rgba\\(${an},${an},${an},${_n}\\)$`), Bc = new RegExp(`^rgba\\(${ht},${ht},${ht},${_n}\\)$`), Ec = new RegExp(`^hsl\\(${_n},${ht},${ht}\\)$`), Pc = new RegExp(`^hsla\\(${_n},${ht},${ht},${_n}\\)$`), $s = {
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
Za(Tn, Sn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ds,
  // Deprecated! Use color.formatHex.
  formatHex: Ds,
  formatHex8: Rc,
  formatHsl: Hc,
  formatRgb: Ms,
  toString: Ms
});
function Ds() {
  return this.rgb().formatHex();
}
function Rc() {
  return this.rgb().formatHex8();
}
function Hc() {
  return Eo(this).formatHsl();
}
function Ms() {
  return this.rgb().formatRgb();
}
function Sn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ic.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Is(t) : n === 3 ? new rt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? An(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? An(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Lc.exec(e)) ? new rt(t[1], t[2], t[3], 1) : (t = Fc.exec(e)) ? new rt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ac.exec(e)) ? An(t[1], t[2], t[3], t[4]) : (t = Bc.exec(e)) ? An(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ec.exec(e)) ? As(t[1], t[2] / 100, t[3] / 100, 1) : (t = Pc.exec(e)) ? As(t[1], t[2] / 100, t[3] / 100, t[4]) : $s.hasOwnProperty(e) ? Is($s[e]) : e === "transparent" ? new rt(NaN, NaN, NaN, 0) : null;
}
function Is(e) {
  return new rt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function An(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new rt(e, t, n, a);
}
function zc(e) {
  return e instanceof Tn || (e = Sn(e)), e ? (e = e.rgb(), new rt(e.r, e.g, e.b, e.opacity)) : new rt();
}
function fa(e, t, n, a) {
  return arguments.length === 1 ? zc(e) : new rt(e, t, n, a ?? 1);
}
function rt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Za(rt, fa, Bo(Tn, {
  brighter(e) {
    return e = e == null ? On : Math.pow(On, e), new rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wn : Math.pow(wn, e), new rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new rt(Ot(this.r), Ot(this.g), Ot(this.b), Un(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ls,
  // Deprecated! Use color.formatHex.
  formatHex: Ls,
  formatHex8: Wc,
  formatRgb: Fs,
  toString: Fs
}));
function Ls() {
  return `#${Wt(this.r)}${Wt(this.g)}${Wt(this.b)}`;
}
function Wc() {
  return `#${Wt(this.r)}${Wt(this.g)}${Wt(this.b)}${Wt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Fs() {
  const e = Un(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ot(this.r)}, ${Ot(this.g)}, ${Ot(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Un(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ot(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Wt(e) {
  return e = Ot(e), (e < 16 ? "0" : "") + e.toString(16);
}
function As(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new it(e, t, n, a);
}
function Eo(e) {
  if (e instanceof it) return new it(e.h, e.s, e.l, e.opacity);
  if (e instanceof Tn || (e = Sn(e)), !e) return new it();
  if (e instanceof it) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), s = Math.max(t, n, a), i = NaN, l = s - o, d = (s + o) / 2;
  return l ? (t === s ? i = (n - a) / l + (n < a) * 6 : n === s ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= d < 0.5 ? s + o : 2 - s - o, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new it(i, l, d, e.opacity);
}
function Oc(e, t, n, a) {
  return arguments.length === 1 ? Eo(e) : new it(e, t, n, a ?? 1);
}
function it(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Za(it, Oc, Bo(Tn, {
  brighter(e) {
    return e = e == null ? On : Math.pow(On, e), new it(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wn : Math.pow(wn, e), new it(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new rt(
      Gr(e >= 240 ? e - 240 : e + 120, o, a),
      Gr(e, o, a),
      Gr(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new it(Bs(this.h), Bn(this.s), Bn(this.l), Un(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Un(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Bs(this.h)}, ${Bn(this.s) * 100}%, ${Bn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Bs(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Bn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Gr(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ja = (e) => () => e;
function Uc(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Gc(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function Yc(e) {
  return (e = +e) == 1 ? Po : function(t, n) {
    return n - t ? Gc(t, n, e) : Ja(isNaN(t) ? n : t);
  };
}
function Po(e, t) {
  var n = t - e;
  return n ? Uc(e, n) : Ja(isNaN(e) ? t : e);
}
const Es = (function e(t) {
  var n = Yc(t);
  function a(o, s) {
    var i = n((o = fa(o)).r, (s = fa(s)).r), l = n(o.g, s.g), d = n(o.b, s.b), c = Po(o.opacity, s.opacity);
    return function(f) {
      return o.r = i(f), o.g = l(f), o.b = d(f), o.opacity = c(f), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Vc(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function qc(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Kc(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), s = new Array(n), i;
  for (i = 0; i < a; ++i) o[i] = Qa(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Xc(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Gn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Zc(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Qa(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in n) a[o] = n[o](s);
    return a;
  };
}
var ha = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Yr = new RegExp(ha.source, "g");
function Jc(e) {
  return function() {
    return e;
  };
}
function Qc(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ed(e, t) {
  var n = ha.lastIndex = Yr.lastIndex = 0, a, o, s, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = ha.exec(e)) && (o = Yr.exec(t)); )
    (s = o.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, d.push({ i, x: Gn(a, o) })), n = Yr.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? d[0] ? Qc(d[0].x) : Jc(t) : (t = d.length, function(c) {
    for (var f = 0, h; f < t; ++f) l[(h = d[f]).i] = h.x(c);
    return l.join("");
  });
}
function Qa(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Ja(t) : (n === "number" ? Gn : n === "string" ? (a = Sn(t)) ? (t = a, Es) : ed : t instanceof Sn ? Es : t instanceof Date ? Xc : qc(t) ? Vc : Array.isArray(t) ? Kc : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Zc : Gn)(e, t);
}
function td(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function nd(e) {
  return function() {
    return e;
  };
}
function rd(e) {
  return +e;
}
var Ps = [0, 1];
function nn(e) {
  return e;
}
function pa(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : nd(isNaN(t) ? NaN : 0.5);
}
function ad(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function sd(e, t, n) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = pa(o, a), s = n(i, s)) : (a = pa(a, o), s = n(s, i)), function(l) {
    return s(a(l));
  };
}
function od(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = pa(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var d = Sc(e, l, 1, a) - 1;
    return s[d](o[d](l));
  };
}
function Ro(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function id() {
  var e = Ps, t = Ps, n = Qa, a, o, s, i = nn, l, d, c;
  function f() {
    var p = Math.min(e.length, t.length);
    return i !== nn && (i = ad(e[0], e[p - 1])), l = p > 2 ? od : sd, d = c = null, h;
  }
  function h(p) {
    return p == null || isNaN(p = +p) ? s : (d || (d = l(e.map(a), t, n)))(a(i(p)));
  }
  return h.invert = function(p) {
    return i(o((c || (c = l(t, e.map(a), Gn)))(p)));
  }, h.domain = function(p) {
    return arguments.length ? (e = Array.from(p, rd), f()) : e.slice();
  }, h.range = function(p) {
    return arguments.length ? (t = Array.from(p), f()) : t.slice();
  }, h.rangeRound = function(p) {
    return t = Array.from(p), n = td, f();
  }, h.clamp = function(p) {
    return arguments.length ? (i = p ? !0 : nn, f()) : i !== nn;
  }, h.interpolate = function(p) {
    return arguments.length ? (n = p, f()) : n;
  }, h.unknown = function(p) {
    return arguments.length ? (s = p, h) : s;
  }, function(p, g) {
    return a = p, o = g, f();
  };
}
function Ho() {
  return id()(nn, nn);
}
function ld(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Yn(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function ln(e) {
  return e = Yn(Math.abs(e)), e ? e[1] : NaN;
}
function cd(e, t) {
  return function(n, a) {
    for (var o = n.length, s = [], i = 0, l = e[0], d = 0; o > 0 && l > 0 && (d + l + 1 > a && (l = Math.max(1, a - d)), s.push(n.substring(o -= l, o + l)), !((d += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function dd(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var ud = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Vn(e) {
  if (!(t = ud.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new es({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Vn.prototype = es.prototype;
function es(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
es.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function fd(e) {
  e: for (var t = e.length, n = 1, a = -1, o; n < t; ++n)
    switch (e[n]) {
      case ".":
        a = o = n;
        break;
      case "0":
        a === 0 && (a = n), o = n;
        break;
      default:
        if (!+e[n]) break e;
        a > 0 && (a = 0);
        break;
    }
  return a > 0 ? e.slice(0, a) + e.slice(o + 1) : e;
}
var zo;
function hd(e, t) {
  var n = Yn(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], s = o - (zo = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return s === i ? a : s > i ? a + new Array(s - i + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Yn(e, Math.max(0, t + s - 1))[0];
}
function Rs(e, t) {
  var n = Yn(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const Hs = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: ld,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Rs(e * 100, t),
  r: Rs,
  s: hd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function zs(e) {
  return e;
}
var Ws = Array.prototype.map, Os = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function pd(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? zs : cd(Ws.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? zs : dd(Ws.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(h) {
    h = Vn(h);
    var p = h.fill, g = h.align, M = h.sign, m = h.symbol, u = h.zero, E = h.width, P = h.comma, j = h.precision, _ = h.trim, B = h.type;
    B === "n" ? (P = !0, B = "g") : Hs[B] || (j === void 0 && (j = 12), _ = !0, B = "g"), (u || p === "0" && g === "=") && (u = !0, p = "0", g = "=");
    var S = m === "$" ? n : m === "#" && /[boxX]/.test(B) ? "0" + B.toLowerCase() : "", L = m === "$" ? a : /[%p]/.test(B) ? i : "", T = Hs[B], C = /[defgprs%]/.test(B);
    j = j === void 0 ? 6 : /[gprs]/.test(B) ? Math.max(1, Math.min(21, j)) : Math.max(0, Math.min(20, j));
    function N(x) {
      var v = S, R = L, D, $, y;
      if (B === "c")
        R = T(x) + R, x = "";
      else {
        x = +x;
        var H = x < 0 || 1 / x < 0;
        if (x = isNaN(x) ? d : T(Math.abs(x), j), _ && (x = fd(x)), H && +x == 0 && M !== "+" && (H = !1), v = (H ? M === "(" ? M : l : M === "-" || M === "(" ? "" : M) + v, R = (B === "s" ? Os[8 + zo / 3] : "") + R + (H && M === "(" ? ")" : ""), C) {
          for (D = -1, $ = x.length; ++D < $; )
            if (y = x.charCodeAt(D), 48 > y || y > 57) {
              R = (y === 46 ? o + x.slice(D + 1) : x.slice(D)) + R, x = x.slice(0, D);
              break;
            }
        }
      }
      P && !u && (x = t(x, 1 / 0));
      var Q = v.length + x.length + R.length, b = Q < E ? new Array(E - Q + 1).join(p) : "";
      switch (P && u && (x = t(b + x, b.length ? E - R.length : 1 / 0), b = ""), g) {
        case "<":
          x = v + x + R + b;
          break;
        case "=":
          x = v + b + x + R;
          break;
        case "^":
          x = b.slice(0, Q = b.length >> 1) + v + x + R + b.slice(Q);
          break;
        default:
          x = b + v + x + R;
          break;
      }
      return s(x);
    }
    return N.toString = function() {
      return h + "";
    }, N;
  }
  function f(h, p) {
    var g = c((h = Vn(h), h.type = "f", h)), M = Math.max(-8, Math.min(8, Math.floor(ln(p) / 3))) * 3, m = Math.pow(10, -M), u = Os[8 + M / 3];
    return function(E) {
      return g(m * E) + u;
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var En, Wo, Oo;
md({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function md(e) {
  return En = pd(e), Wo = En.format, Oo = En.formatPrefix, En;
}
function gd(e) {
  return Math.max(0, -ln(Math.abs(e)));
}
function xd(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ln(t) / 3))) * 3 - ln(Math.abs(e)));
}
function bd(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, ln(t) - ln(e)) + 1;
}
function yd(e, t, n, a) {
  var o = ua(e, t, n), s;
  switch (a = Vn(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = xd(o, i)) && (a.precision = s), Oo(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = bd(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = gd(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return Wo(a);
}
function vd(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return Dc(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return yd(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, s = a.length - 1, i = a[o], l = a[s], d, c, f = 10;
    for (l < i && (c = i, i = l, l = c, c = o, o = s, s = c); f-- > 0; ) {
      if (c = da(i, l, n), c === d)
        return a[o] = i, a[s] = l, t(a);
      if (c > 0)
        i = Math.floor(i / c) * c, l = Math.ceil(l / c) * c;
      else if (c < 0)
        i = Math.ceil(i * c) / c, l = Math.floor(l * c) / c;
      else
        break;
      d = c;
    }
    return e;
  }, e;
}
function qn() {
  var e = Ho();
  return e.copy = function() {
    return Ro(e, qn());
  }, Dr.apply(e, arguments), vd(e);
}
function wd(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], s = e[a], i;
  return s < o && (i = n, n = a, a = i, i = o, o = s, s = i), e[n] = t.floor(o), e[a] = t.ceil(s), e;
}
const Vr = /* @__PURE__ */ new Date(), qr = /* @__PURE__ */ new Date();
function Ye(e, t, n, a) {
  function o(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return o.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), o.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), o.round = (s) => {
    const i = o(s), l = o.ceil(s);
    return s - i < l - s ? i : l;
  }, o.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), o.range = (s, i, l) => {
    const d = [];
    if (s = o.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return d;
    let c;
    do
      d.push(c = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (c < s && s < i);
    return d;
  }, o.filter = (s) => Ye((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), n && (o.count = (s, i) => (Vr.setTime(+s), qr.setTime(+i), e(Vr), e(qr), Math.floor(n(Vr, qr))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const Kn = Ye(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Kn.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ye((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Kn);
Kn.range;
const Nt = 1e3, ot = Nt * 60, Tt = ot * 60, Dt = Tt * 24, ts = Dt * 7, Us = Dt * 30, Kr = Dt * 365, rn = Ye((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Nt);
}, (e, t) => (t - e) / Nt, (e) => e.getUTCSeconds());
rn.range;
const ns = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Nt);
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getMinutes());
ns.range;
const _d = Ye((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getUTCMinutes());
_d.range;
const rs = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Nt - e.getMinutes() * ot);
}, (e, t) => {
  e.setTime(+e + t * Tt);
}, (e, t) => (t - e) / Tt, (e) => e.getHours());
rs.range;
const Sd = Ye((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Tt);
}, (e, t) => (t - e) / Tt, (e) => e.getUTCHours());
Sd.range;
const $n = Ye(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ot) / Dt,
  (e) => e.getDate() - 1
);
$n.range;
const as = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Dt, (e) => e.getUTCDate() - 1);
as.range;
const kd = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Dt, (e) => Math.floor(e / Dt));
kd.range;
function qt(e) {
  return Ye((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ot) / ts);
}
const Mr = qt(0), Xn = qt(1), Cd = qt(2), jd = qt(3), cn = qt(4), Nd = qt(5), Td = qt(6);
Mr.range;
Xn.range;
Cd.range;
jd.range;
cn.range;
Nd.range;
Td.range;
function Kt(e) {
  return Ye((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / ts);
}
const Uo = Kt(0), Zn = Kt(1), $d = Kt(2), Dd = Kt(3), dn = Kt(4), Md = Kt(5), Id = Kt(6);
Uo.range;
Zn.range;
$d.range;
Dd.range;
dn.range;
Md.range;
Id.range;
const kn = Ye((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
kn.range;
const Ld = Ye((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Ld.range;
const Mt = Ye((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Mt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ye((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Mt.range;
const Yt = Ye((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Yt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ye((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
Yt.range;
function Fd(e, t, n, a, o, s) {
  const i = [
    [rn, 1, Nt],
    [rn, 5, 5 * Nt],
    [rn, 15, 15 * Nt],
    [rn, 30, 30 * Nt],
    [s, 1, ot],
    [s, 5, 5 * ot],
    [s, 15, 15 * ot],
    [s, 30, 30 * ot],
    [o, 1, Tt],
    [o, 3, 3 * Tt],
    [o, 6, 6 * Tt],
    [o, 12, 12 * Tt],
    [a, 1, Dt],
    [a, 2, 2 * Dt],
    [n, 1, ts],
    [t, 1, Us],
    [t, 3, 3 * Us],
    [e, 1, Kr]
  ];
  function l(c, f, h) {
    const p = f < c;
    p && ([c, f] = [f, c]);
    const g = h && typeof h.range == "function" ? h : d(c, f, h), M = g ? g.range(c, +f + 1) : [];
    return p ? M.reverse() : M;
  }
  function d(c, f, h) {
    const p = Math.abs(f - c) / h, g = Xa(([, , u]) => u).right(i, p);
    if (g === i.length) return e.every(ua(c / Kr, f / Kr, h));
    if (g === 0) return Kn.every(Math.max(ua(c, f, h), 1));
    const [M, m] = i[p / i[g - 1][2] < i[g][2] / p ? g - 1 : g];
    return M.every(m);
  }
  return [l, d];
}
const [Ad, Bd] = Fd(Mt, kn, Mr, $n, rs, ns);
function Xr(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Zr(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function gn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Ed(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = xn(o), f = bn(o), h = xn(s), p = bn(s), g = xn(i), M = bn(i), m = xn(l), u = bn(l), E = xn(d), P = bn(d), j = {
    a: H,
    A: Q,
    b,
    B: w,
    c: null,
    d: Xs,
    e: Xs,
    f: ou,
    g: gu,
    G: bu,
    H: ru,
    I: au,
    j: su,
    L: Go,
    m: iu,
    M: lu,
    p: A,
    q: k,
    Q: Qs,
    s: eo,
    S: cu,
    u: du,
    U: uu,
    V: fu,
    w: hu,
    W: pu,
    x: null,
    X: null,
    y: mu,
    Y: xu,
    Z: yu,
    "%": Js
  }, _ = {
    a: O,
    A: I,
    b: J,
    B: ue,
    c: null,
    d: Zs,
    e: Zs,
    f: Su,
    g: Lu,
    G: Au,
    H: vu,
    I: wu,
    j: _u,
    L: Vo,
    m: ku,
    M: Cu,
    p: ce,
    q: Z,
    Q: Qs,
    s: eo,
    S: ju,
    u: Nu,
    U: Tu,
    V: $u,
    w: Du,
    W: Mu,
    x: null,
    X: null,
    y: Iu,
    Y: Fu,
    Z: Bu,
    "%": Js
  }, B = {
    a: N,
    A: x,
    b: v,
    B: R,
    c: D,
    d: qs,
    e: qs,
    f: Qd,
    g: Vs,
    G: Ys,
    H: Ks,
    I: Ks,
    j: Kd,
    L: Jd,
    m: qd,
    M: Xd,
    p: C,
    q: Vd,
    Q: tu,
    s: nu,
    S: Zd,
    u: Wd,
    U: Od,
    V: Ud,
    w: zd,
    W: Gd,
    x: $,
    X: y,
    y: Vs,
    Y: Ys,
    Z: Yd,
    "%": eu
  };
  j.x = S(n, j), j.X = S(a, j), j.c = S(t, j), _.x = S(n, _), _.X = S(a, _), _.c = S(t, _);
  function S(G, W) {
    return function(re) {
      var z = [], oe = -1, Y = 0, ie = G.length, le, xe, Ce;
      for (re instanceof Date || (re = /* @__PURE__ */ new Date(+re)); ++oe < ie; )
        G.charCodeAt(oe) === 37 && (z.push(G.slice(Y, oe)), (xe = Gs[le = G.charAt(++oe)]) != null ? le = G.charAt(++oe) : xe = le === "e" ? " " : "0", (Ce = W[le]) && (le = Ce(re, xe)), z.push(le), Y = oe + 1);
      return z.push(G.slice(Y, oe)), z.join("");
    };
  }
  function L(G, W) {
    return function(re) {
      var z = gn(1900, void 0, 1), oe = T(z, G, re += "", 0), Y, ie;
      if (oe != re.length) return null;
      if ("Q" in z) return new Date(z.Q);
      if ("s" in z) return new Date(z.s * 1e3 + ("L" in z ? z.L : 0));
      if (W && !("Z" in z) && (z.Z = 0), "p" in z && (z.H = z.H % 12 + z.p * 12), z.m === void 0 && (z.m = "q" in z ? z.q : 0), "V" in z) {
        if (z.V < 1 || z.V > 53) return null;
        "w" in z || (z.w = 1), "Z" in z ? (Y = Zr(gn(z.y, 0, 1)), ie = Y.getUTCDay(), Y = ie > 4 || ie === 0 ? Zn.ceil(Y) : Zn(Y), Y = as.offset(Y, (z.V - 1) * 7), z.y = Y.getUTCFullYear(), z.m = Y.getUTCMonth(), z.d = Y.getUTCDate() + (z.w + 6) % 7) : (Y = Xr(gn(z.y, 0, 1)), ie = Y.getDay(), Y = ie > 4 || ie === 0 ? Xn.ceil(Y) : Xn(Y), Y = $n.offset(Y, (z.V - 1) * 7), z.y = Y.getFullYear(), z.m = Y.getMonth(), z.d = Y.getDate() + (z.w + 6) % 7);
      } else ("W" in z || "U" in z) && ("w" in z || (z.w = "u" in z ? z.u % 7 : "W" in z ? 1 : 0), ie = "Z" in z ? Zr(gn(z.y, 0, 1)).getUTCDay() : Xr(gn(z.y, 0, 1)).getDay(), z.m = 0, z.d = "W" in z ? (z.w + 6) % 7 + z.W * 7 - (ie + 5) % 7 : z.w + z.U * 7 - (ie + 6) % 7);
      return "Z" in z ? (z.H += z.Z / 100 | 0, z.M += z.Z % 100, Zr(z)) : Xr(z);
    };
  }
  function T(G, W, re, z) {
    for (var oe = 0, Y = W.length, ie = re.length, le, xe; oe < Y; ) {
      if (z >= ie) return -1;
      if (le = W.charCodeAt(oe++), le === 37) {
        if (le = W.charAt(oe++), xe = B[le in Gs ? W.charAt(oe++) : le], !xe || (z = xe(G, re, z)) < 0) return -1;
      } else if (le != re.charCodeAt(z++))
        return -1;
    }
    return z;
  }
  function C(G, W, re) {
    var z = c.exec(W.slice(re));
    return z ? (G.p = f.get(z[0].toLowerCase()), re + z[0].length) : -1;
  }
  function N(G, W, re) {
    var z = g.exec(W.slice(re));
    return z ? (G.w = M.get(z[0].toLowerCase()), re + z[0].length) : -1;
  }
  function x(G, W, re) {
    var z = h.exec(W.slice(re));
    return z ? (G.w = p.get(z[0].toLowerCase()), re + z[0].length) : -1;
  }
  function v(G, W, re) {
    var z = E.exec(W.slice(re));
    return z ? (G.m = P.get(z[0].toLowerCase()), re + z[0].length) : -1;
  }
  function R(G, W, re) {
    var z = m.exec(W.slice(re));
    return z ? (G.m = u.get(z[0].toLowerCase()), re + z[0].length) : -1;
  }
  function D(G, W, re) {
    return T(G, t, W, re);
  }
  function $(G, W, re) {
    return T(G, n, W, re);
  }
  function y(G, W, re) {
    return T(G, a, W, re);
  }
  function H(G) {
    return i[G.getDay()];
  }
  function Q(G) {
    return s[G.getDay()];
  }
  function b(G) {
    return d[G.getMonth()];
  }
  function w(G) {
    return l[G.getMonth()];
  }
  function A(G) {
    return o[+(G.getHours() >= 12)];
  }
  function k(G) {
    return 1 + ~~(G.getMonth() / 3);
  }
  function O(G) {
    return i[G.getUTCDay()];
  }
  function I(G) {
    return s[G.getUTCDay()];
  }
  function J(G) {
    return d[G.getUTCMonth()];
  }
  function ue(G) {
    return l[G.getUTCMonth()];
  }
  function ce(G) {
    return o[+(G.getUTCHours() >= 12)];
  }
  function Z(G) {
    return 1 + ~~(G.getUTCMonth() / 3);
  }
  return {
    format: function(G) {
      var W = S(G += "", j);
      return W.toString = function() {
        return G;
      }, W;
    },
    parse: function(G) {
      var W = L(G += "", !1);
      return W.toString = function() {
        return G;
      }, W;
    },
    utcFormat: function(G) {
      var W = S(G += "", _);
      return W.toString = function() {
        return G;
      }, W;
    },
    utcParse: function(G) {
      var W = L(G += "", !0);
      return W.toString = function() {
        return G;
      }, W;
    }
  };
}
var Gs = { "-": "", _: " ", 0: "0" }, Xe = /^\s*\d+/, Pd = /^%/, Rd = /[\\^$*+?|[\]().{}]/g;
function Fe(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function Hd(e) {
  return e.replace(Rd, "\\$&");
}
function xn(e) {
  return new RegExp("^(?:" + e.map(Hd).join("|") + ")", "i");
}
function bn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function zd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function Wd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Od(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function Ud(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function Gd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Ys(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Vs(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function Yd(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function Vd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function qd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function qs(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Kd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Ks(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function Xd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Zd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Jd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Qd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function eu(e, t, n) {
  var a = Pd.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function tu(e, t, n) {
  var a = Xe.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function nu(e, t, n) {
  var a = Xe.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Xs(e, t) {
  return Fe(e.getDate(), t, 2);
}
function ru(e, t) {
  return Fe(e.getHours(), t, 2);
}
function au(e, t) {
  return Fe(e.getHours() % 12 || 12, t, 2);
}
function su(e, t) {
  return Fe(1 + $n.count(Mt(e), e), t, 3);
}
function Go(e, t) {
  return Fe(e.getMilliseconds(), t, 3);
}
function ou(e, t) {
  return Go(e, t) + "000";
}
function iu(e, t) {
  return Fe(e.getMonth() + 1, t, 2);
}
function lu(e, t) {
  return Fe(e.getMinutes(), t, 2);
}
function cu(e, t) {
  return Fe(e.getSeconds(), t, 2);
}
function du(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function uu(e, t) {
  return Fe(Mr.count(Mt(e) - 1, e), t, 2);
}
function Yo(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? cn(e) : cn.ceil(e);
}
function fu(e, t) {
  return e = Yo(e), Fe(cn.count(Mt(e), e) + (Mt(e).getDay() === 4), t, 2);
}
function hu(e) {
  return e.getDay();
}
function pu(e, t) {
  return Fe(Xn.count(Mt(e) - 1, e), t, 2);
}
function mu(e, t) {
  return Fe(e.getFullYear() % 100, t, 2);
}
function gu(e, t) {
  return e = Yo(e), Fe(e.getFullYear() % 100, t, 2);
}
function xu(e, t) {
  return Fe(e.getFullYear() % 1e4, t, 4);
}
function bu(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? cn(e) : cn.ceil(e), Fe(e.getFullYear() % 1e4, t, 4);
}
function yu(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Fe(t / 60 | 0, "0", 2) + Fe(t % 60, "0", 2);
}
function Zs(e, t) {
  return Fe(e.getUTCDate(), t, 2);
}
function vu(e, t) {
  return Fe(e.getUTCHours(), t, 2);
}
function wu(e, t) {
  return Fe(e.getUTCHours() % 12 || 12, t, 2);
}
function _u(e, t) {
  return Fe(1 + as.count(Yt(e), e), t, 3);
}
function Vo(e, t) {
  return Fe(e.getUTCMilliseconds(), t, 3);
}
function Su(e, t) {
  return Vo(e, t) + "000";
}
function ku(e, t) {
  return Fe(e.getUTCMonth() + 1, t, 2);
}
function Cu(e, t) {
  return Fe(e.getUTCMinutes(), t, 2);
}
function ju(e, t) {
  return Fe(e.getUTCSeconds(), t, 2);
}
function Nu(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Tu(e, t) {
  return Fe(Uo.count(Yt(e) - 1, e), t, 2);
}
function qo(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? dn(e) : dn.ceil(e);
}
function $u(e, t) {
  return e = qo(e), Fe(dn.count(Yt(e), e) + (Yt(e).getUTCDay() === 4), t, 2);
}
function Du(e) {
  return e.getUTCDay();
}
function Mu(e, t) {
  return Fe(Zn.count(Yt(e) - 1, e), t, 2);
}
function Iu(e, t) {
  return Fe(e.getUTCFullYear() % 100, t, 2);
}
function Lu(e, t) {
  return e = qo(e), Fe(e.getUTCFullYear() % 100, t, 2);
}
function Fu(e, t) {
  return Fe(e.getUTCFullYear() % 1e4, t, 4);
}
function Au(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? dn(e) : dn.ceil(e), Fe(e.getUTCFullYear() % 1e4, t, 4);
}
function Bu() {
  return "+0000";
}
function Js() {
  return "%";
}
function Qs(e) {
  return +e;
}
function eo(e) {
  return Math.floor(+e / 1e3);
}
var Qt, Ko;
Eu({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Eu(e) {
  return Qt = Ed(e), Ko = Qt.format, Qt.parse, Qt.utcFormat, Qt.utcParse, Qt;
}
function Pu(e) {
  return new Date(e);
}
function Ru(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Xo(e, t, n, a, o, s, i, l, d, c) {
  var f = Ho(), h = f.invert, p = f.domain, g = c(".%L"), M = c(":%S"), m = c("%I:%M"), u = c("%I %p"), E = c("%a %d"), P = c("%b %d"), j = c("%B"), _ = c("%Y");
  function B(S) {
    return (d(S) < S ? g : l(S) < S ? M : i(S) < S ? m : s(S) < S ? u : a(S) < S ? o(S) < S ? E : P : n(S) < S ? j : _)(S);
  }
  return f.invert = function(S) {
    return new Date(h(S));
  }, f.domain = function(S) {
    return arguments.length ? p(Array.from(S, Ru)) : p().map(Pu);
  }, f.ticks = function(S) {
    var L = p();
    return e(L[0], L[L.length - 1], S ?? 10);
  }, f.tickFormat = function(S, L) {
    return L == null ? B : c(L);
  }, f.nice = function(S) {
    var L = p();
    return (!S || typeof S.range != "function") && (S = t(L[0], L[L.length - 1], S ?? 10)), S ? p(wd(L, S)) : f;
  }, f.copy = function() {
    return Ro(f, Xo(e, t, n, a, o, s, i, l, d, c));
  }, f;
}
function ss() {
  return Dr.apply(Xo(Ad, Bd, Mt, kn, Mr, $n, rs, ns, rn, Ko).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Hu({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: a,
  isSelected: o = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": d
}) {
  const c = Le(null), [f, h] = Me(!1), [p, g] = Me(!1), M = t(e.start), m = t(e.end), u = Math.max(m - M, 20), E = () => {
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
  }, P = e.progress ? u * e.progress / 100 : 0, j = () => {
    n?.(e);
  }, _ = () => {
    a?.(e);
  }, B = (v) => {
    v.key === "Enter" ? (v.preventDefault(), j()) : v.key === " " && (v.preventDefault(), _());
  }, S = () => {
    h(!0);
  }, L = () => {
    h(!1);
  }, T = () => {
    g(!0), l?.();
  }, C = () => {
    g(!1);
  }, N = [
    "gantt-task-bar",
    f && "gantt-task-bar--pressed",
    (p || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), x = {
    "--task-left": `${M}px`,
    "--task-width": `${u}px`,
    "--task-color": E(),
    left: `${M}px`,
    width: `${u}px`,
    backgroundColor: E()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": s,
      className: N,
      style: x,
      onClick: j,
      onDoubleClick: _,
      onKeyDown: B,
      onMouseDown: S,
      onMouseUp: L,
      onFocus: T,
      onBlur: C,
      "aria-label": d || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${P}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function zu({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let g = e.getTime(); g <= t.getTime(); g += 864e5)
    a.push(new Date(g));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = Me(-1), d = Le(null), c = (g) => {
    if (g.key === "ArrowLeft") {
      g.preventDefault();
      const M = Math.max(0, i === -1 ? 0 : i - 1);
      l(M), p(M);
    } else if (g.key === "ArrowRight") {
      g.preventDefault();
      const M = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(M), p(M);
    } else if (g.key === "ArrowDown") {
      g.preventDefault();
      const M = document.querySelector(".gantt-row .timeline-container");
      M && M.focus();
    } else if (g.key === "Home")
      g.preventDefault(), l(0), p(0);
    else if (g.key === "End") {
      g.preventDefault();
      const M = a.length - 1;
      l(M), p(M);
    }
  }, f = (g) => {
    if (g.key === "ArrowDown") {
      g.preventDefault();
      const M = document.querySelector(".gantt-row .resource-label");
      M && M.focus();
    } else if (g.key === "ArrowRight") {
      g.preventDefault();
      const M = d.current;
      M && M.focus();
    }
  }, h = () => {
    i === -1 && (l(0), setTimeout(() => p(0), 0));
  }, p = (g) => {
    const M = d.current?.querySelector(`[data-date-index="${g}"]`);
    M && M.focus();
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "gantt-header",
      role: "row",
      "aria-rowindex": 1,
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "header-resource",
            role: "columnheader",
            "aria-colindex": 1,
            tabIndex: 0,
            "aria-label": "Resource column header",
            onKeyDown: f,
            children: "Resources"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: d,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": n,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: c,
            onFocus: h,
            children: a.map((g, M) => {
              const m = g.getTime() === s.getTime(), u = i === M;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": M,
                  className: `date-column ${m ? "today" : ""} ${u ? "focused" : ""}`,
                  tabIndex: u ? 0 : -1,
                  role: "button",
                  "aria-label": `${g.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${m ? " (Today)" : ""}`,
                  onFocus: () => l(M),
                  onKeyDown: c,
                  children: g.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                M
              );
            })
          }
        )
      ]
    }
  );
}
function Wu({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, d] = Me(!1), [c, f] = Me(-1), h = Le(null);
  Ae(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      h.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
  const p = (m) => {
    if (m.key === "ArrowLeft" && m.shiftKey) {
      m.preventDefault(), m.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (m.key === "ArrowRight" && m.shiftKey) {
      m.preventDefault(), m.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (m.key) {
        case "ArrowUp":
          m.preventDefault(), s === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          m.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          m.preventDefault(), h.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (m.preventDefault(), d(!0), f(0));
          break;
      }
      return;
    }
    switch (m.key) {
      case "ArrowLeft":
        m.preventDefault();
        const u = Math.max(0, c - 1);
        f(u), h.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
        break;
      case "ArrowRight":
        m.preventDefault();
        const P = Math.min(t.length - 1, c + 1);
        f(P), h.current?.querySelector(`[data-task-index="${P}"]`)?.focus();
        break;
      case "Enter":
        m.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        m.preventDefault(), c >= 0 && o?.(t[c]);
        break;
      case "Escape":
        m.preventDefault(), d(!1), f(-1), h.current?.focus();
        break;
    }
  }, g = (m) => {
    switch (m.key) {
      case "ArrowUp":
        m.preventDefault(), s === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        m.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        m.preventDefault(), h.current?.focus();
        break;
    }
  }, M = (m) => {
    l && f(m);
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "gantt-row",
      role: "row",
      "aria-rowindex": s + 2,
      children: [
        /* @__PURE__ */ r.jsx(
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
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: h,
            className: `timeline-container ${l ? "timeline-active" : ""}`,
            role: "gridcell",
            "aria-colindex": 2,
            "aria-colspan": i,
            tabIndex: 0,
            "aria-label": `Timeline for ${e.label} with ${t.length} task${t.length !== 1 ? "s" : ""}. Press Enter to activate task navigation, then use arrow keys to navigate, Enter to select, Space to activate, Escape to exit`,
            onKeyDown: p,
            onFocus: () => {
              l || f(-1);
            },
            children: t.map((m, u) => /* @__PURE__ */ r.jsx(
              Hu,
              {
                task: m,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && c === u,
                taskIndex: u,
                tabIndex: l && c === u ? 0 : -1,
                onFocus: () => M(u)
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
function dx({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Le(null), [l, d] = Me(800), c = De(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const m = new Date(n);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : m;
  }, [n]), f = De(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const m = new Date(a);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : m;
  }, [a]), h = De(() => Math.ceil((f.getTime() - c.getTime()) / 864e5) + 1, [c, f]);
  Ae(() => {
    if (!i.current) return;
    const m = new ResizeObserver((u) => {
      const E = u[0];
      E && d(Math.max(E.contentRect.width - 220, 400));
    });
    return m.observe(i.current), () => m.disconnect();
  }, []);
  const p = De(
    () => ss().domain([c, f]).range([0, l]),
    [c, f, l]
  ), g = De(() => {
    const m = /* @__PURE__ */ new Map();
    return t.forEach((u) => {
      const E = m.get(u.resourceId) || [];
      E.push(u), m.set(u.resourceId, E);
    }), m;
  }, [t]), M = (m) => {
    if (m.target === m.currentTarget)
      switch (m.key) {
        case "ArrowDown":
          m.preventDefault();
          const u = i.current?.querySelector(".gantt-row .resource-label");
          u && u.focus();
          break;
        case "Home":
          m.preventDefault();
          const E = i.current?.querySelector(".header-resource");
          E && E.focus();
          break;
      }
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "gantt-chart",
      role: "grid",
      "aria-label": "Gantt Chart showing resource scheduling and task timelines",
      "aria-rowcount": e.length + 1,
      "aria-colcount": h + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: M,
      children: [
        /* @__PURE__ */ r.jsx(zu, { viewStart: c, viewEnd: f, dateCount: h }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (m) => {
              m.key === "ArrowLeft" && m.altKey ? (m.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : m.key === "ArrowRight" && m.altKey ? (m.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : m.key === "ArrowUp" && m.altKey ? (m.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : m.key === "ArrowDown" && m.altKey && (m.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((m, u) => /* @__PURE__ */ r.jsx(
              Wu,
              {
                resource: m,
                tasks: g.get(m.id) || [],
                scale: p,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: u,
                dateCount: h
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
const Jn = ({
  children: e,
  href: t,
  active: n = !1,
  attributes: a = {}
}) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", children: n ? /* @__PURE__ */ r.jsx(
  "span",
  {
    className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
    "aria-current": "page",
    ...a,
    children: e
  }
) : /* @__PURE__ */ r.jsx(
  "a",
  {
    className: "nhsuk-breadcrumb__link",
    href: t,
    ...a,
    children: e
  }
) }), Ou = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const d = () => t ? at.Children.toArray(t).filter(
    (u) => at.isValidElement(u) && (u.type === Jn || u.type?.displayName === "BreadcrumbItem")
  ).map((u) => ({
    text: typeof u.props.children == "string" ? u.props.children : String(u.props.children),
    href: u.props.href,
    active: u.props.active,
    attributes: u.props.attributes
  })) : [], c = () => t ? d() : o && s ? [{ href: o, text: s }] : e, f = () => {
    const m = c();
    if (m && m.length > 0) {
      const u = m.slice().reverse().find((E) => E.href && !E.active);
      if (u)
        return { href: u.href, text: u.text };
    }
    return { text: "Home" };
  }, h = c(), p = f(), g = ge(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), M = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: g,
      "aria-label": M,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          at.Children.map(t, (m, u) => at.isValidElement(m) && (m.type === Jn || m.type?.displayName === "BreadcrumbItem") ? at.cloneElement(m, { key: u }) : null)
        ) : (
          // Render from items array
          h?.filter((m) => m.active || !!m.href).map((m, u) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: m.active ? /* @__PURE__ */ r.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...m.attributes || {},
              children: m.text
            }
          ) : /* @__PURE__ */ r.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: m.href,
              role: "link",
              ...m.attributes || {},
              children: m.text
            }
          ) }, u))
        ) }),
        p.href && /* @__PURE__ */ r.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ r.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: p.href,
            role: "link",
            "aria-label": `Back to ${p.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              p.text
            ]
          }
        ) })
      ]
    }
  );
}, Uu = Ou;
Uu.Item = Jn;
Jn.displayName = "BreadcrumbItem";
const Zo = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [o, s] = Me(!1);
  Ae(() => {
    s(!0);
  }, []), Ae(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (d) => {
      const c = d.target, f = c.getAttribute("href");
      if (f && f.startsWith("#")) {
        const h = document.querySelector(f);
        if (h) {
          h.hasAttribute("tabindex") || h.setAttribute("tabindex", "-1"), h.focus(), h.classList.add("nhsuk-skip-link-focused-element");
          const p = window.setTimeout(() => {
            h.classList.remove("nhsuk-skip-link-focused-element"), h.getAttribute("tabindex") === "-1" && h.removeAttribute("tabindex");
          }, 3e3);
          c.__nhsSkipLinkTimeout = p;
        }
      }
    };
    try {
      const d = document.querySelectorAll(".nhsuk-skip-link");
      return d.forEach((c) => {
        c.addEventListener("click", l);
      }), () => {
        try {
          d.forEach((c) => {
            c.removeEventListener("click", l);
            const f = c.__nhsSkipLinkTimeout;
            f && window.clearTimeout && window.clearTimeout(f);
          });
        } catch (c) {
          console.warn("SkipLink cleanup error:", c);
        }
      };
    } catch (d) {
      return console.warn("SkipLink initialization error:", d), () => {
      };
    }
  }, [o]);
  const i = ge("nhsuk-skip-link", n);
  return /* @__PURE__ */ r.jsx(
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
}, ux = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = ge("nhsuk-pagination", o);
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: i,
      role: "navigation",
      "aria-label": "Pagination",
      ...s,
      children: /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-list nhsuk-pagination__list", children: [
        e && t && /* @__PURE__ */ r.jsx("li", { className: "nhsuk-pagination-item--previous", children: /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--prev", href: e, children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-pagination__title", children: "Previous" }),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" }),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-pagination__page", children: t }),
          /* @__PURE__ */ r.jsx(
            "svg",
            {
              className: "nhsuk-icon nhsuk-icon__arrow-left",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              width: "34",
              height: "34",
              children: /* @__PURE__ */ r.jsx("path", { d: "M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z" })
            }
          )
        ] }) }),
        n && a && /* @__PURE__ */ r.jsx("li", { className: "nhsuk-pagination-item--next", children: /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--next", href: n, children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-pagination__title", children: "Next" }),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" }),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-pagination__page", children: a }),
          /* @__PURE__ */ r.jsx(
            "svg",
            {
              className: "nhsuk-icon nhsuk-icon__arrow-right",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              width: "34",
              height: "34",
              children: /* @__PURE__ */ r.jsx("path", { d: "M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z" })
            }
          )
        ] }) })
      ] })
    }
  );
}, fx = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = ge("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
    "li",
    {
      className: "nhsuk-contents-list__item",
      "aria-current": "page",
      ...i.attributes || {},
      children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-contents-list__current", children: i.text })
    },
    l
  ) : /* @__PURE__ */ r.jsx(
    "li",
    {
      className: "nhsuk-contents-list__item",
      children: /* @__PURE__ */ r.jsx(
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
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: o,
      role: "navigation",
      "aria-label": n,
      ...a,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-contents-list__list", children: e.map((i, l) => s(i, l)) })
      ]
    }
  );
}, Jo = at.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: a = 2,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  href: l,
  imgURL: d,
  imgAlt: c,
  ...f
}, h) => {
  const p = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    f.className
  ].filter(Boolean).join(" "), g = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), M = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), m = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const P = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      $t,
      {
        level: a,
        className: M,
        children: P()
      }
    );
  }, u = () => f.children ? f.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: s }) : null, E = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
    "svg",
    {
      className: "nhsuk-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "27",
      height: "27",
      "aria-hidden": "true",
      focusable: "false",
      children: [
        /* @__PURE__ */ r.jsx("circle", { cx: "13.333", cy: "13.333", r: "13.333", fill: "" }),
        /* @__PURE__ */ r.jsxs("g", { fill: "none", stroke: "#fff", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "2.667", children: [
          /* @__PURE__ */ r.jsx("path", { d: "M15.438 13l-3.771 3.771" }),
          /* @__PURE__ */ r.jsx("path", { d: "M11.667 9.229L15.438 13" })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ...f,
      className: p,
      ref: h,
      children: [
        d && /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: d,
            alt: c || ""
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: g, children: [
          m(),
          u(),
          E()
        ] })
      ]
    }
  );
});
Jo.displayName = "Card";
const hx = ({
  className: e,
  children: t,
  "data-testid": n,
  id: a
}) => {
  const o = ["nhsuk-card-group", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(
    "ul",
    {
      className: o,
      "data-testid": n,
      id: a,
      children: t
    }
  );
}, px = ({
  className: e,
  children: t,
  "data-testid": n
}) => {
  const a = ["nhsuk-card-group__item", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(
    "li",
    {
      className: a,
      "data-testid": n,
      children: t
    }
  );
}, mx = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: a = 3,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  className: l,
  children: d,
  "data-testid": c,
  id: f,
  "aria-label": h,
  "aria-labelledby": p,
  "aria-describedby": g
}) => {
  const M = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), u = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const P = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], j = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        P,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      $t,
      {
        level: a,
        className: m,
        children: j
      }
    );
  }, E = () => d || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: M,
      "data-testid": c,
      id: f,
      "aria-label": h,
      "aria-labelledby": p,
      "aria-describedby": g,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          u(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: E() })
      ]
    }
  );
}, Gu = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: a,
  headingLevel: o = 2,
  bodyText: s,
  bodyHtml: i,
  children: l,
  ...d
}) => {
  const c = ge(
    "nhsuk-panel",
    t
  ), f = () => !n && !a && !l ? null : a ? /* @__PURE__ */ r.jsx(
    $t,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    $t,
    {
      level: o,
      className: "nhsuk-panel__heading",
      text: n,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, h = () => l ? /* @__PURE__ */ r.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : s ? /* @__PURE__ */ r.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ r.jsx("p", { children: s }) }) : null;
  return /* @__PURE__ */ r.jsxs("div", { className: c, id: e, ...d, children: [
    f(),
    h()
  ] });
}, gx = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...o
}) => {
  const s = ge("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...o, children: i() });
}, xx = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const o = ge(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    n
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((d, c) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: "nhsuk-summary-list__actions-list-item",
      children: /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: d.href,
          className: "nhsuk-link",
          ...d.attributes,
          children: [
            s(d),
            d.visuallyHiddenText && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: d.visuallyHiddenText })
          ]
        }
      )
    },
    c
  )) }) });
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ r.jsx("dl", { className: o, ...a, children: e.map((l, d) => /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ r.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, d)) }) });
}, to = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: a,
  firstCellIsHeader: o = !1,
  responsive: s = !1,
  heading: i,
  headingLevel: l = 3,
  panel: d = !1,
  panelClasses: c,
  tableClasses: f,
  classes: h,
  attributes: p,
  "data-testid": g
}) => {
  const M = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), m = ge(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    f
  ), u = ge(h), E = (_, B) => {
    const S = ge("nhsuk-table__header", {
      [`nhsuk-table__header--${_.format}`]: _.format
    }, _.classes), L = {
      scope: "col",
      ..._.colspan && { colSpan: _.colspan },
      ..._.rowspan && { rowSpan: _.rowspan },
      ...s && { role: "columnheader" },
      ..._.attributes
    };
    return /* @__PURE__ */ r.jsx("th", { className: S, ...L, children: _.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text }, B);
  }, P = (_, B, S) => {
    const L = o && S, T = ge(
      L ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${L ? "header" : "cell"}--${_.format}`]: _.format
      },
      _.classes
    ), C = {
      ...L && { scope: "row" },
      ..._.colspan && { colSpan: _.colspan },
      ..._.rowspan && { rowSpan: _.rowspan },
      ...s && {
        role: L ? "rowheader" : "cell",
        ..._.header && { "data-label": _.header }
      },
      ..._.attributes
    }, N = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && _.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        _.header,
        " "
      ] }),
      _.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text
    ] }), x = L ? "th" : "td";
    return /* @__PURE__ */ r.jsx(x, { className: T, ...C, children: N }, B);
  }, j = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: m,
      ...s && { role: "table" },
      ...p,
      ...g && { "data-testid": g },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: M, children: n }),
        t && t.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: t.map((_, B) => E(_, B)) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((_, B) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: _.map(
              (S, L) => P(S, L, L === 0)
            )
          },
          B
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ r.jsxs(Gu, { className: c, children: [
    i && /* @__PURE__ */ r.jsx($t, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    j()
  ] }) : u ? /* @__PURE__ */ r.jsx("div", { className: u, children: j() }) : j();
}, bx = un(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: a,
  onTabFocus: o,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: d,
  id: c,
  "data-testid": f,
  ...h
}, p) => {
  const g = n !== void 0, [M, m] = Me(() => t || e[0]?.id || ""), u = g ? n : M, E = Le(null), P = Le(/* @__PURE__ */ new Map()), j = fe((N) => {
    g || m(N), a?.(N);
  }, [g, a]), _ = fe((N) => {
    o?.(N), l && j(N);
  }, [o, l, j]), B = fe((N, x) => {
    const v = e.filter(($) => !$.disabled).map(($) => $.id), R = v.indexOf(x);
    let D = null;
    switch (N.key) {
      case "ArrowLeft":
        D = R > 0 ? R - 1 : v.length - 1;
        break;
      case "ArrowRight":
        D = R < v.length - 1 ? R + 1 : 0;
        break;
      case "Home":
        D = 0;
        break;
      case "End":
        D = v.length - 1;
        break;
      case "Escape":
        N.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (D !== null) {
      N.preventDefault();
      const $ = v[D], y = P.current.get($);
      y && (y.focus(), _($));
    }
  }, [e, _, i]), S = fe((N, x) => {
    x ? P.current.set(N, x) : P.current.delete(N);
  }, []), L = fe((N) => {
    const x = P.current.get(N);
    x && x.focus();
  }, []);
  _o(p, () => ({
    focusTab: L,
    getActiveTab: () => u,
    getTabListElement: () => E.current
  }), [L, u]);
  const T = fe((N) => {
    const x = N.relatedTarget;
    E.current?.contains(x) || s?.();
  }, [s]), C = ge("nhsuk-tabs", d);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: C,
      id: c,
      "data-testid": f,
      ...h,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: E,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: T,
                children: e.map((N) => {
                  const x = N.id === u, v = N.disabled, R = ge("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": x,
                    "nhsuk-tabs__list-item--disabled": v
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: R, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (D) => S(N.id, D),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": x,
                      "aria-controls": `${N.id}-panel`,
                      id: `${N.id}-tab`,
                      tabIndex: x ? 0 : -1,
                      disabled: v,
                      onClick: () => !v && j(N.id),
                      onKeyDown: (D) => !v && B(D, N.id),
                      onFocus: () => !v && _(N.id),
                      ...N.attributes,
                      children: N.label
                    }
                  ) }, N.id);
                })
              }
            )
          }
        ),
        e.map((N) => {
          const x = N.id === u;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${N.id}-tab`,
              id: `${N.id}-panel`,
              hidden: !x,
              children: N.content
            },
            N.id
          );
        })
      ]
    }
  );
}), Yu = un(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...d
  }, c) => {
    const f = [
      "nhsuk-details",
      s
    ].filter(Boolean).join(" "), h = t ? /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let p;
    return l ? p = l : a ? p = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (p = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: f,
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: h }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
Yu.displayName = "Details";
const Vu = un(
  ({
    title: e,
    type: t,
    items: n,
    hidePrefix: a = !1,
    headingLevel: o = 3,
    className: s,
    ...i
  }, l) => {
    const d = ["nhsuk-do-dont-list"];
    s && d.push(s);
    const c = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], f = () => t === "cross" ? /* @__PURE__ */ r.jsxs(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__cross",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        width: "34",
        height: "34",
        children: [
          /* @__PURE__ */ r.jsx(
            "path",
            {
              d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z",
              fill: "#d5281b"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "path",
            {
              d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z",
              fill: "#d5281b"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ r.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__tick",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        width: "34",
        height: "34",
        children: /* @__PURE__ */ r.jsx(
          "path",
          {
            strokeWidth: "4",
            strokeLinecap: "round",
            d: "M18.4 7.8l-8.5 8.4L5.6 12",
            stroke: "#007f3b"
          }
        )
      }
    ), h = (g) => t === "cross" && !a ? `do not ${g}` : g, p = () => /* @__PURE__ */ r.jsx(
      $t,
      {
        level: o,
        className: "nhsuk-do-dont-list__label",
        text: e
      }
    );
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: l,
        className: d.join(" "),
        ...i,
        children: [
          p(),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: c.join(" "), role: "list", children: n.map((g, M) => /* @__PURE__ */ r.jsxs("li", { children: [
            f(),
            h(g.item)
          ] }, M)) }) })
        ]
      }
    );
  }
);
Vu.displayName = "DoDontList";
const qu = un(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...d
  }, c) => {
    const f = [
      "nhsuk-expander",
      s
    ].filter(Boolean).join(" "), h = t ? /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let p;
    return l ? p = l : a ? p = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (p = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: f,
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", children: h }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
qu.displayName = "Expander";
const Ku = un(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, f = `${t}-${c}-hint`, h = `${t}-${c}-status`, p = !!l.href, g = [
        "nhsuk-task-list__item",
        p && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), M = [
        l.hint && f,
        h
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        Xu,
        {
          item: l,
          itemClasses: g,
          hasLink: p,
          hintId: f,
          statusId: h,
          ariaDescribedBy: M
        },
        d
      );
    };
    return /* @__PURE__ */ r.jsx(
      "ul",
      {
        ref: o,
        className: s,
        ...a,
        children: e.map(i)
      }
    );
  }
), Xu = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const c = e.title.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, f = [
      n ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return n ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: f,
        href: e.href,
        "aria-describedby": s,
        children: c
      }
    ) : /* @__PURE__ */ r.jsx("div", { className: e.title.classes || "", children: c });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ r.jsx(
    "div",
    {
      id: a,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ r.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, d = () => {
    const c = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let f;
    return e.status.tag ? f = /* @__PURE__ */ r.jsx(Qe, { ...e.status.tag }) : e.status.html ? f = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : f = e.status.text, /* @__PURE__ */ r.jsx("div", { className: c, id: o, children: f });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    d()
  ] });
};
Ku.displayName = "TaskList";
const yx = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: a,
  children: o,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), d = () => o || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n ? /* @__PURE__ */ r.jsx("p", { children: n }) : null), c = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), f = `h${t}`;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: c,
      ...i,
      children: [
        wo(
          f,
          { className: "nhsuk-warning-callout__label" },
          l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            e,
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" })
          ] }) : /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Important: " }),
            e
          ] })
        ),
        d()
      ]
    }
  );
}, vx = ({
  src: e,
  alt: t,
  caption: n,
  sizes: a,
  srcset: o,
  className: s,
  ...i
}) => {
  const l = [
    "nhsuk-image",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      className: l,
      ...i,
      children: [
        /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-image__img",
            src: e,
            alt: t,
            ...a && o ? { sizes: a, srcSet: o } : {}
          }
        ),
        n && /* @__PURE__ */ r.jsx(
          "figcaption",
          {
            className: "nhsuk-image__caption",
            dangerouslySetInnerHTML: { __html: n }
          }
        )
      ]
    }
  );
}, Zu = ({
  dateRange: e,
  onPrev: t,
  onNext: n,
  onToday: a,
  density: o,
  onDensityChange: s,
  a11yMode: i,
  onA11yModeChange: l
}) => /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar", role: "group", "aria-label": "Slot matrix controls", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx(et, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ r.jsx(et, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ r.jsx(et, { variant: "secondary", size: "small", onClick: n, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ r.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ r.jsx(
      zn,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: o,
        onChange: (d) => s?.(d.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ r.jsx(
      zn,
      {
        id: "slot-matrix-mode-select",
        name: "slot-matrix-mode",
        ariaLabel: "Change accessibility mode",
        value: i,
        onChange: (d) => l?.(d.target.value),
        options: [
          { value: "grid", text: "Grid" },
          { value: "list", text: "List" }
        ]
      }
    )
  ] })
] }), Ju = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(Qe, { color: Qu(n.status), text: n.label }) }, n.status)) });
function Qu(e) {
  switch (e) {
    case "available":
      return "green";
    case "full":
      return "grey";
    case "overbook":
      return "orange";
    case "held":
      return "yellow";
    // 'blocked' not mapped directly; choose grey as neutral representation
    case "blocked":
      return "grey";
    default:
      return "default";
  }
}
const wx = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: n,
  defaultValue: a,
  onChange: o,
  selectionMode: s = "single",
  a11yMode: i,
  className: l,
  style: d,
  getSlotAriaLabel: c,
  toolbar: f,
  enableDefaultToolbar: h = !0,
  legendItems: p,
  enableDefaultLegend: g = !0,
  legendPlacement: M = "bottom",
  onA11yModeChange: m
}) => {
  const [u, E] = Me("grid"), P = i || u, [j, _] = Me(a || []), B = n ?? j, S = De(() => {
    const D = /* @__PURE__ */ new Set();
    return e.forEach(($) => D.add(new Date($.start).getTime())), Array.from(D).sort(($, y) => $ - y);
  }, [e]), L = De(() => {
    const D = {};
    return e.forEach(($) => {
      const y = new Date($.start).getTime();
      D[y] || (D[y] = {});
      const H = $.capacity - $.booked - ($.held || 0);
      D[y][$.sessionId] = { slot: $, remaining: H };
    }), D;
  }, [e]), T = fe((D) => {
    if (s === "single") {
      const $ = [D.id];
      n || _($), o?.($, { lastAction: "select" });
    } else {
      const $ = B.includes(D.id), y = $ ? B.filter((H) => H !== D.id) : [...B, D.id];
      n || _(y), o?.(y, { lastAction: $ ? "deselect" : "select" });
    }
  }, [s, B, n, o]), C = De(() => p || (g ? Array.from(new Set(e.map(($) => $.status))).map(($) => ({
    status: $,
    label: $.charAt(0).toUpperCase() + $.slice(1)
  })) : void 0), [p, g, e]), N = C ? /* @__PURE__ */ r.jsx(
    Ju,
    {
      items: C,
      orientation: M === "left" || M === "right" ? "vertical" : "horizontal"
    }
  ) : null, x = (D) => {
    i || E(D), m?.(D);
  }, v = f || (h ? /* @__PURE__ */ r.jsx(
    Zu,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: P,
      onA11yModeChange: x
    }
  ) : null), R = /* @__PURE__ */ r.jsx("div", { style: d, className: ge(l), children: /* @__PURE__ */ r.jsx(ca, { className: ge("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Gt, { children: /* @__PURE__ */ r.jsx(vn, { width: "full", children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    v,
    M === "top" && N,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((D) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => T(D), "aria-pressed": B.includes(D.id), children: [
      yn(new Date(D.start)),
      " – ",
      yn(new Date(D.end)),
      " (",
      D.status,
      ")"
    ] }) }, D.id)) }),
    M === "bottom" && N
  ] }) }) }) }) });
  return P === "list" ? R : /* @__PURE__ */ r.jsx("div", { style: d, className: ge(l), children: /* @__PURE__ */ r.jsx(ca, { className: ge("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Gt, { children: /* @__PURE__ */ r.jsx(vn, { width: "full", children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    v,
    M === "top" && N,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": S.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((D) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${D.specialty}`, className: "nhs-slot-matrix__session-header", children: D.specialty }, D.id))
      ] }),
      S.map((D) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": yn(new Date(D)), children: yn(new Date(D)) }),
        t.map(($) => {
          const y = L[D]?.[$.id];
          if (!y)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, $.id);
          const { slot: H, remaining: Q } = y, b = B.includes(H.id), w = c ? c(H) : `Slot ${yn(new Date(H.start))} ${H.status}${Q === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": H.status,
              className: ge("nhs-slot-matrix__cell", b && "nhs-slot-matrix__cell--selected"),
              "aria-label": w,
              "aria-selected": b || void 0,
              onClick: () => T(H),
              children: Q > 0 ? `${Q} left` : "Full"
            },
            H.id
          );
        })
      ] }, D))
    ] }),
    M === "bottom" && N
  ] }) }) }) }) });
};
function no(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function yn(e) {
  return `${no(e.getHours())}:${no(e.getMinutes())}`;
}
const ef = ({
  title: e,
  value: t,
  subtitle: n,
  variant: a = "default",
  href: o,
  className: s = "",
  ariaLabel: i,
  ...l
}) => {
  const d = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    s
  ].filter(Boolean).join(" "), c = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx($t, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    n && /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: n })
  ] });
  return o ? /* @__PURE__ */ r.jsx(
    "a",
    {
      className: `${d} nhs-fdp-summary-card--clickable`,
      href: o,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: c
    }
  ) : /* @__PURE__ */ r.jsx(
    "div",
    {
      className: d,
      "aria-label": i,
      ...l,
      children: c
    }
  );
}, _x = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(ca, { children: /* @__PURE__ */ r.jsx(Gt, { children: e.map((o, s) => /* @__PURE__ */ r.jsx(
    vn,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ r.jsx(ef, { ...o })
    },
    s
  )) }) }) });
}, tf = at.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: a,
    selectedRowIndex: o,
    onRowSelect: s,
    id: i,
    testId: l,
    ariaLabel: d,
    ariaLabelledby: c,
    ariaDescribedby: f,
    className: h,
    tableClassName: p,
    bordered: g = !1,
    striped: M = !1,
    responsive: m = !1,
    tableType: u = "default"
  }, E) => {
    const P = Le(null), j = Le(null), _ = Le(null);
    at.useImperativeHandle(E, () => P.current, []);
    const [B, S] = Me(0), [L, T] = Me(0), [C, N] = Me("headers"), [x, v] = Me("browse"), R = t.length, D = e.length, $ = De(() => !n || n.length === 0 ? e : [...e].sort((k, O) => {
      for (const { key: I, direction: J } of n) {
        const ue = k[I], ce = O[I];
        if (ue == null && ce == null) continue;
        if (ue == null) return 1;
        if (ce == null) return -1;
        let Z = 0;
        if (typeof ue == "number" && typeof ce == "number" ? Z = ue - ce : Z = String(ue).localeCompare(String(ce)), Z !== 0)
          return J === "asc" ? Z : -Z;
      }
      return 0;
    }), [e, n]), y = fe((k, O) => {
      setTimeout(() => {
        const I = P.current?.querySelector(
          `tbody tr:nth-child(${k + 1}) td:nth-child(${O + 1})`
        );
        I && (I.focus(), typeof I.scrollIntoView == "function" && I.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), H = fe((k) => {
      setTimeout(() => {
        const O = P.current?.querySelector(`th:nth-child(${k + 1})`);
        O && (O.focus(), typeof O.scrollIntoView == "function" && O.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Q = fe((k) => {
      a?.(k);
    }, [a]), b = fe((k) => {
      s?.(k);
    }, [s]), w = fe((k) => {
      const { key: O } = k;
      switch (O) {
        case "Enter":
          if (k.preventDefault(), C === "headers" && x === "browse")
            v("navigate"), H(L);
          else if (C === "headers" && x === "navigate") {
            const I = t[L];
            I && Q(I.key);
          } else C === "cells" && x === "browse" ? (v("navigate"), y(B, L)) : C === "cells" && x === "navigate" && b(B);
          break;
        case "Escape":
          k.preventDefault(), (C === "headers" && x === "navigate" || C === "cells" && x === "navigate") && v("browse");
          break;
        case "ArrowLeft":
          if (k.preventDefault(), x === "navigate" || x === "browse" && C === "headers") {
            if (C === "headers") {
              const I = Math.max(0, L - 1);
              T(I), H(I);
            } else if (C === "cells") {
              const I = Math.max(0, L - 1);
              T(I), y(B, I);
            }
          }
          break;
        case "ArrowRight":
          if (k.preventDefault(), x === "navigate" || x === "browse" && C === "headers") {
            if (C === "headers") {
              const I = Math.min(R - 1, L + 1);
              T(I), H(I);
            } else if (C === "cells") {
              const I = Math.min(R - 1, L + 1);
              T(I), y(B, I);
            }
          }
          break;
        case "ArrowUp":
          if (k.preventDefault(), C === "cells") {
            if (x === "browse") {
              const I = Math.max(0, B - 1);
              S(I), y(I, 0), T(0);
            } else if (x === "navigate")
              if (B > 0) {
                const I = B - 1;
                S(I), y(I, L);
              } else
                N("headers"), v("browse"), H(L);
          }
          break;
        case "ArrowDown":
          if (k.preventDefault(), C === "headers" && x === "browse")
            N("cells"), S(0), T(0), y(0, 0);
          else if (C === "cells") {
            const I = D - 1;
            if (x === "browse") {
              const J = Math.min(I, B + 1);
              S(J), y(J, 0), T(0);
            } else if (x === "navigate" && B < I) {
              const J = B + 1;
              S(J), y(J, L);
            }
          }
          break;
        case "Home":
          k.preventDefault(), C === "headers" ? (T(0), H(0)) : C === "cells" && (k.ctrlKey ? (S(0), T(0), y(0, 0)) : (T(0), y(B, 0)));
          break;
        case "End":
          if (k.preventDefault(), C === "headers") {
            const I = R - 1;
            T(I), H(I);
          } else if (C === "cells")
            if (k.ctrlKey) {
              const I = D - 1, J = R - 1;
              S(I), T(J), y(I, J);
            } else {
              const I = R - 1;
              T(I), y(B, I);
            }
          break;
        case " ":
          if (k.preventDefault(), C === "headers" && x === "navigate") {
            const I = t[L];
            I && Q(I.key);
          } else C === "cells" && x === "navigate" && b(B);
          break;
      }
    }, [
      C,
      x,
      L,
      B,
      R,
      D,
      t,
      y,
      H,
      Q,
      b
    ]);
    Ae(() => {
      const k = P.current;
      if (k)
        return k.addEventListener("keydown", w), () => k.removeEventListener("keydown", w);
    }, [w]);
    const A = ge(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": m,
        "nhsuk-table--bordered": g,
        "nhsuk-table--striped": M,
        "nhsuk-table--compact": u === "compact"
      },
      h
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: P,
        className: A,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": f,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: j, role: "row", children: t.map((k, O) => {
            const I = n?.find((ce) => ce.key === k.key), J = !!I, ue = C === "headers" && L === O;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: ge("sortable-header", {
                  "sortable-header--focused": ue
                }),
                role: "columnheader",
                tabIndex: ue ? 0 : -1,
                onClick: () => Q(k.key),
                onKeyDown: (ce) => {
                  (ce.key === "Enter" || ce.key === " ") && (ce.preventDefault(), Q(k.key));
                },
                "aria-sort": J ? I?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: k.label }),
                  J && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((ce) => ce.key === k.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: I?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              k.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: _, className: "nhsuk-table__body", role: "rowgroup", children: $.map((k, O) => {
            const I = o === O, J = C === "cells" && B === O;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: ge("data-row", {
                  "data-row--selected": I,
                  "data-row--focused": J
                }),
                "aria-selected": I,
                children: t.map((ue, ce) => {
                  const Z = ue.tableRenderer ? ue.tableRenderer(k) : ue.render ? ue.render(k) : k[ue.key], G = C === "cells" && B === O && L === ce, W = () => typeof Z == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: Z ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: Z ? "Yes" : "No" })
                  ] }) : String(Z ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ge("data-cell", {
                        "data-cell--focused": G
                      }),
                      tabIndex: G ? 0 : -1,
                      onClick: () => b(O),
                      children: W()
                    },
                    ue.key
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
tf.displayName = "AriaDataGrid";
const Qo = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: a = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: d = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: f
}) => {
  const h = Le(null), p = Le(null), g = Le(null), M = fe((C, N) => {
    d || (p.current = N, C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("text/plain", N));
  }, [d]), m = fe((C, N) => {
    d || p.current === N || (C.preventDefault(), C.dataTransfer.dropEffect = "move", g.current = N);
  }, [d]), u = fe((C, N) => {
    if (d) return;
    C.preventDefault();
    const x = p.current;
    if (!x || x === N) return;
    const v = e.findIndex((D) => D.key === x), R = e.findIndex((D) => D.key === N);
    if (v !== -1 && R !== -1) {
      const D = [...e], [$] = D.splice(v, 1);
      D.splice(R, 0, $), n(D);
    }
    p.current = null, g.current = null;
  }, [d, e, n]), E = fe(() => {
    p.current = null, g.current = null;
  }, []), P = fe((C) => {
    const N = t.find((x) => x.key === C);
    return N ? N.label : C;
  }, [t]), j = fe((C) => ["red", "orange", "blue", "aqua-green", "grey"][C] || "grey", []), _ = fe((C) => {
    if (d) return;
    const N = e.map(
      (x) => x.key === C ? { ...x, direction: x.direction === "asc" ? "desc" : "asc" } : x
    );
    n(N);
  }, [e, n, d]), B = fe((C) => {
    if (d) return;
    const N = e.filter((x) => x.key !== C);
    n(N);
  }, [e, n, d]), S = fe(() => {
    d || n([]);
  }, [n, d]), L = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const C = e.map((N, x) => {
      const v = N.direction === "asc" ? "ascending" : "descending";
      return `${x + 1}. ${P(N.key)} (${v})`;
    });
    if (C.length === 1)
      return `Sorted by: ${C[0]}`;
    if (C.length === 2)
      return `Sorted by: ${C.join(" and ")}`;
    {
      const N = C.pop();
      return `Sorted by: ${C.join(", ")}, and ${N}`;
    }
  }, T = De(() => {
    const C = ["sort-description"];
    return l && C.push("sort-help"), f && C.push(f), C.join(" ");
  }, [l, f]);
  return e.length === 0 ? /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${a}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description",
        id: "sort-description",
        "aria-live": "polite",
        children: o
      }
    ),
    l && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${a}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: L()
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: h,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": c,
          "aria-describedby": T,
          children: e.map((C, N) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (x) => M(x, C.key),
              onDragOver: (x) => m(x, C.key),
              onDrop: (x) => u(x, C.key),
              onDragEnd: E,
              onClick: () => _(C.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${C.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": C.key,
              children: /* @__PURE__ */ r.jsx(
                Qe,
                {
                  color: j(N),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => B(C.key),
                  disabled: d,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${N + 1}`, children: N + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: P(C.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (x) => {
                          x.stopPropagation(), _(C.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${P(C.key)}. Currently ${C.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ r.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${C.direction}`, children: /* @__PURE__ */ r.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${C.direction}`,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            focusable: "false",
                            children: /* @__PURE__ */ r.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
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
      i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
        et,
        {
          variant: "secondary",
          onClick: S,
          disabled: d,
          "aria-label": "Reset all sorting",
          className: "sort-status-control__reset-button",
          children: "Clear All Sorts"
        }
      ) })
    ] }),
    l && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function nf(e, t) {
  switch (t.type) {
    case "SET_SELECTED_INDEX":
      return { ...e, selectedIndex: t.payload };
    case "SET_TAB_LOADING":
      const n = [...e.tabLoadingStates];
      return n[t.payload.tabIndex] = t.payload.isLoading, { ...e, tabLoadingStates: n };
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
      const { newLength: s } = t.payload, i = new Array(s).fill(!1), l = new Array(s).fill(null), d = new Array(s).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, s); c++)
        i[c] = e.tabLoadingStates[c], l[c] = e.tabErrors[c], d[c] = e.selectedRows[c];
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
const ma = un(function(t, n) {
  const {
    dataConfig: a = {},
    tabPanels: o,
    selectedIndex: s,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: d,
    ariaDescription: c,
    className: f = "",
    disabled: h = !1,
    orientation: p = "horizontal",
    id: g,
    isLoading: M = !1,
    loadingComponent: m,
    error: u = null,
    errorComponent: E,
    "data-testid": P,
    actions: j,
    actionsMinGap: _ = 16,
    forceActionsAbove: B = !1
  } = t, L = Le(
    g || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, T = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), C = `${L}-description`, N = `${L}-navigation-help`, {
    dataComparator: x = (F, V) => JSON.stringify(F) === JSON.stringify(V),
    filterFunction: v = (F) => F,
    booleanRenderer: R = (F) => F ? "✓" : "✗"
  } = a || {}, D = s !== void 0, $ = s ?? 0, [y, H] = Me({
    focusArea: "tabs",
    focusedTabIndex: $,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), Q = De(() => ({
    selectedIndex: $,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [$]), [b, w] = So(nf, Q);
  Ae(() => {
    const F = b.tabLoadingStates.length, V = o.length;
    F !== V && w({ type: "ADJUST_ARRAYS", payload: { newLength: V } });
  }, [o.length]), Ae(() => {
    D && w({ type: "SET_SELECTED_INDEX", payload: $ });
  }, [$, D]), Ae(() => {
    H((F) => ({
      ...F,
      focusArea: "tabs",
      focusedTabIndex: b.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [b.selectedIndex]), Ae(() => {
    l && l(b.globalSelectedRowData);
  }, [b.globalSelectedRowData, l]);
  const A = fe(
    (F, V) => x(F, V),
    [x]
  ), k = fe(
    (F) => {
      F >= 0 && F < o.length && !o[F].disabled && (w({ type: "SET_SELECTED_INDEX", payload: F }), H((V) => ({
        ...V,
        focusedTabIndex: F,
        focusArea: "tabs"
      })), i?.(F));
    },
    [o, i]
  ), O = Le(!1), I = fe(
    (F, V) => {
      if (!V?.force && !O.current && F === 0) {
        O.current = !0;
        return;
      }
      O.current = !0, setTimeout(() => {
        const ae = J.current[F], ne = ae?.parentElement;
        if (ae && ne) {
          const K = ae.offsetLeft, se = ae.offsetWidth, ye = ne.clientWidth, ve = K - ye / 2 + se / 2;
          try {
            ne.scrollTo({
              left: Math.max(0, ve),
              behavior: "smooth"
            });
          } catch {
            ae.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!ae,
          tabListElementExists: !!ne
        });
      }, 50);
    },
    []
  ), J = Le([]), ue = Le([]), ce = fe(
    (F, V) => {
      const ae = b.sortConfig || [], ne = ae.find(
        (ye) => ye.key === V
      );
      let K;
      ne ? ne.direction === "asc" ? K = ae.map(
        (ye) => ye.key === V ? { ...ye, direction: "desc" } : ye
      ) : K = ae.filter(
        (ye) => ye.key !== V
      ) : K = [...ae, { key: V, direction: "asc" }], w({
        type: "SET_SORT",
        payload: K
      }), o[F].onSort?.(V);
    },
    [b.sortConfig, o]
  ), Z = fe(
    (F) => {
      setTimeout(() => {
        const V = document.querySelector(
          `[data-tab-panel="${b.selectedIndex}"] th:nth-child(${F + 1})`
        );
        V && V.focus();
      }, 0);
    },
    [b.selectedIndex]
  ), G = fe(
    (F) => R(F),
    [R]
  ), W = fe(
    (F, V) => {
      setTimeout(() => {
        const ae = document.querySelector(
          `[data-tab-panel="${b.selectedIndex}"] tbody tr:nth-child(${F + 1}) td:nth-child(${V + 1})`
        );
        ae && ae.focus();
      }, 0);
    },
    [b.selectedIndex]
  );
  Ae(() => {
    y.isGridActive && (y.focusArea === "headers" ? setTimeout(() => {
      Z(y.focusedHeaderIndex);
    }, 0) : y.focusArea === "cells" && setTimeout(() => {
      W(
        y.focusedRowIndex,
        y.focusedColumnIndex
      );
    }, 0));
  }, [
    y.focusArea,
    y.isGridActive,
    y.focusedHeaderIndex,
    y.focusedRowIndex,
    y.focusedColumnIndex,
    Z,
    W
  ]), Ae(() => {
    I(b.selectedIndex);
  }, [b.selectedIndex, I]);
  const re = fe(
    (F, V) => {
      const { key: ae } = F, ne = o[b.selectedIndex], K = ne?.columns.length || 0;
      switch (ae) {
        case "ArrowLeft":
          F.preventDefault();
          const se = Math.max(0, V - 1);
          H((Se) => ({
            ...Se,
            focusedHeaderIndex: se
          })), Z(se);
          break;
        case "ArrowRight":
          F.preventDefault();
          const ye = Math.min(K - 1, V + 1);
          H((Se) => ({
            ...Se,
            focusedHeaderIndex: ye
          })), Z(ye);
          break;
        case "ArrowUp":
          F.preventDefault(), H((Se) => ({
            ...Se,
            focusArea: "tabs",
            focusedTabIndex: b.selectedIndex
          })), I(b.selectedIndex), J.current[b.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          F.preventDefault(), H((Se) => ({
            ...Se,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: V,
            isGridActive: !0
          }));
          break;
        case "Home":
          F.preventDefault(), H((Se) => ({ ...Se, focusedHeaderIndex: 0 })), Z(0);
          break;
        case "End":
          F.preventDefault();
          const ve = K - 1;
          H((Se) => ({
            ...Se,
            focusedHeaderIndex: ve
          })), Z(ve);
          break;
        case "Enter":
        case " ":
          F.preventDefault();
          const ke = ne?.columns[V]?.key;
          ke && ce(b.selectedIndex, ke);
          break;
      }
    },
    [
      o,
      b.selectedIndex,
      ce,
      H,
      Z,
      W,
      J
    ]
  ), z = fe(
    (F, V, ae) => {
      const { key: ne } = F, K = o[b.selectedIndex], se = K?.data.length || 0, ye = K?.columns.length || 0;
      switch (ne) {
        case "ArrowUp":
          if (F.preventDefault(), V === 0)
            H((pe) => ({
              ...pe,
              focusArea: "headers",
              focusedHeaderIndex: ae,
              isGridActive: !1
            })), Z(ae);
          else {
            const pe = V - 1;
            H(($e) => ({
              ...$e,
              focusedRowIndex: pe
            })), W(pe, ae);
          }
          break;
        case "ArrowDown":
          F.preventDefault();
          const ve = Math.min(se - 1, V + 1);
          H((pe) => ({
            ...pe,
            focusedRowIndex: ve
          })), W(ve, ae);
          break;
        case "ArrowLeft":
          F.preventDefault();
          const ke = Math.max(0, ae - 1);
          H((pe) => ({
            ...pe,
            focusedColumnIndex: ke
          })), W(V, ke);
          break;
        case "ArrowRight":
          F.preventDefault();
          const Se = Math.min(ye - 1, ae + 1);
          H((pe) => ({
            ...pe,
            focusedColumnIndex: Se
          })), W(V, Se);
          break;
        case "Home":
          F.preventDefault(), F.ctrlKey ? (H((pe) => ({
            ...pe,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), W(0, 0)) : (H((pe) => ({ ...pe, focusedColumnIndex: 0 })), W(V, 0));
          break;
        case "End":
          if (F.preventDefault(), F.ctrlKey) {
            const pe = se - 1, $e = ye - 1;
            H((Be) => ({
              ...Be,
              focusedRowIndex: pe,
              focusedColumnIndex: $e
            })), W(pe, $e);
          } else {
            const pe = ye - 1;
            H(($e) => ({
              ...$e,
              focusedColumnIndex: pe
            })), W(V, pe);
          }
          break;
        case "Enter":
        case " ":
          if (F.preventDefault(), K && K.data[V]) {
            const pe = K.data.some(
              (Oe) => "ews_data" in Oe
            ) ? v(K.data, b.filters) : K.data, $e = b.sortConfig;
            let Be = pe;
            if ($e && $e.length > 0 && (Be = [...pe].sort((Oe, Ee) => {
              for (const { key: tt, direction: It } of $e) {
                let mt = Oe[tt], ct = Ee[tt];
                const Ue = K.columns.find(
                  (fn) => fn.key === tt
                );
                if (Ue?.tableRenderer ? (mt = Ue.tableRenderer(Oe), ct = Ue.tableRenderer(Ee)) : Ue?.render && (mt = Ue.render(Oe), ct = Ue.render(Ee)), mt == null && ct == null) continue;
                if (mt == null) return It === "asc" ? -1 : 1;
                if (ct == null) return It === "asc" ? 1 : -1;
                let Ve = 0;
                if (typeof mt == "number" && typeof ct == "number" ? Ve = mt - ct : Ve = String(mt).localeCompare(
                  String(ct),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Ve !== 0)
                  return It === "asc" ? Ve : -Ve;
              }
              return 0;
            })), Be[V]) {
              const Oe = Be[V], tt = b.globalSelectedRowData && A(b.globalSelectedRowData, Oe) ? null : Oe;
              w({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: tt
              });
            }
          }
          break;
      }
    },
    [
      o,
      b.selectedIndex,
      b.filters,
      b.sortConfig,
      v,
      A,
      w,
      H,
      Z,
      W
    ]
  ), oe = fe(
    (F, V) => v(F, V),
    [v]
  );
  if (_o(
    n,
    () => ({
      selectTab: (F) => {
        F >= 0 && F < o.length && (w({ type: "SET_SELECTED_INDEX", payload: F }), i?.(F));
      },
      refreshData: (F) => {
        console.log("Refreshing data for tab:", F ?? "all");
      },
      exportData: (F) => {
        const V = F ?? b.selectedIndex, ae = o[V];
        return ae ? ae.data : [];
      },
      getSelectedRows: (F) => b.globalSelectedRowData ? [] : [],
      clearSelection: (F) => {
        w({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (F) => {
        w({ type: "SET_FILTERS", payload: F });
      }
    }),
    [b.selectedIndex, b.selectedRows, o, i]
  ), M)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${f}`,
        "data-testid": P,
        children: m || /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-spinner",
            role: "status",
            "aria-label": "Loading data",
            children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." })
          }
        ) })
      }
    );
  if (u)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${f}`,
        "data-testid": P,
        children: E || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: u })
        ] })
      }
    );
  const Y = Le(null), ie = Le(null), le = Le(null), [xe, Ce] = Me(!0);
  Ae(() => {
    if (!j) {
      Ce(!1);
      return;
    }
    if (B) {
      Ce(!1);
      return;
    }
    function F() {
      if (!Y.current || !ie.current || !le.current) return;
      const ne = Y.current.clientWidth, K = Array.from(
        ie.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), se = K.reduce((Se, pe) => Se + pe.offsetWidth, 0), ye = le.current.offsetWidth, ve = Math.max(8 * (K.length - 1), 0), ke = se + ve + ye + _ <= ne;
      Ce(ke);
    }
    const V = requestAnimationFrame(() => F()), ae = new ResizeObserver(() => F());
    return Y.current && ae.observe(Y.current), ie.current && ae.observe(ie.current), () => {
      cancelAnimationFrame(V), ae.disconnect();
    };
  }, [j, _, B, o.length]);
  const Ne = le, Te = fe(() => Ne.current ? Array.from(
    Ne.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((F) => !F.hasAttribute("disabled")) : [], []), X = fe(
    (F) => {
      const V = Te();
      if (!V.length) return;
      const ae = Math.max(0, Math.min(F, V.length - 1));
      V[ae].focus(), H((ne) => ({ ...ne, focusArea: "actions", focusedActionIndex: ae }));
    },
    [Te]
  ), q = fe(() => X(0), [X]), te = fe(
    (F, V) => {
      const { key: ae } = F, ne = o.length - 1;
      switch (ae) {
        case "ArrowUp": {
          j && !xe && (F.preventDefault(), q());
          break;
        }
        case "ArrowLeft": {
          F.preventDefault();
          const K = V > 0 ? V - 1 : ne;
          k(K), I(K), J.current[K]?.focus();
          break;
        }
        case "ArrowRight": {
          if (F.preventDefault(), V === ne && j && xe) {
            q();
            return;
          }
          const K = V < ne ? V + 1 : 0;
          k(K), I(K), J.current[K]?.focus();
          break;
        }
        case "ArrowDown": {
          F.preventDefault(), H((K) => ({
            ...K,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          F.preventDefault(), k(0), I(0), J.current[0]?.focus();
          break;
        }
        case "End": {
          F.preventDefault(), k(ne), I(ne), J.current[ne]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          F.preventDefault(), k(V);
          break;
        }
        case "Tab": {
          !F.shiftKey && V === ne && j && xe && q();
          break;
        }
      }
    },
    [o.length, k, I, j, xe, q]
  ), ee = fe((F) => {
    const { key: V } = F, ae = Te();
    if (!ae.length) return;
    const ne = ae.findIndex((K) => K === document.activeElement);
    switch (V) {
      case "ArrowLeft": {
        if (xe)
          if (ne > 0)
            F.preventDefault(), X(ne - 1);
          else {
            F.preventDefault();
            const K = o.length - 1;
            k(K), I(K), J.current[K]?.focus(), H((se) => ({ ...se, focusArea: "tabs", focusedTabIndex: K }));
          }
        break;
      }
      case "ArrowRight": {
        xe && (ne < ae.length - 1 ? (F.preventDefault(), X(ne + 1)) : (F.preventDefault(), k(0), I(0), J.current[0]?.focus(), H((K) => ({ ...K, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (xe)
          F.preventDefault(), H((K) => ({ ...K, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          F.preventDefault();
          const K = b.selectedIndex;
          J.current[K]?.focus(), H((se) => ({ ...se, focusArea: "tabs", focusedTabIndex: K }));
        }
        break;
      }
    }
  }, [Te, xe, X, o.length, k, I, b.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${p} ${f}`,
      id: g,
      "data-testid": P,
      ref: Y,
      children: [
        c && !T && /* @__PURE__ */ r.jsx("div", { id: C, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: N,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          Qo,
          {
            sortConfig: b.sortConfig || [],
            columns: o.flatMap(
              (F) => F.columns.map((V) => ({ key: V.key, label: V.label }))
            ).filter(
              (F, V, ae) => ae.findIndex((ne) => ne.key === F.key) === V
              // Remove duplicates
            ),
            onSortChange: (F) => {
              w({ type: "SET_SORT", payload: F });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        j && !xe && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: le,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: ee,
            children: j
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${xe ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? T ? c : C : N,
              "aria-orientation": p,
              className: "aria-tabs-datagrid__tabs",
              ref: ie,
              children: o.map((F, V) => {
                const ae = V === b.selectedIndex, ne = F.disabled || h;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${F.id}`,
                    "aria-controls": `panel-${F.id}`,
                    "aria-selected": ae,
                    "aria-disabled": ne,
                    tabIndex: ae ? 0 : -1,
                    ref: (K) => {
                      J.current[V] = K;
                    },
                    onClick: () => k(V),
                    onKeyDown: (K) => te(K, V),
                    disabled: ne,
                    className: [
                      "aria-tabs-datagrid__tab",
                      ae ? "aria-tabs-datagrid__tab--selected" : "",
                      ne ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: F.label }),
                      b.tabLoadingStates[V] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      b.tabErrors[V] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  F.id
                );
              })
            }
          ),
          j && xe && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: le,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: ee,
              children: j
            }
          )
        ] }),
        o.map((F, V) => {
          const ae = V === b.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${F.id}`,
              "aria-labelledby": `tab-${F.id}`,
              tabIndex: 0,
              hidden: !ae,
              ref: (ne) => {
                ue.current[V] = ne;
              },
              className: `aria-tabs-datagrid__panel ${F.className || ""}`,
              "data-tab-panel": V,
              children: ae && (() => {
                const ne = F.data.some(
                  (se) => "ews_data" in se
                ) ? oe(F.data, b.filters) : F.data, K = De(() => {
                  const se = b.sortConfig;
                  return !se || se.length === 0 ? ne : [...ne].sort((ye, ve) => {
                    for (const { key: ke, direction: Se } of se) {
                      let pe = ye[ke], $e = ve[ke];
                      const Be = F.columns.find(
                        (Ee) => Ee.key === ke
                      );
                      if (Be?.tableRenderer ? (pe = Be.tableRenderer(ye), $e = Be.tableRenderer(ve)) : Be?.render && (pe = Be.render(ye), $e = Be.render(ve)), pe == null && $e == null) continue;
                      if (pe == null) return 1;
                      if ($e == null) return -1;
                      let Oe = 0;
                      if (typeof pe == "number" && typeof $e == "number" ? Oe = pe - $e : typeof pe == "boolean" && typeof $e == "boolean" ? Oe = pe === $e ? 0 : pe ? 1 : -1 : Oe = String(pe).localeCompare(
                        String($e),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Oe !== 0)
                        return Se === "asc" ? Oe : -Oe;
                    }
                    return 0;
                  });
                }, [ne, b.sortConfig, F.columns]);
                return /* @__PURE__ */ r.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": F.ariaLabel,
                    "aria-describedby": F.ariaDescription ? `panel-${F.id}-description` : void 0,
                    children: [
                      F.ariaDescription && /* @__PURE__ */ r.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${F.id}-description`,
                          children: F.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: F.columns.map((se, ye) => {
                        const ve = b.sortConfig?.find(
                          (pe) => pe.key === se.key
                        ), ke = !!ve, Se = y.focusArea === "headers" && y.focusedHeaderIndex === ye;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${Se ? "sortable-header--focused" : ""} ${ke ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Se ? 0 : -1,
                            onClick: () => ce(V, se.key),
                            onKeyDown: (pe) => re(pe, ye),
                            "aria-sort": ke ? ve?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: se.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ke ? `sort-indicator--${ve?.direction}` : ""}`,
                                  children: [
                                    b.sortConfig && b.sortConfig.length > 0 && b.sortConfig.findIndex(
                                      (pe) => pe.key === se.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${b.sortConfig.findIndex((pe) => pe.key === se.key) + 1}`,
                                        "data-priority": b.sortConfig.findIndex(
                                          (pe) => pe.key === se.key
                                        ) + 1,
                                        title: `Sort priority: ${b.sortConfig.findIndex((pe) => pe.key === se.key) + 1}`,
                                        children: b.sortConfig.findIndex(
                                          (pe) => pe.key === se.key
                                        ) + 1
                                      }
                                    ),
                                    ke && /* @__PURE__ */ r.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${ve?.direction}`,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        focusable: "false",
                                        children: /* @__PURE__ */ r.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                                      }
                                    )
                                  ]
                                }
                              )
                            ] })
                          },
                          se.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: K.map((se, ye) => {
                        const ve = b.globalSelectedRowData && A(b.globalSelectedRowData, se), ke = y.focusArea === "cells" && y.focusedRowIndex === ye;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ve ? "data-row--selected" : ""} ${ke ? "data-row--focused" : ""}`,
                            "aria-selected": ve,
                            children: F.columns.map((Se, pe) => {
                              const $e = se[Se.key];
                              let Be;
                              Se.tableRenderer ? Be = Se.tableRenderer(se) : Se.render ? Be = Se.render(se) : Be = $e;
                              const Oe = y.focusArea === "cells" && y.focusedRowIndex === ye && y.focusedColumnIndex === pe, Ee = () => {
                                if (Se.customRenderer) {
                                  const tt = Se.customRenderer(
                                    $e,
                                    se
                                  );
                                  return /* @__PURE__ */ r.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: tt
                                    }
                                  );
                                }
                                return typeof $e == "boolean" && Be === $e ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  G($e),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: $e ? "Yes" : "No" })
                                ] }) : at.isValidElement(Be) || typeof Be != "object" ? Be ?? "" : Be;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Oe ? "data-cell--focused" : ""}`,
                                  tabIndex: Oe ? 0 : -1,
                                  onClick: () => {
                                    const It = b.globalSelectedRowData && A(
                                      b.globalSelectedRowData,
                                      se
                                    ) ? null : se;
                                    w({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: It
                                    });
                                  },
                                  onKeyDown: (tt) => z(tt, ye, pe),
                                  children: Ee()
                                },
                                Se.key
                              );
                            })
                          },
                          ye
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            F.id
          );
        })
      ]
    }
  );
}), Pn = {
  asc: "↑",
  desc: "↓"
}, rf = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Jr(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function af(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function sf(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function of(e, t) {
  const n = t.find((o) => o.id === e), a = af(t);
  return n ? n.priority < a : !1;
}
const Sx = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: c
}) => {
  const f = De(() => rf(e), [e]), h = fe((P) => {
    if (l) return;
    const j = e.map(
      (_) => _.id === P ? { ..._, direction: _.direction === "asc" ? "desc" : "asc" } : _
    );
    t(j);
  }, [e, t, l]), p = fe((P) => {
    if (l) return;
    const j = e.findIndex((B) => B.id === P);
    if (j <= 0) return;
    const _ = [...e];
    [_[j], _[j - 1]] = [_[j - 1], _[j]], t(Jr(_));
  }, [e, t, l]), g = fe((P) => {
    if (l) return;
    const j = e.findIndex((B) => B.id === P);
    if (j >= e.length - 1 || j === -1) return;
    const _ = [...e];
    [_[j], _[j + 1]] = [_[j + 1], _[j]], t(Jr(_));
  }, [e, t, l]), M = fe((P) => {
    if (l) return;
    const j = e.filter((_) => _.id !== P);
    t(Jr(j));
  }, [e, t, l]), m = fe(() => {
    l || t([]);
  }, [t, l]), u = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const P = f.map((j, _) => {
      const B = j.direction === "asc" ? "ascending" : "descending";
      return `${_ + 1}. ${j.label} (${B})`;
    });
    if (P.length === 1)
      return `Sorted by: ${P[0]}`;
    if (P.length === 2)
      return `Sorted by: ${P.join(" and ")}`;
    {
      const j = P.pop();
      return `Sorted by: ${P.join(", ")}, and ${j}`;
    }
  }, E = De(() => {
    const P = ["sort-description"];
    return i && P.push("sort-help"), c && P.push(c), P.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: `sort-status-control sort-status-control--empty ${n}`, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: u()
    }
  ) }) : /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${n}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: u()
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": d,
        "aria-describedby": E,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          f.map((P) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                Qe,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => M(P.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: P.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: P.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => h(P.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${P.label}. Currently ${P.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: P.direction === "asc" ? Pn.asc : Pn.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(P.id),
                          disabled: l || !sf(P.id, e),
                          "aria-label": `Move ${P.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g(P.id),
                          disabled: l || !of(P.id, e),
                          "aria-label": `Move ${P.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            P.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
      et,
      {
        variant: "secondary",
        onClick: m,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsxs("small", { children: [
      "Click ",
      Pn.asc,
      "/",
      Pn.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, os = (e, t) => t.map((n) => ({
  id: n.id,
  label: n.label,
  data: n.filter ? n.filter(e) : e,
  columns: n.columns.map((a) => ({
    key: a.key,
    label: a.label,
    render: a.render,
    customRenderer: a.customRenderer
  })),
  sortConfig: n.sortConfig,
  ariaLabel: n.ariaLabel || `${n.label} Data Grid`,
  ariaDescription: n.ariaDescription || `Data grid showing ${n.label.toLowerCase()}`,
  className: n.className,
  disabled: n.disabled
})), ga = [
  {
    value: !0,
    icon: /* @__PURE__ */ r.jsx("svg", { className: "nhsuk-icon nhsuk-icon__tick", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: /* @__PURE__ */ r.jsx("path", { strokeWidth: "4", strokeLinecap: "round", d: "M18.4 7.8l-8.5 8.4L5.6 12", stroke: "#007f3b" }) })
  },
  {
    value: !1,
    icon: /* @__PURE__ */ r.jsxs("svg", { className: "nhsuk-icon nhsuk-icon__cross", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", width: "100%", height: "34", children: [
      /* @__PURE__ */ r.jsx("path", { d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z", fill: "#d5281b" }),
      /* @__PURE__ */ r.jsx("path", { d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z", fill: "#d5281b" })
    ] })
  }
], lf = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), cf = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, df = (e) => {
  if (typeof e == "boolean") {
    const n = ga.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = ga.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, uf = (e) => `${e.name}-${e.bed_name}`, ff = () => ({
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
}), kx = (e) => {
  const t = ff();
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
      data: e.filter((n) => n.anticipated_discharge_date),
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
}, hf = {
  dataComparator: lf,
  filterFunction: cf,
  booleanRenderer: df,
  getDataId: uf
};
function ro(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: f = "adaptive-card"
  } = n, h = t.find((j) => j.key === a), p = h?.cardRenderer ? h.cardRenderer(e) : h?.render ? h.render(e) : e[a || "name"] || "Untitled", g = () => o.filter((_) => !i.includes(_) && e[_]).slice(0, 3).map((_) => {
    const B = t.find((C) => C.key === _), S = e[_], L = c[_] ? c[_](S, e) : B?.cardRenderer ? B.cardRenderer(e) : B?.render ? B.render(e) : S;
    return `${B?.label || _}: ${L}`;
  }).join(" • "), M = () => s.length === 0 ? null : s.filter((j) => e[j.fieldKey] !== void 0).map((j) => {
    const _ = e[j.fieldKey], B = j.render ? j.render(_, e) : _;
    return `<span class="nhsuk-tag ${pf(j, _)}">${B}</span>`;
  }).join(""), m = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", u = M(), E = g(), P = u ? `${E}${u ? `<div class="adaptive-card__badges">${u}</div>` : ""}` : E;
  return {
    variant: m(),
    heading: String(p),
    descriptionHtml: P,
    className: `adaptive-card ${f}`,
    "aria-label": `Record for ${p}`
  };
}
function pf(e, t) {
  const n = e.className || "adaptive-card__badge";
  if (e.fieldKey === "ews_score" || e.fieldKey.includes("score")) {
    const a = Number(t);
    return a >= 7 ? `${n} nhsuk-tag--red` : a >= 3 ? `${n} nhsuk-tag--yellow` : `${n} nhsuk-tag--green`;
  }
  if (e.fieldKey === "priority") {
    const a = String(t).toLowerCase();
    if (a === "high") return `${n} nhsuk-tag--red`;
    if (a === "medium") return `${n} nhsuk-tag--yellow`;
    if (a === "low") return `${n} nhsuk-tag--green`;
  }
  if (e.fieldKey === "status") {
    const a = String(t).toLowerCase();
    if (a === "urgent" || a === "critical") return `${n} nhsuk-tag--red`;
    if (a === "pending" || a === "warning") return `${n} nhsuk-tag--yellow`;
    if (a === "completed" || a === "success") return `${n} nhsuk-tag--green`;
  }
  switch (e.color) {
    case "primary":
      return `${n} nhsuk-tag--blue`;
    case "secondary":
      return `${n} nhsuk-tag--grey`;
    case "success":
      return `${n} nhsuk-tag--green`;
    case "warning":
      return `${n} nhsuk-tag--yellow`;
    case "danger":
      return `${n} nhsuk-tag--red`;
    default:
      return n;
  }
}
const mf = {
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
}, ei = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, c = e.bed_name, f = e.ews_score, h = e.speciality, p = e.consultant;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${o} healthcare-card--${s}`,
      onClick: () => n?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${d}, Bed ${c}`,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__patient-name", children: i }),
            /* @__PURE__ */ r.jsxs("p", { className: "healthcare-card__age-info", children: [
              /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__label", children: "Age: " }),
              /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__value", children: l })
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f !== void 0 && /* @__PURE__ */ r.jsxs(
            Qe,
            {
              color: xf(ai(f)),
              className: "healthcare-card__alert",
              children: [
                "EWS: ",
                f
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ r.jsxs("dl", { className: "healthcare-card__details", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Ward" }),
            /* @__PURE__ */ r.jsx("dd", { children: d })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Bed" }),
            /* @__PURE__ */ r.jsx("dd", { children: c })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Specialty" }),
            /* @__PURE__ */ r.jsx("dd", { children: h })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ r.jsx("dd", { children: p })
          ] })
        ] }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ r.jsx(
            et,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (g) => {
                g.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ r.jsx(
            et,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (g) => {
                g.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ r.jsx(
            et,
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
}, ti = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        Qe,
        {
          color: bf(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
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
  /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ r.jsxs("dl", { className: "healthcare-card__details", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ r.jsx("dt", { children: "Patient" }),
      /* @__PURE__ */ r.jsx("dd", { children: e.patient_name })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ r.jsx("dt", { children: "Consultant" }),
      /* @__PURE__ */ r.jsx("dd", { children: e.consultant })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ r.jsx("dt", { children: "Location" }),
      /* @__PURE__ */ r.jsx("dd", { children: e.location })
    ] })
  ] }) }),
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
    /* @__PURE__ */ r.jsx(
      et,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      et,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), ni = ({
  data: e,
  onAction: t
}) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--medication healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__medication-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__medication-name", children: e.medication }),
      /* @__PURE__ */ r.jsxs("p", { className: "healthcare-card__dose", children: [
        e.dose,
        " • ",
        e.frequency
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        Qe,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
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
  /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ r.jsxs("dl", { className: "healthcare-card__details", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ r.jsx("dt", { children: "Patient" }),
      /* @__PURE__ */ r.jsx("dd", { children: e.patient_name })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ r.jsx("dt", { children: "Prescriber" }),
      /* @__PURE__ */ r.jsx("dd", { children: e.prescriber })
    ] }),
    e.allergies && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--urgent", children: [
      /* @__PURE__ */ r.jsx("dt", { children: "Allergies" }),
      /* @__PURE__ */ r.jsx("dd", { children: e.allergies })
    ] })
  ] }) }),
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
    /* @__PURE__ */ r.jsx(
      et,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      et,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), ri = ({
  data: e,
  onSelect: t,
  onAction: n,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, d = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, f = e.ews_data?.heart_rate, h = e.ews_data?.avpu;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--vitals healthcare-card--${a}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Vital signs for ${o}, EWS Score ${s}`,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vitals-summary", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__patient-name", children: o }),
            s !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${gf(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: h && /* @__PURE__ */ r.jsxs(
            Qe,
            {
              color: "blue",
              className: "healthcare-card__avpu",
              children: [
                "AVPU: ",
                h.toUpperCase()
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vitals-grid", children: [
          i !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Respiratory Rate" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              i,
              " bpm"
            ] })
          ] }),
          l !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "SpO2" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              l,
              "%"
            ] })
          ] }),
          d !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Temperature" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              d,
              "°C"
            ] })
          ] }),
          c !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-value", children: c })
          ] }),
          f !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Heart Rate" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              f,
              " bpm"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ r.jsx(
            et,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), n?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ r.jsx(
            et,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (p) => {
                p.stopPropagation(), n?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function ai(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function gf(e) {
  return ai(e);
}
function xf(e) {
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
function bf(e) {
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
const yf = [
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
], si = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", vf = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, wf = (e) => si(e) === "high" || e.status === "urgent" ? "primary" : "default", _f = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Sf = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: yf,
  hiddenFields: [],
  getPriority: si,
  getStatus: vf,
  getVariant: wf,
  fieldRenderers: _f,
  classPrefix: "adaptive-card--healthcare"
}, kf = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", o = n.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ r.jsx(
      ei,
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
  appointment: (e, t, n) => {
    const a = n.getStatus?.(e) || "pending", o = a === "urgent" ? "pending" : a;
    return /* @__PURE__ */ r.jsx(
      ti,
      {
        data: e,
        columns: t,
        status: o,
        onSelect: (s) => console.log("Appointment selected:", s),
        onAction: (s, i) => console.log("Appointment action:", s, i)
      }
    );
  },
  medication: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium";
    return /* @__PURE__ */ r.jsx(
      ni,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Medication selected:", o),
        onAction: (o, s) => console.log("Medication action:", o, s)
      }
    );
  },
  vitals: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium";
    return /* @__PURE__ */ r.jsx(
      ri,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, Cf = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, ao = {
  name: "healthcare",
  defaultCardConfig: Sf,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: kf,
  fieldTypes: Cf
};
function so(e) {
  return {
    primaryField: e?.primaryField || "name",
    secondaryFields: e?.secondaryFields || [],
    badges: e?.badgeFields?.map((t) => ({
      fieldKey: t,
      className: "adaptive-card__badge"
    })) || [],
    hiddenFields: e?.hiddenFields || [],
    cardTemplate: e?.cardTemplate ? (t, n, a) => e.cardTemplate(t, n) : void 0,
    classPrefix: "adaptive-card--generic"
  };
}
function oo(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function jf(e, t) {
  switch (t.type) {
    case "SET_SELECTED_INDEX":
      return { ...e, selectedIndex: t.payload };
    case "SET_TAB_LOADING":
      const n = [...e.tabLoadingStates];
      return n[t.payload.tabIndex] = t.payload.isLoading, { ...e, tabLoadingStates: n };
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
      const { newLength: s } = t.payload, i = new Array(s).fill(!1), l = new Array(s).fill(null), d = new Array(s).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, s); c++)
        i[c] = e.tabLoadingStates[c], l[c] = e.tabErrors[c], d[c] = e.selectedRows[c];
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
function Nf(e, t) {
  const [n, a] = Me("cards");
  return Ae(() => {
    if (t) {
      a(t);
      return;
    }
    const o = () => {
      const s = window.innerWidth;
      s < e.mobile ? a("cards") : s < e.desktop ? a("hybrid") : a("table");
    };
    return o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, [e, t]), n;
}
function Tf(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function $f(e, t, n, a) {
  const o = a ? { ...a.defaultCardConfig, ...n } : { ...mf, ...n };
  if (a && a.cardTemplates) {
    const s = Tf(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), ro(e, t, o);
}
const Cx = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: a = {},
  enableAdvancedSorting: o = !1,
  topActions: s,
  bottomActions: i,
  gridActions: l,
  forceGridActionsAbove: d,
  // Standard AriaTabsDataGrid props
  tabPanels: c,
  dataConfig: f,
  selectedIndex: h,
  onTabChange: p,
  ariaLabel: g = "Data grid",
  ariaDescription: M,
  orientation: m = "horizontal",
  id: u,
  disabled: E = !1,
  className: P,
  ...j
}) => {
  const _ = Nf(e, t), B = h !== void 0, S = h ?? 0, L = De(() => {
    if (c.some(
      (q) => q.data && q.data.length > 0 && oo(q.data)
    )) {
      const q = so(n);
      return {
        ...ao.defaultCardConfig,
        ...q
      };
    } else
      return so(n);
  }, [n, c]), T = De(() => c.some(
    (q) => q.data && q.data.length > 0 && oo(q.data)
  ) ? ao : void 0, [c]), C = De(() => ({
    selectedIndex: S,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [S, c.length]), [N, x] = So(jf, C), v = Le([]), R = Le([]), D = Le([]), $ = Le(null), [y, H] = Me({
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
  }), Q = fe((X) => {
    if (!X.current)
      return { columns: 1, rows: 0 };
    const q = X.current, te = q.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (te.length === 0)
      return { columns: 1, rows: 0 };
    const ee = q.offsetWidth, V = te[0].offsetWidth, ae = Math.floor(ee / V) || 1, ne = Math.ceil(te.length / ae);
    return { columns: ae, rows: ne };
  }, []), b = fe((X, q) => ({
    row: Math.floor(X / q),
    col: X % q
  }), []), w = fe((X, q, te) => X * te + q, []), A = fe((X, q, te, ee) => {
    const { row: F, col: V } = b(X, ee);
    let ae = F, ne = V;
    switch (q) {
      case "up":
        ae = Math.max(0, F - 1);
        break;
      case "down":
        ae = Math.min(Math.floor((te - 1) / ee), F + 1);
        break;
      case "left":
        ne = Math.max(0, V - 1);
        break;
      case "right":
        ne = Math.min(ee - 1, V + 1);
        break;
    }
    const K = w(ae, ne, ee);
    return Math.min(K, te - 1);
  }, [b, w]);
  Ae(() => {
    y.isCardNavigationActive && y.focusedCardElementIndex >= 0 && y.cardElements.length > 0 && setTimeout(() => {
      const X = y.cardElements[y.focusedCardElementIndex];
      X && (X.element.focus(), X.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [y.isCardNavigationActive, y.focusedCardElementIndex, y.cardElements.length]), Ae(() => {
    const X = () => {
      if (_ === "cards" && $.current) {
        const { columns: ee, rows: F } = Q($);
        H((V) => ({
          ...V,
          gridColumns: ee,
          gridRows: F
        }));
      }
    }, q = setTimeout(X, 200), te = () => {
      setTimeout(X, 100);
    };
    return window.addEventListener("resize", te), () => {
      clearTimeout(q), window.removeEventListener("resize", te);
    };
  }, [_, c, Q]), Ae(() => {
    const X = N.tabLoadingStates.length, q = c.length;
    X !== q && x({ type: "ADJUST_ARRAYS", payload: { newLength: q } });
  }, [c.length, N.tabLoadingStates.length]), Ae(() => {
    B && h !== N.selectedIndex && x({ type: "SET_SELECTED_INDEX", payload: h });
  }, [B, h, N.selectedIndex]);
  const k = fe((X) => {
    X >= 0 && X < c.length && !c[X].disabled && (x({ type: "SET_SELECTED_INDEX", payload: X }), p?.(X));
  }, [c, p]), O = fe((X) => {
    console.log("Card selected:", X), x({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: X
    });
  }, []), I = fe((X) => {
    const q = R.current[X];
    q && (q.focus(), q.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), J = fe((X) => {
    const q = R.current[X];
    if (!q) return [];
    const te = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), ee = q.querySelectorAll(te);
    return Array.from(ee).map((F, V) => ({
      id: F.id || `card-${X}-element-${V}`,
      element: F,
      label: F.getAttribute("aria-label") || F.textContent?.trim() || F.getAttribute("title") || `Element ${V + 1}`,
      type: F.tagName.toLowerCase() === "button" ? "button" : F.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(F.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), ue = Le(null), ce = fe((X) => {
    const q = ue.current;
    if (!q) return;
    const te = document.createElement("div");
    te.setAttribute("aria-live", "polite"), te.setAttribute("aria-atomic", "true"), te.className = "sr-only", te.textContent = X, q.appendChild(te), setTimeout(() => {
      q.contains(te) && q.removeChild(te);
    }, 1e3);
  }, []), Z = fe((X) => {
    const q = X.filter((ee) => ee.sortable !== !1), te = [
      { value: "", label: "Sort by..." }
    ];
    return q.forEach((ee) => {
      const F = ee.label || ee.key;
      ee.key === "name" ? te.push(
        { value: `${ee.key}-asc`, label: `${F} (A-Z)` },
        { value: `${ee.key}-desc`, label: `${F} (Z-A)` }
      ) : ee.key === "ews_score" || ee.key.includes("score") ? te.push(
        { value: `${ee.key}-desc`, label: `${F} (High-Low)` },
        { value: `${ee.key}-asc`, label: `${F} (Low-High)` }
      ) : ee.key === "age" || ee.key.includes("date") || ee.key.includes("time") ? te.push(
        { value: `${ee.key}-desc`, label: `${F} (Oldest-Youngest)` },
        { value: `${ee.key}-asc`, label: `${F} (Youngest-Oldest)` }
      ) : te.push(
        { value: `${ee.key}-asc`, label: `${F} (A-Z)` },
        { value: `${ee.key}-desc`, label: `${F} (Z-A)` }
      );
    }), te;
  }, []), G = fe((X, q) => q ? [...X].sort((te, ee) => {
    const F = te[q.key], V = ee[q.key];
    if (F == null && V == null) return 0;
    if (F == null) return 1;
    if (V == null) return -1;
    const ae = Number(F), ne = Number(V);
    if (!isNaN(ae) && !isNaN(ne))
      return q.direction === "asc" ? ae - ne : ne - ae;
    const K = String(F).toLowerCase(), se = String(V).toLowerCase(), ye = K.localeCompare(se);
    return q.direction === "asc" ? ye : -ye;
  }) : X, []), W = fe((X) => {
    if (!X) {
      H((K) => ({ ...K, cardSortConfig: null })), ce("Card sorting cleared");
      return;
    }
    const [q, te] = X.split("-"), ee = { key: q, direction: te };
    H((K) => ({ ...K, cardSortConfig: ee }));
    const ae = c[N.selectedIndex]?.columns.find((K) => K.key === q)?.label || q;
    ce(`Cards sorted by ${ae} in ${te === "asc" ? "ascending" : "descending"} order`);
  }, [c, N.selectedIndex, ce]), re = fe((X) => {
    const ee = c[N.selectedIndex]?.columns.find((V) => V.key === X.key)?.label || X.key, F = X.direction === "asc" ? "ascending" : "descending";
    return `${ee} (${F})`;
  }, [c, N.selectedIndex]), z = fe((X) => {
    const q = c[N.selectedIndex];
    if (o) {
      const te = N.sortConfig;
      return !te || te.length === 0 ? X : [...X].sort((ee, F) => {
        for (const { key: V, direction: ae } of te) {
          let ne = ee[V], K = F[V];
          const se = q?.columns.find(($e) => $e.key === V);
          if (se?.cardRenderer ? (ne = se.cardRenderer(ee), K = se.cardRenderer(F)) : se?.render && (ne = se.render(ee), K = se.render(F)), ne == null && K == null) continue;
          if (ne == null) return ae === "asc" ? -1 : 1;
          if (K == null) return ae === "asc" ? 1 : -1;
          const ye = Number(ne), ve = Number(K);
          if (!isNaN(ye) && !isNaN(ve)) {
            const $e = ye - ve;
            if ($e !== 0) return ae === "asc" ? $e : -$e;
            continue;
          }
          const ke = String(ne).toLowerCase(), Se = String(K).toLowerCase(), pe = ke.localeCompare(Se);
          if (pe !== 0) return ae === "asc" ? pe : -pe;
        }
        return 0;
      });
    } else
      return G(X, y.cardSortConfig);
  }, [o, N.sortConfig, y.cardSortConfig, G, c, N.selectedIndex]), oe = fe((X, q) => {
    const te = J(X), ee = te[q];
    if (ee) {
      ee.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const F = `Focused on ${ee.label}, ${ee.type} ${q + 1} of ${te.length} within card`;
      ce(F);
    }
  }, [J, ce]), Y = fe((X) => {
    v.current[X]?.focus();
  }, []), ie = fe(() => {
    const X = D.current[0];
    if (!X) return [];
    const q = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), te = X.querySelectorAll(q);
    return Array.from(te);
  }, []), le = fe((X) => {
    if (X === 0) {
      const q = D.current[0], te = q?.querySelector(".sort-controls-row");
      if (te) {
        te.setAttribute("tabindex", "-1"), te.focus();
        const F = `Sort controls group with ${ie().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        ce(F);
      } else q && q.focus();
    } else {
      const q = ie(), te = X - 1, ee = q[te];
      if (ee) {
        ee.focus();
        const F = ee.tagName.toLowerCase() === "select", V = ee.tagName.toLowerCase() === "button", ae = F ? "dropdown" : V ? "button" : "control", ne = F ? ". Use Space key to open dropdown" : "", K = `${ae} ${te + 1} of ${q.length}${ne}`;
        ce(K);
      }
    }
  }, [ie, ce]), xe = fe((X, q) => {
    const { key: te } = X, ee = c[N.selectedIndex], F = ee?.data.length || 0;
    if (te === "ArrowLeft" && X.shiftKey) {
      X.preventDefault(), X.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (te === "ArrowRight" && X.shiftKey) {
      X.preventDefault(), X.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!y.isCardNavigationActive) {
      switch (te) {
        case "ArrowUp":
          if (X.preventDefault(), q === 0)
            H((K) => ({ ...K, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), le(0);
          else {
            const K = A(q, "up", F, y.gridColumns);
            K !== q && (H((se) => ({ ...se, focusedCardIndex: K })), I(K), ce(`Moved to card ${K + 1} of ${F}`));
          }
          break;
        case "ArrowDown":
          X.preventDefault();
          const V = A(q, "down", F, y.gridColumns);
          V !== q && (H((K) => ({ ...K, focusedCardIndex: V })), I(V), ce(`Moved to card ${V + 1} of ${F}`));
          break;
        case "ArrowLeft":
          X.preventDefault();
          const ae = A(q, "left", F, y.gridColumns);
          ae !== q ? (H((K) => ({ ...K, focusedCardIndex: ae })), I(ae), ce(`Moved to card ${ae + 1} of ${F}`)) : N.selectedIndex > 0 && (x({ type: "SET_SELECTED_INDEX", payload: N.selectedIndex - 1 }), H((K) => ({ ...K, focusArea: "tabs" })), setTimeout(() => Y(N.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          X.preventDefault();
          const ne = A(q, "right", F, y.gridColumns);
          ne !== q ? (H((K) => ({ ...K, focusedCardIndex: ne })), I(ne), ce(`Moved to card ${ne + 1} of ${F}`)) : N.selectedIndex < c.length - 1 && (x({ type: "SET_SELECTED_INDEX", payload: N.selectedIndex + 1 }), H((K) => ({ ...K, focusArea: "tabs" })), setTimeout(() => Y(N.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (ee?.data[q]) {
            X.preventDefault(), H((se) => ({
              ...se,
              selectedCardIndex: q
            }));
            const K = J(q);
            K.length > 0 ? (H((se) => ({
              ...se,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: K,
              selectedCardIndex: q
              // Ensure selection is maintained
            })), ce(`Card ${q + 1} selected and navigation activated. ${K.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : ce(`Card ${q + 1} selected.`);
          }
          break;
        case " ":
          if (ee?.data[q]) {
            X.preventDefault(), H((se) => ({
              ...se,
              selectedCardIndex: se.selectedCardIndex === q ? -1 : q
            }));
            const K = y.selectedCardIndex === q;
            ce(`Card ${q + 1} ${K ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (te) {
      case "ArrowUp":
      case "ArrowLeft":
        X.preventDefault();
        const V = Math.max(0, y.focusedCardElementIndex - 1);
        H((se) => ({ ...se, focusedCardElementIndex: V })), oe(q, V);
        break;
      case "ArrowDown":
      case "ArrowRight":
        X.preventDefault();
        const ae = Math.min(y.cardElements.length - 1, y.focusedCardElementIndex + 1);
        H((se) => ({ ...se, focusedCardElementIndex: ae })), oe(q, ae);
        break;
      case "Enter":
        X.preventDefault();
        const ne = y.cardElements[y.focusedCardElementIndex];
        ne && (ne.element.click(), ce(`Activated ${ne.label}`));
        break;
      case " ":
        X.preventDefault();
        const K = y.cardElements[y.focusedCardElementIndex];
        if (K) {
          const se = new MouseEvent("dblclick", { bubbles: !0 });
          K.element.dispatchEvent(se), ce(`Double-clicked ${K.label}`);
        }
        break;
      case "Escape":
        X.preventDefault(), H((se) => ({
          ...se,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => I(q), 0), ce("Exited card navigation, returned to card level");
        break;
      case "Home":
        X.preventDefault(), y.cardElements.length > 0 && (H((se) => ({ ...se, focusedCardElementIndex: 0 })), oe(q, 0));
        break;
      case "End":
        if (X.preventDefault(), y.cardElements.length > 0) {
          const se = y.cardElements.length - 1;
          H((ye) => ({ ...ye, focusedCardElementIndex: se })), oe(q, se);
        }
        break;
    }
  }, [y, N.selectedIndex, c, O, I, Y, H, J, oe, ce]), Ce = fe((X) => {
    const q = v.current[X], te = q?.parentElement;
    if (!q || !te) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const ee = q.getBoundingClientRect(), F = te.getBoundingClientRect();
    ee.left >= F.left && ee.right <= F.right || (console.log("Tab not visible, scrolling into view (mobile)"), q.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Ne = fe((X, q) => {
    if (_ !== "cards")
      return;
    const { key: te } = X;
    switch (te) {
      case "ArrowLeft":
        X.preventDefault();
        const ee = q > 0 ? q - 1 : c.length - 1;
        k(ee), H((ne) => ({ ...ne, focusedTabIndex: ee })), v.current[ee]?.focus(), Ce(ee);
        break;
      case "ArrowRight":
        X.preventDefault();
        const F = q < c.length - 1 ? q + 1 : 0;
        k(F), H((ne) => ({ ...ne, focusedTabIndex: F })), v.current[F]?.focus(), Ce(F);
        break;
      case "ArrowDown":
        X.preventDefault();
        const V = c[N.selectedIndex];
        V && V.columns && V.columns.length > 0 ? (H((ne) => ({
          ...ne,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), le(0)) : (H((ne) => ({
          ...ne,
          focusArea: "cards",
          focusedCardIndex: 0
        })), I(0));
        break;
      case "Home":
        X.preventDefault(), k(0), H((ne) => ({ ...ne, focusedTabIndex: 0 })), v.current[0]?.focus(), Ce(0);
        break;
      case "End":
        X.preventDefault();
        const ae = c.length - 1;
        k(ae), H((ne) => ({ ...ne, focusedTabIndex: ae })), v.current[ae]?.focus(), Ce(ae);
        break;
      case "Enter":
      case " ":
        X.preventDefault(), k(q);
        break;
    }
  }, [c.length, k, _, I, H, Ce]), Te = fe((X, q) => {
    if (_ !== "cards")
      return;
    const { key: te } = X, ee = c[N.selectedIndex];
    if (q === 0 && !y.isSortControlsActive) {
      switch (te) {
        case "ArrowUp":
          X.preventDefault(), H((V) => ({
            ...V,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), Y(N.selectedIndex);
          break;
        case "ArrowDown":
          X.preventDefault(), ee?.data && ee.data.length > 0 && (H((V) => ({
            ...V,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), I(0));
          break;
        case "Enter":
        case " ":
          X.preventDefault();
          const F = ie();
          if (F.length > 0) {
            H((ae) => ({
              ...ae,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), le(1);
            const V = `Entered sort controls navigation mode. ${F.length} controls available. Use arrow keys to navigate between controls.`;
            ce(V);
          }
          break;
        case "Escape":
          X.preventDefault(), H((V) => ({
            ...V,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), Y(N.selectedIndex);
          break;
      }
      return;
    }
    if (y.isSortControlsActive) {
      const V = ie().length;
      switch (te) {
        case "ArrowLeft":
          X.preventDefault();
          const ae = y.focusedSortControlIndex > 1 ? y.focusedSortControlIndex - 1 : V;
          H((K) => ({ ...K, focusedSortControlIndex: ae })), le(ae);
          break;
        case "ArrowRight":
          X.preventDefault();
          const ne = y.focusedSortControlIndex < V ? y.focusedSortControlIndex + 1 : 1;
          H((K) => ({ ...K, focusedSortControlIndex: ne })), le(ne);
          break;
        case "ArrowDown":
          if (X.preventDefault(), y.isSortControlsActive) {
            const K = y.focusedSortControlIndex < V ? y.focusedSortControlIndex + 1 : 1;
            H((se) => ({ ...se, focusedSortControlIndex: K })), le(K);
          } else
            ee?.data && ee.data.length > 0 && (H((K) => ({
              ...K,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), I(0));
          break;
        case "ArrowUp":
          X.preventDefault(), H((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), le(0);
          break;
        case "Escape":
          X.preventDefault(), H((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), le(0);
          break;
      }
    }
  }, [_, c, N.selectedIndex, y.isSortControlsActive, y.focusedSortControlIndex, le, Y, I, H, ce]);
  if (_ === "cards") {
    const X = c[N.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${P || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": g,
            "aria-describedby": `${M || ""} ${u ? `${u}-navigation-help` : ""}`.trim(),
            "aria-orientation": m,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((q, te) => {
              const ee = te === N.selectedIndex, F = q.disabled || E;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${q.id}`,
                  "aria-controls": `panel-${q.id}`,
                  "aria-selected": ee,
                  "aria-disabled": F,
                  tabIndex: ee ? 0 : -1,
                  ref: (V) => {
                    v.current[te] = V;
                  },
                  onClick: () => k(te),
                  onKeyDown: (V) => Ne(V, te),
                  disabled: F,
                  className: [
                    "aria-tabs-datagrid__tab",
                    ee ? "aria-tabs-datagrid__tab--selected" : "",
                    F ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: q.label }),
                    N.tabLoadingStates[te] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    N.tabErrors[te] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                q.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      X && X.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          Qo,
          {
            sortConfig: N.sortConfig || [],
            columns: X.columns.map((q) => ({ key: q.key, label: q.label })),
            onSortChange: (q) => {
              x({ type: "SET_SORT", payload: q });
            },
            ariaLabel: "Card view sort configuration",
            className: "aria-tabs-datagrid-adaptive__advanced-sort-controls"
          }
        )
      ) : (
        /* Simple card sorting */
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid-adaptive__sort-controls",
            role: "region",
            "aria-label": "Sort controls",
            tabIndex: y.focusArea === "sort-controls" ? 0 : -1,
            ref: (q) => {
              D.current[0] = q;
            },
            onKeyDown: (q) => Te(q, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${X.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  zn,
                  {
                    id: `card-sort-${X.id}`,
                    name: `card-sort-${X.id}`,
                    value: y.cardSortConfig ? `${y.cardSortConfig.key}-${y.cardSortConfig.direction}` : "",
                    onChange: (q) => W(q.target.value),
                    className: "sort-select",
                    children: Z(X.columns).map((q) => /* @__PURE__ */ r.jsx("option", { value: q.value, children: q.label }, q.value))
                  }
                )
              ] }),
              y.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  re(y.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  et,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => W(""),
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
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: $,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${X?.label || "Data"} cards in ${y.gridRows} rows and ${y.gridColumns} columns`,
          "aria-rowcount": y.gridRows,
          "aria-colcount": y.gridColumns,
          id: `panel-${X?.id}`,
          "aria-labelledby": `tab-${X?.id}`,
          children: z(X?.data || []).map((q, te) => {
            const ee = y.selectedCardIndex === te, F = y.focusedCardIndex === te && y.focusArea === "cards", V = y.focusedCardIndex === te && y.focusArea === "card" && y.isCardNavigationActive, ae = te === 0 && y.focusArea !== "cards", ne = F || ae, K = b(te, y.gridColumns);
            if (n.cardTemplate) {
              const ve = n.cardTemplate(q, X.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": K.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (ke) => {
                        R.current[te] = ke;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        ee ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        F ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        V ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": K.col + 1,
                      "aria-selected": ee,
                      "aria-expanded": V,
                      "aria-description": V ? `Card navigation active. ${y.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: ne ? 0 : -1,
                      onClick: () => {
                        H((ke) => ({
                          ...ke,
                          selectedCardIndex: ke.selectedCardIndex === te ? -1 : te
                        })), O(q);
                      },
                      onKeyDown: (ke) => xe(ke, te),
                      onFocus: () => {
                        H((ke) => ke.focusedCardIndex !== te || ke.focusArea !== "cards" ? {
                          ...ke,
                          focusedCardIndex: te,
                          focusArea: "cards"
                        } : ke);
                      },
                      children: ve
                    }
                  )
                },
                `card-${te}`
              );
            }
            const se = $f(q, X.columns, L, T), ye = [
              se.className || "",
              ee ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              F ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              V ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": K.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      ee ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      F ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      V ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": K.col + 1,
                    "aria-selected": ee,
                    "aria-expanded": V,
                    onKeyDown: (ve) => {
                      ve.key === "Enter" && (ve.preventDefault(), H((ke) => ({
                        ...ke,
                        selectedCardIndex: te
                      }))), xe(ve, te);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      Jo,
                      {
                        ...se,
                        ref: (ve) => {
                          R.current[te] = ve;
                        },
                        className: ye,
                        "aria-label": `${se["aria-label"] || se.heading}. ${V ? `Card navigation active with ${y.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: ne ? 0 : -1,
                        onClick: () => {
                          H((ve) => ({
                            ...ve,
                            selectedCardIndex: ve.selectedCardIndex === te ? -1 : te
                          })), O(q);
                        },
                        onKeyDown: (ve) => xe(ve, te),
                        onFocus: () => {
                          y.isCardNavigationActive || H((ve) => ve.focusedCardIndex !== te || ve.focusArea !== "cards" ? {
                            ...ve,
                            focusedCardIndex: te,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : ve);
                        }
                      }
                    )
                  }
                )
              },
              `card-${te}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: ue,
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
  return _ === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${P || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      ma,
      {
        tabPanels: c,
        dataConfig: f,
        ariaLabel: g,
        ariaDescription: M,
        orientation: m,
        id: u,
        disabled: E,
        selectedIndex: h,
        onTabChange: p,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...j
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${P || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      ma,
      {
        tabPanels: c,
        dataConfig: f,
        ariaLabel: g,
        ariaDescription: M,
        orientation: m,
        id: u,
        disabled: E,
        selectedIndex: h,
        onTabChange: p,
        actions: l,
        forceActionsAbove: d,
        ...j
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, oi = (e) => {
  const t = ga.find((n) => n.value === e);
  return t ? t.icon : null;
}, Df = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = n.discountedPrice || n.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => oi(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Mf = (e) => os(e, [
  {
    id: "all-products",
    label: "All Products",
    columns: [
      { key: "name", label: "Product Name" },
      {
        key: "price",
        label: "Price",
        render: (n) => n.discountedPrice ? `$${n.price.toFixed(2)} → $${n.discountedPrice.toFixed(2)}` : `$${n.price.toFixed(2)}`
      },
      { key: "inStock", label: "Availability" },
      { key: "category", label: "Category" },
      {
        key: "rating",
        label: "Rating",
        render: (n) => `${n.rating}/5 (${n.reviews} reviews)`
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
        render: (n) => `$${n.price.toFixed(2)}`
      },
      {
        key: "discountedPrice",
        label: "Sale Price",
        render: (n) => `$${n.discountedPrice?.toFixed(2) || "N/A"}`
      },
      {
        key: "discount",
        label: "Discount",
        render: (n) => n.discountedPrice ? `${((n.price - n.discountedPrice) / n.price * 100).toFixed(0)}% OFF` : "N/A"
      }
    ],
    filter: (n) => n.filter((a) => a.discountedPrice !== void 0),
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
    filter: (n) => n.filter((a) => a.rating >= 4),
    sortConfig: [{ key: "rating", direction: "desc" }],
    ariaLabel: "Top Rated Products Grid",
    ariaDescription: "Highest rated products with 4+ star ratings"
  }
]), If = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.dateRange) {
      const [a, o] = t.dateRange;
      if (n.date < a || n.date > o) return !1;
    }
    if (t.amountRange) {
      const [a, o] = t.amountRange;
      if (Math.abs(n.amount) < a || Math.abs(n.amount) > o) return !1;
    }
    return !(t.types && t.types.length > 0 && !t.types.includes(n.type) || t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.pending !== void 0 && n.pending !== t.pending);
  }) : e,
  booleanRenderer: (e) => oi(e),
  getDataId: (e) => `financial-${e.id}`
}, Lf = (e) => os(e, [
  {
    id: "all-transactions",
    label: "All Transactions",
    columns: [
      {
        key: "date",
        label: "Date",
        render: (n) => n.date.toLocaleDateString()
      },
      { key: "description", label: "Description" },
      {
        key: "amount",
        label: "Amount",
        render: (n) => `${n.type === "credit" ? "+" : "-"}$${Math.abs(n.amount).toFixed(2)}`
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
        render: (n) => n.date.toLocaleDateString()
      },
      { key: "description", label: "Description" },
      {
        key: "amount",
        label: "Amount",
        render: (n) => `+$${n.amount.toFixed(2)}`
      },
      { key: "category", label: "Category" }
    ],
    filter: (n) => n.filter((a) => a.type === "credit"),
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
        render: (n) => n.date.toLocaleDateString()
      },
      { key: "description", label: "Description" },
      {
        key: "amount",
        label: "Amount",
        render: (n) => `-$${Math.abs(n.amount).toFixed(2)}`
      },
      { key: "category", label: "Category" }
    ],
    filter: (n) => n.filter((a) => a.type === "debit"),
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
        render: (n) => n.date.toLocaleDateString()
      },
      { key: "description", label: "Description" },
      {
        key: "amount",
        label: "Amount",
        render: (n) => `${n.type === "credit" ? "+" : "-"}$${Math.abs(n.amount).toFixed(2)}`
      },
      { key: "type", label: "Type" }
    ],
    filter: (n) => n.filter((a) => a.pending),
    ariaLabel: "Pending Transactions Grid",
    ariaDescription: "Transactions awaiting processing"
  }
]), Ff = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Df,
    createTabs: Mf
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: If,
    createTabs: Lf
  }
}, io = (e, t) => {
  const n = Ff[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, ii = [
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
], Af = [
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
], Bf = [
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
], Ef = [
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
], lo = [
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
], co = [
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
], uo = [
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
], Pf = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Rf = () => [
  {
    id: "patients",
    label: "Patients",
    data: ii,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      ei,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected patient:", n),
        onAction: (n, a) => console.log("Patient action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  },
  {
    id: "appointments",
    label: "Appointments",
    data: Af,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      ti,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected appointment:", n),
        onAction: (n, a) => console.log("Appointment action:", n, a),
        status: e.status
      }
    )
  },
  {
    id: "medications",
    label: "Medications",
    data: Bf,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      ni,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected medication:", n),
        onAction: (n, a) => console.log("Medication action:", n, a),
        priority: e.priority
      }
    )
  },
  {
    id: "vitals",
    label: "Vital Signs",
    data: Ef,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      ri,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Hf = () => {
  const [e, t] = Me("healthcare"), n = De(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: hf,
      tabPanels: Rf(),
      data: ii
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...io("ecommerce", lo),
      data: lo
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...io("financial", co),
      data: co
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Pf,
      tabPanels: os(uo, [
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
      data: uo
    }
  }), []), a = n[e];
  return /* @__PURE__ */ r.jsxs("div", { style: { padding: "2rem", maxWidth: "1200px", margin: "0 auto" }, children: [
    /* @__PURE__ */ r.jsxs("div", { style: { marginBottom: "2rem" }, children: [
      /* @__PURE__ */ r.jsx("h1", { style: {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        color: "#1f2937"
      }, children: "AriaTabsDataGrid - Comprehensive Demo" }),
      /* @__PURE__ */ r.jsx("p", { style: {
        fontSize: "1.1rem",
        color: "#6b7280",
        marginBottom: "2rem",
        lineHeight: "1.6"
      }, children: "This demo showcases the component's versatility across different domains: healthcare, e-commerce, financial services, and custom business applications. Each configuration demonstrates domain-specific data operations, custom renderers, and specialized filtering logic." }),
      /* @__PURE__ */ r.jsx("div", { style: {
        display: "flex",
        gap: "1rem",
        marginBottom: "2rem",
        flexWrap: "wrap"
      }, children: Object.keys(n).map((o) => /* @__PURE__ */ r.jsx(
        et,
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
      /* @__PURE__ */ r.jsxs("div", { style: {
        backgroundColor: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "0.5rem",
        padding: "1.5rem",
        marginBottom: "2rem"
      }, children: [
        /* @__PURE__ */ r.jsx("h2", { style: {
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "0.5rem",
          color: "#1e293b"
        }, children: a.title }),
        /* @__PURE__ */ r.jsx("p", { style: {
          color: "#64748b",
          marginBottom: "1rem"
        }, children: a.description }),
        /* @__PURE__ */ r.jsxs("div", { style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          fontSize: "0.9rem"
        }, children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("strong", { children: "Data Records:" }),
            " ",
            a.data.length
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("strong", { children: "Tab Panels:" }),
            " ",
            a.tabPanels.length
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("strong", { children: "Features:" }),
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
    /* @__PURE__ */ r.jsx(
      ma,
      {
        dataConfig: a.dataConfig,
        tabPanels: a.tabPanels,
        ariaLabel: `${a.title} Data Grid`,
        ariaDescription: `Interactive data grid for ${a.description.toLowerCase()}`
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { style: {
      marginTop: "3rem",
      padding: "1.5rem",
      backgroundColor: "#f1f5f9",
      borderRadius: "0.5rem",
      border: "1px solid #cbd5e1"
    }, children: [
      /* @__PURE__ */ r.jsx("h3", { style: {
        fontSize: "1.25rem",
        fontWeight: "600",
        marginBottom: "1rem",
        color: "#334155"
      }, children: "Implementation Details" }),
      /* @__PURE__ */ r.jsxs("div", { style: { display: "grid", gap: "1rem", fontSize: "0.9rem" }, children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Current Mode:" }),
          " ",
          e,
          " configuration"
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Data Operations:" }),
          " Custom comparator, filter function, and boolean renderer"
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Architecture:" }),
          " Generic core with domain-specific plugins and factory helpers"
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "State Management:" }),
          " Global row selection with data-object persistence"
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Accessibility:" }),
          " Full ARIA support with dynamic labels and descriptions"
        ] })
      ] })
    ] })
  ] });
}, jx = Hf, li = (e) => /* @__PURE__ */ r.jsx(jo, { ...e }), Nx = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = "two-thirds",
  mainWrapperSize: o,
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  service: d,
  navigation: c,
  search: f,
  account: h,
  organisation: p,
  logo: g,
  className: M,
  ...m
}) => {
  const u = {
    service: d,
    navigation: c,
    search: f,
    account: h,
    organisation: p,
    logo: g,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Zo, { ...s }),
    /* @__PURE__ */ r.jsx(Mo, { ...u }),
    /* @__PURE__ */ r.jsx(li, { className: M, ...m, children: /* @__PURE__ */ r.jsx(No, { size: o, children: /* @__PURE__ */ r.jsx(Gt, { children: /* @__PURE__ */ r.jsxs(vn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx($t, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(Io, { ...l })
  ] });
}, Tx = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = "two-thirds",
  mainWrapperSize: o = "small",
  // Default to small size for transactional forms
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  backLinkProps: d,
  serviceName: c,
  serviceHref: f,
  logo: h,
  className: p,
  ...g
}) => {
  const M = {
    service: {
      text: c,
      href: f
    },
    logo: h,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Zo, { ...s }),
    /* @__PURE__ */ r.jsx(Mo, { ...M }),
    /* @__PURE__ */ r.jsxs(li, { className: p, ...g, children: [
      d && /* @__PURE__ */ r.jsx(la, { ...d }),
      /* @__PURE__ */ r.jsx(No, { size: o, children: /* @__PURE__ */ r.jsx(Gt, { children: /* @__PURE__ */ r.jsxs(vn, { width: a, children: [
        t && /* @__PURE__ */ r.jsx($t, { size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(Io, { ...l })
  ] });
}, ci = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = ge("nhsuk-back-link", a), d = ge("nhsuk-back-link__link"), c = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
    t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e,
    /* @__PURE__ */ r.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__chevron-right",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "24",
        width: "24",
        children: /* @__PURE__ */ r.jsx("path", { d: "M15.5 12c0 .3-.1.5-.3.7l-5 5c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L13.1 12 8.8 7.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l5 5c.2.2.3.4.3.7z" })
      }
    )
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ r.jsx("button", { className: d, type: "button", onClick: s, ...i, children: c() }) : /* @__PURE__ */ r.jsx("a", { className: d, href: n, ...i, children: c() }) });
};
ci.displayName = "ForwardLink";
const tn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function fo() {
  return typeof window > "u" ? tn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function di() {
  const [e, t] = U.useState(fo());
  U.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(fo());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const n = U.useCallback((s) => e >= tn[s], [e]), a = U.useCallback((s) => e < tn[s], [e]), o = U.useCallback((s, i) => e >= tn[s] && e < tn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: o,
    /** Raw numeric values */
    values: tn
  };
}
function $x(e) {
  const { width: t, values: n } = di();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = n[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function zf(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = U.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = U.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return U.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    o ? d.set(n, String(o)) : d.delete(n), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [o, i, t, n, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Wf = ({ className: e }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    className: e,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z"
      }
    )
  }
), Of = ({ className: e }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    className: e,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z"
      }
    )
  }
);
function Uf(e) {
  const {
    items: t,
    selectedId: n,
    defaultSelectedId: a,
    onSelectionChange: o,
    renderItemContent: s,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: d,
    animated: c = !0,
    backLabel: f = "Back",
    nextLabel: h = "Next",
    isLoading: p = !1,
    emptyState: g,
    a11y: M,
    className: m,
    getId: u = (de) => de.id,
    orientation: E = "vertical",
    autoEnableThirdColumn: P = !0,
    onDrillChange: j,
    navigationInstructions: _ = "Use arrow keys to navigate, Enter to open.",
    initialFocus: B = "first",
    skipFocusOnSelect: S = !1,
    skipAnnouncements: L = !1,
    onFocusChange: T,
    syncUrl: C = !1,
    urlParamSelected: N = "nsv",
    urlParamDrill: x = "nsvDrill",
    urlSyncDebounceMs: v = 0,
    lazySecondary: R = !1,
    navFooter: D,
    collapsibleNav: $ = !1,
    navInitiallyCollapsed: y = !1,
    onNavCollapseChange: H,
    collapseToggleLabelShow: Q = "Show navigation",
    collapseToggleLabelHide: b = "Hide navigation",
    collapseToggleIconShow: w,
    collapseToggleIconHide: A,
    persistNavCollapsed: k,
    navCollapsedStorageKey: O = "nsvCollapsed",
    navCollapsedUrlParam: I = "nsvCollapsed",
    autoContentHeader: J,
    contentHeaderLevel: ue = 2,
    renderContentHeader: ce,
    contentSubheader: Z,
    secondarySubheader: G
  } = e, { up: W } = di(), [re, z] = U.useState(!1);
  U.useEffect(() => {
    z(!0);
  }, []);
  const oe = re && W("medium"), Y = re && W("xlarge");
  let ie;
  d ? ie = d : oe ? ie = "two-column" : ie = "list", !d && P && l && Y && (ie = "three-column");
  const le = zf({
    enabled: C,
    paramSelected: N,
    paramDrill: x
  }), [xe, Ce] = U.useState(
    () => le.selectedId !== void 0 ? le.selectedId : a
  ), Ne = n !== void 0 ? n : xe, Te = t.find((de) => u(de) === Ne), [X, q] = U.useState(
    void 0
  );
  U.useEffect(() => {
    if (Ne === void 0) return;
    q(Ne);
    const de = setTimeout(() => q(void 0), 220);
    return () => clearTimeout(de);
  }, [Ne]);
  const te = U.useRef(null), ee = U.useRef(null), F = U.useRef(null), V = U.useRef(null), [ae, ne] = U.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [K, se] = U.useState(() => "nav"), [ye, ve] = U.useState(0), ke = () => [
    V.current,
    ee.current,
    F.current
  ].filter(Boolean), Se = (de) => {
    const be = ke(), he = Math.max(0, Math.min(de, be.length - 1));
    be[he]?.focus(), ve(he);
  }, pe = U.useCallback(
    (de) => de ? Array.from(de.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (he) => !he.hasAttribute("disabled") && he.tabIndex !== -1
    ) : [],
    []
  ), $e = U.useCallback(
    (de) => {
      const be = pe(ee.current);
      if (!be.length) {
        ee.current?.focus();
        return;
      }
      const he = Math.max(0, Math.min(de, be.length - 1)), we = be[he];
      we.focus(), setTimeout(() => {
        document.activeElement !== we && (we.focus(), setTimeout(() => {
          document.activeElement !== we && we.click();
        }, 10));
      }, 10), ne((Pe) => ({ ...Pe, contentIndex: he }));
      const ze = (Pe) => {
        Pe.key === "Escape" && (Pe.preventDefault(), Pe.stopPropagation(), ee.current?.focus(), we.removeEventListener("keydown", ze));
      };
      be.forEach((Pe) => {
        const Re = Pe._escapeHandler;
        Re && Pe.removeEventListener("keydown", Re);
      }), we._escapeHandler = ze, we.addEventListener("keydown", ze);
    },
    [pe]
  ), Be = U.useCallback(
    (de) => {
      const be = pe(F.current);
      if (!be.length) {
        F.current?.focus();
        return;
      }
      const he = Math.max(0, Math.min(de, be.length - 1)), we = be[he];
      we.focus(), setTimeout(() => {
        document.activeElement !== we && (we.focus(), setTimeout(() => {
          document.activeElement !== we && we.click();
        }, 10));
      }, 10), ne((Pe) => ({ ...Pe, secondaryIndex: he }));
      const ze = (Pe) => {
        Pe.key === "Escape" && (Pe.preventDefault(), Pe.stopPropagation(), F.current?.focus(), we.removeEventListener("keydown", ze));
      };
      be.forEach((Pe) => {
        const Re = Pe._escapeHandler;
        Re && Pe.removeEventListener("keydown", Re);
      }), we._escapeHandler = ze, we.addEventListener("keydown", ze);
    },
    [pe]
  ), Oe = (de) => {
    if (de.defaultPrevented) return;
    const be = de.key, he = de.target, we = !!Ze.current && Ze.current.contains(he), ze = !!ee.current && ee.current.contains(he), Pe = !!F.current && F.current.contains(he), Re = !!F.current, Jt = he === V.current || he === ee.current || he === F.current, Pt = Ee && (ie === "list" || ie === "cards"), Ln = ze && !!he.closest(".nhs-navigation-split-view__header");
    if (K === "containers" && Jt) {
      if (be === "ArrowRight") {
        de.preventDefault();
        const je = ke(), He = Math.min(je.length - 1, ye + 1);
        Se(He);
        return;
      }
      if (be === "ArrowLeft") {
        de.preventDefault();
        const je = Math.max(0, ye - 1);
        Se(je);
        return;
      }
      if (be === "Home") {
        de.preventDefault(), Se(0);
        return;
      }
      if (be === "End") {
        de.preventDefault(), Se(ke().length - 1);
        return;
      }
      if (be === "Enter" || be === " ") {
        if (de.preventDefault(), he === V.current) {
          if (se("nav"), Ze.current) {
            const je = Array.from(
              Ze.current.querySelectorAll("[data-nav-item]")
            );
            (je[We >= 0 ? We : 0] || je[0])?.focus();
          }
        } else he === ee.current ? (se("content"), $e(ae.contentIndex)) : he === F.current && (se("secondary"), Be(ae.secondaryIndex));
        return;
      }
      return;
    }
    if (be === "Escape") {
      if (K === "content" || K === "secondary") {
        if (ze || Pe) {
          if (de.preventDefault(), se("nav"), Ze.current) {
            const He = Array.from(
              Ze.current.querySelectorAll("[data-nav-item]")
            )[We >= 0 ? We : 0];
            setTimeout(() => He?.focus(), 10);
          }
        } else if ((he === ee.current || he === F.current) && (de.preventDefault(), se("nav"), Ze.current)) {
          const He = Array.from(
            Ze.current.querySelectorAll("[data-nav-item]")
          )[We >= 0 ? We : 0];
          setTimeout(() => He?.focus(), 10);
        }
      }
      return;
    }
    if (be === "Enter" || be === " ") {
      if (he.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (he === ee.current && K === "content") {
        de.preventDefault(), de.stopPropagation(), pe(ee.current).length > 0 && setTimeout(() => {
          $e(ae.contentIndex);
        }, 50);
        return;
      }
      if (he === F.current && K === "secondary") {
        de.preventDefault(), de.stopPropagation(), pe(
          F.current
        ).length > 0 && setTimeout(() => {
          Be(ae.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Pt && Ln && !Jt && (be === "ArrowRight" || be === "ArrowLeft")) {
      const je = pe(ee.current).filter(
        (He) => He.closest(".nhs-navigation-split-view__header")
      );
      if (je.length > 1) {
        const He = je.indexOf(he);
        if (He >= 0) {
          const ys = (He + (be === "ArrowRight" ? 1 : -1) + je.length) % je.length;
          de.preventDefault(), je[ys].focus();
          return;
        }
      }
    }
    if (be === "ArrowRight") {
      if (we || K === "nav") {
        de.preventDefault(), se("content"), setTimeout(() => ee.current?.focus(), 10);
        return;
      }
      if (ze || K === "content") {
        Re && (de.preventDefault(), se("secondary"), setTimeout(() => F.current?.focus(), 10));
        return;
      }
    }
    if (be === "ArrowLeft") {
      if (Pe || K === "secondary") {
        de.preventDefault(), se("content"), setTimeout(() => ee.current?.focus(), 10);
        return;
      }
      if (ze || K === "content") {
        if (de.preventDefault(), se("nav"), Ze.current) {
          const He = Array.from(
            Ze.current.querySelectorAll("[data-nav-item]")
          )[We >= 0 ? We : 0];
          setTimeout(() => He?.focus(), 10);
        }
        return;
      }
    }
    if (be === "Home" && !we && (de.preventDefault(), se("nav"), Ze.current)) {
      const je = Array.from(
        Ze.current.querySelectorAll("[data-nav-item]")
      ), He = je[We >= 0 ? We : 0] || je[0];
      setTimeout(() => He?.focus(), 10);
    }
    if (be === "End") {
      const je = Re ? F.current : ee.current;
      je && !je.contains(he) && (de.preventDefault(), Re ? (se("secondary"), setTimeout(() => F.current?.focus(), 10)) : (se("content"), setTimeout(() => ee.current?.focus(), 10)));
    }
    if (be === "ArrowDown" || be === "ArrowUp") {
      if (he === ee.current && be === "ArrowDown") {
        de.preventDefault(), pe(ee.current).length > 0 && $e(0);
        return;
      }
      if (he === F.current && be === "ArrowDown") {
        de.preventDefault(), pe(
          F.current
        ).length > 0 && Be(0);
        return;
      }
      if (ze) {
        const je = pe(ee.current);
        if (je.length) {
          de.preventDefault();
          const He = be === "ArrowDown" ? 1 : -1, ut = (ae.contentIndex + He + je.length) % je.length;
          $e(ut);
        }
      } else if (Pe) {
        const je = pe(F.current);
        if (je.length) {
          de.preventDefault();
          const He = be === "ArrowDown" ? 1 : -1, ut = (ae.secondaryIndex + He + je.length) % je.length;
          Be(ut);
        }
      }
    }
  }, Ee = !!Te && (ie === "list" || ie === "cards"), tt = U.useMemo(() => J === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : J === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : J === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: J.mobile !== void 0 ? J.mobile : !0,
    tablet: J.tablet || !1,
    desktop: J.desktop || !1
  }, [J]), It = re && W("medium") && !W("xlarge"), mt = re && W("xlarge"), ct = !!l, Ue = ie === "three-column", [Ve, fn] = U.useState(!1);
  U.useEffect(() => {
    Ue && Ve && fn(!1);
  }, [Ue, Ve]), U.useEffect(() => {
    Ve && !Ue && (se("secondary"), ve(2), setTimeout(() => {
      F.current?.focus();
    }, 50));
  }, [Ve, Ue]), U.useEffect(() => {
    !Ve && !Ue && K === "secondary" && (se("content"), ve(1), setTimeout(() => {
      ee.current?.focus();
    }, 50));
  }, [Ve, Ue, K]);
  const Fr = !!Te && (Ee && tt.mobile || !Ee && It && tt.tablet || !Ee && mt && tt.desktop) || ct && !Ue, Tl = `h${ue}`, Ar = Te ? U.createElement(
    Tl,
    {
      style: {
        marginLeft: Ee ? 32 : 0,
        marginRight: Ee ? 32 : 0
      }
    },
    Te.label
  ) : null, xs = Ee ? "mobile" : It ? "tablet" : "desktop", $l = ct && !Ue && !Ve, Br = Ee && tt.mobile ? /* @__PURE__ */ r.jsx(
    la,
    {
      element: "button",
      text: f,
      style: { marginRight: 16 },
      onClick: () => Zt(void 0, void 0)
    }
  ) : void 0, Er = $l ? /* @__PURE__ */ r.jsx(
    ci,
    {
      element: "button",
      text: h,
      onClick: () => {
        fn(!0);
      }
    }
  ) : void 0, Pr = !Ue && Ve ? /* @__PURE__ */ r.jsx(
    la,
    {
      element: "button",
      text: f,
      style: { marginRight: 16 },
      onClick: () => fn(!1)
    }
  ) : void 0, Dl = U.useMemo(() => {
    if (!Fr || !Te) return null;
    if (ce)
      return ce({
        item: Te,
        detailActive: Ee,
        context: xs,
        backLink: Br,
        defaultHeading: Ar
      });
    const de = Te && Z ? typeof Z == "function" ? Z(Te) : Z : null;
    return /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
      /* @__PURE__ */ r.jsxs(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 0,
            flex: "1 1 auto",
            minWidth: 0
          },
          children: [
            Pr || Br,
            /* @__PURE__ */ r.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  minWidth: 0
                },
                children: [
                  Ar,
                  de && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: de })
                ]
              }
            )
          ]
        }
      ),
      Er && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: Er })
    ] });
  }, [
    Fr,
    Te,
    ce,
    Ee,
    xs,
    Br,
    Pr,
    Ar,
    Er,
    Z
  ]);
  U.useEffect(() => {
    if (!C) return;
    const de = ie === "three-column";
    let be = !1;
    const he = () => {
      be || (le.selectedId !== Ne && le.setSelectedId(Ne), le.drilledIn !== de && le.setDrilledIn(de));
    };
    if (v && v > 0) {
      const we = setTimeout(he, v);
      return () => {
        be = !0, clearTimeout(we);
      };
    } else
      he();
  }, [C, le, Ne, ie, v]), U.useEffect(() => {
    if (!C) return;
    const de = () => {
      const be = new URLSearchParams(window.location.search), he = be.get(N);
      be.get(x), Ce(he === null ? void 0 : he);
    };
    return window.addEventListener("popstate", de), () => window.removeEventListener("popstate", de);
  }, [
    C,
    N,
    x,
    d,
    l
  ]);
  const In = U.useRef(0), gt = U.useRef(
    null
  ), Zt = U.useCallback(
    (de, be) => {
      de !== Ne && (n === void 0 && Ce(de), o?.(de, be));
    },
    [n, o, Ne]
  );
  U.useEffect(() => {
    if (!S && Ee && ee.current) {
      const de = setTimeout(() => ee.current?.focus(), 30);
      return () => clearTimeout(de);
    }
  }, [Ee, Ne, S]);
  const Ze = U.useRef(null), [We, hn] = U.useState(
    () => B === "first" ? 0 : -1
  );
  U.useEffect(() => {
    if (We < 0 || !Ze.current) return;
    const be = Array.from(
      Ze.current.querySelectorAll("[data-nav-item]")
    )[We];
    if (be) {
      document.activeElement !== be && be.focus(), In.current = We;
      const he = t[We];
      T?.(
        he ? u(he) : void 0,
        he,
        We
      );
    }
  }, [We, t, T, u]);
  const Ml = (de) => {
    const be = E === "vertical" ? "ArrowDown" : "ArrowRight", he = E === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (de.key === "ArrowRight" && E === "vertical") {
      de.preventDefault(), Ve ? (se("secondary"), setTimeout(() => {
        F.current?.focus();
      }, 10)) : (se("content"), setTimeout(() => {
        ee.current?.focus();
      }, 10));
      return;
    }
    if (de.key === be)
      de.preventDefault(), hn((we) => Math.min(t.length - 1, we + 1));
    else if (de.key === he)
      de.preventDefault(), hn((we) => Math.max(0, we - 1));
    else if (de.key === "Home")
      de.preventDefault(), hn(0);
    else if (de.key === "End")
      de.preventDefault(), hn(t.length - 1);
    else if (de.key === "Enter" || de.key === " ") {
      de.preventDefault();
      const we = t[We];
      we && !we.disabled && Zt(u(we), we);
    } else if (de.key.length === 1 && /[a-z0-9]/i.test(de.key)) {
      gt.current || (gt.current = { buffer: "", last: 0 });
      const we = Date.now(), ze = 700, Pe = de.key.toLowerCase();
      we - gt.current.last > ze ? gt.current.buffer = Pe : gt.current.buffer += Pe, gt.current.last = we;
      let Re = gt.current.buffer;
      const Jt = Re.split("").every((ut) => ut === Re[0]), Pt = t.map(
        (ut) => String(ut.label || "").toLowerCase()
      );
      let Ln = 0;
      We >= 0 && (Ln = (We + 1) % t.length);
      let je;
      const He = (ut, ys) => {
        const vs = t.length;
        for (let zr = 0; zr < vs; zr++) {
          const Wr = (Ln + zr) % vs;
          if (!t[Wr].disabled && Pt[Wr].startsWith(ut))
            return Wr;
        }
      };
      Jt && Re.length > 1 ? je = He(Re[0]) : (je = He(Re), je === void 0 && Re.length > 1 && (je = He(Re[Re.length - 1]), je !== void 0 && gt.current && (gt.current.buffer = Re[Re.length - 1]))), je !== void 0 && hn(je);
    }
  }, Il = U.useMemo(() => {
    if (k && (k === "url" || k === "both") && typeof window < "u") {
      const be = new URLSearchParams(window.location.search).get(I);
      if (be === "1") return !0;
      if (be === "0") return !1;
    }
    if (k && (k === "localStorage" || k === "both") && typeof window < "u")
      try {
        const de = window.localStorage.getItem(O);
        if (de === "1") return !0;
        if (de === "0") return !1;
      } catch {
      }
    return y;
  }, [
    k,
    y,
    O,
    I
  ]), [dt, Ll] = U.useState(Il);
  U.useEffect(() => {
    H?.(dt);
  }, [dt, H]);
  const Fl = U.useCallback(() => {
    oe && $ && Ll((de) => !de);
  }, [oe, $]);
  U.useEffect(() => {
    if (k && !(typeof window > "u")) {
      if (k === "localStorage" || k === "both")
        try {
          window.localStorage.setItem(
            O,
            dt ? "1" : "0"
          );
        } catch {
        }
      if (k === "url" || k === "both") {
        const de = new URLSearchParams(window.location.search);
        de.set(I, dt ? "1" : "0");
        const be = `${window.location.pathname}?${de.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", be);
      }
    }
  }, [
    dt,
    k,
    O,
    I
  ]);
  const Al = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Ee ? "nhs-navigation-split-view--detail-active" : "",
    ie === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    $ && oe && dt ? "nhs-navigation-split-view--nav-collapsed" : "",
    m
  ].filter(Boolean).join(" "), Rr = U.useRef(null);
  U.useEffect(() => {
    if (!L && Rr.current) {
      const de = Te ? `Selected ${Te.label}` : "Selection cleared";
      Rr.current.textContent = de;
    }
  }, [Te, L]), U.useEffect(() => {
    !Ee && Ne == null && Ze.current && Ze.current.querySelectorAll("[data-nav-item]")[In.current]?.focus();
  }, [Ee, Ne]);
  const Lt = ie === "three-column", [Hr, Bl] = U.useState(!1);
  U.useEffect(() => {
    Lt && !Hr && Bl(!0);
  }, [Lt, Hr]);
  const bs = U.useRef(Lt);
  U.useEffect(() => {
    bs.current !== Lt && (j?.(Lt), bs.current = Lt);
  }, [Lt, j]);
  const El = () => {
    if (ie === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": Ne ? String(Ne) : void 0,
          children: [
            t.map((he) => {
              const we = u(he), ze = we === Ne;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": ze,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(we),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": ze || void 0,
                      "data-disabled": he.disabled || void 0,
                      disabled: he.disabled,
                      onClick: () => !he.disabled && Zt(we, he),
                      children: [
                        he.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: he.icon }),
                        /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: he.label }),
                        he.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: he.description }),
                        s?.(he),
                        he.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: he.badge })
                      ]
                    }
                  )
                },
                we
              );
            }),
            t.length === 0 && !p && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: g || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const de = "nsv-nav-instructions", be = U.useMemo(() => U.memo(
      ({
        item: he,
        idx: we,
        selected: ze,
        focused: Pe
      }) => {
        const Re = u(he), Jt = he.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Pe ? 0 : -1,
          onClick: () => {
            In.current = we, Zt(Re, he);
          },
          onKeyDown: (Pt) => {
            (Pt.key === "Enter" || Pt.key === " ") && (Pt.preventDefault(), In.current = we, Zt(Re, he));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(Re),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": ze,
            "aria-current": ze ? "true" : void 0,
            "data-selected": ze || void 0,
            "data-disabled": he.disabled || void 0,
            ...Jt,
            children: [
              he.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: he.icon }),
              /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: he.label }),
                he.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: he.description }),
                s?.(he)
              ] }),
              he.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: he.badge })
            ]
          }
        );
      }
    ), [u, Zt, s]);
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "ul",
        {
          ref: Ze,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Ml,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": de,
          "aria-activedescendant": Ne ? String(Ne) : void 0,
          children: [
            t.map((he, we) => /* @__PURE__ */ r.jsx(
              be,
              {
                item: he,
                idx: we,
                selected: u(he) === Ne,
                focused: we === We || We === -1 && we === 0 && B === "first",
                "data-just-selected": u(he) === X ? "true" : void 0
              },
              u(he)
            )),
            t.length === 0 && !p && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: g || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          id: de,
          style: {
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)"
          },
          children: _
        }
      )
    ] });
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: te,
      className: Al,
      "aria-label": M?.rootLabel,
      "data-layout": ie,
      onKeyDown: Oe,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Ee || void 0,
            style: { transform: Ee ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: V,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": M?.navigationLabel || "Items",
                  "data-collapsed": dt || void 0,
                  tabIndex: 0,
                  children: [
                    $ && oe && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Fl,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": dt ? Q : b,
                        title: dt ? Q : b,
                        children: dt ? w || /* @__PURE__ */ r.jsx(Of, {}) : A || /* @__PURE__ */ r.jsx(Wf, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: El() }),
                    D && /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: D
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: ee,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": M?.contentLabel || "Content",
                  "data-has-selection": !!Te || void 0,
                  tabIndex: 0,
                  style: {
                    display: Ve && !Ue ? "none" : void 0
                  },
                  children: [
                    Fr && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: Dl }),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(Te)
                      }
                    )
                  ]
                }
              ),
              ie === "three-column" && (!R || Hr) || Ve && !Ue ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: F,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": M?.secondaryContentLabel || "Secondary",
                  tabIndex: 0,
                  children: /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: "nhs-navigation-split-view__secondary-inner",
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        minWidth: 0
                      },
                      children: [
                        Ve && !Ue && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              width: "100%"
                            },
                            children: /* @__PURE__ */ r.jsxs(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 0,
                                  flex: "1 1 auto",
                                  minWidth: 0
                                },
                                children: [
                                  Pr,
                                  /* @__PURE__ */ r.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: Te && typeof Te == "object" && "label" in Te ? Te.label : String(Te) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        Te && G && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof G == "function" ? G(Te) : G
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(Te) })
                      ]
                    }
                  )
                }
              ) : null
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: Rr,
            "aria-live": "polite",
            "aria-atomic": "true",
            style: {
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              clip: "rect(0 0 0 0)"
            }
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            "aria-live": "polite",
            style: {
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              clip: "rect(0 0 0 0)"
            },
            children: Lt ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
Uf.displayName = "NavigationSplitView";
const ho = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), Gf = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, d = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, f = Math.floor(e._startFraction) + 2, h = Math.max(1, Math.round(e._spanColumns)), p = n && e.childItems && e.childItems.length > 0, g = (m) => {
    p && (m.preventDefault(), a?.(e));
  }, M = p ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": o || !1,
    onClick: g,
    onKeyDown: (m) => {
      (m.key === "Enter" || m.key === " ") && g(m), m.key === "Escape" && o && g(m);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ge("nhsuk-product-roadmap__item", p && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: d, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": f,
      "aria-colspan": h,
      ...M,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          p && /* @__PURE__ */ r.jsx("span", { className: ge("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Yf = Hl(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: n = 400,
  itemMaxLines: a = 2,
  className: o,
  ariaLabel: s = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: d = "overlay",
  ...c
}) => {
  const [f, h] = Me(() => /* @__PURE__ */ new Set()), [p, g] = Me(() => /* @__PURE__ */ new Set()), M = Le(/* @__PURE__ */ new Set()), m = fe((v) => f.has(v), [f]), u = fe((v) => {
    h((R) => {
      const D = new Set(R);
      return D.has(v.id) ? (D.delete(v.id), g(($) => {
        const y = new Set($);
        return y.add(v.id), y;
      }), setTimeout(() => g(($) => {
        const y = new Set($);
        return y.delete(v.id), y;
      }), 240), l?.(v.id, !1)) : (D.add(v.id), l?.(v.id, !0)), D;
    });
  }, [l]);
  zl(() => {
    if (d !== "inline" || !i) return;
    const v = [];
    if (f.forEach((y) => {
      M.current.has(y) || v.push(y);
    }), M.current = new Set(f), !v.length) return;
    const R = typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches, D = v.map((y) => `.nhsuk-product-roadmap__inline-children[data-parent="${y}"] .nhsuk-product-roadmap__inline-child`).join(","), $ = Array.from(document.querySelectorAll(D));
    if ($.length) {
      if (R) {
        $.forEach((y) => {
          y.style.opacity = "1", y.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((y) => {
        (y.gsap || y.default || y).to($, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        $.forEach((y) => {
          y.style.opacity = "1", y.style.transform = "translateY(0)";
        });
      });
    }
  }, [f, d, i]);
  const E = fe(() => {
    f.size && h(/* @__PURE__ */ new Set());
  }, [f]), P = ge("nhsuk-product-roadmap", o), j = ho(n, 120, 1200, 400), _ = ho(a, 1, 6, 2), B = De(() => e.map((v) => /* @__PURE__ */ new Date(v + " 01")), [e]), S = De(() => {
    if (B.length === 0) {
      const D = /* @__PURE__ */ new Date();
      return [D, D];
    }
    const v = new Date(B[0]), R = kn.offset(new Date(B[B.length - 1]), 1);
    return [v, R];
  }, [B]), L = De(() => ss().domain(S).range([0, B.length * j]), [S, B.length, j]), T = fe((v) => {
    if (v.startDate) {
      const b = new Date(v.startDate), w = new Date(v.endDate ?? v.startDate);
      w < b && w.setTime(b.getTime());
      const A = L(b), k = kn.offset(new Date(w), 1);
      let O = L(k);
      Number.isFinite(O) || (O = A + j);
      const I = Math.max(j * 0.25, O - A), J = A / j, ue = I / j;
      return { ...v, _pxLeft: A, _pxWidth: I, _startFraction: J, _spanColumns: ue };
    }
    const R = v.date ?? 1, D = v.dateOffset ?? 0, $ = v.length ?? 1, y = v.partialLength ?? 1, H = R - 1 + D, Q = $ - 1 + y;
    return { ...v, _pxLeft: H * j, _pxWidth: Q * j, _startFraction: H, _spanColumns: Q };
  }, [L, j]), C = De(() => t.map((v) => {
    const D = v.roadmapItems.map((y) => {
      const H = !y.childItems && y.children ? { ...y, childItems: y.children } : { ...y };
      return T(H);
    }).sort((y, H) => y._pxLeft !== H._pxLeft ? y._pxLeft - H._pxLeft : H._pxWidth - y._pxWidth), $ = [];
    return D.forEach((y) => {
      const H = y._pxLeft, Q = y._pxLeft + y._pxWidth;
      let b = $.findIndex((w) => w <= H);
      b === -1 && (b = $.length, $.push(0)), $[b] = Q, y.verticalPosition = b + 1;
    }), { ...v, roadmapItems: D, _laneCount: $.length };
  }), [t, T]), N = De(() => C.map((v) => v._laneCount || 1), [C]), x = De(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: P,
      style: { "--column-width": `${j}px`, gridTemplateColumns: x },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": C.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((v, R) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": R + 2, children: v }, v + R))
        ] }),
        C.map((v, R) => {
          const D = R + 2, $ = N[R];
          let y, H = 0, Q = [];
          i && d === "inline" && (Q = v.roadmapItems.filter((k) => m(k.id) && k.childItems && k.childItems.length).map((k) => ({ id: k.id, lane: k.verticalPosition || 1, count: k.childItems.length })).sort((k, O) => k.lane - O.lane), H = Q.reduce((k, O) => k + O.count, 0));
          const b = $ + H;
          y = `calc((${b} * var(--roadmap-item-block-height)) + (max(0, ${b} - 1) * var(--roadmap-row-gap)))`;
          const w = {};
          let A = 0;
          return Q.forEach((k) => {
            A += k.count, w[k.lane + 1] = A;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": D, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: v.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: y }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: v.roadmapItems.map((k) => {
              const O = (k.verticalPosition || 1) - 1, I = Q.filter((Z) => Z.lane - 1 < O).reduce((Z, G) => Z + G.count, 0), J = O + I, ue = m(k.id), ce = p.has(k.id);
              return /* @__PURE__ */ r.jsxs(at.Fragment, { children: [
                /* @__PURE__ */ r.jsx(Gf, { item: k, maxLines: _, enableDrilldown: i, onExpand: u, isActive: ue, topLaneIndex: J, laneOffset: I }),
                i && d === "inline" && (ue || ce) && k.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": k.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${k.title} child tasks`, children: k.childItems.map((Z, G) => {
                  const W = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let re = k._pxLeft, z = k._pxWidth;
                  if (Z.startDate) {
                    const ie = new Date(Z.startDate);
                    let le = Z.endDate ? new Date(Z.endDate) : new Date(ie);
                    le < ie && (le = new Date(ie));
                    const xe = new Date(le);
                    xe.setDate(xe.getDate() + 1);
                    const Ce = L(ie);
                    let Ne = L(xe);
                    (!Number.isFinite(Ne) || Ne <= Ce) && (Ne = Ce + 6), re = Ce, z = Math.max(6, Ne - Ce);
                  }
                  const Y = J + 1 + G;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: ge("nhsuk-product-roadmap__inline-child", Z.status && `nhsuk-product-roadmap__inline-child--status-${Z.status}`, !ue && ce && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${re}px`, width: `${z}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${Y})`, height: W, opacity: ue ? 0 : void 0, transform: ue ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: Z.title })
                      ]
                    },
                    Z.id
                  );
                }) })
              ] }, k.id);
            }) }) })
          ] }, v.heading + R);
        }),
        i && d === "overlay" && f.size === 1 && (() => {
          const v = Array.from(f)[0], R = t.flatMap((D) => D.roadmapItems).find((D) => D.id === v);
          return !R || !R.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${R.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: R.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: E, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: R.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: R.childItems.map((D) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: D.title }),
                D.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: D.content })
              ] }, D.id)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: E, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Yf.displayName = "ProductRoadmap";
function ui(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ui(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Qn() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ui(e)) && (a && (a += " "), a += t);
  return a;
}
function qe(e) {
  return function() {
    return e;
  };
}
const xa = Math.PI, ba = 2 * xa, Ht = 1e-6, Vf = ba - Ht;
function fi(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function qf(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return fi;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class Kf {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? fi : qf(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, a, o) {
    this._append`Q${+t},${+n},${this._x1 = +a},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, a, o, s, i) {
    this._append`C${+t},${+n},${+a},${+o},${this._x1 = +s},${this._y1 = +i}`;
  }
  arcTo(t, n, a, o, s) {
    if (t = +t, n = +n, a = +a, o = +o, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let i = this._x1, l = this._y1, d = a - t, c = o - n, f = i - t, h = l - n, p = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (p > Ht) if (!(Math.abs(h * d - c * f) > Ht) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let g = a - i, M = o - l, m = d * d + c * c, u = g * g + M * M, E = Math.sqrt(m), P = Math.sqrt(p), j = s * Math.tan((xa - Math.acos((m + p - u) / (2 * E * P))) / 2), _ = j / P, B = j / E;
      Math.abs(_ - 1) > Ht && this._append`L${t + _ * f},${n + _ * h}`, this._append`A${s},${s},0,0,${+(h * g > f * M)},${this._x1 = t + B * d},${this._y1 = n + B * c}`;
    }
  }
  arc(t, n, a, o, s, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), d = a * Math.sin(o), c = t + l, f = n + d, h = 1 ^ i, p = i ? o - s : s - o;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > Ht || Math.abs(this._y1 - f) > Ht) && this._append`L${c},${f}`, a && (p < 0 && (p = p % ba + ba), p > Vf ? this._append`A${a},${a},0,1,${h},${t - l},${n - d}A${a},${a},0,1,${h},${this._x1 = c},${this._y1 = f}` : p > Ht && this._append`A${a},${a},0,${+(p >= xa)},${h},${this._x1 = t + a * Math.cos(s)},${this._y1 = n + a * Math.sin(s)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function hi(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const a = Math.floor(n);
      if (!(a >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = a;
    }
    return e;
  }, () => new Kf(t);
}
function pi(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function mi(e) {
  this._context = e;
}
mi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function gi(e) {
  return new mi(e);
}
function xi(e) {
  return e[0];
}
function bi(e) {
  return e[1];
}
function yi(e, t) {
  var n = qe(!0), a = null, o = gi, s = null, i = hi(l);
  e = typeof e == "function" ? e : e === void 0 ? xi : qe(e), t = typeof t == "function" ? t : t === void 0 ? bi : qe(t);
  function l(d) {
    var c, f = (d = pi(d)).length, h, p = !1, g;
    for (a == null && (s = o(g = i())), c = 0; c <= f; ++c)
      !(c < f && n(h = d[c], c, d)) === p && ((p = !p) ? s.lineStart() : s.lineEnd()), p && s.point(+e(h, c, d), +t(h, c, d));
    if (g) return s = null, g + "" || null;
  }
  return l.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : qe(+d), l) : e;
  }, l.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : qe(+d), l) : t;
  }, l.defined = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : qe(!!d), l) : n;
  }, l.curve = function(d) {
    return arguments.length ? (o = d, a != null && (s = o(a)), l) : o;
  }, l.context = function(d) {
    return arguments.length ? (d == null ? a = s = null : s = o(a = d), l) : a;
  }, l;
}
function ya(e, t, n) {
  var a = null, o = qe(!0), s = null, i = gi, l = null, d = hi(c);
  e = typeof e == "function" ? e : e === void 0 ? xi : qe(+e), t = typeof t == "function" ? t : qe(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? bi : qe(+n);
  function c(h) {
    var p, g, M, m = (h = pi(h)).length, u, E = !1, P, j = new Array(m), _ = new Array(m);
    for (s == null && (l = i(P = d())), p = 0; p <= m; ++p) {
      if (!(p < m && o(u = h[p], p, h)) === E)
        if (E = !E)
          g = p, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), M = p - 1; M >= g; --M)
            l.point(j[M], _[M]);
          l.lineEnd(), l.areaEnd();
        }
      E && (j[p] = +e(u, p, h), _[p] = +t(u, p, h), l.point(a ? +a(u, p, h) : j[p], n ? +n(u, p, h) : _[p]));
    }
    if (P) return l = null, P + "" || null;
  }
  function f() {
    return yi().defined(o).curve(i).context(s);
  }
  return c.x = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : qe(+h), a = null, c) : e;
  }, c.x0 = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : qe(+h), c) : e;
  }, c.x1 = function(h) {
    return arguments.length ? (a = h == null ? null : typeof h == "function" ? h : qe(+h), c) : a;
  }, c.y = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : qe(+h), n = null, c) : t;
  }, c.y0 = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : qe(+h), c) : t;
  }, c.y1 = function(h) {
    return arguments.length ? (n = h == null ? null : typeof h == "function" ? h : qe(+h), c) : n;
  }, c.lineX0 = c.lineY0 = function() {
    return f().x(e).y(t);
  }, c.lineY1 = function() {
    return f().x(e).y(n);
  }, c.lineX1 = function() {
    return f().x(a).y(t);
  }, c.defined = function(h) {
    return arguments.length ? (o = typeof h == "function" ? h : qe(!!h), c) : o;
  }, c.curve = function(h) {
    return arguments.length ? (i = h, s != null && (l = i(s)), c) : i;
  }, c.context = function(h) {
    return arguments.length ? (h == null ? s = l = null : l = i(s = h), c) : s;
  }, c;
}
function po(e) {
  return e < 0 ? -1 : 1;
}
function mo(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), i = (n - e._y1) / (o || a < 0 && -0), l = (s * o + i * a) / (a + o);
  return (po(s) + po(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function go(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Qr(e, t, n) {
  var a = e._x0, o = e._y0, s = e._x1, i = e._y1, l = (s - a) / 3;
  e._context.bezierCurveTo(a + l, o + l * t, s - l, i - l * n, s, i);
}
function er(e) {
  this._context = e;
}
er.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Qr(this, this._t0, go(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var n = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Qr(this, go(this, n = mo(this, e, t)), n);
          break;
        default:
          Qr(this, this._t0, n = mo(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(er.prototype).point = function(e, t) {
  er.prototype.point.call(this, t, e);
};
function tr(e) {
  return new er(e);
}
function Xf(e, t, n) {
  const a = Lo(e, t);
  return ss().domain(a).range(n);
}
function xo(e, t, n) {
  const [a, o] = Lo(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(o)))
    return qn().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const d = o - a, c = (d > 0 ? d : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = o ?? 0;
  return qn().domain([i, l]).nice().range(n);
}
function va(e, t, n, a) {
  const o = yi().x(t).y(n);
  return a?.smooth !== !1 && o.curve(tr), o(e) ?? "";
}
function Zf(e = {}) {
  const t = U.useRef(null), n = U.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, o] = U.useState({ width: 0, height: 0 });
  U.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((d) => {
      for (const c of d) {
        const { width: f, height: h } = c.contentRect;
        o({ width: f, height: h });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const s = Math.max(0, a.width - n.left - n.right), i = Math.max(0, a.height - n.top - n.bottom);
  return { width: a.width, height: a.height, innerWidth: s, innerHeight: i, margin: n, ref: t };
}
const vi = U.createContext(null);
function Bt() {
  return U.useContext(vi);
}
const Jf = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = Zf(t), d = { height: e, position: "relative" };
  return n !== void 0 && (d.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: d, role: s, "aria-label": i, children: /* @__PURE__ */ r.jsx(vi.Provider, { value: l, children: o }) });
}, is = U.createContext(null), Xt = () => U.useContext(is), Qf = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: o,
  xTickCount: s = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: d,
  yPadding: c
}) => {
  const f = Bt(), h = t ?? f?.innerWidth ?? 0, p = n ?? f?.innerHeight ?? 0, g = U.useMemo(() => e.flatMap((_) => _.data), [e]), M = U.useCallback((_) => {
    if (a) return a(_);
    const B = _.x;
    return B instanceof Date ? B : new Date(B);
  }, [a]), m = d ?? 6, u = c ?? 6, E = U.useMemo(() => Xf(g, M, [m, Math.max(0, h - m)]), [g, M, h, m]), P = U.useMemo(() => {
    if (l) {
      const _ = xo([], (B) => B.y, [Math.max(0, p - u), u]);
      return _.domain(l), _;
    }
    return xo(g, (_) => _.y, [Math.max(0, p - u), u]);
  }, [g, p, l]), j = U.useMemo(() => ({
    xScale: E,
    yScale: P,
    getXTicks: (_ = s) => E.ticks(_),
    getYTicks: (_ = i) => P.ticks(_)
  }), [E, P, s, i]);
  return /* @__PURE__ */ r.jsx(is.Provider, { value: j, children: o });
}, bo = ({
  type: e,
  scale: t,
  tickCount: n,
  tickValues: a,
  formatTick: o,
  label: s,
  offset: i,
  className: l,
  minLabelSpacing: d,
  maxTickLabelLength: c,
  autoMinLabelSpacing: f = e === "x",
  labelAngle: h = 0,
  allowLabelWrap: p = !0,
  tickFormatPreset: g
}) => {
  const M = Xt(), m = Bt(), u = t || (e === "x" ? M?.xScale : M?.yScale), E = n ?? (e === "x" ? 6 : 5), P = typeof o == "function", j = U.useMemo(() => {
    if (P || !g) return;
    const S = (L) => new Intl.DateTimeFormat(void 0, L);
    switch (g) {
      case "dayShortMonth":
        return (L) => {
          const T = L instanceof Date ? L : new Date(L);
          return `${T.getDate()}
${S({ month: "short" }).format(T)}`;
        };
      case "dayShortMonthYear":
        return (L) => {
          const T = L instanceof Date ? L : new Date(L);
          return `${T.getDate()}
${S({ month: "short" }).format(T)} ${T.getFullYear()}`;
        };
      case "shortMonth":
        return (L) => {
          const T = L instanceof Date ? L : new Date(L);
          return S({ month: "short" }).format(T);
        };
      case "shortMonthYear":
        return (L) => {
          const T = L instanceof Date ? L : new Date(L);
          return `${S({ month: "short" }).format(T)} ${T.getFullYear()}`;
        };
      case "hourMinute":
        return (L) => {
          const T = L instanceof Date ? L : new Date(L);
          return S({ hour: "2-digit", minute: "2-digit" }).format(T);
        };
      default:
        return;
    }
  }, [P, g]);
  let _ = P ? o : j || ((S) => String(S));
  const B = U.useMemo(() => a && Array.isArray(a) ? a : u ? typeof u.ticks == "function" ? u.ticks(E) : u.domain ? u.domain() : [] : [], [u, E, a]);
  if (e === "x" && !P && !g && B.length && B.every((S) => S instanceof Date)) {
    const S = B[0], L = B[B.length - 1], T = L.getTime() - S.getTime(), C = 24 * 3600 * 1e3, N = 365 * C, x = S.getFullYear() === L.getFullYear(), v = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (T < 2 * C) {
      const R = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      _ = (D) => R.format(D);
    } else if (T < 32 * C)
      _ = (R) => {
        const D = R;
        return `${D.getDate()} ${v.format(D)}`;
      };
    else if (T < N && x)
      _ = (R) => v.format(R);
    else if (T < 2 * N) {
      const R = /* @__PURE__ */ new Set();
      _ = (D) => {
        const $ = D, y = $.getMonth();
        return R.has(y) || R.add(y), `${v.format($)} ${$.getFullYear()}`;
      };
    } else
      _ = (R) => String(R.getFullYear());
  }
  if (!u || !m) return null;
  if (e === "x") {
    const S = i ?? m.innerHeight, L = typeof u.bandwidth == "function", T = L ? u.bandwidth() : 0, C = (v) => {
      const R = u(v);
      return L ? R + T / 2 : R;
    };
    let N = d ?? 0;
    if (f && d == null) {
      const v = B.map((D) => _(D).replace(/\n.*/g, "")), R = v.length ? v.reduce((D, $) => D + $.length, 0) / v.length : 0;
      N = Math.max(12, Math.round(R * 6 + 4));
    }
    const x = U.useMemo(() => {
      if (a && Array.isArray(a) || N <= 0) return B;
      const v = [];
      let R = -1 / 0;
      for (const D of B) {
        const $ = C(D);
        $ - R >= N && (v.push(D), R = $);
      }
      return v;
    }, [B, u, N, a, L, T]);
    return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${S})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ r.jsx("line", { x1: 0, x2: m.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      x.map((v, R) => {
        const D = _(v), $ = c && D.length > c ? D.slice(0, Math.max(1, c - 1)) + "…" : D, y = p ? $.split(/\n/) : [$.replace(/\n/g, " ")], H = h < 0 ? "end" : h > 0 ? "start" : "middle";
        return /* @__PURE__ */ r.jsxs("g", { transform: `translate(${C(v)},0)`, children: [
          /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ r.jsxs("text", { y: 9, textAnchor: H, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: h ? `rotate(${h})` : void 0, fontFamily: "inherit", children: [
            y.map((Q, b) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: b === 0 ? 0 : "1.1em", children: Q }, b)),
            $ !== D && /* @__PURE__ */ r.jsx("title", { children: D })
          ] })
        ] }, v?.toString?.() || R);
      })
    ] });
  }
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    B.map((S, L) => {
      const T = _(S), C = c && T.length > c ? T.slice(0, Math.max(1, c - 1)) + "…" : T, N = p ? C.split(/\n/) : [C.replace(/\n/g, " ")];
      return /* @__PURE__ */ r.jsxs("g", { transform: `translate(0,${u(S)})`, children: [
        /* @__PURE__ */ r.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ r.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          N.map((x, v) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: v === 0 ? 0 : "1.1em", children: x }, v)),
          C !== T && /* @__PURE__ */ r.jsx("title", { children: T })
        ] })
      ] }, S?.toString?.() || L);
    }),
    s && /* @__PURE__ */ r.jsx("text", { transform: "rotate(-90)", x: -m.innerHeight / 2, y: -m.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: s })
  ] });
}, eh = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o
}) => {
  const s = Xt(), i = Bt();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", o].filter(Boolean).join(" "), children: [
    e === "y" && l.map((d, c) => /* @__PURE__ */ r.jsx("line", { x1: 0, x2: i.innerWidth, y1: s.yScale(d), y2: s.yScale(d), stroke: n, strokeDasharray: a }, c)),
    e === "x" && l.map((d, c) => /* @__PURE__ */ r.jsx("line", { y1: 0, y2: i.innerHeight, x1: s.xScale(d), x2: s.xScale(d), stroke: n, strokeDasharray: a }, c))
  ] });
}, th = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, Dn = {
  color: th
}, nh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Ir = {
  color: nh
}, rh = [
  "#005eb8",
  "#0072ce",
  "#41b6e6",
  "#00a499",
  "#7c2855",
  "#330072",
  "#d5281b",
  "#ffb81c",
  "#fae100",
  "#4c6272",
  "#768692",
  "#aeb7bd"
];
let ea = null, ta = null, na = null, wi = "optimized";
function ah() {
  const e = { color: { ...Ir.color, ...Dn.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    if (typeof i == "string" && /^\{.+\}$/.test(i))
      return t(i.slice(1, -1), o);
    if (typeof i == "string") return i;
  }, n = [];
  try {
    for (let a = 1; a <= 12; a++) {
      const o = `color.data-viz.categorical.${a}`, s = t(o);
      if (!s) throw new Error(`Missing token ${o}`);
      n.push(s);
    }
    return n;
  } catch {
    return rh;
  }
}
function sh() {
  return ea || (ea = ah()), ea;
}
function oh(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function ra(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function ih(e, t, n) {
  const a = ra(e), o = ra(t), s = ra(n), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, d = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: d * 100 };
}
function lh(e, t, n) {
  let i = e / 95.047, l = t / 100, d = n / 108.883;
  const c = (f) => f > 8856e-6 ? Math.cbrt(f) : 7.787 * f + 16 / 116;
  return i = c(i), l = c(l), d = c(d), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - d) };
}
function _i(e) {
  const t = oh(e);
  if (!t) return null;
  const n = ih(t.r, t.g, t.b);
  return lh(n.x, n.y, n.z);
}
function yo(e, t) {
  const n = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + a * a + o * o);
}
function ch() {
  const e = sh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => _i(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let d = 0, c = 0;
    for (let h = 0; h < e.length; h++) i !== h && t[h] && (d += yo(l, t[h]), c++);
    const f = d / Math.max(1, c);
    f > a && (a = f, n = i);
  }
  const o = new Set(e.map((i, l) => l)), s = [];
  for (s.push(n), o.delete(n); o.size; ) {
    let i = Array.from(o)[0], l = -1;
    for (const d of o) {
      const c = t[d];
      if (!c) continue;
      let f = 1 / 0;
      for (const h of s) {
        const p = t[h];
        if (p) {
          const g = yo(c, p);
          g < f && (f = g);
        }
      }
      f > l && (l = f, i = d);
    }
    s.push(i), o.delete(i);
  }
  return s.map((i) => e[i]);
}
function dh() {
  return ta || (ta = ch()), ta;
}
function uh(e, t, n) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, i = (f) => {
    const h = f * f * f;
    return h > 8856e-6 ? h : (f - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, d = i(a) * 100, c = i(s) * 108.883;
  return { X: l, Y: d, Z: c };
}
function fh(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, o = e * -0.9689 + t * 1.8758 + n * 0.0415, s = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function hh(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function ph(e, t) {
  const n = _i(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: s, Z: i } = uh(a, n.a, n.b), l = fh(o, s, i);
  return hh(l.r, l.g, l.b);
}
function mh() {
  const e = dh(), n = [12, -12, 24, -24].map((o) => e.map((s) => ph(s, o))), a = [...e];
  return n.forEach((o) => a.push(...o)), a;
}
function gh() {
  return (!na || xh()) && (na = mh(), Si = wi), na;
}
let Si = null;
function xh() {
  return Si !== wi;
}
function pt(e) {
  const t = gh();
  return t[e % t.length];
}
let sn = null, Cn = null, jn = null, Nn = null;
function bh() {
  const e = Dn?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    sn = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      sn.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    Cn = {}, Object.keys(n).forEach((s) => {
      const i = n[s]?.$value || n[s]?.value;
      typeof i == "string" && (Cn[s] = i);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    Nn = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (Nn[s] = i);
    }), jn = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (jn[s] = i);
    });
  }
}
function Lr() {
  (!sn || !Cn || !jn || !Nn) && bh();
}
function Vt(e) {
  return Lr(), sn ? sn[e % sn.length] : "#212b32";
}
function yh(e) {
  return Lr(), Cn ? Cn[e] : void 0;
}
function nr(e, t) {
  return yh(e) || Vt(t);
}
const wa = ["low", "moderate", "high", "critical"];
let aa = null;
function vh() {
  const e = { color: { ...Ir.color, ...Dn.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return wa.forEach((a) => {
    const o = t(`color.data-viz.severity.${a}`);
    o && (n[a] = o);
  }), n;
}
function ki() {
  return aa || (aa = vh()), aa;
}
function wh(e) {
  return ki()[e.toLowerCase()];
}
function _h(e, t) {
  return wh(e) || ki()[wa[t % wa.length]] || pt(t);
}
function Sh(e) {
  return Lr(), jn ? jn[e] : void 0;
}
function kh(e, t) {
  return Sh(e) || Vt(t);
}
const _a = ["trust", "ambulance", "icb", "region"];
let sa = null;
function Ch() {
  const e = { color: { ...Ir.color, ...Dn.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return _a.forEach((a) => {
    const o = t(`color.data-viz.org-level.${a}`);
    o && (n[a] = o);
  }), n;
}
function Ci() {
  return sa || (sa = Ch()), sa;
}
function jh(e) {
  return Ci()[e.toLowerCase()];
}
function Nh(e, t) {
  return jh(e) || Ci()[_a[t % _a.length]] || pt(t);
}
function Th(e) {
  return Lr(), Nn ? Nn[e] : void 0;
}
function $h(e, t) {
  return Th(e) || Vt(t);
}
let oa = null;
const Dh = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function Mh(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Ih() {
  const e = { color: { ...Ir.color, ...Dn.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((d, c) => d ? d[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return Dh.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? n[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function Lh() {
  return oa || (oa = Ih()), oa;
}
function Fh(e) {
  return Lh()[Mh(e)];
}
function on(e, t) {
  return Fh(e) || pt(t);
}
const ji = U.createContext(null), Mn = () => U.useContext(ji), Dx = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [o, s] = U.useState(() => new Set(e)), i = n !== void 0, l = U.useMemo(() => i ? new Set(n) : o, [i, n, o]), d = U.useCallback((f) => {
    i || s(new Set(f)), a?.(Array.from(f));
  }, [i, a]), c = U.useMemo(() => ({
    hiddenIds: l,
    isHidden: (f) => l.has(f),
    toggle: (f) => {
      const h = new Set(l);
      h.has(f) ? h.delete(f) : h.add(f), d(h);
    },
    showOnly: (f) => {
      d(/* @__PURE__ */ new Set());
    },
    showAll: () => d(/* @__PURE__ */ new Set()),
    setHidden: (f) => d(new Set(Array.isArray(f) ? f : Array.from(f)))
  }), [l, d]);
  return /* @__PURE__ */ r.jsx(ji.Provider, { value: c, children: t });
}, Ni = U.createContext(null), Et = () => U.useContext(Ni), Ah = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Xt(), o = Mn(), [s, i] = U.useState(null), l = U.useRef(/* @__PURE__ */ new Map()), [d, c] = U.useState([]), f = U.useCallback(
    (L, T) => {
      l.current.set(L, T);
    },
    []
  ), h = U.useCallback((L) => {
    l.current.delete(L);
  }, []), p = U.useCallback(
    (L, T) => {
      if (!a) return;
      const { xScale: C, yScale: N } = a;
      let x = null, v = 1 / 0;
      l.current.forEach((R, D) => {
        R.forEach(($, y) => {
          const H = C($.x), Q = N($.y), b = H - L, w = Q - T, A = Math.sqrt(b * b + w * w);
          A < v && (v = A, x = {
            seriesId: D,
            index: y,
            x: $.x,
            y: $.y,
            clientX: H,
            clientY: Q
          });
        });
      }), x && v <= t ? i(x) : i(null);
    },
    [a, t]
  ), g = U.useCallback(() => i(null), []);
  U.useEffect(() => {
    if (!s) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: L, yScale: T } = a, C = [];
    l.current.forEach((N, x) => {
      N.forEach((v, R) => {
        (s.x instanceof Date && v.x instanceof Date ? v.x.getTime() === s.x.getTime() : v.x === s.x) && C.push({
          seriesId: x,
          index: R,
          x: v.x,
          y: v.y,
          clientX: L(v.x),
          clientY: T(v.y)
        });
      });
    }), C.sort((N, x) => N.seriesId.localeCompare(x.seriesId)), c(C);
  }, [s, a]);
  const M = U.useCallback(
    (L) => {
      if (!s) return;
      const T = l.current.get(s.seriesId);
      if (!T) return;
      let C = s.index + L;
      if (C < 0 || C >= T.length) {
        if (!n) return;
        C = (C + T.length) % T.length;
      }
      const N = T[C];
      if (!a) return;
      const { xScale: x, yScale: v } = a;
      i({
        seriesId: s.seriesId,
        index: C,
        x: N.x,
        y: N.y,
        clientX: x(N.x),
        clientY: v(N.y)
      });
    },
    [s, a, n]
  ), m = U.useCallback(
    (L) => {
      let T = Array.from(l.current.keys());
      if (o && (T = T.filter((H) => !o.isHidden(H))), T.length === 0) return;
      if (!s) {
        const H = T[0], Q = l.current.get(H);
        if (!Q || !a) return;
        const { xScale: b, yScale: w } = a, A = Q[0];
        i({
          seriesId: H,
          index: 0,
          x: A.x,
          y: A.y,
          clientX: b(A.x),
          clientY: w(A.y)
        });
        return;
      }
      const C = T.indexOf(s.seriesId);
      if (C === -1) return;
      let N = C + L;
      if (N < 0 || N >= T.length) {
        if (!n) return;
        N = (N + T.length) % T.length;
      }
      const x = T[N], v = l.current.get(x);
      if (!v || !a) return;
      const R = Math.min(s.index, v.length - 1), D = v[R], { xScale: $, yScale: y } = a;
      i({
        seriesId: x,
        index: R,
        x: D.x,
        y: D.y,
        clientX: $(D.x),
        clientY: y(D.y)
      });
    },
    [s, a, n, o]
  ), u = U.useCallback(() => {
    let L = Array.from(l.current.keys());
    if (o && (L = L.filter((R) => !o.isHidden(R))), L.length === 0) return;
    const T = s ? s.seriesId : L[0], C = l.current.get(T);
    if (!C || C.length === 0 || !a) return;
    const N = C[0], { xScale: x, yScale: v } = a;
    i({
      seriesId: T,
      index: 0,
      x: N.x,
      y: N.y,
      clientX: x(N.x),
      clientY: v(N.y)
    });
  }, [s, a, o]), E = U.useCallback(() => {
    let L = Array.from(l.current.keys());
    if (o && (L = L.filter((D) => !o.isHidden(D))), L.length === 0) return;
    const T = s ? s.seriesId : L[0], C = l.current.get(T);
    if (!C || C.length === 0 || !a) return;
    const N = C.length - 1, x = C[N], { xScale: v, yScale: R } = a;
    i({
      seriesId: T,
      index: N,
      x: x.x,
      y: x.y,
      clientX: v(x.x),
      clientY: R(x.y)
    });
  }, [s, a, o]), P = U.useCallback(
    () => M(1),
    [M]
  ), j = U.useCallback(
    () => M(-1),
    [M]
  ), _ = U.useCallback(
    () => m(1),
    [m]
  ), B = U.useCallback(
    () => m(-1),
    [m]
  ), S = U.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: d,
      focusNearest: p,
      clear: g,
      registerSeries: f,
      unregisterSeries: h,
      focusNextPoint: P,
      focusPrevPoint: j,
      focusNextSeries: _,
      focusPrevSeries: B,
      focusFirstPoint: u,
      focusLastPoint: E
    }),
    [
      s,
      d,
      p,
      g,
      f,
      h,
      P,
      j,
      _,
      B,
      u,
      E
    ]
  );
  return /* @__PURE__ */ r.jsx(Ni.Provider, { value: S, children: e });
}, Bh = ({
  series: e,
  seriesIndex: t,
  palette: n,
  showPoints: a,
  focusablePoints: o,
  focusIndex: s,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: d = 1,
  smooth: c = !0,
  gradientFillId: f,
  colors: h
}) => {
  const p = Xt();
  if (!p) return null;
  const { xScale: g, yScale: M } = p, u = Mn()?.isHidden(e.id) ?? !1, E = u && l === "fade";
  if (u && l === "remove")
    return null;
  const P = Et();
  U.useEffect(() => {
    if (!P) return;
    const T = e.data.map((C) => ({ x: i(C), y: C.y }));
    return P.registerSeries(e.id, T), () => P.unregisterSeries(e.id);
  }, [P, e.id, e.data, i]);
  const j = U.useMemo(
    () => va(
      e.data,
      (T) => g(i(T)),
      (T) => M(T.y),
      { smooth: c }
    ),
    [e.data, g, M, i, c]
  ), _ = U.useMemo(() => {
    if (!e.data.length) return "";
    const [T] = M.domain(), C = ya().x((N) => g(i(N))).y0(() => M(T)).y1((N) => M(N.y));
    return c && C.curve(tr), C(e.data) || "";
  }, [e.data, g, M, i, c]), B = h && h[t], S = e.color || B || (n === "region" ? on(e.id, t) : pt(t)), L = n === "region" ? nr(e.id, t) : Vt(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: E ? 0.25 : 1,
      "aria-hidden": E ? !0 : void 0,
      children: [
        f && /* @__PURE__ */ r.jsx(
          "path",
          {
            d: _,
            fill: `url(#${f})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: j,
            fill: "none",
            stroke: S,
            strokeWidth: d,
            role: "presentation"
          }
        ),
        a && e.data.map((T, C) => {
          const N = g(i(T)), x = M(T.y), v = o ? 0 : -1, R = !E && (o && C === s || P?.focused?.seriesId === e.id && P.focused.index === C), D = () => {
            P && !E && P.setFocused({
              seriesId: e.id,
              index: C,
              x: i(T),
              y: T.y,
              clientX: N,
              clientY: x
            });
          }, $ = () => {
            P && P.focused?.seriesId === e.id && P.focused.index === C && P.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: N,
              cy: x,
              r: R ? 5 : 3.5,
              stroke: R ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : L,
              strokeWidth: R ? 2 : 1,
              fill: R ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : S,
              className: "fdp-line-point",
              tabIndex: E ? -1 : v,
              "aria-label": `${e.label || e.id} ${i(T).toDateString()} value ${T.y}`,
              "data-series": e.id,
              "data-index": C,
              onMouseEnter: D,
              onFocus: D,
              onMouseLeave: $,
              onBlur: $
            },
            C
          );
        })
      ]
    }
  );
}, Eh = ({ polite: e = !0, format: t }) => {
  const n = Et(), [a, o] = U.useState(""), s = U.useRef("");
  return U.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let d;
    if (l && l.length > 1) {
      const c = l.map((h) => `${h.seriesId} ${h.y}`).join("; ");
      d = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      d = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : Ph(i.seriesId, i.x, i.y, i.index);
    if (d !== s.current) {
      s.current = d, o("");
      const c = setTimeout(() => o(d), 10);
      return () => clearTimeout(c);
    }
  }, [n?.focused, t]), /* @__PURE__ */ r.jsx(
    "div",
    {
      "aria-live": e ? "polite" : "assertive",
      "aria-atomic": "true",
      style: { position: "absolute", width: 1, height: 1, margin: -1, padding: 0, overflow: "hidden", clip: "rect(0 0 0 0)", border: 0 },
      children: a
    }
  );
};
function Ph(e, t, n, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${n}`;
}
const Mx = () => {
  const e = Et(), t = Bt();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(n.clientX, 0), o), l = Math.min(Math.max(n.clientY, 0), s), d = i + 8, c = l - 8, f = a.length > 1, h = n.x instanceof Date ? n.x.toDateString() : String(n.x), p = f ? h : `${h} • ${n.y}`, g = /\d+$/.exec(n.seriesId || ""), M = g ? parseInt(g[0], 10) - 1 : 0, m = pt(M >= 0 ? M : 0) || "#005eb8", u = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: u, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: u, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: m, stroke: "#fff", strokeWidth: 0.5 }),
    f ? (() => {
      const P = a.map((L) => `${L.seriesId}: ${L.y}`), j = [p, ...P], _ = j.reduce((L, T) => Math.max(L, T.length), 0), B = Math.max(90, _ * 6.2 + 16), S = 16 * j.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: d, y: c - S, rx: 4, ry: 4, width: B, height: S, fill: "#212b32", opacity: 0.92 }),
        j.map((L, T) => /* @__PURE__ */ r.jsx("text", { x: d + 8, y: c - S + 6 + 16 * (T + 0.7), fill: "#fff", fontSize: 12, children: L }, T))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: d, y: c - 24, rx: 4, ry: 4, width: Math.max(60, p.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: d + 8, y: c - 8, fill: "#fff", fontSize: 12, children: p })
    ] })
  ] });
}, Ix = ({
  items: e,
  palette: t = "categorical",
  direction: n = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: o = !0,
  hiddenIds: s,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: d
}) => {
  const c = Mn(), f = !!(c && !a && !l && s === void 0), h = a || f, p = e || [], g = s !== void 0, [M, m] = U.useState(new Set(i)), u = g ? new Set(s) : M, [E, P] = U.useState(""), j = (_) => {
    if (f && c) {
      const v = c.isHidden(_);
      c.toggle(_);
      const D = p.find((y) => y.id === _)?.label || _, $ = d ? d(_, v, D) : `${D} ${v ? "shown" : "hidden"}`;
      P($);
      return;
    }
    if (!h) return;
    const B = new Set(u), S = B.has(_);
    S ? B.delete(_) : B.add(_), g || m(B);
    const L = p.filter((v) => !B.has(v.id)).map((v) => v.id), T = Array.from(B);
    l?.(L, T);
    const N = p.find((v) => v.id === _)?.label || _, x = d ? d(_, S, N) : `${N} ${S ? "shown" : "hidden"}`;
    P(x);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: p.map((_, B) => {
      const S = _.palette || t, L = _.color || (S === "region" ? on(_.id, B) : S === "severity" ? _h(_.id, B) : S === "org-level" ? Nh(_.id, B) : pt(B));
      let T = _.stroke || (S === "region" ? nr(_.id, B) : S === "severity" ? kh(_.id, B) : S === "org-level" ? $h(_.id, B) : Vt(B));
      if (o && T) {
        const x = T.trim().toLowerCase();
        (x === "#fff" || x === "#ffffff" || x === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(x)) && (T = "#212b32");
      }
      const C = f && c ? c.isHidden(_.id) : u.has(_.id), N = h ? {
        "aria-pressed": !C,
        "aria-label": `${_.label} (${C ? "show" : "hide"})`,
        onClick: () => j(_.id)
      } : { "aria-label": _.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${C ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: L,
              backgroundImage: _.patternDataUrl ? `url(${_.patternDataUrl})` : void 0,
              backgroundSize: _.patternDataUrl ? "auto" : void 0,
              borderColor: T
            },
            ...N
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: _.label })
      ] }, _.id);
    }) }),
    h && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: E })
  ] });
}, Lx = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: a,
  areaOnly: o = !1,
  visibilityMode: s = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: d,
  gradientFill: c = !0,
  colors: f
}) => {
  const h = Xt();
  if (!h) return null;
  const { xScale: p, yScale: g } = h, m = Mn()?.isHidden(e.id) ?? !1, u = m && s === "fade";
  if (m && s === "remove") return null;
  const E = Et();
  U.useEffect(() => {
    if (!E) return;
    const L = e.data.map((T) => ({ x: a(T), y: T.y }));
    return E.registerSeries(e.id, L), () => E.unregisterSeries(e.id);
  }, [E, e.id, e.data, a]);
  const P = f && f[t], j = e.color || P || (n === "region" ? on(e.id, t) : pt(t)), _ = U.useMemo(() => d && d.length === e.data.length ? va(
    e.data,
    (L) => p(a(L)),
    (L) => {
      const T = e.data.indexOf(L);
      return g(d[T].y1);
    },
    { smooth: l }
  ) : va(
    e.data,
    (L) => p(a(L)),
    (L) => g(L.y),
    { smooth: l }
  ), [e.data, d, p, g, a, l]), B = U.useMemo(() => {
    if (d && d.length === e.data.length) {
      const x = ya().x((v) => p(a(v))).y0((v, R) => g(d[R].y0)).y1((v, R) => g(d[R].y1));
      return l && x.curve(tr), x(e.data) || "";
    }
    const [L, T] = g.domain();
    let C = i;
    C < L ? C = L : C > T && (C = T);
    const N = ya().x((x) => p(a(x))).y0(() => g(C)).y1((x) => g(x.y));
    return l && N.curve(tr), N(e.data) || "";
  }, [e.data, d, p, g, a, i, l]), S = U.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: u ? 0.25 : 1,
      "aria-hidden": u ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: S, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: j, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: j, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: B,
            fill: c ? `url(#${S})` : j,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ r.jsx("path", { d: _, fill: "none", stroke: j, strokeWidth: 1 })
      ]
    }
  );
}, Fx = ({
  series: e,
  seriesIndex: t,
  seriesCount: n,
  palette: a,
  parseX: o,
  focusable: s = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: d,
  adaptive: c = !1,
  adaptiveGroupOccupancy: f = 0.9,
  visibilityMode: h = "remove",
  colorMode: p = "series",
  allSeries: g,
  stacked: M,
  gapRatio: m = 0.15,
  minBarWidth: u,
  gradientFill: E = !0,
  gradientStrokeMatch: P = !0,
  opacity: j = 1,
  fadedOpacity: _ = 0.25,
  flatFillOpacity: B = 1,
  colors: S
}) => {
  const L = Math.max(0, m), T = Xt(), C = Bt();
  if (!T || !C) return null;
  const { xScale: N, yScale: x } = T, R = Mn()?.isHidden(e.id) ?? !1, D = R && h === "fade";
  if (R && h === "remove") return null;
  const $ = Et();
  U.useEffect(() => {
    if (!$) return;
    const G = e.data.map((W) => ({ x: o(W), y: W.y }));
    return $.registerSeries(e.id, G), () => $.unregisterSeries(e.id);
  }, [$, e.id, e.data, o]);
  const y = typeof N.bandwidth == "function", H = y ? N.bandwidth() : void 0, Q = U.useMemo(() => {
    if (H != null) return H;
    const G = g && g.length ? g : [e], W = [];
    G.forEach((Y) => {
      Y.data.forEach((ie) => {
        const le = N(o(ie));
        Number.isFinite(le) && W.push(le);
      });
    });
    const re = W.sort((Y, ie) => Y - ie);
    if (re.length <= 1) return 40;
    const z = [];
    for (let Y = 1; Y < re.length; Y++)
      z.push(re[Y] - re[Y - 1]);
    return z.sort((Y, ie) => Y - ie), (z[Math.floor(z.length / 2)] || 40) * i;
  }, [e.data, g, N, o, i, H]), { basePerBar: b } = U.useMemo(() => {
    if (y) {
      const re = Q, z = Math.max(
        1,
        (re - l * (n - 1)) / n
      ), oe = e.barWidth ?? d;
      let Y = oe ? Math.min(oe, re) : z;
      if (c) {
        const ie = re * Math.min(1, Math.max(0.05, f)), le = Math.max(
          1,
          (ie - l * (n - 1)) / n
        );
        Y = oe ? Math.min(Y, le) : le;
      }
      return { basePerBar: Y };
    }
    const G = e.barWidth ?? d, W = Math.max(
      1,
      (Q - l * (n - 1)) / n
    );
    if (c) {
      const re = g && g.length ? g : [e], z = [];
      re.forEach(
        (Ce) => Ce.data.forEach((Ne) => {
          const Te = N(o(Ne));
          Number.isFinite(Te) && z.push(Te);
        })
      ), z.sort((Ce, Ne) => Ce - Ne);
      const oe = [];
      for (let Ce = 1; Ce < z.length; Ce++)
        oe.push(z[Ce] - z[Ce - 1]);
      oe.sort((Ce, Ne) => Ce - Ne);
      const ie = (oe[Math.floor(oe.length / 2)] || Q) * Math.min(1, Math.max(0.05, f)), le = Math.max(
        1,
        (ie - l * (n - 1)) / n
      );
      return { basePerBar: G ? Math.min(G, le) : le };
    }
    return G ? { basePerBar: Math.min(G, W) } : { basePerBar: W };
  }, [
    y,
    Q,
    l,
    n,
    d,
    e.barWidth,
    c,
    f,
    g,
    N,
    o
  ]), w = U.useMemo(() => {
    if (y) return [];
    const G = [];
    return (g && g.length ? g : [e]).forEach(
      (re) => re.data.forEach((z) => {
        const oe = N(o(z));
        Number.isFinite(oe) && G.push(oe);
      })
    ), G.sort((re, z) => re - z), Array.from(new Set(G));
  }, [y, g, e, N, o]), A = U.useMemo(() => {
    if (y)
      return [];
    if (!w.length) return [];
    if (w.length === 1)
      return [
        { center: w[0], left: 0, right: C.innerWidth }
      ];
    const G = [];
    for (let W = 0; W < w.length; W++) {
      const re = w[W], z = W === 0 ? 0 : (w[W - 1] + re) / 2, oe = W === w.length - 1 ? C.innerWidth : (re + w[W + 1]) / 2;
      G.push({
        center: re,
        left: Math.max(0, z),
        right: Math.min(C.innerWidth, oe)
      });
    }
    return G;
  }, [y, w, C.innerWidth]), k = U.useMemo(() => {
    if (y || !A.length)
      return;
    const G = Math.min(1, Math.max(0.05, i)), W = A.map((ie) => Math.max(2, ie.right - ie.left)), re = W.map(
      (ie) => Math.max(2, Math.min(ie - 1, ie * G))
    );
    let z = Math.min(...re);
    if (u)
      if (n <= 1) {
        const ie = Math.min(...W.map((le) => le - 1));
        ie >= u && z < u && (z = Math.min(ie, u));
      } else {
        const ie = Math.min(...W.map((xe) => xe - 1)), le = u * n + (n - 1) * (u * L);
        le <= ie && z < le && (z = le);
      }
    if (n <= 1)
      return u && z < u && W.every((le) => le >= u) ? { groupWidth: u, barWidth: u } : { groupWidth: z, barWidth: z };
    let oe = z / (n + (n - 1) * L);
    return oe < 1 && (oe = 1), u && oe < u && u * n + (n - 1) * (u * L) <= z && (oe = u), { groupWidth: oe * n + (n - 1) * (oe * L), barWidth: oe };
  }, [
    y,
    A,
    i,
    n,
    L,
    u
  ]), O = S && S[t] ? S[t] : void 0, I = e.color || O || (a === "region" ? on(e.id, t) : pt(t)), J = a === "region" ? nr(e.id, t) : Vt(t), ue = P && (e.color || O) ? I : J, ce = Number.isFinite(x(0)) ? x(0) : x.range()[0], Z = U.useId();
  return M && M.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: D ? _ : j,
      "aria-hidden": D ? !0 : void 0,
      children: [
        E && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: Z,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: I, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: I,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: I,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((G, W) => {
          const re = o(G), z = N(y ? G.x : re);
          let oe, Y;
          if (y)
            oe = Q, Y = z;
          else {
            const te = A.find(
              (ee) => Math.abs(ee.center - z) < 0.5
            );
            if (!te || !k)
              oe = b, Y = z - b / 2;
            else {
              const { groupWidth: ee } = k;
              oe = ee;
              let F = z - ee / 2;
              F < te.left && (F = te.left), F + ee > te.right && (F = Math.max(te.left, te.right - ee)), Y = F;
            }
          }
          const ie = M[W], le = x(ie.y0), xe = x(ie.y1), Ce = Math.min(le, xe), Ne = Math.abs(xe - le) || 1;
          if (!y && u && oe < u) {
            const te = A.find(
              (ee) => Math.abs(ee.center - z) < 0.5
            );
            if (te) {
              const ee = Math.max(2, te.right - te.left - 1), F = Math.min(ee, u);
              F > oe && (oe = F, Y = Math.max(
                te.left,
                Math.min(te.right - oe, z - oe / 2)
              ));
            }
          }
          const Te = !D && $?.focused?.seriesId === e.id && $.focused.index === W, X = () => {
            !$ || D || $.setFocused({
              seriesId: e.id,
              index: W,
              x: re,
              y: ie.y1 - ie.y0,
              clientX: Y + oe / 2,
              clientY: Ce
            });
          }, q = () => {
            $?.focused?.seriesId === e.id && $.focused.index === W && $.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: Y,
              y: Ce,
              width: oe,
              height: Ne,
              fill: E ? `url(#${Z})` : I,
              ...E ? {} : { fillOpacity: B },
              stroke: Te ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : E && P ? I : void 0,
              strokeWidth: Te ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: D || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${re instanceof Date ? re.toDateString() : re} value ${ie.y1 - ie.y0}`,
              onMouseEnter: X,
              onFocus: X,
              onMouseLeave: q,
              onBlur: q
            },
            W
          );
        })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: D ? _ : j,
      "aria-hidden": D ? !0 : void 0,
      children: [
        E && /* @__PURE__ */ r.jsxs("defs", { children: [
          p === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: Z,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: I, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: I,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: I,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          p === "category" && e.data.map((G, W) => {
            const z = S && S[W] || (a === "region" ? on(String(G.x), W) : pt(W)), oe = `${Z}-${W}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: oe,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: z, stopOpacity: 0.3 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: z, stopOpacity: 0.14 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: z, stopOpacity: 0.06 })
                ]
              },
              oe
            );
          })
        ] }),
        e.data.map((G, W) => {
          const re = o(G), z = N(y ? G.x : re);
          let oe, Y;
          if (y) {
            const ae = Q;
            if (n <= 1)
              Y = ae, oe = z;
            else {
              Y = Math.max(
                1,
                ae / (n + (n - 1) * L)
              );
              const ne = Y * L, K = Y * n + ne * (n - 1);
              oe = z + (ae - K) / 2 + t * (Y + ne);
            }
          } else {
            const ae = A.find((ne) => ne.center === z);
            if (!ae || !k)
              Y = b, oe = z - b / 2, u && Y < u && (Y = u, oe = z - Y / 2);
            else {
              const { barWidth: ne } = k;
              Y = ne;
              const K = n > 1 ? ne * L : 0, se = Y * n + K * (n - 1);
              let ye = z - se / 2;
              ye < ae.left && (ye = ae.left), ye + se > ae.right && (ye = Math.max(ae.left, ae.right - se)), oe = ye + t * (Y + K);
            }
            if (u && Y < u) {
              const ne = A.find(
                (K) => Math.abs(K.center - z) < 0.5
              );
              if (ne) {
                const K = Math.max(2, ne.right - ne.left - 1), se = Math.min(K, u);
                if (se > Y)
                  if (n <= 1)
                    Y = se, oe = Math.max(
                      ne.left,
                      Math.min(ne.right - Y, z - Y / 2)
                    );
                  else {
                    const ye = se * L, ve = se * n + ye * (n - 1);
                    if (ve <= ne.right - ne.left - 1) {
                      Y = se;
                      const ke = ve;
                      let Se = z - ke / 2;
                      Se < ne.left && (Se = ne.left), Se + ke > ne.right && (Se = Math.max(
                        ne.left,
                        ne.right - ke
                      )), oe = Se + t * (Y + ye);
                    }
                  }
              }
            }
          }
          const ie = oe + Y / 2, le = x(G.y), xe = Math.min(ce, le), Ce = Math.abs(ce - le), Ne = !D && $?.focused?.seriesId === e.id && $.focused.index === W, Te = () => {
            !$ || D || $.setFocused({
              seriesId: e.id,
              index: W,
              x: re,
              y: G.y,
              clientX: ie,
              clientY: le
            });
          }, X = () => {
            $?.focused?.seriesId === e.id && $.focused.index === W && $.clear();
          }, q = p === "category" && S ? S[W] : void 0, te = p === "category" ? q || (a === "region" ? on(String(G.x), W) : pt(W)) : I, ee = p === "category" ? `${Z}-${W}` : Z, F = E && P ? te : p === "category" ? a === "region" ? nr(String(G.x), W) : Vt(W) : ue, V = Ne ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : F || te;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: oe,
              y: xe,
              width: Y,
              height: Ce || 1,
              fill: E ? `url(#${ee})` : te,
              ...E ? {} : { fillOpacity: B },
              stroke: V,
              strokeWidth: Ne ? 2 : 1,
              className: "fdp-bar",
              tabIndex: D || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${re instanceof Date ? re.toDateString() : re} value ${G.y}`,
              onMouseEnter: Te,
              onFocus: Te,
              onMouseLeave: X,
              onBlur: X
            },
            W
          );
        })
      ]
    }
  );
}, Ax = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: o = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = Bt(), d = t ?? l?.innerWidth ?? 0, c = n ?? l?.innerHeight ?? 0, f = U.useMemo(() => e.flatMap((u) => u.data), [e]), h = U.useMemo(() => {
    const u = /* @__PURE__ */ new Set();
    return f.forEach((E) => u.add(E.x)), Array.from(u);
  }, [f]), p = U.useMemo(
    () => Math.max(0, ...f.map((u) => u.y)),
    [f]
  ), g = U.useMemo(
    () => Ao().domain(h).range([0, d]).paddingInner(a).paddingOuter(o),
    [h, d, a, o]
  ), M = U.useMemo(
    () => qn().domain([0, p]).nice().range([c, 0]),
    [p, c]
  ), m = U.useMemo(
    () => ({
      xScale: g,
      yScale: M,
      getXTicks: () => h,
      getYTicks: (u = i) => M.ticks(u)
    }),
    [g, M, h, i]
  );
  return /* @__PURE__ */ r.jsx(is.Provider, { value: m, children: s });
}, Bx = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: o,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const d = U.useId(), c = s || d, f = t ? `${c}-desc` : void 0, h = n ? `${c}-src` : void 0, p = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: c,
      className: Qn("fdp-chart fdp-chart--noscript", o),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": Qn(f, h),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: f, className: "fdp-chart__description", children: t }),
        !p && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(to, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(to, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: h, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, Ex = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const o = U.useRef(null);
  return U.useEffect(() => {
    const s = o.current;
    if (!s) return;
    const i = () => {
      const l = Array.from(s.querySelectorAll(e));
      if (l.length === 0) return;
      const d = [];
      l.forEach((c) => {
        c.classList.contains("fdp-chart--enhanced") || (c.classList.add("fdp-chart--enhanced"), d.push(c));
      }), d.length && t && t(d);
    };
    if (n > 0) {
      const l = window.setTimeout(i, n);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: o, children: a });
}, Px = ({
  label: e,
  value: t,
  unit: n,
  delta: a,
  status: o = "neutral",
  variant: s = "default",
  subtitle: i,
  metadata: l,
  trendData: d,
  loading: c = !1,
  error: f,
  valueFormatter: h,
  className: p,
  id: g,
  announceDelta: M = !0
}) => {
  const m = U.useId(), u = g || m, E = `${u}-label`, P = `${u}-value`, j = `${u}-delta`, _ = typeof t == "number" && !Number.isNaN(t), B = c ? "—" : f ? "" : _ ? h ? h(t) : t.toLocaleString() : t;
  let S, L = "", T = "";
  if (a && !c && !f) {
    S = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const C = Math.abs(a.value), N = S === "up" ? `+${C}` : S === "down" ? `-${C}` : "0", x = a.isPercent ? "%" : "";
    if (L = `${N}${x}`, a.ariaLabel)
      T = a.ariaLabel;
    else {
      const v = a.invert ? S === "down" : S === "up";
      T = `${S === "neutral" ? "no change" : S === "up" ? "up" : "down"} ${C}${x}${S === "neutral" ? "" : v ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Qn(
        "fdp-metric-card",
        s && `fdp-metric-card--${s}`,
        o && `fdp-metric-card--status-${o}`,
        c && "fdp-metric-card--loading",
        f && "fdp-metric-card--error",
        p
      ),
      role: "group",
      "aria-labelledby": E,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: E, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: P, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : f ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: f }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: B }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !c && !f && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !f && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: j,
              "aria-label": T,
              className: Qn(
                "fdp-metric-card__delta",
                S && `fdp-metric-card__delta--${S}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: L }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          d && d.length > 0 && !c && !f && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        M && a && !a.ariaLabel && !c && !f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: T })
      ] })
    }
  );
};
var zt = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(zt || {}), Ge = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.None = "none", e))(Ge || {}), At = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(At || {});
const me = (e) => typeof e == "number" && Number.isFinite(e), Rh = (e) => e.reduce((t, n) => t + n, 0), ft = (e) => e.length ? Rh(e) / e.length : NaN;
function Hh(e) {
  const t = [];
  let n = [];
  for (const a of e)
    a.baseline && n.length && (t.push(n), n = []), n.push(a);
  return n.length && t.push(n), t;
}
function zh(e, t, n) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const o = e.map((f, h) => ({ idx: h, value: f.value })).filter((f) => me(f.value));
  if (o.length < a * 2) return;
  const s = n === "Up" || n === "Neither", i = n === "Down";
  function l(f, h) {
    const p = o.slice(f, h).map((g) => g.value);
    return p.length ? ft(p) : NaN;
  }
  let d = null;
  if (o.length > 1) {
    const f = [];
    for (let p = 1; p < o.length; p++) f.push(Math.abs(o[p].value - o[p - 1].value));
    const h = ft(f);
    me(h) && h > 0 && (d = h * (2.66 / 3));
  }
  if (!d || d <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let f = a; f <= o.length - a; f++) {
    const h = f - a, p = l(h, f), g = l(f, f + a);
    if (!me(p) || !me(g)) continue;
    const m = (g - p) / d;
    if (!(s ? m >= c : i ? -m >= c : Math.abs(m) >= c)) continue;
    const E = o.slice(f, f + a).map((_) => _.value);
    if (!(s ? E.every((_) => _ > p) : i ? E.every((_) => _ < p) : E.every((_) => s ? _ > p : _ < p))) continue;
    const j = o[f].idx;
    e[j].baseline || (e[j].baseline = !0);
    return;
  }
}
function Ti(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!t[o] && me(s)) {
      if (a !== null) {
        const i = e[a];
        n[o] = me(i) ? Math.abs(s - i) : null;
      }
      a = o;
    }
  }
  return n;
}
function $i(e, t) {
  const n = e.filter((s) => me(s));
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = ft(n), o = 3.267 * a;
  if (t) {
    const s = n.filter((i) => i <= o);
    s.length && s.length !== n.length && (a = ft(s), o = 3.267 * a);
  }
  return { mrMean: a, mrUcl: o };
}
function Wh(e, t) {
  if (!me(e) || !me(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = 2.66, a = 2 / 3 * n, o = 1 / 3 * n;
  return {
    upperProcessLimit: e + n * t,
    lowerProcessLimit: e - n * t,
    upperTwoSigma: e + a * t,
    lowerTwoSigma: e - a * t,
    upperOneSigma: e + o * t,
    lowerOneSigma: e - o * t
  };
}
const Oh = 0.2777, Uh = 3.6, Gh = (e) => me(e) && e >= 0 ? Math.pow(e, Oh) : null, Rt = (e) => me(e) && e >= 0 ? Math.pow(e, Uh) : null, en = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function Yh(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
function Vh(e) {
  if (!me(e) || e < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null
    };
  const t = 1 / (e + 1), n = (f) => Yh(f, t) - 1, a = n(0.5), o = Math.max(0, n(en.three.low)), s = n(en.three.high), i = Math.max(0, n(en.one.low)), l = n(en.one.high), d = Math.max(0, n(en.two.low)), c = n(en.two.high);
  return {
    cl: a,
    lcl: o,
    ucl: s,
    oneLow: i,
    oneHigh: l,
    twoLow: d,
    twoHigh: c
  };
}
function qh(e, t, n) {
  const a = e.map((T) => me(T) ? Gh(T) : null), o = Ti(a, t), {
    mrMean: s
    /*, mrUcl: _mrUclY_raw*/
  } = $i(o, !!n), i = a.filter((T, C) => !t[C] && me(T)), l = i.length ? ft(i) : NaN;
  if (!me(l) || !me(s))
    return {
      center: null,
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null,
      mr: o,
      mrMean: null,
      mrUcl: null
    };
  const d = 2.66, c = 2 / 3 * d, f = 1 / 3 * d, h = l + d * s, p = l - d * s, g = l + c * s, M = l - c * s, m = l + f * s, u = l - f * s, E = Rt(l), P = Rt(h), j = p <= 0 ? null : Rt(p), _ = Rt(m), B = u <= 0 ? null : Rt(u), S = Rt(g), L = M <= 0 ? null : Rt(M);
  return {
    center: E ?? null,
    upperProcessLimit: P ?? null,
    lowerProcessLimit: j ?? null,
    upperTwoSigma: S ?? null,
    lowerTwoSigma: L ?? null,
    upperOneSigma: _ ?? null,
    lowerOneSigma: B ?? null,
    mr: o,
    mrMean: s,
    mrUcl: me(s) ? 3.267 * s : null
  };
}
function Di(e) {
  const {
    chartType: t,
    metricImprovement: n,
    data: a,
    settings: o = {}
  } = e, s = {
    excludeMovingRangeOutliers: !1,
    specialCauseShiftPoints: 6,
    specialCauseTrendPoints: 6,
    enableFourOfFiveRule: !1,
    minimumPoints: 13,
    minimumPointsWarning: !1,
    minimumPointsPartition: 12,
    maximumPointsPartition: null,
    maximumPoints: null,
    variationIconConflictWarning: !0,
    nullValueWarning: !0,
    targetSuppressedWarning: !0,
    ghostOnRareEventWarning: !0,
    partitionSizeWarnings: !0,
    baselineSpecialCauseWarning: !0,
    maximumPointsWarnings: !0,
    assuranceCapabilityMode: !0,
    collapseClusterRules: !0,
    baselineSuggest: !1,
    baselineSuggestMinDeltaSigma: 0.5,
    baselineSuggestStabilityPoints: 5,
    baselineSuggestMinGap: 12,
    baselineSuggestScoreThreshold: 50,
    ...o
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const i = a.map((m, u) => ({
    rowId: u + 1,
    x: m.x,
    value: me(m.value) ? m.value : null,
    ghost: !!m.ghost,
    baseline: !!m.baseline,
    target: me(m.target) ? m.target : null
  }));
  if (o?.autoRecalculateAfterShift)
    try {
      zh(i, o, n);
    } catch {
    }
  const l = Hh(i), d = [], c = [], h = i.filter(
    (m) => !m.ghost && me(m.value)
  ).length >= (s.minimumPoints ?? 13);
  let p = 0;
  const g = {};
  for (const m of l) {
    p++;
    const u = m.map((x) => x.value), E = m.map((x) => x.ghost);
    let P = new Array(u.length).fill(null), j = NaN, _ = NaN, B = NaN, S = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      P = Ti(u, E);
      const x = u.filter(
        (R, D) => !E[D] && me(R)
      );
      j = x.length ? ft(x) : NaN;
      const v = $i(
        P,
        !!s.excludeMovingRangeOutliers
      );
      _ = v.mrMean, B = v.mrUcl, S = Wh(j, _);
    } else if (t === "T") {
      const x = qh(
        u,
        E,
        !!s.excludeMovingRangeOutliers
      );
      P = x.mr, _ = x.mrMean ?? NaN, B = x.mrUcl ?? NaN, j = x.center ?? NaN, S = {
        upperProcessLimit: x.upperProcessLimit,
        lowerProcessLimit: x.lowerProcessLimit,
        upperTwoSigma: x.upperTwoSigma,
        lowerTwoSigma: x.lowerTwoSigma,
        upperOneSigma: x.upperOneSigma,
        lowerOneSigma: x.lowerOneSigma
      };
    } else if (t === "G") {
      const x = u.filter(
        (D, $) => !E[$] && me(D)
      ), v = x.length ? ft(x) : NaN, R = Vh(v);
      j = R.cl ?? NaN, S = {
        upperProcessLimit: R.ucl,
        lowerProcessLimit: R.lcl,
        upperTwoSigma: R.twoHigh,
        lowerTwoSigma: R.twoLow,
        upperOneSigma: R.oneHigh,
        lowerOneSigma: R.oneLow
      }, P = new Array(u.length).fill(null), _ = NaN, B = NaN;
    } else
      c.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const L = m.map((x, v) => {
      const R = !x.ghost && me(x.value) ? u.slice(0, v + 1).filter((H, Q) => !E[Q] && me(H)).length : 0, D = h, $ = D ? S : {
        upperProcessLimit: null,
        lowerProcessLimit: null,
        upperTwoSigma: null,
        lowerTwoSigma: null,
        upperOneSigma: null,
        lowerOneSigma: null
      };
      return {
        rowId: x.rowId,
        x: x.x,
        value: me(x.value) ? x.value : null,
        ghost: x.ghost,
        partitionId: p,
        pointRank: R,
        mean: D && me(j) ? j : null,
        mr: me(P[v]) ? P[v] : null,
        mrMean: D && me(_) ? _ : null,
        mrUcl: D && me(B) ? B : null,
        upperProcessLimit: me($.upperProcessLimit) ? $.upperProcessLimit : null,
        lowerProcessLimit: me($.lowerProcessLimit) ? $.lowerProcessLimit : null,
        upperTwoSigma: me($.upperTwoSigma) ? $.upperTwoSigma : null,
        lowerTwoSigma: me($.lowerTwoSigma) ? $.lowerTwoSigma : null,
        upperOneSigma: me($.upperOneSigma) ? $.upperOneSigma : null,
        lowerOneSigma: me($.lowerOneSigma) ? $.lowerOneSigma : null,
        target: me(x.target) ? x.target : null,
        specialCauseSinglePointAbove: !1,
        specialCauseSinglePointBelow: !1,
        specialCauseTwoOfThreeAbove: !1,
        specialCauseTwoOfThreeBelow: !1,
        specialCauseFourOfFiveAbove: !1,
        specialCauseFourOfFiveBelow: !1,
        specialCauseShiftHigh: !1,
        specialCauseShiftLow: !1,
        specialCauseTrendIncreasing: !1,
        specialCauseTrendDecreasing: !1,
        variationIcon: "none",
        assuranceIcon: "none",
        upperBaseline: D && me(j) ? j : null,
        lowerBaseline: D && me(j) ? j : null,
        movingRangeHighPointValue: D && me(B) ? B : null,
        ghostValue: x.ghost && me(x.value) ? x.value : null,
        ghostFlag: !!x.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: [],
        heuristicTags: []
      };
    });
    g[p] = L.filter(
      (x) => !x.ghost && me(x.value)
    ).length;
    const T = s.specialCauseShiftPoints ?? 6, C = s.specialCauseTrendPoints ?? 6, N = [];
    for (let x = 0; x < L.length; x++) {
      const v = L[x], R = v.value;
      if (!v.ghost && me(R) && N.push(x), !(me(v.mean) && me(v.upperProcessLimit) && me(v.lowerProcessLimit)) || v.ghost || !me(R)) {
        d.push(v);
        continue;
      }
      v.specialCauseSinglePointAbove = me(v.upperProcessLimit) ? R > v.upperProcessLimit : !1, v.specialCauseSinglePointBelow = me(v.lowerProcessLimit) ? R < v.lowerProcessLimit : !1, d.push(v);
    }
    if (N.length) {
      const x = (D) => L[D];
      let v = [], R = [];
      for (const D of N) {
        const $ = x(D);
        if (!me($.mean) || !me($.value)) {
          v = [], R = [];
          continue;
        }
        if ($.value > $.mean ? (v.push(D), R = []) : $.value < $.mean ? (R.push(D), v = []) : (v = [], R = []), v.length >= T)
          for (const y of v) x(y).specialCauseShiftHigh = !0;
        if (R.length >= T)
          for (const y of R) x(y).specialCauseShiftLow = !0;
      }
      for (let D = 0; D <= N.length - 3; D++) {
        const y = N.slice(D, D + 3).map(x);
        if (!y.every((I) => me(I.mean) && me(I.value))) continue;
        const H = y[0].mean, Q = y.every((I) => I.value > H), b = y.every((I) => I.value < H);
        if (!Q && !b) continue;
        const w = y[0].upperTwoSigma ?? 1 / 0, A = y[0].lowerTwoSigma ?? -1 / 0, k = y.filter((I) => I.value > w), O = y.filter((I) => I.value < A);
        if (Q && k.length >= 2)
          for (const I of k) I.specialCauseTwoOfThreeAbove = !0;
        if (b && O.length >= 2)
          for (const I of O) I.specialCauseTwoOfThreeBelow = !0;
      }
      if (s.enableFourOfFiveRule)
        for (let D = 0; D <= N.length - 5; D++) {
          const y = N.slice(D, D + 5).map(x);
          if (!y.every((k) => me(k.mean) && me(k.value))) continue;
          const H = y[0].mean;
          if (!y.every((k) => k.value > H) && !y.every((k) => k.value < H)) continue;
          const Q = y[0].upperOneSigma ?? 1 / 0, b = y[0].lowerOneSigma ?? -1 / 0, w = y.filter((k) => k.value > Q), A = y.filter((k) => k.value < b);
          if (y.every((k) => k.value > H) && w.length >= 4)
            for (const k of w) k.specialCauseFourOfFiveAbove = !0;
          if (y.every((k) => k.value < H) && A.length >= 4)
            for (const k of A) k.specialCauseFourOfFiveBelow = !0;
        }
      for (let D = 0; D <= N.length - C; D++) {
        const $ = N.slice(D, D + C), y = $.map(x);
        if (!y.every((b) => me(b.value))) continue;
        let H = !0, Q = !0;
        for (let b = 1; b < y.length && (y[b].value > y[b - 1].value || (H = !1), y[b].value < y[b - 1].value || (Q = !1), !(!H && !Q)); b++)
          ;
        if (H) for (const b of $) x(b).specialCauseTrendIncreasing = !0;
        if (Q) for (const b of $) x(b).specialCauseTrendDecreasing = !0;
      }
    }
    if (s.maximumPointsPartition && Number.isFinite(s.maximumPointsPartition)) {
      const x = s.maximumPointsPartition;
      let v = 0;
      for (const R of d.filter((D) => D.partitionId === p))
        !R.ghost && me(R.value) && v++, v > x && (R.mean = R.upperProcessLimit = R.lowerProcessLimit = null, R.upperTwoSigma = R.lowerTwoSigma = R.upperOneSigma = R.lowerOneSigma = null);
    }
  }
  for (const m of d) {
    if (m.ruleTags && m.ruleTags.length) continue;
    const u = [];
    m.specialCauseShiftHigh && u.push("shift_high"), m.specialCauseShiftLow && u.push("shift_low"), m.specialCauseTrendIncreasing && u.push("trend_inc"), m.specialCauseTrendDecreasing && u.push("trend_dec"), m.specialCauseSinglePointAbove && u.push("single_above"), m.specialCauseSinglePointBelow && u.push("single_below"), m.specialCauseTwoOfThreeAbove && u.push("two_of_three_high"), m.specialCauseTwoOfThreeBelow && u.push("two_of_three_low"), m.specialCauseFourOfFiveAbove && u.push("four_of_five_high"), m.specialCauseFourOfFiveBelow && u.push("four_of_five_low"), u.length && (m.ruleTags = u);
  }
  for (let m = 0; m < d.length; m++) {
    const u = d[m];
    if (u.ghost || !me(u.value) || u.mean === null) {
      u.variationIcon = "none";
      continue;
    }
    const E = u.specialCauseSinglePointAbove || u.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && u.specialCauseFourOfFiveAbove || u.specialCauseShiftHigh || u.specialCauseTrendIncreasing, P = u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && u.specialCauseFourOfFiveBelow || u.specialCauseShiftLow || u.specialCauseTrendDecreasing;
    s.collapseClusterRules && (u.specialCauseTwoOfThreeAbove && u.specialCauseFourOfFiveAbove && (u.specialCauseTwoOfThreeAbove = !1), u.specialCauseTwoOfThreeBelow && u.specialCauseFourOfFiveBelow && (u.specialCauseTwoOfThreeBelow = !1)), n === "Up" ? u.variationIcon = E ? "improvement" : P ? "concern" : "neither" : n === "Down" ? u.variationIcon = P ? "improvement" : E ? "concern" : "neither" : u.variationIcon = "neither";
    const j = E || P;
    if (u.specialCauseImprovementValue = j && u.variationIcon === "improvement" ? u.value : null, u.specialCauseConcernValue = j && u.variationIcon === "concern" ? u.value : null, u.specialCauseNeitherValue = j && u.variationIcon === "neither" ? u.value : null, me(u.value) && u.mean !== null) {
      u.assuranceIcon = "none";
      const _ = i[u.rowId - 1];
      if (me(_.target)) {
        const B = _.target;
        s.assuranceCapabilityMode && me(u.upperProcessLimit) && me(u.lowerProcessLimit) ? n === "Up" ? u.lowerProcessLimit !== null && u.lowerProcessLimit > B ? u.assuranceIcon = "pass" : u.upperProcessLimit !== null && u.upperProcessLimit < B ? u.assuranceIcon = "fail" : u.assuranceIcon = "none" : n === "Down" ? u.upperProcessLimit !== null && u.upperProcessLimit < B ? u.assuranceIcon = "pass" : u.lowerProcessLimit !== null && u.lowerProcessLimit > B ? u.assuranceIcon = "fail" : u.assuranceIcon = "none" : u.assuranceIcon = "none" : n === "Down" ? u.assuranceIcon = u.value <= B ? "pass" : "fail" : n === "Up" ? u.assuranceIcon = u.value >= B ? "pass" : "fail" : u.assuranceIcon = "none";
      }
    }
  }
  if ((s.minimumPointsWarning ?? !1) && !h) {
    const m = i.filter(
      (u) => !u.ghost && me(u.value)
    ).length;
    c.push({
      code: "insufficient_points_global",
      category: "data",
      severity: "warning",
      message: `Only ${m} non-ghost points available; minimum required is ${s.minimumPoints}. Limits and icons suppressed.`,
      context: { available: m, minimumRequired: s.minimumPoints }
    });
  }
  if (s.variationIconConflictWarning)
    for (const m of d)
      m.variationIcon === "improvement" && (m.specialCauseSinglePointAbove || m.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && m.specialCauseFourOfFiveAbove || m.specialCauseShiftHigh || m.specialCauseTrendIncreasing) && (m.specialCauseSinglePointBelow || m.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && m.specialCauseFourOfFiveBelow || m.specialCauseShiftLow || m.specialCauseTrendDecreasing) && c.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${m.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: m.rowId }
      });
  if (s.maximumPoints && Number.isFinite(s.maximumPoints)) {
    const m = s.maximumPoints;
    let u = 0;
    for (const E of d)
      !E.ghost && me(E.value) && u++, u > m && (E.mean = E.upperProcessLimit = E.lowerProcessLimit = null, E.upperTwoSigma = E.lowerTwoSigma = E.upperOneSigma = E.lowerOneSigma = null);
  }
  if (s.nullValueWarning && (t === "XmR" || t === "G")) {
    const m = i.filter(
      (u) => !u.ghost && (u.value === null || u.value === void 0 || !me(u.value))
    ).length;
    m && c.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${m} null/missing value(s) excluded from calculations.`,
      context: { nullCount: m }
    });
  }
  if (s.targetSuppressedWarning && (t === "T" || t === "G") && i.some((u) => me(u.target)) && c.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), s.ghostOnRareEventWarning && (t === "T" || t === "G")) {
    const m = i.filter((u) => u.ghost).length;
    m && c.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${m} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: m }
    });
  }
  if (s.partitionSizeWarnings && Object.entries(g).forEach(([m, u]) => {
    u < s.minimumPointsPartition && c.push({
      code: "insufficient_points_partition",
      category: "partition",
      severity: "warning",
      message: `Partition ${m} has only ${u} non-ghost point(s); below recommended ${s.minimumPointsPartition}.`,
      context: {
        partitionId: Number(m),
        count: u,
        minimum: s.minimumPointsPartition
      }
    });
  }), s.baselineSpecialCauseWarning) {
    const m = [];
    d.forEach((u) => {
      i[u.rowId - 1].baseline && (u.specialCauseSinglePointAbove || u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeAbove || u.specialCauseTwoOfThreeBelow || u.specialCauseFourOfFiveAbove || u.specialCauseFourOfFiveBelow || u.specialCauseShiftHigh || u.specialCauseShiftLow || u.specialCauseTrendIncreasing || u.specialCauseTrendDecreasing) && m.push(u.rowId);
    }), m.length && c.push({
      code: "baseline_with_special_cause",
      category: "baseline",
      severity: "warning",
      message: `Baseline set with special-cause present at row(s): ${m.join(", ")}.`,
      context: { rows: m }
    });
  }
  s.maximumPointsWarnings && (s.maximumPointsPartition && Number.isFinite(s.maximumPointsPartition) && c.push({
    code: "partition_cap_applied",
    category: "limits",
    severity: "info",
    message: `Limits suppressed after ${s.maximumPointsPartition} non-ghost points per partition.`,
    context: { cap: s.maximumPointsPartition }
  }), s.maximumPoints && Number.isFinite(s.maximumPoints) && c.push({
    code: "global_cap_applied",
    category: "limits",
    severity: "info",
    message: `Limits suppressed after global cap of ${s.maximumPoints} non-ghost points.`,
    context: { cap: s.maximumPoints }
  }));
  let M;
  if (s.baselineSuggest) {
    const m = d, u = s.baselineSuggestStabilityPoints, E = s.baselineSuggestMinGap, P = s.baselineSuggestMinDeltaSigma, j = s.baselineSuggestScoreThreshold, _ = [];
    let B = 0;
    for (let S = 0; S < m.length; S++) {
      let L = function(x) {
        return !!T[x] && !C?.[x];
      };
      const T = m[S];
      S > 0 && m[S - 1].partitionId !== T.partitionId && (B = S);
      const C = m[S - 1], N = [];
      (L("specialCauseShiftHigh") || L("specialCauseShiftLow")) && N.push({ reason: "shift", index: S }), (L("specialCauseTrendIncreasing") || L("specialCauseTrendDecreasing")) && N.push({ reason: "trend", index: S }), (L("specialCauseSinglePointAbove") || L("specialCauseSinglePointBelow")) && N.push({ reason: "point", index: S });
      for (const x of N) {
        if (x.index - B < E) continue;
        const v = Math.max(0, x.index - u), R = x.index - 1;
        if (R - v + 1 < u) continue;
        const D = x.index, $ = x.index + u - 1;
        if ($ >= m.length) continue;
        const y = m.slice(v, R + 1).map((W) => W.value).filter(me), H = m.slice(D, $ + 1).map((W) => W.value).filter(me);
        if (y.length < u || H.length < u) continue;
        const Q = m[x.index];
        let b = null;
        if (me(Q.upperProcessLimit) && me(Q.mean)) {
          const W = Q.upperProcessLimit - Q.mean;
          W > 0 && (b = W / 3);
        }
        if (!b || b <= 0) continue;
        const w = ft(y), A = ft(H), k = A - w;
        if (Math.abs(k) < P * b) continue;
        const I = m.slice(D, $ + 1).filter(
          (W) => W.variationIcon === "concern"
          /* Concern */
        ).length;
        if (I > 1) continue;
        const J = (W) => {
          const re = ft(W);
          return W.length ? W.reduce((z, oe) => z + (oe - re) * (oe - re), 0) / W.length : 0;
        }, ue = J(y), ce = J(H);
        let Z = x.reason === "shift" ? 90 : x.reason === "trend" ? 70 : 60;
        if (ce < ue && (Z += 10), Z -= I * 15, Z < j) continue;
        const G = _.find((W) => W.index === x.index);
        if (G) {
          const W = (re) => re === "shift" ? 3 : re === "trend" ? 2 : 1;
          (W(x.reason) > W(G.reason) || Z > G.score) && (G.reason = x.reason, G.score = Z, G.deltaMean = k, G.oldMean = w, G.newMean = A, G.window = [D, $]);
        } else
          _.push({
            index: x.index,
            reason: x.reason,
            score: Z,
            deltaMean: k,
            oldMean: w,
            newMean: A,
            window: [D, $]
          });
      }
      S > 0 && m[S - 1].partitionId !== m[S].partitionId && (B = S);
    }
    _.sort((S, L) => S.index - L.index), M = _;
  }
  return { rows: d, warnings: c, ...M ? { suggestedBaselines: M } : {} };
}
const ls = {
  singlePointAbove: {
    tooltip: "Single point above upper control limit",
    narration: "Single point beyond a control limit"
  },
  singlePointBelow: {
    tooltip: "Single point below lower control limit",
    narration: "Single point beyond a control limit"
  },
  twoOfThreeAbove: {
    tooltip: "Two of three points beyond +2σ",
    narration: "Two of three points beyond two sigma (same side)"
  },
  twoOfThreeBelow: {
    tooltip: "Two of three points beyond -2σ",
    narration: "Two of three points beyond two sigma (same side)"
  },
  fourOfFiveAbove: {
    tooltip: "Four of five points beyond +1σ",
    narration: "Four of five points beyond one sigma (same side)"
  },
  fourOfFiveBelow: {
    tooltip: "Four of five points beyond -1σ",
    narration: "Four of five points beyond one sigma (same side)"
  },
  shiftHigh: {
    tooltip: "Shift: run of points above centre line",
    narration: "Shift (run on one side of mean)"
  },
  shiftLow: {
    tooltip: "Shift: run of points below centre line",
    narration: "Shift (run on one side of mean)"
  },
  trendIncreasing: {
    tooltip: "Trend: consecutive increasing points",
    narration: "Trend (consecutive increases)"
  },
  trendDecreasing: {
    tooltip: "Trend: consecutive decreasing points",
    narration: "Trend (consecutive decreases)"
  }
};
function cs(e) {
  if (!e) return [];
  const t = [];
  return e.specialCauseSinglePointAbove && t.push("singlePointAbove"), e.specialCauseSinglePointBelow && t.push("singlePointBelow"), e.specialCauseTwoOfThreeAbove && t.push("twoOfThreeAbove"), e.specialCauseTwoOfThreeBelow && t.push("twoOfThreeBelow"), e.specialCauseFourOfFiveAbove && t.push("fourOfFiveAbove"), e.specialCauseFourOfFiveBelow && t.push("fourOfFiveBelow"), e.specialCauseShiftHigh && t.push("shiftHigh"), e.specialCauseShiftLow && t.push("shiftLow"), e.specialCauseTrendIncreasing && t.push("trendIncreasing"), e.specialCauseTrendDecreasing && t.push("trendDecreasing"), t;
}
function ds(e) {
  switch (e) {
    case Ge.Improvement:
      return "Improvement signal";
    case Ge.Concern:
      return "Concern signal";
    case Ge.Neither:
      return "Common cause variation";
    case Ge.None:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function Kh(e) {
  switch (e) {
    case At.Pass:
      return "Target met";
    case At.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Xh(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const lt = {
  improvement: {
    token: "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)",
    hex: "#00B0F0"
  },
  concern: {
    token: "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)",
    hex: "#E46C0A"
  },
  none: {
    token: "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)",
    hex: "#490092"
  },
  neither: {
    token: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
    hex: "#A6A6A6"
  }
};
function Mi(e) {
  return e ? lt[e]?.token ?? lt.neither.token : lt.neither.token;
}
function Zh(e) {
  return e ? lt[e]?.hex ?? lt.neither.hex : lt.neither.hex;
}
const Ii = [
  { id: "shift_high", label: "Shift (high run)", kind: "rule", taxonomy: "orthodox", description: "Run of consecutive points above the mean exceeding shift length threshold." },
  { id: "shift_low", label: "Shift (low run)", kind: "rule", taxonomy: "orthodox", description: "Run of consecutive points below the mean exceeding shift length threshold." },
  { id: "trend_inc", label: "Trend (increasing)", kind: "rule", taxonomy: "orthodox", description: "Consecutive increasing values meeting trend length threshold." },
  { id: "trend_dec", label: "Trend (decreasing)", kind: "rule", taxonomy: "orthodox", description: "Consecutive decreasing values meeting trend length threshold." },
  { id: "single_above", label: "Single >3σ (above)", kind: "rule", taxonomy: "orthodox", description: "Single point beyond upper 3-sigma limit." },
  { id: "single_below", label: "Single >3σ (below)", kind: "rule", taxonomy: "orthodox", description: "Single point beyond lower 3-sigma limit." },
  { id: "two_of_three_high", label: "2 of 3 >2σ (high)", kind: "rule", taxonomy: "orthodox", description: "Two of three consecutive points above +2σ." },
  { id: "two_of_three_low", label: "2 of 3 >2σ (low)", kind: "rule", taxonomy: "orthodox", description: "Two of three consecutive points below -2σ." },
  { id: "four_of_five_high", label: "4 of 5 >1σ (high)", kind: "rule", taxonomy: "orthodox", description: "Four of five consecutive points above +1σ." },
  { id: "four_of_five_low", label: "4 of 5 >1σ (low)", kind: "rule", taxonomy: "orthodox", description: "Four of five consecutive points below -1σ." }
], us = [
  // All heuristics removed – retaining empty array for forward compatibility
], Sa = /* @__PURE__ */ new Map();
for (const e of [...Ii, ...us]) Sa.set(e.id, e);
function fs(e) {
  if (Sa.has(e)) return Sa.get(e);
  for (const t of us)
    if (t.pattern && t.pattern.test(e)) {
      const a = e.match(t.pattern)[1];
      return { ...t, dynamic: !0, dynamicLabel: t.label.replace("N", a) };
    }
}
function Jh(e) {
  const t = fs(e);
  return t ? t.dynamic && t.dynamicLabel || t.label : e.replace(/_/g, " ");
}
function Qh(e) {
  const t = fs(e);
  return t ? t.taxonomy : "unknown";
}
function ep(e) {
  const t = fs(e);
  return t ? t.kind : "unknown";
}
[...Ii, ...us];
const Li = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: o,
  dateFormatter: s
}) => {
  const i = Et(), l = Bt(), [d, c] = U.useState(null), [f, h] = U.useState(!1), p = U.useRef(null);
  U.useEffect(() => {
    if (i) {
      if (i.focused && (c(i.focused), p.current && (cancelAnimationFrame(p.current), p.current = null)), !i.focused && !f) {
        const Y = requestAnimationFrame(() => {
          c(null), p.current = null;
        });
        p.current = Y;
      }
      return () => {
        p.current && (cancelAnimationFrame(p.current), p.current = null);
      };
    }
  }, [i, i?.focused, f]);
  const g = i && (i.focused || (f ? d : null) || d), [M, m] = U.useState(!1);
  U.useEffect(() => {
    const Y = requestAnimationFrame(() => m(!0));
    return () => cancelAnimationFrame(Y);
  }, [g?.index]);
  const u = l?.innerWidth ?? 0, E = l?.innerHeight ?? 0, P = g ? Math.min(Math.max(g.clientX, 0), u) : 0, j = g ? Math.min(Math.max(g.clientY, 0), E) : 0, B = l.ref?.current;
  if (!g)
    return null;
  const S = e?.[g.index], L = cs(S).map((Y) => ls[Y].tooltip), T = g.x instanceof Date ? g.x : new Date(g.x), C = s ? s(T) : T.toDateString(), N = o ? `${o}` : "", x = a || N ? `${g.y}${N ? "" + N : " "}${a ? " " + a : ""}` : `${g.y}`, v = ds(S?.variationIcon), R = Kh(S?.assuranceIcon), D = Xh(
    t.mean ?? null,
    t.sigma,
    g.y
  ), $ = n ? n(g.index, { x: g.x, y: g.y }) : void 0, y = v || R || D, H = L.length > 0, Q = Array.isArray(S?.ruleTags) ? Array.from(new Set(S.ruleTags)) : [], b = Array.isArray(S?.heuristicTags) ? Array.from(new Set(S.heuristicTags)) : [], w = Q.length > 0 || b.length > 0, A = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", k = Mi(S?.variationIcon), O = 6.2, J = [
    $ || "",
    `${C} • ${x}`
  ].filter(Boolean).reduce(
    (Y, ie) => Math.max(Y, ie.length * O + 32),
    0
  ), ue = 200, ce = 440, Z = Math.min(ce, Math.max(ue, J));
  let G = P + 12, re = (l.margin?.top ?? 0) + j + 16;
  G + Z > u && (G = P - -60 - Z), G < 0 && (G = Math.max(0, u - Z));
  const z = g ? `spc-tooltip-${g.index}` : "spc-tooltip", oe = B ? Wl(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: z,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (M ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: G,
          top: re,
          width: Z,
          maxWidth: ce,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": M ? "false" : "true",
        "data-floating": !0,
        "data-placement": G + Z + 12 > u ? "left" : "right",
        onPointerEnter: () => {
          h(!0), p.current && (cancelAnimationFrame(p.current), p.current = null);
        },
        onPointerLeave: () => {
          if (h(!1), !i?.focused) {
            const Y = requestAnimationFrame(() => {
              c(null), p.current = null;
            });
            p.current = Y;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: C })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: x })
          ] }),
          y && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: v && (v.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              Qe,
              {
                text: v,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : v.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              Qe,
              {
                text: v,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : /* @__PURE__ */ r.jsx(
              Qe,
              {
                text: v,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            )) })
          ] }),
          R && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const Y = R.toLowerCase(), le = !(Y.includes("not met") || Y.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(Y);
              return /* @__PURE__ */ r.jsx(
                Qe,
                {
                  text: R,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${le ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${R}`
                }
              );
            })() })
          ] }),
          D && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              Qe,
              {
                text: (() => {
                  const Y = D.toLowerCase();
                  return Y.startsWith("within 1") ? "≤1σ" : Y.startsWith("1–2") ? "1–2σ" : Y.startsWith("2–3") ? "2–3σ" : Y.startsWith(">3") ? ">3σ" : D;
                })(),
                color: D.includes(">3") ? "orange" : D.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${D}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          H && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: L.map((Y) => {
                  const ie = v ? v.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : v.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--rule" : "fdp-spc-tag--rule";
                  return /* @__PURE__ */ r.jsx(
                    Qe,
                    {
                      text: Y,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${ie}`
                    },
                    Y
                  );
                })
              }
            )
          ] }),
          w && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--provenance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Provenance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signal provenance", children: [...Q, ...b].map((Y) => {
              const ie = ep(Y), le = Qh(Y), xe = le !== "unknown" ? `fdp-spc-tag--prov-${le}` : "fdp-spc-tag--prov-unknown", Ce = ie === "rule" ? "fdp-spc-tag--rule" : "fdp-spc-tag--heuristic";
              return /* @__PURE__ */ r.jsx(
                Qe,
                {
                  text: Jh(Y),
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag ${Ce} ${xe}`,
                  "aria-label": `Provenance ${ie} (${le}): ${Y}`
                },
                `prov-${Y}`
              );
            }) })
          ] })
        ] })
      }
    ),
    B
  ) : null;
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-tooltip-layer fdp-spc-tooltip",
      pointerEvents: "none",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: P,
            cy: j,
            r: 7,
            fill: "none",
            stroke: A,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: P,
            cy: j,
            r: 5,
            fill: "#000",
            stroke: A,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: P,
            cy: j,
            r: 2.5,
            fill: k,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        oe
      ]
    }
  );
};
let ka = null;
try {
  ka = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const st = (e, t) => {
  if (!ka) return t;
  const n = e.split(".");
  let a = ka;
  for (const s of n) {
    if (a == null) break;
    a = a[s];
  }
  const o = a;
  return o == null ? t : typeof o == "string" || typeof o == "number" ? String(o) : o.$value != null ? String(o.$value) : o.value != null ? String(o.value) : t;
}, Fi = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: st("gradient.stop.start-opacity", "0.12"),
  mid: st("gradient.stop.mid-opacity", "0.03"),
  end: st("gradient.stop.end-opacity", "0"),
  triStart: st(
    "gradient.stop.triangle-start-opacity",
    st("gradient.stop.start-opacity", "0.12")
  ),
  triMid: st(
    "gradient.stop.triangle-mid-opacity",
    st("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: st(
    "gradient.stop.triangle-end-opacity",
    st("gradient.stop.end-opacity", "0")
  )
});
var Ut = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(Ut || {});
const tp = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, np = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Je = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Je || {}), _e = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(_e || {}), Ke = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(Ke || {}), Ie = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Ie || {});
const rp = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [n, a, o].map((l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4));
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, hs = {
  special_cause_deteriorating: {
    hex: lt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: lt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: lt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: lt.none.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(hs).forEach((e) => {
  e.text || (e.text = rp(e.hex));
});
const Ai = (e) => hs[e], ps = (e) => hs[e].judgement || "none", vo = {
  special: {
    higher: [
      { cx: 77.5, cy: 158.5 },
      { cx: 114, cy: 175 },
      { cx: 150.5, cy: 158.5 },
      { cx: 188, cy: 125 },
      { cx: 225, cy: 137 }
    ],
    lower: [
      { cx: 77.5, cy: 139.5 },
      { cx: 114, cy: 124.5 },
      { cx: 150.5, cy: 139.5 },
      { cx: 188, cy: 175.5 },
      { cx: 224.5, cy: 162 }
    ]
  },
  common: [
    { cx: 76.5, cy: 149.5 },
    { cx: 113, cy: 179.5 },
    { cx: 149.5, cy: 117 },
    { cx: 187, cy: 171 },
    { cx: 223.5, cy: 158 }
  ]
};
function ap(e, t) {
  let n;
  return e === "common_cause" ? n = vo.common : n = vo.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
const Bi = (e) => {
  if (e.variationIcon !== void 0) {
    const s = e, l = {
      [Ge.Improvement]: Ie.SpecialCauseImproving,
      [Ge.Concern]: Ie.SpecialCauseDeteriorating,
      [Ge.Neither]: Ie.CommonCause,
      [Ge.None]: Ie.SpecialCauseNoJudgement
    }[s.variationIcon];
    let d = s.trend;
    return !d && s.polarity && (l === Ie.SpecialCauseImproving || l === Ie.SpecialCauseDeteriorating) && (l === Ie.SpecialCauseImproving ? d = s.polarity === Je.LowerIsBetter ? _e.Lower : _e.Higher : d = s.polarity === Je.LowerIsBetter ? _e.Higher : _e.Lower), d || (d = l === Ie.SpecialCauseImproving ? _e.Higher : l === Ie.SpecialCauseDeteriorating ? _e.Lower : _e.Higher), {
      state: l,
      direction: d,
      polarity: s.polarity ?? Je.ContextDependent
    };
  }
  if (e.state !== void 0) {
    const s = e;
    let i = s.trend;
    return !i && (s.state === Ie.SpecialCauseImproving || s.state === Ie.SpecialCauseDeteriorating) && s.polarity && (s.state === Ie.SpecialCauseImproving ? i = s.polarity === Je.LowerIsBetter ? _e.Lower : _e.Higher : i = s.polarity === Je.LowerIsBetter ? _e.Higher : _e.Lower), i || (s.state === Ie.SpecialCauseImproving ? i = _e.Higher : s.state === Ie.SpecialCauseDeteriorating ? i = _e.Lower : i = _e.Higher), {
      state: s.state,
      direction: i,
      polarity: s.polarity ?? Je.ContextDependent
    };
  }
  const t = e, a = {
    [Ke.Improving]: Ie.SpecialCauseImproving,
    [Ke.Deteriorating]: Ie.SpecialCauseDeteriorating,
    [Ke.No_Judgement]: Ie.SpecialCauseNoJudgement,
    [Ke.None]: Ie.CommonCause
  }[t.judgement];
  let o;
  return t.judgement === Ke.Improving ? o = t.polarity === Je.LowerIsBetter ? _e.Lower : _e.Higher : t.judgement === Ke.Deteriorating ? o = t.polarity === Je.LowerIsBetter ? _e.Higher : _e.Lower : o = t.trend ?? _e.Higher, { state: a, direction: o, polarity: t.polarity };
};
function sp(e, t) {
  const { state: n, direction: a, polarity: o } = Bi(e), s = ps(n), i = a === _e.Higher ? "above" : "below", l = a === _e.Higher ? "upwards" : "downwards", d = (() => {
    switch (o) {
      case Je.HigherIsBetter:
        return "For this measure, higher values are better.";
      case Je.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (s) {
        case Ke.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case Ke.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case Ke.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case Ke.None:
        default:
          return "Common cause variation: points vary randomly around the mean; no special cause detected.";
      }
    })(),
    d,
    null,
    null,
    null,
    null,
    null
  ].filter(Boolean).join(" ");
}
const ia = (e, t, n, a, o, s) => /* @__PURE__ */ r.jsxs("defs", { children: [
  a && /* @__PURE__ */ r.jsxs("filter", { id: t, filterUnits: "objectBoundingBox", children: [
    /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "3" }),
    /* @__PURE__ */ r.jsx("feOffset", { dx: "0", dy: "15", result: "blur" }),
    /* @__PURE__ */ r.jsx("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
    /* @__PURE__ */ r.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
    /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
  ] }),
  o && /* @__PURE__ */ r.jsx("linearGradient", { id: n, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: s.map((i) => /* @__PURE__ */ r.jsx(
    "stop",
    {
      offset: i.offset,
      stopColor: e,
      stopOpacity: parseFloat(i.opacity)
    },
    i.offset
  )) })
] }), ms = ({
  data: e,
  size: t = 44,
  ariaLabel: n,
  showLetter: a = !0,
  dropShadow: o = !0,
  gradientWash: s = !1,
  variant: i = "classic",
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: d = "polarity",
  letterOverride: c,
  ...f
}) => {
  const h = Hn(), p = Hn(), {
    start: g,
    mid: M,
    end: m,
    triStart: u,
    triMid: E,
    triEnd: P
  } = Fi(), { state: j, direction: _, polarity: B } = De(
    () => Bi(e),
    [e]
  ), S = De(() => Ai(j), [j]), L = De(() => ps(j), [j]), T = L === Ke.Improving || L === Ke.Deteriorating;
  let C = "";
  a && T && (d === "polarity" ? B === Je.HigherIsBetter ? C = "H" : B === Je.LowerIsBetter ? C = "L" : C = "" : C = _ === _e.Higher ? "H" : "L"), c !== void 0 && (C = c);
  const N = j !== Ie.CommonCause, x = j === Ie.SpecialCauseNoJudgement, v = st("common-cause", "#A6A6A6"), R = N ? S.hex : v, D = De(
    () => ap(j, _),
    [j, _]
  ), $ = n || `${S.label}${C ? _ === _e.Higher ? " – Higher" : " – Lower" : ""}`, y = sp(
    e
  );
  if (i === "triangleWithRun") {
    const A = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], k = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let O = null;
    j === Ie.SpecialCauseImproving || j === Ie.SpecialCauseDeteriorating ? O = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (_ === _e.Higher ? A : k).map((oe) => oe.join(",")).join(" "),
        fill: S.hex,
        stroke: S.hex,
        strokeWidth: 6,
        transform: _ === _e.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : j === Ie.SpecialCauseNoJudgement && (O = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: _ === _e.Higher ? A.map((oe) => oe.join(",")).join(" ") : k.map((oe) => oe.join(",")).join(" "),
        fill: S.hex,
        stroke: S.hex,
        strokeWidth: 6,
        transform: _ === _e.Higher ? "translate(0,-6)" : "translate(0,6)"
      }
    ));
    const I = Math.max(0, Math.min(5, Math.floor(l || 0))), J = j === Ie.CommonCause ? 160 : _ === _e.Higher ? 210 : 70, ue = 10, ce = 26, Z = 150 - 2 * ce, G = j === Ie.SpecialCauseImproving ? st("improvement", "#00B0F0") : j === Ie.SpecialCauseDeteriorating ? st("concern", "#E46C0A") : v, W = Array.from({ length: 5 }).map((oe, Y) => {
      const le = (j === Ie.SpecialCauseImproving || j === Ie.SpecialCauseDeteriorating) && Y >= 5 - I ? G : v;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: Z + Y * ce,
          cy: J,
          r: ue,
          fill: le,
          stroke: le,
          strokeWidth: 1
        },
        Y
      );
    }), re = ia(
      S.hex,
      h,
      p,
      o,
      s,
      [
        { offset: "0%", opacity: u },
        { offset: "75%", opacity: E },
        { offset: "100%", opacity: P }
      ]
    ), z = j === Ie.CommonCause || _ === _e.Higher ? "translate(0,-10)" : "translate(0,20)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": $,
        "aria-description": y,
        ...f,
        children: [
          re,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: s ? `url(#${p})` : "#ffffff",
              ...o ? { filter: `url(#${h})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: S.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsxs("g", { transform: z, children: [
            O,
            C && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: _ === _e.Higher ? 150 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: C
              }
            ),
            W
          ] })
        ]
      }
    );
  }
  if (i === "triangle") {
    const A = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], k = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], O = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let I = null;
    j === Ie.SpecialCauseImproving || j === Ie.SpecialCauseDeteriorating ? I = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (_ === _e.Higher ? A : k).map((ue) => ue.join(",")).join(" "),
        fill: S.hex,
        stroke: S.hex,
        strokeWidth: 8,
        transform: _ === _e.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : j === Ie.SpecialCauseNoJudgement ? I = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: _ === _e.Higher ? A.map((ue) => ue.join(",")).join(" ") : k.map((ue) => ue.join(",")).join(" "),
        fill: S.hex,
        stroke: S.hex,
        strokeWidth: 8,
        transform: _ === _e.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : j === Ie.CommonCause && (I = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: O[0][0],
        y1: O[0][1],
        x2: O[1][0],
        y2: O[1][1],
        stroke: S.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const J = ia(
      S.hex,
      h,
      p,
      o,
      s,
      [
        { offset: "0%", opacity: u },
        { offset: "65%", opacity: E },
        { offset: "100%", opacity: P }
      ]
    );
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": $,
        "aria-description": y,
        ...f,
        children: [
          J,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: s ? `url(#${p})` : "#ffffff",
              ...o ? { filter: `url(#${h})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: S.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          I,
          C && (j === Ie.SpecialCauseImproving || j === Ie.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: _ === _e.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: C
            }
          )
        ]
      }
    );
  }
  const H = ia(
    S.hex,
    h,
    p,
    o,
    s,
    [
      { offset: "0%", opacity: g },
      { offset: "65%", opacity: M },
      { offset: "100%", opacity: m }
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": $,
      "aria-description": y,
      ...f,
      children: [
        H,
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${p})` : "#ffffff",
            ...o ? { filter: `url(#${h})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: S.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        C && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: S.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: _ === _e.Lower ? "325" : "156", children: C })
          }
        ),
        x ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: S.hex,
            ..._ === _e.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          D.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: v,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${D.map((Q) => `${Q.cx} ${Q.cy}`).join(" L ")}`
            }
          ),
          D.map((Q, b) => {
            const A = b >= D.length - 2 && N ? R : v, k = A;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: k,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: A,
                cx: Q.cx,
                cy: Q.cy,
                r: 16
              },
              b
            );
          })
        ] })
      ]
    }
  );
};
ms.displayName = "SPCVariationIcon";
const gs = ({
  status: e,
  size: t = 44,
  ariaLabel: n,
  dropShadow: a = !0,
  colourOverride: o,
  gradientWash: s = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...d
}) => {
  const c = Hn(), f = Hn(), { start: h, mid: p, end: g } = Fi(), M = o || tp[e], m = (i || np[e]).slice(0, 2), u = n || `Assurance ${e}`;
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": u,
      ...d,
      children: [
        /* @__PURE__ */ r.jsxs("defs", { children: [
          a && /* @__PURE__ */ r.jsxs("filter", { id: c, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ r.jsx("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ r.jsx("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ r.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          s && /* @__PURE__ */ r.jsxs("linearGradient", { id: f, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: M, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: M, stopOpacity: parseFloat(p) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(g) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${f})` : "#ffffff",
            ...a ? { filter: `url(#${c})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: M,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            x: 0,
            y: 0,
            transform: "translate(121.01, 32) scale(0.5, 0.5)",
            textAnchor: "middle",
            children: /* @__PURE__ */ r.jsx("tspan", { x: 60, y: 184, children: m })
          }
        ),
        l && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          e === Ut.Fail ? /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "fail-line",
              stroke: M,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : e === Ut.Uncertain ? /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "uncertain-line",
              stroke: "rgb(166, 166, 166)",
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "16.5,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 36,174 L 266,174"
            }
          ) : /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "pass-line",
              stroke: M,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 48,204 L 254,204"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "data-sparkline",
              stroke: "rgb(166, 166, 166)",
              strokeWidth: 12,
              strokeMiterlimit: 12,
              fill: "none",
              d: "M 59.9,187.91 C 72.79,171.72 87.33,158.06 104.4,157.83 121.91,158.58 140.94,187.85 153.4,189.91 164.1,192.12 163.78,171.38 169.17,170.53 172.87,169.55 174.88,187.45 184.94,189.24 197,191.86 230.54,184.47 239.01,185.9"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: M,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          )
        ] })
      ]
    }
  );
};
gs.displayName = "SPCAssuranceIcon";
const op = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: n = 260,
  showZones: a = !0,
  showPoints: o = !0,
  announceFocus: s = !1,
  className: i,
  unit: l,
  highlightOutOfControl: d = !0,
  chartType: c = "XmR",
  metricImprovement: f = zt.Neither,
  enableRules: h = !0,
  showIcons: p = !1,
  showEmbeddedIcon: g = !0,
  targets: M,
  baselines: m,
  ghosts: u,
  settings: E,
  narrationContext: P,
  gradientSequences: j = !1,
  processLineWidth: _ = 2
}) => {
  const B = U.useMemo(() => {
    const k = e.map((O, I) => ({
      x: O.x,
      value: O.y,
      target: M?.[I] ?? void 0,
      baseline: m?.[I] ?? void 0,
      ghost: u?.[I] ?? void 0
    }));
    try {
      return Di({
        chartType: c,
        metricImprovement: f,
        data: k,
        settings: E
      });
    } catch {
      return null;
    }
  }, [
    e,
    M,
    m,
    u,
    c,
    f,
    E
  ]), S = B?.rows.slice().reverse().find((k) => k.mean != null), L = S?.mean ?? null, T = S?.upperProcessLimit ?? null, C = S?.lowerProcessLimit ?? null, N = S?.upperOneSigma ?? null, x = S?.lowerOneSigma ?? null, v = S?.upperTwoSigma ?? null, R = S?.lowerTwoSigma ?? null, D = L != null && N != null ? Math.abs(N - L) : 0, $ = U.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), y = U.useMemo(() => {
    const O = [...e.map((I) => I.y)];
    if ([L, T, C, N, x, v, R].forEach((I) => {
      I != null && O.push(I);
    }), M && M.forEach((I) => {
      typeof I == "number" && !isNaN(I) && O.push(I);
    }), !!O.length)
      return [Math.min(...O), Math.max(...O)];
  }, [e, L, T, C, N, x, v, R, M]), H = U.useMemo(() => {
    if (!(l || P?.measureUnit) && e.length)
      return e.every((k) => k.y >= 0 && k.y <= 1) ? "%" : void 0;
  }, [l, P?.measureUnit, e]), Q = l ?? P?.measureUnit ?? H, b = U.useMemo(() => Q ? { ...P || {}, measureUnit: Q } : P, [P, Q]), w = U.useMemo(() => {
    if (!B?.rows) return [];
    const k = [];
    for (let O = 1; O < B.rows.length; O++)
      B.rows[O].partitionId !== B.rows[O - 1].partitionId && k.push(O);
    return k;
  }, [B?.rows]), A = U.useMemo(() => {
    if (!g || !B?.rows?.length) return null;
    const k = B.rows, O = E?.minimumPoints ?? 13;
    if (k.filter((Y) => !Y.ghost && Y.value != null).length < O) return null;
    let J = -1;
    for (let Y = k.length - 1; Y >= 0; Y--) {
      const ie = k[Y];
      if (ie && ie.value != null && !ie.ghost) {
        J = Y;
        break;
      }
    }
    if (J === -1) return null;
    const ue = k[J], ce = ue.variationIcon, Z = ue.assuranceIcon, G = Z === At.Pass ? Ut.Pass : Z === At.Fail ? Ut.Fail : Ut.Uncertain;
    let W;
    if (ce === Ge.None) {
      const Y = ue.specialCauseSinglePointAbove, ie = ue.specialCauseSinglePointBelow;
      f === zt.Up ? Y ? W = _e.Higher : ie && (W = _e.Lower) : f === zt.Down ? ie ? W = _e.Lower : Y && (W = _e.Higher) : W = _e.Higher;
    }
    let re;
    switch (ce) {
      case Ge.Improvement:
        re = Ke.Improving;
        break;
      case Ge.Concern:
        re = Ke.Deteriorating;
        break;
      case Ge.None:
        re = Ke.No_Judgement;
        break;
      case Ge.Neither:
      default:
        re = Ke.None;
    }
    let z;
    f === zt.Up ? z = Je.HigherIsBetter : f === zt.Down ? z = Je.LowerIsBetter : z = Je.ContextDependent;
    const oe = 80;
    return /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", gap: 12, marginRight: 16 }, children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "fdp-spc-chart__embedded-icon",
          "data-variation": String(ce),
          "data-variation-judgement": String(re),
          "data-trend-raw": W ? String(W) : "none",
          "data-trend": W ? String(W) : "none",
          "data-polarity": String(z ?? "unknown"),
          style: { width: oe, height: oe },
          children: /* @__PURE__ */ r.jsx(
            ms,
            {
              dropShadow: !1,
              data: { judgement: re, polarity: z, ...W ? { trend: W } : {} },
              letterMode: "direction",
              size: oe
            }
          )
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "fdp-spc-chart__embedded-assurance-icon",
          "data-assurance": String(Z),
          style: { width: oe, height: oe },
          children: /* @__PURE__ */ r.jsx(gs, { status: G, size: oe, dropShadow: !1 })
        }
      )
    ] }, `embedded-icon-${J}`);
  }, [g, B?.rows, f, E?.minimumPoints, M]);
  return /* @__PURE__ */ r.jsxs("div", { className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper", children: [
    g && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: A }),
    /* @__PURE__ */ r.jsx(
      Jf,
      {
        height: n,
        ariaLabel: t,
        margin: { bottom: 48, left: 56, right: 16, top: 12 },
        className: void 0,
        children: /* @__PURE__ */ r.jsx(Qf, { series: $, yDomain: y, children: /* @__PURE__ */ r.jsx(
          ip,
          {
            series: $,
            showPoints: o,
            announceFocus: s,
            limits: { mean: L, ucl: T, lcl: C, sigma: D, onePos: N, oneNeg: x, twoPos: v, twoNeg: R },
            showZones: a,
            highlightOutOfControl: d,
            engineRows: B?.rows || null,
            enableRules: h,
            showIcons: p,
            narrationContext: b,
            metricImprovement: f,
            gradientSequences: j,
            processLineWidth: _,
            effectiveUnit: Q,
            partitionMarkers: w
          }
        ) })
      }
    )
  ] });
}, ip = ({
  series: e,
  showPoints: t,
  announceFocus: n,
  limits: a,
  showZones: o,
  highlightOutOfControl: s,
  engineRows: i,
  enableRules: l,
  showIcons: d,
  narrationContext: c,
  gradientSequences: f,
  processLineWidth: h,
  effectiveUnit: p,
  partitionMarkers: g
}) => {
  const M = Xt(), m = Bt();
  if (!M) return null;
  const { xScale: u, yScale: E } = M, P = Et(), j = e[0]?.data || [], _ = U.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const b = /* @__PURE__ */ new Set();
    return j.forEach((w, A) => {
      (a.ucl != null && w.y > a.ucl || a.lcl != null && w.y < a.lcl) && b.add(A);
    }), b;
  }, [j, a.ucl, a.lcl]), B = U.useMemo(() => {
    if (!i) return null;
    const b = {};
    return i.forEach((w, A) => {
      if (w.value == null || w.ghost) return;
      const k = w.specialCauseSinglePointAbove || w.specialCauseSinglePointBelow || w.specialCauseTwoOfThreeAbove || w.specialCauseTwoOfThreeBelow || w.specialCauseFourOfFiveAbove || w.specialCauseFourOfFiveBelow || w.specialCauseShiftHigh || w.specialCauseShiftLow || w.specialCauseTrendIncreasing || w.specialCauseTrendDecreasing;
      b[A] = {
        variation: w.variationIcon,
        assurance: w.assuranceIcon,
        special: k,
        concern: w.variationIcon === Ge.Concern,
        improvement: w.variationIcon === Ge.Improvement
      };
    }), b;
  }, [i]), S = U.useMemo(() => {
    if (!i || !i.length) return null;
    const b = [];
    for (const A of i)
      typeof A.target == "number" && !isNaN(A.target) && b.push(A.target);
    if (!b.length) return null;
    const w = b[0];
    return b.every((A) => A === w) ? w : null;
  }, [i]), L = U.useMemo(() => {
    if (!B) return [];
    const b = j.map((w, A) => {
      const k = B?.[A];
      return k?.concern ? "concern" : k?.improvement ? "improvement" : "common";
    });
    for (let w = 1; w < b.length - 1; w++)
      (b[w] === "concern" || b[w] === "improvement") && b[w - 1] === "common" && b[w + 1] === "common" && (b[w] = "common");
    for (let w = 1; w < b.length - 1; w++) {
      const A = b[w - 1], k = b[w], O = b[w + 1];
      k !== "common" && A !== "common" && O !== "common" && A === O && k !== A && (b[w] = "common");
    }
    return b;
  }, [B, j]), T = U.useMemo(() => {
    if (!f || !L.length) return [];
    const b = [];
    let w = 0;
    for (let A = 1; A <= L.length; A++)
      if (A === L.length || L[A] !== L[w]) {
        const O = L[w], I = A - 1, J = I - w + 1;
        O === "common" ? b.push({ start: w, end: I, category: "common" }) : J > 1 && b.push({ start: w, end: I, category: O }), w = A;
      }
    return b;
  }, [f, L]), C = U.useMemo(() => j.map((b) => u(b.x instanceof Date ? b.x : new Date(b.x))), [j, u]), N = u.range()[1], x = U.useMemo(() => {
    if (!i || !i.length) return null;
    const b = (w) => {
      const A = [];
      let k = null, O = null;
      for (let I = 0; I < i.length; I++) {
        const J = i[I], ue = typeof J[w] == "number" ? J[w] : null;
        if (ue == null || isNaN(ue)) {
          k !== null && O != null && (A.push({ x1: C[k], x2: C[I - 1], y: E(O) }), k = null, O = null);
          continue;
        }
        if (k === null) {
          k = I, O = ue;
          continue;
        }
        O != null && Math.abs(ue - O) <= 1e-9 || (A.push({ x1: C[k], x2: C[I - 1], y: E(O) }), k = I, O = ue);
      }
      return k !== null && O != null && A.push({ x1: C[k], x2: C[i.length - 1], y: E(O) }), A;
    };
    return {
      mean: b("mean"),
      ucl: b("upperProcessLimit"),
      lcl: b("lowerProcessLimit"),
      onePos: b("upperOneSigma"),
      oneNeg: b("lowerOneSigma"),
      twoPos: b("upperTwoSigma"),
      twoNeg: b("lowerTwoSigma")
    };
  }, [i, C, E]), v = U.useMemo(() => T.length ? /* @__PURE__ */ r.jsx("defs", { children: T.map((b, w) => {
    const A = `spc-seq-grad-${w}`;
    let k, O = 0.28, I = 0.12, J = 0.045;
    switch (b.category) {
      case "concern":
        k = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", O = 0.28, I = 0.12, J = 0.045;
        break;
      case "improvement":
        k = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", O = 0.26, I = 0.11, J = 0.045;
        break;
      default:
        k = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
    }
    return /* @__PURE__ */ r.jsxs("linearGradient", { id: A, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: k, stopOpacity: O }),
      /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: k, stopOpacity: I }),
      /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: k, stopOpacity: J })
    ] }, A);
  }) }) : null, [T]), R = U.useMemo(() => {
    if (!T.length) return null;
    const [b] = E.domain(), w = E(b), A = T.map((k, O) => {
      const I = k.start, J = k.end, ue = C[I], ce = C[J], Z = I > 0 ? C[I - 1] : ue, G = J < C.length - 1 ? C[J + 1] : ce;
      let W = I === 0 ? Math.max(0, ue - (C.length > 1 ? (C[1] - ue) / 2 : 10)) : (Z + ue) / 2, re = J === C.length - 1 ? Math.min(N, ce + (C.length > 1 ? (ce - C[C.length - 2]) / 2 : 10)) : (ce + G) / 2, z = null, oe = null;
      if (k.category === "common")
        I > 0 && (W = C[I - 1], z = E(j[I - 1].y)), J < j.length - 1 && (re = C[J + 1], oe = E(j[J + 1].y));
      else if (W = ue, I > 0) {
        const le = L[I - 1];
        le !== "common" && le !== k.category && (W = C[I - 1], z = E(j[I - 1].y));
      }
      let Y = `M ${W} ${w}`;
      const ie = E(j[I].y);
      z != null ? (Y += ` L ${W} ${z}`, ue !== W && (Y += ` L ${ue} ${ie}`)) : (Y += ` L ${W} ${ie}`, ue !== W && (Y += ` L ${ue} ${ie}`));
      for (let le = I; le <= J; le++) {
        const xe = C[le], Ce = E(j[le].y);
        Y += ` L ${xe} ${Ce}`;
      }
      return k.category === "common" && oe != null ? (re !== ce && (Y += ` L ${re} ${oe}`), Y += ` L ${re} ${w} Z`) : Y += ` L ${ce} ${w} L ${re} ${w} Z`, /* @__PURE__ */ r.jsx(
        "path",
        {
          d: Y,
          fill: `url(#spc-seq-grad-${O})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${O}`
      );
    });
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: A });
  }, [T, C, N, E, j]), D = U.useMemo(() => {
    if (!c?.timeframe && j.length >= 2) {
      const b = j.map((J) => J.x instanceof Date ? J.x : new Date(J.x)), w = new Date(Math.min(...b.map((J) => J.getTime()))), A = new Date(Math.max(...b.map((J) => J.getTime()))), k = Math.round((A.getTime() - w.getTime()) / 864e5) || 0;
      if (k < 14)
        return `The chart shows a timeframe of ${k + 1} days`;
      const O = Math.round(k / 7);
      return O < 20 ? `The chart shows a timeframe of ${O} weeks` : `The chart shows a timeframe of ${(A.getFullYear() - w.getFullYear()) * 12 + (A.getMonth() - w.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, j]), $ = (b) => {
    const w = b % 10, A = b % 100;
    return w === 1 && A !== 11 ? `${b}st` : w === 2 && A !== 12 ? `${b}nd` : w === 3 && A !== 13 ? `${b}rd` : `${b}th`;
  }, y = (b) => `${$(b.getDate())} ${b.toLocaleString("en-GB", { month: "long" })}, ${b.getFullYear()}`, H = U.useCallback(
    ({ index: b, x: w, y: A }) => {
      const k = i?.[b], O = w instanceof Date ? w : new Date(w), I = y(O), J = c?.measureUnit ? ` ${c.measureUnit}` : "", ue = c?.measureName ? ` ${c.measureName}` : "";
      if (!k)
        return `General summary is: ${D ? D + ". " : ""}Point ${b + 1}, ${I}, ${A}${J}${ue}`;
      const ce = ds(k.variationIcon) || "Variation", Z = cs(k), G = Z.length ? ` Rules: ${[...new Set(Z.map((re) => ls[re].narration))].join("; ")}.` : " No special cause rules.", W = [];
      return c?.measureName && W.push(`Measure: ${c.measureName}.`), c?.datasetContext && W.push(`${c.datasetContext}.`), c?.organisation && W.push(`Organisation: ${c.organisation}.`), c?.additionalNote && W.push(c.additionalNote), [
        "General summary is:",
        ...W,
        `Point ${b + 1} recorded on `,
        I + ",",
        `with a value of ${A} ${J}${ue}`,
        ce + ".",
        G
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, D]
  ), Q = U.useCallback(
    (b, w) => i?.[b] ? H({
      index: b,
      seriesId: "process",
      x: w.x instanceof Date ? w.x : new Date(w.x),
      y: w.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, H]
  );
  return /* @__PURE__ */ r.jsx(Ah, { children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "fdp-spc-chart",
      role: "group",
      "aria-label": "Statistical process control chart",
      "aria-roledescription": "chart",
      children: [
        /* @__PURE__ */ r.jsx(
          "svg",
          {
            width: M.xScale.range()[1] + 56 + 16,
            height: M.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(bo, { type: "x" }),
              /* @__PURE__ */ r.jsx(bo, { type: "y" }),
              /* @__PURE__ */ r.jsx(eh, { axis: "y" }),
              v,
              R,
              g.map((b, w) => {
                const A = j[b];
                if (!A) return null;
                const k = u(A.x instanceof Date ? A.x : new Date(A.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: k,
                    x2: k,
                    y1: 0,
                    y2: E.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${w}`
                );
              }),
              x?.mean.map((b, w) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__cl", x1: b.x1, x2: b.x2, y1: b.y, y2: b.y, "aria-hidden": "true" }, `mean-${w}`)),
              S != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ r.jsx(r.Fragment, {}),
              x?.ucl.map((b, w) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--ucl", x1: b.x1, x2: b.x2, y1: b.y, y2: b.y, "aria-hidden": "true", strokeWidth: 2 }, `ucl-${w}`)),
              x?.lcl.map((b, w) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--lcl", x1: b.x1, x2: b.x2, y1: b.y, y2: b.y, "aria-hidden": "true", strokeWidth: 2 }, `lcl-${w}`)),
              S != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: u.range()[1],
                    y1: E(S),
                    y2: E(S),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: u.range()[0] - 7,
                    y: E(S) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      S,
                      " ",
                      p || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              o && x && x.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                x.onePos.map((b, w) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__zone fdp-spc__zone--pos1", x1: b.x1, x2: b.x2, y1: b.y, y2: b.y, "aria-hidden": "true", strokeWidth: 2 }, `onePos-${w}`)),
                x.oneNeg.map((b, w) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__zone fdp-spc__zone--neg1", x1: b.x1, x2: b.x2, y1: b.y, y2: b.y, "aria-hidden": "true", strokeWidth: 2 }, `oneNeg-${w}`)),
                x.twoPos.map((b, w) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__zone fdp-spc__zone--pos2", x1: b.x1, x2: b.x2, y1: b.y, y2: b.y, "aria-hidden": "true", strokeWidth: 2 }, `twoPos-${w}`)),
                x.twoNeg.map((b, w) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__zone fdp-spc__zone--neg2", x1: b.x1, x2: b.x2, y1: b.y, y2: b.y, "aria-hidden": "true", strokeWidth: 2 }, `twoNeg-${w}`))
              ] }),
              /* @__PURE__ */ r.jsx(
                Bh,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (b) => b.x instanceof Date ? b.x : new Date(b.x),
                  smooth: !1,
                  strokeWidth: h
                }
              ),
              t && j.map((b, w) => {
                const A = u(b.x instanceof Date ? b.x : new Date(b.x)), k = E(b.y), O = _.has(w), I = B?.[w], J = [
                  "fdp-spc__point",
                  O && s ? "fdp-spc__point--ooc" : null,
                  l && I?.special && I.concern ? "fdp-spc__point--sc-concern" : null,
                  l && I?.special && I.improvement ? "fdp-spc__point--sc-improvement" : null,
                  I?.assurance === At.Pass ? "fdp-spc__point--assurance-pass" : null,
                  I?.assurance === At.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), ue = `Point ${w + 1} value ${b.y}` + (I?.special ? " special cause" : "") + (I?.variation === Ge.Improvement ? " improving" : I?.variation === Ge.Concern ? " concern" : ""), ce = P?.focused?.index === w;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: A,
                    cy: k,
                    r: 5,
                    className: J,
                    "data-variation": I?.variation,
                    "data-assurance": I?.assurance,
                    "aria-label": ue,
                    ...ce ? { "aria-describedby": `spc-tooltip-${w}` } : {}
                  },
                  w
                );
              }),
              d && l && B && j.map((b, w) => {
                const A = B[w];
                if (!A || !(A.concern || A.improvement)) return null;
                const k = u(b.x instanceof Date ? b.x : new Date(b.x)), O = E(b.y);
                let I = O - 10;
                const J = 12, ue = E.range()[0] - 4;
                I < J && (I = Math.min(O + 16, ue));
                const ce = u.range()[1], Z = Math.min(Math.max(k, 0), ce - 0);
                return /* @__PURE__ */ r.jsx(
                  "text",
                  {
                    x: Z,
                    y: I,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${A.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: A.concern ? "!" : "★"
                  },
                  `icon-${w}`
                );
              }),
              m && /* @__PURE__ */ r.jsx(
                lp,
                {
                  width: u.range()[1],
                  height: E.range()[0]
                }
              ),
              /* @__PURE__ */ r.jsx(
                Li,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: Q,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (b) => y(b)
                }
              )
            ] })
          }
        ),
        n && /* @__PURE__ */ r.jsx(
          Eh,
          {
            format: (b) => H({ ...b, x: b.x instanceof Date ? b.x : new Date(b.x) })
          }
        )
      ]
    }
  ) });
}, lp = ({
  width: e,
  height: t
}) => {
  const n = Et();
  return n ? /* @__PURE__ */ r.jsx(
    "rect",
    {
      className: "fdp-spc__interaction-layer",
      width: e,
      height: t,
      fill: "transparent",
      tabIndex: 0,
      "aria-label": "Interactive chart area. Use arrow keys to move between points.",
      onMouseMove: (a) => {
        const s = a.currentTarget.getBoundingClientRect(), i = a.clientX - s.left, l = a.clientY - s.top;
        n.focusNearest(i, l);
      },
      onMouseLeave: () => n.clear(),
      onKeyDown: (a) => {
        switch (a.key) {
          case "ArrowRight":
            n.focusNextPoint(), a.preventDefault();
            break;
          case "ArrowLeft":
            n.focusPrevPoint(), a.preventDefault();
            break;
          case "ArrowDown":
            n.focusNextSeries(), a.preventDefault();
            break;
          case "ArrowUp":
            n.focusPrevSeries(), a.preventDefault();
            break;
          case "Home":
            n.focusFirstPoint(), a.preventDefault();
            break;
          case "End":
            n.focusLastPoint(), a.preventDefault();
            break;
        }
      },
      style: { cursor: "crosshair" }
    }
  ) : null;
}, Rx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: At,
  AssuranceResult: Ut,
  Direction: _e,
  ImprovementDirection: zt,
  MetricPolarity: Je,
  SPCAssuranceIcon: gs,
  SPCChart: op,
  SPCTooltipOverlay: Li,
  SPCVariationIcon: ms,
  VARIATION_COLOR_TOKENS: lt,
  VariationIcon: Ge,
  VariationJudgement: Ke,
  VariationState: Ie,
  buildSpc: Di,
  extractRuleIds: cs,
  getVariationColorHex: Zh,
  getVariationColorToken: Mi,
  getVariationColour: Ai,
  getVariationTrend: ps,
  ruleGlossary: ls,
  variationLabel: ds
}, Symbol.toStringTag, { value: "Module" })), cp = "150ms", dp = "300ms", up = "500ms", fp = "cubic-bezier(0.4, 0, 1, 1)", hp = "cubic-bezier(0, 0, 0.2, 1)", pp = "cubic-bezier(0.4, 0, 0.2, 1)", mp = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", gp = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", xp = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", bp = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", yp = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", vp = "1px", wp = "2px", _p = "4px", Sp = "4px", kp = "4px", Cp = "2px", jp = "1px", Np = "0px", Tp = "4px", $p = "8px", Dp = "12px", Ei = "#d8dde0", Pi = "#4c6272", Ri = "#d8dde0", Hi = "#aeb7bd", zi = "#d5281b", Wi = "#005eb8", Oi = "#ffffff", Ui = "#212b32", Gi = "#007f3b", Yi = "#330072", Vi = "#7c2855", qi = "#d5281b", Ki = "#ffeb3b", Xi = "#fff9c4", Zi = "#ffb81c", Ji = "#ed8b00", Qi = "#00a499", el = "#ae2573", tl = "#4c6272", nl = "#768692", rl = "#aeb7bd", al = "#d8dde0", sl = "#f0f4f5", Mp = "#212b32", Ip = "#4c6272", Lp = "#ffffff", Fp = "#212b32", Ap = "#005eb8", Bp = "#7c2855", Ep = "#003087", Pp = "#330072", Rp = "#ffeb3b", Hp = "#212b32", zp = "#d8dde0", Wp = "#ffffff33", Op = "#d5281b", Up = "#4c6272", Gp = "#ffffff", Yp = "#007f3b", Vp = "#ffffff", qp = "#006530", Kp = "#004021", Xp = "#004021", Zp = "#00000000", Jp = "#ffffff", Qp = "#005eb8", em = "#005eb8", tm = "#d9e5f2", nm = "#c7daf0", rm = "#005eb8", am = "#ffffff", sm = "#212b32", om = "#d9dde0", im = "#b3bcc2", lm = "#b3bcc2", cm = "#d5281b", dm = "#aa2016", um = "#6a140e", fm = "#6a140e", hm = "#005eb8", pm = "#004b93", mm = "#002f5c", gm = "#002f5c", xm = "8px", bm = "16px", ym = "12px", vm = "16px", wm = "4px", _m = "40px", Sm = "4px", km = "40px", Cm = "12px", jm = "16px", Nm = "32px", Tm = "16px", $m = "20px", Dm = "28px", Mm = "9px", Im = "2px", Lm = "16px", Fm = "24px", Am = "8px", Bm = "24px", Em = "16px", Pm = "4px", Rm = "4px", Hm = "4px", zm = "8px", Wm = "4px", Om = "16px", Um = "#007f3b", Gm = "#006530", Ym = "#004021", Vm = "#d8dde0", qm = "#ffffff", Km = "#768692", Xm = "#00000000", Zm = "#ffeb3b", Jm = "#00000000", Qm = "#ffffff", eg = "#d9e5f2", tg = "#c7daf0", ng = "#005eb8", rg = "#005eb8", ol = "8px", il = "16px", ll = "12px", cl = "16px", ag = "2px", sg = "4px", og = "4px", ig = "600", lg = "#ffffff", cg = "#d8dde0", dg = "#aeb7bd", ug = "#f0f4f5", fg = "#212b32", hg = "#212b32", pg = "#005eb8", dl = "16px", ul = "32px", fl = "16px", mg = "1px", gg = "4px", xg = "none", bg = "0 2px 4px rgba(0, 0, 0, 0.1)", yg = "#ffffff", vg = "#ffffff", wg = "#d8dde0", _g = "#ffffff", Sg = "#4c6272", kg = "#ffeb3b", Cg = "#d5281b", jg = "#aeb7bd", Ng = "#212b32", Tg = "#4c6272", $g = "#768692", Dg = "#212b32", Mg = "#ffffff", Ig = "600", Lg = "#d5281b", Fg = "600", Ag = "#4c6272", hl = "4px", pl = "40px", ml = "40px", gl = "12px", Bg = "2px", Eg = "4px", Pg = "0px", Rg = "16px", Hg = "18px", zg = "24px", Wg = "32px", Og = "34px", Ug = "32px", Gg = "40px", Yg = "48px", Vg = "5.4ex", qg = "7.2ex", Kg = "9ex", Xg = "10.8ex", Zg = "20ex", Jg = "38ex", Qg = "56ex", e0 = "44px", t0 = "40px", n0 = "1020px", r0 = "100%", a0 = "50%", s0 = "33.333%", o0 = "25%", i0 = "20%", l0 = "320px", c0 = "641px", d0 = "1025px", u0 = "1280px", f0 = "960px", h0 = "32px", p0 = "16px", m0 = "#d5281b", g0 = "#d5281b", x0 = "#ffffff", b0 = "#007f3b", y0 = "#007f3b", v0 = "#ffffff", w0 = "#ffeb3b", _0 = "#ffeb3b", S0 = "#212b32", k0 = "#005eb8", C0 = "#005eb8", j0 = "#ffffff", N0 = "#d8dde0", T0 = "#aeb7bd", $0 = "#768692", D0 = "0 4px 0 #004021", M0 = "0 4px 0 #005eb8", I0 = "0 4px 0 #6a140e", L0 = "0 4px 0 #ffeb3b", F0 = "none", A0 = "0 2px 4px rgba(0, 0, 0, 0.1)", B0 = "4px", E0 = "0px", P0 = "solid", R0 = "0 0 0 3px #ffeb3b", H0 = "0 0 0 3px #ffeb3b", z0 = "none", W0 = "0 1px 3px rgba(0, 0, 0, 0.12)", O0 = "0 2px 6px rgba(0, 0, 0, 0.16)", U0 = "0 4px 12px rgba(0, 0, 0, 0.20)", xl = "0", bl = "4px", yl = "8px", vl = "16px", wl = "24px", _l = "32px", Sl = "40px", kl = "48px", Cl = "56px", jl = "64px", Ca = "0", ja = "0", Na = "4px", Ta = "4px", $a = "8px", Da = "8px", Ma = "8px", Ia = "16px", La = "16px", Fa = "24px", Aa = "24px", Ba = "32px", Ea = "32px", Pa = "40px", Ra = "40px", Ha = "48px", za = "48px", Wa = "56px", Oa = "56px", Ua = "64px", rr = "Frutiger W01", ar = "Arial, Helvetica, sans-serif", sr = "sans-serif", or = "400", ir = "600", lr = "400", cr = "12px", dr = "14px", ur = "12pt", fr = "14px", hr = "16px", pr = "12pt", mr = "16px", gr = "19px", xr = "13pt", br = "19px", yr = "22px", vr = "15pt", wr = "22px", _r = "26px", Sr = "17pt", kr = "27px", Cr = "36px", jr = "20pt", Nr = "33px", Tr = "48px", $r = "24pt", Ga = "16px", Ya = "24px", xt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, bt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, yt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, _t = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, St = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, kt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ct = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, jt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, G0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: cp,
  AnimationDurationNormal: dp,
  AnimationDurationSlow: up,
  AnimationEasingBounce: mp,
  AnimationEasingEaseIn: fp,
  AnimationEasingEaseInOut: pp,
  AnimationEasingEaseOut: hp,
  BorderColorCard: Ri,
  BorderColorCardHover: Hi,
  BorderColorDefault: Ei,
  BorderColorError: zi,
  BorderColorForm: Pi,
  BorderRadiusLarge: Dp,
  BorderRadiusMedium: $p,
  BorderRadiusNone: Np,
  BorderRadiusSmall: Tp,
  BorderWidthCardBottom: Sp,
  BorderWidthDefault: vp,
  BorderWidthFormElement: wp,
  BorderWidthFormElementError: _p,
  BorderWidthPanel: kp,
  BorderWidthTableCell: jp,
  BorderWidthTableHeader: Cp,
  BreakpointDesktop: d0,
  BreakpointLargeDesktop: u0,
  BreakpointMobile: l0,
  BreakpointTablet: c0,
  ButtonBorderRadius: sg,
  ButtonBorderWidth: ag,
  ButtonPrimaryBackgroundActive: Ym,
  ButtonPrimaryBackgroundDefault: Um,
  ButtonPrimaryBackgroundDisabled: Vm,
  ButtonPrimaryBackgroundHover: Gm,
  ButtonPrimaryBorderDefault: Xm,
  ButtonPrimaryBorderFocus: Zm,
  ButtonPrimaryTextDefault: qm,
  ButtonPrimaryTextDisabled: Km,
  ButtonSecondaryBackgroundActive: tg,
  ButtonSecondaryBackgroundDefault: Jm,
  ButtonSecondaryBackgroundHover: eg,
  ButtonSecondaryBackgroundSolid: Qm,
  ButtonSecondaryBorderDefault: rg,
  ButtonSecondaryTextDefault: ng,
  ButtonShadowSize: og,
  ButtonSpacingPaddingHorizontalDesktop: cl,
  ButtonSpacingPaddingHorizontalMobile: il,
  ButtonSpacingPaddingVerticalDesktop: ll,
  ButtonSpacingPaddingVerticalMobile: ol,
  ButtonTypographyWeight: ig,
  CardBackgroundDefault: lg,
  CardBorderBottom: ug,
  CardBorderDefault: cg,
  CardBorderHover: dg,
  CardBorderWidthBottom: gg,
  CardBorderWidthDefault: mg,
  CardShadowDefault: xg,
  CardShadowHover: bg,
  CardSpacingHeadingMargin: fl,
  CardSpacingPaddingDesktop: ul,
  CardSpacingPaddingMobile: dl,
  CardTextDescription: hg,
  CardTextHeading: fg,
  CardTextLink: pg,
  ColorBorderDefault: zp,
  ColorBorderSecondary: Wp,
  ColorButtonLoginActive: mm,
  ColorButtonLoginBackground: hm,
  ColorButtonLoginHover: pm,
  ColorButtonLoginShadow: gm,
  ColorButtonPrimaryActive: Kp,
  ColorButtonPrimaryBackground: Yp,
  ColorButtonPrimaryHover: qp,
  ColorButtonPrimaryShadow: Xp,
  ColorButtonPrimaryText: Vp,
  ColorButtonReverseActive: im,
  ColorButtonReverseBackground: am,
  ColorButtonReverseHover: om,
  ColorButtonReverseShadow: lm,
  ColorButtonReverseText: sm,
  ColorButtonSecondaryActive: nm,
  ColorButtonSecondaryBackground: Zp,
  ColorButtonSecondaryBackgroundSolid: Jp,
  ColorButtonSecondaryBorder: Qp,
  ColorButtonSecondaryHover: tm,
  ColorButtonSecondaryShadow: rm,
  ColorButtonSecondaryText: em,
  ColorButtonWarningActive: um,
  ColorButtonWarningBackground: cm,
  ColorButtonWarningHover: dm,
  ColorButtonWarningShadow: fm,
  ColorError: Op,
  ColorFocusBackground: Rp,
  ColorFocusText: Hp,
  ColorFormBackground: Gp,
  ColorFormBorder: Up,
  ColorGrey1: tl,
  ColorGrey2: nl,
  ColorGrey3: rl,
  ColorGrey4: al,
  ColorGrey5: sl,
  ColorLinkActive: Ep,
  ColorLinkDefault: Ap,
  ColorLinkHover: Bp,
  ColorLinkVisited: Pp,
  ColorPrimaryBlack: Ui,
  ColorPrimaryBlue: Wi,
  ColorPrimaryDarkPink: Vi,
  ColorPrimaryGreen: Gi,
  ColorPrimaryPurple: Yi,
  ColorPrimaryRed: qi,
  ColorPrimaryWhite: Oi,
  ColorPrimaryYellow: Ki,
  ColorSecondaryAquaGreen: Qi,
  ColorSecondaryOrange: Ji,
  ColorSecondaryPaleYellow: Xi,
  ColorSecondaryPink: el,
  ColorSecondaryWarmYellow: Zi,
  ColorTextPrimary: Mp,
  ColorTextPrint: Fp,
  ColorTextReverse: Lp,
  ColorTextSecondary: Ip,
  ComponentBlur: Rm,
  ComponentBreadcrumbChevronMarginLeft: Mm,
  ComponentBreadcrumbChevronMarginRight: Im,
  ComponentBreadcrumbPaddingTopDesktop: Fm,
  ComponentBreadcrumbPaddingTopMobile: Lm,
  ComponentButtonPaddingDesktopHorizontal: vm,
  ComponentButtonPaddingDesktopVertical: ym,
  ComponentButtonPaddingMobileHorizontal: bm,
  ComponentButtonPaddingMobileVertical: xm,
  ComponentButtonShadowSize: wm,
  ComponentCardHeadingMargin: Tm,
  ComponentCardPaddingDesktop: Nm,
  ComponentCardPaddingMobile: jm,
  ComponentDetails: zm,
  ComponentExpander: Wm,
  ComponentFormCheckboxLabelPadding: Cm,
  ComponentFormCheckboxSize: km,
  ComponentFormInputMinHeight: _m,
  ComponentFormInputPadding: Sm,
  ComponentLink: Hm,
  ComponentPagination: Om,
  ComponentPanelPaddingDesktop: Dm,
  ComponentPanelPaddingMobile: $m,
  ComponentSpread: Pm,
  ComponentSummaryListCellPaddingHorizontal: Bm,
  ComponentSummaryListCellPaddingVertical: Am,
  ComponentSummaryListRowMargin: Em,
  ElevationHigh: U0,
  ElevationLow: W0,
  ElevationMedium: O0,
  ElevationNone: z0,
  FocusOutlineOffset: E0,
  FocusOutlineStyle: P0,
  FocusOutlineWidth: B0,
  FocusShadowButton: H0,
  FocusShadowInput: R0,
  FontFamilyBase: rr,
  FontFamilyFallback: ar,
  FontFamilyPrint: sr,
  FontLineHeightBase: Ya,
  FontSize14Mobile: cr,
  FontSize14Print: ur,
  FontSize14Tablet: dr,
  FontSize16Mobile: fr,
  FontSize16Print: pr,
  FontSize16Tablet: hr,
  FontSize19Mobile: mr,
  FontSize19Print: xr,
  FontSize19Tablet: gr,
  FontSize22Mobile: br,
  FontSize22Print: vr,
  FontSize22Tablet: yr,
  FontSize26Mobile: wr,
  FontSize26Print: Sr,
  FontSize26Tablet: _r,
  FontSize36Mobile: kr,
  FontSize36Print: jr,
  FontSize36Tablet: Cr,
  FontSize48Mobile: Nr,
  FontSize48Print: $r,
  FontSize48Tablet: Tr,
  FontSizeBase: Ga,
  FontWeightBold: ir,
  FontWeightLight: lr,
  FontWeightNormal: or,
  FormBorderRadius: Pg,
  FormBorderWidthDefault: Bg,
  FormBorderWidthError: Eg,
  FormErrorTextDefault: Lg,
  FormErrorTypographyWeight: Fg,
  FormHintTextDefault: Ag,
  FormInputBackgroundDefault: yg,
  FormInputBackgroundDisabled: wg,
  FormInputBackgroundError: _g,
  FormInputBackgroundFocus: vg,
  FormInputBorderDefault: Sg,
  FormInputBorderDisabled: jg,
  FormInputBorderError: Cg,
  FormInputBorderFocus: kg,
  FormInputTextDefault: Ng,
  FormInputTextDisabled: $g,
  FormInputTextPlaceholder: Tg,
  FormLabelTextDefault: Dg,
  FormLabelTextRequired: Mg,
  FormLabelTypographyWeight: Ig,
  FormSpacingCheckboxLabelPadding: gl,
  FormSpacingCheckboxSize: ml,
  FormSpacingInputMinHeight: pl,
  FormSpacingInputPadding: hl,
  GridGutter: h0,
  GridGutterHalf: p0,
  GridPageWidth: f0,
  HeadingsNhsukHeadingL: bt,
  HeadingsNhsukHeadingM: yt,
  HeadingsNhsukHeadingS: vt,
  HeadingsNhsukHeadingXl: xt,
  HeadingsNhsukHeadingXs: wt,
  LayoutColumnActions: i0,
  LayoutColumnFull: r0,
  LayoutColumnHalf: a0,
  LayoutColumnQuarter: o0,
  LayoutColumnThird: s0,
  LayoutContainerMaxWidth: n0,
  ParagraphsBody: _t,
  ParagraphsBodyLarge: St,
  ParagraphsBodySmall: kt,
  ParagraphsLedeText: Ct,
  ParagraphsLedeTextSmall: jt,
  ShadowButtonDefault: D0,
  ShadowButtonFocus: L0,
  ShadowButtonSecondary: M0,
  ShadowButtonWarning: I0,
  ShadowCardDefault: F0,
  ShadowCardHover: A0,
  SizeButtonMinHeightDesktop: t0,
  SizeButtonMinHeightMobile: e0,
  SizeFormControlLarge: Yg,
  SizeFormControlMedium: Gg,
  SizeFormControlSmall: Ug,
  SizeFormInputWidth2xl: Jg,
  SizeFormInputWidth3xl: Qg,
  SizeFormInputWidthLg: Xg,
  SizeFormInputWidthMd: Kg,
  SizeFormInputWidthSm: qg,
  SizeFormInputWidthXl: Zg,
  SizeFormInputWidthXs: Vg,
  SizeIconExtraLarge: Wg,
  SizeIconLarge: zg,
  SizeIconMedium: Hg,
  SizeIconNhsDefault: Og,
  SizeIconSmall: Rg,
  Spacing0: xl,
  Spacing1: bl,
  Spacing2: yl,
  Spacing3: vl,
  Spacing4: wl,
  Spacing5: _l,
  Spacing6: Sl,
  Spacing7: kl,
  Spacing8: Cl,
  Spacing9: jl,
  SpacingResponsive0Mobile: Ca,
  SpacingResponsive0Tablet: ja,
  SpacingResponsive1Mobile: Na,
  SpacingResponsive1Tablet: Ta,
  SpacingResponsive2Mobile: $a,
  SpacingResponsive2Tablet: Da,
  SpacingResponsive3Mobile: Ma,
  SpacingResponsive3Tablet: Ia,
  SpacingResponsive4Mobile: La,
  SpacingResponsive4Tablet: Fa,
  SpacingResponsive5Mobile: Aa,
  SpacingResponsive5Tablet: Ba,
  SpacingResponsive6Mobile: Ea,
  SpacingResponsive6Tablet: Pa,
  SpacingResponsive7Mobile: Ra,
  SpacingResponsive7Tablet: Ha,
  SpacingResponsive8Mobile: za,
  SpacingResponsive8Tablet: Wa,
  SpacingResponsive9Mobile: Oa,
  SpacingResponsive9Tablet: Ua,
  StateDisabledBackground: N0,
  StateDisabledBorder: T0,
  StateDisabledText: $0,
  StateErrorBackground: m0,
  StateErrorBorder: g0,
  StateErrorText: x0,
  StateInfoBackground: k0,
  StateInfoBorder: C0,
  StateInfoText: j0,
  StateSuccessBackground: b0,
  StateSuccessBorder: y0,
  StateSuccessText: v0,
  StateWarningBackground: w0,
  StateWarningBorder: _0,
  StateWarningText: S0,
  TransitionButtonDefault: gp,
  TransitionButtonShadow: xp,
  TransitionCardHover: yp,
  TransitionInputFocus: bp
}, Symbol.toStringTag, { value: "Module" })), Hx = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), zx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: xt.fontFamily,
      fontWeight: xt.fontWeight,
      fontSize: xt.fontSize.mobile,
      lineHeight: xt.lineHeight,
      marginTop: xt.marginTop,
      marginBottom: xt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Wx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: bt.fontFamily,
      fontWeight: bt.fontWeight,
      fontSize: bt.fontSize.mobile,
      lineHeight: bt.lineHeight,
      marginTop: bt.marginTop,
      marginBottom: bt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Ox = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: yt.fontFamily,
      fontWeight: yt.fontWeight,
      fontSize: yt.fontSize.mobile,
      lineHeight: yt.lineHeight,
      marginTop: yt.marginTop,
      marginBottom: yt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Ux = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: vt.fontFamily,
      fontWeight: vt.fontWeight,
      fontSize: vt.fontSize.mobile,
      lineHeight: vt.lineHeight,
      marginTop: vt.marginTop,
      marginBottom: vt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Gx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: wt.fontFamily,
      fontWeight: wt.fontWeight,
      fontSize: wt.fontSize.mobile,
      lineHeight: wt.lineHeight,
      marginTop: wt.marginTop,
      marginBottom: wt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Yx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: _t.fontFamily,
      fontWeight: _t.fontWeight,
      fontSize: _t.fontSize.mobile,
      lineHeight: _t.lineHeight,
      marginTop: _t.marginTop,
      marginBottom: _t.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Vx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: St.fontFamily,
      fontWeight: St.fontWeight,
      fontSize: St.fontSize.mobile,
      lineHeight: St.lineHeight,
      marginTop: St.marginTop,
      marginBottom: St.marginBottom.mobile,
      ...n
    },
    children: e
  }
), qx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: kt.fontFamily,
      fontWeight: kt.fontWeight,
      fontSize: kt.fontSize.mobile,
      lineHeight: kt.lineHeight,
      marginTop: kt.marginTop,
      marginBottom: kt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Kx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ct.fontFamily,
      fontWeight: Ct.fontWeight,
      fontSize: Ct.fontSize.mobile,
      lineHeight: Ct.lineHeight,
      marginTop: Ct.marginTop,
      marginBottom: Ct.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Xx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: jt.fontFamily,
      fontWeight: jt.fontWeight,
      fontSize: jt.fontSize.mobile,
      lineHeight: jt.lineHeight,
      marginTop: jt.marginTop,
      marginBottom: jt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Zx = () => De(() => G0, []), Jx = () => De(() => ({
  // Border colors
  BorderColorDefault: Ei,
  BorderColorForm: Pi,
  BorderColorCard: Ri,
  BorderColorCardHover: Hi,
  BorderColorError: zi,
  // Primary colors
  ColorPrimaryBlue: Wi,
  ColorPrimaryWhite: Oi,
  ColorPrimaryBlack: Ui,
  ColorPrimaryGreen: Gi,
  ColorPrimaryPurple: Yi,
  ColorPrimaryDarkPink: Vi,
  ColorPrimaryRed: qi,
  ColorPrimaryYellow: Ki,
  // Secondary colors
  ColorSecondaryPaleYellow: Xi,
  ColorSecondaryWarmYellow: Zi,
  ColorSecondaryOrange: Ji,
  ColorSecondaryAquaGreen: Qi,
  ColorSecondaryPink: el,
  // Grey scale
  ColorGrey1: tl,
  ColorGrey2: nl,
  ColorGrey3: rl,
  ColorGrey4: al,
  ColorGrey5: sl
}), []), Qx = () => De(() => ({
  Spacing0: xl,
  Spacing1: bl,
  Spacing2: yl,
  Spacing3: vl,
  Spacing4: wl,
  Spacing5: _l,
  Spacing6: Sl,
  Spacing7: kl,
  Spacing8: Cl,
  Spacing9: jl
}), []), eb = () => De(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: cr,
    Size16: fr,
    Size19: mr,
    Size22: br,
    Size26: wr,
    Size36: kr,
    Size48: Nr
  },
  Tablet: {
    Size14: dr,
    Size16: hr,
    Size19: gr,
    Size22: yr,
    Size26: _r,
    Size36: Cr,
    Size48: Tr
  },
  Print: {
    Size14: ur,
    Size16: pr,
    Size19: xr,
    Size22: vr,
    Size26: Sr,
    Size36: jr,
    Size48: $r
  },
  Family: {
    Base: rr,
    Fallback: ar,
    Print: sr
  },
  Weight: {
    Normal: or,
    Bold: ir,
    Light: lr
  },
  Base: {
    Size: Ga,
    LineHeight: Ya
  },
  // Backward compatibility - individual exports
  FontFamilyBase: rr,
  FontFamilyFallback: ar,
  FontFamilyPrint: sr,
  FontWeightNormal: or,
  FontWeightBold: ir,
  FontWeightLight: lr,
  FontSize14Mobile: cr,
  FontSize14Tablet: dr,
  FontSize14Print: ur,
  FontSize16Mobile: fr,
  FontSize16Tablet: hr,
  FontSize16Print: pr,
  FontSize19Mobile: mr,
  FontSize19Tablet: gr,
  FontSize19Print: xr,
  FontSize22Mobile: br,
  FontSize22Tablet: yr,
  FontSize22Print: vr,
  FontSize26Mobile: wr,
  FontSize26Tablet: _r,
  FontSize26Print: Sr,
  FontSize36Mobile: kr,
  FontSize36Tablet: Cr,
  FontSize36Print: jr,
  FontSize48Mobile: Nr,
  FontSize48Tablet: Tr,
  FontSize48Print: $r,
  FontSizeBase: Ga,
  FontLineHeightBase: Ya
}), []), tb = () => De(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Ca,
    Size1: Na,
    Size2: $a,
    Size3: Ma,
    Size4: La,
    Size5: Aa,
    Size6: Ea,
    Size7: Ra,
    Size8: za,
    Size9: Oa
  },
  Tablet: {
    Size0: ja,
    Size1: Ta,
    Size2: Da,
    Size3: Ia,
    Size4: Fa,
    Size5: Ba,
    Size6: Pa,
    Size7: Ha,
    Size8: Wa,
    Size9: Ua
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Ca,
  SpacingResponsive0Tablet: ja,
  SpacingResponsive1Mobile: Na,
  SpacingResponsive1Tablet: Ta,
  SpacingResponsive2Mobile: $a,
  SpacingResponsive2Tablet: Da,
  SpacingResponsive3Mobile: Ma,
  SpacingResponsive3Tablet: Ia,
  SpacingResponsive4Mobile: La,
  SpacingResponsive4Tablet: Fa,
  SpacingResponsive5Mobile: Aa,
  SpacingResponsive5Tablet: Ba,
  SpacingResponsive6Mobile: Ea,
  SpacingResponsive6Tablet: Pa,
  SpacingResponsive7Mobile: Ra,
  SpacingResponsive7Tablet: Ha,
  SpacingResponsive8Mobile: za,
  SpacingResponsive8Tablet: Wa,
  SpacingResponsive9Mobile: Oa,
  SpacingResponsive9Tablet: Ua
}), []), nb = () => De(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: ol,
  ButtonSpacingPaddingHorizontalMobile: il,
  ButtonSpacingPaddingVerticalDesktop: ll,
  ButtonSpacingPaddingHorizontalDesktop: cl,
  // Card spacing	
  CardSpacingPaddingMobile: dl,
  CardSpacingPaddingDesktop: ul,
  CardSpacingHeadingMargin: fl,
  // Form spacing
  FormSpacingInputPadding: hl,
  FormSpacingInputMinHeight: pl,
  FormSpacingCheckboxSize: ml,
  FormSpacingCheckboxLabelPadding: gl
}), []), rb = () => De(() => ({
  xl: xt,
  l: bt,
  m: yt,
  s: vt,
  xs: wt
}), []), ab = () => De(() => ({
  body: _t,
  bodyLarge: St,
  bodySmall: kt,
  ledeText: Ct,
  ledeTextSmall: jt
}), []), sb = () => De(() => ({
  headings: {
    xl: xt,
    l: bt,
    m: yt,
    s: vt,
    xs: wt
  },
  paragraphs: {
    body: _t,
    bodyLarge: St,
    bodySmall: kt,
    ledeText: Ct,
    ledeTextSmall: jt
  },
  fonts: {
    family: {
      base: rr,
      fallback: ar,
      print: sr
    },
    weight: {
      normal: or,
      bold: ir,
      light: lr
    },
    sizes: {
      mobile: {
        size14: cr,
        size16: fr,
        size19: mr,
        size22: br,
        size26: wr,
        size36: kr,
        size48: Nr
      },
      tablet: {
        size14: dr,
        size16: hr,
        size19: gr,
        size22: yr,
        size26: _r,
        size36: Cr,
        size48: Tr
      },
      print: {
        size14: ur,
        size16: pr,
        size19: xr,
        size22: vr,
        size26: Sr,
        size36: jr,
        size48: $r
      }
    }
  }
}), []);
function ob(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, o] = U.useState(t), s = U.useCallback(() => o("three-column"), []), i = U.useCallback(() => o((d) => d === "three-column" ? n : d), [n]), l = U.useCallback(() => o((d) => d === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const Nl = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, nt = {
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
function ib(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...Nl, ...e }, a = [];
  return n?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${nt.normal.eot}?#iefix") format("eot"),
       url("${t}${nt.normal.woff2}") format("woff2"),
       url("${t}${nt.normal.woff}") format("woff"),
       url("${t}${nt.normal.ttf}") format("truetype");
  src: url("${t}${nt.normal.eot}");
}`), n?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${nt.bold.eot}?#iefix") format("eot"),
       url("${t}${nt.bold.woff2}") format("woff2"),
       url("${t}${nt.bold.woff}") format("woff"),
       url("${t}${nt.bold.ttf}") format("truetype");
  src: url("${t}${nt.bold.eot}");
}`), a.join(`
`);
}
function lb(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...Nl, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${nt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${nt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${nt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${nt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const cb = '"Frutiger W01", Arial, Helvetica, sans-serif', db = "Arial, Helvetica, sans-serif";
async function ub() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Kl as Account,
  X0 as ActionLink,
  Cx as AdaptiveDataGrid,
  cp as AnimationDurationFast,
  dp as AnimationDurationNormal,
  up as AnimationDurationSlow,
  mp as AnimationEasingBounce,
  fp as AnimationEasingEaseIn,
  pp as AnimationEasingEaseInOut,
  hp as AnimationEasingEaseOut,
  ti as AppointmentCard,
  Lx as AreaSeriesPrimitive,
  tf as AriaDataGrid,
  ma as AriaTabsDataGrid,
  Cx as AriaTabsDataGridAdaptive,
  bo as Axis,
  la as BackLink,
  Ax as BandScalesProvider,
  Fx as BarSeriesPrimitive,
  Ri as BorderColorCard,
  Hi as BorderColorCardHover,
  Ei as BorderColorDefault,
  zi as BorderColorError,
  Pi as BorderColorForm,
  Dp as BorderRadiusLarge,
  $p as BorderRadiusMedium,
  Np as BorderRadiusNone,
  Tp as BorderRadiusSmall,
  Sp as BorderWidthCardBottom,
  vp as BorderWidthDefault,
  wp as BorderWidthFormElement,
  _p as BorderWidthFormElementError,
  kp as BorderWidthPanel,
  jp as BorderWidthTableCell,
  Cp as BorderWidthTableHeader,
  Uu as Breadcrumb,
  d0 as BreakpointDesktop,
  u0 as BreakpointLargeDesktop,
  l0 as BreakpointMobile,
  c0 as BreakpointTablet,
  et as Button,
  sg as ButtonBorderRadius,
  ag as ButtonBorderWidth,
  Ym as ButtonPrimaryBackgroundActive,
  Um as ButtonPrimaryBackgroundDefault,
  Vm as ButtonPrimaryBackgroundDisabled,
  Gm as ButtonPrimaryBackgroundHover,
  Xm as ButtonPrimaryBorderDefault,
  Zm as ButtonPrimaryBorderFocus,
  qm as ButtonPrimaryTextDefault,
  Km as ButtonPrimaryTextDisabled,
  tg as ButtonSecondaryBackgroundActive,
  Jm as ButtonSecondaryBackgroundDefault,
  eg as ButtonSecondaryBackgroundHover,
  Qm as ButtonSecondaryBackgroundSolid,
  rg as ButtonSecondaryBorderDefault,
  ng as ButtonSecondaryTextDefault,
  og as ButtonShadowSize,
  cl as ButtonSpacingPaddingHorizontalDesktop,
  il as ButtonSpacingPaddingHorizontalMobile,
  ll as ButtonSpacingPaddingVerticalDesktop,
  ol as ButtonSpacingPaddingVerticalMobile,
  ig as ButtonTypographyWeight,
  Jo as Card,
  lg as CardBackgroundDefault,
  ug as CardBorderBottom,
  cg as CardBorderDefault,
  dg as CardBorderHover,
  gg as CardBorderWidthBottom,
  mg as CardBorderWidthDefault,
  hx as CardGroup,
  px as CardGroupItem,
  xg as CardShadowDefault,
  bg as CardShadowHover,
  fl as CardSpacingHeadingMargin,
  ul as CardSpacingPaddingDesktop,
  dl as CardSpacingPaddingMobile,
  hg as CardTextDescription,
  fg as CardTextHeading,
  pg as CardTextLink,
  mx as CareCard,
  Z0 as CharacterCount,
  Ex as ChartEnhancer,
  Bx as ChartNoScript,
  Jf as ChartRoot,
  ec as Checkbox,
  rc as Checkboxes,
  zp as ColorBorderDefault,
  Wp as ColorBorderSecondary,
  mm as ColorButtonLoginActive,
  hm as ColorButtonLoginBackground,
  pm as ColorButtonLoginHover,
  gm as ColorButtonLoginShadow,
  Kp as ColorButtonPrimaryActive,
  Yp as ColorButtonPrimaryBackground,
  qp as ColorButtonPrimaryHover,
  Xp as ColorButtonPrimaryShadow,
  Vp as ColorButtonPrimaryText,
  im as ColorButtonReverseActive,
  am as ColorButtonReverseBackground,
  om as ColorButtonReverseHover,
  lm as ColorButtonReverseShadow,
  sm as ColorButtonReverseText,
  nm as ColorButtonSecondaryActive,
  Zp as ColorButtonSecondaryBackground,
  Jp as ColorButtonSecondaryBackgroundSolid,
  Qp as ColorButtonSecondaryBorder,
  tm as ColorButtonSecondaryHover,
  rm as ColorButtonSecondaryShadow,
  em as ColorButtonSecondaryText,
  um as ColorButtonWarningActive,
  cm as ColorButtonWarningBackground,
  dm as ColorButtonWarningHover,
  fm as ColorButtonWarningShadow,
  Op as ColorError,
  Rp as ColorFocusBackground,
  Hp as ColorFocusText,
  Gp as ColorFormBackground,
  Up as ColorFormBorder,
  tl as ColorGrey1,
  nl as ColorGrey2,
  rl as ColorGrey3,
  al as ColorGrey4,
  sl as ColorGrey5,
  Ep as ColorLinkActive,
  Ap as ColorLinkDefault,
  Bp as ColorLinkHover,
  Pp as ColorLinkVisited,
  Ui as ColorPrimaryBlack,
  Wi as ColorPrimaryBlue,
  Vi as ColorPrimaryDarkPink,
  Gi as ColorPrimaryGreen,
  Yi as ColorPrimaryPurple,
  qi as ColorPrimaryRed,
  Oi as ColorPrimaryWhite,
  Ki as ColorPrimaryYellow,
  Qi as ColorSecondaryAquaGreen,
  Ji as ColorSecondaryOrange,
  Xi as ColorSecondaryPaleYellow,
  el as ColorSecondaryPink,
  Zi as ColorSecondaryWarmYellow,
  Mp as ColorTextPrimary,
  Fp as ColorTextPrint,
  Lp as ColorTextReverse,
  Ip as ColorTextSecondary,
  vn as Column,
  Rm as ComponentBlur,
  Mm as ComponentBreadcrumbChevronMarginLeft,
  Im as ComponentBreadcrumbChevronMarginRight,
  Fm as ComponentBreadcrumbPaddingTopDesktop,
  Lm as ComponentBreadcrumbPaddingTopMobile,
  vm as ComponentButtonPaddingDesktopHorizontal,
  ym as ComponentButtonPaddingDesktopVertical,
  bm as ComponentButtonPaddingMobileHorizontal,
  xm as ComponentButtonPaddingMobileVertical,
  wm as ComponentButtonShadowSize,
  Tm as ComponentCardHeadingMargin,
  Nm as ComponentCardPaddingDesktop,
  jm as ComponentCardPaddingMobile,
  zm as ComponentDetails,
  Wm as ComponentExpander,
  Cm as ComponentFormCheckboxLabelPadding,
  km as ComponentFormCheckboxSize,
  _m as ComponentFormInputMinHeight,
  Sm as ComponentFormInputPadding,
  Hm as ComponentLink,
  Om as ComponentPagination,
  Dm as ComponentPanelPaddingDesktop,
  $m as ComponentPanelPaddingMobile,
  Pm as ComponentSpread,
  Bm as ComponentSummaryListCellPaddingHorizontal,
  Am as ComponentSummaryListCellPaddingVertical,
  Em as ComponentSummaryListRowMargin,
  jo as Container,
  fx as ContentsList,
  Nl as DEFAULT_FONT_CONFIG,
  _x as DashboardSummaryGrid,
  ox as DateInput,
  Yu as Details,
  Vu as DoDontList,
  U0 as ElevationHigh,
  W0 as ElevationLow,
  O0 as ElevationMedium,
  z0 as ElevationNone,
  Cs as ErrorMessage,
  sx as ErrorSummary,
  qu as Expander,
  nt as FRUTIGER_FONT_FILES,
  Ka as Fieldset,
  E0 as FocusOutlineOffset,
  P0 as FocusOutlineStyle,
  B0 as FocusOutlineWidth,
  H0 as FocusShadowButton,
  R0 as FocusShadowInput,
  rr as FontFamilyBase,
  ar as FontFamilyFallback,
  sr as FontFamilyPrint,
  Ya as FontLineHeightBase,
  cr as FontSize14Mobile,
  ur as FontSize14Print,
  dr as FontSize14Tablet,
  fr as FontSize16Mobile,
  pr as FontSize16Print,
  hr as FontSize16Tablet,
  mr as FontSize19Mobile,
  xr as FontSize19Print,
  gr as FontSize19Tablet,
  br as FontSize22Mobile,
  vr as FontSize22Print,
  yr as FontSize22Tablet,
  wr as FontSize26Mobile,
  Sr as FontSize26Print,
  _r as FontSize26Tablet,
  kr as FontSize36Mobile,
  jr as FontSize36Print,
  Cr as FontSize36Tablet,
  Nr as FontSize48Mobile,
  $r as FontSize48Print,
  Tr as FontSize48Tablet,
  Ga as FontSizeBase,
  ir as FontWeightBold,
  lr as FontWeightLight,
  or as FontWeightNormal,
  Io as Footer,
  Pg as FormBorderRadius,
  Bg as FormBorderWidthDefault,
  Eg as FormBorderWidthError,
  Lg as FormErrorTextDefault,
  Fg as FormErrorTypographyWeight,
  Ag as FormHintTextDefault,
  yg as FormInputBackgroundDefault,
  wg as FormInputBackgroundDisabled,
  _g as FormInputBackgroundError,
  vg as FormInputBackgroundFocus,
  Sg as FormInputBorderDefault,
  jg as FormInputBorderDisabled,
  Cg as FormInputBorderError,
  kg as FormInputBorderFocus,
  Ng as FormInputTextDefault,
  $g as FormInputTextDisabled,
  Tg as FormInputTextPlaceholder,
  Dg as FormLabelTextDefault,
  Mg as FormLabelTextRequired,
  Ig as FormLabelTypographyWeight,
  gl as FormSpacingCheckboxLabelPadding,
  ml as FormSpacingCheckboxSize,
  pl as FormSpacingInputMinHeight,
  hl as FormSpacingInputPadding,
  dx as GanttChart,
  ca as Grid,
  h0 as GridGutter,
  p0 as GridGutterHalf,
  eh as GridLines,
  f0 as GridPageWidth,
  Mo as Header,
  cx as HeaderSSR,
  xc as HeaderSearch,
  Mo as HeaderStatic,
  $t as Heading,
  bt as HeadingsNhsukHeadingL,
  yt as HeadingsNhsukHeadingM,
  vt as HeadingsNhsukHeadingS,
  xt as HeadingsNhsukHeadingXl,
  wt as HeadingsNhsukHeadingXs,
  bc as Hero,
  ko as Hint,
  vx as Images,
  Va as Input,
  gx as InsetText,
  qa as Label,
  i0 as LayoutColumnActions,
  r0 as LayoutColumnFull,
  a0 as LayoutColumnHalf,
  o0 as LayoutColumnQuarter,
  s0 as LayoutColumnThird,
  n0 as LayoutContainerMaxWidth,
  Ix as Legend,
  Qf as LineScalesProvider,
  Bh as LineSeriesPrimitive,
  dc as List,
  No as MainWrapper,
  ni as MedicationCard,
  Px as MetricCard,
  Yx as NHSBodyText,
  Vx as NHSBodyTextLarge,
  qx as NHSBodyTextSmall,
  zx as NHSHeading1,
  Wx as NHSHeading2,
  Ox as NHSHeading3,
  Ux as NHSHeading4,
  Gx as NHSHeading5,
  Kx as NHSLedeText,
  Xx as NHSLedeTextSmall,
  lx as NHSThemeProvider,
  db as NHS_FALLBACK_FONT_STACK,
  cb as NHS_FONT_STACK,
  Uf as NavigationSplitView,
  Nx as PageTemplate,
  ux as Pagination,
  Gu as Panel,
  _t as ParagraphsBody,
  St as ParagraphsBodyLarge,
  kt as ParagraphsBodySmall,
  Ct as ParagraphsLedeText,
  jt as ParagraphsLedeTextSmall,
  ei as PatientCard,
  Yf as ProductRoadmap,
  J0 as Radios,
  Q0 as RadiosServer,
  Cx as ResponsiveDataGrid,
  jx as ResponsiveDataGridDemo,
  Gt as Row,
  Rx as SPC,
  op as SPCChart,
  zn as Select,
  oc as SelectOption,
  D0 as ShadowButtonDefault,
  L0 as ShadowButtonFocus,
  M0 as ShadowButtonSecondary,
  I0 as ShadowButtonWarning,
  F0 as ShadowCardDefault,
  A0 as ShadowCardHover,
  t0 as SizeButtonMinHeightDesktop,
  e0 as SizeButtonMinHeightMobile,
  Yg as SizeFormControlLarge,
  Gg as SizeFormControlMedium,
  Ug as SizeFormControlSmall,
  Jg as SizeFormInputWidth2xl,
  Qg as SizeFormInputWidth3xl,
  Xg as SizeFormInputWidthLg,
  Kg as SizeFormInputWidthMd,
  qg as SizeFormInputWidthSm,
  Zg as SizeFormInputWidthXl,
  Vg as SizeFormInputWidthXs,
  Wg as SizeIconExtraLarge,
  zg as SizeIconLarge,
  Hg as SizeIconMedium,
  Og as SizeIconNhsDefault,
  Rg as SizeIconSmall,
  Zo as SkipLink,
  wx as SlotMatrix,
  Sx as SortStatusControl,
  xl as Spacing0,
  bl as Spacing1,
  yl as Spacing2,
  vl as Spacing3,
  wl as Spacing4,
  _l as Spacing5,
  Sl as Spacing6,
  kl as Spacing7,
  Cl as Spacing8,
  jl as Spacing9,
  Ca as SpacingResponsive0Mobile,
  ja as SpacingResponsive0Tablet,
  Na as SpacingResponsive1Mobile,
  Ta as SpacingResponsive1Tablet,
  $a as SpacingResponsive2Mobile,
  Da as SpacingResponsive2Tablet,
  Ma as SpacingResponsive3Mobile,
  Ia as SpacingResponsive3Tablet,
  La as SpacingResponsive4Mobile,
  Fa as SpacingResponsive4Tablet,
  Aa as SpacingResponsive5Mobile,
  Ba as SpacingResponsive5Tablet,
  Ea as SpacingResponsive6Mobile,
  Pa as SpacingResponsive6Tablet,
  Ra as SpacingResponsive7Mobile,
  Ha as SpacingResponsive7Tablet,
  za as SpacingResponsive8Mobile,
  Wa as SpacingResponsive8Tablet,
  Oa as SpacingResponsive9Mobile,
  Ua as SpacingResponsive9Tablet,
  ex as SpacingUtilities,
  N0 as StateDisabledBackground,
  T0 as StateDisabledBorder,
  $0 as StateDisabledText,
  m0 as StateErrorBackground,
  g0 as StateErrorBorder,
  x0 as StateErrorText,
  k0 as StateInfoBackground,
  C0 as StateInfoBorder,
  j0 as StateInfoText,
  b0 as StateSuccessBackground,
  y0 as StateSuccessBorder,
  v0 as StateSuccessText,
  w0 as StateWarningBackground,
  _0 as StateWarningBorder,
  S0 as StateWarningText,
  ef as SummaryCard,
  xx as SummaryList,
  to as Table,
  bx as Tabs,
  Qe as Tag,
  Ku as TaskList,
  ac as Textarea,
  Mx as TooltipOverlay,
  Ah as TooltipProvider,
  Tx as TransactionalPageTemplate,
  gp as TransitionButtonDefault,
  xp as TransitionButtonShadow,
  yp as TransitionCardHover,
  bp as TransitionInputFocus,
  Dx as VisibilityProvider,
  ri as VitalsCard,
  ax as WIDTH_FRACTIONS,
  yx as WarningCallout,
  li as WidthContainer,
  nx as WidthUtilities,
  ub as checkFrutigerLoaded,
  os as createGenericTabsConfig,
  kx as createTCHTabsConfig,
  ib as generateFrutigerFontFace,
  Hx as getResponsiveStyles,
  tx as getSpacingClass,
  rx as getWidthClass,
  lb as preloadFrutigerFonts,
  hf as tchDataConfig,
  Jx as useColors,
  nb as useComponentSpacing,
  rb as useNHSHeadings,
  ab as useNHSParagraphs,
  ix as useNHSTheme,
  sb as useNHSTypographySystem,
  ob as useNavigationSplitDrill,
  zf as useNavigationSplitUrlSync,
  di as useNhsFdpBreakpoints,
  tb as useResponsiveSpacing,
  $x as useResponsiveValue,
  Qx as useSpacing,
  Zx as useTokens,
  eb as useTypography
};
//# sourceMappingURL=index.esm.js.map
