import * as X from "react";
import at, { useState as Ne, useEffect as Ee, useCallback as ie, useRef as Ie, createElement as eo, useMemo as je, useContext as yl, createContext as vl, forwardRef as an, useImperativeHandle as to, useReducer as no, memo as wl, useLayoutEffect as _l, useId as Mn } from "react";
import { createPortal as Sl } from "react-dom";
function kl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nn = { exports: {} }, ln = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ts;
function Cl() {
  if (ts) return ln;
  ts = 1;
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
  return ln.Fragment = t, ln.jsx = n, ln.jsxs = n, ln;
}
var cn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ns;
function jl() {
  return ns || (ns = 1, process.env.NODE_ENV !== "production" && (function() {
    function e($) {
      if ($ == null) return null;
      if (typeof $ == "function")
        return $.$$typeof === v ? null : $.displayName || $.name || null;
      if (typeof $ == "string") return $;
      switch ($) {
        case p:
          return "Fragment";
        case R:
          return "Profiler";
        case u:
          return "StrictMode";
        case B:
          return "Suspense";
        case _:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof $ == "object")
        switch (typeof $.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), $.$$typeof) {
          case C:
            return "Portal";
          case T:
            return ($.displayName || "Context") + ".Provider";
          case F:
            return ($._context.displayName || "Context") + ".Consumer";
          case S:
            var W = $.render;
            return $ = $.displayName, $ || ($ = W.displayName || W.name || "", $ = $ !== "" ? "ForwardRef(" + $ + ")" : "ForwardRef"), $;
          case L:
            return W = $.displayName || null, W !== null ? W : e($.type) || "Memo";
          case j:
            W = $._payload, $ = $._init;
            try {
              return e($(W));
            } catch {
            }
        }
      return null;
    }
    function t($) {
      return "" + $;
    }
    function n($) {
      try {
        t($);
        var W = !1;
      } catch {
        W = !0;
      }
      if (W) {
        W = console;
        var I = W.error, O = typeof Symbol == "function" && Symbol.toStringTag && $[Symbol.toStringTag] || $.constructor.name || "Object";
        return I.call(
          W,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), t($);
      }
    }
    function a($) {
      if ($ === p) return "<>";
      if (typeof $ == "object" && $ !== null && $.$$typeof === j)
        return "<...>";
      try {
        var W = e($);
        return W ? "<" + W + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var $ = x.A;
      return $ === null ? null : $.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i($) {
      if (y.call($, "key")) {
        var W = Object.getOwnPropertyDescriptor($, "key").get;
        if (W && W.isReactWarning) return !1;
      }
      return $.key !== void 0;
    }
    function l($, W) {
      function I() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          W
        ));
      }
      I.isReactWarning = !0, Object.defineProperty($, "key", {
        get: I,
        configurable: !0
      });
    }
    function d() {
      var $ = e(this.type);
      return k[$] || (k[$] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), $ = this.props.ref, $ !== void 0 ? $ : null;
    }
    function c($, W, I, O, H, Q, fe, oe) {
      return I = Q.ref, $ = {
        $$typeof: g,
        type: $,
        key: W,
        props: Q,
        _owner: H
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty($, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty($, "ref", { enumerable: !1, value: null }), $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty($, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty($, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: fe
      }), Object.defineProperty($, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    }
    function f($, W, I, O, H, Q, fe, oe) {
      var K = W.children;
      if (K !== void 0)
        if (O)
          if (P(K)) {
            for (O = 0; O < K.length; O++)
              h(K[O]);
            Object.freeze && Object.freeze(K);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(K);
      if (y.call(W, "key")) {
        K = e($);
        var V = Object.keys(W).filter(function(ae) {
          return ae !== "key";
        });
        O = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", w[K + O] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          K,
          V,
          K
        ), w[K + O] = !0);
      }
      if (K = null, I !== void 0 && (n(I), K = "" + I), i(W) && (n(W.key), K = "" + W.key), "key" in W) {
        I = {};
        for (var J in W)
          J !== "key" && (I[J] = W[J]);
      } else I = W;
      return K && l(
        I,
        typeof $ == "function" ? $.displayName || $.name || "Unknown" : $
      ), c(
        $,
        K,
        Q,
        H,
        o(),
        I,
        fe,
        oe
      );
    }
    function h($) {
      typeof $ == "object" && $ !== null && $.$$typeof === g && $._store && ($._store.validated = 1);
    }
    var m = at, g = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), T = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), v = Symbol.for("react.client.reference"), x = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, P = Array.isArray, E = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function($) {
        return $();
      }
    };
    var M, k = {}, b = m.react_stack_bottom_frame.bind(
      m,
      s
    )(), A = E(a(s)), w = {};
    cn.Fragment = p, cn.jsx = function($, W, I, O, H) {
      var Q = 1e4 > x.recentlyCreatedOwnerStacks++;
      return f(
        $,
        W,
        I,
        !1,
        O,
        H,
        Q ? Error("react-stack-top-frame") : b,
        Q ? E(a($)) : A
      );
    }, cn.jsxs = function($, W, I, O, H) {
      var Q = 1e4 > x.recentlyCreatedOwnerStacks++;
      return f(
        $,
        W,
        I,
        !0,
        O,
        H,
        Q ? Error("react-stack-top-frame") : b,
        Q ? E(a($)) : A
      );
    };
  })()), cn;
}
var rs;
function Nl() {
  return rs || (rs = 1, process.env.NODE_ENV === "production" ? Nn.exports = Cl() : Nn.exports = jl()), Nn.exports;
}
var r = Nl(), Dr = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var as;
function Tl() {
  return as || (as = 1, (function(e) {
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
  })(Dr)), Dr.exports;
}
var Dl = Tl();
const de = /* @__PURE__ */ kl(Dl), b0 = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...o
}) => {
  const s = de(
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
}, $l = ({
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
      className: de(
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
          className: de("nhsuk-account__item nhsuk-header__account-item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
};
function Il(e) {
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
const { forwardRef: Ll, useCallback: Lt, useState: $r } = X;
function Ml(e, t) {
  const {
    children: n,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, f] = $r(!1), [h, m] = $r(!1), [g, C] = $r(!1), p = Il({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), u = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", R = {
    ...c && { "data-pressed": "true" },
    ...h && { "data-hovered": "true" },
    ...g && { "data-focused": "true" },
    ...u && { "data-disabled": "true" }
  }, F = Lt(
    () => !u && f(!0),
    [u]
  ), T = Lt(() => f(!1), []), S = Lt(
    () => !u && m(!0),
    [u]
  ), B = Lt(() => {
    m(!1), f(!1);
  }, []), _ = Lt(() => C(!0), []), L = Lt(() => C(!1), []), j = Lt(
    (K) => {
      K.key === " " && ("href" in d || K.currentTarget.getAttribute("role") === "button") && (K.preventDefault(), K.currentTarget.click());
    },
    [d]
  ), D = Lt(
    (K) => {
      if (l) {
        const V = K.currentTarget;
        if (V.getAttribute("data-processing") === "true") {
          K.preventDefault();
          return;
        }
        V.setAttribute("data-processing", "true"), setTimeout(() => {
          V.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in d && d.href) {
    const {
      id: K,
      style: V,
      title: J,
      ["aria-label"]: ae,
      ["aria-describedby"]: G,
      ["aria-labelledby"]: me,
      tabIndex: he,
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
        ...R,
        ...l && { "data-prevent-double-click": "true" },
        ...xe,
        onKeyDown: (be) => {
          pe.onKeyDown?.(be), j(be);
        },
        onClick: (be) => {
          pe.onClick?.(be), D(be);
        },
        onMouseDown: (be) => {
          pe.onMouseDown?.(be), F();
        },
        onMouseUp: (be) => {
          pe.onMouseUp?.(be), T();
        },
        onMouseEnter: (be) => {
          pe.onMouseEnter?.(be), S();
        },
        onMouseLeave: (be) => {
          pe.onMouseLeave?.(be), B();
        },
        onFocus: (be) => {
          pe.onFocus?.(be), _();
        },
        onBlur: (be) => {
          pe.onBlur?.(be), L();
        },
        "aria-disabled": pe["aria-disabled"],
        ...pe["aria-disabled"] === "true" && { tabIndex: -1 },
        id: K,
        style: V,
        title: J,
        "aria-label": ae,
        "aria-describedby": G,
        "aria-labelledby": me,
        tabIndex: he,
        children: n
      }
    );
  }
  const {
    id: v,
    style: x,
    title: y,
    ["aria-label"]: P,
    ["aria-describedby"]: E,
    ["aria-labelledby"]: M,
    tabIndex: k,
    name: b,
    value: A,
    form: w,
    formAction: $,
    formEncType: W,
    formMethod: I,
    formNoValidate: O,
    formTarget: H,
    autoFocus: Q,
    ...fe
  } = d, oe = d;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: oe.type || "button",
      disabled: oe.disabled,
      className: p.classes,
      "data-module": "nhs-button",
      ...R,
      ...l && { "data-prevent-double-click": "true" },
      ...oe.disabled && { "aria-disabled": "true" },
      ...fe,
      onKeyDown: (K) => {
        oe.onKeyDown?.(K), j(K);
      },
      onClick: (K) => {
        oe.onClick?.(K), D(K);
      },
      onMouseDown: (K) => {
        oe.onMouseDown?.(K), F();
      },
      onMouseUp: (K) => {
        oe.onMouseUp?.(K), T();
      },
      onMouseEnter: (K) => {
        oe.onMouseEnter?.(K), S();
      },
      onMouseLeave: (K) => {
        oe.onMouseLeave?.(K), B();
      },
      onFocus: (K) => {
        oe.onFocus?.(K), _();
      },
      onBlur: (K) => {
        oe.onBlur?.(K), L();
      },
      id: v,
      style: x,
      title: y,
      "aria-label": P,
      "aria-describedby": E,
      "aria-labelledby": M,
      tabIndex: k,
      name: b,
      value: A,
      form: w,
      formAction: $,
      formEncType: W,
      formMethod: I,
      formNoValidate: O,
      formTarget: H,
      autoFocus: Q,
      children: n
    }
  );
}
const Qe = Ll(Ml);
Qe.displayName = "Button";
const Yr = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = de(
    "nhsuk-back-link",
    a
  ), d = de(
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
function Fl(e) {
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
  const f = Fl({ color: a, noBorder: o, closable: s, disabled: l, className: d }), h = (m) => {
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
}, Bl = ({
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
  ...C
}) => {
  const [p, u] = Ne(a), R = n !== void 0, F = R ? n : p;
  Ee(() => {
    R || u(a);
  }, [a, R]);
  const T = (j) => {
    const D = j.target.checked;
    R || u(D), f?.(D, j);
  }, S = i ? `${e}-hint` : void 0, B = l ? `${e}-error` : void 0, _ = [S, B].filter(Boolean).join(" ") || void 0, L = de(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ r.jsx("div", { className: L, ...C, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
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
        "aria-describedby": _,
        ...g
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ r.jsx("div", { id: S, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: B, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
Bl.displayName = "Checkbox";
function Al(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const Da = ({
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
  autoComplete: C,
  maxLength: p,
  minLength: u,
  pattern: R,
  step: F,
  min: T,
  max: S,
  showValueLabels: B = !1,
  showCurrentValue: _ = !1,
  valueLabels: L,
  onChange: j,
  onBlur: D,
  onFocus: v,
  onKeyDown: x,
  ...y
}) => {
  const [P, E] = Ne(a || o || (n === "range" ? T || "0" : ""));
  Ee(() => {
    a !== void 0 && E(a);
  }, [a]);
  const M = (H) => {
    const Q = H.target;
    E(Q.value), ("type" in H && H.nativeEvent || H.type === "keydown") && j?.(H);
  }, { classes: k, isRange: b } = Al({ type: n, hasError: c, width: m, className: h }), A = a !== void 0, w = {
    id: e,
    name: t,
    type: n,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": f,
    inputMode: g,
    autoComplete: C,
    maxLength: p,
    minLength: u,
    pattern: R,
    step: F,
    min: T,
    max: S,
    onChange: M,
    onBlur: D,
    onFocus: v,
    onKeyDown: (H) => {
      if (b && /[0-9]/.test(H.key)) {
        const Q = (P?.toString() || "") + H.key;
        H.target.value = Q, M(H);
      }
      x?.(H);
    },
    ...y
  }, $ = !A && o !== void 0 ? { defaultValue: o } : {}, W = A ? { value: a } : {}, I = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: k,
      ...W,
      ...$,
      "data-current-value": P,
      ...w
    }
  ), O = b ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    B && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: L?.min || T || "0" }),
      I(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: L?.max || S || "100" })
    ] }),
    !B && I(),
    _ && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      L?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: P })
    ] }) })
  ] }) : null;
  return b ? O : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: k,
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
      autoComplete: C,
      maxLength: p,
      minLength: u,
      pattern: R,
      step: F,
      min: T,
      max: S,
      onChange: j,
      onBlur: D,
      onFocus: v,
      onKeyDown: x,
      ...y
    }
  );
};
function El(e) {
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
const $a = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = El({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
}, Ia = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...o
}) => {
  const s = de(
    "nhsuk-fieldset",
    n
  ), i = de(
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
}, Rl = ({
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
  const [C, p] = Ne(
    e.filter((j) => j.checked).map((j) => j.value)
  ), u = n || t, R = i ? `${u}-hint` : void 0, F = l ? `${u}-error` : void 0, T = [R, F].filter(Boolean).join(" ") || void 0, S = (j, D) => {
    let v;
    D ? v = [...C, j] : v = C.filter((x) => x !== j), p(v), f?.(v);
  }, B = () => e.map((j, D) => {
    const v = `${u}-${D + 1}`, x = `${v}-conditional`, y = C.includes(j.value), P = j.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: v,
          name: t,
          type: "checkbox",
          value: j.value,
          checked: y,
          disabled: P,
          onChange: (E) => S(j.value, E.target.checked),
          "aria-describedby": j.hint ? `${v}-hint` : T,
          ...j.conditional && {
            "aria-controls": x,
            "aria-expanded": y ? "true" : "false"
          },
          ...j.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: v, children: j.text }),
      j.hint && /* @__PURE__ */ r.jsx("div", { id: `${v}-hint`, className: "nhsuk-checkboxes__hint", children: j.hint }),
      j.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: de("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !y
          }),
          id: x,
          children: typeof j.conditional == "object" && j.conditional !== null && "label" in j.conditional && "id" in j.conditional && "name" in j.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            j.conditional.label && /* @__PURE__ */ r.jsx($a, { htmlFor: j.conditional.id, children: j.conditional.label }),
            /* @__PURE__ */ r.jsx(Da, { ...j.conditional })
          ] }) : j.conditional
        }
      )
    ] }, j.value);
  }), _ = de(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": c
    },
    d
  ), L = de("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ r.jsx("div", { className: L, ...m, ...g, children: /* @__PURE__ */ r.jsxs(
    Ia,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: T,
      ...h,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: R, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: F, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: _, children: B() })
      ]
    }
  ) });
};
Rl.displayName = "Checkboxes";
const Pl = ({
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
  minLength: C,
  wrap: p = "soft",
  resize: u = "vertical",
  autoComplete: R,
  spellCheck: F,
  onChange: T,
  onBlur: S,
  onFocus: B,
  onKeyDown: _,
  ...L
}) => {
  const j = de(
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
      minLength: C,
      wrap: p,
      autoComplete: R,
      spellCheck: F,
      onChange: T,
      onBlur: S,
      onFocus: B,
      onKeyDown: _,
      ...L
    }
  );
};
function Hl(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const ro = ({ id: e, className: t, children: n, ...a }) => {
  const o = Hl({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: o.classes, id: o.id, ...a, children: n });
}, y0 = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: a = 75,
  name: o,
  value: s = "",
  rows: i,
  className: l,
  countMessage: d,
  onCountChange: c,
  onChange: f,
  ...h
}) => {
  const [m, g] = Ne(s), [C, p] = Ne(0), [u, R] = Ne(!1), [F, T] = Ne(!1), S = ie((v) => n ? v.trim() === "" ? 0 : v.trim().split(/\s+/).length : v.length, [n]);
  Ee(() => {
    const v = S(m), x = t || n || 0, y = x - v, P = Math.floor(x * (a / 100));
    p(y), R(v > x), T(v >= P || v > x), c && c(v, y);
  }, [m, t, n, a, S, c]);
  const B = (v) => {
    const x = v.target.value;
    g(x), f && f(v);
  }, _ = () => {
    const v = t || n || 0, x = n ? "word" : "character", y = n ? "words" : "characters";
    if (!F)
      return `You can enter up to ${v} ${v === 1 ? x : y}`;
    if (u) {
      const P = Math.abs(C);
      return `You have ${P} ${P === 1 ? x : y} too many`;
    } else
      return `You have ${C} ${C === 1 ? x : y} remaining`;
  }, L = de(
    "nhsuk-character-count",
    l
  ), j = de(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !F,
      "nhsuk-error-message": u
    },
    d?.classes
  ), D = de(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": u
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: L,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": n,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ r.jsx(
          Pl,
          {
            id: e,
            name: o,
            value: m,
            rows: i,
            className: D,
            onChange: B,
            "aria-describedby": `${e}-info`,
            "aria-invalid": u || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          ro,
          {
            id: `${e}-info`,
            className: j,
            role: "status",
            "aria-live": "polite",
            children: _()
          }
        )
      ]
    }
  );
}, zl = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = de(
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
}, Wl = ({
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
  children: C,
  onChange: p,
  onBlur: u,
  onFocus: R,
  ...F
}) => {
  const T = de(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    c
  ), S = () => g ? g.map((_, L) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: _.value,
      disabled: _.disabled,
      "data-initial-selected": _.selected || void 0,
      children: _.text
    },
    `${_.value}-${L}`
  )) : null, B = o === void 0 && a === void 0 && g ? g.find((_) => _.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: T,
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
      autoComplete: m,
      onChange: p,
      onBlur: u,
      onFocus: R,
      ...F,
      children: C || S()
    }
  );
}, Fn = Wl;
Fn.Option = zl;
function ao(e, {
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
    hasError: C = !1,
    describedBy: p,
    className: u,
    size: R = "normal",
    inline: F = !1,
    options: T,
    ...S
  } = m, B = de(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": C,
      "nhsuk-radios--small": R === "small",
      "nhsuk-radios--inline": F
    },
    u
  );
  return /* @__PURE__ */ r.jsx(Ia, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: B,
      ...S,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: T.map((_, L) => {
        const j = `${g}-${L}`, D = _.conditional ? `${j}-conditional` : void 0, v = n === _.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: j,
              name: g,
              type: "radio",
              value: _.value,
              disabled: _.disabled,
              ...t === "client" ? { checked: v, onChange: o, onBlur: s, onFocus: i, onKeyDown: l, ref: (x) => {
                x && d && (d.current[L] = x);
              } } : { defaultChecked: v, "data-nhs-radios-input": !0 },
              "aria-describedby": p
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: j, children: _.text }),
          _.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: _.hint }),
          _.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: de("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !v
              }),
              id: D,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                _.conditional.label && /* @__PURE__ */ r.jsx($a, { htmlFor: _.conditional.id, children: _.conditional.label }),
                /* @__PURE__ */ r.jsx(Da, { ..._.conditional })
              ] }) : _.conditional
            }
          )
        ] }, _.value);
      })
    }
  ) });
}
const v0 = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = Ne(e || t || ""), d = Ie([]), c = Ie(i), f = (g) => {
    const C = g.target.value;
    C !== c.current && (c.current = C, l(C), n?.(g));
  }, h = (g) => {
    o?.(g);
  }, m = ie((g) => {
    const { key: C } = g;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(C)) return;
    g.preventDefault();
    const p = d.current.filter((T) => T && !T.disabled), u = p.indexOf(g.currentTarget);
    if (u === -1) return;
    let R = u;
    ["ArrowDown", "ArrowRight"].includes(C) ? R = (u + 1) % p.length : ["ArrowUp", "ArrowLeft"].includes(C) && (R = (u - 1 + p.length) % p.length);
    const F = p[R];
    F && (F.focus(), F.checked || F.click());
  }, []);
  return ao(
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
}, w0 = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return ao(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0
    }
  );
}, so = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = de(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), l = a ? { maxWidth: a, ...o || {} } : o;
  return /* @__PURE__ */ r.jsx("div", { className: i, style: l, ...s, children: e });
}, Wt = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const o = de("nhsuk-grid-row", t);
  return /* @__PURE__ */ r.jsx("div", { className: o, style: n, ...a, children: e });
}, pn = ({
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
  const f = de(
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
}, Vr = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const s = at.Children.toArray(e)[0], i = at.isValidElement(s) && (s.type === Wt || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ r.jsx(so, { className: t, style: n, ...a, children: i ? e : /* @__PURE__ */ r.jsx(Wt, { children: e }) });
}, Ol = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const d = i || (t === "number" ? "ol" : "ul"), c = de(
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
}, Ul = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = de("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, Gl = Ol;
Gl.Item = Ul;
const _0 = ({
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
}, S0 = {
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
}, k0 = ({
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
}, C0 = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, j0 = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], oo = ({
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
function Yl(e) {
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
function Vl(e) {
  const t = e.level ?? Yl(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const Nt = ({ level: e, className: t, text: n, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const d = Vl({ level: e, size: s, className: t, marginBottom: i }), c = o || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return eo(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function ql(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const ss = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...o }) => {
  const s = ql({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, N0 = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const d = Ie(null);
  Ee(() => {
    d.current && d.current.focus();
  }, []);
  const c = de(
    "nhsuk-error-summary",
    s
  ), f = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, h = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, m = (g) => {
    const C = g.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
    return g.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: g.href,
        ...g.attributes,
        children: C
      }
    ) : C;
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
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((g, C) => /* @__PURE__ */ r.jsx("li", { children: m(g) }, C)) })
        ] })
      ]
    }
  );
}, T0 = ({
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
  const [f, h] = Ne(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [m, g] = Ne({}), C = (M) => M % 4 === 0 && M % 100 !== 0 || M % 400 === 0, p = (M, k) => {
    const b = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return M === 2 && C(k) ? 29 : b[M - 1];
  }, u = (M, k, b) => {
    if (!M) return;
    if (!/^\d+$/.test(M)) return "Day must be a number";
    const A = parseInt(M, 10);
    if (A < 1 || A > 31) return "Day must be between 1 and 31";
    if (k && b) {
      const w = parseInt(k, 10), $ = parseInt(b, 10);
      if (!isNaN(w) && !isNaN($) && w >= 1 && w <= 12) {
        const W = p(w, $);
        if (A > W)
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
          ][w - 1]} ${$} only has ${W} days`;
      }
    }
  }, R = (M) => {
    if (!M) return;
    if (!/^\d+$/.test(M)) return "Month must be a number";
    const k = parseInt(M, 10);
    if (k < 1 || k > 12) return "Month must be between 1 and 12";
  }, F = (M) => {
    if (!M) return;
    if (!/^\d+$/.test(M)) return "Year must be a number";
    const k = parseInt(M, 10), b = (/* @__PURE__ */ new Date()).getFullYear();
    if (k < 1900 || k > b + 10)
      return `Year must be between 1900 and ${b + 10}`;
  }, T = (M, k, b) => {
    if (!M || !k || !b) return;
    const A = parseInt(M, 10), w = parseInt(k, 10), $ = parseInt(b, 10);
    if (isNaN(A) || isNaN(w) || isNaN($) || w < 1 || w > 12 || $ < 1900) return;
    const W = p(w, $);
    A < 1 || A > W;
  }, S = ie((M, k) => {
    const b = {
      ...f,
      [M]: k
    };
    h(b), d && d(b);
  }, [f, d]), B = ie((M) => {
    const k = f[M];
    let b;
    if (M === "day")
      b = u(k, f.month, f.year);
    else if (M === "month") {
      if (b = R(k), !b && f.day) {
        const A = u(f.day, k, f.year);
        g((w) => ({
          ...w,
          day: A
        }));
      }
    } else if (M === "year" && (b = F(k), !b && f.day && f.month)) {
      const A = u(f.day, f.month, k);
      g((w) => ({
        ...w,
        day: A
      }));
    }
    if (g((A) => ({
      ...A,
      [M]: b
    })), f.day && f.month && f.year) {
      const A = T(
        M === "day" ? k : f.day,
        M === "month" ? k : f.month,
        M === "year" ? k : f.year
      );
      A && g((w) => ({
        ...w,
        day: A
      }));
    }
  }, [f, u, R, F, T]), _ = je(() => [
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
  ], []), L = n || _;
  let j = s?.describedBy || "";
  const D = i ? `${e}-hint` : "", v = l ? `${e}-error` : "";
  D && (j = j ? `${j} ${D}` : D), v && (j = j ? `${j} ${v}` : v);
  const x = Object.values(m).some((M) => M), y = de(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || x
    }
  ), P = de(
    "nhsuk-date-input",
    t
  ), E = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      ro,
      {
        id: D,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      ss,
      {
        id: v,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([M, k]) => k ? /* @__PURE__ */ r.jsxs(
        ss,
        {
          id: `${e}-${M}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            k
          ]
        },
        `${M}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: P, id: e, "data-testid": "date-input", ...c, children: L.map((M) => {
      const k = M.id || `${e}-${M.name}`, b = a ? `${a}[${M.name}]` : M.name, A = M.label || M.name.charAt(0).toUpperCase() + M.name.slice(1), w = m[M.name], $ = f[M.name] || "";
      let W = j;
      if (w) {
        const I = `${e}-${M.name}-error`;
        W = W ? `${W} ${I}` : I;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          $a,
          {
            htmlFor: k,
            className: "nhsuk-date-input__label",
            children: A
          }
        ),
        /* @__PURE__ */ r.jsx(
          Da,
          {
            id: k,
            name: b,
            value: $,
            className: de("nhsuk-date-input__input", M.classes, {
              "nhsuk-input--error": w
            }),
            inputMode: M.inputmode,
            autoComplete: M.autocomplete,
            pattern: M.pattern,
            "aria-describedby": W || void 0,
            hasError: !!w,
            onChange: (I) => S(M.name, I.target.value),
            onBlur: () => B(M.name)
          }
        )
      ] }, M.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: y, children: s ? /* @__PURE__ */ r.jsx(
    Ia,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: j || void 0,
      children: E()
    }
  ) : E() });
}, io = {
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
}, lo = vl(io), Xl = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...io, ...t };
  return /* @__PURE__ */ r.jsx(lo.Provider, { value: n, children: e });
}, D0 = () => {
  const e = yl(lo);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Kl() {
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
function Zl() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Kl(), document.head.appendChild(e);
}
const $0 = ({ children: e, theme: t }) => (Ee(() => {
  Zl();
}, []), /* @__PURE__ */ r.jsx(Xl, { theme: t, children: e })), Jl = ({
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
  formAttributes: C = {},
  inputAttributes: p = {},
  buttonAttributes: u = {},
  preventDefaultSubmit: R = !1,
  debounceMs: F = 300,
  minQueryLength: T = 1
}) => {
  const [S, B] = Ne(""), [_, L] = Ne(!1), j = Ie(void 0), D = Ie(null), v = Ie(null), x = e === "controlled" && o !== void 0, y = x ? o : S, P = ie((O) => {
    j.current && clearTimeout(j.current), j.current = setTimeout(() => {
      f.onChange && O.length >= T && f.onChange(O);
    }, F);
  }, [f.onChange, F, T]), E = ie((O) => {
    const H = O.target.value;
    x || B(H), e !== "form" && P(H);
  }, [x, e, P]), M = ie((O) => {
    const H = y.trim(), Q = {
      query: H,
      timestamp: Date.now(),
      formData: new FormData(O.currentTarget)
    };
    e === "controlled" || e === "hybrid" && R ? (O.preventDefault(), f.onSearch && H.length >= T && f.onSearch(Q)) : e === "hybrid" && f.onSearch && H.length >= T && f.onSearch(Q);
  }, [e, y, f.onSearch, R, T]), k = ie(() => {
    L(!0), f.onFocus?.();
  }, [f.onFocus]), b = ie(() => {
    L(!1), f.onBlur?.();
  }, [f.onBlur]), A = ie(() => {
    x || B(""), f.onClear?.(), v.current?.focus();
  }, [x, f.onClear]);
  Ee(() => () => {
    j.current && clearTimeout(j.current);
  }, []);
  const w = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: de("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": h
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), $ = () => /* @__PURE__ */ r.jsx(
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
  ), W = () => !y || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: A,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ r.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ r.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), I = () => !m || !g.length || !_ ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: g.map((O) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: O.href ? /* @__PURE__ */ r.jsxs("a", { href: O.href, className: "nhsuk-header__search-result-link", children: [
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
  return /* @__PURE__ */ r.jsxs("div", { className: de("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": h,
    "nhsuk-header__search--focused": _,
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
        onSubmit: M,
        ...C,
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
                ref: v,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: y,
                onChange: E,
                onFocus: k,
                onBlur: b,
                disabled: c || h,
                ...m && g.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...p
              }
            ),
            W()
          ] }),
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || h || e !== "form" && y.length < T,
              ...u,
              children: [
                h ? $() : w(),
                /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: h ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    I()
  ] });
};
function co(e, {
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
    navigation: C,
    containerClasses: p,
    variant: u = "default",
    attributes: R = {},
    maxVisibleItems: F,
    ...T
  } = e;
  "maxVisibleItems" in T && delete T.maxVisibleItems;
  const S = f.href && !c.href || f.href && f.href === c.href, B = S ? f.href : c.href, _ = de(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": u === "organisation" || h,
      "nhsuk-header--white": u === "white"
    },
    d
  ), L = de("nhsuk-header__container", "nhsuk-width-container", p), j = de(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": C?.white,
      "nhsuk-header__navigation--justified": C?.justified
    },
    C?.className
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
  ), v = () => c.src ? /* @__PURE__ */ r.jsx("img", { className: "nhsuk-header__organisation-logo", src: c.src, width: "280", alt: c.ariaLabel || "NHS" }) : D(), x = () => h ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      h.name,
      h.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        " ",
        h.split
      ] })
    ] }),
    h.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: h.descriptor })
  ] }) : null, y = (w, $) => w ? $ ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: $, children: w }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: w }) : null, P = (w) => w.active || w.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: w.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text }) : w.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text, E = () => /* @__PURE__ */ r.jsx("svg", { className: "nhsuk-icon nhsuk-icon__chevron-down", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 7", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ r.jsx("path", { d: "M1.414 0 6 4.586 10.586 0 12 1.414 6 7 0 1.414 1.414 0Z" }) }), M = F ?? 4, k = t === "server" && C?.items && C.items.length > M, b = k ? [] : C?.items, A = k ? C.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: _, role: "banner", "data-module": "nhsuk-header", ...R, ...T, children: [
    /* @__PURE__ */ r.jsxs("div", { className: L, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        B ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: B, children: [
          v(),
          x(),
          S && y(f.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          v(),
          x(),
          S && y(f.text)
        ] }),
        f.text && !S && y(f.text, f.href)
      ] }),
      m && /* @__PURE__ */ r.jsx(Jl, { ...m }),
      /* @__PURE__ */ r.jsx($l, { ...g, variant: u === "white" ? "white" : "default" })
    ] }),
    C && C.items && C.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: j, "aria-label": C.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
      "div",
      {
        className: de(
          "nhsuk-header__navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--initializing": n && t === "client",
            "nhsuk-header__navigation-container--ssr": !n
          },
          p
        ),
        children: /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-header__navigation-list", children: [
          (t === "server" ? b || [] : (C?.items || []).slice(0, s ?? (C?.items?.length || 0))).map((w, $) => /* @__PURE__ */ r.jsx(
            "li",
            {
              className: de(
                "nhsuk-header__navigation-item",
                {
                  "nhsuk-header__navigation-item--current": w.active || w.current
                },
                w.className
              ),
              ...w.attributes || {},
              children: /* @__PURE__ */ r.jsx(
                "a",
                {
                  className: "nhsuk-header__navigation-link",
                  href: w.href,
                  ...w.active || w.current ? { "aria-current": w.current ? "page" : "true" } : {},
                  children: P(w)
                }
              )
            },
            $
          )),
          t === "client" && o && s !== void 0 && C?.items && s < C.items.length && /* @__PURE__ */ r.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__navigation-button", id: "toggle-more-menu", onClick: l, type: "button", children: [
            /* @__PURE__ */ r.jsx("span", { children: "More" }),
            E()
          ] }) })
        ] })
      }
    ) }),
    t === "client" && n && C && C.items && C.items.length > 0 && a && i && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", hidden: !i, children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: C.items.slice(s ?? 0).map((w, $) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: de("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": w.active || w.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: w.href,
            ...w.active || w.current ? { "aria-current": w.current ? "page" : "true" } : {},
            onClick: () => {
              l?.();
            },
            children: P(w)
          }
        )
      },
      `overflow-${(s ?? 0) + $}`
    )) }) }),
    t === "server" && k && A.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: A.map((w, $) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: de("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": w.active || w.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: w.href,
            ...w.active || w.current ? { "aria-current": w.current ? "page" : "true" } : {},
            children: P(w)
          }
        )
      },
      `overflow-server-${$}`
    )) }) })
  ] });
}
const uo = ({
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
  const [h, m] = Ne(!1), [g] = Ne(!1), [C] = Ne(i?.items?.length || 0), [p, u] = Ne(!1), [R, F] = Ne(!1);
  Ee(() => {
    typeof window > "u" || F(!0);
  }, []), Ee(() => {
    if (typeof document > "u") return;
    const S = (B) => {
      B.key === "Escape" && h && m(!1);
    };
    if (h)
      return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [h]);
  const T = (S) => {
    S && (S.preventDefault(), S.stopPropagation());
    const B = !h;
    m(B), u(B);
  };
  return co(
    { className: e, logo: t, service: n, organisation: a, search: o, account: s, navigation: i, containerClasses: l, variant: d, attributes: c, ...f },
    {
      variant: "client",
      isClient: R,
      menuOpen: h,
      showMoreButton: g,
      visibleItems: C,
      dropdownVisible: p,
      toggleMenu: T
    }
  );
}, I0 = (e) => co(e, {
  variant: "server",
  isClient: !1
}), Ql = ({
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
  ].filter(Boolean).join(" "), g = d || e || a || o, C = () => {
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
          C(),
          d || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && g && /* @__PURE__ */ r.jsx("div", { className: h, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          C(),
          d || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Ql.displayName = "Hero";
const fo = ({
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
  const h = (g, C = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: de("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": C
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
        className: de("nhsuk-width-container", i),
        style: f,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: de("nhsuk-footer", e), style: c, children: m ? (
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
function Ln(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ec(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function La(e) {
  let t, n, a;
  e.length !== 2 ? (t = Ln, n = (l, d) => Ln(e(l), d), a = (l, d) => e(l) - d) : (t = e === Ln || e === ec ? e : tc, n = e, a = e);
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
function tc() {
  return 0;
}
function nc(e) {
  return e === null ? NaN : +e;
}
const rc = La(Ln), ac = rc.right;
La(nc).center;
function ho(e, t) {
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
const sc = Math.sqrt(50), oc = Math.sqrt(10), ic = Math.sqrt(2);
function Bn(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= sc ? 10 : s >= oc ? 5 : s >= ic ? 2 : 1;
  let l, d, c;
  return o < 0 ? (c = Math.pow(10, -o) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, o) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= n && n < 2 ? Bn(e, t, n * 2) : [l, d, c];
}
function lc(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, s, i] = a ? Bn(t, e, n) : Bn(e, t, n);
  if (!(s >= o)) return [];
  const l = s - o + 1, d = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) d[c] = (s - c) / -i;
    else for (let c = 0; c < l; ++c) d[c] = (s - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) d[c] = (o + c) / -i;
  else for (let c = 0; c < l; ++c) d[c] = (o + c) * i;
  return d;
}
function qr(e, t, n) {
  return t = +t, e = +e, n = +n, Bn(e, t, n)[2];
}
function Xr(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? qr(t, e, n) : qr(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function po(e, t) {
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
function Ma(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function mo(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function vn() {
}
var mn = 0.7, An = 1 / mn, Qt = "\\s*([+-]?\\d+)\\s*", gn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ft = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", cc = /^#([0-9a-f]{3,8})$/, dc = new RegExp(`^rgb\\(${Qt},${Qt},${Qt}\\)$`), uc = new RegExp(`^rgb\\(${ft},${ft},${ft}\\)$`), fc = new RegExp(`^rgba\\(${Qt},${Qt},${Qt},${gn}\\)$`), hc = new RegExp(`^rgba\\(${ft},${ft},${ft},${gn}\\)$`), pc = new RegExp(`^hsl\\(${gn},${ft},${ft}\\)$`), mc = new RegExp(`^hsla\\(${gn},${ft},${ft},${gn}\\)$`), os = {
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
Ma(vn, xn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: is,
  // Deprecated! Use color.formatHex.
  formatHex: is,
  formatHex8: gc,
  formatHsl: xc,
  formatRgb: ls,
  toString: ls
});
function is() {
  return this.rgb().formatHex();
}
function gc() {
  return this.rgb().formatHex8();
}
function xc() {
  return go(this).formatHsl();
}
function ls() {
  return this.rgb().formatRgb();
}
function xn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = cc.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? cs(t) : n === 3 ? new rt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Tn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Tn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = dc.exec(e)) ? new rt(t[1], t[2], t[3], 1) : (t = uc.exec(e)) ? new rt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = fc.exec(e)) ? Tn(t[1], t[2], t[3], t[4]) : (t = hc.exec(e)) ? Tn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = pc.exec(e)) ? fs(t[1], t[2] / 100, t[3] / 100, 1) : (t = mc.exec(e)) ? fs(t[1], t[2] / 100, t[3] / 100, t[4]) : os.hasOwnProperty(e) ? cs(os[e]) : e === "transparent" ? new rt(NaN, NaN, NaN, 0) : null;
}
function cs(e) {
  return new rt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Tn(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new rt(e, t, n, a);
}
function bc(e) {
  return e instanceof vn || (e = xn(e)), e ? (e = e.rgb(), new rt(e.r, e.g, e.b, e.opacity)) : new rt();
}
function Kr(e, t, n, a) {
  return arguments.length === 1 ? bc(e) : new rt(e, t, n, a ?? 1);
}
function rt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Ma(rt, Kr, mo(vn, {
  brighter(e) {
    return e = e == null ? An : Math.pow(An, e), new rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? mn : Math.pow(mn, e), new rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new rt(Ht(this.r), Ht(this.g), Ht(this.b), En(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ds,
  // Deprecated! Use color.formatHex.
  formatHex: ds,
  formatHex8: yc,
  formatRgb: us,
  toString: us
}));
function ds() {
  return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}`;
}
function yc() {
  return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}${Pt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function us() {
  const e = En(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ht(this.r)}, ${Ht(this.g)}, ${Ht(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function En(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ht(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Pt(e) {
  return e = Ht(e), (e < 16 ? "0" : "") + e.toString(16);
}
function fs(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new it(e, t, n, a);
}
function go(e) {
  if (e instanceof it) return new it(e.h, e.s, e.l, e.opacity);
  if (e instanceof vn || (e = xn(e)), !e) return new it();
  if (e instanceof it) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), s = Math.max(t, n, a), i = NaN, l = s - o, d = (s + o) / 2;
  return l ? (t === s ? i = (n - a) / l + (n < a) * 6 : n === s ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= d < 0.5 ? s + o : 2 - s - o, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new it(i, l, d, e.opacity);
}
function vc(e, t, n, a) {
  return arguments.length === 1 ? go(e) : new it(e, t, n, a ?? 1);
}
function it(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Ma(it, vc, mo(vn, {
  brighter(e) {
    return e = e == null ? An : Math.pow(An, e), new it(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? mn : Math.pow(mn, e), new it(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new rt(
      Ir(e >= 240 ? e - 240 : e + 120, o, a),
      Ir(e, o, a),
      Ir(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new it(hs(this.h), Dn(this.s), Dn(this.l), En(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = En(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${hs(this.h)}, ${Dn(this.s) * 100}%, ${Dn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function hs(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Dn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ir(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Fa = (e) => () => e;
function wc(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function _c(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function Sc(e) {
  return (e = +e) == 1 ? xo : function(t, n) {
    return n - t ? _c(t, n, e) : Fa(isNaN(t) ? n : t);
  };
}
function xo(e, t) {
  var n = t - e;
  return n ? wc(e, n) : Fa(isNaN(e) ? t : e);
}
const ps = (function e(t) {
  var n = Sc(t);
  function a(o, s) {
    var i = n((o = Kr(o)).r, (s = Kr(s)).r), l = n(o.g, s.g), d = n(o.b, s.b), c = xo(o.opacity, s.opacity);
    return function(f) {
      return o.r = i(f), o.g = l(f), o.b = d(f), o.opacity = c(f), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function kc(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Cc(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function jc(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), s = new Array(n), i;
  for (i = 0; i < a; ++i) o[i] = Ba(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Nc(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Rn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Tc(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Ba(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in n) a[o] = n[o](s);
    return a;
  };
}
var Zr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Lr = new RegExp(Zr.source, "g");
function Dc(e) {
  return function() {
    return e;
  };
}
function $c(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ic(e, t) {
  var n = Zr.lastIndex = Lr.lastIndex = 0, a, o, s, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = Zr.exec(e)) && (o = Lr.exec(t)); )
    (s = o.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, d.push({ i, x: Rn(a, o) })), n = Lr.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? d[0] ? $c(d[0].x) : Dc(t) : (t = d.length, function(c) {
    for (var f = 0, h; f < t; ++f) l[(h = d[f]).i] = h.x(c);
    return l.join("");
  });
}
function Ba(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Fa(t) : (n === "number" ? Rn : n === "string" ? (a = xn(t)) ? (t = a, ps) : Ic : t instanceof xn ? ps : t instanceof Date ? Nc : Cc(t) ? kc : Array.isArray(t) ? jc : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Tc : Rn)(e, t);
}
function Lc(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Mc(e) {
  return function() {
    return e;
  };
}
function Fc(e) {
  return +e;
}
var ms = [0, 1];
function Zt(e) {
  return e;
}
function Jr(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Mc(isNaN(t) ? NaN : 0.5);
}
function Bc(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Ac(e, t, n) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = Jr(o, a), s = n(i, s)) : (a = Jr(a, o), s = n(s, i)), function(l) {
    return s(a(l));
  };
}
function Ec(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = Jr(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var d = ac(e, l, 1, a) - 1;
    return s[d](o[d](l));
  };
}
function bo(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Rc() {
  var e = ms, t = ms, n = Ba, a, o, s, i = Zt, l, d, c;
  function f() {
    var m = Math.min(e.length, t.length);
    return i !== Zt && (i = Bc(e[0], e[m - 1])), l = m > 2 ? Ec : Ac, d = c = null, h;
  }
  function h(m) {
    return m == null || isNaN(m = +m) ? s : (d || (d = l(e.map(a), t, n)))(a(i(m)));
  }
  return h.invert = function(m) {
    return i(o((c || (c = l(t, e.map(a), Rn)))(m)));
  }, h.domain = function(m) {
    return arguments.length ? (e = Array.from(m, Fc), f()) : e.slice();
  }, h.range = function(m) {
    return arguments.length ? (t = Array.from(m), f()) : t.slice();
  }, h.rangeRound = function(m) {
    return t = Array.from(m), n = Lc, f();
  }, h.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : Zt, f()) : i !== Zt;
  }, h.interpolate = function(m) {
    return arguments.length ? (n = m, f()) : n;
  }, h.unknown = function(m) {
    return arguments.length ? (s = m, h) : s;
  }, function(m, g) {
    return a = m, o = g, f();
  };
}
function yo() {
  return Rc()(Zt, Zt);
}
function Pc(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Pn(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function tn(e) {
  return e = Pn(Math.abs(e)), e ? e[1] : NaN;
}
function Hc(e, t) {
  return function(n, a) {
    for (var o = n.length, s = [], i = 0, l = e[0], d = 0; o > 0 && l > 0 && (d + l + 1 > a && (l = Math.max(1, a - d)), s.push(n.substring(o -= l, o + l)), !((d += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function zc(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Wc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Hn(e) {
  if (!(t = Wc.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Aa({
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
Hn.prototype = Aa.prototype;
function Aa(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Aa.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Oc(e) {
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
var vo;
function Uc(e, t) {
  var n = Pn(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], s = o - (vo = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return s === i ? a : s > i ? a + new Array(s - i + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Pn(e, Math.max(0, t + s - 1))[0];
}
function gs(e, t) {
  var n = Pn(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const xs = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Pc,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => gs(e * 100, t),
  r: gs,
  s: Uc,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function bs(e) {
  return e;
}
var ys = Array.prototype.map, vs = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Gc(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? bs : Hc(ys.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? bs : zc(ys.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(h) {
    h = Hn(h);
    var m = h.fill, g = h.align, C = h.sign, p = h.symbol, u = h.zero, R = h.width, F = h.comma, T = h.precision, S = h.trim, B = h.type;
    B === "n" ? (F = !0, B = "g") : xs[B] || (T === void 0 && (T = 12), S = !0, B = "g"), (u || m === "0" && g === "=") && (u = !0, m = "0", g = "=");
    var _ = p === "$" ? n : p === "#" && /[boxX]/.test(B) ? "0" + B.toLowerCase() : "", L = p === "$" ? a : /[%p]/.test(B) ? i : "", j = xs[B], D = /[defgprs%]/.test(B);
    T = T === void 0 ? 6 : /[gprs]/.test(B) ? Math.max(1, Math.min(21, T)) : Math.max(0, Math.min(20, T));
    function v(x) {
      var y = _, P = L, E, M, k;
      if (B === "c")
        P = j(x) + P, x = "";
      else {
        x = +x;
        var b = x < 0 || 1 / x < 0;
        if (x = isNaN(x) ? d : j(Math.abs(x), T), S && (x = Oc(x)), b && +x == 0 && C !== "+" && (b = !1), y = (b ? C === "(" ? C : l : C === "-" || C === "(" ? "" : C) + y, P = (B === "s" ? vs[8 + vo / 3] : "") + P + (b && C === "(" ? ")" : ""), D) {
          for (E = -1, M = x.length; ++E < M; )
            if (k = x.charCodeAt(E), 48 > k || k > 57) {
              P = (k === 46 ? o + x.slice(E + 1) : x.slice(E)) + P, x = x.slice(0, E);
              break;
            }
        }
      }
      F && !u && (x = t(x, 1 / 0));
      var A = y.length + x.length + P.length, w = A < R ? new Array(R - A + 1).join(m) : "";
      switch (F && u && (x = t(w + x, w.length ? R - P.length : 1 / 0), w = ""), g) {
        case "<":
          x = y + x + P + w;
          break;
        case "=":
          x = y + w + x + P;
          break;
        case "^":
          x = w.slice(0, A = w.length >> 1) + y + x + P + w.slice(A);
          break;
        default:
          x = w + y + x + P;
          break;
      }
      return s(x);
    }
    return v.toString = function() {
      return h + "";
    }, v;
  }
  function f(h, m) {
    var g = c((h = Hn(h), h.type = "f", h)), C = Math.max(-8, Math.min(8, Math.floor(tn(m) / 3))) * 3, p = Math.pow(10, -C), u = vs[8 + C / 3];
    return function(R) {
      return g(p * R) + u;
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var $n, wo, _o;
Yc({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Yc(e) {
  return $n = Gc(e), wo = $n.format, _o = $n.formatPrefix, $n;
}
function Vc(e) {
  return Math.max(0, -tn(Math.abs(e)));
}
function qc(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(tn(t) / 3))) * 3 - tn(Math.abs(e)));
}
function Xc(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, tn(t) - tn(e)) + 1;
}
function Kc(e, t, n, a) {
  var o = Xr(e, t, n), s;
  switch (a = Hn(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = qc(o, i)) && (a.precision = s), _o(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = Xc(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = Vc(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return wo(a);
}
function Zc(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return lc(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return Kc(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, s = a.length - 1, i = a[o], l = a[s], d, c, f = 10;
    for (l < i && (c = i, i = l, l = c, c = o, o = s, s = c); f-- > 0; ) {
      if (c = qr(i, l, n), c === d)
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
function Qr() {
  var e = yo();
  return e.copy = function() {
    return bo(e, Qr());
  }, po.apply(e, arguments), Zc(e);
}
function Jc(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], s = e[a], i;
  return s < o && (i = n, n = a, a = i, i = o, o = s, s = i), e[n] = t.floor(o), e[a] = t.ceil(s), e;
}
const Mr = /* @__PURE__ */ new Date(), Fr = /* @__PURE__ */ new Date();
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
  }), n && (o.count = (s, i) => (Mr.setTime(+s), Fr.setTime(+i), e(Mr), e(Fr), Math.floor(n(Mr, Fr))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const zn = Ye(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
zn.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ye((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : zn);
zn.range;
const Ct = 1e3, ot = Ct * 60, jt = ot * 60, Tt = jt * 24, Ea = Tt * 7, ws = Tt * 30, Br = Tt * 365, Jt = Ye((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ct);
}, (e, t) => (t - e) / Ct, (e) => e.getUTCSeconds());
Jt.range;
const Ra = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ct);
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getMinutes());
Ra.range;
const Qc = Ye((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getUTCMinutes());
Qc.range;
const Pa = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ct - e.getMinutes() * ot);
}, (e, t) => {
  e.setTime(+e + t * jt);
}, (e, t) => (t - e) / jt, (e) => e.getHours());
Pa.range;
const ed = Ye((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * jt);
}, (e, t) => (t - e) / jt, (e) => e.getUTCHours());
ed.range;
const wn = Ye(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ot) / Tt,
  (e) => e.getDate() - 1
);
wn.range;
const Ha = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Tt, (e) => e.getUTCDate() - 1);
Ha.range;
const td = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Tt, (e) => Math.floor(e / Tt));
td.range;
function Ut(e) {
  return Ye((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ot) / Ea);
}
const yr = Ut(0), Wn = Ut(1), nd = Ut(2), rd = Ut(3), nn = Ut(4), ad = Ut(5), sd = Ut(6);
yr.range;
Wn.range;
nd.range;
rd.range;
nn.range;
ad.range;
sd.range;
function Gt(e) {
  return Ye((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Ea);
}
const So = Gt(0), On = Gt(1), od = Gt(2), id = Gt(3), rn = Gt(4), ld = Gt(5), cd = Gt(6);
So.range;
On.range;
od.range;
id.range;
rn.range;
ld.range;
cd.range;
const bn = Ye((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
bn.range;
const dd = Ye((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
dd.range;
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
const Ot = Ye((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Ot.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ye((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
Ot.range;
function ud(e, t, n, a, o, s) {
  const i = [
    [Jt, 1, Ct],
    [Jt, 5, 5 * Ct],
    [Jt, 15, 15 * Ct],
    [Jt, 30, 30 * Ct],
    [s, 1, ot],
    [s, 5, 5 * ot],
    [s, 15, 15 * ot],
    [s, 30, 30 * ot],
    [o, 1, jt],
    [o, 3, 3 * jt],
    [o, 6, 6 * jt],
    [o, 12, 12 * jt],
    [a, 1, Tt],
    [a, 2, 2 * Tt],
    [n, 1, Ea],
    [t, 1, ws],
    [t, 3, 3 * ws],
    [e, 1, Br]
  ];
  function l(c, f, h) {
    const m = f < c;
    m && ([c, f] = [f, c]);
    const g = h && typeof h.range == "function" ? h : d(c, f, h), C = g ? g.range(c, +f + 1) : [];
    return m ? C.reverse() : C;
  }
  function d(c, f, h) {
    const m = Math.abs(f - c) / h, g = La(([, , u]) => u).right(i, m);
    if (g === i.length) return e.every(Xr(c / Br, f / Br, h));
    if (g === 0) return zn.every(Math.max(Xr(c, f, h), 1));
    const [C, p] = i[m / i[g - 1][2] < i[g][2] / m ? g - 1 : g];
    return C.every(p);
  }
  return [l, d];
}
const [fd, hd] = ud(Dt, bn, yr, wn, Pa, Ra);
function Ar(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Er(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function dn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function pd(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = un(o), f = fn(o), h = un(s), m = fn(s), g = un(i), C = fn(i), p = un(l), u = fn(l), R = un(d), F = fn(d), T = {
    a: b,
    A,
    b: w,
    B: $,
    c: null,
    d: Ns,
    e: Ns,
    f: Ed,
    g: Vd,
    G: Xd,
    H: Fd,
    I: Bd,
    j: Ad,
    L: ko,
    m: Rd,
    M: Pd,
    p: W,
    q: I,
    Q: $s,
    s: Is,
    S: Hd,
    u: zd,
    U: Wd,
    V: Od,
    w: Ud,
    W: Gd,
    x: null,
    X: null,
    y: Yd,
    Y: qd,
    Z: Kd,
    "%": Ds
  }, S = {
    a: O,
    A: H,
    b: Q,
    B: fe,
    c: null,
    d: Ts,
    e: Ts,
    f: eu,
    g: du,
    G: fu,
    H: Zd,
    I: Jd,
    j: Qd,
    L: jo,
    m: tu,
    M: nu,
    p: oe,
    q: K,
    Q: $s,
    s: Is,
    S: ru,
    u: au,
    U: su,
    V: ou,
    w: iu,
    W: lu,
    x: null,
    X: null,
    y: cu,
    Y: uu,
    Z: hu,
    "%": Ds
  }, B = {
    a: v,
    A: x,
    b: y,
    B: P,
    c: E,
    d: Cs,
    e: Cs,
    f: $d,
    g: ks,
    G: Ss,
    H: js,
    I: js,
    j: jd,
    L: Dd,
    m: Cd,
    M: Nd,
    p: D,
    q: kd,
    Q: Ld,
    s: Md,
    S: Td,
    u: yd,
    U: vd,
    V: wd,
    w: bd,
    W: _d,
    x: M,
    X: k,
    y: ks,
    Y: Ss,
    Z: Sd,
    "%": Id
  };
  T.x = _(n, T), T.X = _(a, T), T.c = _(t, T), S.x = _(n, S), S.X = _(a, S), S.c = _(t, S);
  function _(V, J) {
    return function(ae) {
      var G = [], me = -1, he = 0, xe = V.length, pe, be, We;
      for (ae instanceof Date || (ae = /* @__PURE__ */ new Date(+ae)); ++me < xe; )
        V.charCodeAt(me) === 37 && (G.push(V.slice(he, me)), (be = _s[pe = V.charAt(++me)]) != null ? pe = V.charAt(++me) : be = pe === "e" ? " " : "0", (We = J[pe]) && (pe = We(ae, be)), G.push(pe), he = me + 1);
      return G.push(V.slice(he, me)), G.join("");
    };
  }
  function L(V, J) {
    return function(ae) {
      var G = dn(1900, void 0, 1), me = j(G, V, ae += "", 0), he, xe;
      if (me != ae.length) return null;
      if ("Q" in G) return new Date(G.Q);
      if ("s" in G) return new Date(G.s * 1e3 + ("L" in G ? G.L : 0));
      if (J && !("Z" in G) && (G.Z = 0), "p" in G && (G.H = G.H % 12 + G.p * 12), G.m === void 0 && (G.m = "q" in G ? G.q : 0), "V" in G) {
        if (G.V < 1 || G.V > 53) return null;
        "w" in G || (G.w = 1), "Z" in G ? (he = Er(dn(G.y, 0, 1)), xe = he.getUTCDay(), he = xe > 4 || xe === 0 ? On.ceil(he) : On(he), he = Ha.offset(he, (G.V - 1) * 7), G.y = he.getUTCFullYear(), G.m = he.getUTCMonth(), G.d = he.getUTCDate() + (G.w + 6) % 7) : (he = Ar(dn(G.y, 0, 1)), xe = he.getDay(), he = xe > 4 || xe === 0 ? Wn.ceil(he) : Wn(he), he = wn.offset(he, (G.V - 1) * 7), G.y = he.getFullYear(), G.m = he.getMonth(), G.d = he.getDate() + (G.w + 6) % 7);
      } else ("W" in G || "U" in G) && ("w" in G || (G.w = "u" in G ? G.u % 7 : "W" in G ? 1 : 0), xe = "Z" in G ? Er(dn(G.y, 0, 1)).getUTCDay() : Ar(dn(G.y, 0, 1)).getDay(), G.m = 0, G.d = "W" in G ? (G.w + 6) % 7 + G.W * 7 - (xe + 5) % 7 : G.w + G.U * 7 - (xe + 6) % 7);
      return "Z" in G ? (G.H += G.Z / 100 | 0, G.M += G.Z % 100, Er(G)) : Ar(G);
    };
  }
  function j(V, J, ae, G) {
    for (var me = 0, he = J.length, xe = ae.length, pe, be; me < he; ) {
      if (G >= xe) return -1;
      if (pe = J.charCodeAt(me++), pe === 37) {
        if (pe = J.charAt(me++), be = B[pe in _s ? J.charAt(me++) : pe], !be || (G = be(V, ae, G)) < 0) return -1;
      } else if (pe != ae.charCodeAt(G++))
        return -1;
    }
    return G;
  }
  function D(V, J, ae) {
    var G = c.exec(J.slice(ae));
    return G ? (V.p = f.get(G[0].toLowerCase()), ae + G[0].length) : -1;
  }
  function v(V, J, ae) {
    var G = g.exec(J.slice(ae));
    return G ? (V.w = C.get(G[0].toLowerCase()), ae + G[0].length) : -1;
  }
  function x(V, J, ae) {
    var G = h.exec(J.slice(ae));
    return G ? (V.w = m.get(G[0].toLowerCase()), ae + G[0].length) : -1;
  }
  function y(V, J, ae) {
    var G = R.exec(J.slice(ae));
    return G ? (V.m = F.get(G[0].toLowerCase()), ae + G[0].length) : -1;
  }
  function P(V, J, ae) {
    var G = p.exec(J.slice(ae));
    return G ? (V.m = u.get(G[0].toLowerCase()), ae + G[0].length) : -1;
  }
  function E(V, J, ae) {
    return j(V, t, J, ae);
  }
  function M(V, J, ae) {
    return j(V, n, J, ae);
  }
  function k(V, J, ae) {
    return j(V, a, J, ae);
  }
  function b(V) {
    return i[V.getDay()];
  }
  function A(V) {
    return s[V.getDay()];
  }
  function w(V) {
    return d[V.getMonth()];
  }
  function $(V) {
    return l[V.getMonth()];
  }
  function W(V) {
    return o[+(V.getHours() >= 12)];
  }
  function I(V) {
    return 1 + ~~(V.getMonth() / 3);
  }
  function O(V) {
    return i[V.getUTCDay()];
  }
  function H(V) {
    return s[V.getUTCDay()];
  }
  function Q(V) {
    return d[V.getUTCMonth()];
  }
  function fe(V) {
    return l[V.getUTCMonth()];
  }
  function oe(V) {
    return o[+(V.getUTCHours() >= 12)];
  }
  function K(V) {
    return 1 + ~~(V.getUTCMonth() / 3);
  }
  return {
    format: function(V) {
      var J = _(V += "", T);
      return J.toString = function() {
        return V;
      }, J;
    },
    parse: function(V) {
      var J = L(V += "", !1);
      return J.toString = function() {
        return V;
      }, J;
    },
    utcFormat: function(V) {
      var J = _(V += "", S);
      return J.toString = function() {
        return V;
      }, J;
    },
    utcParse: function(V) {
      var J = L(V += "", !0);
      return J.toString = function() {
        return V;
      }, J;
    }
  };
}
var _s = { "-": "", _: " ", 0: "0" }, Ke = /^\s*\d+/, md = /^%/, gd = /[\\^$*+?|[\]().{}]/g;
function $e(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function xd(e) {
  return e.replace(gd, "\\$&");
}
function un(e) {
  return new RegExp("^(?:" + e.map(xd).join("|") + ")", "i");
}
function fn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function bd(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function yd(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function vd(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function wd(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function _d(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Ss(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function ks(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function Sd(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function kd(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Cd(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Cs(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function jd(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function js(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function Nd(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Td(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Dd(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function $d(e, t, n) {
  var a = Ke.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Id(e, t, n) {
  var a = md.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Ld(e, t, n) {
  var a = Ke.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Md(e, t, n) {
  var a = Ke.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Ns(e, t) {
  return $e(e.getDate(), t, 2);
}
function Fd(e, t) {
  return $e(e.getHours(), t, 2);
}
function Bd(e, t) {
  return $e(e.getHours() % 12 || 12, t, 2);
}
function Ad(e, t) {
  return $e(1 + wn.count(Dt(e), e), t, 3);
}
function ko(e, t) {
  return $e(e.getMilliseconds(), t, 3);
}
function Ed(e, t) {
  return ko(e, t) + "000";
}
function Rd(e, t) {
  return $e(e.getMonth() + 1, t, 2);
}
function Pd(e, t) {
  return $e(e.getMinutes(), t, 2);
}
function Hd(e, t) {
  return $e(e.getSeconds(), t, 2);
}
function zd(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Wd(e, t) {
  return $e(yr.count(Dt(e) - 1, e), t, 2);
}
function Co(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? nn(e) : nn.ceil(e);
}
function Od(e, t) {
  return e = Co(e), $e(nn.count(Dt(e), e) + (Dt(e).getDay() === 4), t, 2);
}
function Ud(e) {
  return e.getDay();
}
function Gd(e, t) {
  return $e(Wn.count(Dt(e) - 1, e), t, 2);
}
function Yd(e, t) {
  return $e(e.getFullYear() % 100, t, 2);
}
function Vd(e, t) {
  return e = Co(e), $e(e.getFullYear() % 100, t, 2);
}
function qd(e, t) {
  return $e(e.getFullYear() % 1e4, t, 4);
}
function Xd(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? nn(e) : nn.ceil(e), $e(e.getFullYear() % 1e4, t, 4);
}
function Kd(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + $e(t / 60 | 0, "0", 2) + $e(t % 60, "0", 2);
}
function Ts(e, t) {
  return $e(e.getUTCDate(), t, 2);
}
function Zd(e, t) {
  return $e(e.getUTCHours(), t, 2);
}
function Jd(e, t) {
  return $e(e.getUTCHours() % 12 || 12, t, 2);
}
function Qd(e, t) {
  return $e(1 + Ha.count(Ot(e), e), t, 3);
}
function jo(e, t) {
  return $e(e.getUTCMilliseconds(), t, 3);
}
function eu(e, t) {
  return jo(e, t) + "000";
}
function tu(e, t) {
  return $e(e.getUTCMonth() + 1, t, 2);
}
function nu(e, t) {
  return $e(e.getUTCMinutes(), t, 2);
}
function ru(e, t) {
  return $e(e.getUTCSeconds(), t, 2);
}
function au(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function su(e, t) {
  return $e(So.count(Ot(e) - 1, e), t, 2);
}
function No(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? rn(e) : rn.ceil(e);
}
function ou(e, t) {
  return e = No(e), $e(rn.count(Ot(e), e) + (Ot(e).getUTCDay() === 4), t, 2);
}
function iu(e) {
  return e.getUTCDay();
}
function lu(e, t) {
  return $e(On.count(Ot(e) - 1, e), t, 2);
}
function cu(e, t) {
  return $e(e.getUTCFullYear() % 100, t, 2);
}
function du(e, t) {
  return e = No(e), $e(e.getUTCFullYear() % 100, t, 2);
}
function uu(e, t) {
  return $e(e.getUTCFullYear() % 1e4, t, 4);
}
function fu(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? rn(e) : rn.ceil(e), $e(e.getUTCFullYear() % 1e4, t, 4);
}
function hu() {
  return "+0000";
}
function Ds() {
  return "%";
}
function $s(e) {
  return +e;
}
function Is(e) {
  return Math.floor(+e / 1e3);
}
var qt, To;
pu({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function pu(e) {
  return qt = pd(e), To = qt.format, qt.parse, qt.utcFormat, qt.utcParse, qt;
}
function mu(e) {
  return new Date(e);
}
function gu(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Do(e, t, n, a, o, s, i, l, d, c) {
  var f = yo(), h = f.invert, m = f.domain, g = c(".%L"), C = c(":%S"), p = c("%I:%M"), u = c("%I %p"), R = c("%a %d"), F = c("%b %d"), T = c("%B"), S = c("%Y");
  function B(_) {
    return (d(_) < _ ? g : l(_) < _ ? C : i(_) < _ ? p : s(_) < _ ? u : a(_) < _ ? o(_) < _ ? R : F : n(_) < _ ? T : S)(_);
  }
  return f.invert = function(_) {
    return new Date(h(_));
  }, f.domain = function(_) {
    return arguments.length ? m(Array.from(_, gu)) : m().map(mu);
  }, f.ticks = function(_) {
    var L = m();
    return e(L[0], L[L.length - 1], _ ?? 10);
  }, f.tickFormat = function(_, L) {
    return L == null ? B : c(L);
  }, f.nice = function(_) {
    var L = m();
    return (!_ || typeof _.range != "function") && (_ = t(L[0], L[L.length - 1], _ ?? 10)), _ ? m(Jc(L, _)) : f;
  }, f.copy = function() {
    return bo(f, Do(e, t, n, a, o, s, i, l, d, c));
  }, f;
}
function za() {
  return po.apply(Do(fd, hd, Dt, bn, yr, wn, Pa, Ra, Jt, To).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function xu({
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
  const c = Ie(null), [f, h] = Ne(!1), [m, g] = Ne(!1), C = t(e.start), p = t(e.end), u = Math.max(p - C, 20), R = () => {
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
  }, S = () => {
    a?.(e);
  }, B = (y) => {
    y.key === "Enter" ? (y.preventDefault(), T()) : y.key === " " && (y.preventDefault(), S());
  }, _ = () => {
    h(!0);
  }, L = () => {
    h(!1);
  }, j = () => {
    g(!0), l?.();
  }, D = () => {
    g(!1);
  }, v = [
    "gantt-task-bar",
    f && "gantt-task-bar--pressed",
    (m || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), x = {
    "--task-left": `${C}px`,
    "--task-width": `${u}px`,
    "--task-color": R(),
    left: `${C}px`,
    width: `${u}px`,
    backgroundColor: R()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": s,
      className: v,
      style: x,
      onClick: T,
      onDoubleClick: S,
      onKeyDown: B,
      onMouseDown: _,
      onMouseUp: L,
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
function bu({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let g = e.getTime(); g <= t.getTime(); g += 864e5)
    a.push(new Date(g));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = Ne(-1), d = Ie(null), c = (g) => {
    if (g.key === "ArrowLeft") {
      g.preventDefault();
      const C = Math.max(0, i === -1 ? 0 : i - 1);
      l(C), m(C);
    } else if (g.key === "ArrowRight") {
      g.preventDefault();
      const C = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(C), m(C);
    } else if (g.key === "ArrowDown") {
      g.preventDefault();
      const C = document.querySelector(".gantt-row .timeline-container");
      C && C.focus();
    } else if (g.key === "Home")
      g.preventDefault(), l(0), m(0);
    else if (g.key === "End") {
      g.preventDefault();
      const C = a.length - 1;
      l(C), m(C);
    }
  }, f = (g) => {
    if (g.key === "ArrowDown") {
      g.preventDefault();
      const C = document.querySelector(".gantt-row .resource-label");
      C && C.focus();
    } else if (g.key === "ArrowRight") {
      g.preventDefault();
      const C = d.current;
      C && C.focus();
    }
  }, h = () => {
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (g) => {
    const C = d.current?.querySelector(`[data-date-index="${g}"]`);
    C && C.focus();
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
            children: a.map((g, C) => {
              const p = g.getTime() === s.getTime(), u = i === C;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": C,
                  className: `date-column ${p ? "today" : ""} ${u ? "focused" : ""}`,
                  tabIndex: u ? 0 : -1,
                  role: "button",
                  "aria-label": `${g.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${p ? " (Today)" : ""}`,
                  onFocus: () => l(C),
                  onKeyDown: c,
                  children: g.toLocaleDateString("en-GB", {
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
function yu({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, d] = Ne(!1), [c, f] = Ne(-1), h = Ie(null);
  Ee(() => {
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
  }, C = (p) => {
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
              xu,
              {
                task: p,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && c === u,
                taskIndex: u,
                tabIndex: l && c === u ? 0 : -1,
                onFocus: () => C(u)
              },
              p.id
            ))
          }
        )
      ]
    }
  );
}
function L0({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Ie(null), [l, d] = Ne(800), c = je(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const p = new Date(n);
    return isNaN(p.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : p;
  }, [n]), f = je(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const p = new Date(a);
    return isNaN(p.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : p;
  }, [a]), h = je(() => Math.ceil((f.getTime() - c.getTime()) / 864e5) + 1, [c, f]);
  Ee(() => {
    if (!i.current) return;
    const p = new ResizeObserver((u) => {
      const R = u[0];
      R && d(Math.max(R.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const m = je(
    () => za().domain([c, f]).range([0, l]),
    [c, f, l]
  ), g = je(() => {
    const p = /* @__PURE__ */ new Map();
    return t.forEach((u) => {
      const R = p.get(u.resourceId) || [];
      R.push(u), p.set(u.resourceId, R);
    }), p;
  }, [t]), C = (p) => {
    if (p.target === p.currentTarget)
      switch (p.key) {
        case "ArrowDown":
          p.preventDefault();
          const u = i.current?.querySelector(".gantt-row .resource-label");
          u && u.focus();
          break;
        case "Home":
          p.preventDefault();
          const R = i.current?.querySelector(".header-resource");
          R && R.focus();
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
      onKeyDown: C,
      children: [
        /* @__PURE__ */ r.jsx(bu, { viewStart: c, viewEnd: f, dateCount: h }),
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
              yu,
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
const Un = ({
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
) }), vu = ({
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
    (u) => at.isValidElement(u) && (u.type === Un || u.type?.displayName === "BreadcrumbItem")
  ).map((u) => ({
    text: typeof u.props.children == "string" ? u.props.children : String(u.props.children),
    href: u.props.href,
    active: u.props.active,
    attributes: u.props.attributes
  })) : [], c = () => t ? d() : o && s ? [{ href: o, text: s }] : e, f = () => {
    const p = c();
    if (p && p.length > 0) {
      const u = p.slice().reverse().find((R) => R.href && !R.active);
      if (u)
        return { href: u.href, text: u.text };
    }
    return { text: "Home" };
  }, h = c(), m = f(), g = de(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), C = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: g,
      "aria-label": C,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          at.Children.map(t, (p, u) => at.isValidElement(p) && (p.type === Un || p.type?.displayName === "BreadcrumbItem") ? at.cloneElement(p, { key: u }) : null)
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
}, wu = vu;
wu.Item = Un;
Un.displayName = "BreadcrumbItem";
const $o = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [o, s] = Ne(!1);
  Ee(() => {
    s(!0);
  }, []), Ee(() => {
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
  const i = de("nhsuk-skip-link", n);
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
}, M0 = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = de("nhsuk-pagination", o);
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
}, F0 = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = de("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
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
}, Io = at.forwardRef(({
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
  ].filter(Boolean).join(" "), C = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), p = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const F = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Nt,
      {
        level: a,
        className: C,
        children: F()
      }
    );
  }, u = () => f.children ? f.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: s }) : null, R = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
          R()
        ] })
      ]
    }
  );
});
Io.displayName = "Card";
const B0 = ({
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
}, A0 = ({
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
}, E0 = ({
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
  const C = [
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
      Nt,
      {
        level: a,
        className: p,
        children: T
      }
    );
  }, R = () => d || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: C,
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
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: R() })
      ]
    }
  );
}, _u = ({
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
  const c = de(
    "nhsuk-panel",
    t
  ), f = () => !n && !a && !l ? null : a ? /* @__PURE__ */ r.jsx(
    Nt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    Nt,
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
}, R0 = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...o
}) => {
  const s = de("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...o, children: i() });
}, P0 = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const o = de(
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
}, H0 = ({
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
  const C = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), p = de(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    f
  ), u = de(h), R = (S, B) => {
    const _ = de("nhsuk-table__header", {
      [`nhsuk-table__header--${S.format}`]: S.format
    }, S.classes), L = {
      scope: "col",
      ...S.colspan && { colSpan: S.colspan },
      ...S.rowspan && { rowSpan: S.rowspan },
      ...s && { role: "columnheader" },
      ...S.attributes
    };
    return /* @__PURE__ */ r.jsx("th", { className: _, ...L, children: S.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text }, B);
  }, F = (S, B, _) => {
    const L = o && _, j = de(
      L ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${L ? "header" : "cell"}--${S.format}`]: S.format
      },
      S.classes
    ), D = {
      ...L && { scope: "row" },
      ...S.colspan && { colSpan: S.colspan },
      ...S.rowspan && { rowSpan: S.rowspan },
      ...s && {
        role: L ? "rowheader" : "cell",
        ...S.header && { "data-label": S.header }
      },
      ...S.attributes
    }, v = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && S.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        S.header,
        " "
      ] }),
      S.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text
    ] }), x = L ? "th" : "td";
    return /* @__PURE__ */ r.jsx(x, { className: j, ...D, children: v }, B);
  }, T = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: p,
      ...s && { role: "table" },
      ...m,
      ...g && { "data-testid": g },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: C, children: n }),
        t && t.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: t.map((S, B) => R(S, B)) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((S, B) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: S.map(
              (_, L) => F(_, L, L === 0)
            )
          },
          B
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ r.jsxs(_u, { className: c, children: [
    i && /* @__PURE__ */ r.jsx(Nt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    T()
  ] }) : u ? /* @__PURE__ */ r.jsx("div", { className: u, children: T() }) : T();
}, z0 = an(({
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
  const g = n !== void 0, [C, p] = Ne(() => t || e[0]?.id || ""), u = g ? n : C, R = Ie(null), F = Ie(/* @__PURE__ */ new Map()), T = ie((v) => {
    g || p(v), a?.(v);
  }, [g, a]), S = ie((v) => {
    o?.(v), l && T(v);
  }, [o, l, T]), B = ie((v, x) => {
    const y = e.filter((M) => !M.disabled).map((M) => M.id), P = y.indexOf(x);
    let E = null;
    switch (v.key) {
      case "ArrowLeft":
        E = P > 0 ? P - 1 : y.length - 1;
        break;
      case "ArrowRight":
        E = P < y.length - 1 ? P + 1 : 0;
        break;
      case "Home":
        E = 0;
        break;
      case "End":
        E = y.length - 1;
        break;
      case "Escape":
        v.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (E !== null) {
      v.preventDefault();
      const M = y[E], k = F.current.get(M);
      k && (k.focus(), S(M));
    }
  }, [e, S, i]), _ = ie((v, x) => {
    x ? F.current.set(v, x) : F.current.delete(v);
  }, []), L = ie((v) => {
    const x = F.current.get(v);
    x && x.focus();
  }, []);
  to(m, () => ({
    focusTab: L,
    getActiveTab: () => u,
    getTabListElement: () => R.current
  }), [L, u]);
  const j = ie((v) => {
    const x = v.relatedTarget;
    R.current?.contains(x) || s?.();
  }, [s]), D = de("nhsuk-tabs", d);
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
            ref: R,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: j,
                children: e.map((v) => {
                  const x = v.id === u, y = v.disabled, P = de("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": x,
                    "nhsuk-tabs__list-item--disabled": y
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: P, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (E) => _(v.id, E),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": x,
                      "aria-controls": `${v.id}-panel`,
                      id: `${v.id}-tab`,
                      tabIndex: x ? 0 : -1,
                      disabled: y,
                      onClick: () => !y && T(v.id),
                      onKeyDown: (E) => !y && B(E, v.id),
                      onFocus: () => !y && S(v.id),
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
          const x = v.id === u;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${v.id}-tab`,
              id: `${v.id}-panel`,
              hidden: !x,
              children: v.content
            },
            v.id
          );
        })
      ]
    }
  );
}), Su = an(
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
Su.displayName = "Details";
const ku = an(
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
      Nt,
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
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: c.join(" "), role: "list", children: n.map((g, C) => /* @__PURE__ */ r.jsxs("li", { children: [
            f(),
            h(g.item)
          ] }, C)) }) })
        ]
      }
    );
  }
);
ku.displayName = "DoDontList";
const Cu = an(
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
Cu.displayName = "Expander";
const ju = an(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, f = `${t}-${c}-hint`, h = `${t}-${c}-status`, m = !!l.href, g = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), C = [
        l.hint && f,
        h
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        Nu,
        {
          item: l,
          itemClasses: g,
          hasLink: m,
          hintId: f,
          statusId: h,
          ariaDescribedBy: C
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
), Nu = ({
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
ju.displayName = "TaskList";
const W0 = ({
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
        eo(
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
}, O0 = ({
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
}, Tu = ({
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
      Fn,
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
      Fn,
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
] }), Du = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(et, { color: $u(n.status), text: n.label }) }, n.status)) });
function $u(e) {
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
const U0 = ({
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
  legendPlacement: C = "bottom",
  onA11yModeChange: p
}) => {
  const [u, R] = Ne("grid"), F = i || u, [T, S] = Ne(a || []), B = n ?? T, _ = je(() => {
    const E = /* @__PURE__ */ new Set();
    return e.forEach((M) => E.add(new Date(M.start).getTime())), Array.from(E).sort((M, k) => M - k);
  }, [e]), L = je(() => {
    const E = {};
    return e.forEach((M) => {
      const k = new Date(M.start).getTime();
      E[k] || (E[k] = {});
      const b = M.capacity - M.booked - (M.held || 0);
      E[k][M.sessionId] = { slot: M, remaining: b };
    }), E;
  }, [e]), j = ie((E) => {
    if (s === "single") {
      const M = [E.id];
      n || S(M), o?.(M, { lastAction: "select" });
    } else {
      const M = B.includes(E.id), k = M ? B.filter((b) => b !== E.id) : [...B, E.id];
      n || S(k), o?.(k, { lastAction: M ? "deselect" : "select" });
    }
  }, [s, B, n, o]), D = je(() => m || (g ? Array.from(new Set(e.map((M) => M.status))).map((M) => ({
    status: M,
    label: M.charAt(0).toUpperCase() + M.slice(1)
  })) : void 0), [m, g, e]), v = D ? /* @__PURE__ */ r.jsx(
    Du,
    {
      items: D,
      orientation: C === "left" || C === "right" ? "vertical" : "horizontal"
    }
  ) : null, x = (E) => {
    i || R(E), p?.(E);
  }, y = f || (h ? /* @__PURE__ */ r.jsx(
    Tu,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: F,
      onA11yModeChange: x
    }
  ) : null), P = /* @__PURE__ */ r.jsx("div", { style: d, className: de(l), children: /* @__PURE__ */ r.jsx(Vr, { className: de("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Wt, { children: /* @__PURE__ */ r.jsx(pn, { width: "full", children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    y,
    C === "top" && v,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((E) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => j(E), "aria-pressed": B.includes(E.id), children: [
      hn(new Date(E.start)),
      " – ",
      hn(new Date(E.end)),
      " (",
      E.status,
      ")"
    ] }) }, E.id)) }),
    C === "bottom" && v
  ] }) }) }) }) });
  return F === "list" ? P : /* @__PURE__ */ r.jsx("div", { style: d, className: de(l), children: /* @__PURE__ */ r.jsx(Vr, { className: de("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Wt, { children: /* @__PURE__ */ r.jsx(pn, { width: "full", children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    y,
    C === "top" && v,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": _.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((E) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${E.specialty}`, className: "nhs-slot-matrix__session-header", children: E.specialty }, E.id))
      ] }),
      _.map((E) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": hn(new Date(E)), children: hn(new Date(E)) }),
        t.map((M) => {
          const k = L[E]?.[M.id];
          if (!k)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, M.id);
          const { slot: b, remaining: A } = k, w = B.includes(b.id), $ = c ? c(b) : `Slot ${hn(new Date(b.start))} ${b.status}${A === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": b.status,
              className: de("nhs-slot-matrix__cell", w && "nhs-slot-matrix__cell--selected"),
              "aria-label": $,
              "aria-selected": w || void 0,
              onClick: () => j(b),
              children: A > 0 ? `${A} left` : "Full"
            },
            b.id
          );
        })
      ] }, E))
    ] }),
    C === "bottom" && v
  ] }) }) }) }) });
};
function Ls(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function hn(e) {
  return `${Ls(e.getHours())}:${Ls(e.getMinutes())}`;
}
const Iu = ({
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
    /* @__PURE__ */ r.jsx(Nt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, G0 = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(Vr, { children: /* @__PURE__ */ r.jsx(Wt, { children: e.map((o, s) => /* @__PURE__ */ r.jsx(
    pn,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ r.jsx(Iu, { ...o })
    },
    s
  )) }) }) });
}, Lu = at.forwardRef(
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
    striped: C = !1,
    responsive: p = !1,
    tableType: u = "default"
  }, R) => {
    const F = Ie(null), T = Ie(null), S = Ie(null);
    at.useImperativeHandle(R, () => F.current, []);
    const [B, _] = Ne(0), [L, j] = Ne(0), [D, v] = Ne("headers"), [x, y] = Ne("browse"), P = t.length, E = e.length, M = je(() => !n || n.length === 0 ? e : [...e].sort((I, O) => {
      for (const { key: H, direction: Q } of n) {
        const fe = I[H], oe = O[H];
        if (fe == null && oe == null) continue;
        if (fe == null) return 1;
        if (oe == null) return -1;
        let K = 0;
        if (typeof fe == "number" && typeof oe == "number" ? K = fe - oe : K = String(fe).localeCompare(String(oe)), K !== 0)
          return Q === "asc" ? K : -K;
      }
      return 0;
    }), [e, n]), k = ie((I, O) => {
      setTimeout(() => {
        const H = F.current?.querySelector(
          `tbody tr:nth-child(${I + 1}) td:nth-child(${O + 1})`
        );
        H && (H.focus(), typeof H.scrollIntoView == "function" && H.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), b = ie((I) => {
      setTimeout(() => {
        const O = F.current?.querySelector(`th:nth-child(${I + 1})`);
        O && (O.focus(), typeof O.scrollIntoView == "function" && O.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), A = ie((I) => {
      a?.(I);
    }, [a]), w = ie((I) => {
      s?.(I);
    }, [s]), $ = ie((I) => {
      const { key: O } = I;
      switch (O) {
        case "Enter":
          if (I.preventDefault(), D === "headers" && x === "browse")
            y("navigate"), b(L);
          else if (D === "headers" && x === "navigate") {
            const H = t[L];
            H && A(H.key);
          } else D === "cells" && x === "browse" ? (y("navigate"), k(B, L)) : D === "cells" && x === "navigate" && w(B);
          break;
        case "Escape":
          I.preventDefault(), (D === "headers" && x === "navigate" || D === "cells" && x === "navigate") && y("browse");
          break;
        case "ArrowLeft":
          if (I.preventDefault(), x === "navigate" || x === "browse" && D === "headers") {
            if (D === "headers") {
              const H = Math.max(0, L - 1);
              j(H), b(H);
            } else if (D === "cells") {
              const H = Math.max(0, L - 1);
              j(H), k(B, H);
            }
          }
          break;
        case "ArrowRight":
          if (I.preventDefault(), x === "navigate" || x === "browse" && D === "headers") {
            if (D === "headers") {
              const H = Math.min(P - 1, L + 1);
              j(H), b(H);
            } else if (D === "cells") {
              const H = Math.min(P - 1, L + 1);
              j(H), k(B, H);
            }
          }
          break;
        case "ArrowUp":
          if (I.preventDefault(), D === "cells") {
            if (x === "browse") {
              const H = Math.max(0, B - 1);
              _(H), k(H, 0), j(0);
            } else if (x === "navigate")
              if (B > 0) {
                const H = B - 1;
                _(H), k(H, L);
              } else
                v("headers"), y("browse"), b(L);
          }
          break;
        case "ArrowDown":
          if (I.preventDefault(), D === "headers" && x === "browse")
            v("cells"), _(0), j(0), k(0, 0);
          else if (D === "cells") {
            const H = E - 1;
            if (x === "browse") {
              const Q = Math.min(H, B + 1);
              _(Q), k(Q, 0), j(0);
            } else if (x === "navigate" && B < H) {
              const Q = B + 1;
              _(Q), k(Q, L);
            }
          }
          break;
        case "Home":
          I.preventDefault(), D === "headers" ? (j(0), b(0)) : D === "cells" && (I.ctrlKey ? (_(0), j(0), k(0, 0)) : (j(0), k(B, 0)));
          break;
        case "End":
          if (I.preventDefault(), D === "headers") {
            const H = P - 1;
            j(H), b(H);
          } else if (D === "cells")
            if (I.ctrlKey) {
              const H = E - 1, Q = P - 1;
              _(H), j(Q), k(H, Q);
            } else {
              const H = P - 1;
              j(H), k(B, H);
            }
          break;
        case " ":
          if (I.preventDefault(), D === "headers" && x === "navigate") {
            const H = t[L];
            H && A(H.key);
          } else D === "cells" && x === "navigate" && w(B);
          break;
      }
    }, [
      D,
      x,
      L,
      B,
      P,
      E,
      t,
      k,
      b,
      A,
      w
    ]);
    Ee(() => {
      const I = F.current;
      if (I)
        return I.addEventListener("keydown", $), () => I.removeEventListener("keydown", $);
    }, [$]);
    const W = de(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": p,
        "nhsuk-table--bordered": g,
        "nhsuk-table--striped": C,
        "nhsuk-table--compact": u === "compact"
      },
      h
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: F,
        className: W,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": f,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: T, role: "row", children: t.map((I, O) => {
            const H = n?.find((oe) => oe.key === I.key), Q = !!H, fe = D === "headers" && L === O;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: de("sortable-header", {
                  "sortable-header--focused": fe
                }),
                role: "columnheader",
                tabIndex: fe ? 0 : -1,
                onClick: () => A(I.key),
                onKeyDown: (oe) => {
                  (oe.key === "Enter" || oe.key === " ") && (oe.preventDefault(), A(I.key));
                },
                "aria-sort": Q ? H?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: I.label }),
                  Q && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((oe) => oe.key === I.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: H?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              I.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: S, className: "nhsuk-table__body", role: "rowgroup", children: M.map((I, O) => {
            const H = o === O, Q = D === "cells" && B === O;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: de("data-row", {
                  "data-row--selected": H,
                  "data-row--focused": Q
                }),
                "aria-selected": H,
                children: t.map((fe, oe) => {
                  const K = fe.tableRenderer ? fe.tableRenderer(I) : fe.render ? fe.render(I) : I[fe.key], V = D === "cells" && B === O && L === oe, J = () => typeof K == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: K ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: K ? "Yes" : "No" })
                  ] }) : String(K ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: de("data-cell", {
                        "data-cell--focused": V
                      }),
                      tabIndex: V ? 0 : -1,
                      onClick: () => w(O),
                      children: J()
                    },
                    fe.key
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
Lu.displayName = "AriaDataGrid";
const Lo = ({
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
  const h = Ie(null), m = Ie(null), g = Ie(null), C = ie((D, v) => {
    d || (m.current = v, D.dataTransfer.effectAllowed = "move", D.dataTransfer.setData("text/plain", v));
  }, [d]), p = ie((D, v) => {
    d || m.current === v || (D.preventDefault(), D.dataTransfer.dropEffect = "move", g.current = v);
  }, [d]), u = ie((D, v) => {
    if (d) return;
    D.preventDefault();
    const x = m.current;
    if (!x || x === v) return;
    const y = e.findIndex((E) => E.key === x), P = e.findIndex((E) => E.key === v);
    if (y !== -1 && P !== -1) {
      const E = [...e], [M] = E.splice(y, 1);
      E.splice(P, 0, M), n(E);
    }
    m.current = null, g.current = null;
  }, [d, e, n]), R = ie(() => {
    m.current = null, g.current = null;
  }, []), F = ie((D) => {
    const v = t.find((x) => x.key === D);
    return v ? v.label : D;
  }, [t]), T = ie((D) => ["red", "orange", "blue", "aqua-green", "grey"][D] || "grey", []), S = ie((D) => {
    if (d) return;
    const v = e.map(
      (x) => x.key === D ? { ...x, direction: x.direction === "asc" ? "desc" : "asc" } : x
    );
    n(v);
  }, [e, n, d]), B = ie((D) => {
    if (d) return;
    const v = e.filter((x) => x.key !== D);
    n(v);
  }, [e, n, d]), _ = ie(() => {
    d || n([]);
  }, [n, d]), L = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const D = e.map((v, x) => {
      const y = v.direction === "asc" ? "ascending" : "descending";
      return `${x + 1}. ${F(v.key)} (${y})`;
    });
    if (D.length === 1)
      return `Sorted by: ${D[0]}`;
    if (D.length === 2)
      return `Sorted by: ${D.join(" and ")}`;
    {
      const v = D.pop();
      return `Sorted by: ${D.join(", ")}, and ${v}`;
    }
  }, j = je(() => {
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
          "aria-describedby": j,
          children: e.map((D, v) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (x) => C(x, D.key),
              onDragOver: (x) => p(x, D.key),
              onDrop: (x) => u(x, D.key),
              onDragEnd: R,
              onClick: () => S(D.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${D.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": D.key,
              children: /* @__PURE__ */ r.jsx(
                et,
                {
                  color: T(v),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => B(D.key),
                  disabled: d,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${v + 1}`, children: v + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: F(D.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (x) => {
                          x.stopPropagation(), S(D.key);
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
          onClick: _,
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
function Mu(e, t) {
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
const ea = an(function(t, n) {
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
    isLoading: C = !1,
    loadingComponent: p,
    error: u = null,
    errorComponent: R,
    "data-testid": F,
    actions: T,
    actionsMinGap: S = 16,
    forceActionsAbove: B = !1
  } = t, L = Ie(
    g || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, j = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), D = `${L}-description`, v = `${L}-navigation-help`, {
    dataComparator: x = (N, z) => JSON.stringify(N) === JSON.stringify(z),
    filterFunction: y = (N) => N,
    booleanRenderer: P = (N) => N ? "✓" : "✗"
  } = a || {}, E = s !== void 0, M = s ?? 0, [k, b] = Ne({
    focusArea: "tabs",
    focusedTabIndex: M,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), A = je(() => ({
    selectedIndex: M,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [M]), [w, $] = no(Mu, A);
  Ee(() => {
    const N = w.tabLoadingStates.length, z = o.length;
    N !== z && $({ type: "ADJUST_ARRAYS", payload: { newLength: z } });
  }, [o.length]), Ee(() => {
    E && $({ type: "SET_SELECTED_INDEX", payload: M });
  }, [M, E]), Ee(() => {
    b((N) => ({
      ...N,
      focusArea: "tabs",
      focusedTabIndex: w.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [w.selectedIndex]), Ee(() => {
    l && l(w.globalSelectedRowData);
  }, [w.globalSelectedRowData, l]);
  const W = ie(
    (N, z) => x(N, z),
    [x]
  ), I = ie(
    (N) => {
      N >= 0 && N < o.length && !o[N].disabled && ($({ type: "SET_SELECTED_INDEX", payload: N }), b((z) => ({
        ...z,
        focusedTabIndex: N,
        focusArea: "tabs"
      })), i?.(N));
    },
    [o, i]
  ), O = Ie(!1), H = ie(
    (N, z) => {
      if (!z?.force && !O.current && N === 0) {
        O.current = !0;
        return;
      }
      O.current = !0, setTimeout(() => {
        const te = Q.current[N], re = te?.parentElement;
        if (te && re) {
          const Y = te.offsetLeft, ne = te.offsetWidth, _e = re.clientWidth, ye = Y - _e / 2 + ne / 2;
          try {
            re.scrollTo({
              left: Math.max(0, ye),
              behavior: "smooth"
            });
          } catch {
            te.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!te,
          tabListElementExists: !!re
        });
      }, 50);
    },
    []
  ), Q = Ie([]), fe = Ie([]), oe = ie(
    (N, z) => {
      const te = w.sortConfig || [], re = te.find(
        (_e) => _e.key === z
      );
      let Y;
      re ? re.direction === "asc" ? Y = te.map(
        (_e) => _e.key === z ? { ..._e, direction: "desc" } : _e
      ) : Y = te.filter(
        (_e) => _e.key !== z
      ) : Y = [...te, { key: z, direction: "asc" }], $({
        type: "SET_SORT",
        payload: Y
      }), o[N].onSort?.(z);
    },
    [w.sortConfig, o]
  ), K = ie(
    (N) => {
      setTimeout(() => {
        const z = document.querySelector(
          `[data-tab-panel="${w.selectedIndex}"] th:nth-child(${N + 1})`
        );
        z && z.focus();
      }, 0);
    },
    [w.selectedIndex]
  ), V = ie(
    (N) => P(N),
    [P]
  ), J = ie(
    (N, z) => {
      setTimeout(() => {
        const te = document.querySelector(
          `[data-tab-panel="${w.selectedIndex}"] tbody tr:nth-child(${N + 1}) td:nth-child(${z + 1})`
        );
        te && te.focus();
      }, 0);
    },
    [w.selectedIndex]
  );
  Ee(() => {
    k.isGridActive && (k.focusArea === "headers" ? setTimeout(() => {
      K(k.focusedHeaderIndex);
    }, 0) : k.focusArea === "cells" && setTimeout(() => {
      J(
        k.focusedRowIndex,
        k.focusedColumnIndex
      );
    }, 0));
  }, [
    k.focusArea,
    k.isGridActive,
    k.focusedHeaderIndex,
    k.focusedRowIndex,
    k.focusedColumnIndex,
    K,
    J
  ]), Ee(() => {
    H(w.selectedIndex);
  }, [w.selectedIndex, H]);
  const ae = ie(
    (N, z) => {
      const { key: te } = N, re = o[w.selectedIndex], Y = re?.columns.length || 0;
      switch (te) {
        case "ArrowLeft":
          N.preventDefault();
          const ne = Math.max(0, z - 1);
          b((Te) => ({
            ...Te,
            focusedHeaderIndex: ne
          })), K(ne);
          break;
        case "ArrowRight":
          N.preventDefault();
          const _e = Math.min(Y - 1, z + 1);
          b((Te) => ({
            ...Te,
            focusedHeaderIndex: _e
          })), K(_e);
          break;
        case "ArrowUp":
          N.preventDefault(), b((Te) => ({
            ...Te,
            focusArea: "tabs",
            focusedTabIndex: w.selectedIndex
          })), H(w.selectedIndex), Q.current[w.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          N.preventDefault(), b((Te) => ({
            ...Te,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: z,
            isGridActive: !0
          }));
          break;
        case "Home":
          N.preventDefault(), b((Te) => ({ ...Te, focusedHeaderIndex: 0 })), K(0);
          break;
        case "End":
          N.preventDefault();
          const ye = Y - 1;
          b((Te) => ({
            ...Te,
            focusedHeaderIndex: ye
          })), K(ye);
          break;
        case "Enter":
        case " ":
          N.preventDefault();
          const ke = re?.columns[z]?.key;
          ke && oe(w.selectedIndex, ke);
          break;
      }
    },
    [
      o,
      w.selectedIndex,
      oe,
      b,
      K,
      J,
      Q
    ]
  ), G = ie(
    (N, z, te) => {
      const { key: re } = N, Y = o[w.selectedIndex], ne = Y?.data.length || 0, _e = Y?.columns.length || 0;
      switch (re) {
        case "ArrowUp":
          if (N.preventDefault(), z === 0)
            b((ce) => ({
              ...ce,
              focusArea: "headers",
              focusedHeaderIndex: te,
              isGridActive: !1
            })), K(te);
          else {
            const ce = z - 1;
            b((Ce) => ({
              ...Ce,
              focusedRowIndex: ce
            })), J(ce, te);
          }
          break;
        case "ArrowDown":
          N.preventDefault();
          const ye = Math.min(ne - 1, z + 1);
          b((ce) => ({
            ...ce,
            focusedRowIndex: ye
          })), J(ye, te);
          break;
        case "ArrowLeft":
          N.preventDefault();
          const ke = Math.max(0, te - 1);
          b((ce) => ({
            ...ce,
            focusedColumnIndex: ke
          })), J(z, ke);
          break;
        case "ArrowRight":
          N.preventDefault();
          const Te = Math.min(_e - 1, te + 1);
          b((ce) => ({
            ...ce,
            focusedColumnIndex: Te
          })), J(z, Te);
          break;
        case "Home":
          N.preventDefault(), N.ctrlKey ? (b((ce) => ({
            ...ce,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), J(0, 0)) : (b((ce) => ({ ...ce, focusedColumnIndex: 0 })), J(z, 0));
          break;
        case "End":
          if (N.preventDefault(), N.ctrlKey) {
            const ce = ne - 1, Ce = _e - 1;
            b((Fe) => ({
              ...Fe,
              focusedRowIndex: ce,
              focusedColumnIndex: Ce
            })), J(ce, Ce);
          } else {
            const ce = _e - 1;
            b((Ce) => ({
              ...Ce,
              focusedColumnIndex: ce
            })), J(z, ce);
          }
          break;
        case "Enter":
        case " ":
          if (N.preventDefault(), Y && Y.data[z]) {
            const ce = Y.data.some(
              (Oe) => "ews_data" in Oe
            ) ? y(Y.data, w.filters) : Y.data, Ce = w.sortConfig;
            let Fe = ce;
            if (Ce && Ce.length > 0 && (Fe = [...ce].sort((Oe, Be) => {
              for (const { key: tt, direction: $t } of Ce) {
                let ht = Oe[tt], ct = Be[tt];
                const Ue = Y.columns.find(
                  (sn) => sn.key === tt
                );
                if (Ue?.tableRenderer ? (ht = Ue.tableRenderer(Oe), ct = Ue.tableRenderer(Be)) : Ue?.render && (ht = Ue.render(Oe), ct = Ue.render(Be)), ht == null && ct == null) continue;
                if (ht == null) return $t === "asc" ? -1 : 1;
                if (ct == null) return $t === "asc" ? 1 : -1;
                let Ve = 0;
                if (typeof ht == "number" && typeof ct == "number" ? Ve = ht - ct : Ve = String(ht).localeCompare(
                  String(ct),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Ve !== 0)
                  return $t === "asc" ? Ve : -Ve;
              }
              return 0;
            })), Fe[z]) {
              const Oe = Fe[z], tt = w.globalSelectedRowData && W(w.globalSelectedRowData, Oe) ? null : Oe;
              $({
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
      w.selectedIndex,
      w.filters,
      w.sortConfig,
      y,
      W,
      $,
      b,
      K,
      J
    ]
  ), me = ie(
    (N, z) => y(N, z),
    [y]
  );
  if (to(
    n,
    () => ({
      selectTab: (N) => {
        N >= 0 && N < o.length && ($({ type: "SET_SELECTED_INDEX", payload: N }), i?.(N));
      },
      refreshData: (N) => {
        console.log("Refreshing data for tab:", N ?? "all");
      },
      exportData: (N) => {
        const z = N ?? w.selectedIndex, te = o[z];
        return te ? te.data : [];
      },
      getSelectedRows: (N) => w.globalSelectedRowData ? [] : [],
      clearSelection: (N) => {
        $({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (N) => {
        $({ type: "SET_FILTERS", payload: N });
      }
    }),
    [w.selectedIndex, w.selectedRows, o, i]
  ), C)
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
        children: R || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: u })
        ] })
      }
    );
  const he = Ie(null), xe = Ie(null), pe = Ie(null), [be, We] = Ne(!0);
  Ee(() => {
    if (!T) {
      We(!1);
      return;
    }
    if (B) {
      We(!1);
      return;
    }
    function N() {
      if (!he.current || !xe.current || !pe.current) return;
      const re = he.current.clientWidth, Y = Array.from(
        xe.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), ne = Y.reduce((Te, ce) => Te + ce.offsetWidth, 0), _e = pe.current.offsetWidth, ye = Math.max(8 * (Y.length - 1), 0), ke = ne + ye + _e + S <= re;
      We(ke);
    }
    const z = requestAnimationFrame(() => N()), te = new ResizeObserver(() => N());
    return he.current && te.observe(he.current), xe.current && te.observe(xe.current), () => {
      cancelAnimationFrame(z), te.disconnect();
    };
  }, [T, S, B, o.length]);
  const Me = pe, Le = ie(() => Me.current ? Array.from(
    Me.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((N) => !N.hasAttribute("disabled")) : [], []), q = ie(
    (N) => {
      const z = Le();
      if (!z.length) return;
      const te = Math.max(0, Math.min(N, z.length - 1));
      z[te].focus(), b((re) => ({ ...re, focusArea: "actions", focusedActionIndex: te }));
    },
    [Le]
  ), U = ie(() => q(0), [q]), ee = ie(
    (N, z) => {
      const { key: te } = N, re = o.length - 1;
      switch (te) {
        case "ArrowUp": {
          T && !be && (N.preventDefault(), U());
          break;
        }
        case "ArrowLeft": {
          N.preventDefault();
          const Y = z > 0 ? z - 1 : re;
          I(Y), H(Y), Q.current[Y]?.focus();
          break;
        }
        case "ArrowRight": {
          if (N.preventDefault(), z === re && T && be) {
            U();
            return;
          }
          const Y = z < re ? z + 1 : 0;
          I(Y), H(Y), Q.current[Y]?.focus();
          break;
        }
        case "ArrowDown": {
          N.preventDefault(), b((Y) => ({
            ...Y,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          N.preventDefault(), I(0), H(0), Q.current[0]?.focus();
          break;
        }
        case "End": {
          N.preventDefault(), I(re), H(re), Q.current[re]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          N.preventDefault(), I(z);
          break;
        }
        case "Tab": {
          !N.shiftKey && z === re && T && be && U();
          break;
        }
      }
    },
    [o.length, I, H, T, be, U]
  ), Z = ie((N) => {
    const { key: z } = N, te = Le();
    if (!te.length) return;
    const re = te.findIndex((Y) => Y === document.activeElement);
    switch (z) {
      case "ArrowLeft": {
        if (be)
          if (re > 0)
            N.preventDefault(), q(re - 1);
          else {
            N.preventDefault();
            const Y = o.length - 1;
            I(Y), H(Y), Q.current[Y]?.focus(), b((ne) => ({ ...ne, focusArea: "tabs", focusedTabIndex: Y }));
          }
        break;
      }
      case "ArrowRight": {
        be && (re < te.length - 1 ? (N.preventDefault(), q(re + 1)) : (N.preventDefault(), I(0), H(0), Q.current[0]?.focus(), b((Y) => ({ ...Y, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (be)
          N.preventDefault(), b((Y) => ({ ...Y, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          N.preventDefault();
          const Y = w.selectedIndex;
          Q.current[Y]?.focus(), b((ne) => ({ ...ne, focusArea: "tabs", focusedTabIndex: Y }));
        }
        break;
      }
    }
  }, [Le, be, q, o.length, I, H, w.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${f}`,
      id: g,
      "data-testid": F,
      ref: he,
      children: [
        c && !j && /* @__PURE__ */ r.jsx("div", { id: D, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: v,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          Lo,
          {
            sortConfig: w.sortConfig || [],
            columns: o.flatMap(
              (N) => N.columns.map((z) => ({ key: z.key, label: z.label }))
            ).filter(
              (N, z, te) => te.findIndex((re) => re.key === N.key) === z
              // Remove duplicates
            ),
            onSortChange: (N) => {
              $({ type: "SET_SORT", payload: N });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        T && !be && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: pe,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: Z,
            children: T
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${be ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? j ? c : D : v,
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              ref: xe,
              children: o.map((N, z) => {
                const te = z === w.selectedIndex, re = N.disabled || h;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${N.id}`,
                    "aria-controls": `panel-${N.id}`,
                    "aria-selected": te,
                    "aria-disabled": re,
                    tabIndex: te ? 0 : -1,
                    ref: (Y) => {
                      Q.current[z] = Y;
                    },
                    onClick: () => I(z),
                    onKeyDown: (Y) => ee(Y, z),
                    disabled: re,
                    className: [
                      "aria-tabs-datagrid__tab",
                      te ? "aria-tabs-datagrid__tab--selected" : "",
                      re ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: N.label }),
                      w.tabLoadingStates[z] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      w.tabErrors[z] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  N.id
                );
              })
            }
          ),
          T && be && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: pe,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: Z,
              children: T
            }
          )
        ] }),
        o.map((N, z) => {
          const te = z === w.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${N.id}`,
              "aria-labelledby": `tab-${N.id}`,
              tabIndex: 0,
              hidden: !te,
              ref: (re) => {
                fe.current[z] = re;
              },
              className: `aria-tabs-datagrid__panel ${N.className || ""}`,
              "data-tab-panel": z,
              children: te && (() => {
                const re = N.data.some(
                  (ne) => "ews_data" in ne
                ) ? me(N.data, w.filters) : N.data, Y = je(() => {
                  const ne = w.sortConfig;
                  return !ne || ne.length === 0 ? re : [...re].sort((_e, ye) => {
                    for (const { key: ke, direction: Te } of ne) {
                      let ce = _e[ke], Ce = ye[ke];
                      const Fe = N.columns.find(
                        (Be) => Be.key === ke
                      );
                      if (Fe?.tableRenderer ? (ce = Fe.tableRenderer(_e), Ce = Fe.tableRenderer(ye)) : Fe?.render && (ce = Fe.render(_e), Ce = Fe.render(ye)), ce == null && Ce == null) continue;
                      if (ce == null) return 1;
                      if (Ce == null) return -1;
                      let Oe = 0;
                      if (typeof ce == "number" && typeof Ce == "number" ? Oe = ce - Ce : typeof ce == "boolean" && typeof Ce == "boolean" ? Oe = ce === Ce ? 0 : ce ? 1 : -1 : Oe = String(ce).localeCompare(
                        String(Ce),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Oe !== 0)
                        return Te === "asc" ? Oe : -Oe;
                    }
                    return 0;
                  });
                }, [re, w.sortConfig, N.columns]);
                return /* @__PURE__ */ r.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": N.ariaLabel,
                    "aria-describedby": N.ariaDescription ? `panel-${N.id}-description` : void 0,
                    children: [
                      N.ariaDescription && /* @__PURE__ */ r.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${N.id}-description`,
                          children: N.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: N.columns.map((ne, _e) => {
                        const ye = w.sortConfig?.find(
                          (ce) => ce.key === ne.key
                        ), ke = !!ye, Te = k.focusArea === "headers" && k.focusedHeaderIndex === _e;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${Te ? "sortable-header--focused" : ""} ${ke ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Te ? 0 : -1,
                            onClick: () => oe(z, ne.key),
                            onKeyDown: (ce) => ae(ce, _e),
                            "aria-sort": ke ? ye?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: ne.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ke ? `sort-indicator--${ye?.direction}` : ""}`,
                                  children: [
                                    w.sortConfig && w.sortConfig.length > 0 && w.sortConfig.findIndex(
                                      (ce) => ce.key === ne.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${w.sortConfig.findIndex((ce) => ce.key === ne.key) + 1}`,
                                        "data-priority": w.sortConfig.findIndex(
                                          (ce) => ce.key === ne.key
                                        ) + 1,
                                        title: `Sort priority: ${w.sortConfig.findIndex((ce) => ce.key === ne.key) + 1}`,
                                        children: w.sortConfig.findIndex(
                                          (ce) => ce.key === ne.key
                                        ) + 1
                                      }
                                    ),
                                    ke && /* @__PURE__ */ r.jsx(
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
                          ne.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: Y.map((ne, _e) => {
                        const ye = w.globalSelectedRowData && W(w.globalSelectedRowData, ne), ke = k.focusArea === "cells" && k.focusedRowIndex === _e;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ye ? "data-row--selected" : ""} ${ke ? "data-row--focused" : ""}`,
                            "aria-selected": ye,
                            children: N.columns.map((Te, ce) => {
                              const Ce = ne[Te.key];
                              let Fe;
                              Te.tableRenderer ? Fe = Te.tableRenderer(ne) : Te.render ? Fe = Te.render(ne) : Fe = Ce;
                              const Oe = k.focusArea === "cells" && k.focusedRowIndex === _e && k.focusedColumnIndex === ce, Be = () => {
                                if (Te.customRenderer) {
                                  const tt = Te.customRenderer(
                                    Ce,
                                    ne
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
                                return typeof Ce == "boolean" && Fe === Ce ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  V(Ce),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Ce ? "Yes" : "No" })
                                ] }) : at.isValidElement(Fe) || typeof Fe != "object" ? Fe ?? "" : Fe;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Oe ? "data-cell--focused" : ""}`,
                                  tabIndex: Oe ? 0 : -1,
                                  onClick: () => {
                                    const $t = w.globalSelectedRowData && W(
                                      w.globalSelectedRowData,
                                      ne
                                    ) ? null : ne;
                                    $({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: $t
                                    });
                                  },
                                  onKeyDown: (tt) => G(tt, _e, ce),
                                  children: Be()
                                },
                                Te.key
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
            N.id
          );
        })
      ]
    }
  );
}), In = {
  asc: "↑",
  desc: "↓"
}, Fu = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Rr(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function Bu(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Au(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function Eu(e, t) {
  const n = t.find((o) => o.id === e), a = Bu(t);
  return n ? n.priority < a : !1;
}
const Y0 = ({
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
  const f = je(() => Fu(e), [e]), h = ie((F) => {
    if (l) return;
    const T = e.map(
      (S) => S.id === F ? { ...S, direction: S.direction === "asc" ? "desc" : "asc" } : S
    );
    t(T);
  }, [e, t, l]), m = ie((F) => {
    if (l) return;
    const T = e.findIndex((B) => B.id === F);
    if (T <= 0) return;
    const S = [...e];
    [S[T], S[T - 1]] = [S[T - 1], S[T]], t(Rr(S));
  }, [e, t, l]), g = ie((F) => {
    if (l) return;
    const T = e.findIndex((B) => B.id === F);
    if (T >= e.length - 1 || T === -1) return;
    const S = [...e];
    [S[T], S[T + 1]] = [S[T + 1], S[T]], t(Rr(S));
  }, [e, t, l]), C = ie((F) => {
    if (l) return;
    const T = e.filter((S) => S.id !== F);
    t(Rr(T));
  }, [e, t, l]), p = ie(() => {
    l || t([]);
  }, [t, l]), u = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const F = f.map((T, S) => {
      const B = T.direction === "asc" ? "ascending" : "descending";
      return `${S + 1}. ${T.label} (${B})`;
    });
    if (F.length === 1)
      return `Sorted by: ${F[0]}`;
    if (F.length === 2)
      return `Sorted by: ${F.join(" and ")}`;
    {
      const T = F.pop();
      return `Sorted by: ${F.join(", ")}, and ${T}`;
    }
  }, R = je(() => {
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
        "aria-describedby": R,
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
                  onClose: () => C(F.id),
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
                        children: F.direction === "asc" ? In.asc : In.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(F.id),
                          disabled: l || !Au(F.id, e),
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
                          disabled: l || !Eu(F.id, e),
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
      In.asc,
      "/",
      In.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Wa = (e, t) => t.map((n) => ({
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
})), ta = [
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
], Ru = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Pu = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, Hu = (e) => {
  if (typeof e == "boolean") {
    const n = ta.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = ta.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, zu = (e) => `${e.name}-${e.bed_name}`, Wu = () => ({
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
}), V0 = (e) => {
  const t = Wu();
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
}, Ou = {
  dataComparator: Ru,
  filterFunction: Pu,
  booleanRenderer: Hu,
  getDataId: zu
};
function Ms(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: f = "adaptive-card"
  } = n, h = t.find((T) => T.key === a), m = h?.cardRenderer ? h.cardRenderer(e) : h?.render ? h.render(e) : e[a || "name"] || "Untitled", g = () => o.filter((S) => !i.includes(S) && e[S]).slice(0, 3).map((S) => {
    const B = t.find((D) => D.key === S), _ = e[S], L = c[S] ? c[S](_, e) : B?.cardRenderer ? B.cardRenderer(e) : B?.render ? B.render(e) : _;
    return `${B?.label || S}: ${L}`;
  }).join(" • "), C = () => s.length === 0 ? null : s.filter((T) => e[T.fieldKey] !== void 0).map((T) => {
    const S = e[T.fieldKey], B = T.render ? T.render(S, e) : S;
    return `<span class="nhsuk-tag ${Uu(T, S)}">${B}</span>`;
  }).join(""), p = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", u = C(), R = g(), F = u ? `${R}${u ? `<div class="adaptive-card__badges">${u}</div>` : ""}` : R;
  return {
    variant: p(),
    heading: String(m),
    descriptionHtml: F,
    className: `adaptive-card ${f}`,
    "aria-label": `Record for ${m}`
  };
}
function Uu(e, t) {
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
const Gu = {
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
}, Mo = ({
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
              color: Vu(Eo(f)),
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
}, Fo = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        et,
        {
          color: qu(e.status || "active"),
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
] }), Bo = ({
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
] }), Ao = ({
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
            s !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Yu(s)}`, children: [
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
function Eo(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Yu(e) {
  return Eo(e);
}
function Vu(e) {
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
function qu(e) {
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
const Xu = [
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
], Ro = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Ku = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Zu = (e) => Ro(e) === "high" || e.status === "urgent" ? "primary" : "default", Ju = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Qu = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Xu,
  hiddenFields: [],
  getPriority: Ro,
  getStatus: Ku,
  getVariant: Zu,
  fieldRenderers: Ju,
  classPrefix: "adaptive-card--healthcare"
}, ef = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", o = n.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ r.jsx(
      Mo,
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
      Fo,
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
      Bo,
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
      Ao,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, tf = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Fs = {
  name: "healthcare",
  defaultCardConfig: Qu,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: ef,
  fieldTypes: tf
};
function Bs(e) {
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
function As(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
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
function rf(e, t) {
  const [n, a] = Ne("cards");
  return Ee(() => {
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
function af(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function sf(e, t, n, a) {
  const o = a ? { ...a.defaultCardConfig, ...n } : { ...Gu, ...n };
  if (a && a.cardTemplates) {
    const s = af(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), Ms(e, t, o);
}
const q0 = ({
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
  ariaDescription: C,
  orientation: p = "horizontal",
  id: u,
  disabled: R = !1,
  className: F,
  ...T
}) => {
  const S = rf(e, t), B = h !== void 0, _ = h ?? 0, L = je(() => {
    if (c.some(
      (U) => U.data && U.data.length > 0 && As(U.data)
    )) {
      const U = Bs(n);
      return {
        ...Fs.defaultCardConfig,
        ...U
      };
    } else
      return Bs(n);
  }, [n, c]), j = je(() => c.some(
    (U) => U.data && U.data.length > 0 && As(U.data)
  ) ? Fs : void 0, [c]), D = je(() => ({
    selectedIndex: _,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [_, c.length]), [v, x] = no(nf, D), y = Ie([]), P = Ie([]), E = Ie([]), M = Ie(null), [k, b] = Ne({
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
  }), A = ie((q) => {
    if (!q.current)
      return { columns: 1, rows: 0 };
    const U = q.current, ee = U.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (ee.length === 0)
      return { columns: 1, rows: 0 };
    const Z = U.offsetWidth, z = ee[0].offsetWidth, te = Math.floor(Z / z) || 1, re = Math.ceil(ee.length / te);
    return { columns: te, rows: re };
  }, []), w = ie((q, U) => ({
    row: Math.floor(q / U),
    col: q % U
  }), []), $ = ie((q, U, ee) => q * ee + U, []), W = ie((q, U, ee, Z) => {
    const { row: N, col: z } = w(q, Z);
    let te = N, re = z;
    switch (U) {
      case "up":
        te = Math.max(0, N - 1);
        break;
      case "down":
        te = Math.min(Math.floor((ee - 1) / Z), N + 1);
        break;
      case "left":
        re = Math.max(0, z - 1);
        break;
      case "right":
        re = Math.min(Z - 1, z + 1);
        break;
    }
    const Y = $(te, re, Z);
    return Math.min(Y, ee - 1);
  }, [w, $]);
  Ee(() => {
    k.isCardNavigationActive && k.focusedCardElementIndex >= 0 && k.cardElements.length > 0 && setTimeout(() => {
      const q = k.cardElements[k.focusedCardElementIndex];
      q && (q.element.focus(), q.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [k.isCardNavigationActive, k.focusedCardElementIndex, k.cardElements.length]), Ee(() => {
    const q = () => {
      if (S === "cards" && M.current) {
        const { columns: Z, rows: N } = A(M);
        b((z) => ({
          ...z,
          gridColumns: Z,
          gridRows: N
        }));
      }
    }, U = setTimeout(q, 200), ee = () => {
      setTimeout(q, 100);
    };
    return window.addEventListener("resize", ee), () => {
      clearTimeout(U), window.removeEventListener("resize", ee);
    };
  }, [S, c, A]), Ee(() => {
    const q = v.tabLoadingStates.length, U = c.length;
    q !== U && x({ type: "ADJUST_ARRAYS", payload: { newLength: U } });
  }, [c.length, v.tabLoadingStates.length]), Ee(() => {
    B && h !== v.selectedIndex && x({ type: "SET_SELECTED_INDEX", payload: h });
  }, [B, h, v.selectedIndex]);
  const I = ie((q) => {
    q >= 0 && q < c.length && !c[q].disabled && (x({ type: "SET_SELECTED_INDEX", payload: q }), m?.(q));
  }, [c, m]), O = ie((q) => {
    console.log("Card selected:", q), x({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: q
    });
  }, []), H = ie((q) => {
    const U = P.current[q];
    U && (U.focus(), U.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), Q = ie((q) => {
    const U = P.current[q];
    if (!U) return [];
    const ee = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), Z = U.querySelectorAll(ee);
    return Array.from(Z).map((N, z) => ({
      id: N.id || `card-${q}-element-${z}`,
      element: N,
      label: N.getAttribute("aria-label") || N.textContent?.trim() || N.getAttribute("title") || `Element ${z + 1}`,
      type: N.tagName.toLowerCase() === "button" ? "button" : N.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(N.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), fe = Ie(null), oe = ie((q) => {
    const U = fe.current;
    if (!U) return;
    const ee = document.createElement("div");
    ee.setAttribute("aria-live", "polite"), ee.setAttribute("aria-atomic", "true"), ee.className = "sr-only", ee.textContent = q, U.appendChild(ee), setTimeout(() => {
      U.contains(ee) && U.removeChild(ee);
    }, 1e3);
  }, []), K = ie((q) => {
    const U = q.filter((Z) => Z.sortable !== !1), ee = [
      { value: "", label: "Sort by..." }
    ];
    return U.forEach((Z) => {
      const N = Z.label || Z.key;
      Z.key === "name" ? ee.push(
        { value: `${Z.key}-asc`, label: `${N} (A-Z)` },
        { value: `${Z.key}-desc`, label: `${N} (Z-A)` }
      ) : Z.key === "ews_score" || Z.key.includes("score") ? ee.push(
        { value: `${Z.key}-desc`, label: `${N} (High-Low)` },
        { value: `${Z.key}-asc`, label: `${N} (Low-High)` }
      ) : Z.key === "age" || Z.key.includes("date") || Z.key.includes("time") ? ee.push(
        { value: `${Z.key}-desc`, label: `${N} (Oldest-Youngest)` },
        { value: `${Z.key}-asc`, label: `${N} (Youngest-Oldest)` }
      ) : ee.push(
        { value: `${Z.key}-asc`, label: `${N} (A-Z)` },
        { value: `${Z.key}-desc`, label: `${N} (Z-A)` }
      );
    }), ee;
  }, []), V = ie((q, U) => U ? [...q].sort((ee, Z) => {
    const N = ee[U.key], z = Z[U.key];
    if (N == null && z == null) return 0;
    if (N == null) return 1;
    if (z == null) return -1;
    const te = Number(N), re = Number(z);
    if (!isNaN(te) && !isNaN(re))
      return U.direction === "asc" ? te - re : re - te;
    const Y = String(N).toLowerCase(), ne = String(z).toLowerCase(), _e = Y.localeCompare(ne);
    return U.direction === "asc" ? _e : -_e;
  }) : q, []), J = ie((q) => {
    if (!q) {
      b((Y) => ({ ...Y, cardSortConfig: null })), oe("Card sorting cleared");
      return;
    }
    const [U, ee] = q.split("-"), Z = { key: U, direction: ee };
    b((Y) => ({ ...Y, cardSortConfig: Z }));
    const te = c[v.selectedIndex]?.columns.find((Y) => Y.key === U)?.label || U;
    oe(`Cards sorted by ${te} in ${ee === "asc" ? "ascending" : "descending"} order`);
  }, [c, v.selectedIndex, oe]), ae = ie((q) => {
    const Z = c[v.selectedIndex]?.columns.find((z) => z.key === q.key)?.label || q.key, N = q.direction === "asc" ? "ascending" : "descending";
    return `${Z} (${N})`;
  }, [c, v.selectedIndex]), G = ie((q) => {
    const U = c[v.selectedIndex];
    if (o) {
      const ee = v.sortConfig;
      return !ee || ee.length === 0 ? q : [...q].sort((Z, N) => {
        for (const { key: z, direction: te } of ee) {
          let re = Z[z], Y = N[z];
          const ne = U?.columns.find((Ce) => Ce.key === z);
          if (ne?.cardRenderer ? (re = ne.cardRenderer(Z), Y = ne.cardRenderer(N)) : ne?.render && (re = ne.render(Z), Y = ne.render(N)), re == null && Y == null) continue;
          if (re == null) return te === "asc" ? -1 : 1;
          if (Y == null) return te === "asc" ? 1 : -1;
          const _e = Number(re), ye = Number(Y);
          if (!isNaN(_e) && !isNaN(ye)) {
            const Ce = _e - ye;
            if (Ce !== 0) return te === "asc" ? Ce : -Ce;
            continue;
          }
          const ke = String(re).toLowerCase(), Te = String(Y).toLowerCase(), ce = ke.localeCompare(Te);
          if (ce !== 0) return te === "asc" ? ce : -ce;
        }
        return 0;
      });
    } else
      return V(q, k.cardSortConfig);
  }, [o, v.sortConfig, k.cardSortConfig, V, c, v.selectedIndex]), me = ie((q, U) => {
    const ee = Q(q), Z = ee[U];
    if (Z) {
      Z.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const N = `Focused on ${Z.label}, ${Z.type} ${U + 1} of ${ee.length} within card`;
      oe(N);
    }
  }, [Q, oe]), he = ie((q) => {
    y.current[q]?.focus();
  }, []), xe = ie(() => {
    const q = E.current[0];
    if (!q) return [];
    const U = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), ee = q.querySelectorAll(U);
    return Array.from(ee);
  }, []), pe = ie((q) => {
    if (q === 0) {
      const U = E.current[0], ee = U?.querySelector(".sort-controls-row");
      if (ee) {
        ee.setAttribute("tabindex", "-1"), ee.focus();
        const N = `Sort controls group with ${xe().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        oe(N);
      } else U && U.focus();
    } else {
      const U = xe(), ee = q - 1, Z = U[ee];
      if (Z) {
        Z.focus();
        const N = Z.tagName.toLowerCase() === "select", z = Z.tagName.toLowerCase() === "button", te = N ? "dropdown" : z ? "button" : "control", re = N ? ". Use Space key to open dropdown" : "", Y = `${te} ${ee + 1} of ${U.length}${re}`;
        oe(Y);
      }
    }
  }, [xe, oe]), be = ie((q, U) => {
    const { key: ee } = q, Z = c[v.selectedIndex], N = Z?.data.length || 0;
    if (ee === "ArrowLeft" && q.shiftKey) {
      q.preventDefault(), q.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (ee === "ArrowRight" && q.shiftKey) {
      q.preventDefault(), q.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!k.isCardNavigationActive) {
      switch (ee) {
        case "ArrowUp":
          if (q.preventDefault(), U === 0)
            b((Y) => ({ ...Y, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), pe(0);
          else {
            const Y = W(U, "up", N, k.gridColumns);
            Y !== U && (b((ne) => ({ ...ne, focusedCardIndex: Y })), H(Y), oe(`Moved to card ${Y + 1} of ${N}`));
          }
          break;
        case "ArrowDown":
          q.preventDefault();
          const z = W(U, "down", N, k.gridColumns);
          z !== U && (b((Y) => ({ ...Y, focusedCardIndex: z })), H(z), oe(`Moved to card ${z + 1} of ${N}`));
          break;
        case "ArrowLeft":
          q.preventDefault();
          const te = W(U, "left", N, k.gridColumns);
          te !== U ? (b((Y) => ({ ...Y, focusedCardIndex: te })), H(te), oe(`Moved to card ${te + 1} of ${N}`)) : v.selectedIndex > 0 && (x({ type: "SET_SELECTED_INDEX", payload: v.selectedIndex - 1 }), b((Y) => ({ ...Y, focusArea: "tabs" })), setTimeout(() => he(v.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          q.preventDefault();
          const re = W(U, "right", N, k.gridColumns);
          re !== U ? (b((Y) => ({ ...Y, focusedCardIndex: re })), H(re), oe(`Moved to card ${re + 1} of ${N}`)) : v.selectedIndex < c.length - 1 && (x({ type: "SET_SELECTED_INDEX", payload: v.selectedIndex + 1 }), b((Y) => ({ ...Y, focusArea: "tabs" })), setTimeout(() => he(v.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (Z?.data[U]) {
            q.preventDefault(), b((ne) => ({
              ...ne,
              selectedCardIndex: U
            }));
            const Y = Q(U);
            Y.length > 0 ? (b((ne) => ({
              ...ne,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: Y,
              selectedCardIndex: U
              // Ensure selection is maintained
            })), oe(`Card ${U + 1} selected and navigation activated. ${Y.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : oe(`Card ${U + 1} selected.`);
          }
          break;
        case " ":
          if (Z?.data[U]) {
            q.preventDefault(), b((ne) => ({
              ...ne,
              selectedCardIndex: ne.selectedCardIndex === U ? -1 : U
            }));
            const Y = k.selectedCardIndex === U;
            oe(`Card ${U + 1} ${Y ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (ee) {
      case "ArrowUp":
      case "ArrowLeft":
        q.preventDefault();
        const z = Math.max(0, k.focusedCardElementIndex - 1);
        b((ne) => ({ ...ne, focusedCardElementIndex: z })), me(U, z);
        break;
      case "ArrowDown":
      case "ArrowRight":
        q.preventDefault();
        const te = Math.min(k.cardElements.length - 1, k.focusedCardElementIndex + 1);
        b((ne) => ({ ...ne, focusedCardElementIndex: te })), me(U, te);
        break;
      case "Enter":
        q.preventDefault();
        const re = k.cardElements[k.focusedCardElementIndex];
        re && (re.element.click(), oe(`Activated ${re.label}`));
        break;
      case " ":
        q.preventDefault();
        const Y = k.cardElements[k.focusedCardElementIndex];
        if (Y) {
          const ne = new MouseEvent("dblclick", { bubbles: !0 });
          Y.element.dispatchEvent(ne), oe(`Double-clicked ${Y.label}`);
        }
        break;
      case "Escape":
        q.preventDefault(), b((ne) => ({
          ...ne,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => H(U), 0), oe("Exited card navigation, returned to card level");
        break;
      case "Home":
        q.preventDefault(), k.cardElements.length > 0 && (b((ne) => ({ ...ne, focusedCardElementIndex: 0 })), me(U, 0));
        break;
      case "End":
        if (q.preventDefault(), k.cardElements.length > 0) {
          const ne = k.cardElements.length - 1;
          b((_e) => ({ ..._e, focusedCardElementIndex: ne })), me(U, ne);
        }
        break;
    }
  }, [k, v.selectedIndex, c, O, H, he, b, Q, me, oe]), We = ie((q) => {
    const U = y.current[q], ee = U?.parentElement;
    if (!U || !ee) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const Z = U.getBoundingClientRect(), N = ee.getBoundingClientRect();
    Z.left >= N.left && Z.right <= N.right || (console.log("Tab not visible, scrolling into view (mobile)"), U.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Me = ie((q, U) => {
    if (S !== "cards")
      return;
    const { key: ee } = q;
    switch (ee) {
      case "ArrowLeft":
        q.preventDefault();
        const Z = U > 0 ? U - 1 : c.length - 1;
        I(Z), b((re) => ({ ...re, focusedTabIndex: Z })), y.current[Z]?.focus(), We(Z);
        break;
      case "ArrowRight":
        q.preventDefault();
        const N = U < c.length - 1 ? U + 1 : 0;
        I(N), b((re) => ({ ...re, focusedTabIndex: N })), y.current[N]?.focus(), We(N);
        break;
      case "ArrowDown":
        q.preventDefault();
        const z = c[v.selectedIndex];
        z && z.columns && z.columns.length > 0 ? (b((re) => ({
          ...re,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), pe(0)) : (b((re) => ({
          ...re,
          focusArea: "cards",
          focusedCardIndex: 0
        })), H(0));
        break;
      case "Home":
        q.preventDefault(), I(0), b((re) => ({ ...re, focusedTabIndex: 0 })), y.current[0]?.focus(), We(0);
        break;
      case "End":
        q.preventDefault();
        const te = c.length - 1;
        I(te), b((re) => ({ ...re, focusedTabIndex: te })), y.current[te]?.focus(), We(te);
        break;
      case "Enter":
      case " ":
        q.preventDefault(), I(U);
        break;
    }
  }, [c.length, I, S, H, b, We]), Le = ie((q, U) => {
    if (S !== "cards")
      return;
    const { key: ee } = q, Z = c[v.selectedIndex];
    if (U === 0 && !k.isSortControlsActive) {
      switch (ee) {
        case "ArrowUp":
          q.preventDefault(), b((z) => ({
            ...z,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), he(v.selectedIndex);
          break;
        case "ArrowDown":
          q.preventDefault(), Z?.data && Z.data.length > 0 && (b((z) => ({
            ...z,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), H(0));
          break;
        case "Enter":
        case " ":
          q.preventDefault();
          const N = xe();
          if (N.length > 0) {
            b((te) => ({
              ...te,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), pe(1);
            const z = `Entered sort controls navigation mode. ${N.length} controls available. Use arrow keys to navigate between controls.`;
            oe(z);
          }
          break;
        case "Escape":
          q.preventDefault(), b((z) => ({
            ...z,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), he(v.selectedIndex);
          break;
      }
      return;
    }
    if (k.isSortControlsActive) {
      const z = xe().length;
      switch (ee) {
        case "ArrowLeft":
          q.preventDefault();
          const te = k.focusedSortControlIndex > 1 ? k.focusedSortControlIndex - 1 : z;
          b((Y) => ({ ...Y, focusedSortControlIndex: te })), pe(te);
          break;
        case "ArrowRight":
          q.preventDefault();
          const re = k.focusedSortControlIndex < z ? k.focusedSortControlIndex + 1 : 1;
          b((Y) => ({ ...Y, focusedSortControlIndex: re })), pe(re);
          break;
        case "ArrowDown":
          if (q.preventDefault(), k.isSortControlsActive) {
            const Y = k.focusedSortControlIndex < z ? k.focusedSortControlIndex + 1 : 1;
            b((ne) => ({ ...ne, focusedSortControlIndex: Y })), pe(Y);
          } else
            Z?.data && Z.data.length > 0 && (b((Y) => ({
              ...Y,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), H(0));
          break;
        case "ArrowUp":
          q.preventDefault(), b((Y) => ({
            ...Y,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), pe(0);
          break;
        case "Escape":
          q.preventDefault(), b((Y) => ({
            ...Y,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), pe(0);
          break;
      }
    }
  }, [S, c, v.selectedIndex, k.isSortControlsActive, k.focusedSortControlIndex, pe, he, H, b, oe]);
  if (S === "cards") {
    const q = c[v.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${F || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": g,
            "aria-describedby": `${C || ""} ${u ? `${u}-navigation-help` : ""}`.trim(),
            "aria-orientation": p,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((U, ee) => {
              const Z = ee === v.selectedIndex, N = U.disabled || R;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${U.id}`,
                  "aria-controls": `panel-${U.id}`,
                  "aria-selected": Z,
                  "aria-disabled": N,
                  tabIndex: Z ? 0 : -1,
                  ref: (z) => {
                    y.current[ee] = z;
                  },
                  onClick: () => I(ee),
                  onKeyDown: (z) => Me(z, ee),
                  disabled: N,
                  className: [
                    "aria-tabs-datagrid__tab",
                    Z ? "aria-tabs-datagrid__tab--selected" : "",
                    N ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: U.label }),
                    v.tabLoadingStates[ee] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    v.tabErrors[ee] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                U.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      q && q.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          Lo,
          {
            sortConfig: v.sortConfig || [],
            columns: q.columns.map((U) => ({ key: U.key, label: U.label })),
            onSortChange: (U) => {
              x({ type: "SET_SORT", payload: U });
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
            tabIndex: k.focusArea === "sort-controls" ? 0 : -1,
            ref: (U) => {
              E.current[0] = U;
            },
            onKeyDown: (U) => Le(U, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${q.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  Fn,
                  {
                    id: `card-sort-${q.id}`,
                    name: `card-sort-${q.id}`,
                    value: k.cardSortConfig ? `${k.cardSortConfig.key}-${k.cardSortConfig.direction}` : "",
                    onChange: (U) => J(U.target.value),
                    className: "sort-select",
                    children: K(q.columns).map((U) => /* @__PURE__ */ r.jsx("option", { value: U.value, children: U.label }, U.value))
                  }
                )
              ] }),
              k.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  ae(k.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  Qe,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => J(""),
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
          ref: M,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${q?.label || "Data"} cards in ${k.gridRows} rows and ${k.gridColumns} columns`,
          "aria-rowcount": k.gridRows,
          "aria-colcount": k.gridColumns,
          id: `panel-${q?.id}`,
          "aria-labelledby": `tab-${q?.id}`,
          children: G(q?.data || []).map((U, ee) => {
            const Z = k.selectedCardIndex === ee, N = k.focusedCardIndex === ee && k.focusArea === "cards", z = k.focusedCardIndex === ee && k.focusArea === "card" && k.isCardNavigationActive, te = ee === 0 && k.focusArea !== "cards", re = N || te, Y = w(ee, k.gridColumns);
            if (n.cardTemplate) {
              const ye = n.cardTemplate(U, q.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": Y.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (ke) => {
                        P.current[ee] = ke;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        Z ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        N ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        z ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": Y.col + 1,
                      "aria-selected": Z,
                      "aria-expanded": z,
                      "aria-description": z ? `Card navigation active. ${k.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: re ? 0 : -1,
                      onClick: () => {
                        b((ke) => ({
                          ...ke,
                          selectedCardIndex: ke.selectedCardIndex === ee ? -1 : ee
                        })), O(U);
                      },
                      onKeyDown: (ke) => be(ke, ee),
                      onFocus: () => {
                        b((ke) => ke.focusedCardIndex !== ee || ke.focusArea !== "cards" ? {
                          ...ke,
                          focusedCardIndex: ee,
                          focusArea: "cards"
                        } : ke);
                      },
                      children: ye
                    }
                  )
                },
                `card-${ee}`
              );
            }
            const ne = sf(U, q.columns, L, j), _e = [
              ne.className || "",
              Z ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              N ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              z ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": Y.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      Z ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      N ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      z ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": Y.col + 1,
                    "aria-selected": Z,
                    "aria-expanded": z,
                    onKeyDown: (ye) => {
                      ye.key === "Enter" && (ye.preventDefault(), b((ke) => ({
                        ...ke,
                        selectedCardIndex: ee
                      }))), be(ye, ee);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      Io,
                      {
                        ...ne,
                        ref: (ye) => {
                          P.current[ee] = ye;
                        },
                        className: _e,
                        "aria-label": `${ne["aria-label"] || ne.heading}. ${z ? `Card navigation active with ${k.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: re ? 0 : -1,
                        onClick: () => {
                          b((ye) => ({
                            ...ye,
                            selectedCardIndex: ye.selectedCardIndex === ee ? -1 : ee
                          })), O(U);
                        },
                        onKeyDown: (ye) => be(ye, ee),
                        onFocus: () => {
                          k.isCardNavigationActive || b((ye) => ye.focusedCardIndex !== ee || ye.focusArea !== "cards" ? {
                            ...ye,
                            focusedCardIndex: ee,
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
              `card-${ee}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: fe,
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
  return S === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${F || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      ea,
      {
        tabPanels: c,
        dataConfig: f,
        ariaLabel: g,
        ariaDescription: C,
        orientation: p,
        id: u,
        disabled: R,
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
      ea,
      {
        tabPanels: c,
        dataConfig: f,
        ariaLabel: g,
        ariaDescription: C,
        orientation: p,
        id: u,
        disabled: R,
        selectedIndex: h,
        onTabChange: m,
        actions: l,
        forceActionsAbove: d,
        ...T
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, Po = (e) => {
  const t = ta.find((n) => n.value === e);
  return t ? t.icon : null;
}, of = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = n.discountedPrice || n.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => Po(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, lf = (e) => Wa(e, [
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
]), cf = {
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
  booleanRenderer: (e) => Po(e),
  getDataId: (e) => `financial-${e.id}`
}, df = (e) => Wa(e, [
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
]), uf = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: of,
    createTabs: lf
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: cf,
    createTabs: df
  }
}, Es = (e, t) => {
  const n = uf[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, Ho = [
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
], ff = [
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
], hf = [
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
], pf = [
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
], Rs = [
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
], Ps = [
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
], Hs = [
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
], mf = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, gf = () => [
  {
    id: "patients",
    label: "Patients",
    data: Ho,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Mo,
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
    data: ff,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Fo,
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
    data: hf,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Bo,
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
    data: pf,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Ao,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], xf = () => {
  const [e, t] = Ne("healthcare"), n = je(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Ou,
      tabPanels: gf(),
      data: Ho
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Es("ecommerce", Rs),
      data: Rs
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Es("financial", Ps),
      data: Ps
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: mf,
      tabPanels: Wa(Hs, [
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
      data: Hs
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
      ea,
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
}, X0 = xf, zo = (e) => /* @__PURE__ */ r.jsx(so, { ...e }), K0 = ({
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
  className: C,
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
    /* @__PURE__ */ r.jsx($o, { ...s }),
    /* @__PURE__ */ r.jsx(uo, { ...u }),
    /* @__PURE__ */ r.jsx(zo, { className: C, ...p, children: /* @__PURE__ */ r.jsx(oo, { size: o, children: /* @__PURE__ */ r.jsx(Wt, { children: /* @__PURE__ */ r.jsxs(pn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Nt, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(fo, { ...l })
  ] });
}, Z0 = ({
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
  const C = {
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
    /* @__PURE__ */ r.jsx($o, { ...s }),
    /* @__PURE__ */ r.jsx(uo, { ...C }),
    /* @__PURE__ */ r.jsxs(zo, { className: m, ...g, children: [
      d && /* @__PURE__ */ r.jsx(Yr, { ...d }),
      /* @__PURE__ */ r.jsx(oo, { size: o, children: /* @__PURE__ */ r.jsx(Wt, { children: /* @__PURE__ */ r.jsxs(pn, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(Nt, { size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(fo, { ...l })
  ] });
}, Wo = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = de("nhsuk-back-link", a), d = de("nhsuk-back-link__link"), c = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
Wo.displayName = "ForwardLink";
const Kt = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function zs() {
  return typeof window > "u" ? Kt.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Oo() {
  const [e, t] = X.useState(zs());
  X.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(zs());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const n = X.useCallback((s) => e >= Kt[s], [e]), a = X.useCallback((s) => e < Kt[s], [e]), o = X.useCallback((s, i) => e >= Kt[s] && e < Kt[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: o,
    /** Raw numeric values */
    values: Kt
  };
}
function J0(e) {
  const { width: t, values: n } = Oo();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = n[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function bf(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = X.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = X.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return X.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    o ? d.set(n, String(o)) : d.delete(n), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [o, i, t, n, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const yf = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
), vf = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
function wf(e) {
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
    a11y: C,
    className: p,
    getId: u = (se) => se.id,
    orientation: R = "vertical",
    autoEnableThirdColumn: F = !0,
    onDrillChange: T,
    navigationInstructions: S = "Use arrow keys to navigate, Enter to open.",
    initialFocus: B = "first",
    skipFocusOnSelect: _ = !1,
    skipAnnouncements: L = !1,
    onFocusChange: j,
    syncUrl: D = !1,
    urlParamSelected: v = "nsv",
    urlParamDrill: x = "nsvDrill",
    urlSyncDebounceMs: y = 0,
    lazySecondary: P = !1,
    navFooter: E,
    collapsibleNav: M = !1,
    navInitiallyCollapsed: k = !1,
    onNavCollapseChange: b,
    collapseToggleLabelShow: A = "Show navigation",
    collapseToggleLabelHide: w = "Hide navigation",
    collapseToggleIconShow: $,
    collapseToggleIconHide: W,
    persistNavCollapsed: I,
    navCollapsedStorageKey: O = "nsvCollapsed",
    navCollapsedUrlParam: H = "nsvCollapsed",
    autoContentHeader: Q,
    contentHeaderLevel: fe = 2,
    renderContentHeader: oe,
    contentSubheader: K,
    secondarySubheader: V
  } = e, { up: J } = Oo(), [ae, G] = X.useState(!1);
  X.useEffect(() => {
    G(!0);
  }, []);
  const me = ae && J("medium"), he = ae && J("xlarge");
  let xe;
  d ? xe = d : me ? xe = "two-column" : xe = "list", !d && F && l && he && (xe = "three-column");
  const pe = bf({
    enabled: D,
    paramSelected: v,
    paramDrill: x
  }), [be, We] = X.useState(
    () => pe.selectedId !== void 0 ? pe.selectedId : a
  ), Me = n !== void 0 ? n : be, Le = t.find((se) => u(se) === Me), [q, U] = X.useState(
    void 0
  );
  X.useEffect(() => {
    if (Me === void 0) return;
    U(Me);
    const se = setTimeout(() => U(void 0), 220);
    return () => clearTimeout(se);
  }, [Me]);
  const ee = X.useRef(null), Z = X.useRef(null), N = X.useRef(null), z = X.useRef(null), [te, re] = X.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [Y, ne] = X.useState(() => "nav"), [_e, ye] = X.useState(0), ke = () => [
    z.current,
    Z.current,
    N.current
  ].filter(Boolean), Te = (se) => {
    const ge = ke(), le = Math.max(0, Math.min(se, ge.length - 1));
    ge[le]?.focus(), ye(le);
  }, ce = X.useCallback(
    (se) => se ? Array.from(se.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (le) => !le.hasAttribute("disabled") && le.tabIndex !== -1
    ) : [],
    []
  ), Ce = X.useCallback(
    (se) => {
      const ge = ce(Z.current);
      if (!ge.length) {
        Z.current?.focus();
        return;
      }
      const le = Math.max(0, Math.min(se, ge.length - 1)), ve = ge[le];
      ve.focus(), setTimeout(() => {
        document.activeElement !== ve && (ve.focus(), setTimeout(() => {
          document.activeElement !== ve && ve.click();
        }, 10));
      }, 10), re((Ae) => ({ ...Ae, contentIndex: le }));
      const He = (Ae) => {
        Ae.key === "Escape" && (Ae.preventDefault(), Ae.stopPropagation(), Z.current?.focus(), ve.removeEventListener("keydown", He));
      };
      ge.forEach((Ae) => {
        const Re = Ae._escapeHandler;
        Re && Ae.removeEventListener("keydown", Re);
      }), ve._escapeHandler = He, ve.addEventListener("keydown", He);
    },
    [ce]
  ), Fe = X.useCallback(
    (se) => {
      const ge = ce(N.current);
      if (!ge.length) {
        N.current?.focus();
        return;
      }
      const le = Math.max(0, Math.min(se, ge.length - 1)), ve = ge[le];
      ve.focus(), setTimeout(() => {
        document.activeElement !== ve && (ve.focus(), setTimeout(() => {
          document.activeElement !== ve && ve.click();
        }, 10));
      }, 10), re((Ae) => ({ ...Ae, secondaryIndex: le }));
      const He = (Ae) => {
        Ae.key === "Escape" && (Ae.preventDefault(), Ae.stopPropagation(), N.current?.focus(), ve.removeEventListener("keydown", He));
      };
      ge.forEach((Ae) => {
        const Re = Ae._escapeHandler;
        Re && Ae.removeEventListener("keydown", Re);
      }), ve._escapeHandler = He, ve.addEventListener("keydown", He);
    },
    [ce]
  ), Oe = (se) => {
    if (se.defaultPrevented) return;
    const ge = se.key, le = se.target, ve = !!Ze.current && Ze.current.contains(le), He = !!Z.current && Z.current.contains(le), Ae = !!N.current && N.current.contains(le), Re = !!N.current, Vt = le === z.current || le === Z.current || le === N.current, Bt = Be && (xe === "list" || xe === "cards"), jn = He && !!le.closest(".nhs-navigation-split-view__header");
    if (Y === "containers" && Vt) {
      if (ge === "ArrowRight") {
        se.preventDefault();
        const Se = ke(), Pe = Math.min(Se.length - 1, _e + 1);
        Te(Pe);
        return;
      }
      if (ge === "ArrowLeft") {
        se.preventDefault();
        const Se = Math.max(0, _e - 1);
        Te(Se);
        return;
      }
      if (ge === "Home") {
        se.preventDefault(), Te(0);
        return;
      }
      if (ge === "End") {
        se.preventDefault(), Te(ke().length - 1);
        return;
      }
      if (ge === "Enter" || ge === " ") {
        if (se.preventDefault(), le === z.current) {
          if (ne("nav"), Ze.current) {
            const Se = Array.from(
              Ze.current.querySelectorAll("[data-nav-item]")
            );
            (Se[ze >= 0 ? ze : 0] || Se[0])?.focus();
          }
        } else le === Z.current ? (ne("content"), Ce(te.contentIndex)) : le === N.current && (ne("secondary"), Fe(te.secondaryIndex));
        return;
      }
      return;
    }
    if (ge === "Escape") {
      if (Y === "content" || Y === "secondary") {
        if (He || Ae) {
          if (se.preventDefault(), ne("nav"), Ze.current) {
            const Pe = Array.from(
              Ze.current.querySelectorAll("[data-nav-item]")
            )[ze >= 0 ? ze : 0];
            setTimeout(() => Pe?.focus(), 10);
          }
        } else if ((le === Z.current || le === N.current) && (se.preventDefault(), ne("nav"), Ze.current)) {
          const Pe = Array.from(
            Ze.current.querySelectorAll("[data-nav-item]")
          )[ze >= 0 ? ze : 0];
          setTimeout(() => Pe?.focus(), 10);
        }
      }
      return;
    }
    if (ge === "Enter" || ge === " ") {
      if (le.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (le === Z.current && Y === "content") {
        se.preventDefault(), se.stopPropagation(), ce(Z.current).length > 0 && setTimeout(() => {
          Ce(te.contentIndex);
        }, 50);
        return;
      }
      if (le === N.current && Y === "secondary") {
        se.preventDefault(), se.stopPropagation(), ce(
          N.current
        ).length > 0 && setTimeout(() => {
          Fe(te.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Bt && jn && !Vt && (ge === "ArrowRight" || ge === "ArrowLeft")) {
      const Se = ce(Z.current).filter(
        (Pe) => Pe.closest(".nhs-navigation-split-view__header")
      );
      if (Se.length > 1) {
        const Pe = Se.indexOf(le);
        if (Pe >= 0) {
          const Qa = (Pe + (ge === "ArrowRight" ? 1 : -1) + Se.length) % Se.length;
          se.preventDefault(), Se[Qa].focus();
          return;
        }
      }
    }
    if (ge === "ArrowRight") {
      if (ve || Y === "nav") {
        se.preventDefault(), ne("content"), setTimeout(() => Z.current?.focus(), 10);
        return;
      }
      if (He || Y === "content") {
        Re && (se.preventDefault(), ne("secondary"), setTimeout(() => N.current?.focus(), 10));
        return;
      }
    }
    if (ge === "ArrowLeft") {
      if (Ae || Y === "secondary") {
        se.preventDefault(), ne("content"), setTimeout(() => Z.current?.focus(), 10);
        return;
      }
      if (He || Y === "content") {
        if (se.preventDefault(), ne("nav"), Ze.current) {
          const Pe = Array.from(
            Ze.current.querySelectorAll("[data-nav-item]")
          )[ze >= 0 ? ze : 0];
          setTimeout(() => Pe?.focus(), 10);
        }
        return;
      }
    }
    if (ge === "Home" && !ve && (se.preventDefault(), ne("nav"), Ze.current)) {
      const Se = Array.from(
        Ze.current.querySelectorAll("[data-nav-item]")
      ), Pe = Se[ze >= 0 ? ze : 0] || Se[0];
      setTimeout(() => Pe?.focus(), 10);
    }
    if (ge === "End") {
      const Se = Re ? N.current : Z.current;
      Se && !Se.contains(le) && (se.preventDefault(), Re ? (ne("secondary"), setTimeout(() => N.current?.focus(), 10)) : (ne("content"), setTimeout(() => Z.current?.focus(), 10)));
    }
    if (ge === "ArrowDown" || ge === "ArrowUp") {
      if (le === Z.current && ge === "ArrowDown") {
        se.preventDefault(), ce(Z.current).length > 0 && Ce(0);
        return;
      }
      if (le === N.current && ge === "ArrowDown") {
        se.preventDefault(), ce(
          N.current
        ).length > 0 && Fe(0);
        return;
      }
      if (He) {
        const Se = ce(Z.current);
        if (Se.length) {
          se.preventDefault();
          const Pe = ge === "ArrowDown" ? 1 : -1, ut = (te.contentIndex + Pe + Se.length) % Se.length;
          Ce(ut);
        }
      } else if (Ae) {
        const Se = ce(N.current);
        if (Se.length) {
          se.preventDefault();
          const Pe = ge === "ArrowDown" ? 1 : -1, ut = (te.secondaryIndex + Pe + Se.length) % Se.length;
          Fe(ut);
        }
      }
    }
  }, Be = !!Le && (xe === "list" || xe === "cards"), tt = X.useMemo(() => Q === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : Q === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : Q === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: Q.mobile !== void 0 ? Q.mobile : !0,
    tablet: Q.tablet || !1,
    desktop: Q.desktop || !1
  }, [Q]), $t = ae && J("medium") && !J("xlarge"), ht = ae && J("xlarge"), ct = !!l, Ue = xe === "three-column", [Ve, sn] = X.useState(!1);
  X.useEffect(() => {
    Ue && Ve && sn(!1);
  }, [Ue, Ve]), X.useEffect(() => {
    Ve && !Ue && (ne("secondary"), ye(2), setTimeout(() => {
      N.current?.focus();
    }, 50));
  }, [Ve, Ue]), X.useEffect(() => {
    !Ve && !Ue && Y === "secondary" && (ne("content"), ye(1), setTimeout(() => {
      Z.current?.focus();
    }, 50));
  }, [Ve, Ue, Y]);
  const vr = !!Le && (Be && tt.mobile || !Be && $t && tt.tablet || !Be && ht && tt.desktop) || ct && !Ue, cl = `h${fe}`, wr = Le ? X.createElement(
    cl,
    {
      style: {
        marginLeft: Be ? 32 : 0,
        marginRight: Be ? 32 : 0
      }
    },
    Le.label
  ) : null, Za = Be ? "mobile" : $t ? "tablet" : "desktop", dl = ct && !Ue && !Ve, _r = Be && tt.mobile ? /* @__PURE__ */ r.jsx(
    Yr,
    {
      element: "button",
      text: f,
      style: { marginRight: 16 },
      onClick: () => Yt(void 0, void 0)
    }
  ) : void 0, Sr = dl ? /* @__PURE__ */ r.jsx(
    Wo,
    {
      element: "button",
      text: h,
      onClick: () => {
        sn(!0);
      }
    }
  ) : void 0, kr = !Ue && Ve ? /* @__PURE__ */ r.jsx(
    Yr,
    {
      element: "button",
      text: f,
      style: { marginRight: 16 },
      onClick: () => sn(!1)
    }
  ) : void 0, ul = X.useMemo(() => {
    if (!vr || !Le) return null;
    if (oe)
      return oe({
        item: Le,
        detailActive: Be,
        context: Za,
        backLink: _r,
        defaultHeading: wr
      });
    const se = Le && K ? typeof K == "function" ? K(Le) : K : null;
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
            kr || _r,
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
                  wr,
                  se && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: se })
                ]
              }
            )
          ]
        }
      ),
      Sr && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: Sr })
    ] });
  }, [
    vr,
    Le,
    oe,
    Be,
    Za,
    _r,
    kr,
    wr,
    Sr,
    K
  ]);
  X.useEffect(() => {
    if (!D) return;
    const se = xe === "three-column";
    let ge = !1;
    const le = () => {
      ge || (pe.selectedId !== Me && pe.setSelectedId(Me), pe.drilledIn !== se && pe.setDrilledIn(se));
    };
    if (y && y > 0) {
      const ve = setTimeout(le, y);
      return () => {
        ge = !0, clearTimeout(ve);
      };
    } else
      le();
  }, [D, pe, Me, xe, y]), X.useEffect(() => {
    if (!D) return;
    const se = () => {
      const ge = new URLSearchParams(window.location.search), le = ge.get(v);
      ge.get(x), We(le === null ? void 0 : le);
    };
    return window.addEventListener("popstate", se), () => window.removeEventListener("popstate", se);
  }, [
    D,
    v,
    x,
    d,
    l
  ]);
  const Cn = X.useRef(0), pt = X.useRef(
    null
  ), Yt = X.useCallback(
    (se, ge) => {
      se !== Me && (n === void 0 && We(se), o?.(se, ge));
    },
    [n, o, Me]
  );
  X.useEffect(() => {
    if (!_ && Be && Z.current) {
      const se = setTimeout(() => Z.current?.focus(), 30);
      return () => clearTimeout(se);
    }
  }, [Be, Me, _]);
  const Ze = X.useRef(null), [ze, on] = X.useState(
    () => B === "first" ? 0 : -1
  );
  X.useEffect(() => {
    if (ze < 0 || !Ze.current) return;
    const ge = Array.from(
      Ze.current.querySelectorAll("[data-nav-item]")
    )[ze];
    if (ge) {
      document.activeElement !== ge && ge.focus(), Cn.current = ze;
      const le = t[ze];
      j?.(
        le ? u(le) : void 0,
        le,
        ze
      );
    }
  }, [ze, t, j, u]);
  const fl = (se) => {
    const ge = R === "vertical" ? "ArrowDown" : "ArrowRight", le = R === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (se.key === "ArrowRight" && R === "vertical") {
      se.preventDefault(), Ve ? (ne("secondary"), setTimeout(() => {
        N.current?.focus();
      }, 10)) : (ne("content"), setTimeout(() => {
        Z.current?.focus();
      }, 10));
      return;
    }
    if (se.key === ge)
      se.preventDefault(), on((ve) => Math.min(t.length - 1, ve + 1));
    else if (se.key === le)
      se.preventDefault(), on((ve) => Math.max(0, ve - 1));
    else if (se.key === "Home")
      se.preventDefault(), on(0);
    else if (se.key === "End")
      se.preventDefault(), on(t.length - 1);
    else if (se.key === "Enter" || se.key === " ") {
      se.preventDefault();
      const ve = t[ze];
      ve && !ve.disabled && Yt(u(ve), ve);
    } else if (se.key.length === 1 && /[a-z0-9]/i.test(se.key)) {
      pt.current || (pt.current = { buffer: "", last: 0 });
      const ve = Date.now(), He = 700, Ae = se.key.toLowerCase();
      ve - pt.current.last > He ? pt.current.buffer = Ae : pt.current.buffer += Ae, pt.current.last = ve;
      let Re = pt.current.buffer;
      const Vt = Re.split("").every((ut) => ut === Re[0]), Bt = t.map(
        (ut) => String(ut.label || "").toLowerCase()
      );
      let jn = 0;
      ze >= 0 && (jn = (ze + 1) % t.length);
      let Se;
      const Pe = (ut, Qa) => {
        const es = t.length;
        for (let Nr = 0; Nr < es; Nr++) {
          const Tr = (jn + Nr) % es;
          if (!t[Tr].disabled && Bt[Tr].startsWith(ut))
            return Tr;
        }
      };
      Vt && Re.length > 1 ? Se = Pe(Re[0]) : (Se = Pe(Re), Se === void 0 && Re.length > 1 && (Se = Pe(Re[Re.length - 1]), Se !== void 0 && pt.current && (pt.current.buffer = Re[Re.length - 1]))), Se !== void 0 && on(Se);
    }
  }, hl = X.useMemo(() => {
    if (I && (I === "url" || I === "both") && typeof window < "u") {
      const ge = new URLSearchParams(window.location.search).get(H);
      if (ge === "1") return !0;
      if (ge === "0") return !1;
    }
    if (I && (I === "localStorage" || I === "both") && typeof window < "u")
      try {
        const se = window.localStorage.getItem(O);
        if (se === "1") return !0;
        if (se === "0") return !1;
      } catch {
      }
    return k;
  }, [
    I,
    k,
    O,
    H
  ]), [dt, pl] = X.useState(hl);
  X.useEffect(() => {
    b?.(dt);
  }, [dt, b]);
  const ml = X.useCallback(() => {
    me && M && pl((se) => !se);
  }, [me, M]);
  X.useEffect(() => {
    if (I && !(typeof window > "u")) {
      if (I === "localStorage" || I === "both")
        try {
          window.localStorage.setItem(
            O,
            dt ? "1" : "0"
          );
        } catch {
        }
      if (I === "url" || I === "both") {
        const se = new URLSearchParams(window.location.search);
        se.set(H, dt ? "1" : "0");
        const ge = `${window.location.pathname}?${se.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", ge);
      }
    }
  }, [
    dt,
    I,
    O,
    H
  ]);
  const gl = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Be ? "nhs-navigation-split-view--detail-active" : "",
    xe === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    M && me && dt ? "nhs-navigation-split-view--nav-collapsed" : "",
    p
  ].filter(Boolean).join(" "), Cr = X.useRef(null);
  X.useEffect(() => {
    if (!L && Cr.current) {
      const se = Le ? `Selected ${Le.label}` : "Selection cleared";
      Cr.current.textContent = se;
    }
  }, [Le, L]), X.useEffect(() => {
    !Be && Me == null && Ze.current && Ze.current.querySelectorAll("[data-nav-item]")[Cn.current]?.focus();
  }, [Be, Me]);
  const It = xe === "three-column", [jr, xl] = X.useState(!1);
  X.useEffect(() => {
    It && !jr && xl(!0);
  }, [It, jr]);
  const Ja = X.useRef(It);
  X.useEffect(() => {
    Ja.current !== It && (T?.(It), Ja.current = It);
  }, [It, T]);
  const bl = () => {
    if (xe === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": Me ? String(Me) : void 0,
          children: [
            t.map((le) => {
              const ve = u(le), He = ve === Me;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": He,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(ve),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": He || void 0,
                      "data-disabled": le.disabled || void 0,
                      disabled: le.disabled,
                      onClick: () => !le.disabled && Yt(ve, le),
                      children: [
                        le.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: le.icon }),
                        /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: le.label }),
                        le.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: le.description }),
                        s?.(le),
                        le.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: le.badge })
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
    const se = "nsv-nav-instructions", ge = X.useMemo(() => X.memo(
      ({
        item: le,
        idx: ve,
        selected: He,
        focused: Ae
      }) => {
        const Re = u(le), Vt = le.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Ae ? 0 : -1,
          onClick: () => {
            Cn.current = ve, Yt(Re, le);
          },
          onKeyDown: (Bt) => {
            (Bt.key === "Enter" || Bt.key === " ") && (Bt.preventDefault(), Cn.current = ve, Yt(Re, le));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(Re),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": He,
            "aria-current": He ? "true" : void 0,
            "data-selected": He || void 0,
            "data-disabled": le.disabled || void 0,
            ...Vt,
            children: [
              le.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: le.icon }),
              /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: le.label }),
                le.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: le.description }),
                s?.(le)
              ] }),
              le.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: le.badge })
            ]
          }
        );
      }
    ), [u, Yt, s]);
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "ul",
        {
          ref: Ze,
          className: "nhs-navigation-split-view__list",
          onKeyDown: fl,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": se,
          "aria-activedescendant": Me ? String(Me) : void 0,
          children: [
            t.map((le, ve) => /* @__PURE__ */ r.jsx(
              ge,
              {
                item: le,
                idx: ve,
                selected: u(le) === Me,
                focused: ve === ze || ze === -1 && ve === 0 && B === "first",
                "data-just-selected": u(le) === q ? "true" : void 0
              },
              u(le)
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
          id: se,
          style: {
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)"
          },
          children: S
        }
      )
    ] });
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: ee,
      className: gl,
      "aria-label": C?.rootLabel,
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
                  ref: z,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": C?.navigationLabel || "Items",
                  "data-collapsed": dt || void 0,
                  tabIndex: 0,
                  children: [
                    M && me && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: ml,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": dt ? A : w,
                        title: dt ? A : w,
                        children: dt ? $ || /* @__PURE__ */ r.jsx(vf, {}) : W || /* @__PURE__ */ r.jsx(yf, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: bl() }),
                    E && /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: E
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: Z,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": C?.contentLabel || "Content",
                  "data-has-selection": !!Le || void 0,
                  tabIndex: 0,
                  style: {
                    display: Ve && !Ue ? "none" : void 0
                  },
                  children: [
                    vr && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: ul }),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(Le)
                      }
                    )
                  ]
                }
              ),
              xe === "three-column" && (!P || jr) || Ve && !Ue ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: N,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": C?.secondaryContentLabel || "Secondary",
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
                                  kr,
                                  /* @__PURE__ */ r.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: Le && typeof Le == "object" && "label" in Le ? Le.label : String(Le) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        Le && V && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof V == "function" ? V(Le) : V
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(Le) })
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
            ref: Cr,
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
            children: It ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
wf.displayName = "NavigationSplitView";
const Ws = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), _f = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, d = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, f = Math.floor(e._startFraction) + 2, h = Math.max(1, Math.round(e._spanColumns)), m = n && e.childItems && e.childItems.length > 0, g = (p) => {
    m && (p.preventDefault(), a?.(e));
  }, C = m ? {
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
      className: de("nhsuk-product-roadmap__item", m && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: d, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": f,
      "aria-colspan": h,
      ...C,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          m && /* @__PURE__ */ r.jsx("span", { className: de("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Sf = wl(({
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
  const [f, h] = Ne(() => /* @__PURE__ */ new Set()), [m, g] = Ne(() => /* @__PURE__ */ new Set()), C = Ie(/* @__PURE__ */ new Set()), p = ie((y) => f.has(y), [f]), u = ie((y) => {
    h((P) => {
      const E = new Set(P);
      return E.has(y.id) ? (E.delete(y.id), g((M) => {
        const k = new Set(M);
        return k.add(y.id), k;
      }), setTimeout(() => g((M) => {
        const k = new Set(M);
        return k.delete(y.id), k;
      }), 240), l?.(y.id, !1)) : (E.add(y.id), l?.(y.id, !0)), E;
    });
  }, [l]);
  _l(() => {
    if (d !== "inline" || !i) return;
    const y = [];
    if (f.forEach((k) => {
      C.current.has(k) || y.push(k);
    }), C.current = new Set(f), !y.length) return;
    const P = typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches, E = y.map((k) => `.nhsuk-product-roadmap__inline-children[data-parent="${k}"] .nhsuk-product-roadmap__inline-child`).join(","), M = Array.from(document.querySelectorAll(E));
    if (M.length) {
      if (P) {
        M.forEach((k) => {
          k.style.opacity = "1", k.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((k) => {
        (k.gsap || k.default || k).to(M, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        M.forEach((k) => {
          k.style.opacity = "1", k.style.transform = "translateY(0)";
        });
      });
    }
  }, [f, d, i]);
  const R = ie(() => {
    f.size && h(/* @__PURE__ */ new Set());
  }, [f]), F = de("nhsuk-product-roadmap", o), T = Ws(n, 120, 1200, 400), S = Ws(a, 1, 6, 2), B = je(() => e.map((y) => /* @__PURE__ */ new Date(y + " 01")), [e]), _ = je(() => {
    if (B.length === 0) {
      const E = /* @__PURE__ */ new Date();
      return [E, E];
    }
    const y = new Date(B[0]), P = bn.offset(new Date(B[B.length - 1]), 1);
    return [y, P];
  }, [B]), L = je(() => za().domain(_).range([0, B.length * T]), [_, B.length, T]), j = ie((y) => {
    if (y.startDate) {
      const w = new Date(y.startDate), $ = new Date(y.endDate ?? y.startDate);
      $ < w && $.setTime(w.getTime());
      const W = L(w), I = bn.offset(new Date($), 1);
      let O = L(I);
      Number.isFinite(O) || (O = W + T);
      const H = Math.max(T * 0.25, O - W), Q = W / T, fe = H / T;
      return { ...y, _pxLeft: W, _pxWidth: H, _startFraction: Q, _spanColumns: fe };
    }
    const P = y.date ?? 1, E = y.dateOffset ?? 0, M = y.length ?? 1, k = y.partialLength ?? 1, b = P - 1 + E, A = M - 1 + k;
    return { ...y, _pxLeft: b * T, _pxWidth: A * T, _startFraction: b, _spanColumns: A };
  }, [L, T]), D = je(() => t.map((y) => {
    const E = y.roadmapItems.map((k) => {
      const b = !k.childItems && k.children ? { ...k, childItems: k.children } : { ...k };
      return j(b);
    }).sort((k, b) => k._pxLeft !== b._pxLeft ? k._pxLeft - b._pxLeft : b._pxWidth - k._pxWidth), M = [];
    return E.forEach((k) => {
      const b = k._pxLeft, A = k._pxLeft + k._pxWidth;
      let w = M.findIndex(($) => $ <= b);
      w === -1 && (w = M.length, M.push(0)), M[w] = A, k.verticalPosition = w + 1;
    }), { ...y, roadmapItems: E, _laneCount: M.length };
  }), [t, j]), v = je(() => D.map((y) => y._laneCount || 1), [D]), x = je(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
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
          e.map((y, P) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": P + 2, children: y }, y + P))
        ] }),
        D.map((y, P) => {
          const E = P + 2, M = v[P];
          let k, b = 0, A = [];
          i && d === "inline" && (A = y.roadmapItems.filter((I) => p(I.id) && I.childItems && I.childItems.length).map((I) => ({ id: I.id, lane: I.verticalPosition || 1, count: I.childItems.length })).sort((I, O) => I.lane - O.lane), b = A.reduce((I, O) => I + O.count, 0));
          const w = M + b;
          k = `calc((${w} * var(--roadmap-item-block-height)) + (max(0, ${w} - 1) * var(--roadmap-row-gap)))`;
          const $ = {};
          let W = 0;
          return A.forEach((I) => {
            W += I.count, $[I.lane + 1] = W;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": E, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: y.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: k }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: y.roadmapItems.map((I) => {
              const O = (I.verticalPosition || 1) - 1, H = A.filter((K) => K.lane - 1 < O).reduce((K, V) => K + V.count, 0), Q = O + H, fe = p(I.id), oe = m.has(I.id);
              return /* @__PURE__ */ r.jsxs(at.Fragment, { children: [
                /* @__PURE__ */ r.jsx(_f, { item: I, maxLines: S, enableDrilldown: i, onExpand: u, isActive: fe, topLaneIndex: Q, laneOffset: H }),
                i && d === "inline" && (fe || oe) && I.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": I.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${I.title} child tasks`, children: I.childItems.map((K, V) => {
                  const J = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let ae = I._pxLeft, G = I._pxWidth;
                  if (K.startDate) {
                    const xe = new Date(K.startDate);
                    let pe = K.endDate ? new Date(K.endDate) : new Date(xe);
                    pe < xe && (pe = new Date(xe));
                    const be = new Date(pe);
                    be.setDate(be.getDate() + 1);
                    const We = L(xe);
                    let Me = L(be);
                    (!Number.isFinite(Me) || Me <= We) && (Me = We + 6), ae = We, G = Math.max(6, Me - We);
                  }
                  const he = Q + 1 + V;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: de("nhsuk-product-roadmap__inline-child", K.status && `nhsuk-product-roadmap__inline-child--status-${K.status}`, !fe && oe && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${ae}px`, width: `${G}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${he})`, height: J, opacity: fe ? 0 : void 0, transform: fe ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: K.title })
                      ]
                    },
                    K.id
                  );
                }) })
              ] }, I.id);
            }) }) })
          ] }, y.heading + P);
        }),
        i && d === "overlay" && f.size === 1 && (() => {
          const y = Array.from(f)[0], P = t.flatMap((E) => E.roadmapItems).find((E) => E.id === y);
          return !P || !P.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${P.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: P.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: R, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: P.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: P.childItems.map((E) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: E.title }),
                E.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: E.content })
              ] }, E.id)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: R, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Sf.displayName = "ProductRoadmap";
function qe(e) {
  return function() {
    return e;
  };
}
const na = Math.PI, ra = 2 * na, Et = 1e-6, kf = ra - Et;
function Uo(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Cf(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Uo;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class jf {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Uo : Cf(t);
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
    else if (m > Et) if (!(Math.abs(h * d - c * f) > Et) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let g = a - i, C = o - l, p = d * d + c * c, u = g * g + C * C, R = Math.sqrt(p), F = Math.sqrt(m), T = s * Math.tan((na - Math.acos((p + m - u) / (2 * R * F))) / 2), S = T / F, B = T / R;
      Math.abs(S - 1) > Et && this._append`L${t + S * f},${n + S * h}`, this._append`A${s},${s},0,0,${+(h * g > f * C)},${this._x1 = t + B * d},${this._y1 = n + B * c}`;
    }
  }
  arc(t, n, a, o, s, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), d = a * Math.sin(o), c = t + l, f = n + d, h = 1 ^ i, m = i ? o - s : s - o;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > Et || Math.abs(this._y1 - f) > Et) && this._append`L${c},${f}`, a && (m < 0 && (m = m % ra + ra), m > kf ? this._append`A${a},${a},0,1,${h},${t - l},${n - d}A${a},${a},0,1,${h},${this._x1 = c},${this._y1 = f}` : m > Et && this._append`A${a},${a},0,${+(m >= na)},${h},${this._x1 = t + a * Math.cos(s)},${this._y1 = n + a * Math.sin(s)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function Go(e) {
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
  }, () => new jf(t);
}
function Yo(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Vo(e) {
  this._context = e;
}
Vo.prototype = {
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
function qo(e) {
  return new Vo(e);
}
function Xo(e) {
  return e[0];
}
function Ko(e) {
  return e[1];
}
function Zo(e, t) {
  var n = qe(!0), a = null, o = qo, s = null, i = Go(l);
  e = typeof e == "function" ? e : e === void 0 ? Xo : qe(e), t = typeof t == "function" ? t : t === void 0 ? Ko : qe(t);
  function l(d) {
    var c, f = (d = Yo(d)).length, h, m = !1, g;
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
function Nf(e, t, n) {
  var a = null, o = qe(!0), s = null, i = qo, l = null, d = Go(c);
  e = typeof e == "function" ? e : e === void 0 ? Xo : qe(+e), t = typeof t == "function" ? t : qe(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? Ko : qe(+n);
  function c(h) {
    var m, g, C, p = (h = Yo(h)).length, u, R = !1, F, T = new Array(p), S = new Array(p);
    for (s == null && (l = i(F = d())), m = 0; m <= p; ++m) {
      if (!(m < p && o(u = h[m], m, h)) === R)
        if (R = !R)
          g = m, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), C = m - 1; C >= g; --C)
            l.point(T[C], S[C]);
          l.lineEnd(), l.areaEnd();
        }
      R && (T[m] = +e(u, m, h), S[m] = +t(u, m, h), l.point(a ? +a(u, m, h) : T[m], n ? +n(u, m, h) : S[m]));
    }
    if (F) return l = null, F + "" || null;
  }
  function f() {
    return Zo().defined(o).curve(i).context(s);
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
function Os(e) {
  return e < 0 ? -1 : 1;
}
function Us(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), i = (n - e._y1) / (o || a < 0 && -0), l = (s * o + i * a) / (a + o);
  return (Os(s) + Os(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function Gs(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Pr(e, t, n) {
  var a = e._x0, o = e._y0, s = e._x1, i = e._y1, l = (s - a) / 3;
  e._context.bezierCurveTo(a + l, o + l * t, s - l, i - l * n, s, i);
}
function Gn(e) {
  this._context = e;
}
Gn.prototype = {
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
        Pr(this, this._t0, Gs(this, this._t0));
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
          this._point = 3, Pr(this, Gs(this, n = Us(this, e, t)), n);
          break;
        default:
          Pr(this, this._t0, n = Us(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(Gn.prototype).point = function(e, t) {
  Gn.prototype.point.call(this, t, e);
};
function Jo(e) {
  return new Gn(e);
}
function Tf(e, t, n) {
  const a = ho(e, t);
  return za().domain(a).range(n);
}
function Ys(e, t, n) {
  const [a, o] = ho(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(o)))
    return Qr().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const d = o - a, c = (d > 0 ? d : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = o ?? 0;
  return Qr().domain([i, l]).nice().range(n);
}
function Df(e, t, n, a) {
  const o = Zo().x(t).y(n);
  return a?.smooth !== !1 && o.curve(Jo), o(e) ?? "";
}
function $f(e = {}) {
  const t = X.useRef(null), n = X.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, o] = X.useState({ width: 0, height: 0 });
  X.useLayoutEffect(() => {
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
const Qo = X.createContext(null);
function _n() {
  return X.useContext(Qo);
}
const If = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = $f(t), d = { height: e, position: "relative" };
  return n !== void 0 && (d.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: d, role: s, "aria-label": i, children: /* @__PURE__ */ r.jsx(Qo.Provider, { value: l, children: o }) });
}, ei = X.createContext(null), Sn = () => X.useContext(ei), Lf = ({
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
  const f = _n(), h = t ?? f?.innerWidth ?? 0, m = n ?? f?.innerHeight ?? 0, g = X.useMemo(() => e.flatMap((S) => S.data), [e]), C = X.useCallback((S) => {
    if (a) return a(S);
    const B = S.x;
    return B instanceof Date ? B : new Date(B);
  }, [a]), p = d ?? 6, u = c ?? 6, R = X.useMemo(() => Tf(g, C, [p, Math.max(0, h - p)]), [g, C, h, p]), F = X.useMemo(() => {
    if (l) {
      const S = Ys([], (B) => B.y, [Math.max(0, m - u), u]);
      return S.domain(l), S;
    }
    return Ys(g, (S) => S.y, [Math.max(0, m - u), u]);
  }, [g, m, l]), T = X.useMemo(() => ({
    xScale: R,
    yScale: F,
    getXTicks: (S = s) => R.ticks(S),
    getYTicks: (S = i) => F.ticks(S)
  }), [R, F, s, i]);
  return /* @__PURE__ */ r.jsx(ei.Provider, { value: T, children: o });
}, Vs = ({
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
  const C = Sn(), p = _n(), u = t || (e === "x" ? C?.xScale : C?.yScale), R = n ?? (e === "x" ? 6 : 5), F = typeof o == "function", T = X.useMemo(() => {
    if (F || !g) return;
    const _ = (L) => new Intl.DateTimeFormat(void 0, L);
    switch (g) {
      case "dayShortMonth":
        return (L) => {
          const j = L instanceof Date ? L : new Date(L);
          return `${j.getDate()}
${_({ month: "short" }).format(j)}`;
        };
      case "dayShortMonthYear":
        return (L) => {
          const j = L instanceof Date ? L : new Date(L);
          return `${j.getDate()}
${_({ month: "short" }).format(j)} ${j.getFullYear()}`;
        };
      case "shortMonth":
        return (L) => {
          const j = L instanceof Date ? L : new Date(L);
          return _({ month: "short" }).format(j);
        };
      case "shortMonthYear":
        return (L) => {
          const j = L instanceof Date ? L : new Date(L);
          return `${_({ month: "short" }).format(j)} ${j.getFullYear()}`;
        };
      case "hourMinute":
        return (L) => {
          const j = L instanceof Date ? L : new Date(L);
          return _({ hour: "2-digit", minute: "2-digit" }).format(j);
        };
      default:
        return;
    }
  }, [F, g]);
  let S = F ? o : T || ((_) => String(_));
  const B = X.useMemo(() => a && Array.isArray(a) ? a : u ? typeof u.ticks == "function" ? u.ticks(R) : u.domain ? u.domain() : [] : [], [u, R, a]);
  if (e === "x" && !F && !g && B.length && B.every((_) => _ instanceof Date)) {
    const _ = B[0], L = B[B.length - 1], j = L.getTime() - _.getTime(), D = 24 * 3600 * 1e3, v = 365 * D, x = _.getFullYear() === L.getFullYear(), y = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (j < 2 * D) {
      const P = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      S = (E) => P.format(E);
    } else if (j < 32 * D)
      S = (P) => {
        const E = P;
        return `${E.getDate()} ${y.format(E)}`;
      };
    else if (j < v && x)
      S = (P) => y.format(P);
    else if (j < 2 * v) {
      const P = /* @__PURE__ */ new Set();
      S = (E) => {
        const M = E, k = M.getMonth();
        return P.has(k) || P.add(k), `${y.format(M)} ${M.getFullYear()}`;
      };
    } else
      S = (P) => String(P.getFullYear());
  }
  if (!u || !p) return null;
  if (e === "x") {
    const _ = i ?? p.innerHeight, L = typeof u.bandwidth == "function", j = L ? u.bandwidth() : 0, D = (y) => {
      const P = u(y);
      return L ? P + j / 2 : P;
    };
    let v = d ?? 0;
    if (f && d == null) {
      const y = B.map((E) => S(E).replace(/\n.*/g, "")), P = y.length ? y.reduce((E, M) => E + M.length, 0) / y.length : 0;
      v = Math.max(12, Math.round(P * 6 + 4));
    }
    const x = X.useMemo(() => {
      if (a && Array.isArray(a) || v <= 0) return B;
      const y = [];
      let P = -1 / 0;
      for (const E of B) {
        const M = D(E);
        M - P >= v && (y.push(E), P = M);
      }
      return y;
    }, [B, u, v, a, L, j]);
    return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${_})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ r.jsx("line", { x1: 0, x2: p.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      x.map((y, P) => {
        const E = S(y), M = c && E.length > c ? E.slice(0, Math.max(1, c - 1)) + "…" : E, k = m ? M.split(/\n/) : [M.replace(/\n/g, " ")], b = h < 0 ? "end" : h > 0 ? "start" : "middle";
        return /* @__PURE__ */ r.jsxs("g", { transform: `translate(${D(y)},0)`, children: [
          /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ r.jsxs("text", { y: 9, textAnchor: b, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: h ? `rotate(${h})` : void 0, fontFamily: "inherit", children: [
            k.map((A, w) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: w === 0 ? 0 : "1.1em", children: A }, w)),
            M !== E && /* @__PURE__ */ r.jsx("title", { children: E })
          ] })
        ] }, y?.toString?.() || P);
      })
    ] });
  }
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    B.map((_, L) => {
      const j = S(_), D = c && j.length > c ? j.slice(0, Math.max(1, c - 1)) + "…" : j, v = m ? D.split(/\n/) : [D.replace(/\n/g, " ")];
      return /* @__PURE__ */ r.jsxs("g", { transform: `translate(0,${u(_)})`, children: [
        /* @__PURE__ */ r.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ r.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          v.map((x, y) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: y === 0 ? 0 : "1.1em", children: x }, y)),
          D !== j && /* @__PURE__ */ r.jsx("title", { children: j })
        ] })
      ] }, _?.toString?.() || L);
    }),
    s && /* @__PURE__ */ r.jsx("text", { transform: "rotate(-90)", x: -p.innerHeight / 2, y: -p.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: s })
  ] });
}, Mf = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o
}) => {
  const s = Sn(), i = _n();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", o].filter(Boolean).join(" "), children: [
    e === "y" && l.map((d, c) => /* @__PURE__ */ r.jsx("line", { x1: 0, x2: i.innerWidth, y1: s.yScale(d), y2: s.yScale(d), stroke: n, strokeDasharray: a }, c)),
    e === "x" && l.map((d, c) => /* @__PURE__ */ r.jsx("line", { y1: 0, y2: i.innerHeight, x1: s.xScale(d), x2: s.xScale(d), stroke: n, strokeDasharray: a }, c))
  ] });
}, Ff = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, Oa = {
  color: Ff
}, Bf = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, ti = {
  color: Bf
}, Af = [
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
let Hr = null, zr = null, Wr = null, ni = "optimized";
function Ef() {
  const e = { color: { ...ti.color, ...Oa.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
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
    return Af;
  }
}
function Rf() {
  return Hr || (Hr = Ef()), Hr;
}
function Pf(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Or(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Hf(e, t, n) {
  const a = Or(e), o = Or(t), s = Or(n), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, d = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: d * 100 };
}
function zf(e, t, n) {
  let i = e / 95.047, l = t / 100, d = n / 108.883;
  const c = (f) => f > 8856e-6 ? Math.cbrt(f) : 7.787 * f + 16 / 116;
  return i = c(i), l = c(l), d = c(d), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - d) };
}
function ri(e) {
  const t = Pf(e);
  if (!t) return null;
  const n = Hf(t.r, t.g, t.b);
  return zf(n.x, n.y, n.z);
}
function qs(e, t) {
  const n = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + a * a + o * o);
}
function Wf() {
  const e = Rf();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => ri(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let d = 0, c = 0;
    for (let h = 0; h < e.length; h++) i !== h && t[h] && (d += qs(l, t[h]), c++);
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
          const g = qs(c, m);
          g < f && (f = g);
        }
      }
      f > l && (l = f, i = d);
    }
    s.push(i), o.delete(i);
  }
  return s.map((i) => e[i]);
}
function Of() {
  return zr || (zr = Wf()), zr;
}
function Uf(e, t, n) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, i = (f) => {
    const h = f * f * f;
    return h > 8856e-6 ? h : (f - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, d = i(a) * 100, c = i(s) * 108.883;
  return { X: l, Y: d, Z: c };
}
function Gf(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, o = e * -0.9689 + t * 1.8758 + n * 0.0415, s = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function Yf(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function Vf(e, t) {
  const n = ri(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: s, Z: i } = Uf(a, n.a, n.b), l = Gf(o, s, i);
  return Yf(l.r, l.g, l.b);
}
function qf() {
  const e = Of(), n = [12, -12, 24, -24].map((o) => e.map((s) => Vf(s, o))), a = [...e];
  return n.forEach((o) => a.push(...o)), a;
}
function Xf() {
  return (!Wr || Kf()) && (Wr = qf(), ai = ni), Wr;
}
let ai = null;
function Kf() {
  return ai !== ni;
}
function si(e) {
  const t = Xf();
  return t[e % t.length];
}
let en = null, yn = null, aa = null, sa = null;
function Zf() {
  const e = Oa?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    en = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      en.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    yn = {}, Object.keys(n).forEach((s) => {
      const i = n[s]?.$value || n[s]?.value;
      typeof i == "string" && (yn[s] = i);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    sa = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (sa[s] = i);
    }), aa = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (aa[s] = i);
    });
  }
}
function oi() {
  (!en || !yn || !aa || !sa) && Zf();
}
function ii(e) {
  return oi(), en ? en[e % en.length] : "#212b32";
}
function Jf(e) {
  return oi(), yn ? yn[e] : void 0;
}
function Qf(e, t) {
  return Jf(e) || ii(t);
}
let Ur = null;
const eh = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function th(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function nh() {
  const e = { color: { ...ti.color, ...Oa.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((d, c) => d ? d[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return eh.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? n[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function rh() {
  return Ur || (Ur = nh()), Ur;
}
function ah(e) {
  return rh()[th(e)];
}
function sh(e, t) {
  return ah(e) || si(t);
}
const oh = X.createContext(null), li = () => X.useContext(oh), ci = X.createContext(null), kn = () => X.useContext(ci), ih = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Sn(), o = li(), [s, i] = X.useState(null), l = X.useRef(/* @__PURE__ */ new Map()), [d, c] = X.useState([]), f = X.useCallback(
    (L, j) => {
      l.current.set(L, j);
    },
    []
  ), h = X.useCallback((L) => {
    l.current.delete(L);
  }, []), m = X.useCallback(
    (L, j) => {
      if (!a) return;
      const { xScale: D, yScale: v } = a;
      let x = null, y = 1 / 0;
      l.current.forEach((P, E) => {
        P.forEach((M, k) => {
          const b = D(M.x), A = v(M.y), w = b - L, $ = A - j, W = Math.sqrt(w * w + $ * $);
          W < y && (y = W, x = {
            seriesId: E,
            index: k,
            x: M.x,
            y: M.y,
            clientX: b,
            clientY: A
          });
        });
      }), x && y <= t ? i(x) : i(null);
    },
    [a, t]
  ), g = X.useCallback(() => i(null), []);
  X.useEffect(() => {
    if (!s) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: L, yScale: j } = a, D = [];
    l.current.forEach((v, x) => {
      v.forEach((y, P) => {
        (s.x instanceof Date && y.x instanceof Date ? y.x.getTime() === s.x.getTime() : y.x === s.x) && D.push({
          seriesId: x,
          index: P,
          x: y.x,
          y: y.y,
          clientX: L(y.x),
          clientY: j(y.y)
        });
      });
    }), D.sort((v, x) => v.seriesId.localeCompare(x.seriesId)), c(D);
  }, [s, a]);
  const C = X.useCallback(
    (L) => {
      if (!s) return;
      const j = l.current.get(s.seriesId);
      if (!j) return;
      let D = s.index + L;
      if (D < 0 || D >= j.length) {
        if (!n) return;
        D = (D + j.length) % j.length;
      }
      const v = j[D];
      if (!a) return;
      const { xScale: x, yScale: y } = a;
      i({
        seriesId: s.seriesId,
        index: D,
        x: v.x,
        y: v.y,
        clientX: x(v.x),
        clientY: y(v.y)
      });
    },
    [s, a, n]
  ), p = X.useCallback(
    (L) => {
      let j = Array.from(l.current.keys());
      if (o && (j = j.filter((b) => !o.isHidden(b))), j.length === 0) return;
      if (!s) {
        const b = j[0], A = l.current.get(b);
        if (!A || !a) return;
        const { xScale: w, yScale: $ } = a, W = A[0];
        i({
          seriesId: b,
          index: 0,
          x: W.x,
          y: W.y,
          clientX: w(W.x),
          clientY: $(W.y)
        });
        return;
      }
      const D = j.indexOf(s.seriesId);
      if (D === -1) return;
      let v = D + L;
      if (v < 0 || v >= j.length) {
        if (!n) return;
        v = (v + j.length) % j.length;
      }
      const x = j[v], y = l.current.get(x);
      if (!y || !a) return;
      const P = Math.min(s.index, y.length - 1), E = y[P], { xScale: M, yScale: k } = a;
      i({
        seriesId: x,
        index: P,
        x: E.x,
        y: E.y,
        clientX: M(E.x),
        clientY: k(E.y)
      });
    },
    [s, a, n, o]
  ), u = X.useCallback(() => {
    let L = Array.from(l.current.keys());
    if (o && (L = L.filter((P) => !o.isHidden(P))), L.length === 0) return;
    const j = s ? s.seriesId : L[0], D = l.current.get(j);
    if (!D || D.length === 0 || !a) return;
    const v = D[0], { xScale: x, yScale: y } = a;
    i({
      seriesId: j,
      index: 0,
      x: v.x,
      y: v.y,
      clientX: x(v.x),
      clientY: y(v.y)
    });
  }, [s, a, o]), R = X.useCallback(() => {
    let L = Array.from(l.current.keys());
    if (o && (L = L.filter((E) => !o.isHidden(E))), L.length === 0) return;
    const j = s ? s.seriesId : L[0], D = l.current.get(j);
    if (!D || D.length === 0 || !a) return;
    const v = D.length - 1, x = D[v], { xScale: y, yScale: P } = a;
    i({
      seriesId: j,
      index: v,
      x: x.x,
      y: x.y,
      clientX: y(x.x),
      clientY: P(x.y)
    });
  }, [s, a, o]), F = X.useCallback(
    () => C(1),
    [C]
  ), T = X.useCallback(
    () => C(-1),
    [C]
  ), S = X.useCallback(
    () => p(1),
    [p]
  ), B = X.useCallback(
    () => p(-1),
    [p]
  ), _ = X.useMemo(
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
      focusNextSeries: S,
      focusPrevSeries: B,
      focusFirstPoint: u,
      focusLastPoint: R
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
      S,
      B,
      u,
      R
    ]
  );
  return /* @__PURE__ */ r.jsx(ci.Provider, { value: _, children: e });
}, lh = ({
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
  const h = Sn();
  if (!h) return null;
  const { xScale: m, yScale: g } = h, p = li()?.isHidden(e.id) ?? !1, u = p && l === "fade";
  if (p && l === "remove")
    return null;
  const R = kn();
  X.useEffect(() => {
    if (!R) return;
    const _ = e.data.map((L) => ({ x: i(L), y: L.y }));
    return R.registerSeries(e.id, _), () => R.unregisterSeries(e.id);
  }, [R, e.id, e.data, i]);
  const F = X.useMemo(
    () => Df(
      e.data,
      (_) => m(i(_)),
      (_) => g(_.y),
      { smooth: c }
    ),
    [e.data, m, g, i, c]
  ), T = X.useMemo(() => {
    if (!e.data.length) return "";
    const [_] = g.domain(), L = Nf().x((j) => m(i(j))).y0(() => g(_)).y1((j) => g(j.y));
    return c && L.curve(Jo), L(e.data) || "";
  }, [e.data, m, g, i, c]), S = e.color || (n === "region" ? sh(e.id, t) : si(t)), B = n === "region" ? Qf(e.id, t) : ii(t);
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
            stroke: S,
            strokeWidth: d,
            role: "presentation"
          }
        ),
        a && e.data.map((_, L) => {
          const j = m(i(_)), D = g(_.y), v = o ? 0 : -1, x = !u && (o && L === s || R?.focused?.seriesId === e.id && R.focused.index === L), y = () => {
            R && !u && R.setFocused({
              seriesId: e.id,
              index: L,
              x: i(_),
              y: _.y,
              clientX: j,
              clientY: D
            });
          }, P = () => {
            R && R.focused?.seriesId === e.id && R.focused.index === L && R.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: j,
              cy: D,
              r: x ? 5 : 3.5,
              stroke: x ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : B,
              strokeWidth: x ? 2 : 1,
              fill: x ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : S,
              className: "fdp-line-point",
              tabIndex: u ? -1 : v,
              "aria-label": `${e.label || e.id} ${i(_).toDateString()} value ${_.y}`,
              "data-series": e.id,
              "data-index": L,
              onMouseEnter: y,
              onFocus: y,
              onMouseLeave: P,
              onBlur: P
            },
            L
          );
        })
      ]
    }
  );
}, ch = ({ polite: e = !0, format: t }) => {
  const n = kn(), [a, o] = X.useState(""), s = X.useRef("");
  return X.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let d;
    if (l && l.length > 1) {
      const c = l.map((h) => `${h.seriesId} ${h.y}`).join("; ");
      d = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      d = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : dh(i.seriesId, i.x, i.y, i.index);
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
function dh(e, t, n, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${n}`;
}
var Rt = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Rt || {}), Ge = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.None = "none", e))(Ge || {}), Ft = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(Ft || {});
const ue = (e) => typeof e == "number" && Number.isFinite(e), uh = (e) => e.reduce((t, n) => t + n, 0), Mt = (e) => e.length ? uh(e) / e.length : NaN;
function fh(e) {
  const t = [];
  let n = [];
  for (const a of e)
    a.baseline && n.length && (t.push(n), n = []), n.push(a);
  return n.length && t.push(n), t;
}
function di(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!t[o] && ue(s)) {
      if (a !== null) {
        const i = e[a];
        n[o] = ue(i) ? Math.abs(s - i) : null;
      }
      a = o;
    }
  }
  return n;
}
function ui(e, t) {
  const n = e.filter((s) => ue(s));
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = Mt(n), o = 3.267 * a;
  if (t) {
    const s = n.filter((i) => i <= o);
    s.length && s.length !== n.length && (a = Mt(s), o = 3.267 * a);
  }
  return { mrMean: a, mrUcl: o };
}
function hh(e, t) {
  if (!ue(e) || !ue(t))
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
function Xs(e, t) {
  return e.reduce(
    (n, a) => n + (ue(a) && a > t ? 1 : 0),
    0
  );
}
function Ks(e, t) {
  return e.reduce(
    (n, a) => n + (ue(a) && a < t ? 1 : 0),
    0
  );
}
function Zs(e, t, n) {
  const a = e.filter((s) => ue(s));
  if (a.length < t) return !1;
  const o = a.slice(-t);
  for (let s = 1; s < o.length; s++)
    if (n === "up" && !(o[s] > o[s - 1]) || n === "down" && !(o[s] < o[s - 1])) return !1;
  return !0;
}
function Js(e, t, n, a) {
  const o = e.filter((i) => ue(i));
  if (o.length < t) return !1;
  const s = o.slice(-t);
  return a === "high" ? s.every((i) => i > n) : a === "low" ? s.every((i) => i < n) : !1;
}
const ph = 0.2777, mh = 3.6, gh = (e) => ue(e) && e >= 0 ? Math.pow(e, ph) : null, At = (e) => ue(e) && e >= 0 ? Math.pow(e, mh) : null, Xt = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function xh(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
function bh(e) {
  if (!ue(e) || e < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null
    };
  const t = 1 / (e + 1), n = (f) => xh(f, t) - 1, a = n(0.5), o = Math.max(0, n(Xt.three.low)), s = n(Xt.three.high), i = Math.max(0, n(Xt.one.low)), l = n(Xt.one.high), d = Math.max(0, n(Xt.two.low)), c = n(Xt.two.high);
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
function yh(e, t, n) {
  const a = e.map((j) => ue(j) ? gh(j) : null), o = di(a, t), {
    mrMean: s
    /*, mrUcl: _mrUclY_raw*/
  } = ui(o, !!n), i = a.filter((j, D) => !t[D] && ue(j)), l = i.length ? Mt(i) : NaN;
  if (!ue(l) || !ue(s))
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
  const d = 2.66, c = 2 / 3 * d, f = 1 / 3 * d, h = l + d * s, m = l - d * s, g = l + c * s, C = l - c * s, p = l + f * s, u = l - f * s, R = At(l), F = At(h), T = m <= 0 ? null : At(m), S = At(p), B = u <= 0 ? null : At(u), _ = At(g), L = C <= 0 ? null : At(C);
  return {
    center: R ?? null,
    upperProcessLimit: F ?? null,
    lowerProcessLimit: T ?? null,
    upperTwoSigma: _ ?? null,
    lowerTwoSigma: L ?? null,
    upperOneSigma: S ?? null,
    lowerOneSigma: B ?? null,
    mr: o,
    mrMean: s,
    mrUcl: ue(s) ? 3.267 * s : null
  };
}
function fi(e) {
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
    value: ue(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: ue(p.target) ? p.target : null
  })), l = fh(i), d = [], c = [], h = i.filter(
    (p) => !p.ghost && ue(p.value)
  ).length >= (s.minimumPoints ?? 13);
  let m = 0;
  const g = {};
  for (const p of l) {
    m++;
    const u = p.map((x) => x.value), R = p.map((x) => x.ghost);
    let F = new Array(u.length).fill(null), T = NaN, S = NaN, B = NaN, _ = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      F = di(u, R);
      const x = u.filter(
        (P, E) => !R[E] && ue(P)
      );
      T = x.length ? Mt(x) : NaN;
      const y = ui(
        F,
        !!s.excludeMovingRangeOutliers
      );
      S = y.mrMean, B = y.mrUcl, _ = hh(T, S);
    } else if (t === "T") {
      const x = yh(
        u,
        R,
        !!s.excludeMovingRangeOutliers
      );
      F = x.mr, S = x.mrMean ?? NaN, B = x.mrUcl ?? NaN, T = x.center ?? NaN, _ = {
        upperProcessLimit: x.upperProcessLimit,
        lowerProcessLimit: x.lowerProcessLimit,
        upperTwoSigma: x.upperTwoSigma,
        lowerTwoSigma: x.lowerTwoSigma,
        upperOneSigma: x.upperOneSigma,
        lowerOneSigma: x.lowerOneSigma
      };
    } else if (t === "G") {
      const x = u.filter(
        (E, M) => !R[M] && ue(E)
      ), y = x.length ? Mt(x) : NaN, P = bh(y);
      T = P.cl ?? NaN, _ = {
        upperProcessLimit: P.ucl,
        lowerProcessLimit: P.lcl,
        upperTwoSigma: P.twoHigh,
        lowerTwoSigma: P.twoLow,
        upperOneSigma: P.oneHigh,
        lowerOneSigma: P.oneLow
      }, F = new Array(u.length).fill(null), S = NaN, B = NaN;
    } else
      c.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const L = p.map((x, y) => {
      const P = !x.ghost && ue(x.value) ? u.slice(0, y + 1).filter((b, A) => !R[A] && ue(b)).length : 0, E = h, M = E ? _ : {
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
        value: ue(x.value) ? x.value : null,
        ghost: x.ghost,
        partitionId: m,
        pointRank: P,
        mean: E && ue(T) ? T : null,
        mr: ue(F[y]) ? F[y] : null,
        mrMean: E && ue(S) ? S : null,
        mrUcl: E && ue(B) ? B : null,
        upperProcessLimit: ue(M.upperProcessLimit) ? M.upperProcessLimit : null,
        lowerProcessLimit: ue(M.lowerProcessLimit) ? M.lowerProcessLimit : null,
        upperTwoSigma: ue(M.upperTwoSigma) ? M.upperTwoSigma : null,
        lowerTwoSigma: ue(M.lowerTwoSigma) ? M.lowerTwoSigma : null,
        upperOneSigma: ue(M.upperOneSigma) ? M.upperOneSigma : null,
        lowerOneSigma: ue(M.lowerOneSigma) ? M.lowerOneSigma : null,
        target: ue(x.target) ? x.target : null,
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
        upperBaseline: E && ue(T) ? T : null,
        lowerBaseline: E && ue(T) ? T : null,
        movingRangeHighPointValue: E && ue(B) ? B : null,
        ghostValue: x.ghost && ue(x.value) ? x.value : null,
        ghostFlag: !!x.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null
      };
    });
    g[m] = L.filter(
      (x) => !x.ghost && ue(x.value)
    ).length;
    const j = s.specialCauseShiftPoints ?? 6, D = s.specialCauseTrendPoints ?? 6, v = [];
    for (let x = 0; x < L.length; x++) {
      const y = L[x], P = y.value;
      if (!y.ghost && ue(P) && v.push(P), !(ue(y.mean) && ue(y.upperProcessLimit) && ue(y.lowerProcessLimit)) || y.ghost || !ue(P)) {
        d.push(y);
        continue;
      }
      y.specialCauseSinglePointAbove = ue(y.upperProcessLimit) ? P > y.upperProcessLimit : !1, y.specialCauseSinglePointBelow = ue(y.lowerProcessLimit) ? P < y.lowerProcessLimit : !1;
      const M = (A, w) => A.every(($) => $ > w), k = (A, w) => A.every(($) => $ < w), b = v.slice(-3);
      if (b.length === 3 && ue(y.mean)) {
        const A = y.upperTwoSigma ?? 1 / 0, w = y.lowerTwoSigma ?? -1 / 0, $ = Xs(b, A), W = Ks(b, w);
        $ >= 2 && M(b, y.mean) && (y.specialCauseTwoOfThreeAbove = !0), W >= 2 && k(b, y.mean) && (y.specialCauseTwoOfThreeBelow = !0);
      }
      if (s.enableFourOfFiveRule && ue(y.mean)) {
        const A = v.slice(-5);
        if (A.length === 5) {
          const w = y.upperOneSigma ?? 1 / 0, $ = y.lowerOneSigma ?? -1 / 0, W = Xs(A, w), I = Ks(A, $);
          W >= 4 && M(A, y.mean) && (y.specialCauseFourOfFiveAbove = !0), I >= 4 && k(A, y.mean) && (y.specialCauseFourOfFiveBelow = !0);
        }
      }
      ue(y.mean) && (y.specialCauseShiftHigh = Js(
        v,
        j,
        y.mean,
        "high"
      ), y.specialCauseShiftLow = Js(
        v,
        j,
        y.mean,
        "low"
      )), y.specialCauseTrendIncreasing = Zs(
        v,
        D,
        "up"
      ), y.specialCauseTrendDecreasing = Zs(
        v,
        D,
        "down"
      ), d.push(y);
    }
    if (s.maximumPointsPartition && Number.isFinite(s.maximumPointsPartition)) {
      const x = s.maximumPointsPartition;
      let y = 0;
      for (const P of d.filter((E) => E.partitionId === m))
        !P.ghost && ue(P.value) && y++, y > x && (P.mean = P.upperProcessLimit = P.lowerProcessLimit = null, P.upperTwoSigma = P.lowerTwoSigma = P.upperOneSigma = P.lowerOneSigma = null);
    }
  }
  for (let p = 0; p < d.length; p++) {
    const u = d[p];
    if (u.ghost || !ue(u.value) || u.mean === null) {
      u.variationIcon = "none";
      continue;
    }
    const R = u.specialCauseSinglePointAbove || u.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && u.specialCauseFourOfFiveAbove || u.specialCauseShiftHigh || u.specialCauseTrendIncreasing, F = u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && u.specialCauseFourOfFiveBelow || u.specialCauseShiftLow || u.specialCauseTrendDecreasing;
    if (s.collapseClusterRules && (u.specialCauseTwoOfThreeAbove && u.specialCauseFourOfFiveAbove && (u.specialCauseTwoOfThreeAbove = !1), u.specialCauseTwoOfThreeBelow && u.specialCauseFourOfFiveBelow && (u.specialCauseTwoOfThreeBelow = !1)), s.precedenceStrategy === "directional_first") {
      const B = (s.specialCauseTrendPoints ?? 6) - 1;
      let _ = !1;
      if (B >= 3 && ue(u.value)) {
        const D = [];
        for (let v = p; v >= 0 && D.length < B; v--) {
          const x = d[v].value;
          d[v].ghost || !ue(x) || D.unshift(x);
        }
        if (D.length === B) {
          let v = 0;
          for (let x = 1; x < D.length; x++)
            n === "Down" ? D[x] <= D[x - 1] && v++ : n === "Up" && D[x] >= D[x - 1] && v++;
          _ = v >= B - 2;
        }
      }
      const L = n === "Up" ? R : F, j = n === "Up" ? F : R;
      if (L && !j)
        u.variationIcon = "improvement";
      else if (!L && j) {
        const D = u.specialCauseSinglePointAbove || u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeAbove || u.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && (u.specialCauseFourOfFiveAbove || u.specialCauseFourOfFiveBelow) || u.specialCauseShiftHigh || u.specialCauseShiftLow;
        s.emergingDirectionGrace && _ && !D ? u.variationIcon = "neither" : u.variationIcon = "concern";
      } else L && j && s.emergingDirectionGrace && (_ || u.specialCauseTrendIncreasing || u.specialCauseTrendDecreasing) ? u.variationIcon = "improvement" : u.variationIcon = "neither";
    } else
      n === "Up" ? u.variationIcon = R ? "improvement" : F ? "concern" : "neither" : n === "Down" ? u.variationIcon = F ? "improvement" : R ? "concern" : "neither" : u.variationIcon = "neither";
    if (s.suppressIsolatedFavourablePoint && u.variationIcon === "improvement") {
      const S = n === "Up" && u.specialCauseSinglePointAbove, B = n === "Down" && u.specialCauseSinglePointBelow, _ = n === "Up" && (u.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && u.specialCauseFourOfFiveAbove || u.specialCauseShiftHigh || u.specialCauseTrendIncreasing) || n === "Down" && (u.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && u.specialCauseFourOfFiveBelow || u.specialCauseShiftLow || u.specialCauseTrendDecreasing);
      (S || B) && !_ && (u.variationIcon = "none", u.specialCauseImprovementValue = null);
    }
    const T = R || F;
    if (u.specialCauseImprovementValue = T && u.variationIcon === "improvement" ? u.value : null, u.specialCauseConcernValue = T && u.variationIcon === "concern" ? u.value : null, u.specialCauseNeitherValue = T && u.variationIcon === "neither" ? u.value : null, ue(u.value) && u.mean !== null) {
      u.assuranceIcon = "none";
      const S = i[u.rowId - 1];
      if (ue(S.target)) {
        const B = S.target;
        s.assuranceCapabilityMode && ue(u.upperProcessLimit) && ue(u.lowerProcessLimit) ? n === "Up" ? u.lowerProcessLimit !== null && u.lowerProcessLimit > B ? u.assuranceIcon = "pass" : u.upperProcessLimit !== null && u.upperProcessLimit < B ? u.assuranceIcon = "fail" : u.assuranceIcon = "none" : n === "Down" ? u.upperProcessLimit !== null && u.upperProcessLimit < B ? u.assuranceIcon = "pass" : u.lowerProcessLimit !== null && u.lowerProcessLimit > B ? u.assuranceIcon = "fail" : u.assuranceIcon = "none" : u.assuranceIcon = "none" : n === "Down" ? u.assuranceIcon = u.value <= B ? "pass" : "fail" : n === "Up" ? u.assuranceIcon = u.value >= B ? "pass" : "fail" : u.assuranceIcon = "none";
      }
    }
  }
  if ((s.minimumPointsWarning ?? !1) && !h) {
    const p = i.filter(
      (u) => !u.ghost && ue(u.value)
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
    for (const R of d)
      !R.ghost && ue(R.value) && u++, u > p && (R.mean = R.upperProcessLimit = R.lowerProcessLimit = null, R.upperTwoSigma = R.lowerTwoSigma = R.upperOneSigma = R.lowerOneSigma = null);
  }
  if (s.nullValueWarning && (t === "XmR" || t === "G")) {
    const p = i.filter(
      (u) => !u.ghost && (u.value === null || u.value === void 0 || !ue(u.value))
    ).length;
    p && c.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (s.targetSuppressedWarning && (t === "T" || t === "G") && i.some((u) => ue(u.target)) && c.push({
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
  let C;
  if (s.baselineSuggest) {
    const p = d, u = s.baselineSuggestStabilityPoints, R = s.baselineSuggestMinGap, F = s.baselineSuggestMinDeltaSigma, T = s.baselineSuggestScoreThreshold, S = [];
    let B = 0;
    for (let _ = 0; _ < p.length; _++) {
      let L = function(x) {
        return !!j[x] && !D?.[x];
      };
      const j = p[_];
      _ > 0 && p[_ - 1].partitionId !== j.partitionId && (B = _);
      const D = p[_ - 1], v = [];
      (L("specialCauseShiftHigh") || L("specialCauseShiftLow")) && v.push({ reason: "shift", index: _ }), (L("specialCauseTrendIncreasing") || L("specialCauseTrendDecreasing")) && v.push({ reason: "trend", index: _ }), (L("specialCauseSinglePointAbove") || L("specialCauseSinglePointBelow")) && v.push({ reason: "point", index: _ });
      for (const x of v) {
        if (x.index - B < R) continue;
        const y = Math.max(0, x.index - u), P = x.index - 1;
        if (P - y + 1 < u) continue;
        const E = x.index, M = x.index + u - 1;
        if (M >= p.length) continue;
        const k = p.slice(y, P + 1).map((J) => J.value).filter(ue), b = p.slice(E, M + 1).map((J) => J.value).filter(ue);
        if (k.length < u || b.length < u) continue;
        const A = p[x.index];
        let w = null;
        if (ue(A.upperProcessLimit) && ue(A.mean)) {
          const J = A.upperProcessLimit - A.mean;
          J > 0 && (w = J / 3);
        }
        if (!w || w <= 0) continue;
        const $ = Mt(k), W = Mt(b), I = W - $;
        if (Math.abs(I) < F * w) continue;
        const H = p.slice(E, M + 1).filter(
          (J) => J.variationIcon === "concern"
          /* Concern */
        ).length;
        if (H > 1) continue;
        const Q = (J) => {
          const ae = Mt(J);
          return J.length ? J.reduce((G, me) => G + (me - ae) * (me - ae), 0) / J.length : 0;
        }, fe = Q(k), oe = Q(b);
        let K = x.reason === "shift" ? 90 : x.reason === "trend" ? 70 : 60;
        if (oe < fe && (K += 10), K -= H * 15, K < T) continue;
        const V = S.find((J) => J.index === x.index);
        if (V) {
          const J = (ae) => ae === "shift" ? 3 : ae === "trend" ? 2 : 1;
          (J(x.reason) > J(V.reason) || K > V.score) && (V.reason = x.reason, V.score = K, V.deltaMean = I, V.oldMean = $, V.newMean = W, V.window = [E, M]);
        } else
          S.push({
            index: x.index,
            reason: x.reason,
            score: K,
            deltaMean: I,
            oldMean: $,
            newMean: W,
            window: [E, M]
          });
      }
      _ > 0 && p[_ - 1].partitionId !== p[_].partitionId && (B = _);
    }
    S.sort((_, L) => _.index - L.index), C = S;
  }
  return { rows: d, warnings: c, ...C ? { suggestedBaselines: C } : {} };
}
const Ua = {
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
function Ga(e) {
  if (!e) return [];
  const t = [];
  return e.specialCauseSinglePointAbove && t.push("singlePointAbove"), e.specialCauseSinglePointBelow && t.push("singlePointBelow"), e.specialCauseTwoOfThreeAbove && t.push("twoOfThreeAbove"), e.specialCauseTwoOfThreeBelow && t.push("twoOfThreeBelow"), e.specialCauseFourOfFiveAbove && t.push("fourOfFiveAbove"), e.specialCauseFourOfFiveBelow && t.push("fourOfFiveBelow"), e.specialCauseShiftHigh && t.push("shiftHigh"), e.specialCauseShiftLow && t.push("shiftLow"), e.specialCauseTrendIncreasing && t.push("trendIncreasing"), e.specialCauseTrendDecreasing && t.push("trendDecreasing"), t;
}
function Ya(e) {
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
function vh(e) {
  switch (e) {
    case Ft.Pass:
      return "Target met";
    case Ft.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function wh(e, t, n) {
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
function hi(e) {
  return e ? lt[e]?.token ?? lt.neither.token : lt.neither.token;
}
function _h(e) {
  return e ? lt[e]?.hex ?? lt.neither.hex : lt.neither.hex;
}
const pi = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: o,
  dateFormatter: s
}) => {
  const i = kn(), l = _n(), [d, c] = X.useState(null), [f, h] = X.useState(!1), m = X.useRef(null);
  X.useEffect(() => {
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
  const g = i && (i.focused || (f ? d : null) || d), [C, p] = X.useState(!1);
  X.useEffect(() => {
    const ae = requestAnimationFrame(() => p(!0));
    return () => cancelAnimationFrame(ae);
  }, [g?.index]);
  const u = l?.innerWidth ?? 0, R = l?.innerHeight ?? 0, F = g ? Math.min(Math.max(g.clientX, 0), u) : 0, T = g ? Math.min(Math.max(g.clientY, 0), R) : 0, B = l.ref?.current;
  if (!g)
    return null;
  const _ = e?.[g.index], L = Ga(_).map((ae) => Ua[ae].tooltip), j = g.x instanceof Date ? g.x : new Date(g.x), D = s ? s(j) : j.toDateString(), v = o ? `${o}` : "", x = a || v ? `${g.y}${v ? "" + v : " "}${a ? " " + a : ""}` : `${g.y}`, y = Ya(_?.variationIcon), P = vh(_?.assuranceIcon), E = wh(
    t.mean ?? null,
    t.sigma,
    g.y
  ), M = n ? n(g.index, { x: g.x, y: g.y }) : void 0, k = y || P || E, b = L.length > 0, A = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", w = hi(_?.variationIcon), $ = 6.2, I = [
    M || "",
    `${D} • ${x}`
  ].filter(Boolean).reduce(
    (ae, G) => Math.max(ae, G.length * $ + 32),
    0
  ), O = 200, H = 440, Q = Math.min(H, Math.max(O, I));
  let fe = F + 12, K = (l.margin?.top ?? 0) + T + 16;
  fe + Q > u && (fe = F - -60 - Q), fe < 0 && (fe = Math.max(0, u - Q));
  const V = g ? `spc-tooltip-${g.index}` : "spc-tooltip", J = B ? Sl(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: V,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (C ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: fe,
          top: K,
          width: Q,
          maxWidth: H,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": C ? "false" : "true",
        "data-floating": !0,
        "data-placement": fe + Q + 12 > u ? "left" : "right",
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
          k && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: y && (y.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              et,
              {
                text: y,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : y.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              et,
              {
                text: y,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : /* @__PURE__ */ r.jsx(
              et,
              {
                text: y,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            )) })
          ] }),
          P && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const ae = P.toLowerCase(), me = !(ae.includes("not met") || ae.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(ae);
              return /* @__PURE__ */ r.jsx(
                et,
                {
                  text: P,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${me ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${P}`
                }
              );
            })() })
          ] }),
          E && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              et,
              {
                text: (() => {
                  const ae = E.toLowerCase();
                  return ae.startsWith("within 1") ? "≤1σ" : ae.startsWith("1–2") ? "1–2σ" : ae.startsWith("2–3") ? "2–3σ" : ae.startsWith(">3") ? ">3σ" : E;
                })(),
                color: E.includes(">3") ? "orange" : E.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${E}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          b && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: L.map((ae) => {
                  const G = y ? y.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : y.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--rule" : "fdp-spc-tag--rule";
                  return /* @__PURE__ */ r.jsx(
                    et,
                    {
                      text: ae,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${G}`
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
            cx: F,
            cy: T,
            r: 7,
            fill: "none",
            stroke: A,
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
            stroke: A,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: F,
            cy: T,
            r: 2.5,
            fill: w,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        J
      ]
    }
  );
};
let oa = null;
try {
  oa = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const st = (e, t) => {
  if (!oa) return t;
  const n = e.split(".");
  let a = oa;
  for (const s of n) {
    if (a == null) break;
    a = a[s];
  }
  const o = a;
  return o == null ? t : typeof o == "string" || typeof o == "number" ? String(o) : o.$value != null ? String(o.$value) : o.value != null ? String(o.value) : t;
}, mi = () => ({
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
var zt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(zt || {});
const Sh = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, kh = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Je = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Je || {}), we = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(we || {}), Xe = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(Xe || {}), De = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(De || {});
const Ch = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [n, a, o].map((l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4));
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, Va = {
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
Object.values(Va).forEach((e) => {
  e.text || (e.text = Ch(e.hex));
});
const gi = (e) => Va[e], qa = (e) => Va[e].judgement || "none", Qs = {
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
function jh(e, t) {
  let n;
  return e === "common_cause" ? n = Qs.common : n = Qs.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
const xi = (e) => {
  if (e.variationIcon !== void 0) {
    const s = e, l = {
      [Ge.Improvement]: De.SpecialCauseImproving,
      [Ge.Concern]: De.SpecialCauseDeteriorating,
      [Ge.Neither]: De.CommonCause,
      [Ge.None]: De.SpecialCauseNoJudgement
    }[s.variationIcon];
    let d = s.trend;
    return !d && s.polarity && (l === De.SpecialCauseImproving || l === De.SpecialCauseDeteriorating) && (l === De.SpecialCauseImproving ? d = s.polarity === Je.LowerIsBetter ? we.Lower : we.Higher : d = s.polarity === Je.LowerIsBetter ? we.Higher : we.Lower), d || (d = l === De.SpecialCauseImproving ? we.Higher : l === De.SpecialCauseDeteriorating ? we.Lower : we.Higher), {
      state: l,
      direction: d,
      polarity: s.polarity ?? Je.ContextDependent
    };
  }
  if (e.state !== void 0) {
    const s = e;
    let i = s.trend;
    return !i && (s.state === De.SpecialCauseImproving || s.state === De.SpecialCauseDeteriorating) && s.polarity && (s.state === De.SpecialCauseImproving ? i = s.polarity === Je.LowerIsBetter ? we.Lower : we.Higher : i = s.polarity === Je.LowerIsBetter ? we.Higher : we.Lower), i || (s.state === De.SpecialCauseImproving ? i = we.Higher : s.state === De.SpecialCauseDeteriorating ? i = we.Lower : i = we.Higher), {
      state: s.state,
      direction: i,
      polarity: s.polarity ?? Je.ContextDependent
    };
  }
  const t = e, a = {
    [Xe.Improving]: De.SpecialCauseImproving,
    [Xe.Deteriorating]: De.SpecialCauseDeteriorating,
    [Xe.No_Judgement]: De.SpecialCauseNoJudgement,
    [Xe.None]: De.CommonCause
  }[t.judgement];
  let o;
  return t.judgement === Xe.Improving ? o = t.polarity === Je.LowerIsBetter ? we.Lower : we.Higher : t.judgement === Xe.Deteriorating ? o = t.polarity === Je.LowerIsBetter ? we.Higher : we.Lower : o = t.trend ?? we.Higher, { state: a, direction: o, polarity: t.polarity };
};
function Nh(e, t) {
  const { state: n, direction: a, polarity: o } = xi(e), s = qa(n), i = a === we.Higher ? "above" : "below", l = a === we.Higher ? "upwards" : "downwards", d = (() => {
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
        case Xe.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case Xe.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case Xe.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case Xe.None:
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
const Gr = (e, t, n, a, o, s) => /* @__PURE__ */ r.jsxs("defs", { children: [
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
] }), Xa = ({
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
  const h = Mn(), m = Mn(), {
    start: g,
    mid: C,
    end: p,
    triStart: u,
    triMid: R,
    triEnd: F
  } = mi(), { state: T, direction: S, polarity: B } = je(
    () => xi(e),
    [e]
  ), _ = je(() => gi(T), [T]), L = je(() => qa(T), [T]), j = L === Xe.Improving || L === Xe.Deteriorating;
  let D = "";
  a && j && (d === "polarity" ? B === Je.HigherIsBetter ? D = "H" : B === Je.LowerIsBetter ? D = "L" : D = "" : D = S === we.Higher ? "H" : "L"), c !== void 0 && (D = c);
  const v = T !== De.CommonCause, x = T === De.SpecialCauseNoJudgement, y = st("common-cause", "#A6A6A6"), P = v ? _.hex : y, E = je(
    () => jh(T, S),
    [T, S]
  ), M = n || `${_.label}${D ? S === we.Higher ? " – Higher" : " – Lower" : ""}`, k = Nh(
    e
  );
  if (i === "triangleWithRun") {
    const W = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], I = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let O = null;
    T === De.SpecialCauseImproving || T === De.SpecialCauseDeteriorating ? O = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (S === we.Higher ? W : I).map((me) => me.join(",")).join(" "),
        fill: _.hex,
        stroke: _.hex,
        strokeWidth: 6,
        transform: S === we.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : T === De.SpecialCauseNoJudgement && (O = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: S === we.Higher ? W.map((me) => me.join(",")).join(" ") : I.map((me) => me.join(",")).join(" "),
        fill: _.hex,
        stroke: _.hex,
        strokeWidth: 6,
        transform: S === we.Higher ? "translate(0,-6)" : "translate(0,6)"
      }
    ));
    const H = Math.max(0, Math.min(5, Math.floor(l || 0))), Q = T === De.CommonCause ? 160 : S === we.Higher ? 210 : 70, fe = 10, oe = 26, K = 150 - 2 * oe, V = T === De.SpecialCauseImproving ? st("improvement", "#00B0F0") : T === De.SpecialCauseDeteriorating ? st("concern", "#E46C0A") : y, J = Array.from({ length: 5 }).map((me, he) => {
      const pe = (T === De.SpecialCauseImproving || T === De.SpecialCauseDeteriorating) && he >= 5 - H ? V : y;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: K + he * oe,
          cy: Q,
          r: fe,
          fill: pe,
          stroke: pe,
          strokeWidth: 1
        },
        he
      );
    }), ae = Gr(
      _.hex,
      h,
      m,
      o,
      s,
      [
        { offset: "0%", opacity: u },
        { offset: "75%", opacity: R },
        { offset: "100%", opacity: F }
      ]
    ), G = T === De.CommonCause || S === we.Higher ? "translate(0,-10)" : "translate(0,20)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": M,
        "aria-description": k,
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
              stroke: _.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsxs("g", { transform: G, children: [
            O,
            D && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: S === we.Higher ? 150 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: D
              }
            ),
            J
          ] })
        ]
      }
    );
  }
  if (i === "triangle") {
    const W = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], I = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], O = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let H = null;
    T === De.SpecialCauseImproving || T === De.SpecialCauseDeteriorating ? H = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (S === we.Higher ? W : I).map((fe) => fe.join(",")).join(" "),
        fill: _.hex,
        stroke: _.hex,
        strokeWidth: 8,
        transform: S === we.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : T === De.SpecialCauseNoJudgement ? H = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: S === we.Higher ? W.map((fe) => fe.join(",")).join(" ") : I.map((fe) => fe.join(",")).join(" "),
        fill: _.hex,
        stroke: _.hex,
        strokeWidth: 8,
        transform: S === we.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : T === De.CommonCause && (H = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: O[0][0],
        y1: O[0][1],
        x2: O[1][0],
        y2: O[1][1],
        stroke: _.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const Q = Gr(
      _.hex,
      h,
      m,
      o,
      s,
      [
        { offset: "0%", opacity: u },
        { offset: "65%", opacity: R },
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
        "aria-label": M,
        "aria-description": k,
        ...f,
        children: [
          Q,
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
              stroke: _.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          H,
          D && (T === De.SpecialCauseImproving || T === De.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: S === we.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: D
            }
          )
        ]
      }
    );
  }
  const b = Gr(
    _.hex,
    h,
    m,
    o,
    s,
    [
      { offset: "0%", opacity: g },
      { offset: "65%", opacity: C },
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
      "aria-label": M,
      "aria-description": k,
      ...f,
      children: [
        b,
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
            stroke: _.hex,
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
            fill: _.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: S === we.Lower ? "325" : "156", children: D })
          }
        ),
        x ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: _.hex,
            ...S === we.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          E.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: y,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${E.map((A) => `${A.cx} ${A.cy}`).join(" L ")}`
            }
          ),
          E.map((A, w) => {
            const W = w >= E.length - 2 && v ? P : y, I = W;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: I,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: W,
                cx: A.cx,
                cy: A.cy,
                r: 16
              },
              w
            );
          })
        ] })
      ]
    }
  );
};
Xa.displayName = "SPCVariationIcon";
const Ka = ({
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
  const c = Mn(), f = Mn(), { start: h, mid: m, end: g } = mi(), C = o || Sh[e], p = (i || kh[e]).slice(0, 2), u = n || `Assurance ${e}`;
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
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: C, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: C, stopOpacity: parseFloat(m) }),
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
            fill: C,
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
          e === zt.Fail ? /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "fail-line",
              stroke: C,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : e === zt.Uncertain ? /* @__PURE__ */ r.jsx(
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
              stroke: C,
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
              stroke: C,
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
Ka.displayName = "SPCAssuranceIcon";
const Th = ({
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
  metricImprovement: f = Rt.Neither,
  enableRules: h = !0,
  showIcons: m = !1,
  showEmbeddedIcon: g = !0,
  targets: C,
  baselines: p,
  ghosts: u,
  settings: R,
  narrationContext: F,
  gradientSequences: T = !1,
  processLineWidth: S = 2
}) => {
  const B = X.useMemo(() => {
    const W = e.map((I, O) => ({
      x: I.x,
      value: I.y,
      target: C?.[O] ?? void 0,
      baseline: p?.[O] ?? void 0,
      ghost: u?.[O] ?? void 0
    }));
    try {
      return fi({
        chartType: c,
        metricImprovement: f,
        data: W,
        settings: R
      });
    } catch {
      return null;
    }
  }, [
    e,
    C,
    p,
    u,
    c,
    f,
    R
  ]), _ = B?.rows.slice().reverse().find((W) => W.mean != null), L = _?.mean ?? null, j = _?.upperProcessLimit ?? null, D = _?.lowerProcessLimit ?? null, v = _?.upperOneSigma ?? null, x = _?.lowerOneSigma ?? null, y = _?.upperTwoSigma ?? null, P = _?.lowerTwoSigma ?? null, E = L != null && v != null ? Math.abs(v - L) : 0, M = X.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), k = X.useMemo(() => {
    const I = [...e.map((O) => O.y)];
    if ([L, j, D, v, x, y, P].forEach((O) => {
      O != null && I.push(O);
    }), C && C.forEach((O) => {
      typeof O == "number" && !isNaN(O) && I.push(O);
    }), !!I.length)
      return [Math.min(...I), Math.max(...I)];
  }, [e, L, j, D, v, x, y, P, C]), b = X.useMemo(() => {
    if (!(l || F?.measureUnit) && e.length)
      return e.every((W) => W.y >= 0 && W.y <= 1) ? "%" : void 0;
  }, [l, F?.measureUnit, e]), A = l ?? F?.measureUnit ?? b, w = X.useMemo(() => A ? { ...F || {}, measureUnit: A } : F, [F, A]), $ = X.useMemo(() => {
    if (!g || !B?.rows?.length) return null;
    const W = B.rows, I = R?.minimumPoints ?? 13;
    if (W.filter((me) => !me.ghost && me.value != null).length < I) return null;
    let H = -1;
    for (let me = W.length - 1; me >= 0; me--) {
      const he = W[me];
      if (he && he.value != null && !he.ghost) {
        H = me;
        break;
      }
    }
    if (H === -1) return null;
    const Q = W[H], fe = Q.variationIcon, oe = Q.assuranceIcon, K = oe === Ft.Pass ? zt.Pass : oe === Ft.Fail ? zt.Fail : zt.Uncertain;
    let V;
    if (fe === Ge.None) {
      const me = Q.specialCauseSinglePointAbove, he = Q.specialCauseSinglePointBelow;
      f === Rt.Up ? me ? V = we.Higher : he && (V = we.Lower) : f === Rt.Down ? he ? V = we.Lower : me && (V = we.Higher) : V = we.Higher;
    }
    let J;
    switch (fe) {
      case Ge.Improvement:
        J = Xe.Improving;
        break;
      case Ge.Concern:
        J = Xe.Deteriorating;
        break;
      case Ge.None:
        J = Xe.No_Judgement;
        break;
      case Ge.Neither:
      default:
        J = Xe.None;
    }
    let ae;
    f === Rt.Up ? ae = Je.HigherIsBetter : f === Rt.Down ? ae = Je.LowerIsBetter : ae = Je.ContextDependent;
    const G = 80;
    return /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", gap: 12, marginRight: 16 }, children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "fdp-spc-chart__embedded-icon",
          "data-variation": String(fe),
          "data-variation-judgement": String(J),
          "data-trend-raw": V ? String(V) : "none",
          "data-trend": V ? String(V) : "none",
          "data-polarity": String(ae ?? "unknown"),
          style: { width: G, height: G },
          children: /* @__PURE__ */ r.jsx(
            Xa,
            {
              dropShadow: !1,
              data: { judgement: J, polarity: ae, ...V ? { trend: V } : {} },
              letterMode: "direction",
              size: G
            }
          )
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "fdp-spc-chart__embedded-assurance-icon",
          "data-assurance": String(oe),
          style: { width: G, height: G },
          children: /* @__PURE__ */ r.jsx(Ka, { status: K, size: G, dropShadow: !1 })
        }
      )
    ] }, `embedded-icon-${H}`);
  }, [g, B?.rows, f, R?.minimumPoints, C]);
  return /* @__PURE__ */ r.jsxs("div", { className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper", children: [
    g && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: $ }),
    /* @__PURE__ */ r.jsx(
      If,
      {
        height: n,
        ariaLabel: t,
        margin: { bottom: 48, left: 56, right: 16, top: 12 },
        className: void 0,
        children: /* @__PURE__ */ r.jsx(Lf, { series: M, yDomain: k, children: /* @__PURE__ */ r.jsx(
          Dh,
          {
            series: M,
            showPoints: o,
            announceFocus: s,
            limits: { mean: L, ucl: j, lcl: D, sigma: E, onePos: v, oneNeg: x, twoPos: y, twoNeg: P },
            showZones: a,
            highlightOutOfControl: d,
            engineRows: B?.rows || null,
            enableRules: h,
            showIcons: m,
            narrationContext: w,
            metricImprovement: f,
            gradientSequences: T,
            processLineWidth: S,
            effectiveUnit: A
          }
        ) })
      }
    )
  ] });
}, Dh = ({
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
  const g = Sn(), C = _n();
  if (!g) return null;
  const { xScale: p, yScale: u } = g, R = kn(), F = e[0]?.data || [], T = X.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const b = /* @__PURE__ */ new Set();
    return F.forEach((A, w) => {
      (a.ucl != null && A.y > a.ucl || a.lcl != null && A.y < a.lcl) && b.add(w);
    }), b;
  }, [F, a.ucl, a.lcl]), S = X.useMemo(() => {
    if (!i) return null;
    const b = {};
    return i.forEach((A, w) => {
      if (A.value == null || A.ghost) return;
      const $ = A.specialCauseSinglePointAbove || A.specialCauseSinglePointBelow || A.specialCauseTwoOfThreeAbove || A.specialCauseTwoOfThreeBelow || A.specialCauseFourOfFiveAbove || A.specialCauseFourOfFiveBelow || A.specialCauseShiftHigh || A.specialCauseShiftLow || A.specialCauseTrendIncreasing || A.specialCauseTrendDecreasing;
      b[w] = {
        variation: A.variationIcon,
        assurance: A.assuranceIcon,
        special: $,
        concern: A.variationIcon === Ge.Concern,
        improvement: A.variationIcon === Ge.Improvement
      };
    }), b;
  }, [i]), B = X.useMemo(() => {
    if (!i || !i.length) return null;
    const b = [];
    for (const w of i)
      typeof w.target == "number" && !isNaN(w.target) && b.push(w.target);
    if (!b.length) return null;
    const A = b[0];
    return b.every((w) => w === A) ? A : null;
  }, [i]), _ = X.useMemo(() => {
    if (!S) return [];
    const b = F.map((A, w) => {
      const $ = S?.[w];
      return $?.concern ? "concern" : $?.improvement ? "improvement" : "common";
    });
    for (let A = 1; A < b.length - 1; A++)
      (b[A] === "concern" || b[A] === "improvement") && b[A - 1] === "common" && b[A + 1] === "common" && (b[A] = "common");
    for (let A = 1; A < b.length - 1; A++) {
      const w = b[A - 1], $ = b[A], W = b[A + 1];
      $ !== "common" && w !== "common" && W !== "common" && w === W && $ !== w && (b[A] = "common");
    }
    return b;
  }, [S, F]), L = X.useMemo(() => {
    if (!f || !_.length) return [];
    const b = [];
    let A = 0;
    for (let w = 1; w <= _.length; w++)
      if (w === _.length || _[w] !== _[A]) {
        const W = _[A], I = w - 1, O = I - A + 1;
        W === "common" ? b.push({ start: A, end: I, category: "common" }) : O > 1 && b.push({ start: A, end: I, category: W }), A = w;
      }
    return b;
  }, [f, _]), j = X.useMemo(() => F.map((b) => p(b.x instanceof Date ? b.x : new Date(b.x))), [F, p]), D = p.range()[1], v = X.useMemo(() => L.length ? /* @__PURE__ */ r.jsx("defs", { children: L.map((b, A) => {
    const w = `spc-seq-grad-${A}`;
    let $, W = 0.28, I = 0.12, O = 0.045;
    switch (b.category) {
      case "concern":
        $ = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", W = 0.28, I = 0.12, O = 0.045;
        break;
      case "improvement":
        $ = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", W = 0.26, I = 0.11, O = 0.045;
        break;
      default:
        $ = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
    }
    return /* @__PURE__ */ r.jsxs("linearGradient", { id: w, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: $, stopOpacity: W }),
      /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: $, stopOpacity: I }),
      /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: $, stopOpacity: O })
    ] }, w);
  }) }) : null, [L]), x = X.useMemo(() => {
    if (!L.length) return null;
    const [b] = u.domain(), A = u(b), w = L.map(($, W) => {
      const I = $.start, O = $.end, H = j[I], Q = j[O], fe = I > 0 ? j[I - 1] : H, oe = O < j.length - 1 ? j[O + 1] : Q;
      let K = I === 0 ? Math.max(0, H - (j.length > 1 ? (j[1] - H) / 2 : 10)) : (fe + H) / 2, V = O === j.length - 1 ? Math.min(D, Q + (j.length > 1 ? (Q - j[j.length - 2]) / 2 : 10)) : (Q + oe) / 2, J = null, ae = null;
      if ($.category === "common")
        I > 0 && (K = j[I - 1], J = u(F[I - 1].y)), O < F.length - 1 && (V = j[O + 1], ae = u(F[O + 1].y));
      else if (K = H, I > 0) {
        const he = _[I - 1];
        he !== "common" && he !== $.category && (K = j[I - 1], J = u(F[I - 1].y));
      }
      let G = `M ${K} ${A}`;
      const me = u(F[I].y);
      J != null ? (G += ` L ${K} ${J}`, H !== K && (G += ` L ${H} ${me}`)) : (G += ` L ${K} ${me}`, H !== K && (G += ` L ${H} ${me}`));
      for (let he = I; he <= O; he++) {
        const xe = j[he], pe = u(F[he].y);
        G += ` L ${xe} ${pe}`;
      }
      return $.category === "common" && ae != null ? (V !== Q && (G += ` L ${V} ${ae}`), G += ` L ${V} ${A} Z`) : G += ` L ${Q} ${A} L ${V} ${A} Z`, /* @__PURE__ */ r.jsx(
        "path",
        {
          d: G,
          fill: `url(#spc-seq-grad-${W})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${W}`
      );
    });
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: w });
  }, [L, j, D, u, F]), y = X.useMemo(() => {
    if (!c?.timeframe && F.length >= 2) {
      const b = F.map((O) => O.x instanceof Date ? O.x : new Date(O.x)), A = new Date(Math.min(...b.map((O) => O.getTime()))), w = new Date(Math.max(...b.map((O) => O.getTime()))), $ = Math.round((w.getTime() - A.getTime()) / 864e5) || 0;
      if ($ < 14)
        return `The chart shows a timeframe of ${$ + 1} days`;
      const W = Math.round($ / 7);
      return W < 20 ? `The chart shows a timeframe of ${W} weeks` : `The chart shows a timeframe of ${(w.getFullYear() - A.getFullYear()) * 12 + (w.getMonth() - A.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, F]), P = (b) => {
    const A = b % 10, w = b % 100;
    return A === 1 && w !== 11 ? `${b}st` : A === 2 && w !== 12 ? `${b}nd` : A === 3 && w !== 13 ? `${b}rd` : `${b}th`;
  }, E = (b) => `${P(b.getDate())} ${b.toLocaleString("en-GB", { month: "long" })}, ${b.getFullYear()}`, M = X.useCallback(
    ({ index: b, x: A, y: w }) => {
      const $ = i?.[b], W = A instanceof Date ? A : new Date(A), I = E(W), O = c?.measureUnit ? ` ${c.measureUnit}` : "", H = c?.measureName ? ` ${c.measureName}` : "";
      if (!$)
        return `General summary is: ${y ? y + ". " : ""}Point ${b + 1}, ${I}, ${w}${O}${H}`;
      const Q = Ya($.variationIcon) || "Variation", fe = Ga($), oe = fe.length ? ` Rules: ${[...new Set(fe.map((V) => Ua[V].narration))].join("; ")}.` : " No special cause rules.", K = [];
      return c?.measureName && K.push(`Measure: ${c.measureName}.`), c?.datasetContext && K.push(`${c.datasetContext}.`), c?.organisation && K.push(`Organisation: ${c.organisation}.`), c?.additionalNote && K.push(c.additionalNote), [
        "General summary is:",
        ...K,
        `Point ${b + 1} recorded on `,
        I + ",",
        `with a value of ${w} ${O}${H}`,
        Q + ".",
        oe
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, y]
  ), k = X.useCallback(
    (b, A) => i?.[b] ? M({
      index: b,
      seriesId: "process",
      x: A.x instanceof Date ? A.x : new Date(A.x),
      y: A.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, M]
  );
  return /* @__PURE__ */ r.jsx(ih, { children: /* @__PURE__ */ r.jsxs(
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
              /* @__PURE__ */ r.jsx(Vs, { type: "x" }),
              /* @__PURE__ */ r.jsx(Vs, { type: "y" }),
              /* @__PURE__ */ r.jsx(Mf, { axis: "y" }),
              v,
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
              B != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
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
              B != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: p.range()[1],
                    y1: u(B),
                    y2: u(B),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: p.range()[0] - 7,
                    y: u(B) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      B,
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
                lh,
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
              t && F.map((b, A) => {
                const w = p(b.x instanceof Date ? b.x : new Date(b.x)), $ = u(b.y), W = T.has(A), I = S?.[A], O = [
                  "fdp-spc__point",
                  W && s ? "fdp-spc__point--ooc" : null,
                  l && I?.special && I.concern ? "fdp-spc__point--sc-concern" : null,
                  l && I?.special && I.improvement ? "fdp-spc__point--sc-improvement" : null,
                  I?.assurance === Ft.Pass ? "fdp-spc__point--assurance-pass" : null,
                  I?.assurance === Ft.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), H = `Point ${A + 1} value ${b.y}` + (I?.special ? " special cause" : "") + (I?.variation === Ge.Improvement ? " improving" : I?.variation === Ge.Concern ? " concern" : ""), Q = R?.focused?.index === A;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: w,
                    cy: $,
                    r: 5,
                    className: O,
                    "data-variation": I?.variation,
                    "data-assurance": I?.assurance,
                    "aria-label": H,
                    ...Q ? { "aria-describedby": `spc-tooltip-${A}` } : {}
                  },
                  A
                );
              }),
              d && l && S && F.map((b, A) => {
                const w = S[A];
                if (!w || !(w.concern || w.improvement)) return null;
                const $ = p(b.x instanceof Date ? b.x : new Date(b.x)), W = u(b.y);
                let I = W - 10;
                const O = 12, H = u.range()[0] - 4;
                I < O && (I = Math.min(W + 16, H));
                const Q = p.range()[1], fe = Math.min(Math.max($, 0), Q - 0);
                return /* @__PURE__ */ r.jsx(
                  "text",
                  {
                    x: fe,
                    y: I,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${w.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: w.concern ? "!" : "★"
                  },
                  `icon-${A}`
                );
              }),
              C && /* @__PURE__ */ r.jsx(
                $h,
                {
                  width: p.range()[1],
                  height: u.range()[0]
                }
              ),
              /* @__PURE__ */ r.jsx(
                pi,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: k,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (b) => E(b)
                }
              )
            ] })
          }
        ),
        n && /* @__PURE__ */ r.jsx(
          ch,
          {
            format: (b) => M({ ...b, x: b.x instanceof Date ? b.x : new Date(b.x) })
          }
        )
      ]
    }
  ) });
}, $h = ({
  width: e,
  height: t
}) => {
  const n = kn();
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
}, Q0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: Ft,
  AssuranceResult: zt,
  Direction: we,
  ImprovementDirection: Rt,
  MetricPolarity: Je,
  SPCAssuranceIcon: Ka,
  SPCChart: Th,
  SPCTooltipOverlay: pi,
  SPCVariationIcon: Xa,
  VARIATION_COLOR_TOKENS: lt,
  VariationIcon: Ge,
  VariationJudgement: Xe,
  VariationState: De,
  buildSpc: fi,
  extractRuleIds: Ga,
  getVariationColorHex: _h,
  getVariationColorToken: hi,
  getVariationColour: gi,
  getVariationTrend: qa,
  ruleGlossary: Ua,
  variationLabel: Ya
}, Symbol.toStringTag, { value: "Module" })), Ih = "150ms", Lh = "300ms", Mh = "500ms", Fh = "cubic-bezier(0.4, 0, 1, 1)", Bh = "cubic-bezier(0, 0, 0.2, 1)", Ah = "cubic-bezier(0.4, 0, 0.2, 1)", Eh = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Rh = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Ph = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Hh = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", zh = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Wh = "1px", Oh = "2px", Uh = "4px", Gh = "4px", Yh = "4px", Vh = "2px", qh = "1px", Xh = "0px", Kh = "4px", Zh = "8px", Jh = "12px", bi = "#d8dde0", yi = "#4c6272", vi = "#d8dde0", wi = "#aeb7bd", _i = "#d5281b", Si = "#005eb8", ki = "#ffffff", Ci = "#212b32", ji = "#007f3b", Ni = "#330072", Ti = "#7c2855", Di = "#d5281b", $i = "#ffeb3b", Ii = "#fff9c4", Li = "#ffb81c", Mi = "#ed8b00", Fi = "#00a499", Bi = "#ae2573", Ai = "#4c6272", Ei = "#768692", Ri = "#aeb7bd", Pi = "#d8dde0", Hi = "#f0f4f5", Qh = "#212b32", ep = "#4c6272", tp = "#ffffff", np = "#212b32", rp = "#005eb8", ap = "#7c2855", sp = "#003087", op = "#330072", ip = "#ffeb3b", lp = "#212b32", cp = "#d8dde0", dp = "#ffffff33", up = "#d5281b", fp = "#4c6272", hp = "#ffffff", pp = "#007f3b", mp = "#ffffff", gp = "#006530", xp = "#004021", bp = "#004021", yp = "#00000000", vp = "#ffffff", wp = "#005eb8", _p = "#005eb8", Sp = "#d9e5f2", kp = "#c7daf0", Cp = "#005eb8", jp = "#ffffff", Np = "#212b32", Tp = "#d9dde0", Dp = "#b3bcc2", $p = "#b3bcc2", Ip = "#d5281b", Lp = "#aa2016", Mp = "#6a140e", Fp = "#6a140e", Bp = "#005eb8", Ap = "#004b93", Ep = "#002f5c", Rp = "#002f5c", Pp = "8px", Hp = "16px", zp = "12px", Wp = "16px", Op = "4px", Up = "40px", Gp = "4px", Yp = "40px", Vp = "12px", qp = "16px", Xp = "32px", Kp = "16px", Zp = "20px", Jp = "28px", Qp = "9px", em = "2px", tm = "16px", nm = "24px", rm = "8px", am = "24px", sm = "16px", om = "4px", im = "4px", lm = "4px", cm = "8px", dm = "4px", um = "16px", fm = "#007f3b", hm = "#006530", pm = "#004021", mm = "#d8dde0", gm = "#ffffff", xm = "#768692", bm = "#00000000", ym = "#ffeb3b", vm = "#00000000", wm = "#ffffff", _m = "#d9e5f2", Sm = "#c7daf0", km = "#005eb8", Cm = "#005eb8", zi = "8px", Wi = "16px", Oi = "12px", Ui = "16px", jm = "2px", Nm = "4px", Tm = "4px", Dm = "600", $m = "#ffffff", Im = "#d8dde0", Lm = "#aeb7bd", Mm = "#f0f4f5", Fm = "#212b32", Bm = "#212b32", Am = "#005eb8", Gi = "16px", Yi = "32px", Vi = "16px", Em = "1px", Rm = "4px", Pm = "none", Hm = "0 2px 4px rgba(0, 0, 0, 0.1)", zm = "#ffffff", Wm = "#ffffff", Om = "#d8dde0", Um = "#ffffff", Gm = "#4c6272", Ym = "#ffeb3b", Vm = "#d5281b", qm = "#aeb7bd", Xm = "#212b32", Km = "#4c6272", Zm = "#768692", Jm = "#212b32", Qm = "#ffffff", eg = "600", tg = "#d5281b", ng = "600", rg = "#4c6272", qi = "4px", Xi = "40px", Ki = "40px", Zi = "12px", ag = "2px", sg = "4px", og = "0px", ig = "16px", lg = "18px", cg = "24px", dg = "32px", ug = "34px", fg = "32px", hg = "40px", pg = "48px", mg = "5.4ex", gg = "7.2ex", xg = "9ex", bg = "10.8ex", yg = "20ex", vg = "38ex", wg = "56ex", _g = "44px", Sg = "40px", kg = "1020px", Cg = "100%", jg = "50%", Ng = "33.333%", Tg = "25%", Dg = "20%", $g = "320px", Ig = "641px", Lg = "1025px", Mg = "1280px", Fg = "960px", Bg = "32px", Ag = "16px", Eg = "#d5281b", Rg = "#d5281b", Pg = "#ffffff", Hg = "#007f3b", zg = "#007f3b", Wg = "#ffffff", Og = "#ffeb3b", Ug = "#ffeb3b", Gg = "#212b32", Yg = "#005eb8", Vg = "#005eb8", qg = "#ffffff", Xg = "#d8dde0", Kg = "#aeb7bd", Zg = "#768692", Jg = "0 4px 0 #004021", Qg = "0 4px 0 #005eb8", e0 = "0 4px 0 #6a140e", t0 = "0 4px 0 #ffeb3b", n0 = "none", r0 = "0 2px 4px rgba(0, 0, 0, 0.1)", a0 = "4px", s0 = "0px", o0 = "solid", i0 = "0 0 0 3px #ffeb3b", l0 = "0 0 0 3px #ffeb3b", c0 = "none", d0 = "0 1px 3px rgba(0, 0, 0, 0.12)", u0 = "0 2px 6px rgba(0, 0, 0, 0.16)", f0 = "0 4px 12px rgba(0, 0, 0, 0.20)", Ji = "0", Qi = "4px", el = "8px", tl = "16px", nl = "24px", rl = "32px", al = "40px", sl = "48px", ol = "56px", il = "64px", ia = "0", la = "0", ca = "4px", da = "4px", ua = "8px", fa = "8px", ha = "8px", pa = "16px", ma = "16px", ga = "24px", xa = "24px", ba = "32px", ya = "32px", va = "40px", wa = "40px", _a = "48px", Sa = "48px", ka = "56px", Ca = "56px", ja = "64px", Yn = "Frutiger W01", Vn = "Arial, Helvetica, sans-serif", qn = "sans-serif", Xn = "400", Kn = "600", Zn = "400", Jn = "12px", Qn = "14px", er = "12pt", tr = "14px", nr = "16px", rr = "12pt", ar = "16px", sr = "19px", or = "13pt", ir = "19px", lr = "22px", cr = "15pt", dr = "22px", ur = "26px", fr = "17pt", hr = "27px", pr = "36px", mr = "20pt", gr = "33px", xr = "48px", br = "24pt", Na = "16px", Ta = "24px", mt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, gt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, xt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, bt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, yt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, _t = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, St = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, kt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, h0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Ih,
  AnimationDurationNormal: Lh,
  AnimationDurationSlow: Mh,
  AnimationEasingBounce: Eh,
  AnimationEasingEaseIn: Fh,
  AnimationEasingEaseInOut: Ah,
  AnimationEasingEaseOut: Bh,
  BorderColorCard: vi,
  BorderColorCardHover: wi,
  BorderColorDefault: bi,
  BorderColorError: _i,
  BorderColorForm: yi,
  BorderRadiusLarge: Jh,
  BorderRadiusMedium: Zh,
  BorderRadiusNone: Xh,
  BorderRadiusSmall: Kh,
  BorderWidthCardBottom: Gh,
  BorderWidthDefault: Wh,
  BorderWidthFormElement: Oh,
  BorderWidthFormElementError: Uh,
  BorderWidthPanel: Yh,
  BorderWidthTableCell: qh,
  BorderWidthTableHeader: Vh,
  BreakpointDesktop: Lg,
  BreakpointLargeDesktop: Mg,
  BreakpointMobile: $g,
  BreakpointTablet: Ig,
  ButtonBorderRadius: Nm,
  ButtonBorderWidth: jm,
  ButtonPrimaryBackgroundActive: pm,
  ButtonPrimaryBackgroundDefault: fm,
  ButtonPrimaryBackgroundDisabled: mm,
  ButtonPrimaryBackgroundHover: hm,
  ButtonPrimaryBorderDefault: bm,
  ButtonPrimaryBorderFocus: ym,
  ButtonPrimaryTextDefault: gm,
  ButtonPrimaryTextDisabled: xm,
  ButtonSecondaryBackgroundActive: Sm,
  ButtonSecondaryBackgroundDefault: vm,
  ButtonSecondaryBackgroundHover: _m,
  ButtonSecondaryBackgroundSolid: wm,
  ButtonSecondaryBorderDefault: Cm,
  ButtonSecondaryTextDefault: km,
  ButtonShadowSize: Tm,
  ButtonSpacingPaddingHorizontalDesktop: Ui,
  ButtonSpacingPaddingHorizontalMobile: Wi,
  ButtonSpacingPaddingVerticalDesktop: Oi,
  ButtonSpacingPaddingVerticalMobile: zi,
  ButtonTypographyWeight: Dm,
  CardBackgroundDefault: $m,
  CardBorderBottom: Mm,
  CardBorderDefault: Im,
  CardBorderHover: Lm,
  CardBorderWidthBottom: Rm,
  CardBorderWidthDefault: Em,
  CardShadowDefault: Pm,
  CardShadowHover: Hm,
  CardSpacingHeadingMargin: Vi,
  CardSpacingPaddingDesktop: Yi,
  CardSpacingPaddingMobile: Gi,
  CardTextDescription: Bm,
  CardTextHeading: Fm,
  CardTextLink: Am,
  ColorBorderDefault: cp,
  ColorBorderSecondary: dp,
  ColorButtonLoginActive: Ep,
  ColorButtonLoginBackground: Bp,
  ColorButtonLoginHover: Ap,
  ColorButtonLoginShadow: Rp,
  ColorButtonPrimaryActive: xp,
  ColorButtonPrimaryBackground: pp,
  ColorButtonPrimaryHover: gp,
  ColorButtonPrimaryShadow: bp,
  ColorButtonPrimaryText: mp,
  ColorButtonReverseActive: Dp,
  ColorButtonReverseBackground: jp,
  ColorButtonReverseHover: Tp,
  ColorButtonReverseShadow: $p,
  ColorButtonReverseText: Np,
  ColorButtonSecondaryActive: kp,
  ColorButtonSecondaryBackground: yp,
  ColorButtonSecondaryBackgroundSolid: vp,
  ColorButtonSecondaryBorder: wp,
  ColorButtonSecondaryHover: Sp,
  ColorButtonSecondaryShadow: Cp,
  ColorButtonSecondaryText: _p,
  ColorButtonWarningActive: Mp,
  ColorButtonWarningBackground: Ip,
  ColorButtonWarningHover: Lp,
  ColorButtonWarningShadow: Fp,
  ColorError: up,
  ColorFocusBackground: ip,
  ColorFocusText: lp,
  ColorFormBackground: hp,
  ColorFormBorder: fp,
  ColorGrey1: Ai,
  ColorGrey2: Ei,
  ColorGrey3: Ri,
  ColorGrey4: Pi,
  ColorGrey5: Hi,
  ColorLinkActive: sp,
  ColorLinkDefault: rp,
  ColorLinkHover: ap,
  ColorLinkVisited: op,
  ColorPrimaryBlack: Ci,
  ColorPrimaryBlue: Si,
  ColorPrimaryDarkPink: Ti,
  ColorPrimaryGreen: ji,
  ColorPrimaryPurple: Ni,
  ColorPrimaryRed: Di,
  ColorPrimaryWhite: ki,
  ColorPrimaryYellow: $i,
  ColorSecondaryAquaGreen: Fi,
  ColorSecondaryOrange: Mi,
  ColorSecondaryPaleYellow: Ii,
  ColorSecondaryPink: Bi,
  ColorSecondaryWarmYellow: Li,
  ColorTextPrimary: Qh,
  ColorTextPrint: np,
  ColorTextReverse: tp,
  ColorTextSecondary: ep,
  ComponentBlur: im,
  ComponentBreadcrumbChevronMarginLeft: Qp,
  ComponentBreadcrumbChevronMarginRight: em,
  ComponentBreadcrumbPaddingTopDesktop: nm,
  ComponentBreadcrumbPaddingTopMobile: tm,
  ComponentButtonPaddingDesktopHorizontal: Wp,
  ComponentButtonPaddingDesktopVertical: zp,
  ComponentButtonPaddingMobileHorizontal: Hp,
  ComponentButtonPaddingMobileVertical: Pp,
  ComponentButtonShadowSize: Op,
  ComponentCardHeadingMargin: Kp,
  ComponentCardPaddingDesktop: Xp,
  ComponentCardPaddingMobile: qp,
  ComponentDetails: cm,
  ComponentExpander: dm,
  ComponentFormCheckboxLabelPadding: Vp,
  ComponentFormCheckboxSize: Yp,
  ComponentFormInputMinHeight: Up,
  ComponentFormInputPadding: Gp,
  ComponentLink: lm,
  ComponentPagination: um,
  ComponentPanelPaddingDesktop: Jp,
  ComponentPanelPaddingMobile: Zp,
  ComponentSpread: om,
  ComponentSummaryListCellPaddingHorizontal: am,
  ComponentSummaryListCellPaddingVertical: rm,
  ComponentSummaryListRowMargin: sm,
  ElevationHigh: f0,
  ElevationLow: d0,
  ElevationMedium: u0,
  ElevationNone: c0,
  FocusOutlineOffset: s0,
  FocusOutlineStyle: o0,
  FocusOutlineWidth: a0,
  FocusShadowButton: l0,
  FocusShadowInput: i0,
  FontFamilyBase: Yn,
  FontFamilyFallback: Vn,
  FontFamilyPrint: qn,
  FontLineHeightBase: Ta,
  FontSize14Mobile: Jn,
  FontSize14Print: er,
  FontSize14Tablet: Qn,
  FontSize16Mobile: tr,
  FontSize16Print: rr,
  FontSize16Tablet: nr,
  FontSize19Mobile: ar,
  FontSize19Print: or,
  FontSize19Tablet: sr,
  FontSize22Mobile: ir,
  FontSize22Print: cr,
  FontSize22Tablet: lr,
  FontSize26Mobile: dr,
  FontSize26Print: fr,
  FontSize26Tablet: ur,
  FontSize36Mobile: hr,
  FontSize36Print: mr,
  FontSize36Tablet: pr,
  FontSize48Mobile: gr,
  FontSize48Print: br,
  FontSize48Tablet: xr,
  FontSizeBase: Na,
  FontWeightBold: Kn,
  FontWeightLight: Zn,
  FontWeightNormal: Xn,
  FormBorderRadius: og,
  FormBorderWidthDefault: ag,
  FormBorderWidthError: sg,
  FormErrorTextDefault: tg,
  FormErrorTypographyWeight: ng,
  FormHintTextDefault: rg,
  FormInputBackgroundDefault: zm,
  FormInputBackgroundDisabled: Om,
  FormInputBackgroundError: Um,
  FormInputBackgroundFocus: Wm,
  FormInputBorderDefault: Gm,
  FormInputBorderDisabled: qm,
  FormInputBorderError: Vm,
  FormInputBorderFocus: Ym,
  FormInputTextDefault: Xm,
  FormInputTextDisabled: Zm,
  FormInputTextPlaceholder: Km,
  FormLabelTextDefault: Jm,
  FormLabelTextRequired: Qm,
  FormLabelTypographyWeight: eg,
  FormSpacingCheckboxLabelPadding: Zi,
  FormSpacingCheckboxSize: Ki,
  FormSpacingInputMinHeight: Xi,
  FormSpacingInputPadding: qi,
  GridGutter: Bg,
  GridGutterHalf: Ag,
  GridPageWidth: Fg,
  HeadingsNhsukHeadingL: gt,
  HeadingsNhsukHeadingM: xt,
  HeadingsNhsukHeadingS: bt,
  HeadingsNhsukHeadingXl: mt,
  HeadingsNhsukHeadingXs: yt,
  LayoutColumnActions: Dg,
  LayoutColumnFull: Cg,
  LayoutColumnHalf: jg,
  LayoutColumnQuarter: Tg,
  LayoutColumnThird: Ng,
  LayoutContainerMaxWidth: kg,
  ParagraphsBody: vt,
  ParagraphsBodyLarge: wt,
  ParagraphsBodySmall: _t,
  ParagraphsLedeText: St,
  ParagraphsLedeTextSmall: kt,
  ShadowButtonDefault: Jg,
  ShadowButtonFocus: t0,
  ShadowButtonSecondary: Qg,
  ShadowButtonWarning: e0,
  ShadowCardDefault: n0,
  ShadowCardHover: r0,
  SizeButtonMinHeightDesktop: Sg,
  SizeButtonMinHeightMobile: _g,
  SizeFormControlLarge: pg,
  SizeFormControlMedium: hg,
  SizeFormControlSmall: fg,
  SizeFormInputWidth2xl: vg,
  SizeFormInputWidth3xl: wg,
  SizeFormInputWidthLg: bg,
  SizeFormInputWidthMd: xg,
  SizeFormInputWidthSm: gg,
  SizeFormInputWidthXl: yg,
  SizeFormInputWidthXs: mg,
  SizeIconExtraLarge: dg,
  SizeIconLarge: cg,
  SizeIconMedium: lg,
  SizeIconNhsDefault: ug,
  SizeIconSmall: ig,
  Spacing0: Ji,
  Spacing1: Qi,
  Spacing2: el,
  Spacing3: tl,
  Spacing4: nl,
  Spacing5: rl,
  Spacing6: al,
  Spacing7: sl,
  Spacing8: ol,
  Spacing9: il,
  SpacingResponsive0Mobile: ia,
  SpacingResponsive0Tablet: la,
  SpacingResponsive1Mobile: ca,
  SpacingResponsive1Tablet: da,
  SpacingResponsive2Mobile: ua,
  SpacingResponsive2Tablet: fa,
  SpacingResponsive3Mobile: ha,
  SpacingResponsive3Tablet: pa,
  SpacingResponsive4Mobile: ma,
  SpacingResponsive4Tablet: ga,
  SpacingResponsive5Mobile: xa,
  SpacingResponsive5Tablet: ba,
  SpacingResponsive6Mobile: ya,
  SpacingResponsive6Tablet: va,
  SpacingResponsive7Mobile: wa,
  SpacingResponsive7Tablet: _a,
  SpacingResponsive8Mobile: Sa,
  SpacingResponsive8Tablet: ka,
  SpacingResponsive9Mobile: Ca,
  SpacingResponsive9Tablet: ja,
  StateDisabledBackground: Xg,
  StateDisabledBorder: Kg,
  StateDisabledText: Zg,
  StateErrorBackground: Eg,
  StateErrorBorder: Rg,
  StateErrorText: Pg,
  StateInfoBackground: Yg,
  StateInfoBorder: Vg,
  StateInfoText: qg,
  StateSuccessBackground: Hg,
  StateSuccessBorder: zg,
  StateSuccessText: Wg,
  StateWarningBackground: Og,
  StateWarningBorder: Ug,
  StateWarningText: Gg,
  TransitionButtonDefault: Rh,
  TransitionButtonShadow: Ph,
  TransitionCardHover: zh,
  TransitionInputFocus: Hh
}, Symbol.toStringTag, { value: "Module" })), ex = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), tx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: mt.fontFamily,
      fontWeight: mt.fontWeight,
      fontSize: mt.fontSize.mobile,
      lineHeight: mt.lineHeight,
      marginTop: mt.marginTop,
      marginBottom: mt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), nx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
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
), rx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
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
), ax = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
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
), sx = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
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
), ox = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
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
), ix = ({
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
), lx = ({
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
), cx = ({
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
), dx = ({
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
), ux = () => je(() => h0, []), fx = () => je(() => ({
  // Border colors
  BorderColorDefault: bi,
  BorderColorForm: yi,
  BorderColorCard: vi,
  BorderColorCardHover: wi,
  BorderColorError: _i,
  // Primary colors
  ColorPrimaryBlue: Si,
  ColorPrimaryWhite: ki,
  ColorPrimaryBlack: Ci,
  ColorPrimaryGreen: ji,
  ColorPrimaryPurple: Ni,
  ColorPrimaryDarkPink: Ti,
  ColorPrimaryRed: Di,
  ColorPrimaryYellow: $i,
  // Secondary colors
  ColorSecondaryPaleYellow: Ii,
  ColorSecondaryWarmYellow: Li,
  ColorSecondaryOrange: Mi,
  ColorSecondaryAquaGreen: Fi,
  ColorSecondaryPink: Bi,
  // Grey scale
  ColorGrey1: Ai,
  ColorGrey2: Ei,
  ColorGrey3: Ri,
  ColorGrey4: Pi,
  ColorGrey5: Hi
}), []), hx = () => je(() => ({
  Spacing0: Ji,
  Spacing1: Qi,
  Spacing2: el,
  Spacing3: tl,
  Spacing4: nl,
  Spacing5: rl,
  Spacing6: al,
  Spacing7: sl,
  Spacing8: ol,
  Spacing9: il
}), []), px = () => je(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Jn,
    Size16: tr,
    Size19: ar,
    Size22: ir,
    Size26: dr,
    Size36: hr,
    Size48: gr
  },
  Tablet: {
    Size14: Qn,
    Size16: nr,
    Size19: sr,
    Size22: lr,
    Size26: ur,
    Size36: pr,
    Size48: xr
  },
  Print: {
    Size14: er,
    Size16: rr,
    Size19: or,
    Size22: cr,
    Size26: fr,
    Size36: mr,
    Size48: br
  },
  Family: {
    Base: Yn,
    Fallback: Vn,
    Print: qn
  },
  Weight: {
    Normal: Xn,
    Bold: Kn,
    Light: Zn
  },
  Base: {
    Size: Na,
    LineHeight: Ta
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Yn,
  FontFamilyFallback: Vn,
  FontFamilyPrint: qn,
  FontWeightNormal: Xn,
  FontWeightBold: Kn,
  FontWeightLight: Zn,
  FontSize14Mobile: Jn,
  FontSize14Tablet: Qn,
  FontSize14Print: er,
  FontSize16Mobile: tr,
  FontSize16Tablet: nr,
  FontSize16Print: rr,
  FontSize19Mobile: ar,
  FontSize19Tablet: sr,
  FontSize19Print: or,
  FontSize22Mobile: ir,
  FontSize22Tablet: lr,
  FontSize22Print: cr,
  FontSize26Mobile: dr,
  FontSize26Tablet: ur,
  FontSize26Print: fr,
  FontSize36Mobile: hr,
  FontSize36Tablet: pr,
  FontSize36Print: mr,
  FontSize48Mobile: gr,
  FontSize48Tablet: xr,
  FontSize48Print: br,
  FontSizeBase: Na,
  FontLineHeightBase: Ta
}), []), mx = () => je(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: ia,
    Size1: ca,
    Size2: ua,
    Size3: ha,
    Size4: ma,
    Size5: xa,
    Size6: ya,
    Size7: wa,
    Size8: Sa,
    Size9: Ca
  },
  Tablet: {
    Size0: la,
    Size1: da,
    Size2: fa,
    Size3: pa,
    Size4: ga,
    Size5: ba,
    Size6: va,
    Size7: _a,
    Size8: ka,
    Size9: ja
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: ia,
  SpacingResponsive0Tablet: la,
  SpacingResponsive1Mobile: ca,
  SpacingResponsive1Tablet: da,
  SpacingResponsive2Mobile: ua,
  SpacingResponsive2Tablet: fa,
  SpacingResponsive3Mobile: ha,
  SpacingResponsive3Tablet: pa,
  SpacingResponsive4Mobile: ma,
  SpacingResponsive4Tablet: ga,
  SpacingResponsive5Mobile: xa,
  SpacingResponsive5Tablet: ba,
  SpacingResponsive6Mobile: ya,
  SpacingResponsive6Tablet: va,
  SpacingResponsive7Mobile: wa,
  SpacingResponsive7Tablet: _a,
  SpacingResponsive8Mobile: Sa,
  SpacingResponsive8Tablet: ka,
  SpacingResponsive9Mobile: Ca,
  SpacingResponsive9Tablet: ja
}), []), gx = () => je(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: zi,
  ButtonSpacingPaddingHorizontalMobile: Wi,
  ButtonSpacingPaddingVerticalDesktop: Oi,
  ButtonSpacingPaddingHorizontalDesktop: Ui,
  // Card spacing	
  CardSpacingPaddingMobile: Gi,
  CardSpacingPaddingDesktop: Yi,
  CardSpacingHeadingMargin: Vi,
  // Form spacing
  FormSpacingInputPadding: qi,
  FormSpacingInputMinHeight: Xi,
  FormSpacingCheckboxSize: Ki,
  FormSpacingCheckboxLabelPadding: Zi
}), []), xx = () => je(() => ({
  xl: mt,
  l: gt,
  m: xt,
  s: bt,
  xs: yt
}), []), bx = () => je(() => ({
  body: vt,
  bodyLarge: wt,
  bodySmall: _t,
  ledeText: St,
  ledeTextSmall: kt
}), []), yx = () => je(() => ({
  headings: {
    xl: mt,
    l: gt,
    m: xt,
    s: bt,
    xs: yt
  },
  paragraphs: {
    body: vt,
    bodyLarge: wt,
    bodySmall: _t,
    ledeText: St,
    ledeTextSmall: kt
  },
  fonts: {
    family: {
      base: Yn,
      fallback: Vn,
      print: qn
    },
    weight: {
      normal: Xn,
      bold: Kn,
      light: Zn
    },
    sizes: {
      mobile: {
        size14: Jn,
        size16: tr,
        size19: ar,
        size22: ir,
        size26: dr,
        size36: hr,
        size48: gr
      },
      tablet: {
        size14: Qn,
        size16: nr,
        size19: sr,
        size22: lr,
        size26: ur,
        size36: pr,
        size48: xr
      },
      print: {
        size14: er,
        size16: rr,
        size19: or,
        size22: cr,
        size26: fr,
        size36: mr,
        size48: br
      }
    }
  }
}), []);
function vx(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, o] = X.useState(t), s = X.useCallback(() => o("three-column"), []), i = X.useCallback(() => o((d) => d === "three-column" ? n : d), [n]), l = X.useCallback(() => o((d) => d === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const ll = {
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
function wx(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...ll, ...e }, a = [];
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
function _x(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...ll, ...e };
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
const Sx = '"Frutiger W01", Arial, Helvetica, sans-serif', kx = "Arial, Helvetica, sans-serif";
async function Cx() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  $l as Account,
  b0 as ActionLink,
  q0 as AdaptiveDataGrid,
  Ih as AnimationDurationFast,
  Lh as AnimationDurationNormal,
  Mh as AnimationDurationSlow,
  Eh as AnimationEasingBounce,
  Fh as AnimationEasingEaseIn,
  Ah as AnimationEasingEaseInOut,
  Bh as AnimationEasingEaseOut,
  Fo as AppointmentCard,
  Lu as AriaDataGrid,
  ea as AriaTabsDataGrid,
  q0 as AriaTabsDataGridAdaptive,
  Yr as BackLink,
  vi as BorderColorCard,
  wi as BorderColorCardHover,
  bi as BorderColorDefault,
  _i as BorderColorError,
  yi as BorderColorForm,
  Jh as BorderRadiusLarge,
  Zh as BorderRadiusMedium,
  Xh as BorderRadiusNone,
  Kh as BorderRadiusSmall,
  Gh as BorderWidthCardBottom,
  Wh as BorderWidthDefault,
  Oh as BorderWidthFormElement,
  Uh as BorderWidthFormElementError,
  Yh as BorderWidthPanel,
  qh as BorderWidthTableCell,
  Vh as BorderWidthTableHeader,
  wu as Breadcrumb,
  Lg as BreakpointDesktop,
  Mg as BreakpointLargeDesktop,
  $g as BreakpointMobile,
  Ig as BreakpointTablet,
  Qe as Button,
  Nm as ButtonBorderRadius,
  jm as ButtonBorderWidth,
  pm as ButtonPrimaryBackgroundActive,
  fm as ButtonPrimaryBackgroundDefault,
  mm as ButtonPrimaryBackgroundDisabled,
  hm as ButtonPrimaryBackgroundHover,
  bm as ButtonPrimaryBorderDefault,
  ym as ButtonPrimaryBorderFocus,
  gm as ButtonPrimaryTextDefault,
  xm as ButtonPrimaryTextDisabled,
  Sm as ButtonSecondaryBackgroundActive,
  vm as ButtonSecondaryBackgroundDefault,
  _m as ButtonSecondaryBackgroundHover,
  wm as ButtonSecondaryBackgroundSolid,
  Cm as ButtonSecondaryBorderDefault,
  km as ButtonSecondaryTextDefault,
  Tm as ButtonShadowSize,
  Ui as ButtonSpacingPaddingHorizontalDesktop,
  Wi as ButtonSpacingPaddingHorizontalMobile,
  Oi as ButtonSpacingPaddingVerticalDesktop,
  zi as ButtonSpacingPaddingVerticalMobile,
  Dm as ButtonTypographyWeight,
  Io as Card,
  $m as CardBackgroundDefault,
  Mm as CardBorderBottom,
  Im as CardBorderDefault,
  Lm as CardBorderHover,
  Rm as CardBorderWidthBottom,
  Em as CardBorderWidthDefault,
  B0 as CardGroup,
  A0 as CardGroupItem,
  Pm as CardShadowDefault,
  Hm as CardShadowHover,
  Vi as CardSpacingHeadingMargin,
  Yi as CardSpacingPaddingDesktop,
  Gi as CardSpacingPaddingMobile,
  Bm as CardTextDescription,
  Fm as CardTextHeading,
  Am as CardTextLink,
  E0 as CareCard,
  y0 as CharacterCount,
  Bl as Checkbox,
  Rl as Checkboxes,
  cp as ColorBorderDefault,
  dp as ColorBorderSecondary,
  Ep as ColorButtonLoginActive,
  Bp as ColorButtonLoginBackground,
  Ap as ColorButtonLoginHover,
  Rp as ColorButtonLoginShadow,
  xp as ColorButtonPrimaryActive,
  pp as ColorButtonPrimaryBackground,
  gp as ColorButtonPrimaryHover,
  bp as ColorButtonPrimaryShadow,
  mp as ColorButtonPrimaryText,
  Dp as ColorButtonReverseActive,
  jp as ColorButtonReverseBackground,
  Tp as ColorButtonReverseHover,
  $p as ColorButtonReverseShadow,
  Np as ColorButtonReverseText,
  kp as ColorButtonSecondaryActive,
  yp as ColorButtonSecondaryBackground,
  vp as ColorButtonSecondaryBackgroundSolid,
  wp as ColorButtonSecondaryBorder,
  Sp as ColorButtonSecondaryHover,
  Cp as ColorButtonSecondaryShadow,
  _p as ColorButtonSecondaryText,
  Mp as ColorButtonWarningActive,
  Ip as ColorButtonWarningBackground,
  Lp as ColorButtonWarningHover,
  Fp as ColorButtonWarningShadow,
  up as ColorError,
  ip as ColorFocusBackground,
  lp as ColorFocusText,
  hp as ColorFormBackground,
  fp as ColorFormBorder,
  Ai as ColorGrey1,
  Ei as ColorGrey2,
  Ri as ColorGrey3,
  Pi as ColorGrey4,
  Hi as ColorGrey5,
  sp as ColorLinkActive,
  rp as ColorLinkDefault,
  ap as ColorLinkHover,
  op as ColorLinkVisited,
  Ci as ColorPrimaryBlack,
  Si as ColorPrimaryBlue,
  Ti as ColorPrimaryDarkPink,
  ji as ColorPrimaryGreen,
  Ni as ColorPrimaryPurple,
  Di as ColorPrimaryRed,
  ki as ColorPrimaryWhite,
  $i as ColorPrimaryYellow,
  Fi as ColorSecondaryAquaGreen,
  Mi as ColorSecondaryOrange,
  Ii as ColorSecondaryPaleYellow,
  Bi as ColorSecondaryPink,
  Li as ColorSecondaryWarmYellow,
  Qh as ColorTextPrimary,
  np as ColorTextPrint,
  tp as ColorTextReverse,
  ep as ColorTextSecondary,
  pn as Column,
  im as ComponentBlur,
  Qp as ComponentBreadcrumbChevronMarginLeft,
  em as ComponentBreadcrumbChevronMarginRight,
  nm as ComponentBreadcrumbPaddingTopDesktop,
  tm as ComponentBreadcrumbPaddingTopMobile,
  Wp as ComponentButtonPaddingDesktopHorizontal,
  zp as ComponentButtonPaddingDesktopVertical,
  Hp as ComponentButtonPaddingMobileHorizontal,
  Pp as ComponentButtonPaddingMobileVertical,
  Op as ComponentButtonShadowSize,
  Kp as ComponentCardHeadingMargin,
  Xp as ComponentCardPaddingDesktop,
  qp as ComponentCardPaddingMobile,
  cm as ComponentDetails,
  dm as ComponentExpander,
  Vp as ComponentFormCheckboxLabelPadding,
  Yp as ComponentFormCheckboxSize,
  Up as ComponentFormInputMinHeight,
  Gp as ComponentFormInputPadding,
  lm as ComponentLink,
  um as ComponentPagination,
  Jp as ComponentPanelPaddingDesktop,
  Zp as ComponentPanelPaddingMobile,
  om as ComponentSpread,
  am as ComponentSummaryListCellPaddingHorizontal,
  rm as ComponentSummaryListCellPaddingVertical,
  sm as ComponentSummaryListRowMargin,
  so as Container,
  F0 as ContentsList,
  ll as DEFAULT_FONT_CONFIG,
  G0 as DashboardSummaryGrid,
  T0 as DateInput,
  Su as Details,
  ku as DoDontList,
  f0 as ElevationHigh,
  d0 as ElevationLow,
  u0 as ElevationMedium,
  c0 as ElevationNone,
  ss as ErrorMessage,
  N0 as ErrorSummary,
  Cu as Expander,
  nt as FRUTIGER_FONT_FILES,
  Ia as Fieldset,
  s0 as FocusOutlineOffset,
  o0 as FocusOutlineStyle,
  a0 as FocusOutlineWidth,
  l0 as FocusShadowButton,
  i0 as FocusShadowInput,
  Yn as FontFamilyBase,
  Vn as FontFamilyFallback,
  qn as FontFamilyPrint,
  Ta as FontLineHeightBase,
  Jn as FontSize14Mobile,
  er as FontSize14Print,
  Qn as FontSize14Tablet,
  tr as FontSize16Mobile,
  rr as FontSize16Print,
  nr as FontSize16Tablet,
  ar as FontSize19Mobile,
  or as FontSize19Print,
  sr as FontSize19Tablet,
  ir as FontSize22Mobile,
  cr as FontSize22Print,
  lr as FontSize22Tablet,
  dr as FontSize26Mobile,
  fr as FontSize26Print,
  ur as FontSize26Tablet,
  hr as FontSize36Mobile,
  mr as FontSize36Print,
  pr as FontSize36Tablet,
  gr as FontSize48Mobile,
  br as FontSize48Print,
  xr as FontSize48Tablet,
  Na as FontSizeBase,
  Kn as FontWeightBold,
  Zn as FontWeightLight,
  Xn as FontWeightNormal,
  fo as Footer,
  og as FormBorderRadius,
  ag as FormBorderWidthDefault,
  sg as FormBorderWidthError,
  tg as FormErrorTextDefault,
  ng as FormErrorTypographyWeight,
  rg as FormHintTextDefault,
  zm as FormInputBackgroundDefault,
  Om as FormInputBackgroundDisabled,
  Um as FormInputBackgroundError,
  Wm as FormInputBackgroundFocus,
  Gm as FormInputBorderDefault,
  qm as FormInputBorderDisabled,
  Vm as FormInputBorderError,
  Ym as FormInputBorderFocus,
  Xm as FormInputTextDefault,
  Zm as FormInputTextDisabled,
  Km as FormInputTextPlaceholder,
  Jm as FormLabelTextDefault,
  Qm as FormLabelTextRequired,
  eg as FormLabelTypographyWeight,
  Zi as FormSpacingCheckboxLabelPadding,
  Ki as FormSpacingCheckboxSize,
  Xi as FormSpacingInputMinHeight,
  qi as FormSpacingInputPadding,
  L0 as GanttChart,
  Vr as Grid,
  Bg as GridGutter,
  Ag as GridGutterHalf,
  Fg as GridPageWidth,
  uo as Header,
  I0 as HeaderSSR,
  Jl as HeaderSearch,
  uo as HeaderStatic,
  Nt as Heading,
  gt as HeadingsNhsukHeadingL,
  xt as HeadingsNhsukHeadingM,
  bt as HeadingsNhsukHeadingS,
  mt as HeadingsNhsukHeadingXl,
  yt as HeadingsNhsukHeadingXs,
  Ql as Hero,
  ro as Hint,
  O0 as Images,
  Da as Input,
  R0 as InsetText,
  $a as Label,
  Dg as LayoutColumnActions,
  Cg as LayoutColumnFull,
  jg as LayoutColumnHalf,
  Tg as LayoutColumnQuarter,
  Ng as LayoutColumnThird,
  kg as LayoutContainerMaxWidth,
  Gl as List,
  oo as MainWrapper,
  Bo as MedicationCard,
  ox as NHSBodyText,
  ix as NHSBodyTextLarge,
  lx as NHSBodyTextSmall,
  tx as NHSHeading1,
  nx as NHSHeading2,
  rx as NHSHeading3,
  ax as NHSHeading4,
  sx as NHSHeading5,
  cx as NHSLedeText,
  dx as NHSLedeTextSmall,
  $0 as NHSThemeProvider,
  kx as NHS_FALLBACK_FONT_STACK,
  Sx as NHS_FONT_STACK,
  wf as NavigationSplitView,
  K0 as PageTemplate,
  M0 as Pagination,
  _u as Panel,
  vt as ParagraphsBody,
  wt as ParagraphsBodyLarge,
  _t as ParagraphsBodySmall,
  St as ParagraphsLedeText,
  kt as ParagraphsLedeTextSmall,
  Mo as PatientCard,
  Sf as ProductRoadmap,
  v0 as Radios,
  w0 as RadiosServer,
  q0 as ResponsiveDataGrid,
  X0 as ResponsiveDataGridDemo,
  Wt as Row,
  Q0 as SPC,
  Th as SPCChart,
  Fn as Select,
  zl as SelectOption,
  Jg as ShadowButtonDefault,
  t0 as ShadowButtonFocus,
  Qg as ShadowButtonSecondary,
  e0 as ShadowButtonWarning,
  n0 as ShadowCardDefault,
  r0 as ShadowCardHover,
  Sg as SizeButtonMinHeightDesktop,
  _g as SizeButtonMinHeightMobile,
  pg as SizeFormControlLarge,
  hg as SizeFormControlMedium,
  fg as SizeFormControlSmall,
  vg as SizeFormInputWidth2xl,
  wg as SizeFormInputWidth3xl,
  bg as SizeFormInputWidthLg,
  xg as SizeFormInputWidthMd,
  gg as SizeFormInputWidthSm,
  yg as SizeFormInputWidthXl,
  mg as SizeFormInputWidthXs,
  dg as SizeIconExtraLarge,
  cg as SizeIconLarge,
  lg as SizeIconMedium,
  ug as SizeIconNhsDefault,
  ig as SizeIconSmall,
  $o as SkipLink,
  U0 as SlotMatrix,
  Y0 as SortStatusControl,
  Ji as Spacing0,
  Qi as Spacing1,
  el as Spacing2,
  tl as Spacing3,
  nl as Spacing4,
  rl as Spacing5,
  al as Spacing6,
  sl as Spacing7,
  ol as Spacing8,
  il as Spacing9,
  ia as SpacingResponsive0Mobile,
  la as SpacingResponsive0Tablet,
  ca as SpacingResponsive1Mobile,
  da as SpacingResponsive1Tablet,
  ua as SpacingResponsive2Mobile,
  fa as SpacingResponsive2Tablet,
  ha as SpacingResponsive3Mobile,
  pa as SpacingResponsive3Tablet,
  ma as SpacingResponsive4Mobile,
  ga as SpacingResponsive4Tablet,
  xa as SpacingResponsive5Mobile,
  ba as SpacingResponsive5Tablet,
  ya as SpacingResponsive6Mobile,
  va as SpacingResponsive6Tablet,
  wa as SpacingResponsive7Mobile,
  _a as SpacingResponsive7Tablet,
  Sa as SpacingResponsive8Mobile,
  ka as SpacingResponsive8Tablet,
  Ca as SpacingResponsive9Mobile,
  ja as SpacingResponsive9Tablet,
  _0 as SpacingUtilities,
  Xg as StateDisabledBackground,
  Kg as StateDisabledBorder,
  Zg as StateDisabledText,
  Eg as StateErrorBackground,
  Rg as StateErrorBorder,
  Pg as StateErrorText,
  Yg as StateInfoBackground,
  Vg as StateInfoBorder,
  qg as StateInfoText,
  Hg as StateSuccessBackground,
  zg as StateSuccessBorder,
  Wg as StateSuccessText,
  Og as StateWarningBackground,
  Ug as StateWarningBorder,
  Gg as StateWarningText,
  Iu as SummaryCard,
  P0 as SummaryList,
  H0 as Table,
  z0 as Tabs,
  et as Tag,
  ju as TaskList,
  Pl as Textarea,
  Z0 as TransactionalPageTemplate,
  Rh as TransitionButtonDefault,
  Ph as TransitionButtonShadow,
  zh as TransitionCardHover,
  Hh as TransitionInputFocus,
  Ao as VitalsCard,
  j0 as WIDTH_FRACTIONS,
  W0 as WarningCallout,
  zo as WidthContainer,
  k0 as WidthUtilities,
  Cx as checkFrutigerLoaded,
  Wa as createGenericTabsConfig,
  V0 as createTCHTabsConfig,
  wx as generateFrutigerFontFace,
  ex as getResponsiveStyles,
  S0 as getSpacingClass,
  C0 as getWidthClass,
  _x as preloadFrutigerFonts,
  Ou as tchDataConfig,
  fx as useColors,
  gx as useComponentSpacing,
  xx as useNHSHeadings,
  bx as useNHSParagraphs,
  D0 as useNHSTheme,
  yx as useNHSTypographySystem,
  vx as useNavigationSplitDrill,
  bf as useNavigationSplitUrlSync,
  Oo as useNhsFdpBreakpoints,
  mx as useResponsiveSpacing,
  J0 as useResponsiveValue,
  hx as useSpacing,
  ux as useTokens,
  px as useTypography
};
//# sourceMappingURL=index.esm.js.map
