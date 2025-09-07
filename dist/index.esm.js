import * as O from "react";
import rt, { useState as Ie, useEffect as Ae, useCallback as pe, useRef as Le, createElement as vo, useMemo as De, useContext as Pl, createContext as Hl, forwardRef as fn, useImperativeHandle as _o, useReducer as wo, memo as zl, useLayoutEffect as Wl, useId as zn } from "react";
import { createPortal as Ol } from "react-dom";
function Ul(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var An = { exports: {} }, mn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _s;
function Gl() {
  if (_s) return mn;
  _s = 1;
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
  return mn.Fragment = t, mn.jsx = r, mn.jsxs = r, mn;
}
var gn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ws;
function Yl() {
  return ws || (ws = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(P) {
      if (P == null) return null;
      if (typeof P == "function")
        return P.$$typeof === S ? null : P.displayName || P.name || null;
      if (typeof P == "string") return P;
      switch (P) {
        case g:
          return "Fragment";
        case R:
          return "Profiler";
        case u:
          return "StrictMode";
        case A:
          return "Suspense";
        case j:
          return "SuspenseList";
        case C:
          return "Activity";
      }
      if (typeof P == "object")
        switch (typeof P.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), P.$$typeof) {
          case D:
            return "Portal";
          case I:
            return (P.displayName || "Context") + ".Provider";
          case L:
            return (P._context.displayName || "Context") + ".Consumer";
          case T:
            var v = P.render;
            return P = P.displayName, P || (P = v.displayName || v.name || "", P = P !== "" ? "ForwardRef(" + P + ")" : "ForwardRef"), P;
          case M:
            return v = P.displayName || null, v !== null ? v : e(P.type) || "Memo";
          case x:
            v = P._payload, P = P._init;
            try {
              return e(P(v));
            } catch {
            }
        }
      return null;
    }
    function t(P) {
      return "" + P;
    }
    function r(P) {
      try {
        t(P);
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var _ = v.error, W = typeof Symbol == "function" && Symbol.toStringTag && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return _.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), t(P);
      }
    }
    function a(P) {
      if (P === g) return "<>";
      if (typeof P == "object" && P !== null && P.$$typeof === x)
        return "<...>";
      try {
        var v = e(P);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var P = p.A;
      return P === null ? null : P.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(P) {
      if (w.call(P, "key")) {
        var v = Object.getOwnPropertyDescriptor(P, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return P.key !== void 0;
    }
    function l(P, v) {
      function _() {
        k || (k = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(P, "key", {
        get: _,
        configurable: !0
      });
    }
    function d() {
      var P = e(this.type);
      return y[P] || (y[P] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), P = this.props.ref, P !== void 0 ? P : null;
    }
    function c(P, v, _, W, B, q, ee, ie) {
      return _ = q.ref, P = {
        $$typeof: b,
        type: P,
        key: v,
        props: q,
        _owner: B
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(P, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(P, "ref", { enumerable: !1, value: null }), P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(P, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(P, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.defineProperty(P, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    }
    function f(P, v, _, W, B, q, ee, ie) {
      var te = v.children;
      if (te !== void 0)
        if (W)
          if (F(te)) {
            for (W = 0; W < te.length; W++)
              h(te[W]);
            Object.freeze && Object.freeze(te);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(te);
      if (w.call(v, "key")) {
        te = e(P);
        var U = Object.keys(v).filter(function(se) {
          return se !== "key";
        });
        W = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", H[te + W] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          te,
          U,
          te
        ), H[te + W] = !0);
      }
      if (te = null, _ !== void 0 && (r(_), te = "" + _), i(v) && (r(v.key), te = "" + v.key), "key" in v) {
        _ = {};
        for (var Y in v)
          Y !== "key" && (_[Y] = v[Y]);
      } else _ = v;
      return te && l(
        _,
        typeof P == "function" ? P.displayName || P.name || "Unknown" : P
      ), c(
        P,
        te,
        q,
        B,
        o(),
        _,
        ee,
        ie
      );
    }
    function h(P) {
      typeof P == "object" && P !== null && P.$$typeof === b && P._store && (P._store.validated = 1);
    }
    var m = rt, b = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), I = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), S = Symbol.for("react.client.reference"), p = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = Object.prototype.hasOwnProperty, F = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(P) {
        return P();
      }
    };
    var k, y = {}, E = m.react_stack_bottom_frame.bind(
      m,
      s
    )(), Q = N(a(s)), H = {};
    gn.Fragment = g, gn.jsx = function(P, v, _, W, B) {
      var q = 1e4 > p.recentlyCreatedOwnerStacks++;
      return f(
        P,
        v,
        _,
        !1,
        W,
        B,
        q ? Error("react-stack-top-frame") : E,
        q ? N(a(P)) : Q
      );
    }, gn.jsxs = function(P, v, _, W, B) {
      var q = 1e4 > p.recentlyCreatedOwnerStacks++;
      return f(
        P,
        v,
        _,
        !0,
        W,
        B,
        q ? Error("react-stack-top-frame") : E,
        q ? N(a(P)) : Q
      );
    };
  })()), gn;
}
var Ss;
function Vl() {
  return Ss || (Ss = 1, process.env.NODE_ENV === "production" ? An.exports = Gl() : An.exports = Yl()), An.exports;
}
var n = Vl(), Ur = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ks;
function ql() {
  return ks || (ks = 1, (function(e) {
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
  })(Ur)), Ur.exports;
}
var Xl = ql();
const ge = /* @__PURE__ */ Ul(Xl), X0 = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = ge(
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
}, Kl = ({
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
    ) : null, l = s.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, d = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i,
      l
    ] });
    return s.href ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-account__link nhsuk-header__account-link", href: s.href, children: d }) : s.action ? /* @__PURE__ */ n.jsx(
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
            children: d
          }
        )
      }
    ) : /* @__PURE__ */ n.jsx("span", { children: d });
  };
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: ge(
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
          className: ge("nhsuk-account__item nhsuk-header__account-item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
};
function Zl(e) {
  const t = e.variant || "primary", r = e.size || "default", a = !!e.fullWidth, o = [
    "nhs-aria-button",
    `nhs-aria-button--${t}`,
    r !== "default" ? `nhs-aria-button--${r}` : "",
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
const { forwardRef: Jl, useCallback: At, useState: Gr } = O;
function Ql(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, f] = Gr(!1), [h, m] = Gr(!1), [b, D] = Gr(!1), g = Zl({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), u = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", R = {
    ...c && { "data-pressed": "true" },
    ...h && { "data-hovered": "true" },
    ...b && { "data-focused": "true" },
    ...u && { "data-disabled": "true" }
  }, L = At(
    () => !u && f(!0),
    [u]
  ), I = At(() => f(!1), []), T = At(
    () => !u && m(!0),
    [u]
  ), A = At(() => {
    m(!1), f(!1);
  }, []), j = At(() => D(!0), []), M = At(() => D(!1), []), x = At(
    (te) => {
      te.key === " " && ("href" in d || te.currentTarget.getAttribute("role") === "button") && (te.preventDefault(), te.currentTarget.click());
    },
    [d]
  ), C = At(
    (te) => {
      if (l) {
        const U = te.currentTarget;
        if (U.getAttribute("data-processing") === "true") {
          te.preventDefault();
          return;
        }
        U.setAttribute("data-processing", "true"), setTimeout(() => {
          U.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in d && d.href) {
    const {
      id: te,
      style: U,
      title: Y,
      ["aria-label"]: se,
      ["aria-describedby"]: z,
      ["aria-labelledby"]: X,
      tabIndex: K,
      ...oe
    } = d, re = d;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: re.href,
        target: re.target,
        rel: re.rel,
        className: g.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...R,
        ...l && { "data-prevent-double-click": "true" },
        ...oe,
        onKeyDown: (ue) => {
          re.onKeyDown?.(ue), x(ue);
        },
        onClick: (ue) => {
          re.onClick?.(ue), C(ue);
        },
        onMouseDown: (ue) => {
          re.onMouseDown?.(ue), L();
        },
        onMouseUp: (ue) => {
          re.onMouseUp?.(ue), I();
        },
        onMouseEnter: (ue) => {
          re.onMouseEnter?.(ue), T();
        },
        onMouseLeave: (ue) => {
          re.onMouseLeave?.(ue), A();
        },
        onFocus: (ue) => {
          re.onFocus?.(ue), j();
        },
        onBlur: (ue) => {
          re.onBlur?.(ue), M();
        },
        "aria-disabled": re["aria-disabled"],
        ...re["aria-disabled"] === "true" && { tabIndex: -1 },
        id: te,
        style: U,
        title: Y,
        "aria-label": se,
        "aria-describedby": z,
        "aria-labelledby": X,
        tabIndex: K,
        children: r
      }
    );
  }
  const {
    id: S,
    style: p,
    title: w,
    ["aria-label"]: F,
    ["aria-describedby"]: N,
    ["aria-labelledby"]: k,
    tabIndex: y,
    name: E,
    value: Q,
    form: H,
    formAction: P,
    formEncType: v,
    formMethod: _,
    formNoValidate: W,
    formTarget: B,
    autoFocus: q,
    ...ee
  } = d, ie = d;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: ie.type || "button",
      disabled: ie.disabled,
      className: g.classes,
      "data-module": "nhs-button",
      ...R,
      ...l && { "data-prevent-double-click": "true" },
      ...ie.disabled && { "aria-disabled": "true" },
      ...ee,
      onKeyDown: (te) => {
        ie.onKeyDown?.(te), x(te);
      },
      onClick: (te) => {
        ie.onClick?.(te), C(te);
      },
      onMouseDown: (te) => {
        ie.onMouseDown?.(te), L();
      },
      onMouseUp: (te) => {
        ie.onMouseUp?.(te), I();
      },
      onMouseEnter: (te) => {
        ie.onMouseEnter?.(te), T();
      },
      onMouseLeave: (te) => {
        ie.onMouseLeave?.(te), A();
      },
      onFocus: (te) => {
        ie.onFocus?.(te), j();
      },
      onBlur: (te) => {
        ie.onBlur?.(te), M();
      },
      id: S,
      style: p,
      title: w,
      "aria-label": F,
      "aria-describedby": N,
      "aria-labelledby": k,
      tabIndex: y,
      name: E,
      value: Q,
      form: H,
      formAction: P,
      formEncType: v,
      formMethod: _,
      formNoValidate: W,
      formTarget: B,
      autoFocus: q,
      children: r
    }
  );
}
const Qe = Jl(Ql);
Qe.displayName = "Button";
const ca = ({
  text: e = "Back",
  html: t,
  href: r = "#",
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
  ), c = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
      className: d,
      onClick: s,
      type: "button",
      ...i,
      children: c()
    }
  ) : /* @__PURE__ */ n.jsx(
    "a",
    {
      className: d,
      href: r,
      ...i,
      children: c()
    }
  ) });
};
function ec(e) {
  const { color: t = "default", noBorder: r, closable: a, disabled: o, className: s } = e;
  return { classes: [
    "nhsuk-tag",
    t !== "default" ? `nhsuk-tag--${t}` : "",
    r ? "nhsuk-tag--no-border" : "",
    a ? "nhsuk-tag--closable" : "",
    o ? "nhsuk-tag--disabled" : "",
    s || ""
  ].filter(Boolean).join(" "), showClose: !!a, disabled: !!o };
}
const Ye = ({
  text: e,
  html: t,
  children: r,
  color: a = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: d,
  ...c
}) => {
  const f = ec({ color: a, noBorder: o, closable: s, disabled: l, className: d }), h = (m) => {
    m.preventDefault(), m.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: f.classes, ...c, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    s && /* @__PURE__ */ n.jsx(
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
}, tc = ({
  id: e,
  name: t,
  checked: r,
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
  attributes: b,
  ...D
}) => {
  const [g, u] = Ie(a), R = r !== void 0, L = R ? r : g;
  Ae(() => {
    R || u(a);
  }, [a, R]);
  const I = (x) => {
    const C = x.target.checked;
    R || u(C), f?.(C, x);
  }, T = i ? `${e}-hint` : void 0, A = l ? `${e}-error` : void 0, j = [T, A].filter(Boolean).join(" ") || void 0, M = ge(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ n.jsx("div", { className: M, ...D, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: L,
        disabled: o,
        onChange: I,
        onBlur: h,
        onFocus: m,
        "aria-describedby": j,
        ...b
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ n.jsx("div", { id: T, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: A, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
tc.displayName = "Checkbox";
function nc(e) {
  const r = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
const qa = ({
  id: e,
  name: t,
  type: r = "text",
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
  inputMode: b,
  autoComplete: D,
  maxLength: g,
  minLength: u,
  pattern: R,
  step: L,
  min: I,
  max: T,
  showValueLabels: A = !1,
  showCurrentValue: j = !1,
  valueLabels: M,
  onChange: x,
  onBlur: C,
  onFocus: S,
  onKeyDown: p,
  ...w
}) => {
  const [F, N] = Ie(a || o || (r === "range" ? I || "0" : ""));
  Ae(() => {
    a !== void 0 && N(a);
  }, [a]);
  const k = (B) => {
    const q = B.target;
    N(q.value), ("type" in B && B.nativeEvent || B.type === "keydown") && x?.(B);
  }, { classes: y, isRange: E } = nc({ type: r, hasError: c, width: m, className: h }), Q = a !== void 0, H = {
    id: e,
    name: t,
    type: r,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": f,
    inputMode: b,
    autoComplete: D,
    maxLength: g,
    minLength: u,
    pattern: R,
    step: L,
    min: I,
    max: T,
    onChange: k,
    onBlur: C,
    onFocus: S,
    onKeyDown: (B) => {
      if (E && /[0-9]/.test(B.key)) {
        const q = (F?.toString() || "") + B.key;
        B.target.value = q, k(B);
      }
      p?.(B);
    },
    ...w
  }, P = !Q && o !== void 0 ? { defaultValue: o } : {}, v = Q ? { value: a } : {}, _ = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: y,
      ...v,
      ...P,
      "data-current-value": F,
      ...H
    }
  ), W = E ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    A && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: M?.min || I || "0" }),
      _(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: M?.max || T || "100" })
    ] }),
    !A && _(),
    j && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      M?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: F })
    ] }) })
  ] }) : null;
  return E ? W : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: y,
      id: e,
      name: t,
      type: r,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: d,
      "aria-describedby": f,
      inputMode: b,
      autoComplete: D,
      maxLength: g,
      minLength: u,
      pattern: R,
      step: L,
      min: I,
      max: T,
      onChange: x,
      onBlur: C,
      onFocus: S,
      onKeyDown: p,
      ...w
    }
  );
};
function rc(e) {
  const t = e.size || "m", r = [
    "nhsuk-label",
    t !== "m" ? `nhsuk-label--${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: e.isPageHeading ? "h1" : "label",
    classes: r,
    size: t,
    htmlFor: e.isPageHeading ? void 0 : e.htmlFor,
    isPageHeading: !!e.isPageHeading
  };
}
const Xa = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = rc({ size: a, isPageHeading: r, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ n.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
}, Ka = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = ge(
    "nhsuk-fieldset",
    r
  ), i = ge(
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
      className: s,
      "aria-describedby": a,
      ...o,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ n.jsx("legend", { className: i, children: l() }),
        e
      ]
    }
  );
}, ac = ({
  items: e,
  name: t,
  idPrefix: r,
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
  ...b
}) => {
  const [D, g] = Ie(
    e.filter((x) => x.checked).map((x) => x.value)
  ), u = r || t, R = i ? `${u}-hint` : void 0, L = l ? `${u}-error` : void 0, I = [R, L].filter(Boolean).join(" ") || void 0, T = (x, C) => {
    let S;
    C ? S = [...D, x] : S = D.filter((p) => p !== x), g(S), f?.(S);
  }, A = () => e.map((x, C) => {
    const S = `${u}-${C + 1}`, p = `${S}-conditional`, w = D.includes(x.value), F = x.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: S,
          name: t,
          type: "checkbox",
          value: x.value,
          checked: w,
          disabled: F,
          onChange: (N) => T(x.value, N.target.checked),
          "aria-describedby": x.hint ? `${S}-hint` : I,
          ...x.conditional && {
            "aria-controls": p,
            "aria-expanded": w ? "true" : "false"
          },
          ...x.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: S, children: x.text }),
      x.hint && /* @__PURE__ */ n.jsx("div", { id: `${S}-hint`, className: "nhsuk-checkboxes__hint", children: x.hint }),
      x.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: ge("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !w
          }),
          id: p,
          children: typeof x.conditional == "object" && x.conditional !== null && "label" in x.conditional && "id" in x.conditional && "name" in x.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            x.conditional.label && /* @__PURE__ */ n.jsx(Xa, { htmlFor: x.conditional.id, children: x.conditional.label }),
            /* @__PURE__ */ n.jsx(qa, { ...x.conditional })
          ] }) : x.conditional
        }
      )
    ] }, x.value);
  }), j = ge(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": c
    },
    d
  ), M = ge("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: M, ...m, ...b, children: /* @__PURE__ */ n.jsxs(
    Ka,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: I,
      ...h,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: R, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: L, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: j, children: A() })
      ]
    }
  ) });
};
ac.displayName = "Checkboxes";
const sc = ({
  id: e,
  name: t,
  value: r,
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
  maxLength: b,
  minLength: D,
  wrap: g = "soft",
  resize: u = "vertical",
  autoComplete: R,
  spellCheck: L,
  onChange: I,
  onBlur: T,
  onFocus: A,
  onKeyDown: j,
  ...M
}) => {
  const x = ge(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": d,
      [`nhsuk-textarea--resize-${u}`]: u !== "vertical"
    },
    f
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: x,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: o,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": c,
      rows: h,
      cols: m,
      maxLength: b,
      minLength: D,
      wrap: g,
      autoComplete: R,
      spellCheck: L,
      onChange: I,
      onBlur: T,
      onFocus: A,
      onKeyDown: j,
      ...M
    }
  );
};
function oc(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const So = ({ id: e, className: t, children: r, ...a }) => {
  const o = oc({ id: e, className: t });
  return /* @__PURE__ */ n.jsx("div", { className: o.classes, id: o.id, ...a, children: r });
}, K0 = ({
  id: e,
  maxLength: t,
  maxWords: r,
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
  const b = s ?? i ?? "", [D, g] = Ie(b), [u, R] = Ie(0), [L, I] = Ie(!1), [T, A] = Ie(!1), j = pe((w) => r ? w.trim() === "" ? 0 : w.trim().split(/\s+/).length : w.length, [r]);
  Ae(() => {
    const w = j(D), F = t || r || 0, N = F - w, k = Math.floor(F * (a / 100));
    R(N), I(w > F), A(w >= k || w > F), f && f(w, N);
  }, [D, t, r, a, j, f]);
  const M = (w) => {
    const F = w.target.value;
    g(F), h && h(w);
  }, x = () => {
    const w = t || r || 0, F = r ? "word" : "character", N = r ? "words" : "characters";
    if (!T)
      return `You can enter up to ${w} ${w === 1 ? F : N}`;
    if (L) {
      const k = Math.abs(u);
      return `You have ${k} ${k === 1 ? F : N} too many`;
    } else
      return `You have ${u} ${u === 1 ? F : N} remaining`;
  }, C = ge(
    "nhsuk-character-count",
    d
  ), S = ge(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !T,
      "nhsuk-error-message": L
    },
    c?.classes
  ), p = ge(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": L
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: C,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          sc,
          {
            id: e,
            name: o,
            value: s !== void 0 ? D : void 0,
            defaultValue: s === void 0 ? i ?? D : void 0,
            rows: l,
            className: p,
            onChange: M,
            "aria-describedby": `${e}-info`,
            "aria-invalid": L || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          So,
          {
            id: `${e}-info`,
            className: S,
            role: "status",
            "aria-live": "polite",
            children: x()
          }
        )
      ]
    }
  );
}, ic = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = ge(
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
}, lc = ({
  id: e,
  name: t,
  ariaLabel: r,
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
  options: b,
  children: D,
  onChange: g,
  onBlur: u,
  onFocus: R,
  ...L
}) => {
  const I = ge(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    c
  ), T = () => b ? b.map((j, M) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: j.value,
      disabled: j.disabled,
      "data-initial-selected": j.selected || void 0,
      children: j.text
    },
    `${j.value}-${M}`
  )) : null, A = o === void 0 && a === void 0 && b ? b.find((j) => j.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: I,
      id: e,
      name: t,
      "aria-label": r,
      value: a,
      defaultValue: o !== void 0 ? o : A,
      disabled: s,
      required: i,
      "aria-describedby": d,
      multiple: f,
      size: h,
      autoComplete: m,
      onChange: g,
      onBlur: u,
      onFocus: R,
      ...L,
      children: D || T()
    }
  );
}, Wn = lc;
Wn.Option = ic;
function ko(e, {
  variant: t,
  selectedValue: r,
  enableBehaviourAttr: a,
  handleChange: o,
  handleBlur: s,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: d
}) {
  const { onChange: c, onBlur: f, onFocus: h, ...m } = e, {
    name: b,
    hasError: D = !1,
    describedBy: g,
    className: u,
    size: R = "normal",
    inline: L = !1,
    options: I,
    ...T
  } = m, A = ge(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": D,
      "nhsuk-radios--small": R === "small",
      "nhsuk-radios--inline": L
    },
    u
  );
  return /* @__PURE__ */ n.jsx(Ka, { children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: A,
      ...T,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: I.map((j, M) => {
        const x = `${b}-${M}`, C = j.conditional ? `${x}-conditional` : void 0, S = r === j.value;
        return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: x,
              name: b,
              type: "radio",
              value: j.value,
              disabled: j.disabled,
              ...t === "client" ? { checked: S, onChange: o, onBlur: s, onFocus: i, onKeyDown: l, ref: (p) => {
                p && d && (d.current[M] = p);
              } } : { defaultChecked: S, "data-nhs-radios-input": !0 },
              "aria-describedby": g
            }
          ),
          /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: x, children: j.text }),
          j.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: j.hint }),
          j.conditional && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: ge("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !S
              }),
              id: C,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof j.conditional == "object" && j.conditional !== null && "label" in j.conditional && "id" in j.conditional && "name" in j.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
                j.conditional.label && /* @__PURE__ */ n.jsx(Xa, { htmlFor: j.conditional.id, children: j.conditional.label }),
                /* @__PURE__ */ n.jsx(qa, { ...j.conditional })
              ] }) : j.conditional
            }
          )
        ] }, j.value);
      })
    }
  ) });
}
const Z0 = ({ value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = Ie(e || t || ""), d = Le([]), c = Le(i), f = (b) => {
    const D = b.target.value;
    D !== c.current && (c.current = D, l(D), r?.(b));
  }, h = (b) => {
    o?.(b);
  }, m = pe((b) => {
    const { key: D } = b;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(D)) return;
    b.preventDefault();
    const g = d.current.filter((I) => I && !I.disabled), u = g.indexOf(b.currentTarget);
    if (u === -1) return;
    let R = u;
    ["ArrowDown", "ArrowRight"].includes(D) ? R = (u + 1) % g.length : ["ArrowUp", "ArrowLeft"].includes(D) && (R = (u - 1 + g.length) % g.length);
    const L = g[R];
    L && (L.focus(), L.checked || L.click());
  }, []);
  return ko(
    { value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: o, ...s },
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
}, J0 = ({ value: e, defaultValue: t, ...r }) => {
  const a = e || t || "";
  return ko(
    { value: e, defaultValue: t, ...r },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0
    }
  );
}, Co = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = ge(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), l = a ? { maxWidth: a, ...o || {} } : o;
  return /* @__PURE__ */ n.jsx("div", { className: i, style: l, ...s, children: e });
}, Yt = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const o = ge("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, style: r, ...a, children: e });
}, _n = ({
  children: e,
  width: t = "full",
  mobileWidth: r,
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
      [`nhsuk-u-${r}-mobile`]: r,
      [`nhsuk-u-${a}-tablet`]: a,
      [`nhsuk-u-${o}-desktop`]: o,
      // Grid positioning
      [`nhsuk-grid-column-start-${s}`]: s && s >= 1 && s <= 7
    },
    i
  );
  return /* @__PURE__ */ n.jsx("div", { className: f, style: d, ...c, children: e });
}, da = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const s = rt.Children.toArray(e)[0], i = rt.isValidElement(s) && (s.type === Yt || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Co, { className: t, style: r, ...a, children: i ? e : /* @__PURE__ */ n.jsx(Yt, { children: e }) });
}, cc = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
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
      [`nhsuk-list--${r}`]: r !== "medium"
    },
    o
  );
  return /* @__PURE__ */ n.jsx(d, { className: c, role: s, ...l, children: e });
}, dc = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = ge("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, uc = cc;
uc.Item = dc;
const Q0 = ({
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
}, ex = {
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
}, tx = ({
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
}, nx = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, rx = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], jo = ({
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
};
function fc(e) {
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
function hc(e) {
  const t = e.level ?? fc(e.size), r = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: r, style: a };
}
const Dt = ({ level: e, className: t, text: r, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const d = hc({ level: e, size: s, className: t, marginBottom: i }), c = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r);
  return vo(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function pc(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const Cs = ({ id: e, className: t, visuallyHiddenText: r = "Error:", children: a, ...o }) => {
  const s = pc({ id: e, className: t, visuallyHiddenText: r });
  return /* @__PURE__ */ n.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, ax = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
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
  ), f = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, h = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, m = (b) => {
    const D = b.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
    return b.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: b.href,
        ...b.attributes,
        children: D
      }
    ) : D;
  };
  return /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: f() }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (r || a) && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: h() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((b, D) => /* @__PURE__ */ n.jsx("li", { children: m(b) }, D)) })
        ] })
      ]
    }
  );
}, sx = ({
  id: e,
  className: t,
  items: r,
  namePrefix: a,
  values: o = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: d,
  ...c
}) => {
  const [f, h] = Ie(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [m, b] = Ie({}), D = (k) => k % 4 === 0 && k % 100 !== 0 || k % 400 === 0, g = (k, y) => {
    const E = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return k === 2 && D(y) ? 29 : E[k - 1];
  }, u = (k, y, E) => {
    if (!k) return;
    if (!/^\d+$/.test(k)) return "Day must be a number";
    const Q = parseInt(k, 10);
    if (Q < 1 || Q > 31) return "Day must be between 1 and 31";
    if (y && E) {
      const H = parseInt(y, 10), P = parseInt(E, 10);
      if (!isNaN(H) && !isNaN(P) && H >= 1 && H <= 12) {
        const v = g(H, P);
        if (Q > v)
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
          ][H - 1]} ${P} only has ${v} days`;
      }
    }
  }, R = (k) => {
    if (!k) return;
    if (!/^\d+$/.test(k)) return "Month must be a number";
    const y = parseInt(k, 10);
    if (y < 1 || y > 12) return "Month must be between 1 and 12";
  }, L = (k) => {
    if (!k) return;
    if (!/^\d+$/.test(k)) return "Year must be a number";
    const y = parseInt(k, 10), E = (/* @__PURE__ */ new Date()).getFullYear();
    if (y < 1900 || y > E + 10)
      return `Year must be between 1900 and ${E + 10}`;
  }, I = (k, y, E) => {
    if (!k || !y || !E) return;
    const Q = parseInt(k, 10), H = parseInt(y, 10), P = parseInt(E, 10);
    if (isNaN(Q) || isNaN(H) || isNaN(P) || H < 1 || H > 12 || P < 1900) return;
    const v = g(H, P);
    Q < 1 || Q > v;
  }, T = pe((k, y) => {
    const E = {
      ...f,
      [k]: y
    };
    h(E), d && d(E);
  }, [f, d]), A = pe((k) => {
    const y = f[k];
    let E;
    if (k === "day")
      E = u(y, f.month, f.year);
    else if (k === "month") {
      if (E = R(y), !E && f.day) {
        const Q = u(f.day, y, f.year);
        b((H) => ({
          ...H,
          day: Q
        }));
      }
    } else if (k === "year" && (E = L(y), !E && f.day && f.month)) {
      const Q = u(f.day, f.month, y);
      b((H) => ({
        ...H,
        day: Q
      }));
    }
    if (b((Q) => ({
      ...Q,
      [k]: E
    })), f.day && f.month && f.year) {
      const Q = I(
        k === "day" ? y : f.day,
        k === "month" ? y : f.month,
        k === "year" ? y : f.year
      );
      Q && b((H) => ({
        ...H,
        day: Q
      }));
    }
  }, [f, u, R, L, I]), j = De(() => [
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
  ], []), M = r || j;
  let x = s?.describedBy || "";
  const C = i ? `${e}-hint` : "", S = l ? `${e}-error` : "";
  C && (x = x ? `${x} ${C}` : C), S && (x = x ? `${x} ${S}` : S);
  const p = Object.values(m).some((k) => k), w = ge(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || p
    }
  ), F = ge(
    "nhsuk-date-input",
    t
  ), N = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      So,
      {
        id: C,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      Cs,
      {
        id: S,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([k, y]) => y ? /* @__PURE__ */ n.jsxs(
        Cs,
        {
          id: `${e}-${k}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            y
          ]
        },
        `${k}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: F, id: e, "data-testid": "date-input", ...c, children: M.map((k) => {
      const y = k.id || `${e}-${k.name}`, E = a ? `${a}[${k.name}]` : k.name, Q = k.label || k.name.charAt(0).toUpperCase() + k.name.slice(1), H = m[k.name], P = f[k.name] || "";
      let v = x;
      if (H) {
        const _ = `${e}-${k.name}-error`;
        v = v ? `${v} ${_}` : _;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          Xa,
          {
            htmlFor: y,
            className: "nhsuk-date-input__label",
            children: Q
          }
        ),
        /* @__PURE__ */ n.jsx(
          qa,
          {
            id: y,
            name: E,
            value: P,
            className: ge("nhsuk-date-input__input", k.classes, {
              "nhsuk-input--error": H
            }),
            inputMode: k.inputmode,
            autoComplete: k.autocomplete,
            pattern: k.pattern,
            "aria-describedby": v || void 0,
            hasError: !!H,
            onChange: (_) => T(k.name, _.target.value),
            onBlur: () => A(k.name)
          }
        )
      ] }, k.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: w, children: s ? /* @__PURE__ */ n.jsx(
    Ka,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: x || void 0,
      children: N()
    }
  ) : N() });
}, No = {
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
}, To = Hl(No), mc = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...No, ...t };
  return /* @__PURE__ */ n.jsx(To.Provider, { value: r, children: e });
}, ox = () => {
  const e = Pl(To);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function gc() {
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
function xc() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = gc(), document.head.appendChild(e);
}
const ix = ({ children: e, theme: t }) => (Ae(() => {
  xc();
}, []), /* @__PURE__ */ n.jsx(mc, { theme: t, children: e })), bc = ({
  mode: e = "form",
  action: t = "/search",
  method: r = "get",
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
  results: b = [],
  formAttributes: D = {},
  inputAttributes: g = {},
  buttonAttributes: u = {},
  preventDefaultSubmit: R = !1,
  debounceMs: L = 300,
  minQueryLength: I = 1
}) => {
  const [T, A] = Ie(""), [j, M] = Ie(!1), x = Le(void 0), C = Le(null), S = Le(null), p = e === "controlled" && o !== void 0, w = p ? o : T, F = pe((W) => {
    x.current && clearTimeout(x.current), x.current = setTimeout(() => {
      f.onChange && W.length >= I && f.onChange(W);
    }, L);
  }, [f.onChange, L, I]), N = pe((W) => {
    const B = W.target.value;
    p || A(B), e !== "form" && F(B);
  }, [p, e, F]), k = pe((W) => {
    const B = w.trim(), q = {
      query: B,
      timestamp: Date.now(),
      formData: new FormData(W.currentTarget)
    };
    e === "controlled" || e === "hybrid" && R ? (W.preventDefault(), f.onSearch && B.length >= I && f.onSearch(q)) : e === "hybrid" && f.onSearch && B.length >= I && f.onSearch(q);
  }, [e, w, f.onSearch, R, I]), y = pe(() => {
    M(!0), f.onFocus?.();
  }, [f.onFocus]), E = pe(() => {
    M(!1), f.onBlur?.();
  }, [f.onBlur]), Q = pe(() => {
    p || A(""), f.onClear?.(), S.current?.focus();
  }, [p, f.onClear]);
  Ae(() => () => {
    x.current && clearTimeout(x.current);
  }, []);
  const H = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: ge("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": h
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), P = () => /* @__PURE__ */ n.jsx(
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
  ), v = () => !w || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: Q,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), _ = () => !m || !b.length || !j ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: b.map((W) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: W.href ? /* @__PURE__ */ n.jsxs("a", { href: W.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: W.title }),
    W.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: W.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => f.onSearch?.({ query: W.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: W.title }),
        W.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: W.description })
      ]
    }
  ) }, W.id)) });
  return /* @__PURE__ */ n.jsxs("div", { className: ge("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": h,
    "nhsuk-header__search--focused": j,
    "nhsuk-header__search--has-results": m && b.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: C,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        role: "search",
        onSubmit: k,
        ...D,
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
                ref: S,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: w,
                onChange: N,
                onFocus: y,
                onBlur: E,
                disabled: c || h,
                ...m && b.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...g
              }
            ),
            v()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || h || e !== "form" && w.length < I,
              ...u,
              children: [
                h ? P() : H(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: h ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    _()
  ] });
};
function $o(e, {
  variant: t,
  isClient: r,
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
    service: m = {},
    organisation: b,
    search: D,
    account: g,
    navigation: u,
    containerClasses: R,
    variant: L = "default",
    attributes: I = {},
    maxVisibleItems: T,
    // deprecated (ignored)
    responsiveNavigation: A = !0,
    ...j
  } = e;
  "maxVisibleItems" in j && delete j.maxVisibleItems;
  const M = m.href && !h.href || m.href && m.href === h.href, x = M ? m.href : h.href, C = ge(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": L === "organisation" || b,
      "nhsuk-header--white": L === "white"
    },
    f
  ), S = ge(
    "nhsuk-header__container",
    R
  ), p = ge(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": u?.white,
      "nhsuk-header__navigation--justified": u?.justified
    },
    u?.className
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
      "aria-label": h.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ n.jsx("title", { children: h.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), F = () => h.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: h.src,
      width: "280",
      alt: h.ariaLabel || "NHS"
    }
  ) : w(), N = () => b ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      b.name,
      b.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        b.split
      ] })
    ] }),
    b.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: b.descriptor })
  ] }) : null, k = (v, _) => v ? _ ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: _, children: v }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: v }) : null, y = (v) => v.active || v.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text }) : v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text, E = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), Q = t === "server" && u?.items && !A, H = Q ? [] : u?.items, P = Q ? u.items : [];
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: C,
      role: "banner",
      "data-module": "nhsuk-header",
      ...I,
      ...j,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: S, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            x ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: x, children: [
              F(),
              N(),
              M && k(m.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              F(),
              N(),
              M && k(m.text)
            ] }),
            m.text && !M && k(m.text, m.href)
          ] }),
          D && /* @__PURE__ */ n.jsx(bc, { ...D }),
          /* @__PURE__ */ n.jsx(
            Kl,
            {
              ...g,
              variant: L === "white" ? "white" : "default"
            }
          )
        ] }),
        u && u.items && u.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: p,
            "aria-label": u.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: ge(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": r && t === "client",
                    "nhsuk-header__navigation-container--ssr": !r
                  },
                  R
                ),
                ref: t === "client" ? d : void 0,
                children: /* @__PURE__ */ n.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: t === "client" ? c : void 0,
                    children: [
                      (t === "server" ? H || [] : u?.items || []).map((v, _) => /* @__PURE__ */ n.jsx(
                        "li",
                        {
                          className: ge(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": v.active || v.current,
                              "nhsuk-header__navigation-item--hidden": t === "client" && o && s !== void 0 && _ >= (s ?? 0)
                            },
                            v.className
                          ),
                          ...v.attributes || {},
                          children: /* @__PURE__ */ n.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: v.href,
                              ...v.active || v.current ? { "aria-current": v.current ? "page" : "true" } : {},
                              children: y(v)
                            }
                          )
                        },
                        _
                      )),
                      t === "client" && o && s !== void 0 && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ n.jsxs(
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
                            /* @__PURE__ */ n.jsx("span", { children: "More" }),
                            E()
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
        t === "client" && r && u && u.items && u.items.length > 0 && a && i && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: u.items.slice(s ?? 0).map((v, _) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: ge("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": v.active || v.current
                }),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: v.href,
                    ...v.active || v.current ? { "aria-current": v.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: y(v)
                  }
                )
              },
              `overflow-${(s ?? 0) + _}`
            )) })
          }
        ),
        t === "server" && Q && P.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: P.map((v, _) => /* @__PURE__ */ n.jsx(
          "li",
          {
            className: ge("nhsuk-header__dropdown-item", {
              "nhsuk-header__dropdown-item--current": v.active || v.current
            }),
            children: /* @__PURE__ */ n.jsx(
              "a",
              {
                className: "nhsuk-header__dropdown-link",
                href: v.href,
                ...v.active || v.current ? { "aria-current": v.current ? "page" : "true" } : {},
                children: y(v)
              }
            )
          },
          `overflow-server-${_}`
        )) }) })
      ]
    }
  );
}
const Do = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: d = "default",
  attributes: c = {},
  ...f
}) => {
  const [h, m] = Ie(!1), [b, D] = Ie(!1), [g, u] = Ie(i?.items?.length || 0), [R, L] = Ie(!1), [I, T] = Ie(!1), A = Le(null), j = Le(null), M = Le(!1);
  Ae(() => {
    typeof window > "u" || T(!0);
  }, []), Ae(() => {
    if (typeof document > "u") return;
    const p = (w) => {
      w.key === "Escape" && h && m(!1);
    };
    if (h)
      return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [h]);
  const x = Le(null), C = pe(() => {
    if (!I || !i?.items || i.items.length === 0 || M.current) return;
    const p = A.current, w = j.current;
    if (!p || !w) return;
    M.current = !0, p.classList.add("nhsuk-header__navigation-container--measuring");
    const F = p.clientWidth, N = Array.from(w.children);
    if (!N.length) {
      p.classList.remove("nhsuk-header__navigation-container--measuring"), M.current = !1;
      return;
    }
    if (x.current == null) {
      const B = document.createElement("button");
      B.type = "button", B.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", B.style.position = "absolute", B.style.visibility = "hidden", B.style.pointerEvents = "none", B.innerHTML = "<span>More</span>", p.appendChild(B), x.current = B.getBoundingClientRect().width || 104, p.removeChild(B);
    }
    const k = x.current + 16;
    let y = 0, E = 0;
    const Q = window.getComputedStyle(p), H = parseFloat(Q.paddingLeft) || 0, P = parseFloat(Q.paddingRight) || 0;
    let v = H + P;
    for (const B of N) {
      const q = B.getBoundingClientRect().width;
      if (y + q + k + v > F) break;
      y += q, E += 1;
    }
    const _ = E < i.items.length, W = _ ? E : i.items.length;
    D((B) => B === _ ? B : _), u((B) => B === W ? B : W), p.classList.remove("nhsuk-header__navigation-container--measuring"), M.current = !1;
  }, [I, i?.items]);
  Ae(() => {
    if (!I) return;
    const p = A.current;
    if (!p) return;
    let w = null;
    const F = () => {
      w == null && (w = window.requestAnimationFrame(() => {
        w = null, C();
      }));
    };
    C();
    const N = new ResizeObserver(() => F());
    return N.observe(p), j.current && N.observe(j.current), () => {
      w != null && window.cancelAnimationFrame(w), N.disconnect();
    };
  }, [I, C]), Ae(() => {
    I && C();
  }, [i?.items?.length, I, C]);
  const S = (p) => {
    p && (p.preventDefault(), p.stopPropagation());
    const w = !h;
    m(w), L(w);
  };
  return $o(
    {
      className: e,
      logo: t,
      service: r,
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
      isClient: I,
      menuOpen: h,
      showMoreButton: b,
      visibleItems: g,
      dropdownVisible: R,
      toggleMenu: S,
      navContainerRef: A,
      navListRef: j
    }
  );
}, lx = (e) => $o(e, {
  variant: "server",
  isClient: !1
}), yc = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
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
    r,
    !d && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), b = d || e || a || o, D = () => {
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
      className: f,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: b && /* @__PURE__ */ n.jsx("div", { className: h, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          D(),
          d || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && b && /* @__PURE__ */ n.jsx("div", { className: h, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          D(),
          d || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
yc.displayName = "Hero";
const Io = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: d,
  footerStyle: c,
  containerStyle: f
}) => {
  const h = (b, D = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: ge("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": D
      }),
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: b.URL,
          target: b.newWindow ? "_blank" : void 0,
          rel: b.newWindow ? "noopener noreferrer" : void 0,
          children: b.label
        }
      )
    },
    `${b.URL}-${b.label}`
  ), m = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: ge("nhsuk-width-container", i),
        style: f,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: ge("nhsuk-footer", e), style: c, children: m ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((b) => h(b)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((b) => h(b)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((b) => h(b)) }),
              o && o.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((b) => h(b)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((b) => h(b, !0)),
              (r || []).map((b) => h(b, !0)),
              (a || []).map((b) => h(b, !0)),
              (o || []).map((b) => h(b, !0))
            ] })
          ) }),
          !m && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    m && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function Hn(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function vc(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Za(e) {
  let t, r, a;
  e.length !== 2 ? (t = Hn, r = (l, d) => Hn(e(l), d), a = (l, d) => e(l) - d) : (t = e === Hn || e === vc ? e : _c, r = e, a = e);
  function o(l, d, c = 0, f = l.length) {
    if (c < f) {
      if (t(d, d) !== 0) return f;
      do {
        const h = c + f >>> 1;
        r(l[h], d) < 0 ? c = h + 1 : f = h;
      } while (c < f);
    }
    return c;
  }
  function s(l, d, c = 0, f = l.length) {
    if (c < f) {
      if (t(d, d) !== 0) return f;
      do {
        const h = c + f >>> 1;
        r(l[h], d) <= 0 ? c = h + 1 : f = h;
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
function _c() {
  return 0;
}
function wc(e) {
  return e === null ? NaN : +e;
}
const Sc = Za(Hn), kc = Sc.right;
Za(wc).center;
function Mo(e, t) {
  let r, a;
  if (t === void 0)
    for (const o of e)
      o != null && (r === void 0 ? o >= o && (r = a = o) : (r > o && (r = o), a < o && (a = o)));
  else {
    let o = -1;
    for (let s of e)
      (s = t(s, ++o, e)) != null && (r === void 0 ? s >= s && (r = a = s) : (r > s && (r = s), a < s && (a = s)));
  }
  return [r, a];
}
class js extends Map {
  constructor(t, r = Nc) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(Ns(this, t));
  }
  has(t) {
    return super.has(Ns(this, t));
  }
  set(t, r) {
    return super.set(Cc(this, t), r);
  }
  delete(t) {
    return super.delete(jc(this, t));
  }
}
function Ns({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : r;
}
function Cc({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : (e.set(a, r), r);
}
function jc({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) && (r = e.get(a), e.delete(a)), r;
}
function Nc(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Tc = Math.sqrt(50), $c = Math.sqrt(10), Dc = Math.sqrt(2);
function On(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Tc ? 10 : s >= $c ? 5 : s >= Dc ? 2 : 1;
  let l, d, c;
  return o < 0 ? (c = Math.pow(10, -o) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, o) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= r && r < 2 ? On(e, t, r * 2) : [l, d, c];
}
function Ic(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, s, i] = a ? On(t, e, r) : On(e, t, r);
  if (!(s >= o)) return [];
  const l = s - o + 1, d = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) d[c] = (s - c) / -i;
    else for (let c = 0; c < l; ++c) d[c] = (s - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) d[c] = (o + c) / -i;
  else for (let c = 0; c < l; ++c) d[c] = (o + c) * i;
  return d;
}
function ua(e, t, r) {
  return t = +t, e = +e, r = +r, On(e, t, r)[2];
}
function fa(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? ua(t, e, r) : ua(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function Mc(e, t, r) {
  e = +e, t = +t, r = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +r;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / r)) | 0, s = new Array(o); ++a < o; )
    s[a] = e + a * r;
  return s;
}
function Ir(e, t) {
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
function Lo() {
  var e = new js(), t = [], r = [], a = Ts;
  function o(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (a !== Ts) return a;
      e.set(s, i = t.push(s) - 1);
    }
    return r[i % r.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new js();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (r = Array.from(s), o) : r.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.copy = function() {
    return Lo(t, r).unknown(a);
  }, Ir.apply(o, arguments), o;
}
function Fo() {
  var e = Lo().unknown(void 0), t = e.domain, r = e.range, a = 0, o = 1, s, i, l = !1, d = 0, c = 0, f = 0.5;
  delete e.unknown;
  function h() {
    var m = t().length, b = o < a, D = b ? o : a, g = b ? a : o;
    s = (g - D) / Math.max(1, m - d + c * 2), l && (s = Math.floor(s)), D += (g - D - s * (m - d)) * f, i = s * (1 - d), l && (D = Math.round(D), i = Math.round(i));
    var u = Mc(m).map(function(R) {
      return D + s * R;
    });
    return r(b ? u.reverse() : u);
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
    return Fo(t(), [a, o]).round(l).paddingInner(d).paddingOuter(c).align(f);
  }, Ir.apply(h(), arguments);
}
function Ja(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Ao(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function $n() {
}
var wn = 0.7, Un = 1 / wn, sn = "\\s*([+-]?\\d+)\\s*", Sn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", pt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Lc = /^#([0-9a-f]{3,8})$/, Fc = new RegExp(`^rgb\\(${sn},${sn},${sn}\\)$`), Ac = new RegExp(`^rgb\\(${pt},${pt},${pt}\\)$`), Bc = new RegExp(`^rgba\\(${sn},${sn},${sn},${Sn}\\)$`), Ec = new RegExp(`^rgba\\(${pt},${pt},${pt},${Sn}\\)$`), Rc = new RegExp(`^hsl\\(${Sn},${pt},${pt}\\)$`), Pc = new RegExp(`^hsla\\(${Sn},${pt},${pt},${Sn}\\)$`), $s = {
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
Ja($n, kn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ds,
  // Deprecated! Use color.formatHex.
  formatHex: Ds,
  formatHex8: Hc,
  formatHsl: zc,
  formatRgb: Is,
  toString: Is
});
function Ds() {
  return this.rgb().formatHex();
}
function Hc() {
  return this.rgb().formatHex8();
}
function zc() {
  return Bo(this).formatHsl();
}
function Is() {
  return this.rgb().formatRgb();
}
function kn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Lc.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Ms(t) : r === 3 ? new at(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Bn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Bn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Fc.exec(e)) ? new at(t[1], t[2], t[3], 1) : (t = Ac.exec(e)) ? new at(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Bc.exec(e)) ? Bn(t[1], t[2], t[3], t[4]) : (t = Ec.exec(e)) ? Bn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Rc.exec(e)) ? As(t[1], t[2] / 100, t[3] / 100, 1) : (t = Pc.exec(e)) ? As(t[1], t[2] / 100, t[3] / 100, t[4]) : $s.hasOwnProperty(e) ? Ms($s[e]) : e === "transparent" ? new at(NaN, NaN, NaN, 0) : null;
}
function Ms(e) {
  return new at(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Bn(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new at(e, t, r, a);
}
function Wc(e) {
  return e instanceof $n || (e = kn(e)), e ? (e = e.rgb(), new at(e.r, e.g, e.b, e.opacity)) : new at();
}
function ha(e, t, r, a) {
  return arguments.length === 1 ? Wc(e) : new at(e, t, r, a ?? 1);
}
function at(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
Ja(at, ha, Ao($n, {
  brighter(e) {
    return e = e == null ? Un : Math.pow(Un, e), new at(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wn : Math.pow(wn, e), new at(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new at(Ut(this.r), Ut(this.g), Ut(this.b), Gn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ls,
  // Deprecated! Use color.formatHex.
  formatHex: Ls,
  formatHex8: Oc,
  formatRgb: Fs,
  toString: Fs
}));
function Ls() {
  return `#${Ot(this.r)}${Ot(this.g)}${Ot(this.b)}`;
}
function Oc() {
  return `#${Ot(this.r)}${Ot(this.g)}${Ot(this.b)}${Ot((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Fs() {
  const e = Gn(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ut(this.r)}, ${Ut(this.g)}, ${Ut(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Gn(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ut(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ot(e) {
  return e = Ut(e), (e < 16 ? "0" : "") + e.toString(16);
}
function As(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new it(e, t, r, a);
}
function Bo(e) {
  if (e instanceof it) return new it(e.h, e.s, e.l, e.opacity);
  if (e instanceof $n || (e = kn(e)), !e) return new it();
  if (e instanceof it) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, d = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= d < 0.5 ? s + o : 2 - s - o, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new it(i, l, d, e.opacity);
}
function Uc(e, t, r, a) {
  return arguments.length === 1 ? Bo(e) : new it(e, t, r, a ?? 1);
}
function it(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
Ja(it, Uc, Ao($n, {
  brighter(e) {
    return e = e == null ? Un : Math.pow(Un, e), new it(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wn : Math.pow(wn, e), new it(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new at(
      Yr(e >= 240 ? e - 240 : e + 120, o, a),
      Yr(e, o, a),
      Yr(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new it(Bs(this.h), En(this.s), En(this.l), Gn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Gn(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Bs(this.h)}, ${En(this.s) * 100}%, ${En(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Bs(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function En(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Yr(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Qa = (e) => () => e;
function Gc(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Yc(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function Vc(e) {
  return (e = +e) == 1 ? Eo : function(t, r) {
    return r - t ? Yc(t, r, e) : Qa(isNaN(t) ? r : t);
  };
}
function Eo(e, t) {
  var r = t - e;
  return r ? Gc(e, r) : Qa(isNaN(e) ? t : e);
}
const Es = (function e(t) {
  var r = Vc(t);
  function a(o, s) {
    var i = r((o = ha(o)).r, (s = ha(s)).r), l = r(o.g, s.g), d = r(o.b, s.b), c = Eo(o.opacity, s.opacity);
    return function(f) {
      return o.r = i(f), o.g = l(f), o.b = d(f), o.opacity = c(f), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function qc(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Xc(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Kc(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = es(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Zc(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function Yn(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Jc(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = es(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var pa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Vr = new RegExp(pa.source, "g");
function Qc(e) {
  return function() {
    return e;
  };
}
function ed(e) {
  return function(t) {
    return e(t) + "";
  };
}
function td(e, t) {
  var r = pa.lastIndex = Vr.lastIndex = 0, a, o, s, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = pa.exec(e)) && (o = Vr.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, d.push({ i, x: Yn(a, o) })), r = Vr.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? d[0] ? ed(d[0].x) : Qc(t) : (t = d.length, function(c) {
    for (var f = 0, h; f < t; ++f) l[(h = d[f]).i] = h.x(c);
    return l.join("");
  });
}
function es(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? Qa(t) : (r === "number" ? Yn : r === "string" ? (a = kn(t)) ? (t = a, Es) : td : t instanceof kn ? Es : t instanceof Date ? Zc : Xc(t) ? qc : Array.isArray(t) ? Kc : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Jc : Yn)(e, t);
}
function nd(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function rd(e) {
  return function() {
    return e;
  };
}
function ad(e) {
  return +e;
}
var Rs = [0, 1];
function rn(e) {
  return e;
}
function ma(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : rd(isNaN(t) ? NaN : 0.5);
}
function sd(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function od(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = ma(o, a), s = r(i, s)) : (a = ma(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function id(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = ma(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var d = kc(e, l, 1, a) - 1;
    return s[d](o[d](l));
  };
}
function Ro(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ld() {
  var e = Rs, t = Rs, r = es, a, o, s, i = rn, l, d, c;
  function f() {
    var m = Math.min(e.length, t.length);
    return i !== rn && (i = sd(e[0], e[m - 1])), l = m > 2 ? id : od, d = c = null, h;
  }
  function h(m) {
    return m == null || isNaN(m = +m) ? s : (d || (d = l(e.map(a), t, r)))(a(i(m)));
  }
  return h.invert = function(m) {
    return i(o((c || (c = l(t, e.map(a), Yn)))(m)));
  }, h.domain = function(m) {
    return arguments.length ? (e = Array.from(m, ad), f()) : e.slice();
  }, h.range = function(m) {
    return arguments.length ? (t = Array.from(m), f()) : t.slice();
  }, h.rangeRound = function(m) {
    return t = Array.from(m), r = nd, f();
  }, h.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : rn, f()) : i !== rn;
  }, h.interpolate = function(m) {
    return arguments.length ? (r = m, f()) : r;
  }, h.unknown = function(m) {
    return arguments.length ? (s = m, h) : s;
  }, function(m, b) {
    return a = m, o = b, f();
  };
}
function Po() {
  return ld()(rn, rn);
}
function cd(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Vn(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, a = e.slice(0, r);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(r + 1)
  ];
}
function cn(e) {
  return e = Vn(Math.abs(e)), e ? e[1] : NaN;
}
function dd(e, t) {
  return function(r, a) {
    for (var o = r.length, s = [], i = 0, l = e[0], d = 0; o > 0 && l > 0 && (d + l + 1 > a && (l = Math.max(1, a - d)), s.push(r.substring(o -= l, o + l)), !((d += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function ud(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var fd = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function qn(e) {
  if (!(t = fd.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new ts({
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
qn.prototype = ts.prototype;
function ts(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ts.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function hd(e) {
  e: for (var t = e.length, r = 1, a = -1, o; r < t; ++r)
    switch (e[r]) {
      case ".":
        a = o = r;
        break;
      case "0":
        a === 0 && (a = r), o = r;
        break;
      default:
        if (!+e[r]) break e;
        a > 0 && (a = 0);
        break;
    }
  return a > 0 ? e.slice(0, a) + e.slice(o + 1) : e;
}
var Ho;
function pd(e, t) {
  var r = Vn(e, t);
  if (!r) return e + "";
  var a = r[0], o = r[1], s = o - (Ho = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return s === i ? a : s > i ? a + new Array(s - i + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Vn(e, Math.max(0, t + s - 1))[0];
}
function Ps(e, t) {
  var r = Vn(e, t);
  if (!r) return e + "";
  var a = r[0], o = r[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const Hs = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: cd,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ps(e * 100, t),
  r: Ps,
  s: pd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function zs(e) {
  return e;
}
var Ws = Array.prototype.map, Os = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function md(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? zs : dd(Ws.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? zs : ud(Ws.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(h) {
    h = qn(h);
    var m = h.fill, b = h.align, D = h.sign, g = h.symbol, u = h.zero, R = h.width, L = h.comma, I = h.precision, T = h.trim, A = h.type;
    A === "n" ? (L = !0, A = "g") : Hs[A] || (I === void 0 && (I = 12), T = !0, A = "g"), (u || m === "0" && b === "=") && (u = !0, m = "0", b = "=");
    var j = g === "$" ? r : g === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", M = g === "$" ? a : /[%p]/.test(A) ? i : "", x = Hs[A], C = /[defgprs%]/.test(A);
    I = I === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, I)) : Math.max(0, Math.min(20, I));
    function S(p) {
      var w = j, F = M, N, k, y;
      if (A === "c")
        F = x(p) + F, p = "";
      else {
        p = +p;
        var E = p < 0 || 1 / p < 0;
        if (p = isNaN(p) ? d : x(Math.abs(p), I), T && (p = hd(p)), E && +p == 0 && D !== "+" && (E = !1), w = (E ? D === "(" ? D : l : D === "-" || D === "(" ? "" : D) + w, F = (A === "s" ? Os[8 + Ho / 3] : "") + F + (E && D === "(" ? ")" : ""), C) {
          for (N = -1, k = p.length; ++N < k; )
            if (y = p.charCodeAt(N), 48 > y || y > 57) {
              F = (y === 46 ? o + p.slice(N + 1) : p.slice(N)) + F, p = p.slice(0, N);
              break;
            }
        }
      }
      L && !u && (p = t(p, 1 / 0));
      var Q = w.length + p.length + F.length, H = Q < R ? new Array(R - Q + 1).join(m) : "";
      switch (L && u && (p = t(H + p, H.length ? R - F.length : 1 / 0), H = ""), b) {
        case "<":
          p = w + p + F + H;
          break;
        case "=":
          p = w + H + p + F;
          break;
        case "^":
          p = H.slice(0, Q = H.length >> 1) + w + p + F + H.slice(Q);
          break;
        default:
          p = H + w + p + F;
          break;
      }
      return s(p);
    }
    return S.toString = function() {
      return h + "";
    }, S;
  }
  function f(h, m) {
    var b = c((h = qn(h), h.type = "f", h)), D = Math.max(-8, Math.min(8, Math.floor(cn(m) / 3))) * 3, g = Math.pow(10, -D), u = Os[8 + D / 3];
    return function(R) {
      return b(g * R) + u;
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var Rn, zo, Wo;
gd({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function gd(e) {
  return Rn = md(e), zo = Rn.format, Wo = Rn.formatPrefix, Rn;
}
function xd(e) {
  return Math.max(0, -cn(Math.abs(e)));
}
function bd(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(cn(t) / 3))) * 3 - cn(Math.abs(e)));
}
function yd(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, cn(t) - cn(e)) + 1;
}
function vd(e, t, r, a) {
  var o = fa(e, t, r), s;
  switch (a = qn(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = bd(o, i)) && (a.precision = s), Wo(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = yd(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = xd(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return zo(a);
}
function _d(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var a = t();
    return Ic(a[0], a[a.length - 1], r ?? 10);
  }, e.tickFormat = function(r, a) {
    var o = t();
    return vd(o[0], o[o.length - 1], r ?? 10, a);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var a = t(), o = 0, s = a.length - 1, i = a[o], l = a[s], d, c, f = 10;
    for (l < i && (c = i, i = l, l = c, c = o, o = s, s = c); f-- > 0; ) {
      if (c = ua(i, l, r), c === d)
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
function Xn() {
  var e = Po();
  return e.copy = function() {
    return Ro(e, Xn());
  }, Ir.apply(e, arguments), _d(e);
}
function wd(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const qr = /* @__PURE__ */ new Date(), Xr = /* @__PURE__ */ new Date();
function qe(e, t, r, a) {
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
  }, o.filter = (s) => qe((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), r && (o.count = (s, i) => (qr.setTime(+s), Xr.setTime(+i), e(qr), e(Xr), Math.floor(r(qr, Xr))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const Kn = qe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Kn.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? qe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Kn);
Kn.range;
const Tt = 1e3, ot = Tt * 60, $t = ot * 60, It = $t * 24, ns = It * 7, Us = It * 30, Kr = It * 365, an = qe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Tt);
}, (e, t) => (t - e) / Tt, (e) => e.getUTCSeconds());
an.range;
const rs = qe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Tt);
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getMinutes());
rs.range;
const Sd = qe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getUTCMinutes());
Sd.range;
const as = qe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Tt - e.getMinutes() * ot);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getHours());
as.range;
const kd = qe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCHours());
kd.range;
const Dn = qe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ot) / It,
  (e) => e.getDate() - 1
);
Dn.range;
const ss = qe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / It, (e) => e.getUTCDate() - 1);
ss.range;
const Cd = qe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / It, (e) => Math.floor(e / It));
Cd.range;
function Xt(e) {
  return qe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * ot) / ns);
}
const Mr = Xt(0), Zn = Xt(1), jd = Xt(2), Nd = Xt(3), dn = Xt(4), Td = Xt(5), $d = Xt(6);
Mr.range;
Zn.range;
jd.range;
Nd.range;
dn.range;
Td.range;
$d.range;
function Kt(e) {
  return qe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / ns);
}
const Oo = Kt(0), Jn = Kt(1), Dd = Kt(2), Id = Kt(3), un = Kt(4), Md = Kt(5), Ld = Kt(6);
Oo.range;
Jn.range;
Dd.range;
Id.range;
un.range;
Md.range;
Ld.range;
const Cn = qe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Cn.range;
const Fd = qe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Fd.range;
const Mt = qe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Mt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : qe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Mt.range;
const Vt = qe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Vt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : qe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Vt.range;
function Ad(e, t, r, a, o, s) {
  const i = [
    [an, 1, Tt],
    [an, 5, 5 * Tt],
    [an, 15, 15 * Tt],
    [an, 30, 30 * Tt],
    [s, 1, ot],
    [s, 5, 5 * ot],
    [s, 15, 15 * ot],
    [s, 30, 30 * ot],
    [o, 1, $t],
    [o, 3, 3 * $t],
    [o, 6, 6 * $t],
    [o, 12, 12 * $t],
    [a, 1, It],
    [a, 2, 2 * It],
    [r, 1, ns],
    [t, 1, Us],
    [t, 3, 3 * Us],
    [e, 1, Kr]
  ];
  function l(c, f, h) {
    const m = f < c;
    m && ([c, f] = [f, c]);
    const b = h && typeof h.range == "function" ? h : d(c, f, h), D = b ? b.range(c, +f + 1) : [];
    return m ? D.reverse() : D;
  }
  function d(c, f, h) {
    const m = Math.abs(f - c) / h, b = Za(([, , u]) => u).right(i, m);
    if (b === i.length) return e.every(fa(c / Kr, f / Kr, h));
    if (b === 0) return Kn.every(Math.max(fa(c, f, h), 1));
    const [D, g] = i[m / i[b - 1][2] < i[b][2] / m ? b - 1 : b];
    return D.every(g);
  }
  return [l, d];
}
const [Bd, Ed] = Ad(Mt, Cn, Mr, Dn, as, rs);
function Zr(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Jr(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function xn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Rd(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = bn(o), f = yn(o), h = bn(s), m = yn(s), b = bn(i), D = yn(i), g = bn(l), u = yn(l), R = bn(d), L = yn(d), I = {
    a: E,
    A: Q,
    b: H,
    B: P,
    c: null,
    d: Ks,
    e: Ks,
    f: iu,
    g: xu,
    G: yu,
    H: au,
    I: su,
    j: ou,
    L: Uo,
    m: lu,
    M: cu,
    p: v,
    q: _,
    Q: Qs,
    s: eo,
    S: du,
    u: uu,
    U: fu,
    V: hu,
    w: pu,
    W: mu,
    x: null,
    X: null,
    y: gu,
    Y: bu,
    Z: vu,
    "%": Js
  }, T = {
    a: W,
    A: B,
    b: q,
    B: ee,
    c: null,
    d: Zs,
    e: Zs,
    f: ku,
    g: Fu,
    G: Bu,
    H: _u,
    I: wu,
    j: Su,
    L: Yo,
    m: Cu,
    M: ju,
    p: ie,
    q: te,
    Q: Qs,
    s: eo,
    S: Nu,
    u: Tu,
    U: $u,
    V: Du,
    w: Iu,
    W: Mu,
    x: null,
    X: null,
    y: Lu,
    Y: Au,
    Z: Eu,
    "%": Js
  }, A = {
    a: S,
    A: p,
    b: w,
    B: F,
    c: N,
    d: qs,
    e: qs,
    f: eu,
    g: Vs,
    G: Ys,
    H: Xs,
    I: Xs,
    j: Kd,
    L: Qd,
    m: Xd,
    M: Zd,
    p: C,
    q: qd,
    Q: nu,
    s: ru,
    S: Jd,
    u: Od,
    U: Ud,
    V: Gd,
    w: Wd,
    W: Yd,
    x: k,
    X: y,
    y: Vs,
    Y: Ys,
    Z: Vd,
    "%": tu
  };
  I.x = j(r, I), I.X = j(a, I), I.c = j(t, I), T.x = j(r, T), T.X = j(a, T), T.c = j(t, T);
  function j(U, Y) {
    return function(se) {
      var z = [], X = -1, K = 0, oe = U.length, re, ue, be;
      for (se instanceof Date || (se = /* @__PURE__ */ new Date(+se)); ++X < oe; )
        U.charCodeAt(X) === 37 && (z.push(U.slice(K, X)), (ue = Gs[re = U.charAt(++X)]) != null ? re = U.charAt(++X) : ue = re === "e" ? " " : "0", (be = Y[re]) && (re = be(se, ue)), z.push(re), K = X + 1);
      return z.push(U.slice(K, X)), z.join("");
    };
  }
  function M(U, Y) {
    return function(se) {
      var z = xn(1900, void 0, 1), X = x(z, U, se += "", 0), K, oe;
      if (X != se.length) return null;
      if ("Q" in z) return new Date(z.Q);
      if ("s" in z) return new Date(z.s * 1e3 + ("L" in z ? z.L : 0));
      if (Y && !("Z" in z) && (z.Z = 0), "p" in z && (z.H = z.H % 12 + z.p * 12), z.m === void 0 && (z.m = "q" in z ? z.q : 0), "V" in z) {
        if (z.V < 1 || z.V > 53) return null;
        "w" in z || (z.w = 1), "Z" in z ? (K = Jr(xn(z.y, 0, 1)), oe = K.getUTCDay(), K = oe > 4 || oe === 0 ? Jn.ceil(K) : Jn(K), K = ss.offset(K, (z.V - 1) * 7), z.y = K.getUTCFullYear(), z.m = K.getUTCMonth(), z.d = K.getUTCDate() + (z.w + 6) % 7) : (K = Zr(xn(z.y, 0, 1)), oe = K.getDay(), K = oe > 4 || oe === 0 ? Zn.ceil(K) : Zn(K), K = Dn.offset(K, (z.V - 1) * 7), z.y = K.getFullYear(), z.m = K.getMonth(), z.d = K.getDate() + (z.w + 6) % 7);
      } else ("W" in z || "U" in z) && ("w" in z || (z.w = "u" in z ? z.u % 7 : "W" in z ? 1 : 0), oe = "Z" in z ? Jr(xn(z.y, 0, 1)).getUTCDay() : Zr(xn(z.y, 0, 1)).getDay(), z.m = 0, z.d = "W" in z ? (z.w + 6) % 7 + z.W * 7 - (oe + 5) % 7 : z.w + z.U * 7 - (oe + 6) % 7);
      return "Z" in z ? (z.H += z.Z / 100 | 0, z.M += z.Z % 100, Jr(z)) : Zr(z);
    };
  }
  function x(U, Y, se, z) {
    for (var X = 0, K = Y.length, oe = se.length, re, ue; X < K; ) {
      if (z >= oe) return -1;
      if (re = Y.charCodeAt(X++), re === 37) {
        if (re = Y.charAt(X++), ue = A[re in Gs ? Y.charAt(X++) : re], !ue || (z = ue(U, se, z)) < 0) return -1;
      } else if (re != se.charCodeAt(z++))
        return -1;
    }
    return z;
  }
  function C(U, Y, se) {
    var z = c.exec(Y.slice(se));
    return z ? (U.p = f.get(z[0].toLowerCase()), se + z[0].length) : -1;
  }
  function S(U, Y, se) {
    var z = b.exec(Y.slice(se));
    return z ? (U.w = D.get(z[0].toLowerCase()), se + z[0].length) : -1;
  }
  function p(U, Y, se) {
    var z = h.exec(Y.slice(se));
    return z ? (U.w = m.get(z[0].toLowerCase()), se + z[0].length) : -1;
  }
  function w(U, Y, se) {
    var z = R.exec(Y.slice(se));
    return z ? (U.m = L.get(z[0].toLowerCase()), se + z[0].length) : -1;
  }
  function F(U, Y, se) {
    var z = g.exec(Y.slice(se));
    return z ? (U.m = u.get(z[0].toLowerCase()), se + z[0].length) : -1;
  }
  function N(U, Y, se) {
    return x(U, t, Y, se);
  }
  function k(U, Y, se) {
    return x(U, r, Y, se);
  }
  function y(U, Y, se) {
    return x(U, a, Y, se);
  }
  function E(U) {
    return i[U.getDay()];
  }
  function Q(U) {
    return s[U.getDay()];
  }
  function H(U) {
    return d[U.getMonth()];
  }
  function P(U) {
    return l[U.getMonth()];
  }
  function v(U) {
    return o[+(U.getHours() >= 12)];
  }
  function _(U) {
    return 1 + ~~(U.getMonth() / 3);
  }
  function W(U) {
    return i[U.getUTCDay()];
  }
  function B(U) {
    return s[U.getUTCDay()];
  }
  function q(U) {
    return d[U.getUTCMonth()];
  }
  function ee(U) {
    return l[U.getUTCMonth()];
  }
  function ie(U) {
    return o[+(U.getUTCHours() >= 12)];
  }
  function te(U) {
    return 1 + ~~(U.getUTCMonth() / 3);
  }
  return {
    format: function(U) {
      var Y = j(U += "", I);
      return Y.toString = function() {
        return U;
      }, Y;
    },
    parse: function(U) {
      var Y = M(U += "", !1);
      return Y.toString = function() {
        return U;
      }, Y;
    },
    utcFormat: function(U) {
      var Y = j(U += "", T);
      return Y.toString = function() {
        return U;
      }, Y;
    },
    utcParse: function(U) {
      var Y = M(U += "", !0);
      return Y.toString = function() {
        return U;
      }, Y;
    }
  };
}
var Gs = { "-": "", _: " ", 0: "0" }, Ze = /^\s*\d+/, Pd = /^%/, Hd = /[\\^$*+?|[\]().{}]/g;
function Fe(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function zd(e) {
  return e.replace(Hd, "\\$&");
}
function bn(e) {
  return new RegExp("^(?:" + e.map(zd).join("|") + ")", "i");
}
function yn(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Wd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function Od(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Ud(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function Gd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Yd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function Ys(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function Vs(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function Vd(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function qd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function Xd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function qs(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Kd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function Xs(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Zd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Jd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Qd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function eu(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function tu(e, t, r) {
  var a = Pd.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function nu(e, t, r) {
  var a = Ze.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function ru(e, t, r) {
  var a = Ze.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function Ks(e, t) {
  return Fe(e.getDate(), t, 2);
}
function au(e, t) {
  return Fe(e.getHours(), t, 2);
}
function su(e, t) {
  return Fe(e.getHours() % 12 || 12, t, 2);
}
function ou(e, t) {
  return Fe(1 + Dn.count(Mt(e), e), t, 3);
}
function Uo(e, t) {
  return Fe(e.getMilliseconds(), t, 3);
}
function iu(e, t) {
  return Uo(e, t) + "000";
}
function lu(e, t) {
  return Fe(e.getMonth() + 1, t, 2);
}
function cu(e, t) {
  return Fe(e.getMinutes(), t, 2);
}
function du(e, t) {
  return Fe(e.getSeconds(), t, 2);
}
function uu(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function fu(e, t) {
  return Fe(Mr.count(Mt(e) - 1, e), t, 2);
}
function Go(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? dn(e) : dn.ceil(e);
}
function hu(e, t) {
  return e = Go(e), Fe(dn.count(Mt(e), e) + (Mt(e).getDay() === 4), t, 2);
}
function pu(e) {
  return e.getDay();
}
function mu(e, t) {
  return Fe(Zn.count(Mt(e) - 1, e), t, 2);
}
function gu(e, t) {
  return Fe(e.getFullYear() % 100, t, 2);
}
function xu(e, t) {
  return e = Go(e), Fe(e.getFullYear() % 100, t, 2);
}
function bu(e, t) {
  return Fe(e.getFullYear() % 1e4, t, 4);
}
function yu(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? dn(e) : dn.ceil(e), Fe(e.getFullYear() % 1e4, t, 4);
}
function vu(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Fe(t / 60 | 0, "0", 2) + Fe(t % 60, "0", 2);
}
function Zs(e, t) {
  return Fe(e.getUTCDate(), t, 2);
}
function _u(e, t) {
  return Fe(e.getUTCHours(), t, 2);
}
function wu(e, t) {
  return Fe(e.getUTCHours() % 12 || 12, t, 2);
}
function Su(e, t) {
  return Fe(1 + ss.count(Vt(e), e), t, 3);
}
function Yo(e, t) {
  return Fe(e.getUTCMilliseconds(), t, 3);
}
function ku(e, t) {
  return Yo(e, t) + "000";
}
function Cu(e, t) {
  return Fe(e.getUTCMonth() + 1, t, 2);
}
function ju(e, t) {
  return Fe(e.getUTCMinutes(), t, 2);
}
function Nu(e, t) {
  return Fe(e.getUTCSeconds(), t, 2);
}
function Tu(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function $u(e, t) {
  return Fe(Oo.count(Vt(e) - 1, e), t, 2);
}
function Vo(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? un(e) : un.ceil(e);
}
function Du(e, t) {
  return e = Vo(e), Fe(un.count(Vt(e), e) + (Vt(e).getUTCDay() === 4), t, 2);
}
function Iu(e) {
  return e.getUTCDay();
}
function Mu(e, t) {
  return Fe(Jn.count(Vt(e) - 1, e), t, 2);
}
function Lu(e, t) {
  return Fe(e.getUTCFullYear() % 100, t, 2);
}
function Fu(e, t) {
  return e = Vo(e), Fe(e.getUTCFullYear() % 100, t, 2);
}
function Au(e, t) {
  return Fe(e.getUTCFullYear() % 1e4, t, 4);
}
function Bu(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? un(e) : un.ceil(e), Fe(e.getUTCFullYear() % 1e4, t, 4);
}
function Eu() {
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
var en, qo;
Ru({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Ru(e) {
  return en = Rd(e), qo = en.format, en.parse, en.utcFormat, en.utcParse, en;
}
function Pu(e) {
  return new Date(e);
}
function Hu(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Xo(e, t, r, a, o, s, i, l, d, c) {
  var f = Po(), h = f.invert, m = f.domain, b = c(".%L"), D = c(":%S"), g = c("%I:%M"), u = c("%I %p"), R = c("%a %d"), L = c("%b %d"), I = c("%B"), T = c("%Y");
  function A(j) {
    return (d(j) < j ? b : l(j) < j ? D : i(j) < j ? g : s(j) < j ? u : a(j) < j ? o(j) < j ? R : L : r(j) < j ? I : T)(j);
  }
  return f.invert = function(j) {
    return new Date(h(j));
  }, f.domain = function(j) {
    return arguments.length ? m(Array.from(j, Hu)) : m().map(Pu);
  }, f.ticks = function(j) {
    var M = m();
    return e(M[0], M[M.length - 1], j ?? 10);
  }, f.tickFormat = function(j, M) {
    return M == null ? A : c(M);
  }, f.nice = function(j) {
    var M = m();
    return (!j || typeof j.range != "function") && (j = t(M[0], M[M.length - 1], j ?? 10)), j ? m(wd(M, j)) : f;
  }, f.copy = function() {
    return Ro(f, Xo(e, t, r, a, o, s, i, l, d, c));
  }, f;
}
function os() {
  return Ir.apply(Xo(Bd, Ed, Mt, Cn, Mr, Dn, as, rs, an, qo).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function zu({
  task: e,
  scale: t,
  onTaskClick: r,
  onTaskDoubleClick: a,
  isSelected: o = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": d
}) {
  const c = Le(null), [f, h] = Ie(!1), [m, b] = Ie(!1), D = t(e.start), g = t(e.end), u = Math.max(g - D, 20), R = () => {
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
  }, L = e.progress ? u * e.progress / 100 : 0, I = () => {
    r?.(e);
  }, T = () => {
    a?.(e);
  }, A = (w) => {
    w.key === "Enter" ? (w.preventDefault(), I()) : w.key === " " && (w.preventDefault(), T());
  }, j = () => {
    h(!0);
  }, M = () => {
    h(!1);
  }, x = () => {
    b(!0), l?.();
  }, C = () => {
    b(!1);
  }, S = [
    "gantt-task-bar",
    f && "gantt-task-bar--pressed",
    (m || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), p = {
    "--task-left": `${D}px`,
    "--task-width": `${u}px`,
    "--task-color": R(),
    left: `${D}px`,
    width: `${u}px`,
    backgroundColor: R()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": s,
      className: S,
      style: p,
      onClick: I,
      onDoubleClick: T,
      onKeyDown: A,
      onMouseDown: j,
      onMouseUp: M,
      onFocus: x,
      onBlur: C,
      "aria-label": d || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${L}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function Wu({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let b = e.getTime(); b <= t.getTime(); b += 864e5)
    a.push(new Date(b));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = Ie(-1), d = Le(null), c = (b) => {
    if (b.key === "ArrowLeft") {
      b.preventDefault();
      const D = Math.max(0, i === -1 ? 0 : i - 1);
      l(D), m(D);
    } else if (b.key === "ArrowRight") {
      b.preventDefault();
      const D = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(D), m(D);
    } else if (b.key === "ArrowDown") {
      b.preventDefault();
      const D = document.querySelector(".gantt-row .timeline-container");
      D && D.focus();
    } else if (b.key === "Home")
      b.preventDefault(), l(0), m(0);
    else if (b.key === "End") {
      b.preventDefault();
      const D = a.length - 1;
      l(D), m(D);
    }
  }, f = (b) => {
    if (b.key === "ArrowDown") {
      b.preventDefault();
      const D = document.querySelector(".gantt-row .resource-label");
      D && D.focus();
    } else if (b.key === "ArrowRight") {
      b.preventDefault();
      const D = d.current;
      D && D.focus();
    }
  }, h = () => {
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (b) => {
    const D = d.current?.querySelector(`[data-date-index="${b}"]`);
    D && D.focus();
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
            onKeyDown: f,
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
            onKeyDown: c,
            onFocus: h,
            children: a.map((b, D) => {
              const g = b.getTime() === s.getTime(), u = i === D;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": D,
                  className: `date-column ${g ? "today" : ""} ${u ? "focused" : ""}`,
                  tabIndex: u ? 0 : -1,
                  role: "button",
                  "aria-label": `${b.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
                  onFocus: () => l(D),
                  onKeyDown: c,
                  children: b.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                D
              );
            })
          }
        )
      ]
    }
  );
}
function Ou({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, d] = Ie(!1), [c, f] = Ie(-1), h = Le(null);
  Ae(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      h.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
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
          g.preventDefault(), h.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (g.preventDefault(), d(!0), f(0));
          break;
      }
      return;
    }
    switch (g.key) {
      case "ArrowLeft":
        g.preventDefault();
        const u = Math.max(0, c - 1);
        f(u), h.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault();
        const L = Math.min(t.length - 1, c + 1);
        f(L), h.current?.querySelector(`[data-task-index="${L}"]`)?.focus();
        break;
      case "Enter":
        g.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        g.preventDefault(), c >= 0 && o?.(t[c]);
        break;
      case "Escape":
        g.preventDefault(), d(!1), f(-1), h.current?.focus();
        break;
    }
  }, b = (g) => {
    switch (g.key) {
      case "ArrowUp":
        g.preventDefault(), s === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        g.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault(), h.current?.focus();
        break;
    }
  }, D = (g) => {
    l && f(g);
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
            onKeyDown: b,
            children: e.label
          }
        ),
        /* @__PURE__ */ n.jsx(
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
            children: t.map((g, u) => /* @__PURE__ */ n.jsx(
              zu,
              {
                task: g,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && c === u,
                taskIndex: u,
                tabIndex: l && c === u ? 0 : -1,
                onFocus: () => D(u)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function cx({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Le(null), [l, d] = Ie(800), c = De(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const g = new Date(r);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [r]), f = De(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const g = new Date(a);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [a]), h = De(() => Math.ceil((f.getTime() - c.getTime()) / 864e5) + 1, [c, f]);
  Ae(() => {
    if (!i.current) return;
    const g = new ResizeObserver((u) => {
      const R = u[0];
      R && d(Math.max(R.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const m = De(
    () => os().domain([c, f]).range([0, l]),
    [c, f, l]
  ), b = De(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((u) => {
      const R = g.get(u.resourceId) || [];
      R.push(u), g.set(u.resourceId, R);
    }), g;
  }, [t]), D = (g) => {
    if (g.target === g.currentTarget)
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault();
          const u = i.current?.querySelector(".gantt-row .resource-label");
          u && u.focus();
          break;
        case "Home":
          g.preventDefault();
          const R = i.current?.querySelector(".header-resource");
          R && R.focus();
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
      "aria-colcount": h + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: D,
      children: [
        /* @__PURE__ */ n.jsx(Wu, { viewStart: c, viewEnd: f, dateCount: h }),
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
            children: e.map((g, u) => /* @__PURE__ */ n.jsx(
              Ou,
              {
                resource: g,
                tasks: b.get(g.id) || [],
                scale: m,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: u,
                dateCount: h
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
const Qn = ({
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
) }), Uu = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const d = () => t ? rt.Children.toArray(t).filter(
    (u) => rt.isValidElement(u) && (u.type === Qn || u.type?.displayName === "BreadcrumbItem")
  ).map((u) => ({
    text: typeof u.props.children == "string" ? u.props.children : String(u.props.children),
    href: u.props.href,
    active: u.props.active,
    attributes: u.props.attributes
  })) : [], c = () => t ? d() : o && s ? [{ href: o, text: s }] : e, f = () => {
    const g = c();
    if (g && g.length > 0) {
      const u = g.slice().reverse().find((R) => R.href && !R.active);
      if (u)
        return { href: u.href, text: u.text };
    }
    return { text: "Home" };
  }, h = c(), m = f(), b = ge(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), D = a;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: b,
      "aria-label": D,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          rt.Children.map(t, (g, u) => rt.isValidElement(g) && (g.type === Qn || g.type?.displayName === "BreadcrumbItem") ? rt.cloneElement(g, { key: u }) : null)
        ) : (
          // Render from items array
          h?.filter((g) => g.active || !!g.href).map((g, u) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: g.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...g.attributes || {},
              children: g.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: g.href,
              role: "link",
              ...g.attributes || {},
              children: g.text
            }
          ) }, u))
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
}, Gu = Uu;
Gu.Item = Qn;
Qn.displayName = "BreadcrumbItem";
const Ko = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [o, s] = Ie(!1);
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
  const i = ge("nhsuk-skip-link", r);
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
}, dx = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = ge("nhsuk-pagination", o);
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
}, ux = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = ge("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, Zo = rt.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: r,
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
  ].filter(Boolean).join(" "), b = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), D = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), g = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const L = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Dt,
      {
        level: a,
        className: D,
        children: L()
      }
    );
  }, u = () => f.children ? f.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, R = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      ...f,
      className: m,
      ref: h,
      children: [
        d && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: d,
            alt: c || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: b, children: [
          g(),
          u(),
          R()
        ] })
      ]
    }
  );
});
Zo.displayName = "Card";
const fx = ({
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
}, hx = ({
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
}, px = ({
  type: e,
  heading: t,
  headingHtml: r,
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
  "aria-describedby": b
}) => {
  const D = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), g = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), u = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const L = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], I = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        L,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Dt,
      {
        level: a,
        className: g,
        children: I
      }
    );
  }, R = () => d || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: D,
      "data-testid": c,
      id: f,
      "aria-label": h,
      "aria-labelledby": m,
      "aria-describedby": b,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          u(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: R() })
      ]
    }
  );
}, Yu = ({
  id: e,
  className: t,
  headingText: r,
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
  ), f = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Dt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Dt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      text: r,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, h = () => l ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : s ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: s }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: c, id: e, ...d, children: [
    f(),
    h()
  ] });
}, mx = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = ge("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, gx = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = ge(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((d, c) => /* @__PURE__ */ n.jsx(
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
            s(d),
            d.visuallyHiddenText && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: d.visuallyHiddenText })
          ]
        }
      )
    },
    c
  )) }) });
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: o, ...a, children: e.map((l, d) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, d)) }) });
}, ga = ({
  rows: e,
  head: t,
  caption: r,
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
  "data-testid": b
}) => {
  const D = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), g = ge(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    f
  ), u = ge(h), R = rt.useRef(null), L = () => {
    if (R.current) return R.current;
    try {
      R.current = require("prismjs");
      try {
        require("prismjs/components/prism-typescript");
      } catch {
      }
      try {
        require("prismjs/components/prism-tsx");
      } catch {
      }
      try {
        require("prismjs/components/prism-json");
      } catch {
      }
    } catch {
      R.current = null;
    }
    return R.current;
  }, I = (x) => {
    const C = [
      { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
      { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
      { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
      { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
    ];
    let S = x;
    return C.forEach((p) => {
      S = S.replace(p.regex, (w) => `<span class="nhsuk-code-${p.cls}">${w}</span>`);
    }), S;
  }, T = (x, C, S) => {
    if (S || !C) return x;
    const p = L();
    if (p && p.languages) {
      const w = p.languages[C] ? C : p.languages.typescript && (C === "ts" || C === "tsx" || C === "typescript") ? "typescript" : p.languages.json && C === "json" ? "json" : void 0;
      if (w)
        try {
          return p.highlight(x, p.languages[w], w);
        } catch {
        }
    }
    return I(x);
  }, A = (x, C) => {
    const S = ge("nhsuk-table__header", {
      [`nhsuk-table__header--${x.format}`]: x.format
    }, x.classes), p = {
      scope: "col",
      ...x.colspan && { colSpan: x.colspan },
      ...x.rowspan && { rowSpan: x.rowspan },
      ...s && { role: "columnheader" },
      ...x.attributes
    };
    let w;
    if (x.node != null)
      w = /* @__PURE__ */ n.jsx(n.Fragment, { children: x.node });
    else if (x.html)
      w = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } });
    else if (x.code != null) {
      const F = Array.isArray(x.code), N = F ? x.code.join(`
`) : x.code, k = F || N.includes(`
`), y = {
        className: ge("nhsuk-table__code", x.codeClassName, {
          "nhsuk-table__code--block": k,
          "nhsuk-table__code--inline": !k
        }),
        ...x.codeLanguage ? { "data-language": x.codeLanguage } : {}
      }, E = T(N, x.codeLanguage);
      w = k ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx("code", { ...y, dangerouslySetInnerHTML: { __html: E } }) }) : /* @__PURE__ */ n.jsx("code", { ...y, dangerouslySetInnerHTML: { __html: E } });
    } else
      w = x.text;
    return /* @__PURE__ */ n.jsx("th", { className: S, ...p, children: w }, C);
  }, j = (x, C, S) => {
    const p = o && S, w = ge(
      p ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${p ? "header" : "cell"}--${x.format}`]: x.format
      },
      x.classes
    ), F = {
      ...p && { scope: "row" },
      ...x.colspan && { colSpan: x.colspan },
      ...x.rowspan && { rowSpan: x.rowspan },
      ...s && {
        role: p ? "rowheader" : "cell",
        ...x.header && { "data-label": x.header }
      },
      ...x.attributes
    };
    let N;
    if (x.node != null)
      N = /* @__PURE__ */ n.jsx(n.Fragment, { children: x.node });
    else if (x.html)
      N = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } });
    else if (x.code != null) {
      const E = Array.isArray(x.code), Q = E ? x.code.join(`
`) : x.code, H = E || Q.includes(`
`), P = {
        className: ge("nhsuk-table__code", x.codeClassName, {
          "nhsuk-table__code--block": H,
          "nhsuk-table__code--inline": !H
        }),
        ...x.codeLanguage ? { "data-language": x.codeLanguage } : {}
      }, v = T(Q, x.codeLanguage, x.disableHighlight);
      N = H ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx("code", { ...P, dangerouslySetInnerHTML: { __html: v } }) }) : /* @__PURE__ */ n.jsx("code", { ...P, dangerouslySetInnerHTML: { __html: v } });
    } else
      N = x.text;
    const k = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && x.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        x.header,
        " "
      ] }),
      N
    ] }), y = p ? "th" : "td";
    return /* @__PURE__ */ n.jsx(y, { className: w, ...F, children: k }, C);
  }, M = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: g,
      ...s && { role: "table" },
      ...m,
      ...b && { "data-testid": b },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: D, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((x, C) => A(x, C)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((x, C) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: x.map(
              (S, p) => j(S, p, p === 0)
            )
          },
          C
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ n.jsxs(Yu, { className: c, children: [
    i && /* @__PURE__ */ n.jsx(Dt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    M()
  ] }) : u ? /* @__PURE__ */ n.jsx("div", { className: u, children: M() }) : M();
}, xx = fn(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
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
  const b = r !== void 0, [D, g] = Ie(() => t || e[0]?.id || ""), u = b ? r : D, R = Le(null), L = Le(/* @__PURE__ */ new Map()), I = pe((S) => {
    b || g(S), a?.(S);
  }, [b, a]), T = pe((S) => {
    o?.(S), l && I(S);
  }, [o, l, I]), A = pe((S, p) => {
    const w = e.filter((k) => !k.disabled).map((k) => k.id), F = w.indexOf(p);
    let N = null;
    switch (S.key) {
      case "ArrowLeft":
        N = F > 0 ? F - 1 : w.length - 1;
        break;
      case "ArrowRight":
        N = F < w.length - 1 ? F + 1 : 0;
        break;
      case "Home":
        N = 0;
        break;
      case "End":
        N = w.length - 1;
        break;
      case "Escape":
        S.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (N !== null) {
      S.preventDefault();
      const k = w[N], y = L.current.get(k);
      y && (y.focus(), T(k));
    }
  }, [e, T, i]), j = pe((S, p) => {
    p ? L.current.set(S, p) : L.current.delete(S);
  }, []), M = pe((S) => {
    const p = L.current.get(S);
    p && p.focus();
  }, []);
  _o(m, () => ({
    focusTab: M,
    getActiveTab: () => u,
    getTabListElement: () => R.current
  }), [M, u]);
  const x = pe((S) => {
    const p = S.relatedTarget;
    R.current?.contains(p) || s?.();
  }, [s]), C = ge("nhsuk-tabs", d);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: C,
      id: c,
      "data-testid": f,
      ...h,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: R,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: x,
                children: e.map((S) => {
                  const p = S.id === u, w = S.disabled, F = ge("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": p,
                    "nhsuk-tabs__list-item--disabled": w
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: F, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (N) => j(S.id, N),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": p,
                      "aria-controls": `${S.id}-panel`,
                      id: `${S.id}-tab`,
                      tabIndex: p ? 0 : -1,
                      disabled: w,
                      onClick: () => !w && I(S.id),
                      onKeyDown: (N) => !w && A(N, S.id),
                      onFocus: () => !w && T(S.id),
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
          const p = S.id === u;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${S.id}-tab`,
              id: `${S.id}-panel`,
              hidden: !p,
              children: S.content
            },
            S.id
          );
        })
      ]
    }
  );
}), Vu = fn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
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
    ].filter(Boolean).join(" "), h = t ? /* @__PURE__ */ n.jsx(
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
        ref: c,
        id: i,
        className: f,
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: h }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
Vu.displayName = "Details";
const qu = fn(
  ({
    title: e,
    type: t,
    items: r,
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
    ], f = () => t === "cross" ? /* @__PURE__ */ n.jsxs(
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
    ), h = (b) => t === "cross" && !a ? `do not ${b}` : b, m = () => /* @__PURE__ */ n.jsx(
      Dt,
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
        className: d.join(" "),
        ...i,
        children: [
          m(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: c.join(" "), role: "list", children: r.map((b, D) => /* @__PURE__ */ n.jsxs("li", { children: [
            f(),
            h(b.item)
          ] }, D)) }) })
        ]
      }
    );
  }
);
qu.displayName = "DoDontList";
const Xu = fn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
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
    ].filter(Boolean).join(" "), h = t ? /* @__PURE__ */ n.jsx(
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
        ref: c,
        id: i,
        className: f,
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: h }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
Xu.displayName = "Expander";
const Ku = fn(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, f = `${t}-${c}-hint`, h = `${t}-${c}-status`, m = !!l.href, b = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), D = [
        l.hint && f,
        h
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Zu,
        {
          item: l,
          itemClasses: b,
          hasLink: m,
          hintId: f,
          statusId: h,
          ariaDescribedBy: D
        },
        d
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
), Zu = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const c = e.title.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, f = [
      r ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: f,
        href: e.href,
        "aria-describedby": s,
        children: c
      }
    ) : /* @__PURE__ */ n.jsx("div", { className: e.title.classes || "", children: c });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ n.jsx(
    "div",
    {
      id: a,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ n.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, d = () => {
    const c = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let f;
    return e.status.tag ? f = /* @__PURE__ */ n.jsx(Ye, { ...e.status.tag }) : e.status.html ? f = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : f = e.status.text, /* @__PURE__ */ n.jsx("div", { className: c, id: o, children: f });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    d()
  ] });
};
Ku.displayName = "TaskList";
const bx = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: a,
  children: o,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), d = () => o || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), c = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), f = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: c,
      ...i,
      children: [
        vo(
          f,
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
}, yx = ({
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
}, Ju = ({
  dateRange: e,
  onPrev: t,
  onNext: r,
  onToday: a,
  density: o,
  onDensityChange: s,
  a11yMode: i,
  onA11yModeChange: l
}) => /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar", role: "group", "aria-label": "Slot matrix controls", children: [
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx(Qe, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ n.jsx(Qe, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ n.jsx(Qe, { variant: "secondary", size: "small", onClick: r, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ n.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ n.jsx(
      Wn,
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
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ n.jsx(
      Wn,
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
] }), Qu = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(Ye, { color: ef(r.status), text: r.label }) }, r.status)) });
function ef(e) {
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
const vx = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: r,
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
  enableDefaultLegend: b = !0,
  legendPlacement: D = "bottom",
  onA11yModeChange: g
}) => {
  const [u, R] = Ie("grid"), L = i || u, [I, T] = Ie(a || []), A = r ?? I, j = De(() => {
    const N = /* @__PURE__ */ new Set();
    return e.forEach((k) => N.add(new Date(k.start).getTime())), Array.from(N).sort((k, y) => k - y);
  }, [e]), M = De(() => {
    const N = {};
    return e.forEach((k) => {
      const y = new Date(k.start).getTime();
      N[y] || (N[y] = {});
      const E = k.capacity - k.booked - (k.held || 0);
      N[y][k.sessionId] = { slot: k, remaining: E };
    }), N;
  }, [e]), x = pe((N) => {
    if (s === "single") {
      const k = [N.id];
      r || T(k), o?.(k, { lastAction: "select" });
    } else {
      const k = A.includes(N.id), y = k ? A.filter((E) => E !== N.id) : [...A, N.id];
      r || T(y), o?.(y, { lastAction: k ? "deselect" : "select" });
    }
  }, [s, A, r, o]), C = De(() => m || (b ? Array.from(new Set(e.map((k) => k.status))).map((k) => ({
    status: k,
    label: k.charAt(0).toUpperCase() + k.slice(1)
  })) : void 0), [m, b, e]), S = C ? /* @__PURE__ */ n.jsx(
    Qu,
    {
      items: C,
      orientation: D === "left" || D === "right" ? "vertical" : "horizontal"
    }
  ) : null, p = (N) => {
    i || R(N), g?.(N);
  }, w = f || (h ? /* @__PURE__ */ n.jsx(
    Ju,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: L,
      onA11yModeChange: p
    }
  ) : null), F = /* @__PURE__ */ n.jsx("div", { style: d, className: ge(l), children: /* @__PURE__ */ n.jsx(da, { className: ge("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(Yt, { children: /* @__PURE__ */ n.jsx(_n, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    w,
    D === "top" && S,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((N) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => x(N), "aria-pressed": A.includes(N.id), children: [
      vn(new Date(N.start)),
      " – ",
      vn(new Date(N.end)),
      " (",
      N.status,
      ")"
    ] }) }, N.id)) }),
    D === "bottom" && S
  ] }) }) }) }) });
  return L === "list" ? F : /* @__PURE__ */ n.jsx("div", { style: d, className: ge(l), children: /* @__PURE__ */ n.jsx(da, { className: ge("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(Yt, { children: /* @__PURE__ */ n.jsx(_n, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    w,
    D === "top" && S,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": j.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((N) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${N.specialty}`, className: "nhs-slot-matrix__session-header", children: N.specialty }, N.id))
      ] }),
      j.map((N) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": vn(new Date(N)), children: vn(new Date(N)) }),
        t.map((k) => {
          const y = M[N]?.[k.id];
          if (!y)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, k.id);
          const { slot: E, remaining: Q } = y, H = A.includes(E.id), P = c ? c(E) : `Slot ${vn(new Date(E.start))} ${E.status}${Q === 0 ? " full" : ""}`;
          return /* @__PURE__ */ n.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": E.status,
              className: ge("nhs-slot-matrix__cell", H && "nhs-slot-matrix__cell--selected"),
              "aria-label": P,
              "aria-selected": H || void 0,
              onClick: () => x(E),
              children: Q > 0 ? `${Q} left` : "Full"
            },
            E.id
          );
        })
      ] }, N))
    ] }),
    D === "bottom" && S
  ] }) }) }) }) });
};
function to(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function vn(e) {
  return `${to(e.getHours())}:${to(e.getMinutes())}`;
}
const tf = ({
  title: e,
  value: t,
  subtitle: r,
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
  ].filter(Boolean).join(" "), c = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Dt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    r && /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: r })
  ] });
  return o ? /* @__PURE__ */ n.jsx(
    "a",
    {
      className: `${d} nhs-fdp-summary-card--clickable`,
      href: o,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: c
    }
  ) : /* @__PURE__ */ n.jsx(
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
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(da, { children: /* @__PURE__ */ n.jsx(Yt, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    _n,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ n.jsx(tf, { ...o })
    },
    s
  )) }) }) });
}, nf = rt.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: r,
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
    bordered: b = !1,
    striped: D = !1,
    responsive: g = !1,
    tableType: u = "default"
  }, R) => {
    const L = Le(null), I = Le(null), T = Le(null);
    rt.useImperativeHandle(R, () => L.current, []);
    const [A, j] = Ie(0), [M, x] = Ie(0), [C, S] = Ie("headers"), [p, w] = Ie("browse"), F = t.length, N = e.length, k = De(() => !r || r.length === 0 ? e : [...e].sort((_, W) => {
      for (const { key: B, direction: q } of r) {
        const ee = _[B], ie = W[B];
        if (ee == null && ie == null) continue;
        if (ee == null) return 1;
        if (ie == null) return -1;
        let te = 0;
        if (typeof ee == "number" && typeof ie == "number" ? te = ee - ie : te = String(ee).localeCompare(String(ie)), te !== 0)
          return q === "asc" ? te : -te;
      }
      return 0;
    }), [e, r]), y = pe((_, W) => {
      setTimeout(() => {
        const B = L.current?.querySelector(
          `tbody tr:nth-child(${_ + 1}) td:nth-child(${W + 1})`
        );
        B && (B.focus(), typeof B.scrollIntoView == "function" && B.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), E = pe((_) => {
      setTimeout(() => {
        const W = L.current?.querySelector(`th:nth-child(${_ + 1})`);
        W && (W.focus(), typeof W.scrollIntoView == "function" && W.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Q = pe((_) => {
      a?.(_);
    }, [a]), H = pe((_) => {
      s?.(_);
    }, [s]), P = pe((_) => {
      const { key: W } = _;
      switch (W) {
        case "Enter":
          if (_.preventDefault(), C === "headers" && p === "browse")
            w("navigate"), E(M);
          else if (C === "headers" && p === "navigate") {
            const B = t[M];
            B && Q(B.key);
          } else C === "cells" && p === "browse" ? (w("navigate"), y(A, M)) : C === "cells" && p === "navigate" && H(A);
          break;
        case "Escape":
          _.preventDefault(), (C === "headers" && p === "navigate" || C === "cells" && p === "navigate") && w("browse");
          break;
        case "ArrowLeft":
          if (_.preventDefault(), p === "navigate" || p === "browse" && C === "headers") {
            if (C === "headers") {
              const B = Math.max(0, M - 1);
              x(B), E(B);
            } else if (C === "cells") {
              const B = Math.max(0, M - 1);
              x(B), y(A, B);
            }
          }
          break;
        case "ArrowRight":
          if (_.preventDefault(), p === "navigate" || p === "browse" && C === "headers") {
            if (C === "headers") {
              const B = Math.min(F - 1, M + 1);
              x(B), E(B);
            } else if (C === "cells") {
              const B = Math.min(F - 1, M + 1);
              x(B), y(A, B);
            }
          }
          break;
        case "ArrowUp":
          if (_.preventDefault(), C === "cells") {
            if (p === "browse") {
              const B = Math.max(0, A - 1);
              j(B), y(B, 0), x(0);
            } else if (p === "navigate")
              if (A > 0) {
                const B = A - 1;
                j(B), y(B, M);
              } else
                S("headers"), w("browse"), E(M);
          }
          break;
        case "ArrowDown":
          if (_.preventDefault(), C === "headers" && p === "browse")
            S("cells"), j(0), x(0), y(0, 0);
          else if (C === "cells") {
            const B = N - 1;
            if (p === "browse") {
              const q = Math.min(B, A + 1);
              j(q), y(q, 0), x(0);
            } else if (p === "navigate" && A < B) {
              const q = A + 1;
              j(q), y(q, M);
            }
          }
          break;
        case "Home":
          _.preventDefault(), C === "headers" ? (x(0), E(0)) : C === "cells" && (_.ctrlKey ? (j(0), x(0), y(0, 0)) : (x(0), y(A, 0)));
          break;
        case "End":
          if (_.preventDefault(), C === "headers") {
            const B = F - 1;
            x(B), E(B);
          } else if (C === "cells")
            if (_.ctrlKey) {
              const B = N - 1, q = F - 1;
              j(B), x(q), y(B, q);
            } else {
              const B = F - 1;
              x(B), y(A, B);
            }
          break;
        case " ":
          if (_.preventDefault(), C === "headers" && p === "navigate") {
            const B = t[M];
            B && Q(B.key);
          } else C === "cells" && p === "navigate" && H(A);
          break;
      }
    }, [
      C,
      p,
      M,
      A,
      F,
      N,
      t,
      y,
      E,
      Q,
      H
    ]);
    Ae(() => {
      const _ = L.current;
      if (_)
        return _.addEventListener("keydown", P), () => _.removeEventListener("keydown", P);
    }, [P]);
    const v = ge(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": b,
        "nhsuk-table--striped": D,
        "nhsuk-table--compact": u === "compact"
      },
      h
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: L,
        className: v,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": f,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: I, role: "row", children: t.map((_, W) => {
            const B = r?.find((ie) => ie.key === _.key), q = !!B, ee = C === "headers" && M === W;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: ge("sortable-header", {
                  "sortable-header--focused": ee
                }),
                role: "columnheader",
                tabIndex: ee ? 0 : -1,
                onClick: () => Q(_.key),
                onKeyDown: (ie) => {
                  (ie.key === "Enter" || ie.key === " ") && (ie.preventDefault(), Q(_.key));
                },
                "aria-sort": q ? B?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: _.label }),
                  q && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((ie) => ie.key === _.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: B?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              _.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: T, className: "nhsuk-table__body", role: "rowgroup", children: k.map((_, W) => {
            const B = o === W, q = C === "cells" && A === W;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: ge("data-row", {
                  "data-row--selected": B,
                  "data-row--focused": q
                }),
                "aria-selected": B,
                children: t.map((ee, ie) => {
                  const te = ee.tableRenderer ? ee.tableRenderer(_) : ee.render ? ee.render(_) : _[ee.key], U = C === "cells" && A === W && M === ie, Y = () => typeof te == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: te ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: te ? "Yes" : "No" })
                  ] }) : String(te ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ge("data-cell", {
                        "data-cell--focused": U
                      }),
                      tabIndex: U ? 0 : -1,
                      onClick: () => H(W),
                      children: Y()
                    },
                    ee.key
                  );
                })
              },
              W
            );
          }) })
        ]
      }
    );
  }
);
nf.displayName = "AriaDataGrid";
const Jo = ({
  sortConfig: e,
  columns: t,
  onSortChange: r,
  className: a = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: d = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: f
}) => {
  const h = Le(null), m = Le(null), b = Le(null), D = pe((C, S) => {
    d || (m.current = S, C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("text/plain", S));
  }, [d]), g = pe((C, S) => {
    d || m.current === S || (C.preventDefault(), C.dataTransfer.dropEffect = "move", b.current = S);
  }, [d]), u = pe((C, S) => {
    if (d) return;
    C.preventDefault();
    const p = m.current;
    if (!p || p === S) return;
    const w = e.findIndex((N) => N.key === p), F = e.findIndex((N) => N.key === S);
    if (w !== -1 && F !== -1) {
      const N = [...e], [k] = N.splice(w, 1);
      N.splice(F, 0, k), r(N);
    }
    m.current = null, b.current = null;
  }, [d, e, r]), R = pe(() => {
    m.current = null, b.current = null;
  }, []), L = pe((C) => {
    const S = t.find((p) => p.key === C);
    return S ? S.label : C;
  }, [t]), I = pe((C) => ["red", "orange", "blue", "aqua-green", "grey"][C] || "grey", []), T = pe((C) => {
    if (d) return;
    const S = e.map(
      (p) => p.key === C ? { ...p, direction: p.direction === "asc" ? "desc" : "asc" } : p
    );
    r(S);
  }, [e, r, d]), A = pe((C) => {
    if (d) return;
    const S = e.filter((p) => p.key !== C);
    r(S);
  }, [e, r, d]), j = pe(() => {
    d || r([]);
  }, [r, d]), M = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const C = e.map((S, p) => {
      const w = S.direction === "asc" ? "ascending" : "descending";
      return `${p + 1}. ${L(S.key)} (${w})`;
    });
    if (C.length === 1)
      return `Sorted by: ${C[0]}`;
    if (C.length === 2)
      return `Sorted by: ${C.join(" and ")}`;
    {
      const S = C.pop();
      return `Sorted by: ${C.join(", ")}, and ${S}`;
    }
  }, x = De(() => {
    const C = ["sort-description"];
    return l && C.push("sort-help"), f && C.push(f), C.join(" ");
  }, [l, f]);
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
          ref: h,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": c,
          "aria-describedby": x,
          children: e.map((C, S) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (p) => D(p, C.key),
              onDragOver: (p) => g(p, C.key),
              onDrop: (p) => u(p, C.key),
              onDragEnd: R,
              onClick: () => T(C.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${C.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": C.key,
              children: /* @__PURE__ */ n.jsx(
                Ye,
                {
                  color: I(S),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => A(C.key),
                  disabled: d,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${S + 1}`, children: S + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: L(C.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (p) => {
                          p.stopPropagation(), T(C.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${L(C.key)}. Currently ${C.direction === "asc" ? "ascending" : "descending"}`,
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
        Qe,
        {
          variant: "secondary",
          onClick: j,
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
function rf(e, t) {
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
const xa = fn(function(t, r) {
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
    id: b,
    isLoading: D = !1,
    loadingComponent: g,
    error: u = null,
    errorComponent: R,
    "data-testid": L,
    actions: I,
    actionsMinGap: T = 16,
    forceActionsAbove: A = !1
  } = t, M = Le(
    b || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, x = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), C = `${M}-description`, S = `${M}-navigation-help`, {
    dataComparator: p = ($, V) => JSON.stringify($) === JSON.stringify(V),
    filterFunction: w = ($) => $,
    booleanRenderer: F = ($) => $ ? "✓" : "✗"
  } = a || {}, N = s !== void 0, k = s ?? 0, [y, E] = Ie({
    focusArea: "tabs",
    focusedTabIndex: k,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), Q = De(() => ({
    selectedIndex: k,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [k]), [H, P] = wo(rf, Q);
  Ae(() => {
    const $ = H.tabLoadingStates.length, V = o.length;
    $ !== V && P({ type: "ADJUST_ARRAYS", payload: { newLength: V } });
  }, [o.length]), Ae(() => {
    N && P({ type: "SET_SELECTED_INDEX", payload: k });
  }, [k, N]), Ae(() => {
    E(($) => ({
      ...$,
      focusArea: "tabs",
      focusedTabIndex: H.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [H.selectedIndex]), Ae(() => {
    l && l(H.globalSelectedRowData);
  }, [H.globalSelectedRowData, l]);
  const v = pe(
    ($, V) => p($, V),
    [p]
  ), _ = pe(
    ($) => {
      $ >= 0 && $ < o.length && !o[$].disabled && (P({ type: "SET_SELECTED_INDEX", payload: $ }), E((V) => ({
        ...V,
        focusedTabIndex: $,
        focusArea: "tabs"
      })), i?.($));
    },
    [o, i]
  ), W = Le(!1), B = pe(
    ($, V) => {
      if (!V?.force && !W.current && $ === 0) {
        W.current = !0;
        return;
      }
      W.current = !0, setTimeout(() => {
        const ce = q.current[$], le = ce?.parentElement;
        if (ce && le) {
          const Z = ce.offsetLeft, de = ce.offsetWidth, ve = le.clientWidth, _e = Z - ve / 2 + de / 2;
          try {
            le.scrollTo({
              left: Math.max(0, _e),
              behavior: "smooth"
            });
          } catch {
            ce.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!ce,
          tabListElementExists: !!le
        });
      }, 50);
    },
    []
  ), q = Le([]), ee = Le([]), ie = pe(
    ($, V) => {
      const ce = H.sortConfig || [], le = ce.find(
        (ve) => ve.key === V
      );
      let Z;
      le ? le.direction === "asc" ? Z = ce.map(
        (ve) => ve.key === V ? { ...ve, direction: "desc" } : ve
      ) : Z = ce.filter(
        (ve) => ve.key !== V
      ) : Z = [...ce, { key: V, direction: "asc" }], P({
        type: "SET_SORT",
        payload: Z
      }), o[$].onSort?.(V);
    },
    [H.sortConfig, o]
  ), te = pe(
    ($) => {
      setTimeout(() => {
        const V = document.querySelector(
          `[data-tab-panel="${H.selectedIndex}"] th:nth-child(${$ + 1})`
        );
        V && V.focus();
      }, 0);
    },
    [H.selectedIndex]
  ), U = pe(
    ($) => F($),
    [F]
  ), Y = pe(
    ($, V) => {
      setTimeout(() => {
        const ce = document.querySelector(
          `[data-tab-panel="${H.selectedIndex}"] tbody tr:nth-child(${$ + 1}) td:nth-child(${V + 1})`
        );
        ce && ce.focus();
      }, 0);
    },
    [H.selectedIndex]
  );
  Ae(() => {
    y.isGridActive && (y.focusArea === "headers" ? setTimeout(() => {
      te(y.focusedHeaderIndex);
    }, 0) : y.focusArea === "cells" && setTimeout(() => {
      Y(
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
    te,
    Y
  ]), Ae(() => {
    B(H.selectedIndex);
  }, [H.selectedIndex, B]);
  const se = pe(
    ($, V) => {
      const { key: ce } = $, le = o[H.selectedIndex], Z = le?.columns.length || 0;
      switch (ce) {
        case "ArrowLeft":
          $.preventDefault();
          const de = Math.max(0, V - 1);
          E((je) => ({
            ...je,
            focusedHeaderIndex: de
          })), te(de);
          break;
        case "ArrowRight":
          $.preventDefault();
          const ve = Math.min(Z - 1, V + 1);
          E((je) => ({
            ...je,
            focusedHeaderIndex: ve
          })), te(ve);
          break;
        case "ArrowUp":
          $.preventDefault(), E((je) => ({
            ...je,
            focusArea: "tabs",
            focusedTabIndex: H.selectedIndex
          })), B(H.selectedIndex), q.current[H.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          $.preventDefault(), E((je) => ({
            ...je,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: V,
            isGridActive: !0
          }));
          break;
        case "Home":
          $.preventDefault(), E((je) => ({ ...je, focusedHeaderIndex: 0 })), te(0);
          break;
        case "End":
          $.preventDefault();
          const _e = Z - 1;
          E((je) => ({
            ...je,
            focusedHeaderIndex: _e
          })), te(_e);
          break;
        case "Enter":
        case " ":
          $.preventDefault();
          const Ne = le?.columns[V]?.key;
          Ne && ie(H.selectedIndex, Ne);
          break;
      }
    },
    [
      o,
      H.selectedIndex,
      ie,
      E,
      te,
      Y,
      q
    ]
  ), z = pe(
    ($, V, ce) => {
      const { key: le } = $, Z = o[H.selectedIndex], de = Z?.data.length || 0, ve = Z?.columns.length || 0;
      switch (le) {
        case "ArrowUp":
          if ($.preventDefault(), V === 0)
            E((xe) => ({
              ...xe,
              focusArea: "headers",
              focusedHeaderIndex: ce,
              isGridActive: !1
            })), te(ce);
          else {
            const xe = V - 1;
            E(($e) => ({
              ...$e,
              focusedRowIndex: xe
            })), Y(xe, ce);
          }
          break;
        case "ArrowDown":
          $.preventDefault();
          const _e = Math.min(de - 1, V + 1);
          E((xe) => ({
            ...xe,
            focusedRowIndex: _e
          })), Y(_e, ce);
          break;
        case "ArrowLeft":
          $.preventDefault();
          const Ne = Math.max(0, ce - 1);
          E((xe) => ({
            ...xe,
            focusedColumnIndex: Ne
          })), Y(V, Ne);
          break;
        case "ArrowRight":
          $.preventDefault();
          const je = Math.min(ve - 1, ce + 1);
          E((xe) => ({
            ...xe,
            focusedColumnIndex: je
          })), Y(V, je);
          break;
        case "Home":
          $.preventDefault(), $.ctrlKey ? (E((xe) => ({
            ...xe,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), Y(0, 0)) : (E((xe) => ({ ...xe, focusedColumnIndex: 0 })), Y(V, 0));
          break;
        case "End":
          if ($.preventDefault(), $.ctrlKey) {
            const xe = de - 1, $e = ve - 1;
            E((Be) => ({
              ...Be,
              focusedRowIndex: xe,
              focusedColumnIndex: $e
            })), Y(xe, $e);
          } else {
            const xe = ve - 1;
            E(($e) => ({
              ...$e,
              focusedColumnIndex: xe
            })), Y(V, xe);
          }
          break;
        case "Enter":
        case " ":
          if ($.preventDefault(), Z && Z.data[V]) {
            const xe = Z.data.some(
              (Ue) => "ews_data" in Ue
            ) ? w(Z.data, H.filters) : Z.data, $e = H.sortConfig;
            let Be = xe;
            if ($e && $e.length > 0 && (Be = [...xe].sort((Ue, Ee) => {
              for (const { key: et, direction: Lt } of $e) {
                let gt = Ue[et], ct = Ee[et];
                const Ve = Z.columns.find(
                  (hn) => hn.key === et
                );
                if (Ve?.tableRenderer ? (gt = Ve.tableRenderer(Ue), ct = Ve.tableRenderer(Ee)) : Ve?.render && (gt = Ve.render(Ue), ct = Ve.render(Ee)), gt == null && ct == null) continue;
                if (gt == null) return Lt === "asc" ? -1 : 1;
                if (ct == null) return Lt === "asc" ? 1 : -1;
                let Xe = 0;
                if (typeof gt == "number" && typeof ct == "number" ? Xe = gt - ct : Xe = String(gt).localeCompare(
                  String(ct),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Xe !== 0)
                  return Lt === "asc" ? Xe : -Xe;
              }
              return 0;
            })), Be[V]) {
              const Ue = Be[V], et = H.globalSelectedRowData && v(H.globalSelectedRowData, Ue) ? null : Ue;
              P({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: et
              });
            }
          }
          break;
      }
    },
    [
      o,
      H.selectedIndex,
      H.filters,
      H.sortConfig,
      w,
      v,
      P,
      E,
      te,
      Y
    ]
  ), X = pe(
    ($, V) => w($, V),
    [w]
  );
  if (_o(
    r,
    () => ({
      selectTab: ($) => {
        $ >= 0 && $ < o.length && (P({ type: "SET_SELECTED_INDEX", payload: $ }), i?.($));
      },
      refreshData: ($) => {
        console.log("Refreshing data for tab:", $ ?? "all");
      },
      exportData: ($) => {
        const V = $ ?? H.selectedIndex, ce = o[V];
        return ce ? ce.data : [];
      },
      getSelectedRows: ($) => H.globalSelectedRowData ? [] : [],
      clearSelection: ($) => {
        P({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: ($) => {
        P({ type: "SET_FILTERS", payload: $ });
      }
    }),
    [H.selectedIndex, H.selectedRows, o, i]
  ), D)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${f}`,
        "data-testid": L,
        children: g || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-spinner",
            role: "status",
            "aria-label": "Loading data",
            children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." })
          }
        ) })
      }
    );
  if (u)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${f}`,
        "data-testid": L,
        children: R || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: u })
        ] })
      }
    );
  const K = Le(null), oe = Le(null), re = Le(null), [ue, be] = Ie(!0);
  Ae(() => {
    if (!I) {
      be(!1);
      return;
    }
    if (A) {
      be(!1);
      return;
    }
    function $() {
      if (!K.current || !oe.current || !re.current) return;
      const le = K.current.clientWidth, Z = Array.from(
        oe.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), de = Z.reduce((je, xe) => je + xe.offsetWidth, 0), ve = re.current.offsetWidth, _e = Math.max(8 * (Z.length - 1), 0), Ne = de + _e + ve + T <= le;
      be(Ne);
    }
    const V = requestAnimationFrame(() => $()), ce = new ResizeObserver(() => $());
    return K.current && ce.observe(K.current), oe.current && ce.observe(oe.current), () => {
      cancelAnimationFrame(V), ce.disconnect();
    };
  }, [I, T, A, o.length]);
  const Se = re, Ce = pe(() => Se.current ? Array.from(
    Se.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter(($) => !$.hasAttribute("disabled")) : [], []), J = pe(
    ($) => {
      const V = Ce();
      if (!V.length) return;
      const ce = Math.max(0, Math.min($, V.length - 1));
      V[ce].focus(), E((le) => ({ ...le, focusArea: "actions", focusedActionIndex: ce }));
    },
    [Ce]
  ), G = pe(() => J(0), [J]), ae = pe(
    ($, V) => {
      const { key: ce } = $, le = o.length - 1;
      switch (ce) {
        case "ArrowUp": {
          I && !ue && ($.preventDefault(), G());
          break;
        }
        case "ArrowLeft": {
          $.preventDefault();
          const Z = V > 0 ? V - 1 : le;
          _(Z), B(Z), q.current[Z]?.focus();
          break;
        }
        case "ArrowRight": {
          if ($.preventDefault(), V === le && I && ue) {
            G();
            return;
          }
          const Z = V < le ? V + 1 : 0;
          _(Z), B(Z), q.current[Z]?.focus();
          break;
        }
        case "ArrowDown": {
          $.preventDefault(), E((Z) => ({
            ...Z,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          $.preventDefault(), _(0), B(0), q.current[0]?.focus();
          break;
        }
        case "End": {
          $.preventDefault(), _(le), B(le), q.current[le]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          $.preventDefault(), _(V);
          break;
        }
        case "Tab": {
          !$.shiftKey && V === le && I && ue && G();
          break;
        }
      }
    },
    [o.length, _, B, I, ue, G]
  ), ne = pe(($) => {
    const { key: V } = $, ce = Ce();
    if (!ce.length) return;
    const le = ce.findIndex((Z) => Z === document.activeElement);
    switch (V) {
      case "ArrowLeft": {
        if (ue)
          if (le > 0)
            $.preventDefault(), J(le - 1);
          else {
            $.preventDefault();
            const Z = o.length - 1;
            _(Z), B(Z), q.current[Z]?.focus(), E((de) => ({ ...de, focusArea: "tabs", focusedTabIndex: Z }));
          }
        break;
      }
      case "ArrowRight": {
        ue && (le < ce.length - 1 ? ($.preventDefault(), J(le + 1)) : ($.preventDefault(), _(0), B(0), q.current[0]?.focus(), E((Z) => ({ ...Z, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (ue)
          $.preventDefault(), E((Z) => ({ ...Z, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          $.preventDefault();
          const Z = H.selectedIndex;
          q.current[Z]?.focus(), E((de) => ({ ...de, focusArea: "tabs", focusedTabIndex: Z }));
        }
        break;
      }
    }
  }, [Ce, ue, J, o.length, _, B, H.selectedIndex]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${f}`,
      id: b,
      "data-testid": L,
      ref: K,
      children: [
        c && !x && /* @__PURE__ */ n.jsx("div", { id: C, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: S,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ n.jsx(
          Jo,
          {
            sortConfig: H.sortConfig || [],
            columns: o.flatMap(
              ($) => $.columns.map((V) => ({ key: V.key, label: V.label }))
            ).filter(
              ($, V, ce) => ce.findIndex((le) => le.key === $.key) === V
              // Remove duplicates
            ),
            onSortChange: ($) => {
              P({ type: "SET_SORT", payload: $ });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        I && !ue && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: re,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: ne,
            children: I
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${ue ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? x ? c : C : S,
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              ref: oe,
              children: o.map(($, V) => {
                const ce = V === H.selectedIndex, le = $.disabled || h;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${$.id}`,
                    "aria-controls": `panel-${$.id}`,
                    "aria-selected": ce,
                    "aria-disabled": le,
                    tabIndex: ce ? 0 : -1,
                    ref: (Z) => {
                      q.current[V] = Z;
                    },
                    onClick: () => _(V),
                    onKeyDown: (Z) => ae(Z, V),
                    disabled: le,
                    className: [
                      "aria-tabs-datagrid__tab",
                      ce ? "aria-tabs-datagrid__tab--selected" : "",
                      le ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: $.label }),
                      H.tabLoadingStates[V] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      H.tabErrors[V] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  $.id
                );
              })
            }
          ),
          I && ue && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: re,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: ne,
              children: I
            }
          )
        ] }),
        o.map(($, V) => {
          const ce = V === H.selectedIndex;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${$.id}`,
              "aria-labelledby": `tab-${$.id}`,
              tabIndex: 0,
              hidden: !ce,
              ref: (le) => {
                ee.current[V] = le;
              },
              className: `aria-tabs-datagrid__panel ${$.className || ""}`,
              "data-tab-panel": V,
              children: ce && (() => {
                const le = $.data.some(
                  (de) => "ews_data" in de
                ) ? X($.data, H.filters) : $.data, Z = De(() => {
                  const de = H.sortConfig;
                  return !de || de.length === 0 ? le : [...le].sort((ve, _e) => {
                    for (const { key: Ne, direction: je } of de) {
                      let xe = ve[Ne], $e = _e[Ne];
                      const Be = $.columns.find(
                        (Ee) => Ee.key === Ne
                      );
                      if (Be?.tableRenderer ? (xe = Be.tableRenderer(ve), $e = Be.tableRenderer(_e)) : Be?.render && (xe = Be.render(ve), $e = Be.render(_e)), xe == null && $e == null) continue;
                      if (xe == null) return 1;
                      if ($e == null) return -1;
                      let Ue = 0;
                      if (typeof xe == "number" && typeof $e == "number" ? Ue = xe - $e : typeof xe == "boolean" && typeof $e == "boolean" ? Ue = xe === $e ? 0 : xe ? 1 : -1 : Ue = String(xe).localeCompare(
                        String($e),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Ue !== 0)
                        return je === "asc" ? Ue : -Ue;
                    }
                    return 0;
                  });
                }, [le, H.sortConfig, $.columns]);
                return /* @__PURE__ */ n.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": $.ariaLabel,
                    "aria-describedby": $.ariaDescription ? `panel-${$.id}-description` : void 0,
                    children: [
                      $.ariaDescription && /* @__PURE__ */ n.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${$.id}-description`,
                          children: $.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: $.columns.map((de, ve) => {
                        const _e = H.sortConfig?.find(
                          (xe) => xe.key === de.key
                        ), Ne = !!_e, je = y.focusArea === "headers" && y.focusedHeaderIndex === ve;
                        return /* @__PURE__ */ n.jsx(
                          "th",
                          {
                            className: `sortable-header ${je ? "sortable-header--focused" : ""} ${Ne ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: je ? 0 : -1,
                            onClick: () => ie(V, de.key),
                            onKeyDown: (xe) => se(xe, ve),
                            "aria-sort": Ne ? _e?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ n.jsx("span", { className: "header-label", children: de.label }),
                              /* @__PURE__ */ n.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${Ne ? `sort-indicator--${_e?.direction}` : ""}`,
                                  children: [
                                    H.sortConfig && H.sortConfig.length > 0 && H.sortConfig.findIndex(
                                      (xe) => xe.key === de.key
                                    ) !== -1 && /* @__PURE__ */ n.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${H.sortConfig.findIndex((xe) => xe.key === de.key) + 1}`,
                                        "data-priority": H.sortConfig.findIndex(
                                          (xe) => xe.key === de.key
                                        ) + 1,
                                        title: `Sort priority: ${H.sortConfig.findIndex((xe) => xe.key === de.key) + 1}`,
                                        children: H.sortConfig.findIndex(
                                          (xe) => xe.key === de.key
                                        ) + 1
                                      }
                                    ),
                                    Ne && /* @__PURE__ */ n.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${_e?.direction}`,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        focusable: "false",
                                        children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                                      }
                                    )
                                  ]
                                }
                              )
                            ] })
                          },
                          de.key
                        );
                      }) }) }),
                      /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: Z.map((de, ve) => {
                        const _e = H.globalSelectedRowData && v(H.globalSelectedRowData, de), Ne = y.focusArea === "cells" && y.focusedRowIndex === ve;
                        return /* @__PURE__ */ n.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${_e ? "data-row--selected" : ""} ${Ne ? "data-row--focused" : ""}`,
                            "aria-selected": _e,
                            children: $.columns.map((je, xe) => {
                              const $e = de[je.key];
                              let Be;
                              je.tableRenderer ? Be = je.tableRenderer(de) : je.render ? Be = je.render(de) : Be = $e;
                              const Ue = y.focusArea === "cells" && y.focusedRowIndex === ve && y.focusedColumnIndex === xe, Ee = () => {
                                if (je.customRenderer) {
                                  const et = je.customRenderer(
                                    $e,
                                    de
                                  );
                                  return /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: et
                                    }
                                  );
                                }
                                return typeof $e == "boolean" && Be === $e ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  U($e),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: $e ? "Yes" : "No" })
                                ] }) : rt.isValidElement(Be) || typeof Be != "object" ? Be ?? "" : Be;
                              };
                              return /* @__PURE__ */ n.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Ue ? "data-cell--focused" : ""}`,
                                  tabIndex: Ue ? 0 : -1,
                                  onClick: () => {
                                    const Lt = H.globalSelectedRowData && v(
                                      H.globalSelectedRowData,
                                      de
                                    ) ? null : de;
                                    P({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Lt
                                    });
                                  },
                                  onKeyDown: (et) => z(et, ve, xe),
                                  children: Ee()
                                },
                                je.key
                              );
                            })
                          },
                          ve
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            $.id
          );
        })
      ]
    }
  );
}), Pn = {
  asc: "↑",
  desc: "↓"
}, af = (e) => [...e].sort((t, r) => t.priority - r.priority);
function Qr(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function sf(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function of(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function lf(e, t) {
  const r = t.find((o) => o.id === e), a = sf(t);
  return r ? r.priority < a : !1;
}
const wx = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: c
}) => {
  const f = De(() => af(e), [e]), h = pe((L) => {
    if (l) return;
    const I = e.map(
      (T) => T.id === L ? { ...T, direction: T.direction === "asc" ? "desc" : "asc" } : T
    );
    t(I);
  }, [e, t, l]), m = pe((L) => {
    if (l) return;
    const I = e.findIndex((A) => A.id === L);
    if (I <= 0) return;
    const T = [...e];
    [T[I], T[I - 1]] = [T[I - 1], T[I]], t(Qr(T));
  }, [e, t, l]), b = pe((L) => {
    if (l) return;
    const I = e.findIndex((A) => A.id === L);
    if (I >= e.length - 1 || I === -1) return;
    const T = [...e];
    [T[I], T[I + 1]] = [T[I + 1], T[I]], t(Qr(T));
  }, [e, t, l]), D = pe((L) => {
    if (l) return;
    const I = e.filter((T) => T.id !== L);
    t(Qr(I));
  }, [e, t, l]), g = pe(() => {
    l || t([]);
  }, [t, l]), u = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const L = f.map((I, T) => {
      const A = I.direction === "asc" ? "ascending" : "descending";
      return `${T + 1}. ${I.label} (${A})`;
    });
    if (L.length === 1)
      return `Sorted by: ${L[0]}`;
    if (L.length === 2)
      return `Sorted by: ${L.join(" and ")}`;
    {
      const I = L.pop();
      return `Sorted by: ${L.join(", ")}, and ${I}`;
    }
  }, R = De(() => {
    const L = ["sort-description"];
    return i && L.push("sort-help"), c && L.push(c), L.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: u()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: u()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": d,
        "aria-describedby": R,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          f.map((L) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Ye,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => D(L.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: L.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: L.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => h(L.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${L.label}. Currently ${L.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: L.direction === "asc" ? Pn.asc : Pn.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(L.id),
                          disabled: l || !of(L.id, e),
                          "aria-label": `Move ${L.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => b(L.id),
                          disabled: l || !lf(L.id, e),
                          "aria-label": `Move ${L.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            L.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      Qe,
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
      Pn.asc,
      "/",
      Pn.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, is = (e, t) => t.map((r) => ({
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
})), ba = [
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
], cf = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), df = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, uf = (e) => {
  if (typeof e == "boolean") {
    const r = ba.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = ba.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, ff = (e) => `${e.name}-${e.bed_name}`, hf = () => ({
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
}), Sx = (e) => {
  const t = hf();
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
}, pf = {
  dataComparator: cf,
  filterFunction: df,
  booleanRenderer: uf,
  getDataId: ff
};
function no(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: f = "adaptive-card"
  } = r, h = t.find((I) => I.key === a), m = h?.cardRenderer ? h.cardRenderer(e) : h?.render ? h.render(e) : e[a || "name"] || "Untitled", b = () => o.filter((T) => !i.includes(T) && e[T]).slice(0, 3).map((T) => {
    const A = t.find((C) => C.key === T), j = e[T], M = c[T] ? c[T](j, e) : A?.cardRenderer ? A.cardRenderer(e) : A?.render ? A.render(e) : j;
    return `${A?.label || T}: ${M}`;
  }).join(" • "), D = () => s.length === 0 ? null : s.filter((I) => e[I.fieldKey] !== void 0).map((I) => {
    const T = e[I.fieldKey], A = I.render ? I.render(T, e) : T;
    return `<span class="nhsuk-tag ${mf(I, T)}">${A}</span>`;
  }).join(""), g = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", u = D(), R = b(), L = u ? `${R}${u ? `<div class="adaptive-card__badges">${u}</div>` : ""}` : R;
  return {
    variant: g(),
    heading: String(m),
    descriptionHtml: L,
    className: `adaptive-card ${f}`,
    "aria-label": `Record for ${m}`
  };
}
function mf(e, t) {
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
const gf = {
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
}, Qo = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, c = e.bed_name, f = e.ews_score, h = e.speciality, m = e.consultant;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${o} healthcare-card--${s}`,
      onClick: () => r?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${d}, Bed ${c}`,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__patient-name", children: i }),
            /* @__PURE__ */ n.jsxs("p", { className: "healthcare-card__age-info", children: [
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__label", children: "Age: " }),
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__value", children: l })
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: f !== void 0 && /* @__PURE__ */ n.jsxs(
            Ye,
            {
              color: bf(ri(f)),
              className: "healthcare-card__alert",
              children: [
                "EWS: ",
                f
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
            /* @__PURE__ */ n.jsx("dd", { children: c })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Specialty" }),
            /* @__PURE__ */ n.jsx("dd", { children: h })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ n.jsx("dd", { children: m })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            Qe,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (b) => {
                b.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Qe,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (b) => {
                b.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Qe,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (b) => {
                b.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, ei = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        Ye,
        {
          color: yf(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        Ye,
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
      Qe,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Qe,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), ti = ({
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
        Ye,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        Ye,
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
      Qe,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Qe,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), ni = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, d = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, f = e.ews_data?.heart_rate, h = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${xf(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: h && /* @__PURE__ */ n.jsxs(
            Ye,
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
          c !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-value", children: c })
          ] }),
          f !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Heart Rate" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              f,
              " bpm"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            Qe,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (m) => {
                m.stopPropagation(), r?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Qe,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (m) => {
                m.stopPropagation(), r?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function ri(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function xf(e) {
  return ri(e);
}
function bf(e) {
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
function yf(e) {
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
const vf = [
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
], ai = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", _f = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, wf = (e) => ai(e) === "high" || e.status === "urgent" ? "primary" : "default", Sf = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, kf = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: vf,
  hiddenFields: [],
  getPriority: ai,
  getStatus: _f,
  getVariant: wf,
  fieldRenderers: Sf,
  classPrefix: "adaptive-card--healthcare"
}, Cf = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", o = r.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ n.jsx(
      Qo,
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
      ei,
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
      ti,
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
      ni,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, jf = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, ro = {
  name: "healthcare",
  defaultCardConfig: kf,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Cf,
  fieldTypes: jf
};
function ao(e) {
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
function so(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function Nf(e, t) {
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
function Tf(e, t) {
  const [r, a] = Ie("cards");
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
  }, [e, t]), r;
}
function $f(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Df(e, t, r, a) {
  const o = a ? { ...a.defaultCardConfig, ...r } : { ...gf, ...r };
  if (a && a.cardTemplates) {
    const s = $f(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), no(e, t, o);
}
const kx = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
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
  ariaLabel: b = "Data grid",
  ariaDescription: D,
  orientation: g = "horizontal",
  id: u,
  disabled: R = !1,
  className: L,
  ...I
}) => {
  const T = Tf(e, t), A = h !== void 0, j = h ?? 0, M = De(() => {
    if (c.some(
      (G) => G.data && G.data.length > 0 && so(G.data)
    )) {
      const G = ao(r);
      return {
        ...ro.defaultCardConfig,
        ...G
      };
    } else
      return ao(r);
  }, [r, c]), x = De(() => c.some(
    (G) => G.data && G.data.length > 0 && so(G.data)
  ) ? ro : void 0, [c]), C = De(() => ({
    selectedIndex: j,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [j, c.length]), [S, p] = wo(Nf, C), w = Le([]), F = Le([]), N = Le([]), k = Le(null), [y, E] = Ie({
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
  }), Q = pe((J) => {
    if (!J.current)
      return { columns: 1, rows: 0 };
    const G = J.current, ae = G.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (ae.length === 0)
      return { columns: 1, rows: 0 };
    const ne = G.offsetWidth, V = ae[0].offsetWidth, ce = Math.floor(ne / V) || 1, le = Math.ceil(ae.length / ce);
    return { columns: ce, rows: le };
  }, []), H = pe((J, G) => ({
    row: Math.floor(J / G),
    col: J % G
  }), []), P = pe((J, G, ae) => J * ae + G, []), v = pe((J, G, ae, ne) => {
    const { row: $, col: V } = H(J, ne);
    let ce = $, le = V;
    switch (G) {
      case "up":
        ce = Math.max(0, $ - 1);
        break;
      case "down":
        ce = Math.min(Math.floor((ae - 1) / ne), $ + 1);
        break;
      case "left":
        le = Math.max(0, V - 1);
        break;
      case "right":
        le = Math.min(ne - 1, V + 1);
        break;
    }
    const Z = P(ce, le, ne);
    return Math.min(Z, ae - 1);
  }, [H, P]);
  Ae(() => {
    y.isCardNavigationActive && y.focusedCardElementIndex >= 0 && y.cardElements.length > 0 && setTimeout(() => {
      const J = y.cardElements[y.focusedCardElementIndex];
      J && (J.element.focus(), J.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [y.isCardNavigationActive, y.focusedCardElementIndex, y.cardElements.length]), Ae(() => {
    const J = () => {
      if (T === "cards" && k.current) {
        const { columns: ne, rows: $ } = Q(k);
        E((V) => ({
          ...V,
          gridColumns: ne,
          gridRows: $
        }));
      }
    }, G = setTimeout(J, 200), ae = () => {
      setTimeout(J, 100);
    };
    return window.addEventListener("resize", ae), () => {
      clearTimeout(G), window.removeEventListener("resize", ae);
    };
  }, [T, c, Q]), Ae(() => {
    const J = S.tabLoadingStates.length, G = c.length;
    J !== G && p({ type: "ADJUST_ARRAYS", payload: { newLength: G } });
  }, [c.length, S.tabLoadingStates.length]), Ae(() => {
    A && h !== S.selectedIndex && p({ type: "SET_SELECTED_INDEX", payload: h });
  }, [A, h, S.selectedIndex]);
  const _ = pe((J) => {
    J >= 0 && J < c.length && !c[J].disabled && (p({ type: "SET_SELECTED_INDEX", payload: J }), m?.(J));
  }, [c, m]), W = pe((J) => {
    console.log("Card selected:", J), p({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: J
    });
  }, []), B = pe((J) => {
    const G = F.current[J];
    G && (G.focus(), G.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), q = pe((J) => {
    const G = F.current[J];
    if (!G) return [];
    const ae = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), ne = G.querySelectorAll(ae);
    return Array.from(ne).map(($, V) => ({
      id: $.id || `card-${J}-element-${V}`,
      element: $,
      label: $.getAttribute("aria-label") || $.textContent?.trim() || $.getAttribute("title") || `Element ${V + 1}`,
      type: $.tagName.toLowerCase() === "button" ? "button" : $.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes($.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), ee = Le(null), ie = pe((J) => {
    const G = ee.current;
    if (!G) return;
    const ae = document.createElement("div");
    ae.setAttribute("aria-live", "polite"), ae.setAttribute("aria-atomic", "true"), ae.className = "sr-only", ae.textContent = J, G.appendChild(ae), setTimeout(() => {
      G.contains(ae) && G.removeChild(ae);
    }, 1e3);
  }, []), te = pe((J) => {
    const G = J.filter((ne) => ne.sortable !== !1), ae = [
      { value: "", label: "Sort by..." }
    ];
    return G.forEach((ne) => {
      const $ = ne.label || ne.key;
      ne.key === "name" ? ae.push(
        { value: `${ne.key}-asc`, label: `${$} (A-Z)` },
        { value: `${ne.key}-desc`, label: `${$} (Z-A)` }
      ) : ne.key === "ews_score" || ne.key.includes("score") ? ae.push(
        { value: `${ne.key}-desc`, label: `${$} (High-Low)` },
        { value: `${ne.key}-asc`, label: `${$} (Low-High)` }
      ) : ne.key === "age" || ne.key.includes("date") || ne.key.includes("time") ? ae.push(
        { value: `${ne.key}-desc`, label: `${$} (Oldest-Youngest)` },
        { value: `${ne.key}-asc`, label: `${$} (Youngest-Oldest)` }
      ) : ae.push(
        { value: `${ne.key}-asc`, label: `${$} (A-Z)` },
        { value: `${ne.key}-desc`, label: `${$} (Z-A)` }
      );
    }), ae;
  }, []), U = pe((J, G) => G ? [...J].sort((ae, ne) => {
    const $ = ae[G.key], V = ne[G.key];
    if ($ == null && V == null) return 0;
    if ($ == null) return 1;
    if (V == null) return -1;
    const ce = Number($), le = Number(V);
    if (!isNaN(ce) && !isNaN(le))
      return G.direction === "asc" ? ce - le : le - ce;
    const Z = String($).toLowerCase(), de = String(V).toLowerCase(), ve = Z.localeCompare(de);
    return G.direction === "asc" ? ve : -ve;
  }) : J, []), Y = pe((J) => {
    if (!J) {
      E((Z) => ({ ...Z, cardSortConfig: null })), ie("Card sorting cleared");
      return;
    }
    const [G, ae] = J.split("-"), ne = { key: G, direction: ae };
    E((Z) => ({ ...Z, cardSortConfig: ne }));
    const ce = c[S.selectedIndex]?.columns.find((Z) => Z.key === G)?.label || G;
    ie(`Cards sorted by ${ce} in ${ae === "asc" ? "ascending" : "descending"} order`);
  }, [c, S.selectedIndex, ie]), se = pe((J) => {
    const ne = c[S.selectedIndex]?.columns.find((V) => V.key === J.key)?.label || J.key, $ = J.direction === "asc" ? "ascending" : "descending";
    return `${ne} (${$})`;
  }, [c, S.selectedIndex]), z = pe((J) => {
    const G = c[S.selectedIndex];
    if (o) {
      const ae = S.sortConfig;
      return !ae || ae.length === 0 ? J : [...J].sort((ne, $) => {
        for (const { key: V, direction: ce } of ae) {
          let le = ne[V], Z = $[V];
          const de = G?.columns.find(($e) => $e.key === V);
          if (de?.cardRenderer ? (le = de.cardRenderer(ne), Z = de.cardRenderer($)) : de?.render && (le = de.render(ne), Z = de.render($)), le == null && Z == null) continue;
          if (le == null) return ce === "asc" ? -1 : 1;
          if (Z == null) return ce === "asc" ? 1 : -1;
          const ve = Number(le), _e = Number(Z);
          if (!isNaN(ve) && !isNaN(_e)) {
            const $e = ve - _e;
            if ($e !== 0) return ce === "asc" ? $e : -$e;
            continue;
          }
          const Ne = String(le).toLowerCase(), je = String(Z).toLowerCase(), xe = Ne.localeCompare(je);
          if (xe !== 0) return ce === "asc" ? xe : -xe;
        }
        return 0;
      });
    } else
      return U(J, y.cardSortConfig);
  }, [o, S.sortConfig, y.cardSortConfig, U, c, S.selectedIndex]), X = pe((J, G) => {
    const ae = q(J), ne = ae[G];
    if (ne) {
      ne.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const $ = `Focused on ${ne.label}, ${ne.type} ${G + 1} of ${ae.length} within card`;
      ie($);
    }
  }, [q, ie]), K = pe((J) => {
    w.current[J]?.focus();
  }, []), oe = pe(() => {
    const J = N.current[0];
    if (!J) return [];
    const G = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), ae = J.querySelectorAll(G);
    return Array.from(ae);
  }, []), re = pe((J) => {
    if (J === 0) {
      const G = N.current[0], ae = G?.querySelector(".sort-controls-row");
      if (ae) {
        ae.setAttribute("tabindex", "-1"), ae.focus();
        const $ = `Sort controls group with ${oe().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        ie($);
      } else G && G.focus();
    } else {
      const G = oe(), ae = J - 1, ne = G[ae];
      if (ne) {
        ne.focus();
        const $ = ne.tagName.toLowerCase() === "select", V = ne.tagName.toLowerCase() === "button", ce = $ ? "dropdown" : V ? "button" : "control", le = $ ? ". Use Space key to open dropdown" : "", Z = `${ce} ${ae + 1} of ${G.length}${le}`;
        ie(Z);
      }
    }
  }, [oe, ie]), ue = pe((J, G) => {
    const { key: ae } = J, ne = c[S.selectedIndex], $ = ne?.data.length || 0;
    if (ae === "ArrowLeft" && J.shiftKey) {
      J.preventDefault(), J.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (ae === "ArrowRight" && J.shiftKey) {
      J.preventDefault(), J.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!y.isCardNavigationActive) {
      switch (ae) {
        case "ArrowUp":
          if (J.preventDefault(), G === 0)
            E((Z) => ({ ...Z, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), re(0);
          else {
            const Z = v(G, "up", $, y.gridColumns);
            Z !== G && (E((de) => ({ ...de, focusedCardIndex: Z })), B(Z), ie(`Moved to card ${Z + 1} of ${$}`));
          }
          break;
        case "ArrowDown":
          J.preventDefault();
          const V = v(G, "down", $, y.gridColumns);
          V !== G && (E((Z) => ({ ...Z, focusedCardIndex: V })), B(V), ie(`Moved to card ${V + 1} of ${$}`));
          break;
        case "ArrowLeft":
          J.preventDefault();
          const ce = v(G, "left", $, y.gridColumns);
          ce !== G ? (E((Z) => ({ ...Z, focusedCardIndex: ce })), B(ce), ie(`Moved to card ${ce + 1} of ${$}`)) : S.selectedIndex > 0 && (p({ type: "SET_SELECTED_INDEX", payload: S.selectedIndex - 1 }), E((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => K(S.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          J.preventDefault();
          const le = v(G, "right", $, y.gridColumns);
          le !== G ? (E((Z) => ({ ...Z, focusedCardIndex: le })), B(le), ie(`Moved to card ${le + 1} of ${$}`)) : S.selectedIndex < c.length - 1 && (p({ type: "SET_SELECTED_INDEX", payload: S.selectedIndex + 1 }), E((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => K(S.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (ne?.data[G]) {
            J.preventDefault(), E((de) => ({
              ...de,
              selectedCardIndex: G
            }));
            const Z = q(G);
            Z.length > 0 ? (E((de) => ({
              ...de,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: Z,
              selectedCardIndex: G
              // Ensure selection is maintained
            })), ie(`Card ${G + 1} selected and navigation activated. ${Z.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : ie(`Card ${G + 1} selected.`);
          }
          break;
        case " ":
          if (ne?.data[G]) {
            J.preventDefault(), E((de) => ({
              ...de,
              selectedCardIndex: de.selectedCardIndex === G ? -1 : G
            }));
            const Z = y.selectedCardIndex === G;
            ie(`Card ${G + 1} ${Z ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (ae) {
      case "ArrowUp":
      case "ArrowLeft":
        J.preventDefault();
        const V = Math.max(0, y.focusedCardElementIndex - 1);
        E((de) => ({ ...de, focusedCardElementIndex: V })), X(G, V);
        break;
      case "ArrowDown":
      case "ArrowRight":
        J.preventDefault();
        const ce = Math.min(y.cardElements.length - 1, y.focusedCardElementIndex + 1);
        E((de) => ({ ...de, focusedCardElementIndex: ce })), X(G, ce);
        break;
      case "Enter":
        J.preventDefault();
        const le = y.cardElements[y.focusedCardElementIndex];
        le && (le.element.click(), ie(`Activated ${le.label}`));
        break;
      case " ":
        J.preventDefault();
        const Z = y.cardElements[y.focusedCardElementIndex];
        if (Z) {
          const de = new MouseEvent("dblclick", { bubbles: !0 });
          Z.element.dispatchEvent(de), ie(`Double-clicked ${Z.label}`);
        }
        break;
      case "Escape":
        J.preventDefault(), E((de) => ({
          ...de,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => B(G), 0), ie("Exited card navigation, returned to card level");
        break;
      case "Home":
        J.preventDefault(), y.cardElements.length > 0 && (E((de) => ({ ...de, focusedCardElementIndex: 0 })), X(G, 0));
        break;
      case "End":
        if (J.preventDefault(), y.cardElements.length > 0) {
          const de = y.cardElements.length - 1;
          E((ve) => ({ ...ve, focusedCardElementIndex: de })), X(G, de);
        }
        break;
    }
  }, [y, S.selectedIndex, c, W, B, K, E, q, X, ie]), be = pe((J) => {
    const G = w.current[J], ae = G?.parentElement;
    if (!G || !ae) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const ne = G.getBoundingClientRect(), $ = ae.getBoundingClientRect();
    ne.left >= $.left && ne.right <= $.right || (console.log("Tab not visible, scrolling into view (mobile)"), G.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Se = pe((J, G) => {
    if (T !== "cards")
      return;
    const { key: ae } = J;
    switch (ae) {
      case "ArrowLeft":
        J.preventDefault();
        const ne = G > 0 ? G - 1 : c.length - 1;
        _(ne), E((le) => ({ ...le, focusedTabIndex: ne })), w.current[ne]?.focus(), be(ne);
        break;
      case "ArrowRight":
        J.preventDefault();
        const $ = G < c.length - 1 ? G + 1 : 0;
        _($), E((le) => ({ ...le, focusedTabIndex: $ })), w.current[$]?.focus(), be($);
        break;
      case "ArrowDown":
        J.preventDefault();
        const V = c[S.selectedIndex];
        V && V.columns && V.columns.length > 0 ? (E((le) => ({
          ...le,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), re(0)) : (E((le) => ({
          ...le,
          focusArea: "cards",
          focusedCardIndex: 0
        })), B(0));
        break;
      case "Home":
        J.preventDefault(), _(0), E((le) => ({ ...le, focusedTabIndex: 0 })), w.current[0]?.focus(), be(0);
        break;
      case "End":
        J.preventDefault();
        const ce = c.length - 1;
        _(ce), E((le) => ({ ...le, focusedTabIndex: ce })), w.current[ce]?.focus(), be(ce);
        break;
      case "Enter":
      case " ":
        J.preventDefault(), _(G);
        break;
    }
  }, [c.length, _, T, B, E, be]), Ce = pe((J, G) => {
    if (T !== "cards")
      return;
    const { key: ae } = J, ne = c[S.selectedIndex];
    if (G === 0 && !y.isSortControlsActive) {
      switch (ae) {
        case "ArrowUp":
          J.preventDefault(), E((V) => ({
            ...V,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), K(S.selectedIndex);
          break;
        case "ArrowDown":
          J.preventDefault(), ne?.data && ne.data.length > 0 && (E((V) => ({
            ...V,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), B(0));
          break;
        case "Enter":
        case " ":
          J.preventDefault();
          const $ = oe();
          if ($.length > 0) {
            E((ce) => ({
              ...ce,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), re(1);
            const V = `Entered sort controls navigation mode. ${$.length} controls available. Use arrow keys to navigate between controls.`;
            ie(V);
          }
          break;
        case "Escape":
          J.preventDefault(), E((V) => ({
            ...V,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), K(S.selectedIndex);
          break;
      }
      return;
    }
    if (y.isSortControlsActive) {
      const V = oe().length;
      switch (ae) {
        case "ArrowLeft":
          J.preventDefault();
          const ce = y.focusedSortControlIndex > 1 ? y.focusedSortControlIndex - 1 : V;
          E((Z) => ({ ...Z, focusedSortControlIndex: ce })), re(ce);
          break;
        case "ArrowRight":
          J.preventDefault();
          const le = y.focusedSortControlIndex < V ? y.focusedSortControlIndex + 1 : 1;
          E((Z) => ({ ...Z, focusedSortControlIndex: le })), re(le);
          break;
        case "ArrowDown":
          if (J.preventDefault(), y.isSortControlsActive) {
            const Z = y.focusedSortControlIndex < V ? y.focusedSortControlIndex + 1 : 1;
            E((de) => ({ ...de, focusedSortControlIndex: Z })), re(Z);
          } else
            ne?.data && ne.data.length > 0 && (E((Z) => ({
              ...Z,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), B(0));
          break;
        case "ArrowUp":
          J.preventDefault(), E((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), re(0);
          break;
        case "Escape":
          J.preventDefault(), E((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), re(0);
          break;
      }
    }
  }, [T, c, S.selectedIndex, y.isSortControlsActive, y.focusedSortControlIndex, re, K, B, E, ie]);
  if (T === "cards") {
    const J = c[S.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${L || ""}`, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": b,
            "aria-describedby": `${D || ""} ${u ? `${u}-navigation-help` : ""}`.trim(),
            "aria-orientation": g,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((G, ae) => {
              const ne = ae === S.selectedIndex, $ = G.disabled || R;
              return /* @__PURE__ */ n.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${G.id}`,
                  "aria-controls": `panel-${G.id}`,
                  "aria-selected": ne,
                  "aria-disabled": $,
                  tabIndex: ne ? 0 : -1,
                  ref: (V) => {
                    w.current[ae] = V;
                  },
                  onClick: () => _(ae),
                  onKeyDown: (V) => Se(V, ae),
                  disabled: $,
                  className: [
                    "aria-tabs-datagrid__tab",
                    ne ? "aria-tabs-datagrid__tab--selected" : "",
                    $ ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: G.label }),
                    S.tabLoadingStates[ae] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    S.tabErrors[ae] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                G.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      J && J.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          Jo,
          {
            sortConfig: S.sortConfig || [],
            columns: J.columns.map((G) => ({ key: G.key, label: G.label })),
            onSortChange: (G) => {
              p({ type: "SET_SORT", payload: G });
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
            ref: (G) => {
              N.current[0] = G;
            },
            onKeyDown: (G) => Ce(G, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${J.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  Wn,
                  {
                    id: `card-sort-${J.id}`,
                    name: `card-sort-${J.id}`,
                    value: y.cardSortConfig ? `${y.cardSortConfig.key}-${y.cardSortConfig.direction}` : "",
                    onChange: (G) => Y(G.target.value),
                    className: "sort-select",
                    children: te(J.columns).map((G) => /* @__PURE__ */ n.jsx("option", { value: G.value, children: G.label }, G.value))
                  }
                )
              ] }),
              y.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  se(y.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  Qe,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => Y(""),
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
          ref: k,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${J?.label || "Data"} cards in ${y.gridRows} rows and ${y.gridColumns} columns`,
          "aria-rowcount": y.gridRows,
          "aria-colcount": y.gridColumns,
          id: `panel-${J?.id}`,
          "aria-labelledby": `tab-${J?.id}`,
          children: z(J?.data || []).map((G, ae) => {
            const ne = y.selectedCardIndex === ae, $ = y.focusedCardIndex === ae && y.focusArea === "cards", V = y.focusedCardIndex === ae && y.focusArea === "card" && y.isCardNavigationActive, ce = ae === 0 && y.focusArea !== "cards", le = $ || ce, Z = H(ae, y.gridColumns);
            if (r.cardTemplate) {
              const _e = r.cardTemplate(G, J.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": Z.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      ref: (Ne) => {
                        F.current[ae] = Ne;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        ne ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        $ ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        V ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": Z.col + 1,
                      "aria-selected": ne,
                      "aria-expanded": V,
                      "aria-description": V ? `Card navigation active. ${y.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: le ? 0 : -1,
                      onClick: () => {
                        E((Ne) => ({
                          ...Ne,
                          selectedCardIndex: Ne.selectedCardIndex === ae ? -1 : ae
                        })), W(G);
                      },
                      onKeyDown: (Ne) => ue(Ne, ae),
                      onFocus: () => {
                        E((Ne) => Ne.focusedCardIndex !== ae || Ne.focusArea !== "cards" ? {
                          ...Ne,
                          focusedCardIndex: ae,
                          focusArea: "cards"
                        } : Ne);
                      },
                      children: _e
                    }
                  )
                },
                `card-${ae}`
              );
            }
            const de = Df(G, J.columns, M, x), ve = [
              de.className || "",
              ne ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              $ ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              V ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
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
                      ne ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      $ ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      V ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": Z.col + 1,
                    "aria-selected": ne,
                    "aria-expanded": V,
                    onKeyDown: (_e) => {
                      _e.key === "Enter" && (_e.preventDefault(), E((Ne) => ({
                        ...Ne,
                        selectedCardIndex: ae
                      }))), ue(_e, ae);
                    },
                    children: /* @__PURE__ */ n.jsx(
                      Zo,
                      {
                        ...de,
                        ref: (_e) => {
                          F.current[ae] = _e;
                        },
                        className: ve,
                        "aria-label": `${de["aria-label"] || de.heading}. ${V ? `Card navigation active with ${y.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: le ? 0 : -1,
                        onClick: () => {
                          E((_e) => ({
                            ..._e,
                            selectedCardIndex: _e.selectedCardIndex === ae ? -1 : ae
                          })), W(G);
                        },
                        onKeyDown: (_e) => ue(_e, ae),
                        onFocus: () => {
                          y.isCardNavigationActive || E((_e) => _e.focusedCardIndex !== ae || _e.focusArea !== "cards" ? {
                            ..._e,
                            focusedCardIndex: ae,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : _e);
                        }
                      }
                    )
                  }
                )
              },
              `card-${ae}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ n.jsx(
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
  return T === "hybrid" ? /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${L || ""}`, children: [
    s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ n.jsx(
      xa,
      {
        tabPanels: c,
        dataConfig: f,
        ariaLabel: b,
        ariaDescription: D,
        orientation: g,
        id: u,
        disabled: R,
        selectedIndex: h,
        onTabChange: m,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...I
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${L || ""}`, children: [
    s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ n.jsx(
      xa,
      {
        tabPanels: c,
        dataConfig: f,
        ariaLabel: b,
        ariaDescription: D,
        orientation: g,
        id: u,
        disabled: R,
        selectedIndex: h,
        onTabChange: m,
        actions: l,
        forceActionsAbove: d,
        ...I
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, si = (e) => {
  const t = ba.find((r) => r.value === e);
  return t ? t.icon : null;
}, If = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => si(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Mf = (e) => is(e, [
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
]), Lf = {
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
  booleanRenderer: (e) => si(e),
  getDataId: (e) => `financial-${e.id}`
}, Ff = (e) => is(e, [
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
]), Af = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: If,
    createTabs: Mf
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Lf,
    createTabs: Ff
  }
}, oo = (e, t) => {
  const r = Af[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, oi = [
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
], Bf = [
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
], Ef = [
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
], Rf = [
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
], io = [
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
], lo = [
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
], co = [
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
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Hf = () => [
  {
    id: "patients",
    label: "Patients",
    data: oi,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Qo,
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
    data: Bf,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ei,
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
    data: Ef,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ti,
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
    data: Rf,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ni,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], zf = () => {
  const [e, t] = Ie("healthcare"), r = De(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: pf,
      tabPanels: Hf(),
      data: oi
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...oo("ecommerce", io),
      data: io
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...oo("financial", lo),
      data: lo
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Pf,
      tabPanels: is(co, [
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
      data: co
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
      xa,
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
}, Cx = zf, ii = (e) => /* @__PURE__ */ n.jsx(Co, { ...e }), jx = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
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
  logo: b,
  className: D,
  ...g
}) => {
  const u = {
    service: d,
    navigation: c,
    search: f,
    account: h,
    organisation: m,
    logo: b,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ko, { ...s }),
    /* @__PURE__ */ n.jsx(Do, { ...u }),
    /* @__PURE__ */ n.jsx(ii, { className: D, ...g, children: /* @__PURE__ */ n.jsx(jo, { size: o, children: /* @__PURE__ */ n.jsx(Yt, { children: /* @__PURE__ */ n.jsxs(_n, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Dt, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Io, { ...l })
  ] });
}, Nx = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
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
  ...b
}) => {
  const D = {
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
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ko, { ...s }),
    /* @__PURE__ */ n.jsx(Do, { ...D }),
    /* @__PURE__ */ n.jsxs(ii, { className: m, ...b, children: [
      d && /* @__PURE__ */ n.jsx(ca, { ...d }),
      /* @__PURE__ */ n.jsx(jo, { size: o, children: /* @__PURE__ */ n.jsx(Yt, { children: /* @__PURE__ */ n.jsxs(_n, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Dt, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Io, { ...l })
  ] });
}, li = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = ge("nhsuk-back-link", a), d = ge("nhsuk-back-link__link"), c = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ n.jsx("button", { className: d, type: "button", onClick: s, ...i, children: c() }) : /* @__PURE__ */ n.jsx("a", { className: d, href: r, ...i, children: c() }) });
};
li.displayName = "ForwardLink";
const nn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function uo() {
  return typeof window > "u" ? nn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function ci() {
  const [e, t] = O.useState(uo());
  O.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(uo());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = O.useCallback((s) => e >= nn[s], [e]), a = O.useCallback((s) => e < nn[s], [e]), o = O.useCallback((s, i) => e >= nn[s] && e < nn[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: o,
    /** Raw numeric values */
    values: nn
  };
}
function Tx(e) {
  const { width: t, values: r } = ci();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function Wf(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = O.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = O.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return O.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    o ? d.set(r, String(o)) : d.delete(r), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [o, i, t, r, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Of = ({ className: e }) => /* @__PURE__ */ n.jsx(
  "svg",
  {
    className: e,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z"
      }
    )
  }
), Uf = ({ className: e }) => /* @__PURE__ */ n.jsx(
  "svg",
  {
    className: e,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z"
      }
    )
  }
);
function Gf(e) {
  const {
    items: t,
    selectedId: r,
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
    emptyState: b,
    a11y: D,
    className: g,
    getId: u = (fe) => fe.id,
    orientation: R = "vertical",
    autoEnableThirdColumn: L = !0,
    onDrillChange: I,
    navigationInstructions: T = "Use arrow keys to navigate, Enter to open.",
    initialFocus: A = "first",
    skipFocusOnSelect: j = !1,
    skipAnnouncements: M = !1,
    onFocusChange: x,
    syncUrl: C = !1,
    urlParamSelected: S = "nsv",
    urlParamDrill: p = "nsvDrill",
    urlSyncDebounceMs: w = 0,
    lazySecondary: F = !1,
    navFooter: N,
    collapsibleNav: k = !1,
    navInitiallyCollapsed: y = !1,
    onNavCollapseChange: E,
    collapseToggleLabelShow: Q = "Show navigation",
    collapseToggleLabelHide: H = "Hide navigation",
    collapseToggleIconShow: P,
    collapseToggleIconHide: v,
    persistNavCollapsed: _,
    navCollapsedStorageKey: W = "nsvCollapsed",
    navCollapsedUrlParam: B = "nsvCollapsed",
    autoContentHeader: q,
    contentHeaderLevel: ee = 2,
    renderContentHeader: ie,
    contentSubheader: te,
    secondarySubheader: U
  } = e, { up: Y } = ci(), [se, z] = O.useState(!1);
  O.useEffect(() => {
    z(!0);
  }, []);
  const X = se && Y("medium"), K = se && Y("xlarge");
  let oe;
  d ? oe = d : X ? oe = "two-column" : oe = "list", !d && L && l && K && (oe = "three-column");
  const re = Wf({
    enabled: C,
    paramSelected: S,
    paramDrill: p
  }), [ue, be] = O.useState(
    () => re.selectedId !== void 0 ? re.selectedId : a
  ), Se = r !== void 0 ? r : ue, Ce = t.find((fe) => u(fe) === Se), [J, G] = O.useState(
    void 0
  );
  O.useEffect(() => {
    if (Se === void 0) return;
    G(Se);
    const fe = setTimeout(() => G(void 0), 220);
    return () => clearTimeout(fe);
  }, [Se]);
  const ae = O.useRef(null), ne = O.useRef(null), $ = O.useRef(null), V = O.useRef(null), [ce, le] = O.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [Z, de] = O.useState(() => "nav"), [ve, _e] = O.useState(0), Ne = () => [
    V.current,
    ne.current,
    $.current
  ].filter(Boolean), je = (fe) => {
    const ye = Ne(), me = Math.max(0, Math.min(fe, ye.length - 1));
    ye[me]?.focus(), _e(me);
  }, xe = O.useCallback(
    (fe) => fe ? Array.from(fe.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (me) => !me.hasAttribute("disabled") && me.tabIndex !== -1
    ) : [],
    []
  ), $e = O.useCallback(
    (fe) => {
      const ye = xe(ne.current);
      if (!ye.length) {
        ne.current?.focus();
        return;
      }
      const me = Math.max(0, Math.min(fe, ye.length - 1)), ke = ye[me];
      ke.focus(), setTimeout(() => {
        document.activeElement !== ke && (ke.focus(), setTimeout(() => {
          document.activeElement !== ke && ke.click();
        }, 10));
      }, 10), le((Re) => ({ ...Re, contentIndex: me }));
      const ze = (Re) => {
        Re.key === "Escape" && (Re.preventDefault(), Re.stopPropagation(), ne.current?.focus(), ke.removeEventListener("keydown", ze));
      };
      ye.forEach((Re) => {
        const Pe = Re._escapeHandler;
        Pe && Re.removeEventListener("keydown", Pe);
      }), ke._escapeHandler = ze, ke.addEventListener("keydown", ze);
    },
    [xe]
  ), Be = O.useCallback(
    (fe) => {
      const ye = xe($.current);
      if (!ye.length) {
        $.current?.focus();
        return;
      }
      const me = Math.max(0, Math.min(fe, ye.length - 1)), ke = ye[me];
      ke.focus(), setTimeout(() => {
        document.activeElement !== ke && (ke.focus(), setTimeout(() => {
          document.activeElement !== ke && ke.click();
        }, 10));
      }, 10), le((Re) => ({ ...Re, secondaryIndex: me }));
      const ze = (Re) => {
        Re.key === "Escape" && (Re.preventDefault(), Re.stopPropagation(), $.current?.focus(), ke.removeEventListener("keydown", ze));
      };
      ye.forEach((Re) => {
        const Pe = Re._escapeHandler;
        Pe && Re.removeEventListener("keydown", Pe);
      }), ke._escapeHandler = ze, ke.addEventListener("keydown", ze);
    },
    [xe]
  ), Ue = (fe) => {
    if (fe.defaultPrevented) return;
    const ye = fe.key, me = fe.target, ke = !!Je.current && Je.current.contains(me), ze = !!ne.current && ne.current.contains(me), Re = !!$.current && $.current.contains(me), Pe = !!$.current, Qt = me === V.current || me === ne.current || me === $.current, Ht = Ee && (oe === "list" || oe === "cards"), Fn = ze && !!me.closest(".nhs-navigation-split-view__header");
    if (Z === "containers" && Qt) {
      if (ye === "ArrowRight") {
        fe.preventDefault();
        const Te = Ne(), He = Math.min(Te.length - 1, ve + 1);
        je(He);
        return;
      }
      if (ye === "ArrowLeft") {
        fe.preventDefault();
        const Te = Math.max(0, ve - 1);
        je(Te);
        return;
      }
      if (ye === "Home") {
        fe.preventDefault(), je(0);
        return;
      }
      if (ye === "End") {
        fe.preventDefault(), je(Ne().length - 1);
        return;
      }
      if (ye === "Enter" || ye === " ") {
        if (fe.preventDefault(), me === V.current) {
          if (de("nav"), Je.current) {
            const Te = Array.from(
              Je.current.querySelectorAll("[data-nav-item]")
            );
            (Te[We >= 0 ? We : 0] || Te[0])?.focus();
          }
        } else me === ne.current ? (de("content"), $e(ce.contentIndex)) : me === $.current && (de("secondary"), Be(ce.secondaryIndex));
        return;
      }
      return;
    }
    if (ye === "Escape") {
      if (Z === "content" || Z === "secondary") {
        if (ze || Re) {
          if (fe.preventDefault(), de("nav"), Je.current) {
            const He = Array.from(
              Je.current.querySelectorAll("[data-nav-item]")
            )[We >= 0 ? We : 0];
            setTimeout(() => He?.focus(), 10);
          }
        } else if ((me === ne.current || me === $.current) && (fe.preventDefault(), de("nav"), Je.current)) {
          const He = Array.from(
            Je.current.querySelectorAll("[data-nav-item]")
          )[We >= 0 ? We : 0];
          setTimeout(() => He?.focus(), 10);
        }
      }
      return;
    }
    if (ye === "Enter" || ye === " ") {
      if (me.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (me === ne.current && Z === "content") {
        fe.preventDefault(), fe.stopPropagation(), xe(ne.current).length > 0 && setTimeout(() => {
          $e(ce.contentIndex);
        }, 50);
        return;
      }
      if (me === $.current && Z === "secondary") {
        fe.preventDefault(), fe.stopPropagation(), xe(
          $.current
        ).length > 0 && setTimeout(() => {
          Be(ce.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Ht && Fn && !Qt && (ye === "ArrowRight" || ye === "ArrowLeft")) {
      const Te = xe(ne.current).filter(
        (He) => He.closest(".nhs-navigation-split-view__header")
      );
      if (Te.length > 1) {
        const He = Te.indexOf(me);
        if (He >= 0) {
          const ys = (He + (ye === "ArrowRight" ? 1 : -1) + Te.length) % Te.length;
          fe.preventDefault(), Te[ys].focus();
          return;
        }
      }
    }
    if (ye === "ArrowRight") {
      if (ke || Z === "nav") {
        fe.preventDefault(), de("content"), setTimeout(() => ne.current?.focus(), 10);
        return;
      }
      if (ze || Z === "content") {
        Pe && (fe.preventDefault(), de("secondary"), setTimeout(() => $.current?.focus(), 10));
        return;
      }
    }
    if (ye === "ArrowLeft") {
      if (Re || Z === "secondary") {
        fe.preventDefault(), de("content"), setTimeout(() => ne.current?.focus(), 10);
        return;
      }
      if (ze || Z === "content") {
        if (fe.preventDefault(), de("nav"), Je.current) {
          const He = Array.from(
            Je.current.querySelectorAll("[data-nav-item]")
          )[We >= 0 ? We : 0];
          setTimeout(() => He?.focus(), 10);
        }
        return;
      }
    }
    if (ye === "Home" && !ke && (fe.preventDefault(), de("nav"), Je.current)) {
      const Te = Array.from(
        Je.current.querySelectorAll("[data-nav-item]")
      ), He = Te[We >= 0 ? We : 0] || Te[0];
      setTimeout(() => He?.focus(), 10);
    }
    if (ye === "End") {
      const Te = Pe ? $.current : ne.current;
      Te && !Te.contains(me) && (fe.preventDefault(), Pe ? (de("secondary"), setTimeout(() => $.current?.focus(), 10)) : (de("content"), setTimeout(() => ne.current?.focus(), 10)));
    }
    if (ye === "ArrowDown" || ye === "ArrowUp") {
      if (me === ne.current && ye === "ArrowDown") {
        fe.preventDefault(), xe(ne.current).length > 0 && $e(0);
        return;
      }
      if (me === $.current && ye === "ArrowDown") {
        fe.preventDefault(), xe(
          $.current
        ).length > 0 && Be(0);
        return;
      }
      if (ze) {
        const Te = xe(ne.current);
        if (Te.length) {
          fe.preventDefault();
          const He = ye === "ArrowDown" ? 1 : -1, ut = (ce.contentIndex + He + Te.length) % Te.length;
          $e(ut);
        }
      } else if (Re) {
        const Te = xe($.current);
        if (Te.length) {
          fe.preventDefault();
          const He = ye === "ArrowDown" ? 1 : -1, ut = (ce.secondaryIndex + He + Te.length) % Te.length;
          Be(ut);
        }
      }
    }
  }, Ee = !!Ce && (oe === "list" || oe === "cards"), et = O.useMemo(() => q === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : q === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : q === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: q.mobile !== void 0 ? q.mobile : !0,
    tablet: q.tablet || !1,
    desktop: q.desktop || !1
  }, [q]), Lt = se && Y("medium") && !Y("xlarge"), gt = se && Y("xlarge"), ct = !!l, Ve = oe === "three-column", [Xe, hn] = O.useState(!1);
  O.useEffect(() => {
    Ve && Xe && hn(!1);
  }, [Ve, Xe]), O.useEffect(() => {
    Xe && !Ve && (de("secondary"), _e(2), setTimeout(() => {
      $.current?.focus();
    }, 50));
  }, [Xe, Ve]), O.useEffect(() => {
    !Xe && !Ve && Z === "secondary" && (de("content"), _e(1), setTimeout(() => {
      ne.current?.focus();
    }, 50));
  }, [Xe, Ve, Z]);
  const Ar = !!Ce && (Ee && et.mobile || !Ee && Lt && et.tablet || !Ee && gt && et.desktop) || ct && !Ve, $l = `h${ee}`, Br = Ce ? O.createElement(
    $l,
    {
      style: {
        marginLeft: Ee ? 32 : 0,
        marginRight: Ee ? 32 : 0
      }
    },
    Ce.label
  ) : null, xs = Ee ? "mobile" : Lt ? "tablet" : "desktop", Dl = ct && !Ve && !Xe, Er = Ee && et.mobile ? /* @__PURE__ */ n.jsx(
    ca,
    {
      element: "button",
      text: f,
      style: { marginRight: 16 },
      onClick: () => Jt(void 0, void 0)
    }
  ) : void 0, Rr = Dl ? /* @__PURE__ */ n.jsx(
    li,
    {
      element: "button",
      text: h,
      onClick: () => {
        hn(!0);
      }
    }
  ) : void 0, Pr = !Ve && Xe ? /* @__PURE__ */ n.jsx(
    ca,
    {
      element: "button",
      text: f,
      style: { marginRight: 16 },
      onClick: () => hn(!1)
    }
  ) : void 0, Il = O.useMemo(() => {
    if (!Ar || !Ce) return null;
    if (ie)
      return ie({
        item: Ce,
        detailActive: Ee,
        context: xs,
        backLink: Er,
        defaultHeading: Br
      });
    const fe = Ce && te ? typeof te == "function" ? te(Ce) : te : null;
    return /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
      /* @__PURE__ */ n.jsxs(
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
            Pr || Er,
            /* @__PURE__ */ n.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  minWidth: 0
                },
                children: [
                  Br,
                  fe && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: fe })
                ]
              }
            )
          ]
        }
      ),
      Rr && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: Rr })
    ] });
  }, [
    Ar,
    Ce,
    ie,
    Ee,
    xs,
    Er,
    Pr,
    Br,
    Rr,
    te
  ]);
  O.useEffect(() => {
    if (!C) return;
    const fe = oe === "three-column";
    let ye = !1;
    const me = () => {
      ye || (re.selectedId !== Se && re.setSelectedId(Se), re.drilledIn !== fe && re.setDrilledIn(fe));
    };
    if (w && w > 0) {
      const ke = setTimeout(me, w);
      return () => {
        ye = !0, clearTimeout(ke);
      };
    } else
      me();
  }, [C, re, Se, oe, w]), O.useEffect(() => {
    if (!C) return;
    const fe = () => {
      const ye = new URLSearchParams(window.location.search), me = ye.get(S);
      ye.get(p), be(me === null ? void 0 : me);
    };
    return window.addEventListener("popstate", fe), () => window.removeEventListener("popstate", fe);
  }, [
    C,
    S,
    p,
    d,
    l
  ]);
  const Ln = O.useRef(0), xt = O.useRef(
    null
  ), Jt = O.useCallback(
    (fe, ye) => {
      fe !== Se && (r === void 0 && be(fe), o?.(fe, ye));
    },
    [r, o, Se]
  );
  O.useEffect(() => {
    if (!j && Ee && ne.current) {
      const fe = setTimeout(() => ne.current?.focus(), 30);
      return () => clearTimeout(fe);
    }
  }, [Ee, Se, j]);
  const Je = O.useRef(null), [We, pn] = O.useState(
    () => A === "first" ? 0 : -1
  );
  O.useEffect(() => {
    if (We < 0 || !Je.current) return;
    const ye = Array.from(
      Je.current.querySelectorAll("[data-nav-item]")
    )[We];
    if (ye) {
      document.activeElement !== ye && ye.focus(), Ln.current = We;
      const me = t[We];
      x?.(
        me ? u(me) : void 0,
        me,
        We
      );
    }
  }, [We, t, x, u]);
  const Ml = (fe) => {
    const ye = R === "vertical" ? "ArrowDown" : "ArrowRight", me = R === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (fe.key === "ArrowRight" && R === "vertical") {
      fe.preventDefault(), Xe ? (de("secondary"), setTimeout(() => {
        $.current?.focus();
      }, 10)) : (de("content"), setTimeout(() => {
        ne.current?.focus();
      }, 10));
      return;
    }
    if (fe.key === ye)
      fe.preventDefault(), pn((ke) => Math.min(t.length - 1, ke + 1));
    else if (fe.key === me)
      fe.preventDefault(), pn((ke) => Math.max(0, ke - 1));
    else if (fe.key === "Home")
      fe.preventDefault(), pn(0);
    else if (fe.key === "End")
      fe.preventDefault(), pn(t.length - 1);
    else if (fe.key === "Enter" || fe.key === " ") {
      fe.preventDefault();
      const ke = t[We];
      ke && !ke.disabled && Jt(u(ke), ke);
    } else if (fe.key.length === 1 && /[a-z0-9]/i.test(fe.key)) {
      xt.current || (xt.current = { buffer: "", last: 0 });
      const ke = Date.now(), ze = 700, Re = fe.key.toLowerCase();
      ke - xt.current.last > ze ? xt.current.buffer = Re : xt.current.buffer += Re, xt.current.last = ke;
      let Pe = xt.current.buffer;
      const Qt = Pe.split("").every((ut) => ut === Pe[0]), Ht = t.map(
        (ut) => String(ut.label || "").toLowerCase()
      );
      let Fn = 0;
      We >= 0 && (Fn = (We + 1) % t.length);
      let Te;
      const He = (ut, ys) => {
        const vs = t.length;
        for (let Wr = 0; Wr < vs; Wr++) {
          const Or = (Fn + Wr) % vs;
          if (!t[Or].disabled && Ht[Or].startsWith(ut))
            return Or;
        }
      };
      Qt && Pe.length > 1 ? Te = He(Pe[0]) : (Te = He(Pe), Te === void 0 && Pe.length > 1 && (Te = He(Pe[Pe.length - 1]), Te !== void 0 && xt.current && (xt.current.buffer = Pe[Pe.length - 1]))), Te !== void 0 && pn(Te);
    }
  }, Ll = O.useMemo(() => {
    if (_ && (_ === "url" || _ === "both") && typeof window < "u") {
      const ye = new URLSearchParams(window.location.search).get(B);
      if (ye === "1") return !0;
      if (ye === "0") return !1;
    }
    if (_ && (_ === "localStorage" || _ === "both") && typeof window < "u")
      try {
        const fe = window.localStorage.getItem(W);
        if (fe === "1") return !0;
        if (fe === "0") return !1;
      } catch {
      }
    return y;
  }, [
    _,
    y,
    W,
    B
  ]), [dt, Fl] = O.useState(Ll);
  O.useEffect(() => {
    E?.(dt);
  }, [dt, E]);
  const Al = O.useCallback(() => {
    X && k && Fl((fe) => !fe);
  }, [X, k]);
  O.useEffect(() => {
    if (_ && !(typeof window > "u")) {
      if (_ === "localStorage" || _ === "both")
        try {
          window.localStorage.setItem(
            W,
            dt ? "1" : "0"
          );
        } catch {
        }
      if (_ === "url" || _ === "both") {
        const fe = new URLSearchParams(window.location.search);
        fe.set(B, dt ? "1" : "0");
        const ye = `${window.location.pathname}?${fe.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", ye);
      }
    }
  }, [
    dt,
    _,
    W,
    B
  ]);
  const Bl = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Ee ? "nhs-navigation-split-view--detail-active" : "",
    oe === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    k && X && dt ? "nhs-navigation-split-view--nav-collapsed" : "",
    g
  ].filter(Boolean).join(" "), Hr = O.useRef(null);
  O.useEffect(() => {
    if (!M && Hr.current) {
      const fe = Ce ? `Selected ${Ce.label}` : "Selection cleared";
      Hr.current.textContent = fe;
    }
  }, [Ce, M]), O.useEffect(() => {
    !Ee && Se == null && Je.current && Je.current.querySelectorAll("[data-nav-item]")[Ln.current]?.focus();
  }, [Ee, Se]);
  const Ft = oe === "three-column", [zr, El] = O.useState(!1);
  O.useEffect(() => {
    Ft && !zr && El(!0);
  }, [Ft, zr]);
  const bs = O.useRef(Ft);
  O.useEffect(() => {
    bs.current !== Ft && (I?.(Ft), bs.current = Ft);
  }, [Ft, I]);
  const Rl = () => {
    if (oe === "cards")
      return /* @__PURE__ */ n.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": Se ? String(Se) : void 0,
          children: [
            t.map((me) => {
              const ke = u(me), ze = ke === Se;
              return /* @__PURE__ */ n.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": ze,
                  children: /* @__PURE__ */ n.jsxs(
                    "button",
                    {
                      id: String(ke),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": ze || void 0,
                      "data-disabled": me.disabled || void 0,
                      disabled: me.disabled,
                      onClick: () => !me.disabled && Jt(ke, me),
                      children: [
                        me.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: me.icon }),
                        /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: me.label }),
                        me.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: me.description }),
                        s?.(me),
                        me.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: me.badge })
                      ]
                    }
                  )
                },
                ke
              );
            }),
            t.length === 0 && !m && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: b || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const fe = "nsv-nav-instructions", ye = O.useMemo(() => O.memo(
      ({
        item: me,
        idx: ke,
        selected: ze,
        focused: Re
      }) => {
        const Pe = u(me), Qt = me.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Re ? 0 : -1,
          onClick: () => {
            Ln.current = ke, Jt(Pe, me);
          },
          onKeyDown: (Ht) => {
            (Ht.key === "Enter" || Ht.key === " ") && (Ht.preventDefault(), Ln.current = ke, Jt(Pe, me));
          }
        };
        return /* @__PURE__ */ n.jsxs(
          "li",
          {
            id: String(Pe),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": ze,
            "aria-current": ze ? "true" : void 0,
            "data-selected": ze || void 0,
            "data-disabled": me.disabled || void 0,
            ...Qt,
            children: [
              me.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: me.icon }),
              /* @__PURE__ */ n.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: me.label }),
                me.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: me.description }),
                s?.(me)
              ] }),
              me.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: me.badge })
            ]
          }
        );
      }
    ), [u, Jt, s]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: Je,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Ml,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": fe,
          "aria-activedescendant": Se ? String(Se) : void 0,
          children: [
            t.map((me, ke) => /* @__PURE__ */ n.jsx(
              ye,
              {
                item: me,
                idx: ke,
                selected: u(me) === Se,
                focused: ke === We || We === -1 && ke === 0 && A === "first",
                "data-just-selected": u(me) === J ? "true" : void 0
              },
              u(me)
            )),
            t.length === 0 && !m && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: b || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          id: fe,
          style: {
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)"
          },
          children: T
        }
      )
    ] });
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: ae,
      className: Bl,
      "aria-label": D?.rootLabel,
      "data-layout": oe,
      onKeyDown: Ue,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Ee || void 0,
            style: { transform: Ee ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: V,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": D?.navigationLabel || "Items",
                  "data-collapsed": dt || void 0,
                  tabIndex: 0,
                  children: [
                    k && X && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Al,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": dt ? Q : H,
                        title: dt ? Q : H,
                        children: dt ? P || /* @__PURE__ */ n.jsx(Uf, {}) : v || /* @__PURE__ */ n.jsx(Of, {})
                      }
                    ) }),
                    /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Rl() }),
                    N && /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: N
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: ne,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": D?.contentLabel || "Content",
                  "data-has-selection": !!Ce || void 0,
                  tabIndex: 0,
                  style: {
                    display: Xe && !Ve ? "none" : void 0
                  },
                  children: [
                    Ar && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: Il }),
                    /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(Ce)
                      }
                    )
                  ]
                }
              ),
              oe === "three-column" && (!F || zr) || Xe && !Ve ? /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: $,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": D?.secondaryContentLabel || "Secondary",
                  tabIndex: 0,
                  children: /* @__PURE__ */ n.jsxs(
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
                        Xe && !Ve && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ n.jsx(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              width: "100%"
                            },
                            children: /* @__PURE__ */ n.jsxs(
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
                                  /* @__PURE__ */ n.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ n.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: Ce && typeof Ce == "object" && "label" in Ce ? Ce.label : String(Ce) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        Ce && U && /* @__PURE__ */ n.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof U == "function" ? U(Ce) : U
                          }
                        ),
                        /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(Ce) })
                      ]
                    }
                  )
                }
              ) : null
            ]
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: Hr,
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
        /* @__PURE__ */ n.jsx(
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
            children: Ft ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
Gf.displayName = "NavigationSplitView";
const fo = (e, t, r, a) => e == null || Number.isNaN(e) ? a : Math.min(r, Math.max(t, e)), Yf = ({ item: e, maxLines: t, enableDrilldown: r, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, d = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, f = Math.floor(e._startFraction) + 2, h = Math.max(1, Math.round(e._spanColumns)), m = r && e.childItems && e.childItems.length > 0, b = (g) => {
    m && (g.preventDefault(), a?.(e));
  }, D = m ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": o || !1,
    onClick: b,
    onKeyDown: (g) => {
      (g.key === "Enter" || g.key === " ") && b(g), g.key === "Escape" && o && b(g);
    }
  } : {};
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: ge("nhsuk-product-roadmap__item", m && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: d, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": f,
      "aria-colspan": h,
      ...D,
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          m && /* @__PURE__ */ n.jsx("span", { className: ge("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Vf = zl(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: r = 400,
  itemMaxLines: a = 2,
  className: o,
  ariaLabel: s = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: d = "overlay",
  ...c
}) => {
  const [f, h] = Ie(() => /* @__PURE__ */ new Set()), [m, b] = Ie(() => /* @__PURE__ */ new Set()), D = Le(/* @__PURE__ */ new Set()), g = pe((w) => f.has(w), [f]), u = pe((w) => {
    h((F) => {
      const N = new Set(F);
      return N.has(w.id) ? (N.delete(w.id), b((k) => {
        const y = new Set(k);
        return y.add(w.id), y;
      }), setTimeout(() => b((k) => {
        const y = new Set(k);
        return y.delete(w.id), y;
      }), 240), l?.(w.id, !1)) : (N.add(w.id), l?.(w.id, !0)), N;
    });
  }, [l]);
  Wl(() => {
    if (d !== "inline" || !i) return;
    const w = [];
    if (f.forEach((y) => {
      D.current.has(y) || w.push(y);
    }), D.current = new Set(f), !w.length) return;
    const F = typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches, N = w.map((y) => `.nhsuk-product-roadmap__inline-children[data-parent="${y}"] .nhsuk-product-roadmap__inline-child`).join(","), k = Array.from(document.querySelectorAll(N));
    if (k.length) {
      if (F) {
        k.forEach((y) => {
          y.style.opacity = "1", y.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((y) => {
        (y.gsap || y.default || y).to(k, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        k.forEach((y) => {
          y.style.opacity = "1", y.style.transform = "translateY(0)";
        });
      });
    }
  }, [f, d, i]);
  const R = pe(() => {
    f.size && h(/* @__PURE__ */ new Set());
  }, [f]), L = ge("nhsuk-product-roadmap", o), I = fo(r, 120, 1200, 400), T = fo(a, 1, 6, 2), A = De(() => e.map((w) => /* @__PURE__ */ new Date(w + " 01")), [e]), j = De(() => {
    if (A.length === 0) {
      const N = /* @__PURE__ */ new Date();
      return [N, N];
    }
    const w = new Date(A[0]), F = Cn.offset(new Date(A[A.length - 1]), 1);
    return [w, F];
  }, [A]), M = De(() => os().domain(j).range([0, A.length * I]), [j, A.length, I]), x = pe((w) => {
    if (w.startDate) {
      const H = new Date(w.startDate), P = new Date(w.endDate ?? w.startDate);
      P < H && P.setTime(H.getTime());
      const v = M(H), _ = Cn.offset(new Date(P), 1);
      let W = M(_);
      Number.isFinite(W) || (W = v + I);
      const B = Math.max(I * 0.25, W - v), q = v / I, ee = B / I;
      return { ...w, _pxLeft: v, _pxWidth: B, _startFraction: q, _spanColumns: ee };
    }
    const F = w.date ?? 1, N = w.dateOffset ?? 0, k = w.length ?? 1, y = w.partialLength ?? 1, E = F - 1 + N, Q = k - 1 + y;
    return { ...w, _pxLeft: E * I, _pxWidth: Q * I, _startFraction: E, _spanColumns: Q };
  }, [M, I]), C = De(() => t.map((w) => {
    const N = w.roadmapItems.map((y) => {
      const E = !y.childItems && y.children ? { ...y, childItems: y.children } : { ...y };
      return x(E);
    }).sort((y, E) => y._pxLeft !== E._pxLeft ? y._pxLeft - E._pxLeft : E._pxWidth - y._pxWidth), k = [];
    return N.forEach((y) => {
      const E = y._pxLeft, Q = y._pxLeft + y._pxWidth;
      let H = k.findIndex((P) => P <= E);
      H === -1 && (H = k.length, k.push(0)), k[H] = Q, y.verticalPosition = H + 1;
    }), { ...w, roadmapItems: N, _laneCount: k.length };
  }), [t, x]), S = De(() => C.map((w) => w._laneCount || 1), [C]), p = De(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: L,
      style: { "--column-width": `${I}px`, gridTemplateColumns: p },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": C.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((w, F) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": F + 2, children: w }, w + F))
        ] }),
        C.map((w, F) => {
          const N = F + 2, k = S[F];
          let y, E = 0, Q = [];
          i && d === "inline" && (Q = w.roadmapItems.filter((_) => g(_.id) && _.childItems && _.childItems.length).map((_) => ({ id: _.id, lane: _.verticalPosition || 1, count: _.childItems.length })).sort((_, W) => _.lane - W.lane), E = Q.reduce((_, W) => _ + W.count, 0));
          const H = k + E;
          y = `calc((${H} * var(--roadmap-item-block-height)) + (max(0, ${H} - 1) * var(--roadmap-row-gap)))`;
          const P = {};
          let v = 0;
          return Q.forEach((_) => {
            v += _.count, P[_.lane + 1] = v;
          }), /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": N, children: [
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: w.heading }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: y }, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: w.roadmapItems.map((_) => {
              const W = (_.verticalPosition || 1) - 1, B = Q.filter((te) => te.lane - 1 < W).reduce((te, U) => te + U.count, 0), q = W + B, ee = g(_.id), ie = m.has(_.id);
              return /* @__PURE__ */ n.jsxs(rt.Fragment, { children: [
                /* @__PURE__ */ n.jsx(Yf, { item: _, maxLines: T, enableDrilldown: i, onExpand: u, isActive: ee, topLaneIndex: q, laneOffset: B }),
                i && d === "inline" && (ee || ie) && _.childItems && /* @__PURE__ */ n.jsx("div", { "data-parent": _.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${_.title} child tasks`, children: _.childItems.map((te, U) => {
                  const Y = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let se = _._pxLeft, z = _._pxWidth;
                  if (te.startDate) {
                    const oe = new Date(te.startDate);
                    let re = te.endDate ? new Date(te.endDate) : new Date(oe);
                    re < oe && (re = new Date(oe));
                    const ue = new Date(re);
                    ue.setDate(ue.getDate() + 1);
                    const be = M(oe);
                    let Se = M(ue);
                    (!Number.isFinite(Se) || Se <= be) && (Se = be + 6), se = be, z = Math.max(6, Se - be);
                  }
                  const K = q + 1 + U;
                  return /* @__PURE__ */ n.jsxs(
                    "div",
                    {
                      className: ge("nhsuk-product-roadmap__inline-child", te.status && `nhsuk-product-roadmap__inline-child--status-${te.status}`, !ee && ie && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${se}px`, width: `${z}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${K})`, height: Y, opacity: ee ? 0 : void 0, transform: ee ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: te.title })
                      ]
                    },
                    te.id
                  );
                }) })
              ] }, _.id);
            }) }) })
          ] }, w.heading + F);
        }),
        i && d === "overlay" && f.size === 1 && (() => {
          const w = Array.from(f)[0], F = t.flatMap((N) => N.roadmapItems).find((N) => N.id === w);
          return !F || !F.childItems ? null : /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${F.title} details`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ n.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: F.title }),
                /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: R, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: F.content }),
              /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: F.childItems.map((N) => /* @__PURE__ */ n.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: N.title }),
                N.content && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: N.content })
              ] }, N.id)) })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: R, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Vf.displayName = "ProductRoadmap";
function di(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = di(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function er() {
  for (var e, t, r = 0, a = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = di(e)) && (a && (a += " "), a += t);
  return a;
}
function Ke(e) {
  return function() {
    return e;
  };
}
const ya = Math.PI, va = 2 * ya, Wt = 1e-6, qf = va - Wt;
function ui(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Xf(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return ui;
  const r = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * r) / r + a[o];
  };
}
class Kf {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? ui : Xf(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, a, o) {
    this._append`Q${+t},${+r},${this._x1 = +a},${this._y1 = +o}`;
  }
  bezierCurveTo(t, r, a, o, s, i) {
    this._append`C${+t},${+r},${+a},${+o},${this._x1 = +s},${this._y1 = +i}`;
  }
  arcTo(t, r, a, o, s) {
    if (t = +t, r = +r, a = +a, o = +o, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let i = this._x1, l = this._y1, d = a - t, c = o - r, f = i - t, h = l - r, m = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (m > Wt) if (!(Math.abs(h * d - c * f) > Wt) || !s)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let b = a - i, D = o - l, g = d * d + c * c, u = b * b + D * D, R = Math.sqrt(g), L = Math.sqrt(m), I = s * Math.tan((ya - Math.acos((g + m - u) / (2 * R * L))) / 2), T = I / L, A = I / R;
      Math.abs(T - 1) > Wt && this._append`L${t + T * f},${r + T * h}`, this._append`A${s},${s},0,0,${+(h * b > f * D)},${this._x1 = t + A * d},${this._y1 = r + A * c}`;
    }
  }
  arc(t, r, a, o, s, i) {
    if (t = +t, r = +r, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), d = a * Math.sin(o), c = t + l, f = r + d, h = 1 ^ i, m = i ? o - s : s - o;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > Wt || Math.abs(this._y1 - f) > Wt) && this._append`L${c},${f}`, a && (m < 0 && (m = m % va + va), m > qf ? this._append`A${a},${a},0,1,${h},${t - l},${r - d}A${a},${a},0,1,${h},${this._x1 = c},${this._y1 = f}` : m > Wt && this._append`A${a},${a},0,${+(m >= ya)},${h},${this._x1 = t + a * Math.cos(s)},${this._y1 = r + a * Math.sin(s)}`);
  }
  rect(t, r, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function fi(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const a = Math.floor(r);
      if (!(a >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = a;
    }
    return e;
  }, () => new Kf(t);
}
function hi(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function pi(e) {
  this._context = e;
}
pi.prototype = {
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
function mi(e) {
  return new pi(e);
}
function gi(e) {
  return e[0];
}
function xi(e) {
  return e[1];
}
function bi(e, t) {
  var r = Ke(!0), a = null, o = mi, s = null, i = fi(l);
  e = typeof e == "function" ? e : e === void 0 ? gi : Ke(e), t = typeof t == "function" ? t : t === void 0 ? xi : Ke(t);
  function l(d) {
    var c, f = (d = hi(d)).length, h, m = !1, b;
    for (a == null && (s = o(b = i())), c = 0; c <= f; ++c)
      !(c < f && r(h = d[c], c, d)) === m && ((m = !m) ? s.lineStart() : s.lineEnd()), m && s.point(+e(h, c, d), +t(h, c, d));
    if (b) return s = null, b + "" || null;
  }
  return l.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Ke(+d), l) : e;
  }, l.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Ke(+d), l) : t;
  }, l.defined = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : Ke(!!d), l) : r;
  }, l.curve = function(d) {
    return arguments.length ? (o = d, a != null && (s = o(a)), l) : o;
  }, l.context = function(d) {
    return arguments.length ? (d == null ? a = s = null : s = o(a = d), l) : a;
  }, l;
}
function _a(e, t, r) {
  var a = null, o = Ke(!0), s = null, i = mi, l = null, d = fi(c);
  e = typeof e == "function" ? e : e === void 0 ? gi : Ke(+e), t = typeof t == "function" ? t : Ke(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? xi : Ke(+r);
  function c(h) {
    var m, b, D, g = (h = hi(h)).length, u, R = !1, L, I = new Array(g), T = new Array(g);
    for (s == null && (l = i(L = d())), m = 0; m <= g; ++m) {
      if (!(m < g && o(u = h[m], m, h)) === R)
        if (R = !R)
          b = m, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), D = m - 1; D >= b; --D)
            l.point(I[D], T[D]);
          l.lineEnd(), l.areaEnd();
        }
      R && (I[m] = +e(u, m, h), T[m] = +t(u, m, h), l.point(a ? +a(u, m, h) : I[m], r ? +r(u, m, h) : T[m]));
    }
    if (L) return l = null, L + "" || null;
  }
  function f() {
    return bi().defined(o).curve(i).context(s);
  }
  return c.x = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Ke(+h), a = null, c) : e;
  }, c.x0 = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Ke(+h), c) : e;
  }, c.x1 = function(h) {
    return arguments.length ? (a = h == null ? null : typeof h == "function" ? h : Ke(+h), c) : a;
  }, c.y = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Ke(+h), r = null, c) : t;
  }, c.y0 = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Ke(+h), c) : t;
  }, c.y1 = function(h) {
    return arguments.length ? (r = h == null ? null : typeof h == "function" ? h : Ke(+h), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return f().x(e).y(t);
  }, c.lineY1 = function() {
    return f().x(e).y(r);
  }, c.lineX1 = function() {
    return f().x(a).y(t);
  }, c.defined = function(h) {
    return arguments.length ? (o = typeof h == "function" ? h : Ke(!!h), c) : o;
  }, c.curve = function(h) {
    return arguments.length ? (i = h, s != null && (l = i(s)), c) : i;
  }, c.context = function(h) {
    return arguments.length ? (h == null ? s = l = null : l = i(s = h), c) : s;
  }, c;
}
function ho(e) {
  return e < 0 ? -1 : 1;
}
function po(e, t, r) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), i = (r - e._y1) / (o || a < 0 && -0), l = (s * o + i * a) / (a + o);
  return (ho(s) + ho(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function mo(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function ea(e, t, r) {
  var a = e._x0, o = e._y0, s = e._x1, i = e._y1, l = (s - a) / 3;
  e._context.bezierCurveTo(a + l, o + l * t, s - l, i - l * r, s, i);
}
function tr(e) {
  this._context = e;
}
tr.prototype = {
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
        ea(this, this._t0, mo(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, ea(this, mo(this, r = po(this, e, t)), r);
          break;
        default:
          ea(this, this._t0, r = po(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
Object.create(tr.prototype).point = function(e, t) {
  tr.prototype.point.call(this, t, e);
};
function nr(e) {
  return new tr(e);
}
function Zf(e, t, r) {
  const a = Mo(e, t);
  return os().domain(a).range(r);
}
function go(e, t, r) {
  const [a, o] = Mo(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(o)))
    return Xn().domain([0, 0]).range(r);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const d = o - a, c = (d > 0 ? d : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = o ?? 0;
  return Xn().domain([i, l]).nice().range(r);
}
function wa(e, t, r, a) {
  const o = bi().x(t).y(r);
  return a?.smooth !== !1 && o.curve(nr), o(e) ?? "";
}
function Jf(e = {}) {
  const t = O.useRef(null), r = O.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, o] = O.useState({ width: 0, height: 0 });
  O.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((d) => {
      for (const c of d) {
        const { width: f, height: h } = c.contentRect;
        o({ width: f, height: h });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const s = Math.max(0, a.width - r.left - r.right), i = Math.max(0, a.height - r.top - r.bottom);
  return { width: a.width, height: a.height, innerWidth: s, innerHeight: i, margin: r, ref: t };
}
const yi = O.createContext(null);
function Rt() {
  return O.useContext(yi);
}
const Qf = ({
  height: e = 240,
  margin: t,
  width: r,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = Jf(t), d = { height: e, position: "relative" };
  return r !== void 0 && (d.width = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n.jsx("div", { ref: l.ref, className: a, style: d, role: s, "aria-label": i, children: /* @__PURE__ */ n.jsx(yi.Provider, { value: l, children: o }) });
}, ls = O.createContext(null), Zt = () => O.useContext(ls), eh = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  parseX: a,
  children: o,
  xTickCount: s = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: d,
  yPadding: c
}) => {
  const f = Rt(), h = t ?? f?.innerWidth ?? 0, m = r ?? f?.innerHeight ?? 0, b = O.useMemo(() => e.flatMap((T) => T.data), [e]), D = O.useCallback((T) => {
    if (a) return a(T);
    const A = T.x;
    return A instanceof Date ? A : new Date(A);
  }, [a]), g = d ?? 6, u = c ?? 6, R = O.useMemo(() => Zf(b, D, [g, Math.max(0, h - g)]), [b, D, h, g]), L = O.useMemo(() => {
    if (l) {
      const T = go([], (A) => A.y, [Math.max(0, m - u), u]);
      return T.domain(l), T;
    }
    return go(b, (T) => T.y, [Math.max(0, m - u), u]);
  }, [b, m, l]), I = O.useMemo(() => ({
    xScale: R,
    yScale: L,
    getXTicks: (T = s) => R.ticks(T),
    getYTicks: (T = i) => L.ticks(T)
  }), [R, L, s, i]);
  return /* @__PURE__ */ n.jsx(ls.Provider, { value: I, children: o });
}, xo = ({
  type: e,
  scale: t,
  tickCount: r,
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
  tickFormatPreset: b
}) => {
  const D = Zt(), g = Rt(), u = t || (e === "x" ? D?.xScale : D?.yScale), R = r ?? (e === "x" ? 6 : 5), L = typeof o == "function", I = O.useMemo(() => {
    if (L || !b) return;
    const j = (M) => new Intl.DateTimeFormat(void 0, M);
    switch (b) {
      case "dayShortMonth":
        return (M) => {
          const x = M instanceof Date ? M : new Date(M);
          return `${x.getDate()}
${j({ month: "short" }).format(x)}`;
        };
      case "dayShortMonthYear":
        return (M) => {
          const x = M instanceof Date ? M : new Date(M);
          return `${x.getDate()}
${j({ month: "short" }).format(x)} ${x.getFullYear()}`;
        };
      case "shortMonth":
        return (M) => {
          const x = M instanceof Date ? M : new Date(M);
          return j({ month: "short" }).format(x);
        };
      case "shortMonthYear":
        return (M) => {
          const x = M instanceof Date ? M : new Date(M);
          return `${j({ month: "short" }).format(x)} ${x.getFullYear()}`;
        };
      case "hourMinute":
        return (M) => {
          const x = M instanceof Date ? M : new Date(M);
          return j({ hour: "2-digit", minute: "2-digit" }).format(x);
        };
      default:
        return;
    }
  }, [L, b]);
  let T = L ? o : I || ((j) => String(j));
  const A = O.useMemo(() => a && Array.isArray(a) ? a : u ? typeof u.ticks == "function" ? u.ticks(R) : u.domain ? u.domain() : [] : [], [u, R, a]);
  if (e === "x" && !L && !b && A.length && A.every((j) => j instanceof Date)) {
    const j = A[0], M = A[A.length - 1], x = M.getTime() - j.getTime(), C = 24 * 3600 * 1e3, S = 365 * C, p = j.getFullYear() === M.getFullYear(), w = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (x < 2 * C) {
      const F = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      T = (N) => F.format(N);
    } else if (x < 32 * C)
      T = (F) => {
        const N = F;
        return `${N.getDate()} ${w.format(N)}`;
      };
    else if (x < S && p)
      T = (F) => w.format(F);
    else if (x < 2 * S) {
      const F = /* @__PURE__ */ new Set();
      T = (N) => {
        const k = N, y = k.getMonth();
        return F.has(y) || F.add(y), `${w.format(k)} ${k.getFullYear()}`;
      };
    } else
      T = (F) => String(F.getFullYear());
  }
  if (!u || !g) return null;
  if (e === "x") {
    const j = i ?? g.innerHeight, M = typeof u.bandwidth == "function", x = M ? u.bandwidth() : 0, C = (w) => {
      const F = u(w);
      return M ? F + x / 2 : F;
    };
    let S = d ?? 0;
    if (f && d == null) {
      const w = A.map((N) => T(N).replace(/\n.*/g, "")), F = w.length ? w.reduce((N, k) => N + k.length, 0) / w.length : 0;
      S = Math.max(12, Math.round(F * 6 + 4));
    }
    const p = O.useMemo(() => {
      if (a && Array.isArray(a) || S <= 0) return A;
      const w = [];
      let F = -1 / 0;
      for (const N of A) {
        const k = C(N);
        k - F >= S && (w.push(N), F = k);
      }
      return w;
    }, [A, u, S, a, M, x]);
    return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${j})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ n.jsx("line", { x1: 0, x2: g.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      p.map((w, F) => {
        const N = T(w), k = c && N.length > c ? N.slice(0, Math.max(1, c - 1)) + "…" : N, y = m ? k.split(/\n/) : [k.replace(/\n/g, " ")], E = h < 0 ? "end" : h > 0 ? "start" : "middle";
        return /* @__PURE__ */ n.jsxs("g", { transform: `translate(${C(w)},0)`, children: [
          /* @__PURE__ */ n.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ n.jsxs("text", { y: 9, textAnchor: E, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: h ? `rotate(${h})` : void 0, fontFamily: "inherit", children: [
            y.map((Q, H) => /* @__PURE__ */ n.jsx("tspan", { x: 0, dy: H === 0 ? 0 : "1.1em", children: Q }, H)),
            k !== N && /* @__PURE__ */ n.jsx("title", { children: N })
          ] })
        ] }, w?.toString?.() || F);
      })
    ] });
  }
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    A.map((j, M) => {
      const x = T(j), C = c && x.length > c ? x.slice(0, Math.max(1, c - 1)) + "…" : x, S = m ? C.split(/\n/) : [C.replace(/\n/g, " ")];
      return /* @__PURE__ */ n.jsxs("g", { transform: `translate(0,${u(j)})`, children: [
        /* @__PURE__ */ n.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ n.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          S.map((p, w) => /* @__PURE__ */ n.jsx("tspan", { x: -9, dy: w === 0 ? 0 : "1.1em", children: p }, w)),
          C !== x && /* @__PURE__ */ n.jsx("title", { children: x })
        ] })
      ] }, j?.toString?.() || M);
    }),
    s && /* @__PURE__ */ n.jsx("text", { transform: "rotate(-90)", x: -g.innerHeight / 2, y: -g.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: s })
  ] });
}, th = ({
  axis: e = "y",
  tickCount: t,
  stroke: r = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o
}) => {
  const s = Zt(), i = Rt();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-grid", o].filter(Boolean).join(" "), children: [
    e === "y" && l.map((d, c) => /* @__PURE__ */ n.jsx("line", { x1: 0, x2: i.innerWidth, y1: s.yScale(d), y2: s.yScale(d), stroke: r, strokeDasharray: a }, c)),
    e === "x" && l.map((d, c) => /* @__PURE__ */ n.jsx("line", { y1: 0, y2: i.innerHeight, x1: s.xScale(d), x2: s.xScale(d), stroke: r, strokeDasharray: a }, c))
  ] });
}, nh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, In = {
  color: nh
}, rh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Lr = {
  color: rh
}, ah = [
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
let ta = null, na = null, ra = null, vi = "optimized";
function sh() {
  const e = { color: { ...Lr.color, ...In.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    if (typeof i == "string" && /^\{.+\}$/.test(i))
      return t(i.slice(1, -1), o);
    if (typeof i == "string") return i;
  }, r = [];
  try {
    for (let a = 1; a <= 12; a++) {
      const o = `color.data-viz.categorical.${a}`, s = t(o);
      if (!s) throw new Error(`Missing token ${o}`);
      r.push(s);
    }
    return r;
  } catch {
    return ah;
  }
}
function oh() {
  return ta || (ta = sh()), ta;
}
function ih(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function aa(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function lh(e, t, r) {
  const a = aa(e), o = aa(t), s = aa(r), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, d = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: d * 100 };
}
function ch(e, t, r) {
  let i = e / 95.047, l = t / 100, d = r / 108.883;
  const c = (f) => f > 8856e-6 ? Math.cbrt(f) : 7.787 * f + 16 / 116;
  return i = c(i), l = c(l), d = c(d), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - d) };
}
function _i(e) {
  const t = ih(e);
  if (!t) return null;
  const r = lh(t.r, t.g, t.b);
  return ch(r.x, r.y, r.z);
}
function bo(e, t) {
  const r = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(r * r + a * a + o * o);
}
function dh() {
  const e = oh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => _i(i));
  let r = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let d = 0, c = 0;
    for (let h = 0; h < e.length; h++) i !== h && t[h] && (d += bo(l, t[h]), c++);
    const f = d / Math.max(1, c);
    f > a && (a = f, r = i);
  }
  const o = new Set(e.map((i, l) => l)), s = [];
  for (s.push(r), o.delete(r); o.size; ) {
    let i = Array.from(o)[0], l = -1;
    for (const d of o) {
      const c = t[d];
      if (!c) continue;
      let f = 1 / 0;
      for (const h of s) {
        const m = t[h];
        if (m) {
          const b = bo(c, m);
          b < f && (f = b);
        }
      }
      f > l && (l = f, i = d);
    }
    s.push(i), o.delete(i);
  }
  return s.map((i) => e[i]);
}
function uh() {
  return na || (na = dh()), na;
}
function fh(e, t, r) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - r / 200, i = (f) => {
    const h = f * f * f;
    return h > 8856e-6 ? h : (f - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, d = i(a) * 100, c = i(s) * 108.883;
  return { X: l, Y: d, Z: c };
}
function hh(e, t, r) {
  e /= 100, t /= 100, r /= 100;
  let a = e * 3.2406 + t * -1.5372 + r * -0.4986, o = e * -0.9689 + t * 1.8758 + r * 0.0415, s = e * 0.0557 + t * -0.204 + r * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function ph(e, t, r) {
  return `#${[e, t, r].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function mh(e, t) {
  const r = _i(e);
  if (!r) return e;
  const a = Math.min(100, Math.max(0, r.L + t)), { X: o, Y: s, Z: i } = fh(a, r.a, r.b), l = hh(o, s, i);
  return ph(l.r, l.g, l.b);
}
function gh() {
  const e = uh(), r = [12, -12, 24, -24].map((o) => e.map((s) => mh(s, o))), a = [...e];
  return r.forEach((o) => a.push(...o)), a;
}
function xh() {
  return (!ra || bh()) && (ra = gh(), wi = vi), ra;
}
let wi = null;
function bh() {
  return wi !== vi;
}
function mt(e) {
  const t = xh();
  return t[e % t.length];
}
let on = null, jn = null, Nn = null, Tn = null;
function yh() {
  const e = In?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    on = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      on.push(typeof i == "string" ? i : "#212b32");
    }
    const r = e.region || {};
    jn = {}, Object.keys(r).forEach((s) => {
      const i = r[s]?.$value || r[s]?.value;
      typeof i == "string" && (jn[s] = i);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    Tn = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (Tn[s] = i);
    }), Nn = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (Nn[s] = i);
    });
  }
}
function Fr() {
  (!on || !jn || !Nn || !Tn) && yh();
}
function qt(e) {
  return Fr(), on ? on[e % on.length] : "#212b32";
}
function vh(e) {
  return Fr(), jn ? jn[e] : void 0;
}
function rr(e, t) {
  return vh(e) || qt(t);
}
const Sa = ["low", "moderate", "high", "critical"];
let sa = null;
function _h() {
  const e = { color: { ...Lr.color, ...In.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, r = {};
  return Sa.forEach((a) => {
    const o = t(`color.data-viz.severity.${a}`);
    o && (r[a] = o);
  }), r;
}
function Si() {
  return sa || (sa = _h()), sa;
}
function wh(e) {
  return Si()[e.toLowerCase()];
}
function Sh(e, t) {
  return wh(e) || Si()[Sa[t % Sa.length]] || mt(t);
}
function kh(e) {
  return Fr(), Nn ? Nn[e] : void 0;
}
function Ch(e, t) {
  return kh(e) || qt(t);
}
const ka = ["trust", "ambulance", "icb", "region"];
let oa = null;
function jh() {
  const e = { color: { ...Lr.color, ...In.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, r = {};
  return ka.forEach((a) => {
    const o = t(`color.data-viz.org-level.${a}`);
    o && (r[a] = o);
  }), r;
}
function ki() {
  return oa || (oa = jh()), oa;
}
function Nh(e) {
  return ki()[e.toLowerCase()];
}
function Th(e, t) {
  return Nh(e) || ki()[ka[t % ka.length]] || mt(t);
}
function $h(e) {
  return Fr(), Tn ? Tn[e] : void 0;
}
function Dh(e, t) {
  return $h(e) || qt(t);
}
let ia = null;
const Ih = [
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
function Lh() {
  const e = { color: { ...Lr.color, ...In.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((d, c) => d ? d[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, r = {}, a = [];
  return Ih.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? r[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(r).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), r;
}
function Fh() {
  return ia || (ia = Lh()), ia;
}
function Ah(e) {
  return Fh()[Mh(e)];
}
function ln(e, t) {
  return Ah(e) || mt(t);
}
const Ci = O.createContext(null), Mn = () => O.useContext(Ci), $x = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: r,
  onChange: a
}) => {
  const [o, s] = O.useState(() => new Set(e)), i = r !== void 0, l = O.useMemo(() => i ? new Set(r) : o, [i, r, o]), d = O.useCallback((f) => {
    i || s(new Set(f)), a?.(Array.from(f));
  }, [i, a]), c = O.useMemo(() => ({
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
  return /* @__PURE__ */ n.jsx(Ci.Provider, { value: c, children: t });
}, ji = O.createContext(null), Pt = () => O.useContext(ji), Bh = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: r = !1
}) => {
  const a = Zt(), o = Mn(), [s, i] = O.useState(null), l = O.useRef(/* @__PURE__ */ new Map()), [d, c] = O.useState([]), f = O.useCallback(
    (M, x) => {
      l.current.set(M, x);
    },
    []
  ), h = O.useCallback((M) => {
    l.current.delete(M);
  }, []), m = O.useCallback(
    (M, x) => {
      if (!a) return;
      const { xScale: C, yScale: S } = a;
      let p = null, w = 1 / 0;
      l.current.forEach((F, N) => {
        F.forEach((k, y) => {
          const E = C(k.x), Q = S(k.y), H = E - M, P = Q - x, v = Math.sqrt(H * H + P * P);
          v < w && (w = v, p = {
            seriesId: N,
            index: y,
            x: k.x,
            y: k.y,
            clientX: E,
            clientY: Q
          });
        });
      }), p && w <= t ? i(p) : i(null);
    },
    [a, t]
  ), b = O.useCallback(() => i(null), []);
  O.useEffect(() => {
    if (!s) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: M, yScale: x } = a, C = [];
    l.current.forEach((S, p) => {
      S.forEach((w, F) => {
        (s.x instanceof Date && w.x instanceof Date ? w.x.getTime() === s.x.getTime() : w.x === s.x) && C.push({
          seriesId: p,
          index: F,
          x: w.x,
          y: w.y,
          clientX: M(w.x),
          clientY: x(w.y)
        });
      });
    }), C.sort((S, p) => S.seriesId.localeCompare(p.seriesId)), c(C);
  }, [s, a]);
  const D = O.useCallback(
    (M) => {
      if (!s) return;
      const x = l.current.get(s.seriesId);
      if (!x) return;
      let C = s.index + M;
      if (C < 0 || C >= x.length) {
        if (!r) return;
        C = (C + x.length) % x.length;
      }
      const S = x[C];
      if (!a) return;
      const { xScale: p, yScale: w } = a;
      i({
        seriesId: s.seriesId,
        index: C,
        x: S.x,
        y: S.y,
        clientX: p(S.x),
        clientY: w(S.y)
      });
    },
    [s, a, r]
  ), g = O.useCallback(
    (M) => {
      let x = Array.from(l.current.keys());
      if (o && (x = x.filter((E) => !o.isHidden(E))), x.length === 0) return;
      if (!s) {
        const E = x[0], Q = l.current.get(E);
        if (!Q || !a) return;
        const { xScale: H, yScale: P } = a, v = Q[0];
        i({
          seriesId: E,
          index: 0,
          x: v.x,
          y: v.y,
          clientX: H(v.x),
          clientY: P(v.y)
        });
        return;
      }
      const C = x.indexOf(s.seriesId);
      if (C === -1) return;
      let S = C + M;
      if (S < 0 || S >= x.length) {
        if (!r) return;
        S = (S + x.length) % x.length;
      }
      const p = x[S], w = l.current.get(p);
      if (!w || !a) return;
      const F = Math.min(s.index, w.length - 1), N = w[F], { xScale: k, yScale: y } = a;
      i({
        seriesId: p,
        index: F,
        x: N.x,
        y: N.y,
        clientX: k(N.x),
        clientY: y(N.y)
      });
    },
    [s, a, r, o]
  ), u = O.useCallback(() => {
    let M = Array.from(l.current.keys());
    if (o && (M = M.filter((F) => !o.isHidden(F))), M.length === 0) return;
    const x = s ? s.seriesId : M[0], C = l.current.get(x);
    if (!C || C.length === 0 || !a) return;
    const S = C[0], { xScale: p, yScale: w } = a;
    i({
      seriesId: x,
      index: 0,
      x: S.x,
      y: S.y,
      clientX: p(S.x),
      clientY: w(S.y)
    });
  }, [s, a, o]), R = O.useCallback(() => {
    let M = Array.from(l.current.keys());
    if (o && (M = M.filter((N) => !o.isHidden(N))), M.length === 0) return;
    const x = s ? s.seriesId : M[0], C = l.current.get(x);
    if (!C || C.length === 0 || !a) return;
    const S = C.length - 1, p = C[S], { xScale: w, yScale: F } = a;
    i({
      seriesId: x,
      index: S,
      x: p.x,
      y: p.y,
      clientX: w(p.x),
      clientY: F(p.y)
    });
  }, [s, a, o]), L = O.useCallback(
    () => D(1),
    [D]
  ), I = O.useCallback(
    () => D(-1),
    [D]
  ), T = O.useCallback(
    () => g(1),
    [g]
  ), A = O.useCallback(
    () => g(-1),
    [g]
  ), j = O.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: d,
      focusNearest: m,
      clear: b,
      registerSeries: f,
      unregisterSeries: h,
      focusNextPoint: L,
      focusPrevPoint: I,
      focusNextSeries: T,
      focusPrevSeries: A,
      focusFirstPoint: u,
      focusLastPoint: R
    }),
    [
      s,
      d,
      m,
      b,
      f,
      h,
      L,
      I,
      T,
      A,
      u,
      R
    ]
  );
  return /* @__PURE__ */ n.jsx(ji.Provider, { value: j, children: e });
}, Eh = ({
  series: e,
  seriesIndex: t,
  palette: r,
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
  const m = Zt();
  if (!m) return null;
  const { xScale: b, yScale: D } = m, u = Mn()?.isHidden(e.id) ?? !1, R = u && l === "fade";
  if (u && l === "remove")
    return null;
  const L = Pt();
  O.useEffect(() => {
    if (!L) return;
    const x = e.data.map((C) => ({ x: i(C), y: C.y }));
    return L.registerSeries(e.id, x), () => L.unregisterSeries(e.id);
  }, [L, e.id, e.data, i]);
  const I = O.useMemo(
    () => wa(
      e.data,
      (x) => b(i(x)),
      (x) => D(x.y),
      { smooth: c }
    ),
    [e.data, b, D, i, c]
  ), T = O.useMemo(() => {
    if (!e.data.length) return "";
    const [x] = D.domain(), C = _a().x((S) => b(i(S))).y0(() => D(x)).y1((S) => D(S.y));
    return c && C.curve(nr), C(e.data) || "";
  }, [e.data, b, D, i, c]), A = h && h[t], j = e.color || A || (r === "region" ? ln(e.id, t) : mt(t)), M = r === "region" ? rr(e.id, t) : qt(t);
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: R ? 0.25 : 1,
      "aria-hidden": R ? !0 : void 0,
      children: [
        f && /* @__PURE__ */ n.jsx(
          "path",
          {
            d: T,
            fill: `url(#${f})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            d: I,
            fill: "none",
            stroke: j,
            strokeWidth: d,
            role: "presentation"
          }
        ),
        a && e.data.map((x, C) => {
          const S = b(i(x)), p = D(x.y), w = o ? 0 : -1, F = !R && (o && C === s || L?.focused?.seriesId === e.id && L.focused.index === C), N = () => {
            L && !R && L.setFocused({
              seriesId: e.id,
              index: C,
              x: i(x),
              y: x.y,
              clientX: S,
              clientY: p
            });
          }, k = () => {
            L && L.focused?.seriesId === e.id && L.focused.index === C && L.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: S,
              cy: p,
              r: F ? 5 : 3.5,
              stroke: F ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : M,
              strokeWidth: F ? 2 : 1,
              fill: F ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : j,
              className: "fdp-line-point",
              tabIndex: R ? -1 : w,
              "aria-label": `${e.label || e.id} ${i(x).toDateString()} value ${x.y}`,
              "data-series": e.id,
              "data-index": C,
              onMouseEnter: N,
              onFocus: N,
              onMouseLeave: k,
              onBlur: k
            },
            C
          );
        })
      ]
    }
  );
}, Rh = ({ polite: e = !0, format: t }) => {
  const r = Pt(), [a, o] = O.useState(""), s = O.useRef("");
  return O.useEffect(() => {
    if (!r?.focused) return;
    const { focused: i, aggregated: l } = r;
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
  }, [r?.focused, t]), /* @__PURE__ */ n.jsx(
    "div",
    {
      "aria-live": e ? "polite" : "assertive",
      "aria-atomic": "true",
      style: { position: "absolute", width: 1, height: 1, margin: -1, padding: 0, overflow: "hidden", clip: "rect(0 0 0 0)", border: 0 },
      children: a
    }
  );
};
function Ph(e, t, r, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${r}`;
}
const Dx = () => {
  const e = Pt(), t = Rt();
  if (!e || !t || !e.focused) return null;
  const { focused: r, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(r.clientX, 0), o), l = Math.min(Math.max(r.clientY, 0), s), d = i + 8, c = l - 8, f = a.length > 1, h = r.x instanceof Date ? r.x.toDateString() : String(r.x), m = f ? h : `${h} • ${r.y}`, b = /\d+$/.exec(r.seriesId || ""), D = b ? parseInt(b[0], 10) - 1 : 0, g = mt(D >= 0 ? D : 0) || "#005eb8", u = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ n.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: u, strokeWidth: 3 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: u, strokeWidth: 1.5 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 2.5, fill: g, stroke: "#fff", strokeWidth: 0.5 }),
    f ? (() => {
      const L = a.map((M) => `${M.seriesId}: ${M.y}`), I = [m, ...L], T = I.reduce((M, x) => Math.max(M, x.length), 0), A = Math.max(90, T * 6.2 + 16), j = 16 * I.length + 8;
      return /* @__PURE__ */ n.jsxs("g", { children: [
        /* @__PURE__ */ n.jsx("rect", { x: d, y: c - j, rx: 4, ry: 4, width: A, height: j, fill: "#212b32", opacity: 0.92 }),
        I.map((M, x) => /* @__PURE__ */ n.jsx("text", { x: d + 8, y: c - j + 6 + 16 * (x + 0.7), fill: "#fff", fontSize: 12, children: M }, x))
      ] });
    })() : /* @__PURE__ */ n.jsxs("g", { children: [
      /* @__PURE__ */ n.jsx("rect", { x: d, y: c - 24, rx: 4, ry: 4, width: Math.max(60, m.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ n.jsx("text", { x: d + 8, y: c - 8, fill: "#fff", fontSize: 12, children: m })
    ] })
  ] });
}, Ix = ({
  items: e,
  palette: t = "categorical",
  direction: r = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: o = !0,
  hiddenIds: s,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: d
}) => {
  const c = Mn(), f = !!(c && !a && !l && s === void 0), h = a || f, m = e || [], b = s !== void 0, [D, g] = O.useState(new Set(i)), u = b ? new Set(s) : D, [R, L] = O.useState(""), I = (T) => {
    if (f && c) {
      const w = c.isHidden(T);
      c.toggle(T);
      const N = m.find((y) => y.id === T)?.label || T, k = d ? d(T, w, N) : `${N} ${w ? "shown" : "hidden"}`;
      L(k);
      return;
    }
    if (!h) return;
    const A = new Set(u), j = A.has(T);
    j ? A.delete(T) : A.add(T), b || g(A);
    const M = m.filter((w) => !A.has(w.id)).map((w) => w.id), x = Array.from(A);
    l?.(M, x);
    const S = m.find((w) => w.id === T)?.label || T, p = d ? d(T, j, S) : `${S} ${j ? "shown" : "hidden"}`;
    L(p);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ n.jsx("ul", { className: `fdp-legend fdp-legend--${r}`, children: m.map((T, A) => {
      const j = T.palette || t, M = T.color || (j === "region" ? ln(T.id, A) : j === "severity" ? Sh(T.id, A) : j === "org-level" ? Th(T.id, A) : mt(A));
      let x = T.stroke || (j === "region" ? rr(T.id, A) : j === "severity" ? Ch(T.id, A) : j === "org-level" ? Dh(T.id, A) : qt(A));
      if (o && x) {
        const p = x.trim().toLowerCase();
        (p === "#fff" || p === "#ffffff" || p === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(p)) && (x = "#212b32");
      }
      const C = f && c ? c.isHidden(T.id) : u.has(T.id), S = h ? {
        "aria-pressed": !C,
        "aria-label": `${T.label} (${C ? "show" : "hide"})`,
        onClick: () => I(T.id)
      } : { "aria-label": T.label };
      return /* @__PURE__ */ n.jsxs("li", { className: `fdp-legend__item${C ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: M,
              backgroundImage: T.patternDataUrl ? `url(${T.patternDataUrl})` : void 0,
              backgroundSize: T.patternDataUrl ? "auto" : void 0,
              borderColor: x
            },
            ...S
          }
        ),
        /* @__PURE__ */ n.jsx("span", { className: "fdp-legend__label", children: T.label })
      ] }, T.id);
    }) }),
    h && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: R })
  ] });
}, Mx = ({
  series: e,
  seriesIndex: t,
  palette: r,
  parseX: a,
  areaOnly: o = !1,
  visibilityMode: s = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: d,
  gradientFill: c = !0,
  colors: f
}) => {
  const h = Zt();
  if (!h) return null;
  const { xScale: m, yScale: b } = h, g = Mn()?.isHidden(e.id) ?? !1, u = g && s === "fade";
  if (g && s === "remove") return null;
  const R = Pt();
  O.useEffect(() => {
    if (!R) return;
    const M = e.data.map((x) => ({ x: a(x), y: x.y }));
    return R.registerSeries(e.id, M), () => R.unregisterSeries(e.id);
  }, [R, e.id, e.data, a]);
  const L = f && f[t], I = e.color || L || (r === "region" ? ln(e.id, t) : mt(t)), T = O.useMemo(() => d && d.length === e.data.length ? wa(
    e.data,
    (M) => m(a(M)),
    (M) => {
      const x = e.data.indexOf(M);
      return b(d[x].y1);
    },
    { smooth: l }
  ) : wa(
    e.data,
    (M) => m(a(M)),
    (M) => b(M.y),
    { smooth: l }
  ), [e.data, d, m, b, a, l]), A = O.useMemo(() => {
    if (d && d.length === e.data.length) {
      const p = _a().x((w) => m(a(w))).y0((w, F) => b(d[F].y0)).y1((w, F) => b(d[F].y1));
      return l && p.curve(nr), p(e.data) || "";
    }
    const [M, x] = b.domain();
    let C = i;
    C < M ? C = M : C > x && (C = x);
    const S = _a().x((p) => m(a(p))).y0(() => b(C)).y1((p) => b(p.y));
    return l && S.curve(nr), S(e.data) || "";
  }, [e.data, d, m, b, a, i, l]), j = O.useId();
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: u ? 0.25 : 1,
      "aria-hidden": u ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: j, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: I, stopOpacity: 0.25 }),
          /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: I, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: A,
            fill: c ? `url(#${j})` : I,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ n.jsx("path", { d: T, fill: "none", stroke: I, strokeWidth: 1 })
      ]
    }
  );
}, Lx = ({
  series: e,
  seriesIndex: t,
  seriesCount: r,
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
  allSeries: b,
  stacked: D,
  gapRatio: g = 0.15,
  minBarWidth: u,
  gradientFill: R = !0,
  gradientStrokeMatch: L = !0,
  opacity: I = 1,
  fadedOpacity: T = 0.25,
  flatFillOpacity: A = 1,
  colors: j
}) => {
  const M = Math.max(0, g), x = Zt(), C = Rt();
  if (!x || !C) return null;
  const { xScale: S, yScale: p } = x, F = Mn()?.isHidden(e.id) ?? !1, N = F && h === "fade";
  if (F && h === "remove") return null;
  const k = Pt();
  O.useEffect(() => {
    if (!k) return;
    const U = e.data.map((Y) => ({ x: o(Y), y: Y.y }));
    return k.registerSeries(e.id, U), () => k.unregisterSeries(e.id);
  }, [k, e.id, e.data, o]);
  const y = typeof S.bandwidth == "function", E = y ? S.bandwidth() : void 0, Q = O.useMemo(() => {
    if (E != null) return E;
    const U = b && b.length ? b : [e], Y = [];
    U.forEach((K) => {
      K.data.forEach((oe) => {
        const re = S(o(oe));
        Number.isFinite(re) && Y.push(re);
      });
    });
    const se = Y.sort((K, oe) => K - oe);
    if (se.length <= 1) return 40;
    const z = [];
    for (let K = 1; K < se.length; K++)
      z.push(se[K] - se[K - 1]);
    return z.sort((K, oe) => K - oe), (z[Math.floor(z.length / 2)] || 40) * i;
  }, [e.data, b, S, o, i, E]), { basePerBar: H } = O.useMemo(() => {
    if (y) {
      const se = Q, z = Math.max(
        1,
        (se - l * (r - 1)) / r
      ), X = e.barWidth ?? d;
      let K = X ? Math.min(X, se) : z;
      if (c) {
        const oe = se * Math.min(1, Math.max(0.05, f)), re = Math.max(
          1,
          (oe - l * (r - 1)) / r
        );
        K = X ? Math.min(K, re) : re;
      }
      return { basePerBar: K };
    }
    const U = e.barWidth ?? d, Y = Math.max(
      1,
      (Q - l * (r - 1)) / r
    );
    if (c) {
      const se = b && b.length ? b : [e], z = [];
      se.forEach(
        (be) => be.data.forEach((Se) => {
          const Ce = S(o(Se));
          Number.isFinite(Ce) && z.push(Ce);
        })
      ), z.sort((be, Se) => be - Se);
      const X = [];
      for (let be = 1; be < z.length; be++)
        X.push(z[be] - z[be - 1]);
      X.sort((be, Se) => be - Se);
      const oe = (X[Math.floor(X.length / 2)] || Q) * Math.min(1, Math.max(0.05, f)), re = Math.max(
        1,
        (oe - l * (r - 1)) / r
      );
      return { basePerBar: U ? Math.min(U, re) : re };
    }
    return U ? { basePerBar: Math.min(U, Y) } : { basePerBar: Y };
  }, [
    y,
    Q,
    l,
    r,
    d,
    e.barWidth,
    c,
    f,
    b,
    S,
    o
  ]), P = O.useMemo(() => {
    if (y) return [];
    const U = [];
    return (b && b.length ? b : [e]).forEach(
      (se) => se.data.forEach((z) => {
        const X = S(o(z));
        Number.isFinite(X) && U.push(X);
      })
    ), U.sort((se, z) => se - z), Array.from(new Set(U));
  }, [y, b, e, S, o]), v = O.useMemo(() => {
    if (y)
      return [];
    if (!P.length) return [];
    if (P.length === 1)
      return [
        { center: P[0], left: 0, right: C.innerWidth }
      ];
    const U = [];
    for (let Y = 0; Y < P.length; Y++) {
      const se = P[Y], z = Y === 0 ? 0 : (P[Y - 1] + se) / 2, X = Y === P.length - 1 ? C.innerWidth : (se + P[Y + 1]) / 2;
      U.push({
        center: se,
        left: Math.max(0, z),
        right: Math.min(C.innerWidth, X)
      });
    }
    return U;
  }, [y, P, C.innerWidth]), _ = O.useMemo(() => {
    if (y || !v.length)
      return;
    const U = Math.min(1, Math.max(0.05, i)), Y = v.map((oe) => Math.max(2, oe.right - oe.left)), se = Y.map(
      (oe) => Math.max(2, Math.min(oe - 1, oe * U))
    );
    let z = Math.min(...se);
    if (u)
      if (r <= 1) {
        const oe = Math.min(...Y.map((re) => re - 1));
        oe >= u && z < u && (z = Math.min(oe, u));
      } else {
        const oe = Math.min(...Y.map((ue) => ue - 1)), re = u * r + (r - 1) * (u * M);
        re <= oe && z < re && (z = re);
      }
    if (r <= 1)
      return u && z < u && Y.every((re) => re >= u) ? { groupWidth: u, barWidth: u } : { groupWidth: z, barWidth: z };
    let X = z / (r + (r - 1) * M);
    return X < 1 && (X = 1), u && X < u && u * r + (r - 1) * (u * M) <= z && (X = u), { groupWidth: X * r + (r - 1) * (X * M), barWidth: X };
  }, [
    y,
    v,
    i,
    r,
    M,
    u
  ]), W = j && j[t] ? j[t] : void 0, B = e.color || W || (a === "region" ? ln(e.id, t) : mt(t)), q = a === "region" ? rr(e.id, t) : qt(t), ee = L && (e.color || W) ? B : q, ie = Number.isFinite(p(0)) ? p(0) : p.range()[0], te = O.useId();
  return D && D.length === e.data.length ? /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: N ? T : I,
      "aria-hidden": N ? !0 : void 0,
      children: [
        R && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs(
          "linearGradient",
          {
            id: te,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: B, stopOpacity: 0.3 }),
              /* @__PURE__ */ n.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: B,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ n.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: B,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((U, Y) => {
          const se = o(U), z = S(y ? U.x : se);
          let X, K;
          if (y)
            X = Q, K = z;
          else {
            const ae = v.find(
              (ne) => Math.abs(ne.center - z) < 0.5
            );
            if (!ae || !_)
              X = H, K = z - H / 2;
            else {
              const { groupWidth: ne } = _;
              X = ne;
              let $ = z - ne / 2;
              $ < ae.left && ($ = ae.left), $ + ne > ae.right && ($ = Math.max(ae.left, ae.right - ne)), K = $;
            }
          }
          const oe = D[Y], re = p(oe.y0), ue = p(oe.y1), be = Math.min(re, ue), Se = Math.abs(ue - re) || 1;
          if (!y && u && X < u) {
            const ae = v.find(
              (ne) => Math.abs(ne.center - z) < 0.5
            );
            if (ae) {
              const ne = Math.max(2, ae.right - ae.left - 1), $ = Math.min(ne, u);
              $ > X && (X = $, K = Math.max(
                ae.left,
                Math.min(ae.right - X, z - X / 2)
              ));
            }
          }
          const Ce = !N && k?.focused?.seriesId === e.id && k.focused.index === Y, J = () => {
            !k || N || k.setFocused({
              seriesId: e.id,
              index: Y,
              x: se,
              y: oe.y1 - oe.y0,
              clientX: K + X / 2,
              clientY: be
            });
          }, G = () => {
            k?.focused?.seriesId === e.id && k.focused.index === Y && k.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: K,
              y: be,
              width: X,
              height: Se,
              fill: R ? `url(#${te})` : B,
              ...R ? {} : { fillOpacity: A },
              stroke: Ce ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : R && L ? B : void 0,
              strokeWidth: Ce ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: N || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${se instanceof Date ? se.toDateString() : se} value ${oe.y1 - oe.y0}`,
              onMouseEnter: J,
              onFocus: J,
              onMouseLeave: G,
              onBlur: G
            },
            Y
          );
        })
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: N ? T : I,
      "aria-hidden": N ? !0 : void 0,
      children: [
        R && /* @__PURE__ */ n.jsxs("defs", { children: [
          m === "series" && /* @__PURE__ */ n.jsxs(
            "linearGradient",
            {
              id: te,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: B, stopOpacity: 0.3 }),
                /* @__PURE__ */ n.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: B,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: B,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          m === "category" && e.data.map((U, Y) => {
            const z = j && j[Y] || (a === "region" ? ln(String(U.x), Y) : mt(Y)), X = `${te}-${Y}`;
            return /* @__PURE__ */ n.jsxs(
              "linearGradient",
              {
                id: X,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: z, stopOpacity: 0.3 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "60%", stopColor: z, stopOpacity: 0.14 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: z, stopOpacity: 0.06 })
                ]
              },
              X
            );
          })
        ] }),
        e.data.map((U, Y) => {
          const se = o(U), z = S(y ? U.x : se);
          let X, K;
          if (y) {
            const ce = Q;
            if (r <= 1)
              K = ce, X = z;
            else {
              K = Math.max(
                1,
                ce / (r + (r - 1) * M)
              );
              const le = K * M, Z = K * r + le * (r - 1);
              X = z + (ce - Z) / 2 + t * (K + le);
            }
          } else {
            const ce = v.find((le) => le.center === z);
            if (!ce || !_)
              K = H, X = z - H / 2, u && K < u && (K = u, X = z - K / 2);
            else {
              const { barWidth: le } = _;
              K = le;
              const Z = r > 1 ? le * M : 0, de = K * r + Z * (r - 1);
              let ve = z - de / 2;
              ve < ce.left && (ve = ce.left), ve + de > ce.right && (ve = Math.max(ce.left, ce.right - de)), X = ve + t * (K + Z);
            }
            if (u && K < u) {
              const le = v.find(
                (Z) => Math.abs(Z.center - z) < 0.5
              );
              if (le) {
                const Z = Math.max(2, le.right - le.left - 1), de = Math.min(Z, u);
                if (de > K)
                  if (r <= 1)
                    K = de, X = Math.max(
                      le.left,
                      Math.min(le.right - K, z - K / 2)
                    );
                  else {
                    const ve = de * M, _e = de * r + ve * (r - 1);
                    if (_e <= le.right - le.left - 1) {
                      K = de;
                      const Ne = _e;
                      let je = z - Ne / 2;
                      je < le.left && (je = le.left), je + Ne > le.right && (je = Math.max(
                        le.left,
                        le.right - Ne
                      )), X = je + t * (K + ve);
                    }
                  }
              }
            }
          }
          const oe = X + K / 2, re = p(U.y), ue = Math.min(ie, re), be = Math.abs(ie - re), Se = !N && k?.focused?.seriesId === e.id && k.focused.index === Y, Ce = () => {
            !k || N || k.setFocused({
              seriesId: e.id,
              index: Y,
              x: se,
              y: U.y,
              clientX: oe,
              clientY: re
            });
          }, J = () => {
            k?.focused?.seriesId === e.id && k.focused.index === Y && k.clear();
          }, G = m === "category" && j ? j[Y] : void 0, ae = m === "category" ? G || (a === "region" ? ln(String(U.x), Y) : mt(Y)) : B, ne = m === "category" ? `${te}-${Y}` : te, $ = R && L ? ae : m === "category" ? a === "region" ? rr(String(U.x), Y) : qt(Y) : ee, V = Se ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : $ || ae;
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: X,
              y: ue,
              width: K,
              height: be || 1,
              fill: R ? `url(#${ne})` : ae,
              ...R ? {} : { fillOpacity: A },
              stroke: V,
              strokeWidth: Se ? 2 : 1,
              className: "fdp-bar",
              tabIndex: N || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${se instanceof Date ? se.toDateString() : se} value ${U.y}`,
              onMouseEnter: Ce,
              onFocus: Ce,
              onMouseLeave: J,
              onBlur: J
            },
            Y
          );
        })
      ]
    }
  );
}, Fx = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  paddingInner: a = 0.1,
  paddingOuter: o = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = Rt(), d = t ?? l?.innerWidth ?? 0, c = r ?? l?.innerHeight ?? 0, f = O.useMemo(() => e.flatMap((u) => u.data), [e]), h = O.useMemo(() => {
    const u = /* @__PURE__ */ new Set();
    return f.forEach((R) => u.add(R.x)), Array.from(u);
  }, [f]), m = O.useMemo(
    () => Math.max(0, ...f.map((u) => u.y)),
    [f]
  ), b = O.useMemo(
    () => Fo().domain(h).range([0, d]).paddingInner(a).paddingOuter(o),
    [h, d, a, o]
  ), D = O.useMemo(
    () => Xn().domain([0, m]).nice().range([c, 0]),
    [m, c]
  ), g = O.useMemo(
    () => ({
      xScale: b,
      yScale: D,
      getXTicks: () => h,
      getYTicks: (u = i) => D.ticks(u)
    }),
    [b, D, h, i]
  );
  return /* @__PURE__ */ n.jsx(ls.Provider, { value: g, children: s });
}, Ax = ({
  title: e,
  description: t,
  source: r,
  table: a,
  className: o,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const d = O.useId(), c = s || d, f = t ? `${c}-desc` : void 0, h = r ? `${c}-src` : void 0, m = typeof window < "u" && !l;
  return /* @__PURE__ */ n.jsxs(
    "figure",
    {
      id: c,
      className: er("fdp-chart fdp-chart--noscript", o),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": er(f, h),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ n.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ n.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ n.jsx("p", { id: f, className: "fdp-chart__description", children: t }),
        !m && /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ n.jsx("noscript", { children: /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ n.jsx(ga, { ...a }) }) }),
          /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ n.jsx(ga, { ...a }) })
        ] }),
        r && /* @__PURE__ */ n.jsx("figcaption", { className: "fdp-chart__caption", children: r && /* @__PURE__ */ n.jsxs("small", { id: h, className: "fdp-chart__source", children: [
          "Source: ",
          r
        ] }) })
      ]
    }
  );
}, Bx = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: r = 0, children: a }) => {
  const o = O.useRef(null);
  return O.useEffect(() => {
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
    if (r > 0) {
      const l = window.setTimeout(i, r);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, r]), /* @__PURE__ */ n.jsx("div", { ref: o, children: a });
}, Ex = ({
  label: e,
  value: t,
  unit: r,
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
  id: b,
  announceDelta: D = !0
}) => {
  const g = O.useId(), u = b || g, R = `${u}-label`, L = `${u}-value`, I = `${u}-delta`, T = typeof t == "number" && !Number.isNaN(t), A = c ? "—" : f ? "" : T ? h ? h(t) : t.toLocaleString() : t;
  let j, M = "", x = "";
  if (a && !c && !f) {
    j = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const C = Math.abs(a.value), S = j === "up" ? `+${C}` : j === "down" ? `-${C}` : "0", p = a.isPercent ? "%" : "";
    if (M = `${S}${p}`, a.ariaLabel)
      x = a.ariaLabel;
    else {
      const w = a.invert ? j === "down" : j === "up";
      x = `${j === "neutral" ? "no change" : j === "up" ? "up" : "down"} ${C}${p}${j === "neutral" ? "" : w ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: er(
        "fdp-metric-card",
        s && `fdp-metric-card--${s}`,
        o && `fdp-metric-card--status-${o}`,
        c && "fdp-metric-card--loading",
        f && "fdp-metric-card--error",
        m
      ),
      role: "group",
      "aria-labelledby": R,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ n.jsx("h3", { id: R, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ n.jsx("div", { id: L, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : f ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: f }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__number", children: A }),
              r && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__unit", children: r })
            ] }) }),
            i && !c && !f && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !f && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ n.jsxs(
            "div",
            {
              id: I,
              "aria-label": x,
              className: er(
                "fdp-metric-card__delta",
                j && `fdp-metric-card__delta--${j}`
              ),
              children: [
                /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-value", children: M }),
                a.period && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          d && d.length > 0 && !c && !f && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        D && a && !a.ariaLabel && !c && !f && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: x })
      ] })
    }
  );
};
var cs = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(cs || {}), ft = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(ft || {}), Oe = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.None = "none", e))(Oe || {}), Et = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(Et || {}), Bt = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Bt || {}), Ni = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Ni || {}), Ti = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Ti || {}), $i = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))($i || {});
const he = (e) => typeof e == "number" && Number.isFinite(e), Hh = (e) => e.reduce((t, r) => t + r, 0), ht = (e) => e.length ? Hh(e) / e.length : NaN;
function zh(e) {
  const t = [];
  let r = [];
  for (const a of e)
    a.baseline && r.length && (t.push(r), r = []), r.push(a);
  return r.length && t.push(r), t;
}
function Wh(e, t, r) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const o = e.map((f, h) => ({ idx: h, value: f.value })).filter((f) => he(f.value));
  if (o.length < a * 2) return;
  const s = r === "Up" || r === "Neither", i = r === "Down";
  function l(f, h) {
    const m = o.slice(f, h).map((b) => b.value);
    return m.length ? ht(m) : NaN;
  }
  let d = null;
  if (o.length > 1) {
    const f = [];
    for (let m = 1; m < o.length; m++) f.push(Math.abs(o[m].value - o[m - 1].value));
    const h = ht(f);
    he(h) && h > 0 && (d = h * (2.66 / 3));
  }
  if (!d || d <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let f = a; f <= o.length - a; f++) {
    const h = f - a, m = l(h, f), b = l(f, f + a);
    if (!he(m) || !he(b)) continue;
    const g = (b - m) / d;
    if (!(s ? g >= c : i ? -g >= c : Math.abs(g) >= c)) continue;
    const R = o.slice(f, f + a).map((T) => T.value);
    if (!(s ? R.every((T) => T > m) : i ? R.every((T) => T < m) : R.every((T) => s ? T > m : T < m))) continue;
    const I = o[f].idx;
    e[I].baseline || (e[I].baseline = !0);
    return;
  }
}
function Di(e, t) {
  const r = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!t[o] && he(s)) {
      if (a !== null) {
        const i = e[a];
        r[o] = he(i) ? Math.abs(s - i) : null;
      }
      a = o;
    }
  }
  return r;
}
function Ii(e, t) {
  const r = e.filter((s) => he(s));
  if (!r.length) return { mrMean: NaN, mrUcl: NaN };
  let a = ht(r), o = 3.267 * a;
  if (t) {
    const s = r.filter((i) => i <= o);
    s.length && s.length !== r.length && (a = ht(s), o = 3.267 * a);
  }
  return { mrMean: a, mrUcl: o };
}
function Oh(e, t) {
  if (!he(e) || !he(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const r = 2.66, a = 2 / 3 * r, o = 1 / 3 * r;
  return {
    upperProcessLimit: e + r * t,
    lowerProcessLimit: e - r * t,
    upperTwoSigma: e + a * t,
    lowerTwoSigma: e - a * t,
    upperOneSigma: e + o * t,
    lowerOneSigma: e - o * t
  };
}
const Uh = 0.2777, Gh = 3.6, Yh = (e) => he(e) && e >= 0 ? Math.pow(e, Uh) : null, zt = (e) => he(e) && e >= 0 ? Math.pow(e, Gh) : null, tn = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function Vh(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
function qh(e) {
  if (!he(e) || e < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null
    };
  const t = 1 / (e + 1), r = (f) => Vh(f, t) - 1, a = r(0.5), o = Math.max(0, r(tn.three.low)), s = r(tn.three.high), i = Math.max(0, r(tn.one.low)), l = r(tn.one.high), d = Math.max(0, r(tn.two.low)), c = r(tn.two.high);
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
function Xh(e, t, r) {
  const a = e.map((x) => he(x) ? Yh(x) : null), o = Di(a, t), {
    mrMean: s
    /*, mrUcl: _mrUclY_raw*/
  } = Ii(o, !!r), i = a.filter((x, C) => !t[C] && he(x)), l = i.length ? ht(i) : NaN;
  if (!he(l) || !he(s))
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
  const d = 2.66, c = 2 / 3 * d, f = 1 / 3 * d, h = l + d * s, m = l - d * s, b = l + c * s, D = l - c * s, g = l + f * s, u = l - f * s, R = zt(l), L = zt(h), I = m <= 0 ? null : zt(m), T = zt(g), A = u <= 0 ? null : zt(u), j = zt(b), M = D <= 0 ? null : zt(D);
  return {
    center: R ?? null,
    upperProcessLimit: L ?? null,
    lowerProcessLimit: I ?? null,
    upperTwoSigma: j ?? null,
    lowerTwoSigma: M ?? null,
    upperOneSigma: T ?? null,
    lowerOneSigma: A ?? null,
    mr: o,
    mrMean: s,
    mrUcl: he(s) ? 3.267 * s : null
  };
}
function Mi(e) {
  const {
    chartType: t,
    metricImprovement: r,
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
    precedenceStrategy: "legacy",
    emergingDirectionGrace: !1,
    ...o
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const i = a.map((g, u) => ({
    rowId: u + 1,
    x: g.x,
    value: he(g.value) ? g.value : null,
    ghost: !!g.ghost,
    baseline: !!g.baseline,
    target: he(g.target) ? g.target : null
  }));
  if (o?.autoRecalculateAfterShift)
    try {
      Wh(i, o, r);
    } catch {
    }
  const l = zh(i), d = [], c = [], h = i.filter(
    (g) => !g.ghost && he(g.value)
  ).length >= (s.minimumPoints ?? 13);
  let m = 0;
  const b = {};
  for (const g of l) {
    m++;
    const u = g.map((p) => p.value), R = g.map((p) => p.ghost);
    let L = new Array(u.length).fill(null), I = NaN, T = NaN, A = NaN, j = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      L = Di(u, R);
      const p = u.filter(
        (F, N) => !R[N] && he(F)
      );
      I = p.length ? ht(p) : NaN;
      const w = Ii(
        L,
        !!s.excludeMovingRangeOutliers
      );
      T = w.mrMean, A = w.mrUcl, j = Oh(I, T);
    } else if (t === "T") {
      const p = Xh(
        u,
        R,
        !!s.excludeMovingRangeOutliers
      );
      L = p.mr, T = p.mrMean ?? NaN, A = p.mrUcl ?? NaN, I = p.center ?? NaN, j = {
        upperProcessLimit: p.upperProcessLimit,
        lowerProcessLimit: p.lowerProcessLimit,
        upperTwoSigma: p.upperTwoSigma,
        lowerTwoSigma: p.lowerTwoSigma,
        upperOneSigma: p.upperOneSigma,
        lowerOneSigma: p.lowerOneSigma
      };
    } else if (t === "G") {
      const p = u.filter(
        (N, k) => !R[k] && he(N)
      ), w = p.length ? ht(p) : NaN, F = qh(w);
      I = F.cl ?? NaN, j = {
        upperProcessLimit: F.ucl,
        lowerProcessLimit: F.lcl,
        upperTwoSigma: F.twoHigh,
        lowerTwoSigma: F.twoLow,
        upperOneSigma: F.oneHigh,
        lowerOneSigma: F.oneLow
      }, L = new Array(u.length).fill(null), T = NaN, A = NaN;
    } else
      c.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const M = g.map((p, w) => {
      const F = !p.ghost && he(p.value) ? u.slice(0, w + 1).filter((E, Q) => !R[Q] && he(E)).length : 0, N = h, k = N ? j : {
        upperProcessLimit: null,
        lowerProcessLimit: null,
        upperTwoSigma: null,
        lowerTwoSigma: null,
        upperOneSigma: null,
        lowerOneSigma: null
      };
      return {
        rowId: p.rowId,
        x: p.x,
        value: he(p.value) ? p.value : null,
        ghost: p.ghost,
        partitionId: m,
        pointRank: F,
        mean: N && he(I) ? I : null,
        mr: he(L[w]) ? L[w] : null,
        mrMean: N && he(T) ? T : null,
        mrUcl: N && he(A) ? A : null,
        upperProcessLimit: he(k.upperProcessLimit) ? k.upperProcessLimit : null,
        lowerProcessLimit: he(k.lowerProcessLimit) ? k.lowerProcessLimit : null,
        upperTwoSigma: he(k.upperTwoSigma) ? k.upperTwoSigma : null,
        lowerTwoSigma: he(k.lowerTwoSigma) ? k.lowerTwoSigma : null,
        upperOneSigma: he(k.upperOneSigma) ? k.upperOneSigma : null,
        lowerOneSigma: he(k.lowerOneSigma) ? k.lowerOneSigma : null,
        target: he(p.target) ? p.target : null,
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
        specialCauseFifteenInnerThird: !1,
        variationIcon: "none",
        assuranceIcon: "none",
        upperBaseline: N && he(I) ? I : null,
        lowerBaseline: N && he(I) ? I : null,
        movingRangeHighPointValue: N && he(A) ? A : null,
        ghostValue: p.ghost && he(p.value) ? p.value : null,
        ghostFlag: !!p.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    b[m] = M.filter(
      (p) => !p.ghost && he(p.value)
    ).length;
    const x = s.specialCauseShiftPoints ?? 6, C = s.specialCauseTrendPoints ?? 6, S = [];
    for (let p = 0; p < M.length; p++) {
      const w = M[p], F = w.value;
      if (!w.ghost && he(F) && S.push(p), !(he(w.mean) && he(w.upperProcessLimit) && he(w.lowerProcessLimit)) || w.ghost || !he(F)) {
        d.push(w);
        continue;
      }
      w.specialCauseSinglePointAbove = he(w.upperProcessLimit) ? F > w.upperProcessLimit : !1, w.specialCauseSinglePointBelow = he(w.lowerProcessLimit) ? F < w.lowerProcessLimit : !1, d.push(w);
    }
    if (S.length) {
      const p = (N) => M[N];
      let w = [], F = [];
      for (const N of S) {
        const k = p(N);
        if (!he(k.mean) || !he(k.value)) {
          w = [], F = [];
          continue;
        }
        if (k.value > k.mean ? (w.push(N), F = []) : k.value < k.mean ? (F.push(N), w = []) : (w = [], F = []), w.length >= x)
          for (const y of w) p(y).specialCauseShiftHigh = !0;
        if (F.length >= x)
          for (const y of F) p(y).specialCauseShiftLow = !0;
      }
      for (let N = 0; N <= S.length - 3; N++) {
        const y = S.slice(N, N + 3).map(p);
        if (!y.every((ee) => he(ee.mean) && he(ee.value))) continue;
        const E = y[0].mean, Q = y.every((ee) => ee.value > E), H = y.every((ee) => ee.value < E);
        if (!Q && !H) continue;
        const P = y[0].upperTwoSigma ?? 1 / 0, v = y[0].lowerTwoSigma ?? -1 / 0, _ = y[0].upperProcessLimit ?? 1 / 0, W = y[0].lowerProcessLimit ?? -1 / 0, B = y.filter((ee) => ee.value > P && ee.value <= _), q = y.filter((ee) => ee.value < v && ee.value >= W);
        if (Q && B.length >= 2)
          for (const ee of B) ee.specialCauseTwoOfThreeAbove = !0;
        if (H && q.length >= 2)
          for (const ee of q) ee.specialCauseTwoOfThreeBelow = !0;
      }
      if (s.enableFourOfFiveRule)
        for (let N = 0; N <= S.length - 5; N++) {
          const y = S.slice(N, N + 5).map(p);
          if (!y.every((_) => he(_.mean) && he(_.value))) continue;
          const E = y[0].mean;
          if (!y.every((_) => _.value > E) && !y.every((_) => _.value < E)) continue;
          const Q = y[0].upperOneSigma ?? 1 / 0, H = y[0].lowerOneSigma ?? -1 / 0, P = y.filter((_) => _.value > Q), v = y.filter((_) => _.value < H);
          if (y.every((_) => _.value > E) && P.length >= 4)
            for (const _ of P) _.specialCauseFourOfFiveAbove = !0;
          if (y.every((_) => _.value < E) && v.length >= 4)
            for (const _ of v) _.specialCauseFourOfFiveBelow = !0;
        }
      for (let N = 0; N <= S.length - C; N++) {
        const k = S.slice(N, N + C), y = k.map(p);
        if (!y.every((H) => he(H.value))) continue;
        let E = !0, Q = !0;
        for (let H = 1; H < y.length && (y[H].value > y[H - 1].value || (E = !1), y[H].value < y[H - 1].value || (Q = !1), !(!E && !Q)); H++)
          ;
        if (E) for (const H of k) p(H).specialCauseTrendIncreasing = !0;
        if (Q) for (const H of k) p(H).specialCauseTrendDecreasing = !0;
      }
      if (s.enableFifteenInInnerThirdRule) {
        let N = [];
        for (const k of S) {
          const y = p(k);
          if (!he(y.value) || !he(y.mean) || !he(y.upperOneSigma) || !he(y.lowerOneSigma)) {
            N = [];
            continue;
          }
          if (!(y.value < y.upperOneSigma && y.value > y.lowerOneSigma)) {
            N = [];
            continue;
          }
          if (N.push(k), N.length >= 15) {
            const Q = N.map(p), H = Q.some((v) => v.value > v.mean), P = Q.some((v) => v.value < v.mean);
            if (H && P)
              for (const v of N) p(v).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (s.maximumPointsPartition && Number.isFinite(s.maximumPointsPartition)) {
      const p = s.maximumPointsPartition;
      let w = 0;
      for (const F of d.filter((N) => N.partitionId === m))
        !F.ghost && he(F.value) && w++, w > p && (F.mean = F.upperProcessLimit = F.lowerProcessLimit = null, F.upperTwoSigma = F.lowerTwoSigma = F.upperOneSigma = F.lowerOneSigma = null);
    }
  }
  for (const g of d) {
    if (g.ruleTags && g.ruleTags.length) continue;
    const u = [];
    g.specialCauseShiftHigh && u.push("shift_high"), g.specialCauseShiftLow && u.push("shift_low"), g.specialCauseTrendIncreasing && u.push("trend_inc"), g.specialCauseTrendDecreasing && u.push("trend_dec"), g.specialCauseSinglePointAbove && u.push("single_above"), g.specialCauseSinglePointBelow && u.push("single_below"), g.specialCauseTwoOfThreeAbove && u.push("two_of_three_high"), g.specialCauseTwoOfThreeBelow && u.push("two_of_three_low"), g.specialCauseFourOfFiveAbove && u.push("four_of_five_high"), g.specialCauseFourOfFiveBelow && u.push("four_of_five_low"), g.specialCauseFifteenInnerThird && u.push("fifteen_inner_third"), u.length && (g.ruleTags = u);
  }
  for (let g = 0; g < d.length; g++) {
    const u = d[g];
    if (u.ghost || !he(u.value) || u.mean === null) {
      u.variationIcon = "none";
      continue;
    }
    const R = he(u.value) && he(u.mean) && u.value > u.mean, L = he(u.value) && he(u.mean) && u.value < u.mean;
    s.collapseClusterRules && (u.specialCauseTwoOfThreeAbove && u.specialCauseFourOfFiveAbove && (u.specialCauseTwoOfThreeAbove = !1), u.specialCauseTwoOfThreeBelow && u.specialCauseFourOfFiveBelow && (u.specialCauseTwoOfThreeBelow = !1));
    const I = u.specialCauseSinglePointAbove || u.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && u.specialCauseFourOfFiveAbove || u.specialCauseShiftHigh || u.specialCauseTrendIncreasing && R, T = u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && u.specialCauseFourOfFiveBelow || u.specialCauseShiftLow || u.specialCauseTrendDecreasing && L;
    let A = !1;
    if (s.precedenceStrategy === "directional_first" && s.emergingDirectionGrace) {
      const M = s.specialCauseTrendPoints || 6;
      if (M > 1 && !(u.specialCauseTrendIncreasing || u.specialCauseTrendDecreasing)) {
        const x = M - 1, C = [];
        for (let S = g; S >= 0 && C.length < x; S--) {
          const p = d[S];
          !p.ghost && he(p.value) && p.mean !== null && C.unshift(p);
        }
        if (C.length === x) {
          let S = !0;
          for (let p = 1; p < C.length && S; p++)
            r === "Up" ? C[p].value > C[p - 1].value || (S = !1) : r === "Down" && C[p].value < C[p - 1].value || (S = !1);
          A = S;
        }
      }
    }
    if (s.precedenceStrategy === "directional_first") {
      const M = r === "Up" ? I : r === "Down" ? T : !1, x = r === "Up" ? T : r === "Down" ? I : !1;
      M && !x ? u.variationIcon = "improvement" : x && !M ? u.variationIcon = A ? "neither" : "concern" : M && x ? u.variationIcon = A || u.specialCauseTrendIncreasing || u.specialCauseTrendDecreasing ? "improvement" : "neither" : u.variationIcon = "neither";
    } else
      r === "Up" ? u.variationIcon = I ? "improvement" : T ? "concern" : "neither" : r === "Down" ? u.variationIcon = T ? "improvement" : I ? "concern" : "neither" : u.variationIcon = "neither";
    const j = I || T;
    if (u.specialCauseImprovementValue = j && u.variationIcon === "improvement" ? u.value : null, u.specialCauseConcernValue = j && u.variationIcon === "concern" ? u.value : null, u.specialCauseNeitherValue = j && u.variationIcon === "neither" ? u.value : null, he(u.value) && u.mean !== null) {
      u.assuranceIcon = "none";
      const M = i[u.rowId - 1];
      if (he(M.target)) {
        const x = M.target;
        s.assuranceCapabilityMode && he(u.upperProcessLimit) && he(u.lowerProcessLimit) ? r === "Up" ? u.lowerProcessLimit !== null && u.lowerProcessLimit > x ? u.assuranceIcon = "pass" : u.upperProcessLimit !== null && u.upperProcessLimit < x ? u.assuranceIcon = "fail" : u.assuranceIcon = "none" : r === "Down" ? u.upperProcessLimit !== null && u.upperProcessLimit < x ? u.assuranceIcon = "pass" : u.lowerProcessLimit !== null && u.lowerProcessLimit > x ? u.assuranceIcon = "fail" : u.assuranceIcon = "none" : u.assuranceIcon = "none" : r === "Down" ? u.assuranceIcon = u.value <= x ? "pass" : "fail" : r === "Up" ? u.assuranceIcon = u.value >= x ? "pass" : "fail" : u.assuranceIcon = "none";
      }
    }
  }
  if ((s.minimumPointsWarning ?? !1) && !h) {
    const g = i.filter(
      (u) => !u.ghost && he(u.value)
    ).length;
    c.push({
      code: "insufficient_points_global",
      category: "data",
      severity: "warning",
      message: `Only ${g} non-ghost points available; minimum required is ${s.minimumPoints}. Limits and icons suppressed.`,
      context: { available: g, minimumRequired: s.minimumPoints }
    });
  }
  if (s.variationIconConflictWarning)
    for (const g of d)
      g.variationIcon === "improvement" && (g.specialCauseSinglePointAbove || g.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && g.specialCauseFourOfFiveAbove || g.specialCauseShiftHigh || g.specialCauseTrendIncreasing) && (g.specialCauseSinglePointBelow || g.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && g.specialCauseFourOfFiveBelow || g.specialCauseShiftLow || g.specialCauseTrendDecreasing) && c.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${g.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: g.rowId }
      });
  if (s.maximumPoints && Number.isFinite(s.maximumPoints)) {
    const g = s.maximumPoints;
    let u = 0;
    for (const R of d)
      !R.ghost && he(R.value) && u++, u > g && (R.mean = R.upperProcessLimit = R.lowerProcessLimit = null, R.upperTwoSigma = R.lowerTwoSigma = R.upperOneSigma = R.lowerOneSigma = null);
  }
  if (s.nullValueWarning && (t === "XmR" || t === "G")) {
    const g = i.filter(
      (u) => !u.ghost && (u.value === null || u.value === void 0 || !he(u.value))
    ).length;
    g && c.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${g} null/missing value(s) excluded from calculations.`,
      context: { nullCount: g }
    });
  }
  if (s.targetSuppressedWarning && (t === "T" || t === "G") && i.some((u) => he(u.target)) && c.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), s.ghostOnRareEventWarning && (t === "T" || t === "G")) {
    const g = i.filter((u) => u.ghost).length;
    g && c.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${g} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: g }
    });
  }
  if (s.partitionSizeWarnings && Object.entries(b).forEach(([g, u]) => {
    u < s.minimumPointsPartition && c.push({
      code: "insufficient_points_partition",
      category: "partition",
      severity: "warning",
      message: `Partition ${g} has only ${u} non-ghost point(s); below recommended ${s.minimumPointsPartition}.`,
      context: {
        partitionId: Number(g),
        count: u,
        minimum: s.minimumPointsPartition
      }
    });
  }), s.baselineSpecialCauseWarning) {
    const g = [];
    d.forEach((u) => {
      i[u.rowId - 1].baseline && (u.specialCauseSinglePointAbove || u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeAbove || u.specialCauseTwoOfThreeBelow || u.specialCauseFourOfFiveAbove || u.specialCauseFourOfFiveBelow || u.specialCauseShiftHigh || u.specialCauseShiftLow || u.specialCauseTrendIncreasing || u.specialCauseTrendDecreasing) && g.push(u.rowId);
    }), g.length && c.push({
      code: "baseline_with_special_cause",
      category: "baseline",
      severity: "warning",
      message: `Baseline set with special-cause present at row(s): ${g.join(", ")}.`,
      context: { rows: g }
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
  let D;
  if (s.baselineSuggest) {
    const g = d, u = s.baselineSuggestStabilityPoints, R = s.baselineSuggestMinGap, L = s.baselineSuggestMinDeltaSigma, I = s.baselineSuggestScoreThreshold, T = [];
    let A = 0;
    for (let j = 0; j < g.length; j++) {
      let M = function(p) {
        return !!x[p] && !C?.[p];
      };
      const x = g[j];
      j > 0 && g[j - 1].partitionId !== x.partitionId && (A = j);
      const C = g[j - 1], S = [];
      (M("specialCauseShiftHigh") || M("specialCauseShiftLow")) && S.push({ reason: "shift", index: j }), (M("specialCauseTrendIncreasing") || M("specialCauseTrendDecreasing")) && S.push({ reason: "trend", index: j }), (M("specialCauseSinglePointAbove") || M("specialCauseSinglePointBelow")) && S.push({ reason: "point", index: j });
      for (const p of S) {
        if (p.index - A < R) continue;
        const w = Math.max(0, p.index - u), F = p.index - 1;
        if (F - w + 1 < u) continue;
        const N = p.index, k = p.index + u - 1;
        if (k >= g.length) continue;
        const y = g.slice(w, F + 1).map((Y) => Y.value).filter(he), E = g.slice(N, k + 1).map((Y) => Y.value).filter(he);
        if (y.length < u || E.length < u) continue;
        const Q = g[p.index];
        let H = null;
        if (he(Q.upperProcessLimit) && he(Q.mean)) {
          const Y = Q.upperProcessLimit - Q.mean;
          Y > 0 && (H = Y / 3);
        }
        if (!H || H <= 0) continue;
        const P = ht(y), v = ht(E), _ = v - P;
        if (Math.abs(_) < L * H) continue;
        const B = g.slice(N, k + 1).filter(
          (Y) => Y.variationIcon === "concern"
          /* Concern */
        ).length;
        if (B > 1) continue;
        const q = (Y) => {
          const se = ht(Y);
          return Y.length ? Y.reduce((z, X) => z + (X - se) * (X - se), 0) / Y.length : 0;
        }, ee = q(y), ie = q(E);
        let te = p.reason === "shift" ? 90 : p.reason === "trend" ? 70 : 60;
        if (ie < ee && (te += 10), te -= B * 15, te < I) continue;
        const U = T.find((Y) => Y.index === p.index);
        if (U) {
          const Y = (se) => se === "shift" ? 3 : se === "trend" ? 2 : 1;
          (Y(p.reason) > Y(U.reason) || te > U.score) && (U.reason = p.reason, U.score = te, U.deltaMean = _, U.oldMean = P, U.newMean = v, U.window = [N, k]);
        } else
          T.push({
            index: p.index,
            reason: p.reason,
            score: te,
            deltaMean: _,
            oldMean: P,
            newMean: v,
            window: [N, k]
          });
      }
      j > 0 && g[j - 1].partitionId !== g[j].partitionId && (A = j);
    }
    T.sort((j, M) => j.index - M.index), D = T;
  }
  return { rows: d, warnings: c, ...D ? { suggestedBaselines: D } : {} };
}
const ds = {
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
function us(e) {
  if (!e) return [];
  const t = [];
  return e.specialCauseSinglePointAbove && t.push("singlePointAbove"), e.specialCauseSinglePointBelow && t.push("singlePointBelow"), e.specialCauseTwoOfThreeAbove && t.push("twoOfThreeAbove"), e.specialCauseTwoOfThreeBelow && t.push("twoOfThreeBelow"), e.specialCauseFourOfFiveAbove && t.push("fourOfFiveAbove"), e.specialCauseFourOfFiveBelow && t.push("fourOfFiveBelow"), e.specialCauseShiftHigh && t.push("shiftHigh"), e.specialCauseShiftLow && t.push("shiftLow"), e.specialCauseTrendIncreasing && t.push("trendIncreasing"), e.specialCauseTrendDecreasing && t.push("trendDecreasing"), t;
}
function fs(e) {
  switch (e) {
    case Oe.Improvement:
      return "Improvement signal";
    case Oe.Concern:
      return "Concern signal";
    case Oe.Neither:
      return "Common cause variation";
    case Oe.None:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function Kh(e) {
  switch (e) {
    case Et.Pass:
      return "Target met";
    case Et.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Zh(e, t, r) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((r - e) / t);
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
function Li(e) {
  return e ? lt[e]?.token ?? lt.neither.token : lt.neither.token;
}
function Jh(e) {
  return e ? lt[e]?.hex ?? lt.neither.hex : lt.neither.hex;
}
const Fi = ({
  engineRows: e,
  limits: t,
  pointDescriber: r,
  measureName: a,
  measureUnit: o,
  dateFormatter: s
}) => {
  const i = Pt(), l = Rt(), [d, c] = O.useState(null), [f, h] = O.useState(!1), m = O.useRef(null);
  O.useEffect(() => {
    if (i) {
      if (i.focused && (c(i.focused), m.current && (cancelAnimationFrame(m.current), m.current = null)), !i.focused && !f) {
        const re = requestAnimationFrame(() => {
          c(null), m.current = null;
        });
        m.current = re;
      }
      return () => {
        m.current && (cancelAnimationFrame(m.current), m.current = null);
      };
    }
  }, [i, i?.focused, f]);
  const b = i && (i.focused || (f ? d : null) || d), [D, g] = O.useState(!1);
  O.useEffect(() => {
    const re = requestAnimationFrame(() => g(!0));
    return () => cancelAnimationFrame(re);
  }, [b?.index]);
  const u = l?.innerWidth ?? 0, R = l?.innerHeight ?? 0, L = b ? Math.min(Math.max(b.clientX, 0), u) : 0, I = b ? Math.min(Math.max(b.clientY, 0), R) : 0, A = l.ref?.current;
  if (!b)
    return null;
  const j = e?.[b.index], x = us(j).map((re) => ({ id: re, label: ds[re].tooltip })), C = b.x instanceof Date ? b.x : new Date(b.x), S = s ? s(C) : C.toDateString(), p = o ? `${o}` : "", w = a || p ? `${b.y}${p ? "" + p : " "}${a ? " " + a : ""}` : `${b.y}`, F = fs(j?.variationIcon), N = Kh(j?.assuranceIcon), k = Zh(
    t.mean ?? null,
    t.sigma,
    b.y
  ), y = r ? r(b.index, { x: b.x, y: b.y }) : void 0, E = F || N || k, Q = j?.specialCauseTrendIncreasing || j?.specialCauseTrendDecreasing, P = j?.variationIcon === Oe.Neither && Q ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, v = x.length > 0, _ = j?.variationIcon === Oe.Neither && v, W = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", B = Li(j?.variationIcon), q = 6.2, ie = [
    y || "",
    `${S} • ${w}`
  ].filter(Boolean).reduce(
    (re, ue) => Math.max(re, ue.length * q + 32),
    0
  ), te = 200, U = 440, Y = Math.min(U, Math.max(te, ie));
  let se = L + 12, X = (l.margin?.top ?? 0) + I + 16;
  se + Y > u && (se = L - -60 - Y), se < 0 && (se = Math.max(0, u - Y));
  const K = b ? `spc-tooltip-${b.index}` : "spc-tooltip", oe = A ? Ol(
    /* @__PURE__ */ n.jsx(
      "div",
      {
        id: K,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (D ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: se,
          top: X,
          width: Y,
          maxWidth: U,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": D ? "false" : "true",
        "data-floating": !0,
        "data-placement": se + Y + 12 > u ? "left" : "right",
        onPointerEnter: () => {
          h(!0), m.current && (cancelAnimationFrame(m.current), m.current = null);
        },
        onPointerLeave: () => {
          if (h(!1), !i?.focused) {
            const re = requestAnimationFrame(() => {
              c(null), m.current = null;
            });
            m.current = re;
          }
        },
        children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: S })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: w })
          ] }),
          E && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: F?.toLowerCase().includes("concern") ? /* @__PURE__ */ n.jsx(
              Ye,
              {
                text: F,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : F?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
              Ye,
              {
                text: F,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : _ ? /* @__PURE__ */ n.jsx(
              Ye,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : F ? /* @__PURE__ */ n.jsx(
              Ye,
              {
                text: F,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          N && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const re = N.toLowerCase(), be = !(re.includes("not met") || re.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(re);
              return /* @__PURE__ */ n.jsx(
                Ye,
                {
                  text: N,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${be ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${N}`
                }
              );
            })() })
          ] }),
          k && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ n.jsx(
              Ye,
              {
                text: (() => {
                  const re = k.toLowerCase();
                  return re.startsWith("within 1") ? "≤1σ" : re.startsWith("1–2") ? "1–2σ" : re.startsWith("2–3") ? "2–3σ" : re.startsWith(">3") ? ">3σ" : k;
                })(),
                color: k.includes(">3") ? "orange" : k.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${k}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          P && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: P })
          ] }),
          v && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: x.map(({ id: re, label: ue }) => {
                  const be = String(re), Ce = be === "trend_inc" || be === "trend_dec" ? "fdp-spc-tag--trend" : _ ? "fdp-spc-tag--no-judgement" : F ? F.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : F.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ n.jsx(
                    Ye,
                    {
                      text: ue,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${Ce}`,
                      "data-rule-id": be
                    },
                    be
                  );
                })
              }
            )
          ] })
        ] })
      }
    ),
    A
  ) : null;
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-tooltip-layer fdp-spc-tooltip",
      pointerEvents: "none",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: L,
            cy: I,
            r: 7,
            fill: "none",
            stroke: W,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: L,
            cy: I,
            r: 5,
            fill: "#000",
            stroke: W,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: L,
            cy: I,
            r: 2.5,
            fill: B,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        oe
      ]
    }
  );
};
let Ca = null;
try {
  Ca = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const st = (e, t) => {
  if (!Ca) return t;
  const r = e.split(".");
  let a = Ca;
  for (const s of r) {
    if (a == null) break;
    a = a[s];
  }
  const o = a;
  return o == null ? t : typeof o == "string" || typeof o == "number" ? String(o) : o.$value != null ? String(o.$value) : o.value != null ? String(o.value) : t;
}, Ai = () => ({
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
var Gt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(Gt || {});
const Qh = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, ep = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Ge = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Ge || {}), we = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(we || {}), nt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(nt || {}), Me = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Me || {});
const tp = (e) => {
  const t = e.replace("#", ""), r = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [r, a, o].map((l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4));
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
  e.text || (e.text = tp(e.hex));
});
const Bi = (e) => hs[e], ps = (e) => hs[e].judgement || "none", yo = {
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
function np(e, t) {
  let r;
  return e === "common_cause" ? r = yo.common : r = yo.special[t === "lower" ? "lower" : "higher"], r.map((a) => ({ ...a }));
}
const Ei = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === ft.Up ? Ge.HigherIsBetter : i.improvementDirection === ft.Down ? Ge.LowerIsBetter : Ge.ContextDependent : i.polarity && (l = i.polarity);
    let d;
    switch (i.variationIcon) {
      case Oe.Improvement:
        d = Me.SpecialCauseImproving;
        break;
      case Oe.Concern:
        d = Me.SpecialCauseDeteriorating;
        break;
      case Oe.Neither:
        d = i.specialCauseNeutral ? Me.SpecialCauseNoJudgement : Me.CommonCause;
        break;
      case Oe.None:
      default:
        d = Me.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (d === Me.SpecialCauseImproving ? c = l === Ge.LowerIsBetter ? we.Lower : we.Higher : d === Me.SpecialCauseDeteriorating ? c = l === Ge.LowerIsBetter ? we.Higher : we.Lower : d === Me.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = we.Higher : i.lowSideSignal && !i.highSideSignal ? c = we.Lower : c = we.Higher : c = we.Higher), { state: d, direction: c, polarity: l ?? Ge.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Me.SpecialCauseImproving || i.state === Me.SpecialCauseDeteriorating) && i.polarity && (i.state === Me.SpecialCauseImproving ? l = i.polarity === Ge.LowerIsBetter ? we.Lower : we.Higher : l = i.polarity === Ge.LowerIsBetter ? we.Higher : we.Lower), l || (i.state === Me.SpecialCauseImproving ? l = we.Higher : i.state === Me.SpecialCauseDeteriorating ? l = we.Lower : l = we.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? Ge.ContextDependent
    };
  }
  const r = e;
  t();
  const o = {
    [nt.Improving]: Me.SpecialCauseImproving,
    [nt.Deteriorating]: Me.SpecialCauseDeteriorating,
    [nt.No_Judgement]: Me.SpecialCauseNoJudgement,
    [nt.None]: Me.CommonCause
  }[r.judgement];
  let s;
  return r.judgement === nt.Improving ? s = r.polarity === Ge.LowerIsBetter ? we.Lower : we.Higher : r.judgement === nt.Deteriorating ? s = r.polarity === Ge.LowerIsBetter ? we.Higher : we.Lower : s = r.trend ?? we.Higher, { state: o, direction: s, polarity: r.polarity };
};
function rp(e, t) {
  const { state: r, direction: a, polarity: o } = Ei(e), s = ps(r), i = a === we.Higher ? "above" : "below", l = a === we.Higher ? "upwards" : "downwards", d = (() => {
    switch (o) {
      case Ge.HigherIsBetter:
        return "For this measure, higher values are better.";
      case Ge.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (s) {
        case nt.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case nt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case nt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case nt.None:
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
const la = (e, t, r, a, o, s) => /* @__PURE__ */ n.jsxs("defs", { children: [
  a && /* @__PURE__ */ n.jsxs("filter", { id: t, filterUnits: "objectBoundingBox", children: [
    /* @__PURE__ */ n.jsx("feGaussianBlur", { stdDeviation: "3" }),
    /* @__PURE__ */ n.jsx("feOffset", { dx: "0", dy: "15", result: "blur" }),
    /* @__PURE__ */ n.jsx("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
    /* @__PURE__ */ n.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
    /* @__PURE__ */ n.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
  ] }),
  o && /* @__PURE__ */ n.jsx("linearGradient", { id: r, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: s.map((i) => /* @__PURE__ */ n.jsx(
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
  ariaLabel: r,
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
  const h = zn(), m = zn(), {
    start: b,
    mid: D,
    end: g,
    triStart: u,
    triMid: R,
    triEnd: L
  } = Ai(), { state: I, direction: T, polarity: A } = De(
    () => Ei(e),
    [e]
  ), j = De(() => Bi(I), [I]), M = De(() => ps(I), [I]), x = M === nt.Improving || M === nt.Deteriorating;
  let C = "";
  a && x && (d === "polarity" ? A === Ge.HigherIsBetter ? C = "H" : A === Ge.LowerIsBetter ? C = "L" : C = "" : C = T === we.Higher ? "H" : "L"), c !== void 0 && (C = c);
  const S = I !== Me.CommonCause, p = I === Me.SpecialCauseNoJudgement, w = st("common-cause", "#A6A6A6"), F = S ? j.hex : w, N = De(
    () => np(I, T),
    [I, T]
  ), k = r || `${j.label}${C ? T === we.Higher ? " – Higher" : " – Lower" : ""}`, y = rp(
    e
  );
  if (i === "triangleWithRun") {
    const v = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], _ = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let W = null;
    I === Me.SpecialCauseImproving || I === Me.SpecialCauseDeteriorating ? W = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (T === we.Higher ? v : _).map((X) => X.join(",")).join(" "),
        fill: j.hex,
        stroke: j.hex,
        strokeWidth: 6,
        transform: T === we.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : I === Me.SpecialCauseNoJudgement && (W = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: T === we.Higher ? v.map((X) => X.join(",")).join(" ") : _.map((X) => X.join(",")).join(" "),
        fill: j.hex,
        stroke: j.hex,
        strokeWidth: 6,
        transform: T === we.Higher ? "translate(0,-6)" : "translate(0,6)"
      }
    ));
    const B = Math.max(0, Math.min(5, Math.floor(l || 0))), q = I === Me.CommonCause ? 160 : T === we.Higher ? 210 : 70, ee = 10, ie = 26, te = 150 - 2 * ie, U = I === Me.SpecialCauseImproving ? st("improvement", "#00B0F0") : I === Me.SpecialCauseDeteriorating ? st("concern", "#E46C0A") : w, Y = Array.from({ length: 5 }).map((X, K) => {
      const re = (I === Me.SpecialCauseImproving || I === Me.SpecialCauseDeteriorating) && K >= 5 - B ? U : w;
      return /* @__PURE__ */ n.jsx(
        "circle",
        {
          cx: te + K * ie,
          cy: q,
          r: ee,
          fill: re,
          stroke: re,
          strokeWidth: 1
        },
        K
      );
    }), se = la(
      j.hex,
      h,
      m,
      o,
      s,
      [
        { offset: "0%", opacity: u },
        { offset: "75%", opacity: R },
        { offset: "100%", opacity: L }
      ]
    ), z = I === Me.CommonCause || T === we.Higher ? "translate(0,-10)" : "translate(0,20)";
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": k,
        "aria-description": y,
        ...f,
        children: [
          se,
          /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: j.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsxs("g", { transform: z, children: [
            W,
            C && /* @__PURE__ */ n.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: T === we.Higher ? 150 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: C
              }
            ),
            Y
          ] })
        ]
      }
    );
  }
  if (i === "triangle") {
    const v = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], _ = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], W = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let B = null;
    I === Me.SpecialCauseImproving || I === Me.SpecialCauseDeteriorating ? B = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (T === we.Higher ? v : _).map((ee) => ee.join(",")).join(" "),
        fill: j.hex,
        stroke: j.hex,
        strokeWidth: 8,
        transform: T === we.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : I === Me.SpecialCauseNoJudgement ? B = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: T === we.Higher ? v.map((ee) => ee.join(",")).join(" ") : _.map((ee) => ee.join(",")).join(" "),
        fill: j.hex,
        stroke: j.hex,
        strokeWidth: 8,
        transform: T === we.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : I === Me.CommonCause && (B = /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: W[0][0],
        y1: W[0][1],
        x2: W[1][0],
        y2: W[1][1],
        stroke: j.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const q = la(
      j.hex,
      h,
      m,
      o,
      s,
      [
        { offset: "0%", opacity: u },
        { offset: "65%", opacity: R },
        { offset: "100%", opacity: L }
      ]
    );
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": k,
        "aria-description": y,
        ...f,
        children: [
          q,
          /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: j.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          B,
          C && (I === Me.SpecialCauseImproving || I === Me.SpecialCauseDeteriorating) && /* @__PURE__ */ n.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: T === we.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: C
            }
          )
        ]
      }
    );
  }
  const E = la(
    j.hex,
    h,
    m,
    o,
    s,
    [
      { offset: "0%", opacity: b },
      { offset: "65%", opacity: D },
      { offset: "100%", opacity: g }
    ]
  );
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": k,
      "aria-description": y,
      ...f,
      children: [
        E,
        /* @__PURE__ */ n.jsx(
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
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: j.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        C && /* @__PURE__ */ n.jsx(
          "text",
          {
            fill: j.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ n.jsx("tspan", { x: "120", y: T === we.Lower ? "340" : "155", children: C })
          }
        ),
        p ? /* @__PURE__ */ n.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: j.hex,
            ...T === we.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          N.length === 5 && /* @__PURE__ */ n.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: w,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${N.map((Q) => `${Q.cx} ${Q.cy}`).join(" L ")}`
            }
          ),
          N.map((Q, H) => {
            const v = H >= N.length - 2 && S ? F : w, _ = v;
            return /* @__PURE__ */ n.jsx(
              "circle",
              {
                stroke: _,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: v,
                cx: Q.cx,
                cy: Q.cy,
                r: 16
              },
              H
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
  ariaLabel: r,
  dropShadow: a = !0,
  colourOverride: o,
  gradientWash: s = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...d
}) => {
  const c = zn(), f = zn(), { start: h, mid: m, end: b } = Ai(), D = o || Qh[e], g = (i || ep[e]).slice(0, 2), u = r || `Assurance ${e}`;
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": u,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("defs", { children: [
          a && /* @__PURE__ */ n.jsxs("filter", { id: c, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ n.jsx("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ n.jsx("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ n.jsx("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ n.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ n.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          s && /* @__PURE__ */ n.jsxs("linearGradient", { id: f, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: D, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "65%", stopColor: D, stopOpacity: parseFloat(m) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(b) })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(
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
        /* @__PURE__ */ n.jsx(
          "text",
          {
            fill: D,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            x: 0,
            y: 0,
            transform: "translate(121.01, 32) scale(0.5, 0.5)",
            textAnchor: "middle",
            children: /* @__PURE__ */ n.jsx("tspan", { x: 60, y: 184, children: g })
          }
        ),
        l && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          e === Gt.Fail ? /* @__PURE__ */ n.jsx(
            "path",
            {
              id: "fail-line",
              stroke: D,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : e === Gt.Uncertain ? /* @__PURE__ */ n.jsx(
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
          ) : /* @__PURE__ */ n.jsx(
            "path",
            {
              id: "pass-line",
              stroke: D,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 48,204 L 254,204"
            }
          ),
          /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: D,
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
let ap = 0;
const sp = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: r = 260,
  showZones: a = !0,
  showPoints: o = !0,
  announceFocus: s = !1,
  className: i,
  unit: l,
  highlightOutOfControl: d = !0,
  chartType: c = cs.XmR,
  metricImprovement: f = ft.Neither,
  enableRules: h = !0,
  showIcons: m = !1,
  showEmbeddedIcon: b = !0,
  embeddedIconVariant: D = "classic",
  embeddedIconRunLength: g,
  targets: u,
  baselines: R,
  ghosts: L,
  settings: I,
  narrationContext: T,
  gradientSequences: A = !1,
  processLineWidth: j = 2,
  showWarningsPanel: M = !1,
  warningsFilter: x
}) => {
  const C = O.useCallback((X) => String(X).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((oe) => oe.length ? oe[0].toUpperCase() + oe.slice(1) : oe).join(" "), []), S = O.useCallback((X) => String(X).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((K) => K.length ? K[0].toUpperCase() + K.slice(1) : K).join(" "), []), p = O.useMemo(() => {
    const X = e.map((K, oe) => ({
      x: K.x,
      value: K.y,
      target: u?.[oe] ?? void 0,
      baseline: R?.[oe] ?? void 0,
      ghost: L?.[oe] ?? void 0
    }));
    try {
      return Mi({
        chartType: c,
        metricImprovement: f,
        data: X,
        settings: I
      });
    } catch {
      return null;
    }
  }, [
    e,
    u,
    R,
    L,
    c,
    f,
    I
  ]), w = p?.rows.slice().reverse().find((X) => X.mean != null), F = w?.mean ?? null, N = p?.warnings || [], k = O.useMemo(() => N.length ? x ? N.filter((X) => !(x.severities && X.severity && !x.severities.includes(X.severity) || x.categories && X.category && !x.categories.includes(X.category) || x.codes && !x.codes.includes(X.code))) : N : [], [N, x]), [y, E] = O.useState(""), Q = O.useRef("");
  O.useEffect(() => {
    if (!M) {
      Q.current !== "" && (Q.current = "", E(""));
      return;
    }
    const X = k.length;
    if (!X) {
      const ue = "Diagnostics: no warnings.";
      ue !== Q.current && (Q.current = ue, E(ue));
      return;
    }
    const K = {
      error: k.filter((ue) => ue.severity === Bt.Error).length,
      warning: k.filter((ue) => ue.severity === Bt.Warning).length,
      info: k.filter((ue) => ue.severity === Bt.Info).length
    }, oe = [];
    K.error && oe.push(`${K.error} error${K.error === 1 ? "" : "s"}`), K.warning && oe.push(`${K.warning} warning${K.warning === 1 ? "" : "s"}`), K.info && oe.push(`${K.info} info`);
    const re = `Diagnostics updated: ${X} warning${X === 1 ? "" : "s"} (${oe.join(", ")}).`;
    re !== Q.current && (Q.current = re, E(re));
  }, [M, k]);
  const H = w?.upperProcessLimit ?? null, P = w?.lowerProcessLimit ?? null, v = w?.upperOneSigma ?? null, _ = w?.lowerOneSigma ?? null, W = w?.upperTwoSigma ?? null, B = w?.lowerTwoSigma ?? null, q = F != null && v != null ? Math.abs(v - F) : 0, ee = O.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), ie = O.useMemo(() => {
    const K = [...e.map((oe) => oe.y)];
    if ([F, H, P, v, _, W, B].forEach((oe) => {
      oe != null && K.push(oe);
    }), u && u.forEach((oe) => {
      typeof oe == "number" && !isNaN(oe) && K.push(oe);
    }), !!K.length)
      return [Math.min(...K), Math.max(...K)];
  }, [e, F, H, P, v, _, W, B, u]), te = O.useMemo(() => {
    if (!(l || T?.measureUnit) && e.length)
      return e.every((X) => X.y >= 0 && X.y <= 1) ? "%" : void 0;
  }, [l, T?.measureUnit, e]), U = l ?? T?.measureUnit ?? te, Y = O.useMemo(() => U ? { ...T || {}, measureUnit: U } : T, [T, U]), se = O.useMemo(() => {
    if (!p?.rows) return [];
    const X = [];
    for (let K = 1; K < p.rows.length; K++)
      p.rows[K].partitionId !== p.rows[K - 1].partitionId && X.push(K);
    return X;
  }, [p?.rows]), z = O.useMemo(() => {
    if (!b || !p?.rows?.length) return null;
    const X = p.rows, K = I?.minimumPoints ?? 13;
    if (X.filter(($) => !$.ghost && $.value != null).length < K) return null;
    let re = -1;
    for (let $ = X.length - 1; $ >= 0; $--) {
      const V = X[$];
      if (V && V.value != null && !V.ghost) {
        re = $;
        break;
      }
    }
    if (re === -1) return null;
    const ue = X[re], be = ue.variationIcon, Se = ue.assuranceIcon, Ce = be === Oe.Neither && !!ue.specialCauseNeitherValue, J = Se === Et.Pass ? Gt.Pass : Se === Et.Fail ? Gt.Fail : Gt.Uncertain;
    let G;
    if (be === Oe.None) {
      const $ = ue.specialCauseSinglePointAbove, V = ue.specialCauseSinglePointBelow;
      f === ft.Up ? $ ? G = we.Higher : V && (G = we.Lower) : f === ft.Down ? V ? G = we.Lower : $ && (G = we.Higher) : G = we.Higher;
    } else if (be === Oe.Neither && Ce) {
      const $ = ue.specialCauseSinglePointAbove || ue.specialCauseTwoOfThreeAbove || ue.specialCauseFourOfFiveAbove || ue.specialCauseShiftHigh || ue.specialCauseTrendIncreasing, V = ue.specialCauseSinglePointBelow || ue.specialCauseTwoOfThreeBelow || ue.specialCauseFourOfFiveBelow || ue.specialCauseShiftLow || ue.specialCauseTrendDecreasing;
      $ && !V ? G = we.Higher : V && !$ ? G = we.Lower : G = we.Higher;
    }
    let ae;
    f === ft.Up ? ae = Ge.HigherIsBetter : f === ft.Down ? ae = Ge.LowerIsBetter : ae = Ge.ContextDependent;
    const ne = 80;
    return /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", gap: 12, marginRight: 16 }, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          className: "fdp-spc-chart__embedded-icon",
          "data-variation": String(be),
          "data-trend-raw": G ? String(G) : "none",
          "data-trend": G ? String(G) : "none",
          "data-polarity": String(ae ?? "unknown"),
          style: { width: ne, height: ne },
          children: /* @__PURE__ */ n.jsx(
            ms,
            {
              dropShadow: !1,
              data: { variationIcon: be, improvementDirection: f, polarity: ae, specialCauseNeutral: Ce, highSideSignal: ue.specialCauseSinglePointAbove || ue.specialCauseTwoOfThreeAbove || ue.specialCauseFourOfFiveAbove || ue.specialCauseShiftHigh || ue.specialCauseTrendIncreasing, lowSideSignal: ue.specialCauseSinglePointBelow || ue.specialCauseTwoOfThreeBelow || ue.specialCauseFourOfFiveBelow || ue.specialCauseShiftLow || ue.specialCauseTrendDecreasing, ...G ? { trend: G } : {} },
              letterMode: f === ft.Neither ? "direction" : "polarity",
              size: ne,
              variant: D,
              runLength: D === "triangleWithRun" ? g : void 0
            }
          )
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          className: "fdp-spc-chart__embedded-assurance-icon",
          "data-assurance": String(Se),
          style: { width: ne, height: ne },
          children: /* @__PURE__ */ n.jsx(gs, { status: J, size: ne, dropShadow: !1 })
        }
      )
    ] }, `embedded-icon-${re}`);
  }, [b, p?.rows, f, I?.minimumPoints, u, D, g]);
  return /* @__PURE__ */ n.jsxs("div", { className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper", children: [
    b && /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: z }),
    /* @__PURE__ */ n.jsx(
      Qf,
      {
        height: r,
        ariaLabel: t,
        margin: { bottom: 48, left: 56, right: 16, top: 12 },
        className: void 0,
        children: /* @__PURE__ */ n.jsx(eh, { series: ee, yDomain: ie, children: /* @__PURE__ */ n.jsx(
          op,
          {
            series: ee,
            showPoints: o,
            announceFocus: s,
            limits: { mean: F, ucl: H, lcl: P, sigma: q, onePos: v, oneNeg: _, twoPos: W, twoNeg: B },
            showZones: a,
            highlightOutOfControl: d,
            engineRows: p?.rows || null,
            enableRules: h,
            showIcons: m,
            narrationContext: Y,
            metricImprovement: f,
            gradientSequences: A,
            processLineWidth: j,
            effectiveUnit: U,
            partitionMarkers: se,
            ariaLabel: t
          }
        ) })
      }
    ),
    M && y && /* @__PURE__ */ n.jsx(
      "div",
      {
        "data-testid": "spc-diagnostics-live",
        "aria-live": "polite",
        style: { position: "absolute", width: 1, height: 1, padding: 0, margin: 0, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0 },
        children: y
      }
    ),
    M && k.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__warnings", role: "region", "aria-label": "SPC diagnostics", children: [
      /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
      /* @__PURE__ */ n.jsx(
        ga,
        {
          firstCellIsHeader: !1,
          panel: !1,
          responsive: !1,
          head: [
            { text: "Severity" },
            { text: "Category" },
            { text: "Code" },
            { text: "Details" }
          ],
          rows: k.map((X) => {
            let K = "grey";
            return X.severity === Bt.Error ? K = "red" : X.severity === Bt.Warning ? K = "orange" : X.severity === Bt.Info && (K = "blue"), [
              { node: /* @__PURE__ */ n.jsx(Ye, { color: K, text: (X.severity ? String(X.severity) : "Info").replace(/^[a-z]/, (oe) => oe.toUpperCase()) }), classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity" },
              { node: X.category ? /* @__PURE__ */ n.jsx(Ye, { color: "purple", text: S(X.category) }) : /* @__PURE__ */ n.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }), classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category" },
              { node: /* @__PURE__ */ n.jsx(Ye, { color: "grey", text: C(X.code) }), classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code" },
              { node: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                /* @__PURE__ */ n.jsx("span", { children: X.message }),
                X.context && Object.keys(X.context).length > 0 && /* @__PURE__ */ n.jsxs("details", { className: "fdp-spc-chart__warning-context", style: { marginTop: 4 }, children: [
                  /* @__PURE__ */ n.jsx("summary", { children: "context" }),
                  /* @__PURE__ */ n.jsx("pre", { children: JSON.stringify(X.context, null, 2) })
                ] })
              ] }), classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--message" }
            ];
          }),
          classes: "fdp-spc-chart__warnings-table-wrapper",
          tableClasses: "fdp-spc-chart__warnings-table"
        }
      )
    ] })
  ] });
}, op = ({
  series: e,
  showPoints: t,
  announceFocus: r,
  limits: a,
  showZones: o,
  highlightOutOfControl: s,
  engineRows: i,
  enableRules: l,
  showIcons: d,
  narrationContext: c,
  gradientSequences: f,
  processLineWidth: h,
  effectiveUnit: m,
  partitionMarkers: b,
  ariaLabel: D
}) => {
  const g = Zt(), u = Rt();
  if (!g) return null;
  const { xScale: R, yScale: L } = g, I = O.useRef("spc-seq-" + ++ap), T = Pt(), A = e[0]?.data || [], j = O.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const v = /* @__PURE__ */ new Set();
    return A.forEach((_, W) => {
      (a.ucl != null && _.y > a.ucl || a.lcl != null && _.y < a.lcl) && v.add(W);
    }), v;
  }, [A, a.ucl, a.lcl]), M = O.useMemo(() => {
    if (!i) return null;
    const v = {};
    return i.forEach((_, W) => {
      if (_.value == null || _.ghost) return;
      const B = _.specialCauseSinglePointAbove || _.specialCauseSinglePointBelow || _.specialCauseTwoOfThreeAbove || _.specialCauseTwoOfThreeBelow || _.specialCauseFourOfFiveAbove || _.specialCauseFourOfFiveBelow || _.specialCauseShiftHigh || _.specialCauseShiftLow || _.specialCauseTrendIncreasing || _.specialCauseTrendDecreasing;
      v[W] = {
        variation: _.variationIcon,
        assurance: _.assuranceIcon,
        special: B,
        concern: _.variationIcon === Oe.Concern,
        improvement: _.variationIcon === Oe.Improvement
      };
    }), v;
  }, [i]), x = O.useMemo(() => {
    if (!i || !i.length) return null;
    const v = [];
    for (const W of i)
      typeof W.target == "number" && !isNaN(W.target) && v.push(W.target);
    if (!v.length) return null;
    const _ = v[0];
    return v.every((W) => W === _) ? _ : null;
  }, [i]), C = O.useMemo(() => {
    if (!M || !A.length) return [];
    const v = A.map((W, B) => {
      const q = M?.[B];
      return q?.concern ? "concern" : q?.improvement ? "improvement" : q?.special && q.variation === Oe.Neither ? "noJudgement" : "common";
    });
    return D?.includes("Rule Clash") && console.log(`[${D}] Raw categories:`, v.map((W, B) => `${B}:${W}(${A[B].y})`).join(", ")), v;
  }, [M, A, D]), S = O.useMemo(() => {
    if (!f || !C.length) return [];
    const v = [...C];
    let _ = 0;
    for (; _ < v.length; ) {
      const q = v[_];
      let ee = _ + 1;
      for (; ee < v.length && v[ee] === q; ) ee++;
      ee - _ === 1 && q !== "common" && (v[_] = "common"), _ = ee;
    }
    const W = [];
    if (v.length) {
      let q = 0;
      for (let ee = 1; ee <= v.length; ee++)
        if (ee === v.length || v[ee] !== v[q]) {
          const ie = v[q], te = ee - 1, U = te - q + 1;
          (ie === "common" || U >= 2) && W.push({ start: q, end: te, category: ie }), q = ee;
        }
    }
    return D?.includes("Rule Clash") && console.log(`[${D}] Final sequences:`, W.map((q) => `${q.start}-${q.end}:${q.category}`).join(", ")), W;
  }, [f, C, D]), p = O.useMemo(() => A.map((v) => R(v.x instanceof Date ? v.x : new Date(v.x))), [A, R]), w = R.range()[1], F = O.useMemo(() => {
    if (!i || !i.length) return null;
    const v = (_) => {
      const W = [];
      let B = null, q = null;
      for (let ee = 0; ee < i.length; ee++) {
        const ie = i[ee], te = typeof ie[_] == "number" ? ie[_] : null;
        if (te == null || isNaN(te)) {
          B !== null && q != null && (W.push({ x1: p[B], x2: p[ee - 1], y: L(q) }), B = null, q = null);
          continue;
        }
        if (B === null) {
          B = ee, q = te;
          continue;
        }
        q != null && Math.abs(te - q) <= 1e-9 || (q != null && W.push({ x1: p[B], x2: p[ee - 1], y: L(q) }), B = ee, q = te);
      }
      return B !== null && q != null && W.push({ x1: p[B], x2: p[i.length - 1], y: L(q) }), W;
    };
    return {
      mean: v("mean"),
      ucl: v("upperProcessLimit"),
      lcl: v("lowerProcessLimit"),
      onePos: v("upperOneSigma"),
      oneNeg: v("lowerOneSigma"),
      twoPos: v("upperTwoSigma"),
      twoNeg: v("lowerTwoSigma")
    };
  }, [i, p, L]), N = O.useMemo(() => S.length ? /* @__PURE__ */ n.jsx("defs", { children: S.map((v, _) => {
    const W = `${I.current}-grad-${_}`;
    let B, q = 0.28, ee = 0.12, ie = 0.045;
    switch (v.category) {
      case "concern":
        B = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", q = 0.28, ee = 0.12, ie = 0.045;
        break;
      case "improvement":
        B = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", q = 0.26, ee = 0.11, ie = 0.045;
        break;
      case "noJudgement":
        B = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", q = 0.26, ee = 0.11, ie = 0.045;
        break;
      default:
        B = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
    }
    return /* @__PURE__ */ n.jsxs("linearGradient", { id: W, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: B, stopOpacity: q }),
      /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: B, stopOpacity: ee }),
      /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: B, stopOpacity: ie })
    ] }, W);
  }) }) : null, [S]), k = O.useMemo(() => {
    if (!S.length) return null;
    const [v] = L.domain(), _ = L(v), W = S.map((B, q) => {
      const { start: ee, end: ie, category: te } = B;
      if (ee < 0 || ie >= p.length || ee > ie) return null;
      const U = p[ee], Y = p[ie];
      let se = "";
      if (te === "common") {
        const z = q > 0 ? S[q - 1] : null, X = q < S.length - 1 ? S[q + 1] : null, K = z ? p[z.end] : 0, oe = z ? L(A[z.end].y) : _, re = X ? p[X.start] : w, ue = X ? L(A[X.start].y) : _;
        se = `M ${K} ${_}`, se += ` L ${K} ${oe}`;
        for (let be = ee; be <= ie; be++)
          se += ` L ${p[be]} ${L(A[be].y)}`;
        se += ` L ${re} ${ue}`, se += ` L ${re} ${_} Z`;
      } else {
        const z = q > 0 ? S[q - 1] : null, X = q < S.length - 1 ? S[q + 1] : null, K = z && z.category !== "common", oe = X && X.category !== "common", re = L(A[ee].y), ue = L(A[ie].y);
        if (K) {
          const be = p[z.end], Se = L(A[z.end].y);
          se = `M ${be} ${Se} L ${U} ${re}`;
        } else
          se = `M ${U} ${_} L ${U} ${re}`;
        for (let be = ee + 1; be <= ie; be++)
          se += ` L ${p[be]} ${L(A[be].y)}`;
        if (se += ` L ${Y} ${ue}`, oe ? se += ` L ${Y} ${ue} L ${Y} ${_}` : se += ` L ${Y} ${ue} L ${Y} ${_}`, K) {
          const be = p[z.end];
          se += ` L ${be} ${_} Z`;
        } else
          se += ` L ${U} ${_} Z`;
      }
      return /* @__PURE__ */ n.jsx(
        "path",
        {
          d: se,
          fill: `url(#${I.current}-grad-${q})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${q}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ n.jsx("g", { className: "fdp-spc__sequence-bgs", children: W });
  }, [S, p, w, L, A]), y = O.useMemo(() => {
    if (!c?.timeframe && A.length >= 2) {
      const v = A.map((ie) => ie.x instanceof Date ? ie.x : new Date(ie.x)), _ = new Date(Math.min(...v.map((ie) => ie.getTime()))), W = new Date(Math.max(...v.map((ie) => ie.getTime()))), B = Math.round((W.getTime() - _.getTime()) / 864e5) || 0;
      if (B < 14)
        return `The chart shows a timeframe of ${B + 1} days`;
      const q = Math.round(B / 7);
      return q < 20 ? `The chart shows a timeframe of ${q} weeks` : `The chart shows a timeframe of ${(W.getFullYear() - _.getFullYear()) * 12 + (W.getMonth() - _.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, A]), E = (v) => {
    const _ = v % 10, W = v % 100;
    return _ === 1 && W !== 11 ? `${v}st` : _ === 2 && W !== 12 ? `${v}nd` : _ === 3 && W !== 13 ? `${v}rd` : `${v}th`;
  }, Q = (v) => `${E(v.getDate())} ${v.toLocaleString("en-GB", { month: "long" })}, ${v.getFullYear()}`, H = O.useCallback(
    ({ index: v, x: _, y: W }) => {
      const B = i?.[v], q = _ instanceof Date ? _ : new Date(_), ee = Q(q), ie = c?.measureUnit ? ` ${c.measureUnit}` : "", te = c?.measureName ? ` ${c.measureName}` : "";
      if (!B)
        return `General summary is: ${y ? y + ". " : ""}Point ${v + 1}, ${ee}, ${W}${ie}${te}`;
      const U = fs(B.variationIcon) || "Variation", Y = us(B), se = Y.length ? ` Rules: ${[...new Set(Y.map((X) => ds[X].narration))].join("; ")}.` : " No special cause rules.", z = [];
      return c?.measureName && z.push(`Measure: ${c.measureName}.`), c?.datasetContext && z.push(`${c.datasetContext}.`), c?.organisation && z.push(`Organisation: ${c.organisation}.`), c?.additionalNote && z.push(c.additionalNote), [
        "General summary is:",
        ...z,
        `Point ${v + 1} recorded on `,
        ee + ",",
        `with a value of ${W} ${ie}${te}`,
        U + ".",
        se
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, y]
  ), P = O.useCallback(
    (v, _) => i?.[v] ? H({
      index: v,
      seriesId: "process",
      x: _.x instanceof Date ? _.x : new Date(_.x),
      y: _.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, H]
  );
  return /* @__PURE__ */ n.jsx(Bh, { children: /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "fdp-spc-chart",
      role: "group",
      "aria-label": "Statistical process control chart",
      "aria-roledescription": "chart",
      children: [
        /* @__PURE__ */ n.jsx(
          "svg",
          {
            width: g.xScale.range()[1] + 56 + 16,
            height: g.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ n.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ n.jsx(xo, { type: "x" }),
              /* @__PURE__ */ n.jsx(xo, { type: "y" }),
              /* @__PURE__ */ n.jsx(th, { axis: "y" }),
              N,
              k,
              b.map((v, _) => {
                const W = A[v];
                if (!W) return null;
                const B = R(W.x instanceof Date ? W.x : new Date(W.x));
                return /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    x1: B,
                    x2: B,
                    y1: 0,
                    y2: L.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${_}`
                );
              }),
              F?.mean.map((v, _) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__cl", x1: v.x1, x2: v.x2, y1: v.y, y2: v.y, "aria-hidden": "true" }, `mean-${_}`)),
              x != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ n.jsx(n.Fragment, {}),
              F?.ucl.map((v, _) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--ucl", x1: v.x1, x2: v.x2, y1: v.y, y2: v.y, "aria-hidden": "true", strokeWidth: 2 }, `ucl-${_}`)),
              F?.lcl.map((v, _) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--lcl", x1: v.x1, x2: v.x2, y1: v.y, y2: v.y, "aria-hidden": "true", strokeWidth: 2 }, `lcl-${_}`)),
              x != null && /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: R.range()[1],
                    y1: L(x),
                    y2: L(x),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: R.range()[0] - 7,
                    y: L(x) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      x,
                      " ",
                      m || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              o && F && F.mean.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                F.onePos.map((v, _) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__zone fdp-spc__zone--pos1", x1: v.x1, x2: v.x2, y1: v.y, y2: v.y, "aria-hidden": "true", strokeWidth: 2 }, `onePos-${_}`)),
                F.oneNeg.map((v, _) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__zone fdp-spc__zone--neg1", x1: v.x1, x2: v.x2, y1: v.y, y2: v.y, "aria-hidden": "true", strokeWidth: 2 }, `oneNeg-${_}`)),
                F.twoPos.map((v, _) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__zone fdp-spc__zone--pos2", x1: v.x1, x2: v.x2, y1: v.y, y2: v.y, "aria-hidden": "true", strokeWidth: 2 }, `twoPos-${_}`)),
                F.twoNeg.map((v, _) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__zone fdp-spc__zone--neg2", x1: v.x1, x2: v.x2, y1: v.y, y2: v.y, "aria-hidden": "true", strokeWidth: 2 }, `twoNeg-${_}`))
              ] }),
              /* @__PURE__ */ n.jsx(
                Eh,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (v) => v.x instanceof Date ? v.x : new Date(v.x),
                  smooth: !1,
                  strokeWidth: h
                }
              ),
              t && A.map((v, _) => {
                const W = R(v.x instanceof Date ? v.x : new Date(v.x)), B = L(v.y), q = j.has(_), ee = M?.[_], ie = [
                  "fdp-spc__point",
                  q && s ? "fdp-spc__point--ooc" : null,
                  l && ee?.special && ee.concern ? "fdp-spc__point--sc-concern" : null,
                  l && ee?.special && ee.improvement ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral (context-dependent) metrics: show purple when special cause present but neither improvement nor concern
                  l && ee?.special && ee.variation === Oe.Neither ? "fdp-spc__point--sc-no-judgement" : null,
                  ee?.assurance === Et.Pass ? "fdp-spc__point--assurance-pass" : null,
                  ee?.assurance === Et.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), te = `Point ${_ + 1} value ${v.y}` + (ee?.special ? " special cause" : "") + (ee?.variation === Oe.Improvement ? " improving" : ee?.variation === Oe.Concern ? " concern" : ""), U = T?.focused?.index === _;
                return /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: W,
                    cy: B,
                    r: 5,
                    className: ie,
                    "data-variation": ee?.variation,
                    "data-assurance": ee?.assurance,
                    "aria-label": te,
                    ...U ? { "aria-describedby": `spc-tooltip-${_}` } : {}
                  },
                  _
                );
              }),
              d && l && M && A.map((v, _) => {
                const W = M[_];
                if (!W || !(W.concern || W.improvement)) return null;
                const B = R(v.x instanceof Date ? v.x : new Date(v.x)), q = L(v.y);
                let ee = q - 10;
                const ie = 12, te = L.range()[0] - 4;
                ee < ie && (ee = Math.min(q + 16, te));
                const U = R.range()[1], Y = Math.min(Math.max(B, 0), U - 0);
                return /* @__PURE__ */ n.jsx(
                  "text",
                  {
                    x: Y,
                    y: ee,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${W.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: W.concern ? "!" : "★"
                  },
                  `icon-${_}`
                );
              }),
              u && /* @__PURE__ */ n.jsx(
                ip,
                {
                  width: R.range()[1],
                  height: L.range()[0]
                }
              ),
              /* @__PURE__ */ n.jsx(
                Fi,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: P,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (v) => Q(v)
                }
              )
            ] })
          }
        ),
        r && /* @__PURE__ */ n.jsx(
          Rh,
          {
            format: (v) => H({ ...v, x: v.x instanceof Date ? v.x : new Date(v.x) })
          }
        )
      ]
    }
  ) });
}, ip = ({
  width: e,
  height: t
}) => {
  const r = Pt();
  return r ? /* @__PURE__ */ n.jsx(
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
        r.focusNearest(i, l);
      },
      onMouseLeave: () => r.clear(),
      onKeyDown: (a) => {
        switch (a.key) {
          case "ArrowRight":
            r.focusNextPoint(), a.preventDefault();
            break;
          case "ArrowLeft":
            r.focusPrevPoint(), a.preventDefault();
            break;
          case "ArrowDown":
            r.focusNextSeries(), a.preventDefault();
            break;
          case "ArrowUp":
            r.focusPrevSeries(), a.preventDefault();
            break;
          case "Home":
            r.focusFirstPoint(), a.preventDefault();
            break;
          case "End":
            r.focusLastPoint(), a.preventDefault();
            break;
        }
      },
      style: { cursor: "crosshair" }
    }
  ) : null;
}, Rx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: Et,
  AssuranceResult: Gt,
  BaselineSuggestionReason: $i,
  ChartType: cs,
  Direction: we,
  ImprovementDirection: ft,
  MetricPolarity: Ge,
  SPCAssuranceIcon: gs,
  SPCChart: sp,
  SPCTooltipOverlay: Fi,
  SPCVariationIcon: ms,
  SpcWarningCategory: Ni,
  SpcWarningCode: Ti,
  SpcWarningSeverity: Bt,
  VARIATION_COLOR_TOKENS: lt,
  VariationIcon: Oe,
  VariationJudgement: nt,
  VariationState: Me,
  buildSpc: Mi,
  extractRuleIds: us,
  getVariationColorHex: Jh,
  getVariationColorToken: Li,
  getVariationColour: Bi,
  getVariationTrend: ps,
  ruleGlossary: ds,
  variationLabel: fs
}, Symbol.toStringTag, { value: "Module" })), lp = "150ms", cp = "300ms", dp = "500ms", up = "cubic-bezier(0.4, 0, 1, 1)", fp = "cubic-bezier(0, 0, 0.2, 1)", hp = "cubic-bezier(0.4, 0, 0.2, 1)", pp = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", mp = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", gp = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", xp = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", bp = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", yp = "1px", vp = "2px", _p = "4px", wp = "4px", Sp = "4px", kp = "2px", Cp = "1px", jp = "0px", Np = "4px", Tp = "8px", $p = "12px", Ri = "#d8dde0", Pi = "#4c6272", Hi = "#d8dde0", zi = "#aeb7bd", Wi = "#d5281b", Oi = "#005eb8", Ui = "#ffffff", Gi = "#212b32", Yi = "#007f3b", Vi = "#330072", qi = "#7c2855", Xi = "#d5281b", Ki = "#ffeb3b", Zi = "#fff9c4", Ji = "#ffb81c", Qi = "#ed8b00", el = "#00a499", tl = "#ae2573", nl = "#4c6272", rl = "#768692", al = "#aeb7bd", sl = "#d8dde0", ol = "#f0f4f5", Dp = "#212b32", Ip = "#4c6272", Mp = "#ffffff", Lp = "#212b32", Fp = "#005eb8", Ap = "#7c2855", Bp = "#003087", Ep = "#330072", Rp = "#ffeb3b", Pp = "#212b32", Hp = "#d8dde0", zp = "#ffffff33", Wp = "#d5281b", Op = "#4c6272", Up = "#ffffff", Gp = "#007f3b", Yp = "#ffffff", Vp = "#006530", qp = "#004021", Xp = "#004021", Kp = "#00000000", Zp = "#ffffff", Jp = "#005eb8", Qp = "#005eb8", em = "#d9e5f2", tm = "#c7daf0", nm = "#005eb8", rm = "#ffffff", am = "#212b32", sm = "#d9dde0", om = "#b3bcc2", im = "#b3bcc2", lm = "#d5281b", cm = "#aa2016", dm = "#6a140e", um = "#6a140e", fm = "#005eb8", hm = "#004b93", pm = "#002f5c", mm = "#002f5c", gm = "8px", xm = "16px", bm = "12px", ym = "16px", vm = "4px", _m = "40px", wm = "4px", Sm = "40px", km = "12px", Cm = "16px", jm = "32px", Nm = "16px", Tm = "20px", $m = "28px", Dm = "9px", Im = "2px", Mm = "16px", Lm = "24px", Fm = "8px", Am = "24px", Bm = "16px", Em = "4px", Rm = "4px", Pm = "4px", Hm = "8px", zm = "4px", Wm = "16px", Om = "#007f3b", Um = "#006530", Gm = "#004021", Ym = "#d8dde0", Vm = "#ffffff", qm = "#768692", Xm = "#00000000", Km = "#ffeb3b", Zm = "#00000000", Jm = "#ffffff", Qm = "#d9e5f2", eg = "#c7daf0", tg = "#005eb8", ng = "#005eb8", il = "8px", ll = "16px", cl = "12px", dl = "16px", rg = "2px", ag = "4px", sg = "4px", og = "600", ig = "#ffffff", lg = "#d8dde0", cg = "#aeb7bd", dg = "#f0f4f5", ug = "#212b32", fg = "#212b32", hg = "#005eb8", ul = "16px", fl = "32px", hl = "16px", pg = "1px", mg = "4px", gg = "none", xg = "0 2px 4px rgba(0, 0, 0, 0.1)", bg = "#ffffff", yg = "#ffffff", vg = "#d8dde0", _g = "#ffffff", wg = "#4c6272", Sg = "#ffeb3b", kg = "#d5281b", Cg = "#aeb7bd", jg = "#212b32", Ng = "#4c6272", Tg = "#768692", $g = "#212b32", Dg = "#ffffff", Ig = "600", Mg = "#d5281b", Lg = "600", Fg = "#4c6272", pl = "4px", ml = "40px", gl = "40px", xl = "12px", Ag = "2px", Bg = "4px", Eg = "0px", Rg = "16px", Pg = "18px", Hg = "24px", zg = "32px", Wg = "34px", Og = "32px", Ug = "40px", Gg = "48px", Yg = "5.4ex", Vg = "7.2ex", qg = "9ex", Xg = "10.8ex", Kg = "20ex", Zg = "38ex", Jg = "56ex", Qg = "44px", e0 = "40px", t0 = "1020px", n0 = "100%", r0 = "50%", a0 = "33.333%", s0 = "25%", o0 = "20%", i0 = "320px", l0 = "641px", c0 = "1025px", d0 = "1280px", u0 = "960px", f0 = "32px", h0 = "16px", p0 = "#d5281b", m0 = "#d5281b", g0 = "#ffffff", x0 = "#007f3b", b0 = "#007f3b", y0 = "#ffffff", v0 = "#ffeb3b", _0 = "#ffeb3b", w0 = "#212b32", S0 = "#005eb8", k0 = "#005eb8", C0 = "#ffffff", j0 = "#d8dde0", N0 = "#aeb7bd", T0 = "#768692", $0 = "0 4px 0 #004021", D0 = "0 4px 0 #005eb8", I0 = "0 4px 0 #6a140e", M0 = "0 4px 0 #ffeb3b", L0 = "none", F0 = "0 2px 4px rgba(0, 0, 0, 0.1)", A0 = "4px", B0 = "0px", E0 = "solid", R0 = "0 0 0 3px #ffeb3b", P0 = "0 0 0 3px #ffeb3b", H0 = "none", z0 = "0 1px 3px rgba(0, 0, 0, 0.12)", W0 = "0 2px 6px rgba(0, 0, 0, 0.16)", O0 = "0 4px 12px rgba(0, 0, 0, 0.20)", bl = "0", yl = "4px", vl = "8px", _l = "16px", wl = "24px", Sl = "32px", kl = "40px", Cl = "48px", jl = "56px", Nl = "64px", ja = "0", Na = "0", Ta = "4px", $a = "4px", Da = "8px", Ia = "8px", Ma = "8px", La = "16px", Fa = "16px", Aa = "24px", Ba = "24px", Ea = "32px", Ra = "32px", Pa = "40px", Ha = "40px", za = "48px", Wa = "48px", Oa = "56px", Ua = "56px", Ga = "64px", ar = "Frutiger W01", sr = "Arial, Helvetica, sans-serif", or = "sans-serif", ir = "400", lr = "600", cr = "400", dr = "12px", ur = "14px", fr = "12pt", hr = "14px", pr = "16px", mr = "12pt", gr = "16px", xr = "19px", br = "13pt", yr = "19px", vr = "22px", _r = "15pt", wr = "22px", Sr = "26px", kr = "17pt", Cr = "27px", jr = "36px", Nr = "20pt", Tr = "33px", $r = "48px", Dr = "24pt", Ya = "16px", Va = "24px", bt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, yt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, _t = {
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
}, St = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, kt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ct = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, jt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Nt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, U0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: lp,
  AnimationDurationNormal: cp,
  AnimationDurationSlow: dp,
  AnimationEasingBounce: pp,
  AnimationEasingEaseIn: up,
  AnimationEasingEaseInOut: hp,
  AnimationEasingEaseOut: fp,
  BorderColorCard: Hi,
  BorderColorCardHover: zi,
  BorderColorDefault: Ri,
  BorderColorError: Wi,
  BorderColorForm: Pi,
  BorderRadiusLarge: $p,
  BorderRadiusMedium: Tp,
  BorderRadiusNone: jp,
  BorderRadiusSmall: Np,
  BorderWidthCardBottom: wp,
  BorderWidthDefault: yp,
  BorderWidthFormElement: vp,
  BorderWidthFormElementError: _p,
  BorderWidthPanel: Sp,
  BorderWidthTableCell: Cp,
  BorderWidthTableHeader: kp,
  BreakpointDesktop: c0,
  BreakpointLargeDesktop: d0,
  BreakpointMobile: i0,
  BreakpointTablet: l0,
  ButtonBorderRadius: ag,
  ButtonBorderWidth: rg,
  ButtonPrimaryBackgroundActive: Gm,
  ButtonPrimaryBackgroundDefault: Om,
  ButtonPrimaryBackgroundDisabled: Ym,
  ButtonPrimaryBackgroundHover: Um,
  ButtonPrimaryBorderDefault: Xm,
  ButtonPrimaryBorderFocus: Km,
  ButtonPrimaryTextDefault: Vm,
  ButtonPrimaryTextDisabled: qm,
  ButtonSecondaryBackgroundActive: eg,
  ButtonSecondaryBackgroundDefault: Zm,
  ButtonSecondaryBackgroundHover: Qm,
  ButtonSecondaryBackgroundSolid: Jm,
  ButtonSecondaryBorderDefault: ng,
  ButtonSecondaryTextDefault: tg,
  ButtonShadowSize: sg,
  ButtonSpacingPaddingHorizontalDesktop: dl,
  ButtonSpacingPaddingHorizontalMobile: ll,
  ButtonSpacingPaddingVerticalDesktop: cl,
  ButtonSpacingPaddingVerticalMobile: il,
  ButtonTypographyWeight: og,
  CardBackgroundDefault: ig,
  CardBorderBottom: dg,
  CardBorderDefault: lg,
  CardBorderHover: cg,
  CardBorderWidthBottom: mg,
  CardBorderWidthDefault: pg,
  CardShadowDefault: gg,
  CardShadowHover: xg,
  CardSpacingHeadingMargin: hl,
  CardSpacingPaddingDesktop: fl,
  CardSpacingPaddingMobile: ul,
  CardTextDescription: fg,
  CardTextHeading: ug,
  CardTextLink: hg,
  ColorBorderDefault: Hp,
  ColorBorderSecondary: zp,
  ColorButtonLoginActive: pm,
  ColorButtonLoginBackground: fm,
  ColorButtonLoginHover: hm,
  ColorButtonLoginShadow: mm,
  ColorButtonPrimaryActive: qp,
  ColorButtonPrimaryBackground: Gp,
  ColorButtonPrimaryHover: Vp,
  ColorButtonPrimaryShadow: Xp,
  ColorButtonPrimaryText: Yp,
  ColorButtonReverseActive: om,
  ColorButtonReverseBackground: rm,
  ColorButtonReverseHover: sm,
  ColorButtonReverseShadow: im,
  ColorButtonReverseText: am,
  ColorButtonSecondaryActive: tm,
  ColorButtonSecondaryBackground: Kp,
  ColorButtonSecondaryBackgroundSolid: Zp,
  ColorButtonSecondaryBorder: Jp,
  ColorButtonSecondaryHover: em,
  ColorButtonSecondaryShadow: nm,
  ColorButtonSecondaryText: Qp,
  ColorButtonWarningActive: dm,
  ColorButtonWarningBackground: lm,
  ColorButtonWarningHover: cm,
  ColorButtonWarningShadow: um,
  ColorError: Wp,
  ColorFocusBackground: Rp,
  ColorFocusText: Pp,
  ColorFormBackground: Up,
  ColorFormBorder: Op,
  ColorGrey1: nl,
  ColorGrey2: rl,
  ColorGrey3: al,
  ColorGrey4: sl,
  ColorGrey5: ol,
  ColorLinkActive: Bp,
  ColorLinkDefault: Fp,
  ColorLinkHover: Ap,
  ColorLinkVisited: Ep,
  ColorPrimaryBlack: Gi,
  ColorPrimaryBlue: Oi,
  ColorPrimaryDarkPink: qi,
  ColorPrimaryGreen: Yi,
  ColorPrimaryPurple: Vi,
  ColorPrimaryRed: Xi,
  ColorPrimaryWhite: Ui,
  ColorPrimaryYellow: Ki,
  ColorSecondaryAquaGreen: el,
  ColorSecondaryOrange: Qi,
  ColorSecondaryPaleYellow: Zi,
  ColorSecondaryPink: tl,
  ColorSecondaryWarmYellow: Ji,
  ColorTextPrimary: Dp,
  ColorTextPrint: Lp,
  ColorTextReverse: Mp,
  ColorTextSecondary: Ip,
  ComponentBlur: Rm,
  ComponentBreadcrumbChevronMarginLeft: Dm,
  ComponentBreadcrumbChevronMarginRight: Im,
  ComponentBreadcrumbPaddingTopDesktop: Lm,
  ComponentBreadcrumbPaddingTopMobile: Mm,
  ComponentButtonPaddingDesktopHorizontal: ym,
  ComponentButtonPaddingDesktopVertical: bm,
  ComponentButtonPaddingMobileHorizontal: xm,
  ComponentButtonPaddingMobileVertical: gm,
  ComponentButtonShadowSize: vm,
  ComponentCardHeadingMargin: Nm,
  ComponentCardPaddingDesktop: jm,
  ComponentCardPaddingMobile: Cm,
  ComponentDetails: Hm,
  ComponentExpander: zm,
  ComponentFormCheckboxLabelPadding: km,
  ComponentFormCheckboxSize: Sm,
  ComponentFormInputMinHeight: _m,
  ComponentFormInputPadding: wm,
  ComponentLink: Pm,
  ComponentPagination: Wm,
  ComponentPanelPaddingDesktop: $m,
  ComponentPanelPaddingMobile: Tm,
  ComponentSpread: Em,
  ComponentSummaryListCellPaddingHorizontal: Am,
  ComponentSummaryListCellPaddingVertical: Fm,
  ComponentSummaryListRowMargin: Bm,
  ElevationHigh: O0,
  ElevationLow: z0,
  ElevationMedium: W0,
  ElevationNone: H0,
  FocusOutlineOffset: B0,
  FocusOutlineStyle: E0,
  FocusOutlineWidth: A0,
  FocusShadowButton: P0,
  FocusShadowInput: R0,
  FontFamilyBase: ar,
  FontFamilyFallback: sr,
  FontFamilyPrint: or,
  FontLineHeightBase: Va,
  FontSize14Mobile: dr,
  FontSize14Print: fr,
  FontSize14Tablet: ur,
  FontSize16Mobile: hr,
  FontSize16Print: mr,
  FontSize16Tablet: pr,
  FontSize19Mobile: gr,
  FontSize19Print: br,
  FontSize19Tablet: xr,
  FontSize22Mobile: yr,
  FontSize22Print: _r,
  FontSize22Tablet: vr,
  FontSize26Mobile: wr,
  FontSize26Print: kr,
  FontSize26Tablet: Sr,
  FontSize36Mobile: Cr,
  FontSize36Print: Nr,
  FontSize36Tablet: jr,
  FontSize48Mobile: Tr,
  FontSize48Print: Dr,
  FontSize48Tablet: $r,
  FontSizeBase: Ya,
  FontWeightBold: lr,
  FontWeightLight: cr,
  FontWeightNormal: ir,
  FormBorderRadius: Eg,
  FormBorderWidthDefault: Ag,
  FormBorderWidthError: Bg,
  FormErrorTextDefault: Mg,
  FormErrorTypographyWeight: Lg,
  FormHintTextDefault: Fg,
  FormInputBackgroundDefault: bg,
  FormInputBackgroundDisabled: vg,
  FormInputBackgroundError: _g,
  FormInputBackgroundFocus: yg,
  FormInputBorderDefault: wg,
  FormInputBorderDisabled: Cg,
  FormInputBorderError: kg,
  FormInputBorderFocus: Sg,
  FormInputTextDefault: jg,
  FormInputTextDisabled: Tg,
  FormInputTextPlaceholder: Ng,
  FormLabelTextDefault: $g,
  FormLabelTextRequired: Dg,
  FormLabelTypographyWeight: Ig,
  FormSpacingCheckboxLabelPadding: xl,
  FormSpacingCheckboxSize: gl,
  FormSpacingInputMinHeight: ml,
  FormSpacingInputPadding: pl,
  GridGutter: f0,
  GridGutterHalf: h0,
  GridPageWidth: u0,
  HeadingsNhsukHeadingL: yt,
  HeadingsNhsukHeadingM: vt,
  HeadingsNhsukHeadingS: _t,
  HeadingsNhsukHeadingXl: bt,
  HeadingsNhsukHeadingXs: wt,
  LayoutColumnActions: o0,
  LayoutColumnFull: n0,
  LayoutColumnHalf: r0,
  LayoutColumnQuarter: s0,
  LayoutColumnThird: a0,
  LayoutContainerMaxWidth: t0,
  ParagraphsBody: St,
  ParagraphsBodyLarge: kt,
  ParagraphsBodySmall: Ct,
  ParagraphsLedeText: jt,
  ParagraphsLedeTextSmall: Nt,
  ShadowButtonDefault: $0,
  ShadowButtonFocus: M0,
  ShadowButtonSecondary: D0,
  ShadowButtonWarning: I0,
  ShadowCardDefault: L0,
  ShadowCardHover: F0,
  SizeButtonMinHeightDesktop: e0,
  SizeButtonMinHeightMobile: Qg,
  SizeFormControlLarge: Gg,
  SizeFormControlMedium: Ug,
  SizeFormControlSmall: Og,
  SizeFormInputWidth2xl: Zg,
  SizeFormInputWidth3xl: Jg,
  SizeFormInputWidthLg: Xg,
  SizeFormInputWidthMd: qg,
  SizeFormInputWidthSm: Vg,
  SizeFormInputWidthXl: Kg,
  SizeFormInputWidthXs: Yg,
  SizeIconExtraLarge: zg,
  SizeIconLarge: Hg,
  SizeIconMedium: Pg,
  SizeIconNhsDefault: Wg,
  SizeIconSmall: Rg,
  Spacing0: bl,
  Spacing1: yl,
  Spacing2: vl,
  Spacing3: _l,
  Spacing4: wl,
  Spacing5: Sl,
  Spacing6: kl,
  Spacing7: Cl,
  Spacing8: jl,
  Spacing9: Nl,
  SpacingResponsive0Mobile: ja,
  SpacingResponsive0Tablet: Na,
  SpacingResponsive1Mobile: Ta,
  SpacingResponsive1Tablet: $a,
  SpacingResponsive2Mobile: Da,
  SpacingResponsive2Tablet: Ia,
  SpacingResponsive3Mobile: Ma,
  SpacingResponsive3Tablet: La,
  SpacingResponsive4Mobile: Fa,
  SpacingResponsive4Tablet: Aa,
  SpacingResponsive5Mobile: Ba,
  SpacingResponsive5Tablet: Ea,
  SpacingResponsive6Mobile: Ra,
  SpacingResponsive6Tablet: Pa,
  SpacingResponsive7Mobile: Ha,
  SpacingResponsive7Tablet: za,
  SpacingResponsive8Mobile: Wa,
  SpacingResponsive8Tablet: Oa,
  SpacingResponsive9Mobile: Ua,
  SpacingResponsive9Tablet: Ga,
  StateDisabledBackground: j0,
  StateDisabledBorder: N0,
  StateDisabledText: T0,
  StateErrorBackground: p0,
  StateErrorBorder: m0,
  StateErrorText: g0,
  StateInfoBackground: S0,
  StateInfoBorder: k0,
  StateInfoText: C0,
  StateSuccessBackground: x0,
  StateSuccessBorder: b0,
  StateSuccessText: y0,
  StateWarningBackground: v0,
  StateWarningBorder: _0,
  StateWarningText: w0,
  TransitionButtonDefault: mp,
  TransitionButtonShadow: gp,
  TransitionCardHover: bp,
  TransitionInputFocus: xp
}, Symbol.toStringTag, { value: "Module" })), Px = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Hx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: bt.fontFamily,
      fontWeight: bt.fontWeight,
      fontSize: bt.fontSize.mobile,
      lineHeight: bt.lineHeight,
      marginTop: bt.marginTop,
      marginBottom: bt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), zx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: yt.fontFamily,
      fontWeight: yt.fontWeight,
      fontSize: yt.fontSize.mobile,
      lineHeight: yt.lineHeight,
      marginTop: yt.marginTop,
      marginBottom: yt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Wx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: vt.fontFamily,
      fontWeight: vt.fontWeight,
      fontSize: vt.fontSize.mobile,
      lineHeight: vt.lineHeight,
      marginTop: vt.marginTop,
      marginBottom: vt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Ox = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: _t.fontFamily,
      fontWeight: _t.fontWeight,
      fontSize: _t.fontSize.mobile,
      lineHeight: _t.lineHeight,
      marginTop: _t.marginTop,
      marginBottom: _t.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Ux = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), Gx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), Yx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), Vx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), qx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), Xx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Nt.fontFamily,
      fontWeight: Nt.fontWeight,
      fontSize: Nt.fontSize.mobile,
      lineHeight: Nt.lineHeight,
      marginTop: Nt.marginTop,
      marginBottom: Nt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Kx = () => De(() => U0, []), Zx = () => De(() => ({
  // Border colors
  BorderColorDefault: Ri,
  BorderColorForm: Pi,
  BorderColorCard: Hi,
  BorderColorCardHover: zi,
  BorderColorError: Wi,
  // Primary colors
  ColorPrimaryBlue: Oi,
  ColorPrimaryWhite: Ui,
  ColorPrimaryBlack: Gi,
  ColorPrimaryGreen: Yi,
  ColorPrimaryPurple: Vi,
  ColorPrimaryDarkPink: qi,
  ColorPrimaryRed: Xi,
  ColorPrimaryYellow: Ki,
  // Secondary colors
  ColorSecondaryPaleYellow: Zi,
  ColorSecondaryWarmYellow: Ji,
  ColorSecondaryOrange: Qi,
  ColorSecondaryAquaGreen: el,
  ColorSecondaryPink: tl,
  // Grey scale
  ColorGrey1: nl,
  ColorGrey2: rl,
  ColorGrey3: al,
  ColorGrey4: sl,
  ColorGrey5: ol
}), []), Jx = () => De(() => ({
  Spacing0: bl,
  Spacing1: yl,
  Spacing2: vl,
  Spacing3: _l,
  Spacing4: wl,
  Spacing5: Sl,
  Spacing6: kl,
  Spacing7: Cl,
  Spacing8: jl,
  Spacing9: Nl
}), []), Qx = () => De(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: dr,
    Size16: hr,
    Size19: gr,
    Size22: yr,
    Size26: wr,
    Size36: Cr,
    Size48: Tr
  },
  Tablet: {
    Size14: ur,
    Size16: pr,
    Size19: xr,
    Size22: vr,
    Size26: Sr,
    Size36: jr,
    Size48: $r
  },
  Print: {
    Size14: fr,
    Size16: mr,
    Size19: br,
    Size22: _r,
    Size26: kr,
    Size36: Nr,
    Size48: Dr
  },
  Family: {
    Base: ar,
    Fallback: sr,
    Print: or
  },
  Weight: {
    Normal: ir,
    Bold: lr,
    Light: cr
  },
  Base: {
    Size: Ya,
    LineHeight: Va
  },
  // Backward compatibility - individual exports
  FontFamilyBase: ar,
  FontFamilyFallback: sr,
  FontFamilyPrint: or,
  FontWeightNormal: ir,
  FontWeightBold: lr,
  FontWeightLight: cr,
  FontSize14Mobile: dr,
  FontSize14Tablet: ur,
  FontSize14Print: fr,
  FontSize16Mobile: hr,
  FontSize16Tablet: pr,
  FontSize16Print: mr,
  FontSize19Mobile: gr,
  FontSize19Tablet: xr,
  FontSize19Print: br,
  FontSize22Mobile: yr,
  FontSize22Tablet: vr,
  FontSize22Print: _r,
  FontSize26Mobile: wr,
  FontSize26Tablet: Sr,
  FontSize26Print: kr,
  FontSize36Mobile: Cr,
  FontSize36Tablet: jr,
  FontSize36Print: Nr,
  FontSize48Mobile: Tr,
  FontSize48Tablet: $r,
  FontSize48Print: Dr,
  FontSizeBase: Ya,
  FontLineHeightBase: Va
}), []), eb = () => De(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: ja,
    Size1: Ta,
    Size2: Da,
    Size3: Ma,
    Size4: Fa,
    Size5: Ba,
    Size6: Ra,
    Size7: Ha,
    Size8: Wa,
    Size9: Ua
  },
  Tablet: {
    Size0: Na,
    Size1: $a,
    Size2: Ia,
    Size3: La,
    Size4: Aa,
    Size5: Ea,
    Size6: Pa,
    Size7: za,
    Size8: Oa,
    Size9: Ga
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: ja,
  SpacingResponsive0Tablet: Na,
  SpacingResponsive1Mobile: Ta,
  SpacingResponsive1Tablet: $a,
  SpacingResponsive2Mobile: Da,
  SpacingResponsive2Tablet: Ia,
  SpacingResponsive3Mobile: Ma,
  SpacingResponsive3Tablet: La,
  SpacingResponsive4Mobile: Fa,
  SpacingResponsive4Tablet: Aa,
  SpacingResponsive5Mobile: Ba,
  SpacingResponsive5Tablet: Ea,
  SpacingResponsive6Mobile: Ra,
  SpacingResponsive6Tablet: Pa,
  SpacingResponsive7Mobile: Ha,
  SpacingResponsive7Tablet: za,
  SpacingResponsive8Mobile: Wa,
  SpacingResponsive8Tablet: Oa,
  SpacingResponsive9Mobile: Ua,
  SpacingResponsive9Tablet: Ga
}), []), tb = () => De(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: il,
  ButtonSpacingPaddingHorizontalMobile: ll,
  ButtonSpacingPaddingVerticalDesktop: cl,
  ButtonSpacingPaddingHorizontalDesktop: dl,
  // Card spacing	
  CardSpacingPaddingMobile: ul,
  CardSpacingPaddingDesktop: fl,
  CardSpacingHeadingMargin: hl,
  // Form spacing
  FormSpacingInputPadding: pl,
  FormSpacingInputMinHeight: ml,
  FormSpacingCheckboxSize: gl,
  FormSpacingCheckboxLabelPadding: xl
}), []), nb = () => De(() => ({
  xl: bt,
  l: yt,
  m: vt,
  s: _t,
  xs: wt
}), []), rb = () => De(() => ({
  body: St,
  bodyLarge: kt,
  bodySmall: Ct,
  ledeText: jt,
  ledeTextSmall: Nt
}), []), ab = () => De(() => ({
  headings: {
    xl: bt,
    l: yt,
    m: vt,
    s: _t,
    xs: wt
  },
  paragraphs: {
    body: St,
    bodyLarge: kt,
    bodySmall: Ct,
    ledeText: jt,
    ledeTextSmall: Nt
  },
  fonts: {
    family: {
      base: ar,
      fallback: sr,
      print: or
    },
    weight: {
      normal: ir,
      bold: lr,
      light: cr
    },
    sizes: {
      mobile: {
        size14: dr,
        size16: hr,
        size19: gr,
        size22: yr,
        size26: wr,
        size36: Cr,
        size48: Tr
      },
      tablet: {
        size14: ur,
        size16: pr,
        size19: xr,
        size22: vr,
        size26: Sr,
        size36: jr,
        size48: $r
      },
      print: {
        size14: fr,
        size16: mr,
        size19: br,
        size22: _r,
        size26: kr,
        size36: Nr,
        size48: Dr
      }
    }
  }
}), []);
function sb(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [a, o] = O.useState(t), s = O.useCallback(() => o("three-column"), []), i = O.useCallback(() => o((d) => d === "three-column" ? r : d), [r]), l = O.useCallback(() => o((d) => d === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const Tl = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, tt = {
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
function ob(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...Tl, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${tt.normal.eot}?#iefix") format("eot"),
       url("${t}${tt.normal.woff2}") format("woff2"),
       url("${t}${tt.normal.woff}") format("woff"),
       url("${t}${tt.normal.ttf}") format("truetype");
  src: url("${t}${tt.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${tt.bold.eot}?#iefix") format("eot"),
       url("${t}${tt.bold.woff2}") format("woff2"),
       url("${t}${tt.bold.woff}") format("woff"),
       url("${t}${tt.bold.ttf}") format("truetype");
  src: url("${t}${tt.bold.eot}");
}`), a.join(`
`);
}
function ib(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...Tl, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${tt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${tt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${tt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${tt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const lb = '"Frutiger W01", Arial, Helvetica, sans-serif', cb = "Arial, Helvetica, sans-serif";
async function db() {
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
  kx as AdaptiveDataGrid,
  lp as AnimationDurationFast,
  cp as AnimationDurationNormal,
  dp as AnimationDurationSlow,
  pp as AnimationEasingBounce,
  up as AnimationEasingEaseIn,
  hp as AnimationEasingEaseInOut,
  fp as AnimationEasingEaseOut,
  ei as AppointmentCard,
  Mx as AreaSeriesPrimitive,
  nf as AriaDataGrid,
  xa as AriaTabsDataGrid,
  kx as AriaTabsDataGridAdaptive,
  xo as Axis,
  ca as BackLink,
  Fx as BandScalesProvider,
  Lx as BarSeriesPrimitive,
  Hi as BorderColorCard,
  zi as BorderColorCardHover,
  Ri as BorderColorDefault,
  Wi as BorderColorError,
  Pi as BorderColorForm,
  $p as BorderRadiusLarge,
  Tp as BorderRadiusMedium,
  jp as BorderRadiusNone,
  Np as BorderRadiusSmall,
  wp as BorderWidthCardBottom,
  yp as BorderWidthDefault,
  vp as BorderWidthFormElement,
  _p as BorderWidthFormElementError,
  Sp as BorderWidthPanel,
  Cp as BorderWidthTableCell,
  kp as BorderWidthTableHeader,
  Gu as Breadcrumb,
  c0 as BreakpointDesktop,
  d0 as BreakpointLargeDesktop,
  i0 as BreakpointMobile,
  l0 as BreakpointTablet,
  Qe as Button,
  ag as ButtonBorderRadius,
  rg as ButtonBorderWidth,
  Gm as ButtonPrimaryBackgroundActive,
  Om as ButtonPrimaryBackgroundDefault,
  Ym as ButtonPrimaryBackgroundDisabled,
  Um as ButtonPrimaryBackgroundHover,
  Xm as ButtonPrimaryBorderDefault,
  Km as ButtonPrimaryBorderFocus,
  Vm as ButtonPrimaryTextDefault,
  qm as ButtonPrimaryTextDisabled,
  eg as ButtonSecondaryBackgroundActive,
  Zm as ButtonSecondaryBackgroundDefault,
  Qm as ButtonSecondaryBackgroundHover,
  Jm as ButtonSecondaryBackgroundSolid,
  ng as ButtonSecondaryBorderDefault,
  tg as ButtonSecondaryTextDefault,
  sg as ButtonShadowSize,
  dl as ButtonSpacingPaddingHorizontalDesktop,
  ll as ButtonSpacingPaddingHorizontalMobile,
  cl as ButtonSpacingPaddingVerticalDesktop,
  il as ButtonSpacingPaddingVerticalMobile,
  og as ButtonTypographyWeight,
  Zo as Card,
  ig as CardBackgroundDefault,
  dg as CardBorderBottom,
  lg as CardBorderDefault,
  cg as CardBorderHover,
  mg as CardBorderWidthBottom,
  pg as CardBorderWidthDefault,
  fx as CardGroup,
  hx as CardGroupItem,
  gg as CardShadowDefault,
  xg as CardShadowHover,
  hl as CardSpacingHeadingMargin,
  fl as CardSpacingPaddingDesktop,
  ul as CardSpacingPaddingMobile,
  fg as CardTextDescription,
  ug as CardTextHeading,
  hg as CardTextLink,
  px as CareCard,
  K0 as CharacterCount,
  Bx as ChartEnhancer,
  Ax as ChartNoScript,
  Qf as ChartRoot,
  tc as Checkbox,
  ac as Checkboxes,
  Hp as ColorBorderDefault,
  zp as ColorBorderSecondary,
  pm as ColorButtonLoginActive,
  fm as ColorButtonLoginBackground,
  hm as ColorButtonLoginHover,
  mm as ColorButtonLoginShadow,
  qp as ColorButtonPrimaryActive,
  Gp as ColorButtonPrimaryBackground,
  Vp as ColorButtonPrimaryHover,
  Xp as ColorButtonPrimaryShadow,
  Yp as ColorButtonPrimaryText,
  om as ColorButtonReverseActive,
  rm as ColorButtonReverseBackground,
  sm as ColorButtonReverseHover,
  im as ColorButtonReverseShadow,
  am as ColorButtonReverseText,
  tm as ColorButtonSecondaryActive,
  Kp as ColorButtonSecondaryBackground,
  Zp as ColorButtonSecondaryBackgroundSolid,
  Jp as ColorButtonSecondaryBorder,
  em as ColorButtonSecondaryHover,
  nm as ColorButtonSecondaryShadow,
  Qp as ColorButtonSecondaryText,
  dm as ColorButtonWarningActive,
  lm as ColorButtonWarningBackground,
  cm as ColorButtonWarningHover,
  um as ColorButtonWarningShadow,
  Wp as ColorError,
  Rp as ColorFocusBackground,
  Pp as ColorFocusText,
  Up as ColorFormBackground,
  Op as ColorFormBorder,
  nl as ColorGrey1,
  rl as ColorGrey2,
  al as ColorGrey3,
  sl as ColorGrey4,
  ol as ColorGrey5,
  Bp as ColorLinkActive,
  Fp as ColorLinkDefault,
  Ap as ColorLinkHover,
  Ep as ColorLinkVisited,
  Gi as ColorPrimaryBlack,
  Oi as ColorPrimaryBlue,
  qi as ColorPrimaryDarkPink,
  Yi as ColorPrimaryGreen,
  Vi as ColorPrimaryPurple,
  Xi as ColorPrimaryRed,
  Ui as ColorPrimaryWhite,
  Ki as ColorPrimaryYellow,
  el as ColorSecondaryAquaGreen,
  Qi as ColorSecondaryOrange,
  Zi as ColorSecondaryPaleYellow,
  tl as ColorSecondaryPink,
  Ji as ColorSecondaryWarmYellow,
  Dp as ColorTextPrimary,
  Lp as ColorTextPrint,
  Mp as ColorTextReverse,
  Ip as ColorTextSecondary,
  _n as Column,
  Rm as ComponentBlur,
  Dm as ComponentBreadcrumbChevronMarginLeft,
  Im as ComponentBreadcrumbChevronMarginRight,
  Lm as ComponentBreadcrumbPaddingTopDesktop,
  Mm as ComponentBreadcrumbPaddingTopMobile,
  ym as ComponentButtonPaddingDesktopHorizontal,
  bm as ComponentButtonPaddingDesktopVertical,
  xm as ComponentButtonPaddingMobileHorizontal,
  gm as ComponentButtonPaddingMobileVertical,
  vm as ComponentButtonShadowSize,
  Nm as ComponentCardHeadingMargin,
  jm as ComponentCardPaddingDesktop,
  Cm as ComponentCardPaddingMobile,
  Hm as ComponentDetails,
  zm as ComponentExpander,
  km as ComponentFormCheckboxLabelPadding,
  Sm as ComponentFormCheckboxSize,
  _m as ComponentFormInputMinHeight,
  wm as ComponentFormInputPadding,
  Pm as ComponentLink,
  Wm as ComponentPagination,
  $m as ComponentPanelPaddingDesktop,
  Tm as ComponentPanelPaddingMobile,
  Em as ComponentSpread,
  Am as ComponentSummaryListCellPaddingHorizontal,
  Fm as ComponentSummaryListCellPaddingVertical,
  Bm as ComponentSummaryListRowMargin,
  Co as Container,
  ux as ContentsList,
  Tl as DEFAULT_FONT_CONFIG,
  _x as DashboardSummaryGrid,
  sx as DateInput,
  Vu as Details,
  qu as DoDontList,
  O0 as ElevationHigh,
  z0 as ElevationLow,
  W0 as ElevationMedium,
  H0 as ElevationNone,
  Cs as ErrorMessage,
  ax as ErrorSummary,
  Xu as Expander,
  tt as FRUTIGER_FONT_FILES,
  Ka as Fieldset,
  B0 as FocusOutlineOffset,
  E0 as FocusOutlineStyle,
  A0 as FocusOutlineWidth,
  P0 as FocusShadowButton,
  R0 as FocusShadowInput,
  ar as FontFamilyBase,
  sr as FontFamilyFallback,
  or as FontFamilyPrint,
  Va as FontLineHeightBase,
  dr as FontSize14Mobile,
  fr as FontSize14Print,
  ur as FontSize14Tablet,
  hr as FontSize16Mobile,
  mr as FontSize16Print,
  pr as FontSize16Tablet,
  gr as FontSize19Mobile,
  br as FontSize19Print,
  xr as FontSize19Tablet,
  yr as FontSize22Mobile,
  _r as FontSize22Print,
  vr as FontSize22Tablet,
  wr as FontSize26Mobile,
  kr as FontSize26Print,
  Sr as FontSize26Tablet,
  Cr as FontSize36Mobile,
  Nr as FontSize36Print,
  jr as FontSize36Tablet,
  Tr as FontSize48Mobile,
  Dr as FontSize48Print,
  $r as FontSize48Tablet,
  Ya as FontSizeBase,
  lr as FontWeightBold,
  cr as FontWeightLight,
  ir as FontWeightNormal,
  Io as Footer,
  Eg as FormBorderRadius,
  Ag as FormBorderWidthDefault,
  Bg as FormBorderWidthError,
  Mg as FormErrorTextDefault,
  Lg as FormErrorTypographyWeight,
  Fg as FormHintTextDefault,
  bg as FormInputBackgroundDefault,
  vg as FormInputBackgroundDisabled,
  _g as FormInputBackgroundError,
  yg as FormInputBackgroundFocus,
  wg as FormInputBorderDefault,
  Cg as FormInputBorderDisabled,
  kg as FormInputBorderError,
  Sg as FormInputBorderFocus,
  jg as FormInputTextDefault,
  Tg as FormInputTextDisabled,
  Ng as FormInputTextPlaceholder,
  $g as FormLabelTextDefault,
  Dg as FormLabelTextRequired,
  Ig as FormLabelTypographyWeight,
  xl as FormSpacingCheckboxLabelPadding,
  gl as FormSpacingCheckboxSize,
  ml as FormSpacingInputMinHeight,
  pl as FormSpacingInputPadding,
  cx as GanttChart,
  da as Grid,
  f0 as GridGutter,
  h0 as GridGutterHalf,
  th as GridLines,
  u0 as GridPageWidth,
  Do as Header,
  lx as HeaderSSR,
  bc as HeaderSearch,
  Do as HeaderStatic,
  Dt as Heading,
  yt as HeadingsNhsukHeadingL,
  vt as HeadingsNhsukHeadingM,
  _t as HeadingsNhsukHeadingS,
  bt as HeadingsNhsukHeadingXl,
  wt as HeadingsNhsukHeadingXs,
  yc as Hero,
  So as Hint,
  yx as Images,
  qa as Input,
  mx as InsetText,
  Xa as Label,
  o0 as LayoutColumnActions,
  n0 as LayoutColumnFull,
  r0 as LayoutColumnHalf,
  s0 as LayoutColumnQuarter,
  a0 as LayoutColumnThird,
  t0 as LayoutContainerMaxWidth,
  Ix as Legend,
  eh as LineScalesProvider,
  Eh as LineSeriesPrimitive,
  uc as List,
  jo as MainWrapper,
  ti as MedicationCard,
  Ex as MetricCard,
  Gx as NHSBodyText,
  Yx as NHSBodyTextLarge,
  Vx as NHSBodyTextSmall,
  Hx as NHSHeading1,
  zx as NHSHeading2,
  Wx as NHSHeading3,
  Ox as NHSHeading4,
  Ux as NHSHeading5,
  qx as NHSLedeText,
  Xx as NHSLedeTextSmall,
  ix as NHSThemeProvider,
  cb as NHS_FALLBACK_FONT_STACK,
  lb as NHS_FONT_STACK,
  Gf as NavigationSplitView,
  jx as PageTemplate,
  dx as Pagination,
  Yu as Panel,
  St as ParagraphsBody,
  kt as ParagraphsBodyLarge,
  Ct as ParagraphsBodySmall,
  jt as ParagraphsLedeText,
  Nt as ParagraphsLedeTextSmall,
  Qo as PatientCard,
  Vf as ProductRoadmap,
  Z0 as Radios,
  J0 as RadiosServer,
  kx as ResponsiveDataGrid,
  Cx as ResponsiveDataGridDemo,
  Yt as Row,
  Rx as SPC,
  sp as SPCChart,
  Wn as Select,
  ic as SelectOption,
  $0 as ShadowButtonDefault,
  M0 as ShadowButtonFocus,
  D0 as ShadowButtonSecondary,
  I0 as ShadowButtonWarning,
  L0 as ShadowCardDefault,
  F0 as ShadowCardHover,
  e0 as SizeButtonMinHeightDesktop,
  Qg as SizeButtonMinHeightMobile,
  Gg as SizeFormControlLarge,
  Ug as SizeFormControlMedium,
  Og as SizeFormControlSmall,
  Zg as SizeFormInputWidth2xl,
  Jg as SizeFormInputWidth3xl,
  Xg as SizeFormInputWidthLg,
  qg as SizeFormInputWidthMd,
  Vg as SizeFormInputWidthSm,
  Kg as SizeFormInputWidthXl,
  Yg as SizeFormInputWidthXs,
  zg as SizeIconExtraLarge,
  Hg as SizeIconLarge,
  Pg as SizeIconMedium,
  Wg as SizeIconNhsDefault,
  Rg as SizeIconSmall,
  Ko as SkipLink,
  vx as SlotMatrix,
  wx as SortStatusControl,
  bl as Spacing0,
  yl as Spacing1,
  vl as Spacing2,
  _l as Spacing3,
  wl as Spacing4,
  Sl as Spacing5,
  kl as Spacing6,
  Cl as Spacing7,
  jl as Spacing8,
  Nl as Spacing9,
  ja as SpacingResponsive0Mobile,
  Na as SpacingResponsive0Tablet,
  Ta as SpacingResponsive1Mobile,
  $a as SpacingResponsive1Tablet,
  Da as SpacingResponsive2Mobile,
  Ia as SpacingResponsive2Tablet,
  Ma as SpacingResponsive3Mobile,
  La as SpacingResponsive3Tablet,
  Fa as SpacingResponsive4Mobile,
  Aa as SpacingResponsive4Tablet,
  Ba as SpacingResponsive5Mobile,
  Ea as SpacingResponsive5Tablet,
  Ra as SpacingResponsive6Mobile,
  Pa as SpacingResponsive6Tablet,
  Ha as SpacingResponsive7Mobile,
  za as SpacingResponsive7Tablet,
  Wa as SpacingResponsive8Mobile,
  Oa as SpacingResponsive8Tablet,
  Ua as SpacingResponsive9Mobile,
  Ga as SpacingResponsive9Tablet,
  Q0 as SpacingUtilities,
  j0 as StateDisabledBackground,
  N0 as StateDisabledBorder,
  T0 as StateDisabledText,
  p0 as StateErrorBackground,
  m0 as StateErrorBorder,
  g0 as StateErrorText,
  S0 as StateInfoBackground,
  k0 as StateInfoBorder,
  C0 as StateInfoText,
  x0 as StateSuccessBackground,
  b0 as StateSuccessBorder,
  y0 as StateSuccessText,
  v0 as StateWarningBackground,
  _0 as StateWarningBorder,
  w0 as StateWarningText,
  tf as SummaryCard,
  gx as SummaryList,
  ga as Table,
  xx as Tabs,
  Ye as Tag,
  Ku as TaskList,
  sc as Textarea,
  Dx as TooltipOverlay,
  Bh as TooltipProvider,
  Nx as TransactionalPageTemplate,
  mp as TransitionButtonDefault,
  gp as TransitionButtonShadow,
  bp as TransitionCardHover,
  xp as TransitionInputFocus,
  $x as VisibilityProvider,
  ni as VitalsCard,
  rx as WIDTH_FRACTIONS,
  bx as WarningCallout,
  ii as WidthContainer,
  tx as WidthUtilities,
  db as checkFrutigerLoaded,
  is as createGenericTabsConfig,
  Sx as createTCHTabsConfig,
  ob as generateFrutigerFontFace,
  Px as getResponsiveStyles,
  ex as getSpacingClass,
  nx as getWidthClass,
  ib as preloadFrutigerFonts,
  pf as tchDataConfig,
  Zx as useColors,
  tb as useComponentSpacing,
  nb as useNHSHeadings,
  rb as useNHSParagraphs,
  ox as useNHSTheme,
  ab as useNHSTypographySystem,
  sb as useNavigationSplitDrill,
  Wf as useNavigationSplitUrlSync,
  ci as useNhsFdpBreakpoints,
  eb as useResponsiveSpacing,
  Tx as useResponsiveValue,
  Jx as useSpacing,
  Kx as useTokens,
  Qx as useTypography
};
//# sourceMappingURL=index.esm.js.map
