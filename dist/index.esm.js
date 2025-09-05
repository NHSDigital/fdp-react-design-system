import * as U from "react";
import at, { useState as $e, useEffect as Pe, useCallback as le, useRef as Fe, createElement as _o, useMemo as Te, useContext as Pl, createContext as Rl, forwardRef as un, useImperativeHandle as So, useReducer as ko, memo as Hl, useLayoutEffect as zl, useId as Hn } from "react";
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
var bs;
function Ul() {
  if (bs) return pn;
  bs = 1;
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
var ys;
function Gl() {
  return ys || (ys = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === S ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case p:
          return "Fragment";
        case P:
          return "Profiler";
        case u:
          return "StrictMode";
        case N:
          return "Suspense";
        case y:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof A == "object")
        switch (typeof A.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), A.$$typeof) {
          case k:
            return "Portal";
          case T:
            return (A.displayName || "Context") + ".Provider";
          case F:
            return (A._context.displayName || "Context") + ".Consumer";
          case v:
            var q = A.render;
            return A = A.displayName, A || (A = q.displayName || q.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case $:
            return q = A.displayName || null, q !== null ? q : e(A.type) || "Memo";
          case j:
            q = A._payload, A = A._init;
            try {
              return e(A(q));
            } catch {
            }
        }
      return null;
    }
    function t(A) {
      return "" + A;
    }
    function n(A) {
      try {
        t(A);
        var q = !1;
      } catch {
        q = !0;
      }
      if (q) {
        q = console;
        var M = q.error, z = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return M.call(
          q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), t(A);
      }
    }
    function a(A) {
      if (A === p) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === j)
        return "<...>";
      try {
        var q = e(A);
        return q ? "<" + q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var A = x.A;
      return A === null ? null : A.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(A) {
      if (b.call(A, "key")) {
        var q = Object.getOwnPropertyDescriptor(A, "key").get;
        if (q && q.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function l(A, q) {
      function M() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          q
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: M,
        configurable: !0
      });
    }
    function d() {
      var A = e(this.type);
      return C[A] || (C[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function c(A, q, M, z, E, X, ee, Q) {
      return M = X.ref, A = {
        $$typeof: g,
        type: A,
        key: q,
        props: X,
        _owner: E
      }, (M !== void 0 ? M : null) !== null ? Object.defineProperty(A, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(A, "ref", { enumerable: !1, value: null }), A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(A, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(A, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.defineProperty(A, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function f(A, q, M, z, E, X, ee, Q) {
      var W = q.children;
      if (W !== void 0)
        if (z)
          if (H(W)) {
            for (z = 0; z < W.length; z++)
              h(W[z]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(W);
      if (b.call(q, "key")) {
        W = e(A);
        var O = Object.keys(q).filter(function(ae) {
          return ae !== "key";
        });
        z = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", _[W + z] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          W,
          O,
          W
        ), _[W + z] = !0);
      }
      if (W = null, M !== void 0 && (n(M), W = "" + M), i(q) && (n(q.key), W = "" + q.key), "key" in q) {
        M = {};
        for (var Z in q)
          Z !== "key" && (M[Z] = q[Z]);
      } else M = q;
      return W && l(
        M,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), c(
        A,
        W,
        X,
        E,
        o(),
        M,
        ee,
        Q
      );
    }
    function h(A) {
      typeof A == "object" && A !== null && A.$$typeof === g && A._store && (A._store.validated = 1);
    }
    var m = at, g = Symbol.for("react.transitional.element"), k = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), T = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), S = Symbol.for("react.client.reference"), x = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, b = Object.prototype.hasOwnProperty, H = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(A) {
        return A();
      }
    };
    var L, C = {}, w = m.react_stack_bottom_frame.bind(
      m,
      s
    )(), R = B(a(s)), _ = {};
    mn.Fragment = p, mn.jsx = function(A, q, M, z, E) {
      var X = 1e4 > x.recentlyCreatedOwnerStacks++;
      return f(
        A,
        q,
        M,
        !1,
        z,
        E,
        X ? Error("react-stack-top-frame") : w,
        X ? B(a(A)) : R
      );
    }, mn.jsxs = function(A, q, M, z, E) {
      var X = 1e4 > x.recentlyCreatedOwnerStacks++;
      return f(
        A,
        q,
        M,
        !0,
        z,
        E,
        X ? Error("react-stack-top-frame") : w,
        X ? B(a(A)) : R
      );
    };
  })()), mn;
}
var vs;
function Yl() {
  return vs || (vs = 1, process.env.NODE_ENV === "production" ? Fn.exports = Ul() : Fn.exports = Gl()), Fn.exports;
}
var r = Yl(), Or = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ws;
function Vl() {
  return ws || (ws = 1, (function(e) {
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
const he = /* @__PURE__ */ Ol(ql), Y0 = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...o
}) => {
  const s = he(
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
      className: he(
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
          className: he("nhsuk-account__item nhsuk-header__account-item", s.className),
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
const { forwardRef: Zl, useCallback: Lt, useState: Ur } = U;
function Jl(e, t) {
  const {
    children: n,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, f] = Ur(!1), [h, m] = Ur(!1), [g, k] = Ur(!1), p = Xl({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), u = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", P = {
    ...c && { "data-pressed": "true" },
    ...h && { "data-hovered": "true" },
    ...g && { "data-focused": "true" },
    ...u && { "data-disabled": "true" }
  }, F = Lt(
    () => !u && f(!0),
    [u]
  ), T = Lt(() => f(!1), []), v = Lt(
    () => !u && m(!0),
    [u]
  ), N = Lt(() => {
    m(!1), f(!1);
  }, []), y = Lt(() => k(!0), []), $ = Lt(() => k(!1), []), j = Lt(
    (W) => {
      W.key === " " && ("href" in d || W.currentTarget.getAttribute("role") === "button") && (W.preventDefault(), W.currentTarget.click());
    },
    [d]
  ), D = Lt(
    (W) => {
      if (l) {
        const O = W.currentTarget;
        if (O.getAttribute("data-processing") === "true") {
          W.preventDefault();
          return;
        }
        O.setAttribute("data-processing", "true"), setTimeout(() => {
          O.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in d && d.href) {
    const {
      id: W,
      style: O,
      title: Z,
      ["aria-label"]: ae,
      ["aria-describedby"]: K,
      ["aria-labelledby"]: ue,
      tabIndex: de,
      ...xe
    } = d, pe = d;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: pe.href,
        target: pe.target,
        rel: pe.rel,
        className: p.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...P,
        ...l && { "data-prevent-double-click": "true" },
        ...xe,
        onKeyDown: (ge) => {
          pe.onKeyDown?.(ge), j(ge);
        },
        onClick: (ge) => {
          pe.onClick?.(ge), D(ge);
        },
        onMouseDown: (ge) => {
          pe.onMouseDown?.(ge), F();
        },
        onMouseUp: (ge) => {
          pe.onMouseUp?.(ge), T();
        },
        onMouseEnter: (ge) => {
          pe.onMouseEnter?.(ge), v();
        },
        onMouseLeave: (ge) => {
          pe.onMouseLeave?.(ge), N();
        },
        onFocus: (ge) => {
          pe.onFocus?.(ge), y();
        },
        onBlur: (ge) => {
          pe.onBlur?.(ge), $();
        },
        "aria-disabled": pe["aria-disabled"],
        ...pe["aria-disabled"] === "true" && { tabIndex: -1 },
        id: W,
        style: O,
        title: Z,
        "aria-label": ae,
        "aria-describedby": K,
        "aria-labelledby": ue,
        tabIndex: de,
        children: n
      }
    );
  }
  const {
    id: S,
    style: x,
    title: b,
    ["aria-label"]: H,
    ["aria-describedby"]: B,
    ["aria-labelledby"]: L,
    tabIndex: C,
    name: w,
    value: R,
    form: _,
    formAction: A,
    formEncType: q,
    formMethod: M,
    formNoValidate: z,
    formTarget: E,
    autoFocus: X,
    ...ee
  } = d, Q = d;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: Q.type || "button",
      disabled: Q.disabled,
      className: p.classes,
      "data-module": "nhs-button",
      ...P,
      ...l && { "data-prevent-double-click": "true" },
      ...Q.disabled && { "aria-disabled": "true" },
      ...ee,
      onKeyDown: (W) => {
        Q.onKeyDown?.(W), j(W);
      },
      onClick: (W) => {
        Q.onClick?.(W), D(W);
      },
      onMouseDown: (W) => {
        Q.onMouseDown?.(W), F();
      },
      onMouseUp: (W) => {
        Q.onMouseUp?.(W), T();
      },
      onMouseEnter: (W) => {
        Q.onMouseEnter?.(W), v();
      },
      onMouseLeave: (W) => {
        Q.onMouseLeave?.(W), N();
      },
      onFocus: (W) => {
        Q.onFocus?.(W), y();
      },
      onBlur: (W) => {
        Q.onBlur?.(W), $();
      },
      id: S,
      style: x,
      title: b,
      "aria-label": H,
      "aria-describedby": B,
      "aria-labelledby": L,
      tabIndex: C,
      name: w,
      value: R,
      form: _,
      formAction: A,
      formEncType: q,
      formMethod: M,
      formNoValidate: z,
      formTarget: E,
      autoFocus: X,
      children: n
    }
  );
}
const Qe = Zl(Jl);
Qe.displayName = "Button";
const la = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = he(
    "nhsuk-back-link",
    a
  ), d = he(
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
const et = ({
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
  const f = Ql({ color: a, noBorder: o, closable: s, disabled: l, className: d }), h = (m) => {
    m.preventDefault(), m.stopPropagation(), !l && i && i();
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
  onFocus: m,
  attributes: g,
  ...k
}) => {
  const [p, u] = $e(a), P = n !== void 0, F = P ? n : p;
  Pe(() => {
    P || u(a);
  }, [a, P]);
  const T = (j) => {
    const D = j.target.checked;
    P || u(D), f?.(D, j);
  }, v = i ? `${e}-hint` : void 0, N = l ? `${e}-error` : void 0, y = [v, N].filter(Boolean).join(" ") || void 0, $ = he(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ r.jsx("div", { className: $, ...k, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: F,
        disabled: o,
        onChange: T,
        onBlur: h,
        onFocus: m,
        "aria-describedby": y,
        ...g
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ r.jsx("div", { id: v, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: N, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
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
const Ya = ({
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
  width: m = "full",
  inputMode: g,
  autoComplete: k,
  maxLength: p,
  minLength: u,
  pattern: P,
  step: F,
  min: T,
  max: v,
  showValueLabels: N = !1,
  showCurrentValue: y = !1,
  valueLabels: $,
  onChange: j,
  onBlur: D,
  onFocus: S,
  onKeyDown: x,
  ...b
}) => {
  const [H, B] = $e(a || o || (n === "range" ? T || "0" : ""));
  Pe(() => {
    a !== void 0 && B(a);
  }, [a]);
  const L = (E) => {
    const X = E.target;
    B(X.value), ("type" in E && E.nativeEvent || E.type === "keydown") && j?.(E);
  }, { classes: C, isRange: w } = tc({ type: n, hasError: c, width: m, className: h }), R = a !== void 0, _ = {
    id: e,
    name: t,
    type: n,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": f,
    inputMode: g,
    autoComplete: k,
    maxLength: p,
    minLength: u,
    pattern: P,
    step: F,
    min: T,
    max: v,
    onChange: L,
    onBlur: D,
    onFocus: S,
    onKeyDown: (E) => {
      if (w && /[0-9]/.test(E.key)) {
        const X = (H?.toString() || "") + E.key;
        E.target.value = X, L(E);
      }
      x?.(E);
    },
    ...b
  }, A = !R && o !== void 0 ? { defaultValue: o } : {}, q = R ? { value: a } : {}, M = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: C,
      ...q,
      ...A,
      "data-current-value": H,
      ..._
    }
  ), z = w ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    N && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: $?.min || T || "0" }),
      M(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: $?.max || v || "100" })
    ] }),
    !N && M(),
    y && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      $?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: H })
    ] }) })
  ] }) : null;
  return w ? z : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: C,
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
      autoComplete: k,
      maxLength: p,
      minLength: u,
      pattern: P,
      step: F,
      min: T,
      max: v,
      onChange: j,
      onBlur: D,
      onFocus: S,
      onKeyDown: x,
      ...b
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
const Va = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = nc({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
}, qa = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...o
}) => {
  const s = he(
    "nhsuk-fieldset",
    n
  ), i = he(
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
  attributes: m,
  ...g
}) => {
  const [k, p] = $e(
    e.filter((j) => j.checked).map((j) => j.value)
  ), u = n || t, P = i ? `${u}-hint` : void 0, F = l ? `${u}-error` : void 0, T = [P, F].filter(Boolean).join(" ") || void 0, v = (j, D) => {
    let S;
    D ? S = [...k, j] : S = k.filter((x) => x !== j), p(S), f?.(S);
  }, N = () => e.map((j, D) => {
    const S = `${u}-${D + 1}`, x = `${S}-conditional`, b = k.includes(j.value), H = j.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: S,
          name: t,
          type: "checkbox",
          value: j.value,
          checked: b,
          disabled: H,
          onChange: (B) => v(j.value, B.target.checked),
          "aria-describedby": j.hint ? `${S}-hint` : T,
          ...j.conditional && {
            "aria-controls": x,
            "aria-expanded": b ? "true" : "false"
          },
          ...j.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: S, children: j.text }),
      j.hint && /* @__PURE__ */ r.jsx("div", { id: `${S}-hint`, className: "nhsuk-checkboxes__hint", children: j.hint }),
      j.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: he("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !b
          }),
          id: x,
          children: typeof j.conditional == "object" && j.conditional !== null && "label" in j.conditional && "id" in j.conditional && "name" in j.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            j.conditional.label && /* @__PURE__ */ r.jsx(Va, { htmlFor: j.conditional.id, children: j.conditional.label }),
            /* @__PURE__ */ r.jsx(Ya, { ...j.conditional })
          ] }) : j.conditional
        }
      )
    ] }, j.value);
  }), y = he(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": c
    },
    d
  ), $ = he("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ r.jsx("div", { className: $, ...m, ...g, children: /* @__PURE__ */ r.jsxs(
    qa,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: T,
      ...h,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: P, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: F, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: y, children: N() })
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
  cols: m,
  maxLength: g,
  minLength: k,
  wrap: p = "soft",
  resize: u = "vertical",
  autoComplete: P,
  spellCheck: F,
  onChange: T,
  onBlur: v,
  onFocus: N,
  onKeyDown: y,
  ...$
}) => {
  const j = he(
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
      className: j,
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
      cols: m,
      maxLength: g,
      minLength: k,
      wrap: p,
      autoComplete: P,
      spellCheck: F,
      onChange: T,
      onBlur: v,
      onFocus: N,
      onKeyDown: y,
      ...$
    }
  );
};
function sc(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Co = ({ id: e, className: t, children: n, ...a }) => {
  const o = sc({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: o.classes, id: o.id, ...a, children: n });
}, V0 = ({
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
  ...m
}) => {
  const g = s ?? i ?? "", [k, p] = $e(g), [u, P] = $e(0), [F, T] = $e(!1), [v, N] = $e(!1), y = le((b) => n ? b.trim() === "" ? 0 : b.trim().split(/\s+/).length : b.length, [n]);
  Pe(() => {
    const b = y(k), H = t || n || 0, B = H - b, L = Math.floor(H * (a / 100));
    P(B), T(b > H), N(b >= L || b > H), f && f(b, B);
  }, [k, t, n, a, y, f]);
  const $ = (b) => {
    const H = b.target.value;
    p(H), h && h(b);
  }, j = () => {
    const b = t || n || 0, H = n ? "word" : "character", B = n ? "words" : "characters";
    if (!v)
      return `You can enter up to ${b} ${b === 1 ? H : B}`;
    if (F) {
      const L = Math.abs(u);
      return `You have ${L} ${L === 1 ? H : B} too many`;
    } else
      return `You have ${u} ${u === 1 ? H : B} remaining`;
  }, D = he(
    "nhsuk-character-count",
    d
  ), S = he(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !v,
      "nhsuk-error-message": F
    },
    c?.classes
  ), x = he(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": F
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: D,
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
            value: s !== void 0 ? k : void 0,
            defaultValue: s === void 0 ? i ?? k : void 0,
            rows: l,
            className: x,
            onChange: $,
            "aria-describedby": `${e}-info`,
            "aria-invalid": F || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ r.jsx(
          Co,
          {
            id: `${e}-info`,
            className: S,
            role: "status",
            "aria-live": "polite",
            children: j()
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
  const i = he(
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
  autoComplete: m,
  options: g,
  children: k,
  onChange: p,
  onBlur: u,
  onFocus: P,
  ...F
}) => {
  const T = he(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    c
  ), v = () => g ? g.map((y, $) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: y.value,
      disabled: y.disabled,
      "data-initial-selected": y.selected || void 0,
      children: y.text
    },
    `${y.value}-${$}`
  )) : null, N = o === void 0 && a === void 0 && g ? g.find((y) => y.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: T,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: o !== void 0 ? o : N,
      disabled: s,
      required: i,
      "aria-describedby": d,
      multiple: f,
      size: h,
      autoComplete: m,
      onChange: p,
      onBlur: u,
      onFocus: P,
      ...F,
      children: k || v()
    }
  );
}, zn = ic;
zn.Option = oc;
function jo(e, {
  variant: t,
  selectedValue: n,
  enableBehaviourAttr: a,
  handleChange: o,
  handleBlur: s,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: d
}) {
  const { onChange: c, onBlur: f, onFocus: h, ...m } = e, {
    name: g,
    hasError: k = !1,
    describedBy: p,
    className: u,
    size: P = "normal",
    inline: F = !1,
    options: T,
    ...v
  } = m, N = he(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": k,
      "nhsuk-radios--small": P === "small",
      "nhsuk-radios--inline": F
    },
    u
  );
  return /* @__PURE__ */ r.jsx(qa, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: N,
      ...v,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: T.map((y, $) => {
        const j = `${g}-${$}`, D = y.conditional ? `${j}-conditional` : void 0, S = n === y.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: j,
              name: g,
              type: "radio",
              value: y.value,
              disabled: y.disabled,
              ...t === "client" ? { checked: S, onChange: o, onBlur: s, onFocus: i, onKeyDown: l, ref: (x) => {
                x && d && (d.current[$] = x);
              } } : { defaultChecked: S, "data-nhs-radios-input": !0 },
              "aria-describedby": p
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: j, children: y.text }),
          y.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: y.hint }),
          y.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: he("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !S
              }),
              id: D,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof y.conditional == "object" && y.conditional !== null && "label" in y.conditional && "id" in y.conditional && "name" in y.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                y.conditional.label && /* @__PURE__ */ r.jsx(Va, { htmlFor: y.conditional.id, children: y.conditional.label }),
                /* @__PURE__ */ r.jsx(Ya, { ...y.conditional })
              ] }) : y.conditional
            }
          )
        ] }, y.value);
      })
    }
  ) });
}
const q0 = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = $e(e || t || ""), d = Fe([]), c = Fe(i), f = (g) => {
    const k = g.target.value;
    k !== c.current && (c.current = k, l(k), n?.(g));
  }, h = (g) => {
    o?.(g);
  }, m = le((g) => {
    const { key: k } = g;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(k)) return;
    g.preventDefault();
    const p = d.current.filter((T) => T && !T.disabled), u = p.indexOf(g.currentTarget);
    if (u === -1) return;
    let P = u;
    ["ArrowDown", "ArrowRight"].includes(k) ? P = (u + 1) % p.length : ["ArrowUp", "ArrowLeft"].includes(k) && (P = (u - 1 + p.length) % p.length);
    const F = p[P];
    F && (F.focus(), F.checked || F.click());
  }, []);
  return jo(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: f,
      handleBlur: a,
      handleFocus: h,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: m,
      itemsRef: d
    }
  );
}, K0 = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return jo(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0
    }
  );
}, No = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = he(
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
  const o = he("nhsuk-grid-row", t);
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
  const f = he(
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
  return /* @__PURE__ */ r.jsx(No, { className: t, style: n, ...a, children: i ? e : /* @__PURE__ */ r.jsx(Gt, { children: e }) });
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
  const d = i || (t === "number" ? "ol" : "ul"), c = he(
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
  const a = he("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, dc = lc;
dc.Item = cc;
const X0 = ({
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
}, Z0 = {
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
}, J0 = ({
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
}, Q0 = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, ex = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], To = ({
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
const Tt = ({ level: e, className: t, text: n, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const d = fc({ level: e, size: s, className: t, marginBottom: i }), c = o || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return _o(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function hc(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const _s = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...o }) => {
  const s = hc({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, tx = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const d = Fe(null);
  Pe(() => {
    d.current && d.current.focus();
  }, []);
  const c = he(
    "nhsuk-error-summary",
    s
  ), f = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, h = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, m = (g) => {
    const k = g.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
    return g.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: g.href,
        ...g.attributes,
        children: k
      }
    ) : k;
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
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((g, k) => /* @__PURE__ */ r.jsx("li", { children: m(g) }, k)) })
        ] })
      ]
    }
  );
}, nx = ({
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
  const [f, h] = $e(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [m, g] = $e({}), k = (L) => L % 4 === 0 && L % 100 !== 0 || L % 400 === 0, p = (L, C) => {
    const w = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return L === 2 && k(C) ? 29 : w[L - 1];
  }, u = (L, C, w) => {
    if (!L) return;
    if (!/^\d+$/.test(L)) return "Day must be a number";
    const R = parseInt(L, 10);
    if (R < 1 || R > 31) return "Day must be between 1 and 31";
    if (C && w) {
      const _ = parseInt(C, 10), A = parseInt(w, 10);
      if (!isNaN(_) && !isNaN(A) && _ >= 1 && _ <= 12) {
        const q = p(_, A);
        if (R > q)
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
          ][_ - 1]} ${A} only has ${q} days`;
      }
    }
  }, P = (L) => {
    if (!L) return;
    if (!/^\d+$/.test(L)) return "Month must be a number";
    const C = parseInt(L, 10);
    if (C < 1 || C > 12) return "Month must be between 1 and 12";
  }, F = (L) => {
    if (!L) return;
    if (!/^\d+$/.test(L)) return "Year must be a number";
    const C = parseInt(L, 10), w = (/* @__PURE__ */ new Date()).getFullYear();
    if (C < 1900 || C > w + 10)
      return `Year must be between 1900 and ${w + 10}`;
  }, T = (L, C, w) => {
    if (!L || !C || !w) return;
    const R = parseInt(L, 10), _ = parseInt(C, 10), A = parseInt(w, 10);
    if (isNaN(R) || isNaN(_) || isNaN(A) || _ < 1 || _ > 12 || A < 1900) return;
    const q = p(_, A);
    R < 1 || R > q;
  }, v = le((L, C) => {
    const w = {
      ...f,
      [L]: C
    };
    h(w), d && d(w);
  }, [f, d]), N = le((L) => {
    const C = f[L];
    let w;
    if (L === "day")
      w = u(C, f.month, f.year);
    else if (L === "month") {
      if (w = P(C), !w && f.day) {
        const R = u(f.day, C, f.year);
        g((_) => ({
          ..._,
          day: R
        }));
      }
    } else if (L === "year" && (w = F(C), !w && f.day && f.month)) {
      const R = u(f.day, f.month, C);
      g((_) => ({
        ..._,
        day: R
      }));
    }
    if (g((R) => ({
      ...R,
      [L]: w
    })), f.day && f.month && f.year) {
      const R = T(
        L === "day" ? C : f.day,
        L === "month" ? C : f.month,
        L === "year" ? C : f.year
      );
      R && g((_) => ({
        ..._,
        day: R
      }));
    }
  }, [f, u, P, F, T]), y = Te(() => [
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
  ], []), $ = n || y;
  let j = s?.describedBy || "";
  const D = i ? `${e}-hint` : "", S = l ? `${e}-error` : "";
  D && (j = j ? `${j} ${D}` : D), S && (j = j ? `${j} ${S}` : S);
  const x = Object.values(m).some((L) => L), b = he(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || x
    }
  ), H = he(
    "nhsuk-date-input",
    t
  ), B = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      Co,
      {
        id: D,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      _s,
      {
        id: S,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([L, C]) => C ? /* @__PURE__ */ r.jsxs(
        _s,
        {
          id: `${e}-${L}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            C
          ]
        },
        `${L}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: H, id: e, "data-testid": "date-input", ...c, children: $.map((L) => {
      const C = L.id || `${e}-${L.name}`, w = a ? `${a}[${L.name}]` : L.name, R = L.label || L.name.charAt(0).toUpperCase() + L.name.slice(1), _ = m[L.name], A = f[L.name] || "";
      let q = j;
      if (_) {
        const M = `${e}-${L.name}-error`;
        q = q ? `${q} ${M}` : M;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          Va,
          {
            htmlFor: C,
            className: "nhsuk-date-input__label",
            children: R
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ya,
          {
            id: C,
            name: w,
            value: A,
            className: he("nhsuk-date-input__input", L.classes, {
              "nhsuk-input--error": _
            }),
            inputMode: L.inputmode,
            autoComplete: L.autocomplete,
            pattern: L.pattern,
            "aria-describedby": q || void 0,
            hasError: !!_,
            onChange: (M) => v(L.name, M.target.value),
            onBlur: () => N(L.name)
          }
        )
      ] }, L.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: b, children: s ? /* @__PURE__ */ r.jsx(
    qa,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: j || void 0,
      children: B()
    }
  ) : B() });
}, $o = {
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
}, Do = Rl($o), pc = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...$o, ...t };
  return /* @__PURE__ */ r.jsx(Do.Provider, { value: n, children: e });
}, rx = () => {
  const e = Pl(Do);
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
const ax = ({ children: e, theme: t }) => (Pe(() => {
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
  showResults: m = !1,
  results: g = [],
  formAttributes: k = {},
  inputAttributes: p = {},
  buttonAttributes: u = {},
  preventDefaultSubmit: P = !1,
  debounceMs: F = 300,
  minQueryLength: T = 1
}) => {
  const [v, N] = $e(""), [y, $] = $e(!1), j = Fe(void 0), D = Fe(null), S = Fe(null), x = e === "controlled" && o !== void 0, b = x ? o : v, H = le((z) => {
    j.current && clearTimeout(j.current), j.current = setTimeout(() => {
      f.onChange && z.length >= T && f.onChange(z);
    }, F);
  }, [f.onChange, F, T]), B = le((z) => {
    const E = z.target.value;
    x || N(E), e !== "form" && H(E);
  }, [x, e, H]), L = le((z) => {
    const E = b.trim(), X = {
      query: E,
      timestamp: Date.now(),
      formData: new FormData(z.currentTarget)
    };
    e === "controlled" || e === "hybrid" && P ? (z.preventDefault(), f.onSearch && E.length >= T && f.onSearch(X)) : e === "hybrid" && f.onSearch && E.length >= T && f.onSearch(X);
  }, [e, b, f.onSearch, P, T]), C = le(() => {
    $(!0), f.onFocus?.();
  }, [f.onFocus]), w = le(() => {
    $(!1), f.onBlur?.();
  }, [f.onBlur]), R = le(() => {
    x || N(""), f.onClear?.(), S.current?.focus();
  }, [x, f.onClear]);
  Pe(() => () => {
    j.current && clearTimeout(j.current);
  }, []);
  const _ = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: he("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": h
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), A = () => /* @__PURE__ */ r.jsx(
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
  ), q = () => !b || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: R,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ r.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ r.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), M = () => !m || !g.length || !y ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: g.map((z) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: z.href ? /* @__PURE__ */ r.jsxs("a", { href: z.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: z.title }),
    z.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: z.description })
  ] }) : /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => f.onSearch?.({ query: z.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: z.title }),
        z.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: z.description })
      ]
    }
  ) }, z.id)) });
  return /* @__PURE__ */ r.jsxs("div", { className: he("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": h,
    "nhsuk-header__search--focused": y,
    "nhsuk-header__search--has-results": m && g.length > 0
  }), children: [
    /* @__PURE__ */ r.jsxs(
      "form",
      {
        ref: D,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? n : void 0,
        role: "search",
        onSubmit: L,
        ...k,
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
                ref: S,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: b,
                onChange: B,
                onFocus: C,
                onBlur: w,
                disabled: c || h,
                ...m && g.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...p
              }
            ),
            q()
          ] }),
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || h || e !== "form" && b.length < T,
              ...u,
              children: [
                h ? A() : _(),
                /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: h ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    M()
  ] });
};
function Io(e, {
  variant: t,
  isClient: n,
  menuOpen: a = !1,
  showMoreButton: o = !1,
  visibleItems: s,
  dropdownVisible: i,
  toggleMenu: l
}) {
  const {
    className: d,
    logo: c = {},
    service: f = {},
    organisation: h,
    search: m,
    account: g,
    navigation: k,
    containerClasses: p,
    variant: u = "default",
    attributes: P = {},
    maxVisibleItems: F,
    ...T
  } = e;
  "maxVisibleItems" in T && delete T.maxVisibleItems;
  const v = f.href && !c.href || f.href && f.href === c.href, N = v ? f.href : c.href, y = he(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": u === "organisation" || h,
      "nhsuk-header--white": u === "white"
    },
    d
  ), $ = he("nhsuk-header__container", "nhsuk-width-container", p), j = he(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": k?.white,
      "nhsuk-header__navigation--justified": k?.justified
    },
    k?.className
  ), D = () => /* @__PURE__ */ r.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": c.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ r.jsx("title", { children: c.ariaLabel || "NHS" }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), S = () => c.src ? /* @__PURE__ */ r.jsx("img", { className: "nhsuk-header__organisation-logo", src: c.src, width: "280", alt: c.ariaLabel || "NHS" }) : D(), x = () => h ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      h.name,
      h.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        " ",
        h.split
      ] })
    ] }),
    h.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: h.descriptor })
  ] }) : null, b = (_, A) => _ ? A ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: A, children: _ }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: _ }) : null, H = (_) => _.active || _.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: _.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text }) : _.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text, B = () => /* @__PURE__ */ r.jsx("svg", { className: "nhsuk-icon nhsuk-icon__chevron-down", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 7", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ r.jsx("path", { d: "M1.414 0 6 4.586 10.586 0 12 1.414 6 7 0 1.414 1.414 0Z" }) }), L = F ?? 4, C = t === "server" && k?.items && k.items.length > L, w = C ? [] : k?.items, R = C ? k.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: y, role: "banner", "data-module": "nhsuk-header", ...P, ...T, children: [
    /* @__PURE__ */ r.jsxs("div", { className: $, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        N ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: N, children: [
          S(),
          x(),
          v && b(f.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          S(),
          x(),
          v && b(f.text)
        ] }),
        f.text && !v && b(f.text, f.href)
      ] }),
      m && /* @__PURE__ */ r.jsx(xc, { ...m }),
      /* @__PURE__ */ r.jsx(Kl, { ...g, variant: u === "white" ? "white" : "default" })
    ] }),
    k && k.items && k.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: j, "aria-label": k.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
      "div",
      {
        className: he(
          "nhsuk-header__navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--initializing": n && t === "client",
            "nhsuk-header__navigation-container--ssr": !n
          },
          p
        ),
        children: /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-header__navigation-list", children: [
          (t === "server" ? w || [] : (k?.items || []).slice(0, s ?? (k?.items?.length || 0))).map((_, A) => /* @__PURE__ */ r.jsx(
            "li",
            {
              className: he(
                "nhsuk-header__navigation-item",
                {
                  "nhsuk-header__navigation-item--current": _.active || _.current
                },
                _.className
              ),
              ..._.attributes || {},
              children: /* @__PURE__ */ r.jsx(
                "a",
                {
                  className: "nhsuk-header__navigation-link",
                  href: _.href,
                  ..._.active || _.current ? { "aria-current": _.current ? "page" : "true" } : {},
                  children: H(_)
                }
              )
            },
            A
          )),
          t === "client" && o && s !== void 0 && k?.items && s < k.items.length && /* @__PURE__ */ r.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__navigation-button", id: "toggle-more-menu", onClick: l, type: "button", children: [
            /* @__PURE__ */ r.jsx("span", { children: "More" }),
            B()
          ] }) })
        ] })
      }
    ) }),
    t === "client" && n && k && k.items && k.items.length > 0 && a && i && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", hidden: !i, children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: k.items.slice(s ?? 0).map((_, A) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: he("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": _.active || _.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: _.href,
            ..._.active || _.current ? { "aria-current": _.current ? "page" : "true" } : {},
            onClick: () => {
              l?.();
            },
            children: H(_)
          }
        )
      },
      `overflow-${(s ?? 0) + A}`
    )) }) }),
    t === "server" && C && R.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: R.map((_, A) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: he("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": _.active || _.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: _.href,
            ..._.active || _.current ? { "aria-current": _.current ? "page" : "true" } : {},
            children: H(_)
          }
        )
      },
      `overflow-server-${A}`
    )) }) })
  ] });
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
  const [h, m] = $e(!1), [g] = $e(!1), [k] = $e(i?.items?.length || 0), [p, u] = $e(!1), [P, F] = $e(!1);
  Pe(() => {
    typeof window > "u" || F(!0);
  }, []), Pe(() => {
    if (typeof document > "u") return;
    const v = (N) => {
      N.key === "Escape" && h && m(!1);
    };
    if (h)
      return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [h]);
  const T = (v) => {
    v && (v.preventDefault(), v.stopPropagation());
    const N = !h;
    m(N), u(N);
  };
  return Io(
    { className: e, logo: t, service: n, organisation: a, search: o, account: s, navigation: i, containerClasses: l, variant: d, attributes: c, ...f },
    {
      variant: "client",
      isClient: P,
      menuOpen: h,
      showMoreButton: g,
      visibleItems: k,
      dropdownVisible: p,
      toggleMenu: T
    }
  );
}, sx = (e) => Io(e, {
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
  ].filter(Boolean).join(" "), m = [
    "nhsuk-hero__heading",
    n,
    !d && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), g = d || e || a || o, k = () => {
    if (!e) return null;
    const p = { className: m };
    switch (t) {
      case 1:
        return /* @__PURE__ */ r.jsx("h1", { ...p, children: e });
      case 2:
        return /* @__PURE__ */ r.jsx("h2", { ...p, children: e });
      case 3:
        return /* @__PURE__ */ r.jsx("h3", { ...p, children: e });
      case 4:
        return /* @__PURE__ */ r.jsx("h4", { ...p, children: e });
      case 5:
        return /* @__PURE__ */ r.jsx("h5", { ...p, children: e });
      case 6:
        return /* @__PURE__ */ r.jsx("h6", { ...p, children: e });
      default:
        return /* @__PURE__ */ r.jsx("h1", { ...p, children: e });
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
          k(),
          d || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && g && /* @__PURE__ */ r.jsx("div", { className: h, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          k(),
          d || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
bc.displayName = "Hero";
const Lo = ({
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
  const h = (g, k = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: he("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": k
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
  ), m = !!(n || a);
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: he("nhsuk-width-container", i),
        style: f,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: he("nhsuk-footer", e), style: c, children: m ? (
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
          !m && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    m && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function Rn(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function yc(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ka(e) {
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
const _c = Ka(Rn), Sc = _c.right;
Ka(wc).center;
function Fo(e, t) {
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
class Ss extends Map {
  constructor(t, n = jc) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(ks(this, t));
  }
  has(t) {
    return super.has(ks(this, t));
  }
  set(t, n) {
    return super.set(kc(this, t), n);
  }
  delete(t) {
    return super.delete(Cc(this, t));
  }
}
function ks({ _intern: e, _key: t }, n) {
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
function Ic(e, t, n) {
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
const Cs = Symbol("implicit");
function Ao() {
  var e = new Ss(), t = [], n = [], a = Cs;
  function o(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (a !== Cs) return a;
      e.set(s, i = t.push(s) - 1);
    }
    return n[i % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new Ss();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.copy = function() {
    return Ao(t, n).unknown(a);
  }, Dr.apply(o, arguments), o;
}
function Bo() {
  var e = Ao().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, s, i, l = !1, d = 0, c = 0, f = 0.5;
  delete e.unknown;
  function h() {
    var m = t().length, g = o < a, k = g ? o : a, p = g ? a : o;
    s = (p - k) / Math.max(1, m - d + c * 2), l && (s = Math.floor(s)), k += (p - k - s * (m - d)) * f, i = s * (1 - d), l && (k = Math.round(k), i = Math.round(i));
    var u = Ic(m).map(function(P) {
      return k + s * P;
    });
    return n(g ? u.reverse() : u);
  }
  return e.domain = function(m) {
    return arguments.length ? (t(m), h()) : t();
  }, e.range = function(m) {
    return arguments.length ? ([a, o] = m, a = +a, o = +o, h()) : [a, o];
  }, e.rangeRound = function(m) {
    return [a, o] = m, a = +a, o = +o, l = !0, h();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return s;
  }, e.round = function(m) {
    return arguments.length ? (l = !!m, h()) : l;
  }, e.padding = function(m) {
    return arguments.length ? (d = Math.min(1, c = +m), h()) : d;
  }, e.paddingInner = function(m) {
    return arguments.length ? (d = Math.min(1, m), h()) : d;
  }, e.paddingOuter = function(m) {
    return arguments.length ? (c = +m, h()) : c;
  }, e.align = function(m) {
    return arguments.length ? (f = Math.max(0, Math.min(1, m)), h()) : f;
  }, e.copy = function() {
    return Bo(t(), [a, o]).round(l).paddingInner(d).paddingOuter(c).align(f);
  }, Dr.apply(h(), arguments);
}
function Xa(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Eo(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function Tn() {
}
var wn = 0.7, On = 1 / wn, an = "\\s*([+-]?\\d+)\\s*", _n = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ft = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Mc = /^#([0-9a-f]{3,8})$/, Lc = new RegExp(`^rgb\\(${an},${an},${an}\\)$`), Fc = new RegExp(`^rgb\\(${ft},${ft},${ft}\\)$`), Ac = new RegExp(`^rgba\\(${an},${an},${an},${_n}\\)$`), Bc = new RegExp(`^rgba\\(${ft},${ft},${ft},${_n}\\)$`), Ec = new RegExp(`^hsl\\(${_n},${ft},${ft}\\)$`), Pc = new RegExp(`^hsla\\(${_n},${ft},${ft},${_n}\\)$`), js = {
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
Xa(Tn, Sn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ns,
  // Deprecated! Use color.formatHex.
  formatHex: Ns,
  formatHex8: Rc,
  formatHsl: Hc,
  formatRgb: Ts,
  toString: Ts
});
function Ns() {
  return this.rgb().formatHex();
}
function Rc() {
  return this.rgb().formatHex8();
}
function Hc() {
  return Po(this).formatHsl();
}
function Ts() {
  return this.rgb().formatRgb();
}
function Sn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Mc.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? $s(t) : n === 3 ? new rt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? An(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? An(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Lc.exec(e)) ? new rt(t[1], t[2], t[3], 1) : (t = Fc.exec(e)) ? new rt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ac.exec(e)) ? An(t[1], t[2], t[3], t[4]) : (t = Bc.exec(e)) ? An(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ec.exec(e)) ? Ms(t[1], t[2] / 100, t[3] / 100, 1) : (t = Pc.exec(e)) ? Ms(t[1], t[2] / 100, t[3] / 100, t[4]) : js.hasOwnProperty(e) ? $s(js[e]) : e === "transparent" ? new rt(NaN, NaN, NaN, 0) : null;
}
function $s(e) {
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
Xa(rt, fa, Eo(Tn, {
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
  hex: Ds,
  // Deprecated! Use color.formatHex.
  formatHex: Ds,
  formatHex8: Wc,
  formatRgb: Is,
  toString: Is
}));
function Ds() {
  return `#${Wt(this.r)}${Wt(this.g)}${Wt(this.b)}`;
}
function Wc() {
  return `#${Wt(this.r)}${Wt(this.g)}${Wt(this.b)}${Wt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Is() {
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
function Ms(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new it(e, t, n, a);
}
function Po(e) {
  if (e instanceof it) return new it(e.h, e.s, e.l, e.opacity);
  if (e instanceof Tn || (e = Sn(e)), !e) return new it();
  if (e instanceof it) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), s = Math.max(t, n, a), i = NaN, l = s - o, d = (s + o) / 2;
  return l ? (t === s ? i = (n - a) / l + (n < a) * 6 : n === s ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= d < 0.5 ? s + o : 2 - s - o, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new it(i, l, d, e.opacity);
}
function Oc(e, t, n, a) {
  return arguments.length === 1 ? Po(e) : new it(e, t, n, a ?? 1);
}
function it(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Xa(it, Oc, Eo(Tn, {
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
    return new it(Ls(this.h), Bn(this.s), Bn(this.l), Un(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Un(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ls(this.h)}, ${Bn(this.s) * 100}%, ${Bn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ls(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Bn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Gr(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Za = (e) => () => e;
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
  return (e = +e) == 1 ? Ro : function(t, n) {
    return n - t ? Gc(t, n, e) : Za(isNaN(t) ? n : t);
  };
}
function Ro(e, t) {
  var n = t - e;
  return n ? Uc(e, n) : Za(isNaN(e) ? t : e);
}
const Fs = (function e(t) {
  var n = Yc(t);
  function a(o, s) {
    var i = n((o = fa(o)).r, (s = fa(s)).r), l = n(o.g, s.g), d = n(o.b, s.b), c = Ro(o.opacity, s.opacity);
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
  for (i = 0; i < a; ++i) o[i] = Ja(e[i], t[i]);
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
    o in e ? n[o] = Ja(e[o], t[o]) : a[o] = t[o];
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
function Ja(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Za(t) : (n === "number" ? Gn : n === "string" ? (a = Sn(t)) ? (t = a, Fs) : ed : t instanceof Sn ? Fs : t instanceof Date ? Xc : qc(t) ? Vc : Array.isArray(t) ? Kc : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Zc : Gn)(e, t);
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
var As = [0, 1];
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
function Ho(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function id() {
  var e = As, t = As, n = Ja, a, o, s, i = nn, l, d, c;
  function f() {
    var m = Math.min(e.length, t.length);
    return i !== nn && (i = ad(e[0], e[m - 1])), l = m > 2 ? od : sd, d = c = null, h;
  }
  function h(m) {
    return m == null || isNaN(m = +m) ? s : (d || (d = l(e.map(a), t, n)))(a(i(m)));
  }
  return h.invert = function(m) {
    return i(o((c || (c = l(t, e.map(a), Gn)))(m)));
  }, h.domain = function(m) {
    return arguments.length ? (e = Array.from(m, rd), f()) : e.slice();
  }, h.range = function(m) {
    return arguments.length ? (t = Array.from(m), f()) : t.slice();
  }, h.rangeRound = function(m) {
    return t = Array.from(m), n = td, f();
  }, h.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : nn, f()) : i !== nn;
  }, h.interpolate = function(m) {
    return arguments.length ? (n = m, f()) : n;
  }, h.unknown = function(m) {
    return arguments.length ? (s = m, h) : s;
  }, function(m, g) {
    return a = m, o = g, f();
  };
}
function zo() {
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
  return new Qa({
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
Vn.prototype = Qa.prototype;
function Qa(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Qa.prototype.toString = function() {
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
var Wo;
function hd(e, t) {
  var n = Yn(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], s = o - (Wo = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return s === i ? a : s > i ? a + new Array(s - i + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Yn(e, Math.max(0, t + s - 1))[0];
}
function Bs(e, t) {
  var n = Yn(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const Es = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: ld,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Bs(e * 100, t),
  r: Bs,
  s: hd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Ps(e) {
  return e;
}
var Rs = Array.prototype.map, Hs = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function pd(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Ps : cd(Rs.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Ps : dd(Rs.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(h) {
    h = Vn(h);
    var m = h.fill, g = h.align, k = h.sign, p = h.symbol, u = h.zero, P = h.width, F = h.comma, T = h.precision, v = h.trim, N = h.type;
    N === "n" ? (F = !0, N = "g") : Es[N] || (T === void 0 && (T = 12), v = !0, N = "g"), (u || m === "0" && g === "=") && (u = !0, m = "0", g = "=");
    var y = p === "$" ? n : p === "#" && /[boxX]/.test(N) ? "0" + N.toLowerCase() : "", $ = p === "$" ? a : /[%p]/.test(N) ? i : "", j = Es[N], D = /[defgprs%]/.test(N);
    T = T === void 0 ? 6 : /[gprs]/.test(N) ? Math.max(1, Math.min(21, T)) : Math.max(0, Math.min(20, T));
    function S(x) {
      var b = y, H = $, B, L, C;
      if (N === "c")
        H = j(x) + H, x = "";
      else {
        x = +x;
        var w = x < 0 || 1 / x < 0;
        if (x = isNaN(x) ? d : j(Math.abs(x), T), v && (x = fd(x)), w && +x == 0 && k !== "+" && (w = !1), b = (w ? k === "(" ? k : l : k === "-" || k === "(" ? "" : k) + b, H = (N === "s" ? Hs[8 + Wo / 3] : "") + H + (w && k === "(" ? ")" : ""), D) {
          for (B = -1, L = x.length; ++B < L; )
            if (C = x.charCodeAt(B), 48 > C || C > 57) {
              H = (C === 46 ? o + x.slice(B + 1) : x.slice(B)) + H, x = x.slice(0, B);
              break;
            }
        }
      }
      F && !u && (x = t(x, 1 / 0));
      var R = b.length + x.length + H.length, _ = R < P ? new Array(P - R + 1).join(m) : "";
      switch (F && u && (x = t(_ + x, _.length ? P - H.length : 1 / 0), _ = ""), g) {
        case "<":
          x = b + x + H + _;
          break;
        case "=":
          x = b + _ + x + H;
          break;
        case "^":
          x = _.slice(0, R = _.length >> 1) + b + x + H + _.slice(R);
          break;
        default:
          x = _ + b + x + H;
          break;
      }
      return s(x);
    }
    return S.toString = function() {
      return h + "";
    }, S;
  }
  function f(h, m) {
    var g = c((h = Vn(h), h.type = "f", h)), k = Math.max(-8, Math.min(8, Math.floor(ln(m) / 3))) * 3, p = Math.pow(10, -k), u = Hs[8 + k / 3];
    return function(P) {
      return g(p * P) + u;
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var En, Oo, Uo;
md({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function md(e) {
  return En = pd(e), Oo = En.format, Uo = En.formatPrefix, En;
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
      return a.precision == null && !isNaN(s = xd(o, i)) && (a.precision = s), Uo(a, i);
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
  return Oo(a);
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
  var e = zo();
  return e.copy = function() {
    return Ho(e, qn());
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
const jt = 1e3, ot = jt * 60, Nt = ot * 60, $t = Nt * 24, es = $t * 7, zs = $t * 30, Kr = $t * 365, rn = Ye((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * jt);
}, (e, t) => (t - e) / jt, (e) => e.getUTCSeconds());
rn.range;
const ts = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * jt);
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getMinutes());
ts.range;
const _d = Ye((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getUTCMinutes());
_d.range;
const ns = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * jt - e.getMinutes() * ot);
}, (e, t) => {
  e.setTime(+e + t * Nt);
}, (e, t) => (t - e) / Nt, (e) => e.getHours());
ns.range;
const Sd = Ye((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Nt);
}, (e, t) => (t - e) / Nt, (e) => e.getUTCHours());
Sd.range;
const $n = Ye(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ot) / $t,
  (e) => e.getDate() - 1
);
$n.range;
const rs = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCDate() - 1);
rs.range;
const kd = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / $t, (e) => Math.floor(e / $t));
kd.range;
function qt(e) {
  return Ye((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ot) / es);
}
const Ir = qt(0), Xn = qt(1), Cd = qt(2), jd = qt(3), cn = qt(4), Nd = qt(5), Td = qt(6);
Ir.range;
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
  }, (t, n) => (n - t) / es);
}
const Go = Kt(0), Zn = Kt(1), $d = Kt(2), Dd = Kt(3), dn = Kt(4), Id = Kt(5), Md = Kt(6);
Go.range;
Zn.range;
$d.range;
Dd.range;
dn.range;
Id.range;
Md.range;
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
const Dt = Ye((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Dt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ye((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Dt.range;
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
    [rn, 1, jt],
    [rn, 5, 5 * jt],
    [rn, 15, 15 * jt],
    [rn, 30, 30 * jt],
    [s, 1, ot],
    [s, 5, 5 * ot],
    [s, 15, 15 * ot],
    [s, 30, 30 * ot],
    [o, 1, Nt],
    [o, 3, 3 * Nt],
    [o, 6, 6 * Nt],
    [o, 12, 12 * Nt],
    [a, 1, $t],
    [a, 2, 2 * $t],
    [n, 1, es],
    [t, 1, zs],
    [t, 3, 3 * zs],
    [e, 1, Kr]
  ];
  function l(c, f, h) {
    const m = f < c;
    m && ([c, f] = [f, c]);
    const g = h && typeof h.range == "function" ? h : d(c, f, h), k = g ? g.range(c, +f + 1) : [];
    return m ? k.reverse() : k;
  }
  function d(c, f, h) {
    const m = Math.abs(f - c) / h, g = Ka(([, , u]) => u).right(i, m);
    if (g === i.length) return e.every(ua(c / Kr, f / Kr, h));
    if (g === 0) return Kn.every(Math.max(ua(c, f, h), 1));
    const [k, p] = i[m / i[g - 1][2] < i[g][2] / m ? g - 1 : g];
    return k.every(p);
  }
  return [l, d];
}
const [Ad, Bd] = Fd(Dt, kn, Ir, $n, ns, ts);
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
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = xn(o), f = bn(o), h = xn(s), m = bn(s), g = xn(i), k = bn(i), p = xn(l), u = bn(l), P = xn(d), F = bn(d), T = {
    a: w,
    A: R,
    b: _,
    B: A,
    c: null,
    d: Vs,
    e: Vs,
    f: ou,
    g: gu,
    G: bu,
    H: ru,
    I: au,
    j: su,
    L: Yo,
    m: iu,
    M: lu,
    p: q,
    q: M,
    Q: Xs,
    s: Zs,
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
    "%": Ks
  }, v = {
    a: z,
    A: E,
    b: X,
    B: ee,
    c: null,
    d: qs,
    e: qs,
    f: Su,
    g: Lu,
    G: Au,
    H: vu,
    I: wu,
    j: _u,
    L: qo,
    m: ku,
    M: Cu,
    p: Q,
    q: W,
    Q: Xs,
    s: Zs,
    S: ju,
    u: Nu,
    U: Tu,
    V: $u,
    w: Du,
    W: Iu,
    x: null,
    X: null,
    y: Mu,
    Y: Fu,
    Z: Bu,
    "%": Ks
  }, N = {
    a: S,
    A: x,
    b,
    B: H,
    c: B,
    d: Gs,
    e: Gs,
    f: Qd,
    g: Us,
    G: Os,
    H: Ys,
    I: Ys,
    j: Kd,
    L: Jd,
    m: qd,
    M: Xd,
    p: D,
    q: Vd,
    Q: tu,
    s: nu,
    S: Zd,
    u: Wd,
    U: Od,
    V: Ud,
    w: zd,
    W: Gd,
    x: L,
    X: C,
    y: Us,
    Y: Os,
    Z: Yd,
    "%": eu
  };
  T.x = y(n, T), T.X = y(a, T), T.c = y(t, T), v.x = y(n, v), v.X = y(a, v), v.c = y(t, v);
  function y(O, Z) {
    return function(ae) {
      var K = [], ue = -1, de = 0, xe = O.length, pe, ge, Me;
      for (ae instanceof Date || (ae = /* @__PURE__ */ new Date(+ae)); ++ue < xe; )
        O.charCodeAt(ue) === 37 && (K.push(O.slice(de, ue)), (ge = Ws[pe = O.charAt(++ue)]) != null ? pe = O.charAt(++ue) : ge = pe === "e" ? " " : "0", (Me = Z[pe]) && (pe = Me(ae, ge)), K.push(pe), de = ue + 1);
      return K.push(O.slice(de, ue)), K.join("");
    };
  }
  function $(O, Z) {
    return function(ae) {
      var K = gn(1900, void 0, 1), ue = j(K, O, ae += "", 0), de, xe;
      if (ue != ae.length) return null;
      if ("Q" in K) return new Date(K.Q);
      if ("s" in K) return new Date(K.s * 1e3 + ("L" in K ? K.L : 0));
      if (Z && !("Z" in K) && (K.Z = 0), "p" in K && (K.H = K.H % 12 + K.p * 12), K.m === void 0 && (K.m = "q" in K ? K.q : 0), "V" in K) {
        if (K.V < 1 || K.V > 53) return null;
        "w" in K || (K.w = 1), "Z" in K ? (de = Zr(gn(K.y, 0, 1)), xe = de.getUTCDay(), de = xe > 4 || xe === 0 ? Zn.ceil(de) : Zn(de), de = rs.offset(de, (K.V - 1) * 7), K.y = de.getUTCFullYear(), K.m = de.getUTCMonth(), K.d = de.getUTCDate() + (K.w + 6) % 7) : (de = Xr(gn(K.y, 0, 1)), xe = de.getDay(), de = xe > 4 || xe === 0 ? Xn.ceil(de) : Xn(de), de = $n.offset(de, (K.V - 1) * 7), K.y = de.getFullYear(), K.m = de.getMonth(), K.d = de.getDate() + (K.w + 6) % 7);
      } else ("W" in K || "U" in K) && ("w" in K || (K.w = "u" in K ? K.u % 7 : "W" in K ? 1 : 0), xe = "Z" in K ? Zr(gn(K.y, 0, 1)).getUTCDay() : Xr(gn(K.y, 0, 1)).getDay(), K.m = 0, K.d = "W" in K ? (K.w + 6) % 7 + K.W * 7 - (xe + 5) % 7 : K.w + K.U * 7 - (xe + 6) % 7);
      return "Z" in K ? (K.H += K.Z / 100 | 0, K.M += K.Z % 100, Zr(K)) : Xr(K);
    };
  }
  function j(O, Z, ae, K) {
    for (var ue = 0, de = Z.length, xe = ae.length, pe, ge; ue < de; ) {
      if (K >= xe) return -1;
      if (pe = Z.charCodeAt(ue++), pe === 37) {
        if (pe = Z.charAt(ue++), ge = N[pe in Ws ? Z.charAt(ue++) : pe], !ge || (K = ge(O, ae, K)) < 0) return -1;
      } else if (pe != ae.charCodeAt(K++))
        return -1;
    }
    return K;
  }
  function D(O, Z, ae) {
    var K = c.exec(Z.slice(ae));
    return K ? (O.p = f.get(K[0].toLowerCase()), ae + K[0].length) : -1;
  }
  function S(O, Z, ae) {
    var K = g.exec(Z.slice(ae));
    return K ? (O.w = k.get(K[0].toLowerCase()), ae + K[0].length) : -1;
  }
  function x(O, Z, ae) {
    var K = h.exec(Z.slice(ae));
    return K ? (O.w = m.get(K[0].toLowerCase()), ae + K[0].length) : -1;
  }
  function b(O, Z, ae) {
    var K = P.exec(Z.slice(ae));
    return K ? (O.m = F.get(K[0].toLowerCase()), ae + K[0].length) : -1;
  }
  function H(O, Z, ae) {
    var K = p.exec(Z.slice(ae));
    return K ? (O.m = u.get(K[0].toLowerCase()), ae + K[0].length) : -1;
  }
  function B(O, Z, ae) {
    return j(O, t, Z, ae);
  }
  function L(O, Z, ae) {
    return j(O, n, Z, ae);
  }
  function C(O, Z, ae) {
    return j(O, a, Z, ae);
  }
  function w(O) {
    return i[O.getDay()];
  }
  function R(O) {
    return s[O.getDay()];
  }
  function _(O) {
    return d[O.getMonth()];
  }
  function A(O) {
    return l[O.getMonth()];
  }
  function q(O) {
    return o[+(O.getHours() >= 12)];
  }
  function M(O) {
    return 1 + ~~(O.getMonth() / 3);
  }
  function z(O) {
    return i[O.getUTCDay()];
  }
  function E(O) {
    return s[O.getUTCDay()];
  }
  function X(O) {
    return d[O.getUTCMonth()];
  }
  function ee(O) {
    return l[O.getUTCMonth()];
  }
  function Q(O) {
    return o[+(O.getUTCHours() >= 12)];
  }
  function W(O) {
    return 1 + ~~(O.getUTCMonth() / 3);
  }
  return {
    format: function(O) {
      var Z = y(O += "", T);
      return Z.toString = function() {
        return O;
      }, Z;
    },
    parse: function(O) {
      var Z = $(O += "", !1);
      return Z.toString = function() {
        return O;
      }, Z;
    },
    utcFormat: function(O) {
      var Z = y(O += "", v);
      return Z.toString = function() {
        return O;
      }, Z;
    },
    utcParse: function(O) {
      var Z = $(O += "", !0);
      return Z.toString = function() {
        return O;
      }, Z;
    }
  };
}
var Ws = { "-": "", _: " ", 0: "0" }, Xe = /^\s*\d+/, Pd = /^%/, Rd = /[\\^$*+?|[\]().{}]/g;
function Le(e, t, n) {
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
function Os(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Us(e, t, n) {
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
function Gs(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Kd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Ys(e, t, n) {
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
function Vs(e, t) {
  return Le(e.getDate(), t, 2);
}
function ru(e, t) {
  return Le(e.getHours(), t, 2);
}
function au(e, t) {
  return Le(e.getHours() % 12 || 12, t, 2);
}
function su(e, t) {
  return Le(1 + $n.count(Dt(e), e), t, 3);
}
function Yo(e, t) {
  return Le(e.getMilliseconds(), t, 3);
}
function ou(e, t) {
  return Yo(e, t) + "000";
}
function iu(e, t) {
  return Le(e.getMonth() + 1, t, 2);
}
function lu(e, t) {
  return Le(e.getMinutes(), t, 2);
}
function cu(e, t) {
  return Le(e.getSeconds(), t, 2);
}
function du(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function uu(e, t) {
  return Le(Ir.count(Dt(e) - 1, e), t, 2);
}
function Vo(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? cn(e) : cn.ceil(e);
}
function fu(e, t) {
  return e = Vo(e), Le(cn.count(Dt(e), e) + (Dt(e).getDay() === 4), t, 2);
}
function hu(e) {
  return e.getDay();
}
function pu(e, t) {
  return Le(Xn.count(Dt(e) - 1, e), t, 2);
}
function mu(e, t) {
  return Le(e.getFullYear() % 100, t, 2);
}
function gu(e, t) {
  return e = Vo(e), Le(e.getFullYear() % 100, t, 2);
}
function xu(e, t) {
  return Le(e.getFullYear() % 1e4, t, 4);
}
function bu(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? cn(e) : cn.ceil(e), Le(e.getFullYear() % 1e4, t, 4);
}
function yu(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Le(t / 60 | 0, "0", 2) + Le(t % 60, "0", 2);
}
function qs(e, t) {
  return Le(e.getUTCDate(), t, 2);
}
function vu(e, t) {
  return Le(e.getUTCHours(), t, 2);
}
function wu(e, t) {
  return Le(e.getUTCHours() % 12 || 12, t, 2);
}
function _u(e, t) {
  return Le(1 + rs.count(Yt(e), e), t, 3);
}
function qo(e, t) {
  return Le(e.getUTCMilliseconds(), t, 3);
}
function Su(e, t) {
  return qo(e, t) + "000";
}
function ku(e, t) {
  return Le(e.getUTCMonth() + 1, t, 2);
}
function Cu(e, t) {
  return Le(e.getUTCMinutes(), t, 2);
}
function ju(e, t) {
  return Le(e.getUTCSeconds(), t, 2);
}
function Nu(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Tu(e, t) {
  return Le(Go.count(Yt(e) - 1, e), t, 2);
}
function Ko(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? dn(e) : dn.ceil(e);
}
function $u(e, t) {
  return e = Ko(e), Le(dn.count(Yt(e), e) + (Yt(e).getUTCDay() === 4), t, 2);
}
function Du(e) {
  return e.getUTCDay();
}
function Iu(e, t) {
  return Le(Zn.count(Yt(e) - 1, e), t, 2);
}
function Mu(e, t) {
  return Le(e.getUTCFullYear() % 100, t, 2);
}
function Lu(e, t) {
  return e = Ko(e), Le(e.getUTCFullYear() % 100, t, 2);
}
function Fu(e, t) {
  return Le(e.getUTCFullYear() % 1e4, t, 4);
}
function Au(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? dn(e) : dn.ceil(e), Le(e.getUTCFullYear() % 1e4, t, 4);
}
function Bu() {
  return "+0000";
}
function Ks() {
  return "%";
}
function Xs(e) {
  return +e;
}
function Zs(e) {
  return Math.floor(+e / 1e3);
}
var Qt, Xo;
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
  return Qt = Ed(e), Xo = Qt.format, Qt.parse, Qt.utcFormat, Qt.utcParse, Qt;
}
function Pu(e) {
  return new Date(e);
}
function Ru(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Zo(e, t, n, a, o, s, i, l, d, c) {
  var f = zo(), h = f.invert, m = f.domain, g = c(".%L"), k = c(":%S"), p = c("%I:%M"), u = c("%I %p"), P = c("%a %d"), F = c("%b %d"), T = c("%B"), v = c("%Y");
  function N(y) {
    return (d(y) < y ? g : l(y) < y ? k : i(y) < y ? p : s(y) < y ? u : a(y) < y ? o(y) < y ? P : F : n(y) < y ? T : v)(y);
  }
  return f.invert = function(y) {
    return new Date(h(y));
  }, f.domain = function(y) {
    return arguments.length ? m(Array.from(y, Ru)) : m().map(Pu);
  }, f.ticks = function(y) {
    var $ = m();
    return e($[0], $[$.length - 1], y ?? 10);
  }, f.tickFormat = function(y, $) {
    return $ == null ? N : c($);
  }, f.nice = function(y) {
    var $ = m();
    return (!y || typeof y.range != "function") && (y = t($[0], $[$.length - 1], y ?? 10)), y ? m(wd($, y)) : f;
  }, f.copy = function() {
    return Ho(f, Zo(e, t, n, a, o, s, i, l, d, c));
  }, f;
}
function as() {
  return Dr.apply(Zo(Ad, Bd, Dt, kn, Ir, $n, ns, ts, rn, Xo).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
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
  const c = Fe(null), [f, h] = $e(!1), [m, g] = $e(!1), k = t(e.start), p = t(e.end), u = Math.max(p - k, 20), P = () => {
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
  }, F = e.progress ? u * e.progress / 100 : 0, T = () => {
    n?.(e);
  }, v = () => {
    a?.(e);
  }, N = (b) => {
    b.key === "Enter" ? (b.preventDefault(), T()) : b.key === " " && (b.preventDefault(), v());
  }, y = () => {
    h(!0);
  }, $ = () => {
    h(!1);
  }, j = () => {
    g(!0), l?.();
  }, D = () => {
    g(!1);
  }, S = [
    "gantt-task-bar",
    f && "gantt-task-bar--pressed",
    (m || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), x = {
    "--task-left": `${k}px`,
    "--task-width": `${u}px`,
    "--task-color": P(),
    left: `${k}px`,
    width: `${u}px`,
    backgroundColor: P()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": s,
      className: S,
      style: x,
      onClick: T,
      onDoubleClick: v,
      onKeyDown: N,
      onMouseDown: y,
      onMouseUp: $,
      onFocus: j,
      onBlur: D,
      "aria-label": d || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${F}px` }
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
  const [i, l] = $e(-1), d = Fe(null), c = (g) => {
    if (g.key === "ArrowLeft") {
      g.preventDefault();
      const k = Math.max(0, i === -1 ? 0 : i - 1);
      l(k), m(k);
    } else if (g.key === "ArrowRight") {
      g.preventDefault();
      const k = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(k), m(k);
    } else if (g.key === "ArrowDown") {
      g.preventDefault();
      const k = document.querySelector(".gantt-row .timeline-container");
      k && k.focus();
    } else if (g.key === "Home")
      g.preventDefault(), l(0), m(0);
    else if (g.key === "End") {
      g.preventDefault();
      const k = a.length - 1;
      l(k), m(k);
    }
  }, f = (g) => {
    if (g.key === "ArrowDown") {
      g.preventDefault();
      const k = document.querySelector(".gantt-row .resource-label");
      k && k.focus();
    } else if (g.key === "ArrowRight") {
      g.preventDefault();
      const k = d.current;
      k && k.focus();
    }
  }, h = () => {
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (g) => {
    const k = d.current?.querySelector(`[data-date-index="${g}"]`);
    k && k.focus();
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
            children: a.map((g, k) => {
              const p = g.getTime() === s.getTime(), u = i === k;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": k,
                  className: `date-column ${p ? "today" : ""} ${u ? "focused" : ""}`,
                  tabIndex: u ? 0 : -1,
                  role: "button",
                  "aria-label": `${g.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${p ? " (Today)" : ""}`,
                  onFocus: () => l(k),
                  onKeyDown: c,
                  children: g.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                k
              );
            })
          }
        )
      ]
    }
  );
}
function Wu({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, d] = $e(!1), [c, f] = $e(-1), h = Fe(null);
  Pe(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      h.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
  const m = (p) => {
    if (p.key === "ArrowLeft" && p.shiftKey) {
      p.preventDefault(), p.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (p.key === "ArrowRight" && p.shiftKey) {
      p.preventDefault(), p.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (p.key) {
        case "ArrowUp":
          p.preventDefault(), s === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          p.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          p.preventDefault(), h.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (p.preventDefault(), d(!0), f(0));
          break;
      }
      return;
    }
    switch (p.key) {
      case "ArrowLeft":
        p.preventDefault();
        const u = Math.max(0, c - 1);
        f(u), h.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
        break;
      case "ArrowRight":
        p.preventDefault();
        const F = Math.min(t.length - 1, c + 1);
        f(F), h.current?.querySelector(`[data-task-index="${F}"]`)?.focus();
        break;
      case "Enter":
        p.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        p.preventDefault(), c >= 0 && o?.(t[c]);
        break;
      case "Escape":
        p.preventDefault(), d(!1), f(-1), h.current?.focus();
        break;
    }
  }, g = (p) => {
    switch (p.key) {
      case "ArrowUp":
        p.preventDefault(), s === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        p.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        p.preventDefault(), h.current?.focus();
        break;
    }
  }, k = (p) => {
    l && f(p);
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
            onKeyDown: m,
            onFocus: () => {
              l || f(-1);
            },
            children: t.map((p, u) => /* @__PURE__ */ r.jsx(
              Hu,
              {
                task: p,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && c === u,
                taskIndex: u,
                tabIndex: l && c === u ? 0 : -1,
                onFocus: () => k(u)
              },
              p.id
            ))
          }
        )
      ]
    }
  );
}
function ox({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Fe(null), [l, d] = $e(800), c = Te(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const p = new Date(n);
    return isNaN(p.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : p;
  }, [n]), f = Te(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const p = new Date(a);
    return isNaN(p.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : p;
  }, [a]), h = Te(() => Math.ceil((f.getTime() - c.getTime()) / 864e5) + 1, [c, f]);
  Pe(() => {
    if (!i.current) return;
    const p = new ResizeObserver((u) => {
      const P = u[0];
      P && d(Math.max(P.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const m = Te(
    () => as().domain([c, f]).range([0, l]),
    [c, f, l]
  ), g = Te(() => {
    const p = /* @__PURE__ */ new Map();
    return t.forEach((u) => {
      const P = p.get(u.resourceId) || [];
      P.push(u), p.set(u.resourceId, P);
    }), p;
  }, [t]), k = (p) => {
    if (p.target === p.currentTarget)
      switch (p.key) {
        case "ArrowDown":
          p.preventDefault();
          const u = i.current?.querySelector(".gantt-row .resource-label");
          u && u.focus();
          break;
        case "Home":
          p.preventDefault();
          const P = i.current?.querySelector(".header-resource");
          P && P.focus();
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
      onKeyDown: k,
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
            onKeyDown: (p) => {
              p.key === "ArrowLeft" && p.altKey ? (p.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : p.key === "ArrowRight" && p.altKey ? (p.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : p.key === "ArrowUp" && p.altKey ? (p.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : p.key === "ArrowDown" && p.altKey && (p.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((p, u) => /* @__PURE__ */ r.jsx(
              Wu,
              {
                resource: p,
                tasks: g.get(p.id) || [],
                scale: m,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: u,
                dateCount: h
              },
              p.id
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
    const p = c();
    if (p && p.length > 0) {
      const u = p.slice().reverse().find((P) => P.href && !P.active);
      if (u)
        return { href: u.href, text: u.text };
    }
    return { text: "Home" };
  }, h = c(), m = f(), g = he(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), k = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: g,
      "aria-label": k,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          at.Children.map(t, (p, u) => at.isValidElement(p) && (p.type === Jn || p.type?.displayName === "BreadcrumbItem") ? at.cloneElement(p, { key: u }) : null)
        ) : (
          // Render from items array
          h?.filter((p) => p.active || !!p.href).map((p, u) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: p.active ? /* @__PURE__ */ r.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...p.attributes || {},
              children: p.text
            }
          ) : /* @__PURE__ */ r.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: p.href,
              role: "link",
              ...p.attributes || {},
              children: p.text
            }
          ) }, u))
        ) }),
        m.href && /* @__PURE__ */ r.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ r.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: m.href,
            role: "link",
            "aria-label": `Back to ${m.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              m.text
            ]
          }
        ) })
      ]
    }
  );
}, Uu = Ou;
Uu.Item = Jn;
Jn.displayName = "BreadcrumbItem";
const Jo = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [o, s] = $e(!1);
  Pe(() => {
    s(!0);
  }, []), Pe(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (d) => {
      const c = d.target, f = c.getAttribute("href");
      if (f && f.startsWith("#")) {
        const h = document.querySelector(f);
        if (h) {
          h.hasAttribute("tabindex") || h.setAttribute("tabindex", "-1"), h.focus(), h.classList.add("nhsuk-skip-link-focused-element");
          const m = window.setTimeout(() => {
            h.classList.remove("nhsuk-skip-link-focused-element"), h.getAttribute("tabindex") === "-1" && h.removeAttribute("tabindex");
          }, 3e3);
          c.__nhsSkipLinkTimeout = m;
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
  const i = he("nhsuk-skip-link", n);
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
}, ix = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = he("nhsuk-pagination", o);
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
}, lx = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = he("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
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
}, Qo = at.forwardRef(({
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
  const m = [
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
  ].filter(Boolean).join(" "), k = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), p = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const F = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Tt,
      {
        level: a,
        className: k,
        children: F()
      }
    );
  }, u = () => f.children ? f.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: s }) : null, P = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
      className: m,
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
          p(),
          u(),
          P()
        ] })
      ]
    }
  );
});
Qo.displayName = "Card";
const cx = ({
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
}, dx = ({
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
}, ux = ({
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
  "aria-labelledby": m,
  "aria-describedby": g
}) => {
  const k = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), p = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), u = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const F = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], T = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        F,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Tt,
      {
        level: a,
        className: p,
        children: T
      }
    );
  }, P = () => d || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: k,
      "data-testid": c,
      id: f,
      "aria-label": h,
      "aria-labelledby": m,
      "aria-describedby": g,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          u(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: P() })
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
  const c = he(
    "nhsuk-panel",
    t
  ), f = () => !n && !a && !l ? null : a ? /* @__PURE__ */ r.jsx(
    Tt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    Tt,
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
}, fx = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...o
}) => {
  const s = he("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...o, children: i() });
}, hx = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const o = he(
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
}, Js = ({
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
  attributes: m,
  "data-testid": g
}) => {
  const k = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), p = he(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    f
  ), u = he(h), P = (v, N) => {
    const y = he("nhsuk-table__header", {
      [`nhsuk-table__header--${v.format}`]: v.format
    }, v.classes), $ = {
      scope: "col",
      ...v.colspan && { colSpan: v.colspan },
      ...v.rowspan && { rowSpan: v.rowspan },
      ...s && { role: "columnheader" },
      ...v.attributes
    };
    return /* @__PURE__ */ r.jsx("th", { className: y, ...$, children: v.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text }, N);
  }, F = (v, N, y) => {
    const $ = o && y, j = he(
      $ ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${$ ? "header" : "cell"}--${v.format}`]: v.format
      },
      v.classes
    ), D = {
      ...$ && { scope: "row" },
      ...v.colspan && { colSpan: v.colspan },
      ...v.rowspan && { rowSpan: v.rowspan },
      ...s && {
        role: $ ? "rowheader" : "cell",
        ...v.header && { "data-label": v.header }
      },
      ...v.attributes
    }, S = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && v.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        v.header,
        " "
      ] }),
      v.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text
    ] }), x = $ ? "th" : "td";
    return /* @__PURE__ */ r.jsx(x, { className: j, ...D, children: S }, N);
  }, T = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: p,
      ...s && { role: "table" },
      ...m,
      ...g && { "data-testid": g },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: k, children: n }),
        t && t.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: t.map((v, N) => P(v, N)) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((v, N) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: v.map(
              (y, $) => F(y, $, $ === 0)
            )
          },
          N
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ r.jsxs(Gu, { className: c, children: [
    i && /* @__PURE__ */ r.jsx(Tt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    T()
  ] }) : u ? /* @__PURE__ */ r.jsx("div", { className: u, children: T() }) : T();
}, px = un(({
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
}, m) => {
  const g = n !== void 0, [k, p] = $e(() => t || e[0]?.id || ""), u = g ? n : k, P = Fe(null), F = Fe(/* @__PURE__ */ new Map()), T = le((S) => {
    g || p(S), a?.(S);
  }, [g, a]), v = le((S) => {
    o?.(S), l && T(S);
  }, [o, l, T]), N = le((S, x) => {
    const b = e.filter((L) => !L.disabled).map((L) => L.id), H = b.indexOf(x);
    let B = null;
    switch (S.key) {
      case "ArrowLeft":
        B = H > 0 ? H - 1 : b.length - 1;
        break;
      case "ArrowRight":
        B = H < b.length - 1 ? H + 1 : 0;
        break;
      case "Home":
        B = 0;
        break;
      case "End":
        B = b.length - 1;
        break;
      case "Escape":
        S.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (B !== null) {
      S.preventDefault();
      const L = b[B], C = F.current.get(L);
      C && (C.focus(), v(L));
    }
  }, [e, v, i]), y = le((S, x) => {
    x ? F.current.set(S, x) : F.current.delete(S);
  }, []), $ = le((S) => {
    const x = F.current.get(S);
    x && x.focus();
  }, []);
  So(m, () => ({
    focusTab: $,
    getActiveTab: () => u,
    getTabListElement: () => P.current
  }), [$, u]);
  const j = le((S) => {
    const x = S.relatedTarget;
    P.current?.contains(x) || s?.();
  }, [s]), D = he("nhsuk-tabs", d);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: D,
      id: c,
      "data-testid": f,
      ...h,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: P,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: j,
                children: e.map((S) => {
                  const x = S.id === u, b = S.disabled, H = he("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": x,
                    "nhsuk-tabs__list-item--disabled": b
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: H, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (B) => y(S.id, B),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": x,
                      "aria-controls": `${S.id}-panel`,
                      id: `${S.id}-tab`,
                      tabIndex: x ? 0 : -1,
                      disabled: b,
                      onClick: () => !b && T(S.id),
                      onKeyDown: (B) => !b && N(B, S.id),
                      onFocus: () => !b && v(S.id),
                      ...S.attributes,
                      children: S.label
                    }
                  ) }, S.id);
                })
              }
            )
          }
        ),
        e.map((S) => {
          const x = S.id === u;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${S.id}-tab`,
              id: `${S.id}-panel`,
              hidden: !x,
              children: S.content
            },
            S.id
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
    let m;
    return l ? m = l : a ? m = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (m = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: f,
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: h }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: m })
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
    ), h = (g) => t === "cross" && !a ? `do not ${g}` : g, m = () => /* @__PURE__ */ r.jsx(
      Tt,
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
          m(),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: c.join(" "), role: "list", children: n.map((g, k) => /* @__PURE__ */ r.jsxs("li", { children: [
            f(),
            h(g.item)
          ] }, k)) }) })
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
    let m;
    return l ? m = l : a ? m = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (m = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: f,
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", children: h }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: m })
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
      const c = d + 1, f = `${t}-${c}-hint`, h = `${t}-${c}-status`, m = !!l.href, g = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), k = [
        l.hint && f,
        h
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        Xu,
        {
          item: l,
          itemClasses: g,
          hasLink: m,
          hintId: f,
          statusId: h,
          ariaDescribedBy: k
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
    return e.status.tag ? f = /* @__PURE__ */ r.jsx(et, { ...e.status.tag }) : e.status.html ? f = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : f = e.status.text, /* @__PURE__ */ r.jsx("div", { className: c, id: o, children: f });
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
const mx = ({
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
        _o(
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
}, gx = ({
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
    /* @__PURE__ */ r.jsx(Qe, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ r.jsx(Qe, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ r.jsx(Qe, { variant: "secondary", size: "small", onClick: n, "aria-label": "Next date range", children: "Next" }),
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
] }), Ju = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(et, { color: Qu(n.status), text: n.label }) }, n.status)) });
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
const xx = ({
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
  legendItems: m,
  enableDefaultLegend: g = !0,
  legendPlacement: k = "bottom",
  onA11yModeChange: p
}) => {
  const [u, P] = $e("grid"), F = i || u, [T, v] = $e(a || []), N = n ?? T, y = Te(() => {
    const B = /* @__PURE__ */ new Set();
    return e.forEach((L) => B.add(new Date(L.start).getTime())), Array.from(B).sort((L, C) => L - C);
  }, [e]), $ = Te(() => {
    const B = {};
    return e.forEach((L) => {
      const C = new Date(L.start).getTime();
      B[C] || (B[C] = {});
      const w = L.capacity - L.booked - (L.held || 0);
      B[C][L.sessionId] = { slot: L, remaining: w };
    }), B;
  }, [e]), j = le((B) => {
    if (s === "single") {
      const L = [B.id];
      n || v(L), o?.(L, { lastAction: "select" });
    } else {
      const L = N.includes(B.id), C = L ? N.filter((w) => w !== B.id) : [...N, B.id];
      n || v(C), o?.(C, { lastAction: L ? "deselect" : "select" });
    }
  }, [s, N, n, o]), D = Te(() => m || (g ? Array.from(new Set(e.map((L) => L.status))).map((L) => ({
    status: L,
    label: L.charAt(0).toUpperCase() + L.slice(1)
  })) : void 0), [m, g, e]), S = D ? /* @__PURE__ */ r.jsx(
    Ju,
    {
      items: D,
      orientation: k === "left" || k === "right" ? "vertical" : "horizontal"
    }
  ) : null, x = (B) => {
    i || P(B), p?.(B);
  }, b = f || (h ? /* @__PURE__ */ r.jsx(
    Zu,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: F,
      onA11yModeChange: x
    }
  ) : null), H = /* @__PURE__ */ r.jsx("div", { style: d, className: he(l), children: /* @__PURE__ */ r.jsx(ca, { className: he("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Gt, { children: /* @__PURE__ */ r.jsx(vn, { width: "full", children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    b,
    k === "top" && S,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((B) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => j(B), "aria-pressed": N.includes(B.id), children: [
      yn(new Date(B.start)),
      " – ",
      yn(new Date(B.end)),
      " (",
      B.status,
      ")"
    ] }) }, B.id)) }),
    k === "bottom" && S
  ] }) }) }) }) });
  return F === "list" ? H : /* @__PURE__ */ r.jsx("div", { style: d, className: he(l), children: /* @__PURE__ */ r.jsx(ca, { className: he("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Gt, { children: /* @__PURE__ */ r.jsx(vn, { width: "full", children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    b,
    k === "top" && S,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": y.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((B) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${B.specialty}`, className: "nhs-slot-matrix__session-header", children: B.specialty }, B.id))
      ] }),
      y.map((B) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": yn(new Date(B)), children: yn(new Date(B)) }),
        t.map((L) => {
          const C = $[B]?.[L.id];
          if (!C)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, L.id);
          const { slot: w, remaining: R } = C, _ = N.includes(w.id), A = c ? c(w) : `Slot ${yn(new Date(w.start))} ${w.status}${R === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": w.status,
              className: he("nhs-slot-matrix__cell", _ && "nhs-slot-matrix__cell--selected"),
              "aria-label": A,
              "aria-selected": _ || void 0,
              onClick: () => j(w),
              children: R > 0 ? `${R} left` : "Full"
            },
            w.id
          );
        })
      ] }, B))
    ] }),
    k === "bottom" && S
  ] }) }) }) }) });
};
function Qs(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function yn(e) {
  return `${Qs(e.getHours())}:${Qs(e.getMinutes())}`;
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
    /* @__PURE__ */ r.jsx(Tt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, bx = ({
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
    tableClassName: m,
    bordered: g = !1,
    striped: k = !1,
    responsive: p = !1,
    tableType: u = "default"
  }, P) => {
    const F = Fe(null), T = Fe(null), v = Fe(null);
    at.useImperativeHandle(P, () => F.current, []);
    const [N, y] = $e(0), [$, j] = $e(0), [D, S] = $e("headers"), [x, b] = $e("browse"), H = t.length, B = e.length, L = Te(() => !n || n.length === 0 ? e : [...e].sort((M, z) => {
      for (const { key: E, direction: X } of n) {
        const ee = M[E], Q = z[E];
        if (ee == null && Q == null) continue;
        if (ee == null) return 1;
        if (Q == null) return -1;
        let W = 0;
        if (typeof ee == "number" && typeof Q == "number" ? W = ee - Q : W = String(ee).localeCompare(String(Q)), W !== 0)
          return X === "asc" ? W : -W;
      }
      return 0;
    }), [e, n]), C = le((M, z) => {
      setTimeout(() => {
        const E = F.current?.querySelector(
          `tbody tr:nth-child(${M + 1}) td:nth-child(${z + 1})`
        );
        E && (E.focus(), typeof E.scrollIntoView == "function" && E.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), w = le((M) => {
      setTimeout(() => {
        const z = F.current?.querySelector(`th:nth-child(${M + 1})`);
        z && (z.focus(), typeof z.scrollIntoView == "function" && z.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), R = le((M) => {
      a?.(M);
    }, [a]), _ = le((M) => {
      s?.(M);
    }, [s]), A = le((M) => {
      const { key: z } = M;
      switch (z) {
        case "Enter":
          if (M.preventDefault(), D === "headers" && x === "browse")
            b("navigate"), w($);
          else if (D === "headers" && x === "navigate") {
            const E = t[$];
            E && R(E.key);
          } else D === "cells" && x === "browse" ? (b("navigate"), C(N, $)) : D === "cells" && x === "navigate" && _(N);
          break;
        case "Escape":
          M.preventDefault(), (D === "headers" && x === "navigate" || D === "cells" && x === "navigate") && b("browse");
          break;
        case "ArrowLeft":
          if (M.preventDefault(), x === "navigate" || x === "browse" && D === "headers") {
            if (D === "headers") {
              const E = Math.max(0, $ - 1);
              j(E), w(E);
            } else if (D === "cells") {
              const E = Math.max(0, $ - 1);
              j(E), C(N, E);
            }
          }
          break;
        case "ArrowRight":
          if (M.preventDefault(), x === "navigate" || x === "browse" && D === "headers") {
            if (D === "headers") {
              const E = Math.min(H - 1, $ + 1);
              j(E), w(E);
            } else if (D === "cells") {
              const E = Math.min(H - 1, $ + 1);
              j(E), C(N, E);
            }
          }
          break;
        case "ArrowUp":
          if (M.preventDefault(), D === "cells") {
            if (x === "browse") {
              const E = Math.max(0, N - 1);
              y(E), C(E, 0), j(0);
            } else if (x === "navigate")
              if (N > 0) {
                const E = N - 1;
                y(E), C(E, $);
              } else
                S("headers"), b("browse"), w($);
          }
          break;
        case "ArrowDown":
          if (M.preventDefault(), D === "headers" && x === "browse")
            S("cells"), y(0), j(0), C(0, 0);
          else if (D === "cells") {
            const E = B - 1;
            if (x === "browse") {
              const X = Math.min(E, N + 1);
              y(X), C(X, 0), j(0);
            } else if (x === "navigate" && N < E) {
              const X = N + 1;
              y(X), C(X, $);
            }
          }
          break;
        case "Home":
          M.preventDefault(), D === "headers" ? (j(0), w(0)) : D === "cells" && (M.ctrlKey ? (y(0), j(0), C(0, 0)) : (j(0), C(N, 0)));
          break;
        case "End":
          if (M.preventDefault(), D === "headers") {
            const E = H - 1;
            j(E), w(E);
          } else if (D === "cells")
            if (M.ctrlKey) {
              const E = B - 1, X = H - 1;
              y(E), j(X), C(E, X);
            } else {
              const E = H - 1;
              j(E), C(N, E);
            }
          break;
        case " ":
          if (M.preventDefault(), D === "headers" && x === "navigate") {
            const E = t[$];
            E && R(E.key);
          } else D === "cells" && x === "navigate" && _(N);
          break;
      }
    }, [
      D,
      x,
      $,
      N,
      H,
      B,
      t,
      C,
      w,
      R,
      _
    ]);
    Pe(() => {
      const M = F.current;
      if (M)
        return M.addEventListener("keydown", A), () => M.removeEventListener("keydown", A);
    }, [A]);
    const q = he(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": p,
        "nhsuk-table--bordered": g,
        "nhsuk-table--striped": k,
        "nhsuk-table--compact": u === "compact"
      },
      h
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: F,
        className: q,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": f,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: T, role: "row", children: t.map((M, z) => {
            const E = n?.find((Q) => Q.key === M.key), X = !!E, ee = D === "headers" && $ === z;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: he("sortable-header", {
                  "sortable-header--focused": ee
                }),
                role: "columnheader",
                tabIndex: ee ? 0 : -1,
                onClick: () => R(M.key),
                onKeyDown: (Q) => {
                  (Q.key === "Enter" || Q.key === " ") && (Q.preventDefault(), R(M.key));
                },
                "aria-sort": X ? E?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: M.label }),
                  X && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((Q) => Q.key === M.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: E?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              M.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: v, className: "nhsuk-table__body", role: "rowgroup", children: L.map((M, z) => {
            const E = o === z, X = D === "cells" && N === z;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: he("data-row", {
                  "data-row--selected": E,
                  "data-row--focused": X
                }),
                "aria-selected": E,
                children: t.map((ee, Q) => {
                  const W = ee.tableRenderer ? ee.tableRenderer(M) : ee.render ? ee.render(M) : M[ee.key], O = D === "cells" && N === z && $ === Q, Z = () => typeof W == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: W ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: W ? "Yes" : "No" })
                  ] }) : String(W ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: he("data-cell", {
                        "data-cell--focused": O
                      }),
                      tabIndex: O ? 0 : -1,
                      onClick: () => _(z),
                      children: Z()
                    },
                    ee.key
                  );
                })
              },
              z
            );
          }) })
        ]
      }
    );
  }
);
tf.displayName = "AriaDataGrid";
const ei = ({
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
  const h = Fe(null), m = Fe(null), g = Fe(null), k = le((D, S) => {
    d || (m.current = S, D.dataTransfer.effectAllowed = "move", D.dataTransfer.setData("text/plain", S));
  }, [d]), p = le((D, S) => {
    d || m.current === S || (D.preventDefault(), D.dataTransfer.dropEffect = "move", g.current = S);
  }, [d]), u = le((D, S) => {
    if (d) return;
    D.preventDefault();
    const x = m.current;
    if (!x || x === S) return;
    const b = e.findIndex((B) => B.key === x), H = e.findIndex((B) => B.key === S);
    if (b !== -1 && H !== -1) {
      const B = [...e], [L] = B.splice(b, 1);
      B.splice(H, 0, L), n(B);
    }
    m.current = null, g.current = null;
  }, [d, e, n]), P = le(() => {
    m.current = null, g.current = null;
  }, []), F = le((D) => {
    const S = t.find((x) => x.key === D);
    return S ? S.label : D;
  }, [t]), T = le((D) => ["red", "orange", "blue", "aqua-green", "grey"][D] || "grey", []), v = le((D) => {
    if (d) return;
    const S = e.map(
      (x) => x.key === D ? { ...x, direction: x.direction === "asc" ? "desc" : "asc" } : x
    );
    n(S);
  }, [e, n, d]), N = le((D) => {
    if (d) return;
    const S = e.filter((x) => x.key !== D);
    n(S);
  }, [e, n, d]), y = le(() => {
    d || n([]);
  }, [n, d]), $ = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const D = e.map((S, x) => {
      const b = S.direction === "asc" ? "ascending" : "descending";
      return `${x + 1}. ${F(S.key)} (${b})`;
    });
    if (D.length === 1)
      return `Sorted by: ${D[0]}`;
    if (D.length === 2)
      return `Sorted by: ${D.join(" and ")}`;
    {
      const S = D.pop();
      return `Sorted by: ${D.join(", ")}, and ${S}`;
    }
  }, j = Te(() => {
    const D = ["sort-description"];
    return l && D.push("sort-help"), f && D.push(f), D.join(" ");
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
        children: $()
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
          "aria-describedby": j,
          children: e.map((D, S) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (x) => k(x, D.key),
              onDragOver: (x) => p(x, D.key),
              onDrop: (x) => u(x, D.key),
              onDragEnd: P,
              onClick: () => v(D.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${D.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": D.key,
              children: /* @__PURE__ */ r.jsx(
                et,
                {
                  color: T(S),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => N(D.key),
                  disabled: d,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${S + 1}`, children: S + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: F(D.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (x) => {
                          x.stopPropagation(), v(D.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${F(D.key)}. Currently ${D.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ r.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${D.direction}`, children: /* @__PURE__ */ r.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${D.direction}`,
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
            D.key
          ))
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
        Qe,
        {
          variant: "secondary",
          onClick: y,
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
    orientation: m = "horizontal",
    id: g,
    isLoading: k = !1,
    loadingComponent: p,
    error: u = null,
    errorComponent: P,
    "data-testid": F,
    actions: T,
    actionsMinGap: v = 16,
    forceActionsAbove: N = !1
  } = t, $ = Fe(
    g || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, j = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), D = `${$}-description`, S = `${$}-navigation-help`, {
    dataComparator: x = (I, Y) => JSON.stringify(I) === JSON.stringify(Y),
    filterFunction: b = (I) => I,
    booleanRenderer: H = (I) => I ? "✓" : "✗"
  } = a || {}, B = s !== void 0, L = s ?? 0, [C, w] = $e({
    focusArea: "tabs",
    focusedTabIndex: L,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), R = Te(() => ({
    selectedIndex: L,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [L]), [_, A] = ko(nf, R);
  Pe(() => {
    const I = _.tabLoadingStates.length, Y = o.length;
    I !== Y && A({ type: "ADJUST_ARRAYS", payload: { newLength: Y } });
  }, [o.length]), Pe(() => {
    B && A({ type: "SET_SELECTED_INDEX", payload: L });
  }, [L, B]), Pe(() => {
    w((I) => ({
      ...I,
      focusArea: "tabs",
      focusedTabIndex: _.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [_.selectedIndex]), Pe(() => {
    l && l(_.globalSelectedRowData);
  }, [_.globalSelectedRowData, l]);
  const q = le(
    (I, Y) => x(I, Y),
    [x]
  ), M = le(
    (I) => {
      I >= 0 && I < o.length && !o[I].disabled && (A({ type: "SET_SELECTED_INDEX", payload: I }), w((Y) => ({
        ...Y,
        focusedTabIndex: I,
        focusArea: "tabs"
      })), i?.(I));
    },
    [o, i]
  ), z = Fe(!1), E = le(
    (I, Y) => {
      if (!Y?.force && !z.current && I === 0) {
        z.current = !0;
        return;
      }
      z.current = !0, setTimeout(() => {
        const re = X.current[I], oe = re?.parentElement;
        if (re && oe) {
          const J = re.offsetLeft, se = re.offsetWidth, _e = oe.clientWidth, ye = J - _e / 2 + se / 2;
          try {
            oe.scrollTo({
              left: Math.max(0, ye),
              behavior: "smooth"
            });
          } catch {
            re.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!re,
          tabListElementExists: !!oe
        });
      }, 50);
    },
    []
  ), X = Fe([]), ee = Fe([]), Q = le(
    (I, Y) => {
      const re = _.sortConfig || [], oe = re.find(
        (_e) => _e.key === Y
      );
      let J;
      oe ? oe.direction === "asc" ? J = re.map(
        (_e) => _e.key === Y ? { ..._e, direction: "desc" } : _e
      ) : J = re.filter(
        (_e) => _e.key !== Y
      ) : J = [...re, { key: Y, direction: "asc" }], A({
        type: "SET_SORT",
        payload: J
      }), o[I].onSort?.(Y);
    },
    [_.sortConfig, o]
  ), W = le(
    (I) => {
      setTimeout(() => {
        const Y = document.querySelector(
          `[data-tab-panel="${_.selectedIndex}"] th:nth-child(${I + 1})`
        );
        Y && Y.focus();
      }, 0);
    },
    [_.selectedIndex]
  ), O = le(
    (I) => H(I),
    [H]
  ), Z = le(
    (I, Y) => {
      setTimeout(() => {
        const re = document.querySelector(
          `[data-tab-panel="${_.selectedIndex}"] tbody tr:nth-child(${I + 1}) td:nth-child(${Y + 1})`
        );
        re && re.focus();
      }, 0);
    },
    [_.selectedIndex]
  );
  Pe(() => {
    C.isGridActive && (C.focusArea === "headers" ? setTimeout(() => {
      W(C.focusedHeaderIndex);
    }, 0) : C.focusArea === "cells" && setTimeout(() => {
      Z(
        C.focusedRowIndex,
        C.focusedColumnIndex
      );
    }, 0));
  }, [
    C.focusArea,
    C.isGridActive,
    C.focusedHeaderIndex,
    C.focusedRowIndex,
    C.focusedColumnIndex,
    W,
    Z
  ]), Pe(() => {
    E(_.selectedIndex);
  }, [_.selectedIndex, E]);
  const ae = le(
    (I, Y) => {
      const { key: re } = I, oe = o[_.selectedIndex], J = oe?.columns.length || 0;
      switch (re) {
        case "ArrowLeft":
          I.preventDefault();
          const se = Math.max(0, Y - 1);
          w((De) => ({
            ...De,
            focusedHeaderIndex: se
          })), W(se);
          break;
        case "ArrowRight":
          I.preventDefault();
          const _e = Math.min(J - 1, Y + 1);
          w((De) => ({
            ...De,
            focusedHeaderIndex: _e
          })), W(_e);
          break;
        case "ArrowUp":
          I.preventDefault(), w((De) => ({
            ...De,
            focusArea: "tabs",
            focusedTabIndex: _.selectedIndex
          })), E(_.selectedIndex), X.current[_.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          I.preventDefault(), w((De) => ({
            ...De,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: Y,
            isGridActive: !0
          }));
          break;
        case "Home":
          I.preventDefault(), w((De) => ({ ...De, focusedHeaderIndex: 0 })), W(0);
          break;
        case "End":
          I.preventDefault();
          const ye = J - 1;
          w((De) => ({
            ...De,
            focusedHeaderIndex: ye
          })), W(ye);
          break;
        case "Enter":
        case " ":
          I.preventDefault();
          const je = oe?.columns[Y]?.key;
          je && Q(_.selectedIndex, je);
          break;
      }
    },
    [
      o,
      _.selectedIndex,
      Q,
      w,
      W,
      Z,
      X
    ]
  ), K = le(
    (I, Y, re) => {
      const { key: oe } = I, J = o[_.selectedIndex], se = J?.data.length || 0, _e = J?.columns.length || 0;
      switch (oe) {
        case "ArrowUp":
          if (I.preventDefault(), Y === 0)
            w((fe) => ({
              ...fe,
              focusArea: "headers",
              focusedHeaderIndex: re,
              isGridActive: !1
            })), W(re);
          else {
            const fe = Y - 1;
            w((Ne) => ({
              ...Ne,
              focusedRowIndex: fe
            })), Z(fe, re);
          }
          break;
        case "ArrowDown":
          I.preventDefault();
          const ye = Math.min(se - 1, Y + 1);
          w((fe) => ({
            ...fe,
            focusedRowIndex: ye
          })), Z(ye, re);
          break;
        case "ArrowLeft":
          I.preventDefault();
          const je = Math.max(0, re - 1);
          w((fe) => ({
            ...fe,
            focusedColumnIndex: je
          })), Z(Y, je);
          break;
        case "ArrowRight":
          I.preventDefault();
          const De = Math.min(_e - 1, re + 1);
          w((fe) => ({
            ...fe,
            focusedColumnIndex: De
          })), Z(Y, De);
          break;
        case "Home":
          I.preventDefault(), I.ctrlKey ? (w((fe) => ({
            ...fe,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), Z(0, 0)) : (w((fe) => ({ ...fe, focusedColumnIndex: 0 })), Z(Y, 0));
          break;
        case "End":
          if (I.preventDefault(), I.ctrlKey) {
            const fe = se - 1, Ne = _e - 1;
            w((Ae) => ({
              ...Ae,
              focusedRowIndex: fe,
              focusedColumnIndex: Ne
            })), Z(fe, Ne);
          } else {
            const fe = _e - 1;
            w((Ne) => ({
              ...Ne,
              focusedColumnIndex: fe
            })), Z(Y, fe);
          }
          break;
        case "Enter":
        case " ":
          if (I.preventDefault(), J && J.data[Y]) {
            const fe = J.data.some(
              (Oe) => "ews_data" in Oe
            ) ? b(J.data, _.filters) : J.data, Ne = _.sortConfig;
            let Ae = fe;
            if (Ne && Ne.length > 0 && (Ae = [...fe].sort((Oe, Be) => {
              for (const { key: tt, direction: It } of Ne) {
                let pt = Oe[tt], ct = Be[tt];
                const Ue = J.columns.find(
                  (fn) => fn.key === tt
                );
                if (Ue?.tableRenderer ? (pt = Ue.tableRenderer(Oe), ct = Ue.tableRenderer(Be)) : Ue?.render && (pt = Ue.render(Oe), ct = Ue.render(Be)), pt == null && ct == null) continue;
                if (pt == null) return It === "asc" ? -1 : 1;
                if (ct == null) return It === "asc" ? 1 : -1;
                let Ve = 0;
                if (typeof pt == "number" && typeof ct == "number" ? Ve = pt - ct : Ve = String(pt).localeCompare(
                  String(ct),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Ve !== 0)
                  return It === "asc" ? Ve : -Ve;
              }
              return 0;
            })), Ae[Y]) {
              const Oe = Ae[Y], tt = _.globalSelectedRowData && q(_.globalSelectedRowData, Oe) ? null : Oe;
              A({
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
      _.selectedIndex,
      _.filters,
      _.sortConfig,
      b,
      q,
      A,
      w,
      W,
      Z
    ]
  ), ue = le(
    (I, Y) => b(I, Y),
    [b]
  );
  if (So(
    n,
    () => ({
      selectTab: (I) => {
        I >= 0 && I < o.length && (A({ type: "SET_SELECTED_INDEX", payload: I }), i?.(I));
      },
      refreshData: (I) => {
        console.log("Refreshing data for tab:", I ?? "all");
      },
      exportData: (I) => {
        const Y = I ?? _.selectedIndex, re = o[Y];
        return re ? re.data : [];
      },
      getSelectedRows: (I) => _.globalSelectedRowData ? [] : [],
      clearSelection: (I) => {
        A({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (I) => {
        A({ type: "SET_FILTERS", payload: I });
      }
    }),
    [_.selectedIndex, _.selectedRows, o, i]
  ), k)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${f}`,
        "data-testid": F,
        children: p || /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ r.jsx(
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
        "data-testid": F,
        children: P || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: u })
        ] })
      }
    );
  const de = Fe(null), xe = Fe(null), pe = Fe(null), [ge, Me] = $e(!0);
  Pe(() => {
    if (!T) {
      Me(!1);
      return;
    }
    if (N) {
      Me(!1);
      return;
    }
    function I() {
      if (!de.current || !xe.current || !pe.current) return;
      const oe = de.current.clientWidth, J = Array.from(
        xe.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), se = J.reduce((De, fe) => De + fe.offsetWidth, 0), _e = pe.current.offsetWidth, ye = Math.max(8 * (J.length - 1), 0), je = se + ye + _e + v <= oe;
      Me(je);
    }
    const Y = requestAnimationFrame(() => I()), re = new ResizeObserver(() => I());
    return de.current && re.observe(de.current), xe.current && re.observe(xe.current), () => {
      cancelAnimationFrame(Y), re.disconnect();
    };
  }, [T, v, N, o.length]);
  const Ce = pe, Se = le(() => Ce.current ? Array.from(
    Ce.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((I) => !I.hasAttribute("disabled")) : [], []), G = le(
    (I) => {
      const Y = Se();
      if (!Y.length) return;
      const re = Math.max(0, Math.min(I, Y.length - 1));
      Y[re].focus(), w((oe) => ({ ...oe, focusArea: "actions", focusedActionIndex: re }));
    },
    [Se]
  ), V = le(() => G(0), [G]), ne = le(
    (I, Y) => {
      const { key: re } = I, oe = o.length - 1;
      switch (re) {
        case "ArrowUp": {
          T && !ge && (I.preventDefault(), V());
          break;
        }
        case "ArrowLeft": {
          I.preventDefault();
          const J = Y > 0 ? Y - 1 : oe;
          M(J), E(J), X.current[J]?.focus();
          break;
        }
        case "ArrowRight": {
          if (I.preventDefault(), Y === oe && T && ge) {
            V();
            return;
          }
          const J = Y < oe ? Y + 1 : 0;
          M(J), E(J), X.current[J]?.focus();
          break;
        }
        case "ArrowDown": {
          I.preventDefault(), w((J) => ({
            ...J,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          I.preventDefault(), M(0), E(0), X.current[0]?.focus();
          break;
        }
        case "End": {
          I.preventDefault(), M(oe), E(oe), X.current[oe]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          I.preventDefault(), M(Y);
          break;
        }
        case "Tab": {
          !I.shiftKey && Y === oe && T && ge && V();
          break;
        }
      }
    },
    [o.length, M, E, T, ge, V]
  ), te = le((I) => {
    const { key: Y } = I, re = Se();
    if (!re.length) return;
    const oe = re.findIndex((J) => J === document.activeElement);
    switch (Y) {
      case "ArrowLeft": {
        if (ge)
          if (oe > 0)
            I.preventDefault(), G(oe - 1);
          else {
            I.preventDefault();
            const J = o.length - 1;
            M(J), E(J), X.current[J]?.focus(), w((se) => ({ ...se, focusArea: "tabs", focusedTabIndex: J }));
          }
        break;
      }
      case "ArrowRight": {
        ge && (oe < re.length - 1 ? (I.preventDefault(), G(oe + 1)) : (I.preventDefault(), M(0), E(0), X.current[0]?.focus(), w((J) => ({ ...J, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (ge)
          I.preventDefault(), w((J) => ({ ...J, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          I.preventDefault();
          const J = _.selectedIndex;
          X.current[J]?.focus(), w((se) => ({ ...se, focusArea: "tabs", focusedTabIndex: J }));
        }
        break;
      }
    }
  }, [Se, ge, G, o.length, M, E, _.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${f}`,
      id: g,
      "data-testid": F,
      ref: de,
      children: [
        c && !j && /* @__PURE__ */ r.jsx("div", { id: D, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: S,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          ei,
          {
            sortConfig: _.sortConfig || [],
            columns: o.flatMap(
              (I) => I.columns.map((Y) => ({ key: Y.key, label: Y.label }))
            ).filter(
              (I, Y, re) => re.findIndex((oe) => oe.key === I.key) === Y
              // Remove duplicates
            ),
            onSortChange: (I) => {
              A({ type: "SET_SORT", payload: I });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        T && !ge && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: pe,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: te,
            children: T
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${ge ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? j ? c : D : S,
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              ref: xe,
              children: o.map((I, Y) => {
                const re = Y === _.selectedIndex, oe = I.disabled || h;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${I.id}`,
                    "aria-controls": `panel-${I.id}`,
                    "aria-selected": re,
                    "aria-disabled": oe,
                    tabIndex: re ? 0 : -1,
                    ref: (J) => {
                      X.current[Y] = J;
                    },
                    onClick: () => M(Y),
                    onKeyDown: (J) => ne(J, Y),
                    disabled: oe,
                    className: [
                      "aria-tabs-datagrid__tab",
                      re ? "aria-tabs-datagrid__tab--selected" : "",
                      oe ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: I.label }),
                      _.tabLoadingStates[Y] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      _.tabErrors[Y] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  I.id
                );
              })
            }
          ),
          T && ge && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: pe,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: te,
              children: T
            }
          )
        ] }),
        o.map((I, Y) => {
          const re = Y === _.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${I.id}`,
              "aria-labelledby": `tab-${I.id}`,
              tabIndex: 0,
              hidden: !re,
              ref: (oe) => {
                ee.current[Y] = oe;
              },
              className: `aria-tabs-datagrid__panel ${I.className || ""}`,
              "data-tab-panel": Y,
              children: re && (() => {
                const oe = I.data.some(
                  (se) => "ews_data" in se
                ) ? ue(I.data, _.filters) : I.data, J = Te(() => {
                  const se = _.sortConfig;
                  return !se || se.length === 0 ? oe : [...oe].sort((_e, ye) => {
                    for (const { key: je, direction: De } of se) {
                      let fe = _e[je], Ne = ye[je];
                      const Ae = I.columns.find(
                        (Be) => Be.key === je
                      );
                      if (Ae?.tableRenderer ? (fe = Ae.tableRenderer(_e), Ne = Ae.tableRenderer(ye)) : Ae?.render && (fe = Ae.render(_e), Ne = Ae.render(ye)), fe == null && Ne == null) continue;
                      if (fe == null) return 1;
                      if (Ne == null) return -1;
                      let Oe = 0;
                      if (typeof fe == "number" && typeof Ne == "number" ? Oe = fe - Ne : typeof fe == "boolean" && typeof Ne == "boolean" ? Oe = fe === Ne ? 0 : fe ? 1 : -1 : Oe = String(fe).localeCompare(
                        String(Ne),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Oe !== 0)
                        return De === "asc" ? Oe : -Oe;
                    }
                    return 0;
                  });
                }, [oe, _.sortConfig, I.columns]);
                return /* @__PURE__ */ r.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": I.ariaLabel,
                    "aria-describedby": I.ariaDescription ? `panel-${I.id}-description` : void 0,
                    children: [
                      I.ariaDescription && /* @__PURE__ */ r.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${I.id}-description`,
                          children: I.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: I.columns.map((se, _e) => {
                        const ye = _.sortConfig?.find(
                          (fe) => fe.key === se.key
                        ), je = !!ye, De = C.focusArea === "headers" && C.focusedHeaderIndex === _e;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${De ? "sortable-header--focused" : ""} ${je ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: De ? 0 : -1,
                            onClick: () => Q(Y, se.key),
                            onKeyDown: (fe) => ae(fe, _e),
                            "aria-sort": je ? ye?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: se.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${je ? `sort-indicator--${ye?.direction}` : ""}`,
                                  children: [
                                    _.sortConfig && _.sortConfig.length > 0 && _.sortConfig.findIndex(
                                      (fe) => fe.key === se.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${_.sortConfig.findIndex((fe) => fe.key === se.key) + 1}`,
                                        "data-priority": _.sortConfig.findIndex(
                                          (fe) => fe.key === se.key
                                        ) + 1,
                                        title: `Sort priority: ${_.sortConfig.findIndex((fe) => fe.key === se.key) + 1}`,
                                        children: _.sortConfig.findIndex(
                                          (fe) => fe.key === se.key
                                        ) + 1
                                      }
                                    ),
                                    je && /* @__PURE__ */ r.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${ye?.direction}`,
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
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: J.map((se, _e) => {
                        const ye = _.globalSelectedRowData && q(_.globalSelectedRowData, se), je = C.focusArea === "cells" && C.focusedRowIndex === _e;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ye ? "data-row--selected" : ""} ${je ? "data-row--focused" : ""}`,
                            "aria-selected": ye,
                            children: I.columns.map((De, fe) => {
                              const Ne = se[De.key];
                              let Ae;
                              De.tableRenderer ? Ae = De.tableRenderer(se) : De.render ? Ae = De.render(se) : Ae = Ne;
                              const Oe = C.focusArea === "cells" && C.focusedRowIndex === _e && C.focusedColumnIndex === fe, Be = () => {
                                if (De.customRenderer) {
                                  const tt = De.customRenderer(
                                    Ne,
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
                                return typeof Ne == "boolean" && Ae === Ne ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  O(Ne),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Ne ? "Yes" : "No" })
                                ] }) : at.isValidElement(Ae) || typeof Ae != "object" ? Ae ?? "" : Ae;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Oe ? "data-cell--focused" : ""}`,
                                  tabIndex: Oe ? 0 : -1,
                                  onClick: () => {
                                    const It = _.globalSelectedRowData && q(
                                      _.globalSelectedRowData,
                                      se
                                    ) ? null : se;
                                    A({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: It
                                    });
                                  },
                                  onKeyDown: (tt) => K(tt, _e, fe),
                                  children: Be()
                                },
                                De.key
                              );
                            })
                          },
                          _e
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            I.id
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
const yx = ({
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
  const f = Te(() => rf(e), [e]), h = le((F) => {
    if (l) return;
    const T = e.map(
      (v) => v.id === F ? { ...v, direction: v.direction === "asc" ? "desc" : "asc" } : v
    );
    t(T);
  }, [e, t, l]), m = le((F) => {
    if (l) return;
    const T = e.findIndex((N) => N.id === F);
    if (T <= 0) return;
    const v = [...e];
    [v[T], v[T - 1]] = [v[T - 1], v[T]], t(Jr(v));
  }, [e, t, l]), g = le((F) => {
    if (l) return;
    const T = e.findIndex((N) => N.id === F);
    if (T >= e.length - 1 || T === -1) return;
    const v = [...e];
    [v[T], v[T + 1]] = [v[T + 1], v[T]], t(Jr(v));
  }, [e, t, l]), k = le((F) => {
    if (l) return;
    const T = e.filter((v) => v.id !== F);
    t(Jr(T));
  }, [e, t, l]), p = le(() => {
    l || t([]);
  }, [t, l]), u = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const F = f.map((T, v) => {
      const N = T.direction === "asc" ? "ascending" : "descending";
      return `${v + 1}. ${T.label} (${N})`;
    });
    if (F.length === 1)
      return `Sorted by: ${F[0]}`;
    if (F.length === 2)
      return `Sorted by: ${F.join(" and ")}`;
    {
      const T = F.pop();
      return `Sorted by: ${F.join(", ")}, and ${T}`;
    }
  }, P = Te(() => {
    const F = ["sort-description"];
    return i && F.push("sort-help"), c && F.push(c), F.join(" ");
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
        "aria-describedby": P,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          f.map((F) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                et,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => k(F.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: F.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: F.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => h(F.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${F.label}. Currently ${F.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: F.direction === "asc" ? Pn.asc : Pn.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(F.id),
                          disabled: l || !sf(F.id, e),
                          "aria-label": `Move ${F.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g(F.id),
                          disabled: l || !of(F.id, e),
                          "aria-label": `Move ${F.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            F.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
      Qe,
      {
        variant: "secondary",
        onClick: p,
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
}, ss = (e, t) => t.map((n) => ({
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
}), vx = (e) => {
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
function eo(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: f = "adaptive-card"
  } = n, h = t.find((T) => T.key === a), m = h?.cardRenderer ? h.cardRenderer(e) : h?.render ? h.render(e) : e[a || "name"] || "Untitled", g = () => o.filter((v) => !i.includes(v) && e[v]).slice(0, 3).map((v) => {
    const N = t.find((D) => D.key === v), y = e[v], $ = c[v] ? c[v](y, e) : N?.cardRenderer ? N.cardRenderer(e) : N?.render ? N.render(e) : y;
    return `${N?.label || v}: ${$}`;
  }).join(" • "), k = () => s.length === 0 ? null : s.filter((T) => e[T.fieldKey] !== void 0).map((T) => {
    const v = e[T.fieldKey], N = T.render ? T.render(v, e) : v;
    return `<span class="nhsuk-tag ${pf(T, v)}">${N}</span>`;
  }).join(""), p = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", u = k(), P = g(), F = u ? `${P}${u ? `<div class="adaptive-card__badges">${u}</div>` : ""}` : P;
  return {
    variant: p(),
    heading: String(m),
    descriptionHtml: F,
    className: `adaptive-card ${f}`,
    "aria-label": `Record for ${m}`
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
}, ti = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, c = e.bed_name, f = e.ews_score, h = e.speciality, m = e.consultant;
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
            et,
            {
              color: xf(si(f)),
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
            /* @__PURE__ */ r.jsx("dd", { children: m })
          ] })
        ] }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ r.jsx(
            Qe,
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
            Qe,
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
            Qe,
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
}, ni = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        et,
        {
          color: bf(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
        et,
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
      Qe,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      Qe,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), ri = ({
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
        et,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
        et,
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
      Qe,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      Qe,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), ai = ({
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
            et,
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
            Qe,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (m) => {
                m.stopPropagation(), n?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ r.jsx(
            Qe,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (m) => {
                m.stopPropagation(), n?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function si(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function gf(e) {
  return si(e);
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
], oi = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", vf = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, wf = (e) => oi(e) === "high" || e.status === "urgent" ? "primary" : "default", _f = {
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
  getPriority: oi,
  getStatus: vf,
  getVariant: wf,
  fieldRenderers: _f,
  classPrefix: "adaptive-card--healthcare"
}, kf = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", o = n.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ r.jsx(
      ti,
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
      ni,
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
      ri,
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
      ai,
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
}, to = {
  name: "healthcare",
  defaultCardConfig: Sf,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: kf,
  fieldTypes: Cf
};
function no(e) {
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
function ro(e) {
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
  const [n, a] = $e("cards");
  return Pe(() => {
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
  return o.cardTemplate && o.cardTemplate(e, t, o), eo(e, t, o);
}
const wx = ({
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
  onTabChange: m,
  ariaLabel: g = "Data grid",
  ariaDescription: k,
  orientation: p = "horizontal",
  id: u,
  disabled: P = !1,
  className: F,
  ...T
}) => {
  const v = Nf(e, t), N = h !== void 0, y = h ?? 0, $ = Te(() => {
    if (c.some(
      (V) => V.data && V.data.length > 0 && ro(V.data)
    )) {
      const V = no(n);
      return {
        ...to.defaultCardConfig,
        ...V
      };
    } else
      return no(n);
  }, [n, c]), j = Te(() => c.some(
    (V) => V.data && V.data.length > 0 && ro(V.data)
  ) ? to : void 0, [c]), D = Te(() => ({
    selectedIndex: y,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [y, c.length]), [S, x] = ko(jf, D), b = Fe([]), H = Fe([]), B = Fe([]), L = Fe(null), [C, w] = $e({
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
  }), R = le((G) => {
    if (!G.current)
      return { columns: 1, rows: 0 };
    const V = G.current, ne = V.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (ne.length === 0)
      return { columns: 1, rows: 0 };
    const te = V.offsetWidth, Y = ne[0].offsetWidth, re = Math.floor(te / Y) || 1, oe = Math.ceil(ne.length / re);
    return { columns: re, rows: oe };
  }, []), _ = le((G, V) => ({
    row: Math.floor(G / V),
    col: G % V
  }), []), A = le((G, V, ne) => G * ne + V, []), q = le((G, V, ne, te) => {
    const { row: I, col: Y } = _(G, te);
    let re = I, oe = Y;
    switch (V) {
      case "up":
        re = Math.max(0, I - 1);
        break;
      case "down":
        re = Math.min(Math.floor((ne - 1) / te), I + 1);
        break;
      case "left":
        oe = Math.max(0, Y - 1);
        break;
      case "right":
        oe = Math.min(te - 1, Y + 1);
        break;
    }
    const J = A(re, oe, te);
    return Math.min(J, ne - 1);
  }, [_, A]);
  Pe(() => {
    C.isCardNavigationActive && C.focusedCardElementIndex >= 0 && C.cardElements.length > 0 && setTimeout(() => {
      const G = C.cardElements[C.focusedCardElementIndex];
      G && (G.element.focus(), G.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [C.isCardNavigationActive, C.focusedCardElementIndex, C.cardElements.length]), Pe(() => {
    const G = () => {
      if (v === "cards" && L.current) {
        const { columns: te, rows: I } = R(L);
        w((Y) => ({
          ...Y,
          gridColumns: te,
          gridRows: I
        }));
      }
    }, V = setTimeout(G, 200), ne = () => {
      setTimeout(G, 100);
    };
    return window.addEventListener("resize", ne), () => {
      clearTimeout(V), window.removeEventListener("resize", ne);
    };
  }, [v, c, R]), Pe(() => {
    const G = S.tabLoadingStates.length, V = c.length;
    G !== V && x({ type: "ADJUST_ARRAYS", payload: { newLength: V } });
  }, [c.length, S.tabLoadingStates.length]), Pe(() => {
    N && h !== S.selectedIndex && x({ type: "SET_SELECTED_INDEX", payload: h });
  }, [N, h, S.selectedIndex]);
  const M = le((G) => {
    G >= 0 && G < c.length && !c[G].disabled && (x({ type: "SET_SELECTED_INDEX", payload: G }), m?.(G));
  }, [c, m]), z = le((G) => {
    console.log("Card selected:", G), x({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: G
    });
  }, []), E = le((G) => {
    const V = H.current[G];
    V && (V.focus(), V.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), X = le((G) => {
    const V = H.current[G];
    if (!V) return [];
    const ne = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), te = V.querySelectorAll(ne);
    return Array.from(te).map((I, Y) => ({
      id: I.id || `card-${G}-element-${Y}`,
      element: I,
      label: I.getAttribute("aria-label") || I.textContent?.trim() || I.getAttribute("title") || `Element ${Y + 1}`,
      type: I.tagName.toLowerCase() === "button" ? "button" : I.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(I.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), ee = Fe(null), Q = le((G) => {
    const V = ee.current;
    if (!V) return;
    const ne = document.createElement("div");
    ne.setAttribute("aria-live", "polite"), ne.setAttribute("aria-atomic", "true"), ne.className = "sr-only", ne.textContent = G, V.appendChild(ne), setTimeout(() => {
      V.contains(ne) && V.removeChild(ne);
    }, 1e3);
  }, []), W = le((G) => {
    const V = G.filter((te) => te.sortable !== !1), ne = [
      { value: "", label: "Sort by..." }
    ];
    return V.forEach((te) => {
      const I = te.label || te.key;
      te.key === "name" ? ne.push(
        { value: `${te.key}-asc`, label: `${I} (A-Z)` },
        { value: `${te.key}-desc`, label: `${I} (Z-A)` }
      ) : te.key === "ews_score" || te.key.includes("score") ? ne.push(
        { value: `${te.key}-desc`, label: `${I} (High-Low)` },
        { value: `${te.key}-asc`, label: `${I} (Low-High)` }
      ) : te.key === "age" || te.key.includes("date") || te.key.includes("time") ? ne.push(
        { value: `${te.key}-desc`, label: `${I} (Oldest-Youngest)` },
        { value: `${te.key}-asc`, label: `${I} (Youngest-Oldest)` }
      ) : ne.push(
        { value: `${te.key}-asc`, label: `${I} (A-Z)` },
        { value: `${te.key}-desc`, label: `${I} (Z-A)` }
      );
    }), ne;
  }, []), O = le((G, V) => V ? [...G].sort((ne, te) => {
    const I = ne[V.key], Y = te[V.key];
    if (I == null && Y == null) return 0;
    if (I == null) return 1;
    if (Y == null) return -1;
    const re = Number(I), oe = Number(Y);
    if (!isNaN(re) && !isNaN(oe))
      return V.direction === "asc" ? re - oe : oe - re;
    const J = String(I).toLowerCase(), se = String(Y).toLowerCase(), _e = J.localeCompare(se);
    return V.direction === "asc" ? _e : -_e;
  }) : G, []), Z = le((G) => {
    if (!G) {
      w((J) => ({ ...J, cardSortConfig: null })), Q("Card sorting cleared");
      return;
    }
    const [V, ne] = G.split("-"), te = { key: V, direction: ne };
    w((J) => ({ ...J, cardSortConfig: te }));
    const re = c[S.selectedIndex]?.columns.find((J) => J.key === V)?.label || V;
    Q(`Cards sorted by ${re} in ${ne === "asc" ? "ascending" : "descending"} order`);
  }, [c, S.selectedIndex, Q]), ae = le((G) => {
    const te = c[S.selectedIndex]?.columns.find((Y) => Y.key === G.key)?.label || G.key, I = G.direction === "asc" ? "ascending" : "descending";
    return `${te} (${I})`;
  }, [c, S.selectedIndex]), K = le((G) => {
    const V = c[S.selectedIndex];
    if (o) {
      const ne = S.sortConfig;
      return !ne || ne.length === 0 ? G : [...G].sort((te, I) => {
        for (const { key: Y, direction: re } of ne) {
          let oe = te[Y], J = I[Y];
          const se = V?.columns.find((Ne) => Ne.key === Y);
          if (se?.cardRenderer ? (oe = se.cardRenderer(te), J = se.cardRenderer(I)) : se?.render && (oe = se.render(te), J = se.render(I)), oe == null && J == null) continue;
          if (oe == null) return re === "asc" ? -1 : 1;
          if (J == null) return re === "asc" ? 1 : -1;
          const _e = Number(oe), ye = Number(J);
          if (!isNaN(_e) && !isNaN(ye)) {
            const Ne = _e - ye;
            if (Ne !== 0) return re === "asc" ? Ne : -Ne;
            continue;
          }
          const je = String(oe).toLowerCase(), De = String(J).toLowerCase(), fe = je.localeCompare(De);
          if (fe !== 0) return re === "asc" ? fe : -fe;
        }
        return 0;
      });
    } else
      return O(G, C.cardSortConfig);
  }, [o, S.sortConfig, C.cardSortConfig, O, c, S.selectedIndex]), ue = le((G, V) => {
    const ne = X(G), te = ne[V];
    if (te) {
      te.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const I = `Focused on ${te.label}, ${te.type} ${V + 1} of ${ne.length} within card`;
      Q(I);
    }
  }, [X, Q]), de = le((G) => {
    b.current[G]?.focus();
  }, []), xe = le(() => {
    const G = B.current[0];
    if (!G) return [];
    const V = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), ne = G.querySelectorAll(V);
    return Array.from(ne);
  }, []), pe = le((G) => {
    if (G === 0) {
      const V = B.current[0], ne = V?.querySelector(".sort-controls-row");
      if (ne) {
        ne.setAttribute("tabindex", "-1"), ne.focus();
        const I = `Sort controls group with ${xe().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        Q(I);
      } else V && V.focus();
    } else {
      const V = xe(), ne = G - 1, te = V[ne];
      if (te) {
        te.focus();
        const I = te.tagName.toLowerCase() === "select", Y = te.tagName.toLowerCase() === "button", re = I ? "dropdown" : Y ? "button" : "control", oe = I ? ". Use Space key to open dropdown" : "", J = `${re} ${ne + 1} of ${V.length}${oe}`;
        Q(J);
      }
    }
  }, [xe, Q]), ge = le((G, V) => {
    const { key: ne } = G, te = c[S.selectedIndex], I = te?.data.length || 0;
    if (ne === "ArrowLeft" && G.shiftKey) {
      G.preventDefault(), G.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (ne === "ArrowRight" && G.shiftKey) {
      G.preventDefault(), G.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!C.isCardNavigationActive) {
      switch (ne) {
        case "ArrowUp":
          if (G.preventDefault(), V === 0)
            w((J) => ({ ...J, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), pe(0);
          else {
            const J = q(V, "up", I, C.gridColumns);
            J !== V && (w((se) => ({ ...se, focusedCardIndex: J })), E(J), Q(`Moved to card ${J + 1} of ${I}`));
          }
          break;
        case "ArrowDown":
          G.preventDefault();
          const Y = q(V, "down", I, C.gridColumns);
          Y !== V && (w((J) => ({ ...J, focusedCardIndex: Y })), E(Y), Q(`Moved to card ${Y + 1} of ${I}`));
          break;
        case "ArrowLeft":
          G.preventDefault();
          const re = q(V, "left", I, C.gridColumns);
          re !== V ? (w((J) => ({ ...J, focusedCardIndex: re })), E(re), Q(`Moved to card ${re + 1} of ${I}`)) : S.selectedIndex > 0 && (x({ type: "SET_SELECTED_INDEX", payload: S.selectedIndex - 1 }), w((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => de(S.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          G.preventDefault();
          const oe = q(V, "right", I, C.gridColumns);
          oe !== V ? (w((J) => ({ ...J, focusedCardIndex: oe })), E(oe), Q(`Moved to card ${oe + 1} of ${I}`)) : S.selectedIndex < c.length - 1 && (x({ type: "SET_SELECTED_INDEX", payload: S.selectedIndex + 1 }), w((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => de(S.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (te?.data[V]) {
            G.preventDefault(), w((se) => ({
              ...se,
              selectedCardIndex: V
            }));
            const J = X(V);
            J.length > 0 ? (w((se) => ({
              ...se,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: J,
              selectedCardIndex: V
              // Ensure selection is maintained
            })), Q(`Card ${V + 1} selected and navigation activated. ${J.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : Q(`Card ${V + 1} selected.`);
          }
          break;
        case " ":
          if (te?.data[V]) {
            G.preventDefault(), w((se) => ({
              ...se,
              selectedCardIndex: se.selectedCardIndex === V ? -1 : V
            }));
            const J = C.selectedCardIndex === V;
            Q(`Card ${V + 1} ${J ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (ne) {
      case "ArrowUp":
      case "ArrowLeft":
        G.preventDefault();
        const Y = Math.max(0, C.focusedCardElementIndex - 1);
        w((se) => ({ ...se, focusedCardElementIndex: Y })), ue(V, Y);
        break;
      case "ArrowDown":
      case "ArrowRight":
        G.preventDefault();
        const re = Math.min(C.cardElements.length - 1, C.focusedCardElementIndex + 1);
        w((se) => ({ ...se, focusedCardElementIndex: re })), ue(V, re);
        break;
      case "Enter":
        G.preventDefault();
        const oe = C.cardElements[C.focusedCardElementIndex];
        oe && (oe.element.click(), Q(`Activated ${oe.label}`));
        break;
      case " ":
        G.preventDefault();
        const J = C.cardElements[C.focusedCardElementIndex];
        if (J) {
          const se = new MouseEvent("dblclick", { bubbles: !0 });
          J.element.dispatchEvent(se), Q(`Double-clicked ${J.label}`);
        }
        break;
      case "Escape":
        G.preventDefault(), w((se) => ({
          ...se,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => E(V), 0), Q("Exited card navigation, returned to card level");
        break;
      case "Home":
        G.preventDefault(), C.cardElements.length > 0 && (w((se) => ({ ...se, focusedCardElementIndex: 0 })), ue(V, 0));
        break;
      case "End":
        if (G.preventDefault(), C.cardElements.length > 0) {
          const se = C.cardElements.length - 1;
          w((_e) => ({ ..._e, focusedCardElementIndex: se })), ue(V, se);
        }
        break;
    }
  }, [C, S.selectedIndex, c, z, E, de, w, X, ue, Q]), Me = le((G) => {
    const V = b.current[G], ne = V?.parentElement;
    if (!V || !ne) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const te = V.getBoundingClientRect(), I = ne.getBoundingClientRect();
    te.left >= I.left && te.right <= I.right || (console.log("Tab not visible, scrolling into view (mobile)"), V.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Ce = le((G, V) => {
    if (v !== "cards")
      return;
    const { key: ne } = G;
    switch (ne) {
      case "ArrowLeft":
        G.preventDefault();
        const te = V > 0 ? V - 1 : c.length - 1;
        M(te), w((oe) => ({ ...oe, focusedTabIndex: te })), b.current[te]?.focus(), Me(te);
        break;
      case "ArrowRight":
        G.preventDefault();
        const I = V < c.length - 1 ? V + 1 : 0;
        M(I), w((oe) => ({ ...oe, focusedTabIndex: I })), b.current[I]?.focus(), Me(I);
        break;
      case "ArrowDown":
        G.preventDefault();
        const Y = c[S.selectedIndex];
        Y && Y.columns && Y.columns.length > 0 ? (w((oe) => ({
          ...oe,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), pe(0)) : (w((oe) => ({
          ...oe,
          focusArea: "cards",
          focusedCardIndex: 0
        })), E(0));
        break;
      case "Home":
        G.preventDefault(), M(0), w((oe) => ({ ...oe, focusedTabIndex: 0 })), b.current[0]?.focus(), Me(0);
        break;
      case "End":
        G.preventDefault();
        const re = c.length - 1;
        M(re), w((oe) => ({ ...oe, focusedTabIndex: re })), b.current[re]?.focus(), Me(re);
        break;
      case "Enter":
      case " ":
        G.preventDefault(), M(V);
        break;
    }
  }, [c.length, M, v, E, w, Me]), Se = le((G, V) => {
    if (v !== "cards")
      return;
    const { key: ne } = G, te = c[S.selectedIndex];
    if (V === 0 && !C.isSortControlsActive) {
      switch (ne) {
        case "ArrowUp":
          G.preventDefault(), w((Y) => ({
            ...Y,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), de(S.selectedIndex);
          break;
        case "ArrowDown":
          G.preventDefault(), te?.data && te.data.length > 0 && (w((Y) => ({
            ...Y,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), E(0));
          break;
        case "Enter":
        case " ":
          G.preventDefault();
          const I = xe();
          if (I.length > 0) {
            w((re) => ({
              ...re,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), pe(1);
            const Y = `Entered sort controls navigation mode. ${I.length} controls available. Use arrow keys to navigate between controls.`;
            Q(Y);
          }
          break;
        case "Escape":
          G.preventDefault(), w((Y) => ({
            ...Y,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), de(S.selectedIndex);
          break;
      }
      return;
    }
    if (C.isSortControlsActive) {
      const Y = xe().length;
      switch (ne) {
        case "ArrowLeft":
          G.preventDefault();
          const re = C.focusedSortControlIndex > 1 ? C.focusedSortControlIndex - 1 : Y;
          w((J) => ({ ...J, focusedSortControlIndex: re })), pe(re);
          break;
        case "ArrowRight":
          G.preventDefault();
          const oe = C.focusedSortControlIndex < Y ? C.focusedSortControlIndex + 1 : 1;
          w((J) => ({ ...J, focusedSortControlIndex: oe })), pe(oe);
          break;
        case "ArrowDown":
          if (G.preventDefault(), C.isSortControlsActive) {
            const J = C.focusedSortControlIndex < Y ? C.focusedSortControlIndex + 1 : 1;
            w((se) => ({ ...se, focusedSortControlIndex: J })), pe(J);
          } else
            te?.data && te.data.length > 0 && (w((J) => ({
              ...J,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), E(0));
          break;
        case "ArrowUp":
          G.preventDefault(), w((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), pe(0);
          break;
        case "Escape":
          G.preventDefault(), w((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), pe(0);
          break;
      }
    }
  }, [v, c, S.selectedIndex, C.isSortControlsActive, C.focusedSortControlIndex, pe, de, E, w, Q]);
  if (v === "cards") {
    const G = c[S.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${F || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": g,
            "aria-describedby": `${k || ""} ${u ? `${u}-navigation-help` : ""}`.trim(),
            "aria-orientation": p,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((V, ne) => {
              const te = ne === S.selectedIndex, I = V.disabled || P;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${V.id}`,
                  "aria-controls": `panel-${V.id}`,
                  "aria-selected": te,
                  "aria-disabled": I,
                  tabIndex: te ? 0 : -1,
                  ref: (Y) => {
                    b.current[ne] = Y;
                  },
                  onClick: () => M(ne),
                  onKeyDown: (Y) => Ce(Y, ne),
                  disabled: I,
                  className: [
                    "aria-tabs-datagrid__tab",
                    te ? "aria-tabs-datagrid__tab--selected" : "",
                    I ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: V.label }),
                    S.tabLoadingStates[ne] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    S.tabErrors[ne] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                V.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      G && G.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          ei,
          {
            sortConfig: S.sortConfig || [],
            columns: G.columns.map((V) => ({ key: V.key, label: V.label })),
            onSortChange: (V) => {
              x({ type: "SET_SORT", payload: V });
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
            tabIndex: C.focusArea === "sort-controls" ? 0 : -1,
            ref: (V) => {
              B.current[0] = V;
            },
            onKeyDown: (V) => Se(V, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${G.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  zn,
                  {
                    id: `card-sort-${G.id}`,
                    name: `card-sort-${G.id}`,
                    value: C.cardSortConfig ? `${C.cardSortConfig.key}-${C.cardSortConfig.direction}` : "",
                    onChange: (V) => Z(V.target.value),
                    className: "sort-select",
                    children: W(G.columns).map((V) => /* @__PURE__ */ r.jsx("option", { value: V.value, children: V.label }, V.value))
                  }
                )
              ] }),
              C.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  ae(C.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  Qe,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => Z(""),
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
          ref: L,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${G?.label || "Data"} cards in ${C.gridRows} rows and ${C.gridColumns} columns`,
          "aria-rowcount": C.gridRows,
          "aria-colcount": C.gridColumns,
          id: `panel-${G?.id}`,
          "aria-labelledby": `tab-${G?.id}`,
          children: K(G?.data || []).map((V, ne) => {
            const te = C.selectedCardIndex === ne, I = C.focusedCardIndex === ne && C.focusArea === "cards", Y = C.focusedCardIndex === ne && C.focusArea === "card" && C.isCardNavigationActive, re = ne === 0 && C.focusArea !== "cards", oe = I || re, J = _(ne, C.gridColumns);
            if (n.cardTemplate) {
              const ye = n.cardTemplate(V, G.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": J.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (je) => {
                        H.current[ne] = je;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        te ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        I ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        Y ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": J.col + 1,
                      "aria-selected": te,
                      "aria-expanded": Y,
                      "aria-description": Y ? `Card navigation active. ${C.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: oe ? 0 : -1,
                      onClick: () => {
                        w((je) => ({
                          ...je,
                          selectedCardIndex: je.selectedCardIndex === ne ? -1 : ne
                        })), z(V);
                      },
                      onKeyDown: (je) => ge(je, ne),
                      onFocus: () => {
                        w((je) => je.focusedCardIndex !== ne || je.focusArea !== "cards" ? {
                          ...je,
                          focusedCardIndex: ne,
                          focusArea: "cards"
                        } : je);
                      },
                      children: ye
                    }
                  )
                },
                `card-${ne}`
              );
            }
            const se = $f(V, G.columns, $, j), _e = [
              se.className || "",
              te ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              I ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              Y ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": J.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      te ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      I ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      Y ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": J.col + 1,
                    "aria-selected": te,
                    "aria-expanded": Y,
                    onKeyDown: (ye) => {
                      ye.key === "Enter" && (ye.preventDefault(), w((je) => ({
                        ...je,
                        selectedCardIndex: ne
                      }))), ge(ye, ne);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      Qo,
                      {
                        ...se,
                        ref: (ye) => {
                          H.current[ne] = ye;
                        },
                        className: _e,
                        "aria-label": `${se["aria-label"] || se.heading}. ${Y ? `Card navigation active with ${C.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: oe ? 0 : -1,
                        onClick: () => {
                          w((ye) => ({
                            ...ye,
                            selectedCardIndex: ye.selectedCardIndex === ne ? -1 : ne
                          })), z(V);
                        },
                        onKeyDown: (ye) => ge(ye, ne),
                        onFocus: () => {
                          C.isCardNavigationActive || w((ye) => ye.focusedCardIndex !== ne || ye.focusArea !== "cards" ? {
                            ...ye,
                            focusedCardIndex: ne,
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
              `card-${ne}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: ee,
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
  return v === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${F || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      ma,
      {
        tabPanels: c,
        dataConfig: f,
        ariaLabel: g,
        ariaDescription: k,
        orientation: p,
        id: u,
        disabled: P,
        selectedIndex: h,
        onTabChange: m,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...T
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${F || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      ma,
      {
        tabPanels: c,
        dataConfig: f,
        ariaLabel: g,
        ariaDescription: k,
        orientation: p,
        id: u,
        disabled: P,
        selectedIndex: h,
        onTabChange: m,
        actions: l,
        forceActionsAbove: d,
        ...T
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, ii = (e) => {
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
  booleanRenderer: (e) => ii(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, If = (e) => ss(e, [
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
]), Mf = {
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
  booleanRenderer: (e) => ii(e),
  getDataId: (e) => `financial-${e.id}`
}, Lf = (e) => ss(e, [
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
    createTabs: If
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Mf,
    createTabs: Lf
  }
}, ao = (e, t) => {
  const n = Ff[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, li = [
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
], so = [
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
], oo = [
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
], io = [
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
    data: li,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      ti,
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
      ni,
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
      ri,
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
      ai,
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
  const [e, t] = $e("healthcare"), n = Te(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: hf,
      tabPanels: Rf(),
      data: li
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...ao("ecommerce", so),
      data: so
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...ao("financial", oo),
      data: oo
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Pf,
      tabPanels: ss(io, [
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
      data: io
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
        Qe,
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
}, _x = Hf, ci = (e) => /* @__PURE__ */ r.jsx(No, { ...e }), Sx = ({
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
  organisation: m,
  logo: g,
  className: k,
  ...p
}) => {
  const u = {
    service: d,
    navigation: c,
    search: f,
    account: h,
    organisation: m,
    logo: g,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Jo, { ...s }),
    /* @__PURE__ */ r.jsx(Mo, { ...u }),
    /* @__PURE__ */ r.jsx(ci, { className: k, ...p, children: /* @__PURE__ */ r.jsx(To, { size: o, children: /* @__PURE__ */ r.jsx(Gt, { children: /* @__PURE__ */ r.jsxs(vn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Tt, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(Lo, { ...l })
  ] });
}, kx = ({
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
  className: m,
  ...g
}) => {
  const k = {
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
    /* @__PURE__ */ r.jsx(Jo, { ...s }),
    /* @__PURE__ */ r.jsx(Mo, { ...k }),
    /* @__PURE__ */ r.jsxs(ci, { className: m, ...g, children: [
      d && /* @__PURE__ */ r.jsx(la, { ...d }),
      /* @__PURE__ */ r.jsx(To, { size: o, children: /* @__PURE__ */ r.jsx(Gt, { children: /* @__PURE__ */ r.jsxs(vn, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(Tt, { size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(Lo, { ...l })
  ] });
}, di = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = he("nhsuk-back-link", a), d = he("nhsuk-back-link__link"), c = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
di.displayName = "ForwardLink";
const tn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function lo() {
  return typeof window > "u" ? tn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function ui() {
  const [e, t] = U.useState(lo());
  U.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(lo());
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
function Cx(e) {
  const { width: t, values: n } = ui();
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
    isLoading: m = !1,
    emptyState: g,
    a11y: k,
    className: p,
    getId: u = (ie) => ie.id,
    orientation: P = "vertical",
    autoEnableThirdColumn: F = !0,
    onDrillChange: T,
    navigationInstructions: v = "Use arrow keys to navigate, Enter to open.",
    initialFocus: N = "first",
    skipFocusOnSelect: y = !1,
    skipAnnouncements: $ = !1,
    onFocusChange: j,
    syncUrl: D = !1,
    urlParamSelected: S = "nsv",
    urlParamDrill: x = "nsvDrill",
    urlSyncDebounceMs: b = 0,
    lazySecondary: H = !1,
    navFooter: B,
    collapsibleNav: L = !1,
    navInitiallyCollapsed: C = !1,
    onNavCollapseChange: w,
    collapseToggleLabelShow: R = "Show navigation",
    collapseToggleLabelHide: _ = "Hide navigation",
    collapseToggleIconShow: A,
    collapseToggleIconHide: q,
    persistNavCollapsed: M,
    navCollapsedStorageKey: z = "nsvCollapsed",
    navCollapsedUrlParam: E = "nsvCollapsed",
    autoContentHeader: X,
    contentHeaderLevel: ee = 2,
    renderContentHeader: Q,
    contentSubheader: W,
    secondarySubheader: O
  } = e, { up: Z } = ui(), [ae, K] = U.useState(!1);
  U.useEffect(() => {
    K(!0);
  }, []);
  const ue = ae && Z("medium"), de = ae && Z("xlarge");
  let xe;
  d ? xe = d : ue ? xe = "two-column" : xe = "list", !d && F && l && de && (xe = "three-column");
  const pe = zf({
    enabled: D,
    paramSelected: S,
    paramDrill: x
  }), [ge, Me] = U.useState(
    () => pe.selectedId !== void 0 ? pe.selectedId : a
  ), Ce = n !== void 0 ? n : ge, Se = t.find((ie) => u(ie) === Ce), [G, V] = U.useState(
    void 0
  );
  U.useEffect(() => {
    if (Ce === void 0) return;
    V(Ce);
    const ie = setTimeout(() => V(void 0), 220);
    return () => clearTimeout(ie);
  }, [Ce]);
  const ne = U.useRef(null), te = U.useRef(null), I = U.useRef(null), Y = U.useRef(null), [re, oe] = U.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [J, se] = U.useState(() => "nav"), [_e, ye] = U.useState(0), je = () => [
    Y.current,
    te.current,
    I.current
  ].filter(Boolean), De = (ie) => {
    const be = je(), ce = Math.max(0, Math.min(ie, be.length - 1));
    be[ce]?.focus(), ye(ce);
  }, fe = U.useCallback(
    (ie) => ie ? Array.from(ie.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (ce) => !ce.hasAttribute("disabled") && ce.tabIndex !== -1
    ) : [],
    []
  ), Ne = U.useCallback(
    (ie) => {
      const be = fe(te.current);
      if (!be.length) {
        te.current?.focus();
        return;
      }
      const ce = Math.max(0, Math.min(ie, be.length - 1)), ve = be[ce];
      ve.focus(), setTimeout(() => {
        document.activeElement !== ve && (ve.focus(), setTimeout(() => {
          document.activeElement !== ve && ve.click();
        }, 10));
      }, 10), oe((Ee) => ({ ...Ee, contentIndex: ce }));
      const ze = (Ee) => {
        Ee.key === "Escape" && (Ee.preventDefault(), Ee.stopPropagation(), te.current?.focus(), ve.removeEventListener("keydown", ze));
      };
      be.forEach((Ee) => {
        const Re = Ee._escapeHandler;
        Re && Ee.removeEventListener("keydown", Re);
      }), ve._escapeHandler = ze, ve.addEventListener("keydown", ze);
    },
    [fe]
  ), Ae = U.useCallback(
    (ie) => {
      const be = fe(I.current);
      if (!be.length) {
        I.current?.focus();
        return;
      }
      const ce = Math.max(0, Math.min(ie, be.length - 1)), ve = be[ce];
      ve.focus(), setTimeout(() => {
        document.activeElement !== ve && (ve.focus(), setTimeout(() => {
          document.activeElement !== ve && ve.click();
        }, 10));
      }, 10), oe((Ee) => ({ ...Ee, secondaryIndex: ce }));
      const ze = (Ee) => {
        Ee.key === "Escape" && (Ee.preventDefault(), Ee.stopPropagation(), I.current?.focus(), ve.removeEventListener("keydown", ze));
      };
      be.forEach((Ee) => {
        const Re = Ee._escapeHandler;
        Re && Ee.removeEventListener("keydown", Re);
      }), ve._escapeHandler = ze, ve.addEventListener("keydown", ze);
    },
    [fe]
  ), Oe = (ie) => {
    if (ie.defaultPrevented) return;
    const be = ie.key, ce = ie.target, ve = !!Ze.current && Ze.current.contains(ce), ze = !!te.current && te.current.contains(ce), Ee = !!I.current && I.current.contains(ce), Re = !!I.current, Jt = ce === Y.current || ce === te.current || ce === I.current, Pt = Be && (xe === "list" || xe === "cards"), Ln = ze && !!ce.closest(".nhs-navigation-split-view__header");
    if (J === "containers" && Jt) {
      if (be === "ArrowRight") {
        ie.preventDefault();
        const ke = je(), He = Math.min(ke.length - 1, _e + 1);
        De(He);
        return;
      }
      if (be === "ArrowLeft") {
        ie.preventDefault();
        const ke = Math.max(0, _e - 1);
        De(ke);
        return;
      }
      if (be === "Home") {
        ie.preventDefault(), De(0);
        return;
      }
      if (be === "End") {
        ie.preventDefault(), De(je().length - 1);
        return;
      }
      if (be === "Enter" || be === " ") {
        if (ie.preventDefault(), ce === Y.current) {
          if (se("nav"), Ze.current) {
            const ke = Array.from(
              Ze.current.querySelectorAll("[data-nav-item]")
            );
            (ke[We >= 0 ? We : 0] || ke[0])?.focus();
          }
        } else ce === te.current ? (se("content"), Ne(re.contentIndex)) : ce === I.current && (se("secondary"), Ae(re.secondaryIndex));
        return;
      }
      return;
    }
    if (be === "Escape") {
      if (J === "content" || J === "secondary") {
        if (ze || Ee) {
          if (ie.preventDefault(), se("nav"), Ze.current) {
            const He = Array.from(
              Ze.current.querySelectorAll("[data-nav-item]")
            )[We >= 0 ? We : 0];
            setTimeout(() => He?.focus(), 10);
          }
        } else if ((ce === te.current || ce === I.current) && (ie.preventDefault(), se("nav"), Ze.current)) {
          const He = Array.from(
            Ze.current.querySelectorAll("[data-nav-item]")
          )[We >= 0 ? We : 0];
          setTimeout(() => He?.focus(), 10);
        }
      }
      return;
    }
    if (be === "Enter" || be === " ") {
      if (ce.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (ce === te.current && J === "content") {
        ie.preventDefault(), ie.stopPropagation(), fe(te.current).length > 0 && setTimeout(() => {
          Ne(re.contentIndex);
        }, 50);
        return;
      }
      if (ce === I.current && J === "secondary") {
        ie.preventDefault(), ie.stopPropagation(), fe(
          I.current
        ).length > 0 && setTimeout(() => {
          Ae(re.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Pt && Ln && !Jt && (be === "ArrowRight" || be === "ArrowLeft")) {
      const ke = fe(te.current).filter(
        (He) => He.closest(".nhs-navigation-split-view__header")
      );
      if (ke.length > 1) {
        const He = ke.indexOf(ce);
        if (He >= 0) {
          const gs = (He + (be === "ArrowRight" ? 1 : -1) + ke.length) % ke.length;
          ie.preventDefault(), ke[gs].focus();
          return;
        }
      }
    }
    if (be === "ArrowRight") {
      if (ve || J === "nav") {
        ie.preventDefault(), se("content"), setTimeout(() => te.current?.focus(), 10);
        return;
      }
      if (ze || J === "content") {
        Re && (ie.preventDefault(), se("secondary"), setTimeout(() => I.current?.focus(), 10));
        return;
      }
    }
    if (be === "ArrowLeft") {
      if (Ee || J === "secondary") {
        ie.preventDefault(), se("content"), setTimeout(() => te.current?.focus(), 10);
        return;
      }
      if (ze || J === "content") {
        if (ie.preventDefault(), se("nav"), Ze.current) {
          const He = Array.from(
            Ze.current.querySelectorAll("[data-nav-item]")
          )[We >= 0 ? We : 0];
          setTimeout(() => He?.focus(), 10);
        }
        return;
      }
    }
    if (be === "Home" && !ve && (ie.preventDefault(), se("nav"), Ze.current)) {
      const ke = Array.from(
        Ze.current.querySelectorAll("[data-nav-item]")
      ), He = ke[We >= 0 ? We : 0] || ke[0];
      setTimeout(() => He?.focus(), 10);
    }
    if (be === "End") {
      const ke = Re ? I.current : te.current;
      ke && !ke.contains(ce) && (ie.preventDefault(), Re ? (se("secondary"), setTimeout(() => I.current?.focus(), 10)) : (se("content"), setTimeout(() => te.current?.focus(), 10)));
    }
    if (be === "ArrowDown" || be === "ArrowUp") {
      if (ce === te.current && be === "ArrowDown") {
        ie.preventDefault(), fe(te.current).length > 0 && Ne(0);
        return;
      }
      if (ce === I.current && be === "ArrowDown") {
        ie.preventDefault(), fe(
          I.current
        ).length > 0 && Ae(0);
        return;
      }
      if (ze) {
        const ke = fe(te.current);
        if (ke.length) {
          ie.preventDefault();
          const He = be === "ArrowDown" ? 1 : -1, ut = (re.contentIndex + He + ke.length) % ke.length;
          Ne(ut);
        }
      } else if (Ee) {
        const ke = fe(I.current);
        if (ke.length) {
          ie.preventDefault();
          const He = be === "ArrowDown" ? 1 : -1, ut = (re.secondaryIndex + He + ke.length) % ke.length;
          Ae(ut);
        }
      }
    }
  }, Be = !!Se && (xe === "list" || xe === "cards"), tt = U.useMemo(() => X === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : X === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : X === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: X.mobile !== void 0 ? X.mobile : !0,
    tablet: X.tablet || !1,
    desktop: X.desktop || !1
  }, [X]), It = ae && Z("medium") && !Z("xlarge"), pt = ae && Z("xlarge"), ct = !!l, Ue = xe === "three-column", [Ve, fn] = U.useState(!1);
  U.useEffect(() => {
    Ue && Ve && fn(!1);
  }, [Ue, Ve]), U.useEffect(() => {
    Ve && !Ue && (se("secondary"), ye(2), setTimeout(() => {
      I.current?.focus();
    }, 50));
  }, [Ve, Ue]), U.useEffect(() => {
    !Ve && !Ue && J === "secondary" && (se("content"), ye(1), setTimeout(() => {
      te.current?.focus();
    }, 50));
  }, [Ve, Ue, J]);
  const Fr = !!Se && (Be && tt.mobile || !Be && It && tt.tablet || !Be && pt && tt.desktop) || ct && !Ue, Tl = `h${ee}`, Ar = Se ? U.createElement(
    Tl,
    {
      style: {
        marginLeft: Be ? 32 : 0,
        marginRight: Be ? 32 : 0
      }
    },
    Se.label
  ) : null, ps = Be ? "mobile" : It ? "tablet" : "desktop", $l = ct && !Ue && !Ve, Br = Be && tt.mobile ? /* @__PURE__ */ r.jsx(
    la,
    {
      element: "button",
      text: f,
      style: { marginRight: 16 },
      onClick: () => Zt(void 0, void 0)
    }
  ) : void 0, Er = $l ? /* @__PURE__ */ r.jsx(
    di,
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
    if (!Fr || !Se) return null;
    if (Q)
      return Q({
        item: Se,
        detailActive: Be,
        context: ps,
        backLink: Br,
        defaultHeading: Ar
      });
    const ie = Se && W ? typeof W == "function" ? W(Se) : W : null;
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
                  ie && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: ie })
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
    Se,
    Q,
    Be,
    ps,
    Br,
    Pr,
    Ar,
    Er,
    W
  ]);
  U.useEffect(() => {
    if (!D) return;
    const ie = xe === "three-column";
    let be = !1;
    const ce = () => {
      be || (pe.selectedId !== Ce && pe.setSelectedId(Ce), pe.drilledIn !== ie && pe.setDrilledIn(ie));
    };
    if (b && b > 0) {
      const ve = setTimeout(ce, b);
      return () => {
        be = !0, clearTimeout(ve);
      };
    } else
      ce();
  }, [D, pe, Ce, xe, b]), U.useEffect(() => {
    if (!D) return;
    const ie = () => {
      const be = new URLSearchParams(window.location.search), ce = be.get(S);
      be.get(x), Me(ce === null ? void 0 : ce);
    };
    return window.addEventListener("popstate", ie), () => window.removeEventListener("popstate", ie);
  }, [
    D,
    S,
    x,
    d,
    l
  ]);
  const Mn = U.useRef(0), mt = U.useRef(
    null
  ), Zt = U.useCallback(
    (ie, be) => {
      ie !== Ce && (n === void 0 && Me(ie), o?.(ie, be));
    },
    [n, o, Ce]
  );
  U.useEffect(() => {
    if (!y && Be && te.current) {
      const ie = setTimeout(() => te.current?.focus(), 30);
      return () => clearTimeout(ie);
    }
  }, [Be, Ce, y]);
  const Ze = U.useRef(null), [We, hn] = U.useState(
    () => N === "first" ? 0 : -1
  );
  U.useEffect(() => {
    if (We < 0 || !Ze.current) return;
    const be = Array.from(
      Ze.current.querySelectorAll("[data-nav-item]")
    )[We];
    if (be) {
      document.activeElement !== be && be.focus(), Mn.current = We;
      const ce = t[We];
      j?.(
        ce ? u(ce) : void 0,
        ce,
        We
      );
    }
  }, [We, t, j, u]);
  const Il = (ie) => {
    const be = P === "vertical" ? "ArrowDown" : "ArrowRight", ce = P === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ie.key === "ArrowRight" && P === "vertical") {
      ie.preventDefault(), Ve ? (se("secondary"), setTimeout(() => {
        I.current?.focus();
      }, 10)) : (se("content"), setTimeout(() => {
        te.current?.focus();
      }, 10));
      return;
    }
    if (ie.key === be)
      ie.preventDefault(), hn((ve) => Math.min(t.length - 1, ve + 1));
    else if (ie.key === ce)
      ie.preventDefault(), hn((ve) => Math.max(0, ve - 1));
    else if (ie.key === "Home")
      ie.preventDefault(), hn(0);
    else if (ie.key === "End")
      ie.preventDefault(), hn(t.length - 1);
    else if (ie.key === "Enter" || ie.key === " ") {
      ie.preventDefault();
      const ve = t[We];
      ve && !ve.disabled && Zt(u(ve), ve);
    } else if (ie.key.length === 1 && /[a-z0-9]/i.test(ie.key)) {
      mt.current || (mt.current = { buffer: "", last: 0 });
      const ve = Date.now(), ze = 700, Ee = ie.key.toLowerCase();
      ve - mt.current.last > ze ? mt.current.buffer = Ee : mt.current.buffer += Ee, mt.current.last = ve;
      let Re = mt.current.buffer;
      const Jt = Re.split("").every((ut) => ut === Re[0]), Pt = t.map(
        (ut) => String(ut.label || "").toLowerCase()
      );
      let Ln = 0;
      We >= 0 && (Ln = (We + 1) % t.length);
      let ke;
      const He = (ut, gs) => {
        const xs = t.length;
        for (let zr = 0; zr < xs; zr++) {
          const Wr = (Ln + zr) % xs;
          if (!t[Wr].disabled && Pt[Wr].startsWith(ut))
            return Wr;
        }
      };
      Jt && Re.length > 1 ? ke = He(Re[0]) : (ke = He(Re), ke === void 0 && Re.length > 1 && (ke = He(Re[Re.length - 1]), ke !== void 0 && mt.current && (mt.current.buffer = Re[Re.length - 1]))), ke !== void 0 && hn(ke);
    }
  }, Ml = U.useMemo(() => {
    if (M && (M === "url" || M === "both") && typeof window < "u") {
      const be = new URLSearchParams(window.location.search).get(E);
      if (be === "1") return !0;
      if (be === "0") return !1;
    }
    if (M && (M === "localStorage" || M === "both") && typeof window < "u")
      try {
        const ie = window.localStorage.getItem(z);
        if (ie === "1") return !0;
        if (ie === "0") return !1;
      } catch {
      }
    return C;
  }, [
    M,
    C,
    z,
    E
  ]), [dt, Ll] = U.useState(Ml);
  U.useEffect(() => {
    w?.(dt);
  }, [dt, w]);
  const Fl = U.useCallback(() => {
    ue && L && Ll((ie) => !ie);
  }, [ue, L]);
  U.useEffect(() => {
    if (M && !(typeof window > "u")) {
      if (M === "localStorage" || M === "both")
        try {
          window.localStorage.setItem(
            z,
            dt ? "1" : "0"
          );
        } catch {
        }
      if (M === "url" || M === "both") {
        const ie = new URLSearchParams(window.location.search);
        ie.set(E, dt ? "1" : "0");
        const be = `${window.location.pathname}?${ie.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", be);
      }
    }
  }, [
    dt,
    M,
    z,
    E
  ]);
  const Al = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Be ? "nhs-navigation-split-view--detail-active" : "",
    xe === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    L && ue && dt ? "nhs-navigation-split-view--nav-collapsed" : "",
    p
  ].filter(Boolean).join(" "), Rr = U.useRef(null);
  U.useEffect(() => {
    if (!$ && Rr.current) {
      const ie = Se ? `Selected ${Se.label}` : "Selection cleared";
      Rr.current.textContent = ie;
    }
  }, [Se, $]), U.useEffect(() => {
    !Be && Ce == null && Ze.current && Ze.current.querySelectorAll("[data-nav-item]")[Mn.current]?.focus();
  }, [Be, Ce]);
  const Mt = xe === "three-column", [Hr, Bl] = U.useState(!1);
  U.useEffect(() => {
    Mt && !Hr && Bl(!0);
  }, [Mt, Hr]);
  const ms = U.useRef(Mt);
  U.useEffect(() => {
    ms.current !== Mt && (T?.(Mt), ms.current = Mt);
  }, [Mt, T]);
  const El = () => {
    if (xe === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": Ce ? String(Ce) : void 0,
          children: [
            t.map((ce) => {
              const ve = u(ce), ze = ve === Ce;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": ze,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(ve),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": ze || void 0,
                      "data-disabled": ce.disabled || void 0,
                      disabled: ce.disabled,
                      onClick: () => !ce.disabled && Zt(ve, ce),
                      children: [
                        ce.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ce.icon }),
                        /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ce.label }),
                        ce.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ce.description }),
                        s?.(ce),
                        ce.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: ce.badge })
                      ]
                    }
                  )
                },
                ve
              );
            }),
            t.length === 0 && !m && /* @__PURE__ */ r.jsx(
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
    const ie = "nsv-nav-instructions", be = U.useMemo(() => U.memo(
      ({
        item: ce,
        idx: ve,
        selected: ze,
        focused: Ee
      }) => {
        const Re = u(ce), Jt = ce.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Ee ? 0 : -1,
          onClick: () => {
            Mn.current = ve, Zt(Re, ce);
          },
          onKeyDown: (Pt) => {
            (Pt.key === "Enter" || Pt.key === " ") && (Pt.preventDefault(), Mn.current = ve, Zt(Re, ce));
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
            "data-disabled": ce.disabled || void 0,
            ...Jt,
            children: [
              ce.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ce.icon }),
              /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ce.label }),
                ce.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ce.description }),
                s?.(ce)
              ] }),
              ce.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: ce.badge })
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
          onKeyDown: Il,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": ie,
          "aria-activedescendant": Ce ? String(Ce) : void 0,
          children: [
            t.map((ce, ve) => /* @__PURE__ */ r.jsx(
              be,
              {
                item: ce,
                idx: ve,
                selected: u(ce) === Ce,
                focused: ve === We || We === -1 && ve === 0 && N === "first",
                "data-just-selected": u(ce) === G ? "true" : void 0
              },
              u(ce)
            )),
            t.length === 0 && !m && /* @__PURE__ */ r.jsx(
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
          id: ie,
          style: {
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)"
          },
          children: v
        }
      )
    ] });
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: ne,
      className: Al,
      "aria-label": k?.rootLabel,
      "data-layout": xe,
      onKeyDown: Oe,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Be || void 0,
            style: { transform: Be ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: Y,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": k?.navigationLabel || "Items",
                  "data-collapsed": dt || void 0,
                  tabIndex: 0,
                  children: [
                    L && ue && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Fl,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": dt ? R : _,
                        title: dt ? R : _,
                        children: dt ? A || /* @__PURE__ */ r.jsx(Of, {}) : q || /* @__PURE__ */ r.jsx(Wf, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: El() }),
                    B && /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: B
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: te,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": k?.contentLabel || "Content",
                  "data-has-selection": !!Se || void 0,
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
                        children: i(Se)
                      }
                    )
                  ]
                }
              ),
              xe === "three-column" && (!H || Hr) || Ve && !Ue ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: I,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": k?.secondaryContentLabel || "Secondary",
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
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: Se && typeof Se == "object" && "label" in Se ? Se.label : String(Se) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        Se && O && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof O == "function" ? O(Se) : O
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(Se) })
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
            children: Mt ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
Uf.displayName = "NavigationSplitView";
const co = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), Gf = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, d = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, f = Math.floor(e._startFraction) + 2, h = Math.max(1, Math.round(e._spanColumns)), m = n && e.childItems && e.childItems.length > 0, g = (p) => {
    m && (p.preventDefault(), a?.(e));
  }, k = m ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": o || !1,
    onClick: g,
    onKeyDown: (p) => {
      (p.key === "Enter" || p.key === " ") && g(p), p.key === "Escape" && o && g(p);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: he("nhsuk-product-roadmap__item", m && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: d, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": f,
      "aria-colspan": h,
      ...k,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          m && /* @__PURE__ */ r.jsx("span", { className: he("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
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
  const [f, h] = $e(() => /* @__PURE__ */ new Set()), [m, g] = $e(() => /* @__PURE__ */ new Set()), k = Fe(/* @__PURE__ */ new Set()), p = le((b) => f.has(b), [f]), u = le((b) => {
    h((H) => {
      const B = new Set(H);
      return B.has(b.id) ? (B.delete(b.id), g((L) => {
        const C = new Set(L);
        return C.add(b.id), C;
      }), setTimeout(() => g((L) => {
        const C = new Set(L);
        return C.delete(b.id), C;
      }), 240), l?.(b.id, !1)) : (B.add(b.id), l?.(b.id, !0)), B;
    });
  }, [l]);
  zl(() => {
    if (d !== "inline" || !i) return;
    const b = [];
    if (f.forEach((C) => {
      k.current.has(C) || b.push(C);
    }), k.current = new Set(f), !b.length) return;
    const H = typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches, B = b.map((C) => `.nhsuk-product-roadmap__inline-children[data-parent="${C}"] .nhsuk-product-roadmap__inline-child`).join(","), L = Array.from(document.querySelectorAll(B));
    if (L.length) {
      if (H) {
        L.forEach((C) => {
          C.style.opacity = "1", C.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((C) => {
        (C.gsap || C.default || C).to(L, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        L.forEach((C) => {
          C.style.opacity = "1", C.style.transform = "translateY(0)";
        });
      });
    }
  }, [f, d, i]);
  const P = le(() => {
    f.size && h(/* @__PURE__ */ new Set());
  }, [f]), F = he("nhsuk-product-roadmap", o), T = co(n, 120, 1200, 400), v = co(a, 1, 6, 2), N = Te(() => e.map((b) => /* @__PURE__ */ new Date(b + " 01")), [e]), y = Te(() => {
    if (N.length === 0) {
      const B = /* @__PURE__ */ new Date();
      return [B, B];
    }
    const b = new Date(N[0]), H = kn.offset(new Date(N[N.length - 1]), 1);
    return [b, H];
  }, [N]), $ = Te(() => as().domain(y).range([0, N.length * T]), [y, N.length, T]), j = le((b) => {
    if (b.startDate) {
      const _ = new Date(b.startDate), A = new Date(b.endDate ?? b.startDate);
      A < _ && A.setTime(_.getTime());
      const q = $(_), M = kn.offset(new Date(A), 1);
      let z = $(M);
      Number.isFinite(z) || (z = q + T);
      const E = Math.max(T * 0.25, z - q), X = q / T, ee = E / T;
      return { ...b, _pxLeft: q, _pxWidth: E, _startFraction: X, _spanColumns: ee };
    }
    const H = b.date ?? 1, B = b.dateOffset ?? 0, L = b.length ?? 1, C = b.partialLength ?? 1, w = H - 1 + B, R = L - 1 + C;
    return { ...b, _pxLeft: w * T, _pxWidth: R * T, _startFraction: w, _spanColumns: R };
  }, [$, T]), D = Te(() => t.map((b) => {
    const B = b.roadmapItems.map((C) => {
      const w = !C.childItems && C.children ? { ...C, childItems: C.children } : { ...C };
      return j(w);
    }).sort((C, w) => C._pxLeft !== w._pxLeft ? C._pxLeft - w._pxLeft : w._pxWidth - C._pxWidth), L = [];
    return B.forEach((C) => {
      const w = C._pxLeft, R = C._pxLeft + C._pxWidth;
      let _ = L.findIndex((A) => A <= w);
      _ === -1 && (_ = L.length, L.push(0)), L[_] = R, C.verticalPosition = _ + 1;
    }), { ...b, roadmapItems: B, _laneCount: L.length };
  }), [t, j]), S = Te(() => D.map((b) => b._laneCount || 1), [D]), x = Te(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: F,
      style: { "--column-width": `${T}px`, gridTemplateColumns: x },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": D.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((b, H) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": H + 2, children: b }, b + H))
        ] }),
        D.map((b, H) => {
          const B = H + 2, L = S[H];
          let C, w = 0, R = [];
          i && d === "inline" && (R = b.roadmapItems.filter((M) => p(M.id) && M.childItems && M.childItems.length).map((M) => ({ id: M.id, lane: M.verticalPosition || 1, count: M.childItems.length })).sort((M, z) => M.lane - z.lane), w = R.reduce((M, z) => M + z.count, 0));
          const _ = L + w;
          C = `calc((${_} * var(--roadmap-item-block-height)) + (max(0, ${_} - 1) * var(--roadmap-row-gap)))`;
          const A = {};
          let q = 0;
          return R.forEach((M) => {
            q += M.count, A[M.lane + 1] = q;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": B, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: b.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: C }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: b.roadmapItems.map((M) => {
              const z = (M.verticalPosition || 1) - 1, E = R.filter((W) => W.lane - 1 < z).reduce((W, O) => W + O.count, 0), X = z + E, ee = p(M.id), Q = m.has(M.id);
              return /* @__PURE__ */ r.jsxs(at.Fragment, { children: [
                /* @__PURE__ */ r.jsx(Gf, { item: M, maxLines: v, enableDrilldown: i, onExpand: u, isActive: ee, topLaneIndex: X, laneOffset: E }),
                i && d === "inline" && (ee || Q) && M.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": M.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${M.title} child tasks`, children: M.childItems.map((W, O) => {
                  const Z = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let ae = M._pxLeft, K = M._pxWidth;
                  if (W.startDate) {
                    const xe = new Date(W.startDate);
                    let pe = W.endDate ? new Date(W.endDate) : new Date(xe);
                    pe < xe && (pe = new Date(xe));
                    const ge = new Date(pe);
                    ge.setDate(ge.getDate() + 1);
                    const Me = $(xe);
                    let Ce = $(ge);
                    (!Number.isFinite(Ce) || Ce <= Me) && (Ce = Me + 6), ae = Me, K = Math.max(6, Ce - Me);
                  }
                  const de = X + 1 + O;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: he("nhsuk-product-roadmap__inline-child", W.status && `nhsuk-product-roadmap__inline-child--status-${W.status}`, !ee && Q && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${ae}px`, width: `${K}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${de})`, height: Z, opacity: ee ? 0 : void 0, transform: ee ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: W.title })
                      ]
                    },
                    W.id
                  );
                }) })
              ] }, M.id);
            }) }) })
          ] }, b.heading + H);
        }),
        i && d === "overlay" && f.size === 1 && (() => {
          const b = Array.from(f)[0], H = t.flatMap((B) => B.roadmapItems).find((B) => B.id === b);
          return !H || !H.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${H.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: H.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: P, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: H.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: H.childItems.map((B) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: B.title }),
                B.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: B.content })
              ] }, B.id)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: P, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Yf.displayName = "ProductRoadmap";
function fi(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = fi(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Qn() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = fi(e)) && (a && (a += " "), a += t);
  return a;
}
function qe(e) {
  return function() {
    return e;
  };
}
const xa = Math.PI, ba = 2 * xa, Ht = 1e-6, Vf = ba - Ht;
function hi(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function qf(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return hi;
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
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? hi : qf(t);
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
    let i = this._x1, l = this._y1, d = a - t, c = o - n, f = i - t, h = l - n, m = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (m > Ht) if (!(Math.abs(h * d - c * f) > Ht) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let g = a - i, k = o - l, p = d * d + c * c, u = g * g + k * k, P = Math.sqrt(p), F = Math.sqrt(m), T = s * Math.tan((xa - Math.acos((p + m - u) / (2 * P * F))) / 2), v = T / F, N = T / P;
      Math.abs(v - 1) > Ht && this._append`L${t + v * f},${n + v * h}`, this._append`A${s},${s},0,0,${+(h * g > f * k)},${this._x1 = t + N * d},${this._y1 = n + N * c}`;
    }
  }
  arc(t, n, a, o, s, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), d = a * Math.sin(o), c = t + l, f = n + d, h = 1 ^ i, m = i ? o - s : s - o;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > Ht || Math.abs(this._y1 - f) > Ht) && this._append`L${c},${f}`, a && (m < 0 && (m = m % ba + ba), m > Vf ? this._append`A${a},${a},0,1,${h},${t - l},${n - d}A${a},${a},0,1,${h},${this._x1 = c},${this._y1 = f}` : m > Ht && this._append`A${a},${a},0,${+(m >= xa)},${h},${this._x1 = t + a * Math.cos(s)},${this._y1 = n + a * Math.sin(s)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function pi(e) {
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
function mi(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function gi(e) {
  this._context = e;
}
gi.prototype = {
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
function xi(e) {
  return new gi(e);
}
function bi(e) {
  return e[0];
}
function yi(e) {
  return e[1];
}
function vi(e, t) {
  var n = qe(!0), a = null, o = xi, s = null, i = pi(l);
  e = typeof e == "function" ? e : e === void 0 ? bi : qe(e), t = typeof t == "function" ? t : t === void 0 ? yi : qe(t);
  function l(d) {
    var c, f = (d = mi(d)).length, h, m = !1, g;
    for (a == null && (s = o(g = i())), c = 0; c <= f; ++c)
      !(c < f && n(h = d[c], c, d)) === m && ((m = !m) ? s.lineStart() : s.lineEnd()), m && s.point(+e(h, c, d), +t(h, c, d));
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
  var a = null, o = qe(!0), s = null, i = xi, l = null, d = pi(c);
  e = typeof e == "function" ? e : e === void 0 ? bi : qe(+e), t = typeof t == "function" ? t : qe(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? yi : qe(+n);
  function c(h) {
    var m, g, k, p = (h = mi(h)).length, u, P = !1, F, T = new Array(p), v = new Array(p);
    for (s == null && (l = i(F = d())), m = 0; m <= p; ++m) {
      if (!(m < p && o(u = h[m], m, h)) === P)
        if (P = !P)
          g = m, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), k = m - 1; k >= g; --k)
            l.point(T[k], v[k]);
          l.lineEnd(), l.areaEnd();
        }
      P && (T[m] = +e(u, m, h), v[m] = +t(u, m, h), l.point(a ? +a(u, m, h) : T[m], n ? +n(u, m, h) : v[m]));
    }
    if (F) return l = null, F + "" || null;
  }
  function f() {
    return vi().defined(o).curve(i).context(s);
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
function uo(e) {
  return e < 0 ? -1 : 1;
}
function fo(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), i = (n - e._y1) / (o || a < 0 && -0), l = (s * o + i * a) / (a + o);
  return (uo(s) + uo(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function ho(e, t) {
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
        Qr(this, this._t0, ho(this, this._t0));
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
          this._point = 3, Qr(this, ho(this, n = fo(this, e, t)), n);
          break;
        default:
          Qr(this, this._t0, n = fo(this, e, t));
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
  const a = Fo(e, t);
  return as().domain(a).range(n);
}
function po(e, t, n) {
  const [a, o] = Fo(e, t);
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
  const o = vi().x(t).y(n);
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
const wi = U.createContext(null);
function Bt() {
  return U.useContext(wi);
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
  return n !== void 0 && (d.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: d, role: s, "aria-label": i, children: /* @__PURE__ */ r.jsx(wi.Provider, { value: l, children: o }) });
}, os = U.createContext(null), Xt = () => U.useContext(os), Qf = ({
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
  const f = Bt(), h = t ?? f?.innerWidth ?? 0, m = n ?? f?.innerHeight ?? 0, g = U.useMemo(() => e.flatMap((v) => v.data), [e]), k = U.useCallback((v) => {
    if (a) return a(v);
    const N = v.x;
    return N instanceof Date ? N : new Date(N);
  }, [a]), p = d ?? 6, u = c ?? 6, P = U.useMemo(() => Xf(g, k, [p, Math.max(0, h - p)]), [g, k, h, p]), F = U.useMemo(() => {
    if (l) {
      const v = po([], (N) => N.y, [Math.max(0, m - u), u]);
      return v.domain(l), v;
    }
    return po(g, (v) => v.y, [Math.max(0, m - u), u]);
  }, [g, m, l]), T = U.useMemo(() => ({
    xScale: P,
    yScale: F,
    getXTicks: (v = s) => P.ticks(v),
    getYTicks: (v = i) => F.ticks(v)
  }), [P, F, s, i]);
  return /* @__PURE__ */ r.jsx(os.Provider, { value: T, children: o });
}, mo = ({
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
  allowLabelWrap: m = !0,
  tickFormatPreset: g
}) => {
  const k = Xt(), p = Bt(), u = t || (e === "x" ? k?.xScale : k?.yScale), P = n ?? (e === "x" ? 6 : 5), F = typeof o == "function", T = U.useMemo(() => {
    if (F || !g) return;
    const y = ($) => new Intl.DateTimeFormat(void 0, $);
    switch (g) {
      case "dayShortMonth":
        return ($) => {
          const j = $ instanceof Date ? $ : new Date($);
          return `${j.getDate()}
${y({ month: "short" }).format(j)}`;
        };
      case "dayShortMonthYear":
        return ($) => {
          const j = $ instanceof Date ? $ : new Date($);
          return `${j.getDate()}
${y({ month: "short" }).format(j)} ${j.getFullYear()}`;
        };
      case "shortMonth":
        return ($) => {
          const j = $ instanceof Date ? $ : new Date($);
          return y({ month: "short" }).format(j);
        };
      case "shortMonthYear":
        return ($) => {
          const j = $ instanceof Date ? $ : new Date($);
          return `${y({ month: "short" }).format(j)} ${j.getFullYear()}`;
        };
      case "hourMinute":
        return ($) => {
          const j = $ instanceof Date ? $ : new Date($);
          return y({ hour: "2-digit", minute: "2-digit" }).format(j);
        };
      default:
        return;
    }
  }, [F, g]);
  let v = F ? o : T || ((y) => String(y));
  const N = U.useMemo(() => a && Array.isArray(a) ? a : u ? typeof u.ticks == "function" ? u.ticks(P) : u.domain ? u.domain() : [] : [], [u, P, a]);
  if (e === "x" && !F && !g && N.length && N.every((y) => y instanceof Date)) {
    const y = N[0], $ = N[N.length - 1], j = $.getTime() - y.getTime(), D = 24 * 3600 * 1e3, S = 365 * D, x = y.getFullYear() === $.getFullYear(), b = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (j < 2 * D) {
      const H = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      v = (B) => H.format(B);
    } else if (j < 32 * D)
      v = (H) => {
        const B = H;
        return `${B.getDate()} ${b.format(B)}`;
      };
    else if (j < S && x)
      v = (H) => b.format(H);
    else if (j < 2 * S) {
      const H = /* @__PURE__ */ new Set();
      v = (B) => {
        const L = B, C = L.getMonth();
        return H.has(C) || H.add(C), `${b.format(L)} ${L.getFullYear()}`;
      };
    } else
      v = (H) => String(H.getFullYear());
  }
  if (!u || !p) return null;
  if (e === "x") {
    const y = i ?? p.innerHeight, $ = typeof u.bandwidth == "function", j = $ ? u.bandwidth() : 0, D = (b) => {
      const H = u(b);
      return $ ? H + j / 2 : H;
    };
    let S = d ?? 0;
    if (f && d == null) {
      const b = N.map((B) => v(B).replace(/\n.*/g, "")), H = b.length ? b.reduce((B, L) => B + L.length, 0) / b.length : 0;
      S = Math.max(12, Math.round(H * 6 + 4));
    }
    const x = U.useMemo(() => {
      if (a && Array.isArray(a) || S <= 0) return N;
      const b = [];
      let H = -1 / 0;
      for (const B of N) {
        const L = D(B);
        L - H >= S && (b.push(B), H = L);
      }
      return b;
    }, [N, u, S, a, $, j]);
    return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${y})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ r.jsx("line", { x1: 0, x2: p.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      x.map((b, H) => {
        const B = v(b), L = c && B.length > c ? B.slice(0, Math.max(1, c - 1)) + "…" : B, C = m ? L.split(/\n/) : [L.replace(/\n/g, " ")], w = h < 0 ? "end" : h > 0 ? "start" : "middle";
        return /* @__PURE__ */ r.jsxs("g", { transform: `translate(${D(b)},0)`, children: [
          /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ r.jsxs("text", { y: 9, textAnchor: w, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: h ? `rotate(${h})` : void 0, fontFamily: "inherit", children: [
            C.map((R, _) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: _ === 0 ? 0 : "1.1em", children: R }, _)),
            L !== B && /* @__PURE__ */ r.jsx("title", { children: B })
          ] })
        ] }, b?.toString?.() || H);
      })
    ] });
  }
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    N.map((y, $) => {
      const j = v(y), D = c && j.length > c ? j.slice(0, Math.max(1, c - 1)) + "…" : j, S = m ? D.split(/\n/) : [D.replace(/\n/g, " ")];
      return /* @__PURE__ */ r.jsxs("g", { transform: `translate(0,${u(y)})`, children: [
        /* @__PURE__ */ r.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ r.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          S.map((x, b) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: b === 0 ? 0 : "1.1em", children: x }, b)),
          D !== j && /* @__PURE__ */ r.jsx("title", { children: j })
        ] })
      ] }, y?.toString?.() || $);
    }),
    s && /* @__PURE__ */ r.jsx("text", { transform: "rotate(-90)", x: -p.innerHeight / 2, y: -p.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: s })
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
}, nh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Mr = {
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
let ea = null, ta = null, na = null, _i = "optimized";
function ah() {
  const e = { color: { ...Mr.color, ...Dn.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
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
function Si(e) {
  const t = oh(e);
  if (!t) return null;
  const n = ih(t.r, t.g, t.b);
  return lh(n.x, n.y, n.z);
}
function go(e, t) {
  const n = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + a * a + o * o);
}
function ch() {
  const e = sh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Si(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let d = 0, c = 0;
    for (let h = 0; h < e.length; h++) i !== h && t[h] && (d += go(l, t[h]), c++);
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
        const m = t[h];
        if (m) {
          const g = go(c, m);
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
  const n = Si(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: s, Z: i } = uh(a, n.a, n.b), l = fh(o, s, i);
  return hh(l.r, l.g, l.b);
}
function mh() {
  const e = dh(), n = [12, -12, 24, -24].map((o) => e.map((s) => ph(s, o))), a = [...e];
  return n.forEach((o) => a.push(...o)), a;
}
function gh() {
  return (!na || xh()) && (na = mh(), ki = _i), na;
}
let ki = null;
function xh() {
  return ki !== _i;
}
function ht(e) {
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
  const e = { color: { ...Mr.color, ...Dn.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
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
function Ci() {
  return aa || (aa = vh()), aa;
}
function wh(e) {
  return Ci()[e.toLowerCase()];
}
function _h(e, t) {
  return wh(e) || Ci()[wa[t % wa.length]] || ht(t);
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
  const e = { color: { ...Mr.color, ...Dn.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
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
function ji() {
  return sa || (sa = Ch()), sa;
}
function jh(e) {
  return ji()[e.toLowerCase()];
}
function Nh(e, t) {
  return jh(e) || ji()[_a[t % _a.length]] || ht(t);
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
function Ih(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Mh() {
  const e = { color: { ...Mr.color, ...Dn.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
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
  return oa || (oa = Mh()), oa;
}
function Fh(e) {
  return Lh()[Ih(e)];
}
function on(e, t) {
  return Fh(e) || ht(t);
}
const Ni = U.createContext(null), In = () => U.useContext(Ni), jx = ({
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
  return /* @__PURE__ */ r.jsx(Ni.Provider, { value: c, children: t });
}, Ti = U.createContext(null), Et = () => U.useContext(Ti), Ah = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Xt(), o = In(), [s, i] = U.useState(null), l = U.useRef(/* @__PURE__ */ new Map()), [d, c] = U.useState([]), f = U.useCallback(
    ($, j) => {
      l.current.set($, j);
    },
    []
  ), h = U.useCallback(($) => {
    l.current.delete($);
  }, []), m = U.useCallback(
    ($, j) => {
      if (!a) return;
      const { xScale: D, yScale: S } = a;
      let x = null, b = 1 / 0;
      l.current.forEach((H, B) => {
        H.forEach((L, C) => {
          const w = D(L.x), R = S(L.y), _ = w - $, A = R - j, q = Math.sqrt(_ * _ + A * A);
          q < b && (b = q, x = {
            seriesId: B,
            index: C,
            x: L.x,
            y: L.y,
            clientX: w,
            clientY: R
          });
        });
      }), x && b <= t ? i(x) : i(null);
    },
    [a, t]
  ), g = U.useCallback(() => i(null), []);
  U.useEffect(() => {
    if (!s) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: $, yScale: j } = a, D = [];
    l.current.forEach((S, x) => {
      S.forEach((b, H) => {
        (s.x instanceof Date && b.x instanceof Date ? b.x.getTime() === s.x.getTime() : b.x === s.x) && D.push({
          seriesId: x,
          index: H,
          x: b.x,
          y: b.y,
          clientX: $(b.x),
          clientY: j(b.y)
        });
      });
    }), D.sort((S, x) => S.seriesId.localeCompare(x.seriesId)), c(D);
  }, [s, a]);
  const k = U.useCallback(
    ($) => {
      if (!s) return;
      const j = l.current.get(s.seriesId);
      if (!j) return;
      let D = s.index + $;
      if (D < 0 || D >= j.length) {
        if (!n) return;
        D = (D + j.length) % j.length;
      }
      const S = j[D];
      if (!a) return;
      const { xScale: x, yScale: b } = a;
      i({
        seriesId: s.seriesId,
        index: D,
        x: S.x,
        y: S.y,
        clientX: x(S.x),
        clientY: b(S.y)
      });
    },
    [s, a, n]
  ), p = U.useCallback(
    ($) => {
      let j = Array.from(l.current.keys());
      if (o && (j = j.filter((w) => !o.isHidden(w))), j.length === 0) return;
      if (!s) {
        const w = j[0], R = l.current.get(w);
        if (!R || !a) return;
        const { xScale: _, yScale: A } = a, q = R[0];
        i({
          seriesId: w,
          index: 0,
          x: q.x,
          y: q.y,
          clientX: _(q.x),
          clientY: A(q.y)
        });
        return;
      }
      const D = j.indexOf(s.seriesId);
      if (D === -1) return;
      let S = D + $;
      if (S < 0 || S >= j.length) {
        if (!n) return;
        S = (S + j.length) % j.length;
      }
      const x = j[S], b = l.current.get(x);
      if (!b || !a) return;
      const H = Math.min(s.index, b.length - 1), B = b[H], { xScale: L, yScale: C } = a;
      i({
        seriesId: x,
        index: H,
        x: B.x,
        y: B.y,
        clientX: L(B.x),
        clientY: C(B.y)
      });
    },
    [s, a, n, o]
  ), u = U.useCallback(() => {
    let $ = Array.from(l.current.keys());
    if (o && ($ = $.filter((H) => !o.isHidden(H))), $.length === 0) return;
    const j = s ? s.seriesId : $[0], D = l.current.get(j);
    if (!D || D.length === 0 || !a) return;
    const S = D[0], { xScale: x, yScale: b } = a;
    i({
      seriesId: j,
      index: 0,
      x: S.x,
      y: S.y,
      clientX: x(S.x),
      clientY: b(S.y)
    });
  }, [s, a, o]), P = U.useCallback(() => {
    let $ = Array.from(l.current.keys());
    if (o && ($ = $.filter((B) => !o.isHidden(B))), $.length === 0) return;
    const j = s ? s.seriesId : $[0], D = l.current.get(j);
    if (!D || D.length === 0 || !a) return;
    const S = D.length - 1, x = D[S], { xScale: b, yScale: H } = a;
    i({
      seriesId: j,
      index: S,
      x: x.x,
      y: x.y,
      clientX: b(x.x),
      clientY: H(x.y)
    });
  }, [s, a, o]), F = U.useCallback(
    () => k(1),
    [k]
  ), T = U.useCallback(
    () => k(-1),
    [k]
  ), v = U.useCallback(
    () => p(1),
    [p]
  ), N = U.useCallback(
    () => p(-1),
    [p]
  ), y = U.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: d,
      focusNearest: m,
      clear: g,
      registerSeries: f,
      unregisterSeries: h,
      focusNextPoint: F,
      focusPrevPoint: T,
      focusNextSeries: v,
      focusPrevSeries: N,
      focusFirstPoint: u,
      focusLastPoint: P
    }),
    [
      s,
      d,
      m,
      g,
      f,
      h,
      F,
      T,
      v,
      N,
      u,
      P
    ]
  );
  return /* @__PURE__ */ r.jsx(Ti.Provider, { value: y, children: e });
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
  gradientFillId: f
}) => {
  const h = Xt();
  if (!h) return null;
  const { xScale: m, yScale: g } = h, p = In()?.isHidden(e.id) ?? !1, u = p && l === "fade";
  if (p && l === "remove")
    return null;
  const P = Et();
  U.useEffect(() => {
    if (!P) return;
    const y = e.data.map(($) => ({ x: i($), y: $.y }));
    return P.registerSeries(e.id, y), () => P.unregisterSeries(e.id);
  }, [P, e.id, e.data, i]);
  const F = U.useMemo(
    () => va(
      e.data,
      (y) => m(i(y)),
      (y) => g(y.y),
      { smooth: c }
    ),
    [e.data, m, g, i, c]
  ), T = U.useMemo(() => {
    if (!e.data.length) return "";
    const [y] = g.domain(), $ = ya().x((j) => m(i(j))).y0(() => g(y)).y1((j) => g(j.y));
    return c && $.curve(tr), $(e.data) || "";
  }, [e.data, m, g, i, c]), v = e.color || (n === "region" ? on(e.id, t) : ht(t)), N = n === "region" ? nr(e.id, t) : Vt(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: u ? 0.25 : 1,
      "aria-hidden": u ? !0 : void 0,
      children: [
        f && /* @__PURE__ */ r.jsx(
          "path",
          {
            d: T,
            fill: `url(#${f})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: F,
            fill: "none",
            stroke: v,
            strokeWidth: d,
            role: "presentation"
          }
        ),
        a && e.data.map((y, $) => {
          const j = m(i(y)), D = g(y.y), S = o ? 0 : -1, x = !u && (o && $ === s || P?.focused?.seriesId === e.id && P.focused.index === $), b = () => {
            P && !u && P.setFocused({
              seriesId: e.id,
              index: $,
              x: i(y),
              y: y.y,
              clientX: j,
              clientY: D
            });
          }, H = () => {
            P && P.focused?.seriesId === e.id && P.focused.index === $ && P.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: j,
              cy: D,
              r: x ? 5 : 3.5,
              stroke: x ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : N,
              strokeWidth: x ? 2 : 1,
              fill: x ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : v,
              className: "fdp-line-point",
              tabIndex: u ? -1 : S,
              "aria-label": `${e.label || e.id} ${i(y).toDateString()} value ${y.y}`,
              "data-series": e.id,
              "data-index": $,
              onMouseEnter: b,
              onFocus: b,
              onMouseLeave: H,
              onBlur: H
            },
            $
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
const Nx = () => {
  const e = Et(), t = Bt();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(n.clientX, 0), o), l = Math.min(Math.max(n.clientY, 0), s), d = i + 8, c = l - 8, f = a.length > 1, h = n.x instanceof Date ? n.x.toDateString() : String(n.x), m = f ? h : `${h} • ${n.y}`, g = /\d+$/.exec(n.seriesId || ""), k = g ? parseInt(g[0], 10) - 1 : 0, p = ht(k >= 0 ? k : 0) || "#005eb8", u = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: u, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: u, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: p, stroke: "#fff", strokeWidth: 0.5 }),
    f ? (() => {
      const F = a.map(($) => `${$.seriesId}: ${$.y}`), T = [m, ...F], v = T.reduce(($, j) => Math.max($, j.length), 0), N = Math.max(90, v * 6.2 + 16), y = 16 * T.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: d, y: c - y, rx: 4, ry: 4, width: N, height: y, fill: "#212b32", opacity: 0.92 }),
        T.map(($, j) => /* @__PURE__ */ r.jsx("text", { x: d + 8, y: c - y + 6 + 16 * (j + 0.7), fill: "#fff", fontSize: 12, children: $ }, j))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: d, y: c - 24, rx: 4, ry: 4, width: Math.max(60, m.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: d + 8, y: c - 8, fill: "#fff", fontSize: 12, children: m })
    ] })
  ] });
}, Tx = ({
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
  const c = In(), f = !!(c && !a && !l && s === void 0), h = a || f, m = e || [], g = s !== void 0, [k, p] = U.useState(new Set(i)), u = g ? new Set(s) : k, [P, F] = U.useState(""), T = (v) => {
    if (f && c) {
      const b = c.isHidden(v);
      c.toggle(v);
      const B = m.find((C) => C.id === v)?.label || v, L = d ? d(v, b, B) : `${B} ${b ? "shown" : "hidden"}`;
      F(L);
      return;
    }
    if (!h) return;
    const N = new Set(u), y = N.has(v);
    y ? N.delete(v) : N.add(v), g || p(N);
    const $ = m.filter((b) => !N.has(b.id)).map((b) => b.id), j = Array.from(N);
    l?.($, j);
    const S = m.find((b) => b.id === v)?.label || v, x = d ? d(v, y, S) : `${S} ${y ? "shown" : "hidden"}`;
    F(x);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: m.map((v, N) => {
      const y = v.palette || t, $ = v.color || (y === "region" ? on(v.id, N) : y === "severity" ? _h(v.id, N) : y === "org-level" ? Nh(v.id, N) : ht(N));
      let j = v.stroke || (y === "region" ? nr(v.id, N) : y === "severity" ? kh(v.id, N) : y === "org-level" ? $h(v.id, N) : Vt(N));
      if (o && j) {
        const x = j.trim().toLowerCase();
        (x === "#fff" || x === "#ffffff" || x === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(x)) && (j = "#212b32");
      }
      const D = f && c ? c.isHidden(v.id) : u.has(v.id), S = h ? {
        "aria-pressed": !D,
        "aria-label": `${v.label} (${D ? "show" : "hide"})`,
        onClick: () => T(v.id)
      } : { "aria-label": v.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${D ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: $,
              backgroundImage: v.patternDataUrl ? `url(${v.patternDataUrl})` : void 0,
              backgroundSize: v.patternDataUrl ? "auto" : void 0,
              borderColor: j
            },
            ...S
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: v.label })
      ] }, v.id);
    }) }),
    h && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: P })
  ] });
}, $x = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: a,
  areaOnly: o = !1,
  visibilityMode: s = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: d,
  gradientFill: c = !0
}) => {
  const f = Xt();
  if (!f) return null;
  const { xScale: h, yScale: m } = f, k = In()?.isHidden(e.id) ?? !1, p = k && s === "fade";
  if (k && s === "remove") return null;
  const u = Et();
  U.useEffect(() => {
    if (!u) return;
    const N = e.data.map((y) => ({ x: a(y), y: y.y }));
    return u.registerSeries(e.id, N), () => u.unregisterSeries(e.id);
  }, [u, e.id, e.data, a]);
  const P = e.color || (n === "region" ? on(e.id, t) : ht(t)), F = U.useMemo(() => d && d.length === e.data.length ? va(
    e.data,
    (N) => h(a(N)),
    (N) => {
      const y = e.data.indexOf(N);
      return m(d[y].y1);
    },
    { smooth: l }
  ) : va(
    e.data,
    (N) => h(a(N)),
    (N) => m(N.y),
    { smooth: l }
  ), [e.data, d, h, m, a, l]), T = U.useMemo(() => {
    if (d && d.length === e.data.length) {
      const D = ya().x((S) => h(a(S))).y0((S, x) => m(d[x].y0)).y1((S, x) => m(d[x].y1));
      return l && D.curve(tr), D(e.data) || "";
    }
    const [N, y] = m.domain();
    let $ = i;
    $ < N ? $ = N : $ > y && ($ = y);
    const j = ya().x((D) => h(a(D))).y0(() => m($)).y1((D) => m(D.y));
    return l && j.curve(tr), j(e.data) || "";
  }, [e.data, d, h, m, a, i, l]), v = U.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: p ? 0.25 : 1,
      "aria-hidden": p ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: v, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: P, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: P, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: T,
            fill: c ? `url(#${v})` : P,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ r.jsx("path", { d: F, fill: "none", stroke: P, strokeWidth: 1 })
      ]
    }
  );
}, Dx = ({
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
  colorMode: m = "series",
  allSeries: g,
  stacked: k,
  gapRatio: p = 0.15,
  minBarWidth: u,
  gradientFill: P = !0,
  gradientStrokeMatch: F = !0
}) => {
  const T = Math.max(0, p), v = Xt(), N = Bt();
  if (!v || !N) return null;
  const { xScale: y, yScale: $ } = v, D = In()?.isHidden(e.id) ?? !1, S = D && h === "fade";
  if (D && h === "remove") return null;
  const x = Et();
  U.useEffect(() => {
    if (!x) return;
    const z = e.data.map((E) => ({ x: o(E), y: E.y }));
    return x.registerSeries(e.id, z), () => x.unregisterSeries(e.id);
  }, [x, e.id, e.data, o]);
  const b = typeof y.bandwidth == "function", H = b ? y.bandwidth() : void 0, B = U.useMemo(() => {
    if (H != null) return H;
    const z = g && g.length ? g : [e], E = [];
    z.forEach((W) => {
      W.data.forEach((O) => {
        const Z = y(o(O));
        Number.isFinite(Z) && E.push(Z);
      });
    });
    const X = E.sort((W, O) => W - O);
    if (X.length <= 1) return 40;
    const ee = [];
    for (let W = 1; W < X.length; W++) ee.push(X[W] - X[W - 1]);
    return ee.sort((W, O) => W - O), (ee[Math.floor(ee.length / 2)] || 40) * i;
  }, [e.data, g, y, o, i, H]), { basePerBar: L } = U.useMemo(() => {
    if (b) {
      const X = B, ee = Math.max(1, (X - l * (n - 1)) / n), Q = e.barWidth ?? d;
      let W = Q ? Math.min(Q, X) : ee;
      if (c) {
        const O = X * Math.min(1, Math.max(0.05, f)), Z = Math.max(1, (O - l * (n - 1)) / n);
        W = Q ? Math.min(W, Z) : Z;
      }
      return { basePerBar: W };
    }
    const z = e.barWidth ?? d, E = Math.max(1, (B - l * (n - 1)) / n);
    if (c) {
      const X = g && g.length ? g : [e], ee = [];
      X.forEach((K) => K.data.forEach((ue) => {
        const de = y(o(ue));
        Number.isFinite(de) && ee.push(de);
      })), ee.sort((K, ue) => K - ue);
      const Q = [];
      for (let K = 1; K < ee.length; K++) Q.push(ee[K] - ee[K - 1]);
      Q.sort((K, ue) => K - ue);
      const O = (Q[Math.floor(Q.length / 2)] || B) * Math.min(1, Math.max(0.05, f)), Z = Math.max(1, (O - l * (n - 1)) / n);
      return { basePerBar: z ? Math.min(z, Z) : Z };
    }
    return z ? { basePerBar: Math.min(z, E) } : { basePerBar: E };
  }, [b, B, l, n, d, e.barWidth, c, f, g, y, o]), C = U.useMemo(() => {
    if (b) return [];
    const z = [];
    return (g && g.length ? g : [e]).forEach((X) => X.data.forEach((ee) => {
      const Q = y(o(ee));
      Number.isFinite(Q) && z.push(Q);
    })), z.sort((X, ee) => X - ee), Array.from(new Set(z));
  }, [b, g, e, y, o]), w = U.useMemo(() => {
    if (b) return [];
    if (!C.length) return [];
    if (C.length === 1)
      return [{ center: C[0], left: 0, right: N.innerWidth }];
    const z = [];
    for (let E = 0; E < C.length; E++) {
      const X = C[E], ee = E === 0 ? 0 : (C[E - 1] + X) / 2, Q = E === C.length - 1 ? N.innerWidth : (X + C[E + 1]) / 2;
      z.push({ center: X, left: Math.max(0, ee), right: Math.min(N.innerWidth, Q) });
    }
    return z;
  }, [b, C, N.innerWidth]), R = U.useMemo(() => {
    if (b || !w.length) return;
    const z = Math.min(1, Math.max(0.05, i)), E = w.map((O) => Math.max(2, O.right - O.left)), X = E.map((O) => Math.max(2, Math.min(O - 1, O * z)));
    let ee = Math.min(...X);
    if (u)
      if (n <= 1) {
        const O = Math.min(...E.map((Z) => Z - 1));
        O >= u && ee < u && (ee = Math.min(O, u));
      } else {
        const O = Math.min(...E.map((ae) => ae - 1)), Z = u * n + (n - 1) * (u * T);
        Z <= O && ee < Z && (ee = Z);
      }
    if (n <= 1)
      return u && ee < u && E.every((Z) => Z >= u) ? { groupWidth: u, barWidth: u } : { groupWidth: ee, barWidth: ee };
    let Q = ee / (n + (n - 1) * T);
    return Q < 1 && (Q = 1), u && Q < u && u * n + (n - 1) * (u * T) <= ee && (Q = u), { groupWidth: Q * n + (n - 1) * (Q * T), barWidth: Q };
  }, [b, w, i, n, T, u]), _ = e.color || (a === "region" ? on(e.id, t) : ht(t)), A = a === "region" ? nr(e.id, t) : Vt(t), q = Number.isFinite($(0)) ? $(0) : $.range()[0], M = U.useId();
  return k && k.length === e.data.length ? /* @__PURE__ */ r.jsxs("g", { className: "fdp-bar-series fdp-bar-series--stacked", "data-series": e.id, opacity: S ? 0.25 : 1, "aria-hidden": S ? !0 : void 0, children: [
    P && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: M, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: _, stopOpacity: 0.3 }),
      /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: _, stopOpacity: 0.14 }),
      /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: _, stopOpacity: 0.06 })
    ] }) }),
    e.data.map((z, E) => {
      const X = o(z), ee = y(b ? z.x : X);
      let Q, W;
      if (b)
        Q = B, W = ee;
      else {
        const ge = w.find((Me) => Math.abs(Me.center - ee) < 0.5);
        if (!ge || !R)
          Q = L, W = ee - L / 2;
        else {
          const { groupWidth: Me } = R;
          Q = Me;
          let Ce = ee - Me / 2;
          Ce < ge.left && (Ce = ge.left), Ce + Me > ge.right && (Ce = Math.max(ge.left, ge.right - Me)), W = Ce;
        }
      }
      const O = k[E], Z = $(O.y0), ae = $(O.y1), K = Math.min(Z, ae), ue = Math.abs(ae - Z) || 1;
      if (!b && u && Q < u) {
        const ge = w.find((Me) => Math.abs(Me.center - ee) < 0.5);
        if (ge) {
          const Me = Math.max(2, ge.right - ge.left - 1), Ce = Math.min(Me, u);
          Ce > Q && (Q = Ce, W = Math.max(ge.left, Math.min(ge.right - Q, ee - Q / 2)));
        }
      }
      const de = !S && x?.focused?.seriesId === e.id && x.focused.index === E, xe = () => {
        !x || S || x.setFocused({ seriesId: e.id, index: E, x: X, y: O.y1 - O.y0, clientX: W + Q / 2, clientY: K });
      }, pe = () => {
        x?.focused?.seriesId === e.id && x.focused.index === E && x.clear();
      };
      return /* @__PURE__ */ r.jsx(
        "rect",
        {
          x: W,
          y: K,
          width: Q,
          height: ue,
          fill: P ? `url(#${M})` : _,
          ...P ? {} : { fillOpacity: 0.25 },
          stroke: de ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : P && F ? _ : void 0,
          strokeWidth: de ? 2 : 1,
          className: "fdp-bar fdp-bar--stacked",
          tabIndex: S || !s ? -1 : 0,
          role: "graphics-symbol",
          "aria-label": `${e.label || e.id} ${X instanceof Date ? X.toDateString() : X} value ${O.y1 - O.y0}`,
          onMouseEnter: xe,
          onFocus: xe,
          onMouseLeave: pe,
          onBlur: pe
        },
        E
      );
    })
  ] }) : /* @__PURE__ */ r.jsxs("g", { className: "fdp-bar-series", "data-series": e.id, opacity: S ? 0.25 : 1, "aria-hidden": S ? !0 : void 0, children: [
    P && /* @__PURE__ */ r.jsxs("defs", { children: [
      m === "series" && /* @__PURE__ */ r.jsxs("linearGradient", { id: M, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: _, stopOpacity: 0.3 }),
        /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: _, stopOpacity: 0.14 }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: _, stopOpacity: 0.06 })
      ] }),
      m === "category" && e.data.map((z, E) => {
        const X = a === "region" ? on(String(z.x), E) : ht(E), ee = `${M}-${E}`;
        return /* @__PURE__ */ r.jsxs("linearGradient", { id: ee, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: X, stopOpacity: 0.3 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: X, stopOpacity: 0.14 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: X, stopOpacity: 0.06 })
        ] }, ee);
      })
    ] }),
    e.data.map((z, E) => {
      const X = o(z), ee = y(b ? z.x : X);
      let Q, W;
      if (b) {
        const Se = B;
        if (n <= 1)
          W = Se, Q = ee;
        else {
          W = Math.max(1, Se / (n + (n - 1) * T));
          const G = W * T, V = W * n + G * (n - 1);
          Q = ee + (Se - V) / 2 + t * (W + G);
        }
      } else {
        const Se = w.find((G) => G.center === ee);
        if (!Se || !R)
          W = L, Q = ee - L / 2, u && W < u && (W = u, Q = ee - W / 2);
        else {
          const { barWidth: G } = R;
          W = G;
          const V = n > 1 ? G * T : 0, ne = W * n + V * (n - 1);
          let te = ee - ne / 2;
          te < Se.left && (te = Se.left), te + ne > Se.right && (te = Math.max(Se.left, Se.right - ne)), Q = te + t * (W + V);
        }
        if (u && W < u) {
          const G = w.find((V) => Math.abs(V.center - ee) < 0.5);
          if (G) {
            const V = Math.max(2, G.right - G.left - 1), ne = Math.min(V, u);
            if (ne > W)
              if (n <= 1)
                W = ne, Q = Math.max(G.left, Math.min(G.right - W, ee - W / 2));
              else {
                const te = ne * T, I = ne * n + te * (n - 1);
                if (I <= G.right - G.left - 1) {
                  W = ne;
                  const Y = I;
                  let re = ee - Y / 2;
                  re < G.left && (re = G.left), re + Y > G.right && (re = Math.max(G.left, G.right - Y)), Q = re + t * (W + te);
                }
              }
          }
        }
      }
      const O = Q + W / 2, Z = $(z.y), ae = Math.min(q, Z), K = Math.abs(q - Z), ue = !S && x?.focused?.seriesId === e.id && x.focused.index === E, de = () => {
        !x || S || x.setFocused({ seriesId: e.id, index: E, x: X, y: z.y, clientX: O, clientY: Z });
      }, xe = () => {
        x?.focused?.seriesId === e.id && x.focused.index === E && x.clear();
      }, pe = m === "category" ? a === "region" ? on(String(z.x), E) : ht(E) : _, ge = m === "category" ? `${M}-${E}` : M, Me = P && F ? pe : m === "category" ? a === "region" ? nr(String(z.x), E) : Vt(E) : A, Ce = ue ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : Me || pe;
      return /* @__PURE__ */ r.jsx(
        "rect",
        {
          x: Q,
          y: ae,
          width: W,
          height: K || 1,
          fill: P ? `url(#${ge})` : pe,
          ...P ? {} : { fillOpacity: 0.25 },
          stroke: Ce,
          strokeWidth: ue ? 2 : 1,
          className: "fdp-bar",
          tabIndex: S || !s ? -1 : 0,
          role: "graphics-symbol",
          "aria-label": `${e.label || e.id} ${X instanceof Date ? X.toDateString() : X} value ${z.y}`,
          onMouseEnter: de,
          onFocus: de,
          onMouseLeave: xe,
          onBlur: xe
        },
        E
      );
    })
  ] });
}, Ix = ({
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
    return f.forEach((P) => u.add(P.x)), Array.from(u);
  }, [f]), m = U.useMemo(() => Math.max(0, ...f.map((u) => u.y)), [f]), g = U.useMemo(() => Bo().domain(h).range([0, d]).paddingInner(a).paddingOuter(o), [h, d, a, o]), k = U.useMemo(() => qn().domain([0, m]).nice().range([c, 0]), [m, c]), p = U.useMemo(() => ({
    xScale: g,
    yScale: k,
    getXTicks: () => h,
    getYTicks: (u = i) => k.ticks(u)
  }), [g, k, h, i]);
  return /* @__PURE__ */ r.jsx(os.Provider, { value: p, children: s });
}, Mx = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: o,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const d = U.useId(), c = s || d, f = t ? `${c}-desc` : void 0, h = n ? `${c}-src` : void 0, m = typeof window < "u" && !l;
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
        !m && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(Js, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(Js, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: h, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, Lx = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
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
}, Fx = ({
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
  className: m,
  id: g,
  announceDelta: k = !0
}) => {
  const p = U.useId(), u = g || p, P = `${u}-label`, F = `${u}-value`, T = `${u}-delta`, v = typeof t == "number" && !Number.isNaN(t), N = c ? "—" : f ? "" : v ? h ? h(t) : t.toLocaleString() : t;
  let y, $ = "", j = "";
  if (a && !c && !f) {
    y = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const D = Math.abs(a.value), S = y === "up" ? `+${D}` : y === "down" ? `-${D}` : "0", x = a.isPercent ? "%" : "";
    if ($ = `${S}${x}`, a.ariaLabel)
      j = a.ariaLabel;
    else {
      const b = a.invert ? y === "down" : y === "up";
      j = `${y === "neutral" ? "no change" : y === "up" ? "up" : "down"} ${D}${x}${y === "neutral" ? "" : b ? " (improvement)" : " (worse)"}`;
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
        m
      ),
      role: "group",
      "aria-labelledby": P,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: P, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: F, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : f ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: f }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: N }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !c && !f && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !f && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: T,
              "aria-label": j,
              className: Qn(
                "fdp-metric-card__delta",
                y && `fdp-metric-card__delta--${y}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: $ }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          d && d.length > 0 && !c && !f && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        k && a && !a.ariaLabel && !c && !f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: j })
      ] })
    }
  );
};
var zt = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(zt || {}), Ge = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.None = "none", e))(Ge || {}), At = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(At || {});
const me = (e) => typeof e == "number" && Number.isFinite(e), Rh = (e) => e.reduce((t, n) => t + n, 0), Ft = (e) => e.length ? Rh(e) / e.length : NaN;
function Hh(e) {
  const t = [];
  let n = [];
  for (const a of e)
    a.baseline && n.length && (t.push(n), n = []), n.push(a);
  return n.length && t.push(n), t;
}
function $i(e, t) {
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
function Di(e, t) {
  const n = e.filter((s) => me(s));
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = Ft(n), o = 3.267 * a;
  if (t) {
    const s = n.filter((i) => i <= o);
    s.length && s.length !== n.length && (a = Ft(s), o = 3.267 * a);
  }
  return { mrMean: a, mrUcl: o };
}
function zh(e, t) {
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
function xo(e, t) {
  return e.reduce(
    (n, a) => n + (me(a) && a > t ? 1 : 0),
    0
  );
}
function bo(e, t) {
  return e.reduce(
    (n, a) => n + (me(a) && a < t ? 1 : 0),
    0
  );
}
function yo(e, t, n) {
  const a = e.filter((s) => me(s));
  if (a.length < t) return !1;
  const o = a.slice(-t);
  for (let s = 1; s < o.length; s++)
    if (n === "up" && !(o[s] > o[s - 1]) || n === "down" && !(o[s] < o[s - 1])) return !1;
  return !0;
}
function vo(e, t, n, a) {
  const o = e.filter((i) => me(i));
  if (o.length < t) return !1;
  const s = o.slice(-t);
  return a === "high" ? s.every((i) => i > n) : a === "low" ? s.every((i) => i < n) : !1;
}
const Wh = 0.2777, Oh = 3.6, Uh = (e) => me(e) && e >= 0 ? Math.pow(e, Wh) : null, Rt = (e) => me(e) && e >= 0 ? Math.pow(e, Oh) : null, en = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function Gh(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
function Yh(e) {
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
  const t = 1 / (e + 1), n = (f) => Gh(f, t) - 1, a = n(0.5), o = Math.max(0, n(en.three.low)), s = n(en.three.high), i = Math.max(0, n(en.one.low)), l = n(en.one.high), d = Math.max(0, n(en.two.low)), c = n(en.two.high);
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
function Vh(e, t, n) {
  const a = e.map((j) => me(j) ? Uh(j) : null), o = $i(a, t), {
    mrMean: s
    /*, mrUcl: _mrUclY_raw*/
  } = Di(o, !!n), i = a.filter((j, D) => !t[D] && me(j)), l = i.length ? Ft(i) : NaN;
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
  const d = 2.66, c = 2 / 3 * d, f = 1 / 3 * d, h = l + d * s, m = l - d * s, g = l + c * s, k = l - c * s, p = l + f * s, u = l - f * s, P = Rt(l), F = Rt(h), T = m <= 0 ? null : Rt(m), v = Rt(p), N = u <= 0 ? null : Rt(u), y = Rt(g), $ = k <= 0 ? null : Rt(k);
  return {
    center: P ?? null,
    upperProcessLimit: F ?? null,
    lowerProcessLimit: T ?? null,
    upperTwoSigma: y ?? null,
    lowerTwoSigma: $ ?? null,
    upperOneSigma: v ?? null,
    lowerOneSigma: N ?? null,
    mr: o,
    mrMean: s,
    mrUcl: me(s) ? 3.267 * s : null
  };
}
function Ii(e) {
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
    suppressIsolatedFavourablePoint: !0,
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
    precedenceStrategy: "legacy",
    emergingDirectionGrace: !1,
    collapseClusterRules: !0,
    baselineSuggest: !1,
    baselineSuggestMinDeltaSigma: 0.5,
    baselineSuggestStabilityPoints: 5,
    baselineSuggestMinGap: 12,
    baselineSuggestScoreThreshold: 50,
    ...o
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const i = a.map((p, u) => ({
    rowId: u + 1,
    x: p.x,
    value: me(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: me(p.target) ? p.target : null
  })), l = Hh(i), d = [], c = [], h = i.filter(
    (p) => !p.ghost && me(p.value)
  ).length >= (s.minimumPoints ?? 13);
  let m = 0;
  const g = {};
  for (const p of l) {
    m++;
    const u = p.map((x) => x.value), P = p.map((x) => x.ghost);
    let F = new Array(u.length).fill(null), T = NaN, v = NaN, N = NaN, y = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      F = $i(u, P);
      const x = u.filter(
        (H, B) => !P[B] && me(H)
      );
      T = x.length ? Ft(x) : NaN;
      const b = Di(
        F,
        !!s.excludeMovingRangeOutliers
      );
      v = b.mrMean, N = b.mrUcl, y = zh(T, v);
    } else if (t === "T") {
      const x = Vh(
        u,
        P,
        !!s.excludeMovingRangeOutliers
      );
      F = x.mr, v = x.mrMean ?? NaN, N = x.mrUcl ?? NaN, T = x.center ?? NaN, y = {
        upperProcessLimit: x.upperProcessLimit,
        lowerProcessLimit: x.lowerProcessLimit,
        upperTwoSigma: x.upperTwoSigma,
        lowerTwoSigma: x.lowerTwoSigma,
        upperOneSigma: x.upperOneSigma,
        lowerOneSigma: x.lowerOneSigma
      };
    } else if (t === "G") {
      const x = u.filter(
        (B, L) => !P[L] && me(B)
      ), b = x.length ? Ft(x) : NaN, H = Yh(b);
      T = H.cl ?? NaN, y = {
        upperProcessLimit: H.ucl,
        lowerProcessLimit: H.lcl,
        upperTwoSigma: H.twoHigh,
        lowerTwoSigma: H.twoLow,
        upperOneSigma: H.oneHigh,
        lowerOneSigma: H.oneLow
      }, F = new Array(u.length).fill(null), v = NaN, N = NaN;
    } else
      c.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const $ = p.map((x, b) => {
      const H = !x.ghost && me(x.value) ? u.slice(0, b + 1).filter((w, R) => !P[R] && me(w)).length : 0, B = h, L = B ? y : {
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
        partitionId: m,
        pointRank: H,
        mean: B && me(T) ? T : null,
        mr: me(F[b]) ? F[b] : null,
        mrMean: B && me(v) ? v : null,
        mrUcl: B && me(N) ? N : null,
        upperProcessLimit: me(L.upperProcessLimit) ? L.upperProcessLimit : null,
        lowerProcessLimit: me(L.lowerProcessLimit) ? L.lowerProcessLimit : null,
        upperTwoSigma: me(L.upperTwoSigma) ? L.upperTwoSigma : null,
        lowerTwoSigma: me(L.lowerTwoSigma) ? L.lowerTwoSigma : null,
        upperOneSigma: me(L.upperOneSigma) ? L.upperOneSigma : null,
        lowerOneSigma: me(L.lowerOneSigma) ? L.lowerOneSigma : null,
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
        upperBaseline: B && me(T) ? T : null,
        lowerBaseline: B && me(T) ? T : null,
        movingRangeHighPointValue: B && me(N) ? N : null,
        ghostValue: x.ghost && me(x.value) ? x.value : null,
        ghostFlag: !!x.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null
      };
    });
    g[m] = $.filter(
      (x) => !x.ghost && me(x.value)
    ).length;
    const j = s.specialCauseShiftPoints ?? 6, D = s.specialCauseTrendPoints ?? 6, S = [];
    for (let x = 0; x < $.length; x++) {
      const b = $[x], H = b.value;
      if (!b.ghost && me(H) && S.push(H), !(me(b.mean) && me(b.upperProcessLimit) && me(b.lowerProcessLimit)) || b.ghost || !me(H)) {
        d.push(b);
        continue;
      }
      b.specialCauseSinglePointAbove = me(b.upperProcessLimit) ? H > b.upperProcessLimit : !1, b.specialCauseSinglePointBelow = me(b.lowerProcessLimit) ? H < b.lowerProcessLimit : !1;
      const L = (R, _) => R.every((A) => A > _), C = (R, _) => R.every((A) => A < _), w = S.slice(-3);
      if (w.length === 3 && me(b.mean)) {
        const R = b.upperTwoSigma ?? 1 / 0, _ = b.lowerTwoSigma ?? -1 / 0, A = xo(w, R), q = bo(w, _);
        A >= 2 && L(w, b.mean) && (b.specialCauseTwoOfThreeAbove = !0), q >= 2 && C(w, b.mean) && (b.specialCauseTwoOfThreeBelow = !0);
      }
      if (s.enableFourOfFiveRule && me(b.mean)) {
        const R = S.slice(-5);
        if (R.length === 5) {
          const _ = b.upperOneSigma ?? 1 / 0, A = b.lowerOneSigma ?? -1 / 0, q = xo(R, _), M = bo(R, A);
          q >= 4 && L(R, b.mean) && (b.specialCauseFourOfFiveAbove = !0), M >= 4 && C(R, b.mean) && (b.specialCauseFourOfFiveBelow = !0);
        }
      }
      me(b.mean) && (b.specialCauseShiftHigh = vo(
        S,
        j,
        b.mean,
        "high"
      ), b.specialCauseShiftLow = vo(
        S,
        j,
        b.mean,
        "low"
      )), b.specialCauseTrendIncreasing = yo(
        S,
        D,
        "up"
      ), b.specialCauseTrendDecreasing = yo(
        S,
        D,
        "down"
      ), d.push(b);
    }
    if (s.maximumPointsPartition && Number.isFinite(s.maximumPointsPartition)) {
      const x = s.maximumPointsPartition;
      let b = 0;
      for (const H of d.filter((B) => B.partitionId === m))
        !H.ghost && me(H.value) && b++, b > x && (H.mean = H.upperProcessLimit = H.lowerProcessLimit = null, H.upperTwoSigma = H.lowerTwoSigma = H.upperOneSigma = H.lowerOneSigma = null);
    }
  }
  for (let p = 0; p < d.length; p++) {
    const u = d[p];
    if (u.ghost || !me(u.value) || u.mean === null) {
      u.variationIcon = "none";
      continue;
    }
    const P = u.specialCauseSinglePointAbove || u.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && u.specialCauseFourOfFiveAbove || u.specialCauseShiftHigh || u.specialCauseTrendIncreasing, F = u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && u.specialCauseFourOfFiveBelow || u.specialCauseShiftLow || u.specialCauseTrendDecreasing;
    if (s.collapseClusterRules && (u.specialCauseTwoOfThreeAbove && u.specialCauseFourOfFiveAbove && (u.specialCauseTwoOfThreeAbove = !1), u.specialCauseTwoOfThreeBelow && u.specialCauseFourOfFiveBelow && (u.specialCauseTwoOfThreeBelow = !1)), s.precedenceStrategy === "directional_first") {
      const N = (s.specialCauseTrendPoints ?? 6) - 1;
      let y = !1;
      if (N >= 3 && me(u.value)) {
        const D = [];
        for (let S = p; S >= 0 && D.length < N; S--) {
          const x = d[S].value;
          d[S].ghost || !me(x) || D.unshift(x);
        }
        if (D.length === N) {
          let S = 0;
          for (let x = 1; x < D.length; x++)
            n === "Down" ? D[x] <= D[x - 1] && S++ : n === "Up" && D[x] >= D[x - 1] && S++;
          y = S >= N - 2;
        }
      }
      const $ = n === "Up" ? P : F, j = n === "Up" ? F : P;
      if ($ && !j)
        u.variationIcon = "improvement";
      else if (!$ && j) {
        const D = u.specialCauseSinglePointAbove || u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeAbove || u.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && (u.specialCauseFourOfFiveAbove || u.specialCauseFourOfFiveBelow) || u.specialCauseShiftHigh || u.specialCauseShiftLow;
        s.emergingDirectionGrace && y && !D ? u.variationIcon = "neither" : u.variationIcon = "concern";
      } else $ && j && s.emergingDirectionGrace && (y || u.specialCauseTrendIncreasing || u.specialCauseTrendDecreasing) ? u.variationIcon = "improvement" : u.variationIcon = "neither";
    } else
      n === "Up" ? u.variationIcon = P ? "improvement" : F ? "concern" : "neither" : n === "Down" ? u.variationIcon = F ? "improvement" : P ? "concern" : "neither" : u.variationIcon = "neither";
    if (s.suppressIsolatedFavourablePoint && u.variationIcon === "improvement") {
      const v = n === "Up" && u.specialCauseSinglePointAbove, N = n === "Down" && u.specialCauseSinglePointBelow, y = n === "Up" && (u.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && u.specialCauseFourOfFiveAbove || u.specialCauseShiftHigh || u.specialCauseTrendIncreasing) || n === "Down" && (u.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && u.specialCauseFourOfFiveBelow || u.specialCauseShiftLow || u.specialCauseTrendDecreasing);
      (v || N) && !y && (u.variationIcon = "none", u.specialCauseImprovementValue = null);
    }
    const T = P || F;
    if (u.specialCauseImprovementValue = T && u.variationIcon === "improvement" ? u.value : null, u.specialCauseConcernValue = T && u.variationIcon === "concern" ? u.value : null, u.specialCauseNeitherValue = T && u.variationIcon === "neither" ? u.value : null, me(u.value) && u.mean !== null) {
      u.assuranceIcon = "none";
      const v = i[u.rowId - 1];
      if (me(v.target)) {
        const N = v.target;
        s.assuranceCapabilityMode && me(u.upperProcessLimit) && me(u.lowerProcessLimit) ? n === "Up" ? u.lowerProcessLimit !== null && u.lowerProcessLimit > N ? u.assuranceIcon = "pass" : u.upperProcessLimit !== null && u.upperProcessLimit < N ? u.assuranceIcon = "fail" : u.assuranceIcon = "none" : n === "Down" ? u.upperProcessLimit !== null && u.upperProcessLimit < N ? u.assuranceIcon = "pass" : u.lowerProcessLimit !== null && u.lowerProcessLimit > N ? u.assuranceIcon = "fail" : u.assuranceIcon = "none" : u.assuranceIcon = "none" : n === "Down" ? u.assuranceIcon = u.value <= N ? "pass" : "fail" : n === "Up" ? u.assuranceIcon = u.value >= N ? "pass" : "fail" : u.assuranceIcon = "none";
      }
    }
  }
  if ((s.minimumPointsWarning ?? !1) && !h) {
    const p = i.filter(
      (u) => !u.ghost && me(u.value)
    ).length;
    c.push({
      code: "insufficient_points_global",
      category: "data",
      severity: "warning",
      message: `Only ${p} non-ghost points available; minimum required is ${s.minimumPoints}. Limits and icons suppressed.`,
      context: { available: p, minimumRequired: s.minimumPoints }
    });
  }
  if (s.variationIconConflictWarning)
    for (const p of d)
      p.variationIcon === "improvement" && (p.specialCauseSinglePointAbove || p.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && p.specialCauseFourOfFiveAbove || p.specialCauseShiftHigh || p.specialCauseTrendIncreasing) && (p.specialCauseSinglePointBelow || p.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && p.specialCauseFourOfFiveBelow || p.specialCauseShiftLow || p.specialCauseTrendDecreasing) && c.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${p.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: p.rowId }
      });
  if (s.maximumPoints && Number.isFinite(s.maximumPoints)) {
    const p = s.maximumPoints;
    let u = 0;
    for (const P of d)
      !P.ghost && me(P.value) && u++, u > p && (P.mean = P.upperProcessLimit = P.lowerProcessLimit = null, P.upperTwoSigma = P.lowerTwoSigma = P.upperOneSigma = P.lowerOneSigma = null);
  }
  if (s.nullValueWarning && (t === "XmR" || t === "G")) {
    const p = i.filter(
      (u) => !u.ghost && (u.value === null || u.value === void 0 || !me(u.value))
    ).length;
    p && c.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (s.targetSuppressedWarning && (t === "T" || t === "G") && i.some((u) => me(u.target)) && c.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), s.ghostOnRareEventWarning && (t === "T" || t === "G")) {
    const p = i.filter((u) => u.ghost).length;
    p && c.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${p} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: p }
    });
  }
  if (s.partitionSizeWarnings && Object.entries(g).forEach(([p, u]) => {
    u < s.minimumPointsPartition && c.push({
      code: "insufficient_points_partition",
      category: "partition",
      severity: "warning",
      message: `Partition ${p} has only ${u} non-ghost point(s); below recommended ${s.minimumPointsPartition}.`,
      context: {
        partitionId: Number(p),
        count: u,
        minimum: s.minimumPointsPartition
      }
    });
  }), s.baselineSpecialCauseWarning) {
    const p = [];
    d.forEach((u) => {
      i[u.rowId - 1].baseline && (u.specialCauseSinglePointAbove || u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeAbove || u.specialCauseTwoOfThreeBelow || u.specialCauseFourOfFiveAbove || u.specialCauseFourOfFiveBelow || u.specialCauseShiftHigh || u.specialCauseShiftLow || u.specialCauseTrendIncreasing || u.specialCauseTrendDecreasing) && p.push(u.rowId);
    }), p.length && c.push({
      code: "baseline_with_special_cause",
      category: "baseline",
      severity: "warning",
      message: `Baseline set with special-cause present at row(s): ${p.join(", ")}.`,
      context: { rows: p }
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
  let k;
  if (s.baselineSuggest) {
    const p = d, u = s.baselineSuggestStabilityPoints, P = s.baselineSuggestMinGap, F = s.baselineSuggestMinDeltaSigma, T = s.baselineSuggestScoreThreshold, v = [];
    let N = 0;
    for (let y = 0; y < p.length; y++) {
      let $ = function(x) {
        return !!j[x] && !D?.[x];
      };
      const j = p[y];
      y > 0 && p[y - 1].partitionId !== j.partitionId && (N = y);
      const D = p[y - 1], S = [];
      ($("specialCauseShiftHigh") || $("specialCauseShiftLow")) && S.push({ reason: "shift", index: y }), ($("specialCauseTrendIncreasing") || $("specialCauseTrendDecreasing")) && S.push({ reason: "trend", index: y }), ($("specialCauseSinglePointAbove") || $("specialCauseSinglePointBelow")) && S.push({ reason: "point", index: y });
      for (const x of S) {
        if (x.index - N < P) continue;
        const b = Math.max(0, x.index - u), H = x.index - 1;
        if (H - b + 1 < u) continue;
        const B = x.index, L = x.index + u - 1;
        if (L >= p.length) continue;
        const C = p.slice(b, H + 1).map((Z) => Z.value).filter(me), w = p.slice(B, L + 1).map((Z) => Z.value).filter(me);
        if (C.length < u || w.length < u) continue;
        const R = p[x.index];
        let _ = null;
        if (me(R.upperProcessLimit) && me(R.mean)) {
          const Z = R.upperProcessLimit - R.mean;
          Z > 0 && (_ = Z / 3);
        }
        if (!_ || _ <= 0) continue;
        const A = Ft(C), q = Ft(w), M = q - A;
        if (Math.abs(M) < F * _) continue;
        const E = p.slice(B, L + 1).filter(
          (Z) => Z.variationIcon === "concern"
          /* Concern */
        ).length;
        if (E > 1) continue;
        const X = (Z) => {
          const ae = Ft(Z);
          return Z.length ? Z.reduce((K, ue) => K + (ue - ae) * (ue - ae), 0) / Z.length : 0;
        }, ee = X(C), Q = X(w);
        let W = x.reason === "shift" ? 90 : x.reason === "trend" ? 70 : 60;
        if (Q < ee && (W += 10), W -= E * 15, W < T) continue;
        const O = v.find((Z) => Z.index === x.index);
        if (O) {
          const Z = (ae) => ae === "shift" ? 3 : ae === "trend" ? 2 : 1;
          (Z(x.reason) > Z(O.reason) || W > O.score) && (O.reason = x.reason, O.score = W, O.deltaMean = M, O.oldMean = A, O.newMean = q, O.window = [B, L]);
        } else
          v.push({
            index: x.index,
            reason: x.reason,
            score: W,
            deltaMean: M,
            oldMean: A,
            newMean: q,
            window: [B, L]
          });
      }
      y > 0 && p[y - 1].partitionId !== p[y].partitionId && (N = y);
    }
    v.sort((y, $) => y.index - $.index), k = v;
  }
  return { rows: d, warnings: c, ...k ? { suggestedBaselines: k } : {} };
}
const is = {
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
function ls(e) {
  if (!e) return [];
  const t = [];
  return e.specialCauseSinglePointAbove && t.push("singlePointAbove"), e.specialCauseSinglePointBelow && t.push("singlePointBelow"), e.specialCauseTwoOfThreeAbove && t.push("twoOfThreeAbove"), e.specialCauseTwoOfThreeBelow && t.push("twoOfThreeBelow"), e.specialCauseFourOfFiveAbove && t.push("fourOfFiveAbove"), e.specialCauseFourOfFiveBelow && t.push("fourOfFiveBelow"), e.specialCauseShiftHigh && t.push("shiftHigh"), e.specialCauseShiftLow && t.push("shiftLow"), e.specialCauseTrendIncreasing && t.push("trendIncreasing"), e.specialCauseTrendDecreasing && t.push("trendDecreasing"), t;
}
function cs(e) {
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
function qh(e) {
  switch (e) {
    case At.Pass:
      return "Target met";
    case At.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Kh(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const lt = {
  improvement: { token: "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", hex: "#00B0F0" },
  concern: { token: "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", hex: "#E46C0A" },
  none: { token: "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", hex: "#490092" },
  neither: { token: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", hex: "#A6A6A6" }
};
function Mi(e) {
  return e ? lt[e]?.token ?? lt.neither.token : lt.neither.token;
}
function Xh(e) {
  return e ? lt[e]?.hex ?? lt.neither.hex : lt.neither.hex;
}
const Li = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: o,
  dateFormatter: s
}) => {
  const i = Et(), l = Bt(), [d, c] = U.useState(null), [f, h] = U.useState(!1), m = U.useRef(null);
  U.useEffect(() => {
    if (i) {
      if (i.focused && (c(i.focused), m.current && (cancelAnimationFrame(m.current), m.current = null)), !i.focused && !f) {
        const ae = requestAnimationFrame(() => {
          c(null), m.current = null;
        });
        m.current = ae;
      }
      return () => {
        m.current && (cancelAnimationFrame(m.current), m.current = null);
      };
    }
  }, [i, i?.focused, f]);
  const g = i && (i.focused || (f ? d : null) || d), [k, p] = U.useState(!1);
  U.useEffect(() => {
    const ae = requestAnimationFrame(() => p(!0));
    return () => cancelAnimationFrame(ae);
  }, [g?.index]);
  const u = l?.innerWidth ?? 0, P = l?.innerHeight ?? 0, F = g ? Math.min(Math.max(g.clientX, 0), u) : 0, T = g ? Math.min(Math.max(g.clientY, 0), P) : 0, N = l.ref?.current;
  if (!g)
    return null;
  const y = e?.[g.index], $ = ls(y).map((ae) => is[ae].tooltip), j = g.x instanceof Date ? g.x : new Date(g.x), D = s ? s(j) : j.toDateString(), S = o ? `${o}` : "", x = a || S ? `${g.y}${S ? "" + S : " "}${a ? " " + a : ""}` : `${g.y}`, b = cs(y?.variationIcon), H = qh(y?.assuranceIcon), B = Kh(
    t.mean ?? null,
    t.sigma,
    g.y
  ), L = n ? n(g.index, { x: g.x, y: g.y }) : void 0, C = b || H || B, w = $.length > 0, R = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", _ = Mi(y?.variationIcon), A = 6.2, M = [
    L || "",
    `${D} • ${x}`
  ].filter(Boolean).reduce(
    (ae, K) => Math.max(ae, K.length * A + 32),
    0
  ), z = 200, E = 440, X = Math.min(E, Math.max(z, M));
  let ee = F + 12, W = (l.margin?.top ?? 0) + T + 16;
  ee + X > u && (ee = F - -60 - X), ee < 0 && (ee = Math.max(0, u - X));
  const O = g ? `spc-tooltip-${g.index}` : "spc-tooltip", Z = N ? Wl(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: O,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (k ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: ee,
          top: W,
          width: X,
          maxWidth: E,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": k ? "false" : "true",
        "data-floating": !0,
        "data-placement": ee + X + 12 > u ? "left" : "right",
        onPointerEnter: () => {
          h(!0), m.current && (cancelAnimationFrame(m.current), m.current = null);
        },
        onPointerLeave: () => {
          if (h(!1), !i?.focused) {
            const ae = requestAnimationFrame(() => {
              c(null), m.current = null;
            });
            m.current = ae;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: D })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: x })
          ] }),
          C && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: b && (b.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              et,
              {
                text: b,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : b.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              et,
              {
                text: b,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : /* @__PURE__ */ r.jsx(
              et,
              {
                text: b,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            )) })
          ] }),
          H && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const ae = H.toLowerCase(), ue = !(ae.includes("not met") || ae.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(ae);
              return /* @__PURE__ */ r.jsx(
                et,
                {
                  text: H,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${ue ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${H}`
                }
              );
            })() })
          ] }),
          B && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              et,
              {
                text: (() => {
                  const ae = B.toLowerCase();
                  return ae.startsWith("within 1") ? "≤1σ" : ae.startsWith("1–2") ? "1–2σ" : ae.startsWith("2–3") ? "2–3σ" : ae.startsWith(">3") ? ">3σ" : B;
                })(),
                color: B.includes(">3") ? "orange" : B.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${B}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          w && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: $.map((ae) => {
                  const K = b ? b.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : b.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--rule" : "fdp-spc-tag--rule";
                  return /* @__PURE__ */ r.jsx(
                    et,
                    {
                      text: ae,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${K}`
                    },
                    ae
                  );
                })
              }
            )
          ] })
        ] })
      }
    ),
    N
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
            cx: F,
            cy: T,
            r: 7,
            fill: "none",
            stroke: R,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: F,
            cy: T,
            r: 5,
            fill: "#000",
            stroke: R,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: F,
            cy: T,
            r: 2.5,
            fill: _,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        Z
      ]
    }
  );
};
let Sa = null;
try {
  Sa = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const st = (e, t) => {
  if (!Sa) return t;
  const n = e.split(".");
  let a = Sa;
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
const Zh = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Jh = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Je = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Je || {}), we = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(we || {}), Ke = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(Ke || {}), Ie = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Ie || {});
const Qh = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [n, a, o].map((l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4));
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, ds = {
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
Object.values(ds).forEach((e) => {
  e.text || (e.text = Qh(e.hex));
});
const Ai = (e) => ds[e], us = (e) => ds[e].judgement || "none", wo = {
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
function ep(e, t) {
  let n;
  return e === "common_cause" ? n = wo.common : n = wo.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
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
    return !d && s.polarity && (l === Ie.SpecialCauseImproving || l === Ie.SpecialCauseDeteriorating) && (l === Ie.SpecialCauseImproving ? d = s.polarity === Je.LowerIsBetter ? we.Lower : we.Higher : d = s.polarity === Je.LowerIsBetter ? we.Higher : we.Lower), d || (d = l === Ie.SpecialCauseImproving ? we.Higher : l === Ie.SpecialCauseDeteriorating ? we.Lower : we.Higher), {
      state: l,
      direction: d,
      polarity: s.polarity ?? Je.ContextDependent
    };
  }
  if (e.state !== void 0) {
    const s = e;
    let i = s.trend;
    return !i && (s.state === Ie.SpecialCauseImproving || s.state === Ie.SpecialCauseDeteriorating) && s.polarity && (s.state === Ie.SpecialCauseImproving ? i = s.polarity === Je.LowerIsBetter ? we.Lower : we.Higher : i = s.polarity === Je.LowerIsBetter ? we.Higher : we.Lower), i || (s.state === Ie.SpecialCauseImproving ? i = we.Higher : s.state === Ie.SpecialCauseDeteriorating ? i = we.Lower : i = we.Higher), {
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
  return t.judgement === Ke.Improving ? o = t.polarity === Je.LowerIsBetter ? we.Lower : we.Higher : t.judgement === Ke.Deteriorating ? o = t.polarity === Je.LowerIsBetter ? we.Higher : we.Lower : o = t.trend ?? we.Higher, { state: a, direction: o, polarity: t.polarity };
};
function tp(e, t) {
  const { state: n, direction: a, polarity: o } = Bi(e), s = us(n), i = a === we.Higher ? "above" : "below", l = a === we.Higher ? "upwards" : "downwards", d = (() => {
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
] }), fs = ({
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
  const h = Hn(), m = Hn(), {
    start: g,
    mid: k,
    end: p,
    triStart: u,
    triMid: P,
    triEnd: F
  } = Fi(), { state: T, direction: v, polarity: N } = Te(
    () => Bi(e),
    [e]
  ), y = Te(() => Ai(T), [T]), $ = Te(() => us(T), [T]), j = $ === Ke.Improving || $ === Ke.Deteriorating;
  let D = "";
  a && j && (d === "polarity" ? N === Je.HigherIsBetter ? D = "H" : N === Je.LowerIsBetter ? D = "L" : D = "" : D = v === we.Higher ? "H" : "L"), c !== void 0 && (D = c);
  const S = T !== Ie.CommonCause, x = T === Ie.SpecialCauseNoJudgement, b = st("common-cause", "#A6A6A6"), H = S ? y.hex : b, B = Te(
    () => ep(T, v),
    [T, v]
  ), L = n || `${y.label}${D ? v === we.Higher ? " – Higher" : " – Lower" : ""}`, C = tp(
    e
  );
  if (i === "triangleWithRun") {
    const q = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], M = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let z = null;
    T === Ie.SpecialCauseImproving || T === Ie.SpecialCauseDeteriorating ? z = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (v === we.Higher ? q : M).map((ue) => ue.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 6,
        transform: v === we.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : T === Ie.SpecialCauseNoJudgement && (z = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: v === we.Higher ? q.map((ue) => ue.join(",")).join(" ") : M.map((ue) => ue.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 6,
        transform: v === we.Higher ? "translate(0,-6)" : "translate(0,6)"
      }
    ));
    const E = Math.max(0, Math.min(5, Math.floor(l || 0))), X = T === Ie.CommonCause ? 160 : v === we.Higher ? 210 : 70, ee = 10, Q = 26, W = 150 - 2 * Q, O = T === Ie.SpecialCauseImproving ? st("improvement", "#00B0F0") : T === Ie.SpecialCauseDeteriorating ? st("concern", "#E46C0A") : b, Z = Array.from({ length: 5 }).map((ue, de) => {
      const pe = (T === Ie.SpecialCauseImproving || T === Ie.SpecialCauseDeteriorating) && de >= 5 - E ? O : b;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: W + de * Q,
          cy: X,
          r: ee,
          fill: pe,
          stroke: pe,
          strokeWidth: 1
        },
        de
      );
    }), ae = ia(
      y.hex,
      h,
      m,
      o,
      s,
      [
        { offset: "0%", opacity: u },
        { offset: "75%", opacity: P },
        { offset: "100%", opacity: F }
      ]
    ), K = T === Ie.CommonCause || v === we.Higher ? "translate(0,-10)" : "translate(0,20)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": L,
        "aria-description": C,
        ...f,
        children: [
          ae,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: s ? `url(#${m})` : "#ffffff",
              ...o ? { filter: `url(#${h})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: y.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsxs("g", { transform: K, children: [
            z,
            D && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: v === we.Higher ? 150 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: D
              }
            ),
            Z
          ] })
        ]
      }
    );
  }
  if (i === "triangle") {
    const q = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], M = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], z = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let E = null;
    T === Ie.SpecialCauseImproving || T === Ie.SpecialCauseDeteriorating ? E = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (v === we.Higher ? q : M).map((ee) => ee.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 8,
        transform: v === we.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : T === Ie.SpecialCauseNoJudgement ? E = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: v === we.Higher ? q.map((ee) => ee.join(",")).join(" ") : M.map((ee) => ee.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 8,
        transform: v === we.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : T === Ie.CommonCause && (E = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: z[0][0],
        y1: z[0][1],
        x2: z[1][0],
        y2: z[1][1],
        stroke: y.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const X = ia(
      y.hex,
      h,
      m,
      o,
      s,
      [
        { offset: "0%", opacity: u },
        { offset: "65%", opacity: P },
        { offset: "100%", opacity: F }
      ]
    );
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": L,
        "aria-description": C,
        ...f,
        children: [
          X,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: s ? `url(#${m})` : "#ffffff",
              ...o ? { filter: `url(#${h})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: y.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          E,
          D && (T === Ie.SpecialCauseImproving || T === Ie.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: v === we.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: D
            }
          )
        ]
      }
    );
  }
  const w = ia(
    y.hex,
    h,
    m,
    o,
    s,
    [
      { offset: "0%", opacity: g },
      { offset: "65%", opacity: k },
      { offset: "100%", opacity: p }
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": L,
      "aria-description": C,
      ...f,
      children: [
        w,
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${m})` : "#ffffff",
            ...o ? { filter: `url(#${h})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: y.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        D && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: y.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: v === we.Lower ? "325" : "156", children: D })
          }
        ),
        x ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: y.hex,
            ...v === we.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          B.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: b,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${B.map((R) => `${R.cx} ${R.cy}`).join(" L ")}`
            }
          ),
          B.map((R, _) => {
            const q = _ >= B.length - 2 && S ? H : b, M = q;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: M,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: q,
                cx: R.cx,
                cy: R.cy,
                r: 16
              },
              _
            );
          })
        ] })
      ]
    }
  );
};
fs.displayName = "SPCVariationIcon";
const hs = ({
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
  const c = Hn(), f = Hn(), { start: h, mid: m, end: g } = Fi(), k = o || Zh[e], p = (i || Jh[e]).slice(0, 2), u = n || `Assurance ${e}`;
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
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: k, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: k, stopOpacity: parseFloat(m) }),
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
            fill: k,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            x: 0,
            y: 0,
            transform: "translate(121.01, 32) scale(0.5, 0.5)",
            textAnchor: "middle",
            children: /* @__PURE__ */ r.jsx("tspan", { x: 60, y: 184, children: p })
          }
        ),
        l && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          e === Ut.Fail ? /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "fail-line",
              stroke: k,
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
              stroke: k,
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
              stroke: k,
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
hs.displayName = "SPCAssuranceIcon";
const np = ({
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
  showIcons: m = !1,
  showEmbeddedIcon: g = !0,
  targets: k,
  baselines: p,
  ghosts: u,
  settings: P,
  narrationContext: F,
  gradientSequences: T = !1,
  processLineWidth: v = 2
}) => {
  const N = U.useMemo(() => {
    const q = e.map((M, z) => ({
      x: M.x,
      value: M.y,
      target: k?.[z] ?? void 0,
      baseline: p?.[z] ?? void 0,
      ghost: u?.[z] ?? void 0
    }));
    try {
      return Ii({
        chartType: c,
        metricImprovement: f,
        data: q,
        settings: P
      });
    } catch {
      return null;
    }
  }, [
    e,
    k,
    p,
    u,
    c,
    f,
    P
  ]), y = N?.rows.slice().reverse().find((q) => q.mean != null), $ = y?.mean ?? null, j = y?.upperProcessLimit ?? null, D = y?.lowerProcessLimit ?? null, S = y?.upperOneSigma ?? null, x = y?.lowerOneSigma ?? null, b = y?.upperTwoSigma ?? null, H = y?.lowerTwoSigma ?? null, B = $ != null && S != null ? Math.abs(S - $) : 0, L = U.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), C = U.useMemo(() => {
    const M = [...e.map((z) => z.y)];
    if ([$, j, D, S, x, b, H].forEach((z) => {
      z != null && M.push(z);
    }), k && k.forEach((z) => {
      typeof z == "number" && !isNaN(z) && M.push(z);
    }), !!M.length)
      return [Math.min(...M), Math.max(...M)];
  }, [e, $, j, D, S, x, b, H, k]), w = U.useMemo(() => {
    if (!(l || F?.measureUnit) && e.length)
      return e.every((q) => q.y >= 0 && q.y <= 1) ? "%" : void 0;
  }, [l, F?.measureUnit, e]), R = l ?? F?.measureUnit ?? w, _ = U.useMemo(() => R ? { ...F || {}, measureUnit: R } : F, [F, R]), A = U.useMemo(() => {
    if (!g || !N?.rows?.length) return null;
    const q = N.rows, M = P?.minimumPoints ?? 13;
    if (q.filter((ue) => !ue.ghost && ue.value != null).length < M) return null;
    let E = -1;
    for (let ue = q.length - 1; ue >= 0; ue--) {
      const de = q[ue];
      if (de && de.value != null && !de.ghost) {
        E = ue;
        break;
      }
    }
    if (E === -1) return null;
    const X = q[E], ee = X.variationIcon, Q = X.assuranceIcon, W = Q === At.Pass ? Ut.Pass : Q === At.Fail ? Ut.Fail : Ut.Uncertain;
    let O;
    if (ee === Ge.None) {
      const ue = X.specialCauseSinglePointAbove, de = X.specialCauseSinglePointBelow;
      f === zt.Up ? ue ? O = we.Higher : de && (O = we.Lower) : f === zt.Down ? de ? O = we.Lower : ue && (O = we.Higher) : O = we.Higher;
    }
    let Z;
    switch (ee) {
      case Ge.Improvement:
        Z = Ke.Improving;
        break;
      case Ge.Concern:
        Z = Ke.Deteriorating;
        break;
      case Ge.None:
        Z = Ke.No_Judgement;
        break;
      case Ge.Neither:
      default:
        Z = Ke.None;
    }
    let ae;
    f === zt.Up ? ae = Je.HigherIsBetter : f === zt.Down ? ae = Je.LowerIsBetter : ae = Je.ContextDependent;
    const K = 80;
    return /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", gap: 12, marginRight: 16 }, children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "fdp-spc-chart__embedded-icon",
          "data-variation": String(ee),
          "data-variation-judgement": String(Z),
          "data-trend-raw": O ? String(O) : "none",
          "data-trend": O ? String(O) : "none",
          "data-polarity": String(ae ?? "unknown"),
          style: { width: K, height: K },
          children: /* @__PURE__ */ r.jsx(
            fs,
            {
              dropShadow: !1,
              data: { judgement: Z, polarity: ae, ...O ? { trend: O } : {} },
              letterMode: "direction",
              size: K
            }
          )
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "fdp-spc-chart__embedded-assurance-icon",
          "data-assurance": String(Q),
          style: { width: K, height: K },
          children: /* @__PURE__ */ r.jsx(hs, { status: W, size: K, dropShadow: !1 })
        }
      )
    ] }, `embedded-icon-${E}`);
  }, [g, N?.rows, f, P?.minimumPoints, k]);
  return /* @__PURE__ */ r.jsxs("div", { className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper", children: [
    g && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: A }),
    /* @__PURE__ */ r.jsx(
      Jf,
      {
        height: n,
        ariaLabel: t,
        margin: { bottom: 48, left: 56, right: 16, top: 12 },
        className: void 0,
        children: /* @__PURE__ */ r.jsx(Qf, { series: L, yDomain: C, children: /* @__PURE__ */ r.jsx(
          rp,
          {
            series: L,
            showPoints: o,
            announceFocus: s,
            limits: { mean: $, ucl: j, lcl: D, sigma: B, onePos: S, oneNeg: x, twoPos: b, twoNeg: H },
            showZones: a,
            highlightOutOfControl: d,
            engineRows: N?.rows || null,
            enableRules: h,
            showIcons: m,
            narrationContext: _,
            metricImprovement: f,
            gradientSequences: T,
            processLineWidth: v,
            effectiveUnit: R
          }
        ) })
      }
    )
  ] });
}, rp = ({
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
  effectiveUnit: m
}) => {
  const g = Xt(), k = Bt();
  if (!g) return null;
  const { xScale: p, yScale: u } = g, P = Et(), F = e[0]?.data || [], T = U.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const w = /* @__PURE__ */ new Set();
    return F.forEach((R, _) => {
      (a.ucl != null && R.y > a.ucl || a.lcl != null && R.y < a.lcl) && w.add(_);
    }), w;
  }, [F, a.ucl, a.lcl]), v = U.useMemo(() => {
    if (!i) return null;
    const w = {};
    return i.forEach((R, _) => {
      if (R.value == null || R.ghost) return;
      const A = R.specialCauseSinglePointAbove || R.specialCauseSinglePointBelow || R.specialCauseTwoOfThreeAbove || R.specialCauseTwoOfThreeBelow || R.specialCauseFourOfFiveAbove || R.specialCauseFourOfFiveBelow || R.specialCauseShiftHigh || R.specialCauseShiftLow || R.specialCauseTrendIncreasing || R.specialCauseTrendDecreasing;
      w[_] = {
        variation: R.variationIcon,
        assurance: R.assuranceIcon,
        special: A,
        concern: R.variationIcon === Ge.Concern,
        improvement: R.variationIcon === Ge.Improvement
      };
    }), w;
  }, [i]), N = U.useMemo(() => {
    if (!i || !i.length) return null;
    const w = [];
    for (const _ of i)
      typeof _.target == "number" && !isNaN(_.target) && w.push(_.target);
    if (!w.length) return null;
    const R = w[0];
    return w.every((_) => _ === R) ? R : null;
  }, [i]), y = U.useMemo(() => {
    if (!v) return [];
    const w = F.map((R, _) => {
      const A = v?.[_];
      return A?.concern ? "concern" : A?.improvement ? "improvement" : "common";
    });
    for (let R = 1; R < w.length - 1; R++)
      (w[R] === "concern" || w[R] === "improvement") && w[R - 1] === "common" && w[R + 1] === "common" && (w[R] = "common");
    for (let R = 1; R < w.length - 1; R++) {
      const _ = w[R - 1], A = w[R], q = w[R + 1];
      A !== "common" && _ !== "common" && q !== "common" && _ === q && A !== _ && (w[R] = "common");
    }
    return w;
  }, [v, F]), $ = U.useMemo(() => {
    if (!f || !y.length) return [];
    const w = [];
    let R = 0;
    for (let _ = 1; _ <= y.length; _++)
      if (_ === y.length || y[_] !== y[R]) {
        const q = y[R], M = _ - 1, z = M - R + 1;
        q === "common" ? w.push({ start: R, end: M, category: "common" }) : z > 1 && w.push({ start: R, end: M, category: q }), R = _;
      }
    return w;
  }, [f, y]), j = U.useMemo(() => F.map((w) => p(w.x instanceof Date ? w.x : new Date(w.x))), [F, p]), D = p.range()[1], S = U.useMemo(() => $.length ? /* @__PURE__ */ r.jsx("defs", { children: $.map((w, R) => {
    const _ = `spc-seq-grad-${R}`;
    let A, q = 0.28, M = 0.12, z = 0.045;
    switch (w.category) {
      case "concern":
        A = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", q = 0.28, M = 0.12, z = 0.045;
        break;
      case "improvement":
        A = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", q = 0.26, M = 0.11, z = 0.045;
        break;
      default:
        A = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
    }
    return /* @__PURE__ */ r.jsxs("linearGradient", { id: _, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: A, stopOpacity: q }),
      /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: A, stopOpacity: M }),
      /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: A, stopOpacity: z })
    ] }, _);
  }) }) : null, [$]), x = U.useMemo(() => {
    if (!$.length) return null;
    const [w] = u.domain(), R = u(w), _ = $.map((A, q) => {
      const M = A.start, z = A.end, E = j[M], X = j[z], ee = M > 0 ? j[M - 1] : E, Q = z < j.length - 1 ? j[z + 1] : X;
      let W = M === 0 ? Math.max(0, E - (j.length > 1 ? (j[1] - E) / 2 : 10)) : (ee + E) / 2, O = z === j.length - 1 ? Math.min(D, X + (j.length > 1 ? (X - j[j.length - 2]) / 2 : 10)) : (X + Q) / 2, Z = null, ae = null;
      if (A.category === "common")
        M > 0 && (W = j[M - 1], Z = u(F[M - 1].y)), z < F.length - 1 && (O = j[z + 1], ae = u(F[z + 1].y));
      else if (W = E, M > 0) {
        const de = y[M - 1];
        de !== "common" && de !== A.category && (W = j[M - 1], Z = u(F[M - 1].y));
      }
      let K = `M ${W} ${R}`;
      const ue = u(F[M].y);
      Z != null ? (K += ` L ${W} ${Z}`, E !== W && (K += ` L ${E} ${ue}`)) : (K += ` L ${W} ${ue}`, E !== W && (K += ` L ${E} ${ue}`));
      for (let de = M; de <= z; de++) {
        const xe = j[de], pe = u(F[de].y);
        K += ` L ${xe} ${pe}`;
      }
      return A.category === "common" && ae != null ? (O !== X && (K += ` L ${O} ${ae}`), K += ` L ${O} ${R} Z`) : K += ` L ${X} ${R} L ${O} ${R} Z`, /* @__PURE__ */ r.jsx(
        "path",
        {
          d: K,
          fill: `url(#spc-seq-grad-${q})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${q}`
      );
    });
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: _ });
  }, [$, j, D, u, F]), b = U.useMemo(() => {
    if (!c?.timeframe && F.length >= 2) {
      const w = F.map((z) => z.x instanceof Date ? z.x : new Date(z.x)), R = new Date(Math.min(...w.map((z) => z.getTime()))), _ = new Date(Math.max(...w.map((z) => z.getTime()))), A = Math.round((_.getTime() - R.getTime()) / 864e5) || 0;
      if (A < 14)
        return `The chart shows a timeframe of ${A + 1} days`;
      const q = Math.round(A / 7);
      return q < 20 ? `The chart shows a timeframe of ${q} weeks` : `The chart shows a timeframe of ${(_.getFullYear() - R.getFullYear()) * 12 + (_.getMonth() - R.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, F]), H = (w) => {
    const R = w % 10, _ = w % 100;
    return R === 1 && _ !== 11 ? `${w}st` : R === 2 && _ !== 12 ? `${w}nd` : R === 3 && _ !== 13 ? `${w}rd` : `${w}th`;
  }, B = (w) => `${H(w.getDate())} ${w.toLocaleString("en-GB", { month: "long" })}, ${w.getFullYear()}`, L = U.useCallback(
    ({ index: w, x: R, y: _ }) => {
      const A = i?.[w], q = R instanceof Date ? R : new Date(R), M = B(q), z = c?.measureUnit ? ` ${c.measureUnit}` : "", E = c?.measureName ? ` ${c.measureName}` : "";
      if (!A)
        return `General summary is: ${b ? b + ". " : ""}Point ${w + 1}, ${M}, ${_}${z}${E}`;
      const X = cs(A.variationIcon) || "Variation", ee = ls(A), Q = ee.length ? ` Rules: ${[...new Set(ee.map((O) => is[O].narration))].join("; ")}.` : " No special cause rules.", W = [];
      return c?.measureName && W.push(`Measure: ${c.measureName}.`), c?.datasetContext && W.push(`${c.datasetContext}.`), c?.organisation && W.push(`Organisation: ${c.organisation}.`), c?.additionalNote && W.push(c.additionalNote), [
        "General summary is:",
        ...W,
        `Point ${w + 1} recorded on `,
        M + ",",
        `with a value of ${_} ${z}${E}`,
        X + ".",
        Q
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, b]
  ), C = U.useCallback(
    (w, R) => i?.[w] ? L({
      index: w,
      seriesId: "process",
      x: R.x instanceof Date ? R.x : new Date(R.x),
      y: R.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, L]
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
            width: g.xScale.range()[1] + 56 + 16,
            height: g.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(mo, { type: "x" }),
              /* @__PURE__ */ r.jsx(mo, { type: "y" }),
              /* @__PURE__ */ r.jsx(eh, { axis: "y" }),
              S,
              x,
              a.mean != null && /* @__PURE__ */ r.jsx(
                "line",
                {
                  className: "fdp-spc__cl",
                  x1: 0,
                  x2: p.range()[1],
                  y1: u(a.mean),
                  y2: u(a.mean),
                  "aria-hidden": "true"
                }
              ),
              N != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ r.jsx(r.Fragment, {}),
              a.ucl != null && /* @__PURE__ */ r.jsx(
                "line",
                {
                  className: "fdp-spc__limit fdp-spc__limit--ucl",
                  x1: 0,
                  x2: p.range()[1],
                  y1: u(a.ucl),
                  y2: u(a.ucl),
                  "aria-hidden": "true",
                  strokeWidth: 2
                }
              ),
              a.lcl != null && /* @__PURE__ */ r.jsx(
                "line",
                {
                  className: "fdp-spc__limit fdp-spc__limit--lcl",
                  x1: 0,
                  x2: p.range()[1],
                  y1: u(a.lcl),
                  y2: u(a.lcl),
                  "aria-hidden": "true",
                  strokeWidth: 2
                }
              ),
              N != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: p.range()[1],
                    y1: u(N),
                    y2: u(N),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: p.range()[0] - 7,
                    y: u(N) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      N,
                      " ",
                      m || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              o && a.mean != null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                a.onePos != null && /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: 0,
                    x2: p.range()[1],
                    y1: u(a.onePos),
                    y2: u(a.onePos),
                    "aria-hidden": "true",
                    strokeWidth: 2
                  }
                ),
                a.oneNeg != null && /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: 0,
                    x2: p.range()[1],
                    y1: u(a.oneNeg),
                    y2: u(a.oneNeg),
                    "aria-hidden": "true",
                    strokeWidth: 2
                  }
                ),
                a.twoPos != null && /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: 0,
                    x2: p.range()[1],
                    y1: u(a.twoPos),
                    y2: u(a.twoPos),
                    "aria-hidden": "true",
                    strokeWidth: 2
                  }
                ),
                a.twoNeg != null && /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: 0,
                    x2: p.range()[1],
                    y1: u(a.twoNeg),
                    y2: u(a.twoNeg),
                    "aria-hidden": "true",
                    strokeWidth: 2
                  }
                )
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
                  parseX: (w) => w.x instanceof Date ? w.x : new Date(w.x),
                  smooth: !1,
                  strokeWidth: h
                }
              ),
              t && F.map((w, R) => {
                const _ = p(w.x instanceof Date ? w.x : new Date(w.x)), A = u(w.y), q = T.has(R), M = v?.[R], z = [
                  "fdp-spc__point",
                  q && s ? "fdp-spc__point--ooc" : null,
                  l && M?.special && M.concern ? "fdp-spc__point--sc-concern" : null,
                  l && M?.special && M.improvement ? "fdp-spc__point--sc-improvement" : null,
                  M?.assurance === At.Pass ? "fdp-spc__point--assurance-pass" : null,
                  M?.assurance === At.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), E = `Point ${R + 1} value ${w.y}` + (M?.special ? " special cause" : "") + (M?.variation === Ge.Improvement ? " improving" : M?.variation === Ge.Concern ? " concern" : ""), X = P?.focused?.index === R;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: _,
                    cy: A,
                    r: 5,
                    className: z,
                    "data-variation": M?.variation,
                    "data-assurance": M?.assurance,
                    "aria-label": E,
                    ...X ? { "aria-describedby": `spc-tooltip-${R}` } : {}
                  },
                  R
                );
              }),
              d && l && v && F.map((w, R) => {
                const _ = v[R];
                if (!_ || !(_.concern || _.improvement)) return null;
                const A = p(w.x instanceof Date ? w.x : new Date(w.x)), q = u(w.y);
                let M = q - 10;
                const z = 12, E = u.range()[0] - 4;
                M < z && (M = Math.min(q + 16, E));
                const X = p.range()[1], ee = Math.min(Math.max(A, 0), X - 0);
                return /* @__PURE__ */ r.jsx(
                  "text",
                  {
                    x: ee,
                    y: M,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${_.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: _.concern ? "!" : "★"
                  },
                  `icon-${R}`
                );
              }),
              k && /* @__PURE__ */ r.jsx(
                ap,
                {
                  width: p.range()[1],
                  height: u.range()[0]
                }
              ),
              /* @__PURE__ */ r.jsx(
                Li,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: C,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (w) => B(w)
                }
              )
            ] })
          }
        ),
        n && /* @__PURE__ */ r.jsx(
          Eh,
          {
            format: (w) => L({ ...w, x: w.x instanceof Date ? w.x : new Date(w.x) })
          }
        )
      ]
    }
  ) });
}, ap = ({
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
}, Ax = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: At,
  AssuranceResult: Ut,
  Direction: we,
  ImprovementDirection: zt,
  MetricPolarity: Je,
  SPCAssuranceIcon: hs,
  SPCChart: np,
  SPCTooltipOverlay: Li,
  SPCVariationIcon: fs,
  VARIATION_COLOR_TOKENS: lt,
  VariationIcon: Ge,
  VariationJudgement: Ke,
  VariationState: Ie,
  buildSpc: Ii,
  extractRuleIds: ls,
  getVariationColorHex: Xh,
  getVariationColorToken: Mi,
  getVariationColour: Ai,
  getVariationTrend: us,
  ruleGlossary: is,
  variationLabel: cs
}, Symbol.toStringTag, { value: "Module" })), sp = "150ms", op = "300ms", ip = "500ms", lp = "cubic-bezier(0.4, 0, 1, 1)", cp = "cubic-bezier(0, 0, 0.2, 1)", dp = "cubic-bezier(0.4, 0, 0.2, 1)", up = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", fp = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", hp = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", pp = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", mp = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", gp = "1px", xp = "2px", bp = "4px", yp = "4px", vp = "4px", wp = "2px", _p = "1px", Sp = "0px", kp = "4px", Cp = "8px", jp = "12px", Ei = "#d8dde0", Pi = "#4c6272", Ri = "#d8dde0", Hi = "#aeb7bd", zi = "#d5281b", Wi = "#005eb8", Oi = "#ffffff", Ui = "#212b32", Gi = "#007f3b", Yi = "#330072", Vi = "#7c2855", qi = "#d5281b", Ki = "#ffeb3b", Xi = "#fff9c4", Zi = "#ffb81c", Ji = "#ed8b00", Qi = "#00a499", el = "#ae2573", tl = "#4c6272", nl = "#768692", rl = "#aeb7bd", al = "#d8dde0", sl = "#f0f4f5", Np = "#212b32", Tp = "#4c6272", $p = "#ffffff", Dp = "#212b32", Ip = "#005eb8", Mp = "#7c2855", Lp = "#003087", Fp = "#330072", Ap = "#ffeb3b", Bp = "#212b32", Ep = "#d8dde0", Pp = "#ffffff33", Rp = "#d5281b", Hp = "#4c6272", zp = "#ffffff", Wp = "#007f3b", Op = "#ffffff", Up = "#006530", Gp = "#004021", Yp = "#004021", Vp = "#00000000", qp = "#ffffff", Kp = "#005eb8", Xp = "#005eb8", Zp = "#d9e5f2", Jp = "#c7daf0", Qp = "#005eb8", em = "#ffffff", tm = "#212b32", nm = "#d9dde0", rm = "#b3bcc2", am = "#b3bcc2", sm = "#d5281b", om = "#aa2016", im = "#6a140e", lm = "#6a140e", cm = "#005eb8", dm = "#004b93", um = "#002f5c", fm = "#002f5c", hm = "8px", pm = "16px", mm = "12px", gm = "16px", xm = "4px", bm = "40px", ym = "4px", vm = "40px", wm = "12px", _m = "16px", Sm = "32px", km = "16px", Cm = "20px", jm = "28px", Nm = "9px", Tm = "2px", $m = "16px", Dm = "24px", Im = "8px", Mm = "24px", Lm = "16px", Fm = "4px", Am = "4px", Bm = "4px", Em = "8px", Pm = "4px", Rm = "16px", Hm = "#007f3b", zm = "#006530", Wm = "#004021", Om = "#d8dde0", Um = "#ffffff", Gm = "#768692", Ym = "#00000000", Vm = "#ffeb3b", qm = "#00000000", Km = "#ffffff", Xm = "#d9e5f2", Zm = "#c7daf0", Jm = "#005eb8", Qm = "#005eb8", ol = "8px", il = "16px", ll = "12px", cl = "16px", eg = "2px", tg = "4px", ng = "4px", rg = "600", ag = "#ffffff", sg = "#d8dde0", og = "#aeb7bd", ig = "#f0f4f5", lg = "#212b32", cg = "#212b32", dg = "#005eb8", dl = "16px", ul = "32px", fl = "16px", ug = "1px", fg = "4px", hg = "none", pg = "0 2px 4px rgba(0, 0, 0, 0.1)", mg = "#ffffff", gg = "#ffffff", xg = "#d8dde0", bg = "#ffffff", yg = "#4c6272", vg = "#ffeb3b", wg = "#d5281b", _g = "#aeb7bd", Sg = "#212b32", kg = "#4c6272", Cg = "#768692", jg = "#212b32", Ng = "#ffffff", Tg = "600", $g = "#d5281b", Dg = "600", Ig = "#4c6272", hl = "4px", pl = "40px", ml = "40px", gl = "12px", Mg = "2px", Lg = "4px", Fg = "0px", Ag = "16px", Bg = "18px", Eg = "24px", Pg = "32px", Rg = "34px", Hg = "32px", zg = "40px", Wg = "48px", Og = "5.4ex", Ug = "7.2ex", Gg = "9ex", Yg = "10.8ex", Vg = "20ex", qg = "38ex", Kg = "56ex", Xg = "44px", Zg = "40px", Jg = "1020px", Qg = "100%", e0 = "50%", t0 = "33.333%", n0 = "25%", r0 = "20%", a0 = "320px", s0 = "641px", o0 = "1025px", i0 = "1280px", l0 = "960px", c0 = "32px", d0 = "16px", u0 = "#d5281b", f0 = "#d5281b", h0 = "#ffffff", p0 = "#007f3b", m0 = "#007f3b", g0 = "#ffffff", x0 = "#ffeb3b", b0 = "#ffeb3b", y0 = "#212b32", v0 = "#005eb8", w0 = "#005eb8", _0 = "#ffffff", S0 = "#d8dde0", k0 = "#aeb7bd", C0 = "#768692", j0 = "0 4px 0 #004021", N0 = "0 4px 0 #005eb8", T0 = "0 4px 0 #6a140e", $0 = "0 4px 0 #ffeb3b", D0 = "none", I0 = "0 2px 4px rgba(0, 0, 0, 0.1)", M0 = "4px", L0 = "0px", F0 = "solid", A0 = "0 0 0 3px #ffeb3b", B0 = "0 0 0 3px #ffeb3b", E0 = "none", P0 = "0 1px 3px rgba(0, 0, 0, 0.12)", R0 = "0 2px 6px rgba(0, 0, 0, 0.16)", H0 = "0 4px 12px rgba(0, 0, 0, 0.20)", xl = "0", bl = "4px", yl = "8px", vl = "16px", wl = "24px", _l = "32px", Sl = "40px", kl = "48px", Cl = "56px", jl = "64px", ka = "0", Ca = "0", ja = "4px", Na = "4px", Ta = "8px", $a = "8px", Da = "8px", Ia = "16px", Ma = "16px", La = "24px", Fa = "24px", Aa = "32px", Ba = "32px", Ea = "40px", Pa = "40px", Ra = "48px", Ha = "48px", za = "56px", Wa = "56px", Oa = "64px", rr = "Frutiger W01", ar = "Arial, Helvetica, sans-serif", sr = "sans-serif", or = "400", ir = "600", lr = "400", cr = "12px", dr = "14px", ur = "12pt", fr = "14px", hr = "16px", pr = "12pt", mr = "16px", gr = "19px", xr = "13pt", br = "19px", yr = "22px", vr = "15pt", wr = "22px", _r = "26px", Sr = "17pt", kr = "27px", Cr = "36px", jr = "20pt", Nr = "33px", Tr = "48px", $r = "24pt", Ua = "16px", Ga = "24px", gt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, xt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, bt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, yt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, _t = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, St = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, kt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ct = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: sp,
  AnimationDurationNormal: op,
  AnimationDurationSlow: ip,
  AnimationEasingBounce: up,
  AnimationEasingEaseIn: lp,
  AnimationEasingEaseInOut: dp,
  AnimationEasingEaseOut: cp,
  BorderColorCard: Ri,
  BorderColorCardHover: Hi,
  BorderColorDefault: Ei,
  BorderColorError: zi,
  BorderColorForm: Pi,
  BorderRadiusLarge: jp,
  BorderRadiusMedium: Cp,
  BorderRadiusNone: Sp,
  BorderRadiusSmall: kp,
  BorderWidthCardBottom: yp,
  BorderWidthDefault: gp,
  BorderWidthFormElement: xp,
  BorderWidthFormElementError: bp,
  BorderWidthPanel: vp,
  BorderWidthTableCell: _p,
  BorderWidthTableHeader: wp,
  BreakpointDesktop: o0,
  BreakpointLargeDesktop: i0,
  BreakpointMobile: a0,
  BreakpointTablet: s0,
  ButtonBorderRadius: tg,
  ButtonBorderWidth: eg,
  ButtonPrimaryBackgroundActive: Wm,
  ButtonPrimaryBackgroundDefault: Hm,
  ButtonPrimaryBackgroundDisabled: Om,
  ButtonPrimaryBackgroundHover: zm,
  ButtonPrimaryBorderDefault: Ym,
  ButtonPrimaryBorderFocus: Vm,
  ButtonPrimaryTextDefault: Um,
  ButtonPrimaryTextDisabled: Gm,
  ButtonSecondaryBackgroundActive: Zm,
  ButtonSecondaryBackgroundDefault: qm,
  ButtonSecondaryBackgroundHover: Xm,
  ButtonSecondaryBackgroundSolid: Km,
  ButtonSecondaryBorderDefault: Qm,
  ButtonSecondaryTextDefault: Jm,
  ButtonShadowSize: ng,
  ButtonSpacingPaddingHorizontalDesktop: cl,
  ButtonSpacingPaddingHorizontalMobile: il,
  ButtonSpacingPaddingVerticalDesktop: ll,
  ButtonSpacingPaddingVerticalMobile: ol,
  ButtonTypographyWeight: rg,
  CardBackgroundDefault: ag,
  CardBorderBottom: ig,
  CardBorderDefault: sg,
  CardBorderHover: og,
  CardBorderWidthBottom: fg,
  CardBorderWidthDefault: ug,
  CardShadowDefault: hg,
  CardShadowHover: pg,
  CardSpacingHeadingMargin: fl,
  CardSpacingPaddingDesktop: ul,
  CardSpacingPaddingMobile: dl,
  CardTextDescription: cg,
  CardTextHeading: lg,
  CardTextLink: dg,
  ColorBorderDefault: Ep,
  ColorBorderSecondary: Pp,
  ColorButtonLoginActive: um,
  ColorButtonLoginBackground: cm,
  ColorButtonLoginHover: dm,
  ColorButtonLoginShadow: fm,
  ColorButtonPrimaryActive: Gp,
  ColorButtonPrimaryBackground: Wp,
  ColorButtonPrimaryHover: Up,
  ColorButtonPrimaryShadow: Yp,
  ColorButtonPrimaryText: Op,
  ColorButtonReverseActive: rm,
  ColorButtonReverseBackground: em,
  ColorButtonReverseHover: nm,
  ColorButtonReverseShadow: am,
  ColorButtonReverseText: tm,
  ColorButtonSecondaryActive: Jp,
  ColorButtonSecondaryBackground: Vp,
  ColorButtonSecondaryBackgroundSolid: qp,
  ColorButtonSecondaryBorder: Kp,
  ColorButtonSecondaryHover: Zp,
  ColorButtonSecondaryShadow: Qp,
  ColorButtonSecondaryText: Xp,
  ColorButtonWarningActive: im,
  ColorButtonWarningBackground: sm,
  ColorButtonWarningHover: om,
  ColorButtonWarningShadow: lm,
  ColorError: Rp,
  ColorFocusBackground: Ap,
  ColorFocusText: Bp,
  ColorFormBackground: zp,
  ColorFormBorder: Hp,
  ColorGrey1: tl,
  ColorGrey2: nl,
  ColorGrey3: rl,
  ColorGrey4: al,
  ColorGrey5: sl,
  ColorLinkActive: Lp,
  ColorLinkDefault: Ip,
  ColorLinkHover: Mp,
  ColorLinkVisited: Fp,
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
  ColorTextPrimary: Np,
  ColorTextPrint: Dp,
  ColorTextReverse: $p,
  ColorTextSecondary: Tp,
  ComponentBlur: Am,
  ComponentBreadcrumbChevronMarginLeft: Nm,
  ComponentBreadcrumbChevronMarginRight: Tm,
  ComponentBreadcrumbPaddingTopDesktop: Dm,
  ComponentBreadcrumbPaddingTopMobile: $m,
  ComponentButtonPaddingDesktopHorizontal: gm,
  ComponentButtonPaddingDesktopVertical: mm,
  ComponentButtonPaddingMobileHorizontal: pm,
  ComponentButtonPaddingMobileVertical: hm,
  ComponentButtonShadowSize: xm,
  ComponentCardHeadingMargin: km,
  ComponentCardPaddingDesktop: Sm,
  ComponentCardPaddingMobile: _m,
  ComponentDetails: Em,
  ComponentExpander: Pm,
  ComponentFormCheckboxLabelPadding: wm,
  ComponentFormCheckboxSize: vm,
  ComponentFormInputMinHeight: bm,
  ComponentFormInputPadding: ym,
  ComponentLink: Bm,
  ComponentPagination: Rm,
  ComponentPanelPaddingDesktop: jm,
  ComponentPanelPaddingMobile: Cm,
  ComponentSpread: Fm,
  ComponentSummaryListCellPaddingHorizontal: Mm,
  ComponentSummaryListCellPaddingVertical: Im,
  ComponentSummaryListRowMargin: Lm,
  ElevationHigh: H0,
  ElevationLow: P0,
  ElevationMedium: R0,
  ElevationNone: E0,
  FocusOutlineOffset: L0,
  FocusOutlineStyle: F0,
  FocusOutlineWidth: M0,
  FocusShadowButton: B0,
  FocusShadowInput: A0,
  FontFamilyBase: rr,
  FontFamilyFallback: ar,
  FontFamilyPrint: sr,
  FontLineHeightBase: Ga,
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
  FontSizeBase: Ua,
  FontWeightBold: ir,
  FontWeightLight: lr,
  FontWeightNormal: or,
  FormBorderRadius: Fg,
  FormBorderWidthDefault: Mg,
  FormBorderWidthError: Lg,
  FormErrorTextDefault: $g,
  FormErrorTypographyWeight: Dg,
  FormHintTextDefault: Ig,
  FormInputBackgroundDefault: mg,
  FormInputBackgroundDisabled: xg,
  FormInputBackgroundError: bg,
  FormInputBackgroundFocus: gg,
  FormInputBorderDefault: yg,
  FormInputBorderDisabled: _g,
  FormInputBorderError: wg,
  FormInputBorderFocus: vg,
  FormInputTextDefault: Sg,
  FormInputTextDisabled: Cg,
  FormInputTextPlaceholder: kg,
  FormLabelTextDefault: jg,
  FormLabelTextRequired: Ng,
  FormLabelTypographyWeight: Tg,
  FormSpacingCheckboxLabelPadding: gl,
  FormSpacingCheckboxSize: ml,
  FormSpacingInputMinHeight: pl,
  FormSpacingInputPadding: hl,
  GridGutter: c0,
  GridGutterHalf: d0,
  GridPageWidth: l0,
  HeadingsNhsukHeadingL: xt,
  HeadingsNhsukHeadingM: bt,
  HeadingsNhsukHeadingS: yt,
  HeadingsNhsukHeadingXl: gt,
  HeadingsNhsukHeadingXs: vt,
  LayoutColumnActions: r0,
  LayoutColumnFull: Qg,
  LayoutColumnHalf: e0,
  LayoutColumnQuarter: n0,
  LayoutColumnThird: t0,
  LayoutContainerMaxWidth: Jg,
  ParagraphsBody: wt,
  ParagraphsBodyLarge: _t,
  ParagraphsBodySmall: St,
  ParagraphsLedeText: kt,
  ParagraphsLedeTextSmall: Ct,
  ShadowButtonDefault: j0,
  ShadowButtonFocus: $0,
  ShadowButtonSecondary: N0,
  ShadowButtonWarning: T0,
  ShadowCardDefault: D0,
  ShadowCardHover: I0,
  SizeButtonMinHeightDesktop: Zg,
  SizeButtonMinHeightMobile: Xg,
  SizeFormControlLarge: Wg,
  SizeFormControlMedium: zg,
  SizeFormControlSmall: Hg,
  SizeFormInputWidth2xl: qg,
  SizeFormInputWidth3xl: Kg,
  SizeFormInputWidthLg: Yg,
  SizeFormInputWidthMd: Gg,
  SizeFormInputWidthSm: Ug,
  SizeFormInputWidthXl: Vg,
  SizeFormInputWidthXs: Og,
  SizeIconExtraLarge: Pg,
  SizeIconLarge: Eg,
  SizeIconMedium: Bg,
  SizeIconNhsDefault: Rg,
  SizeIconSmall: Ag,
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
  SpacingResponsive0Mobile: ka,
  SpacingResponsive0Tablet: Ca,
  SpacingResponsive1Mobile: ja,
  SpacingResponsive1Tablet: Na,
  SpacingResponsive2Mobile: Ta,
  SpacingResponsive2Tablet: $a,
  SpacingResponsive3Mobile: Da,
  SpacingResponsive3Tablet: Ia,
  SpacingResponsive4Mobile: Ma,
  SpacingResponsive4Tablet: La,
  SpacingResponsive5Mobile: Fa,
  SpacingResponsive5Tablet: Aa,
  SpacingResponsive6Mobile: Ba,
  SpacingResponsive6Tablet: Ea,
  SpacingResponsive7Mobile: Pa,
  SpacingResponsive7Tablet: Ra,
  SpacingResponsive8Mobile: Ha,
  SpacingResponsive8Tablet: za,
  SpacingResponsive9Mobile: Wa,
  SpacingResponsive9Tablet: Oa,
  StateDisabledBackground: S0,
  StateDisabledBorder: k0,
  StateDisabledText: C0,
  StateErrorBackground: u0,
  StateErrorBorder: f0,
  StateErrorText: h0,
  StateInfoBackground: v0,
  StateInfoBorder: w0,
  StateInfoText: _0,
  StateSuccessBackground: p0,
  StateSuccessBorder: m0,
  StateSuccessText: g0,
  StateWarningBackground: x0,
  StateWarningBorder: b0,
  StateWarningText: y0,
  TransitionButtonDefault: fp,
  TransitionButtonShadow: hp,
  TransitionCardHover: mp,
  TransitionInputFocus: pp
}, Symbol.toStringTag, { value: "Module" })), Bx = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Ex = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: gt.fontFamily,
      fontWeight: gt.fontWeight,
      fontSize: gt.fontSize.mobile,
      lineHeight: gt.lineHeight,
      marginTop: gt.marginTop,
      marginBottom: gt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Px = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
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
), Rx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
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
), Hx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
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
), zx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
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
), Wx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
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
), Ox = ({
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
), Ux = ({
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
), Gx = ({
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
), Yx = ({
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
), Vx = () => Te(() => z0, []), qx = () => Te(() => ({
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
}), []), Kx = () => Te(() => ({
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
}), []), Xx = () => Te(() => ({
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
    Size: Ua,
    LineHeight: Ga
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
  FontSizeBase: Ua,
  FontLineHeightBase: Ga
}), []), Zx = () => Te(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: ka,
    Size1: ja,
    Size2: Ta,
    Size3: Da,
    Size4: Ma,
    Size5: Fa,
    Size6: Ba,
    Size7: Pa,
    Size8: Ha,
    Size9: Wa
  },
  Tablet: {
    Size0: Ca,
    Size1: Na,
    Size2: $a,
    Size3: Ia,
    Size4: La,
    Size5: Aa,
    Size6: Ea,
    Size7: Ra,
    Size8: za,
    Size9: Oa
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: ka,
  SpacingResponsive0Tablet: Ca,
  SpacingResponsive1Mobile: ja,
  SpacingResponsive1Tablet: Na,
  SpacingResponsive2Mobile: Ta,
  SpacingResponsive2Tablet: $a,
  SpacingResponsive3Mobile: Da,
  SpacingResponsive3Tablet: Ia,
  SpacingResponsive4Mobile: Ma,
  SpacingResponsive4Tablet: La,
  SpacingResponsive5Mobile: Fa,
  SpacingResponsive5Tablet: Aa,
  SpacingResponsive6Mobile: Ba,
  SpacingResponsive6Tablet: Ea,
  SpacingResponsive7Mobile: Pa,
  SpacingResponsive7Tablet: Ra,
  SpacingResponsive8Mobile: Ha,
  SpacingResponsive8Tablet: za,
  SpacingResponsive9Mobile: Wa,
  SpacingResponsive9Tablet: Oa
}), []), Jx = () => Te(() => ({
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
}), []), Qx = () => Te(() => ({
  xl: gt,
  l: xt,
  m: bt,
  s: yt,
  xs: vt
}), []), eb = () => Te(() => ({
  body: wt,
  bodyLarge: _t,
  bodySmall: St,
  ledeText: kt,
  ledeTextSmall: Ct
}), []), tb = () => Te(() => ({
  headings: {
    xl: gt,
    l: xt,
    m: bt,
    s: yt,
    xs: vt
  },
  paragraphs: {
    body: wt,
    bodyLarge: _t,
    bodySmall: St,
    ledeText: kt,
    ledeTextSmall: Ct
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
function nb(e = {}) {
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
function rb(e = {}) {
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
function ab(e = {}) {
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
const sb = '"Frutiger W01", Arial, Helvetica, sans-serif', ob = "Arial, Helvetica, sans-serif";
async function ib() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Kl as Account,
  Y0 as ActionLink,
  wx as AdaptiveDataGrid,
  sp as AnimationDurationFast,
  op as AnimationDurationNormal,
  ip as AnimationDurationSlow,
  up as AnimationEasingBounce,
  lp as AnimationEasingEaseIn,
  dp as AnimationEasingEaseInOut,
  cp as AnimationEasingEaseOut,
  ni as AppointmentCard,
  $x as AreaSeriesPrimitive,
  tf as AriaDataGrid,
  ma as AriaTabsDataGrid,
  wx as AriaTabsDataGridAdaptive,
  mo as Axis,
  la as BackLink,
  Ix as BandScalesProvider,
  Dx as BarSeriesPrimitive,
  Ri as BorderColorCard,
  Hi as BorderColorCardHover,
  Ei as BorderColorDefault,
  zi as BorderColorError,
  Pi as BorderColorForm,
  jp as BorderRadiusLarge,
  Cp as BorderRadiusMedium,
  Sp as BorderRadiusNone,
  kp as BorderRadiusSmall,
  yp as BorderWidthCardBottom,
  gp as BorderWidthDefault,
  xp as BorderWidthFormElement,
  bp as BorderWidthFormElementError,
  vp as BorderWidthPanel,
  _p as BorderWidthTableCell,
  wp as BorderWidthTableHeader,
  Uu as Breadcrumb,
  o0 as BreakpointDesktop,
  i0 as BreakpointLargeDesktop,
  a0 as BreakpointMobile,
  s0 as BreakpointTablet,
  Qe as Button,
  tg as ButtonBorderRadius,
  eg as ButtonBorderWidth,
  Wm as ButtonPrimaryBackgroundActive,
  Hm as ButtonPrimaryBackgroundDefault,
  Om as ButtonPrimaryBackgroundDisabled,
  zm as ButtonPrimaryBackgroundHover,
  Ym as ButtonPrimaryBorderDefault,
  Vm as ButtonPrimaryBorderFocus,
  Um as ButtonPrimaryTextDefault,
  Gm as ButtonPrimaryTextDisabled,
  Zm as ButtonSecondaryBackgroundActive,
  qm as ButtonSecondaryBackgroundDefault,
  Xm as ButtonSecondaryBackgroundHover,
  Km as ButtonSecondaryBackgroundSolid,
  Qm as ButtonSecondaryBorderDefault,
  Jm as ButtonSecondaryTextDefault,
  ng as ButtonShadowSize,
  cl as ButtonSpacingPaddingHorizontalDesktop,
  il as ButtonSpacingPaddingHorizontalMobile,
  ll as ButtonSpacingPaddingVerticalDesktop,
  ol as ButtonSpacingPaddingVerticalMobile,
  rg as ButtonTypographyWeight,
  Qo as Card,
  ag as CardBackgroundDefault,
  ig as CardBorderBottom,
  sg as CardBorderDefault,
  og as CardBorderHover,
  fg as CardBorderWidthBottom,
  ug as CardBorderWidthDefault,
  cx as CardGroup,
  dx as CardGroupItem,
  hg as CardShadowDefault,
  pg as CardShadowHover,
  fl as CardSpacingHeadingMargin,
  ul as CardSpacingPaddingDesktop,
  dl as CardSpacingPaddingMobile,
  cg as CardTextDescription,
  lg as CardTextHeading,
  dg as CardTextLink,
  ux as CareCard,
  V0 as CharacterCount,
  Lx as ChartEnhancer,
  Mx as ChartNoScript,
  Jf as ChartRoot,
  ec as Checkbox,
  rc as Checkboxes,
  Ep as ColorBorderDefault,
  Pp as ColorBorderSecondary,
  um as ColorButtonLoginActive,
  cm as ColorButtonLoginBackground,
  dm as ColorButtonLoginHover,
  fm as ColorButtonLoginShadow,
  Gp as ColorButtonPrimaryActive,
  Wp as ColorButtonPrimaryBackground,
  Up as ColorButtonPrimaryHover,
  Yp as ColorButtonPrimaryShadow,
  Op as ColorButtonPrimaryText,
  rm as ColorButtonReverseActive,
  em as ColorButtonReverseBackground,
  nm as ColorButtonReverseHover,
  am as ColorButtonReverseShadow,
  tm as ColorButtonReverseText,
  Jp as ColorButtonSecondaryActive,
  Vp as ColorButtonSecondaryBackground,
  qp as ColorButtonSecondaryBackgroundSolid,
  Kp as ColorButtonSecondaryBorder,
  Zp as ColorButtonSecondaryHover,
  Qp as ColorButtonSecondaryShadow,
  Xp as ColorButtonSecondaryText,
  im as ColorButtonWarningActive,
  sm as ColorButtonWarningBackground,
  om as ColorButtonWarningHover,
  lm as ColorButtonWarningShadow,
  Rp as ColorError,
  Ap as ColorFocusBackground,
  Bp as ColorFocusText,
  zp as ColorFormBackground,
  Hp as ColorFormBorder,
  tl as ColorGrey1,
  nl as ColorGrey2,
  rl as ColorGrey3,
  al as ColorGrey4,
  sl as ColorGrey5,
  Lp as ColorLinkActive,
  Ip as ColorLinkDefault,
  Mp as ColorLinkHover,
  Fp as ColorLinkVisited,
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
  Np as ColorTextPrimary,
  Dp as ColorTextPrint,
  $p as ColorTextReverse,
  Tp as ColorTextSecondary,
  vn as Column,
  Am as ComponentBlur,
  Nm as ComponentBreadcrumbChevronMarginLeft,
  Tm as ComponentBreadcrumbChevronMarginRight,
  Dm as ComponentBreadcrumbPaddingTopDesktop,
  $m as ComponentBreadcrumbPaddingTopMobile,
  gm as ComponentButtonPaddingDesktopHorizontal,
  mm as ComponentButtonPaddingDesktopVertical,
  pm as ComponentButtonPaddingMobileHorizontal,
  hm as ComponentButtonPaddingMobileVertical,
  xm as ComponentButtonShadowSize,
  km as ComponentCardHeadingMargin,
  Sm as ComponentCardPaddingDesktop,
  _m as ComponentCardPaddingMobile,
  Em as ComponentDetails,
  Pm as ComponentExpander,
  wm as ComponentFormCheckboxLabelPadding,
  vm as ComponentFormCheckboxSize,
  bm as ComponentFormInputMinHeight,
  ym as ComponentFormInputPadding,
  Bm as ComponentLink,
  Rm as ComponentPagination,
  jm as ComponentPanelPaddingDesktop,
  Cm as ComponentPanelPaddingMobile,
  Fm as ComponentSpread,
  Mm as ComponentSummaryListCellPaddingHorizontal,
  Im as ComponentSummaryListCellPaddingVertical,
  Lm as ComponentSummaryListRowMargin,
  No as Container,
  lx as ContentsList,
  Nl as DEFAULT_FONT_CONFIG,
  bx as DashboardSummaryGrid,
  nx as DateInput,
  Yu as Details,
  Vu as DoDontList,
  H0 as ElevationHigh,
  P0 as ElevationLow,
  R0 as ElevationMedium,
  E0 as ElevationNone,
  _s as ErrorMessage,
  tx as ErrorSummary,
  qu as Expander,
  nt as FRUTIGER_FONT_FILES,
  qa as Fieldset,
  L0 as FocusOutlineOffset,
  F0 as FocusOutlineStyle,
  M0 as FocusOutlineWidth,
  B0 as FocusShadowButton,
  A0 as FocusShadowInput,
  rr as FontFamilyBase,
  ar as FontFamilyFallback,
  sr as FontFamilyPrint,
  Ga as FontLineHeightBase,
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
  Ua as FontSizeBase,
  ir as FontWeightBold,
  lr as FontWeightLight,
  or as FontWeightNormal,
  Lo as Footer,
  Fg as FormBorderRadius,
  Mg as FormBorderWidthDefault,
  Lg as FormBorderWidthError,
  $g as FormErrorTextDefault,
  Dg as FormErrorTypographyWeight,
  Ig as FormHintTextDefault,
  mg as FormInputBackgroundDefault,
  xg as FormInputBackgroundDisabled,
  bg as FormInputBackgroundError,
  gg as FormInputBackgroundFocus,
  yg as FormInputBorderDefault,
  _g as FormInputBorderDisabled,
  wg as FormInputBorderError,
  vg as FormInputBorderFocus,
  Sg as FormInputTextDefault,
  Cg as FormInputTextDisabled,
  kg as FormInputTextPlaceholder,
  jg as FormLabelTextDefault,
  Ng as FormLabelTextRequired,
  Tg as FormLabelTypographyWeight,
  gl as FormSpacingCheckboxLabelPadding,
  ml as FormSpacingCheckboxSize,
  pl as FormSpacingInputMinHeight,
  hl as FormSpacingInputPadding,
  ox as GanttChart,
  ca as Grid,
  c0 as GridGutter,
  d0 as GridGutterHalf,
  eh as GridLines,
  l0 as GridPageWidth,
  Mo as Header,
  sx as HeaderSSR,
  xc as HeaderSearch,
  Mo as HeaderStatic,
  Tt as Heading,
  xt as HeadingsNhsukHeadingL,
  bt as HeadingsNhsukHeadingM,
  yt as HeadingsNhsukHeadingS,
  gt as HeadingsNhsukHeadingXl,
  vt as HeadingsNhsukHeadingXs,
  bc as Hero,
  Co as Hint,
  gx as Images,
  Ya as Input,
  fx as InsetText,
  Va as Label,
  r0 as LayoutColumnActions,
  Qg as LayoutColumnFull,
  e0 as LayoutColumnHalf,
  n0 as LayoutColumnQuarter,
  t0 as LayoutColumnThird,
  Jg as LayoutContainerMaxWidth,
  Tx as Legend,
  Qf as LineScalesProvider,
  Bh as LineSeriesPrimitive,
  dc as List,
  To as MainWrapper,
  ri as MedicationCard,
  Fx as MetricCard,
  Wx as NHSBodyText,
  Ox as NHSBodyTextLarge,
  Ux as NHSBodyTextSmall,
  Ex as NHSHeading1,
  Px as NHSHeading2,
  Rx as NHSHeading3,
  Hx as NHSHeading4,
  zx as NHSHeading5,
  Gx as NHSLedeText,
  Yx as NHSLedeTextSmall,
  ax as NHSThemeProvider,
  ob as NHS_FALLBACK_FONT_STACK,
  sb as NHS_FONT_STACK,
  Uf as NavigationSplitView,
  Sx as PageTemplate,
  ix as Pagination,
  Gu as Panel,
  wt as ParagraphsBody,
  _t as ParagraphsBodyLarge,
  St as ParagraphsBodySmall,
  kt as ParagraphsLedeText,
  Ct as ParagraphsLedeTextSmall,
  ti as PatientCard,
  Yf as ProductRoadmap,
  q0 as Radios,
  K0 as RadiosServer,
  wx as ResponsiveDataGrid,
  _x as ResponsiveDataGridDemo,
  Gt as Row,
  Ax as SPC,
  np as SPCChart,
  zn as Select,
  oc as SelectOption,
  j0 as ShadowButtonDefault,
  $0 as ShadowButtonFocus,
  N0 as ShadowButtonSecondary,
  T0 as ShadowButtonWarning,
  D0 as ShadowCardDefault,
  I0 as ShadowCardHover,
  Zg as SizeButtonMinHeightDesktop,
  Xg as SizeButtonMinHeightMobile,
  Wg as SizeFormControlLarge,
  zg as SizeFormControlMedium,
  Hg as SizeFormControlSmall,
  qg as SizeFormInputWidth2xl,
  Kg as SizeFormInputWidth3xl,
  Yg as SizeFormInputWidthLg,
  Gg as SizeFormInputWidthMd,
  Ug as SizeFormInputWidthSm,
  Vg as SizeFormInputWidthXl,
  Og as SizeFormInputWidthXs,
  Pg as SizeIconExtraLarge,
  Eg as SizeIconLarge,
  Bg as SizeIconMedium,
  Rg as SizeIconNhsDefault,
  Ag as SizeIconSmall,
  Jo as SkipLink,
  xx as SlotMatrix,
  yx as SortStatusControl,
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
  ka as SpacingResponsive0Mobile,
  Ca as SpacingResponsive0Tablet,
  ja as SpacingResponsive1Mobile,
  Na as SpacingResponsive1Tablet,
  Ta as SpacingResponsive2Mobile,
  $a as SpacingResponsive2Tablet,
  Da as SpacingResponsive3Mobile,
  Ia as SpacingResponsive3Tablet,
  Ma as SpacingResponsive4Mobile,
  La as SpacingResponsive4Tablet,
  Fa as SpacingResponsive5Mobile,
  Aa as SpacingResponsive5Tablet,
  Ba as SpacingResponsive6Mobile,
  Ea as SpacingResponsive6Tablet,
  Pa as SpacingResponsive7Mobile,
  Ra as SpacingResponsive7Tablet,
  Ha as SpacingResponsive8Mobile,
  za as SpacingResponsive8Tablet,
  Wa as SpacingResponsive9Mobile,
  Oa as SpacingResponsive9Tablet,
  X0 as SpacingUtilities,
  S0 as StateDisabledBackground,
  k0 as StateDisabledBorder,
  C0 as StateDisabledText,
  u0 as StateErrorBackground,
  f0 as StateErrorBorder,
  h0 as StateErrorText,
  v0 as StateInfoBackground,
  w0 as StateInfoBorder,
  _0 as StateInfoText,
  p0 as StateSuccessBackground,
  m0 as StateSuccessBorder,
  g0 as StateSuccessText,
  x0 as StateWarningBackground,
  b0 as StateWarningBorder,
  y0 as StateWarningText,
  ef as SummaryCard,
  hx as SummaryList,
  Js as Table,
  px as Tabs,
  et as Tag,
  Ku as TaskList,
  ac as Textarea,
  Nx as TooltipOverlay,
  Ah as TooltipProvider,
  kx as TransactionalPageTemplate,
  fp as TransitionButtonDefault,
  hp as TransitionButtonShadow,
  mp as TransitionCardHover,
  pp as TransitionInputFocus,
  jx as VisibilityProvider,
  ai as VitalsCard,
  ex as WIDTH_FRACTIONS,
  mx as WarningCallout,
  ci as WidthContainer,
  J0 as WidthUtilities,
  ib as checkFrutigerLoaded,
  ss as createGenericTabsConfig,
  vx as createTCHTabsConfig,
  rb as generateFrutigerFontFace,
  Bx as getResponsiveStyles,
  Z0 as getSpacingClass,
  Q0 as getWidthClass,
  ab as preloadFrutigerFonts,
  hf as tchDataConfig,
  qx as useColors,
  Jx as useComponentSpacing,
  Qx as useNHSHeadings,
  eb as useNHSParagraphs,
  rx as useNHSTheme,
  tb as useNHSTypographySystem,
  nb as useNavigationSplitDrill,
  zf as useNavigationSplitUrlSync,
  ui as useNhsFdpBreakpoints,
  Zx as useResponsiveSpacing,
  Cx as useResponsiveValue,
  Kx as useSpacing,
  Vx as useTokens,
  Xx as useTypography
};
//# sourceMappingURL=index.esm.js.map
