import * as fe from "react";
import Ie, { useState as pe, useEffect as ye, useCallback as te, createElement as ta, useRef as xe, useMemo as _e, useContext as Es, createContext as Ms, forwardRef as mt, useImperativeHandle as na, useReducer as ra } from "react";
function $s(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jt = { exports: {} }, pt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr;
function As() {
  if (xr) return pt;
  xr = 1;
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
  return pt.Fragment = t, pt.jsx = r, pt.jsxs = r, pt;
}
var gt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function Hs() {
  return yr || (yr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === k ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case x:
          return "Fragment";
        case F:
          return "Profiler";
        case C:
          return "StrictMode";
        case $:
          return "Suspense";
        case b:
          return "SuspenseList";
        case S:
          return "Activity";
      }
      if (typeof j == "object")
        switch (typeof j.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), j.$$typeof) {
          case B:
            return "Portal";
          case L:
            return (j.displayName || "Context") + ".Provider";
          case I:
            return (j._context.displayName || "Context") + ".Consumer";
          case w:
            var q = j.render;
            return j = j.displayName, j || (j = q.displayName || q.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case M:
            return q = j.displayName || null, q !== null ? q : e(j.type) || "Memo";
          case D:
            q = j._payload, j = j._init;
            try {
              return e(j(q));
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
        var q = !1;
      } catch {
        q = !0;
      }
      if (q) {
        q = console;
        var H = q.error, O = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return H.call(
          q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), t(j);
      }
    }
    function a(j) {
      if (j === x) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === D)
        return "<...>";
      try {
        var q = e(j);
        return q ? "<" + q + ">" : "<...>";
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
      if (_.call(j, "key")) {
        var q = Object.getOwnPropertyDescriptor(j, "key").get;
        if (q && q.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function l(j, q) {
      function H() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          q
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: H,
        configurable: !0
      });
    }
    function c() {
      var j = e(this.type);
      return ee[j] || (ee[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function u(j, q, H, O, V, he, f, T) {
      return H = he.ref, j = {
        $$typeof: v,
        type: j,
        key: q,
        props: he,
        _owner: V
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(j, "ref", {
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
        value: f
      }), Object.defineProperty(j, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    }
    function d(j, q, H, O, V, he, f, T) {
      var G = q.children;
      if (G !== void 0)
        if (O)
          if (W(G)) {
            for (O = 0; O < G.length; O++)
              m(G[O]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(G);
      if (_.call(q, "key")) {
        G = e(j);
        var E = Object.keys(q).filter(function(U) {
          return U !== "key";
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
      if (G = null, H !== void 0 && (r(H), G = "" + H), i(q) && (r(q.key), G = "" + q.key), "key" in q) {
        H = {};
        for (var A in q)
          A !== "key" && (H[A] = q[A]);
      } else H = q;
      return G && l(
        H,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), u(
        j,
        G,
        he,
        V,
        o(),
        H,
        f,
        T
      );
    }
    function m(j) {
      typeof j == "object" && j !== null && j.$$typeof === v && j._store && (j._store.validated = 1);
    }
    var p = Ie, v = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), L = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), h = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, W = Array.isArray, se = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(j) {
        return j();
      }
    };
    var P, ee = {}, ne = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), ie = se(a(s)), le = {};
    gt.Fragment = x, gt.jsx = function(j, q, H, O, V) {
      var he = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        j,
        q,
        H,
        !1,
        O,
        V,
        he ? Error("react-stack-top-frame") : ne,
        he ? se(a(j)) : ie
      );
    }, gt.jsxs = function(j, q, H, O, V) {
      var he = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        j,
        q,
        H,
        !0,
        O,
        V,
        he ? Error("react-stack-top-frame") : ne,
        he ? se(a(j)) : ie
      );
    };
  }()), gt;
}
var _r;
function Ps() {
  return _r || (_r = 1, process.env.NODE_ENV === "production" ? jt.exports = As() : jt.exports = Hs()), jt.exports;
}
var n = Ps(), bn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var vr;
function zs() {
  return vr || (vr = 1, function(e) {
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
  }(bn)), bn.exports;
}
var Ws = zs();
const X = /* @__PURE__ */ $s(Ws), Xh = ({
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
}, er = ({
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
}, { forwardRef: Os, useCallback: et, useState: xn } = fe;
function Us(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [u, d] = xn(!1), [m, p] = xn(!1), [v, B] = xn(!1), x = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    o !== "default" ? `nhs-aria-button--${o}` : "",
    s ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), C = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", F = {
    ...u && { "data-pressed": "true" },
    ...m && { "data-hovered": "true" },
    ...v && { "data-focused": "true" },
    ...C && { "data-disabled": "true" }
  }, I = et(() => !C && d(!0), [C]), L = et(() => d(!1), []), w = et(() => !C && p(!0), [C]), $ = et(() => {
    p(!1), d(!1);
  }, []), b = et(() => B(!0), []), M = et(() => B(!1), []), D = et((h) => {
    h.key === " " && ("href" in c || h.currentTarget.getAttribute("role") === "button") && (h.preventDefault(), h.currentTarget.click());
  }, [c]), S = et((h) => {
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
          h.onClick?.(_), S(_);
        },
        onMouseDown: (_) => {
          h.onMouseDown?.(_), I();
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
          h.onFocus?.(_), b();
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
        k.onClick?.(h), S(h);
      },
      onMouseDown: (h) => {
        k.onMouseDown?.(h), I();
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
        k.onFocus?.(h), b();
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
const Te = Os(Us);
Te.displayName = "Button";
const aa = ({
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
}, Ke = ({
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
  ), m = (p) => {
    p.preventDefault(), p.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: d, ...u, children: [
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
}, Gs = ({
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
  onBlur: m,
  onFocus: p,
  attributes: v,
  ...B
}) => {
  const [x, C] = pe(a), F = r !== void 0, I = F ? r : x;
  ye(() => {
    F || C(a);
  }, [a, F]);
  const L = (D) => {
    const S = D.target.checked;
    F || C(S), d?.(S, D);
  }, w = i ? `${e}-hint` : void 0, $ = l ? `${e}-error` : void 0, b = [w, $].filter(Boolean).join(" ") || void 0, M = X(
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
        checked: I,
        disabled: o,
        onChange: L,
        onBlur: m,
        onFocus: p,
        "aria-describedby": b,
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
Gs.displayName = "Checkbox";
const tr = ({
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
  className: m,
  width: p = "full",
  inputMode: v,
  autoComplete: B,
  maxLength: x,
  minLength: C,
  pattern: F,
  step: I,
  min: L,
  max: w,
  showValueLabels: $ = !1,
  showCurrentValue: b = !1,
  valueLabels: M,
  onChange: D,
  onBlur: S,
  onFocus: k,
  onKeyDown: h,
  ..._
}) => {
  const [W, se] = pe(a || o || (r === "range" ? L || "0" : ""));
  ye(() => {
    a !== void 0 && se(a);
  }, [a]);
  const P = (le) => {
    se(le.target.value), D?.(le);
  }, ee = r === "range", ne = X(
    "nhsuk-input",
    {
      "nhsuk-input--error": u,
      "nhsuk-input--range": ee,
      [`nhsuk-input--width-${p}`]: p !== "full" && !ee
    },
    m
  ), ie = ee ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
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
          minLength: C,
          pattern: F,
          step: I,
          min: L,
          max: w,
          onChange: P,
          onBlur: S,
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
        minLength: C,
        pattern: F,
        step: I,
        min: L,
        max: w,
        onChange: P,
        onBlur: S,
        onFocus: k,
        onKeyDown: h,
        ..._
      }
    ),
    b && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      M?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: W })
    ] }) })
  ] }) : null;
  return ee ? ie : /* @__PURE__ */ n.jsx(
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
      minLength: C,
      pattern: F,
      step: I,
      min: L,
      max: w,
      onChange: D,
      onBlur: S,
      onFocus: k,
      onKeyDown: h,
      ..._
    }
  );
}, nr = ({
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
}, rr = ({
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
}, Vs = ({
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
  fieldsetAttributes: m,
  attributes: p,
  ...v
}) => {
  const [B, x] = pe(
    e.filter((D) => D.checked).map((D) => D.value)
  ), C = r || t, F = i ? `${C}-hint` : void 0, I = l ? `${C}-error` : void 0, L = [F, I].filter(Boolean).join(" ") || void 0, w = (D, S) => {
    let k;
    S ? k = [...B, D] : k = B.filter((h) => h !== D), x(k), d?.(k);
  }, $ = () => e.map((D, S) => {
    const k = `${C}-${S + 1}`, h = `${k}-conditional`, _ = B.includes(D.value), W = D.disabled || !1;
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
          onChange: (se) => w(D.value, se.target.checked),
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
            D.conditional.label && /* @__PURE__ */ n.jsx(nr, { htmlFor: D.conditional.id, children: D.conditional.label }),
            /* @__PURE__ */ n.jsx(tr, { ...D.conditional })
          ] }) : D.conditional
        }
      )
    ] }, D.value);
  }), b = X(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": u
    },
    c
  ), M = X("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: M, ...p, ...v, children: /* @__PURE__ */ n.jsxs(
    rr,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: L,
      ...m,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: F, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: I, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: b, children: $() })
      ]
    }
  ) });
};
Vs.displayName = "Checkboxes";
const Ys = ({
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
  rows: m = 5,
  cols: p,
  maxLength: v,
  minLength: B,
  wrap: x = "soft",
  resize: C = "vertical",
  autoComplete: F,
  spellCheck: I,
  onChange: L,
  onBlur: w,
  onFocus: $,
  onKeyDown: b,
  ...M
}) => {
  const D = X(
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
      rows: m,
      cols: p,
      maxLength: v,
      minLength: B,
      wrap: x,
      autoComplete: F,
      spellCheck: I,
      onChange: L,
      onBlur: w,
      onFocus: $,
      onKeyDown: b,
      ...M
    }
  );
}, sa = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = X("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, id: e, ...a, children: r });
}, Qh = ({
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
  ...m
}) => {
  const [p, v] = pe(s), [B, x] = pe(0), [C, F] = pe(!1), [I, L] = pe(!1), w = te((k) => r ? k.trim() === "" ? 0 : k.trim().split(/\s+/).length : k.length, [r]);
  ye(() => {
    const k = w(p), h = t || r || 0, _ = h - k, W = Math.floor(h * (a / 100));
    x(_), F(k > h), L(k >= W || k > h), u && u(k, _);
  }, [p, t, r, a, w, u]);
  const $ = (k) => {
    const h = k.target.value;
    v(h), d && d(k);
  }, b = () => {
    const k = t || r || 0, h = r ? "word" : "character", _ = r ? "words" : "characters";
    if (!I)
      return `You can enter up to ${k} ${k === 1 ? h : _}`;
    if (C) {
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
      "nhsuk-character-count__message--disabled": !I,
      "nhsuk-error-message": C
    },
    c?.classes
  ), S = X(
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
          Ys,
          {
            id: e,
            name: o,
            value: p,
            rows: i,
            className: S,
            onChange: $,
            "aria-describedby": `${e}-info`,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          sa,
          {
            id: `${e}-info`,
            className: D,
            children: b()
          }
        )
      ]
    }
  );
}, qs = ({
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
}, Ks = ({
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
  autoComplete: m,
  options: p,
  children: v,
  onChange: B,
  onBlur: x,
  onFocus: C,
  ...F
}) => {
  const I = X(
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
      className: I,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      disabled: o,
      required: s,
      "aria-describedby": l,
      multiple: u,
      size: d,
      autoComplete: m,
      onChange: B,
      onBlur: x,
      onFocus: C,
      ...F,
      children: v || L()
    }
  );
}, oa = Ks;
oa.Option = qs;
const ef = ({
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
  onFocus: m,
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
  ), C = (F) => {
    const I = F.target.value;
    B(I), u && u(F);
  };
  return /* @__PURE__ */ n.jsx(rr, { children: /* @__PURE__ */ n.jsx("div", { className: x, ...p, children: c.map((F, I) => {
    const L = `${e}-${I}`, w = F.conditional ? `${L}-conditional` : void 0, $ = v === F.value;
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
          onChange: C,
          onBlur: d,
          onFocus: m
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
            F.conditional.label && /* @__PURE__ */ n.jsx(nr, { htmlFor: F.conditional.id, children: F.conditional.label }),
            /* @__PURE__ */ n.jsx(tr, { ...F.conditional })
          ] }) : F.conditional
        }
      )
    ] }, F.value);
  }) }) });
}, ia = ({
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
}, Bt = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = X("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: e });
}, ar = ({
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
}, Zs = ({
  children: e,
  className: t,
  ...r
}) => {
  const o = Ie.Children.toArray(e)[0], s = Ie.isValidElement(o) && (o.type === Bt || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(ia, { className: t, ...r, children: s ? e : /* @__PURE__ */ n.jsx(Bt, { children: e }) });
}, Js = ({
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
}, Xs = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = X("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, Qs = Js;
Qs.Item = Xs;
const tf = ({
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
}, nf = {
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
}, rf = ({
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
}, af = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, sf = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], la = ({
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
}, Ze = ({
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
  ), m = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), p = `h${u}`, v = i ? { ...l.style, marginBottom: i } : l.style;
  return ta(
    p,
    { className: d, ...l, style: v },
    m
  );
}, kr = ({
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
}, of = ({
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
  ), d = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, m = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, p = (v) => {
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
          !i && (r || a) && /* @__PURE__ */ n.jsx("p", { children: m() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((v, B) => /* @__PURE__ */ n.jsx("li", { children: p(v) }, B)) })
        ] })
      ]
    }
  );
}, lf = ({
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
  const [d, m] = pe(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [p, v] = pe({}), B = (P) => P % 4 === 0 && P % 100 !== 0 || P % 400 === 0, x = (P, ee) => {
    const ne = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return P === 2 && B(ee) ? 29 : ne[P - 1];
  }, C = (P, ee, ne) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Day must be a number";
    const ie = parseInt(P, 10);
    if (ie < 1 || ie > 31) return "Day must be between 1 and 31";
    if (ee && ne) {
      const le = parseInt(ee, 10), j = parseInt(ne, 10);
      if (!isNaN(le) && !isNaN(j) && le >= 1 && le <= 12) {
        const q = x(le, j);
        if (ie > q)
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
          ][le - 1]} ${j} only has ${q} days`;
      }
    }
  }, F = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Month must be a number";
    const ee = parseInt(P, 10);
    if (ee < 1 || ee > 12) return "Month must be between 1 and 12";
  }, I = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Year must be a number";
    const ee = parseInt(P, 10), ne = (/* @__PURE__ */ new Date()).getFullYear();
    if (ee < 1900 || ee > ne + 10)
      return `Year must be between 1900 and ${ne + 10}`;
  }, L = (P, ee, ne) => {
    if (!P || !ee || !ne) return;
    const ie = parseInt(P, 10), le = parseInt(ee, 10), j = parseInt(ne, 10);
    if (isNaN(ie) || isNaN(le) || isNaN(j) || le < 1 || le > 12 || j < 1900) return;
    const q = x(le, j);
    ie < 1 || ie > q;
  }, w = te((P, ee) => {
    const ne = {
      ...d,
      [P]: ee
    };
    m(ne), c && c(ne);
  }, [d, c]), $ = te((P) => {
    const ee = d[P];
    let ne;
    if (P === "day")
      ne = C(ee, d.month, d.year);
    else if (P === "month") {
      if (ne = F(ee), !ne && d.day) {
        const ie = C(d.day, ee, d.year);
        v((le) => ({
          ...le,
          day: ie
        }));
      }
    } else if (P === "year" && (ne = I(ee), !ne && d.day && d.month)) {
      const ie = C(d.day, d.month, ee);
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
        P === "day" ? ee : d.day,
        P === "month" ? ee : d.month,
        P === "year" ? ee : d.year
      );
      ie && v((le) => ({
        ...le,
        day: ie
      }));
    }
  }, [d, C, F, I, L]), b = _e(() => [
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
  ], []), M = r || b;
  let D = s?.describedBy || "";
  const S = i ? `${e}-hint` : "", k = l ? `${e}-error` : "";
  S && (D = D ? `${D} ${S}` : S), k && (D = D ? `${D} ${k}` : k);
  const h = Object.values(p).some((P) => P), _ = X(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || h
    }
  ), W = X(
    "nhsuk-date-input",
    t
  ), se = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      sa,
      {
        id: S,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      kr,
      {
        id: k,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(p).map(
      ([P, ee]) => ee ? /* @__PURE__ */ n.jsxs(
        kr,
        {
          id: `${e}-${P}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            ee
          ]
        },
        `${P}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: W, id: e, "data-testid": "date-input", ...u, children: M.map((P) => {
      const ee = P.id || `${e}-${P.name}`, ne = a ? `${a}[${P.name}]` : P.name, ie = P.label || P.name.charAt(0).toUpperCase() + P.name.slice(1), le = p[P.name], j = d[P.name] || "";
      let q = D;
      if (le) {
        const H = `${e}-${P.name}-error`;
        q = q ? `${q} ${H}` : H;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          nr,
          {
            htmlFor: ee,
            className: "nhsuk-date-input__label",
            children: ie
          }
        ),
        /* @__PURE__ */ n.jsx(
          tr,
          {
            id: ee,
            name: ne,
            value: j,
            className: X("nhsuk-date-input__input", P.classes, {
              "nhsuk-input--error": le
            }),
            inputMode: P.inputmode,
            autoComplete: P.autocomplete,
            pattern: P.pattern,
            "aria-describedby": q || void 0,
            hasError: !!le,
            onChange: (H) => w(P.name, H.target.value),
            onBlur: () => $(P.name)
          }
        )
      ] }, P.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: _, children: s ? /* @__PURE__ */ n.jsx(
    rr,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: D || void 0,
      children: se()
    }
  ) : se() });
}, ca = {
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
}, da = Ms(ca), eo = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...ca, ...t };
  return /* @__PURE__ */ n.jsx(da.Provider, { value: r, children: e });
}, cf = () => {
  const e = Es(da);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function to() {
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
function no() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = to(), document.head.appendChild(e);
}
const df = ({ children: e, theme: t }) => (ye(() => {
  no();
}, []), /* @__PURE__ */ n.jsx(eo, { theme: t, children: e })), ua = ({
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
  isLoading: m = !1,
  showResults: p = !1,
  results: v = [],
  formAttributes: B = {},
  inputAttributes: x = {},
  buttonAttributes: C = {},
  preventDefaultSubmit: F = !1,
  debounceMs: I = 300,
  minQueryLength: L = 1
}) => {
  const [w, $] = pe(""), [b, M] = pe(!1), D = xe(void 0), S = xe(null), k = xe(null), h = e === "controlled" && o !== void 0, _ = h ? o : w, W = te((O) => {
    D.current && clearTimeout(D.current), D.current = setTimeout(() => {
      d.onChange && O.length >= L && d.onChange(O);
    }, I);
  }, [d.onChange, I, L]), se = te((O) => {
    const V = O.target.value;
    h || $(V), e !== "form" && W(V);
  }, [h, e, W]), P = te((O) => {
    const V = _.trim(), he = {
      query: V,
      timestamp: Date.now(),
      formData: new FormData(O.currentTarget)
    };
    e === "controlled" || e === "hybrid" && F ? (O.preventDefault(), d.onSearch && V.length >= L && d.onSearch(he)) : e === "hybrid" && d.onSearch && V.length >= L && d.onSearch(he);
  }, [e, _, d.onSearch, F, L]), ee = te(() => {
    M(!0), d.onFocus?.();
  }, [d.onFocus]), ne = te(() => {
    M(!1), d.onBlur?.();
  }, [d.onBlur]), ie = te(() => {
    h || $(""), d.onClear?.(), k.current?.focus();
  }, [h, d.onClear]);
  ye(() => () => {
    D.current && clearTimeout(D.current);
  }, []);
  const le = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: X("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": m
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
  ), q = () => !_ || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ie,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), H = () => !p || !v.length || !b ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: v.map((O) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: O.href ? /* @__PURE__ */ n.jsxs("a", { href: O.href, className: "nhsuk-header__search-result-link", children: [
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
    "nhsuk-header__search--loading": m,
    "nhsuk-header__search--focused": b,
    "nhsuk-header__search--has-results": p && v.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: S,
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
                onChange: se,
                onFocus: ee,
                onBlur: ne,
                disabled: u || m,
                "aria-expanded": p && v.length > 0,
                "aria-haspopup": "listbox",
                ...x
              }
            ),
            q()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: u || m || e !== "form" && _.length < L,
              ...C,
              children: [
                m ? j() : le(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: m ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    H()
  ] });
}, ha = ({
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
  const [m, p] = pe(!1), [v, B] = pe(!1), [x, C] = pe(i?.items?.length || 0), [F, I] = pe(!1), [L, w] = pe(!1), [$, b] = pe(!1), M = xe(null), D = xe(null), S = xe(!1), k = xe(null), h = xe([]), _ = xe(null);
  ye(() => {
    typeof window > "u" || (b(!0), I(!0));
  }, []), ye(() => {
    if (!$ || !i?.items?.length) return;
    h.current = i.items;
    const f = setTimeout(() => {
      M.current && D.current && ie();
    }, 100);
    return () => clearTimeout(f);
  }, [$, i?.items]);
  const W = r.href && !t.href || r.href && r.href === t.href, se = W ? r.href : t.href, P = X(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), ee = X(
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
  ), ie = te(() => {
    if (!(typeof window > "u" || S.current) && !(!M.current || !D.current || !h.current.length)) {
      S.current = !0;
      try {
        const f = D.current, T = M.current, G = f.offsetWidth, E = T.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (E.length === 0 || G === 0) {
          S.current = !1;
          return;
        }
        const A = window.innerWidth < 768, U = A ? 16 : 32, N = U * 2, ue = G - N, Q = Array.from(E).map((g) => g.offsetWidth), re = Q.reduce((g, R) => g + R, 0), J = A ? 80 : 100, y = _.current !== null && _.current !== A;
        if (_.current = A, console.log("Overflow check:", {
          containerWidth: G,
          availableContainerWidth: ue,
          totalGutters: N,
          gutterSize: U,
          totalWidth: re,
          mobile: A,
          breakpointChanged: y,
          itemCount: Q.length,
          measurements: Q
        }), re <= ue)
          B(!1), C(h.current.length);
        else {
          const g = ue - J;
          let R = 0, z = 0;
          for (let K = 0; K < Q.length; K++) {
            const oe = z + Q[K];
            if (oe <= g)
              z = oe, R = K + 1;
            else
              break;
          }
          R = Math.max(1, R);
          const Y = R < Q.length;
          B(Y), C(R);
        }
        S.current = !1;
      } catch (f) {
        console.error("Overflow detection error:", f), B(!1), C(h.current.length), S.current = !1;
      }
    }
  }, []);
  ye(() => {
    if (typeof document > "u") return;
    const f = (T) => {
      T.key === "Escape" && m && p(!1);
    };
    if (m)
      return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [m]), ye(() => {
    if (typeof window > "u" || !$) return;
    const f = () => {
      m && (p(!1), w(!1)), k.current && clearTimeout(k.current), k.current = setTimeout(() => {
        h.current.length > 0 && ie();
      }, 250);
    };
    let T = null, G = null;
    return window.matchMedia && (T = window.matchMedia("(max-width: 767px)"), G = () => {
      console.log("Breakpoint changed:", T?.matches ? "mobile" : "desktop"), h.current.length > 0 && setTimeout(() => ie(), 50);
    }, T.addEventListener ? T.addEventListener("change", G) : T.addListener(G)), window.addEventListener("resize", f), () => {
      window.removeEventListener("resize", f), T && G && (T.removeEventListener ? T.removeEventListener("change", G) : T.removeListener(G)), k.current && clearTimeout(k.current);
    };
  }, [$, m, ie]), ye(() => {
    if (typeof document > "u") return;
    const f = (T) => {
      const G = T.target, E = M.current?.contains(G);
      m && !E && p(!1);
    };
    if (m)
      return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [m]);
  const le = (f) => {
    f && (f.preventDefault(), f.stopPropagation());
    const T = !m;
    p(T), T ? setTimeout(() => {
      w(!0);
    }, 50) : w(!1);
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
  ), q = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : j(), H = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, O = (f, T) => f ? T ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: T, children: f }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: f }) : null, V = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), he = (f) => {
    if (f.active || f.current) {
      const T = f.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: f.html } }) : f.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: T });
    }
    return f.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: f.html } }) : f.text;
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
        /* @__PURE__ */ n.jsxs("div", { className: ee, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            se ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: se, children: [
              q(),
              H(),
              W && O(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              q(),
              H(),
              W && O(r.text)
            ] }),
            r.text && !W && O(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx(ua, { ...o }),
          /* @__PURE__ */ n.jsx(
            er,
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
                  ($ ? i.items.slice(0, x) : i.items).map((f, T) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: X(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": f.active || f.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !$ && T >= 4
                          // Mark items that would be hidden on client
                        },
                        f.className
                      ),
                      ...f.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: f.href,
                          ...f.active || f.current ? {
                            "aria-current": f.current ? "page" : "true"
                          } : {},
                          children: he(f)
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
                            V()
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
        $ && i && i.items && i.items.length > 0 && m && L && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !L,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(x).map((f, T) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: X(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": f.active || f.current
                  }
                ),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: f.href,
                    ...f.active || f.current ? {
                      "aria-current": f.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      p(!1), w(!1);
                    },
                    children: he(f)
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
}, uf = ({
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
  const m = r.href && !t.href || r.href && r.href === t.href, p = m ? r.href : t.href, v = X(
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
  ), F = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : C(), I = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, L = (b, M) => b ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: b }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: b }) : null, w = () => !i?.items || i.items.length === 0 ? null : i.items.map((b, M) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: b.href,
          ...b.attributes || {},
          children: b.text
        }
      )
    },
    b.href || M
  )), $ = () => o ? /* @__PURE__ */ n.jsx(ua, { ...o }) : null;
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
              I(),
              m && L(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              F(),
              I(),
              m && L(r.text)
            ] }),
            r.text && !m && L(r.text, r.href)
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
            er,
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
}, hf = ({
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
  ...m
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
  ), C = X(
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
  ), I = () => t.src ? /* @__PURE__ */ n.jsx(
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
  ] }) : null, w = (b, M) => b ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: b }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: b }) : null, $ = (b) => {
    if (b.active || b.current) {
      const M = b.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: M });
    }
    return b.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: B,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...u,
      ...m,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: x, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            v ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: v, children: [
              I(),
              L(),
              p && w(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              I(),
              L(),
              p && w(r.text)
            ] }),
            r.text && !p && w(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            er,
            {
              ...s,
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
                className: X(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, d).map((b, M) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: X(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": b.active || b.current
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
                          children: $(b)
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(d).map((b, M) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: X(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": b.active || b.current
                          }
                        ),
                        children: /* @__PURE__ */ n.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: b.href,
                            ...b.active || b.current ? {
                              "aria-current": b.current ? "page" : "true"
                            } : {},
                            children: $(b)
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
}, ro = ({
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
  ].filter(Boolean).join(" "), m = [
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
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: v && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          B(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && v && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          B(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
ro.displayName = "Hero";
const fa = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {}
}) => {
  const c = (d, m = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: X("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": m
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
function Ft(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ao(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function sr(e) {
  let t, r, a;
  e.length !== 2 ? (t = Ft, r = (l, c) => Ft(e(l), c), a = (l, c) => e(l) - c) : (t = e === Ft || e === ao ? e : so, r = e, a = e);
  function o(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const m = u + d >>> 1;
        r(l[m], c) < 0 ? u = m + 1 : d = m;
      } while (u < d);
    }
    return u;
  }
  function s(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const m = u + d >>> 1;
        r(l[m], c) <= 0 ? u = m + 1 : d = m;
      } while (u < d);
    }
    return u;
  }
  function i(l, c, u = 0, d = l.length) {
    const m = o(l, c, u, d - 1);
    return m > u && a(l[m - 1], c) > -a(l[m], c) ? m - 1 : m;
  }
  return { left: o, center: i, right: s };
}
function so() {
  return 0;
}
function oo(e) {
  return e === null ? NaN : +e;
}
const io = sr(Ft), lo = io.right;
sr(oo).center;
const co = Math.sqrt(50), uo = Math.sqrt(10), ho = Math.sqrt(2);
function ma(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= co ? 10 : s >= uo ? 5 : s >= ho ? 2 : 1;
  let l, c, u;
  return o < 0 ? (u = Math.pow(10, -o) / i, l = Math.round(e * u), c = Math.round(t * u), l / u < e && ++l, c / u > t && --c, u = -u) : (u = Math.pow(10, o) * i, l = Math.round(e / u), c = Math.round(t / u), l * u < e && ++l, c * u > t && --c), c < l && 0.5 <= r && r < 2 ? ma(e, t, r * 2) : [l, c, u];
}
function wr(e, t, r) {
  return t = +t, e = +e, r = +r, ma(e, t, r)[2];
}
function Sr(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? wr(t, e, r) : wr(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function fo(e, t) {
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
function or(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function pa(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function wt() {
}
var _t = 0.7, It = 1 / _t, ut = "\\s*([+-]?\\d+)\\s*", vt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Me = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", mo = /^#([0-9a-f]{3,8})$/, po = new RegExp(`^rgb\\(${ut},${ut},${ut}\\)$`), go = new RegExp(`^rgb\\(${Me},${Me},${Me}\\)$`), bo = new RegExp(`^rgba\\(${ut},${ut},${ut},${vt}\\)$`), xo = new RegExp(`^rgba\\(${Me},${Me},${Me},${vt}\\)$`), yo = new RegExp(`^hsl\\(${vt},${Me},${Me}\\)$`), _o = new RegExp(`^hsla\\(${vt},${Me},${Me},${vt}\\)$`), Cr = {
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
or(wt, kt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: jr,
  // Deprecated! Use color.formatHex.
  formatHex: jr,
  formatHex8: vo,
  formatHsl: ko,
  formatRgb: Nr,
  toString: Nr
});
function jr() {
  return this.rgb().formatHex();
}
function vo() {
  return this.rgb().formatHex8();
}
function ko() {
  return ga(this).formatHsl();
}
function Nr() {
  return this.rgb().formatRgb();
}
function kt(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = mo.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Tr(t) : r === 3 ? new Ne(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Nt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Nt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = po.exec(e)) ? new Ne(t[1], t[2], t[3], 1) : (t = go.exec(e)) ? new Ne(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = bo.exec(e)) ? Nt(t[1], t[2], t[3], t[4]) : (t = xo.exec(e)) ? Nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = yo.exec(e)) ? Br(t[1], t[2] / 100, t[3] / 100, 1) : (t = _o.exec(e)) ? Br(t[1], t[2] / 100, t[3] / 100, t[4]) : Cr.hasOwnProperty(e) ? Tr(Cr[e]) : e === "transparent" ? new Ne(NaN, NaN, NaN, 0) : null;
}
function Tr(e) {
  return new Ne(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Nt(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new Ne(e, t, r, a);
}
function wo(e) {
  return e instanceof wt || (e = kt(e)), e ? (e = e.rgb(), new Ne(e.r, e.g, e.b, e.opacity)) : new Ne();
}
function Nn(e, t, r, a) {
  return arguments.length === 1 ? wo(e) : new Ne(e, t, r, a ?? 1);
}
function Ne(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
or(Ne, Nn, pa(wt, {
  brighter(e) {
    return e = e == null ? It : Math.pow(It, e), new Ne(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _t : Math.pow(_t, e), new Ne(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ne(rt(this.r), rt(this.g), rt(this.b), Rt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Dr,
  // Deprecated! Use color.formatHex.
  formatHex: Dr,
  formatHex8: So,
  formatRgb: Fr,
  toString: Fr
}));
function Dr() {
  return `#${nt(this.r)}${nt(this.g)}${nt(this.b)}`;
}
function So() {
  return `#${nt(this.r)}${nt(this.g)}${nt(this.b)}${nt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Fr() {
  const e = Rt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${rt(this.r)}, ${rt(this.g)}, ${rt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Rt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function rt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function nt(e) {
  return e = rt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Br(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Re(e, t, r, a);
}
function ga(e) {
  if (e instanceof Re) return new Re(e.h, e.s, e.l, e.opacity);
  if (e instanceof wt || (e = kt(e)), !e) return new Re();
  if (e instanceof Re) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Re(i, l, c, e.opacity);
}
function Co(e, t, r, a) {
  return arguments.length === 1 ? ga(e) : new Re(e, t, r, a ?? 1);
}
function Re(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
or(Re, Co, pa(wt, {
  brighter(e) {
    return e = e == null ? It : Math.pow(It, e), new Re(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _t : Math.pow(_t, e), new Re(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new Ne(
      yn(e >= 240 ? e - 240 : e + 120, o, a),
      yn(e, o, a),
      yn(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Re(Ir(this.h), Tt(this.s), Tt(this.l), Rt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Rt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ir(this.h)}, ${Tt(this.s) * 100}%, ${Tt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ir(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Tt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function yn(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ir = (e) => () => e;
function jo(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function No(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function To(e) {
  return (e = +e) == 1 ? ba : function(t, r) {
    return r - t ? No(t, r, e) : ir(isNaN(t) ? r : t);
  };
}
function ba(e, t) {
  var r = t - e;
  return r ? jo(e, r) : ir(isNaN(e) ? t : e);
}
const Rr = function e(t) {
  var r = To(t);
  function a(o, s) {
    var i = r((o = Nn(o)).r, (s = Nn(s)).r), l = r(o.g, s.g), c = r(o.b, s.b), u = ba(o.opacity, s.opacity);
    return function(d) {
      return o.r = i(d), o.g = l(d), o.b = c(d), o.opacity = u(d), o + "";
    };
  }
  return a.gamma = e, a;
}(1);
function Do(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Fo(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Bo(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = lr(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Io(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function Lt(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Ro(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = lr(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var Tn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, _n = new RegExp(Tn.source, "g");
function Lo(e) {
  return function() {
    return e;
  };
}
function Eo(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Mo(e, t) {
  var r = Tn.lastIndex = _n.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = Tn.exec(e)) && (o = _n.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: Lt(a, o) })), r = _n.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? Eo(c[0].x) : Lo(t) : (t = c.length, function(u) {
    for (var d = 0, m; d < t; ++d) l[(m = c[d]).i] = m.x(u);
    return l.join("");
  });
}
function lr(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? ir(t) : (r === "number" ? Lt : r === "string" ? (a = kt(t)) ? (t = a, Rr) : Mo : t instanceof kt ? Rr : t instanceof Date ? Io : Fo(t) ? Do : Array.isArray(t) ? Bo : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Ro : Lt)(e, t);
}
function $o(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Ao(e) {
  return function() {
    return e;
  };
}
function Ho(e) {
  return +e;
}
var Lr = [0, 1];
function ct(e) {
  return e;
}
function Dn(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Ao(isNaN(t) ? NaN : 0.5);
}
function Po(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function zo(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = Dn(o, a), s = r(i, s)) : (a = Dn(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function Wo(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = Dn(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = lo(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function Oo(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Uo() {
  var e = Lr, t = Lr, r = lr, a, o, s, i = ct, l, c, u;
  function d() {
    var p = Math.min(e.length, t.length);
    return i !== ct && (i = Po(e[0], e[p - 1])), l = p > 2 ? Wo : zo, c = u = null, m;
  }
  function m(p) {
    return p == null || isNaN(p = +p) ? s : (c || (c = l(e.map(a), t, r)))(a(i(p)));
  }
  return m.invert = function(p) {
    return i(o((u || (u = l(t, e.map(a), Lt)))(p)));
  }, m.domain = function(p) {
    return arguments.length ? (e = Array.from(p, Ho), d()) : e.slice();
  }, m.range = function(p) {
    return arguments.length ? (t = Array.from(p), d()) : t.slice();
  }, m.rangeRound = function(p) {
    return t = Array.from(p), r = $o, d();
  }, m.clamp = function(p) {
    return arguments.length ? (i = p ? !0 : ct, d()) : i !== ct;
  }, m.interpolate = function(p) {
    return arguments.length ? (r = p, d()) : r;
  }, m.unknown = function(p) {
    return arguments.length ? (s = p, m) : s;
  }, function(p, v) {
    return a = p, o = v, d();
  };
}
function Go() {
  return Uo()(ct, ct);
}
function Vo(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const vn = /* @__PURE__ */ new Date(), kn = /* @__PURE__ */ new Date();
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
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (u < s && s < i);
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
  }), r && (o.count = (s, i) => (vn.setTime(+s), kn.setTime(+i), e(vn), e(kn), Math.floor(r(vn, kn))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const Et = Se(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Et.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Se((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Et);
Et.range;
const Ye = 1e3, Be = Ye * 60, qe = Be * 60, Je = qe * 24, cr = Je * 7, Er = Je * 30, wn = Je * 365, dt = Se((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ye);
}, (e, t) => (t - e) / Ye, (e) => e.getUTCSeconds());
dt.range;
const dr = Se((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ye);
}, (e, t) => {
  e.setTime(+e + t * Be);
}, (e, t) => (t - e) / Be, (e) => e.getMinutes());
dr.range;
const Yo = Se((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Be);
}, (e, t) => (t - e) / Be, (e) => e.getUTCMinutes());
Yo.range;
const ur = Se((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ye - e.getMinutes() * Be);
}, (e, t) => {
  e.setTime(+e + t * qe);
}, (e, t) => (t - e) / qe, (e) => e.getHours());
ur.range;
const qo = Se((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * qe);
}, (e, t) => (t - e) / qe, (e) => e.getUTCHours());
qo.range;
const St = Se(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Be) / Je,
  (e) => e.getDate() - 1
);
St.range;
const hr = Se((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Je, (e) => e.getUTCDate() - 1);
hr.range;
const Ko = Se((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Je, (e) => Math.floor(e / Je));
Ko.range;
function st(e) {
  return Se((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Be) / cr);
}
const fn = st(0), Mt = st(1), Zo = st(2), Jo = st(3), ht = st(4), Xo = st(5), Qo = st(6);
fn.range;
Mt.range;
Zo.range;
Jo.range;
ht.range;
Xo.range;
Qo.range;
function ot(e) {
  return Se((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / cr);
}
const xa = ot(0), $t = ot(1), ei = ot(2), ti = ot(3), ft = ot(4), ni = ot(5), ri = ot(6);
xa.range;
$t.range;
ei.range;
ti.range;
ft.range;
ni.range;
ri.range;
const fr = Se((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
fr.range;
const ai = Se((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
ai.range;
const Xe = Se((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Xe.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Se((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Xe.range;
const at = Se((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
at.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Se((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
at.range;
function si(e, t, r, a, o, s) {
  const i = [
    [dt, 1, Ye],
    [dt, 5, 5 * Ye],
    [dt, 15, 15 * Ye],
    [dt, 30, 30 * Ye],
    [s, 1, Be],
    [s, 5, 5 * Be],
    [s, 15, 15 * Be],
    [s, 30, 30 * Be],
    [o, 1, qe],
    [o, 3, 3 * qe],
    [o, 6, 6 * qe],
    [o, 12, 12 * qe],
    [a, 1, Je],
    [a, 2, 2 * Je],
    [r, 1, cr],
    [t, 1, Er],
    [t, 3, 3 * Er],
    [e, 1, wn]
  ];
  function l(u, d, m) {
    const p = d < u;
    p && ([u, d] = [d, u]);
    const v = m && typeof m.range == "function" ? m : c(u, d, m), B = v ? v.range(u, +d + 1) : [];
    return p ? B.reverse() : B;
  }
  function c(u, d, m) {
    const p = Math.abs(d - u) / m, v = sr(([, , C]) => C).right(i, p);
    if (v === i.length) return e.every(Sr(u / wn, d / wn, m));
    if (v === 0) return Et.every(Math.max(Sr(u, d, m), 1));
    const [B, x] = i[p / i[v - 1][2] < i[v][2] / p ? v - 1 : v];
    return B.every(x);
  }
  return [l, c];
}
const [oi, ii] = si(Xe, fr, fn, St, ur, dr);
function Sn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Cn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function bt(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function li(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, u = xt(o), d = yt(o), m = xt(s), p = yt(s), v = xt(i), B = yt(i), x = xt(l), C = yt(l), F = xt(c), I = yt(c), L = {
    a: ne,
    A: ie,
    b: le,
    B: j,
    c: null,
    d: zr,
    e: zr,
    f: Bi,
    g: zi,
    G: Oi,
    H: Ti,
    I: Di,
    j: Fi,
    L: ya,
    m: Ii,
    M: Ri,
    p: q,
    q: H,
    Q: Ur,
    s: Gr,
    S: Li,
    u: Ei,
    U: Mi,
    V: $i,
    w: Ai,
    W: Hi,
    x: null,
    X: null,
    y: Pi,
    Y: Wi,
    Z: Ui,
    "%": Or
  }, w = {
    a: O,
    A: V,
    b: he,
    B: f,
    c: null,
    d: Wr,
    e: Wr,
    f: qi,
    g: al,
    G: ol,
    H: Gi,
    I: Vi,
    j: Yi,
    L: va,
    m: Ki,
    M: Zi,
    p: T,
    q: G,
    Q: Ur,
    s: Gr,
    S: Ji,
    u: Xi,
    U: Qi,
    V: el,
    w: tl,
    W: nl,
    x: null,
    X: null,
    y: rl,
    Y: sl,
    Z: il,
    "%": Or
  }, $ = {
    a: k,
    A: h,
    b: _,
    B: W,
    c: se,
    d: Hr,
    e: Hr,
    f: Si,
    g: Ar,
    G: $r,
    H: Pr,
    I: Pr,
    j: _i,
    L: wi,
    m: yi,
    M: vi,
    p: S,
    q: xi,
    Q: ji,
    s: Ni,
    S: ki,
    u: fi,
    U: mi,
    V: pi,
    w: hi,
    W: gi,
    x: P,
    X: ee,
    y: Ar,
    Y: $r,
    Z: bi,
    "%": Ci
  };
  L.x = b(r, L), L.X = b(a, L), L.c = b(t, L), w.x = b(r, w), w.X = b(a, w), w.c = b(t, w);
  function b(E, A) {
    return function(U) {
      var N = [], ue = -1, Q = 0, re = E.length, J, y, g;
      for (U instanceof Date || (U = /* @__PURE__ */ new Date(+U)); ++ue < re; )
        E.charCodeAt(ue) === 37 && (N.push(E.slice(Q, ue)), (y = Mr[J = E.charAt(++ue)]) != null ? J = E.charAt(++ue) : y = J === "e" ? " " : "0", (g = A[J]) && (J = g(U, y)), N.push(J), Q = ue + 1);
      return N.push(E.slice(Q, ue)), N.join("");
    };
  }
  function M(E, A) {
    return function(U) {
      var N = bt(1900, void 0, 1), ue = D(N, E, U += "", 0), Q, re;
      if (ue != U.length) return null;
      if ("Q" in N) return new Date(N.Q);
      if ("s" in N) return new Date(N.s * 1e3 + ("L" in N ? N.L : 0));
      if (A && !("Z" in N) && (N.Z = 0), "p" in N && (N.H = N.H % 12 + N.p * 12), N.m === void 0 && (N.m = "q" in N ? N.q : 0), "V" in N) {
        if (N.V < 1 || N.V > 53) return null;
        "w" in N || (N.w = 1), "Z" in N ? (Q = Cn(bt(N.y, 0, 1)), re = Q.getUTCDay(), Q = re > 4 || re === 0 ? $t.ceil(Q) : $t(Q), Q = hr.offset(Q, (N.V - 1) * 7), N.y = Q.getUTCFullYear(), N.m = Q.getUTCMonth(), N.d = Q.getUTCDate() + (N.w + 6) % 7) : (Q = Sn(bt(N.y, 0, 1)), re = Q.getDay(), Q = re > 4 || re === 0 ? Mt.ceil(Q) : Mt(Q), Q = St.offset(Q, (N.V - 1) * 7), N.y = Q.getFullYear(), N.m = Q.getMonth(), N.d = Q.getDate() + (N.w + 6) % 7);
      } else ("W" in N || "U" in N) && ("w" in N || (N.w = "u" in N ? N.u % 7 : "W" in N ? 1 : 0), re = "Z" in N ? Cn(bt(N.y, 0, 1)).getUTCDay() : Sn(bt(N.y, 0, 1)).getDay(), N.m = 0, N.d = "W" in N ? (N.w + 6) % 7 + N.W * 7 - (re + 5) % 7 : N.w + N.U * 7 - (re + 6) % 7);
      return "Z" in N ? (N.H += N.Z / 100 | 0, N.M += N.Z % 100, Cn(N)) : Sn(N);
    };
  }
  function D(E, A, U, N) {
    for (var ue = 0, Q = A.length, re = U.length, J, y; ue < Q; ) {
      if (N >= re) return -1;
      if (J = A.charCodeAt(ue++), J === 37) {
        if (J = A.charAt(ue++), y = $[J in Mr ? A.charAt(ue++) : J], !y || (N = y(E, U, N)) < 0) return -1;
      } else if (J != U.charCodeAt(N++))
        return -1;
    }
    return N;
  }
  function S(E, A, U) {
    var N = u.exec(A.slice(U));
    return N ? (E.p = d.get(N[0].toLowerCase()), U + N[0].length) : -1;
  }
  function k(E, A, U) {
    var N = v.exec(A.slice(U));
    return N ? (E.w = B.get(N[0].toLowerCase()), U + N[0].length) : -1;
  }
  function h(E, A, U) {
    var N = m.exec(A.slice(U));
    return N ? (E.w = p.get(N[0].toLowerCase()), U + N[0].length) : -1;
  }
  function _(E, A, U) {
    var N = F.exec(A.slice(U));
    return N ? (E.m = I.get(N[0].toLowerCase()), U + N[0].length) : -1;
  }
  function W(E, A, U) {
    var N = x.exec(A.slice(U));
    return N ? (E.m = C.get(N[0].toLowerCase()), U + N[0].length) : -1;
  }
  function se(E, A, U) {
    return D(E, t, A, U);
  }
  function P(E, A, U) {
    return D(E, r, A, U);
  }
  function ee(E, A, U) {
    return D(E, a, A, U);
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
  function j(E) {
    return l[E.getMonth()];
  }
  function q(E) {
    return o[+(E.getHours() >= 12)];
  }
  function H(E) {
    return 1 + ~~(E.getMonth() / 3);
  }
  function O(E) {
    return i[E.getUTCDay()];
  }
  function V(E) {
    return s[E.getUTCDay()];
  }
  function he(E) {
    return c[E.getUTCMonth()];
  }
  function f(E) {
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
      var A = b(E += "", L);
      return A.toString = function() {
        return E;
      }, A;
    },
    parse: function(E) {
      var A = M(E += "", !1);
      return A.toString = function() {
        return E;
      }, A;
    },
    utcFormat: function(E) {
      var A = b(E += "", w);
      return A.toString = function() {
        return E;
      }, A;
    },
    utcParse: function(E) {
      var A = M(E += "", !0);
      return A.toString = function() {
        return E;
      }, A;
    }
  };
}
var Mr = { "-": "", _: " ", 0: "0" }, Ce = /^\s*\d+/, ci = /^%/, di = /[\\^$*+?|[\]().{}]/g;
function ge(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function ui(e) {
  return e.replace(di, "\\$&");
}
function xt(e) {
  return new RegExp("^(?:" + e.map(ui).join("|") + ")", "i");
}
function yt(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function hi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function fi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function mi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function pi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function gi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function $r(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function Ar(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function bi(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function xi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function yi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function Hr(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function _i(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function Pr(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function vi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function ki(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function wi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function Si(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Ci(e, t, r) {
  var a = ci.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function ji(e, t, r) {
  var a = Ce.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Ni(e, t, r) {
  var a = Ce.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function zr(e, t) {
  return ge(e.getDate(), t, 2);
}
function Ti(e, t) {
  return ge(e.getHours(), t, 2);
}
function Di(e, t) {
  return ge(e.getHours() % 12 || 12, t, 2);
}
function Fi(e, t) {
  return ge(1 + St.count(Xe(e), e), t, 3);
}
function ya(e, t) {
  return ge(e.getMilliseconds(), t, 3);
}
function Bi(e, t) {
  return ya(e, t) + "000";
}
function Ii(e, t) {
  return ge(e.getMonth() + 1, t, 2);
}
function Ri(e, t) {
  return ge(e.getMinutes(), t, 2);
}
function Li(e, t) {
  return ge(e.getSeconds(), t, 2);
}
function Ei(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Mi(e, t) {
  return ge(fn.count(Xe(e) - 1, e), t, 2);
}
function _a(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ht(e) : ht.ceil(e);
}
function $i(e, t) {
  return e = _a(e), ge(ht.count(Xe(e), e) + (Xe(e).getDay() === 4), t, 2);
}
function Ai(e) {
  return e.getDay();
}
function Hi(e, t) {
  return ge(Mt.count(Xe(e) - 1, e), t, 2);
}
function Pi(e, t) {
  return ge(e.getFullYear() % 100, t, 2);
}
function zi(e, t) {
  return e = _a(e), ge(e.getFullYear() % 100, t, 2);
}
function Wi(e, t) {
  return ge(e.getFullYear() % 1e4, t, 4);
}
function Oi(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? ht(e) : ht.ceil(e), ge(e.getFullYear() % 1e4, t, 4);
}
function Ui(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ge(t / 60 | 0, "0", 2) + ge(t % 60, "0", 2);
}
function Wr(e, t) {
  return ge(e.getUTCDate(), t, 2);
}
function Gi(e, t) {
  return ge(e.getUTCHours(), t, 2);
}
function Vi(e, t) {
  return ge(e.getUTCHours() % 12 || 12, t, 2);
}
function Yi(e, t) {
  return ge(1 + hr.count(at(e), e), t, 3);
}
function va(e, t) {
  return ge(e.getUTCMilliseconds(), t, 3);
}
function qi(e, t) {
  return va(e, t) + "000";
}
function Ki(e, t) {
  return ge(e.getUTCMonth() + 1, t, 2);
}
function Zi(e, t) {
  return ge(e.getUTCMinutes(), t, 2);
}
function Ji(e, t) {
  return ge(e.getUTCSeconds(), t, 2);
}
function Xi(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Qi(e, t) {
  return ge(xa.count(at(e) - 1, e), t, 2);
}
function ka(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ft(e) : ft.ceil(e);
}
function el(e, t) {
  return e = ka(e), ge(ft.count(at(e), e) + (at(e).getUTCDay() === 4), t, 2);
}
function tl(e) {
  return e.getUTCDay();
}
function nl(e, t) {
  return ge($t.count(at(e) - 1, e), t, 2);
}
function rl(e, t) {
  return ge(e.getUTCFullYear() % 100, t, 2);
}
function al(e, t) {
  return e = ka(e), ge(e.getUTCFullYear() % 100, t, 2);
}
function sl(e, t) {
  return ge(e.getUTCFullYear() % 1e4, t, 4);
}
function ol(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? ft(e) : ft.ceil(e), ge(e.getUTCFullYear() % 1e4, t, 4);
}
function il() {
  return "+0000";
}
function Or() {
  return "%";
}
function Ur(e) {
  return +e;
}
function Gr(e) {
  return Math.floor(+e / 1e3);
}
var it, wa;
ll({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ll(e) {
  return it = li(e), wa = it.format, it.parse, it.utcFormat, it.utcParse, it;
}
function cl(e) {
  return new Date(e);
}
function dl(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Sa(e, t, r, a, o, s, i, l, c, u) {
  var d = Go(), m = d.invert, p = d.domain, v = u(".%L"), B = u(":%S"), x = u("%I:%M"), C = u("%I %p"), F = u("%a %d"), I = u("%b %d"), L = u("%B"), w = u("%Y");
  function $(b) {
    return (c(b) < b ? v : l(b) < b ? B : i(b) < b ? x : s(b) < b ? C : a(b) < b ? o(b) < b ? F : I : r(b) < b ? L : w)(b);
  }
  return d.invert = function(b) {
    return new Date(m(b));
  }, d.domain = function(b) {
    return arguments.length ? p(Array.from(b, dl)) : p().map(cl);
  }, d.ticks = function(b) {
    var M = p();
    return e(M[0], M[M.length - 1], b ?? 10);
  }, d.tickFormat = function(b, M) {
    return M == null ? $ : u(M);
  }, d.nice = function(b) {
    var M = p();
    return (!b || typeof b.range != "function") && (b = t(M[0], M[M.length - 1], b ?? 10)), b ? p(Vo(M, b)) : d;
  }, d.copy = function() {
    return Oo(d, Sa(e, t, r, a, o, s, i, l, c, u));
  }, d;
}
function ul() {
  return fo.apply(Sa(oi, ii, Xe, fr, fn, St, ur, dr, dt, wa).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function hl({
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
  const u = xe(null), [d, m] = pe(!1), [p, v] = pe(!1), B = t(e.start), x = t(e.end), C = Math.max(x - B, 20), F = () => {
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
  }, I = e.progress ? C * e.progress / 100 : 0, L = () => {
    r?.(e);
  }, w = () => {
    a?.(e);
  }, $ = (_) => {
    _.key === "Enter" ? (_.preventDefault(), L()) : _.key === " " && (_.preventDefault(), w());
  }, b = () => {
    m(!0);
  }, M = () => {
    m(!1);
  }, D = () => {
    v(!0), l?.();
  }, S = () => {
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
    "--task-width": `${C}px`,
    "--task-color": F(),
    left: `${B}px`,
    width: `${C}px`,
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
      onMouseDown: b,
      onMouseUp: M,
      onFocus: D,
      onBlur: S,
      "aria-label": c || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${I}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function fl({ viewStart: e, viewEnd: t, dateCount: r }) {
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
  }, m = () => {
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
            onFocus: m,
            children: a.map((v, B) => {
              const x = v.getTime() === s.getTime(), C = i === B;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": B,
                  className: `date-column ${x ? "today" : ""} ${C ? "focused" : ""}`,
                  tabIndex: C ? 0 : -1,
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
function ml({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = pe(!1), [u, d] = pe(-1), m = xe(null);
  ye(() => {
    l && u >= 0 && t.length > 0 && setTimeout(() => {
      m.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
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
          x.preventDefault(), m.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
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
        const C = Math.max(0, u - 1);
        d(C), m.current?.querySelector(`[data-task-index="${C}"]`)?.focus();
        break;
      case "ArrowRight":
        x.preventDefault();
        const I = Math.min(t.length - 1, u + 1);
        d(I), m.current?.querySelector(`[data-task-index="${I}"]`)?.focus();
        break;
      case "Enter":
        x.preventDefault(), u >= 0 && a?.(t[u]);
        break;
      case " ":
        x.preventDefault(), u >= 0 && o?.(t[u]);
        break;
      case "Escape":
        x.preventDefault(), c(!1), d(-1), m.current?.focus();
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
        x.preventDefault(), m.current?.focus();
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
            ref: m,
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
            children: t.map((x, C) => /* @__PURE__ */ n.jsx(
              hl,
              {
                task: x,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && u === C,
                taskIndex: C,
                tabIndex: l && u === C ? 0 : -1,
                onFocus: () => B(C)
              },
              x.id
            ))
          }
        )
      ]
    }
  );
}
function ff({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = xe(null), [l, c] = pe(800), u = _e(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const x = new Date(r);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : x;
  }, [r]), d = _e(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const x = new Date(a);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : x;
  }, [a]), m = _e(() => Math.ceil((d.getTime() - u.getTime()) / 864e5) + 1, [u, d]);
  ye(() => {
    if (!i.current) return;
    const x = new ResizeObserver((C) => {
      const F = C[0];
      F && c(Math.max(F.contentRect.width - 220, 400));
    });
    return x.observe(i.current), () => x.disconnect();
  }, []);
  const p = _e(
    () => ul().domain([u, d]).range([0, l]),
    [u, d, l]
  ), v = _e(() => {
    const x = /* @__PURE__ */ new Map();
    return t.forEach((C) => {
      const F = x.get(C.resourceId) || [];
      F.push(C), x.set(C.resourceId, F);
    }), x;
  }, [t]), B = (x) => {
    if (x.target === x.currentTarget)
      switch (x.key) {
        case "ArrowDown":
          x.preventDefault();
          const C = i.current?.querySelector(".gantt-row .resource-label");
          C && C.focus();
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
      "aria-colcount": m + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: B,
      children: [
        /* @__PURE__ */ n.jsx(fl, { viewStart: u, viewEnd: d, dateCount: m }),
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
            children: e.map((x, C) => /* @__PURE__ */ n.jsx(
              ml,
              {
                resource: x,
                tasks: v.get(x.id) || [],
                scale: p,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: C,
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
const At = ({
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
) }), pl = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? Ie.Children.toArray(t).filter(
    (F) => Ie.isValidElement(F) && (F.type === At || F.type?.displayName === "BreadcrumbItem")
  ).map((F) => ({
    text: typeof F.props.children == "string" ? F.props.children : String(F.props.children),
    href: F.props.href,
    active: F.props.active,
    attributes: F.props.attributes
  })) : [], u = () => t ? c() : o && s ? [{ href: o, text: s }] : e, d = () => {
    const C = u();
    if (C && C.length > 0) {
      const F = C.slice().reverse().find((I) => I.href && !I.active);
      if (F)
        return { href: F.href, text: F.text };
    }
    return { text: "Home" };
  }, m = u(), p = d(), v = X(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), x = m && m.length > 1 ? a : void 0;
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
          Ie.Children.map(t, (C, F) => Ie.isValidElement(C) && (C.type === At || C.type?.displayName === "BreadcrumbItem") ? Ie.cloneElement(C, { key: F }) : null)
        ) : (
          // Render from items array
          m?.map((C, F) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: C.active ? /* @__PURE__ */ n.jsx(
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
}, gl = pl;
gl.Item = At;
At.displayName = "BreadcrumbItem";
const Ca = ({
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
        const m = document.querySelector(d);
        if (m) {
          m.hasAttribute("tabindex") || m.setAttribute("tabindex", "-1"), m.focus(), m.classList.add("nhsuk-skip-link-focused-element");
          const p = window.setTimeout(() => {
            m.classList.remove("nhsuk-skip-link-focused-element"), m.getAttribute("tabindex") === "-1" && m.removeAttribute("tabindex");
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
}, mf = ({
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
}, pf = ({
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
}, ja = Ie.forwardRef(({
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
}, m) => {
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
    const I = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Ze,
      {
        level: a,
        className: B,
        children: I()
      }
    );
  }, C = () => d.children ? d.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, F = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      ref: m,
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
          C(),
          F()
        ] })
      ]
    }
  );
});
ja.displayName = "Card";
const gf = ({
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
}, bf = ({
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
}, xf = ({
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
  "aria-label": m,
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
  ].filter(Boolean).join(" "), C = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const I = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], L = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        I,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Ze,
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
      "aria-label": m,
      "aria-labelledby": p,
      "aria-describedby": v,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          C(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: F() })
      ]
    }
  );
}, bl = ({
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
    Ze,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Ze,
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
  return /* @__PURE__ */ n.jsxs("div", { className: u, id: e, ...c, children: [
    d(),
    m()
  ] });
}, yf = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = X("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, _f = ({
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
}, vf = ({
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
  classes: m,
  attributes: p,
  "data-testid": v
}) => {
  const B = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), x = X(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    d
  ), C = X(m), F = (w, $) => {
    const b = X("nhsuk-table__header", {
      [`nhsuk-table__header--${w.format}`]: w.format
    }, w.classes), M = {
      scope: "col",
      ...w.colspan && { colSpan: w.colspan },
      ...w.rowspan && { rowSpan: w.rowspan },
      ...s && { role: "columnheader" },
      ...w.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: b, ...M, children: w.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text }, $);
  }, I = (w, $, b) => {
    const M = o && b, D = X(
      M ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${M ? "header" : "cell"}--${w.format}`]: w.format
      },
      w.classes
    ), S = {
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
    return /* @__PURE__ */ n.jsx(h, { className: D, ...S, children: k }, $);
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
              (b, M) => I(b, M, M === 0)
            )
          },
          $
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(bl, { className: u, children: [
    i && /* @__PURE__ */ n.jsx(Ze, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    L()
  ] }) : C ? /* @__PURE__ */ n.jsx("div", { className: C, children: L() }) : L();
}, kf = mt(({
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
  ...m
}, p) => {
  const v = r !== void 0, [B, x] = pe(() => t || e[0]?.id || ""), C = v ? r : B, F = xe(null), I = xe(/* @__PURE__ */ new Map()), L = te((k) => {
    v || x(k), a?.(k);
  }, [v, a]), w = te((k) => {
    o?.(k), l && L(k);
  }, [o, l, L]), $ = te((k, h) => {
    const _ = e.filter((P) => !P.disabled).map((P) => P.id), W = _.indexOf(h);
    let se = null;
    switch (k.key) {
      case "ArrowLeft":
        se = W > 0 ? W - 1 : _.length - 1;
        break;
      case "ArrowRight":
        se = W < _.length - 1 ? W + 1 : 0;
        break;
      case "Home":
        se = 0;
        break;
      case "End":
        se = _.length - 1;
        break;
      case "Escape":
        k.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (se !== null) {
      k.preventDefault();
      const P = _[se], ee = I.current.get(P);
      ee && (ee.focus(), w(P));
    }
  }, [e, w, i]), b = te((k, h) => {
    h ? I.current.set(k, h) : I.current.delete(k);
  }, []), M = te((k) => {
    const h = I.current.get(k);
    h && h.focus();
  }, []);
  na(p, () => ({
    focusTab: M,
    getActiveTab: () => C,
    getTabListElement: () => F.current
  }), [M, C]);
  const D = te((k) => {
    const h = k.relatedTarget;
    F.current?.contains(h) || s?.();
  }, [s]), S = X("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: S,
      id: u,
      "data-testid": d,
      ...m,
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
                  const h = k.id === C, _ = k.disabled, W = X("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": h,
                    "nhsuk-tabs__list-item--disabled": _
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: W, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (se) => b(k.id, se),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": h,
                      "aria-controls": `${k.id}-panel`,
                      id: `${k.id}-tab`,
                      tabIndex: h ? 0 : -1,
                      disabled: _,
                      onClick: () => !_ && L(k.id),
                      onKeyDown: (se) => !_ && $(se, k.id),
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
          const h = k.id === C;
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
}), xl = mt(
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
    ].filter(Boolean).join(" "), m = t ? /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: m }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
xl.displayName = "Details";
const yl = mt(
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
    ), m = (v) => t === "cross" && !a ? `do not ${v}` : v, p = () => /* @__PURE__ */ n.jsx(
      Ze,
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
            m(v.item)
          ] }, B)) }) })
        ]
      }
    );
  }
);
yl.displayName = "DoDontList";
const _l = mt(
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
    ].filter(Boolean).join(" "), m = t ? /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: m }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
