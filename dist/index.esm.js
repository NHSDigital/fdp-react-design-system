import * as $a from "react";
import Le, { useState as re, useEffect as le, useCallback as X, createElement as _r, useRef as se, useMemo as ie, createContext as Ha, useContext as Ea, forwardRef as Ve, useImperativeHandle as Sr, useReducer as za } from "react";
function Aa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ot = { exports: {} }, Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn;
function Pa() {
  if (Gn) return Ze;
  Gn = 1;
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
  return Ze.Fragment = t, Ze.jsx = r, Ze.jsxs = r, Ze;
}
var Je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function Wa() {
  return Vn || (Vn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(w) {
      if (w == null) return null;
      if (typeof w == "function")
        return w.$$typeof === _ ? null : w.displayName || w.name || null;
      if (typeof w == "string") return w;
      switch (w) {
        case g:
          return "Fragment";
        case T:
          return "Profiler";
        case C:
          return "StrictMode";
        case R:
          return "Suspense";
        case k:
          return "SuspenseList";
        case y:
          return "Activity";
      }
      if (typeof w == "object")
        switch (typeof w.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), w.$$typeof) {
          case v:
            return "Portal";
          case F:
            return (w.displayName || "Context") + ".Provider";
          case j:
            return (w._context.displayName || "Context") + ".Consumer";
          case S:
            var W = w.render;
            return w = w.displayName, w || (w = W.displayName || W.name || "", w = w !== "" ? "ForwardRef(" + w + ")" : "ForwardRef"), w;
          case M:
            return W = w.displayName || null, W !== null ? W : e(w.type) || "Memo";
          case D:
            W = w._payload, w = w._init;
            try {
              return e(w(W));
            } catch {
            }
        }
      return null;
    }
    function t(w) {
      return "" + w;
    }
    function r(w) {
      try {
        t(w);
        var W = !1;
      } catch {
        W = !0;
      }
      if (W) {
        W = console;
        var H = W.error, G = typeof Symbol == "function" && Symbol.toStringTag && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return H.call(
          W,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          G
        ), t(w);
      }
    }
    function a(w) {
      if (w === g) return "<>";
      if (typeof w == "object" && w !== null && w.$$typeof === D)
        return "<...>";
      try {
        var W = e(w);
        return W ? "<" + W + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var w = p.A;
      return w === null ? null : w.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(w) {
      if (A.call(w, "key")) {
        var W = Object.getOwnPropertyDescriptor(w, "key").get;
        if (W && W.isReactWarning) return !1;
      }
      return w.key !== void 0;
    }
    function l(w, W) {
      function H() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          W
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(w, "key", {
        get: H,
        configurable: !0
      });
    }
    function c() {
      var w = e(this.type);
      return P[w] || (P[w] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), w = this.props.ref, w !== void 0 ? w : null;
    }
    function d(w, W, H, G, z, b, x, I) {
      return H = b.ref, w = {
        $$typeof: m,
        type: w,
        key: W,
        props: b,
        _owner: z
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(w, "ref", {
        enumerable: !1,
        get: c
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
        value: x
      }), Object.defineProperty(w, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    }
    function u(w, W, H, G, z, b, x, I) {
      var Y = W.children;
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
      if (A.call(W, "key")) {
        Y = e(w);
        var B = Object.keys(W).filter(function(E) {
          return E !== "key";
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
      if (Y = null, H !== void 0 && (r(H), Y = "" + H), i(W) && (r(W.key), Y = "" + W.key), "key" in W) {
        H = {};
        for (var L in W)
          L !== "key" && (H[L] = W[L]);
      } else H = W;
      return Y && l(
        H,
        typeof w == "function" ? w.displayName || w.name || "Unknown" : w
      ), d(
        w,
        Y,
        b,
        z,
        o(),
        H,
        x,
        I
      );
    }
    function f(w) {
      typeof w == "object" && w !== null && w.$$typeof === m && w._store && (w._store.validated = 1);
    }
    var h = Le, m = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), F = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), p = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, K = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(w) {
        return w();
      }
    };
    var $, P = {}, J = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), Q = q(a(s)), Z = {};
    Je.Fragment = g, Je.jsx = function(w, W, H, G, z) {
      var b = 1e4 > p.recentlyCreatedOwnerStacks++;
      return u(
        w,
        W,
        H,
        !1,
        G,
        z,
        b ? Error("react-stack-top-frame") : J,
        b ? q(a(w)) : Q
      );
    }, Je.jsxs = function(w, W, H, G, z) {
      var b = 1e4 > p.recentlyCreatedOwnerStacks++;
      return u(
        w,
        W,
        H,
        !0,
        G,
        z,
        b ? Error("react-stack-top-frame") : J,
        b ? q(a(w)) : Q
      );
    };
  }()), Je;
}
var qn;
function Oa() {
  return qn || (qn = 1, process.env.NODE_ENV === "production" ? ot.exports = Pa() : ot.exports = Wa()), ot.exports;
}
var n = Oa(), Vt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Kn;
function Ua() {
  return Kn || (Kn = 1, function(e) {
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
  }(Vt)), Vt.exports;
}
var Ya = Ua();
const O = /* @__PURE__ */ Aa(Ya), bd = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = O(
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
}, Tn = ({
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
      className: O(
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
          className: O("nhsuk-account__item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
}, { forwardRef: Ga, useCallback: Zn } = $a;
function Va(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, d = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    o !== "default" ? `nhs-aria-button--${o}` : "",
    s ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), u = Zn((m) => {
    m.key === " " && ("href" in c || m.currentTarget.getAttribute("role") === "button") && (m.preventDefault(), m.currentTarget.click());
  }, [c]), f = Zn((m) => {
    if (l) {
      const v = m.currentTarget;
      if (v.getAttribute("data-processing") === "true") {
        m.preventDefault();
        return;
      }
      v.setAttribute("data-processing", "true"), setTimeout(() => {
        v.removeAttribute("data-processing");
      }, 1e3);
    }
  }, [l]);
  if ("href" in c && c.href) {
    const m = c;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: m.href,
        target: m.target,
        rel: m.rel,
        className: d,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...l && { "data-prevent-double-click": "true" },
        onKeyDown: (v) => {
          m.onKeyDown?.(v), u(v);
        },
        onClick: (v) => {
          m.onClick?.(v), f(v);
        },
        "aria-disabled": m["aria-disabled"],
        ...m["aria-disabled"] === "true" && { tabIndex: -1 },
        id: m.id,
        style: m.style,
        title: m.title,
        "aria-label": m["aria-label"],
        "aria-describedby": m["aria-describedby"],
        "aria-labelledby": m["aria-labelledby"],
        tabIndex: m.tabIndex,
        children: r
      }
    );
  }
  const h = c;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: h.type || "button",
      disabled: h.disabled,
      className: d,
      "data-module": "nhs-button",
      ...l && { "data-prevent-double-click": "true" },
      ...h.disabled && { "aria-disabled": "true" },
      onKeyDown: (m) => {
        h.onKeyDown?.(m), u(m);
      },
      onClick: (m) => {
        h.onClick?.(m), f(m);
      },
      id: h.id,
      style: h.style,
      title: h.title,
      "aria-label": h["aria-label"],
      "aria-describedby": h["aria-describedby"],
      "aria-labelledby": h["aria-labelledby"],
      tabIndex: h.tabIndex,
      name: h.name,
      value: h.value,
      form: h.form,
      formAction: h.formAction,
      formEncType: h.formEncType,
      formMethod: h.formMethod,
      formNoValidate: h.formNoValidate,
      formTarget: h.formTarget,
      autoFocus: h.autoFocus,
      children: r
    }
  );
}
const Bn = Ga(Va);
Bn.displayName = "Button";
const qa = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = O(
    "nhsuk-back-link",
    a
  ), c = O(
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
}, Fn = ({
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
  const u = O(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": o,
      "nhsuk-tag--closable": s,
      "nhsuk-tag--disabled": l
    },
    c
  ), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !l && i && i();
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
}, Dn = ({
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
  width: h = "full",
  inputMode: m,
  autoComplete: v,
  maxLength: g,
  minLength: C,
  pattern: T,
  step: j,
  min: F,
  max: S,
  showValueLabels: R = !1,
  showCurrentValue: k = !1,
  valueLabels: M,
  onChange: D,
  onBlur: y,
  onFocus: _,
  onKeyDown: p,
  ...A
}) => {
  const [K, q] = re(a || o || (r === "range" ? F || "0" : ""));
  le(() => {
    a !== void 0 && q(a);
  }, [a]);
  const $ = (Z) => {
    q(Z.target.value), D?.(Z);
  }, P = r === "range", J = O(
    "nhsuk-input",
    {
      "nhsuk-input--error": d,
      "nhsuk-input--range": P,
      [`nhsuk-input--width-${h}`]: h !== "full" && !P
    },
    f
  ), Q = P ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    R && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
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
          inputMode: m,
          autoComplete: v,
          maxLength: g,
          minLength: C,
          pattern: T,
          step: j,
          min: F,
          max: S,
          onChange: $,
          onBlur: y,
          onFocus: _,
          onKeyDown: p,
          ...A
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: M?.max || S || "100" })
    ] }),
    !R && /* @__PURE__ */ n.jsx(
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
        inputMode: m,
        autoComplete: v,
        maxLength: g,
        minLength: C,
        pattern: T,
        step: j,
        min: F,
        max: S,
        onChange: $,
        onBlur: y,
        onFocus: _,
        onKeyDown: p,
        ...A
      }
    ),
    k && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      M?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: K })
    ] }) })
  ] }) : null;
  return P ? Q : /* @__PURE__ */ n.jsx(
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
      inputMode: m,
      autoComplete: v,
      maxLength: g,
      minLength: C,
      pattern: T,
      step: j,
      min: F,
      max: S,
      onChange: D,
      onBlur: y,
      onFocus: _,
      onKeyDown: p,
      ...A
    }
  );
}, Mn = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = O(
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
}, Rn = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = O(
    "nhsuk-fieldset",
    r
  ), i = O(
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
}, Ka = ({
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
  attributes: h,
  ...m
}) => {
  const [v, g] = re(
    e.filter((D) => D.checked).map((D) => D.value)
  ), C = r || t, T = i ? `${C}-hint` : void 0, j = l ? `${C}-error` : void 0, F = [T, j].filter(Boolean).join(" ") || void 0, S = (D, y) => {
    let _;
    y ? _ = [...v, D] : _ = v.filter((p) => p !== D), g(_), u?.(_);
  }, R = () => e.map((D, y) => {
    const _ = `${C}-${y + 1}`, p = `${_}-conditional`, A = v.includes(D.value), K = D.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: _,
          name: t,
          type: "checkbox",
          value: D.value,
          checked: A,
          disabled: K,
          onChange: (q) => S(D.value, q.target.checked),
          "aria-describedby": D.hint ? `${_}-hint` : F,
          ...D.conditional && {
            "aria-controls": p,
            "aria-expanded": A ? "true" : "false"
          },
          ...D.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: _, children: D.text }),
      D.hint && /* @__PURE__ */ n.jsx("div", { id: `${_}-hint`, className: "nhsuk-checkboxes__hint", children: D.hint }),
      D.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: O("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !A
          }),
          id: p,
          children: typeof D.conditional == "object" && D.conditional !== null && "label" in D.conditional && "id" in D.conditional && "name" in D.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            D.conditional.label && /* @__PURE__ */ n.jsx(Mn, { htmlFor: D.conditional.id, children: D.conditional.label }),
            /* @__PURE__ */ n.jsx(Dn, { ...D.conditional })
          ] }) : D.conditional
        }
      )
    ] }, D.value);
  }), k = O(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": d
    },
    c
  ), M = O("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: M, ...h, ...m, children: /* @__PURE__ */ n.jsxs(
    Rn,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: F,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: T, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: j, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: k, children: R() })
      ]
    }
  ) });
};
Ka.displayName = "Checkboxes";
const Za = ({
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
  cols: h,
  maxLength: m,
  minLength: v,
  wrap: g = "soft",
  resize: C = "vertical",
  autoComplete: T,
  spellCheck: j,
  onChange: F,
  onBlur: S,
  onFocus: R,
  onKeyDown: k,
  ...M
}) => {
  const D = O(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": c,
      [`nhsuk-textarea--resize-${C}`]: C !== "vertical"
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
      cols: h,
      maxLength: m,
      minLength: v,
      wrap: g,
      autoComplete: T,
      spellCheck: j,
      onChange: F,
      onBlur: S,
      onFocus: R,
      onKeyDown: k,
      ...M
    }
  );
}, wr = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = O("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, id: e, ...a, children: r });
}, yd = ({
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
  const [h, m] = re(s), [v, g] = re(0), [C, T] = re(!1), [j, F] = re(!1), S = X((_) => r ? _.trim() === "" ? 0 : _.trim().split(/\s+/).length : _.length, [r]);
  le(() => {
    const _ = S(h), p = t || r || 0, A = p - _, K = Math.floor(p * (a / 100));
    g(A), T(_ > p), F(_ >= K || _ > p), d && d(_, A);
  }, [h, t, r, a, S, d]);
  const R = (_) => {
    const p = _.target.value;
    m(p), u && u(_);
  }, k = () => {
    const _ = t || r || 0, p = r ? "word" : "character", A = r ? "words" : "characters";
    if (!j)
      return `You can enter up to ${_} ${_ === 1 ? p : A}`;
    if (C) {
      const K = Math.abs(v);
      return `You have ${K} ${K === 1 ? p : A} too many`;
    } else
      return `You have ${v} ${v === 1 ? p : A} remaining`;
  }, M = O(
    "nhsuk-character-count",
    l
  ), D = O(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !j,
      "nhsuk-error-message": C
    },
    c?.classes
  ), y = O(
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
          Za,
          {
            id: e,
            name: o,
            value: h,
            rows: i,
            className: y,
            onChange: R,
            "aria-describedby": `${e}-info`,
            ...f
          }
        ),
        /* @__PURE__ */ n.jsx(
          wr,
          {
            id: `${e}-info`,
            className: D,
            children: k()
          }
        )
      ]
    }
  );
}, kd = ({
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
  options: h,
  onChange: m,
  onBlur: v,
  onFocus: g,
  ...C
}) => {
  const T = O(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    c
  );
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: T,
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
      onChange: m,
      onBlur: v,
      onFocus: g,
      ...C,
      children: h.map((j, F) => /* @__PURE__ */ n.jsx(
        "option",
        {
          value: j.value,
          disabled: j.disabled,
          selected: j.selected,
          children: j.text
        },
        `${j.value}-${F}`
      ))
    }
  );
}, vd = ({
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
  ...h
}) => {
  const [m, v] = re(t || r || ""), g = O(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    s
  ), C = (T) => {
    const j = T.target.value;
    v(j), d && d(T);
  };
  return /* @__PURE__ */ n.jsx(Rn, { children: /* @__PURE__ */ n.jsx("div", { className: g, ...h, children: c.map((T, j) => {
    const F = `${e}-${j}`, S = T.conditional ? `${F}-conditional` : void 0, R = m === T.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: F,
          name: e,
          type: "radio",
          value: T.value,
          disabled: T.disabled,
          checked: R,
          "aria-describedby": o,
          onChange: C,
          onBlur: u,
          onFocus: f
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: F, children: T.text }),
      T.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: T.hint }),
      T.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: O("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !R
          }),
          id: S,
          children: typeof T.conditional == "object" && T.conditional !== null && "label" in T.conditional && "id" in T.conditional && "name" in T.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            T.conditional.label && /* @__PURE__ */ n.jsx(Mn, { htmlFor: T.conditional.id, children: T.conditional.label }),
            /* @__PURE__ */ n.jsx(Dn, { ...T.conditional })
          ] }) : T.conditional
        }
      )
    ] }, T.value);
  }) }) });
}, Cr = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...o
}) => {
  const s = O(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), i = a ? { maxWidth: a } : void 0;
  return /* @__PURE__ */ n.jsx("div", { className: s, style: i, ...o, children: e });
}, In = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = O("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: e });
}, Ln = ({
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
  const d = O(
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
}, Ja = ({
  children: e,
  className: t,
  ...r
}) => /* @__PURE__ */ n.jsx(Cr, { className: t, ...r, children: /* @__PURE__ */ n.jsx(In, { children: e }) }), Xa = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), d = O(
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
}, Qa = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = O("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, es = Xa;
es.Item = Qa;
const _d = ({
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
}, Sd = {
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
}, wd = ({
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
}, Cd = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, jd = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], jr = ({
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
}, Me = ({
  level: e,
  className: t,
  text: r,
  html: a,
  children: o,
  size: s,
  marginBottom: i,
  ...l
}) => {
  const d = e ?? ((v) => {
    switch (v) {
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
  })(s), u = O(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${s}`]: s
    },
    t
  ), f = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), h = `h${d}`, m = i ? { ...l.style, marginBottom: i } : l.style;
  return _r(
    h,
    { className: u, ...l, style: m },
    f
  );
}, Jn = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...o
}) => {
  const s = O("nhsuk-error-message", t);
  return /* @__PURE__ */ n.jsxs("span", { className: s, id: e, ...o, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      r,
      " "
    ] }),
    a
  ] });
}, Nd = ({
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
  const d = O(
    "nhsuk-error-summary",
    s
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, h = (m) => {
    const v = m.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: m.html } }) : m.text;
    return m.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: m.href,
        ...m.attributes,
        children: v
      }
    ) : v;
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
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((m, v) => /* @__PURE__ */ n.jsx("li", { children: h(m) }, v)) })
        ] })
      ]
    }
  );
}, Td = ({
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
  const [u, f] = re(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [h, m] = re({}), v = ($) => $ % 4 === 0 && $ % 100 !== 0 || $ % 400 === 0, g = ($, P) => {
    const J = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return $ === 2 && v(P) ? 29 : J[$ - 1];
  }, C = ($, P, J) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Day must be a number";
    const Q = parseInt($, 10);
    if (Q < 1 || Q > 31) return "Day must be between 1 and 31";
    if (P && J) {
      const Z = parseInt(P, 10), w = parseInt(J, 10);
      if (!isNaN(Z) && !isNaN(w) && Z >= 1 && Z <= 12) {
        const W = g(Z, w);
        if (Q > W)
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
          ][Z - 1]} ${w} only has ${W} days`;
      }
    }
  }, T = ($) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Month must be a number";
    const P = parseInt($, 10);
    if (P < 1 || P > 12) return "Month must be between 1 and 12";
  }, j = ($) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Year must be a number";
    const P = parseInt($, 10), J = (/* @__PURE__ */ new Date()).getFullYear();
    if (P < 1900 || P > J + 10)
      return `Year must be between 1900 and ${J + 10}`;
  }, F = ($, P, J) => {
    if (!$ || !P || !J) return;
    const Q = parseInt($, 10), Z = parseInt(P, 10), w = parseInt(J, 10);
    if (isNaN(Q) || isNaN(Z) || isNaN(w) || Z < 1 || Z > 12 || w < 1900) return;
    const W = g(Z, w);
    Q < 1 || Q > W;
  }, S = X(($, P) => {
    const J = {
      ...u,
      [$]: P
    };
    f(J), c && c(J);
  }, [u, c]), R = X(($) => {
    const P = u[$];
    let J;
    if ($ === "day")
      J = C(P, u.month, u.year);
    else if ($ === "month") {
      if (J = T(P), !J && u.day) {
        const Q = C(u.day, P, u.year);
        m((Z) => ({
          ...Z,
          day: Q
        }));
      }
    } else if ($ === "year" && (J = j(P), !J && u.day && u.month)) {
      const Q = C(u.day, u.month, P);
      m((Z) => ({
        ...Z,
        day: Q
      }));
    }
    if (m((Q) => ({
      ...Q,
      [$]: J
    })), u.day && u.month && u.year) {
      const Q = F(
        $ === "day" ? P : u.day,
        $ === "month" ? P : u.month,
        $ === "year" ? P : u.year
      );
      Q && m((Z) => ({
        ...Z,
        day: Q
      }));
    }
  }, [u, C, T, j, F]), k = ie(() => [
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
  const y = i ? `${e}-hint` : "", _ = l ? `${e}-error` : "";
  y && (D = D ? `${D} ${y}` : y), _ && (D = D ? `${D} ${_}` : _);
  const p = Object.values(h).some(($) => $), A = O(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || p
    }
  ), K = O(
    "nhsuk-date-input",
    t
  ), q = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      wr,
      {
        id: y,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      Jn,
      {
        id: _,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(h).map(
      ([$, P]) => P ? /* @__PURE__ */ n.jsxs(
        Jn,
        {
          id: `${e}-${$}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            P
          ]
        },
        `${$}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: K, id: e, "data-testid": "date-input", ...d, children: M.map(($) => {
      const P = $.id || `${e}-${$.name}`, J = a ? `${a}[${$.name}]` : $.name, Q = $.label || $.name.charAt(0).toUpperCase() + $.name.slice(1), Z = h[$.name], w = u[$.name] || "";
      let W = D;
      if (Z) {
        const H = `${e}-${$.name}-error`;
        W = W ? `${W} ${H}` : H;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          Mn,
          {
            htmlFor: P,
            className: "nhsuk-date-input__label",
            children: Q
          }
        ),
        /* @__PURE__ */ n.jsx(
          Dn,
          {
            id: P,
            name: J,
            value: w,
            className: O("nhsuk-date-input__input", $.classes, {
              "nhsuk-input--error": Z
            }),
            inputMode: $.inputmode,
            autoComplete: $.autocomplete,
            pattern: $.pattern,
            "aria-describedby": W || void 0,
            hasError: !!Z,
            onChange: (H) => S($.name, H.target.value),
            onBlur: () => R($.name)
          }
        )
      ] }, $.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: A, children: s ? /* @__PURE__ */ n.jsx(
    Rn,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: D || void 0,
      children: q()
    }
  ) : q() });
}, Nr = {
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
}, Tr = Ha(Nr), ts = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Nr, ...t };
  return /* @__PURE__ */ n.jsx(Tr.Provider, { value: r, children: e });
}, Bd = () => {
  const e = Ea(Tr);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function ns() {
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
function rs() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = ns(), document.head.appendChild(e);
}
const Fd = ({ children: e, theme: t }) => (le(() => {
  rs();
}, []), /* @__PURE__ */ n.jsx(ts, { theme: t, children: e })), $n = ({
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
  showResults: h = !1,
  results: m = [],
  formAttributes: v = {},
  inputAttributes: g = {},
  buttonAttributes: C = {},
  preventDefaultSubmit: T = !1,
  debounceMs: j = 300,
  minQueryLength: F = 1
}) => {
  const [S, R] = re(""), [k, M] = re(!1), D = se(void 0), y = se(null), _ = se(null), p = e === "controlled" && o !== void 0, A = p ? o : S, K = X((G) => {
    D.current && clearTimeout(D.current), D.current = setTimeout(() => {
      u.onChange && G.length >= F && u.onChange(G);
    }, j);
  }, [u.onChange, j, F]), q = X((G) => {
    const z = G.target.value;
    p || R(z), e !== "form" && K(z);
  }, [p, e, K]), $ = X((G) => {
    const z = A.trim(), b = {
      query: z,
      timestamp: Date.now(),
      formData: new FormData(G.currentTarget)
    };
    e === "controlled" || e === "hybrid" && T ? (G.preventDefault(), u.onSearch && z.length >= F && u.onSearch(b)) : e === "hybrid" && u.onSearch && z.length >= F && u.onSearch(b);
  }, [e, A, u.onSearch, T, F]), P = X(() => {
    M(!0), u.onFocus?.();
  }, [u.onFocus]), J = X(() => {
    M(!1), u.onBlur?.();
  }, [u.onBlur]), Q = X(() => {
    p || R(""), u.onClear?.(), _.current?.focus();
  }, [p, u.onClear]);
  le(() => () => {
    D.current && clearTimeout(D.current);
  }, []);
  const Z = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: O("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": f
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), w = () => /* @__PURE__ */ n.jsx(
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
  ), W = () => !A || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: Q,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), H = () => !h || !m.length || !k ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: m.map((G) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: G.href ? /* @__PURE__ */ n.jsxs("a", { href: G.href, className: "nhsuk-header__search-result-link", children: [
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
  return /* @__PURE__ */ n.jsxs("search", { className: O("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": k,
    "nhsuk-header__search--has-results": h && m.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: y,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        onSubmit: $,
        ...v,
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
                ref: _,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: A,
                onChange: q,
                onFocus: P,
                onBlur: J,
                disabled: d || f,
                "aria-expanded": h && m.length > 0,
                "aria-haspopup": "listbox",
                ...g
              }
            ),
            W()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: d || f || e !== "form" && A.length < F,
              ...C,
              children: [
                f ? w() : Z(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    H()
  ] });
}, Br = ({
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
  const [f, h] = re(!1), [m, v] = re(!1), [g, C] = re(i?.items?.length || 0), [T, j] = re(!1), [F, S] = re(!1), [R, k] = re(!1), M = se(null), D = se(null), y = se(!1), _ = se(null), p = se([]), A = se(null);
  le(() => {
    typeof window > "u" || (k(!0), j(!0));
  }, []), le(() => {
    if (!R || !i?.items?.length) return;
    p.current = i.items;
    const x = setTimeout(() => {
      M.current && D.current && Q();
    }, 100);
    return () => clearTimeout(x);
  }, [R, i?.items]);
  const K = r.href && !t.href || r.href && r.href === t.href, q = K ? r.href : t.href, $ = O(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), P = O(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), J = O(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), Q = X(() => {
    if (!(typeof window > "u" || y.current) && !(!M.current || !D.current || !p.current.length)) {
      y.current = !0;
      try {
        const x = D.current, I = M.current, Y = x.offsetWidth, B = I.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (B.length === 0 || Y === 0) {
          y.current = !1;
          return;
        }
        const L = window.innerWidth < 768, E = L ? 16 : 32, N = E * 2, te = Y - N, V = Array.from(B).map((ae) => ae.offsetWidth), U = V.reduce((ae, de) => ae + de, 0), ee = L ? 80 : 100, oe = A.current !== null && A.current !== L;
        if (A.current = L, console.log("Overflow check:", {
          containerWidth: Y,
          availableContainerWidth: te,
          totalGutters: N,
          gutterSize: E,
          totalWidth: U,
          mobile: L,
          breakpointChanged: oe,
          itemCount: V.length,
          measurements: V
        }), U <= te)
          v(!1), C(p.current.length);
        else {
          const ae = te - ee;
          let de = 0, xe = 0;
          for (let pe = 0; pe < V.length; pe++) {
            const ye = xe + V[pe];
            if (ye <= ae)
              xe = ye, de = pe + 1;
            else
              break;
          }
          de = Math.max(1, de);
          const qe = de < V.length;
          v(qe), C(de);
        }
        y.current = !1;
      } catch (x) {
        console.error("Overflow detection error:", x), v(!1), C(p.current.length), y.current = !1;
      }
    }
  }, []);
  le(() => {
    if (typeof document > "u") return;
    const x = (I) => {
      I.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
  }, [f]), le(() => {
    if (typeof window > "u" || !R) return;
    const x = () => {
      f && (h(!1), S(!1)), _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        p.current.length > 0 && Q();
      }, 250);
    };
    let I = null, Y = null;
    return window.matchMedia && (I = window.matchMedia("(max-width: 767px)"), Y = () => {
      console.log("Breakpoint changed:", I?.matches ? "mobile" : "desktop"), p.current.length > 0 && setTimeout(() => Q(), 50);
    }, I.addEventListener ? I.addEventListener("change", Y) : I.addListener(Y)), window.addEventListener("resize", x), () => {
      window.removeEventListener("resize", x), I && Y && (I.removeEventListener ? I.removeEventListener("change", Y) : I.removeListener(Y)), _.current && clearTimeout(_.current);
    };
  }, [R, f, Q]), le(() => {
    if (typeof document > "u") return;
    const x = (I) => {
      const Y = I.target, B = M.current?.contains(Y);
      f && !B && h(!1);
    };
    if (f)
      return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, [f]);
  const Z = (x) => {
    x && (x.preventDefault(), x.stopPropagation());
    const I = !f;
    h(I), I ? setTimeout(() => {
      S(!0);
    }, 50) : S(!1);
  }, w = () => /* @__PURE__ */ n.jsxs(
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
  ), W = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : w(), H = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, G = (x, I) => x ? I ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: I, children: x }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: x }) : null, z = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), b = (x) => {
    if (x.active || x.current) {
      const I = x.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } }) : x.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: I });
    }
    return x.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } }) : x.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: $,
      role: "banner",
      "data-module": "nhsuk-header",
      ...d,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: P, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            q ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: q, children: [
              W(),
              H(),
              K && G(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              W(),
              H(),
              K && G(r.text)
            ] }),
            r.text && !K && G(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx($n, { ...o }),
          /* @__PURE__ */ n.jsx(
            Tn,
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
                className: O(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !T && R,
                    "nhsuk-header__navigation-container--ssr": !R
                  },
                  l
                ),
                ref: D,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: M, children: [
                  (R ? i.items.slice(0, g) : i.items).map((x, I) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: O(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": x.active || x.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !R && I >= 4
                          // Mark items that would be hidden on client
                        },
                        x.className
                      ),
                      ...x.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: x.href,
                          ...x.active || x.current ? {
                            "aria-current": x.current ? "page" : "true"
                          } : {},
                          children: b(x)
                        }
                      )
                    },
                    I
                  )),
                  R && m && g < i.items.length && /* @__PURE__ */ n.jsx(
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
        R && i && i.items && i.items.length > 0 && f && F && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !F,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(g).map((x, I) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: O(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": x.active || x.current
                  }
                ),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: x.href,
                    ...x.active || x.current ? {
                      "aria-current": x.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      h(!1), S(!1);
                    },
                    children: b(x)
                  }
                )
              },
              `overflow-${g + I}`
            )) })
          }
        )
      ]
    }
  );
}, Dd = ({
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
  const f = r.href && !t.href || r.href && r.href === t.href, h = f ? r.href : t.href, m = O(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), v = O(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), g = O(
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
  ), T = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : C(), j = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, F = (k, M) => k ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: k }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: k }) : null, S = () => !i?.items || i.items.length === 0 ? null : i.items.map((k, M) => /* @__PURE__ */ n.jsx(
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
  )), R = () => o ? /* @__PURE__ */ n.jsx($n, { ...o }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: m,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...d,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: v, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            h ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: h, children: [
              T(),
              j(),
              f && F(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              T(),
              j(),
              f && F(r.text)
            ] }),
            r.text && !f && F(r.text, r.href)
          ] }),
          (c === "organisation" || a) && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            a && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name", children: a.name }),
              a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: a.descriptor })
            ] }),
            R()
          ] }),
          c !== "organisation" && !a && R(),
          /* @__PURE__ */ n.jsx(
            Tn,
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
                children: S()
              }
            ) })
          }
        )
      ]
    }
  );
}, Md = ({
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
  const h = r.href && !t.href || r.href && r.href === t.href, m = h ? r.href : t.href, v = O(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), g = O(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), C = O(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), T = () => /* @__PURE__ */ n.jsxs(
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
  ), j = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : T(), F = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, S = (k, M) => k ? M ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: M, children: k }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: k }) : null, R = (k) => {
    if (k.active || k.current) {
      const M = k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: M });
    }
    return k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: v,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...d,
      ...f,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: g, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            m ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: m, children: [
              j(),
              F(),
              h && S(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              j(),
              F(),
              h && S(r.text)
            ] }),
            r.text && !h && S(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx($n, { ...o }),
          /* @__PURE__ */ n.jsx(
            Tn,
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
                className: O(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, u).map((k, M) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: O(
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
                          children: R(k)
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
                        className: O(
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
                            children: R(k)
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
}, as = ({
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
  ].filter(Boolean).join(" "), h = [
    "nhsuk-hero__heading",
    r,
    !c && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), m = c || e || a || o, v = () => {
    if (!e) return null;
    const g = { className: h };
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
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: m && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          v(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && m && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          v(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
as.displayName = "Hero";
const Fr = ({
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
      className: O("nhsuk-footer__list-item", {
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
    /* @__PURE__ */ n.jsxs("div", { className: O("nhsuk-width-container", i), children: [
      /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ n.jsx("div", { className: O("nhsuk-footer", e), children: d ? (
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
function ut(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ss(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Hn(e) {
  let t, r, a;
  e.length !== 2 ? (t = ut, r = (l, c) => ut(e(l), c), a = (l, c) => e(l) - c) : (t = e === ut || e === ss ? e : os, r = e, a = e);
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
function os() {
  return 0;
}
function is(e) {
  return e === null ? NaN : +e;
}
const ls = Hn(ut), cs = ls.right;
Hn(is).center;
const us = Math.sqrt(50), ds = Math.sqrt(10), hs = Math.sqrt(2);
function Dr(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= us ? 10 : s >= ds ? 5 : s >= hs ? 2 : 1;
  let l, c, d;
  return o < 0 ? (d = Math.pow(10, -o) / i, l = Math.round(e * d), c = Math.round(t * d), l / d < e && ++l, c / d > t && --c, d = -d) : (d = Math.pow(10, o) * i, l = Math.round(e / d), c = Math.round(t / d), l * d < e && ++l, c * d > t && --c), c < l && 0.5 <= r && r < 2 ? Dr(e, t, r * 2) : [l, c, d];
}
function Xn(e, t, r) {
  return t = +t, e = +e, r = +r, Dr(e, t, r)[2];
}
function Qn(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? Xn(t, e, r) : Xn(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function fs(e, t) {
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
function En(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Mr(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function at() {
}
var tt = 0.7, dt = 1 / tt, Ue = "\\s*([+-]?\\d+)\\s*", nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", be = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ms = /^#([0-9a-f]{3,8})$/, ps = new RegExp(`^rgb\\(${Ue},${Ue},${Ue}\\)$`), gs = new RegExp(`^rgb\\(${be},${be},${be}\\)$`), xs = new RegExp(`^rgba\\(${Ue},${Ue},${Ue},${nt}\\)$`), bs = new RegExp(`^rgba\\(${be},${be},${be},${nt}\\)$`), ys = new RegExp(`^hsl\\(${nt},${be},${be}\\)$`), ks = new RegExp(`^hsla\\(${nt},${be},${be},${nt}\\)$`), er = {
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
En(at, rt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: tr,
  // Deprecated! Use color.formatHex.
  formatHex: tr,
  formatHex8: vs,
  formatHsl: _s,
  formatRgb: nr,
  toString: nr
});
function tr() {
  return this.rgb().formatHex();
}
function vs() {
  return this.rgb().formatHex8();
}
function _s() {
  return Rr(this).formatHsl();
}
function nr() {
  return this.rgb().formatRgb();
}
function rt(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = ms.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? rr(t) : r === 3 ? new fe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? it(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? it(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ps.exec(e)) ? new fe(t[1], t[2], t[3], 1) : (t = gs.exec(e)) ? new fe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = xs.exec(e)) ? it(t[1], t[2], t[3], t[4]) : (t = bs.exec(e)) ? it(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ys.exec(e)) ? or(t[1], t[2] / 100, t[3] / 100, 1) : (t = ks.exec(e)) ? or(t[1], t[2] / 100, t[3] / 100, t[4]) : er.hasOwnProperty(e) ? rr(er[e]) : e === "transparent" ? new fe(NaN, NaN, NaN, 0) : null;
}
function rr(e) {
  return new fe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function it(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new fe(e, t, r, a);
}
function Ss(e) {
  return e instanceof at || (e = rt(e)), e ? (e = e.rgb(), new fe(e.r, e.g, e.b, e.opacity)) : new fe();
}
function nn(e, t, r, a) {
  return arguments.length === 1 ? Ss(e) : new fe(e, t, r, a ?? 1);
}
function fe(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
En(fe, nn, Mr(at, {
  brighter(e) {
    return e = e == null ? dt : Math.pow(dt, e), new fe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? tt : Math.pow(tt, e), new fe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new fe(He(this.r), He(this.g), He(this.b), ht(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ar,
  // Deprecated! Use color.formatHex.
  formatHex: ar,
  formatHex8: ws,
  formatRgb: sr,
  toString: sr
}));
function ar() {
  return `#${$e(this.r)}${$e(this.g)}${$e(this.b)}`;
}
function ws() {
  return `#${$e(this.r)}${$e(this.g)}${$e(this.b)}${$e((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function sr() {
  const e = ht(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${He(this.r)}, ${He(this.g)}, ${He(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ht(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function He(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function $e(e) {
  return e = He(e), (e < 16 ? "0" : "") + e.toString(16);
}
function or(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ge(e, t, r, a);
}
function Rr(e) {
  if (e instanceof ge) return new ge(e.h, e.s, e.l, e.opacity);
  if (e instanceof at || (e = rt(e)), !e) return new ge();
  if (e instanceof ge) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new ge(i, l, c, e.opacity);
}
function Cs(e, t, r, a) {
  return arguments.length === 1 ? Rr(e) : new ge(e, t, r, a ?? 1);
}
function ge(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
En(ge, Cs, Mr(at, {
  brighter(e) {
    return e = e == null ? dt : Math.pow(dt, e), new ge(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? tt : Math.pow(tt, e), new ge(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new fe(
      qt(e >= 240 ? e - 240 : e + 120, o, a),
      qt(e, o, a),
      qt(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new ge(ir(this.h), lt(this.s), lt(this.l), ht(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ht(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ir(this.h)}, ${lt(this.s) * 100}%, ${lt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ir(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function lt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function qt(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const zn = (e) => () => e;
function js(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Ns(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function Ts(e) {
  return (e = +e) == 1 ? Ir : function(t, r) {
    return r - t ? Ns(t, r, e) : zn(isNaN(t) ? r : t);
  };
}
function Ir(e, t) {
  var r = t - e;
  return r ? js(e, r) : zn(isNaN(e) ? t : e);
}
const lr = function e(t) {
  var r = Ts(t);
  function a(o, s) {
    var i = r((o = nn(o)).r, (s = nn(s)).r), l = r(o.g, s.g), c = r(o.b, s.b), d = Ir(o.opacity, s.opacity);
    return function(u) {
      return o.r = i(u), o.g = l(u), o.b = c(u), o.opacity = d(u), o + "";
    };
  }
  return a.gamma = e, a;
}(1);
function Bs(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Fs(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ds(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = An(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Ms(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function ft(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Rs(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = An(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var rn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Kt = new RegExp(rn.source, "g");
function Is(e) {
  return function() {
    return e;
  };
}
function Ls(e) {
  return function(t) {
    return e(t) + "";
  };
}
function $s(e, t) {
  var r = rn.lastIndex = Kt.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = rn.exec(e)) && (o = Kt.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: ft(a, o) })), r = Kt.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? Ls(c[0].x) : Is(t) : (t = c.length, function(d) {
    for (var u = 0, f; u < t; ++u) l[(f = c[u]).i] = f.x(d);
    return l.join("");
  });
}
function An(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? zn(t) : (r === "number" ? ft : r === "string" ? (a = rt(t)) ? (t = a, lr) : $s : t instanceof rt ? lr : t instanceof Date ? Ms : Fs(t) ? Bs : Array.isArray(t) ? Ds : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Rs : ft)(e, t);
}
function Hs(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Es(e) {
  return function() {
    return e;
  };
}
function zs(e) {
  return +e;
}
var cr = [0, 1];
function We(e) {
  return e;
}
function an(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Es(isNaN(t) ? NaN : 0.5);
}
function As(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Ps(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = an(o, a), s = r(i, s)) : (a = an(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function Ws(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = an(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = cs(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function Os(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Us() {
  var e = cr, t = cr, r = An, a, o, s, i = We, l, c, d;
  function u() {
    var h = Math.min(e.length, t.length);
    return i !== We && (i = As(e[0], e[h - 1])), l = h > 2 ? Ws : Ps, c = d = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (c || (c = l(e.map(a), t, r)))(a(i(h)));
  }
  return f.invert = function(h) {
    return i(o((d || (d = l(t, e.map(a), ft)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, zs), u()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), u()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), r = Hs, u();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : We, u()) : i !== We;
  }, f.interpolate = function(h) {
    return arguments.length ? (r = h, u()) : r;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, m) {
    return a = h, o = m, u();
  };
}
function Ys() {
  return Us()(We, We);
}
function Gs(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const Zt = /* @__PURE__ */ new Date(), Jt = /* @__PURE__ */ new Date();
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
  }), r && (o.count = (s, i) => (Zt.setTime(+s), Jt.setTime(+i), e(Zt), e(Jt), Math.floor(r(Zt, Jt))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const mt = ce(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
mt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ce((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : mt);
mt.range;
const Fe = 1e3, me = Fe * 60, De = me * 60, Re = De * 24, Pn = Re * 7, ur = Re * 30, Xt = Re * 365, Oe = ce((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Fe);
}, (e, t) => (t - e) / Fe, (e) => e.getUTCSeconds());
Oe.range;
const Wn = ce((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Fe);
}, (e, t) => {
  e.setTime(+e + t * me);
}, (e, t) => (t - e) / me, (e) => e.getMinutes());
Wn.range;
const Vs = ce((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * me);
}, (e, t) => (t - e) / me, (e) => e.getUTCMinutes());
Vs.range;
const On = ce((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Fe - e.getMinutes() * me);
}, (e, t) => {
  e.setTime(+e + t * De);
}, (e, t) => (t - e) / De, (e) => e.getHours());
On.range;
const qs = ce((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * De);
}, (e, t) => (t - e) / De, (e) => e.getUTCHours());
qs.range;
const st = ce(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * me) / Re,
  (e) => e.getDate() - 1
);
st.range;
const Un = ce((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Re, (e) => e.getUTCDate() - 1);
Un.range;
const Ks = ce((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Re, (e) => Math.floor(e / Re));
Ks.range;
function ze(e) {
  return ce((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * me) / Pn);
}
const Yt = ze(0), pt = ze(1), Zs = ze(2), Js = ze(3), Ye = ze(4), Xs = ze(5), Qs = ze(6);
Yt.range;
pt.range;
Zs.range;
Js.range;
Ye.range;
Xs.range;
Qs.range;
function Ae(e) {
  return ce((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Pn);
}
const Lr = Ae(0), gt = Ae(1), eo = Ae(2), to = Ae(3), Ge = Ae(4), no = Ae(5), ro = Ae(6);
Lr.range;
gt.range;
eo.range;
to.range;
Ge.range;
no.range;
ro.range;
const Yn = ce((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Yn.range;
const ao = ce((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
ao.range;
const Ie = ce((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ie.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ce((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Ie.range;
const Ee = ce((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Ee.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ce((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Ee.range;
function so(e, t, r, a, o, s) {
  const i = [
    [Oe, 1, Fe],
    [Oe, 5, 5 * Fe],
    [Oe, 15, 15 * Fe],
    [Oe, 30, 30 * Fe],
    [s, 1, me],
    [s, 5, 5 * me],
    [s, 15, 15 * me],
    [s, 30, 30 * me],
    [o, 1, De],
    [o, 3, 3 * De],
    [o, 6, 6 * De],
    [o, 12, 12 * De],
    [a, 1, Re],
    [a, 2, 2 * Re],
    [r, 1, Pn],
    [t, 1, ur],
    [t, 3, 3 * ur],
    [e, 1, Xt]
  ];
  function l(d, u, f) {
    const h = u < d;
    h && ([d, u] = [u, d]);
    const m = f && typeof f.range == "function" ? f : c(d, u, f), v = m ? m.range(d, +u + 1) : [];
    return h ? v.reverse() : v;
  }
  function c(d, u, f) {
    const h = Math.abs(u - d) / f, m = Hn(([, , C]) => C).right(i, h);
    if (m === i.length) return e.every(Qn(d / Xt, u / Xt, f));
    if (m === 0) return mt.every(Math.max(Qn(d, u, f), 1));
    const [v, g] = i[h / i[m - 1][2] < i[m][2] / h ? m - 1 : m];
    return v.every(g);
  }
  return [l, c];
}
const [oo, io] = so(Ie, Yn, Yt, st, On, Wn);
function Qt(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function en(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Xe(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function lo(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, d = Qe(o), u = et(o), f = Qe(s), h = et(s), m = Qe(i), v = et(i), g = Qe(l), C = et(l), T = Qe(c), j = et(c), F = {
    a: J,
    A: Q,
    b: Z,
    B: w,
    c: null,
    d: gr,
    e: gr,
    f: Mo,
    g: Wo,
    G: Uo,
    H: Bo,
    I: Fo,
    j: Do,
    L: $r,
    m: Ro,
    M: Io,
    p: W,
    q: H,
    Q: yr,
    s: kr,
    S: Lo,
    u: $o,
    U: Ho,
    V: Eo,
    w: zo,
    W: Ao,
    x: null,
    X: null,
    y: Po,
    Y: Oo,
    Z: Yo,
    "%": br
  }, S = {
    a: G,
    A: z,
    b,
    B: x,
    c: null,
    d: xr,
    e: xr,
    f: Ko,
    g: si,
    G: ii,
    H: Go,
    I: Vo,
    j: qo,
    L: Er,
    m: Zo,
    M: Jo,
    p: I,
    q: Y,
    Q: yr,
    s: kr,
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
    "%": br
  }, R = {
    a: _,
    A: p,
    b: A,
    B: K,
    c: q,
    d: mr,
    e: mr,
    f: Co,
    g: fr,
    G: hr,
    H: pr,
    I: pr,
    j: vo,
    L: wo,
    m: ko,
    M: _o,
    p: y,
    q: yo,
    Q: No,
    s: To,
    S: So,
    u: mo,
    U: po,
    V: go,
    w: fo,
    W: xo,
    x: $,
    X: P,
    y: fr,
    Y: hr,
    Z: bo,
    "%": jo
  };
  F.x = k(r, F), F.X = k(a, F), F.c = k(t, F), S.x = k(r, S), S.X = k(a, S), S.c = k(t, S);
  function k(B, L) {
    return function(E) {
      var N = [], te = -1, V = 0, U = B.length, ee, oe, ae;
      for (E instanceof Date || (E = /* @__PURE__ */ new Date(+E)); ++te < U; )
        B.charCodeAt(te) === 37 && (N.push(B.slice(V, te)), (oe = dr[ee = B.charAt(++te)]) != null ? ee = B.charAt(++te) : oe = ee === "e" ? " " : "0", (ae = L[ee]) && (ee = ae(E, oe)), N.push(ee), V = te + 1);
      return N.push(B.slice(V, te)), N.join("");
    };
  }
  function M(B, L) {
    return function(E) {
      var N = Xe(1900, void 0, 1), te = D(N, B, E += "", 0), V, U;
      if (te != E.length) return null;
      if ("Q" in N) return new Date(N.Q);
      if ("s" in N) return new Date(N.s * 1e3 + ("L" in N ? N.L : 0));
      if (L && !("Z" in N) && (N.Z = 0), "p" in N && (N.H = N.H % 12 + N.p * 12), N.m === void 0 && (N.m = "q" in N ? N.q : 0), "V" in N) {
        if (N.V < 1 || N.V > 53) return null;
        "w" in N || (N.w = 1), "Z" in N ? (V = en(Xe(N.y, 0, 1)), U = V.getUTCDay(), V = U > 4 || U === 0 ? gt.ceil(V) : gt(V), V = Un.offset(V, (N.V - 1) * 7), N.y = V.getUTCFullYear(), N.m = V.getUTCMonth(), N.d = V.getUTCDate() + (N.w + 6) % 7) : (V = Qt(Xe(N.y, 0, 1)), U = V.getDay(), V = U > 4 || U === 0 ? pt.ceil(V) : pt(V), V = st.offset(V, (N.V - 1) * 7), N.y = V.getFullYear(), N.m = V.getMonth(), N.d = V.getDate() + (N.w + 6) % 7);
      } else ("W" in N || "U" in N) && ("w" in N || (N.w = "u" in N ? N.u % 7 : "W" in N ? 1 : 0), U = "Z" in N ? en(Xe(N.y, 0, 1)).getUTCDay() : Qt(Xe(N.y, 0, 1)).getDay(), N.m = 0, N.d = "W" in N ? (N.w + 6) % 7 + N.W * 7 - (U + 5) % 7 : N.w + N.U * 7 - (U + 6) % 7);
      return "Z" in N ? (N.H += N.Z / 100 | 0, N.M += N.Z % 100, en(N)) : Qt(N);
    };
  }
  function D(B, L, E, N) {
    for (var te = 0, V = L.length, U = E.length, ee, oe; te < V; ) {
      if (N >= U) return -1;
      if (ee = L.charCodeAt(te++), ee === 37) {
        if (ee = L.charAt(te++), oe = R[ee in dr ? L.charAt(te++) : ee], !oe || (N = oe(B, E, N)) < 0) return -1;
      } else if (ee != E.charCodeAt(N++))
        return -1;
    }
    return N;
  }
  function y(B, L, E) {
    var N = d.exec(L.slice(E));
    return N ? (B.p = u.get(N[0].toLowerCase()), E + N[0].length) : -1;
  }
  function _(B, L, E) {
    var N = m.exec(L.slice(E));
    return N ? (B.w = v.get(N[0].toLowerCase()), E + N[0].length) : -1;
  }
  function p(B, L, E) {
    var N = f.exec(L.slice(E));
    return N ? (B.w = h.get(N[0].toLowerCase()), E + N[0].length) : -1;
  }
  function A(B, L, E) {
    var N = T.exec(L.slice(E));
    return N ? (B.m = j.get(N[0].toLowerCase()), E + N[0].length) : -1;
  }
  function K(B, L, E) {
    var N = g.exec(L.slice(E));
    return N ? (B.m = C.get(N[0].toLowerCase()), E + N[0].length) : -1;
  }
  function q(B, L, E) {
    return D(B, t, L, E);
  }
  function $(B, L, E) {
    return D(B, r, L, E);
  }
  function P(B, L, E) {
    return D(B, a, L, E);
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
  function w(B) {
    return l[B.getMonth()];
  }
  function W(B) {
    return o[+(B.getHours() >= 12)];
  }
  function H(B) {
    return 1 + ~~(B.getMonth() / 3);
  }
  function G(B) {
    return i[B.getUTCDay()];
  }
  function z(B) {
    return s[B.getUTCDay()];
  }
  function b(B) {
    return c[B.getUTCMonth()];
  }
  function x(B) {
    return l[B.getUTCMonth()];
  }
  function I(B) {
    return o[+(B.getUTCHours() >= 12)];
  }
  function Y(B) {
    return 1 + ~~(B.getUTCMonth() / 3);
  }
  return {
    format: function(B) {
      var L = k(B += "", F);
      return L.toString = function() {
        return B;
      }, L;
    },
    parse: function(B) {
      var L = M(B += "", !1);
      return L.toString = function() {
        return B;
      }, L;
    },
    utcFormat: function(B) {
      var L = k(B += "", S);
      return L.toString = function() {
        return B;
      }, L;
    },
    utcParse: function(B) {
      var L = M(B += "", !0);
      return L.toString = function() {
        return B;
      }, L;
    }
  };
}
var dr = { "-": "", _: " ", 0: "0" }, ue = /^\s*\d+/, co = /^%/, uo = /[\\^$*+?|[\]().{}]/g;
function ne(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function ho(e) {
  return e.replace(uo, "\\$&");
}
function Qe(e) {
  return new RegExp("^(?:" + e.map(ho).join("|") + ")", "i");
}
function et(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function fo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function mo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function po(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function go(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function xo(e, t, r) {
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
function bo(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function yo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function ko(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function mr(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function vo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function pr(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function _o(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function So(e, t, r) {
  var a = ue.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function wo(e, t, r) {
  var a = ue.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function Co(e, t, r) {
  var a = ue.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function jo(e, t, r) {
  var a = co.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function No(e, t, r) {
  var a = ue.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function To(e, t, r) {
  var a = ue.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function gr(e, t) {
  return ne(e.getDate(), t, 2);
}
function Bo(e, t) {
  return ne(e.getHours(), t, 2);
}
function Fo(e, t) {
  return ne(e.getHours() % 12 || 12, t, 2);
}
function Do(e, t) {
  return ne(1 + st.count(Ie(e), e), t, 3);
}
function $r(e, t) {
  return ne(e.getMilliseconds(), t, 3);
}
function Mo(e, t) {
  return $r(e, t) + "000";
}
function Ro(e, t) {
  return ne(e.getMonth() + 1, t, 2);
}
function Io(e, t) {
  return ne(e.getMinutes(), t, 2);
}
function Lo(e, t) {
  return ne(e.getSeconds(), t, 2);
}
function $o(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Ho(e, t) {
  return ne(Yt.count(Ie(e) - 1, e), t, 2);
}
function Hr(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ye(e) : Ye.ceil(e);
}
function Eo(e, t) {
  return e = Hr(e), ne(Ye.count(Ie(e), e) + (Ie(e).getDay() === 4), t, 2);
}
function zo(e) {
  return e.getDay();
}
function Ao(e, t) {
  return ne(pt.count(Ie(e) - 1, e), t, 2);
}
function Po(e, t) {
  return ne(e.getFullYear() % 100, t, 2);
}
function Wo(e, t) {
  return e = Hr(e), ne(e.getFullYear() % 100, t, 2);
}
function Oo(e, t) {
  return ne(e.getFullYear() % 1e4, t, 4);
}
function Uo(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Ye(e) : Ye.ceil(e), ne(e.getFullYear() % 1e4, t, 4);
}
function Yo(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ne(t / 60 | 0, "0", 2) + ne(t % 60, "0", 2);
}
function xr(e, t) {
  return ne(e.getUTCDate(), t, 2);
}
function Go(e, t) {
  return ne(e.getUTCHours(), t, 2);
}
function Vo(e, t) {
  return ne(e.getUTCHours() % 12 || 12, t, 2);
}
function qo(e, t) {
  return ne(1 + Un.count(Ee(e), e), t, 3);
}
function Er(e, t) {
  return ne(e.getUTCMilliseconds(), t, 3);
}
function Ko(e, t) {
  return Er(e, t) + "000";
}
function Zo(e, t) {
  return ne(e.getUTCMonth() + 1, t, 2);
}
function Jo(e, t) {
  return ne(e.getUTCMinutes(), t, 2);
}
function Xo(e, t) {
  return ne(e.getUTCSeconds(), t, 2);
}
function Qo(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function ei(e, t) {
  return ne(Lr.count(Ee(e) - 1, e), t, 2);
}
function zr(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ge(e) : Ge.ceil(e);
}
function ti(e, t) {
  return e = zr(e), ne(Ge.count(Ee(e), e) + (Ee(e).getUTCDay() === 4), t, 2);
}
function ni(e) {
  return e.getUTCDay();
}
function ri(e, t) {
  return ne(gt.count(Ee(e) - 1, e), t, 2);
}
function ai(e, t) {
  return ne(e.getUTCFullYear() % 100, t, 2);
}
function si(e, t) {
  return e = zr(e), ne(e.getUTCFullYear() % 100, t, 2);
}
function oi(e, t) {
  return ne(e.getUTCFullYear() % 1e4, t, 4);
}
function ii(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ge(e) : Ge.ceil(e), ne(e.getUTCFullYear() % 1e4, t, 4);
}
function li() {
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
var Pe, Ar;
ci({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ci(e) {
  return Pe = lo(e), Ar = Pe.format, Pe.parse, Pe.utcFormat, Pe.utcParse, Pe;
}
function ui(e) {
  return new Date(e);
}
function di(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Pr(e, t, r, a, o, s, i, l, c, d) {
  var u = Ys(), f = u.invert, h = u.domain, m = d(".%L"), v = d(":%S"), g = d("%I:%M"), C = d("%I %p"), T = d("%a %d"), j = d("%b %d"), F = d("%B"), S = d("%Y");
  function R(k) {
    return (c(k) < k ? m : l(k) < k ? v : i(k) < k ? g : s(k) < k ? C : a(k) < k ? o(k) < k ? T : j : r(k) < k ? F : S)(k);
  }
  return u.invert = function(k) {
    return new Date(f(k));
  }, u.domain = function(k) {
    return arguments.length ? h(Array.from(k, di)) : h().map(ui);
  }, u.ticks = function(k) {
    var M = h();
    return e(M[0], M[M.length - 1], k ?? 10);
  }, u.tickFormat = function(k, M) {
    return M == null ? R : d(M);
  }, u.nice = function(k) {
    var M = h();
    return (!k || typeof k.range != "function") && (k = t(M[0], M[M.length - 1], k ?? 10)), k ? h(Gs(M, k)) : u;
  }, u.copy = function() {
    return Os(u, Pr(e, t, r, a, o, s, i, l, c, d));
  }, u;
}
function hi() {
  return fs.apply(Pr(oo, io, Ie, Yn, Yt, st, On, Wn, Oe, Ar).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function fi({
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
  const d = se(null), [u, f] = re(!1), [h, m] = re(!1), v = t(e.start), g = t(e.end), C = Math.max(g - v, 20), T = () => {
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
  }, j = e.progress ? C * e.progress / 100 : 0, F = () => {
    r?.(e);
  }, S = () => {
    a?.(e);
  }, R = (A) => {
    A.key === "Enter" ? (A.preventDefault(), F()) : A.key === " " && (A.preventDefault(), S());
  }, k = () => {
    f(!0);
  }, M = () => {
    f(!1);
  }, D = () => {
    m(!0), l?.();
  }, y = () => {
    m(!1);
  }, _ = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (h || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), p = {
    "--task-left": `${v}px`,
    "--task-width": `${C}px`,
    "--task-color": T(),
    left: `${v}px`,
    width: `${C}px`,
    backgroundColor: T()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: d,
      "data-task-index": s,
      className: _,
      style: p,
      onClick: F,
      onDoubleClick: S,
      onKeyDown: R,
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
            style: { width: `${j}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function mi({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let m = e.getTime(); m <= t.getTime(); m += 864e5)
    a.push(new Date(m));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = re(-1), c = se(null), d = (m) => {
    if (m.key === "ArrowLeft") {
      m.preventDefault();
      const v = Math.max(0, i === -1 ? 0 : i - 1);
      l(v), h(v);
    } else if (m.key === "ArrowRight") {
      m.preventDefault();
      const v = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(v), h(v);
    } else if (m.key === "ArrowDown") {
      m.preventDefault();
      const v = document.querySelector(".gantt-row .timeline-container");
      v && v.focus();
    } else if (m.key === "Home")
      m.preventDefault(), l(0), h(0);
    else if (m.key === "End") {
      m.preventDefault();
      const v = a.length - 1;
      l(v), h(v);
    }
  }, u = (m) => {
    if (m.key === "ArrowDown") {
      m.preventDefault();
      const v = document.querySelector(".gantt-row .resource-label");
      v && v.focus();
    } else if (m.key === "ArrowRight") {
      m.preventDefault();
      const v = c.current;
      v && v.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => h(0), 0));
  }, h = (m) => {
    const v = c.current?.querySelector(`[data-date-index="${m}"]`);
    v && v.focus();
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
            children: a.map((m, v) => {
              const g = m.getTime() === s.getTime(), C = i === v;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": v,
                  className: `date-column ${g ? "today" : ""} ${C ? "focused" : ""}`,
                  tabIndex: C ? 0 : -1,
                  role: "button",
                  "aria-label": `${m.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
                  onFocus: () => l(v),
                  onKeyDown: d,
                  children: m.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                v
              );
            })
          }
        )
      ]
    }
  );
}
function pi({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = re(!1), [d, u] = re(-1), f = se(null);
  le(() => {
    l && d >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${d}"]`)?.focus();
    }, 0);
  }, [l, d, t.length]);
  const h = (g) => {
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
        const C = Math.max(0, d - 1);
        u(C), f.current?.querySelector(`[data-task-index="${C}"]`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault();
        const j = Math.min(t.length - 1, d + 1);
        u(j), f.current?.querySelector(`[data-task-index="${j}"]`)?.focus();
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
  }, m = (g) => {
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
  }, v = (g) => {
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
            onKeyDown: m,
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
            onKeyDown: h,
            onFocus: () => {
              l || u(-1);
            },
            children: t.map((g, C) => /* @__PURE__ */ n.jsx(
              fi,
              {
                task: g,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && d === C,
                taskIndex: C,
                tabIndex: l && d === C ? 0 : -1,
                onFocus: () => v(C)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function Rd({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = se(null), [l, c] = re(800), d = ie(() => {
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
    const g = new ResizeObserver((C) => {
      const T = C[0];
      T && c(Math.max(T.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const h = ie(
    () => hi().domain([d, u]).range([0, l]),
    [d, u, l]
  ), m = ie(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((C) => {
      const T = g.get(C.resourceId) || [];
      T.push(C), g.set(C.resourceId, T);
    }), g;
  }, [t]), v = (g) => {
    if (g.target === g.currentTarget)
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault();
          const C = i.current?.querySelector(".gantt-row .resource-label");
          C && C.focus();
          break;
        case "Home":
          g.preventDefault();
          const T = i.current?.querySelector(".header-resource");
          T && T.focus();
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
      onKeyDown: v,
      children: [
        /* @__PURE__ */ n.jsx(mi, { viewStart: d, viewEnd: u, dateCount: f }),
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
            children: e.map((g, C) => /* @__PURE__ */ n.jsx(
              pi,
              {
                resource: g,
                tasks: m.get(g.id) || [],
                scale: h,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: C,
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
const xt = ({
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
) }), gi = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? Le.Children.toArray(t).filter(
    (T) => Le.isValidElement(T) && (T.type === xt || T.type?.displayName === "BreadcrumbItem")
  ).map((T) => ({
    text: typeof T.props.children == "string" ? T.props.children : String(T.props.children),
    href: T.props.href,
    active: T.props.active,
    attributes: T.props.attributes
  })) : [], d = () => t ? c() : o && s ? [{ href: o, text: s }] : e, u = () => {
    const C = d();
    if (C && C.length > 0) {
      const T = C.slice().reverse().find((j) => j.href && !j.active);
      if (T)
        return { href: T.href, text: T.text };
    }
    return { text: "Home" };
  }, f = d(), h = u(), m = O(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), g = f && f.length > 1 ? a : void 0;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: m,
      "aria-label": g,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          Le.Children.map(t, (C, T) => Le.isValidElement(C) && (C.type === xt || C.type?.displayName === "BreadcrumbItem") ? Le.cloneElement(C, { key: T }) : null)
        ) : (
          // Render from items array
          f?.map((C, T) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: C.active ? /* @__PURE__ */ n.jsx(
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
          ) }, T))
        ) }),
        h.href && /* @__PURE__ */ n.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ n.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: h.href,
            role: "link",
            "aria-label": `Back to ${h.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              h.text
            ]
          }
        ) })
      ]
    }
  );
}, xi = gi;
xi.Item = xt;
xt.displayName = "BreadcrumbItem";
const Wr = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [o, s] = re(!1);
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
          const h = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
          }, 3e3);
          d.__nhsSkipLinkTimeout = h;
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
  const i = O("nhsuk-skip-link", r);
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
}, Id = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = O("nhsuk-pagination", o);
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
}, Ld = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = O("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, $d = ({
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
  "data-testid": h,
  id: m,
  "aria-label": v,
  "aria-labelledby": g,
  "aria-describedby": C
}) => {
  const T = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    u
  ].filter(Boolean).join(" "), j = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), F = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), S = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const M = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Me,
      {
        level: a,
        className: F,
        children: M()
      }
    );
  }, R = () => f || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null), k = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      className: T,
      "data-testid": h,
      id: m,
      "aria-label": v,
      "aria-labelledby": g,
      "aria-describedby": C,
      children: [
        c && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: d || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: j, children: [
          S(),
          R(),
          k()
        ] })
      ]
    }
  );
}, Hd = ({
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
}, Ed = ({
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
}, zd = ({
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
  "aria-labelledby": h,
  "aria-describedby": m
}) => {
  const v = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), g = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), C = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const j = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], F = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        j,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Me,
      {
        level: a,
        className: g,
        children: F
      }
    );
  }, T = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: v,
      "data-testid": d,
      id: u,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": m,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          C(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: T() })
      ]
    }
  );
}, bi = ({
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
  const d = O(
    "nhsuk-panel",
    t
  ), u = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Me,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Me,
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
}, Ad = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = O("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, Pd = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = O(
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
}, Wd = ({
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
  attributes: h,
  "data-testid": m
}) => {
  const v = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), g = O(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), C = O(f), T = (S, R) => {
    const k = O("nhsuk-table__header", {
      [`nhsuk-table__header--${S.format}`]: S.format
    }, S.classes), M = {
      scope: "col",
      ...S.colspan && { colSpan: S.colspan },
      ...S.rowspan && { rowSpan: S.rowspan },
      ...s && { role: "columnheader" },
      ...S.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: k, ...M, children: S.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text }, R);
  }, j = (S, R, k) => {
    const M = o && k, D = O(
      M ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${M ? "header" : "cell"}--${S.format}`]: S.format
      },
      S.classes
    ), y = {
      ...M && { scope: "row" },
      ...S.colspan && { colSpan: S.colspan },
      ...S.rowspan && { rowSpan: S.rowspan },
      ...s && {
        role: M ? "rowheader" : "cell",
        ...S.header && { "data-label": S.header }
      },
      ...S.attributes
    }, _ = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && S.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        S.header,
        " "
      ] }),
      S.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text
    ] }), p = M ? "th" : "td";
    return /* @__PURE__ */ n.jsx(p, { className: D, ...y, children: _ }, R);
  }, F = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: g,
      ...s && { role: "table" },
      ...h,
      ...m && { "data-testid": m },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: v, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((S, R) => T(S, R)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((S, R) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: S.map(
              (k, M) => j(k, M, M === 0)
            )
          },
          R
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(bi, { className: d, children: [
    i && /* @__PURE__ */ n.jsx(Me, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    F()
  ] }) : C ? /* @__PURE__ */ n.jsx("div", { className: C, children: F() }) : F();
}, Od = Ve(({
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
}, h) => {
  const m = r !== void 0, [v, g] = re(() => t || e[0]?.id || ""), C = m ? r : v, T = se(null), j = se(/* @__PURE__ */ new Map()), F = X((_) => {
    m || g(_), a?.(_);
  }, [m, a]), S = X((_) => {
    o?.(_), l && F(_);
  }, [o, l, F]), R = X((_, p) => {
    const A = e.filter(($) => !$.disabled).map(($) => $.id), K = A.indexOf(p);
    let q = null;
    switch (_.key) {
      case "ArrowLeft":
        q = K > 0 ? K - 1 : A.length - 1;
        break;
      case "ArrowRight":
        q = K < A.length - 1 ? K + 1 : 0;
        break;
      case "Home":
        q = 0;
        break;
      case "End":
        q = A.length - 1;
        break;
      case "Escape":
        _.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (q !== null) {
      _.preventDefault();
      const $ = A[q], P = j.current.get($);
      P && (P.focus(), S($));
    }
  }, [e, S, i]), k = X((_, p) => {
    p ? j.current.set(_, p) : j.current.delete(_);
  }, []), M = X((_) => {
    const p = j.current.get(_);
    p && p.focus();
  }, []);
  Sr(h, () => ({
    focusTab: M,
    getActiveTab: () => C,
    getTabListElement: () => T.current
  }), [M, C]);
  const D = X((_) => {
    const p = _.relatedTarget;
    T.current?.contains(p) || s?.();
  }, [s]), y = O("nhsuk-tabs", c);
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
            ref: T,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: D,
                children: e.map((_) => {
                  const p = _.id === C, A = _.disabled, K = O("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": p,
                    "nhsuk-tabs__list-item--disabled": A
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: K, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (q) => k(_.id, q),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": p,
                      "aria-controls": `${_.id}-panel`,
                      id: `${_.id}-tab`,
                      tabIndex: p ? 0 : -1,
                      disabled: A,
                      onClick: () => !A && F(_.id),
                      onKeyDown: (q) => !A && R(q, _.id),
                      onFocus: () => !A && S(_.id),
                      ..._.attributes,
                      children: _.label
                    }
                  ) }, _.id);
                })
              }
            )
          }
        ),
        e.map((_) => {
          const p = _.id === C;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${_.id}-tab`,
              id: `${_.id}-panel`,
              hidden: !p,
              children: _.content
            },
            _.id
          );
        })
      ]
    }
  );
}), yi = Ve(
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
    let h;
    return l ? h = l : a ? h = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (h = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: d,
        id: i,
        className: u,
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
yi.displayName = "Details";
const ki = Ve(
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
    ), f = (m) => t === "cross" && !a ? `do not ${m}` : m, h = () => /* @__PURE__ */ n.jsx(
      Me,
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
          h(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: d.join(" "), role: "list", children: r.map((m, v) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            f(m.item)
          ] }, v)) }) })
        ]
      }
    );
  }
);
ki.displayName = "DoDontList";
const vi = Ve(
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
    let h;
    return l ? h = l : a ? h = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (h = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: d,
        id: i,
        className: u,
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
vi.displayName = "Expander";
const _i = Ve(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const d = c + 1, u = `${t}-${d}-hint`, f = `${t}-${d}-status`, h = !!l.href, m = [
        "nhsuk-task-list__item",
        h && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), v = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Si,
        {
          item: l,
          itemClasses: m,
          hasLink: h,
          hintId: u,
          statusId: f,
          ariaDescribedBy: v
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
), Si = ({
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
    return e.status.tag ? u = /* @__PURE__ */ n.jsx(Fn, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ n.jsx("div", { className: d, id: o, children: u });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
_i.displayName = "TaskList";
const Ud = ({
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
        _r(
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
}, Yd = ({
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
}, wi = ({
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
    /* @__PURE__ */ n.jsx(Me, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, Gd = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(Ja, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    Ln,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      children: /* @__PURE__ */ n.jsx(wi, { ...o })
    },
    s
  )) }) });
}, Ci = Le.forwardRef(
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
    tableClassName: h,
    bordered: m = !1,
    striped: v = !1,
    responsive: g = !1,
    tableType: C = "default"
  }, T) => {
    const j = se(null), F = se(null), S = se(null);
    Le.useImperativeHandle(T, () => j.current, []);
    const [R, k] = re(0), [M, D] = re(0), [y, _] = re("headers"), [p, A] = re("browse"), K = t.length, q = e.length, $ = ie(() => !r || r.length === 0 ? e : [...e].sort((H, G) => {
      for (const { key: z, direction: b } of r) {
        const x = H[z], I = G[z];
        if (x == null && I == null) continue;
        if (x == null) return 1;
        if (I == null) return -1;
        let Y = 0;
        if (typeof x == "number" && typeof I == "number" ? Y = x - I : Y = String(x).localeCompare(String(I)), Y !== 0)
          return b === "asc" ? Y : -Y;
      }
      return 0;
    }), [e, r]), P = X((H, G) => {
      setTimeout(() => {
        const z = j.current?.querySelector(
          `tbody tr:nth-child(${H + 1}) td:nth-child(${G + 1})`
        );
        z && (z.focus(), typeof z.scrollIntoView == "function" && z.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), J = X((H) => {
      setTimeout(() => {
        const G = j.current?.querySelector(`th:nth-child(${H + 1})`);
        G && (G.focus(), typeof G.scrollIntoView == "function" && G.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Q = X((H) => {
      a?.(H);
    }, [a]), Z = X((H) => {
      s?.(H);
    }, [s]), w = X((H) => {
      const { key: G } = H;
      switch (G) {
        case "Enter":
          if (H.preventDefault(), y === "headers" && p === "browse")
            A("navigate"), J(M);
          else if (y === "headers" && p === "navigate") {
            const z = t[M];
            z && Q(z.key);
          } else y === "cells" && p === "browse" ? (A("navigate"), P(R, M)) : y === "cells" && p === "navigate" && Z(R);
          break;
        case "Escape":
          H.preventDefault(), (y === "headers" && p === "navigate" || y === "cells" && p === "navigate") && A("browse");
          break;
        case "ArrowLeft":
          if (H.preventDefault(), p === "navigate" || p === "browse" && y === "headers") {
            if (y === "headers") {
              const z = Math.max(0, M - 1);
              D(z), J(z);
            } else if (y === "cells") {
              const z = Math.max(0, M - 1);
              D(z), P(R, z);
            }
          }
          break;
        case "ArrowRight":
          if (H.preventDefault(), p === "navigate" || p === "browse" && y === "headers") {
            if (y === "headers") {
              const z = Math.min(K - 1, M + 1);
              D(z), J(z);
            } else if (y === "cells") {
              const z = Math.min(K - 1, M + 1);
              D(z), P(R, z);
            }
          }
          break;
        case "ArrowUp":
          if (H.preventDefault(), y === "cells") {
            if (p === "browse") {
              const z = Math.max(0, R - 1);
              k(z), P(z, 0), D(0);
            } else if (p === "navigate")
              if (R > 0) {
                const z = R - 1;
                k(z), P(z, M);
              } else
                _("headers"), A("browse"), J(M);
          }
          break;
        case "ArrowDown":
          if (H.preventDefault(), y === "headers" && p === "browse")
            _("cells"), k(0), D(0), P(0, 0);
          else if (y === "cells") {
            const z = q - 1;
            if (p === "browse") {
              const b = Math.min(z, R + 1);
              k(b), P(b, 0), D(0);
            } else if (p === "navigate" && R < z) {
              const b = R + 1;
              k(b), P(b, M);
            }
          }
          break;
        case "Home":
          H.preventDefault(), y === "headers" ? (D(0), J(0)) : y === "cells" && (H.ctrlKey ? (k(0), D(0), P(0, 0)) : (D(0), P(R, 0)));
          break;
        case "End":
          if (H.preventDefault(), y === "headers") {
            const z = K - 1;
            D(z), J(z);
          } else if (y === "cells")
            if (H.ctrlKey) {
              const z = q - 1, b = K - 1;
              k(z), D(b), P(z, b);
            } else {
              const z = K - 1;
              D(z), P(R, z);
            }
          break;
        case " ":
          if (H.preventDefault(), y === "headers" && p === "navigate") {
            const z = t[M];
            z && Q(z.key);
          } else y === "cells" && p === "navigate" && Z(R);
          break;
      }
    }, [
      y,
      p,
      M,
      R,
      K,
      q,
      t,
      P,
      J,
      Q,
      Z
    ]);
    le(() => {
      const H = j.current;
      if (H)
        return H.addEventListener("keydown", w), () => H.removeEventListener("keydown", w);
    }, [w]);
    const W = O(
      "nhsuk-table",
      h,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": m,
        "nhsuk-table--striped": v,
        "nhsuk-table--compact": C === "compact"
      },
      f
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: j,
        className: W,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": d,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: F, role: "row", children: t.map((H, G) => {
            const z = r?.find((I) => I.key === H.key), b = !!z, x = y === "headers" && M === G;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: O("sortable-header", {
                  "sortable-header--focused": x
                }),
                role: "columnheader",
                tabIndex: x ? 0 : -1,
                onClick: () => Q(H.key),
                onKeyDown: (I) => {
                  (I.key === "Enter" || I.key === " ") && (I.preventDefault(), Q(H.key));
                },
                "aria-sort": b ? z?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: H.label }),
                  b && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((I) => I.key === H.key) + 1 }),
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
              H.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: S, className: "nhsuk-table__body", role: "rowgroup", children: $.map((H, G) => {
            const z = o === G, b = y === "cells" && R === G;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: O("data-row", {
                  "data-row--selected": z,
                  "data-row--focused": b
                }),
                "aria-selected": z,
                children: t.map((x, I) => {
                  const Y = x.render ? x.render(H) : H[x.key], B = y === "cells" && R === G && M === I, L = () => typeof Y == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: Y ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: Y ? "Yes" : "No" })
                  ] }) : String(Y ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: O("data-cell", {
                        "data-cell--focused": B
                      }),
                      tabIndex: B ? 0 : -1,
                      onClick: () => Z(G),
                      children: L()
                    },
                    x.key
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
Ci.displayName = "AriaDataGrid";
const ji = ({
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
  const f = se(null), h = se(null), m = se(null), v = X((y, _) => {
    c || (h.current = _, y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", _));
  }, [c]), g = X((y, _) => {
    c || h.current === _ || (y.preventDefault(), y.dataTransfer.dropEffect = "move", m.current = _);
  }, [c]), C = X((y, _) => {
    if (c) return;
    y.preventDefault();
    const p = h.current;
    if (!p || p === _) return;
    const A = e.findIndex((q) => q.key === p), K = e.findIndex((q) => q.key === _);
    if (A !== -1 && K !== -1) {
      const q = [...e], [$] = q.splice(A, 1);
      q.splice(K, 0, $), r(q);
    }
    h.current = null, m.current = null;
  }, [c, e, r]), T = X(() => {
    h.current = null, m.current = null;
  }, []), j = X((y) => {
    const _ = t.find((p) => p.key === y);
    return _ ? _.label : y;
  }, [t]), F = X((y) => ["red", "orange", "blue", "aqua-green", "grey"][y] || "grey", []), S = X((y) => {
    if (c) return;
    const _ = e.map(
      (p) => p.key === y ? { ...p, direction: p.direction === "asc" ? "desc" : "asc" } : p
    );
    r(_);
  }, [e, r, c]), R = X((y) => {
    if (c) return;
    const _ = e.filter((p) => p.key !== y);
    r(_);
  }, [e, r, c]), k = X(() => {
    c || r([]);
  }, [r, c]), M = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const y = e.map((_, p) => {
      const A = _.direction === "asc" ? "ascending" : "descending";
      return `${p + 1}. ${j(_.key)} (${A})`;
    });
    if (y.length === 1)
      return `Sorted by: ${y[0]}`;
    if (y.length === 2)
      return `Sorted by: ${y.join(" and ")}`;
    {
      const _ = y.pop();
      return `Sorted by: ${y.join(", ")}, and ${_}`;
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
          children: e.map((y, _) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (p) => v(p, y.key),
              onDragOver: (p) => g(p, y.key),
              onDrop: (p) => C(p, y.key),
              onDragEnd: T,
              onClick: () => S(y.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": y.key,
              children: /* @__PURE__ */ n.jsx(
                Fn,
                {
                  color: F(_),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => R(y.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${_ + 1}`, children: _ + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: j(y.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (p) => {
                          p.stopPropagation(), S(y.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${j(y.key)}. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
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
        Bn,
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
function Ni(e, t) {
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
const vr = Ve(
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
      orientation: h = "horizontal",
      id: m,
      isLoading: v = !1,
      loadingComponent: g,
      error: C = null,
      errorComponent: T,
      "data-testid": j
    } = t, {
      dataComparator: F = (b, x) => JSON.stringify(b) === JSON.stringify(x),
      filterFunction: S = (b) => b,
      booleanRenderer: R = (b) => b ? "✓" : "✗"
    } = a || {}, k = s !== void 0, M = s ?? 0, [D, y] = re({
      focusArea: "tabs",
      focusedTabIndex: M,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), _ = ie(() => ({
      selectedIndex: M,
      tabLoadingStates: new Array(o.length).fill(!1),
      tabErrors: new Array(o.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(o.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [M]), [p, A] = za(Ni, _);
    le(() => {
      const b = p.tabLoadingStates.length, x = o.length;
      b !== x && A({ type: "ADJUST_ARRAYS", payload: { newLength: x } });
    }, [o.length]), le(() => {
      k && A({ type: "SET_SELECTED_INDEX", payload: M });
    }, [M, k]), le(() => {
      l && l(p.globalSelectedRowData);
    }, [p.globalSelectedRowData, l]);
    const K = X((b, x) => F(b, x), [F]), q = X((b) => {
      b >= 0 && b < o.length && !o[b].disabled && (A({ type: "SET_SELECTED_INDEX", payload: b }), i?.(b));
    }, [o, i]), $ = X((b, x) => {
      const { key: I } = b;
      switch (I) {
        case "ArrowLeft":
          b.preventDefault();
          const Y = x > 0 ? x - 1 : o.length - 1;
          q(Y), y((E) => ({ ...E, focusedTabIndex: Y })), P.current[Y]?.focus();
          break;
        case "ArrowRight":
          b.preventDefault();
          const B = x < o.length - 1 ? x + 1 : 0;
          q(B), y((E) => ({ ...E, focusedTabIndex: B })), P.current[B]?.focus();
          break;
        case "ArrowDown":
          b.preventDefault(), y((E) => ({
            ...E,
            focusArea: "headers",
            focusedHeaderIndex: 0
          })), Z(0);
          break;
        case "Home":
          b.preventDefault(), q(0), y((E) => ({ ...E, focusedTabIndex: 0 })), P.current[0]?.focus();
          break;
        case "End":
          b.preventDefault();
          const L = o.length - 1;
          q(L), y((E) => ({ ...E, focusedTabIndex: L })), P.current[L]?.focus();
          break;
        case "Enter":
        case " ":
          b.preventDefault(), q(x);
          break;
      }
    }, [o.length, q]), P = se([]), J = se([]), Q = X((b, x) => {
      const I = p.sortConfig || [], Y = I.find((E) => E.key === x);
      let B;
      Y ? Y.direction === "asc" ? B = I.map(
        (E) => E.key === x ? { ...E, direction: "desc" } : E
      ) : B = I.filter((E) => E.key !== x) : B = [...I, { key: x, direction: "asc" }], A({
        type: "SET_SORT",
        payload: B
      }), o[b].onSort?.(x);
    }, [p.sortConfig, o]), Z = X((b) => {
      setTimeout(() => {
        const x = document.querySelector(
          `[data-tab-panel="${p.selectedIndex}"] th:nth-child(${b + 1})`
        );
        x && x.focus();
      }, 0);
    }, [p.selectedIndex]), w = X((b) => R(b), [R]), W = X((b, x) => {
      setTimeout(() => {
        const I = document.querySelector(
          `[data-tab-panel="${p.selectedIndex}"] tbody tr:nth-child(${b + 1}) td:nth-child(${x + 1})`
        );
        I && I.focus();
      }, 0);
    }, [p.selectedIndex]), H = X((b, x) => {
      const { key: I } = b, Y = o[p.selectedIndex], B = Y?.columns.length || 0;
      switch (I) {
        case "ArrowLeft":
          b.preventDefault();
          const L = Math.max(0, x - 1);
          y((V) => ({ ...V, focusedHeaderIndex: L })), Z(L);
          break;
        case "ArrowRight":
          b.preventDefault();
          const E = Math.min(B - 1, x + 1);
          y((V) => ({ ...V, focusedHeaderIndex: E })), Z(E);
          break;
        case "ArrowUp":
          b.preventDefault(), y((V) => ({
            ...V,
            focusArea: "tabs",
            focusedTabIndex: p.selectedIndex
          })), P.current[p.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          b.preventDefault(), y((V) => ({
            ...V,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: x,
            isGridActive: !0
          })), W(0, x);
          break;
        case "Home":
          b.preventDefault(), y((V) => ({ ...V, focusedHeaderIndex: 0 })), Z(0);
          break;
        case "End":
          b.preventDefault();
          const N = B - 1;
          y((V) => ({ ...V, focusedHeaderIndex: N })), Z(N);
          break;
        case "Enter":
        case " ":
          b.preventDefault();
          const te = Y?.columns[x]?.key;
          te && Q(p.selectedIndex, te);
          break;
      }
    }, [o, p.selectedIndex, Q, y, Z, W, P]), G = X((b, x, I) => {
      const { key: Y } = b, B = o[p.selectedIndex], L = B?.data.length || 0, E = B?.columns.length || 0;
      switch (Y) {
        case "ArrowUp":
          if (b.preventDefault(), x === 0)
            y((U) => ({
              ...U,
              focusArea: "headers",
              focusedHeaderIndex: I,
              isGridActive: !1
            })), Z(I);
          else {
            const U = x - 1;
            y((ee) => ({ ...ee, focusedRowIndex: U })), W(U, I);
          }
          break;
        case "ArrowDown":
          b.preventDefault();
          const N = Math.min(L - 1, x + 1);
          y((U) => ({ ...U, focusedRowIndex: N })), W(N, I);
          break;
        case "ArrowLeft":
          b.preventDefault();
          const te = Math.max(0, I - 1);
          y((U) => ({ ...U, focusedColumnIndex: te })), W(x, te);
          break;
        case "ArrowRight":
          b.preventDefault();
          const V = Math.min(E - 1, I + 1);
          y((U) => ({ ...U, focusedColumnIndex: V })), W(x, V);
          break;
        case "Home":
          b.preventDefault(), b.ctrlKey ? (y((U) => ({ ...U, focusedRowIndex: 0, focusedColumnIndex: 0 })), W(0, 0)) : (y((U) => ({ ...U, focusedColumnIndex: 0 })), W(x, 0));
          break;
        case "End":
          if (b.preventDefault(), b.ctrlKey) {
            const U = L - 1, ee = E - 1;
            y((oe) => ({ ...oe, focusedRowIndex: U, focusedColumnIndex: ee })), W(U, ee);
          } else {
            const U = E - 1;
            y((ee) => ({ ...ee, focusedColumnIndex: U })), W(x, U);
          }
          break;
        case "Enter":
        case " ":
          if (b.preventDefault(), B && B.data[x]) {
            const U = B.data.some((ae) => "ews_data" in ae) ? S(B.data, p.filters) : B.data, ee = p.sortConfig;
            let oe = U;
            if (ee && ee.length > 0 && (oe = [...U].sort((ae, de) => {
              for (const { key: xe, direction: qe } of ee) {
                let pe = ae[xe], ye = de[xe];
                const Gt = B.columns.find((La) => La.key === xe);
                if (Gt?.render && (pe = Gt.render(ae), ye = Gt.render(de)), pe == null && ye == null) continue;
                if (pe == null) return qe === "asc" ? -1 : 1;
                if (ye == null) return qe === "asc" ? 1 : -1;
                let Ke = 0;
                if (typeof pe == "number" && typeof ye == "number" ? Ke = pe - ye : Ke = String(pe).localeCompare(String(ye), void 0, { numeric: !0, sensitivity: "base" }), Ke !== 0)
                  return qe === "asc" ? Ke : -Ke;
              }
              return 0;
            })), oe[x]) {
              const ae = oe[x], xe = p.globalSelectedRowData && K(p.globalSelectedRowData, ae) ? null : ae;
              A({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: xe
              });
            }
          }
          break;
      }
    }, [o, p.selectedIndex, p.filters, p.sortConfig, S, K, A, y, Z, W]), z = X((b, x) => S(b, x), [S]);
    return Sr(r, () => ({
      selectTab: (b) => {
        b >= 0 && b < o.length && (A({ type: "SET_SELECTED_INDEX", payload: b }), i?.(b));
      },
      refreshData: (b) => {
        console.log("Refreshing data for tab:", b ?? "all");
      },
      exportData: (b) => {
        const x = b ?? p.selectedIndex, I = o[x];
        return I ? I.data : [];
      },
      getSelectedRows: (b) => p.globalSelectedRowData ? [] : [],
      clearSelection: (b) => {
        A({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (b) => {
        A({ type: "SET_FILTERS", payload: b });
      }
    }), [p.selectedIndex, p.selectedRows, o, i]), v ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`, "data-testid": j, children: g || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : C ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`, "data-testid": j, children: T || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: C })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${u}`,
        id: m,
        "data-testid": j,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${m}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            ji,
            {
              sortConfig: p.sortConfig || [],
              columns: o.flatMap(
                (b) => b.columns.map((x) => ({ key: x.key, label: x.label }))
              ).filter(
                (b, x, I) => I.findIndex((Y) => Y.key === b.key) === x
                // Remove duplicates
              ),
              onSortChange: (b) => {
                A({ type: "SET_SORT", payload: b });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": `${d || ""} ${m ? `${m}-navigation-help` : ""}`.trim(),
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              children: o.map((b, x) => {
                const I = x === p.selectedIndex, Y = b.disabled || f;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${b.id}`,
                    "aria-controls": `panel-${b.id}`,
                    "aria-selected": I,
                    "aria-disabled": Y,
                    tabIndex: I ? 0 : -1,
                    ref: (B) => {
                      P.current[x] = B;
                    },
                    onClick: () => q(x),
                    onKeyDown: (B) => $(B, x),
                    disabled: Y,
                    className: `
                  aria-tabs-datagrid__tab
                  ${I ? "aria-tabs-datagrid__tab--selected" : ""}
                  ${Y ? "aria-tabs-datagrid__tab--disabled" : ""}
                `.trim(),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: b.label }),
                      p.tabLoadingStates[x] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      p.tabErrors[x] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  b.id
                );
              })
            }
          ),
          o.map((b, x) => {
            const I = x === p.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${b.id}`,
                "aria-labelledby": `tab-${b.id}`,
                tabIndex: 0,
                hidden: !I,
                ref: (Y) => {
                  J.current[x] = Y;
                },
                className: `aria-tabs-datagrid__panel ${b.className || ""}`,
                "data-tab-panel": x,
                children: I && (() => {
                  const Y = b.data.some((L) => "ews_data" in L) ? z(b.data, p.filters) : b.data, B = ie(() => {
                    const L = p.sortConfig;
                    return !L || L.length === 0 ? Y : [...Y].sort((E, N) => {
                      for (const { key: te, direction: V } of L) {
                        let U = E[te], ee = N[te];
                        const oe = b.columns.find((de) => de.key === te);
                        if (oe?.render && (U = oe.render(E), ee = oe.render(N)), U == null && ee == null) continue;
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
                  }, [Y, p.sortConfig, b.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": b.ariaLabel,
                      "aria-describedby": b.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: b.columns.map((L, E) => {
                          const N = p.sortConfig?.find((U) => U.key === L.key), te = !!N, V = D.focusArea === "headers" && D.focusedHeaderIndex === E;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${V ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: V ? 0 : -1,
                              onClick: () => Q(x, L.key),
                              onKeyDown: (U) => H(U, E),
                              "aria-sort": te ? N?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: L.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${te ? `sort-indicator--${N?.direction}` : ""}`, children: [
                                  p.sortConfig && p.sortConfig.length > 0 && p.sortConfig.findIndex((U) => U.key === L.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${p.sortConfig.findIndex((U) => U.key === L.key) + 1}`,
                                      "data-priority": p.sortConfig.findIndex((U) => U.key === L.key) + 1,
                                      title: `Sort priority: ${p.sortConfig.findIndex((U) => U.key === L.key) + 1}`,
                                      children: p.sortConfig.findIndex((U) => U.key === L.key) + 1
                                    }
                                  ),
                                  te && /* @__PURE__ */ n.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${N?.direction}`,
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
                            L.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: B.map((L, E) => {
                          const N = p.globalSelectedRowData && K(p.globalSelectedRowData, L), te = D.focusArea === "cells" && D.focusedRowIndex === E;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${N ? "data-row--selected" : ""} ${te ? "data-row--focused" : ""}`,
                              "aria-selected": N,
                              children: b.columns.map((V, U) => {
                                const ee = V.render ? V.render(L) : L[V.key], oe = D.focusArea === "cells" && D.focusedRowIndex === E && D.focusedColumnIndex === U, ae = () => typeof ee == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  w(ee),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ee ? "Yes" : "No" })
                                ] }) : String(ee ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${oe ? "data-cell--focused" : ""}`,
                                    tabIndex: oe ? 0 : -1,
                                    onClick: () => {
                                      const xe = p.globalSelectedRowData && K(p.globalSelectedRowData, L) ? null : L;
                                      A({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: xe
                                      });
                                    },
                                    onKeyDown: (de) => G(de, E, U),
                                    children: ae()
                                  },
                                  V.key
                                );
                              })
                            },
                            E
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
);
function Ti(e, t) {
  const [r, a] = re("cards");
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
const Vd = ({
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
  experimental: a = {},
  ...o
}) => {
  const s = Ti(e, t), {
    primaryField: i = o.tabPanels[0]?.columns[0]?.key,
    secondaryFields: l = o.tabPanels[0]?.columns.slice(1, 3).map((f) => f.key) || [],
    badgeFields: c = [],
    hiddenFields: d = [],
    cardTemplate: u
  } = r;
  return s === "cards" ? /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${o.className || ""}`, children: [
    /* @__PURE__ */ n.jsx("div", { role: "tablist", className: "aria-tabs-datagrid-adaptive__tabs", children: o.tabPanels.map((f, h) => /* @__PURE__ */ n.jsx(
      "button",
      {
        role: "tab",
        className: `aria-tabs-datagrid-adaptive__tab ${h === 0 ? "aria-tabs-datagrid-adaptive__tab--selected" : ""}`,
        children: f.label
      },
      f.id
    )) }),
    /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__cards", role: "grid", children: o.tabPanels[0]?.data.map((f, h) => /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "aria-tabs-datagrid-adaptive__card",
        role: "gridcell",
        tabIndex: 0,
        children: u ? u(f, o.tabPanels[0].columns) : /* @__PURE__ */ n.jsx(
          Bi,
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
      h
    )) })
  ] }) : s === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${o.className || ""}`, children: /* @__PURE__ */ n.jsx(vr, { ...o, className: "aria-tabs-datagrid-adaptive__table--hybrid" }) }) : /* @__PURE__ */ n.jsx(vr, { ...o });
}, Bi = ({
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
}, ct = {
  asc: "↑",
  desc: "↓"
}, Fi = (e) => [...e].sort((t, r) => t.priority - r.priority);
function tn(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Di(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Mi(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function Ri(e, t) {
  const r = t.find((o) => o.id === e), a = Di(t);
  return r ? r.priority < a : !1;
}
const qd = ({
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
  const u = ie(() => Fi(e), [e]), f = X((j) => {
    if (l) return;
    const F = e.map(
      (S) => S.id === j ? { ...S, direction: S.direction === "asc" ? "desc" : "asc" } : S
    );
    t(F);
  }, [e, t, l]), h = X((j) => {
    if (l) return;
    const F = e.findIndex((R) => R.id === j);
    if (F <= 0) return;
    const S = [...e];
    [S[F], S[F - 1]] = [S[F - 1], S[F]], t(tn(S));
  }, [e, t, l]), m = X((j) => {
    if (l) return;
    const F = e.findIndex((R) => R.id === j);
    if (F >= e.length - 1 || F === -1) return;
    const S = [...e];
    [S[F], S[F + 1]] = [S[F + 1], S[F]], t(tn(S));
  }, [e, t, l]), v = X((j) => {
    if (l) return;
    const F = e.filter((S) => S.id !== j);
    t(tn(F));
  }, [e, t, l]), g = X(() => {
    l || t([]);
  }, [t, l]), C = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const j = u.map((F, S) => {
      const R = F.direction === "asc" ? "ascending" : "descending";
      return `${S + 1}. ${F.label} (${R})`;
    });
    if (j.length === 1)
      return `Sorted by: ${j[0]}`;
    if (j.length === 2)
      return `Sorted by: ${j.join(" and ")}`;
    {
      const F = j.pop();
      return `Sorted by: ${j.join(", ")}, and ${F}`;
    }
  }, T = ie(() => {
    const j = ["sort-description"];
    return i && j.push("sort-help"), d && j.push(d), j.join(" ");
  }, [i, d]);
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
        "aria-describedby": T,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((j) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Fn,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => v(j.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: j.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: j.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(j.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${j.label}. Currently ${j.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: j.direction === "asc" ? ct.asc : ct.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(j.id),
                          disabled: l || !Mi(j.id, e),
                          "aria-label": `Move ${j.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(j.id),
                          disabled: l || !Ri(j.id, e),
                          "aria-label": `Move ${j.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            j.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      Bn,
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
      ct.asc,
      "/",
      ct.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Or = (e) => /* @__PURE__ */ n.jsx(Cr, { ...e }), Kd = ({
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
  organisation: h,
  logo: m,
  className: v,
  ...g
}) => {
  const C = {
    service: c,
    navigation: d,
    search: u,
    account: f,
    organisation: h,
    logo: m,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Wr, { ...s }),
    /* @__PURE__ */ n.jsx(Br, { ...C }),
    /* @__PURE__ */ n.jsx(Or, { className: v, ...g, children: /* @__PURE__ */ n.jsx(jr, { size: o, children: /* @__PURE__ */ n.jsx(In, { children: /* @__PURE__ */ n.jsxs(Ln, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Me, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Fr, { ...l })
  ] });
}, Zd = ({
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
  className: h,
  ...m
}) => {
  const v = {
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
    /* @__PURE__ */ n.jsx(Wr, { ...s }),
    /* @__PURE__ */ n.jsx(Br, { ...v }),
    /* @__PURE__ */ n.jsxs(Or, { className: h, ...m, children: [
      c && /* @__PURE__ */ n.jsx(qa, { ...c }),
      /* @__PURE__ */ n.jsx(jr, { size: o, children: /* @__PURE__ */ n.jsx(In, { children: /* @__PURE__ */ n.jsxs(Ln, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Me, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Fr, { ...l })
  ] });
}, Ii = "150ms", Li = "300ms", $i = "500ms", Hi = "cubic-bezier(0.4, 0, 1, 1)", Ei = "cubic-bezier(0, 0, 0.2, 1)", zi = "cubic-bezier(0.4, 0, 0.2, 1)", Ai = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Pi = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Wi = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Oi = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ui = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Yi = "1px", Gi = "2px", Vi = "4px", qi = "4px", Ki = "4px", Zi = "2px", Ji = "1px", Xi = "0px", Qi = "4px", el = "8px", tl = "12px", Ur = "#d8dde0", Yr = "#4c6272", Gr = "#d8dde0", Vr = "#aeb7bd", qr = "#d5281b", Kr = "#005eb8", Zr = "#ffffff", Jr = "#212b32", Xr = "#007f3b", Qr = "#330072", ea = "#7c2855", ta = "#d5281b", na = "#ffeb3b", ra = "#fff9c4", aa = "#ffb81c", sa = "#ed8b00", oa = "#00a499", ia = "#ae2573", la = "#4c6272", ca = "#768692", ua = "#aeb7bd", da = "#d8dde0", ha = "#f0f4f5", nl = "#212b32", rl = "#4c6272", al = "#ffffff", sl = "#212b32", ol = "#005eb8", il = "#7c2855", ll = "#003087", cl = "#330072", ul = "#ffeb3b", dl = "#212b32", hl = "#d8dde0", fl = "#ffffff33", ml = "#d5281b", pl = "#4c6272", gl = "#ffffff", xl = "#007f3b", bl = "#ffffff", yl = "#006530", kl = "#004021", vl = "#004021", _l = "#00000000", Sl = "#ffffff", wl = "#005eb8", Cl = "#005eb8", jl = "#d9e5f2", Nl = "#c7daf0", Tl = "#005eb8", Bl = "#ffffff", Fl = "#212b32", Dl = "#d9dde0", Ml = "#b3bcc2", Rl = "#b3bcc2", Il = "#d5281b", Ll = "#aa2016", $l = "#6a140e", Hl = "#6a140e", El = "#005eb8", zl = "#004b93", Al = "#002f5c", Pl = "#002f5c", Wl = "8px", Ol = "16px", Ul = "12px", Yl = "16px", Gl = "4px", Vl = "40px", ql = "4px", Kl = "40px", Zl = "12px", Jl = "16px", Xl = "32px", Ql = "16px", ec = "20px", tc = "28px", nc = "9px", rc = "2px", ac = "16px", sc = "24px", oc = "8px", ic = "24px", lc = "16px", cc = "4px", uc = "4px", dc = "4px", hc = "8px", fc = "4px", mc = "16px", pc = "#007f3b", gc = "#006530", xc = "#004021", bc = "#d8dde0", yc = "#ffffff", kc = "#768692", vc = "#00000000", _c = "#ffeb3b", Sc = "#00000000", wc = "#ffffff", Cc = "#d9e5f2", jc = "#c7daf0", Nc = "#005eb8", Tc = "#005eb8", fa = "8px", ma = "16px", pa = "12px", ga = "16px", Bc = "2px", Fc = "4px", Dc = "4px", Mc = "600", Rc = "#ffffff", Ic = "#d8dde0", Lc = "#aeb7bd", $c = "#f0f4f5", Hc = "#212b32", Ec = "#212b32", zc = "#005eb8", xa = "16px", ba = "32px", ya = "16px", Ac = "1px", Pc = "4px", Wc = "none", Oc = "0 2px 4px rgba(0, 0, 0, 0.1)", Uc = "#ffffff", Yc = "#ffffff", Gc = "#d8dde0", Vc = "#ffffff", qc = "#4c6272", Kc = "#ffeb3b", Zc = "#d5281b", Jc = "#aeb7bd", Xc = "#212b32", Qc = "#4c6272", eu = "#768692", tu = "#212b32", nu = "#ffffff", ru = "600", au = "#d5281b", su = "600", ou = "#4c6272", ka = "4px", va = "40px", _a = "40px", Sa = "12px", iu = "2px", lu = "4px", cu = "0px", uu = "16px", du = "18px", hu = "24px", fu = "32px", mu = "34px", pu = "32px", gu = "40px", xu = "48px", bu = "5.4ex", yu = "7.2ex", ku = "9ex", vu = "10.8ex", _u = "20ex", Su = "38ex", wu = "56ex", Cu = "44px", ju = "40px", Nu = "1020px", Tu = "100%", Bu = "50%", Fu = "33.333%", Du = "25%", Mu = "20%", Ru = "320px", Iu = "641px", Lu = "1025px", $u = "1280px", Hu = "960px", Eu = "32px", zu = "16px", Au = "#d5281b", Pu = "#d5281b", Wu = "#ffffff", Ou = "#007f3b", Uu = "#007f3b", Yu = "#ffffff", Gu = "#ffeb3b", Vu = "#ffeb3b", qu = "#212b32", Ku = "#005eb8", Zu = "#005eb8", Ju = "#ffffff", Xu = "#d8dde0", Qu = "#aeb7bd", ed = "#768692", td = "0 4px 0 #004021", nd = "0 4px 0 #005eb8", rd = "0 4px 0 #6a140e", ad = "0 4px 0 #ffeb3b", sd = "none", od = "0 2px 4px rgba(0, 0, 0, 0.1)", id = "4px", ld = "0px", cd = "solid", ud = "0 0 0 3px #ffeb3b", dd = "0 0 0 3px #ffeb3b", hd = "none", fd = "0 1px 3px rgba(0, 0, 0, 0.12)", md = "0 2px 6px rgba(0, 0, 0, 0.16)", pd = "0 4px 12px rgba(0, 0, 0, 0.20)", wa = "0", Ca = "4px", ja = "8px", Na = "16px", Ta = "24px", Ba = "32px", Fa = "40px", Da = "48px", Ma = "56px", Ra = "64px", sn = "0", on = "0", ln = "4px", cn = "4px", un = "8px", dn = "8px", hn = "8px", fn = "16px", mn = "16px", pn = "24px", gn = "24px", xn = "32px", bn = "32px", yn = "40px", kn = "40px", vn = "48px", _n = "48px", Sn = "56px", wn = "56px", Cn = "64px", bt = "Frutiger W01", yt = "Arial, Helvetica, sans-serif", kt = "sans-serif", vt = "400", _t = "600", St = "400", wt = "12px", Ct = "14px", jt = "12pt", Nt = "14px", Tt = "16px", Bt = "12pt", Ft = "16px", Dt = "19px", Mt = "13pt", Rt = "19px", It = "22px", Lt = "15pt", $t = "22px", Ht = "26px", Et = "17pt", zt = "27px", At = "36px", Pt = "20pt", Wt = "33px", Ot = "48px", Ut = "24pt", jn = "16px", Nn = "24px", ke = {
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
}, _e = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Se = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, we = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ce = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, je = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ne = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Te = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Be = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Ii,
  AnimationDurationNormal: Li,
  AnimationDurationSlow: $i,
  AnimationEasingBounce: Ai,
  AnimationEasingEaseIn: Hi,
  AnimationEasingEaseInOut: zi,
  AnimationEasingEaseOut: Ei,
  BorderColorCard: Gr,
  BorderColorCardHover: Vr,
  BorderColorDefault: Ur,
  BorderColorError: qr,
  BorderColorForm: Yr,
  BorderRadiusLarge: tl,
  BorderRadiusMedium: el,
  BorderRadiusNone: Xi,
  BorderRadiusSmall: Qi,
  BorderWidthCardBottom: qi,
  BorderWidthDefault: Yi,
  BorderWidthFormElement: Gi,
  BorderWidthFormElementError: Vi,
  BorderWidthPanel: Ki,
  BorderWidthTableCell: Ji,
  BorderWidthTableHeader: Zi,
  BreakpointDesktop: Lu,
  BreakpointLargeDesktop: $u,
  BreakpointMobile: Ru,
  BreakpointTablet: Iu,
  ButtonBorderRadius: Fc,
  ButtonBorderWidth: Bc,
  ButtonPrimaryBackgroundActive: xc,
  ButtonPrimaryBackgroundDefault: pc,
  ButtonPrimaryBackgroundDisabled: bc,
  ButtonPrimaryBackgroundHover: gc,
  ButtonPrimaryBorderDefault: vc,
  ButtonPrimaryBorderFocus: _c,
  ButtonPrimaryTextDefault: yc,
  ButtonPrimaryTextDisabled: kc,
  ButtonSecondaryBackgroundActive: jc,
  ButtonSecondaryBackgroundDefault: Sc,
  ButtonSecondaryBackgroundHover: Cc,
  ButtonSecondaryBackgroundSolid: wc,
  ButtonSecondaryBorderDefault: Tc,
  ButtonSecondaryTextDefault: Nc,
  ButtonShadowSize: Dc,
  ButtonSpacingPaddingHorizontalDesktop: ga,
  ButtonSpacingPaddingHorizontalMobile: ma,
  ButtonSpacingPaddingVerticalDesktop: pa,
  ButtonSpacingPaddingVerticalMobile: fa,
  ButtonTypographyWeight: Mc,
  CardBackgroundDefault: Rc,
  CardBorderBottom: $c,
  CardBorderDefault: Ic,
  CardBorderHover: Lc,
  CardBorderWidthBottom: Pc,
  CardBorderWidthDefault: Ac,
  CardShadowDefault: Wc,
  CardShadowHover: Oc,
  CardSpacingHeadingMargin: ya,
  CardSpacingPaddingDesktop: ba,
  CardSpacingPaddingMobile: xa,
  CardTextDescription: Ec,
  CardTextHeading: Hc,
  CardTextLink: zc,
  ColorBorderDefault: hl,
  ColorBorderSecondary: fl,
  ColorButtonLoginActive: Al,
  ColorButtonLoginBackground: El,
  ColorButtonLoginHover: zl,
  ColorButtonLoginShadow: Pl,
  ColorButtonPrimaryActive: kl,
  ColorButtonPrimaryBackground: xl,
  ColorButtonPrimaryHover: yl,
  ColorButtonPrimaryShadow: vl,
  ColorButtonPrimaryText: bl,
  ColorButtonReverseActive: Ml,
  ColorButtonReverseBackground: Bl,
  ColorButtonReverseHover: Dl,
  ColorButtonReverseShadow: Rl,
  ColorButtonReverseText: Fl,
  ColorButtonSecondaryActive: Nl,
  ColorButtonSecondaryBackground: _l,
  ColorButtonSecondaryBackgroundSolid: Sl,
  ColorButtonSecondaryBorder: wl,
  ColorButtonSecondaryHover: jl,
  ColorButtonSecondaryShadow: Tl,
  ColorButtonSecondaryText: Cl,
  ColorButtonWarningActive: $l,
  ColorButtonWarningBackground: Il,
  ColorButtonWarningHover: Ll,
  ColorButtonWarningShadow: Hl,
  ColorError: ml,
  ColorFocusBackground: ul,
  ColorFocusText: dl,
  ColorFormBackground: gl,
  ColorFormBorder: pl,
  ColorGrey1: la,
  ColorGrey2: ca,
  ColorGrey3: ua,
  ColorGrey4: da,
  ColorGrey5: ha,
  ColorLinkActive: ll,
  ColorLinkDefault: ol,
  ColorLinkHover: il,
  ColorLinkVisited: cl,
  ColorPrimaryBlack: Jr,
  ColorPrimaryBlue: Kr,
  ColorPrimaryDarkPink: ea,
  ColorPrimaryGreen: Xr,
  ColorPrimaryPurple: Qr,
  ColorPrimaryRed: ta,
  ColorPrimaryWhite: Zr,
  ColorPrimaryYellow: na,
  ColorSecondaryAquaGreen: oa,
  ColorSecondaryOrange: sa,
  ColorSecondaryPaleYellow: ra,
  ColorSecondaryPink: ia,
  ColorSecondaryWarmYellow: aa,
  ColorTextPrimary: nl,
  ColorTextPrint: sl,
  ColorTextReverse: al,
  ColorTextSecondary: rl,
  ComponentBlur: uc,
  ComponentBreadcrumbChevronMarginLeft: nc,
  ComponentBreadcrumbChevronMarginRight: rc,
  ComponentBreadcrumbPaddingTopDesktop: sc,
  ComponentBreadcrumbPaddingTopMobile: ac,
  ComponentButtonPaddingDesktopHorizontal: Yl,
  ComponentButtonPaddingDesktopVertical: Ul,
  ComponentButtonPaddingMobileHorizontal: Ol,
  ComponentButtonPaddingMobileVertical: Wl,
  ComponentButtonShadowSize: Gl,
  ComponentCardHeadingMargin: Ql,
  ComponentCardPaddingDesktop: Xl,
  ComponentCardPaddingMobile: Jl,
  ComponentDetails: hc,
  ComponentExpander: fc,
  ComponentFormCheckboxLabelPadding: Zl,
  ComponentFormCheckboxSize: Kl,
  ComponentFormInputMinHeight: Vl,
  ComponentFormInputPadding: ql,
  ComponentLink: dc,
  ComponentPagination: mc,
  ComponentPanelPaddingDesktop: tc,
  ComponentPanelPaddingMobile: ec,
  ComponentSpread: cc,
  ComponentSummaryListCellPaddingHorizontal: ic,
  ComponentSummaryListCellPaddingVertical: oc,
  ComponentSummaryListRowMargin: lc,
  ElevationHigh: pd,
  ElevationLow: fd,
  ElevationMedium: md,
  ElevationNone: hd,
  FocusOutlineOffset: ld,
  FocusOutlineStyle: cd,
  FocusOutlineWidth: id,
  FocusShadowButton: dd,
  FocusShadowInput: ud,
  FontFamilyBase: bt,
  FontFamilyFallback: yt,
  FontFamilyPrint: kt,
  FontLineHeightBase: Nn,
  FontSize14Mobile: wt,
  FontSize14Print: jt,
  FontSize14Tablet: Ct,
  FontSize16Mobile: Nt,
  FontSize16Print: Bt,
  FontSize16Tablet: Tt,
  FontSize19Mobile: Ft,
  FontSize19Print: Mt,
  FontSize19Tablet: Dt,
  FontSize22Mobile: Rt,
  FontSize22Print: Lt,
  FontSize22Tablet: It,
  FontSize26Mobile: $t,
  FontSize26Print: Et,
  FontSize26Tablet: Ht,
  FontSize36Mobile: zt,
  FontSize36Print: Pt,
  FontSize36Tablet: At,
  FontSize48Mobile: Wt,
  FontSize48Print: Ut,
  FontSize48Tablet: Ot,
  FontSizeBase: jn,
  FontWeightBold: _t,
  FontWeightLight: St,
  FontWeightNormal: vt,
  FormBorderRadius: cu,
  FormBorderWidthDefault: iu,
  FormBorderWidthError: lu,
  FormErrorTextDefault: au,
  FormErrorTypographyWeight: su,
  FormHintTextDefault: ou,
  FormInputBackgroundDefault: Uc,
  FormInputBackgroundDisabled: Gc,
  FormInputBackgroundError: Vc,
  FormInputBackgroundFocus: Yc,
  FormInputBorderDefault: qc,
  FormInputBorderDisabled: Jc,
  FormInputBorderError: Zc,
  FormInputBorderFocus: Kc,
  FormInputTextDefault: Xc,
  FormInputTextDisabled: eu,
  FormInputTextPlaceholder: Qc,
  FormLabelTextDefault: tu,
  FormLabelTextRequired: nu,
  FormLabelTypographyWeight: ru,
  FormSpacingCheckboxLabelPadding: Sa,
  FormSpacingCheckboxSize: _a,
  FormSpacingInputMinHeight: va,
  FormSpacingInputPadding: ka,
  GridGutter: Eu,
  GridGutterHalf: zu,
  GridPageWidth: Hu,
  HeadingsNhsukHeadingL: ve,
  HeadingsNhsukHeadingM: _e,
  HeadingsNhsukHeadingS: Se,
  HeadingsNhsukHeadingXl: ke,
  HeadingsNhsukHeadingXs: we,
  LayoutColumnActions: Mu,
  LayoutColumnFull: Tu,
  LayoutColumnHalf: Bu,
  LayoutColumnQuarter: Du,
  LayoutColumnThird: Fu,
  LayoutContainerMaxWidth: Nu,
  ParagraphsBody: Ce,
  ParagraphsBodyLarge: je,
  ParagraphsBodySmall: Ne,
  ParagraphsLedeText: Te,
  ParagraphsLedeTextSmall: Be,
  ShadowButtonDefault: td,
  ShadowButtonFocus: ad,
  ShadowButtonSecondary: nd,
  ShadowButtonWarning: rd,
  ShadowCardDefault: sd,
  ShadowCardHover: od,
  SizeButtonMinHeightDesktop: ju,
  SizeButtonMinHeightMobile: Cu,
  SizeFormControlLarge: xu,
  SizeFormControlMedium: gu,
  SizeFormControlSmall: pu,
  SizeFormInputWidth2xl: Su,
  SizeFormInputWidth3xl: wu,
  SizeFormInputWidthLg: vu,
  SizeFormInputWidthMd: ku,
  SizeFormInputWidthSm: yu,
  SizeFormInputWidthXl: _u,
  SizeFormInputWidthXs: bu,
  SizeIconExtraLarge: fu,
  SizeIconLarge: hu,
  SizeIconMedium: du,
  SizeIconNhsDefault: mu,
  SizeIconSmall: uu,
  Spacing0: wa,
  Spacing1: Ca,
  Spacing2: ja,
  Spacing3: Na,
  Spacing4: Ta,
  Spacing5: Ba,
  Spacing6: Fa,
  Spacing7: Da,
  Spacing8: Ma,
  Spacing9: Ra,
  SpacingResponsive0Mobile: sn,
  SpacingResponsive0Tablet: on,
  SpacingResponsive1Mobile: ln,
  SpacingResponsive1Tablet: cn,
  SpacingResponsive2Mobile: un,
  SpacingResponsive2Tablet: dn,
  SpacingResponsive3Mobile: hn,
  SpacingResponsive3Tablet: fn,
  SpacingResponsive4Mobile: mn,
  SpacingResponsive4Tablet: pn,
  SpacingResponsive5Mobile: gn,
  SpacingResponsive5Tablet: xn,
  SpacingResponsive6Mobile: bn,
  SpacingResponsive6Tablet: yn,
  SpacingResponsive7Mobile: kn,
  SpacingResponsive7Tablet: vn,
  SpacingResponsive8Mobile: _n,
  SpacingResponsive8Tablet: Sn,
  SpacingResponsive9Mobile: wn,
  SpacingResponsive9Tablet: Cn,
  StateDisabledBackground: Xu,
  StateDisabledBorder: Qu,
  StateDisabledText: ed,
  StateErrorBackground: Au,
  StateErrorBorder: Pu,
  StateErrorText: Wu,
  StateInfoBackground: Ku,
  StateInfoBorder: Zu,
  StateInfoText: Ju,
  StateSuccessBackground: Ou,
  StateSuccessBorder: Uu,
  StateSuccessText: Yu,
  StateWarningBackground: Gu,
  StateWarningBorder: Vu,
  StateWarningText: qu,
  TransitionButtonDefault: Pi,
  TransitionButtonShadow: Wi,
  TransitionCardHover: Ui,
  TransitionInputFocus: Oi
}, Symbol.toStringTag, { value: "Module" })), Jd = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Xd = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: ke.fontFamily,
      fontWeight: ke.fontWeight,
      fontSize: ke.fontSize.mobile,
      lineHeight: ke.lineHeight,
      marginTop: ke.marginTop,
      marginBottom: ke.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Qd = ({
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
), eh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
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
), th = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), nh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), rh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
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
), ah = ({
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
), sh = ({
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
), oh = ({
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
), ih = ({
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
), lh = () => ie(() => gd, []), ch = () => ie(() => ({
  // Border colors
  BorderColorDefault: Ur,
  BorderColorForm: Yr,
  BorderColorCard: Gr,
  BorderColorCardHover: Vr,
  BorderColorError: qr,
  // Primary colors
  ColorPrimaryBlue: Kr,
  ColorPrimaryWhite: Zr,
  ColorPrimaryBlack: Jr,
  ColorPrimaryGreen: Xr,
  ColorPrimaryPurple: Qr,
  ColorPrimaryDarkPink: ea,
  ColorPrimaryRed: ta,
  ColorPrimaryYellow: na,
  // Secondary colors
  ColorSecondaryPaleYellow: ra,
  ColorSecondaryWarmYellow: aa,
  ColorSecondaryOrange: sa,
  ColorSecondaryAquaGreen: oa,
  ColorSecondaryPink: ia,
  // Grey scale
  ColorGrey1: la,
  ColorGrey2: ca,
  ColorGrey3: ua,
  ColorGrey4: da,
  ColorGrey5: ha
}), []), uh = () => ie(() => ({
  Spacing0: wa,
  Spacing1: Ca,
  Spacing2: ja,
  Spacing3: Na,
  Spacing4: Ta,
  Spacing5: Ba,
  Spacing6: Fa,
  Spacing7: Da,
  Spacing8: Ma,
  Spacing9: Ra
}), []), dh = () => ie(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: wt,
    Size16: Nt,
    Size19: Ft,
    Size22: Rt,
    Size26: $t,
    Size36: zt,
    Size48: Wt
  },
  Tablet: {
    Size14: Ct,
    Size16: Tt,
    Size19: Dt,
    Size22: It,
    Size26: Ht,
    Size36: At,
    Size48: Ot
  },
  Print: {
    Size14: jt,
    Size16: Bt,
    Size19: Mt,
    Size22: Lt,
    Size26: Et,
    Size36: Pt,
    Size48: Ut
  },
  Family: {
    Base: bt,
    Fallback: yt,
    Print: kt
  },
  Weight: {
    Normal: vt,
    Bold: _t,
    Light: St
  },
  Base: {
    Size: jn,
    LineHeight: Nn
  },
  // Backward compatibility - individual exports
  FontFamilyBase: bt,
  FontFamilyFallback: yt,
  FontFamilyPrint: kt,
  FontWeightNormal: vt,
  FontWeightBold: _t,
  FontWeightLight: St,
  FontSize14Mobile: wt,
  FontSize14Tablet: Ct,
  FontSize14Print: jt,
  FontSize16Mobile: Nt,
  FontSize16Tablet: Tt,
  FontSize16Print: Bt,
  FontSize19Mobile: Ft,
  FontSize19Tablet: Dt,
  FontSize19Print: Mt,
  FontSize22Mobile: Rt,
  FontSize22Tablet: It,
  FontSize22Print: Lt,
  FontSize26Mobile: $t,
  FontSize26Tablet: Ht,
  FontSize26Print: Et,
  FontSize36Mobile: zt,
  FontSize36Tablet: At,
  FontSize36Print: Pt,
  FontSize48Mobile: Wt,
  FontSize48Tablet: Ot,
  FontSize48Print: Ut,
  FontSizeBase: jn,
  FontLineHeightBase: Nn
}), []), hh = () => ie(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: sn,
    Size1: ln,
    Size2: un,
    Size3: hn,
    Size4: mn,
    Size5: gn,
    Size6: bn,
    Size7: kn,
    Size8: _n,
    Size9: wn
  },
  Tablet: {
    Size0: on,
    Size1: cn,
    Size2: dn,
    Size3: fn,
    Size4: pn,
    Size5: xn,
    Size6: yn,
    Size7: vn,
    Size8: Sn,
    Size9: Cn
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: sn,
  SpacingResponsive0Tablet: on,
  SpacingResponsive1Mobile: ln,
  SpacingResponsive1Tablet: cn,
  SpacingResponsive2Mobile: un,
  SpacingResponsive2Tablet: dn,
  SpacingResponsive3Mobile: hn,
  SpacingResponsive3Tablet: fn,
  SpacingResponsive4Mobile: mn,
  SpacingResponsive4Tablet: pn,
  SpacingResponsive5Mobile: gn,
  SpacingResponsive5Tablet: xn,
  SpacingResponsive6Mobile: bn,
  SpacingResponsive6Tablet: yn,
  SpacingResponsive7Mobile: kn,
  SpacingResponsive7Tablet: vn,
  SpacingResponsive8Mobile: _n,
  SpacingResponsive8Tablet: Sn,
  SpacingResponsive9Mobile: wn,
  SpacingResponsive9Tablet: Cn
}), []), fh = () => ie(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: fa,
  ButtonSpacingPaddingHorizontalMobile: ma,
  ButtonSpacingPaddingVerticalDesktop: pa,
  ButtonSpacingPaddingHorizontalDesktop: ga,
  // Card spacing	
  CardSpacingPaddingMobile: xa,
  CardSpacingPaddingDesktop: ba,
  CardSpacingHeadingMargin: ya,
  // Form spacing
  FormSpacingInputPadding: ka,
  FormSpacingInputMinHeight: va,
  FormSpacingCheckboxSize: _a,
  FormSpacingCheckboxLabelPadding: Sa
}), []), mh = () => ie(() => ({
  xl: ke,
  l: ve,
  m: _e,
  s: Se,
  xs: we
}), []), ph = () => ie(() => ({
  body: Ce,
  bodyLarge: je,
  bodySmall: Ne,
  ledeText: Te,
  ledeTextSmall: Be
}), []), gh = () => ie(() => ({
  headings: {
    xl: ke,
    l: ve,
    m: _e,
    s: Se,
    xs: we
  },
  paragraphs: {
    body: Ce,
    bodyLarge: je,
    bodySmall: Ne,
    ledeText: Te,
    ledeTextSmall: Be
  },
  fonts: {
    family: {
      base: bt,
      fallback: yt,
      print: kt
    },
    weight: {
      normal: vt,
      bold: _t,
      light: St
    },
    sizes: {
      mobile: {
        size14: wt,
        size16: Nt,
        size19: Ft,
        size22: Rt,
        size26: $t,
        size36: zt,
        size48: Wt
      },
      tablet: {
        size14: Ct,
        size16: Tt,
        size19: Dt,
        size22: It,
        size26: Ht,
        size36: At,
        size48: Ot
      },
      print: {
        size14: jt,
        size16: Bt,
        size19: Mt,
        size22: Lt,
        size26: Et,
        size36: Pt,
        size48: Ut
      }
    }
  }
}), []), Ia = {
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
function xh(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...Ia, ...e }, a = [];
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
function bh(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...Ia, ...e };
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
const yh = '"Frutiger W01", Arial, Helvetica, sans-serif', kh = "Arial, Helvetica, sans-serif";
async function vh() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Tn as Account,
  bd as ActionLink,
  Ii as AnimationDurationFast,
  Li as AnimationDurationNormal,
  $i as AnimationDurationSlow,
  Ai as AnimationEasingBounce,
  Hi as AnimationEasingEaseIn,
  zi as AnimationEasingEaseInOut,
  Ei as AnimationEasingEaseOut,
  Ci as AriaDataGrid,
  vr as AriaTabsDataGrid,
  Vd as AriaTabsDataGridAdaptive,
  qa as BackLink,
  Gr as BorderColorCard,
  Vr as BorderColorCardHover,
  Ur as BorderColorDefault,
  qr as BorderColorError,
  Yr as BorderColorForm,
  tl as BorderRadiusLarge,
  el as BorderRadiusMedium,
  Xi as BorderRadiusNone,
  Qi as BorderRadiusSmall,
  qi as BorderWidthCardBottom,
  Yi as BorderWidthDefault,
  Gi as BorderWidthFormElement,
  Vi as BorderWidthFormElementError,
  Ki as BorderWidthPanel,
  Ji as BorderWidthTableCell,
  Zi as BorderWidthTableHeader,
  xi as Breadcrumb,
  Lu as BreakpointDesktop,
  $u as BreakpointLargeDesktop,
  Ru as BreakpointMobile,
  Iu as BreakpointTablet,
  Bn as Button,
  Fc as ButtonBorderRadius,
  Bc as ButtonBorderWidth,
  xc as ButtonPrimaryBackgroundActive,
  pc as ButtonPrimaryBackgroundDefault,
  bc as ButtonPrimaryBackgroundDisabled,
  gc as ButtonPrimaryBackgroundHover,
  vc as ButtonPrimaryBorderDefault,
  _c as ButtonPrimaryBorderFocus,
  yc as ButtonPrimaryTextDefault,
  kc as ButtonPrimaryTextDisabled,
  jc as ButtonSecondaryBackgroundActive,
  Sc as ButtonSecondaryBackgroundDefault,
  Cc as ButtonSecondaryBackgroundHover,
  wc as ButtonSecondaryBackgroundSolid,
  Tc as ButtonSecondaryBorderDefault,
  Nc as ButtonSecondaryTextDefault,
  Dc as ButtonShadowSize,
  ga as ButtonSpacingPaddingHorizontalDesktop,
  ma as ButtonSpacingPaddingHorizontalMobile,
  pa as ButtonSpacingPaddingVerticalDesktop,
  fa as ButtonSpacingPaddingVerticalMobile,
  Mc as ButtonTypographyWeight,
  $d as Card,
  Rc as CardBackgroundDefault,
  $c as CardBorderBottom,
  Ic as CardBorderDefault,
  Lc as CardBorderHover,
  Pc as CardBorderWidthBottom,
  Ac as CardBorderWidthDefault,
  Hd as CardGroup,
  Ed as CardGroupItem,
  Wc as CardShadowDefault,
  Oc as CardShadowHover,
  ya as CardSpacingHeadingMargin,
  ba as CardSpacingPaddingDesktop,
  xa as CardSpacingPaddingMobile,
  Ec as CardTextDescription,
  Hc as CardTextHeading,
  zc as CardTextLink,
  zd as CareCard,
  yd as CharacterCount,
  Ka as Checkboxes,
  hl as ColorBorderDefault,
  fl as ColorBorderSecondary,
  Al as ColorButtonLoginActive,
  El as ColorButtonLoginBackground,
  zl as ColorButtonLoginHover,
  Pl as ColorButtonLoginShadow,
  kl as ColorButtonPrimaryActive,
  xl as ColorButtonPrimaryBackground,
  yl as ColorButtonPrimaryHover,
  vl as ColorButtonPrimaryShadow,
  bl as ColorButtonPrimaryText,
  Ml as ColorButtonReverseActive,
  Bl as ColorButtonReverseBackground,
  Dl as ColorButtonReverseHover,
  Rl as ColorButtonReverseShadow,
  Fl as ColorButtonReverseText,
  Nl as ColorButtonSecondaryActive,
  _l as ColorButtonSecondaryBackground,
  Sl as ColorButtonSecondaryBackgroundSolid,
  wl as ColorButtonSecondaryBorder,
  jl as ColorButtonSecondaryHover,
  Tl as ColorButtonSecondaryShadow,
  Cl as ColorButtonSecondaryText,
  $l as ColorButtonWarningActive,
  Il as ColorButtonWarningBackground,
  Ll as ColorButtonWarningHover,
  Hl as ColorButtonWarningShadow,
  ml as ColorError,
  ul as ColorFocusBackground,
  dl as ColorFocusText,
  gl as ColorFormBackground,
  pl as ColorFormBorder,
  la as ColorGrey1,
  ca as ColorGrey2,
  ua as ColorGrey3,
  da as ColorGrey4,
  ha as ColorGrey5,
  ll as ColorLinkActive,
  ol as ColorLinkDefault,
  il as ColorLinkHover,
  cl as ColorLinkVisited,
  Jr as ColorPrimaryBlack,
  Kr as ColorPrimaryBlue,
  ea as ColorPrimaryDarkPink,
  Xr as ColorPrimaryGreen,
  Qr as ColorPrimaryPurple,
  ta as ColorPrimaryRed,
  Zr as ColorPrimaryWhite,
  na as ColorPrimaryYellow,
  oa as ColorSecondaryAquaGreen,
  sa as ColorSecondaryOrange,
  ra as ColorSecondaryPaleYellow,
  ia as ColorSecondaryPink,
  aa as ColorSecondaryWarmYellow,
  nl as ColorTextPrimary,
  sl as ColorTextPrint,
  al as ColorTextReverse,
  rl as ColorTextSecondary,
  Ln as Column,
  uc as ComponentBlur,
  nc as ComponentBreadcrumbChevronMarginLeft,
  rc as ComponentBreadcrumbChevronMarginRight,
  sc as ComponentBreadcrumbPaddingTopDesktop,
  ac as ComponentBreadcrumbPaddingTopMobile,
  Yl as ComponentButtonPaddingDesktopHorizontal,
  Ul as ComponentButtonPaddingDesktopVertical,
  Ol as ComponentButtonPaddingMobileHorizontal,
  Wl as ComponentButtonPaddingMobileVertical,
  Gl as ComponentButtonShadowSize,
  Ql as ComponentCardHeadingMargin,
  Xl as ComponentCardPaddingDesktop,
  Jl as ComponentCardPaddingMobile,
  hc as ComponentDetails,
  fc as ComponentExpander,
  Zl as ComponentFormCheckboxLabelPadding,
  Kl as ComponentFormCheckboxSize,
  Vl as ComponentFormInputMinHeight,
  ql as ComponentFormInputPadding,
  dc as ComponentLink,
  mc as ComponentPagination,
  tc as ComponentPanelPaddingDesktop,
  ec as ComponentPanelPaddingMobile,
  cc as ComponentSpread,
  ic as ComponentSummaryListCellPaddingHorizontal,
  oc as ComponentSummaryListCellPaddingVertical,
  lc as ComponentSummaryListRowMargin,
  Cr as Container,
  Ld as ContentsList,
  Ia as DEFAULT_FONT_CONFIG,
  Gd as DashboardSummaryGrid,
  Td as DateInput,
  yi as Details,
  ki as DoDontList,
  pd as ElevationHigh,
  fd as ElevationLow,
  md as ElevationMedium,
  hd as ElevationNone,
  Jn as ErrorMessage,
  Nd as ErrorSummary,
  vi as Expander,
  he as FRUTIGER_FONT_FILES,
  Rn as Fieldset,
  ld as FocusOutlineOffset,
  cd as FocusOutlineStyle,
  id as FocusOutlineWidth,
  dd as FocusShadowButton,
  ud as FocusShadowInput,
  bt as FontFamilyBase,
  yt as FontFamilyFallback,
  kt as FontFamilyPrint,
  Nn as FontLineHeightBase,
  wt as FontSize14Mobile,
  jt as FontSize14Print,
  Ct as FontSize14Tablet,
  Nt as FontSize16Mobile,
  Bt as FontSize16Print,
  Tt as FontSize16Tablet,
  Ft as FontSize19Mobile,
  Mt as FontSize19Print,
  Dt as FontSize19Tablet,
  Rt as FontSize22Mobile,
  Lt as FontSize22Print,
  It as FontSize22Tablet,
  $t as FontSize26Mobile,
  Et as FontSize26Print,
  Ht as FontSize26Tablet,
  zt as FontSize36Mobile,
  Pt as FontSize36Print,
  At as FontSize36Tablet,
  Wt as FontSize48Mobile,
  Ut as FontSize48Print,
  Ot as FontSize48Tablet,
  jn as FontSizeBase,
  _t as FontWeightBold,
  St as FontWeightLight,
  vt as FontWeightNormal,
  Fr as Footer,
  cu as FormBorderRadius,
  iu as FormBorderWidthDefault,
  lu as FormBorderWidthError,
  au as FormErrorTextDefault,
  su as FormErrorTypographyWeight,
  ou as FormHintTextDefault,
  Uc as FormInputBackgroundDefault,
  Gc as FormInputBackgroundDisabled,
  Vc as FormInputBackgroundError,
  Yc as FormInputBackgroundFocus,
  qc as FormInputBorderDefault,
  Jc as FormInputBorderDisabled,
  Zc as FormInputBorderError,
  Kc as FormInputBorderFocus,
  Xc as FormInputTextDefault,
  eu as FormInputTextDisabled,
  Qc as FormInputTextPlaceholder,
  tu as FormLabelTextDefault,
  nu as FormLabelTextRequired,
  ru as FormLabelTypographyWeight,
  Sa as FormSpacingCheckboxLabelPadding,
  _a as FormSpacingCheckboxSize,
  va as FormSpacingInputMinHeight,
  ka as FormSpacingInputPadding,
  Rd as GanttChart,
  Ja as Grid,
  Eu as GridGutter,
  zu as GridGutterHalf,
  Hu as GridPageWidth,
  Br as Header,
  Dd as HeaderSSR,
  $n as HeaderSearch,
  Md as HeaderStatic,
  Me as Heading,
  ve as HeadingsNhsukHeadingL,
  _e as HeadingsNhsukHeadingM,
  Se as HeadingsNhsukHeadingS,
  ke as HeadingsNhsukHeadingXl,
  we as HeadingsNhsukHeadingXs,
  as as Hero,
  wr as Hint,
  Yd as Images,
  Dn as Input,
  Ad as InsetText,
  Mn as Label,
  Mu as LayoutColumnActions,
  Tu as LayoutColumnFull,
  Bu as LayoutColumnHalf,
  Du as LayoutColumnQuarter,
  Fu as LayoutColumnThird,
  Nu as LayoutContainerMaxWidth,
  es as List,
  jr as MainWrapper,
  rh as NHSBodyText,
  ah as NHSBodyTextLarge,
  sh as NHSBodyTextSmall,
  Xd as NHSHeading1,
  Qd as NHSHeading2,
  eh as NHSHeading3,
  th as NHSHeading4,
  nh as NHSHeading5,
  oh as NHSLedeText,
  ih as NHSLedeTextSmall,
  Fd as NHSThemeProvider,
  kh as NHS_FALLBACK_FONT_STACK,
  yh as NHS_FONT_STACK,
  Kd as PageTemplate,
  Id as Pagination,
  bi as Panel,
  Ce as ParagraphsBody,
  je as ParagraphsBodyLarge,
  Ne as ParagraphsBodySmall,
  Te as ParagraphsLedeText,
  Be as ParagraphsLedeTextSmall,
  vd as Radios,
  In as Row,
  kd as Select,
  td as ShadowButtonDefault,
  ad as ShadowButtonFocus,
  nd as ShadowButtonSecondary,
  rd as ShadowButtonWarning,
  sd as ShadowCardDefault,
  od as ShadowCardHover,
  ju as SizeButtonMinHeightDesktop,
  Cu as SizeButtonMinHeightMobile,
  xu as SizeFormControlLarge,
  gu as SizeFormControlMedium,
  pu as SizeFormControlSmall,
  Su as SizeFormInputWidth2xl,
  wu as SizeFormInputWidth3xl,
  vu as SizeFormInputWidthLg,
  ku as SizeFormInputWidthMd,
  yu as SizeFormInputWidthSm,
  _u as SizeFormInputWidthXl,
  bu as SizeFormInputWidthXs,
  fu as SizeIconExtraLarge,
  hu as SizeIconLarge,
  du as SizeIconMedium,
  mu as SizeIconNhsDefault,
  uu as SizeIconSmall,
  Wr as SkipLink,
  qd as SortStatusControl,
  wa as Spacing0,
  Ca as Spacing1,
  ja as Spacing2,
  Na as Spacing3,
  Ta as Spacing4,
  Ba as Spacing5,
  Fa as Spacing6,
  Da as Spacing7,
  Ma as Spacing8,
  Ra as Spacing9,
  sn as SpacingResponsive0Mobile,
  on as SpacingResponsive0Tablet,
  ln as SpacingResponsive1Mobile,
  cn as SpacingResponsive1Tablet,
  un as SpacingResponsive2Mobile,
  dn as SpacingResponsive2Tablet,
  hn as SpacingResponsive3Mobile,
  fn as SpacingResponsive3Tablet,
  mn as SpacingResponsive4Mobile,
  pn as SpacingResponsive4Tablet,
  gn as SpacingResponsive5Mobile,
  xn as SpacingResponsive5Tablet,
  bn as SpacingResponsive6Mobile,
  yn as SpacingResponsive6Tablet,
  kn as SpacingResponsive7Mobile,
  vn as SpacingResponsive7Tablet,
  _n as SpacingResponsive8Mobile,
  Sn as SpacingResponsive8Tablet,
  wn as SpacingResponsive9Mobile,
  Cn as SpacingResponsive9Tablet,
  _d as SpacingUtilities,
  Xu as StateDisabledBackground,
  Qu as StateDisabledBorder,
  ed as StateDisabledText,
  Au as StateErrorBackground,
  Pu as StateErrorBorder,
  Wu as StateErrorText,
  Ku as StateInfoBackground,
  Zu as StateInfoBorder,
  Ju as StateInfoText,
  Ou as StateSuccessBackground,
  Uu as StateSuccessBorder,
  Yu as StateSuccessText,
  Gu as StateWarningBackground,
  Vu as StateWarningBorder,
  qu as StateWarningText,
  wi as SummaryCard,
  Pd as SummaryList,
  Wd as Table,
  Od as Tabs,
  Fn as Tag,
  _i as TaskList,
  Za as Textarea,
  Zd as TransactionalPageTemplate,
  Pi as TransitionButtonDefault,
  Wi as TransitionButtonShadow,
  Ui as TransitionCardHover,
  Oi as TransitionInputFocus,
  jd as WIDTH_FRACTIONS,
  Ud as WarningCallout,
  Or as WidthContainer,
  wd as WidthUtilities,
  vh as checkFrutigerLoaded,
  xh as generateFrutigerFontFace,
  Jd as getResponsiveStyles,
  Sd as getSpacingClass,
  Cd as getWidthClass,
  bh as preloadFrutigerFonts,
  ch as useColors,
  fh as useComponentSpacing,
  mh as useNHSHeadings,
  ph as useNHSParagraphs,
  Bd as useNHSTheme,
  gh as useNHSTypographySystem,
  hh as useResponsiveSpacing,
  uh as useSpacing,
  lh as useTokens,
  dh as useTypography
};
//# sourceMappingURL=index.esm.js.map