_l.displayName = "Expander";
const vl = mt(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const u = c + 1, d = `${t}-${u}-hint`, m = `${t}-${u}-status`, p = !!l.href, v = [
        "nhsuk-task-list__item",
        p && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), B = [
        l.hint && d,
        m
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        kl,
        {
          item: l,
          itemClasses: v,
          hasLink: p,
          hintId: d,
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
), kl = ({
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
    return e.status.tag ? d = /* @__PURE__ */ n.jsx(Ke, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ n.jsx("div", { className: u, id: o, children: d });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
vl.displayName = "TaskList";
const wf = ({
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
        ta(
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
}, Sf = ({
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
}, wl = ({
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
    /* @__PURE__ */ n.jsx(Ze, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, Cf = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(Zs, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    ar,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      children: /* @__PURE__ */ n.jsx(wl, { ...o })
    },
    s
  )) }) });
}, Sl = Ie.forwardRef(
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
    className: m,
    tableClassName: p,
    bordered: v = !1,
    striped: B = !1,
    responsive: x = !1,
    tableType: C = "default"
  }, F) => {
    const I = xe(null), L = xe(null), w = xe(null);
    Ie.useImperativeHandle(F, () => I.current, []);
    const [$, b] = pe(0), [M, D] = pe(0), [S, k] = pe("headers"), [h, _] = pe("browse"), W = t.length, se = e.length, P = _e(() => !r || r.length === 0 ? e : [...e].sort((H, O) => {
      for (const { key: V, direction: he } of r) {
        const f = H[V], T = O[V];
        if (f == null && T == null) continue;
        if (f == null) return 1;
        if (T == null) return -1;
        let G = 0;
        if (typeof f == "number" && typeof T == "number" ? G = f - T : G = String(f).localeCompare(String(T)), G !== 0)
          return he === "asc" ? G : -G;
      }
      return 0;
    }), [e, r]), ee = te((H, O) => {
      setTimeout(() => {
        const V = I.current?.querySelector(
          `tbody tr:nth-child(${H + 1}) td:nth-child(${O + 1})`
        );
        V && (V.focus(), typeof V.scrollIntoView == "function" && V.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ne = te((H) => {
      setTimeout(() => {
        const O = I.current?.querySelector(`th:nth-child(${H + 1})`);
        O && (O.focus(), typeof O.scrollIntoView == "function" && O.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ie = te((H) => {
      a?.(H);
    }, [a]), le = te((H) => {
      s?.(H);
    }, [s]), j = te((H) => {
      const { key: O } = H;
      switch (O) {
        case "Enter":
          if (H.preventDefault(), S === "headers" && h === "browse")
            _("navigate"), ne(M);
          else if (S === "headers" && h === "navigate") {
            const V = t[M];
            V && ie(V.key);
          } else S === "cells" && h === "browse" ? (_("navigate"), ee($, M)) : S === "cells" && h === "navigate" && le($);
          break;
        case "Escape":
          H.preventDefault(), (S === "headers" && h === "navigate" || S === "cells" && h === "navigate") && _("browse");
          break;
        case "ArrowLeft":
          if (H.preventDefault(), h === "navigate" || h === "browse" && S === "headers") {
            if (S === "headers") {
              const V = Math.max(0, M - 1);
              D(V), ne(V);
            } else if (S === "cells") {
              const V = Math.max(0, M - 1);
              D(V), ee($, V);
            }
          }
          break;
        case "ArrowRight":
          if (H.preventDefault(), h === "navigate" || h === "browse" && S === "headers") {
            if (S === "headers") {
              const V = Math.min(W - 1, M + 1);
              D(V), ne(V);
            } else if (S === "cells") {
              const V = Math.min(W - 1, M + 1);
              D(V), ee($, V);
            }
          }
          break;
        case "ArrowUp":
          if (H.preventDefault(), S === "cells") {
            if (h === "browse") {
              const V = Math.max(0, $ - 1);
              b(V), ee(V, 0), D(0);
            } else if (h === "navigate")
              if ($ > 0) {
                const V = $ - 1;
                b(V), ee(V, M);
              } else
                k("headers"), _("browse"), ne(M);
          }
          break;
        case "ArrowDown":
          if (H.preventDefault(), S === "headers" && h === "browse")
            k("cells"), b(0), D(0), ee(0, 0);
          else if (S === "cells") {
            const V = se - 1;
            if (h === "browse") {
              const he = Math.min(V, $ + 1);
              b(he), ee(he, 0), D(0);
            } else if (h === "navigate" && $ < V) {
              const he = $ + 1;
              b(he), ee(he, M);
            }
          }
          break;
        case "Home":
          H.preventDefault(), S === "headers" ? (D(0), ne(0)) : S === "cells" && (H.ctrlKey ? (b(0), D(0), ee(0, 0)) : (D(0), ee($, 0)));
          break;
        case "End":
          if (H.preventDefault(), S === "headers") {
            const V = W - 1;
            D(V), ne(V);
          } else if (S === "cells")
            if (H.ctrlKey) {
              const V = se - 1, he = W - 1;
              b(V), D(he), ee(V, he);
            } else {
              const V = W - 1;
              D(V), ee($, V);
            }
          break;
        case " ":
          if (H.preventDefault(), S === "headers" && h === "navigate") {
            const V = t[M];
            V && ie(V.key);
          } else S === "cells" && h === "navigate" && le($);
          break;
      }
    }, [
      S,
      h,
      M,
      $,
      W,
      se,
      t,
      ee,
      ne,
      ie,
      le
    ]);
    ye(() => {
      const H = I.current;
      if (H)
        return H.addEventListener("keydown", j), () => H.removeEventListener("keydown", j);
    }, [j]);
    const q = X(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": x,
        "nhsuk-table--bordered": v,
        "nhsuk-table--striped": B,
        "nhsuk-table--compact": C === "compact"
      },
      m
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: I,
        className: q,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": u,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: L, role: "row", children: t.map((H, O) => {
            const V = r?.find((T) => T.key === H.key), he = !!V, f = S === "headers" && M === O;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: X("sortable-header", {
                  "sortable-header--focused": f
                }),
                role: "columnheader",
                tabIndex: f ? 0 : -1,
                onClick: () => ie(H.key),
                onKeyDown: (T) => {
                  (T.key === "Enter" || T.key === " ") && (T.preventDefault(), ie(H.key));
                },
                "aria-sort": he ? V?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: H.label }),
                  he && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((T) => T.key === H.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: V?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              H.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: w, className: "nhsuk-table__body", role: "rowgroup", children: P.map((H, O) => {
            const V = o === O, he = S === "cells" && $ === O;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: X("data-row", {
                  "data-row--selected": V,
                  "data-row--focused": he
                }),
                "aria-selected": V,
                children: t.map((f, T) => {
                  const G = f.tableRenderer ? f.tableRenderer(H) : f.render ? f.render(H) : H[f.key], E = S === "cells" && $ === O && M === T, A = () => typeof G == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
                      children: A()
                    },
                    f.key
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
Sl.displayName = "AriaDataGrid";
const Na = ({
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
  const m = xe(null), p = xe(null), v = xe(null), B = te((S, k) => {
    c || (p.current = k, S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("text/plain", k));
  }, [c]), x = te((S, k) => {
    c || p.current === k || (S.preventDefault(), S.dataTransfer.dropEffect = "move", v.current = k);
  }, [c]), C = te((S, k) => {
    if (c) return;
    S.preventDefault();
    const h = p.current;
    if (!h || h === k) return;
    const _ = e.findIndex((se) => se.key === h), W = e.findIndex((se) => se.key === k);
    if (_ !== -1 && W !== -1) {
      const se = [...e], [P] = se.splice(_, 1);
      se.splice(W, 0, P), r(se);
    }
    p.current = null, v.current = null;
  }, [c, e, r]), F = te(() => {
    p.current = null, v.current = null;
  }, []), I = te((S) => {
    const k = t.find((h) => h.key === S);
    return k ? k.label : S;
  }, [t]), L = te((S) => ["red", "orange", "blue", "aqua-green", "grey"][S] || "grey", []), w = te((S) => {
    if (c) return;
    const k = e.map(
      (h) => h.key === S ? { ...h, direction: h.direction === "asc" ? "desc" : "asc" } : h
    );
    r(k);
  }, [e, r, c]), $ = te((S) => {
    if (c) return;
    const k = e.filter((h) => h.key !== S);
    r(k);
  }, [e, r, c]), b = te(() => {
    c || r([]);
  }, [r, c]), M = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const S = e.map((k, h) => {
      const _ = k.direction === "asc" ? "ascending" : "descending";
      return `${h + 1}. ${I(k.key)} (${_})`;
    });
    if (S.length === 1)
      return `Sorted by: ${S[0]}`;
    if (S.length === 2)
      return `Sorted by: ${S.join(" and ")}`;
    {
      const k = S.pop();
      return `Sorted by: ${S.join(", ")}, and ${k}`;
    }
  }, D = _e(() => {
    const S = ["sort-description"];
    return l && S.push("sort-help"), d && S.push(d), S.join(" ");
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
          ref: m,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": u,
          "aria-describedby": D,
          children: e.map((S, k) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (h) => B(h, S.key),
              onDragOver: (h) => x(h, S.key),
              onDrop: (h) => C(h, S.key),
              onDragEnd: F,
              onClick: () => w(S.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${S.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": S.key,
              children: /* @__PURE__ */ n.jsx(
                Ke,
                {
                  color: L(k),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => $(S.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${k + 1}`, children: k + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: I(S.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (h) => {
                          h.stopPropagation(), w(S.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${I(S.key)}. Currently ${S.direction === "asc" ? "ascending" : "descending"}`,
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
        Te,
        {
          variant: "secondary",
          onClick: b,
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
function Cl(e, t) {
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
const Fn = mt(
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
      disabled: m = !1,
      orientation: p = "horizontal",
      id: v,
      isLoading: B = !1,
      loadingComponent: x,
      error: C = null,
      errorComponent: F,
      "data-testid": I
    } = t, {
      dataComparator: L = (f, T) => JSON.stringify(f) === JSON.stringify(T),
      filterFunction: w = (f) => f,
      booleanRenderer: $ = (f) => f ? "✓" : "✗"
    } = a || {}, b = s !== void 0, M = s ?? 0, [D, S] = pe({
      focusArea: "tabs",
      focusedTabIndex: M,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), k = _e(() => ({
      selectedIndex: M,
      tabLoadingStates: new Array(o.length).fill(!1),
      tabErrors: new Array(o.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(o.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [M]), [h, _] = ra(Cl, k);
    ye(() => {
      const f = h.tabLoadingStates.length, T = o.length;
      f !== T && _({ type: "ADJUST_ARRAYS", payload: { newLength: T } });
    }, [o.length]), ye(() => {
      b && _({ type: "SET_SELECTED_INDEX", payload: M });
    }, [M, b]), ye(() => {
      S((f) => ({
        ...f,
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
    const W = te((f, T) => L(f, T), [L]), se = te((f) => {
      f >= 0 && f < o.length && !o[f].disabled && (_({ type: "SET_SELECTED_INDEX", payload: f }), S((T) => ({
        ...T,
        focusedTabIndex: f,
        focusArea: "tabs"
      })), i?.(f));
    }, [o, i]), P = te((f) => {
      setTimeout(() => {
        const T = ne.current[f], G = T?.parentElement;
        if (T && G) {
          const E = T.offsetLeft, A = T.offsetWidth, U = G.clientWidth, N = E - U / 2 + A / 2;
          try {
            G.scrollTo({
              left: Math.max(0, N),
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
    }, []), ee = te((f, T) => {
      const { key: G } = f;
      switch (G) {
        case "ArrowLeft":
          f.preventDefault();
          const E = T > 0 ? T - 1 : o.length - 1;
          se(E), P(E), ne.current[E]?.focus();
          break;
        case "ArrowRight":
          f.preventDefault();
          const A = T < o.length - 1 ? T + 1 : 0;
          se(A), P(A), ne.current[A]?.focus();
          break;
        case "ArrowDown":
          f.preventDefault(), S((N) => ({
            ...N,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        case "Home":
          f.preventDefault(), se(0), P(0), ne.current[0]?.focus();
          break;
        case "End":
          f.preventDefault();
          const U = o.length - 1;
          se(U), P(U), ne.current[U]?.focus();
          break;
        case "Enter":
        case " ":
          f.preventDefault(), se(T);
          break;
      }
    }, [o.length, se, P]), ne = xe([]), ie = xe([]), le = te((f, T) => {
      const G = h.sortConfig || [], E = G.find((N) => N.key === T);
      let A;
      E ? E.direction === "asc" ? A = G.map(
        (N) => N.key === T ? { ...N, direction: "desc" } : N
      ) : A = G.filter((N) => N.key !== T) : A = [...G, { key: T, direction: "asc" }], _({
        type: "SET_SORT",
        payload: A
      }), o[f].onSort?.(T);
    }, [h.sortConfig, o]), j = te((f) => {
      setTimeout(() => {
        const T = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] th:nth-child(${f + 1})`
        );
        T && T.focus();
      }, 0);
    }, [h.selectedIndex]), q = te((f) => $(f), [$]), H = te((f, T) => {
      setTimeout(() => {
        const G = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] tbody tr:nth-child(${f + 1}) td:nth-child(${T + 1})`
        );
        G && G.focus();
      }, 0);
    }, [h.selectedIndex]);
    ye(() => {
      D.isGridActive && (D.focusArea === "headers" ? setTimeout(() => {
        j(D.focusedHeaderIndex);
      }, 0) : D.focusArea === "cells" && setTimeout(() => {
        H(D.focusedRowIndex, D.focusedColumnIndex);
      }, 0));
    }, [D.focusArea, D.isGridActive, D.focusedHeaderIndex, D.focusedRowIndex, D.focusedColumnIndex, j, H]), ye(() => {
      P(h.selectedIndex);
    }, [h.selectedIndex, P]);
    const O = te((f, T) => {
      const { key: G } = f, E = o[h.selectedIndex], A = E?.columns.length || 0;
      switch (G) {
        case "ArrowLeft":
          f.preventDefault();
          const U = Math.max(0, T - 1);
          S((re) => ({ ...re, focusedHeaderIndex: U })), j(U);
          break;
        case "ArrowRight":
          f.preventDefault();
          const N = Math.min(A - 1, T + 1);
          S((re) => ({ ...re, focusedHeaderIndex: N })), j(N);
          break;
        case "ArrowUp":
          f.preventDefault(), S((re) => ({
            ...re,
            focusArea: "tabs",
            focusedTabIndex: h.selectedIndex
          })), P(h.selectedIndex), ne.current[h.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          f.preventDefault(), S((re) => ({
            ...re,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: T,
            isGridActive: !0
          }));
          break;
        case "Home":
          f.preventDefault(), S((re) => ({ ...re, focusedHeaderIndex: 0 })), j(0);
          break;
        case "End":
          f.preventDefault();
          const ue = A - 1;
          S((re) => ({ ...re, focusedHeaderIndex: ue })), j(ue);
          break;
        case "Enter":
        case " ":
          f.preventDefault();
          const Q = E?.columns[T]?.key;
          Q && le(h.selectedIndex, Q);
          break;
      }
    }, [o, h.selectedIndex, le, S, j, H, ne]), V = te((f, T, G) => {
      const { key: E } = f, A = o[h.selectedIndex], U = A?.data.length || 0, N = A?.columns.length || 0;
      switch (E) {
        case "ArrowUp":
          if (f.preventDefault(), T === 0)
            S((J) => ({
              ...J,
              focusArea: "headers",
              focusedHeaderIndex: G,
              isGridActive: !1
            })), j(G);
          else {
            const J = T - 1;
            S((y) => ({ ...y, focusedRowIndex: J })), H(J, G);
          }
          break;
        case "ArrowDown":
          f.preventDefault();
          const ue = Math.min(U - 1, T + 1);
          S((J) => ({ ...J, focusedRowIndex: ue })), H(ue, G);
          break;
        case "ArrowLeft":
          f.preventDefault();
          const Q = Math.max(0, G - 1);
          S((J) => ({ ...J, focusedColumnIndex: Q })), H(T, Q);
          break;
        case "ArrowRight":
          f.preventDefault();
          const re = Math.min(N - 1, G + 1);
          S((J) => ({ ...J, focusedColumnIndex: re })), H(T, re);
          break;
        case "Home":
          f.preventDefault(), f.ctrlKey ? (S((J) => ({ ...J, focusedRowIndex: 0, focusedColumnIndex: 0 })), H(0, 0)) : (S((J) => ({ ...J, focusedColumnIndex: 0 })), H(T, 0));
          break;
        case "End":
          if (f.preventDefault(), f.ctrlKey) {
            const J = U - 1, y = N - 1;
            S((g) => ({ ...g, focusedRowIndex: J, focusedColumnIndex: y })), H(J, y);
          } else {
            const J = N - 1;
            S((y) => ({ ...y, focusedColumnIndex: J })), H(T, J);
          }
          break;
        case "Enter":
        case " ":
          if (f.preventDefault(), A && A.data[T]) {
            const J = A.data.some((R) => "ews_data" in R) ? w(A.data, h.filters) : A.data, y = h.sortConfig;
            let g = J;
            if (y && y.length > 0 && (g = [...J].sort((R, z) => {
              for (const { key: Y, direction: K } of y) {
                let oe = R[Y], ae = z[Y];
                const Z = A.columns.find((De) => De.key === Y);
                if (Z?.tableRenderer ? (oe = Z.tableRenderer(R), ae = Z.tableRenderer(z)) : Z?.render && (oe = Z.render(R), ae = Z.render(z)), oe == null && ae == null) continue;
                if (oe == null) return K === "asc" ? -1 : 1;
                if (ae == null) return K === "asc" ? 1 : -1;
                let ce = 0;
                if (typeof oe == "number" && typeof ae == "number" ? ce = oe - ae : ce = String(oe).localeCompare(String(ae), void 0, { numeric: !0, sensitivity: "base" }), ce !== 0)
                  return K === "asc" ? ce : -ce;
              }
              return 0;
            })), g[T]) {
              const R = g[T], Y = h.globalSelectedRowData && W(h.globalSelectedRowData, R) ? null : R;
              _({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: Y
              });
            }
          }
          break;
      }
    }, [o, h.selectedIndex, h.filters, h.sortConfig, w, W, _, S, j, H]), he = te((f, T) => w(f, T), [w]);
    return na(r, () => ({
      selectTab: (f) => {
        f >= 0 && f < o.length && (_({ type: "SET_SELECTED_INDEX", payload: f }), i?.(f));
      },
      refreshData: (f) => {
        console.log("Refreshing data for tab:", f ?? "all");
      },
      exportData: (f) => {
        const T = f ?? h.selectedIndex, G = o[T];
        return G ? G.data : [];
      },
      getSelectedRows: (f) => h.globalSelectedRowData ? [] : [],
      clearSelection: (f) => {
        _({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (f) => {
        _({ type: "SET_FILTERS", payload: f });
      }
    }), [h.selectedIndex, h.selectedRows, o, i]), B ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": I, children: x || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : C ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": I, children: F || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: C })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${p} ${d}`,
        id: v,
        "data-testid": I,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${v}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Na,
            {
              sortConfig: h.sortConfig || [],
              columns: o.flatMap(
                (f) => f.columns.map((T) => ({ key: T.key, label: T.label }))
              ).filter(
                (f, T, G) => G.findIndex((E) => E.key === f.key) === T
                // Remove duplicates
              ),
              onSortChange: (f) => {
                _({ type: "SET_SORT", payload: f });
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
              children: o.map((f, T) => {
                const G = T === h.selectedIndex, E = f.disabled || m;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${f.id}`,
                    "aria-controls": `panel-${f.id}`,
                    "aria-selected": G,
                    "aria-disabled": E,
                    tabIndex: G ? 0 : -1,
                    ref: (A) => {
                      ne.current[T] = A;
                    },
                    onClick: () => se(T),
                    onKeyDown: (A) => ee(A, T),
                    disabled: E,
                    className: [
                      "aria-tabs-datagrid__tab",
                      G ? "aria-tabs-datagrid__tab--selected" : "",
                      E ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: f.label }),
                      h.tabLoadingStates[T] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      h.tabErrors[T] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  f.id
                );
              })
            }
          ),
          o.map((f, T) => {
            const G = T === h.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${f.id}`,
                "aria-labelledby": `tab-${f.id}`,
                tabIndex: 0,
                hidden: !G,
                ref: (E) => {
                  ie.current[T] = E;
                },
                className: `aria-tabs-datagrid__panel ${f.className || ""}`,
                "data-tab-panel": T,
                children: G && (() => {
                  const E = f.data.some((U) => "ews_data" in U) ? he(f.data, h.filters) : f.data, A = _e(() => {
                    const U = h.sortConfig;
                    return !U || U.length === 0 ? E : [...E].sort((N, ue) => {
                      for (const { key: Q, direction: re } of U) {
                        let J = N[Q], y = ue[Q];
                        const g = f.columns.find((z) => z.key === Q);
                        if (g?.tableRenderer ? (J = g.tableRenderer(N), y = g.tableRenderer(ue)) : g?.render && (J = g.render(N), y = g.render(ue)), J == null && y == null) continue;
                        if (J == null) return 1;
                        if (y == null) return -1;
                        let R = 0;
                        if (typeof J == "number" && typeof y == "number" ? R = J - y : typeof J == "boolean" && typeof y == "boolean" ? R = J === y ? 0 : J ? 1 : -1 : R = String(J).localeCompare(String(y), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), R !== 0)
                          return re === "asc" ? R : -R;
                      }
                      return 0;
                    });
                  }, [E, h.sortConfig, f.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": f.ariaLabel,
                      "aria-describedby": f.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: f.columns.map((U, N) => {
                          const ue = h.sortConfig?.find((J) => J.key === U.key), Q = !!ue, re = D.focusArea === "headers" && D.focusedHeaderIndex === N;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${re ? "sortable-header--focused" : ""} ${Q ? "sortable-header--sorted" : ""}`,
                              role: "columnheader",
                              tabIndex: re ? 0 : -1,
                              onClick: () => le(T, U.key),
                              onKeyDown: (J) => O(J, N),
                              "aria-sort": Q ? ue?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: U.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${Q ? `sort-indicator--${ue?.direction}` : ""}`, children: [
                                  h.sortConfig && h.sortConfig.length > 0 && h.sortConfig.findIndex((J) => J.key === U.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${h.sortConfig.findIndex((J) => J.key === U.key) + 1}`,
                                      "data-priority": h.sortConfig.findIndex((J) => J.key === U.key) + 1,
                                      title: `Sort priority: ${h.sortConfig.findIndex((J) => J.key === U.key) + 1}`,
                                      children: h.sortConfig.findIndex((J) => J.key === U.key) + 1
                                    }
                                  ),
                                  Q && /* @__PURE__ */ n.jsx(
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
                            U.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: A.map((U, N) => {
                          const ue = h.globalSelectedRowData && W(h.globalSelectedRowData, U), Q = D.focusArea === "cells" && D.focusedRowIndex === N;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${ue ? "data-row--selected" : ""} ${Q ? "data-row--focused" : ""}`,
                              "aria-selected": ue,
                              children: f.columns.map((re, J) => {
                                const y = re.tableRenderer ? re.tableRenderer(U) : re.render ? re.render(U) : U[re.key], g = D.focusArea === "cells" && D.focusedRowIndex === N && D.focusedColumnIndex === J, R = () => typeof y == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  q(y),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: y ? "Yes" : "No" })
                                ] }) : String(y ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${g ? "data-cell--focused" : ""}`,
                                    tabIndex: g ? 0 : -1,
                                    onClick: () => {
                                      const Y = h.globalSelectedRowData && W(h.globalSelectedRowData, U) ? null : U;
                                      _({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: Y
                                      });
                                    },
                                    onKeyDown: (z) => V(z, N, J),
                                    children: R()
                                  },
                                  re.key
                                );
                              })
                            },
                            N
                          );
                        }) })
                      ]
                    }
                  );
                })()
              },
              f.id
            );
          })
        ]
      }
    );
  }
), Dt = {
  asc: "↑",
  desc: "↓"
}, jl = (e) => [...e].sort((t, r) => t.priority - r.priority);
function jn(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Nl(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Tl(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function Dl(e, t) {
  const r = t.find((o) => o.id === e), a = Nl(t);
  return r ? r.priority < a : !1;
}
const jf = ({
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
  const d = _e(() => jl(e), [e]), m = te((I) => {
    if (l) return;
    const L = e.map(
      (w) => w.id === I ? { ...w, direction: w.direction === "asc" ? "desc" : "asc" } : w
    );
    t(L);
  }, [e, t, l]), p = te((I) => {
    if (l) return;
    const L = e.findIndex(($) => $.id === I);
    if (L <= 0) return;
    const w = [...e];
    [w[L], w[L - 1]] = [w[L - 1], w[L]], t(jn(w));
  }, [e, t, l]), v = te((I) => {
    if (l) return;
    const L = e.findIndex(($) => $.id === I);
    if (L >= e.length - 1 || L === -1) return;
    const w = [...e];
    [w[L], w[L + 1]] = [w[L + 1], w[L]], t(jn(w));
  }, [e, t, l]), B = te((I) => {
    if (l) return;
    const L = e.filter((w) => w.id !== I);
    t(jn(L));
  }, [e, t, l]), x = te(() => {
    l || t([]);
  }, [t, l]), C = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const I = d.map((L, w) => {
      const $ = L.direction === "asc" ? "ascending" : "descending";
      return `${w + 1}. ${L.label} (${$})`;
    });
    if (I.length === 1)
      return `Sorted by: ${I[0]}`;
    if (I.length === 2)
      return `Sorted by: ${I.join(" and ")}`;
    {
      const L = I.pop();
      return `Sorted by: ${I.join(", ")}, and ${L}`;
    }
  }, F = _e(() => {
    const I = ["sort-description"];
    return i && I.push("sort-help"), u && I.push(u), I.join(" ");
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
        "aria-describedby": F,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((I) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Ke,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => B(I.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: I.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: I.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => m(I.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${I.label}. Currently ${I.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: I.direction === "asc" ? Dt.asc : Dt.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(I.id),
                          disabled: l || !Tl(I.id, e),
                          "aria-label": `Move ${I.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => v(I.id),
                          disabled: l || !Dl(I.id, e),
                          "aria-label": `Move ${I.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            I.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      Te,
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
      Dt.asc,
      "/",
      Dt.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, mr = (e, t) => t.map((r) => ({
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
})), Bn = [
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
], Fl = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Bl = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Il = (e) => {
  if (typeof e == "boolean") {
    const r = Bn.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = Bn.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, Rl = (e) => `${e.name}-${e.bed_name}`, Ll = () => ({
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
}), Nf = (e) => {
  const t = Ll();
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
}, El = {
  dataComparator: Fl,
  filterFunction: Bl,
  booleanRenderer: Il,
  getDataId: Rl
};
function Vr(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: u = {},
    classPrefix: d = "adaptive-card"
  } = r, m = t.find((L) => L.key === a), p = m?.cardRenderer ? m.cardRenderer(e) : m?.render ? m.render(e) : e[a || "name"] || "Untitled", v = () => o.filter((w) => !i.includes(w) && e[w]).slice(0, 3).map((w) => {
    const $ = t.find((S) => S.key === w), b = e[w], M = u[w] ? u[w](b, e) : $?.cardRenderer ? $.cardRenderer(e) : $?.render ? $.render(e) : b;
    return `${$?.label || w}: ${M}`;
  }).join(" • "), B = () => s.length === 0 ? null : s.filter((L) => e[L.fieldKey] !== void 0).map((L) => {
    const w = e[L.fieldKey], $ = L.render ? L.render(w, e) : w;
    return `<span class="nhsuk-tag ${Ml(L, w)}">${$}</span>`;
  }).join(""), x = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", C = B(), F = v(), I = C ? `${F}${C ? `<div class="adaptive-card__badges">${C}</div>` : ""}` : F;
  return {
    variant: x(),
    heading: String(p),
    descriptionHtml: I,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${p}`
  };
}
function Ml(e, t) {
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
const $l = {
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
}, Ta = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, c = e.ward_name, u = e.bed_name, d = e.ews_score, m = e.speciality, p = e.consultant;
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
            Ke,
            {
              color: Hl(Ia(d)),
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
            /* @__PURE__ */ n.jsx("dd", { children: m })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ n.jsx("dd", { children: p })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            Te,
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
            Te,
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
            Te,
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
}, Da = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        Ke,
        {
          color: Pl(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        Ke,
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
      Te,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Te,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), Fa = ({
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
        Ke,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        Ke,
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
      Te,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Te,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), Ba = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, c = e.ews_data?.temperature, u = e.ews_data?.systolic_bp, d = e.ews_data?.heart_rate, m = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Al(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: m && /* @__PURE__ */ n.jsxs(
            Ke,
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
            Te,
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
            Te,
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
function Ia(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Al(e) {
  return Ia(e);
}
function Hl(e) {
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
function Pl(e) {
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
const zl = [
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
], Ra = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Wl = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Ol = (e) => Ra(e) === "high" || e.status === "urgent" ? "primary" : "default", Ul = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Gl = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: zl,
  hiddenFields: [],
  getPriority: Ra,
  getStatus: Wl,
  getVariant: Ol,
  fieldRenderers: Ul,
  classPrefix: "adaptive-card--healthcare"
}, Vl = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", o = r.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ n.jsx(
      Ta,
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
      Da,
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
      Fa,
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
      Ba,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, Yl = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Yr = {
  name: "healthcare",
  defaultCardConfig: Gl,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Vl,
  fieldTypes: Yl
};
function qr(e) {
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
function Kr(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function ql(e, t) {
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
function Kl(e, t) {
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
function Zl(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Jl(e, t, r, a) {
  const o = a ? { ...a.defaultCardConfig, ...r } : { ...$l, ...r };
  if (a && a.cardTemplates) {
    const s = Zl(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), Vr(e, t, o);
}
const Tf = ({
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
  orientation: m = "horizontal",
  id: p,
  disabled: v = !1,
  className: B,
  ...x
}) => {
  const C = Kl(e, t), F = l !== void 0, I = l ?? 0, L = _e(() => {
    if (s.some(
      (g) => g.data && g.data.length > 0 && Kr(g.data)
    )) {
      const g = qr(r);
      return {
        ...Yr.defaultCardConfig,
        ...g
      };
    } else
      return qr(r);
  }, [r, s]), w = _e(() => s.some(
    (g) => g.data && g.data.length > 0 && Kr(g.data)
  ) ? Yr : void 0, [s]), $ = _e(() => ({
    selectedIndex: I,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [I, s.length]), [b, M] = ra(ql, $), D = xe([]), S = xe([]), k = xe([]), h = xe(null), [_, W] = pe({
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
  }), se = te((y) => {
    if (!y.current)
      return { columns: 1, rows: 0 };
    const g = y.current, R = g.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (R.length === 0)
      return { columns: 1, rows: 0 };
    const z = g.offsetWidth, K = R[0].offsetWidth, oe = Math.floor(z / K) || 1, ae = Math.ceil(R.length / oe);
    return { columns: oe, rows: ae };
  }, []), P = te((y, g) => ({
    row: Math.floor(y / g),
    col: y % g
  }), []), ee = te((y, g, R) => y * R + g, []), ne = te((y, g, R, z) => {
    const { row: Y, col: K } = P(y, z);
    let oe = Y, ae = K;
    switch (g) {
      case "up":
        oe = Math.max(0, Y - 1);
        break;
      case "down":
        oe = Math.min(Math.floor((R - 1) / z), Y + 1);
        break;
      case "left":
        ae = Math.max(0, K - 1);
        break;
      case "right":
        ae = Math.min(z - 1, K + 1);
        break;
    }
    const Z = ee(oe, ae, z);
    return Math.min(Z, R - 1);
  }, [P, ee]);
  ye(() => {
    _.isCardNavigationActive && _.focusedCardElementIndex >= 0 && _.cardElements.length > 0 && setTimeout(() => {
      const y = _.cardElements[_.focusedCardElementIndex];
      y && (y.element.focus(), y.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [_.isCardNavigationActive, _.focusedCardElementIndex, _.cardElements.length]), ye(() => {
    const y = () => {
      if (C === "cards" && h.current) {
        const { columns: z, rows: Y } = se(h);
        W((K) => ({
          ...K,
          gridColumns: z,
          gridRows: Y
        }));
      }
    }, g = setTimeout(y, 200), R = () => {
      setTimeout(y, 100);
    };
    return window.addEventListener("resize", R), () => {
      clearTimeout(g), window.removeEventListener("resize", R);
    };
  }, [C, s, se]), ye(() => {
    const y = b.tabLoadingStates.length, g = s.length;
    y !== g && M({ type: "ADJUST_ARRAYS", payload: { newLength: g } });
  }, [s.length, b.tabLoadingStates.length]), ye(() => {
    F && l !== b.selectedIndex && M({ type: "SET_SELECTED_INDEX", payload: l });
  }, [F, l, b.selectedIndex]);
  const ie = te((y) => {
    y >= 0 && y < s.length && !s[y].disabled && (M({ type: "SET_SELECTED_INDEX", payload: y }), c?.(y));
  }, [s, c]), le = te((y) => {
    console.log("Card selected:", y), M({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: y
    });
  }, []), j = te((y) => {
    const g = S.current[y];
    g && (g.focus(), g.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), q = te((y) => {
    const g = S.current[y];
    if (!g) return [];
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
    ].join(", "), z = g.querySelectorAll(R);
    return Array.from(z).map((Y, K) => ({
      id: Y.id || `card-${y}-element-${K}`,
      element: Y,
      label: Y.getAttribute("aria-label") || Y.textContent?.trim() || Y.getAttribute("title") || `Element ${K + 1}`,
      type: Y.tagName.toLowerCase() === "button" ? "button" : Y.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(Y.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), H = xe(null), O = te((y) => {
    const g = H.current;
    if (!g) return;
    const R = document.createElement("div");
    R.setAttribute("aria-live", "polite"), R.setAttribute("aria-atomic", "true"), R.className = "sr-only", R.textContent = y, g.appendChild(R), setTimeout(() => {
      g.contains(R) && g.removeChild(R);
    }, 1e3);
  }, []), V = te((y) => {
    const g = y.filter((z) => z.sortable !== !1), R = [
      { value: "", label: "Sort by..." }
    ];
    return g.forEach((z) => {
      const Y = z.label || z.key;
      z.key === "name" ? R.push(
        { value: `${z.key}-asc`, label: `${Y} (A-Z)` },
        { value: `${z.key}-desc`, label: `${Y} (Z-A)` }
      ) : z.key === "ews_score" || z.key.includes("score") ? R.push(
        { value: `${z.key}-desc`, label: `${Y} (High-Low)` },
        { value: `${z.key}-asc`, label: `${Y} (Low-High)` }
      ) : z.key === "age" || z.key.includes("date") || z.key.includes("time") ? R.push(
        { value: `${z.key}-desc`, label: `${Y} (Oldest-Youngest)` },
        { value: `${z.key}-asc`, label: `${Y} (Youngest-Oldest)` }
      ) : R.push(
        { value: `${z.key}-asc`, label: `${Y} (A-Z)` },
        { value: `${z.key}-desc`, label: `${Y} (Z-A)` }
      );
    }), R;
  }, []), he = te((y, g) => g ? [...y].sort((R, z) => {
    const Y = R[g.key], K = z[g.key];
    if (Y == null && K == null) return 0;
    if (Y == null) return 1;
    if (K == null) return -1;
    const oe = Number(Y), ae = Number(K);
    if (!isNaN(oe) && !isNaN(ae))
      return g.direction === "asc" ? oe - ae : ae - oe;
    const Z = String(Y).toLowerCase(), ce = String(K).toLowerCase(), De = Z.localeCompare(ce);
    return g.direction === "asc" ? De : -De;
  }) : y, []), f = te((y) => {
    if (!y) {
      W((Z) => ({ ...Z, cardSortConfig: null })), O("Card sorting cleared");
      return;
    }
    const [g, R] = y.split("-"), z = { key: g, direction: R };
    W((Z) => ({ ...Z, cardSortConfig: z }));
    const oe = s[b.selectedIndex]?.columns.find((Z) => Z.key === g)?.label || g;
    O(`Cards sorted by ${oe} in ${R === "asc" ? "ascending" : "descending"} order`);
  }, [s, b.selectedIndex, O]), T = te((y) => {
    const z = s[b.selectedIndex]?.columns.find((K) => K.key === y.key)?.label || y.key, Y = y.direction === "asc" ? "ascending" : "descending";
    return `${z} (${Y})`;
  }, [s, b.selectedIndex]), G = te((y) => {
    const g = s[b.selectedIndex];
    if (o) {
      const R = b.sortConfig;
      return !R || R.length === 0 ? y : [...y].sort((z, Y) => {
        for (const { key: K, direction: oe } of R) {
          let ae = z[K], Z = Y[K];
          const ce = g?.columns.find((Le) => Le.key === K);
          if (ce?.cardRenderer ? (ae = ce.cardRenderer(z), Z = ce.cardRenderer(Y)) : ce?.render && (ae = ce.render(z), Z = ce.render(Y)), ae == null && Z == null) continue;
          if (ae == null) return oe === "asc" ? -1 : 1;
          if (Z == null) return oe === "asc" ? 1 : -1;
          const De = Number(ae), ke = Number(Z);
          if (!isNaN(De) && !isNaN(ke)) {
            const Le = De - ke;
            if (Le !== 0) return oe === "asc" ? Le : -Le;
            continue;
          }
          const we = String(ae).toLowerCase(), tt = String(Z).toLowerCase(), Fe = we.localeCompare(tt);
          if (Fe !== 0) return oe === "asc" ? Fe : -Fe;
        }
        return 0;
      });
    } else
      return he(y, _.cardSortConfig);
  }, [o, b.sortConfig, _.cardSortConfig, he, s, b.selectedIndex]), E = te((y, g) => {
    const R = q(y), z = R[g];
    if (z) {
      z.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const Y = `Focused on ${z.label}, ${z.type} ${g + 1} of ${R.length} within card`;
      O(Y);
    }
  }, [q, O]), A = te((y) => {
    D.current[y]?.focus();
  }, []), U = te(() => {
    const y = k.current[0];
    if (!y) return [];
    const g = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), R = y.querySelectorAll(g);
    return Array.from(R);
  }, []), N = te((y) => {
    if (y === 0) {
      const g = k.current[0];
      if (g) {
        g.focus();
        const z = `Sort controls region with ${U().length} interactive elements. Press Enter or Space to navigate between controls.`;
        O(z);
      }
    } else {
      const g = U(), R = y - 1, z = g[R];
      if (z) {
        z.focus();
        const Y = z.tagName.toLowerCase() === "select", K = z.tagName.toLowerCase() === "button", oe = Y ? "dropdown" : K ? "button" : "control", ae = Y ? ". Use Space key to open dropdown" : "", Z = `${oe} ${R + 1} of ${g.length}${ae}`;
        O(Z);
      }
    }
  }, [U, O]), ue = te((y, g) => {
    const { key: R } = y, z = s[b.selectedIndex], Y = z?.data.length || 0;
    if (R === "ArrowLeft" && y.shiftKey) {
      y.preventDefault(), y.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (R === "ArrowRight" && y.shiftKey) {
      y.preventDefault(), y.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!_.isCardNavigationActive) {
      switch (R) {
        case "ArrowUp":
          if (y.preventDefault(), g === 0)
            W((Z) => ({ ...Z, focusArea: "tabs" })), A(b.selectedIndex);
          else {
            const Z = ne(g, "up", Y, _.gridColumns);
            Z !== g && (W((ce) => ({ ...ce, focusedCardIndex: Z })), j(Z), O(`Moved to card ${Z + 1} of ${Y}`));
          }
          break;
        case "ArrowDown":
          y.preventDefault();
          const K = ne(g, "down", Y, _.gridColumns);
          K !== g && (W((Z) => ({ ...Z, focusedCardIndex: K })), j(K), O(`Moved to card ${K + 1} of ${Y}`));
          break;
        case "ArrowLeft":
          y.preventDefault();
          const oe = ne(g, "left", Y, _.gridColumns);
          oe !== g ? (W((Z) => ({ ...Z, focusedCardIndex: oe })), j(oe), O(`Moved to card ${oe + 1} of ${Y}`)) : b.selectedIndex > 0 && (M({ type: "SET_SELECTED_INDEX", payload: b.selectedIndex - 1 }), W((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => A(b.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          y.preventDefault();
          const ae = ne(g, "right", Y, _.gridColumns);
          ae !== g ? (W((Z) => ({ ...Z, focusedCardIndex: ae })), j(ae), O(`Moved to card ${ae + 1} of ${Y}`)) : b.selectedIndex < s.length - 1 && (M({ type: "SET_SELECTED_INDEX", payload: b.selectedIndex + 1 }), W((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => A(b.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (z?.data[g]) {
            y.preventDefault(), W((ce) => ({
              ...ce,
              selectedCardIndex: g
            }));
            const Z = q(g);
            Z.length > 0 ? (W((ce) => ({
              ...ce,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: Z,
              selectedCardIndex: g
              // Ensure selection is maintained
            })), O(`Card ${g + 1} selected and navigation activated. ${Z.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : O(`Card ${g + 1} selected.`);
          }
          break;
        case " ":
          if (z?.data[g]) {
            y.preventDefault(), W((ce) => ({
              ...ce,
              selectedCardIndex: ce.selectedCardIndex === g ? -1 : g
            }));
            const Z = _.selectedCardIndex === g;
            O(`Card ${g + 1} ${Z ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (R) {
      case "ArrowUp":
      case "ArrowLeft":
        y.preventDefault();
        const K = Math.max(0, _.focusedCardElementIndex - 1);
        W((ce) => ({ ...ce, focusedCardElementIndex: K })), E(g, K);
        break;
      case "ArrowDown":
      case "ArrowRight":
        y.preventDefault();
        const oe = Math.min(_.cardElements.length - 1, _.focusedCardElementIndex + 1);
        W((ce) => ({ ...ce, focusedCardElementIndex: oe })), E(g, oe);
        break;
      case "Enter":
        y.preventDefault();
        const ae = _.cardElements[_.focusedCardElementIndex];
        ae && (ae.element.click(), O(`Activated ${ae.label}`));
        break;
      case " ":
        y.preventDefault();
        const Z = _.cardElements[_.focusedCardElementIndex];
        if (Z) {
          const ce = new MouseEvent("dblclick", { bubbles: !0 });
          Z.element.dispatchEvent(ce), O(`Double-clicked ${Z.label}`);
        }
        break;
      case "Escape":
        y.preventDefault(), W((ce) => ({
          ...ce,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => j(g), 0), O("Exited card navigation, returned to card level");
        break;
      case "Home":
        y.preventDefault(), _.cardElements.length > 0 && (W((ce) => ({ ...ce, focusedCardElementIndex: 0 })), E(g, 0));
        break;
      case "End":
        if (y.preventDefault(), _.cardElements.length > 0) {
          const ce = _.cardElements.length - 1;
          W((De) => ({ ...De, focusedCardElementIndex: ce })), E(g, ce);
        }
        break;
    }
  }, [_, b.selectedIndex, s, le, j, A, W, q, E, O]), Q = te((y) => {
    const g = D.current[y], R = g?.parentElement;
    if (!g || !R) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const z = g.getBoundingClientRect(), Y = R.getBoundingClientRect();
    z.left >= Y.left && z.right <= Y.right || (console.log("Tab not visible, scrolling into view (mobile)"), g.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), re = te((y, g) => {
    if (C !== "cards")
      return;
    const { key: R } = y;
    switch (R) {
      case "ArrowLeft":
        y.preventDefault();
        const z = g > 0 ? g - 1 : s.length - 1;
        ie(z), W((ae) => ({ ...ae, focusedTabIndex: z })), D.current[z]?.focus(), Q(z);
        break;
      case "ArrowRight":
        y.preventDefault();
        const Y = g < s.length - 1 ? g + 1 : 0;
        ie(Y), W((ae) => ({ ...ae, focusedTabIndex: Y })), D.current[Y]?.focus(), Q(Y);
        break;
      case "ArrowDown":
        y.preventDefault();
        const K = s[b.selectedIndex];
        K && K.columns && K.columns.length > 0 ? (W((ae) => ({
          ...ae,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), N(0)) : (W((ae) => ({
          ...ae,
          focusArea: "cards",
          focusedCardIndex: 0
        })), j(0));
        break;
      case "Home":
        y.preventDefault(), ie(0), W((ae) => ({ ...ae, focusedTabIndex: 0 })), D.current[0]?.focus(), Q(0);
        break;
      case "End":
        y.preventDefault();
        const oe = s.length - 1;
        ie(oe), W((ae) => ({ ...ae, focusedTabIndex: oe })), D.current[oe]?.focus(), Q(oe);
        break;
      case "Enter":
      case " ":
        y.preventDefault(), ie(g);
        break;
    }
  }, [s.length, ie, C, j, W, Q]), J = te((y, g) => {
    if (C !== "cards")
      return;
    const { key: R } = y, z = s[b.selectedIndex];
    if (g === 0 && !_.isSortControlsActive) {
      switch (R) {
        case "ArrowUp":
          y.preventDefault(), W((K) => ({
            ...K,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), A(b.selectedIndex);
          break;
        case "ArrowDown":
          y.preventDefault(), z?.data && z.data.length > 0 && (W((K) => ({
            ...K,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), j(0));
          break;
        case "Enter":
        case " ":
          y.preventDefault();
          const Y = U();
          if (Y.length > 0) {
            W((oe) => ({
              ...oe,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), N(1);
            const K = `Entered sort controls navigation mode. ${Y.length} controls available. Use arrow keys to navigate between controls.`;
            O(K);
          }
          break;
        case "Escape":
          y.preventDefault(), W((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), A(b.selectedIndex);
          break;
      }
      return;
    }
    if (_.isSortControlsActive) {
      const K = U().length;
      switch (R) {
        case "ArrowLeft":
          y.preventDefault();
          const oe = _.focusedSortControlIndex > 1 ? _.focusedSortControlIndex - 1 : K;
          W((Z) => ({ ...Z, focusedSortControlIndex: oe })), N(oe);
          break;
        case "ArrowRight":
          y.preventDefault();
          const ae = _.focusedSortControlIndex < K ? _.focusedSortControlIndex + 1 : 1;
          W((Z) => ({ ...Z, focusedSortControlIndex: ae })), N(ae);
          break;
        case "ArrowDown":
          if (y.preventDefault(), _.isSortControlsActive) {
            const Z = _.focusedSortControlIndex < K ? _.focusedSortControlIndex + 1 : 1;
            W((ce) => ({ ...ce, focusedSortControlIndex: Z })), N(Z);
          } else
            z?.data && z.data.length > 0 && (W((Z) => ({
              ...Z,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), j(0));
          break;
        case "ArrowUp":
          y.preventDefault(), W((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), N(0);
          break;
        case "Escape":
          y.preventDefault(), W((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), A(b.selectedIndex);
          break;
      }
    }
  }, [C, s, b.selectedIndex, _.isSortControlsActive, _.focusedSortControlIndex, N, A, j, W, O]);
  if (C === "cards") {
    const y = s[b.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${B || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": u,
          "aria-describedby": `${d || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
          "aria-orientation": m,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((g, R) => {
            const z = R === b.selectedIndex, Y = g.disabled || v;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${g.id}`,
                "aria-controls": `panel-${g.id}`,
                "aria-selected": z,
                "aria-disabled": Y,
                tabIndex: z ? 0 : -1,
                ref: (K) => {
                  D.current[R] = K;
                },
                onClick: () => ie(R),
                onKeyDown: (K) => re(K, R),
                disabled: Y,
                className: [
                  "aria-tabs-datagrid__tab",
                  z ? "aria-tabs-datagrid__tab--selected" : "",
                  Y ? "aria-tabs-datagrid__tab--disabled" : ""
                ].filter(Boolean).join(" "),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: g.label }),
                  b.tabLoadingStates[R] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  b.tabErrors[R] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              g.id
            );
          })
        }
      ),
      y && y.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          Na,
          {
            sortConfig: b.sortConfig || [],
            columns: y.columns.map((g) => ({ key: g.key, label: g.label })),
            onSortChange: (g) => {
              M({ type: "SET_SORT", payload: g });
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
            ref: (g) => {
              k.current[0] = g;
            },
            onKeyDown: (g) => J(g, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${y.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  oa,
                  {
                    id: `card-sort-${y.id}`,
                    name: `card-sort-${y.id}`,
                    value: _.cardSortConfig ? `${_.cardSortConfig.key}-${_.cardSortConfig.direction}` : "",
                    onChange: (g) => f(g.target.value),
                    className: "sort-select",
                    children: V(y.columns).map((g) => /* @__PURE__ */ n.jsx("option", { value: g.value, children: g.label }, g.value))
                  }
                )
              ] }),
              _.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  T(_.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  Te,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => f(""),
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
          "aria-label": `${y?.label || "Data"} cards in ${_.gridRows} rows and ${_.gridColumns} columns`,
          "aria-rowcount": _.gridRows,
          "aria-colcount": _.gridColumns,
          id: `panel-${y?.id}`,
          "aria-labelledby": `tab-${y?.id}`,
          children: G(y?.data || []).map((g, R) => {
            const z = _.selectedCardIndex === R, Y = _.focusedCardIndex === R && _.focusArea === "cards", K = _.focusedCardIndex === R && _.focusArea === "card" && _.isCardNavigationActive, oe = R === 0 && _.focusArea !== "cards", ae = Y || oe, Z = P(R, _.gridColumns);
            if (r.cardTemplate) {
              const ke = r.cardTemplate(g, y.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: (we) => {
                    S.current[R] = we;
                  },
                  className: [
                    "aria-tabs-datagrid-adaptive__card-wrapper",
                    z ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                    Y ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                    K ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                  ].filter(Boolean).join(" "),
                  role: "gridcell",
                  "aria-rowindex": Z.row + 1,
                  "aria-colindex": Z.col + 1,
                  "aria-selected": z,
                  "aria-expanded": K,
                  "aria-description": K ? `Card navigation active. ${_.cardElements.length} interactive elements available.` : void 0,
                  tabIndex: ae ? 0 : -1,
                  onClick: () => {
                    W((we) => ({
                      ...we,
                      selectedCardIndex: we.selectedCardIndex === R ? -1 : R
                    })), le(g);
                  },
                  onKeyDown: (we) => ue(we, R),
                  onFocus: () => {
                    W((we) => we.focusedCardIndex !== R || we.focusArea !== "cards" ? {
                      ...we,
                      focusedCardIndex: R,
                      focusArea: "cards"
                    } : we);
                  },
                  children: ke
                },
                `card-${R}`
              );
            }
            const ce = Jl(g, y.columns, L, w), De = [
              ce.className || "",
              z ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              Y ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              K ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                className: [
                  "aria-tabs-datagrid-adaptive__card-wrapper",
                  K ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                ].filter(Boolean).join(" "),
                role: "gridcell",
                "aria-rowindex": Z.row + 1,
                "aria-colindex": Z.col + 1,
                children: /* @__PURE__ */ n.jsx(
                  ja,
                  {
                    ...ce,
                    ref: (ke) => {
                      S.current[R] = ke;
                    },
                    className: De,
                    "aria-selected": z,
                    "aria-expanded": K,
                    "aria-label": `${ce["aria-label"] || ce.heading}. ${K ? `Card navigation active with ${_.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                    tabIndex: ae ? 0 : -1,
                    onClick: () => {
                      W((ke) => ({
                        ...ke,
                        selectedCardIndex: ke.selectedCardIndex === R ? -1 : R
                      })), le(g);
                    },
                    onKeyDown: (ke) => ue(ke, R),
                    onFocus: () => {
                      _.isCardNavigationActive || W((ke) => ke.focusedCardIndex !== R || ke.focusArea !== "cards" ? {
                        ...ke,
                        focusedCardIndex: R,
                        focusArea: "cards",
                        // Reset card navigation state when switching cards
                        focusedCardElementIndex: 0,
                        cardElements: []
                      } : ke);
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
          ref: H,
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
  return C === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${B || ""}`, children: /* @__PURE__ */ n.jsx(
    Fn,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: u,
      ariaDescription: d,
      orientation: m,
      id: p,
      disabled: v,
      selectedIndex: l,
      onTabChange: c,
      className: "aria-tabs-datagrid-adaptive__table--hybrid",
      ...x
    }
  ) }) : /* @__PURE__ */ n.jsx(
    Fn,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: u,
      ariaDescription: d,
      orientation: m,
      id: p,
      disabled: v,
      selectedIndex: l,
      onTabChange: c,
      ...x
    }
  );
}, La = (e) => {
  const t = Bn.find((r) => r.value === e);
  return t ? t.icon : null;
}, Xl = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => La(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Ql = (e) => mr(e, [
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
]), ec = {
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
  booleanRenderer: (e) => La(e),
  getDataId: (e) => `financial-${e.id}`
}, tc = (e) => mr(e, [
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
]), nc = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Xl,
    createTabs: Ql
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: ec,
    createTabs: tc
  }
}, Zr = (e, t) => {
  const r = nc[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, Ea = [
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
], rc = [
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
], ac = [
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
], sc = [
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
], Jr = [
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
], Xr = [
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
], Qr = [
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
], oc = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, ic = () => [
  {
    id: "patients",
    label: "Patients",
    data: Ea,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Ta,
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
    data: rc,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Da,
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
    data: ac,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Fa,
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
    data: sc,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Ba,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], lc = () => {
  const [e, t] = pe("healthcare"), r = _e(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: El,
      tabPanels: ic(),
      data: Ea
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Zr("ecommerce", Jr),
      data: Jr
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Zr("financial", Xr),
      data: Xr
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: oc,
      tabPanels: mr(Qr, [
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
      data: Qr
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
        Te,
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
      Fn,
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
}, Df = lc, Ma = (e) => /* @__PURE__ */ n.jsx(ia, { ...e }), Ff = ({
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
  account: m,
  organisation: p,
  logo: v,
  className: B,
  ...x
}) => {
  const C = {
    service: c,
    navigation: u,
    search: d,
    account: m,
    organisation: p,
    logo: v,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ca, { ...s }),
    /* @__PURE__ */ n.jsx(ha, { ...C }),
    /* @__PURE__ */ n.jsx(Ma, { className: B, ...x, children: /* @__PURE__ */ n.jsx(la, { size: o, children: /* @__PURE__ */ n.jsx(Bt, { children: /* @__PURE__ */ n.jsxs(ar, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Ze, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(fa, { ...l })
  ] });
}, Bf = ({
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
  logo: m,
  className: p,
  ...v
}) => {
  const B = {
    service: {
      text: u,
      href: d
    },
    logo: m,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ca, { ...s }),
    /* @__PURE__ */ n.jsx(ha, { ...B }),
    /* @__PURE__ */ n.jsxs(Ma, { className: p, ...v, children: [
      c && /* @__PURE__ */ n.jsx(aa, { ...c }),
      /* @__PURE__ */ n.jsx(la, { size: o, children: /* @__PURE__ */ n.jsx(Bt, { children: /* @__PURE__ */ n.jsxs(ar, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Ze, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(fa, { ...l })
  ] });
}, lt = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function ea() {
  return typeof window > "u" ? lt.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function pr() {
  const [e, t] = fe.useState(ea());
  fe.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(ea());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = fe.useCallback((s) => e >= lt[s], [e]), a = fe.useCallback((s) => e < lt[s], [e]), o = fe.useCallback((s, i) => e >= lt[s] && e < lt[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: o,
    /** Raw numeric values */
    values: lt
  };
}
function If(e) {
  const { width: t, values: r } = pr();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function cc(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = fe.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = fe.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return fe.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    o ? c.set(r, String(o)) : c.delete(r), c.set(a, i ? "1" : "0");
    const u = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", u);
  }, [o, i, t, r, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const dc = ({ className: e }) => /* @__PURE__ */ n.jsx("svg", { className: e, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z" }) }), uc = ({ className: e }) => /* @__PURE__ */ n.jsx("svg", { className: e, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z" }) });
function hc(e) {
  const { up: t } = pr();
  return e || (t("medium") ? "two-column" : "list");
}
function fc(e) {
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
    isLoading: m = !1,
    emptyState: p,
    a11y: v,
    className: B,
    getId: x = (de) => de.id,
    orientation: C = "vertical",
    autoEnableThirdColumn: F = !0,
    onDrillChange: I,
    navigationInstructions: L = "Use arrow keys to navigate, Enter to open.",
    initialFocus: w = "first",
    skipFocusOnSelect: $ = !1,
    skipAnnouncements: b = !1,
    onFocusChange: M,
    syncUrl: D = !1,
    urlParamSelected: S = "nsv",
    urlParamDrill: k = "nsvDrill",
    urlSyncDebounceMs: h = 0,
    lazySecondary: _ = !1,
    navFooter: W,
    collapsibleNav: se = !1,
    navInitiallyCollapsed: P = !1,
    onNavCollapseChange: ee,
    collapseToggleLabelShow: ne = "Show navigation",
    collapseToggleLabelHide: ie = "Hide navigation",
    collapseToggleIconShow: le,
    collapseToggleIconHide: j,
    persistNavCollapsed: q,
    navCollapsedStorageKey: H = "nsvCollapsed",
    navCollapsedUrlParam: O = "nsvCollapsed",
    autoContentHeader: V,
    contentHeaderLevel: he = 2,
    renderContentHeader: f
  } = e, { up: T } = pr(), G = T("medium");
  let A = hc(c);
  !c && F && l && T("xlarge") && (A = "three-column");
  const U = cc({
    enabled: D,
    paramSelected: S,
    paramDrill: k
  }), [N, ue] = fe.useState(
    () => U.selectedId !== void 0 ? U.selectedId : a
  ), Q = r !== void 0 ? r : N, re = t.find((de) => x(de) === Q), J = fe.useRef(null), y = fe.useRef(null), g = !!re && (A === "list" || A === "cards"), R = fe.useMemo(() => V === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : V === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : V === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: V.mobile !== void 0 ? V.mobile : !0,
    tablet: V.tablet || !1,
    desktop: V.desktop || !1
  }, [V]), z = T("medium") && !T("xlarge"), Y = T("xlarge"), K = !!re && (g && R.mobile || // mobile detail view (list/cards)
  !g && z && R.tablet || // tablet two-column
  !g && Y && R.desktop), oe = `h${he}`, ae = re ? fe.createElement(oe, { style: { marginLeft: g ? 32 : 0 } }, re.label) : null, Z = g ? "mobile" : z ? "tablet" : "desktop", ce = g && R.mobile ? /* @__PURE__ */ n.jsx(
    aa,
    {
      element: "button",
      text: d,
      onClick: () => we(void 0, void 0)
    }
  ) : void 0, De = fe.useMemo(() => !K || !re ? null : f ? f({
    item: re,
    detailActive: g,
    context: Z,
    backLink: ce,
    defaultHeading: ae
  }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    ce,
    ae
  ] }), [K, re, f, g, Z, ce, ae]);
  fe.useEffect(() => {
    if (!D) return;
    const de = A === "three-column";
    let ve = !1;
    const me = () => {
      ve || (U.selectedId !== Q && U.setSelectedId(Q), U.drilledIn !== de && U.setDrilledIn(de));
    };
    if (h && h > 0) {
      const be = setTimeout(me, h);
      return () => {
        ve = !0, clearTimeout(be);
      };
    } else
      me();
  }, [D, U, Q, A, h]), fe.useEffect(() => {
    if (!D) return;
    const de = () => {
      const ve = new URLSearchParams(window.location.search), me = ve.get(S);
      ve.get(k), ue(me === null ? void 0 : me);
    };
    return window.addEventListener("popstate", de), () => window.removeEventListener("popstate", de);
  }, [D, S, k, c, l]);
  const ke = fe.useRef(0), we = fe.useCallback((de, ve) => {
    r === void 0 && ue(de), o?.(de, ve);
  }, [r, o]);
  fe.useEffect(() => {
    if (!$ && g && y.current) {
      const de = setTimeout(() => y.current?.focus(), 30);
      return () => clearTimeout(de);
    }
  }, [g, Q, $]);
  const tt = fe.useRef(null), [Fe, Le] = fe.useState(() => w === "first" ? 0 : -1);
  fe.useEffect(() => {
    if (!tt.current) return;
    const de = Array.from(tt.current.querySelectorAll("button[data-nav-item]"));
    if (de.forEach((ve, me) => ve.tabIndex = (Fe === -1 ? me === 0 && w === "first" : me === Fe) ? 0 : -1), Fe >= 0) {
      de[Fe]?.focus();
      const me = t[Fe];
      M?.(me ? x(me) : void 0, me, Fe);
    }
  }, [Fe, t, w, M, x]);
  const Ts = (de) => {
    const ve = C === "vertical" ? "ArrowDown" : "ArrowRight", me = C === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (de.key === ve)
      de.preventDefault(), Le((be) => Math.min(t.length - 1, be + 1));
    else if (de.key === me)
      de.preventDefault(), Le((be) => Math.max(0, be - 1));
    else if (de.key === "Home")
      de.preventDefault(), Le(0);
    else if (de.key === "End")
      de.preventDefault(), Le(t.length - 1);
    else if (de.key === "Enter" || de.key === " ") {
      de.preventDefault();
      const be = t[Fe];
      be && !be.disabled && we(x(be), be);
    }
  }, Ds = fe.useMemo(() => {
    if (q && (q === "url" || q === "both") && typeof window < "u") {
      const ve = new URLSearchParams(window.location.search).get(O);
      if (ve === "1") return !0;
      if (ve === "0") return !1;
    }
    if (q && (q === "localStorage" || q === "both") && typeof window < "u")
      try {
        const de = window.localStorage.getItem(H);
        if (de === "1") return !0;
        if (de === "0") return !1;
      } catch {
      }
    return P;
  }, [q, P, H, O]), [Ee, Fs] = fe.useState(Ds);
  fe.useEffect(() => {
    ee?.(Ee);
  }, [Ee, ee]);
  const Bs = fe.useCallback(() => {
    G && se && Fs((de) => !de);
  }, [G, se]);
  fe.useEffect(() => {
    if (q && !(typeof window > "u")) {
      if (q === "localStorage" || q === "both")
        try {
          window.localStorage.setItem(H, Ee ? "1" : "0");
        } catch {
        }
      if (q === "url" || q === "both") {
        const de = new URLSearchParams(window.location.search);
        de.set(O, Ee ? "1" : "0");
        const ve = `${window.location.pathname}?${de.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", ve);
      }
    }
  }, [Ee, q, H, O]);
  const Is = [
    "nhs-navigation-split-view",
    u ? "nhs-navigation-split-view--animated" : "",
    g ? "nhs-navigation-split-view--detail-active" : "",
    A === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    se && G && Ee ? "nhs-navigation-split-view--nav-collapsed" : "",
    B
  ].filter(Boolean).join(" "), mn = fe.useRef(null);
  fe.useEffect(() => {
    if (!b && mn.current) {
      const de = re ? `Selected ${re.label}` : "Selection cleared";
      mn.current.textContent = de;
    }
  }, [re, b]), fe.useEffect(() => {
    !g && Q == null && tt.current && tt.current.querySelectorAll("button[data-nav-item]")[ke.current]?.focus();
  }, [g, Q]);
  const Qe = A === "three-column", [pn, Rs] = fe.useState(!1);
  fe.useEffect(() => {
    Qe && !pn && Rs(!0);
  }, [Qe, pn]);
  const gr = fe.useRef(Qe);
  fe.useEffect(() => {
    gr.current !== Qe && (I?.(Qe), gr.current = Qe);
  }, [Qe, I]);
  const Ls = () => {
    if (A === "cards")
      return /* @__PURE__ */ n.jsxs("ul", { className: "nhs-navigation-split-view__cards", role: "listbox", "aria-activedescendant": Q ? String(Q) : void 0, children: [
        t.map((me) => {
          const be = x(me), Ct = be === Q;
          return /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", role: "option", "aria-selected": Ct, children: /* @__PURE__ */ n.jsxs(
            "button",
            {
              id: String(be),
              type: "button",
              className: "nhs-navigation-split-view__card",
              "data-selected": Ct || void 0,
              "data-disabled": me.disabled || void 0,
              disabled: me.disabled,
              onClick: () => !me.disabled && we(be, me),
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
        t.length === 0 && !m && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", "aria-disabled": "true", children: p || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
      ] });
    const de = "nsv-nav-instructions", ve = fe.useMemo(() => {
      const me = ({ item: be, idx: Ct, selected: gn }) => {
        const br = x(be);
        return /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__list-item", role: "option", "aria-selected": gn, children: /* @__PURE__ */ n.jsxs(
          "button",
          {
            id: String(br),
            "data-nav-item": !0,
            type: "button",
            className: "nhs-navigation-split-view__item-button",
            "data-selected": gn || void 0,
            "data-disabled": be.disabled || void 0,
            disabled: be.disabled,
            "aria-current": gn ? "true" : void 0,
            onClick: () => {
              be.disabled || (ke.current = Ct, we(br, be));
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
    }, [x, we, s]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: tt,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Ts,
          role: "listbox",
          "aria-describedby": de,
          "aria-activedescendant": Q ? String(Q) : void 0,
          children: [
            t.map((me, be) => /* @__PURE__ */ n.jsx(ve, { item: me, idx: be, selected: x(me) === Q }, x(me))),
            t.length === 0 && !m && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__list-item", "aria-disabled": "true", children: p || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
          ]
        }
      ),
      /* @__PURE__ */ n.jsx("div", { id: de, style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: L })
    ] });
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: J,
      className: Is,
      "aria-label": v?.rootLabel,
      "data-layout": A,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__panes", "data-active-detail": g || void 0, style: { transform: g ? "translateX(-100%)" : void 0 }, children: [
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "nhs-navigation-split-view__nav-pane",
              role: "navigation",
              "aria-label": v?.navigationLabel || "Items",
              "data-collapsed": Ee || void 0,
              children: [
                se && G && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: Bs,
                    className: "nhs-navigation-split-view__nav-collapse-btn",
                    "aria-label": Ee ? ne : ie,
                    title: Ee ? ne : ie,
                    children: Ee ? le || /* @__PURE__ */ n.jsx(uc, {}) : j || /* @__PURE__ */ n.jsx(dc, {})
                  }
                ) }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Ls() }),
                W && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-footer", role: "contentinfo", children: W })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              ref: y,
              className: "nhs-navigation-split-view__content-pane",
              role: "region",
              "aria-label": v?.contentLabel || "Content",
              "data-has-selection": !!re || void 0,
              tabIndex: -1,
              children: [
                K && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: De }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__content-inner", style: { padding: 32, flex: 1, overflowWrap: "break-word", wordBreak: "break-word" }, children: i(re) })
              ]
            }
          ),
          A === "three-column" && (!_ || pn) && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhs-navigation-split-view__secondary-pane",
              role: "region",
              "aria-label": v?.secondaryContentLabel || "Secondary",
              children: /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0, overflowWrap: "break-word", wordBreak: "break-word" }, children: l?.(re) })
            }
          )
        ] }),
        /* @__PURE__ */ n.jsx("div", { ref: mn, "aria-live": "polite", "aria-atomic": "true", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" } }),
        /* @__PURE__ */ n.jsx("div", { "aria-live": "polite", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: Qe ? "Expanded to three column layout" : "In two column layout" })
      ] })
    }
  );
}
fc.displayName = "NavigationSplitView";
const mc = "150ms", pc = "300ms", gc = "500ms", bc = "cubic-bezier(0.4, 0, 1, 1)", xc = "cubic-bezier(0, 0, 0.2, 1)", yc = "cubic-bezier(0.4, 0, 0.2, 1)", _c = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", vc = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", kc = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", wc = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Sc = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Cc = "1px", jc = "2px", Nc = "4px", Tc = "4px", Dc = "4px", Fc = "2px", Bc = "1px", Ic = "0px", Rc = "4px", Lc = "8px", Ec = "12px", $a = "#d8dde0", Aa = "#4c6272", Ha = "#d8dde0", Pa = "#aeb7bd", za = "#d5281b", Wa = "#005eb8", Oa = "#ffffff", Ua = "#212b32", Ga = "#007f3b", Va = "#330072", Ya = "#7c2855", qa = "#d5281b", Ka = "#ffeb3b", Za = "#fff9c4", Ja = "#ffb81c", Xa = "#ed8b00", Qa = "#00a499", es = "#ae2573", ts = "#4c6272", ns = "#768692", rs = "#aeb7bd", as = "#d8dde0", ss = "#f0f4f5", Mc = "#212b32", $c = "#4c6272", Ac = "#ffffff", Hc = "#212b32", Pc = "#005eb8", zc = "#7c2855", Wc = "#003087", Oc = "#330072", Uc = "#ffeb3b", Gc = "#212b32", Vc = "#d8dde0", Yc = "#ffffff33", qc = "#d5281b", Kc = "#4c6272", Zc = "#ffffff", Jc = "#007f3b", Xc = "#ffffff", Qc = "#006530", ed = "#004021", td = "#004021", nd = "#00000000", rd = "#ffffff", ad = "#005eb8", sd = "#005eb8", od = "#d9e5f2", id = "#c7daf0", ld = "#005eb8", cd = "#ffffff", dd = "#212b32", ud = "#d9dde0", hd = "#b3bcc2", fd = "#b3bcc2", md = "#d5281b", pd = "#aa2016", gd = "#6a140e", bd = "#6a140e", xd = "#005eb8", yd = "#004b93", _d = "#002f5c", vd = "#002f5c", kd = "8px", wd = "16px", Sd = "12px", Cd = "16px", jd = "4px", Nd = "40px", Td = "4px", Dd = "40px", Fd = "12px", Bd = "16px", Id = "32px", Rd = "16px", Ld = "20px", Ed = "28px", Md = "9px", $d = "2px", Ad = "16px", Hd = "24px", Pd = "8px", zd = "24px", Wd = "16px", Od = "4px", Ud = "4px", Gd = "4px", Vd = "8px", Yd = "4px", qd = "16px", Kd = "#007f3b", Zd = "#006530", Jd = "#004021", Xd = "#d8dde0", Qd = "#ffffff", eu = "#768692", tu = "#00000000", nu = "#ffeb3b", ru = "#00000000", au = "#ffffff", su = "#d9e5f2", ou = "#c7daf0", iu = "#005eb8", lu = "#005eb8", os = "8px", is = "16px", ls = "12px", cs = "16px", cu = "2px", du = "4px", uu = "4px", hu = "600", fu = "#ffffff", mu = "#d8dde0", pu = "#aeb7bd", gu = "#f0f4f5", bu = "#212b32", xu = "#212b32", yu = "#005eb8", ds = "16px", us = "32px", hs = "16px", _u = "1px", vu = "4px", ku = "none", wu = "0 2px 4px rgba(0, 0, 0, 0.1)", Su = "#ffffff", Cu = "#ffffff", ju = "#d8dde0", Nu = "#ffffff", Tu = "#4c6272", Du = "#ffeb3b", Fu = "#d5281b", Bu = "#aeb7bd", Iu = "#212b32", Ru = "#4c6272", Lu = "#768692", Eu = "#212b32", Mu = "#ffffff", $u = "600", Au = "#d5281b", Hu = "600", Pu = "#4c6272", fs = "4px", ms = "40px", ps = "40px", gs = "12px", zu = "2px", Wu = "4px", Ou = "0px", Uu = "16px", Gu = "18px", Vu = "24px", Yu = "32px", qu = "34px", Ku = "32px", Zu = "40px", Ju = "48px", Xu = "5.4ex", Qu = "7.2ex", eh = "9ex", th = "10.8ex", nh = "20ex", rh = "38ex", ah = "56ex", sh = "44px", oh = "40px", ih = "1020px", lh = "100%", ch = "50%", dh = "33.333%", uh = "25%", hh = "20%", fh = "320px", mh = "641px", ph = "1025px", gh = "1280px", bh = "960px", xh = "32px", yh = "16px", _h = "#d5281b", vh = "#d5281b", kh = "#ffffff", wh = "#007f3b", Sh = "#007f3b", Ch = "#ffffff", jh = "#ffeb3b", Nh = "#ffeb3b", Th = "#212b32", Dh = "#005eb8", Fh = "#005eb8", Bh = "#ffffff", Ih = "#d8dde0", Rh = "#aeb7bd", Lh = "#768692", Eh = "0 4px 0 #004021", Mh = "0 4px 0 #005eb8", $h = "0 4px 0 #6a140e", Ah = "0 4px 0 #ffeb3b", Hh = "none", Ph = "0 2px 4px rgba(0, 0, 0, 0.1)", zh = "4px", Wh = "0px", Oh = "solid", Uh = "0 0 0 3px #ffeb3b", Gh = "0 0 0 3px #ffeb3b", Vh = "none", Yh = "0 1px 3px rgba(0, 0, 0, 0.12)", qh = "0 2px 6px rgba(0, 0, 0, 0.16)", Kh = "0 4px 12px rgba(0, 0, 0, 0.20)", bs = "0", xs = "4px", ys = "8px", _s = "16px", vs = "24px", ks = "32px", ws = "40px", Ss = "48px", Cs = "56px", js = "64px", In = "0", Rn = "0", Ln = "4px", En = "4px", Mn = "8px", $n = "8px", An = "8px", Hn = "16px", Pn = "16px", zn = "24px", Wn = "24px", On = "32px", Un = "32px", Gn = "40px", Vn = "40px", Yn = "48px", qn = "48px", Kn = "56px", Zn = "56px", Jn = "64px", Ht = "Frutiger W01", Pt = "Arial, Helvetica, sans-serif", zt = "sans-serif", Wt = "400", Ot = "600", Ut = "400", Gt = "12px", Vt = "14px", Yt = "12pt", qt = "14px", Kt = "16px", Zt = "12pt", Jt = "16px", Xt = "19px", Qt = "13pt", en = "19px", tn = "22px", nn = "15pt", rn = "22px", an = "26px", sn = "17pt", on = "27px", ln = "36px", cn = "20pt", dn = "33px", un = "48px", hn = "24pt", Xn = "16px", Qn = "24px", $e = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ae = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, He = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Pe = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ze = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, We = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Oe = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ue = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ge = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ve = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Zh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: mc,
  AnimationDurationNormal: pc,
  AnimationDurationSlow: gc,
  AnimationEasingBounce: _c,
  AnimationEasingEaseIn: bc,
  AnimationEasingEaseInOut: yc,
  AnimationEasingEaseOut: xc,
  BorderColorCard: Ha,
  BorderColorCardHover: Pa,
  BorderColorDefault: $a,
  BorderColorError: za,
  BorderColorForm: Aa,
  BorderRadiusLarge: Ec,
  BorderRadiusMedium: Lc,
  BorderRadiusNone: Ic,
  BorderRadiusSmall: Rc,
  BorderWidthCardBottom: Tc,
  BorderWidthDefault: Cc,
  BorderWidthFormElement: jc,
  BorderWidthFormElementError: Nc,
  BorderWidthPanel: Dc,
  BorderWidthTableCell: Bc,
  BorderWidthTableHeader: Fc,
  BreakpointDesktop: ph,
  BreakpointLargeDesktop: gh,
  BreakpointMobile: fh,
  BreakpointTablet: mh,
  ButtonBorderRadius: du,
  ButtonBorderWidth: cu,
  ButtonPrimaryBackgroundActive: Jd,
  ButtonPrimaryBackgroundDefault: Kd,
  ButtonPrimaryBackgroundDisabled: Xd,
  ButtonPrimaryBackgroundHover: Zd,
  ButtonPrimaryBorderDefault: tu,
  ButtonPrimaryBorderFocus: nu,
  ButtonPrimaryTextDefault: Qd,
  ButtonPrimaryTextDisabled: eu,
  ButtonSecondaryBackgroundActive: ou,
  ButtonSecondaryBackgroundDefault: ru,
  ButtonSecondaryBackgroundHover: su,
  ButtonSecondaryBackgroundSolid: au,
  ButtonSecondaryBorderDefault: lu,
  ButtonSecondaryTextDefault: iu,
  ButtonShadowSize: uu,
  ButtonSpacingPaddingHorizontalDesktop: cs,
  ButtonSpacingPaddingHorizontalMobile: is,
  ButtonSpacingPaddingVerticalDesktop: ls,
  ButtonSpacingPaddingVerticalMobile: os,
  ButtonTypographyWeight: hu,
  CardBackgroundDefault: fu,
  CardBorderBottom: gu,
  CardBorderDefault: mu,
  CardBorderHover: pu,
  CardBorderWidthBottom: vu,
  CardBorderWidthDefault: _u,
  CardShadowDefault: ku,
  CardShadowHover: wu,
  CardSpacingHeadingMargin: hs,
  CardSpacingPaddingDesktop: us,
  CardSpacingPaddingMobile: ds,
  CardTextDescription: xu,
  CardTextHeading: bu,
  CardTextLink: yu,
  ColorBorderDefault: Vc,
  ColorBorderSecondary: Yc,
  ColorButtonLoginActive: _d,
  ColorButtonLoginBackground: xd,
  ColorButtonLoginHover: yd,
  ColorButtonLoginShadow: vd,
  ColorButtonPrimaryActive: ed,
  ColorButtonPrimaryBackground: Jc,
  ColorButtonPrimaryHover: Qc,
  ColorButtonPrimaryShadow: td,
  ColorButtonPrimaryText: Xc,
  ColorButtonReverseActive: hd,
  ColorButtonReverseBackground: cd,
  ColorButtonReverseHover: ud,
  ColorButtonReverseShadow: fd,
  ColorButtonReverseText: dd,
  ColorButtonSecondaryActive: id,
  ColorButtonSecondaryBackground: nd,
  ColorButtonSecondaryBackgroundSolid: rd,
  ColorButtonSecondaryBorder: ad,
  ColorButtonSecondaryHover: od,
  ColorButtonSecondaryShadow: ld,
  ColorButtonSecondaryText: sd,
  ColorButtonWarningActive: gd,
  ColorButtonWarningBackground: md,
  ColorButtonWarningHover: pd,
  ColorButtonWarningShadow: bd,
  ColorError: qc,
  ColorFocusBackground: Uc,
  ColorFocusText: Gc,
  ColorFormBackground: Zc,
  ColorFormBorder: Kc,
  ColorGrey1: ts,
  ColorGrey2: ns,
  ColorGrey3: rs,
  ColorGrey4: as,
  ColorGrey5: ss,
  ColorLinkActive: Wc,
  ColorLinkDefault: Pc,
  ColorLinkHover: zc,
  ColorLinkVisited: Oc,
  ColorPrimaryBlack: Ua,
  ColorPrimaryBlue: Wa,
  ColorPrimaryDarkPink: Ya,
  ColorPrimaryGreen: Ga,
  ColorPrimaryPurple: Va,
  ColorPrimaryRed: qa,
  ColorPrimaryWhite: Oa,
  ColorPrimaryYellow: Ka,
  ColorSecondaryAquaGreen: Qa,
  ColorSecondaryOrange: Xa,
  ColorSecondaryPaleYellow: Za,
  ColorSecondaryPink: es,
  ColorSecondaryWarmYellow: Ja,
  ColorTextPrimary: Mc,
  ColorTextPrint: Hc,
  ColorTextReverse: Ac,
  ColorTextSecondary: $c,
  ComponentBlur: Ud,
  ComponentBreadcrumbChevronMarginLeft: Md,
  ComponentBreadcrumbChevronMarginRight: $d,
  ComponentBreadcrumbPaddingTopDesktop: Hd,
  ComponentBreadcrumbPaddingTopMobile: Ad,
  ComponentButtonPaddingDesktopHorizontal: Cd,
  ComponentButtonPaddingDesktopVertical: Sd,
  ComponentButtonPaddingMobileHorizontal: wd,
  ComponentButtonPaddingMobileVertical: kd,
  ComponentButtonShadowSize: jd,
  ComponentCardHeadingMargin: Rd,
  ComponentCardPaddingDesktop: Id,
  ComponentCardPaddingMobile: Bd,
  ComponentDetails: Vd,
  ComponentExpander: Yd,
  ComponentFormCheckboxLabelPadding: Fd,
  ComponentFormCheckboxSize: Dd,
  ComponentFormInputMinHeight: Nd,
  ComponentFormInputPadding: Td,
  ComponentLink: Gd,
  ComponentPagination: qd,
  ComponentPanelPaddingDesktop: Ed,
  ComponentPanelPaddingMobile: Ld,
  ComponentSpread: Od,
  ComponentSummaryListCellPaddingHorizontal: zd,
  ComponentSummaryListCellPaddingVertical: Pd,
  ComponentSummaryListRowMargin: Wd,
  ElevationHigh: Kh,
  ElevationLow: Yh,
  ElevationMedium: qh,
  ElevationNone: Vh,
  FocusOutlineOffset: Wh,
  FocusOutlineStyle: Oh,
  FocusOutlineWidth: zh,
  FocusShadowButton: Gh,
  FocusShadowInput: Uh,
  FontFamilyBase: Ht,
  FontFamilyFallback: Pt,
  FontFamilyPrint: zt,
  FontLineHeightBase: Qn,
  FontSize14Mobile: Gt,
  FontSize14Print: Yt,
  FontSize14Tablet: Vt,
  FontSize16Mobile: qt,
  FontSize16Print: Zt,
  FontSize16Tablet: Kt,
  FontSize19Mobile: Jt,
  FontSize19Print: Qt,
  FontSize19Tablet: Xt,
  FontSize22Mobile: en,
  FontSize22Print: nn,
  FontSize22Tablet: tn,
  FontSize26Mobile: rn,
  FontSize26Print: sn,
  FontSize26Tablet: an,
  FontSize36Mobile: on,
  FontSize36Print: cn,
  FontSize36Tablet: ln,
  FontSize48Mobile: dn,
  FontSize48Print: hn,
  FontSize48Tablet: un,
  FontSizeBase: Xn,
  FontWeightBold: Ot,
  FontWeightLight: Ut,
  FontWeightNormal: Wt,
  FormBorderRadius: Ou,
  FormBorderWidthDefault: zu,
  FormBorderWidthError: Wu,
  FormErrorTextDefault: Au,
  FormErrorTypographyWeight: Hu,
  FormHintTextDefault: Pu,
  FormInputBackgroundDefault: Su,
  FormInputBackgroundDisabled: ju,
  FormInputBackgroundError: Nu,
  FormInputBackgroundFocus: Cu,
  FormInputBorderDefault: Tu,
  FormInputBorderDisabled: Bu,
  FormInputBorderError: Fu,
  FormInputBorderFocus: Du,
  FormInputTextDefault: Iu,
  FormInputTextDisabled: Lu,
  FormInputTextPlaceholder: Ru,
  FormLabelTextDefault: Eu,
  FormLabelTextRequired: Mu,
  FormLabelTypographyWeight: $u,
  FormSpacingCheckboxLabelPadding: gs,
  FormSpacingCheckboxSize: ps,
  FormSpacingInputMinHeight: ms,
  FormSpacingInputPadding: fs,
  GridGutter: xh,
  GridGutterHalf: yh,
  GridPageWidth: bh,
  HeadingsNhsukHeadingL: Ae,
  HeadingsNhsukHeadingM: He,
  HeadingsNhsukHeadingS: Pe,
  HeadingsNhsukHeadingXl: $e,
  HeadingsNhsukHeadingXs: ze,
  LayoutColumnActions: hh,
  LayoutColumnFull: lh,
  LayoutColumnHalf: ch,
  LayoutColumnQuarter: uh,
  LayoutColumnThird: dh,
  LayoutContainerMaxWidth: ih,
  ParagraphsBody: We,
  ParagraphsBodyLarge: Oe,
  ParagraphsBodySmall: Ue,
  ParagraphsLedeText: Ge,
  ParagraphsLedeTextSmall: Ve,
  ShadowButtonDefault: Eh,
  ShadowButtonFocus: Ah,
  ShadowButtonSecondary: Mh,
  ShadowButtonWarning: $h,
  ShadowCardDefault: Hh,
  ShadowCardHover: Ph,
  SizeButtonMinHeightDesktop: oh,
  SizeButtonMinHeightMobile: sh,
  SizeFormControlLarge: Ju,
  SizeFormControlMedium: Zu,
  SizeFormControlSmall: Ku,
  SizeFormInputWidth2xl: rh,
  SizeFormInputWidth3xl: ah,
  SizeFormInputWidthLg: th,
  SizeFormInputWidthMd: eh,
  SizeFormInputWidthSm: Qu,
  SizeFormInputWidthXl: nh,
  SizeFormInputWidthXs: Xu,
  SizeIconExtraLarge: Yu,
  SizeIconLarge: Vu,
  SizeIconMedium: Gu,
  SizeIconNhsDefault: qu,
  SizeIconSmall: Uu,
  Spacing0: bs,
  Spacing1: xs,
  Spacing2: ys,
  Spacing3: _s,
  Spacing4: vs,
  Spacing5: ks,
  Spacing6: ws,
  Spacing7: Ss,
  Spacing8: Cs,
  Spacing9: js,
  SpacingResponsive0Mobile: In,
  SpacingResponsive0Tablet: Rn,
  SpacingResponsive1Mobile: Ln,
  SpacingResponsive1Tablet: En,
  SpacingResponsive2Mobile: Mn,
  SpacingResponsive2Tablet: $n,
  SpacingResponsive3Mobile: An,
  SpacingResponsive3Tablet: Hn,
  SpacingResponsive4Mobile: Pn,
  SpacingResponsive4Tablet: zn,
  SpacingResponsive5Mobile: Wn,
  SpacingResponsive5Tablet: On,
  SpacingResponsive6Mobile: Un,
  SpacingResponsive6Tablet: Gn,
  SpacingResponsive7Mobile: Vn,
  SpacingResponsive7Tablet: Yn,
  SpacingResponsive8Mobile: qn,
  SpacingResponsive8Tablet: Kn,
  SpacingResponsive9Mobile: Zn,
  SpacingResponsive9Tablet: Jn,
  StateDisabledBackground: Ih,
  StateDisabledBorder: Rh,
  StateDisabledText: Lh,
  StateErrorBackground: _h,
  StateErrorBorder: vh,
  StateErrorText: kh,
  StateInfoBackground: Dh,
  StateInfoBorder: Fh,
  StateInfoText: Bh,
  StateSuccessBackground: wh,
  StateSuccessBorder: Sh,
  StateSuccessText: Ch,
  StateWarningBackground: jh,
  StateWarningBorder: Nh,
  StateWarningText: Th,
  TransitionButtonDefault: vc,
  TransitionButtonShadow: kc,
  TransitionCardHover: Sc,
  TransitionInputFocus: wc
}, Symbol.toStringTag, { value: "Module" })), Rf = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Lf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
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
), Ef = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
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
), Mf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
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
), $f = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), Af = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), Hf = ({
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
), Pf = ({
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
), zf = ({
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
), Wf = ({
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
), Of = ({
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
), Uf = () => _e(() => Zh, []), Gf = () => _e(() => ({
  // Border colors
  BorderColorDefault: $a,
  BorderColorForm: Aa,
  BorderColorCard: Ha,
  BorderColorCardHover: Pa,
  BorderColorError: za,
  // Primary colors
  ColorPrimaryBlue: Wa,
  ColorPrimaryWhite: Oa,
  ColorPrimaryBlack: Ua,
  ColorPrimaryGreen: Ga,
  ColorPrimaryPurple: Va,
  ColorPrimaryDarkPink: Ya,
  ColorPrimaryRed: qa,
  ColorPrimaryYellow: Ka,
  // Secondary colors
  ColorSecondaryPaleYellow: Za,
  ColorSecondaryWarmYellow: Ja,
  ColorSecondaryOrange: Xa,
  ColorSecondaryAquaGreen: Qa,
  ColorSecondaryPink: es,
  // Grey scale
  ColorGrey1: ts,
  ColorGrey2: ns,
  ColorGrey3: rs,
  ColorGrey4: as,
  ColorGrey5: ss
}), []), Vf = () => _e(() => ({
  Spacing0: bs,
  Spacing1: xs,
  Spacing2: ys,
  Spacing3: _s,
  Spacing4: vs,
  Spacing5: ks,
  Spacing6: ws,
  Spacing7: Ss,
  Spacing8: Cs,
  Spacing9: js
}), []), Yf = () => _e(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Gt,
    Size16: qt,
    Size19: Jt,
    Size22: en,
    Size26: rn,
    Size36: on,
    Size48: dn
  },
  Tablet: {
    Size14: Vt,
    Size16: Kt,
    Size19: Xt,
    Size22: tn,
    Size26: an,
    Size36: ln,
    Size48: un
  },
  Print: {
    Size14: Yt,
    Size16: Zt,
    Size19: Qt,
    Size22: nn,
    Size26: sn,
    Size36: cn,
    Size48: hn
  },
  Family: {
    Base: Ht,
    Fallback: Pt,
    Print: zt
  },
  Weight: {
    Normal: Wt,
    Bold: Ot,
    Light: Ut
  },
  Base: {
    Size: Xn,
    LineHeight: Qn
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Ht,
  FontFamilyFallback: Pt,
  FontFamilyPrint: zt,
  FontWeightNormal: Wt,
  FontWeightBold: Ot,
  FontWeightLight: Ut,
  FontSize14Mobile: Gt,
  FontSize14Tablet: Vt,
  FontSize14Print: Yt,
  FontSize16Mobile: qt,
  FontSize16Tablet: Kt,
  FontSize16Print: Zt,
  FontSize19Mobile: Jt,
  FontSize19Tablet: Xt,
  FontSize19Print: Qt,
  FontSize22Mobile: en,
  FontSize22Tablet: tn,
  FontSize22Print: nn,
  FontSize26Mobile: rn,
  FontSize26Tablet: an,
  FontSize26Print: sn,
  FontSize36Mobile: on,
  FontSize36Tablet: ln,
  FontSize36Print: cn,
  FontSize48Mobile: dn,
  FontSize48Tablet: un,
  FontSize48Print: hn,
  FontSizeBase: Xn,
  FontLineHeightBase: Qn
}), []), qf = () => _e(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: In,
    Size1: Ln,
    Size2: Mn,
    Size3: An,
    Size4: Pn,
    Size5: Wn,
    Size6: Un,
    Size7: Vn,
    Size8: qn,
    Size9: Zn
  },
  Tablet: {
    Size0: Rn,
    Size1: En,
    Size2: $n,
    Size3: Hn,
    Size4: zn,
    Size5: On,
    Size6: Gn,
    Size7: Yn,
    Size8: Kn,
    Size9: Jn
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: In,
  SpacingResponsive0Tablet: Rn,
  SpacingResponsive1Mobile: Ln,
  SpacingResponsive1Tablet: En,
  SpacingResponsive2Mobile: Mn,
  SpacingResponsive2Tablet: $n,
  SpacingResponsive3Mobile: An,
  SpacingResponsive3Tablet: Hn,
  SpacingResponsive4Mobile: Pn,
  SpacingResponsive4Tablet: zn,
  SpacingResponsive5Mobile: Wn,
  SpacingResponsive5Tablet: On,
  SpacingResponsive6Mobile: Un,
  SpacingResponsive6Tablet: Gn,
  SpacingResponsive7Mobile: Vn,
  SpacingResponsive7Tablet: Yn,
  SpacingResponsive8Mobile: qn,
  SpacingResponsive8Tablet: Kn,
  SpacingResponsive9Mobile: Zn,
  SpacingResponsive9Tablet: Jn
}), []), Kf = () => _e(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: os,
  ButtonSpacingPaddingHorizontalMobile: is,
  ButtonSpacingPaddingVerticalDesktop: ls,
  ButtonSpacingPaddingHorizontalDesktop: cs,
  // Card spacing	
  CardSpacingPaddingMobile: ds,
  CardSpacingPaddingDesktop: us,
  CardSpacingHeadingMargin: hs,
  // Form spacing
  FormSpacingInputPadding: fs,
  FormSpacingInputMinHeight: ms,
  FormSpacingCheckboxSize: ps,
  FormSpacingCheckboxLabelPadding: gs
}), []), Zf = () => _e(() => ({
  xl: $e,
  l: Ae,
  m: He,
  s: Pe,
  xs: ze
}), []), Jf = () => _e(() => ({
  body: We,
  bodyLarge: Oe,
  bodySmall: Ue,
  ledeText: Ge,
  ledeTextSmall: Ve
}), []), Xf = () => _e(() => ({
  headings: {
    xl: $e,
    l: Ae,
    m: He,
    s: Pe,
    xs: ze
  },
  paragraphs: {
    body: We,
    bodyLarge: Oe,
    bodySmall: Ue,
    ledeText: Ge,
    ledeTextSmall: Ve
  },
  fonts: {
    family: {
      base: Ht,
      fallback: Pt,
      print: zt
    },
    weight: {
      normal: Wt,
      bold: Ot,
      light: Ut
    },
    sizes: {
      mobile: {
        size14: Gt,
        size16: qt,
        size19: Jt,
        size22: en,
        size26: rn,
        size36: on,
        size48: dn
      },
      tablet: {
        size14: Vt,
        size16: Kt,
        size19: Xt,
        size22: tn,
        size26: an,
        size36: ln,
        size48: un
      },
      print: {
        size14: Yt,
        size16: Zt,
        size19: Qt,
        size22: nn,
        size26: sn,
        size36: cn,
        size48: hn
      }
    }
  }
}), []);
function Qf(e = {}) {
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
const Ns = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, je = {
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
function em(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...Ns, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${je.normal.eot}?#iefix") format("eot"),
       url("${t}${je.normal.woff2}") format("woff2"),
       url("${t}${je.normal.woff}") format("woff"),
       url("${t}${je.normal.ttf}") format("truetype");
  src: url("${t}${je.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${je.bold.eot}?#iefix") format("eot"),
       url("${t}${je.bold.woff2}") format("woff2"),
       url("${t}${je.bold.woff}") format("woff"),
       url("${t}${je.bold.ttf}") format("truetype");
  src: url("${t}${je.bold.eot}");
}`), a.join(`
`);
}
function tm(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...Ns, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${je.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${je.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${je.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${je.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const nm = '"Frutiger W01", Arial, Helvetica, sans-serif', rm = "Arial, Helvetica, sans-serif";
async function am() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  er as Account,
  Xh as ActionLink,
  Tf as AdaptiveDataGrid,
  mc as AnimationDurationFast,
  pc as AnimationDurationNormal,
  gc as AnimationDurationSlow,
  _c as AnimationEasingBounce,
  bc as AnimationEasingEaseIn,
  yc as AnimationEasingEaseInOut,
  xc as AnimationEasingEaseOut,
  Da as AppointmentCard,
  Sl as AriaDataGrid,
  Fn as AriaTabsDataGrid,
  Tf as AriaTabsDataGridAdaptive,
  aa as BackLink,
  Ha as BorderColorCard,
  Pa as BorderColorCardHover,
  $a as BorderColorDefault,
  za as BorderColorError,
  Aa as BorderColorForm,
  Ec as BorderRadiusLarge,
  Lc as BorderRadiusMedium,
  Ic as BorderRadiusNone,
  Rc as BorderRadiusSmall,
  Tc as BorderWidthCardBottom,
  Cc as BorderWidthDefault,
  jc as BorderWidthFormElement,
  Nc as BorderWidthFormElementError,
  Dc as BorderWidthPanel,
  Bc as BorderWidthTableCell,
  Fc as BorderWidthTableHeader,
  gl as Breadcrumb,
  ph as BreakpointDesktop,
  gh as BreakpointLargeDesktop,
  fh as BreakpointMobile,
  mh as BreakpointTablet,
  Te as Button,
  du as ButtonBorderRadius,
  cu as ButtonBorderWidth,
  Jd as ButtonPrimaryBackgroundActive,
  Kd as ButtonPrimaryBackgroundDefault,
  Xd as ButtonPrimaryBackgroundDisabled,
  Zd as ButtonPrimaryBackgroundHover,
  tu as ButtonPrimaryBorderDefault,
  nu as ButtonPrimaryBorderFocus,
  Qd as ButtonPrimaryTextDefault,
  eu as ButtonPrimaryTextDisabled,
  ou as ButtonSecondaryBackgroundActive,
  ru as ButtonSecondaryBackgroundDefault,
  su as ButtonSecondaryBackgroundHover,
  au as ButtonSecondaryBackgroundSolid,
  lu as ButtonSecondaryBorderDefault,
  iu as ButtonSecondaryTextDefault,
  uu as ButtonShadowSize,
  cs as ButtonSpacingPaddingHorizontalDesktop,
  is as ButtonSpacingPaddingHorizontalMobile,
  ls as ButtonSpacingPaddingVerticalDesktop,
  os as ButtonSpacingPaddingVerticalMobile,
  hu as ButtonTypographyWeight,
  ja as Card,
  fu as CardBackgroundDefault,
  gu as CardBorderBottom,
  mu as CardBorderDefault,
  pu as CardBorderHover,
  vu as CardBorderWidthBottom,
  _u as CardBorderWidthDefault,
  gf as CardGroup,
  bf as CardGroupItem,
  ku as CardShadowDefault,
  wu as CardShadowHover,
  hs as CardSpacingHeadingMargin,
  us as CardSpacingPaddingDesktop,
  ds as CardSpacingPaddingMobile,
  xu as CardTextDescription,
  bu as CardTextHeading,
  yu as CardTextLink,
  xf as CareCard,
  Qh as CharacterCount,
  Gs as Checkbox,
  Vs as Checkboxes,
  Vc as ColorBorderDefault,
  Yc as ColorBorderSecondary,
  _d as ColorButtonLoginActive,
  xd as ColorButtonLoginBackground,
  yd as ColorButtonLoginHover,
  vd as ColorButtonLoginShadow,
  ed as ColorButtonPrimaryActive,
  Jc as ColorButtonPrimaryBackground,
  Qc as ColorButtonPrimaryHover,
  td as ColorButtonPrimaryShadow,
  Xc as ColorButtonPrimaryText,
  hd as ColorButtonReverseActive,
  cd as ColorButtonReverseBackground,
  ud as ColorButtonReverseHover,
  fd as ColorButtonReverseShadow,
  dd as ColorButtonReverseText,
  id as ColorButtonSecondaryActive,
  nd as ColorButtonSecondaryBackground,
  rd as ColorButtonSecondaryBackgroundSolid,
  ad as ColorButtonSecondaryBorder,
  od as ColorButtonSecondaryHover,
  ld as ColorButtonSecondaryShadow,
  sd as ColorButtonSecondaryText,
  gd as ColorButtonWarningActive,
  md as ColorButtonWarningBackground,
  pd as ColorButtonWarningHover,
  bd as ColorButtonWarningShadow,
  qc as ColorError,
  Uc as ColorFocusBackground,
  Gc as ColorFocusText,
  Zc as ColorFormBackground,
  Kc as ColorFormBorder,
  ts as ColorGrey1,
  ns as ColorGrey2,
  rs as ColorGrey3,
  as as ColorGrey4,
  ss as ColorGrey5,
  Wc as ColorLinkActive,
  Pc as ColorLinkDefault,
  zc as ColorLinkHover,
  Oc as ColorLinkVisited,
  Ua as ColorPrimaryBlack,
  Wa as ColorPrimaryBlue,
  Ya as ColorPrimaryDarkPink,
  Ga as ColorPrimaryGreen,
  Va as ColorPrimaryPurple,
  qa as ColorPrimaryRed,
  Oa as ColorPrimaryWhite,
  Ka as ColorPrimaryYellow,
  Qa as ColorSecondaryAquaGreen,
  Xa as ColorSecondaryOrange,
  Za as ColorSecondaryPaleYellow,
  es as ColorSecondaryPink,
  Ja as ColorSecondaryWarmYellow,
  Mc as ColorTextPrimary,
  Hc as ColorTextPrint,
  Ac as ColorTextReverse,
  $c as ColorTextSecondary,
  ar as Column,
  Ud as ComponentBlur,
  Md as ComponentBreadcrumbChevronMarginLeft,
  $d as ComponentBreadcrumbChevronMarginRight,
  Hd as ComponentBreadcrumbPaddingTopDesktop,
  Ad as ComponentBreadcrumbPaddingTopMobile,
  Cd as ComponentButtonPaddingDesktopHorizontal,
  Sd as ComponentButtonPaddingDesktopVertical,
  wd as ComponentButtonPaddingMobileHorizontal,
  kd as ComponentButtonPaddingMobileVertical,
  jd as ComponentButtonShadowSize,
  Rd as ComponentCardHeadingMargin,
  Id as ComponentCardPaddingDesktop,
  Bd as ComponentCardPaddingMobile,
  Vd as ComponentDetails,
  Yd as ComponentExpander,
  Fd as ComponentFormCheckboxLabelPadding,
  Dd as ComponentFormCheckboxSize,
  Nd as ComponentFormInputMinHeight,
  Td as ComponentFormInputPadding,
  Gd as ComponentLink,
  qd as ComponentPagination,
  Ed as ComponentPanelPaddingDesktop,
  Ld as ComponentPanelPaddingMobile,
  Od as ComponentSpread,
  zd as ComponentSummaryListCellPaddingHorizontal,
  Pd as ComponentSummaryListCellPaddingVertical,
  Wd as ComponentSummaryListRowMargin,
  ia as Container,
  pf as ContentsList,
  Ns as DEFAULT_FONT_CONFIG,
  Cf as DashboardSummaryGrid,
  lf as DateInput,
  xl as Details,
  yl as DoDontList,
  Kh as ElevationHigh,
  Yh as ElevationLow,
  qh as ElevationMedium,
  Vh as ElevationNone,
  kr as ErrorMessage,
  of as ErrorSummary,
  _l as Expander,
  je as FRUTIGER_FONT_FILES,
  rr as Fieldset,
  Wh as FocusOutlineOffset,
  Oh as FocusOutlineStyle,
  zh as FocusOutlineWidth,
  Gh as FocusShadowButton,
  Uh as FocusShadowInput,
  Ht as FontFamilyBase,
  Pt as FontFamilyFallback,
  zt as FontFamilyPrint,
  Qn as FontLineHeightBase,
  Gt as FontSize14Mobile,
  Yt as FontSize14Print,
  Vt as FontSize14Tablet,
  qt as FontSize16Mobile,
  Zt as FontSize16Print,
  Kt as FontSize16Tablet,
  Jt as FontSize19Mobile,
  Qt as FontSize19Print,
  Xt as FontSize19Tablet,
  en as FontSize22Mobile,
  nn as FontSize22Print,
  tn as FontSize22Tablet,
  rn as FontSize26Mobile,
  sn as FontSize26Print,
  an as FontSize26Tablet,
  on as FontSize36Mobile,
  cn as FontSize36Print,
  ln as FontSize36Tablet,
  dn as FontSize48Mobile,
  hn as FontSize48Print,
  un as FontSize48Tablet,
  Xn as FontSizeBase,
  Ot as FontWeightBold,
  Ut as FontWeightLight,
  Wt as FontWeightNormal,
  fa as Footer,
  Ou as FormBorderRadius,
  zu as FormBorderWidthDefault,
  Wu as FormBorderWidthError,
  Au as FormErrorTextDefault,
  Hu as FormErrorTypographyWeight,
  Pu as FormHintTextDefault,
  Su as FormInputBackgroundDefault,
  ju as FormInputBackgroundDisabled,
  Nu as FormInputBackgroundError,
  Cu as FormInputBackgroundFocus,
  Tu as FormInputBorderDefault,
  Bu as FormInputBorderDisabled,
  Fu as FormInputBorderError,
  Du as FormInputBorderFocus,
  Iu as FormInputTextDefault,
  Lu as FormInputTextDisabled,
  Ru as FormInputTextPlaceholder,
  Eu as FormLabelTextDefault,
  Mu as FormLabelTextRequired,
  $u as FormLabelTypographyWeight,
  gs as FormSpacingCheckboxLabelPadding,
  ps as FormSpacingCheckboxSize,
  ms as FormSpacingInputMinHeight,
  fs as FormSpacingInputPadding,
  ff as GanttChart,
  Zs as Grid,
  xh as GridGutter,
  yh as GridGutterHalf,
  bh as GridPageWidth,
  ha as Header,
  uf as HeaderSSR,
  ua as HeaderSearch,
  hf as HeaderStatic,
  Ze as Heading,
  Ae as HeadingsNhsukHeadingL,
  He as HeadingsNhsukHeadingM,
  Pe as HeadingsNhsukHeadingS,
  $e as HeadingsNhsukHeadingXl,
  ze as HeadingsNhsukHeadingXs,
  ro as Hero,
  sa as Hint,
  Sf as Images,
  tr as Input,
  yf as InsetText,
  nr as Label,
  hh as LayoutColumnActions,
  lh as LayoutColumnFull,
  ch as LayoutColumnHalf,
  uh as LayoutColumnQuarter,
  dh as LayoutColumnThird,
  ih as LayoutContainerMaxWidth,
  Qs as List,
  la as MainWrapper,
  Fa as MedicationCard,
  Hf as NHSBodyText,
  Pf as NHSBodyTextLarge,
  zf as NHSBodyTextSmall,
  Lf as NHSHeading1,
  Ef as NHSHeading2,
  Mf as NHSHeading3,
  $f as NHSHeading4,
  Af as NHSHeading5,
  Wf as NHSLedeText,
  Of as NHSLedeTextSmall,
  df as NHSThemeProvider,
  rm as NHS_FALLBACK_FONT_STACK,
  nm as NHS_FONT_STACK,
  fc as NavigationSplitView,
  Ff as PageTemplate,
  mf as Pagination,
  bl as Panel,
  We as ParagraphsBody,
  Oe as ParagraphsBodyLarge,
  Ue as ParagraphsBodySmall,
  Ge as ParagraphsLedeText,
  Ve as ParagraphsLedeTextSmall,
  Ta as PatientCard,
  ef as Radios,
  Tf as ResponsiveDataGrid,
  Df as ResponsiveDataGridDemo,
  Bt as Row,
  oa as Select,
  qs as SelectOption,
  Eh as ShadowButtonDefault,
  Ah as ShadowButtonFocus,
  Mh as ShadowButtonSecondary,
  $h as ShadowButtonWarning,
  Hh as ShadowCardDefault,
  Ph as ShadowCardHover,
  oh as SizeButtonMinHeightDesktop,
  sh as SizeButtonMinHeightMobile,
  Ju as SizeFormControlLarge,
  Zu as SizeFormControlMedium,
  Ku as SizeFormControlSmall,
  rh as SizeFormInputWidth2xl,
  ah as SizeFormInputWidth3xl,
  th as SizeFormInputWidthLg,
  eh as SizeFormInputWidthMd,
  Qu as SizeFormInputWidthSm,
  nh as SizeFormInputWidthXl,
  Xu as SizeFormInputWidthXs,
  Yu as SizeIconExtraLarge,
  Vu as SizeIconLarge,
  Gu as SizeIconMedium,
  qu as SizeIconNhsDefault,
  Uu as SizeIconSmall,
  Ca as SkipLink,
  jf as SortStatusControl,
  bs as Spacing0,
  xs as Spacing1,
  ys as Spacing2,
  _s as Spacing3,
  vs as Spacing4,
  ks as Spacing5,
  ws as Spacing6,
  Ss as Spacing7,
  Cs as Spacing8,
  js as Spacing9,
  In as SpacingResponsive0Mobile,
  Rn as SpacingResponsive0Tablet,
  Ln as SpacingResponsive1Mobile,
  En as SpacingResponsive1Tablet,
  Mn as SpacingResponsive2Mobile,
  $n as SpacingResponsive2Tablet,
  An as SpacingResponsive3Mobile,
  Hn as SpacingResponsive3Tablet,
  Pn as SpacingResponsive4Mobile,
  zn as SpacingResponsive4Tablet,
  Wn as SpacingResponsive5Mobile,
  On as SpacingResponsive5Tablet,
  Un as SpacingResponsive6Mobile,
  Gn as SpacingResponsive6Tablet,
  Vn as SpacingResponsive7Mobile,
  Yn as SpacingResponsive7Tablet,
  qn as SpacingResponsive8Mobile,
  Kn as SpacingResponsive8Tablet,
  Zn as SpacingResponsive9Mobile,
  Jn as SpacingResponsive9Tablet,
  tf as SpacingUtilities,
  Ih as StateDisabledBackground,
  Rh as StateDisabledBorder,
  Lh as StateDisabledText,
  _h as StateErrorBackground,
  vh as StateErrorBorder,
  kh as StateErrorText,
  Dh as StateInfoBackground,
  Fh as StateInfoBorder,
  Bh as StateInfoText,
  wh as StateSuccessBackground,
  Sh as StateSuccessBorder,
  Ch as StateSuccessText,
  jh as StateWarningBackground,
  Nh as StateWarningBorder,
  Th as StateWarningText,
  wl as SummaryCard,
  _f as SummaryList,
  vf as Table,
  kf as Tabs,
  Ke as Tag,
  vl as TaskList,
  Ys as Textarea,
  Bf as TransactionalPageTemplate,
  vc as TransitionButtonDefault,
  kc as TransitionButtonShadow,
  Sc as TransitionCardHover,
  wc as TransitionInputFocus,
  Ba as VitalsCard,
  sf as WIDTH_FRACTIONS,
  wf as WarningCallout,
  Ma as WidthContainer,
  rf as WidthUtilities,
  am as checkFrutigerLoaded,
  mr as createGenericTabsConfig,
  Nf as createTCHTabsConfig,
  em as generateFrutigerFontFace,
  Rf as getResponsiveStyles,
  nf as getSpacingClass,
  af as getWidthClass,
  tm as preloadFrutigerFonts,
  El as tchDataConfig,
  Gf as useColors,
  Kf as useComponentSpacing,
  Zf as useNHSHeadings,
  Jf as useNHSParagraphs,
  cf as useNHSTheme,
  Xf as useNHSTypographySystem,
  Qf as useNavigationSplitDrill,
  cc as useNavigationSplitUrlSync,
  pr as useNhsFdpBreakpoints,
  qf as useResponsiveSpacing,
  If as useResponsiveValue,
  Vf as useSpacing,
  Uf as useTokens,
  Yf as useTypography
};
//# sourceMappingURL=index.esm.js.map
